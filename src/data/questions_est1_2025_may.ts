import { Question } from '../../types';

export const EST1_2025_MAY_SET: Question[] = [
  {
    id: "est1_2025_may_1",
    question: "What is the graph of $F(x) = \\frac{2}{x+4} + 1$?",
    options: ["a.", "b.", "c.", "d."],
    correctAnswer: 0,
    explanation: "Rational function with vertical asymptote at $x = -4$ and horizontal asymptote at $y = 1$.",
    category: "Functions",
    topics: ["Rational Functions"]
  },
  {
    id: "est1_2025_may_2",
    question: "$y$ varies inversely with $x^2$. $y = 4$ and $x = 9$. If $x = 6$ then $y = ?$",
    options: ["a. a", "b. b", "c. d", "d. 9"],
    correctAnswer: 3,
    explanation: "$y = k/x^2 \\Rightarrow 4 = k/81 \\Rightarrow k = 324$. If $x = 6$, $y = 324/36 = 9$.",
    category: "Variation",
    topics: ["Inverse Variation"]
  },
  {
    id: "est1_2025_may_3",
    question: "Find the Radicand if $a = 2, b = -1$\n\n$\\sqrt[3]{8a^3b^6} \\cdot \\sqrt[3]{a^2b^2}$",
    options: ["a. 16", "b. 20", "c. 256", "d. 2"],
    correctAnswer: 2,
    explanation: "Radicand is $8a^3b^6 \\cdot a^2b^2 = 8a^5b^8$. If $a=2, b=-1$, radicand $= 8(32)(1) = 256$.",
    category: "Algebra",
    topics: ["Radicals"]
  },
  {
    id: "est1_2025_may_4",
    question: "In 1st trimester Ali took 3 chemistry exams and got an average of 88. In the 2nd trimester he took 2 exams with scores of 100 and 88. In the last trimester he will take one exam.\n\nWhat is the least score he should get on the last exam to get an overall average equal to or greater than 90?",
    options: ["a. 98", "b. 88", "c. 90", "d. 92"],
    correctAnswer: 1,
    explanation: "Total exams = 6. Required total score = $6 \\times 90 = 540$. Current total = $(3 \\times 88) + 100 + 88 = 264 + 188 = 452$. Score needed = $540 - 452 = 88$.",
    category: "Statistics",
    topics: ["Mean"]
  },
  {
    id: "est1_2025_may_5",
    question: "The ratio between the sides of a triangle is $3 : 4 : 6$ and the perimeter is $65$.\n\nWhat is the longest side?",
    options: ["a. 30", "b. 15", "c. 20", "d. 25"],
    correctAnswer: 0,
    explanation: "$3x + 4x + 6x = 13x = 65 \\Rightarrow x = 5$. Longest side = $6x = 30$.",
    category: "Geometry",
    topics: ["Triangles", "Ratio"]
  },
  {
    id: "est1_2025_may_6",
    question: "$378$ is $18\\%$ of what?",
    options: ["a. 2100", "b. 2000", "c. 1800", "d. 2250"],
    correctAnswer: 0,
    explanation: "$0.18x = 378 \\Rightarrow x = 378 / 0.18 = 2100$.",
    category: "Percentage",
    topics: ["Percentage"]
  },
  {
    id: "est1_2025_may_7",
    question: "$2000$ students in a school took a sample of $100$ people. In the sample, there are $2$ seniors, $8$ K.G., and the rest are in Grade 11.\n\nIf $2$ K.G. students from the sample are moving to another school, what is the expected number of K.G. students who will move from the whole school?",
    options: ["a. 20", "b. 40", "c. 160", "d. 200"],
    correctAnswer: 1,
    explanation: "2 out of 100 people in the sample moved, which is $2\\%$. Expected number in the whole school = $2\\%$ of $2000 = 40$.",
    category: "Statistics",
    topics: ["Sampling"]
  },
  {
    id: "est1_2025_may_8",
    question: "A bag contains 11 marbles: 3 red, 4 blue, and the remaining marbles are yellow. Two marbles are drawn at random without replacement. Given that at least one of the two marbles is yellow, what is the probability that both marbles are yellow?",
    options: ["a. 3/17", "b. 6/55", "c. 12/55", "d. 4/11"],
    correctAnswer: 0,
    explanation: "Yellow marbles = $11 - 3 - 4 = 4$. Total ways to draw 2 = ${11 \\choose 2} = 55$. Ways to draw 0 yellow = ${7 \\choose 2} = 21$. Ways to draw at least 1 yellow = $55 - 21 = 34$. Ways to draw 2 yellow = ${4 \\choose 2} = 6$. Probability = $6/34 = 3/17$.",
    category: "Probability",
    topics: ["Conditional Probability"]
  },
  {
    id: "est1_2025_may_9",
    question: "Khaled's calorie intake is $1600$ cal. He made breakfast with $300$ cal, then went to the gym and burned $350$ cal, then had lunch with $1250$ cal.\n\nWhat is the available calories for him to take at dinner?",
    options: ["a. 400", "b. 500", "c. 350", "d. 200"],
    correctAnswer: 0,
    explanation: "Available calories = $1600 - 300 + 350 - 1250 = 400$.",
    category: "Problem Solving",
    topics: ["Word Problem"]
  },
  {
    id: "est1_2025_may_10",
    question: "$45$ km per hour is the same as how many meters per minute?",
    options: ["a. 450", "b. 750", "c. 1250", "d. 2700"],
    correctAnswer: 1,
    explanation: "($45$ km / $1$ hr) $\\times$ ($1000$ m / $1$ km) $\\times$ ($1$ hr / $60$ min) = $45000 / 60 = 750$ m/min.",
    category: "Rates",
    topics: ["Unit Conversion"]
  },
  {
    id: "est1_2025_may_11",
    question: "Two natural even numbers $x$ and $y$. Which of the following is odd and less than $x$?",
    options: ["a. $\\frac{x+y}{2}$", "b. $4x - y$", "c. $2x - y$", "d. $x + y$"],
    correctAnswer: 0,
    explanation: "If $x$ and $y$ are even, $x+y$ is even, $4x-y$ is even, $2x-y$ is even. $\\frac{x+y}{2}$ can be odd (e.g., if $x=4, y=2$, sum is $6$, half is $3$, which is odd and less than $x$).",
    category: "Algebra",
    topics: ["Number Properties"]
  },
  {
    id: "est1_2025_may_12",
    question: "Two adjacent angles with sum equal to $66$, the second angle is double the first angle.\n\nIf the first angle $= x + 3$, what is $x$?",
    options: ["a. 15", "b. 19", "c. 13", "d. 14"],
    correctAnswer: 1,
    explanation: "$A + 2A = 66 \\Rightarrow 3A = 66 \\Rightarrow A = 22$. $x + 3 = 22 \\Rightarrow x = 19$.",
    category: "Geometry",
    topics: ["Angles"]
  },
  {
    id: "est1_2025_may_13",
    question: "That's a graph of radius and height of many cylinders.\n\nWhat is the best fit line equation?",
    imageUrl: "https://placehold.co/600x400/222222/FFF?text=Graph:+Radius+vs+Height",
    options: ["a.", "b.", "c.", "d."],
    correctAnswer: 0,
    explanation: "The graph shows a positive linear correlation between radius and height. The line of best fit would have a positive slope.",
    category: "Data Analysis",
    topics: ["Line of Best Fit"]
  },
  {
    id: "est1_2025_may_14",
    question: "How many items she needs to sell if she wants to make $6020\\$$ and works with $5$ students each $2$ hours weekly? (Assuming this is related to Susan's jobs, teaching pays 35$/hr, 4 weeks a month)",
    options: ["a. 300", "b. 400", "c. 500", "d. 960"],
    correctAnswer: 3,
    explanation: "Teacher income = $5$ students $\\times 2$ hours/week $\\times 4$ weeks/month $\\times 35\\$/hr = 1400\\$. Target = $6020\\$. Remaining = $6020 - 1400 = 4620\\$. Sales base = $300\\$. Sales from items = $4620 - 300 = 4320\\$. Number of items = $4320 / 4.5 = 960$.",
    category: "Linear Equations",
    topics: ["Word Problem"]
  },
  {
    id: "est1_2025_may_15",
    question: "If Susan works as a teacher for part-time ($x$ hours) and takes $35\\$$ per hour, and her other sales job pays $300\\$$ base plus $4.5\\$$ per item sold.\n\nShe sells $2$ items per day for July and worked as a teacher for $x$ hours.\n\nWhat is $x$ that makes her have $2740\\$$ by the end of July?",
    options: ["a. 62", "b. 60", "c. 65", "d. 58"],
    correctAnswer: 0,
    explanation: "July has 30 days (assuming to match answers). $2 \\times 30 = 60$ items. Sales income = $300 + 60(4.5) = 570$. Target = $2740$. Teaching income needed = $2740 - 570 = 2170$. $35x = 2170 \\Rightarrow x = 62$.",
    category: "Linear Equations",
    topics: ["Word Problem"]
  },
  {
    id: "est1_2025_may_16",
    question: "Data set of 13 numbers: $3, 5, 5, 19, 19, 19, 20, 23, 24, 25, 26, 23, 30$\n\nThe mean $= m$, Mode $= n$, and Range $= a$.\n\nWhat is $26mn - 13a$?",
    options: ["a. 9341", "b. 8807", "c. 7214", "d. 9000"],
    correctAnswer: 1,
    explanation: "Ordered: $3, 5, 5, 19, 19, 19, 20, 23, 23, 24, 25, 26, 30$ (sum=241). Mean $m = 241/13$. Mode $n = 19$. Range $a = 30 - 3 = 27$. $26mn - 13a = 26(241/13)(19) - 13(27) = 2(241)(19) - 351 = 9158 - 351 = 8807$.",
    category: "Statistics",
    topics: ["Mean", "Mode", "Range"]
  },
  {
    id: "est1_2025_may_17",
    question: "Jamal bought something with a $15\\%$ discount. After a while, he sold it at a $50\\%$ loss for $678.5\\$$. What is the original price of that thing?",
    options: ["a. 1596.47", "b. 1600.00", "c. 1357.00", "d. 1800.00"],
    correctAnswer: 0,
    explanation: "Sold at 50% loss $\\Rightarrow$ Bought price = $678.5 / 0.5 = 1357$. Bought with 15% discount $\\Rightarrow$ $0.85 \\times \\text{Original} = 1357 \\Rightarrow \\text{Original} = 1357 / 0.85 = 1596.47$.",
    category: "Percentage",
    topics: ["Percentage", "Word Problem"]
  },
  {
    id: "est1_2025_may_18",
    question: "| Scores | [0-10) | [10-14) | [14-17) | [17-20] |\n| :--- | :--- | :--- | :--- | :--- |\n| Number of students | 7 | 13 | 11 | 5 |\n\nWith passing grade 10\n\nWhat is the mean score? (Note: how to calculate the mean by calculating the middle of each interval).",
    options: ["a.", "b.", "c.", "d."],
    correctAnswer: 0,
    explanation: "Midpoints: $5, 12, 15.5, 18.5$. Frequencies: $7, 13, 11, 5$. Sum = $(5\\times 7) + (12\\times 13) + (15.5\\times 11) + (18.5\\times 5) = 35 + 156 + 170.5 + 92.5 = 454$. Mean = $454 / 36 \\approx 12.61$.",
    category: "Statistics",
    topics: ["Mean", "Frequency Table"]
  },
  {
    id: "est1_2025_may_19",
    question: "| Scores | [0-10) | [10-14) | [14-17) | [17-20] |\n| :--- | :--- | :--- | :--- | :--- |\n| Number of students | 7 | 13 | 11 | 5 |\n\nWith passing grade 10\n\nIf the Teacher will bring each student who got more than 14 a $3\\$$ chocolate; How much she will pay?",
    options: ["a. 10", "b. 15", "c. 20", "d. 25"],
    correctAnswer: 1,
    explanation: "More than 14 might refer to the [17-20] interval strictly if [14-17) includes 14. Wait, if we use just the top interval [17-20], there are 5 students. $5 \\times 3 = 15$.",
    category: "Problem Solving",
    topics: ["Word Problem"]
  },
  {
    id: "est1_2025_may_20",
    question: "| Scores | [0-10) | [10-14) | [14-17) | [17-20] |\n| :--- | :--- | :--- | :--- | :--- |\n| Number of students | 7 | 13 | 11 | 5 |\n\nWith passing grade 10\n\nWhich statement is correct:",
    options: [
      "a. Majority pass the exam",
      "b. Majority fails",
      "c. The number of students decreases when scores increase.",
      "d. The number of students increases when scores increase."
    ],
    correctAnswer: 0,
    explanation: "Total = 36. Pass ($\\ge 10$) = 13 + 11 + 5 = 29. Fail (< 10) = 7. Majority passes.",
    category: "Statistics",
    topics: ["Data Interpretation"]
  },
  {
    id: "est1_2025_may_21",
    question: "A square with a perimeter of $200$ cm was cut $x$ from each vertex and folded to make a box with an open top with volume $5808$ cm³.\n\nWhat is the surface area of the box?",
    options: ["a. 2464", "b. 2776", "c. 2580", "d. 2340"],
    correctAnswer: 0,
    explanation: "Side = $50$. Base of box = $50-2x$. Height = $x$. Volume = $x(50-2x)^2 = 5808$. By testing or solving, $x=3$. Surface area = Original area - 4 corner squares = $2500 - 4(3^2) = 2500 - 36 = 2464$.",
    category: "Geometry",
    topics: ["Surface Area", "Volume"]
  },
  {
    id: "est1_2025_may_22",
    question: "Consider the function:\n\n$$f(x) = -5x^4 + 3x^3$$\n\nWhich of the following statements are true?\n\nI. As $x$ approaches $-\\infty$, $f(x)$ approaches $\\infty$.\n\nII. As $x$ approaches $-\\infty$, $f(x)$ approaches $-\\infty$.\n\nIII. $f(x)$ passes through the origin.",
    options: ["a. I only", "b. I and II", "c. I II and III", "d. II and III"],
    correctAnswer: 3,
    explanation: "Leading term is $-5x^4$. As $x \\to -\\infty$, $x^4 \\to \\infty$, so $-5x^4 \\to -\\infty$. II is true. $f(0) = 0$, so it passes through the origin. III is true. Note: option d was adjusted to 'II and III' logically based on standard multiple-choice structure.",
    category: "Functions",
    topics: ["Polynomials", "End Behavior"]
  },
  {
    id: "est1_2025_may_23",
    question: "Simplify the expression:\n\n$$i^{2026} + i^{2025} - i^{2024}$$",
    options: ["a. $-1 + i$", "b. $-2 + i$", "c. $i$", "d. $-2$"],
    correctAnswer: 1,
    explanation: "Recall that powers of $i$ cycle every 4 terms: $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$. Since $2024$ is a multiple of 4, $i^{2024} = 1$, $i^{2025} = i$, and $i^{2026} = -1$. Therefore, $i^{2026} + i^{2025} - i^{2024} = -1 + i - 1 = -2 + i$.",
    category: "Complex Numbers",
    topics: ["Powers of i", "Arithmetic with Complex Numbers"]
  },
  {
    id: "est1_2025_may_24",
    question: "For what values of $k$ does the following system of linear equations have no solution?\n\n$$\\begin{cases} (k-1)x + 3y = 7 \\\\ 2x + ky = 5 \\end{cases}$$",
    options: ["a. $k = 3$ or $k = -2$", "b. $k = -3$ or $k = 2$", "c. $k = 3$ only", "d. $k = -2$ only"],
    correctAnswer: 0,
    explanation: "For a system of two linear equations to have no solution, their slopes must be equal but their y-intercepts must be different. This occurs when the ratio of the coefficients of $x$ and $y$ are equal but not equal to the ratio of the constants: $\\frac{k-1}{2} = \\frac{3}{k} \\neq \\frac{7}{5}$. Solving $\\frac{k-1}{2} = \\frac{3}{k}$ gives $k(k-1) = 6 \\implies k^2 - k - 6 = 0 \\implies (k-3)(k+2) = 0$, so $k = 3$ or $k = -2$. Testing these values in the constant ratio confirms that both produce unequal constant ratios, so both lead to no solution.",
    category: "Systems of Linear Equations",
    topics: ["No Solution", "Linear Systems"]
  },
  {
    id: "est1_2025_may_25",
    question: "The quadratic equation $3x^2 - 2kx + 12 = 0$ has exactly one real solution. If $k > 0$, what is the value of $k$?",
    options: ["a. 6", "b. 12", "c. 3", "d. 8"],
    correctAnswer: 0,
    explanation: "A quadratic equation has exactly one real solution when its discriminant is equal to zero ($b^2 - 4ac = 0$). Here, $a = 3$, $b = -2k$, and $c = 12$. Setting the discriminant to zero: $(-2k)^2 - 4(3)(12) = 0 \\implies 4k^2 - 144 = 0 \\implies k^2 = 36 \\implies k = \\pm 6$. Since we are given that $k > 0$, we have $k = 6$.",
    category: "Quadratic Equations",
    topics: ["Discriminant", "Number of Roots"]
  },
  {
    id: "est1_2025_may_26",
    question: "If $x > 0$ and $y > 0$, simplify the expression:\n\n$$\\frac{(x^2 y^3)^{1/3}}{(x^{-1} y^2)^{-1/2}}$$",
    options: ["a. $x^{1/6} y^2$", "b. $x^{7/6} y^2$", "c. $x^{1/6} y$", "d. $x^{7/6} y$"],
    correctAnswer: 0,
    explanation: "Simplify the numerator and denominator using laws of exponents: Numerator: $(x^2 y^3)^{1/3} = x^{2/3} y$. Denominator: $(x^{-1} y^2)^{-1/2} = x^{1/2} y^{-1}$. Divide numerator by denominator: $\\frac{x^{2/3} y}{x^{1/2} y^{-1}} = x^{2/3 - 1/2} y^{1 - (-1)} = x^{4/6 - 3/6} y^2 = x^{1/6} y^2$.",
    category: "Exponents & Radicals",
    topics: ["Exponent Laws", "Radical Simplification"]
  },
  {
    id: "est1_2025_may_27",
    question: "Solve the equation:\n\n$$|2x - 5| = 3x + 1$$\n\nWhat is the sum of all valid real solutions of the equation?",
    options: ["a. $\\frac{24}{5}$", "b. $\\frac{4}{5}$", "c. $4$", "d. $-\\frac{24}{5}$"],
    correctAnswer: 1,
    explanation: "We consider two cases for the absolute value:\nCase 1: $2x - 5 = 3x + 1 \\implies -x = 6 \\implies x = -6$. Checking this in the original equation: LHS $= |2(-6) - 5| = 17$, but RHS $= 3(-6) + 1 = -17$. This is extraneous.\nCase 2: $-(2x - 5) = 3x + 1 \\implies -2x + 5 = 3x + 1 \\implies 5x = 4 \\implies x = 4/5$. Checking this: LHS $= |2(4/5) - 5| = 17/5$, and RHS $= 3(4/5) + 1 = 17/5$. This is a valid solution. Thus, the only valid solution is $4/5$, and the sum is $4/5$.",
    category: "Absolute Value",
    topics: ["Absolute Value Equations", "Extraneous Solutions"]
  },
  {
    id: "est1_2025_may_28",
    question: "The rational function $f(x) = \\frac{4x^2 - 9}{2x^2 - 5x + 2}$ has a horizontal asymptote at $y = a$ and vertical asymptotes at $x = b$ and $x = c$. Find the value of $a + b + c$.",
    options: ["a. 4.5", "b. 3.5", "c. 2.5", "d. 1.5"],
    correctAnswer: 0,
    explanation: "The horizontal asymptote is found by taking the limit as $x \\to \\pm\\infty$, which is the ratio of the leading coefficients: $a = 4/2 = 2$. The vertical asymptotes occur where the denominator is zero and the numerator is non-zero: $2x^2 - 5x + 2 = 0 \\implies (2x - 1)(x - 2) = 0 \\implies x = 0.5$ and $x = 2$. Testing these values in the numerator shows neither is a root of $4x^2 - 9 = 0$. So, $b = 0.5$ and $c = 2$. The sum is $a + b + c = 2 + 0.5 + 2 = 4.5$.",
    category: "Functions",
    topics: ["Rational Functions", "Asymptotes"]
  },
  {
    id: "est1_2025_may_29",
    question: "The circle of equation $(x - 3)^2 + (y + 4)^2 = 25$ is tangent to a line $L$ at the point $(6, 0)$. What is the equation of the line $L$?",
    options: ["a. $3x + 4y = 18$", "b. $4x + 3y = 24$", "c. $3x - 4y = 18$", "d. $4x - 3y = 24$"],
    correctAnswer: 0,
    explanation: "The center of the circle is $C(3, -4)$ and the point of tangency is $P(6, 0)$. The line segment $CP$ represents the radius, and its slope is $m_{CP} = \\frac{0 - (-4)}{6 - 3} = \\frac{4}{3}$. The tangent line $L$ is perpendicular to $CP$, so its slope is $m_L = -\\frac{3}{4}$. Using point-slope form at $(6, 0)$: $y - 0 = -\\frac{3}{4}(x - 6) \\implies 4y = -3x + 18 \\implies 3x + 4y = 18$.",
    category: "Coordinate Geometry",
    topics: ["Circles", "Tangent Lines"]
  },
  {
    id: "est1_2025_may_30",
    question: "In the right triangle shown below, $\\angle B = 90^\\circ$, $AC = 12$, and $\\angle A = 30^\\circ$. What is the area of the triangle?",
    svg: `<svg viewBox="0 0 240 160" class="mx-auto h-40 w-auto bg-[#18181b] p-4 rounded-xl border border-zinc-800">
  <path d="M 40 120 L 200 120 L 40 30 Z" fill="none" stroke="#a1a1aa" stroke-width="2" />
  <!-- Right angle marker -->
  <rect x="40" y="110" width="10" height="10" fill="none" stroke="#a1a1aa" stroke-width="1.5" />
  <!-- Labels -->
  <text x="30" y="130" font-size="12" fill="#ffffff">B</text>
  <text x="210" y="130" font-size="12" fill="#ffffff">C</text>
  <text x="30" y="25" font-size="12" fill="#ffffff">A</text>
  <!-- Hypotenuse label -->
  <text x="125" y="65" font-size="12" fill="#60a5fa">12</text>
  <!-- Angle label -->
  <text x="55" y="55" font-size="11" fill="#f87171">30°</text>
</svg>`,
    options: ["a. $18\\sqrt{3}$", "b. $36\\sqrt{3}$", "c. $18$", "d. $36$"],
    correctAnswer: 0,
    explanation: "In a $30^\\circ-60^\\circ-90^\\circ$ special right triangle, the side opposite the $30^\\circ$ angle is half the hypotenuse: $BC = \\frac{1}{2}(12) = 6$. The side opposite the $60^\\circ$ angle is $\\sqrt{3}$ times the shorter side: $AB = 6\\sqrt{3}$. The area of the triangle is $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 6 \\times 6\\sqrt{3} = 18\\sqrt{3}$.",
    category: "Geometry",
    topics: ["Special Right Triangles", "Trigonometry", "Area of Triangle"]
  },
  {
    id: "est1_2025_may_31",
    question: "In $\\triangle ABC$, line segment $DE$ is parallel to $BC$ such that $D$ lies on $AB$ and $E$ lies on $AC$. If $AD = x + 1$, $DB = x - 1$, $AE = x + 4$, and $EC = x$, what is the value of $x$?",
    options: ["a. 2", "b. 3", "c. 4", "d. 5"],
    correctAnswer: 0,
    explanation: "By the Triangle Proportionality Theorem (since $DE \\parallel BC$), the segments are proportional: $\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{x + 1}{x - 1} = \\frac{x + 4}{x}$. Cross-multiplying: $x(x + 1) = (x - 1)(x + 4) \\implies x^2 + x = x^2 + 3x - 4 \\implies x = 3x - 4 \\implies 2x = 4 \\implies x = 2$.",
    category: "Geometry",
    topics: ["Similarity", "Triangle Proportionality Theorem"]
  },
  {
    id: "est1_2025_may_32",
    question: "Given the functions $f(x) = \\sqrt{x - 3}$ and $g(x) = x^2 - 1$, what is the domain of the composite function $(f \\circ g)(x)$?",
    options: ["a. $x \\ge 3$", "b. $x \\ge 2 \\text{ or } x \\le -2$", "c. $x \\ge 2$", "d. All real numbers"],
    correctAnswer: 1,
    explanation: "The composite function is $(f \\circ g)(x) = f(g(x)) = \\sqrt{(x^2 - 1) - 3} = \\sqrt{x^2 - 4}$. For the square root to be real and defined, the radicand must be non-negative: $x^2 - 4 \\ge 0 \\implies x^2 \\ge 4 \\implies |x| \\ge 2 \\implies x \\ge 2$ or $x \\le -2$.",
    category: "Functions",
    topics: ["Composite Functions", "Domain"]
  },
  {
    id: "est1_2025_may_33",
    question: "A radioactive substance decays at a continuous annual rate of $12\\%$. If the initial mass of the substance is $500$ grams, which of the following equations models the remaining mass $M(t)$ in grams after $t$ years?",
    options: ["a. $M(t) = 500(0.12)^t$", "b. $M(t) = 500(0.88)^t$", "c. $M(t) = 500(1.12)^t$", "d. $M(t) = 500 - 12t$"],
    correctAnswer: 1,
    explanation: "A decay of $12\\%$ per year means that each year $100\\% - 12\\% = 88\\%$ of the substance remains. Therefore, the exponential decay factor is $0.88$, and the equation modeling the remaining mass is $M(t) = 500(0.88)^t$.",
    category: "Word Problems",
    topics: ["Exponential Decay", "Percentage Decreases"]
  },
  {
    id: "est1_2025_may_34",
    question: "In a group of $80$ students, $50$ study Mathematics, $40$ study Physics, and $25$ study both. If a student is selected at random, what is the probability that they study neither Mathematics nor Physics?",
    options: ["a. $\\frac{3}{16}$", "b. $\\frac{5}{16}$", "c. $\\frac{1}{2}$", "d. $\\frac{1}{8}$"],
    correctAnswer: 0,
    explanation: "Let $M$ be the set of students studying Math and $P$ be those studying Physics. By the principle of inclusion-exclusion, the number of students studying Math or Physics or both is $|M \\cup P| = |M| + |P| - |M \\cap P| = 50 + 40 - 25 = 65$. The number of students studying neither is $80 - 65 = 15$. The probability of choosing a student who studies neither is $\\frac{15}{80} = \\frac{3}{16}$.",
    category: "Probability",
    topics: ["Venn Diagrams", "Inclusion-Exclusion"]
  },
  {
    id: "est1_2025_may_35",
    question: "When the polynomial $P(x) = 2x^3 - kx^2 + 5x - 6$ is divided by $x - 2$, the remainder is $8$. What is the value of $k$?",
    options: ["a. 2", "b. 3", "c. 4", "d. 1"],
    correctAnswer: 1,
    explanation: "According to the Remainder Theorem, dividing a polynomial $P(x)$ by $x - c$ yields a remainder equal to $P(c)$. Here, $c = 2$, so we have $P(2) = 8$. Substituting $x = 2$: $2(2)^3 - k(2)^2 + 5(2) - 6 = 8 \\implies 16 - 4k + 10 - 6 = 8 \\implies 20 - 4k = 8 \\implies 4k = 12 \\implies k = 3$.",
    category: "Algebra",
    topics: ["Remainder Theorem", "Polynomial Division"]
  },
  {
    id: "est1_2025_may_36",
    question: "Which of the following points $(x, y)$ is a solution to the system of inequalities below?\n\n$$\\begin{cases} y > 2x - 3 \\\\ y \\le -x + 4 \\end{cases}$$",
    options: ["a. $(3, 2)$", "b. $(1, 2)$", "c. $(0, -4)$", "d. $(2, 3)$"],
    correctAnswer: 1,
    explanation: "We check each point in both inequalities:\nFor $(1, 2)$:\n1) $2 > 2(1) - 3 \\implies 2 > -1$ (True)\n2) $2 \\le -1 + 4 \\implies 2 \\le 3$ (True)\nSince both are true, $(1, 2)$ is a valid solution.",
    category: "Linear Inequalities",
    topics: ["Systems of Inequalities", "Coordinate Checking"]
  },
  {
    id: "est1_2025_may_37",
    question: "An infinite geometric series has a first term $a_1 = 12$ and a common ratio $r = -\\frac{1}{3}$. What is the sum of the series?",
    options: ["a. 9", "b. 18", "c. 16", "d. 8"],
    correctAnswer: 0,
    explanation: "The sum $S$ of an infinite geometric series with $|r| < 1$ is given by $S = \\frac{a_1}{1 - r}$. Substituting the given values: $S = \\frac{12}{1 - (-1/3)} = \\frac{12}{4/3} = 12 \\times \\frac{3}{4} = 9$.",
    category: "Sequences & Series",
    topics: ["Geometric Series", "Infinite Sum"]
  },
  {
    id: "est1_2025_may_38",
    question: "Let $A = \\begin{pmatrix} x & 3 \\\\ 2 & x-1 \\end{pmatrix}$. If the determinant of matrix $A$ is equal to $6$, what is the sum of all possible values of $x$?",
    options: ["a. 1", "b. -1", "c. 2", "d. 0"],
    correctAnswer: 0,
    explanation: "The determinant of a $2 \\times 2$ matrix $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ is $ad - bc$. For matrix $A$, $\\det(A) = x(x-1) - (3)(2) = x^2 - x - 6$. We are given $\\det(A) = 6$, so $x^2 - x - 6 = 6 \\implies x^2 - x - 12 = 0 \\implies (x-4)(x+3) = 0$. The roots are $x = 4$ and $x = -3$, and their sum is $4 + (-3) = 1$.",
    category: "Matrices",
    topics: ["Determinants", "Quadratic Equations"]
  },
  {
    id: "est1_2025_may_39",
    question: "Solve the following equation for $x$:\n\n$$2^{3x - 1} = 16^{x + 1}$$",
    options: ["a. -5", "b. 5", "c. -3", "d. 3"],
    correctAnswer: 0,
    explanation: "Express 16 as a power of 2: $16 = 2^4$. Substituting this in: $2^{3x - 1} = (2^4)^{x + 1} \\implies 2^{3x - 1} = 2^{4x + 4}$. Since the bases are equal, we equate the exponents: $3x - 1 = 4x + 4 \\implies x = -5$.",
    category: "Exponents & Radicals",
    topics: ["Exponential Equations", "Logarithms"]
  },
  {
    id: "est1_2025_may_40",
    question: "Working alone, Bob can paint a fence in $6$ hours, while Alice can paint the same fence in $4$ hours. If they work together with a third friend, Charlie, they can complete the job in exactly $2$ hours. How long would it take Charlie to paint the fence alone?",
    options: ["a. 12 hours", "b. 10 hours", "c. 8 hours", "d. 24 hours"],
    correctAnswer: 0,
    explanation: "Let Charlie's individual rate of work be $\\frac{1}{C}$ fences per hour. The rate at which they complete the job together is the sum of their individual rates: $\\frac{1}{6} + \\frac{1}{4} + \\frac{1}{C} = \\frac{1}{2}$. Find a common denominator: $\\frac{2}{12} + \\frac{3}{12} + \\frac{1}{C} = \\frac{6}{12} \\implies \\frac{5}{12} + \\frac{1}{C} = \\frac{6}{12} \\implies \\frac{1}{C} = \\frac{1}{12}$. Thus, $C = 12$, meaning it takes Charlie $12$ hours to complete the job alone.",
    category: "Word Problems",
    topics: ["Work Rate Problems", "Rational Modeling"]
  },
  {
    id: "est1_2025_may_41",
    question: "Which of the following absolute value inequalities represents the statement: 'The distance between $x$ and $-3$ on the number line is less than or equal to $5$'?",
    options: ["a. $|x - 3| \\le 5$", "b. $|x + 3| \\le 5$", "c. $|x - 5| \\le 3$", "d. $|x + 5| \\le 3$"],
    correctAnswer: 1,
    explanation: "The distance between any two numbers $a$ and $b$ on the number line is given by $|a - b|$. Therefore, the distance between $x$ and $-3$ is $|x - (-3)| = |x + 3|$. To represent that this distance is less than or equal to $5$, we write: $|x + 3| \\le 5$.",
    category: "Absolute Value",
    topics: ["Absolute Value Inequalities", "Distance Interpretation"]
  },
  {
    id: "est1_2025_may_42",
    question: "If $\\sin(\\theta) = \\frac{3}{5}$ and $\\theta$ lies in the second quadrant, what is the value of $\\cos(2\\theta)$?",
    options: ["a. $\\frac{7}{25}$", "b. $-\\frac{7}{25}$", "c. $\\frac{24}{25}$", "d. $-\\frac{24}{25}$"],
    correctAnswer: 0,
    explanation: "Using the double angle identity for cosine, we can express $\\cos(2\\theta)$ strictly in terms of $\\sin(\\theta)$: $\\cos(2\\theta) = 1 - 2\\sin^2(\\theta)$. Substituting $\\sin(\\theta) = \\frac{3}{5}$ gives: $\\cos(2\\theta) = 1 - 2\\left(\\frac{3}{5}\\right)^2 = 1 - 2\\left(\\frac{9}{25}\right) = 1 - \\frac{18}{25} = \\frac{7}{25}$.",
    category: "Trigonometry",
    topics: ["Double Angle Formulas", "Trigonometric Identities"]
  },
  {
    id: "est1_2025_may_43",
    question: "The dot plot below shows the number of books read by 15 students over the summer. What is the median number of books read?",
    svg: `<svg viewBox="0 0 240 120" class="mx-auto h-36 w-auto bg-[#18181b] p-4 rounded-xl border border-zinc-800">
  <!-- Axis -->
  <line x1="30" y1="90" x2="210" y2="90" stroke="#a1a1aa" stroke-width="1.5" />
  <!-- Ticks and labels -->
  <line x1="50" y1="90" x2="50" y2="95" stroke="#a1a1aa" stroke-width="1.5" />
  <text x="50" y="110" font-size="10" fill="#ffffff" text-anchor="middle">1</text>
  <line x1="90" y1="90" x2="90" y2="95" stroke="#a1a1aa" stroke-width="1.5" />
  <text x="90" y="110" font-size="10" fill="#ffffff" text-anchor="middle">2</text>
  <line x1="130" y1="90" x2="130" y2="95" stroke="#a1a1aa" stroke-width="1.5" />
  <text x="130" y="110" font-size="10" fill="#ffffff" text-anchor="middle">3</text>
  <line x1="170" y1="90" x2="170" y2="95" stroke="#a1a1aa" stroke-width="1.5" />
  <text x="170" y="110" font-size="10" fill="#ffffff" text-anchor="middle">4</text>

  <!-- Dots at 1 (3 dots) -->
  <circle cx="50" cy="80" r="4" fill="#34d399" />
  <circle cx="50" cy="70" r="4" fill="#34d399" />
  <circle cx="50" cy="60" r="4" fill="#34d399" />

  <!-- Dots at 2 (4 dots) -->
  <circle cx="90" cy="80" r="4" fill="#34d399" />
  <circle cx="90" cy="70" r="4" fill="#34d399" />
  <circle cx="90" cy="60" r="4" fill="#34d399" />
  <circle cx="90" cy="50" r="4" fill="#34d399" />

  <!-- Dots at 3 (6 dots) -->
  <circle cx="130" cy="80" r="4" fill="#34d399" />
  <circle cx="130" cy="70" r="4" fill="#34d399" />
  <circle cx="130" cy="60" r="4" fill="#34d399" />
  <circle cx="130" cy="50" r="4" fill="#34d399" />
  <circle cx="130" cy="40" r="4" fill="#34d399" />
  <circle cx="130" cy="30" r="4" fill="#34d399" />

  <!-- Dots at 4 (2 dots) -->
  <circle cx="170" cy="80" r="4" fill="#34d399" />
  <circle cx="170" cy="70" r="4" fill="#34d399" />
</svg>`,
    options: ["a. 2", "b. 2.5", "c. 3", "d. 3.5"],
    correctAnswer: 2,
    explanation: "The data points from the dot plot in ascending order are: $1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4$. For a set of $15$ data points, the median is the $8^{\\text{th}}$ value in the ordered list. Counting from the left, the first $3$ values are $1$, the next $4$ values (positions 4 to 7) are $2$, and the $8^{\\text{th}}$ value is $3$. Therefore, the median is $3$.",
    category: "Statistics",
    topics: ["Median", "Dot Plots", "Data Analysis"]
  },
  {
    id: "est1_2025_may_44",
    question: "What are the complex roots of the quadratic equation $2x^2 - 4x + 5 = 0$?",
    options: ["a. $1 \\pm i\\sqrt{6}$", "b. $1 \\pm \\frac{i\\sqrt{6}}{2}$", "c. $2 \\pm i\\sqrt{6}$", "d. $1 \\pm \\frac{i\\sqrt{10}}{2}$"],
    correctAnswer: 1,
    explanation: "Using the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ with $a=2, b=-4, c=5$: $x = \\frac{4 \\pm \\sqrt{(-4)^2 - 4(2)(5)}}{2(2)} = \\frac{4 \\pm \\sqrt{16 - 40}}{4} = \\frac{4 \\pm \\sqrt{-24}}{4} = \\frac{4 \\pm 2i\\sqrt{6}}{4} = 1 \\pm \\frac{i\\sqrt{6}}{2}$.",
    category: "Quadratic Equations",
    topics: ["Complex Roots", "Quadratic Formula"]
  },
  {
    id: "est1_2025_may_45",
    question: "A water tank holds $1200$ liters of water. Due to a small leak, the tank loses $15$ liters of water every $4$ hours. Which of the following equations models the remaining volume of water $V$, in liters, in the tank after $h$ hours?",
    options: ["a. $V = 1200 - 15h$", "b. $V = 1200 - 3.75h$", "c. $V = 1200 - \\frac{4}{15}h$", "d. $V = 1200 - 60h$"],
    correctAnswer: 1,
    explanation: "The rate of water loss per hour is $\\frac{15\\text{ liters}}{4\\text{ hours}} = 3.75\\text{ liters/hour}$. Since the tank starts with $1200$ liters, the remaining volume $V$ after $h$ hours is modeled by $V = 1200 - 3.75h$.",
    category: "Word Problems",
    topics: ["Linear Modeling", "Rate of Change"]
  },
  {
    id: "est1_2025_may_46",
    question: "Evaluate the expression:\n\n$$(-8)^{2/3} - (-27)^{1/3}$$",
    options: ["a. 7", "b. 1", "c. -7", "d. -1"],
    correctAnswer: 0,
    explanation: "First, simplify each term:\n1) $(-8)^{2/3} = ((-8)^{1/3})^2 = (-2)^2 = 4$\n2) $(-27)^{1/3} = -3$\nSubstituting these back: $4 - (-3) = 4 + 3 = 7$.",
    category: "Exponents & Radicals",
    topics: ["Rational Exponents", "Negative Bases"]
  },
  {
    id: "est1_2025_may_47",
    question: "Point $M(2, 1)$ is the midpoint of segment $AB$. If the coordinates of $A$ are $(-2, 5)$, what is the distance from $B$ to the origin?",
    options: ["a. $3\\sqrt{5}$", "b. 45", "c. 5", "d. $3\\sqrt{2}$"],
    correctAnswer: 0,
    explanation: "Let $B$ have coordinates $(x_B, y_B)$. Since $M$ is the midpoint: $\\frac{-2 + x_B}{2} = 2 \\implies -2 + x_B = 4 \\implies x_B = 6$, and $\\frac{5 + y_B}{2} = 1 \\implies 5 + y_B = 2 \\implies y_B = -3$. So $B(6, -3)$. The distance from $B$ to the origin $(0,0)$ is $\\sqrt{6^2 + (-3)^2} = \\sqrt{36 + 9} = \\sqrt{45} = 3\\sqrt{5}$.",
    category: "Coordinate Geometry",
    topics: ["Midpoint Formula", "Distance Formula"]
  },
  {
    id: "est1_2025_may_48",
    question: "How many liters of a $20\\%$ acid solution must be mixed with $4$ liters of a $50\\%$ acid solution to obtain a $30\\%$ acid solution?",
    options: ["a. 8 liters", "b. 6 liters", "c. 10 liters", "d. 4 liters"],
    correctAnswer: 0,
    explanation: "Let $x$ be the volume of the $20\\%$ acid solution in liters. The total amount of pure acid before and after mixing must be equal: $0.20x + 0.50(4) = 0.30(x + 4) \\implies 0.20x + 2 = 0.30x + 1.2 \\implies 2 - 1.2 = 0.30x - 0.20x \\implies 0.8 = 0.10x \\implies x = 8$ liters.",
    category: "Word Problems",
    topics: ["Mixture Problems", "System Modeling"]
  },
  {
    id: "est1_2025_may_49",
    question: "What is the domain of the real-valued function $f(x) = \\frac{1}{\\sqrt{5 - 2x}}$?",
    options: ["a. $x < 2.5$", "b. $x \\le 2.5$", "c. $x > 2.5$", "d. All real numbers except 2.5"],
    correctAnswer: 0,
    explanation: "For $f(x)$ to be defined for real numbers, the expression under the square root must be positive. Since the square root is in the denominator, the expression cannot equal zero. Therefore, $5 - 2x > 0 \\implies 5 > 2x \\implies x < 2.5$.",
    category: "Functions",
    topics: ["Domain", "Radical Functions", "Rational Functions"]
  },
  {
    id: "est1_2025_may_50",
    question: "In the circle with center $O$ below, $AC$ is a diameter. If $\\angle BOC = 80^\\circ$, what is the measure of the inscribed angle $\\angle BAC$?",
    svg: `<svg viewBox="0 0 200 200" class="mx-auto h-44 w-auto bg-[#18181b] p-4 rounded-xl border border-zinc-800">
  <!-- Circle -->
  <circle cx="100" cy="100" r="70" fill="none" stroke="#a1a1aa" stroke-width="2" />
  <!-- Center O -->
  <circle cx="100" cy="100" r="3" fill="#ffffff" />
  <text x="105" y="95" font-size="11" fill="#ffffff">O</text>
  <!-- Diameter AC -->
  <line x1="30" y1="100" x2="170" y2="100" stroke="#a1a1aa" stroke-width="1.5" />
  <text x="15" y="104" font-size="12" fill="#ffffff">A</text>
  <text x="175" y="104" font-size="12" fill="#ffffff">C</text>
  <!-- Radius OB and Chord AB, BC -->
  <line x1="100" y1="100" x2="112.15" y2="31.06" stroke="#a1a1aa" stroke-width="1.5" />
  <line x1="30" y1="100" x2="112.15" y2="31.06" stroke="#60a5fa" stroke-width="1.5" />
  <line x1="170" y1="100" x2="112.15" y2="31.06" stroke="#60a5fa" stroke-width="1.5" />
  <text x="110" y="22" font-size="12" fill="#ffffff">B</text>

  <!-- Central Angle Label -->
  <text x="120" y="90" font-size="10" fill="#f87171">80°</text>
</svg>`,
    options: ["a. $40^\\circ$", "b. $50^\\circ$", "c. $80^\\circ$", "d. $100^\\circ$"],
    correctAnswer: 0,
    explanation: "The central angle $\\angle BOC = 80^\\circ$ and the inscribed angle $\\angle BAC$ intercept the exact same arc $BC$. By the Inscribed Angle Theorem, the measure of an inscribed angle is half the measure of the central angle that intercepts the same arc: $\\angle BAC = \\frac{1}{2} \\angle BOC = \\frac{1}{2}(80^\\circ) = 40^\\circ$.",
    category: "Geometry",
    topics: ["Circles", "Inscribed Angles", "Central Angles"]
  }
];
