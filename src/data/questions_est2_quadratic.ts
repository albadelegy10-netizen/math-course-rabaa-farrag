import { Question } from '../../types';

export const EST2_QUADRATIC: Question[] = [
  {
    id: 1,
    question: "$\\left(a - \\frac{1}{a}\\right)^2 - \\left(a + \\frac{1}{a}\\right)^2 =$ ",
    options: ["$4$", "$-4$", "$2$", "$-2$", "$2a$"],
    correctAnswer: 1,
    explanation: "Since $\\left(a - \\frac{1}{a}\\right)^2 = a^2 + \\frac{1}{a^2} - 2$ and $\\left(a + \\frac{1}{a}\\right)^2 = a^2 + \\frac{1}{a^2} + 2$, then $\\left(a - \\frac{1}{a}\\right)^2 - \\left(a + \\frac{1}{a}\\right)^2 = -4$.",
    category: "Quadratic Equations"
  },
  {
    id: 2,
    question: "Find the largest integral value of $k$ such that the roots of $x^2 + 5x + k = 0$ are real?",
    options: ["$4$", "$6$", "$7$", "$8$", "$10$"],
    correctAnswer: 1,
    explanation: "Discriminant: $D = 25 - 4k \\ge 0 \\Rightarrow 4k \\le 25 \\Rightarrow k \\le 6.25$. The largest integer value of $k$ is $6$.",
    category: "Quadratic Equations"
  },
  {
    id: 3,
    question: "If $f(2)=0$ and $f(-1)=0$, which of the following must be a factor of $f(x)$?",
    options: ["$x+2$", "$x-1$", "$x^2+x-2$", "$x^2-x-2$", "None of these"],
    correctAnswer: 3,
    explanation: "Since $(x-2)$ and $(x+1)$ are factors of $f(x)$, $f(x) = (x-2)(x+1)Q(x)$. Therefore, $f(x) = (x^2-x-2)Q(x)$.",
    category: "Quadratic Equations"
  },
  {
    id: 4,
    question: "If $x=2i$ is a solution to the equation $x^3 + kx = 0$, what is the value of $k$?",
    options: ["$8$", "$6$", "$4$", "$2$", "$1$"],
    correctAnswer: 2,
    explanation: "Substitution: $(2i)^3 + k(2i) = 0 \\Rightarrow -8i + 2ki = 0 \\Rightarrow 2k = 8 \\Rightarrow k = 4$.",
    category: "Quadratic Equations"
  },
  {
    id: 5,
    question: "If $-1$ is a root of the equation $kx^2 + 6x - 4 = 0$, then the other root is",
    options: ["$4$", "$2$", "$0.4$", "$-0.4$", "$-2.5$"],
    correctAnswer: 2,
    explanation: "The product of the roots is $\\frac{-4}{k}$ and the sum of the roots is $\\frac{-6}{k}$. Let the other root be $r$. Sum: $\\frac{-6}{k} = -1 + r \\Rightarrow k = \\frac{-6}{r-1}$. Product: $\\frac{-4}{k} = -1r \\Rightarrow k = \\frac{4}{r}$. Thus, $\\frac{-6}{r-1} = \\frac{4}{r} \\Rightarrow -6r = 4r - 4 \\Rightarrow 10r = 4 \\Rightarrow r = 0.4$.",
    category: "Quadratic Equations"
  },
  {
    id: 6,
    question: "The equation of one of the parabolas in the graph is $y = (x+1)^2 + 1$. What is the equation of the other parabola, which opens downwards and shares the same vertex?",
    options: ["$y = -(x+1)^2 - 1$", "$y = -(x+1)^2 + 1$", "$y = -(x-1)^2 + 1$", "$y = (x+1)^2 - 1$", "$y = (x-1)^2 - 1$"],
    correctAnswer: 1,
    explanation: "$y = (x+1)^2 + 1$ is the equation of the curve that opens upwards since the coefficient of $x^2$ is positive. Both parabolas have the same vertex $(-1, 1)$, with the other curve opening downwards. The equation will be $y = a(x+1)^2 + 1$. Since it passes through $(0,0)$, substituting $x = 0, y = 0$ gives $0 = a(0 + 1)^2 + 1 \\Rightarrow a = -1$. Then, its equation must be $y = -(x+1)^2 + 1$.",
    category: "Quadratic Equations"
  },
  {
    id: 7,
    question: "If $x-3$ is a factor of $2x^3 - kx - 3$, then $k =$ ",
    options: ["$3$", "$7$", "$9$", "$15$", "$17$"],
    correctAnswer: 4,
    explanation: "By factor theorem: $f(3) = 2(3)^3 - k(3) - 3 = 0 \\Rightarrow 54 - 3k - 3 = 0 \\Rightarrow 51 = 3k \\Rightarrow k = 17$.",
    category: "Quadratic Equations"
  },
  {
    id: 8,
    question: "If $2 + \\sqrt{3}$ is a root of the polynomial $P(x)$, then a factor of $P(x)$ is",
    options: ["$x^2 - 3$", "$x^2 - 4$", "$x^2 + 4x + 1$", "$x^2 - 4x - 1$", "$x^2 - 4x + 1$"],
    correctAnswer: 4,
    explanation: "The conjugate $2-\\sqrt{3}$ is also a root. The factors are $(x - (2+\\sqrt{3}))(x - (2-\\sqrt{3})) = (x-2-\\sqrt{3})(x-2+\\sqrt{3}) = (x-2)^2 - (\\sqrt{3})^2 = x^2 - 4x + 4 - 3 = x^2 - 4x + 1$.",
    category: "Quadratic Equations"
  },
  {
    id: 9,
    question: "If the roots of $2x^2 - kx + 14 = 0$ are integers, then which of the following could be the value of constant $k$?",
    options: ["$6$", "$8$", "$10$", "$12$", "$16$"],
    correctAnswer: 4,
    explanation: "Let the integer roots be $r_1$ and $r_2$. The product $r_1 \\cdot r_2 = \\frac{14}{2} = 7$. Since they are integers, the pairs are $(1, 7)$ and $(-1, -7)$. The sum $r_1 + r_2 = \\frac{k}{2}$. For $1$ and $7$, sum $= 8 \\Rightarrow \\frac{k}{2} = 8 \\Rightarrow k = 16$. For $-1$ and $-7$, sum $= -8 \\Rightarrow k = -16$. $16$ is an option.",
    category: "Quadratic Equations"
  },
  {
    id: 10,
    question: "Which of the following is an equation with roots $0, 2-\\sqrt{3}$ and $2+\\sqrt{3}$?",
    options: ["$0 = x^3 - 3x^2 + x$", "$0 = x^3 + 4x^2 - x$", "$0 = x^3 - 4x^2 + x$", "$0 = x^2 - 2x - 2$", "$0 = x^3 + 2x^2 + 2x$"],
    correctAnswer: 2,
    explanation: "The polynomial equation is $x[x-(2-\\sqrt{3})][x-(2+\\sqrt{3})] = 0 \\Rightarrow x(x - 2 + \\sqrt{3})(x - 2 - \\sqrt{3}) = 0 \\Rightarrow x[(x-2)^2 - (\\sqrt{3})^2] = 0 \\Rightarrow x(x^2 - 4x + 1) = 0 \\Rightarrow x^3 - 4x^2 + x = 0$.",
    category: "Quadratic Equations"
  },
  {
    id: 11,
    question: "If $m$ is a real parameter, what is the number of the real roots of the equation $x(x^2 + 1)(mx^2 - x - 2m) = 0$?",
    options: ["$1$", "$2$", "$3$", "$0$", "$5$"],
    correctAnswer: 2,
    explanation: "The factor $x=0$ provides 1 real root. The factor $x^2+1=0$ has no real roots. For $mx^2 - x - 2m = 0$, the discriminant is $D = (-1)^2 - 4(m)(-2m) = 1 + 8m^2$. Since $m$ is a real number, $m^2 \\ge 0$, so $D = 1 + 8m^2 > 0$. Thus, $mx^2 - x - 2m = 0$ always has 2 distinct real roots as long as $m \\neq 0$. If $m=0$, it has 1 real root ($x=0$) bringing the total distinct real roots to 1. Assuming $m \\neq 0$ as typical for parameters, total real roots $= 1 + 2 = 3$.",
    category: "Quadratic Equations"
  },
  {
    id: 12,
    question: "If one of the roots of $2x^2 + ax + b = 0$ is $-1+2i$, what is the value of $b$?",
    options: ["$-2$", "$2$", "$-5$", "$5$", "$10$"],
    correctAnswer: 4,
    explanation: "Since coefficients are implicitly real, the other root is the conjugate $-1-2i$. Product of the roots: $(-1+2i)(-1-2i) = (-1)^2 - (2i)^2 = 1 - (-4) = 5$. Also, Product $= \\frac{b}{2}$. So $5 = \\frac{b}{2} \\Rightarrow b = 10$.",
    category: "Quadratic Equations"
  },
  {
    id: 13,
    question: "If the roots of the equation $x^2 + x - 3 = 0$ are $\\alpha$ and $\\beta$, then $\\frac{1}{\\alpha} + \\frac{1}{\\beta} =$ ",
    options: ["$\\frac{1}{3}$", "$\\frac{2}{3}$", "$-\\frac{2}{3}$", "$\\frac{2}{5}$", "$\\frac{3}{5}$"],
    correctAnswer: 0,
    explanation: "Since sum of the roots $\\alpha + \\beta = -1$ and product of the roots $\\alpha\\beta = -3$, $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\frac{-1}{-3} = \\frac{1}{3}$.",
    category: "Quadratic Equations"
  },
  {
    id: 14,
    question: "If the equation of a parabola is $y = 2x^2$, then the directrix of the graph is",
    options: ["$y=2$", "$y=\\frac{1}{2}$", "$y=\\frac{1}{8}$", "$y=-\\frac{1}{8}$", "$y=-\\frac{1}{2}$"],
    correctAnswer: 3,
    explanation: "The standard form of the parabola $y = ax^2$ has focus $(0, p)$ and directrix $y = -p$, where $a = \\frac{1}{4p}$. Here $2 = \\frac{1}{4p} \\Rightarrow p = \\frac{1}{8}$. The directrix is $y = -\\frac{1}{8}$.",
    category: "Quadratic Equations"
  },
  {
    id: 15,
    question: "Which binominal is NOT a factor of $-x^3 + 2x^2 + x - 2$?",
    options: ["$x-1$", "$-x+2$", "$3-x$", "$x+1$", "$-x-1$"],
    correctAnswer: 2,
    explanation: "For $x-a$ to be a factor, $x=a$ has to be a root. Testing $x=3$ for $3-x$: $-(3)^3 + 2(3)^2 + 3 - 2 = -27 + 18 + 3 - 2 = -8 \\neq 0$. So $3-x$ is not a factor.",
    category: "Quadratic Equations"
  },
  {
    id: 16,
    question: "The graph of a polynomial function has one zero at $x=0$, one negative zero, and one positive zero where the positive zero is further from the origin. Which of the following could be the equation of the polynomial function?",
    options: ["$P(x) = x(x+1)(x-3)(x^2-1)$", "$P(x) = x(x-1)(x^2-9)$", "$P(x) = x(x-1)(x+3)(x^2+5)$", "$P(x) = x(x+1)(x-3)(x^2+5x+10)$", "$P(x) = x(x+1)(x-3)^2(x^2+1)$"],
    correctAnswer: 3,
    explanation: "The function has one zero at $x=0$, one negative zero, and one positive zero. Choice (D) has one zero at $x=0$, one negative zero at $x=-1$, and one positive zero at $x=3$. The quadratic $x^2+5x+10$ has a negative discriminant ($25-40 < 0$) and thus imaginary roots. The other options either have too many roots or the wrong sign relative magnitudes.",
    category: "Quadratic Equations"
  },
  {
    id: 17,
    question: "Which constant should be added to $3x^2 - 8x$ in order to be made into a perfect square?",
    options: ["$\\frac{4}{3}$", "$\\frac{16}{3}$", "$\\frac{8}{3}$", "$4$", "$16$"],
    correctAnswer: 1,
    explanation: "By completing the square for $ax^2 + bx$, we add $\\frac{b^2}{4a}$. Here $a=3$ and $b=-8$. We should add $\\frac{(-8)^2}{4(3)} = \\frac{64}{12} = \\frac{16}{3}$.",
    category: "Quadratic Equations"
  },
  {
    id: 18,
    question: "If $3-i\\sqrt{2}$ is the root of the quadratic equation $ax^2 - 12x + c = 0$, what is the value of $c$?",
    options: ["$11$", "$22$", "$25$", "$33$", "$44$"],
    correctAnswer: 1,
    explanation: "Since $3-i\\sqrt{2}$ is the root, the other root is $3+i\\sqrt{2}$. Sum of roots: $S = \\frac{12}{a} = (3-i\\sqrt{2}) + (3+i\\sqrt{2}) = 6 \\Rightarrow a = 2$. Product of roots: $P = \\frac{c}{a} = \\frac{c}{2} = (3-i\\sqrt{2})(3+i\\sqrt{2}) = 9 + 2 = 11$. So $\\frac{c}{2} = 11 \\Rightarrow c = 22$.",
    category: "Quadratic Equations"
  },
  {
    id: 19,
    question: "Among the following equations, which one is the equation of a quadratic function whose curve passes through the point $(-1, 2)$ and is tangent to the line $y = -x$ at the origin?",
    options: ["$f(x) = x^2 + x + 2$", "$f(x) = x^2 + 2x + 3$", "$f(x) = x^2 - x$", "$f(x) = -x^2 + x + 4$", "$f(x) = x^2 + x$"],
    correctAnswer: 2,
    explanation: "The parabola passes through the origin $(0,0)$, so its y-intercept $c = 0$. This eliminates A, B, and D. It's tangent to $y = -x$ at the origin, meaning $f'(0) = -1$. For $f(x) = ax^2 + bx$, $f'(x) = 2ax + b$, so $f'(0) = b$. Thus $b = -1$. The function is $f(x) = ax^2 - x$. It passes through $(-1,2)$, so $a(-1)^2 - (-1) = 2 \\Rightarrow a + 1 = 2 \\Rightarrow a = 1$. The function is $f(x) = x^2 - x$.",
    category: "Quadratic Equations"
  },
  {
    id: 20,
    question: "Point $(3, 3)$ lies on a parabola of focus $A$ with abscissa 0 and directrix $L: y = -2$. What is the ordinate of $A$?",
    options: ["$-7$", "$1$", "$3$", "$5$", "$7$"],
    correctAnswer: 4,
    explanation: "A parabola is a set of points that are at an equal distance from the focus and the directrix. Distance to directrix from $(3,3)$ is $|3 - (-2)| = 5$. The distance from $(3,3)$ to $A(0, y_a)$ must also be $5$. $\\sqrt{(0-3)^2 + (y_a - 3)^2} = 5 \\Rightarrow 9 + (y_a - 3)^2 = 25 \\Rightarrow (y_a - 3)^2 = 16$. So $y_a - 3 = \\pm 4 \\Rightarrow y_a = 7$ or $y_a = -1$. $7$ is one of the options.",
    category: "Quadratic Equations"
  },
  {
    id: 21,
    question: "If $3+4i$ is a root of $2x^2 + ax + b = 0$, then $b =$ ",
    options: ["$25$", "$-25$", "$50$", "$-50$", "It cannot be determined from the information given."],
    correctAnswer: 2,
    explanation: "Since $3+4i$ is a root, its conjugate $3-4i$ is also a root. The product of the roots is $\\frac{b}{2}$. $(3+4i)(3-4i) = \\frac{b}{2} \\Rightarrow 9 + 16 = \\frac{b}{2} \\Rightarrow 25 = \\frac{b}{2} \\Rightarrow b = 50$.",
    category: "Quadratic Equations"
  },
  {
    id: 22,
    question: "If the graph of $f$ is a polynomial of degree 7 bouncing at $0$ and crossing at $-3, 2, 4$, opening upwards for large $x$, which of the following could be $f$?",
    options: ["$x^3(x+3)^2(x-2)(x-4)$", "$x^2(x+3)(x-2)(x-4)(x-1)^2$", "$x^2(x+3)(x-2)(x-3)(x+1)^2$", "$x^2(x+3)^2(x-3)^2(x-4)$", "$x^2(x+3)(x-2)(x-4)(x^2+1)$"],
    correctAnswer: 4,
    explanation: "At $x=0$, the graph bounces on the x-axis, implying a squared factor $x^2$. It passes through $x=-3, 2, 4$, implying factors $(x+3)$, $(x-2)$, $(x-4)$. The polynomial has these factors: $P(x) = x^2(x+3)(x-2)(x-4)Q(x)$, where $Q(x)$ has imaginary roots (to make up the degree 7, like $x^2+1$). Choice (E) matches perfectly.",
    category: "Quadratic Equations"
  },
  {
    id: 23,
    question: "If $(x-1)$ is a factor of $x^6 - 5x^4 + 4x^3 - x + k$, then what is the value of $k$?",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
    correctAnswer: 0,
    explanation: "Factor Theorem: $f(1) = 1 - 5 + 4 - 1 + k = 0 \\Rightarrow -1 + k = 0 \\Rightarrow k = 1$.",
    category: "Quadratic Equations"
  },
  {
    id: 24,
    question: "If $f(x) = 2x^3 - 3x + 2$, which of the following statements is true?",
    options: ["The function is increasing for all real $x$.", "The function is increasing for $x > 0$.", "The equation $f(x)=0$ have three real roots.", "The equation $f(x)=0$ have two imaginary roots.", "The inverse of the function is also a function."],
    correctAnswer: 3,
    explanation: "Using a graphing calculator or finding relative extrema: $f'(x) = 6x^2 - 3$. Extrema at $x = \\pm \\sqrt{0.5}$. The local max is $f(-\\sqrt{0.5}) \\approx 3.41$ and local min is $f(\\sqrt{0.5}) \\approx 0.58$. Since the local min is greater than 0, the graph only crosses the x-axis once (at some negative value). Thus it has one real root and two imaginary roots.",
    category: "Quadratic Equations"
  },
  {
    id: 25,
    question: "If the value of $f(x) = x^2 - 3x - k$ is always positive for any $x$, which of the following could be the value of $k$?",
    options: ["$-3$", "$-2$", "$0$", "$2$", "$3$"],
    correctAnswer: 0,
    explanation: "Since $f(x)$ is always positive, $f(x) = 0$ must have imaginary roots. Discriminant $D = b^2 - 4ac = (-3)^2 - 4(1)(-k) < 0 \\Rightarrow 9 + 4k < 0 \\Rightarrow 4k < -9 \\Rightarrow k < -2.25$. From the choices, $-3$ is the only value less than $-2.25$.",
    category: "Quadratic Equations"
  },
  {
    id: 26,
    question: "If the quadratic equation $x^2 + 2ax + 2a^2 + 2a - 3 = 0$ has real roots, then which of the following could NOT be the value of $a$?",
    options: ["$-2$", "$-1$", "$0$", "$1$", "$2$"],
    correctAnswer: 4,
    explanation: "Discriminant: $D = (2a)^2 - 4(1)(2a^2 + 2a - 3) \\ge 0 \\Rightarrow 4a^2 - 8a^2 - 8a + 12 \\ge 0 \\Rightarrow -4a^2 - 8a + 12 \\ge 0 \\Rightarrow a^2 + 2a - 3 \\le 0 \\Rightarrow (a+3)(a-1) \\le 0$. The solution is $-3 \\le a \\le 1$. $2$ is not in this range.",
    category: "Quadratic Equations"
  },
  {
    id: 27,
    question: "Figure 7 shows the graph of $p(x) = ax^3 + bx^2 + cx + d$ intersecting the x-axis at $-1, 0, 1$, and opening upwards for large $x$. Which of the following must be true.",
    options: ["$b > 0$", "$a < 0$", "$b = 0$", "$b < 0$", "$d > 0$"],
    correctAnswer: 2,
    explanation: "The roots are $-1, 0, 1$. Since it goes to $+\\infty$ as $x \\to \\infty$, $a > 0$. The sum of the roots is $\\frac{-b}{a} = (-1 + 0 + 1) = 0 \\Rightarrow b = 0$.",
    category: "Quadratic Equations"
  },
  {
    id: 28,
    question: "If the difference of the roots of $x^2 + 2mx = 7$ is $8$, then what is the positive integer value of $m$?",
    options: ["$0$", "$1$", "$2$", "$3$", "$4$"],
    correctAnswer: 3,
    explanation: "If $r_1 > r_2$, then $r_1 - r_2 = 8$, $r_1 + r_2 = -2m$, and $r_1r_2 = -7$. Using $(r_1+r_2)^2 = (r_1-r_2)^2 + 4r_1r_2 \\Rightarrow (-2m)^2 = 8^2 + 4(-7) \\Rightarrow 4m^2 = 64 - 28 = 36 \\Rightarrow m^2 = 9 \\Rightarrow m = 3$.",
    category: "Quadratic Equations"
  },
  {
    id: 29,
    question: "If the ratio of the two roots of the equation $x^2 - kx + 18 = 0$ is $1:2$, which of the following is all the values of constant $k$?",
    options: ["$\\{3, 6\\}$", "$\\{-9, 9\\}$", "$\\{9\\}$", "$\\{10, 12\\}$", "$\\{6, 9\\}$"],
    correctAnswer: 1,
    explanation: "Define the two roots as $n$ and $2n$. The product of the two roots: $2n^2 = 18 \\Rightarrow n = \\pm 3$. The sum of the roots: $k = n + 2n = 3n = 3(\\pm 3) = \\pm 9$. Thus, $k \\in \\{-9, 9\\}$.",
    category: "Quadratic Equations"
  },
  {
    id: 30,
    question: "Figure 3 shows the graph of $y = ax^2 + bx + c$, a parabola opening downwards with its vertex in the second quadrant and an x-intercept on both sides of the origin. Which of the following could NOT be true?",
    options: ["$ab > 0$", "$bc < 0$", "$ac < 0$", "$b^2 > 4ac$", "$b^2 < 4ac$"],
    correctAnswer: 4,
    explanation: "From the description, the parabola intersects the x-axis at two distinct points, meaning it has two real roots. Therefore, its discriminant must be positive: $\\Delta = b^2 - 4ac > 0$, meaning $b^2 > 4ac$. Thus, $b^2 < 4ac$ could NOT be true.",
    category: "Quadratic Equations"
  },
  {
    id: 31,
    question: "If one zero of $f(x) = x^2 - kx + k + 7$ is $3$, where $k$ is a constant, then what is the other zero of $f$?",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
    correctAnswer: 4,
    explanation: "Because $3$ is a zero, $f(3) = 0 \\Rightarrow 9 - 3k + k + 7 = 0 \\Rightarrow 16 - 2k = 0 \\Rightarrow k = 8$. Then $f(x) = x^2 - 8x + 15 = (x-3)(x-5) = 0$. Therefore, the other root is $5$.",
    category: "Quadratic Equations"
  },
  {
    id: 32,
    question: "If $(n!)^2 - 118n! - 240 = 0$, what is the value of $n$?",
    options: ["$2$", "$3$", "$4$", "$5$", "$6$"],
    correctAnswer: 3,
    explanation: "The quadratic equation in terms of $n!$ factors as $(n! - 120)(n! + 2) = 0$. Since $n! > 0$, $n! = 120$. We know $5! = 120$, so $n = 5$.",
    category: "Quadratic Equations"
  },
  {
    id: 33,
    question: "By the rational zero theorem, which of the following could not be a possible rational zero of the equation $y = 2x^4 - 3x^2 - 2x + 10$?",
    options: ["$-\\frac{1}{2}$", "$\\frac{1}{5}$", "$-\\frac{5}{2}$", "$\\frac{5}{2}$", "$5$"],
    correctAnswer: 1,
    explanation: "The possible rational zeros are $\\frac{\\text{factors of } 10}{\\text{factors of } 2} = \\frac{\\pm 1, \\pm 2, \\pm 5, \\pm 10}{\\pm 1, \\pm 2}$. $\\frac{1}{5}$ is not in this set, so it cannot be a rational root.",
    category: "Quadratic Equations"
  },
  {
    id: 34,
    question: "If $2-i$ is one of the zeros of the polynomial $p(x)$, then a factor of $p(x)$ could be",
    options: ["$x^2 - 2$", "$x^2 - 4$", "$x^2 - 4x + 4$", "$x^2 - 4x + 5$", "$x^2 + 4x + 3$"],
    correctAnswer: 3,
    explanation: "Since $2-i$ is one of the roots, the other root must be $2+i$ (conjugate). Therefore, the equation with these two roots is $[x - (2-i)][x - (2+i)] = [(x-2)+i][(x-2)-i] = (x-2)^2 - i^2 = x^2 - 4x + 4 - (-1) = x^2 - 4x + 5 = 0$.",
    category: "Quadratic Equations"
  },
  {
    id: 35,
    question: "If $-2-\\sqrt{7}$ is a root of the equation $x^2 + 4x + 3k = 0$, then $k =$ ",
    options: ["$1$", "$-1$", "$2$", "$-2$", "$4$"],
    correctAnswer: 1,
    explanation: "If $-2-\\sqrt{7}$ is a root, the other root is $-2+\\sqrt{7}$. The product of the roots is $3k$. Thus, $3k = (-2-\\sqrt{7})(-2+\\sqrt{7}) = (-2)^2 - (\\sqrt{7})^2 = 4 - 7 = -3 \\Rightarrow k = -1$.",
    category: "Quadratic Equations"
  },
  {
    id: 36,
    question: "What is the range of $f(x) = x^2 - 5x + 6$?",
    options: ["$y \\ge 0$", "$y \\ge -0.25$", "$2 \\le y \\le 3$", "$y \\le 5$", "All real numbers"],
    correctAnswer: 1,
    explanation: "The graph of $y = x^2 - 5x + 6$ is concave up. The minimum occurs at the axis of symmetry $x = \\frac{-(-5)}{2(1)} = 2.5$. The minimum value is $f(2.5) = (2.5)^2 - 5(2.5) + 6 = -0.25$. Thus the range is $y \\ge -0.25$.",
    category: "Quadratic Equations"
  },
  {
    id: 37,
    question: "If $f(x) = x^2 + kx + 9$ is always greater than 0 for all real $x$, which of the following could be the value of $k$?",
    options: ["$-10$", "$-5$", "$10$", "$12$", "$13$"],
    correctAnswer: 1,
    explanation: "Since $f(x) > 0$ for all $x$, $f(x) = 0$ has imaginary roots. The discriminant must be negative: $D = b^2 - 4ac = k^2 - 4(1)(9) < 0 \\Rightarrow k^2 - 36 < 0 \\Rightarrow -6 < k < 6$. Among the choices, $-5$ is the only value in this interval.",
    category: "Quadratic Equations"
  },
  {
    id: 38,
    question: "Which of the following intervals contain a root of $x^3 - 3x^2 + 3x + 2 = 0$?",
    options: ["$-2 < x < -1$", "$-1 < x < 0$", "$0 < x < 1$", "$2 < x < 3$", "$3 < x < 4$"],
    correctAnswer: 1,
    explanation: "Using the Intermediate Value Theorem, check evaluating at integer points. $f(-1) = (-1)^3 - 3(-1)^2 + 3(-1) + 2 = -1 - 3 - 3 + 2 = -5$. $f(0) = (0)^3 - 3(0)^2 + 3(0) + 2 = 2$. Since $f(-1) < 0$ and $f(0) > 0$, there is a root in $(-1, 0)$.",
    category: "Quadratic Equations"
  },
  {
    id: 39,
    question: "If one of the roots of a polynomial function $f(x) = 0$ is $1+\\frac{\\sqrt{3}}{2}i$, which of the following could be $f(x)$?",
    options: ["$2x^2 - 4x + 6$", "$x^2 - 2x + 10$", "$3x^2 + 6x - 4$", "$4x^2 - 8x + 7$", "$5x^2 - 10x + 7$"],
    correctAnswer: 3,
    explanation: "Since $1 + \\frac{\\sqrt{3}}{2}i$ is a root, the other root is $1 - \\frac{\\sqrt{3}}{2}i$. The sum of the roots is $2$. The product of the roots is $1^2 - (\\frac{\\sqrt{3}}{2}i)^2 = 1 + \\frac{3}{4} = \\frac{7}{4}$. The quadratic equation becomes $x^2 - 2x + \\frac{7}{4} = 0 \\Rightarrow 4x^2 - 8x + 7 = 0$.",
    category: "Quadratic Equations"
  },
  {
    id: 40,
    question: "If $kx^2 + 4x - 2 = 0$ have two different real roots, which of the following is the values of $k$?",
    options: ["$k > -2$", "$k < -2$", "$-2 < k < 0 \\text{ or } k > 0$", "$-2 < k < 2$", "$-1 < k < 3$"],
    correctAnswer: 2,
    explanation: "To have two different real roots, the discriminant $D > 0$. $D = 4^2 - 4(k)(-2) = 16 + 8k > 0 \\Rightarrow 8k > -16 \\Rightarrow k > -2$. Also, since it's a quadratic equation, the leading coefficient cannot be zero, $k \\neq 0$. Therefore, $-2 < k < 0$ or $k > 0$.",
    category: "Quadratic Equations"
  }
];
