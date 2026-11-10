import { saveAs } from "file-saver";
import { Lesson, Question } from "../types";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, ImageRun } from "docx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { authService } from "../authService";

const getBase64FromUrl = async (url: string): Promise<string> => {
  if (url.startsWith("data:image")) return url;
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  } catch (e) {
    return "[IMAGE_COULD_NOT_BE_LOADED]";
  }
};

export const convertTableToFormattedText = (tableEl: Element): string => {
  const trs = Array.from(tableEl.querySelectorAll("tr"));
  if (trs.length === 0) return "";

  const grid: string[][] = [];
  for (const tr of trs) {
    const cells = Array.from(tr.querySelectorAll("th, td"));
    if (cells.length === 0) continue;
    const rowValues = cells.map(cell => {
      let cellText = cell.textContent || cell.innerHTML || "";
      cellText = cellText.replace(/<[^>]+>/g, "").replace(/[\r\n\t]+/g, " ").trim();
      return cellText;
    });
    grid.push(rowValues);
  }

  if (grid.length === 0) return "";

  const maxCols = Math.max(...grid.map(row => row.length));
  if (maxCols === 0) return "";

  for (const row of grid) {
    while (row.length < maxCols) {
      row.push("");
    }
  }

  const colWidths: number[] = [];
  for (let c = 0; c < maxCols; c++) {
    let maxW = 3;
    for (let r = 0; r < grid.length; r++) {
      const cellLen = grid[r][c].length;
      if (cellLen > maxW) maxW = cellLen;
    }
    colWidths.push(maxW);
  }

  const borderLine = "+" + colWidths.map(w => "-".repeat(w + 2)).join("+") + "+";
  const lines: string[] = [];
  lines.push(borderLine);

  for (let r = 0; r < grid.length; r++) {
    const row = grid[r];
    const rowStr = "| " + row.map((cell, c) => cell.padEnd(colWidths[c])).join(" | ") + " |";
    lines.push(rowStr);

    if (r === 0) {
      lines.push(borderLine);
    }
  }

  if (grid.length > 1) {
    lines.push(borderLine);
  }

  return lines.join("\n");
};

