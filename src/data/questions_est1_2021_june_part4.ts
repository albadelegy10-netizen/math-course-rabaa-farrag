import { Question } from '../../types';

export const EST1_2021_JUNE_PART4: Question[] = [
  {
    id: "est1_2021_june_q37",
    examId: "EST12021June",
    question: "Anton has $\\$20$ to spend on stationary. Pens (p) cost $\\$1.4$ each, coloring crayons (c) are priced at $\\$3.5$ per pack and highlighters (h) sell for $\\$2$ each. He must buy a notebook for $\\$5.5$ as well. Which of the following describes how many highlighters Anton can buy?",
    options: [
      "$h \\le \\frac{14.5 - 1.4p - 3.5c}{2}$",
      "$h \\le \\frac{14.5 + 1.4p + 3.5c}{2}$",
      "$h \\le \\frac{20 - 1.4p - 3.5c}{2} - 5.5$",
      "$h \\le \\frac{20 - 1.4p - 3.5c}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Total spent cannot exceed $\\$20$.\nThe cost of the items is $1.4p + 3.5c + 2h + 5.5$.\nInequality: $1.4p + 3.5c + 2h + 5.5 \\le 20$.\nSubtract 5.5 from both sides: $1.4p + 3.5c + 2h \\le 14.5$.\nIsolate $2h$: $2h \\le 14.5 - 1.4p - 3.5c$.\nDivide by 2: $h \\le \\frac{14.5 - 1.4p - 3.5c}{2}$."
  },
  {
    id: "est1_2021_june_q38",
    examId: "EST12021June",
    question: "By what percentage should we raise the price of a good to return to its initial price knowing that it was subject to a 20% discount 2 weeks ago?",
    options: [
      "15%",
      "20%",
      "25%",
      "30%"
    ],
    correctAnswer: 2,
    explanation: "Let the initial price be 100. After a 20% discount, the new price is 80.\nTo return to 100, the price must increase by 20.\nThe percentage increase is based on the current price (80): $\\frac{20}{80} = \\frac{1}{4} = 25\\%$."
  },
  {
    id: "est1_2021_june_q39",
    examId: "EST12021June",
    question: "The general elections in a country provided a parliament composed of 35% deputies from the democratic party, 20% for the conservative party , 30% for the republican party and 27 members of the labor party. How many more democrats are there than conservatives?",
    options: [
      "9",
      "18",
      "27",
      "36"
    ],
    correctAnswer: 2,
    explanation: "First, find the percentage of the labor party. The sum of percentages must be 100%.\nLabor party % = $100\\% - (35\\% + 20\\% + 30\\%) = 100\\% - 85\\% = 15\\%$.\nWe know 15% corresponds to 27 members.\nTotal members $T$: $0.15T = 27 \\implies T = \\frac{27}{0.15} = 180$.\nThe number of democrats is $35\\%$ of 180 = $0.35 \\times 180 = 63$.\nThe number of conservatives is $20\\%$ of 180 = $0.20 \\times 180 = 36$.\nThe difference is $63 - 36 = 27$."
  },
  {
    id: "est1_2021_june_q40",
    examId: "EST12021June",
    question: "Based on the graph above, what is the value of $f(-1)+g(-1)+h(-1)$?",
    options: [
      "-4",
      "-5",
      "-6",
      "-7"
    ],
    correctAnswer: 1,
    explanation: "Looking at the graph at $x = -1$, the green dashed line $h(x)$ is at $y = -2$, the red dotted line $g(x)$ is at $y = -2$, and the blue solid curve $f(x)$ is at $y = -1$.\nSo, $f(-1) + g(-1) + h(-1) = -1 + (-2) + (-2) = -5$.\n(Note: Based on the provided answer key, the value is -5, hence B)."
  },
  {
    id: "est1_2021_june_q41",
    examId: "EST12021June",
    question: "A painter paints walls at an average rate of 1.2 walls per hour. He is asked to paint a villa containing 18 rooms each containing 5.4 walls on average. How long will he be actively painting the villa?",
    options: [
      "2 days, 18 hours",
      "3 days",
      "3 days, 9 hours",
      "3 days, 18 hours"
    ],
    correctAnswer: 2,
    explanation: "Total walls to paint = $18 \\rooms \\times 5.4 \\walls/\\room = 97.2$ walls.\nTotal time = $\\frac{97.2 \\walls}{1.2 \\walls/hr} = 81$ hours.\nConvert 81 hours to days and hours: $81 = 3 \\times 24 + 9$.\nSo, 3 days and 9 hours."
  },
  {
    id: "est1_2021_june_q42",
    examId: "EST12021June",
    question: "The bar graph above represents the percentage of money spent by a company on different sectors last year. If 200,000 dollars were spent on the transport sector, what was the budget used for salaries?",
    options: [
      "$\\$320,000$",
      "$\\$340,000$",
      "$\\$360,000$",
      "$\\$370,000$"
    ],
    correctAnswer: 0,
    explanation: "From the given graph data, Transport is 12.5% and Salary is 20%.\nIf 12.5% corresponds to 200,000 dollars, then 1% is $\\frac{200,000}{12.5} = 16,000$ dollars.\nThe budget for salaries (20%) would be $20 \\times 16,000 = 320,000$ dollars."
  },
  {
    id: "est1_2021_june_q43",
    examId: "EST12021June",
    question: "$\\begin{cases} y \\le 3x - 2 \\\\ y > \\frac{3x}{4} - 3 \\end{cases}$\n\nIn which quadrant(s) does the system above have no solutions?",
    options: [
      "Quadrant I",
      "Quadrants II and III",
      "Quadrant II",
      "Quadrant III"
    ],
    correctAnswer: 2,
    explanation: "The first inequality $y \\le 3x - 2$ represents the region below the line $y = 3x - 2$. In Quadrant II, $x < 0$ and $y > 0$. If $x < 0$, then $3x - 2$ is negative. Thus, $y$ would have to be $\\le$ a negative number, which contradicts $y > 0$ for Quadrant II. Therefore, the system has no solutions in Quadrant II."
  },
  {
    id: "est1_2021_june_q44",
    examId: "EST12021June",
    question: "A line, having a slope of $-\\frac{1}{5}$ passes through the points $A (2 ; \\alpha-3)$ and $B (2\\alpha+1 ; -4)$. What is the value of $\\alpha$?",
    options: [
      "-2",
      "-\\frac{2}{3}",
      "\\frac{2}{3}",
      "2"
    ],
    correctAnswer: 0,
    explanation: "The slope $m = \\frac{y_2 - y_1}{x_2 - x_1}$.\n$m = \\frac{-4 - (\\alpha - 3)}{2\\alpha + 1 - 2} = \\frac{-4 - \\alpha + 3}{2\\alpha - 1} = \\frac{-\\alpha - 1}{2\\alpha - 1}$.\nWe are given that the slope is $-\\frac{1}{5}$:\n$\\frac{-\\alpha - 1}{2\\alpha - 1} = -\\frac{1}{5}$.\nCross multiply (or multiply both sides by $-1$ first: $\\frac{\\alpha + 1}{2\\alpha - 1} = \\frac{1}{5}$):\n$5(\\alpha + 1) = 2\\alpha - 1$\n$5\\alpha + 5 = 2\\alpha - 1$\n$3\\alpha = -6 \\implies \\alpha = -2$."
  },
  {
    id: "est1_2021_june_q45",
    examId: "EST12021June",
    question: "The height of a launched cannonball can be described as a function of time according to the following quadratic equation:\n$h(t) = -2t^2 + 14t + 36$\nWhat is the maximum height attained by the cannonball?",
    options: [
      "60.5",
      "36",
      "9",
      "2"
    ],
    correctAnswer: 0,
    explanation: "The maximum height of a downward-opening parabola $h(t) = at^2 + bt + c$ occurs at $t = -\\frac{b}{2a}$.\n$t = -\\frac{14}{2(-2)} = \\frac{14}{4} = 3.5$ seconds.\nSubstitute $t = 3.5$ into the equation to find the maximum height:\n$h(3.5) = -2(3.5)^2 + 14(3.5) + 36 = -2(12.25) + 49 + 36 = -24.5 + 49 + 36 = 24.5 + 36 = 60.5$."
  },
  {
    id: "est1_2021_june_q46",
    examId: "EST12021June",
    question: "The height of a launched cannonball can be described as a function of time according to the following quadratic equation:\n$h(t) = -2t^2 + 14t + 36$\nAfter how many seconds will the cannonball hit the ground?",
    options: [
      "2",
      "7",
      "9",
      "11"
    ],
    correctAnswer: 2,
    explanation: "The cannonball hits the ground when $h(t) = 0$.\n$-2t^2 + 14t + 36 = 0$.\nDivide by -2: $t^2 - 7t - 18 = 0$.\nFactor the quadratic equation: $(t - 9)(t + 2) = 0$.\nThe possible values are $t = 9$ or $t = -2$. Since time must be positive, $t = 9$ seconds."
  },
  {
    id: "est1_2021_june_q47",
    examId: "EST12021June",
    question: "Which of the following is equivalent to the quotient of the division $\\frac{\\sqrt[4]{3}}{\\sqrt[8]{3}}$?",
    options: [
      "$\\sqrt{3}$",
      "$\\sqrt[4]{3}$",
      "$\\sqrt[8]{3}$",
      "9"
    ],
    correctAnswer: 2,
    explanation: "Convert the radicals to fractional exponents: $\\sqrt[4]{3} = 3^{\\frac{1}{4}}$ and $\\sqrt[8]{3} = 3^{\\frac{1}{8}}$.\nThe division is $\\frac{3^{\\frac{1}{4}}}{3^{\\frac{1}{8}}}$.\nSubtract the exponents: $\\frac{1}{4} - \\frac{1}{8} = \\frac{2}{8} - \\frac{1}{8} = \\frac{1}{8}$.\nThe result is $3^{\\frac{1}{8}}$, which is $\\sqrt[8]{3}$."
  },
  {
    id: "est1_2021_june_q48",
    examId: "EST12021June",
    question: "The number of bees in a beehive rose from 2400 to 2520 in a month. How many bees do we expect to have in the next month knowing that the population experiences the same percent increase every month?",
    options: [
      "2600",
      "2640",
      "2646",
      "2656"
    ],
    correctAnswer: 2,
    explanation: "First, calculate the percent increase: $\\frac{2520 - 2400}{2400} = \\frac{120}{2400} = 0.05 = 5\\%$.\nThe population increases by 5% each month, which means multiplying by 1.05.\nFor the next month: $2520 \\times 1.05 = 2646$ bees."
  }
];
