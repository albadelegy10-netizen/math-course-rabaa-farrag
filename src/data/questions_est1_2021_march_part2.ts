import { Question } from '../../types';

export const EST1_2021_MARCH_PART2: Question[] = [
  {
    id: "est1_2021_mar_c_1",
    question: "What is the value of x that satisfies the equation? $\\frac{6(x - 1) + 4}{3} - \\frac{3 - (5 - 4x)}{2} = 0$",
    options: ["$-\\frac{2}{5}$", "$-\\frac{3}{7}$", "There is no value of x for which the equation is true.", "There are infinitely many values of x for which the equation is true."],
    correctAnswer: 2,
    explanation: "Multiply by common denominator 6: $2(6x - 2) - 3(3 - 5 + 4x) = 0 \\Rightarrow 12x - 4 - 3(-2 + 4x) = 0 \\Rightarrow 12x - 4 + 6 - 12x = 0 \\Rightarrow 2 = 0$. This is a contradiction, so there is no solution.",
    youtubeLink: "https://youtu.be/DW1TQ0oN6-U?si=D8gZkfecnES-wDCh",
    category: ""
  },
  {
    id: "est1_2021_mar_c_2",
    question: "If $-\\frac{4}{5}x + 3 \\geq 2 - \\frac{1}{5}x$, what is the highest value of $\\frac{3}{2}x + 4$?",
    options: ["3.5", "4.5", "5.5", "6.5"],
    correctAnswer: 3,
    explanation: "$-\\frac{4}{5}x + 3 \\geq 2 - \\frac{1}{5}x \\Rightarrow 1 \\geq \\frac{3}{5}x \\Rightarrow x \\leq \\frac{5}{3}$. The expression $\\frac{3}{2}x + 4$ increases as x increases. The maximum is at $x = 5/3$: $\\frac{3}{2}(\\frac{5}{3}) + 4 = \\frac{5}{2} + 4 = 6.5$.",
    youtubeLink: "https://youtu.be/Gf3ggA18qFw?si=8iiBVxFmKr2tGNcw",
    category: ""
  },
  {
    id: "est1_2021_mar_c_3",
    question: "If $g(x) = ax^2 + bx + c$ represents the quadratic function whose graph is shown above, which of the following statements is not true?",
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="130" x2="300" y2="130" stroke="black" stroke-width="1"/>
      <line x1="80" y1="0" x2="80" y2="200" stroke="black" stroke-width="1"/>
      <text x="60" y="145" font-size="12">0</text>
      <text x="210" y="145" font-size="12">5</text>
      <text x="60" y="195" font-size="12">-5</text>
      <text x="60" y="55" font-size="12">5</text>
      <path d="M 60,0 Q 140,240 200,0" fill="none" stroke="steelblue" stroke-width="2"/>
    </svg>`,
    options: ["a > 0", "b > 0", "c > 0", "3a + b = 0"],
    correctAnswer: 1,
    explanation: "The parabola opens upwards, so $a > 0$. It intersects the y-axis (where $x=0$) at $y=0$, indicating $c = 0$. The vertex's x-coordinate is positive ($x = -b/2a > 0$). Since $a$ is positive, $b$ must be negative ($b < 0$). Thus 'b > 0' is the false statement.",
    youtubeLink: "https://youtu.be/gDrdDFbumos?si=HR4Y7dfvAGBSl9JD",
    category: ""
  },
  {
    id: "est1_2021_mar_c_4",
    question: "A survey is done on 80 families from two cities A and B, separated into groups based on the number of cars they own. The results are shown in the table below. What is the mean number of cars owned by citizens in both cities A & B combined?",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Number of cars</th>
      <th class="border border-gray-400 px-2 py-1">City A</th>
      <th class="border border-gray-400 px-2 py-1">City B</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">1</td><td class="border border-gray-400 px-2 py-1">25</td><td class="border border-gray-400 px-2 py-1">20</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2</td><td class="border border-gray-400 px-2 py-1">31</td><td class="border border-gray-400 px-2 py-1">19</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">3</td><td class="border border-gray-400 px-2 py-1">14</td><td class="border border-gray-400 px-2 py-1">23</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">4</td><td class="border border-gray-400 px-2 py-1">8</td><td class="border border-gray-400 px-2 py-1">12</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">5</td><td class="border border-gray-400 px-2 py-1">2</td><td class="border border-gray-400 px-2 py-1">6</td></tr>
  </tbody>
</table>`,
    options: ["Between 1 and 2", "Between 2 and 3", "Between 3 and 4", "Between 4 and 5"],
    correctAnswer: 1,
    explanation: "Total families: $80 + 80 = 160$. Total cars: $1(45) + 2(50) + 3(37) + 4(20) + 5(8) = 45 + 100 + 111 + 80 + 40 = 376$. Mean = $376 / 160 = 2.35$, which is between 2 and 3.",
    youtubeLink: "https://youtu.be/1gW7z_6JHus?si=mZMxz3GOGh0JLbvA",
    category: ""
  },
  {
    id: "est1_2021_mar_c_5",
    question: "Using the same table, which measure of center is unchanged in both cities?",
    options: ["Mode", "Mean", "Median", "None of the above"],
    correctAnswer: 3,
    explanation: "For City A: Total=80, Median is 40th/41st value (which falls in 2 cars). Mode = 2. Mean = $171 / 80 = 2.1375$. For City B: Total=80, Median is 40th/41st value (which falls in 3 cars). Mode = 3. Mean = $205 / 80 = 2.5625$. Thus, Mode, Median, and Mean all change between the two cities.",
    youtubeLink: "https://youtu.be/1SuU2IgeZto?si=Q1dhWGmrR_3JqHIT",
    category: ""
  },
  {
    id: "est1_2021_mar_c_6",
    question: "If $f(x) = -3 - 2x$ and $g(x) = \\frac{-x^2}{6}$, which of the following could not be in the range of $f(g(x))$?",
    options: ["-4", "-2", "0", "2"],
    correctAnswer: 0,
    explanation: "$f(g(x)) = f(\\frac{-x^2}{6}) = -3 - 2(\\frac{-x^2}{6}) = -3 + \\frac{x^2}{3}$. Because $\\frac{x^2}{3} \\geq 0$, the minimum value of $f(g(x))$ is -3. Thus, any value less than -3 (such as -4) cannot be in the range.",
    youtubeLink: "https://youtu.be/_dxp22voK_Q?si=Oosq4-rjoMiGjR0q",
    category: ""
  },
  {
    id: "est1_2021_mar_c_7",
    question: "A shop sells two sizes of doughnuts: mini and regular. Mini doughnuts have a diameter of 1.8 inches while regular ones have a diameter of 3 inches. Approximately, by what percentage is a regular normal doughnut larger (in area) than a mini doughnut?",
    options: ["67%", "67\\pi%", "78%", "178%"],
    correctAnswer: 3,
    explanation: "The ratio of their diameters is $3 / 1.8 = 1.666... = 5/3$. The ratio of their areas is $(5/3)^2 = 25/9 \\approx 2.777...$. This means the area is $\\approx 277.8\\%$ of the mini doughnut's area. The percentage by which it is *larger* is $(2.777 - 1) \\times 100\\% \\approx 178\\%$.",
    youtubeLink: "https://youtu.be/UNymo3sgmME?si=aELk6orJFFtaL8Wo",
    category: ""
  },
  {
    id: "est1_2021_mar_c_8",
    question: "Line (A) passes through the points $(-\\frac{5}{2}; 0)$ and $(0; -\\frac{2}{3})$. Which of the following lines will never intersect with line (A)?",
    options: ["$y = -\\frac{5}{2}x - 1$", "$y = \\frac{5}{2}x - 1$", "$y = -\\frac{2}{5}x - 1$", "$y = \\frac{2}{5}x - 1$"],
    correctAnswer: 2,
    explanation: "Two lines will never intersect if they are parallel (i.e. strictly have the same slope). Slope of Line A is $m = -\\frac{2}{5}$. The option that matches is $y = -\\frac{2}{5}x - 1$.",
    youtubeLink: "https://youtu.be/IrTxSLbLJgg",
    category: ""
  },
  {
    id: "est1_2021_mar_c_9",
    question: "What is the value of k if the above system of simultaneous equations admits no solutions? \n$\\begin{cases} 2x + 15y = 18 \\\\ kx - 5y = -7 \\end{cases}$",
    options: ["$-\\frac{1}{3}$", "-6", "$-\\frac{2}{3}$", "$\\frac{2}{3}$"],
    correctAnswer: 2,
    explanation: "For no solutions, the slopes must be parallel, so $\\frac{a_1}{a_2} = \\frac{b_1}{b_2}$. $\\frac{2}{k} = \\frac{15}{-5} \\Rightarrow \\frac{2}{k} = -3 \\Rightarrow -3k = 2 \\Rightarrow k = -\\frac{2}{3}$.",
    youtubeLink: "https://youtu.be/qPv0qYcLAd4?si=zAi2xflkMDw9SPnT",
    category: ""
  },
  {
    id: "est1_2021_mar_c_10",
    question: "An oven costs $150 less than 4 times the cost of a microwave. If the oven and the microwave cost together $725, how much more does the oven cost than the microwave?",
    options: ["$175", "$275", "$375", "$550"],
    correctAnswer: 2,
    explanation: "Let M be the microwave cost. Oven $O = 4M - 150$. Together: $O + M = 725 \\Rightarrow (4M - 150) + M = 725 \\Rightarrow 5M = 875 \\Rightarrow M = 175$. Microwave = $175, Oven = $550. Difference: $550 - 175 = $375.",
    youtubeLink: "https://youtu.be/BA5VAAw8e0M?si=1dun4EZQSBenLz3C",
    category: ""
  },
  {
    id: "est1_2021_mar_c_11",
    question: "From 2020 to 2021, the amount in Tom’s bank account decreased by 11% to $49,840. What was the initial amount in her bank account?",
    options: ["$54,820", "$44,358", "$56,000", "$45,309"],
    correctAnswer: 2,
    explanation: "Decreasing by 11% means the remaining amount is 89% of the original. $0.89 \\times \\text{Initial} = 49840 \\Rightarrow \\text{Initial} = 49840 / 0.89 = 56000$.",
    youtubeLink: "https://youtu.be/SMwiBzMWVDo?si=anUtcSRbjwiXstC7",
    category: ""
  },
  {
    id: "est1_2021_mar_c_12",
    question: "What is the absolute value of the difference between the two roots of the equation $(4x + 1)^2 - 9x^2 = 0$?",
    options: ["$\\frac{8}{65}$", "$\\frac{6}{7}$", "$\\frac{1}{4}$", "$\\frac{3}{14}$"],
    correctAnswer: 1,
    explanation: "$(4x + 1)^2 - (3x)^2 = 0$. Using difference of squares: $(4x + 1 - 3x)(4x + 1 + 3x) = 0 \\Rightarrow (x + 1)(7x + 1) = 0$. Roots are $x = -1$ and $x = -1/7$. Absolute difference: $|-1 - (-1/7)| = |-6/7| = 6/7$.",
    youtubeLink: "https://youtu.be/g8vSJZsMQZ8?si=EcjSJfmKmxomcuUk",
    category: ""
  },
  {
    id: "est1_2021_mar_c_13",
    question: "The table below summarizes the results of a survey about the favorite school subject for a group of 350 students according to their educational stage. According to the data, which subject had the lowest percentage of likers among primary students?",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1">Primary</th>
      <th class="border border-gray-400 px-2 py-1">Secondary</th>
      <th class="border border-gray-400 px-2 py-1">Tertiary</th>
      <th class="border border-gray-400 px-2 py-1">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Math</td><td class="border border-gray-400 px-2 py-1">65</td><td class="border border-gray-400 px-2 py-1">80</td><td class="border border-gray-400 px-2 py-1">30</td><td class="border border-gray-400 px-2 py-1 font-bold">175</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">English</td><td class="border border-gray-400 px-2 py-1">35</td><td class="border border-gray-400 px-2 py-1">55</td><td class="border border-gray-400 px-2 py-1">10</td><td class="border border-gray-400 px-2 py-1 font-bold">100</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Science</td><td class="border border-gray-400 px-2 py-1">15</td><td class="border border-gray-400 px-2 py-1">10</td><td class="border border-gray-400 px-2 py-1">25</td><td class="border border-gray-400 px-2 py-1 font-bold">50</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">History</td><td class="border border-gray-400 px-2 py-1">10</td><td class="border border-gray-400 px-2 py-1">5</td><td class="border border-gray-400 px-2 py-1">10</td><td class="border border-gray-400 px-2 py-1 font-bold">25</td></tr>
    <tr class="font-bold bg-gray-100"><td class="border border-gray-400 px-2 py-1">Total</td><td class="border border-gray-400 px-2 py-1">125</td><td class="border border-gray-400 px-2 py-1">150</td><td class="border border-gray-400 px-2 py-1">75</td><td class="border border-gray-400 px-2 py-1">350</td></tr>
  </tbody>
</table>`,
    options: ["Math", "English", "Science", "History"],
    correctAnswer: 3,
    explanation: "Looking purely at the Primary column (out of 125 total): Math=65, English=35, Science=15, History=10. The lowest value is History (10), meaning it has the lowest percentage.",
    youtubeLink: "https://youtu.be/rfFlDXZ-Lr4?si=Fc9KFXxJQ79BLiSD",
    category: ""
  },
  {
    id: "est1_2021_mar_c_14",
    question: "If a secondary student is chosen randomly, what is the probability that he favors Math or Science?",
    options: ["$\\frac{9}{35}$", "$\\frac{18}{25}$", "$\\frac{8}{15}$", "$\\frac{3}{5}$"],
    correctAnswer: 3,
    explanation: "The condition 'given a secondary student is chosen' restricts the denominator to the secondary column total: 150. Students who favor Math or Science among secondary students: 80 (Math) + 10 (Science) = 90. Probability = 90 / 150 = 3/5.",
    youtubeLink: "https://youtu.be/A9K-q1I1yno?si=G56ELdnDqnIxFh1C",
    category: ""
  },
  {
    id: "est1_2021_mar_c_15",
    question: "Given a cone whose height is the quadruple of its diameter. If the volume of the cone is $72\\pi$, what is the diameter of its base?",
    options: ["4", "5", "6", "9"],
    correctAnswer: 2,
    explanation: "Height $h = 4d$. The radius $r = d/2$. Volume of cone: $V = \\frac{1}{3}\\pi r^2 h = 72\\pi \\Rightarrow \\frac{1}{3}(\\frac{d}{2})^2 (4d) = 72 \\Rightarrow \\frac{1}{3}(\\frac{d^2}{4})(4d) = 72 \\Rightarrow \\frac{d^3}{3} = 72 \\Rightarrow d^3 = 216$. Thus, $d = 6$.",
    youtubeLink: "https://youtu.be/N6XeFschSQ4?si=weiEec_CINKL3A9i",
    category: ""
  },
  {
    id: "est1_2021_mar_c_16",
    question: "If $11x - 7y = 6$ and $17x - 13y = 9$, what is the value of $x - y$?",
    options: ["0", "$-\\frac{1}{2}$", "$\\frac{1}{2}$", "-2"],
    correctAnswer: 2,
    explanation: "Subtract the first equation from the second: $(17x - 13y) - (11x - 7y) = 9 - 6 \\Rightarrow 6x - 6y = 3 \\Rightarrow 6(x - y) = 3 \\Rightarrow x - y = \\frac{3}{6} = \\frac{1}{2}$.",
    youtubeLink: "https://youtu.be/MJuRtAoIPH4?si=_dZ8eGDJUy5K_5B1",
    category: ""
  },
  {
    id: "est1_2021_mar_c_17",
    question: "Anton has $20 to spend on stationery. Pens ($p$) cost $1.4 each, coloring crayons ($c$) are priced at $3.5 per pack and highlighters ($h$) sell for $2 each. He must buy a notebook for $5.5 as well. Which of the following describes how many highlighters Anton can buy?",
    options: ["$h \\leq \\frac{14.5 - 1.4p - 3.5c}{2}$", "$h \\leq \\frac{14.5 + 1.4p + 3.5c}{2}$", "$h \\leq \\frac{20 - 1.4p - 3.5c}{2} - 5.5$", "$h \\leq \\frac{20 - 1.4p - 3.5c}{2}$"],
    correctAnswer: 0,
    explanation: "Total spent cannot exceed 20: $1.4p + 3.5c + 2h + 5.5 \\leq 20$. Subtract 5.5: $1.4p + 3.5c + 2h \\leq 14.5$. Isolate h: $2h \\leq 14.5 - 1.4p - 3.5c \\Rightarrow h \\leq \\frac{14.5 - 1.4p - 3.5c}{2}$.",
    youtubeLink: "https://youtu.be/9-zhqjAfDEU?si=TAlY8ZFpUYMWa5rD",
    category: ""
  },
  {
    id: "est1_2021_mar_c_18",
    question: "By what percentage should we raise the price of a good to return to its initial price knowing that it was subject to a 20% discount 2 weeks ago?",
    options: ["15%", "20%", "25%", "30%"],
    correctAnswer: 2,
    explanation: "Let the initial price be 100. After a 20% discount, the price is 80. To return to 100, we must increase by 20. The percentage increase is $20 / 80 = 1/4 = 25\\%$.",
    youtubeLink: "https://youtu.be/LZ4GPwNTIg0?si=BRwXCcvdAjZEZmzT",
    category: ""
  },
  {
    id: "est1_2021_mar_c_19",
    question: "The general elections in a country provided a parliament composed of 35% deputies from the democratic party, 20% for the conservative party, 30% for the republican party and 27 members of the labor party. How many more democrats are there than conservatives?",
    options: ["9", "18", "27", "36"],
    correctAnswer: 2,
    explanation: "Sum of given percentages: $35 + 20 + 30 = 85\\%$. Labor party makes up the remaining $15\\%$. If $15\\% = 27$ members, $1\\% = 27/15 = 1.8$ members. Democrats ($35\\%$) minus conservatives ($20\\%$) is a $15\\%$ difference. A $15\\%$ difference equals exactly 27 members.",
    youtubeLink: "https://youtu.be/Ip1dsBhy89U?si=_a-7dFnIcOtcD8XV",
    category: ""
  }
];
