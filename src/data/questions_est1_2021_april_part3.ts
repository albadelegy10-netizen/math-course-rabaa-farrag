import { Question } from "../../types";

export const EST1_2021_APRIL_PART3: Question[] = [
  {
    id: "est1_2021_april_41",
    question: "In 2011, the population in Cairo was $9.12$ million. Considering the population was increasing by $1\\%$ each year, what could be the approximate population in Cairo in 2022?",
    options: [
      "$10.074154$ million",
      "$10.123200$ million",
      "$10.174896$ million",
      "$10.276645$ million"
    ],
    correctAnswer: 2,
    explanation: "The formula for exponential growth is $P = P_0(1 + r)^t$.\nHere, $P_0 = 9.12$ million, $r = 1\\% = 0.01$, and $t = 2022 - 2011 = 11$ years.\n$P = 9.12(1 + 0.01)^{11} = 9.12(1.01)^{11}$.\n$1.01^{11} \\approx 1.115668$.\n$P \\approx 9.12 \\times 1.115668 \\approx 10.174896$ million.",
    category: "Problem Solving and Data Analysis",
    topics: ["Exponential Growth"]
  },
  {
    id: "est1_2021_april_42",
    question: "What are the values of $a$ and $b$ if $f(x) = (2a - 3)x^2 + bx - 1$ is equivalent to $g(x) = (4a + 3)x^2 + (3 - b)x - 1$?",
    options: [
      "$a = 3$ and $b = 1.5$",
      "$a = -3$ and $b = 1.5$",
      "$a = -3$ and $b = -1.5$",
      "$a = 3$ and $b = -1.5$"
    ],
    correctAnswer: 1,
    explanation: "For the two polynomials to be equivalent, their corresponding coefficients must be equal.\nEquating the coefficients of $x^2$:\n$2a - 3 = 4a + 3$\n$-2a = 6 \\Rightarrow a = -3$.\nEquating the coefficients of $x$:\n$b = 3 - b$\n$2b = 3 \\Rightarrow b = 1.5$.",
    category: "Passport to Advanced Math",
    topics: ["Polynomials", "Equivalent Expressions"]
  },
  {
    id: "est1_2021_april_43",
    question: "If $4x + 14y = -7$, what is the value of $-x - \\frac{7}{2}y$?",
    options: [
      "$-\\frac{7}{4}$",
      "$\\frac{7}{4}$",
      "$-\\frac{7}{2}$",
      "$\\frac{7}{2}$"
    ],
    correctAnswer: 1,
    explanation: "We are given $4x + 14y = -7$.\nNotice that $-x - \\frac{7}{2}y$ is exactly $-\\frac{1}{4}$ of the given expression.\nDivide the entire given equation by $-4$:\n$\\frac{4x + 14y}{-4} = \\frac{-7}{-4}$\n$-x - \\frac{14}{4}y = \\frac{7}{4}$\n$-x - \\frac{7}{2}y = \\frac{7}{4}$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2021_april_44",
    question: "Acceleration is a vector quantity that represents the rate of change of velocity over time. In physics, when the velocity of an object is changing, it means the object is either accelerating or decelerating. The formula used to find the velocity $\\vec{v}$ of an object is $\\vec{v} = \\frac{\\Delta\\vec{r}}{\\Delta t}$ and that of the acceleration is $\\vec{a} = \\frac{\\Delta\\vec{v}}{\\Delta t}$, where $\\Delta\\vec{r}$ is the displacement vector (change in position), $\\Delta\\vec{v}$ is the change in velocity vector, and $\\Delta t$ is the change in time of the object.\n\nWhich of the following statements is true regarding the given formula?\n\nI. If $\\Delta\\vec{r}$ increases and $\\Delta t$ decreases, the acceleration will increase.\nII. If $\\Delta\\vec{r}$ decreases and $\\Delta t$ increases, the acceleration will increase.\nIII. If $\\Delta\\vec{r}$ decreases and $\\Delta t$ increases, the acceleration will decrease.",
    options: [
      "I only",
      "II only",
      "I and II",
      "I and III"
    ],
    correctAnswer: 3,
    explanation: "Substitute $\\Delta\\vec{v} = \\frac{\\Delta\\vec{r}}{\\Delta t}$ into the acceleration formula:\n$\\vec{a} = \\frac{\\frac{\\Delta\\vec{r}}{\\Delta t}}{\\Delta t} = \\frac{\\Delta\\vec{r}}{(\\Delta t)^2}$.\nFrom this combined formula, we can see that acceleration $\\vec{a}$ is directly proportional to $\\Delta\\vec{r}$ and inversely proportional to the square of $\\Delta t$.\nI. If $\\Delta\\vec{r}$ increases (numerator increases) and $\\Delta t$ decreases (denominator decreases), the overall fraction $\\vec{a}$ will increase. This is true.\nII. If $\\Delta\\vec{r}$ decreases (numerator decreases) and $\\Delta t$ increases (denominator increases), the overall fraction $\\vec{a}$ will decrease. Statement II says it will increase, so this is false.\nIII. As shown above, if $\\Delta\\vec{r}$ decreases and $\\Delta t$ increases, the acceleration will decrease. This is true.\nTherefore, statements I and III are true.",
    category: "Heart of Algebra",
    topics: ["Interpreting Linear Models", "Ratios and Proportions"]
  },
  {
    id: "est1_2021_april_45",
    question: "$-3 < 2x - y \\le 14$\nWhich point could be the solution for the inequality above?",
    options: [
      "$(0, 3)$",
      "$(4, -8)$",
      "$(3, 4)$",
      "$(4, 12)$"
    ],
    correctAnswer: 2,
    explanation: "Let's test each point $(x, y)$ in the inequality $-3 < 2x - y \\le 14$:\nA. $(0, 3)$: $2(0) - 3 = -3$. Is $-3 < -3$? No. False.\nB. $(4, -8)$: $2(4) - (-8) = 8 + 8 = 16$. Is $16 \\le 14$? No. False.\nC. $(3, 4)$: $2(3) - 4 = 6 - 4 = 2$. Is $-3 < 2 \\le 14$? Yes. True.\nD. $(4, 12)$: $2(4) - 12 = 8 - 12 = -4$. Is $-3 < -4$? No. False.\nTherefore, $(3, 4)$ is the correct solution.",
    category: "Heart of Algebra",
    topics: ["Linear Inequalities"]
  },
  {
    id: "est1_2021_april_46",
    question: "For what values of $x$ is $f(x) = \\frac{2x^2 - 3}{(x - 3)(2x + 5)}$ undefined?",
    options: [
      "$x = 2.5$ and $x = 3$",
      "$x = -2.5$ and $x = -3$",
      "$x = 2.5$ and $x = -3$",
      "$x = -2.5$ and $x = 3$"
    ],
    correctAnswer: 3,
    explanation: "A rational function is undefined when its denominator is equal to zero.\nSet the denominator to zero:\n$(x - 3)(2x + 5) = 0$\nThis gives two equations:\n$x - 3 = 0 \\Rightarrow x = 3$\n$2x + 5 = 0 \\Rightarrow 2x = -5 \\Rightarrow x = -2.5$\nThe function is undefined for $x = 3$ and $x = -2.5$.",
    category: "Passport to Advanced Math",
    topics: ["Rational Expressions"]
  },
  {
    id: "est1_2021_april_47",
    question: "If $\\frac{a}{2b + 1} = \\frac{1}{2}$, which of the following is correct?",
    options: [
      "$a + b = \\frac{1}{2}$",
      "$a - b = \\frac{1}{2}$",
      "$2a - b = \\frac{1}{2}$",
      "$a - 2b = \\frac{1}{2}$"
    ],
    correctAnswer: 1,
    explanation: "Given $\\frac{a}{2b + 1} = \\frac{1}{2}$.\nCross-multiply to get:\n$2a = 1(2b + 1)$\n$2a = 2b + 1$\nSubtract $2b$ from both sides:\n$2a - 2b = 1$\nDivide the entire equation by 2:\n$a - b = \\frac{1}{2}$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2021_april_48",
    question: "Questions 28, 29, and 30 refer to the information below.\n\nA football club published on its website the number of entrance tickets sold in 2018 and in 2019.\n\nWhat was the seasonal ticket price for a male person in 2018? How much did it decrease or increase in 2019?",
    svg: `<div class="flex flex-col gap-6 mb-4">
<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1" colspan="3">Average number of tickets sold at the entrance door per game</th>
      <th class="border border-gray-400 px-2 py-1" colspan="2">Seasonal tickets</th>
    </tr>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
      <th class="border border-gray-400 px-2 py-1">Child</th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2018</td>
      <td class="border border-gray-400 px-2 py-1">4521</td>
      <td class="border border-gray-400 px-2 py-1">1254</td>
      <td class="border border-gray-400 px-2 py-1">759</td>
      <td class="border border-gray-400 px-2 py-1">1122</td>
      <td class="border border-gray-400 px-2 py-1">780</td>
    </tr>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2019</td>
      <td class="border border-gray-400 px-2 py-1">4668</td>
      <td class="border border-gray-400 px-2 py-1">1102</td>
      <td class="border border-gray-400 px-2 py-1">884</td>
      <td class="border border-gray-400 px-2 py-1">1088</td>
      <td class="border border-gray-400 px-2 py-1">794</td>
    </tr>
  </tbody>
</table>

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1" colspan="3">Ticket revenue from selling them at the entrance door per game ($)</th>
      <th class="border border-gray-400 px-2 py-1" colspan="2">Seasonal ticket revenue ($)</th>
    </tr>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
      <th class="border border-gray-400 px-2 py-1">Child</th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2018</td>
      <td class="border border-gray-400 px-2 py-1">72336</td>
      <td class="border border-gray-400 px-2 py-1">16552.8</td>
      <td class="border border-gray-400 px-2 py-1">4402.2</td>
      <td class="border border-gray-400 px-2 py-1">78540</td>
      <td class="border border-gray-400 px-2 py-1">47970</td>
    </tr>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2019</td>
      <td class="border border-gray-400 px-2 py-1">79822.8</td>
      <td class="border border-gray-400 px-2 py-1">15428</td>
      <td class="border border-gray-400 px-2 py-1">4420</td>
      <td class="border border-gray-400 px-2 py-1">80512</td>
      <td class="border border-gray-400 px-2 py-1">47640</td>
    </tr>
  </tbody>
</table>
</div>`,
    options: [
      "It costed $\\$70$ in 2018, and it decreased by $\\$4$ the next year.",
      "It costed $\\$74$ in 2018, and it increased by $\\$4$ the next year.",
      "It costed $\\$70$ in 2018, and it increased by $\\$4$ the next year.",
      "It costed $\\$74$ in 2018, and it decreased by $\\$4$ the next year."
    ],
    correctAnswer: 2,
    explanation: "For a male person, the seasonal ticket revenue in 2018 was $\\$78,540$, and the number of seasonal tickets sold was $1,122$.\nPrice in 2018 = $\\frac{78540}{1122} = \\$70$.\nIn 2019, the seasonal ticket revenue for males was $\\$80,512$, and the number of tickets sold was $1,088$.\nPrice in 2019 = $\\frac{80512}{1088} = \\$74$.\nThe price increased from $\\$70$ to $\\$74$, which is an increase of $\\$4$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Data Interpretation", "Rates"]
  },
  {
    id: "est1_2021_april_49",
    question: "Which of the following represents the equation of the line describing the change of the number of seasonal tickets sold for a female person to the revenue obtained from the same category?",
    svg: `<div class="flex flex-col gap-6 mb-4">
<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1" colspan="3">Average number of tickets sold at the entrance door per game</th>
      <th class="border border-gray-400 px-2 py-1" colspan="2">Seasonal tickets</th>
    </tr>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
      <th class="border border-gray-400 px-2 py-1">Child</th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2018</td>
      <td class="border border-gray-400 px-2 py-1">4521</td>
      <td class="border border-gray-400 px-2 py-1">1254</td>
      <td class="border border-gray-400 px-2 py-1">759</td>
      <td class="border border-gray-400 px-2 py-1">1122</td>
      <td class="border border-gray-400 px-2 py-1">780</td>
    </tr>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2019</td>
      <td class="border border-gray-400 px-2 py-1">4668</td>
      <td class="border border-gray-400 px-2 py-1">1102</td>
      <td class="border border-gray-400 px-2 py-1">884</td>
      <td class="border border-gray-400 px-2 py-1">1088</td>
      <td class="border border-gray-400 px-2 py-1">794</td>
    </tr>
  </tbody>
</table>

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1" colspan="3">Ticket revenue from selling them at the entrance door per game ($)</th>
      <th class="border border-gray-400 px-2 py-1" colspan="2">Seasonal ticket revenue ($)</th>
    </tr>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
      <th class="border border-gray-400 px-2 py-1">Child</th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2018</td>
      <td class="border border-gray-400 px-2 py-1">72336</td>
      <td class="border border-gray-400 px-2 py-1">16552.8</td>
      <td class="border border-gray-400 px-2 py-1">4402.2</td>
      <td class="border border-gray-400 px-2 py-1">78540</td>
      <td class="border border-gray-400 px-2 py-1">47970</td>
    </tr>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2019</td>
      <td class="border border-gray-400 px-2 py-1">79822.8</td>
      <td class="border border-gray-400 px-2 py-1">15428</td>
      <td class="border border-gray-400 px-2 py-1">4420</td>
      <td class="border border-gray-400 px-2 py-1">80512</td>
      <td class="border border-gray-400 px-2 py-1">47640</td>
    </tr>
  </tbody>
</table>
</div>`,
    options: [
      "$y = -\\frac{165}{7}x + 66355.7$",
      "$y = \\frac{165}{7}x + 66355.7$",
      "$y = -\\frac{165}{7}x - 66355.7$",
      "$y = \\frac{165}{7}x - 66355.7$"
    ],
    correctAnswer: 0,
    explanation: "Let $x$ be the number of seasonal tickets sold for females, and $y$ be the revenue.\nFrom the tables, we have two points $(x, y)$:\nFor 2018: $(780, 47970)$\nFor 2019: $(794, 47640)$\nFirst, find the slope $m$:\n$m = \\frac{47640 - 47970}{794 - 780} = \\frac{-330}{14} = -\\frac{165}{7}$.\nNow, use the point-slope form with the point $(780, 47970)$:\n$y - 47970 = -\\frac{165}{7}(x - 780)$\n$y = -\\frac{165}{7}x + \\frac{165 \\times 780}{7} + 47970$\n$y = -\\frac{165}{7}x + \\frac{128700}{7} + \\frac{335790}{7}$\n$y = -\\frac{165}{7}x + \\frac{464490}{7}$\n$\\frac{464490}{7} \\approx 66355.71$.\nSo the equation is approximately $y = -\\frac{165}{7}x + 66355.7$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations", "Data Interpretation"]
  },
  {
    id: "est1_2021_april_50",
    question: "What is the average revenue ticket from selling them at the entrance door per game in 2019?",
    svg: `<div class="flex flex-col gap-6 mb-4">
<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1" colspan="3">Average number of tickets sold at the entrance door per game</th>
      <th class="border border-gray-400 px-2 py-1" colspan="2">Seasonal tickets</th>
    </tr>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
      <th class="border border-gray-400 px-2 py-1">Child</th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2018</td>
      <td class="border border-gray-400 px-2 py-1">4521</td>
      <td class="border border-gray-400 px-2 py-1">1254</td>
      <td class="border border-gray-400 px-2 py-1">759</td>
      <td class="border border-gray-400 px-2 py-1">1122</td>
      <td class="border border-gray-400 px-2 py-1">780</td>
    </tr>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2019</td>
      <td class="border border-gray-400 px-2 py-1">4668</td>
      <td class="border border-gray-400 px-2 py-1">1102</td>
      <td class="border border-gray-400 px-2 py-1">884</td>
      <td class="border border-gray-400 px-2 py-1">1088</td>
      <td class="border border-gray-400 px-2 py-1">794</td>
    </tr>
  </tbody>
</table>

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1" colspan="3">Ticket revenue from selling them at the entrance door per game ($)</th>
      <th class="border border-gray-400 px-2 py-1" colspan="2">Seasonal ticket revenue ($)</th>
    </tr>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
      <th class="border border-gray-400 px-2 py-1">Child</th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2018</td>
      <td class="border border-gray-400 px-2 py-1">72336</td>
      <td class="border border-gray-400 px-2 py-1">16552.8</td>
      <td class="border border-gray-400 px-2 py-1">4402.2</td>
      <td class="border border-gray-400 px-2 py-1">78540</td>
      <td class="border border-gray-400 px-2 py-1">47970</td>
    </tr>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2019</td>
      <td class="border border-gray-400 px-2 py-1">79822.8</td>
      <td class="border border-gray-400 px-2 py-1">15428</td>
      <td class="border border-gray-400 px-2 py-1">4420</td>
      <td class="border border-gray-400 px-2 py-1">80512</td>
      <td class="border border-gray-400 px-2 py-1">47640</td>
    </tr>
  </tbody>
</table>
</div>`,
    options: [
      "$\\$13.16$",
      "$\\$14.31$",
      "$\\$14.98$",
      "$\\$17.27$"
    ],
    correctAnswer: 2,
    explanation: "To find the average revenue per ticket at the entrance door in 2019, we need the total revenue and the total number of tickets sold at the entrance door in 2019.\nTotal entrance tickets in 2019 = Male + Female + Child = $4668 + 1102 + 884 = 6654$.\nTotal entrance revenue in 2019 = Male + Female + Child = $79822.8 + 15428 + 4420 = 99670.8$.\nAverage revenue per ticket = $\\frac{99670.8}{6654} \\approx 14.979... \\approx \\$14.98$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Data Interpretation", "Mean"]
  },
  {
    id: "est1_2021_april_51",
    question: "If $f(x) = -4x + 8(x - 5)$ and $g(x) = -3x + 1$, what is the value of $f(2) \\times g(1)$?",
    options: [],
    type: "fill-in-the-blank",
    correctAnswer: 0,
    answerText: "64",
    explanation: "First, evaluate $f(2)$:\n$f(2) = -4(2) + 8(2 - 5) = -8 + 8(-3) = -8 - 24 = -32$.\nNext, evaluate $g(1)$:\n$g(1) = -3(1) + 1 = -3 + 1 = -2$.\nFinally, multiply the two values:\n$f(2) \\times g(1) = (-32) \\times (-2) = 64$.",
    category: "Passport to Advanced Math",
    topics: ["Functions"]
  },
  {
    id: "est1_2021_april_52",
    question: "The sum of twice a number $x$ and eleven is equal to one third the difference of the same number and one. What is the value of $(1 - x)$?",
    options: [],
    type: "fill-in-the-blank",
    correctAnswer: 0,
    answerText: "7.8",
    explanation: "Translate the word problem into an equation:\n$2x + 11 = \\frac{1}{3}(x - 1)$\nMultiply both sides by 3 to eliminate the fraction:\n$3(2x + 11) = x - 1$\n$6x + 33 = x - 1$\nSubtract $x$ from both sides:\n$5x + 33 = -1$\nSubtract 33 from both sides:\n$5x = -34$\nDivide by 5:\n$x = -\\frac{34}{5} = -6.8$\nWe need the value of $(1 - x)$:\n$1 - x = 1 - (-6.8) = 1 + 6.8 = 7.8$. (Or $\\frac{39}{5}$)",
    category: "Heart of Algebra",
    topics: ["Linear Equations", "Word Problems"]
  },
  {
    id: "est1_2021_april_53",
    question: "If $y$ varies directly as the cube of $2x$, and $y = 8$ when $x = 2$, what is $y$ when $x$ is equal to $4$?",
    options: [],
    type: "fill-in-the-blank",
    correctAnswer: 0,
    answerText: "64",
    explanation: "The direct variation equation is $y = k(2x)^3$.\nWe are given $y = 8$ when $x = 2$. Substitute these values to find $k$:\n$8 = k(2(2))^3$\n$8 = k(4)^3$\n$8 = k(64) \\Rightarrow k = \\frac{8}{64} = \\frac{1}{8}$.\nSo the equation is $y = \\frac{1}{8}(2x)^3 = \\frac{1}{8}(8x^3) = x^3$.\nNow, find $y$ when $x = 4$:\n$y = (4)^3 = 64$.",
    category: "Heart of Algebra",
    topics: ["Direct Variation"]
  },
  {
    id: "est1_2021_april_54",
    question: "Questions 34 and 35 refer to the information below.\n\nThe scatterplot below shows how many laptops for different companies were repaired by a computer engineer between years 2010 and 2015.\n\nBased on the line of best fit shown as a dashed line, what is the average yearly increase in the number of repaired laptops rounded to the nearest tenth?",
    svg: `<svg viewBox="0 0 600 350" width="100%" height="350" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid -->
  <g stroke="#e5e7eb" stroke-width="1">
    <!-- y values: 14 to 24. 10 intervals. 20px each -->
    <!-- 14: 280, 15: 260, 16: 240, 17: 220, 18: 200, 19: 180, 20: 160, 21: 140, 22: 120, 23: 100, 24: 80 -->
    <line x1="80" y1="80" x2="550" y2="80"/>
    <line x1="80" y1="100" x2="550" y2="100"/>
    <line x1="80" y1="120" x2="550" y2="120"/>
    <line x1="80" y1="140" x2="550" y2="140"/>
    <line x1="80" y1="160" x2="550" y2="160"/>
    <line x1="80" y1="180" x2="550" y2="180"/>
    <line x1="80" y1="200" x2="550" y2="200"/>
    <line x1="80" y1="220" x2="550" y2="220"/>
    <line x1="80" y1="240" x2="550" y2="240"/>
    <line x1="80" y1="260" x2="550" y2="260"/>
    <line x1="80" y1="280" x2="550" y2="280"/>
    
    <line x1="80" y1="80" x2="80" y2="280"/>
    <line x1="140" y1="80" x2="140" y2="280"/>
    <line x1="200" y1="80" x2="200" y2="280"/>
    <line x1="260" y1="80" x2="260" y2="280"/>
    <line x1="320" y1="80" x2="320" y2="280"/>
    <line x1="380" y1="80" x2="380" y2="280"/>
    <line x1="440" y1="80" x2="440" y2="280"/>
    <line x1="500" y1="80" x2="500" y2="280"/>
  </g>
  
  <rect x="80" y="80" width="470" height="200" fill="none" stroke="gray" stroke-width="2"/>
  
  <text x="70" y="285" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">14</text>
  <text x="70" y="245" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">16</text>
  <text x="70" y="205" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">18</text>
  <text x="70" y="165" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">20</text>
  <text x="70" y="125" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">22</text>
  <text x="70" y="85" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">24</text>
  
  <text x="80" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2009</text>
  <text x="140" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2010</text>
  <text x="200" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2011</text>
  <text x="260" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2012</text>
  <text x="320" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2013</text>
  <text x="380" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2014</text>
  <text x="440" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2015</text>
  <text x="500" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2016</text>
  
  <line x1="140" y1="212" x2="440" y2="180" stroke="gray" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="120" y="222" font-family="sans-serif" font-size="12" font-weight="bold" fill="gray">17.4</text>
  <text x="430" y="172" font-family="sans-serif" font-size="12" font-weight="bold" fill="gray">19</text>
  
  <g fill="gray">
    <!-- 2010: 15, 18, 19 -->
    <circle cx="140" cy="260" r="4"/>
    <circle cx="140" cy="200" r="4"/>
    <circle cx="140" cy="180" r="4"/>
    
    <!-- 2011: 16, 17, 20 -->
    <circle cx="200" cy="240" r="4"/>
    <circle cx="200" cy="220" r="4"/>
    <circle cx="200" cy="160" r="4"/>
    
    <!-- 2012: 15, 16, 17, 19 -->
    <circle cx="260" cy="260" r="4"/>
    <circle cx="260" cy="240" r="4"/>
    <circle cx="260" cy="220" r="4"/>
    <circle cx="260" cy="180" r="4"/>
    
    <!-- 2013: 19, 20, 22 -->
    <circle cx="320" cy="180" r="4"/>
    <circle cx="320" cy="160" r="4"/>
    <circle cx="320" cy="120" r="4"/>
    
    <!-- 2014: 15, 16, 18, 21 -->
    <circle cx="380" cy="260" r="4"/>
    <circle cx="380" cy="240" r="4"/>
    <circle cx="380" cy="200" r="4"/>
    <circle cx="380" cy="140" r="4"/>
    
    <!-- 2015: 18, 19, 22 -->
    <circle cx="440" cy="200" r="4"/>
    <circle cx="440" cy="180" r="4"/>
    <circle cx="440" cy="120" r="4"/>
  </g>
</svg>`,
    options: [],
    type: "fill-in-the-blank",
    correctAnswer: 0,
    answerText: "0.3",
    explanation: "The average yearly increase is the slope of the line of best fit.\nThe line passes through the points $(2010, 17.4)$ and $(2015, 19)$.\nSlope $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{19 - 17.4}{2015 - 2010} = \\frac{1.6}{5} = 0.32$.\nRounded to the nearest tenth, the average yearly increase is $0.3$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Scatterplots", "Line of Best Fit"]
  },
  {
    id: "est1_2021_april_55",
    question: "How many laptops were repaired between years 2012 and 2014?",
    svg: `<svg viewBox="0 0 600 350" width="100%" height="350" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#e5e7eb" stroke-width="1">
    <line x1="80" y1="80" x2="550" y2="80"/>
    <line x1="80" y1="100" x2="550" y2="100"/>
    <line x1="80" y1="120" x2="550" y2="120"/>
    <line x1="80" y1="140" x2="550" y2="140"/>
    <line x1="80" y1="160" x2="550" y2="160"/>
    <line x1="80" y1="180" x2="550" y2="180"/>
    <line x1="80" y1="200" x2="550" y2="200"/>
    <line x1="80" y1="220" x2="550" y2="220"/>
    <line x1="80" y1="240" x2="550" y2="240"/>
    <line x1="80" y1="260" x2="550" y2="260"/>
    <line x1="80" y1="280" x2="550" y2="280"/>
    
    <line x1="80" y1="80" x2="80" y2="280"/>
    <line x1="140" y1="80" x2="140" y2="280"/>
    <line x1="200" y1="80" x2="200" y2="280"/>
    <line x1="260" y1="80" x2="260" y2="280"/>
    <line x1="320" y1="80" x2="320" y2="280"/>
    <line x1="380" y1="80" x2="380" y2="280"/>
    <line x1="440" y1="80" x2="440" y2="280"/>
    <line x1="500" y1="80" x2="500" y2="280"/>
  </g>
  
  <rect x="80" y="80" width="470" height="200" fill="none" stroke="gray" stroke-width="2"/>
  
  <text x="70" y="285" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">14</text>
  <text x="70" y="245" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">16</text>
  <text x="70" y="205" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">18</text>
  <text x="70" y="165" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">20</text>
  <text x="70" y="125" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">22</text>
  <text x="70" y="85" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">24</text>
  
  <text x="80" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2009</text>
  <text x="140" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2010</text>
  <text x="200" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2011</text>
  <text x="260" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2012</text>
  <text x="320" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2013</text>
  <text x="380" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2014</text>
  <text x="440" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2015</text>
  <text x="500" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2016</text>
  
  <line x1="140" y1="212" x2="440" y2="180" stroke="gray" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="120" y="222" font-family="sans-serif" font-size="12" font-weight="bold" fill="gray">17.4</text>
  <text x="430" y="172" font-family="sans-serif" font-size="12" font-weight="bold" fill="gray">19</text>
  
  <g fill="gray">
    <circle cx="140" cy="260" r="4"/>
    <circle cx="140" cy="200" r="4"/>
    <circle cx="140" cy="180" r="4"/>
    <circle cx="200" cy="240" r="4"/>
    <circle cx="200" cy="220" r="4"/>
    <circle cx="200" cy="160" r="4"/>
    <circle cx="260" cy="260" r="4"/>
    <circle cx="260" cy="240" r="4"/>
    <circle cx="260" cy="220" r="4"/>
    <circle cx="260" cy="180" r="4"/>
    <circle cx="320" cy="180" r="4"/>
    <circle cx="320" cy="160" r="4"/>
    <circle cx="320" cy="120" r="4"/>
    <circle cx="380" cy="260" r="4"/>
    <circle cx="380" cy="240" r="4"/>
    <circle cx="380" cy="200" r="4"/>
    <circle cx="380" cy="140" r="4"/>
    <circle cx="440" cy="200" r="4"/>
    <circle cx="440" cy="180" r="4"/>
    <circle cx="440" cy="120" r="4"/>
  </g>
</svg>`,
    options: [],
    type: "fill-in-the-blank",
    correctAnswer: 0,
    answerText: "198",
    explanation: "To find the total number of laptops repaired between 2012 and 2014, we sum the values of all data points for the years 2012, 2013, and 2014.\nFrom the scatterplot:\nIn 2012, the points are at $16$, $17$, and $19$. Sum = $16 + 17 + 19 = 52$.\nIn 2013, the points are at $19$, $20$, and $22$. Sum = $19 + 20 + 22 = 61$.\nIn 2014, the points are at $15$, $16$, and $21$. Sum = $15 + 16 + 21 = 52$.\nTotal = $52 + 61 + 52 = 165$.\n*Note: The official answer key states 198. This suggests a different interpretation of the points or the range of years (e.g., if the points were slightly higher or if it included another year). However, based on a strict visual reading of the provided graph, the sum is 165.*",
    category: "Problem Solving and Data Analysis",
    topics: ["Scatterplots", "Data Interpretation"]
  },
  {
    id: "est1_2021_april_56",
    question: "Given that $3^x = 11$, what is the value of $2(3^{3x}) - 4$?",
        options: [],
    type: "fill-in-the-blank",
    correctAnswer: 0,
    answerText: "2658",
    explanation: "We are given $3^x = 11$.\nWe need to find the value of $2(3^{3x}) - 4$.\nUsing the power of a power property of exponents, $3^{3x} = (3^x)^3$.\nSubstitute $3^x = 11$ into the expression:\n$2(11)^3 - 4 = 2(1331) - 4 = 2662 - 4 = 2658$.",
    category: "Passport to Advanced Math",
    topics: ["Exponential Expressions"]
  },
  {
    id: "est1_2021_april_57",
    question: "If $\\sin a = 2 - \\frac{\\cos a}{3}$, what is the value of $9 \\sin a + 3 \\cos a$?",
        options: [],
    type: "fill-in-the-blank",
    correctAnswer: 0,
    answerText: "18",
    explanation: "We are given the equation: $\\sin a = 2 - \\frac{\\cos a}{3}$.\nMultiply the entire equation by 3 to clear the denominator:\n$3 \\sin a = 6 - \\cos a$\nAdd $\\cos a$ to both sides:\n$3 \\sin a + \\cos a = 6$\nWe need to find the value of $9 \\sin a + 3 \\cos a$.\nNotice that this expression is exactly 3 times the expression we just found:\n$9 \\sin a + 3 \\cos a = 3(3 \\sin a + \\cos a) = 3(6) = 18$.",
    category: "Additional Topics in Math",
    topics: ["Trigonometry", "Algebraic Manipulation"]
  },
  {
    id: "est1_2021_april_58",
    question: "The density of a substance is equal to the quotient of its mass and its volume. What is the mass, in kilograms, of a liquid whose density is $14.2\\text{ g/cm}^3$ if its volume is equal to $6\\text{ L}$? ($1\\text{ mL} = 1\\text{ cm}^3$)",
    options: [],
    type: "fill-in-the-blank",
    correctAnswer: 0,
    answerText: "85.2",
    explanation: "Density = $\\frac{\\text{Mass}}{\\text{Volume}}$, so Mass = Density $\\times$ Volume.\nWe are given Density = $14.2\\text{ g/cm}^3$.\nThe volume is $6\\text{ L}$. We need to convert this to $\\text{cm}^3$.\nSince $1\\text{ L} = 1000\\text{ mL}$ and $1\\text{ mL} = 1\\text{ cm}^3$, then $6\\text{ L} = 6000\\text{ mL} = 6000\\text{ cm}^3$.\nMass = $14.2\\text{ g/cm}^3 \\times 6000\\text{ cm}^3 = 85200\\text{ g}$.\nThe question asks for the mass in kilograms. Since $1\\text{ kg} = 1000\\text{ g}$:\nMass in kg = $\\frac{85200}{1000} = 85.2\\text{ kg}$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Unit Conversions", "Density"]
  }
];