export const convertLatexToPlain = (text: string): string => {
  if (!text) return "";
  let s = text;

  // 0. Clean double backslashes before LaTeX commands
  s = s.replace(/\\\\([a-zA-Z]+)/g, "\\$1");

  // 0.1 Decode any [TABLE_BASE64: ...] placeholders into formatted ASCII tables
  s = s.replace(/\[TABLE_BASE64:\s*data:text\/html;base64,([A-Za-z0-9+/=]+)\]/g, (_m, b64Str) => {
    try {
      const htmlStr = decodeURIComponent(escape(atob(b64Str)));
      const tmpDoc = document.createElement("template");
      tmpDoc.innerHTML = htmlStr;
      const tbl = tmpDoc.content.querySelector("table");
      if (tbl) {
        return "\n" + convertTableToFormattedText(tbl) + "\n";
      }
    } catch (e) {}
    return "";
  });

  // 0.2 If raw HTML <table> tags are present, parse & format them
  if (s.toLowerCase().includes("<table")) {
    try {
      const tmpDoc = document.createElement("template");
      tmpDoc.innerHTML = s;
      const tables = tmpDoc.content.querySelectorAll("table");
      for (let i = 0; i < tables.length; i++) {
        const tbl = tables[i];
        const formatted = convertTableToFormattedText(tbl);
        const txt = document.createTextNode(`\n${formatted}\n`);
        tbl.parentNode?.replaceChild(txt, tbl);
      }
      s = tmpDoc.content.textContent || tmpDoc.innerHTML || s;
    } catch (e) {}
  }

  // 1. Remove HTML tags if present
  s = s.replace(/<br\s*\/?>/gi, "\n")
       .replace(/<\/p>/gi, "\n")
       .replace(/<[^>]+>/g, "");

  // 2. Unescape HTML entities
  s = s.replace(/&nbsp;/g, " ")
       .replace(/&lt;/g, "<")
       .replace(/&gt;/g, ">")
       .replace(/&amp;/g, "&")
       .replace(/&quot;/g, '"')
       .replace(/&#39;/g, "'");

  // 3. Process \text{...}, \mathrm{...}, \mathbf{...}
  s = s.replace(/\\(text|mathrm|mathbf|mathit)\{([^{}]+)\}/g, "$2");

  // 4. Process fractions recursively \frac{A}{B} -> A/B
  let prevS = "";
  while (s !== prevS) {
    prevS = s;
    s = s.replace(/\\frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, (_match, num, den) => {
      const cleanNum = num.trim();
      const cleanDen = den.trim();

      const numNeedsParens = /[+\-\s]/.test(cleanNum) && !/^\(.*\)$/.test(cleanNum);
      const denNeedsParens = /[+\-\s]/.test(cleanDen) && !/^\(.*\)$/.test(cleanDen);

      const formattedNum = numNeedsParens ? `(${cleanNum})` : cleanNum;
      const formattedDen = denNeedsParens ? `(${cleanDen})` : cleanDen;

      return `${formattedNum}/${formattedDen}`;
    });
  }

  // 5. Process square roots \sqrt[n]{x} and \sqrt{x}
  s = s.replace(/\\sqrt\s*\[([^{}]+)\]\s*\{([^{}]+)\}/g, "($2)^(1/$1)");
  s = s.replace(/\\sqrt\s*\{([^{}]+)\}/g, "√($1)");
  s = s.replace(/\\sqrt\s*([a-zA-Z0-9])/g, "√$1");

  // 6. Process superscripts ^2, ^3, ^{expr}
  const superscripts: Record<string, string> = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
    '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
    'n': 'ⁿ', 'x': 'ˣ'
  };

  s = s.replace(/\^\{([^{}]+)\}/g, (_match, exp) => {
    const chars = exp.split('');
    if (chars.every((c: string) => superscripts[c] !== undefined)) {
      return chars.map((c: string) => superscripts[c]).join('');
    }
    return `^(${exp})`;
  });

  s = s.replace(/\^([0-9n])/g, (_match, exp) => superscripts[exp] || `^${exp}`);

  // 7. Math symbols replacement (including pi symbol π)
  const symbolMap: [RegExp, string][] = [
    [/\\times/g, "×"],
    [/\\div/g, "÷"],
    [/\\pm/g, "±"],
    [/\\mp/g, "∓"],
    [/\\cdot/g, "·"],
    [/\\approx/g, "≈"],
    [/\\neq/g, "≠"],
    [/\\leq?/g, "≤"],
    [/\\geq?/g, "≥"],
    [/\\infty/g, "∞"],
    [/\\pi\b/gi, "π"],
    [/(?<![a-zA-Z])pi\b/gi, "π"],
    [/\\theta/g, "θ"],
    [/\\alpha/g, "α"],
    [/\\beta/g, "β"],
    [/\\degree/g, "°"],
    [/\\\^\s*\{\s*\\circ\s*\}/g, "°"],
    [/\\\^\s*\\circ/g, "°"],
    [/\\angle/g, "∠"],
    [/\\triangle/g, "△"],
    [/\\parallel/g, "∥"],
    [/\\perp/g, "⊥"],
    [/\\rightarrow|\\to/g, "→"],
    [/\\implies/g, "⇒"],
    [/\\%/g, "%"],
    [/\\left[\(\[\{]/g, "("],
    [/\\right[\)\]\}]/g, ")"]
  ];

  for (const [regex, replacement] of symbolMap) {
    s = s.replace(regex, replacement);
  }

  // 8. Remove dollar signs and LaTeX math delimiters
  s = s.replace(/\$\$/g, " ")
       .replace(/\$/g, "")
       .replace(/\\\(|\\\)/g, "")
       .replace(/\\\[|\\\]/g, "");

  // 9. Clean up extra spaces around backslashes or remaining commands
  s = s.replace(/\\([a-zA-Z]+)/g, "$1");

  // 10. Clean up multiple empty lines & whitespace (Rule 2 requirement)
  s = s.split("\n")
       .map(line => line.trim())
       .filter(line => line.length > 0)
       .join("\n");

  return s;
};

