import katex from 'katex';

import React from 'react';

const parseMarkdownTables = (input: string): string => {
  if (!input || !input.includes('|')) return input;

  // Pattern matching a markdown table block (header, separator, data rows)
  const tableBlockRegex = /(?:^|\n)(\|.+?\|\s*\n\|(?:\s*:?-+:?\s*\|?)+\s*\n(?:\|.+?\|\s*(?:\n|$))+)/g;

  return input.replace(tableBlockRegex, (_match, tableBlock) => {
    const lines = tableBlock.trim().split('\n').map((l: string) => l.trim()).filter(Boolean);
    if (lines.length < 2) return _match;

    const parseRow = (rowStr: string) => {
      let s = rowStr.trim();
      if (s.startsWith('|')) s = s.slice(1);
      if (s.endsWith('|')) s = s.slice(0, -1);
      return s.split('|').map(cell => cell.trim());
    };

    const headers = parseRow(lines[0]);
    const isSep = lines[1].includes('---') || lines[1].includes('-|-');
    const dataLines = isSep ? lines.slice(2) : lines.slice(1);

    const ths = headers.map(h => `<th class="border border-gray-400 px-2 py-1">${h}</th>`).join('');
    
    const trs = dataLines.map((line: string) => {
      const cells = parseRow(line);
      const tds = cells.map(c => `<td class="border border-gray-400 px-2 py-1">${c}</td>`).join('');
      return `<tr>${tds}</tr>`;
    }).join('');

    return `\n<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      ${ths}
    </tr>
  </thead>
  <tbody>
    ${trs}
  </tbody>
</table>\n`;
  });
};

/**
 * Parses text containing LaTeX-like mathematical syntax and HTML tags, 
 * returning a React element with proper formatting.
 */
