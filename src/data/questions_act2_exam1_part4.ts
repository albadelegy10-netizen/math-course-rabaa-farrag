import { Question } from '../../types';

export const act2Exam1QuestionsPart4: Question[] = [
  {
    id: 'act2-exam1-q36',
    question: 'According to a market study, City X has 1.75 millionaires for every 1,000 people. If there are 8 million people in City, how many millionaires are there',
    options: ['14', '140', '1,400', '14,000'],
    correctAnswer: 3,
    explanation: '$\\frac{1.75}{1000} = \\frac{x}{8,000,000} \\Rightarrow x = 1.75 \\times 8000 = 14,000$.'
  },
  {
    id: 'act2-exam1-q37',
    question: 'What is the sum of the interior angles of a Hexagon?',
    options: ['$720^\\circ$', '$900^\\circ$', '$1080^\\circ$', '$1260^\\circ$'],
    correctAnswer: 0,
    explanation: 'Sum $= (n - 2) \\times 180^\\circ = (6 - 2) \\times 180^\\circ = 4 \\times 180^\\circ = 720^\\circ$.'
  },
  {
    id: 'act2-exam1-q38',
    question: 'For the line $x + y = 1$, what is the sum of the values of the slope, x-intercept, and y-intercept',
    options: ['$-1$', '0', '1', '2'],
    correctAnswer: 2,
    explanation: 'The equation is $y = -x + 1$. Slope = $-1$. x-intercept = 1. y-intercept = 1. Sum = $-1 + 1 + 1 = 1$.'
  },
  {
    id: 'act2-exam1-q39',
    question: 'Justine and Eric want to know the height of a tree. Eric places a mirror (M) on the ground in line with the top of the tree. He moves towards Justine represented by AB until she can see the top of the tree at point C. Justine\'s eye is 5ft from the ground at point A. To the nearest tenth of a foot What is the height of the tree?\n\n<svg viewBox="0 0 300 150" width="300" height="150" xmlns="http://www.w3.org/2000/svg"><polygon points="50,120 50,70 100,120" fill="none" stroke="black" stroke-width="2"/><polygon points="100,120 250,20 250,120" fill="none" stroke="black" stroke-width="2"/><text x="40" y="65" font-size="12">A</text><text x="40" y="135" font-size="12">B</text><text x="95" y="135" font-size="12">M</text><text x="255" y="135" font-size="12">D</text><text x="255" y="15" font-size="12">C</text><text x="20" y="100" font-size="12">5 ft</text><text x="65" y="135" font-size="12">4 ft</text><text x="160" y="135" font-size="12">28 ft</text></svg>',
    options: ['30', '31', '32', '35'],
    correctAnswer: 3,
    explanation: 'The triangles are similar. $\\frac{5}{4} = \\frac{h}{28} \\Rightarrow h = \\frac{5 \\times 28}{4} = 35$.'
  },
  {
    id: 'act2-exam1-q40',
    question: 'Which statement about these triangles is true?\n\n<svg viewBox="0 0 300 120" width="300" height="120" xmlns="http://www.w3.org/2000/svg"><polygon points="70,20 20,100 120,100" fill="none" stroke="black" stroke-width="2"/><text x="65" y="40" font-size="12">65&deg;</text><text x="30" y="90" font-size="12">55&deg;</text><text x="90" y="90" font-size="12">60&deg;</text><text x="60" y="115" font-size="12">4 m</text><polygon points="220,20 170,100 270,100" fill="none" stroke="black" stroke-width="2"/><text x="215" y="40" font-size="12">60&deg;</text><text x="180" y="90" font-size="12">65&deg;</text><text x="240" y="90" font-size="12">55&deg;</text><text x="210" y="115" font-size="12">4 m</text></svg>',
    options: ['The triangles are similar but not congruent', 'The triangles are not similar but not congruent', 'The triangles are similar and are congruent', 'The triangles are neither similar nor congruent'],
    correctAnswer: 0,
    explanation: 'The triangles have the same angles ($55^\\circ, 60^\\circ, 65^\\circ$), so they are similar. The side of length 4m is between different angles in each triangle, so they are not congruent.'
  },
  {
    id: 'act2-exam1-q41',
    question: 'The net below represents a regular polyhedron or platonic solid how many edges does the platonic solid have?\n\n<svg viewBox="0 0 150 150" width="150" height="150" xmlns="http://www.w3.org/2000/svg"><polygon points="75,10 105,60 45,60" fill="none" stroke="black" stroke-width="2"/><polygon points="45,60 105,60 75,110" fill="none" stroke="black" stroke-width="2" stroke-dasharray="4"/><polygon points="105,60 135,10 165,60" fill="none" stroke="black" stroke-width="2" transform="translate(-30, 50)"/><polygon points="45,60 15,10 75,10" fill="none" stroke="black" stroke-width="2" transform="translate(30, 50)"/><polygon points="75,110 105,160 45,160" fill="none" stroke="black" stroke-width="2" transform="translate(0, -50)"/></svg>',
    options: ['6', '8', '10', '12'],
    correctAnswer: 3,
    explanation: 'The net consists of 8 equilateral triangles, which folds into an octahedron. An octahedron has 12 edges.'
  },
  {
    id: 'act2-exam1-q42',
    question: 'If there are 9 white cards and 7 black cards, what is the probability of randomly picking a white card?',
    options: ['$\\frac{9}{16}$', '$\\frac{9}{7}$', '$\\frac{7}{9}$', '$\\frac{16}{9}$'],
    correctAnswer: 0,
    explanation: 'Total cards = $9 + 7 = 16$. Probability of white = $\\frac{9}{16}$.'
  },
  {
    id: 'act2-exam1-q43',
    question: 'A circle has a diameter of 11 inches. What is the circumference of that circle?',
    options: ['$\\pi$', '$11\\pi$', '$5.5\\pi$', '$121\\pi$'],
    correctAnswer: 1,
    explanation: 'Circumference = $\\pi \\times d = 11\\pi$.'
  },
  {
    id: 'act2-exam1-q44',
    question: 'What is the cross section of this cone?\n\n<svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="80" rx="30" ry="10" fill="none" stroke="black" stroke-width="2"/><path d="M 20 80 L 50 20 L 80 80" fill="none" stroke="black" stroke-width="2"/></svg>',
    options: ['Circle', 'Oval', 'Rectangle', 'Triangle'],
    correctAnswer: 0,
    explanation: 'A horizontal cross section of a right circular cone is a circle.'
  },
  {
    id: 'act2-exam1-q45',
    question: '$2(2x^3y^5z)^3 =$',
    options: ['$16x^9y^{15}z^3$', '$16x^3y^{15}z^3$', '$16x^9y^5z^3$', '$16x^9y^{15}z$'],
    correctAnswer: 0,
    explanation: '$2(2^3(x^3)^3(y^5)^3z^3) = 2(8x^9y^{15}z^3) = 16x^9y^{15}z^3$.'
  }
];
