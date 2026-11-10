import { Question } from '../../types';

export const EST1_QUADRATIC_EQUATIONS_ROOTS_PART1_SET: Question[] = [
  {
    id: "est1_quad_roots_p1_q1",

    question: "If $(ax^2+b)(2x-1) = cx + 1$ for all values of $x$, what is the value of $\\frac{b}{c}$?",
    options: [
      "0.5",
      "0.25",
      "0.66",
      "1"
    ],
    correctAnswer: 0,
    explanation: "$2ax^3 - ax^2 + 2bx - b = cx + 1$\n\nComparing coefficients:\nConstant term: $-b = 1 \\Rightarrow b = -1$\nCoefficient of $x$: $2b = c \\Rightarrow 2(-1) = c \\Rightarrow c = -2$\n\n$\\frac{b}{c} = \\frac{-1}{-2} = \\frac{1}{2} = 0.5$"
  },
  {
    id: "est1_quad_roots_p1_q2",
    question: "If $f(x) = x^2 - 5x - 6$ and $g(x) = -3 - x$, what is the value of $f(g(-1))$?",
    options: [
      "13",
      "8",
      "0",
      "30"
    ],
    correctAnswer: 1,
    explanation: "First, find $g(-1)$:\n$g(-1) = -3 - (-1) = -3 + 1 = -2$\n\nNext, substitute this value into $f(x)$:\n$f(-2) = (-2)^2 - 5(-2) - 6 = 4 + 10 - 6 = 14 - 6 = 8$"
  },
  {
    id: "est1_quad_roots_p1_q3",
    question: "$9x^2 + 18x - 3 = 0$\n\nWhat is the average (arithmetic mean) of the two solutions of the equation given above?",
    options: [
      "-1",
      "-\\frac{1}{6}",
      "\\frac{1+\\sqrt{2}}{2}",
      "\\frac{\\sqrt{2}}{2}"
    ],
    correctAnswer: 0,
    explanation: "For a quadratic equation $ax^2 + bx + c = 0$, the sum of the roots is $-\\frac{b}{a}$.\nSum of roots = $-\\frac{18}{9} = -2$\n\nThe average of the two roots is the sum divided by 2:\nAverage = $\\frac{-2}{2} = -1$"
  },
  {
    id: "est1_quad_roots_p1_q4",
    question: "What is the product of the solutions of the equation $x^2 - 3x = -2$?",
    options: [
      "2",
      "3",
      "-3",
      "4"
    ],
    correctAnswer: 0,
    explanation: "First, write the equation in standard form $ax^2 + bx + c = 0$:\n$x^2 - 3x + 2 = 0$\n\nThe product of the roots is $\\frac{c}{a}$.\nProduct = $\\frac{2}{1} = 2$"
  },
  {
    id: "est1_quad_roots_p1_q5",
    question: "The function $y = 2x^2 + dx - 1$ has zero at $x = -2$. What is the value of $d$?",
    options: [
      "3.5",
      "4.5",
      "4",
      "-4"
    ],
    correctAnswer: 0,
    explanation: "If the function has a zero at $x = -2$, then $y = 0$ when $x = -2$.\n$0 = 2(-2)^2 + d(-2) - 1$\n$0 = 2(4) - 2d - 1$\n$0 = 8 - 2d - 1$\n$0 = 7 - 2d$\n$2d = 7 \\Rightarrow d = \\frac{7}{2} = 3.5$"
  },
  {
    id: "est1_quad_roots_p1_q6",
    question: "If $a^2 + b^2 = 20$ and $ab = 8$, then what is $(b - a)^2$?",
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    correctAnswer: 1,
    explanation: "Expand $(b - a)^2$:\n$(b - a)^2 = b^2 - 2ab + a^2 = (a^2 + b^2) - 2ab$\n\nSubstitute the given values:\n$(b - a)^2 = 20 - 2(8) = 20 - 16 = 4$"
  },
  {
    id: "est1_quad_roots_p1_q7",
    question: "If $3 - 8x + 5x^2 = 0$, which of the following is a solution for $x$?",
    options: [
      "0",
      "2",
      "-1",
      "1"
    ],
    correctAnswer: 3,
    explanation: "We can test the given options or factor the equation.\nTesting $x = 1$:\n$3 - 8(1) + 5(1)^2 = 3 - 8 + 5 = -5 + 5 = 0$.\nSo $x = 1$ is a solution."
  },
  {
    id: "est1_quad_roots_p1_q8",
    question: "The function $h(x) = x^2 - ax - 3$ has zeros at $x = 3$ and $x = -1$. What is the value of $a$?",
    options: [
      "1",
      "2",
      "-2",
      "-1"
    ],
    correctAnswer: 1,
    explanation: "The sum of the roots is $-\\frac{b}{a}$ (where $b$ is the coefficient of $x$ and $a$ is the coefficient of $x^2$).\nSum of roots = $3 + (-1) = 2$\nFrom the equation, sum of roots = $-\\frac{-a}{1} = a$\nTherefore, $a = 2$."
  },
  {
    id: "est1_quad_roots_p1_q9",
    question: "What is the resulting coefficient of $x$ when $-2x+3$ is multiplied by $-3x-2$?",
    options: [
      "-9",
      "-5",
      "5",
      "6"
    ],
    correctAnswer: 1,
    explanation: "Multiply the binomials using FOIL:\n$(-2x+3)(-3x-2) = 6x^2 + 4x - 9x - 6 = 6x^2 - 5x - 6$\n\nThe coefficient of $x$ is $-5$."
  },
  {
    id: "est1_quad_roots_p1_q10",
    question: "$f(x) = ax^2 + (3-b)x - 5$\n\nFor the function $f$ defined above, $a$ and $b$ are constants. If $f(1) = 2$ and $f(2) = -1$, which of the following is the value of $f(-1)$?",
    options: [
      "-22",
      "-16",
      "2",
      "11"
    ],
    correctAnswer: 0,
    explanation: "$f(1) = a(1)^2 + (3-b)(1) - 5 = a + 3 - b - 5 = a - b - 2 = 2 \\Rightarrow a - b = 4$\n$f(2) = a(2)^2 + (3-b)(2) - 5 = 4a + 6 - 2b - 5 = 4a - 2b + 1 = -1 \\Rightarrow 4a - 2b = -2 \\Rightarrow 2a - b = -1$\n\nSubtract the first equation from the second:\n$(2a - b) - (a - b) = -1 - 4 \\Rightarrow a = -5$\nSubstitute $a = -5$ into $a - b = 4$:\n$-5 - b = 4 \\Rightarrow b = -9$\n\nSo, $f(x) = -5x^2 + (3 - (-9))x - 5 = -5x^2 + 12x - 5$\n$f(-1) = -5(-1)^2 + 12(-1) - 5 = -5 - 12 - 5 = -22$"
  },
  {
    id: "est1_quad_roots_p1_q11",
    question: "If $m$ is a real parameter different than zero, what is the number of the real roots of the equation $2x(x^2 + 4)(mx^2 + x - m) = 0$?",
    options: [
      "1",
      "2",
      "3",
      ">3"
    ],
    correctAnswer: 2,
    explanation: "Set each factor to zero:\n1) $2x = 0 \\Rightarrow x = 0$ (1 real root)\n2) $x^2 + 4 = 0 \\Rightarrow x^2 = -4$ (no real roots)\n3) $mx^2 + x - m = 0$\nCheck the discriminant $\\Delta = b^2 - 4ac = 1^2 - 4(m)(-m) = 1 + 4m^2$.\nSince $m \\neq 0$, $m^2 > 0$, so $1 + 4m^2 > 0$. This means the quadratic always has 2 distinct real roots.\n\nTotal real roots = $1 + 0 + 2 = 3$."
  },
  {
    id: "est1_quad_roots_p1_q12",
    question: "$\\sqrt{x^2 + 3} = x - 5$\n\nWhich of the following could be a solution for the equation above?",
    options: [
      "0",
      "2.2",
      "5",
      "None of the above"
    ],
    correctAnswer: 3,
    explanation: "Since the principal square root is always non-negative, the right side must also be non-negative:\n$x - 5 \\ge 0 \\Rightarrow x \\ge 5$.\nLet's test $x = 5$:\n$\\sqrt{5^2 + 3} = \\sqrt{28} \\approx 5.29$\n$5 - 5 = 0$\n$\\sqrt{28} \\neq 0$, so $x=5$ is not a solution.\nSince $x$ must be $\\ge 5$, 0 and 2.2 are also not solutions. Therefore, none of the above."
  },
  {
    id: "est1_quad_roots_p1_q13",
    question: "$25x^2 - tx + 4 = (5x - 2)(ax + b)$\n\nIn the equation above, $a, b$ and $t$ are constant numbers. What is the value of $t$?",
    options: [
      "5",
      "-2",
      "20",
      "-15"
    ],
    correctAnswer: 2,
    explanation: "Expand the right side:\n$(5x - 2)(ax + b) = 5ax^2 + 5bx - 2ax - 2b = 5ax^2 + (5b - 2a)x - 2b$\n\nCompare coefficients with $25x^2 - tx + 4$:\n$5a = 25 \\Rightarrow a = 5$\n$-2b = 4 \\Rightarrow b = -2$\n$-t = 5b - 2a = 5(-2) - 2(5) = -10 - 10 = -20 \\Rightarrow t = 20$"
  },
  {
    id: "est1_quad_roots_p1_q14",
    question: "$P(x) = (3a - 6)x^2 + (4 - 2b)x + c - 3$\n\nIn the polynomial $P$ above, $a, b$ and $c$ are constant numbers.\nIf $P$ is identically zero, what is the value of $a + b + c$?",
    options: [
      "5",
      "7",
      "-8",
      "2"
    ],
    correctAnswer: 1,
    explanation: "If a polynomial is identically zero, all of its coefficients must be zero.\n$3a - 6 = 0 \\Rightarrow 3a = 6 \\Rightarrow a = 2$\n$4 - 2b = 0 \\Rightarrow 2b = 4 \\Rightarrow b = 2$\n$c - 3 = 0 \\Rightarrow c = 3$\n\n$a + b + c = 2 + 2 + 3 = 7$"
  },
  {
    id: "est1_quad_roots_p1_q15",
    question: "$\\sqrt{x^2 - 5x + 8} = 2$\n\nWhat is the product of the two solutions of the equation above?",
    options: [
      "4",
      "-4",
      "2",
      "-2"
    ],
    correctAnswer: 0,
    explanation: "Square both sides:\n$x^2 - 5x + 8 = 4$\n$x^2 - 5x + 4 = 0$\n\nThe product of the roots of $ax^2 + bx + c = 0$ is $\\frac{c}{a}$.\nProduct = $\\frac{4}{1} = 4$.\n(Note: The roots are 1 and 4. Checking them in the original equation: $\\sqrt{1-5+8} = \\sqrt{4} = 2$ and $\\sqrt{16-20+8} = \\sqrt{4} = 2$. Both are valid.)"
  },
  {
    id: "est1_quad_roots_p1_q16",
    question: "The function $h(x) = (x^2 - a)(4 + x) - 112$ has zero at $x = 4$. What is the value of $a$?",
    options: [
      "2",
      "5",
      "-4",
      "4"
    ],
    correctAnswer: 0,
    explanation: "If the function has a zero at $x = 4$, then $h(4) = 0$.\n$h(4) = (4^2 - a)(4 + 4) - 112 = 0$\n$(16 - a)(8) = 112$\n$16 - a = \\frac{112}{8}$\n$16 - a = 14$\n$a = 2$"
  },
  {
    id: "est1_quad_roots_p1_q17",
    question: "Given that $2x^2 + ax + (4c - 1) = (2b - 1)x^2 + 7x + c + 1$, what is the value of $bc + a$, where $a, b$ and $c$ are real numbers?",
    options: [
      "8",
      "\\frac{37}{4}",
      "7.5",
      "\\frac{67}{9}"
    ],
    correctAnswer: 0,
    explanation: "Compare the coefficients of the two polynomials:\n$x^2$ coefficient: $2 = 2b - 1 \\Rightarrow 2b = 3 \\Rightarrow b = \\frac{3}{2}$\n$x$ coefficient: $a = 7$\nConstant term: $4c - 1 = c + 1 \\Rightarrow 3c = 2 \\Rightarrow c = \\frac{2}{3}$\n\n$bc + a = (\\frac{3}{2})(\\frac{2}{3}) + 7 = 1 + 7 = 8$"
  },
  {
    id: "est1_quad_roots_p1_q18",
    question: "$f(x) = ax^2 - 15$\n\nFor the function $f$ defined above, $a$ is a constant and $f(3) = 10$. Which of the following is equal to the value of $f(5)$?",
    options: [
      "$f(0)$",
      "$f(3)$",
      "$f(-3)$",
      "$f(-5)$"
    ],
    correctAnswer: 3,
    explanation: "Since $f(x) = ax^2 - 15$, the function only has even powers of $x$. This means $f(x)$ is an even function, and $f(x) = f(-x)$ for all $x$.\nTherefore, $f(5) = f(-5)$."
  },
  {
    id: "est1_quad_roots_p1_q19",
    question: "If the graph of $y = ax^2 + 5x + c$ has x-intercepts at 1 and 3, what is the value of $a + c$?",
    options: [
      "5",
      "-3",
      "8",
      "-5"
    ],
    correctAnswer: 3,
    explanation: "The x-intercepts are the roots of the equation $ax^2 + 5x + c = 0$.\nSum of roots = $1 + 3 = 4$. Also, sum of roots = $-\\frac{b}{a} = -\\frac{5}{a}$.\n$4 = -\\frac{5}{a} \\Rightarrow a = -\\frac{5}{4}$\n\nProduct of roots = $1 \\times 3 = 3$. Also, product of roots = $\\frac{c}{a}$.\n$3 = \\frac{c}{-5/4} \\Rightarrow c = 3(-\\frac{5}{4}) = -\\frac{15}{4}$\n\n$a + c = -\\frac{5}{4} + (-\\frac{15}{4}) = -\\frac{20}{4} = -5$"
  },
  {
    id: "est1_quad_roots_p1_q20",
    question: "From the set of equations below, which has a real solution?\n\nI. $\\sqrt{2x - 1} = -x^2$\nII. $|x + 1| = -3$\nIII. $(x + 1)^2 + 3 = 0$\nIV. $\\sqrt{2x - 1} = x$",
    options: [
      "I only",
      "IV only",
      "I, II, and III",
      "III and IV"
    ],
    correctAnswer: 1,
    explanation: "I. $\\sqrt{2x - 1} = -x^2$. A square root cannot be negative, and $-x^2$ is $\\le 0$. The only possible solution is if both sides are 0, meaning $x=0$ and $2x-1=0$, which is impossible. No real solution.\nII. $|x + 1| = -3$. An absolute value cannot be negative. No real solution.\nIII. $(x + 1)^2 = -3$. The square of a real number cannot be negative. No real solution.\nIV. $\\sqrt{2x - 1} = x \\Rightarrow 2x - 1 = x^2 \\Rightarrow x^2 - 2x + 1 = 0 \\Rightarrow (x-1)^2 = 0 \\Rightarrow x = 1$. Checking: $\\sqrt{2(1)-1} = 1$. This is a valid real solution."
  },
  {
    id: "est1_quad_roots_p1_q21",
    question: "In the polynomial function $P(x) = 3x^3 + (a - 1)x + 7$, what is the value of the constant number $a$ if $-1$ is a root of $P$?",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    correctAnswer: 2,
    explanation: "If $-1$ is a root, then $P(-1) = 0$.\n$P(-1) = 3(-1)^3 + (a - 1)(-1) + 7 = 0$\n$-3 - (a - 1) + 7 = 0$\n$-3 - a + 1 + 7 = 0$\n$5 - a = 0 \\Rightarrow a = 5$"
  },
  {
    id: "est1_quad_roots_p1_q22",
    question: "What is the product of the solutions of $2x^4 = 4x^2 + 6$?",
    options: [
      "$3i$",
      "$0$",
      "$-3i$",
      "$-3$"
    ],
    correctAnswer: 3,
    explanation: "Rewrite the equation: $2x^4 - 4x^2 - 6 = 0 \\Rightarrow x^4 - 2x^2 - 3 = 0$.\nLet $y = x^2$. The equation becomes $y^2 - 2y - 3 = 0$.\n$(y - 3)(y + 1) = 0 \\Rightarrow y = 3$ or $y = -1$.\nSo $x^2 = 3 \\Rightarrow x = \\pm\\sqrt{3}$\nAnd $x^2 = -1 \\Rightarrow x = \\pm i$\nThe solutions are $\\sqrt{3}, -\\sqrt{3}, i, -i$.\nProduct = $(\\sqrt{3})(-\\sqrt{3})(i)(-i) = (-3)(-i^2) = (-3)(1) = -3$.\nAlternatively, for a polynomial $ax^n + \\dots + z = 0$, the product of roots is $(-1)^n \\frac{z}{a}$. Here $n=4$, so product = $\\frac{-6}{2} = -3$."
  },
  {
    id: "est1_quad_roots_p1_q23",
    question: "What are the values of $a$ and $b$ if $f(x) = (2a - 3)x^2 + bx - 1$ is equivalent to $g(x) = (4a + 3)x^2 + (3 - b)x - 1$?",
    options: [
      "$a = 3$ and $b = 1.5$",
      "$a = -3$ and $b = 1.5$",
      "$a = -3$ and $b = -1.5$",
      "$a = 3$ and $b = -1.5$"
    ],
    correctAnswer: 1,
    explanation: "If the functions are equivalent, their corresponding coefficients must be equal.\n$x^2$ coefficients: $2a - 3 = 4a + 3 \\Rightarrow -2a = 6 \\Rightarrow a = -3$\n$x$ coefficients: $b = 3 - b \\Rightarrow 2b = 3 \\Rightarrow b = 1.5$"
  },
  {
    id: "est1_quad_roots_p1_q24",
    question: "What is the sum of the solutions of $(a - 1)(a^2 + 8a + 15) = 0$?",
    options: [
      "8",
      "7",
      "-7",
      "-8"
    ],
    correctAnswer: 2,
    explanation: "The solutions are found by setting each factor to zero.\n$a - 1 = 0 \\Rightarrow a = 1$\n$a^2 + 8a + 15 = 0 \\Rightarrow (a + 3)(a + 5) = 0 \\Rightarrow a = -3, a = -5$\nSum of solutions = $1 + (-3) + (-5) = -7$."
  },
  {
    id: "est1_quad_roots_p1_q25",
    question: "$(4x + 1)^2 - 9x^2 = 0$\n\nWhat is the absolute value of the difference between the two roots of the above equation?",
    options: [
      "$\\frac{8}{65}$",
      "$\\frac{6}{7}$",
      "$\\frac{1}{4}$",
      "$\\frac{3}{14}$"
    ],
    correctAnswer: 1,
    explanation: "$(4x + 1)^2 = 9x^2$\nTake the square root of both sides:\n$4x + 1 = 3x$ or $4x + 1 = -3x$\n$x = -1$ or $7x = -1 \\Rightarrow x = -\\frac{1}{7}$\nAbsolute difference = $|-1 - (-\\frac{1}{7})| = |-\\frac{6}{7}| = \\frac{6}{7}$"
  },
  {
    id: "est1_quad_roots_p1_q26",
    question: "The function $g$ is defined by $g(x) = 3x^2 + kx - 8$ and $g(-2) = -4$. What is the value of $g(-3)$?",
    options: [
      "3",
      "5",
      "6",
      "7"
    ],
    correctAnswer: 3,
    explanation: "First, find $k$ using $g(-2) = -4$:\n$3(-2)^2 + k(-2) - 8 = -4$\n$12 - 2k - 8 = -4$\n$4 - 2k = -4$\n$-2k = -8 \\Rightarrow k = 4$\n\nNow, find $g(-3)$:\n$g(x) = 3x^2 + 4x - 8$\n$g(-3) = 3(-3)^2 + 4(-3) - 8 = 27 - 12 - 8 = 7$"
  },
  {
    id: "est1_quad_roots_p1_q27",
    question: "What is the product of the solutions of $x^3 - 4x^2 - 7x + 10 = 0$?",
    options: [
      "-10",
      "-12",
      "14",
      "5"
    ],
    correctAnswer: 0,
    explanation: "For a cubic polynomial $ax^3 + bx^2 + cx + d = 0$, the product of the roots is $-\\frac{d}{a}$.\nProduct = $-\\frac{10}{1} = -10$."
  },
  {
    id: "est1_quad_roots_p1_q28",
    question: "Which of the following is a factor of the polynomial: $2x^3 + 13x^2 + 5x - 6$?",
    options: [
      "$x - 1$",
      "$x - 6$",
      "$2x + 1$",
      "$2x - 1$"
    ],
    correctAnswer: 3,
    explanation: "By the Factor Theorem, if $(cx - d)$ is a factor, then $P(d/c) = 0$.\nLet's test $2x - 1$, so $x = \\frac{1}{2}$:\n$P(1/2) = 2(1/2)^3 + 13(1/2)^2 + 5(1/2) - 6 = 2(1/8) + 13(1/4) + 5/2 - 6 = 1/4 + 13/4 + 10/4 - 24/4 = 24/4 - 24/4 = 0$.\nSince $P(1/2) = 0$, $2x - 1$ is a factor."
  },
  {
    id: "est1_quad_roots_p1_q29",
    question: "Given that $h(t) = \\frac{2t + 1}{5t^2}$ ($t \\neq 0$), what is the negative value of $t$ if $h(t) = 3$?",
    options: [
      "-0.5",
      "-0.4",
      "-0.3",
      "-0.2"
    ],
    correctAnswer: 3,
    explanation: "$3 = \\frac{2t + 1}{5t^2}$\n$15t^2 = 2t + 1$\n$15t^2 - 2t - 1 = 0$\nFactor the quadratic:\n$(5t + 1)(3t - 1) = 0$\n$t = -\\frac{1}{5} = -0.2$ or $t = \\frac{1}{3}$\nThe negative value is $-0.2$."
  },
  {
    id: "est1_quad_roots_p1_q30",
    question: "What is the product of the solutions of $3x^4 + 11x^2 + 6 = 0$?",
    options: [
      "$i$",
      "$2i$",
      "$2$",
      "$-2$"
    ],
    correctAnswer: 2,
    explanation: "For a polynomial $ax^n + \\dots + z = 0$, the product of the roots is $(-1)^n \\frac{z}{a}$.\nHere $n=4$, so the product is $(-1)^4 \\frac{6}{3} = 2$."
  },
  {
    id: "est1_quad_roots_p1_q31",
    question: "The graph of $f(x) = 3x^2 - 4mx + 3$ where $m$ is a real number, passes through $(1, 2)$. What is the value of $m$?",
    options: [
      "$m = -1$",
      "$m = 1$",
      "$m = 2$",
      "$m = 4$"
    ],
    correctAnswer: 1,
    explanation: "Substitute $x = 1$ and $f(x) = 2$ into the equation:\n$2 = 3(1)^2 - 4m(1) + 3$\n$2 = 3 - 4m + 3$\n$2 = 6 - 4m$\n$4m = 4 \\Rightarrow m = 1$"
  },
  {
    id: "est1_quad_roots_p1_q32",
    question: "The sum of the roots of $(x - \\sqrt{2})^2(2x - \\sqrt{2})(x + \\sqrt{2}) = 0$ is",
    options: [
      "$\\sqrt{2}$",
      "$1$",
      "$\\frac{3\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{1}{2}$"
    ],
    correctAnswer: 2,
    explanation: "The roots are found by setting each factor to zero:\n$x - \\sqrt{2} = 0 \\Rightarrow x = \\sqrt{2}$ (multiplicity 2)\n$2x - \\sqrt{2} = 0 \\Rightarrow x = \\frac{\\sqrt{2}}{2}$\n$x + \\sqrt{2} = 0 \\Rightarrow x = -\\sqrt{2}$\n\nSum of all roots (including multiplicity) = $\\sqrt{2} + \\sqrt{2} + \\frac{\\sqrt{2}}{2} - \\sqrt{2} = \\sqrt{2} + \\frac{\\sqrt{2}}{2} = \\frac{2\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} = \\frac{3\\sqrt{2}}{2}$"
  },
  {
    id: "est1_quad_roots_p1_q33",
    question: "If $m$ is a real parameter, what is the number of the real roots of the equation $x(x^2 + 1)(mx^2 - x - 2m) = 0$?",
    options: [
      "1",
      "2",
      "3",
      "0",
      "5"
    ],
    correctAnswer: 2,
    explanation: "Set each factor to zero:\n1) $x = 0$ (1 real root)\n2) $x^2 + 1 = 0$ (no real roots)\n3) $mx^2 - x - 2m = 0$\nDiscriminant $\\Delta = (-1)^2 - 4(m)(-2m) = 1 + 8m^2$.\nSince $m$ is real, $m^2 \\ge 0$, so $1 + 8m^2 > 0$. This quadratic always has 2 distinct real roots.\nTotal number of real roots = $1 + 0 + 2 = 3$."
  },
  {
    id: "est1_quad_roots_p1_q34",
    question: "The root(s) of the equation $\\sqrt{a + 6} = -a$ is / are:",
    options: [
      "3",
      "-2",
      "3 and -2",
      "3 or -2",
      "No Roots"
    ],
    correctAnswer: 1,
    explanation: "Square both sides:\n$a + 6 = a^2$\n$a^2 - a - 6 = 0$\n$(a - 3)(a + 2) = 0 \\Rightarrow a = 3$ or $a = -2$\n\nCheck for extraneous solutions in the original equation:\nIf $a = 3$: $\\sqrt{3 + 6} = -3 \\Rightarrow \\sqrt{9} = -3 \\Rightarrow 3 = -3$ (False)\nIf $a = -2$: $\\sqrt{-2 + 6} = -(-2) \\Rightarrow \\sqrt{4} = 2 \\Rightarrow 2 = 2$ (True)\n\nThe only valid root is -2."
  }
];
