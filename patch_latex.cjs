const fs = require('fs');
const file = '/app/applet/utils/documentGenerator.ts';
let code = fs.readFileSync(file, 'utf-8');

const startIdx = code.indexOf('export const convertLatexToPlain = (text: string): string => {');
const endIdx = code.indexOf('const processTextAsync = async (html: string | undefined | null) => {');

if (startIdx !== -1 && endIdx !== -1) {
    const replacement = `export const convertLatexToPlain = (text: string): string => {
  if (!text) return text;
  let cleanText = text;

  // Remove unnecessary empty lines
  cleanText = cleanText.replace(/\\n\\s*\\n+/g, '\\n').trim();

  return cleanText;
};\n\n`;
    const newCode = code.substring(0, startIdx) + replacement + code.substring(endIdx);
    fs.writeFileSync(file, newCode, 'utf-8');
    console.log("Patched successfully!");
} else {
    console.log("Could not find boundaries.");
}
