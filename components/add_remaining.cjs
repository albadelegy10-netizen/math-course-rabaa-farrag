const fs = require('fs');

let content = fs.readFileSync('questions_est1_2026_jan.ts', 'utf8');

const newQuestions = `,
  {
    id: "est1_2026_jan_49",
    question: "What is the value of $x$ if $4|2x + 1| = 10$ and $x < 0$?",
    options: ["1.75", "0.75", "-1.75", "-2.0"],
    correctAnswer: 2,
    explanation: "Divide by 4: $|2x + 1| = 2.5$. This gives two equations: $2x + 1 = 2.5$ or $2x + 1 = -2.5$. Solving the first: $2x = 1.5 \\\\Rightarrow x = 0.75$. Solving the second: $2x = -3.5 \\\\Rightarrow x = -1.75$. Since $x < 0$, the valid solution is $x = -1.75$.",
    category: "Heart of Algebra",
    topics: ["Absolute Value Equations"]
  },
  {
    id: "est1_2026_jan_50",
    question: "What is the value of $x$ if $\\\\frac{3}{x - 3} = \\\\sqrt{3}$?",
    options: ["$\\\\sqrt{3}$", "3", "$3 + \\\\sqrt{3}$", "$\\\\sqrt{6}$"],
    correctAnswer: 2,
    explanation: "Multiply both sides by $x - 3$: $3 = \\\\sqrt{3}(x - 3)$. Divide by $\\\\sqrt{3}$: $\\\\frac{3}{\\\\sqrt{3}} = x - 3$. Simplify the left side: $\\\\sqrt{3} = x - 3$. Add 3 to both sides: $x = 3 + \\\\sqrt{3}$.",
    category: "Passport to Advanced Math",
    topics: ["Radical Equations"]
  },
  {
    id: "est1_2026_jan_51",
    question: "Which of the following expressions is equivalent to $\\\\frac{x^2 + 2x + 4}{x + 5}$?",
    options: [
      "$x - 3 - \\\\frac{18}{x + 5}$",
      "$x - 3 - \\\\frac{19}{x + 5}$",
      "$x - 3 + \\\\frac{19}{x + 5}$",
      "$x + 3 + \\\\frac{19}{x + 5}$"
    ],
    correctAnswer: 2,
    explanation: "Perform polynomial long division or synthetic division. Divide $x^2 + 2x + 4$ by $x + 5$. Using synthetic division with root $-5$: \\n-5 | 1   2   4\\n   |    -5  15\\n   -------------\\n     1  -3  19\\nThe quotient is $x - 3$ and the remainder is 19. Therefore, the expression is equivalent to $x - 3 + \\\\frac{19}{x + 5}$.",
    category: "Passport to Advanced Math",
    topics: ["Polynomial Division"]
  },
  {
    id: "est1_2026_jan_52",
    question: "A line passing through a point $(-1, 8)$ and parallel to the x-axis. What is this equation?",
    options: ["$x = -y$", "$y = 8x$", "$x = -1$", "$y = 8$"],
    correctAnswer: 3,
    explanation: "A line parallel to the x-axis is a horizontal line. Horizontal lines have equations of the form $y = c$, where $c$ is the y-coordinate of any point on the line. Since the line passes through $(-1, 8)$, its equation is $y = 8$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2026_jan_53",
    question: "Use inverse operations to write the inverse of $f(x) = \\\\frac{x}{4} - 5$.",
    options: [
      "$f^{-1}(x) = -5x - 4$",
      "$f^{-1}(x) = 4x + 5$",
      "$f^{-1}(x) = \\\\frac{x}{4} + 5$",
      "$f^{-1}(x) = 4(x + 5)$"
    ],
    correctAnswer: 3,
    explanation: "Let $y = \\\\frac{x}{4} - 5$. Swap $x$ and $y$: $x = \\\\frac{y}{4} - 5$. Solve for $y$: $x + 5 = \\\\frac{y}{4} \\\\Rightarrow y = 4(x + 5)$. Therefore, $f^{-1}(x) = 4(x + 5)$.",
    category: "Passport to Advanced Math",
    topics: ["Inverse Functions"]
  },
  {
    id: "est1_2026_jan_54",
    question: "The ratio of angles of a quadrilateral is 3:5:3:7. Find the value of the largest angle.",
    options: ["140", "120", "100", "150"],
    correctAnswer: 0,
    explanation: "The sum of the interior angles of a quadrilateral is $360^\\\\circ$. Let the angles be $3x$, $5x$, $3x$, and $7x$. Their sum is $3x + 5x + 3x + 7x = 18x$. Set this equal to 360: $18x = 360 \\\\Rightarrow x = 20$. The largest angle corresponds to the largest ratio part, which is 7. The largest angle is $7x = 7(20) = 140^\\\\circ$.",
    category: "Additional Topics in Math",
    topics: ["Geometry", "Angles"]
  },
  {
    id: "est1_2026_jan_55",
    question: "The domain of definition of the function $h(x) = \\\\frac{6}{\\\\sqrt{-2x + 7}}$ is:",
    options: [
      "$(-\\\\infty, 3.5)$",
      "$(0, +\\\\infty)$",
      "$[3.5, +\\\\infty)$",
      "$(3.5, +\\\\infty)$"
    ],
    correctAnswer: 0,
    explanation: "For the function to be defined, the expression inside the square root must be strictly greater than zero (since it's in the denominator). So, $-2x + 7 > 0$. Solve for $x$: $-2x > -7 \\\\Rightarrow x < 3.5$. In interval notation, this is $(-\\\\infty, 3.5)$.",
    category: "Passport to Advanced Math",
    topics: ["Domain of Functions"]
  },
  {
    id: "est1_2026_jan_56",
    question: "If $8x^3 - 2x^2 + 2x$ can be re-written in the form of $ax(dx^2 + bx - c)$, find the value of $a - b + c + d$.",
    options: ["-5", "-1", "4", "6"],
    correctAnswer: 3,
    explanation: "Factor out the greatest common factor, which is $2x$: $8x^3 - 2x^2 + 2x = 2x(4x^2 - x + 1)$. Comparing this to $ax(dx^2 + bx - c)$, we have $a = 2$, $d = 4$, $b = -1$, and $-c = 1 \\\\Rightarrow c = -1$. We need to find $a - b + c + d = 2 - (-1) + (-1) + 4 = 2 + 1 - 1 + 4 = 6$.",
    category: "Passport to Advanced Math",
    topics: ["Polynomials"]
  },
  {
    id: "est1_2026_jan_57",
    question: "The vertical asymptote of the graph of $f(x) = \\\\frac{2}{x + 4} - 1$ is $x = a$, while its horizontal asymptote is $y = b$. What is the value of $|b + a|$?",
    options: ["1", "3", "4", "5"],
    correctAnswer: 3,
    explanation: "The vertical asymptote occurs where the denominator is zero: $x + 4 = 0 \\\\Rightarrow x = -4$. So, $a = -4$. As $x \\\\to \\\\pm\\\\infty$, the term $\\\\frac{2}{x + 4}$ approaches 0, so $f(x)$ approaches $-1$. The horizontal asymptote is $y = -1$. So, $b = -1$. The value of $|b + a| = |-1 + (-4)| = |-5| = 5$.",
    category: "Passport to Advanced Math",
    topics: ["Rational Functions", "Asymptotes"]
  },
  {
    id: "est1_2026_jan_58",
    question: "The tocktock Price is decreased from 150,000 LE to 100,000 LE. What is the net percent change?",
    options: ["33.3%", "3.3%", "333%", "333.3%"],
    correctAnswer: 0,
    explanation: "The percent change is calculated as $\\\\frac{\\\\text{New Value} - \\\\text{Old Value}}{\\\\text{Old Value}} \\\\times 100\\\\%$. Here, it's $\\\\frac{100,000 - 150,000}{150,000} \\\\times 100\\\\% = \\\\frac{-50,000}{150,000} \\\\times 100\\\\% = -\\\\frac{1}{3} \\\\times 100\\\\% \\\\approx -33.3\\\\%$. The magnitude of the change is 33.3%.",
    category: "Problem Solving and Data Analysis",
    topics: ["Percentages"]
  },
  {
    id: "est1_2026_jan_59",
    question: "\`$2x^3 + 2x^2 + 4x - 8 = (x^2 + bx + 4)(2x - a)$ \\n\\nIn the identity above, true for every real $x$, $a$ and $b$ are two integers. Which of the following expressions has the smallest value?\`",
    options: ["$-4a - b$", "$a - 8$", "$2b - 12$", "$b^2 - 8$"],
    correctAnswer: 0,
    explanation: "Expand the right side: $(x^2 + bx + 4)(2x - a) = 2x^3 - ax^2 + 2bx^2 - abx + 8x - 4a = 2x^3 + (2b - a)x^2 + (8 - ab)x - 4a$. Equate the coefficients with the left side: Constant term: $-4a = -8 \\\\Rightarrow a = 2$. $x^2$ coefficient: $2b - a = 2 \\\\Rightarrow 2b - 2 = 2 \\\\Rightarrow 2b = 4 \\\\Rightarrow b = 2$. Now evaluate the options: A) $-4(2) - 2 = -10$. B) $2 - 8 = -6$. C) $2(2) - 12 = -8$. D) $2^2 - 8 = -4$. The smallest value is -10.",
    category: "Passport to Advanced Math",
    topics: ["Polynomial Identities"]
  },
  {
    id: "est1_2026_jan_60",
    question: "\`$4\\\\sqrt{x} - 4 = x$ \\n\\nWhat is the number of real solutions in the equation above?\`",
    options: ["3", "2", "1", "0"],
    correctAnswer: 2,
    explanation: "Rearrange the equation: $x - 4\\\\sqrt{x} + 4 = 0$. Let $u = \\\\sqrt{x}$, then $u^2 - 4u + 4 = 0$. Factor: $(u - 2)^2 = 0 \\\\Rightarrow u = 2$. Substitute back: $\\\\sqrt{x} = 2 \\\\Rightarrow x = 4$. Check the solution: $4\\\\sqrt{4} - 4 = 4(2) - 4 = 4$, which equals $x$. There is exactly 1 real solution.",
    category: "Passport to Advanced Math",
    topics: ["Radical Equations"]
  },
  {
    id: "est1_2026_jan_61",
    question: "In Turkey, the dollar exchange rate increased from 32.2 TRY in May 2024 to 38.5 TRY in May 2025 due to the recent economic crisis. What was the percentage increase in the value of the dollar in TRY, rounded to the nearest whole percent?",
    options: ["15%", "19%", "20%", "30%"],
    correctAnswer: 2,
    explanation: "The percentage increase is $\\\\frac{\\\\text{New} - \\\\text{Old}}{\\\\text{Old}} \\\\times 100\\\\% = \\\\frac{38.5 - 32.2}{32.2} \\\\times 100\\\\% = \\\\frac{6.3}{32.2} \\\\times 100\\\\% \\\\approx 0.1956 \\\\times 100\\\\% = 19.56\\\\%$. Rounded to the nearest whole percent, this is 20%.",
    category: "Problem Solving and Data Analysis",
    topics: ["Percentages"]
  },
  {
    id: "est1_2026_jan_62",
    question: "If $\\\\frac{1}{\\\\sqrt{x^2 - 4}}$ is defined for all values of $x$ except?",
    options: ["-2 only", "$\\\\pm 2$", "2 only", "$-2 \\\\le x \\\\le 2$"],
    correctAnswer: 3,
    explanation: "For the expression to be defined, the denominator cannot be zero, and the value inside the square root must be positive. So, $x^2 - 4 > 0$. This means $(x - 2)(x + 2) > 0$, which gives $x > 2$ or $x < -2$. The expression is undefined for values where $x^2 - 4 \\\\le 0$, which is $-2 \\\\le x \\\\le 2$.",
    category: "Passport to Advanced Math",
    topics: ["Domain of Functions"]
  },
  {
    id: "est1_2026_jan_63",
    question: "Consider triangle $ABC$ right-angled at $A$. If $\\\\sin(C) = \\\\frac{\\\\sqrt{2}}{2}$, what is the measure of angle $B$?",
    options: ["$60^\\\\circ$", "$45^\\\\circ$", "$30^\\\\circ$", "$15^\\\\circ$"],
    correctAnswer: 1,
    explanation: "Since $\\\\sin(C) = \\\\frac{\\\\sqrt{2}}{2}$, angle $C$ is $45^\\\\circ$. In a right triangle, the sum of the two acute angles is $90^\\\\circ$. Therefore, angle $B = 90^\\\\circ - 45^\\\\circ = 45^\\\\circ$.",
    category: "Additional Topics in Math",
    topics: ["Trigonometry", "Right Triangles"]
  },
  {
    id: "est1_2026_jan_64",
    question: "If the distance between the points $(1, 4)$ and $(10, 4)$ is $\\\\sqrt{k}$, find $k$.",
    options: ["9", "$\\\\sqrt{81}$", "1", "81"],
    correctAnswer: 3,
    explanation: "The distance between $(1, 4)$ and $(10, 4)$ is $|10 - 1| = 9$. We are given that the distance is $\\\\sqrt{k}$. So, $\\\\sqrt{k} = 9$. Squaring both sides gives $k = 81$.",
    category: "Additional Topics in Math",
    topics: ["Coordinate Geometry", "Distance Formula"]
  },
  {
    id: "est1_2026_jan_65",
    question: "If $f(x) = \\\\sqrt{x + 1}$ and $g(x) = x^2 - 2$, find $f(g(x))$.",
    options: ["$x^2 + 1$", "$x - 1$", "$\\\\sqrt{(x - 1)(x + 1)}$", "$\\\\sqrt{x^2 + 1}$"],
    correctAnswer: 2,
    explanation: "Substitute $g(x)$ into $f(x)$: $f(g(x)) = f(x^2 - 2) = \\\\sqrt{(x^2 - 2) + 1} = \\\\sqrt{x^2 - 1}$. This can be factored as $\\\\sqrt{(x - 1)(x + 1)}$.",
    category: "Passport to Advanced Math",
    topics: ["Function Composition"]
  },
  {
    id: "est1_2026_jan_66",
    question: "Simplify $\\\\sqrt[3]{540x^4y^6z^3}$",
    options: [
      "$3x^3y^4z^6\\\\sqrt[3]{20y}$",
      "$xz^3\\\\sqrt[3]{540y^2x^3}$",
      "$x^2yz\\\\sqrt[3]{540y^2}$",
      "$3xy^2z\\\\sqrt[3]{20x}$"
    ],
    correctAnswer: 3,
    explanation: "Factor the expression inside the cube root to find perfect cubes: $540 = 27 \\\\times 20 = 3^3 \\\\times 20$. $x^4 = x^3 \\\\times x$. $y^6 = (y^2)^3$. $z^3 = z^3$. So, $\\\\sqrt[3]{3^3 \\\\times 20 \\\\times x^3 \\\\times x \\\\times (y^2)^3 \\\\times z^3}$. Pull out the perfect cubes: $3 \\\\times x \\\\times y^2 \\\\times z \\\\times \\\\sqrt[3]{20x} = 3xy^2z\\\\sqrt[3]{20x}$.",
    category: "Passport to Advanced Math",
    topics: ["Radical Expressions"]
  },
  {
    id: "est1_2026_jan_67",
    question: "The ratio of men to women in an office is 7 to 4. If there are 66 employees in this office, what is the difference in numbers between the two genders?",
    options: ["12", "14", "16", "18"],
    correctAnswer: 3,
    explanation: "Let the number of men be $7x$ and the number of women be $4x$. The total number of employees is $7x + 4x = 11x$. We are given $11x = 66$, so $x = 6$. The number of men is $7(6) = 42$ and the number of women is $4(6) = 24$. The difference is $42 - 24 = 18$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Ratios"]
  },
  {
    id: "est1_2026_jan_68",
    question: "$|4x - 1| \\\\le 10$ which of the following is true?",
    options: [
      "$x = 2.25$",
      "$x \\\\le 2.25 \\\\text{ or } x \\\\ge 2.75$",
      "$x \\\\le 2.75 \\\\text{ and } x \\\\ge -2.25$",
      "$x = 2.75$"
    ],
    correctAnswer: 2,
    explanation: "The inequality $|4x - 1| \\\\le 10$ can be rewritten as $-10 \\\\le 4x - 1 \\\\le 10$. Add 1 to all parts: $-9 \\\\le 4x \\\\le 11$. Divide by 4: $-2.25 \\\\le x \\\\le 2.75$. This is equivalent to $x \\\\le 2.75$ and $x \\\\ge -2.25$.",
    category: "Heart of Algebra",
    topics: ["Absolute Value Inequalities"]
  },
  {
    id: "est1_2026_jan_69",
    question: "Given a triangle $ABC$ right at $A$ such that $BC = 7.00$ and measure($\\\\angle ACB$) = $52^\\\\circ$. If $\\\\cos(38^\\\\circ) \\\\approx 0.79$, the length of $AB$ is:",
    options: ["5.53", "5.88", "6.04", "6.23"],
    correctAnswer: 0,
    explanation: "In right triangle $ABC$, the sum of acute angles is $90^\\\\circ$. So, $\\\\angle B = 90^\\\\circ - 52^\\\\circ = 38^\\\\circ$. We know $\\\\cos(B) = \\\\frac{\\\\text{adjacent}}{\\\\text{hypotenuse}} = \\\\frac{AB}{BC}$. Substituting the values: $\\\\cos(38^\\\\circ) = \\\\frac{AB}{7.00}$. So, $AB = 7.00 \\\\times \\\\cos(38^\\\\circ) \\\\approx 7.00 \\\\times 0.79 = 5.53$.",
    category: "Additional Topics in Math",
    topics: ["Trigonometry", "Right Triangles"]
  },
  {
    id: "est1_2026_jan_70",
    question: "A box contains 6 plain chocolate bars, 11 chocolates filled with nuts, and 7 chocolates filled with nougat. If Arjun selects one chocolate at random, what is the probability that he chooses a plain chocolate bar?",
    options: ["0.25", "0.46", "0.55", "0.71"],
    correctAnswer: 0,
    explanation: "The total number of chocolates is $6 + 11 + 7 = 24$. The number of plain chocolate bars is 6. The probability of choosing a plain chocolate bar is $\\\\frac{6}{24} = \\\\frac{1}{4} = 0.25$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Probability"]
  },
  {
    id: "est1_2026_jan_71",
    question: "A pencil case contains 4 blue pens, 1 green pen, 2 black pens and 2 red pens. One pen is chosen randomly. What is the probability of not picking a blue pen?",
    options: ["3/5", "5/9", "4/9", "1/3"],
    correctAnswer: 1,
    explanation: "The total number of pens is $4 + 1 + 2 + 2 = 9$. The number of pens that are NOT blue is $1 + 2 + 2 = 5$. The probability of not picking a blue pen is $5/9$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Probability"]
  }
]`;

content = content.replace('];', newQuestions + '\n];');

fs.writeFileSync('questions_est1_2026_jan.ts', content);
