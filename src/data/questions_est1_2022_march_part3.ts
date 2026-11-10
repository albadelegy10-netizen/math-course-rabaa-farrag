import { Question } from '../../types';

export const EST1_2022_MARCH_PART3: Question[] = [
  {
    id: "est1_2022_march_q25",
    examId: "EST12022March",
    question: "If this survey was conducted on 120 people, and the results showed the same percentage for each source. How many people approximately would say that radio stations or TV channels are the most trustworthy?",
    options: ["29", "41", "53", "58"],
    correctAnswer: 1,
    explanation: "Radio (6) + TV (14) = 20 out of 58. Ratio is $20 / 58$. Approximate number from 120 is $(20 / 58) \\times 120 \\approx 41.37$. Answer: B (41)."
  },
  {
    id: "est1_2022_march_q26",
    examId: "EST12022March",
    question: "A rectangle is cut into 20 identical squares such that each has an area of $12.25 \\text{ cm}^2$. Which of the following cannot be a possible value for the perimeter of the rectangle?",
    options: ["147 cm", "84 cm", "70 cm", "63 cm"],
    correctAnswer: 2,
    explanation: "Side of square is $\\sqrt{12.25} = 3.5$ cm. A rectangle of 20 squares can be arranged as $1\\times20$, $2\\times10$, $4\\times5$. Dimensions in terms of $s$: $1\\times20 \\Rightarrow P = 42s = 42(3.5)=147$. $2\\times10 \\Rightarrow P = 24s = 24(3.5)=84$. $4\\times5 \\Rightarrow P = 18s = 18(3.5)=63$. So 70 is not a possible perimeter. Answer: C."
  },
  {
    id: "est1_2022_march_q27",
    examId: "EST12022March",
    question: "If Tony’s salary is 25% greater than Sami’s salary. Which of the following statements is true?",
    options: ["Sami’s salary is lower than Tony’s salary by 16%.", "Sami’s salary is lower than Tony’s salary by 20%.", "Sami’s salary is lower than Tony’s salary by 25%.", "Sami’s salary is lower than Tony’s salary by 33%."],
    correctAnswer: 1,
    explanation: "Let Sami's salary be $S$. Tony's salary $T = 1.25S$. Thus $S = T / 1.25 = 0.80T$. So Sami is 20% lower than Tony. Answer: B."
  },
  {
    id: "est1_2022_march_q28",
    examId: "EST12022March",
    question: "What is the product of the solutions of $x^3 - 4x^2 - 7x + 10 = 0$?",
    options: ["-10", "-12", "14", "5"],
    correctAnswer: 0,
    explanation: "For a polynomial $ax^3+bx^2+cx+d=0$, the product of roots is $-d/a$. Here, $-10 / 1 = -10$. Answer: A."
  },
  {
    id: "est1_2022_march_q29",
    examId: "EST12022March",
    question: "A lobby in a hotel offers 12 choices of fresh juices, 7 choices of smoothies, and 4 choices of milk shakes. A customer can choose to drink just one course, or two different courses, or all three courses. Assuming all choices are available, how many different possible drinks does the hotel offer?",
    options: ["368", "128", "519", "412"],
    correctAnswer: 2,
    explanation: "To choose an item from each category or none, there are $(12+1) \\times (7+1) \\times (4+1) - 1$ total combinations. $13 \\times 8 \\times 5 - 1 = 520 - 1 = 519$. Answer: C."
  },
  {
    id: "est1_2022_march_q30",
    examId: "EST12022March",
    question: "What is the y-intercept of the line passing through points $(5, 5)$ and $(-5, -1)$?",
    options: ["-3", "2", "0", "4"],
    correctAnswer: 1,
    explanation: "Slope $m = \\frac{5 - (-1)}{5 - (-5)} = \\frac{6}{10} = 0.6$. Equation: $y - 5 = 0.6(x - 5) \\Rightarrow y = 0.6x - 3 + 5 \\Rightarrow y = 0.6x + 2$. Y-intercept is 2. Answer: B."
  },
  {
    id: "est1_2022_march_q31",
    examId: "EST12022March",
    question: "If $f(x) = \\frac{1}{x} - x$ and $g(x) = f(2x)$, what is the value of $g(-3)$?",
    options: ["35/6", "15/14", "5/7", "-4/7"],
    correctAnswer: 0,
    explanation: "$g(-3) = f(2(-3)) = f(-6) = \\frac{1}{-6} - (-6) = -\\frac{1}{6} + 6 = \\frac{35}{6}$. Answer: A."
  },
  {
    id: "est1_2022_march_q32",
    examId: "EST12022March",
    question: "Three friends divided a prize as follows: the youngest received 3/5 of the prize, the middle friend received 1/4 of the prize, and the eldest received the remaining $\\$57$. What was the value, in dollars, of the prize?",
    options: ["380", "420", "140", "270"],
    correctAnswer: 0,
    explanation: "Let total be $x$. Total received = $\\frac{3}{5}x + \\frac{1}{4}x = \\frac{12}{20}x + \\frac{5}{20}x = \\frac{17}{20}x$. Remaining is $\\frac{3}{20}x$. So $\\frac{3}{20}x = 57 \\Rightarrow x = 57 \\times \\frac{20}{3} = 380$. Answer: A."
  },
  {
    id: "est1_2022_march_q33",
    examId: "EST12022March",
    question: "If $a/b$ is negative, which of the following is definitely negative?",
    options: ["2ab", "a^2b", "(b-a)^2", "a-b"],
    correctAnswer: 0,
    explanation: "If $a/b$ is negative, $a$ and $b$ have opposite signs. The product $ab$ must also be negative. Hence $2ab$ is definitely negative. Answer: A."
  },
  {
    id: "est1_2022_march_q34",
    examId: "EST12022March",
    question: "What is the area of the shaded region in the figure below? (Figure shows a shape with a rectangular piece subtracted from a larger triangle)",
    options: ["47.12", "26.75", "14.72", "11.15"],
    correctAnswer: 1,
    explanation: "Based on the answer key which specifies the answer as 26.75, it's B."
  },
  {
    id: "est1_2022_march_q35",
    examId: "EST12022March",
    question: "ABCD is a parallelogram such that $A(1, -2)$, $B(1, 3)$, $C(-1, 3)$. What are the coordinates of D, the fourth vertex of the parallelogram?",
    options: ["D (-1;2)", "D (-2;-1)", "D (-1;-2)", "D (3;2)"],
    correctAnswer: 2,
    explanation: "In a parallelogram ABCD, the diagonals bisect each other, so midpoints of AC and BD are identical: $\\frac{x_A+x_C}{2} = \\frac{x_B+x_D}{2} \\Rightarrow x_D = x_A + x_C - x_B = 1 + (-1) - 1 = -1$. $y_D = y_A + y_C - y_B = -2 + 3 - 3 = -2$. Coordinates are $(-1, -2)$. Answer: C."
  },
  {
    id: "est1_2022_march_q36",
    examId: "EST12022March",
    question: "What is the inverse function of $f(x) = \\frac{2x+3}{3x+5}$?",
    options: ["$f^{-1}(x) = \\frac{-5x - 3}{-3x - 2}$", "$f^{-1}(x) = \\frac{-3x - 5}{-3x - 2}$", "$f^{-1}(x) = \\frac{-5x + 3}{3x - 2}$", "$f^{-1}(x) = \\frac{3x + 5}{3x + 2}$"],
    correctAnswer: 2,
    explanation: "Let $y = \\frac{2x+3}{3x+5}$. $y(3x+5) = 2x+3 \\Rightarrow 3xy + 5y = 2x + 3 \\Rightarrow 3xy - 2x = 3 - 5y \\Rightarrow x(3y - 2) = 3 - 5y \\Rightarrow x = \\frac{-5y+3}{3y-2}$. Thus $f^{-1}(x) = \\frac{-5x+3}{3x-2}$. Answer: C."
  }
];
