const fs = require('fs');
let code = fs.readFileSync('src/data/questions_sat_2025_march_form_a.ts', 'utf8');

// There's a trailing 'id: 3\n  },' etc at the end of the file.
let match = code.match(/];id:\s*\d+/);
if (match) {
    let fix = code.substring(0, match.index + 2); // keep the ];
    fs.writeFileSync('src/data/questions_sat_2025_march_form_a.ts', fix);
    console.log("Fixed syntax error");
}
