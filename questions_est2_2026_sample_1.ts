import { Question } from './types';

export const est2_2026_sample_questions: Question[] = [
  {
    id: 1,
    question: "Which of the following statements can be true regarding the polynomial function $P$ represented in the graph above?",
    svg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdyYXBoIFExPC90ZXh0Pjwvc3ZnPg==",
    options: [
      "$-1$ is a root of $P$.",
      "The constant term of $P$ is positive.",
      "The degree of the function is $2$.",
      "The function $P$ is increasing over $\\mathbb{R}$.",
      "The value of $P$ at zero is equal to the value of $P$ at $-1$."
    ],
    correctAnswer: 0,
    explanation: "The graph intersects the x-axis at $x = -1$, which means $P(-1) = 0$. Therefore, $-1$ is a root of $P$.",
    category: "Functions"
  },
  {
    id: 2,
    question: "The graph of a function $g$ cuts the $x$-axis two times and has a positive $y$-intercept. Which of the following could be the equation of $g(x)$?",
    options: [
      "$g(x) = x(x + 7)(x + 6)$",
      "$g(x) = (x^2 - 3)(2x + 7)(3x - 1)$",
      "$g(x) = (x^2 + 2)(x - 1)(x - 14)$",
      "$g(x) = 2(x + 1)(x + 2)(x + 3)$",
      "$g(x) = 4(x - 2)(x - 1)(x - 3)$"
    ],
    correctAnswer: 2,
    explanation: "We need a function with exactly two real roots and a positive y-intercept ($g(0) > 0$).\nA: Roots at 0, -7, -6 (three roots). $g(0) = 0$.\nB: Roots at $\\pm\\sqrt{3}, -3.5, 1/3$ (four roots).\nC: Roots at 1, 14 (two real roots, since $x^2+2=0$ has no real roots). $y$-intercept: $g(0) = (2)(-1)(-14) = 28 > 0$. This matches both conditions.\nD: Roots at -1, -2, -3 (three roots).\nE: Roots at 2, 1, 3 (three roots).",
    category: "Functions"
  },
  {
    id: 3,
    question: "What is the probability that a randomly formed six-letter word using all the letters of the word EUROPE has the two E's next to each other?",
    options: [
      "$\\frac{1}{4}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{5}$",
      "$\\frac{3}{4}$"
    ],
    correctAnswer: 1,
    explanation: "The word EUROPE has 6 letters, with 'E' repeated twice. Total arrangements = $6! / 2! = 360$.\nTreat the two E's as a single block 'EE'. We now have 5 blocks: 'EE', 'U', 'R', 'O', 'P'.\nNumber of arrangements with 'EE' together = $5! = 120$.\nProbability = $120 / 360 = 1/3$.",
    category: "Probability"
  },
  {
    id: 4,
    question: "$2 \\cos(x) \\times (-10 \\cos(x)) - (-4 \\sin(x)) \\times (-5 \\sin(x)) =$",
    options: [
      "$-20$",
      "$-2$",
      "$1$",
      "$20$",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "Expression: $-20 \\cos^2(x) - (20 \\sin^2(x)) = -20(\\cos^2(x) + \\sin^2(x)) = -20(1) = -20$.",
    category: "Trigonometry"
  },
  {
    id: 5,
    question: "A geometric sequence has a first term equal to $16$ and a sixth term equal to $121.5$. What is the value of the square of the common ratio?",
    options: [
      "$1.0$",
      "$1.50$",
      "$2.0$",
      "$2.25$",
      "$4.0$"
    ],
    correctAnswer: 3,
    explanation: "$a_1 = 16$, $a_6 = a_1 \\cdot r^5 = 121.5$.\n$16 \\cdot r^5 = 121.5 \\implies r^5 = 121.5 / 16 = 243 / 32$.\n$r = 3/2 = 1.5$.\nThe square of the common ratio is $r^2 = 1.5^2 = 2.25$.",
    category: "Sequences"
  },
  {
    id: 6,
    question: "If the ratio of $x$ to $y$ is equal to $2$ and the ratio of $y$ to $z$ is equal to $1$, which of the following must be true?",
    options: [
      "$x = \\frac{1}{z}$",
      "$x = z$",
      "$x = 3z$",
      "$x = 2z$",
      "$z = \\frac{x}{2}$"
    ],
    correctAnswer: 3,
    explanation: "$x/y = 2 \\implies x = 2y$.\n$y/z = 1 \\implies y = z$.\nSubstituting $y = z$ into the first equation gives $x = 2z$.",
    category: "Algebra"
  },
  {
    id: 7,
    question: "The supplement of an angle $T$ is $(3x + 5)^\\circ$ and the vertically opposite angle to $T$ measures $(x - 15)^\\circ$. What is the value of $x$?",
    options: [
      "$42.5$",
      "$44.5$",
      "$45.5$",
      "$46.5$",
      "$47.5$"
    ],
    correctAnswer: 4,
    explanation: "The vertically opposite angle to $T$ is equal to $T$, so $T = x - 15$.\nThe supplement of $T$ is $180 - T = 3x + 5$.\n$180 - (x - 15) = 3x + 5 \\implies 195 - x = 3x + 5 \\implies 4x = 190 \\implies x = 47.5$.",
    category: "Geometry"
  },
  {
    id: 8,
    question: "Amin drew the polygon $ABCD$ shown above. Ismail drew the four polygons to the right, all congruent to $ABCD$. The lengths of all drawn segments are equal to:",
    svg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdyYXBoIFE4PC90ZXh0Pjwvc3ZnPg==",
    options: [
      "$\\sqrt{5} + 2\\sqrt{2} + 5$ units",
      "$5\\sqrt{5} + 2\\sqrt{2} + 25$ units",
      "$6\\sqrt{5} + 12\\sqrt{2} + 30$ units",
      "$5\\sqrt{5} + 10\\sqrt{2} + 25$ units",
      "$4\\sqrt{5} + 8\\sqrt{2} + 20$ units"
    ],
    correctAnswer: 3,
    explanation: "Polygon ABCD has vertices A(-2, 4), B(-4, 4), C(-6, 2), D(-3, 2). Wait, let's check the grid. C is at (-6, 2), D is at (-3, 2). Length CD = 3. A is at (-2, 4), B is at (-4, 4). Length AB = 2. \nLength BC = $\\sqrt{(-6 - -4)^2 + (2 - 4)^2} = \\sqrt{(-2)^2 + (-2)^2} = \\sqrt{8} = 2\\sqrt{2}$.\nLength AD = $\\sqrt{(-3 - -2)^2 + (2 - 4)^2} = \\sqrt{(-1)^2 + (-2)^2} = \\sqrt{5}$.\nPerimeter of ABCD = $3 + 2 + 2\\sqrt{2} + \\sqrt{5} = 5 + 2\\sqrt{2} + \\sqrt{5}$.\nThere are 5 polygons in total (ABCD + 4 drawn by Ismail). Total length of all segments = $5 \\times (5 + 2\\sqrt{2} + \\sqrt{5}) = 25 + 10\\sqrt{2} + 5\\sqrt{5}$.",
    category: "Geometry"
  },
  {
    id: 9,
    question: "What is the distance between the vertex of $y = 2x^2 + 4x - 1$ and the point of coordinates $(9, 7)$?",
    options: [
      "$5\\sqrt{2}$",
      "$10\\sqrt{2}$",
      "$20\\sqrt{2}$",
      "$30$",
      "$31$"
    ],
    correctAnswer: 1,
    explanation: "Vertex x-coordinate = $-b / (2a) = -4 / (2 \\cdot 2) = -1$.\nVertex y-coordinate = $2(-1)^2 + 4(-1) - 1 = 2 - 4 - 1 = -3$.\nVertex is at $V(-1, -3)$.\nDistance to $(9, 7) = \\sqrt{(9 - (-1))^2 + (7 - (-3))^2} = \\sqrt{10^2 + 10^2} = \\sqrt{200} = 10\\sqrt{2}$.",
    category: "Coordinate Geometry"
  },
  {
    id: 10,
    question: "If $625^{3x} \\cdot 10^6 = 5^{24} \\cdot 2^y$, then $\\frac{y}{x} =$",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$6$"
    ],
    correctAnswer: 3,
    explanation: "$625 = 5^4$, so $625^{3x} = (5^4)^{3x} = 5^{12x}$.\n$10^6 = (5 \\cdot 2)^6 = 5^6 \\cdot 2^6$.\nThe equation is $5^{12x} \\cdot 5^6 \\cdot 2^6 = 5^{24} \\cdot 2^y$.\n$5^{12x + 6} \\cdot 2^6 = 5^{24} \\cdot 2^y$.\nEquating exponents of 2: $y = 6$.\nEquating exponents of 5: $12x + 6 = 24 \\implies 12x = 18 \\implies x = 18/12 = 1.5$.\nThen $y/x = 6 / 1.5 = 4$.",
    category: "Algebra"
  }
];
