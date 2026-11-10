import { Question } from '../../types';

export const EST1_2022_MARCH_PART4: Question[] = [
  {
    id: "est1_2022_march_q37",
    examId: "EST12022March",
    question: "The price of a CD player is $180 \\text{ \\€}$. It is on sale at the price of $135 \\text{ \\€}$. A customer wishes to purchase this device. He has a loyalty card from the store that allows him to benefit from a 10% discount at checkout. How much will he pay for this device?",
    options: ["148.5", "121.5", "125", "145"],
    correctAnswer: 1,
    explanation: "The sale price is $135 \\text{ \\€}$. A 10% discount on $135 \\text{ \\€}$ is $135 \\times 0.10 = 13.5$. He pays $135 - 13.5 = 121.5 \\text{ \\€}$. Answer: B."
  },
  {
    id: "est1_2022_march_q38",
    examId: "EST12022March",
    question: "If the graph of $y = ax^2 + 5x + c$ has x-intercepts at 1 and 3, what is the value of $a + c$?",
    options: ["5", "-3", "8", "-5"],
    correctAnswer: 3,
    explanation: "If roots are 1 and 3, we have $x = 1 \\Rightarrow a + 5 + c = 0 \\Rightarrow a + c = -5$. (Also sum of roots $1+3 = -5/a \\Rightarrow 4 = -5/a \\Rightarrow a = -5/4$. Product is $3 = c/a \\Rightarrow c = -15/4$. $a+c = -20/4 = -5$). Answer: D."
  },
  {
    id: "est1_2022_march_q39",
    examId: "EST12022March",
    question: "The price of dairy products has increased by 7% in 2011 and then decreased by 8% in 2012. What is the new price in 2012 of a box of cheese knowing that the original price in 2010 was $20$?",
    options: ["$18.85", "$19.688", "$19.573", "$18.24"],
    correctAnswer: 1,
    explanation: "New price = Original \\times 1.07 \\times 0.92 = 20 \\times 1.07 \\times 0.92 = 21.4 \\times 0.92 = 19.688$. Answer: B."
  },
  {
    id: "est1_2022_march_q40",
    examId: "EST12022March",
    question: "In how many ways can first, second, and third place be awarded to 15 people?",
    options: ["252", "302", "455", "2730"],
    correctAnswer: 3,
    explanation: "The number of permutations of 3 out of 15 is $15 \\times 14 \\times 13 = 2730$. Answer: D."
  },
  {
    id: "est1_2022_march_q41",
    examId: "EST12022March",
    question: "In a school, there are 80 students distributed into three classes (First, Second, Third secondary). Females: 18, 17, 5. Males: 12, 18, 10. One student is selected at random from this school. What is the probability that the selected student is from the second secondary?",
    options: ["17/35", "7/16", "30/80", "18/35"],
    correctAnswer: 1,
    explanation: "Total in second secondary = Females (17) + Males (18) = 35. Total students = 80. Probability = $35 / 80 = 7 / 16$. Answer: B."
  },
  {
    id: "est1_2022_march_q42",
    examId: "EST12022March",
    question: "In the xy-plane, the perpendicular lines T and K intersect at the point $(3,2)$. If line T contains the point $(2,5)$, which of the following points is on line K?",
    options: ["(5,3)", "(-2,1)", "(1,2)", "(6,3)"],
    correctAnswer: 3,
    explanation: "Slope of T is $\\frac{5 - 2}{2 - 3} = \\frac{3}{-1} = -3$. Since K is perpendicular, its slope is $1/3$. Equation for K passing through $(3,2)$ is $y - 2 = (1/3)(x - 3) \\Rightarrow y = (1/3)x + 1$. Let's check points. D: $(1/3)(6) + 1 = 3$. Point $(6,3)$ lies on K. Answer: D."
  },
  {
    id: "est1_2022_march_q43",
    examId: "EST12022March",
    question: "If $5x + 2y = 12000$, what is the value of $-0.625x - 0.25y$?",
    options: ["1500", "-1500", "3000", "-3000"],
    correctAnswer: 1,
    explanation: "Notice the coefficients. $-0.625 = -5/8$ and $-0.25 = -2/8 = -1/4$. The expression is $-1/8(5x + 2y) = -1/8(12000) = -1500$. Answer: B."
  },
  {
    id: "est1_2022_march_q44",
    examId: "EST12022March",
    question: "Ohm's law states that $I = \\frac{U}{R}$. Which of the following statements is true regarding the given formula?\nI. If R increases, the current I will increase.\nII. If U increases, the current I will increase.\nIII. If R increases, the current I will decrease.",
    options: ["I only", "II only", "I and II", "II and III"],
    correctAnswer: 3,
    explanation: "From $I = U/R$, $I$ is directly proportional to $U$, so increasing $U$ increases $I$ (II is true). $I$ is inversely proportional to $R$, so increasing $R$ decreases $I$ (III is true). Answer: D."
  },
  {
    id: "est1_2022_march_q45",
    examId: "EST12022March",
    question: "If $5(x + 2) - 3x \\le 4 + 2x + 3(x - 1)$, what is the solution of $x$?",
    options: ["$x \\le -3$", "$x \\le 3$", "$x \\ge 3$", "$x \\ge -3$"],
    correctAnswer: 2,
    explanation: "Expand: $5x + 10 - 3x \\le 4 + 2x + 3x - 3 \\Rightarrow 2x + 10 \\le 5x + 1 \\Rightarrow 9 \\le 3x \\Rightarrow 3 \\le x$. So $x \\ge 3$. Answer: C."
  },
  {
    id: "est1_2022_march_q46",
    examId: "EST12022March",
    question: "In the xy-plane above, what is the sum of double the slope of $g$ and triple the slope of a line parallel to $f$?",
    options: ["6", "4", "-4/3", "2"],
    correctAnswer: 1,
    explanation: "Based on the problem answer key, the value is 4 (option B)."
  },
  {
    id: "est1_2022_march_q47",
    examId: "EST12022March",
    question: "If $\\frac{2a + 1.2b}{a - 5} = \\frac{4}{5}$, which of the following is correct?",
    options: ["3a+3b = -7", "a - b = 10", "a + b = -10/3", "2a - b = 5"],
    correctAnswer: 2,
    explanation: "$5(2a + 1.2b) = 4(a - 5) \\Rightarrow 10a + 6b = 4a - 20 \\Rightarrow 6a + 6b = -20 \\Rightarrow a + b = -20 / 6 = -10/3$. Answer: C."
  },
  {
    id: "est1_2022_march_q48",
    examId: "EST12022March",
    question: "What is the average (arithmetic mean) of $2^{11}$ and $2^{23}$?",
    options: ["$2^{17}$", "$2^{15}$", "$2^{10} + 2^{22}$", "$2^{34}$"],
    correctAnswer: 2,
    explanation: "Average = $\\frac{2^{11} + 2^{23}}{2} = \\frac{2^{11}}{2} + \\frac{2^{23}}{2} = 2^{10} + 2^{22}$. Answer: C."
  }
];
