const fs = require('fs');

let content = fs.readFileSync('questions_est1_2026_jan.ts', 'utf8');

// Find the first occurrence of est1_2026_jan_41
const index41 = content.indexOf('id: "est1_2026_jan_41"');
if (index41 !== -1) {
  // Find the closing brace and bracket after it
  const endOf41 = content.indexOf('];', index41);
  if (endOf41 !== -1) {
    content = content.substring(0, endOf41 + 2);
  }
}

fs.writeFileSync('questions_est1_2026_jan.ts', content);
