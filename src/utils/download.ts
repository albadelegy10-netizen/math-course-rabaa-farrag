import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import jsPDF from 'jspdf';

export const downloadWord = async (exam: any) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: exam.name,
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: `Course: ${exam.course}`,
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({ text: "" }), // Empty line
          ...exam.questions.flatMap((q: any, i: number) => {
            const children = [
              new Paragraph({
                children: [
                  new TextRun({ text: `Question ${i + 1}: `, bold: true }),
                ],
              }),
            ];
            
            // Add question text lines
            const questionText = q.question || q.plainText || '';
            const lines = questionText.split('\n').filter((l: string) => l.trim() !== '');
            lines.forEach((line: string) => {
              if (line.trim()) {
                children.push(new Paragraph({ text: line.trim() }));
              }
            });

            // Add options
            const options = q.optionsPlainText || q.options;
            options.forEach((opt: string) => {
               if (opt.trim()) {
                 children.push(new Paragraph({ text: `  ${opt}` }));
               }
            });

            children.push(new Paragraph({ text: "" })); // Spacing between questions
            return children;
          }),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${exam.name}.docx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};

export const downloadPdf = (exam: any) => {
  const doc = new jsPDF();
  
  doc.setFontSize(18);
  doc.text(exam.name, 10, 20);
  
  doc.setFontSize(14);
  doc.text(`Course: ${exam.course}`, 10, 30);
  
  doc.setFontSize(12);
  let y = 40;
  const pageHeight = doc.internal.pageSize.height;
  
  exam.questions.forEach((q: any, i: number) => {
    // Add question title
    doc.setFont("helvetica", "bold");
    doc.text(`Question ${i + 1}:`, 10, y);
    y += 7;
    
    doc.setFont("helvetica", "normal");
    const questionText = q.question || q.plainText || '';
    const lines = questionText.split('\n').filter((l: string) => l.trim() !== '');
    
    lines.forEach((line: string) => {
      // Split long lines
      const splitLines = doc.splitTextToSize(line, 180);
      splitLines.forEach((splitLine: string) => {
         if (y > pageHeight - 20) {
            doc.addPage();
            y = 20;
         }
         doc.text(splitLine, 10, y);
         y += 7;
      });
    });

    const options = q.optionsPlainText || q.options;
    options.forEach((opt: string) => {
      if (opt.trim() !== '') {
        if (y > pageHeight - 20) {
            doc.addPage();
            y = 20;
        }
        doc.text(`  ${opt}`, 10, y);
        y += 7;
      }
    });
    
    y += 5; // Extra space between questions
  });
  
  doc.save(`${exam.name}.pdf`);
};
