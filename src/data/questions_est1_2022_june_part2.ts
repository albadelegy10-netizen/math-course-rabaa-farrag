import { Question } from '../../types';

export const EST1_2022_JUNE_PART2: Question[] = [
  {
    id: "est1_2022_june_q13",
    examId: "EST12022June",
    question: "What is the value of $[f(g(f(1)))]$ if $f(x) = 2x^2 - 3$ and $g(x) = 4x + 1$?",
    options: [
      "-21",
      "-15",
      "10",
      "15"
    ],
    correctAnswer: 3,
    explanation: "First, evaluate $f(1) = 2(1)^2 - 3 = 2 - 3 = -1$.\nNext, plug that into $g(x)$: $g(-1) = 4(-1) + 1 = -4 + 1 = -3$.\nFinally, plug that into $f(x)$: $f(-3) = 2(-3)^2 - 3 = 2(9) - 3 = 18 - 3 = 15$."
  },
  {
    id: "est1_2022_june_q14",
    examId: "EST12022June",
    question: "What number increased by 5 is equal to twice the same number minus 3?",
    options: [
      "-8",
      "3",
      "5",
      "8"
    ],
    correctAnswer: 3,
    explanation: "Let the number be $x$. The equation is $x + 5 = 2x - 3$.\nSubtract $x$ from both sides: $5 = x - 3$.\nAdd $3$ to both sides: $x = 8$."
  },
  {
    id: "est1_2022_june_q15",
    examId: "EST12022June",
    question: "What is triple the square root of the discriminant of the equation $4x^2 - 5(x + 3) = -6$?",
    options: [
      "13",
      "26",
      "39",
      "$13 \\sqrt{3}$"
    ],
    correctAnswer: 2,
    explanation: "First, expand and put the equation in standard form $ax^2+bx+c=0$:\n$4x^2 - 5x - 15 = -6 \\implies 4x^2 - 5x - 9 = 0$.\nThe discriminant is $\\Delta = b^2 - 4ac = (-5)^2 - 4(4)(-9) = 25 + 144 = 169$.\nThe square root of the discriminant is $\\sqrt{169} = 13$.\nTriple this value is $3 \\times 13 = 39$."
  },
  {
    id: "est1_2022_june_q16",
    examId: "EST12022June",
    question: "Given that $2x^2 + ax + (4c - 1) = (2b - 1)x^2 + 7x + c + 1$, what is the value of $bc + a$, where $a$, $b$ and $c$ are real numbers?",
    options: [
      "8",
      "$\\frac{37}{4}$",
      "7.5",
      "$\\frac{67}{9}$"
    ],
    correctAnswer: 0,
    explanation: "For the polynomial identity to hold, corresponding coefficients must be equal.\n$x^2$ coefficients: $2 = 2b - 1 \\implies 2b = 3 \\implies b = 1.5$.\n$x$ coefficients: $a = 7$.\nConstants: $4c - 1 = c + 1 \\implies 3c = 2 \\implies c = \\frac{2}{3}$.\nThe value of $bc + a = (1.5)(\\frac{2}{3}) + 7 = 1 + 7 = 8$."
  },
  {
    id: "est1_2022_june_q17",
    examId: "EST12022June",
    question: "What is the value of $AD^2 + DC^2$? (Based on the graphed quadrilateral points)",
    options: [
      "53",
      "58",
      "78",
      "48"
    ],
    correctAnswer: 1,
    explanation: "By carefully identifying the coordinates of the vertices from the provided grid, we can apply the distance formula $d^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$ for segments AD and DC. The sums of their squared lengths evaluates precisely to 58."
  },
  {
    id: "est1_2022_june_q18",
    examId: "EST12022June",
    question: "What is the sum of the slope of $AB$ and the slope of a line perpendicular to $AC$?",
    options: [
      "$\\frac{1}{3}$",
      "$\\frac{11}{3}$",
      "$-\\frac{23}{15}$",
      "$-\\frac{5}{8}$"
    ],
    correctAnswer: 1,
    explanation: "By extracting the coordinates from the grid, calculating the respective slopes for AB and AC, finding the negative reciprocal of the slope of AC for the perpendicular, and then taking their sum provides $\\frac{11}{3}$."
  },
  {
    id: "est1_2022_june_q19",
    examId: "EST12022June",
    question: "What is the smallest value of the range of the function $f(x) = 4x^2 - 2x + 1$?",
    options: [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$",
      "1"
    ],
    correctAnswer: 2,
    explanation: "The function is a parabola opening upward ($a=4 > 0$), so its minimum value occurs at the vertex.\nThe $x$-coordinate of the vertex is $x = -\\frac{b}{2a} = -\\frac{-2}{2(4)} = \\frac{2}{8} = \\frac{1}{4}$.\nThe minimum value is $f(\\frac{1}{4}) = 4(\\frac{1}{4})^2 - 2(\\frac{1}{4}) + 1 = 4(\\frac{1}{16}) - \\frac{1}{2} + 1 = \\frac{1}{4} - \\frac{1}{2} + 1 = -\\frac{1}{4} + 1 = \\frac{3}{4}$."
  },
  {
    id: "est1_2022_june_q20",
    examId: "EST12022June",
    question: "$\\frac{1}{5}\\pi$ radians is how much in degrees?",
    options: [
      "$36^\\circ$",
      "$288^\\circ$",
      "$72^\\circ$",
      "$112^\\circ$"
    ],
    correctAnswer: 0,
    explanation: "To convert from radians to degrees, multiply by $\\frac{180^\\circ}{\\pi}$.\n$\\frac{1}{5}\\pi \\times \\frac{180^\\circ}{\\pi} = \\frac{180^\\circ}{5} = 36^\\circ$."
  },
  {
    id: "est1_2022_june_q21",
    examId: "EST12022June",
    question: "Given the two inequalities $3x + 1 \\ge 8$ and $4x - 1 < 3(x + 3)$, what is the greatest possible integer for $x$?",
    options: [
      "2",
      "3",
      "9",
      "10"
    ],
    correctAnswer: 2,
    explanation: "Solve the first inequality:\n$3x + 1 \\ge 8 \\implies 3x \\ge 7 \\implies x \\ge \\frac{7}{3} \\approx 2.33$.\nSolve the second inequality:\n$4x - 1 < 3x + 9 \\implies x < 10$.\nCombining these, we get $2.33 \\le x < 10$.\nThe greatest integer in this range is 9."
  },
  {
    id: "est1_2022_june_q22",
    examId: "EST12022June",
    question: "In the $xy$-plane, line $(m)$ passes through the point $(2, 5)$ and is perpendicular to the line $(n)$ that passes through the points $(4, 7)$ and $(-2, 3)$. Which of the following represents the equation of line $(m)$?",
    options: [
      "$y = -\\frac{3}{2}x + 8$",
      "$y = -\\frac{3}{2}x - 8$",
      "$y = 2x + 1$",
      "$y = -\\frac{2}{3}x + \\frac{19}{3}$"
    ],
    correctAnswer: 0,
    explanation: "First, find the slope of line $n$. Using points $(4, 7)$ and $(-2, 3)$:\n$m_n = \\frac{3 - 7}{-2 - 4} = \\frac{-4}{-6} = \\frac{2}{3}$.\nSince line $m$ is perpendicular to line $n$, its slope $m_m$ is the negative reciprocal: $-\\frac{3}{2}$.\nUsing point-slope form with $m_m = -\\frac{3}{2}$ and point $(2, 5)$:\n$y - 5 = -\\frac{3}{2}(x - 2) \\implies y = -\\frac{3}{2}x + 3 + 5 \\implies y = -\\frac{3}{2}x + 8$."
  },
  {
    id: "est1_2022_june_q23",
    examId: "EST12022June",
    question: "A company for renting cars published a summary of the amount they won. What is the sum of the averages of the amounts won for renting cars and trucks during years 2017 to 2020?\n(Data: Cars 2017-2020: 14899.9, 13899.5, 12003.4, 13990.1; Trucks 2017-2020: 8050.2, 9000.5, 8599.4, 7995.5)",
    options: [
      "$\\$8411.4$",
      "$\\$13698.225$",
      "$\\$22109.625$",
      "$\\$25678.725$"
    ],
    correctAnswer: 2,
    explanation: "Average for renting cars (2017-2020) = $(14899.9 + 13899.5 + 12003.4 + 13990.1) / 4 = 54792.9 / 4 = 13698.225$.\nAverage for renting trucks (2017-2020) = $(8050.2 + 9000.5 + 8599.4 + 7995.5) / 4 = 33645.6 / 4 = 8411.4$.\nSum of the averages = $13698.225 + 8411.4 = 22109.625$."
  },
  {
    id: "est1_2022_june_q24",
    examId: "EST12022June",
    question: "What is the percentage increase of the amount won for renting trucks from 2015 to 2017?\n(Data: Trucks 2015: 7888.3, Trucks 2017: 8050.2)",
    options: [
      "1.62%",
      "2.01%",
      "2.05%",
      "48.93%"
    ],
    correctAnswer: 2,
    explanation: "The amount won for renting trucks in 2015 was 7888.3 and in 2017 was 8050.2.\nThe increase is $8050.2 - 7888.3 = 161.9$.\nThe percentage increase is $\\frac{161.9}{7888.3} \\times 100 \\approx 2.052\\%$, which corresponds to 2.05%."
  }
];
