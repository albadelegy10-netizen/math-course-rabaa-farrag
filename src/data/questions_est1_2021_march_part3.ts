import { Question } from '../../types';

export const EST1_2021_MARCH_PART3: Question[] = [
  {
    id: "est1_2021_mar_c_20",
    question: "Based on the graph above, what is the value of $f(-1) + g(-1) + h(-1)$?",
    svg: `<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="150" x2="300" y2="150" stroke="black" stroke-width="1"/>
      <line x1="150" y1="0" x2="150" y2="250" stroke="black" stroke-width="1"/>
      <text x="135" y="165" font-size="12">0</text>
      <text x="210" y="165" font-size="12">2</text>
      <text x="75" y="165" font-size="12">-2</text>
      <text x="135" y="225" font-size="12">-2</text>
      <!-- Draw the curves approx to intersect at x=-1 -->
      <path d="M 0,250 Q 80,110 150,150 T 300,10" fill="none" stroke="red" stroke-width="2" stroke-dasharray="4"/>
      <path d="M 60,250 Q 110,60 180,250" fill="none" stroke="steelblue" stroke-width="2"/>
      <path d="M 0,220 L 300,50" fill="none" stroke="green" stroke-width="2" stroke-dasharray="8 4"/>
      <text x="50" y="160" fill="steelblue" font-size="14">f(x)</text>
      <text x="200" y="170" fill="red" font-size="14">g(x)</text>
      <text x="260" y="120" fill="green" font-size="14">h(x)</text>
    </svg>`,
    options: ["-4", "-5", "-6", "-7"],
    correctAnswer: 1,
    explanation: "At $x = -1$, by carefully examining the grid points: $f(-1) = -1$, $g(-1) = -2$, and $h(-1) = -2$. Sum = $-1 + (-2) + (-2) = -5$.",
    youtubeLink: "https://youtu.be/tVfhyLrrmoo?si=erqkzinOCvvxqnQ8",
    category: ""
  },
  {
    id: "est1_2021_mar_c_21",
    question: "A painter paints walls at an average rate of 1.2 walls per hour. He is asked to paint a villa containing 18 rooms each containing 5.4 walls on average. How long will he be actively painting the villa?",
    options: ["2 days, 18 hours", "3 days", "3 days, 9 hours", "3 days, 18 hours"],
    correctAnswer: 2,
    explanation: "Total walls = $18 \\times 5.4 = 97.2$ walls. Total hours required = $97.2 / 1.2 = 81$ hours. We know 1 day = 24 hours. $81 / 24 = 3$ remainder 9. So 3 days and 9 hours.",
    youtubeLink: "https://youtu.be/P0Uh52NzfeE?si=bhRdDJlxZB8BBMtn",
    category: ""
  },
  {
    id: "est1_2021_mar_c_22",
    question: "The bar graph represents the percentage of money spent by a company on different sectors last year. If 200,000 dollars were spent on the transport sector, what was the budget used for salaries?",
    svg: `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="150" x2="350" y2="150" stroke="black"/>
      <line x1="30" y1="0" x2="30" y2="150" stroke="black"/>
      <text x="10" y="150" font-size="10">0</text>
      <text x="10" y="125" font-size="10">5</text>
      <text x="5" y="100" font-size="10">10</text>
      <text x="5" y="75" font-size="10">15</text>
      <text x="5" y="50" font-size="10">20</text>
      <text x="5" y="25" font-size="10">25</text>
      <!-- Infrastructure -->
      <rect x="50" y="50" width="15" height="100" fill="none" stroke="red"/>
      <text x="50" y="45" font-size="10">20</text>
      <!-- Transport -->
      <rect x="90" y="87.5" width="15" height="62.5" fill="orange"/>
      <text x="85" y="82" font-size="10">12.5</text>
      <!-- Advertisement -->
      <rect x="130" y="75" width="15" height="75" fill="none" stroke="gold"/>
      <text x="130" y="70" font-size="10">15</text>
      <!-- Taxes (10) -->
      <rect x="170" y="100" width="15" height="50" fill="none" stroke="blue"/>
      <text x="170" y="95" font-size="10">10</text>
      <!-- R&D (5) -->
      <rect x="210" y="125" width="15" height="25" fill="none" stroke="red"/>
      <text x="210" y="120" font-size="10">5</text>
      <!-- Salary (20) -->
      <rect x="250" y="50" width="15" height="100" fill="lightgreen" stroke="green"/>
      <text x="250" y="45" font-size="10">20</text>
    </svg>`,
    options: ["$320,000", "$340,000", "$360,000", "$370,000"],
    correctAnswer: 0,
    explanation: "Transport is 12.5%. $12.5\\% = 200,000$. The total budget is $200,000 / 0.125 = 1,600,000$. Salaries represent 20%. $20\\%$ of 1,600,000 = $320,000$.",
    youtubeLink: "https://youtu.be/CIrsfLVo-uo?si=8wgGOiWRhDM_3q_3",
    category: ""
  },
  {
    id: "est1_2021_mar_c_23",
    question: "In which quadrant(s) does the system above have no solutions? \n$\\begin{cases} y \\leq 3x - 2 \\\\ y > \\frac{3x}{4} - 3 \\end{cases}$",
    options: ["Quadrant I", "Quadrants II and III", "Quadrant II", "Quadrant III"],
    correctAnswer: 2,
    explanation: "The bounding region between $y=3x-2$ and $y=0.75x-3$ intersects at $(3x-2 = 0.75x-3 \\Rightarrow 2.25x = -1 \\Rightarrow x \\approx -0.44)$. Plugging in points for Quadrant II (negative x, positive y): If $x=-1$, the system asks for $y \\leq -5$ and $y > -3.75$, which is impossible ($y$ cannot be both greater than -3.75 and less than -5). Testing multiple points shows no overlap falls in Quadrant II.",
    youtubeLink: "https://youtu.be/bWx5hsXgc9Y?si=0dQW00qhHXfZolUR",
    category: ""
  },
  {
    id: "est1_2021_mar_c_24",
    question: "A line, having a slope of $- \\frac{1}{5}$ passes through the points $A(2 ; \\alpha-3)$ and $B(2\\alpha+1 ; -4)$. What is the value of $\\alpha$?",
    options: ["-2", "-2/3", "2/3", "2"],
    correctAnswer: 0,
    explanation: "Slope $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-4 - (\\alpha - 3)}{(2\\alpha + 1) - 2} = \\frac{-\\alpha - 1}{2\\alpha - 1}$. We set this to $-1/5$: $\\frac{-\\alpha - 1}{2\\alpha - 1} = -\\frac{1}{5} \\Rightarrow 5(-\\alpha - 1) = -(2\\alpha - 1) \\Rightarrow -5\\alpha - 5 = -2\\alpha + 1 \\Rightarrow -3\\alpha = 6 \\Rightarrow \\alpha = -2$.",
    youtubeLink: "https://youtu.be/RhVqQtHj0AQ?si=wpq-in-5zNQ11HJM",
    category: ""
  },
  {
    id: "est1_2021_mar_c_25",
    question: "The height of a launched cannonball can be described as a function of time according to the following quadratic equation: $h(t) = -2t^2 + 14t + 36$. What is the maximum height attained by the cannonball?",
    options: ["60.5", "36", "9", "2"],
    correctAnswer: 0,
    explanation: "Max height occurs at vertex. $t = -b/(2a) = -14 / (2(-2)) = 14/4 = 3.5$. Substitute $t = 3.5$ into $h(t)$: $h(3.5) = -2(3.5)^2 + 14(3.5) + 36 = -2(12.25) + 49 + 36 = -24.5 + 49 + 36 = 24.5 + 36 = 60.5$.",
    youtubeLink: "https://youtu.be/DBDXmlFDC1M?si=HJV8eegc8_qEXrW6",
    category: ""
  },
  {
    id: "est1_2021_mar_c_26",
    question: "Using the same formula: $h(t) = -2t^2 + 14t + 36$, after how many seconds will the cannonball hit the ground?",
    options: ["2", "7", "9", "11"],
    correctAnswer: 2,
    explanation: "Hit the ground when $h(t) = 0$. $-2t^2 + 14t + 36 = 0$. Divide by -2: $t^2 - 7t - 18 = 0$. Factor: $(t - 9)(t + 2) = 0$. Since time must be positive, $t = 9$ seconds.",
    youtubeLink: "https://youtu.be/VMUPUDM14eI?si=4k3KDTiafz3-sugG",
    category: ""
  },
  {
    id: "est1_2021_mar_c_27",
    question: "Which of the following is equivalent to the quotient of the division given above: $\\frac{\\sqrt[4]{3}}{\\sqrt[8]{3}}$?",
    options: ["$\\sqrt{3}$", "$\\sqrt[4]{3}$", "$\\sqrt[8]{3}$", "9"],
    correctAnswer: 2,
    explanation: "Rewrite applying exponent rules: $\\frac{3^{1/4}}{3^{1/8}} = 3^{1/4 - 1/8} = 3^{2/8 - 1/8} = 3^{1/8} = \\sqrt[8]{3}$.",
    youtubeLink: "https://youtu.be/xbcZu7xtmhQ?si=CgcvNdh3bKrhqoiJ",
    category: ""
  },
  {
    id: "est1_2021_mar_c_28",
    question: "The number of bees in a beehive rose from 2400 to 2520 in a month. How many bees do we expect to have in the next month knowing that the population experiences the same percent increase every month?",
    options: ["2600", "2640", "2646", "2656"],
    correctAnswer: 2,
    explanation: "Percent increase = $(2520 - 2400) / 2400 = 120 / 2400 = 0.05$ (5%). Next month increase will be $5\\%$ of 2520: $2520 \\times 1.05 = 2646$.",
    youtubeLink: "https://youtu.be/Pb_1A2d2F4w",
    category: ""
  },
  {
    id: "est1_2021_mar_c_29",
    question: "Which value of x could make the inequality $\\frac{2}{3}(x + 2) - x > 5$ true?",
    options: ["-12", "-10", "-8", "-6"],
    correctAnswer: 0,
    explanation: "Multiply by 3: $2(x+2) - 3x > 15 \\Rightarrow 2x + 4 - 3x > 15 \\Rightarrow -x > 11 \\Rightarrow x < -11$. The only option completely less than -11 is -12.",
    youtubeLink: "https://youtu.be/RLOtPhfzYsU?si=5dwEfnPh9lXdKK_3",
    category: ""
  },
  {
    id: "est1_2021_mar_c_30",
    question: "Harvey wants to buy a new apartment. He estimates that he will need its area to be around 1400 square feet. But, the provider measures its units in square meters. If 1 meter is nearly 3.28 feet, how many square meters approximately will Harvey need?",
    options: ["427", "130", "4592", "15062"],
    correctAnswer: 1,
    explanation: "We convert square feet to square meters by dividing by $(3.28)^2$. $1\\text{ m}^2 = (3.28\\text{ ft})^2 = 10.7584\\text{ ft}^2$. $1400 / 10.7584 \\approx 130.13$. So he needs approximately 130 square meters.",
    youtubeLink: "https://youtu.be/ghWIhIt0DjQ?si=n81e6weRckp4NakA",
    category: ""
  },
  {
    id: "est1_2021_mar_c_31",
    question: "The mean of x,y,z and t is 11.5. The mean of x,y,z,t and q is 11.8. What is the value of q?",
    type: "grid-in",
    options: [],
    correctAnswer: "13",
    answerText: "13",
    explanation: "Sum of x,y,z,t = $4 \\times 11.5 = 46$. Sum of x,y,z,t,q = $5 \\times 11.8 = 59$. Therefore, $q = 59 - 46 = 13$.",
    youtubeLink: "https://youtu.be/tDSuodRGwKA?si=qdD5GE62z2lilqwe",
    category: ""
  },
  {
    id: "est1_2021_mar_c_32",
    question: "The function g is defined by $g(x) = 3x^2 + kx - 8$ and $g(-2) = -4$. What is the value of $g(-3)$?",
    type: "grid-in",
    options: [],
    correctAnswer: "7",
    answerText: "7",
    explanation: "First, find k. $g(-2) = 3(-2)^2 + k(-2) - 8 = -4 \\Rightarrow 3(4) - 2k - 8 = -4 \\Rightarrow 12 - 2k - 8 = -4 \\Rightarrow 4 - 2k = -4 \\Rightarrow 2k = 8 \\Rightarrow k = 4$. So $g(x) = 3x^2 + 4x - 8$. Now find $g(-3)$: $g(-3) = 3(-3)^2 + 4(-3) - 8 = 3(9) - 12 - 8 = 27 - 20 = 7$.",
    youtubeLink: "https://youtu.be/hHrEKvoN2bY?si=gICSXv8t0HrzY_X4",
    category: ""
  },
  {
    id: "est1_2021_mar_c_33",
    question: "What is the remainder of the division of $P(x) = 4x^3 - x^2 - 8x + 6$ by $x - 1$?",
    type: "grid-in",
    options: [],
    correctAnswer: "1",
    answerText: "1",
    explanation: "By the Remainder Theorem, the remainder of dividing $P(x)$ by $x - 1$ is $P(1)$. $P(1) = 4(1)^3 - (1)^2 - 8(1) + 6 = 4 - 1 - 8 + 6 = 1$.",
    youtubeLink: "https://youtu.be/xMA1rkr0FHY?si=7KXUZTVfVOa5njyg",
    category: ""
  },
  {
    id: "est1_2021_mar_c_34",
    question: "The concentration of solution in sugar is directly proportional to the mass of sugar dissolved in the solution. If the concentration of a solution is 1.5mol/L when 54g are dissolved, how many grams are dissolved if the concentration is 2.1mol/L?",
    type: "grid-in",
    options: [],
    correctAnswer: "75.6",
    answerText: "75.6",
    explanation: "Let C = kM. $1.5 = k(54) \\Rightarrow k = 1.5/54$. Therefore, $2.1 = (1.5/54) M \\Rightarrow M = 2.1 \\times 54 / 1.5 = 75.6$g.",
    youtubeLink: "https://youtu.be/q4iaaQDKXWc?si=IYWxLpkTPwj2sqok",
    category: ""
  },
  {
    id: "est1_2021_mar_c_35",
    question: "In a right triangle, if $\\tan(x) = \\frac{24}{7}$, then what is the value of $\\cos(x)$?",
    type: "grid-in",
    options: [],
    correctAnswer: "7/25",
    answerText: "7/25",
    explanation: "Opposite = 24, Adjacent = 7. Hypotenuse = $\\sqrt{24^2 + 7^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25$. $\\cos(x) = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{7}{25}$.",
    youtubeLink: "https://youtu.be/c5fq7gYVwxc?si=22vBunmrnPpQE_yp",
    category: ""
  },
  {
    id: "est1_2021_mar_c_36",
    question: "The table shows several values for the functions p(x) and q(x). What is the value of p(q(0))?",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">x</th>
      <th class="border border-gray-400 px-2 py-1">-3</th>
      <th class="border border-gray-400 px-2 py-1">-2</th>
      <th class="border border-gray-400 px-2 py-1">-1</th>
      <th class="border border-gray-400 px-2 py-1">0</th>
      <th class="border border-gray-400 px-2 py-1">1</th>
      <th class="border border-gray-400 px-2 py-1">2</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold bg-gray-100">p(x)</td><td class="border border-gray-400 px-2 py-1">7</td><td class="border border-gray-400 px-2 py-1">4</td><td class="border border-gray-400 px-2 py-1">1</td><td class="border border-gray-400 px-2 py-1">-2</td><td class="border border-gray-400 px-2 py-1">-5</td><td class="border border-gray-400 px-2 py-1">-8</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold bg-gray-100">q(x)</td><td class="border border-gray-400 px-2 py-1">-7</td><td class="border border-gray-400 px-2 py-1">-5</td><td class="border border-gray-400 px-2 py-1">-3</td><td class="border border-gray-400 px-2 py-1">-1</td><td class="border border-gray-400 px-2 py-1">1</td><td class="border border-gray-400 px-2 py-1">3</td></tr>
  </tbody>
</table>`,
    type: "grid-in",
    options: [],
    correctAnswer: "1",
    answerText: "1",
    explanation: "First, look up $q(0)$. From the table, when $x = 0$, $q(x) = -1$. Next, look up $p(-1)$. From the table, when $x = -1$, $p(x) = 1$. Thus, $p(q(0)) = 1$.",
    youtubeLink: "https://youtu.be/3ZiHBtt5PLk?si=jMkfoLpU_nhCTIFS",
    category: ""
  },
  {
    id: "est1_2021_mar_c_37",
    question: "Consider the system \\n$\\begin{cases} -2x + y < 3 \\\\ y + x \\geq -5 \\end{cases}$ \\nFor $x = 2$, what is the highest integer value of y?",
    type: "grid-in",
    options: [],
    correctAnswer: "6",
    answerText: "6",
    explanation: "Substitute $x = 2$ into both inequalities: $-2(2) + y < 3 \\Rightarrow -4 + y < 3 \\Rightarrow y < 7$. For the second one: $y + 2 \\geq -5 \\Rightarrow y \\geq -7$. The range for $y$ is $[-7, 7)$. Since y must be strictly less than 7, the highest integer value is 6.",
    youtubeLink: "https://youtu.be/eK4PfeifJxo?si=bvh0FkPYRdHY9q8i",
    category: ""
  },
  {
    id: "est1_2021_mar_c_38",
    question: "Trevor has $600 to spend on shopping, 25 percent of which he spent to buy groceries. If he budgets 30 percent of the remaining amount for clothes, allots $120 for cooking utensils and spends the rest on gaming accessories, what percentage of the original $600 did he spend on gaming accessories? (Input your answer without the % sign)",
    type: "grid-in",
    options: [],
    correctAnswer: "32.5",
    answerText: "32.5",
    explanation: "Groceries: $25\\%$ of $600 = $150. Remaining amount = $450. Clothes: $30\\%$ of $450 = $135. Balance = $450 - 135 = 315. Utensils = $120. Final balance for gaming accessories = $315 - 120 = $195. Percentage of original = $(195 / 600) \\times 100 = 32.5\\%$.",
    youtubeLink: "https://youtu.be/V86uIb7y0Kc?si=Y9-2q7zuGA_FSdXP",
    category: ""
  }
];
