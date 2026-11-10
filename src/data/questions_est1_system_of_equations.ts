import { Question } from '../../types';

export const EST1_SYSTEM_OF_EQUATIONS_SET: Question[] = [
  {
    id: 1,
    question: "Amina went to the flower shop and bought 2 roses and 5 daisies for 6 EGP. Lara bought from the same shop, 4 roses and 2 daisies for 4 EGP. How much should Ahmad pay to buy 2 roses and 2 daisies?",
    options: ["1 EGP", "1.5 EGP", "2 EGP", "3 EGP"],
    correctAnswer: 3,
    explanation: "Set up a system of linear equations where $r$ is the cost of a rose and $d$ is the cost of a daisy:\n1) $2r + 5d = 6$\n2) $4r + 2d = 4 \\implies 2r + d = 2 \\implies 2r = 2 - d$\nSubstitute $2r = 2 - d$ into equation (1):\n$(2 - d) + 5d = 6 \\implies 2 + 4d = 6 \\implies 4d = 4 \\implies d = 1$ EGP.\nThen $2r + 1 = 2 \\implies 2r = 1 \\implies r = 0.5$ EGP.\nFor Ahmad: $2r + 2d = 2(0.5) + 2(1) = 1 + 2 = 3$ EGP.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Linear Systems", "EST1"]
  },
  {
    id: 2,
    question: "In the system of equations below, $a$ is a constant and $(x, y)$ is a solution, where $x = 3$. What is the value of $a$?\n$$\\begin{cases} 3y = 12 - 3y \\\\ y + a = x - 1 \\end{cases}$$",
    options: ["$-4$", "$0$", "$2$", "$4$"],
    correctAnswer: 1,
    explanation: "1) From the first equation: $3y + 3y = 12 \\implies 6y = 12 \\implies y = 2$.\n2) Substitute $x = 3$ and $y = 2$ into the second equation:\n$2 + a = 3 - 1 \\implies 2 + a = 2 \\implies a = 0$.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Linear Systems", "EST1"]
  },
  {
    id: 3,
    question: "If $2x - 3y = 14$ and $-x + 2y = -8$, what is the value of $x + y$?",
    options: ["$-2$", "$0$", "$2$", "$6$"],
    correctAnswer: 2,
    explanation: "Multiply the second equation by $2$:\n$-2x + 4y = -16$\nAdd this to the first equation $2x - 3y = 14$:\n$(2x - 3y) + (-2x + 4y) = 14 - 16 \\implies y = -2$.\nSubstitute $y = -2$ into $-x + 2(-2) = -8 \\implies -x - 4 = -8 \\implies -x = -4 \\implies x = 4$.\nTherefore, $x + y = 4 + (-2) = 2$.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Linear Systems", "EST1"]
  },
  {
    id: 4,
    question: "Given $2x + y = 8$ and $3y + x = -1$. What is the value of $y - 2x$?",
    options: ["$-16$", "$-12$", "$-8$", "$8$"],
    correctAnswer: 1,
    explanation: "From equation (1): $y = 8 - 2x$.\nSubstitute into equation (2): $3(8 - 2x) + x = -1 \\implies 24 - 6x + x = -1 \\implies 24 - 5x = -1 \\implies -5x = -25 \\implies x = 5$.\nThen $y = 8 - 2(5) = -2$.\nCalculate $y - 2x = -2 - 2(5) = -2 - 10 = -12$.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Linear Systems", "EST1"]
  },
  {
    id: 5,
    question: "The price of three squash and two zucchini is 10 EGP, while the price of five squash and three zucchini is 16.5 EGP. What is the price of one squash and four zucchini?",
    options: ["7 EGP", "5 EGP", "10 EGP", "8.5 EGP"],
    correctAnswer: 1,
    explanation: "Let $s$ be the price of squash and $z$ be the price of zucchini:\n1) $3s + 2z = 10$\n2) $5s + 3z = 16.5$\nMultiply (1) by 3: $9s + 6z = 30$.\nMultiply (2) by 2: $10s + 6z = 33$.\nSubtract the two equations: $s = 3$ EGP.\nSubstitute $s = 3$ into (1): $3(3) + 2z = 10 \\implies 9 + 2z = 10 \\implies 2z = 1 \\implies z = 0.5$ EGP.\nPrice of 1 squash and 4 zucchini: $1(3) + 4(0.5) = 3 + 2 = 5$ EGP.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Word Problems", "EST1"]
  },
  {
    id: 6,
    question: "Shahira and Nicole went to the supermarket to buy chocolate. The list of what they bought and the total price paid can be seen in the table below:\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Customer</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Brand A Chocolates</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Brand B Chocolates</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Total Paid ($)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Shahira</td><td class=\"border border-gray-400 px-2 py-1\">7</td><td class=\"border border-gray-400 px-2 py-1\">3</td><td class=\"border border-gray-400 px-2 py-1\">25.4</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Nicole</td><td class=\"border border-gray-400 px-2 py-1\">4</td><td class=\"border border-gray-400 px-2 py-1\">5</td><td class=\"border border-gray-400 px-2 py-1\">24.7</td></tr>\n  </tbody>\n</table>\nIf you went to the same supermarket and bought 1 chocolate from brand \"A\" and 3 chocolates from brand \"B\", how much will you pay?",
    options: ["$5.4", "$7.5", "$10", "$11.6"],
    correctAnswer: 3,
    explanation: "Let $A$ and $B$ be the prices of brand A and B chocolates:\n1) $7A + 3B = 25.4$\n2) $4A + 5B = 24.7$\nMultiply (1) by 5: $35A + 15B = 127$.\nMultiply (2) by 3: $12A + 15B = 74.1$.\nSubtract: $23A = 52.9 \\implies A = 2.3$.\nSubstitute $A = 2.3$ into (2): $4(2.3) + 5B = 24.7 \\implies 9.2 + 5B = 24.7 \\implies 5B = 15.5 \\implies B = 3.1$.\nTotal for 1 brand A and 3 brand B chocolates: $1(2.3) + 3(3.1) = 2.3 + 9.3 = 11.6$ dollars.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Word Problems", "EST1"]
  },
  {
    id: 7,
    question: "($d$ and $m$ are constants). Given that the solution of the system of equations below is $(2, 5)$, what is the value of $2mx - 3dy$?\n$$\\begin{cases} dx - 2my = -14 \\\\ 3dx + 6my = 78 \\end{cases}$$",
    options: ["$-37$", "$-18$", "$11$", "$20$"],
    correctAnswer: 0,
    explanation: "Substitute $x = 2$ and $y = 5$ into the system:\n1) $2d - 10m = -14$\n2) $6d + 30m = 78$\nMultiply equation (1) by 3: $6d - 30m = -42$.\nAdd to equation (2): $12d = 36 \\implies d = 3$.\nSubstitute $d = 3$ into (1): $2(3) - 10m = -14 \\implies 6 - 10m = -14 \\implies -10m = -20 \\implies m = 2$.\nWith $x = 2$, $y = 5$, $m = 2$, $d = 3$:\n$2mx - 3dy = 2(2)(2) - 3(3)(5) = 8 - 45 = -37$.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Linear Systems", "EST1"]
  },
  {
    id: 8,
    question: "What is the solution of the system of equations below?\n$$\\begin{cases} \\frac{2}{3}x + y = -3 \\\\ \\frac{x}{3} + \\frac{y}{2} = -3 \\end{cases}$$",
    options: ["$(-6, 1)$", "$(6, 9)$", "$(6, -7)$", "$\\emptyset$"],
    correctAnswer: 3,
    explanation: "Multiply the second equation by 2:\n$2\\left(\\frac{x}{3} + \\frac{y}{2}\\right) = 2(-3) \\implies \\frac{2}{3}x + y = -6$.\nNotice that the first equation is $\\frac{2}{3}x + y = -3$.\nSince the left-hand sides are identical but $-3 \\neq -6$, the lines are parallel and never intersect. Therefore, the system has no solution ($\\emptyset$).",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "No Solution", "EST1"]
  },
  {
    id: 9,
    question: "Which of the following is a point of intersection between the line with equation $y = 3x + 9$ and the parabola with the equation $y = 2x^2 + 3x + 1$?",
    options: ["$(2, 3)$", "$(2, 15)$", "$(-2, 15)$", "$(-2, 2)$"],
    correctAnswer: 1,
    explanation: "Set the two equations equal to find the points of intersection:\n$2x^2 + 3x + 1 = 3x + 9$\nSubtract $3x$ and $1$ from both sides:\n$2x^2 = 8 \\implies x^2 = 4 \\implies x = \\pm 2$.\nIf $x = 2 \\implies y = 3(2) + 9 = 15 \\implies (2, 15)$.\nIf $x = -2 \\implies y = 3(-2) + 9 = 3 \\implies (-2, 3)$.\nAmong the choices, $(2, 15)$ is Option B.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Nonlinear Systems", "EST1"]
  },
  {
    id: 10,
    question: "From the system of equations below, what is the value of $2x + 7y$?\n$$\\begin{cases} -2x + 5y = 39 \\\\ 3x = -4y + 45 \\end{cases}$$",
    options: ["$-57$", "$15$", "$39$", "$69$"],
    correctAnswer: 3,
    explanation: "Rearrange the second equation: $3x + 4y = 45$.\nMultiply the first equation by 3: $-6x + 15y = 117$.\nMultiply the second equation by 2: $6x + 8y = 90$.\nAdd the two equations:\n$23y = 207 \\implies y = 9$.\nSubstitute $y = 9$ into $-2x + 5(9) = 39 \\implies -2x + 45 = 39 \\implies -2x = -6 \\implies x = 3$.\nCalculate $2x + 7y = 2(3) + 7(9) = 6 + 63 = 69$.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Linear Systems", "EST1"]
  },
  {
    id: 11,
    question: "Which of the following is a point of intersection between the line with the equation $y = 3x + 2$ and the parabola with the equation $y = 4x^2 - 9x + 11$?",
    options: ["$(3.5, 3)$", "$(4, 14)$", "$(-2, -4)$", "$(1.5, 6.5)$"],
    correctAnswer: 3,
    explanation: "Set the two equations equal:\n$4x^2 - 9x + 11 = 3x + 2 \\implies 4x^2 - 12x + 9 = 0$.\nNotice this is a perfect square trinomial:\n$(2x - 3)^2 = 0 \\implies 2x - 3 = 0 \\implies x = 1.5$.\nSubstitute $x = 1.5$ into $y = 3x + 2 \\implies y = 3(1.5) + 2 = 4.5 + 2 = 6.5$.\nThe point of intersection is $(1.5, 6.5)$.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Nonlinear Systems", "EST1"]
  },
  {
    id: 12,
    question: "Based on the system of equations below, what is the value of $4x + 4y$?\n$$\\begin{cases} 13x - 7y = 12 \\\\ 7x - 13y = 6 \\end{cases}$$",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correctAnswer: 3,
    explanation: "Subtract the second equation from the first equation:\n$(13x - 7y) - (7x - 13y) = 12 - 6$\n$6x + 6y = 6$\nDivide by 6:\n$x + y = 1$.\nTherefore, $4x + 4y = 4(x + y) = 4(1) = 4$.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Linear Combinations", "EST1"]
  },
  {
    id: 13,
    question: "A 100-page album costs twice as much as a 50-page album. The cost of three 100-page albums and two 50-page albums is $\$t$. How much does a 50-page album cost?",
    options: ["$8t$", "$4t$", "$\\frac{t}{4}$", "$\\frac{t}{8}$"],
    correctAnswer: 3,
    explanation: "Let $x$ be the cost of a 50-page album. Then a 100-page album costs $2x$.\nThe total cost for three 100-page albums and two 50-page albums is:\n$3(2x) + 2(x) = t \\implies 6x + 2x = t \\implies 8x = t \\implies x = \\frac{t}{8}$.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Word Problems", "EST1"]
  },
  {
    id: 14,
    question: "A truck contains 15 identical boxes that are either red or blue. The red box weighs 3 kg and the blue box weighs 2 kg. If the total weight of the boxes is 36 kgs, what is the difference between the red and blue boxes in the truck?",
    options: ["$6$", "$9$", "$1$", "$3$"],
    correctAnswer: 3,
    explanation: "Let $r$ be the number of red boxes and $b$ be the number of blue boxes:\n1) $r + b = 15 \\implies b = 15 - r$\n2) $3r + 2b = 36$\nSubstitute $b = 15 - r$ into (2):\n$3r + 2(15 - r) = 36 \\implies 3r + 30 - 2r = 36 \\implies r = 6$.\nThen $b = 15 - 6 = 9$.\nThe difference between the number of red and blue boxes is $|6 - 9| = 3$.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Word Problems", "EST1"]
  },
  {
    id: 15,
    question: "If $x + y = 500$ and $3x + 2y = 3000$, what is the value of $5x - y$?",
    options: ["$8000$", "$7000$", "$11500$", "$-7000$"],
    correctAnswer: 2,
    explanation: "Multiply the first equation by 2:\n$2x + 2y = 1000$.\nSubtract this from $3x + 2y = 3000$:\n$(3x + 2y) - (2x + 2y) = 3000 - 1000 \\implies x = 2000$.\nThen $y = 500 - x = 500 - 2000 = -1500$.\nCalculate $5x - y = 5(2000) - (-1500) = 10000 + 1500 = 11500$.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Linear Systems", "EST1"]
  },
  {
    id: 16,
    question: "When a system of two linear equations has a unique solution, how do the graphs of the equations appear?",
    options: ["The lines are parallel.", "The lines are confounded.", "The lines intersect at a single point.", "None of the above"],
    correctAnswer: 2,
    explanation: "A system of two linear equations has a unique solution if and only if the two lines intersect at exactly one single point (having different slopes).",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Conceptual", "EST1"]
  },
  {
    id: 17,
    question: "When a system of two linear equations has no solution, how do the graphs of the equations appear?",
    options: ["The lines intersect at a single point.", "The lines have the same x-intercept.", "The lines are parallel.", "The lines are confounded."],
    correctAnswer: 2,
    explanation: "A system of two linear equations has no solution if and only if the lines are parallel (same slope, different y-intercepts), meaning they never intersect.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Conceptual", "EST1"]
  },
  {
    id: 18,
    question: "The system of equations below has infinitely many solutions. If $a$ and $c$ are constants, what is the value of $c$?\n$$\\begin{cases} ax - \\frac{1}{2}y = c \\\\ 2x + 4y = 5 \\end{cases}$$",
    options: ["$-\\frac{5}{8}$", "$\\frac{1}{4}$", "$\\frac{5}{4}$", "$\\frac{11}{4}$"],
    correctAnswer: 0,
    explanation: "For a system $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$ to have infinitely many solutions, the coefficient ratios must all be equal:\n$$\\frac{a}{2} = \\frac{-1/2}{4} = \\frac{c}{5}$$\nSimplify the middle ratio: $\\frac{-1/2}{4} = -\\frac{1}{8}$.\nTherefore, $\\frac{c}{5} = -\\frac{1}{8} \\implies c = -\\frac{5}{8}$.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Infinitely Many Solutions", "EST1"]
  },
  {
    id: 19,
    question: "Which of the following systems has infinite number of solutions?",
    options: [
      "$$\\begin{cases} 2x - 3y = 1 \\\\ x + 3y = 4 \\end{cases}$$",
      "$$\\begin{cases} -2x + y = -1 \\\\ 5y = -2x \\end{cases}$$",
      "$$\\begin{cases} 3x + y = 2 \\\\ x = -5y \\end{cases}$$",
      "$$\\begin{cases} -2x - 2y = 4 \\\\ y = -x - 2 \\end{cases}$$"
    ],
    correctAnswer: 3,
    explanation: "In option D, rearrange the second equation $y = -x - 2 \\implies x + y = -2$.\nMultiply by $-2$: $-2x - 2y = 4$, which is identical to the first equation in option D.\nSince the two equations represent the exact same line, option D has infinitely many solutions.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Infinitely Many Solutions", "EST1"]
  },
  {
    id: 20,
    question: "In the system of equations below, $a$ and $b$ are constants and $a = 2b$. If the system has no solution, which of the following could be a possible value of $a$?\n$$\\begin{cases} 2x + by = 10 \\\\ ax + 4y = 15 \\end{cases}$$",
    options: ["$-2$", "$\\frac{1}{2}$", "$4$", "$8$"],
    correctAnswer: 2,
    explanation: "A system $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$ has no solution when:\n$$\\frac{2}{a} = \\frac{b}{4} \\neq \\frac{10}{15}$$\nCross-multiply: $ab = 8$.\nSince $a = 2b$, substitute into $ab = 8 \\implies (2b)(b) = 8 \\implies 2b^2 = 8 \\implies b^2 = 4 \\implies b = \\pm 2$.\nIf $b = 2$, then $a = 2(2) = 4$.\nCheck ratio: $\\frac{2}{4} = \\frac{2}{4} = \\frac{1}{2}$, and $\\frac{10}{15} = \\frac{2}{3} \\neq \\frac{1}{2}$.\nThus, $a = 4$ is a possible value.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "No Solution", "EST1"]
  },
  {
    id: 21,
    question: "For O.K theater tickets, a ticket for an adult is 5 dollars more than a ticket for a child. If a group of 6 adults and 10 children pay a total of 142 dollars, what is the cost, in dollars, of a ticket for one adult and one child?",
    options: ["$19$", "$18$", "$17$", "$16$"],
    correctAnswer: 0,
    explanation: "Let $c$ be the cost of a child ticket. An adult ticket costs $a = c + 5$.\nSet up the equation for the total cost:\n$6a + 10c = 142 \\implies 6(c + 5) + 10c = 142 \\implies 6c + 30 + 10c = 142 \\implies 16c = 112 \\implies c = 7$ dollars.\nSo an adult ticket costs $a = 7 + 5 = 12$ dollars.\nThe cost for one adult and one child ticket is $12 + 7 = 19$ dollars.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Word Problems", "EST1"]
  },
  {
    id: 22,
    question: "In the system of equations below, $k$ is a constant. For which of the following values of $k$ does the system of equations have no real solution?\n$$\\begin{cases} y = -\\frac{1}{10}x^2 + k \\\\ y = 5 \\end{cases}$$",
    options: ["$10$", "$8.5$", "$5$", "$-0.05$"],
    correctAnswer: 3,
    explanation: "Set the two equations equal:\n$-\\frac{1}{10}x^2 + k = 5 \\implies -\\frac{1}{10}x^2 = 5 - k \\implies x^2 = 10(k - 5)$.\nFor the system to have no real solution, $x^2$ must be strictly negative ($x^2 < 0$):\n$10(k - 5) < 0 \\implies k - 5 < 0 \\implies k < 5$.\nAmong the given options ($10, 8.5, 5, -0.05$), only $k = -0.05$ is less than 5.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Nonlinear Systems", "EST1"]
  },
  {
    id: 23,
    question: "In the equations below, what is the value of $x^2 + y^2$?\n$$\\begin{cases} x - y = 5 \\\\ xy = 10 \\end{cases}$$",
    options: ["$15$", "$25$", "$36$", "$45$"],
    correctAnswer: 3,
    explanation: "Square both sides of the first equation $(x - y = 5)$:\n$(x - y)^2 = 5^2 \\implies x^2 - 2xy + y^2 = 25$.\nSubstitute $xy = 10$ into the expression:\n$x^2 - 2(10) + y^2 = 25 \\implies x^2 - 20 + y^2 = 25 \\implies x^2 + y^2 = 45$.",
    category: "(Est1- system of equations )",
    topics: ["System of Equations", "Algebraic Identities", "EST1"]
  }
];
