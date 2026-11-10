const fs = require('fs');
const file = '/app/applet/utils/textRenderer.ts';
let code = fs.readFileSync(file, 'utf-8');

if (!code.includes("import katex from 'katex'")) {
    code = "import katex from 'katex';\n" + code;
    
    // Replace the specific regex for $...$ with a callback that uses katex
    const oldRegexLine = "cleanText = cleanText.replace(/\\$([^$]+)\\$/g, '<span class=\"font-serif italic mx-1 text-[1.1em] text-purple-900 bg-purple-50/50 px-1 rounded inline-block\">$1</span>');";
    
    const newReplacement = `cleanText = cleanText.replace(/\\$([^$]+)\\$/g, (_match, math) => {
    try {
      return katex.renderToString(math, { throwOnError: false, displayMode: false });
    } catch (e) {
      return \`<span class="font-serif italic mx-1 text-[1.1em] text-purple-900 bg-purple-50/50 px-1 rounded inline-block">\${math}</span>\`;
    }
  });`;

    code = code.replace(oldRegexLine, newReplacement);
    
    fs.writeFileSync(file, code, 'utf-8');
    console.log("KaTeX patched successfully!");
} else {
    console.log("KaTeX already patched.");
}
