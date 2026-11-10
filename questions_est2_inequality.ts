import { Question } from './types';

export const EST2_INEQUALITY_SET: Question[] = [
  {
    id: 1,
    question: "If $|x| < \\frac{2}{3}$, then $|9x^2 - 4|$ is equivalent to",
    options: ["$9x^2 - 4$", "$9x^2 + 4$", "$4 - 9x^2$", "$-4 - 9x^2$", "$3x - 2$"],
    correctAnswer: 2,
    explanation: "Since $|x| < 2/3$, then $-2/3 < x < 2/3$. Thus $x^2 < 4/9$, which implies $9x^2 < 4$, so $9x^2 - 4 < 0$. Therefore, $|9x^2 - 4| = -(9x^2 - 4) = 4 - 9x^2$.",
    category: "Inequality",
    topics: ["Algebra", "Absolute Value", "Inequalities"]
  },
  {
    id: 2,
    question: "If $\\left|6 - \\frac{n}{2}\\right| - 3 < 4$, which of the following is the solution set?",
    options: ["$-1 < n < 13$", "$-2 < n < 13$", "$-2 < n < 26$", "$n < -1$ or $n > 26$", "$n < -2$ or $n > 13$"],
    correctAnswer: 2,
    explanation: "Add 3 to both sides: $\\left|6 - \\frac{n}{2}\\right| < 7$. This gives $-7 < 6 - \\frac{n}{2} < 7$. Subtract 6: $-13 < -\\frac{n}{2} < 1$. Multiply by -2 (flip inequalities): $26 > n > -2$, which is $-2 < n < 26$.",
    category: "Inequality",
    topics: ["Algebra", "Absolute Value", "Inequalities"]
  },
  {
    id: 3,
    question: "If $|x - 2| < 4$, then $|x - 3|$ is less than",
    options: ["4", "2", "3", "5", "0"],
    correctAnswer: 3,
    explanation: "Given $|x - 2| < 4$, we have $-4 < x - 2 < 4$, so $-2 < x < 6$. Subtract 3: $-5 < x - 3 < 3$. Taking the absolute value, the maximum possible distance from 0 is less than 5. Thus, $|x - 3| < 5$.",
    category: "Inequality",
    topics: ["Algebra", "Absolute Value", "Inequalities"]
  },
  {
    id: 4,
    question: "The set of all real numbers of $x$ such that $|x^2 - 1| < 1$ consists of",
    options: ["$\\{x < -\\sqrt{2}\\}$", "$\\{-\\sqrt{2} < x < 0\\} \\cup \\{0 < x < \\sqrt{2}\\}$", "$\\{0 < x < \\sqrt{2}\\}$", "$\\{x < -\\sqrt{2}\\} \\cup \\{x > \\sqrt{2}\\}$", "$\\{x > \\sqrt{2}\\}$"],
    correctAnswer: 1,
    explanation: "$|x^2 - 1| < 1$ implies $-1 < x^2 - 1 < 1$. Add 1: $0 < x^2 < 2$. For $x^2 > 0$, $x \\neq 0$. For $x^2 < 2$, $-\\sqrt{2} < x < \\sqrt{2}$. Thus, $-\\sqrt{2} < x < 0$ or $0 < x < \\sqrt{2}$.",
    category: "Inequality",
    topics: ["Algebra", "Absolute Value", "Inequalities"]
  },
  {
    id: 5,
    question: "If $x \\cdot y > 0$, which of the following alternatives is possible?",
    options: ["$x - y = 0$", "$y < 0 < x$", "$x \\le 0 \\le y$", "$x + y = 0$", "$x = 0$"],
    correctAnswer: 0,
    explanation: "If $xy > 0$, $x$ and $y$ must have the same sign and neither is zero. From the options, $x - y = 0 \\implies x = y$. If $x=y$, they have the same sign (e.g. $x=2, y=2$), making $xy > 0$ possible and true.",
    category: "Inequality",
    topics: ["Algebra", "Inequalities"]
  },
  {
    id: 6,
    question: "Which one could be a value of $a$ such that $3x + a \\ge 3\\left(x + \\frac{1}{3}\\right) + 1$ has no solution?",
    options: ["$\\frac{1}{2}$", "$\\frac{7}{2}$", "2", "3"],
    correctAnswer: 0,
    explanation: "$3x + a \\ge 3x + 1 + 1 \\implies a \\ge 2$. For this to have NO solution, the statement must be false for all $x$. This means $a$ must be strictly less than 2. From the choices, $1/2$ is the only value less than 2.",
    category: "Inequality",
    topics: ["Algebra", "Inequalities"]
  },
  {
    id: 7,
    question: "Which of the following inequalities have the same solutions?\nI. $|2x + 4| > 1$\nII. $2x + 4 > 1$ or $2x + 4 > -1$\nIII. $2x + 4 > 1$ or $2x + 4 < -1$\nIV. $2x + 4 < -1$ and $2x + 4 > 1$",
    options: ["I and II", "I and III", "I and IV", "II and III", "II and IV"],
    correctAnswer: 1,
    explanation: "By definition, $|X| > 1$ means $X > 1$ or $X < -1$. So $|2x+4|>1$ is exactly $2x+4 > 1$ or $2x+4 < -1$, which is statement III.",
    category: "Inequality",
    topics: ["Algebra", "Absolute Value", "Inequalities"]
  },
  {
    id: 8,
    question: "If $\\log_2 x + \\log_2(x-1) < 1$, which of the following is the solution set of the inequality?",
    options: ["$\\{x \\mid x < -1\\}$", "$\\{x \\mid -1 < x < 2\\}$", "$\\{x \\mid 0 < x < 2\\}$", "$\\{x \\mid 1 < x < 2\\}$", "$\\{x \\mid x > 2\\}$"],
    correctAnswer: 3,
    explanation: "Domain: $x > 0$ and $x - 1 > 0$, so $x > 1$.\n$\\log_2(x(x-1)) < 1 \\implies x(x-1) < 2^1 \\implies x^2 - x - 2 < 0$. Factors to $(x-2)(x+1) < 0$, giving $-1 < x < 2$. Given the domain $x > 1$, the combined solution is $1 < x < 2$.",
    category: "Inequality",
    topics: ["Algebra", "Logarithms", "Inequalities"]
  },
  {
    id: 9,
    question: "Which of the following is the solution of $\\frac{x}{(x-1)(x-2)} < 0$?",
    options: ["$-\\infty < x < 1$", "$-5 < x < 2$", "$-\\infty < x < 2$", "$-\\infty < x < 0$ or $1 < x < 2$", "$-\\infty < x < 1$ or $x > 2$"],
    correctAnswer: 3,
    explanation: "Critical points are $x=0, 1, 2$. Testing intervals:\n$x < 0$: (-)/(-)(-) = (-) < 0 (True)\n$0 < x < 1$: (+)/(-)(-) = (+) > 0 (False)\n$1 < x < 2$: (+)/(+)(-) = (-) < 0 (True)\n$x > 2$: (+)/(+)(+) = (+) > 0 (False)\nSolution: $x < 0$ or $1 < x < 2$.",
    category: "Inequality",
    topics: ["Algebra", "Rational Inequalities"]
  },
  {
    id: 10,
    question: "Which of the following is equivalent to $\\frac{x-1}{x} < 0$?",
    options: ["$x < 0$", "$0 < x < 1$", "$x > 0$", "$0 < x < 5$", "$x < 1$"],
    correctAnswer: 1,
    explanation: "Critical points are 0 and 1. Testing intervals:\n$x < 0$: (-)/(-) = + (False)\n$0 < x < 1$: (-)/(+) = - (True)\n$x > 1$: (+)/(+) = + (False)\nSolution is $0 < x < 1$.",
    category: "Inequality",
    topics: ["Algebra", "Rational Inequalities"]
  },
  {
    id: 11,
    question: "If $\\frac{x^2 - 3x - 4}{x^2} < 0$, which of the following is the solution of the inequality?",
    options: ["$x < -1$", "$x > -1$", "$-1 < x < 4$", "$-1 < x < 0$ or $0 < x < 4$", "All real $x$"],
    correctAnswer: 3,
    explanation: "Factor numerator: $(x-4)(x+1)$. The denominator $x^2$ is always positive for $x \\neq 0$. The sign of the expression depends only on $(x-4)(x+1) < 0$, which gives $-1 < x < 4$. Excluding $x=0$, the solution is $-1 < x < 0$ or $0 < x < 4$.",
    category: "Inequality",
    topics: ["Algebra", "Rational Inequalities"]
  },
  {
    id: 12,
    question: "If $\\frac{(x-1)^2}{x} \\ge 0$, then which of the following is the complete solution set of the inequality?",
    options: ["$\\{x \\le 0\\}$", "$\\{0 \\le x < 1\\}$", "$\\{x > 0\\}$", "$\\{x < 0$ or $x > 1\\}$", "$\\{x \\le 0$ or $x > 1\\}$"],
    correctAnswer: 2,
    explanation: "The numerator $(x-1)^2$ is always $\\ge 0$. The expression is $\\ge 0$ when the denominator $x > 0$ or the numerator is 0 (which is $x=1$, included in $x>0$). Since $x$ cannot be 0, the overall solution is $x > 0$.",
    category: "Inequality",
    topics: ["Algebra", "Rational Inequalities"]
  },
  {
    id: 13,
    question: "How many integer values of $x$ satisfy the inequality $x(x-6)(x+8)(x-2) < 0$?",
    options: ["4", "6", "8", "10", "11"],
    correctAnswer: 3,
    explanation: "Critical points: -8, 0, 2, 6. Testing intervals gives the negative intervals as $-8 < x < 0$ and $2 < x < 6$.\nIntegers in $(-8, 0)$: -7, -6, -5, -4, -3, -2, -1 (7 integers).\nIntegers in $(2, 6)$: 3, 4, 5 (3 integers).\nTotal = 7 + 3 = 10 integers.",
    category: "Inequality",
    topics: ["Algebra", "Polynomial Inequalities"]
  },
  {
    id: 14,
    question: "If $\\frac{ab}{a-b} > 0$, then which of the following could be true?\nI. $0 < b < a$\nII. $b < a < 0$\nIII. $a < b < 0$",
    options: ["I only", "I and II only", "II and III only", "I and III only", "I, II, and III"],
    correctAnswer: 1,
    explanation: "If I is true: $a>0, b>0 \\implies ab>0$. $a>b \\implies a-b>0$. Thus $(ab)/(a-b) > 0$. (I works)\nIf II is true: $a<0, b<0 \\implies ab>0$. $a>b \\implies a-b>0$. Thus $(ab)/(a-b) > 0$. (II works)\nIf III is true: $a<0, b<0 \\implies ab>0$. $a<b \\implies a-b<0$. Thus $(ab)/(a-b) < 0$. (III fails)\nTherefore, I and II only.",
    category: "Inequality",
    topics: ["Algebra", "Variables and Inequalities"]
  },
  {
    id: 15,
    question: "Which of the following is the solution set of $\\frac{(x-2)(x-1)^2}{x+2} \\le 0$",
    options: ["$x < -2$", "$x \\ge 0$", "$-2 \\le x \\le 1$", "$-2 < x \\le 2$", "$-2 \\le x \\le 1$ or $x > 2$"],
    correctAnswer: 3,
    explanation: "Critical points: -2, 1, 2. $(x-1)^2$ is always non-negative but zero at $x=1$. The sign changes only occur at $x=2$ and $x=-2$. \nSince $x=-2$ makes denominator zero, it is an open boundary.\nThe inequality gives $-2 < x \\le 2$. At $x=1$, the expression is 0, which is included in $\\le 0$, so the interval is continuous between -2 and 2, including 2. Thus, $-2 < x \\le 2$.",
    category: "Inequality",
    topics: ["Algebra", "Rational Inequalities"]
  },
  {
    id: 16,
    question: "The solution set of $|3x - 5| < 10$ is",
    options: ["$\\{x > 5\\}$", "$\\{x > -5\\}$", "$\\{-5/3 < x < 5\\}$", "$\\{x > 5$ or $x < -5/3\\}$", "$\\{x < -5$ or $x > 15\\}$"],
    correctAnswer: 2,
    explanation: "Solve $-10 < 3x - 5 < 10$. Add 5 to get $-5 < 3x < 15$. Divide by 3 to get $-5/3 < x < 5$.",
    category: "Inequality",
    topics: ["Algebra", "Absolute Value", "Inequalities"]
  },
  {
    id: 17,
    question: "The solution of the system defined by $x^2 - x - 2 \\ge 0$ and $\\frac{x-3}{x+2} \\le 0$ is",
    options: ["$(-\\infty, -1] \\cup [2, +\\infty)$", "$(-2, 3]$", "$(-2, -1] \\cup [2, 3)$", "$(-2, -1] \\cup [2, 3]$", "$[-2, -1] \\cup [2, 3)$"],
    correctAnswer: 3,
    explanation: "First inequality: $(x-2)(x+1) \\ge 0 \\implies x \\le -1$ or $x \\ge 2$.\nSecond inequality: critical points $-2$ and $3$. Denominator $x \\neq -2$. Sign is negative between $-2$ and $3$, so $-2 < x \\le 3$.\nIntersection: $(x \\le -1 \\text{ or } x \\ge 2)$ AND $(-2 < x \\le 3)$. \nThis yields $(-2, -1] \\cup [2, 3]$.",
    category: "Inequality",
    topics: ["Algebra", "Systems of Inequalities"]
  },
  {
    id: 18,
    question: "Under which of the following conditions is $\\frac{x}{(x-1)(x+2)} < 0$?",
    options: ["$x < 0$ or $x > 2$", "$x < -2$ or $x > 1$", "$x < 1$ or $x > 0$", "$x < -2$ or $0 < x < 1$", "$-2 < x < 0$ or $x > 1$"],
    correctAnswer: 3,
    explanation: "Critical points: -2, 0, 1. Testing regions:\n$x < -2$: (-)/(-)(-) = (-) < 0 (True)\n$-2 < x < 0$: (-)/(-)(+) = (+) > 0 (False)\n$0 < x < 1$: (+)/(-)(+) = (-) < 0 (True)\n$x > 1$: (+)/(+)(+) = (+) > 0 (False)\nSolution: $x < -2$ or $0 < x < 1$.",
    category: "Inequality",
    topics: ["Algebra", "Rational Inequalities"]
  },
  {
    id: 19,
    question: "Which of the following is the solution set for the inequality $x^2 - 7x + 10 \\le 0$?",
    options: ["$x \\le 2$ or $x \\ge 5$", "$2 \\le x \\le 5$", "$-5 \\le x \\le -2$", "$x \\le -5$ or $x \\ge -2$", "$0 \\le x \\le 7$"],
    correctAnswer: 1,
    explanation: "Factor the quadratic to $(x-2)(x-5) \\le 0$. The roots are $x=2$ and $x=5$. The parabola opens upwards, so it is less than or equal to zero between the roots. Thus, $2 \\le x \\le 5$.",
    category: "ESt2-inequality",
    topics: ["Algebra", "Quadratic Inequalities"]
  },
  {
    id: 20,
    question: "What is the solution to the absolute value inequality $|3x + 2| > 11$?",
    options: ["$-13/3 < x < 3$", "$x < -13/3$ or $x > 3$", "$x < -3$ or $x > 13/3$", "$x > 3$", "$x < -13/3$"],
    correctAnswer: 1,
    explanation: "$|3x+2| > 11 \\implies 3x+2 > 11$ or $3x+2 < -11$. For $3x+2 > 11$, $3x > 9 \\implies x > 3$. For $3x+2 < -11$, $3x < -13 \\implies x < -13/3$. Therefore, $x < -13/3$ or $x > 3$.",
    category: "ESt2-inequality",
    topics: ["Algebra", "Absolute Value Inequalities"]
  },
  {
    id: 21,
    question: "Find the solution set for the rational inequality $\\frac{2x - 1}{x + 3} \\ge 1$.",
    options: ["$x \\le -3$ or $x \\ge 4$", "$-3 < x \\le 4$", "$x < -3$ or $x \\ge 4$", "$x > -3$", "$x \\le 4$"],
    correctAnswer: 2,
    explanation: "Subtract 1 from both sides: $\\frac{2x-1}{x+3} - 1 \\ge 0 \\implies \\frac{2x-1 - (x+3)}{x+3} \\ge 0 \\implies \\frac{x-4}{x+3} \\ge 0$. The critical points are $x=4$ (numerator) and $x=-3$ (denominator). Testing regions gives $x < -3$ or $x \\ge 4$.",
    category: "ESt2-inequality",
    topics: ["Algebra", "Rational Inequalities"]
  },
  {
    id: 22,
    question: "Which of the following points $(x,y)$ satisfies the system of inequalities: $y > x^2 - 4$ and $y < -x + 2$?",
    options: ["$(0, 3)$", "$(2, 0)$", "$(0, -5)$", "$(1, 0)$", "$(-3, 6)$"],
    correctAnswer: 3,
    explanation: "Test each point. For $(1, 0)$: $0 > (1)^2 - 4 \\implies 0 > -3$ (True), and $0 < -1 + 2 \\implies 0 < 1$ (True). Other points fail at least one inequality.",
    category: "ESt2-inequality",
    topics: ["Algebra", "Systems of Inequalities"]
  },
  {
    id: 23,
    question: "Solve the inequality $x^3 - 9x < 0$.",
    options: ["$x < -3$ or $0 < x < 3$", "$-3 < x < 0$ or $x > 3$", "$x < 3$", "$x < -3$ or $x > 3$", "$-3 < x < 3$"],
    correctAnswer: 0,
    explanation: "Factor as $x(x^2 - 9) = x(x-3)(x+3) < 0$. The critical points are $-3, 0, 3$. Testing regions: $x < -3 \\implies (-)$, $-3 < x < 0 \\implies (+)$, $0 < x < 3 \\implies (-)$, $x > 3 \\implies (+)$. The solution is $x < -3$ or $0 < x < 3$.",
    category: "ESt2-inequality",
    topics: ["Algebra", "Polynomial Inequalities"]
  },
  {
    id: 24,
    question: "What is the domain of the function $f(x) = \\sqrt{\\frac{x-2}{x+4}}$?",
    options: ["$x < -4$ or $x \\ge 2$", "$x \\le -4$ or $x \\ge 2$", "$-4 < x \\le 2$", "$x \\ge 2$", "All real numbers except $-4$"],
    correctAnswer: 0,
    explanation: "The expression under the square root must be non-negative: $\\frac{x-2}{x+4} \\ge 0$. The critical points are $x=2$ (included) and $x=-4$ (excluded). Testing intervals gives $x < -4$ or $x \\ge 2$.",
    category: "ESt2-inequality",
    topics: ["Algebra", "Functions", "Rational Inequalities"]
  },
  {
    id: 25,
    question: "Find the solution set for the inequality $|x^2 - 5| < 4$.",
    options: ["$-3 < x < 3$", "$-3 < x < -1$ or $1 < x < 3$", "$1 < x < 3$", "$x < -3$ or $x > 3$", "$-1 < x < 1$"],
    correctAnswer: 1,
    explanation: "$|x^2 - 5| < 4 \\implies -4 < x^2 - 5 < 4 \\implies 1 < x^2 < 9$. This means $x^2 > 1$ and $x^2 < 9$. From $x^2 < 9$, we have $-3 < x < 3$. From $x^2 > 1$, we have $x > 1$ or $x < -1$. Taking the intersection, we get $-3 < x < -1$ or $1 < x < 3$.",
    category: "ESt2-inequality",
    topics: ["Algebra", "Absolute Value Inequalities"]
  },
  {
    id: 26,
    question: "Solve for $x$: $\\frac{(x-3)^2(x+1)}{x-5} \\le 0$.",
    options: ["$-1 \\le x < 5$", "$-1 \\le x \\le 5$", "$x \\le -1$ or $x > 5$", "$-1 \\le x < 5, x \\ne 3$", "$x = 3$ or $-1 \\le x < 5$"],
    correctAnswer: 0,
    explanation: "Critical points are $x=3, x=-1, x=5$. Since $(x-3)^2 \\ge 0$, the sign depends on $\\frac{x+1}{x-5}$. We need $\\frac{x+1}{x-5} \\le 0$, which gives $-1 \\le x < 5$. Since $x=3$ is in this interval and gives $0 \\le 0$, the solution remains $-1 \\le x < 5$.",
    category: "ESt2-inequality",
    topics: ["Algebra", "Rational Inequalities"]
  },
  {
    id: 27,
    question: "Find all values of $x$ satisfying the system of inequalities: $x^2 \\le 16$ and $|x - 1| > 2$.",
    options: ["$-4 \\le x \\le 4$", "$x > 3$ or $x < -1$", "$-4 \\le x < -1$ or $3 < x \\le 4$", "$3 < x \\le 4$", "$-4 \\le x < -1$"],
    correctAnswer: 2,
    explanation: "$x^2 \\le 16 \\implies -4 \\le x \\le 4$. For $|x-1| > 2 \\implies x > 3$, or $x < -1$. Intersecting the two conditions: $(-4 \\le x \\le 4)$ AND $(x > 3 \\text{ or } x < -1)$. This gives $-4 \\le x < -1$ or $3 < x \\le 4$.",
    category: "ESt2-inequality",
    topics: ["Algebra", "Systems of Inequalities"]
  },
  {
    id: 28,
    question: "Which of the following describes the solution set to the inequality $\\frac{|x-4|}{x-1} \\le 0$?",
    options: ["$x < 1$ or $x = 4$", "$x < 1$", "$1 < x \\le 4$", "$x \\le 4$ and $x \\ne 1$", "$x < 4$ and $x \\ne 1$"],
    correctAnswer: 0,
    explanation: "The numerator $|x-4|$ is always non-negative. For the fraction to be $\\le 0$, we need the denominator $x-1 < 0$ (so $x < 1$) OR the numerator to be zero (which happens at $x=4$, and $0 \\le 0$ is true). Thus, the solution is $x < 1$ or $x = 4$.",
    category: "ESt2-inequality",
    topics: ["Algebra", "Rational Inequalities"]
  }
];
