import { Question } from '../../types';

export const EST2_ISOLATION_SET: Question[] = [
  {
    id: 1,
    question: "If $\\frac{p - 3q}{4} + \\frac{q}{2} = \\frac{2p + q}{2} - \\frac{11}{4}$, then the value of $p$ in terms of $q$ is:",
    options: [
      "A) $-\\frac{1}{5}q - \\frac{11}{5}$",
      "B) $-\\frac{1}{5}q + \\frac{11}{5}$",
      "C) $-q + \\frac{11}{3}$",
      "D) $\\frac{3}{5}q - \\frac{11}{5}$",
      "E) $q + \\frac{11}{3}$"
    ],
    correctAnswer: 2,
    explanation: "Multiply the entire equation by $4$ to clear all denominators:\n$$ 4 \\cdot \\left(\\frac{p - 3q}{4} + \\frac{q}{2}\\right) = 4 \\cdot \\left(\\frac{2p + q}{2} - \\frac{11}{4}\\right) $$\n$$ (p - 3q) + 2q = 2(2p + q) - 11 $$\n$$ p - q = 4p + 2q - 11 $$\nCollect $p$ terms on the right side and constants on the left side:\n$$ 11 - q - 2q = 4p - p $$\n$$ 11 - 3q = 3p $$\nDivide by $3$:\n$$ p = \\frac{11 - 3q}{3} = -q + \\frac{11}{3} $$",
    category: "EST2-isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 2,
    question: "If $y = 4 e^{3x - 2} + 1$, which of the following expressions represents $x$ in terms of $y$ for $y > 1$?",
    options: [
      "A) $x = \\frac{\\ln(y - 1) - 2}{3}$",
      "B) $x = \\frac{2 + \\ln\\left(\\frac{y - 1}{4}\\right)}{3}$",
      "C) $x = \\frac{2 - \\ln(4y - 4)}{3}$",
      "D) $x = 3 \\ln\\left(\\frac{y - 1}{4}\\right) + 2$",
      "E) $x = \\frac{\\ln(y) + 2}{12}$"
    ],
    correctAnswer: 1,
    explanation: "Subtract $1$ from both sides:\n$$ y - 1 = 4 e^{3x - 2} $$\nDivide by $4$:\n$$ \\frac{y - 1}{4} = e^{3x - 2} $$\nTake the natural logarithm of both sides:\n$$ \\ln\\left(\\frac{y - 1}{4}\\right) = 3x - 2 $$\nAdd $2$ and divide by $3$:\n$$ x = \\frac{2 + \\ln\\left(\\frac{y - 1}{4}\\right)}{3} $$",
    category: "EST2-isolation",
    topics: ["Exponential", "Logarithms", "Isolation"]
  },
  {
    id: 3,
    question: "If $\\log_2(x + 3y) - \\log_2(x - y) = 3$, what is the value of $x$ in terms of $y$?",
    options: [
      "A) $x = \\frac{5}{7}y$",
      "B) $x = \\frac{11}{7}y$",
      "C) $x = \\frac{7}{11}y$",
      "D) $x = 2y$",
      "E) $x = \\frac{11}{8}y$"
    ],
    correctAnswer: 1,
    explanation: "Apply the quotient rule for logarithms:\n$$ \\log_2\\left(\\frac{x + 3y}{x - y}\\right) = 3 $$\nRewrite in exponential form:\n$$ \\frac{x + 3y}{x - y} = 2^3 = 8 $$\nMultiply both sides by $(x - y)$:\n$$ x + 3y = 8(x - y) = 8x - 8y $$\nRearrange terms:\n$$ 3y + 8y = 8x - x \\implies 11y = 7x \\implies x = \\frac{11}{7}y $$",
    category: "EST2-isolation",
    topics: ["Logarithms", "Isolation", "Algebra"]
  },
  {
    id: 4,
    question: "Given $\\frac{2a + b}{a - 2b} = \\frac{3c}{c + 1}$, express $a$ in terms of $b$ and $c$ (where $a \\neq 2b$ and $c \\neq -1, 2$).",
    options: [
      "A) $a = \\frac{b(7c + 1)}{c - 2}$",
      "B) $a = \\frac{b(5c - 1)}{c + 2}$",
      "C) $a = \\frac{b(c + 1)}{3c - 2}$",
      "D) $a = \\frac{b(7c - 1)}{c + 2}$",
      "E) $a = \\frac{7bc}{c - 1}$"
    ],
    correctAnswer: 0,
    explanation: "Cross-multiply:\n$$ (2a + b)(c + 1) = 3c(a - 2b) $$\n$$ 2ac + 2a + bc + b = 3ac - 6bc $$\nGroup terms containing $a$ on the right side:\n$$ bc + b + 6bc = 3ac - 2ac - 2a $$\n$$ 7bc + b = ac - 2a = a(c - 2) $$\nDivide by $(c - 2)$:\n$$ a = \\frac{7bc + b}{c - 2} = \\frac{b(7c + 1)}{c - 2} $$",
    category: "EST2-isolation",
    topics: ["Rational Functions", "Isolation", "Algebra"]
  },
  {
    id: 5,
    question: "If $k = \\sqrt[3]{\\frac{2x + 5y}{3z - y}}$, then $z$ expressed in terms of $x, y,$ and $k$ is:",
    options: [
      "A) $z = \\frac{2x + y(5 - k^3)}{3k^3}$",
      "B) $z = \\frac{2x + y(5 + k^3)}{3k^3}$",
      "C) $z = \\frac{2x + 5y}{3k^3 - y}$",
      "D) $z = \\frac{k^3(2x + 5y)}{3}$",
      "E) $z = \\frac{2x + 5y + k^3}{3}$"
    ],
    correctAnswer: 1,
    explanation: "Cube both sides:\n$$ k^3 = \\frac{2x + 5y}{3z - y} $$\nMultiply by $(3z - y)$:\n$$ k^3(3z - y) = 2x + 5y \\implies 3 z k^3 - y k^3 = 2x + 5y $$\nIsolate $3 z k^3$:\n$$ 3 z k^3 = 2x + 5y + y k^3 = 2x + y(5 + k^3) $$\nDivide by $3 k^3$:\n$$ z = \\frac{2x + y(5 + k^3)}{3 k^3} $$",
    category: "EST2-isolation",
    topics: ["Radicals", "Isolation", "Algebra"]
  },
  {
    id: 6,
    question: "If $y = 3 \\sin(2x - \\theta) + 4$ where $-\\frac{\\pi}{2} \\le 2x - \\theta \\le \\frac{\\pi}{2}$, which expression gives $x$ in terms of $y$ and $\\theta$?",
    options: [
      "A) $x = \\frac{\\theta - \\arcsin\\left(\\frac{y - 4}{3}\\right)}{2}$",
      "B) $x = \\frac{\\theta + \\arcsin\\left(\\frac{y - 4}{3}\\right)}{2}$",
      "C) $x = 2\\theta + \\arcsin\\left(\\frac{y - 4}{3}\\right)$",
      "D) $x = \\frac{\\arcsin(y - 4) + \\theta}{6}$",
      "E) $x = \\frac{\\theta + \\sin\\left(\\frac{y - 4}{3}\\right)}{2}$"
    ],
    correctAnswer: 1,
    explanation: "Subtract $4$ and divide by $3$:\n$$ \\sin(2x - \\theta) = \\frac{y - 4}{3} $$\nTake the inverse sine:\n$$ 2x - \\theta = \\arcsin\\left(\\frac{y - 4}{3}\\right) $$\nAdd $\\theta$ and divide by $2$:\n$$ x = \\frac{\\theta + \\arcsin\\left(\\frac{y - 4}{3}\\right)}{2} $$",
    category: "EST2-isolation",
    topics: ["Trigonometry", "Isolation", "Inverse Trigonometry"]
  },
  {
    id: 7,
    question: "If matrix $M = \\begin{pmatrix} x & 2a \\\\ b & x + a \\end{pmatrix}$ has a determinant equal to $k$, which equation correctly expresses $a$ in terms of $x, b,$ and $k$?",
    options: [
      "A) $a = \\frac{k + x^2}{x - 2b}$",
      "B) $a = \\frac{k - x^2}{x - 2b}$",
      "C) $a = \\frac{k - x^2}{x + 2b}$",
      "D) $a = \\frac{x^2 - k}{2b}$",
      "E) $a = \\frac{k - x}{x - 2b}$"
    ],
    correctAnswer: 1,
    explanation: "Calculate the determinant of matrix $M$:\n$$ \\det(M) = x(x + a) - 2ab = x^2 + ax - 2ab = k $$\nFactor out $a$ from terms containing $a$:\n$$ a(x - 2b) = k - x^2 $$\nDivide by $(x - 2b)$:\n$$ a = \\frac{k - x^2}{x - 2b} $$",
    category: "EST2-isolation",
    topics: ["Matrices", "Determinants", "Isolation"]
  },
  {
    id: 8,
    question: "If $x^2 y - 4x y + 3y = 2x + 5$, then $y$ expressed in terms of $x$ (for $x \\neq 1$ and $x \\neq 3$) is:",
    options: [
      "A) $y = \\frac{2x + 5}{x^2 - 4x + 3}$",
      "B) $y = \\frac{2x - 5}{x^2 + 4x + 3}$",
      "C) $y = \\frac{x^2 - 4x + 3}{2x + 5}$",
      "D) $y = \\frac{2x + 5}{x - 3}$",
      "E) $y = \\frac{5 - 2x}{x^2 - 4x + 3}$"
    ],
    correctAnswer: 0,
    explanation: "Factor out $y$ from the left side:\n$$ y(x^2 - 4x + 3) = 2x + 5 $$\nDivide by $(x^2 - 4x + 3)$:\n$$ y = \\frac{2x + 5}{x^2 - 4x + 3} $$",
    category: "EST2-isolation",
    topics: ["Algebra", "Factoring", "Isolation"]
  },
  {
    id: 9,
    question: "The function $f(x) = \\frac{3x + k}{x - 2}$ has an inverse function $f^{-1}(x)$. If $f^{-1}(5) = 4$, what is the value of parameter $k$?",
    options: [
      "A) $-4$",
      "B) $-2$",
      "C) $0$",
      "D) $2$",
      "E) $4$"
    ],
    correctAnswer: 1,
    explanation: "By definition of inverse functions, $f^{-1}(5) = 4 \\iff f(4) = 5$.\nSubstitute $x = 4$ into $f(x)$:\n$$ f(4) = \\frac{3(4) + k}{4 - 2} = \\frac{12 + k}{2} = 5 $$\n$$ 12 + k = 10 \\implies k = -2 $$",
    category: "EST2-isolation",
    topics: ["Functions", "Inverse Functions", "Isolation"]
  },
  {
    id: 10,
    question: "Given $f(x) = 2x + a$ and $g(x) = b x - 3$. If $(f \\circ g)(x) = 6x + 5$ for all $x$, what is the value of $a + b$?",
    options: [
      "A) $8$",
      "B) $11$",
      "C) $14$",
      "D) $17$",
      "E) $20$"
    ],
    correctAnswer: 2,
    explanation: "Evaluate composite function $(f \\circ g)(x)$:\n$$ f(g(x)) = 2(bx - 3) + a = 2bx - 6 + a $$\nMatch coefficients with $6x + 5$:\n$$ 2b = 6 \\implies b = 3 $$\n$$ -6 + a = 5 \\implies a = 11 $$\nThus, $a + b = 11 + 3 = 14$.",
    category: "EST2-isolation",
    topics: ["Composite Functions", "Isolation"]
  },
  {
    id: 11,
    question: "If $|2x - 3y| = 4z + 1$ and $2x < 3y$, which expression correctly isolates $y$ in terms of $x$ and $z$?",
    options: [
      "A) $y = \\frac{2x - 4z - 1}{3}$",
      "B) $y = \\frac{2x + 4z + 1}{3}$",
      "C) $y = \\frac{-2x + 4z + 1}{3}$",
      "D) $y = \\frac{4z + 1 - 2x}{3}$",
      "E) $y = \\frac{3x + 4z + 1}{2}$"
    ],
    correctAnswer: 1,
    explanation: "Since $2x < 3y$, $2x - 3y < 0$. Therefore, $|2x - 3y| = -(2x - 3y) = 3y - 2x$.\n$$ 3y - 2x = 4z + 1 $$\n$$ 3y = 2x + 4z + 1 \\implies y = \\frac{2x + 4z + 1}{3} $$",
    category: "EST2-isolation",
    topics: ["Absolute Value", "Isolation", "Algebra"]
  },
  {
    id: 12,
    question: "If $\\log_a(b) = x$ and $\\log_b(c) = y$, which expression gives $\\log_c(a)$ in terms of $x$ and $y$?",
    options: [
      "A) $x y$",
      "B) $\\frac{x}{y}$",
      "C) $\\frac{y}{x}$",
      "D) $\\frac{1}{x y}$",
      "E) $x + y$"
    ],
    correctAnswer: 3,
    explanation: "Using the change-of-base formula / chain rule for logarithms:\n$$ \\log_a(c) = \\log_a(b) \\cdot \\log_b(c) = x y $$\nSince $\\log_c(a) = \\frac{1}{\\log_a(c)}$, we get:\n$$ \\log_c(a) = \\frac{1}{x y} $$",
    category: "EST2-isolation",
    topics: ["Logarithms", "Change of Base", "Isolation"]
  },
  {
    id: 13,
    question: "If $y^2 - 2xy + (x^2 - 9) = 0$, which expression correctly isolates $y$ in terms of $x$?",
    options: [
      "A) $y = x \\pm 9$",
      "B) $y = x \\pm 3$",
      "C) $y = 2x \\pm 3$",
      "D) $y = \\sqrt{x^2 - 9}$",
      "E) $y = -x \\pm 3$"
    ],
    correctAnswer: 1,
    explanation: "Rewrite the quadratic equation:\n$$ y^2 - 2xy + x^2 = 9 $$\nRecognize the perfect square trinomial:\n$$ (y - x)^2 = 9 $$\nTake square roots:\n$$ y - x = \\pm 3 \\implies y = x \\pm 3 $$",
    category: "EST2-isolation",
    topics: ["Quadratic Equations", "Isolation", "Algebra"]
  },
  {
    id: 14,
    question: "If $\\frac{5x - 1}{x^2 - 1} = \\frac{A}{x - 1} + \\frac{B}{x + 1}$ for all $x \\neq \\pm 1$, what is the value of $A - B$?",
    options: [
      "A) $-5$",
      "B) $-1$",
      "C) $1$",
      "D) $5$",
      "E) $6$"
    ],
    correctAnswer: 1,
    explanation: "Clear denominators:\n$$ 5x - 1 = A(x + 1) + B(x - 1) $$\nFor $x = 1$: $5(1) - 1 = A(2) \\implies 4 = 2A \\implies A = 2$.\nFor $x = -1$: $5(-1) - 1 = B(-2) \\implies -6 = -2B \\implies B = 3$.\nTherefore, $A - B = 2 - 3 = -1$.",
    category: "EST2-isolation",
    topics: ["Partial Fractions", "Isolation", "Algebra"]
  },
  {
    id: 15,
    question: "If $2^{x + y} = 5^{2x - y}$, then $x$ expressed in terms of $y$ is:",
    options: [
      "A) $x = y \\frac{\\ln 2 - \\ln 5}{2\\ln 5 + \\ln 2}$",
      "B) $x = y \\frac{\\ln 2 + \\ln 5}{2\\ln 5 - \\ln 2}$",
      "C) $x = y \\frac{2\\ln 5 - \\ln 2}{\\ln 2 + \\ln 5}$",
      "D) $x = y \\frac{\\ln 10}{\\ln 5}$",
      "E) $x = y \\frac{2\\ln 2}{\\ln 5}$"
    ],
    correctAnswer: 1,
    explanation: "Take natural logarithms of both sides:\n$$ \\ln(2^{x + y}) = \\ln(5^{2x - y}) $$\n$$ (x + y)\\ln 2 = (2x - y)\\ln 5 $$\n$$ x\\ln 2 + y\\ln 2 = 2x\\ln 5 - y\\ln 5 $$\nCollect $x$ terms on the right and $y$ terms on the left:\n$$ y\\ln 2 + y\\ln 5 = 2x\\ln 5 - x\\ln 2 $$\n$$ y(\\ln 2 + \\ln 5) = x(2\\ln 5 - \\ln 2) $$\n$$ x = y \\frac{\\ln 2 + \\ln 5}{2\\ln 5 - \\ln 2} $$",
    category: "EST2-isolation",
    topics: ["Exponentials", "Logarithms", "Isolation"]
  },
  {
    id: 16,
    question: "The polar equation of a curve is $r = \\frac{6}{2 + 3\\cos\\theta}$. Which Cartesian equation in $x$ and $y$ represents this curve?",
    options: [
      "A) $5x^2 - 36x - 4y^2 + 36 = 0$",
      "B) $4x^2 + 4y^2 + 3x = 36$",
      "C) $x^2 + y^2 - 36x + 36 = 0$",
      "D) $5x^2 + 4y^2 - 36x = 0$",
      "E) $9x^2 - 4y^2 + 36x - 36 = 0$"
    ],
    correctAnswer: 0,
    explanation: "Multiply both sides by $(2 + 3\\cos\\theta)$:\n$$ 2r + 3r\\cos\\theta = 6 $$\nSubstitute $r\\cos\\theta = x$ and $r = \\sqrt{x^2 + y^2}$:\n$$ 2\\sqrt{x^2 + y^2} + 3x = 6 \\implies 2\\sqrt{x^2 + y^2} = 6 - 3x $$\nSquare both sides:\n$$ 4(x^2 + y^2) = (6 - 3x)^2 = 36 - 36x + 9x^2 $$\n$$ 4x^2 + 4y^2 = 36 - 36x + 9x^2 $$\n$$ 5x^2 - 36x - 4y^2 + 36 = 0 $$",
    category: "EST2-isolation",
    topics: ["Polar Coordinates", "Cartesian Equations", "Isolation"]
  },
  {
    id: 17,
    question: "If $\\tan\\theta + \\cot\\theta = k$, what is the value of $\\sin(2\\theta)$ in terms of $k$?",
    options: [
      "A) $\\frac{k}{2}$",
      "B) $\\frac{1}{k}$",
      "C) $\\frac{2}{k}$",
      "D) $\\frac{2}{k^2}$",
      "E) $2k$"
    ],
    correctAnswer: 2,
    explanation: "Express $\\tan\\theta$ and $\\cot\\theta$ in terms of sine and cosine:\n$$ \\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta} = k $$\nCombine over common denominator:\n$$ \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta} = \\frac{1}{\\sin\\theta\\cos\\theta} = k $$\n$$ \\sin\\theta\\cos\\theta = \\frac{1}{k} $$\nSince $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$:\n$$ \\sin(2\\theta) = 2 \\left(\\frac{1}{k}\\right) = \\frac{2}{k} $$",
    category: "EST2-isolation",
    topics: ["Trigonometric Identities", "Isolation"]
  },
  {
    id: 18,
    question: "If $u = \\frac{\\sqrt[3]{x} + 2}{\\sqrt[3]{x} - 1}$, solve for $x$ in terms of $u$.",
    options: [
      "A) $x = \\left(\\frac{u - 2}{u + 1}\\right)^3$",
      "B) $x = \\left(\\frac{u + 2}{u - 1}\\right)^3$",
      "C) $x = \\frac{(u + 2)^3}{u - 1}$",
      "D) $x = \\left(\\frac{u - 1}{u + 2}\\right)^3$",
      "E) $x = \\sqrt[3]{\\frac{u + 2}{u - 1}}$"
    ],
    correctAnswer: 1,
    explanation: "Multiply both sides by $(\\sqrt[3]{x} - 1)$:\n$$ u(\\sqrt[3]{x} - 1) = \\sqrt[3]{x} + 2 $$\n$$ u\\sqrt[3]{x} - u = \\sqrt[3]{x} + 2 $$\nCollect terms with $\\sqrt[3]{x}$:\n$$ u\\sqrt[3]{x} - \\sqrt[3]{x} = u + 2 \\implies \\sqrt[3]{x}(u - 1) = u + 2 $$\nDivide by $(u - 1)$:\n$$ \\sqrt[3]{x} = \\frac{u + 2}{u - 1} $$\nCube both sides:\n$$ x = \\left(\\frac{u + 2}{u - 1}\\right)^3 $$",
    category: "EST2-isolation",
    topics: ["Radicals", "Rational Functions", "Isolation"]
  },
  {
    id: 19,
    question: "An infinite geometric series has first term $a$ and sum $S = \\frac{a}{1 - r}$ where $|r| < 1$. If the sum $S = 5a + 2$, express common ratio $r$ in terms of $a$.",
    options: [
      "A) $r = \\frac{4a + 2}{5a + 2}$",
      "B) $r = \\frac{5a + 2}{4a + 2}$",
      "C) $r = \\frac{a - 2}{5a + 2}$",
      "D) $r = \\frac{6a + 2}{5a + 2}$",
      "E) $r = 1 - 5a$"
    ],
    correctAnswer: 0,
    explanation: "Equate the sum formulas:\n$$ \\frac{a}{1 - r} = 5a + 2 $$\nTake reciprocals or multiply across:\n$$ 1 - r = \\frac{a}{5a + 2} $$\nSubtract from $1$:\n$$ r = 1 - \\frac{a}{5a + 2} = \\frac{5a + 2 - a}{5a + 2} = \\frac{4a + 2}{5a + 2} $$",
    category: "EST2-isolation",
    topics: ["Sequences and Series", "Isolation"]
  },
  {
    id: 20,
    question: "Given complex number relation $w = \\frac{z + i}{z - i}$ where $i = \\sqrt{-1}$, solve for $z$ in terms of $w$.",
    options: [
      "A) $z = i \\frac{w - 1}{w + 1}$",
      "B) $z = i \\frac{w + 1}{w - 1}$",
      "C) $z = \\frac{w + i}{w - i}$",
      "D) $z = -i \\frac{w + 1}{w - 1}$",
      "E) $z = i(w^2 - 1)$"
    ],
    correctAnswer: 1,
    explanation: "Multiply both sides by $(z - i)$:\n$$ w(z - i) = z + i $$\n$$ w z - w i = z + i $$\nCollect terms with $z$ on the left:\n$$ w z - z = w i + i \\implies z(w - 1) = i(w + 1) $$\nDivide by $(w - 1)$:\n$$ z = i \\frac{w + 1}{w - 1} $$",
    category: "EST2-isolation",
    topics: ["Complex Numbers", "Isolation", "Algebra"]
  }
];
