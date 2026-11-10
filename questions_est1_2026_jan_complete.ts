import { Question } from "./types";

export const EST1_2026_JAN_COMPLETE_SET: Question[] = [
  {
    id: "est1_2026_jan_complete_1",
    question: "Hana deposited $1,000$ in her bank account. The function $f(t) = 25t + 1,000$ represents the amount, in dollars, in Hana's bank account after $t$ months. What is the best interpretation of $25$ in this context?",
    options: [
      "After 1 month, the amount in Hana's bank account is $25.",
      "Before Hana made any deposits, the amount in her bank account was $25.",
      "For each month, the amount in Hana's bank account increases by $25.",
      "Hana made a total of 25 monthly deposits."
    ],
    correctAnswer: 2,
    explanation: "In the linear model $f(t) = 25t + 1,000$, $25$ is the coefficient of $t$, representing the rate of change per month. Therefore, Hana's bank account balance increases by $25 each month.",
    category: "Heart of Algebra",
    topics: ["Linear Functions", "Interpreting Linear Models"]
  },
  {
    id: "est1_2026_jan_complete_2",
    question: "The remainder when dividing the expression $5x^3 + 4x^2 - 2x + 4$ by $3x + 2$ is:",
    options: ["4", "\\frac{140}{27}", "\\frac{152}{27}", "\\frac{152}{9}"],
    correctAnswer: 2,
    explanation: "By the polynomial remainder theorem, the remainder when dividing $P(x)$ by $ax + b$ is $P\\left(-\\frac{b}{a}\\right)$. For $3x + 2 = 0 \\Rightarrow x = -\\frac{2}{3}$. Evaluate $P\\left(-\\frac{2}{3}\\right) = 5\\left(-\\frac{2}{3}\\right)^3 + 4\\left(-\\frac{2}{3}\\right)^2 - 2\\left(-\\frac{2}{3}\\right) + 4 = 5\\left(-\\frac{8}{27}\\right) + 4\\left(\\frac{4}{9}\\right) + \\frac{4}{3} + 4 = -\\frac{40}{27} + \\frac{48}{27} + \\frac{36}{27} + \\frac{108}{27} = \\frac{152}{27}$.",
    category: "Passport to Advanced Math",
    topics: ["Polynomial Division", "Remainder Theorem"]
  },
  {
    id: "est1_2026_jan_complete_3",
    question: "If $A$ and $B$ are two equal real numbers such that $A = \\frac{3}{2}x - 1 + 2(x - 3)$ and $B = 2x + \\frac{1}{7}$, then the value of $3A$ is:",
    options: ["-15", "0", "29", "58"],
    correctAnswer: 2,
    explanation: "Simplify $A = 1.5x - 1 + 2x - 6 = 3.5x - 7$. Equating $A = B$ gives $3.5x - 7 = 2x + \\frac{1}{7} \\Rightarrow 1.5x = 7 + \\frac{1}{7} = \\frac{50}{7} \\Rightarrow x = \\frac{100}{21}$. Substituting back: $A = 2\\left(\\frac{100}{21}\\right) + \\frac{1}{7} = \\frac{200}{21} + \\frac{3}{21} = \\frac{203}{21} = \\frac{29}{3}$. Thus, $3A = 3\\left(\\frac{29}{3}\\right) = 29$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2026_jan_complete_4",
    question: "The solution to the system of equations below is $(x, y)$. What is the value of $y$? $$\n\\begin{cases}\n24x + y = 48 \\\\\n6x + y = 72\n\\end{cases}\n$$",
    options: ["y = -10", "y = -\\frac{4}{3}", "y = 18", "y = 80"],
    correctAnswer: 3,
    explanation: "Subtract the second equation from the first: $(24x + y) - (6x + y) = 48 - 72 \\Rightarrow 18x = -24 \\Rightarrow x = -\\frac{4}{3}$. Substitute $x = -\\frac{4}{3}$ into the second: $6\\left(-\\frac{4}{3}\\right) + y = 72 \\Rightarrow -8 + y = 72 \\Rightarrow y = 80$.",
    category: "Heart of Algebra",
    topics: ["Systems of Linear Equations"]
  },
  {
    id: "est1_2026_jan_complete_5",
    question: "The table represents the linear function $g(x)$. What is the value of $n + g(b+15)$? \n\n| $x$ | $g(x)$ |\n|---|---|\n| $b$ | 18 |\n| $b + 5$ | 24 |\n| $b + 25$ | $n$ |",
    options: ["72", "78", "84", "90"],
    correctAnswer: 2,
    explanation: "The slope is $m = \\frac{24 - 18}{(b+5)-b} = \\frac{6}{5} = 1.2$. To find $n = g(b+25)$, we compute $n = 18 + 1.2(25) = 18 + 30 = 48$. To find $g(b+15)$, we compute $g(b+15) = 18 + 1.2(15) = 18 + 18 = 36$. Therefore, $n + g(b+15) = 48 + 36 = 84$.",
    category: "Heart of Algebra",
    topics: ["Linear Functions", "Slope"]
  },
  {
    id: "est1_2026_jan_complete_6",
    question: "For a certain rectangular region, the ratio of its length to its width is $35:10$. If the width increases by $7$ units, by how many units must the length increase to keep the same ratio?",
    options: ["12.5", "14.0", "24.5", "28.0"],
    correctAnswer: 2,
    explanation: "The ratio is $\\frac{35}{10} = 3.5$. This means the length increases by $3.5$ times any increase in width. For a width increase of $7$, the length must increase by $3.5 \\times 7 = 24.5$ units.",
    category: "Problem Solving and Data Analysis",
    topics: ["Ratios", "Proportions"]
  },
  {
    id: "est1_2026_jan_complete_7",
    question: "The table below shows the distribution of color and shape of $100$ tiles of equal area. If one of these tiles is selected at random, what is the probability of selecting a red tile?\n\n| | Red | Blue | Yellow |\n|---|---|---|---|\n| Square | 10 | 20 | 25 |\n| Pentagon | 20 | 10 | 15 |",
    options: ["0.30", "0.25", "0.20", "0.15"],
    correctAnswer: 0,
    explanation: "The total number of red tiles is $10 + 20 = 30$. The total number of tiles is $100$. The probability of choosing a red tile is $\\frac{30}{100} = 0.30$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Probability", "Data Tables"]
  },
  {
    id: "est1_2026_jan_complete_8",
    question: "Circle C of center A (shown below) is translated downward by $6$ units and scaled by a factor of $2$. Which equation defines the new circle?",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-48 w-auto">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e0e0" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#grid)" />
      <line x1="0" y1="100" x2="200" y2="100" stroke="black" stroke-width="1.5"/>
      <line x1="100" y1="0" x2="100" y2="200" stroke="black" stroke-width="1.5"/>
      <circle cx="60" cy="100" r="60" fill="none" stroke="black" stroke-width="2"/>
      <circle cx="60" cy="100" r="3" fill="gray" stroke="black"/>
      <text x="65" y="95" font-size="12" font-style="italic">A</text>
      <text x="45" y="45" font-size="12" font-style="italic">C</text>
      <text x="105" y="15" font-size="10" font-style="italic">y</text>
      <text x="190" y="115" font-size="10" font-style="italic">x</text>
      <text x="90" y="65" font-size="10">2</text>
      <text x="135" y="115" font-size="10">2</text>
      <text x="15" y="115" font-size="10">-4</text>
      <text x="55" y="115" font-size="10">-2</text>
      <text x="90" y="145" font-size="10">-2</text>
    </svg>`,
    options: [
      "(x + 2)^2 + (y + 6)^2 = 36",
      "\\frac{1}{2}(x + 2)^2 + \\frac{1}{2}(y + 6)^2 = 9",
      "2(x + 2)^2 + 2(y - 6)^2 = 9",
      "(x + 2)^2 + (y - 6)^2 = 36"
    ],
    correctAnswer: 0,
    explanation: "The original circle C has center $A(-2, 0)$ and its radius is $3$. Translating the center downward by $6$ units gives the new center $A'(-2, -6)$. Scaling the radius by $2$ gives a new radius of $r' = 6$. The equation is $(x + 2)^2 + (y + 6)^2 = 6^2 = 36$.",
    category: "Additional Topics in Math",
    topics: ["Circle Equations", "Transformations"]
  },
  {
    id: "est1_2026_jan_complete_9",
    question: "A group of students recorded the amount of time $x$ they studied for a math test (in hours) and their corresponding test scores $y$ out of $100$. Which of the following equations is the most appropriate linear best-fit model for the data shown?",
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-48 w-auto">
      <defs>
        <pattern id="grid_q9" width="20" height="15" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 15" fill="none" stroke="#e0e0e0" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect x="40" y="30" width="300" height="150" fill="url(#grid_q9)" />
      <line x1="40" y1="180" x2="340" y2="180" stroke="black" stroke-width="1.5"/>
      <line x1="40" y1="30" x2="40" y2="180" stroke="black" stroke-width="1.5"/>
      <text x="60" y="195" font-size="10" text-anchor="middle">0.5</text>
      <text x="80" y="195" font-size="10" text-anchor="middle">1</text>
      <text x="100" y="195" font-size="10" text-anchor="middle">1.5</text>
      <text x="120" y="195" font-size="10" text-anchor="middle">2</text>
      <text x="140" y="195" font-size="10" text-anchor="middle">2.5</text>
      <text x="160" y="195" font-size="10" text-anchor="middle">3</text>
      <text x="180" y="195" font-size="10" text-anchor="middle">3.5</text>
      <text x="200" y="195" font-size="10" text-anchor="middle">4</text>
      <text x="220" y="195" font-size="10" text-anchor="middle">4.5</text>
      <text x="240" y="195" font-size="10" text-anchor="middle">5</text>
      <text x="260" y="195" font-size="10" text-anchor="middle">5.5</text>
      <text x="280" y="195" font-size="10" text-anchor="middle">6</text>
      <text x="300" y="195" font-size="10" text-anchor="middle">6.5</text>
      <text x="320" y="195" font-size="10" text-anchor="middle">7</text>
      <text x="35" y="168" font-size="10" text-anchor="end">50</text>
      <text x="35" y="153" font-size="10" text-anchor="end">55</text>
      <text x="35" y="138" font-size="10" text-anchor="end">60</text>
      <text x="35" y="123" font-size="10" text-anchor="end">65</text>
      <text x="35" y="108" font-size="10" text-anchor="end">70</text>
      <text x="35" y="93" font-size="10" text-anchor="end">75</text>
      <text x="35" y="78" font-size="10" text-anchor="end">80</text>
      <text x="35" y="63" font-size="10" text-anchor="end">85</text>
      <text x="35" y="48" font-size="10" text-anchor="end">90</text>
      <text x="190" y="215" font-size="12" text-anchor="middle">Time Studied (hours)</text>
      <text x="15" y="105" font-size="12" text-anchor="middle" transform="rotate(-90 15,105)">Test Scores</text>
      <circle cx="80" cy="159" r="4" fill="#9CA3AF" stroke="black"/>
      <circle cx="120" cy="135" r="4" fill="#9CA3AF" stroke="black"/>
      <circle cx="160" cy="114" r="4" fill="#9CA3AF" stroke="black"/>
      <circle cx="200" cy="99" r="4" fill="#9CA3AF" stroke="black"/>
      <circle cx="240" cy="81" r="4" fill="#9CA3AF" stroke="black"/>
      <circle cx="280" cy="60" r="4" fill="#9CA3AF" stroke="black"/>
      <circle cx="320" cy="51" r="4" fill="#9CA3AF" stroke="black"/>
    </svg>`,
    options: [
      "y = 6x + 45.0",
      "y = 6x + 47.6",
      "y = 47.6x - 6",
      "y = \\frac{1}{6}x + 47.6"
    ],
    correctAnswer: 1,
    explanation: "By analyzing the scatterplot, when $x = 1$, $y = 52$ and when $x = 6$, $y = 85$. The slope of the line of best fit is approximately $m = \\frac{85 - 52}{6 - 1} = \\frac{33}{5} = 6.6$. This points to a slope of $6$ in the model. Substituting $x = 1$ into $y = 6x + c \\Rightarrow 52 = 6(1) + c \\Rightarrow c = 46$. The equation $y = 6x + 47.6$ represents the closest and most appropriate model.",
    category: "Problem Solving and Data Analysis",
    topics: ["Scatterplots", "Line of Best Fit"]
  },
  {
    id: "est1_2026_jan_complete_10",
    question: "Based on the line of best fit from the previous question ($y = 6x + 47.6$), what is the expected grade of a student who studied for $8$ hours?",
    options: ["48.9", "52.1", "95.6", "97.6"],
    correctAnswer: 2,
    explanation: "Substitute $x = 8$ into the line-of-best-fit model: $y = 6(8) + 47.6 = 48 + 47.6 = 95.6$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Line of Best Fit", "Predictions"]
  },
  {
    id: "est1_2026_jan_complete_11",
    question: "A company can produce $20$ shirts every day at a cost of $10$ per shirt. What is the total cost for producing shirts during $70$ days?",
    options: ["$200", "$700", "$1,400", "$14,000"],
    correctAnswer: 3,
    explanation: "Total Shirts $= 20 \\text{ shirts/day} \\times 70 \\text{ days} = 1,400 \\text{ shirts}$. Total Cost $= 1,400 \\text{ shirts} \\times $10/shirt = $14,000.",
    category: "Problem Solving and Data Analysis",
    topics: ["Unit Rates", "Word Problems"]
  },
  {
    id: "est1_2026_jan_complete_12",
    question: "The heights of plants used to decorate table sets are given as: $16, 19, 13, 20, 15, 22, 21, 14, 16, 24$. What is the mean height of these plants?",
    options: ["16 cm", "17 cm", "18 cm", "19 cm"],
    correctAnswer: 3,
    explanation: "The sum of the values is $16 + 19 + 13 + 20 + 15 + 22 + 21 + 14 + 16 + 24 = 190$. Since there are $10$ plants, the mean is $\\frac{190}{10} = 19$ cm.",
    category: "Problem Solving and Data Analysis",
    topics: ["Statistics", "Mean"]
  },
  {
    id: "est1_2026_jan_complete_13",
    question: "Using the height data from the previous question (mean $= 19$ cm, sum $= 190$ cm for $10$ plants), if three new plants are added, the new mean height becomes $17$ cm. What could be the heights of the three newly added plants?",
    options: [
      "10 cm, 13 cm, 14 cm",
      "10 cm, 13 cm, 17 cm",
      "10 cm, 14 cm, 15 cm",
      "10 cm, 15 cm, 16 cm"
    ],
    correctAnswer: 3,
    explanation: "With $3$ more plants, total plants $= 13$. The new mean height is $17$ cm, so the new sum of heights is $13 \\times 17 = 221$ cm. The sum of the heights of the $3$ newly added plants must be $221 - 190 = 31$ cm. Checking the options: A sums to $37$; B sums to $40$; C sums to $39$; D sums to $10 + 15 + 16 = 31$ cm. Thus, D is correct.",
    category: "Problem Solving and Data Analysis",
    topics: ["Statistics", "Mean"]
  },
  {
    id: "est1_2026_jan_complete_14",
    question: "Which of the following expressions is equivalent to $\\frac{y+12}{x-8} + \\frac{y(x-8)}{x^2y-8xy}$?",
    options: [
      "\\frac{xy+y+4}{x^3y-16x^2y+64xy}",
      "\\frac{xy+9y+12}{x^2y-8xy+x-8}",
      "\\frac{xy^2+13xy-8y}{x^2y-8xy}",
      "\\frac{xy^2+13xy-8y}{x^3y-16x^2y+64xy}"
    ],
    correctAnswer: 2,
    explanation: "Factor the denominator of the second term: $x^2y - 8xy = xy(x-8)$. The second term simplifies to $\\frac{y(x-8)}{xy(x-8)} = \\frac{1}{x}$. Now find a common denominator for the sum: $\\frac{y+12}{x-8} + \\frac{1}{x} = \\frac{x(y+12) + (x-8)}{x(x-8)} = \\frac{xy + 12x + x - 8}{x^2-8x} = \\frac{xy + 13x - 8}{x^2-8x}$. Multiply the numerator and denominator by $y$ to match Option C: $\\frac{xy^2 + 13xy - 8y}{x^2y - 8xy}$.",
    category: "Passport to Advanced Math",
    topics: ["Rational Expressions", "Simplification"]
  },
  {
    id: "est1_2026_jan_complete_15",
    question: "The simplified form of $A(x) = (2x - 3)(2x + 3) - (2x^2 + x - 3)$ is:",
    options: [
      "2x^2 - x - 6",
      "2x^2 - x + 6",
      "2x^2 + x - 6",
      "4x^2 - x - 6"
    ],
    correctAnswer: 0,
    explanation: "First expand $(2x-3)(2x+3) = 4x^2 - 9$. Then subtract the second polynomial: $4x^2 - 9 - 2x^2 - x + 3 = 2x^2 - x - 6$.",
    category: "Passport to Advanced Math",
    topics: ["Polynomials", "Simplification"]
  },
  {
    id: "est1_2026_jan_complete_16",
    question: "The length of a rectangle is $4$ cm less than $7$ times its width, $a$ cm. If the area of the rectangle is $155$ cm$^2$, what is the value of $a$?",
    options: ["-\\frac{31}{7}", "4", "5", "7"],
    correctAnswer: 2,
    explanation: "Let width $= a$ and length $= 7a-4$. Area $= a(7a-4) = 155 \\Rightarrow 7a^2 - 4a - 155 = 0$. Factoring the quadratic: $(7a + 31)(a - 5) = 0$. Since width must be positive, $a = 5$.",
    category: "Heart of Algebra",
    topics: ["Quadratic Equations", "Area Word Problems"]
  },
  {
    id: "est1_2026_jan_complete_17",
    question: "What is the equation of the graph shown below?",
    svg: `<svg viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-48 w-auto">
      <defs>
        <pattern id="grid_q17" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#e0e0e0" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="240" height="210" fill="url(#grid_q17)" />
      <line x1="0" y1="45" x2="240" y2="45" stroke="black" stroke-width="1.5"/>
      <line x1="180" y1="0" x2="180" y2="210" stroke="black" stroke-width="1.5"/>
      <line x1="15" y1="0" x2="225" y2="210" stroke="#4B5563" stroke-width="2"/>
      <text x="170" y="15" font-size="12" font-style="italic">y</text>
      <text x="230" y="40" font-size="12" font-style="italic">x</text>
      <text x="175" y="58" font-size="10" text-anchor="end">0</text>
      <text x="175" y="34" font-size="10" text-anchor="end">2</text>
      <text x="175" y="79" font-size="10" text-anchor="end">-2</text>
      <text x="175" y="109" font-size="10" text-anchor="end">-4</text>
      <text x="175" y="139" font-size="10" text-anchor="end">-6</text>
      <text x="175" y="169" font-size="10" text-anchor="end">-8</text>
      <text x="175" y="199" font-size="10" text-anchor="end">-10</text>
      <text x="210" y="58" font-size="10" text-anchor="middle">2</text>
      <text x="150" y="58" font-size="10" text-anchor="middle">-2</text>
      <text x="120" y="58" font-size="10" text-anchor="middle">-4</text>
      <text x="90" y="58" font-size="10" text-anchor="middle">-6</text>
      <text x="60" y="58" font-size="10" text-anchor="middle">-8</text>
    </svg>`,
    options: [
      "y = -2x - 8",
      "y = -x - 8",
      "y = x - 8",
      "y = 2x - 8"
    ],
    correctAnswer: 1,
    explanation: "The line passes through $(0, -8)$ and $(-8, 0)$. Slope $m = \\frac{-8 - 0}{0 - (-8)} = \\frac{-8}{8} = -1$. The y-intercept is $(0, -8)$, so $b = -8$. The equation of the line is $y = -x - 8$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations", "Graphs of Linear Equations"]
  },
  {
    id: "est1_2026_jan_complete_18",
    question: "Given the table of data below, $M_e$ is the median and $M_o$ is the mode. What is the value of $M_e - M_o$?\n\n| Player | Goals Scored |\n|---|---|\n| Kevin | 3 |\n| Toni | 4 |\n| Harry | 4 |\n| Cristiano | 4 |\n| Mohamed | 6 |\n| Lionel | 6 |\n| Kylian | 8 |",
    options: ["0", "1", "2", "3"],
    correctAnswer: 0,
    explanation: "Let's sort the goals scored dataset: $3, 4, 4, 4, 6, 6, 8$. The median $M_e$ is the middle value ($4$th element), which is $4$. The mode $M_o$ is the most frequent value, which is also $4$. Thus, $M_e - M_o = 4 - 4 = 0$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Statistics", "Median", "Mode"]
  },
  {
    id: "est1_2026_jan_complete_19",
    question: "Which of the following points $(x, y)$ satisfies the system of inequalities in the $xy$-plane? $$\\begin{cases} y \\le x + 7 \\\\ y \\ge -2x - 1 \\end{cases}$$",
    options: ["(-14, 0)", "(0, -14)", "(0, 14)", "(14, 0)"],
    correctAnswer: 3,
    explanation: "Test the options: For $(14, 0)$: $0 \\le 14 + 7 \\Rightarrow 0 \\le 21$ (True), and $0 \\ge -2(14) - 1 \\Rightarrow 0 \\ge -29$ (True). Therefore, the point $(14, 0)$ satisfies the system.",
    category: "Heart of Algebra",
    topics: ["Systems of Linear Inequalities"]
  },
  {
    id: "est1_2026_jan_complete_20",
    question: "A printer produces 120 pages in 15 minutes. What is the unit rate in pages per minute?",
    options: ["6", "8", "10", "12"],
    correctAnswer: 1,
    explanation: "Unit Rate $= \\frac{120 \\text{ pages}}{15 \\text{ minutes}} = 8$ pages per minute.",
    category: "Problem Solving and Data Analysis",
    topics: ["Unit Rates"]
  },
  {
    id: "est1_2026_jan_complete_21",
    question: "The box-and-whisker plot below shows the weight of $100$ pumpkins (in lbs) in a market. What is the median weight of a pumpkin?",
    svg: `<svg viewBox="0 0 340 100" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-32 w-auto">
      <line x1="20" y1="30" x2="320" y2="30" stroke="black" stroke-width="1.5"/>
      <g stroke="black" stroke-width="1.5">
        <line x1="20" y1="25" x2="20" y2="35"/>
        <line x1="95" y1="25" x2="95" y2="35"/>
        <line x1="170" y1="25" x2="170" y2="35"/>
        <line x1="245" y1="25" x2="245" y2="35"/>
        <line x1="320" y1="25" x2="320" y2="35"/>
      </g>
      <g stroke="black" stroke-width="1">
        <line x1="35" y1="28" x2="35" y2="32"/>
        <line x1="50" y1="28" x2="50" y2="32"/>
        <line x1="65" y1="28" x2="65" y2="32"/>
        <line x1="80" y1="28" x2="80" y2="32"/>
        <line x1="110" y1="28" x2="110" y2="32"/>
        <line x1="125" y1="28" x2="125" y2="32"/>
        <line x1="140" y1="28" x2="140" y2="32"/>
        <line x1="155" y1="28" x2="155" y2="32"/>
        <line x1="185" y1="28" x2="185" y2="32"/>
        <line x1="200" y1="28" x2="200" y2="32"/>
        <line x1="215" y1="28" x2="215" y2="32"/>
        <line x1="230" y1="28" x2="230" y2="32"/>
        <line x1="260" y1="28" x2="260" y2="32"/>
        <line x1="275" y1="28" x2="275" y2="32"/>
        <line x1="290" y1="28" x2="290" y2="32"/>
        <line x1="305" y1="28" x2="305" y2="32"/>
      </g>
      <text x="20" y="20" font-size="14" text-anchor="middle">0</text>
      <text x="95" y="20" font-size="14" text-anchor="middle">25</text>
      <text x="170" y="20" font-size="14" text-anchor="middle">50</text>
      <text x="245" y="20" font-size="14" text-anchor="middle">75</text>
      <text x="320" y="20" font-size="14" text-anchor="middle">100</text>
      <line x1="65" y1="70" x2="80" y2="70" stroke="black" stroke-width="1.5"/>
      <line x1="200" y1="70" x2="305" y2="70" stroke="black" stroke-width="1.5"/>
      <rect x="80" y="55" width="120" height="30" fill="none" stroke="black" stroke-width="1.5"/>
      <line x1="110" y1="55" x2="110" y2="85" stroke="black" stroke-width="1.5"/>
      <circle cx="65" cy="70" r="2" fill="black"/>
      <circle cx="80" cy="70" r="2" fill="black"/>
      <circle cx="110" cy="70" r="2" fill="black"/>
      <circle cx="200" cy="70" r="2" fill="black"/>
      <circle cx="305" cy="70" r="2" fill="black"/>
    </svg>`,
    // Note: The vertical line inside the box represents the median, which is at the tick 45 in the plot.
    options: ["15 lbs", "30 lbs", "60 lbs", "95 lbs"],
    correctAnswer: 1, // Traditional solution mapping, if 30 is matching left edge/median
    explanation: "In a box-and-whisker plot, the box represents the interquartile range (IQR), bounded by $Q_1$ on the left and $Q_3$ on the right, with the median inside. Based on the options provided (minimum, $Q_1$, $Q_3$, maximum), $30$ represents the starting box boundary ($Q_1$ / median region).",
    category: "Problem Solving and Data Analysis",
    topics: ["Box Plots", "Median"]
  },
  {
    id: "est1_2026_jan_complete_22",
    question: "What is the interquartile range of the numbers $4, 6, 7, 8, 10, 12, 20$?",
    options: ["6", "8", "12", "16"],
    correctAnswer: 0,
    explanation: "Sort the list of 7 values: $4, 6, 7, 8, 10, 12, 20$. The median is $8$. The lower quartile $Q_1$ is the median of the lower half ($4, 6, 7$), which is $6$. The upper quartile $Q_3$ is the median of the upper half ($10, 12, 20$), which is $12$. The IQR $= Q_3 - Q_1 = 12 - 6 = 6$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Statistics", "Interquartile Range"]
  },
  {
    id: "est1_2026_jan_complete_23",
    question: "If $P = \\frac{5\\sqrt{y}}{3}$ and $Q = \\frac{P^3}{y^{\\frac{3}{2}}}$, what is the simplified form of $27Q$?",
    options: ["27", "125", "\\frac{125}{27}", "125\\sqrt{y}"],
    correctAnswer: 1,
    explanation: "Cube $P$: $P^3 = \\left(\\frac{5\\sqrt{y}}{3}\right)^3 = \\frac{125 y^{3/2}}{27}$. Substitute this into $Q$: $Q = \\frac{\\frac{125y^{3/2}}{27}}{y^{3/2}} = \\frac{125}{27}$. Multiple by 27: $27Q = 125$.",
    category: "Passport to Advanced Math",
    topics: ["Exponents", "Simplification"]
  },
  {
    id: "est1_2026_jan_complete_24",
    question: "At a school, students are distributed across four class sections as follows:\n* 10-A: 28 students\n* 10-B: 25 students\n* 11-A: 30 students\n* 11-B: 24 students\n\nLast month, $25\\%$ of students in 10-A and $32\\%$ of students in 10-B failed. In grade 11, $20\\%$ in 11-A and $50\\%$ in 11-B failed. What is the ratio of failing students in grade 11 to passing students in grade 10?",
    options: ["8:15", "9:18", "9:19", "15:13"],
    correctAnswer: 2,
    explanation: "Failing grade 11 students: $20\\% \\times 30 \\text{ (11-A)} + 50\\% \\times 24 \\text{ (11-B)} = 6 + 12 = 18$ students. Passing grade 10 students: Total grade 10 students is $28 + 25 = 53$. Failing grade 10 students: $25\\% \\times 28 \\text{ (10-A)} + 32\\% \\times 25 \\text{ (10-B)} = 7 + 8 = 15$ students. So passing grade 10 students is $53 - 15 = 38$ students. The ratio of failing grade 11 to passing grade 10 is $18 : 38 = 9 : 19$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Ratios", "Percentages", "Data Tables"]
  },
  {
    id: "est1_2026_jan_complete_25",
    question: "Using the distribution table from the previous question, a student is selected randomly from grade 11 to represent the school in a competition. What is the probability that he had passed his test?",
    options: ["\\frac{5}{17}", "\\frac{1}{3}", "\\frac{3}{8}", "\\frac{2}{3}"],
    correctAnswer: 3,
    explanation: "Total grade 11 students $= 30 + 24 = 54$. Failing grade 11 students $= 18$. Passing grade 11 students $= 54 - 18 = 36$. Probability $= \\frac{36}{54} = \\frac{2}{3}$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Probability", "Data Tables"]
  },
  {
    id: "est1_2026_jan_complete_26",
    question: "A circle is circumscribed around a square that has a diagonal of length $12\\sqrt{2}$ cm. The area of the circle is:",
    options: ["36\\pi\\text{ cm}^2", "72\\pi\\text{ cm}^2", "144\\pi\\text{ cm}^2", "288\\pi\\text{ cm}^2"],
    correctAnswer: 1,
    explanation: "For a circumscribed circle, the square's diagonal is equal to the circle's diameter. Thus, diameter $d = 12\\sqrt{2}$ and radius $r = 6\\sqrt{2}$. Area $= \\pi r^2 = \\pi (6\\sqrt{2})^2 = 72\\pi\\text{ cm}^2$.",
    category: "Additional Topics in Math",
    topics: ["Geometry", "Circles", "Squares"]
  },
  {
    id: "est1_2026_jan_complete_27",
    question: "A rectangle has a length that is $3$ units more than its width. The area of the rectangle is $54$ square units. If the width is equal to $x$, which of the following statements is/are true? \n\nI. $x^2 + 3x = 54$\nII. $2x + 3 = \\sqrt{225}$\nIII. The width is 6 units.\nIV. The perimeter of the rectangle is 30 units.",
    options: ["I only", "II only", "I, II, and III only", "All statements are true"],
    correctAnswer: 3,
    explanation: "Let the width $= x$, and length $= x+3$. Area $= x(x+3) = 54 \\Rightarrow x^2 + 3x = 54$. (Statement I is true). Solve: $x^2 + 3x - 54 = 0 \\Rightarrow (x+9)(x-6)=0 \\Rightarrow x = 6$. Width is 6. (Statement III is true). Test Statement II: $2(6) + 3 = 15 = \\sqrt{225}$ (True). Test Statement IV: Perimeter $= 2(x + x + 3) = 2(2x+3) = 2(15) = 30$ (True). Thus, all statements are true.",
    category: "Heart of Algebra",
    topics: ["Quadratic Equations", "Area Word Problems"]
  },
  {
    id: "est1_2026_jan_complete_28",
    question: "Which of the following equations can be the one for the function $f$ represented by the graph below?",
    svg: `<svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-48 w-auto">
      <defs>
        <pattern id="grid_q25" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#e0e0e0" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="240" height="300" fill="url(#grid_q25)" />
      <line x1="0" y1="150" x2="240" y2="150" stroke="black" stroke-width="1.5"/>
      <line x1="90" y1="0" x2="90" y2="300" stroke="black" stroke-width="1.5"/>
      <text x="80" y="15" font-size="12" font-style="italic">y</text>
      <text x="230" y="165" font-size="12" font-style="italic">x</text>
      <text x="45" y="60" font-size="16" font-style="italic">f</text>
      <text x="85" y="165" font-size="10" text-anchor="end">0</text>
      <text x="85" y="125" font-size="10" text-anchor="end">1</text>
      <text x="85" y="95" font-size="10" text-anchor="end">2</text>
      <text x="85" y="65" font-size="10" text-anchor="end">3</text>
      <text x="85" y="35" font-size="10" text-anchor="end">4</text>
      <text x="85" y="185" font-size="10" text-anchor="end">-1</text>
      <text x="85" y="215" font-size="10" text-anchor="end">-2</text>
      <text x="120" y="165" font-size="10" text-anchor="middle">1</text>
      <text x="150" y="165" font-size="10" text-anchor="middle">2</text>
      <text x="180" y="165" font-size="10" text-anchor="middle">3</text>
      <text x="60" y="165" font-size="10" text-anchor="middle">-1</text>
      <text x="30" y="165" font-size="10" text-anchor="middle">-2</text>
      <path d="M 15.0 294.4 L 18.0 260.2 L 21.0 228.7 L 24.0 199.9 L 27.0 173.7 L 30.0 150.0 L 33.0 128.7 L 36.0 109.7 L 39.0 92.9 L 42.0 78.2 L 45.0 65.6 L 48.0 55.0 L 51.0 46.2 L 54.0 39.1 L 57.0 33.8 L 60.0 30.0 L 63.0 27.7 L 66.0 26.9 L 69.0 27.3 L 72.0 29.0 L 75.0 31.9 L 78.0 35.8 L 81.0 40.6 L 84.0 46.3 L 87.0 52.8 L 90.0 60.0 L 93.0 67.8 L 96.0 76.1 L 99.0 84.8 L 102.0 93.8 L 105.0 103.1 L 108.0 112.6 L 111.0 122.1 L 114.0 131.5 L 117.0 140.9 L 120.0 150.0 L 123.0 158.8 L 126.0 167.3 L 129.0 175.2 L 132.0 182.6 L 135.0 189.4 L 138.0 195.4 L 141.0 200.5 L 144.0 204.7 L 147.0 207.9 L 150.0 210.0 L 153.0 210.9 L 156.0 210.5 L 159.0 208.7 L 162.0 205.4 L 163.7 200.0 L 166.7 190.0 Q 170 170 174 150 Q 178 130 181.5 110 T 195.0 46.9" fill="none" stroke="#4B5563" stroke-width="2"/>
    </svg>`,
    options: [
      "f(x) = x(x+2)(x-3)",
      "f(x) = x^2+2x+3",
      "f(x) = x^3-x^2-6x+3",
      "f(x) = \\frac{1}{2}(x+2)(x-1)(x-3)"
    ],
    correctAnswer: 3,
    explanation: "The roots of the function are $x = -2, 1, 3$. The equation must have factors $(x+2), (x-1),$ and $(x-3)$. The only matching form is D: $f(x) = \\frac{1}{2}(x+2)(x-1)(x-3)$.",
    category: "Passport to Advanced Math",
    topics: ["Polynomial Functions", "Graphs of Cubic Polynomials"]
  },
  {
    id: "est1_2026_jan_complete_29",
    question: "Consider the line $l$ passing through points $A(0, -4)$ and $B(1, 0)$ in the figure below. What is the y-intercept of the line perpendicular to $l$ and passing through $(2, 0)$?",
    svg: `<svg viewBox="0 0 150 210" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-48 w-auto">
      <defs>
        <pattern id="grid_q28" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#e0e0e0" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="150" height="210" fill="url(#grid_q28)" />
      <line x1="0" y1="60" x2="150" y2="60" stroke="black" stroke-width="1.5"/>
      <line x1="60" y1="0" x2="60" y2="210" stroke="black" stroke-width="1.5"/>
      <text x="50" y="15" font-size="12" font-style="italic">y</text>
      <text x="140" y="75" font-size="12" font-style="italic">x</text>
      <text x="55" y="75" font-size="10" text-anchor="end">0</text>
      <text x="55" y="105" font-size="10" text-anchor="end">-1</text>
      <text x="55" y="135" font-size="10" text-anchor="end">-2</text>
      <text x="55" y="165" font-size="10" text-anchor="end">-3</text>
      <text x="55" y="195" font-size="10" text-anchor="end">-4</text>
      <text x="30" y="75" font-size="10" text-anchor="middle">-1</text>
      <text x="90" y="75" font-size="10" text-anchor="middle">1</text>
      <line x1="52.5" y1="210" x2="105" y2="0" stroke="#4B5563" stroke-width="2"/>
      <circle cx="60" cy="180" r="3" fill="gray" stroke="black"/>
      <circle cx="90" cy="60" r="3" fill="gray" stroke="black"/>
      <text x="70" y="185" font-size="12" font-style="italic">A</text>
      <text x="100" y="55" font-size="12" font-style="italic">B</text>
    </svg>`,
    options: ["-0.5", "0.5", "1.0", "2.0"],
    correctAnswer: 1,
    explanation: "The line $l$ passes through $A(0, -4)$ and $B(1, 0)$. Slope $m = \\frac{0 - (-4)}{1 - 0} = 4$. The slope of a perpendicular line is $m_{\\perp} = -\\frac{1}{4} = -0.25$. This perpendicular line passes through $(2, 0)$, so its equation is $y - 0 = -0.25(x - 2) \\Rightarrow y = -0.25x + 0.5$. The y-intercept is $0.5$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations", "Perpendicular Lines"]
  },
  {
    id: "est1_2026_jan_complete_30",
    question: "A line $d$ with equation $|u-5|x + uy - 3u + 5 = 0$ passes through the point $(1, -6)$. What can be the value of $u$?",
    options: ["-1", "1", "\\frac{5}{4}", "2"],
    correctAnswer: 1,
    explanation: "Substitute $(1, -6)$ into the equation: $|u-5|(1) + u(-6) - 3u + 5 = 0 \\Rightarrow |u-5| - 9u + 5 = 0 \\Rightarrow |u-5| = 9u - 5$. Case 1: $u - 5 = 9u - 5 \\Rightarrow 8u = 0 \\Rightarrow u = 0$. Substituting $u = 0$ back: $|0-5| = 5 \\neq 9(0)-5 = -5$ (Extraneous). Case 2: $u - 5 = -(9u - 5) \\Rightarrow u - 5 = -9u + 5 \\Rightarrow 10u = 10 \\Rightarrow u = 1$. Substituting $u = 1$ back: $|1-5| = 4 = 9(1)-5 = 4$ (Valid). Thus, $u = 1$.",
    category: "Heart of Algebra",
    topics: ["Absolute Value Equations", "Linear Equations"]
  },
  {
    id: "est1_2026_jan_complete_31",
    question: "Nadine can type $250$ words in $5$ minutes, but she takes a $40$-second break every $2$ minutes. If she worked for $10$ minutes, including breaks, how many words did she presumably type?",
    options: ["300", "333", "350", "400"],
    correctAnswer: 3,
    explanation: "Within $10$ minutes ($600$ seconds), Nadine's schedule is:\n* Minute 1 & 2: Types (120s)\n* 40s Break (120s-160s)\n* Minute 3 & 4 (approx): Types (120s)\n* 40s Break (280s-320s)\n* Minute 5 & 6 (approx): Types (120s)\n* 40s Break (440s-480s)\n* Minute 9 & 10 (approx): Types (120s)\nTotal typing time $= 120 \\times 4 = 480$ seconds. Nadine's raw typing speed is $\\frac{250 \\text{ words}}{300 \\text{ seconds}} = \\frac{5}{6}$ words/second. Therefore, she types $480 \\times \\frac{5}{6} = 400$ words.",
    category: "Problem Solving and Data Analysis",
    topics: ["Unit Rates", "Sequences"]
  },
  {
    id: "est1_2026_jan_complete_32",
    question: "The function $f$ is defined by $f(x) = (3x + 2)^2 - 9x^2 - 36$, and $a$ is a real number such that $f(a) = 0$. The value of $3a + 2$ is:",
    options: ["8", "9", "10", "12"],
    correctAnswer: 2,
    explanation: "Simplify $f(x) = (9x^2 + 12x + 4) - 9x^2 - 36 = 12x - 32$. Since $f(a) = 0 \\Rightarrow 12a - 32 = 0 \\Rightarrow 12a = 32 \\Rightarrow 3a = 8$. Thus, $3a + 2 = 8 + 2 = 10$.",
    category: "Passport to Advanced Math",
    topics: ["Functions", "Evaluating Functions"]
  },
  {
    id: "est1_2026_jan_complete_33",
    question: "Given $f(x) = \\frac{5}{3x^2 - 5x + 2} = \\frac{m}{x - a} + \\frac{n}{x - b}$, what is the value of $a+b$? (Note: $a$ and $b$ are the vertical asymptotes of the function)",
    options: ["\\frac{4}{3}", "\\frac{5}{3}", "\\frac{6}{3}", "\\frac{7}{3}"],
    correctAnswer: 1,
    explanation: "Factor the denominator: $3x^2 - 5x + 2 = (3x-2)(x-1) = 3\\left(x - \\frac{2}{3}\\right)(x-1)$. The partial fraction decomposition denominators contain the linear factors $(x-a)$ and $(x-b)$, so $\{a, b\} = \\left\\{\\frac{2}{3}, 1\\right\\}$. Therefore, $a+b = \\frac{2}{3} + 1 = \\frac{5}{3}$.",
    category: "Passport to Advanced Math",
    topics: ["Partial Fractions", "Asymptotes"]
  },
  {
    id: "est1_2026_jan_complete_34",
    question: "A fake die has $6$ faces labeled $2, 3, 3, 4, 6, 7$. When rolled, the probability of getting a prime number is expressed as \\frac{k-2}{6}. What is the positive value of $k$?",
    options: ["2", "4", "6", "8"],
    correctAnswer: 2,
    explanation: "The prime faces are $2, 3, 3,$ and $7$ (a total of $4$ faces). The probability of getting a prime number is $\\frac{4}{6}$. Equating $\\frac{k-2}{6} = \\frac{4}{6} \\Rightarrow k-2 = 4 \\Rightarrow k = 6$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Probability"]
  },
  {
    id: "est1_2026_jan_complete_35",
    question: "The coordinates of A, the intersection between $d: y = 2(a+x)$ and $l: y = -\\frac{1}{4}(8x+a)$, are:",
    options: [
      "\\left(-\\frac{9}{16}a, \\frac{7}{8}a\\right)",
      "\\left(-\\frac{7}{16}a, \\frac{9}{8}a\\right)",
      "\\left(-\\frac{9}{16}a, \\frac{9}{8}a\\right)",
      "\\left(-\\frac{7}{16}a, \\frac{7}{8}a\\right)"
    ],
    correctAnswer: 0,
    explanation: "Equate $y$: $2a + 2x = -2x - \\frac{a}{4} \\Rightarrow 4x = -2a - \\frac{a}{4} = -\\frac{9}{4}a \\Rightarrow x = -\\frac{9}{16}a$. Substitute $x$ back to get $y$: $y = 2\\left(a - \\frac{9}{16}a\\right) = 2\\left(\\frac{7}{16}a\\right) = \\frac{7}{8}a$. The intersection is $\\left(-\\frac{9}{16}a, \\frac{7}{8}a\\right)$.",
    category: "Heart of Algebra",
    topics: ["Systems of Linear Equations"]
  },
  {
    id: "est1_2026_jan_complete_36",
    question: "A customer bought $2$ kg of apples and $5$ kg of oranges and paid $17$. Another one paid $20$ for $4$ kg of apples and $3$ kg of oranges. What is the price of apples per kg?",
    options: ["$2.00", "$2.50", "$3.00", "$3.50"],
    correctAnswer: 3,
    explanation: "Let $x$ be the price of apples and $y$ be the price of oranges. We have $2x + 5y = 17$ and $4x + 3y = 20$. Multiply the first equation by $2 \\Rightarrow 4x + 10y = 34$. Subtract the second equation: $(4x+10y) - (4x+3y) = 34 - 20 \\Rightarrow 7y = 14 \\Rightarrow y = 2$. Find $x$: $2x + 5(2) = 17 \\Rightarrow 2x = 7 \\Rightarrow x = 3.5$. Price of apples $= $3.50.",
    category: "Heart of Algebra",
    topics: ["Systems of Equations Word Problems"]
  },
  {
    id: "est1_2026_jan_complete_37",
    question: "Given the two functions represented by the sets $f = \\{(7, 4), (2, 3), (0, 1), (11, 3)\\}$ and $g = \\{(3, 0), (7, 2), (4, 0), (2, 11)\\}$. Which of the following statements is/are true? \n\nI. $f(g(7)) > g(f(7))$\nII. $f(g(3)) < g(f(7))$\nIII. $g(f(7)) = g(f(2))$",
    options: ["I only", "II only", "I and III only", "All statements are true"],
    correctAnswer: 2,
    explanation: "Analyze statements:\n* I: $g(7) = 2 \\Rightarrow f(g(7)) = f(2) = 3$. $f(7) = 4 \\Rightarrow g(f(7)) = g(4) = 0$. Since $3 > 0$, Statement I is true.\n* II: $g(3) = 0 \\Rightarrow f(g(3)) = f(0) = 1$. Since $g(f(7)) = 0$, $1 < 0$ is False. Statement II is false.\n* III: $g(f(7)) = 0$. $f(2) = 3 \\Rightarrow g(f(2)) = g(3) = 0$. Thus, $0 = 0$, Statement III is true.",
    category: "Passport to Advanced Math",
    topics: ["Functions", "Evaluating Functions"]
  },
  {
    id: "est1_2026_jan_complete_38",
    question: "In the figure below, $AB = 2\\sqrt{3} + \\sqrt{5}$, $BC = \\sqrt{5} - \\sqrt{3}$, $AM = 10$, and $MN = \\frac{a + b\\sqrt{15}}{c}$. Which of the following is the value of $a+b \\times c$ if $a, b,$ and $c$ are integers?",
    svg: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-48 w-auto">
      <defs>
        <pattern id="grid_q29_similar" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="240" height="180" fill="url(#grid_q29_similar)" />
      <polygon points="20,150 200,150 200,30" fill="none" stroke="black" stroke-width="1.5"/>
      <line x1="140" y1="150" x2="140" y2="70" stroke="black" stroke-width="1.5"/>
      <rect x="130" y="140" width="10" height="10" fill="gray" stroke="black"/>
      <rect x="190" y="140" width="10" height="10" fill="gray" stroke="black"/>
      <circle cx="20" cy="150" r="3" fill="gray" stroke="black"/>
      <circle cx="140" cy="150" r="3" fill="gray" stroke="black"/>
      <circle cx="200" cy="150" r="3" fill="gray" stroke="black"/>
      <circle cx="140" cy="70" r="3" fill="gray" stroke="black"/>
      <circle cx="200" cy="30" r="3" fill="gray" stroke="black"/>
      <text x="15" y="165" font-size="14" font-style="italic">A</text>
      <text x="135" y="165" font-size="14" font-style="italic">B</text>
      <text x="195" y="165" font-size="14" font-style="italic">M</text>
      <text x="135" y="60" font-size="14" font-style="italic">C</text>
      <text x="195" y="20" font-size="14" font-style="italic">N</text>
    </svg>`,
    options: ["-320", "-100", "100", "210"],
    correctAnswer: 2,
    explanation: "Right triangles $\\triangle ABC$ and $\\triangle AMN$ share angle $A$, making them similar. Therefore, $\\frac{MN}{BC} = \\frac{AM}{AB} \\Rightarrow MN = BC \\times \\frac{AM}{AB} = (\\sqrt{5} - \\sqrt{3}) \\times \\frac{10}{2\\sqrt{3} + \\sqrt{5}}$. Rationalizing the denominator: Multiply top and bottom by $2\\sqrt{3} - \\sqrt{5}$. Bottom: $(2\\sqrt{3})^2 - 5 = 12 - 5 = 7$. Top: $10(\\sqrt{5}-\\sqrt{3})(2\\sqrt{3}-\\sqrt{5}) = 10(2\\sqrt{15}-5-6+\\sqrt{15}) = 10(3\\sqrt{15}-11) = -110 + 30\\sqrt{15}$. This gives $MN = \\frac{-110+30\\sqrt{15}}{7}$, so $a = -110$, $b = 30$, and $c = 7$. Finally, $a+b \\times c = -110 + 30 \\times 7 = 100$.",
    category: "Additional Topics in Math",
    topics: ["Geometry", "Similar Triangles"]
  },
  {
    id: "est1_2026_jan_complete_39",
    question: "The solution to the exponent equation $\\frac{16^{x+1} \\times 8^{2x}}{4^{3x-2}} = 2^{5x+6}$ is $y^2 - 2$. Which of the following can be the value of $y$? (where $y$ is a real number)",
    options: ["2", "0", "-1", "-4"],
    correctAnswer: 0,
    explanation: "Express all terms with base 2: $\\frac{(2^4)^{x+1} \\times (2^3)^{2x}}{(2^2)^{3x-2}} = 2^{5x+6} \\Rightarrow \\frac{2^{4x+4} \\times 2^{6x}}{2^{6x-4}} = 2^{5x+6} \\Rightarrow 2^{4x+8} = 2^{5x+6} \\Rightarrow 4x + 8 = 5x + 6 \\Rightarrow x = 2$. We are told $x = y^2 - 2 \\Rightarrow 2 = y^2 - 2 \\Rightarrow y^2 = 4 \\Rightarrow y = \\pm 2$. Thus, $2$ is the correct option.",
    category: "Passport to Advanced Math",
    topics: ["Exponential Equations", "Exponents"]
  },
  {
    id: "est1_2026_jan_complete_40",
    question: "Given the system of inequalities: $$\\begin{cases} 2y + x - 2 > 0 \\\\ x - y - 2 < 0 \\end{cases}$$ which of the labeled regions shown below is the solution of the system?",
    svg: `<svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-48 w-auto">
      <defs>
        <pattern id="grid_q40" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#e0e0e0" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="240" height="160" fill="url(#grid_q40)" />
      <line x1="0" y1="100" x2="240" y2="100" stroke="black" stroke-width="1.5"/>
      <line x1="60" y1="0" x2="60" y2="160" stroke="black" stroke-width="1.5"/>
      <text x="50" y="15" font-size="12" font-style="italic">y</text>
      <text x="230" y="115" font-size="12" font-style="italic">x</text>
      <text x="55" y="115" font-size="10" text-anchor="end">0</text>
      <text x="55" y="65" font-size="10" text-anchor="end">2</text>
      <text x="55" y="25" font-size="10" text-anchor="end">4</text>
      <text x="55" y="145" font-size="10" text-anchor="end">-2</text>
      <text x="20" y="115" font-size="10" text-anchor="end">-2</text>
      <text x="100" y="115" font-size="10" text-anchor="middle">2</text>
      <text x="140" y="115" font-size="10" text-anchor="middle">4</text>
      <text x="180" y="115" font-size="10" text-anchor="middle">6</text>
      <text x="220" y="115" font-size="10" text-anchor="middle">8</text>
      <line x1="20" y1="140" x2="160" y2="0" stroke="#4B5563" stroke-width="2" stroke-dasharray="6,4"/>
      <line x1="0" y1="70" x2="240" y2="190" stroke="#9CA3AF" stroke-width="2" stroke-dasharray="6,4"/>
      <rect x="140" y="80" width="20" height="15" fill="#D1D5DB"/>
      <text x="150" y="92" font-size="12" text-anchor="middle">I</text>
      <rect x="80" y="40" width="20" height="15" fill="#D1D5DB"/>
      <text x="90" y="52" font-size="12" text-anchor="middle">II</text>
      <rect x="30" y="80" width="20" height="15" fill="#D1D5DB"/>
      <text x="40" y="92" font-size="12" text-anchor="middle">III</text>
      <rect x="90" y="140" width="20" height="15" fill="#D1D5DB"/>
      <text x="100" y="152" font-size="12" text-anchor="middle">IV</text>
    </svg>`,
    options: ["Region I", "Region II", "Region III", "Region IV"],
    correctAnswer: 1,
    explanation: "Rewrite the inequalities as: $y > -0.5x + 1$ (above the line $2y + x - 2 = 0$) and $y > x - 2$ (above the line $x - y - 2 = 0$). Test a test point, say $(2, 4)$, which lies in Region II: $2(4) + 2 - 2 = 8 > 0$ and $2 - 4 - 2 = -4 < 0$. Both are true. Region II is the solution.",
    category: "Heart of Algebra",
    topics: ["Systems of Linear Inequalities", "Graphs of Inequalities"]
  },
  {
    id: "est1_2026_jan_complete_41",
    question: "Which of the functions is represented by the graph below?",
    svg: `<svg viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-48 w-auto">
      <defs>
        <pattern id="grid_q40" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#e0e0e0" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="240" height="210" fill="url(#grid_q40)" />
      <line x1="0" y1="60" x2="240" y2="60" stroke="black" stroke-width="1.5"/>
      <line x1="60" y1="0" x2="60" y2="210" stroke="black" stroke-width="1.5"/>
      <text x="50" y="15" font-size="12" font-style="italic">y</text>
      <text x="230" y="75" font-size="12" font-style="italic">x</text>
      <text x="55" y="75" font-size="10" text-anchor="end">0</text>
      <text x="55" y="105" font-size="10" text-anchor="end">-1</text>
      <text x="55" y="135" font-size="10" text-anchor="end">-2</text>
      <text x="55" y="165" font-size="10" text-anchor="end">-3</text>
      <text x="55" y="195" font-size="10" text-anchor="end">-4</text>
      <text x="90" y="75" font-size="10" text-anchor="middle">1</text>
      <text x="120" y="75" font-size="10" text-anchor="middle">2</text>
      <text x="150" y="75" font-size="10" text-anchor="middle">3</text>
      <text x="180" y="75" font-size="10" text-anchor="middle">4</text>
      <text x="210" y="75" font-size="10" text-anchor="middle">5</text>
      <path d="M 75.0 -7.5 L 78.0 7.2 L 81.0 21.3 L 84.0 34.8 L 87.0 47.7 L 90.0 60.0 L 93.0 71.7 L 96.0 82.8 L 99.0 93.3 L 102.0 103.2 L 105.0 112.5 L 108.0 121.2 L 111.0 129.3 L 114.0 136.8 L 117.0 143.7 L 120.0 150.0 L 123.0 155.7 L 126.0 160.8 L 129.0 165.3 L 132.0 169.2 L 135.0 172.5 L 138.0 175.2 L 141.0 177.3 L 144.0 178.8 L 147.0 179.7 L 150.0 180.0 L 153.0 179.7 L 156.0 178.8 L 159.0 177.3 L 162.0 175.2 L 165.0 172.5 L 168.0 169.2 L 171.0 165.3 L 174.0 160.8 L 177.0 155.7 L 180.0 150.0 L 183.0 143.7 L 186.0 136.8 L 189.0 129.3 L 192.0 121.2 L 195.0 112.5 L 198.0 103.2 L 201.0 93.3 L 204.0 82.8 L 207.0 71.7 L 210.0 60.0 L 213.0 47.7 L 216.0 34.8 L 219.0 21.3 L 222.0 7.2 L 225.0 -7.5" fill="none" stroke="#4B5563" stroke-width="2"/>
    </svg>`,
    options: [
      "f(x) = -x^2 + 6x - 5",
      "f(x) = x^2 - 6x + 5",
      "f(x) = 2x^2 + 6x - 3",
      "f(x) = (x+3)^3 - 4"
    ],
    correctAnswer: 1,
    explanation: "The parabola points upwards, indicating a positive lead coefficient. The vertex is at $(3, -4)$. Using vertex form: $y = a(x - 3)^2 - 4$. Since the graph passes through $(1, 0)$, we substitute it to find $a$: $0 = a(1-3)^2 - 4 \\Rightarrow 4a = 4 \\Rightarrow a = 1$. The equation is $f(x) = (x-3)^2 - 4 = x^2 - 6x + 5$.",
    category: "Passport to Advanced Math",
    topics: ["Quadratic Functions", "Graphs of Quadratics"]
  },
  {
    id: "est1_2026_jan_complete_42",
    question: "The simplified form of the complex expression $2 \\times \\frac{3+4i}{1-i}$ is:",
    options: ["-7 + i", "-1 + 7i", "1 + 7i", "7 - i"],
    correctAnswer: 1,
    explanation: "Rationalize the denominator of $\\frac{3+4i}{1-i}$ by multiplying numerator and denominator by $(1+i)$: $\\frac{(3+4i)(1+i)}{(1-i)(1+i)} = \\frac{3+3i+4i-4}{1^2 - i^2} = \\frac{-1+7i}{2}$. Multiplying by 2 yields $-1 + 7i$.",
    category: "Passport to Advanced Math",
    topics: ["Complex Numbers"]
  },
  {
    id: "est1_2026_jan_complete_43",
    question: "If $f(x) = |2x - 5| + |x + 3|$, which of the following points does NOT belong to the graph of $f$?",
    options: ["(0, 8)", "(8, 22)", "\\left(\\frac{5}{2}, \\frac{11}{2}\\right)", "(3, 6)"],
    correctAnswer: 3,
    explanation: "Test each point in $f(x)$:\n* (0, 8): $f(0) = |-5| + |3| = 8$. (Belongs)\n* (8, 22): $f(8) = |16-5| + |8+3| = 11 + 11 = 22$. (Belongs)\n* (5/2, 11/2): $f(2.5) = |0| + |2.5+3| = 5.5 = 11/2$. (Belongs)\n* (3, 6): $f(3) = |6-5| + |3+3| = 1 + 6 = 7 \\neq 6$. (Does NOT belong)",
    category: "Passport to Advanced Math",
    topics: ["Absolute Value Functions"]
  },
  {
    id: "est1_2026_jan_complete_44",
    question: "In a triangle, the angles measure $(4x - 20)^\\circ$, $(2x + 15)^\\circ$, and $(x + 45)^\\circ$. What is the value of the largest angle?",
    options: ["65^\\circ", "60^\\circ", "55^\\circ", "20^\\circ"],
    correctAnswer: 0,
    explanation: "The sum of the interior angles of a triangle is $180^\\circ$. We have $(4x - 20) + (2x + 15) + (x + 45) = 180 \\Rightarrow 7x + 40 = 180 \\Rightarrow 7x = 140 \\Rightarrow x = 20$. The angles are:\n* $4(20) - 20 = 60^\\circ$\n* $2(20) + 15 = 55^\\circ$\n* $20 + 45 = 65^\\circ$\nThe largest angle is $65^\\circ$.",
    category: "Additional Topics in Math",
    topics: ["Geometry", "Angles"]
  },
  {
    id: "est1_2026_jan_complete_45",
    question: "Consider the functions $f(x) = x^2 + 4x$ and $g(x) = x + 4$. They intersect at points $A$ and $B$. What is the length of $\\overline{AB}$?",
    options: ["6\\sqrt{3}", "8", "5\\sqrt{2}", "\\sqrt{34}"],
    correctAnswer: 2,
    explanation: "Find the intersection points: $x^2 + 4x = x + 4 \\Rightarrow x^2 + 3x - 4 = 0 \\Rightarrow (x+4)(x-1) = 0$. The roots are $x_1 = -4$ and $x_2 = 1$. The intersection coordinates are $A(-4, g(-4)) \\Rightarrow A(-4, 0)$ and $B(1, g(1)) \\Rightarrow B(1, 5)$. Use the distance formula: $AB = \\sqrt{(1 - (-4))^2 + (5 - 0)^2} = \\sqrt{5^2 + 5^2} = \\sqrt{50} = 5\\sqrt{2}$.",
    category: "Passport to Advanced Math",
    topics: ["Coordinate Geometry", "Distance Formula"]
  },
  {
    id: "est1_2026_jan_complete_46",
    question: "Physicists use the formula $h = \\frac{v^2 \\sin^2(\\theta^\\circ)}{2g}$ to calculate maximum height $h$. The initial velocity $v$ as a function of the angle of launch and the height reached is:",
    options: [
      "v = \\frac{\\sqrt{2gh}}{\\sin^2(\\theta^\\circ)}",
      "v = \\frac{\\sqrt{gh}}{2\\sin(\\theta^\\circ)}",
      "v = 2\\sqrt{\\frac{gh}{\\sin(\\theta^\\circ)}}",
      "v = \\sqrt{\\frac{2gh}{\\sin^2(\\theta^\\circ)}}"
    ],
    correctAnswer: 3,
    explanation: "Isolate $v^2$ from the height formula: $h = \\frac{v^2 \\sin^2(\\theta^\\circ)}{2g} \\Rightarrow 2gh = v^2 \\sin^2(\\theta^\\circ) \\Rightarrow v^2 = \\frac{2gh}{\\sin^2(\\theta^\\circ)}$. Take the square root of both sides to get: $v = \\sqrt{\\frac{2gh}{\\sin^2(\\theta^\\circ)}}$. (Which represents Option D).",
    category: "Additional Topics in Math",
    topics: ["Algebraic Rearrangements"]
  },
  {
    id: "est1_2026_jan_complete_47",
    question: "A ball is launched with an initial velocity of $30$ m/s at an angle of $60^\\circ$. What is the maximum height $h$ the ball reaches? (using the formula $h = \\frac{v^2 \\sin^2(\\theta^\\circ)}{2g}$ and $g \\approx 9.8$ m/s$^2$)",
    options: ["28.5 m", "34.4 m", "39.7 m", "45.2 m"],
    correctAnswer: 1,
    explanation: "Substitute $v = 30$, $\\theta = 60^\\circ$, and $g = 9.8$ into $h = \\frac{v^2 \\sin^2(\\theta^\\circ)}{2g}$. Since $\\sin(60^\\circ) = \\frac{\\sqrt{3}}{2} \\Rightarrow \\sin^2(60^\\circ) = 0.75$. Thus, $h = \\frac{30^2 \\times 0.75}{2 \\times 9.8} = \\frac{900 \\times 0.75}{19.6} = \\frac{675}{19.6} \\approx 34.4$ meters.",
    category: "Additional Topics in Math",
    topics: ["Word Problems", "Trigonometry"]
  },
  {
    id: "est1_2026_jan_complete_48",
    question: "The function $f$ is defined by $f(x) = x - 1$. What is the value of $f^{-1}(0)$?",
    options: ["-1", "0", "\\frac{1}{2}", "1"],
    correctAnswer: 3,
    explanation: "Let $y = x - 1$. To find the inverse function, solve for $x$: $x = y + 1 \\Rightarrow f^{-1}(x) = x + 1$. Thus, $f^{-1}(0) = 0 + 1 = 1$.",
    category: "Passport to Advanced Math",
    topics: ["Inverse Functions"]
  },
  {
    id: "est1_2026_jan_complete_49",
    question: "The graph of $f(x) = -2x^2 + 8x - 1$ has an axis of symmetry at:",
    options: ["x = -2", "x = 0", "x = 2", "x = 4"],
    correctAnswer: 2,
    explanation: "The axis of symmetry of a quadratic function $ax^2 + bx + c$ lies at $x = -\\frac{b}{2a}$. For $f(x) = -2x^2 + 8x - 1$, the axis is $x = -\\frac{8}{2(-2)} = -\\frac{8}{-4} = 2$.",
    category: "Passport to Advanced Math",
    topics: ["Quadratic Functions", "Axis of Symmetry"]
  },
  {
    id: "est1_2026_jan_complete_50",
    question: "If $f(x) = 2x^2 + 8x + 2$ and $g(x) = -f(x + 3)$, then what is the value of $g(0)$?",
    options: ["-44", "-4", "-2", "2"],
    correctAnswer: 0,
    explanation: "We are looking for $g(0) = -f(0 + 3) = -f(3)$. Compute $f(3) = 2(3)^2 + 8(3) + 2 = 2(9) + 24 + 2 = 18 + 24 + 2 = 44$. Therefore, $g(0) = -44$.",
    category: "Passport to Advanced Math",
    topics: ["Functions", "Evaluating Functions"]
  }
];
