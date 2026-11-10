import { Question } from "../../types";

export const EST2_EXAM_7_QUESTIONS: Question[] = [
  {
    id: "est2_exam7_q1",
    question: "The graph of the polynomial function $P(x)$ is shown below:\n\n<svg viewBox=\"-40 -40 320 260\" class=\"w-full max-w-sm mx-auto my-4 bg-white border border-gray-200 rounded-xl\">\n  <defs>\n    <pattern id=\"grid_exam7_q1\" width=\"25\" height=\"25\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 25 0 L 0 0 0 25\" fill=\"none\" stroke=\"#f3f4f6\" stroke-width=\"1\"/>\n    </pattern>\n  </defs>\n  <rect x=\"-40\" y=\"-40\" width=\"320\" height=\"260\" fill=\"url(#grid_exam7_q1)\"/>\n  <!-- Axes: origin at (120, 140) -->\n  <line x1=\"-30\" y1=\"140\" x2=\"260\" y2=\"140\" stroke=\"#000000\" stroke-width=\"1.5\"/>\n  <line x1=\"120\" y1=\"210\" x2=\"120\" y2=\"-20\" stroke=\"#000000\" stroke-width=\"1.5\"/>\n  <polygon points=\"260,140 252,136 252,144\" fill=\"#000000\"/>\n  <polygon points=\"120,-20 116,-12 124,-12\" fill=\"#000000\"/>\n  <text x=\"265\" y=\"144\" font-size=\"13\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">x</text>\n  <text x=\"124\" y=\"-22\" font-size=\"13\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">y</text>\n  <text x=\"108\" y=\"155\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">O</text>\n  <!-- Ticks on x-axis: 1 unit = 25px -->\n  <!-- -3 -> 45, 1 -> 145, 4 -> 220 -->\n  <line x1=\"45\" y1=\"137\" x2=\"45\" y2=\"143\" stroke=\"#000000\" stroke-width=\"1\"/>\n  <text x=\"38\" y=\"156\" font-size=\"10\" fill=\"#000000\">-3</text>\n  <line x1=\"145\" y1=\"137\" x2=\"145\" y2=\"143\" stroke=\"#000000\" stroke-width=\"1\"/>\n  <text x=\"142\" y=\"156\" font-size=\"10\" fill=\"#000000\">1</text>\n  <line x1=\"220\" y1=\"137\" x2=\"220\" y2=\"143\" stroke=\"#000000\" stroke-width=\"1\"/>\n  <text x=\"217\" y=\"156\" font-size=\"10\" fill=\"#000000\">4</text>\n  <!-- Polynomial curve with zeros at -3, 1, 4 and y-intercept at (0, 12) -> y = 140 - 12*6 = 68 -->\n  <path d=\"M 20 200 C 35 155 42 140 55 100 C 70 50 100 68 120 70 C 135 72 140 120 145 140 C 160 190 205 180 220 140 C 235 90 245 20 250 -10\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\"/>\n  <circle cx=\"45\" cy=\"140\" r=\"3.5\" fill=\"#000000\"/>\n  <circle cx=\"145\" cy=\"140\" r=\"3.5\" fill=\"#000000\"/>\n  <circle cx=\"220\" cy=\"140\" r=\"3.5\" fill=\"#000000\"/>\n  <circle cx=\"120\" cy=\"70\" r=\"3.5\" fill=\"#000000\"/>\n  <text x=\"125\" y=\"72\" font-size=\"10\" font-weight=\"bold\" fill=\"#000000\">12</text>\n</svg>\n\nWhich of the following could be the equation of $P(x)$?",
    options: [
      "$P(x) = (x + 3)(x - 1)(x - 4)$",
      "$P(x) = -(x + 3)(x - 1)(x - 4)$",
      "$P(x) = (x - 3)(x + 1)(x + 4)$",
      "$P(x) = 2(x + 3)(x - 1)(x - 4)$",
      "$P(x) = -(x - 3)(x + 1)(x + 4)$"
    ],
    correctAnswer: 0,
    explanation: "The $x$-intercepts of the graph are $x = -3, x = 1,$ and $x = 4$. Therefore, the linear factors are $(x + 3), (x - 1),$ and $(x - 4)$.\nThe polynomial can be written in factored form as:\n$$P(x) = a(x + 3)(x - 1)(x - 4)$$\nThe graph has a $y$-intercept at $(0, 12)$. Evaluating $P(0)$:\n$$P(0) = a(0 + 3)(0 - 1)(0 - 4) = a(3)(-1)(-4) = 12a$$\nSince the $y$-intercept is $12$:\n$$12a = 12 \\implies a = 1$$\nAs $x \\to \\infty$, $P(x) \\to \\infty$, which confirms that the leading coefficient is positive ($a = 1$).\nThus, $P(x) = (x + 3)(x - 1)(x - 4)$.",
    category: ""
  },
  {
    id: "est2_exam7_q2",
    question: "How many distinct real roots does the equation $(x^2 - 7)(x^2 + 9)(3x + 5) = 0$ have?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: 2,
    explanation: "Set each factor equal to zero to find the real roots:\n1. $x^2 - 7 = 0 \\implies x^2 = 7 \\implies x = \\pm \\sqrt{7}$ (2 distinct real roots).\n2. $x^2 + 9 = 0 \\implies x^2 = -9 \\implies x = \\pm 3i$ (no real roots; two complex roots).\n3. $3x + 5 = 0 \\implies x = -\\frac{5}{3}$ (1 real root).\nIn total, there are $2 + 0 + 1 = 3$ distinct real roots.",
    category: ""
  },
  {
    id: "est2_exam7_q3",
    question: "What is the total number of distinct arrangements that can be formed using all the letters of the word $\\text{PARALLEL}$?",
    options: [
      "1,680",
      "2,520",
      "3,360",
      "5,040",
      "6,720"
    ],
    correctAnswer: 2,
    explanation: "The word $\\text{PARALLEL}$ has 8 letters with the following letter frequencies:\n- $\\text{L}$ appears 3 times\n- $\\text{A}$ appears 2 times\n- $\\text{P}$ appears 1 time\n- $\\text{R}$ appears 1 time\n- $\\text{E}$ appears 1 time\nThe number of distinct permutations with repeated elements is given by:\n$$\\frac{n!}{n_1! \\cdot n_2! \\cdots n_k!} = \\frac{8!}{3! \\times 2!} = \\frac{40,320}{6 \\times 2} = \\frac{40,320}{12} = 3,360$$",
    category: ""
  },
  {
    id: "est2_exam7_q4",
    question: "Which of the following values is equal to the expression $-3\\sin^2(x) - 3\\cos^2(x) + 4\\sec^2(x) - 4\\tan^2(x)$ for all values of $x$ where the functions are defined?",
    options: [
      "$-7$",
      "$-1$",
      "0",
      "1",
      "7"
    ],
    correctAnswer: 3,
    explanation: "Factor out the coefficients from the trigonometric terms:\n$$-3(\\sin^2(x) + \\cos^2(x)) + 4(\\sec^2(x) - \\tan^2(x))$$\nRecall the fundamental Pythagorean trigonometric identities:\n1. $\\sin^2(x) + \\cos^2(x) = 1$\n2. $1 + \\tan^2(x) = \\sec^2(x) \\implies \\sec^2(x) - \\tan^2(x) = 1$\nSubstitute these identities into the expression:\n$$-3(1) + 4(1) = -3 + 4 = 1$$",
    category: ""
  },
  {
    id: "est2_exam7_q5",
    question: "In a geometric sequence of real numbers, the second term is $12$ and the fifth term is $324$. What is the sum of the first 4 terms ($S_4$) of this sequence?",
    options: [
      "120",
      "144",
      "160",
      "180",
      "240"
    ],
    correctAnswer: 2,
    explanation: "In a geometric sequence, $a_n = a_1 r^{n-1}$.\nGiven:\n$$a_2 = a_1 r = 12$$\n$$a_5 = a_1 r^4 = 324$$\nDivide $a_5$ by $a_2$:\n$$\\frac{a_1 r^4}{a_1 r} = \\frac{324}{12} \\implies r^3 = 27 \\implies r = 3$$\nNow find $a_1$:\n$$a_1 (3) = 12 \\implies a_1 = 4$$\nThe first 4 terms are:\n$$a_1 = 4, \\quad a_2 = 12, \\quad a_3 = 36, \\quad a_4 = 108$$\nThe sum $S_4$ is:\n$$S_4 = 4 + 12 + 36 + 108 = 160$$",
    category: ""
  },
  {
    id: "est2_exam7_q6",
    question: "If the ratio of $a$ to $b$ is $\\frac{3}{4}$ and the ratio of $b$ to $c$ is $\\frac{8}{9}$, what is the value of $\\frac{a + b}{b + c}$?",
    options: [
      "$\\frac{11}{17}$",
      "$\\frac{14}{17}$",
      "$\\frac{7}{9}$",
      "$\\frac{14}{15}$",
      "$\\frac{17}{14}$"
    ],
    correctAnswer: 1,
    explanation: "Given:\n$$\\frac{a}{b} = \\frac{3}{4} \\implies a = \\frac{3}{4}b$$\n$$\\frac{b}{c} = \\frac{8}{9} \\implies c = \\frac{9}{8}b$$\nSubstitute $a$ and $c$ in terms of $b$ into the requested ratio:\n$$\\frac{a + b}{b + c} = \\frac{\\frac{3}{4}b + b}{b + \\frac{9}{8}b} = \\frac{\\frac{7}{4}b}{\\frac{17}{8}b} = \\frac{\\frac{7}{4}}{\\frac{17}{8}} = \\frac{7}{4} \\times \\frac{8}{17} = \\frac{14}{17}$$",
    category: ""
  },
  {
    id: "est2_exam7_q7",
    question: "The supplement of an angle $A$ measures $(3x + 15)^\\circ$ and the complement of angle $A$ measures $(x - 5)^\\circ$. What is the measure of angle $A$ in degrees?",
    options: [
      "$45^\\circ$",
      "$50^\\circ$",
      "$55^\\circ$",
      "$60^\\circ$",
      "$65^\\circ$"
    ],
    correctAnswer: 3,
    explanation: "The supplement of angle $A$ is $180^\\circ - A$ and the complement of angle $A$ is $90^\\circ - A$.\nThe difference between the supplement and the complement of any angle is always $90^\\circ$:\n$$(180^\\circ - A) - (90^\\circ - A) = 90^\\circ$$\n$$(3x + 15) - (x - 5) = 90$$\n$$2x + 20 = 90 \\implies 2x = 70 \\implies x = 35$$\nSubstitute $x = 35$ into the expression for the complement:\n$$\\text{Complement of } A = 35 - 5 = 30^\\circ$$\nTherefore:\n$$90^\\circ - A = 30^\\circ \\implies A = 60^\\circ$$",
    category: ""
  },
  {
    id: "est2_exam7_q8",
    question: "The vertices of $\\triangle ABC$ are shown on the coordinate grid below:\n\n<svg viewBox=\"-30 -30 250 210\" class=\"w-full max-w-sm mx-auto my-4 bg-white border border-gray-200 rounded-xl\">\n  <defs>\n    <pattern id=\"grid_exam7_q8\" width=\"25\" height=\"25\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 25 0 L 0 0 0 25\" fill=\"none\" stroke=\"#f3f4f6\" stroke-width=\"1\"/>\n    </pattern>\n  </defs>\n  <rect x=\"-30\" y=\"-30\" width=\"250\" height=\"210\" fill=\"url(#grid_exam7_q8)\"/>\n  <!-- Axes: origin at (30, 150) -->\n  <line x1=\"15\" y1=\"150\" x2=\"200\" y2=\"150\" stroke=\"#000000\" stroke-width=\"1.5\"/>\n  <line x1=\"30\" y1=\"170\" x2=\"30\" y2=\"-15\" stroke=\"#000000\" stroke-width=\"1.5\"/>\n  <polygon points=\"200,150 192,146 192,154\" fill=\"#000000\"/>\n  <polygon points=\"30,-15 26,-7 34,-7\" fill=\"#000000\"/>\n  <text x=\"204\" y=\"154\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">x</text>\n  <text x=\"34\" y=\"-17\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">y</text>\n  <text x=\"18\" y=\"164\" font-size=\"11\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">O</text>\n  <!-- Triangle: A(0,0) -> (30, 150), B(6,0) -> (30 + 6*25, 150) = (180, 150), C(2,5) -> (30 + 50, 150 - 125) = (80, 25) -->\n  <polygon points=\"30,150 180,150 80,25\" fill=\"#eff6ff\" stroke=\"#000000\" stroke-width=\"2\"/>\n  <!-- Altitude dash -->\n  <line x1=\"80\" y1=\"25\" x2=\"80\" y2=\"150\" stroke=\"#000000\" stroke-width=\"1\" stroke-dasharray=\"3,3\"/>\n  <rect x=\"80\" y=\"142\" width=\"8\" height=\"8\" fill=\"none\" stroke=\"#000000\" stroke-width=\"1\"/>\n  <!-- Vertices labels -->\n  <circle cx=\"30\" cy=\"150\" r=\"3.5\" fill=\"#000000\"/>\n  <text x=\"16\" y=\"145\" font-size=\"11\" font-weight=\"bold\" fill=\"#000000\">A(0, 0)</text>\n  <circle cx=\"180\" cy=\"150\" r=\"3.5\" fill=\"#000000\"/>\n  <text x=\"165\" y=\"166\" font-size=\"11\" font-weight=\"bold\" fill=\"#000000\">B(6, 0)</text>\n  <circle cx=\"80\" cy=\"25\" r=\"3.5\" fill=\"#000000\"/>\n  <text x=\"82\" y=\"18\" font-size=\"11\" font-weight=\"bold\" fill=\"#000000\">C(2, 5)</text>\n</svg>\n\nWhat is the area of $\\triangle ABC$?",
    options: [
      "12",
      "15",
      "18",
      "24",
      "30"
    ],
    correctAnswer: 1,
    explanation: "The base of $\\triangle ABC$ lies on the $x$-axis from $A(0, 0)$ to $B(6, 0)$, so:\n$$\\text{base} = 6 - 0 = 6$$\nThe vertex $C$ is at $(2, 5)$, so the perpendicular height from $C$ to the base $AB$ is the $y$-coordinate of $C$:\n$$\\text{height} = 5$$\nThe area of $\\triangle ABC$ is:\n$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 6 \\times 5 = 15$$",
    category: ""
  },
  {
    id: "est2_exam7_q9",
    question: "What is the distance between the vertex of the parabola $y = 2x^2 - 8x + 11$ and the point $(6, 6)$?",
    options: [
      "4",
      "5",
      "$2\\sqrt{5}$",
      "$5\\sqrt{2}$",
      "7"
    ],
    correctAnswer: 1,
    explanation: "Find the vertex $(h, k)$ of the quadratic function $y = ax^2 + bx + c$:\n$$h = -\\frac{b}{2a} = -\\frac{-8}{2(2)} = \\frac{8}{4} = 2$$\nSubstitute $x = 2$ to find $k$:\n$$k = 2(2^2) - 8(2) + 11 = 2(4) - 16 + 11 = 8 - 16 + 11 = 3$$\nThe vertex is $V(2, 3)$.\nNow calculate the distance between $V(2, 3)$ and $P(6, 6)$ using the distance formula:\n$$d = \\sqrt{(6 - 2)^2 + (6 - 3)^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$$",
    category: ""
  },
  {
    id: "est2_exam7_q10",
    question: "If $27^{2x} \\cdot 5^4 = 3^{18} \\cdot 25^{y/2}$, what is the value of $x \\cdot y$?",
    options: [
      "6",
      "8",
      "10",
      "12",
      "15"
    ],
    correctAnswer: 3,
    explanation: "Express the terms with bases 3 and 5:\n$$27^{2x} = (3^3)^{2x} = 3^{6x}$$\n$$25^{y/2} = (5^2)^{y/2} = 5^y$$\nThe equation becomes:\n$$3^{6x} \\cdot 5^4 = 3^{18} \\cdot 5^y$$\nEquating the powers of like prime bases:\n$$6x = 18 \\implies x = 3$$\n$$y = 4$$\nTherefore:\n$$x \\cdot y = 3 \\times 4 = 12$$",
    category: ""
  },
  {
    id: "est2_exam7_q11",
    question: "Matrix $A$ has dimensions $3 \\times 4$ and matrix $B$ has dimensions $4 \\times 2$. What are the dimensions of the product matrix $A \\cdot B$?",
    options: [
      "$4 \\times 4$",
      "$3 \\times 2$",
      "$2 \\times 3$",
      "$4 \\times 2$",
      "The product is undefined"
    ],
    correctAnswer: 1,
    explanation: "For matrix multiplication $A \\cdot B$ to be defined, the number of columns of $A$ must equal the number of rows of $B$.\nHere, $A$ has 4 columns and $B$ has 4 rows, so the multiplication is defined.\nThe resulting matrix $A \\cdot B$ has dimensions equal to (rows of $A$) $\\times$ (columns of $B$):\n$$3 \\times 2$$",
    category: ""
  },
  {
    id: "est2_exam7_q12",
    question: "A sequence $(U_n)$ is defined recursively by $U_0 = 2$ and $U_{n+1} = U_n^2 - 3$ for all $n \\ge 0$. What is the value of $U_3$?",
    options: [
      "$-2$",
      "$-1$",
      "1",
      "2",
      "5"
    ],
    correctAnswer: 2,
    explanation: "Compute the terms sequentially:\n$$U_0 = 2$$\n$$U_1 = U_0^2 - 3 = 2^2 - 3 = 4 - 3 = 1$$\n$$U_2 = U_1^2 - 3 = 1^2 - 3 = 1 - 3 = -2$$\n$$U_3 = U_2^2 - 3 = (-2)^2 - 3 = 4 - 3 = 1$$",
    category: ""
  },
  {
    id: "est2_exam7_q13",
    question: "A four-digit passcode is formed using only the digits $\\{2, 3, 5, 7, 8\\}$ without repetition. How many such passcodes can be formed that represent an even number?",
    options: [
      "24",
      "36",
      "48",
      "60",
      "72"
    ],
    correctAnswer: 2,
    explanation: "For the four-digit code to be an even number, its last digit must be an even digit.\nThe even digits available in the set $\\{2, 3, 5, 7, 8\\}$ are $2$ and $8$ (2 choices for the last digit).\nOnce the last digit is chosen, 3 digits remain to be chosen and arranged from the remaining 4 available digits:\n$$P(4, 3) = 4 \\times 3 \\times 2 = 24$$\nTotal even passcodes:\n$$2 \\times 24 = 48$$",
    category: ""
  },
  {
    id: "est2_exam7_q14",
    question: "Which of the following lines is an oblique (slant) asymptote of the rational function $f(x) = \\frac{2x^2 + 5x - 1}{x + 3}$?",
    options: [
      "$y = 2x - 1$",
      "$y = 2x + 1$",
      "$y = 2x - 3$",
      "$y = x - 1$",
      "$y = 2x + 5$"
    ],
    correctAnswer: 0,
    explanation: "To find the slant asymptote, perform polynomial long division of $(2x^2 + 5x - 1)$ by $(x + 3)$:\n$$2x^2 \\div x = 2x$$\n$$(2x)(x + 3) = 2x^2 + 6x$$\nSubtracting: $(2x^2 + 5x - 1) - (2x^2 + 6x) = -x - 1$.\n$$-x \\div x = -1$$\n$$(-1)(x + 3) = -x - 3$$\nSubtracting: $(-x - 1) - (-x - 3) = 2$ (remainder).\nThus:\n$$f(x) = 2x - 1 + \\frac{2}{x + 3}$$\nAs $x \\to \\pm\\infty$, $\\frac{2}{x + 3} \\to 0$.\nTherefore, the slant asymptote is $y = 2x - 1$.",
    category: ""
  },
  {
    id: "est2_exam7_q15",
    question: "A circle has a radius of $6\\text{ cm}$. A sector of this circle has a central angle of $\\theta = \\frac{2\\pi}{3}\\text{ radians}$. What is the area of the sector?",
    options: [
      "$6\\pi\\text{ cm}^2$",
      "$8\\pi\\text{ cm}^2$",
      "$12\\pi\\text{ cm}^2$",
      "$18\\pi\\text{ cm}^2$",
      "$24\\pi\\text{ cm}^2$"
    ],
    correctAnswer: 2,
    explanation: "The formula for the area of a sector of a circle with radius $r$ and central angle $\\theta$ in radians is:\n$$\\text{Area} = \\frac{1}{2} r^2 \\theta$$\nSubstitute $r = 6$ and $\\theta = \\frac{2\\pi}{3}$:\n$$\\text{Area} = \\frac{1}{2} (6^2) \\left(\\frac{2\\pi}{3}\\right) = \\frac{1}{2} (36) \\left(\\frac{2\\pi}{3}\\right) = 18 \\times \\frac{2\\pi}{3} = 12\\pi\\text{ cm}^2$$",
    category: ""
  },
  {
    id: "est2_exam7_q16",
    question: "Which of the following intervals represents the complete solution set to the inequality $\\log_2(x - 3) \\le 4$?",
    options: [
      "$(-\\infty, 19]$",
      "$[3, 19]$",
      "$(3, 19]$",
      "$(3, 16]$",
      "$[0, 19]$"
    ],
    correctAnswer: 2,
    explanation: "For the logarithm to be defined, the argument must be strictly positive:\n$$x - 3 > 0 \\implies x > 3$$\nNow solve the logarithmic inequality:\n$$\\log_2(x - 3) \\le 4$$\nSince the base $2 > 1$, the inequality direction is preserved when converted to exponential form:\n$$x - 3 \\le 2^4 = 16$$\n$$x \\le 19$$\nCombining with the domain restriction $x > 3$, the complete solution set is the interval $(3, 19]$.",
    category: ""
  },
  {
    id: "est2_exam7_q17",
    question: "The table below classifies 120 registered vehicles by vehicle type and fuel category:\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Type</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Gasoline</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Hybrid</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Total</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Sedan</td><td class=\"border border-gray-400 px-2 py-1\">42</td><td class=\"border border-gray-400 px-2 py-1\">28</td><td class=\"border border-gray-400 px-2 py-1\">70</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">SUV</td><td class=\"border border-gray-400 px-2 py-1\">38</td><td class=\"border border-gray-400 px-2 py-1\">12</td><td class=\"border border-gray-400 px-2 py-1\">50</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Total</td><td class=\"border border-gray-400 px-2 py-1\">80</td><td class=\"border border-gray-400 px-2 py-1\">40</td><td class=\"border border-gray-400 px-2 py-1\">120</td></tr>\n  </tbody>\n</table>\n\nIf a Hybrid vehicle is chosen at random, what is the probability that it is an SUV?",
    options: [
      "$\\frac{1}{10}$",
      "$\\frac{3}{10}$",
      "$\\frac{6}{25}$",
      "$\\frac{12}{50}$",
      "$\\frac{1}{3}$"
    ],
    correctAnswer: 1,
    explanation: "This is a conditional probability: $P(\\text{SUV} \\mid \\text{Hybrid})$.\nRestrict the sample space to Hybrid vehicles (the 'Hybrid' column total):\n$$\\text{Total Hybrid vehicles} = 40$$\nThe number of Hybrid vehicles that are SUVs is:\n$$\\text{Hybrid SUVs} = 12$$\nThe probability is:\n$$P = \\frac{12}{40} = \\frac{3}{10}$$",
    category: ""
  },
  {
    id: "est2_exam7_q18",
    question: "If $\\cos(\\theta) = -\\frac{5}{13}$ and $\\pi < \\theta < \\frac{3\\pi}{2}$, what is the value of $\\tan(\\theta)$?",
    options: [
      "$-\\frac{12}{5}$",
      "$-\\frac{5}{12}$",
      "$\\frac{5}{12}$",
      "$\\frac{12}{13}$",
      "$\\frac{12}{5}$"
    ],
    correctAnswer: 4,
    explanation: "The angle $\\theta$ is in Quadrant III (since $\\pi < \\theta < \\frac{3\\pi}{2}$).\nIn Quadrant III, cosine and sine are negative, while tangent is positive.\nUsing the Pythagorean identity:\n$$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$$\n$$\\sin^2(\\theta) + \\left(-\\frac{5}{13}\\right)^2 = 1 \\implies \\sin^2(\\theta) + \\frac{25}{169} = 1$$\n$$\\sin^2(\\theta) = \\frac{144}{169} \\implies \\sin(\\theta) = -\\frac{12}{13}$$\nNow calculate $\\tan(\\theta)$:\n$$\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)} = \\frac{-12/13}{-5/13} = \\frac{12}{5}$$",
    category: ""
  },
  {
    id: "est2_exam7_q19",
    question: "The first three terms of an arithmetic sequence are displayed in the table below:\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">$n$</th>\n      <th class=\"border border-gray-400 px-2 py-1\">$a_n$</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">1</td><td class=\"border border-gray-400 px-2 py-1\">5</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">2</td><td class=\"border border-gray-400 px-2 py-1\">9</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">3</td><td class=\"border border-gray-400 px-2 py-1\">13</td></tr>\n  </tbody>\n</table>\n\nWhat is the sum of the first 20 terms ($S_{20}$) of this arithmetic sequence?",
    options: [
      "780",
      "820",
      "860",
      "900",
      "940"
    ],
    correctAnswer: 2,
    explanation: "First term $a_1 = 5$.\nCommon difference $d = a_2 - a_1 = 9 - 5 = 4$.\nThe formula for the sum of the first $n$ terms is:\n$$S_n = \\frac{n}{2} [2a_1 + (n - 1)d]$$\nFor $n = 20$:\n$$S_{20} = \\frac{20}{2} [2(5) + (20 - 1)(4)] = 10 [10 + (19)(4)]$$\n$$S_{20} = 10 [10 + 76] = 10 [86] = 860$$",
    category: ""
  },
  {
    id: "est2_exam7_q20",
    question: "Let vectors $\\vec{u} = \\langle 4, -3 \\rangle$ and $\\vec{v} = \\langle 2, 5 \\rangle$ in the 2D Cartesian plane. What is the value of the dot product $\\vec{u} \\cdot \\vec{v}$?",
    options: [
      "$-7$",
      "$-5$",
      "7",
      "23",
      "25"
    ],
    correctAnswer: 0,
    explanation: "The dot product of two vectors $\\vec{u} = \\langle u_1, u_2 \\rangle$ and $\\vec{v} = \\langle v_1, v_2 \\rangle$ is defined as:\n$$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2$$\nSubstitute the components:\n$$\\vec{u} \\cdot \\vec{v} = (4)(2) + (-3)(5) = 8 - 15 = -7$$",
    category: ""
  },
  {
    id: "est2_exam7_q21",
    question: "If $z = \\frac{6 + 8i}{1 - i}$, where $i = \\sqrt{-1}$, what is the magnitude (modulus) $|z|$?",
    options: [
      "$5$",
      "$5\\sqrt{2}$",
      "$10$",
      "$10\\sqrt{2}$",
      "$25$"
    ],
    correctAnswer: 1,
    explanation: "Use the property of the modulus of a quotient: $\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|}$.\n1. $|6 + 8i| = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.\n2. $|1 - i| = \\sqrt{1^2 + (-1)^2} = \\sqrt{1 + 1} = \\sqrt{2}$.\nTherefore:\n$$|z| = \\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$$",
    category: ""
  },
  {
    id: "est2_exam7_q22",
    question: "For what value of $k$ does the system of linear equations have no solution?\n$$\\begin{cases} 2x - 3y = 7 \\\\ 4x - ky = 15 \\end{cases}$$",
    options: [
      "$-6$",
      "$-3$",
      "3",
      "6",
      "14"
    ],
    correctAnswer: 3,
    explanation: "A system of two linear equations $a_1 x + b_1 y = c_1$ and $a_2 x + b_2 y = c_2$ has no solution (parallel distinct lines) when:\n$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2}$$\nHere:\n$$\\frac{2}{4} = \\frac{-3}{-k} \\ne \\frac{7}{15}$$\n$$\\frac{1}{2} = \\frac{3}{k} \\implies k = 6$$\nSince $\\frac{1}{2} \\ne \\frac{7}{15}$, the lines are parallel and distinct, meaning there is no solution when $k = 6$.",
    category: ""
  },
  {
    id: "est2_exam7_q23",
    question: "The graph of $y = f(x)$ has a local maximum at $(-1, 4)$. If $g(x) = f(x - 3) + 2$, what are the coordinates of the corresponding local maximum on the graph of $g(x)$?",
    options: [
      "$(-4, 6)$",
      "$(2, 6)$",
      "$(2, 2)$",
      "$(-4, 2)$",
      "$(4, 6)$"
    ],
    correctAnswer: 1,
    explanation: "The transformation $g(x) = f(x - 3) + 2$ shifts the graph of $f(x)$:\n- 3 units to the right ($x \\to x + 3$)\n- 2 units upward ($y \\to y + 2$)\nApplying this translation to the local maximum point $(-1, 4)$:\n$$(-1 + 3, 4 + 2) = (2, 6)$$",
    category: ""
  },
  {
    id: "est2_exam7_q24",
    question: "A sphere of radius $r$ is completely inscribed inside a right circular cylinder such that the sphere touches the cylinder's top, bottom, and lateral surface. What is the ratio of the volume of the sphere to the volume of the cylinder?",
    options: [
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{4}$",
      "$\\frac{4}{5}$"
    ],
    correctAnswer: 2,
    explanation: "The cylinder has base radius $r$ and height $h = 2r$ (equal to the diameter of the sphere).\n1. Volume of the sphere:\n$$V_{\\text{sphere}} = \\frac{4}{3} \\pi r^3$$\n2. Volume of the cylinder:\n$$V_{\\text{cylinder}} = \\pi r^2 h = \\pi r^2 (2r) = 2\\pi r^3$$\nThe ratio is:\n$$\\frac{V_{\\text{sphere}}}{V_{\\text{cylinder}}} = \\frac{\\frac{4}{3} \\pi r^3}{2\\pi r^3} = \\frac{4/3}{2} = \\frac{2}{3}$$",
    category: ""
  },
  {
    id: "est2_exam7_q25",
    question: "What is the value of $\\lim_{x \\to \\infty} \\frac{6x^3 - 4x + 1}{2x^3 + 5x^2 - 3}$?",
    options: [
      "0",
      "1",
      "2",
      "3",
      "$\\infty$"
    ],
    correctAnswer: 3,
    explanation: "For the limit as $x \\to \\infty$ of a rational function where the degree of the numerator equals the degree of the denominator (both degree 3), divide each term by the highest power $x^3$:\n$$\\lim_{x \\to \\infty} \\frac{6 - \\frac{4}{x^2} + \\frac{1}{x^3}}{2 + \\frac{5}{x} - \\frac{3}{x^3}} = \\frac{6 - 0 + 0}{2 + 0 - 0} = \\frac{6}{2} = 3$$",
    category: ""
  },
  {
    id: "est2_exam7_q26",
    question: "What is the sum of all real solutions to the equation $|3x - 1| = |x + 7|$?",
    options: [
      "$1.5$",
      "$2.5$",
      "$3.0$",
      "$4.0$",
      "$5.5$"
    ],
    correctAnswer: 1,
    explanation: "The equation $|A| = |B|$ is equivalent to $A = B$ or $A = -B$.\nCase 1:\n$$3x - 1 = x + 7 \\implies 2x = 8 \\implies x = 4$$\nCase 2:\n$$3x - 1 = -(x + 7) = -x - 7 \\implies 4x = -6 \\implies x = -\\frac{3}{2} = -1.5$$\nThe sum of all real solutions is:\n$$4 + (-1.5) = 2.5$$",
    category: ""
  },
  {
    id: "est2_exam7_q27",
    question: "In $\\triangle ABC$, the side lengths are $a = 5, b = 7,$ and $c = 8$. What is the value of $\\cos(C)$?",
    options: [
      "$\\frac{1}{7}$",
      "$\\frac{2}{7}$",
      "$\\frac{1}{5}$",
      "$\\frac{3}{8}$",
      "$\\frac{1}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Use the Law of Cosines:\n$$c^2 = a^2 + b^2 - 2ab \\cos(C)$$\nSubstitute $a = 5, b = 7, c = 8$:\n$$8^2 = 5^2 + 7^2 - 2(5)(7) \\cos(C)$$\n$$64 = 25 + 49 - 70 \\cos(C)$$\n$$64 = 74 - 70 \\cos(C)$$\nSubtract 74 from both sides:\n$$-10 = -70 \\cos(C) \\implies \\cos(C) = \\frac{-10}{-70} = \\frac{1}{7}$$",
    category: ""
  },
  {
    id: "est2_exam7_q28",
    question: "The table below shows the frequency distribution of quiz scores for a study group of 20 students:\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Score</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Frequency</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">70</td><td class=\"border border-gray-400 px-2 py-1\">3</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">80</td><td class=\"border border-gray-400 px-2 py-1\">7</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">90</td><td class=\"border border-gray-400 px-2 py-1\">6</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">100</td><td class=\"border border-gray-400 px-2 py-1\">4</td></tr>\n  </tbody>\n</table>\n\nWhat is the weighted mean score for this group of students?",
    options: [
      "82.5",
      "84.0",
      "85.5",
      "87.0",
      "88.5"
    ],
    correctAnswer: 2,
    explanation: "Multiply each score by its frequency and find the total sum:\n$$3(70) = 210$$\n$$7(80) = 560$$\n$$6(90) = 540$$\n$$4(100) = 400$$\nTotal sum of all scores:\n$$210 + 560 + 540 + 400 = 1,710$$\nTotal number of students is $3 + 7 + 6 + 4 = 20$.\nThe weighted mean is:\n$$\\text{Mean} = \\frac{1,710}{20} = 85.5$$",
    category: ""
  },
  {
    id: "est2_exam7_q29",
    question: "In a circle centered at $O$ with radius $12\\text{ cm}$, a chord $AB$ subtends a central angle of $90^\\circ$. What is the perimeter of the minor segment bounded by chord $AB$ and the minor arc $AB$?",
    options: [
      "$6\\pi + 12\\sqrt{2}\\text{ cm}$",
      "$12\\pi + 12\\sqrt{2}\\text{ cm}$",
      "$6\\pi + 6\\sqrt{2}\\text{ cm}$",
      "$12\\pi + 24\\text{ cm}$",
      "$36\\pi + 12\\sqrt{2}\\text{ cm}$"
    ],
    correctAnswer: 0,
    explanation: "The perimeter of the minor segment is the length of chord $AB$ plus the length of minor arc $AB$.\n1. In $\\triangle AOB$, $OA = OB = 12$ and $\\angle AOB = 90^\\circ$.\nUsing the Pythagorean theorem:\n$$AB = \\sqrt{12^2 + 12^2} = 12\\sqrt{2}\\text{ cm}$$\n2. The central angle is $90^\\circ = \\frac{\\pi}{2}$ radians.\nArc length:\n$$s = r\\theta = 12 \\times \\frac{\\pi}{2} = 6\\pi\\text{ cm}$$\nTotal perimeter:\n$$\\text{Perimeter} = 6\\pi + 12\\sqrt{2}\\text{ cm}$$",
    category: ""
  },
  {
    id: "est2_exam7_q30",
    question: "When the polynomial $P(x) = x^4 - 3x^3 + kx - 8$ is divided by $(x - 2)$, the remainder is 4. What is the value of $k$?",
    options: [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    correctAnswer: 2,
    explanation: "According to the Remainder Theorem, the remainder when $P(x)$ is divided by $(x - 2)$ is equal to $P(2)$:\n$$P(2) = 4$$\nSubstitute $x = 2$ into $P(x)$:\n$$2^4 - 3(2^3) + k(2) - 8 = 4$$\n$$16 - 3(8) + 2k - 8 = 4$$\n$$16 - 24 + 2k - 8 = 4$$\n$$-16 + 2k = 4$$\n$$2k = 20 \\implies k = 10$$",
    category: ""
  },
  {
    id: "est2_exam7_q31",
    question: "Which of the following functions is an even function for all $x$ in its domain?",
    options: [
      "$f(x) = x^3 - x$",
      "$f(x) = \\frac{x^3}{\\sin(x)}$",
      "$f(x) = x^2 + 2x$",
      "$f(x) = x\\cos(x)$",
      "$f(x) = \\sin(x) + \\cos(x)$"
    ],
    correctAnswer: 1,
    explanation: "A function is even if $f(-x) = f(x)$ for all $x$ in its domain.\nTest $f(x) = \\frac{x^3}{\\sin(x)}$:\n$$f(-x) = \\frac{(-x)^3}{\\sin(-x)} = \\frac{-x^3}{-\\sin(x)} = \\frac{x^3}{\\sin(x)} = f(x)$$\nSince $f(-x) = f(x)$, this function is even.\nNotice:\n- $x^3 - x$ is odd.\n- $x\\cos(x)$ is odd.\n- $x^2 + 2x$ and $\\sin(x) + \\cos(x)$ are neither even nor odd.",
    category: ""
  },
  {
    id: "est2_exam7_q32",
    question: "What is the fundamental period of the trigonometric function $g(x) = 5\\cos\\left(\\frac{4\\pi}{7}x\\right) - 2$?",
    options: [
      "$\\frac{7}{4}$",
      "$\\frac{7}{2}$",
      "7",
      "$\\frac{4\\pi}{7}$",
      "$\\frac{7\\pi}{2}$"
    ],
    correctAnswer: 1,
    explanation: "The standard cosine function $y = A\\cos(Bx - C) + D$ has fundamental period:\n$$T = \\frac{2\\pi}{|B|}$$\nHere, $B = \\frac{4\\pi}{7}$:\n$$T = \\frac{2\\pi}{\\frac{4\\pi}{7}} = 2\\pi \\times \\frac{7}{4\\pi} = \\frac{14}{4} = \\frac{7}{2} = 3.5$$",
    category: ""
  },
  {
    id: "est2_exam7_q33",
    question: "What is the perpendicular distance from the point $(3, 2)$ to the straight line with equation $3x + 4y - 2 = 0$?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    correctAnswer: 1,
    explanation: "Use the point-to-line perpendicular distance formula:\n$$d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$$\nSubstitute $(x_0, y_0) = (3, 2)$ and $A = 3, B = 4, C = -2$:\n$$d = \\frac{|3(3) + 4(2) - 2|}{\\sqrt{3^2 + 4^2}} = \\frac{|9 + 8 - 2|}{\\sqrt{9 + 16}} = \\frac{|15|}{\\sqrt{25}} = \\frac{15}{5} = 3$$",
    category: ""
  },
  {
    id: "est2_exam7_q34",
    question: "The region bounded by the line $y = -x + 4$, the $x$-axis, and the $y$-axis in the first quadrant is shown below:\n\n<svg viewBox=\"-25 -25 220 220\" class=\"w-full max-w-sm mx-auto my-4 bg-white border border-gray-200 rounded-xl\">\n  <defs>\n    <pattern id=\"grid_exam7_q34\" width=\"25\" height=\"25\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 25 0 L 0 0 0 25\" fill=\"none\" stroke=\"#f3f4f6\" stroke-width=\"1\"/>\n    </pattern>\n  </defs>\n  <rect x=\"-25\" y=\"-25\" width=\"220\" height=\"220\" fill=\"url(#grid_exam7_q34)\"/>\n  <!-- Axes: origin at (30, 160) -->\n  <line x1=\"15\" y1=\"160\" x2=\"175\" y2=\"160\" stroke=\"#000000\" stroke-width=\"1.5\"/>\n  <line x1=\"30\" y1=\"175\" x2=\"30\" y2=\"15\" stroke=\"#000000\" stroke-width=\"1.5\"/>\n  <polygon points=\"175,160 167,156 167,164\" fill=\"#000000\"/>\n  <polygon points=\"30,15 26,23 34,23\" fill=\"#000000\"/>\n  <text x=\"180\" y=\"164\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">x</text>\n  <text x=\"34\" y=\"13\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">y</text>\n  <text x=\"18\" y=\"174\" font-size=\"11\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">O</text>\n  <!-- Shaded region: (30,160) to (130,160) to (30,60) -->\n  <polygon points=\"30,160 130,160 30,60\" fill=\"#fef3c7\" stroke=\"#000000\" stroke-width=\"2\"/>\n  <circle cx=\"30\" cy=\"60\" r=\"3\" fill=\"#000000\"/>\n  <text x=\"35\" y=\"62\" font-size=\"10\" font-weight=\"bold\" fill=\"#000000\">(0, 4)</text>\n  <circle cx=\"130\" cy=\"160\" r=\"3\" fill=\"#000000\"/>\n  <text x=\"118\" y=\"175\" font-size=\"10\" font-weight=\"bold\" fill=\"#000000\">(4, 0)</text>\n</svg>\n\nWhat is the volume of the solid generated by revolving this triangular region completely around the $y$-axis?",
    options: [
      "$\\frac{16\\pi}{3}$",
      "$\\frac{32\\pi}{3}$",
      "$\\frac{64\\pi}{3}$",
      "$16\\pi$",
      "$32\\pi$"
    ],
    correctAnswer: 2,
    explanation: "Revolving this right triangle around the $y$-axis generates a right circular cone.\n- The radius of the base of the cone lies along the $x$-axis: $r = 4$.\n- The height of the cone lies along the $y$-axis: $h = 4$.\nThe volume of a right circular cone is:\n$$V = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi (4^2) (4) = \\frac{1}{3} \\pi (16)(4) = \\frac{64\\pi}{3}$$",
    category: ""
  },
  {
    id: "est2_exam7_q35",
    question: "A laboratory technician has $40\\text{ liters}$ of a $30\\%$ acid solution. How many liters of pure water must be added to dilute the solution to a $20\\%$ acid solution?",
    options: [
      "$10\\text{ liters}$",
      "$15\\text{ liters}$",
      "$20\\text{ liters}$",
      "$25\\text{ liters}$",
      "$30\\text{ liters}$"
    ],
    correctAnswer: 2,
    explanation: "Let $x$ be the number of liters of pure water added.\nPure water contains $0\\%$ acid.\nThe initial amount of pure acid is:\n$$0.30 \\times 40 = 12\\text{ liters}$$\nThe total volume after adding water is $40 + x$ liters.\nThe concentration of the new solution must be $20\\%$:\n$$\\frac{12}{40 + x} = 0.20$$\nMultiply both sides by $(40 + x)$:\n$$12 = 0.20(40 + x)$$\n$$12 = 8 + 0.20x$$\n$$0.20x = 4 \\implies x = \\frac{4}{0.20} = 20\\text{ liters}$$",
    category: ""
  },
  {
    id: "est2_exam7_q36",
    question: "What is the exact value of $\\sin\\left(2\\arccos\\left(\\frac{3}{5}\\right)\\right)$?",
    options: [
      "$\\frac{6}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{18}{25}$",
      "$\\frac{24}{25}$",
      "$1$"
    ],
    correctAnswer: 3,
    explanation: "Let $\\theta = \\arccos\\left(\\frac{3}{5}\\right)$.\nThen $\\cos(\\theta) = \\frac{3}{5}$ and $\\sin(\\theta) = \\sqrt{1 - \\cos^2(\\theta)} = \\sqrt{1 - \\frac{9}{25}} = \\sqrt{\\frac{16}{25}} = \\frac{4}{5}$.\nUse the sine double-angle identity:\n$$\\sin(2\\theta) = 2\\sin(\\theta)\\cos(\\theta)$$\nSubstitute $\\sin(\\theta) = \\frac{4}{5}$ and $\\cos(\\theta) = \\frac{3}{5}$:\n$$\\sin(2\\theta) = 2\\left(\\frac{4}{5}\\right)\\left(\\frac{3}{5}\\right) = \\frac{24}{25}$$",
    category: ""
  },
  {
    id: "est2_exam7_q37",
    question: "If $\\alpha$ and $\\beta$ are the real roots of the quadratic equation $x^2 - 5x + 3 = 0$, what is the value of $\\alpha^2 + \\beta^2$?",
    options: [
      "19",
      "22",
      "25",
      "28",
      "31"
    ],
    correctAnswer: 0,
    explanation: "By Vieta's formulas for $x^2 - 5x + 3 = 0$:\n$$\\alpha + \\beta = 5$$\n$$\\alpha \\beta = 3$$\nWe know that:\n$$\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$$\nSubstitute the known values:\n$$\\alpha^2 + \\beta^2 = (5)^2 - 2(3) = 25 - 6 = 19$$",
    category: ""
  },
  {
    id: "est2_exam7_q38",
    question: "The population of a bacterial colony is modeled by the function $P(t) = 500 \\cdot 2^{t/3}$, where $t$ is measured in hours. What will be the population after 12 hours?",
    options: [
      "2,000",
      "4,000",
      "6,000",
      "8,000",
      "16,000"
    ],
    correctAnswer: 3,
    explanation: "Substitute $t = 12$ into the population model:\n$$P(12) = 500 \\cdot 2^{12/3} = 500 \\cdot 2^4$$\nSince $2^4 = 16$:\n$$P(12) = 500 \\times 16 = 8,000$$",
    category: ""
  },
  {
    id: "est2_exam7_q39",
    question: "For what value of $c$ is the line $y = 2x + c$ tangent to the parabola $y = x^2 - 4x + 7$?",
    options: [
      "$-3$",
      "$-2$",
      "$-1$",
      "1",
      "2"
    ],
    correctAnswer: 1,
    explanation: "Equate the two functions to find their intersection points:\n$$x^2 - 4x + 7 = 2x + c$$\n$$x^2 - 6x + (7 - c) = 0$$\nA line is tangent to a parabola if and only if the resulting quadratic equation has exactly one real solution (discriminant $\\Delta = 0$):\n$$\\Delta = b^2 - 4ac = 0$$\n$$(-6)^2 - 4(1)(7 - c) = 0$$\n$$36 - 28 + 4c = 0$$\n$$8 + 4c = 0 \\implies 4c = -8 \\implies c = -2$$",
    category: ""
  },
  {
    id: "est2_exam7_q40",
    question: "A committee of 3 people is to be randomly selected from a group of 5 teachers and 4 students. What is the probability that the committee contains at least 1 student?",
    options: [
      "$\\frac{5}{42}$",
      "$\\frac{17}{21}$",
      "$\\frac{37}{42}$",
      "$\\frac{7}{8}$",
      "$\\frac{41}{42}$"
    ],
    correctAnswer: 2,
    explanation: "Use the complementary probability approach:\n$$P(\\text{at least 1 student}) = 1 - P(\\text{no students})$$\n1. Total ways to choose 3 people from all 9 people:\n$$\\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84$$\n2. Number of ways to choose a committee of 3 containing only teachers (no students) from the 5 teachers:\n$$\\binom{5}{3} = \\frac{5 \\times 4 \\times 3}{3 \\times 2 \\times 1} = 10$$\n3. Probability of no students:\n$$P(\\text{no students}) = \\frac{10}{84} = \\frac{5}{42}$$\n4. Probability of at least 1 student:\n$$P(\\text{at least 1 student}) = 1 - \\frac{5}{42} = \\frac{37}{42}$$",
    category: ""
  }
];
