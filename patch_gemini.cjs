const fs = require('fs');
const file = '/app/applet/geminiService.ts';
let code = fs.readFileSync(file, 'utf-8');

code = code.replace(/console\.error\("AI Generation Error:", error\);/g, 'console.error("AI Generation Error:", error instanceof Error ? error.message : String(error));');
code = code.replace(/console\.error\("Image Gen Error:", error\);/g, 'console.error("Image Gen Error:", error instanceof Error ? error.message : String(error));');
code = code.replace(/console\.error\("Failed to upload page to storage:", e\);/g, 'console.error("Failed to upload page to storage:", e instanceof Error ? e.message : String(e));');
code = code.replace(/console\.error\("PDF Extraction Error:", error\);/g, 'console.error("PDF Extraction Error:", error instanceof Error ? error.message : String(error));');
code = code.replace(/console\.error\("Plan Generation Error:", error\);/g, 'console.error("Plan Generation Error:", error instanceof Error ? error.message : String(error));');
code = code.replace(/console\.error\("Rescue Plan Error:", error\);/g, 'console.error("Rescue Plan Error:", error instanceof Error ? error.message : String(error));');
code = code.replace(/console\.error\("Chat Error:", error\);/g, 'console.error("Chat Error:", error instanceof Error ? error.message : String(error));');

fs.writeFileSync(file, code, 'utf-8');
console.log("geminiService.ts patched.");
