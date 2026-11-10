const fs = require('fs');

const text = fs.readFileSync('raw_ocr.txt', 'utf8');
const lines = text.split('\n');

let questions = [];
let currentQuestion = null;
let options = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  const qMatch = line.match(/^Question\s+(\d+)\.(.*)/);
  if (qMatch) {
    if (currentQuestion) {
      currentQuestion.options = [...options];
      questions.push(currentQuestion);
    }
    currentQuestion = {
      id: parseInt(qMatch[1]),
      question: qMatch[2].trim(),
      options: [],
      correctAnswer: 0,
      explanation: "Explanation pending.",
      category: "Math",
      topics: ["EST1"]
    };
    options = [];
    continue;
  }
  
  const optMatch = line.match(/^([A-D])\.\s+(.*)/);
  if (optMatch && currentQuestion) {
    options.push(optMatch[2].trim());
    continue;
  }
  
  if (currentQuestion && options.length === 0 && line !== '') {
    currentQuestion.question += '\n' + line;
  }
}
if (currentQuestion) {
  currentQuestion.options = [...options];
  questions.push(currentQuestion);
}

// Format as TypeScript file
let tsContent = `import { Question } from '../types';

export const EST1_2026_MAY_NEW_SET: Question[] = [\n`;

questions.forEach(q => {
  tsContent += `  {
    id: ${q.id},
    question: \`${q.question.replace(/`/g, '\\`')}\`,
    options: ${JSON.stringify(q.options)},
    correctAnswer: 0, // Placeholder
    explanation: "Explanation pending.",
    category: "Math",
    topics: ["EST1"]
  },\n`;
});

tsContent += `];\n`;

fs.writeFileSync('src/data/questions_est1_2026_may_new.ts', tsContent);
console.log('Saved to src/data/questions_est1_2026_may_new.ts. Total questions:', questions.length);
