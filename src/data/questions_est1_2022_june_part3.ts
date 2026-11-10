import { Question } from '../../types';

export const EST1_2022_JUNE_PART3: Question[] = [
  {
    id: "est1_2022_june_q25",
    examId: "EST12022June",
    question: "This company has only one employee who works for $\\$1650$ per month. In which year was this company unable to pay his full wage from the amount won from renting cars and trucks?\n(Data - 2015: Cars 10004.6, Trucks 7888.3; 2016: Cars 12456.7, Trucks 7985.2; 2019: Cars 12003.4, Trucks 8599.4; 2020: Cars 13990.1, Trucks 7995.5)",
    options: [
      "2015",
      "2016",
      "2019",
      "2020"
    ],
    correctAnswer: 0,
    explanation: "The employee's yearly wage is $1650 \\times 12 = \\$19800$.\nTotal won in 2015 = $10004.6 + 7888.3 = \\$17892.9$.\nTotal won in 2016 = $12456.7 + 7985.2 = \\$20441.9$.\nSince $\\$17892.9 < \\$19800$, the company was unable to pay the full wage in 2015."
  },
  {
    id: "est1_2022_june_q26",
    examId: "EST12022June",
    question: "Amina has a bag of 6 black balls and 4 green balls. Hamad has a bag of 3 black balls and 5 green balls. If one ball is drawn from each bag, what is the probability that one is black and one is green?",
    options: [
      "0.225",
      "0.25",
      "0.475",
      "0.525"
    ],
    correctAnswer: 3,
    explanation: "There are two successful scenarios:\n1) Amina draws black, Hamad draws green: $P = (6/10) \\times (5/8) = 30/80 = 3/8 = 0.375$.\n2) Amina draws green, Hamad draws black: $P = (4/10) \\times (3/8) = 12/80 = 3/20 = 0.15$.\nTotal probability = $0.375 + 0.15 = 0.525$."
  },
  {
    id: "est1_2022_june_q27",
    examId: "EST12022June",
    question: "Which of the following ordered pairs satisfy both inequalities: $x + 3y \\le 8$ and $2x - y > 9$?",
    options: [
      "$(0, 3)$",
      "$(1, 2)$",
      "$(1, -2)$",
      "$(1, -9)$"
    ],
    correctAnswer: 3,
    explanation: "Test the point $(1, -9)$:\nFirst inequality: $1 + 3(-9) = 1 - 27 = -26 \\le 8$ (True).\nSecond inequality: $2(1) - (-9) = 2 + 9 = 11 > 9$ (True).\nOnly $(1, -9)$ satisfies both inequalities."
  },
  {
    id: "est1_2022_june_q28",
    examId: "EST12022June",
    question: "In the figure above, triangle $BDC$ is right angled at $D$ with $m\\angle CBD = 40^\\circ$. Given that $m\\angle CAB = 35^\\circ$, and $AC = 10\\text{ cm}$, what is the length of segment $AB$?",
    options: [
      "1.36 cm",
      "5.74 cm",
      "6.84 cm",
      "8.19 cm"
    ],
    correctAnswer: 0,
    explanation: "Based on the trigonometric layout described in the figure, solving the system formed by the provided lengths and angles yields segment $AB \\approx 1.36\\text{ cm}$."
  },
  {
    id: "est1_2022_june_q29",
    examId: "EST12022June",
    question: "During the final game of UEFA Euro 2020 between Italy and England, 67,173 fans attended the game in Wembley Stadium in London, England. Assuming that the ratio of adults to children who attended the game was approximately 13 to 6, which of the following numbers represents approximately the number of children who attended the game live in the stadium?",
    options: [
      "21213",
      "31002",
      "36170",
      "45960"
    ],
    correctAnswer: 0,
    explanation: "The ratio is 13 adults to 6 children, so out of $13 + 6 = 19$ parts, 6 parts are children.\nThe number of children = $\\frac{6}{19} \\times 67173 \\approx 21212.5$.\nThe closest approximation is 21213."
  },
  {
    id: "est1_2022_june_q30",
    examId: "EST12022June",
    question: "What is the solution for $x$ in $2 = \\sqrt{2x - 3}$?",
    options: [
      "2.5",
      "3.5",
      "4.5",
      "0.5"
    ],
    correctAnswer: 1,
    explanation: "Square both sides to remove the square root:\n$2^2 = (\\sqrt{2x - 3})^2 \\implies 4 = 2x - 3$.\nAdd 3 to both sides: $7 = 2x$.\nDivide by 2: $x = \\frac{7}{2} = 3.5$."
  },
  {
    id: "est1_2022_june_q31",
    examId: "EST12022June",
    question: "Giving that abscissa “0” signifies the beginning of the month of January, which of the following statements is/are true from the scatterplot?\nI. The largest increase in the number of phones sold was between the beginning of May and the beginning of June.\nII. Most of the phones were sold in the first quarter of the year.\nIII. The number of phones sold in mid-January is equivalent to the number of phones sold in mid-June.",
    options: [
      "I only",
      "I and II",
      "I and III",
      "II and III"
    ],
    correctAnswer: 2,
    explanation: "Based on the scatter plot analysis, the largest increase is indeed between May and June, and the visual data points verify statement III as true. Most phones were not sold in the first quarter."
  },
  {
    id: "est1_2022_june_q32",
    examId: "EST12022June",
    question: "What is the average increase in the number of phones sold, given the line of best fit passes through $(0, 105)$ and $(7, 112.7)$?",
    options: [
      "0.8",
      "0.9",
      "1",
      "1.1"
    ],
    correctAnswer: 3,
    explanation: "The average increase corresponds to the slope of the line of best fit.\n$m = \\frac{112.7 - 105}{7 - 0} = \\frac{7.7}{7} = 1.1$."
  },
  {
    id: "est1_2022_june_q33",
    examId: "EST12022June",
    question: "Which of the following represents the graph of the function $f(x) = x^3 + x + 1$?",
    options: [
      "Graph passing through several local extrema",
      "Graph passing through the origin",
      "Graph passing through $(0,1)$ and always increasing",
      "Graph passing through $(0,-1)$"
    ],
    correctAnswer: 2,
    explanation: "The function is a cubic function. The $y$-intercept is $f(0) = 1$. The derivative is $f'(x) = 3x^2 + 1$. Since $f'(x) > 0$ for all real $x$, the function does not have any local extrema and is always increasing."
  },
  {
    id: "est1_2022_june_q34",
    examId: "EST12022June",
    question: "What is the range $R$ of the function $f(x) = \\frac{2}{x+2}$?",
    options: [
      "$R = (-\\infty, 0] \\cup [0, +\\infty)$",
      "$R = (-\\infty, 0) \\cup (0, +\\infty)$",
      "$R = (-\\infty, -2) \\cup (-2, +\\infty)$",
      "$R = (-\\infty, -2] \\cup [2, +\\infty)$"
    ],
    correctAnswer: 1,
    explanation: "A rational function of the form $f(x) = \\frac{a}{x-h} + k$ has a horizontal asymptote at $y=k$. For $f(x) = \\frac{2}{x+2}$, $k=0$.\nThe numerator is a non-zero constant, meaning the fraction can never be exactly zero. The range is all real numbers except $0$: $(-\\infty, 0) \\cup (0, +\\infty)$."
  },
  {
    id: "est1_2022_june_q35",
    examId: "EST12022June",
    question: "A survey asked 1420 students about their favorite fruit. (Mango 17.6%, Apple 21.5%, Oranges 13.2%). How many students like mango more than any other fruit? And, approximately how many more students said apple was their favorite fruit than said oranges was their favorite one?",
    options: [
      "250 students like mango, and 110 students...",
      "250 students like mango, and 118 students...",
      "306 students like mango, and 63 students...",
      "187 students like mango, and 56 students..."
    ],
    correctAnswer: 1,
    explanation: "Mango students = $17.6\\%$ of $1420 = 0.176 \\times 1420 = 249.92 \\approx 250$.\nThe difference between Apple and Oranges is $21.5\\% - 13.2\\% = 8.3\\%$.\n$8.3\\%$ of $1420 = 0.083 \\times 1420 = 117.86 \\approx 118$ students."
  },
  {
    id: "est1_2022_june_q36",
    examId: "EST12022June",
    question: "Adnan planted 205 citrus trees. He bought each tree for $\\$172$, and the farmer asks for $\\$100$ to plant each tree, plus $\\$3994$ per month for management. How much will Adnan pay during the first year of his project?",
    options: [
      "103,688 EGP",
      "100,388 EGP",
      "83,288 EGP",
      "59,754 EGP"
    ],
    correctAnswer: 0,
    explanation: "The initial cost for trees and planting is $205 \\times (172 + 100) = 205 \\times 272 = 55760\\text{ EGP}$.\nThe monthly management cost for the first year (12 months) is $3994 \\times 12 = 47928\\text{ EGP}$.\nTotal cost = $55760 + 47928 = 103688\\text{ EGP}$."
  }
];
