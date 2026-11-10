import { Question } from './types';

export const EST1_INEQUALITY_SET: Question[] = [
  {
    id: 1,
    question: "Given $2x - 7 < 5$ and $\\frac{3x}{2} - 2 > \\frac{19}{4}$, what is the only integer $x$ that satisfies both inequalities?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    explanation: "$2x - 7 < 5 \\Rightarrow 2x < 12 \\Rightarrow x < 6$. $\\frac{3x}{2} - 2 > \\frac{19}{4} \\Rightarrow \\frac{3x}{2} > \\frac{19}{4} + \\frac{8}{4} = \\frac{27}{4} \\Rightarrow 3x > \\frac{27}{2} \\Rightarrow x > 4.5$. Integer satisfying $4.5 < x < 6$ is 5.",
    youtubeLink: "https://youtu.be/xtFMdhjZSHs",
    category: "Inequalities"
  },
  {
    id: 2,
    question: "Which of the following points is NOT a solution to $|2x - 1| > 3y$?",
    options: ["$(4, 2)$", "$(2, 1)$", "$(-1, -1)$", "$(-2, 1)$"],
    correctAnswer: 1,
    explanation: "A: $|8-1| > 6 \\Rightarrow 7 > 6$ (True). B: $|4-1| > 3 \\Rightarrow 3 > 3$ (False). C: $|-2-1| > -3 \\Rightarrow 3 > -3$ (True). D: $|-4-1| > 3 \\Rightarrow 5 > 3$ (True).",
    category: "Inequalities"
  },
  {
    id: 3,
    question: "If $3 < 2x + 7 \\le 15$, which of the following integers represents the smallest value for $x + 3$?",
    options: ["1", "2", "-2", "-1"],
    correctAnswer: 1,
    explanation: "$3 < 2x + 7 \\le 15 \\Rightarrow -4 < 2x \\le 8 \\Rightarrow -2 < x \\le 4$. Smallest integer $x$ is $-1$. Smallest value for $x+3 = -1+3 = 2$.",
    youtubeLink: "https://youtu.be/WF7RsEo8WiE",
    category: "Inequalities"
  },
  {
    id: 4,
    question: "If $k$ is an integer, and $\\frac{k+5+6}{3}$ is greater than 15, what is the lowest possible value of $k$?",
    options: ["34", "35", "33", "36"],
    correctAnswer: 1,
    explanation: "$\\frac{k+11}{3} > 15 \\Rightarrow k+11 > 45 \\Rightarrow k > 34$. Lowest integer is 35.",
    category: "Inequalities"
  },
  {
    id: 5,
    question: "Among the following ordered pairs, which one is a solution of the system $\\begin{cases} y > x \\\\ y \\le -x \\end{cases}$?",
    options: ["$(-1, 0)$", "$(0, -1)$", "$(-1, 2)$", "$(0, 1)$"],
    correctAnswer: 0,
    explanation: "A: $0 > -1$ (True), $0 \\le 1$ (True). Correct.",
    youtubeLink: "https://youtu.be/cFKdhP8WlUU",
    category: "Systems"
  },
  {
    id: 6,
    question: "If $(x - 2)(y + 3) \\ge 0$, then which of $x$ and $y$ could verify the inequality?",
    options: ["$x = 3; y = -4$", "$x = 1; y = -2$", "$x = -1; y = -4$", "$x = -2; y = 0$"],
    correctAnswer: 2,
    explanation: "C: $(-1-2)(-4+3) = (-3)(-1) = 3 \\ge 0$. True.",
    youtubeLink: "https://youtu.be/imPCwLPlxLI",
    category: "Inequalities"
  },
  {
    id: 7,
    question: "If $|-2b - 3| \\le 7$, how many possible integer values of $b$ are there?",
    options: ["6", "8", "10", "12"],
    correctAnswer: 1,
    explanation: "$-7 \\le -2b - 3 \\le 7 \\Rightarrow -4 \\le -2b \\le 10 \\Rightarrow 2 \\ge b \\ge -5$. Integers: -5, -4, -3, -2, -1, 0, 1, 2. Count is 8.",
    category: "Inequalities"
  },
  {
    id: 8,
    question: "Which of the following intervals could be part of the solution of the inequality $|3x - 3| < 3$?",
    options: ["$[\\frac{1}{2}, \\frac{5}{2}]$", "$[\\frac{1}{4}, \\frac{3}{2}]$", "$[-\\frac{1}{2}, \\frac{1}{2}]$", "$[0, \\frac{1}{2}]$"],
    correctAnswer: 1,
    explanation: "$-3 < 3x - 3 < 3 \\Rightarrow 0 < 3x < 6 \\Rightarrow 0 < x < 2$. Only $[\\frac{1}{4}, \\frac{3}{2}]$ is fully contained in $(0, 2)$.",
    category: "Inequalities"
  },
  {
    id: 9,
    question: "For Bill's birthday party, his parents will pay $\\$35$ for the cake plus $\\$15$ per person for catering expenses. They will spend at most $\\$300$ for his party. The greatest integer in the solution set of one of the following inequalities gives the maximum number of people, $p$, who can attend the party. Which one?",
    options: [
      "$p + 50 \\ge 300$",
      "$p(15p + 35) \\ge 300$",
      "$(35 + 15)p \\le 300$",
      "$15p \\le 300$",
      "$15p + 35 \\le 300$"
    ],
    correctAnswer: 4,
    explanation: "Cost = $35 + 15p$. At most 300 means $\\le 300$. So $15p + 35 \\le 300$.",
    category: "Word Problem"
  },
  {
    id: 10,
    question: "In a certain board game... horizontal moves cost 5, vertical moves cost 3. Total points 800. At least 10 horizontal moves. Which system represents this?",
    options: [
      "$h + v \\ge 40, h \\le 10, 5h + 3v \\le 800$",
      "$h + v \\le 40, h \\ge 10, \\frac{h}{5} + \\frac{v}{3} \\le 800$",
      "$h + v \\le 40, h \\ge 10, 5h + 3v \\le 800$",
      "$h + v \\ge 40, h \\ge 10, \\frac{h}{5} + \\frac{v}{3} \\ge 800$"
    ],
    correctAnswer: 2,
    explanation: "Costs: $5h + 3v$. Points left 800 means total spent $\\le 800$. At least 10 horizontal: $h \\ge 10$. Total moves not exceed 40: $h+v \\le 40$.",
    category: "Systems"
  },
  {
    id: 11,
    question: "If $2z - 7(z - 1) \\le 1$ and $z$ is an integer, what is the least possible value of $z$?",
    options: ["-2", "0", "2", "4"],
    correctAnswer: 2,
    explanation: "$2z - 7z + 7 \\le 1 \\Rightarrow -5z \\le -6 \\Rightarrow z \\ge 1.2$. Least integer is 2.",
    category: "Inequalities"
  },
  {
    id: 12,
    question: "$-3 < 2x - y \\le 14$. Which point could be the solution for the inequality above?",
    options: ["$(0, 3)$", "$(4, -8)$", "$(3, 4)$", "$(4, 12)$"],
    correctAnswer: 2,
    explanation: "C: $2(3) - 4 = 2$. $-3 < 2 \\le 14$. True.",
    category: "Inequalities"
  },
  {
    id: 13,
    question: "If $-\\frac{4}{5}x + 3 \\ge 2 - \\frac{1}{5}x$, what is the highest value of $\\frac{3}{2}x + 4$?",
    options: ["3.5", "4.5", "5.5", "6.5"],
    correctAnswer: 3,
    explanation: "$1 \\ge \\frac{3}{5}x \\Rightarrow x \\le \\frac{5}{3}$. Max value = $\\frac{3}{2}(\\frac{5}{3}) + 4 = 2.5 + 4 = 6.5$.",
    category: "Inequalities"
  },
  {
    id: 14,
    question: "If $5(x + 2) - 3x \\le 4 + 2x + 3(x - 1)$, what is the solution of $x$?",
    options: ["$x \\le -3$", "$x \\le 3$", "$x \\ge 3$", "$x \\ge -3$"],
    correctAnswer: 2,
    explanation: "$2x + 10 \\le 5x + 1 \\Rightarrow 9 \\le 3x \\Rightarrow x \\ge 3$.",
    category: "Inequalities"
  },
  {
    id: 15,
    question: "Which value of $x$ could make the inequality $\\frac{2}{3}(x + 2) - x > 5$ true?",
    options: ["-12", "-10", "-8", "-6"],
    correctAnswer: 0,
    explanation: "$2(x+2) - 3x > 15 \\Rightarrow 2x + 4 - 3x > 15 \\Rightarrow -x > 11 \\Rightarrow x < -11$. Only -12 is less than -11.",
    category: "Inequalities"
  },
  {
    id: 16,
    question: "Given the two inequalities $3x + 1 \\ge 8$ and $4x - 1 < 3(x + 3)$, what is the greatest possible integer for $x$?",
    options: ["2", "3", "9", "10"],
    correctAnswer: 2,
    explanation: "$3x \\ge 7 \\Rightarrow x \\ge 2.33$. $4x - 1 < 3x + 9 \\Rightarrow x < 10$. Integers in $[2.33, 10)$ are 3, 4, ..., 9. Greatest is 9.",
    category: "Inequalities"
  },
  {
    id: 17,
    question: "For what value of $n$ is $|n + 4| + 1$ less than 0?",
    options: ["-5", "-4", "3", "There is no such value of n."],
    correctAnswer: 3,
    explanation: "$|n + 4| < -1$. Absolute value cannot be negative.",
    category: "Inequalities"
  },
  {
    id: 18,
    question: "The point $(8, 2)$ in the $xy$-plane is a solution to which of the following systems of inequalities?",
    options: [
      "$x > 0, y > 0$",
      "$x > 0, y < 0$",
      "$x < 0, y > 0$",
      "$x < 0, y < 0$"
    ],
    correctAnswer: 0,
    explanation: "Point $(8, 2)$ is in Quadrant I, where both $x$ and $y$ are positive.",
    category: "Systems"
  },
  {
    id: 19,
    question: "In Ms. Lee's class, the number of boys is more than twice the number of girls. There are at least 7 girls and there are no more than 15 boys. How many students are in the class?",
    options: ["19", "20", "21", "22"],
    correctAnswer: 3,
    explanation: "$b > 2g$, $g \\ge 7$, $b \\le 15$. If $g=7$, $b > 14$. Since $b \\le 15$, $b$ must be 15. Total = $7 + 15 = 22$.",
    category: "Word Problem"
  },
  {
    id: 20,
    question: "For a school summer concert... tickets $\\$5$ and $\\$10$. Must sell at least $\\$3000$. At most 500 tickets. Which system represents this?",
    options: [
      "$5x + 10y \\ge 3000, x + y \\le 500, x \\ge 0, y \\ge 0$",
      "$\\frac{5}{x} + \\frac{10}{y} \\le 500, x + y \\le 3000, x \\ge 0, y \\ge 0$",
      "$5x + 10y \\le 3000, x + y \\le 500, x \\ge 0, y \\ge 0$",
      "$5x + 10y > 3000, x + y < 500, x > 0, y > 0$"
    ],
    correctAnswer: 0,
    explanation: "Revenue $\\ge 3000 \\Rightarrow 5x + 10y \\ge 3000$. Total tickets $\\le 500 \\Rightarrow x + y \\le 500$.",
    category: "Systems"
  },
  {
    id: 21,
    question: "Which of the following is NOT a solution of the system of inequalities: $3x - y > 0$ and $2x + y > 1$?",
    options: ["$(3, 0)$", "$(2, 5)$", "$(0, -3)$", "$(5, -8)$"],
    correctAnswer: 2,
    explanation: "C: $3(0) - (-3) = 3 > 0$ (True). $2(0) + (-3) = -3 > 1$ (False).",
    category: "Systems"
  },
  {
    id: 22,
    question: "For a snowstorm... minimum rate 0.6 inches/hour, maximum 1.8 inches/hour. Which inequality represents rate $s$?",
    options: ["$s \\ge 2.4$", "$s \\ge 1.8$", "$0 \\le s \\le 0.6$", "$0.6 \\le s \\le 1.8$"],
    correctAnswer: 3,
    explanation: "Rate is between min and max inclusive: $0.6 \\le s \\le 1.8$.",
    category: "Inequalities"
  },
  {
    id: 23,
    question: "In the inequalities above, what is the greatest possible value of $a$? ($a^2 + b^2 \\le 25, b \\ge 3$)",
    options: ["-4", "-3", "3", "4"],
    correctAnswer: 3,
    explanation: "$a^2 \\le 25 - b^2$. Max $a$ occurs when $b$ is minimum ($b=3$). $a^2 \\le 25 - 9 = 16$. $a \\le 4$. Max value is 4.",
    category: "Inequalities"
  },
  {
    id: 24,
    question: "Which of the following ordered pairs satisfy both inequalities: $x + 3y \\le 8$ and $2x - y > 9$?",
    options: ["$(0, 3)$", "$(1, 2)$", "$(1, -2)$", "$(1, -9)$"],
    correctAnswer: 3,
    explanation: "D: $1 + 3(-9) = -26 \\le 8$ (True). $2(1) - (-9) = 11 > 9$ (True).",
    category: "Systems"
  },
  {
    id: 25,
    question: "Which of the following is not a solution of $|-8 + 3x| - 2 < 3$?",
    options: ["$\\frac{108}{25}$", "$\\frac{19}{5}$", "$\\frac{16}{5}$", "2", "$\\frac{19}{20}$"],
    correctAnswer: 4,
    explanation: "$|-8 + 3x| < 5 \\Rightarrow -5 < 3x - 8 < 5 \\Rightarrow 3 < 3x < 13 \\Rightarrow 1 < x < 4.33$. E: $19/20 = 0.95$, which is not greater than 1.",
    category: "Inequalities"
  }
];
