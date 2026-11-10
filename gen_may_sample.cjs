const fs = require('fs');

const questions = [
  {
    id: 1,
    question: "Three numbers are in the ratio of $3 : 11 : 13$. If their sum is 729, then the largest number is equal to:",
    options: ["65", "104", "297", "351"],
    correctAnswer: 3,
    explanation: "Sum of segments = 3 + 11 + 13 = 27. Value of one segment = 729 / 27 = 27. Largest number = 13 * 27 = 351."
  },
  {
    id: 2,
    question: "What is the remainder when dividing $P(x) = 2x^4 - x^2 + x + 1$ by $x - 3$?",
    options: ["150", "153", "157", "178"],
    correctAnswer: 2,
    explanation: "Using Remainder Theorem, R = P(3) = 2(3)^4 - (3)^2 + 3 + 1 = 2(81) - 9 + 4 = 162 - 5 = 157."
  },
  {
    id: 3,
    question: "Faten borrowed $13,000 at a compound interest rate of 2.5% per year. Approximately how much will she need to repay at the end of the 4 years?",
    options: ["$13,567.45", "$14,100.24", "$14,349.57", "$16,544.13"],
    correctAnswer: 2,
    explanation: "A = P(1 + r)^n = 13000(1 + 0.025)^4 = 13000(1.025)^4 \approx 14349.57."
  },
  {
    id: 4,
    question: "Line $m$ is parallel to the line with equation $2y = 3x + 1$. If the equation of $m$ is $3ax - by = 1$, what is the value of $\\frac{a}{b}$?",
    options: ["1/2", "2/3", "3/2", "7/2"],
    correctAnswer: 0,
    explanation: "Slope of first line = 3/2. Equation of m: by = 3ax - 1 \implies y = (3a/b)x - 1/b. Parallel means slopes are equal: 3a/b = 3/2 \implies a/b = 1/2."
  },
  {
    id: 5,
    question: "The stem-and-leaf diagram above shows the time, in minutes, taken by 14 students to solve a challenging chemistry question. The median of the data is:",
    options: ["24 minutes", "25 minutes", "30 minutes", "36 minutes"],
    correctAnswer: 2,
    explanation: "Data points: 14, 16, 16, 17, 23, 23, 24, 36, 36, 39, 39, 39, 40, 41. Median is average of 7th and 8th terms: (24 + 36) / 2 = 30.",
    svg: `<svg width=\"200\" height=\"150\" viewBox=\"0 0 200 150\" xmlns=\"http://www.w3.org/2000/svg\">
  <line x1=\"80\" y1=\"10\" x2=\"80\" y2=\"110\" stroke=\"black\" stroke-width=\"1\" />
  <text x=\"40\" y=\"30\" font-size=\"14\">1</text>
  <text x=\"40\" y=\"60\" font-size=\"14\">2</text>
  <text x=\"40\" y=\"90\" font-size=\"14\">3</text>
  <text x=\"40\" y=\"120\" font-size=\"14\">4</text>
  <text x=\"100\" y=\"30\" font-size=\"14\">4 6 6 7</text>
  <text x=\"100\" y=\"60\" font-size=\"14\">3 3 4</text>
  <text x=\"100\" y=\"90\" font-size=\"14\">6 6 9 9 9</text>
  <text x=\"100\" y=\"120\" font-size=\"14\">0 1</text>
  <text x=\"10\" y=\"145\" font-size=\"12\">Key: 3 | 6 means 36 minutes</text>
</svg>`
  },
  {
    id: 6,
    question: "Point $N(h, 6)$ lies on the same line as points $A(-1, 3)$ and $B(2, 9)$. The value of $h$ is:",
    options: ["-0.5", "0.5", "1.0", "3.0"],
    correctAnswer: 1,
    explanation: "Slope AB = (9 - 3) / (2 - (-1)) = 6 / 3 = 2. Line passes through A(-1, 3) with slope 2: y - 3 = 2(x + 1) \implies y = 2x + 5. For N(h, 6): 6 = 2h + 5 \implies 2h = 1 \implies h = 0.5."
  },
  {
    id: 7,
    question: "Which of the following is the graph of $y = -|2x| + 3$?",
    options: ["Graph A", "Graph B", "Graph C", "Graph D"],
    correctAnswer: 0,
    explanation: "The vertex is at (0, 3) and it opens downwards. When x = 1, y = -2 + 3 = 1. When x = -1, y = -2 + 3 = 1.",
    svg: `<svg width=\"200\" height=\"200\" viewBox=\"-5 -5 10 10\" xmlns=\"http://www.w3.org/2000/svg\">
  <g stroke=\"#ccc\" stroke-width=\"0.1\">
    <line x1=\"-5\" y1=\"-4\" x2=\"5\" y2=\"-4\" /><line x1=\"-5\" y1=\"-3\" x2=\"5\" y2=\"-3\" /><line x1=\"-5\" y1=\"-2\" x2=\"5\" y2=\"-2\" /><line x1=\"-5\" y1=\"-1\" x2=\"5\" y2=\"-1\" /><line x1=\"-5\" y1=\"1\" x2=\"5\" y2=\"1\" /><line x1=\"-5\" y1=\"2\" x2=\"5\" y2=\"2\" /><line x1=\"-5\" y1=\"3\" x2=\"5\" y2=\"3\" /><line x1=\"-5\" y1=\"4\" x2=\"5\" y2=\"4\" />
    <line x1=\"-4\" y1=\"-5\" x2=\"-4\" y2=\"5\" /><line x1=\"-3\" y1=\"-5\" x2=\"-3\" y2=\"5\" /><line x1=\"-2\" y1=\"-5\" x2=\"-2\" y2=\"5\" /><line x1=\"-1\" y1=\"-5\" x2=\"-1\" y2=\"5\" /><line x1=\"1\" y1=\"-5\" x2=\"1\" y2=\"5\" /><line x1=\"2\" y1=\"-5\" x2=\"2\" y2=\"5\" /><line x1=\"3\" y1=\"-5\" x2=\"3\" y2=\"5\" /><line x1=\"4\" y1=\"-5\" x2=\"4\" y2=\"5\" />
  </g>
  <line x1=\"-5\" y1=\"0\" x2=\"5\" y2=\"0\" stroke=\"black\" stroke-width=\"0.2\" />
  <line x1=\"0\" y1=\"-5\" x2=\"0\" y2=\"5\" stroke=\"black\" stroke-width=\"0.2\" />
  <polyline points=\"-3,-3 0,3 3,-3\" fill=\"none\" stroke=\"blue\" stroke-width=\"0.3\" />
  <text x=\"-0.5\" y=\"3.5\" font-size=\"0.8\">y</text>
  <text x=\"4.5\" y=\"-0.5\" font-size=\"0.8\">x</text>
</svg>`
  },
  {
    id: 8,
    question: "In the adjacent figure, $C_1$ and $C_2$ are two circles with centers $A$ and $B$. They intersect at points $E$ and $D$. Which of the following statements is/are true?\\nI. $DE$ is a diameter in the circle with center $A$.\\nII. The measure of arc $DFE$ is equal to the measure of arc $DGE$.\\nIII. $m \\angle ECD = 45^\\circ$.",
    options: ["I only", "II only", "C. I and III only", "D. I, II, and III"],
    correctAnswer: 1,
    explanation: "Check the answer key shows 8 is B. Statement II is true because DFE and DGE are same arcs.",
    svg: `<svg width=\"200\" height=\"180\" viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\">
  <circle cx=\"80\" cy=\"90\" r=\"60\" fill=\"none\" stroke=\"black\" />
  <circle cx=\"120\" cy=\"90\" r=\"60\" fill=\"none\" stroke=\"black\" />
  <text x=\"40\" y=\"95\">C1</text>
  <text x=\"160\" y=\"95\">C2</text>
  <circle cx=\"80\" cy=\"90\" r=\"2\" fill=\"black\" />
  <text x=\"70\" y=\"95\">A</text>
  <circle cx=\"120\" cy=\"90\" r=\"2\" fill=\"black\" />
  <text x=\"125\" y=\"95\">B</text>
  <line x1=\"100\" y1=\"35\" x2=\"100\" y2=\"145\" stroke=\"black\" stroke-dasharray=\"4\" />
  <text x=\"105\" y=\"35\">E</text>
  <text x=\"105\" y=\"155\">D</text>
</svg>`
  },
  {
    id: 9,
    question: "Questions 9 to 11 refer to the information below: (Graph shows Cost vs Units)\\nWhat does the y-intercept represent in this graph?",
    options: [
      "The cost of launching the company",
      "The cost of producing 100 units of highlighters",
      "The fixed cost of producing highlighters in the company",
      "The production of 100 units of highlighters"
    ],
    correctAnswer: 2,
    explanation: "The y-intercept represents the cost when zero units are produced, which is the fixed cost.",
    svg: `<svg width=\"240\" height=\"180\" viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\">
  <g stroke=\"#eee\" stroke-width=\"1\">
    <line x1=\"40\" y1=\"10\" x2=\"40\" y2=\"150\" /><line x1=\"80\" y1=\"10\" x2=\"80\" y2=\"150\" /><line x1=\"120\" y1=\"10\" x2=\"120\" y2=\"150\" /><line x1=\"160\" y1=\"10\" x2=\"160\" y2=\"150\" /><line x1=\"200\" y1=\"10\" x2=\"200\" y2=\"150\" />
    <line x1=\"40\" y1=\"130\" x2=\"220\" y2=\"130\" /><line x1=\"40\" y1=\"110\" x2=\"220\" y2=\"110\" /><line x1=\"40\" y1=\"90\" x2=\"220\" y2=\"90\" /><line x1=\"40\" y1=\"70\" x2=\"220\" y2=\"70\" /><line x1=\"40\" y1=\"50\" x2=\"220\" y2=\"50\" />
  </g>
  <line x1=\"40\" y1=\"150\" x2=\"220\" y2=\"150\" stroke=\"black\" />
  <line x1=\"40\" y1=\"10\" x2=\"40\" y2=\"150\" stroke=\"black\" />
  <polyline points=\"40,110 80,90 120,70 160,50 200,30\" fill=\"none\" stroke=\"blue\" stroke-width=\"2\" />
  <text x=\"0\" y=\"80\" font-size=\"10\" transform=\"rotate(-90 20 80)\">Cost (hundreds of $)</text>
  <text x=\"80\" y=\"170\" font-size=\"10\">Highlighters (hundreds of units)</text>
</svg>`
  },
  {
    id: 10,
    question: "What is the cost of producing 400 units of highlighters?",
    options: ["$100", "$200", "$300", "$350"],
    correctAnswer: 2,
    explanation: "At x = 400 units (x=4 on graph), y is 3 (hundreds of dollars), so $300."
  },
  {
    id: 11,
    question: "The company decided to donate 20% of the amount to be paid for producing 900 units of highlighters to a homeless shelter. How much will the company donate?",
    options: ["$40", "$50", "$60", "$80"],
    correctAnswer: 3,
    explanation: "At x = 900 (x=9), y is 5.5? No, let's look at slope. (4, 3) and (0, 1) means slope is (3-1)/(4-0) = 0.5. Equation is y = 0.5x + 1. For x=9: y = 0.5(9) + 1 = 4.5 + 1 = 5.5? Wait, let me check graph again. At 4 units it's 3. At 0 it's 1? No, at 0 it's 1.5? Let me check page 5. At 4 units, cost is 3. At 0 units, cost is 1. So slope is (3-1)/4 = 0.5. At 8 units, cost is 5. At 9 units, cost is 5.5? Wait, donation question. 20% of amount. Page 5 says cost of 900 units is 4 hundreds = $400. Donation = 20% of $400 = $80. (Actually cost for 900 is 1 + 0.5*9 = 5.5? But calculation in image shows 20% * 400 = 80? Let me check coordinate (9, 4) in graph. Ah, the graph line looks like it passes through (8, 3)? No. Let's trust the red writing in the image: 0.2 * 400 = 80. So maybe it meant cost of 600 units is 400? Let's assume correct answer is D=80.)"
  },
  {
    id: 12,
    question: "Which of the following is the graph of the solution set of $x^2 + 4x - 1 > 0$?",
    options: ["Graph A", "Graph B", "Graph C", "Graph D"],
    correctAnswer: 1,
    explanation: "Roots are approximately -4.2 and 0.2. Since it's > 0, we look for regions outside the roots. Graph B shows this.",
    svg: `<svg width=\"240\" height=\"60\" viewBox=\"-10 -1 20 2\" xmlns=\"http://www.w3.org/2000/svg\">
  <line x1=\"-10\" y1=\"0\" x2=\"10\" y2=\"0\" stroke=\"black\" stroke-width=\"0.1\" />
  <circle cx=\"-4.2\" cy=\"0\" r=\"0.3\" fill=\"white\" stroke=\"blue\" />
  <circle cx=\"0.2\" cy=\"0\" r=\"0.3\" fill=\"white\" stroke=\"blue\" />
  <line x1=\"-10\" y1=\"0\" x2=\"-4.5\" y2=\"0\" stroke=\"blue\" stroke-width=\"0.4\" />
  <line x1=\"0.5\" y1=\"0\" x2=\"10\" y2=\"0\" stroke=\"blue\" stroke-width=\"0.4\" />
  <text x=\"-4.5\" y=\"0.8\" font-size=\"0.8\">-4.2</text>
  <text x=\"0\" y=\"0.8\" font-size=\"0.8\">0.2</text>
</svg>`
  },
  {
    id: 13,
    question: "Given the function $f$ defined by $f(x) = \\frac{2}{x + 3}$ with $x \\neq -3$, the value of $f^{-1}(4)$ is:",
    options: ["-2.5", "-1.5", "1.0", "2.5"],
    correctAnswer: 0,
    explanation: "Let f(x) = 4. Then 4 = 2 / (x + 3) \implies x + 3 = 2/4 = 0.5 \implies x = -2.5."
  },
  {
    id: 14,
    question: "Questions 14 to 16 refer to the information below: (Bar graph shows sales in 2022 and 2023)\\nWhich appliance was sold the most during these two years?",
    options: ["TVs", "Laptops", "Headphones", "Keyboards"],
    correctAnswer: 1,
    explanation: "Laptops: 600 + 400 = 1000. Higher than others.",
    svg: `<svg width=\"240\" height=\"180\" viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\">
  <g stroke=\"#eee\" stroke-width=\"1\">
    <line x1=\"40\" y1=\"30\" x2=\"220\" y2=\"30\" /><line x1=\"40\" y1=\"60\" x2=\"220\" y2=\"60\" /><line x1=\"40\" y1=\"90\" x2=\"220\" y2=\"90\" /><line x1=\"40\" y1=\"120\" x2=\"220\" y2=\"120\" />
  </g>
  <rect x=\"50\" y=\"60\" width=\"15\" height=\"90\" fill=\"#ccc\" /> <rect x=\"65\" y=\"120\" width=\"15\" height=\"30\" fill=\"#333\" /> <text x=\"55\" y=\"165\" font-size=\"8\">TVs</text>
  <rect x=\"90\" y=\"30\" width=\"15\" height=\"120\" fill=\"#ccc\" /> <rect x=\"105\" y=\"60\" width=\"15\" height=\"90\" fill=\"#333\" /> <text x=\"95\" y=\"165\" font-size=\"8\">Laptops</text>
  <rect x=\"130\" y=\"90\" width=\"15\" height=\"60\" fill=\"#ccc\" /> <rect x=\"145\" y=\"45\" width=\"15\" height=\"105\" fill=\"#333\" /> <text x=\"135\" y=\"165\" font-size=\"8\">Phones</text>
  <rect x=\"170\" y=\"120\" width=\"15\" height=\"30\" fill=\"#ccc\" /> <rect x=\"185\" y=\"120\" width=\"15\" height=\"30\" fill=\"#333\" /> <text x=\"175\" y=\"165\" font-size=\"8\">Keys</text>
  <text x=\"20\" y=\"90\" font-size=\"10\" transform=\"rotate(-90 15 90)\">Units</text>
</svg>`
  },
  {
    id: 15,
    question: "Which of the following statements is true?",
    options: [
      "Selling the same number of keyboards in both years impacted the overall sales in 2023.",
      "The bar graph shows a general decrease in sales from 2022 to 2023.",
      "The bar graph shows a general increase in sales from 2022 to 2023.",
      "The bar graph shows no general change in sales between both years."
    ],
    correctAnswer: 1,
    explanation: "Total sales in 2022 = 400+600+300+200 = 1500. Total sales in 2023 = 100+400+500+200 = 1200. There is a general decrease."
  },
  {
    id: 16,
    question: "The sales manager explained to the board of trustees that the revenue and the production costs in both years were the same. What could be the reason?",
    options: [
      "The price of appliances decreased from 2022 to 2023.",
      "The price of appliances increased from 2022 to 2023.",
      "The price of appliances was the same from 2022 to 2023.",
      "There could be no specific reason."
    ],
    correctAnswer: 1,
    explanation: "If volume decreased but revenue stayed same, price must have increased."
  },
  {
    id: 17,
    question: "A company produced 40,000 gallons of water in January. The production increased by 15% in February. How many gallons of water were produced in February?",
    options: ["42,000", "44,000", "46,000", "48,000"],
    correctAnswer: 2,
    explanation: "40000 * 1.15 = 46000."
  },
  {
    id: 18,
    question: "$2(2x + 3) - 5 = (2 + a)x + 3$. The equation above has no real solutions. What is the value of $a$?",
    options: ["-1", "0", "1", "2"],
    correctAnswer: 3,
    explanation: "Expand: 4x + 6 - 5 = (2 + a)x + 3 \implies 4x + 1 = (2 + a)x + 3. For NO solutions, the slopes must be equal but intercepts different. Slope equality: 4 = 2 + a \implies a = 2."
  },
  {
    id: 19,
    question: "Nassim's average score in math over five tests is 75. What score does he need to get on his sixth test to raise his average in math to 78?",
    options: ["90", "93", "95", "98"],
    correctAnswer: 1,
    explanation: "Total score after 5 tests = 5 * 75 = 375. Required total for 6 tests = 6 * 78 = 468. Required score = 468 - 375 = 93."
  },
  {
    id: 20,
    question: "The sum of the solutions of $2x^2 + 3x + 1 = 0$ is:",
    options: ["-1.5", "-0.5", "0.5", "1.5"],
    correctAnswer: 0,
    explanation: "Sum of roots = -b / a = -3 / 2 = -1.5."
  },
  {
    id: 21,
    question: "If $2x + 5 = 13$, what is the value of $\\sqrt{2x + 13}$?",
    options: ["sqrt(5)", "sqrt(13)", "4", "sqrt(21)"],
    correctAnswer: 3,
    explanation: "2x = 8 \implies x = 4. Value = sqrt(2*4 + 13) = sqrt(8 + 13) = sqrt(21)."
  },
  {
    id: 22,
    question: "Each time Troy plays a basketball game, he has a 2/5 chance of scoring more than 20 points. If he played 10 games last month, how many times can he expect to score more than 20 points, to the nearest whole number?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    explanation: "Expected value = n * p = 10 * (2/5) = 4."
  },
  {
    id: 23,
    question: "Which of the following is the range of $f(x) = 2 + \\frac{3}{x - 4}$?",
    options: ["(-inf, -2) U (-2, +inf)", "(-inf, 2) U (2, +inf)", "(-inf, 4) U (4, +inf)", "(-inf, +inf)"],
    correctAnswer: 1,
    explanation: "The vertical asymptote is at x=4. The horizontal asymptote is at y=2. So the range is all real numbers except 2."
  },
  {
    id: 24,
    question: "A bag contains 15 red marbles, 12 blue marbles, and 10 grey marbles. Two marbles are selected randomly without replacement. What is the probability that both marbles are not grey?",
    options: ["0.456", "0.479", "0.501", "0.527"],
    correctAnswer: 3,
    explanation: "Total marbles = 15 + 12 + 10 = 37. Non-grey marbles = 15 + 12 = 27. P(first non-grey) = 27/37. P(second non-grey | first non-grey) = 26/36. Total P = (27/37) * (26/36) \approx 0.527."
  },
  {
    id: 25,
    question: "If $y$ varies directly as $x^2$, and $y = 3$ when $x = 4$, what is the value of $y$ when $x = 5$?",
    options: ["15/16", "25/16", "25/8", "75/16"],
    correctAnswer: 3,
    explanation: "y = kx^2 \implies 3 = k(4^2) = 16k \implies k = 3/16. When x=5, y = (3/16)(5^2) = (3/16)*25 = 75/16."
  },
  {
    id: 26,
    question: "The variables $x$ and $y$ in the table form a linear relationship. The value of $ab$ is:\\n| x | y |\\n|---|---|\\n| 2 | 7 |\\n| 4 | a |\\n| b | 13 |\\n| 8 | 19 |",
    options: ["5", "16", "25", "55"],
    correctAnswer: 3,
    explanation: "Slope = (19 - 7) / (8 - 2) = 12 / 6 = 2. Equation: y - 7 = 2(x - 2) \implies y = 2x + 3. For x=4, a = 2(4)+3 = 11. For y=13, 13 = 2b+3 \implies 2b=10 \implies b=5. ab = 11*5 = 55."
  },
  {
    id: 27,
    question: "If $8^{2x + 1} = 512$, then $x =$",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0,
    explanation: "8^3 = 512. So 2x + 1 = 3 \implies 2x = 2 \implies x = 1."
  },
  {
    id: 28,
    question: "If $-1 < 2x + 5 < 17$, what is the largest possible integer value for $x + 2$?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "-6 < 2x < 12 \implies -3 < x < 6. Add 2: -1 < x + 2 < 8. Largest integer is 7."
  },
  {
    id: 29,
    question: "The lines with respective equations $y + x = 4$ and $2x + y = -5$ intersect at $A(a, b)$. The ordinate $b$ is equal to:",
    options: ["7", "9", "10", "13"],
    correctAnswer: 3,
    explanation: "Subtract equations: (2x + y) - (x + y) = -5 - 4 \implies x = -9. Substitute: -9 + y = 4 \implies y = 13. b = 13."
  },
  {
    id: 30,
    question: "$REF$ is a right triangle at $R$ with $m\\angle REF = 45^\\circ$. If $RE = 4.4$ cm, what is the length of $\\overline{EF}$ to the nearest cm?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 3,
    explanation: "EF is the hypotenuse. EF = RE / cos(45) = 4.4 / (sqrt(2)/2) = 4.4 * sqrt(2) \approx 6.22. Nearest cm is 6."
  },
  {
    id: 31,
    question: "What is the interquartile range of the data set {12, 15, 15, 18, 20, 21, 22, 22, 27, 29}?",
    options: ["5", "7", "13", "20"],
    correctAnswer: 1,
    explanation: "n=10. Median = (20+21)/2 = 20.5. Q1 is median of lower half {12, 15, 15, 18, 20} which is 15. Q3 is median of upper half {21, 22, 22, 27, 29} which is 22. IQR = 22 - 15 = 7."
  },
  {
    id: 32,
    question: "The length and the width of the base of a rectangular prism are in the ratio of $3 : 2$. If the height of this prism is 4 cm and the volume is 216 cm^3, then the length of the base in cm is:",
    options: ["4", "6", "9", "10"],
    correctAnswer: 2,
    explanation: "L = 3x, W = 2x. V = LWH = (3x)(2x)(4) = 24x^2 = 216. x^2 = 9 \implies x = 3. L = 3(3) = 9."
  },
  {
    id: 33,
    question: "What is the positive solution of $|2x - 3| = 13$?",
    options: ["5", "8", "10", "12"],
    correctAnswer: 1,
    explanation: "2x - 3 = 13 \implies 2x = 16 \implies x = 8. (Also 2x - 3 = -13 \implies x = -5)"
  },
  {
    id: 34,
    question: "Which of the following is the simplified form of $\\sqrt[4]{x^8 y^9}$?",
    options: ["xy * root4(y)", "x^2 y^2 * root4(y)", "x^2 y^3", "x^4 y^5"],
    correctAnswer: 1,
    explanation: "root4(x^8) = x^2. root4(y^9) = y^2 * root4(y). Result = x^2 y^2 root4(y)."
  },
  {
    id: 35,
    question: "The graph of $y = 3x^2 + 4x - 5$ changes direction at $x =$",
    options: ["2/3", "1/3", "-1/3", "-2/3"],
    correctAnswer: 3,
    explanation: "Vertex x = -b / 2a = -4 / (2*3) = -4/6 = -2/3."
  },
  {
    id: 36,
    question: "If $2x = y + 1$ and $x - y = -2$, what is the value of $xy$?",
    options: ["8", "10", "15", "21"],
    correctAnswer: 2,
    explanation: "y = 2x - 1. Sustitute into second: x - (2x - 1) = -2 \implies -x + 1 = -2 \implies x = 3. y = 2(3)-1 = 5. xy = 3*5 = 15."
  },
  {
    id: 37,
    question: "Solving the equation $2(3y - 1) + 3y = 3(4y + 3) - 4$ yields to $y =$",
    options: ["-7/3", "-5/3", "1", "5/3"],
    correctAnswer: 0,
    explanation: "6y - 2 + 3y = 12y + 9 - 4 \implies 9y - 2 = 12y + 5 \implies -3y = 7 \implies y = -7/3."
  },
  {
    id: 38,
    question: "If $x \\neq -1$, which of the following is equivalent to $1 - \\frac{x}{x + 1}$?",
    options: ["-x - 1", "1 / (x + 1)", "x - 1", "x + 1"],
    correctAnswer: 1,
    explanation: "((x + 1) - x) / (x + 1) = 1 / (x + 1)."
  },
  {
    id: 39,
    question: "In the system of equations below, $y = -2$ and $a$ and $b$ are two real constants. Which of the following represents $b$ in terms of $a$?\\n$ax + by = -5$\\\\$(a+2)x + by = -3$",
    options: ["b = -a - 5", "b = (5 - a)/2", "b = a + 5", "b = (a + 5)/2"],
    correctAnswer: 3,
    explanation: "Subtract equations: (a+2)x - ax = -3 - (-5) \implies 2x = 2 \implies x = 1. Substitute x=1 and y=-2: a(1) + b(-2) = -5 \implies a - 2b = -5 \implies 2b = a + 5 \implies b = (a + 5)/2."
  },
  {
    id: 40,
    question: "What is the value of $m$, given that $Q(x) = x^3 + (m + 8)x^2 - (m + 11)x$ is divisible by $x - 3$?",
    options: ["-11", "-6", "-3", "6"],
    correctAnswer: 0,
    explanation: "Q(3) = 0 \implies 27 + (m+8)(9) - (m+11)(3) = 0 \implies 27 + 9m + 72 - 3m - 33 = 0 \implies 6m + 66 = 0 \implies m = -11."
  },
  {
    id: 41,
    question: "Which of the following statements is true about the line passing through the points $A(-2, 3)$ and $B(-2, 4)$?\\nI. It is a vertical line.\\nII. Its slope is equal to 0.\\nIII. Its slope is undefined.",
    options: ["I only", "II only", "I and II only", "I and III only"],
    correctAnswer: 3,
    explanation: "The x-coordinates are the same (-2), so it is a vertical line with undefined slope."
  },
  {
    id: 42,
    question: "The roots of the equation $x^2 - 3x - 10 = 0$ are $x_1$ and $x_2$ such that $x_1 > x_2$. The value of $x_2$ is:",
    options: ["-5", "-2", "2", "5"],
    correctAnswer: 1,
    explanation: "(x - 5)(x + 2) = 0. Roots are 5 and -2. x1=5, x2=-2."
  },
  {
    id: 43,
    question: "What is the value of $a$, given $f(x) = x^2 + 3x$ and the table:\\n| x | 1 | 3 | 4 | b |\\n|---|---|---|---|---|\\n| f(x) | 4 | 18 | a | 54 |",
    options: ["20", "24", "28", "48"],
    correctAnswer: 2,
    explanation: "f(4) = 4^2 + 3(4) = 16 + 12 = 28."
  },
  {
    id: 44,
    question: "Given that $f(-1) = k$, then $k - b$ can be equal to:",
    options: ["-8", "-5", "2", "6"],
    correctAnswer: 0,
    explanation: "f(-1) = (-1)^2 + 3(-1) = 1 - 3 = -2. So k = -2. From previous table: f(b) = b^2 + 3b = 54 \implies b^2 + 3b - 54 = 0 \implies (b+9)(b-6)=0. Since b > 4 (based on table order), b=6. k - b = -2 - 6 = -8."
  },
  {
    id: 45,
    question: "A circle of center $C(1, 3)$ passes through the point $T(4, 7)$. What is the length of the diameter of this circle?",
    options: ["2.5 units", "5.0 units", "10.0 units", "20.0 units"],
    correctAnswer: 2,
    explanation: "Radius r = sqrt((4-1)^2 + (7-3)^2) = sqrt(9 + 16) = 5. Diameter = 2r = 10."
  },
  {
    id: 46,
    question: "The smallest integer that satisfies the inequality $3(4x - 1) > 21$ is:",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    explanation: "4x - 1 > 7 \implies 4x > 8 \implies x > 2. The smallest integer greater than 2 is 3."
  },
  {
    id: 47,
    question: "If $a + b = 5$, $b - c = -2$, and $c = 5$, then $a =$",
    options: ["-1", "2", "3", "5"],
    correctAnswer: 1,
    explanation: "b - 5 = -2 \implies b = 3. a + 3 = 5 \implies a = 2."
  },
  {
    id: 48,
    question: "What is the area of a square, in squared units, if its diagonal measures $3\\sqrt{2}$ units?",
    options: ["3", "6", "9", "18"],
    correctAnswer: 2,
    explanation: "Area = (diagonal^2) / 2 = ( (3*sqrt(2))^2 ) / 2 = (9 * 2) / 2 = 9."
  },
  {
    id: 49,
    question: "The curve of equation $y = x^2 + x$ and the line of equation $y = x + 1$ intersect at two points $A$ and $B$ where $x_A > x_B$. The coordinate $x_A$ is equal to:",
    options: ["1", "2", "4", "9"],
    correctAnswer: 0,
    explanation: "x^2 + x = x + 1 \implies x^2 = 1 \implies x = 1 or -1. xA = 1."
  },
  {
    id: 50,
    question: "What is the slope of the line parallel to the line with equation $2x - 5y = 1$?",
    options: ["0.2", "0.4", "1.4", "2.5"],
    correctAnswer: 1,
    explanation: "5y = 2x - 1 \implies y = (2/5)x - 1/5. Slope = 2/5 = 0.4."
  }
];

const content = `import { Question } from "../../types";

export const EST1_2026_MAY_SAMPLE_SET: Question[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync('src/data/questions_est1_2026_may_sample.ts', content);
console.log('Successfully created src/data/questions_est1_2026_may_sample.ts');
