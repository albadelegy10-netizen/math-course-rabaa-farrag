const fs = require('fs');

let content = fs.readFileSync('questions_est1_2026_jan.ts', 'utf8');

// Find all occurrences of backticks that might be unclosed
let count = 0;
for (let i = 0; i < content.length; i++) {
  if (content[i] === '`') count++;
}
console.log("Total backticks:", count);

// Find lines with odd number of backticks
const lines = content.split('\n');
let inTemplate = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  let backticksInLine = 0;
  for (let j = 0; j < line.length; j++) {
    if (line[j] === '`') backticksInLine++;
  }
  
  if (backticksInLine % 2 !== 0) {
    inTemplate = !inTemplate;
    console.log(`Line ${i + 1} has an odd number of backticks (${backticksInLine}). inTemplate is now ${inTemplate}`);
    console.log(line);
  }
}
