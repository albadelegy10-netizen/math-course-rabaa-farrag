import { Question } from '../../types';

export const EST2_2021_OCTOBER: Question[] = [
  {
    id: "est2_2021_oct_q1",
    category: "Arithmetic Sequences",
    question: "How many terms are there in the sequence 4, 8, 12, … 2020?",
    options: ["A) 505", "B) 504", "C) 510", "D) 503", "E) 700"],
    correctAnswer: 0,
    explanation: "This is an arithmetic sequence where the $n$-th term is given by $a_n = 4n$. Setting $4n = 2020$ gives $n = \\frac{2020}{4} = 505$. So there are 505 terms."
  },
  {
    id: "est2_2021_oct_q2",
    category: "Number Theory",
    question: "The sum of two 2-digit numbers is a third 2-digit number. What is the maximum value of the product of these three numbers?",
    options: ["A) 356,000", "B) 238,392", "C) 970,299", "D) 239,580", "E) 242,550"],
    correctAnswer: 4,
    explanation: "Let the two 2-digit numbers be $x$ and $y$, and their sum be $z = x + y \\le 99$. To maximize the product $P = x \\cdot y \\cdot z$, we maximize $z = 99$ and make $x$ and $y$ as close as possible ($x = 49, y = 50$). Thus, $P = 49 \\times 50 \\times 99 = 242,550$."
  },
  {
    id: "est2_2021_oct_q3",
    category: "Sequences",
    question: "$(U_n)$ is a sequence such that $U_0 = 2$ and $U_{n+1} = (U_n - 3)^2$. What is the value of $U_2$?",
    options: ["A) -4", "B) 4", "C) 2", "D) 0", "E) 6"],
    correctAnswer: 1,
    explanation: "$U_1 = (U_0 - 3)^2 = (2 - 3)^2 = (-1)^2 = 1$. Then $U_2 = (U_1 - 3)^2 = (1 - 3)^2 = (-2)^2 = 4$."
  },
  {
    id: "est2_2021_oct_q4",
    category: "Permutations and Combinations",
    question: "The registration plate of a car in a country begins with two letters, from the 26 letters in the English Alphabet, followed by four even digits. Neither the letters nor the digits can be repeated. In a certain city in this country, the first letter of every registration plate must be \"A\", while the last digits cannot be zero. How many possible different registration plates can exist in this city?",
    options: ["A) 1,500", "B) 2,400", "C) 2,496", "D) 13,000", "E) 113,400"],
    correctAnswer: 1,
    explanation: "Letter choices: 1st letter is 'A' (1 choice), 2nd letter is any of remaining 25 (25 choices), so $1 \\times 25 = 25$ letter pairs. Digit choices from $\{0, 2, 4, 6, 8\}$: last digit cannot be 0 (4 choices from $\{2, 4, 6, 8\}$), remaining 3 places take 3 of the remaining 4 even digits ($4 \\times 3 \\times 2 = 24$ choices). Total digit choices = $24 \\times 4 = 96$. Total plates = $25 \\times 96 = 2,400$."
  },
  {
    id: "est2_2021_oct_q5",
    category: "Matrices",
    question: "Consider the two matrices $A_{4 \\times 6}$ and $B_{2 \\times m}$. What should be $m$ so that $B \\cdot A$ is defined?",
    options: ["A) 2", "B) 4", "C) 6", "D) 5", "E) $4 \\times 2$"],
    correctAnswer: 1,
    explanation: "For matrix multiplication $B_{2 \\times m} \\cdot A_{4 \\times 6}$ to be defined, the number of columns of $B$ ($m$) must equal the number of rows of $A$ ($4$). Thus, $m = 4$."
  },
  {
    id: "est2_2021_oct_q6",
    category: "Percentages and Statistics",
    question: "On a science exam of 40 multiple choice questions, Elvis got 80% of the 15 biology questions correct, 60% of the 15 chemistry questions wrong and 20% of the 10 physics questions wrong. Knowing that Elvis answered all the questions, what percentage of all the questions did he get wrong?",
    options: ["A) 35%", "B) 65%", "C) 50%", "D) 72.5%", "E) 54%"],
    correctAnswer: 0,
    explanation: "Biology wrong: $20\\% \\text{ of } 15 = 3$. Chemistry wrong: $60\\% \\text{ of } 15 = 9$. Physics wrong: $20\\% \\text{ of } 10 = 2$. Total wrong = $3 + 9 + 2 = 14$. Percentage wrong = $\\frac{14}{40} = 35\\%$."
  },
  {
    id: "est2_2021_oct_q7",
    category: "Complex Numbers",
    question: "What is the value of $x$ in the equality $2ix(i - 1) = (i - 1)^2 - 2$ knowing that $i = \\sqrt{-1}$?",
    options: ["A) -2", "B) -1", "C) 0", "D) 2", "E) 1"],
    correctAnswer: 4,
    explanation: "RHS: $(i - 1)^2 - 2 = (i^2 - 2i + 1) - 2 = -2i - 2$. LHS: $2ix(i - 1) = 2x(i^2 - i) = -2x - 2xi$. Equating gives $-2x - 2xi = -2 - 2i \\implies x = 1$."
  },
  {
    id: "est2_2021_oct_q8",
    category: "Inequalities",
    question: "If $|x - 2| < 4$, then $|x - 3|$ is less than",
    options: ["A) 4", "B) 2", "C) 3", "D) 5", "E) 0"],
    correctAnswer: 3,
    explanation: "<b>Step 1: Solve the absolute value inequality $|x - 2| < 4$</b><br/>By definition of absolute value inequalities, $|x - 2| < 4 \\implies -4 < x - 2 < 4$.<br/>Add $2$ to all parts of the inequality:<br/>$$-4 + 2 < x < 4 + 2 \\implies -2 < x < 6$$<br/><br/><b>Step 2: Determine the range for $x - 3$</b><br/>Subtract $3$ from all parts of the inequality $-2 < x < 6$:<br/>$$-2 - 3 < x - 3 < 6 - 3 \\implies -5 < x - 3 < 3$$<br/><br/><b>Step 3: Find the maximum bound for $|x - 3|$</b><br/>Since $-5 < x - 3 < 3$, the value of $x - 3$ lies between $-5$ and $3$. The absolute value represents the distance from $0$. The maximum distance occurs as $x - 3$ approaches $-5$, which means $|x - 3| < \\max(|-5|, |3|) = 5$.<br/><br/>Thus, $|x - 3|$ is strictly less than <b>5</b> (Option D)."
  },
  {
    id: "est2_2021_oct_q9",
    category: "Logarithmic Functions",
    question: "A bicycle store finds that $N$, the number of bikes sold, is related to $d$, the number of dollars spent on advertising by the relation $N = 51 + 10\\ln\\left(\\frac{d}{10} + 2\\right)$. If the average profit is $35 per bike, is it worthwhile to spend $1000 on advertising?",
    options: [
      "A) No, because the profit will be less than the amount spent on advertising.",
      "B) No, because the profit will be $97.",
      "C) Yes, because advertisement is important.",
      "D) Yes, because the profit is bigger than $1000.",
      "E) No, because the advertisement amount is big with respect to the product being advertised."
    ],
    correctAnswer: 3,
    explanation: "For $d = 1000$, $N = 51 + 10\\ln(102) \\approx 97.25$ bikes. Total profit from bike sales is $97.25 \\times 35 = $3,403.75$, which is significantly greater than $1000$."
  },
  {
    id: "est2_2021_oct_q10",
    category: "Composite Functions",
    question: `Using the two tables below, what is $(g \\circ f)(-2)$?

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">$x$</th>
      <th class="border border-gray-400 px-2 py-1">$f(x)$</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">-2</td><td class="border border-gray-400 px-2 py-1">-1</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">4</td><td class="border border-gray-400 px-2 py-1">-2</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">5</td><td class="border border-gray-400 px-2 py-1">4</td></tr>
  </tbody>
</table>

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">$x$</th>
      <th class="border border-gray-400 px-2 py-1">$g(x)$</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">5</td><td class="border border-gray-400 px-2 py-1">4</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">-1</td><td class="border border-gray-400 px-2 py-1">2</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">3</td><td class="border border-gray-400 px-2 py-1">6</td></tr>
  </tbody>
</table>`,
    options: ["A) 3", "B) 5", "C) -2", "D) -1", "E) 2"],
    correctAnswer: 4,
    explanation: "From the first table, $f(-2) = -1$. From the second table, $g(-1) = 2$. Therefore, $(g \\circ f)(-2) = g(f(-2)) = g(-1) = 2$."
  },
  {
    id: "est2_2021_oct_q11",
    category: "Exponential Functions",
    question: "The value, in US dollars, of a car is given by $V = \\beta e^{-\\alpha t}$ where $t$ represents the age of the car in years and $\\beta$ and $\\alpha$ are real numbers. The initial price of the car was $8000, and its price after one year becomes $6000. Then the value of $\\alpha$ is:",
    options: ["A) \\ln\\left(\\frac{1}{4}\\right)", "B) \\ln\\left(\\frac{1}{3}\\right)", "C) \\ln\\left(\\frac{2}{3}\\right)", "D) \\ln\\left(\\frac{3}{4}\\right)", "E) \\ln\\left(\\frac{4}{3}\\right)"],
    correctAnswer: 4,
    explanation: "At $t = 0$, $V(0) = \\beta = 8000$. At $t = 1$, $V(1) = 8000 e^{-\\alpha} = 6000 \\implies e^{-\\alpha} = \\frac{3}{4} \\implies e^{\\alpha} = \\frac{4}{3} \\implies \\alpha = \\ln\\left(\\frac{4}{3}\\right)$."
  },
  {
    id: "est2_2021_oct_q12",
    category: "Function Analysis",
    question: "The figure above represents a function $f$ that cuts the x-axis at three points of abscissas $-\\sqrt{3}, 0$ and $\\sqrt{3}$. Consider the following intervals: $I = ]-2, -\\sqrt{3}[$, $K = ]-1, 0[$, $L = ]0, 1[$, $M = ]1, \\sqrt{3}[$ and $N = ]\\sqrt{3}, 2[$. In what interval is the function $f$ considered to be positive and decreasing function?",
    options: ["A) I", "B) K", "C) L", "D) M", "E) N"],
    correctAnswer: 1,
    explanation: "On the interval $K = ]-1, 0[$, $f(x) > 0$ (above x-axis) and the curve goes downward as $x$ increases (decreasing function)."
  },
  {
    id: "est2_2021_oct_q13",
    category: "Polynomials",
    question: "Consider $P(x) = ax^2 + bx + c$ ($a \\neq 0$), a polynomial of second degree in which $P(0) = 1$. If $P(x+1) - P(x) = 4x$, what are the values of $a, b$ and $c$?",
    options: ["A) a = 2, b = 2, c = 0", "B) a = 2, b = 2, c = 1", "C) a = 1, b = 2, c = 1", "D) a = -2, b = -2, c = 1", "E) a = 2, b = -2, c = 1"],
    correctAnswer: 4,
    explanation: "$P(0) = c = 1$. $P(x+1) - P(x) = a(x+1)^2 + b(x+1) + c - (ax^2 + bx + c) = 2ax + a + b = 4x$. Equating coefficients gives $2a = 4 \\implies a = 2$, and $a + b = 0 \\implies b = -2$. So $a = 2, b = -2, c = 1$."
  },
  {
    id: "est2_2021_oct_q14",
    category: "Polynomial Roots",
    question: "If $m$ is a real parameter, what is the number of the real roots of the equation $x(x^2 + 1)(mx^2 - x - 2m) = 0$?",
    options: ["A) 1", "B) 2", "C) 3", "D) 0", "E) 5"],
    correctAnswer: 2,
    explanation: "$x = 0$ provides 1 real root. $x^2 + 1 = 0$ has no real roots. The quadratic $mx^2 - x - 2m = 0$ has discriminant $\\Delta = 1 - 4(m)(-2m) = 1 + 8m^2 > 0$ for all real $m \\neq 0$, giving 2 distinct real roots neither of which is 0. Total number of real roots is 3."
  },
  {
    id: "est2_2021_oct_q15",
    category: "Functions",
    question: "Which of the two relations above is a function and why?",
    options: [
      "A) f because input 4 has two images",
      "B) f because each input has exactly one output",
      "C) h because input -2 has two pre-images",
      "D) f or h because each relation is a function",
      "E) h because each input has only one image"
    ],
    correctAnswer: 1,
    explanation: "A relation is a function if and only if every element in the domain maps to exactly one element in the codomain. Relation $f$ satisfies this, while $h$ maps input 1 to multiple outputs."
  },
  {
    id: "est2_2021_oct_q16",
    category: "Polynomials",
    question: "Consider the functions below:\n$$f(x) = 2x^3 - 4x + 1$$\n$$g(x) = 3x^{0.5} + 3x^{-2} + 3$$\n$$h(x) = -\\sqrt{3}x^2 + 3x$$\n$$k(x) = \\frac{1}{3}x^2 + \\frac{2}{x}$$\nWhich of these functions is a polynomial function?",
    options: ["A) f and g", "B) h and g", "C) f and h", "D) f, h and g", "E) f, g, h and k"],
    correctAnswer: 2,
    explanation: "A polynomial function must have non-negative integer exponents. $f(x)$ and $h(x)$ have valid non-negative integer exponents ($-\\sqrt{3}$ is a valid real coefficient). $g(x)$ and $k(x)$ contain fractional or negative exponents."
  },
  {
    id: "est2_2021_oct_q17",
    category: "Calculus / Function Behavior",
    question: "In the $xy$-plane the function $f$ defined by $f(x) = x^3 + 4x - 5$ admits a graph (C). A computer program generated 5 graphs of which one is correct. The graphs are characterized by:\n- Graph 1: It admits 3 vertices.\n- Graph 2: It admits 2 maxima and 1 minimum.\n- Graph 3: It is strictly decreasing.\n- Graph 4: It is strictly increasing.\n- Graph 5: It is always positive.\nWhich graph is correct?",
    options: ["A) Graph 1", "B) Graph 2", "C) Graph 3", "D) Graph 4", "E) Graph 5"],
    correctAnswer: 3,
    explanation: "The derivative $f'(x) = 3x^2 + 4 > 0$ for all real numbers $x$. Since the first derivative is strictly positive, $f(x)$ is strictly increasing everywhere."
  },
  {
    id: "est2_2021_oct_q18",
    category: "Inverse Functions",
    question: "If $f(x) = \\sqrt[3]{x^3 + 3} + 3$ and $f^{-1}(x) = \\sqrt[3]{-3}$, what is the value of $x$?",
    options: ["A) -3", "B) -2", "C) 0", "D) 3", "E) 2"],
    correctAnswer: 3,
    explanation: "$f^{-1}(x) = \\sqrt[3]{-3} \\implies x = f(\\sqrt[3]{-3}) = \\sqrt[3]{(\\sqrt[3]{-3})^3 + 3} + 3 = \\sqrt[3]{-3 + 3} + 3 = 0 + 3 = 3$."
  },
  {
    id: "est2_2021_oct_q19",
    category: "Algebraic Identities",
    question: "If $x + \\frac{1}{x} = 2$, what is the value of $x^2 + \\frac{1}{x^2}$?",
    options: ["A) 4", "B) 8", "C) 2", "D) 0.5", "E) 16"],
    correctAnswer: 2,
    explanation: "Squaring both sides of $x + \\frac{1}{x} = 2$ gives $(x + \\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2} = 4 \\implies x^2 + \\frac{1}{x^2} = 2$."
  },
  {
    id: "est2_2021_oct_q20",
    category: "Logarithms",
    question: "If $\\log_2 16 = x + y$ and $\\log_x 4 = 2$, then what is $\\log_2 y$?",
    options: ["A) 0", "B) 1", "C) 2", "D) 3", "E) 4"],
    correctAnswer: 1,
    explanation: "$\\log_x 4 = 2 \\implies x^2 = 4 \\implies x = 2$. $\\log_2 16 = 4 \\implies x + y = 4 \\implies 2 + y = 4 \\implies y = 2$. Therefore, $\\log_2 y = \\log_2 2 = 1$."
  },
  {
    id: "est2_2021_oct_q21",
    category: "Trigonometric Functions",
    question: "What is the domain of definition of $\\arcsin(3 - 4x)$?",
    options: ["A) -\\frac{1}{2} \\le x \\le \\frac{1}{2}", "B) -\\frac{1}{2} \\le x \\le 1", "C) \\frac{1}{2} \\le x \\le 1", "D) -1 \\le x \\le -\\frac{1}{2}", "E) -1 \\le x \\le 1"],
    correctAnswer: 2,
    explanation: "The domain of $\\arcsin(u)$ requires $-1 \\le u \\le 1$. Thus, $-1 \\le 3 - 4x \\le 1 \\implies -4 \\le -4x \\le -2 \\implies \\frac{1}{2} \\le x \\le 1$."
  },
  {
    id: "est2_2021_oct_q22",
    category: "Trigonometric Functions",
    question: "What is the parity and periodicity of function $f$ defined by $f(x) = 2 \\sin\\left(\\frac{x}{2}\\right)$?",
    options: ["A) even and period 4\\pi", "B) odd and period 4\\pi", "C) even and period \\pi", "D) odd and period \\pi", "E) odd and period 2\\pi"],
    correctAnswer: 1,
    explanation: "$f(-x) = 2\\sin\\left(\\frac{-x}{2}\\right) = -2\\sin\\left(\\frac{x}{2}\\right) = -f(x)$, so $f$ is odd. The period is $T = \\frac{2\\pi}{1/2} = 4\\pi$."
  },
  {
    id: "est2_2021_oct_q23",
    category: "Inequalities and Logarithms",
    question: "$\\ln(x^2 - 2x + 2) > 0$ is verified in:",
    options: [
      "A) ]-\\infty, +\\infty[",
      "B) ]0, +\\infty[",
      "C) ]0, 1]",
      "D) ]-\\infty, -\\frac{1}{2}[ \\cup ]0, +\\infty[",
      "E) ]-\\infty, 1[ \\cup ]1, +\\infty["
    ],
    correctAnswer: 4,
    explanation: "$\\ln(x^2 - 2x + 2) > 0 \\implies x^2 - 2x + 2 > e^0 = 1 \\implies x^2 - 2x + 1 > 0 \\implies (x - 1)^2 > 0$. This holds true for all real $x \\neq 1$, which is $]-\\infty, 1[ \\cup ]1, +\\infty[$."
  },
  {
    id: "est2_2021_oct_q24",
    category: "Piecewise Functions / Continuity",
    question: "Consider the function:\n$$f(x) = \\begin{cases} -8x - m & \\text{for } x \\le 2 \\\\ 10x - 3 & \\text{for } x > 2 \\end{cases}$$\nFor what value of $m$, if any, is the function $f$ above continuous at $x = 2$?",
    options: ["A) 33", "B) 17", "C) 23", "D) -33", "E) Doesn't exist"],
    correctAnswer: 3,
    explanation: "For continuity at $x = 2$, left-hand limit equals right-hand limit: $-8(2) - m = 10(2) - 3 \\implies -16 - m = 17 \\implies m = -33$."
  },
  {
    id: "est2_2021_oct_q25",
    category: "Algebraic Systems",
    question: "If $x^2 = -2y - 5$ and $z = -8y^3$, what is $x$ in terms of $z$?",
    options: [
      "A) x = \\sqrt{\\sqrt[3]{z} - 5}",
      "B) x = \\pm\\sqrt{\\sqrt[3]{z} - 5}",
      "C) x = \\pm(\\sqrt[3]{z} - 5)",
      "D) x = \\pm\\sqrt{\\sqrt[6]{z} - \\sqrt{5}}",
      "E) x = (\\sqrt[3]{z} - 5)^2"
    ],
    correctAnswer: 1,
    explanation: "$z = -8y^3 \\implies y^3 = -\\frac{z}{8} \\implies y = -\\frac{\\sqrt[3]{z}}{2}$. Substituting into $x^2 = -2y - 5$ gives $x^2 = -2\\left(-\\frac{\\sqrt[3]{z}}{2}\\right) - 5 = \\sqrt[3]{z} - 5 \\implies x = \\pm\\sqrt{\\sqrt[3]{z} - 5}$."
  },
  {
    id: "est2_2021_oct_q26",
    category: "Trigonometry and Geometry",
    question: "Triangle $ABC$ is right angled at $B$ such that $B\\hat{A}C = \\theta$ and $H$ is the foot of the altitude drawn from $B$ to $[AC]$. If $AC = 4$ and $\\theta = 15^\\circ$, then $BH =$ (The figure is not drawn to scale)",
    options: ["A) \\frac{1}{3}", "B) \\frac{1}{2}", "C) 1", "D) \\frac{2}{3}", "E) 2"],
    correctAnswer: 2,
    explanation: "$BC = 4 \\sin 15^\\circ$ and $AB = 4 \\cos 15^\\circ$. The area of $\\triangle ABC$ is $\\frac{1}{2} (4 \\sin 15^\\circ)(4 \\cos 15^\\circ) = 4 \\sin 30^\\circ = 2$. Also, Area $= \\frac{1}{2} \\cdot AC \\cdot BH = 2 BH$. Thus $2 BH = 2 \\implies BH = 1$."
  },
  {
    id: "est2_2021_oct_q27",
    category: "Parallel Lines and Angles",
    question: "In the figure above, $d$ and $d'$ are parallel lines, $\\angle 1 = 93^\\circ$, $\\angle 3 = 107^\\circ$ and $\\angle 2 = 97^\\circ$. What is the measure of angle 4? (The figure is not drawn to scale)",
    options: ["A) 77^\\circ", "B) 63^\\circ", "C) 73^\\circ", "D) 83^\\circ", "E) 67^\\circ"],
    correctAnswer: 1,
    explanation: "For transversals between parallel lines $d$ and $d'$, the exterior/interior angle summation rules give $\\angle 4 = 360^\\circ - (93^\\circ + 97^\\circ + 107^\\circ) = 63^\\circ$."
  },
  {
    id: "est2_2021_oct_q28",
    category: "Trapezoid Geometry",
    question: "In the trapezoid above, $CD = y^2 + 1$, $AB = 3y - 1$ and $EF = 2$. If $E$ and $F$ are the midpoints of $\\overline{AC}$ and $\\overline{BD}$, what is the value of $y$? (The figure is not drawn to scale)",
    options: ["A) -4", "B) 1", "C) 4", "D) 1 or -4", "E) 1 or 4"],
    correctAnswer: 1,
    explanation: "The midsegment $EF = \\frac{AB + CD}{2} \\implies 2 = \\frac{(3y - 1) + (y^2 + 1)}{2} \\implies y^2 + 3y - 4 = 0 \\implies (y + 4)(y - 1) = 0$. Since lengths must be positive, $y = 1$ gives valid positive side lengths."
  },
  {
    id: "est2_2021_oct_q29",
    category: "Triangle Inequality",
    question: "Which of the following numbers 2, 4, 8, 10 and 14 cannot be a value of $n$ in the triangle above with sides 4, 6, and $n-3$? (The figure is not drawn to scale)",
    options: ["A) 14", "B) 2 and 4", "C) 2 and 14", "D) 2, 4 and 14", "E) 8, 10 and 14"],
    correctAnswer: 3,
    explanation: "By the Triangle Inequality, $|6 - 4| < n - 3 < 6 + 4 \\implies 2 < n - 3 < 10 \\implies 5 < n < 13$. Therefore, 2, 4, and 14 lie outside $(5, 13)$ and cannot be values of $n$."
  },
  {
    id: "est2_2021_oct_q30",
    category: "Coordinate Geometry",
    question: "In the $xy$-plane, what quadrant(s) could point A lie in, if its x-coordinate and y-coordinate have opposite signs?",
    options: ["A) Quadrant I", "B) Quadrant II", "C) Quadrants II and III", "D) Quadrants II and IV", "E) Quadrants III and IV"],
    correctAnswer: 3,
    explanation: "Point $A(x, y)$ has opposite signs when $x < 0, y > 0$ (Quadrant II) or $x > 0, y < 0$ (Quadrant IV)."
  },
  {
    id: "est2_2021_oct_q31",
    category: "Quadrilateral Geometry",
    question: "In the quadrilateral ABCD above with $\\angle B = 90^\\circ$, $\\angle C - \\angle D = 60^\\circ$ and $\\angle A - \\angle C - \\angle D = 10^\\circ$. Find $\\angle A, \\angle C$ and $\\angle D$. (The figure is not drawn to scale)",
    options: [
      "A) \\angle A = 140^\\circ ; \\angle C = 95^\\circ ; \\angle D = 35^\\circ",
      "B) \\angle A = 120^\\circ ; \\angle C = 85^\\circ ; \\angle D = 25^\\circ",
      "C) \\angle A = 95^\\circ ; \\angle C = 140^\\circ ; \\angle D = 80^\\circ",
      "D) \\angle A = 120^\\circ ; \\angle C = 115^\\circ ; \\angle D = 35^\\circ",
      "E) \\angle A = 140^\\circ ; \\angle C = 35^\\circ ; \\angle D = 95^\\circ"
    ],
    correctAnswer: 0,
    explanation: "Sum of angles in $ABCD$: $\\angle A + 90^\\circ + \\angle C + \\angle D = 360^\\circ \\implies \\angle A + \\angle C + \\angle D = 270^\\circ$. Given $\\angle A - (\\angle C + \\angle D) = 10^\\circ \\implies 2\\angle A = 280^\\circ \\implies \\angle A = 140^\\circ$. Then $\\angle C + \\angle D = 130^\\circ$. Combining with $\\angle C - \\angle D = 60^\\circ$ gives $2\\angle C = 190^\\circ \\implies \\angle C = 95^\\circ$ and $\\angle D = 35^\\circ$."
  },
  {
    id: "est2_2021_oct_q32",
    category: "Circle Geometry",
    question: "In the figure above, what is the value of $\\frac{x}{2}$?",
    options: ["A) 50^\\circ", "B) 66.25^\\circ", "C) 105^\\circ", "D) 52.5^\\circ", "E) 26.25^\\circ"],
    correctAnswer: 4,
    explanation: "Using circle angle relationships, $2x = 105^\\circ$, so $\\frac{x}{2} = \\frac{105^\\circ}{4} = 26.25^\\circ$."
  },
  {
    id: "est2_2021_oct_q33",
    category: "Area and Circles",
    question: "A circular region centered at F is inscribed in equilateral triangle EFG as shown above. If the area of the triangle EFG is $12\\sqrt{3}$, what is the approximate area of the shaded region?",
    options: ["A) 0.97", "B) 18.85", "C) 6.93", "D) 1.94", "E) 2.17"],
    correctAnswer: 3,
    explanation: "Equilateral triangle area $\\frac{\\sqrt{3}}{4} s^2 = 12\\sqrt{3} \\implies s = 4\\sqrt{3}$. Altitude $r = \\frac{\\sqrt{3}}{2}(4\\sqrt{3}) = 6$. Sector area $= \\frac{60^\\circ}{360^\\circ} \\pi (6^2) = 6\\pi \\approx 18.85$. Shaded area $= 12\\sqrt{3} - 6\\pi \\approx 20.78 - 18.85 = 1.94$."
  },
  {
    id: "est2_2021_oct_q34",
    category: "Parallelogram Geometry",
    question: "In the figure above, M is a point on side $BC$ of parallelogram $ABCD$. What is the measure of $\\angle CAM$? (The figure is not drawn to scale)",
    options: ["A) 16^\\circ", "B) 24^\\circ", "C) 64^\\circ", "D) 104^\\circ", "E) 20^\\circ"],
    correctAnswer: 0,
    explanation: "In $\\triangle ABM$, $AB = BM$ so $\\angle BAM = \\angle AMB = 40^\\circ \\implies \\angle B = 100^\\circ$. In parallelogram $ABCD$, $\\angle A = 80^\\circ$. Angle relationships yield $\\angle CAM = 16^\\circ$."
  },
  {
    id: "est2_2021_oct_q35",
    category: "Polygon Angles",
    question: "What is the measure of $a + b + c + d$ in the figure shown above? (The figure is not drawn to scale)",
    options: ["A) 140^\\circ", "B) 120^\\circ", "C) 160^\\circ", "D) 320^\\circ", "E) Can't be calculated"],
    correctAnswer: 0,
    explanation: "The two triangles share a pair of vertical angles equal to $40^\\circ$. In the top triangle, $a + b + 40^\\circ = 180^\\circ \\implies a + b = 140^\\circ$."
  },
  {
    id: "est2_2021_oct_q36",
    category: "Linear Equations / Parallel Lines",
    question: "Consider the two lines D and L of respective equations $2x - y - 1 = 0$ and $mx + (m - 1)y = 0$ where $m$ is real number. For what value of $m$, line D is parallel to line L?",
    options: ["A) -1", "B) 2", "C) \\frac{3}{2}", "D) \\frac{2}{3}", "E) -2"],
    correctAnswer: 3,
    explanation: "Slope of D is $m_1 = 2$. Slope of L is $m_2 = -\\frac{m}{m - 1}$. Setting $2 = -\\frac{m}{m - 1} \\implies 2m - 2 = -m \\implies 3m = 2 \\implies m = \\frac{2}{3}$."
  },
  {
    id: "est2_2021_oct_q37",
    category: "Circle and Line Intersection",
    question: "In the $xy$-plane, (C) is a circle of center $A(1, 0)$ and radius 2. (d) is the line of equation $x + m = 0$. For what values of $m$ does the line (d) cut circle (C) in two distinct points?",
    options: ["A) m < 2", "B) -1 < m < 3", "C) -3 < m < 1", "D) -2 \\le m \\le 2", "E) m > 3"],
    correctAnswer: 2,
    explanation: "The circle spans $x \\in (1 - 2, 1 + 2) = (-1, 3)$. The vertical line $x = -m$ intersects in 2 points if $-1 < -m < 3 \\implies -3 < m < 1$."
  },
  {
    id: "est2_2021_oct_q38",
    category: "Ellipses",
    question: "Knowing that the area of the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ is $A = \\pi a b$, what is the equation of the ellipse if $a + b = 12$ and $A = 35\\pi$?",
    options: [
      "A) \\frac{x^2}{25} + \\frac{y^2}{49} = 1",
      "B) \\frac{x^2}{8^2} + \\frac{y^2}{4^2} = 1",
      "C) \\frac{x^2}{7^2} + \\frac{y^2}{5^2} = 1",
      "D) \\frac{x^2}{35^2} + \\frac{y^2}{12^2} = 1",
      "E) \\frac{x^2}{7^2} - \\frac{y^2}{5^2} = 1"
    ],
    correctAnswer: 2,
    explanation: "Area $A = \\pi a b = 35\\pi \\implies a b = 35$. Given $a + b = 12$, the semi-axes are $a = 7$ and $b = 5$. The equation is $\\frac{x^2}{7^2} + \\frac{y^2}{5^2} = 1$."
  },
  {
    id: "est2_2021_oct_q39",
    category: "Coordinate Geometry and Angles",
    question: "In the $xy$-plane, consider the points $A(-3, 0)$, $B(3, 5)$ and $C(2, 0)$ as shown in the figure below. What is the approximate measure, in degrees, of the angle $\\theta$?",
    options: ["A) 39^\\circ", "B) 40^\\circ", "C) 62^\\circ", "D) 79^\\circ", "E) 28^\\circ"],
    correctAnswer: 0,
    explanation: "Slope of $AB$ is $\\frac{5}{6} \\implies \\alpha_1 = \\arctan(5/6) \\approx 39.81^\\circ$. Slope of $CB$ is $5 \\implies \\alpha_2 = \\arctan(5) \\approx 78.69^\\circ$. Angle $\\theta = 78.69^\\circ - 39.81^\\circ \\approx 39^\\circ$."
  },
  {
    id: "est2_2021_oct_q40",
    category: "Transformations / Rotations",
    question: "The point $K(1, -3)$ is rotated about the origin through an angle of $90^\\circ$ in an anti-clockwise direction. What are the coordinates of the image of $K$?",
    options: ["A) (-1, -3)", "B) (3, 1)", "C) (-3, -1)", "D) (-3, 1)", "E) (1, 3)"],
    correctAnswer: 1,
    explanation: "Counter-clockwise $90^\\circ$ rotation transforms $(x, y) \\to (-y, x)$. For $K(1, -3)$, $(-(-3), 1) = (3, 1)$."
  },
  {
    id: "est2_2021_oct_q41",
    category: "3D Geometry",
    question: "What is the nature of triangle $ABC$ if $A(2, 3, 1)$, $B(-1, 3, 0)$ and $C(2, 3, -1)$?",
    options: ["A) Isosceles", "B) Right", "C) Right isosceles", "D) Equilateral", "E) Scalene"],
    correctAnswer: 0,
    explanation: "$AB^2 = (-3)^2 + 0^2 + (-1)^2 = 10$. $BC^2 = 3^2 + 0^2 + (-1)^2 = 10$. $AC^2 = 0^2 + 0^2 + (-2)^2 = 4$. Since $AB = BC = \\sqrt{10} \\neq AC$, $\\triangle ABC$ is isosceles."
  },
  {
    id: "est2_2021_oct_q42",
    category: "3D Geometry and Sphere Volume",
    question: "A hollow cube of internal edge 20 cm is filled with identical spherical marbles of diameter 0.6 cm each, and it is assumed that $\\frac{1}{8}\\text{th}$ space of the cube remains unfilled. What is the number of marbles, rounded to the nearest integer, that the cube can accommodate?",
    options: ["A) 70,000", "B) 61,894", "C) 70,736", "D) 7,737", "E) 65,235"],
    correctAnswer: 1,
    explanation: "Cube volume $= 20^3 = 8000\\text{ cm}^3$. Filled volume $= 8000 \\times \\frac{7}{8} = 7000\\text{ cm}^3$. Marble volume $V = \\frac{4}{3}\\pi (0.3)^3 = 0.036\\pi \\approx 0.1131\\text{ cm}^3$. Number of marbles $= \\frac{7000}{0.036\\pi} \\approx 61,894$."
  },
  {
    id: "est2_2021_oct_q43",
    category: "Trigonometric Identities",
    question: "Triangle $ABC$ is right at $C$. If $BC = x$, $AC = 2x$ where $x$ is a positive real number and angle $B\\hat{A}C = \\theta$, then $\\sin 2\\theta =$",
    options: ["A) \\frac{1}{5}", "B) \\frac{2}{5}", "C) \\frac{3}{5}", "D) \\frac{4}{5}", "E) 1"],
    correctAnswer: 3,
    explanation: "Hypotenuse $AB = x\\sqrt{5}$. $\\sin\\theta = \\frac{1}{\\sqrt{5}}$ and $\\cos\\theta = \\frac{2}{\\sqrt{5}}$. Double angle formula: $\\sin 2\\theta = 2 \\sin\\theta \\cos\\theta = 2 \\left(\\frac{1}{\\sqrt{5}}\\right) \\left(\\frac{2}{\\sqrt{5}}\\right) = \\frac{4}{5}$."
  },
  {
    id: "est2_2021_oct_q44",
    category: "Trigonometry",
    question: "Which could be a value of $\\sin \\theta$ if $\\frac{7\\pi}{4} < \\theta < 2\\pi$?",
    options: ["A) -\\frac{4}{5}", "B) -1", "C) -\\frac{1}{2}", "D) \\frac{1}{4}", "E) \\frac{1}{2}"],
    correctAnswer: 2,
    explanation: "For $\\theta \\in (\\frac{7\\pi}{4}, 2\\pi) = (315^\\circ, 360^\\circ)$, $\\sin\\theta$ lies in $(-\\frac{\\sqrt{2}}{2}, 0) \\approx (-0.707, 0)$. Among the choices, $-\\frac{1}{2} = -0.5$ is the only value in this interval."
  },
  {
    id: "est2_2021_oct_q45",
    category: "Trigonometry",
    question: "If $\\cos\\left(\\frac{\\pi}{2} - \\theta\\right) = \\frac{2}{\\sqrt{3}}$, then what is the value of $\\frac{\\sin \\theta}{\\csc \\theta}$?",
    options: ["A) \\frac{2}{\\sqrt{3}}", "B) 1", "C) \\frac{4}{3}", "D) \\frac{\\sqrt{3}}{2}", "E) \\frac{3}{4}"],
    correctAnswer: 2,
    explanation: "$\\cos\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sin\\theta = \\frac{2}{\\sqrt{3}}$. Then $\\frac{\\sin\\theta}{\\csc\\theta} = \\sin^2\\theta = \\left(\\frac{2}{\\sqrt{3}}\\right)^2 = \\frac{4}{3}$."
  },
  {
    id: "est2_2021_oct_q46",
    category: "Statistics / Normal Distribution",
    question: "If the mean of a normal distribution is 55 and the standard deviation is 5, then almost all of the scores are likely to fall between:",
    options: ["A) 40 and 70", "B) 50 and 60", "C) 30 and 55", "D) 55 and 80", "E) 60 and 90"],
    correctAnswer: 0,
    explanation: "By the $68-95-99.7\\%$ empirical rule, $99.7\\%$ (almost all) of the scores fall within 3 standard deviations of the mean: $55 \\pm 3(5) = [40, 70]$."
  },
  {
    id: "est2_2021_oct_q47",
    category: "Probability",
    question: "A survey is done in an enterprise having 20% administrators and 80% employees. We know that 5% of the administrators and 20% of the employees speak Spanish. A person is chosen randomly from the enterprise, what is the probability that he/she speaks Spanish?",
    options: ["A) 0.26", "B) 0.17", "C) 0.25", "D) 0.08", "E) 0.48"],
    correctAnswer: 1,
    explanation: "$P(\\text{Spanish}) = (0.20)(0.05) + (0.80)(0.20) = 0.01 + 0.16 = 0.17$."
  },
  {
    id: "est2_2021_oct_q48",
    category: "Combinatorics and Probability",
    question: "A box contains 24 marbles of red, green and yellow colors. If two marbles are drawn randomly and simultaneously from the box, the probability that both are red is $\\frac{15}{92}$. What is the number of the non-red marbles?",
    options: ["A) 10", "B) 16", "C) 14", "D) 20", "E) 18"],
    correctAnswer: 2,
    explanation: "$\\binom{24}{2} = 276$. $\\binom{R}{2} = 276 \\times \\frac{15}{92} = 45 \\implies \\frac{R(R-1)}{2} = 45 \\implies R = 10$ red marbles. Number of non-red marbles is $24 - 10 = 14$."
  },
  {
    id: "est2_2021_oct_q49",
    category: "Statistics",
    question: "Which of the numbers below is not the mean, median, mode or range of the data set 5, 2, 4, 5, 10, 16, 12, 18, 15, 13?",
    options: ["A) 10", "B) 11", "C) 5", "D) 8", "E) 16"],
    correctAnswer: 3,
    explanation: "Sorted data: 2, 4, 5, 5, 10, 12, 13, 15, 16, 18. Mode = 5, Range = $18 - 2 = 16$, Median = $\\frac{10 + 12}{2} = 11$, Mean = $\\frac{100}{10} = 10$. The number 8 is none of these statistics."
  },
  {
    id: "est2_2021_oct_q50",
    category: "Statistics and Linear Regression",
    question: "A regression analysis between sales ($Y$) and advertising ($X$) across all the branches in Egypt of a major company resulted in the following equation $Y = 40,000 + 6.25 X$. If the advertising budgets of the two branches in Giza and Alexandria differ by 200,000 EGP, then what will be the predicted difference in their sales?",
    options: ["A) 12.5 EGP", "B) 80,000 EGP", "C) 160,000 EGP", "D) 250,000 EGP", "E) 1,250,000 EGP"],
    correctAnswer: 4,
    explanation: "Predicted difference $\\Delta Y = 6.25 \\times \\Delta X = 6.25 \\times 200,000 = 1,250,000\\text{ EGP}$."
  }
];

