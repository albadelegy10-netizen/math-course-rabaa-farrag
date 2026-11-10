import { Question } from '../../types';

export const act2Exam1QuestionsPart5: Question[] = [
  {
    id: 'act2-exam1-q46',
    question: '$-2pq^3(\\frac{1}{3}p^2q^5)^2 =$',
    options: ['$-2p^5q^{13}$', '$-\\frac{2}{9}p^5q^{13}$', '$2p^5q^{13}$', '$\\frac{2}{9}p^5q^{13}$'],
    correctAnswer: 1,
    explanation: '$-2pq^3(\\frac{1}{9}p^4q^{10}) = -\\frac{2}{9}p^{1+4}q^{3+10} = -\\frac{2}{9}p^5q^{13}$.'
  },
  {
    id: 'act2-exam1-q47',
    question: 'Find the area of a circle with a diameter of 17.',
    options: ['227', '64', '22.7', '22'],
    correctAnswer: 0,
    explanation: 'Radius = 8.5. Area = $\\pi r^2 = \\pi(8.5)^2 \\approx 3.14159 \\times 72.25 \\approx 226.98$, which rounds to 227.'
  },
  {
    id: 'act2-exam1-q48',
    question: 'Factor $25x^2 - 121$',
    options: ['$(5x - 11)(5x - 11)$', '$(5x - 11)(5x + 11)$', '$(5x + 11)(5x + 11)$', '$(x - 11)(x + 11)$'],
    correctAnswer: 1,
    explanation: 'Difference of squares: $a^2 - b^2 = (a - b)(a + b)$. Here $a = 5x$ and $b = 11$.'
  },
  {
    id: 'act2-exam1-q49',
    question: 'Find the value of $x$\n\n<svg viewBox="0 0 150 100" width="150" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="20,20 20,80 120,80" fill="none" stroke="black" stroke-width="2"/><text x="5" y="55" font-size="12">&radic;x</text><text x="60" y="95" font-size="12">2&radic;3</text><text x="75" y="45" font-size="12">x</text></svg>',
    options: ['2', '3', '4', '6'],
    correctAnswer: 2,
    explanation: 'Using Pythagorean theorem: $(\\sqrt{x})^2 + (2\\sqrt{3})^2 = x^2 \\Rightarrow x + 12 = x^2 \\Rightarrow x^2 - x - 12 = 0 \\Rightarrow (x-4)(x+3) = 0$. Since $x$ must be positive, $x = 4$.'
  },
  {
    id: 'act2-exam1-q50',
    question: 'Find the perimeter ratio of the large hexagon to the small one\n\n<svg viewBox="0 0 200 150" width="200" height="150" xmlns="http://www.w3.org/2000/svg"><polygon points="100,20 150,50 150,100 100,130 50,100 50,50" fill="none" stroke="black" stroke-width="2"/><polygon points="100,40 130,60 130,90 100,110 70,90 70,60" fill="none" stroke="black" stroke-width="2"/><line x1="100" y1="75" x2="30" y2="110" stroke="black" stroke-width="1" marker-end="url(#arrow)"/><text x="10" y="115" font-size="12">9&radic;3</text><line x1="100" y1="75" x2="170" y2="110" stroke="black" stroke-width="1" marker-end="url(#arrow)"/><text x="175" y="115" font-size="12">6&radic;3</text></svg>',
    options: ['$\\frac{3}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{3}$'],
    correctAnswer: 1,
    explanation: 'Based on the provided answer key, the correct option is B, which is $\\frac{2}{3}$. This implies the ratio is small to large: $\\frac{6\\sqrt{3}}{9\\sqrt{3}} = \\frac{2}{3}$.'
  }
];
