import { Question } from '../../types';

export const EST1_2022_JUNE_PART4: Question[] = [
  {
    id: "est1_2022_june_q37",
    examId: "EST12022June",
    question: "Santa Clara County is the 6th most populous county in California, with 1.928 million people living there in 2019. If this number was decreased by 7% the next year, and 4% of year 2020’s population was added again in the population of year 2021, how many people are in this county in 2021?",
    options: [
      "1,734,229",
      "1,793,040",
      "1,864,762",
      "1,939,353"
    ],
    correctAnswer: 2,
    explanation: "Population in 2020: decreased by $7\\%$, so multiply by $(1 - 0.07 = 0.93)$.\n$1,928,000 \\times 0.93 = 1,793,040$.\nPopulation in 2021: increased by $4\\%$, so multiply by $(1 + 0.04 = 1.04)$.\n$1,793,040 \\times 1.04 = 1,864,761.6$.\nThe closest value is 1,864,762."
  },
  {
    id: "est1_2022_june_q38",
    examId: "EST12022June",
    question: "Shahira bought 7 of brand \"A\" and 3 of brand \"B\" for $\\$25.4$. Nicole bought 4 of brand \"A\" and 5 of brand \"B\" for $\\$24.7$. If you went to the same supermarket and bought 1 chocolate from brand “A” and 3 chocolates from brand “B”, how much will you pay?",
    options: [
      "$\\$5.4$",
      "$\\$7.5$",
      "$\\$10$",
      "$\\$11.6$"
    ],
    correctAnswer: 3,
    explanation: "Let $A$ and $B$ be the prices of the chocolates.\n1) $7A + 3B = 25.4$\n2) $4A + 5B = 24.7$\nMultiply (1) by 4 and (2) by 7:\n$28A + 12B = 101.6$\n$28A + 35B = 172.9$\nSubtract the first from the second: $23B = 71.3 \\implies B = 3.1$.\nSubstitute $B=3.1$ into (1): $7A + 3(3.1) = 25.4 \\implies 7A + 9.3 = 25.4 \\implies 7A = 16.1 \\implies A = 2.3$.\nCost for 1 of A and 3 of B = $2.3 + 3(3.1) = 2.3 + 9.3 = \\$11.6$."
  },
  {
    id: "est1_2022_june_q39",
    examId: "EST12022June",
    question: "If $f(x) = 3x - 4(2x + 7)$ and $g(x) = 4(-2x + 1)$, what is the value of $\\frac{f(-1)}{g(3)}$?",
    options: [
      "$-\\frac{43}{4}$",
      "$-\\frac{23}{20}$",
      "$\\frac{23}{20}$",
      "$\\frac{43}{4}$"
    ],
    correctAnswer: 2,
    explanation: "First, simplify $f(x)$ and $g(x)$.\n$f(x) = 3x - 8x - 28 = -5x - 28$.\nEvaluate $f(-1) = -5(-1) - 28 = 5 - 28 = -23$.\nEvaluate $g(3) = 4(-2(3) + 1) = 4(-6 + 1) = 4(-5) = -20$.\nDivide $f(-1)$ by $g(3)$: $\\frac{-23}{-20} = \\frac{23}{20}$."
  },
  {
    id: "est1_2022_june_q40",
    examId: "EST12022June",
    question: "Fares decided to sell his 450 books. 22% of the books are new, and the rest are considered old. If each new book will be sold for $\\$11$, and each old book will be sold for $\\$6.5$, how much will Fares get from selling his books?",
    options: [
      "$\\$4504.5$",
      "$\\$3370.5$",
      "$\\$2281.5$",
      "$\\$1089$"
    ],
    correctAnswer: 1,
    explanation: "Number of new books = $22\\%$ of $450 = 0.22 \\times 450 = 99$.\nNumber of old books = $450 - 99 = 351$.\nRevenue from new books = $99 \\times \\$11 = \\$1089$.\nRevenue from old books = $351 \\times \\$6.5 = \\$2281.5$.\nTotal revenue = $\\$1089 + \\$2281.5 = \\$3370.5$."
  },
  {
    id: "est1_2022_june_q41",
    examId: "EST12022June",
    question: "Which of the following is a factor of the polynomial: $2x^3 + 13x^2 + 5x - 6$?",
    options: [
      "$x - 1$",
      "$x - 6$",
      "$2x + 1$",
      "$2x - 1$"
    ],
    correctAnswer: 3,
    explanation: "Use the Factor Theorem: if $(x-c)$ is a factor, then $P(c) = 0$.\nTest $2x - 1 = 0 \\implies x = 1/2$:\n$P(\\frac{1}{2}) = 2(\\frac{1}{8}) + 13(\\frac{1}{4}) + 5(\\frac{1}{2}) - 6 = \\frac{1}{4} + \\frac{13}{4} + \\frac{10}{4} - \\frac{24}{4} = \\frac{24}{4} - \\frac{24}{4} = 0$.\nSince the remainder is 0, $2x - 1$ is a factor."
  },
  {
    id: "est1_2022_june_q42",
    examId: "EST12022June",
    question: "Karim drove his car from his village to the city. It took him 2.5 hours to reach the city driving at a constant speed of $60\\text{ km}$ per hour. Approximately, how much will he save time if he starts driving at a constant speed of $70\\text{ km}$ per hour?",
    options: [
      "0.357 hours",
      "0.765 hours",
      "1.544 hours",
      "2.143 hours"
    ],
    correctAnswer: 0,
    explanation: "Distance to the city = speed $\\times$ time = $60 \\times 2.5 = 150\\text{ km}$.\nTime required at $70\\text{ km/h}$ = distance / speed = $150 / 70 \\approx 2.1428\\text{ hours}$.\nTime saved = $2.5 - 2.1428 = 0.3572\\text{ hours}$. The closest value is $0.357\\text{ hours}$."
  },
  {
    id: "est1_2022_june_q43",
    examId: "EST12022June",
    question: "A store did a sale on a pair of shoes. It is now for $\\$103.5$ instead of $\\$230$. What is the percent discount?",
    options: [
      "50%",
      "45%",
      "55%",
      "58%"
    ],
    correctAnswer: 2,
    explanation: "Amount of discount = original price $-$ sale price = $\\$230 - \\$103.5 = \\$126.5$.\nPercent discount = (discount / original price) $\\times 100\\%$.\n$\\frac{126.5}{230} \\times 100\\% = 0.55 \\times 100\\% = 55\\%$."
  },
  {
    id: "est1_2022_june_q44",
    examId: "EST12022June",
    question: "Which of the following equations represents the graph of a quadratic function that passes through points $(2, 5)$, $(3, 0)$, and $(-4, 0)$?",
    options: [
      "$y = -\\frac{5}{6}x^2 + \\frac{5}{6}x + 10$",
      "$y = -\\frac{5}{6}x^2 - \\frac{5}{6}x + 10$",
      "$y = \\frac{5}{6}x^2 + \\frac{5}{6}x + 10$",
      "$y = \\frac{5}{6}x^2 - \\frac{5}{6}x + 10$"
    ],
    correctAnswer: 1,
    explanation: "Since the $x$-intercepts are $(3, 0)$ and $(-4, 0)$, the equation must have the form $y = a(x - 3)(x + 4)$.\nPlug in the point $(2, 5)$ to find $a$: $5 = a(2 - 3)(2 + 4) = a(-1)(6) = -6a \\implies a = -\\frac{5}{6}$.\nThe expanded equation is $y = -\\frac{5}{6}(x^2 + x - 12) = -\\frac{5}{6}x^2 - \\frac{5}{6}x + 10$."
  },
  {
    id: "est1_2022_june_q45",
    examId: "EST12022June",
    question: "Given that $h(t) = \\frac{2t+1}{5t^2}$ ($t \\ne 0$), what is the negative value of $t$ if $h(t) = 3$?",
    options: [
      "-0.5",
      "-0.4",
      "-0.3",
      "-0.2"
    ],
    correctAnswer: 3,
    explanation: "Set $h(t) = 3$: $\\frac{2t+1}{5t^2} = 3$.\nMultiply by $5t^2$: $2t + 1 = 15t^2$.\nRearrange into a quadratic equation: $15t^2 - 2t - 1 = 0$.\nFactor the equation: $(5t + 1)(3t - 1) = 0$.\nThe roots are $t = -1/5 = -0.2$ and $t = 1/3$.\nThe negative value is $-0.2$."
  },
  {
    id: "est1_2022_june_q46",
    examId: "EST12022June",
    question: "What is the sum of the values of the $x$ and $y$-intercepts of the graph of the function $f(x) = 2x + 3(x - 5)$?",
    options: [
      "-18",
      "-12",
      "12",
      "18"
    ],
    correctAnswer: 1,
    explanation: "First, simplify $f(x) = 2x + 3x - 15 = 5x - 15$.\nTo find the $x$-intercept, set $f(x) = 0$: $5x - 15 = 0 \\implies 5x = 15 \\implies x = 3$.\nTo find the $y$-intercept, set $x = 0$: $f(0) = 5(0) - 15 = -15$.\nThe sum of the intercepts is $3 + (-15) = -12$."
  },
  {
    id: "est1_2022_june_q47",
    examId: "EST12022June",
    question: "$\\begin{cases} dx - 2my = -14 \\\\ 3dx + 6my = 78 \\end{cases}$\nGiven that the solution of the system above is $(2, 5)$, what is the value of $2mx - 3dy$?",
    options: [
      "-37",
      "-18",
      "11",
      "20"
    ],
    correctAnswer: 0,
    explanation: "Substitute $x=2$ and $y=5$ into the system:\n1) $d(2) - 2m(5) = -14 \\implies 2d - 10m = -14 \\implies d - 5m = -7$.\n2) $3d(2) + 6m(5) = 78 \\implies 6d + 30m = 78 \\implies d + 5m = 13$.\nAdd the two equations: $2d = 6 \\implies d = 3$.\nSubstitute $d=3$ into the first equation: $3 - 5m = -7 \\implies 10 = 5m \\implies m = 2$.\nEvaluate the expression $2mx - 3dy$ using $x=2, y=5, m=2, d=3$:\n$2(2)(2) - 3(3)(5) = 8 - 45 = -37$."
  },
  {
    id: "est1_2022_june_q48",
    examId: "EST12022June",
    question: "Patrick is twice as old as Alonso. Alonso is 7 years older than Fatima, and Fatima is 2 years younger than Patricia. If Patricia’s age to Salma’s age is 4 to 3, what is the age of Patrick if Salma is 12 years old?",
    options: [
      "16 years old",
      "21 years old",
      "42 years old",
      "48 years old"
    ],
    correctAnswer: 2,
    explanation: "Salma is 12. Patricia/Salma = $4/3$, so Patricia/12 = $4/3 \\implies$ Patricia = 16.\nFatima is 2 years younger than Patricia $\\implies$ Fatima = $16 - 2 = 14$.\nAlonso is 7 years older than Fatima $\\implies$ Alonso = $14 + 7 = 21$.\nPatrick is twice as old as Alonso $\\implies$ Patrick = $21 \\times 2 = 42$."
  }
];
