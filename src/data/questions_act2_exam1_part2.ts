import { Question } from '../../types';

export const act2Exam1QuestionsPart2: Question[] = [
  {
    id: 'act2-exam1-q16',
    question: 'What is the value of $y$ for the solution to this system of equations $\\begin{cases} 2x - y = 12 \\\\ y = x + 4 \\end{cases}$',
    options: ['8', '16', '20', '24'],
    correctAnswer: 2,
    explanation: 'Substitute $y = x + 4$ into the first equation: $2x - (x + 4) = 12 \\Rightarrow x - 4 = 12 \\Rightarrow x = 16$. Then $y = 16 + 4 = 20$.'
  },
  {
    id: 'act2-exam1-q17',
    question: 'Simplify the following expression $-6x - (8 \\div 2) - (4x - 5)$',
    options: ['$-10x + 1$', '$-10x + 9$', '$-2x - 9$', '$-2x + 1$'],
    correctAnswer: 0,
    explanation: '$-6x - 4 - 4x + 5 = -10x + 1$'
  },
  {
    id: 'act2-exam1-q18',
    question: 'If $x$ and $y$ are integers, which equation is always true',
    options: ['$\\frac{x}{y} = \\frac{y}{x}$', '$x - y = y - x$', '$x + 2y = y + 2x$', '$2x + 3y = 3y + 2x$'],
    correctAnswer: 3,
    explanation: 'By the commutative property of addition, $2x + 3y = 3y + 2x$.'
  },
  {
    id: 'act2-exam1-q19',
    question: 'In the geometric sequence $(16, n, 36, ...)$, The second term $n$ is the geometric mean of 16 and 36. What is the value of $n$',
    options: ['24', '25', '26', '28'],
    correctAnswer: 0,
    explanation: '$n = \\sqrt{16 \\times 36} = \\sqrt{576} = 24$'
  },
  {
    id: 'act2-exam1-q20',
    question: 'John has $x$ dollars. Ann has $\\$5$ more than John. If Ann gives John $\\$10$, then, in terms of $x$, how many dollars will Ann have',
    options: ['$x - 15$', '$x - 10$', '$x - 5$', '$x + 5$'],
    correctAnswer: 2,
    explanation: 'Ann initially has $x + 5$. After giving $10, she has $x + 5 - 10 = x - 5$.'
  },
  {
    id: 'act2-exam1-q21',
    question: 'Automobile sales in United States dropped from 10.7 million unit one year to 9.3 million the next year. The decrease was closest to what percent',
    options: ['1%', '13%', '14%', '15%'],
    correctAnswer: 1,
    explanation: 'Decrease = $10.7 - 9.3 = 1.4$. Percent decrease = $\\frac{1.4}{10.7} \\approx 0.1308 \\approx 13\\%$.'
  },
  {
    id: 'act2-exam1-q22',
    question: 'If the average of 5 consecutive whole numbers is 12, what is the largest number',
    options: ['14', '16', '17', '22'],
    correctAnswer: 0,
    explanation: 'The numbers are 10, 11, 12, 13, 14. The largest is 14.'
  },
  {
    id: 'act2-exam1-q23',
    question: 'Solve the following inequality. If $5|8 - 2x| - 3 > 27$',
    options: ['$x < 1$ or $x > 7$', '$x \\le 1$ or $x \\ge 7$', '$1 < x < 7$', '$1 \\le x \\le 7$'],
    correctAnswer: 0,
    explanation: '$5|8 - 2x| > 30 \\Rightarrow |8 - 2x| > 6 \\Rightarrow 8 - 2x > 6$ or $8 - 2x < -6 \\Rightarrow -2x > -2$ or $-2x < -14 \\Rightarrow x < 1$ or $x > 7$.'
  },
  {
    id: 'act2-exam1-q24',
    question: 'Which of the following properties illustrate $3^x \\cdot \\frac{1}{3^x} = 1$',
    options: ['Commutative Property of Multiplication', 'Associative property of Multiplication', 'Property Multiplicative Inverse', 'Identity Property of Multiplication'],
    correctAnswer: 2,
    explanation: 'Multiplying a number by its reciprocal to get 1 illustrates the Property of Multiplicative Inverse.'
  },
  {
    id: 'act2-exam1-q25',
    question: 'If $x$ is greater than $y$ and $y$ is greater than 1, which of the following is LEAST',
    options: ['$\\frac{1}{x}$', '$\\frac{1}{y}$', '$\\frac{1}{x-y}$', '$\\frac{1}{y-x}$'],
    correctAnswer: 3,
    explanation: 'Since $x > y$, $y - x$ is negative. Therefore, $\\frac{1}{y-x}$ is negative, making it the least.'
  }
];
