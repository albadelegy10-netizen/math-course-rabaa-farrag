import { Question } from '../../types';

export const SAT_2026_MARCH_FORM_A_SET: Question[] = [
  // MODULE 1 (Questions 1 to 22)
  {
    id: 1,
    question: `The function $w$ models the weight, in ounces, of the remaining solid wax of a burning candle as a function of the time $x$, in hours, after the candle was lit. The graph of $y = w(x)$ is shown. According to the model, what was the weight, in ounces, of the candle's remaining solid wax 12 hours after the candle was lit?

<div class="my-4 flex justify-center">
  <svg width="340" height="240" viewBox="0 0 340 240" class="border border-gray-300 rounded-lg bg-white p-2">
    <defs>
      <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="300" height="180" x="30" y="20" fill="url(#grid1)"/>
    <!-- Axes -->
    <line x1="30" y1="20" x2="30" y2="200" stroke="#374151" stroke-width="2"/>
    <line x1="30" y1="200" x2="330" y2="200" stroke="#374151" stroke-width="2"/>
    <!-- Ticks & Labels X -->
    <text x="30" y="218" text-anchor="middle" font-size="11" fill="#4b5563">0</text>
    <text x="72" y="218" text-anchor="middle" font-size="11" fill="#4b5563">2</text>
    <text x="115" y="218" text-anchor="middle" font-size="11" fill="#4b5563">4</text>
    <text x="157" y="218" text-anchor="middle" font-size="11" fill="#4b5563">6</text>
    <text x="200" y="218" text-anchor="middle" font-size="11" fill="#4b5563">8</text>
    <text x="242" y="218" text-anchor="middle" font-size="11" fill="#4b5563">10</text>
    <text x="285" y="218" text-anchor="middle" font-size="11" fill="#4b5563">12</text>
    <text x="327" y="218" text-anchor="middle" font-size="11" fill="#4b5563">14</text>
    <text x="180" y="235" text-anchor="middle" font-size="12" font-weight="bold" fill="#1f2937">Time (hours)</text>
    <!-- Ticks & Labels Y -->
    <text x="22" y="204" text-anchor="end" font-size="11" fill="#4b5563">0</text>
    <text x="22" y="178" text-anchor="end" font-size="11" fill="#4b5563">2</text>
    <text x="22" y="152" text-anchor="end" font-size="11" fill="#4b5563">4</text>
    <text x="22" y="126" text-anchor="end" font-size="11" fill="#4b5563">6</text>
    <text x="22" y="100" text-anchor="end" font-size="11" fill="#4b5563">8</text>
    <text x="22" y="74" text-anchor="end" font-size="11" fill="#4b5563">10</text>
    <text x="22" y="48" text-anchor="end" font-size="11" fill="#4b5563">12</text>
    <text x="22" y="24" text-anchor="end" font-size="11" fill="#4b5563">14</text>
    <!-- Line: (0, 13) to (12, 10) -> Y_pixel: 200 - (val/14)*180 -->
    <line x1="30" y1="32.8" x2="285" y2="71.4" stroke="#2563eb" stroke-width="3"/>
    <circle cx="285" cy="71.4" r="5" fill="#dc2626"/>
  </svg>
</div>`,
    options: ["A) $4$", "B) $8$", "C) $10$", "D) $13$"],
    correctAnswer: 2,
    explanation: `The graph displays a linear relationship where the $y$-axis represents the candle's weight in ounces and the $x$-axis represents time in hours.
To find the weight $12$ hours after the candle was lit, locate $x = 12$ on the horizontal axis and trace up to the line.
At $x = 12$, the corresponding $y$-value on the line is exactly $10$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 2,
    question: `In $\\Delta ABC$, the sum of the measures of $\\angle A$ and $\\angle B$ is $159.5^\\circ$. What is the measure of $\\angle C$?`,
    options: ["A) $20.5^\\circ$", "B) $90^\\circ$", "C) $110.5^\\circ$", "D) $180^\\circ$"],
    correctAnswer: 0,
    explanation: `The sum of the interior angles in any triangle is always $180^\\circ$.
Given that $m\\angle A + m\\angle B = 159.5^\\circ$, we find $m\\angle C$ by subtracting this sum from $180^\\circ$:
$$ m\\angle C = 180^\\circ - 159.5^\\circ = 20.5^\\circ $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 3,
    question: `A local gym is offering a $25\\%$ discount on an annual membership. The regular cost of an annual membership is $\$288$. How much less is the discounted cost of the membership than the regular cost of the membership?`,
    options: ["A) $\$25$", "B) $\$72$", "C) $\$216$", "D) $\$288$"],
    correctAnswer: 1,
    explanation: `The question asks for the difference between the regular cost and the discounted cost, which is the dollar value of the $25\\%$ discount.
$$ \\text{Discount} = 25\\% \\times 288 = 0.25 \\times 288 = \\frac{1}{4} \\times 288 = 72 $$
Therefore, the discounted cost is $\$72$ less than the regular cost.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 4,
    question: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">$x$</th>
      <th class="border border-gray-400 px-2 py-1">$y$</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">0</td><td class="border border-gray-400 px-2 py-1">8</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">1</td><td class="border border-gray-400 px-2 py-1">9</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2</td><td class="border border-gray-400 px-2 py-1">10</td></tr>
  </tbody>
</table>

The table shows three values of $x$ and their corresponding values of $y$. There is a linear relationship between $x$ and $y$. Which of the following equations represents this relationship?`,
    options: ["A) $y = 8x$", "B) $y = 10x + 2$", "C) $y = 10x$", "D) $y = x + 8$"],
    correctAnswer: 3,
    explanation: `First, calculate the slope $m$ using points $(0, 8)$ and $(1, 9)$:
$$ m = \\frac{9 - 8}{1 - 0} = 1 $$
The $y$-intercept $b$ is the value of $y$ when $x = 0$, which is $8$.
Substitute $m = 1$ and $b = 8$ into slope-intercept form $y = mx + b$:
$$ y = 1x + 8 = x + 8 $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 5,
    question: `The function $f$ is defined by the equation $f(x) = 380x$. What is the value of $f(10)$?`,
    options: [],
    correctAnswer: 0,
    answerText: "3800",
    explanation: `Substitute $10$ into the function in place of $x$:
$$ f(10) = 380(10) = 3800 $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 6,
    question: `Which of the following equations has solutions $13$ and $-24$?`,
    options: [
      "A) $(x - 24)(x + 13) = 0$",
      "B) $(x - 13)(x + 24) = 0$",
      "C) $(x + 13)(x + 24) = 0$",
      "D) $(x - 24)(x - 13) = 0$"
    ],
    correctAnswer: 1,
    explanation: `If a quadratic equation has roots $r_1$ and $r_2$, its factored form is $(x - r_1)(x - r_2) = 0$.
Given $r_1 = 13$ and $r_2 = -24$:
$$ (x - 13)(x - (-24)) = 0 \\implies (x - 13)(x + 24) = 0 $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 7,
    question: `$$ y = 0 $$
$$ y = x^2 - 36 $$
Which ordered pair $(x, y)$ is a solution to the given system of equations?`,
    options: ["A) $(0, 6)$", "B) $(0, 36)$", "C) $(6, 0)$", "D) $(36, 0)$"],
    correctAnswer: 2,
    explanation: `Substitute $y = 0$ into the second equation:
$$ 0 = x^2 - 36 \\implies x^2 = 36 \\implies x = \\pm 6 $$
Thus, the solutions are $(6, 0)$ and $(-6, 0)$. Among the choices, $(6, 0)$ is correct.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 8,
    question: `When a scientist began observing a sample of an isotope, the mass of the sample was $530,000$ milligrams. The mass of the sample decreases by half approximately every $5$ days. Which of the following is closest to the mass, in milligrams, of the sample $35$ days after the scientist began observing the sample?`,
    options: ["A) $4,141$", "B) $15,143$", "C) $16,563$", "D) $75,714$"],
    correctAnswer: 0,
    explanation: `Use the half-life decay formula $M = M_0 \\left(\\frac{1}{2}\\right)^{t/h}$:
Here $M_0 = 530,000$, $t = 35$, and half-life $h = 5$.
$$ M = 530,000 \\left(\\frac{1}{2}\\right)^{35/5} = 530,000 \\left(\\frac{1}{2}\\right)^7 = 530,000 \\times \\frac{1}{128} \\approx 4,140.625 $$
Rounding to the nearest integer gives $4,141$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 9,
    question: `The height of a right circular cylinder is $31$ inches, and the circumference of its base is $310$ inches. Which expression represents the total surface area, in square inches, of the cylinder?`,
    options: [
      "A) $31(310)$",
      "B) $\\pi \\left(\\frac{155}{\\pi}\\right)^2 (31)$",
      "C) $31(310) + \\pi \\left(\\frac{155}{\\pi}\\right)^2$",
      "D) $31(310) + 2\\pi \\left(\\frac{155}{\\pi}\\right)^2$"
    ],
    correctAnswer: 3,
    explanation: `The total surface area of a cylinder is $A = \\text{Lateral Area} + 2 \\times \\text{Base Area} = 2\\pi r h + 2\\pi r^2$.
1. Lateral area = $\\text{Circumference} \\times h = 310 \\times 31 = 31(310)$.
2. Circumference $C = 2\\pi r = 310 \\implies r = \\frac{310}{2\\pi} = \\frac{155}{\\pi}$.
3. Base area for two bases = $2 \\times \\pi r^2 = 2\\pi \\left(\\frac{155}{\\pi}\\right)^2$.
Combining them yields $31(310) + 2\\pi \\left(\\frac{155}{\\pi}\\right)^2$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 10,
    question: `The function $f(w) = 6w^2$ gives the area of a rectangle, in square feet ($\\text{ft}^2$), if its width is $w\\text{ ft}$ and its length is $6$ times its width. Which of the following is the best interpretation of $f(13) = 1,014$?`,
    options: [
      "A) If the width of the rectangle is $13\\text{ ft}$, then the area of the rectangle is $1,014\\text{ ft}^2$.",
      "B) If the width of the rectangle is $13\\text{ ft}$, then the length of the rectangle is $1,014\\text{ ft}$.",
      "C) If the width of the rectangle is $1,014\\text{ ft}$, then the length of the rectangle is $13\\text{ ft}$.",
      "D) If the width of the rectangle is $1,014\\text{ ft}$, then the area of the rectangle is $13\\text{ ft}^2$."
    ],
    correctAnswer: 0,
    explanation: `The input $w = 13$ represents the width of the rectangle in feet. The output $f(13) = 1,014$ represents the resulting area in square feet. Thus, if the width is $13\\text{ ft}$, the total area is $1,014\\text{ ft}^2$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 11,
    question: `The expression $(3x + 5)(8x - 7)$ can be written in the form $ax^2 + bx + c$, where $a$, $b$, and $c$ are constants. What is the value of $a + b$?`,
    options: [],
    correctAnswer: 0,
    answerText: "43",
    explanation: `Expand the binomial product:
$$ (3x + 5)(8x - 7) = 3x(8x) + 3x(-7) + 5(8x) + 5(-7) $$
$$ = 24x^2 - 21x + 40x - 35 = 24x^2 + 19x - 35 $$
Identifying coefficients: $a = 24$, $b = 19$, and $c = -35$.
$$ a + b = 24 + 19 = 43 $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 12,
    question: `The ratio $a$ to $b$ is equivalent to the ratio $49$ to $26$. What is the value of $a$ when $b = 182$?`,
    options: [],
    correctAnswer: 0,
    answerText: "343",
    explanation: `Set up the proportion:
$$ \\frac{a}{b} = \\frac{49}{26} $$
Substitute $b = 182$:
$$ \\frac{a}{182} = \\frac{49}{26} \\implies a = \\frac{49 \\times 182}{26} $$
Since $182 \\div 26 = 7$:
$$ a = 49 \\times 7 = 343 $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 13,
    question: `At the beginning of the year, Imani has $\$170$ in her account. Each month this year, she will deposit between $\$30$ and $\$60$ into the account. Which inequality represents all possibilities for the total amount of money $x$, in dollars, in Imani's account after $10$ months of deposits this year?`,
    options: ["A) $x \\le 300$", "B) $x \\ge 600$", "C) $170 \\le x \\le 620$", "D) $470 \\le x \\le 770$"],
    correctAnswer: 3,
    explanation: `Initial balance = $\$170$.
- Minimum deposit in 10 months: $10 \\times 30 = 300 \\implies 170 + 300 = 470$.
- Maximum deposit in 10 months: $10 \\times 60 = 600 \\implies 170 + 600 = 770$.
Therefore, the possible total balance $x$ satisfies $470 \\le x \\le 770$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 14,
    question: `The function $f$ is defined by $f(x) = (x - 2)(x - 8)(x + 3)$. In the $xy$-plane, the graph of $y = h(x)$ is the result of translating the graph of $y = f(x)$ up $6$ units. What is the $y$-coordinate of the $y$-intercept of the graph of $y = h(x)$?`,
    options: ["A) $54$", "B) $48$", "C) $6$", "D) $0$"],
    correctAnswer: 0,
    explanation: `First, evaluate $f(0)$ to find the $y$-intercept of $f(x)$:
$$ f(0) = (0 - 2)(0 - 8)(0 + 3) = (-2)(-8)(3) = 48 $$
Translating the graph up $6$ units gives $h(x) = f(x) + 6$.
The $y$-intercept of $h(x)$ is $h(0) = f(0) + 6 = 48 + 6 = 54$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 15,
    question: `A circle has a circumference of $28\\pi$ centimeters. What is the diameter, in centimeters, of the circle?`,
    options: [],
    correctAnswer: 0,
    answerText: "28",
    explanation: `The formula for the circumference of a circle is $C = \\pi d$.
$$ 28\\pi = \\pi d \\implies d = 28 $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 16,
    question: `How many solutions does the equation $35x - 25 = 5(7x - 5)$ have?`,
    options: ["A) Exactly one", "B) Exactly two", "C) Infinitely many", "D) Zero"],
    correctAnswer: 2,
    explanation: `Expand the right side of the equation:
$$ 5(7x - 5) = 35x - 25 $$
The equation becomes $35x - 25 = 35x - 25$. Since both sides are identical for all $x$, there are **infinitely many** solutions.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 17,
    question: `On January 1, 2000, the population of a town was $26,257$ and on January 1, 2010, the population was $26,858$. The equation $10x + 26,257 = 26,858$ describes this situation. Which of the following is the best interpretation of $x$ in this context?`,
    options: [
      "A) The total increase in population between 2000 and 2010",
      "B) The projected population of the town 10 years after 2010",
      "C) The average increase per year of the population between 2000 and 2010",
      "D) The percentage by which the population of the town increased each year between 2000 and 2010"
    ],
    correctAnswer: 2,
    explanation: `In $10x + 26,257 = 26,858$, $26,257$ is the initial population in year 2000, and $10$ represents the 10 elapsed years up to 2010. The multiplier $x$ represents the average annual increase in population per year.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 18,
    question: `For the linear function $f$, $f(-5) = -7$ and the slope of the graph of $y = f(x)$ in the $xy$-plane is $3$. Which equation defines $f$?`,
    options: ["A) $f(x) = 3x + 8$", "B) $f(x) = 3x - 5$", "C) $f(x) = 3x - 7$", "D) $f(x) = 3x - 12$"],
    correctAnswer: 0,
    explanation: `Use point-slope form $y - y_1 = m(x - x_1)$ with $m = 3$ and point $(-5, -7)$:
$$ y - (-7) = 3(x - (-5)) \\implies y + 7 = 3(x + 5) $$
$$ y + 7 = 3x + 15 \\implies y = 3x + 8 $$
Therefore, $f(x) = 3x + 8$.`,
    category: "SAT-2026-March-form A"
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
    explanation: `Circle A has radius $r_A = \\sqrt{25} = 5$.
Circle B has radius $r_B = 2 \\times 5 = 10$.
Keeping the same center $(2, 7)$, $r_B^2 = 10^2 = 100$.
The equation for circle B is $(x - 2)^2 + (y - 7)^2 = 100$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 20,
    question: `Line $k$ contains the points $(-3, -60)$, $(v, 0)$, and $(5, 76)$. What is the value of $v$?`,
    options: [],
    correctAnswer: 0,
    answerText: "9/17",
    explanation: `First, calculate slope $m$ using points $(-3, -60)$ and $(5, 76)$:
$$ m = \\frac{76 - (-60)}{5 - (-3)} = \\frac{136}{8} = 17 $$
Next, use point $(v, 0)$ with $(5, 76)$ and set slope equal to $17$:
$$ \\frac{76 - 0}{5 - v} = 17 \\implies 76 = 17(5 - v) \\implies 76 = 85 - 17v $$
$$ 17v = 9 \\implies v = \\frac{9}{17} \\approx 0.529 $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 21,
    question: `In right triangle $FGH$ shown, what is the value of $\\cos F$?

<div class="my-4 flex justify-center">
  <svg width="260" height="200" viewBox="0 0 260 200" class="border border-gray-300 rounded-lg bg-white p-2">
    <!-- Right triangle FGH, right angle at H -->
    <polygon points="40,160 220,160 220,40" fill="none" stroke="#1f2937" stroke-width="2"/>
    <!-- Right angle square at H (220, 160) -->
    <path d="M 205 160 L 205 145 L 220 145" fill="none" stroke="#1f2937" stroke-width="1.5"/>
    <!-- Labels -->
    <text x="25" y="170" font-size="14" font-weight="bold" fill="#1f2937">F</text>
    <text x="230" y="170" font-size="14" font-weight="bold" fill="#1f2937">H</text>
    <text x="225" y="35" font-size="14" font-weight="bold" fill="#1f2937">G</text>
    <text x="120" y="90" font-size="13" font-weight="bold" fill="#2563eb">68</text>
    <text x="195" y="130" font-size="12" fill="#059669">60°</text>
  </svg>
</div>`,
    options: ["A) $\\frac{\\sqrt{3}}{68}$", "B) $\\frac{1}{2}$", "C) $\\frac{\\sqrt{3}}{2}$", "D) $34\\sqrt{3}$"],
    correctAnswer: 2,
    explanation: `Triangle $FGH$ is a right triangle with right angle at $H$ and $m\\angle G = 60^\\circ$.
Since the angles sum to $180^\\circ$, $m\\angle F = 180^\\circ - 90^\\circ - 60^\\circ = 30^\\circ$.
The cosine of angle $F$ is $\\cos(30^\\circ) = \\frac{\\sqrt{3}}{2}$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 22,
    question: `Based on a model, on day 1 of an 8-day experiment, a lima bean plant had an estimated mass of $253$ grams, and each day after day 1 of the experiment, the estimated mass of the plant decreased by $4$ grams. Which equation represents this model, where $m$ is the estimated mass, in grams, of the plant on day $x$ of the experiment and $1 \\le x \\le 8$?`,
    options: ["A) $m = -4x + 245$", "B) $m = -4x + 249$", "C) $m = -4x + 253$", "D) $m = -4x + 257$"],
    correctAnswer: 3,
    explanation: `The rate of decrease is $4$ grams per day, so slope $m = -4$.
The equation is of the form $m = -4x + b$.
For day 1 ($x = 1$), mass $m = 253$:
$$ 253 = -4(1) + b \\implies 253 = -4 + b \\implies b = 257 $$
Thus, the equation is $m = -4x + 257$.`,
    category: "SAT-2026-March-form A"
  },

  // MODULE 2 (Questions 23 to 44)
  {
    id: 23,
    question: `A total of $255$ people registered for a city's annual race as either a runner or a walker. $210$ people registered as a runner. How many people registered as a walker?`,
    options: ["A) $510$", "B) $255$", "C) $210$", "D) $45$"],
    correctAnswer: 3,
    explanation: `$$ \\text{Total} = \\text{Runners} + \\text{Walkers} $$
$$ 255 = 210 + \\text{Walkers} \\implies \\text{Walkers} = 255 - 210 = 45 $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 24,
    question: `The scatterplot shows the temperature, in degrees Fahrenheit ($^\\circ\\text{F}$), and the elevation, in feet, measured at 6 locations on a mountain. A line of best fit is also shown. At an elevation of $4,000$ feet, what is the temperature, in $^\\circ\\text{F}$, predicted by the line of best fit?

<div class="my-4 flex justify-center">
  <svg width="320" height="240" viewBox="0 0 320 240" class="border border-gray-300 rounded-lg bg-white p-2">
    <defs>
      <pattern id="grid2" width="25" height="20" patternUnits="userSpaceOnUse">
        <path d="M 25 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="250" height="180" x="50" y="20" fill="url(#grid2)"/>
    <line x1="50" y1="20" x2="50" y2="200" stroke="#374151" stroke-width="2"/>
    <line x1="50" y1="200" x2="300" y2="200" stroke="#374151" stroke-width="2"/>
    <!-- X Labels -->
    <text x="50" y="218" text-anchor="middle" font-size="10" fill="#4b5563">0</text>
    <text x="112.5" y="218" text-anchor="middle" font-size="10" fill="#4b5563">2,000</text>
    <text x="175" y="218" text-anchor="middle" font-size="10" fill="#4b5563">4,000</text>
    <text x="237.5" y="218" text-anchor="middle" font-size="10" fill="#4b5563">6,000</text>
    <text x="300" y="218" text-anchor="middle" font-size="10" fill="#4b5563">8,000</text>
    <text x="175" y="235" text-anchor="middle" font-size="11" font-weight="bold" fill="#1f2937">Elevation (feet)</text>
    <!-- Y Labels -->
    <text x="42" y="204" text-anchor="end" font-size="10" fill="#4b5563">0</text>
    <text x="42" y="181.5" text-anchor="end" font-size="10" fill="#4b5563">10</text>
    <text x="42" y="159" text-anchor="end" font-size="10" fill="#4b5563">20</text>
    <text x="42" y="136.5" text-anchor="end" font-size="10" fill="#4b5563">30</text>
    <text x="42" y="114" text-anchor="end" font-size="10" fill="#4b5563">40</text>
    <text x="42" y="91.5" text-anchor="end" font-size="10" fill="#4b5563">50</text>
    <text x="42" y="69" text-anchor="end" font-size="10" fill="#4b5563">60</text>
    <text x="42" y="46.5" text-anchor="end" font-size="10" fill="#4b5563">70</text>
    <text x="42" y="24" text-anchor="end" font-size="10" fill="#4b5563">80</text>
    <!-- Line of best fit from (0, 60) to (8000, 0) -->
    <line x1="50" y1="65" x2="300" y2="200" stroke="#2563eb" stroke-width="2.5"/>
    <circle cx="175" cy="132.5" r="5" fill="#dc2626"/>
  </svg>
</div>`,
    options: ["A) $54$", "B) $30$", "C) $15$", "D) $0$"],
    correctAnswer: 1,
    explanation: `Locate $4,000$ on the horizontal axis (Elevation) and move vertically up to the line of best fit.
From that point on the line, trace horizontally to the vertical axis (Temperature), which aligns exactly with $30^\\circ\\text{F}$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 25,
    question: `The graph of a system of a linear equation and a quadratic equation is shown. What is the solution $(x, y)$ to this system?

<div class="my-4 flex justify-center">
  <svg width="340" height="290" viewBox="0 0 340 290" class="border border-gray-300 rounded-lg bg-white p-2">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" />
      </marker>
    </defs>
    
    <!-- Grid Lines -->
    <g stroke="#d1d5db" stroke-width="1">
      <line x1="30" y1="20" x2="30" y2="250"/>
      <line x1="48" y1="20" x2="48" y2="250"/>
      <line x1="66" y1="20" x2="66" y2="250"/>
      <line x1="84" y1="20" x2="84" y2="250"/>
      <line x1="102" y1="20" x2="102" y2="250"/>
      <line x1="120" y1="20" x2="120" y2="250"/>
      <line x1="138" y1="20" x2="138" y2="250"/>
      <line x1="156" y1="20" x2="156" y2="250"/>
      <line x1="174" y1="20" x2="174" y2="250"/>
      <line x1="192" y1="20" x2="192" y2="250"/>
      <line x1="210" y1="20" x2="210" y2="250"/>
      <line x1="228" y1="20" x2="228" y2="250"/>
      <line x1="246" y1="20" x2="246" y2="250"/>
      <line x1="264" y1="20" x2="264" y2="250"/>
      <line x1="282" y1="20" x2="282" y2="250"/>

      <line x1="20" y1="20" x2="295" y2="20"/>
      <line x1="20" y1="38" x2="295" y2="38"/>
      <line x1="20" y1="56" x2="295" y2="56"/>
      <line x1="20" y1="74" x2="295" y2="74"/>
      <line x1="20" y1="92" x2="295" y2="92"/>
      <line x1="20" y1="110" x2="295" y2="110"/>
      <line x1="20" y1="128" x2="295" y2="128"/>
      <line x1="20" y1="146" x2="295" y2="146"/>
      <line x1="20" y1="164" x2="295" y2="164"/>
      <line x1="20" y1="182" x2="295" y2="182"/>
      <line x1="20" y1="200" x2="295" y2="200"/>
      <line x1="20" y1="218" x2="295" y2="218"/>
      <line x1="20" y1="236" x2="295" y2="236"/>
    </g>

    <!-- Axes with Arrowheads -->
    <line x1="15" y1="146" x2="298" y2="146" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="210" y1="250" x2="210" y2="12" stroke="#000000" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Axis Labels -->
    <text x="306" y="150" font-size="14" font-style="italic" font-weight="bold" fill="#000000">x</text>
    <text x="206" y="10" font-size="14" font-style="italic" font-weight="bold" fill="#000000">y</text>
    <text x="198" y="158" font-size="12" font-style="italic" fill="#000000">O</text>

    <!-- X-Axis Numbers -->
    <text x="30" y="162" text-anchor="middle" font-size="11" fill="#000000">-10</text>
    <text x="66" y="162" text-anchor="middle" font-size="11" fill="#000000">-8</text>
    <text x="102" y="162" text-anchor="middle" font-size="11" fill="#000000">-6</text>
    <text x="138" y="162" text-anchor="middle" font-size="11" fill="#000000">-4</text>
    <text x="174" y="162" text-anchor="middle" font-size="11" fill="#000000">-2</text>
    <text x="246" y="162" text-anchor="middle" font-size="11" fill="#000000">2</text>
    <text x="282" y="162" text-anchor="middle" font-size="11" fill="#000000">4</text>

    <!-- Y-Axis Numbers -->
    <text x="202" y="42" text-anchor="end" font-size="11" fill="#000000">6</text>
    <text x="202" y="78" text-anchor="end" font-size="11" fill="#000000">4</text>
    <text x="202" y="114" text-anchor="end" font-size="11" fill="#000000">2</text>
    <text x="202" y="186" text-anchor="end" font-size="11" fill="#000000">-2</text>
    <text x="202" y="222" text-anchor="end" font-size="11" fill="#000000">-4</text>

    <!-- Axis Ticks -->
    <g stroke="#000000" stroke-width="1.5">
      <line x1="30" y1="142" x2="30" y2="150"/>
      <line x1="66" y1="142" x2="66" y2="150"/>
      <line x1="102" y1="142" x2="102" y2="150"/>
      <line x1="138" y1="142" x2="138" y2="150"/>
      <line x1="174" y1="142" x2="174" y2="150"/>
      <line x1="246" y1="142" x2="246" y2="150"/>
      <line x1="282" y1="142" x2="282" y2="150"/>
      <line x1="206" y1="38" x2="214" y2="38"/>
      <line x1="206" y1="74" x2="214" y2="74"/>
      <line x1="206" y1="110" x2="214" y2="110"/>
      <line x1="206" y1="182" x2="214" y2="182"/>
      <line x1="206" y1="218" x2="214" y2="218"/>
    </g>

    <!-- Horizontal Line y = 2 -->
    <line x1="20" y1="110" x2="295" y2="110" stroke="#000000" stroke-width="2.5"/>

    <!-- Parabola: y = -(x+3)^2 + 2 -->
    <path d="M 111,223 C 130,130 145,110 156,110 C 167,110 182,130 201,223" fill="none" stroke="#000000" stroke-width="2.5"/>
  </svg>
</div>`,
    options: ["A) $(0, 2)$", "B) $(0, -3)$", "C) $(-3, 2)$", "D) $(3, -2)$"],
    correctAnswer: 2,
    explanation: `The solution to a graphed system of equations is the point of intersection.
The horizontal line $y = 2$ touches the vertex of the downward-opening parabola at $x = -3$ and $y = 2$.
Therefore, the intersection coordinate is $(-3, 2)$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 26,
    question: `$$ 5|x| = 35 $$
What is the positive solution to the given equation?`,
    options: [],
    correctAnswer: 0,
    answerText: "7",
    explanation: `Divide both sides by $5$:
$$ |x| = 7 \\implies x = 7 \\text{ or } x = -7 $$
The positive solution is $7$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 27,
    question: `During an experiment, a particle's speed was $41$ feet per second. What is this speed in feet per minute?`,
    options: ["A) $71$", "B) $101$", "C) $1,230$", "D) $2,460$"],
    correctAnswer: 3,
    explanation: `To convert feet per second to feet per minute, multiply by $60$ (since $1 \\text{ minute} = 60 \\text{ seconds}$):
$$ \\text{Speed} = 41 \\times 60 = 2,460 \\text{ ft/min} $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 28,
    question: `A rectangle has a length of $100$ centimeters and a width of $400$ centimeters. What is the area, in square centimeters, of the rectangle?`,
    options: ["A) $100$", "B) $500$", "C) $40,000$", "D) $40,400$"],
    correctAnswer: 2,
    explanation: `$$ \\text{Area} = \\text{length} \\times \\text{width} = 100 \\text{ cm} \\times 400 \\text{ cm} = 40,000 \\text{ cm}^2 $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 29,
    question: `The function $f$ is defined by $f(x) = x^2 + 79$. What is the value of $f(x)$ when $x = 10$?`,
    options: ["A) $-179$", "B) $-21$", "C) $21$", "D) $179$"],
    correctAnswer: 3,
    explanation: `Substitute $x = 10$:
$$ f(10) = (10)^2 + 79 = 100 + 79 = 179 $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 30,
    question: `What is the $x$-intercept of the graph of $y = \\frac{45 - x}{ax + b}$ in the $xy$-plane, where $a$ and $b$ are positive constants?`,
    options: [
      "A) $\\left(-\\frac{b}{a}, 0\\right)$",
      "B) $\\left(0, \\frac{45}{b}\\right)$",
      "C) $(0, -45)$",
      "D) $(45, 0)$"
    ],
    correctAnswer: 3,
    explanation: `The $x$-intercept occurs where $y = 0$.
$$ 0 = \\frac{45 - x}{ax + b} \\implies 45 - x = 0 \\implies x = 45 $$
Thus, the $x$-intercept coordinate pair is $(45, 0)$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 31,
    question: `Kayra spent $\$74$ at a book sale and bought a total of $22$ books. She bought $h$ hardcover books for $\$4$ each and $p$ paperback books for $\$3$ each. Which system of equations represents this situation?`,
    options: [
      "A) $h + p = 22$, $3h + 4p = 74$",
      "B) $h + p = 22$, $4h + 3p = 74$",
      "C) $h + p = 74$, $3h + 4p = 22$",
      "D) $h + p = 74$, $4h + 3p = 22$"
    ],
    correctAnswer: 1,
    explanation: `1. Equation for total books: $h + p = 22$.
2. Equation for total cost: Hardcovers at $\$4$ ($4h$) plus paperbacks at $\$3$ ($3p$) equals $\$74 \\implies 4h + 3p = 74$.
This system corresponds to Choice B.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 32,
    question: `$$ 2x + 7y = 58 $$
$$ y = 6 $$
The solution to the given system of equations is $(x, y)$. What is the value of $x$?`,
    options: [],
    correctAnswer: 0,
    answerText: "8",
    explanation: `Substitute $y = 6$ into $2x + 7y = 58$:
$$ 2x + 7(6) = 58 \\implies 2x + 42 = 58 $$
$$ 2x = 16 \\implies x = 8 $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 33,
    question: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Average pitching speed</th>
      <th class="border border-gray-400 px-2 py-1">Number of pitchers</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">At least 30 mph but less than 35 mph</td><td class="border border-gray-400 px-2 py-1">12</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">At least 35 mph but less than 40 mph</td><td class="border border-gray-400 px-2 py-1">7</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">At least 40 mph but less than 45 mph</td><td class="border border-gray-400 px-2 py-1">4</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">At least 45 mph but less than 50 mph</td><td class="border border-gray-400 px-2 py-1">1</td></tr>
  </tbody>
</table>

The table summarizes the distribution of average pitching speed, in miles per hour mph, for a sample of 24 pitchers in a youth softball league. According to the table, how many pitchers in the sample have an average pitching speed of at least 30 mph but less than 35 mph?`,
    options: ["A) $12$", "B) $7$", "C) $4$", "D) $1$"],
    correctAnswer: 0,
    explanation: `Locate the first row in the table corresponding to "At least 30 mph but less than 35 mph". The value in the "Number of pitchers" column is $12$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 34,
    question: `Which expression is equivalent to $18x^2 + 9x + 9$?`,
    options: [
      "A) $2x^2(9x + 9)$",
      "B) $18x(x + 1)$",
      "C) $9(2x^2 + x + 1)$",
      "D) $36x^2 + x + 1$"
    ],
    correctAnswer: 2,
    explanation: `Factor out the greatest common factor ($9$) from all terms:
$$ 18x^2 + 9x + 9 = 9(2x^2 + x + 1) $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 35,
    question: `A bag contains only yellow marbles and red marbles. The probability of selecting a yellow marble from the bag at random is $\\frac{8}{17}$. What is the probability of selecting a red marble from the bag at random?`,
    options: [],
    correctAnswer: 0,
    answerText: "9/17",
    explanation: `Since the bag contains only yellow and red marbles, the probabilities must sum to $1$:
$$ P(\\text{Red}) = 1 - P(\\text{Yellow}) = 1 - \\frac{8}{17} = \\frac{9}{17} $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 36,
    question: `The price of an item increased by $p\\%$ from $\$90$ to $\$93$. What is the value of $p$?`,
    options: [],
    correctAnswer: 0,
    answerText: "3.33",
    explanation: `The dollar amount of increase is $93 - 90 = 3$.
Set up the percentage equation:
$$ \\frac{p}{100} = \\frac{3}{90} = \\frac{1}{30} \\implies p = \\frac{100}{30} = \\frac{10}{3} \\approx 3.33 $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 37,
    question: `If $6x = 9$, what is the value of $48x$?`,
    options: ["A) $1$", "B) $17$", "C) $62$", "D) $72$"],
    correctAnswer: 3,
    explanation: `Notice that $48x = 8 \\times (6x)$.
Since $6x = 9$:
$$ 48x = 8 \\times 9 = 72 $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 38,
    question: `The number of cells of the bacteria *Bacillus megaterium* doubles every $25$ minutes during its growth period when placed in a medium of sucrose-salts in a controlled laboratory environment. If a sample of $530$ cells of *Bacillus megaterium* is placed in sucrose-salts in a controlled laboratory environment, which function $f$ best represents the number of cells of the bacteria $x$ minutes after the growth period begins, where $x$ is less than the number of minutes in the growth period?`,
    options: [
      "A) $f(x) = 530\\left(\\frac{1}{3}\\right)^{x/25}$",
      "B) $f(x) = 530\\left(\\frac{1}{2}\\right)^{x/25}$",
      "C) $f(x) = 530(2)^{x/25}$",
      "D) $f(x) = 530(3)^{x/25}$"
    ],
    correctAnswer: 2,
    explanation: `Standard exponential growth formula: $f(x) = \\text{Initial} \\times (\\text{Base})^{\\text{time/period}}$.
Initial cells = $530$, growth base = $2$ (doubling), and doubling period = $25$ minutes.
$$ f(x) = 530(2)^{x/25} $$`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 39,
    question: `$$ p(x) = -4x^2 + 9x + 12 $$
When the given function $p$ is graphed in the $xy$-plane, where $y = p(x)$, the $y$-intercept of the graph is $(0, y)$. What is the value of $y$?`,
    options: [],
    correctAnswer: 0,
    answerText: "12",
    explanation: `The $y$-intercept occurs at $x = 0$:
$$ p(0) = -4(0)^2 + 9(0) + 12 = 12 $$
Thus, the $y$-intercept is $(0, 12)$, so $y = 12$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 40,
    question: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">$x$</th>
      <th class="border border-gray-400 px-2 py-1">$h(x)$</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">0</td><td class="border border-gray-400 px-2 py-1">15</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">1</td><td class="border border-gray-400 px-2 py-1">16</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2</td><td class="border border-gray-400 px-2 py-1">18</td></tr>
  </tbody>
</table>

For the function $h$, the table gives three values of $x$ and their corresponding values of $h(x)$. Which equation could define $h$?`,
    options: [
      "A) $h(x) = 2^x + 14$",
      "B) $h(x) = 2^x + 13$",
      "C) $h(x) = 2^x + 2$",
      "D) $h(x) = 2^x$"
    ],
    correctAnswer: 0,
    explanation: `Test points from the table into $h(x) = 2^x + 14$:
- For $x = 0$: $2^0 + 14 = 1 + 14 = 15$ (Matches)
- For $x = 1$: $2^1 + 14 = 2 + 14 = 16$ (Matches)
- For $x = 2$: $2^2 + 14 = 4 + 14 = 18$ (Matches)
Thus, Choice A is correct.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 41,
    question: `For the linear function $f$, the graph of $y = f(x)$ in the $xy$-plane has a slope of $-5$ and passes through the point $(2, -4)$. Which equation defines $f$?`,
    options: [
      "A) $f(x) = 2x + 4$",
      "B) $f(x) = -5x + 4$",
      "C) $f(x) = -5x - 5$",
      "D) $f(x) = -5x + 6$"
    ],
    correctAnswer: 3,
    explanation: `Use point-slope form with $m = -5$ and $(2, -4)$:
$$ y - (-4) = -5(x - 2) \\implies y + 4 = -5x + 10 $$
$$ y = -5x + 6 $$
Thus, $f(x) = -5x + 6$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 42,
    question: `The shaded region represents the solutions to which inequality?

<div class="my-4 flex justify-center">
  <svg width="260" height="220" viewBox="0 0 260 220" class="border border-gray-300 rounded-lg bg-white p-2">
    <defs>
      <pattern id="grid4" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="240" height="180" x="10" y="20" fill="url(#grid4)"/>
    <!-- Axes -->
    <line x1="90" y1="20" x2="90" y2="200" stroke="#374151" stroke-width="2"/>
    <line x1="10" y1="140" x2="250" y2="140" stroke="#374151" stroke-width="2"/>
    <!-- Line y = 3x + 12 passes (-4,0) -> pixel (10, 140) and (0,12) -> pixel (90, 20) -->
    <!-- Shaded area below line -->
    <polygon points="10,140 90,20 250,20 250,200 10,200" fill="rgba(37, 99, 235, 0.2)"/>
    <line x1="10" y1="140" x2="90" y2="20" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5,5"/>
    <text x="95" y="30" font-size="10" fill="#4b5563">12</text>
    <text x="10" y="155" font-size="10" fill="#4b5563">-4</text>
  </svg>
</div>`,
    options: [
      "A) $y < \\frac{1}{3}x + 12$",
      "B) $y < 3x + 12$",
      "C) $y > \\frac{1}{3}x + 12$",
      "D) $y > 3x + 12$"
    ],
    correctAnswer: 1,
    explanation: `The boundary line crosses $(0, 12)$ and $(-4, 0)$.
Slope $m = \\frac{12 - 0}{0 - (-4)} = 3$.
Boundary line: $y = 3x + 12$.
The shaded region lies strictly below the dashed boundary line, giving $y < 3x + 12$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 43,
    question: `In the figure shown, $d, e,$ and $f$ are constants and the value of $k$ is $2$. If the measure of angles $D, E,$ and $F$ are $42^\\circ, x^\\circ,$ and $(2x + 12)^\\circ$, respectively, what is the measure, in degrees, of angle $S$?

<div class="my-4 flex justify-center">
  <svg width="300" height="180" viewBox="0 0 300 180" class="border border-gray-300 rounded-lg bg-white p-2">
    <!-- Triangle DEF -->
    <polygon points="40,150 100,150 80,70" fill="none" stroke="#1f2937" stroke-width="2"/>
    <text x="30" y="165" font-size="12" font-weight="bold">D</text>
    <text x="105" y="165" font-size="12" font-weight="bold">F</text>
    <text x="80" y="60" font-size="12" font-weight="bold">E</text>
    <text x="65" y="162" font-size="10">e</text>
    <text x="50" y="110" font-size="10">f</text>
    <text x="95" y="110" font-size="10">d</text>

    <!-- Triangle QRS (scaled x2) -->
    <polygon points="140,150 260,150 220,20" fill="none" stroke="#1f2937" stroke-width="2"/>
    <text x="130" y="165" font-size="12" font-weight="bold">Q</text>
    <text x="265" y="165" font-size="12" font-weight="bold">S</text>
    <text x="220" y="12" font-size="12" font-weight="bold">R</text>
    <text x="195" y="165" font-size="10">ke</text>
    <text x="170" y="80" font-size="10">kf</text>
    <text x="245" y="80" font-size="10">kd</text>
  </svg>
</div>`,
    options: [],
    correctAnswer: 0,
    answerText: "96",
    explanation: `Triangles $DEF$ and $QRS$ have proportional side lengths ($d, e, f$ vs $kd, ke, kf$), so they are similar triangles and corresponding angles are equal.
First, solve for $x$ using $\\Delta DEF$:
$$ 42 + x + (2x + 12) = 180 $$
$$ 3x + 54 = 180 \\implies 3x = 126 \\implies x = 42 $$
Find $m\\angle F$:
$$ m\\angle F = 2(42) + 12 = 84 + 12 = 96^\\circ $$
Since angle $S$ corresponds to angle $F$ (opposite side $kf$ and $f$), $m\\angle S = 96^\\circ$.`,
    category: "SAT-2026-March-form A"
  },
  {
    id: 44,
    question: `$$ 3x^2 - 13x + 19 = 0 $$
How many distinct real solutions does the given equation have?`,
    options: ["A) Zero", "B) Exactly one", "C) Exactly two", "D) Infinitely many"],
    correctAnswer: 0,
    explanation: `Calculate the discriminant $\\Delta = b^2 - 4ac$ with $a = 3$, $b = -13$, and $c = 19$:
$$ \\Delta = (-13)^2 - 4(3)(19) = 169 - 228 = -59 $$
Since the discriminant is negative ($\Delta < 0$), there are **zero** real solutions.`,
    category: "SAT-2026-March-form A"
  }
];
