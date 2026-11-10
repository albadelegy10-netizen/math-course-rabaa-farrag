const fs = require('fs');
const file = '/app/applet/geminiService.ts';
let code = fs.readFileSync(file, 'utf-8');

code = code.replace(
  "4. **GRAPHS/FIGURES/TABLES**: If a question contains a graph, figure, or table, you MUST recreate it using HTML/SVG code or Markdown tables and include it directly inside the 'question' text. Do NOT just say \"refer to the graph\". Recreate the visual information accurately.",
  "4. **GRAPHS/FIGURES/TABLES**: If a question contains an image, graph, figure, or table, you MUST convert it into a base64 string and include it directly inside the 'question' text. Do NOT use SVG."
);

fs.writeFileSync(file, code, 'utf-8');
console.log("geminiService.ts prompt patched.");
