const fs = require('fs');
let code = fs.readFileSync('questions.ts', 'utf-8');

const importStatement = `import { est2_rational_questions } from './questions_est2_rational';\n`;
const firstImport = code.indexOf('import');
code = code.slice(0, firstImport) + importStatement + code.slice(firstImport);

const mapping = `  [StaticLessonIds.EST2RationalFunction]: est2_rational_questions,\n`;
const mappingIndex = code.indexOf('[StaticLessonIds.EST2LinearPolynomial]');
const previousLine = code.lastIndexOf('\n', mappingIndex) + 1;
code = code.slice(0, previousLine) + mapping + code.slice(previousLine);

fs.writeFileSync('questions.ts', code);
console.log("Updated questions.ts");
