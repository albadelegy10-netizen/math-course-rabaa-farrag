import { Question } from './types';

export const EST2_GEOMETRIC_SEQUENCE_SET: Question[] = [
  {
    id: 1,
    question: "In a geometric sequence, the first term $a_1 = 3$ and the 4th term $a_4 = 24$. What is the 5th term $a_5$ of this sequence?",
    options: ["A) 36", "B) 42", "C) 48", "D) 64"],
    correctAnswer: 2,
    explanation: "Using $a_4 = a_1 r^3 \\implies 24 = 3 r^3 \\implies r^3 = 8 \\implies r = 2$. The 5th term is $a_5 = a_1 r^4 = 3 \\times 2^4 = 3 \\times 16 = 48$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 2,
    question: "What is the sum of the first $6$ terms of the geometric sequence $5, 15, 45, 135, \\dots$?",
    options: ["A) 910", "B) 1215", "C) 1820", "D) 3640"],
    correctAnswer: 2,
    explanation: "Here $a_1 = 5$ and $r = \\frac{15}{5} = 3$. Using $S_n = a_1 \\frac{r^n - 1}{r - 1}$, we get $S_6 = 5 \\frac{3^6 - 1}{3 - 1} = 5 \\frac{729 - 1}{2} = 5(364) = 1820$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 3,
    question: "Find the sum of the infinite geometric series $12 + 8 + \\frac{16}{3} + \\frac{32}{9} + \\dots$",
    options: ["A) 24", "B) 32", "C) 36", "D) 48"],
    correctAnswer: 2,
    explanation: "First term $a_1 = 12$ and common ratio $r = \\frac{8}{12} = \\frac{2}{3}$. Since $|r| < 1$, the sum $S_\\infty = \\frac{a_1}{1 - r} = \\frac{12}{1 - 2/3} = \\frac{12}{1/3} = 36$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 4,
    question: "If $x, x+3,$ and $x+9$ are three consecutive terms of a geometric sequence of positive real numbers, what is the value of $x$?",
    options: ["A) 1", "B) 2", "C) 3", "D) 6"],
    correctAnswer: 2,
    explanation: "Since terms are in geometric sequence, $(x+3)^2 = x(x+9) \\implies x^2 + 6x + 9 = x^2 + 9x \\implies 3x = 9 \\implies x = 3$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 5,
    question: "A ball is dropped from a height of $80\\text{ meters}$. Each time it strikes the ground, it bounces back to $60\\%$ ($r = 0.6$) of its previous height. What is the total vertical distance covered by the ball before it comes to rest?",
    options: ["A) 200 meters", "B) 240 meters", "C) 320 meters", "D) 400 meters"],
    correctAnswer: 2,
    explanation: "Total distance $D = h_0 \\cdot \\frac{1 + r}{1 - r} = 80 \\cdot \\frac{1 + 0.6}{1 - 0.6} = 80 \\cdot \\frac{1.6}{0.4} = 80 \\times 4 = 320\\text{ meters}$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 6,
    question: "In a geometric sequence, $a_3 = 18$ and $a_6 = 486$. What is the first term $a_1$?",
    options: ["A) 2", "B) 3", "C) 6", "D) 9"],
    correctAnswer: 0,
    explanation: "\\frac{a_6}{a_3} = r^3 = \\frac{486}{18} = 27 \\implies r = 3. Then $a_3 = a_1 r^2 \\implies 18 = a_1 (9) \\implies a_1 = 2$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 7,
    question: "If $a_1, a_2, a_3, \\dots$ is a geometric sequence with first term $a_1 = 2$ and common ratio $r = 5$, what is the common difference $d$ of the arithmetic sequence formed by $b_n = \\log_5(a_n)$?",
    options: ["A) 1", "B) 2", "C) 5", "D) $\\log_5(2)$"],
    correctAnswer: 0,
    explanation: "$b_n = \\log_5(a_1 r^{n-1}) = \\log_5(2) + (n-1)\\log_5(5) = \\log_5(2) + (n-1)(1)$. The common difference is $d = 1$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 8,
    question: "Find the sum of the infinite alternating geometric series $16 - 8 + 4 - 2 + 1 - \\dots$",
    options: ["A) $\\frac{16}{3}$", "B) $\\frac{32}{3}$", "C) $12$", "D) $32$"],
    correctAnswer: 1,
    explanation: "First term $a_1 = 16$ and common ratio $r = -\\frac{1}{2}$. $S_\\infty = \\frac{16}{1 - (-1/2)} = \\frac{16}{3/2} = \\frac{32}{3}$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 9,
    question: "A geometric sequence is defined recursively by $a_1 = 7$ and $a_n = -2 a_{n-1}$ for $n \\ge 2$. What is the value of $a_7$?",
    options: ["A) -448", "B) 224", "C) 448", "D) 896"],
    correctAnswer: 2,
    explanation: "Explicit formula is $a_n = 7 \\cdot (-2)^{n-1}$. For $n = 7$, $a_7 = 7 \\cdot (-2)^6 = 7 \\cdot 64 = 448$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 10,
    question: "What is the smallest positive integer $n$ such that the sum of the first $n$ terms of the geometric sequence $1, 2, 4, 8, \\dots$ exceeds $1000$?",
    options: ["A) 8", "B) 9", "C) 10", "D) 11"],
    correctAnswer: 2,
    explanation: "$S_n = 1 \\cdot \\frac{2^n - 1}{2 - 1} = 2^n - 1$. We need $2^n - 1 > 1000 \\implies 2^n > 1001$. Since $2^9 = 512$ and $2^{10} = 1024$, the smallest integer is $n = 10$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 11,
    question: String.raw`Consider the following partial table of values for a geometric sequence $g_n$ with positive terms:

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">$n$</th>
      <th class="border border-gray-400 px-2 py-1">$g_n$</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">1</td><td class="border border-gray-400 px-2 py-1">$k$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2</td><td class="border border-gray-400 px-2 py-1 font-bold text-indigo-600">12</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">3</td><td class="border border-gray-400 px-2 py-1">$m$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">4</td><td class="border border-gray-400 px-2 py-1">108</td></tr>
  </tbody>
</table>

What is the value of $k \\cdot m$?`,
    options: ["A) 36", "B) 72", "C) 144", "D) 432"],
    correctAnswer: 2,
    explanation: "Since $g_4 = g_2 \\cdot r^2 \\implies 108 = 12 r^2 \\implies r^2 = 9 \\implies r = 3$. $k = g_1 = 12/3 = 4$, $m = g_3 = 12 \\times 3 = 36$. Thus $k \\cdot m = 4 \\times 36 = 144$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 12,
    question: "The product of the first $5$ terms of a geometric sequence is equal to $32$. What is the value of the 3rd term ($a_3$)?",
    options: ["A) 2", "B) 4", "C) 8", "D) 16"],
    correctAnswer: 0,
    explanation: "Product $= a_1 \\cdot a_2 \\cdot a_3 \\cdot a_4 \\cdot a_5 = (a_3 / r^2)(a_3 / r)(a_3)(a_3 r)(a_3 r^2) = (a_3)^5$. Given $(a_3)^5 = 32 \\implies a_3 = 2$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 13,
    question: "An investment of $\$2,000$ grows at a rate of $8\\%$ compounded annually. If $a_n$ represents the value of the investment at the end of year $n$, which formula correctly models $a_n$ as a geometric sequence?",
    options: ["A) $a_n = 2000(0.08)^n$", "B) $a_n = 2000(1.08)^n$", "C) $a_n = 2160(1.08)^{n-1}$", "D) $a_n = 2000 + 160n$"],
    correctAnswer: 2,
    explanation: "At the end of year 1 ($n=1$), $a_1 = 2000(1.08) = 2160$. The common ratio is $r = 1.08$. Thus $a_n = a_1 r^{n-1} = 2160(1.08)^{n-1}$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 14,
    question: "An infinite geometric series with first term $a_1 = 8$ has a convergent sum of $24$. What is the common ratio $r$?",
    options: ["A) $\\frac{1}{3}$", "B) $\\frac{1}{2}$", "C) $\\frac{2}{3}$", "D) $\\frac{3}{4}$"],
    correctAnswer: 2,
    explanation: "$S_\\infty = \\frac{a_1}{1 - r} \\implies 24 = \\frac{8}{1 - r} \\implies 1 - r = \\frac{8}{24} = \\frac{1}{3} \\implies r = 1 - \\frac{1}{3} = \\frac{2}{3}$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 15,
    question: "If $2, 2x,$ and $8x - 6$ form three consecutive terms of a geometric sequence with common ratio $r > 1$, find the value of $x$.",
    options: ["A) 1", "B) 2", "C) 3", "D) 4"],
    correctAnswer: 2,
    explanation: "$(2x)^2 = 2(8x - 6) \\implies 4x^2 = 16x - 12 \\implies 4x^2 - 16x + 12 = 0 \\implies x^2 - 4x + 3 = 0 \\implies (x-1)(x-3) = 0$. Since $r > 1$, $x = 3$ gives terms $2, 6, 18$ ($r=3$).",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 16,
    question: "In a geometric sequence with common ratio $r > 0$ and $r \\ne 1$, the sum of the first $4$ terms is $5$ times the sum of the first $2$ terms. What is the value of $r$?",
    options: ["A) $\\sqrt{2}$", "B) 2", "C) 3", "D) 4"],
    correctAnswer: 1,
    explanation: "$S_4 = 5 S_2 \\implies a_1 \\frac{r^4 - 1}{r - 1} = 5 a_1 \\frac{r^2 - 1}{r - 1} \\implies r^4 - 1 = 5(r^2 - 1) \\implies (r^2 - 1)(r^2 + 1) = 5(r^2 - 1)$. Since $r \\ne 1$, $r^2 + 1 = 5 \\implies r^2 = 4 \\implies r = 2$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 17,
    question: "Evaluate the infinite sum $\\sum_{n=1}^{\\infty} 5 \\cdot \\left(-\\frac{3}{4}\\right)^{n-1}$.",
    options: ["A) $\\frac{15}{7}$", "B) $\\frac{20}{7}$", "C) $20$", "D) $\\frac{35}{4}$"],
    correctAnswer: 1,
    explanation: "First term $a_1 = 5$, common ratio $r = -\\frac{3}{4}$. $S_\\infty = \\frac{5}{1 - (-3/4)} = \\frac{5}{7/4} = \\frac{20}{7}$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 18,
    question: "Using infinite geometric series, express the repeating decimal $0.272727\\dots = 0.\\overline{27}$ as a simplified fraction.",
    options: ["A) $\\frac{3}{11}$", "B) $\\frac{27}{100}$", "C) $\\frac{9}{33}$", "D) $\\frac{3}{10}$"],
    correctAnswer: 0,
    explanation: "$0.\\overline{27} = \\frac{27}{100} + \\frac{27}{10000} + \\dots$ First term $a_1 = \\frac{27}{100}$, ratio $r = \\frac{1}{100}$. $S_\\infty = \\frac{27/100}{1 - 1/100} = \\frac{27}{99} = \\frac{3}{11}$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 19,
    question: "In the geometric sequence $3, -6, 12, -24, \\dots$, which term number $n$ is equal to $768$?",
    options: ["A) 7", "B) 8", "C) 9", "D) 10"],
    correctAnswer: 2,
    explanation: "$a_1 = 3, r = -2$. $a_n = 3 \\cdot (-2)^{n-1} = 768 \\implies (-2)^{n-1} = 256 = (-2)^8 \\implies n - 1 = 8 \\implies n = 9$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 20,
    question: "In a geometric sequence with positive common ratio $r$, if $a_2 + a_3 = 12$ and $a_4 + a_5 = 48$, what is $r$?",
    options: ["A) 2", "B) 3", "C) 4", "D) 8"],
    correctAnswer: 0,
    explanation: "$a_2 + a_3 = a_1 r (1 + r) = 12$ and $a_4 + a_5 = a_1 r^3 (1 + r) = 48$. Dividing gives $\\frac{a_1 r^3 (1+r)}{a_1 r (1+r)} = \\frac{48}{12} \\implies r^2 = 4 \\implies r = 2$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 21,
    question: "What is the common ratio $r$ of the geometric sequence $2^x, 2^{x+2}, 2^{x+4}, 2^{x+6}, \\dots$?",
    options: ["A) 2", "B) 4", "C) $2^x$", "D) $2^{x+2}$"],
    correctAnswer: 1,
    explanation: "$r = \\frac{a_2}{a_1} = \\frac{2^{x+2}}{2^x} = 2^{(x+2)-x} = 2^2 = 4$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 22,
    question: "Find the sum of the first $8$ terms of the geometric sequence $2, -4, 8, -16, \\dots$",
    options: ["A) -170", "B) -85", "C) 170", "D) 255"],
    correctAnswer: 0,
    explanation: "$a_1 = 2, r = -2$. $S_8 = 2 \\cdot \\frac{1 - (-2)^8}{1 - (-2)} = 2 \\cdot \\frac{1 - 256}{3} = 2 \\cdot \\frac{-255}{3} = 2(-85) = -170$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 23,
    question: "If two geometric means $G_1$ and $G_2$ are inserted between $3$ and $81$, what is the sum $G_1 + G_2$?",
    options: ["A) 30", "B) 36", "C) 42", "D) 54"],
    correctAnswer: 1,
    explanation: "Sequence is $3, G_1, G_2, 81$. $a_4 = 3 r^3 = 81 \\implies r^3 = 27 \\implies r = 3$. Then $G_1 = 3 \\times 3 = 9$ and $G_2 = 9 \\times 3 = 27$. Sum $= 9 + 27 = 36$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 24,
    question: "A radioactive element decays according to a geometric sequence per hour. The initial mass is $160\\text{ grams}$, and after $4$ hours, the remaining mass is $10\\text{ grams}$. What is the remaining mass after $2$ hours?",
    options: ["A) 20 grams", "B) 40 grams", "C) 60 grams", "D) 80 grams"],
    correctAnswer: 1,
    explanation: "Let initial mass $m_0 = 160$. $m_4 = 160 r^4 = 10 \\implies r^4 = \\frac{1}{16} \\implies r = \\frac{1}{2}$. Mass after 2 hours: $m_2 = 160 r^2 = 160 (1/4) = 40\\text{ grams}$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 25,
    question: String.raw`The following table lists the partial sums $S_n$ for the first $n$ terms of a geometric sequence:

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">$n$</th>
      <th class="border border-gray-400 px-2 py-1">$S_n$</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">1</td><td class="border border-gray-400 px-2 py-1">6</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2</td><td class="border border-gray-400 px-2 py-1 font-bold text-indigo-600">18</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">3</td><td class="border border-gray-400 px-2 py-1">42</td></tr>
  </tbody>
</table>

What is the 4th term ($a_4$) of this sequence?`,
    options: ["A) 24", "B) 36", "C) 48", "D) 90"],
    correctAnswer: 2,
    explanation: "$a_1 = S_1 = 6$. $a_2 = S_2 - S_1 = 18 - 6 = 12$. $a_3 = S_3 - S_2 = 42 - 18 = 24$. Common ratio $r = 12/6 = 2$. $a_4 = a_3 \\cdot r = 24 \\cdot 2 = 48$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 26,
    question: "For what range of real values of $x$ does the infinite geometric series $\\sum_{n=0}^{\\infty} (2x - 5)^n$ converge?",
    options: ["A) $2 < x < 3$", "B) $1 < x < 4$", "C) $x > 3$", "D) $-1 < x < 1$"],
    correctAnswer: 0,
    explanation: "Convergence requires $|r| < 1 \\implies |2x - 5| < 1 \\implies -1 < 2x - 5 < 1 \\implies 4 < 2x < 6 \\implies 2 < x < 3$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 27,
    question: "The side length of an initial square is $10\\text{ cm}$. A second square is formed by joining the midpoints of the sides of the first square, and this process is repeated infinitely. What is the sum of the areas of all the squares?",
    options: ["A) 150 sq cm", "B) 200 sq cm", "C) 300 sq cm", "D) 400 sq cm"],
    correctAnswer: 1,
    explanation: "$A_1 = 10^2 = 100\\text{ cm}^2$. Joining midpoints creates a square with half the area of the previous square, so $r = \\frac{1}{2}$. $S_\\infty = \\frac{100}{1 - 1/2} = \\frac{100}{1/2} = 200\\text{ cm}^2$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 28,
    question: "An arithmetic sequence and a geometric sequence both have first term equal to $4$. Their 3rd terms are both equal to $16$. If all terms of the geometric sequence are positive, what is the difference between their 4th terms ($g_4 - a_4$)?",
    options: ["A) 6", "B) 8", "C) 10", "D) 12"],
    correctAnswer: 2,
    explanation: "Arithmetic: $a_1 = 4, a_3 = 4 + 2d = 16 \\implies 2d = 12 \\implies d = 6 \\implies a_4 = 4 + 3(6) = 22$. Geometric: $g_1 = 4, g_3 = 4 r^2 = 16 \\implies r^2 = 4 \\implies r = 2 \\implies g_4 = 4(2)^3 = 32$. Difference $32 - 22 = 10$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 29,
    question: "Given $a_n = 3 \\cdot (0.1)^n$, evaluate the infinite sum $\\sum_{n=1}^{\\infty} a_n$.",
    options: ["A) $\\frac{1}{3}$", "B) $\\frac{3}{10}$", "C) $\\frac{1}{9}$", "D) $3$"],
    correctAnswer: 0,
    explanation: "$a_1 = 3(0.1)^1 = 0.3$. Common ratio $r = 0.1$. $S_\\infty = \\frac{0.3}{1 - 0.1} = \\frac{0.3}{0.9} = \\frac{1}{3}$.",
    category: "ESt2-Geometric Sequence"
  },
  {
    id: 30,
    question: "In a geometric sequence, the 1st term $a_1 = -5$ and the 4th term $a_4 = 40$. Which explicit formula represents the $n^{\\text{th}}$ term $a_n$?",
    options: ["A) $a_n = -5 \\cdot (-2)^{n-1}$", "B) $a_n = -5 \\cdot 2^{n-1}$", "C) $a_n = -5 \\cdot (-8)^{n-1}$", "D) $a_n = -5 + 15(n-1)$"],
    correctAnswer: 0,
    explanation: "$a_4 = a_1 r^3 \\implies 40 = -5 r^3 \\implies r^3 = -8 \\implies r = -2$. Thus $a_n = -5 \\cdot (-2)^{n-1}$.",
    category: "ESt2-Geometric Sequence"
  }
];
