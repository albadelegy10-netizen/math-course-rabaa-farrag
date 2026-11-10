import fs from 'fs';
import { Question } from './types';

const questions: Question[] = [
  {
    id: "est2_inv_1",
    question: "If $f(x) = 3x - 4$, what is $f^{-1}(x)$?",
    options: ["$\\frac{x - 4}{3}$", "$\\frac{x + 4}{3}$", "$3x + 4$", "$\\frac{x}{3} - 4$"],
    correctAnswer: 1,
    explanation: "Let $y = 3x - 4$. Swap $x$ and $y$: $x = 3y - 4$. Solve for $y$: $3y = x + 4 \\implies y = \\frac{x + 4}{3}$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_2",
    question: "Given that $f(x) = \\frac{2x + 5}{x - 1}$, find $f^{-1}(x)$.",
    options: ["$\\frac{x + 5}{x - 2}$", "$\\frac{x - 5}{x + 2}$", "$\\frac{2x - 5}{x + 1}$", "$\\frac{x - 1}{2x + 5}$"],
    correctAnswer: 0,
    explanation: "Let $y = \\frac{2x + 5}{x - 1}$. Swap $x$ and $y$: $x = \\frac{2y + 5}{y - 1}$. Solve for $y$: $x(y - 1) = 2y + 5 \\implies xy - x = 2y + 5 \\implies xy - 2y = x + 5 \\implies y(x - 2) = x + 5 \\implies y = \\frac{x + 5}{x - 2}$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_3",
    question: "If $f(x) = x^3 + 2$, what is $f^{-1}(10)$?",
    options: ["8", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "We need to find $x$ such that $f(x) = 10$. So, $x^3 + 2 = 10 \\implies x^3 = 8 \\implies x = 2$. Therefore, $f^{-1}(10) = 2$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_4",
    question: "Which of the following functions has an inverse that is also a function?",
    options: ["$f(x) = x^2$", "$f(x) = |x|$", "$f(x) = x^3 - 1$", "$f(x) = \\sin(x)$"],
    correctAnswer: 2,
    explanation: "A function has an inverse that is a function if and only if it is one-to-one (passes the horizontal line test). $f(x) = x^2$, $f(x) = |x|$, and $f(x) = \\sin(x)$ fail the horizontal line test. $f(x) = x^3 - 1$ is strictly increasing and thus one-to-one.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_5",
    question: "If $f(x) = \\sqrt{x - 3}$ for $x \\ge 3$, what is the domain of $f^{-1}(x)$?",
    options: ["$x \\ge 3$", "$x \\ge 0$", "$x \\le 3$", "All real numbers"],
    correctAnswer: 1,
    explanation: "The domain of $f^{-1}(x)$ is the range of $f(x)$. Since $f(x) = \\sqrt{x - 3}$, the output is always non-negative. Therefore, the range of $f(x)$ is $y \\ge 0$. The domain of $f^{-1}(x)$ is $x \\ge 0$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_6",
    question: "Find the inverse of $f(x) = \\ln(x - 2)$.",
    options: ["$e^{x - 2}$", "$e^x + 2$", "$e^{x+2}$", "$e^x - 2$"],
    correctAnswer: 1,
    explanation: "Let $y = \\ln(x - 2)$. Swap $x$ and $y$: $x = \\ln(y - 2)$. Exponentiate both sides: $e^x = y - 2 \\implies y = e^x + 2$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_7",
    question: "If $f(x) = e^{2x - 1}$, what is $f^{-1}(x)$?",
    options: ["$\\frac{\\ln(x) + 1}{2}$", "$\\frac{\\ln(x) - 1}{2}$", "$\\ln(2x - 1)$", "$2\\ln(x) + 1$"],
    correctAnswer: 0,
    explanation: "Let $y = e^{2x - 1}$. Swap $x$ and $y$: $x = e^{2y - 1}$. Take the natural logarithm of both sides: $\\ln(x) = 2y - 1 \\implies 2y = \\ln(x) + 1 \\implies y = \\frac{\\ln(x) + 1}{2}$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_8",
    question: "If the point $(a, b)$ is on the graph of $y = f(x)$, which point must be on the graph of $y = f^{-1}(x)$?",
    options: ["$(-a, -b)$", "$(a, -b)$", "$(b, a)$", "$(-b, -a)$"],
    correctAnswer: 2,
    explanation: "The graph of $f^{-1}(x)$ is the reflection of the graph of $f(x)$ across the line $y = x$. This transformation maps any point $(x, y)$ to $(y, x)$. Thus, $(b, a)$ is on the graph of $f^{-1}(x)$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_9",
    question: "Given $f(x) = 5x - 7$, evaluate $f(f^{-1}(12))$.",
    options: ["12", "5", "53", "$\\frac{19}{5}$"],
    correctAnswer: 0,
    explanation: "By the definition of inverse functions, $f(f^{-1}(x)) = x$ for all $x$ in the domain of $f^{-1}$. Thus, $f(f^{-1}(12)) = 12$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_10",
    question: "If $g(x) = 2x^2 + 1$ for $x \\ge 0$, find $g^{-1}(x)$.",
    options: ["$\\sqrt{\\frac{x - 1}{2}}$", "$\\sqrt{\\frac{x + 1}{2}}$", "$\\frac{\\sqrt{x - 1}}{2}$", "$\\frac{\\sqrt{x} - 1}{2}$"],
    correctAnswer: 0,
    explanation: "Let $y = 2x^2 + 1$. Swap $x$ and $y$: $x = 2y^2 + 1$. Solve for $y$: $2y^2 = x - 1 \\implies y^2 = \\frac{x - 1}{2}$. Since $x \\ge 0$ originally, the range of $g^{-1}$ is non-negative, so $y = \\sqrt{\\frac{x - 1}{2}}$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_11",
    question: "If $f(x) = \\frac{x}{x + 3}$, for which value of $x$ is $f^{-1}(x)$ undefined?",
    options: ["$-3$", "0", "1", "3"],
    correctAnswer: 2,
    explanation: "Find the inverse: $x = \\frac{y}{y + 3} \\implies xy + 3x = y \\implies 3x = y - xy \\implies 3x = y(1 - x) \\implies y = \\frac{3x}{1 - x}$. The inverse is undefined when the denominator is zero, which occurs at $x = 1$. Alternatively, the horizontal asymptote of $f(x)$ is $y = 1$, which means 1 is not in the range of $f(x)$, so 1 is not in the domain of $f^{-1}(x)$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_12",
    question: "Suppose $h(x)$ is an invertible function such that $h(3) = 7$ and $h(7) = 11$. What is the value of $h^{-1}(7)$?",
    options: ["3", "7", "11", "$\\frac{1}{7}$"],
    correctAnswer: 0,
    explanation: "Since $h(3) = 7$, it follows by definition that $h^{-1}(7) = 3$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_13",
    question: "If $f(x) = 4 - x^3$, find $f^{-1}(x)$.",
    options: ["$\\sqrt[3]{x - 4}$", "$\\sqrt[3]{4 - x}$", "$4 - \\sqrt[3]{x}$", "$\\frac{1}{4 - x^3}$"],
    correctAnswer: 1,
    explanation: "Let $y = 4 - x^3$. Swap $x$ and $y$: $x = 4 - y^3$. Solve for $y$: $y^3 = 4 - x \\implies y = \\sqrt[3]{4 - x}$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_14",
    question: "Which of the following operations describes the relationship between the graph of a function and the graph of its inverse?",
    options: ["Reflection across the x-axis", "Reflection across the y-axis", "Reflection across the line $y = x$", "Rotation by $90^{\\circ}$ about the origin"],
    correctAnswer: 2,
    explanation: "The graph of $f^{-1}(x)$ is formed by reflecting the graph of $f(x)$ across the line $y = x$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_15",
    question: "Find the inverse function of $f(x) = 10^{x+1}$.",
    options: ["$\\log(x) - 1$", "$\\log(x + 1)$", "$\\log(x) + 1$", "$10^{x-1}$"],
    correctAnswer: 0,
    explanation: "Let $y = 10^{x+1}$. Swap $x$ and $y$: $x = 10^{y+1}$. Take the common logarithm (base 10) of both sides: $\\log(x) = y + 1 \\implies y = \\log(x) - 1$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_16",
    question: "Let $f(x) = \\frac{1}{x - 2}$. What is $f^{-1}(x)$?",
    options: ["$\\frac{1}{x} + 2$", "$\\frac{1}{x - 2}$", "$\\frac{1}{x} - 2$", "$x - 2$"],
    correctAnswer: 0,
    explanation: "Let $y = \\frac{1}{x - 2}$. Swap $x$ and $y$: $x = \\frac{1}{y - 2}$. Solve for $y$: $y - 2 = \\frac{1}{x} \\implies y = \\frac{1}{x} + 2$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_17",
    question: "If $f(x) = 2x + k$ and $f^{-1}(5) = 1$, what is the value of $k$?",
    options: ["1", "2", "3", "5"],
    correctAnswer: 2,
    explanation: "$f^{-1}(5) = 1 \\implies f(1) = 5$. Substitute $x = 1$ into $f(x)$: $f(1) = 2(1) + k = 5 \\implies 2 + k = 5 \\implies k = 3$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_18",
    question: "Given $f(x) = \\frac{3x - 2}{x + 4}$, what is the horizontal asymptote of $f^{-1}(x)$?",
    options: ["$y = 3$", "$y = -4$", "$y = -\\frac{1}{4}$", "$y = \\frac{2}{3}$"],
    correctAnswer: 1,
    explanation: "The horizontal asymptote of $f^{-1}(x)$ corresponds to the vertical asymptote of $f(x)$. The vertical asymptote of $f(x)$ is $x = -4$. Therefore, the horizontal asymptote of $f^{-1}(x)$ is $y = -4$. Alternatively, find $f^{-1}(x) = \\frac{-4x - 2}{x - 3}$ whose horizontal asymptote is $y = \\frac{-4}{1} = -4$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_19",
    question: "What is the inverse of $y = (x - 2)^3 + 5$?",
    options: ["$y = \\sqrt[3]{x - 5} + 2$", "$y = \\sqrt[3]{x + 5} - 2$", "$y = \\sqrt[3]{x - 2} + 5$", "$y = (x + 2)^3 - 5$"],
    correctAnswer: 0,
    explanation: "Swap $x$ and $y$: $x = (y - 2)^3 + 5$. Solve for $y$: $(y - 2)^3 = x - 5 \\implies y - 2 = \\sqrt[3]{x - 5} \\implies y = \\sqrt[3]{x - 5} + 2$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  },
  {
    id: "est2_inv_20",
    question: "If $f(x)$ and $g(x)$ are inverse functions, and $f(4) = 9$, which of the following must be true?",
    options: ["$g(9) = 4$", "$g(4) = 9$", "$f(9) = 4$", "$f^{-1}(4) = 9$"],
    correctAnswer: 0,
    explanation: "If $f$ and $g$ are inverses, then $f(a) = b \\implies g(b) = a$. Since $f(4) = 9$, it must be true that $g(9) = 4$.",
    category: "Functions",
    topics: ["Inverse Functions"]
  }
];

const fileContent = `import { Question } from '../types';\n\nexport const EST2_INVERSE_FUNCTION1_SET: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync('src/data/questions_est2_inverse_function1.ts', fileContent, 'utf-8');
console.log("questions_est2_inverse_function1.ts generated.");