const processTextAsync = async (html: string | undefined | null) => {
  if (!html) return "";

  const tmp = document.createElement("template");
  tmp.innerHTML = html.replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n");

  const images = tmp.content.querySelectorAll("img");
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    if (img.src) {
      const b64 = await getBase64FromUrl(img.src);
      const txt = document.createTextNode(`\n[IMAGE_BASE64: ${b64}]\n`);
      img.parentNode?.replaceChild(txt, img);
    }
  }

  const tables = tmp.content.querySelectorAll("table");
  for (let i = 0; i < tables.length; i++) {
    const table = tables[i];
    try {
      const formatted = convertTableToFormattedText(table);
      const txt = document.createTextNode(`\n${formatted}\n`);
      table.parentNode?.replaceChild(txt, table);
    } catch (e) {}
  }

  const svgs = tmp.content.querySelectorAll("svg");
  for (let i = 0; i < svgs.length; i++) {
    const svg = svgs[i];
    try {
      const b64 = btoa(unescape(encodeURIComponent(svg.outerHTML)));
      const txt = document.createTextNode(
        `\n[GRAPH_BASE64: data:image/svg+xml;base64,${b64}]\n`,
      );
      svg.parentNode?.replaceChild(txt, svg);
    } catch (e) {}
  }

  let text = tmp.content.textContent || "";

  const mdImgRegex = /!\[.*?\]\((.*?)\)/g;
  const matches = [...text.matchAll(mdImgRegex)];
  for (const m of matches) {
    const url = m[1];
    const b64 = await getBase64FromUrl(url);
    text = text.replace(m[0], `\n[IMAGE_BASE64: ${b64}]\n`);
  }

  // Cleanup whitespace: delete all consecutive empty lines
  text = text.replace(/(\n\s*)+/g, "\n").trim();

  return text;
};

const convertBase64UrlToPngBase64 = async (base64Url: string): Promise<{ base64: string, width: number, height: number } | null> => {
  if (!base64Url || base64Url === "[IMAGE_COULD_NOT_BE_LOADED]") return null;
  const src = base64Url.startsWith('data:') ? base64Url : `data:image/png;base64,${base64Url}`;
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      }
      const dataUrl = canvas.toDataURL("image/png");
      resolve({
        base64: dataUrl.split(",")[1],
        width: img.width,
        height: img.height,
      });
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
};

const processLineForDocx = async (line: string, targetChildren: any[], prefix: string = '', isBold: boolean = false) => {
  const imgMatch = line.match(/\[(?:IMAGE|GRAPH|EXPLANATION_GRAPH|TABLE)_BASE64:\s*(.+?)\]/);
  if (imgMatch) {
    const base64Str = imgMatch[1];
    const pngData = await convertBase64UrlToPngBase64(base64Str);
    if (pngData) {
      let w = pngData.width;
      let h = pngData.height;
      if (w > 500) { h = (500 / w) * h; w = 500; }
      const buffer = Uint8Array.from(atob(pngData.base64), c => c.charCodeAt(0));
      targetChildren.push(new Paragraph({
        children: [
          ...(prefix ? [new TextRun({ text: convertLatexToPlain(prefix), bold: isBold })] : []),
          new ImageRun({
            data: buffer,
            transformation: { width: w, height: h },
            type: "png"
          })
        ]
      }));
      return;
    }
  }
  targetChildren.push(new Paragraph({
    children: [
      ...(prefix ? [new TextRun({ text: convertLatexToPlain(prefix), bold: isBold })] : []),
      new TextRun({ text: convertLatexToPlain(line), bold: isBold })
    ]
  }));
};

/**
 * Export questions to a formatted PDF using jsPDF and autoTable with LaTeX math support
 */
