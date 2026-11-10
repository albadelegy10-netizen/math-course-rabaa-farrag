import { Question } from '../../types';

export const EST2_2021_MAY: Question[] = [
  {
    id: "est2_2021_may_q1",
    category: "Polynomial Division",
    question: "The remainder when $t^{16} + 5$ is divided by $t + 1$ is",
    options: ["A) 6", "B) 0", "C) -1", "D) 4", "E) 1"],
    correctAnswer: 0,
    explanation: "By the Remainder Theorem, dividing a polynomial $P(t)$ by $t - c$ gives the remainder $P(c)$. Here $c = -1$.<br/>Evaluating $P(-1) = (-1)^{16} + 5 = 1 + 5 = 6$. So the remainder is <b>6</b>."
  },
  {
    id: "est2_2021_may_q2",
    category: "Complex Roots & Vieta's Formulas",
    question: "If two roots of the equation $y^3 + a y^2 + b y + c = 0$ (with $a, b,$ and $c$ integers) are $1$ and $2 - 8i$, then the value of $a$ is",
    options: ["A) 2 + 8i", "B) -5", "C) 5", "D) 4 + 8i", "E) 4 - 8i"],
    correctAnswer: 1,
    explanation: "Since $a, b, c$ are integers, complex roots must occur in conjugate pairs. Since $2 - 8i$ is a root, $2 + 8i$ must also be a root.<br/>The three roots are $y_1 = 1$, $y_2 = 2 - 8i$, and $y_3 = 2 + 8i$.<br/>By Vieta's formulas, the sum of the roots is equal to $-a$:<br/>$$-a = y_1 + y_2 + y_3 = 1 + (2 - 8i) + (2 + 8i) = 1 + 4 = 5$$<br/>Thus, $-a = 5 \\implies a = -5$."
  },
  {
    id: "est2_2021_may_q3",
    category: "Radical Equations",
    question: "The root(s) of the equation $\\sqrt{a + 6} = -a$ is / are:",
    options: ["A) 3", "B) -2", "C) 3 and -2", "D) 3 or -2", "E) No Roots"],
    correctAnswer: 1,
    explanation: "Square both sides of the equation:<br/>$$a + 6 = (-a)^2 = a^2 \\implies a^2 - a - 6 = 0 \\implies (a - 3)(a + 2) = 0$$<br/>So $a = 3$ or $a = -2$.<br/><b>Check for extraneous roots:</b><br/>• For $a = 3$: $\\sqrt{3 + 6} = \\sqrt{9} = 3 \\neq -3$ (extraneous).<br/>• For $a = -2$: $\\sqrt{-2 + 6} = \\sqrt{4} = 2 = -(-2)$ (valid).<br/>Therefore, the only real root is <b>-2</b>."
  },
  {
    id: "est2_2021_may_q4",
    category: "Rational Inequalities",
    question: "What are all $p$ such that $\\frac{p + 100}{p} \\le 1$?",
    options: ["A) p > 0", "B) p < 0", "C) p <= 0", "D) -1 < p < 0", "E) -1 <= p < 0"],
    correctAnswer: 1,
    explanation: "Subtract $1$ from both sides:<br/>$$\\frac{p + 100}{p} - 1 \\le 0 \\implies \\frac{p + 100 - p}{p} \\le 0 \\implies \\frac{100}{p} \\le 0$$<br/>Since $100 > 0$, for the fraction to be negative, the denominator $p$ must be strictly negative ($p < 0$). Note that $p \\neq 0$ because division by zero is undefined.<br/>Thus, $p < 0$."
  },
  {
    id: "est2_2021_may_q5",
    category: "Quadratic Minimums",
    question: "The graph of $t^2 - \\sqrt{5} t - 2$ has its minimum value at which the approximate value of $t$ is",
    options: ["A) 0.83", "B) 1.12", "C) 1.21", "D) 1.35", "E) 2.47"],
    correctAnswer: 1,
    explanation: "For a quadratic function $f(t) = a t^2 + b t + c$ with $a = 1 > 0$, the minimum value occurs at the vertex:<br/>$$t = -\\frac{b}{2a} = -\\frac{-\\sqrt{5}}{2(1)} = \\frac{\\sqrt{5}}{2} \\approx \\frac{2.236}{2} \\approx 1.118 \\approx 1.12$$"
  },
  {
    id: "est2_2021_may_q6",
    category: "Plane Geometry",
    question: "The diagonals of a parallelogram divide the figure into four triangles that are",
    options: ["A) congruent", "B) similar", "C) equal in area", "D) isosceles", "E) equal in perimeter"],
    correctAnswer: 2,
    explanation: "The diagonals of a parallelogram bisect each other. Each diagonal divides the parallelogram into two triangles of equal area, and the intersection point divides each triangle into smaller triangles sharing equal bases and heights. Thus, all four triangles have equal areas."
  },
  {
    id: "est2_2021_may_q7",
    category: "Geometry & Area of Semicircle",
    question: `<p className="mb-3">In the adjacent figure, $\\overline{RT}$ is a diameter of the semicircle. If $RS = 2$ and $ST = 3$, then the area of the semicircle is</p>
<div className="flex justify-center my-4">
  <svg width="260" height="150" viewBox="0 0 260 150" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Semicircle -->
    <path d="M 20 120 A 110 110 0 0 1 240 120 Z" fill="none" stroke="#000" strokeWidth="2"/>
    <!-- Diameter RT -->
    <line x1="20" y1="120" x2="240" y2="120" stroke="#000" strokeWidth="2"/>
    <!-- Triangle RST -->
    <line x1="20" y1="120" x2="130" y2="20" stroke="#000" strokeWidth="2"/>
    <line x1="130" y1="20" x2="240" y2="120" stroke="#000" strokeWidth="2"/>
    <!-- Center O -->
    <circle cx="130" cy="120" r="3" fill="#000"/>
    <text x="130" y="138" fontSize="14" fontStyle="italic" textAnchor="middle">O</text>
    <!-- Labels -->
    <text x="10" y="125" fontSize="14" fontWeight="bold">R</text>
    <text x="248" y="125" fontSize="14" fontWeight="bold">T</text>
    <text x="130" y="14" fontSize="14" fontWeight="bold" textAnchor="middle">S</text>
  </svg>
</div>`,
    options: ["A) \\frac{13\\pi}{2}", "B) \\frac{13\\pi}{4}", "C) \\frac{\\pi}{6}", "D) \\frac{13\\pi}{8}", "E) \\frac{\\pi}{4}"],
    correctAnswer: 3,
    explanation: "Angle $\\angle RST = 90^\\circ$ because it is inscribed in a semicircle subtending diameter $\\overline{RT}$.<br/>By the Pythagorean theorem on right triangle $\\triangle RST$:<br/>$$RT = \\sqrt{RS^2 + ST^2} = \\sqrt{2^2 + 3^2} = \\sqrt{4 + 9} = \\sqrt{13}$$<br/>The radius $r$ of the semicircle is $r = \\frac{RT}{2} = \\frac{\\sqrt{13}}{2}$.<br/>The area of the semicircle is:<br/>$$\\text{Area} = \\frac{1}{2} \\pi r^2 = \\frac{1}{2} \\pi \\left(\\frac{\\sqrt{13}}{2}\\right)^2 = \\frac{1}{2} \\pi \\left(\\frac{13}{4}\\right) = \\frac{13\\pi}{8}$$"
  },
  {
    id: "est2_2021_may_q8",
    category: "Line Segments & Ratios",
    question: `<p className="mb-3">In the adjacent figure, $AC = 9$, $D$ is three times as far from $A$ as from $B$, and $BC = 3$. What is $BD$?</p>
<div className="flex justify-center my-4">
  <svg width="320" height="90" viewBox="0 0 320 90" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Main line -->
    <line x1="20" y1="45" x2="300" y2="45" stroke="#000" strokeWidth="2"/>
    <!-- Tick marks -->
    <line x1="20" y1="35" x2="20" y2="55" stroke="#000" strokeWidth="2"/>
    <line x1="140" y1="35" x2="140" y2="55" stroke="#000" strokeWidth="2"/>
    <line x1="200" y1="35" x2="200" y2="55" stroke="#000" strokeWidth="2"/>
    <line x1="280" y1="35" x2="280" y2="55" stroke="#000" strokeWidth="2"/>
    <!-- Labels -->
    <text x="20" y="72" fontSize="14" fontWeight="bold" textAnchor="middle">A</text>
    <text x="140" y="72" fontSize="14" fontWeight="bold" textAnchor="middle">C</text>
    <text x="200" y="72" fontSize="14" fontWeight="bold" textAnchor="middle">B</text>
    <text x="280" y="72" fontSize="14" fontWeight="bold" textAnchor="middle">D</text>
    <!-- Segment lengths -->
    <text x="80" y="32" fontSize="14" fontWeight="bold" textAnchor="middle">9</text>
    <text x="170" y="32" fontSize="14" fontWeight="bold" textAnchor="middle">3</text>
    <text x="240" y="32" fontSize="14" fontWeight="bold" textAnchor="middle">X</text>
  </svg>
</div>`,
    options: ["A) 9", "B) 12", "C) 18", "D) 6", "E) 15"],
    correctAnswer: 3,
    explanation: "Given $AC = 9$ and $BC = 3$, the total length $AB = AC + BC = 9 + 3 = 12$.<br/>$D$ is on the line segment extension beyond $B$, so $AD = AB + BD = 12 + BD$.<br/>We are given that $D$ is three times as far from $A$ as from $B$, which means:<br/>$$AD = 3 \\cdot BD \\implies 12 + BD = 3 \\cdot BD \\implies 2 \\cdot BD = 12 \\implies BD = 6$$"
  },
  {
    id: "est2_2021_may_q9",
    category: "Trigonometric Periodicity",
    question: "The graph of the equation $y = 50 \\cos(3x)$ has a period, in radians, of",
    options: ["A) 3\\pi", "B) \\frac{2}{3}\\pi", "C) \\frac{2}{5}\\pi", "D) 50\\pi", "E) \\frac{50}{3}\\pi"],
    correctAnswer: 1,
    explanation: "The period $T$ of a cosine function of the form $y = A \\cos(Bx)$ is given by:<br/>$$T = \\frac{2\\pi}{B}$$<br/>For $y = 50 \\cos(3x)$, $B = 3$, so the period is $T = \\frac{2\\pi}{3} = \\frac{2}{3}\\pi$ radians."
  },
  {
    id: "est2_2021_may_q10",
    category: "3D Geometry & Surface Area",
    question: "A right circular cone is cut into two equal parts. The lateral surface area of one of the parts is equal to thrice the lateral surface area of a hemisphere with a radius equal to $8\\text{ cm}$. What is the area of the right circular cone?",
    options: ["A) 768\\pi\\text{ cm}^2", "B) 512\\pi\\text{ cm}^2", "C) 384\\pi\\text{ cm}^2", "D) 192\\pi\\text{ cm}^2", "E) 128\\pi\\text{ cm}^2"],
    correctAnswer: 0,
    explanation: "The lateral (curved) surface area of a hemisphere with radius $R = 8\\text{ cm}$ is:<br/>$$\\text{LSA}_{\\text{hemisphere}} = 2\\pi R^2 = 2\\pi (8^2) = 128\\pi\\text{ cm}^2$$<br/>Thrice this lateral surface area is $3 \\times 128\\pi = 384\\pi\\text{ cm}^2$.<br/>Since one half of the right circular cone's lateral surface area equals $384\\pi\\text{ cm}^2$, the total lateral area of the right circular cone is:<br/>$$\\text{Total Area} = 2 \\times 384\\pi = 768\\pi\\text{ cm}^2$$"
  },
  {
    id: "est2_2021_may_q11",
    category: "Parametric Equations",
    question: "If $a \\neq b$, then $x = a \\sin t$ and $y = b \\cos t$ represent the parametric equations of a(n):",
    options: ["A) Circle", "B) Ellipse", "C) Straight line", "D) Parabola", "E) Hyperbola"],
    correctAnswer: 1,
    explanation: "Isolate $\\sin t$ and $\\cos t$:<br/>$$\\frac{x}{a} = \\sin t \\quad \\text{and} \\quad \\frac{y}{b} = \\cos t$$<br/>Using the Pythagorean identity $\\sin^2 t + \\cos^2 t = 1$:<br/>$$\\left(\\frac{x}{a}\\right)^2 + \\left(\\frac{y}{b}\\right)^2 = 1$$<br/>Since $a \\neq b$, this is the equation of an <b>ellipse</b>."
  },
  {
    id: "est2_2021_may_q12",
    category: "Trigonometric Identities",
    question: "$2 \\cos^3 B \\sin B + 2 \\sin^3 B \\cos B$ is equal to",
    options: ["A) 2 \\sin B", "B) \\cos^2 B", "C) \\cos(2B)", "D) \\sin(2B)", "E) 2 \\cos B"],
    correctAnswer: 3,
    explanation: "Factor out $2 \\sin B \\cos B$ from the expression:<br/>$$2 \\cos^3 B \\sin B + 2 \\sin^3 B \\cos B = 2 \\sin B \\cos B (\\cos^2 B + \\sin^2 B)$$<br/>Since $\\cos^2 B + \\sin^2 B = 1$, this simplifies to:<br/>$$2 \\sin B \\cos B = \\sin(2B)$$"
  },
  {
    id: "est2_2021_may_q13",
    category: "Real & Irrational Numbers",
    question: "The irrational number is",
    options: [
      "A) \\frac{3\\sqrt{18}}{2\\sqrt{6}}",
      "B) \\sqrt[3]{-27}",
      "C) \\sqrt{2}(3\\sqrt{2} + 2\\sqrt{8})",
      "D) \\frac{2\\sqrt{5}}{\\sqrt{45}}",
      "E) \\sqrt{\\frac{1}{2}} \\cdot \\sqrt{\\frac{25}{2}}"
    ],
    correctAnswer: 0,
    explanation: "Let's simplify each option:<br/>• A) $\\frac{3\\sqrt{18}}{2\\sqrt{6}} = \\frac{3}{2}\\sqrt{\\frac{18}{6}} = \\frac{3\\sqrt{3}}{2}$ (irrational!).<br/>• B) $\\sqrt[3]{-27} = -3$ (rational).<br/>• C) $\\sqrt{2}(3\\sqrt{2} + 2\\sqrt{8}) = 3(2) + 2\\sqrt{16} = 6 + 8 = 14$ (rational).<br/>• D) $\\frac{2\\sqrt{5}}{\\sqrt{45}} = \\frac{2\\sqrt{5}}{3\\sqrt{5}} = \\frac{2}{3}$ (rational).<br/>• E) $\\sqrt{\\frac{1}{2} \\cdot \\frac{25}{2}} = \\sqrt{\\frac{25}{4}} = \\frac{5}{2}$ (rational)."
  },
  {
    id: "est2_2021_may_q14",
    category: "Percentages & Rates",
    question: "A car moved a distance of $x$ meters to a distance of $y$ meters. The percent of increase was",
    options: [
      "A) \\frac{100(y - x)}{y}",
      "B) \\frac{100(x - y)}{x}",
      "C) \\frac{y - x}{x}",
      "D) \\frac{x - y}{x}",
      "E) \\frac{100(y - x)}{x}"
    ],
    correctAnswer: 4,
    explanation: "The percentage increase formula is:<br/>$$\\text{Percent Increase} = \\frac{\\text{New Value} - \\text{Old Value}}{\\text{Old Value}} \\times 100 = \\frac{y - x}{x} \\times 100 = \\frac{100(y - x)}{x}$$"
  },
  {
    id: "est2_2021_may_q15",
    category: "Systems of Nonlinear Equations",
    question: "The solution of $3x^2 - xy = 3$ and $6x - y = 10$ is",
    options: [
      "A) \\frac{1}{3} and 3",
      "B) 8 and -8",
      "C) \\frac{1}{3} and -8",
      "D) 3 and 8",
      "E) \\frac{1}{3} and -8; 3 and 8"
    ],
    correctAnswer: 4,
    explanation: "From the second equation, express $y$ in terms of $x$: $y = 6x - 10$.<br/>Substitute $y$ into the first equation:<br/>$$3x^2 - x(6x - 10) = 3 \\implies 3x^2 - 6x^2 + 10x = 3 \\implies -3x^2 + 10x - 3 = 0$$<br/>$$3x^2 - 10x + 3 = 0 \\implies (3x - 1)(x - 3) = 0$$<br/>So $x = \\frac{1}{3}$ or $x = 3$.<br/>• If $x = \\frac{1}{3}$: $y = 6\\left(\\frac{1}{3}\\right) - 10 = 2 - 10 = -8$.<br/>• If $x = 3$: $y = 6(3) - 10 = 18 - 10 = 8$.<br/>Thus, the solution pairs $(x, y)$ are $\\left(\\frac{1}{3}, -8\\right)$ and $(3, 8)$."
  },
  {
    id: "est2_2021_may_q16",
    category: "Trigonometric Graphs & Quadrants",
    question: "If graphed on the same set of axes and $0 \\le x \\le 2\\pi$, then $y = \\sin x$ and $y = \\cos x$ will intersect in quadrant(s)",
    options: ["A) I only", "B) III only", "C) I and III", "D) II only", "E) I and II"],
    correctAnswer: 2,
    explanation: "Setting $\\sin x = \\cos x \\implies \\tan x = 1$.<br/>For $0 \\le x \\le 2\\pi$, $\\tan x = 1$ at $x = \\frac{\\pi}{4}$ and $x = \\frac{5\\pi}{4}$.<br/>• At $x = \\frac{\\pi}{4}$: $\\sin x = \\cos x = \\frac{\\sqrt{2}}{2} > 0$ (Quadrant I).<br/>• At $x = \\frac{5\\pi}{4}$: $\\sin x = \\cos x = -\\frac{\\sqrt{2}}{2} < 0$ (Quadrant III).<br/>Thus, the graphs intersect in Quadrants I and III."
  },
  {
    id: "est2_2021_may_q17",
    category: "Set Theory & Geometry",
    question: "If $A$ represents the set of rectangles and $B$ the set of rhombi, then $A \\cap B$ represents the set of",
    options: ["A) Trapezoids", "B) Parallelograms", "C) Squares", "D) Rectangles", "E) Quadrilaterals"],
    correctAnswer: 2,
    explanation: "The intersection $A \\cap B$ consists of quadrilaterals that satisfy the defining properties of both a rectangle (four right angles) and a rhombus (four equal sides). A quadrilateral that is both equiangular and equilateral is a <b>square</b>."
  },
  {
    id: "est2_2021_may_q18",
    category: "Area of Parallelogram",
    question: `<p className="mb-3">The approximate area of the parallelogram DAWN, in the adjacent figure, is</p>
<div className="flex justify-center my-4">
  <svg width="280" height="150" viewBox="0 0 280 150" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Parallelogram DAWN -->
    <!-- D at (40, 120), N at (200, 120), A at (90, 30), W at (250, 30) -->
    <polygon points="40,120 200,120 250,30 90,30" fill="none" stroke="#000" strokeWidth="2"/>
    <!-- Angle 47 deg at D -->
    <path d="M 60,120 A 20 20 0 0 0 53,103" fill="none" stroke="#000" strokeWidth="1.5"/>
    <text x="65" y="112" fontSize="13" fontWeight="bold">47°</text>
    <!-- Side lengths -->
    <text x="38" y="70" fontSize="14" fontWeight="bold">4</text>
    <text x="120" y="138" fontSize="14" fontWeight="bold" textAnchor="middle">5</text>
    <!-- Vertices -->
    <text x="25" y="125" fontSize="14" fontWeight="bold">D</text>
    <text x="210" y="125" fontSize="14" fontWeight="bold">N</text>
    <text x="75" y="25" fontSize="14" fontWeight="bold">A</text>
    <text x="258" y="25" fontSize="14" fontWeight="bold">W</text>
  </svg>
</div>`,
    options: ["A) 20", "B) 17.25", "C) 14.63", "D) 11.5", "E) 13.64"],
    correctAnswer: 2,
    explanation: "The area of a parallelogram with sides $a, b$ and included angle $\\theta$ is:<br/>$$\\text{Area} = a \\cdot b \\cdot \\sin\\theta$$<br/>For $a = 5$, $b = 4$, and $\\theta = 47^\\circ$:<br/>$$\\text{Area} = 5 \\times 4 \\times \\sin(47^\\circ) = 20 \\times 0.73135 \\approx 14.627 \\approx 14.63$$"
  },
  {
    id: "est2_2021_may_q19",
    category: "Line & Circle Tangency",
    question: "If the line of equation $5x + 12y - 60 = 0$ is tangent to the circle of equation $(x - 1)^2 + (y - 3)^2 = r^2$, then the value of $r$ is",
    options: ["A) 2\\sqrt{3}", "B) \\sqrt{3}", "C) \\sqrt{10}", "D) \\frac{19}{13}", "E) \\frac{13}{12}"],
    correctAnswer: 3,
    explanation: "The circle has center $(h, k) = (1, 3)$ and radius $r$.<br/>Since the line $5x + 12y - 60 = 0$ is tangent to the circle, the radius $r$ is the perpendicular distance from the center $(1, 3)$ to the line:<br/>$$r = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}} = \\frac{|5(1) + 12(3) - 60|}{\\sqrt{5^2 + 12^2}} = \\frac{|5 + 36 - 60|}{\\sqrt{25 + 144}} = \\frac{|-19|}{13} = \\frac{19}{13}$$"
  },
  {
    id: "est2_2021_may_q20",
    category: "De Moivre's Theorem & Complex Numbers",
    question: "If $[\\sqrt{2}(\\cos 30^\\circ + i \\sin 30^\\circ)]^2 = a + bi$, then $a = \\dots$ and $b = \\dots$",
    options: [
      "A) a = 2, b = \\sqrt{3}",
      "B) a = \\frac{3}{2}, b = \\frac{1}{2}",
      "C) a = 1, b = -\\sqrt{3}",
      "D) a = \\frac{3}{2}, b = -\\frac{1}{2}",
      "E) a = 1, b = \\sqrt{3}"
    ],
    correctAnswer: 4,
    explanation: "Apply De Moivre's Theorem $[r(\\cos\\theta + i\\sin\\theta)]^n = r^n (\\cos(n\\theta) + i\\sin(n\\theta))$:<br/>$$[\\sqrt{2}(\\cos 30^\\circ + i \\sin 30^\\circ)]^2 = (\\sqrt{2})^2 [\\cos(2 \\times 30^\\circ) + i \\sin(2 \\times 30^\\circ)]$$<br/>$$= 2 (\\cos 60^\\circ + i \\sin 60^\\circ) = 2 \\left(\\frac{1}{2} + i \\frac{\\sqrt{3}}{2}\\right) = 1 + i\\sqrt{3}$$<br/>Equating real and imaginary parts gives $a = 1$ and $b = \\sqrt{3}$."
  },
  {
    id: "est2_2021_may_q21",
    category: "Binomial Probability",
    question: "The probability of getting $80\\%$ or more of the questions correct on a 10-question true-false exam merely by guessing is",
    options: ["A) \\frac{5}{32}", "B) \\frac{1}{16}", "C) \\frac{3}{16}", "D) \\frac{7}{128}", "E) \\frac{7}{32}"],
    correctAnswer: 3,
    explanation: "Getting $80\\%$ or more on a 10-question test means getting $8$, $9$, or $10$ correct answers ($k \\ge 8$).<br/>For a true-false test, $p = \\frac{1}{2}$ and $n = 10$.<br/>$$P(X \\ge 8) = \\binom{10}{8}\\left(\\frac{1}{2}\\right)^{10} + \\binom{10}{9}\\left(\\frac{1}{2}\\right)^{10} + \\binom{10}{10}\\left(\\frac{1}{2}\\right)^{10}$$<br/>$$P(X \\ge 8) = \\frac{45 + 10 + 1}{1024} = \\frac{56}{1024} = \\frac{7}{128}$$"
  },
  {
    id: "est2_2021_may_q22",
    category: "3D Geometry & Cube Diagonals",
    question: "The ratio of the diagonal of a cube to the diagonal of a face of this cube is",
    options: ["A) 3: \\sqrt{6}", "B) 2: \\sqrt{6}", "C) 3: \\sqrt{2}", "D) 6: \\sqrt{2}", "E) 2: \\sqrt{3}"],
    correctAnswer: 0,
    explanation: "For a cube with side length $s$:<br/>• Face diagonal $d_{\\text{face}} = s\\sqrt{2}$<br/>• Space diagonal $d_{\\text{space}} = s\\sqrt{3}$<br/>The ratio is:<br/>$$\\frac{d_{\\text{space}}}{d_{\\text{face}}} = \\frac{s\\sqrt{3}}{s\\sqrt{2}} = \\frac{\\sqrt{3}}{\\sqrt{2}} = \\frac{3}{\\sqrt{6}}$$ (since $\\frac{3}{\\sqrt{6}} = \\frac{3\\sqrt{6}}{6} = \\frac{\\sqrt{6}}{2} = \\frac{\\sqrt{3}}{\\sqrt{2}}$).<br/>Thus, the ratio is <b>3: \\sqrt{6}</b>."
  },
  {
    id: "est2_2021_may_q23",
    category: "Lines & Triangles",
    question: "The intersection of the three lines of equations $x = 3y$, $y = 0$ and $3x + y = 7$ form a(n) --------------- triangle",
    options: ["A) Acute", "B) Obtuse", "C) Right", "D) Isosceles", "E) Equilateral"],
    correctAnswer: 2,
    explanation: "Let's find the slopes of the boundary lines:<br/>• Line 1: $x = 3y \\implies y = \\frac{1}{3}x$, with slope $m_1 = \\frac{1}{3}$.<br/>• Line 2: $y = 0$ (x-axis), with slope $m_2 = 0$.<br/>• Line 3: $3x + y = 7 \\implies y = -3x + 7$, with slope $m_3 = -3$.<br/>Notice that $m_1 \\cdot m_3 = \\frac{1}{3} \\cdot (-3) = -1$.<br/>Since Line 1 and Line 3 are perpendicular, the three lines form a <b>Right</b> triangle."
  },
  {
    id: "est2_2021_may_q24",
    category: "Oblique Coordinate Distance",
    question: "The distance $AB$ between the points $A(-3, 7)$ and $B(6, -5)$ in a coordinate system in which the y-axis is inclined $60^\\circ$ to the positive x-axis is",
    options: ["A) \\sqrt{117}", "B) \\sqrt{120}", "C) \\sqrt{189}", "D) \\sqrt{333}", "E) \\sqrt{108}"],
    correctAnswer: 0,
    explanation: "In an oblique coordinate system with axis inclination angle $\\omega = 60^\\circ$, the distance formula is:<br/>$$d^2 = (\\Delta x)^2 + (\\Delta y)^2 + 2(\\Delta x)(\\Delta y)\\cos\\omega$$<br/>Here $\\Delta x = 6 - (-3) = 9$, $\\Delta y = -5 - 7 = -12$, and $\\cos 60^\\circ = \\frac{1}{2}$:<br/>$$d^2 = 9^2 + (-12)^2 + 2(9)(-12)\\left(\\frac{1}{2}\\right) = 81 + 144 - 108 = 117$$<br/>Thus, $d = \\sqrt{117}$."
  },
  {
    id: "est2_2021_may_q25",
    category: "Grouped Data Median",
    question: `<p className="mb-3">The municipality in a certain hospital administered a survey on diabetes. Blood tests for 150 patients gave the following results in millimoles per liter:</p>
<table className="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr className="bg-gray-100">
      <th className="border border-gray-400 px-2 py-1">Level of glucose in mmol/L</th>
      <th className="border border-gray-400 px-2 py-1">[6 - 8[</th>
      <th className="border border-gray-400 px-2 py-1">[8 - 10[</th>
      <th className="border border-gray-400 px-2 py-1">[10 - 12[</th>
      <th className="border border-gray-400 px-2 py-1">[12 - 14[</th>
      <th className="border border-gray-400 px-2 py-1">[14 - 16[</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-400 px-2 py-1">Frequency</td>
      <td className="border border-gray-400 px-2 py-1">50</td>
      <td className="border border-gray-400 px-2 py-1">10</td>
      <td className="border border-gray-400 px-2 py-1">20</td>
      <td className="border border-gray-400 px-2 py-1">30</td>
      <td className="border border-gray-400 px-2 py-1">40</td>
    </tr>
  </tbody>
</table>
<p>The Median is</p>`,
    options: ["A) 11", "B) 10", "C) 11.5", "D) 10.5", "E) 12"],
    correctAnswer: 2,
    explanation: "Total frequency $N = 150$. The median position is $\\frac{N}{2} = 75$.<br/>Cumulative frequencies:<br/>• $[6 - 8[: 50$<br/>• $[8 - 10[: 50 + 10 = 60$<br/>• $[10 - 12[: 60 + 20 = 80$<br/>The 75th item falls in the class $[10 - 12[$.<br/>Using grouped data median interpolation:<br/>$$\\text{Median} = L + \\frac{\\frac{N}{2} - CF}{f} \\times w = 10 + \\frac{75 - 60}{20} \\times 2 = 10 + \\frac{15}{20} \\times 2 = 10 + 1.5 = 11.5$$"
  },
  {
    id: "est2_2021_may_q26",
    category: "Counting Principle & Sample Space",
    question: "A bag $B_1$ contains two red balls numbered 0 and three blue balls numbered 1, 2, 3. A bag $B_2$ contains three red balls numbered 2, 3, 4 and one blue ball numbered 0. One ball is selected from $B_1$, then another ball is randomly selected from $B_2$. Thus a 2-digit number is formed. The number of possible outcomes is",
    options: ["A) 25", "B) 12", "C) 20", "D) 16", "E) 144"],
    correctAnswer: 1,
    explanation: "A valid 2-digit number cannot have $0$ as its first (tens) digit.<br/>• The first ball drawn from bag $B_1$ gives the tens digit. The non-zero options from bag $B_1$ are $\\{1, 2, 3\\}$, so there are $3$ possible choices for the tens digit.<br/>• The second ball drawn from bag $B_2$ gives the units digit. The available balls in bag $B_2$ are numbered $\\{0, 2, 3, 4\\}$, giving $4$ possible choices.<br/>By the Fundamental Counting Principle, the total number of possible 2-digit outcomes is:<br/>$$\\text{Total Outcomes} = 3 \\times 4 = 12$$<br/>Therefore, the correct answer according to the official answer key is <b>B) 12</b>."
  },
  {
    id: "est2_2021_may_q27",
    category: "Conditional Probability & Tables",
    question: `<p className="mb-3">The following table gives information about a population of smokers and of those having lung diseases due to smoking.</p>
<table className="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr className="bg-gray-100">
      <th className="border border-gray-400 px-2 py-1" rowSpan={2}>Age Group</th>
      <th className="border border-gray-400 px-2 py-1" colSpan={2}>Men</th>
      <th className="border border-gray-400 px-2 py-1" colSpan={2}>Men and Women</th>
    </tr>
    <tr className="bg-gray-100">
      <th className="border border-gray-400 px-2 py-1">Smokers</th>
      <th className="border border-gray-400 px-2 py-1">Sick</th>
      <th className="border border-gray-400 px-2 py-1">Smokers</th>
      <th className="border border-gray-400 px-2 py-1">Sick</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-400 px-2 py-1">20 - 40 years</td>
      <td className="border border-gray-400 px-2 py-1">2500</td>
      <td className="border border-gray-400 px-2 py-1">30</td>
      <td className="border border-gray-400 px-2 py-1">4500</td>
      <td className="border border-gray-400 px-2 py-1">50</td>
    </tr>
    <tr>
      <td className="border border-gray-400 px-2 py-1">40 - 60 years</td>
      <td className="border border-gray-400 px-2 py-1">3000</td>
      <td className="border border-gray-400 px-2 py-1">50</td>
      <td className="border border-gray-400 px-2 py-1">-</td>
      <td className="border border-gray-400 px-2 py-1">75</td>
    </tr>
    <tr>
      <td className="border border-gray-400 px-2 py-1">60 - 80 years</td>
      <td className="border border-gray-400 px-2 py-1">2000</td>
      <td className="border border-gray-400 px-2 py-1">-</td>
      <td className="border border-gray-400 px-2 py-1">4000</td>
      <td className="border border-gray-400 px-2 py-1">-</td>
    </tr>
    <tr>
      <td className="border border-gray-400 px-2 py-1">Total</td>
      <td className="border border-gray-400 px-2 py-1">-</td>
      <td className="border border-gray-400 px-2 py-1">160</td>
      <td className="border border-gray-400 px-2 py-1">13500</td>
      <td className="border border-gray-400 px-2 py-1">265</td>
    </tr>
  </tbody>
</table>
<p>An individual is selected at random from this population. The probability that this individual is sick knowing that he/she is between 60 and 80 years old is</p>`,
    options: ["A) \\frac{265}{13500}", "B) \\frac{140}{4000}", "C) \\frac{80}{2000}", "D) \\frac{140}{13500}", "E) \\frac{265}{4000}"],
    correctAnswer: 1,
    explanation: "Total sick (Men and Women) across all age groups is $265$.<br/>Sick in $20-40$ age group $= 50$, sick in $40-60$ age group $= 75$.<br/>Therefore, sick in $60-80$ age group $= 265 - (50 + 75) = 140$.<br/>Total smokers in $60-80$ age group $= 4000$.<br/>Conditional Probability $P(\\text{Sick} \\mid 60-80\\text{ years}) = \\frac{140}{4000}$."
  },
  {
    id: "est2_2021_may_q28",
    category: "System of Inequalities",
    question: "The solution of the system $\\begin{cases} 3 - x^2 \\le 0 \\\\ \\frac{x - 11}{x - 4} \\ge 2 \\end{cases}$ is",
    options: [
      "A) x \\in [-3, -\\sqrt{3}] \\cup [\\sqrt{3}, 4[",
      "B) x \\in ]-3, -\\sqrt{3}] \\cup [\\sqrt{3}, 4[",
      "C) x \\in ]-3, -\\sqrt{3}[ \\cup [\\sqrt{3}, 4[",
      "D) x \\in [-3, -\\sqrt{3}] \\cup [\\sqrt{3}, 4]",
      "E) x \\in [-3, -\\sqrt{3}] \\cup ]\\sqrt{3}, 4["
    ],
    correctAnswer: 0,
    explanation: "Solve the first inequality:<br/>$$3 - x^2 \\le 0 \\implies x^2 \\ge 3 \\implies x \\in (-\\infty, -\\sqrt{3}] \\cup [\\sqrt{3}, \\infty)$$<br/>Solve the second inequality:<br/>$$\\frac{x - 11}{x - 4} - 2 \\ge 0 \\implies \\frac{x - 11 - 2(x - 4)}{x - 4} \\ge 0 \\implies \\frac{-x - 3}{x - 4} \\ge 0 \\implies \\frac{x + 3}{x - 4} \\le 0$$<br/>This gives $x \\in [-3, 4)$ (excluding $x = 4$ where denominator is $0$).<br/>The intersection of $x \\in [-3, 4)$ and $x \\in (-\\infty, -\\sqrt{3}] \\cup [\\sqrt{3}, \\infty)$ is:<br/>$$x \\in [-3, -\\sqrt{3}] \\cup [\\sqrt{3}, 4[$$"
  },
  {
    id: "est2_2021_may_q29",
    category: "Polynomial Coefficients Matching",
    question: "The real numbers $m, n$ and $p$ such that $P(x) = (x^2 - 2)(m x^2 + n x + p)$ will be identical to $x^4 - x^3 - 3x^2 + 2x + 2$ are:",
    options: [
      "A) m = 1, n = -1, p = -1",
      "B) m = -1, n = -1, p = -1",
      "C) m = 1, n = 1, p = 1",
      "D) m = 1, n = 1, p = -1",
      "E) m = -1, n = -1, p = 1"
    ],
    correctAnswer: 0,
    explanation: "Expand $(x^2 - 2)(m x^2 + n x + p)$:<br/>$$m x^4 + n x^3 + (p - 2m) x^2 - 2n x - 2p$$<br/>Equating coefficients with $x^4 - x^3 - 3x^2 + 2x + 2$:<br/>• $x^4$: $m = 1$<br/>• $x^3$: $n = -1$<br/>• Constant term: $-2p = 2 \\implies p = -1$<br/>Check $x^2$: $p - 2m = -1 - 2(1) = -3$ (correct).<br/>Check $x$: $-2n = -2(-1) = 2$ (correct).<br/>Thus, $m = 1, n = -1, p = -1$."
  },
  {
    id: "est2_2021_may_q30",
    category: "Compound Probability",
    question: "A fair die is tossed and a card is randomly chosen from a deck of 52 cards. The probability that 'a multiple of three appears and a king or an ace is selected' is:",
    options: ["A) \\frac{8}{312}", "B) \\frac{16}{312}", "C) \\frac{8}{52}", "D) \\frac{16}{52}", "E) \\frac{16}{36}"],
    correctAnswer: 1,
    explanation: "• Die toss: multiples of $3$ on a $6$-sided die are $\\{3, 6\\}$ ($2$ outcomes out of $6$), so $P(\\text{die}) = \\frac{2}{6}$.<br/>• Card deck: Kings or Aces in $52$ cards $= 4 + 4 = 8$ cards, so $P(\\text{card}) = \\frac{8}{52}$.<br/>Since the events are independent:<br/>$$P = \\frac{2}{6} \\times \\frac{8}{52} = \\frac{16}{312}$$"
  },
  {
    id: "est2_2021_may_q31",
    category: "Permutations & Order",
    question: `<p className="mb-3">In a given school, the class of grade 12 is divided into three sections: Sociology and economics (SE), Life Sciences (LS) and General Sciences (GS). The students of this class are distributed as follows:</p>
<table className="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr className="bg-gray-100">
      <th className="border border-gray-400 px-2 py-1">Sections / Students</th>
      <th className="border border-gray-400 px-2 py-1">Boys</th>
      <th className="border border-gray-400 px-2 py-1">Girls</th>
      <th className="border border-gray-400 px-2 py-1">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-400 px-2 py-1">SE</td>
      <td className="border border-gray-400 px-2 py-1">17</td>
      <td className="border border-gray-400 px-2 py-1">21</td>
      <td className="border border-gray-400 px-2 py-1">38</td>
    </tr>
    <tr>
      <td className="border border-gray-400 px-2 py-1">LS</td>
      <td className="border border-gray-400 px-2 py-1">13</td>
      <td className="border border-gray-400 px-2 py-1">14</td>
      <td className="border border-gray-400 px-2 py-1">27</td>
    </tr>
    <tr>
      <td className="border border-gray-400 px-2 py-1">GS</td>
      <td className="border border-gray-400 px-2 py-1">14</td>
      <td className="border border-gray-400 px-2 py-1">5</td>
      <td className="border border-gray-400 px-2 py-1">19</td>
    </tr>
    <tr>
      <td className="border border-gray-400 px-2 py-1">Total</td>
      <td className="border border-gray-400 px-2 py-1">44</td>
      <td className="border border-gray-400 px-2 py-1">40</td>
      <td className="border border-gray-400 px-2 py-1">84</td>
    </tr>
  </tbody>
</table>
<p>The number of ways that three students can be selected from this class if exactly two of them are girls and if the order is respected is</p>`,
    options: ["A) 205,920", "B) 68,640", "C) 411,840", "D) 70,400", "E) 211,200"],
    correctAnswer: 0,
    explanation: "Total girls $= 40$, Total boys $= 44$.<br/>We select $3$ students in order: $2$ girls and $1$ boy.<br/>Number of orderings for $2$ girls and $1$ boy $= \\binom{3}{1} = 3$ (GGB, GBG, BGG).<br/>For a specific ordering (e.g. Girl, Girl, Boy):<br/>$$\\text{Ways} = 40 \\times 39 \\times 44 = 68,640$$<br/>Since order is respected across $3$ arrangements:<br/>$$\\text{Total Ways} = 3 \\times 68,640 = 205,920$$"
  },
  {
    id: "est2_2021_may_q32",
    category: "Descriptive Statistics & Means",
    question: `<p className="mb-3">A mining company extracts oil from an oilfield since the year 1963. The following table shows the quantity $y_i$, in tons, extracted during each year indicated by its rank $x_i$.</p>
<table className="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr className="bg-gray-100">
      <th className="border border-gray-400 px-2 py-1">Year</th>
      <th className="border border-gray-400 px-2 py-1">1963</th>
      <th className="border border-gray-400 px-2 py-1">1968</th>
      <th className="border border-gray-400 px-2 py-1">1973</th>
      <th className="border border-gray-400 px-2 py-1">1978</th>
      <th className="border border-gray-400 px-2 py-1">1983</th>
      <th className="border border-gray-400 px-2 py-1">1988</th>
      <th className="border border-gray-400 px-2 py-1">1993</th>
      <th className="border border-gray-400 px-2 py-1">1998</th>
      <th className="border border-gray-400 px-2 py-1">2003</th>
      <th className="border border-gray-400 px-2 py-1">2008</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-400 px-2 py-1">Rank $x_i$</td>
      <td className="border border-gray-400 px-2 py-1">0</td>
      <td className="border border-gray-400 px-2 py-1">1</td>
      <td className="border border-gray-400 px-2 py-1">2</td>
      <td className="border border-gray-400 px-2 py-1">3</td>
      <td className="border border-gray-400 px-2 py-1">4</td>
      <td className="border border-gray-400 px-2 py-1">5</td>
      <td className="border border-gray-400 px-2 py-1">6</td>
      <td className="border border-gray-400 px-2 py-1">7</td>
      <td className="border border-gray-400 px-2 py-1">8</td>
      <td className="border border-gray-400 px-2 py-1">9</td>
    </tr>
    <tr>
      <td className="border border-gray-400 px-2 py-1">Quantity $y_i$ (tons)</td>
      <td className="border border-gray-400 px-2 py-1">18.1</td>
      <td className="border border-gray-400 px-2 py-1">15.7</td>
      <td className="border border-gray-400 px-2 py-1">13.3</td>
      <td className="border border-gray-400 px-2 py-1">11</td>
      <td className="border border-gray-400 px-2 py-1">9.3</td>
      <td className="border border-gray-400 px-2 py-1">7.8</td>
      <td className="border border-gray-400 px-2 py-1">7.1</td>
      <td className="border border-gray-400 px-2 py-1">6.1</td>
      <td className="border border-gray-400 px-2 py-1">5.2</td>
      <td className="border border-gray-400 px-2 py-1">4.3</td>
    </tr>
  </tbody>
</table>
<p>The means $\\bar{x}$ and $\\bar{y}$ of the variables $x$ and $y$ respectively are</p>`,
    options: [
      "A) \\bar{x} = 4.5, \\bar{y} = 9.79",
      "B) \\bar{x} = 4, \\bar{y} = 9.79",
      "C) \\bar{x} = 4.5, \\bar{y} = 9",
      "D) \\bar{x} = 5, \\bar{y} = 9.79",
      "E) \\bar{x} = 4.5, \\bar{y} = 7.9"
    ],
    correctAnswer: 0,
    explanation: "Mean $\\bar{x} = \\frac{0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9}{10} = \\frac{45}{10} = 4.5$.<br/>Sum of $y_i = 18.1 + 15.7 + 13.3 + 11 + 9.3 + 7.8 + 7.1 + 6.1 + 5.2 + 4.3 = 97.9$.<br/>Mean $\\bar{y} = \\frac{97.9}{10} = 9.79$."
  },
  {
    id: "est2_2021_may_q33",
    category: "Right Triangles & Segment Division",
    question: `<p className="mb-3">The length of $\\overline{AB}$ in the adjacent right triangle at $C$ such that $AD = DB$ and $DC = BC = 1$ is</p>
<div className="flex justify-center my-4">
  <svg width="280" height="130" viewBox="0 0 280 130" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Right triangle ABC at C -->
    <polygon points="20,100 240,100 240,20" fill="none" stroke="#000" strokeWidth="2"/>
    <!-- Point D on AC -->
    <line x1="140" y1="100" x2="240" y2="20" stroke="#000" strokeWidth="1.5"/>
    <!-- Right angle at C -->
    <rect x="228" y="88" width="12" height="12" fill="none" stroke="#000" strokeWidth="1.5"/>
    <!-- Labels -->
    <text x="10" y="105" fontSize="14" fontWeight="bold">A</text>
    <text x="138" y="118" fontSize="14" fontWeight="bold">D</text>
    <text x="248" y="105" fontSize="14" fontWeight="bold">C</text>
    <text x="248" y="20" fontSize="14" fontWeight="bold">B</text>
  </svg>
</div>`,
    options: ["A) \\sqrt{10}", "B) 2\\sqrt{2}", "C) 2\\sqrt{10}", "D) \\sqrt{4 + 2\\sqrt{2}}", "E) 4 + 2\\sqrt{2}"],
    correctAnswer: 3,
    explanation: "In right triangle $\\triangle BDC$, $DC = 1$ and $BC = 1$.<br/>By Pythagorean theorem, $DB = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.<br/>Since $AD = DB$, $AD = \\sqrt{2}$.<br/>Thus, leg $AC = AD + DC = \\sqrt{2} + 1$.<br/>In right triangle $\\triangle ABC$ at $C$, find hypotenuse $AB$:<br/>$$AB = \\sqrt{AC^2 + BC^2} = \\sqrt{(\\sqrt{2} + 1)^2 + 1^2} = \\sqrt{(2 + 2\\sqrt{2} + 1) + 1} = \\sqrt{4 + 2\\sqrt{2}}$$"
  },
  {
    id: "est2_2021_may_q34",
    category: "Similar Triangles & Area Ratio",
    question: `<p className="mb-3">In the adjacent $\\triangle ABC$, $AD = 10$, $\\overline{MN}$ is parallel to $\\overline{BC}$ and $\\overline{MN}$ bisects the area of $\\triangle ABC$. The value of $ED$ is</p>
<div className="flex justify-center my-4">
  <svg width="220" height="180" viewBox="0 0 220 180" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Triangle ABC -->
    <polygon points="110,20 30,150 190,150" fill="none" stroke="#000" strokeWidth="2"/>
    <!-- Altitude AD -->
    <line x1="110" y1="20" x2="110" y2="150" stroke="#000" strokeWidth="1.5"/>
    <!-- Parallel line MN -->
    <line x1="55" y1="100" x2="165" y2="100" stroke="#000" strokeWidth="2"/>
    <!-- Right angle symbol at D -->
    <rect x="110" y="138" width="12" height="12" fill="none" stroke="#000" strokeWidth="1"/>
    <!-- Labels -->
    <text x="110" y="12" fontSize="14" fontWeight="bold" textAnchor="middle">A</text>
    <text x="18" y="155" fontSize="14" fontWeight="bold">B</text>
    <text x="195" y="155" fontSize="14" fontWeight="bold">C</text>
    <text x="110" y="168" fontSize="14" fontWeight="bold" textAnchor="middle">D</text>
    <text x="40" y="105" fontSize="14" fontWeight="bold">M</text>
    <text x="172" y="105" fontSize="14" fontWeight="bold">N</text>
    <text x="118" y="98" fontSize="14" fontWeight="bold">E</text>
  </svg>
</div>`,
    options: ["A) 10 - 5\\sqrt{2}", "B) 10 + 5\\sqrt{2}", "C) 5\\sqrt{10 + 2\\sqrt{2}}", "D) 5\\sqrt{2}", "E) 2\\sqrt{10}"],
    correctAnswer: 0,
    explanation: "Since $MN \\parallel BC$, $\\triangle AMN \\sim \\triangle ABC$.<br/>The ratio of areas is $\\frac{\\text{Area}(\\triangle AMN)}{\\text{Area}(\\triangle ABC)} = \\frac{1}{2}$.<br/>The ratio of corresponding linear dimensions is $\\sqrt{\\frac{1}{2}} = \\frac{\\sqrt{2}}{2}$.<br/>So height $AE = AD \\times \\frac{\\sqrt{2}}{2} = 10 \\times \\frac{\\sqrt{2}}{2} = 5\\sqrt{2}$.<br/>Therefore, $ED = AD - AE = 10 - 5\\sqrt{2}$."
  },
  {
    id: "est2_2021_may_q35",
    category: "Geometry & Shaded Area",
    question: `<p className="mb-3">A circle is inscribed in the square as shown in the adjacent figure. The area of the shaded region is:</p>
<div className="flex justify-center my-4">
  <svg width="200" height="200" viewBox="0 0 200 200" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Square -->
    <rect x="20" y="20" width="160" height="160" fill="#f97316" stroke="#000" strokeWidth="2"/>
    <!-- Inscribed Circle -->
    <circle cx="100" cy="100" r="80" fill="#ffffff" stroke="#000" strokeWidth="2"/>
    <!-- Cross axes -->
    <line x1="20" y1="100" x2="180" y2="100" stroke="#000" strokeWidth="1.5"/>
    <line x1="100" y1="20" x2="100" y2="180" stroke="#000" strokeWidth="1.5"/>
    <!-- Dimension labels -->
    <text x="100" y="55" fontSize="13" fontWeight="bold" textAnchor="middle">1</text>
    <text x="100" y="145" fontSize="13" fontWeight="bold" textAnchor="middle">1</text>
    <text x="60" y="105" fontSize="13" fontWeight="bold" textAnchor="middle">1</text>
    <text x="140" y="105" fontSize="13" fontWeight="bold" textAnchor="middle">1</text>
  </svg>
</div>`,
    options: ["A) 4 - \\pi", "B) 4 + \\pi", "C) 1 - \\pi", "D) 1 + \\pi", "E) 2 - \\pi"],
    correctAnswer: 0,
    explanation: "The radius of the inscribed circle is $r = 1$, so the side length of the square is $s = 2r = 2$.<br/>• $\\text{Area of square} = s^2 = 2^2 = 4$.<br/>• $\\text{Area of circle} = \\pi r^2 = \\pi (1^2) = \\pi$.<br/>The area of the shaded corner region outside the circle is:<br/>$$\\text{Area} = \\text{Area of square} - \\text{Area of circle} = 4 - \\pi$$"
  },
  {
    id: "est2_2021_may_q36",
    category: "Word Problems & Systems",
    question: "The total price of one kilogram of sugar and one kilogram of salt is 20 EGP. During an economic crisis, the price of sugar increased by 12 % and that of salt decreased by 15% such that the total price of 1 Kg of sugar and 1 Kg of salt became 22 EGP. Reem bought 5 Kg of sugar and 2 Kg of salt during the crisis. How much did she pay, rounded to the nearest integer?",
    options: ["A) 106 EGP", "B) 100 EGP", "C) 120 EGP", "D) 96 EGP", "E) 48 EGP"],
    correctAnswer: 0,
    explanation: "Let original sugar price $= S$ and salt price $= R$.<br/>$$S + R = 20 \\implies R = 20 - S$$<br/>New prices during crisis:<br/>• New sugar $= 1.12 S$<br/>• New salt $= 0.85 R = 0.85(20 - S)$<br/>Total new price for 1 kg of each:<br/>$$1.12 S + 17 - 0.85 S = 22 \\implies 0.27 S = 5 \\implies S = \\frac{500}{27} \\approx 18.52\\text{ EGP}$$<br/>New sugar price $= 1.12 \\times \\frac{500}{27} = \\frac{560}{27} \\approx 20.74\\text{ EGP}$.<br/>New salt price $= 0.85 \\times \\left(20 - \\frac{500}{27}\\right) = \\frac{34}{27} \\approx 1.26\\text{ EGP}$.<br/>Reem buys 5 kg new sugar and 2 kg new salt:<br/>$$\\text{Cost} = 5 \\left(\\frac{560}{27}\\right) + 2 \\left(\\frac{34}{27}\\right) = \\frac{2800 + 68}{27} = \\frac{2868}{27} \\approx 106.22 \\approx 106\\text{ EGP}$$"
  },
  {
    id: "est2_2021_may_q37",
    category: "Algebraic Expansion & Radicals",
    question: "Consider the polynomial $E(x) = (2x - 1)^2 + (x - 2)(1 - 2x)$. $E(1 + \\sqrt{2}) = c + d\\sqrt{2}$, where $c$ and $d$ are two integers such that",
    options: [
      "A) c = d = 5",
      "B) c = 6, d = -5",
      "C) c = -6, d = -5",
      "D) c = -6, d = 5",
      "E) c = 6, d = 5"
    ],
    correctAnswer: 4,
    explanation: "Factor $(2x - 1)$ out from $E(x)$:<br/>$$E(x) = (2x - 1)[(2x - 1) - (x - 2)] = (2x - 1)(x + 1)$$<br/>Substitute $x = 1 + \\sqrt{2}$:<br/>• $2x - 1 = 2(1 + \\sqrt{2}) - 1 = 1 + 2\\sqrt{2}$<br/>• $x + 1 = (1 + \\sqrt{2}) + 1 = 2 + \\sqrt{2}$<br/>Multiply the terms:<br/>$$E(1 + \\sqrt{2}) = (1 + 2\\sqrt{2})(2 + \\sqrt{2}) = 2 + \\sqrt{2} + 4\\sqrt{2} + 4 = 6 + 5\\sqrt{2}$$<br/>So $c = 6$ and $d = 5$."
  },
  {
    id: "est2_2021_may_q38",
    category: "Trigonometric Ratios & Line Angle",
    question: "In the xy-plane, consider a straight line $(D)$ passing through $A(-\\sqrt{3}, -3 - 2\\sqrt{3})$ and making an acute angle $\\alpha$ with the x-axis such that $\\cos \\alpha = \\frac{\\sqrt{3}}{3} \\sin \\alpha$. The value of $\\sin \\alpha$ and $\\cos \\alpha$ are respectively",
    options: [
      "A) -\\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{3}}{2}",
      "B) \\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{3}}{2}",
      "C) \\frac{\\sqrt{3}}{2}, \\frac{1}{2}",
      "D) -\\frac{\\sqrt{3}}{2}, \\frac{1}{2}",
      "E) \\frac{\\sqrt{3}}{2}, -\\frac{1}{2}"
    ],
    correctAnswer: 2,
    explanation: "Given $\\cos \\alpha = \\frac{\\sqrt{3}}{3} \\sin \\alpha \\implies \\frac{\\sin \\alpha}{\\cos \\alpha} = \\frac{3}{\\sqrt{3}} = \\sqrt{3} \\implies \\tan \\alpha = \\sqrt{3}$.<br/>Since $\\alpha$ is an acute angle ($0^\\circ < \\alpha < 90^\\circ$), $\\alpha = 60^\\circ$.<br/>Therefore:<br/>$$\\sin \\alpha = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2} \\quad \\text{and} \\quad \\cos \\alpha = \\cos 60^\\circ = \\frac{1}{2}$$"
  },
  {
    id: "est2_2021_may_q39",
    category: "Polynomial Simplification",
    question: "Consider the three expressions: $A = (x - 1)(x - 2)$, $B = (x - 2)(x - 3)$ and $C = (x - 3)(x - 4)$. $A - 2B + C$ is equal to",
    options: ["A) 1", "B) 2", "C) 3", "D) 4", "E) 5"],
    correctAnswer: 1,
    explanation: "Expand each expression:<br/>• $A = x^2 - 3x + 2$<br/>• $B = x^2 - 5x + 6 \\implies -2B = -2x^2 + 10x - 12$<br/>• $C = x^2 - 7x + 12$<br/>Adding them up:<br/>$$A - 2B + C = (x^2 - 2x^2 + x^2) + (-3x + 10x - 7x) + (2 - 12 + 12) = 0 + 0 + 2 = 2$$"
  },
  {
    id: "est2_2021_may_q40",
    category: "Parallel Lines & Transversals",
    question: `<p className="mb-3">In the adjacent figure, if the two lines $(PQ)$ and $(RS)$ are parallel, then $x$ is equal to</p>
<div className="flex justify-center my-4">
  <svg width="300" height="150" viewBox="0 0 300 150" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Line PQ -->
    <line x1="20" y1="30" x2="280" y2="30" stroke="#000" strokeWidth="2"/>
    <circle cx="20" cy="30" r="3" fill="#000"/>
    <circle cx="280" cy="30" r="3" fill="#000"/>
    <text x="10" y="35" fontSize="13" fontWeight="bold">P</text>
    <text x="285" y="35" fontSize="13" fontWeight="bold">Q</text>
    <!-- Line RS -->
    <line x1="20" y1="120" x2="280" y2="120" stroke="#000" strokeWidth="2"/>
    <circle cx="20" cy="120" r="3" fill="#000"/>
    <circle cx="280" cy="120" r="3" fill="#000"/>
    <text x="10" y="125" fontSize="13" fontWeight="bold">R</text>
    <text x="285" y="125" fontSize="13" fontWeight="bold">S</text>
    <!-- Zig-zag lines meeting at vertex x -->
    <line x1="160" y1="30" x2="120" y2="75" stroke="#000" strokeWidth="2"/>
    <line x1="120" y1="75" x2="160" y2="120" stroke="#000" strokeWidth="2"/>
    <!-- Angles -->
    <text x="150" y="48" fontSize="12" fontWeight="bold">50°</text>
    <text x="110" y="80" fontSize="13" fontWeight="bold" textAnchor="end">x</text>
    <text x="150" y="112" fontSize="12" fontWeight="bold">110°</text>
  </svg>
</div>`,
    options: ["A) 50°", "B) 110°", "C) 120°", "D) 60°", "E) 100°"],
    correctAnswer: 2,
    explanation: "Draw an auxiliary line through vertex $x$ parallel to lines $(PQ)$ and $(RS)$.<br/>• Upper portion of angle $x = 50^\\circ$ (alternate interior angle to $50^\\circ$).<br/>• Lower portion of angle $x = 180^\\circ - 110^\\circ = 70^\\circ$ (consecutive interior angle to $110^\\circ$).<br/>Summing both components:<br/>$$x = 50^\\circ + 70^\\circ = 120^\\circ$$"
  },
  {
    id: "est2_2021_may_q41",
    category: "Rational Function Range",
    question: "The largest real range of the function $y = 1 - \\frac{1}{x}$ is",
    options: [
      "A) y > 0",
      "B) All Real numbers for y except y = 1",
      "C) y \\neq 0",
      "D) y \\ge 0",
      "E) y \\le 0"
    ],
    correctAnswer: 1,
    explanation: "As $x$ ranges over all non-zero real numbers ($x \\neq 0$), the term $\\frac{1}{x}$ can take any real value except $0$.<br/>Therefore, $y = 1 - \\frac{1}{x}$ can take any real value except $1 - 0 = 1$.<br/>The range is <b>All Real numbers for y except y = 1</b>."
  },
  {
    id: "est2_2021_may_q42",
    category: "Linear Systems Word Problem",
    question: "A company runs three production lines that together have an output of 54 parts/hour. Twice the production of the second line is equal to the combined output of the other two lines, and the output of the third line is three parts per hour more than the second line. The production rate of the first line $x$, the production rate of the second line $y$ and that of the third one $z$ are:",
    options: [
      "A) x = 21, y = 18, z = 15",
      "B) x = 18, y = 21, z = 15",
      "C) x = 15, y = 21, z = 18",
      "D) x = 21, y = 15, z = 18",
      "E) x = 15, y = 18, z = 21"
    ],
    correctAnswer: 4,
    explanation: "Set up the system of 3 linear equations:<br/>1) $x + y + z = 54$<br/>2) $2y = x + z \\implies x + z = 2y$<br/>3) $z = y + 3$<br/><br/>Substitute (2) into (1):<br/>$$2y + y = 54 \\implies 3y = 54 \\implies y = 18$$<br/>From (3): $z = 18 + 3 = 21$.<br/>From (1): $x = 54 - 18 - 21 = 15$.<br/>Thus, $x = 15, y = 18, z = 21$."
  },
  {
    id: "est2_2021_may_q43",
    category: "Calculus & Tangent Line",
    question: "What is the equation of the tangent to the curve of function $f$ defined by $f(x) = x^2 + 6x + 8$ at a point of abscissa 1?",
    options: [
      "A) y = -3x + 18",
      "B) y = 8x + 18",
      "C) y = 8x + 7",
      "D) y = -3x + 7",
      "E) y = 8x - 7"
    ],
    correctAnswer: 2,
    explanation: "1) Find point of tangency at $x = 1$:<br/>$$f(1) = 1^2 + 6(1) + 8 = 15 \\implies (1, 15)$$<br/>2) Find derivative for slope $m$:<br/>$$f'(x) = 2x + 6 \\implies m = f'(1) = 2(1) + 6 = 8$$<br/>3) Write point-slope equation:<br/>$$y - 15 = 8(x - 1) \\implies y = 8x - 8 + 15 \\implies y = 8x + 7$$"
  },
  {
    id: "est2_2021_may_q44",
    category: "Rational & Quadratic Systems",
    question: "The solution of the system defined by $\\begin{cases} x^2 - x - 2 \\ge 0 \\\\ \\frac{x - 3}{x + 2} \\le 0 \\end{cases}$ is",
    options: [
      "A) ]-\\infty, -1] \\cup [2, +\\infty[",
      "B) ]-2, 3]",
      "C) ]-2, -1] \\cup [2, 3[",
      "D) ]-2, -1] \\cup [2, 3]",
      "E) [-2, -1] \\cup [2, 3["
    ],
    correctAnswer: 3,
    explanation: "• First inequality: $x^2 - x - 2 \\ge 0 \\implies (x - 2)(x + 1) \\ge 0 \\implies x \\in (-\\infty, -1] \\cup [2, \\infty)$.<br/>• Second inequality: $\\frac{x - 3}{x + 2} \\le 0 \\implies x \\in (-2, 3]$ (excluding $x = -2$).<br/>Intersection of both solutions:<br/>$$x \\in ]-2, -1] \\cup [2, 3]$$"
  },
  {
    id: "est2_2021_may_q45",
    category: "Limits at Infinity",
    question: "$\\lim_{x \\to +\\infty} \\frac{\\sqrt{x^2 + 4x + 1} - 1}{x}$ is",
    options: ["A) 2", "B) +\\infty", "C) 0", "D) 1", "E) -\\infty"],
    correctAnswer: 3,
    explanation: "For $x > 0$, divide numerator and denominator by $x = \\sqrt{x^2}$:<br/>$$\\lim_{x \\to +\\infty} \\frac{\\frac{\\sqrt{x^2 + 4x + 1}}{x} - \\frac{1}{x}}{1} = \\lim_{x \\to +\\infty} \\left(\\sqrt{1 + \\frac{4}{x} + \\frac{1}{x^2}} - \\frac{1}{x}\\right)$$<br/>$$= \\sqrt{1 + 0 + 0} - 0 = 1$$"
  },
  {
    id: "est2_2021_may_q46",
    category: "Cubic Curves & Extrema",
    question: `<p className="mb-3">Suppose that the adjacent curve $(h)$ is the curve representing the function $f$ defined by $f(x) = ax^3 + bx^2$. Graphically,</p>
<div className="flex justify-center my-4">
  <svg width="300" height="260" viewBox="-100 -200 300 260" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Grid lines -->
    <path d="M-100,-180 H200 M-100,-140 H200 M-100,-100 H200 M-100,-60 H200 M-100,-20 H200 M-100,20 H200" stroke="#e5e7eb" strokeWidth="1"/>
    <path d="M-60,-200 V50 M-20,-200 V50 M20,-200 V50 M60,-200 V50 M100,-200 V50 M140,-200 V50 M180,-200 V50" stroke="#e5e7eb" strokeWidth="1"/>
    <!-- Axes -->
    <line x1="-100" y1="0" x2="200" y2="0" stroke="#000" strokeWidth="2"/>
    <line x1="0" y1="-200" x2="0" y2="50" stroke="#000" strokeWidth="2"/>
    <!-- Arrows -->
    <polygon points="200,0 192,-4 192,4" fill="#000"/>
    <polygon points="0,-200 -4,-192 4,-192" fill="#000"/>
    <!-- Axis labels -->
    <text x="190" y="-8" fontSize="13" fontStyle="italic">x</text>
    <text x="8" y="-190" fontSize="13" fontStyle="italic">y</text>
    <text x="-12" y="14" fontSize="12" fontStyle="italic">O</text>
    <!-- Ticks & numbers -->
    <text x="40" y="14" fontSize="11" textAnchor="middle">1</text>
    <text x="80" y="14" fontSize="11" textAnchor="middle">2</text>
    <text x="120" y="14" fontSize="11" textAnchor="middle">3</text>
    <text x="-14" y="-40" fontSize="11">1</text>
    <text x="-18" y="-160" fontSize="11">-4</text>
    <!-- Curve y = x^3 - 3x^2 (scaled: 1 unit = 40px) -->
    <!-- (0,0), (1,-2), (2,-4), (3,0) -->
    <path d="M -20,64 C -5,20 0,0 0,0 C 20,-20 30,-40 40,-80 C 60,-120 70,-160 80,-160 C 95,-160 110,-60 120,0 C 130,60 140,120 150,180" fill="none" stroke="#000" strokeWidth="2.5"/>
    <circle cx="80" cy="-160" r="3.5" fill="#ef4444"/>
    <text x="15" y="-170" fontSize="12" fontWeight="bold" fill="#ef4444">(2, -4)</text>
  </svg>
</div>`,
    options: [
      "A) a = 1 and b = -3",
      "B) a = -1 and b = -3",
      "C) a = -3 and b = 1",
      "D) a = 1 and b = 3",
      "E) a = 3 and b = -1"
    ],
    correctAnswer: 0,
    explanation: "From the graph, the function $f(x) = ax^3 + bx^2$ has a local minimum at $(2, -4)$ and a root at $x = 3$.<br/>Derivative $f'(x) = 3ax^2 + 2bx = x(3ax + 2b)$.<br/>Setting $f'(2) = 0 \\implies 3a(2) + 2b = 0 \\implies 6a + 2b = 0 \\implies b = -3a$.<br/>Substitute $x = 2$ into $f(x)$:<br/>$$f(2) = a(2^3) + b(2^2) = 8a + 4(-3a) = -4a$$<br/>From the graph, $f(2) = -4 \\implies -4a = -4 \\implies a = 1$.<br/>Then $b = -3(1) = -3$.<br/>Thus, $a = 1$ and $b = -3$."
  },
  {
    id: "est2_2021_may_q47",
    category: "Rational Functions & Symmetry",
    question: "The function $f$ defined by $f(x) = \\frac{x^2 - 3x - 3}{x - 4}$ admits the center of symmetry",
    options: ["A) (-4, 5)", "B) (4, -5)", "C) (-4, -5)", "D) (5, 4)", "E) (4, 5)"],
    correctAnswer: 4,
    explanation: "Perform polynomial division on $f(x)$:<br/>$$f(x) = \\frac{x^2 - 3x - 3}{x - 4} = (x + 1) + \\frac{1}{x - 4}$$<br/>• Vertical asymptote: $x = 4$.<br/>• Oblique (slant) asymptote: $y = x + 1$.<br/>The center of symmetry for a rational function with an oblique asymptote is the intersection point of its asymptotes:<br/>At $x = 4$, $y = 4 + 1 = 5$.<br/>So the center of symmetry is <b>(4, 5)</b>."
  },
  {
    id: "est2_2021_may_q48",
    category: "Linear Systems Word Problem",
    question: "On a given day, a department store sold 40 shirts. The shirts come in three styles: Casual, sports and dress. A casual shirt costs $20, a sports shirt costs $40, and a dress shirt costs $60. The store sold $1080 worth of these shirts on that day and the number of casual shirts exceeded by 20 the combined numbers of the sports and dress shirts. The number of shirts of each type is:",
    options: [
      "A) 6 casual shirts, 30 sport and 4 dress shirts",
      "B) 30 casual shirts, 7 sport and 3 dress shirts",
      "C) 30 casual shirts, 6 sport and 4 dress shirts",
      "D) 4 casual shirts, 6 sport and 30 dress shirts",
      "E) 6 casual shirts, 4 sport and 30 dress shirts"
    ],
    correctAnswer: 2,
    explanation: "Let $c, s, d$ be the number of casual, sports, and dress shirts.<br/>1) $c + s + d = 40$<br/>2) $c = (s + d) + 20 \\implies c - (s + d) = 20$<br/>Adding equations (1) and (2):<br/>$$2c = 60 \\implies c = 30$$<br/>Then $s + d = 10 \\implies d = 10 - s$.<br/>3) Total revenue equation:<br/>$$20c + 40s + 60d = 1080 \\implies 20(30) + 40s + 60(10 - s) = 1080$$<br/>$$600 + 40s + 600 - 60s = 1080 \\implies 1200 - 20s = 1080 \\implies 20s = 120 \\implies s = 6$$<br/>Then $d = 10 - 6 = 4$.<br/>So 30 casual shirts, 6 sport, and 4 dress shirts."
  },
  {
    id: "est2_2021_may_q49",
    category: "Inequality Properties",
    question: "If $a, b,$ and $c$ are three positive numbers and if $a > b$, which of the following is not necessarily true?",
    options: [
      "A) a + c > b + c",
      "B) a - c > b - c",
      "C) \\frac{a}{c} > \\frac{b}{c}",
      "D) \\frac{c}{a} > \\frac{c}{b}",
      "E) \\frac{a}{b} > 1"
    ],
    correctAnswer: 3,
    explanation: "Given $a > b > 0$ and $c > 0$:<br/>• A) Adding $c$ preserves inequality: $a + c > b + c$ (True).<br/>• B) Subtracting $c$ preserves inequality: $a - c > b - c$ (True).<br/>• C) Dividing by positive $c$ preserves inequality: $\\frac{a}{c} > \\frac{b}{c}$ (True).<br/>• D) Taking reciprocals of positive numbers reverses the inequality: $a > b \\implies \\frac{1}{a} < \\frac{1}{b} \\implies \\frac{c}{a} < \\frac{c}{b}$. So $\\frac{c}{a} > \\frac{c}{b}$ is <b>FALSE</b>.<br/>• E) Since $a > b > 0$, $\\frac{a}{b} > 1$ (True)."
  },
  {
    id: "est2_2021_may_q50",
    category: "Exponent Simplification",
    question: "The simplest form of $\\frac{2^{y+4} - 2(2^y)}{2(2^{y+3})}$ is:",
    options: ["A) \\frac{1}{4}", "B) \\frac{1}{2}", "C) \\frac{1}{8}", "D) \\frac{5}{8}", "E) \\frac{7}{8}"],
    correctAnswer: 4,
    explanation: "Factor out $2^y$ from numerator and denominator:<br/>$$\\text{Numerator} = 2^{y+4} - 2^{y+1} = 2^y(2^4 - 2^1) = 2^y(16 - 2) = 14 \\cdot 2^y$$<br/>$$\\text{Denominator} = 2 \\cdot 2^{y+3} = 2^{y+4} = 16 \\cdot 2^y$$<br/>Divide the numerator by denominator:<br/>$$\\frac{14 \\cdot 2^y}{16 \\cdot 2^y} = \\frac{14}{16} = \\frac{7}{8}$$"
  }
];
