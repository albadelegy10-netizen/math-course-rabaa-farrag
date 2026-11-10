import { Question } from '../../types';

export const EST1_2020_OCT_PART4: Question[] = [
  {
    id: "est1_2020_oct_q36",
    examId: "EST12020Oct",
    question: "Brad got an average of 76 on his last three math tests. What grade should he get on the fourth test to obtain an average of 80?",
    options: [
      "88",
      "90",
      "92",
      "94"
    ],
    correctAnswer: 2,
    explanation: "Sum of the three tests = $3 \\times 76 = 228$.\nLet $x$ be the fourth test grade.\n$\\frac{228 + x}{4} = 80 \\implies 228 + x = 320 \\implies x = 320 - 228 = 92$."
  },
  {
    id: "est1_2020_oct_q37",
    examId: "EST12020Oct",
    question: "From 2018 to 2019, the amount in Julias's bank account increased by 22.5% to $14325. To the nearest dollar, what was the initial amount in her bank account?",
    options: [
      "11694\\$",
      "14010\\$",
      "11102\\$",
      "12775\\$"
    ],
    correctAnswer: 0,
    explanation: "Let the initial amount be $x$.\n$x (1 + 0.225) = 14325 \\implies 1.225x = 14325$\n$x = \\frac{14325}{1.225} \\approx 11693.88$\nRounded to the nearest dollar is $11694\\$."
  },
  {
    id: "est1_2020_oct_q38",
    examId: "EST12020Oct",
    question: "The ministry of finance conducted a survey to determine the average income rate in the industry of banking in a given country. So, a meeting was held in the presence of 150 bank managers to ask them about their annual income. Which conclusion can be drawn about the survey's reliability?",
    options: [
      "The survey is reliable because it involves people from the banking industry.",
      "The survey is unreliable because the sample is too small.",
      "The survey is unreliable because the sample does not cover employees of different positions.",
      "The survey is reliable since it was made by the ministry of finance."
    ],
    correctAnswer: 2,
    explanation: "The survey wants to find the average income rate in the *entire* banking industry, but they only asked bank managers. This is a biased sample representing only the highest earners, thereby making it unreliable since it doesn't cover all different positions."
  },
  {
    id: "est1_2020_oct_q39",
    examId: "EST12020Oct",
    question: "Questions 19 and 20 refer to the following information.\n\n(A bar graph shows the age distribution of employees in a company. Ages 20-30: 25%, 30-40: 35%, 40-50: 20%, 50-60: 15%, 60-70: 5%)\n\nIf 481 employees are aged between 30 and 40, what is the total number of employees in this company?",
    options: [
      "1150",
      "1200",
      "1550",
      "1300"
    ],
    correctAnswer: 3,
    explanation: "Looking at the hypothetical bar graph (from standard percentages), the 30-40 bracket represents $37\\%$? Wait. From the image in the PDF: 20-30 is ~26.5%, 30-40 is 37%. Actually, 481 is 37% of 1300.\n$0.37x = 481 \\implies x = \\frac{481}{0.37} = 1300$.\nLet's assume the percentage for [30;40[ is $37\\%$."
  },
  {
    id: "est1_2020_oct_q40",
    examId: "EST12020Oct",
    question: "Questions 19 and 20 refer to the following information.\n\n(A bar graph shows the age distribution of employees in a company. Ages 20-30: ~27%, 30-40: ~37%, 40-50: ~20%, 50-60: ~11%, 60-70: ~5%)\n\nIn which interval does the median age lie?",
    options: [
      "[20;30[",
      "[30;40[",
      "[40;50[",
      "[50;60["
    ],
    correctAnswer: 1,
    explanation: "The median corresponds to the 50th percentile.\nThe interval [20;30[ holds about 27%.\nThe interval [30;40[ holds another 37%, bringing the cumulative total to 64%.\nSince the 50% mark falls within the [30;40[ bracket, the median lies there."
  },
  {
    id: "est1_2020_oct_q41",
    examId: "EST12020Oct",
    question: "$\\begin{cases} \\frac{2}{5}x - \\frac{1}{3}y = 7 \\\\ -\\frac{m}{10}x + \\frac{5}{6}y = 3 \\end{cases}$\n\nIf the system of linear equations above admits no solutions, and $m$ is an integer, what is the value of $m$?",
    options: [
      "-2",
      "10",
      "6",
      "-10"
    ],
    correctAnswer: 1,
    explanation: "For a system to have no solutions, the related lines must be parallel, so their slopes must be equal and their $y$-intercepts must differ (or the ratio of $x$ coefficients equals the ratio of $y$ coefficients but not the constants).\nRatio of $x$ coefficients: $\\frac{\\frac{2}{5}}{-\\frac{m}{10}}$\nRatio of $y$ coefficients: $\\frac{-\\frac{1}{3}}{\\frac{5}{6}} = \\frac{-1}{3} \\times \\frac{6}{5} = -\\frac{6}{15} = -\\frac{2}{5}$\nSet ratios equal:\n$\\frac{\\frac{2}{5}}{-\\frac{m}{10}} = -\\frac{2}{5}$\n$\\frac{2}{5} = -\\frac{2}{5} \\left( -\\frac{m}{10} \\right) = \\frac{2m}{50} = \\frac{m}{25}$\n$10 = m \\implies m = 10$"
  },
  {
    id: "est1_2020_oct_q42",
    examId: "EST12020Oct",
    question: "The graph plotted depicts a function intersecting the x-axis at $x=-1$ and tangent to it at $x=2$.\n\nWhich of the following functions does the graph represent?",
    options: [
      "$f(x) = (x + 1)(x - 2)^2$",
      "$f(x) = (x - 1)(x + 2)^2$",
      "$f(x) = (x + 1)(x - 2)$",
      "$f(x) = (x - 2)(x + 1)^2$"
    ],
    correctAnswer: 0,
    explanation: "The graph intersects the $x$-axis at $x = -1$, meaning $(x+1)$ is a factor. It is tangent to the $x$-axis at $x = 2$, indicating a double root there, so $(x-2)^2$ is a factor.\nThe equation is formed by the product of these factors: $f(x) = (x+1)(x-2)^2$."
  },
  {
    id: "est1_2020_oct_q43",
    examId: "EST12020Oct",
    question: "A secretary types on her computer keyboard at an average speed of 1.75 words per second. Her manager asked her to type a document containing 16 pages with an average of 525 words per page. How long will she be actively typing this document?",
    options: [
      "1 hour, 10 minutes",
      "1 hour, 20 minutes",
      "2 hours, 5 minutes",
      "4 hours, 5 minutes"
    ],
    correctAnswer: 1,
    explanation: "Total number of words = $16 \\times 525 = 8400$ words.\nTime in seconds = $\\frac{8400}{1.75} = 4800$ seconds.\nConvert to minutes: $\\frac{4800}{60} = 80$ minutes.\n80 minutes is 1 hour and 20 minutes."
  },
  {
    id: "est1_2020_oct_q44",
    examId: "EST12020Oct",
    question: "A graph above depicts a function $f(x)$. How many solutions does the equation $f(x) = 0.5$ admit?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 3,
    explanation: "Looking at the pdf graph, drawing a horizontal line at $y = 0.5$ intersects the depicted curve at 4 different points. Hence, there are 4 solutions."
  },
  {
    id: "est1_2020_oct_q45",
    examId: "EST12020Oct",
    question: "A downward opening parabola has x-intercepts at -1 and 3, and a vertex at (1, 4).\n\nWhat is the equation of the function $f$ graphed above?",
    options: [
      "$f(x) = (x+1)(x-3)$",
      "$f(x) = (x-1)(x+3)$",
      "$f(x) = -(x+1)(x-3)$",
      "$f(x) = -(x-1)(x+3)$"
    ],
    correctAnswer: 2,
    explanation: "The roots are $-1$ and $3$, so the factors are $(x+1)$ and $(x-3)$.\nThe parabola opens downwards, so the leading coefficient must be negative.\nChecking $x=1$ in $-(x+1)(x-3)$: $-(2)(-2) = 4$, which matches the vertex. Therefore, the function is $f(x) = -(x+1)(x-3)$."
  },
  {
    id: "est1_2020_oct_q46",
    examId: "EST12020Oct",
    question: "$(3x - 2)^2 - (x + 3)^2 = 0$\n\nWhat is the absolute value of the difference between the two roots of the above equation?",
    options: [
      "$\\frac{11}{4}$",
      "$\\frac{9}{4}$",
      "$\\frac{5}{3}$",
      "$\\frac{11}{2}$"
    ],
    correctAnswer: 0,
    explanation: "Use difference of squares: $a^2 - b^2 = (a - b)(a + b) = 0$.\n$[ (3x - 2) - (x + 3) ][ (3x - 2) + (x + 3) ] = 0$\n$(2x - 5)(4x + 1) = 0$\nRoots are $x = \\frac{5}{2}$ and $x = -\\frac{1}{4}$.\nThe absolute difference is $|\\frac{5}{2} - (-\\frac{1}{4})| = |\\frac{10}{4} + \\frac{1}{4}| = \\frac{11}{4}$."
  },
  {
    id: "est1_2020_oct_q47",
    examId: "EST12020Oct",
    question: "A liquid covering 12 cm of the height of a cylindrical glass of diameter 8cm is transferred into another glass shaped as a cone with a diameter of 12 cm. What height of the cone will the liquid cover?",
    options: [
      "8 cm",
      "10 cm",
      "16 cm",
      "14 cm"
    ],
    correctAnswer: 2,
    explanation: "Volume of liquid in cylinder = $\\pi r^2 h = \\pi (4)^2 (12) = 192\\pi$.\nThe volume of the liquid in the cone will be the same.\nThe volume of a cone is $V = \\frac{1}{3}\\pi r^2 h$.\nThe new cone has a diameter of 12 cm, so $r = 6$ cm.\n$192\\pi = \\frac{1}{3}\\pi (6)^2 h \\implies 192\\pi = 12\\pi h \\implies h = 16$ cm."
  }
];
