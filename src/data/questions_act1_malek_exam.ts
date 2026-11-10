import { Question } from '../../types';

export const ACT1_MALEK_EXAM: Question[] = [
  {
    id: 1,
    question: "Round $45.672$ to the nearest tenth.",
    options: ["$45.6$", "$45.7$", "$45.67$", "$45.68$"],
    correctAnswer: 1,
    explanation: "To round $45.672$ to the nearest tenth, look at the hundredths digit, which is $7$. Since $7 \\geq 5$, round up the tenths digit by $1$. $45.6 + 0.1 = 45.7$.",
    category: "Malek Exam"
  },
  {
    id: 2,
    question: "Round $129.349$ to the nearest tenth.",
    options: ["$129.3$", "$129.4$", "$129.35$", "$129.34$"],
    correctAnswer: 0,
    explanation: "To round $129.349$ to the nearest tenth, look at the hundredths digit, which is $4$. Since $4 < 5$, the tenths digit remains the same. The rounded value is $129.3$.",
    category: "Malek Exam"
  },
  {
    id: 3,
    question: "Round $8.4561$ to the nearest hundredth.",
    options: ["$8.45$", "$8.46$", "$8.4$", "$8.5$"],
    correctAnswer: 1,
    explanation: "To round $8.4561$ to the nearest hundredth, look at the thousandths digit, which is $6$. Since $6 \\geq 5$, round up the hundredths digit by $1$. $8.45 + 0.01 = 8.46$.",
    category: "Malek Exam"
  },
  {
    id: 4,
    question: "Round $99.994$ to the nearest hundredth.",
    options: ["$99.99$", "$100.00$", "$99.9$", "$100.0$"],
    correctAnswer: 0,
    explanation: "To round $99.994$ to the nearest hundredth, look at the thousandths digit, which is $4$. Since $4 < 5$, the hundredths digit remains the same. The rounded value is $99.99$.",
    category: "Malek Exam"
  },
  {
    id: 5,
    question: "A recipe calls for $3$ cups of flour for every $2$ cups of sugar. If you use $9$ cups of flour, how many cups of sugar are needed?",
    options: ["$4$", "$6$", "$8$", "$12$"],
    correctAnswer: 1,
    explanation: "The ratio of flour to sugar is $3:2$. Set up a proportion: $\\frac{3}{2} = \\frac{9}{x}$. Cross-multiplying gives $3x = 18$, so $x = 6$.",
    category: "Malek Exam"
  },
  {
    id: 6,
    question: "In a class, the ratio of boys to girls is $4:5$. If there are $20$ boys, how many girls are in the class?",
    options: ["$16$", "$20$", "$25$", "$30$"],
    correctAnswer: 2,
    explanation: "The ratio of boys to girls is $4:5$. Set up a proportion: $\\frac{4}{5} = \\frac{20}{x}$. Cross-multiplying gives $4x = 100$, so $x = 25$.",
    category: "Malek Exam"
  },
  {
    id: 7,
    question: "A car travels $150$ miles on $5$ gallons of gas. At this rate, how many miles can it travel on $8$ gallons of gas?",
    options: ["$200$", "$240$", "$250$", "$300$"],
    correctAnswer: 1,
    explanation: "The ratio of miles to gallons is $150:5$, which simplifies to $30$ miles per gallon. For $8$ gallons, the distance is $30 \\times 8 = 240$ miles.",
    category: "Malek Exam"
  },
  {
    id: 8,
    question: "The cost $C$ of apples varies directly with the number of pounds $p$ purchased. If $4$ pounds cost $\\$12$, what is the cost of $7$ pounds?",
    options: ["$\\$18$", "$\\$21$", "$\\$24$", "$\\$28$"],
    correctAnswer: 1,
    explanation: "Since $C$ varies directly with $p$, $C = kp$. We know $12 = k(4)$, so $k = 3$. The cost for $7$ pounds is $C = 3(7) = \\$21$.",
    category: "Malek Exam"
  },
  {
    id: 9,
    question: "If $y$ is directly proportional to $x$, and $y = 15$ when $x = 3$, find the value of $y$ when $x = 8$.",
    options: ["$30$", "$40$", "$45$", "$50$"],
    correctAnswer: 1,
    explanation: "Since $y$ is directly proportional to $x$, $y = kx$. We know $15 = k(3)$, so $k = 5$. When $x = 8$, $y = 5(8) = 40$.",
    category: "Malek Exam"
  },
  {
    id: 10,
    question: "The distance $d$ a train travels varies directly with the time $t$ it takes. If the train travels $120$ miles in $2$ hours, how far will it travel in $5$ hours?",
    options: ["$240 \\text{ miles}$", "$300 \\text{ miles}$", "$360 \\text{ miles}$", "$400 \\text{ miles}$"],
    correctAnswer: 1,
    explanation: "Since $d$ varies directly with $t$, $d = kt$. We know $120 = k(2)$, so $k = 60$. In $5$ hours, the distance is $d = 60(5) = 300$ miles.",
    category: "Malek Exam"
  },
  {
    id: 11,
    question: "Solve for $x$: $3x + 7 = 22$",
    options: ["$4$", "$5$", "$6$", "$7$"],
    correctAnswer: 1,
    explanation: "Subtract $7$ from both sides to get $3x = 15$. Divide by $3$ to find $x = 5$.",
    category: "Malek Exam"
  },
  {
    id: 12,
    question: "Find the value of $m$ in the equation: $5m - 4 = 2m + 11$",
    options: ["$2$", "$3$", "$4$", "$5$"],
    correctAnswer: 3,
    explanation: "Subtract $2m$ from both sides to get $3m - 4 = 11$. Add $4$ to both sides to get $3m = 15$. Divide by $3$ to find $m = 5$.",
    category: "Malek Exam"
  },
  {
    id: 13,
    question: "Solve the equation for $y$: $2(y - 3) = 4y - 14$",
    options: ["$3$", "$4$", "$5$", "$6$"],
    correctAnswer: 1,
    explanation: "Distribute the $2$ on the left side: $2y - 6 = 4y - 14$. Subtract $2y$ from both sides: $-6 = 2y - 14$. Add $14$ to both sides: $8 = 2y$. Divide by $2$ to find $y = 4$.",
    category: "Malek Exam"
  }
];
