import { Question } from '../../types';

export const EST2_SOLVING_EQUATIONS: Question[] = [
  {
    id: 1,
    question: "If $\\frac{x^2 - 1}{x + 1} = 3x + 5$, then $x+3 =$ ",
    options: ["$-3$", "$-2$", "$0$", "$2$", "$4$"],
    correctAnswer: 2,
    explanation: "Since $\\frac{x^2-1}{x+1} = \\frac{(x-1)(x+1)}{x+1} = x-1$, then $x-1 = 3x+5 \\Rightarrow -6 = 2x \\Rightarrow x = -3$. Therefore, $x+3 = -3+3 = 0$.",
    category: "Solving Equations"
  },
  {
    id: 2,
    question: "If $2(a-b) = 5(a-b)$, then which of the following must be true?",
    options: ["$a = 0$", "$b = 0$", "$a = b$", "$a = -b$", "$a + b > 0$"],
    correctAnswer: 2,
    explanation: "$2(a-b) = 5(a-b) \\Rightarrow 3(a-b) = 0 \\Rightarrow a-b = 0 \\Rightarrow a = b$",
    category: "Solving Equations"
  },
  {
    id: 3,
    question: "If $\\frac{1}{x} - x = \\frac{1}{x} + x$, then $x =$ ",
    options: ["$-1$", "$0$", "$1$", "$2$", "undefined"],
    correctAnswer: 4,
    explanation: "$\\frac{1}{x} - x = \\frac{1}{x} + x \\Rightarrow 0 = 2x \\Rightarrow x = 0$. But $x = 0$ is extraneous as it makes the denominator $0$. Therefore, the solution is undefined.",
    category: "Solving Equations"
  },
  {
    id: 4,
    question: "If $f(\\sqrt{x}) = x^2 + 4x$, then $f(3) =$ ",
    options: ["$21$", "$46$", "$84$", "$117$", "$256$"],
    correctAnswer: 3,
    explanation: "Since $\\sqrt{x} = 3 \\Rightarrow x = 9$. Substitute $x = 9$ into the function expression: $f(3) = 9^2 + 4(9) = 81 + 36 = 117$.",
    category: "Solving Equations"
  },
  {
    id: 5,
    question: "If $\\frac{1}{1-\\frac{1}{x}} = 2$, what is the value of $x$?",
    options: ["$-2$", "$2$", "$-\\frac{1}{2}$", "$\\frac{1}{2}$", "$\\frac{1}{4}$"],
    correctAnswer: 1,
    explanation: "$\\frac{1}{1-\\frac{1}{x}} = \\frac{1}{\\frac{x-1}{x}} = \\frac{x}{x-1}$. So $\\frac{x}{x-1} = 2 \\Rightarrow x = 2(x - 1) \\Rightarrow x = 2x - 2 \\Rightarrow x = 2$.",
    category: "Solving Equations"
  },
  {
    id: 6,
    question: "The sum of two 2-digit numbers is a third 2-digit number. What is the maximum value of the product of these three numbers?",
    options: ["356,000", "238,392", "970,299", "239,580", "242,550"],
    correctAnswer: 4,
    explanation: "Let the numbers be $x$ and $y$, where $x+y=z$. To maximize the product $xyz$, we want the sum $z$ to be as large as possible. The maximum 2-digit number is $99$, so let $z = 99$. Then $x+y=99$. To maximize the product $xy$, $x$ and $y$ should be as close to each other as possible, so $x=50$ and $y=49$. The product is $50 \\times 49 \\times 99 = 242,550$.",
    category: "Solving Equations"
  },
  {
    id: 7,
    question: "If $3 - \\frac{1}{x} = 9 - \\frac{3}{x}$, then $3 - \\frac{1}{x} =$ ",
    options: ["$-3$", "$-1$", "$0$", "$3$", "$9$"],
    correctAnswer: 2,
    explanation: "Multiply by $x$: $3x - 1 = 9x - 3 \\Rightarrow 6x = 2 \\Rightarrow x = \\frac{1}{3}$. We need to find $3 - \\frac{1}{x} \\Rightarrow 3 - \\frac{1}{1/3} = 3 - 3 = 0$.",
    category: "Solving Equations"
  },
  {
    id: 8,
    question: "$\\frac{\\frac{3}{ax}}{\\frac{6}{bx}} =$ ",
    options: ["$\\frac{ab}{18}$", "$\\frac{2a}{b}$", "$\\frac{2b}{a}$", "$\\frac{b}{2a}$", "$\\frac{a}{2b}$"],
    correctAnswer: 3,
    explanation: "$\\frac{\\frac{3}{ax}}{\\frac{6}{bx}} = \\frac{3}{ax} \\times \\frac{bx}{6} = \\frac{3bx}{6ax} = \\frac{b}{2a}$.",
    category: "Solving Equations"
  },
  {
    id: 9,
    question: "If $c-5 = \\sqrt{4c+1}$, what is the value of $c$?",
    options: ["$2$", "$12$", "$2 \\text{ or } 12$", "$-2$", "$-12$"],
    correctAnswer: 1,
    explanation: "$(c-5)^2 = (\\sqrt{4c+1})^2 \\Rightarrow c^2 - 10c + 25 = 4c + 1 \\Rightarrow c^2 - 14c + 24 = 0 \\Rightarrow (c-2)(c-12) = 0$. $c = 2$ or $12$. Since the principal square root is non-negative, $c-5 \\ge 0 \\Rightarrow c \\ge 5$. Hence $c=12$.",
    category: "Solving Equations"
  },
  {
    id: 10,
    question: "If $\\sqrt{x^2} = 5$, then $x =$ ",
    options: ["$5 \\text{ only}$", "$-5 \\text{ only}$", "$5 \\text{ and } -5$", "$25 \\text{ and } -15$", "$-25 \\text{ only}$"],
    correctAnswer: 2,
    explanation: "Recall that $\\sqrt{x^2} = |x|$. So $|x| = 5$. Therefore, $x = \\pm 5$.",
    category: "Solving Equations"
  },
  {
    id: 11,
    question: "If $(\\log x)^2 + \\log x^2 = 3$, then which of the following could be the value of $x$?",
    options: ["$-10$", "$3$", "$5$", "$8$", "$10$"],
    correctAnswer: 4,
    explanation: "$(\\log x)^2 + 2\\log x - 3 = 0 \\Rightarrow (\\log x + 3)(\\log x - 1) = 0$. So $\\log x = -3$ or $\\log x = 1$, which gives $x=10^{-3}$ or $x=10$.",
    category: "Solving Equations"
  },
  {
    id: 12,
    question: "If $\\frac{1}{x^2 - 1} = \\frac{A}{x+1} + \\frac{B}{x-1}$ for all real $x$ where the expression is defined, what is the value of constant $B$?",
    options: ["$-1$", "$-\\frac{1}{2}$", "$\\frac{1}{2}$", "$1$", "$2$"],
    correctAnswer: 2,
    explanation: "$\\frac{1}{x^2-1} = \\frac{A(x-1)}{(x+1)(x-1)} + \\frac{B(x+1)}{(x-1)(x+1)} = \\frac{(A+B)x + (B - A)}{x^2-1}$. For the numerators to be identical, $A+B=0$ and $B-A=1$. Adding the two equations gives $2B = 1 \\Rightarrow B = \\frac{1}{2}$.",
    category: "Solving Equations"
  },
  {
    id: 13,
    question: "If $x + \\sqrt{(1-\\sqrt{3})^2} = 3$, then $x =$ ",
    options: ["$1 - \\sqrt{3}$", "$4 - \\sqrt{3}$", "$2 + \\sqrt{3}$", "$\\sqrt{3} - 2$", "$\\sqrt{3} - 4$"],
    correctAnswer: 1,
    explanation: "Since $\\sqrt{u^2} = |u|$, $\\sqrt{(1-\\sqrt{3})^2} = |1-\\sqrt{3}|$. Because $\\sqrt{3} > 1$, we have $|1-\\sqrt{3}| = \\sqrt{3} - 1$. The equation becomes $x + (\\sqrt{3} - 1) = 3 \\Rightarrow x = 4 - \\sqrt{3}$.",
    category: "Solving Equations"
  },
  {
    id: 14,
    question: "If $x<3$, then $\\sqrt{(x-10)^2} =$ ",
    options: ["$10-x$", "$10+x$", "$x-10$", "$-x-10$", "$\\pm(x-10)$"],
    correctAnswer: 0,
    explanation: "$\\sqrt{(x-10)^2} = |x-10|$. If $x<3$, then $x-10 < -7 < 0$, which means $x-10$ is negative. Therefore, $|x-10| = -(x-10) = 10-x$.",
    category: "Solving Equations"
  },
  {
    id: 15,
    question: "If $(2+\\sqrt{5})(3-\\sqrt{5}) = a + b\\sqrt{5}$, where $a$ and $b$ are rational numbers, then $a+b =$ ",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
    correctAnswer: 1,
    explanation: "First, expand $(2+\\sqrt{5})(3-\\sqrt{5}) = 6 - 2\\sqrt{5} + 3\\sqrt{5} - 5 = 1 + \\sqrt{5}$. Equating this to $a + b\\sqrt{5}$ gives $a=1$ and $b=1$. So $a+b = 1+1 = 2$.",
    category: "Solving Equations"
  },
  {
    id: 16,
    question: "If $\\tan \\theta = \\frac{1}{2}$, then $(\\sin \\theta + \\cos \\theta)^2 =$ ",
    options: ["$1.8$", "$2.0$", "$2.2$", "$2.4$", "$2.6$"],
    correctAnswer: 0,
    explanation: "If $\\tan \\theta = \\frac{1}{2}$, we can draw a right triangle with opposite $= 1$ and adjacent $= 2$, so hypotenuse $= \\sqrt{5}$. $\\sin \\theta = \\frac{1}{\\sqrt{5}}$ and $\\cos \\theta = \\frac{2}{\\sqrt{5}}$ (or both negative). $(\\sin \\theta + \\cos \\theta)^2 = (\\pm\\frac{1}{\\sqrt{5}} \\pm \\frac{2}{\\sqrt{5}})^2 = (\\pm\\frac{3}{\\sqrt{5}})^2 = \\frac{9}{5} = 1.8$.",
    category: "Solving Equations"
  },
  {
    id: 17,
    question: "What is the least positive integer that is a multiple of 2, 3, 4, 5, 6, 7, 8, 9, and 10?",
    options: ["360", "840", "2,520", "5,040", "3,628,800"],
    correctAnswer: 2,
    explanation: "We need to find the least common multiple (LCM) of the numbers from 2 to 10. The prime factorization of the LCM must include the highest power of each prime number present in the factorizations: $2^3 \\times 3^2 \\times 5 \\times 7 = 8 \\times 9 \\times 35 = 2520$.",
    category: "Solving Equations"
  },
  {
    id: 18,
    question: "The graph is an upside-down V shape starting at $(0,0)$, peaking at $(3,3)$, and ending at $(6,0)$. Which of the following is the equation of the graph?",
    options: ["$y = |x| + 3$", "$y = |x+3| + 3$", "$y = -|x+3| + 3$", "$y = -|x-3| + 3$", "$y = -|x-3| - 3$"],
    correctAnswer: 3,
    explanation: "The vertex of the absolute value function is at $(3,3)$. An upside-down V shape means a negative leading coefficient. The equation of the form $y = a|x-h|+k$ with vertex $(3,3)$ is $y = a|x-3|+3$. Plugging in $(0,0)$ gives $0 = a|0-3|+3 \\Rightarrow -3 = 3a \\Rightarrow a=-1$. Thus, $y = -|x-3| + 3$.",
    category: "Solving Equations"
  },
  {
    id: 19,
    question: "If 4 more than 4 times a number is 4, What is the number?",
    options: ["$-1$", "$0$", "$1$", "$2$", "$4$"],
    correctAnswer: 1,
    explanation: "Let the number be $x$. The equation is $4x + 4 = 4 \\Rightarrow 4x = 0 \\Rightarrow x = 0$.",
    category: "Solving Equations"
  },
  {
    id: 20,
    question: "If the roots of $2x^2 - kx + 14 = 0$ are integers, then which of the following could be the value of constant $k$?",
    options: ["$6$", "$8$", "$10$", "$12$", "$16$"],
    correctAnswer: 4,
    explanation: "Let the integer roots be $r_1$ and $r_2$. The product $r_1 \\cdot r_2 = \\frac{14}{2} = 7$. The integer pairs multiplying to 7 are $(1, 7)$ and $(-1, -7)$. The sum of roots $r_1 + r_2 = \\frac{k}{2}$. If roots are 1 and 7, sum is 8, so $\\frac{k}{2} = 8 \\Rightarrow k=16$. If roots are -1 and -7, sum is -8, so $\\frac{k}{2} = -8 \\Rightarrow k=-16$. From the options, 16 is possible.",
    category: "Solving Equations"
  },
  {
    id: 21,
    question: "Which of the following is an equation with roots $0, 2 - \\sqrt{3}$ and $2 + \\sqrt{3}$?",
    options: ["$0 = x^3 - 3x^2 + x$", "$0 = x^3 + 4x^2 - x$", "$0 = x^3 - 4x^2 + x$", "$0 = x^2 - 2x - 2$", "$0 = x^3 + 2x^2 + 2x$"],
    correctAnswer: 2,
    explanation: "If a polynomial with rational coefficients has a root $2 - \\sqrt{3}$, it must also have $2 + \\sqrt{3}$ as a root. The polynomial equation is $x[x-(2-\\sqrt{3})][x-(2+\\sqrt{3})] = 0$. The roots $2 \\pm \\sqrt{3}$ have sum $4$ and product $4 - 3 = 1$, giving the quadratic $x^2 - 4x + 1$. The equation is $x(x^2 - 4x + 1) = 0 \\Rightarrow x^3 - 4x^2 + x = 0$.",
    category: "Solving Equations"
  },
  {
    id: 22,
    question: "If $xy = 1$, then $\\frac{x}{x+1} + \\frac{y}{y+1} =$ ",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
    correctAnswer: 0,
    explanation: "Evaluate the sum: $\\frac{x}{x+1} + \\frac{y}{y+1} = \\frac{x(y+1) + y(x+1)}{(x+1)(y+1)} = \\frac{xy + x + xy + y}{xy + x + y + 1}$. Since $xy=1$, this simplifies to $\\frac{1 + x + 1 + y}{1 + x + y + 1} = \\frac{2 + x + y}{2 + x + y} = 1$.",
    category: "Solving Equations"
  },
  {
    id: 23,
    question: "If $(\\sqrt{3})^{4-6x} = 27^x$, then $x =$ ",
    options: ["$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{3}{4}$", "$\\frac{3}{2}$"],
    correctAnswer: 0,
    explanation: "Express both sides with base $3$: $(\\sqrt{3})^{4-6x} = (3^{\\frac{1}{2}})^{4-6x} = 3^{2-3x}$. And $27^x = (3^3)^x = 3^{3x}$. Equating the exponents: $2-3x = 3x \\Rightarrow 6x = 2 \\Rightarrow x = \\frac{1}{3}$.",
    category: "Solving Equations"
  },
  {
    id: 24,
    question: "Which of the following is the solution of $\\frac{x}{(x-1)(x-2)} < 0$?",
    options: ["$-\\infty < x < 1$", "$-5 < x < 2$", "$-\\infty < x < 2$", "$-\\infty < x < 0 \\text{ or } 1 < x < 2$", "$-\\infty < x < 1 \\text{ or } x > 2$"],
    correctAnswer: 3,
    explanation: "The critical points are $x=0$, $x=1$, and $x=2$. Use a sign chart to check the intervals. For $x > 2$, positive. For $1 < x < 2$, negative. For $0 < x < 1$, positive. For $x < 0$, negative. The expression is negative for $-\\infty < x < 0$ or $1 < x < 2$.",
    category: "Solving Equations"
  },
  {
    id: 25,
    question: "If $x + \\frac{1}{x} = 2$, what is the value of $x^2 + \\frac{1}{x^2}$?",
    options: ["$4$", "$8$", "$2$", "$0.5$", "$16$"],
    correctAnswer: 2,
    explanation: "Square both sides of the equation: $(x + \\frac{1}{x})^2 = 2^2 \\Rightarrow x^2 + 2(x)(\\frac{1}{x}) + \\frac{1}{x^2} = 4 \\Rightarrow x^2 + 2 + \\frac{1}{x^2} = 4 \\Rightarrow x^2 + \\frac{1}{x^2} = 2$.",
    category: "Solving Equations"
  },
  {
    id: 26,
    question: "If $\\sin(A-60^\\circ) = \\cos(40^\\circ)$, the measure of $\\angle A$ is",
    options: ["$110^\\circ$", "$90^\\circ$", "$80^\\circ$", "$45^\\circ$", "$20^\\circ$"],
    correctAnswer: 0,
    explanation: "Using the cofunction identity, $\\sin(x) = \\cos(90^\\circ - x)$. So, $\\sin(A-60^\\circ) = \\cos(90^\\circ - (A-60^\\circ)) = \\cos(150^\\circ - A)$. This implies $150^\\circ - A = 40^\\circ \\Rightarrow A = 110^\\circ$. Alternatively, $\\sin(A-60^\\circ) = \\sin(90^\\circ - 40^\\circ) = \\sin(50^\\circ) \\Rightarrow A-60^\\circ = 50^\\circ \\Rightarrow A = 110^\\circ$.",
    category: "Solving Equations"
  },
  {
    id: 27,
    question: "If $\\tan A = 4$ and $\\tan B = 3$, what is the value of $\\tan(A-B)$?",
    options: ["$0.065$", "$0.077$", "$0.126$", "$0.245$", "$0.333$"],
    correctAnswer: 1,
    explanation: "Use the angle difference identity for tangent: $\\tan(A-B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B} = \\frac{4-3}{1 + 4(3)} = \\frac{1}{13} \\approx 0.077$.",
    category: "Solving Equations"
  },
  {
    id: 28,
    question: "If $\\sin 2\\theta = \\frac{1}{4}$, what is the value of $(\\cos \\theta - \\sin \\theta)^2$?",
    options: ["$1.25$", "$0.75$", "$0.50$", "$0.25$", "$0.15$"],
    correctAnswer: 1,
    explanation: "Expand the expression: $(\\cos \\theta - \\sin \\theta)^2 = \\cos^2 \\theta - 2\\cos \\theta \\sin \\theta + \\sin^2 \\theta$. Using the identities $\\cos^2 \\theta + \\sin^2 \\theta = 1$ and $\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$, we get $1 - \\sin 2\\theta = 1 - \\frac{1}{4} = \\frac{3}{4} = 0.75$.",
    category: "Solving Equations"
  },
  {
    id: 29,
    question: "If $|x-3| - y + 2 = 0$ and $x - y + 2 = 0$, then $x=$ ",
    options: ["$0.5$", "$1.0$", "$1.5$", "$2.0$", "$2.5$"],
    correctAnswer: 2,
    explanation: "From the second equation, $y - 2 = x$. Substitute this into the first equation: $|x-3| - x = 0 \\Rightarrow |x-3| = x$. This means $x \\ge 0$. If $x \\ge 3$, then $x-3 = x \\Rightarrow -3 = 0$ (no solution). If $0 \\le x < 3$, then $-(x-3) = x \\Rightarrow -x+3 = x \\Rightarrow 2x = 3 \\Rightarrow x = 1.5$.",
    category: "Solving Equations"
  },
  {
    id: 30,
    question: "If $\\cos^2 \\theta + \\cos \\theta = 1$, then $\\sin^4 \\theta + \\sin^2 \\theta =$ ",
    options: ["$1$", "$\\sqrt{2}$", "$\\sqrt{3}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$"],
    correctAnswer: 0,
    explanation: "Rearrange the given equation: $\\cos \\theta = 1 - \\cos^2 \\theta$. Since $1 - \\cos^2 \\theta = \\sin^2 \\theta$, we have $\\cos \\theta = \\sin^2 \\theta$. Substitute this into the expression: $\\sin^4 \\theta + \\sin^2 \\theta = (\\sin^2 \\theta)^2 + \\sin^2 \\theta = (\\cos \\theta)^2 + \\cos \\theta = \\cos^2 \\theta + \\cos \\theta = 1$.",
    category: "Solving Equations"
  },
  {
    id: 31,
    question: "If $x^2 + y^2 = 20$ and $x^2 = y$, then $x=$ ",
    options: ["$\\{-3\\}$", "$\\{-2, 2\\}$", "$\\{4\\}$", "$\\{10\\}$", "$\\{4, 10\\}$"],
    correctAnswer: 1,
    explanation: "Substitute $x^2 = y$ into the first equation: $y + y^2 = 20 \\Rightarrow y^2 + y - 20 = 0 \\Rightarrow (y+5)(y-4) = 0$. Thus, $y = -5$ or $y = 4$. Since $y = x^2$, $y$ must be non-negative, so $y = 4$. Then $x^2 = 4 \\Rightarrow x = \\pm 2$.",
    category: "Solving Equations"
  },
  {
    id: 32,
    question: "If $(x-1)$ is a factor of $x^6 - 5x^4 + 4x^3 - x + k$, then what is the value of $k$?",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
    correctAnswer: 0,
    explanation: "By the Factor Theorem, if $(x-1)$ is a factor of a polynomial $f(x)$, then $f(1) = 0$. Evaluating $f(1)$: $1^6 - 5(1)^4 + 4(1)^3 - 1 + k = 0 \\Rightarrow 1 - 5 + 4 - 1 + k = 0 \\Rightarrow -1 + k = 0 \\Rightarrow k = 1$.",
    category: "Solving Equations"
  },
  {
    id: 33,
    question: "If the quadratic equation $x^2 + 2ax + 2a^2 + 2a - 3 = 0$ has real roots, then which of the following could NOT be the value of $a$?",
    options: ["$-2$", "$-1$", "$0$", "$1$", "$2$"],
    correctAnswer: 4,
    explanation: "For real roots, the discriminant $\\Delta \\ge 0$. Here, $\\Delta = (2a)^2 - 4(1)(2a^2 + 2a - 3) = 4a^2 - 8a^2 - 8a + 12 = -4a^2 - 8a + 12$. So, $-4a^2 - 8a + 12 \\ge 0 \\Rightarrow a^2 + 2a - 3 \\le 0 \\Rightarrow (a+3)(a-1) \\le 0$. The roots of the inequality are $-3$ and $1$, so the solution is $-3 \\le a \\le 1$. Out of the options, $2$ is not in this interval.",
    category: "Solving Equations"
  },
  {
    id: 34,
    question: "If $\\sqrt{x^2+6x+9} = x$, which of the following is the solution?",
    options: ["$x=-\\frac{3}{2}$", "$x=\\frac{1}{2}$", "$x=-\\frac{1}{4}$", "$x=\\frac{1}{4}$", "No solution"],
    correctAnswer: 4,
    explanation: "$\\sqrt{x^2+6x+9} = \\sqrt{(x+3)^2} = |x+3|$. The equation is $|x+3| = x$. This implies $x \\ge 0$. If $x \\ge -3$, then $x+3 = x \\Rightarrow 3 = 0$ (no solution). If $x < -3$, then $-(x+3) = x \\Rightarrow -x-3 = x \\Rightarrow 2x = -3 \\Rightarrow x = -1.5$, but this contradicts $x \\ge 0$. Hence, there's no solution.",
    category: "Solving Equations"
  },
  {
    id: 35,
    question: "If $y = 3\\log(10x-x^2)$, what is the maximum value of $y$?",
    options: ["$3.56$", "$4.19$", "$5.25$", "$6.32$", "$7.41$"],
    correctAnswer: 1,
    explanation: "The logarithmic function $y = 3\\log f(x)$ is maximized when $f(x) = 10x - x^2$ is maximized. The maximum of the quadratic $10x - x^2$ occurs at $x = \\frac{-10}{2(-1)} = 5$. At $x = 5$, $10(5) - 5^2 = 25$. So the maximum value of $y$ is $3\\log(25) \\approx 3 \\times 1.3979 \\approx 4.19$.",
    category: "Solving Equations"
  },
  {
    id: 36,
    question: "If $\\theta = \\arccos(-\\frac{\\sqrt{3}}{2})$, then $\\theta =$ ",
    options: ["$-\\frac{5\\pi}{6}$", "$-\\frac{\\pi}{6}$", "$\\frac{\\pi}{6}$", "$\\frac{\\pi}{2}$", "$\\frac{5\\pi}{6}$"],
    correctAnswer: 4,
    explanation: "The principal range of the arccosine function is $[0, \\pi]$. We seek an angle $\\theta$ in $[0, \\pi]$ such that $\\cos \\theta = -\\frac{\\sqrt{3}}{2}$. The reference angle is $\\frac{\\pi}{6}$. Since the cosine is negative, $\\theta$ is in Quadrant II, so $\\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$.",
    category: "Solving Equations"
  },
  {
    id: 37,
    question: "If $\\log_2(\\log_3(\\log_2 x)) = 1$, what is the value of $x$?",
    options: ["$126$", "$256$", "$512$", "$1024$", "$2048$"],
    correctAnswer: 2,
    explanation: "Convert the outermost logarithmic equation to exponential form: $\\log_3(\\log_2 x) = 2^1 = 2$. Do it again: $\\log_2 x = 3^2 = 9$. One more time: $x = 2^9 = 512$.",
    category: "Solving Equations"
  },
  {
    id: 38,
    question: "If $x = (\\log_{27} 3)^{\\log_3 27}$, then $\\log_3 x =$ ",
    options: ["$3$", "$-3$", "$\\frac{1}{3}$", "$\\frac{1}{9}$", "$\\frac{1}{27}$"],
    correctAnswer: 1,
    explanation: "First evaluate the logarithms: $\\log_{27} 3 = \\frac{1}{3}$ (because $27^{1/3} = 3$) and $\\log_3 27 = 3$ (because $3^3 = 27$). So $x = (\\frac{1}{3})^3 = 3^{-3}$. Therefore $\\log_3 x = \\log_3 (3^{-3}) = -3$.",
    category: "Solving Equations"
  },
  {
    id: 39,
    question: "If $\\frac{ab}{a-b} > 0$, then which of the following could be true?\\n\\nI. $0 < b < a$\\nII. $b < a < 0$\\nIII. $a < b < 0$",
    options: ["I only", "I and II only", "II and III only", "I and III only", "I, II, and III"],
    correctAnswer: 1,
    explanation: "For the fraction to be positive, $ab$ and $a-b$ must have the same sign. \\nCase 1: $ab > 0$ and $a-b > 0$. From $ab > 0$, $a$ and $b$ must have the same sign. From $a-b>0$, $a>b$. This gives two possibilities: $a>b>0$ (which matches $0<b<a$, so I is possible) or $0>a>b$ (which matches $b<a<0$, so II is possible).\\nCase 2: $ab < 0$ and $a-b < 0$. $ab < 0$ means $a$ and $b$ have opposite signs. $a-b<0 \\Rightarrow a<b$. Since $a$ is negative and $b$ is positive, we must have $a<0<b$, which doesn't match III.\\nTherefore, only I and II could be true.",
    category: "Solving Equations"
  },
  {
    id: 40,
    question: "At the school candy sale, Fred sold $15$ fewer than twice the number of candy bars that Helen sold. Which of the following represents the relationship between $F$, the number of candy bars that Fred sold, and $H$, the number that Helen sold?",
    options: ["$F = 2H - 15$", "$F = 2H + 15$", "$F = 15 - 2H$", "$H = 2F - 15$", "$H = 2F + 15$"],
    correctAnswer: 0,
    explanation: "Twice the number Helen sold is $2H$. Fifteen fewer than that amount is $2H - 15$. Thus, the number Fred sold is $F = 2H - 15$.",
    category: "Solving Equations"
  },
  {
    id: 41,
    question: "If $\\sqrt{x^2} = |x|$, then the solution consists of",
    options: ["Zero only", "Positive real numbers only", "Negative real numbers only", "All real numbers", "No real numbers"],
    correctAnswer: 3,
    explanation: "The principal square root of $x^2$ is always the absolute value of $x$. Thus, the equation $\\sqrt{x^2} = |x|$ is an identity and holds true for all real numbers.",
    category: "Solving Equations"
  },
  {
    id: 42,
    question: "If $2^x + 4^x = 4 \\cdot 2^x$, then $x =$ ",
    options: ["$2$", "$\\sqrt{3}$", "$5$", "$\\log_2 3$", "$\\log_4 3$"],
    correctAnswer: 3,
    explanation: "Substitute $4^x = (2^2)^x = (2^x)^2$. Let $u = 2^x$. The equation becomes $u + u^2 = 4u \\Rightarrow u^2 - 3u = 0 \\Rightarrow u(u-3) = 0$. So $u=0$ or $u=3$. Since $u = 2^x > 0$, we must have $u=3$. Therefore, $2^x = 3$, which gives $x = \\log_2 3$.",
    category: "Solving Equations"
  }
];
