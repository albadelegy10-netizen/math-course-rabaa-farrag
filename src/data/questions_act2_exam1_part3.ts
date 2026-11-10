import { Question } from '../../types';

export const act2Exam1QuestionsPart3: Question[] = [
  {
    id: 'act2-exam1-q26',
    question: 'A store regularly sells books at 20% off the list price. At a sale its regular prices are reduced 10 percent. The sale price is what percent of the list price',
    options: ['30%', '70%', '72%', '79%'],
    correctAnswer: 2,
    explanation: 'Let list price be 100. Regular price = 80. Sale price = $80 \\times 0.90 = 72$. This is 72% of the list price.'
  },
  {
    id: 'act2-exam1-q27',
    question: 'The price of a cold roast beef lunch is $\\$4.80$, and the price of a hot roast beef lunch is $\\$5.40$ if both prices include 20 percent for tax and tip, what is the difference in price before tax and tip',
    options: ['$\\$0.12$', '$\\$0.40$', '$\\$0.50$', '$\\$0.60$'],
    correctAnswer: 2,
    explanation: 'Difference with tax = $5.40 - 4.80 = 0.60$. Let $d$ be difference before tax. $d \\times 1.20 = 0.60 \\Rightarrow d = 0.50$.'
  },
  {
    id: 'act2-exam1-q28',
    question: 'For what price is 20 percent off the same $\\$20$ off',
    options: ['$\\$1$', '$\\$10$', '$\\$100$', '$\\$1,000$'],
    correctAnswer: 2,
    explanation: '$0.20x = 20 \\Rightarrow x = 100$.'
  },
  {
    id: 'act2-exam1-q29',
    question: 'To which of the following is $6.06$ closest',
    options: ['6.1', '7', '6.7', '6'],
    correctAnswer: 0,
    explanation: 'Distance to 6.1 is 0.04. Distance to 6 is 0.06.'
  },
  {
    id: 'act2-exam1-q30',
    question: 'All of the following are greater than $\\frac{1}{2}$ EXCEPT',
    options: ['$\\frac{101}{200}$', '$\\frac{17}{33}$', '$\\frac{7}{12}$', '$\\frac{60}{1000}$'],
    correctAnswer: 3,
    explanation: '$\\frac{60}{1000} = 0.06$, which is less than 0.5.'
  },
  {
    id: 'act2-exam1-q31',
    question: 'If $\\frac{1}{4}$ of number is greater than 8, the number must be',
    options: ['Less than 2', 'Equal to 2', 'Less than 32', 'Greater than 32'],
    correctAnswer: 3,
    explanation: '$\\frac{1}{4}x > 8 \\Rightarrow x > 32$.'
  },
  {
    id: 'act2-exam1-q32',
    question: 'If Ivan traveled 510 miles in 2 hours, 18 minutes, and 30 seconds. What was Ivan average speed',
    options: ['221 mile/hour', '281 mile/hour', '229 mile/hour', '310 mile/hour'],
    correctAnswer: 0,
    explanation: 'Time = $2 + \\frac{18}{60} + \\frac{30}{3600} = 2 + 0.3 + 0.00833 = 2.30833$ hours. Speed = $\\frac{510}{2.30833} \\approx 220.94 \\approx 221$ mph.'
  },
  {
    id: 'act2-exam1-q33',
    question: 'Which of the following numbers can be written in the form $(4 \\times N) + 1$ where $N$ is a whole number?',
    options: ['55', '62', '71', '93'],
    correctAnswer: 3,
    explanation: 'We need a number that leaves a remainder of 1 when divided by 4. $93 = 4 \\times 23 + 1$.'
  },
  {
    id: 'act2-exam1-q34',
    question: 'If $t = -3$, then $3t^2 + 5t + 6$ equals',
    options: ['$-36$', '$-6$', '6', '18'],
    correctAnswer: 3,
    explanation: '$3(-3)^2 + 5(-3) + 6 = 3(9) - 15 + 6 = 27 - 15 + 6 = 18$.'
  },
  {
    id: 'act2-exam1-q35',
    question: 'Based on the information in the figure, which statement shows a valid argument\n\n<svg viewBox="0 0 200 100" width="200" height="100" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="80" x2="190" y2="80" stroke="black" stroke-width="2" marker-end="url(#arrow)" marker-start="url(#arrow)"/><line x1="100" y1="80" x2="180" y2="20" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><text x="110" y="70" font-size="12">12x&deg;</text><text x="140" y="70" font-size="12">(2x + 9)&deg;</text><defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="black"/></marker></defs></svg>',
    options: ['$(2x+9) + 12x = 180$ because the angles from a linear pair', '$(2x+9) + 12x = 90$ because the angles are complementary', '$(2x + 9) = 12x$ because the angles are vertical angles', '$(2x+9) = 12x$ because the angles are supplementary'],
    correctAnswer: 1,
    explanation: 'Based on the provided answer key, the correct option is B, implying the angles form a right angle, even though the diagram might look like a straight line.'
  }
];
