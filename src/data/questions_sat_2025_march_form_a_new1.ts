import { Question } from '../../types';

export const SAT_2025_MARCH_FORM_A_NEW1_SET: Question[] = [
  {
    id: 1,
    question: "Line $L$ in the $xy$-plane passes through the points $(0, 4)$ and $(6, 16)$. What is the slope of line $L$?",
    options: ["$\\frac{1}{2}$", "$2$", "$3$", "$4$"],
    correctAnswer: 1,
    explanation: "The slope $m$ of a line passing through $(x_1, y_1)$ and $(x_2, y_2)$ is given by:\\n$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$\\nPlugging in $(0, 4)$ and $(6, 16)$:\\n$$m = \\frac{16 - 4}{6 - 0} = \\frac{12}{6} = 2$$",
    category: "Algebra"
  },
  {
    id: 2,
    question: "Which of the following values of $x$ is a solution to the equation $3(x - 5) + 4 = 19$?",
    options: ["$8$", "$10$", "$12$", "$15$"],
    correctAnswer: 1,
    explanation: "Solve for $x$ step-by-step:\\n$$3(x - 5) + 4 = 19$$\\n$$3(x - 5) = 15$$\\n$$x - 5 = 5$$\\n$$x = 10$$"
  },
  {
    id: 3,
    question: "The graph below shows the temperature $T$ (in $^{\\circ}\\text{C}$) of a cooling liquid over time $t$ (in minutes).<br><div class=\"flex justify-center my-4\"><svg width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"border border-gray-300 rounded bg-white\"><line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"180\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"50\" y1=\"180\" x2=\"290\" y2=\"180\" stroke=\"#333\" stroke-width=\"2\"/><polygon points=\"46,25 50,15 54,25\" fill=\"#333\"/><polygon points=\"285,176 295,180 285,184\" fill=\"#333\"/><text x=\"10\" y=\"100\" font-size=\"11\" font-family=\"sans-serif\" font-weight=\"bold\" transform=\"rotate(-90 15 100)\">Temperature (°C)</text><text x=\"150\" y=\"205\" font-size=\"11\" font-family=\"sans-serif\" font-weight=\"bold\">Time (min)</text><text x=\"42\" y=\"195\" font-size=\"10\">0</text><text x=\"90\" y=\"195\" font-size=\"10\">5</text><text x=\"140\" y=\"195\" font-size=\"10\">10</text><text x=\"190\" y=\"195\" font-size=\"10\">15</text><text x=\"240\" y=\"195\" font-size=\"10\">20</text><text x=\"25\" y=\"183\" font-size=\"10\">20</text><text x=\"25\" y=\"143\" font-size=\"10\">40</text><text x=\"25\" y=\"103\" font-size=\"10\">60</text><text x=\"25\" y=\"63\" font-size=\"10\">80</text><text x=\"20\" y=\"23\" font-size=\"10\">100</text><line x1=\"50\" y1=\"20\" x2=\"250\" y2=\"180\" stroke=\"#2563eb\" stroke-width=\"2.5\"/></svg></div><br>What was the initial temperature of the liquid at $t = 0$ minutes?",
    options: ["$20^{\\circ}\\text{C}$", "$40^{\\circ}\\text{C}$", "$80^{\\circ}\\text{C}$", "$100^{\\circ}\\text{C}$"],
    correctAnswer: 3,
    explanation: "At $t = 0$ minutes (the $y$-intercept of the line), the graph starts at $T = 100^{\\circ}\\text{C}$."
  },
  {
    id: 4,
    question: "If $2x + 5y = 24$ and $x = 2y - 6$, what is the value of $y$?",
    options: ["$2$", "$4$", "$6$", "$8$"],
    correctAnswer: 1,
    explanation: "Substitute $x = 2y - 6$ into the first equation:\\n$$2(2y - 6) + 5y = 24$$\\n$$4y - 12 + 5y = 24$$\\n$$9y - 12 = 24$$\\n$$9y = 36$$\\n$$y = 4$$"
  },
  {
    id: 5,
    question: "The table below shows the frequency distribution of test scores for 25 students.<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Score</th><th class=\"border border-gray-400 px-2 py-1\">Frequency</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">$70$</td><td class=\"border border-gray-400 px-2 py-1\">$4$</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">$80$</td><td class=\"border border-gray-400 px-2 py-1\">$9$</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">$90$</td><td class=\"border border-gray-400 px-2 py-1\">$8$</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">$100$</td><td class=\"border border-gray-400 px-2 py-1\">$4$</td></tr></tbody></table><br>What is the median test score?",
    options: ["$70$", "$80$", "$85$", "$90$"],
    correctAnswer: 1,
    explanation: "With $n = 25$ total students, the median is the $\\frac{25 + 1}{2} = 13^{\\text{th}}$ position when arranged in increasing order.\\n- First $4$ scores are $70$.\\n- Next $9$ scores (positions $5$ through $13$) are $80$.\\nTherefore, the $13^{\\text{th}}$ score is $80$."
  },
  {
    id: 6,
    question: "For the quadratic function $f(x) = (x - 3)^2 + 7$, what is the minimum value of $f(x)$?",
    options: ["$-7$", "$-3$", "$3$", "$7$"],
    correctAnswer: 3,
    explanation: "The function is written in vertex form $f(x) = a(x - h)^2 + k$ with vertex $(h, k) = (3, 7)$. Since $a = 1 > 0$, the parabola opens upward and the minimum value of $f(x)$ is $k = 7$ at $x = 3$."
  },
  {
    id: 7,
    question: "A right cylinder has a base radius of $4\\text{ cm}$ and a height of $9\\text{ cm}$. What is the volume of the cylinder in cubic centimeters?",
    options: ["$36\\pi$", "$72\\pi$", "$144\\pi$", "$324\\pi$"],
    correctAnswer: 2,
    explanation: "The formula for the volume of a right cylinder is:\\n$$V = \\pi r^2 h$$\\nSubstituting $r = 4\\text{ cm}$ and $h = 9\\text{ cm}$:\\n$$V = \\pi (4)^2 (9) = \\pi (16)(9) = 144\\pi\\text{ cm}^3$$"
  },
  {
    id: 8,
    question: "If $5x - 3 > 2x + 12$, which of the following represents all possible values of $x$?",
    options: ["$x > 3$", "$x > 5$", "$x < 5$", "$x > 15$"],
    correctAnswer: 1,
    explanation: "Subtract $2x$ from both sides:\\n$$3x - 3 > 12$$\\nAdd $3$ to both sides:\\n$$3x > 15$$\\nDivide by $3$:\\n$$x > 5$$"
  },
  {
    id: 9,
    question: "In $\\triangle ABC$, angle $C$ is a right angle and $\\sin A = \\frac{3}{5}$. What is the value of $\\cos B$?",
    options: ["$\\frac{3}{5}$", "$\\frac{4}{5}$", "$\\frac{3}{4}$", "$\\frac{5}{3}$"],
    correctAnswer: 0,
    explanation: "In a right triangle with right angle $C$, angles $A$ and $B$ are complementary ($A + B = 90^{\\circ}$). By cofunction identities:\\n$$\\cos B = \\sin A = \\frac{3}{5}$$"
  },
  {
    id: 10,
    question: "The function $g(x) = 250(1.04)^x$ models the population of a town $x$ years after 2010. By what percentage does the population increase each year?",
    options: ["$0.04\\%$", "$0.4\\%$", "$4\\%$", "$40\\%$"],
    correctAnswer: 2,
    explanation: "In the exponential growth function $g(x) = a(1 + r)^x$, the growth factor is $1 + r = 1.04$. Thus, $r = 0.04$, which corresponds to a $4\\%$ annual increase."
  },
  {
    id: 11,
    question: "The equation $(x - 5)^2 + (y + 2)^2 = 49$ represents a circle in the $xy$-plane. What are the coordinates of the center and the radius of the circle?",
    options: [
      "Center $(5, -2)$, radius $7$",
      "Center $(-5, 2)$, radius $7$",
      "Center $(5, -2)$, radius $49$",
      "Center $(-5, 2)$, radius $49$"
    ],
    correctAnswer: 0,
    explanation: "The standard equation of a circle is $(x - h)^2 + (y - k)^2 = r^2$. Here, $h = 5$, $k = -2$, and $r^2 = 49 \\implies r = 7$. Thus, the center is $(5, -2)$ and the radius is $7$."
  },
  {
    id: 12,
    question: "If $4x + 12 = 28$, what is the value of $8x + 5$?",
    options: ["$21$", "$33$", "$37$", "$41$"],
    correctAnswer: 2,
    explanation: "First solve for $x$:\\n$$4x + 12 = 28 \\implies 4x = 16 \\implies x = 4$$\\nNow evaluate $8x + 5$:\\n$$8(4) + 5 = 32 + 5 = 37$$"
  },
  {
    id: 13,
    question: "A store originally priced an item at $\$80$. During a sale, the price was reduced by $20\\%$. After the sale, the store applied an additional $10\\%$ discount on the sale price. What was the final price of the item?",
    options: ["$\$56.00$", "$\$57.60$", "$\$60.00$", "$\$64.00$"],
    correctAnswer: 1,
    explanation: "- First discount ($20\\%$ off): $80 \\times (1 - 0.20) = 80 \\times 0.80 = \$64$.\\n- Second discount ($10\\%$ off $\$64$): $64 \\times (1 - 0.10) = 64 \\times 0.90 = \$57.60$."
  },
  {
    id: 14,
    question: "Which of the following is equivalent to the expression $\\frac{x^2 - 16}{x + 4}$ for $x \\neq -4$?",
    options: ["$x - 4$", "$x + 4$", "$x - 16$", "$x + 16$"],
    correctAnswer: 0,
    explanation: "Factor the numerator using the difference of squares $a^2 - b^2 = (a - b)(a + b)$:\\n$$\\frac{x^2 - 16}{x + 4} = \\frac{(x - 4)(x + 4)}{x + 4} = x - 4$$"
  },
  {
    id: 15,
    question: "The system of equations below has how many solutions in the $xy$-plane?\\n$$\\begin{cases} y = 2x - 3 \\\\ 4x - 2y = 6 \\end{cases}$$",
    options: ["Zero", "Exactly one", "Exactly two", "Infinitely many"],
    correctAnswer: 3,
    explanation: "Substitute $y = 2x - 3$ into the second equation:\\n$$4x - 2(2x - 3) = 6$$\\n$$4x - 4x + 6 = 6$$\\n$$6 = 6$$\\nSince this identity is always true, the two lines are identical and the system has infinitely many solutions."
  },
  {
    id: 16,
    question: "What is the value of $x$ that satisfies $\\sqrt{2x + 7} = 5$?",
    options: ["$9$", "$11$", "$16$", "$25$"],
    correctAnswer: 0,
    explanation: "Square both sides of the equation:\\n$$(\\sqrt{2x + 7})^2 = 5^2$$\\n$$2x + 7 = 25$$\\n$$2x = 18$$\\n$$x = 9$$\\nCheck solution: $\\sqrt{2(9) + 7} = \\sqrt{25} = 5$ (Valid)."
  },
  {
    id: 17,
    question: "The line graph below shows the total revenue $R$ (in thousands of dollars) for a business over 5 months.<br><div class=\"flex justify-center my-4\"><svg width=\"320\" height=\"200\" viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"border border-gray-300 rounded bg-white\"><line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"160\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"50\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#333\" stroke-width=\"2\"/><polygon points=\"46,25 50,15 54,25\" fill=\"#333\"/><polygon points=\"295,156 305,160 295,164\" fill=\"#333\"/><text x=\"10\" y=\"90\" font-size=\"10\" font-family=\"sans-serif\" font-weight=\"bold\" transform=\"rotate(-90 15 90)\">Revenue ($1000s)</text><text x=\"50\" y=\"175\" font-size=\"10\">Jan</text><text x=\"100\" y=\"175\" font-size=\"10\">Feb</text><text x=\"150\" y=\"175\" font-size=\"10\">Mar</text><text x=\"200\" y=\"175\" font-size=\"10\">Apr</text><text x=\"250\" y=\"175\" font-size=\"10\">May</text><text x=\"30\" y=\"163\" font-size=\"10\">0</text><text x=\"25\" y=\"123\" font-size=\"10\">10</text><text x=\"25\" y=\"83\" font-size=\"10\">20</text><text x=\"25\" y=\"43\" font-size=\"10\">30</text><polyline points=\"60,140 110,100 160,120 210,60 260,40\" stroke=\"#2563eb\" stroke-width=\"2.5\" fill=\"none\"/><circle cx=\"60\" cy=\"140\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"110\" cy=\"100\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"160\" cy=\"120\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"210\" cy=\"60\" r=\"4\" fill=\"#2563eb\"/><circle cx=\"260\" cy=\"40\" r=\"4\" fill=\"#2563eb\"/></svg></div><br>What was the greatest increase in monthly revenue between two consecutive months?",
    options: ["$\$5,000$", "$\$10,000$", "$\$15,000$", "$\$20,000$"],
    correctAnswer: 2,
    explanation: "- Jan to Feb: $5$ to $15 \\implies +10$ thousand.\\n- Feb to Mar: $15$ to $10 \\implies -5$ thousand.\\n- Mar to Apr: $10$ to $25 \\implies +15$ thousand.\\n- Apr to May: $25$ to $30 \\implies +5$ thousand.\\nThe greatest monthly increase is $15$ thousand dollars ($\$15,000$) between March and April."
  },
  {
    id: 18,
    question: "If $f(x) = x^2 - 4x + 9$, what is the value of $f(-3)$?",
    options: ["$6$", "$12$", "$24$", "$30$"],
    correctAnswer: 3,
    explanation: "Evaluate $f(-3)$:\\n$$f(-3) = (-3)^2 - 4(-3) + 9$$\\n$$f(-3) = 9 + 12 + 9 = 30$$"
  },
  {
    id: 19,
    question: "A line in the $xy$-plane has equation $y = 3x - 8$. If point $(k, 16)$ lies on the line, what is the value of $k$?",
    options: [],
    answerText: "8",
    correctAnswer: "8",
    isGridIn: true,
    explanation: "Substitute $x = k$ and $y = 16$ into the equation:\\n$$16 = 3k - 8$$\\n$$24 = 3k$$\\n$$k = 8$$"
  },
  {
    id: 20,
    question: "What is the sum of the solutions to the quadratic equation $x^2 - 12x + 20 = 0$?",
    options: [],
    answerText: "12",
    correctAnswer: "12",
    isGridIn: true,
    explanation: "For a quadratic $ax^2 + bx + c = 0$, the sum of the roots is given by Vieta's formula: $x_1 + x_2 = -\\frac{b}{a}$.\\nHere $a = 1$ and $b = -12$:\\n$$\\text{Sum} = -\\frac{-12}{1} = 12$$\\nAlternatively, factor $(x - 2)(x - 10) = 0 \\implies x = 2$ or $x = 10$. Sum $= 2 + 10 = 12$."
  },
  {
    id: 21,
    question: "If $3^{2x+1} = 27$, what is the value of $x$?",
    options: [],
    answerText: "1",
    correctAnswer: "1",
    isGridIn: true,
    explanation: "Express $27$ as a power of $3$:\\n$$3^{2x+1} = 3^3$$\\nEquate exponents:\\n$$2x + 1 = 3$$\\n$$2x = 2$$\\n$$x = 1$$"
  },
  {
    id: 22,
    question: "In the $xy$-plane, the graphs of $y = x^2 - 6x + 10$ and $y = 2x - 5$ intersect at two points $(x_1, y_1)$ and $(x_2, y_2)$. What is the value of $x_1 + x_2$?",
    options: [],
    answerText: "8",
    correctAnswer: "8",
    isGridIn: true,
    explanation: "Set the two equations equal to find the $x$-coordinates of intersection:\\n$$x^2 - 6x + 10 = 2x - 5$$\\n$$x^2 - 8x + 15 = 0$$\\nBy Vieta's formula, the sum of the solutions $x_1 + x_2 = -\\frac{-8}{1} = 8$."
  }
];
