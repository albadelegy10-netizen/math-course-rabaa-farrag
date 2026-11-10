
import { Question } from '../../types';

export const EST1_TRANSFORMATIONS_SET: Question[] = [
  // --- VERTICAL SHIFTS ---
  {
    id: 1,
    question: "The graph of $y = x^2$ is shifted 5 units up. Which equation represents the new graph?",
    options: ["$y = x^2 + 5$", "$y = x^2 - 5$", "$y = (x + 5)^2$", "$y = (x - 5)^2$"],
    correctAnswer: 0,
    explanation: "A vertical shift up by $k$ units adds $k$ to the function: $f(x) + k$. So, $x^2 + 5$.",
    category: "Vertical Shift",
    topics: ["Transformation", "Quadratics"]
  },
  {
    id: 2,
    question: "If $f(x) = |x|$, which function represents the graph of $f(x)$ shifted 3 units down?",
    options: ["$g(x) = |x - 3|$", "$g(x) = |x + 3|$", "$g(x) = |x| - 3$", "$g(x) = |x| + 3$"],
    correctAnswer: 2,
    explanation: "A vertical shift down by 3 units subtracts 3 from the function: $f(x) - 3$. So, $|x| - 3$.",
    category: "Vertical Shift",
    topics: ["Transformation", "absolute"]
  },
  {
    id: 3,
    question: "The function $g(x) = \\sqrt{x} + 2$ is obtained by shifting $f(x) = \\sqrt{x}$ in which direction?",
    options: ["Right 2 units", "Left 2 units", "Up 2 units", "Down 2 units"],
    correctAnswer: 2,
    explanation: "Adding a constant to the output ($+2$) shifts the graph vertically up.",
    category: "Vertical Shift",
    topics: ["Transformation", "Radicals"]
  },
  {
    id: 4,
    question: "The graph of $y = f(x) - 4$ is the graph of $y = f(x)$ shifted:",
    options: ["4 units right", "4 units left", "4 units up", "4 units down"],
    correctAnswer: 3,
    explanation: "$f(x) - k$ represents a vertical shift down by $k$ units.",
    category: "Vertical Shift",
    topics: ["Transformation", "Functions"]
  },

  // --- HORIZONTAL SHIFTS ---
  {
    id: 5,
    question: "The graph of $y = x^2$ is shifted 2 units to the right. Which equation represents the new graph?",
    options: ["$y = x^2 + 2$", "$y = x^2 - 2$", "$y = (x + 2)^2$", "$y = (x - 2)^2$"],
    correctAnswer: 3,
    explanation: "A horizontal shift right by $h$ units replaces $x$ with $(x - h)$. So, $(x - 2)^2$.",
    category: "Horizontal Shift",
    topics: ["Transformation", "Quadratics"]
  },
  {
    id: 6,
    question: "Which equation represents the absolute value function shifted 3 units to the left?",
    options: ["$y = |x - 3|$", "$y = |x + 3|$", "$y = |x| - 3$", "$y = |x| + 3$"],
    correctAnswer: 1,
    explanation: "A horizontal shift left by 3 units replaces $x$ with $(x + 3)$. So, $|x + 3|$.",
    category: "Horizontal Shift",
    topics: ["Transformation", "absolute"]
  },
  {
    id: 7,
    question: "Describe the transformation from $f(x) = \\sqrt{x}$ to $g(x) = \\sqrt{x - 5}$.",
    options: ["Shift right 5 units", "Shift left 5 units", "Shift up 5 units", "Shift down 5 units"],
    correctAnswer: 0,
    explanation: "$f(x - 5)$ represents a shift to the right by 5 units.",
    category: "Horizontal Shift",
    topics: ["Transformation", "Radicals"]
  },
  {
    id: 8,
    question: "If the graph of $f(x)$ is shifted 1 unit to the left, the new function is:",
    options: ["$f(x - 1)$", "$f(x + 1)$", "$f(x) - 1$", "$f(x) + 1$"],
    correctAnswer: 1,
    explanation: "Replacing $x$ with $(x + 1)$ shifts the graph 1 unit to the left.",
    category: "Horizontal Shift",
    topics: ["Transformation", "Functions"]
  },

  // --- COMBINED SHIFTS ---
  {
    id: 9,
    question: "How is the graph of $y = (x + 2)^2 - 1$ obtained from $y = x^2$?",
    options: ["Shift right 2, down 1", "Shift left 2, down 1", "Shift right 2, up 1", "Shift left 2, up 1"],
    correctAnswer: 1,
    explanation: "$(x + 2)$ indicates a shift left 2. The $-1$ at the end indicates a shift down 1.",
    category: "Combined Shift",
    topics: ["Transformation", "Quadratics"]
  },
  {
    id: 10,
    question: "Which equation represents the graph of $y = |x|$ shifted 4 units right and 3 units up?",
    options: ["$y = |x - 4| + 3$", "$y = |x + 4| + 3$", "$y = |x - 4| - 3$", "$y = |x + 4| - 3$"],
    correctAnswer: 0,
    explanation: "Right 4 means $(x - 4)$. Up 3 means $+ 3$. So, $y = |x - 4| + 3$.",
    category: "Combined Shift",
    topics: ["Transformation", "absolute"]
  },
  {
    id: 11,
    question: "Describe the transformation of $y = \\sqrt{x + 1} - 5$.",
    options: ["Left 1, Down 5", "Right 1, Down 5", "Left 1, Up 5", "Right 1, Up 5"],
    correctAnswer: 0,
    explanation: "$x + 1$ is Left 1. $-5$ is Down 5.",
    category: "Combined Shift",
    topics: ["Transformation", "Radicals"]
  },

  // --- VERTEX OF QUADRATIC FUNCTIONS ---
  {
    id: 12,
    question: "What are the coordinates of the vertex for the parabola $y = (x - 3)^2 + 4$?",
    options: ["$(3, 4)$", "$(-3, 4)$", "$(3, -4)$", "$(-3, -4)$"],
    correctAnswer: 0,
    explanation: "For vertex form $y = a(x - h)^2 + k$, the vertex is $(h, k)$. Here $h=3, k=4$. Vertex is $(3, 4)$.",
    category: "Quadratic Vertex",
    topics: ["Transformation", "Quadratics"]
  },
  {
    id: 13,
    question: "Find the vertex of the function $y = 2(x + 5)^2 - 2$.",
    options: ["$(5, -2)$", "$(-5, 2)$", "$(-5, -2)$", "$(5, 2)$"],
    correctAnswer: 2,
    explanation: "$h = -5$ (from $x+5$) and $k = -2$. Vertex is $(-5, -2)$.",
    category: "Quadratic Vertex",
    topics: ["Transformation", "Quadratics"]
  },
  {
    id: 14,
    question: "What is the vertex of the parabola $y = -(x - 1)^2$?",
    options: ["$(1, 0)$", "$(-1, 0)$", "$(0, 1)$", "$(0, -1)$"],
    correctAnswer: 0,
    explanation: "This is $y = -(x - 1)^2 + 0$. So $h=1, k=0$. Vertex is $(1, 0)$.",
    category: "Quadratic Vertex",
    topics: ["Transformation", "Quadratics"]
  },
  {
    id: 15,
    question: "Find the vertex of $y = x^2 + 7$.",
    options: ["$(7, 0)$", "$(-7, 0)$", "$(0, 7)$", "$(0, -7)$"],
    correctAnswer: 2,
    explanation: "This is $y = (x - 0)^2 + 7$. Vertex is $(0, 7)$.",
    category: "Quadratic Vertex",
    topics: ["Transformation", "Quadratics"]
  },
  {
    id: 16,
    question: "What is the vertex of $y = (x + 2)^2$?",
    options: ["$(2, 0)$", "$(-2, 0)$", "$(0, 2)$", "$(0, -2)$"],
    correctAnswer: 1,
    explanation: "This is $y = (x + 2)^2 + 0$. Vertex is $(-2, 0)$.",
    category: "Quadratic Vertex",
    topics: ["Transformation", "Quadratics"]
  },

  // --- VERTEX OF ABSOLUTE VALUE FUNCTIONS ---
  {
    id: 17,
    question: "What are the coordinates of the vertex for $y = |x - 2| + 5$?",
    options: ["$(2, 5)$", "$(-2, 5)$", "$(2, -5)$", "$(-2, -5)$"],
    correctAnswer: 0,
    explanation: "For $y = a|x - h| + k$, the vertex is $(h, k)$. Here $h=2, k=5$. Vertex is $(2, 5)$.",
    category: "Absolute Value Vertex",
    topics: ["Transformation", "absolute"]
  },
  {
    id: 18,
    question: "Find the vertex of $y = 3|x + 1| - 4$.",
    options: ["$(1, -4)$", "$(-1, 4)$", "$(-1, -4)$", "$(1, 4)$"],
    correctAnswer: 2,
    explanation: "$h = -1$ (from $x+1$) and $k = -4$. Vertex is $(-1, -4)$.",
    category: "Absolute Value Vertex",
    topics: ["Transformation", "absolute"]
  },
  {
    id: 19,
    question: "What is the vertex of the function $y = -|x| + 2$?",
    options: ["$(2, 0)$", "$(0, 2)$", "$(-2, 0)$", "$(0, -2)$"],
    correctAnswer: 1,
    explanation: "This is $y = -|x - 0| + 2$. Vertex is $(0, 2)$.",
    category: "Absolute Value Vertex",
    topics: ["Transformation", "absolute"]
  },
  {
    id: 20,
    question: "Find the vertex of $y = |x - 6|$.",
    options: ["$(6, 0)$", "$(-6, 0)$", "$(0, 6)$", "$(0, -6)$"],
    correctAnswer: 0,
    explanation: "This is $y = |x - 6| + 0$. Vertex is $(6, 0)$.",
    category: "Absolute Value Vertex",
    topics: ["Transformation", "absolute"]
  },

  // --- STARTING POINT OF RADICAL FUNCTIONS ---
  {
    id: 21,
    question: "What is the starting point (vertex) of the radical function $y = \\sqrt{x - 3} + 2$?",
    options: ["$(3, 2)$", "$(-3, 2)$", "$(3, -2)$", "$(-3, -2)$"],
    correctAnswer: 0,
    explanation: "For $y = a\\sqrt{x - h} + k$, the starting point is $(h, k)$. Here $h=3, k=2$. Point is $(3, 2)$.",
    category: "Radical Vertex",
    topics: ["Transformation", "Radicals"]
  },
  {
    id: 22,
    question: "Find the starting point of $y = \\sqrt{x + 4} - 1$.",
    options: ["$(4, -1)$", "$(-4, 1)$", "$(-4, -1)$", "$(4, 1)$"],
    correctAnswer: 2,
    explanation: "$h = -4$ (from $x+4$) and $k = -1$. Point is $(-4, -1)$.",
    category: "Radical Vertex",
    topics: ["Transformation", "Radicals"]
  },
  {
    id: 23,
    question: "What is the starting point of $y = 2\\sqrt{x} + 5$?",
    options: ["$(5, 0)$", "$(0, 5)$", "$(-5, 0)$", "$(0, -5)$"],
    correctAnswer: 1,
    explanation: "This is $y = 2\\sqrt{x - 0} + 5$. Point is $(0, 5)$.",
    category: "Radical Vertex",
    topics: ["Transformation", "Radicals"]
  },

  // --- MIXED & CONCEPTUAL ---
  {
    id: 24,
    question: "If $f(x) = x^2$, write the equation for $g(x)$ if $f(x)$ is shifted 3 units right and 2 units up.",
    options: ["$g(x) = (x + 3)^2 + 2$", "$g(x) = (x - 3)^2 + 2$", "$g(x) = (x - 3)^2 - 2$", "$g(x) = (x + 3)^2 - 2$"],
    correctAnswer: 1,
    explanation: "Right 3 means $(x - 3)$. Up 2 means $+ 2$. Equation is $g(x) = (x - 3)^2 + 2$.",
    category: "Conceptual",
    topics: ["Transformation", "Quadratics"]
  },
  {
    id: 25,
    question: "If $f(x) = |x|$, write the equation for $g(x)$ if $f(x)$ is shifted 4 units left and 1 unit down.",
    options: ["$g(x) = |x - 4| - 1$", "$g(x) = |x + 4| + 1$", "$g(x) = |x + 4| - 1$", "$g(x) = |x - 4| + 1$"],
    correctAnswer: 2,
    explanation: "Left 4 means $(x + 4)$. Down 1 means $- 1$. Equation is $g(x) = |x + 4| - 1$.",
    category: "Conceptual",
    topics: ["Transformation", "absolute"]
  },
  {
    id: 26,
    question: "The graph of $y = (x + k)^2 + m$ has its vertex at $(-3, 5)$. What are the values of $k$ and $m$?",
    options: ["$k = 3, m = 5$", "$k = -3, m = 5$", "$k = 3, m = -5$", "$k = -3, m = -5$"],
    correctAnswer: 0,
    explanation: "Vertex form is $(x - h)^2 + k_{vertex}$. Here vertex is $(-3, 5)$, so $h=-3$. The term is $(x - (-3))^2 = (x + 3)^2$. So $k=3$. The vertical shift is $m=5$.",
    category: "Conceptual",
    topics: ["Transformation", "Quadratics"]
  },
  {
    id: 27,
    question: "Which of the following functions has a minimum value of 2?",
    options: ["$y = (x - 1)^2 + 2$", "$y = (x - 1)^2 - 2$", "$y = -(x - 1)^2 + 2$", "$y = |x + 2| - 2$"],
    correctAnswer: 0,
    explanation: "For $y = a(x-h)^2 + k$ with $a > 0$, the minimum value is $k$. In option A, $k=2$. Option C opens down (maximum is 2).",
    category: "Conceptual",
    topics: ["Transformation", "Quadratics"]
  },
  {
    id: 28,
    question: "What is the range of the function $y = |x - 3| + 4$?",
    options: ["$y \\ge 3$", "$y \\ge 4$", "$y \\le 4$", "All real numbers"],
    correctAnswer: 1,
    explanation: "The vertex is $(3, 4)$ and the graph opens upwards (V-shape). The minimum y-value is 4. Range is $y \\ge 4$.",
    category: "Conceptual",
    topics: ["Transformation", "absolute"]
  },
  {
    id: 29,
    question: "What is the equation of the axis of symmetry for the parabola $y = (x - 5)^2 + 1$?",
    options: ["$x = 1$", "$y = 1$", "$x = 5$", "$y = 5$"],
    correctAnswer: 2,
    explanation: "The axis of symmetry passes through the x-coordinate of the vertex. Vertex is $(5, 1)$, so axis is $x = 5$.",
    category: "Conceptual",
    topics: ["Transformation", "Quadratics"]
  },
  {
    id: 30,
    question: "If $f(x) = \\sqrt{x}$ and $g(x) = \\sqrt{x - 2}$, which statement describes the transformation?",
    options: ["$g(x)$ is $f(x)$ shifted 2 units left.", "$g(x)$ is $f(x)$ shifted 2 units right.", "$g(x)$ is $f(x)$ shifted 2 units up.", "$g(x)$ is $f(x)$ shifted 2 units down."],
    correctAnswer: 1,
    explanation: "$x - 2$ inside the function indicates a horizontal shift 2 units to the right.",
    category: "Conceptual",
    topics: ["Transformation", "Radicals"]
  }
];
