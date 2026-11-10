import { Question } from './types';

export const est2_rational_questions: Question[] = [
  {
    id: "est2_rational_1",
    question: `What is the domain of the function $f(x) = \\frac{3x - 1}{x + 5}$?`,
    options: [
      `All real numbers except $x = -5$`,
      `All real numbers except $x = 5$`,
      `All real numbers except $x = \\frac{1}{3}$`,
      `All real numbers except $x = 3$`,
    ],
    correctAnswer: 0,
    explanation: `The denominator cannot be zero. Setting $x + 5 = 0$ gives $x = -5$. So, the domain is all real numbers except $x = -5$.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_2",
    question: `Find the domain of $g(x) = \\frac{2x}{x^2 - 9}$.`,
    options: [
      `$x \\neq 3$`,
      `$x \\neq -3$`,
      `$x \\neq -3$ and $x \\neq 3$`,
      `$x \\neq 0$`,
    ],
    correctAnswer: 2,
    explanation: `The denominator $x^2 - 9$ factors to $(x - 3)(x + 3)$. Setting it to zero gives $x = 3$ and $x = -3$. The domain is all real numbers except these values.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_3",
    question: `What is the domain of $h(x) = \\frac{x - 4}{x^2 + 4x + 4}$?`,
    options: [
      `$x \\neq -4$`,
      `$x \\neq -2$`,
      `$x \\neq 2$`,
      `$x \\neq 4$`,
    ],
    correctAnswer: 1,
    explanation: `The denominator $x^2 + 4x + 4$ is a perfect square $(x + 2)^2$. Setting it to zero gives $x = -2$. Thus, $x \\neq -2$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_4",
    question: `Determine the domain of the rational function $f(x) = \\frac{x^2 - 1}{x^2 + 1}$.`,
    options: [
      `$x \\neq -1$`,
      `$x \\neq 1$`,
      `$x \\neq -1$ and $x \\neq 1$`,
      `All real numbers`,
    ],
    correctAnswer: 3,
    explanation: `The denominator is $x^2 + 1$. For any real number $x$, $x^2 \\geq 0$, so $x^2 + 1 \\geq 1$. The denominator is never zero, so the domain is all real numbers.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_5",
    question: `Find the domain of $f(x) = \\frac{5}{2x^2 - 5x - 3}$.`,
    options: [
      `$x \\neq -\\frac{1}{2}$ and $x \\neq 3$`,
      `$x \\neq \\frac{1}{2}$ and $x \\neq -3$`,
      `$x \\neq 3$`,
      `$x \\neq -\\frac{1}{2}$`,
    ],
    correctAnswer: 0,
    explanation: `Factor the denominator: $2x^2 - 5x - 3 = (2x + 1)(x - 3)$. Setting to zero gives $x = -\\frac{1}{2}$ and $x = 3$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_6",
    question: `What is the equation of the vertical asymptote of $f(x) = \\frac{x + 2}{x - 7}$?`,
    options: [
      `$x = -2$`,
      `$x = 7$`,
      `$y = 1$`,
      `$y = 7$`,
    ],
    correctAnswer: 1,
    explanation: `The vertical asymptote occurs where the denominator is zero (and the numerator is non-zero). $x - 7 = 0 \Rightarrow x = 7$.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_7",
    question: `Find the vertical asymptotes of the function $f(x) = \\frac{3x}{x^2 - 16}$.`,
    options: [
      `$x = 4$`,
      `$x = -4$ and $x = 4$`,
      `$x = 0$`,
      `No vertical asymptotes`,
    ],
    correctAnswer: 1,
    explanation: `The denominator $x^2 - 16 = (x - 4)(x + 4)$. It equals zero at $x = 4$ and $x = -4$. Neither makes the numerator zero.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_8",
    question: `Determine the vertical asymptote(s) of $g(x) = \\frac{x^2 - 4x + 3}{x - 1}$.`,
    options: [
      `$x = 1$`,
      `$x = 3$`,
      `$x = -1$`,
      `No vertical asymptotes`,
    ],
    correctAnswer: 3,
    explanation: `Factor the numerator: $\\frac{(x - 1)(x - 3)}{x - 1}$. For $x \\neq 1$, this simplifies to $x - 3$. Since the $x - 1$ factor cancels out, there is a hole at $x = 1$, not a vertical asymptote.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_9",
    question: `How many vertical asymptotes does the function $h(x) = \\frac{x + 5}{x^3 - x}$ have?`,
    options: [
      `One`,
      `Two`,
      `Three`,
      `Four`,
    ],
    correctAnswer: 2,
    explanation: `The denominator $x^3 - x = x(x^2 - 1) = x(x - 1)(x + 1)$. This equals zero at $x = 0$, $x = 1$, and $x = -1$. None of these make the numerator zero, so there are three vertical asymptotes.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_10",
    question: `Identify the vertical asymptote of $f(x) = \\frac{2x + 1}{4x^2 - 1}$.`,
    options: [
      `$x = \\frac{1}{2}$`,
      `$x = -\\frac{1}{2}$`,
      `$x = -\\frac{1}{2}$ and $x = \\frac{1}{2}$`,
      `$x = 1$`,
    ],
    correctAnswer: 0,
    explanation: `Factor the denominator: $4x^2 - 1 = (2x - 1)(2x + 1)$. The function is $f(x) = \\frac{2x + 1}{(2x - 1)(2x + 1)} = \\frac{1}{2x - 1}$ for $x \\neq -\\frac{1}{2}$. The simplified function has a vertical asymptote at $2x - 1 = 0 \Rightarrow x = \\frac{1}{2}$.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_11",
    question: `What is the horizontal asymptote of $f(x) = \\frac{4x - 5}{2x + 3}$?`,
    options: [
      `$y = 0$`,
      `$y = 2$`,
      `$y = -\\frac{5}{3}$`,
      `$y = 4$`,
    ],
    correctAnswer: 1,
    explanation: `The degrees of the numerator and denominator are both 1. The horizontal asymptote is the ratio of their leading coefficients: $y = \\frac{4}{2} = 2$.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_12",
    question: `Find the horizontal asymptote of $g(x) = \\frac{3x^2 + 2x - 1}{x^3 + 5}$.`,
    options: [
      `$y = 3$`,
      `$y = 0$`,
      `No horizontal asymptote`,
      `$y = -1$`,
    ],
    correctAnswer: 1,
    explanation: `The degree of the numerator (2) is less than the degree of the denominator (3). Therefore, the horizontal asymptote is $y = 0$.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_13",
    question: `Determine the horizontal asymptote of $h(x) = \\frac{5x^3 - 2x^2}{3x^3 + x - 7}$.`,
    options: [
      `$y = \\frac{5}{3}$`,
      `$y = 0$`,
      `No horizontal asymptote`,
      `$y = -2$`,
    ],
    correctAnswer: 0,
    explanation: `The degrees of the numerator and denominator are both 3. The horizontal asymptote is the ratio of the leading coefficients: $y = \\frac{5}{3}$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_14",
    question: `Does the function $f(x) = \\frac{2x^4 - 3}{x^2 + 1}$ have a horizontal asymptote?`,
    options: [
      `Yes, $y = 2$`,
      `Yes, $y = 0$`,
      `No, it has an oblique asymptote`,
      `No, it has no horizontal asymptote`,
    ],
    correctAnswer: 3,
    explanation: `The degree of the numerator (4) is greater than the degree of the denominator (2). Therefore, there is no horizontal asymptote.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_15",
    question: `Find the horizontal asymptote of $f(x) = \\frac{-8x^2 + 3x}{4x^2 - x + 2}$.`,
    options: [
      `$y = -2$`,
      `$y = 0$`,
      `$y = -8$`,
      `$y = 2$`,
    ],
    correctAnswer: 0,
    explanation: `The degrees are equal (both are 2). The horizontal asymptote is $y = \\frac{-8}{4} = -2$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_16",
    question: `What is the range of $f(x) = \\frac{2x}{x - 1}$?`,
    options: [
      `All real numbers`,
      `All real numbers except $y = 1$`,
      `All real numbers except $y = 2$`,
      `All real numbers except $y = 0$`,
    ],
    correctAnswer: 2,
    explanation: `The horizontal asymptote is $y = \\frac{2}{1} = 2$. For this function, $y$ can never equal 2. So the range is all real numbers except $y = 2$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_17",
    question: `Find the range of $f(x) = \\frac{1}{x} + 3$.`,
    options: [
      `$y \\neq 0$`,
      `$y \\neq 3$`,
      `$y \\neq 1$`,
      `All real numbers`,
    ],
    correctAnswer: 1,
    explanation: `The function can be written as $f(x) = \\frac{3x + 1}{x}$. The horizontal asymptote is $y = 3$. The fraction $\\frac{1}{x}$ can never be 0, so $f(x)$ can never be $0 + 3 = 3$. The range is $y \\neq 3$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_18",
    question: `Determine the range of $g(x) = \\frac{x^2 + 1}{x^2}$.`,
    options: [
      `$y \\neq 1$`,
      `$y > 1$`,
      `$y \\geq 1$`,
      `$y < 1$`,
    ],
    correctAnswer: 1,
    explanation: `We can rewrite the function as $g(x) = 1 + \\frac{1}{x^2}$. Since $x^2 > 0$ for all $x \\neq 0$, the term $\\frac{1}{x^2}$ is strictly greater than 0. Therefore, $1 + \\frac{1}{x^2} > 1$. The range is $y > 1$.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_19",
    question: `What is the range of $f(x) = \\frac{-3}{x+2}$?`,
    options: [
      `$y \\neq -2$`,
      `$y \\neq -3$`,
      `$y \\neq 0$`,
      `All real numbers`,
    ],
    correctAnswer: 2,
    explanation: `The horizontal asymptote is $y = 0$. Since the numerator is non-zero, the fraction can never equal zero. The range is $y \\neq 0$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_20",
    question: `Find the range of $f(x) = \\frac{x^2 - 9}{x - 3}$.`,
    options: [
      `$y \\neq 3$`,
      `$y \\neq -3$`,
      `$y \\neq 6$`,
      `All real numbers`,
    ],
    correctAnswer: 2,
    explanation: `Simplify the function: $f(x) = \\frac{(x - 3)(x + 3)}{x - 3} = x + 3$ for $x \\neq 3$. The graph is a line with a hole at $x = 3$. The $y$-coordinate of the hole is $y = 3 + 3 = 6$. So the range is all real numbers except $y = 6$.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_21",
    question: `Which of the following functions has a vertical asymptote at $x = -2$ and a horizontal asymptote at $y = 3$?`,
    options: [
      `$f(x) = \\frac{3x + 1}{x - 2}$`,
      `$f(x) = \\frac{x + 3}{x + 2}$`,
      `$f(x) = \\frac{3x - 5}{x + 2}$`,
      `$f(x) = \\frac{3x}{x^2 + 2}$`,
    ],
    correctAnswer: 2,
    explanation: `For $f(x) = \\frac{3x - 5}{x + 2}$, the denominator is zero at $x = -2$, giving a vertical asymptote. The degrees are equal, so the horizontal asymptote is $y = \\frac{3}{1} = 3$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_22",
    question: `Consider $f(x) = \\frac{ax + b}{cx + d}$. If the vertical asymptote is $x = 4$ and the horizontal asymptote is $y = -1$, which could be the function?`,
    options: [
      `$f(x) = \\frac{-x + 2}{x - 4}$`,
      `$f(x) = \\frac{x + 2}{-x + 4}$`,
      `$f(x) = \\frac{-x - 4}{x + 1}$`,
      `$f(x) = \\frac{x - 4}{-x - 1}$`,
    ],
    correctAnswer: 0,
    explanation: `We need the denominator to be zero at $x = 4$ (so $x - 4$ or $4 - x$) and the ratio of leading coefficients to be -1. $f(x) = \\frac{-x + 2}{x - 4}$ has VA at $x = 4$ and HA at $y = \\frac{-1}{1} = -1$.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_23",
    question: `Find the x-intercept of the rational function $f(x) = \\frac{2x - 8}{x + 3}$.`,
    options: [
      `$x = -3$`,
      `$x = 4$`,
      `$x = -4$`,
      `$x = 8$`,
    ],
    correctAnswer: 1,
    explanation: `The x-intercept occurs where $y = 0$, which means the numerator must be zero. $2x - 8 = 0 \Rightarrow 2x = 8 \Rightarrow x = 4$.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_24",
    question: `Find the y-intercept of the rational function $g(x) = \\frac{3x - 6}{x^2 + 2}$.`,
    options: [
      `$y = -3$`,
      `$y = 3$`,
      `$y = -6$`,
      `$y = 0$`,
    ],
    correctAnswer: 0,
    explanation: `The y-intercept occurs where $x = 0$. $g(0) = \\frac{3(0) - 6}{(0)^2 + 2} = \\frac{-6}{2} = -3$.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_25",
    question: `Where is the hole in the graph of $f(x) = \\frac{x^2 + 2x - 8}{x - 2}$?`,
    options: [
      `At $(2, 0)$`,
      `At $(-4, 0)$`,
      `At $(2, 6)$`,
      `At $(-2, -6)$`,
    ],
    correctAnswer: 2,
    explanation: `Factor the numerator: $x^2 + 2x - 8 = (x - 2)(x + 4)$. The function simplifies to $x + 4$ for $x \\neq 2$. The hole is at $x = 2$. To find the y-coordinate, plug $x = 2$ into the simplified function: $y = 2 + 4 = 6$. The hole is at $(2, 6)$.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_26",
    question: `Which of the following describes the end behavior of $f(x) = \\frac{4x^3 + 2x - 1}{x^2 - 5}$?`,
    options: [
      `As $x \\to \\pm\\infty, f(x) \\to 4$`,
      `As $x \\to \\pm\\infty, f(x) \\to 0$`,
      `As $x \\to \\pm\\infty, f(x) \\to \\pm\\infty$ (Oblique asymptote)`,
      `As $x \\to \\pm\\infty, f(x) \\to -\\frac{1}{5}$`,
    ],
    correctAnswer: 2,
    explanation: `The degree of the numerator (3) is exactly one greater than the degree of the denominator (2). This indicates an oblique (slant) asymptote, so $f(x) \\to \\pm\\infty$ as $x \\to \\pm\\infty$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_27",
    question: `What is the domain and range of $f(x) = \\frac{1}{x}$?`,
    options: [
      `Domain: $x \\neq 0$, Range: $y \\neq 0$`,
      `Domain: all real numbers, Range: $y \\neq 0$`,
      `Domain: $x \\neq 0$, Range: all real numbers`,
      `Domain: $x > 0$, Range: $y > 0$`,
    ],
    correctAnswer: 0,
    explanation: `The denominator cannot be zero, so domain is $x \\neq 0$. The numerator is 1, so the fraction can never be zero, meaning the range is $y \\neq 0$.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_28",
    question: `Find the vertical and horizontal asymptotes of $f(x) = \\frac{2x^2}{x^2 - x - 6}$.`,
    options: [
      `VA: $x = 3, x = -2$; HA: $y = 2$`,
      `VA: $x = -3, x = 2$; HA: $y = 2$`,
      `VA: $x = 3, x = -2$; HA: $y = 0$`,
      `VA: $x = -3, x = 2$; HA: $y = 0$`,
    ],
    correctAnswer: 0,
    explanation: `Factor the denominator: $x^2 - x - 6 = (x - 3)(x + 2)$. The VA are $x = 3$ and $x = -2$. The degrees are equal, so HA is $y = \\frac{2}{1} = 2$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_29",
    question: `Given $f(x) = \\frac{ax + b}{cx + d}$, what is the x-coordinate of the vertical asymptote?`,
    options: [
      `$x = -\\frac{d}{c}$`,
      `$x = \\frac{d}{c}$`,
      `$x = -\\frac{b}{a}$`,
      `$x = \\frac{a}{c}$`,
    ],
    correctAnswer: 0,
    explanation: `The vertical asymptote occurs where the denominator is zero. $cx + d = 0 \Rightarrow cx = -d \Rightarrow x = -\\frac{d}{c}$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Rational Functions"]
  },
  {
    id: "est2_rational_30",
    question: `The function $f(x) = \\frac{x^2 - 16}{x^2 + cx - 12}$ has a vertical asymptote at $x = 2$ and a hole at $x = -6$. What is the value of $c$?`,
    options: [
      `$-4$`,
      `$4$`,
      `$-2$`,
      `There is no such $c$`,
    ],
    correctAnswer: 1,
    explanation: `If it has a VA at $x = 2$ and a hole at $x = -6$, the denominator must have roots 2 and -6. So the denominator is $(x - 2)(x + 6) = x^2 + 4x - 12$. Comparing this to $x^2 + cx - 12$, we see $c = 4$.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Rational Functions"]
  }
];
