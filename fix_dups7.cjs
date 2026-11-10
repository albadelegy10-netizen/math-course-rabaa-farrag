const fs = require('fs');

let content = fs.readFileSync('questions_est1_2026_jan.ts', 'utf8');

const index48 = content.indexOf('id: "est1_2026_jan_48"');
if (index48 !== -1) {
  const endOf48Obj = content.indexOf('}', index48);
  if (endOf48Obj !== -1) {
    content = content.substring(0, endOf48Obj + 1) + '\n];\n';
  }
}

fs.writeFileSync('questions_est1_2026_jan.ts', content);
