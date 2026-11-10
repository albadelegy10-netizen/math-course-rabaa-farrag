const fs = require('fs');
let code = fs.readFileSync('utils/textRenderer.ts', 'utf-8');

// Remove 6.5 and 7 from the bottom
code = code.replace(/\/\/ 6\.5\. Block Math \(\$\.\.\.\$\)[\s\S]*?\/\/ 8\. Bold Markers/g, '// 8. Bold Markers');

// Insert them right after let cleanText = text;
const blockAndInline = `
  // 6.5. Block Math ($...$)
  cleanText = cleanText.replace(/\\$\\$([^$]+)\\$\\$/g, (_match, math) => {
    try {
      return '<div class="my-2 text-center overflow-x-auto">' + katex.renderToString(math, { throwOnError: false, displayMode: true }) + '</div>';
    } catch (e) {
      return \`<div class="my-2 text-center font-serif italic text-[1.1em] text-purple-900 bg-purple-50/50 p-2 rounded">\${math}</div>\`;
    }
  });

  // 7. Styling Wrappers ($...$) -> Generic Math Styling
  cleanText = cleanText.replace(/\\$([^$]+)\\$/g, (_match, math) => {
    try {
      return katex.renderToString(math, { throwOnError: false, displayMode: false });
    } catch (e) {
      return \`<span class="font-serif italic mx-1 text-[1.1em] text-purple-900 bg-purple-50/50 px-1 rounded inline-block">\${math}</span>\`;
    }
  });
`;

code = code.replace(
  "  let cleanText = text;\n",
  "  let cleanText = text;\n\n" + blockAndInline + "\n"
);

fs.writeFileSync('utils/textRenderer.ts', code);
console.log("Patched textRenderer.ts");
