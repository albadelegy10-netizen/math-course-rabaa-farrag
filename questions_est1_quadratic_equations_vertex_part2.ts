import { Question } from "./types";

export const EST1_QUADRATIC_EQUATIONS_VERTEX_PART2_SET: Question[] = [
  {
    id: "est1_qev2_01",
    question: "In the $xy$-plane, line $x=2$ is the axis of symmetry of the graph of $f(x)=5x^2-kx+2$. What is the value of $k$?",
    options: [
      "20",
      "25",
      "30",
      "35"
    ],
    correctAnswer: 0,
    explanation: "The axis of symmetry for a parabola $f(x) = ax^2 + bx + c$ is given by $x = -\\frac{b}{2a}$. Here, $a = 5$ and $b = -k$. So, $2 = -\\frac{-k}{2(5)} \\Rightarrow 2 = \\frac{k}{10} \\Rightarrow k = 20$."
  },
  {
    id: "est1_qev2_02",
    question: "Questions 2 and 4 refer to the following information.\n\n$h(t) = -16t^2 + 128t + 320$\n\nA science class determined that the motion of a ball launched from the top of a 10-story building could be described by the function above, where $t$ represents the time the ball is in the air in seconds and $h$, the height in feet of the ball above the ground.\n\nWhat is the number of seconds it takes for the ball to reach its peak?",
    options: [
      "2",
      "4",
      "8",
      "10"
    ],
    correctAnswer: 1,
    explanation: "The time it takes to reach the peak is the x-coordinate of the vertex, given by $t = -\\frac{b}{2a}$. Here, $a = -16$ and $b = 128$. So, $t = -\\frac{128}{2(-16)} = -\\frac{128}{-32} = 4$ seconds."
  },
  {
    id: "est1_qev2_03",
    question: "The graph of $y = \\frac{1}{3}x(x-6)$ is shown in the $xy$-plane above. Which of the following are the coordinates of vertex $P$?",
    svg: `<svg viewBox="-2 -6 10 8" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
        </marker>
      </defs>
      <line x1="-2" y1="0" x2="8" y2="0" stroke="black" stroke-width="0.1" marker-end="url(#arrow)" />
      <line x1="0" y1="-5" x2="0" y2="2" stroke="black" stroke-width="0.1" marker-end="url(#arrow)" />
      <text x="7.5" y="-0.5" font-size="0.8">x</text>
      <text x="-0.5" y="1.5" font-size="0.8">y</text>
      <text x="-0.5" y="0.5" font-size="0.8">O</text>
      <text x="5.5" y="0.8" font-size="0.8">6</text>
      <text x="3" y="-3.5" font-size="0.8">P</text>
      <path d="M -1 2.33 Q 3 -9 7 2.33" fill="none" stroke="black" stroke-width="0.1" />
      <circle cx="3" cy="-3" r="0.15" fill="black" />
    </svg>`,
    options: [
      "$(3, -2)$",
      "$(2, -4)$",
      "$(3, -3)$",
      "$(3, -4.5)$"
    ],
    correctAnswer: 2,
    explanation: "The roots of the parabola are $x = 0$ and $x = 6$. The x-coordinate of the vertex is the midpoint of the roots: $x = \\frac{0 + 6}{2} = 3$. To find the y-coordinate, substitute $x = 3$ into the equation: $y = \\frac{1}{3}(3)(3 - 6) = 1(-3) = -3$. So the vertex is $(3, -3)$."
  },
  {
    id: "est1_qev2_04",
    question: "Questions 2 and 4 refer to the following information.\n\n$h(t) = -16t^2 + 128t + 320$\n\nA science class determined that the motion of a ball launched from the top of a 10-story building could be described by the function above, where $t$ represents the time the ball is in the air in seconds and $h$, the height in feet of the ball above the ground.\n\nAt what time will the ball hit the ground?",
    options: [
      "5",
      "8",
      "10",
      "12"
    ],
    correctAnswer: 2,
    explanation: "The ball hits the ground when $h(t) = 0$. So, $-16t^2 + 128t + 320 = 0$. Divide by $-16$: $t^2 - 8t - 20 = 0$. Factor: $(t - 10)(t + 2) = 0$. The solutions are $t = 10$ and $t = -2$. Since time must be positive, $t = 10$."
  },
  {
    id: "est1_qev2_05",
    question: "Which of the following is equivalent to $f(x) = x^2 - 6x + 7$?",
    options: [
      "$f(x) = (x+3)^2 + 5$",
      "$f(x) = (x-3)^2 + 2$",
      "$f(x) = (x-3)^2 - 2$",
      "$f(x) = (x-7)(x+1)$"
    ],
    correctAnswer: 2,
    explanation: "Complete the square for $x^2 - 6x + 7$. Take half of $-6$, which is $-3$, and square it to get $9$. Add and subtract $9$: $(x^2 - 6x + 9) - 9 + 7 = (x - 3)^2 - 2$."
  },
  {
    id: "est1_qev2_06",
    question: "$f(x) = ax^2 - 15$\n\nFor the function $f$ defined above, $a$ is a constant and $f(3) = 10$. Which of the following is equal to the value of $f(5)$?",
    options: [
      "$f(0)$",
      "$f(3)$",
      "$f(-3)$",
      "$f(-5)$"
    ],
    correctAnswer: 3,
    explanation: "The function $f(x) = ax^2 - 15$ is an even function because $f(-x) = a(-x)^2 - 15 = ax^2 - 15 = f(x)$. Therefore, $f(5) = f(-5)$."
  },
  {
    id: "est1_qev2_07",
    question: "What is the vertex form of the function $f(x) = 3x^2 - 9x + 1$?",
    options: [
      "$f(x) = 3(x - \\frac{3}{2})^2 - \\frac{23}{4}$",
      "$f(x) = 3(x - \\frac{3}{2})^2 + \\frac{23}{4}$",
      "$f(x) = 3(x + \\frac{3}{2})^2 - \\frac{23}{4}$",
      "$f(x) = 3(x + \\frac{3}{2})^2 + \\frac{23}{4}$"
    ],
    correctAnswer: 0,
    explanation: "The x-coordinate of the vertex is $h = -\\frac{b}{2a} = -\\frac{-9}{2(3)} = \\frac{9}{6} = \\frac{3}{2}$. The y-coordinate is $k = f(\\frac{3}{2}) = 3(\\frac{3}{2})^2 - 9(\\frac{3}{2}) + 1 = 3(\\frac{9}{4}) - \\frac{27}{2} + 1 = \\frac{27}{4} - \\frac{54}{4} + \\frac{4}{4} = -\\frac{23}{4}$. So the vertex form is $f(x) = 3(x - \\frac{3}{2})^2 - \\frac{23}{4}$."
  },
  {
    id: "est1_qev2_08",
    question: "Given $f(x) = 2x^2 + ax - 1$. What is the value of $a$ if the axis of symmetry of the graph of $f$ is equal to $-2.5$?",
    options: [
      "$-10$",
      "5",
      "10",
      "20"
    ],
    correctAnswer: 2,
    explanation: "The axis of symmetry is $x = -\\frac{b}{2a}$. Here, the coefficient of $x^2$ is $2$, and the coefficient of $x$ is $a$. So, $-2.5 = -\\frac{a}{2(2)} \\Rightarrow -2.5 = -\\frac{a}{4} \\Rightarrow a = 10$."
  },
  {
    id: "est1_qev2_09",
    question: "Which of the following statement(s) is/are true regarding the graph below?\n\nI. The coordinates of the vertex of the parabola are $(1, 0)$.\nII. The axis of symmetry is at $x = -1$.\nIII. The equation of the parabola is $y = -x^2 + 2x - 1$.",
    svg: `<svg viewBox="-3 -5 5 2" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
        </marker>
      </defs>
      <g stroke="lightgray" stroke-width="0.05">
        <line x1="-3" y1="-4" x2="2" y2="-4" />
        <line x1="-3" y1="-3" x2="2" y2="-3" />
        <line x1="-3" y1="-2" x2="2" y2="-2" />
        <line x1="-3" y1="-1" x2="2" y2="-1" />
        <line x1="-3" y1="0" x2="2" y2="0" />
        <line x1="-3" y1="1" x2="2" y2="1" />
        <line x1="-2" y1="-5" x2="-2" y2="2" />
        <line x1="-1" y1="-5" x2="-1" y2="2" />
        <line x1="0" y1="-5" x2="0" y2="2" />
        <line x1="1" y1="-5" x2="1" y2="2" />
      </g>
      <line x1="-3" y1="0" x2="2" y2="0" stroke="black" stroke-width="0.1" marker-end="url(#arrow)" />
      <line x1="0" y1="-5" x2="0" y2="2" stroke="black" stroke-width="0.1" marker-end="url(#arrow)" />
      <text x="-0.2" y="0.3" font-size="0.3">0</text>
      <text x="0.8" y="0.3" font-size="0.3">1</text>
      <text x="-1.2" y="0.3" font-size="0.3">-1</text>
      <text x="-0.3" y="-0.8" font-size="0.3">-1</text>
      <path d="M -1 -4 Q 1 4 3 -4" fill="none" stroke="black" stroke-width="0.1" />
    </svg>`,
    options: [
      "I only",
      "II only",
      "I and II",
      "I and III"
    ],
    correctAnswer: 3,
    explanation: "Looking at the graph, the vertex is at $(1, 0)$, so statement I is true. The axis of symmetry is $x = 1$, so statement II is false. Since the vertex is $(1, 0)$ and it passes through $(0, -1)$, the equation is $y = a(x-1)^2 + 0$. Substituting $(0, -1)$ gives $-1 = a(0-1)^2 \\Rightarrow a = -1$. So $y = -(x-1)^2 = -(x^2 - 2x + 1) = -x^2 + 2x - 1$. Statement III is true."
  },
  {
    id: "est1_qev2_10",
    question: "What is the equation of the tangent to this parabola at the vertex? (Refer to the graph in the previous question)",
    options: [
      "$x = 0$",
      "$y = 0$",
      "$y = x$",
      "$y = -x$"
    ],
    correctAnswer: 1,
    explanation: "The vertex of the parabola is at $(1, 0)$. The tangent line at the vertex of a vertical parabola is a horizontal line passing through the y-coordinate of the vertex. Since the y-coordinate is 0, the equation of the tangent line is $y = 0$ (the x-axis)."
  },
  {
    id: "est1_qev2_11",
    question: "What is the range of the function $f(x) = x^2 + 4x - 3$?",
    options: [
      "$[-1, +\\infty)$",
      "$[1, +\\infty)$",
      "$[7, +\\infty)$",
      "$[-7, +\\infty)$"
    ],
    correctAnswer: 3,
    explanation: "The function is a parabola opening upwards (since $a=1 > 0$). The minimum value occurs at the vertex. The x-coordinate of the vertex is $x = -\\frac{b}{2a} = -\\frac{4}{2(1)} = -2$. The y-coordinate is $f(-2) = (-2)^2 + 4(-2) - 3 = 4 - 8 - 3 = -7$. Therefore, the range is $[-7, +\\infty)$."
  },
  {
    id: "est1_qev2_12",
    question: "What is the abscissa of the vertex of the function $f(x) = 3x^2 - 18x + 4$?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 2,
    explanation: "The abscissa is the x-coordinate of the vertex, which is given by $x = -\\frac{b}{2a}$. Here, $a = 3$ and $b = -18$. So, $x = -\\frac{-18}{2(3)} = \\frac{18}{6} = 3$."
  },
  {
    id: "est1_qev2_13",
    question: "What is the square of the ordinate of the vertex of the graph of the function $f(x) = 3x^2 + 6x$?",
    options: [
      "$-6$",
      "$-2$",
      "1",
      "9"
    ],
    correctAnswer: 3,
    explanation: "First, find the vertex. The abscissa (x-coordinate) is $x = -\\frac{b}{2a} = -\\frac{6}{2(3)} = -1$. The ordinate (y-coordinate) is $f(-1) = 3(-1)^2 + 6(-1) = 3 - 6 = -3$. The square of the ordinate is $(-3)^2 = 9$."
  },
  {
    id: "est1_qev2_14",
    question: "The graph below depicts a function $f(x)$. How many solutions does the equation $f(x) = 0$ admit?",
    svg: `<svg viewBox="-12 -8 24 16" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
        </marker>
      </defs>
      <g stroke="lightgray" stroke-width="0.2">
        <line x1="-12" y1="-5" x2="12" y2="-5" />
        <line x1="-12" y1="5" x2="12" y2="5" />
        <line x1="-10" y1="-8" x2="-10" y2="8" />
        <line x1="-5" y1="-8" x2="-5" y2="8" />
        <line x1="5" y1="-8" x2="5" y2="8" />
        <line x1="10" y1="-8" x2="10" y2="8" />
      </g>
      <line x1="-12" y1="0" x2="12" y2="0" stroke="black" stroke-width="0.3" marker-end="url(#arrow)" />
      <line x1="0" y1="8" x2="0" y2="-8" stroke="black" stroke-width="0.3" marker-end="url(#arrow)" />
      <text x="-11" y="1.5" font-size="1.5">-10</text>
      <text x="-6" y="1.5" font-size="1.5">-5</text>
      <text x="0.5" y="1.5" font-size="1.5">0</text>
      <text x="4.5" y="1.5" font-size="1.5">5</text>
      <text x="9" y="1.5" font-size="1.5">10</text>
      <text x="0.5" y="-4.5" font-size="1.5">5</text>
      <text x="0.5" y="5.5" font-size="1.5">-5</text>
      <path d="M -3 -8 C -1 10, 1 10, 2 -2 C 2.5 -8, 3.5 -8, 4 -8" fill="none" stroke="red" stroke-width="0.4" />
    </svg>`,
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 3,
    explanation: "The solutions to $f(x) = 0$ are the x-intercepts of the graph. Looking at the graph, the curve crosses the x-axis at 4 distinct points. Therefore, there are 4 solutions."
  },
  {
    id: "est1_qev2_15",
    question: "Which of the following is equivalent to $f(x) = 2x^2 - 12x + 8$?",
    options: [
      "$(2x - 6)^2 - 28$",
      "$2(x - 3)^2 - 10$",
      "$2(x - 9)^2 + 5$",
      "$4(x - 3)^2 - 5$"
    ],
    correctAnswer: 1,
    explanation: "Complete the square: $f(x) = 2(x^2 - 6x) + 8$. Take half of $-6$ (which is $-3$) and square it to get $9$. Add and subtract $9$ inside the parenthesis: $f(x) = 2(x^2 - 6x + 9 - 9) + 8 = 2((x - 3)^2 - 9) + 8 = 2(x - 3)^2 - 18 + 8 = 2(x - 3)^2 - 10$."
  },
  {
    id: "est1_qev2_16",
    question: "What is the abscissa of the vertex of the parabola defined by the quadratic function below?\n\n$g(x) = x^2 - 7x - 4$",
    options: [
      "3",
      "3.66",
      "7",
      "3.5"
    ],
    correctAnswer: 3,
    explanation: "The abscissa is the x-coordinate of the vertex, $x = -\\frac{b}{2a}$. Here $a = 1$ and $b = -7$. So $x = -\\frac{-7}{2(1)} = \\frac{7}{2} = 3.5$."
  },
  {
    id: "est1_qev2_17",
    question: "What is the smallest value of the range of the function $f(x) = 4x^2 - 2x + 1$?",
    options: [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$",
      "1"
    ],
    correctAnswer: 2,
    explanation: "Since $a = 4 > 0$, the parabola opens upwards and the smallest value is the y-coordinate of the vertex. The x-coordinate is $x = -\\frac{b}{2a} = -\\frac{-2}{2(4)} = \\frac{2}{8} = \\frac{1}{4}$. The y-coordinate is $f(\\frac{1}{4}) = 4(\\frac{1}{4})^2 - 2(\\frac{1}{4}) + 1 = 4(\\frac{1}{16}) - \\frac{1}{2} + 1 = \\frac{1}{4} - \\frac{1}{2} + 1 = -\\frac{1}{4} + 1 = \\frac{3}{4}$."
  },
  {
    id: "est1_qev2_18",
    question: "If $f(x) = (2 - x)(x + 4)$ and $g(x) = f(x - 10)$ are functions whose graphs are parabolas in an xy-plane, what is the y-coordinate of the vertex of the parabola represented by $g$?",
    options: [
      "9",
      "6",
      "11",
      "14"
    ],
    correctAnswer: 0,
    explanation: "The function $g(x) = f(x - 10)$ is a horizontal shift of $f(x)$ by 10 units to the right. A horizontal shift does not change the y-coordinate of the vertex. So we just need to find the y-coordinate of the vertex of $f(x)$. The roots of $f(x)$ are $x = 2$ and $x = -4$. The x-coordinate of the vertex is the midpoint: $x = \\frac{2 + (-4)}{2} = -1$. The y-coordinate is $f(-1) = (2 - (-1))(-1 + 4) = (3)(3) = 9$."
  },
  {
    id: "est1_qev2_19",
    question: "Consider the function $f$ defined by $f(x) = 2(x - 3)(x + 2)$. What is the ordinate of the vertex of function $f$?",
    options: [
      "2",
      "-4.5",
      "2.5",
      "-12.5"
    ],
    correctAnswer: 3,
    explanation: "The roots are $x = 3$ and $x = -2$. The abscissa (x-coordinate) of the vertex is the midpoint: $x = \\frac{3 + (-2)}{2} = 0.5$. The ordinate (y-coordinate) is $f(0.5) = 2(0.5 - 3)(0.5 + 2) = 2(-2.5)(2.5) = 2(-6.25) = -12.5$."
  },
  {
    id: "est1_qev2_20",
    question: "The graph of $y = tx^2 - 5tx - 6t$ is shown in the xy-plane below, where $t$ is a constant. If the graph passes through the point $(1, 10)$, which of the following is the maximum value of $y$?",
    svg: `<svg viewBox="-2 -2 8 12" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
        </marker>
      </defs>
      <line x1="-2" y1="0" x2="8" y2="0" stroke="black" stroke-width="0.1" marker-end="url(#arrow)" />
      <line x1="0" y1="-2" x2="0" y2="12" stroke="black" stroke-width="0.1" marker-end="url(#arrow)" />
      <text x="7.5" y="-0.5" font-size="0.8">x</text>
      <text x="-0.5" y="11.5" font-size="0.8">y</text>
      <text x="-0.5" y="0.5" font-size="0.8">O</text>
      <path d="M -1 -1.5 Q 2.5 15 6 -1.5" fill="none" stroke="black" stroke-width="0.1" />
      <circle cx="1" cy="6" r="0.15" fill="black" />
      <text x="1.5" y="6" font-size="0.8">(1, 10)</text>
    </svg>`,
    options: [
      "2.5",
      "10",
      "11.75",
      "12.25"
    ],
    correctAnswer: 3,
    explanation: "First, find $t$ by substituting $(1, 10)$ into the equation: $10 = t(1)^2 - 5t(1) - 6t \\Rightarrow 10 = t - 5t - 6t \\Rightarrow 10 = -10t \\Rightarrow t = -1$. So the equation is $y = -x^2 + 5x + 6$. The maximum value occurs at the vertex. The x-coordinate is $x = -\\frac{b}{2a} = -\\frac{5}{2(-1)} = 2.5$. The maximum value is $y = -(2.5)^2 + 5(2.5) + 6 = -6.25 + 12.5 + 6 = 6.25 + 6 = 12.25$."
  },
  {
    id: "est1_qev2_21",
    question: "The height of a launched cannonball can be described as a function of time according to the following quadratic equation:\n\n$h(t) = -2t^2 + 14t + 36$\n\nWhat is the maximum height attained by the cannonball?",
    options: [
      "60.5",
      "36",
      "9",
      "2"
    ],
    correctAnswer: 0,
    explanation: "The maximum height is the y-coordinate of the vertex. The x-coordinate is $t = -\\frac{b}{2a} = -\\frac{14}{2(-2)} = \\frac{14}{4} = 3.5$. The maximum height is $h(3.5) = -2(3.5)^2 + 14(3.5) + 36 = -2(12.25) + 49 + 36 = -24.5 + 85 = 60.5$."
  },
  {
    id: "est1_qev2_22",
    question: "Which of the following represents the graph of the function $f(x) = x^3 + x + 1$?",
    options: [
      `A. <br/><svg viewBox="-3 -3 6 6" width="100" height="100" xmlns="http://www.w3.org/2000/svg"><line x1="-3" y1="0" x2="3" y2="0" stroke="black" stroke-width="0.05"/><line x1="0" y1="-3" x2="0" y2="3" stroke="black" stroke-width="0.05"/><path d="M -2 -3 C -1 5, 1 -5, 2 3" fill="none" stroke="black" stroke-width="0.05"/></svg>`,
      `B. <br/><svg viewBox="-3 -3 6 6" width="100" height="100" xmlns="http://www.w3.org/2000/svg"><line x1="-3" y1="0" x2="3" y2="0" stroke="black" stroke-width="0.05"/><line x1="0" y1="-3" x2="0" y2="3" stroke="black" stroke-width="0.05"/><path d="M -2 -3 C -1 -1, 1 1, 2 3" fill="none" stroke="black" stroke-width="0.05"/></svg>`,
      `C. <br/><svg viewBox="-3 -3 6 6" width="100" height="100" xmlns="http://www.w3.org/2000/svg"><line x1="-3" y1="0" x2="3" y2="0" stroke="black" stroke-width="0.05"/><line x1="0" y1="-3" x2="0" y2="3" stroke="black" stroke-width="0.05"/><path d="M -2 -3 C -0.5 -1, 0.5 1, 2 3" fill="none" stroke="black" stroke-width="0.05"/></svg>`,
      `D. <br/><svg viewBox="-3 -3 6 6" width="100" height="100" xmlns="http://www.w3.org/2000/svg"><line x1="-3" y1="0" x2="3" y2="0" stroke="black" stroke-width="0.05"/><line x1="0" y1="-3" x2="0" y2="3" stroke="black" stroke-width="0.05"/><path d="M -2 -3 C 0 -1, 0 1, 2 3" fill="none" stroke="black" stroke-width="0.05"/></svg>`
    ],
    correctAnswer: 2,
    explanation: "The function $f(x) = x^3 + x + 1$ has a derivative $f'(x) = 3x^2 + 1$. Since $3x^2 \\ge 0$ for all real $x$, $f'(x) \\ge 1 > 0$ for all real $x$. This means the function is strictly increasing and has no local maxima or minima. Also, the y-intercept is $f(0) = 1$. Graph C shows a strictly increasing function with a y-intercept at $y=1$."
  },
  {
    id: "est1_qev2_23",
    question: "Given that $h(t) = \\frac{2t + 1}{5t^2}$ ($t \\neq 0$), what is the negative value of $t$ if $h(t) = 3$?",
    options: [
      "$-0.5$",
      "$-0.4$",
      "$-0.3$",
      "$-0.2$"
    ],
    correctAnswer: 3,
    explanation: "Set $h(t) = 3$: $\\frac{2t + 1}{5t^2} = 3 \\Rightarrow 2t + 1 = 15t^2 \\Rightarrow 15t^2 - 2t - 1 = 0$. Factor the quadratic: $(5t + 1)(3t - 1) = 0$. The solutions are $t = -\\frac{1}{5} = -0.2$ and $t = \\frac{1}{3}$. The negative value is $-0.2$."
  },
  {
    id: "est1_qev2_24",
    question: "Given the function $g$ defined by $g(x) = -3x^2 + 6x + 1$, which of the following statements is/are true?\n\nI. The graph of $g$ concave upwards.\nII. The axis of symmetry of the graph is at the positive side of the x-axis.\nIII. The graph of $g$ reaches a minimum value.",
    options: [
      "I only",
      "II only",
      "I and III",
      "II and III"
    ],
    correctAnswer: 1,
    explanation: "For $g(x) = -3x^2 + 6x + 1$, $a = -3 < 0$, so the parabola opens downwards (concave downwards) and reaches a maximum value. Thus, statements I and III are false. The axis of symmetry is $x = -\\frac{b}{2a} = -\\frac{6}{2(-3)} = 1$. Since $x = 1$ is positive, statement II is true."
  },
  {
    id: "est1_qev2_25",
    question: "Given the function $f$ defined by $f(x) = 4x^2 - 8x + 3$, what are the coordinates of its vertex?",
    options: [
      "$(1, -1)$",
      "$(-1, 15)$",
      "$(2, 3)$",
      "$(-2, 35)$"
    ],
    correctAnswer: 0,
    explanation: "The x-coordinate of the vertex is $x = -\\frac{b}{2a} = -\\frac{-8}{2(4)} = \\frac{8}{8} = 1$. The y-coordinate is $f(1) = 4(1)^2 - 8(1) + 3 = 4 - 8 + 3 = -1$. So the vertex is $(1, -1)$."
  },
  {
    id: "est1_qev2_26",
    question: "Which of the following equations is represented in the graph below?",
    svg: `<svg viewBox="-7 -5 14 14" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
        </marker>
      </defs>
      <g stroke="lightgray" stroke-width="0.1">
        <line x1="-7" y1="-4" x2="7" y2="-4" />
        <line x1="-7" y1="-3" x2="7" y2="-3" />
        <line x1="-7" y1="-2" x2="7" y2="-2" />
        <line x1="-7" y1="-1" x2="7" y2="-1" />
        <line x1="-7" y1="1" x2="7" y2="1" />
        <line x1="-7" y1="2" x2="7" y2="2" />
        <line x1="-7" y1="3" x2="7" y2="3" />
        <line x1="-7" y1="4" x2="7" y2="4" />
        <line x1="-7" y1="5" x2="7" y2="5" />
        <line x1="-7" y1="6" x2="7" y2="6" />
        <line x1="-7" y1="7" x2="7" y2="7" />
        <line x1="-6" y1="-5" x2="-6" y2="8" />
        <line x1="-5" y1="-5" x2="-5" y2="8" />
        <line x1="-4" y1="-5" x2="-4" y2="8" />
        <line x1="-3" y1="-5" x2="-3" y2="8" />
        <line x1="-2" y1="-5" x2="-2" y2="8" />
        <line x1="-1" y1="-5" x2="-1" y2="8" />
        <line x1="1" y1="-5" x2="1" y2="8" />
        <line x1="2" y1="-5" x2="2" y2="8" />
        <line x1="3" y1="-5" x2="3" y2="8" />
        <line x1="4" y1="-5" x2="4" y2="8" />
        <line x1="5" y1="-5" x2="5" y2="8" />
        <line x1="6" y1="-5" x2="6" y2="8" />
      </g>
      <line x1="-7" y1="0" x2="7" y2="0" stroke="black" stroke-width="0.2" marker-end="url(#arrow)" />
      <line x1="0" y1="8" x2="0" y2="-5" stroke="black" stroke-width="0.2" marker-end="url(#arrow)" />
      <path d="M -3 -5 C -2.5 5, -1 8, 0 6 C 1 4, 1.5 -5, 2.5 -5 C 3.5 -5, 4 8, 5 8" fill="none" stroke="black" stroke-width="0.3" transform="scale(1, -1)" />
    </svg>`,
    options: [
      "$y = (x - 2)(x + 3)(x + 1)$",
      "$y = x(x + 1)(x - 2)$",
      "$y = (x + 2)(x - 3)(x - 1)$",
      "$y = (x - 2)(x - 3)(x + 1)$"
    ],
    correctAnswer: 2,
    explanation: "The graph crosses the x-axis at $x = -2$, $x = 1$, and $x = 3$. This means the function must have factors $(x + 2)$, $(x - 1)$, and $(x - 3)$. The only option with these factors is C: $y = (x + 2)(x - 3)(x - 1)$."
  },
  {
    id: "est1_qev2_27",
    question: "Which of the following equations is represented in the table below?\n\n| $x$ | -2 | -1 | 0 | 1 | 2 |\n|---|---|---|---|---|---|\n| $y$ | 12 | 6 | 3 | 1.5 | 0.75 |",
    options: [
      "$y = (\\frac{3}{2})^x$",
      "$y = (\\frac{1}{2})^x + 3$",
      "$y = (\\frac{1}{2})^x - 3$",
      "$y = 3(\\frac{1}{2})^x$"
    ],
    correctAnswer: 3,
    explanation: "When $x = 0$, $y = 3$. Let's check the options for $x = 0$:\nA. $y = (3/2)^0 = 1$ (Incorrect)\nB. $y = (1/2)^0 + 3 = 1 + 3 = 4$ (Incorrect)\nC. $y = (1/2)^0 - 3 = 1 - 3 = -2$ (Incorrect)\nD. $y = 3(1/2)^0 = 3(1) = 3$ (Correct)\nWe can also check $x = 1$: $y = 3(1/2)^1 = 1.5$, which matches the table."
  },
  {
    id: "est1_qev2_28",
    question: "In the xy-plane the function $f$ defined by $f(x) = x^3 + 4x - 5$ admits a graph (C). A computer program generated 5 graphs of which one is correct. The graphs are characterized by:\n\n| Graph | Characteristics |\n|---|---|\n| Graph 1 | It admits 3 vertices. |\n| Graph 2 | It admits 2 maxima and 1 minimum. |\n| Graph 3 | It is strictly decreasing. |\n| Graph 4 | It is strictly increasing. |\n| Graph 5 | It is always positive. |\n\nWhich graph is correct?",
    options: [
      "Graph 1",
      "Graph 2",
      "Graph 3",
      "Graph 4"
    ],
    correctAnswer: 3,
    explanation: "The derivative of $f(x) = x^3 + 4x - 5$ is $f'(x) = 3x^2 + 4$. Since $x^2 \\ge 0$ for all real $x$, $3x^2 + 4 \\ge 4 > 0$ for all real $x$. Because the derivative is always positive, the function is strictly increasing. Therefore, Graph 4 is correct."
  }
];
