import { Question } from './types';

export const est1_2026_jan2_questions: Question[
] = [
  {
    id: "est1_2026_jan_1",
    question: "Hana deposited $1,000 in her bank account. The function $f(t) = 25t + 1,000$ represents the amount, in dollars, in Hana's bank account after $t$ months. What is the best interpretation of 25 in this context?",
    options: [
      "After 1 month, the amount in Hana's bank account is $25.",
      "Before Hana made any deposits, the amount in her bank account was $25.",
      "For each month, the amount in Hana's bank account increases by $25.",
      "Hana made a total of 25 monthly deposits."
    ],
    correctAnswer: 2,
    explanation: "In the linear function $f(t) = 25t + 1000$, the coefficient of $t$ (which is 25) represents the rate of change. This means the account balance increases by $25 for each month that passes.",
    category: "Heart of Algebra",
    topics: ["Linear Functions", "Interpreting Linear Models"]
  },
  {
    id: "est1_2026_jan_2",
    question: "The remainder when dividing the expression $5x^3 + 4x^2 - 2x + 4$ by $3x + 2$ is:",
    options: ["4", "140/27", "152/27", "152/9"],
    correctAnswer: 2,
    explanation: "By the Polynomial Remainder Theorem, the remainder of dividing $P(x)$ by $ax - b$ is $P(b/a)$. Here, we evaluate the polynomial at $x = -2/3$: $5(-2/3)^3 + 4(-2/3)^2 - 2(-2/3) + 4 = 5(-8/27) + 4(4/9) + 4/3 + 4 = -40/27 + 48/27 + 36/27 + 108/27 = 152/27$.",
    category: "Passport to Advanced Math",
    topics: ["Polynomial Division", "Remainder Theorem"]
  },
  {
    id: "est1_2026_jan_3",
    question: "If $A$ and $B$ are two equal real numbers such that $A = \\frac{3}{2}x - 1 + 2(x - 3)$ and $B = 2x + \\frac{1}{7}$, then the value of $3A$ is:",
    options: ["-15", "0", "29", "58"],
    correctAnswer: 2,
    explanation: "First, simplify $A$: $A = 1.5x - 1 + 2x - 6 = 3.5x - 7$. Since $A = B$, we have $3.5x - 7 = 2x + 1/7$. Solving for $x$: $1.5x = 7 + 1/7 = 50/7$, so $x = 100/21$. Now find $A$: $A = 2(100/21) + 1/7 = 200/21 + 3/21 = 203/21 = 29/3$. Finally, $3A = 3(29/3) = 29$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2026_jan_4",
    question: "The solution to the given system of equations is $(x, y)$. What is the value of $y$?\n$24x + y = 48$\n$6x + y = 72$",
    options: ["y = -10", "y = -4/3", "y = 18", "y = 80"],
    correctAnswer: 3,
    explanation: "Subtract the second equation from the first: $(24x + y) - (6x + y) = 48 - 72 \\Rightarrow 18x = -24 \\Rightarrow x = -4/3$. Substitute $x$ back into the second equation: $6(-4/3) + y = 72 \\Rightarrow -8 + y = 72 \\Rightarrow y = 80$.",
    category: "Heart of Algebra",
    topics: ["Systems of Linear Equations"]
  },
  {
    id: "est1_2026_jan_5",
    question: "The given table represents the linear function $g(x)$. What is the value of $n + g(b + 15)$?\n\n| $x$ | $g(x)$ |\n|---|---|\n| $b$ | 18 |\n| $b + 5$ | 24 |\n| $b + 25$ | $n$ |",
    options: ["72", "78", "84", "90"],
    correctAnswer: 2,
    explanation: "The slope of the linear function is $m = (24 - 18) / ((b + 5) - b) = 6 / 5 = 1.2$. To find $n$, which is $g(b + 25)$, we use the point $(b, 18)$: $n = 18 + 1.2(25) = 18 + 30 = 48$. To find $g(b + 15)$: $g(b + 15) = 18 + 1.2(15) = 18 + 18 = 36$. Therefore, $n + g(b + 15) = 48 + 36 = 84$.",
    category: "Heart of Algebra",
    topics: ["Linear Functions", "Slope"]
  },
  {
    id: "est1_2026_jan_6",
    question: "For a certain rectangular region, the ratio of its length to its width is 35:10. If the width increases by 7 units, by how many units must the length increase to keep the same ratio?",
    options: ["12.5", "14.0", "24.5", "28.0"],
    correctAnswer: 2,
    explanation: "The ratio of length to width is $35/10 = 3.5$. This means $L = 3.5W$. If the width becomes $W + 7$, the new length must be $L_{new} = 3.5(W + 7) = 3.5W + 24.5 = L + 24.5$. Thus, the length must increase by 24.5 units.",
    category: "Problem Solving and Data Analysis",
    topics: ["Ratios", "Proportions"]
  },
  {
    id: "est1_2026_jan_7",
    question: "The table shows the distribution of color and shape of 100 tiles of equal area. If one of these tiles is selected at random, what is the probability of selecting a red tile?\n\n| | Red | Blue | Yellow |\n|---|---|---|---|\n| Square | 10 | 20 | 25 |\n| Pentagon | 20 | 10 | 15 |",
    options: ["0.30", "0.25", "0.20", "0.15"],
    correctAnswer: 0,
    explanation: "The total number of red tiles is $10 \\text{ (Square)} + 20 \\text{ (Pentagon)} = 30$. The total number of tiles is 100. The probability of selecting a red tile is $30 / 100 = 0.30$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Probability", "Data Tables"]
  },
  {
    id: "est1_2026_jan_8",
    question: "Circle C of center A is translated downward by 6 units and scaled by a factor of 2. Which equation defines the new circle?",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgICAgPGRlZnM+CiAgICAgICAgPHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICA8cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlMGUwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8L3BhdHRlcm4+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9InVybCgjZ3JpZCkiIC8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMTAwIiB4Mj0iMjAwIiB5Mj0iMTAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgICA8bGluZSB4MT0iMTAwIiB5MT0iMCIgeDI9IjEwMCIgeTI9IjIwMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgICAgPGNpcmNsZSBjeD0iNjAiIGN5PSIxMDAiIHI9IjYwIiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPGNpcmNsZSBjeD0iNjAiIGN5PSIxMDAiIHI9IjMiIGZpbGw9ImdyYXkiIHN0cm9rZT0iYmxhY2siLz4KICAgICAgPHRleHQgeD0iNjUiIHk9Ijk1IiBmb250LXNpemU9IjEyIiBmb250LXN0eWxlPSJpdGFsaWMiPkE8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjQ1IiB5PSI0NSIgZm9udC1zaXplPSIxMiIgZm9udC1zdHlsZT0iaXRhbGljIj5DPC90ZXh0PgogICAgICA8dGV4dCB4PSIxMDUiIHk9IjE1IiBmb250LXNpemU9IjEwIiBmb250LXN0eWxlPSJpdGFsaWMiPnk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjE5MCIgeT0iMTE1IiBmb250LXNpemU9IjEwIiBmb250LXN0eWxlPSJpdGFsaWMiPng8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjkwIiB5PSI2NSIgZm9udC1zaXplPSIxMCI+MjwvdGV4dD4KICAgICAgPHRleHQgeD0iMTM1IiB5PSIxMTUiIGZvbnQtc2l6ZT0iMTAiPjI8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjE1IiB5PSIxMTUiIGZvbnQtc2l6ZT0iMTAiPi00PC90ZXh0PgogICAgICA8dGV4dCB4PSI1NSIgeT0iMTE1IiBmb250LXNpemU9IjEwIj4tMjwvdGV4dD4KICAgICAgPHRleHQgeD0iOTAiIHk9IjE0NSIgZm9udC1zaXplPSIxMCI+LTI8L3RleHQ+CiAgICA8L3N2Zz4=",
    options: [
      "(x + 2)^2 + (y + 6)^2 = 36",
      "1/2(x + 2)^2 + 1/2(y + 6)^2 = 9",
      "2(x + 2)^2 + 2(y - 6)^2 = 9",
      "(x + 2)^2 + (y - 6)^2 = 36"
    ],
    correctAnswer: 0,
    explanation: "From the graph, the center A is at $(-2, 0)$ and the circle passes through $(1, 0)$, so its radius is $1 - (-2) = 3$. If the circle is translated downward by 6 units, its new center is $(-2, -6)$. If it is scaled by a factor of 2, its new radius is $3 \\times 2 = 6$. The equation of the new circle is $(x - (-2))^2 + (y - (-6))^2 = 6^2$, which simplifies to $(x + 2)^2 + (y + 6)^2 = 36$.",
    category: "Additional Topics in Math",
    topics: ["Circle Equations", "Transformations"]
  },
  {
    id: "est1_2026_jan_9",
    question: "A group of students recorded the amount of time $x$ they studied for a math test (in hours) and their corresponding test scores $y$ out of 100. Which of the following equations is the most appropriate linear best-fit model for the data shown?",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzYwIDIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ibXgtYXV0byBoLTY0IHctYXV0byI+CiAgICAgIDxkZWZzPgogICAgICAgIDxwYXR0ZXJuIGlkPSJncmlkX3E5IiB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgPHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UwZTBlMCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KICAgICAgICA8L3BhdHRlcm4+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3QgeD0iNDAiIHk9IjMwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0idXJsKCNncmlkX3E5KSIgLz4KICAgICAgPGxpbmUgeDE9IjQwIiB5MT0iMTgwIiB4Mj0iMzQwIiB5Mj0iMTgwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgICA8bGluZSB4MT0iNDAiIHkxPSIzMCIgeDI9IjQwIiB5Mj0iMTgwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgICA8dGV4dCB4PSI2MCIgeT0iMTk1IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wLjU8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjgwIiB5PSIxOTUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjEwMCIgeT0iMTk1IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLjU8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjEyMCIgeT0iMTk1IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yPC90ZXh0PgogICAgICA8dGV4dCB4PSIxNDAiIHk9IjE5NSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mi41PC90ZXh0PgogICAgICA8dGV4dCB4PSIxNjAiIHk9IjE5NSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzwvdGV4dD4KICAgICAgPHRleHQgeD0iMTgwIiB5PSIxOTUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjMuNTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjAwIiB5PSIxOTUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQ8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIyMCIgeT0iMTk1IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40LjU8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI0MCIgeT0iMTk1IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41PC90ZXh0PgogICAgICA8dGV4dCB4PSIyNjAiIHk9IjE5NSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NS41PC90ZXh0PgogICAgICA8dGV4dCB4PSIyODAiIHk9IjE5NSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NjwvdGV4dD4KICAgICAgPHRleHQgeD0iMzAwIiB5PSIxOTUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjYuNTwvdGV4dD4KICAgICAgPHRleHQgeD0iMzIwIiB5PSIxOTUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjc8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjM1IiB5PSIxNjgiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJlbmQiPjUwPC90ZXh0PgogICAgICA8dGV4dCB4PSIzNSIgeT0iMTUzIiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0iZW5kIj41NTwvdGV4dD4KICAgICAgPHRleHQgeD0iMzUiIHk9IjEzOCIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9ImVuZCI+NjA8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjM1IiB5PSIxMjMiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJlbmQiPjY1PC90ZXh0PgogICAgICA8dGV4dCB4PSIzNSIgeT0iMTA4IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0iZW5kIj43MDwvdGV4dD4KICAgICAgPHRleHQgeD0iMzUiIHk9IjkzIiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0iZW5kIj43NTwvdGV4dD4KICAgICAgPHRleHQgeD0iMzUiIHk9Ijc4IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0iZW5kIj44MDwvdGV4dD4KICAgICAgPHRleHQgeD0iMzUiIHk9IjYzIiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0iZW5kIj44NTwvdGV4dD4KICAgICAgPHRleHQgeD0iMzUiIHk9IjQ4IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0iZW5kIj45MDwvdGV4dD4KICAgICAgPHRleHQgeD0iMTkwIiB5PSIyMTUiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRpbWUgU3R1ZGllZDwvdGV4dD4KICAgICAgPHRleHQgeD0iMTUiIHk9IjEwNSIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDE1LDEwNSkiPlRlc3QgU2NvcmVzPC90ZXh0PgogICAgICA8Y2lyY2xlIGN4PSI4MCIgY3k9IjE1OSIgcj0iNCIgZmlsbD0iIzlDQTNBRiIgc3Ryb2tlPSJibGFjayIvPgogICAgICA8Y2lyY2xlIGN4PSIxMjAiIGN5PSIxMzUiIHI9IjQiIGZpbGw9IiM5Q0EzQUYiIHN0cm9rZT0iYmxhY2siLz4KICAgICAgPGNpcmNsZSBjeD0iMTYwIiBjeT0iMTE0IiByPSI0IiBmaWxsPSIjOUNBM0FGIiBzdHJva2U9ImJsYWNrIi8+CiAgICAgIDxjaXJjbGUgY3g9IjIwMCIgY3k9Ijk5IiByPSI0IiBmaWxsPSIjOUNBM0FGIiBzdHJva2U9ImJsYWNrIi8+CiAgICAgIDxjaXJjbGUgY3g9IjI0MCIgY3k9IjgxIiByPSI0IiBmaWxsPSIjOUNBM0FGIiBzdHJva2U9ImJsYWNrIi8+CiAgICAgIDxjaXJjbGUgY3g9IjI4MCIgY3k9IjYwIiByPSI0IiBmaWxsPSIjOUNBM0FGIiBzdHJva2U9ImJsYWNrIi8+CiAgICAgIDxjaXJjbGUgY3g9IjMyMCIgY3k9IjUxIiByPSI0IiBmaWxsPSIjOUNBM0FGIiBzdHJva2U9ImJsYWNrIi8+CiAgICA8L3N2Zz4=",
    options: [
      "y = 6x + 45.0",
      "y = 6x + 47.6",
      "y = 47.6x - 6",
      "y = 1/6x + 47.6"
    ],
    correctAnswer: 1,
    explanation: "Looking at the scatterplot, the line of best fit passes near $(1, 52)$ and $(6, 85)$. The slope is approximately $(85 - 52) / (6 - 1) = 33 / 5 = 6.6$. The closest slope in the options is 6. The y-intercept would be around $52 - 6(1) = 46$. The equation $y = 6x + 47.6$ is the most appropriate model.",
    category: "Problem Solving and Data Analysis",
    topics: ["Scatterplots", "Line of Best Fit"]
  },
  {
    id: "est1_2026_jan_10",
    question: "Based on the line of best fit from the previous question, what is the expected grade of a student who studied for 8 hours?",
    options: ["48.9", "52.1", "95.6", "97.6"],
    correctAnswer: 2,
    explanation: "Using the line of best fit $y = 6x + 47.6$, substitute $x = 8$: $y = 6(8) + 47.6 = 48 + 47.6 = 95.6$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Line of Best Fit", "Predictions"]
  }
  ,
  {
    id: "est1_2026_jan_17",
    question: "Question 17 text here...",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQwIDIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ibXgtYXV0byBoLTY0IHctYXV0byI+CiAgICAgIDxkZWZzPgogICAgICAgIDxwYXR0ZXJuIGlkPSJncmlkX3ExNyIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgIDxwYXRoIGQ9Ik0gMTUgMCBMIDAgMCAwIDE1IiBmaWxsPSJub25lIiBzdHJva2U9IiNlMGUwZTAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgIDwvcGF0dGVybj4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iMjQwIiBoZWlnaHQ9IjIxMCIgZmlsbD0idXJsKCNncmlkX3ExNykiIC8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iNDUiIHgyPSIyNDAiIHkyPSI0NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgICAgPGxpbmUgeDE9IjE4MCIgeTE9IjAiIHgyPSIxODAiIHkyPSIyMTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICAgIDxsaW5lIHgxPSIxNSIgeTE9IjAiIHgyPSIyMjUiIHkyPSIyMTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICAgIDx0ZXh0IHg9IjE3MCIgeT0iMTUiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtc3R5bGU9Iml0YWxpYyI+eTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjMwIiB5PSI0MCIgZm9udC1zaXplPSIxMiIgZm9udC1zdHlsZT0iaXRhbGljIj54PC90ZXh0PgogICAgICA8dGV4dCB4PSIxNzUiIHk9IjU4IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0iZW5kIj4wPC90ZXh0PgogICAgICA8dGV4dCB4PSIxNzUiIHk9IjM0IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0iZW5kIj4yPC90ZXh0PgogICAgICA8dGV4dCB4PSIxNzUiIHk9Ijc5IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0iZW5kIj4tMjwvdGV4dD4KICAgICAgPHRleHQgeD0iMTc1IiB5PSIxMDkiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJlbmQiPi00PC90ZXh0PgogICAgICA8dGV4dCB4PSIxNzUiIHk9IjEzOSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9ImVuZCI+LTY8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjE3NSIgeT0iMTY5IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0iZW5kIj4tODwvdGV4dD4KICAgICAgPHRleHQgeD0iMTc1IiB5PSIxOTkiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJlbmQiPi0xMDwvdGV4dD4KICAgICAgPHRleHQgeD0iMjEwIiB5PSI1OCIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjwvdGV4dD4KICAgICAgPHRleHQgeD0iMTUwIiB5PSI1OCIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+LTI8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjEyMCIgeT0iNTgiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPi00PC90ZXh0PgogICAgICA8dGV4dCB4PSI5MCIgeT0iNTgiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPi02PC90ZXh0PgogICAgICA8dGV4dCB4PSI2MCIgeT0iNTgiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPi04PC90ZXh0PgogICAgPC9zdmc+",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2026_jan_18",
    question: `Question 18 text here...

| Player | Goals scored in the World Cup |
|---|---|
| Kevin | 3 |
| Toni | 4 |
| Harry | 4 |
| Cristiano | 4 |
| Mohamed | 6 |
| Lionel | 6 |
| Kylian | 8 |`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Problem Solving and Data Analysis",
    topics: ["Data Tables"]
  },
  {
    id: "est1_2026_jan_21",
    question: "Question 21 text here...",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzQwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ibXgtYXV0byBoLTMyIHctYXV0byI+CiAgICAgIDxsaW5lIHgxPSIyMCIgeTE9IjMwIiB4Mj0iMzIwIiB5Mj0iMzAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICAgIDxnIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ij4KICAgICAgICA8bGluZSB4MT0iMjAiIHkxPSIyNSIgeDI9IjIwIiB5Mj0iMzUiLz4KICAgICAgICA8bGluZSB4MT0iOTUiIHkxPSIyNSIgeDI9Ijk1IiB5Mj0iMzUiLz4KICAgICAgICA8bGluZSB4MT0iMTcwIiB5MT0iMjUiIHgyPSIxNzAiIHkyPSIzNSIvPgogICAgICAgIDxsaW5lIHgxPSIyNDUiIHkxPSIyNSIgeDI9IjI0NSIgeTI9IjM1Ii8+CiAgICAgICAgPGxpbmUgeDE9IjMyMCIgeTE9IjI1IiB4Mj0iMzIwIiB5Mj0iMzUiLz4KICAgICAgPC9nPgogICAgICA8ZyBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiPgogICAgICAgIDxsaW5lIHgxPSIzNSIgeTE9IjI4IiB4Mj0iMzUiIHkyPSIzMiIvPgogICAgICAgIDxsaW5lIHgxPSI1MCIgeTE9IjI4IiB4Mj0iNTAiIHkyPSIzMiIvPgogICAgICAgIDxsaW5lIHgxPSI2NSIgeTE9IjI4IiB4Mj0iNjUiIHkyPSIzMiIvPgogICAgICAgIDxsaW5lIHgxPSI4MCIgeTE9IjI4IiB4Mj0iODAiIHkyPSIzMiIvPgogICAgICAgIDxsaW5lIHgxPSIxMTAiIHkxPSIyOCIgeDI9IjExMCIgeTI9IjMyIi8+CiAgICAgICAgPGxpbmUgeDE9IjEyNSIgeTE9IjI4IiB4Mj0iMTI1IiB5Mj0iMzIiLz4KICAgICAgICA8bGluZSB4MT0iMTQwIiB5MT0iMjgiIHgyPSIxNDAiIHkyPSIzMiIvPgogICAgICAgIDxsaW5lIHgxPSIxNTUiIHkxPSIyOCIgeDI9IjE1NSIgeTI9IjMyIi8+CiAgICAgICAgPGxpbmUgeDE9IjE4NSIgeTE9IjI4IiB4Mj0iMTg1IiB5Mj0iMzIiLz4KICAgICAgICA8bGluZSB4MT0iMjAwIiB5MT0iMjgiIHgyPSIyMDAiIHkyPSIzMiIvPgogICAgICAgIDxsaW5lIHgxPSIyMTUiIHkxPSIyOCIgeDI9IjIxNSIgeTI9IjMyIi8+CiAgICAgICAgPGxpbmUgeDE9IjIzMCIgeTE9IjI4IiB4Mj0iMjMwIiB5Mj0iMzIiLz4KICAgICAgICA8bGluZSB4MT0iMjYwIiB5MT0iMjgiIHgyPSIyNjAiIHkyPSIzMiIvPgogICAgICAgIDxsaW5lIHgxPSIyNzUiIHkxPSIyOCIgeDI9IjI3NSIgeTI9IjMyIi8+CiAgICAgICAgPGxpbmUgeDE9IjI5MCIgeTE9IjI4IiB4Mj0iMjkwIiB5Mj0iMzIiLz4KICAgICAgICA8bGluZSB4MT0iMzA1IiB5MT0iMjgiIHgyPSIzMDUiIHkyPSIzMiIvPgogICAgICA8L2c+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIyMCIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD4KICAgICAgPHRleHQgeD0iOTUiIHk9IjIwIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yNTwvdGV4dD4KICAgICAgPHRleHQgeD0iMTcwIiB5PSIyMCIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NTA8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjI0NSIgeT0iMjAiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjc1PC90ZXh0PgogICAgICA8dGV4dCB4PSIzMjAiIHk9IjIwIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMDA8L3RleHQ+CiAgICAgIDxsaW5lIHgxPSI2NSIgeTE9IjcwIiB4Mj0iODAiIHkyPSI3MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgICAgPGxpbmUgeDE9IjIwMCIgeTE9IjcwIiB4Mj0iMzA1IiB5Mj0iNzAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICAgIDxyZWN0IHg9IjgwIiB5PSI1NSIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgICAgPGxpbmUgeDE9IjExMCIgeTE9IjU1IiB4Mj0iMTEwIiB5Mj0iODUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjY1IiBjeT0iNzAiIHI9IjIiIGZpbGw9ImJsYWNrIi8+CiAgICAgIDxjaXJjbGUgY3g9IjgwIiBjeT0iNzAiIHI9IjIiIGZpbGw9ImJsYWNrIi8+CiAgICAgIDxjaXJjbGUgY3g9IjExMCIgY3k9IjcwIiByPSIyIiBmaWxsPSJibGFjayIvPgogICAgICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSI3MCIgcj0iMiIgZmlsbD0iYmxhY2siLz4KICAgICAgPGNpcmNsZSBjeD0iMzA1IiBjeT0iNzAiIHI9IjIiIGZpbGw9ImJsYWNrIi8+CiAgICA8L3N2Zz4=",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Problem Solving and Data Analysis",
    topics: ["Box Plots"]
  },
  {
    id: "est1_2026_jan_24",
    question: `Question 24 text here...

| Class Section | Number of Students |
|---|---|
| 10-A | 28 |
| 10-B | 25 |
| 11-A | 30 |
| 11-B | 24 |`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Problem Solving and Data Analysis",
    topics: ["Data Tables"]
  },
  {
    id: "est1_2026_jan_25",
    question: "Question 25 text here...",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQwIDMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ibXgtYXV0byBoLTY0IHctYXV0byI+CiAgICAgIDxkZWZzPgogICAgICAgIDxwYXR0ZXJuIGlkPSJncmlkX3EyNSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgIDxwYXRoIGQ9Ik0gMTUgMCBMIDAgMCAwIDE1IiBmaWxsPSJub25lIiBzdHJva2U9IiNlMGUwZTAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgIDwvcGF0dGVybj4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iMjQwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNncmlkX3EyNSkiIC8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMTUwIiB4Mj0iMjQwIiB5Mj0iMTUwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgICA8bGluZSB4MT0iOTAiIHkxPSIwIiB4Mj0iOTAiIHkyPSIzMDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICAgIDx0ZXh0IHg9IjgwIiB5PSIxNSIgZm9udC1zaXplPSIxMiIgZm9udC1zdHlsZT0iaXRhbGljIj55PC90ZXh0PgogICAgICA8dGV4dCB4PSIyMzAiIHk9IjE2NSIgZm9udC1zaXplPSIxMiIgZm9udC1zdHlsZT0iaXRhbGljIj54PC90ZXh0PgogICAgICA8dGV4dCB4PSI0NSIgeT0iNjAiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtc3R5bGU9Iml0YWxpYyI+ZjwvdGV4dD4KICAgICAgPHRleHQgeD0iODUiIHk9IjE2NSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9ImVuZCI+MDwvdGV4dD4KICAgICAgPHRleHQgeD0iODUiIHk9IjEyNSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9ImVuZCI+MTwvdGV4dD4KICAgICAgPHRleHQgeD0iODUiIHk9Ijk1IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0iZW5kIj4yPC90ZXh0PgogICAgICA8dGV4dCB4PSI4NSIgeT0iNjUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJlbmQiPjM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9Ijg1IiB5PSIzNSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9ImVuZCI+NDwvdGV4dD4KICAgICAgPHRleHQgeD0iODUiIHk9IjE4NSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9ImVuZCI+LTE8L3RleHQ+CiAgICAgIDx0ZXh0IHg9Ijg1IiB5PSIyMTUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJlbmQiPi0yPC90ZXh0PgogICAgICA8dGV4dCB4PSIxMjAiIHk9IjE2NSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTwvdGV4dD4KICAgICAgPHRleHQgeD0iMTUwIiB5PSIxNjUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjI8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjE4MCIgeT0iMTY1IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zPC90ZXh0PgogICAgICA8dGV4dCB4PSI2MCIgeT0iMTY1IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4tMTwvdGV4dD4KICAgICAgPHRleHQgeD0iMzAiIHk9IjE2NSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+LTI8L3RleHQ+CiAgICAgIDxwYXRoIGQ9Ik0gMTUuMCAyOTQuNCBMIDE4LjAgMjYwLjIgTCAyMS4wIDIyOC43IEwgMjQuMCAxOTkuOSBMIDI3LjAgMTczLjcgTCAzMC4wIDE1MC4wIEwgMzMuMCAxMjguNyBMIDM2LjAgMTA5LjcgTCAzOS4wIDkyLjkgTCA0Mi4wIDc4LjIgTCA0NS4wIDY1LjYgTCA0OC4wIDU1LjAgTCA1MS4wIDQ2LjIgTCA1NC4wIDM5LjEgTCA1Ny4wIDMzLjggTCA2MC4wIDMwLjAgTCA2My4wIDI3LjcgTCA2Ni4wIDI2LjkgTCA2OS4wIDI3LjMgTCA3Mi4wIDI5LjAgTCA3NS4wIDMxLjkgTCA3OC4wIDM1LjggTCA4MS4wIDQwLjYgTCA4NC4wIDQ2LjMgTCA4Ny4wIDUyLjggTCA5MC4wIDYwLjAgTCA5My4wIDY3LjggTCA5Ni4wIDc2LjEgTCA5OS4wIDg0LjggTCAxMDIuMCA5My44IEwgMTA1LjAgMTAzLjEgTCAxMDguMCAxMTIuNiBMIDExMS4wIDEyMi4xIEwgMTE0LjAgMTMxLjUgTCAxMTcuMCAxNDAuOSBMIDEyMC4wIDE1MC4wIEwgMTIzLjAgMTU4LjggTCAxMjYuMCAxNjcuMyBMIDEyOS4wIDE3NS4yIEwgMTMyLjAgMTgyLjYgTCAxMzUuMCAxODkuNCBMIDEzOC4wIDE5NS40IEwgMTQxLjAgMjAwLjUgTCAxNDQuMCAyMDQuNyBMIDE0Ny4wIDIwNy45IEwgMTUwLjAgMjEwLjAgTCAxNTMuMCAyMTAuOSBMIDE1Ni4wIDIxMC41IEwgMTU5LjAgMjA4LjcgTCAxNjIuMCAyMDUuNCBMIDE2NS4wIDIwMC42IEwgMTY4LjAgMTk0LjIgTCAxNzEuMCAxODYuMCBMIDE3NC4wIDE3NS45IEwgMTc3LjAgMTY0LjAgTCAxODAuMCAxNTAuMCBMIDE4My4wIDEzMy45IEwgMTg2LjAgMTE1LjcgTCAxODkuMCA5NS4xIEwgMTkyLjAgNzIuMiBMIDE5NS4wIDQ2LjkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRCNTU2MyIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8L3N2Zz4=",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Passport to Advanced Math",
    topics: ["Polynomial Functions"]
  },
  {
    id: "est1_2026_jan_28",
    question: "Question 28 text here...",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTUwIDIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ibXgtYXV0byBoLTY0IHctYXV0byI+CiAgICAgIDxkZWZzPgogICAgICAgIDxwYXR0ZXJuIGlkPSJncmlkX3EyOCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgIDxwYXRoIGQ9Ik0gMTUgMCBMIDAgMCAwIDE1IiBmaWxsPSJub25lIiBzdHJva2U9IiNlMGUwZTAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgIDwvcGF0dGVybj4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjIxMCIgZmlsbD0idXJsKCNncmlkX3EyOCkiIC8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iNjAiIHgyPSIxNTAiIHkyPSI2MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgICAgPGxpbmUgeDE9IjYwIiB5MT0iMCIgeDI9IjYwIiB5Mj0iMjEwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgICA8dGV4dCB4PSI1MCIgeT0iMTUiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtc3R5bGU9Iml0YWxpYyI+eTwvdGV4dD4KICAgICAgPHRleHQgeD0iMTQwIiB5PSI3NSIgZm9udC1zaXplPSIxMiIgZm9udC1zdHlsZT0iaXRhbGljIj54PC90ZXh0PgogICAgICA8dGV4dCB4PSI1NSIgeT0iNzUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJlbmQiPjA8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjU1IiB5PSIxMDUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJlbmQiPi0xPC90ZXh0PgogICAgICA8dGV4dCB4PSI1NSIgeT0iMTM1IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0iZW5kIj4tMjwvdGV4dD4KICAgICAgPHRleHQgeD0iNTUiIHk9IjE2NSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9ImVuZCI+LTM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjU1IiB5PSIxOTUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJlbmQiPi00PC90ZXh0PgogICAgICA8dGV4dCB4PSIzMCIgeT0iNzUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPi0xPC90ZXh0PgogICAgICA8dGV4dCB4PSI5MCIgeT0iNzUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE8L3RleHQ+CiAgICAgIDxsaW5lIHgxPSI1Mi41IiB5MT0iMjEwIiB4Mj0iMTA1IiB5Mj0iMCIgc3Ryb2tlPSIjNEI1NTYzIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPGNpcmNsZSBjeD0iNjAiIGN5PSIxODAiIHI9IjMiIGZpbGw9ImdyYXkiIHN0cm9rZT0iYmxhY2siLz4KICAgICAgPGNpcmNsZSBjeD0iOTAiIGN5PSI2MCIgcj0iMyIgZmlsbD0iZ3JheSIgc3Ryb2tlPSJibGFjayIvPgogICAgICA8dGV4dCB4PSI3MCIgeT0iMTg1IiBmb250LXNpemU9IjEyIiBmb250LXN0eWxlPSJpdGFsaWMiPkE8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjEwMCIgeT0iNTUiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtc3R5bGU9Iml0YWxpYyI+QjwvdGV4dD4KICAgIDwvc3ZnPg==",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2026_jan_29",
    question: "Question 29 text here...",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQwIDE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ibXgtYXV0byBoLTQ4IHctYXV0byI+CiAgICAgIDxwb2x5Z29uIHBvaW50cz0iMjAsMTUwIDIwMCwxNTAgMjAwLDMwIiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgICA8bGluZSB4MT0iMTQwIiB5MT0iMTUwIiB4Mj0iMTQwIiB5Mj0iNzAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICAgIDxyZWN0IHg9IjEzMCIgeT0iMTQwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9ImdyYXkiIHN0cm9rZT0iYmxhY2siLz4KICAgICAgPHJlY3QgeD0iMTkwIiB5PSIxNDAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iZ3JheSIgc3Ryb2tlPSJibGFjayIvPgogICAgICA8Y2lyY2xlIGN4PSIyMCIgY3k9IjE1MCIgcj0iMyIgZmlsbD0iZ3JheSIgc3Ryb2tlPSJibGFjayIvPgogICAgICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSIxNTAiIHI9IjMiIGZpbGw9ImdyYXkiIHN0cm9rZT0iYmxhY2siLz4KICAgICAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSIzIiBmaWxsPSJncmF5IiBzdHJva2U9ImJsYWNrIi8+CiAgICAgIDxjaXJjbGUgY3g9IjE0MCIgY3k9IjcwIiByPSIzIiBmaWxsPSJncmF5IiBzdHJva2U9ImJsYWNrIi8+CiAgICAgIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjMwIiByPSIzIiBmaWxsPSJncmF5IiBzdHJva2U9ImJsYWNrIi8+CiAgICAgIDx0ZXh0IHg9IjE1IiB5PSIxNjUiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtc3R5bGU9Iml0YWxpYyI+QTwvdGV4dD4KICAgICAgPHRleHQgeD0iMTM1IiB5PSIxNjUiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtc3R5bGU9Iml0YWxpYyI+QjwvdGV4dD4KICAgICAgPHRleHQgeD0iMTk1IiB5PSIxNjUiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtc3R5bGU9Iml0YWxpYyI+TTwvdGV4dD4KICAgICAgPHRleHQgeD0iMTM1IiB5PSI2MCIgZm9udC1zaXplPSIxNCIgZm9udC1zdHlsZT0iaXRhbGljIj5DPC90ZXh0PgogICAgICA8dGV4dCB4PSIxOTUiIHk9IjIwIiBmb250LXNpemU9IjE0IiBmb250LXN0eWxlPSJpdGFsaWMiPk48L3RleHQ+CiAgICA8L3N2Zz4=",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Additional Topics in Math",
    topics: ["Similar Triangles"]
  },
  {
    id: "est1_2026_jan_38",
    question: "Question 38 text here...",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQwIDE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ibXgtYXV0byBoLTQ4IHctYXV0byI+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMTAwIiB4Mj0iMjQwIiB5Mj0iMTAwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgICA8bGluZSB4MT0iNjAiIHkxPSIwIiB4Mj0iNjAiIHkyPSIxNjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICAgIDx0ZXh0IHg9IjUwIiB5PSIxNSIgZm9udC1zaXplPSIxMiIgZm9udC1zdHlsZT0iaXRhbGljIj55PC90ZXh0PgogICAgICA8dGV4dCB4PSIyMzAiIHk9IjExNSIgZm9udC1zaXplPSIxMiIgZm9udC1zdHlsZT0iaXRhbGljIj54PC90ZXh0PgogICAgICA8dGV4dCB4PSI1NSIgeT0iMTE1IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0iZW5kIj4wPC90ZXh0PgogICAgICA8dGV4dCB4PSI1NSIgeT0iNjUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJlbmQiPjI8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjU1IiB5PSIyNSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9ImVuZCI+NDwvdGV4dD4KICAgICAgPHRleHQgeD0iNTUiIHk9IjE0NSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9ImVuZCI+LTI8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIxMTUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPi0yPC90ZXh0PgogICAgICA8dGV4dCB4PSIxMDAiIHk9IjExNSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjwvdGV4dD4KICAgICAgPHRleHQgeD0iMTQwIiB5PSIxMTUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQ8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjE4MCIgeT0iMTE1IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj42PC90ZXh0PgogICAgICA8dGV4dCB4PSIyMjAiIHk9IjExNSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ODwvdGV4dD4KICAgICAgPGxpbmUgeDE9IjIwIiB5MT0iMTQwIiB4Mj0iMTYwIiB5Mj0iMCIgc3Ryb2tlPSIjNEI1NTYzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjYsNCIvPgogICAgICA8bGluZSB4MT0iMCIgeTE9IjcwIiB4Mj0iMjQwIiB5Mj0iMTkwIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNiw0Ii8+CiAgICAgIDxyZWN0IHg9IjE0MCIgeT0iODAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNSIgZmlsbD0iI0QxRDVEQiIvPgogICAgICA8dGV4dCB4PSIxNTAiIHk9IjkyIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JPC90ZXh0PgogICAgICA8cmVjdCB4PSI4MCIgeT0iNDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNSIgZmlsbD0iI0QxRDVEQiIvPgogICAgICA8dGV4dCB4PSI5MCIgeT0iNTIiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklJPC90ZXh0PgogICAgICA8cmVjdCB4PSIzMCIgeT0iODAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNSIgZmlsbD0iI0QxRDVEQiIvPgogICAgICA8dGV4dCB4PSI0MCIgeT0iOTIiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklJSTwvdGV4dD4KICAgICAgPHJlY3QgeD0iOTAiIHk9IjE0MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE1IiBmaWxsPSIjRDFENURCIi8+CiAgICAgIDx0ZXh0IHg9IjEwMCIgeT0iMTUyIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JVjwvdGV4dD4KICAgIDwvc3ZnPg==",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Heart of Algebra",
    topics: ["Linear Inequalities"]
  },
  {
    id: "est1_2026_jan_40",
    question: "Question 40 text here...",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQwIDIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ibXgtYXV0byBoLTY0IHctYXV0byI+CiAgICAgIDxkZWZzPgogICAgICAgIDxwYXR0ZXJuIGlkPSJncmlkX3E0MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgIDxwYXRoIGQ9Ik0gMTUgMCBMIDAgMCAwIDE1IiBmaWxsPSJub25lIiBzdHJva2U9IiNlMGUwZTAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgIDwvcGF0dGVybj4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iMjQwIiBoZWlnaHQ9IjIxMCIgZmlsbD0idXJsKCNncmlkX3E0MCkiIC8+CiAgICAgIDxsaW5lIHgxPSIwIiB5MT0iNjAiIHgyPSIyNDAiIHkyPSI2MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgICAgPGxpbmUgeDE9IjYwIiB5MT0iMCIgeDI9IjYwIiB5Mj0iMjEwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgICA8dGV4dCB4PSI1MCIgeT0iMTUiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtc3R5bGU9Iml0YWxpYyI+eTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjMwIiB5PSI3NSIgZm9udC1zaXplPSIxMiIgZm9udC1zdHlsZT0iaXRhbGljIj54PC90ZXh0PgogICAgICA8dGV4dCB4PSI1NSIgeT0iNzUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJlbmQiPjA8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjU1IiB5PSIxMDUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJlbmQiPi0xPC90ZXh0PgogICAgICA8dGV4dCB4PSI1NSIgeT0iMTM1IiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0iZW5kIj4tMjwvdGV4dD4KICAgICAgPHRleHQgeD0iNTUiIHk9IjE2NSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9ImVuZCI+LTM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjU1IiB5PSIxOTUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJlbmQiPi00PC90ZXh0PgogICAgICA8dGV4dCB4PSI5MCIgeT0iNzUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjEyMCIgeT0iNzUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjI8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjE1MCIgeT0iNzUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjE4MCIgeT0iNzUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQ8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjIxMCIgeT0iNzUiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjU8L3RleHQ+CiAgICAgIDxwYXRoIGQ9Ik0gNzUuMCAtNy41IEwgNzguMCA3LjIgTCA4MS4wIDIxLjMgTCA4NC4wIDM0LjggTCA4Ny4wIDQ3LjcgTCA5MC4wIDYwLjAgTCA5My4wIDcxLjcgTCA5Ni4wIDgyLjggTCA5OS4wIDkzLjMgTCAxMDIuMCAxMDMuMiBMIDEwNS4wIDExMi41IEwgMTA4LjAgMTIxLjIgTCAxMTEuMCAxMjkuMyBMIDExNC4wIDEzNi44IEwgMTE3LjAgMTQzLjcgTCAxMjAuMCAxNTAuMCBMIDEyMy4wIDE1NS43IEwgMTI2LjAgMTYwLjggTCAxMjkuMCAxNjUuMyBMIDEzMi4wIDE2OS4yIEwgMTM1LjAgMTcyLjUgTCAxMzguMCAxNzUuMiBMIDE0MS4wIDE3Ny4zIEwgMTQ0LjAgMTc4LjggTCAxNDcuMCAxNzkuNyBMIDE1MC4wIDE4MC4wIEwgMTUzLjAgMTc5LjcgTCAxNTYuMCAxNzguOCBMIDE1OS4wIDE3Ny4zIEwgMTYyLjAgMTc1LjIgTCAxNjUuMCAxNzIuNSBMIDE2OC4wIDE2OS4yIEwgMTcxLjAgMTY1LjMgTCAxNzQuMCAxNjAuOCBMIDE3Ny4wIDE1NS43IEwgMTgwLjAgMTUwLjAgTCAxODMuMCAxNDMuNyBMIDE4Ni4wIDEzNi44IEwgMTg5LjAgMTI5LjMgTCAxOTIuMCAxMjEuMiBMIDE5NS4wIDExMi41IEwgMTk4LjAgMTAzLjIgTCAyMDEuMCA5My4zIEwgMjA0LjAgODIuOCBMIDIwNy4wIDcxLjcgTCAyMTAuMCA2MC4wIEwgMjEzLjAgNDcuNyBMIDIxNi4wIDM0LjggTCAyMTkuMCAyMS4zIEwgMjIyLjAgNy4yIEwgMjI1LjAgLTcuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNEI1NTYzIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDwvc3ZnPg==",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Passport to Advanced Math",
    topics: ["Quadratic Functions"]
  },
  {
    id: "est1_2026_jan_41",
    question: "Question 41 text here...",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Additional Topics in Math",
    topics: ["Geometry"]
  }
