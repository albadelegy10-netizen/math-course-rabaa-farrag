import { Question } from '../../types';

export const SAT_2026_MARCH_FORM_D_SET: Question[] = [
  // --- MODULE 1 (Questions 1 - 22) ---
  {
    id: 1,
    question: `The solution to the given system of equations is $(x, y)$. What is the value of $x$?
$$\\begin{aligned} 3x + 8y &= 93 \\\\ y &= 9 \\end{aligned}$$`,
    options: ["A) $7$", "B) $14$", "C) $21$", "D) $28$"],
    correctAnswer: 0,
    explanation: `Substitute $y = 9$ into the first equation:
$$3x + 8(9) = 93 \\implies 3x + 72 = 93 \\implies 3x = 21 \\implies x = 7$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 2,
    question: `Data set X: $13, 15, 17, 20, 23, 24, 25, 37$

Data set Y: $13, 15, 17, 20, 23, 24, 25, 32$

Data set Y is created by replacing the number $37$ in data set X with the number $32$. Which of the following statements is true about the means and medians of data set X and data set Y?`,
    options: [
      "A) The mean of data set X is greater than the mean of data set Y, and the median of data set X equals the median of data set Y.",
      "B) The mean of data set X is greater than the mean of data set Y, and the median of data set X is greater than the median of data set Y.",
      "C) The mean of data set X equals the mean of data set Y, and the median of data set X equals the median of data set Y.",
      "D) The mean of data set X is less than the mean of data set Y, and the median of data set X equals the median of data set Y."
    ],
    correctAnswer: 0,
    explanation: `Both data sets contain 8 values ordered from least to greatest:
- The median of an 8-value set is the average of the 4th and 5th terms: $\\frac{20 + 23}{2} = 21.5$ for both data sets. So the medians are equal.
- Since $37 > 32$, replacing $37$ with $32$ decreases the sum of the elements, making the mean of data set X strictly greater than the mean of data set Y.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 3,
    question: `In the figure shown, $d$, $e$, and $f$ are constants and the value of $k$ is $3$. If the measure of angles $D$, $E$, and $F$ are $30^\\circ$, $x^\\circ$, and $(2x + 6)^\\circ$, respectively, what is the measure, in degrees, of angle $S$?

<div class="my-4 flex justify-center">
  <svg width="340" height="200" viewBox="0 0 340 200" class="border border-gray-300 rounded-lg bg-white p-2">
    <!-- Triangle DEF -->
    <polygon points="40,160 120,160 90,80" fill="none" stroke="#000000" stroke-width="2"/>
    <text x="30" y="175" font-size="15" font-style="italic" font-weight="bold" fill="#000000">D</text>
    <text x="85" y="70" font-size="15" font-style="italic" font-weight="bold" fill="#000000">E</text>
    <text x="125" y="175" font-size="15" font-style="italic" font-weight="bold" fill="#000000">F</text>
    <text x="55" y="125" font-size="13" font-style="italic" fill="#000000">f</text>
    <text x="110" y="125" font-size="13" font-style="italic" fill="#000000">d</text>
    <text x="80" y="175" font-size="13" font-style="italic" fill="#000000">e</text>

    <!-- Triangle QRS (Scaled by k) -->
    <polygon points="160,160 280,160 250,20" fill="none" stroke="#000000" stroke-width="2"/>
    <text x="145" y="175" font-size="15" font-style="italic" font-weight="bold" fill="#000000">Q</text>
    <text x="245" y="15" font-size="15" font-style="italic" font-weight="bold" fill="#000000">R</text>
    <text x="285" y="175" font-size="15" font-style="italic" font-weight="bold" fill="#000000">S</text>
    <text x="190" y="90" font-size="13" font-style="italic" fill="#000000">kf</text>
    <text x="270" y="90" font-size="13" font-style="italic" fill="#000000">kd</text>
    <text x="215" y="175" font-size="13" font-style="italic" fill="#000000">ke</text>
  </svg>
</div>
Note: Figure not drawn to scale.`,
    options: ["A) $48^\\circ$", "B) $102^\\circ$", "C) $120^\\circ$", "D) $150^\\circ$"],
    correctAnswer: 1,
    explanation: `1. Find $x$ using the angle sum theorem for $\\Delta DEF$:
$$30^\\circ + x^\\circ + (2x + 6)^\\circ = 180^\\circ \\implies 3x + 36 = 180 \\implies 3x = 144 \\implies x = 48$$
2. The interior angles of $\\Delta DEF$ are:
   - $\\angle D = 30^\\circ$
   - $\\angle E = 48^\\circ$
   - $\\angle F = 2(48) + 6 = 102^\\circ$
3. In $\\Delta QRS$, the side lengths $QR = kf$, $RS = kd$, $QS = ke$ are proportional to $f, d, e$ in $\\Delta DEF$.
4. By SSS similarity, $\\Delta QRS \\sim \\Delta DEF$. Angle $S$ is opposite side $QR = kf$, which corresponds to angle $F$ opposite side $f$ in $\\Delta DEF$.
5. Therefore, $\\angle S = \\angle F = 102^\\circ$.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 4,
    question: `During a physics experiment, the speed of an object was determined to be $145.0$ inches per second. What is this speed in feet per second? ($12\\text{ inches} = 1\\text{ foot}$)`,
    options: ["A) $12.08$", "B) $14.50$", "C) $120.0$", "D) $1740$"],
    correctAnswer: 0,
    explanation: `To convert inches per second to feet per second, divide by $12$:
$$\\text{Speed} = \\frac{145.0\\text{ inches/sec}}{12\\text{ inches/foot}} = 12.0833\\dots \\approx 12.08\\text{ feet per second}$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 5,
    question: `The graph of $y = g(x) = f(x) + 2$ is shown, where $f$ is defined by an equation of the form $f(x) = a b^x + c$. If $a, b,$ and $c$ are integer constants and $c \\le 0$, which equation could define $f$?

<div class="my-4 flex justify-center">
  <svg width="350" height="390" viewBox="0 0 360 396" class="bg-white border border-gray-200 rounded-lg p-2 max-w-full">
    <!-- Grid Lines -->
    <!-- Vertical Grid Lines (x = -6 to 6) -->
    <path d="
      M 36,36 V 372 M 60,36 V 372 M 84,36 V 372 M 108,36 V 372 M 132,36 V 372 M 156,36 V 372
      M 180,36 V 372 M 204,36 V 372 M 228,36 V 372 M 252,36 V 372 M 276,36 V 372 M 300,36 V 372 M 324,36 V 372
    " stroke="#888888" stroke-width="0.8"/>
    <!-- Horizontal Grid Lines (y = 4 down to -10) -->
    <path d="
      M 36,36 H 324 M 36,60 H 324 M 36,84 H 324 M 36,108 H 324 M 36,132 H 324
      M 36,156 H 324 M 36,180 H 324 M 36,204 H 324 M 36,228 H 324 M 36,252 H 324
      M 36,276 H 324 M 36,300 H 324 M 36,324 H 324 M 36,348 H 324 M 36,372 H 324
    " stroke="#888888" stroke-width="0.8"/>

    <!-- Ticks on x-axis -->
    <path d="
      M 36,128 V 136 M 60,128 V 136 M 84,128 V 136 M 108,128 V 136 M 132,128 V 136 M 156,128 V 136
      M 204,128 V 136 M 228,128 V 136 M 252,128 V 136 M 276,128 V 136 M 300,128 V 136 M 324,128 V 136
    " stroke="#000000" stroke-width="1.2"/>

    <!-- Ticks on y-axis -->
    <path d="
      M 176,36 H 184 M 176,60 H 184 M 176,84 H 184 M 176,108 H 184
      M 176,156 H 184 M 176,180 H 184 M 176,204 H 184 M 176,228 H 184
      M 176,252 H 184 M 176,276 H 184 M 176,300 H 184 M 176,324 H 184 M 176,348 H 184 M 176,372 H 184
    " stroke="#000000" stroke-width="1.2"/>

    <!-- Main Axes -->
    <line x1="24" y1="132" x2="336" y2="132" stroke="#000000" stroke-width="1.8"/>
    <polygon points="336,132 327,128 327,136" fill="#000000"/>

    <line x1="180" y1="380" x2="180" y2="24" stroke="#000000" stroke-width="1.8"/>
    <polygon points="180,24 176,33 184,33" fill="#000000"/>

    <!-- Axis Labels -->
    <text x="345" y="136" font-size="14" font-family="serif" font-style="italic" fill="#000000">x</text>
    <text x="180" y="16" font-size="14" font-family="serif" font-style="italic" text-anchor="middle" fill="#000000">y</text>
    <text x="168" y="125" font-size="13" font-family="serif" font-style="italic" fill="#000000">O</text>

    <!-- x-axis Numeric Labels -->
    <text x="36" y="147" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">-6</text>
    <text x="60" y="147" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">-5</text>
    <text x="84" y="147" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">-4</text>
    <text x="108" y="147" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">-3</text>
    <text x="132" y="147" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">-2</text>
    <text x="156" y="147" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">-1</text>
    <text x="204" y="147" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">1</text>
    <text x="228" y="147" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">2</text>
    <text x="252" y="147" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">3</text>
    <text x="276" y="147" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">4</text>
    <text x="300" y="147" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">5</text>
    <text x="324" y="147" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">6</text>

    <!-- y-axis Numeric Labels -->
    <text x="172" y="36" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">4</text>
    <text x="172" y="84" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">2</text>
    <text x="172" y="180" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">-2</text>
    <text x="172" y="228" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">-4</text>
    <text x="172" y="276" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">-6</text>
    <text x="172" y="324" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">-8</text>
    <text x="172" y="372" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">-10</text>

    <!-- Function Curve y = g(x) = -6(2)^x + 2 -->
    <path d="
      M 36,86.25
      L 40.8,86.71 L 45.6,87.23 L 50.4,87.83 L 55.2,88.51
      L 60,88.5 L 64.8,89.28 L 69.6,90.17 L 74.4,91.19 L 79.2,92.36
      L 84,93.0 L 88.8,94.81 L 93.6,96.88 L 98.4,99.27 L 103.2,102.01
      L 108,102.0 L 112.8,105.14 L 117.6,108.75 L 122.4,112.9 L 127.2,117.66
      L 132,120.0 L 136.8,124.21 L 141.6,129.09 L 146.4,134.55 L 151.2,140.67
      L 156,156.0 L 160.8,166.45 L 165.6,178.46 L 170.4,192.25 L 175.2,208.1
      L 180,228.0 L 184.8,250.86 L 189.6,277.12 L 194.4,307.28 L 199.2,341.93
      L 204,372.0 L 205.2,382
    " fill="none" stroke="#000000" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div>`,
    options: [
      "A) $f(x) = -6(2)^x$",
      "B) $f(x) = -6(2)^x - 2$",
      "C) $f(x) = -6(2)^x - 4$",
      "D) $f(x) = -6(2)^x - 6$"
    ],
    correctAnswer: 0,
    explanation: `1. The graphed function $g(x)$ has a horizontal asymptote at $y = 2$, passes through $(0, -4)$ and $(1, -10)$.
2. Therefore, $g(x) = -6(2)^x + 2$.
3. Since $g(x) = f(x) + 2$, we subtract $2$ to isolate $f(x)$:
   $$f(x) = g(x) - 2 = \\left(-6(2)^x + 2\\right) - 2 = -6(2)^x$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 6,
    question: `What is $5\\%$ of $580$?`,
    options: ["A) $575$", "B) $290$", "C) $116$", "D) $29$"],
    correctAnswer: 3,
    explanation: `$$5\\% \\times 580 = 0.05 \\times 580 = 29$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 7,
    question: `The function $f$ is defined by $f(x) = 6(4)^x$. What is the value of $f(x)$ when $x = 3$?`,
    options: ["A) $64$", "B) $81$", "C) $258$", "D) $384$"],
    correctAnswer: 3,
    explanation: `Substitute $x = 3$ into $f(x)$:
$$f(3) = 6(4)^3 = 6(64) = 384$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 8,
    question: `If $4(x-9) = 7(x-9) + 8$, what is the value of $x-9$?`,
    options: ["A) $-\\frac{8}{3}$", "B) $\\frac{3}{8}$", "C) $\\frac{4}{7}$", "D) $\\frac{8}{11}$"],
    correctAnswer: 0,
    explanation: `Let $u = x - 9$. Substitute $u$ into the equation:
$$4u = 7u + 8 \\implies -3u = 8 \\implies u = -\\frac{8}{3}$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 9,
    question: `The product of a positive number $x$ and the number that is $5$ less than $x$ is equal to $104$. What is the value of $x$?`,
    options: ["A) $2.5$", "B) $13$", "C) $99$", "D) $109$"],
    correctAnswer: 1,
    explanation: `Set up the quadratic equation:
$$x(x - 5) = 104 \\implies x^2 - 5x - 104 = 0$$
Factor the quadratic:
$$(x - 13)(x + 8) = 0 \\implies x = 13 \\text{ or } x = -8$$
Since $x$ must be a positive number, $x = 13$.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 10,
    question: `What is an equation of the graph shown?

<div class="my-4 flex justify-center">
  <svg width="380" height="390" viewBox="0 0 390 390" class="bg-white border border-gray-200 rounded-lg p-2 max-w-full">
    <!-- Grid Lines -->
    <!-- Vertical Grid Lines (x = -8 to 8) -->
    <path d="
      M 40,30 V 350 M 60,30 V 350 M 80,30 V 350 M 100,30 V 350 M 120,30 V 350 M 140,30 V 350 M 160,30 V 350 M 180,30 V 350
      M 200,30 V 350 M 220,30 V 350 M 240,30 V 350 M 260,30 V 350 M 280,30 V 350 M 300,30 V 350 M 320,30 V 350 M 340,30 V 350 M 360,30 V 350
    " stroke="#888888" stroke-width="0.8"/>
    <!-- Horizontal Grid Lines (y = 16 down to 0) -->
    <path d="
      M 40,30 H 360 M 40,50 H 360 M 40,70 H 360 M 40,90 H 360 M 40,110 H 360
      M 40,130 H 360 M 40,150 H 360 M 40,170 H 360 M 40,190 H 360 M 40,210 H 360
      M 40,230 H 360 M 40,250 H 360 M 40,270 H 360 M 40,290 H 360 M 40,310 H 360 M 40,330 H 360 M 40,350 H 360
    " stroke="#888888" stroke-width="0.8"/>

    <!-- Ticks on x-axis -->
    <path d="
      M 40,346 V 354 M 60,346 V 354 M 80,346 V 354 M 100,346 V 354 M 120,346 V 354 M 140,346 V 354 M 160,346 V 354 M 180,346 V 354
      M 220,346 V 354 M 240,346 V 354 M 260,346 V 354 M 280,346 V 354 M 300,346 V 354 M 320,346 V 354 M 340,346 V 354 M 360,346 V 354
    " stroke="#000000" stroke-width="1.2"/>

    <!-- Ticks on y-axis -->
    <path d="
      M 196,30 H 204 M 196,50 H 204 M 196,70 H 204 M 196,90 H 204 M 196,110 H 204
      M 196,130 H 204 M 196,150 H 204 M 196,170 H 204 M 196,190 H 204 M 196,210 H 204
      M 196,230 H 204 M 196,250 H 204 M 196,270 H 204 M 196,290 H 204 M 196,310 H 204 M 196,330 H 204
    " stroke="#000000" stroke-width="1.2"/>

    <!-- Main Axes -->
    <line x1="25" y1="350" x2="375" y2="350" stroke="#000000" stroke-width="1.8"/>
    <polygon points="375,350 366,346 366,354" fill="#000000"/>

    <line x1="200" y1="365" x2="200" y2="15" stroke="#000000" stroke-width="1.8"/>
    <polygon points="200,15 196,24 204,24" fill="#000000"/>

    <!-- Axis Labels -->
    <text x="383" y="354" font-size="14" font-family="serif" font-style="italic" fill="#000000">x</text>
    <text x="200" y="10" font-size="14" font-family="serif" font-style="italic" text-anchor="middle" fill="#000000">y</text>
    <text x="188" y="364" font-size="13" font-family="serif" font-style="italic" fill="#000000">O</text>

    <!-- x-axis Numeric Labels -->
    <text x="40" y="365" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">-8</text>
    <text x="80" y="365" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">-6</text>
    <text x="120" y="365" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">-4</text>
    <text x="160" y="365" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">-2</text>
    <text x="240" y="365" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">2</text>
    <text x="280" y="365" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">4</text>
    <text x="320" y="365" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">6</text>
    <text x="360" y="365" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">8.</text>

    <!-- y-axis Numeric Labels -->
    <text x="192" y="310" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">2</text>
    <text x="192" y="270" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">4</text>
    <text x="192" y="230" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">6</text>
    <text x="192" y="190" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">8</text>
    <text x="192" y="150" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">10</text>
    <text x="192" y="110" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">12</text>
    <text x="192" y="70" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">14</text>

    <!-- Function Curve y = 3^x + 10 -->
    <path d="
      M 40,150
      L 60,150 L 80,149.8 L 100,149.6 L 120,149 L 140,147 L 160,143.3
      L 170,140 L 180,135.5 L 190,133 L 200,130
      L 210,121.5 L 220,110 L 225,101 L 230,90
      L 235,76 L 240,58 L 243,40
    " fill="none" stroke="#000000" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div>`,
    options: [
      "A) $y = 3^{-x} + 11$",
      "B) $y = 3^x + 11$",
      "C) $y = 3^{-x} + 10$",
      "D) $y = 3^x + 10$"
    ],
    correctAnswer: 3,
    explanation: `1. The horizontal asymptote of the exponential curve is $y = 10$, narrowing the options to $y = 3^{\\pm x} + 10$.
2. The $y$-intercept is at $(0, 11)$. Testing $x = 0$: $y = 3^0 + 10 = 1 + 10 = 11$.
3. At $x = 1$, $y = 3^1 + 10 = 13$. This confirms the equation is $y = 3^x + 10$.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 11,
    question: `The number $b$ is $15$ more than half of the number $a$. Which equation represents the relationship between $a$ and $b$?`,
    options: [
      "A) $b = 30a$",
      "B) $b = 15a + 2$",
      "C) $b = \\frac{a}{15} + 2$",
      "D) $b = \\frac{a}{2} + 15$"
    ],
    correctAnswer: 3,
    explanation: `"Half of the number $a$" is represented by $\\frac{a}{2}$. Adding $15$ to this gives $b = \\frac{a}{2} + 15$.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 12,
    question: `To earn a bachelor's degree at a certain university, students are required to complete at least $120$ credit hours. If a student has completed $42$ credit hours, what is the minimum number of additional credit hours the student is required to complete to earn a bachelor's degree at this university?`,
    options: ["A) $162$", "B) $120$", "C) $78$", "D) $20$"],
    correctAnswer: 2,
    explanation: `$$\\text{Minimum additional credit hours} = 120 - 42 = 78$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 13,
    question: `During an experiment, a particle's speed was $48$ feet per second. What is this speed in feet per minute?`,
    options: ["A) $78$", "B) $108$", "C) $1440$", "D) $2880$"],
    correctAnswer: 3,
    explanation: `Since there are $60$ seconds in $1$ minute:
$$\\text{Speed} = 48\\text{ feet/sec} \\times 60\\text{ sec/min} = 2,880\\text{ feet per minute}$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 14,
    question: `In the right triangle shown, what is the value of $\\cos A$?

<div class="my-4 flex justify-center">
  <svg width="300" height="200" viewBox="0 0 300 200" class="border border-gray-300 rounded-lg bg-white p-2">
    <polygon points="120,30 220,160 120,160" fill="none" stroke="#000000" stroke-width="2"/>
    <polyline points="120,148 132,148 132,160" fill="none" stroke="#000000" stroke-width="1.5"/>
    <text x="115" y="22" font-size="16" font-style="italic" font-weight="bold" fill="#000000">A</text>
    <text x="225" y="170" font-size="16" font-style="italic" font-weight="bold" fill="#000000">B</text>
    <text x="105" y="170" font-size="16" font-style="italic" font-weight="bold" fill="#000000">C</text>
    <text x="175" y="90" font-size="14" font-weight="bold" fill="#000000">43</text>
    <text x="95" y="100" font-size="14" font-weight="bold" fill="#000000">22</text>
  </svg>
</div>
Note: Figure not drawn to scale.`,
    options: ["A) $\\frac{1}{43}$", "B) $\\frac{1}{22}$", "C) $\\frac{22}{43}$", "D) $\\frac{43}{22}$"],
    correctAnswer: 2,
    explanation: `By definition of cosine in a right triangle:
$$\\cos A = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{22}{43}$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 15,
    question: `The given equation relates the resistance $R$, in ohms, of a wire to its length $l$, in meters, and its cross-sectional area $A$, in square meters:
$$R = \\frac{0.43 l}{A}$$
Which equation correctly expresses the length, $l$, in meters, of the wire in terms of its resistance, in ohms, and its cross-sectional area, in square meters?`,
    options: [
      "A) $l = \\frac{R \\cdot A}{0.43}$",
      "B) $l = \\frac{R + A}{0.43}$",
      "C) $l = \\frac{0.43 R}{A}$",
      "D) $l = \\frac{A}{0.43 R}$"
    ],
    correctAnswer: 0,
    explanation: `1. Multiply both sides by $A$: $R \\cdot A = 0.43 l$
2. Divide both sides by $0.43$:
$$l = \\frac{R \\cdot A}{0.43}$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 16,
    question: `The product of a positive number $x$ and the number that is $7$ less than $x$ is equal to $44$. What is the value of $x$?`,
    options: ["A) $3.5$", "B) $11$", "C) $37$", "D) $51$"],
    correctAnswer: 1,
    explanation: `Set up and solve the quadratic equation:
$$x(x - 7) = 44 \\implies x^2 - 7x - 44 = 0$$
$$(x - 11)(x + 4) = 0 \\implies x = 11 \\text{ or } x = -4$$
Since $x$ is positive, $x = 11$.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 17,
    question: `The figure shown is a right rectangular pyramid, where $l = 16$ units, $w = 8$ units, and $h = 18$ units. What is the surface area, in square units, of the pyramid?

<div class="my-4 flex justify-center">
  <svg width="320" height="240" viewBox="0 0 320 240" class="border border-gray-300 rounded-lg bg-white p-2">
    <!-- Rectangular Base -->
    <polygon points="60,180 200,220 260,160 120,120" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,4"/>
    <polygon points="60,180 200,220 260,160" fill="none" stroke="#000000" stroke-width="2"/>
    <!-- Apex -->
    <line x1="60" y1="180" x2="180" y2="30" stroke="#000000" stroke-width="2"/>
    <line x1="200" y1="220" x2="180" y2="30" stroke="#000000" stroke-width="2"/>
    <line x1="260" y1="160" x2="180" y2="30" stroke="#000000" stroke-width="2"/>
    <line x1="120" y1="120" x2="180" y2="30" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,4"/>
    <!-- Height h -->
    <line x1="160" y1="170" x2="180" y2="30" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,4"/>
    <text x="175" y="105" font-size="14" font-style="italic" font-weight="bold" fill="#000000">h</text>
    <text x="120" y="210" font-size="14" font-style="italic" font-weight="bold" fill="#000000">l</text>
    <text x="235" y="200" font-size="14" font-style="italic" font-weight="bold" fill="#000000">w</text>
  </svg>
</div>
Note: Figure not drawn to scale.`,
    options: ["A) $480.0$", "B) $580.6$", "C) $620.4$", "D) $712.8$"],
    correctAnswer: 1,
    explanation: `1. **Base Area**:
$$A_{\\text{base}} = l \\times w = 16 \\times 8 = 128$$

2. **Slant Heights of Triangular Faces**:
   - For faces along length $l = 16$:
     $$h_1 = \\sqrt{h^2 + \\left(\\frac{w}{2}\\right)^2} = \\sqrt{18^2 + 4^2} = \\sqrt{324 + 16} = \\sqrt{340} = 2\\sqrt{85}$$
   - For faces along width $w = 8$:
     $$h_2 = \\sqrt{h^2 + \\left(\\frac{l}{2}\\right)^2} = \\sqrt{18^2 + 8^2} = \\sqrt{324 + 64} = \\sqrt{388} = 2\\sqrt{97}$$

3. **Triangular Face Areas**:
   - Area of 2 length faces: $2 \\times \\left(\\frac{1}{2} \\times 16 \\times 2\\sqrt{85}\\right) = 32\\sqrt{85} \\approx 295.025$
   - Area of 2 width faces: $2 \\times \\left(\\frac{1}{2} \\times 8 \\times 2\\sqrt{97}\\right) = 16\\sqrt{97} \\approx 157.582$

4. **Total Surface Area**:
$$\\text{SA} = 128 + 32\\sqrt{85} + 16\\sqrt{97} \\approx 128 + 295.025 + 157.582 = 580.607 \\approx 580.6$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 18,
    question: `On January 1, 2000, the population of a town was $26,255$ and on January 1, 2010, the population was $27,056$. The equation $10x + 26,255 = 27,056$ describes this situation. Which of the following is the best interpretation of $x$ in this context?`,
    options: [
      "A) The total increase in population between 2000 and 2010",
      "B) The projected population of the town 10 years after 2010",
      "C) The average increase per year of the population between 2000 and 2010",
      "D) The percentage by which the population of the town increased each year between 2000 and 2010"
    ],
    correctAnswer: 2,
    explanation: `In the equation $10x + 26,255 = 27,056$:
- $26,255$ is the starting population in year 2000.
- $27,056$ is the population 10 years later in year 2010.
- $10$ represents the 10-year period.
Therefore, $x$ represents the average annual increase in population per year between 2000 and 2010.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 19,
    question: `The table shows the linear relationship between the number of cars, $c$, on a commuter train and the maximum number of passengers and crew, $p$, that the train can carry. Which equation represents the linear relationship between $c$ and $p$?

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Number of cars</th>
      <th class="border border-gray-400 px-2 py-1">Maximum number of passengers and crew</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">2</td><td class="border border-gray-400 px-2 py-1">81</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">5</td><td class="border border-gray-400 px-2 py-1">189</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">10</td><td class="border border-gray-400 px-2 py-1">369</td></tr>
  </tbody>
</table>`,
    options: [
      "A) $36c - p = -9$",
      "B) $36c - p = 9$",
      "C) $36p - c = -9$",
      "D) $36p - c = 9$"
    ],
    correctAnswer: 0,
    explanation: `1. Calculate slope $m$:
$$m = \\frac{189 - 81}{5 - 2} = \\frac{108}{3} = 36$$
2. Find $y$-intercept $b$ in $p = 36c + b$:
$$81 = 36(2) + b \\implies 81 = 72 + b \\implies b = 9$$
3. Rearrange $p = 36c + 9$ into standard form:
$$36c - p = -9$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 20,
    question: `A geologist is analyzing a sample of a coarse-grained igneous rock. The equation $3.00x + 4.00y = 92.0$ gives the relationship between the estimated volumes of mineral X and mineral Y found in the sample, where $x$ is the estimated volume, in cubic centimeters ($\\text{cm}^3$), of mineral X and $y$ is the estimated volume, in $\\text{cm}^3$, of mineral Y. If the estimated volume of mineral Y in the sample is $12.2\\text{ cm}^3$, what is the estimated volume, in $\\text{cm}^3$, of mineral X in the sample?`,
    options: ["A) $14.4$", "B) $23.0$", "C) $43.2$", "D) $48.8$"],
    correctAnswer: 0,
    explanation: `Substitute $y = 12.2$ into $3.00x + 4.00y = 92.0$:
$$3.00x + 4.00(12.2) = 92.0 \\implies 3.00x + 48.8 = 92.0 \\implies 3.00x = 43.2 \\implies x = 14.4$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 21,
    question: `For the linear function $f$, the graph of $y = f(x)$ in the $xy$-plane has a slope of $-4$ and passes through the point $(3, -5)$. Which equation defines $f$?`,
    options: [
      "A) $f(x) = 3x - 5$",
      "B) $f(x) = -4x - 5$",
      "C) $f(x) = -4x - 4$",
      "D) $f(x) = -4x + 7$"
    ],
    correctAnswer: 3,
    explanation: `Use point-slope form $y - y_1 = m(x - x_1)$:
$$y - (-5) = -4(x - 3) \\implies y + 5 = -4x + 12 \\implies f(x) = -4x + 7$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 22,
    question: `A circle in the $xy$-plane has its center at $(-5, 5)$. Line $t$ is tangent to this circle at the point $(6, -1)$. Which of the following points also lies on line $t$?`,
    options: [
      "A) $(0, \\frac{11}{6})$",
      "B) $(1, 16)$",
      "C) $(12, 10)$",
      "D) $(17, 5)$"
    ],
    correctAnswer: 2,
    explanation: `1. **Slope of Radius**:
$$m_{\\text{radius}} = \\frac{-1 - 5}{6 - (-5)} = -\\frac{6}{11}$$
2. **Slope of Tangent Line $t$**: Tangent is perpendicular to the radius, so $m_t = \\frac{11}{6}$.
3. **Equation of Line $t$**:
$$y - (-1) = \\frac{11}{6}(x - 6) \\implies y + 1 = \\frac{11}{6}x - 11 \\implies y = \\frac{11}{6}x - 12$$
4. **Test Choice C $(12, 10)$**:
$$y = \\frac{11}{6}(12) - 12 = 22 - 12 = 10 \\quad \\text{(True)}$$`,
    category: "SAT-2026-March-form D"
  },

  // --- MODULE 2 (Questions 23 - 44) ---
  {
    id: 23,
    question: `The scatterplot shows the relationship between two variables, $x$ and $y$. A line of best fit is also shown. Which of the following equations best represents the line of best fit shown?

<div class="my-4 flex justify-center">
  <svg width="380" height="380" viewBox="0 0 380 380" class="bg-white border border-gray-200 rounded-lg p-2 max-w-full">
    <!-- Grid Lines -->
    <!-- Vertical Grid Lines (x = 1 to 14) -->
    <path d="
      M 62,40 V 340 M 84,40 V 340 M 106,40 V 340 M 128,40 V 340 M 150,40 V 340 M 172,40 V 340
      M 194,40 V 340 M 216,40 V 340 M 238,40 V 340 M 260,40 V 340 M 282,40 V 340 M 304,40 V 340 M 326,40 V 340 M 348,40 V 340
    " stroke="#888888" stroke-width="0.8"/>
    <!-- Horizontal Grid Lines (y = 1 to 15) -->
    <path d="
      M 40,320 H 348 M 40,300 H 348 M 40,280 H 348 M 40,260 H 348 M 40,240 H 348
      M 40,220 H 348 M 40,200 H 348 M 40,180 H 348 M 40,160 H 348 M 40,140 H 348
      M 40,120 H 348 M 40,100 H 348 M 40,80 H 348 M 40,60 H 348 M 40,40 H 348
    " stroke="#888888" stroke-width="0.8"/>

    <!-- Ticks on x-axis -->
    <path d="
      M 62,336 V 344 M 84,336 V 344 M 106,336 V 344 M 128,336 V 344 M 150,336 V 344 M 172,336 V 344
      M 194,336 V 344 M 216,336 V 344 M 238,336 V 344 M 260,336 V 344 M 282,336 V 344 M 304,336 V 344 M 326,336 V 344 M 348,336 V 344
    " stroke="#000000" stroke-width="1.2"/>

    <!-- Ticks on y-axis -->
    <path d="
      M 36,320 H 44 M 36,300 H 44 M 36,280 H 44 M 36,260 H 44 M 36,240 H 44
      M 36,220 H 44 M 36,200 H 44 M 36,180 H 44 M 36,160 H 44 M 36,140 H 44
      M 36,120 H 44 M 36,100 H 44 M 36,80 H 44 M 36,60 H 44 M 36,40 H 44
    " stroke="#000000" stroke-width="1.2"/>

    <!-- Main Axes -->
    <line x1="25" y1="340" x2="362" y2="340" stroke="#000000" stroke-width="1.8"/>
    <polygon points="362,340 353,336 353,344" fill="#000000"/>

    <line x1="40" y1="355" x2="40" y2="20" stroke="#000000" stroke-width="1.8"/>
    <polygon points="40,20 36,29 44,29" fill="#000000"/>

    <!-- Axis Labels -->
    <text x="368" y="344" font-size="14" font-family="serif" font-style="italic" fill="#000000">x</text>
    <text x="40" y="14" font-size="14" font-family="serif" font-style="italic" text-anchor="middle" fill="#000000">y</text>
    <text x="28" y="352" font-size="13" font-family="serif" font-style="italic" fill="#000000">O</text>

    <!-- x-axis Numeric Labels -->
    <text x="84" y="356" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">2</text>
    <text x="128" y="356" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">4</text>
    <text x="172" y="356" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">6</text>
    <text x="216" y="356" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">8</text>
    <text x="260" y="356" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">10</text>
    <text x="304" y="356" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">12</text>
    <text x="348" y="356" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">14</text>

    <!-- y-axis Numeric Labels -->
    <text x="32" y="300" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">2</text>
    <text x="32" y="260" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">4</text>
    <text x="32" y="220" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">6</text>
    <text x="32" y="180" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">8</text>
    <text x="32" y="140" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">10</text>
    <text x="32" y="100" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">12</text>
    <text x="32" y="60" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">14</text>

    <!-- Line of Best Fit y = 9.5 - 0.4x -->
    <line x1="40" y1="150" x2="359" y2="266" stroke="#000000" stroke-width="2"/>

    <!-- Data Points -->
    <circle cx="66" cy="140" r="4" fill="#000000"/>
    <circle cx="66" cy="180" r="4" fill="#000000"/>
    <circle cx="115" cy="180" r="4" fill="#000000"/>
    <circle cx="128" cy="200" r="4" fill="#000000"/>
    <circle cx="176" cy="120" r="4" fill="#000000"/>
    <circle cx="176" cy="200" r="4" fill="#000000"/>
    <circle cx="194" cy="260" r="4" fill="#000000"/>
    <circle cx="234" cy="240" r="4" fill="#000000"/>
    <circle cx="293" cy="200" r="4" fill="#000000"/>
    <circle cx="322" cy="280" r="4" fill="#000000"/>
  </svg>
</div>`,
    options: [
      "A) $y = 9.5 + 0.4x$",
      "B) $y = 9.5 - 0.4x$",
      "C) $y = -9.5 + 0.4x$",
      "D) $y = -9.5 - 0.4x$"
    ],
    correctAnswer: 1,
    explanation: `1. The line intersects the vertical $y$-axis at approximately $+9.5$.
2. The line slopes downwards from left to right, indicating a negative slope $m \\approx -0.4$.
3. The linear equation matching these parameters is $y = 9.5 - 0.4x$.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 24,
    question: `The graph of the polynomial function $f$ in the $xy$-plane, where $y = f(x)$, passes through the point $(9, 8)$. Which of the following must be true?`,
    options: [
      "A) $f(0) = 8$",
      "B) $f(8) = 9$",
      "C) $f(9) = 0$",
      "D) $f(9) = 8$"
    ],
    correctAnswer: 3,
    explanation: `In function notation, a point $(x, y) = (9, 8)$ lying on $y = f(x)$ means that evaluating the function at $x = 9$ yields an output of $y = 8$. Thus, $f(9) = 8$.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 25,
    question: `For the exponential function $g$, the value of $g(x)$ doubles for every increase of $2$ in the value of $x$. If $g(4) = 9$, what is the value of $g(6)$?`,
    options: ["A) $11$", "B) $13$", "C) $18$", "D) $36$"],
    correctAnswer: 2,
    explanation: `An increase in $x$ from $4$ to $6$ is an increase of $2$. Since $g(x)$ doubles for every increase of $2$ in $x$:
$$g(6) = 2 \\times g(4) = 2 \\times 9 = 18$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 26,
    question: `Sunspots are temporary dark spots on the surface of the sun. The monthly mean number of sunspots for one calendar month is the average of the number of sunspots observed each day during the month. The linear function $s$ models the monthly mean number of sunspots as a function of the number of months, $x$, since December 2013, where $0 \\le x \\le 30$. The graph of $y = s(x)$ is shown. Which of the following is the best estimate for the monthly mean number of sunspots in December 2014?

<div class="my-4 flex justify-center">
  <svg width="420" height="340" viewBox="0 0 420 340" class="bg-white border border-gray-200 rounded-lg p-2 max-w-full">
    <!-- Grid Lines -->
    <!-- Vertical Grid Lines (x = 5, 10, 15, 20, 25, 30) -->
    <path d="
      M 170,30 V 270 M 210,30 V 270 M 250,30 V 270 M 290,30 V 270 M 330,30 V 270 M 370,30 V 270
    " stroke="#888888" stroke-width="0.8"/>
    <!-- Horizontal Grid Lines (y = 10, 20, ..., 120) -->
    <path d="
      M 130,250 H 370 M 130,230 H 370 M 130,210 H 370 M 130,190 H 370 M 130,170 H 370
      M 130,150 H 370 M 130,130 H 370 M 130,110 H 370 M 130,90 H 370 M 130,70 H 370
      M 130,50 H 370 M 130,30 H 370
    " stroke="#888888" stroke-width="0.8"/>

    <!-- Ticks on x-axis -->
    <path d="
      M 170,266 V 274 M 210,266 V 274 M 250,266 V 274 M 290,266 V 274 M 330,266 V 274 M 370,266 V 274
    " stroke="#000000" stroke-width="1.2"/>

    <!-- Ticks on y-axis -->
    <path d="
      M 126,250 H 134 M 126,230 H 134 M 126,210 H 134 M 126,190 H 134 M 126,170 H 134
      M 126,150 H 134 M 126,130 H 134 M 126,110 H 134 M 126,90 H 134 M 126,70 H 134
      M 126,50 H 134 M 126,30 H 134
    " stroke="#000000" stroke-width="1.2"/>

    <!-- Main Axes -->
    <line x1="115" y1="270" x2="385" y2="270" stroke="#000000" stroke-width="1.8"/>
    <polygon points="385,270 376,266 376,274" fill="#000000"/>

    <line x1="130" y1="285" x2="130" y2="18" stroke="#000000" stroke-width="1.8"/>
    <polygon points="130,18 126,27 134,27" fill="#000000"/>

    <!-- Axis Variable Symbols -->
    <text x="392" y="274" font-size="14" font-family="serif" font-style="italic" fill="#000000">x</text>
    <text x="130" y="10" font-size="14" font-family="serif" font-style="italic" text-anchor="middle" fill="#000000">y</text>
    <text x="118" y="282" font-size="13" font-family="serif" font-style="italic" fill="#000000">O</text>

    <!-- x-axis Numeric Labels -->
    <text x="170" y="286" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">5</text>
    <text x="210" y="286" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">10</text>
    <text x="250" y="286" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">15</text>
    <text x="290" y="286" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">20</text>
    <text x="330" y="286" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">25</text>
    <text x="370" y="286" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">30</text>

    <!-- y-axis Numeric Labels -->
    <text x="122" y="230" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">20</text>
    <text x="122" y="190" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">40</text>
    <text x="122" y="150" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">60</text>
    <text x="122" y="110" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">80</text>
    <text x="122" y="70" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">100</text>
    <text x="122" y="30" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">120</text>

    <!-- Axis Title Labels -->
    <text x="65" y="110" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#000000">Monthly</text>
    <text x="65" y="128" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#000000">mean</text>
    <text x="65" y="146" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#000000">number</text>
    <text x="65" y="164" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#000000">of</text>
    <text x="65" y="182" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#000000">sunspots</text>

    <text x="250" y="315" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#000000">Months since December 2013</text>

    <!-- Model Line s(x) from (0, 120) to (30, 49) -->
    <line x1="130" y1="30" x2="370" y2="172" stroke="#000000" stroke-width="2.2" stroke-linecap="round"/>
  </svg>
</div>`,
    options: ["A) $61$", "B) $71$", "C) $81$", "D) $91$"],
    correctAnswer: 3,
    explanation: `1. December 2014 corresponds to $x = 12$ months after December 2013 ($x = 0$).
2. The linear graph passes through $(0, 120)$ and $(30, 50)$.
3. Slope $m = \\frac{50 - 120}{30 - 0} = -\\frac{70}{30} \\approx -2.33$.
4. Calculate $s(12)$:
   $$s(12) \\approx -2.33(12) + 120 = -28 + 120 = 92$$
5. The closest estimate among the options is $91$.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 27,
    question: `What is the $x$-intercept of a line in the $xy$-plane that has a slope of $-\\frac{4}{7}$ and passes through the point $(0, 12)$?`,
    options: ["A) $(-21, 0)$", "B) $(-4, 0)$", "C) $(7, 0)$", "D) $(21, 0)$"],
    correctAnswer: 3,
    explanation: `1. The line has $y$-intercept $(0, 12)$, so its equation is $y = -\\frac{4}{7}x + 12$.
2. To find the $x$-intercept, set $y = 0$:
$$0 = -\\frac{4}{7}x + 12 \\implies \\frac{4}{7}x = 12 \\implies x = 12 \\times \\frac{7}{4} = 21$$
3. Therefore, the $x$-intercept is $(21, 0)$.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 28,
    question: `The shaded region shown represents the solutions to which inequality?

<div class="my-4 flex justify-center">
  <svg width="380" height="410" viewBox="0 0 380 410" class="bg-white border border-gray-200 rounded-lg p-2 max-w-full">
    <!-- Grid Lines -->
    <!-- Vertical Grid Lines (x = -4 to 8) -->
    <path d="
      M 50,30 V 382 M 74,30 V 382 M 98,30 V 382 M 122,30 V 382 M 146,30 V 382 M 170,30 V 382
      M 194,30 V 382 M 218,30 V 382 M 242,30 V 382 M 266,30 V 382 M 290,30 V 382 M 314,30 V 382 M 338,30 V 382
    " stroke="#888888" stroke-width="0.8"/>
    <!-- Horizontal Grid Lines (y = -1 to 15) -->
    <path d="
      M 50,30 H 338 M 50,52 H 338 M 50,74 H 338 M 50,96 H 338 M 50,118 H 338
      M 50,140 H 338 M 50,162 H 338 M 50,184 H 338 M 50,206 H 338 M 50,228 H 338
      M 50,250 H 338 M 50,272 H 338 M 50,294 H 338 M 50,316 H 338 M 50,338 H 338
      M 50,360 H 338 M 50,382 H 338
    " stroke="#888888" stroke-width="0.8"/>

    <!-- Shaded Inequality Region y < 4x + 1 -->
    <polygon points="230,30 338,30 338,382 134,382" fill="#aaaaaa" fill-opacity="0.6"/>

    <!-- Dashed Boundary Line y = 4x + 1 -->
    <line x1="134" y1="382" x2="230" y2="30" stroke="#000000" stroke-width="2.2" stroke-dasharray="6,5"/>

    <!-- Ticks on x-axis (y = 0 line at 360) -->
    <path d="
      M 50,356 V 364 M 74,356 V 364 M 98,356 V 364 M 122,356 V 364 M 170,356 V 364
      M 194,356 V 364 M 218,356 V 364 M 242,356 V 364 M 266,356 V 364 M 290,356 V 364 M 314,356 V 364 M 338,356 V 364
    " stroke="#000000" stroke-width="1.2"/>

    <!-- Ticks on y-axis (x = 0 line at 146) -->
    <path d="
      M 142,30 H 150 M 142,52 H 150 M 142,74 H 150 M 142,96 H 150 M 142,118 H 150
      M 142,140 H 150 M 142,162 H 150 M 142,184 H 150 M 142,206 H 150 M 142,228 H 150
      M 142,250 H 150 M 142,272 H 150 M 142,294 H 150 M 142,316 H 150 M 142,338 H 150 M 142,382 H 150
    " stroke="#000000" stroke-width="1.2"/>

    <!-- Main Axes -->
    <line x1="35" y1="360" x2="355" y2="360" stroke="#000000" stroke-width="1.8"/>
    <polygon points="355,360 346,356 346,364" fill="#000000"/>

    <line x1="146" y1="390" x2="146" y2="18" stroke="#000000" stroke-width="1.8"/>
    <polygon points="146,18 142,27 150,27" fill="#000000"/>

    <!-- Axis Variable Symbols -->
    <text x="362" y="364" font-size="14" font-family="serif" font-style="italic" fill="#000000">x</text>
    <text x="146" y="10" font-size="14" font-family="serif" font-style="italic" text-anchor="middle" fill="#000000">y</text>
    <text x="134" y="374" font-size="13" font-family="serif" font-style="italic" fill="#000000">O</text>

    <!-- x-axis Numeric Labels -->
    <text x="50" y="375" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">-4.</text>
    <text x="242" y="375" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">4</text>
    <text x="338" y="375" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">8.</text>

    <!-- y-axis Numeric Labels -->
    <text x="138" y="272" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">4</text>
    <text x="138" y="184" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">8</text>
    <text x="138" y="96" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">12</text>
  </svg>
</div>`,
    options: [
      "A) $y < \\frac{1}{4}x + 1$",
      "B) $y < 4x + 1$",
      "C) $y > \\frac{1}{4}x + 1$",
      "D) $y > 4x + 1$"
    ],
    correctAnswer: 1,
    explanation: `1. The boundary line passes through $(0, 1)$ and $(-1, -3)$:
   $$\\text{Slope } m = \\frac{1 - (-3)}{0 - (-1)} = 4$$
2. The line equation is $y = 4x + 1$, and it is drawn dashed (strict inequality $<$ or $>$).
3. The shaded region lies to the right/below the line. Testing point $(2, 0)$ in the shaded region:
   $$0 < 4(2) + 1 = 9 \\quad \\text{(True)}$$
4. Hence, the inequality is $y < 4x + 1$.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 29,
    question: `$$\\begin{aligned} y &= 5x + 18 \\\\ y &= 5x - 18 \\end{aligned}$$
How many solutions does the given system of equations have?`,
    options: ["A) Zero", "B) Exactly one", "C) Exactly two", "D) Infinitely many"],
    correctAnswer: 0,
    explanation: `Both equations represent parallel lines with identical slopes ($m = 5$) and different $y$-intercepts ($18$ and $-18$). Parallel lines never intersect, so the system has zero solutions.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 30,
    question: `In triangle $JKL$, the measure of angle $J$ is $90^\\circ$, the measure of angle $K$ is $66a^\\circ$, and the measure of angle $L$ is $24a^\\circ$, where $a$ and $b$ are constants. Which of the following must be true?`,
    options: [
      "A) $\\cos L > \\sin K$",
      "B) $\\cos L = \\sin K$",
      "C) $\\cos L < \\sin K$",
      "D) There is not enough information to compare the values of $\\cos L$ and $\\sin K$."
    ],
    correctAnswer: 1,
    explanation: `Since $\\angle J = 90^\\circ$, angles $K$ and $L$ are acute complementary angles in right triangle $JKL$ ($K + L = 90^\\circ$).
By the cofunction identity $\\cos(\\theta) = \\sin(90^\\circ - \\theta)$, for any complementary angles $K$ and $L$, $\\cos L = \\sin K$ is always true regardless of $a$.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 31,
    question: `The function $f$ is defined by $f(x) = 3x - 7$ and $f(b) = \\frac{4}{5}$. What is the value of $b$?`,
    options: ["A) $2.6$", "B) $3.5$", "C) $4.2$", "D) $5.0$"],
    correctAnswer: 0,
    explanation: `$$3b - 7 = \\frac{4}{5} \\implies 3b = 7 + 0.8 = 7.8 \\implies b = \\frac{7.8}{3} = 2.6$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 32,
    question: `$$f(x) = x^2 - 4x - 780$$
The function $f$ is defined by the given equation. Which of the following equivalent forms of the equation displays the minimum value of the function as a constant or coefficient?`,
    options: [
      "A) $f(x) = x^2 - 4x + 195$",
      "B) $f(x) = (x - 2)^2 - 784$",
      "C) $f(x) = x(x - 4) - 780$",
      "D) $f(x) = (x + 26)(x - 30)$"
    ],
    correctAnswer: 1,
    explanation: `Complete the square to convert into vertex form $f(x) = a(x - h)^2 + k$:
$$f(x) = (x^2 - 4x + 4) - 4 - 780 = (x - 2)^2 - 784$$
In this form, the constant $-784$ explicitly displays the minimum value of the function.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 33,
    question: `The graph of $y = 6x^2 + bx + c$ is shown, where $b$ and $c$ are constants. What is the value of $bc$?

<div class="my-4 flex justify-center">
  <svg width="380" height="410" viewBox="0 0 380 410" class="bg-white border border-gray-200 rounded-lg p-2 max-w-full">
    <!-- Grid Lines -->
    <!-- Vertical Grid Lines (x = -6 to 5) -->
    <path d="
      M 50,30 V 382 M 76,30 V 382 M 102,30 V 382 M 128,30 V 382 M 154,30 V 382 M 180,30 V 382
      M 206,30 V 382 M 232,30 V 382 M 258,30 V 382 M 284,30 V 382 M 310,30 V 382 M 336,30 V 382
    " stroke="#888888" stroke-width="0.8"/>
    <!-- Horizontal Grid Lines (y = -11 to 5) -->
    <path d="
      M 50,30 H 336 M 50,52 H 336 M 50,74 H 336 M 50,96 H 336 M 50,118 H 336
      M 50,140 H 336 M 50,162 H 336 M 50,184 H 336 M 50,206 H 336 M 50,228 H 336
      M 50,250 H 336 M 50,272 H 336 M 50,294 H 336 M 50,316 H 336 M 50,338 H 336
      M 50,360 H 336 M 50,382 H 336
    " stroke="#888888" stroke-width="0.8"/>

    <!-- Ticks on x-axis (y = 0 line at 140) -->
    <path d="
      M 50,136 V 144 M 76,136 V 144 M 102,136 V 144 M 128,136 V 144 M 154,136 V 144 M 180,136 V 144
      M 232,136 V 144 M 258,136 V 144 M 284,136 V 144 M 310,136 V 144 M 336,136 V 144
    " stroke="#000000" stroke-width="1.2"/>

    <!-- Ticks on y-axis (x = 0 line at 206) -->
    <path d="
      M 202,30 H 210 M 202,52 H 210 M 202,74 H 210 M 202,96 H 210 M 202,118 H 210
      M 202,162 H 210 M 202,184 H 210 M 202,206 H 210 M 202,228 H 210 M 202,250 H 210
      M 202,272 H 210 M 202,294 H 210 M 202,316 H 210 M 202,338 H 210 M 202,360 H 210 M 202,382 H 210
    " stroke="#000000" stroke-width="1.2"/>

    <!-- Main Axes -->
    <line x1="35" y1="140" x2="355" y2="140" stroke="#000000" stroke-width="1.8"/>
    <polygon points="355,140 346,136 346,144" fill="#000000"/>

    <line x1="206" y1="390" x2="206" y2="18" stroke="#000000" stroke-width="1.8"/>
    <polygon points="206,18 202,27 210,27" fill="#000000"/>

    <!-- Axis Variable Symbols -->
    <text x="362" y="144" font-size="14" font-family="serif" font-style="italic" fill="#000000">x</text>
    <text x="206" y="10" font-size="14" font-family="serif" font-style="italic" text-anchor="middle" fill="#000000">y</text>
    <text x="194" y="133" font-size="13" font-family="serif" font-style="italic" fill="#000000">O</text>

    <!-- x-axis Numeric Labels -->
    <text x="50" y="154" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">-6</text>
    <text x="102" y="154" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">-4</text>
    <text x="154" y="154" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">-2</text>
    <text x="258" y="154" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">2</text>
    <text x="310" y="154" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#000000">4</text>

    <!-- y-axis Numeric Labels -->
    <text x="198" y="52" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">4</text>
    <text x="198" y="96" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">2</text>
    <text x="198" y="184" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">-2</text>
    <text x="198" y="228" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">-4</text>
    <text x="198" y="272" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">-6</text>
    <text x="198" y="316" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">-8</text>
    <text x="198" y="360" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#000000">-10</text>

    <!-- Parabola Curve y = 6x^2 + 12x - 3 -->
    <path d="M 141,41 C 143,70 148,140 154,206 C 160,270 172,338 180,338 C 188,338 200,270 206,206 C 212,140 217,70 219,41" fill="none" stroke="#000000" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Highlighted Points -->
    <circle cx="154" cy="206" r="4" fill="#000000"/>
    <circle cx="206" cy="206" r="4" fill="#000000"/>
    <circle cx="180" cy="338" r="4" fill="#000000"/>
  </svg>
</div>`,
    options: ["A) $-36$", "B) $-18$", "C) $12$", "D) $36$"],
    correctAnswer: 0,
    explanation: `1. The $y$-intercept is at $(0, -3)$, which means $c = -3$.
2. The vertex is at $(-1, -9)$. Substitute $x = -1, y = -9$:
$$-9 = 6(-1)^2 + b(-1) - 3 \\implies -9 = 6 - b - 3 \\implies -9 = 3 - b \\implies b = 12$$
3. Therefore, $bc = 12 \\times (-3) = -36$.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 34,
    question: `The value of a painting increased by $166\\%$ from the end of 2011 to the end of 2012 and then decreased by $14\\%$ from the end of 2012 to the end of 2013. What was the net percentage increase in the value of the painting from the end of 2011 to the end of 2013?`,
    options: ["A) $128.76\\%$", "B) $142.76\\%$", "C) $152.00\\%$", "D) $203.24\\%$"],
    correctAnswer: 0,
    explanation: `Let the initial value at the end of 2011 be $V$.
1. Value at end of 2012 after $166\\%$ increase:
$$V_{\\text{2012}} = V \\times (1 + 1.66) = 2.66V$$
2. Value at end of 2013 after $14\\%$ decrease:
$$V_{\\text{2013}} = 2.66V \\times (1 - 0.14) = 2.66V \\times 0.86 = 2.2876V$$
3. Net percentage increase:
$$\\text{Net Increase} = (2.2876 - 1) \\times 100\\% = 128.76\\%$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 35,
    question: `An object's speed is increasing at a rate of $12.60$ meters per second squared. What is this rate, in miles per minute squared, rounded to the nearest tenth? Use $1\\text{ mile} = 1,609\\text{ meters}$.`,
    options: ["A) $14.2$", "B) $28.2$", "C) $45.4$", "D) $160.9$"],
    correctAnswer: 1,
    explanation: `Use dimensional analysis to convert meters per second squared to miles per minute squared:
$$\\text{Rate} = 12.60 \\frac{\\text{meters}}{\\text{sec}^2} \\times \\frac{1\\text{ mile}}{1609\\text{ meters}} \\times \\left(\\frac{60\\text{ sec}}{1\\text{ min}}\\right)^2$$
$$\\text{Rate} = \\frac{12.60 \\times 3600}{1609} = \\frac{45360}{1609} \\approx 28.1914 \\approx 28.2\\text{ miles per minute}^2$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 36,
    question: `A chemist mixed $x$ liters of a $6\\%$ saline solution with $y$ liters of a $9\\%$ saline solution to produce a $7\\%$ saline solution. Which equation best represents this situation? (Assume the volumes of the solutions are additive.)`,
    options: [
      "A) $0.06x + 0.09y = 7(x + y)$",
      "B) $0.06x + 0.09y = 0.07(x + y)$",
      "C) $0.6x + 0.9y = 7(x + y)$",
      "D) $0.6x + 0.9y = 0.7(x + y)$"
    ],
    correctAnswer: 1,
    explanation: `- Amount of pure salt from first solution: $0.06x$
- Amount of pure salt from second solution: $0.09y$
- Total volume of mixture: $x + y$
- Amount of pure salt in $7\\%$ mixture: $0.07(x + y)$
Equating salt contents yields: $0.06x + 0.09y = 0.07(x + y)$.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 37,
    question: `The expression $(3x + 5)(7x - 8)$ can be written in the form $ax^2 + bx + c$ where $a, b,$ and $c$ are constants. What is the value of $a + b$?`,
    options: ["A) $21$", "B) $32$", "C) $40$", "D) $53$"],
    correctAnswer: 1,
    explanation: `Expand using FOIL:
$$(3x + 5)(7x - 8) = 21x^2 - 24x + 35x - 40 = 21x^2 + 11x - 40$$
Here $a = 21$ and $b = 11$.
$$a + b = 21 + 11 = 32$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 38,
    question: `An inspector checked a sample of $370$ scales selected at random from a population of $8,000$ scales to estimate what percentage of the $8,000$ scales were inaccurate. From this sample, the inspector estimated that $9\\%$ of the $8,000$ scales were inaccurate, with an associated margin of error of $2.9\\%$. Which of the following is the most appropriate conclusion?`,
    options: [
      "A) It is plausible that between 488 and 952 of the scales in the population are inaccurate.",
      "B) It is plausible that fewer than 488 of the scales in the population are inaccurate.",
      "C) Exactly 720 of the scales in the population are inaccurate.",
      "D) It is plausible that more than 952 of the scales in the population are inaccurate."
    ],
    correctAnswer: 0,
    explanation: `1. **Point Estimate**: $9\\%$ of $8,000 = 0.09 \\times 8000 = 720$ scales.
2. **Margin of Error**: $2.9\\%$ of $8,000 = 0.029 \\times 8000 = 232$ scales.
3. **Plausible Interval**: $[720 - 232, 720 + 232] = [488, 952]$.
4. Therefore, it is plausible that between 488 and 952 of the scales in the population are inaccurate.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 39,
    question: `$$\\frac{1}{x - 3} = \\frac{x - 1}{-x + 1.75}$$
Which of the following is a solution to the given equation?`,
    options: ["A) $0.75$", "B) $2.5$", "C) $3$", "D) $4$"],
    correctAnswer: 1,
    explanation: `1. Cross-multiply:
$$1(-x + 1.75) = (x - 3)(x - 1) \\implies -x + 1.75 = x^2 - 4x + 3$$
2. Rearrange into standard form:
$$x^2 - 3x + 1.25 = 0$$
3. Multiply by 4:
$$4x^2 - 12x + 5 = 0 \\implies (2x - 1)(2x - 5) = 0$$
4. Roots are $x = 0.5$ and $x = 2.5$. Choice B is $2.5$.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 40,
    question: `$$y = 5x^2 - 40x + 35$$
The given equation represents a parabola in the $xy$-plane. Which of the following equations that represent the same parabola displays the $x$-intercepts as constants or coefficients?`,
    options: [
      "A) $y = 5x^2 - 8x + 35$",
      "B) $y = 5(x - 8) + 35$",
      "C) $y = 5(x - 4)^2 - 45$",
      "D) $y = 5(x - 1)(x - 7)$"
    ],
    correctAnswer: 3,
    explanation: `Factor out $5$:
$$y = 5(x^2 - 8x + 7) = 5(x - 1)(x - 7)$$
The factored form $y = a(x - r_1)(x - r_2)$ directly displays the $x$-intercepts ($x = 1$ and $x = 7$) as constants in the equation.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 41,
    question: `$$20x - 1,200y - 2,000 = 0$$
One of the two equations in a system of linear equations is given. The system has no solution. Which equation could be the second equation in this system?`,
    options: [
      "A) $x = 3y$",
      "B) \\frac{1}{20}x = 60y - 100",
      "C) $x = -3y$",
      "D) $x = 60y - 100$"
    ],
    correctAnswer: 3,
    explanation: `1. Simplify the given equation by dividing by $20$:
$$x - 60y - 100 = 0 \\implies x = 60y + 100$$
2. A system of linear equations has no solution if the lines are parallel (same slope) with different $y$-intercepts.
3. Equation D is $x = 60y - 100$. Both lines have slope $m = \\frac{1}{60}$ but different constants ($+100$ vs $-100$). Thus, they are parallel and distinct, giving no solution.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 42,
    question: `In the figure, line $m$ is parallel to line $n$, and lines $AE$ and $CD$ intersect at point $B$. Which additional piece of information is sufficient to prove that triangle $ABC$ is congruent to triangle $EBD$?

<div class="my-4 flex justify-center">
  <svg width="340" height="230" viewBox="0 0 340 230" class="border border-gray-300 rounded-lg bg-white p-2">
    <!-- Lines m and n -->
    <line x1="30" y1="60" x2="280" y2="60" stroke="#000000" stroke-width="2"/>
    <line x1="30" y1="150" x2="280" y2="150" stroke="#000000" stroke-width="2"/>
    <text x="290" y="64" font-size="16" font-style="italic" fill="#000000">m</text>
    <text x="290" y="154" font-size="16" font-style="italic" fill="#000000">n</text>
    <!-- Transversals -->
    <line x1="50" y1="195" x2="245" y2="19.5" stroke="#000000" stroke-width="2"/>
    <line x1="70" y1="15" x2="225" y2="210" stroke="#000000" stroke-width="2"/>
    <!-- Point Labels -->
    <text x="124" y="52" font-size="16" font-style="italic" font-weight="bold" fill="#000000">D</text>
    <text x="200" y="52" font-size="16" font-style="italic" font-weight="bold" fill="#000000">E</text>
    <text x="100" y="170" font-size="16" font-style="italic" font-weight="bold" fill="#000000">A</text>
    <text x="180" y="170" font-size="16" font-style="italic" font-weight="bold" fill="#000000">C</text>
    <text x="160" y="112" font-size="16" font-style="italic" font-weight="bold" fill="#000000">B</text>
  </svg>
</div>`,
    options: [
      "A) $AB = 31$ and $DB = 31$",
      "B) $AB = 31$ and $EB = 31$",
      "C) Triangles $ABC$ and $EBD$ are isosceles.",
      "D) No additional information is necessary to determine that the two triangles are congruent."
    ],
    correctAnswer: 1,
    explanation: `1. Since line $m \\parallel n$, alternate interior angles are equal: $\\angle BAC = \\angle BED$ and $\\angle BCA = \\angle BDE$. Vertical angles $\\angle ABC = \\angle EBD$ are also equal.
2. Equal angles alone (AAA) prove similarity, but not congruence. We need one pair of corresponding side lengths to be equal.
3. In $\\Delta ABC$, side $AB$ is opposite angle $\\angle BCA$. In $\\Delta EBD$, the corresponding side opposite $\\angle BDE$ is $EB$.
4. Knowing $AB = EB$ (Choice B) proves congruence by ASA.`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 43,
    question: `A circle has center $G$, and points $M$ and $N$ lie on the circle. Line segments $MH$ and $NH$ are tangent to the circle at points $M$ and $N$, respectively. If the radius of the circle is $247\\text{ millimeters}$ and the perimeter of quadrilateral $GMHN$ is $5,174\\text{ millimeters}$, what is the distance, in millimeters, between points $G$ and $H$?`,
    options: ["A) $2340$", "B) $2353$", "C) $2587$", "D) $4680$"],
    correctAnswer: 1,
    explanation: `1. Tangent segments from the same external point $H$ are equal: $MH = NH$.
2. Radii are equal: $GM = GN = 247$.
3. Perimeter of quadrilateral $GMHN$:
$$GM + GN + MH + NH = 247 + 247 + 2(MH) = 5174 \\implies 494 + 2(MH) = 5174 \\implies MH = 2340$$
4. Since radius $GM \\perp MH$, $\\Delta GMH$ is a right triangle with hypotenuse $GH$:
$$GH^2 = GM^2 + MH^2 = 247^2 + 2340^2 = 61,009 + 5,475,600 = 5,536,609$$
$$GH = \\sqrt{5,536,609} = 2353$$`,
    category: "SAT-2026-March-form D"
  },
  {
    id: 44,
    question: `$$4x^2 - px + (w + 85) = 0$$
In the given equation, $p$ and $w$ are integer constants. The equation has exactly one real solution. Which is NOT a possible value of $w$?`,
    options: ["A) $-21$", "B) $15$", "C) $64$", "D) $315$"],
    correctAnswer: 2,
    explanation: `1. For a quadratic equation to have exactly one real solution, its discriminant must be $0$:
$$\\Delta = (-p)^2 - 4(4)(w + 85) = 0 \\implies p^2 = 16(w + 85)$$
2. Since $p$ is an integer, $p^2$ is a perfect square. Since $16 = 4^2$, $w + 85$ MUST be a perfect square.
3. Test options for $w + 85$:
   - A) $w = -21 \\implies -21 + 85 = 64 = 8^2$ (perfect square)
   - B) $w = 15 \\implies 15 + 85 = 100 = 10^2$ (perfect square)
   - C) $w = 64 \\implies 64 + 85 = 149$ (NOT a perfect square!)
   - D) $w = 315 \\implies 315 + 85 = 400 = 20^2$ (perfect square)
4. Therefore, $w = 64$ is NOT a possible value of $w$.`,
    category: "SAT-2026-March-form D"
  }
];
