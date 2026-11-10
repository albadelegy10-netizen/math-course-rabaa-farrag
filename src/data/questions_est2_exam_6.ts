import { Question } from "../../types";

export const EST2_EXAM_6_QUESTIONS: Question[] = [
  {
    id: "est2_exam6_q1",
    question: "The sum of four consecutive odd integers is 168. If $k$ is the smallest of these integers, what is the value of $k^2 - 1$?",
    options: [
      "1,440",
      "1,520",
      "1,600",
      "1,680",
      "1,764"
    ],
    correctAnswer: 1,
    explanation: "Let the four consecutive odd integers be $k, k + 2, k + 4,$ and $k + 6$.\nTheir sum is:\n$$k + (k + 2) + (k + 4) + (k + 6) = 4k + 12$$\nWe are given that this sum equals 168:\n$$4k + 12 = 168 \\implies 4k = 156 \\implies k = 39$$\nNow evaluate $k^2 - 1$:\n$$k^2 - 1 = 39^2 - 1 = (39 - 1)(39 + 1) = 38 \\times 40 = 1,520$$",
    category: ""
  },
  {
    id: "est2_exam6_q2",
    question: "If $\\frac{3a - 2b}{5} - \\frac{b}{3} = \\frac{a + 4b}{2} + \\frac{7}{15}$, what is the value of $a$ expressed in terms of $b$?",
    options: [
      "$a = \\frac{82}{3}b + \\frac{14}{3}$",
      "$a = \\frac{76}{3}b + \\frac{14}{3}$",
      "$a = 26b - \\frac{7}{3}$",
      "$a = \\frac{41}{3}b + 7$",
      "$a = -\\frac{82}{3}b - \\frac{14}{3}$"
    ],
    correctAnswer: 0,
    explanation: "Multiply the entire equation by the least common denominator, which is 30:\n$$30 \\left( \\frac{3a - 2b}{5} \\right) - 30 \\left( \\frac{b}{3} \\right) = 30 \\left( \\frac{a + 4b}{2} \\right) + 30 \\left( \\frac{7}{15} \\right)$$\n$$6(3a - 2b) - 10b = 15(a + 4b) + 2(7)$$\nExpand both sides:\n$$18a - 12b - 10b = 15a + 60b + 14$$\n$$18a - 22b = 15a + 60b + 14$$\nSubtract $15a$ from both sides:\n$$3a - 22b = 60b + 14$$\nAdd $22b$ to both sides:\n$$3a = 82b + 14$$\nDivide by 3:\n$$a = \\frac{82}{3}b + \\frac{14}{3}$$",
    category: ""
  },
  {
    id: "est2_exam6_q3",
    question: "Let $h(x) = \\frac{2x^2 - 7}{6x^2 - 7x - 20}$. For which values of $x$ is the function $h(x)$ undefined?",
    options: [
      "$x = -\\frac{5}{2}$ and $x = \\frac{4}{3}$",
      "$x = -\\frac{4}{3}$ and $x = \\frac{5}{2}$",
      "$x = -4$ and $x = 5$",
      "$x = -\\frac{5}{3}$ and $x = 4$",
      "$x = \\pm \\sqrt{\\frac{7}{2}}$"
    ],
    correctAnswer: 1,
    explanation: "A rational function is undefined where its denominator equals zero:\n$$6x^2 - 7x - 20 = 0$$\nFactor the quadratic by finding two numbers that multiply to $6 \\times (-20) = -120$ and add to $-7$. These numbers are $-15$ and $8$:\n$$6x^2 - 15x + 8x - 20 = 0$$\n$$3x(2x - 5) + 4(2x - 5) = 0$$\n$$(3x + 4)(2x - 5) = 0$$\nSetting each factor to zero gives:\n$$3x + 4 = 0 \\implies x = -\\frac{4}{3}$$\n$$2x - 5 = 0 \\implies x = \\frac{5}{2}$$",
    category: ""
  },
  {
    id: "est2_exam6_q4",
    question: "Line $L_1$ has equation $4x - 5y = 12$. Line $L_2$ is perpendicular to $L_1$, and line $L_3$ is parallel to $L_2$. If $L_3$ passes through the point $(-3, 4)$, what is the equation of $L_3$ in standard form?",
    options: [
      "$4x - 5y = -32$",
      "$5x - 4y = -31$",
      "$5x + 4y = 1$",
      "$4x + 5y = 8$",
      "$5x + 4y = -1$"
    ],
    correctAnswer: 2,
    explanation: "First, determine the slope of line $L_1$:\n$$4x - 5y = 12 \\implies 5y = 4x - 12 \\implies y = \\frac{4}{5}x - \\frac{12}{5}$$\nThe slope of $L_1$ is $m_1 = \\frac{4}{5}$.\nSince $L_2$ is perpendicular to $L_1$, its slope is the negative reciprocal:\n$$m_2 = -\\frac{5}{4}$$\nSince $L_3$ is parallel to $L_2$, $m_3 = -\\frac{5}{4}$.\nUsing the point-slope form with $(-3, 4)$:\n$$y - 4 = -\\frac{5}{4}(x - (-3))$$\n$$4(y - 4) = -5(x + 3)$$\n$$4y - 16 = -5x - 15$$\n$$5x + 4y = 1$$",
    category: ""
  },
  {
    id: "est2_exam6_q5",
    question: "In a geometric sequence with all positive terms, the $4^{\\text{th}}$ term is $48$ and the $7^{\\text{th}}$ term is $6$. What is the first term $a_1$ of this sequence?",
    options: [
      "192",
      "256",
      "384",
      "512",
      "768"
    ],
    correctAnswer: 2,
    explanation: "The $n^{\\text{th}}$ term of a geometric sequence is given by $a_n = a_1 r^{n-1}$.\nWe are given:\n$$a_4 = a_1 r^3 = 48$$\n$$a_7 = a_1 r^6 = 6$$\nDivide $a_7$ by $a_4$:\n$$\\frac{a_1 r^6}{a_1 r^3} = \\frac{6}{48} \\implies r^3 = \\frac{1}{8} \\implies r = \\frac{1}{2}$$\nSubstitute $r = \\frac{1}{2}$ back into $a_4$:\n$$a_1 \\left(\\frac{1}{2}\\right)^3 = 48 \\implies a_1 \\left(\\frac{1}{8}\\right) = 48 \\implies a_1 = 48 \\times 8 = 384$$",
    category: ""
  },
  {
    id: "est2_exam6_q6",
    question: "The table below records the daily customer count at a bookstore over eight consecutive days:\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Day</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Customers</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Day 1</td><td class=\"border border-gray-400 px-2 py-1\">14</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Day 2</td><td class=\"border border-gray-400 px-2 py-1\">18</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Day 3</td><td class=\"border border-gray-400 px-2 py-1\">19</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Day 4</td><td class=\"border border-gray-400 px-2 py-1\">$x$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Day 5</td><td class=\"border border-gray-400 px-2 py-1\">25</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Day 6</td><td class=\"border border-gray-400 px-2 py-1\">27</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Day 7</td><td class=\"border border-gray-400 px-2 py-1\">31</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Day 8</td><td class=\"border border-gray-400 px-2 py-1\">34</td></tr>\n  </tbody>\n</table>\n\nIf the mean number of customers for the 8 days is 24, what is the median number of customers?",
    options: [
      "23.5",
      "24.0",
      "24.5",
      "25.0",
      "26.0"
    ],
    correctAnswer: 2,
    explanation: "First, solve for $x$ using the mean formula:\n$$\\frac{14 + 18 + 19 + x + 25 + 27 + 31 + 34}{8} = 24$$\n$$\\frac{168 + x}{8} = 24 \\implies 168 + x = 192 \\implies x = 24$$\nNow arrange all 8 values in ascending order:\n$$14, 18, 19, 24, 25, 27, 31, 34$$\nSince there are an even number of data points ($n = 8$), the median is the average of the $4^{\\text{th}}$ and $5^{\\text{th}}$ numbers:\n$$\\text{Median} = \\frac{24 + 25}{2} = 24.5$$",
    category: ""
  },
  {
    id: "est2_exam6_q7",
    question: "Which of the following functions represents the inverse $f^{-1}(x)$ of $f(x) = \\frac{3x - 4}{2x + 5}$ for $x \\ne -\\frac{5}{2}$?",
    options: [
      "$f^{-1}(x) = \\frac{2x + 5}{3x - 4}$",
      "$f^{-1}(x) = \\frac{5x + 4}{3 - 2x}$",
      "$f^{-1}(x) = \\frac{5x - 4}{2x + 3}$",
      "$f^{-1}(x) = \\frac{3x + 4}{5 - 2x}$",
      "$f^{-1}(x) = \\frac{4 - 5x}{2x - 3}$"
    ],
    correctAnswer: 1,
    explanation: "Set $y = \\frac{3x - 4}{2x + 5}$ and interchange $x$ and $y$:\n$$x = \\frac{3y - 4}{2y + 5}$$\nMultiply both sides by $(2y + 5)$:\n$$x(2y + 5) = 3y - 4$$\n$$2xy + 5x = 3y - 4$$\nCollect all $y$ terms on one side:\n$$2xy - 3y = -5x - 4$$\nFactor out $y$:\n$$y(2x - 3) = -(5x + 4)$$\nDivide by $(2x - 3)$:\n$$y = \\frac{-(5x + 4)}{2x - 3} = \\frac{5x + 4}{3 - 2x}$$\nThus, $f^{-1}(x) = \\frac{5x + 4}{3 - 2x}$.",
    category: ""
  },
  {
    id: "est2_exam6_q8",
    question: "Which of the following expressions is identically equal to $(\\sin(x) + \\cos(x))^2 + (\\sin(x) - \\cos(x))^2 + 3\\tan(x)\\cot(x)$ for all $x$ where the functions are defined?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    correctAnswer: 3,
    explanation: "Expand the squared terms:\n$$(\\sin(x) + \\cos(x))^2 = \\sin^2(x) + 2\\sin(x)\\cos(x) + \\cos^2(x)$$\n$$(\\sin(x) - \\cos(x))^2 = \\sin^2(x) - 2\\sin(x)\\cos(x) + \\cos^2(x)$$\nAdd them together:\n$$\\sin^2(x) + \\cos^2(x) + \\sin^2(x) + \\cos^2(x) = 1 + 1 = 2$$\nNotice that $\\tan(x)\\cot(x) = \\tan(x) \\cdot \\frac{1}{\\tan(x)} = 1$.\nTherefore:\n$$2 + 3(1) = 5$$",
    category: ""
  },
  {
    id: "est2_exam6_q9",
    question: "The graph of the function $f(x) = -3|x - 2| + 6$ is shown below:\n\n<svg viewBox=\"-40 -40 320 260\" class=\"w-full max-w-sm mx-auto my-4 bg-white border border-gray-200 rounded-xl\">\n  <!-- Grid -->\n  <defs>\n    <pattern id=\"grid_q9\" width=\"25\" height=\"25\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 25 0 L 0 0 0 25\" fill=\"none\" stroke=\"#f3f4f6\" stroke-width=\"1\"/>\n    </pattern>\n  </defs>\n  <rect x=\"-40\" y=\"-40\" width=\"320\" height=\"260\" fill=\"url(#grid_q9)\"/>\n  <!-- Axes -->\n  <line x1=\"-30\" y1=\"160\" x2=\"260\" y2=\"160\" stroke=\"#000000\" stroke-width=\"1.5\"/>\n  <line x1=\"80\" y1=\"210\" x2=\"80\" y2=\"-20\" stroke=\"#000000\" stroke-width=\"1.5\"/>\n  <!-- Arrowheads -->\n  <polygon points=\"260,160 252,156 252,164\" fill=\"#000000\"/>\n  <polygon points=\"80,-20 76,-12 84,-12\" fill=\"#000000\"/>\n  <!-- Labels -->\n  <text x=\"265\" y=\"164\" font-size=\"13\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">x</text>\n  <text x=\"84\" y=\"-22\" font-size=\"13\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">y</text>\n  <text x=\"68\" y=\"175\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">O</text>\n  <!-- Ticks on x-axis: each unit = 25px, origin at x=80 -->\n  <line x1=\"105\" y1=\"157\" x2=\"105\" y2=\"163\" stroke=\"#000000\" stroke-width=\"1\"/>\n  <text x=\"102\" y=\"175\" font-size=\"10\" fill=\"#000000\">1</text>\n  <line x1=\"130\" y1=\"157\" x2=\"130\" y2=\"163\" stroke=\"#000000\" stroke-width=\"1\"/>\n  <text x=\"127\" y=\"175\" font-size=\"10\" fill=\"#000000\">2</text>\n  <line x1=\"155\" y1=\"157\" x2=\"155\" y2=\"163\" stroke=\"#000000\" stroke-width=\"1\"/>\n  <text x=\"152\" y=\"175\" font-size=\"10\" fill=\"#000000\">3</text>\n  <line x1=\"180\" y1=\"157\" x2=\"180\" y2=\"163\" stroke=\"#000000\" stroke-width=\"1\"/>\n  <text x=\"177\" y=\"175\" font-size=\"10\" fill=\"#000000\">4</text>\n  <!-- Function graph: vertex at (2,6) -> x=130, y=160 - 6*20 = 40 -->\n  <!-- x=0 -> (0,0), x=4 -> (4,0) -->\n  <line x1=\"80\" y1=\"160\" x2=\"130\" y2=\"40\" stroke=\"#000000\" stroke-width=\"2\"/>\n  <line x1=\"130\" y1=\"40\" x2=\"180\" y2=\"160\" stroke=\"#000000\" stroke-width=\"2\"/>\n  <circle cx=\"130\" cy=\"40\" r=\"3.5\" fill=\"#000000\"/>\n  <text x=\"135\" y=\"38\" font-size=\"11\" font-weight=\"bold\" fill=\"#000000\">(2, 6)</text>\n</svg>\n\nWhat is the area of the region bounded by the graph of $f(x)$ and the $x$-axis?",
    options: [
      "6",
      "8",
      "12",
      "16",
      "24"
    ],
    correctAnswer: 2,
    explanation: "The region bounded by the graph and the $x$-axis is a triangle.\nThe vertex of the triangle is at $(2, 6)$, which gives a height of $h = 6$.\nTo find the base, determine the $x$-intercepts where $f(x) = 0$:\n$$-3|x - 2| + 6 = 0 \\implies 3|x - 2| = 6 \\implies |x - 2| = 2$$\nThis gives:\n$$x - 2 = 2 \\implies x = 4$$\n$$x - 2 = -2 \\implies x = 0$$\nThe base of the triangle lies along the $x$-axis from $x = 0$ to $x = 4$, with length:\n$$b = 4 - 0 = 4$$\nThe area of the triangle is:\n$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 4 \\times 6 = 12$$",
    category: ""
  },
  {
    id: "est2_exam6_q10",
    question: "In circle $O$, the radius is $10\\text{ cm}$. Points $A, B,$ and $C$ lie on circle $O$ such that the inscribed angle $\\angle ACB = 30^\\circ$. What is the length of chord $AB$?",
    options: [
      "$5\\text{ cm}$",
      "$5\\sqrt{3}\\text{ cm}$",
      "$10\\text{ cm}$",
      "$10\\sqrt{2}\\text{ cm}$",
      "$10\\sqrt{3}\\text{ cm}$"
    ],
    correctAnswer: 2,
    explanation: "An inscribed angle subtends an arc whose measure is twice the angle:\n$$\\text{Arc } AB = 2 \\times 30^\\circ = 60^\\circ$$\nThe central angle $\\angle AOB$ that subtends the same arc has measure $60^\\circ$.\nIn $\\triangle AOB$, radii $OA$ and $OB$ are equal ($OA = OB = 10\\text{ cm}$).\nSince $\\triangle AOB$ is isosceles with a vertex angle of $60^\\circ$, the base angles are:\n$$\\frac{180^\\circ - 60^\\circ}{2} = 60^\\circ$$\nTherefore, $\\triangle AOB$ is an equilateral triangle, which means chord $AB = OA = 10\\text{ cm}$.",
    category: ""
  },
  {
    id: "est2_exam6_q11",
    question: "The line $3x - 4y + 24 = 0$ is tangent to a circle centered at $C(k, 1)$ with radius $5$. If $k > 0$, what is the value of $k$?",
    options: [
      "$\\frac{4}{3}$",
      "$\\frac{5}{3}$",
      "2",
      "$\\frac{7}{3}$",
      "3"
    ],
    correctAnswer: 1,
    explanation: "The perpendicular distance from the center $(k, 1)$ to the tangent line $3x - 4y + 24 = 0$ must equal the radius $r = 5$.\nUsing the distance formula from a point to a line:\n$$d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$$\n$$5 = \\frac{|3(k) - 4(1) + 24|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|3k + 20|}{5}$$\nMultiply both sides by 5:\n$$|3k + 20| = 25$$\nSince $k > 0$, $3k + 20$ must be positive:\n$$3k + 20 = 25 \\implies 3k = 5 \\implies k = \\frac{5}{3}$$",
    category: ""
  },
  {
    id: "est2_exam6_q12",
    question: "The rational function $f(x) = \\frac{4(x - 2)}{x^2}$ intersects the line $y = x - 2$ at point $P(a, b)$. If $a \\ne 2$, what are the coordinates of $P$?",
    options: [
      "$(-2, -4)$",
      "$(-2, 0)$",
      "$(1, -1)$",
      "$(-1, -3)$",
      "$(4, 2)$"
    ],
    correctAnswer: 0,
    explanation: "Set the two equations equal to find their intersection points:\n$$\\frac{4(x - 2)}{x^2} = x - 2$$\nSince $a \\ne 2$, we know $x - 2 \\ne 0$. Divide both sides by $(x - 2)$:\n$$\\frac{4}{x^2} = 1 \\implies x^2 = 4 \\implies x = \\pm 2$$\nSince $x \\ne 2$, we have $x = -2$.\nSubstitute $x = -2$ into the linear equation:\n$$y = -2 - 2 = -4$$\nThus, the intersection point $P$ is $(-2, -4)$.",
    category: ""
  },
  {
    id: "est2_exam6_q13",
    question: "The line $3x - 4y + 25 = 0$ is tangent to the circle $x^2 + y^2 = 25$. What are the coordinates of the point of tangency?",
    options: [
      "$(3, 4)$",
      "$(-3, 4)$",
      "$(4, -3)$",
      "$(-4, 3)$",
      "$(3, -4)$"
    ],
    correctAnswer: 1,
    explanation: "The center of the circle is the origin $(0, 0)$.\nThe tangent line $3x - 4y + 25 = 0$ has slope $m_1 = \\frac{3}{4}$.\nThe radius drawn to the point of tangency is perpendicular to the tangent line, so its slope is:\n$$m_{\\text{radius}} = -\\frac{4}{3}$$\nSince this normal line passes through $(0, 0)$, its equation is $y = -\\frac{4}{3}x$.\nSubstitute $y = -\\frac{4}{3}x$ into the tangent line equation:\n$$3x - 4\\left(-\\frac{4}{3}x\\right) + 25 = 0$$\n$$3x + \\frac{16}{3}x + 25 = 0$$\n$$\\frac{25}{3}x = -25 \\implies x = -3$$\nSubstitute $x = -3$ to find $y$:\n$$y = -\\frac{4}{3}(-3) = 4$$\nThe point of tangency is $(-3, 4)$.\nCheck: $(-3)^2 + 4^2 = 9 + 16 = 25$, which lies on the circle.",
    category: ""
  },
  {
    id: "est2_exam6_q14",
    question: "A digital security code consists of three distinct digits chosen from $\\{1, 3, 5, 7, 9\\}$ followed by two distinct letters chosen from $\\{M, A, T, H\\}$. What is the probability that a randomly generated valid code begins with the digit 7 and ends with the letter M?",
    options: [
      "$\\frac{1}{60}$",
      "$\\frac{1}{30}$",
      "$\\frac{1}{20}$",
      "$\\frac{1}{12}$",
      "$\\frac{1}{10}$"
    ],
    correctAnswer: 2,
    explanation: "Total number of possible codes:\n- Choose and arrange 3 digits from 5 without repetition: $P(5, 3) = 5 \\times 4 \\times 3 = 60$.\n- Choose and arrange 2 letters from 4 without repetition: $P(4, 2) = 4 \\times 3 = 12$.\n$$\\text{Total Codes} = 60 \\times 12 = 720$$\nFavorable codes:\n- First digit must be 7 (1 option). The other 2 digits are chosen from the remaining 4 digits: $4 \\times 3 = 12$ ways.\n- Last letter must be M (1 option). The first letter is chosen from the remaining 3 letters: $3$ ways.\n$$\\text{Favorable Codes} = 12 \\times 3 = 36$$\nThe probability is:\n$$P = \\frac{36}{720} = \\frac{1}{20}$$",
    category: ""
  },
  {
    id: "est2_exam6_q15",
    question: "In an equilateral triangle $\\triangle PQR$, the lengths of the sides are given by $PQ = 3x - 7$, $QR = x + 9$, and $PR = 2x + 1$. What is the area of $\\triangle PQR$?",
    options: [
      "$\\frac{289}{4}\\sqrt{3}$",
      "$\\frac{289}{2}\\sqrt{3}$",
      "$289\\sqrt{3}$",
      "$\\frac{169}{4}\\sqrt{3}$",
      "$\\frac{81}{4}\\sqrt{3}$"
    ],
    correctAnswer: 0,
    explanation: "Since the triangle is equilateral, all sides are equal in length:\n$$3x - 7 = x + 9 \\implies 2x = 16 \\implies x = 8$$\nVerify with the third side:\n$$PR = 2(8) + 1 = 17$$\n$$PQ = 3(8) - 7 = 17$$\n$$QR = 8 + 9 = 17$$\nThe side length is $s = 17$.\nThe area of an equilateral triangle with side $s$ is:\n$$\\text{Area} = \\frac{\\sqrt{3}}{4} s^2 = \\frac{\\sqrt{3}}{4} (17)^2 = \\frac{289}{4}\\sqrt{3}$$",
    category: ""
  },
  {
    id: "est2_exam6_q16",
    question: "Consider the quadrilateral $ABCD$ with vertices $A(-2, 1)$, $B(1, 5)$, $C(5, 2)$, and $D(2, -2)$ shown on the coordinate plane below:\n\n<svg viewBox=\"-40 -40 240 240\" class=\"w-full max-w-sm mx-auto my-4 bg-white border border-gray-200 rounded-xl\">\n  <defs>\n    <pattern id=\"grid_q16\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"#f3f4f6\" stroke-width=\"1\"/>\n    </pattern>\n  </defs>\n  <rect x=\"-40\" y=\"-40\" width=\"240\" height=\"240\" fill=\"url(#grid_q16)\"/>\n  <!-- Axes: origin at (60, 100) -->\n  <line x1=\"-30\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"#000000\" stroke-width=\"1.5\"/>\n  <line x1=\"60\" y1=\"190\" x2=\"60\" y2=\"-30\" stroke=\"#000000\" stroke-width=\"1.5\"/>\n  <polygon points=\"190,100 182,96 182,104\" fill=\"#000000\"/>\n  <polygon points=\"60,-30 56,-22 64,-22\" fill=\"#000000\"/>\n  <text x=\"194\" y=\"104\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">x</text>\n  <text x=\"64\" y=\"-32\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">y</text>\n  <text x=\"48\" y=\"114\" font-size=\"11\" font-style=\"italic\" font-family=\"serif\" fill=\"#000000\">O</text>\n  <!-- Polygon ABCD -->\n  <!-- A(-2, 1) -> (60 - 40, 100 - 20) = (20, 80) -->\n  <!-- B(1, 5) -> (60 + 20, 100 - 100) = (80, 0) -->\n  <!-- C(5, 2) -> (60 + 100, 100 - 40) = (160, 60) -->\n  <!-- D(2, -2) -> (60 + 40, 100 + 40) = (100, 140) -->\n  <polygon points=\"20,80 80,0 160,60 100,140\" fill=\"#f3e8ff\" stroke=\"#000000\" stroke-width=\"2\"/>\n  <circle cx=\"20\" cy=\"80\" r=\"3.5\" fill=\"#000000\"/>\n  <text x=\"6\" y=\"82\" font-size=\"11\" font-weight=\"bold\" fill=\"#000000\">A</text>\n  <circle cx=\"80\" cy=\"0\" r=\"3.5\" fill=\"#000000\"/>\n  <text x=\"82\" y=\"-5\" font-size=\"11\" font-weight=\"bold\" fill=\"#000000\">B</text>\n  <circle cx=\"160\" cy=\"60\" r=\"3.5\" fill=\"#000000\"/>\n  <text x=\"165\" y=\"62\" font-size=\"11\" font-weight=\"bold\" fill=\"#000000\">C</text>\n  <circle cx=\"100\" cy=\"140\" r=\"3.5\" fill=\"#000000\"/>\n  <text x=\"104\" y=\"152\" font-size=\"11\" font-weight=\"bold\" fill=\"#000000\">D</text>\n</svg>\n\nWhich of the following best classifies the quadrilateral $ABCD$?",
    options: [
      "Trapezoid",
      "Parallelogram (not rectangle or rhombus)",
      "Rhombus (not square)",
      "Rectangle (not square)",
      "Square"
    ],
    correctAnswer: 4,
    explanation: "Calculate the lengths of all four sides using the distance formula:\n$$AB = \\sqrt{(1 - (-2))^2 + (5 - 1)^2} = \\sqrt{3^2 + 4^2} = 5$$\n$$BC = \\sqrt{(5 - 1)^2 + (2 - 5)^2} = \\sqrt{4^2 + (-3)^2} = 5$$\n$$CD = \\sqrt{(2 - 5)^2 + (-2 - 2)^2} = \\sqrt{(-3)^2 + (-4)^2} = 5$$\n$$DA = \\sqrt{(-2 - 2)^2 + (1 - (-2))^2} = \\sqrt{(-4)^2 + 3^2} = 5$$\nAll four sides are equal to 5, so $ABCD$ is a rhombus.\nNow check the slopes of adjacent sides $AB$ and $BC$:\n$$\\text{Slope of } AB = \\frac{5 - 1}{1 - (-2)} = \\frac{4}{3}$$\n$$\\text{Slope of } BC = \\frac{2 - 5}{5 - 1} = \\frac{-3}{4}$$\nThe product of the slopes is $\\frac{4}{3} \\times \\left(-\\frac{3}{4}\\right) = -1$, meaning adjacent sides are perpendicular.\nA rhombus with perpendicular adjacent sides (right angles) is a square.",
    category: ""
  },
  {
    id: "est2_exam6_q17",
    question: "An investment bonus of $\\$4,500$ is shared among four project team members—Alex, Brian, Chloe, and David—in the ratio $3 : 4 : 5 : 6$, respectively. How much more money does David receive than Alex?",
    options: [
      "$\\$600$",
      "$\\$750$",
      "$\\$900$",
      "$\\$1,050$",
      "$\\$1,200$"
    ],
    correctAnswer: 1,
    explanation: "Total parts in the ratio:\n$$3 + 4 + 5 + 6 = 18 \\text{ parts}$$\nValue of each part:\n$$\\frac{4500}{18} = \\$250$$\nDavid receives 6 parts and Alex receives 3 parts.\nThe difference in their shares is:\n$$(6 - 3) \\times 250 = 3 \\times 250 = \\$750$$",
    category: ""
  },
  {
    id: "est2_exam6_q18",
    question: "If $f(x) = 2x^2 - 5$, $g(x) = 3x + 1$, and $h(x) = x - 2$, what is the value of $(f \\circ g \\circ h)(3)$?",
    options: [
      "15",
      "23",
      "27",
      "31",
      "37"
    ],
    correctAnswer: 2,
    explanation: "Evaluate the composite function from inside out:\n1. First evaluate $h(3)$:\n$$h(3) = 3 - 2 = 1$$\n2. Next evaluate $g(h(3)) = g(1)$:\n$$g(1) = 3(1) + 1 = 4$$\n3. Finally evaluate $f(g(h(3))) = f(4)$:\n$$f(4) = 2(4)^2 - 5 = 2(16) - 5 = 32 - 5 = 27$$",
    category: ""
  },
  {
    id: "est2_exam6_q19",
    question: "Which of the following is equivalent to the expression $\\frac{18\\sin(x)\\cos(x)}{5} \\times \\frac{\\tan^2(x) - \\sec^2(x)}{\\cot^2(x) - \\csc^2(x)}$ for all permissible values of $x$?",
    options: [
      "$\\frac{18}{5}\\sin(x)\\cos(x)$",
      "$-\\frac{18}{5}\\sin(x)\\cos(x)$",
      "$\\frac{9}{5}$",
      "$\\frac{18}{5}\\tan(x)$",
      "$\\frac{9}{5}\\sin(2x)$"
    ],
    correctAnswer: 0,
    explanation: "Recall the fundamental Pythagorean identities:\n$$1 + \\tan^2(x) = \\sec^2(x) \\implies \\tan^2(x) - \\sec^2(x) = -1$$\n$$1 + \\cot^2(x) = \\csc^2(x) \\implies \\cot^2(x) - \\csc^2(x) = -1$$\nSubstitute these into the fraction:\n$$\\frac{\\tan^2(x) - \\sec^2(x)}{\\cot^2(x) - \\csc^2(x)} = \\frac{-1}{-1} = 1$$\nTherefore, the whole expression simplifies to:\n$$\\frac{18\\sin(x)\\cos(x)}{5} \\times 1 = \\frac{18}{5}\\sin(x)\\cos(x)$$",
    category: ""
  },
  {
    id: "est2_exam6_q20",
    question: "A fair spinner has eight equal sectors labeled with the numbers $1, 2, 3, 4, 5, 6, 7,$ and $8$. If the spinner is spun twice, what is the probability that the product of the two landed numbers is a multiple of 4?",
    options: [
      "$\\frac{3}{8}$",
      "$\\frac{7}{16}$",
      "$\\frac{1}{2}$",
      "$\\frac{9}{16}$",
      "$\\frac{5}{8}$"
    ],
    correctAnswer: 2,
    explanation: "Total possible outcomes: $8 \\times 8 = 64$.\nLet's count the outcomes whose product is NOT divisible by 4:\n1. Both numbers are odd: There are 4 odd numbers $\\{1, 3, 5, 7\\}$.\n$$4 \\times 4 = 16 \\text{ outcomes}$$\n2. One number is odd and the other number has exactly one factor of 2 (i.e., $\\{2, 6\\}$):\n- First odd, second $\\in \\{2, 6\\}$: $4 \\times 2 = 8$ outcomes.\n- First $\\in \\{2, 6\\}$, second odd: $2 \\times 4 = 8$ outcomes.\nNote: If both numbers are in $\\{2, 6\\}$, their product is $4, 12,$ or $36$, which are all divisible by 4.\nTotal outcomes NOT divisible by 4:\n$$16 + 8 + 8 = 32$$\nTotal outcomes divisible by 4:\n$$64 - 32 = 32$$\nThe probability is:\n$$\\frac{32}{64} = \\frac{1}{2}$$",
    category: ""
  },
  {
    id: "est2_exam6_q21",
    question: "Which of the following intervals represents the complete set of solutions to the inequality $|5 - 3x| \\le 2x + 5$?",
    options: [
      "$[0, 10]$",
      "$[-10, 0]$",
      "$(-\\infty, 10]$",
      "$[0, \\infty)$",
      "$[2, 5]$"
    ],
    correctAnswer: 0,
    explanation: "The inequality $|A| \\le B$ is equivalent to the compound inequality $-B \\le A \\le B$ (with the condition $B \\ge 0$):\n$$-(2x + 5) \\le 5 - 3x \\le 2x + 5$$\nSplit into two separate inequalities:\n1. Left inequality:\n$$-2x - 5 \\le 5 - 3x \\implies x \\le 10$$\n2. Right inequality:\n$$5 - 3x \\le 2x + 5 \\implies -5x \\le 0 \\implies x \\ge 0$$\nCombining both restrictions gives $0 \\le x \\le 10$, which is the closed interval $[0, 10]$.",
    category: ""
  },
  {
    id: "est2_exam6_q22",
    question: "In right triangle $\\triangle ABC$ with the right angle at $B$, the lengths of the sides are $AB = 2x - 1$, $BC = 2x$, and hypotenuse $AC = 2x + 1$. What is the perimeter of $\\triangle ABC$?",
    options: [
      "10",
      "12",
      "14",
      "16",
      "18"
    ],
    correctAnswer: 1,
    explanation: "Apply the Pythagorean theorem:\n$$(2x - 1)^2 + (2x)^2 = (2x + 1)^2$$\nExpand both sides:\n$$(4x^2 - 4x + 1) + 4x^2 = 4x^2 + 4x + 1$$\n$$8x^2 - 4x + 1 = 4x^2 + 4x + 1$$\nSubtract $4x^2 + 4x + 1$ from both sides:\n$$4x^2 - 8x = 0 \\implies 4x(x - 2) = 0$$\nSince side lengths must be positive, $x = 2$.\nThe lengths of the sides are:\n$$AB = 2(2) - 1 = 3$$\n$$BC = 2(2) = 4$$\n$$AC = 2(2) + 1 = 5$$\nThe perimeter is $3 + 4 + 5 = 12$.",
    category: ""
  },
  {
    id: "est2_exam6_q23",
    question: "Two concentric circles have radii $R$ and $r$ with $R > r$. A chord of the larger circle of length $16\\text{ cm}$ is tangent to the smaller circle, as illustrated below:\n\n<svg viewBox=\"0 0 200 200\" class=\"w-full max-w-xs mx-auto my-4 bg-white border border-gray-200 rounded-xl\">\n  <!-- Outer circle -->\n  <circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"#e5e7eb\" stroke=\"#000000\" stroke-width=\"1.5\"/>\n  <!-- Inner circle -->\n  <circle cx=\"100\" cy=\"100\" r=\"45\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1.5\"/>\n  <!-- Center -->\n  <circle cx=\"100\" cy=\"100\" r=\"2.5\" fill=\"#000000\"/>\n  <text x=\"104\" y=\"108\" font-size=\"11\" font-style=\"italic\" fill=\"#000000\">O</text>\n  <!-- Tangent chord: horizontal line tangent to top of inner circle at (100, 55) -->\n  <!-- Half-chord length = sqrt(80^2 - 45^2) approx 66 -> chord from x=34 to x=166 at y=55 -->\n  <line x1=\"34\" y1=\"55\" x2=\"166\" y2=\"55\" stroke=\"#000000\" stroke-width=\"2\"/>\n  <!-- Radius to tangent point -->\n  <line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"55\" stroke=\"#000000\" stroke-width=\"1\" stroke-dasharray=\"3,3\"/>\n  <!-- Radius to chord endpoint -->\n  <line x1=\"100\" y1=\"100\" x2=\"166\" y2=\"55\" stroke=\"#000000\" stroke-width=\"1\" stroke-dasharray=\"3,3\"/>\n  <!-- Right angle mark -->\n  <rect x=\"100\" y=\"55\" width=\"6\" height=\"6\" fill=\"none\" stroke=\"#000000\" stroke-width=\"1\"/>\n  <text x=\"90\" y=\"45\" font-size=\"11\" font-weight=\"bold\" fill=\"#000000\">16 cm</text>\n</svg>\n\nWhat is the area of the shaded ring (annulus) between the two circles?",
    options: [
      "$32\\pi\\text{ cm}^2$",
      "$48\\pi\\text{ cm}^2$",
      "$64\\pi\\text{ cm}^2$",
      "$128\\pi\\text{ cm}^2$",
      "$256\\pi\\text{ cm}^2$"
    ],
    correctAnswer: 2,
    explanation: "The radius from center $O$ to the point of tangency on the chord has length $r$ and is perpendicular to the chord.\nIt bisects the chord into two segments of length $8\\text{ cm}$.\nConnecting center $O$ to one endpoint of the chord gives a radius of the larger circle of length $R$.\nBy the Pythagorean theorem in this right triangle:\n$$r^2 + 8^2 = R^2 \\implies R^2 - r^2 = 64$$\nThe area of the shaded annulus is:\n$$\\text{Area} = \\pi R^2 - \\pi r^2 = \\pi (R^2 - r^2) = 64\\pi\\text{ cm}^2$$",
    category: ""
  },
  {
    id: "est2_exam6_q24",
    question: "A chemist prepares $80\\text{ mL}$ of a $25\\%$ saline solution by mixing a $10\\%$ saline solution with a $50\\%$ saline solution. How many milliliters of the $50\\%$ saline solution must be used?",
    options: [
      "$20\\text{ mL}$",
      "$25\\text{ mL}$",
      "$30\\text{ mL}$",
      "$35\\text{ mL}$",
      "$40\\text{ mL}$"
    ],
    correctAnswer: 2,
    explanation: "Let $x$ be the volume of the $10\\%$ solution and $y$ be the volume of the $50\\%$ solution.\nWe have the system:\n$$x + y = 80$$\n$$0.10x + 0.50y = 0.25(80)$$\nSimplify the second equation:\n$$0.10x + 0.50y = 20$$\nSubstitute $x = 80 - y$:\n$$0.10(80 - y) + 0.50y = 20$$\n$$8 - 0.10y + 0.50y = 20$$\n$$8 + 0.40y = 20 \\implies 0.40y = 12 \\implies y = \\frac{12}{0.40} = 30\\text{ mL}$$",
    category: ""
  },
  {
    id: "est2_exam6_q25",
    question: "The graph of the rational function $f(x) = \\frac{x^2 - 1}{x^2 + bx + c}$ has vertical asymptotes at $x = -3$ and $x = 2$, and a horizontal asymptote at $y = 1$. What is the value of $b + c$?",
    options: [
      "$-7$",
      "$-5$",
      "$-1$",
      "1",
      "5"
    ],
    correctAnswer: 1,
    explanation: "Vertical asymptotes occur at the zeros of the denominator (since the numerator $x^2 - 1$ has zeros at $x = \\pm 1$, which do not cancel with $-3$ or $2$):\n$$x^2 + bx + c = (x + 3)(x - 2)$$\nExpand the right side:\n$$(x + 3)(x - 2) = x^2 + x - 6$$\nComparing coefficients:\n$$b = 1, \\quad c = -6$$\nThus:\n$$b + c = 1 + (-6) = -5$$",
    category: ""
  },
  {
    id: "est2_exam6_q26",
    question: "A large water reservoir is drained at a constant rate. After 2 hours of draining, the reservoir contains 450 liters. After 6 hours of draining, it contains 250 liters. After how many total hours from the start will the reservoir be completely empty?",
    options: [
      "9 hours",
      "10 hours",
      "11 hours",
      "12 hours",
      "14 hours"
    ],
    correctAnswer: 2,
    explanation: "Find the rate of draining (slope $m$):\n$$m = \\frac{250 - 450}{6 - 2} = \\frac{-200}{4} = -50\\text{ L/hr}$$\nThe reservoir drains 50 liters every hour.\nFind the initial volume $V_0$ at $t = 0$:\n$$V(t) = V_0 - 50t$$\n$$450 = V_0 - 50(2) \\implies V_0 = 450 + 100 = 550\\text{ liters}$$\nThe reservoir is empty when $V(t) = 0$:\n$$550 - 50t = 0 \\implies 50t = 550 \\implies t = 11\\text{ hours}$$",
    category: ""
  },
  {
    id: "est2_exam6_q27",
    question: "Which of the following points $(x, y)$ satisfies the system of inequalities?\n$$\\begin{cases} 3x - 2y \\le 6 \\\\ y > -\\frac{1}{2}x + 3 \\end{cases}$$",
    options: [
      "$(4, 0)$",
      "$(2, 4)$",
      "$(0, 2)$",
      "$(6, 2)$",
      "$(1, 1)$"
    ],
    correctAnswer: 1,
    explanation: "Test the point $(2, 4)$:\n1. First inequality:\n$$3(2) - 2(4) = 6 - 8 = -2 \\le 6 \\quad (\\text{True})$$\n2. Second inequality:\n$$-\\frac{1}{2}(2) + 3 = -1 + 3 = 2$$\n$$4 > 2 \\quad (\\text{True})$$\nBoth inequalities are satisfied, so $(2, 4)$ is a solution.\nTesting $(4, 0)$: $0 > -\\frac{1}{2}(4) + 3 = 1$ is False.\nTesting $(0, 2)$: $2 > 3$ is False.\nTesting $(6, 2)$: $3(6) - 2(2) = 14 \\le 6$ is False.\nTesting $(1, 1)$: $1 > 2.5$ is False.",
    category: ""
  },
  {
    id: "est2_exam6_q28",
    question: "Five student quiz scores are recorded in the table below in increasing order, with lowest score $a$ and highest score $b$:\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Student</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Score</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">1</td><td class=\"border border-gray-400 px-2 py-1\">$a$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">2</td><td class=\"border border-gray-400 px-2 py-1\">72</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">3</td><td class=\"border border-gray-400 px-2 py-1\">85</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">4</td><td class=\"border border-gray-400 px-2 py-1\">91</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">5</td><td class=\"border border-gray-400 px-2 py-1\">$b$</td></tr>\n  </tbody>\n</table>\n\nIf the range of the scores is 26 and the mean of the scores is 84, what is the value of $a \\times b$?",
    options: [
      "6,840",
      "7,052",
      "7,227",
      "7,410",
      "7,624"
    ],
    correctAnswer: 2,
    explanation: "The range is $b - a = 26 \\implies b = a + 26$.\nThe sum of the 5 scores is:\n$$a + 72 + 85 + 91 + b = a + 248 + (a + 26) = 2a + 274$$\nThe mean is 84:\n$$\\frac{2a + 274}{5} = 84 \\implies 2a + 274 = 420$$\n$$2a = 146 \\implies a = 73$$\nNow find $b$:\n$$b = 73 + 26 = 99$$\nCalculate $a \\times b$:\n$$a \\times b = 73 \\times 99 = 73 \\times (100 - 1) = 7,300 - 73 = 7,227$$",
    category: ""
  },
  {
    id: "est2_exam6_q29",
    question: "In right triangle $\\triangle ABC$, the right angle is at $C$, with legs $AC = 9\\text{ cm}$ and $BC = 12\\text{ cm}$. Line segment $\\overline{CM}$ is the median drawn from the right angle $C$ to the hypotenuse $\\overline{AB}$. What is the length of $CM$?",
    options: [
      "$6.0\\text{ cm}$",
      "$7.2\\text{ cm}$",
      "$7.5\\text{ cm}$",
      "$8.0\\text{ cm}$",
      "$10.5\\text{ cm}$"
    ],
    correctAnswer: 2,
    explanation: "First, find the length of the hypotenuse $AB$ using the Pythagorean theorem:\n$$AB = \\sqrt{AC^2 + BC^2} = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15\\text{ cm}$$\nBy the Right Triangle Median Theorem, the median drawn from the right angle to the hypotenuse is exactly half the length of the hypotenuse:\n$$CM = \\frac{1}{2} AB = \\frac{15}{2} = 7.5\\text{ cm}$$",
    category: ""
  },
  {
    id: "est2_exam6_q30",
    question: "The following two-way table shows the distribution of 150 high school students categorized by grade level and preferred STEM subject:\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Subject</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Grade 10</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Grade 11</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Grade 12</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Total</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Math</td><td class=\"border border-gray-400 px-2 py-1\">25</td><td class=\"border border-gray-400 px-2 py-1\">35</td><td class=\"border border-gray-400 px-2 py-1\">20</td><td class=\"border border-gray-400 px-2 py-1\">80</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Science</td><td class=\"border border-gray-400 px-2 py-1\">20</td><td class=\"border border-gray-400 px-2 py-1\">25</td><td class=\"border border-gray-400 px-2 py-1\">25</td><td class=\"border border-gray-400 px-2 py-1\">70</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Total</td><td class=\"border border-gray-400 px-2 py-1\">45</td><td class=\"border border-gray-400 px-2 py-1\">60</td><td class=\"border border-gray-400 px-2 py-1\">45</td><td class=\"border border-gray-400 px-2 py-1\">150</td></tr>\n  </tbody>\n</table>\n\nIf a student who prefers Math is selected at random, what is the probability that this student is in Grade 11?",
    options: [
      "$\\frac{7}{30}$",
      "$\\frac{35}{150}$",
      "$\\frac{7}{16}$",
      "$\\frac{7}{12}$",
      "$\\frac{8}{15}$"
    ],
    correctAnswer: 2,
    explanation: "This is a conditional probability problem: $P(\\text{Grade 11} \\mid \\text{Math})$.\nRestrict the sample space to students who prefer Math, which is the total of the 'Math' row:\n$$\\text{Total Math students} = 80$$\nThe number of Grade 11 students who prefer Math is:\n$$\\text{Grade 11 Math students} = 35$$\nThe probability is:\n$$P = \\frac{35}{80} = \\frac{7}{16}$$",
    category: ""
  },
  {
    id: "est2_exam6_q31",
    question: "For all $x > 3$, which of the following is equivalent to the simplified form of:\n$$\\frac{2x^2 - 5x - 3}{4x^2 - 1} \\div \\frac{x^2 - 9}{2x^2 + 7x + 3}$$",
    options: [
      "$\\frac{2x + 1}{2x - 1}$",
      "$\\frac{x - 3}{x + 3}$",
      "$\\frac{2x - 1}{2x + 1}$",
      "$\\frac{x + 1}{x - 1}$",
      "$1$"
    ],
    correctAnswer: 0,
    explanation: "Factor each polynomial:\n1. $2x^2 - 5x - 3 = (2x + 1)(x - 3)$\n2. $4x^2 - 1 = (2x - 1)(2x + 1)$\n3. $x^2 - 9 = (x - 3)(x + 3)$\n4. $2x^2 + 7x + 3 = (2x + 1)(x + 3)$\nMultiply the first fraction by the reciprocal of the second:\n$$\\frac{(2x + 1)(x - 3)}{(2x - 1)(2x + 1)} \\times \\frac{(2x + 1)(x + 3)}{(x - 3)(x + 3)}$$\nCancel common factors:\n- $(2x + 1)$ in numerator and denominator of the first fraction.\n- $(x - 3)$ and $(x + 3)$ cancel between numerator and denominator.\nWe are left with:\n$$\\frac{2x + 1}{2x - 1}$$",
    category: ""
  },
  {
    id: "est2_exam6_q32",
    question: "A circle is inscribed in a square with side length 8, as shown below:\n\n<svg viewBox=\"0 0 200 200\" class=\"w-full max-w-xs mx-auto my-4 bg-white border border-gray-200 rounded-xl\">\n  <!-- Square -->\n  <rect x=\"30\" y=\"30\" width=\"140\" height=\"140\" fill=\"#e5e7eb\" stroke=\"#000000\" stroke-width=\"2\"/>\n  <!-- Inscribed Circle -->\n  <circle cx=\"100\" cy=\"100\" r=\"70\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\"/>\n  <!-- Dimension label -->\n  <line x1=\"30\" y1=\"180\" x2=\"170\" y2=\"180\" stroke=\"#000000\" stroke-width=\"1\"/>\n  <line x1=\"30\" y1=\"175\" x2=\"30\" y2=\"185\" stroke=\"#000000\" stroke-width=\"1\"/>\n  <line x1=\"170\" y1=\"175\" x2=\"170\" y2=\"185\" stroke=\"#000000\" stroke-width=\"1\"/>\n  <text x=\"96\" y=\"194\" font-size=\"12\" font-weight=\"bold\" fill=\"#000000\">8</text>\n</svg>\n\nWhat is the total area of the shaded region inside the square but outside the circle?",
    options: [
      "$64 - 8\\pi$",
      "$64 - 16\\pi$",
      "$64 - 32\\pi$",
      "$32 - 8\\pi$",
      "$16 - 4\\pi$"
    ],
    correctAnswer: 1,
    explanation: "The area of the square with side $s = 8$ is:\n$$\\text{Area}_{\\text{square}} = s^2 = 8^2 = 64$$\nThe diameter of the inscribed circle equals the side length of the square, so $d = 8$, meaning the radius is $r = 4$.\nThe area of the inscribed circle is:\n$$\\text{Area}_{\\text{circle}} = \\pi r^2 = \\pi (4^2) = 16\\pi$$\nThe area of the shaded region between the square and circle is:\n$$\\text{Area}_{\\text{shaded}} = \\text{Area}_{\\text{square}} - \\text{Area}_{\\text{circle}} = 64 - 16\\pi$$",
    category: ""
  },
  {
    id: "est2_exam6_q33",
    question: "A box contains 6 black pens, 4 blue pens, and 2 red pens. If two pens are drawn at random without replacement, what is the probability that both pens are the same color?",
    options: [
      "$\\frac{1}{4}$",
      "$\\frac{2}{7}$",
      "$\\frac{1}{3}$",
      "$\\frac{7}{18}$",
      "$\\frac{4}{11}$"
    ],
    correctAnswer: 2,
    explanation: "Total number of pens: $6 + 4 + 2 = 12$.\nTotal ways to choose any 2 pens without replacement:\n$$\\binom{12}{2} = \\frac{12 \\times 11}{2} = 66$$\nNumber of ways to choose 2 pens of the same color:\n- Both black: $\\binom{6}{2} = \\frac{6 \\times 5}{2} = 15$\n- Both blue: $\\binom{4}{2} = \\frac{4 \\times 3}{2} = 6$\n- Both red: $\\binom{2}{2} = 1$\nTotal favorable combinations:\n$$15 + 6 + 1 = 22$$\nThe probability is:\n$$P = \\frac{22}{66} = \\frac{1}{3}$$",
    category: ""
  },
  {
    id: "est2_exam6_q34",
    question: "If $P(x) = 3x^3 - 5x^2 + 2x - 7$, what is the value of $P(3) - P(2)$?",
    options: [
      "28",
      "31",
      "34",
      "37",
      "40"
    ],
    correctAnswer: 2,
    explanation: "Calculate $P(3)$:\n$$P(3) = 3(3^3) - 5(3^2) + 2(3) - 7 = 3(27) - 5(9) + 6 - 7 = 81 - 45 + 6 - 7 = 35$$\nCalculate $P(2)$:\n$$P(2) = 3(2^3) - 5(2^2) + 2(2) - 7 = 3(8) - 5(4) + 4 - 7 = 24 - 20 + 4 - 7 = 1$$\nTherefore:\n$$P(3) - P(2) = 35 - 1 = 34$$",
    category: ""
  },
  {
    id: "est2_exam6_q35",
    question: "What are the coordinates of the center and the length of the radius of the circle defined by the equation $x^2 + y^2 - 8x + 6y - 11 = 0$?",
    options: [
      "Center $(4, -3)$, radius $6$",
      "Center $(-4, 3)$, radius $6$",
      "Center $(4, -3)$, radius $36$",
      "Center $(-8, 6)$, radius $\\sqrt{11}$",
      "Center $(4, 3)$, radius $6$"
    ],
    correctAnswer: 0,
    explanation: "Complete the square for $x$ and $y$:\n$$(x^2 - 8x) + (y^2 + 6y) = 11$$\nAdd $\\left(\\frac{-8}{2}\\right)^2 = 16$ and $\\left(\\frac{6}{2}\\right)^2 = 9$ to both sides:\n$$(x^2 - 8x + 16) + (y^2 + 6y + 9) = 11 + 16 + 9$$\n$$(x - 4)^2 + (y + 3)^2 = 36$$\nThe standard equation of a circle is $(x - h)^2 + (y - k)^2 = r^2$.\nThus, the center is $(h, k) = (4, -3)$ and the radius is $r = \\sqrt{36} = 6$.",
    category: ""
  },
  {
    id: "est2_exam6_q36",
    question: "If $\\log_3(x + 6) + \\log_3(x) = 3$, what is the real value of $x$?",
    options: [
      "2",
      "3",
      "4",
      "9",
      "27"
    ],
    correctAnswer: 1,
    explanation: "Use the product rule for logarithms, $\\log_b(A) + \\log_b(B) = \\log_b(AB)$:\n$$\\log_3(x(x + 6)) = 3$$\nRewrite in exponential form:\n$$x(x + 6) = 3^3$$\n$$x^2 + 6x = 27$$\n$$x^2 + 6x - 27 = 0$$\nFactor the quadratic:\n$$(x + 9)(x - 3) = 0$$\nThis gives $x = -9$ or $x = 3$.\nSince the argument of a logarithm must be strictly positive ($x > 0$ and $x + 6 > 0$), we reject $x = -9$.\nTherefore, the only valid solution is $x = 3$.",
    category: ""
  },
  {
    id: "est2_exam6_q37",
    question: "If $\\sin(3\\theta - 15^\\circ) = \\cos(2\\theta + 20^\\circ)$, where both $(3\\theta - 15^\\circ)$ and $(2\\theta + 20^\\circ)$ are acute angles, what is the value of $\\theta$?",
    options: [
      "$15^\\circ$",
      "$17^\\circ$",
      "$19^\\circ$",
      "$21^\\circ$",
      "$25^\\circ$"
    ],
    correctAnswer: 1,
    explanation: "Recall the co-function identity $\\sin(A) = \\cos(B)$ for acute angles $A$ and $B$, which implies that the angles are complementary:\n$$A + B = 90^\\circ$$\nSet the sum of the angles equal to $90^\\circ$:\n$$(3\\theta - 15^\\circ) + (2\\theta + 20^\\circ) = 90^\\circ$$\n$$5\\theta + 5^\\circ = 90^\\circ$$\n$$5\\theta = 85^\\circ \\implies \\theta = 17^\\circ$$",
    category: ""
  },
  {
    id: "est2_exam6_q38",
    question: "An arithmetic sequence has a first term $a_1 = 7$ and a common difference $d = 4$. What is the sum of the first 15 terms ($S_{15}$) of this sequence?",
    options: [
      "490",
      "510",
      "525",
      "555",
      "570"
    ],
    correctAnswer: 2,
    explanation: "The sum of the first $n$ terms of an arithmetic sequence is given by:\n$$S_n = \\frac{n}{2} [2a_1 + (n - 1)d]$$\nSubstitute $n = 15, a_1 = 7,$ and $d = 4$:\n$$S_{15} = \\frac{15}{2} [2(7) + (15 - 1)(4)]$$\n$$S_{15} = \\frac{15}{2} [14 + (14)(4)] = \\frac{15}{2} [14 + 56] = \\frac{15}{2} [70] = 15 \\times 35 = 525$$",
    category: ""
  },
  {
    id: "est2_exam6_q39",
    question: "If $4^{2x - 1} = \\left(\\frac{1}{8}\\right)^{x - 3}$, what is the value of $x$?",
    options: [
      "$\\frac{7}{11}$",
      "$1$",
      "$\\frac{11}{7}$",
      "$2$",
      "$\\frac{13}{7}$"
    ],
    correctAnswer: 2,
    explanation: "Express both sides with base 2:\n$$4 = 2^2 \\implies 4^{2x - 1} = (2^2)^{2x - 1} = 2^{2(2x - 1)} = 2^{4x - 2}$$\n$$\\frac{1}{8} = 2^{-3} \\implies \\left(\\frac{1}{8}\\right)^{x - 3} = (2^{-3})^{x - 3} = 2^{-3(x - 3)} = 2^{-3x + 9}$$\nEquate the exponents:\n$$4x - 2 = -3x + 9$$\n$$7x = 11 \\implies x = \\frac{11}{7}$$",
    category: ""
  },
  {
    id: "est2_exam6_q40",
    question: "A right circular cone has a base radius of $6\\text{ cm}$ and a slant height of $10\\text{ cm}$. What is the volume of the cone?",
    options: [
      "$48\\pi\\text{ cm}^3$",
      "$72\\pi\\text{ cm}^3$",
      "$96\\pi\\text{ cm}^3$",
      "$120\\pi\\text{ cm}^3$",
      "$288\\pi\\text{ cm}^3$"
    ],
    correctAnswer: 2,
    explanation: "The radius $r$, vertical height $h$, and slant height $l$ form a right triangle:\n$$r^2 + h^2 = l^2$$\n$$6^2 + h^2 = 10^2 \\implies 36 + h^2 = 100 \\implies h^2 = 64 \\implies h = 8\\text{ cm}$$\nThe volume of a right circular cone is given by:\n$$V = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi (6^2)(8) = \\frac{1}{3} \\pi (36)(8) = 12 \\times 8 \\pi = 96\\pi\\text{ cm}^3$$",
    category: ""
  }
];
