import { Question } from '../../types';

export const EST1_INVERSE_FUNCTION_SET: Question[] = [
  // Linear Functions (1-8)
  {
    id: 1,
    question: "If $f(x) = 3x - 12$, what is the equation for $f^{-1}(x)$?",
    options: ["$f^{-1}(x) = 3x + 12$", "$f^{-1}(x) = \\frac{x}{3} + 4$", "$f^{-1}(x) = \\frac{x - 12}{3}$", "$f^{-1}(x) = -3x + 12$"],
    correctAnswer: 1,
    explanation: "To find the inverse, swap $x$ and $y$: $x = 3y - 12$. Solve for $y$: $x + 12 = 3y \\Rightarrow y = \\frac{x}{3} + 4$.",
    category: "Linear"
  },
  {
    id: 2,
    question: "If $g(x) = \\frac{2}{5}x + 4$, find $g^{-1}(x)$.",
    options: ["$g^{-1}(x) = \\frac{5}{2}x - 10$", "$g^{-1}(x) = \\frac{5}{2}x - 4$", "$g^{-1}(x) = \\frac{2}{5}x - 4$", "$g^{-1}(x) = 5x - 20$"],
    correctAnswer: 0,
    explanation: "$x = \\frac{2}{5}y + 4 \\Rightarrow x - 4 = \\frac{2}{5}y$. Multiply by $\\frac{5}{2}$: $y = \\frac{5}{2}(x - 4) = \\frac{5}{2}x - 10$.",
    category: "Linear"
  },
  {
    id: 3,
    question: "The function $h$ is defined by $h(x) = 7 - 2x$. What is the value of $h^{-1}(3)$?",
    options: ["1", "2", "3", "5"],
    correctAnswer: 1,
    explanation: "We want to find $x$ such that $h(x) = 3$. $7 - 2x = 3 \\Rightarrow -2x = -4 \\Rightarrow x = 2$. So $h^{-1}(3) = 2$.",
    category: "Linear"
  },
  {
    id: 4,
    question: "A linear function $f$ has an inverse $f^{-1}$. If $f(2) = 8$ and $f(5) = 17$, what is the value of $f^{-1}(17)$?",
    options: ["2", "5", "8", "17"],
    correctAnswer: 1,
    explanation: "By definition of an inverse function, if $f(a) = b$, then $f^{-1}(b) = a$. Since $f(5) = 17$, it follows that $f^{-1}(17) = 5$.",
    category: "Linear"
  },
  {
    id: 5,
    question: "If $f(x) = \\frac{x - 5}{3}$, which of the following represents $f^{-1}(x)$?",
    options: ["$f^{-1}(x) = 3x + 5$", "$f^{-1}(x) = 3x - 5$", "$f^{-1}(x) = \\frac{x}{3} + 5$", "$f^{-1}(x) = 3x + 15$"],
    correctAnswer: 0,
    explanation: "Swap $x$ and $y$: $x = \\frac{y - 5}{3}$. Multiply by 3: $3x = y - 5$. Add 5: $y = 3x + 5$.",
    category: "Linear"
  },
  {
    id: 6,
    question: "If $p(x) = 4x + c$ and $p^{-1}(10) = 2$, what is the value of the constant $c$?",
    options: ["2", "4", "8", "10"],
    correctAnswer: 0,
    explanation: "If $p^{-1}(10) = 2$, then $p(2) = 10$. Substitute $x=2$ into $p(x)$: $4(2) + c = 10 \\Rightarrow 8 + c = 10 \\Rightarrow c = 2$.",
    category: "Linear"
  },
  {
    id: 7,
    question: "Let $f(x) = -x + 6$. For what value of $x$ does $f(x) = f^{-1}(x)$?",
    options: ["Any real number", "3 only", "6 only", "No real value"],
    correctAnswer: 0,
    explanation: "Find $f^{-1}(x)$: $x = -y + 6 \\Rightarrow y = -x + 6$. Since $f(x) = f^{-1}(x)$ for all $x$, they intersect everywhere.",
    category: "Linear"
  },
  {
    id: 8,
    question: "If $f(x) = \\frac{2x + 7}{5}$, what is $f^{-1}(-1)$?",
    options: ["-6", "-1", "6", "1"],
    correctAnswer: 0,
    explanation: "Set $f(x) = -1$: $\\frac{2x + 7}{5} = -1 \\Rightarrow 2x + 7 = -5 \\Rightarrow 2x = -12 \\Rightarrow x = -6$.",
    category: "Linear"
  },
  // Radical Functions (9-15)
  {
    id: 9,
    question: "If $f(x) = \\sqrt{x - 4}$ for $x \\ge 4$, what is $f^{-1}(x)$?",
    options: ["$f^{-1}(x) = x^2 + 4, x \\ge 0$", "$f^{-1}(x) = x^2 - 4, x \\ge 0$", "$f^{-1}(x) = \\sqrt{x + 4}, x \\ge 0$", "$f^{-1}(x) = (x - 4)^2, x \\ge 0$"],
    correctAnswer: 0,
    explanation: "Swap $x$ and $y$: $x = \\sqrt{y - 4}$. Square both sides: $x^2 = y - 4$. Add 4: $y = x^2 + 4$. The domain of $f^{-1}$ is the range of $f$, which is $x \\ge 0$.",
    category: "Radical"
  },
  {
    id: 10,
    question: "If $g(x) = 3\\sqrt{x} + 2$ for $x \\ge 0$, find $g^{-1}(x)$.",
    options: ["$g^{-1}(x) = \\left(\\frac{x - 2}{3}\\right)^2, x \\ge 2$", "$g^{-1}(x) = \\frac{x^2 - 2}{9}, x \\ge 2$", "$g^{-1}(x) = \\frac{(x - 2)^2}{3}, x \\ge 2$", "$g^{-1}(x) = \\left(\\frac{x + 2}{3}\\right)^2, x \\ge -2$"],
    correctAnswer: 0,
    explanation: "$x = 3\\sqrt{y} + 2 \\Rightarrow x - 2 = 3\\sqrt{y} \\Rightarrow \\frac{x - 2}{3} = \\sqrt{y} \\Rightarrow y = \\left(\\frac{x - 2}{3}\\right)^2$. The range of $g$ is $[2, \\infty)$, so the domain of $g^{-1}$ is $x \\ge 2$.",
    category: "Radical"
  },
  {
    id: 11,
    question: "The function $h$ is defined by $h(x) = \\sqrt[3]{4x - 1}$. What is $h^{-1}(x)$?",
    options: ["$h^{-1}(x) = \\frac{x^3 + 1}{4}$", "$h^{-1}(x) = \\frac{x^3 - 1}{4}$", "$h^{-1}(x) = 4x^3 + 1$", "$h^{-1}(x) = \\sqrt[3]{\\frac{x + 1}{4}}$"],
    correctAnswer: 0,
    explanation: "Swap $x$ and $y$: $x = \\sqrt[3]{4y - 1}$. Cube both sides: $x^3 = 4y - 1$. Add 1: $x^3 + 1 = 4y$. Divide by 4: $y = \\frac{x^3 + 1}{4}$.",
    category: "Radical"
  },
  {
    id: 12,
    question: "If $f(x) = \\sqrt{10 - x}$ for $x \\le 10$, what is $f^{-1}(3)$?",
    options: ["1", "3", "9", "-1"],
    correctAnswer: 0,
    explanation: "Set $f(x) = 3$: $\\sqrt{10 - x} = 3$. Square both sides: $10 - x = 9$. Solve for $x$: $x = 1$.",
    category: "Radical"
  },
  {
    id: 13,
    question: "If $f(x) = \\sqrt{x} - 7$, what is the domain of $f^{-1}(x)$?",
    options: ["$[-7, \\infty)$", "$[0, \\infty)$", "$[7, \\infty)$", "$(-\\infty, \\infty)$"],
    correctAnswer: 0,
    explanation: "The domain of $f^{-1}(x)$ is the range of $f(x)$. Since $\\sqrt{x} \\ge 0$, $f(x) = \\sqrt{x} - 7 \\ge -7$. Therefore, the range of $f(x)$ is $[-7, \\infty)$.",
    category: "Radical"
  },
  {
    id: 14,
    question: "Let $f(x) = 5 - \\sqrt{x + 1}$. Find the equation for $f^{-1}(x)$.",
    options: ["$f^{-1}(x) = (5 - x)^2 - 1, x \\le 5$", "$f^{-1}(x) = (x - 5)^2 + 1, x \\le 5$", "$f^{-1}(x) = -(x - 5)^2 - 1, x \\ge 5$", "$f^{-1}(x) = (x + 5)^2 - 1, x \\le 5$"],
    correctAnswer: 0,
    explanation: "$x = 5 - \\sqrt{y + 1} \\Rightarrow \\sqrt{y + 1} = 5 - x$. Square both sides: $y + 1 = (5 - x)^2$. Subtract 1: $y = (5 - x)^2 - 1$. The range of $f$ is $y \\le 5$, so the domain of $f^{-1}$ is $x \\le 5$.",
    category: "Radical"
  },
  {
    id: 15,
    question: "If $g(x) = \\sqrt[3]{x} + 4$, what is $g^{-1}(6)$?",
    options: ["8", "2", "64", "16"],
    correctAnswer: 0,
    explanation: "Set $g(x) = 6$: $\\sqrt[3]{x} + 4 = 6 \\Rightarrow \\sqrt[3]{x} = 2$. Cube both sides: $x = 2^3 = 8$.",
    category: "Radical"
  },
  // Rational Functions (16-25)
  {
    id: 16,
    question: "If $f(x) = \\frac{3x}{x - 2}$, what is $f^{-1}(x)$?",
    options: ["$f^{-1}(x) = \\frac{2x}{x - 3}$", "$f^{-1}(x) = \\frac{2x}{3 - x}$", "$f^{-1}(x) = \\frac{x - 2}{3x}$", "$f^{-1}(x) = \\frac{3x}{x + 2}$"],
    correctAnswer: 0,
    explanation: "Swap $x$ and $y$: $x = \\frac{3y}{y - 2}$. Multiply by $y - 2$: $x(y - 2) = 3y \\Rightarrow xy - 2x = 3y$. Rearrange to solve for $y$: $xy - 3y = 2x \\Rightarrow y(x - 3) = 2x \\Rightarrow y = \\frac{2x}{x - 3}$.",
    category: "Rational"
  },
  {
    id: 17,
    question: "If $g(x) = \\frac{x + 5}{x - 1}$, find $g^{-1}(x)$.",
    options: ["$g^{-1}(x) = \\frac{x + 5}{x - 1}$", "$g^{-1}(x) = \\frac{x - 1}{x + 5}$", "$g^{-1}(x) = \\frac{x - 5}{x + 1}$", "$g^{-1}(x) = \\frac{x + 1}{x - 5}$"],
    correctAnswer: 0,
    explanation: "$x = \\frac{y + 5}{y - 1} \\Rightarrow x(y - 1) = y + 5 \\Rightarrow xy - x = y + 5 \\Rightarrow xy - y = x + 5 \\Rightarrow y(x - 1) = x + 5 \\Rightarrow y = \\frac{x + 5}{x - 1}$. Interestingly, $g(x)$ is its own inverse.",
    category: "Rational"
  },
  {
    id: 18,
    question: "The function $h$ is defined by $h(x) = \\frac{7}{x + 3}$. What is $h^{-1}(x)$?",
    options: ["$h^{-1}(x) = \\frac{7}{x} - 3$", "$h^{-1}(x) = \\frac{7 - 3x}{x}$", "$h^{-1}(x) = \\frac{x + 3}{7}$", "Both A and B"],
    correctAnswer: 3,
    explanation: "$x = \\frac{7}{y + 3} \\Rightarrow x(y + 3) = 7 \\Rightarrow y + 3 = \\frac{7}{x} \\Rightarrow y = \\frac{7}{x} - 3$. This can also be written as $\\frac{7 - 3x}{x}$. Thus, both A and B are correct.",
    category: "Rational"
  },
  {
    id: 19,
    question: "If $f(x) = \\frac{4x - 1}{2x + 3}$, what is $f^{-1}(1)$?",
    options: ["2", "4", "-2", "-4"],
    correctAnswer: 0,
    explanation: "Set $f(x) = 1$: $\\frac{4x - 1}{2x + 3} = 1 \\Rightarrow 4x - 1 = 2x + 3 \\Rightarrow 2x = 4 \\Rightarrow x = 2$.",
    category: "Rational"
  },
  {
    id: 20,
    question: "Let $f(x) = \\frac{ax + 3}{x - 2}$. If $f^{-1}(5) = 4$, what is the value of $a$?",
    options: ["1.75", "1", "2", "3"],
    correctAnswer: 0,
    explanation: "If $f^{-1}(5) = 4$, then $f(4) = 5$. Substitute $x=4$ into $f(x)$: $\\frac{4a + 3}{4 - 2} = 5 \\Rightarrow \\frac{4a + 3}{2} = 5 \\Rightarrow 4a + 3 = 10 \\Rightarrow 4a = 7 \\Rightarrow a = 1.75$.",
    category: "Rational"
  },
  {
    id: 21,
    question: "If $f(x) = \\frac{1}{x} + 4$, what is $f^{-1}(x)$?",
    options: ["$f^{-1}(x) = \\frac{1}{x - 4}$", "$f^{-1}(x) = \\frac{1}{x} - 4$", "$f^{-1}(x) = x - 4$", "$f^{-1}(x) = \\frac{x}{1 - 4x}$"],
    correctAnswer: 0,
    explanation: "$x = \\frac{1}{y} + 4 \\Rightarrow x - 4 = \\frac{1}{y} \\Rightarrow y = \\frac{1}{x - 4}$.",
    category: "Rational"
  },
  {
    id: 22,
    question: "If $g(x) = \\frac{5x}{x + 3}$, what is the domain of $g^{-1}(x)$?",
    options: ["All real numbers except 5", "All real numbers except -3", "All real numbers except 0", "All real numbers"],
    correctAnswer: 0,
    explanation: "The domain of $g^{-1}(x)$ is the range of $g(x)$. The horizontal asymptote of $g(x) = \\frac{5x}{x + 3}$ is $y = \\frac{5}{1} = 5$. So the range of $g(x)$ is all real numbers except 5. Therefore, the domain of $g^{-1}(x)$ is $x \\neq 5$.",
    category: "Rational"
  },
  {
    id: 23,
    question: "If $f(x) = \\frac{x - 3}{4x + 1}$, find $f^{-1}(x)$.",
    options: ["$f^{-1}(x) = \\frac{-x - 3}{4x - 1}$", "$f^{-1}(x) = \\frac{x + 3}{1 - 4x}$", "$f^{-1}(x) = \\frac{4x + 1}{x - 3}$", "Both A and B"],
    correctAnswer: 3,
    explanation: "$x = \\frac{y - 3}{4y + 1} \\Rightarrow x(4y + 1) = y - 3 \\Rightarrow 4xy + x = y - 3 \\Rightarrow 4xy - y = -x - 3 \\Rightarrow y(4x - 1) = -x - 3 \\Rightarrow y = \\frac{-x - 3}{4x - 1}$. Multiplying numerator and denominator by -1 gives $\\frac{x + 3}{1 - 4x}$. Both A and B are correct.",
    category: "Rational"
  },
  {
    id: 24,
    question: "If $h(x) = \\frac{3}{x - 4} + 2$, what is $h^{-1}(5)$?",
    options: ["5", "4.5", "6", "7"],
    correctAnswer: 0,
    explanation: "Set $h(x) = 5$: $\\frac{3}{x - 4} + 2 = 5 \\Rightarrow \\frac{3}{x - 4} = 3 \\Rightarrow x - 4 = 1 \\Rightarrow x = 5$.",
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
