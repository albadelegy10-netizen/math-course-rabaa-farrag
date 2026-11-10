import { Question } from "../../types";

export const EST2_2026_JAN_PART2: Question[] = [
  {
    id: "est2_2026_jan_11",
    question: "A line $d$ with equation $x - y + 3 = 0$ is tangent to a circle $C$ with center $A(m - 3, 2m)$ and radius $\\sqrt{2}\\ cm$ at $T(0, t)$. Which of the following is the value of $m$?",
    options: [
      "-2.0",
      "1.5",
      "2.0",
      "3.5",
      "4.0"
    ],
    correctAnswer: 2,
    explanation: "The line $d$ has equation $x - y + 3 = 0$, which can be written as $y = x + 3$.\nThe point of tangency is $T(0, t)$. Since $T$ lies on line $d$, substitute $x = 0$ into the equation of $d$ to find $t$:\n$0 - t + 3 = 0 \\Rightarrow t = 3$.\nSo, the point of tangency is $T(0, 3)$.\nThe radius of the circle is $\\sqrt{2}$. The distance from the center $A(m - 3, 2m)$ to the line $x - y + 3 = 0$ is equal to the radius.\nUsing the point-to-line distance formula $d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$:\n$\\sqrt{2} = \\frac{|(m - 3) - (2m) + 3|}{\\sqrt{1^2 + (-1)^2}}$\n$\\sqrt{2} = \\frac{|-m|}{\\sqrt{2}}$\nMultiply both sides by $\\sqrt{2}$:\n$2 = |-m|$\nThis means $m = 2$ or $m = -2$.\nWe can also use the fact that the radius $AT$ is perpendicular to the tangent line $d$. The slope of $d$ is 1, so the slope of $AT$ must be -1.\nSlope of $AT = \\frac{2m - 3}{(m - 3) - 0} = \\frac{2m - 3}{m - 3}$.\nSet the slope to -1:\n$\\frac{2m - 3}{m - 3} = -1$\n$2m - 3 = -(m - 3)$\n$2m - 3 = -m + 3$\n$3m = 6 \\Rightarrow m = 2$.",
    category: "Geometry",
    topics: ["Circles", "Coordinate Geometry", "Tangent Lines"]
  },
  {
    id: "est2_2026_jan_12",
    question: "The graph of function $f$ defined by $f(x) = \\frac{-x+1}{x^2}$ and the straight line $D$ with equation $y = x - 1$ intersect at point $I$. The coordinates of $I$ are:",
    options: [
      "$(1, -1)$",
      "$(1, 0)$",
      "$(1, 1)$",
      "$(-1, -2)$",
      "$(-1, -1)$"
    ],
    correctAnswer: 1,
    explanation: "To find the intersection point, set the two equations equal to each other:\n$\\frac{-x+1}{x^2} = x - 1$\nFactor out a negative sign from the numerator:\n$\\frac{-(x-1)}{x^2} = x - 1$\nIf $x = 1$, both sides are 0, so $(1, 0)$ is a solution.\nIf $x \\neq 1$, we can divide both sides by $(x - 1)$:\n$\\frac{-1}{x^2} = 1$\n$-1 = x^2$\nThis equation has no real solutions because the square of a real number cannot be negative.\nTherefore, the only intersection point is $(1, 0)$.",
    category: "Algebra",
    topics: ["Functions", "Systems of Equations", "Rational Functions"]
  },
  {
    id: "est2_2026_jan_13",
    question: "$C$ is a circle with center $(-2, 3)$ and radius $5$. Line $D$, with equation $3x + 4y - 31 = 0$, is tangent to $C$. The coordinates of the point of tangency are:",
    options: [
      "$(5, 4)$",
      "$(1, 7)$",
      "$(1, 1)$",
      "$(1, -1)$",
      "$(-3, 10)$"
    ],
    correctAnswer: 1,
    explanation: "The line passing through the center of the circle $(-2, 3)$ and the point of tangency is perpendicular to the tangent line $D$.\nThe slope of line $D$ ($3x + 4y - 31 = 0$) is $-\\frac{3}{4}$.\nThe slope of the perpendicular line is the negative reciprocal, which is $\\frac{4}{3}$.\nThe equation of the perpendicular line passing through $(-2, 3)$ is:\n$y - 3 = \\frac{4}{3}(x - (-2))$\n$3(y - 3) = 4(x + 2)$\n$3y - 9 = 4x + 8$\n$4x - 3y + 17 = 0$\nThe point of tangency is the intersection of line $D$ and this perpendicular line. We have a system of equations:\n1) $3x + 4y = 31$\n2) $4x - 3y = -17$\nMultiply (1) by 3 and (2) by 4:\n$9x + 12y = 93$\n$16x - 12y = -68$\nAdd the two equations:\n$25x = 25 \\Rightarrow x = 1$\nSubstitute $x = 1$ into (1):\n$3(1) + 4y = 31 \\Rightarrow 4y = 28 \\Rightarrow y = 7$\nThe point of tangency is $(1, 7)$.",
    category: "Geometry",
    topics: ["Circles", "Coordinate Geometry", "Tangent Lines"]
  },
  {
    id: "est2_2026_jan_14",
    question: "A security system opens a gate using a code of three digits followed by two letters. The digits chosen from 2, 5, 6, 7, 8, and the letters from $A, B, C$, and $D$. If the repetition of digits and letters is not allowed, then the probability that the code includes the digit 6 and the letter $A$ is equal to:",
    options: [
      "$\\frac{1}{10}$",
      "$\\frac{2}{10}$",
      "$\\frac{3}{10}$",
      "$\\frac{4}{10}$",
      "$\\frac{5}{10}$"
    ],
    correctAnswer: 2,
    explanation: "First, find the total number of possible codes.\nThere are 5 digits (2, 5, 6, 7, 8) to choose 3 from without repetition: $P(5, 3) = 5 \\times 4 \\times 3 = 60$ ways.\nThere are 4 letters (A, B, C, D) to choose 2 from without repetition: $P(4, 2) = 4 \\times 3 = 12$ ways.\nTotal possible codes = $60 \\times 12 = 720$.\nNow, find the number of codes that include the digit 6 and the letter A.\nFor the digits, the digit 6 can be in any of the 3 positions (3 ways). The remaining 2 positions must be filled by the remaining 4 digits: $P(4, 2) = 12$ ways. Total digit combinations with a 6 = $3 \\times 12 = 36$.\nFor the letters, the letter A can be in either of the 2 positions (2 ways). The remaining position must be filled by the remaining 3 letters: 3 ways. Total letter combinations with an A = $2 \\times 3 = 6$.\nTotal favorable codes = $36 \\times 6 = 216$.\nThe probability is $\\frac{216}{720} = \\frac{3}{10}$.",
    category: "Data Analysis",
    topics: ["Probability", "Permutations"]
  },
  {
    id: "est2_2026_jan_15",
    question: "Given an equilateral triangle $MNP$ such that $MP = MN = (2x - 5)\\ cm$ and $NP = (x + 2)\\ cm$, the area of $\\Delta MNP$ is:",
    options: [
      "$\\frac{81}{2}\\sqrt{3}\\ cm^2$",
      "$\\frac{81}{4}\\sqrt{3}\\ cm^2$",
      "$\\frac{81}{8}\\sqrt{3}\\ cm^2$",
      "$\\frac{9}{2}\\sqrt{3}\\ cm^2$",
      "$\\frac{9}{4}\\sqrt{3}\\ cm^2$"
    ],
    correctAnswer: 1,
    explanation: "Since $\\Delta MNP$ is an equilateral triangle, all its sides are equal.\nTherefore, $MP = NP$, which means $2x - 5 = x + 2$.\nSolve for $x$:\n$2x - x = 2 + 5 \\Rightarrow x = 7$.\nThe side length of the equilateral triangle is $s = x + 2 = 7 + 2 = 9\\ cm$.\nThe formula for the area of an equilateral triangle with side length $s$ is $Area = \\frac{\\sqrt{3}}{4} s^2$.\nSubstitute $s = 9$:\n$Area = \\frac{\\sqrt{3}}{4} (9)^2 = \\frac{81}{4}\\sqrt{3}\\ cm^2$.",
    category: "Geometry",
    topics: ["Triangles", "Area", "Equilateral Triangles"]
  },
  {
    id: "est2_2026_jan_16",
    question: "Consider the points $M, N, P$, and $Q$ shown in the figure above. The quadrilateral $MNPQ$ is a/an:",
    svg: `<svg viewBox="-20 -20 200 150" class="w-full h-full max-w-md mx-auto">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" stroke-width="1"/>
        </pattern>
      </defs>
      <rect x="-20" y="-20" width="200" height="150" fill="url(#grid)" />
      <path d="M 40 -20 L 40 130" fill="none" stroke="black" stroke-width="1.5"/>
      <path d="M -20 100 L 180 100" fill="none" stroke="black" stroke-width="1.5"/>
      <polygon points="180,100 175,95 175,105" fill="black"/>
      <polygon points="40,-20 35,-15 45,-15" fill="black"/>
      <text x="185" y="110" class="text-xs" fill="currentColor">x</text>
      <text x="25" y="-15" class="text-xs" fill="currentColor">y</text>
      <text x="30" y="115" class="text-xs" fill="currentColor">0</text>
      
      <circle cx="80" cy="20" r="3" fill="currentColor"/>
      <text x="85" y="15" class="text-xs" fill="currentColor">M = (2, 4)</text>
      
      <circle cx="20" cy="40" r="3" fill="currentColor"/>
      <text x="5" y="35" class="text-xs" fill="currentColor">N = (-1, 3)</text>
      
      <circle cx="60" cy="100" r="3" fill="currentColor"/>
      <text x="65" y="95" class="text-xs" fill="currentColor">P = (1, 0)</text>
      
      <circle cx="120" cy="80" r="3" fill="currentColor"/>
      <text x="125" y="75" class="text-xs" fill="currentColor">Q = (4, 1)</text>
    </svg>`,
    options: [
      "Isosceles trapezoid",
      "Parallelogram",
      "Rectangle",
      "Rhombus",
      "Square"
    ],
    correctAnswer: 1,
    explanation: "Let's calculate the lengths of the four sides of the quadrilateral $MNPQ$.\nThe coordinates are $M(2, 4)$, $N(-1, 3)$, $P(1, 0)$, and $Q(4, 1)$.\n$MN = \\sqrt{(-1 - 2)^2 + (3 - 4)^2} = \\sqrt{(-3)^2 + (-1)^2} = \\sqrt{9 + 1} = \\sqrt{10}$\n$NP = \\sqrt{(1 - (-1))^2 + (0 - 3)^2} = \\sqrt{2^2 + (-3)^2} = \\sqrt{4 + 9} = \\sqrt{13}$\n$PQ = \\sqrt{(4 - 1)^2 + (1 - 0)^2} = \\sqrt{3^2 + 1^2} = \\sqrt{9 + 1} = \\sqrt{10}$\n$QM = \\sqrt{(2 - 4)^2 + (4 - 1)^2} = \\sqrt{(-2)^2 + 3^2} = \\sqrt{4 + 9} = \\sqrt{13}$\nSince opposite sides are equal ($MN = PQ$ and $NP = QM$), the quadrilateral is a parallelogram.\nTo check if it's a rectangle, we can check the slopes of adjacent sides to see if they are perpendicular.\nSlope of $MN = \\frac{3 - 4}{-1 - 2} = \\frac{-1}{-3} = \\frac{1}{3}$\nSlope of $NP = \\frac{0 - 3}{1 - (-1)} = \\frac{-3}{2}$\nThe product of the slopes is $(\\frac{1}{3})(-\\frac{3}{2}) = -\\frac{1}{2} \\neq -1$, so the adjacent sides are not perpendicular. Therefore, it is not a rectangle, rhombus, or square.",
    category: "Geometry",
    topics: ["Coordinate Geometry", "Quadrilaterals", "Distance Formula"]
  },
  {
    id: "est2_2026_jan_17",
    question: "Toni allocated a sum of $1,584 for his graduation. He will be distributing this sum on his haircut, photography, shoes, and suit in the ratio of $2 : 5 : 6 : 9$, respectively. How much will he spend on the suit?",
    options: [
      "$144",
      "$360",
      "$432",
      "$520",
      "$648"
    ],
    correctAnswer: 4,
    explanation: "The total ratio parts are $2 + 5 + 6 + 9 = 22$ parts.\nThe total sum is $1,584.\nThe value of one part is $\\frac{1584}{22} = 72$.\nThe ratio for the suit is 9 parts.\nThe amount spent on the suit is $9 \\times 72 = 648$.",
    category: "Data Analysis",
    topics: ["Ratios", "Proportions"]
  },
  {
    id: "est2_2026_jan_18",
    question: "If $f, g$, and $h$ are three functions defined by $f(x) = x^3 - 3$, $g(x) = 4x^2 + 1$, and $h(x) = x$, then $(g \\circ f \\circ h)(x) =$",
    options: [
      "$4x^6 + 24x^3 + 36$",
      "$4x^6 - 24x^3 + 37$",
      "$4x^5 + 24x^3 - 37$",
      "$4x^5 + 18x^3 + 36$",
      "$4x^5 - 18x^3 + 1$"
    ],
    correctAnswer: 1,
    explanation: "The composition of functions $(g \\circ f \\circ h)(x)$ means $g(f(h(x)))$.\nFirst, evaluate $h(x)$: $h(x) = x$.\nNext, substitute $h(x)$ into $f(x)$: $f(h(x)) = f(x) = x^3 - 3$.\nFinally, substitute $f(h(x))$ into $g(x)$:\n$g(f(h(x))) = g(x^3 - 3) = 4(x^3 - 3)^2 + 1$\nExpand the squared term:\n$(x^3 - 3)^2 = (x^3)^2 - 2(x^3)(3) + 3^2 = x^6 - 6x^3 + 9$\nSubstitute this back into the expression for $g$:\n$4(x^6 - 6x^3 + 9) + 1 = 4x^6 - 24x^3 + 36 + 1 = 4x^6 - 24x^3 + 37$.",
    category: "Algebra",
    topics: ["Functions", "Composition of Functions"]
  },
  {
    id: "est2_2026_jan_19",
    question: "A simplified form of the expression $\\frac{20(\\sin(x)\\cdot\\cos(x))}{3} \\times \\frac{\\tan(x)+\\cot(x)}{4}$ is:",
    options: [
      "$\\frac{5}{3}\\sin(x) \\cdot \\cos(x)$",
      "$\\cot(x)$",
      "$2 \\tan(x)$",
      "$\\frac{5}{3}$",
      "$\\frac{20}{3}$"
    ],
    correctAnswer: 3,
    explanation: "First, simplify the term $\\tan(x) + \\cot(x)$:\n$\\tan(x) + \\cot(x) = \\frac{\\sin(x)}{\\cos(x)} + \\frac{\\cos(x)}{\\sin(x)}$\nFind a common denominator:\n$= \\frac{\\sin^2(x) + \\cos^2(x)}{\\sin(x)\\cos(x)}$\nUsing the Pythagorean identity $\\sin^2(x) + \\cos^2(x) = 1$:\n$= \\frac{1}{\\sin(x)\\cos(x)}$\nNow substitute this back into the original expression:\n$\\frac{20\\sin(x)\\cos(x)}{3} \\times \\frac{1}{4\\sin(x)\\cos(x)}$\nThe $\\sin(x)\\cos(x)$ terms cancel out:\n$= \\frac{20}{3} \\times \\frac{1}{4} = \\frac{20}{12}$\nSimplify the fraction by dividing the numerator and denominator by 4:\n$= \\frac{5}{3}$",
    category: "Geometry",
    topics: ["Trigonometry", "Trigonometric Identities"]
  },
  {
    id: "est2_2026_jan_20",
    question: "A spinner is divided into 12 sections labeled $\\$0, \\$1, \\$2, \\$5$, and $\\$10$, as shown in the figure above. If the spinner is spun twice and all sectors have equal probability of landing on the given arrow, what is the probability of obtaining a sum of 10?",
    svg: `<svg viewBox="0 0 200 200" class="w-full h-full max-w-xs mx-auto">
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M 100 100 L 100 10" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 100 100 L 145 22" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 100 100 L 178 55" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 100 100 L 190 100" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 100 100 L 178 145" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 100 100 L 145 178" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 100 100 L 100 190" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 100 100 L 55 178" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 100 100 L 22 145" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 100 100 L 10 100" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 100 100 L 22 55" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 100 100 L 55 22" fill="none" stroke="currentColor" stroke-width="1"/>
      
      <text x="115" y="35" class="text-xs" fill="currentColor">$5</text>
      <text x="145" y="55" class="text-xs" fill="currentColor">$1</text>
      <text x="160" y="85" class="text-xs" fill="currentColor">$10</text>
      <text x="160" y="125" class="text-xs" fill="currentColor">$5</text>
      <text x="140" y="155" class="text-xs" fill="currentColor">$0</text>
      <text x="110" y="175" class="text-xs" fill="currentColor">$5</text>
      <text x="80" y="175" class="text-xs" fill="currentColor">$1</text>
      <text x="50" y="155" class="text-xs" fill="currentColor">$1</text>
      <text x="30" y="125" class="text-xs" fill="currentColor">$10</text>
      <text x="30" y="85" class="text-xs" fill="currentColor">$5</text>
      <text x="50" y="55" class="text-xs" fill="currentColor">$1</text>
      <text x="80" y="35" class="text-xs" fill="currentColor">$2</text>
      
      <polygon points="100,100 80,60 85,55" fill="currentColor"/>
      <path d="M 100 100 L 82 58" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    options: [
      "$\\frac{1}{36}$",
      "$\\frac{2}{36}$",
      "$\\frac{4}{36}$",
      "$\\frac{5}{36}$",
      "$\\frac{7}{36}$"
    ],
    correctAnswer: 3,
    explanation: "First, count the number of sectors for each value. There are 12 sectors in total.\n$0: 1 sector\n$1: 4 sectors\n$2: 1 sector\n$5: 4 sectors\n$10: 2 sectors\nThe probability of landing on each value is:\n$P(\\$0) = \\frac{1}{12}$\n$P(\\$1) = \\frac{4}{12}$\n$P(\\$2) = \\frac{1}{12}$\n$P(\\$5) = \\frac{4}{12}$\n$P(\\$10) = \\frac{2}{12}$\nTo get a sum of 10 from two spins, the possible combinations are:\n1) Spin 1 = $5 and Spin 2 = $5\n2) Spin 1 = $10 and Spin 2 = $0\n3) Spin 1 = $0 and Spin 2 = $10\nCalculate the probability of each combination:\n$P(\\$5 \\text{ and } \\$5) = P(\\$5) \\times P(\\$5) = \\frac{4}{12} \\times \\frac{4}{12} = \\frac{16}{144}$\n$P(\\$10 \\text{ and } \\$0) = P(\\$10) \\times P(\\$0) = \\frac{2}{12} \\times \\frac{1}{12} = \\frac{2}{144}$\n$P(\\$0 \\text{ and } \\$10) = P(\\$0) \\times P(\\$10) = \\frac{1}{12} \\times \\frac{2}{12} = \\frac{2}{144}$\nAdd the probabilities of these mutually exclusive events:\nTotal Probability = $\\frac{16}{144} + \\frac{2}{144} + \\frac{2}{144} = \\frac{20}{144}$\nSimplify the fraction by dividing the numerator and denominator by 4:\n$\\frac{20}{144} = \\frac{5}{36}$.",
    category: "Data Analysis",
    topics: ["Probability", "Compound Events"]
  }
];