export const renderRichText = (text: string): React.ReactNode => {
  if (!text) return null;
  let cleanText = text;

  // Pre-sanitize control characters & JS template string artifacts (form feed \f -> \frac, tab \t -> \text, \times, etc.)
  cleanText = cleanText
    .replace(/[\x0C\f]rac/g, '\\frac')
    .replace(/[\x0C\f]/g, '\\f')
    .replace(/\t(ext|imes|heta|riangle|pm|approx|le|ge|ne|pi|alpha|beta|gamma)/g, '\\$1')
    .replace(/\bext\{/g, '\\text{')
    .replace(/\bextNew/g, '\\text{New}')
    .replace(/\bextold/g, '\\text{Old}')
    .replace(/\b1pmp/g, '1 \\pm p');

  // Escaped dollar signs (\$) are literal currency, not math delimiters
  cleanText = cleanText.replace(/\\\$/g, '@@DOLLARSIGN@@');

  // Clean double backslashes before LaTeX commands (e.g. \\pi -> \pi, \\frac -> \frac)
  cleanText = cleanText.replace(/\\\\([a-zA-Z]+)/g, '\\$1');

  // Ensure raw 'pi' or numeric '36pi' is converted to '\\pi' for KaTeX rendering
  cleanText = cleanText.replace(/(?<![\\a-zA-Z])\bpi\b(?![a-zA-Z])/gi, '\\pi');

  // Auto-wrap bare \frac{...}{...} or \\frac{...}{...} equations into KaTeX block if not inside $ or $$
  cleanText = cleanText.replace(/(^|\n|\s)(P(?:_\{[^}]+\})?\s*=\s*\\\\?frac\{[^{}]+\}\{[^{}]+\}[^\n$]*)/g, (_match, prefix, eq) => {
    return prefix + '$$ ' + eq.replace(/\\\\?frac/g, '\\frac').replace(/\\\\?text/g, '\\text').replace(/\\\\?times/g, '\\times').replace(/\\\\?approx/g, '\\approx') + ' $$';
  });

  // 0. Parse Markdown tables into standard HTML <table> structure (Rule #5)
  cleanText = parseMarkdownTables(cleanText);

  const katexPlaceholders: string[] = [];

  // 6.5. Block Math ($...$)
  cleanText = cleanText.replace(/\$\$([^$]+)\$\$/g, (_match, math) => {
    math = math.replace(/@@DOLLARSIGN@@/g, '\\$');
    try {
      const html = '<div class="my-2 text-center overflow-x-auto">' + katex.renderToString(math, { throwOnError: false, displayMode: true }) + '</div>';
      katexPlaceholders.push(html);
      return "@@KATEXMATCH" + (katexPlaceholders.length - 1) + "@@";
    } catch (e) {
      const html = '<div class="my-2 text-center font-serif italic text-[1.1em] text-purple-900 bg-purple-50/50 p-2 rounded">' + math + '</div>';
      katexPlaceholders.push(html);
      return "@@KATEXMATCH" + (katexPlaceholders.length - 1) + "@@";
    }
  });

  // 7. Styling Wrappers ($...$) -> Generic Math Styling
  cleanText = cleanText.replace(/\$([^$]+)\$/g, (_match, math) => {
    math = math.replace(/@@DOLLARSIGN@@/g, '\\$');
    // Prevent math regex from matching across HTML tags or table elements
    if (/<[a-z\/][^>]*>/i.test(math) || math.includes('class=') || math.includes('</') || math.includes('<td') || math.includes('<th') || math.includes('<tr')) {
      return _match;
    }
    try {
      const html = katex.renderToString(math, { throwOnError: false, displayMode: false });
      katexPlaceholders.push(html);
      return "@@KATEXMATCH" + (katexPlaceholders.length - 1) + "@@";
    } catch (e) {
      const html = '<span class="font-serif italic mx-1 text-[1.1em] text-purple-900 bg-purple-50/50 px-1 rounded inline-block">' + math + '</span>';
      katexPlaceholders.push(html);
      return "@@KATEXMATCH" + (katexPlaceholders.length - 1) + "@@";
    }
  });

  // Pre-process <table> elements: remove newlines and <br> inside tables to prevent browser hoisting of <br/> tags
  cleanText = cleanText.replace(/<table[\s\S]*?<\/table>/gi, (match) => {
    return match.replace(/<br\s*\/?>/gi, '').replace(/\r?\n|\r/g, '');
  });

  // Pre-process <svg> elements: remove newlines and <br> inside svgs
  cleanText = cleanText.replace(/<svg[\s\S]*?<\/svg>/gi, (match) => {
    return match.replace(/<br\s*\/?>/gi, '').replace(/\r?\n|\r/g, '');
  });

  // Clean up excess <br> tags immediately before or after <table> tags
  cleanText = cleanText.replace(/(?:<br\s*\/?>\s*)+(<table[\s>])/gi, '<br/>$1');
  cleanText = cleanText.replace(/(<\/table>)(?:\s*<br\s*\/?>)+/gi, '$1<br/>');

  // 0. Newlines to line breaks (preserves structure)
  cleanText = cleanText.replace(/\n/g, '<br/>');

  // Collapse consecutive <br/> tags into a single clean break
  cleanText = cleanText.replace(/(?:<br\s*\/?>\s*){2,}/gi, '<br/>');

  // 1. Basic Mathematical Symbols Map
  const symbols: Record<string, string> = {
    '\\\\le': '≤',
    '\\\\ge': '≥',
    '\\\\ne': '≠',
    '\\\\pi': 'π',
    '\\\\theta': 'θ',
    '\\\\alpha': 'α',
    '\\\\beta': 'β',
    '\\\\gamma': 'γ',
    '\\\\Delta': 'Δ',
    '\\\\times': '×',
    '\\\\cdot': '⋅',
    '\\\\div': '÷',
    '\\\\pm': '±',
    '\\\\approx': '≈',
    '\\\\infty': '∞',
    '\\\\circ': '°',
    '\\\\angle': '∠',
    '\\\\triangle': '△',
    '\\\\perp': '⊥',
    '\\\\parallel': '∥',
    '\\\\rightarrow': '→',
    '\\\\Rightarrow': '⇒',
    '\\\\%': '%'
  };

  // Replace symbols
  Object.keys(symbols).forEach(key => {
    // We use a regex with 'g' flag to replace all occurrences
    const reg = new RegExp(key, 'g');
    cleanText = cleanText.replace(reg, symbols[key]);
  });

  // Helper regex for up to 3 levels of nested braces
  const l0 = "[^{}]";
  const l1 = "(?:" + l0 + "|\\{" + l0 + "*\\})";
  const l2 = "(?:" + l0 + "|\\{" + l1 + "*\\})";
  const l3 = "(?:" + l0 + "|\\{" + l2 + "*\\})";
  const inner = "(" + l3 + "+)";

  // 2. Fractions: \frac{numerator}{denominator}
  // Loop to handle potential nested or multiple fractions
  let prevText = "";
  const fracRegex = new RegExp("\\\\frac\\s*\\{" + inner + "\\}\\s*\\{" + inner + "\\}", 'g');
  while (cleanText !== prevText) {
    prevText = cleanText;
    cleanText = cleanText.replace(fracRegex, 
        '<span class="inline-block text-center align-middle mx-1" style="vertical-align: middle;">' +
          '<span class="block border-b border-current pb-[1px] leading-none text-[0.85em] font-medium mb-[1px] px-1">$1</span>' +
          '<span class="block pt-[1px] leading-none text-[0.85em] font-medium px-1">$2</span>' +
        '</span>'
    );
  }

  // 3. Nth Roots: \sqrt[n]{x}
  const nthRootRegex = new RegExp("\\\\sqrt\\[(.*?)\\]\\{" + inner + "\\}", 'g');
  cleanText = cleanText.replace(nthRootRegex,
      '<span class="inline-flex items-center align-middle whitespace-nowrap">' +
        '<sup class="text-[0.6em] mr-[1px] -mb-2">$1</sup>' +
        '<span class="text-xl leading-none font-serif">√</span>' +
        '<span class="border-t border-current ml-[1px] pt-[2px] leading-none font-medium">$2</span>' +
      '</span>'
  );

  // 4. Square Roots: \sqrt{x} or sqrt(x)
  const sqrtRegex = new RegExp("\\\\sqrt\\s*\\{" + inner + "\\}", 'g');
  cleanText = cleanText.replace(sqrtRegex,
      '<span class="inline-flex items-center align-middle whitespace-nowrap">' +
        '<span class="text-xl leading-none font-serif">√</span>' +
        '<span class="border-t border-current ml-[1px] pt-[2px] leading-none font-medium">$1</span>' +
      '</span>'
  ).replace(/sqrt\(([^)]+)\)/g, 
      '<span class="inline-flex items-center align-middle whitespace-nowrap">' +
        '<span class="text-xl leading-none font-serif">√</span>' +
        '<span class="border-t border-current ml-[1px] pt-[2px] leading-none font-medium">$1</span>' +
      '</span>'
  );

  // 5. Superscripts (Exponents): x^2 or x^{2}
  // Handle curly braces version first to capture full group
  const supRegex = new RegExp("\\^\\{" + inner + "\\}", 'g');
  cleanText = cleanText.replace(supRegex, '<sup class="text-[0.7em]">$1</sup>');
  
  // Handle simple version (single digit/char)
  cleanText = cleanText.replace(/\^([0-9a-zA-Z]+)/g, '<sup class="text-[0.7em]">$1</sup>');

  // 6. Subscripts: x_2 or x_{2}
  // We use replace with a callback to avoid replacing inside HTML tags
  const subRegexGroups = new RegExp("(<[^>]+>)|_\\{" + inner + "\\}", 'g');
  cleanText = cleanText.replace(subRegexGroups, (_match, htmlTag, subContent) => {
    if (htmlTag) return htmlTag;
    return '<sub class="text-[0.7em]">' + subContent + '</sub>';
  });
  const subRegexSimple = /(<[^>]+>)|_([0-9a-zA-Z]+)/g;
  cleanText = cleanText.replace(subRegexSimple, (_match, htmlTag, subContent) => {
    if (htmlTag) return htmlTag;
    return '<sub class="text-[0.7em]">' + subContent + '</sub>';
  });
  
  // 8. Bold Markers (**text**)
  cleanText = cleanText.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');

  // 9. Markdown links: [Title](url)
  cleanText = cleanText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium inline-flex items-center gap-1">$1</a>');

  // Restore KaTeX HTML from placeholders
  katexPlaceholders.forEach((html, index) => {
    cleanText = cleanText.replace("@@KATEXMATCH" + index + "@@", html);
  });

  cleanText = cleanText.replace(/@@DOLLARSIGN@@/g, '&#36;');

  return React.createElement('div', { dangerouslySetInnerHTML: { __html: cleanText } });
};

/**
 * Helper to render SVG or Image strings safely
 */
export const renderSvgOrImage = (content: string) => {
    if (!content) return null;
    const trimmed = content.trim();
    // Simple check for raw URL/DataURI vs SVG code
    if (!trimmed.includes('<') && (trimmed.startsWith('http') || trimmed.startsWith('data:'))) {
        return React.createElement('img', { 
            src: trimmed, 
            alt: "Question Diagram", 
            className: "max-w-full h-auto rounded-lg mx-auto border border-gray-200", 
            style: { maxHeight: '400px' } 
        });
    }
    // If it's a table or HTML containing math or symbols, render with renderRichText
    if (trimmed.startsWith('<table') || trimmed.includes('<table')) {
        return renderRichText(content);
    }
    return React.createElement('div', { 
        dangerouslySetInnerHTML: { __html: content },
        className: "[&>svg]:w-full [&>svg]:h-auto [&>svg]:max-w-[620px] [&>svg]:mx-auto" 
    });
};
