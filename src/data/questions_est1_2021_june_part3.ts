import { Question } from '../../types';

export const EST1_2021_JUNE_PART3: Question[] = [
  {
    id: "est1_2021_june_q25",
    examId: "EST12021June",
    question: "A survey is done on 80 families from two cities A and B, separated into groups based on the number of cars they own. The results are shown in the table below.\n\n| Number of cars | City A | City B |\n| :--- | :--- | :--- |\n| 1 | 25 | 20 |\n| 2 | 31 | 19 |\n| 3 | 14 | 23 |\n| 4 | 8 | 12 |\n| 5 | 2 | 6 |\n\nWhich measure of center is unchanged in both cities?",
    options: [
      "Mode",
      "Mean",
      "Median",
      "None of the above"
    ],
    correctAnswer: 3,
    explanation: "For City A: The mode is 2 (31 families). The median is the average of 40th and 41st value, which falls in 2. The mean is $(25+62+42+32+10)/80 = 171/80 = 2.1375$.\nFor City B: The mode is 3 (23 families). The median is in position 40 and 41, which is $(19+20=39$, so 40 and 41 are in 3$)$. Median is 3. The mean is $(20+38+69+48+30)/80 = 205/80 = 2.5625$.\nNone of the measures of center (Mode, Mean, Median) are unchanged. Hence, None of the above."
  },
  {
    id: "est1_2021_june_q26",
    examId: "EST12021June",
    question: "If $f(x) = -3 - 2x$ and $g(x) = -\\frac{x^2}{6}$, Which of the following could not be in the range of $f(g(x))$?",
    options: [
      "-4",
      "-2",
      "0",
      "2"
    ],
    correctAnswer: 0,
    explanation: "Compose the functions: $f(g(x)) = f(-\\frac{x^2}{6}) = -3 - 2(-\\frac{x^2}{6}) = -3 + \\frac{x^2}{3}$.\nSince $x^2 \\ge 0$, we have $\\frac{x^2}{3} \\ge 0$.\nTherefore, $f(g(x)) \\ge -3$.\nAny value less than -3 cannot be in the range. From the options, -4 cannot be in the range."
  },
  {
    id: "est1_2021_june_q27",
    examId: "EST12021June",
    question: "A shop sells two sizes of doughnuts: mini and regular. Mini doughnuts have a diameter of 1.8 inches while regular ones have a diameter of 3 inches. Approximately, by what percentage is a regular normal doughnut larger (in area) than a mini doughnut?",
    options: [
      "67%",
      "67\\pi%",
      "78%",
      "178%"
    ],
    correctAnswer: 3,
    explanation: "Area of a circle is proportional to the square of its diameter. The ratio of their areas is $\\left(\\frac{3}{1.8}\\right)^2 = \\left(\\frac{30}{18}\\right)^2 = \\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9} \\approx 2.777$.\nThis means the area of the regular doughnut is 277.8% of the mini doughnut.\nThe percentage by which it is *larger* is $277.8\\% - 100\\% = 177.8\\%$, which is approximately $178\\%$."
  },
  {
    id: "est1_2021_june_q28",
    examId: "EST12021June",
    question: "Line (A) passes through the points $(-\\frac{5}{3}, 0)$ and $(0, -\\frac{2}{3})$. Which of the following lines will never intersect with line (A)?",
    options: [
      "$y = -\\frac{5}{2}x - 1$",
      "$y = \\frac{5}{2}x - 1$",
      "$y = -\\frac{2}{5}x - 1$",
      "$y = \\frac{2}{5}x - 1$"
    ],
    correctAnswer: 2,
    explanation: "A line that never intersects with line (A) must be parallel to it, which means it must have the same slope. The slope of line (A) is $m = \\frac{-\\frac{2}{3} - 0}{0 - (-\\frac{5}{3})} = \\frac{-\\frac{2}{3}}{\\frac{5}{3}} = -\\frac{2}{5}$. Therefore, any distinct line with a slope of $-\\frac{2}{5}$ will never intersect line (A)."
  },
  {
    id: "est1_2021_june_q29",
    examId: "EST12021June",
    question: "$\\begin{cases} 2x + 15y = 18 \\\\ kx - 5y = -7 \\end{cases}$\n\nWhat is the value of $k$ if the above system of simultaneous equations admits no solutions?",
    options: [
      "$-\\frac{1}{3}$",
      "-6",
      "$-\\frac{2}{3}$",
      "$\\frac{2}{3}$"
    ],
    correctAnswer: 2,
    explanation: "For the system to have no solutions, the related lines must be parallel (same slope) but have different y-intercepts. The ratio of the $x$ coefficients must equal the ratio of the $y$ coefficients.\n$\\frac{k}{2} = \\frac{-5}{15} = -\\frac{1}{3}$.\n$k = 2 \\times (-\\frac{1}{3}) = -\\frac{2}{3}$."
  },
  {
    id: "est1_2021_june_q30",
    examId: "EST12021June",
    question: "An oven costs $\\$150$ less than 4 times the cost of a microwave. If the oven and the microwave cost together $\\$725$, how much more does the oven cost than the microwave?",
    options: [
      "$\\$175$",
      "$\\$275$",
      "$\\$375$",
      "$\\$550$"
    ],
    correctAnswer: 2,
    explanation: "Let the cost of the microwave be $M$. The cost of the oven is $O = 4M - 150$.\nThe total cost is $O + M = 725$.\nSubstitute $O$: $(4M - 150) + M = 725 \\implies 5M - 150 = 725 \\implies 5M = 875 \\implies M = 175$.\nThe cost of the microwave is $\\$175$. The cost of the oven is $725 - 175 = 550$.\nThe question asks how much *more* the oven costs than the microwave: $550 - 175 = 375$."
  },
  {
    id: "est1_2021_june_q31",
    examId: "EST12021June",
    question: "From 2020 to 2021, the amount in Tom’s bank account decreased by 11% to $\\$49840$. What was the initial amount in his bank account?",
    options: [
      "$\\$54820$",
      "$\\$44358$",
      "$\\$56000$",
      "$\\$45309$"
    ],
    correctAnswer: 2,
    explanation: "Let the initial amount be $A$. A decrease by $11\\%$ leaves $89\\%$ of the initial amount.\n$0.89A = 49840$.\n$A = \\frac{49840}{0.89} = 56000$."
  },
  {
    id: "est1_2021_june_q32",
    examId: "EST12021June",
    question: "$(4x + 1)^2 - 9x^2 = 0$\n\nWhat is the absolute value of the difference between the two roots of the above equation?",
    options: [
      "$\\frac{8}{65}$",
      "$\\frac{6}{7}$",
      "$\\frac{1}{4}$",
      "$\\frac{3}{14}$"
    ],
    correctAnswer: 1,
    explanation: "This is a difference of two squares: $(4x + 1)^2 - (3x)^2 = 0$.\n$((4x + 1) - 3x)((4x + 1) + 3x) = 0$.\n$(x + 1)(7x + 1) = 0$.\nThe roots are $x = -1$ and $x = -\\frac{1}{7}$.\nThe absolute difference is $|-\\frac{1}{7} - (-1)| = |-\\frac{1}{7} + \\frac{7}{7}| = \\frac{6}{7}$."
  },
  {
    id: "est1_2021_june_q33",
    examId: "EST12021June",
    question: "The table below summarizes the results of a survey about the favorite school subject for a group of 350 students according to their educational stage.\n\n| | Primary | Secondary | Tertiary | Total |\n| :--- | :--- | :--- | :--- | :--- |\n| Math | 65 | 80 | 30 | 175 |\n| English | 35 | 55 | 10 | 100 |\n| Science | 15 | 10 | 25 | 50 |\n| History | 10 | 5 | 10 | 25 |\n| Total | 125 | 150 | 75 | 350 |\n\nAccording to the data, which subject had the lowest percentage of likers among primary students?",
    options: [
      "Math",
      "English",
      "Science",
      "History"
    ],
    correctAnswer: 3,
    explanation: "Look at the column for Primary students. The total number of primary students is 125.\nMath: 65, English: 35, Science: 15, History: 10.\nThe lowest number represents the lowest percentage, which is History (10 out of 125)."
  },
  {
    id: "est1_2021_june_q34",
    examId: "EST12021June",
    question: "The table below summarizes the results of a survey about the favorite school subject for a group of 350 students according to their educational stage.\n\n| | Primary | Secondary | Tertiary | Total |\n| :--- | :--- | :--- | :--- | :--- |\n| Math | 65 | 80 | 30 | 175 |\n| English | 35 | 55 | 10 | 100 |\n| Science | 15 | 10 | 25 | 50 |\n| History | 10 | 5 | 10 | 25 |\n| Total | 125 | 150 | 75 | 350 |\n\nIf a secondary student is chosen randomly, what is the probability that he favors Math or Science?",
    options: [
      "$\\frac{9}{35}$",
      "$\\frac{18}{25}$",
      "$\\frac{8}{15}$",
      "$\\frac{3}{5}$"
    ],
    correctAnswer: 3,
    explanation: "The total number of secondary students is 150 (the denominator).\nThe number of secondary students favoring Math is 80.\nThe number of secondary students favoring Science is 10.\nThe probability is $\\frac{80 + 10}{150} = \\frac{90}{150} = \\frac{3}{5}$."
  },
  {
    id: "est1_2021_june_q35",
    examId: "EST12021June",
    question: "Given a cone whose height is the quadruple of its diameter. If the volume of the cone is $72\\pi$, what is the diameter of its base?",
    options: [
      "4",
      "5",
      "6",
      "9"
    ],
    correctAnswer: 2,
    explanation: "Let the diameter be $d$. The radius is $r = \\frac{d}{2}$. The height is $h = 4d$.\nThe volume of a cone is $V = \\frac{1}{3}\\pi r^2 h$.\nSubstitute known values: $72\\pi = \\frac{1}{3}\\pi (\\frac{d}{2})^2 (4d)$.\n$72 = \\frac{1}{3} \\cdot \\frac{d^2}{4} \\cdot 4d = \\frac{d^3}{3}$.\n$d^3 = 72 \\times 3 = 216$.\n$d = \\sqrt[3]{216} = 6$."
  },
  {
    id: "est1_2021_june_q36",
    examId: "EST12021June",
    question: "If $11x - 7y = 6$ and $17x - 13y = 9$, what is the value of $x - y$?",
    options: [
      "0",
      "$-\\frac{1}{2}$",
      "$\\frac{1}{2}$",
      "-2"
    ],
    correctAnswer: 2,
    explanation: "Subtract the first equation from the second equation:\n$(17x - 13y) - (11x - 7y) = 9 - 6$\n$6x - 6y = 3$\nDivide by 6:\n$x - y = \\frac{3}{6} = \\frac{1}{2}$."
  }
];
