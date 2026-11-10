import { Question } from '../../types';

export const EST1_2020_OCT_PART5: Question[] = [
  {
    id: "est1_2020_oct_q48",
    examId: "EST12020Oct",
    question: "A gaming website charges its client by number of games downloaded $g$. If the total fees $f$ of a gamer are given by the equation $f = 7g + 88$, what is the best interpretation of the term $88$?",
    options: [
      "The price of one downloaded game.",
      "The subscription fees of the website",
      "The average number of games downloaded per player",
      "The fees of downloading 7 games"
    ],
    correctAnswer: 1,
    explanation: "In the linear equation $f = 7g + 88$, $88$ is the $y$-intercept, representing the initial, fixed cost before any games are downloaded. This corresponds to a fixed subscription fee for the website. 7 is the rate (cost per game)."
  },
  {
    id: "est1_2020_oct_q49",
    examId: "EST12020Oct",
    question: "A local supermarket offered a discount of 15% on its items after the government raised all the prices by 25%. Overall, by what percentage were the original prices raised in this supermarket in particular?",
    options: [
      "8.625%",
      "7.250%",
      "6.250%",
      "5.625%"
    ],
    correctAnswer: 2,
    explanation: "Let the original price be $P$.\nFirst, increased by 25%: $P \\times 1.25$.\nThen, decreased by 15%: $(P \\times 1.25) \\times 0.85 = P \\times 1.0625$.\nThe overall effect is multiplying by 1.0625, which corresponds to a $6.25\\%$ increase."
  },
  {
    id: "est1_2020_oct_q50",
    examId: "EST12020Oct",
    question: "The right triangles ADE and ABC are similar. If $AD = \\frac{4}{3}ED$, how long is $DB$?",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCAyMDAgMTUwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7Ij4KICA8c3R5bGU+CiAgICB0ZXh0IHsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMTJweDsgZmlsbDogZ3JheTsgfQogIDwvc3R5bGU+CiAgPHBvbHlnb24gcG9pbnRzPSIzMCwxMjAgMTgwLDEyMCAxODAsMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPGxpbmUgeDE9IjEzNSIgeTE9IjEyMCIgeDI9IjEzNSIgeTI9IjUwIiBzdHJva2U9ImdyYXkiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxjaXJjbGUgY3g9IjMwIiBjeT0iMTIwIiByPSIyIiBmaWxsPSJncmF5IiBzdHJva2U9ImdyYXkiLz4KICA8Y2lyY2xlIGN4PSIxMzUiIGN5PSIxMjAiIHI9IjIiIGZpbGw9ImdyYXkiIHN0cm9rZT0iZ3JheSIvPgogIDxjaXJjbGUgY3g9IjEzNSIgY3k9IjUwIiByPSIyIiBmaWxsPSJncmF5IiBzdHJva2U9ImdyYXkiLz4KICA8Y2lyY2xlIGN4PSIxODAiIGN5PSIxMjAiIHI9IjIiIGZpbGw9ImdyYXkiIHN0cm9rZT0iZ3JheSIvPgogIDxjaXJjbGUgY3g9IjE4MCIgY3k9IjIwIiByPSIyIiBmaWxsPSJncmF5IiBzdHJva2U9ImdyYXkiLz4KICA8dGV4dCB4PSIyNCIgeT0iMTE1Ij5BPC90ZXh0PgogIDx0ZXh0IHg9IjE0MCIgeT0iMTE1Ij5EPC90ZXh0PgogIDx0ZXh0IHg9IjE4NSIgeT0iMTE1Ij5CPC90ZXh0PgogIDx0ZXh0IHg9IjEzMCIgeT0iNDUiPkU8L3RleHQ+CiAgPHRleHQgeD0iMTgwIiB5PSIxNSI+QzwvdGV4dD4KICA8dGV4dCB4PSIxNDUiIHk9IjgwIj45PC90ZXh0PgogIDx0ZXh0IHg9IjE5MCIgeT0iNzAiPjEyPC90ZXh0Pgo8L3N2Zz4=",
    options: [
      "$3$",
      "$4$",
      "$5$",
      "$6$"
    ],
    correctAnswer: 1,
    explanation: "From the graph, $ED = 9$ and $BC = 12$.\nWe know $AD = \\frac{4}{3}ED = \\frac{4}{3}(9) = 12$.\nSince triangles $ADE$ and $ABC$ are similar, the ratios of corresponding sides are equal:\n$\\frac{AD}{AB} = \\frac{ED}{BC}$\n$\\frac{12}{AB} = \\frac{9}{12}$\n$\\frac{12}{AB} = \\frac{3}{4} \\implies AB = \\frac{48}{3} = 16$.\n$DB = AB - AD = 16 - 12 = 4$."
  },
  {
    id: "est1_2020_oct_q51",
    examId: "EST12020Oct",
    question: "$\\frac{3y - 2(4 - 2y)}{3} = \\frac{-11 + 3(2 + 3y)}{5}$\n\nWhat is the value of $y$ in the equation above?",
    options: [],
    correctAnswer: "25/8",
    isGridIn: true,
    explanation: "Simplify the numerators first:\nLeft side:\n$3y - 2(4 - 2y) = 3y - 8 + 4y = 7y - 8$\nRight side:\n$-11 + 3(2 + 3y) = -11 + 6 + 9y = 9y - 5$\nEquation becomes:\n$\\frac{7y - 8}{3} = \\frac{9y - 5}{5}$\nCross-multiply:\n$5(7y - 8) = 3(9y - 5)$\n$35y - 40 = 27y - 15$\n$8y = 25$\n$y = \\frac{25}{8}$ or $3.125$"
  },
  {
    id: "est1_2020_oct_q52",
    examId: "EST12020Oct",
    question: "A multiple choice test contains 50 questions. A correct answer is worth 3 points and an incorrect answer is worth -2 points. If a student receives 75 on the test, how many questions did he answer correctly?",
    options: [],
    correctAnswer: "35",
    isGridIn: true,
    explanation: "Let $c$ be the number of correct answers and $w$ be the number of incorrect answers.\n$c + w = 50 \\implies w = 50 - c$\n$3c - 2w = 75$\nSubstitute $w$:\n$3c - 2(50 - c) = 75$\n$3c - 100 + 2c = 75$\n$5c = 175$\n$c = 35$"
  },
  {
    id: "est1_2020_oct_q53",
    examId: "EST12020Oct",
    question: "If $|2b - 1| \\le 3$, how many possible integer values of $b$ are there?",
    options: [],
    correctAnswer: "4",
    isGridIn: true,
    explanation: "$-3 \\le 2b - 1 \\le 3$\nAdd 1 to all parts:\n$-2 \\le 2b \\le 4$\nDivide all parts by 2:\n$-1 \\le b \\le 2$\nThe integer values for $b$ are $-1, 0, 1, 2$.\nThere are exactly 4 integer values."
  },
  {
    id: "est1_2020_oct_q54",
    examId: "EST12020Oct",
    question: "We chose randomly a sample of 250 lawyers out of the 4900 registered in the syndicate, and we asked them about the most frequent case they defend. The results showed that 45 answered divorce, 125 answered theft and 80 answered murder. Presumably, what is the total number of lawyers registered in the syndicate who deal most frequently with murder?",
    options: [],
    correctAnswer: "1568",
    isGridIn: true,
    explanation: "In the sample, 80 out of 250 lawyers deal most frequently with murder.\nProportion = $\\frac{80}{250} = \\frac{8}{25}$.\nTo estimate the total out of 4900, multiply the proportion by the total population:\n$\\frac{8}{25} \\times 4900 = 8 \\times 196 = 1568$."
  },
  {
    id: "est1_2020_oct_q55",
    examId: "EST12020Oct",
    question: "The function $g$ is defined by $g(x) = ax^2 - 2x - 5$ and $g(-1) = 1$. What is the value of $g(2)$?",
    options: [],
    correctAnswer: "7",
    isGridIn: true,
    explanation: "First, use $g(-1) = 1$ to find $a$:\n$a(-1)^2 - 2(-1) - 5 = 1$\n$a + 2 - 5 = 1$\n$a - 3 = 1 \\implies a = 4$\nNow the function is $g(x) = 4x^2 - 2x - 5$.\nFind $g(2)$:\n$g(2) = 4(2)^2 - 2(2) - 5 = 4(4) - 4 - 5 = 16 - 9 = 7$."
  },
  {
    id: "est1_2020_oct_q56",
    examId: "EST12020Oct",
    question: "What is the remainder of the division of $k(x) = 3x^3 + 8x^2 - 2x - 7$ by $x + 2$?",
    options: [],
    correctAnswer: "5",
    isGridIn: true,
    explanation: "According to the Remainder Theorem, the remainder of polynomial $k(x)$ divided by $x + 2$ is equal to $k(-2)$.\n$k(-2) = 3(-2)^3 + 8(-2)^2 - 2(-2) - 7$\n$k(-2) = 3(-8) + 8(4) + 4 - 7$\n$k(-2) = -24 + 32 + 4 - 7 = 5$"
  },
  {
    id: "est1_2020_oct_q57",
    examId: "EST12020Oct",
    question: "$x^2 - 2mx = -9$\n\nWhat is the minimum positive integer value of $m$ that allows the above equation to have two real solutions?",
    options: [],
    correctAnswer: "4",
    isGridIn: true,
    explanation: "Rewrite the equation: $x^2 - 2mx + 9 = 0$\nFor a quadratic equation to have two real solutions, its discriminant must be strictly positive: $\\Delta > 0$.\n$\\Delta = b^2 - 4ac = (-2m)^2 - 4(1)(9) = 4m^2 - 36$\n$4m^2 - 36 > 0 \\implies 4m^2 > 36 \\implies m^2 > 9$\nSince $m$ must be a positive integer, $m > 3$.\nThe minimum positive integer value that satisfies this is $m = 4$."
  },
  {
    id: "est1_2020_oct_q58",
    examId: "EST12020Oct",
    question: "A right triangle has an area of $96 \\text{ cm}^2$. If the shorter leg is $4\\text{ cm}$ less than the longer leg, what is the length of the hypotenuse?",
    options: [],
    correctAnswer: "20",
    isGridIn: true,
    explanation: "Let the longer leg be $x$ and the shorter leg be $x - 4$.\nArea = $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = 96$\n$\\frac{1}{2} x (x - 4) = 96 \\implies x(x - 4) = 192$\n$x^2 - 4x - 192 = 0$\n$(x - 16)(x + 12) = 0 \\implies x = 16$ (since length must be positive).\nThe legs are $16$ and $16 - 4 = 12$.\nThe hypotenuse $h$ is found using the Pythagorean theorem:\n$h = \\sqrt{16^2 + 12^2} = \\sqrt{256 + 144} = \\sqrt{400} = 20$."
  }
];
