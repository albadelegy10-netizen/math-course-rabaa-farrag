import { Question } from '../../types';

export const EST1_2026_MAY_SET: Question[] = [
  {
    id: "est1_2026_may_1",
    question: "What is the graph of $F(x) = \\frac{2}{x+4} + 1$?",
    svg: `
<svg viewBox="0 0 300 220" class="mx-auto h-52 w-auto bg-[#121214] p-4 rounded-xl border border-gray-800">
  <!-- Asymptotes (dashed lines) -->
  <line x1="90" y1="10" x2="90" y2="210" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,4" />
  <line x1="10" y1="95" x2="290" y2="95" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,4" />

  <!-- Axes -->
  <line x1="10" y1="110" x2="290" y2="110" stroke="#71717a" stroke-width="1.5" />
  <line x1="150" y1="10" x2="150" y2="210" stroke="#71717a" stroke-width="1.5" />

  <!-- Axis ticks -->
  <line x1="150" y1="95" x2="155" y2="95" stroke="#71717a" stroke-width="1" />
  <line x1="90" y1="110" x2="90" y2="115" stroke="#71717a" stroke-width="1" />
  <text x="160" y="100" font-size="8" fill="#a1a1aa">y = 1</text>
  <text x="95" y="125" font-size="8" fill="#a1a1aa">x = -4</text>

  <!-- Curve: y = 2 / (x+4) + 1 -->
  <path d="M 10 98 Q 70 100, 80 10" fill="none" stroke="#60a5fa" stroke-width="2.5" />
  <path d="M 100 210 Q 110 110, 290 97" fill="none" stroke="#60a5fa" stroke-width="2.5" />

  <!-- Legend / Labels -->
  <text x="280" y="105" font-size="10" fill="#e4e4e7" text-anchor="end">x</text>
  <text x="155" y="20" font-size="10" fill="#e4e4e7">y</text>
  <text x="20" y="40" font-size="11" fill="#60a5fa" font-weight="bold">F(x) = 2/(x+4) + 1</text>
</svg>
`,
    options: [
      "a. A rational graph with vertical asymptote at $x = -4$ and horizontal asymptote at $y = 1$",
      "b. A rational graph with vertical asymptote at $x = 4$ and horizontal asymptote at $y = -1$",
      "c. A rational graph with vertical asymptote at $x = -4$ and horizontal asymptote at $y = -1$",
      "d. A rational graph with vertical asymptote at $x = 4$ and horizontal asymptote at $y = 1$"
    ],
    correctAnswer: 0,
    explanation: "The rational function $F(x) = \\frac{2}{x+4} + 1$ has a vertical asymptote where the denominator is zero, i.e., $x + 4 = 0 \\Rightarrow x = -4$. The horizontal asymptote is given by the constant offset as $x \\to \\pm\\infty$, which is $y = 1$.",
    category: "Functions",
    topics: ["Rational Functions"]
  },
  {
    id: "est1_2026_may_2",
    question: "$y$ varies inversely with $x^2$. $y = 4$ and $x = 9$. If $x = 6$, then what is the value of $y$?",
    options: ["a. 9", "b. 4", "c. 6", "d. 12"],
    correctAnswer: 0,
    explanation: "Inverse variation is modeled by $y = \\frac{k}{x^2}$. Substituting the given values: $4 = \\frac{k}{9^2} \\Rightarrow 4 = \\frac{k}{81} \\Rightarrow k = 324$. Now, find $y$ when $x = 6$: $y = \\frac{324}{6^2} = \\frac{324}{36} = 9$.",
    category: "Variation",
    topics: ["Inverse Variation"]
  },
  {
    id: "est1_2026_may_3",
    question: "Find the Radicand if $a = 2, b = -1$:\n\n$$\\sqrt[3]{8a^3b^6} \\cdot \\sqrt[3]{a^2b^2}$$",
    options: ["a. 16", "b. 20", "c. 256", "d. 2"],
    correctAnswer: 2,
    explanation: "Combining the radicals gives $\\sqrt[3]{8a^3b^6 \\cdot a^2b^2} = \\sqrt[3]{8a^5b^8}$. The radicand is the expression inside the root: $R = 8a^5b^8$. Evaluating at $a = 2$ and $b = -1$:\n\n$$R = 8(2)^5(-1)^8 = 8(32)(1) = 256$$",
    category: "Algebra",
    topics: ["Radicals"]
  },
  {
    id: "est1_2026_may_4",
    question: "In the 1st trimester, Ali took 3 chemistry exams and got an average of 88. In the 2nd trimester, he took 2 exams with scores of 100 and 88. In the last trimester, he will take one final exam.\n\nWhat is the least score he should get on the last exam to get an overall average equal to or greater than 90?",
    options: ["a. 98", "b. 88", "c. 90", "d. 92"],
    correctAnswer: 1,
    explanation: "There are $3 + 2 + 1 = 6$ exams in total. To obtain an overall average of at least 90, the total sum of his scores must be at least $6 \\times 90 = 540$. Current sum of scores: $(3 \\times 88) + 100 + 88 = 264 + 188 = 452$. Score needed on the last exam: $540 - 452 = 88$.",
    category: "Statistics",
    topics: ["Mean"]
  },
  {
    id: "est1_2026_may_5",
    question: "The ratio between the sides of a triangle is $3 : 4 : 6$ and the perimeter is 65.\n\nWhat is the length of the longest side?",
    options: ["a. 30", "b. 15", "c. 20", "d. 25"],
    correctAnswer: 0,
    explanation: "Let the sides of the triangle be $3x$, $4x$, and $6x$. The perimeter is the sum of the sides: $3x + 4x + 6x = 65 \\Rightarrow 13x = 65 \\Rightarrow x = 5$. The longest side is $6x = 6(5) = 30$.",
    category: "Geometry",
    topics: ["Triangles", "Ratio"]
  },
  {
    id: "est1_2026_may_6",
    question: "378 is $18\\%$ of what number?",
    options: ["a. 2100", "b. 2000", "c. 1800", "d. 2250"],
    correctAnswer: 0,
    explanation: "Let the unknown number be $x$. The equation is:\n\n$$0.18x = 378 \\Rightarrow x = \\frac{378}{0.18} = 2100$$",
    category: "Percentage",
    topics: ["Percentage"]
  },
  {
    id: "est1_2026_may_7",
    question: "A school has 2000 students. A sample of 100 people was taken. In this sample, there are 2 seniors, 8 K.G. students, and the rest are in Grade 11.\n\nIf 2 K.G. students from the sample are moving to another school, what is the expected number of K.G. students who will move from the whole school?",
    options: ["a. 20", "b. 40", "c. 160", "d. 200"],
    correctAnswer: 1,
    explanation: "In the sample of 100, 2 K.G. students are moving, which is a rate of $\\frac{2}{100} = 2\\%$. Extending this rate to the entire school of 2000 students, the expected number of K.G. students moving is:\n\n$$2\\% \\text{ of } 2000 = 0.02 \\times 2000 = 40$$",
    category: "Statistics",
    topics: ["Sampling"]
  },
  {
    id: "est1_2026_may_8",
    question: "A bag contains 11 marbles: 3 red, 4 blue, and the remaining marbles are yellow. Two marbles are drawn at random without replacement. Given that at least one of the two marbles is yellow, what is the probability that both marbles are yellow?",
    options: ["a. 3/17", "b. 6/55", "c. 12/55", "d. 4/11"],
    correctAnswer: 0,
    explanation: "Number of yellow marbles = $11 - 3 - 4 = 4$. Total ways to choose 2 marbles from 11 is $\\binom{11}{2} = 55$. Ways to choose 0 yellow marbles (only choosing from 7 non-yellow) is $\\binom{7}{2} = 21$. Therefore, ways to choose at least 1 yellow marble is $55 - 21 = 34$. Ways to choose 2 yellow marbles is $\\binom{4}{2} = 6$. The conditional probability is:\n\n$$\\frac{6}{34} = \\frac{3}{17}$$",
    category: "Probability",
    topics: ["Conditional Probability"]
  },
  {
    id: "est1_2026_may_9",
    question: "Khaled's target calorie intake is 1600 cal. He made breakfast with 300 cal, went to the gym and burned 350 cal, and then had lunch with 1250 cal.\n\nWhat is the remaining available calories for him to consume at dinner?",
    options: ["a. 400", "b. 500", "c. 350", "d. 200"],
    correctAnswer: 0,
    explanation: "Remaining calories = Target - Intake + Burned = $1600 - 300 + 350 - 1250 = 400$ cal.",
    category: "Problem Solving",
    topics: ["Word Problem"]
  },
  {
    id: "est1_2026_may_10",
    question: "45 km per hour is equivalent to how many meters per minute?",
    options: ["a. 450", "b. 750", "c. 1250", "d. 2700"],
    correctAnswer: 1,
    explanation: "To convert km/h to meters per minute:\n\n$$\\frac{45 \\text{ km}}{1 \\text{ hour}} \\times \\frac{1000 \\text{ m}}{1 \\text{ km}} \\times \\frac{1 \\text{ hour}}{60 \\text{ min}} = \\frac{45000 \\text{ m}}{60 \\text{ min}} = 750 \\text{ meters/minute}$$",
    category: "Rates",
    topics: ["Unit Conversion"]
  },
  {
    id: "est1_2026_may_11",
    question: "Let $x$ and $y$ be two natural even numbers. Which of the following expressions is guaranteed to be odd and less than $x$?",
    options: ["a. \\frac{x+y}{2}", "b. 4x - y", "c. 2x - y", "d. x + y"],
    correctAnswer: 0,
    explanation: "Since $x$ and $y$ are even, let $x = 2k$ and $y = 2m$. Expressions $4x-y$, $2x-y$, and $x+y$ are always even because the sum or difference of even numbers is even. Only $\\frac{x+y}{2}$ can be odd. For example, if $x = 4$ and $y = 2$ (both even), then:\n\n$$\\frac{x+y}{2} = \\frac{4+2}{2} = 3$$ which is odd and less than $x = 4$.",
    category: "Algebra",
    topics: ["Number Properties"]
  },
  {
    id: "est1_2026_may_12",
    question: "Two adjacent angles have a sum of 66 degrees. The second angle is double the first angle.\n\nIf the first angle is represented by $x + 3$, what is the value of $x$?",
    options: ["a. 15", "b. 19", "c. 13", "d. 14"],
    correctAnswer: 1,
    explanation: "Let the first angle be $A$. The second angle is $2A$. Their sum is $A + 2A = 66 \\Rightarrow 3A = 66 \\Rightarrow A = 22$. We are given the first angle is $x + 3 = 22 \\Rightarrow x = 19$.",
    category: "Geometry",
    topics: ["Angles"]
  },
  {
    id: "est1_2026_may_13",
    question: "The graph below shows the relationship between the radius and height of several cylinders.\n\nWhat is the nature of the line of best fit?",
    svg: `
<svg viewBox="0 0 320 220" class="mx-auto h-52 w-auto bg-[#1a1a1a] p-4 rounded-xl border border-gray-700">
  <!-- Grid Lines -->
  <line x1="40" y1="30" x2="280" y2="30" stroke="#333333" stroke-width="1" stroke-dasharray="2,2" />
  <line x1="40" y1="70" x2="280" y2="70" stroke="#333333" stroke-width="1" stroke-dasharray="2,2" />
  <line x1="40" y1="110" x2="280" y2="110" stroke="#333333" stroke-width="1" stroke-dasharray="2,2" />
  <line x1="40" y1="150" x2="280" y2="150" stroke="#333333" stroke-width="1" stroke-dasharray="2,2" />

  <!-- Axes -->
  <line x1="40" y1="190" x2="290" y2="190" stroke="#ffffff" stroke-width="1.5" />
  <line x1="40" y1="20" x2="40" y2="190" stroke="#ffffff" stroke-width="1.5" />

  <!-- Labels -->
  <text x="290" y="205" font-size="11" fill="#ffffff" text-anchor="end" font-family="monospace">radius</text>
  <text x="25" y="15" font-size="11" fill="#ffffff" text-anchor="start" font-family="monospace">hight</text>

  <!-- Scatter points -->
  <circle cx="70" cy="170" r="4" fill="#60a5fa" stroke="#ffffff" stroke-width="1" />
  <circle cx="100" cy="140" r="4" fill="#60a5fa" stroke="#ffffff" stroke-width="1" />
  <circle cx="120" cy="150" r="4" fill="#60a5fa" stroke="#ffffff" stroke-width="1" />
  <circle cx="150" cy="120" r="4" fill="#60a5fa" stroke="#ffffff" stroke-width="1" />
  <circle cx="180" cy="110" r="4" fill="#60a5fa" stroke="#ffffff" stroke-width="1" />
  <circle cx="200" cy="95" r="4" fill="#60a5fa" stroke="#ffffff" stroke-width="1" />
  <circle cx="230" cy="85" r="4" fill="#60a5fa" stroke="#ffffff" stroke-width="1" />
  <circle cx="250" cy="70" r="4" fill="#60a5fa" stroke="#ffffff" stroke-width="1" />

  <!-- Line of Best Fit -->
  <line x1="50" y1="185" x2="270" y2="60" stroke="#f87171" stroke-width="2.5" />
</svg>
`,
    options: [
      "a. A linear model with a positive slope indicating a positive correlation",
      "b. A linear model with a negative slope indicating a negative correlation",
      "c. A constant line showing no correlation",
      "d. A parabolic curve showing quadratic correlation"
    ],
    correctAnswer: 0,
    explanation: "The scatterplot points rise from left to right, showing that as the radius of the cylinders increases, the height also increases. This indicates a positive linear correlation, represented by a line of best fit with a positive slope.",
    category: "Data Analysis",
    topics: ["Line of Best Fit"]
  },
  {
    id: "est1_2026_may_14",
    question: "Susan works as a part-time teacher earning $35 per hour, and has a sales job that pays a $300 base salary plus $4.5 per item sold.\n\nIf she sells 2 items per day during the 30 days of July, how many hours $x$ must she teach to earn a total of $2740 by the end of July?",
    options: ["a. 62", "b. 60", "c. 65", "d. 58"],
    correctAnswer: 0,
    explanation: "July has 30 days. Sells 2 items per day $\\Rightarrow 30 \\times 2 = 60$ items. Earnings from sales = Base + Commission = $300 + 60(4.5) = 300 + 270 = 570$. Total target = 2740. Target teaching income needed = $2740 - 570 = 2170$. Teaching hours: $35x = 2170 \\Rightarrow x = 62$ hours.",
    category: "Linear Equations",
    topics: ["Word Problem"]
  },
  {
    id: "est1_2026_may_15",
    question: "Susan wants to make a total of $6020 per month. She teaches 5 students, each for 2 hours weekly, earning $35 per hour. She assumes 4 weeks in a month. Her other sales job pays a $300 base salary plus $4.5 per item sold.\n\nHow many items must she sell in a month to achieve her target?",
    options: ["a. 300", "b. 400", "c. 500", "d. 960"],
    correctAnswer: 3,
    explanation: "Monthly teaching hours = 5 students $\\times 2$ hours/week $\\times 4$ weeks/month = 40 hours. Teaching earnings = $40 \\times 35 = 1400$. Base sales earnings = 300. Combined baseline earnings = $1400 + 300 = 1700$. Remaining target to make from item sales = $6020 - 1700 = 4320$. Number of items needed: $\\frac{4320}{4.5} = 960$ items.",
    category: "Linear Equations",
    topics: ["Word Problem"]
  },
  {
    id: "est1_2026_may_16",
    question: "Consider the following dataset of 13 numbers:\n\n$$3, 5, 5, 19, 19, 19, 20, 23, 24, 25, 26, 23, 30$$\n\nLet the mean $= m$, Mode $= n$, and Range $= a$.\n\nWhat is the value of $26mn - 13a$?",
    options: ["a. 9341", "b. 8807", "c. 7214", "d. 9000"],
    correctAnswer: 1,
    explanation: "First, order the 13 numbers: $3, 5, 5, 19, 19, 19, 20, 23, 23, 24, 25, 26, 30$. The sum of these numbers is 241. Mean $m = 241/13$. Mode (most frequent) $n = 19$ (appears 3 times). Range $a = \\text{Max} - \\text{Min} = 30 - 3 = 27$.\n\nEvaluate the expression:\n\n$$26mn - 13a = 26 \\left(\\frac{241}{13}\\right) (19) - 13(27) = 2(241)(19) - 351 = 9158 - 351 = 8807$$",
    category: "Statistics",
    topics: ["Mean", "Mode", "Range"]
  },
  {
    id: "est1_2026_may_17",
    question: "Jamal bought an item with a $15\\%$ discount. Sometime later, he sold it at a $50\\%$ loss for $678.50.\n\nWhat was the original price of the item?",
    options: ["a. 1596.47", "b. 1600.00", "c. 1357.00", "d. 1800.00"],
    correctAnswer: 0,
    explanation: "Let the original price be $P$. He bought the item at $0.85P$. He sold it at a 50% loss, which means he sold it for 50% of what he bought it for: $0.50(0.85P) = 678.50 \\Rightarrow 0.425P = 678.50 \\Rightarrow P = \\frac{678.50}{0.425} = 1596.47$.",
    category: "Percentage",
    topics: ["Percentage", "Word Problem"]
  },
  {
    id: "est1_2026_may_18",
    question: "The table below lists the scores of 36 students on an exam, grouped by intervals:\n\nWhat is the mean score of the students? (Use the midpoint of each interval to calculate the average).",
    svg: `
<div class="overflow-x-auto my-4 max-w-lg mx-auto">
  <table class="w-full text-sm border-collapse border border-gray-700 bg-gray-900 text-gray-100 rounded-lg overflow-hidden">
    <thead>
      <tr class="bg-gray-800 text-gray-200">
        <th class="border border-gray-700 p-3 text-left font-bold font-mono">Scores</th>
        <th class="border border-gray-700 p-3 text-center">[0–10)</th>
        <th class="border border-gray-700 p-3 text-center">[10–14)</th>
        <th class="border border-gray-700 p-3 text-center">[14–17)</th>
        <th class="border border-gray-700 p-3 text-center">[17–20]</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-700 p-3 font-bold bg-gray-800 font-mono">Number of Students</td>
        <td class="border border-gray-700 p-3 text-center text-emerald-400 font-bold">7</td>
        <td class="border border-gray-700 p-3 text-center text-emerald-400 font-bold">13</td>
        <td class="border border-gray-700 p-3 text-center text-emerald-400 font-bold">11</td>
        <td class="border border-gray-700 p-3 text-center text-emerald-400 font-bold">5</td>
      </tr>
    </tbody>
  </table>
</div>
`,
    options: ["a. 12.61", "b. 11.25", "c. 13.50", "d. 14.10"],
    correctAnswer: 0,
    explanation: "To calculate the grouped mean, we find the midpoint of each interval:\n- For $[0-10)$: Midpoint $= 5.0$, Frequency $= 7$\n- For $[10-14)$: Midpoint $= 12.0$, Frequency $= 13$\n- For $[14-17)$: Midpoint $= 15.5$, Frequency $= 11$\n- For $[17-20]$: Midpoint $= 18.5$, Frequency $= 5$\n\nSum of (Midpoint $\\times$ Frequency):\n\n$$(5 \\times 7) + (12 \\times 13) + (15.5 \\times 11) + (18.5 \\times 5) = 35 + 156 + 170.5 + 92.5 = 454$$\n\nTotal number of students $= 7 + 13 + 11 + 5 = 36$.\nMean score $= 454 / 36 \\approx 12.61$.",
    category: "Statistics",
    topics: ["Mean", "Frequency Table"]
  },
  {
    id: "est1_2026_may_19",
    question: "Using the scores from the frequency table in the previous question, with a passing grade of 10:\n\nIf the teacher brings a $3 chocolate for each student who scored more than 14, how much will she pay?",
    svg: `
<div class="overflow-x-auto my-4 max-w-lg mx-auto">
  <table class="w-full text-sm border-collapse border border-gray-700 bg-gray-900 text-gray-100 rounded-lg overflow-hidden">
    <thead>
      <tr class="bg-gray-800 text-gray-200">
        <th class="border border-gray-700 p-3 text-left font-bold font-mono">Scores</th>
        <th class="border border-gray-700 p-3 text-center">[0–10)</th>
        <th class="border border-gray-700 p-3 text-center">[10–14)</th>
        <th class="border border-gray-700 p-3 text-center">[14–17)</th>
        <th class="border border-gray-700 p-3 text-center">[17–20]</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-700 p-3 font-bold bg-gray-800 font-mono">Number of Students</td>
        <td class="border border-gray-700 p-3 text-center text-emerald-400 font-bold">7</td>
        <td class="border border-gray-700 p-3 text-center text-emerald-400 font-bold">13</td>
        <td class="border border-gray-700 p-3 text-center text-emerald-400 font-bold">11</td>
        <td class="border border-gray-700 p-3 text-center text-emerald-400 font-bold">5</td>
      </tr>
    </tbody>
  </table>
</div>
`,
    options: ["a. 10", "b. 15", "c. 20", "d. 48"],
    correctAnswer: 3,
    explanation: "Students scoring more than 14 are in the intervals $[14-17)$ and $[17-20]$. Total students in these intervals $= 11 + 5 = 16$. Cost of chocolates $= 16 \\times 3 = 48$. Note: if 'more than 14' refers strictly to the top interval $[17-20]$ (e.g., assuming $[14-17)$ is excluded), the sum would be $5 \\times 3 = 15$. However, the standard mathematical interpretation includes both intervals yielding 48. Both explanations are supported depending on boundary assumptions.",
    category: "Problem Solving",
    topics: ["Word Problem"]
  },
  {
    id: "est1_2026_may_20",
    question: "Using the scores from the frequency table, with a passing grade of 10, which of the following statements is correct?",
    svg: `
<div class="overflow-x-auto my-4 max-w-lg mx-auto">
  <table class="w-full text-sm border-collapse border border-gray-700 bg-gray-900 text-gray-100 rounded-lg overflow-hidden">
    <thead>
      <tr class="bg-gray-800 text-gray-200">
        <th class="border border-gray-700 p-3 text-left font-bold font-mono">Scores</th>
        <th class="border border-gray-700 p-3 text-center">[0–10)</th>
        <th class="border border-gray-700 p-3 text-center">[10–14)</th>
        <th class="border border-gray-700 p-3 text-center">[14–17)</th>
        <th class="border border-gray-700 p-3 text-center">[17–20]</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-700 p-3 font-bold bg-gray-800 font-mono">Number of Students</td>
        <td class="border border-gray-700 p-3 text-center text-emerald-400 font-bold">7</td>
        <td class="border border-gray-700 p-3 text-center text-emerald-400 font-bold">13</td>
        <td class="border border-gray-700 p-3 text-center text-emerald-400 font-bold">11</td>
        <td class="border border-gray-700 p-3 text-center text-emerald-400 font-bold">5</td>
      </tr>
    </tbody>
  </table>
</div>
`,
    options: [
      "a. Majority of the students pass the exam",
      "b. Majority of the students fail the exam",
      "c. The number of students decreases when scores increase",
      "d. The number of students increases when scores increase"
    ],
    correctAnswer: 0,
    explanation: "Total students $= 36$. Passing score is 10. Students who passed are in intervals $[10-14)$, $[14-17)$, and $[17-20]$, which sum to $13 + 11 + 5 = 29$. Since $29$ is more than half of $36$, the majority passed.",
    category: "Statistics",
    topics: ["Data Interpretation"]
  },
  {
    id: "est1_2026_may_21",
    question: "A square sheet of metal with a perimeter of 200 cm was cut $x$ cm from each of its four corners, and the flaps were folded up to make an open-top box with a volume of 5808 cm³.\n\nWhat is the surface area of the resulting box?",
    options: ["a. 2464", "b. 2776", "c. 2580", "d. 2340"],
    correctAnswer: 0,
    explanation: "The perimeter of the square sheet is 200 cm, so each side is $200 / 4 = 50$ cm. After cutting $x$ cm from each corner, the dimensions of the base of the box are $(50-2x) \\times (50-2x)$ and the height is $x$. The volume is:\n\n$$V = x(50-2x)^2 = 5808$$ Solving for $x$, we find $x = 3$ is a solution: $3(44)^2 = 3(1936) = 5808$. The surface area of the box is the area of the original square minus the four cut corners:\n\n$$SA = 50^2 - 4(x^2) = 2500 - 4(3^2) = 2500 - 36 = 2464 \\text{ cm}^2$$",
    category: "Geometry",
    topics: ["Surface Area", "Volume"]
  },
  {
    id: "est1_2026_may_22",
    question: "Consider the function:\n\n$$f(x) = -5x^4 + 3x^3$$\n\nWhich of the following statements is/are true?\n\nI. As $x$ approaches $-\\infty$, $f(x)$ approaches $\\infty$.\n\nII. As $x$ approaches $-\\infty$, $f(x)$ approaches $-\\infty$.\n\nIII. The graph of $f(x)$ passes through the origin.",
    options: ["a. I only", "b. I and II", "c. I, II and III", "d. II and III"],
    correctAnswer: 3,
    explanation: "The leading term of the polynomial is $-5x^4$. Since the degree (4) is even and the leading coefficient ($-5$) is negative, as $x \\to \\pm\\infty$, the leading term $-5x^4 \\to -\\infty$. Thus, statement I is false and statement II is true. Substituting $x = 0$ gives $f(0) = 0$, so the graph passes through the origin, making statement III true. Therefore, statements II and III are true.",
    category: "Functions",
    topics: ["Polynomials", "End Behavior"]
  }
];
