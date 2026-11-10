import { Question } from "../../types";

export const EST2_2026_JAN_PART1: Question[] = [
  {
    id: "est2_2026_jan_1",
    question: "The sum of three consecutive integers is 168. The second one is equal to:",
    options: [
      "55",
      "56",
      "57",
      "58",
      "59"
    ],
    correctAnswer: 1,
    explanation: "Let the three consecutive integers be $x-1$, $x$, and $x+1$.\nTheir sum is $(x-1) + x + (x+1) = 3x$.\nWe are given that $3x = 168$.\nSolving for $x$, we get $x = 168 / 3 = 56$.\nThe second integer is $x$, which is 56.",
    category: "Algebra",
    topics: ["Linear Equations", "Word Problems"]
  },
  {
    id: "est2_2026_jan_2",
    question: "If $\\frac{p-3q}{4} + \\frac{q}{2} = \\frac{2p+q}{2} - \\frac{11}{4}$, then the value of $p$ in terms of $q$ is:",
    options: [
      "$-\\frac{1}{5q} - \\frac{11}{5}$",
      "$-\\frac{1}{5q} + \\frac{11}{5}$",
      "$-q + \\frac{11}{3}$",
      "$\\frac{3}{5q} - \\frac{11}{5}$",
      "$q + \\frac{11}{3}$"
    ],
    correctAnswer: 2,
    explanation: "Multiply the entire equation by 4 to clear the denominators:\n$4 \\left( \\frac{p-3q}{4} + \\frac{q}{2} \\right) = 4 \\left( \\frac{2p+q}{2} - \\frac{11}{4} \\right)$\n$(p - 3q) + 2q = 2(2p + q) - 11$\n$p - q = 4p + 2q - 11$\nSubtract $p$ from both sides:\n$-q = 3p + 2q - 11$\nSubtract $2q$ from both sides:\n$-3q = 3p - 11$\nAdd 11 to both sides:\n$-3q + 11 = 3p$\nDivide by 3:\n$p = -q + \\frac{11}{3}$",
    category: "Algebra",
    topics: ["Linear Equations", "Solving for a Variable"]
  },
  {
    id: "est2_2026_jan_3",
    question: "Let $g(x) = \\frac{x^2+4}{-4x^2-5x+6}$. For which values of $x$ is $g(x)$ undefined?",
    options: [
      "$x = -2$ and $x = -\\frac{3}{4}$",
      "$x = -2$ and $x = \\frac{3}{4}$",
      "$x = 2$ and $x = -\\frac{3}{4}$",
      "$x = 2$ and $x = \\frac{3}{4}$",
      "$x = 2$ and $x = \\frac{4}{3}$"
    ],
    correctAnswer: 1,
    explanation: "A rational function is undefined when its denominator is equal to zero.\nSet the denominator to zero: $-4x^2 - 5x + 6 = 0$.\nMultiply by -1: $4x^2 + 5x - 6 = 0$.\nFactor the quadratic equation:\nWe need two numbers that multiply to $4 \\times -6 = -24$ and add to $5$. These numbers are $8$ and $-3$.\nRewrite the middle term: $4x^2 + 8x - 3x - 6 = 0$.\nFactor by grouping: $4x(x + 2) - 3(x + 2) = 0$.\n$(4x - 3)(x + 2) = 0$.\nSo, $4x - 3 = 0 \\Rightarrow x = \\frac{3}{4}$ or $x + 2 = 0 \\Rightarrow x = -2$.",
    category: "Algebra",
    topics: ["Rational Functions", "Domain", "Quadratic Equations"]
  },
  {
    id: "est2_2026_jan_4",
    question: "Consider a line $d$ of equation $2y = 3x + 5$. Line $L$ is perpendicular to $d$, and $T$ is a line parallel to $L$. If $A(-5, 3)$ is a point on $T$, then the equation of $T$ is:",
    options: [
      "$2y - 3x = 1$",
      "$3y - 2x = -3$",
      "$3y - 2x = -1$",
      "$3y + 2x = -1$",
      "$3y + 2x = 3$"
    ],
    correctAnswer: 3,
    explanation: "First, find the slope of line $d$. Rewrite $2y = 3x + 5$ in slope-intercept form: $y = \\frac{3}{2}x + \\frac{5}{2}$. The slope of $d$ is $\\frac{3}{2}$.\nSince line $L$ is perpendicular to $d$, its slope is the negative reciprocal of $\\frac{3}{2}$, which is $-\\frac{2}{3}$.\nSince line $T$ is parallel to $L$, it has the same slope as $L$, so the slope of $T$ is $-\\frac{2}{3}$.\nUse the point-slope form to find the equation of $T$ passing through $A(-5, 3)$:\n$y - y_1 = m(x - x_1)$\n$y - 3 = -\\frac{2}{3}(x - (-5))$\n$y - 3 = -\\frac{2}{3}(x + 5)$\nMultiply by 3 to clear the fraction:\n$3(y - 3) = -2(x + 5)$\n$3y - 9 = -2x - 10$\nRearrange into standard form:\n$3y + 2x = -1$",
    category: "Geometry",
    topics: ["Coordinate Geometry", "Lines", "Parallel and Perpendicular Lines"]
  },
  {
    id: "est2_2026_jan_5",
    question: "In a geometric sequence, the $5^{\\text{th}}$ term is $3,200,000$ and the $10^{\\text{th}}$ term is $1,024$. What is the first term of this sequence?",
    options: [
      "$2 \\times 10^9$",
      "$2 \\times 10^{10}$",
      "$2 \\times 10^{11}$",
      "$2 \\times 10^{16}$",
      "$2 \\times 10^{20}$"
    ],
    correctAnswer: 0,
    explanation: "The formula for the $n^{\\text{th}}$ term of a geometric sequence is $a_n = a_1 \\cdot r^{n-1}$.\nWe are given:\n$a_5 = a_1 \\cdot r^4 = 3,200,000$\n$a_{10} = a_1 \\cdot r^9 = 1,024$\nDivide the equation for $a_{10}$ by the equation for $a_5$:\n$\\frac{a_1 \\cdot r^9}{a_1 \\cdot r^4} = \\frac{1,024}{3,200,000}$\n$r^5 = \\frac{1,024}{1,024 \\times 3125} = \\frac{1}{3125}$\nTaking the fifth root of both sides:\n$r = \\frac{1}{5}$\nNow, substitute $r$ back into the equation for $a_5$ to find $a_1$:\n$a_1 \\cdot (\\frac{1}{5})^4 = 3,200,000$\n$a_1 \\cdot \\frac{1}{625} = 3,200,000$\n$a_1 = 3,200,000 \\times 625 = 2,000,000,000 = 2 \\times 10^9$",
    category: "Algebra",
    topics: ["Sequences", "Geometric Sequences"]
  },
  {
    id: "est2_2026_jan_6",
    question: "$15, 16, 17, y, 20, 21, 24, 20$\n\nIf the mean of the dataset above is equal to 20, what is the value of the median?",
    options: [
      "18",
      "19",
      "20",
      "21",
      "22"
    ],
    correctAnswer: 2,
    explanation: "First, find the value of $y$ using the mean.\nThe sum of the 8 numbers is $15 + 16 + 17 + y + 20 + 21 + 24 + 20 = 133 + y$.\nThe mean is $\\frac{133 + y}{8} = 20$.\n$133 + y = 160 \\Rightarrow y = 27$.\nNow, list the dataset in ascending order to find the median:\n$15, 16, 17, 20, 20, 21, 24, 27$\nSince there are 8 numbers (an even number), the median is the average of the two middle numbers (the 4th and 5th numbers).\nMedian = $\\frac{20 + 20}{2} = 20$.",
    category: "Data Analysis",
    topics: ["Statistics", "Mean", "Median"]
  },
  {
    id: "est2_2026_jan_7",
    question: "Which of the following functions is the inverse of function $p$ defined by $p(x) = \\frac{x-1}{x+2}$?",
    options: [
      "$p^{-1}(x) = \\frac{2x}{1-x}$",
      "$p^{-1}(x) = \\frac{x-1}{2x-1}$",
      "$p^{-1}(x) = \\frac{2x-1}{x+1}$",
      "$p^{-1}(x) = \\frac{1-2x}{1-x}$",
      "$p^{-1}(x) = \\frac{2x+1}{1-x}$"
    ],
    correctAnswer: 4,
    explanation: "To find the inverse function, replace $p(x)$ with $y$:\n$y = \\frac{x-1}{x+2}$\nSwap $x$ and $y$:\n$x = \\frac{y-1}{y+2}$\nSolve for $y$:\n$x(y + 2) = y - 1$\n$xy + 2x = y - 1$\nMove all terms with $y$ to one side and other terms to the other side:\n$xy - y = -2x - 1$\nFactor out $y$:\n$y(x - 1) = -2x - 1$\nDivide by $(x - 1)$:\n$y = \\frac{-2x - 1}{x - 1}$\nMultiply the numerator and denominator by -1 to match the options:\n$y = \\frac{2x + 1}{1 - x}$\nSo, $p^{-1}(x) = \\frac{2x+1}{1-x}$.",
    category: "Algebra",
    topics: ["Functions", "Inverse Functions"]
  },
  {
    id: "est2_2026_jan_8",
    question: "$2 \\sin^2(x) \\cdot \\sec^2(x) + \\tan^2(x) =$",
    options: [
      "$3 \\cot(x)$",
      "$\\frac{1}{2} \\tan(x)$",
      "$3 \\tan^2(x)$",
      "$\\cot^2(x)$",
      "$\\tan^2(x)$"
    ],
    correctAnswer: 2,
    explanation: "Recall the trigonometric identity $\\sec(x) = \\frac{1}{\\cos(x)}$.\nSubstitute this into the expression:\n$2 \\sin^2(x) \\cdot \\left(\\frac{1}{\\cos(x)}\\right)^2 + \\tan^2(x)$\n$= 2 \\frac{\\sin^2(x)}{\\cos^2(x)} + \\tan^2(x)$\nRecall that $\\tan(x) = \\frac{\\sin(x)}{\\cos(x)}$, so $\\tan^2(x) = \\frac{\\sin^2(x)}{\\cos^2(x)}$.\nSubstitute this into the expression:\n$= 2 \\tan^2(x) + \\tan^2(x)$\n$= 3 \\tan^2(x)$",
    category: "Geometry",
    topics: ["Trigonometry", "Trigonometric Identities"]
  },
  {
    id: "est2_2026_jan_9",
    question: "Which of the following statements is/are true for the function $f$ defined by $f(x) = -2|x + 3| + 3$?\n\nI. The graph of $f$ has a vertex at $(-3, 3)$.\nII. The graph of $f$ is a V-shape that opens downward.\nIII. The graph of $f$ passes through $(0, 3)$.",
    options: [
      "I only",
      "II only",
      "I and II only",
      "II and III only",
      "I, II, and III"
    ],
    correctAnswer: 2,
    explanation: "Let's evaluate each statement:\nI. The general form of an absolute value function is $f(x) = a|x - h| + k$, where $(h, k)$ is the vertex. Here, $h = -3$ and $k = 3$, so the vertex is $(-3, 3)$. Statement I is true.\nII. The coefficient $a$ is $-2$. Since $a < 0$, the V-shape opens downward. Statement II is true.\nIII. To check if it passes through $(0, 3)$, evaluate $f(0)$:\n$f(0) = -2|0 + 3| + 3 = -2|3| + 3 = -6 + 3 = -3$.\nThe point is $(0, -3)$, not $(0, 3)$. Statement III is false.\nTherefore, only statements I and II are true.",
    category: "Algebra",
    topics: ["Functions", "Absolute Value Functions", "Graphs of Functions"]
  },
  {
    id: "est2_2026_jan_10",
    question: "Consider a circle $C$ with center $O$ and radius $r = 2.5\\ cm$. Points $M$, $A$, and $B$ lie on $C$ such that $m\\angle AMB = 45^\\circ$, as shown in the adjacent figure. What is the approximate length of the altitude $OH$ drawn from $O$ to $\\overline{AB}$?",
    svg: `<svg viewBox="0 0 200 200" class="w-full h-full max-w-xs mx-auto">
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="2"/>
      <text x="185" y="80" class="text-xs" fill="currentColor">M</text>
      <text x="15" y="80" class="text-xs" fill="currentColor">A</text>
      <text x="150" y="160" class="text-xs" fill="currentColor">C</text>
      <text x="100" y="185" class="text-xs" fill="currentColor">B</text>
      <text x="110" y="105" class="text-xs" fill="currentColor">O</text>
      <text x="50" y="130" class="text-xs" fill="currentColor">H</text>
      <path d="M 25.5 71.7 L 174.5 71.7 L 90 179.3 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M 25.5 71.7 L 100 100 L 90 179.3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4"/>
      <path d="M 100 100 L 57.7 125.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4"/>
      <circle cx="100" cy="100" r="3" fill="currentColor"/>
      <text x="140" y="85" class="text-xs" fill="currentColor">45°</text>
      <text x="70" y="85" class="text-xs" fill="currentColor">2.5 cm</text>
    </svg>`,
    options: [
      "$1.521\\ cm$",
      "$1.611\\ cm$",
      "$1.768\\ cm$",
      "$1.823\\ cm$",
      "$3.295\\ cm$"
    ],
    correctAnswer: 2,
    explanation: "The inscribed angle $\\angle AMB$ intercepts arc $AB$. The measure of the central angle $\\angle AOB$ that intercepts the same arc is twice the measure of the inscribed angle.\n$m\\angle AOB = 2 \\times m\\angle AMB = 2 \\times 45^\\circ = 90^\\circ$.\nSo, $\\triangle AOB$ is a right isosceles triangle with legs $OA = OB = r = 2.5\\ cm$.\nThe altitude $OH$ from the right angle $O$ to the hypotenuse $AB$ divides the right isosceles triangle into two smaller right isosceles triangles.\nIn right isosceles $\\triangle AOB$, the hypotenuse $AB = \\sqrt{2.5^2 + 2.5^2} = 2.5\\sqrt{2}$.\nThe area of $\\triangle AOB$ can be calculated in two ways:\nArea = $\\frac{1}{2} \\times OA \\times OB = \\frac{1}{2} \\times 2.5 \\times 2.5 = 3.125$\nArea = $\\frac{1}{2} \\times AB \\times OH = \\frac{1}{2} \\times 2.5\\sqrt{2} \\times OH$\nEquating the two areas:\n$3.125 = 1.25\\sqrt{2} \\times OH$\n$OH = \\frac{3.125}{1.25\\sqrt{2}} = \\frac{2.5}{\\sqrt{2}} \\approx 1.7677\\ cm$.",
    category: "Geometry",
    topics: ["Circles", "Inscribed Angles", "Right Triangles"]
  }
];