,
  {
    id: "est1_2026_jan_42",
    question: "If $f(x) = 3x - 7$ and $g(x) = -4x + 1$, find the value of $f(g(1))$.",
    options: ["13", "1", "10", "-16"],
    correctAnswer: 3,
    explanation: "First, find $g(1)$: $g(1) = -4(1) + 1 = -3$. Then, substitute this into $f(x)$: $f(-3) = 3(-3) - 7 = -9 - 7 = -16$.",
    category: "Passport to Advanced Math",
    topics: ["Function Composition"]
  },
  {
    id: "est1_2026_jan_43",
    question: "Find the coordinates of the vertex of $y = x^2 - 10x + 1$.",
    options: ["(1, 2)", "(5, -24)", "(-5, 24)", "(24, 5)"],
    correctAnswer: 1,
    explanation: "The x-coordinate of the vertex is given by $x = -b / (2a) = -(-10) / (2(1)) = 5$. Substitute $x = 5$ back into the equation to find the y-coordinate: $y = (5)^2 - 10(5) + 1 = 25 - 50 + 1 = -24$. The vertex is $(5, -24)$.",
    category: "Passport to Advanced Math",
    topics: ["Quadratic Functions"]
  },
  {
    id: "est1_2026_jan_44",
    question: `$\frac{2x - 7}{5} = \frac{4x^2 + 7}{10x}$ \n\nWhat is the value of $x$ in the equation above?`,
    options: ["1.0", "-0.5", "-1.0", "-2.0"],
    correctAnswer: 1,
    explanation: "Cross-multiply: $10x(2x - 7) = 5(4x^2 + 7)$. This gives $20x^2 - 70x = 20x^2 + 35$. Subtract $20x^2$ from both sides: $-70x = 35$. Divide by $-70$: $x = -0.5$.",
    category: "Heart of Algebra",
    topics: ["Rational Equations"]
  },
  {
    id: "est1_2026_jan_45",
    question: `$\sqrt{13 + x} = x + 1$ \n\nWhat is the value of $x$?`,
    options: ["0", "-7", "-1", "3"],
    correctAnswer: 3,
    explanation: "Square both sides: $13 + x = (x + 1)^2 = x^2 + 2x + 1$. Rearrange into a quadratic equation: $x^2 + x - 12 = 0$. Factor: $(x + 4)(x - 3) = 0$. The possible solutions are $x = -4$ and $x = 3$. Check for extraneous solutions: If $x = -4$, $\sqrt{13 - 4} = -4 + 1 \Rightarrow \sqrt{9} = -3$, which is false since the principal square root is positive. If $x = 3$, $\sqrt{13 + 3} = 3 + 1 \Rightarrow \sqrt{16} = 4$, which is true. Thus, $x = 3$.",
    category: "Passport to Advanced Math",
    topics: ["Radical Equations"]
  },
  {
    id: "est1_2026_jan_46",
    question: "If $4^{2x - 5} = 16^{3x}$, find the value of $8x - 1$.",
    options: ["1", "-10", "-11", "-5/4"],
    correctAnswer: 2,
    explanation: "Express both sides with the same base: $4^{2x - 5} = (4^2)^{3x} = 4^{6x}$. Equate the exponents: $2x - 5 = 6x$. Solve for $x$: $-5 = 4x \Rightarrow x = -5/4$. We need to find $8x - 1$: $8(-5/4) - 1 = -10 - 1 = -11$.",
    category: "Passport to Advanced Math",
    topics: ["Exponential Equations"]
  },
  {
    id: "est1_2026_jan_47",
    question: "What is the value of $x$ if $25^{\frac{3}{x}} = 125^{\frac{5}{x} - 4}$?",
    options: ["0.50", "0.75", "1.25", "2.50"],
    correctAnswer: 1,
    explanation: "Express both sides with base 5: $(5^2)^{\frac{3}{x}} = (5^3)^{\frac{5}{x} - 4}$. This simplifies to $5^{\frac{6}{x}} = 5^{\frac{15}{x} - 12}$. Equate the exponents: $\frac{6}{x} = \frac{15}{x} - 12$. Multiply by $x$: $6 = 15 - 12x$. Solve for $x$: $12x = 9 \Rightarrow x = 0.75$.",
    category: "Passport to Advanced Math",
    topics: ["Exponential Equations"]
  },
  {
    id: "est1_2026_jan_48",
    question: "What is the exponent of $n$ in the simplified form of the expression below?\n\n$\\frac{[(2m^{10}n^{-4})^2(3m^{-5}n^2)^3]}{6m^5n^{-2}}$",
    options: ["-1", "0", "1", "2"],
    correctAnswer: 1,
    explanation: "Simplify the numerator: $(2m^{10}n^{-4})^2 = 4m^{20}n^{-8}$ and $(3m^{-5}n^2)^3 = 27m^{-15}n^6$. Multiply them: $108m^5n^{-2}$. Divide by the denominator: $\\frac{108m^5n^{-2}}{6m^5n^{-2}} = 18$. The expression simplifies to a constant, so the exponent of $n$ is 0.",
    category: "Passport to Advanced Math",
    topics: ["Exponents"]
  },
  {
    id: "est1_2026_jan_49",
    question: "What is the value of $x$ if $4|2x + 1| = 10$ and $x < 0$?",
    options: ["1.75", "0.75", "-1.75", "-2.0"],
    correctAnswer: 2,
    explanation: "Divide by 4: $|2x + 1| = 2.5$. This gives two equations: $2x + 1 = 2.5$ or $2x + 1 = -2.5$. Solving the first: $2x = 1.5 \\Rightarrow x = 0.75$. Solving the second: $2x = -3.5 \\Rightarrow x = -1.75$. Since $x < 0$, the valid solution is $x = -1.75$.",
    category: "Heart of Algebra",
    topics: ["Absolute Value Equations"]
  },
  {
    id: "est1_2026_jan_50",
    question: "What is the value of $x$ if $\\frac{3}{x - 3} = \\sqrt{3}$?",
    options: ["$\\sqrt{3}$", "3", "$3 + \\sqrt{3}$", "$\\sqrt{6}$"],
    correctAnswer: 2,
    explanation: "Multiply both sides by $x - 3$: $3 = \\sqrt{3}(x - 3)$. Divide by $\\sqrt{3}$: $\\frac{3}{\\sqrt{3}} = x - 3$. Simplify the left side: $\\sqrt{3} = x - 3$. Add 3 to both sides: $x = 3 + \\sqrt{3}$.",
    category: "Passport to Advanced Math",
    topics: ["Radical Equations"]
  },
  {
    id: "est1_2026_jan_51",
    question: "Which of the following expressions is equivalent to $\\frac{x^2 + 2x + 4}{x + 5}$?",
    options: [
      "$x - 3 - \\frac{18}{x + 5}$",
      "$x - 3 - \\frac{19}{x + 5}$",
      "$x - 3 + \\frac{19}{x + 5}$",
      "$x + 3 + \\frac{19}{x + 5}$"
    ],
    correctAnswer: 2,
    explanation: "Perform polynomial long division or synthetic division. Divide $x^2 + 2x + 4$ by $x + 5$. Using synthetic division with root $-5$: \n-5 | 1   2   4\n   |    -5  15\n   -------------\n     1  -3  19\nThe quotient is $x - 3$ and the remainder is 19. Therefore, the expression is equivalent to $x - 3 + \\frac{19}{x + 5}$.",
    category: "Passport to Advanced Math",
    topics: ["Polynomial Division"]
  },
  {
    id: "est1_2026_jan_52",
    question: "A line passing through a point $(-1, 8)$ and parallel to the x-axis. What is this equation?",
    options: ["$x = -y$", "$y = 8x$", "$x = -1$", "$y = 8$"],
    correctAnswer: 3,
    explanation: "A line parallel to the x-axis is a horizontal line. Horizontal lines have equations of the form $y = c$, where $c$ is the y-coordinate of any point on the line. Since the line passes through $(-1, 8)$, its equation is $y = 8$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2026_jan_53",
    question: "Use inverse operations to write the inverse of $f(x) = \\frac{x}{4} - 5$.",
    options: [
      "$f^{-1}(x) = -5x - 4$",
      "$f^{-1}(x) = 4x + 5$",
      "$f^{-1}(x) = \\frac{x}{4} + 5$",
      "$f^{-1}(x) = 4(x + 5)$"
    ],
    correctAnswer: 3,
    explanation: "Let $y = \\frac{x}{4} - 5$. Swap $x$ and $y$: $x = \\frac{y}{4} - 5$. Solve for $y$: $x + 5 = \\frac{y}{4} \\Rightarrow y = 4(x + 5)$. Therefore, $f^{-1}(x) = 4(x + 5)$.",
    category: "Passport to Advanced Math",
    topics: ["Inverse Functions"]
  },
  {
    id: "est1_2026_jan_54",
    question: "The ratio of angles of a quadrilateral is 3:5:3:7. Find the value of the largest angle.",
    options: ["140", "120", "100", "150"],
    correctAnswer: 0,
    explanation: "The sum of the interior angles of a quadrilateral is $360^\\circ$. Let the angles be $3x$, $5x$, $3x$, and $7x$. Their sum is $3x + 5x + 3x + 7x = 18x$. Set this equal to 360: $18x = 360 \\Rightarrow x = 20$. The largest angle corresponds to the largest ratio part, which is 7. The largest angle is $7x = 7(20) = 140^\\circ$.",
    category: "Additional Topics in Math",
    topics: ["Geometry", "Angles"]
  },
  {
    id: "est1_2026_jan_55",
    question: "The domain of definition of the function $h(x) = \\frac{6}{\\sqrt{-2x + 7}}$ is:",
    options: [
      "$(-\\infty, 3.5)$",
      "$(0, +\\infty)$",
      "$[3.5, +\\infty)$",
      "$(3.5, +\\infty)$"
    ],
    correctAnswer: 0,
    explanation: "For the function to be defined, the expression inside the square root must be strictly greater than zero (since it's in the denominator). So, $-2x + 7 > 0$. Solve for $x$: $-2x > -7 \\Rightarrow x < 3.5$. In interval notation, this is $(-\\infty, 3.5)$.",
    category: "Passport to Advanced Math",
    topics: ["Domain of Functions"]
  },
  {
    id: "est1_2026_jan_56",
    question: "If $8x^3 - 2x^2 + 2x$ can be re-written in the form of $ax(dx^2 + bx - c)$, find the value of $a - b + c + d$.",
    options: ["-5", "-1", "4", "6"],
    correctAnswer: 3,
    explanation: "Factor out the greatest common factor, which is $2x$: $8x^3 - 2x^2 + 2x = 2x(4x^2 - x + 1)$. Comparing this to $ax(dx^2 + bx - c)$, we have $a = 2$, $d = 4$, $b = -1$, and $-c = 1 \\Rightarrow c = -1$. We need to find $a - b + c + d = 2 - (-1) + (-1) + 4 = 2 + 1 - 1 + 4 = 6$.",
    category: "Passport to Advanced Math",
    topics: ["Polynomials"]
  },

  {
    id: 'est1_2026_jan2_q36',
    question: `A customer bought 2 kilograms of apples and 5 kilograms of oranges and paid $17. Another one paid $20 for 4 kilograms of apples and 3 kilograms of oranges. What is the price of apples per kilogram?`,
    options: [
      `$2.00`,
      `$2.50`,
      `$3.00`,
      `$3.50`,
    ],
    correctAnswer: 3,
    explanation: 'Explanation for Question 36',
    category: 'Math',
    topics: ['EST1']
  },
  {
    id: 'est1_2026_jan2_q37',
    question: `Given the two functions represented by the sets $f = \\{(7, 4), (2, 3), (0, 1), (11, 3)\\}$ and $g = \\{(3, 0), (7, 2), (4, 0), (2, 11)\\}$.\n\nWhich of the following statements is/are true?\nI. $f(g(7)) > g(f(7))$\nII. $f(g(3)) < g(f(7))$\nIII. $g(f(7)) = g(f(2))$`,
    options: [
      `I only`,
      `II only`,
      `I and III only`,
      `All statements are true`,
    ],
    correctAnswer: 2,
    explanation: 'Explanation for Question 37',
    category: 'Math',
    topics: ['EST1']
  },
  {
    id: 'est1_2026_jan2_q38',
    question: `In a right triangle $ABC$ (right angled at $B$), an altitude $CM$ is drawn to the hypotenuse $AB$ (wait, if it's right angled at B, altitude from C to AB is just CB. The figure shows $ABC$ is a right triangle at $B$, and $AMN$ is a right triangle at $M$, with $A, B, M$ collinear and $C$ on $AN$).\nGiven $AB = 2\\sqrt{3} + \\sqrt{5}$, $BC = \\sqrt{5} - \\sqrt{3}$, $AM = 10$, and $MN = \\frac{a + b\\sqrt{15}}{c}$. Which of the following is $a + b \\times c$, if $a, b$, and $c$ are integers?`,
    options: [
      `-320`,
      `-100`,
      `100`,
      `210`,
    ],
    correctAnswer: 2,
    explanation: 'Explanation for Question 38',
    category: 'Math',
    topics: ['EST1']
  },
  {
    id: 'est1_2026_jan2_q39',
    question: `\\frac{16^{x+1} \\times 8^{2x}}{4^{3x-2}} = 2^{5x+6}\n\nThe solution of the equation above is $x = y^2 - 2$. Which of the following can be $y$?`,
    options: [
      `2`,
      `0`,
      `-1`,
      `-4`,
    ],
    correctAnswer: 0,
    explanation: 'Explanation for Question 39',
    category: 'Math',
    topics: ['EST1']
  },
  {
    id: 'est1_2026_jan2_q40',
    question: `Given the system of equations \\begin{cases} 2y + x - 2 > 0 \\\\ x - y - 2 < 0 \\end{cases}, which of the regions shown is a solution of the given system?`,
    options: [
      `Region I`,
      `Region II`,
      `Region III`,
      `Region IV`,
    ],
    correctAnswer: 1,
    explanation: 'Explanation for Question 40',
    category: 'Math',
    topics: ['EST1']
  },
  {
    id: 'est1_2026_jan2_q41',
    question: `Which of the functions is represented by a parabola opening upward with vertex at $(3, -4)$ and x-intercepts at $1$ and $5$?`,
    options: [
      `f(x) = -x^2 + 6x - 5`,
      `f(x) = x^2 - 6x + 5`,
      `f(x) = 2x^2 + 6x - 3`,
      `f(x) = (x + 3)^3 - 4`,
    ],
    correctAnswer: 1,
    explanation: 'Explanation for Question 41',
    category: 'Math',
    topics: ['EST1']
  },
  {
    id: 'est1_2026_jan2_q42',
    question: `The simplified form of the expression $2 \\times \\frac{3+4i}{1-i}$ is:`,
    options: [
      `-7 + i`,
      `-1 + 7i`,
      `1 + 7i`,
      `7 - i`,
    ],
    correctAnswer: 1,
    explanation: 'Explanation for Question 42',
    category: 'Math',
    topics: ['EST1']
  },
  {
    id: 'est1_2026_jan2_q43',
    question: `If $f(x) = |2x - 5| + |x + 3|$, then a point that does not belong to the graph of $f$ is:`,
    options: [
      `(0, 8)`,
      `(8, 22)`,
      `(\\frac{5}{2}, \\frac{11}{2})`,
      `(3, 6)`,
    ],
    correctAnswer: 3,
    explanation: 'Explanation for Question 43',
    category: 'Math',
    topics: ['EST1']
  },
  {
    id: 'est1_2026_jan2_q44',
    question: `In a triangle, the angles measure $(4x - 20)^\\circ$, $(2x + 15)^\\circ$, and $(x + 45)^\\circ$. What is the value of the largest angle?`,
    options: [
      `65^\\circ`,
      `60^\\circ`,
      `55^\\circ`,
      `20^\\circ`,
    ],
    correctAnswer: 0,
    explanation: 'Explanation for Question 44',
    category: 'Math',
    topics: ['EST1']
  },
  {
    id: 'est1_2026_jan2_q45',
    question: `Consider the functions $f(x) = x^2 + 4x$ and $g(x) = x + 4$. They intersect at points $A$ and $B$. What is the length of \\overline{AB}?`,
    options: [
      `6\\sqrt{3}`,
      `8`,
      `5\\sqrt{2}`,
      `\\sqrt{34}`,
    ],
    correctAnswer: 2,
    explanation: 'Explanation for Question 45',
    category: 'Math',
    topics: ['EST1']
  },
  {
    id: 'est1_2026_jan2_q46',
    question: `Physicists use the formula $h = \\frac{v^2 \\sin^2(\\theta)}{2g}$ to calculate the maximum height $h$ reached by a projectile, where $v$ is the initial velocity, $\\theta$ is the angle of launch, and $g$ is the acceleration due to gravity.\n\nThe velocity of the projectile as a function of the angle of launch and the height reached is:`,
    options: [
      `v = \\frac{\\sqrt{2gh}}{\\sin^2(\\theta)}`,
      `v = \\frac{\\sqrt{gh}}{2\\sin(\\theta)}`,
      `v = 2\\sqrt{\\frac{gh}{\\sin(\\theta)}}`,
      `v = \\sqrt{\\frac{2gh}{\\sin^2(\\theta)}}`,
    ],
    correctAnswer: 3,
    explanation: 'Explanation for Question 46',
    category: 'Math',
    topics: ['EST1']
  },
  {
    id: 'est1_2026_jan2_q47',
    question: `A ball is launched with an initial velocity of $30 \\text{ m/s}$ at an angle of $60^\\circ$. What is the maximum height the ball reaches? (Use $g \\approx 9.8 \\text{ m/s}^2$)`,
    options: [
      `28.5 m`,
      `34.4 m`,
      `39.7 m`,
      `45.2 m`,
    ],
    correctAnswer: 1,
    explanation: 'Explanation for Question 47',
    category: 'Math',
    topics: ['EST1']
  },
  {
    id: 'est1_2026_jan2_q48',
    question: `The function $f$ is defined by $f(x) = x - 1$. $f^{-1}(0) =$`,
    options: [
      `-1`,
      `0`,
      `\\frac{1}{2}`,
      `1`,
    ],
    correctAnswer: 3,
    explanation: 'Explanation for Question 48',
    category: 'Math',
    topics: ['EST1']
  },
  {
    id: 'est1_2026_jan2_q49',
    question: `The graph of $f(x) = -2x^2 + 8x - 1$ has an axis of symmetry at:`,
    options: [
      `x = -2`,
      `x = 0`,
      `x = 2`,
      `x = 4`,
    ],
    correctAnswer: 2,
    explanation: 'Explanation for Question 49',
    category: 'Math',
    topics: ['EST1']
  },
  {
    id: 'est1_2026_jan2_q50',
    question: `If $f(x) = 2x^2 + 8x + 2$ and $g(x) = -f(x + 3)$, then $g(0) =$`,
    options: [
      `-44`,
      `-4`,
      `-2`,
      `2`,
    ],
    correctAnswer: 0,
    explanation: 'Explanation for Question 50',
    category: 'Math',
    topics: ['EST1']
  }
];
