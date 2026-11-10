const fs = require('fs');
let code = fs.readFileSync('questions.ts', 'utf-8');

const mapping = `  [StaticLessonIds.EST2RationalFunction]: est2_rational_questions,\n`;
const mappingIndex = code.indexOf('[StaticLessonIds.EST2EvenOdd]');
const previousLine = code.lastIndexOf('\n', mappingIndex) + 1;
code = code.slice(0, previousLine) + mapping + code.slice(previousLine);

fs.writeFileSync('questions.ts', code);
console.log("Added mapping correctly.");
