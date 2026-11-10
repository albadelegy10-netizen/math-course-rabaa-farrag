const fs = require('fs');

const text = fs.readFileSync('oct22.txt', 'utf8');

const answersWoCalc = ['B', 'D', 'B', 'C', 'C', 'A', 'B', 'D', 'A', 'B', 'D', 'B', 'D', 'D', 'C', 'A', 'B', 'B', 'C', 'A'];
const answersWithCalc = ['C', 'A', 'C', 'C', 'A', 'D', 'D', 'A', 'A', 'B', 'C', 'D', 'C', 'B', 'B', 'A', 'C', 'D', 'C', 'B', 'D', 'A', 'C', 'B', 'D', 'B', 'A', 'C', 'C', 'B', 'A', 'C', 'A', 'B', 'D', 'C', 'C', 'A'];

const lines = text.split('\n');
let questions = [];
let mode = 'w/o'; 
let currentQ = null;

let isParsingOptions = false;
let currentQuestionText = [];
let currentOptions = [];
let currentCategory = 'Math w/o Calculator';

for (let i = 0; i < lines.length; i++) {
  let line = lines[i].trim();
  if (!line) continue;
  
  if (line === 'EST I – Math with Calculator') {
    mode = 'with';
    currentCategory = 'Math with Calculator';
    continue;
  }
  if (line === 'EST I – Math w/o Calculator') continue;

  // matches "1. "
  const qMatch = line.match(/^(\d+)\.\s+(.*)$/);
  
  if (qMatch) {
    if (currentQ) {
      questions.push({ q: currentQ, text: currentQuestionText, options: currentOptions, cat: currentCategory, id: currentQ.num, isCalc: mode === 'with' });
    }
    currentQ = { num: parseInt(qMatch[1]) };
    currentQuestionText = [qMatch[2]];
    currentOptions = [];
    isParsingOptions = false;
  } else if (line.match(/^[A-D]\.\s+(.*)$/)) {
    isParsingOptions = true;
    currentOptions.push(line);
  } else {
    if (isParsingOptions) {
      currentOptions[currentOptions.length - 1] += ' ' + line;
    } else {
      currentQuestionText.push(line);
    }
  }
}
if (currentQ) {
  questions.push({ q: currentQ, text: currentQuestionText, options: currentOptions, cat: currentCategory, id: currentQ.num, isCalc: mode === 'with' });
}

let TS_CONTENT = `import { Question } from '../types';

export const EST1_2022_MARCH: Question[] = [\n`;

questions.forEach((qObj) => {
  const ansArray = qObj.isCalc ? answersWithCalc : answersWoCalc;
  const ansLetter = ansArray[qObj.id - 1]; // 1-based index
  let ansIdx = 0;
  if (ansLetter === 'A') ansIdx = 0;
  if (ansLetter === 'B') ansIdx = 1;
  if (ansLetter === 'C') ansIdx = 2;
  if (ansLetter === 'D') ansIdx = 3;

  const qText = qObj.text.join('\\n').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "\\'");
  const opts = qObj.options.map(o => o.replace(/^[A-D]\.\s+/, '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "\\'"));
  
  let formattedOpts = opts.map(o => `      \`${o}\``).join(',\n');
  TS_CONTENT += `  {
    id: 'est1_2022_march_${qObj.isCalc ? 'calc_' : 'nocalc_'}${qObj.id}',
    question: \`${qText}\`,
    options: [
${formattedOpts}
    ],
    correctAnswer: ${ansIdx},
    explanation: \`The correct answer is ${ansLetter}.\`,
    category: '${qObj.cat}',
    difficulty: 'Medium'
  },\n`;
});

TS_CONTENT += `];\n`;

fs.writeFileSync('questions_est1_2022_march.ts', TS_CONTENT);
console.log('Generated questions_est1_2022_march.ts with', questions.length, 'questions');
