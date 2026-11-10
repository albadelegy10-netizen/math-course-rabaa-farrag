const fs = require('fs');
const file = '/app/applet/utils/textRenderer.ts';
let code = fs.readFileSync(file, 'utf-8');

const blockMathSupport = `
  // 6.5. Block Math ($$...$$)
  cleanText = cleanText.replace(/\\$\\$([^$]+)\\$\\$/g, (_match, math) => {
    try {
      return '<div class="my-2 text-center overflow-x-auto">' + katex.renderToString(math, { throwOnError: false, displayMode: true }) + '</div>';
    } catch (e) {
      return \`<div class="my-2 text-center font-serif italic text-[1.1em] text-purple-900 bg-purple-50/50 p-2 rounded">\${math}</div>\`;
    }
  });

  // 7. Styling Wrappers ($...$) -> Generic Math Styling
`;

if (!code.includes('// 6.5. Block Math')) {
    code = code.replace('// 7. Styling Wrappers ($...$) -> Generic Math Styling', blockMathSupport);
    fs.writeFileSync(file, code, 'utf-8');
    console.log("Block math patched successfully!");
} else {
    console.log("Block math already patched.");
}
