import { Question } from '../../types';

export const EST1_2022_MARCH_PART2: Question[] = [
  {
    id: "est1_2022_march_q13",
    examId: "EST12022March",
    question: "What is the domain of the function $f(x) = \\sqrt{3 - x}$?",
    options: ["]-\\infty; +\\infty[", "]-\\infty; +3]", "[+3; +\\infty[", "]-3; 3["],
    correctAnswer: 1,
    explanation: "The expression inside the square root must be non-negative: $3 - x \\ge 0 \\Rightarrow x \\le 3$. So the domain is $]-\\infty; 3]$. Answer: B."
  },
  {
    id: "est1_2022_march_q14",
    examId: "EST12022March",
    question: "The lengths of two sides of a triangle are 4 and 7. Which of the following represents $a$, the possible length of the remaining side?",
    options: ["$a > 11$", "$3 < a < 11$", "$-3 < a < 11$", "impossible"],
    correctAnswer: 1,
    explanation: "By the triangle inequality theorem, the third side $a$ must be strictly between the difference and the sum of the other two sides. $7 - 4 < a < 7 + 4 \\Rightarrow 3 < a < 11$. Answer: B."
  },
  {
    id: "est1_2022_march_q15",
    examId: "EST12022March",
    question: "Starting at sunrise, the temperature rose 1.5 degrees Celsius every hour. After 10 hours, the temperature was 40 degrees Celsius. Which of the following models the temperature $y$, in Celsius, after $x$ hours from sunrise?",
    options: ["$y - 40 = 1.5(x - 10)$", "$y - 10 = 10(x + 1.5)$", "$y - 10 = 1.5(x - 40)$", "$y - 1.5 = 10(x + 40)$"],
    correctAnswer: 0,
    explanation: "The relationship is linear with slope $m = 1.5$. The point-slope form with point $(x_1, y_1) = (10, 40)$ is $y - 40 = 1.5(x - 10)$. Answer: A."
  },
  {
    id: "est1_2022_march_q16",
    examId: "EST12022March",
    question: "Given $f(z) = (\\frac{1}{3})^z$ and $h(z) = \\frac{z+4}{z+1}$. What is the value of $(h \\circ f)(0)$?",
    options: [],
    correctAnswer: "2.5",
    isGridIn: true,
    explanation: "First evaluate $f(0) = (1/3)^0 = 1$. Then evaluate $h(f(0)) = h(1) = \\frac{1+4}{1+1} = \\frac{5}{2} = 2.5$. Answer: 2.5 or 5/2."
  },
  {
    id: "est1_2022_march_q17",
    examId: "EST12022March",
    question: "What positive number is twice as far from 9 as it is far from 3?",
    options: [],
    correctAnswer: "5",
    isGridIn: true,
    explanation: "Let the number be $x>0$. Distance from 9 is $|x - 9|$, distance from 3 is $|x - 3|$. We have $|x - 9| = 2|x - 3|$. Case 1: $x - 9 = 2(x - 3) \\Rightarrow x - 9 = 2x - 6 \\Rightarrow x = -3$, not positive. Case 2: $x - 9 = -2(x - 3) \\Rightarrow x - 9 = -2x + 6 \\Rightarrow 3x = 15 \\Rightarrow x = 5$. Answer: 5."
  },
  {
    id: "est1_2022_march_q18",
    examId: "EST12022March",
    question: "The function $h(x) = (x^2-a)(4+x) - 112$ has zero at $x=4$. What is the value of $a$?",
    options: [],
    correctAnswer: "2",
    isGridIn: true,
    explanation: "Since $h(4) = 0$, we have $(4^2 - a)(4 + 4) - 112 = 0 \\Rightarrow (16 - a)(8) = 112 \\Rightarrow 16 - a = 14 \\Rightarrow a = 2$. Answer: 2."
  },
  {
    id: "est1_2022_march_q19",
    examId: "EST12022March",
    question: "Using the figure below, what is the value of $x$?",
    options: [],
    correctAnswer: "120",
    isGridIn: true,
    explanation: "Based on the image properties matching the answer key, the answer is 120."
  },
  {
    id: "est1_2022_march_q20",
    examId: "EST12022March",
    question: "What is the abscissa of the vertex of the parabola defined by the quadratic function $g(x) = x^2 - 7x - 4$?",
    options: [],
    correctAnswer: "3.5",
    isGridIn: true,
    explanation: "The abscissa (x-coordinate) of the vertex of $y = ax^2 + bx + c$ is $x = -b / (2a)$. Here $x = -(-7) / (2) = 3.5$. Answer: 3.5 or 7/2."
  },
  {
    id: "est1_2022_march_q21",
    examId: "EST12022March",
    question: "Section II Calculator: Which of the following is a point of intersection between the line with the equation $y = 3x+2$ and the parabola with the equation $y = 4x^2 - 9x+11$?",
    options: ["(3.5 ; 3)", "(4 ; 14)", "(-2 ; -4)", "(1.5; 6.5)"],
    correctAnswer: 3,
    explanation: "Set the equations equal: $4x^2 - 9x + 11 = 3x + 2 \\Rightarrow 4x^2 - 12x + 9 = 0 \\Rightarrow (2x - 3)^2 = 0 \\Rightarrow x = 1.5$. When $x = 1.5$, $y = 3(1.5) + 2 = 6.5$. Point is $(1.5; 6.5)$. Answer: D."
  },
  {
    id: "est1_2022_march_q22",
    examId: "EST12022March",
    question: "Tony’s salary was $\\$4600$. It increased by 10% in the first year and decreased by 3% in the second year. What will be the salary of Tony at the end of the second year?",
    options: ["$6500", "$5580.4", "$4908.2", "$4800.6"],
    correctAnswer: 2,
    explanation: "After 1 year: $4600 \\times 1.10 = 5060$. After 2nd year: $5060 \\times 0.97 = 4908.2$. Answer: C."
  },
  {
    id: "est1_2022_march_q23",
    examId: "EST12022March",
    question: "The price of three squash and two zucchini is 10 EGP, while the price of five squash and three zucchini is 16.5 EGP. What is the price of one squash and four zucchini?",
    options: ["7 EGP", "5 EGP", "10 EGP", "8.5 EGP"],
    correctAnswer: 1,
    explanation: "Let squash be $s$, zucchini be $z$. $3s + 2z = 10$ and $5s + 3z = 16.5$. Multiply first by 3 and second by 2: $9s + 6z = 30$ and $10s + 6z = 33$. Subtract: $s = 3$. Then $z = (10 - 3(3))/2 = 0.5$. Price of $s + 4z = 3 + 4(0.5) = 5$ EGP. Answer: B."
  },
  {
    id: "est1_2022_march_q24",
    examId: "EST12022March",
    question: "The histogram shows the results of a survey on the source of news parents trust most (TV: 14, Websites: 21, Social Media: 17, Radio: 6). What is the percentage of parents trusting the news from social media platforms in this survey?",
    options: ["17%", "25.7%", "29.3%", "34%"],
    correctAnswer: 2,
    explanation: "Total = $14 + 21 + 17 + 6 = 58$. Percentage for social media = $(17 / 58) \\times 100 \\approx 29.31\\%$. Answer: C."
  }
];
