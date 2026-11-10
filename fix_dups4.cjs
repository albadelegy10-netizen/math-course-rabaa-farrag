const fs = require('fs');

let content = fs.readFileSync('questions_est1_2026_jan.ts', 'utf8');

const index42 = content.indexOf('id: "est1_2026_jan_42"');
if (index42 !== -1) {
  const endOf71 = content.indexOf('id: "est1_2026_jan_71"');
  if (endOf71 !== -1) {
    const endOf71Obj = content.indexOf('}', endOf71);
    if (endOf71Obj !== -1) {
      content = content.substring(0, endOf71Obj + 1) + '\n];\n';
    }
  }
}

fs.writeFileSync('questions_est1_2026_jan.ts', content);
