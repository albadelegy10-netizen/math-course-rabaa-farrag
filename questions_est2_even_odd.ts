import { Question } from './types';

export const EST2_EVEN_ODD_SET: Question[] = [
  {
    id: 1,
    question: "Which of the following expressions represents a polynomial?",
    options: [
      "$f(x) = 3x^4 - 2x^2 + \\frac{5}{x}$",
      "$g(x) = 4x^3 - x^{\\frac{1}{2}} + 7$",
      "$h(x) = 5x^4 - 3x^2 + 9$",
      "$p(x) = 2x^2 - 3\\sin(x) + 1$"
    ],
    correctAnswer: 2,
    explanation: "A polynomial is an expression consisting of variables and coefficients, involving only addition, subtraction, multiplication, and non-negative integer exponents of variables. $h(x)$ meets these criteria. $f(x)$ has $x^{-1}$, $g(x)$ has $x^{1/2}$, and $p(x)$ has a trigonometric function.",
    category: "Functions",
    topics: ["Polynomials"]
  },
  {
    id: 2,
    question: "Determine which of the following is NOT a polynomial function.",
    options: [
      "$f(x) = -2x^5 + 4x^3 - x + \\sqrt{2}$",
      "$g(x) = \\frac{3}{4}x^4 - 5x^2 + x$",
      "$h(x) = 7x^3 - 2x^{-2} + 4$",
      "$p(x) = x(x-2)(x+3)$"
    ],
    correctAnswer: 2,
    explanation: "A polynomial cannot have negative exponents for its variables. $h(x)$ has a term $-2x^{-2}$, which violates this rule.",
    category: "Functions",
    topics: ["Polynomials"]
  },
  {
    id: 3,
    question: "Which of the following describes the degree of the polynomial $P(x) = 4x^3 - 2x^5 + x^2 - 7$?",
    options: [
      "3",
      "5",
      "2",
      "-7"
    ],
    correctAnswer: 1,
    explanation: "The degree of a polynomial is the highest power of the variable present in the polynomial. In $P(x)$, the term with the highest power is $-2x^5$, so the degree is 5.",
    category: "Functions",
    topics: ["Polynomials"]
  },
  {
    id: 4,
    question: "What is the leading coefficient of the polynomial $f(x) = -3x^4 + 5x^6 - 2x + 8$?",
    options: [
      "-3",
      "5",
      "-2",
      "8"
    ],
    correctAnswer: 1,
    explanation: "The leading coefficient is the coefficient of the term with the highest degree. Here, the highest degree term is $5x^6$, so the leading coefficient is 5.",
    category: "Functions",
    topics: ["Polynomials"]
  },
  {
    id: 5,
    question: "Which of the following graphs represents a function?",
    options: [
      "A circle centered at the origin.",
      "An ellipse.",
      "A vertical line $x = c$.",
      "A parabola opening upwards $y = x^2$."
    ],
    correctAnswer: 3,
    explanation: "By the vertical line test, a graph represents a function if and only if no vertical line intersects the graph at more than one point. A parabola opening upwards passes this test, whereas a circle, an ellipse, and a vertical line do not.",
    category: "Functions",
    topics: ["Function Definition"]
  },
  {
    id: 6,
    question: "Based on the provided graph, does the graph represent a function?",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii01IC01IDEwIDEwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0id2hpdGUiLz4KICA8bGluZSB4MT0iLTUiIHkxPSIwIiB4Mj0iNSIgeTI9IjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC4xIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSItNSIgeDI9IjAiIHkyPSI1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjAuMSIvPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIzIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlPSJyZWQiIHN0cm9rZS13aWR0aD0iMC4xNSIvPgo8L3N2Zz4=",
    options: [
      "Yes, because it is a continuous curve.",
      "Yes, because every $y$-value has a corresponding $x$-value.",
      "No, because it fails the vertical line test.",
      "No, because it fails the horizontal line test."
    ],
    correctAnswer: 2,
    explanation: "The graph is a circle. A vertical line (e.g., the $y$-axis) intersects the circle at two points. Therefore, it fails the vertical line test and does not represent a function.",
    category: "Functions",
    topics: ["Function Definition"]
  },
  {
    id: 7,
    question: "Determine if the following graph represents a function.",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii01IC01IDEwIDEwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0id2hpdGUiLz4KICA8bGluZSB4MT0iLTUiIHkxPSIwIiB4Mj0iNSIgeTI9IjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC4xIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSItNSIgeDI9IjAiIHkyPSI1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjAuMSIvPgogIDxsaW5lIHgxPSIyIiB5MT0iLTUiIHgyPSIyIiB5Mj0iNSIgc3Ryb2tlPSJyZWQiIHN0cm9rZS13aWR0aD0iMC4xNSIvPgo8L3N2Zz4=",
    options: [
      "Yes, because it is a straight line.",
      "No, because a single $x$-value is mapped to infinitely many $y$-values.",
      "Yes, because it is parallel to the $y$-axis.",
      "No, because it has no $y$-intercept."
    ],
    correctAnswer: 1,
    explanation: "The graph is a vertical line. It fails the vertical line test entirely since the line itself is vertical and intersects itself infinitely many times. One $x$-value corresponds to infinitely many $y$-values.",
    category: "Functions",
    topics: ["Function Definition"]
  },
  {
    id: 8,
    question: "Which of the following best defines an even function?",
    options: [
      "A function that satisfies $f(-x) = -f(x)$ for all $x$ in its domain.",
      "A function that satisfies $f(-x) = f(x)$ for all $x$ in its domain.",
      "A function whose graph is symmetric with respect to the origin.",
      "A function whose graph has no negative $y$-values."
    ],
    correctAnswer: 1,
    explanation: "By definition, a function $f$ is even if $f(-x) = f(x)$ for all $x$ in its domain. This corresponds to a graph that is symmetric with respect to the $y$-axis.",
    category: "Functions",
    topics: ["Even and Odd Functions"]
  },
  {
    id: 9,
    question: "Determine whether the function $f(x) = 3x^4 - 2x^2 + 5$ is even, odd, or neither.",
    options: [
      "Even",
      "Odd",
      "Neither",
      "Both even and odd"
    ],
    correctAnswer: 0,
    explanation: "To test for even/odd, find $f(-x)$. $f(-x) = 3(-x)^4 - 2(-x)^2 + 5 = 3x^4 - 2x^2 + 5 = f(x)$. Since $f(-x) = f(x)$, the function is even.",
    category: "Functions",
    topics: ["Even and Odd Functions"]
  },
  {
    id: 10,
    question: "Determine whether the function $g(x) = 4x^3 - x$ is even, odd, or neither.",
    options: [
      "Even",
      "Odd",
      "Neither",
      "It depends on the value of $x$"
    ],
    correctAnswer: 1,
    explanation: "Find $g(-x) = 4(-x)^3 - (-x) = -4x^3 + x = -(4x^3 - x) = -g(x)$. Since $g(-x) = -g(x)$, the function is odd.",
    category: "Functions",
    topics: ["Even and Odd Functions"]
  },
  {
    id: 11,
    question: "Determine whether the function $h(x) = x^2 - 3x + 1$ is even, odd, or neither.",
    options: [
      "Even",
      "Odd",
      "Neither",
      "Even for $x > 0$ and odd for $x < 0$"
    ],
    correctAnswer: 2,
    explanation: "Find $h(-x) = (-x)^2 - 3(-x) + 1 = x^2 + 3x + 1$. This is not equal to $h(x)$ (so not even), nor is it equal to $-h(x) = -x^2 + 3x - 1$ (so not odd). Thus, it is neither.",
    category: "Functions",
    topics: ["Even and Odd Functions"]
  },
  {
    id: 12,
    question: "Which of the following functions is an odd function?",
    options: [
      "$f(x) = |x|$",
      "$g(x) = x^5 + 2x^3$",
      "$h(x) = \\cos(x)$",
      "$p(x) = x^3 + 1$"
    ],
    correctAnswer: 1,
    explanation: "$g(-x) = (-x)^5 + 2(-x)^3 = -x^5 - 2x^3 = -(x^5 + 2x^3) = -g(x)$. Hence, $g(x)$ is odd. Note: $|x|$ and $\cos(x)$ are even, and $x^3+1$ is neither.",
    category: "Functions",
    topics: ["Even and Odd Functions"]
  },
  {
    id: 13,
    question: "If $f(x)$ is an even function and $g(x)$ is an odd function, what can be said about the product $h(x) = f(x) \\cdot g(x)$?",
    options: [
      "$h(x)$ is an even function.",
      "$h(x)$ is an odd function.",
      "$h(x)$ is neither even nor odd.",
      "$h(x)$ is a constant function."
    ],
    correctAnswer: 1,
    explanation: "$h(-x) = f(-x)g(-x)$. Since $f$ is even, $f(-x) = f(x)$. Since $g$ is odd, $g(-x) = -g(x)$. Thus, $h(-x) = f(x)(-g(x)) = -f(x)g(x) = -h(x)$. Therefore, the product is an odd function.",
    category: "Functions",
    topics: ["Even and Odd Functions"]
  },
  {
    id: 14,
    question: "Observe the graph of the function below. Is the function even, odd, or neither?",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii01IC01IDEwIDEwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0id2hpdGUiLz4KICA8bGluZSB4MT0iLTUiIHkxPSIwIiB4Mj0iNSIgeTI9IjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC4xIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSItNSIgeDI9IjAiIHkyPSI1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjAuMSIvPgogIDxwYXRoIGQ9Ik0gLTMgLTkgTCAtMi41IC02LjI1IEwgLTIgLTQgTCAtMS41IC0yLjI1IEwgLTEgLTEgTCAtMC41IC0wLjI1IEwgMCAwIEwgMC41IC0wLjI1IEwgMSAtMSBMIDEuNSAtMi4yNSBMIDIgLTQgTCAyLjUgLTYuMjUgTCAzIC05IiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlPSJibHVlIiBzdHJva2Utd2lkdGg9IjAuMTUiLz4KPC9zdmc+",
    options: [
      "Even",
      "Odd",
      "Neither",
      "Both even and odd"
    ],
    correctAnswer: 0,
    explanation: "The graph is a parabola opening upwards with its vertex at the origin. It is symmetric with respect to the $y$-axis, which means it represents an even function.",
    category: "Functions",
    topics: ["Even and Odd Functions"]
  },
  {
    id: 15,
    question: "Observe the graph of the function below. Classify the function.",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii01IC01IDEwIDEwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0id2hpdGUiLz4KICA8bGluZSB4MT0iLTUiIHkxPSIwIiB4Mj0iNSIgeTI9IjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC4xIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSItNSIgeDI9IjAiIHkyPSI1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjAuMSIvPgogIDxwYXRoIGQ9Ik0gLTIgOCBMIC0xLjUgMy4zNzUgTCAtMSAxIEwgLTAuNSAwLjEyNSBMIDAgMCBMIDAuNSAtMC4xMjUgTCAxIC0xIEwgMS41IC0zLjM3NSBMIDIgLTgiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2U9ImJsdWUiIHN0cm9rZS13aWR0aD0iMC4xNSIvPgo8L3N2Zz4=",
    options: [
      "Even",
      "Odd",
      "Neither",
      "Not a function"
    ],
    correctAnswer: 1,
    explanation: "The graph has rotational symmetry of $180^{\\circ}$ about the origin (symmetric with respect to the origin). This is the hallmark of an odd function.",
    category: "Functions",
    topics: ["Even and Odd Functions"]
  },
  {
    id: 16,
    question: "Based on the graph shown below, what type of symmetry does the function have?",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii01IC01IDEwIDEwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0id2hpdGUiLz4KICA8bGluZSB4MT0iLTUiIHkxPSIwIiB4Mj0iNSIgeTI9IjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC4xIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSItNSIgeDI9IjAiIHkyPSI1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjAuMSIvPgogIDxsaW5lIHgxPSItNSIgeTE9Ii01IiB4Mj0iMCIgeTI9IjAiIHN0cm9rZT0iYmx1ZSIgc3Ryb2tlLXdpZHRoPSIwLjE1Ii8+CiAgPGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iNSIgeTI9Ii01IiBzdHJva2U9ImJsdWUiIHN0cm9rZS13aWR0aD0iMC4xNSIvPgo8L3N2Zz4=",
    options: [
      "Symmetry with respect to the origin (Odd function)",
      "Symmetry with respect to the $x$-axis (Not a function)",
      "Symmetry with respect to the $y$-axis (Even function)",
      "No symmetry (Neither)"
    ],
    correctAnswer: 2,
    explanation: "The graph forms a 'V' shape (like $y = |x|$) which is symmetric across the $y$-axis. Functions with $y$-axis symmetry are even functions.",
    category: "Functions",
    topics: ["Even and Odd Functions"]
  },
  {
    id: 17,
    question: "Observe the graph below. Determine if the function is even, odd, or neither.",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii01IC01IDEwIDEwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0id2hpdGUiLz4KICA8bGluZSB4MT0iLTUiIHkxPSIwIiB4Mj0iNSIgeTI9IjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC4xIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSItNSIgeDI9IjAiIHkyPSI1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjAuMSIvPgogIDxwYXRoIGQ9Ik0gLTMuNSAtNS4yNSBMIC0zIC0zIEwgLTIuNSAtMS4yNSBMIC0yIDAgTCAtMS41IDAuNzUgTCAtMSAxIEwgLTAuNSAwLjc1IEwgMCAwIEwgMC41IC0xLjI1IEwgMSAtMyBMIDEuNSAtNS4yNSIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZT0iYmx1ZSIgc3Ryb2tlLXdpZHRoPSIwLjE1Ii8+Cjwvc3ZnPg==",
    options: [
      "Even",
      "Odd",
      "Neither",
      "Both even and odd"
    ],
    correctAnswer: 2,
    explanation: "The graph is a parabola but its vertex is not on the $y$-axis. It lacks symmetry with respect to the $y$-axis (not even) and lacks symmetry with respect to the origin (not odd). Therefore, it is neither.",
    category: "Functions",
    topics: ["Even and Odd Functions"]
  },
  {
    id: 18,
    question: "If the point $(3, -5)$ is on the graph of an odd function $f(x)$, which other point must also be on the graph?",
    options: [
      "$(-3, -5)$",
      "$(3, 5)$",
      "$(-3, 5)$",
      "$(5, -3)$"
    ],
    correctAnswer: 2,
    explanation: "An odd function satisfies $f(-x) = -f(x)$. Since $f(3) = -5$, we have $f(-3) = -f(3) = -(-5) = 5$. Therefore, the point $(-3, 5)$ must be on the graph.",
    category: "Functions",
    topics: ["Even and Odd Functions"]
  },
  {
    id: 19,
    question: "If a function $f(x)$ is known to be an even function and $f(4) = 7$, what is the value of $f(-4)$?",
    options: [
      "-7",
      "7",
      "0",
      "Cannot be determined"
    ],
    correctAnswer: 1,
    explanation: "For an even function, $f(-x) = f(x)$. Thus, $f(-4) = f(4) = 7$.",
    category: "Functions",
    topics: ["Even and Odd Functions"]
  },
  {
    id: 20,
    question: "Which of the following statements is always true for the function $f(x) = \\frac{x^3}{x^2 + 1}$?",
    options: [
      "The function is even because the denominator is even.",
      "The function is odd because the numerator is odd and the denominator is even.",
      "The function is neither even nor odd.",
      "The graph of the function is symmetric with respect to the $y$-axis."
    ],
    correctAnswer: 1,
    explanation: "$f(-x) = \\frac{(-x)^3}{(-x)^2 + 1} = \\frac{-x^3}{x^2 + 1} = -\\left(\\frac{x^3}{x^2 + 1}\\right) = -f(x)$. Since $f(-x) = -f(x)$, the function is odd. The quotient of an odd function and an even function is an odd function.",
    category: "Functions",
    topics: ["Even and Odd Functions"]
  }
];
