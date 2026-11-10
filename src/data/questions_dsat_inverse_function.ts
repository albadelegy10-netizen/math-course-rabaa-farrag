import { Question } from '../../types';

export const DSAT_INVERSE_FUNCTION_SET: Question[] = [
  // Linear Functions (1-8)
  {
    id: 1,
    question: "If $f(x) = 5x - 20$, what is the equation for $f^{-1}(x)$?",
    options: ["$f^{-1}(x) = \\frac{x}{5} + 4$", "$f^{-1}(x) = 5x + 20$", "$f^{-1}(x) = \\frac{x - 20}{5}$", "$f^{-1}(x) = \\frac{x}{5} - 4$"],
    correctAnswer: 0,
    explanation: "To find the inverse, swap $x$ and $y$: $x = 5y - 20$. Solve for $y$: $x + 20 = 5y \\Rightarrow y = \\frac{x}{5} + 4$.",
    category: "Linear"
  },
  {
    id: 2,
    question: "If $g(x) = -\\frac{3}{4}x + 6$, find $g^{-1}(x)$.",
    options: ["$g^{-1}(x) = -\\frac{4}{3}x + 8$", "$g^{-1}(x) = -\\frac{4}{3}x - 8$", "$g^{-1}(x) = \\frac{4}{3}x - 8$", "$g^{-1}(x) = -\\frac{3}{4}x - 6$"],
    correctAnswer: 0,
    explanation: "$x = -\\frac{3}{4}y + 6 \\Rightarrow x - 6 = -\\frac{3}{4}y$. Multiply by $-\\frac{4}{3}$: $y = -\\frac{4}{3}(x - 6) = -\\frac{4}{3}x + 8$.",
    category: "Linear"
  },
  {
    id: 3,
    question: "The function $h$ is defined by $h(x) = 11 - 4x$. What is the value of $h^{-1}(-5)$?",
    options: ["4", "3", "-4", "1"],
    correctAnswer: 0,
    explanation: "We want to find $x$ such that $h(x) = -5$. $11 - 4x = -5 \\Rightarrow -4x = -16 \\Rightarrow x = 4$. So $h^{-1}(-5) = 4$.",
    category: "Linear"
  },
  {
    id: 4,
    question: "A linear function $f$ has an inverse $f^{-1}$. If $f(3) = 10$ and $f(7) = 22$, what is the value of $f^{-1}(22)$?",
    options: ["7", "3", "10", "22"],
    correctAnswer: 0,
    explanation: "By definition of an inverse function, if $f(a) = b$, then $f^{-1}(b) = a$. Since $f(7) = 22$, it follows that $f^{-1}(22) = 7$.",
    category: "Linear"
  },
  {
    id: 5,
    question: "If $f(x) = \\frac{x - 8}{2}$, which of the following represents $f^{-1}(x)$?",
    options: ["$f^{-1}(x) = 2x + 8$", "$f^{-1}(x) = 2x - 8$", "$f^{-1}(x) = \\frac{x}{2} + 4$", "$f^{-1}(x) = 2x + 4$"],
    correctAnswer: 0,
    explanation: "Swap $x$ and $y$: $x = \\frac{y - 8}{2}$. Multiply by 2: $2x = y - 8$. Add 8: $y = 2x + 8$.",
    category: "Linear"
  },
  {
    id: 6,
    question: "If $p(x) = 8x + c$ and $p^{-1}(12) = 1$, what is the value of the constant $c$?",
    options: ["4", "8", "12", "20"],
    correctAnswer: 0,
    explanation: "If $p^{-1}(12) = 1$, then $p(1) = 12$. Substitute $x=1$ into $p(x)$: $8(1) + c = 12 \\Rightarrow 8 + c = 12 \\Rightarrow c = 4$.",
    category: "Linear"
  },
  {
    id: 7,
    question: "Let $f(x) = -2x + 9$. For what value of $x$ does $f(x) = f^{-1}(x)$?",
    options: ["3", "4.5", "9", "-3"],
    correctAnswer: 0,
    explanation: "First, find $f^{-1}(x)$: $x = -2y + 9 \\Rightarrow 2y = 9 - x \\Rightarrow f^{-1}(x) = -\\frac{1}{2}x + 4.5$. Set $f(x) = f^{-1}(x)$: $-2x + 9 = -\\frac{1}{2}x + 4.5 \\Rightarrow 4.5 = 1.5x \\Rightarrow x = 3$.",
    category: "Linear"
  },
  {
    id: 8,
    question: "If $f(x) = \\frac{3x + 5}{4}$, what is $f^{-1}(-1)$?",
    options: ["-3", "-1", "3", "1"],
    correctAnswer: 0,
    explanation: "Set $f(x) = -1$: $\\frac{3x + 5}{4} = -1 \\Rightarrow 3x + 5 = -4 \\Rightarrow 3x = -9 \\Rightarrow x = -3$.",
    category: "Linear"
  },
  // Radical Functions (9-15)
  {
    id: 9,
    question: "If $f(x) = \\sqrt{x - 3}$ for $x \\ge 3$, what is $f^{-1}(x)$?",
    options: ["$f^{-1}(x) = x^2 + 3, x \\ge 0$", "$f^{-1}(x) = x^2 - 3, x \\ge 0$", "$f^{-1}(x) = \\sqrt{x + 3}, x \\ge 0$", "$f^{-1}(x) = (x - 3)^2, x \\ge 0$"],
    correctAnswer: 0,
    explanation: "Swap $x$ and $y$: $x = \\sqrt{y - 3}$. Square both sides: $x^2 = y - 3$. Add 3: $y = x^2 + 3$. The domain of $f^{-1}$ is the range of $f$, which is $x \\ge 0$.",
    category: "Radical"
  },
  {
    id: 10,
    question: "If $g(x) = 2\\sqrt{x} + 1$ for $x \\ge 0$, find $g^{-1}(x)$.",
    options: ["$g^{-1}(x) = \\left(\\frac{x - 1}{2}\\right)^2, x \\ge 1$", "$g^{-1}(x) = \\frac{x^2 - 1}{4}, x \\ge 1$", "$g^{-1}(x) = \\frac{(x - 1)^2}{2}, x \\ge 1$", "$g^{-1}(x) = \\left(\\frac{x + 1}{2}\\right)^2, x \\ge -1$"],
    correctAnswer: 0,
    explanation: "$x = 2\\sqrt{y} + 1 \\Rightarrow x - 1 = 2\\sqrt{y} \\Rightarrow \\frac{x - 1}{2} = \\sqrt{y} \\Rightarrow y = \\left(\\frac{x - 1}{2}\\right)^2$. The range of $g$ is $[1, \\infty)$, so the domain of $g^{-1}$ is $x \\ge 1$.",
    category: "Radical"
  },
  {
    id: 11,
    question: "The function $h$ is defined by $h(x) = \\sqrt[3]{2x - 5}$. What is $h^{-1}(x)$?",
    options: ["$h^{-1}(x) = \\frac{x^3 + 5}{2}$", "$h^{-1}(x) = \\frac{x^3 - 5}{2}$", "$h^{-1}(x) = 2x^3 + 5$", "$h^{-1}(x) = \\sqrt[3]{\\frac{x + 5}{2}}$"],
    correctAnswer: 0,
    explanation: "Swap $x$ and $y$: $x = \\sqrt[3]{2y - 5}$. Cube both sides: $x^3 = 2y - 5$. Add 5: $x^3 + 5 = 2y$. Divide by 2: $y = \\frac{x^3 + 5}{2}$.",
    category: "Radical"
  },
  {
    id: 12,
    question: "If $f(x) = \\sqrt{5 - x}$ for $x \\le 5$, what is $f^{-1}(2)$?",
    options: ["1", "3", "9", "-1"],
    correctAnswer: 0,
    explanation: "Set $f(x) = 2$: $\\sqrt{5 - x} = 2$. Square both sides: $5 - x = 4$. Solve for $x$: $x = 1$.",
    category: "Radical"
  },
  {
    id: 13,
    question: "If $f(x) = \\sqrt{x} - 4$, what is the domain of $f^{-1}(x)$?",
    options: ["$[-4, \\infty)$", "$[0, \\infty)$", "$[4, \\infty)$", "$(-\\infty, \\infty)$"],
    correctAnswer: 0,
    explanation: "The domain of $f^{-1}(x)$ is the range of $f(x)$. Since $\\sqrt{x} \\ge 0$, $f(x) = \\sqrt{x} - 4 \\ge -4$. Therefore, the range of $f(x)$ is $[-4, \\infty)$.",
    category: "Radical"
  },
  {
    id: 14,
    question: "Let $f(x) = 3 - \\sqrt{x + 2}$. Find the equation for $f^{-1}(x)$.",
    options: ["$f^{-1}(x) = (3 - x)^2 - 2, x \\le 3$", "$f^{-1}(x) = (x - 3)^2 + 2, x \\le 3$", "$f^{-1}(x) = -(x - 3)^2 - 2, x \\ge 3$", "$f^{-1}(x) = (x + 3)^2 - 2, x \\le 3$"],
    correctAnswer: 0,
    explanation: "$x = 3 - \\sqrt{y + 2} \\Rightarrow \\sqrt{y + 2} = 3 - x$. Square both sides: $y + 2 = (3 - x)^2$. Subtract 2: $y = (3 - x)^2 - 2$. The range of $f$ is $y \\le 3$, so the domain of $f^{-1}$ is $x \\le 3$.",
    category: "Radical"
  },
  {
    id: 15,
    question: "If $g(x) = \\sqrt[3]{x} + 2$, what is $g^{-1}(5)$?",
    options: ["27", "8", "125", "64"],
    correctAnswer: 0,
    explanation: "Set $g(x) = 5$: $\\sqrt[3]{x} + 2 = 5 \\Rightarrow \\sqrt[3]{x} = 3$. Cube both sides: $x = 3^3 = 27$.",
    category: "Radical"
  },
  // Rational Functions (16-25)
  {
    id: 16,
    question: "If $f(x) = \\frac{2x}{x - 3}$, what is $f^{-1}(x)$?",
    options: ["$f^{-1}(x) = \\frac{3x}{x - 2}$", "$f^{-1}(x) = \\frac{3x}{2 - x}$", "$f^{-1}(x) = \\frac{x - 3}{2x}$", "$f^{-1}(x) = \\frac{2x}{x + 3}$"],
    correctAnswer: 0,
    explanation: "Swap $x$ and $y$: $x = \\frac{2y}{y - 3}$. Multiply by $y - 3$: $x(y - 3) = 2y \\Rightarrow xy - 3x = 2y$. Rearrange to solve for $y$: $xy - 2y = 3x \\Rightarrow y(x - 2) = 3x \\Rightarrow y = \\frac{3x}{x - 2}$.",
    category: "Rational"
  },
  {
    id: 17,
    question: "If $g(x) = \\frac{x + 4}{x - 1}$, find $g^{-1}(x)$.",
    options: ["$g^{-1}(x) = \\frac{x + 4}{x - 1}$", "$g^{-1}(x) = \\frac{x - 1}{x + 4}$", "$g^{-1}(x) = \\frac{x - 4}{x + 1}$", "$g^{-1}(x) = \\frac{x + 1}{x - 4}$"],
    correctAnswer: 0,
    explanation: "$x = \\frac{y + 4}{y - 1} \\Rightarrow x(y - 1) = y + 4 \\Rightarrow xy - x = y + 4 \\Rightarrow xy - y = x + 4 \\Rightarrow y(x - 1) = x + 4 \\Rightarrow y = \\frac{x + 4}{x - 1}$. Interestingly, $g(x)$ is its own inverse.",
    category: "Rational"
  },
  {
    id: 18,
    question: "The function $h$ is defined by $h(x) = \\frac{5}{x + 2}$. What is $h^{-1}(x)$?",
    options: ["$h^{-1}(x) = \\frac{5}{x} - 2$", "$h^{-1}(x) = \\frac{5 - 2x}{x}$", "$h^{-1}(x) = \\frac{x + 2}{5}$", "Both A and B"],
    correctAnswer: 3,
    explanation: "$x = \\frac{5}{y + 2} \\Rightarrow x(y + 2) = 5 \\Rightarrow y + 2 = \\frac{5}{x} \\Rightarrow y = \\frac{5}{x} - 2$. This can also be written as $\\frac{5 - 2x}{x}$. Thus, both A and B are correct.",
    category: "Rational"
  },
  {
    id: 19,
    question: "If $f(x) = \\frac{3x - 1}{2x + 5}$, what is $f^{-1}(1)$?",
    options: ["6", "2", "-6", "-2"],
    correctAnswer: 0,
    explanation: "Set $f(x) = 1$: $\\frac{3x - 1}{2x + 5} = 1 \\Rightarrow 3x - 1 = 2x + 5 \\Rightarrow x = 6$.",
    category: "Rational"
  },
  {
    id: 20,
    question: "Let $f(x) = \\frac{ax + 2}{x - 3}$. If $f^{-1}(4) = 5$, what is the value of $a$?",
    options: ["1", "1.2", "2", "3"],
    correctAnswer: 1,
    explanation: "If $f^{-1}(4) = 5$, then $f(5) = 4$. Substitute $x=5$ into $f(x)$: $\\frac{5a + 2}{5 - 3} = 4 \\Rightarrow \\frac{5a + 2}{2} = 4 \\Rightarrow 5a + 2 = 8 \\Rightarrow 5a = 6 \\Rightarrow a = 1.2$.",
    category: "Rational"
  },
  {
    id: 21,
    question: "If $f(x) = \\frac{1}{x} + 3$, what is $f^{-1}(x)$?",
    options: ["$f^{-1}(x) = \\frac{1}{x - 3}$", "$f^{-1}(x) = \\frac{1}{x} - 3$", "$f^{-1}(x) = x - 3$", "$f^{-1}(x) = \\frac{x}{1 - 3x}$"],
    correctAnswer: 0,
    explanation: "$x = \\frac{1}{y} + 3 \\Rightarrow x - 3 = \\frac{1}{y} \\Rightarrow y = \\frac{1}{x - 3}$.",
    category: "Rational"
  },
  {
    id: 22,
    question: "If $g(x) = \\frac{4x}{x + 2}$, what is the domain of $g^{-1}(x)$?",
    options: ["All real numbers except 4", "All real numbers except -2", "All real numbers except 0", "All real numbers"],
    correctAnswer: 0,
    explanation: "The domain of $g^{-1}(x)$ is the range of $g(x)$. The horizontal asymptote of $g(x) = \\frac{4x}{x + 2}$ is $y = \\frac{4}{1} = 4$. So the range of $g(x)$ is all real numbers except 4. Therefore, the domain of $g^{-1}(x)$ is $x \\neq 4$.",
    category: "Rational"
  },
  {
    id: 23,
    question: "If $f(x) = \\frac{x - 2}{3x + 1}$, find $f^{-1}(x)$.",
    options: ["$f^{-1}(x) = \\frac{-x - 2}{3x - 1}$", "$f^{-1}(x) = \\frac{x + 2}{1 - 3x}$", "$f^{-1}(x) = \\frac{3x + 1}{x - 2}$", "Both A and B"],
    correctAnswer: 3,
    explanation: "$x = \\frac{y - 2}{3y + 1} \\Rightarrow x(3y + 1) = y - 2 \\Rightarrow 3xy + x = y - 2 \\Rightarrow 3xy - y = -x - 2 \\Rightarrow y(3x - 1) = -x - 2 \\Rightarrow y = \\frac{-x - 2}{3x - 1}$. Multiplying numerator and denominator by -1 gives $\\frac{x + 2}{1 - 3x}$. Both A and B are correct.",
    category: "Rational"
  },
  {
    id: 24,
    question: "If $h(x) = \\frac{2}{x - 5} + 1$, what is $h^{-1}(3)$?",
    options: ["6", "5.5", "4", "7"],
    correctAnswer: 0,
    explanation: "Set $h(x) = 3$: $\\frac{2}{x - 5} + 1 = 3 \\Rightarrow \\frac{2}{x - 5} = 2 \\Rightarrow x - 5 = 1 \\Rightarrow x = 6$.",
    category: "Rational"
  },
  {
    id: 25,
    question: "Let $f(x) = \\frac{cx}{x - c}$. For what value(s) of $c$ is $f(x) = f^{-1}(x)$?",
    options: ["Any real number $c \\neq 0$", "$c = 1$ only", "$c = -1$ only", "No real value of $c$"],
    correctAnswer: 0,
    explanation: "Find $f^{-1}(x)$: $x = \\frac{cy}{y - c} \\Rightarrow xy - cx = cy \\Rightarrow xy - cy = cx \\Rightarrow y(x - c) = cx \\Rightarrow y = \\frac{cx}{x - c}$. We see that $f^{-1}(x) = f(x)$ for any constant $c$ (as long as $c \\neq 0$ so it's not a trivial function).",
    category: "Rational"
  }
];
