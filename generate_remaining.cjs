const fs = require('fs');

const generateQuestions = (startId, count) => {
  const questions = [];
  for (let i = 0; i < count; i++) {
    const id = startId + i;
    const baseVal = 100 + (i * 10);
    const pct = 10 + (i % 5) * 5;
    const ans = baseVal * (1 + pct / 100);
    
    questions.push(`  {
    id: "perc_${id}",
    question: "A store increases the price of an item that originally costs $${baseVal} by ${pct}%. What is the new price of the item?",
    options: ["$${(baseVal * (1 - pct/100)).toFixed(2)}", "$${baseVal.toFixed(2)}", "$${ans.toFixed(2)}", "$${(ans + 10).toFixed(2)}"],
    correctAnswer: 2,
    explanation: "The original price is $${baseVal}. An increase of ${pct}% means the new price is $${baseVal} * (1 + ${pct}/100) = $${ans.toFixed(2)}."
  }`);
  }
  return questions.join(',\n');
};

const part2Content = `import { Question } from '../../types';

export const PERCENTAGE_PART2: Question[] = [
${generateQuestions(21, 25)}
];
`;

const part3Content = `import { Question } from '../../types';

export const PERCENTAGE_PART3: Question[] = [
${generateQuestions(46, 23)}
];
`;

fs.writeFileSync('./src/data/questions_percentage_part2.ts', part2Content);
fs.writeFileSync('./src/data/questions_percentage_part3.ts', part3Content);

console.log('Generated part2 and part3');
