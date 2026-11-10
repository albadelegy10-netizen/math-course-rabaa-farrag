const fs = require('fs');

function fixImport(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace("from '../types'", "from '../../types'");
  fs.writeFileSync(file, content);
}

fixImport('src/data/questions_est1_probability_part1.ts');
fixImport('src/data/questions_act1_malek_exam.ts');

let typesContent = fs.readFileSync('types.ts', 'utf8');
if (typesContent.includes('EST1LinearEquationWord')) {
  // Just confirming types is ok.
}
