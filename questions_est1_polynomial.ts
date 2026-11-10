import { Question } from './types';

export const EST1_POLYNOMIAL_SET: Question[] = [
  {
    id: 1,
    question: "If $a > b$ and $a(b-a) = 0$, which of the following must be true?\nI. $a = 0$\nII. $b > a$\nIII. $0 > b$",
    options: ["I only", "II only", "I and II only", "I and III only"],
    correctAnswer: 3,
    explanation: "Since $a(b-a)=0$, either $a=0$ or $b-a=0$. Since $a>b$, $b-a \\neq 0$. Thus $a=0$. If $a=0$ and $a>b$, then $0>b$. So I and III are true.",
    category: "Polynomials"
  },
  {
    id: 2,
    question: "Which of the following is equivalent to $(2x+3)^2 + (2x+3)(x-1) - 2(4x^2-9)$?",
    options: ["$(2x+3)(-x+4)$", "$2(2x+3)(-3x+4)$", "$(2x+3)(-x+8)$", "$(-3x+5)(2x+3)$"],
    correctAnswer: 2,
    explanation: "Factor out $(2x+3)$. Note $4x^2-9 = (2x-3)(2x+3)$.\nExpression = $(2x+3)[(2x+3) + (x-1) - 2(2x-3)]$\n= $(2x+3)[2x+3+x-1-4x+6]$\n= $(2x+3)[-x+8]$.",
    youtubeLink: "https://youtu.be/Cmen3FCCLFM",
    category: "Polynomials"
  },
  {
    id: 3,
    question: "Which of the following is equivalent to $4a^2 - 9 + (2a-3)(a-1) + 3(2a-3)$?",
    options: ["$(3a+5)(2a-3)$", "$2(3a+5)(2a-3)$", "$(2a-3)(a+5)$", "$(2a-3)(3a+7)$"],
    correctAnswer: 0,
    explanation: "$4a^2-9 = (2a-3)(2a+3)$. Factor out $(2a-3)$:\n$(2a-3)[(2a+3) + (a-1) + 3] = (2a-3)[3a+5]$.",
    category: "Polynomials"
  },
  {
    id: 4,
    question: "In a company, the total cost $C(x) = \\frac{1}{3}x^3 - 15x^2 + 2000x$. The profit $P(x) = -\\frac{1}{3}x^3 + \\frac{79}{3}x^2 + 1500x$. If Revenue $R(x) = P(x) + C(x)$, which expression represents $R(x)$?",
    options: ["$R(x) = \\frac{64}{3}x^2 + 3500x$", "$R(x) = \\frac{34}{3}x^2 + 3500x$", "$R(x) = -\\frac{2}{3}x^3 + \\frac{64}{3}x^2 + 3500x$", "$R(x) = -\\frac{2}{3}x^3 + \\frac{124}{3}x^2 - 500x$"],
    correctAnswer: 1,
    explanation: "Add $P(x)$ and $C(x)$. The $x^3$ terms cancel ($-\\frac{1}{3} + \\frac{1}{3} = 0$).\n$x^2$ term: $\\frac{79}{3} - 15 = \\frac{79-45}{3} = \\frac{34}{3}$.\n$x$ term: $1500 + 2000 = 3500$.",
    category: "Polynomials"
  },
  {
    id: 5,
    question: "If $p(x) = x^2 - 7x + 5$ and $q(x) = -3x^3 - 7x^2 + 2x - 5$, what is $p(x) - q(x)$?",
    options: ["$4x^3 - 9x + 10$", "$-3x^3 - 6x^2 - 5x$", "$-3x^3 - 8x^2 + 9x - 10$", "$3x^3 + 8x^2 - 9x + 10$"],
    correctAnswer: 3,
    explanation: "$(x^2 - 7x + 5) - (-3x^3 - 7x^2 + 2x - 5) = 3x^3 + (1+7)x^2 + (-7-2)x + (5+5) = 3x^3 + 8x^2 - 9x + 10$.",
    category: "Polynomials"
  },
  {
    id: 6,
    question: "If $x+y = a+b$ and $ax - by = a^2 - b^2$, then $x = $",
    options: ["$a+b$", "$-a-b$", "$b$", "$a$"],
    correctAnswer: 3,
    explanation: "Substitute $x=a, y=b$. $a+b=a+b$ (True). $a(a)-b(b) = a^2-b^2$ (True). So $x=a$.",
    youtubeLink: "https://youtu.be/8KQwFAXx4YY",
    category: "Systems"
  },
  {
    id: 7,
    question: "$[(2x-y)^2 - (2x+y)^2]^2$ is equivalent to:",
    options: ["$16x^4 - y^2$", "$-64x^4y^4$", "$-8x^2y^2$", "$64x^2y^2$"],
    correctAnswer: 3,
    explanation: "Inside bracket: $(2x-y - (2x+y))(2x-y + 2x+y) = (-2y)(4x) = -8xy$. Square it: $(-8xy)^2 = 64x^2y^2$.",
    category: "Polynomials"
  },
  {
    id: 8,
    question: "Which of the following is equivalent to $\\frac{4m\\sqrt{3a} - 2\\sqrt{27am^2} + m\\sqrt{12a}}{\\sqrt{243a^5}}$ for positive values?",
    options: ["$\\frac{2m}{9a^2}$", "$\\frac{m}{9a^2}$", "$-\\frac{m}{9a^2}$", "0"],
    correctAnswer: 3,
    explanation: "Numerator: $4m\\sqrt{3a} - 2(3m\\sqrt{3a}) + m(2\\sqrt{3a}) = 4m\\sqrt{3a} - 6m\\sqrt{3a} + 2m\\sqrt{3a} = 0$.",
    category: "Radicals"
  },
  {
    id: 9,
    question: "If $x = \\sqrt{2} + 3$, what is the value of $2x^2 + 3x - 1$?",
    options: ["$5\\sqrt{2} + 14$", "$3\\sqrt{2} + 30$", "$3\\sqrt{2} + 24$", "$15\\sqrt{2} + 30$"],
    correctAnswer: 3,
    explanation: "$x-3 = \\sqrt{2} \\Rightarrow x^2 - 6x + 9 = 2 \\Rightarrow x^2 = 6x - 7$.\n$2(6x-7) + 3x - 1 = 12x - 14 + 3x - 1 = 15x - 15 = 15(\\sqrt{2}+3) - 15 = 15\\sqrt{2} + 30$.",
    category: "Polynomials"
  },
  {
    id: 10,
    question: "Which of the following is equivalent to $4x^5 - 16x^3y^2 + 16xy^4$?",
    options: ["$x(2x^2 - 2y)^2$", "$x^2(2x^2 - 2y^2)^2$", "$x(2x^2 - 4y^2)^2$", "$x(4x^2 - 4y^2)^2$"],
    correctAnswer: 2,
    explanation: "Factor out $x$: $x(4x^4 - 16x^2y^2 + 16y^4)$. Inside is $(2x^2 - 4y^2)^2$. Result: $x(2x^2 - 4y^2)^2$.",
    category: "Polynomials"
  },
  {
    id: 11,
    question: "If $a+b > 0$ and $a-c < 0$, then $b+c$?",
    options: ["Is smaller than 0, with $a < c$", "Is greater than 0, with $a < c$", "Is smaller than 0, with $a > c$", "Is greater than 0, with $a > c$"],
    correctAnswer: 1,
    explanation: "$a-c < 0 \\Rightarrow a < c$. $a+b > 0 \\Rightarrow b > -a$. Sum $b+c > c-a$. Since $c>a$, $c-a>0$. So $b+c > 0$.",
    category: "Inequalities"
  },
  {
    id: 12,
    question: "Which of the following is equivalent to $\\sqrt{27x^3y^5 - 18x^2y^4}$?",
    options: ["$3xy^2(\\sqrt{3xy} - \\sqrt{2})$", "$3xy^2\\sqrt{3xy-2}$", "$9xy^2\\sqrt{3xy-2}$", "$9xy^2(\\sqrt{3xy} - \\sqrt{2})$"],
    correctAnswer: 1,
    explanation: "Factor out $9x^2y^4$: $\\sqrt{9x^2y^4(3xy-2)} = 3xy^2\\sqrt{3xy-2}$.",
    youtubeLink: "https://youtu.be/HwF51gzZAlE",
    category: "Radicals"
  },
  {
    id: 13,
    question: "$f(x) = (x-2)(x+3) - (2x-4)^2$. Which is equivalent?",
    options: ["$(x-2)(11+3x)$", "$(x-2)(-x+7)$", "$(x-2)(11-3x)$", "$(x-2)(x-7)$"],
    correctAnswer: 2,
    explanation: "$(2x-4)^2 = 4(x-2)^2$. Factor $(x-2)$: $(x-2)[(x+3) - 4(x-2)] = (x-2)[x+3-4x+8] = (x-2)(11-3x)$.",
    category: "Polynomials"
  },
  {
    id: 14,
    question: "If $a/b$ is negative, which is definitely negative?",
    options: ["$2ab$", "$a^2b$", "$(b-a)^2$", "$a-b$"],
    correctAnswer: 0,
    explanation: "$a$ and $b$ have opposite signs, so $ab$ is negative.",
    youtubeLink: "https://youtu.be/XV5a6PRgB50",
    category: "Inequalities"
  },
  {
    id: 15,
    question: "Which expression is equivalent to $y = \\frac{x^3 - 3x^2 + 2x - 1}{x-3}$?",
    options: ["$y = x^2 + 2 + \\frac{5}{x-3}$", "$y = x^2 - 2x + \\frac{3}{x-3}$", "$y = x^2 - 3 - \\frac{8}{x-3}$", "$y = x^2 + 2$"],
    correctAnswer: 0,
    explanation: "Synthetic division with 3: Coefficients 1, -3, 2, -1. Result: 1, 0, 2, Remainder 5. So $x^2 + 2 + 5/(x-3)$.",
    category: "Polynomials"
  },
  {
    id: 16,
    question: "If $24x^2 - kx + 16 = (3x+4)(ax-b)$, what is the value of $k$?",
    options: ["-44", "-12", "12", "44"],
    correctAnswer: 0,
    explanation: "$3a=24 \\Rightarrow a=8$. $-4b=16 \\Rightarrow b=-4$. Linear term: $-k = -3b + 4a = 12 + 32 = 44$. So $k = -44$.",
    category: "Polynomials"
  },
  {
    id: 17,
    question: "What is the resulting coefficient of $x$ when $-2x+3$ is multiplied by $-3x-2$?",
    options: ["-9", "-5", "5", "6"],
    correctAnswer: 1,
    explanation: "$(-2x)(-2) + (3)(-3x) = 4x - 9x = -5x$.",
    category: "Polynomials"
  },
  {
    id: 18,
    question: "Which of the following is equivalent to $\\frac{-6x^2 + 5x + 2}{2x+1}$?",
    options: ["$-3x + 4 - \\frac{2}{2x+1}$", "$-3x + 4 + \\frac{2}{2x+1}$", "$-3x - \\frac{2}{2x+1}$", "$-3x + 4$"],
    correctAnswer: 0,
    explanation: "Long division: $-6x^2/2x = -3x$. $(-3x)(2x+1) = -6x^2-3x$. Remainder $8x+2$. $8x/2x = 4$. $4(2x+1)=8x+4$. Remainder $-2$.",
    category: "Polynomials"
  },
  {
    id: 19,
    question: "Given $\\frac{d^2 - 4m^2}{2d + 4m} = \\frac{3}{8}$. What is the value of $d - 2m$?",
    options: ["$\\frac{3}{8}$", "$\\frac{3}{6}$", "$\\frac{3}{4}$", "$\\frac{3}{16}$"],
    correctAnswer: 2,
    explanation: "$\\frac{(d-2m)(d+2m)}{2(d+2m)} = \\frac{d-2m}{2} = \\frac{3}{8} \\Rightarrow d-2m = \\frac{6}{8} = \\frac{3}{4}$.",
    category: "Polynomials"
  },
  {
    id: 20,
    question: "If $xy$ is positive and $xz$ is negative, which is true?\nI. $yz$ is always positive\nII. $xy - xz$ is always positive\nIII. $xyz$ is always negative",
    options: ["I only", "II only", "III only", "I, II, and III"],
    correctAnswer: 1,
    explanation: "$xy>0, xz<0$. $xy - xz = (+) - (-) = (+) + (+) = (+)$. II is true. $y, z$ have opposite signs, so $yz < 0$ (I false). $xyz$ sign depends on $x$ (III false).",
    category: "Inequalities"
  },
  {
    id: 21,
    question: "If $x$ is different than -1, 0 and 1, which is equivalent to $\\frac{x}{\\frac{1}{x-1} + \\frac{1}{x+1}}$?",
    options: ["$\\frac{x^2-1}{(x-1)(x+1)}$", "$2x$", "$\\frac{x^2-1}{x^2-1}$", "$\\frac{x^2-1}{2}$"],
    correctAnswer: 3,
    explanation: "Denominator: $\\frac{x+1+x-1}{x^2-1} = \\frac{2x}{x^2-1}$. Expression: $x \\cdot \\frac{x^2-1}{2x} = \\frac{x^2-1}{2}$.",
    category: "Rational Expressions"
  },
  {
    id: 22,
    question: "If $a(x+1) + b(x-1) = 7x$ for all real $x$, what is the value of $a$?",
    options: ["3", "2", "3.5", "5"],
    correctAnswer: 2,
    explanation: "Coeffs: $a+b=7$. Const: $a-b=0 \\Rightarrow a=b$. $2a=7 \\Rightarrow a=3.5$.",
    youtubeLink: "https://youtu.be/mnoEf373f0U",
    category: "Polynomials"
  },
  {
    id: 23,
    question: "The coefficient of the $x$ term in the expansion of $(2-3x)(x^2+4x+1)$ is:",
    options: ["3", "5", "8", "11"],
    correctAnswer: 1,
    explanation: "$x$ terms: $2(4x) + (-3x)(1) = 8x - 3x = 5x$.",
    category: "Polynomials"
  },
  {
    id: 24,
    question: "What is the simplified form of $\\frac{2x^2-11x+15}{x^2-2x-3} \\times \\frac{x^2+x}{2x-5}$?",
    options: ["1", "$\\frac{x}{2}$", "$\\frac{x}{2x-5}$", "$x$"],
    correctAnswer: 3,
    explanation: "$\\frac{(2x-5)(x-3)}{(x-3)(x+1)} \\times \\frac{x(x+1)}{2x-5} = x$.",
    category: "Rational Expressions"
  },
  {
    id: 25,
    question: "If $(ax^2+b)(2x-1) = cx+1$ for all values of $x$, what is the value of $b/c$?",
    options: ["0.5", "0.25", "0.66", "1"],
    correctAnswer: 0,
    explanation: "Expand: $2ax^3 - ax^2 + 2bx - b$. Compare to $cx+1$. $2a=0, -a=0, 2b=c, -b=1$. So $b=-1, c=-2$. $b/c = -1/-2 = 0.5$.",
    category: "Polynomials"
  },
  {
    id: 26,
    question: "How many different integers between 15 and 45 contain only digits from the list: 1, 3, 5, 7, 9?",
    options: ["16", "7", "6", "5"],
    correctAnswer: 1,
    explanation: "Tens digit must be 1 or 3. If 1: 15 (not between), 17, 19. If 3: 31, 33, 35, 37, 39. Total: 17, 19, 31, 33, 35, 37, 39. Count is 7.",
    category: "Counting"
  },
  {
    id: 27,
    question: "If $a^2+b^2=20$ and $ab=8$, then what is $(b-a)^2$?",
    options: ["2", "4", "6", "8"],
    correctAnswer: 1,
    explanation: "$(b-a)^2 = b^2 - 2ab + a^2 = 20 - 16 = 4$.",
    category: "Algebra"
  },
  {
    id: 28,
    question: "Which of the expressions is equivalent to $[(2-\\frac{a}{3})^2 - (-2)^2(1+\\frac{a^2}{3})]$?",
    options: ["$a(\\frac{11}{3}a+4)$", "$-a(\\frac{11}{3}a-2)$", "$-\\frac{a}{3}(\\frac{11}{3}a+4)$", "$\\frac{a}{3}(\\frac{11}{3}a+4)^2$"],
    correctAnswer: 2,
    explanation: "Expand: $(4 - 4a/3 + a^2/9) - 4(1 + a^2/3) = 4 - 4a/3 + a^2/9 - 4 - 4a^2/3 = -4a/3 - 11a^2/9$. Factor $-a/3$: $-a/3(4 + 11a/3)$.",
    youtubeLink: "https://youtu.be/bWx5hsXgc9Y",
    category: "Polynomials"
  },
  {
    id: 29,
    question: "From the set of equations below, which has a real solution?\nI. $\\sqrt{2x-1} = -x^2$\nII. $|x+1| = -3$\nIII. $(x+1)^2 + 3 = 0$\nIV. $\\sqrt{2x-1} = x$",
    options: ["I only", "IV only", "I, II, and III", "III and IV"],
    correctAnswer: 1,
    explanation: "I: RHS $\\le 0$, LHS $\\ge 0$. Only if 0, but no solution. II: Abs value $\\ge 0$. III: Square $\\ge 0$. IV: $2x-1=x^2 \\Rightarrow (x-1)^2=0 \\Rightarrow x=1$. Valid.",
    category: "Algebra"
  },
  {
    id: 30,
    question: "If the velocity of the car is 22 m/s, which of the following is closest to the actual frequency of the speaker's sound waves to be 500 Hz? (Given $v=340$, observed $f'=500$)",
    options: ["469", "532", "470", "533"],
    correctAnswer: 2,
    explanation: "$f' = (\\frac{v+v_0}{v})f \\Rightarrow 500 = (\\frac{340+22}{340})f = 1.0647f$. $f = 500/1.0647 \\approx 469.6$. Closest is 470.",
    category: "Word Problem"
  },
  {
    id: 31,
    question: "If $x-2y=1$, which of the following is always true?",
    options: ["$x-y=1-y$", "$x+y=1+y$", "$2x-y=1+3y$", "$2y-2x=-x-1$"],
    correctAnswer: 3,
    explanation: "D: $2y-2x = 2y - 2(1+2y) = -2y-2$. RHS: $-(1+2y)-1 = -2y-2$. Match.",
    category: "Algebra"
  }
];
