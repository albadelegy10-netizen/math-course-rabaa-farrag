const fs = require('fs');

let content = fs.readFileSync('questions_est1_2026_jan.ts', 'utf8');

const index42 = content.indexOf('id: "est1_2026_jan_42"');
const secondIndex42 = content.indexOf('id: "est1_2026_jan_42"', index42 + 1);

if (secondIndex42 !== -1) {
  const startOfSecond = content.lastIndexOf('{', secondIndex42);
  if (startOfSecond !== -1) {
    content = content.substring(0, startOfSecond).trim();
    if (content.endsWith(',')) {
      content = content.substring(0, content.length - 1);
    }
    content += '\n];\n';
  }
}

fs.writeFileSync('questions_est1_2026_jan.ts', content);
