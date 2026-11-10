import { Question } from '../../types';

export const EST1_2020_OCT_PART3: Question[] = [
  {
    id: "est1_2020_oct_q21",
    examId: "EST12020Oct",
    question: "The secret value, $k$, of a 4-digit pin code $abcd$ is obtained by subtracting the triple of $b$ from $c$, and dividing the resulting expression by half of the sum of $a$ and $d$. What is the secret value, $k$, in terms of $a,b,c$ and $d$?",
    options: [
      "$k = \\frac{c - 3b}{2a + 2d}$",
      "$k = \\frac{b - 3c}{2a + 2b}$",
      "$k = \\frac{2c - 6b}{a + d}$",
      "$k = \\frac{6b - 2c}{a + d}$"
    ],
    correctAnswer: 2,
    explanation: "Subtracting the triple of $b$ from $c$ gives: $c - 3b$.\nHalf of the sum of $a$ and $d$ is: $\\frac{1}{2}(a + d)$.\nDividing the two expressions gives:\n$k = \\frac{c - 3b}{\\frac{1}{2}(a + d)} = \\frac{2(c - 3b)}{a + d} = \\frac{2c - 6b}{a + d}$"
  },
  {
    id: "est1_2020_oct_q22",
    examId: "EST12020Oct",
    question: "A library sells new and used books. If, out of the total of 474, there are twice as many new books as old ones. How many new books are there in the library?",
    options: [
      "$316$",
      "$158$",
      "$352$",
      "$238$"
    ],
    correctAnswer: 0,
    explanation: "Let $N$ be the number of new books and $O$ be the number of old books.\n$N + O = 474$\n$N = 2O \\implies O = \\frac{N}{2}$\nSubstitute $O$ in the first equation:\n$N + \\frac{N}{2} = 474 \\implies \\frac{3N}{2} = 474 \\implies 3N = 948 \\implies N = 316$"
  },
  {
    id: "est1_2020_oct_q23",
    examId: "EST12020Oct",
    question: "What is the area of the sector defined by a central angle of $54^\\circ$ in the circle of equation $x^2 + y^2 - 8x + 12y - 12 = 0$?",
    options: [
      "$15\\pi$",
      "$9.6\\pi$",
      "$5.4\\pi$",
      "$2.4\\pi$"
    ],
    correctAnswer: 1,
    explanation: "First, complete the square to find the radius of the circle.\n$(x^2 - 8x + 16) + (y^2 + 12y + 36) = 12 + 16 + 36$\n$(x - 4)^2 + (y + 6)^2 = 64$\nThe radius squared ($r^2$) is $64$.\nThe area of the entire circle is $\\pi r^2 = 64\\pi$.\nThe area of the sector is given by: $\\frac{\\text{central angle}}{360^\\circ} \\times \\text{Area}$\n$\\frac{54}{360} \\times 64\\pi = \\frac{3}{20} \\times 64\\pi = \\frac{192\\pi}{20} = 9.6\\pi$"
  },
  {
    id: "est1_2020_oct_q24",
    examId: "EST12020Oct",
    question: "The graph shown represents which of the following equations?",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7Ij4KICA8c3R5bGU+CiAgICAudGlja3MgewpzdHJva2U6ICNkM2QzZDM7CnN0cm9rZS13aWR0aDogMTsKICAgIH0KICAgIC5heGlzIHsKc3Ryb2tlOiBibGFjazsKc3Ryb2tlLXdpZHRoOiAyOwogICAgfQogICAgdGV4dCB7CmZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOwpmb250LXNpemU6IDEwcHg7CiAgICB9CiAgPC9zdHlsZT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTAsIDIwMCkiPgogICAgPCEtLSBHcmlkIC0tPgogICAgPGcgY2xhc3M9InRpY2tzIj4KICAgICAgPGxpbmUgeDE9Ii0xMjAiIHkxPSItMTYwIiB4Mj0iMTIwIiB5Mj0iLTE2MCIvPgogICAgICA8bGluZSB4MT0iLTEyMCIgeTE9Ii0xNDAiIHgyPSIxMjAiIHkyPSItMTQwIi8+CiAgICAgIDxsaW5lIHgxPSItMTIwIiB5MT0iLTEyMCIgeDI9IjEyMCIgeTI9Ii0xMjAiLz4KICAgICAgPGxpbmUgeDE9Ii0xMjAiIHkxPSItMTAwIiB4Mj0iMTIwIiB5Mj0iLTEwMCIvPgogICAgICA8bGluZSB4MT0iLTEyMCIgeTE9Ii04MCIgeDI9IjEyMCIgeTI9Ii04MCIvPgogICAgICA8bGluZSB4MT0iLTEyMCIgeTE9Ii02MCIgeDI9IjEyMCIgeTI9Ii02MCIvPgogICAgICA8bGluZSB4MT0iLTEyMCIgeTE9Ii00MCIgeDI9IjEyMCIgeTI9Ii00MCIvPgogICAgICA8bGluZSB4MT0iLTEyMCIgeTE9Ii0yMCIgeDI9IjEyMCIgeTI9Ii0yMCIvPgogICAgICA8bGluZSB4MT0iLTEyMCIgeTE9IjIwIiB4Mj0iMTIwIiB5Mj0iMjAiLz4KICAgICAgPGxpbmUgeDE9Ii0xMjAiIHkxPSI0MCIgeDI9IjEyMCIgeTI9IjQwIi8+CiAgICAgIDxsaW5lIHgxPSItMTIwIiB5MT0iNjAiIHgyPSIxMjAiIHkyPSI2MCIvPgogICAgICA8bGluZSB4MT0iLTEyMCIgeTE9IjgwIiB4Mj0iMTIwIiB5Mj0iODAiLz4KCiAgICAgIDxsaW5lIHgxPSItMTAwIiB5MT0iLTE2MCIgeDI9Ii0xMDAiIHkyPSI4MCIvPgogICAgICA8bGluZSB4MT0iLTgwIiB5MT0iLTE2MCIgeDI9Ii04MCIgeTI9IjgwIi8+CiAgICAgIDxsaW5lIHgxPSItNjAiIHkxPSItMTYwIiB4Mj0iLTYwIiB5Mj0iODAiLz4KICAgICAgPGxpbmUgeDE9Ii00MCIgeTE9Ii0xNjAiIHgyPSItNDAiIHkyPSI4MCIvPgogICAgICA8bGluZSB4MT0iLTIwIiB5MT0iLTE2MCIgeDI9Ii0yMCIgeTI9IjgwIi8+CiAgICAgIDxsaW5lIHgxPSIyMCIgeTE9Ii0xNjAiIHgyPSIyMCIgeTI9IjgwIi8+CiAgICAgIDxsaW5lIHgxPSI0MCIgeTE9Ii0xNjAiIHgyPSI0MCIgeTI9IjgwIi8+CiAgICAgIDxsaW5lIHgxPSI2MCIgeTE9Ii0xNjAiIHgyPSI2MCIgeTI9IjgwIi8+CiAgICAgIDxsaW5lIHgxPSI4MCIgeTE9Ii0xNjAiIHgyPSI4MCIgeTI9IjgwIi8+CiAgICAgIDxsaW5lIHgxPSIxMDAiIHkxPSItMTYwIiB4Mj0iMTAwIiB5Mj0iODAiLz4KICAgIDwvZz4KCiAgICA8IS0tIEF4ZXMgLS0+CiAgICA8bGluZSB4MT0iLTEyMCIgeTE9IjAiIHgyPSIxMzAiIHkyPSIwIiBjbGFzcz0iYXhpcyIvPgogICAgPGxpbmUgeDE9IjAiIHkxPSItMTcwIiB4Mj0iMCIgeTI9IjkwIiBjbGFzcz0iYXhpcyIvPgogICAgPHBvbHlnb24gcG9pbnRzPSIzLDkwIDAsOTQgLTMsOTAiIGZpbGw9ImJsYWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzAsLTkwKSByb3RhdGUoOTAgMCw5MCkiLz4KICAgIDxwb2x5Z29uIHBvaW50cz0iMywtMTc1IDAsLTE3OSAtMywtMTc1IiBmaWxsPSJibGFjayIvPgoKICAgIDwhLS0gTGFiZWxzIC0tPgogICAgPHRleHQgeD0iMTAwIiB5PSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NTwvdGV4dD4KICAgIDx0ZXh0IHg9IjgwIiB5PSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NDwvdGV4dD4KICAgIDx0ZXh0IHg9Ii04MCIgeT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPi00PC90ZXh0PgogICAgPHRleHQgeD0iLTYwIiB5PSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+LTM8L3RleHQ+CiAgICA8dGV4dCB4PSItMTUiIHk9Ii0xMjAiIHRleHQtYW5jaG9yPSJlbmQiPjY8L3RleHQ+CiAgICA8dGV4dCB4PSItMTUiIHk9Ii02MCIgdGV4dC1hbmNob3I9ImVuZCI+MzwvdGV4dD4KICAgIAogICAgPCEtLSBGdW5jdGlvbiBsaW5lIC0tPgogICAgPGxpbmUgeDE9Ii0xMTAiIHkxPSItMTA0IiB4Mj0iMTQwIiB5Mj0iNCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiAvPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9Ii02MCIgcj0iMyIgZmlsbD0iYmxhY2siIC8+CiAgICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSItMjAiIHI9IjMiIGZpbGw9ImJsYWNrIiAvPgogIDwvZz4KPC9zdmc+",
    options: [
      "$y = -\\frac{2}{5}x - 3$",
      "$y = \\frac{2}{5}x + 3$",
      "$y = -\\frac{2}{5}x + 3$",
      "$y = -\\frac{5}{2}x + 3$"
    ],
    correctAnswer: 2,
    explanation: "Looking at the graph, the $y$-intercept is at $(0, 3)$. This means the equation must have $+3$ at the end, eliminating option A.\nThe line also passes exactly through the point $(5, 1)$.\nWe can verify this with the remaining options.\nUsing $y = -\\frac{2}{5}x + 3$, substitute $x = 5$:\n$y = -\\frac{2}{5}(5) + 3 = -2 + 3 = 1$. This matches the point $(5,1)$.\nThe slope is $m = \\frac{1 - 3}{5 - 0} = -\\frac{2}{5}$."
  },
  {
    id: "est1_2020_oct_q25",
    examId: "EST12020Oct",
    question: "If $f(x) = 5 - 2x$ and $g(x) = \\frac{x^2}{4}$, Which of the following is not in the range of $f(g(x))$?",
    options: [
      "$-3$",
      "$0$",
      "$5$",
      "$6$"
    ],
    correctAnswer: 3,
    explanation: "First, find the composite function $f(g(x))$:\n$f(g(x)) = 5 - 2\\left(\\frac{x^2}{4}\\right) = 5 - \\frac{x^2}{2}$\nSince $x^2$ is always greater than or equal to $0$, $\\frac{x^2}{2} \\ge 0$.\nTherefore, $5 - \\frac{x^2}{2} \\le 5$.\nThe range of $f(g(x))$ is all real numbers less than or equal to $5$, or $(-\\infty, 5]$.\nThe value $6$ is not in this range."
  },
  {
    id: "est1_2020_oct_q26",
    examId: "EST12020Oct",
    question: "A line, having a slope of $-\\frac{2}{3}$ passes through the points $A(2-k, 5)$ and $B(-2k, -1)$. What is the value of $k$?",
    options: [
      "$11$",
      "$4$",
      "$-4$",
      "$-11$"
    ],
    correctAnswer: 3,
    explanation: "The formula for the slope $m$ is $\\frac{y_2 - y_1}{x_2 - x_1}$.\n$m = \\frac{-1 - 5}{-2k - (2-k)} = \\frac{-6}{-2k - 2 + k} = \\frac{-6}{-k - 2}$\nWe are given that the slope is $-\\frac{2}{3}$:\n$\\frac{-6}{-k - 2} = -\\frac{2}{3}$\nCross-multiply:\n$3(-6) = -2(-k - 2)$\n$-18 = 2k + 4$\n$2k = -18 - 4 = -22$\n$k = -11$"
  },
  {
    id: "est1_2020_oct_q27",
    examId: "EST12020Oct",
    question: "Questions 7 and 8 refer to the following information.\n\nThe table below summarizes the results of a survey about travel destination preferences for a group of 750 university students of 4 different majors.\n\n| | History | Math | Audit | IT | Total |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **Rome** | 65 | 35 | 35 | 15 | **150** |\n| **Paris** | 75 | 65 | 10 | 25 | **175** |\n| **Tokyo** | 40 | 115 | 50 | 20 | **225** |\n| **NYC** | 70 | 60 | 30 | 40 | **200** |\n| **Total** | **250** | **275** | **125** | **100** | **750** |\n\nIn which major can you find the highest percentage of students who prefer NYC?",
    options: [
      "History",
      "IT",
      "Audit",
      "Math"
    ],
    correctAnswer: 1,
    explanation: "Calculate the percentage for each major:\nHistory: $\\frac{70}{250} = 28\\%$\nMath: $\\frac{60}{275} \\approx 21.8\\%$\nAudit: $\\frac{30}{125} = 24\\%$\nIT: $\\frac{40}{100} = 40\\%$\nThe highest percentage is in IT."
  },
  {
    id: "est1_2020_oct_q28",
    examId: "EST12020Oct",
    question: "Questions 7 and 8 refer to the following information.\n\nThe table below summarizes the results of a survey about travel destination preferences for a group of 750 university students of 4 different majors.\n\n| | History | Math | Audit | IT | Total |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **Rome** | 65 | 35 | 35 | 15 | **150** |\n| **Paris** | 75 | 65 | 10 | 25 | **175** |\n| **Tokyo** | 40 | 115 | 50 | 20 | **225** |\n| **NYC** | 70 | 60 | 30 | 40 | **200** |\n| **Total** | **250** | **275** | **125** | **100** | **750** |\n\nWhat fraction of people who prefer Rome or Paris come from an Audit or Math majors?",
    options: [
      "$\\frac{140}{325}$",
      "$\\frac{17}{65}$",
      "$\\frac{29}{65}$",
      "$\\frac{4}{13}$"
    ],
    correctAnswer: 2,
    explanation: "Total people who prefer Rome or Paris: $150 + 175 = 325$.\nOut of these, how many are Math or Audit majors?\nRome (Math + Audit) = $35 + 35 = 70$\nParis (Math + Audit) = $65 + 10 = 75$\nTotal = $70 + 75 = 145$\nThe fraction is $\\frac{145}{325}$.\nDivide numerator and denominator by 5: $\\frac{29}{65}$"
  },
  {
    id: "est1_2020_oct_q29",
    examId: "EST12020Oct",
    question: "The selling price of an apartment is directly proportional its area. If an apartment of $127 \\text{ sqm}$ is sold for $\\$168,275$, what would be the price of a $156 \\text{ sqm}$ apartment?",
    options: [
      "$237,900\\$$",
      "$208,500\\$$",
      "$136,993\\$$",
      "$206,700\\$$"
    ],
    correctAnswer: 3,
    explanation: "Let $P$ be the price and $A$ be the area. Since they are directly proportional, $\\frac{P_1}{A_1} = \\frac{P_2}{A_2}$.\n$\\frac{168275}{127} = \\frac{x}{156}$\n$x = 156 \\times \\frac{168275}{127}$\n$x = 156 \\times 1325 = 206700$"
  },
  {
    id: "est1_2020_oct_q30",
    examId: "EST12020Oct",
    question: "In a hospital, the medical staff is composed of 34 doctors and 68 nurses. How many additional doctors should join the hospital in order for the ratio of doctors to total number of medical staff to become 3 to 7?",
    options: [
      "$21$",
      "$19$",
      "$17$",
      "$15$"
    ],
    correctAnswer: 2,
    explanation: "Let $x$ be the number of additional doctors.\nInitial doctors = $34$\nInitial nurses = $68$\nInitial total staff = $34 + 68 = 102$\nNew number of doctors = $34 + x$\nNew total staff = $102 + x$\nThe new ratio of doctors to total staff is $\\frac{3}{7}$:\n$\\frac{34 + x}{102 + x} = \\frac{3}{7}$\n$7(34 + x) = 3(102 + x)$\n$238 + 7x = 306 + 3x$\n$4x = 68 \\implies x = 17$\nSo, $17$ additional doctors should join."
  },
  {
    id: "est1_2020_oct_q31",
    examId: "EST12020Oct",
    question: "$\\sqrt{27x^3y^5 - 18x^2y^4}$\n\nWhich of the following is equivalent to the above expression? ($x$ and $y > 0$)",
    options: [
      "$3xy^2(\\sqrt{3xy} - \\sqrt{2})$",
      "$3xy^2\\sqrt{3xy - 2}$",
      "$9xy^2\\sqrt{3xy - 2}$",
      "$9xy^2(\\sqrt{3xy} - \\sqrt{2})$"
    ],
    correctAnswer: 1,
    explanation: "Factor the terms inside the square root by finding the greatest common factor (GCF).\nThe GCF of $27x^3y^5$ and $18x^2y^4$ is $9x^2y^4$.\n$\\sqrt{9x^2y^4(3xy - 2)}$\nTake the square root of the perfect square factors ($9x^2y^4$):\n$\\sqrt{9x^2y^4} = 3xy^2$ (since $x$ and $y$ are positive)\nThis leaves the non-perfect square part inside the radical:\n$3xy^2\\sqrt{3xy - 2}$"
  },
  {
    id: "est1_2020_oct_q32",
    examId: "EST12020Oct",
    question: "If $\\sin A = \\cos \\frac{7\\pi}{3}$, what is one possible value of $A$ in radians?",
    options: [
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{6}$"
    ],
    correctAnswer: 3,
    explanation: "First, find the reference angle for $\\frac{7\\pi}{3}$:\n$\\frac{7\\pi}{3} = 2\\pi + \\frac{\\pi}{3}$.\nSo, $\\cos \\left(\\frac{7\\pi}{3}\\right) = \\cos \\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$.\nNow we have the equation $\\sin A = \\frac{1}{2}$.\nWe know that $\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$.\nTherefore, one possible value for $A$ is $\\frac{\\pi}{6}$."
  },
  {
    id: "est1_2020_oct_q33",
    examId: "EST12020Oct",
    question: "Maria downloaded to her music library a total of 350 pop and rock songs. If the ratio of pop to rock song is 3 to 11. How many rock songs are there in Maria's library?",
    options: [
      "$75$",
      "$125$",
      "$175$",
      "$275$"
    ],
    correctAnswer: 3,
    explanation: "The ratio is 3 parts pop to 11 parts rock, which means there are $3 + 11 = 14$ parts in total.\nTo find the number of songs per part, divide the total number of songs by the total number of parts:\n$350 \\div 14 = 25$ songs per part.\nSince there are 11 parts rock songs, multiply 11 by the number of songs per part:\n$11 \\times 25 = 275$ rock songs."
  },
  {
    id: "est1_2020_oct_q34",
    examId: "EST12020Oct",
    question: "If $5 - \\frac{3}{2}x \\ge 3$, what is the highest value of $\\frac{9}{8}x + 1$?",
    options: [
      "$2.5$",
      "$3.5$",
      "$4.5$",
      "$5.5$"
    ],
    correctAnswer: 0,
    explanation: "Solve the inequality for $x$:\n$5 - \\frac{3}{2}x \\ge 3$\n$-\\frac{3}{2}x \\ge -2$\nMultiply both sides by $-\\frac{2}{3}$ and flip the inequality sign:\n$x \\le -2\\left(-\\frac{2}{3}\\right) \\implies x \\le \\frac{4}{3}$\nTo maximize $\\frac{9}{8}x + 1$, use the highest possible value for $x$, which is $\\frac{4}{3}$:\n$\\frac{9}{8}\\left(\\frac{4}{3}\\right) + 1 = \\frac{36}{24} + 1 = \\frac{3}{2} + 1 = 1.5 + 1 = 2.5$"
  },
  {
    id: "est1_2020_oct_q35",
    examId: "EST12020Oct",
    question: "A craftsman is looking for two kinds of paint from a wholesaler. The first kind $a$ is packaged in $10 \\text{ kg}$ jars, the second $b$ in $25 \\text{ kg}$ jars. The $10 \\text{ kg}$ jar costs $\\$45$ and the $25 \\text{ kg}$ one costs $\\$120$. The load must not exceed $250 \\text{ kg}$ and the total sum must be at least $\\$900$ in order to get a discount. Which system of inequalities verifies the given information?",
    options: [
      "$\\begin{cases} 10a + 25b \\ge 250 \\\\ 45a + 120b \\le 900 \\end{cases}$",
      "$\\begin{cases} 10a + 25b \\le 250 \\\\ 45a + 120b \\le 900 \\end{cases}$",
      "$\\begin{cases} 10a + 25b \\ge 250 \\\\ 45a + 120b \\ge 900 \\end{cases}$",
      "$\\begin{cases} 10a + 25b \\le 250 \\\\ 45a + 120b \\ge 900 \\end{cases}$"
    ],
    correctAnswer: 3,
    explanation: "Let $a$ be the number of $10 \\text{ kg}$ jars and $b$ be the number of $25 \\text{ kg}$ jars.\nThe total weight is $10a + 25b$, and it must not exceed $250$, so: $10a + 25b \\le 250$.\nThe total cost is $45a + 120b$, and it must be at least $\\$900$, so: $45a + 120b \\ge 900$.\nThis corresponds to the system in option D."
  }
];
