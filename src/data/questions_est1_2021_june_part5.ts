import { Question } from '../../types';

export const EST1_2021_JUNE_PART5: Question[] = [
  {
    id: "est1_2021_june_q49",
    examId: "EST12021June",
    question: "Which value of $x$ could make the inequality $\\frac{2}{3}(x + 2) - x > 5$ true?",
    options: [
      "-12",
      "-10",
      "-8",
      "-6"
    ],
    correctAnswer: 0,
    explanation: "Solve the inequality: $\\frac{2}{3}x + \\frac{4}{3} - x > 5$.\n$-\\frac{1}{3}x + \\frac{4}{3} > 5$.\nMultiply both sides by 3 to clear denominators: $-x + 4 > 15$.\n$-x > 11 \\implies x < -11$.\nFrom the given options, only -12 is less than -11."
  },
  {
    id: "est1_2021_june_q50",
    examId: "EST12021June",
    question: "Harvey wants to buy a new apartment. He estimates that he will need its area to be around $1400$ square feet. But, the provider measures its units in square meters. If $1$ meter is nearly $3.28$ feet, how many square meters approximately will Harvey need?",
    options: [
      "427",
      "130",
      "4592",
      "15062"
    ],
    correctAnswer: 1,
    explanation: "We know that $1 \\text{ m} \\approx 3.28 \\text{ ft}$.\nSquaring both sides gives the conversion for area: $1 \\text{ m}^2 \\approx (3.28)^2 \\text{ ft}^2 \\approx 10.7584 \\text{ ft}^2$.\nTo convert $1400 \\text{ ft}^2$ to $\\text{m}^2$: $\\frac{1400}{10.7584} \\approx 130.13$.\nThis is approximately 130 square meters."
  },
  {
    id: "est1_2021_june_q51",
    examId: "EST12021June",
    question: "The mean of x,y,z and t is 11.5. The mean of x,y,z,t and q is 11.8. What is the value of q?",
    options: [],
    isGridIn: true,
    correctAnswer: "13",
    explanation: "The sum of the first 4 variables: $x + y + z + t = 4 \\times 11.5 = 46$.\nThe sum of all 5 variables: $x + y + z + t + q = 5 \\times 11.8 = 59$.\nSubstitute the first sum into the second: $46 + q = 59 \\implies q = 59 - 46 = 13$."
  },
  {
    id: "est1_2021_june_q52",
    examId: "EST12021June",
    question: "The function g is defined by $g(x) = 3x^2 + kx - 8$ and $g(-2) = -4$. What is the value of $g(-3)$?",
    options: [],
    isGridIn: true,
    correctAnswer: "7",
    explanation: "First, use $g(-2) = -4$ to find $k$:\n$3(-2)^2 + k(-2) - 8 = -4$\n$12 - 2k - 8 = -4 \\implies 4 - 2k = -4$\n$-2k = -8 \\implies k = 4$.\nThus, $g(x) = 3x^2 + 4x - 8$.\nNow find $g(-3)$:\n$g(-3) = 3(-3)^2 + 4(-3) - 8 = 3(9) - 12 - 8 = 27 - 20 = 7$."
  },
  {
    id: "est1_2021_june_q53",
    examId: "EST12021June",
    question: "What is the remainder of the division of $P(x)=4x^3-x^2-8x+6$ by $x-1$?",
    options: [],
    isGridIn: true,
    correctAnswer: "1",
    explanation: "According to the Remainder Theorem, the remainder of dividing $P(x)$ by $x - 1$ is $P(1)$.\n$P(1) = 4(1)^3 - (1)^2 - 8(1) + 6 = 4 - 1 - 8 + 6 = 1$."
  },
  {
    id: "est1_2021_june_q54",
    examId: "EST12021June",
    question: "The concentration of solution in sugar is directly proportional to the mass of sugar dissolved in the solution. If the concentration of a solution is $1.5\\text{mol/L}$ when $54\\text{g}$ are dissolved, how many grams are dissolved if the concentration is $2.1\\text{mol/L}$?",
    options: [],
    isGridIn: true,
    correctAnswer: "75.6",
    explanation: "Let $C$ be concentration and $M$ be mass. $C \\propto M$, which means $\\frac{C_1}{M_1} = \\frac{C_2}{M_2}$.\n$\\frac{1.5}{54} = \\frac{2.1}{M_2} \\implies M_2 = \\frac{2.1 \\times 54}{1.5}$.\n$M_2 = 1.4 \\times 54 = 75.6$ grams. (Note: Grid-in answer can also be 378/5)."
  },
  {
    id: "est1_2021_june_q55",
    examId: "EST12021June",
    question: "In a right triangle, if $\\tan x = \\frac{24}{7}$, then what is the value of $\\cos x$?",
    options: [],
    isGridIn: true,
    correctAnswer: "7/25",
    explanation: "In a right triangle with angle $x$, $\\tan x = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{24}{7}$.\nUsing the Pythagorean theorem, the hypotenuse $h$ is $\\sqrt{24^2 + 7^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25$.\nThen $\\cos x = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{7}{25}$. (Or 0.28)."
  },
  {
    id: "est1_2021_june_q56",
    examId: "EST12021June",
    question: "The table above shows several values for the functions p(x) and q(x).\n\n| x | -3 | -2 | -1 | 0 | 1 | 2 |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| p(x) | 7 | 4 | 1 | -2 | -5 | -8 |\n| q(x) | -7 | -5 | -3 | -1 | 1 | 3 |\n\nWhat is the value of $p(q(0))$?",
    options: [],
    isGridIn: true,
    correctAnswer: "1",
    explanation: "First, find the value of $q(0)$. From the table, when $x = 0$, $q(x) = -1$.\nNext, find the value of $p(-1)$. From the table, when $x = -1$, $p(x) = 1$.\nTherefore, $p(q(0)) = 1$."
  },
  {
    id: "est1_2021_june_q57",
    examId: "EST12021June",
    question: "Consider the system\n$\\begin{cases} -2x + y < 3 \\\\ y + x \\ge -5 \\end{cases}$\nFor $x = 2$, what is the highest integer value of $y$?",
    options: [],
    isGridIn: true,
    correctAnswer: "6",
    explanation: "Substitute $x = 2$ into both inequalities:\n1) $-2(2) + y < 3 \\implies -4 + y < 3 \\implies y < 7$.\n2) $y + 2 \\ge -5 \\implies y \\ge -7$.\nThe possible range for $y$ is $-7 \\le y < 7$.\nThe highest integer value less than 7 is 6."
  },
  {
    id: "est1_2021_june_q58",
    examId: "EST12021June",
    question: "Trevor has $\\$600$ to spend on shopping, 25 percent of which he spent to buy groceries. If he budgets 30 percent of the remaining amount for clothes, allots $\\$120$ for cooking utensils and spends the rest on gaming accessories, what percentage of the original $\\$600$ did he spend on gaming accessories? (Input your answer without the % sign)",
    options: [],
    isGridIn: true,
    correctAnswer: "32.5",
    explanation: "Initial amount = $\\$600$.\nSpent on groceries = $25\\%$ of $600 = \\$150$.\nRemaining amount = $600 - 150 = \\$450$.\nSpent on clothes = $30\\%$ of $450 = 0.30 \\times 450 = \\$135$.\nSpent on cooking utensils = $\\$120$.\nTotal spent so far = $150 + 135 + 120 = \\$405$.\nSpent on gaming accessories = $600 - 405 = \\$195$.\nThe percentage of the original amount = $\\frac{195}{600} \\times 100 = \\frac{195}{6} = 32.5\\%$."
  }
];
