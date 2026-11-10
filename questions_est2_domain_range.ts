import { Question } from './types';

export const EST2_DOMAIN_RANGE_SET: Question[] = [
  {
    id: 1,
    question: "For the function $f(x) = \\sqrt{x} + 4$, determine its domain and range.",
    options: [
      "Domain: $[0, \\infty)$, Range: $[4, \\infty)$",
      "Domain: $[0, \\infty)$, Range: $[0, \\infty)$",
      "Domain: $[4, \\infty)$, Range: $[0, \\infty)$",
      "Domain: $\\mathbb{R}$, Range: $[4, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: "For the square root function, the expression inside the root must be non-negative, so $x \\ge 0$, which means Domain is $[0, \\infty)$. The minimum value of $\\sqrt{x}$ is 0, so the minimum value of $f(x)$ is $0 + 4 = 4$. Thus, the Range is $[4, \\infty)$.",
    category: "Functions",
    topics: ["Domain and Range", "Radical Functions"]
  },
  {
    id: 2,
    question: "For the function $f(x) = \\sqrt{x - 2} - 4$, what is its domain and range?",
    options: [
      "Domain: $[-2, \\infty)$, Range: $[-4, \\infty)$",
      "Domain: $[2, \\infty)$, Range: $[-4, \\infty)$",
      "Domain: $[2, \\infty)$, Range: $[4, \\infty)$",
      "Domain: $(-\\infty, 2]$, Range: $[-4, \\infty)$"
    ],
    correctAnswer: 1,
    explanation: "For $f(x) = \\sqrt{x-2} - 4$, we require $x - 2 \\ge 0 \\implies x \\ge 2$. So Domain = $[2, \\infty)$. The base function $\\sqrt{x-2}$ has a minimum of 0. Subtracting 4 gives a minimum of $-4$. So Range = $[-4, \\infty)$.",
    category: "Functions",
    topics: ["Domain and Range", "Radical Functions"]
  },
  {
    id: 3,
    question: "Consider the function $f(x) = \\sqrt{x + 2} + 7$. Which of the following is true?",
    options: [
      "Domain is $[2, \\infty)$, and it has an axis of symmetry.",
      "Domain is $[-2, \\infty)$, and it is an even function.",
      "Domain is $[-2, \\infty)$, Range is $[7, \\infty)$, and it is an increasing function.",
      "Domain is $[2, \\infty)$, Range is $[-7, \\infty)$, and it is a decreasing function."
    ],
    correctAnswer: 2,
    explanation: "We need $x + 2 \\ge 0 \\implies x \\ge -2$, so Domain is $[-2, \\infty)$. Minimum of $\\sqrt{x+2}$ is 0, plus 7 gives a minimum of 7, so Range is $[7, \\infty)$. The square root function always increases as $x$ increases in its domain. It is neither even nor odd and has no axis of symmetry.",
    category: "Functions",
    topics: ["Domain and Range", "Increasing/Decreasing"]
  },
  {
    id: 4,
    question: "For the absolute value function $f(x) = |x| + 4$, identifying its properties, which statement is true?",
    options: [
      "It is an odd function.",
      "Its axis of symmetry is $x = -4$.",
      "Its range is $(-\\infty, 4]$.",
      "It is an even function and its axis of symmetry is $x = 0$."
    ],
    correctAnswer: 3,
    explanation: "$f(-x) = |-x| + 4 = |x| + 4 = f(x)$, so it is an even function. Its graph is symmetric with respect to the y-axis, which is $x = 0$. The minimum value is at $x=0$, $y=4$, making the range $[4, \\infty)$.",
    category: "Functions",
    topics: ["Even and Odd Functions", "Absolute Value", "Symmetry"]
  },
  {
    id: 5,
    question: "Find the axis of symmetry and the minimum value of the function $f(x) = |x + 3| + 2$.",
    options: [
      "Axis of symmetry: $x = 3$, Minimum value: $y = 2$",
      "Axis of symmetry: $x = -3$, Minimum value: $y = 2$",
      "Axis of symmetry: $x = -3$, Minimum value: $y = -2$",
      "Axis of symmetry: $x = 0$, Minimum value: $y = 2$"
    ],
    correctAnswer: 1,
    explanation: "The vertex of the absolute value function $f(x) = |x - h| + k$ is $(h, k)$. Here, the vertex is $(-3, 2)$. The axis of symmetry is the vertical line passing through the vertex, so $x = -3$. The minimum value is $y = 2$.",
    category: "Functions",
    topics: ["Absolute Value", "Symmetry", "Min/Max"]
  },
  {
    id: 6,
    question: "Which of the following describes the function $f(x) = x^2 + 4$?",
    options: [
      "Domain: $\\mathbb{R}$, Range: $[4, \\infty)$, Even function, increasing on $[0, \\infty)$",
      "Domain: $\\mathbb{R}$, Range: $\\mathbb{R}$, Odd function, increasing on $(-\\infty, \\infty)$",
      "Domain: $[0, \\infty)$, Range: $[4, \\infty)$, Neither even nor odd",
      "Domain: $\\mathbb{R}$, Range: $(-\\infty, 4]$, Even function, decreasing on $[0, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: "A quadratic function $y = x^2+4$ is defined for all reals, so Domain is $\\mathbb{R}$. Since $x^2 \\ge 0$, $x^2+4 \\ge 4$, so Range is $[4, \\infty)$. $f(-x) = (-x)^2+4 = x^2+4 = f(x)$, so it's even. The parabola opens up with vertex at $(0,4)$, minimizing there, so it is decreasing for $x \\le 0$ and increasing for $x \\ge 0$.",
    category: "Functions",
    topics: ["Domain and Range", "Even and Odd Functions", "Quadratic"]
  },
  {
    id: 7,
    question: "For the quadratic function $f(x) = (x - 2)^2 + 5$, what is its axis of symmetry and parity?",
    options: [
      "Axis of symmetry: $x = 2$, It is an even function",
      "Axis of symmetry: $x = -2$, Neither even nor odd",
      "Axis of symmetry: $x = 2$, Neither even nor odd",
      "Axis of symmetry: $y = 5$, It is an odd function"
    ],
    correctAnswer: 2,
    explanation: "The vertex of the parabola $f(x) = a(x-h)^2+k$ is $(h, k) = (2, 5)$. The axis of symmetry is $x = 2$. However, $f(-x) = (-x-2)^2+5 = (x+2)^2+5 \\neq f(x)$ and $\\neq -f(x)$, so it is neither even nor odd (parabolas shifted horizontally from the y-axis are neither).",
    category: "Functions",
    topics: ["Symmetry", "Even and Odd Functions", "Quadratic"]
  },
  {
    id: 8,
    question: "Determine the vertex, axis of symmetry, and range of $f(x) = x^2 - 2x - 15$.",
    options: [
      "Vertex: $(1, -16)$, Axis of symmetry: $x = 1$, Range: $[-15, \\infty)$",
      "Vertex: $(1, -16)$, Axis of symmetry: $x = 1$, Range: $[-16, \\infty)$",
      "Vertex: $(-1, -12)$, Axis of symmetry: $x = -1$, Range: $[-12, \\infty)$",
      "Vertex: $(2, -15)$, Axis of symmetry: $x = 2$, Range: $\\mathbb{R}$"
    ],
    correctAnswer: 1,
    explanation: "Using the vertex formula $x = \\frac{-b}{2a} = \\frac{-(-2)}{2(1)} = 1$. Plugging this back in, $y = (1)^2 - 2(1) - 15 = 1 - 2 - 15 = -16$. Thus, the vertex is $(1, -16)$. The axis of symmetry is $x = 1$. Because $a = 1 > 0$, the parabola opens upwards, making the minimum $-16$, so the range is $[-16, \\infty)$.",
    category: "Functions",
    topics: ["Quadratic", "Min/Max", "Domain and Range"]
  },
  {
    id: 9,
    question: "What is the domain and range of the rational function $f(x) = \\frac{1}{x} + 2$?",
    options: [
      "Domain: $\\mathbb{R} - \\{2\\}$, Range: $\\mathbb{R} - \\{0\\}$",
      "Domain: $\\mathbb{R} - \\{0\\}$, Range: $\\mathbb{R} - \\{2\\}$",
      "Domain: $\\mathbb{R}$, Range: $\\mathbb{R}$",
      "Domain: $(0, \\infty)$, Range: $(2, \\infty)$"
    ],
    correctAnswer: 1,
    explanation: "The denominator cannot be 0, so $x \\neq 0$. Thus, Domain = $\\mathbb{R} - \\{0\\}$. Since $\\frac{1}{x}$ can be any real number except 0, $\\frac{1}{x} + 2$ can be any real number except $0+2=2$. Thus, Range = $\\mathbb{R} - \\{2\\}$.",
    category: "Functions",
    topics: ["Domain and Range", "Rational Functions"]
  },
  {
    id: 10,
    question: "For the function $f(x) = \\frac{1}{x - 3} + 4$, find its domain and range.",
    options: [
      "Domain: $\\mathbb{R} - \\{3\\}$, Range: $\\mathbb{R} - \\{4\\}$",
      "Domain: $\\mathbb{R} - \\{-3\\}$, Range: $\\mathbb{R} - \\{-4\\}$",
      "Domain: $\\mathbb{R} - \\{4\\}$, Range: $\\mathbb{R} - \\{3\\}$",
      "Domain: $\\mathbb{R}$, Range: $[-4, \\infty)$"
    ],
    correctAnswer: 0,
    explanation: "The denominator cannot be zero, $x - 3 \\neq 0 \\implies x \\neq 3$. Domain = $\\mathbb{R} - \\{3\\}$. The fraction $\\frac{1}{x-3}$ can never equal 0, so the function $f(x)$ will never equal $0 + 4 = 4$. Thus, Range = $\\mathbb{R} - \\{4\\}$.",
    category: "Functions",
    topics: ["Domain and Range", "Rational Functions"]
  }
];
