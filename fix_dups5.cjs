const fs = require('fs');

let content = fs.readFileSync('questions_est1_2026_jan.ts', 'utf8');

const index1 = content.indexOf('id: "est1_2026_jan_1"');
const secondIndex1 = content.indexOf('id: "est1_2026_jan_1"', index1 + 1);

if (secondIndex1 !== -1) {
  // Find where the second array starts, which is likely right before this
  const startOfSecond = content.lastIndexOf('{', secondIndex1);
  if (startOfSecond !== -1) {
    content = content.substring(0, startOfSecond).trim();
    if (content.endsWith(',')) {
      content = content.substring(0, content.length - 1);
    }
    content += '\n];\n';
  }
}

fs.writeFileSync('questions_est1_2026_jan.ts', content);
