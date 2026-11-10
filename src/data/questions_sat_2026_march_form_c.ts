import { Question } from '../../types';

export const SAT_2026_MARCH_FORM_C_SET: Question[] = [
  // --- MODULE 1 (Questions 1 - 22) ---
  {
    id: 1,
    question: `In each of the following data sets of 5 values, $p$ is a constant. Which of these data sets has the largest standard deviation?`,
    options: [
      "A) $p - 4, p, p, p, p + 4$",
      "B) $p - 1, p - 1, p, p + 1, p + 1$",
      "C) $p, p, p, p, p$",
      "D) $p - 5, p - 4, p, p + 4, p + 5$"
    ],
    correctAnswer: 3,
    explanation: `Standard deviation measures the average distance of data points from the mean.
- All four data sets have a mean of $p$.
- **Set A**: Spread up to 4 units away from $p$.
- **Set B**: Spread 1 unit away from $p$.
- **Set C**: Standard deviation is $0$ (all values are identical).
- **Set D**: Points extend up to 5 units away from $p$ ($p - 5$ and $p + 5$).

Because Set D has its values spread furthest from the mean $p$, it has the largest standard deviation.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 2,
    question: `In the right triangle shown, what is the value of $\\cos A$?

<div class="my-4 flex justify-center">
  <svg width="320" height="220" viewBox="0 0 320 220" class="border border-gray-300 rounded-lg bg-white p-2">
    <!-- Triangle ABC Path -->
    <polygon points="50,160 250,160 250,30" fill="none" stroke="#000000" stroke-width="2"/>
    <!-- Right Angle Box at B (250, 160) -->
    <polyline points="238,160 238,148 250,148" fill="none" stroke="#000000" stroke-width="1.5"/>
    <!-- Vertex Labels -->
    <text x="256" y="24" font-size="16" font-style="italic" font-weight="bold" fill="#000000">A</text>
    <text x="256" y="176" font-size="16" font-style="italic" font-weight="bold" fill="#000000">B</text>
    <text x="32" y="172" font-size="16" font-style="italic" font-weight="bold" fill="#000000">C</text>
    <!-- Side Length Labels -->
    <!-- Hypotenuse 41 -->
    <text x="135" y="80" font-size="18" fill="#000000">41</text>
    <!-- Vertical Leg 22 -->
    <text x="268" y="100" font-size="18" fill="#000000">22</text>
    <!-- Note at bottom -->
    <text x="160" y="202" text-anchor="middle" font-size="12" fill="#374151">Note: Figure not drawn to scale.</text>
  </svg>
</div>`,
    options: [
      "A) $\\frac{1}{41}$",
      "B) $\\frac{1}{22}$",
      "C) $\\frac{22}{41}$",
      "D) $\\frac{41}{22}$"
    ],
    correctAnswer: 2,
    explanation: `By definition of cosine in a right triangle:
$$ \\cos A = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} $$
- Adjacent side to angle $A$ has length $22$.
- Hypotenuse has length $41$.
Thus:
$$ \\cos A = \\frac{22}{41} $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 3,
    question: `A reindeer population was introduced into an area and researched for 19 years. Function $P(t) = 67\\left(\\frac{5}{4}\\right)^t$ models this reindeer population $t$ years after the population was introduced into the area. Which statement is the best interpretation of $\\frac{5}{4}$ in this context?`,
    options: [
      "A) For every 4 reindeer there were in this population in a certain year, it is predicted that there were 5 reindeer the next year.",
      "B) For every 5 reindeer there were in this population in a certain year, it is predicted that there were 4 reindeer the next year.",
      "C) It is predicted that this reindeer population grew by 4 reindeer every 5 years.",
      "D) It is predicted that this reindeer population grew by 5 reindeer every 4 years."
    ],
    correctAnswer: 0,
    explanation: `The function $P(t) = 67\\left(\\frac{5}{4}\\right)^t$ represents exponential growth with an annual multiplier $b = \\frac{5}{4}$.
This means for each year ($t \\to t+1$), the new population is $\\frac{5}{4}$ of the previous year's population:
$$ \\frac{P(t+1)}{P(t)} = \\frac{5}{4} $$
In other words, for every 4 reindeer present in a given year, there will be 5 reindeer in the following year.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 4,
    question: `In the figure, line $m$ is parallel to line $n$, and lines $AE$ and $CD$ intersect at point $B$. Which additional piece of information is sufficient to prove that triangle $ABC$ is congruent to triangle $EBD$?

<div class="my-4 flex justify-center">
  <svg width="340" height="230" viewBox="0 0 340 230" class="border border-gray-300 rounded-lg bg-white p-2">
    <!-- Horizontal Parallel Lines m and n -->
    <line x1="30" y1="60" x2="280" y2="60" stroke="#000000" stroke-width="2"/>
    <line x1="30" y1="150" x2="280" y2="150" stroke="#000000" stroke-width="2"/>
    <text x="290" y="64" font-size="16" font-style="italic" font-family="serif" fill="#000000">m</text>
    <text x="290" y="154" font-size="16" font-style="italic" font-family="serif" fill="#000000">n</text>

    <!-- Extended Intersecting Line AE (passes through A(100,150), B(150,105), E(200,60)) -->
    <line x1="50" y1="195" x2="245" y2="19.5" stroke="#000000" stroke-width="2"/>

    <!-- Extended Intersecting Line CD (passes through D(120,60), B(150,105), C(180,150)) -->
    <line x1="70" y1="15" x2="225" y2="210" stroke="#000000" stroke-width="2"/>

    <!-- Point Labels -->
    <!-- D at (120,60) -->
    <text x="124" y="52" font-size="16" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">D</text>
    <!-- E at (200,60) -->
    <text x="204" y="52" font-size="16" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">E</text>
    <!-- B at (150,105) -->
    <text x="156" y="108" font-size="16" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">B</text>
    <!-- A at (100,150) -->
    <text x="94" y="172" font-size="16" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">A</text>
    <!-- C at (180,150) -->
    <text x="174" y="172" font-size="16" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">C</text>

    <!-- Bottom Note -->
    <text x="170" y="222" text-anchor="middle" font-size="12" fill="#374151">Note: Figure not drawn to scale.</text>
  </svg>
</div>`,
    options: [
      "A) $AB = 15$ and $DB = 15$",
      "B) $AB = 15$ and $EB = 15$",
      "C) Triangles $ABC$ and $EBD$ are isosceles.",
      "D) No additional information is necessary to determine that the two triangles are congruent."
    ],
    correctAnswer: 1,
    explanation: `Since line $m \\parallel n$:
- Alternate interior angles are equal: $\\angle BAC = \\angle BED$ and $\\angle BCA = \\angle BDE$.
- Vertical angles are equal: $\\angle ABC = \\angle EBD$.

This proves the two triangles are similar by AAA similarity ($\\Delta ABC \\sim \\Delta EBD$).
To prove **congruence** (equal size), we need at least one pair of corresponding sides to be equal in length.
- Side $AB$ in $\\Delta ABC$ corresponds to side $EB$ in $\\Delta EBD$.
- Therefore, knowing $AB = 15$ and $EB = 15$ guarantees that the scale factor is $1$, proving congruence by ASA.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 5,
    question: `$$ y = 30x + 200 $$
The equation gives the total cost $y$, in dollars, for a small business to produce $x$ shirts. How many shirts can the business produce for a total cost of $\$650$?`,
    options: [
      "A) 6",
      "B) 15",
      "C) 21",
      "D) 28"
    ],
    correctAnswer: 1,
    explanation: `Substitute the given total cost $y = 650$ into the equation:
$$ 650 = 30x + 200 $$
Subtract $200$ from both sides:
$$ 450 = 30x $$
Divide both sides by $30$:
$$ x = \\frac{450}{30} = 15 $$
The business can produce $15$ shirts.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 6,
    question: `An object traveled $0.80$ meters for every $3.0$ seconds it was in motion. If the object was in motion for $18$ seconds, what is the total distance, in meters, the object traveled?`,
    options: [
      "A) $4.8$",
      "B) $6.4$",
      "C) $14.4$",
      "D) $22.5$"
    ],
    correctAnswer: 0,
    explanation: `Set up a proportion for distance $d$ over time $t$:
$$ \\frac{d}{18} = \\frac{0.80}{3.0} $$
Multiply both sides by $18$:
$$ d = 18 \\times \\frac{0.80}{3.0} = 6 \\times 0.80 = 4.8 \\text{ meters} $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 7,
    question: `The scatterplot shows the relationship between two variables, $x$ and $y$. A line of best fit is also shown.

<div class="my-4 flex justify-center">
  <svg width="360" height="310" viewBox="0 0 360 310" class="border border-gray-300 rounded-lg bg-white p-2">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" />
      </marker>
    </defs>

    <!-- Subtle Grid Lines (every 1 unit for x in 1..14, y in 1..15) -->
    <g stroke="#e5e7eb" stroke-width="1">
      <!-- Vertical Grid Lines (x = 1 to 14) -->
      <line x1="65" y1="30" x2="65" y2="270"/>
      <line x1="85" y1="30" x2="85" y2="270"/>
      <line x1="105" y1="30" x2="105" y2="270"/>
      <line x1="125" y1="30" x2="125" y2="270"/>
      <line x1="145" y1="30" x2="145" y2="270"/>
      <line x1="165" y1="30" x2="165" y2="270"/>
      <line x1="185" y1="30" x2="185" y2="270"/>
      <line x1="205" y1="30" x2="205" y2="270"/>
      <line x1="225" y1="30" x2="225" y2="270"/>
      <line x1="245" y1="30" x2="245" y2="270"/>
      <line x1="265" y1="30" x2="265" y2="270"/>
      <line x1="285" y1="30" x2="285" y2="270"/>
      <line x1="305" y1="30" x2="305" y2="270"/>
      <line x1="325" y1="30" x2="325" y2="270"/>

      <!-- Horizontal Grid Lines (y = 1 to 15) -->
      <line x1="45" y1="254" x2="325" y2="254"/>
      <line x1="45" y1="238" x2="325" y2="238"/>
      <line x1="45" y1="222" x2="325" y2="222"/>
      <line x1="45" y1="206" x2="325" y2="206"/>
      <line x1="45" y1="190" x2="325" y2="190"/>
      <line x1="45" y1="174" x2="325" y2="174"/>
      <line x1="45" y1="158" x2="325" y2="158"/>
      <line x1="45" y1="142" x2="325" y2="142"/>
      <line x1="45" y1="126" x2="325" y2="126"/>
      <line x1="45" y1="110" x2="325" y2="110"/>
      <line x1="45" y1="94" x2="325" y2="94"/>
      <line x1="45" y1="78" x2="325" y2="78"/>
      <line x1="45" y1="62" x2="325" y2="62"/>
      <line x1="45" y1="46" x2="325" y2="46"/>
      <line x1="45" y1="30" x2="325" y2="30"/>
    </g>

    <!-- Axes with Arrowheads -->
    <line x1="45" y1="270" x2="340" y2="270" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="45" y1="270" x2="45" y2="18" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Axis Labels -->
    <text x="345" y="274" font-size="16" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">x</text>
    <text x="45" y="14" text-anchor="middle" font-size="16" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">y</text>
    <text x="36" y="284" font-size="14" font-style="italic" font-family="serif" fill="#000000">O</text>

    <!-- Tick Marks on X Axis -->
    <g stroke="#000000" stroke-width="1.5">
      <line x1="65" y1="267" x2="65" y2="273"/>
      <line x1="85" y1="267" x2="85" y2="273"/>
      <line x1="105" y1="267" x2="105" y2="273"/>
      <line x1="125" y1="267" x2="125" y2="273"/>
      <line x1="145" y1="267" x2="145" y2="273"/>
      <line x1="165" y1="267" x2="165" y2="273"/>
      <line x1="185" y1="267" x2="185" y2="273"/>
      <line x1="205" y1="267" x2="205" y2="273"/>
      <line x1="225" y1="267" x2="225" y2="273"/>
      <line x1="245" y1="267" x2="245" y2="273"/>
      <line x1="265" y1="267" x2="265" y2="273"/>
      <line x1="285" y1="267" x2="285" y2="273"/>
      <line x1="305" y1="267" x2="305" y2="273"/>
      <line x1="325" y1="267" x2="325" y2="273"/>
    </g>

    <!-- Tick Marks on Y Axis -->
    <g stroke="#000000" stroke-width="1.5">
      <line x1="42" y1="254" x2="48" y2="254"/>
      <line x1="42" y1="238" x2="48" y2="238"/>
      <line x1="42" y1="222" x2="48" y2="222"/>
      <line x1="42" y1="206" x2="48" y2="206"/>
      <line x1="42" y1="190" x2="48" y2="190"/>
      <line x1="42" y1="174" x2="48" y2="174"/>
      <line x1="42" y1="158" x2="48" y2="158"/>
      <line x1="42" y1="142" x2="48" y2="142"/>
      <line x1="42" y1="126" x2="48" y2="126"/>
      <line x1="42" y1="110" x2="48" y2="110"/>
      <line x1="42" y1="94" x2="48" y2="94"/>
      <line x1="42" y1="78" x2="48" y2="78"/>
      <line x1="42" y1="62" x2="48" y2="62"/>
      <line x1="42" y1="46" x2="48" y2="46"/>
      <line x1="42" y1="30" x2="48" y2="30"/>
    </g>

    <!-- X Axis Numbers -->
    <text x="85" y="286" text-anchor="middle" font-size="11" fill="#000000">2</text>
    <text x="125" y="286" text-anchor="middle" font-size="11" fill="#000000">4</text>
    <text x="165" y="286" text-anchor="middle" font-size="11" fill="#000000">6</text>
    <text x="205" y="286" text-anchor="middle" font-size="11" fill="#000000">8</text>
    <text x="245" y="286" text-anchor="middle" font-size="11" fill="#000000">10</text>
    <text x="285" y="286" text-anchor="middle" font-size="11" fill="#000000">12</text>
    <text x="325" y="286" text-anchor="middle" font-size="11" fill="#000000">14</text>

    <!-- Y Axis Numbers -->
    <text x="38" y="242" text-anchor="end" font-size="11" fill="#000000">2</text>
    <text x="38" y="210" text-anchor="end" font-size="11" fill="#000000">4</text>
    <text x="38" y="178" text-anchor="end" font-size="11" fill="#000000">6</text>
    <text x="38" y="146" text-anchor="end" font-size="11" fill="#000000">8</text>
    <text x="38" y="114" text-anchor="end" font-size="11" fill="#000000">10</text>
    <text x="38" y="82" text-anchor="end" font-size="11" fill="#000000">12</text>
    <text x="38" y="50" text-anchor="end" font-size="11" fill="#000000">14</text>

    <!-- Line of Best Fit y = 13.3 - 0.8x -->
    <line x1="45" y1="57" x2="325" y2="236" stroke="#000000" stroke-width="2.5"/>

    <!-- Scatter Data Points -->
    <circle cx="70" cy="30" r="3.5" fill="#000000"/>
    <circle cx="70" cy="46" r="3.5" fill="#000000"/>
    <circle cx="113" cy="126" r="3.5" fill="#000000"/>
    <circle cx="125" cy="158" r="3.5" fill="#000000"/>
    <circle cx="170" cy="94" r="3.5" fill="#000000"/>
    <circle cx="170" cy="158" r="3.5" fill="#000000"/>
    <circle cx="185" cy="190" r="3.5" fill="#000000"/>
    <circle cx="221" cy="174" r="3.5" fill="#000000"/>
    <circle cx="275" cy="158" r="3.5" fill="#000000"/>
    <circle cx="301" cy="222" r="3.5" fill="#000000"/>
  </svg>
</div>

Which of the following equations best represents the line of best fit shown?`,
    options: [
      "A) $y = 13.3 + 0.8x$",
      "B) $y = 13.3 - 0.8x$",
      "C) $y = -13.3 + 0.8x$",
      "D) $y = -13.3 - 0.8x$"
    ],
    correctAnswer: 1,
    explanation: `Analyze the linear model characteristics:
1. **$y$-intercept ($b$)**: The line intersects the $y$-axis slightly above $13$, around $+13.3$.
2. **Slope ($m$)**: As $x$ increases from left to right, $y$ decreases, indicating a negative slope ($m = -0.8$).

Combining these gives the linear model $y = 13.3 - 0.8x$.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 8,
    question: `$$ x^2 - 34x = 0 $$
Which of the following is a solution to the given equation?`,
    options: [
      "A) $68$",
      "B) $34$",
      "C) $17$",
      "D) $\\sqrt{34}$"
    ],
    correctAnswer: 1,
    explanation: `Factor out the common factor $x$:
$$ x(x - 34) = 0 $$
By the zero-product property:
$$ x = 0 \\quad \\text{or} \\quad x - 34 = 0 \\implies x = 34 $$
Among the given choices, $34$ is the correct solution.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 9,
    question: `An entomologist placed an initial population of 20 *Tenebrio molitor*, a type of beetle, into a habitat and monitored the population over time. When the number of *Tenebrio molitor* in the habitat reached $180\%$ of the initial population, the entomologist moved $75\%$ of the *Tenebrio molitor* to a second habitat. How many *Tenebrio molitor* did the entomologist move to the second habitat at this time?`,
    options: [
      "A) 15",
      "B) 27",
      "C) 36",
      "D) 45"
    ],
    correctAnswer: 1,
    explanation: `Step 1: Calculate the population when it reaches $180\\%$ of the initial 20 beetles:
$$ 1.80 \\times 20 = 36 \\text{ beetles} $$
Step 2: Calculate $75\\%$ of this population moved to the second habitat:
$$ 0.75 \\times 36 = \\frac{3}{4} \\times 36 = 27 \\text{ beetles} $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 10,
    question: `For the polynomial function $f$, the graph of $y = f(x)$ in the $xy$-plane passes through the points $(-3, 0)$, $(1, 0)$, and $(7, 0)$. Which of the following must be a factor of $f(x)$?`,
    options: [
      "A) $x + 1$",
      "B) $x + 7$",
      "C) $x - 1$",
      "D) $x - 3$"
    ],
    correctAnswer: 2,
    explanation: `The points $(-3, 0)$, $(1, 0)$, and $(7, 0)$ represent $x$-intercepts (roots) of the polynomial $f(x)$.
By the Factor Theorem:
- Root at $x = -3 \\implies (x + 3)$ is a factor.
- Root at $x = 1 \\implies (x - 1)$ is a factor.
- Root at $x = 7 \\implies (x - 7)$ is a factor.

Among the options listed, $(x - 1)$ is the only valid factor.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 11,
    question: `The expression $\\frac{6x^{22}}{18x^5}$ is equivalent to $\\frac{1}{3}x^b$, where $b$ is a constant and $x > 0$. What is the value of $b$?`,
    options: [
      "A) $\\frac{5}{22}$",
      "B) $\\frac{22}{5}$",
      "C) $17$",
      "D) $27$"
    ],
    correctAnswer: 2,
    explanation: `Simplify the numerical coefficients and use exponent rules for division:
$$ \\frac{6x^{22}}{18x^5} = \\left(\\frac{6}{18}\\right) x^{22 - 5} = \\frac{1}{3}x^{17} $$
Comparing this to $\\frac{1}{3}x^b$, we get $b = 17$.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 12,
    question: `$$ C(t) = 220\\left(\\frac{52}{51}\\right)^{t-12} + 8 $$
The function $C$ gives the estimated number of cephalopods, a class of marine animal, in a certain area, where $t$ is the number of months since a study began. How many months after the study began was the number of cephalopods in the area estimated to be $228$?`,
    options: [
      "A) 0",
      "B) 8",
      "C) 12",
      "D) 51"
    ],
    correctAnswer: 2,
    explanation: `Set $C(t) = 228$:
$$ 228 = 220\\left(\\frac{52}{51}\\right)^{t-12} + 8 $$
Subtract $8$ from both sides:
$$ 220 = 220\\left(\\frac{52}{51}\\right)^{t-12} $$
Divide by $220$:
$$ 1 = \\left(\\frac{52}{51}\\right)^{t-12} $$
Since any non-zero base raised to power $0$ equals $1$:
$$ t - 12 = 0 \\implies t = 12 $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 13,
    question: `Line $k$ is shown in the $xy$-plane. Line $j$ (not shown) is perpendicular to line $k$ and passes through the point $(16, 22)$. What is the $y$-coordinate of the $y$-intercept of line $j$?

<div class="my-4 flex justify-center">
  <svg width="380" height="380" viewBox="0 0 380 380" class="border border-gray-300 rounded-lg bg-white p-2">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" />
      </marker>
    </defs>

    <!-- Grid Lines (Every 1 unit from -10 to 10) -->
    <g stroke="#e5e7eb" stroke-width="1">
      <!-- Vertical Grid Lines -->
      <line x1="50" y1="43" x2="50" y2="337"/>
      <line x1="64" y1="43" x2="64" y2="337"/>
      <line x1="78" y1="43" x2="78" y2="337"/>
      <line x1="92" y1="43" x2="92" y2="337"/>
      <line x1="106" y1="43" x2="106" y2="337"/>
      <line x1="120" y1="43" x2="120" y2="337"/>
      <line x1="134" y1="43" x2="134" y2="337"/>
      <line x1="148" y1="43" x2="148" y2="337"/>
      <line x1="162" y1="43" x2="162" y2="337"/>
      <line x1="176" y1="43" x2="176" y2="337"/>
      <line x1="190" y1="43" x2="190" y2="337"/>
      <line x1="204" y1="43" x2="204" y2="337"/>
      <line x1="218" y1="43" x2="218" y2="337"/>
      <line x1="232" y1="43" x2="232" y2="337"/>
      <line x1="246" y1="43" x2="246" y2="337"/>
      <line x1="260" y1="43" x2="260" y2="337"/>
      <line x1="274" y1="43" x2="274" y2="337"/>
      <line x1="288" y1="43" x2="288" y2="337"/>
      <line x1="302" y1="43" x2="302" y2="337"/>
      <line x1="316" y1="43" x2="316" y2="337"/>
      <line x1="330" y1="43" x2="330" y2="337"/>

      <!-- Horizontal Grid Lines -->
      <line x1="43" y1="50" x2="337" y2="50"/>
      <line x1="43" y1="64" x2="337" y2="64"/>
      <line x1="43" y1="78" x2="337" y2="78"/>
      <line x1="43" y1="92" x2="337" y2="92"/>
      <line x1="43" y1="106" x2="337" y2="106"/>
      <line x1="43" y1="120" x2="337" y2="120"/>
      <line x1="43" y1="134" x2="337" y2="134"/>
      <line x1="43" y1="148" x2="337" y2="148"/>
      <line x1="43" y1="162" x2="337" y2="162"/>
      <line x1="43" y1="176" x2="337" y2="176"/>
      <line x1="43" y1="190" x2="337" y2="190"/>
      <line x1="43" y1="204" x2="337" y2="204"/>
      <line x1="43" y1="218" x2="337" y2="218"/>
      <line x1="43" y1="232" x2="337" y2="232"/>
      <line x1="43" y1="246" x2="337" y2="246"/>
      <line x1="43" y1="260" x2="337" y2="260"/>
      <line x1="43" y1="274" x2="337" y2="274"/>
      <line x1="43" y1="288" x2="337" y2="288"/>
      <line x1="43" y1="302" x2="337" y2="302"/>
      <line x1="43" y1="316" x2="337" y2="316"/>
      <line x1="43" y1="330" x2="337" y2="330"/>
    </g>

    <!-- Axes with Arrowheads -->
    <line x1="35" y1="190" x2="348" y2="190" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="190" y1="345" x2="190" y2="22" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Axis Tick Marks -->
    <g stroke="#000000" stroke-width="1.5">
      <!-- X Ticks -->
      <line x1="50" y1="186" x2="50" y2="194"/>
      <line x1="78" y1="186" x2="78" y2="194"/>
      <line x1="106" y1="186" x2="106" y2="194"/>
      <line x1="134" y1="186" x2="134" y2="194"/>
      <line x1="162" y1="186" x2="162" y2="194"/>
      <line x1="218" y1="186" x2="218" y2="194"/>
      <line x1="246" y1="186" x2="246" y2="194"/>
      <line x1="274" y1="186" x2="274" y2="194"/>
      <line x1="302" y1="186" x2="302" y2="194"/>
      <line x1="330" y1="186" x2="330" y2="194"/>

      <!-- Y Ticks -->
      <line x1="186" y1="50" x2="194" y2="50"/>
      <line x1="186" y1="78" x2="194" y2="78"/>
      <line x1="186" y1="106" x2="194" y2="106"/>
      <line x1="186" y1="134" x2="194" y2="134"/>
      <line x1="186" y1="162" x2="194" y2="162"/>
      <line x1="186" y1="218" x2="194" y2="218"/>
      <line x1="186" y1="246" x2="194" y2="246"/>
      <line x1="186" y1="274" x2="194" y2="274"/>
      <line x1="186" y1="302" x2="194" y2="302"/>
      <line x1="186" y1="330" x2="194" y2="330"/>
    </g>

    <!-- Axis Numbers -->
    <!-- X Axis Numbers -->
    <text x="50" y="206" text-anchor="middle" font-size="11" fill="#000000">-10</text>
    <text x="78" y="206" text-anchor="middle" font-size="11" fill="#000000">-8</text>
    <text x="106" y="206" text-anchor="middle" font-size="11" fill="#000000">-6</text>
    <text x="134" y="206" text-anchor="middle" font-size="11" fill="#000000">-4</text>
    <text x="162" y="206" text-anchor="middle" font-size="11" fill="#000000">-2</text>
    <text x="218" y="206" text-anchor="middle" font-size="11" fill="#000000">2</text>
    <text x="246" y="206" text-anchor="middle" font-size="11" fill="#000000">4</text>
    <text x="274" y="206" text-anchor="middle" font-size="11" fill="#000000">6</text>
    <text x="302" y="206" text-anchor="middle" font-size="11" fill="#000000">8</text>
    <text x="330" y="206" text-anchor="middle" font-size="11" fill="#000000">10</text>

    <!-- Y Axis Numbers -->
    <text x="182" y="54" text-anchor="end" font-size="11" fill="#000000">10</text>
    <text x="182" y="82" text-anchor="end" font-size="11" fill="#000000">8</text>
    <text x="182" y="110" text-anchor="end" font-size="11" fill="#000000">6</text>
    <text x="182" y="138" text-anchor="end" font-size="11" fill="#000000">4</text>
    <text x="182" y="166" text-anchor="end" font-size="11" fill="#000000">2</text>
    <text x="182" y="222" text-anchor="end" font-size="11" fill="#000000">-2</text>
    <text x="182" y="250" text-anchor="end" font-size="11" fill="#000000">-4</text>
    <text x="182" y="278" text-anchor="end" font-size="11" fill="#000000">-6</text>
    <text x="182" y="306" text-anchor="end" font-size="11" fill="#000000">-8</text>
    <text x="182" y="334" text-anchor="end" font-size="11" fill="#000000">-10</text>

    <!-- Labels for x, y, and origin O -->
    <text x="354" y="194" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">x</text>
    <text x="190" y="15" text-anchor="middle" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">y</text>
    <text x="180" y="202" text-anchor="end" font-size="13" font-style="italic" font-family="serif" fill="#000000">O</text>

    <!-- Line k passing through (-2, 2) and (2, -3) -->
    <line x1="66.8" y1="43" x2="302" y2="337" stroke="#000000" stroke-width="2.5"/>

    <!-- Point 1: (-2, 2) -->
    <circle cx="162" cy="162" r="4.5" fill="#000000"/>
    <!-- Point 2: (2, -3) -->
    <circle cx="218" cy="232" r="4.5" fill="#000000"/>
  </svg>
</div>`,
    options: [
      "A) $\\frac{23}{2}$",
      "B) $\\frac{1}{2}$",
      "C) $\\frac{4}{5}$",
      "D) $\\frac{46}{5}$"
    ],
    correctAnswer: 3,
    explanation: `Step 1: Find slope of line $k$ ($m_k$) using points on line $k$: $(-2, 2)$ and $(2, -3)$:
$$ m_k = \\frac{-3 - 2}{2 - (-2)} = \\frac{-5}{4} $$
Step 2: Since line $j \\perp k$, the slope of line $j$ ($m_j$) is the negative reciprocal:
$$ m_j = -\\frac{1}{-5/4} = \\frac{4}{5} $$
Step 3: Line $j$ passes through $(16, 22)$. Using slope-intercept form $y = m_j x + b$:
$$ 22 = \\frac{4}{5}(16) + b \\implies 22 = \\frac{64}{5} + b $$
$$ b = 22 - \\frac{64}{5} = \\frac{110 - 64}{5} = \\frac{46}{5} $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 14,
    question: `One gallon of sealant costs $\$17$ and will cover $450$ square feet of a surface. A deck has a total surface area of $d$ square feet. Which equation represents the cost $c$, in dollars, of the sealant needed to cover the deck twice?`,
    options: [
      "A) $c = \\frac{450d}{17}$",
      "B) $c = \\frac{900d}{17}$",
      "C) $c = 17\\left(\\frac{d}{225}\\right)$",
      "D) $c = 17\\left(\\frac{d}{450}\\right)$"
    ],
    correctAnswer: 2,
    explanation: `Covering a deck of surface area $d$ square feet twice requires covering a total area of $2d$ square feet.
- Number of gallons needed = $\\frac{2d}{450} = \\frac{d}{225}$ gallons.
- Total cost $c$ at $\$17$ per gallon:
$$ c = 17\\left(\\frac{d}{225}\\right) $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 15,
    question: `A bag contains only yellow marbles and red marbles. The probability of selecting a yellow marble from the bag at random is $\\frac{5}{19}$. What is the probability of selecting a red marble from the bag at random?`,
    options: [
      "A) $\\frac{5}{14}$",
      "B) $\\frac{14}{19}$",
      "C) $\\frac{19}{5}$",
      "D) $\\frac{14}{5}$"
    ],
    correctAnswer: 1,
    explanation: `Since the bag contains only yellow and red marbles, the probabilities must sum to $1$:
$$ P(\\text{Yellow}) + P(\\text{Red}) = 1 $$
$$ P(\\text{Red}) = 1 - \\frac{5}{19} = \\frac{19}{19} - \\frac{5}{19} = \\frac{14}{19} $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 16,
    question: `A manager is responsible for ordering supplies for a coffee shop. The shop's inventory starts with $6,600$ disposable cups, and the manager estimates that $110$ of these cups are used each day. Based on this estimate, in how many days will the inventory of disposable cups reach $1,100$?`,
    options: [
      "A) 30",
      "B) 40",
      "C) 50",
      "D) 60"
    ],
    correctAnswer: 2,
    explanation: `Model remaining inventory $C$ after $d$ days:
$$ C = 6600 - 110d $$
Set $C = 1100$:
$$ 1100 = 6600 - 110d $$
Subtract $6600$ from both sides:
$$ -5500 = -110d $$
Divide by $-110$:
$$ d = \\frac{-5500}{-110} = 50 \\text{ days} $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 17,
    question: `$$ x^2 - 40x = 0 $$
Which of the following is a solution to the given equation?`,
    options: [
      "A) $80$",
      "B) $40$",
      "C) $20$",
      "D) $\\sqrt{40}$"
    ],
    correctAnswer: 1,
    explanation: `Factor the equation:
$$ x(x - 40) = 0 $$
Roots are $x = 0$ or $x = 40$. Choice B is correct.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 18,
    question: `Which shaded region represents the solutions to the inequality $y \\le -\\frac{1}{4}x + 7$?`,
    options: [
      `A) <div class="my-2 flex justify-center"><svg width="340" height="280" viewBox="0 0 340 280" class="border border-gray-300 rounded-lg bg-white p-2"><defs><marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" /></marker></defs><g stroke="#d1d5db" stroke-width="1"><line x1="50" y1="45" x2="50" y2="240"/><line x1="65" y1="45" x2="65" y2="240"/><line x1="80" y1="45" x2="80" y2="240"/><line x1="95" y1="45" x2="95" y2="240"/><line x1="110" y1="45" x2="110" y2="240"/><line x1="125" y1="45" x2="125" y2="240"/><line x1="140" y1="45" x2="140" y2="240"/><line x1="155" y1="45" x2="155" y2="240"/><line x1="170" y1="45" x2="170" y2="240"/><line x1="185" y1="45" x2="185" y2="240"/><line x1="200" y1="45" x2="200" y2="240"/><line x1="215" y1="45" x2="215" y2="240"/><line x1="230" y1="45" x2="230" y2="240"/><line x1="245" y1="45" x2="245" y2="240"/><line x1="260" y1="45" x2="260" y2="240"/><line x1="275" y1="45" x2="275" y2="240"/><line x1="290" y1="45" x2="290" y2="240"/><line x1="50" y1="45" x2="290" y2="45"/><line x1="50" y1="60" x2="290" y2="60"/><line x1="50" y1="75" x2="290" y2="75"/><line x1="50" y1="90" x2="290" y2="90"/><line x1="50" y1="105" x2="290" y2="105"/><line x1="50" y1="120" x2="290" y2="120"/><line x1="50" y1="135" x2="290" y2="135"/><line x1="50" y1="150" x2="290" y2="150"/><line x1="50" y1="165" x2="290" y2="165"/><line x1="50" y1="180" x2="290" y2="180"/><line x1="50" y1="195" x2="290" y2="195"/><line x1="50" y1="210" x2="290" y2="210"/><line x1="50" y1="225" x2="290" y2="225"/><line x1="50" y1="240" x2="290" y2="240"/></g><polygon points="50,240 50,165 290,105 290,240" fill="rgba(0, 0, 0, 0.25)"/><line x1="40" y1="240" x2="310" y2="240" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/><line x1="170" y1="255" x2="170" y2="25" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/><g stroke="#000000" stroke-width="1.5"><line x1="50" y1="236" x2="50" y2="244"/><line x1="80" y1="236" x2="80" y2="244"/><line x1="110" y1="236" x2="110" y2="244"/><line x1="140" y1="236" x2="140" y2="244"/><line x1="200" y1="236" x2="200" y2="244"/><line x1="230" y1="236" x2="230" y2="244"/><line x1="260" y1="236" x2="260" y2="244"/><line x1="290" y1="236" x2="290" y2="244"/><line x1="166" y1="210" x2="174" y2="210"/><line x1="166" y1="180" x2="174" y2="180"/><line x1="166" y1="150" x2="174" y2="150"/><line x1="166" y1="120" x2="174" y2="120"/><line x1="166" y1="90" x2="174" y2="90"/><line x1="166" y1="60" x2="174" y2="60"/></g><text x="50" y="254" text-anchor="middle" font-size="11" fill="#000000">-8</text><text x="80" y="254" text-anchor="middle" font-size="11" fill="#000000">-6</text><text x="110" y="254" text-anchor="middle" font-size="11" fill="#000000">-4</text><text x="140" y="254" text-anchor="middle" font-size="11" fill="#000000">-2</text><text x="200" y="254" text-anchor="middle" font-size="11" fill="#000000">2</text><text x="230" y="254" text-anchor="middle" font-size="11" fill="#000000">4</text><text x="260" y="254" text-anchor="middle" font-size="11" fill="#000000">6</text><text x="290" y="254" text-anchor="middle" font-size="11" fill="#000000">8</text><text x="164" y="214" text-anchor="end" font-size="11" fill="#000000">2</text><text x="164" y="184" text-anchor="end" font-size="11" fill="#000000">4</text><text x="164" y="154" text-anchor="end" font-size="11" fill="#000000">6</text><text x="164" y="124" text-anchor="end" font-size="11" fill="#000000">8</text><text x="164" y="94" text-anchor="end" font-size="11" fill="#000000">10</text><text x="164" y="64" text-anchor="end" font-size="11" fill="#000000">12</text><text x="315" y="244" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">x</text><text x="170" y="18" text-anchor="middle" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">y</text><text x="162" y="252" text-anchor="end" font-size="13" font-style="italic" font-family="serif" fill="#000000">O</text><line x1="50" y1="165" x2="290" y2="105" stroke="#000000" stroke-width="2.5"/></svg></div>`,

      `B) <div class="my-2 flex justify-center"><svg width="340" height="280" viewBox="0 0 340 280" class="border border-gray-300 rounded-lg bg-white p-2"><defs><marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" /></marker></defs><g stroke="#d1d5db" stroke-width="1"><line x1="50" y1="45" x2="50" y2="240"/><line x1="65" y1="45" x2="65" y2="240"/><line x1="80" y1="45" x2="80" y2="240"/><line x1="95" y1="45" x2="95" y2="240"/><line x1="110" y1="45" x2="110" y2="240"/><line x1="125" y1="45" x2="125" y2="240"/><line x1="140" y1="45" x2="140" y2="240"/><line x1="155" y1="45" x2="155" y2="240"/><line x1="170" y1="45" x2="170" y2="240"/><line x1="185" y1="45" x2="185" y2="240"/><line x1="200" y1="45" x2="200" y2="240"/><line x1="215" y1="45" x2="215" y2="240"/><line x1="230" y1="45" x2="230" y2="240"/><line x1="245" y1="45" x2="245" y2="240"/><line x1="260" y1="45" x2="260" y2="240"/><line x1="275" y1="45" x2="275" y2="240"/><line x1="290" y1="45" x2="290" y2="240"/><line x1="50" y1="45" x2="290" y2="45"/><line x1="50" y1="60" x2="290" y2="60"/><line x1="50" y1="75" x2="290" y2="75"/><line x1="50" y1="90" x2="290" y2="90"/><line x1="50" y1="105" x2="290" y2="105"/><line x1="50" y1="120" x2="290" y2="120"/><line x1="50" y1="135" x2="290" y2="135"/><line x1="50" y1="150" x2="290" y2="150"/><line x1="50" y1="165" x2="290" y2="165"/><line x1="50" y1="180" x2="290" y2="180"/><line x1="50" y1="195" x2="290" y2="195"/><line x1="50" y1="210" x2="290" y2="210"/><line x1="50" y1="225" x2="290" y2="225"/><line x1="50" y1="240" x2="290" y2="240"/></g><polygon points="50,45 50,165 290,105 290,45" fill="rgba(0, 0, 0, 0.25)"/><line x1="40" y1="240" x2="310" y2="240" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/><line x1="170" y1="255" x2="170" y2="25" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/><g stroke="#000000" stroke-width="1.5"><line x1="50" y1="236" x2="50" y2="244"/><line x1="80" y1="236" x2="80" y2="244"/><line x1="110" y1="236" x2="110" y2="244"/><line x1="140" y1="236" x2="140" y2="244"/><line x1="200" y1="236" x2="200" y2="244"/><line x1="230" y1="236" x2="230" y2="244"/><line x1="260" y1="236" x2="260" y2="244"/><line x1="290" y1="236" x2="290" y2="244"/><line x1="166" y1="210" x2="174" y2="210"/><line x1="166" y1="180" x2="174" y2="180"/><line x1="166" y1="150" x2="174" y2="150"/><line x1="166" y1="120" x2="174" y2="120"/><line x1="166" y1="90" x2="174" y2="90"/><line x1="166" y1="60" x2="174" y2="60"/></g><text x="50" y="254" text-anchor="middle" font-size="11" fill="#000000">-8</text><text x="80" y="254" text-anchor="middle" font-size="11" fill="#000000">-6</text><text x="110" y="254" text-anchor="middle" font-size="11" fill="#000000">-4</text><text x="140" y="254" text-anchor="middle" font-size="11" fill="#000000">-2</text><text x="200" y="254" text-anchor="middle" font-size="11" fill="#000000">2</text><text x="230" y="254" text-anchor="middle" font-size="11" fill="#000000">4</text><text x="260" y="254" text-anchor="middle" font-size="11" fill="#000000">6</text><text x="290" y="254" text-anchor="middle" font-size="11" fill="#000000">8</text><text x="164" y="214" text-anchor="end" font-size="11" fill="#000000">2</text><text x="164" y="184" text-anchor="end" font-size="11" fill="#000000">4</text><text x="164" y="154" text-anchor="end" font-size="11" fill="#000000">6</text><text x="164" y="124" text-anchor="end" font-size="11" fill="#000000">8</text><text x="164" y="94" text-anchor="end" font-size="11" fill="#000000">10</text><text x="164" y="64" text-anchor="end" font-size="11" fill="#000000">12</text><text x="315" y="244" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">x</text><text x="170" y="18" text-anchor="middle" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">y</text><text x="162" y="252" text-anchor="end" font-size="13" font-style="italic" font-family="serif" fill="#000000">O</text><line x1="50" y1="165" x2="290" y2="105" stroke="#000000" stroke-width="2.5"/></svg></div>`,

      `C) <div class="my-2 flex justify-center"><svg width="340" height="280" viewBox="0 0 340 280" class="border border-gray-300 rounded-lg bg-white p-2"><defs><marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" /></marker></defs><g stroke="#d1d5db" stroke-width="1"><line x1="50" y1="45" x2="50" y2="240"/><line x1="65" y1="45" x2="65" y2="240"/><line x1="80" y1="45" x2="80" y2="240"/><line x1="95" y1="45" x2="95" y2="240"/><line x1="110" y1="45" x2="110" y2="240"/><line x1="125" y1="45" x2="125" y2="240"/><line x1="140" y1="45" x2="140" y2="240"/><line x1="155" y1="45" x2="155" y2="240"/><line x1="170" y1="45" x2="170" y2="240"/><line x1="185" y1="45" x2="185" y2="240"/><line x1="200" y1="45" x2="200" y2="240"/><line x1="215" y1="45" x2="215" y2="240"/><line x1="230" y1="45" x2="230" y2="240"/><line x1="245" y1="45" x2="245" y2="240"/><line x1="260" y1="45" x2="260" y2="240"/><line x1="275" y1="45" x2="275" y2="240"/><line x1="290" y1="45" x2="290" y2="240"/><line x1="50" y1="45" x2="290" y2="45"/><line x1="50" y1="60" x2="290" y2="60"/><line x1="50" y1="75" x2="290" y2="75"/><line x1="50" y1="90" x2="290" y2="90"/><line x1="50" y1="105" x2="290" y2="105"/><line x1="50" y1="120" x2="290" y2="120"/><line x1="50" y1="135" x2="290" y2="135"/><line x1="50" y1="150" x2="290" y2="150"/><line x1="50" y1="165" x2="290" y2="165"/><line x1="50" y1="180" x2="290" y2="180"/><line x1="50" y1="195" x2="290" y2="195"/><line x1="50" y1="210" x2="290" y2="210"/><line x1="50" y1="225" x2="290" y2="225"/><line x1="50" y1="240" x2="290" y2="240"/></g><polygon points="50,240 50,105 290,165 290,240" fill="rgba(0, 0, 0, 0.25)"/><line x1="40" y1="240" x2="310" y2="240" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/><line x1="170" y1="255" x2="170" y2="25" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/><g stroke="#000000" stroke-width="1.5"><line x1="50" y1="236" x2="50" y2="244"/><line x1="80" y1="236" x2="80" y2="244"/><line x1="110" y1="236" x2="110" y2="244"/><line x1="140" y1="236" x2="140" y2="244"/><line x1="200" y1="236" x2="200" y2="244"/><line x1="230" y1="236" x2="230" y2="244"/><line x1="260" y1="236" x2="260" y2="244"/><line x1="290" y1="236" x2="290" y2="244"/><line x1="166" y1="210" x2="174" y2="210"/><line x1="166" y1="180" x2="174" y2="180"/><line x1="166" y1="150" x2="174" y2="150"/><line x1="166" y1="120" x2="174" y2="120"/><line x1="166" y1="90" x2="174" y2="90"/><line x1="166" y1="60" x2="174" y2="60"/></g><text x="50" y="254" text-anchor="middle" font-size="11" fill="#000000">-8</text><text x="80" y="254" text-anchor="middle" font-size="11" fill="#000000">-6</text><text x="110" y="254" text-anchor="middle" font-size="11" fill="#000000">-4</text><text x="140" y="254" text-anchor="middle" font-size="11" fill="#000000">-2</text><text x="200" y="254" text-anchor="middle" font-size="11" fill="#000000">2</text><text x="230" y="254" text-anchor="middle" font-size="11" fill="#000000">4</text><text x="260" y="254" text-anchor="middle" font-size="11" fill="#000000">6</text><text x="290" y="254" text-anchor="middle" font-size="11" fill="#000000">8</text><text x="164" y="214" text-anchor="end" font-size="11" fill="#000000">2</text><text x="164" y="184" text-anchor="end" font-size="11" fill="#000000">4</text><text x="164" y="154" text-anchor="end" font-size="11" fill="#000000">6</text><text x="164" y="124" text-anchor="end" font-size="11" fill="#000000">8</text><text x="164" y="94" text-anchor="end" font-size="11" fill="#000000">10</text><text x="164" y="64" text-anchor="end" font-size="11" fill="#000000">12</text><text x="315" y="244" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">x</text><text x="170" y="18" text-anchor="middle" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">y</text><text x="162" y="252" text-anchor="end" font-size="13" font-style="italic" font-family="serif" fill="#000000">O</text><line x1="50" y1="105" x2="290" y2="165" stroke="#000000" stroke-width="2.5"/></svg></div>`,

      `D) <div class="my-2 flex justify-center"><svg width="340" height="280" viewBox="0 0 340 280" class="border border-gray-300 rounded-lg bg-white p-2"><defs><marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" /></marker></defs><g stroke="#d1d5db" stroke-width="1"><line x1="50" y1="45" x2="50" y2="240"/><line x1="65" y1="45" x2="65" y2="240"/><line x1="80" y1="45" x2="80" y2="240"/><line x1="95" y1="45" x2="95" y2="240"/><line x1="110" y1="45" x2="110" y2="240"/><line x1="125" y1="45" x2="125" y2="240"/><line x1="140" y1="45" x2="140" y2="240"/><line x1="155" y1="45" x2="155" y2="240"/><line x1="170" y1="45" x2="170" y2="240"/><line x1="185" y1="45" x2="185" y2="240"/><line x1="200" y1="45" x2="200" y2="240"/><line x1="215" y1="45" x2="215" y2="240"/><line x1="230" y1="45" x2="230" y2="240"/><line x1="245" y1="45" x2="245" y2="240"/><line x1="260" y1="45" x2="260" y2="240"/><line x1="275" y1="45" x2="275" y2="240"/><line x1="290" y1="45" x2="290" y2="240"/><line x1="50" y1="45" x2="290" y2="45"/><line x1="50" y1="60" x2="290" y2="60"/><line x1="50" y1="75" x2="290" y2="75"/><line x1="50" y1="90" x2="290" y2="90"/><line x1="50" y1="105" x2="290" y2="105"/><line x1="50" y1="120" x2="290" y2="120"/><line x1="50" y1="135" x2="290" y2="135"/><line x1="50" y1="150" x2="290" y2="150"/><line x1="50" y1="165" x2="290" y2="165"/><line x1="50" y1="180" x2="290" y2="180"/><line x1="50" y1="195" x2="290" y2="195"/><line x1="50" y1="210" x2="290" y2="210"/><line x1="50" y1="225" x2="290" y2="225"/><line x1="50" y1="240" x2="290" y2="240"/></g><polygon points="50,45 50,105 290,165 290,45" fill="rgba(0, 0, 0, 0.25)"/><line x1="40" y1="240" x2="310" y2="240" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/><line x1="170" y1="255" x2="170" y2="25" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/><g stroke="#000000" stroke-width="1.5"><line x1="50" y1="236" x2="50" y2="244"/><line x1="80" y1="236" x2="80" y2="244"/><line x1="110" y1="236" x2="110" y2="244"/><line x1="140" y1="236" x2="140" y2="244"/><line x1="200" y1="236" x2="200" y2="244"/><line x1="230" y1="236" x2="230" y2="244"/><line x1="260" y1="236" x2="260" y2="244"/><line x1="290" y1="236" x2="290" y2="244"/><line x1="166" y1="210" x2="174" y2="210"/><line x1="166" y1="180" x2="174" y2="180"/><line x1="166" y1="150" x2="174" y2="150"/><line x1="166" y1="120" x2="174" y2="120"/><line x1="166" y1="90" x2="174" y2="90"/><line x1="166" y1="60" x2="174" y2="60"/></g><text x="50" y="254" text-anchor="middle" font-size="11" fill="#000000">-8</text><text x="80" y="254" text-anchor="middle" font-size="11" fill="#000000">-6</text><text x="110" y="254" text-anchor="middle" font-size="11" fill="#000000">-4</text><text x="140" y="254" text-anchor="middle" font-size="11" fill="#000000">-2</text><text x="200" y="254" text-anchor="middle" font-size="11" fill="#000000">2</text><text x="230" y="254" text-anchor="middle" font-size="11" fill="#000000">4</text><text x="260" y="254" text-anchor="middle" font-size="11" fill="#000000">6</text><text x="290" y="254" text-anchor="middle" font-size="11" fill="#000000">8</text><text x="164" y="214" text-anchor="end" font-size="11" fill="#000000">2</text><text x="164" y="184" text-anchor="end" font-size="11" fill="#000000">4</text><text x="164" y="154" text-anchor="end" font-size="11" fill="#000000">6</text><text x="164" y="124" text-anchor="end" font-size="11" fill="#000000">8</text><text x="164" y="94" text-anchor="end" font-size="11" fill="#000000">10</text><text x="164" y="64" text-anchor="end" font-size="11" fill="#000000">12</text><text x="315" y="244" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">x</text><text x="170" y="18" text-anchor="middle" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">y</text><text x="162" y="252" text-anchor="end" font-size="13" font-style="italic" font-family="serif" fill="#000000">O</text><line x1="50" y1="105" x2="290" y2="165" stroke="#000000" stroke-width="2.5"/></svg></div>`
    ],
    correctAnswer: 2,
    explanation: `Analyze the boundary line $y = -\\frac{1}{4}x + 7$:
- **$y$-intercept**: $+7$ (above $x$-axis at $(0,7)$).
- **Slope**: Negative ($-\\frac{1}{4}$).
- **Inequality**: $y \\le \\dots$ means the shaded region lies BELOW the solid line.

Choice C is the only graph showing a solid line with negative slope $-\\frac{1}{4}$, $y$-intercept $+7$, and the region below shaded.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 19,
    question: `A rectangle has a length of $10$ centimeters and a width of $6,000$ centimeters. What is the area, in square centimeters, of the rectangle?`,
    options: [
      "A) 10",
      "B) 6,010",
      "C) 60,000",
      "D) 66,000"
    ],
    correctAnswer: 2,
    explanation: `Area of a rectangle is length multiplied by width:
$$ \\text{Area} = l \\times w = 10 \\text{ cm} \\times 6,000 \\text{ cm} = 60,000 \\text{ cm}^2 $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 20,
    question: `The function $w$ models the weight, in ounces, of the remaining solid wax of a burning candle as a function of the time $x$, in hours, after the candle was lit. The graph of $y = w(x)$ is shown. According to the model, what was the weight, in ounces, of the candle's remaining solid wax $9$ hours after the candle was lit?

<div class="my-4 flex justify-center">
  <svg width="360" height="320" viewBox="0 0 360 320" class="border border-gray-300 rounded-lg bg-white p-2">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" />
      </marker>
    </defs>

    <!-- Subtle Grid Lines (Every 1 unit for x=1..14 and y=1..14) -->
    <g stroke="#e5e7eb" stroke-width="1">
      <!-- Vertical Grid Lines (x = 1 to 14) -->
      <line x1="70" y1="35" x2="70" y2="250"/>
      <line x1="90" y1="35" x2="90" y2="250"/>
      <line x1="110" y1="35" x2="110" y2="250"/>
      <line x1="130" y1="35" x2="130" y2="250"/>
      <line x1="150" y1="35" x2="150" y2="250"/>
      <line x1="170" y1="35" x2="170" y2="250"/>
      <line x1="190" y1="35" x2="190" y2="250"/>
      <line x1="210" y1="35" x2="210" y2="250"/>
      <line x1="230" y1="35" x2="230" y2="250"/>
      <line x1="250" y1="35" x2="250" y2="250"/>
      <line x1="270" y1="35" x2="270" y2="250"/>
      <line x1="290" y1="35" x2="290" y2="250"/>
      <line x1="310" y1="35" x2="310" y2="250"/>
      <line x1="330" y1="35" x2="330" y2="250"/>

      <!-- Horizontal Grid Lines (y = 1 to 14) -->
      <line x1="50" y1="235" x2="330" y2="235"/>
      <line x1="50" y1="220" x2="330" y2="220"/>
      <line x1="50" y1="205" x2="330" y2="205"/>
      <line x1="50" y1="190" x2="330" y2="190"/>
      <line x1="50" y1="175" x2="330" y2="175"/>
      <line x1="50" y1="160" x2="330" y2="160"/>
      <line x1="50" y1="145" x2="330" y2="145"/>
      <line x1="50" y1="130" x2="330" y2="130"/>
      <line x1="50" y1="115" x2="330" y2="115"/>
      <line x1="50" y1="100" x2="330" y2="100"/>
      <line x1="50" y1="85" x2="330" y2="85"/>
      <line x1="50" y1="70" x2="330" y2="70"/>
      <line x1="50" y1="55" x2="330" y2="55"/>
      <line x1="50" y1="40" x2="330" y2="40"/>
    </g>

    <!-- Axes with Arrowheads -->
    <line x1="40" y1="250" x2="345" y2="250" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="50" y1="260" x2="50" y2="20" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Axis Labels and Titles -->
    <text x="350" y="254" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">x</text>
    <text x="42" y="262" font-size="13" font-style="italic" font-family="serif" fill="#000000">O</text>

    <text x="190" y="295" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#000000">Time (hours)</text>
    <text x="-135" y="16" transform="rotate(-90)" text-anchor="middle" font-size="14" font-family="sans-serif" fill="#000000">Weight (ounces)</text>

    <!-- X Ticks -->
    <g stroke="#000000" stroke-width="1.5">
      <line x1="70" y1="247" x2="70" y2="253"/>
      <line x1="90" y1="247" x2="90" y2="253"/>
      <line x1="110" y1="247" x2="110" y2="253"/>
      <line x1="130" y1="247" x2="130" y2="253"/>
      <line x1="150" y1="247" x2="150" y2="253"/>
      <line x1="170" y1="247" x2="170" y2="253"/>
      <line x1="190" y1="247" x2="190" y2="253"/>
      <line x1="210" y1="247" x2="210" y2="253"/>
      <line x1="230" y1="247" x2="230" y2="253"/>
      <line x1="250" y1="247" x2="250" y2="253"/>
      <line x1="270" y1="247" x2="270" y2="253"/>
      <line x1="290" y1="247" x2="290" y2="253"/>
      <line x1="310" y1="247" x2="310" y2="253"/>
      <line x1="330" y1="247" x2="330" y2="253"/>
    </g>

    <!-- Y Ticks -->
    <g stroke="#000000" stroke-width="1.5">
      <line x1="47" y1="235" x2="53" y2="235"/>
      <line x1="47" y1="220" x2="53" y2="220"/>
      <line x1="47" y1="205" x2="53" y2="205"/>
      <line x1="47" y1="190" x2="53" y2="190"/>
      <line x1="47" y1="175" x2="53" y2="175"/>
      <line x1="47" y1="160" x2="53" y2="160"/>
      <line x1="47" y1="145" x2="53" y2="145"/>
      <line x1="47" y1="130" x2="53" y2="130"/>
      <line x1="47" y1="115" x2="53" y2="115"/>
      <line x1="47" y1="100" x2="53" y2="100"/>
      <line x1="47" y1="85" x2="53" y2="85"/>
      <line x1="47" y1="70" x2="53" y2="70"/>
      <line x1="47" y1="55" x2="53" y2="55"/>
      <line x1="47" y1="40" x2="53" y2="40"/>
    </g>

    <!-- X Axis Numbers (Every 2 units) -->
    <text x="90" y="266" text-anchor="middle" font-size="11" fill="#000000">2</text>
    <text x="130" y="266" text-anchor="middle" font-size="11" fill="#000000">4</text>
    <text x="170" y="266" text-anchor="middle" font-size="11" fill="#000000">6</text>
    <text x="210" y="266" text-anchor="middle" font-size="11" fill="#000000">8</text>
    <text x="250" y="266" text-anchor="middle" font-size="11" fill="#000000">10</text>
    <text x="290" y="266" text-anchor="middle" font-size="11" fill="#000000">12</text>
    <text x="330" y="266" text-anchor="middle" font-size="11" fill="#000000">14</text>

    <!-- Y Axis Numbers (Every 2 units) -->
    <text x="43" y="224" text-anchor="end" font-size="11" fill="#000000">2</text>
    <text x="43" y="194" text-anchor="end" font-size="11" fill="#000000">4</text>
    <text x="43" y="164" text-anchor="end" font-size="11" fill="#000000">6</text>
    <text x="43" y="134" text-anchor="end" font-size="11" fill="#000000">8</text>
    <text x="43" y="104" text-anchor="end" font-size="11" fill="#000000">10</text>
    <text x="43" y="74" text-anchor="end" font-size="11" fill="#000000">12</text>
    <text x="43" y="44" text-anchor="end" font-size="11" fill="#000000">14</text>

    <!-- Graphed Line passing through (0, 8) and (14.5, 3.167) -->
    <line x1="50" y1="130" x2="335" y2="200" stroke="#000000" stroke-width="2.5"/>
  </svg>
</div>`,
    options: [
      "A) 3",
      "B) 5",
      "C) 6",
      "D) 8"
    ],
    correctAnswer: 1,
    explanation: `Locate $x = 9$ hours on the horizontal axis (halfway between $8$ and $10$).
Move vertically up to the graphed line to read the corresponding $y$-value (Weight).
The point on the line is $(9, 5)$, which means the remaining solid wax weight was $5$ ounces.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 21,
    question: `The function $f$ is defined by $f(x) = 3x - 7$. If $f(a) + 1 = 2a$, what is the value of $a$?`,
    options: [
      "A) -1",
      "B) 1",
      "C) 5",
      "D) 6"
    ],
    correctAnswer: 3,
    explanation: `Substitute $f(a) = 3a - 7$ into the given equation:
$$ (3a - 7) + 1 = 2a $$
$$ 3a - 6 = 2a $$
Subtract $2a$ from both sides and add $6$:
$$ a = 6 $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 22,
    question: `$$ 7x + 12y = 180 $$
The equation gives the possible combinations of the number of mugs, $x$, and the number of plates, $y$, in a collection that is worth a total of $\$180$. If there are $8$ plates in the collection, how many mugs are in the collection?`,
    options: [
      "A) 8",
      "B) 12",
      "C) 15",
      "D) 24"
    ],
    correctAnswer: 1,
    explanation: `Substitute $y = 8$ plates into the equation:
$$ 7x + 12(8) = 180 $$
$$ 7x + 96 = 180 $$
Subtract $96$ from both sides:
$$ 7x = 84 $$
Divide by $7$:
$$ x = \\frac{84}{7} = 12 \\text{ mugs} $$`,
    category: "SAT-2026-March-form C"
  },

  // --- MODULE 2 (Questions 23 - 44) ---
  {
    id: 23,
    question: `The graph of a system of a linear equation and a quadratic equation is shown. What is the solution $(x, y)$ to this system?

<div class="my-4 flex justify-center">
  <svg width="340" height="320" viewBox="0 0 340 320" class="border border-gray-300 rounded-lg bg-white p-2">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" />
      </marker>
    </defs>

    <!-- Subtle Grid Lines -->
    <g stroke="#d1d5db" stroke-width="1">
      <!-- Vertical Grid Lines (x = -10 to 4) -->
      <line x1="30" y1="70" x2="30" y2="290"/>
      <line x1="50" y1="70" x2="50" y2="290"/>
      <line x1="70" y1="70" x2="70" y2="290"/>
      <line x1="90" y1="70" x2="90" y2="290"/>
      <line x1="110" y1="70" x2="110" y2="290"/>
      <line x1="130" y1="70" x2="130" y2="290"/>
      <line x1="150" y1="70" x2="150" y2="290"/>
      <line x1="170" y1="70" x2="170" y2="290"/>
      <line x1="190" y1="70" x2="190" y2="290"/>
      <line x1="210" y1="70" x2="210" y2="290"/>
      <line x1="230" y1="70" x2="230" y2="290"/>
      <line x1="250" y1="70" x2="250" y2="290"/>
      <line x1="270" y1="70" x2="270" y2="290"/>
      <line x1="290" y1="70" x2="290" y2="290"/>
      <line x1="310" y1="70" x2="310" y2="290"/>

      <!-- Horizontal Grid Lines (y = -4 to 7) -->
      <line x1="30" y1="70" x2="310" y2="70"/>
      <line x1="30" y1="90" x2="310" y2="90"/>
      <line x1="30" y1="110" x2="310" y2="110"/>
      <line x1="30" y1="130" x2="310" y2="130"/>
      <line x1="30" y1="150" x2="310" y2="150"/>
      <line x1="30" y1="170" x2="310" y2="170"/>
      <line x1="30" y1="190" x2="310" y2="190"/>
      <line x1="30" y1="210" x2="310" y2="210"/>
      <line x1="30" y1="230" x2="310" y2="230"/>
      <line x1="30" y1="250" x2="310" y2="250"/>
      <line x1="30" y1="270" x2="310" y2="270"/>
      <line x1="30" y1="290" x2="310" y2="290"/>
    </g>

    <!-- Axes -->
    <line x1="15" y1="210" x2="325" y2="210" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="230" y1="305" x2="230" y2="40" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>

    <text x="330" y="214" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">x</text>
    <text x="230" y="30" text-anchor="middle" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">y</text>

    <!-- Tick Marks -->
    <g stroke="#000000" stroke-width="1.5">
      <!-- X Ticks -->
      <line x1="30" y1="206" x2="30" y2="214"/>
      <line x1="70" y1="206" x2="70" y2="214"/>
      <line x1="110" y1="206" x2="110" y2="214"/>
      <line x1="150" y1="206" x2="150" y2="214"/>
      <line x1="190" y1="206" x2="190" y2="214"/>
      <line x1="270" y1="206" x2="270" y2="214"/>
      <line x1="310" y1="206" x2="310" y2="214"/>
      <!-- Y Ticks -->
      <line x1="226" y1="90" x2="234" y2="90"/>
      <line x1="226" y1="130" x2="234" y2="130"/>
      <line x1="226" y1="170" x2="234" y2="170"/>
      <line x1="226" y1="250" x2="234" y2="250"/>
      <line x1="226" y1="290" x2="234" y2="290"/>
    </g>

    <!-- X Labels -->
    <text x="30" y="226" text-anchor="middle" font-size="11" fill="#000000">-10</text>
    <text x="70" y="226" text-anchor="middle" font-size="11" fill="#000000">-8</text>
    <text x="110" y="226" text-anchor="middle" font-size="11" fill="#000000">-6</text>
    <text x="150" y="226" text-anchor="middle" font-size="11" fill="#000000">-4</text>
    <text x="190" y="226" text-anchor="middle" font-size="11" fill="#000000">-2</text>
    <text x="218" y="224" text-anchor="end" font-size="13" font-style="italic" font-family="serif" fill="#000000">O</text>
    <text x="270" y="226" text-anchor="middle" font-size="11" fill="#000000">2</text>
    <text x="310" y="226" text-anchor="middle" font-size="11" fill="#000000">4</text>

    <!-- Y Labels -->
    <text x="222" y="94" text-anchor="end" font-size="11" fill="#000000">6</text>
    <text x="222" y="134" text-anchor="end" font-size="11" fill="#000000">4</text>
    <text x="222" y="174" text-anchor="end" font-size="11" fill="#000000">2</text>
    <text x="222" y="254" text-anchor="end" font-size="11" fill="#000000">-2</text>
    <text x="222" y="294" text-anchor="end" font-size="11" fill="#000000">-4</text>

    <!-- Horizontal Line y = 2 -->
    <line x1="30" y1="170" x2="310" y2="170" stroke="#000000" stroke-width="2.5"/>

    <!-- Parabola y = -(x+3)^2 + 2, vertex at (-3, 2) -->
    <path d="M 116 295 Q 170 45 224 295" fill="none" stroke="#000000" stroke-width="2.5"/>
  </svg>
</div>`,
    options: [
      "A) $(0, 2)$",
      "B) $(0, -3)$",
      "C) $(-3, 2)$",
      "D) $(3, -2)$"
    ],
    correctAnswer: 2,
    explanation: `The solution to a system of equations graphed on a coordinate plane is the point where the graphs intersect.
From the grid:
- The downward parabola and the horizontal line $y = 2$ intersect at the vertex of the parabola.
- Tracing down to the $x$-axis gives $x = -3$.
- Tracing across to the $y$-axis gives $y = 2$.
Thus, the intersection point is $(-3, 2)$.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 24,
    question: `The function $h$ is defined by $h(x) = \\frac{x}{6}$. What is the value of $h(x)$ when $x = 48$?`,
    options: [
      "A) 6",
      "B) 8",
      "C) 42",
      "D) 54"
    ],
    correctAnswer: 1,
    explanation: `Substitute $x = 48$ into $h(x)$:
$$ h(48) = \\frac{48}{6} = 8 $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 25,
    question: `A certain striped marlin can swim at a maximum speed of $22$ meters per second. At this maximum speed, how many meters would this striped marlin swim in $3$ seconds?`,
    options: [
      "A) 25",
      "B) 44",
      "C) 66",
      "D) 88"
    ],
    correctAnswer: 2,
    explanation: `Distance equals speed multiplied by time:
$$ \\text{Distance} = 22 \\text{ m/s} \\times 3 \\text{ s} = 66 \\text{ meters} $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 26,
    question: `$$ \\frac{13}{x + 1} = \\frac{13}{7} $$
What value of $x$ makes the given equation true?`,
    options: [
      "A) 6",
      "B) 7",
      "C) 12",
      "D) 13"
    ],
    correctAnswer: 0,
    explanation: `Since the numerators of both fractions are identical ($13$), the denominators must be equal for the equation to hold true:
$$ x + 1 = 7 \\implies x = 6 $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 27,
    question: `A biologist recorded the pinching force of wild coconut crabs. The lowest pinching force recorded was $86.2$ newtons and the highest pinching force recorded was $121.4$ newtons. Which inequality is true for all values of $c$, where $c$ represents any pinching force, in newtons, recorded for these wild coconut crabs?`,
    options: [
      "A) $c \\le 86.2$",
      "B) $c \\ge 121.4$",
      "C) $43.1 \\le c \\le 60.7$",
      "D) $86.2 \\le c \\le 121.4$"
    ],
    correctAnswer: 3,
    explanation: `The pinching force $c$ ranges between the minimum value ($86.2$ newtons) and the maximum value ($121.4$ newtons), inclusive.
This compound inequality is expressed as:
$$ 86.2 \\le c \\le 121.4 $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 28,
    question: `In the figure, two lines intersect at a point. If $r = 52$, what is the value of $s$?

<div class="my-4 flex justify-center">
  <svg width="260" height="180" viewBox="0 0 260 180" class="border border-gray-300 rounded-lg bg-white p-2">
    <line x1="30" y1="30" x2="230" y2="150" stroke="#000000" stroke-width="2"/>
    <line x1="30" y1="150" x2="230" y2="30" stroke="#000000" stroke-width="2"/>

    <text x="110" y="94" font-size="14" font-style="italic" fill="#000000">r°</text>
    <text x="140" y="94" font-size="14" font-style="italic" fill="#000000">s°</text>
  </svg>
</div>`,
    options: [
      "A) 38",
      "B) 52",
      "C) 128",
      "D) 142"
    ],
    correctAnswer: 1,
    explanation: `When two straight lines intersect, the angles directly opposite each other are vertical angles and are equal:
$$ s = r = 52 $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 29,
    question: `Kayra spent $\$49$ at a book sale and bought a total of $21$ books. She bought $h$ hardcover books for $\$3$ each and $p$ paperback books for $\$2$ each. Which system of equations represents this situation?`,
    options: [
      "A) $h + p = 21$; $2h + 3p = 49$",
      "B) $h + p = 21$; $3h + 2p = 49$",
      "C) $h + p = 49$; $2h + 3p = 21$",
      "D) $h + p = 49$; $3h + 2p = 21$"
    ],
    correctAnswer: 1,
    explanation: `Formulate equations based on the problem statements:
1. Total quantity of books: $h + p = 21$.
2. Total money spent at $\$3$ per hardcover and $\$2$ per paperback: $3h + 2p = 49$.

This matches Choice B.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 30,
    question: `A manager is responsible for ordering supplies for a coffee shop. The shop's inventory starts with $8,900$ disposable cups, and the manager estimates that $120$ of these cups are used each day. Based on this estimate, in how many days will the inventory of disposable cups reach $1,700$?`,
    options: [
      "A) 40",
      "B) 50",
      "C) 60",
      "D) 72"
    ],
    correctAnswer: 2,
    explanation: `Write the linear equation for remaining cups after $d$ days:
$$ 8900 - 120d = 1700 $$
Subtract $8900$ from both sides:
$$ -120d = -7200 $$
Divide by $-120$:
$$ d = \\frac{-7200}{-120} = 60 \\text{ days} $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 31,
    question: `The function $f(w) = 9w^2$ gives the area of a rectangle, in square feet ($\\text{ft}^2$), if its width is $w\\text{ ft}$ and its length is $9$ times its width. Which of the following is the best interpretation of $f(12) = 1,296$?`,
    options: [
      "A) If the width of the rectangle is $12\\text{ ft}$, then the area of the rectangle is $1,296\\text{ ft}^2$.",
      "B) If the width of the rectangle is $12\\text{ ft}$, then the length of the rectangle is $1,296\\text{ ft}$.",
      "C) If the width of the rectangle is $1,296\\text{ ft}$, then the area of the rectangle is $12\\text{ ft}^2$.",
      "D) If the width of the rectangle is $1,296\\text{ ft}$, then the length of the rectangle is $12\\text{ ft}$."
    ],
    correctAnswer: 0,
    explanation: `In the function $f(w) = 9w^2$:
- Input $w = 12$ represents the width of the rectangle in feet.
- Output $f(12) = 1,296$ represents the calculated total area of the rectangle in square feet.

Thus, $f(12) = 1,296$ means that a width of $12\\text{ ft}$ results in an area of $1,296\\text{ ft}^2$.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 32,
    question: `$$ q(x) = 28(2^x) $$
Which table gives three values of $x$ and their corresponding values of $q(x)$ for the function $q$?`,
    options: [
      `A)<br/><table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center"><thead><tr class="bg-gray-100"><th class="border border-gray-400 px-2 py-1">$x$</th><th class="border border-gray-400 px-2 py-1">$q(x)$</th></tr></thead><tbody><tr><td class="border border-gray-400 px-2 py-1">-1</td><td class="border border-gray-400 px-2 py-1">14</td></tr><tr><td class="border border-gray-400 px-2 py-1">0</td><td class="border border-gray-400 px-2 py-1">28</td></tr><tr><td class="border border-gray-400 px-2 py-1">1</td><td class="border border-gray-400 px-2 py-1">56</td></tr></tbody></table>`,

      `B)<br/><table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center"><thead><tr class="bg-gray-100"><th class="border border-gray-400 px-2 py-1">$x$</th><th class="border border-gray-400 px-2 py-1">$q(x)$</th></tr></thead><tbody><tr><td class="border border-gray-400 px-2 py-1">-1</td><td class="border border-gray-400 px-2 py-1">$\\frac{1}{14}$</td></tr><tr><td class="border border-gray-400 px-2 py-1">0</td><td class="border border-gray-400 px-2 py-1">28</td></tr><tr><td class="border border-gray-400 px-2 py-1">1</td><td class="border border-gray-400 px-2 py-1">56</td></tr></tbody></table>`,

      `C)<br/><table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center"><thead><tr class="bg-gray-100"><th class="border border-gray-400 px-2 py-1">$x$</th><th class="border border-gray-400 px-2 py-1">$q(x)$</th></tr></thead><tbody><tr><td class="border border-gray-400 px-2 py-1">-1</td><td class="border border-gray-400 px-2 py-1">$\\frac{1}{14}$</td></tr><tr><td class="border border-gray-400 px-2 py-1">0</td><td class="border border-gray-400 px-2 py-1">2</td></tr><tr><td class="border border-gray-400 px-2 py-1">1</td><td class="border border-gray-400 px-2 py-1">56</td></tr></tbody></table>`,

      `D)<br/><table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center"><thead><tr class="bg-gray-100"><th class="border border-gray-400 px-2 py-1">$x$</th><th class="border border-gray-400 px-2 py-1">$q(x)$</th></tr></thead><tbody><tr><td class="border border-gray-400 px-2 py-1">-1</td><td class="border border-gray-400 px-2 py-1">-56</td></tr><tr><td class="border border-gray-400 px-2 py-1">0</td><td class="border border-gray-400 px-2 py-1">0</td></tr><tr><td class="border border-gray-400 px-2 py-1">1</td><td class="border border-gray-400 px-2 py-1">56</td></tr></tbody></table>`
    ],
    correctAnswer: 0,
    explanation: `Evaluate $q(x) = 28(2^x)$ for $x = -1, 0, 1$:
- For $x = -1$: $q(-1) = 28(2^{-1}) = 28 \\times \\frac{1}{2} = 14$.
- For $x = 0$: $q(0) = 28(2^0) = 28 \\times 1 = 28$.
- For $x = 1$: $q(1) = 28(2^1) = 28 \\times 2 = 56$.

Table A matches these values exactly.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 33,
    question: `If $3(x - 9) - 4 = 8(x - 9) + 4$, what is the value of $x - 9$?`,
    options: [
      "A) $-\\frac{8}{5}$",
      "B) $-\\frac{5}{8}$",
      "C) $-\\frac{3}{8}$",
      "D) $-\\frac{8}{11}$"
    ],
    correctAnswer: 0,
    explanation: `Let $u = x - 9$. Substitute $u$ into the equation:
$$ 3u - 4 = 8u + 4 $$
Subtract $3u$ from both sides:
$$ -4 = 5u + 4 $$
Subtract $4$ from both sides:
$$ -8 = 5u $$
Divide by $5$:
$$ u = -\\frac{8}{5} \\implies x - 9 = -\\frac{8}{5} $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 34,
    question: `An inspector checked a sample of 330 scales selected at random from a population of 8,000 scales to estimate what percentage of the 8,000 scales were inaccurate. From this sample, the inspector estimated that $7\%$ of the 8,000 scales were inaccurate, with an associated margin of error of $2.8\%$. Which of the following is the most appropriate conclusion?`,
    options: [
      "A) It is plausible that exactly 560 of the scales in the population are inaccurate.",
      "B) It is plausible that between 336 and 784 of the scales in the population are inaccurate.",
      "C) It is plausible that fewer than 336 of the scales in the population are inaccurate.",
      "D) It is plausible that more than 784 of the scales in the population are inaccurate."
    ],
    correctAnswer: 1,
    explanation: `Calculate the plausible percentage range using the margin of error:
$$ 7\\% \\pm 2.8\\% = [4.2\\%, 9.8\\%] $$
Convert these percentages to the total population of 8,000 scales:
- Lower bound: $4.2\\% \\times 8,000 = 0.042 \\times 8,000 = 336$ scales.
- Upper bound: $9.8\\% \\times 8,000 = 0.098 \\times 8,000 = 784$ scales.

Therefore, it is plausible that between 336 and 784 scales are inaccurate.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 35,
    question: `The graph of a system of a linear equation and a quadratic equation is shown. What is a solution $(x, y)$ to this system?

<div class="my-4 flex justify-center">
  <svg width="360" height="340" viewBox="0 0 360 340" class="border border-gray-300 rounded-lg bg-white p-2">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" />
      </marker>
    </defs>

    <!-- Grid Lines (x = 1 to 10, y = 1 to 10) -->
    <g stroke="#d1d5db" stroke-width="1">
      <!-- Vertical Grid Lines -->
      <line x1="75" y1="50" x2="75" y2="270"/>
      <line x1="100" y1="50" x2="100" y2="270"/>
      <line x1="125" y1="50" x2="125" y2="270"/>
      <line x1="150" y1="50" x2="150" y2="270"/>
      <line x1="175" y1="50" x2="175" y2="270"/>
      <line x1="200" y1="50" x2="200" y2="270"/>
      <line x1="225" y1="50" x2="225" y2="270"/>
      <line x1="250" y1="50" x2="250" y2="270"/>
      <line x1="275" y1="50" x2="275" y2="270"/>
      <line x1="300" y1="50" x2="300" y2="270"/>

      <!-- Horizontal Grid Lines -->
      <line x1="50" y1="248" x2="300" y2="248"/>
      <line x1="50" y1="226" x2="300" y2="226"/>
      <line x1="50" y1="204" x2="300" y2="204"/>
      <line x1="50" y1="182" x2="300" y2="182"/>
      <line x1="50" y1="160" x2="300" y2="160"/>
      <line x1="50" y1="138" x2="300" y2="138"/>
      <line x1="50" y1="116" x2="300" y2="116"/>
      <line x1="50" y1="94" x2="300" y2="94"/>
      <line x1="50" y1="72" x2="300" y2="72"/>
      <line x1="50" y1="50" x2="300" y2="50"/>
    </g>

    <!-- Axes -->
    <line x1="35" y1="270" x2="320" y2="270" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="50" y1="285" x2="50" y2="30" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>

    <text x="325" y="274" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">x</text>
    <text x="50" y="22" text-anchor="middle" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">y</text>
    <text x="42" y="282" font-size="13" font-style="italic" font-family="serif" fill="#000000">O</text>

    <!-- Tick Marks -->
    <g stroke="#000000" stroke-width="1.5">
      <!-- X Ticks -->
      <line x1="75" y1="266" x2="75" y2="274"/>
      <line x1="100" y1="266" x2="100" y2="274"/>
      <line x1="125" y1="266" x2="125" y2="274"/>
      <line x1="150" y1="266" x2="150" y2="274"/>
      <line x1="175" y1="266" x2="175" y2="274"/>
      <line x1="200" y1="266" x2="200" y2="274"/>
      <line x1="225" y1="266" x2="225" y2="274"/>
      <line x1="250" y1="266" x2="250" y2="274"/>
      <line x1="275" y1="266" x2="275" y2="274"/>
      <line x1="300" y1="266" x2="300" y2="274"/>
      <!-- Y Ticks -->
      <line x1="46" y1="248" x2="54" y2="248"/>
      <line x1="46" y1="226" x2="54" y2="226"/>
      <line x1="46" y1="204" x2="54" y2="204"/>
      <line x1="46" y1="182" x2="54" y2="182"/>
      <line x1="46" y1="160" x2="54" y2="160"/>
      <line x1="46" y1="138" x2="54" y2="138"/>
      <line x1="46" y1="116" x2="54" y2="116"/>
      <line x1="46" y1="94" x2="54" y2="94"/>
      <line x1="46" y1="72" x2="54" y2="72"/>
      <line x1="46" y1="50" x2="54" y2="50"/>
    </g>

    <!-- X Labels -->
    <text x="75" y="286" text-anchor="middle" font-size="11" fill="#000000">1</text>
    <text x="100" y="286" text-anchor="middle" font-size="11" fill="#000000">2</text>
    <text x="125" y="286" text-anchor="middle" font-size="11" fill="#000000">3</text>
    <text x="150" y="286" text-anchor="middle" font-size="11" fill="#000000">4</text>
    <text x="175" y="286" text-anchor="middle" font-size="11" fill="#000000">5</text>
    <text x="200" y="286" text-anchor="middle" font-size="11" fill="#000000">6</text>
    <text x="225" y="286" text-anchor="middle" font-size="11" fill="#000000">7</text>
    <text x="250" y="286" text-anchor="middle" font-size="11" fill="#000000">8</text>
    <text x="275" y="286" text-anchor="middle" font-size="11" fill="#000000">9</text>
    <text x="300" y="286" text-anchor="middle" font-size="11" fill="#000000">10</text>

    <!-- Y Labels -->
    <text x="43" y="252" text-anchor="end" font-size="11" fill="#000000">1</text>
    <text x="43" y="230" text-anchor="end" font-size="11" fill="#000000">2</text>
    <text x="43" y="208" text-anchor="end" font-size="11" fill="#000000">3</text>
    <text x="43" y="186" text-anchor="end" font-size="11" fill="#000000">4</text>
    <text x="43" y="164" text-anchor="end" font-size="11" fill="#000000">5</text>
    <text x="43" y="142" text-anchor="end" font-size="11" fill="#000000">6</text>
    <text x="43" y="120" text-anchor="end" font-size="11" fill="#000000">7</text>
    <text x="43" y="98" text-anchor="end" font-size="11" fill="#000000">8</text>
    <text x="43" y="76" text-anchor="end" font-size="11" fill="#000000">9</text>
    <text x="43" y="54" text-anchor="end" font-size="11" fill="#000000">10</text>

    <!-- Parabola opening up, vertex at (4, 3) -->
    <path d="M 82.5 43.4 Q 150 365 217.5 43.4" fill="none" stroke="#000000" stroke-width="2.5"/>

    <!-- Line through (6, 7) and (8.7, 0) -->
    <line x1="168.2" y1="43.4" x2="267.5" y2="270" stroke="#000000" stroke-width="2.5"/>
  </svg>
</div>`,
    options: [
      "A) $(0, 0)$",
      "B) $(0, 7)$",
      "C) $(6, 0)$",
      "D) $(6, 7)$"
    ],
    correctAnswer: 3,
    explanation: `Locate the points of intersection between the line $y = 7$ and the parabola:
- Tracing down to the $x$-axis from the right-hand intersection point gives $x = 6$.
- Tracing left to the $y$-axis gives $y = 7$.
Therefore, $(6, 7)$ is a solution to the system.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 36,
    question: `The bar graph shows the distribution of the number of students in each of four sports programs at a high school. How many more students are in the hockey program than the volleyball program?

<div class="my-4 flex justify-center">
  <svg width="360" height="320" viewBox="0 0 360 320" class="border border-gray-300 rounded-lg bg-white p-2">
    <!-- Horizontal Grid Lines (0, 10, 20, 30, 40, 50, 60) -->
    <g stroke="#000000" stroke-width="0.75">
      <line x1="65" y1="40" x2="330" y2="40"/>
      <line x1="65" y1="75" x2="330" y2="75"/>
      <line x1="65" y1="110" x2="330" y2="110"/>
      <line x1="65" y1="145" x2="330" y2="145"/>
      <line x1="65" y1="180" x2="330" y2="180"/>
      <line x1="65" y1="215" x2="330" y2="215"/>
      <line x1="65" y1="250" x2="330" y2="250"/>
    </g>

    <!-- Main Y-axis Line -->
    <line x1="65" y1="35" x2="65" y2="250" stroke="#000000" stroke-width="2"/>

    <!-- Y-axis Ticks -->
    <g stroke="#000000" stroke-width="1.5">
      <line x1="58" y1="40" x2="65" y2="40"/>
      <line x1="58" y1="75" x2="65" y2="75"/>
      <line x1="58" y1="110" x2="65" y2="110"/>
      <line x1="58" y1="145" x2="65" y2="145"/>
      <line x1="58" y1="180" x2="65" y2="180"/>
      <line x1="58" y1="215" x2="65" y2="215"/>
      <line x1="58" y1="250" x2="65" y2="250"/>
    </g>

    <!-- Y Axis Labels -->
    <text x="54" y="254" text-anchor="end" font-size="13" font-family="serif" fill="#000000">0</text>
    <text x="54" y="219" text-anchor="end" font-size="13" font-family="serif" fill="#000000">10</text>
    <text x="54" y="184" text-anchor="end" font-size="13" font-family="serif" fill="#000000">20</text>
    <text x="54" y="149" text-anchor="end" font-size="13" font-family="serif" fill="#000000">30</text>
    <text x="54" y="114" text-anchor="end" font-size="13" font-family="serif" fill="#000000">40</text>
    <text x="54" y="79" text-anchor="end" font-size="13" font-family="serif" fill="#000000">50</text>
    <text x="54" y="44" text-anchor="end" font-size="13" font-family="serif" fill="#000000">60</text>
    <text x="56" y="266" text-anchor="end" font-size="12" font-style="italic" font-family="serif" fill="#000000">O</text>

    <!-- Y Axis Title -->
    <text x="-145" y="18" transform="rotate(-90)" text-anchor="middle" font-size="15" font-family="serif" fill="#000000">Number of students</text>

    <!-- Bars with Light Gray Fill and Black Outlines -->
    <!-- Volleyball: 30 -->
    <rect x="90" y="145" width="35" height="105" fill="#cccccc" stroke="#000000" stroke-width="1.5"/>
    <!-- Hockey: 40 -->
    <rect x="150" y="110" width="35" height="140" fill="#cccccc" stroke="#000000" stroke-width="1.5"/>
    <!-- Basketball: ~57 -->
    <rect x="210" y="50.5" width="35" height="199.5" fill="#cccccc" stroke="#000000" stroke-width="1.5"/>
    <!-- Soccer: ~43 -->
    <rect x="270" y="99.5" width="35" height="150.5" fill="#cccccc" stroke="#000000" stroke-width="1.5"/>

    <!-- X Axis Category Labels (Rotated) -->
    <text x="100" y="268" text-anchor="start" font-size="13" font-family="serif" fill="#000000" transform="rotate(30 100 268)">volleyball</text>
    <text x="160" y="268" text-anchor="start" font-size="13" font-family="serif" fill="#000000" transform="rotate(30 160 268)">hockey</text>
    <text x="220" y="268" text-anchor="start" font-size="13" font-family="serif" fill="#000000" transform="rotate(30 220 268)">basketball</text>
    <text x="280" y="268" text-anchor="start" font-size="13" font-family="serif" fill="#000000" transform="rotate(30 280 268)">soccer</text>

    <!-- X Axis Title -->
    <text x="197" y="312" text-anchor="middle" font-size="15" font-family="serif" fill="#000000">Program</text>
  </svg>
</div>`,
    options: [
      "A) 10",
      "B) 30",
      "C) 40",
      "D) 70"
    ],
    correctAnswer: 0,
    explanation: `Read the values from the bar graph:
- **Hockey program**: $40$ students.
- **Volleyball program**: $30$ students.
Calculate the difference:
$$ 40 - 30 = 10 \\text{ students} $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 37,
    question: `$$ y = 5x^2 - 40x + 35 $$
The given equation represents a parabola in the $xy$-plane. Which of the following equations that represent the same parabola displays the $x$-intercepts as constants or coefficients?`,
    options: [
      "A) $y = 5x^2 - 8x + 35$",
      "B) $y = 5x(x - 8) + 35$",
      "C) $y = 5(x - 4)^2 - 45$",
      "D) $y = 5(x - 1)(x - 7)$"
    ],
    correctAnswer: 3,
    explanation: `A quadratic equation in factored form $y = a(x - r_1)(x - r_2)$ directly displays the $x$-intercepts $r_1$ and $r_2$ as constants.
Factoring $y = 5x^2 - 40x + 35$:
$$ y = 5(x^2 - 8x + 7) = 5(x - 1)(x - 7) $$
Here, the $x$-intercepts $1$ and $7$ are explicitly shown as constants.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 38,
    question: `A total of 50 people attended a conference and were offered 4 types of entrees. The table shows the number of people who chose each type of entree.

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Type of entree</th>
      <th class="border border-gray-400 px-2 py-1">Number of people</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">Beef</td><td class="border border-gray-400 px-2 py-1">20</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Chicken</td><td class="border border-gray-400 px-2 py-1">19</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Fish</td><td class="border border-gray-400 px-2 py-1">2</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Vegetarian</td><td class="border border-gray-400 px-2 py-1">9</td></tr>
    <tr class="font-bold"><td class="border border-gray-400 px-2 py-1">Total</td><td class="border border-gray-400 px-2 py-1">50</td></tr>
  </tbody>
</table>

If one of these people is selected at random, what is the probability of selecting a person who chose a vegetarian entree?`,
    options: [
      "A) $\\frac{9}{100}$",
      "B) $\\frac{9}{50}$",
      "C) $\\frac{9}{10}$",
      "D) $\\frac{1}{50}$"
    ],
    correctAnswer: 1,
    explanation: `Probability is defined as the number of favorable outcomes divided by the total number of outcomes:
$$ P(\\text{Vegetarian}) = \\frac{\\text{Number who chose Vegetarian}}{\\text{Total number of people}} = \\frac{9}{50} $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 39,
    question: `The expression $(4x^6)(3x)$ is equivalent to $bx^7$, where $b$ is a constant. What is the value of $b$?`,
    options: [
      "A) 7",
      "B) 12",
      "C) 18",
      "D) 24"
    ],
    correctAnswer: 1,
    explanation: `Multiply the coefficients together and use exponent rules for the terms with base $x$:
$$ (4x^6)(3x) = (4 \\times 3)(x^6 \\times x^1) = 12x^{6+1} = 12x^7 $$
Comparing $12x^7$ to $bx^7$ yields $b = 12$.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 40,
    question: `$$ y = 10x + 48 $$
One of the two equations in a system of linear equations is given. The system has infinitely many solutions. Which equation could be the second equation in this system?`,
    options: [
      "A) $y - 10x = -48$",
      "B) $y - 10x = 48$",
      "C) $y - 12x = 24$",
      "D) $y - 12x = 0$"
    ],
    correctAnswer: 1,
    explanation: `A linear system has infinitely many solutions if both equations are algebraically equivalent (representing the exact same line).
Rearrange $y = 10x + 48$ into standard form by subtracting $10x$ from both sides:
$$ y - 10x = 48 $$
This matches Choice B exactly.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 41,
    question: `The height of a right circular cylinder is $59$ inches, and the circumference of its base is $590$ inches. Which expression represents the total surface area, in square inches, of the cylinder?`,
    options: [
      "A) $59(590)$",
      "B) $\\pi\\left(\\frac{295}{\\pi}\\right)^2 59$",
      "C) $59(590) + \\pi\\left(\\frac{295}{\\pi}\\right)^2$",
      "D) $59(590) + 2\\pi\\left(\\frac{295}{\\pi}\\right)^2$"
    ],
    correctAnswer: 3,
    explanation: `The total surface area of a right circular cylinder consists of its lateral area plus the area of its two circular bases:
$$ \\text{SA} = 2\\pi r h + 2\\pi r^2 $$
1. **Circumference**: $C = 2\\pi r = 590 \\implies r = \\frac{590}{2\\pi} = \\frac{295}{\\pi}$ inches.
2. **Lateral Area**: $C \\times h = 590 \\times 59 = 59(590)$ sq in.
3. **Base Area (both bases)**: $2 \\times \\pi r^2 = 2\\pi\\left(\\frac{295}{\\pi}\\right)^2$ sq in.

Combining both gives:
$$ \\text{SA} = 59(590) + 2\\pi\\left(\\frac{295}{\\pi}\\right)^2 $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 42,
    question: `There are $450$ objects in a box. Of these objects, $8\%$ are spheres. How many spheres are in the box?`,
    options: [
      "A) 8",
      "B) 36",
      "C) 180",
      "D) 442"
    ],
    correctAnswer: 1,
    explanation: `Calculate $8\\%$ of $450$:
$$ 0.08 \\times 450 = 36 \\text{ spheres} $$`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 43,
    question: `The scatterplot shows the relationship between two variables, $x$ and $y$. A line of best fit is also shown.

<div class="my-4 flex justify-center">
  <svg width="360" height="350" viewBox="0 0 360 350" class="border border-gray-300 rounded-lg bg-white p-2">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" />
      </marker>
    </defs>
    <!-- Grid Lines (Every 1 unit for x=1..14, y=1..14) -->
    <g stroke="#d1d5db" stroke-width="1">
      <!-- Vertical Grid Lines -->
      <line x1="70" y1="30" x2="70" y2="310"/>
      <line x1="90" y1="30" x2="90" y2="310"/>
      <line x1="110" y1="30" x2="110" y2="310"/>
      <line x1="130" y1="30" x2="130" y2="310"/>
      <line x1="150" y1="30" x2="150" y2="310"/>
      <line x1="170" y1="30" x2="170" y2="310"/>
      <line x1="190" y1="30" x2="190" y2="310"/>
      <line x1="210" y1="30" x2="210" y2="310"/>
      <line x1="230" y1="30" x2="230" y2="310"/>
      <line x1="250" y1="30" x2="250" y2="310"/>
      <line x1="270" y1="30" x2="270" y2="310"/>
      <line x1="290" y1="30" x2="290" y2="310"/>
      <line x1="310" y1="30" x2="310" y2="310"/>
      <line x1="330" y1="30" x2="330" y2="310"/>

      <!-- Horizontal Grid Lines -->
      <line x1="50" y1="290" x2="330" y2="290"/>
      <line x1="50" y1="270" x2="330" y2="270"/>
      <line x1="50" y1="250" x2="330" y2="250"/>
      <line x1="50" y1="230" x2="330" y2="230"/>
      <line x1="50" y1="210" x2="330" y2="210"/>
      <line x1="50" y1="190" x2="330" y2="190"/>
      <line x1="50" y1="170" x2="330" y2="170"/>
      <line x1="50" y1="150" x2="330" y2="150"/>
      <line x1="50" y1="130" x2="330" y2="130"/>
      <line x1="50" y1="110" x2="330" y2="110"/>
      <line x1="50" y1="90" x2="330" y2="90"/>
      <line x1="50" y1="70" x2="330" y2="70"/>
      <line x1="50" y1="50" x2="330" y2="50"/>
      <line x1="50" y1="30" x2="330" y2="30"/>
    </g>

    <!-- Axes -->
    <line x1="35" y1="310" x2="345" y2="310" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="50" y1="325" x2="50" y2="18" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>

    <text x="350" y="314" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">x</text>
    <text x="50" y="10" text-anchor="middle" font-size="15" font-style="italic" font-family="serif" font-weight="bold" fill="#000000">y</text>
    <text x="42" y="322" font-size="13" font-style="italic" font-family="serif" fill="#000000">O</text>

    <!-- Ticks -->
    <g stroke="#000000" stroke-width="1.5">
      <!-- X Ticks -->
      <line x1="70" y1="306" x2="70" y2="314"/>
      <line x1="90" y1="306" x2="90" y2="314"/>
      <line x1="110" y1="306" x2="110" y2="314"/>
      <line x1="130" y1="306" x2="130" y2="314"/>
      <line x1="150" y1="306" x2="150" y2="314"/>
      <line x1="170" y1="306" x2="170" y2="314"/>
      <line x1="190" y1="306" x2="190" y2="314"/>
      <line x1="210" y1="306" x2="210" y2="314"/>
      <line x1="230" y1="306" x2="230" y2="314"/>
      <line x1="250" y1="306" x2="250" y2="314"/>
      <line x1="270" y1="306" x2="270" y2="314"/>
      <line x1="290" y1="306" x2="290" y2="314"/>
      <line x1="310" y1="306" x2="310" y2="314"/>
      <line x1="330" y1="306" x2="330" y2="314"/>
      <!-- Y Ticks -->
      <line x1="46" y1="290" x2="54" y2="290"/>
      <line x1="46" y1="270" x2="54" y2="270"/>
      <line x1="46" y1="250" x2="54" y2="250"/>
      <line x1="46" y1="230" x2="54" y2="230"/>
      <line x1="46" y1="210" x2="54" y2="210"/>
      <line x1="46" y1="190" x2="54" y2="190"/>
      <line x1="46" y1="170" x2="54" y2="170"/>
      <line x1="46" y1="150" x2="54" y2="150"/>
      <line x1="46" y1="130" x2="54" y2="130"/>
      <line x1="46" y1="110" x2="54" y2="110"/>
      <line x1="46" y1="90" x2="54" y2="90"/>
      <line x1="46" y1="70" x2="54" y2="70"/>
      <line x1="46" y1="50" x2="54" y2="50"/>
      <line x1="46" y1="30" x2="54" y2="30"/>
    </g>

    <!-- X Labels -->
    <text x="90" y="326" text-anchor="middle" font-size="11" font-family="serif" fill="#000000">2</text>
    <text x="130" y="326" text-anchor="middle" font-size="11" font-family="serif" fill="#000000">4</text>
    <text x="170" y="326" text-anchor="middle" font-size="11" font-family="serif" fill="#000000">6</text>
    <text x="210" y="326" text-anchor="middle" font-size="11" font-family="serif" fill="#000000">8</text>
    <text x="250" y="326" text-anchor="middle" font-size="11" font-family="serif" fill="#000000">10</text>
    <text x="290" y="326" text-anchor="middle" font-size="11" font-family="serif" fill="#000000">12</text>
    <text x="330" y="326" text-anchor="middle" font-size="11" font-family="serif" fill="#000000">14</text>

    <!-- Y Labels -->
    <text x="43" y="274" text-anchor="end" font-size="11" font-family="serif" fill="#000000">2</text>
    <text x="43" y="234" text-anchor="end" font-size="11" font-family="serif" fill="#000000">4</text>
    <text x="43" y="194" text-anchor="end" font-size="11" font-family="serif" fill="#000000">6</text>
    <text x="43" y="154" text-anchor="end" font-size="11" font-family="serif" fill="#000000">8</text>
    <text x="43" y="114" text-anchor="end" font-size="11" font-family="serif" fill="#000000">10</text>
    <text x="43" y="74" text-anchor="end" font-size="11" font-family="serif" fill="#000000">12</text>
    <text x="43" y="34" text-anchor="end" font-size="11" font-family="serif" fill="#000000">14</text>

    <!-- Line of Best Fit y = 12.4 - 0.73x -->
    <line x1="50" y1="62" x2="330" y2="266" stroke="#000000" stroke-width="2.5"/>

    <!-- Scatter Points -->
    <circle cx="74" cy="50" r="4" fill="#000000"/>
    <circle cx="76" cy="90" r="4" fill="#000000"/>
    <circle cx="118" cy="130" r="4" fill="#000000"/>
    <circle cx="130" cy="150" r="4" fill="#000000"/>
    <circle cx="176" cy="70" r="4" fill="#000000"/>
    <circle cx="176" cy="150" r="4" fill="#000000"/>
    <circle cx="192" cy="210" r="4" fill="#000000"/>
    <circle cx="226" cy="210" r="4" fill="#000000"/>
    <circle cx="282" cy="190" r="4" fill="#000000"/>
    <circle cx="306" cy="270" r="4" fill="#000000"/>
  </svg>
</div>

Which of the following equations best represents the line of best fit shown?`,
    options: [
      "A) $y = 12.4 + 0.7x$",
      "B) $y = 12.4 - 0.7x$",
      "C) $y = -12.4 + 0.7x$",
      "D) $y = -12.4 - 0.7x$"
    ],
    correctAnswer: 1,
    explanation: `Analyze the linear scatterplot model:
1. **$y$-intercept**: The line intersects the $y$-axis at approximately $+12.4$.
2. **Slope**: As $x$ increases, $y$ decreases, indicating a negative slope ($-0.7$).

Combining these attributes yields $y = 12.4 - 0.7x$.`,
    category: "SAT-2026-March-form C"
  },
  {
    id: 44,
    question: `An object is launched from a height of $131$ feet above the ground. A quadratic function $f$ models the height above the ground, in feet, of the object $t$ seconds after it is launched. According to the model, $2$ seconds after the object is launched, it reaches a maximum height of $195$ feet above the ground. Which equation defines $f$?`,
    options: [
      "A) $f(t) = -16(t + 195)^2 - 2$",
      "B) $f(t) = -16(t - 195)^2 + 2$",
      "C) $f(t) = -16(t + 2)^2 - 195$",
      "D) $f(t) = -16(t - 2)^2 + 195$"
    ],
    correctAnswer: 3,
    explanation: `The maximum height occurs at the vertex of the quadratic parabola:
- Vertex coordinates $(h, k) = (2, 195)$.
Vertex form of a quadratic function:
$$ f(t) = a(t - h)^2 + k = a(t - 2)^2 + 195 $$
With vertical downward acceleration $a = -16$:
$$ f(t) = -16(t - 2)^2 + 195 $$
Verify $y$-intercept at $t = 0$:
$$ f(0) = -16(0 - 2)^2 + 195 = -16(4) + 195 = -64 + 195 = 131 \\text{ feet} $$
This matches the initial height of $131$ feet. Choice D is correct.`,
    category: "SAT-2026-March-form C"
  }
];
