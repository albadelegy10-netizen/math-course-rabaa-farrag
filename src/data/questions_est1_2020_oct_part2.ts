import { Question } from '../../types';

export const EST1_2020_OCT_PART2: Question[] = [
  {
    id: "est1_2020_oct_q11",
    examId: "EST12020Oct",
    question: "If $f(x) = x^2 - 5x - 6$ and $g(x) = -3 - x$, what is the value of $f(g(-1))$?",
    options: [
      "$13$",
      "$8$",
      "$0$",
      "$30$"
    ],
    correctAnswer: 1,
    explanation: "First, evaluate $g(-1)$:\n$g(-1) = -3 - (-1) = -3 + 1 = -2$\nNext, substitute this result into $f(x)$:\n$f(-2) = (-2)^2 - 5(-2) - 6 = 4 + 10 - 6 = 8$"
  },
  {
    id: "est1_2020_oct_q12",
    examId: "EST12020Oct",
    question: "$y = \\frac{x^3 - 3x^2 + 2x - 1}{x - 3}$\n\nWhich of the following expressions is equivalent to $y$?",
    options: [
      "$y = x^2 + 2 + \\frac{5}{x - 3}$",
      "$y = x^2 - 2x + 2 + \\frac{3}{x - 3}$",
      "$y = x^2 - 3 - \\frac{8}{x - 3}$",
      "$y = x^2 + 2$"
    ],
    correctAnswer: 0,
    explanation: "Use polynomial long division or synthetic division to divide $x^3 - 3x^2 + 2x - 1$ by $x - 3$.\nDividing $x^3 - 3x^2$ by $x - 3$ gives $x^2$.\nSubtracting $x^2(x - 3)$ leaves $2x - 1$.\nDividing $2x$ by $x$ gives $2$.\nSubtracting $2(x - 3) = 2x - 6$ leaves a remainder of $5$.\nSo the result is $x^2 + 2$ with a remainder of $5$, which is $x^2 + 2 + \\frac{5}{x - 3}$."
  },
  {
    id: "est1_2020_oct_q13",
    examId: "EST12020Oct",
    question: "The graph ($C$) of the function $f(x) = 2(x + 2)(x - 6)$ is a parabola. If the line $x=k$ is the axis of symmetry of the parabola, what is the value of $k$?",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    correctAnswer: 1,
    explanation: "The $x$-intercepts of the parabola are given by the roots of the equation, which are $x = -2$ and $x = 6$.\nThe axis of symmetry is exactly halfway between the $x$-intercepts:\n$k = \\frac{-2 + 6}{2} = \\frac{4}{2} = 2$"
  },
  {
    id: "est1_2020_oct_q14",
    examId: "EST12020Oct",
    question: "If $\\frac{1}{x - y} = \\frac{3}{5y}$, which of the following proportions is equivalent?",
    options: [
      "$\\frac{x}{y} = \\frac{3}{8}$",
      "$\\frac{x}{y} = \\frac{8}{3}$",
      "$\\frac{x}{y} = \\frac{8}{15}$",
      "$\\frac{x}{y} = \\frac{15}{8}$"
    ],
    correctAnswer: 1,
    explanation: "Cross-multiply the given equation:\n$5y = 3(x - y)$\n$5y = 3x - 3y$\nAdd $3y$ to both sides:\n$8y = 3x$\nDivide by $3y$:\n$\\frac{x}{y} = \\frac{8}{3}$"
  },
  {
    id: "est1_2020_oct_q15",
    examId: "EST12020Oct",
    question: "In 2017, the number of people who had access to the internet in a country was 3.2 million. If this number grows at a rate of 18% each year, which expression best describes the number of people $y$, in million, having access to the internet $x$ years after 2017?",
    options: [
      "$y = 0.18x + 32$",
      "$y = 1.18x + 32$",
      "$y = 3.2(0.18)^x$",
      "$y = 3.2(1.18)^x$"
    ],
    correctAnswer: 3,
    explanation: "This is an exponential growth problem.\nThe general formula is $y = a(1 + r)^x$, where $a$ is the initial amount, $r$ is the growth rate, and $x$ is the time.\nHere, $a = 3.2$ million and $r = 18\\% = 0.18$.\nSo, $y = 3.2(1 + 0.18)^x = 3.2(1.18)^x$."
  },
  {
    id: "est1_2020_oct_q16",
    examId: "EST12020Oct",
    question: "If the values in the table below represent a linear relationship, what is the missing value?\n\n| X | 2 | 5 | -3 |\n| :--- | :--- | :--- | :--- |\n| Y | -1 | -7 | ? |",
    options: [],
    correctAnswer: "9",
    isGridIn: true,
    explanation: "Find the slope $m$ using the first two points $(2, -1)$ and $(5, -7)$:\n$m = \\frac{-7 - (-1)}{5 - 2} = \\frac{-6}{3} = -2$\nThe equation of the line is $y - (-1) = -2(x - 2) \\implies y = -2x + 4 - 1 \\implies y = -2x + 3$\nSubstitute $x = -3$ to find the missing value:\n$y = -2(-3) + 3 = 6 + 3 = 9$"
  },
  {
    id: "est1_2020_oct_q17",
    examId: "EST12020Oct",
    question: "In the coordinate plane, the shaded region is the solution of the system $\\begin{cases} 4x + y < 2 \\\\ y \\ge -2 \\end{cases}$\nFor $x = 0$, what is the highest integer value of $y$?",
    options: [],
    correctAnswer: "1",
    isGridIn: true,
    explanation: "Substitute $x = 0$ into the first inequality:\n$4(0) + y < 2 \\implies y < 2$\nWe also know $y \\ge -2$.\nThe integer values for $y$ in this range are $-2, -1, 0, 1$.\nThe highest integer value is $1$."
  },
  {
    id: "est1_2020_oct_q18",
    examId: "EST12020Oct",
    question: "Based on the graph of the function $f(x)$, if the absolute maximum and minimum of the represented function $f(x)$ are $(p,q)$ and $(r,s)$ respectively, what is the value of $q - p + s - r$?",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCA0NTAgMzUwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7Ij4KICA8c3R5bGU+CiAgICAudGlja3MgewpzdHJva2U6ICNkM2QzZDM7CnN0cm9rZS13aWR0aDogMTsKICAgIH0KICAgIC5heGlzIHsKc3Ryb2tlOiBibGFjazsKc3Ryb2tlLXdpZHRoOiAyOwogICAgfQogICAgdGV4dCB7CmZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOwpmb250LXNpemU6IDEwcHg7CiAgICB9CiAgPC9zdHlsZT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjUsIDE3NSkiPgogICAgPCEtLSBHcmlkIC0tPgogICAgPGcgY2xhc3M9InRpY2tzIj4KICAgICAgPGxpbmUgeDE9Ii0yMDAiIHkxPSItMTUwIiB4Mj0iMjAwIiB5Mj0iLTE1MCIvPgogICAgICA8bGluZSB4MT0iLTIwMCIgeTE9Ii0xMjAiIHgyPSIyMDAiIHkyPSItMTIwIi8+CiAgICAgIDxsaW5lIHgxPSItMjAwIiB5MT0iLTkwIiB4Mj0iMjAwIiB5Mj0iLTkwIi8+CiAgICAgIDxsaW5lIHgxPSItMjAwIiB5MT0iLTYwIiB4Mj0iMjAwIiB5Mj0iLTYwIi8+CiAgICAgIDxsaW5lIHgxPSItMjAwIiB5MT0iLTMwIiB4Mj0iMjAwIiB5Mj0iLTMwIi8+CiAgICAgIDxsaW5lIHgxPSItMjAwIiB5MT0iMzAiIHgyPSIyMDAiIHkyPSIzMCIvPgogICAgICA8bGluZSB4MT0iLTIwMCIgeTE9IjYwIiB4Mj0iMjAwIiB5Mj0iNjAiLz4KICAgICAgPGxpbmUgeDE9Ii0yMDAiIHkxPSI5MCIgeDI9IjIwMCIgeTI9IjkwIi8+CiAgICAgIDxsaW5lIHgxPSItMjAwIiB5MT0iMTIwIiB4Mj0iMjAwIiB5Mj0iMTIwIi8+CiAgICAgIDxsaW5lIHgxPSItMjAwIiB5MT0iMTUwIiB4Mj0iMjAwIiB5Mj0iMTUwIi8+CiAgICAgIAogICAgICA8bGluZSB4MT0iLTE4MCIgeTE9Ii0xNTAiIHgyPSItMTgwIiB5Mj0iMTUwIi8+CiAgICAgIDxsaW5lIHgxPSItMTUwIiB5MT0iLTE1MCIgeDI9Ii0xNTAiIHkyPSIxNTAiLz4KICAgICAgPGxpbmUgeDE9Ii0xMjAiIHkxPSItMTUwIiB4Mj0iLTEyMCIgeTI9IjE1MCIvPgogICAgICA8bGluZSB4MT0iLTkwIiB5MT0iLTE1MCIgeDI9Ii05MCIgeTI9IjE1MCIvPgogICAgICA8bGluZSB4MT0iLTYwIiB5MT0iLTE1MCIgeDI9Ii02MCIgeTI9IjE1MCIvPgogICAgICA8bGluZSB4MT0iLTMwIiB5MT0iLTE1MCIgeDI9Ii0zMCIgeTI9IjE1MCIvPgogICAgICA8bGluZSB4MT0iMzAiIHkxPSItMTUwIiB4Mj0iMzAiIHkyPSIxNTAiLz4KICAgICAgPGxpbmUgeDE9IjYwIiB5MT0iLTE1MCIgeDI9IjYwIiB5Mj0iMTUwIi8+CiAgICAgIDxsaW5lIHgxPSI5MCIgeTE9Ii0xNTAiIHgyPSI5MCIgeTI9IjE1MCIvPgogICAgICA8bGluZSB4MT0iMTIwIiB5MT0iLTE1MCIgeDI9IjEyMCIgeTI9IjE1MCIvPgogICAgICA8bGluZSB4MT0iMTUwIiB5MT0iLTE1MCIgeDI9IjE1MCIgeTI9IjE1MCIvPgogICAgPC9nPgogICAgCiAgICA8IS0tIEF4ZXMgLS0+CiAgICA8bGluZSB4MT0iLTIwMCIgeTE9IjAiIHgyPSIyMTAiIHkyPSIwIiBjbGFzcz0iYXhpcyIvPgogICAgPGxpbmUgeDE9IjAiIHkxPSItMTYwIiB4Mj0iMCIgeTI9IjE2MCIgY2xhc3M9ImF4aXMiLz4KICA8cG9seWdvbiBwb2ludHM9IjMsMTYwIDAsMTY0IC0zLDE2MCIgZmlsbD0iYmxhY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxMCwtMTYwKSByb3RhdGUoOTAgMCwxNjApIi8+CiAgICA8cG9seWdvbiBwb2ludHM9IjMsLTE2NSAwLC0xNjkgLTMsLTE2NSIgZmlsbD0iYmxhY2siLz4KICAgIAogICAgPCEtLSBMYWJlbHMgKHgpLS0+CiAgICA8dGV4dCB4PSItMTIwIiB5PSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+LTQ8L3RleHQ+CiAgICA8dGV4dCB4PSItNjAiIHk9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4tMjwvdGV4dD4KICAgIDx0ZXh0IHg9Ii0yOCIgeT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPi0xPC90ZXh0PgogICAgPHRleHQgeD0iMzAiIHk9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0PgogICAgPHRleHQgeD0iOTAiIHk9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yPC90ZXh0PgogICAgPHRleHQgeD0iMjA1IiB5PSIxMCI+eDwvdGV4dD4KICAgIAogICAgPCEtLSBMYWJlbHMgKHkpLS0+CiAgICA8dGV4dCB4PSItOCIgeT0iLTE1MCIgdGV4dC1hbmNob3I9ImVuZCI+NTwvdGV4dD4KICAgIDx0ZXh0IHg9Ii04IiB5PSItMTIwIiB0ZXh0LWFuY2hvcj0iZW5kIj40PC90ZXh0PgogICAgPHRleHQgeD0iLTgiIHk9Ii05MCIgdGV4dC1hbmNob3I9ImVuZCI+MzwvdGV4dD4KICAgIDx0ZXh0IHg9Ii04IiB5PSItNjAiIHRleHQtYW5jaG9yPSJlbmQiPjI8L3RleHQ+CiAgICA8dGV4dCB4PSItOCIgeT0iLTMwIiB0ZXh0LWFuY2hvcj0iZW5kIj4xPC90ZXh0PgogICAgPHRleHQgeD0iLTgiIHk9IjM1IiB0ZXh0LWFuY2hvcj0iZW5kIj4tMTwvdGV4dD4KICAgIDx0ZXh0IHg9Ii04IiB5PSI2NSIgdGV4dC1hbmNob3I9ImVuZCI+LTI8L3RleHQ+CiAgICA8dGV4dCB4PSItOCIgeT0iOTUiIHRleHQtYW5jaG9yPSJlbmQiPi0zPC90ZXh0PgogICAgPHRleHQgeD0iLTgiIHk9IjEyNSIgdGV4dC1hbmNob3I9ImVuZCI+LTQ8L3RleHQ+CiAgICA8dGV4dCB4PSIxMCIgeT0iLTE2MCI+eTwvdGV4dD4KICAgIAogICAgPCEtLSBGdW5jdGlvbiBsaW5lcyAtLT4KICAgIDxwb2x5bGluZSBwb2ludHM9Ii0xMTAsMTUwIC03NSwzMCAtNjAsLTEyMCAtMzAsLTEwIC0xNSw3MCAwLDAgMzAsLTkwIDYwLDkwICIgc3Ryb2tlPSIjNDU1YTY0IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIC8+CiAgICA8Y2lyY2xlIGN4PSItNjAiIGN5PSItMTIwIiByPSI0IiBmaWxsPSIjNDU1YTY0IiAvPgogICAgPGNpcmNsZSBjeD0iLTMwIiBjeT0iOTAiIHI9IjQiIGZpbGw9IiM0NTVhNjQiIC8+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNCIgZmlsbD0iIzQ1NWE2NCIgLz4KICAgIDxjaXJjbGUgY3g9IjMwIiBjeT0iLTkwIiByPSI0IiBmaWxsPSIjNDU1YTY0IiAvPgogIDwvZz4KPC9zdmc+",
    options: [],
    correctAnswer: "4",
    isGridIn: true,
    explanation: "Observing the given graph, the absolute maximum point of $f(x)$ is at $(-2, 4)$, so $(p, q) = (-2, 4)$.\nThe absolute minimum point is at $(-1, -3)$, so $(r, s) = (-1, -3)$.\nWe need the value of $q - p + s - r$:\n$q - p + s - r = 4 - (-2) + (-3) - (-1) = 4 + 2 - 3 + 1 = 4$."
  },
  {
    id: "est1_2020_oct_q19",
    examId: "EST12020Oct",
    question: "What is the value of $\\frac{2^5 \\times 16^4}{64^3}$?",
    options: [],
    correctAnswer: "8",
    isGridIn: true,
    explanation: "Convert all bases to 2:\n$16 = 2^4 \\implies 16^4 = (2^4)^4 = 2^{16}$\n$64 = 2^6 \\implies 64^3 = (2^6)^3 = 2^{18}$\nThe expression becomes $\\frac{2^5 \\times 2^{16}}{2^{18}}$\n$= \\frac{2^{21}}{2^{18}} = 2^{21 - 18} = 2^3 = 8$"
  },
  {
    id: "est1_2020_oct_q20",
    examId: "EST12020Oct",
    question: "If the expression $\\frac{2i^2 - 3i}{1 - 2i}$ is written in the form $a+bi$ where $a$ and $b$ are real numbers and $i = \\sqrt{-1}$, what is the value of $a$?",
    options: [],
    correctAnswer: "4/5",
    isGridIn: true,
    explanation: "First, simplify the numerator using $i^2 = -1$:\n$2i^2 - 3i = 2(-1) - 3i = -2 - 3i$\nThe expression is $\\frac{-2 - 3i}{1 - 2i}$.\nTo write this in standard form, multiply the numerator and denominator by the complex conjugate of the denominator, which is $1 + 2i$:\n$\\frac{(-2 - 3i)(1 + 2i)}{(1 - 2i)(1 + 2i)} = \\frac{-2 - 4i - 3i - 6i^2}{1^2 - (2i)^2} = \\frac{-2 - 7i - 6(-1)}{1 - (-4)} = \\frac{-2 - 7i + 6}{5} = \\frac{4 - 7i}{5}$\nThis gives $\\frac{4}{5} - \\frac{7}{5}i$.\nThe value of $a$ (the real part) is $\\frac{4}{5}$."
  }
];
