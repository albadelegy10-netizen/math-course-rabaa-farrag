import { Question } from '../../types';

export const EST1_2026_EXPECT_PART1: Question[] = [
  {
    "id": "est1_2026_expect_q1",
    "question": "If $f(x) = 3x - 7$ and $g(x) = -4x + 1$, find the value of $f(g(1))$",
    "options": ["13", "1", "10", "-16"],
    "correctAnswer": 3,
    "explanation": "$g(1) = -4(1) + 1 = -3$. $f(-3) = 3(-3) - 7 = -9 - 7 = -16$."
  },
  {
    "id": "est1_2026_expect_q2",
    "question": "Find the coordinates of vertex of $y = x^2 - 10x + 1$",
    "options": ["(1, 24)", "(5, -24)", "(-5, 24)", "(24, 5)"],
    "correctAnswer": 1,
    "explanation": "The x-coordinate of the vertex is $x = -\\frac{b}{2a} = -\\frac{-10}{2(1)} = 5$. Substitute $x = 5$ into the equation to find y: $y = (5)^2 - 10(5) + 1 = 25 - 50 + 1 = -24$. The vertex is $(5, -24)$."
  },
  {
    "id": "est1_2026_expect_q3",
    "question": "$\\frac{2x - 7}{5} = \\frac{4x^2 + 7}{10x}$\n\nWhat is the value of $x$ in the equation above?",
    "options": ["1.0", "-0.5", "-1.0", "-2.0"],
    "correctAnswer": 1,
    "explanation": "Cross-multiply: $10x(2x - 7) = 5(4x^2 + 7)$. This simplifies to $20x^2 - 70x = 20x^2 + 35$. Subtract $20x^2$ from both sides: $-70x = 35$. Divide by $-70$: $x = -0.5$."
  },
  {
    "id": "est1_2026_expect_q4",
    "question": "$\\sqrt{13 + x} = x + 1$\n\nWhat is the value of $x$?",
    "options": ["0", "-7", "-1", "3"],
    "correctAnswer": 3,
    "explanation": "Square both sides: $13 + x = (x + 1)^2 \\Rightarrow 13 + x = x^2 + 2x + 1$. Rearrange into a quadratic equation: $x^2 + x - 12 = 0$. Factor: $(x + 4)(x - 3) = 0$. So $x = -4$ or $x = 3$. Check for extraneous solutions: If $x = -4$, $\\sqrt{13 - 4} = \\sqrt{9} = 3$, but $x + 1 = -4 + 1 = -3$. Since $3 \\neq -3$, $x = -4$ is extraneous. If $x = 3$, $\\sqrt{13 + 3} = \\sqrt{16} = 4$, and $x + 1 = 3 + 1 = 4$. This works, so $x = 3$."
  },
  {
    "id": "est1_2026_expect_q5",
    "question": "If $4^{2x-5} = 16^{3x}$ find the value of $8x-1$",
    "options": ["1", "-10", "-11", "-5/4"],
    "correctAnswer": 2,
    "explanation": "Rewrite 16 as $4^2$: $4^{2x-5} = (4^2)^{3x} \\Rightarrow 4^{2x-5} = 4^{6x}$. Equate the exponents: $2x - 5 = 6x$. Solve for $x$: $-5 = 4x \\Rightarrow x = -\\frac{5}{4}$. We need to find $8x - 1$: $8(-\\frac{5}{4}) - 1 = -10 - 1 = -11$."
  },
  {
    "id": "est1_2026_expect_q6",
    "question": "What is the value of $x$ if $25^{\\frac{3}{x}} = 125^{\\frac{5}{x} - 4}$",
    "options": ["0.50", "0.75", "1.25", "2.50"],
    "correctAnswer": 1,
    "explanation": "Rewrite bases as powers of 5: $(5^2)^{\\frac{3}{x}} = (5^3)^{\\frac{5}{x} - 4} \\Rightarrow 5^{\\frac{6}{x}} = 5^{\\frac{15}{x} - 12}$. Equate exponents: $\\frac{6}{x} = \\frac{15}{x} - 12$. Multiply by $x$: $6 = 15 - 12x \\Rightarrow 12x = 9 \\Rightarrow x = \\frac{9}{12} = 0.75$."
  },
  {
    "id": "est1_2026_expect_q7",
    "question": "$\\left[ \\frac{(2m^{10}n^{14})^4}{(3m^4n^2)^3} \\right]^5$\n\nWhat is the exponent of $n$ in the simplified form of the expression above?",
    "options": ["140", "250", "300", "350"],
    "correctAnswer": 1,
    "explanation": "Focus only on the $n$ terms. In the numerator: $(n^{14})^4 = n^{56}$. In the denominator: $(n^2)^3 = n^6$. Inside the bracket, we have $\\frac{n^{56}}{n^6} = n^{50}$. Finally, raise to the 5th power: $(n^{50})^5 = n^{250}$."
  },
  {
    "id": "est1_2026_expect_q8",
    "question": "What is the value of $x$ if $4|2x + 1| = 10$ and $x < 0$?",
    "options": ["1.75", "0.75", "-1.75", "-2.0"],
    "correctAnswer": 2,
    "explanation": "Divide by 4: $|2x + 1| = 2.5$. This gives two equations: $2x + 1 = 2.5$ and $2x + 1 = -2.5$. Solving the first: $2x = 1.5 \\Rightarrow x = 0.75$. Solving the second: $2x = -3.5 \\Rightarrow x = -1.75$. Since we are given $x < 0$, the answer is $-1.75$."
  },
  {
    "id": "est1_2026_expect_q9",
    "question": "What is the value of $x$ if $\\frac{3}{x-3} = \\sqrt{3}$?",
    "options": ["$\\sqrt{3}$", "3", "$3 + \\sqrt{3}$", "$\\sqrt{6}$"],
    "correctAnswer": 2,
    "explanation": "Multiply both sides by $x-3$: $3 = \\sqrt{3}(x - 3)$. Divide by $\\sqrt{3}$: $\\frac{3}{\\sqrt{3}} = x - 3$. Rationalize the denominator: $\\frac{3\\sqrt{3}}{3} = \\sqrt{3}$. So, $\\sqrt{3} = x - 3 \\Rightarrow x = 3 + \\sqrt{3}$."
  },
  {
    "id": "est1_2026_expect_q10",
    "question": "Which of the following expressions is equivalent to $\\frac{x^2 + 2x + 4}{x+5}$?",
    "options": ["$x - 4 - \\frac{18}{x-5}$", "$x - 3 - \\frac{19}{x+5}$", "$x - 3 + \\frac{19}{x+5}$", "$x + 3 + \\frac{19}{x+5}$"],
    "correctAnswer": 2,
    "explanation": "Use polynomial long division or synthetic division. Dividing $x^2 + 2x + 4$ by $x + 5$: $x(x+5) = x^2 + 5x$. Subtracting gives $-3x + 4$. Then $-3(x+5) = -3x - 15$. Subtracting gives a remainder of $19$. Thus, the expression is $x - 3 + \\frac{19}{x+5}$."
  },
  {
    "id": "est1_2026_expect_q11",
    "question": "A line passing through a point (-1, 8) and parallel to x-axis. What is this equation?",
    "options": ["x=-y", "y=8x", "x=-1", "y=8"],
    "correctAnswer": 3,
    "explanation": "A line parallel to the x-axis is a horizontal line, which has an equation of the form $y = c$, where $c$ is the y-coordinate of any point on the line. Since the line passes through $(-1, 8)$, the equation is $y = 8$."
  },
  {
    "id": "est1_2026_expect_q12",
    "question": "Use inverse operations to write the inverse of $f(x) = \\frac{x}{4} - 5$.",
    "options": ["$f^{-1}(x) = -5x - 4$", "$f^{-1}(x) = 4x + 5$", "$f^{-1}(x) = \\frac{x}{4} + 5$", "$f^{-1}(x) = 4(x + 5)$"],
    "correctAnswer": 3,
    "explanation": "Let $y = \\frac{x}{4} - 5$. Swap $x$ and $y$: $x = \\frac{y}{4} - 5$. Solve for $y$: $x + 5 = \\frac{y}{4} \\Rightarrow y = 4(x + 5)$. So, $f^{-1}(x) = 4(x + 5)$."
  },
  {
    "id": "est1_2026_expect_q13",
    "question": "The ratio of angles in a quad. is 3:5:3:7, find the value of the largest angle",
    "options": ["140", "120", "100", "80"],
    "correctAnswer": 0,
    "explanation": "The sum of interior angles in a quadrilateral is $360^\\circ$. Let the angles be $3x$, $5x$, $3x$, and $7x$. Their sum is $3x + 5x + 3x + 7x = 18x$. So, $18x = 360 \\Rightarrow x = 20$. The largest angle is $7x = 7(20) = 140^\\circ$."
  },
  {
    "id": "est1_2026_expect_q14",
    "question": "The domain of definition of the function $h(x) = \\frac{6}{\\sqrt{-2x+7}}$ is:",
    "options": ["$(-\\infty, 3.5)$", "$(0, +\\infty)$", "$[3.5, +\\infty)$", "$(3.5, +\\infty)$"],
    "correctAnswer": 0,
    "explanation": "For the function to be defined, the expression inside the square root must be strictly positive (it cannot be zero because it\'s in the denominator). So, $-2x + 7 > 0 \\Rightarrow -2x > -7 \\Rightarrow x < 3.5$. In interval notation, this is $(-\\infty, 3.5)$."
  },
  {
    "id": "est1_2026_expect_q15",
    "question": "If $y = 8x^3 - 2x^2 + 2x$ can be re-written in the form of $ax(dx^2 + bx - c)$, Find the value of a-b+c+d",
    "options": ["-5", "-1", "4", "6"],
    "correctAnswer": 3,
    "explanation": "Factor out the greatest common factor, which is $2x$: $y = 2x(4x^2 - x + 1)$. Comparing this to $ax(dx^2 + bx - c)$, we have $a = 2$, $d = 4$, $b = -1$, and $-c = 1 \\Rightarrow c = -1$. We need to find $a - b + c + d = 2 - (-1) + (-1) + 4 = 2 + 1 - 1 + 4 = 6$."
  },
  {
    "id": "est1_2026_expect_q16",
    "question": "$f(x) = \\frac{2}{x+4} - 1$\n\nThe vertical asymptote of the graph of $f$ is $x = a$, while its horizontal asymptote is $y = b$. What is the value of $|b + a|$?",
    "options": ["1", "3", "4", "5"],
    "correctAnswer": 3,
    "explanation": "The vertical asymptote occurs where the denominator is zero: $x + 4 = 0 \\Rightarrow x = -4$, so $a = -4$. The horizontal asymptote is the value the function approaches as $x \\to \\pm\\infty$, which is $y = -1$, so $b = -1$. The value of $|b + a| = |-1 + (-4)| = |-5| = 5$."
  },
  {
    "id": "est1_2026_expect_q17",
    "question": "The tocktock Price is decreased from 150,000LE to 100,000. What is the net percent change?",
    "options": ["33.3%", "3.3%", "333%", "333.3%"],
    "correctAnswer": 0,
    "explanation": "Percent change is calculated as $\\frac{|\\text{New Value} - \\text{Old Value}|}{\\text{Old Value}} \\times 100\\%$. Here, it\'s $\\frac{|100,000 - 150,000|}{150,000} \\times 100\\% = \\frac{50,000}{150,000} \\times 100\\% = \\frac{1}{3} \\times 100\\% \\approx 33.3\\%$."
  },
  {
    "id": "est1_2026_expect_q18",
    "question": "$2x^3 + 2x^2 + 4x - 8 = (x^2 + bx + 4)(2x - a)$\n\nIn the identity above, true for every real $x$, $a$ and $b$ are two integers. Which of the following expressions has the smallest value?",
    "options": ["$-4a - b$", "$a - 8$", "$2b - 12$", "$b^2 - 8$"],
    "correctAnswer": 0,
    "explanation": "Expand the right side: $(x^2 + bx + 4)(2x - a) = 2x^3 - ax^2 + 2bx^2 - abx + 8x - 4a = 2x^3 + (2b - a)x^2 + (8 - ab)x - 4a$. Compare coefficients with $2x^3 + 2x^2 + 4x - 8$: Constant term: $-4a = -8 \\Rightarrow a = 2$. $x^2$ term: $2b - a = 2 \\Rightarrow 2b - 2 = 2 \\Rightarrow 2b = 4 \\Rightarrow b = 2$. Now evaluate the options: A) $-4(2) - 2 = -10$. B) $2 - 8 = -6$. C) $2(2) - 12 = -8$. D) $2^2 - 8 = -4$. The smallest value is $-10$ (Option A)."
  },
  {
    "id": "est1_2026_expect_q19",
    "question": "$4\\sqrt{x - 4} = x$\n\nWhat is the number of real solutions in the equation above?",
    "options": ["3", "2", "1", "0"],
    "correctAnswer": 2,
    "explanation": "Square both sides: $16(x - 4) = x^2 \\Rightarrow 16x - 64 = x^2$. Rearrange into a quadratic equation: $x^2 - 16x + 64 = 0$. Factor: $(x - 8)^2 = 0$. This gives one real solution, $x = 8$. Check if it\'s extraneous: $4\\sqrt{8 - 4} = 4\\sqrt{4} = 4(2) = 8$, and $x = 8$. It works, so there is 1 real solution."
  },
  {
    "id": "est1_2026_expect_q20",
    "question": "In Turkey, the dollar exchange rate increased from 32.2 TRY in May 2024 to 38.5 TRY in May 2025 due to the recent economic crisis. What was the percentage increase in the value of the dollar in TRY, rounded to the nearest whole percent?",
    "options": ["15%", "19%", "20%", "30%"],
    "correctAnswer": 2,
    "explanation": "Percentage increase is $\\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100\\%$. Here, $\\frac{38.5 - 32.2}{32.2} \\times 100\\% = \\frac{6.3}{32.2} \\times 100\\% \\approx 19.56\\%$. Rounded to the nearest whole percent, this is $20\\%$."
  },
  {
    "id": "est1_2026_expect_q21",
    "question": "If $\\frac{x^2+3x-4}{x^2-4}$ is defined for all of values of x except ?",
    "options": ["-2 only", "$\\pm 2$", "2 only", "$\\pm 4$"],
    "correctAnswer": 1,
    "explanation": "A rational expression is undefined when its denominator is equal to zero. Set the denominator to zero: $x^2 - 4 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$."
  },
  {
    "id": "est1_2026_expect_q22",
    "question": "Consider triangle $ABC$ right-angled at $A$. If $\\sin(C) = \\frac{\\sqrt{2}}{2}$, what is the measure of angle $B$?",
    "options": ["$60^\\circ$", "$45^\\circ$", "$30^\\circ$", "$15^\\circ$"],
    "correctAnswer": 1,
    "explanation": "If $\\sin(C) = \\frac{\\sqrt{2}}{2}$, then angle $C = 45^\\circ$. Since the triangle is right-angled at $A$, angle $A = 90^\\circ$. The sum of angles in a triangle is $180^\\circ$, so angle $B = 180^\\circ - 90^\\circ - 45^\\circ = 45^\\circ$."
  },
  {
    "id": "est1_2026_expect_q23",
    "question": "If the distance between the points $(1, 4)$ and $(10, 4)$ is $\\sqrt{k}$ find k.",
    "options": ["9", "$\\sqrt{81}$", "1", "81"],
    "correctAnswer": 3,
    "explanation": "The distance between $(1, 4)$ and $(10, 4)$ is $|10 - 1| = 9$. We are given that the distance is $\\sqrt{k}$, so $\\sqrt{k} = 9$. Squaring both sides gives $k = 81$."
  },
  {
    "id": "est1_2026_expect_q24",
    "question": "If $f(x) = \\sqrt{x+1}$ and $g(x) = x^2 - 2$. Find $f(g(x))$",
    "options": ["$x^2 + 1$", "$x - 1$", "$\\sqrt{(x-1)(x+1)}$", "$\\sqrt{x^2+1}$"],
    "correctAnswer": 2,
    "explanation": "$f(g(x)) = f(x^2 - 2) = \\sqrt{(x^2 - 2) + 1} = \\sqrt{x^2 - 1}$. This can be factored as $\\sqrt{(x-1)(x+1)}$."
  },
  {
    "id": "est1_2026_expect_q25",
    "question": "Simplify $\\frac{\\sqrt[3]{540x^4y^6z^3}}{\\sqrt[3]{20y}}$",
    "options": ["$3xy^2z\\sqrt[3]{20x}$", "$xz\\sqrt[3]{540y^2x^3}$", "$x^2yz\\sqrt[3]{540y^2}$", "$3x^2y^2z\\sqrt[3]{20x}$"],
    "correctAnswer": 0,
    "explanation": "Factor the expression inside the cube root to find perfect cubes: $540 = 27 \\times 20 = 3^3 \\times 20$. For the variables: $x^4 = x^3 \\cdot x$, $y^6 = (y^2)^3$, and $z^3 = z^3$. So, $\\sqrt[3]{540x^4y^6z^3} = \\sqrt[3]{3^3 \\cdot 20 \\cdot x^3 \\cdot x \\cdot (y^2)^3 \\cdot z^3} = 3xy^2z\\sqrt[3]{20x}$."
  }
];