export const generateAutoTablePDF = async (
  lessonOrTitle: Lesson | string,
  questions: Question[],
  mode: "student_exam" | "teacher_key" = "student_exam",
  subtitle?: string
) => {
  const rawTitle = typeof lessonOrTitle === "string" ? lessonOrTitle : (lessonOrTitle.title || "Math Questions");
  const title = convertLatexToPlain(rawTitle);
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;

  const currentUser = authService.getCurrentUser();
  const defaultInstructor = "Eng Rabaa Farrag - 01120486569";
  const userName = (currentUser?.name && currentUser.name !== 'Administrator' && currentUser.name !== 'admin')
    ? `${currentUser.name} (${defaultInstructor})`
    : defaultInstructor;

  // Header Banner
  doc.setFillColor(219, 39, 119); // #db2777 Pink accent
  doc.rect(0, 0, pageWidth, 26, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text(title.toUpperCase(), 14, 11);

  // Author / Instructor Name added at top right of PDF header
  doc.setFontSize(10.5);
  doc.setFont("helvetica", "bold");
  doc.text(`Instructor: ${userName}`, pageWidth - 14, 11, { align: "right" });

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  const modeLabel = mode === "teacher_key" ? "Teacher Answer Key" : "Student Exam";
  const subText = subtitle ? `${subtitle} | Mode: ${modeLabel} | Questions: ${questions.length}` : `Mode: ${modeLabel} | Total Questions: ${questions.length}`;
  doc.text(subText, 14, 19);

  // Build table data (excluding Topic / Category column as requested)
  const tableData: any[] = [];
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const qText = convertLatexToPlain(await processTextAsync(q.question));

    let optionsText = "";
    if (q.options && q.options.length > 0) {
      optionsText = q.options
        .map((opt, oIdx) => `${String.fromCharCode(65 + oIdx)}) ${convertLatexToPlain(opt)}`)
        .join("\n");
    }

    let answerDetails = "";
    if (mode === "teacher_key") {
      let correctLetter = "N/A";
      if (q.options && q.options.length > 0) {
        if (typeof q.correctAnswer === "number" && !isNaN(q.correctAnswer)) {
          correctLetter = String.fromCharCode(65 + q.correctAnswer);
        } else if (typeof q.correctAnswer === "string") {
          correctLetter = q.correctAnswer;
        }
      } else if (q.answerText) {
        correctLetter = q.answerText;
      }
      answerDetails = `\n\n✓ Correct Answer: ${correctLetter}`;
      if (q.explanation) {
        answerDetails += `\nExplanation:\n${convertLatexToPlain(await processTextAsync(q.explanation))}`;
      }
    }

    const optionsCol = optionsText + (mode === "teacher_key" ? answerDetails : "");

    tableData.push([
      `Q${i + 1}`,
      qText,
      optionsCol
    ]);
  }

  // Generate PDF Table using autoTable with clean headers
  const colHeaderOptions = mode === "teacher_key" ? "Options & Answer" : "Options";
  autoTable(doc, {
    startY: 30,
    head: [["#", "Question", colHeaderOptions]],
    body: tableData,
    theme: "striped",
    headStyles: {
      fillColor: [219, 39, 119],
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 10.5,
      halign: "left"
    },
    alternateRowStyles: {
      fillColor: [252, 245, 248]
    },
    styles: {
      fontSize: 10,
      font: "helvetica",
      cellPadding: 5,
      overflow: "linebreak",
      valign: "top",
      lineColor: [230, 230, 230],
      lineWidth: 0.2
    },
    columnStyles: {
      0: { cellWidth: 14, fontStyle: "bold", halign: "center" },
      1: { cellWidth: 114 },
      2: { cellWidth: 54 }
    },
    margin: { top: 30, bottom: 15, left: 14, right: 14 },
    didDrawPage: () => {
      const pageStr = `Page ${doc.getNumberOfPages()}`;
      doc.setFontSize(8.5);
      doc.setTextColor(150, 150, 150);
      doc.text(pageStr, pageWidth - 20, doc.internal.pageSize.height - 8);
    }
  });

  const filename = title.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  doc.save(`${filename}_${mode}.pdf`);
};

