import { Question } from '../../types';

export const EST2_2021_JUNE: Question[] = [
  {
    id: "est2_2021_june_q1",
    category: "Polynomial Identity & Zeros",
    question: "If $f(x) = 2ax^2 + (3 - b)x + 7$ and $g(x) = (a - 1)x^2 + 2bx + 7$ are identical, what are the zeros of function $f$?",
    options: ["A) -1.54 and 4.54", "B) -2.19 and 3.19", "C) -1.27 and 2.77", "D) -1.44 and 2.44", "E) -2.44 and 1.44"],
    correctAnswer: 3,
    explanation: "Since $f(x)$ and $g(x)$ are identical, equate corresponding coefficients:<br/>• $2a = a - 1 \\implies a = -1$<br/>• $3 - b = 2b \\implies 3b = 3 \\implies b = 1$<br/>Substitute $a = -1$ and $b = 1$ into $f(x)$:<br/>$$f(x) = 2(-1)x^2 + (3 - 1)x + 7 = -2x^2 + 2x + 7$$<br/>Find the zeros by solving $-2x^2 + 2x + 7 = 0 \\implies 2x^2 - 2x - 7 = 0$:<br/>$$x = \\frac{2 \\pm \\sqrt{(-2)^2 - 4(2)(-7)}}{2(2)} = \\frac{2 \\pm \\sqrt{4 + 56}}{4} = \\frac{2 \\pm \\sqrt{60}}{4} = \\frac{1 \\pm \\sqrt{15}}{2}$$<br/>Since $\\sqrt{15} \\approx 3.873$:<br/>$$x_1 = \\frac{1 + 3.873}{2} \\approx 2.44, \\quad x_2 = \\frac{1 - 3.873}{2} \\approx -1.44$$"
  },
  {
    id: "est2_2021_june_q2",
    category: "Geometric Sequences",
    question: "$3m, 2m + 5,$ and $4m - 5$ are three consecutive terms of a geometric sequence. If $m$ has a negative value, what is the value of the common ratio of this sequence?",
    options: ["A) -10", "B) -2", "C) -1/2", "D) 1/2", "E) 1"],
    correctAnswer: 1,
    explanation: "In a geometric sequence, the ratio of consecutive terms is constant:<br/>$$\\frac{2m + 5}{3m} = \\frac{4m - 5}{2m + 5}$$<br/>Cross-multiply:<br/>$$(2m + 5)^2 = 3m(4m - 5) \\implies 4m^2 + 20m + 25 = 12m^2 - 15m$$<br/>$$8m^2 - 35m - 25 = 0 \\implies (8m + 5)(m - 5) = 0$$<br/>Since $m$ is negative, $m = -\\frac{5}{8}$.<br/>First term $a_1 = 3\\left(-\\frac{5}{8}\\right) = -\\frac{15}{8}$.<br/>Second term $a_2 = 2\\left(-\\frac{5}{8}\\right) + 5 = -\\frac{5}{4} + 5 = \\frac{15}{4}$.<br/>The common ratio $r = \\frac{a_2}{a_1} = \\frac{15/4}{-15/8} = -2$."
  },
  {
    id: "est2_2021_june_q3",
    category: "Slope & Perpendicular Lines",
    question: "What is the slope of the line perpendicular to the one passing through $(-4, 5)$ and $(3, 7)$?",
    options: ["A) -7/2", "B) -1", "C) -2/7", "D) 2/7", "E) 7/2"],
    correctAnswer: 0,
    explanation: "First, find the slope $m_1$ of the line passing through $(-4, 5)$ and $(3, 7)$:<br/>$$m_1 = \\frac{7 - 5}{3 - (-4)} = \\frac{2}{7}$$<br/>The slope $m_2$ of a perpendicular line is the negative reciprocal:<br/>$$m_2 = -\\frac{1}{m_1} = -\\frac{7}{2}$$"
  },
  {
    id: "est2_2021_june_q4",
    category: "Composite Function Domain",
    question: "If $f(x) = \\sqrt{x - 1}$ and $g(x) = x^2$, what is the domain of $(f \\circ g)(x)$?",
    options: [
      "A) All x such that x >= 1",
      "B) All x such that x <= -1",
      "C) All x such that x <= -1 or x >= 1",
      "D) All x such that x <= -1 and x >= 1",
      "E) All real numbers"
    ],
    correctAnswer: 2,
    explanation: "Form the composite function:<br/>$$(f \\circ g)(x) = f(g(x)) = f(x^2) = \\sqrt{x^2 - 1}$$<br/>For the square root expression to be defined, the radicand must be non-negative:<br/>$$x^2 - 1 \\ge 0 \\implies x^2 \\ge 1 \\implies x \\le -1 \\quad \\text{or} \\quad x \\ge 1$$"
  },
  {
    id: "est2_2021_june_q5",
    category: "Trigonometry & Right Triangles",
    question: `<p className="mb-3">Using the adjacent diagram at the right, if $3 \\tan \\beta = 2$, what is the value of $t$?</p>
<div className="flex justify-center my-4">
  <svg width="260" height="180" viewBox="0 0 260 180" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Right triangle ABC at B -->
    <polygon points="30,20 30,150 230,150" fill="none" stroke="#000" strokeWidth="2"/>
    <!-- Right angle symbol at B -->
    <rect x="30" y="138" width="12" height="12" fill="none" stroke="#000" strokeWidth="1.5"/>
    <!-- Angle beta at C -->
    <path d="M 210,150 A 20 20 0 0 0 203,138" fill="none" stroke="#000" strokeWidth="1.5"/>
    <text x="195" y="145" fontSize="13" fontStyle="italic">β</text>
    <!-- Angle 90 - beta at A -->
    <path d="M 30,40 A 20 20 0 0 0 45,30" fill="none" stroke="#000" strokeWidth="1.5"/>
    <text x="45" y="25" fontSize="12" fontStyle="italic">90° - β</text>
    <!-- Side labels -->
    <text x="18" y="90" fontSize="14" fontStyle="italic">h</text>
    <text x="130" y="165" fontSize="14" fontStyle="italic" textAnchor="middle">x</text>
    <text x="135" y="80" fontSize="14" fontStyle="italic">t</text>
    <!-- Vertices -->
    <text x="25" y="15" fontSize="14" fontWeight="bold">A</text>
    <text x="15" y="155" fontSize="14" fontWeight="bold">B</text>
    <text x="238" y="155" fontSize="14" fontWeight="bold">C</text>
  </svg>
</div>`,
    options: ["A) 2/3", "B) 3/2", "C) 2\\sqrt{13}", "D) \\sqrt{2/3}", "E) \\sqrt{13}"],
    correctAnswer: 4,
    explanation: "Given $3 \\tan \\beta = 2 \\implies \\tan \\beta = \\frac{2}{3}$.<br/>In right triangle $ABC$, $\\tan \\beta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{h}{x} = \\frac{2}{3}$.<br/>Setting $h = 2$ and $x = 3$, the hypotenuse $t$ is calculated via the Pythagorean theorem:<br/>$$t = \\sqrt{h^2 + x^2} = \\sqrt{2^2 + 3^2} = \\sqrt{4 + 9} = \\sqrt{13}$$"
  },
  {
    id: "est2_2021_june_q6",
    category: "Linear Systems & Quotients",
    question: "If $x + 4y = -10$ and $2x = 35 + 3y$, what is the value of twice the quotient of $x$ and $y$?",
    options: ["A) -4", "B) -2", "C) 1/2", "D) 2", "E) 4"],
    correctAnswer: 0,
    explanation: "From the first equation: $x = -10 - 4y$.<br/>Substitute $x$ into the second equation:<br/>$$2(-10 - 4y) = 35 + 3y \\implies -20 - 8y = 35 + 3y \\implies 11y = -55 \\implies y = -5$$<br/>Find $x = -10 - 4(-5) = -10 + 20 = 10$.<br/>The quotient of $x$ and $y$ is $\\frac{x}{y} = \\frac{10}{-5} = -2$.<br/>Twice the quotient is $2 \\times (-2) = -4$."
  },
  {
    id: "est2_2021_june_q7",
    category: "Combinatorics & Counting",
    question: "How many 2-digit numbers are even but do not have a zero digit?",
    options: ["A) 27", "B) 30", "C) 36", "D) 40", "E) 45"],
    correctAnswer: 2,
    explanation: "A 2-digit number consists of a tens digit $A$ and a units digit $B$.<br/>• Tens digit $A \\in \\{1, 2, 3, 4, 5, 6, 7, 8, 9\\}$ (9 choices, since 0 cannot be the leading digit).<br/>• Units digit $B$ must be even and non-zero: $B \\in \\{2, 4, 6, 8\\}$ (4 choices).<br/>By the fundamental counting principle:<br/>$$\\text{Total Numbers} = 9 \\times 4 = 36$$"
  },
  {
    id: "est2_2021_june_q8",
    category: "Area of Geometric Regions",
    question: `<p className="mb-3">The length of the adjacent rectangle is equal to $14\\text{ cm}$, and the width is equal to $6\\text{ cm}$. What is the area of the shaded region? (figure is not drawn to scale)</p>
<div className="flex justify-center my-4">
  <svg width="280" height="140" viewBox="0 0 280 140" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Rectangle 14 x 6 -->
    <rect x="20" y="20" width="240" height="100" fill="none" stroke="#000" strokeWidth="2"/>
    <!-- Shaded band -->
    <polygon points="20,45 200,20 260,120 45,120" fill="#cbd5e1" stroke="#000" strokeWidth="2"/>
    <!-- Labels -->
    <text x="215" y="15" fontSize="12" fontWeight="bold">3</text>
    <text x="5" y="48" fontSize="12" fontWeight="bold">1.5</text>
    <text x="30" y="135" fontSize="12" fontWeight="bold">1.5</text>
  </svg>
</div>`,
    options: ["A) 4.5 cm^2", "B) 21.75 cm^2", "C) 24.75 cm^2", "D) 37.5 cm^2", "E) 84 cm^2"],
    correctAnswer: 1,
    explanation: "Total area of the rectangle $= 14 \\times 6 = 84\\text{ cm}^2$.<br/>Unshaded areas comprise two triangles:<br/>• Top-left triangle: base $= 14 - 3 = 11$, height $= 6 - 1.5 = 4.5$.<br/>$$\\text{Area}_1 = \\frac{1}{2} \\times 11 \\times 4.5 = 24.75\\text{ cm}^2$$<br/>• Bottom-right triangle: base $= 14 - 1.5 = 12.5$, height $= 6$.<br/>$$\\text{Area}_2 = \\frac{1}{2} \\times 12.5 \\times 6 = 37.5\\text{ cm}^2$$<br/>Total unshaded area $= 24.75 + 37.5 = 62.25\\text{ cm}^2$.<br/>Shaded area $= 84 - 62.25 = 21.75\\text{ cm}^2$."
  },
  {
    id: "est2_2021_june_q9",
    category: "3D Geometry & Volume",
    question: `<p className="mb-3">The adjacent figure at the right shows a shape made out of a cone and a cylinder. The total volume of this shape is $39\\pi$ cubic units. If the height of the cylinder is 4 units, and the radius is 3 units, what is the height of the cone?</p>
<div className="flex justify-center my-4">
  <svg width="200" height="220" viewBox="0 0 200 220" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Cylinder -->
    <ellipse cx="100" cy="110" rx="60" ry="18" fill="#e2e8f0" stroke="#000" strokeWidth="2"/>
    <ellipse cx="100" cy="190" rx="60" ry="18" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="4 4"/>
    <line x1="40" y1="110" x2="40" y2="190" stroke="#000" strokeWidth="2"/>
    <line x1="160" y1="110" x2="160" y2="190" stroke="#000" strokeWidth="2"/>
    <!-- Cone -->
    <polygon points="100,20 40,110 160,110" fill="#cbd5e1" stroke="#000" strokeWidth="2"/>
  </svg>
</div>`,
    options: ["A) 1 unit", "B) 2 units", "C) 3 units", "D) 4 units", "E) 5 units"],
    correctAnswer: 0,
    explanation: "Volume of cylinder $V_{\\text{cyl}} = \\pi r^2 h_1 = \\pi (3^2)(4) = 36\\pi$.<br/>Volume of cone $V_{\\text{cone}} = \\frac{1}{3} \\pi r^2 h_2 = \\frac{1}{3} \\pi (3^2) h_2 = 3\\pi h_2$.<br/>Total volume is given as $39\\pi$:<br/>$$36\\pi + 3\\pi h_2 = 39\\pi \\implies 3\\pi h_2 = 3\\pi \\implies h_2 = 1\\text{ unit}$$"
  },
  {
    id: "est2_2021_june_q10",
    category: "Absolute Value Equations",
    question: "If $|x - 3| = 2x$, which of the following is the correct value of $x$?",
    options: ["A) -3", "B) -1", "C) 0", "D) 1", "E) 3"],
    correctAnswer: 3,
    explanation: "Split into two cases:<br/>• Case 1: $x - 3 = 2x \\implies x = -3$. Check: $|-3 - 3| = |-6| = 6 \\neq 2(-3) = -6$ (extraneous).<br/>• Case 2: $x - 3 = -2x \\implies 3x = 3 \\implies x = 1$. Check: $|1 - 3| = |-2| = 2 = 2(1)$ (valid).<br/>Thus, $x = 1$."
  },
  {
    id: "est2_2021_june_q11",
    category: "Independent Probability",
    question: "During the first 4 months of this academic year, Ross passed 70% of his math assignments and 55% of his chemistry assignments, independently one of another. What is the chance that on the next attempt of each subject, he will pass the math assignment but not the chemistry?",
    options: ["A) 1", "B) 0.385", "C) 0.315", "D) 0.165", "E) 0.135"],
    correctAnswer: 2,
    explanation: "$P(\\text{Pass Math}) = 0.70$.<br/>$P(\\text{Not Pass Chemistry}) = 1 - 0.55 = 0.45$.<br/>Since the events are independent:<br/>$$P = 0.70 \\times 0.45 = 0.315$$"
  },
  {
    id: "est2_2021_june_q12",
    category: "Exponential Equations",
    question: "What is the value of $2x^3$ if $3125 = 5^{3x - 4}$?",
    options: ["A) 3", "B) 6", "C) 27", "D) 54", "E) 250"],
    correctAnswer: 3,
    explanation: "Express $3125$ as a power of 5: $3125 = 5^5$.<br/>$$5^{3x - 4} = 5^5 \\implies 3x - 4 = 5 \\implies 3x = 9 \\implies x = 3$$<br/>Evaluate $2x^3$:<br/>$$2x^3 = 2(3^3) = 2(27) = 54$$"
  },
  {
    id: "est2_2021_june_q13",
    category: "Oblique Asymptotes",
    question: "What is the equation of the oblique asymptote of the function $f(x) = \\frac{3x^2 - 4x + 1}{2x + 1}$?",
    options: [
      "A) y = 1.5x - 2",
      "B) y = 1.5x - 2.75",
      "C) y = 1.5x",
      "D) y = 1.5x + 2.75",
      "E) y = 1.5x + 2"
    ],
    correctAnswer: 1,
    explanation: "Perform polynomial long division $\\frac{3x^2 - 4x + 1}{2x + 1}$:<br/>$$\\frac{3x^2}{2x} = 1.5x$$<br/>Subtract $1.5x(2x + 1) = 3x^2 + 1.5x$ from $3x^2 - 4x + 1$ to get $-5.5x + 1$.<br/>$$\\frac{-5.5x}{2x} = -2.75$$<br/>Thus, $f(x) = 1.5x - 2.75 + \\frac{3.75}{2x + 1}$.<br/>The oblique asymptote is $y = 1.5x - 2.75$."
  },
  {
    id: "est2_2021_june_q14",
    category: "Circle Geometry & Radius",
    question: "$x^2 - 6x + y^2 - 4y + 2 = 0$ represents the equation of a circle $(C)$. What is the radius of this circle?",
    options: ["A) \\sqrt{2}", "B) 2", "C) \\sqrt{11}", "D) 5.5", "E) 11"],
    correctAnswer: 2,
    explanation: "Complete the squares for $x$ and $y$:<br/>$$(x^2 - 6x + 9) + (y^2 - 4y + 4) = -2 + 9 + 4$$<br/>$$(x - 3)^2 + (y - 2)^2 = 11$$<br/>The radius is $r = \\sqrt{11}$."
  },
  {
    id: "est2_2021_june_q15",
    category: "3D Geometry & Cube Surface Area",
    question: "$A(-5.84, 2.27, 0)$ and $G(-3, 2, 0)$ are two vertices of a cube $AGCFEDBH$. What is the surface area of this cube?",
    options: ["A) 2.85 square units", "B) 15.41 square units", "C) 48.83 square units", "D) 237.47 square units", "E) 2384.46 square units"],
    correctAnswer: 2,
    explanation: "Find the edge length $s$ using 3D distance between $A$ and $G$:<br/>$$s = \\sqrt{(-3 - (-5.84))^2 + (2 - 2.27)^2 + (0 - 0)^2} = \\sqrt{(2.84)^2 + (-0.27)^2} = \\sqrt{8.0656 + 0.0729} = \\sqrt{8.1385} \\approx 2.853$$<br/>Total surface area of the cube $= 6 s^2 = 6 (8.1385) \\approx 48.83$ square units."
  },
  {
    id: "est2_2021_june_q16",
    category: "Angles & Lines",
    question: `<p className="mb-3">Using the diagram below, what is the measure of $\\angle BDC$?</p>
<div className="flex justify-center my-4">
  <svg width="260" height="200" viewBox="0 0 260 200" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Center vertex D -->
    <!-- Line AB -->
    <line x1="30" y1="60" x2="230" y2="110" stroke="#000" strokeWidth="2"/>
    <!-- Line EF -->
    <line x1="120" y1="20" x2="160" y2="180" stroke="#000" strokeWidth="2"/>
    <!-- Ray DC -->
    <line x1="135" y1="95" x2="210" y2="70" stroke="#000" strokeWidth="2"/>
    <!-- Right angle symbol at angle CDF -->
    <rect x="135" y="95" width="12" height="12" transform="rotate(-15 135 95)" fill="none" stroke="#000" strokeWidth="1.5"/>
    <!-- Labels -->
    <text x="20" y="55" fontSize="13" fontWeight="bold">A</text>
    <text x="238" y="115" fontSize="13" fontWeight="bold">B</text>
    <text x="218" y="68" fontSize="13" fontWeight="bold">C</text>
    <text x="115" y="15" fontSize="13" fontWeight="bold">E</text>
    <text x="165" y="190" fontSize="13" fontWeight="bold">F</text>
    <text x="120" y="110" fontSize="13" fontWeight="bold">D</text>
    <text x="75" y="70" fontSize="12">2x + 15</text>
  </svg>
</div>`,
    options: ["A) 2x + 105", "B) 2x + 75", "C) 2x - 75", "D) 105 - 2x", "E) 75 - 2x"],
    correctAnswer: 4,
    explanation: "Line $AB$ is a straight line ($180^\\circ$).<br/>Angle $\\angle EDB = 180^\\circ - \\angle ADE = 180^\\circ - (2x + 15) = 165^\\circ - 2x$.<br/>Since $EF$ is a straight line and $\\angle CDF = 90^\\circ$, $\\angle EDC = 90^\\circ$.<br/>Therefore, $\\angle BDC = \\angle EDB - \\angle EDC = (165^\\circ - 2x) - 90^\\circ = 75^\\circ - 2x$."
  },
  {
    id: "est2_2021_june_q17",
    category: "Factoring Polynomials",
    question: "Which of the following is equivalent to the expression: $2a^2 - 3a + 4ba - 6b$?",
    options: [
      "A) (2a - 3)(a - 2b)",
      "B) (2a - b)(a + 3)",
      "C) (2 - b)(ab - 3)",
      "D) (2a - 3)(a + 2b)",
      "E) (2a + 3)(a - 2b)"
    ],
    correctAnswer: 3,
    explanation: "Group the terms by pairs:<br/>$$(2a^2 - 3a) + (4ba - 6b) = a(2a - 3) + 2b(2a - 3) = (2a - 3)(a + 2b)$$"
  },
  {
    id: "est2_2021_june_q18",
    category: "Word Problems & Averages",
    question: "Jimmy decided to spend an average of $40 a week on buying clothes. He spent $25 the first week, and $66 the second week. How much can he equally spend the third and the fourth week without surpassing his budget?",
    options: ["A) $69", "B) $54.5", "C) $34.5", "D) $45", "E) $38"],
    correctAnswer: 2,
    explanation: "Total budget for 4 weeks $= 4 \\times 40 = \\$160$.<br/>Spent during weeks 1 and 2 $= 25 + 66 = \\$91$.<br/>Remaining budget for weeks 3 and 4 $= 160 - 91 = \\$69$.<br/>Equal amount per week for weeks 3 and 4 $= \\frac{69}{2} = \\$34.50$."
  },
  {
    id: "est2_2021_june_q19",
    category: "Trapezoid Area Formula",
    question: "The height of a trapezoid is equal to $2x + 1$. Its small base is half the height, and the large base is triple the small one. What is the expression that represents the area of this trapezoid?",
    options: ["A) 2x + 1", "B) (2x + 1)^2", "C) 2(2x + 1)^2", "D) 2x - 1", "E) 4x^2 - 1"],
    correctAnswer: 1,
    explanation: "Height $h = 2x + 1$.<br/>Small base $b_1 = \\frac{2x + 1}{2}$.<br/>Large base $b_2 = 3 b_1 = 3\\left(\\frac{2x + 1}{2}\\right)$.<br/>Sum of bases $b_1 + b_2 = 4 b_1 = 2(2x + 1)$.<br/>Area $= \\frac{b_1 + b_2}{2} \\cdot h = \\frac{2(2x + 1)}{2} \\cdot (2x + 1) = (2x + 1)^2$."
  },
  {
    id: "est2_2021_june_q20",
    category: "Polynomial Roots & Product",
    question: "What is the product of the solutions of $x^4 - 3x^2 = -2$?",
    options: ["A) -2\\sqrt{2}", "B) -2", "C) 1", "D) 2", "E) 2\\sqrt{2}"],
    correctAnswer: 3,
    explanation: "Rewrite as $x^4 - 3x^2 + 2 = 0 \\implies (x^2 - 1)(x^2 - 2) = 0$.<br/>• $x^2 = 1 \\implies x = 1, -1$.<br/>• $x^2 = 2 \\implies x = \\sqrt{2}, -\\sqrt{2}$.<br/>Product of the four solutions $= (1)(-1)(\\sqrt{2})(-\\sqrt{2}) = 2$."
  },
  {
    id: "est2_2021_june_q21",
    category: "Graph Transformations",
    question: "What are the transformations of $f(x) = x^2$ when the graph of $g(x) = 2x^2 - 2$ is sketched?",
    options: [
      "A) It is vertically stretched with a vertical shift down 2 units",
      "B) It is vertically stretched with a horizontal shift right 2 units",
      "C) It is vertically compressed with a vertical shift down 2 units",
      "D) It is vertically compressed with a vertical shift up 2 units",
      "E) It is horizontally stretched with a vertical shift down 2 units"
    ],
    correctAnswer: 0,
    explanation: "$g(x) = 2 f(x) - 2$. The multiplying factor 2 represents a vertical stretch, and subtracting 2 represents a vertical shift down by 2 units."
  },
  {
    id: "est2_2021_june_q22",
    category: "Statistics & Central Tendencies",
    question: `<p className="mb-3">Lora went to the mall and purchased the items that are shown in the adjacent table. What is the sum of the mean and the median of the list shown?</p>
<table className="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr className="bg-gray-100">
      <th className="border border-gray-400 px-2 py-1">Items</th>
      <th className="border border-gray-400 px-2 py-1">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">Jeans</td><td class="border border-gray-400 px-2 py-1">$44.77</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">T-shirt</td><td class="border border-gray-400 px-2 py-1">$25.67</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Sweatshirt</td><td class="border border-gray-400 px-2 py-1">$20.67</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Backpack</td><td class="border border-gray-400 px-2 py-1">$24.67</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Jacket</td><td class="border border-gray-400 px-2 py-1">$67.77</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Hat</td><td class="border border-gray-400 px-2 py-1">$20.17</td></tr>
  </tbody>
</table>`,
    options: ["A) 25.17", "B) 29.56", "C) 33.95", "D) 59.12", "E) 101.72"],
    correctAnswer: 3,
    explanation: "1) Calculate mean:<br/>$$\\text{Sum} = 44.77 + 25.67 + 20.67 + 24.67 + 67.77 + 20.17 = 203.70$$<br/>$$\\text{Mean} = \\frac{203.70}{6} = 33.95$$<br/>2) Order values for median: $20.17, 20.67, 24.67, 25.67, 44.77, 67.77$.<br/>$$\\text{Median} = \\frac{24.67 + 25.67}{2} = 25.17$$<br/>3) Sum $= 33.95 + 25.17 = 59.12$."
  },
  {
    id: "est2_2021_june_q23",
    category: "Completing the Square",
    question: "Which constant should be added to $3x^2 - 8x$ in order to be made into a perfect square?",
    options: ["A) 4/3", "B) 16/3", "C) 8/3", "D) 4", "E) 16"],
    correctAnswer: 1,
    explanation: "Factor out 3: $3\\left(x^2 - \\frac{8}{3}x\\right)$.<br/>Complete the square inside: $\\left(\\frac{-8/3}{2}\\right)^2 = \\frac{16}{9}$.<br/>The constant added outside is $3 \\times \\frac{16}{9} = \\frac{16}{3}$."
  },
  {
    id: "est2_2021_june_q24",
    category: "Parallelogram Area & Ratios",
    question: "The area of a parallelogram is $16\\text{ m}^2$. The ratio of its height to base is 1:4. What is the dimension of its height?",
    options: ["A) 2 m", "B) 4 m", "C) 8 m", "D) 16 m", "E) 64 m"],
    correctAnswer: 0,
    explanation: "Let height $h = x$ and base $b = 4x$.<br/>$$\\text{Area} = b \\cdot h = (4x)(x) = 4x^2 = 16 \\implies x^2 = 4 \\implies x = 2\\text{ m}$$"
  },
  {
    id: "est2_2021_june_q25",
    category: "Triangle Inequality Theorem",
    question: `<p className="mb-3">Which value for the dimension of segment $AB$ could be true so that $ABC$ can be a triangle?</p>
<div className="flex justify-center my-4">
  <svg width="220" height="150" viewBox="0 0 220 150" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Triangle ABC -->
    <polygon points="110,20 20,120 200,120" fill="none" stroke="#000" strokeWidth="2"/>
    <text x="110" y="12" fontSize="14" fontWeight="bold" textAnchor="middle">A</text>
    <text x="10" y="125" fontSize="14" fontWeight="bold">B</text>
    <text x="205" y="125" fontSize="14" fontWeight="bold">C</text>
    <text x="110" y="138" fontSize="13" fontWeight="bold" textAnchor="middle">11</text>
    <text x="160" y="70" fontSize="13" fontWeight="bold">7</text>
  </svg>
</div>`,
    options: ["A) 0.5", "B) 1.5", "C) 2.5", "D) 3.5", "E) 4.5"],
    correctAnswer: 4,
    explanation: "By the Triangle Inequality Theorem, the third side $AB$ must satisfy:<br/>$$|11 - 7| < AB < 11 + 7 \\implies 4 < AB < 18$$<br/>Among the given options, $4.5$ is the only value strictly between $4$ and $18$."
  },
  {
    id: "est2_2021_june_q26",
    category: "Parallel Lines & Transversals",
    question: `<p className="mb-3">Using the adjacent diagram, if lines $m$ and $n$ are parallel, what is the value of $y$?</p>
<div className="flex justify-center my-4">
  <svg width="280" height="160" viewBox="0 0 280 160" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Line m -->
    <line x1="20" y1="50" x2="260" y2="50" stroke="#000" strokeWidth="2"/>
    <text x="265" y="55" fontSize="13" fontWeight="bold">m</text>
    <!-- Line n -->
    <line x1="20" y1="120" x2="260" y2="120" stroke="#000" strokeWidth="2"/>
    <text x="265" y="125" fontSize="13" fontWeight="bold">n</text>
    <!-- Transversal -->
    <line x1="60" y1="10" x2="220" y2="150" stroke="#000" strokeWidth="2"/>
    <!-- Angles -->
    <text x="110" y="42" fontSize="12">2x + 5</text>
    <text x="125" y="68" fontSize="12">5y + 35</text>
    <text x="185" y="112" fontSize="12">3x - 15</text>
  </svg>
</div>`,
    options: ["A) 100", "B) 80", "C) 60", "D) 40", "E) 20"],
    correctAnswer: 4,
    explanation: "Corresponding angles are equal: $2x + 5 = 3x - 15 \\implies x = 20$.<br/>The angle $2x + 5 = 2(20) + 5 = 45^\\circ$.<br/>Angle $5y + 35$ and $2x + 5$ are supplementary (same-side interior / linear pair):<br/>$$5y + 35 + 45 = 180 \\implies 5y + 80 = 180 \\implies 5y = 100 \\implies y = 20$$"
  },
  {
    id: "est2_2021_june_q27",
    category: "Inverse Functions",
    question: "Which of the following is the inverse function of $f(x) = x^2 - 4x + 4$?",
    options: [
      "A) f^{-1}(x) = -4 \\pm \\sqrt{x}",
      "B) f^{-1}(x) = -2 \\pm \\sqrt{x}",
      "C) f^{-1}(x) = \\pm \\sqrt{x}",
      "D) f^{-1}(x) = 2 \\pm \\sqrt{x}",
      "E) f^{-1}(x) = 4 \\pm \\sqrt{x}"
    ],
    correctAnswer: 3,
    explanation: "Rewrite $f(x) = (x - 2)^2$.<br/>Set $y = (x - 2)^2 \\implies x - 2 = \\pm \\sqrt{y} \\implies x = 2 \\pm \\sqrt{y}$.<br/>Thus, $f^{-1}(x) = 2 \\pm \\sqrt{x}$."
  },
  {
    id: "est2_2021_june_q28",
    category: "Exponent Laws",
    question: "Which of the following is equivalent to $f(x) = 343(7^{-2x})$?",
    options: [
      "A) f(x) = 7^{2 + 3x}",
      "B) f(x) = 7^{3 - 2x}",
      "C) f(x) = 7^{6x}",
      "D) f(x) = \\frac{1}{7^{6x}}",
      "E) f(x) = \\frac{1}{7^{3 - 2x}}"
    ],
    correctAnswer: 1,
    explanation: "Recognize that $343 = 7^3$.<br/>$$f(x) = 7^3 \\cdot 7^{-2x} = 7^{3 - 2x}$$"
  },
  {
    id: "est2_2021_june_q29",
    category: "Equilateral Triangle Height",
    question: "The perimeter of an equilateral triangle is equal to $3\\sqrt{7} - 6$. What is the dimension of the height of the triangle?",
    options: ["A) 0.16", "B) 0.31", "C) 0.56", "D) 0.65", "E) 1.25"],
    correctAnswer: 2,
    explanation: "Side length $s = \\frac{3\\sqrt{7} - 6}{3} = \\sqrt{7} - 2 \\approx 2.646 - 2 = 0.646$.<br/>Height $h = \\frac{\\sqrt{3}}{2} s = \\frac{\\sqrt{3}}{2} (0.646) \\approx 0.866 \\times 0.646 \\approx 0.56$."
  },
  {
    id: "est2_2021_june_q30",
    category: "Forming Quadratic Equations",
    question: "Which of the following equations has roots equal to $2\\sqrt{2}$ and $-\\frac{7}{2}$?",
    options: [
      "A) 0 = x^2 + x\\left(\\frac{-7 + 4\\sqrt{2}}{2}\\right) - 7\\sqrt{2}",
      "B) 0 = x^2 + x\\left(\\frac{7 - 4\\sqrt{2}}{2}\\right) - 7\\sqrt{2}",
      "C) 0 = x^2 + x\\left(\\frac{-7 + 4\\sqrt{2}}{2}\\right) + 7\\sqrt{2}",
      "D) 0 = x^2 + x\\left(\\frac{7 - 4\\sqrt{2}}{2}\\right) + 7\\sqrt{2}",
      "E) 0 = x^2 + x\\left(\\frac{7 - 2\\sqrt{2}}{2}\\right) - 7\\sqrt{2}"
    ],
    correctAnswer: 1,
    explanation: "• Sum of roots $S = 2\\sqrt{2} - \\frac{7}{2} = \\frac{4\\sqrt{2} - 7}{2}$.<br/>• Product of roots $P = (2\\sqrt{2})\\left(-\\frac{7}{2}\\right) = -7\\sqrt{2}$.<br/>The quadratic equation $x^2 - Sx + P = 0$ becomes:<br/>$$x^2 - \\left(\\frac{4\\sqrt{2} - 7}{2}\\right)x - 7\\sqrt{2} = 0 \\implies x^2 + x\\left(\\frac{7 - 4\\sqrt{2}}{2}\\right) - 7\\sqrt{2} = 0$$"
  },
  {
    id: "est2_2021_june_q31",
    category: "Simple Probability",
    question: "Jack bought a bag of 30-pieces of chocolates in which he found three different types of chocolate bars. If there are 11 bars of type A, 13 bars of type B, and the remaining are bars of type C, what is the probability that the first bar of chocolate that Jack will choose will be of type C?",
    options: ["A) 4/5", "B) 1/2", "C) 1/4", "D) 1/5", "E) 1/6"],
    correctAnswer: 3,
    explanation: "Number of bars of type C $= 30 - (11 + 13) = 6$.<br/>Probability $P(\\text{type C}) = \\frac{6}{30} = \\frac{1}{5}$."
  },
  {
    id: "est2_2021_june_q32",
    category: "Nested Rectangles & Area",
    question: `<p className="mb-3">Using the adjacent figure, the length of the larger rectangle is $8x + 1$ while the width is equal to $4x + 3$. If the area of the shaded region is equal to 204 square units, what is the value of $x$?</p>
<div className="flex justify-center my-4">
  <svg width="200" height="260" viewBox="0 0 200 260" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Outer rectangle -->
    <rect x="30" y="20" width="140" height="200" fill="#cbd5e1" stroke="#000" strokeWidth="2"/>
    <!-- Inner unshaded rectangle -->
    <rect x="55" y="20" width="90" height="160" fill="#ffffff" stroke="#000" strokeWidth="2"/>
    <!-- Dimension arrows -->
    <text x="170" y="190" fontSize="12">2x</text>
    <text x="42" y="235" fontSize="12">x</text>
    <text x="145" y="235" fontSize="12">x</text>
  </svg>
</div>`,
    options: ["A) 1/2", "B) 2", "C) 3", "D) 6", "E) 9"],
    correctAnswer: 2,
    explanation: "• Area of outer rectangle $= (8x + 1)(4x + 3) = 32x^2 + 28x + 3$.<br/>• Inner rectangle width $= (4x + 3) - 2x = 2x + 3$, height $= (8x + 1) - 2x = 6x + 1$.<br/>• Area of inner rectangle $= (6x + 1)(2x + 3) = 12x^2 + 20x + 3$.<br/>• Shaded area $= (32x^2 + 28x + 3) - (12x^2 + 20x + 3) = 20x^2 + 8x$.<br/>Set $20x^2 + 8x = 204 \\implies 5x^2 + 2x - 51 = 0 \\implies (5x + 17)(x - 3) = 0 \\implies x = 3$."
  },
  {
    id: "est2_2021_june_q33",
    category: "Interquartile Range & Median",
    question: `<p className="mb-3">The adjacent table shows the heights of 10 randomly chosen buildings in Egypt. What is the sum of the interquartile range and the median of the data shown?</p>
<table className="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr className="bg-gray-100">
      <th className="border border-gray-400 px-2 py-1">Building</th>
      <th className="border border-gray-400 px-2 py-1">Height (m)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">Cairo Tower</td><td class="border border-gray-400 px-2 py-1">187</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Ministry of Foreign Affairs Building, Cairo</td><td class="border border-gray-400 px-2 py-1">143</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Nile City South Tower</td><td class="border border-gray-400 px-2 py-1">142</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">El Maadi Residential Tower 16</td><td class="border border-gray-400 px-2 py-1">140</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Great Pyramid of Giza</td><td class="border border-gray-400 px-2 py-1">138.8</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">National Bank of Egypt Tower 1</td><td class="border border-gray-400 px-2 py-1">135</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Residences Roda Island</td><td class="border border-gray-400 px-2 py-1">118</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Ramses Hilton & World Trade Center</td><td class="border border-gray-400 px-2 py-1">110</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Hilton World Trade Center Residences</td><td class="border border-gray-400 px-2 py-1">110</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Four Seasons Cairo at First Residence</td><td class="border border-gray-400 px-2 py-1">103</td></tr>
  </tbody>
</table>`,
    options: ["A) 32", "B) 110", "C) 136.9", "D) 142", "E) 168.9"],
    correctAnswer: 4,
    explanation: "Ascending order of heights: $103, 110, 110, 118, 135, 138.8, 140, 142, 143, 187$.<br/>• Median $= \\frac{135 + 138.8}{2} = 136.9$.<br/>• $Q_1 = 110$ (median of lower 5 numbers).<br/>• $Q_3 = 142$ (median of upper 5 numbers).<br/>• $IQR = Q_3 - Q_1 = 142 - 110 = 32$.<br/>Sum $= 32 + 136.9 = 168.9$."
  },
  {
    id: "est2_2021_june_q34",
    category: "Similar Triangles & Area",
    question: `<p className="mb-3">The adjacent figure shows two similar triangles. What is the area of the larger triangle?</p>
<div className="flex justify-center my-4">
  <svg width="260" height="160" viewBox="0 0 260 160" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Outer right triangle -->
    <polygon points="20,20 20,130 240,130" fill="none" stroke="#000" strokeWidth="2"/>
    <!-- Inner right triangle -->
    <line x1="100" y1="130" x2="100" y2="72" stroke="#000" strokeWidth="1.5"/>
    <!-- Right angle symbols -->
    <rect x="20" y="118" width="12" height="12" fill="none" stroke="#000" strokeWidth="1"/>
    <rect x="100" y="118" width="12" height="12" fill="none" stroke="#000" strokeWidth="1"/>
    <!-- Dotted extension lines -->
    <line x1="100" y1="72" x2="240" y2="20" stroke="#000" strokeWidth="1.5" strokeDasharray="3 3"/>
    <line x1="20" y1="140" x2="240" y2="140" stroke="#000" strokeWidth="1" strokeDasharray="3 3"/>
    <!-- Labels -->
    <text x="90" y="100" fontSize="12">10</text>
    <text x="180" y="50" fontSize="12">18</text>
    <text x="125" y="152" fontSize="12">20</text>
  </svg>
</div>`,
    options: ["A) 100 square units", "B) 120.27 square units", "C) 133.63 square units", "D) 240.53 square units", "E) 267.2 square units"],
    correctAnswer: 3,
    explanation: "Let the height of the larger triangle be $H$ and the base of the smaller triangle be $x$.<br/>By similarity: $H = \\frac{200}{x}$.<br/>Solving the similarity relation for hypotenuses yields $x \\approx 8.315$, which gives $H \\approx 24.053$.<br/>$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times H = \\frac{1}{2} \\times 20 \\times 24.053 = 240.53\\text{ square units}$$"
  },
  {
    id: "est2_2021_june_q35",
    category: "Absolute Value Inequalities",
    question: "Which of the following is not a solution of $|-8 + 3x| - 2 < 3$?",
    options: ["A) 108/25", "B) 19/5", "C) 16/5", "D) 2", "E) 19/20"],
    correctAnswer: 4,
    explanation: "$|-8 + 3x| < 5 \\implies -5 < 3x - 8 < 5 \\implies 3 < 3x < 13 \\implies 1 < x < \\frac{13}{3} \\approx 4.333$.<br/>• Option A: $\\frac{108}{25} = 4.32$ (in interval).<br/>• Option E: $\\frac{19}{20} = 0.95 < 1$ (outside interval, so NOT a solution)."
  },
  {
    id: "est2_2021_june_q36",
    category: "Trigonometric Secant & Angle Sum",
    question: "In a triangle $TRD$, $m\\angle T = 66^\\circ$ while $\\sec R = 1.887$. What is the measure of angle $D$?",
    options: ["A) 56°", "B) 58°", "C) 60°", "D) 62°", "E) 64°"],
    correctAnswer: 0,
    explanation: "$\\sec R = 1.887 \\implies \\cos R = \\frac{1}{1.887} \\approx 0.52994 \\implies m\\angle R = \\arccos(0.52994) \\approx 58^\\circ$.<br/>In $\\triangle TRD$, $m\\angle D = 180^\\circ - (66^\\circ + 58^\\circ) = 180^\\circ - 124^\\circ = 56^\\circ$."
  },
  {
    id: "est2_2021_june_q37",
    category: "Remainder Theorem",
    question: "The polynomial $2x^3 - ax^2 - 7x + 6$ has no remainder when it is divided by $x - 1$. What is the value of $a$?",
    options: ["A) -2", "B) -1", "C) 0", "D) 1", "E) 2"],
    correctAnswer: 3,
    explanation: "By the Remainder Theorem, $P(1) = 0$:<br/>$$2(1)^3 - a(1)^2 - 7(1) + 6 = 0 \\implies 2 - a - 7 + 6 = 0 \\implies 1 - a = 0 \\implies a = 1$$"
  },
  {
    id: "est2_2021_june_q38",
    category: "Concentric Circles & Annulus Area",
    question: `<p className="mb-3">The area of the shaded region in the adjacent circle is equal to $42.75\\pi$ square units. The circumference of the smaller circle is equal to $5\\pi$ units. What is the radius of the larger circle?</p>
<div className="flex justify-center my-4">
  <svg width="200" height="200" viewBox="0 0 200 200" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Outer circle -->
    <circle cx="100" cy="100" r="80" fill="#cbd5e1" stroke="#000" strokeWidth="2"/>
    <!-- Inner circle -->
    <circle cx="100" cy="100" r="50" fill="#ffffff" stroke="#000" strokeWidth="2"/>
    <!-- Center point -->
    <circle cx="100" cy="100" r="3" fill="#000"/>
  </svg>
</div>`,
    options: ["A) 14 units", "B) 7 units", "C) 6.25 units", "D) 5 units", "E) 2 units"],
    correctAnswer: 1,
    explanation: "• Circumference of smaller circle $2\\pi r = 5\\pi \\implies r = 2.5$.<br/>• Area of smaller circle $= \\pi (2.5^2) = 6.25\\pi$.<br/>• Area of larger circle $= 42.75\\pi + 6.25\\pi = 49\\pi$.<br/>• $\\pi R^2 = 49\\pi \\implies R = 7$ units."
  },
  {
    id: "est2_2021_june_q39",
    category: "Parallel Line Equations",
    question: "What is the equation of the line parallel to the line with equation $\\sqrt{2} x - 3y = 1$ and passing through the center of the circle with equation $(x - 3\\sqrt{2})^2 + (y^2 - 8y + 16) = 25$?",
    options: [
      "A) y = \\frac{\\sqrt{2}}{3} x + 2",
      "B) y = \\frac{\\sqrt{2}}{3} x - 2",
      "C) y = \\frac{\\sqrt{2}}{3} x",
      "D) y = -\\frac{\\sqrt{2}}{3} x + 2",
      "E) y = -\\frac{\\sqrt{2}}{3} x - 2"
    ],
    correctAnswer: 0,
    explanation: "1) Slope of line $\\sqrt{2}x - 3y = 1 \\implies y = \\frac{\\sqrt{2}}{3}x - \\frac{1}{3}$, so $m = \\frac{\\sqrt{2}}{3}$.<br/>2) Circle center: $(x - 3\\sqrt{2})^2 + (y - 4)^2 = 25 \\implies (h, k) = (3\\sqrt{2}, 4)$.<br/>3) Line equation:<br/>$$y - 4 = \\frac{\\sqrt{2}}{3}(x - 3\\sqrt{2}) \\implies y - 4 = \\frac{\\sqrt{2}}{3}x - 2 \\implies y = \\frac{\\sqrt{2}}{3}x + 2$$"
  },
  {
    id: "est2_2021_june_q40",
    category: "Angles & Linear Systems",
    question: `<p className="mb-3">In the adjacent figure, $m\\angle ABD = \\frac{2}{3} m\\angle CBE$. What is the value of $x$?</p>
<div className="flex justify-center my-4">
  <svg width="260" height="180" viewBox="0 0 260 180" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Straight line DBE -->
    <line x1="20" y1="140" x2="240" y2="140" stroke="#000" strokeWidth="2"/>
    <!-- Triangle ABC meeting DBE at B -->
    <polygon points="40,30 180,30 150,140" fill="none" stroke="#000" strokeWidth="2"/>
    <!-- Labels -->
    <text x="30" y="25" fontSize="13" fontWeight="bold">A</text>
    <text x="185" y="25" fontSize="13" fontWeight="bold">C</text>
    <text x="150" y="155" fontSize="13" fontWeight="bold">B</text>
    <text x="10" y="145" fontSize="13" fontWeight="bold">D</text>
    <text x="245" y="145" fontSize="13" fontWeight="bold">E</text>
    <text x="60" y="45" fontSize="12">x + 50</text>
    <text x="135" y="45" fontSize="12">3x - 5</text>
    <text x="100" y="130" fontSize="12">2x + 15</text>
  </svg>
</div>`,
    options: ["A) 3.75", "B) 7.5", "C) 15", "D) 30.8", "E) 42.5"],
    correctAnswer: 2,
    explanation: "In $\\triangle ABC$, sum of interior angles $= 180^\\circ$:<br/>$$(x + 50) + (3x - 5) + (5x + 10) = 180^\\circ \\implies 9x + 55 = 190 \\implies 9x = 135 \\implies x = 15$$"
  },
  {
    id: "est2_2021_june_q41",
    category: "Radicals & Fractional Exponents",
    question: "Which of the following expressions is equivalent to $\\sqrt[3]{135 x^5 y^7} \\cdot \\sqrt{180 x^3 y}$?",
    options: [
      "A) 18x^3 y^2 \\cdot \\sqrt[6]{5^5 y^4 x}",
      "B) 18x^2 y^3 \\cdot \\sqrt[6]{5^5 y^5 x}",
      "C) 18x^2 y^3 \\cdot \\sqrt[6]{5^5 y^4 x}",
      "D) 18x^3 y^2 \\cdot \\sqrt[6]{5^5 y^5 x^2}",
      "E) 18x^3 y^2 \\cdot \\sqrt[6]{5^5 y^5 x}"
    ],
    correctAnswer: 4,
    explanation: "Express with common 6th root index:<br/>$$\\sqrt[3]{135 x^5 y^7} = \\sqrt[6]{(135)^2 x^{10} y^{14}}$$  $$\\sqrt{180 x^3 y} = \\sqrt[6]{(180)^3 x^9 y^3}$$<br/>Product inside 6th root $= \\sqrt[6]{2^6 \\cdot 3^{12} \\cdot 5^5 x^{19} y^{17}} = 2 \\cdot 3^2 \\cdot x^3 y^2 \\sqrt[6]{5^5 y^5 x} = 18x^3 y^2 \\sqrt[6]{5^5 y^5 x}$."
  },
  {
    id: "est2_2021_june_q42",
    category: "Matrix Addition",
    question: "Given $A = \\begin{bmatrix} 3 & 1 \\\\ 0 & 5 \\\\ 2 & 4 \\\\ 3 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} -2 & 4 \\\\ 5 & 3 \\\\ 9 & 6 \\\\ 3 & -2 \\end{bmatrix}$. What is the matrix representing $A + 2B$?",
    options: [
      "A) \\begin{bmatrix} -1 & 9 \\\\ 10 & 11 \\\\ 20 & 16 \\\\ 9 & 0 \\end{bmatrix}",
      "B) \\begin{bmatrix} 1 & -3 \\\\ 5 & 8 \\\\ 11 & 10 \\\\ 6 & 2 \\end{bmatrix}",
      "C) \\begin{bmatrix} 7 & -1 \\\\ 11 & 10 \\\\ 16 & 20 \\\\ 0 & 9 \\end{bmatrix}",
      "D) \\begin{bmatrix} 7 & -7 \\\\ -10 & -1 \\\\ -16 & -8 \\\\ -3 & 8 \\end{bmatrix}",
      "E) \\begin{bmatrix} 9 & 0 \\\\ 20 & 16 \\\\ 10 & 11 \\\\ -1 & 7 \\end{bmatrix}"
    ],
    correctAnswer: 0,
    explanation: "Multiply $B$ by 2:<br/>$$2B = \\begin{bmatrix} -4 & 8 \\\\ 10 & 6 \\\\ 18 & 12 \\\\ 6 & -4 \\end{bmatrix}$$<br/>Add to $A$:<br/>$$A + 2B = \\begin{bmatrix} 3 + (-4) & 1 + 8 \\\\ 0 + 10 & 5 + 6 \\\\ 2 + 18 & 4 + 12 \\\\ 3 + 6 & 4 + (-4) \\end{bmatrix} = \\begin{bmatrix} -1 & 9 \\\\ 10 & 11 \\\\ 20 & 16 \\\\ 9 & 0 \\end{bmatrix}$$"
  },
  {
    id: "est2_2021_june_q43",
    category: "3D Distance Formula",
    question: "Given $A(2, 3, -7)$ and $B(3m, -2m + 1, 6)$. What is the value of $m$ if $AB^2 = 221$?",
    options: ["A) -2", "B) 0", "C) 1", "D) 2", "E) 4"],
    correctAnswer: 3,
    explanation: "Use 3D squared distance formula:<br/>$$AB^2 = (3m - 2)^2 + (-2m + 1 - 3)^2 + (6 - (-7))^2 = 221$$<br/>$$(9m^2 - 12m + 4) + (4m^2 + 8m + 4) + 169 = 221 \\implies 13m^2 - 4m - 44 = 0$$<br/>Factor $(13m + 22)(m - 2) = 0 \\implies m = 2$."
  },
  {
    id: "est2_2021_june_q44",
    category: "Exponential Functions & Asymptotes",
    question: "If $f(x) = 2 \\cdot 3^x + 2$, which of the following statements is correct?",
    options: [
      "A) The graph of f(x) is increasing and the equation of the vertical asymptote is x = 2.",
      "B) The graph of f(x) is increasing and the equation of the horizontal asymptote is y = 2.",
      "C) The graph of f(x) is decreasing and the equation of the horizontal asymptote is y = 2.",
      "D) The graph of f(x) is decreasing and the equation of the vertical asymptote is x = 2.",
      "E) The graph of f(x) is increasing and there are no asymptotes."
    ],
    correctAnswer: 1,
    explanation: "Since base $3 > 1$, $f(x) = 2 \\cdot 3^x + 2$ is strictly increasing.<br/>As $x \\to -\\infty$, $3^x \\to 0$, giving horizontal asymptote $y = 2$."
  },
  {
    id: "est2_2021_june_q45",
    category: "Parabola Vertex",
    question: "Given $f(x) = 3x^2 - 6x + 1$. What is the product of the coordinates of the vertex of this function?",
    options: ["A) -10", "B) -1", "C) -2", "D) 1", "E) 2"],
    correctAnswer: 2,
    explanation: "• Vertex x-coordinate $h = -\\frac{b}{2a} = -\\frac{-6}{6} = 1$.<br/>• Vertex y-coordinate $k = f(1) = 3(1)^2 - 6(1) + 1 = -2$.<br/>• Product of coordinates $= 1 \\times (-2) = -2$."
  },
  {
    id: "est2_2021_june_q46",
    category: "Parallel Lines & Ratios",
    question: `<p className="mb-3">Using the adjacent diagram, what is the value of $\\frac{2x}{y}$?</p>
<div className="flex justify-center my-4">
  <svg width="260" height="160" viewBox="0 0 260 160" className="border border-gray-200 rounded-lg bg-white p-2">
    <!-- Parallel lines -->
    <line x1="20" y1="40" x2="240" y2="20" stroke="#000" strokeWidth="2"/>
    <line x1="20" y1="120" x2="240" y2="100" stroke="#000" strokeWidth="2"/>
    <!-- Transversals -->
    <line x1="80" y1="10" x2="160" y2="150" stroke="#000" strokeWidth="2"/>
    <line x1="180" y1="10" x2="220" y2="150" stroke="#000" strokeWidth="2"/>
    <!-- Labels -->
    <text x="210" y="30" fontSize="12">4y + 14</text>
    <text x="120" y="80" fontSize="12">92.1°</text>
    <text x="180" y="115" fontSize="12">3x - 5</text>
  </svg>
</div>`,
    options: ["A) 0.6", "B) 0.83", "C) 1.19", "D) 1.67", "E) 3.35"],
    correctAnswer: 4,
    explanation: "Equating corresponding angles:<br/>• $4y + 14 = 92.1^\\circ \\implies y = 19.525$.<br/>• $3x - 5 = 92.1^\\circ \\implies x = 32.367$.<br/>$$\\frac{2x}{y} = \\frac{2(32.367)}{19.525} \\approx 3.35$$"
  },
  {
    id: "est2_2021_june_q47",
    category: "Complex Number Equality",
    question: "If $21x - i + 8y = 7xi + 2y - 1$, what real values of $x$ and $y$ satisfy the equation?",
    options: [
      "A) x = -1/7 and y = 1/3",
      "B) x = 1/7 and y = -1/3",
      "C) x = -1/7 and y = -1/3",
      "D) x = -7 and y = 3",
      "E) x = 1/7 and y = 1/3"
    ],
    correctAnswer: 0,
    explanation: "Equate real and imaginary components separately:<br/>• Imaginary parts: $-1 = 7x \\implies x = -\\frac{1}{7}$.<br/>• Real parts: $21x + 8y = 2y - 1 \\implies 21\\left(-\\frac{1}{7}\\right) + 6y = -1 \\implies -3 + 6y = -1 \\implies 6y = 2 \\implies y = \\frac{1}{3}$."
  },
  {
    id: "est2_2021_june_q48",
    category: "Non-Negative Expressions",
    question: "Which of the following expressions can never have a negative answer for any $x$?",
    options: [
      "A) |2x - 3(x - 5)| - 1",
      "B) \\frac{x^2 - x - 6}{x^4}",
      "C) (-2|x - 3|)^2 - 3",
      "D) \\frac{x^2 + 3}{(x - 7)^2}",
      "E) (x - 1)^3"
    ],
    correctAnswer: 3,
    explanation: "In Option D, numerator $x^2 + 3 > 0$ for all real $x$, and denominator $(x - 7)^2 > 0$ for all $x \\neq 7$. Therefore, the expression is always strictly positive and can never be negative."
  },
  {
    id: "est2_2021_june_q49",
    category: "Systems of Linear Equations",
    question: "Ahmad bought 7 pencils and 11 pens from a shop for $11.2. The price of 5 pens is equal to the price of 7 pencils. What is the price of 3 pens?",
    options: ["A) $1.0", "B) $1.4", "C) $1.5", "D) $2.1", "E) $3.5"],
    correctAnswer: 3,
    explanation: "Let pencil price $= c$ and pen price $= p$.<br/>1) $7c + 11p = 11.20$<br/>2) $7c = 5p$<br/>Substitute $7c = 5p$ into equation (1):<br/>$$5p + 11p = 11.20 \\implies 16p = 11.20 \\implies p = 0.70$$\\nPrice of 3 pens $= 3 \\times 0.70 = \\$2.10$."
  },
  {
    id: "est2_2021_june_q50",
    category: "Combinations with Constraints",
    question: "A group of 7 persons is to be chosen from 5 men and 4 women. If at least 3 women should be included, in how many ways can this be done?",
    options: ["A) 4320 ways", "B) 30 ways", "C) 24 ways", "D) 20 ways", "E) 10 ways"],
    correctAnswer: 1,
    explanation: "Condition: At least 3 women in a 7-person team.<br/>• Case 1: 3 women and 4 men $= \\binom{4}{3} \\times \\binom{5}{4} = 4 \\times 5 = 20$ ways.<br/>• Case 2: 4 women and 3 men $= \\binom{4}{4} \\times \\binom{5}{3} = 1 \\times 10 = 10$ ways.<br/>Total ways $= 20 + 10 = 30$ ways."
  }
];
