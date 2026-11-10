import { Question } from '../../types';

export const SAT_2026_MARCH_FORM_B_SET: Question[] = [
  // MODULE 1 (Questions 1 to 22)
  {
    id: 1,
    question: `For the linear function $f$, $f(4) = 17$ and $f(8) = 1$. Which equation defines $f$?`,
    options: [
      "A) $f(x) = -\\frac{1}{4}x + 18$",
      "B) $f(x) = \\frac{1}{4}x - 1$",
      "C) $f(x) = -4x + 21$",
      "D) $f(x) = -4x + 33$"
    ],
    correctAnswer: 3,
    explanation: `First, calculate the slope $m$ using the given points $(4, 17)$ and $(8, 1)$:
$$ m = \\frac{1 - 17}{8 - 4} = \\frac{-16}{4} = -4 $$
Next, use the point-slope form $y - y_1 = m(x - x_1)$ with point $(4, 17)$:
$$ y - 17 = -4(x - 4) \\implies y - 17 = -4x + 16 \\implies y = -4x + 33 $$
Therefore, $f(x) = -4x + 33$.`,
    category: "Linear Functions"
  },
  {
    id: 2,
    question: `The measure of angle $S$ is $\\frac{9\\pi}{11}$ radians. The measure of angle $T$ is $3$ times the measure of angle $S$. Which expression represents the measure, in degrees, of angle $T$?`,
    options: [
      "A) $\\frac{9}{11}(90)(3)$",
      "B) $\\frac{9}{11}(180)(3)$",
      "C) $\\frac{9}{11\\pi}(90)(3)$",
      "D) $\\frac{9\\pi}{11}(180)(3)$"
    ],
    correctAnswer: 1,
    explanation: `First, find the measure of angle $T$ in radians:
$$ T = 3 \\times \\frac{9\\pi}{11} = \\frac{27\\pi}{11} $$
To convert radians to degrees, multiply by $\\frac{180^\\circ}{\\pi}$:
$$ \\text{Measure of } T \\text{ in degrees} = \\left(\\frac{27\\pi}{11}\\right) \\times \\left(\\frac{180}{\\pi}\\right) $$
The $\\pi$ terms cancel out:
$$ \\frac{27 \\times 180}{11} = \\frac{9 \\times 3 \\times 180}{11} = \\frac{9}{11}(180)(3) $$`,
    category: "Trigonometry"
  },
  {
    id: 3,
    question: `For the positive quantities $m$, $q$, and $r$, $m$ is $20\\%$ of $m + q + r$, $q$ is $30\\%$ of $q + r$, and the value of $r$ is $1,526$. What is the value of $m$?`,
    options: [],
    correctAnswer: 0,
    answerText: "545",
    explanation: `First, analyze the relationship for $q$:
$$ q = 0.3(q + r) \\implies q = 0.3q + 0.3r \\implies 0.7q = 0.3r \\implies q = \\frac{3}{7}r $$
Given $r = 1,526$:
$$ q = \\frac{3}{7}(1,526) = 3(218) = 654 $$
Now find $q + r$:
$$ q + r = 654 + 1,526 = 2,180 $$
Next, analyze $m$:
$$ m = 0.2(m + q + r) \\implies m = 0.2m + 0.2(q + r) \\implies 0.8m = 0.2(2,180) $$
$$ 0.8m = 436 \\implies m = \\frac{436}{0.8} = 545 $$`,
    category: "Percentages"
  },
  {
    id: 4,
    question: `In the $xy$-plane, line $p$ is parallel to line $s$. Line $s$ has a slope of $8$ and line $p$ passes through the point $(0, 7)$. Which equation defines line $p$?`,
    options: [
      "A) $y = 8x - 7$",
      "B) $y = 8x - \\frac{1}{7}$",
      "C) $y = 8x + 7$",
      "D) $y = 8x + \\frac{1}{7}$"
    ],
    correctAnswer: 2,
    explanation: `Parallel lines have identical slopes. Since line $s$ has a slope of $8$, line $p$ also has a slope $m = 8$.
Line $p$ passes through $(0, 7)$, which gives the $y$-intercept $b = 7$.
Using slope-intercept form $y = mx + b$:
$$ y = 8x + 7 $$`,
    category: "Linear Equations"
  },
  {
    id: 5,
    question: `The graph of the linear function $f$ is shown, where $y = f(x)$. Which equation defines function $f$?

<div class="my-4 flex justify-center">
  <svg width="340" height="300" viewBox="0 0 340 300" class="border border-gray-300 rounded-lg bg-white p-2">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" />
      </marker>
    </defs>
    <!-- Grid Lines -->
    <g stroke="#d1d5db" stroke-width="1">
      <!-- Vertical Grid Lines (x = -6 to 11) -->
      <line x1="30" y1="10" x2="30" y2="280"/>
      <line x1="45" y1="10" x2="45" y2="280"/>
      <line x1="60" y1="10" x2="60" y2="280"/>
      <line x1="75" y1="10" x2="75" y2="280"/>
      <line x1="90" y1="10" x2="90" y2="280"/>
      <line x1="105" y1="10" x2="105" y2="280"/>
      <line x1="120" y1="10" x2="120" y2="280"/>
      <line x1="135" y1="10" x2="135" y2="280"/>
      <line x1="150" y1="10" x2="150" y2="280"/>
      <line x1="165" y1="10" x2="165" y2="280"/>
      <line x1="180" y1="10" x2="180" y2="280"/>
      <line x1="195" y1="10" x2="195" y2="280"/>
      <line x1="210" y1="10" x2="210" y2="280"/>
      <line x1="225" y1="10" x2="225" y2="280"/>
      <line x1="240" y1="10" x2="240" y2="280"/>
      <line x1="255" y1="10" x2="255" y2="280"/>
      <line x1="270" y1="10" x2="270" y2="280"/>
      <line x1="285" y1="10" x2="285" y2="280"/>

      <!-- Horizontal Grid Lines (y = -7 to 11) -->
      <line x1="20" y1="20" x2="295" y2="20"/>
      <line x1="20" y1="35" x2="295" y2="35"/>
      <line x1="20" y1="50" x2="295" y2="50"/>
      <line x1="20" y1="65" x2="295" y2="65"/>
      <line x1="20" y1="80" x2="295" y2="80"/>
      <line x1="20" y1="95" x2="295" y2="95"/>
      <line x1="20" y1="110" x2="295" y2="110"/>
      <line x1="20" y1="125" x2="295" y2="125"/>
      <line x1="20" y1="140" x2="295" y2="140"/>
      <line x1="20" y1="155" x2="295" y2="155"/>
      <line x1="20" y1="170" x2="295" y2="170"/>
      <line x1="20" y1="185" x2="295" y2="185"/>
      <line x1="20" y1="200" x2="295" y2="200"/>
      <line x1="20" y1="215" x2="295" y2="215"/>
      <line x1="20" y1="230" x2="295" y2="230"/>
      <line x1="20" y1="245" x2="295" y2="245"/>
      <line x1="20" y1="260" x2="295" y2="260"/>
      <line x1="20" y1="275" x2="295" y2="275"/>
    </g>

    <!-- Axes with Arrowheads -->
    <line x1="15" y1="170" x2="298" y2="170" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="120" y1="282" x2="120" y2="12" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Axis Labels -->
    <text x="304" y="174" font-size="14" font-style="italic" font-weight="bold" fill="#000000">x</text>
    <text x="116" y="10" font-size="14" font-style="italic" font-weight="bold" fill="#000000">y</text>
    <text x="108" y="184" font-size="12" font-style="italic" fill="#000000">O</text>

    <!-- Axis Ticks -->
    <g stroke="#000000" stroke-width="1.5">
      <line x1="30" y1="166" x2="30" y2="174"/>
      <line x1="60" y1="166" x2="60" y2="174"/>
      <line x1="90" y1="166" x2="90" y2="174"/>
      <line x1="150" y1="166" x2="150" y2="174"/>
      <line x1="180" y1="166" x2="180" y2="174"/>
      <line x1="210" y1="166" x2="210" y2="174"/>
      <line x1="240" y1="166" x2="240" y2="174"/>
      <line x1="270" y1="166" x2="270" y2="174"/>

      <line x1="116" y1="20" x2="124" y2="20"/>
      <line x1="116" y1="50" x2="124" y2="50"/>
      <line x1="116" y1="80" x2="124" y2="80"/>
      <line x1="116" y1="110" x2="124" y2="110"/>
      <line x1="116" y1="140" x2="124" y2="140"/>
      <line x1="116" y1="200" x2="124" y2="200"/>
      <line x1="116" y1="230" x2="124" y2="230"/>
      <line x1="116" y1="260" x2="124" y2="260"/>
    </g>

    <!-- X-Axis Numbers -->
    <text x="30" y="186" text-anchor="middle" font-size="11" fill="#000000">-6</text>
    <text x="60" y="186" text-anchor="middle" font-size="11" fill="#000000">-4</text>
    <text x="90" y="186" text-anchor="middle" font-size="11" fill="#000000">-2</text>
    <text x="150" y="186" text-anchor="middle" font-size="11" fill="#000000">2</text>
    <text x="180" y="186" text-anchor="middle" font-size="11" fill="#000000">4</text>
    <text x="210" y="186" text-anchor="middle" font-size="11" fill="#000000">6</text>
    <text x="240" y="186" text-anchor="middle" font-size="11" fill="#000000">8</text>
    <text x="270" y="186" text-anchor="middle" font-size="11" fill="#000000">10</text>

    <!-- Y-Axis Numbers -->
    <text x="112" y="24" text-anchor="end" font-size="11" fill="#000000">10</text>
    <text x="112" y="54" text-anchor="end" font-size="11" fill="#000000">8</text>
    <text x="112" y="84" text-anchor="end" font-size="11" fill="#000000">6</text>
    <text x="112" y="114" text-anchor="end" font-size="11" fill="#000000">4</text>
    <text x="112" y="144" text-anchor="end" font-size="11" fill="#000000">2</text>
    <text x="112" y="204" text-anchor="end" font-size="11" fill="#000000">-2</text>
    <text x="112" y="234" text-anchor="end" font-size="11" fill="#000000">-4</text>
    <text x="112" y="264" text-anchor="end" font-size="11" fill="#000000">-6</text>

    <!-- Linear Function Line y = -2x + 4 passing through (-3, 10) -> (75, 20) and (5, -6) -> (195, 260) -->
    <line x1="75" y1="20" x2="195" y2="260" stroke="#000000" stroke-width="2.5"/>
  </svg>
</div>`,
    options: [
      "A) $f(x) = -2x + 4$",
      "B) $f(x) = -2x - 4$",
      "C) $f(x) = 2x + 4$",
      "D) $f(x) = 2x - 4$"
    ],
    correctAnswer: 0,
    explanation: `Identify key points from the graph:
1. $y$-intercept is $(0, 4) \\implies b = 4$.
2. $x$-intercept is $(2, 0)$.
Calculate slope $m$:
$$ m = \\frac{0 - 4}{2 - 0} = \\frac{-4}{2} = -2 $$
Thus, $f(x) = -2x + 4$.`,
    category: "Linear Functions"
  },
  {
    id: 6,
    question: `$$ x^2 - 8x = 0 $$
Which of the following is a solution to the given equation?`,
    options: ["A) $16$", "B) $8$", "C) $4$", "D) $\\sqrt{8}$"],
    correctAnswer: 1,
    explanation: `Factor out $x$ from the equation:
$$ x(x - 8) = 0 $$
Set each factor to zero:
$$ x = 0 \\quad \\text{or} \\quad x - 8 = 0 \\implies x = 8 $$
Among the choices, $8$ is the correct solution.`,
    category: "Quadratic Functions"
  },
  {
    id: 7,
    question: `$$ y = 9(x - 3) $$
$$ y = (x - 3)^2 $$
Which ordered pair $(x, y)$ is a solution to the given system of equations?`,
    options: ["A) $(6, -9)$", "B) $(3, 12)$", "C) $(12, 81)$", "D) $(12, -9)$"],
    correctAnswer: 2,
    explanation: `Set the two expressions for $y$ equal to each other:
$$ 9(x - 3) = (x - 3)^2 $$
Rearrange to factor:
$$ (x - 3)^2 - 9(x - 3) = 0 \\implies (x - 3)(x - 3 - 9) = 0 $$
$$ (x - 3)(x - 12) = 0 \\implies x = 3 \\text{ or } x = 12 $$
- For $x = 3$: $y = 9(0) = 0 \\implies (3, 0)$.
- For $x = 12$: $y = 9(12 - 3) = 9(9) = 81 \\implies (12, 81)$.
Among the choices, $(12, 81)$ is correct.`,
    category: "Systems of Equations"
  },
  {
    id: 8,
    question: `The function $f$ is defined by $f(x) = 5(3)^x$. What is the value of $f(x)$ when $x = 4$?`,
    options: ["A) $64$", "B) $81$", "C) $170$", "D) $405$"],
    correctAnswer: 3,
    explanation: `Substitute $x = 4$ into the function:
$$ f(4) = 5(3)^4 $$
Calculate $3^4 = 81$:
$$ f(4) = 5 \\times 81 = 405 $$`,
    category: "Exponential Functions"
  },
  {
    id: 9,
    question: `A cube has an edge length of $7$ inches. What is the volume, in cubic inches, of the cube?`,
    options: ["A) $28$", "B) $49$", "C) $294$", "D) $343$"],
    correctAnswer: 3,
    explanation: `The formula for the volume of a cube is $V = s^3$, where $s$ is the edge length.
$$ V = 7^3 = 7 \\times 7 \\times 7 = 343 $$`,
    category: "Geometry"
  },
  {
    id: 10,
    question: `An object is launched from a height of $132$ feet above the ground. A quadratic function $f$ models the height above the ground, in feet, of the object $t$ seconds after it is launched. According to the model, $3$ seconds after the object is launched, it reaches a maximum height of $276$ feet above the ground. Which equation defines $f$?`,
    options: [
      "A) $f(t) = -16(t + 276)^2 - 3$",
      "B) $f(t) = -16(t - 276)^2 + 3$",
      "C) $f(t) = -16(t + 3)^2 - 276$",
      "D) $f(t) = -16(t - 3)^2 + 276$"
    ],
    correctAnswer: 3,
    explanation: `The vertex form of a quadratic function is $f(t) = a(t - h)^2 + k$, where $(h, k)$ is the vertex (maximum height point).
Given that the maximum height occurs at $t = 3$ seconds with a height of $276$ feet, the vertex is $(3, 276)$.
Plugging in $(h, k) = (3, 276)$:
$$ f(t) = a(t - 3)^2 + 276 $$
With $a = -16$ (representing gravity acceleration in $\\text{ft/s}^2$):
$$ f(t) = -16(t - 3)^2 + 276 $$`,
    category: "Quadratic Functions"
  },
  {
    id: 11,
    question: `The expression $7x^3 + 16x^3 - 10x^3$ is equivalent to $bx^3$, where $b$ is a constant. What is the value of $b$?`,
    options: [],
    correctAnswer: 0,
    answerText: "13",
    explanation: `Combine like terms by adding and subtracting their coefficients:
$$ (7 + 16 - 10)x^3 = (23 - 10)x^3 = 13x^3 $$
Therefore, the constant $b$ is $13$.`,
    category: "Polynomial Functions"
  },
  {
    id: 12,
    question: `The ratio $x$ to $y$ is equivalent to the ratio $5$ to $6$. If $x = 7t$, what is the value of $y$ in terms of $t$?`,
    options: [
      "A) $\\frac{5}{42}t$",
      "B) $\\frac{6}{35}t$",
      "C) $\\frac{35}{6}t$",
      "D) $\\frac{42}{5}t$"
    ],
    correctAnswer: 3,
    explanation: `Write the ratio as a proportion:
$$ \\frac{x}{y} = \\frac{5}{6} \\implies 5y = 6x \\implies y = \\frac{6}{5}x $$
Substitute $x = 7t$:
$$ y = \\frac{6}{5}(7t) = \\frac{42}{5}t $$`,
    category: "Ratios & Proportions"
  },
  {
    id: 13,
    question: `$$ y < x $$
$$ x < 31 $$

For which of the following tables are all the values of $x$ and their corresponding values of $y$ solutions to the given system of inequalities?`,
    options: [
      `A)<br/><table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center"><thead><tr class="bg-gray-100"><th class="border border-gray-400 px-2 py-1">$x$</th><th class="border border-gray-400 px-2 py-1">$y$</th></tr></thead><tbody><tr><td class="border border-gray-400 px-2 py-1">28</td><td class="border border-gray-400 px-2 py-1">27</td></tr><tr><td class="border border-gray-400 px-2 py-1">29</td><td class="border border-gray-400 px-2 py-1">28</td></tr><tr><td class="border border-gray-400 px-2 py-1">30</td><td class="border border-gray-400 px-2 py-1">29</td></tr></tbody></table>`,
      `B)<br/><table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center"><thead><tr class="bg-gray-100"><th class="border border-gray-400 px-2 py-1">$x$</th><th class="border border-gray-400 px-2 py-1">$y$</th></tr></thead><tbody><tr><td class="border border-gray-400 px-2 py-1">28</td><td class="border border-gray-400 px-2 py-1">29</td></tr><tr><td class="border border-gray-400 px-2 py-1">29</td><td class="border border-gray-400 px-2 py-1">30</td></tr><tr><td class="border border-gray-400 px-2 py-1">30</td><td class="border border-gray-400 px-2 py-1">31</td></tr></tbody></table>`,
      `C)<br/><table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center"><thead><tr class="bg-gray-100"><th class="border border-gray-400 px-2 py-1">$x$</th><th class="border border-gray-400 px-2 py-1">$y$</th></tr></thead><tbody><tr><td class="border border-gray-400 px-2 py-1">32</td><td class="border border-gray-400 px-2 py-1">31</td></tr><tr><td class="border border-gray-400 px-2 py-1">33</td><td class="border border-gray-400 px-2 py-1">32</td></tr><tr><td class="border border-gray-400 px-2 py-1">34</td><td class="border border-gray-400 px-2 py-1">33</td></tr></tbody></table>`,
      `D)<br/><table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center"><thead><tr class="bg-gray-100"><th class="border border-gray-400 px-2 py-1">$x$</th><th class="border border-gray-400 px-2 py-1">$y$</th></tr></thead><tbody><tr><td class="border border-gray-400 px-2 py-1">32</td><td class="border border-gray-400 px-2 py-1">33</td></tr><tr><td class="border border-gray-400 px-2 py-1">29</td><td class="border border-gray-400 px-2 py-1">30</td></tr><tr><td class="border border-gray-400 px-2 py-1">30</td><td class="border border-gray-400 px-2 py-1">31</td></tr></tbody></table>`
    ],
    correctAnswer: 0,
    explanation: `To satisfy the system of inequalities, each $(x, y)$ pair in the table must satisfy both conditions:
1. $x < 31$
2. $y < x$

Let's test each table:

- **Table A**:
  - $(28, 27) \implies 28 < 31$ (True) and $27 < 28$ (True).
  - $(29, 28) \implies 29 < 31$ (True) and $28 < 29$ (True).
  - $(30, 29) \implies 30 < 31$ (True) and $29 < 30$ (True).
  All values satisfy both inequalities. (Choice A is correct)

- **Table B**:
  - $(28, 29) \implies 29 < 28$ is False ($y > x$).

- **Table C**:
  - $(32, 31) \implies 32 < 31$ is False ($x > 31$).

- **Table D**:
  - $(32, 33) \implies 32 < 31$ is False ($x > 31$).`,
    category: "Linear Inequalities"
  },
  {
    id: 14,
    question: `The function $f$ is defined by $f(x) = (x - 2)(x - 9)(x + 4)$. In the $xy$-plane, the graph of $y = h(x)$ is the result of translating the graph of $y = f(x)$ up $7$ units. What is the $y$-coordinate of the $y$-intercept of the graph of $y = h(x)$?`,
    options: ["A) $0$", "B) $7$", "C) $72$", "D) $79$"],
    correctAnswer: 3,
    explanation: `First, find the $y$-intercept of $f(x)$ by setting $x = 0$:
$$ f(0) = (0 - 2)(0 - 9)(0 + 4) = (-2)(-9)(4) = 72 $$
The new function $h(x)$ shifts $f(x)$ up by $7$ units, meaning $h(x) = f(x) + 7$.
The $y$-intercept of $h(x)$ is:
$$ h(0) = f(0) + 7 = 72 + 7 = 79 $$`,
    category: "Polynomial Functions"
  },
  {
    id: 15,
    question: `A circle has a circumference of $28\\pi$ centimeters. What is the diameter, in centimeters, of the circle?`,
    options: [],
    correctAnswer: 0,
    answerText: "28",
    explanation: `The formula for circumference is $C = \\pi d$, where $d$ is the diameter.
Given $C = 28\\pi$:
$$ 28\\pi = \\pi d \\implies d = 28 $$`,
    category: "Circle Equations"
  },
  {
    id: 16,
    question: `If $6x = 60$, what is the value of $7x + 3$?`,
    options: ["A) $73$", "B) $63$", "C) $55$", "D) $45$"],
    correctAnswer: 0,
    explanation: `Solve for $x$:
$$ 6x = 60 \\implies x = 10 $$
Substitute $x = 10$ into $7x + 3$:
$$ 7(10) + 3 = 70 + 3 = 73 $$`,
    category: "Linear Equations"
  },
  {
    id: 17,
    question: `What value of $n$ is the solution to the equation $11n - 8 = 5n + 16$?`,
    options: ["A) $4$", "B) $6$", "C) $11$", "D) $16$"],
    correctAnswer: 0,
    explanation: `Isolate $n$ by subtracting $5n$ from both sides:
$$ 6n - 8 = 16 $$
Add $8$ to both sides:
$$ 6n = 24 \\implies n = 4 $$`,
    category: "Linear Equations"
  },
  {
    id: 18,
    question: `For the linear function $f$, $f(-5) = -7$ and the slope of the graph of $y = f(x)$ in the $xy$-plane is $3$. Which equation defines $f$?`,
    options: [
      "A) $f(x) = 3x + 8$",
      "B) $f(x) = 3x - 5$",
      "C) $f(x) = 3x - 7$",
      "D) $f(x) = 3x - 12$"
    ],
    correctAnswer: 0,
    explanation: `Use point-slope form with slope $m = 3$ and point $(-5, -7)$:
$$ y - (-7) = 3(x - (-5)) \\implies y + 7 = 3(x + 5) $$
$$ y + 7 = 3x + 15 \\implies y = 3x + 8 $$
So, $f(x) = 3x + 8$.`,
    category: "Linear Functions"
  },
  {
    id: 19,
    question: `In the $xy$-plane, an equation of circle A is $(x - 2)^2 + (y - 7)^2 = 25$. Circle B has the same center as circle A but has a radius that is twice the radius of circle A. Which equation represents circle B?`,
    options: [
      "A) $(x - 2)^2 + (y - 7)^2 = 50$",
      "B) $(x - 2)^2 + (y - 7)^2 = 100$",
      "C) $(x - 2)^2 + (y - 7)^2 = 250$",
      "D) $(x - 2)^2 + (y - 7)^2 = 625$"
    ],
    correctAnswer: 1,
    explanation: `The radius of circle A is $r_A = \\sqrt{25} = 5$.
Circle B has radius $r_B = 2 \\times 5 = 10$.
The squared radius for circle B is $r_B^2 = 10^2 = 100$.
Since the center remains $(2, 7)$, the equation for circle B is $(x - 2)^2 + (y - 7)^2 = 100$.`,
    category: "Circle Equations"
  },
  {
    id: 20,
    question: `A chemist mixed $x$ liters of a $4\\%$ saline solution with $y$ liters of a $7\\%$ saline solution to produce a $6\\%$ saline solution. Which equation best represents this situation? (Assume the volumes of the solutions are additive.)`,
    options: [
      "A) $0.4x + 0.7y = 0.6(x + y)$",
      "B) $0.4x + 0.7y = 6(x + y)$",
      "C) $0.04x + 0.07y = 0.06(x + y)$",
      "D) $0.04x + 0.07y = 6(x + y)$"
    ],
    correctAnswer: 2,
    explanation: `The amount of pure salt in the $4\\%$ solution is $0.04x$.
The amount of pure salt in the $7\\%$ solution is $0.07y$.
The total final volume is $x + y$, with a concentration of $6\\%$, giving $0.06(x + y)$ pure salt.
Equating the salt amounts gives:
$$ 0.04x + 0.07y = 0.06(x + y) $$`,
    category: "Percentages"
  },
  {
    id: 21,
    question: `The length of a rectangle's diagonal is $\\sqrt{145}$, and the length of one of the rectangle's sides is $8$. What is the perimeter of the rectangle?`,
    options: ["A) $145$", "B) $72$", "C) $34$", "D) $17$"],
    correctAnswer: 2,
    explanation: `Use the Pythagorean theorem ($a^2 + b^2 = c^2$) with diagonal $c = \\sqrt{145}$ and side $a = 8$:
$$ 8^2 + b^2 = (\\sqrt{145})^2 \\implies 64 + b^2 = 145 $$
$$ b^2 = 81 \\implies b = 9 $$
The dimensions of the rectangle are $8$ and $9$.
Perimeter $P = 2(l + w) = 2(8 + 9) = 2(17) = 34$.`,
    category: "Geometry"
  },
  {
    id: 22,
    question: `A geologist is analyzing a sample of a coarse-grained igneous rock. The equation $3.00x + 4.00y = 98.0$ gives the relationship between the estimated volumes of mineral X and mineral Y found in the sample, where $x$ is the estimated volume, in cubic centimeters ($\\text{cm}^3$), of mineral X and $y$ is the estimated volume, in $\\text{cm}^3$, of mineral Y. If the estimated volume of mineral Y in the sample is $12.8\\text{ cm}^3$, what is the estimated volume, in $\\text{cm}^3$, of mineral X in the sample?`,
    options: [],
    correctAnswer: 0,
    answerText: "15.6",
    explanation: `Substitute $y = 12.8$ into the given equation:
$$ 3.00x + 4.00(12.8) = 98.0 $$
$$ 3.00x + 51.2 = 98.0 $$
Subtract $51.2$ from both sides:
$$ 3.00x = 46.8 \\implies x = \\frac{46.8}{3.00} = 15.6 $$`,
    category: "Linear Equations"
  },

  // MODULE 2 (Questions 23 to 44)
  {
    id: 23,
    question: `A cable company charges new customers a onetime installation fee and a monthly service fee for cable service. The equation $y = 50x + 120$ gives the total amount $y$, in dollars, the cable company charges new customers for $x$ months of cable service. What is the amount, in dollars, of the onetime installation fee the cable company charges new customers?`,
    options: ["A) $170$", "B) $120$", "C) $70$", "D) $0$"],
    correctAnswer: 1,
    explanation: `In the linear equation $y = 50x + 120$:
- $50$ represents the recurring monthly service fee (multiplied by months $x$).
- $120$ represents the fixed $y$-intercept (the onetime installation fee).`,
    category: "Linear Functions"
  },
  {
    id: 24,
    question: `Data set X: $13, 16, 19, 21, 24, 25, 25, 26, 38$
Data set Y: $13, 16, 19, 21, 24, 25, 25, 26, 33$

Data set Y is created by replacing the number $38$ in data set X with the number $33$. Which of the following statements is true about the means and medians of data set X and data set Y?`,
    options: [
      "A) The mean of data set X is greater than the mean of data set Y, and the median of data set X equals the median of data set Y.",
      "B) The mean of data set X is greater than the mean of data set Y, and the median of data set X is greater than the median of data set Y.",
      "C) The mean of data set X equals the mean of data set Y, and the median of data set X equals the median of data set Y.",
      "D) The mean of data set X is less than the mean of data set Y, and the median of data set X is greater than the median of data set Y."
    ],
    correctAnswer: 0,
    explanation: `Both data sets contain $9$ values arranged in ascending order.
- **Median**: The middle ($5^{\\text{th}}$) value in both data sets is $24$. So the medians are equal.
- **Mean**: Replacing $38$ with a smaller number ($33$) decreases the sum of values. Therefore, the mean of data set X is greater than the mean of data set Y.
Choice A is correct.`,
    category: "Statistics"
  },
  {
    id: 25,
    question: `$$ y = 4x + 36 $$
One of the two equations in a system of linear equations is given. The system has infinitely many solutions. Which equation could be the second equation in this system?`,
    options: [
      "A) $y - 4x = -36$",
      "B) $y - 4x = 36$",
      "C) $y - 9x = 18$",
      "D) $y - 9x = 0$"
    ],
    correctAnswer: 1,
    explanation: `For a system to have infinitely many solutions, both equations must represent the exact same line.
Take $y = 4x + 36$ and subtract $4x$ from both sides:
$$ y - 4x = 36 $$
This matches Choice B.`,
    category: "Systems of Equations"
  },
  {
    id: 26,
    question: `If $x + 3y = 29$ and $7x - 12y = -61$, what is the value of $y$?`,
    options: [],
    correctAnswer: 0,
    answerText: "8",
    explanation: `Multiply the first equation by $-7$ to cancel $x$:
$$ -7(x + 3y) = -7(29) \\implies -7x - 21y = -203 $$
Add this to the second equation ($7x - 12y = -61$):
$$ (-7x - 21y) + (7x - 12y) = -203 + (-61) $$
$$ -33y = -264 \\implies y = \\frac{-264}{-33} = 8 $$`,
    category: "Systems of Equations"
  },
  {
    id: 27,
    question: `$$ R = \\frac{0.36l}{A} $$
The given equation relates the resistance $R$, in ohms, of a wire to its length $l$, in meters, and its cross-sectional area $A$, in square meters. Which equation correctly expresses the length, in meters, of the wire in terms of its resistance, in ohms, and its cross-sectional area, in square meters?`,
    options: [
      "A) $l = \\frac{R \\cdot A}{0.36}$",
      "B) $l = \\frac{R + A}{0.36}$",
      "C) $l = \\frac{0.36R}{A}$",
      "D) $l = \\frac{A \\cdot R}{0.36}$"
    ],
    correctAnswer: 0,
    explanation: `Multiply both sides by $A$ to clear the denominator:
$$ R \\cdot A = 0.36l $$
Divide both sides by $0.36$:
$$ l = \\frac{R \\cdot A}{0.36} $$`,
    category: "Isolating Variables"
  },
  {
    id: 28,
    question: `For the polynomial function $f$, the graph of $y = f(x)$ in the $xy$-plane passes through the points $(-5, 0)$, $(3, 0)$, and $(7, 0)$. Which of the following must be a factor of $f(x)$?`,
    options: ["A) $x + 3$", "B) $x + 7$", "C) $x - 3$", "D) $x - 5$"],
    correctAnswer: 2,
    explanation: `The $x$-intercepts of a function correspond to the roots of the polynomial.
If a polynomial passes through $(r, 0)$, then $(x - r)$ is a factor.
Given root at $x = 3$, $(x - 3)$ must be a factor.
Among the choices, $(x - 3)$ is listed.`,
    category: "Polynomial Functions"
  },
  {
    id: 29,
    question: `Which shaded region represents the solutions to the inequality $4x + 5y < 9$?`,
    options: [
      `A) <div class="my-2 flex justify-start"><svg width="270" height="240" viewBox="0 0 270 240" class="border border-gray-300 rounded-lg bg-white p-1"><defs><marker id="arrA" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#000000"/></marker></defs><g stroke="#d1d5db" stroke-width="1"><line x1="40" y1="20" x2="40" y2="220"/><line x1="60" y1="20" x2="60" y2="220"/><line x1="80" y1="20" x2="80" y2="220"/><line x1="100" y1="20" x2="100" y2="220"/><line x1="120" y1="20" x2="120" y2="220"/><line x1="140" y1="20" x2="140" y2="220"/><line x1="160" y1="20" x2="160" y2="220"/><line x1="180" y1="20" x2="180" y2="220"/><line x1="200" y1="20" x2="200" y2="220"/><line x1="220" y1="20" x2="220" y2="220"/><line x1="240" y1="20" x2="240" y2="220"/><line x1="40" y1="20" x2="240" y2="20"/><line x1="40" y1="40" x2="240" y2="40"/><line x1="40" y1="60" x2="240" y2="60"/><line x1="40" y1="80" x2="240" y2="80"/><line x1="40" y1="100" x2="240" y2="100"/><line x1="40" y1="120" x2="240" y2="120"/><line x1="40" y1="140" x2="240" y2="140"/><line x1="40" y1="160" x2="240" y2="160"/><line x1="40" y1="180" x2="240" y2="180"/><line x1="40" y1="200" x2="240" y2="200"/><line x1="40" y1="220" x2="240" y2="220"/></g><polygon points="40,182 240,22 240,220 40,220" fill="rgba(0, 0, 0, 0.25)"/><line x1="25" y1="120" x2="252" y2="120" stroke="#000000" stroke-width="1.8" marker-end="url(#arrA)"/><line x1="140" y1="230" x2="140" y2="10" stroke="#000000" stroke-width="1.8" marker-end="url(#arrA)"/><text x="256" y="124" font-size="12" font-style="italic" font-weight="bold" fill="#000000">x</text><text x="136" y="9" font-size="12" font-style="italic" font-weight="bold" fill="#000000">y</text><text x="128" y="131" font-size="10" font-style="italic" fill="#000000">O</text><text x="40" y="132" text-anchor="middle" font-size="9" fill="#000000">-10</text><text x="60" y="132" text-anchor="middle" font-size="9" fill="#000000">-8</text><text x="80" y="132" text-anchor="middle" font-size="9" fill="#000000">-6</text><text x="100" y="132" text-anchor="middle" font-size="9" fill="#000000">-4</text><text x="120" y="132" text-anchor="middle" font-size="9" fill="#000000">-2</text><text x="160" y="132" text-anchor="middle" font-size="9" fill="#000000">2</text><text x="180" y="132" text-anchor="middle" font-size="9" fill="#000000">4</text><text x="200" y="132" text-anchor="middle" font-size="9" fill="#000000">6</text><text x="220" y="132" text-anchor="middle" font-size="9" fill="#000000">8</text><text x="240" y="132" text-anchor="middle" font-size="9" fill="#000000">10</text><text x="135" y="23" text-anchor="end" font-size="9" fill="#000000">10</text><text x="135" y="43" text-anchor="end" font-size="9" fill="#000000">8</text><text x="135" y="63" text-anchor="end" font-size="9" fill="#000000">6</text><text x="135" y="83" text-anchor="end" font-size="9" fill="#000000">4</text><text x="135" y="103" text-anchor="end" font-size="9" fill="#000000">2</text><text x="135" y="143" text-anchor="end" font-size="9" fill="#000000">-2</text><text x="135" y="163" text-anchor="end" font-size="9" fill="#000000">-4</text><text x="135" y="183" text-anchor="end" font-size="9" fill="#000000">-6</text><text x="135" y="203" text-anchor="end" font-size="9" fill="#000000">-8</text><text x="135" y="223" text-anchor="end" font-size="9" fill="#000000">-10</text><line x1="40" y1="182" x2="240" y2="22" stroke="#000000" stroke-width="2" stroke-dasharray="5,5"/></svg></div>`,

      `B) <div class="my-2 flex justify-start"><svg width="270" height="240" viewBox="0 0 270 240" class="border border-gray-300 rounded-lg bg-white p-1"><defs><marker id="arrB" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#000000"/></marker></defs><g stroke="#d1d5db" stroke-width="1"><line x1="40" y1="20" x2="40" y2="220"/><line x1="60" y1="20" x2="60" y2="220"/><line x1="80" y1="20" x2="80" y2="220"/><line x1="100" y1="20" x2="100" y2="220"/><line x1="120" y1="20" x2="120" y2="220"/><line x1="140" y1="20" x2="140" y2="220"/><line x1="160" y1="20" x2="160" y2="220"/><line x1="180" y1="20" x2="180" y2="220"/><line x1="200" y1="20" x2="200" y2="220"/><line x1="220" y1="20" x2="220" y2="220"/><line x1="240" y1="20" x2="240" y2="220"/><line x1="40" y1="20" x2="240" y2="20"/><line x1="40" y1="40" x2="240" y2="40"/><line x1="40" y1="60" x2="240" y2="60"/><line x1="40" y1="80" x2="240" y2="80"/><line x1="40" y1="100" x2="240" y2="100"/><line x1="40" y1="120" x2="240" y2="120"/><line x1="40" y1="140" x2="240" y2="140"/><line x1="40" y1="160" x2="240" y2="160"/><line x1="40" y1="180" x2="240" y2="180"/><line x1="40" y1="200" x2="240" y2="200"/><line x1="40" y1="220" x2="240" y2="220"/></g><polygon points="40,182 240,22 240,20 40,20" fill="rgba(0, 0, 0, 0.25)"/><line x1="25" y1="120" x2="252" y2="120" stroke="#000000" stroke-width="1.8" marker-end="url(#arrB)"/><line x1="140" y1="230" x2="140" y2="10" stroke="#000000" stroke-width="1.8" marker-end="url(#arrB)"/><text x="256" y="124" font-size="12" font-style="italic" font-weight="bold" fill="#000000">x</text><text x="136" y="9" font-size="12" font-style="italic" font-weight="bold" fill="#000000">y</text><text x="128" y="131" font-size="10" font-style="italic" fill="#000000">O</text><text x="40" y="132" text-anchor="middle" font-size="9" fill="#000000">-10</text><text x="60" y="132" text-anchor="middle" font-size="9" fill="#000000">-8</text><text x="80" y="132" text-anchor="middle" font-size="9" fill="#000000">-6</text><text x="100" y="132" text-anchor="middle" font-size="9" fill="#000000">-4</text><text x="120" y="132" text-anchor="middle" font-size="9" fill="#000000">-2</text><text x="160" y="132" text-anchor="middle" font-size="9" fill="#000000">2</text><text x="180" y="132" text-anchor="middle" font-size="9" fill="#000000">4</text><text x="200" y="132" text-anchor="middle" font-size="9" fill="#000000">6</text><text x="220" y="132" text-anchor="middle" font-size="9" fill="#000000">8</text><text x="240" y="132" text-anchor="middle" font-size="9" fill="#000000">10</text><text x="135" y="23" text-anchor="end" font-size="9" fill="#000000">10</text><text x="135" y="43" text-anchor="end" font-size="9" fill="#000000">8</text><text x="135" y="63" text-anchor="end" font-size="9" fill="#000000">6</text><text x="135" y="83" text-anchor="end" font-size="9" fill="#000000">4</text><text x="135" y="103" text-anchor="end" font-size="9" fill="#000000">2</text><text x="135" y="143" text-anchor="end" font-size="9" fill="#000000">-2</text><text x="135" y="163" text-anchor="end" font-size="9" fill="#000000">-4</text><text x="135" y="183" text-anchor="end" font-size="9" fill="#000000">-6</text><text x="135" y="203" text-anchor="end" font-size="9" fill="#000000">-8</text><text x="135" y="223" text-anchor="end" font-size="9" fill="#000000">-10</text><line x1="40" y1="182" x2="240" y2="22" stroke="#000000" stroke-width="2" stroke-dasharray="5,5"/></svg></div>`,

      `C) <div class="my-2 flex justify-start"><svg width="270" height="240" viewBox="0 0 270 240" class="border border-gray-300 rounded-lg bg-white p-1"><defs><marker id="arrC" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#000000"/></marker></defs><g stroke="#d1d5db" stroke-width="1"><line x1="40" y1="20" x2="40" y2="220"/><line x1="60" y1="20" x2="60" y2="220"/><line x1="80" y1="20" x2="80" y2="220"/><line x1="100" y1="20" x2="100" y2="220"/><line x1="120" y1="20" x2="120" y2="220"/><line x1="140" y1="20" x2="140" y2="220"/><line x1="160" y1="20" x2="160" y2="220"/><line x1="180" y1="20" x2="180" y2="220"/><line x1="200" y1="20" x2="200" y2="220"/><line x1="220" y1="20" x2="220" y2="220"/><line x1="240" y1="20" x2="240" y2="220"/><line x1="40" y1="20" x2="240" y2="20"/><line x1="40" y1="40" x2="240" y2="40"/><line x1="40" y1="60" x2="240" y2="60"/><line x1="40" y1="80" x2="240" y2="80"/><line x1="40" y1="100" x2="240" y2="100"/><line x1="40" y1="120" x2="240" y2="120"/><line x1="40" y1="140" x2="240" y2="140"/><line x1="40" y1="160" x2="240" y2="160"/><line x1="40" y1="180" x2="240" y2="180"/><line x1="40" y1="200" x2="240" y2="200"/><line x1="40" y1="220" x2="240" y2="220"/></g><polygon points="40,22 240,182 240,220 40,220" fill="rgba(0, 0, 0, 0.25)"/><line x1="25" y1="120" x2="252" y2="120" stroke="#000000" stroke-width="1.8" marker-end="url(#arrC)"/><line x1="140" y1="230" x2="140" y2="10" stroke="#000000" stroke-width="1.8" marker-end="url(#arrC)"/><text x="256" y="124" font-size="12" font-style="italic" font-weight="bold" fill="#000000">x</text><text x="136" y="9" font-size="12" font-style="italic" font-weight="bold" fill="#000000">y</text><text x="128" y="131" font-size="10" font-style="italic" fill="#000000">O</text><text x="40" y="132" text-anchor="middle" font-size="9" fill="#000000">-10</text><text x="60" y="132" text-anchor="middle" font-size="9" fill="#000000">-8</text><text x="80" y="132" text-anchor="middle" font-size="9" fill="#000000">-6</text><text x="100" y="132" text-anchor="middle" font-size="9" fill="#000000">-4</text><text x="120" y="132" text-anchor="middle" font-size="9" fill="#000000">-2</text><text x="160" y="132" text-anchor="middle" font-size="9" fill="#000000">2</text><text x="180" y="132" text-anchor="middle" font-size="9" fill="#000000">4</text><text x="200" y="132" text-anchor="middle" font-size="9" fill="#000000">6</text><text x="220" y="132" text-anchor="middle" font-size="9" fill="#000000">8</text><text x="240" y="132" text-anchor="middle" font-size="9" fill="#000000">10</text><text x="135" y="23" text-anchor="end" font-size="9" fill="#000000">10</text><text x="135" y="43" text-anchor="end" font-size="9" fill="#000000">8</text><text x="135" y="63" text-anchor="end" font-size="9" fill="#000000">6</text><text x="135" y="83" text-anchor="end" font-size="9" fill="#000000">4</text><text x="135" y="103" text-anchor="end" font-size="9" fill="#000000">2</text><text x="135" y="143" text-anchor="end" font-size="9" fill="#000000">-2</text><text x="135" y="163" text-anchor="end" font-size="9" fill="#000000">-4</text><text x="135" y="183" text-anchor="end" font-size="9" fill="#000000">-6</text><text x="135" y="203" text-anchor="end" font-size="9" fill="#000000">-8</text><text x="135" y="223" text-anchor="end" font-size="9" fill="#000000">-10</text><line x1="40" y1="22" x2="240" y2="182" stroke="#000000" stroke-width="2" stroke-dasharray="5,5"/></svg></div>`,

      `D) <div class="my-2 flex justify-start"><svg width="270" height="240" viewBox="0 0 270 240" class="border border-gray-300 rounded-lg bg-white p-1"><defs><marker id="arrD" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#000000"/></marker></defs><g stroke="#d1d5db" stroke-width="1"><line x1="40" y1="20" x2="40" y2="220"/><line x1="60" y1="20" x2="60" y2="220"/><line x1="80" y1="20" x2="80" y2="220"/><line x1="100" y1="20" x2="100" y2="220"/><line x1="120" y1="20" x2="120" y2="220"/><line x1="140" y1="20" x2="140" y2="220"/><line x1="160" y1="20" x2="160" y2="220"/><line x1="180" y1="20" x2="180" y2="220"/><line x1="200" y1="20" x2="200" y2="220"/><line x1="220" y1="20" x2="220" y2="220"/><line x1="240" y1="20" x2="240" y2="220"/><line x1="40" y1="20" x2="240" y2="20"/><line x1="40" y1="40" x2="240" y2="40"/><line x1="40" y1="60" x2="240" y2="60"/><line x1="40" y1="80" x2="240" y2="80"/><line x1="40" y1="100" x2="240" y2="100"/><line x1="40" y1="120" x2="240" y2="120"/><line x1="40" y1="140" x2="240" y2="140"/><line x1="40" y1="160" x2="240" y2="160"/><line x1="40" y1="180" x2="240" y2="180"/><line x1="40" y1="200" x2="240" y2="200"/><line x1="40" y1="220" x2="240" y2="220"/></g><polygon points="40,22 240,182 240,20 40,20" fill="rgba(0, 0, 0, 0.25)"/><line x1="25" y1="120" x2="252" y2="120" stroke="#000000" stroke-width="1.8" marker-end="url(#arrD)"/><line x1="140" y1="230" x2="140" y2="10" stroke="#000000" stroke-width="1.8" marker-end="url(#arrD)"/><text x="256" y="124" font-size="12" font-style="italic" font-weight="bold" fill="#000000">x</text><text x="136" y="9" font-size="12" font-style="italic" font-weight="bold" fill="#000000">y</text><text x="128" y="131" font-size="10" font-style="italic" fill="#000000">O</text><text x="40" y="132" text-anchor="middle" font-size="9" fill="#000000">-10</text><text x="60" y="132" text-anchor="middle" font-size="9" fill="#000000">-8</text><text x="80" y="132" text-anchor="middle" font-size="9" fill="#000000">-6</text><text x="100" y="132" text-anchor="middle" font-size="9" fill="#000000">-4</text><text x="120" y="132" text-anchor="middle" font-size="9" fill="#000000">-2</text><text x="160" y="132" text-anchor="middle" font-size="9" fill="#000000">2</text><text x="180" y="132" text-anchor="middle" font-size="9" fill="#000000">4</text><text x="200" y="132" text-anchor="middle" font-size="9" fill="#000000">6</text><text x="220" y="132" text-anchor="middle" font-size="9" fill="#000000">8</text><text x="240" y="132" text-anchor="middle" font-size="9" fill="#000000">10</text><text x="135" y="23" text-anchor="end" font-size="9" fill="#000000">10</text><text x="135" y="43" text-anchor="end" font-size="9" fill="#000000">8</text><text x="135" y="63" text-anchor="end" font-size="9" fill="#000000">6</text><text x="135" y="83" text-anchor="end" font-size="9" fill="#000000">4</text><text x="135" y="103" text-anchor="end" font-size="9" fill="#000000">2</text><text x="135" y="143" text-anchor="end" font-size="9" fill="#000000">-2</text><text x="135" y="163" text-anchor="end" font-size="9" fill="#000000">-4</text><text x="135" y="183" text-anchor="end" font-size="9" fill="#000000">-6</text><text x="135" y="203" text-anchor="end" font-size="9" fill="#000000">-8</text><text x="135" y="223" text-anchor="end" font-size="9" fill="#000000">-10</text><line x1="40" y1="22" x2="240" y2="182" stroke="#000000" stroke-width="2" stroke-dasharray="5,5"/></svg></div>`
    ],
    correctAnswer: 2,
    explanation: `Convert the inequality to slope-intercept form:
$$ 4x + 5y < 9 \\implies 5y < -4x + 9 \\implies y < -\\frac{4}{5}x + \\frac{9}{5} $$
- **Slope**: The boundary line has a negative slope ($m = -\\frac{4}{5} = -0.8$).
- **$y$-intercept**: The boundary line intersects the $y$-axis at $(0, 1.8)$.
- **Dashed Line**: Because the inequality is strict ($<$), the boundary line must be dashed.
- **Shaded Region**: The inequality $y < -\\frac{4}{5}x + 1.8$ means the region below the line is shaded.

Evaluating the choices:
- Graph A: Positive slope, shaded below.
- Graph B: Positive slope, shaded above.
- **Graph C**: Negative slope ($y$-intercept $1.8$), dashed line, shaded below. (Correct)
- Graph D: Negative slope, shaded above.`,
    category: "Linear Inequalities"
  },
  {
    id: 30,
    question: `In the $xy$-plane, line $k$ has a slope of $\\frac{6}{13}$, an $x$-intercept of $(-6, 0)$, and a $y$-intercept of $(0, p)$. What is the value of $p$?`,
    options: [],
    correctAnswer: 0,
    answerText: "36/13",
    explanation: `Use the slope formula $m = \\frac{y_2 - y_1}{x_2 - x_1}$ with points $(-6, 0)$ and $(0, p)$:
$$ \\text{slope} = \\frac{p - 0}{0 - (-6)} = \\frac{p}{6} $$
Set equal to the given slope $\\frac{6}{13}$:
$$ \\frac{p}{6} = \\frac{6}{13} \\implies p = \\frac{36}{13} $$`,
    category: "Linear Functions"
  },
  {
    id: 31,
    question: `The measure of angle $S$ is $\\frac{8\\pi}{11}$ radians. The measure of angle $T$ is $2$ times the measure of angle $S$. Which expression represents the measure, in degrees, of angle $T$?`,
    options: [
      "A) $\\frac{8}{11\\pi}(90)(2)$",
      "B) $\\frac{8}{11}(180)(2)$",
      "C) $\\frac{8}{11\\pi}(90)(2)$",
      "D) $\\frac{8\\pi}{11}(180)(2)$"
    ],
    correctAnswer: 1,
    explanation: `Angle $T$ in radians is $2 \\times \\frac{8\\pi}{11} = \\frac{16\\pi}{11}$.
To convert radians to degrees, multiply by $\\frac{180^\\circ}{\\pi}$:
$$ \\text{Measure of } T \\text{ in degrees} = \\left(\\frac{16\\pi}{11}\\right) \\times \\left(\\frac{180}{\\pi}\\right) = \\frac{16 \\times 180}{11} $$
Factoring back out:
$$ \\frac{16 \\times 180}{11} = \\frac{8}{11}(180)(2) $$`,
    category: "Trigonometry"
  },
  {
    id: 32,
    question: `What is the $x$-intercept of the graph of $y = \\frac{45 - x}{ax + b}$ in the $xy$-plane, where $a$ and $b$ are positive constants?`,
    options: [
      "A) $\\left(-\\frac{b}{a}, 0\\right)$",
      "B) $\\left(0, \\frac{45}{b}\\right)$",
      "C) $(0, -45)$",
      "D) $(45, 0)$"
    ],
    correctAnswer: 3,
    explanation: `The $x$-intercept occurs when $y = 0$:
$$ 0 = \\frac{45 - x}{ax + b} \\implies 45 - x = 0 \\implies x = 45 $$
Thus, the $x$-intercept coordinate pair is $(45, 0)$.`,
    category: "Rational Functions"
  },
  {
    id: 33,
    question: `The ratio $x$ to $y$ is equivalent to the ratio $4$ to $7$. If $x = 11t$, what is the value of $y$ in terms of $t$?`,
    options: [
      "A) $\\frac{4}{7}t$",
      "B) $\\frac{7}{44}t$",
      "C) $\\frac{44}{7}t$",
      "D) $\\frac{77}{4}t$"
    ],
    correctAnswer: 3,
    explanation: `Set up the ratio proportion:
$$ \\frac{x}{y} = \\frac{4}{7} \\implies 4y = 7x \\implies y = \\frac{7}{4}x $$
Substitute $x = 11t$:
$$ y = \\frac{7}{4}(11t) = \\frac{77}{4}t $$`,
    category: "Ratios & Proportions"
  },
  {
    id: 34,
    question: `A research manager selected 2 random samples of ovens of a certain type to estimate the average amount of time this type of oven takes to preheat to $350^\\circ\\text{F}$. The research manager recorded the amount of time, in minutes, each oven takes to preheat to $350^\\circ\\text{F}$. Based on the first sample, the research manager estimated that this type of oven takes an average of $14.2$ minutes to preheat to $350^\\circ\\text{F}$ with an associated margin of error of $1$ minute. Based on the second sample, the research manager estimated that this type of oven takes an average of $14.4$ minutes to preheat to $350^\\circ\\text{F}$, with an associated margin of error of $2.2$ minutes. Assuming the margins of error were calculated the same way, which of the following best explains why the first sample obtained a smaller margin of error than the second sample?`,
    options: [
      "A) The first sample contained fewer ovens than the second sample.",
      "B) The first sample contained more ovens than the second sample.",
      "C) The first sample took less time on average to preheat to $350^\\circ\\text{F}$ than the second sample.",
      "D) The first sample took more time on average to preheat to $350^\\circ\\text{F}$ than the second sample."
    ],
    correctAnswer: 1,
    explanation: `The margin of error for a sample mean is inversely proportional to the square root of the sample size ($n$).
A larger sample size produces a smaller margin of error.
Since the first sample had a smaller margin of error ($1$ minute vs $2.2$ minutes), it must have contained a larger number of ovens.`,
    category: "Statistics"
  },
  {
    id: 35,
    question: `For the given function $f(x) = 23(1.20)^{x/4}$, the value of $f(x)$ increases by $p\\%$ for every increase of $x$ by $8$. What is the value of $p$?`,
    options: ["A) $20$", "B) $31$", "C) $40$", "D) $44$"],
    correctAnswer: 3,
    explanation: `When $x$ increases by $8$, the exponent in the function increases by $\\frac{8}{4} = 2$:
$$ \\text{Growth factor} = (1.20)^2 = 1.44 $$
A multiplier of $1.44$ represents a $44\\%$ increase ($100\\% + 44\\% = 144\\%$).
Therefore, $p = 44$.`,
    category: "Exponential Functions"
  },
  {
    id: 36,
    question: `A model estimates that in a particular forest, the number of trees with any given diameter measured at shoulder height is $21\\%$ less for each 1-inch increase in tree diameter measured at shoulder height. The model can be written in the form $f(x) = ab^x$, where $a$ and $b$ are constants and $x$ is the tree's diameter, in inches, measured at shoulder height, and $x \\ge 5$. The model estimates that $3,100$ trees in this forest have a diameter of $13$ inches measured at shoulder height. Which function best represents this model?`,
    options: [
      "A) $f(x) = 3,100(0.21)^x$",
      "B) $f(x) = 3,100(0.79)^x$",
      "C) $f(x) = 66,000(0.21)^x$",
      "D) $f(x) = 66,000(0.79)^x$"
    ],
    correctAnswer: 3,
    explanation: `A decrease of $21\\%$ means the remaining percentage is $100\\% - 21\\% = 79\\%$, so the decay factor $b = 0.79$.
Use the point $x = 13$ and $f(13) = 3,100$:
$$ 3,100 = a(0.79)^{13} \\implies a = \\frac{3,100}{(0.79)^{13}} \\approx 66,343 \\approx 66,000 $$
Thus, $f(x) = 66,000(0.79)^x$.`,
    category: "Exponential Functions"
  },
  {
    id: 37,
    question: `The scatterplot shows the relationship between two variables, $t$ and $d$. Which of the following equations is the most appropriate linear model for the data shown?

<div class="my-4 flex justify-center">
  <svg width="360" height="300" viewBox="0 0 360 300" class="border border-gray-300 rounded-lg bg-white p-2">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" />
      </marker>
    </defs>
    <!-- Grid Lines -->
    <g stroke="#d1d5db" stroke-width="1">
      <!-- Vertical Grid Lines (t = 230 to 275 every 5 units) -->
      <line x1="100" y1="20" x2="100" y2="260"/>
      <line x1="125" y1="20" x2="125" y2="260"/>
      <line x1="150" y1="20" x2="150" y2="260"/>
      <line x1="175" y1="20" x2="175" y2="260"/>
      <line x1="200" y1="20" x2="200" y2="260"/>
      <line x1="225" y1="20" x2="225" y2="260"/>
      <line x1="250" y1="20" x2="250" y2="260"/>
      <line x1="275" y1="20" x2="275" y2="260"/>
      <line x1="300" y1="20" x2="300" y2="260"/>
      <line x1="325" y1="20" x2="325" y2="260"/>

      <!-- Horizontal Grid Lines (d = 245 to 525 every 35 units) -->
      <line x1="60" y1="30" x2="335" y2="30"/>
      <line x1="60" y1="55" x2="335" y2="55"/>
      <line x1="60" y1="80" x2="335" y2="80"/>
      <line x1="60" y1="105" x2="335" y2="105"/>
      <line x1="60" y1="130" x2="335" y2="130"/>
      <line x1="60" y1="155" x2="335" y2="155"/>
      <line x1="60" y1="180" x2="335" y2="180"/>
      <line x1="60" y1="205" x2="335" y2="205"/>
      <line x1="60" y1="230" x2="335" y2="230"/>
    </g>

    <!-- Axes -->
    <line x1="45" y1="260" x2="348" y2="260" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="60" y1="260" x2="60" y2="12" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Axis Break Symbols -->
    <path d="M 56 248 L 60 242 L 64 252 L 60 246" fill="none" stroke="#000000" stroke-width="1.8"/>
    <path d="M 72 256 L 78 260 L 74 264 L 80 260" fill="none" stroke="#000000" stroke-width="1.8"/>

    <!-- Axis Ticks -->
    <g stroke="#000000" stroke-width="1.5">
      <line x1="60" y1="256" x2="60" y2="264"/>
      <line x1="100" y1="256" x2="100" y2="264"/>
      <line x1="150" y1="256" x2="150" y2="264"/>
      <line x1="200" y1="256" x2="200" y2="264"/>
      <line x1="250" y1="256" x2="250" y2="264"/>
      <line x1="300" y1="256" x2="300" y2="264"/>

      <line x1="56" y1="30" x2="64" y2="30"/>
      <line x1="56" y1="55" x2="64" y2="55"/>
      <line x1="56" y1="80" x2="64" y2="80"/>
      <line x1="56" y1="105" x2="64" y2="105"/>
      <line x1="56" y1="130" x2="64" y2="130"/>
      <line x1="56" y1="155" x2="64" y2="155"/>
      <line x1="56" y1="180" x2="64" y2="180"/>
      <line x1="56" y1="205" x2="64" y2="205"/>
      <line x1="56" y1="230" x2="64" y2="230"/>
    </g>

    <!-- Axis Labels -->
    <text x="352" y="264" font-size="14" font-style="italic" font-weight="bold" fill="#000000">t</text>
    <text x="56" y="10" font-size="14" font-style="italic" font-weight="bold" fill="#000000">d</text>

    <!-- X Numbers -->
    <text x="60" y="280" text-anchor="middle" font-size="11" fill="#000000">0</text>
    <text x="100" y="280" text-anchor="middle" font-size="11" fill="#000000">230</text>
    <text x="150" y="280" text-anchor="middle" font-size="11" fill="#000000">240</text>
    <text x="200" y="280" text-anchor="middle" font-size="11" fill="#000000">250</text>
    <text x="250" y="280" text-anchor="middle" font-size="11" fill="#000000">260</text>
    <text x="300" y="280" text-anchor="middle" font-size="11" fill="#000000">270</text>

    <!-- Y Numbers -->
    <text x="52" y="34" text-anchor="end" font-size="11" fill="#000000">525</text>
    <text x="52" y="59" text-anchor="end" font-size="11" fill="#000000">490</text>
    <text x="52" y="84" text-anchor="end" font-size="11" fill="#000000">455</text>
    <text x="52" y="109" text-anchor="end" font-size="11" fill="#000000">420</text>
    <text x="52" y="134" text-anchor="end" font-size="11" fill="#000000">385</text>
    <text x="52" y="159" text-anchor="end" font-size="11" fill="#000000">350</text>
    <text x="52" y="184" text-anchor="end" font-size="11" fill="#000000">315</text>
    <text x="52" y="209" text-anchor="end" font-size="11" fill="#000000">280</text>
    <text x="52" y="234" text-anchor="end" font-size="11" fill="#000000">245</text>
    <text x="52" y="264" text-anchor="end" font-size="11" fill="#000000">0</text>

    <!-- Line of Best Fit -->
    <line x1="90" y1="120" x2="310" y2="55" stroke="#000000" stroke-width="2.5"/>

    <!-- Scatter Points matching reference image -->
    <circle cx="105" cy="120" r="3.5" fill="#000000"/>
    <circle cx="120" cy="103" r="3.5" fill="#000000"/>
    <circle cx="155" cy="104" r="3.5" fill="#000000"/>
    <circle cx="220" cy="77" r="3.5" fill="#000000"/>
    <circle cx="230" cy="82" r="3.5" fill="#000000"/>
    <circle cx="260" cy="72" r="3.5" fill="#000000"/>
    <circle cx="285" cy="58" r="3.5" fill="#000000"/>
  </svg>
</div>`,
    options: [
      "A) $d = -60.1 + 2.02t$",
      "B) $d = 160.1 + 2.02t$",
      "C) $d = -359.8 + 2.02t$",
      "D) $d = -394.8 + 2.02t$"
    ],
    correctAnswer: 0,
    explanation: `Check a point on the line of best fit, e.g. $t = 230, d \\approx 404.5$:
- For Choice A: $d = -60.1 + 2.02(230) = -60.1 + 464.6 = 404.5$ (Matches the line on the graph)
- Choice B predicts $d = 160.1 + 464.6 = 624.7$ (Too high)
Therefore, Choice A is the correct model.`,
    category: "Scatterplots"
  },
  {
    id: 38,
    question: `The function $f$ is defined by $f(x) = a^x - b$, where $a$ and $b$ are constants. In the $xy$-plane, the graph of $y = f(x)$ passes through the points $(c, 11)$ and $(2c, 221)$, where $c$ is a constant. Which of the following could be the value of $b$?`,
    options: ["A) $4$", "B) $25$", "C) $210$", "D) $232$"],
    correctAnswer: 0,
    explanation: `Substitute the points into $f(x) = a^x - b$:
1) $a^c - b = 11 \\implies a^c = b + 11$
2) $a^{2c} - b = 221 \\implies (a^c)^2 - b = 221$

Substitute $a^c = b + 11$ into the second equation:
$$ (b + 11)^2 - b = 221 $$
$$ b^2 + 22b + 121 - b = 221 $$
$$ b^2 + 21b - 100 = 0 $$
Factor the quadratic:
$$ (b + 25)(b - 4) = 0 \\implies b = -25 \\text{ or } b = 4 $$
Among the choices, $4$ is listed.`,
    category: "Exponential Functions"
  },
  {
    id: 39,
    question: `The price of an item increased by $p\\%$ from $\$90$ to $\$93$. What is the value of $p$?`,
    options: [],
    correctAnswer: 0,
    answerText: "3.33",
    explanation: `Calculate the dollar increase:
$$ 93 - 90 = 3 $$
Express as a percentage of the original price ($90$):
$$ \\frac{p}{100} = \\frac{3}{90} = \\frac{1}{30} \\implies p = \\frac{100}{30} = \\frac{10}{3} \\approx 3.33 $$`,
    category: "Percentages"
  },
  {
    id: 40,
    question: `In triangle $ABC$, the measure of angle $A$ is $56^\\circ$ and $AC = 30$. In triangle $PQR$, the measure of angle $P$ is $56^\\circ$ and $PR = 90$. Which additional piece of information is sufficient to prove that triangle $ABC$ is similar to triangle $PQR$?`,
    options: [
      "A) $AB = 20$ and $PQ = 20$.",
      "B) $AB = 20$ and $QR = 60$.",
      "C) The measures of angle $B$ and angle $R$ are $48^\\circ$ and $76^\\circ$, respectively.",
      "D) The measures of angle $B$ and angle $Q$ are $56^\\circ$ and $48^\\circ$, respectively."
    ],
    correctAnswer: 2,
    explanation: `Two triangles are similar if all three pairs of corresponding angles are equal (AA Similarity Postulate).
In $\\Delta ABC$:
- $m\\angle A = 56^\\circ$ and $m\\angle B = 48^\\circ$
- $m\\angle C = 180^\\circ - 56^\\circ - 48^\\circ = 76^\\circ$

In $\\Delta PQR$:
- $m\\angle P = 56^\\circ$ and $m\\angle R = 76^\\circ$
- $m\\angle Q = 180^\\circ - 56^\\circ - 76^\\circ = 48^\\circ$

Both triangles have angle measures $56^\\circ, 48^\\circ$, and $76^\\circ$, which satisfies AA similarity.`,
    category: "Geometry"
  },
  {
    id: 41,
    question: `$$ \\frac{5}{9}(5x + 9)(x + \\sqrt{5k + 9})(x - \\sqrt{5k + 9}) = 0 $$
In the given equation, $k$ is a positive constant. The product of the solutions to the equation is $81$. What is the value of $k$?`,
    options: [],
    correctAnswer: 0,
    answerText: "36/5",
    explanation: `Set each factor to zero to find the three solutions:
1. $5x + 9 = 0 \\implies x_1 = -\\frac{9}{5}$
2. $x + \\sqrt{5k + 9} = 0 \\implies x_2 = -\\sqrt{5k + 9}$
3. $x - \\sqrt{5k + 9} = 0 \\implies x_3 = \\sqrt{5k + 9}$

Calculate the product of the solutions:
$$ \\text{Product} = \\left(-\\frac{9}{5}\\right) \\times (-\\sqrt{5k + 9}) \\times (\\sqrt{5k + 9}) = \\frac{9}{5}(5k + 9) $$
Set the product equal to $81$:
$$ \\frac{9}{5}(5k + 9) = 81 \\implies 5k + 9 = 81 \\times \\frac{5}{9} = 45 $$
$$ 5k = 36 \\implies k = \\frac{36}{5} $$`,
    category: "Polynomial Functions"
  },
  {
    id: 42,
    question: `$$ 4x^2 - px + w = -86 $$
In the given equation, $p$ and $w$ are integer constants. The equation has exactly one real solution. Which is NOT a possible value of $w$?`,
    options: ["A) $-22$", "B) $14$", "C) $25$", "D) $314$"],
    correctAnswer: 2,
    explanation: `Rewrite the quadratic equation in standard form:
$$ 4x^2 - px + (w + 86) = 0 $$
For the equation to have exactly one real solution, its discriminant must be zero:
$$ \\Delta = (-p)^2 - 4(4)(w + 86) = 0 \\implies p^2 = 16(w + 86) $$
Since $p$ is an integer, $p^2$ is a perfect square.
Since $16 = 4^2$, $(w + 86)$ must also be a perfect square.

Test the choices for $w$:
- A) $w = -22 \\implies -22 + 86 = 64 = 8^2$ (Perfect square)
- B) $w = 14 \\implies 14 + 86 = 100 = 10^2$ (Perfect square)
- C) $w = 25 \\implies 25 + 86 = 111$ (Not a perfect square)
- D) $w = 314 \\implies 314 + 86 = 400 = 20^2$ (Perfect square)

Therefore, $25$ cannot be a value of $w$.`,
    category: "Quadratic Functions"
  },
  {
    id: 43,
    question: `If $\\frac{x + 6}{5} = \\frac{x + 6}{13}$, the value of $x + 6$ is between which of the following pairs of values?`,
    options: [
      "A) $-7$ and $-5$",
      "B) $-2$ and $2$",
      "C) $2$ and $7$",
      "D) $8$ and $13$"
    ],
    correctAnswer: 1,
    explanation: `Cross-multiply to solve the equation:
$$ 13(x + 6) = 5(x + 6) \\implies 8(x + 6) = 0 \\implies x + 6 = 0 $$
The value of $x + 6$ is $0$, which lies between $-2$ and $2$.`,
    category: "Linear Equations"
  },
  {
    id: 44,
    question: `The expression $6x^4 + 17x^2 + 5$ can be rewritten as $(3x^2 + a)(2x^2 + b)$, where $a$ and $b$ are positive integers, or as $(3x^2 + c)(2x^2 + d)$, where $c$ and $d$ are positive nonintegers. What is the value of $a + c$?`,
    options: [],
    correctAnswer: 0,
    answerText: "17/2",
    explanation: `Let $u = x^2$. The expression becomes $6u^2 + 17u + 5$.
Factor over integers:
$$ 6u^2 + 15u + 2u + 5 = 3u(2u + 5) + 1(2u + 5) = (3u + 1)(2u + 5) $$
Substituting back $u = x^2$:
$$ (3x^2 + 1)(2x^2 + 5) $$
Matching with $(3x^2 + a)(2x^2 + b)$, we get $a = 1$ and $b = 5$.

For the noninteger factorization $(3x^2 + c)(2x^2 + d)$:
$$ 6x^4 + (3d + 2c)x^2 + cd = 6x^4 + 17x^2 + 5 $$
1) $cd = 5 \\implies d = \\frac{5}{c}$
2) $3d + 2c = 17 \\implies 3\\left(\\frac{5}{c}\\right) + 2c = 17 \\implies 2c^2 - 17c + 15 = 0$
Factoring $(2c - 15)(c - 1) = 0 \\implies c = \\frac{15}{2} = 7.5$ (since $c$ is a noninteger).

Thus:
$$ a + c = 1 + 7.5 = 8.5 = \\frac{17}{2} $$`,
    category: "Polynomial Functions"
  }
];
