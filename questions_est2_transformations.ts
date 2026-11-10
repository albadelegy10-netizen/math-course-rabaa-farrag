import { Question } from './types';

export const est2_transformations_questions: Question[] = [
  // ==========================================
  // SECTION 1: RADICAL FUNCTIONS (Questions 1-10)
  // ==========================================
  {
    id: "est2_trans_01",
    question: "What are the domain and range of the radical function $f(x) = \\sqrt{x+5} - 3$?",
    options: [
      "Domain: $[-5, \\infty)$, Range: $[-3, \\infty)$",
      "Domain: $[5, \\infty)$, Range: $[-3, \\infty)$",
      "Domain: $[-5, \\infty)$, Range: $[3, \\infty)$",
      "Domain: $(-\\infty, -5]$, Range: $(-\\infty, -3]$"
    ],
    correctAnswer: 0,
    explanation: "To find the domain of a square root function, the radicand must be non-negative:\n$$x + 5 \\ge 0 \\implies x \\ge -5$$\nThus, the domain is $[-5, \\infty)$.\n\nSince the principal square root is always non-negative ($\\sqrt{x+5} \\ge 0$):\n$$\\sqrt{x+5} - 3 \\ge 0 - 3 = -3$$\nThus, the range is $[-3, \\infty)$.",
    category: "transformations"
  },
  {
    id: "est2_trans_02",
    question: "The parent function $f(x) = \\sqrt{x}$ undergoes the following sequence of transformations: a horizontal shift right by $3$ units, a vertical stretch by a factor of $2$, a reflection across the $x$-axis, and a vertical shift up by $4$ units. Which of the following represents the range of the resulting function $g(x)$?",
    options: [
      "$[4, \\infty)$",
      "$(-\\infty, 4]$",
      "$[3, \\infty)$",
      "$(-\\infty, 3]$"
    ],
    correctAnswer: 1,
    explanation: "Let us trace the equation of $g(x)$ through each step:\n1. Horizontal shift right by $3$: $\\sqrt{x - 3}$\n2. Vertical stretch by $2$: $2\\sqrt{x - 3}$\n3. Reflection across the $x$-axis: $-2\\sqrt{x - 3}$\n4. Vertical shift up by $4$: $g(x) = -2\\sqrt{x - 3} + 4$\n\nBecause $\\sqrt{x - 3} \\ge 0$ for all $x \\ge 3$, multiplying by $-2$ reverses the inequality:\n$$-2\\sqrt{x - 3} \\le 0$$\nAdding $4$ yields:\n$$g(x) = -2\\sqrt{x - 3} + 4 \\le 4$$\nTherefore, the range of $g(x)$ is $(-\\infty, 4]$.",
    category: "transformations"
  },
  {
    id: "est2_trans_03",
    question: "What is the domain of the real-valued function $h(x) = \\sqrt{8 - 2x} - 1$?",
    options: [
      "$[4, \\infty)$",
      "$(-\\infty, 4]$",
      "$(-\\infty, 8]$",
      "$[-4, \\infty)$"
    ],
    correctAnswer: 1,
    explanation: "For the square root to yield real values, the expression inside the radical must be greater than or equal to zero:\n$$8 - 2x \\ge 0$$\nSubtracting $8$ from both sides:\n$$-2x \\ge -8$$\nDividing by $-2$ and reversing the inequality sign:\n$$x \\le 4$$\nThus, the domain is $(-\\infty, 4]$. The negative coefficient on $x$ represents a reflection across the $y$-axis.",
    category: "transformations"
  },
  {
    id: "est2_trans_04",
    question: "The graph of a transformed square root function is shown in the $xy$-plane above. Which of the following is the equation of the graph?",
    svg: `<svg viewBox="-6 -6 12 12" width="280" height="280" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#000000" />
        </marker>
        <pattern id="grid" width="1" height="1" patternUnits="userSpaceOnUse">
          <path d="M 1 0 L 0 0 0 1" fill="none" stroke="#e5e7eb" stroke-width="0.08" />
        </pattern>
      </defs>
      <rect x="-6" y="-6" width="12" height="12" fill="url(#grid)" />
      <!-- Axes -->
      <line x1="-5.5" y1="0" x2="5.5" y2="0" stroke="#000000" stroke-width="0.12" marker-end="url(#arrow)" />
      <line x1="0" y1="5.5" x2="0" y2="-5.5" stroke="#000000" stroke-width="0.12" marker-end="url(#arrow)" />
      <text x="5" y="0.8" font-size="0.6" font-style="italic">x</text>
      <text x="-0.8" y="-5" font-size="0.6" font-style="italic">y</text>
      <text x="-0.6" y="0.6" font-size="0.5" font-style="italic">O</text>
      <!-- Tick Marks -->
      <line x1="-4" y1="-0.15" x2="-4" y2="0.15" stroke="#000000" stroke-width="0.08" />
      <text x="-4.2" y="0.7" font-size="0.45">-4</text>
      <line x1="-2" y1="-0.15" x2="-2" y2="0.15" stroke="#000000" stroke-width="0.08" />
      <text x="-2.2" y="0.7" font-size="0.45">-2</text>
      <line x1="2" y1="-0.15" x2="2" y2="0.15" stroke="#000000" stroke-width="0.08" />
      <text x="1.8" y="0.7" font-size="0.45">2</text>
      <line x1="4" y1="-0.15" x2="4" y2="0.15" stroke="#000000" stroke-width="0.08" />
      <text x="3.8" y="0.7" font-size="0.45">4</text>
      <line x1="-0.15" y1="-2" x2="0.15" y2="-2" stroke="#000000" stroke-width="0.08" />
      <text x="0.3" y="-1.8" font-size="0.45">2</text>
      <line x1="-0.15" y1="1" x2="0.15" y2="1" stroke="#000000" stroke-width="0.08" />
      <text x="0.3" y="1.2" font-size="0.45">-1</text>
      <!-- Curve y = sqrt(x + 2) - 1 => SVG y inverted -->
      <!-- Points: (-2, -1) -> SVG (-2, 1), (-1, 0) -> SVG (-1, 0), (2, 1) -> SVG (2, -1), (7, 2) -->
      <path d="M -2 1 Q -1.2 0.3 2 -1" fill="none" stroke="#000000" stroke-width="0.16" />
      <circle cx="-2" cy="1" r="0.2" fill="#000000" />
      <circle cx="2" cy="-1" r="0.15" fill="#000000" />
    </svg>`,
    options: [
      "$y = \\sqrt{x+2} - 1$",
      "$y = \\sqrt{x-2} - 1$",
      "$y = 2\\sqrt{x+2} - 1$",
      "$y = \\sqrt{x+2} + 1$"
    ],
    correctAnswer: 0,
    explanation: "Observing the coordinate graph:\n1. The initial endpoint of the radical curve is at $(h, k) = (-2, -1)$.\n2. The general form of a square root function is $y = a\\sqrt{x - h} + k$. Substituting $(-2, -1)$:\n$$y = a\\sqrt{x - (-2)} + (-1) = a\\sqrt{x + 2} - 1$$\n3. The graph passes through $(2, 1)$:\n$$1 = a\\sqrt{2 + 2} - 1 \\implies 1 = 2a - 1 \\implies 2a = 2 \\implies a = 1$$\nThus, the equation is $y = \\sqrt{x+2} - 1$.",
    category: "transformations"
  },
  {
    id: "est2_trans_05",
    question: "The function $g(x) = \\sqrt{9x - 18} + 5$ can be rewritten in the standard vertex form $g(x) = a\\sqrt{x - h} + k$. What is the value of $a + h + k$?",
    options: [
      "$10$",
      "$16$",
      "$8$",
      "$12$"
    ],
    correctAnswer: 0,
    explanation: "Factor out the coefficient of $x$ inside the radical:\n$$g(x) = \\sqrt{9(x - 2)} + 5$$\nUsing the radical multiplication property $\\sqrt{A \\cdot B} = \\sqrt{A} \\cdot \\sqrt{B}$:\n$$g(x) = \\sqrt{9} \\cdot \\sqrt{x - 2} + 5 = 3\\sqrt{x - 2} + 5$$\nComparing this with $g(x) = a\\sqrt{x - h} + k$:\n$$a = 3, \\quad h = 2, \\quad k = 5$$\nTherefore:\n$$a + h + k = 3 + 2 + 5 = 10$$",
    category: "transformations"
  },
  {
    id: "est2_trans_06",
    question: "The graph of the cube root function $f(x) = 2\\sqrt[3]{x-4} + 1$ is symmetric about its point of inflection. What are the coordinates of this inflection point, and what is the domain of $f(x)$?",
    options: [
      "Point: $(4, 1)$, Domain: $(-\\infty, \\infty)$",
      "Point: $(-4, 1)$, Domain: $[4, \\infty)$",
      "Point: $(4, 1)$, Domain: $[4, \\infty)$",
      "Point: $(1, 4)$, Domain: $(-\\infty, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: "For the parent cube root function $y = \\sqrt[3]{x}$, the point of inflection (where concavity changes) is at the origin $(0, 0)$.\n\nUnder the transformation $f(x) = 2\\sqrt[3]{x-4} + 1$:\n- The graph is shifted horizontally right by $4$ units ($x = 4$).\n- The graph is shifted vertically up by $1$ unit ($y = 1$).\nThus, the center of point symmetry (inflection point) is at $(4, 1)$.\n\nUnlike square root functions, odd root (cube root) functions can take negative, zero, and positive real inputs. Therefore, the domain of $f(x)$ is all real numbers, $(-\\infty, \\infty)$.",
    category: "transformations"
  },
  {
    id: "est2_trans_07",
    question: "What are the domain and range of the function $f(x) = 3 - \\sqrt{16 - x^2}$?",
    options: [
      "Domain: $[-4, 4]$, Range: $[-1, 3]$",
      "Domain: $[-4, 4]$, Range: $[3, 7]$",
      "Domain: $[0, 4]$, Range: $[-1, 3]$",
      "Domain: $(-\\infty, \\infty)$, Range: $[-1, 3]$"
    ],
    correctAnswer: 0,
    explanation: "1. **Domain:** The radicand must be non-negative:\n$$16 - x^2 \\ge 0 \\implies x^2 \\le 16 \\implies -4 \\le x \\le 4$$\nThus, the domain is $[-4, 4]$.\n\n2. **Range:** The expression $\\sqrt{16 - x^2}$ represents the upper half of a circle of radius $4$ centered at the origin, with values ranging from $0$ (at $x = \\pm 4$) to $4$ (at $x = 0$):\n$$0 \\le \\sqrt{16 - x^2} \\le 4$$\nMultiply by $-1$ (reversing the inequality):\n$$-4 \\le -\\sqrt{16 - x^2} \\le 0$$\nAdd $3$ to all parts:\n$$3 - 4 \\le 3 - \\sqrt{16 - x^2} \\le 3 + 0 \\implies -1 \\le f(x) \\le 3$$\nThus, the range is $[-1, 3]$.",
    category: "transformations"
  },
  {
    id: "est2_trans_08",
    question: "The parent function $f(x) = \\sqrt{x}$ is reflected across the $y$-axis, stretched horizontally by a factor of $3$, shifted right by $6$ units, and shifted down by $2$ units to form $g(x)$. Which of the following is the formula for $g(x)$?",
    options: [
      "$g(x) = \\sqrt{-\\frac{1}{3}(x-6)} - 2$",
      "$g(x) = -\\sqrt{3(x-6)} - 2$",
      "$g(x) = \\sqrt{-3(x+6)} - 2$",
      "$g(x) = \\sqrt{-\\frac{1}{3}(x+6)} - 2$"
    ],
    correctAnswer: 0,
    explanation: "Let us systematically build the transformation:\n1. Reflect across the $y$-axis: replace $x$ with $-x \\implies \\sqrt{-x}$.\n2. Horizontal stretch by factor of $3$: replace $x$ with $\\frac{1}{3}x \\implies \\sqrt{-\\frac{1}{3}x}$.\n3. Shift right by $6$ units: replace $x$ with $(x - 6) \\implies \\sqrt{-\\frac{1}{3}(x - 6)}$.\n4. Shift down by $2$ units: subtract $2 \\implies g(x) = \\sqrt{-\\frac{1}{3}(x - 6)} - 2$.\n\nNote: Writing $\\sqrt{-\\frac{1}{3}(x-6)}$ ensures the domain is $x \\le 6$, consistent with shifting right after a $y$-axis reflection.",
    category: "transformations"
  },
  {
    id: "est2_trans_09",
    question: "The table below shows selected values for a transformed radical function of the form $g(x) = a\\sqrt{x - h} + k$.\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">$x$</th>\n      <th class=\"border border-gray-400 px-2 py-1\">$g(x)$</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$1$</td><td class=\"border border-gray-400 px-2 py-1\">$-5$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$2$</td><td class=\"border border-gray-400 px-2 py-1\">$-2$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$5$</td><td class=\"border border-gray-400 px-2 py-1\">$1$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$10$</td><td class=\"border border-gray-400 px-2 py-1\">$4$</td></tr>\n  </tbody>\n</table>\n\nWhat is the value of $g(17)$?",
    options: [
      "$7$",
      "$9$",
      "$11$",
      "$12$"
    ],
    correctAnswer: 0,
    explanation: "1. The initial point of the function corresponds to where the radicand is zero. The table starts at $x = 1$, giving $h = 1$ and $k = g(1) = -5$.\n2. Thus, $g(x) = a\\sqrt{x - 1} - 5$.\n3. Use the point $(2, -2)$ to solve for $a$:\n$$-2 = a\\sqrt{2 - 1} - 5 \\implies -2 = a(1) - 5 \\implies a = 3$$\n4. Verify with $(5, 1)$: $g(5) = 3\\sqrt{4} - 5 = 6 - 5 = 1$ (matches).\n5. Compute $g(17)$:\n$$g(17) = 3\\sqrt{17 - 1} - 5 = 3\\sqrt{16} - 5 = 3(4) - 5 = 12 - 5 = 7$$",
    category: "transformations"
  },
  {
    id: "est2_trans_10",
    question: "What is the complete domain of the real-valued function $f(x) = \\frac{\\sqrt{2x + 10}}{x^2 - 9}$?",
    options: [
      "$[-5, -3) \\cup (-3, 3) \\cup (3, \\infty)$",
      "$(-5, 3) \\cup (3, \\infty)$",
      "$[-5, \\infty)$",
      "$(-\\infty, -3) \\cup (-3, 3) \\cup (3, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: "Two conditions must be simultaneously satisfied:\n1. The radicand in the numerator must be non-negative:\n$$2x + 10 \\ge 0 \\implies 2x \\ge -10 \\implies x \\ge -5$$\n2. The denominator cannot be zero:\n$$x^2 - 9 \\ne 0 \\implies x^2 \\ne 9 \\implies x \\ne 3 \\text{ and } x \\ne -3$$\nSince both $-3$ and $3$ are greater than or equal to $-5$, they must be excluded from the interval $[-5, \\infty)$.\n\nExcluding $-3$ and $3$ gives the interval notation:\n$$[-5, -3) \\cup (-3, 3) \\cup (3, \\infty)$$",
    category: "transformations"
  },

  // ==========================================
  // SECTION 2: QUADRATIC FUNCTIONS (Questions 11-20)
  // ==========================================
  {
    id: "est2_trans_11",
    question: "What is the maximum value and the range of the quadratic function $f(x) = -4(x+3)^2 + 11$?",
    options: [
      "Maximum value is $11$; Range: $(-\\infty, 11]$",
      "Maximum value is $-3$; Range: $(-\\infty, -3]$",
      "Minimum value is $11$; Range: $[11, \\infty)$",
      "Maximum value is $11$; Range: $[-4, 11]$"
    ],
    correctAnswer: 0,
    explanation: "The function is in vertex form $f(x) = a(x - h)^2 + k$, where:\n- The vertex is $(h, k) = (-3, 11)$.\n- The leading coefficient $a = -4 < 0$, which means the parabola opens downward and has a maximum value at its vertex.\n- The maximum value of $f(x)$ is $k = 11$, attained when $x = -3$.\n- Since the function takes all values less than or equal to $11$, the range is $(-\\infty, 11]$.",
    category: "transformations"
  },
  {
    id: "est2_trans_12",
    question: "The graph of the parabola $y = f(x)$ is shown in the $xy$-plane above. If its equation is written in vertex form $y = a(x - h)^2 + k$, what is the value of the product $a \\cdot h \\cdot k$?",
    svg: `<svg viewBox="-5 -6 10 10" width="280" height="280" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
      <defs>
        <marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#000000" />
        </marker>
        <pattern id="grid2" width="1" height="1" patternUnits="userSpaceOnUse">
          <path d="M 1 0 L 0 0 0 1" fill="none" stroke="#e5e7eb" stroke-width="0.08" />
        </pattern>
      </defs>
      <rect x="-5" y="-6" width="10" height="10" fill="url(#grid2)" />
      <!-- Axes -->
      <line x1="-4.5" y1="0" x2="4.5" y2="0" stroke="#000000" stroke-width="0.12" marker-end="url(#arrow2)" />
      <line x1="0" y1="3.5" x2="0" y2="-5.5" stroke="#000000" stroke-width="0.12" marker-end="url(#arrow2)" />
      <text x="4.2" y="0.8" font-size="0.6" font-style="italic">x</text>
      <text x="-0.8" y="-5" font-size="0.6" font-style="italic">y</text>
      <text x="-0.6" y="0.6" font-size="0.5" font-style="italic">O</text>
      <!-- Ticks -->
      <line x1="-1" y1="-0.15" x2="-1" y2="0.15" stroke="#000000" stroke-width="0.08" />
      <text x="-1.2" y="0.7" font-size="0.45">-1</text>
      <line x1="1" y1="-0.15" x2="1" y2="0.15" stroke="#000000" stroke-width="0.08" />
      <text x="0.9" y="0.7" font-size="0.45">1</text>
      <line x1="3" y1="-0.15" x2="3" y2="0.15" stroke="#000000" stroke-width="0.08" />
      <text x="2.9" y="0.7" font-size="0.45">3</text>
      <line x1="-0.15" y1="4" x2="0.15" y2="4" stroke="#000000" stroke-width="0.08" />
      <text x="0.3" y="4.2" font-size="0.45">-4</text>
      <!-- Parabola y = (x - 1)^2 - 4 => vertex (1, -4), roots (-1, 0), (3, 0) -->
      <!-- In SVG coords, y is flipped: vertex (1, 4), roots (-1, 0), (3, 0) -->
      <path d="M -1.8 -3.84 Q 1 9.6 3.8 -3.84" fill="none" stroke="#000000" stroke-width="0.16" />
      <circle cx="1" cy="4" r="0.2" fill="#000000" />
      <circle cx="-1" cy="0" r="0.15" fill="#000000" />
      <circle cx="3" cy="0" r="0.15" fill="#000000" />
    </svg>`,
    options: [
      "$-4$",
      "$4$",
      "$-8$",
      "$-2$"
    ],
    correctAnswer: 0,
    explanation: "From the coordinate graph:\n1. The vertex is at $(h, k) = (1, -4)$.\n2. The parabola has $x$-intercepts at $(-1, 0)$ and $(3, 0)$ and $y$-intercept at $(0, -3)$.\n3. Substitute the vertex into the equation: $y = a(x - 1)^2 - 4$.\n4. Using the root $(3, 0)$:\n$$0 = a(3 - 1)^2 - 4 \\implies 0 = 4a - 4 \\implies 4a = 4 \\implies a = 1$$\n5. Thus, $a = 1$, $h = 1$, and $k = -4$.\n6. The product is:\n$$a \\cdot h \\cdot k = 1 \\cdot 1 \\cdot (-4) = -4$$",
    category: "transformations"
  },
  {
    id: "est2_trans_13",
    question: "Which sequence of transformations maps the parent graph $y = x^2$ onto the graph of $f(x) = 3x^2 - 12x + 19$?",
    options: [
      "A horizontal shift right by $2$ units, a vertical stretch by a factor of $3$, and a vertical shift up by $7$ units",
      "A horizontal shift left by $2$ units, a vertical stretch by a factor of $3$, and a vertical shift up by $7$ units",
      "A horizontal shift right by $4$ units, a vertical stretch by a factor of $3$, and a vertical shift up by $19$ units",
      "A horizontal shift left by $4$ units, a vertical compression by a factor of $\\frac{1}{3}$, and a vertical shift up by $7$ units"
    ],
    correctAnswer: 0,
    explanation: "Complete the square to convert $f(x)$ into vertex form:\n$$f(x) = 3(x^2 - 4x) + 19$$\nTake half of $-4$ (which is $-2$), square it ($(-2)^2 = 4$), and add/subtract inside the bracket:\n$$f(x) = 3\\left[(x - 2)^2 - 4\\right] + 19$$\n$$f(x) = 3(x - 2)^2 - 12 + 19$$\n$$f(x) = 3(x - 2)^2 + 7$$\nComparing with $y = a(x - h)^2 + k$:\n- $h = 2$: Horizontal shift right by $2$ units.\n- $a = 3$: Vertical stretch by a factor of $3$.\n- $k = 7$: Vertical shift up by $7$ units.",
    category: "transformations"
  },
  {
    id: "est2_trans_14",
    question: "The vertex of $f(x) = 2(x - 5)^2 + 3$ is transformed according to the rule $g(x) = -f(x + 2) - 4$. What are the coordinates of the vertex of $g(x)$?",
    options: [
      "$(3, -7)$",
      "$(7, -7)$",
      "$(3, -1)$",
      "$(-7, 3)$"
    ],
    correctAnswer: 0,
    explanation: "Let us track the transformation of the vertex $(5, 3)$ step-by-step:\n1. Inside argument $x + 2$: Shift left by $2$ units $\\implies x = 5 - 2 = 3$.\n2. Negation $-f(...)$: Reflection across the $x$-axis multiplies the $y$-value by $-1$ $\\implies y = -(3) = -3$.\n3. Outer constant $-4$: Shift down by $4$ units $\\implies y = -3 - 4 = -7$.\nThus, the transformed vertex is $(3, -7)$.",
    category: "transformations"
  },
  {
    id: "est2_trans_15",
    question: "Let $f(x) = x^2 - 4$. If $g(x) = f(2x)$, what is the distance between the $x$-intercepts of $g(x)$ compared to the distance between the $x$-intercepts of $f(x)$?",
    options: [
      "It is multiplied by $\\frac{1}{2}$",
      "It is multiplied by $2$",
      "It is multiplied by $4$",
      "It is unchanged"
    ],
    correctAnswer: 0,
    explanation: "1. For $f(x) = x^2 - 4 = 0$, the roots are $x = \\pm 2$. The distance between the roots is $2 - (-2) = 4$.\n2. For $g(x) = f(2x) = (2x)^2 - 4 = 4x^2 - 4 = 0$, the roots are $x^2 = 1 \\implies x = \\pm 1$. The distance between the roots is $1 - (-1) = 2$.\n3. The transformation $x \\to 2x$ is a horizontal compression by a factor of $\\frac{1}{2}$, which halves all horizontal distances: $4 \\times \\frac{1}{2} = 2$.",
    category: "transformations"
  },
  {
    id: "est2_trans_16",
    question: "The table below gives values of a quadratic function $f(x) = a(x - h)^2 + k$.\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">$x$</th>\n      <th class=\"border border-gray-400 px-2 py-1\">$f(x)$</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$-1$</td><td class=\"border border-gray-400 px-2 py-1\">$14$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$0$</td><td class=\"border border-gray-400 px-2 py-1\">$5$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$1$</td><td class=\"border border-gray-400 px-2 py-1\">$2$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$2$</td><td class=\"border border-gray-400 px-2 py-1\">$5$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$3$</td><td class=\"border border-gray-400 px-2 py-1\">$14$</td></tr>\n  </tbody>\n</table>\n\nWhat is the range of $f(x)$?",
    options: [
      "$[2, \\infty)$",
      "$(-\\infty, 2]$",
      "$[5, \\infty)$",
      "$[1, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: "Notice the symmetry in the table about $x = 1$:\n- $f(0) = f(2) = 5$\n- $f(-1) = f(3) = 14$\nThis confirms the vertex is located at $(h, k) = (1, 2)$.\nSince the values increase as we move away from $x = 1$, the parabola opens upward ($a > 0$).\nSpecifically, $f(2) = a(2 - 1)^2 + 2 = 5 \\implies a = 3 > 0$.\nThe minimum value is $2$, so the range of $f(x)$ is $[2, \\infty)$.",
    category: "transformations"
  },
  {
    id: "est2_trans_17",
    question: "What is the range of the quadratic function $f(x) = -(x-2)^2 + 8$ on the restricted domain $[-1, 5]$?",
    options: [
      "$[-1, 8]$",
      "$[-1, 4]$",
      "$[0, 8]$",
      "$(-\\infty, 8]$"
    ],
    correctAnswer: 0,
    explanation: "1. The parabola opens downward with vertex at $(2, 8)$.\n2. Since $x = 2$ lies within the restricted interval $[-1, 5]$, the absolute maximum value on this interval is the vertex $y$-value: $f(2) = 8$.\n3. Evaluate the function at the boundary endpoints:\n- $f(-1) = -(-1 - 2)^2 + 8 = -(-3)^2 + 8 = -9 + 8 = -1$\n- $f(5) = -(5 - 2)^2 + 8 = -(3)^2 + 8 = -9 + 8 = -1$\n4. Since the function is continuous, it takes all values from the minimum boundary value $-1$ up to the vertex maximum $8$.\nThus, the range is $[-1, 8]$.",
    category: "transformations"
  },
  {
    id: "est2_trans_18",
    question: "The parabola $y = x^2 + bx + c$ has its vertex at $(3, -4)$. If the parabola is translated $4$ units left and $6$ units down, what is the new $y$-intercept of the resulting parabola?",
    options: [
      "$-9$",
      "$-10$",
      "$5$",
      "$-3$"
    ],
    correctAnswer: 0,
    explanation: "1. In vertex form, the original parabola is $y = (x - 3)^2 - 4$.\n2. Shifting $4$ units left: replace $x$ with $x + 4$:\n$$y = ((x + 4) - 3)^2 - 4 = (x + 1)^2 - 4$$\n3. Shifting $6$ units down: subtract $6$:\n$$y = (x + 1)^2 - 4 - 6 = (x + 1)^2 - 10$$\n4. To find the $y$-intercept, set $x = 0$:\n$$y = (0 + 1)^2 - 10 = 1 - 10 = -9$$",
    category: "transformations"
  },
  {
    id: "est2_trans_19",
    question: "The quadratic equation $f(x) = 0$ has real solutions $x = -5$ and $x = 1$. What are the real solutions to the transformed equation $f(2x - 3) = 0$?",
    options: [
      "$x = -1$ and $x = 2$",
      "$x = -7$ and $x = 5$",
      "$x = -4$ and $x = 2$",
      "$x = -2$ and $x = 1$"
    ],
    correctAnswer: 0,
    explanation: "For $f(2x - 3) = 0$, the input argument $2x - 3$ must equal the known roots of $f$:\n1. $2x - 3 = -5 \\implies 2x = -2 \\implies x = -1$\n2. $2x - 3 = 1 \\implies 2x = 4 \\implies x = 2$\nThus, the solutions are $x = -1$ and $x = 2$.",
    category: "transformations"
  },
  {
    id: "est2_trans_20",
    question: "To make the quadratic function $f(x) = 2(x+4)^2 - 7$ one-to-one so that an inverse function exists, its domain is restricted to $[-4, \\infty)$. What is the equation of the inverse function $f^{-1}(x)$, and what is its domain?",
    options: [
      "$f^{-1}(x) = \\sqrt{\\frac{x+7}{2}} - 4$, with domain $[-7, \\infty)$",
      "$f^{-1}(x) = \\sqrt{\\frac{x-7}{2}} + 4$, with domain $[7, \\infty)$",
      "$f^{-1}(x) = \\sqrt{2(x+7)} - 4$, with domain $[-7, \\infty)$",
      "$f^{-1}(x) = \\frac{\\sqrt{x+7} - 4}{2}$, with domain $[-4, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: "1. For $x \\ge -4$, the range of $f(x) = 2(x+4)^2 - 7$ is $[-7, \\infty)$.\n2. The domain of $f^{-1}(x)$ is equal to the range of $f(x)$, so domain is $[-7, \\infty)$.\n3. Swap $x$ and $y$ to solve for $y$:\n$$x = 2(y + 4)^2 - 7$$\n$$x + 7 = 2(y + 4)^2$$\n$$\\frac{x + 7}{2} = (y + 4)^2$$\nSince $y \\ge -4$, take the positive square root:\n$$y + 4 = \\sqrt{\\frac{x + 7}{2}} \\implies y = \\sqrt{\\frac{x + 7}{2}} - 4$$\nThus, $f^{-1}(x) = \\sqrt{\\frac{x+7}{2}} - 4$ with domain $[-7, \\infty)$.",
    category: "transformations"
  },

  // ==========================================
  // SECTION 3: ABSOLUTE VALUE FUNCTIONS (Questions 21-30)
  // ==========================================
  {
    id: "est2_trans_21",
    question: "What are the vertex and range of the transformed absolute value function $f(x) = 3|x - 4| - 8$?",
    options: [
      "Vertex: $(4, -8)$, Range: $[-8, \\infty)$",
      "Vertex: $(-4, -8)$, Range: $[-8, \\infty)$",
      "Vertex: $(4, -8)$, Range: $(-\\infty, -8]$",
      "Vertex: $(4, 8)$, Range: $[8, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: "The vertex form of an absolute value function is $f(x) = a|x - h| + k$.\n- Here, $(h, k) = (4, -8)$, so the vertex (cusp) is at $(4, -8)$.\n- Since $a = 3 > 0$, the V-shaped graph opens upward.\n- Because $|x - 4| \\ge 0$, $3|x - 4| \\ge 0 \\implies 3|x - 4| - 8 \\ge -8$.\nTherefore, the range is $[-8, \\infty)$.",
    category: "transformations"
  },
  {
    id: "est2_trans_22",
    question: "The graph of the absolute value function $y = f(x)$ is shown in the $xy$-plane above. What is the equation of the function?",
    svg: `<svg viewBox="-6 -5 12 10" width="280" height="280" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
      <defs>
        <marker id="arrow3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#000000" />
        </marker>
        <pattern id="grid3" width="1" height="1" patternUnits="userSpaceOnUse">
          <path d="M 1 0 L 0 0 0 1" fill="none" stroke="#e5e7eb" stroke-width="0.08" />
        </pattern>
      </defs>
      <rect x="-6" y="-5" width="12" height="10" fill="url(#grid3)" />
      <!-- Axes -->
      <line x1="-5.5" y1="0" x2="5.5" y2="0" stroke="#000000" stroke-width="0.12" marker-end="url(#arrow3)" />
      <line x1="0" y1="4.5" x2="0" y2="-4.5" stroke="#000000" stroke-width="0.12" marker-end="url(#arrow3)" />
      <text x="5" y="0.8" font-size="0.6" font-style="italic">x</text>
      <text x="-0.8" y="-4" font-size="0.6" font-style="italic">y</text>
      <text x="-0.6" y="0.6" font-size="0.5" font-style="italic">O</text>
      <!-- Ticks -->
      <line x1="-4" y1="-0.15" x2="-4" y2="0.15" stroke="#000000" stroke-width="0.08" />
      <text x="-4.2" y="0.7" font-size="0.45">-4</text>
      <line x1="-2" y1="-0.15" x2="-2" y2="0.15" stroke="#000000" stroke-width="0.08" />
      <text x="-2.2" y="0.7" font-size="0.45">-2</text>
      <line x1="2" y1="-0.15" x2="2" y2="0.15" stroke="#000000" stroke-width="0.08" />
      <text x="1.8" y="0.7" font-size="0.45">2</text>
      <line x1="-0.15" y1="-3" x2="0.15" y2="-3" stroke="#000000" stroke-width="0.08" />
      <text x="0.3" y="-2.8" font-size="0.45">3</text>
      <line x1="-0.15" y1="1" x2="0.15" y2="1" stroke="#000000" stroke-width="0.08" />
      <text x="0.3" y="1.2" font-size="0.45">-1</text>
      <!-- Inverted V: vertex at (-2, 3), slope -2, passing through (0, -1), (-4, -1) -->
      <!-- In SVG y inverted: vertex (-2, -3), points (0, 1), (-4, 1) -->
      <path d="M -5 3 L -2 -3 L 1 3" fill="none" stroke="#000000" stroke-width="0.16" />
      <circle cx="-2" cy="-3" r="0.2" fill="#000000" />
      <circle cx="0" cy="1" r="0.15" fill="#000000" />
      <circle cx="-4" cy="1" r="0.15" fill="#000000" />
    </svg>`,
    options: [
      "$y = -2|x+2| + 3$",
      "$y = -|x+2| + 3$",
      "$y = -2|x-2| + 3$",
      "$y = 2|x+2| - 3$"
    ],
    correctAnswer: 0,
    explanation: "1. The vertex of the absolute value function is at $(h, k) = (-2, 3)$.\n2. The graph opens downward, so $a < 0$.\n3. Substitute $(-2, 3)$ into the vertex form: $y = a|x + 2| + 3$.\n4. Use the $y$-intercept at $(0, -1)$:\n$$-1 = a|0 + 2| + 3 \\implies -1 = 2a + 3 \\implies 2a = -4 \\implies a = -2$$\nTherefore, the equation is $y = -2|x+2| + 3$.",
    category: "transformations"
  },
  {
    id: "est2_trans_23",
    question: "The function $g(x) = -|3x - 9| + 6$ can be obtained from the parent function $f(x) = |x|$ by which of the following sequences of transformations?",
    options: [
      "A horizontal shift right by $3$ units, a vertical stretch by a factor of $3$, a reflection across the $x$-axis, and a vertical shift up by $6$ units",
      "A horizontal shift right by $9$ units, a vertical stretch by a factor of $3$, a reflection across the $x$-axis, and a vertical shift up by $6$ units",
      "A horizontal shift left by $3$ units, a horizontal compression by a factor of $\\frac{1}{3}$, and a vertical shift down by $6$ units",
      "A horizontal shift left by $9$ units, a reflection across the $y$-axis, and a vertical shift up by $6$ units"
    ],
    correctAnswer: 0,
    explanation: "Factor out $3$ inside the absolute value bars:\n$$g(x) = -|3(x - 3)| + 6 = -3|x - 3| + 6$$\nNow analyze each component:\n- $(x - 3)$: Horizontal shift right by $3$ units.\n- Multiplier of $3$: Vertical stretch by a factor of $3$.\n- Negative sign in front: Reflection across the $x$-axis.\n- $+6$: Vertical shift up by $6$ units.",
    category: "transformations"
  },
  {
    id: "est2_trans_24",
    question: "What is the maximum value and the range of the function $h(x) = 7 - |5 - 2x|$?",
    options: [
      "Maximum value is $7$; Range: $(-\\infty, 7]$",
      "Maximum value is $5$; Range: $(-\\infty, 5]$",
      "Minimum value is $7$; Range: $[7, \\infty)$",
      "Maximum value is $7$; Range: $[0, 7]$"
    ],
    correctAnswer: 0,
    explanation: "Since the absolute value is always non-negative:\n$$|5 - 2x| \\ge 0$$\nMultiplying by $-1$ reverses the inequality:\n$$-|5 - 2x| \\le 0$$\nAdding $7$:\n$$7 - |5 - 2x| \\le 7$$\nThe maximum value is $7$, which occurs when $5 - 2x = 0 \\implies x = 2.5$.\nAs $x$ moves away from $2.5$, the value of $-|5 - 2x|$ decreases without bound towards $-\\infty$.\nTherefore, the range is $(-\\infty, 7]$.",
    category: "transformations"
  },
  {
    id: "est2_trans_25",
    question: "What is the range of the function $f(x) = |x + 3| - |x - 1|$?",
    options: [
      "$[-4, 4]$",
      "$[0, 4]$",
      "$(-\\infty, \\infty)$",
      "$[-2, 2]$"
    ],
    correctAnswer: 0,
    explanation: "Evaluate the piecewise definition of $f(x)$ across the transition points $x = -3$ and $x = 1$:\n1. For $x \\le -3$:\n$$f(x) = -(x + 3) - (-(x - 1)) = -x - 3 + x - 1 = -4$$\n2. For $-3 < x < 1$:\n$$f(x) = (x + 3) - (-(x - 1)) = x + 3 + x - 1 = 2x + 2$$\nThis is a straight line increasing from $2(-3) + 2 = -4$ to $2(1) + 2 = 4$.\n3. For $x \\ge 1$:\n$$f(x) = (x + 3) - (x - 1) = x + 3 - x + 1 = 4$$\nThus, the function is bounded between $-4$ and $4$, and assumes every value in between. The range is $[-4, 4]$.",
    category: "transformations"
  },
  {
    id: "est2_trans_26",
    question: "The table below shows values for an absolute value function $f(x) = a|x - h| + k$.\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">$x$</th>\n      <th class=\"border border-gray-400 px-2 py-1\">$f(x)$</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$-1$</td><td class=\"border border-gray-400 px-2 py-1\">$5$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$1$</td><td class=\"border border-gray-400 px-2 py-1\">$1$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$2$</td><td class=\"border border-gray-400 px-2 py-1\">$-1$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$3$</td><td class=\"border border-gray-400 px-2 py-1\">$1$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$5$</td><td class=\"border border-gray-400 px-2 py-1\">$5$</td></tr>\n  </tbody>\n</table>\n\nWhat is the value of $f(-3)$?",
    options: [
      "$9$",
      "$11$",
      "$7$",
      "$13$"
    ],
    correctAnswer: 0,
    explanation: "1. The minimum point of the table is at $(2, -1)$, and the values are symmetric around $x = 2$ ($f(1) = f(3) = 1$, $f(-1) = f(5) = 5$).\n2. Thus, the vertex is $(h, k) = (2, -1)$.\n3. Calculate the slope $a$ for $x > 2$:\n$$a = \\frac{f(3) - f(2)}{3 - 2} = \\frac{1 - (-1)}{1} = 2$$\n4. The full equation is $f(x) = 2|x - 2| - 1$.\n5. Evaluate at $x = -3$:\n$$f(-3) = 2|-3 - 2| - 1 = 2|-5| - 1 = 2(5) - 1 = 10 - 1 = 9$$",
    category: "transformations"
  },
  {
    id: "est2_trans_27",
    question: "The quadratic function $f(x) = x^2 - 6x + 5$ has range $[-4, \\infty)$. What is the range of the transformed function $g(x) = |f(x)|$?",
    options: [
      "$[0, \\infty)$",
      "$[4, \\infty)$",
      "$[0, 4]$",
      "$[-4, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: "1. The roots of $f(x) = (x - 1)(x - 5)$ are $x = 1$ and $x = 5$.\n2. At these roots, $f(x) = 0$, so $g(1) = |0| = 0$ and $g(5) = |0| = 0$.\n3. The vertex of $f(x)$ is at $x = 3$, where $f(3) = (3)^2 - 6(3) + 5 = -4$. In $g(x)$, this vertex reflects upward to $|-4| = 4$.\n4. For large values of $|x|$, $f(x) \\to \\infty$, so $|f(x)| \\to \\infty$.\n5. Because the absolute value can never be negative and achieves $0$, the range of $g(x) = |f(x)|$ is $[0, \\infty)$.",
    category: "transformations"
  },
  {
    id: "est2_trans_28",
    question: "The graph of $f(x) = (x - 2)^2 - 9$ is transformed into $g(x) = f(|x|) = (|x| - 2)^2 - 9$. How many distinct real zeros does $g(x)$ have?",
    options: [
      "$2$",
      "$4$",
      "$3$",
      "$1$"
    ],
    correctAnswer: 0,
    explanation: "Set $g(x) = 0$:\n$$(|x| - 2)^2 - 9 = 0 \\implies (|x| - 2)^2 = 9$$\nTaking square roots:\n$$|x| - 2 = 3 \\quad \\text{or} \\quad |x| - 2 = -3$$\nCase 1: $|x| - 2 = 3 \\implies |x| = 5 \\implies x = 5 \\text{ or } x = -5$.\nCase 2: $|x| - 2 = -3 \\implies |x| = -1$, which has no real solutions because $|x| \\ge 0$.\nTherefore, there are exactly $2$ distinct real zeros ($x = -5$ and $x = 5$).",
    category: "transformations"
  },
  {
    id: "est2_trans_29",
    question: "What is the domain of the function $f(x) = \\sqrt{10 - |2x - 4|}$?",
    options: [
      "$[-3, 7]$",
      "$[-7, 3]$",
      "$[0, 7]$",
      "$(-\\infty, -3] \\cup [7, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: "The expression under the square root must be greater than or equal to zero:\n$$10 - |2x - 4| \\ge 0$$\n$$|2x - 4| \\le 10$$\nApplying the absolute value inequality property $|u| \\le c \\iff -c \\le u \\le c$:\n$$-10 \\le 2x - 4 \\le 10$$\nAdd $4$ to all parts:\n$$-6 \\le 2x \\le 14$$\nDivide all parts by $2$:\n$$-3 \\le x \\le 7$$\nThus, the domain is $[-3, 7]$.",
    category: "transformations"
  },
  {
    id: "est2_trans_30",
    question: "The vertex of $f(x) = 4|x + 1| - 3$ is transformed by shifting $5$ units right, reflecting across the $x$-axis, and shifting $2$ units down. What are the coordinates of the new vertex?",
    options: [
      "$(4, 1)$",
      "$(4, 5)$",
      "$(-6, 1)$",
      "$(4, -5)$"
    ],
    correctAnswer: 0,
    explanation: "1. The original vertex of $f(x)$ is $(h, k) = (-1, -3)$.\n2. Shifting $5$ units right adds $5$ to the $x$-coordinate:\n$$x = -1 + 5 = 4$$\n3. Reflecting across the $x$-axis negates the $y$-coordinate:\n$$y = -(-3) = 3$$\n4. Shifting $2$ units down subtracts $2$ from the $y$-coordinate:\n$$y = 3 - 2 = 1$$\nThus, the new vertex is $(4, 1)$.",
    category: "transformations"
  },

  // ==========================================
  // SECTION 4: EXPONENTIAL FUNCTIONS & DOMAIN/RANGE MASTERY (Questions 31-40)
  // ==========================================
  {
    id: "est2_trans_31",
    question: "What is the equation of the horizontal asymptote and the range of the exponential function $f(x) = 2^{x+3} - 5$?",
    options: [
      "Asymptote: $y = -5$; Range: $(-5, \\infty)$",
      "Asymptote: $y = -5$; Range: $[-5, \\infty)$",
      "Asymptote: $x = -3$; Range: $(-\\infty, \\infty)$",
      "Asymptote: $y = 3$; Range: $(3, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: "For any exponential function of the form $f(x) = a \\cdot b^{x-h} + k$ with $a > 0$:\n1. As $x \\to -\\infty$, $2^{x+3} \\to 0$. Therefore, $f(x) \\to -5$. The horizontal asymptote is the line $y = -5$.\n2. Since $2^{x+3} > 0$ for all real $x$, $f(x) > -5$. It never actually touches or crosses $-5$.\n3. Therefore, the range is strictly open: $(-5, \\infty)$.",
    category: "transformations"
  },
  {
    id: "est2_trans_32",
    question: "The graph of the exponential function $f(x) = b^x + k$ is shown in the $xy$-plane above. What is the value of $f(3)$?",
    svg: `<svg viewBox="-4 -2 8 10" width="280" height="280" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
      <defs>
        <marker id="arrow4" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#000000" />
        </marker>
        <pattern id="grid4" width="1" height="1" patternUnits="userSpaceOnUse">
          <path d="M 1 0 L 0 0 0 1" fill="none" stroke="#e5e7eb" stroke-width="0.08" />
        </pattern>
      </defs>
      <rect x="-4" y="-2" width="8" height="10" fill="url(#grid4)" />
      <!-- Axes -->
      <line x1="-3.5" y1="0" x2="3.5" y2="0" stroke="#000000" stroke-width="0.12" marker-end="url(#arrow4)" />
      <line x1="0" y1="7.5" x2="0" y2="-1.5" stroke="#000000" stroke-width="0.12" marker-end="url(#arrow4)" />
      <text x="3.2" y="0.8" font-size="0.6" font-style="italic">x</text>
      <text x="-0.8" y="-1" font-size="0.6" font-style="italic">y</text>
      <text x="-0.6" y="0.6" font-size="0.5" font-style="italic">O</text>
      <!-- Horizontal Asymptote y = 1 => SVG y = -1 -->
      <line x1="-3.5" y1="-1" x2="3.5" y2="-1" stroke="#000000" stroke-width="0.08" stroke-dasharray="0.2 0.2" />
      <text x="2" y="-1.2" font-size="0.45">y = 1</text>
      <!-- Ticks -->
      <line x1="1" y1="-0.15" x2="1" y2="0.15" stroke="#000000" stroke-width="0.08" />
      <text x="0.9" y="0.7" font-size="0.45">1</text>
      <line x1="2" y1="-0.15" x2="2" y2="0.15" stroke="#000000" stroke-width="0.08" />
      <text x="1.9" y="0.7" font-size="0.45">2</text>
      <line x1="-0.15" y1="-2" x2="0.15" y2="-2" stroke="#000000" stroke-width="0.08" />
      <text x="0.3" y="-1.8" font-size="0.45">2</text>
      <line x1="-0.15" y1="-3" x2="0.15" y2="-3" stroke="#000000" stroke-width="0.08" />
      <text x="0.3" y="-2.8" font-size="0.45">3</text>
      <line x1="-0.15" y1="-5" x2="0.15" y2="-5" stroke="#000000" stroke-width="0.08" />
      <text x="0.3" y="-4.8" font-size="0.45">5</text>
      <!-- Curve y = 2^x + 1 => SVG y inverted -->
      <!-- Points: (-2, -1.25), (0, -2), (1, -3), (2, -5) -->
      <path d="M -3 -1.125 Q 0.5 -1.8 2 -5" fill="none" stroke="#000000" stroke-width="0.16" />
      <circle cx="0" cy="-2" r="0.15" fill="#000000" />
      <circle cx="1" cy="-3" r="0.15" fill="#000000" />
      <circle cx="2" cy="-5" r="0.15" fill="#000000" />
    </svg>`,
    options: [
      "$9$",
      "$8$",
      "$10$",
      "$7$"
    ],
    correctAnswer: 0,
    explanation: "1. The horizontal dashed line indicates a horizontal asymptote at $y = 1$, which means $k = 1$.\n2. The curve crosses the $y$-axis at $(0, 2)$:\n$$f(0) = b^0 + 1 = 1 + 1 = 2 \\quad \\text{(consistent)}$$\n3. The graph passes through $(1, 3)$:\n$$f(1) = b^1 + 1 = 3 \\implies b = 2$$\n4. The formula is $f(x) = 2^x + 1$.\n5. Therefore:\n$$f(3) = 2^3 + 1 = 8 + 1 = 9$$",
    category: "transformations"
  },
  {
    id: "est2_trans_33",
    question: "What are the domain, range, and horizontal asymptote of the function $g(x) = -3 \\cdot 2^{x-1} + 6$?",
    options: [
      "Domain: $(-\\infty, \\infty)$, Range: $(-\\infty, 6)$, Asymptote: $y = 6$",
      "Domain: $(-\\infty, \\infty)$, Range: $(6, \\infty)$, Asymptote: $y = 6$",
      "Domain: $[1, \\infty)$, Range: $(-\\infty, 6]$, Asymptote: $y = 6$",
      "Domain: $(-\\infty, \\infty)$, Range: $(-\\infty, 3)$, Asymptote: $y = 3$"
    ],
    correctAnswer: 0,
    explanation: "1. **Domain:** The exponent can take any real number, so the domain is $(-\\infty, \\infty)$.\n2. **Asymptote:** As $x \\to -\\infty$, $2^{x-1} \\to 0$, so $g(x) \\to 6$. The horizontal asymptote is $y = 6$.\n3. **Range:** Since $2^{x-1} > 0$ for all real $x$, multiplying by $-3$ gives $-3 \\cdot 2^{x-1} < 0$. Adding $6$ gives $g(x) < 6$.\nTherefore, the range is $(-\\infty, 6)$.",
    category: "transformations"
  },
  {
    id: "est2_trans_34",
    question: "What is the $x$-intercept of the transformed exponential function $f(x) = 4\\left(\\frac{1}{2}\\right)^{x-1} - 1$?",
    options: [
      "$(3, 0)$",
      "$(2, 0)$",
      "$(1, 0)$",
      "$(4, 0)$"
    ],
    correctAnswer: 0,
    explanation: "To find the $x$-intercept, set $f(x) = 0$:\n$$4\\left(\\frac{1}{2}\\right)^{x-1} - 1 = 0$$\n$$4\\left(\\frac{1}{2}\\right)^{x-1} = 1$$\n$$\\left(\\frac{1}{2}\\right)^{x-1} = \\frac{1}{4}$$\nExpress $\\frac{1}{4}$ with base $\\frac{1}{2}$:\n$$\\left(\\frac{1}{2}\\right)^{x-1} = \\left(\\frac{1}{2}\\right)^2$$\nSince the bases are identical, equate the exponents:\n$$x - 1 = 2 \\implies x = 3$$\nThus, the $x$-intercept is at $(3, 0)$.",
    category: "transformations"
  },
  {
    id: "est2_trans_35",
    question: "The exponential function $f(x) = e^{x+2} - 3$ has an inverse function $f^{-1}(x)$. What is the domain of $f^{-1}(x)$?",
    options: [
      "$(-3, \\infty)$",
      "$[-3, \\infty)$",
      "$(0, \\infty)$",
      "$(-\\infty, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: "A fundamental property of inverse functions is:\n$$\\text{Domain of } f^{-1}(x) = \\text{Range of } f(x)$$\nFor $f(x) = e^{x+2} - 3$:\n- The exponential term $e^{x+2} > 0$ for all real $x$.\n- Therefore, $f(x) = e^{x+2} - 3 > -3$.\n- The range of $f(x)$ is $(-3, \\infty)$.\nConsequently, the domain of $f^{-1}(x) = \\ln(x + 3) - 2$ is $(-3, \\infty)$.",
    category: "transformations"
  },
  {
    id: "est2_trans_36",
    question: "The table below shows values for a transformed exponential function $f(x) = a \\cdot b^x + c$.\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">$x$</th>\n      <th class=\"border border-gray-400 px-2 py-1\">$f(x)$</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$0$</td><td class=\"border border-gray-400 px-2 py-1\">$-1$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$1$</td><td class=\"border border-gray-400 px-2 py-1\">$1$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$2$</td><td class=\"border border-gray-400 px-2 py-1\">$5$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$3$</td><td class=\"border border-gray-400 px-2 py-1\">$13$</td></tr>\n  </tbody>\n</table>\n\nWhat is the horizontal asymptote of this function?",
    options: [
      "$y = -3$",
      "$y = -1$",
      "$y = 0$",
      "$y = -2$"
    ],
    correctAnswer: 0,
    explanation: "1. Look at the first differences of $f(x)$:\n- $\\Delta_1 = 1 - (-1) = 2$\n- $\\Delta_2 = 5 - 1 = 4$\n- $\\Delta_3 = 13 - 5 = 8$\n2. The ratio of successive differences is $\\frac{4}{2} = \\frac{8}{4} = 2$. Thus, the base is $b = 2$.\n3. Now write system for $a$ and $c$:\n- $f(0) = a(2^0) + c = a + c = -1$\n- $f(1) = a(2^1) + c = 2a + c = 1$\n4. Subtract the first equation from the second:\n$$(2a + c) - (a + c) = 1 - (-1) \\implies a = 2$$\n5. Substitute $a = 2$ back:\n$$2 + c = -1 \\implies c = -3$$\n6. The function is $f(x) = 2 \\cdot 2^x - 3 = 2^{x+1} - 3$.\nAs $x \\to -\\infty$, $2^{x+1} \\to 0$, so $f(x) \\to -3$. The horizontal asymptote is $y = -3$.",
    category: "transformations"
  },
  {
    id: "est2_trans_37",
    question: "What is the domain of the composite function $h(x) = \\sqrt{16 - 2^{x+1}}$?",
    options: [
      "$(-\\infty, 3]$",
      "$[3, \\infty)$",
      "$(-\\infty, 4]$",
      "$[-1, 3]$"
    ],
    correctAnswer: 0,
    explanation: "For the square root to be real, the radicand must be non-negative:\n$$16 - 2^{x+1} \\ge 0$$\n$$2^{x+1} \\le 16$$\nWrite $16$ as a power of $2$:\n$$2^{x+1} \\le 2^4$$\nSince the base $2 > 1$, the exponential function is strictly increasing, so the inequality preserves direction:\n$$x + 1 \\le 4 \\implies x \\le 3$$\nThus, the domain is $(-\\infty, 3]$.",
    category: "transformations"
  },
  {
    id: "est2_trans_38",
    question: "Let $f(x) = x^2 - 4x - 5$. What is the range of the transformed function $g(x) = |f(x)| + 3$?",
    options: [
      "$[3, \\infty)$",
      "$[12, \\infty)$",
      "$[0, \\infty)$",
      "$[-6, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: "1. Factor the quadratic: $f(x) = (x - 5)(x + 1)$.\n2. The roots are $x = -1$ and $x = 5$, where $f(x) = 0$.\n3. The vertex of $f(x)$ occurs at $x = 2$, where $f(2) = (2)^2 - 4(2) - 5 = -9$.\n4. Taking the absolute value $|f(x)|$ reflects all negative values above the $x$-axis. Since $f(x)$ reaches $0$ at its roots, the minimum value of $|f(x)|$ is $0$.\n5. Adding $3$ shifts the entire range upward by $3$:\n$$\\min g(x) = 0 + 3 = 3$$\nSince $|f(x)|$ increases without bound as $|x| \\to \\infty$, the range of $g(x)$ is $[3, \\infty)$.",
    category: "transformations"
  },
  {
    id: "est2_trans_39",
    question: "Consider the following four functions:\n\nI. $f_1(x) = -2(x - 1)^2 + 5$\nII. $f_2(x) = -\\sqrt{x + 3} + 5$\nIII. $f_3(x) = -|x - 2| + 5$\nIV. $f_4(x) = -3^{x} + 5$\n\nWhich of these functions has a range of $(-\\infty, 5)$ rather than $(-\\infty, 5]$?",
    options: [
      "IV only",
      "II and IV only",
      "I, II, and III only",
      "All four functions"
    ],
    correctAnswer: 0,
    explanation: "Let us examine the maximum value achieved by each function:\n- **$f_1(x)$:** At $x = 1$, $f_1(1) = -2(0) + 5 = 5$. Since $5$ is attained, the range is $(-\\infty, 5]$.\n- **$f_2(x)$:** At $x = -3$, $f_2(-3) = -\\sqrt{0} + 5 = 5$. Since $5$ is attained, the range is $(-\\infty, 5]$.\n- **$f_3(x)$:** At $x = 2$, $f_3(2) = -|0| + 5 = 5$. Since $5$ is attained, the range is $(-\\infty, 5]$.\n- **$f_4(x)$:** Since $3^x > 0$ for all real $x$, $-3^x < 0$ strictly. Therefore, $-3^x + 5 < 5$ strictly for all real $x$. The function approaches $5$ asymptotically as $x \\to -\\infty$ but never equals $5$.\nThus, only function IV has the strictly open range $(-\\infty, 5)$.",
    category: "transformations"
  },
  {
    id: "est2_trans_40",
    question: "An exponential function $f(x) = a \\cdot 3^{x - h} + k$ has horizontal asymptote $y = -4$, passes through $(1, -1)$ and $(2, 5)$. What is the domain, range, and the value of $a + h + k$?",
    options: [
      "Domain: $(-\\infty, \\infty)$, Range: $(-4, \\infty)$, $a + h + k = -3$",
      "Domain: $(-\\infty, \\infty)$, Range: $[-4, \\infty)$, $a + h + k = -3$",
      "Domain: $(-\\infty, \\infty)$, Range: $(-4, \\infty)$, $a + h + k = 0$",
      "Domain: $[0, \\infty)$, Range: $(-4, \\infty)$, $a + h + k = -4$"
    ],
    correctAnswer: 0,
    explanation: "1. The horizontal asymptote of an exponential function $y = a \\cdot b^{x-h} + k$ is $y = k$. Therefore, $k = -4$.\n2. Substitute the points $(1, -1)$ and $(2, 5)$:\n$$-1 = a \\cdot 3^{1 - h} - 4 \\implies a \\cdot 3^{1 - h} = 3$$\n$$5 = a \\cdot 3^{2 - h} - 4 \\implies a \\cdot 3^{2 - h} = 9$$\n3. Dividing the second equation by the first confirms consistency:\n$$\\frac{a \\cdot 3^{2-h}}{a \\cdot 3^{1-h}} = 3 = \\frac{9}{3}$$\nFrom $a \\cdot 3^{1-h} = 3^1$, we can choose the canonical representation $h = 0$ which yields $a = 1$ (or $h = 1$ with $a = 3$, giving $f(x) = 3^x - 4$).\n4. In canonical form $f(x) = 1 \\cdot 3^{x-0} - 4 = 3^x - 4$:\n$$a = 1, \\quad h = 0, \\quad k = -4$$\n$$a + h + k = 1 + 0 + (-4) = -3$$\n5. Domain of any exponential is $(-\\infty, \\infty)$.\n6. Since $3^x > 0$, $f(x) > -4$, so the range is $(-4, \\infty)$ strictly.",
    category: "transformations"
  }
];