export const generateWord = async (
  lessonOrTitle: Lesson | string,
  questions: Question[],
  mode: "student_exam" | "teacher_key" = "student_exam",
  questionImages?: string[],
) => {
  const rawTitle = typeof lessonOrTitle === "string" ? lessonOrTitle : (lessonOrTitle.title || "Exam");
  const lessonTitle = convertLatexToPlain(rawTitle);
  const studyNotes = typeof lessonOrTitle === "string" ? undefined : lessonOrTitle.studyNotes;

  const children: any[] = [
    new Paragraph({
      text:
        mode === "teacher_key"
          ? `${lessonTitle} - Answer Key`
          : `${lessonTitle} - Exam`,
      heading: HeadingLevel.HEADING_1,
    }),
    new Paragraph({ text: "" }),
  ];

  if (studyNotes) {
    const notes = await processTextAsync(studyNotes);
    const lines = notes.split("\n");
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim()) await processLineForDocx(lines[i].trim(), children);
    }
  }

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];

    const qText = await processTextAsync(q.question);
    const qLines = qText.split("\n").filter((line) => line.trim());

    if (qLines.length > 0) {
       await processLineForDocx(qLines[0].trim(), children, `Question ${i + 1}: `, true);
       for (let j = 1; j < qLines.length; j++) {
          await processLineForDocx(qLines[j].trim(), children);
       }
    } else {
       children.push(new Paragraph({ children: [new TextRun({ text: `Question ${i + 1}: `, bold: true })] }));
    }

    if (questionImages && questionImages[i]) {
      await processLineForDocx(`[IMAGE_BASE64: ${questionImages[i]}]`, children);
    }

    if (q.imageUrl && (!questionImages || !questionImages[i])) {
      const b64 = await getBase64FromUrl(q.imageUrl);
      await processLineForDocx(`[IMAGE_BASE64: ${b64}]`, children);
    }

    if (q.svg && (!questionImages || !questionImages[i])) {
      try {
        const b64 = btoa(unescape(encodeURIComponent(q.svg)));
        await processLineForDocx(`[GRAPH_BASE64: data:image/svg+xml;base64,${b64}]`, children);
      } catch (e) {}
    }

    if (q.options && q.options.length > 0) {
      for (let oIdx = 0; oIdx < q.options.length; oIdx++) {
        const opt = q.options[oIdx];
        const letter = String.fromCharCode(65 + oIdx);
        const optText = await processTextAsync(opt);
        const lines = optText.split("\n").filter(l => l.trim());
        if (lines.length === 0) {
            await processLineForDocx("", children, `  ${letter}) `);
        } else {
            await processLineForDocx(lines[0].trim(), children, `  ${letter}) `);
            for (let j = 1; j < lines.length; j++) {
                await processLineForDocx(lines[j].trim(), children, `      `);
            }
        }
      }
    }

    if (mode === "teacher_key") {
      const ansTxt =
        q.options && q.options.length > 0
          ? String.fromCharCode(65 + Number(q.correctAnswer))
          : await processTextAsync(q.answerText);
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: `Correct Answer: `, bold: true }),
            new TextRun(ansTxt.trim()),
          ],
        }),
      );
      if (q.explanation) {
        const exp = await processTextAsync(q.explanation);
        const lines = exp.split("\n").filter((l) => l.trim());
        if (lines.length > 0) {
            await processLineForDocx(lines[0].trim(), children, "Explanation: ", true);
            for (let j = 1; j < lines.length; j++) {
               await processLineForDocx(lines[j].trim(), children);
            }
        }
      }
      if (q.explanationSvg) {
        try {
          const b64 = btoa(unescape(encodeURIComponent(q.explanationSvg)));
          await processLineForDocx(`[EXPLANATION_GRAPH_BASE64: data:image/svg+xml;base64,${b64}]`, children);
        } catch (e) {}
      }
    }
  }

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: children,
      },
    ],
  });

  try {
    const blob = await Packer.toBlob(doc);
    const filename = lessonTitle.replace(/[^a-z0-9]/gi, "_").toLowerCase();
    saveAs(blob, `${filename}_${mode}.docx`);
  } catch (e: any) {
    console.error("Packer serialization error:", e.message);
    throw e;
  }
};

export const generatePDF = async (
  lessonOrTitle: Lesson | string,
  questions: Question[],
  mode: "student_exam" | "teacher_key" = "student_exam"
) => {
  // Delegate to autoTable PDF generator for clean structured PDF output
  return generateAutoTablePDF(lessonOrTitle, questions, mode);
};

export const generateBookWord = async (
  _chapters: any[],
  mode: any,
  _bookTitle: string,
) => {
  const blob = new Blob(["Math Book Content\n"], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, `book_${mode}.docx`);
};

export const generateBookLatex = async (
  _chapters: any[],
  mode: any,
  _bookTitle: string,
) => {
  const blob = new Blob(["Math Book Content\n"], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, `book_${mode}.tex`);
};

