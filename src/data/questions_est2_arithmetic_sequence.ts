import { Question } from '../../types';

export const EST2_ARITHMETIC_SEQUENCE_SET: Question[] = [
  {
    id: "est2_arith_1",
    question: "How many terms are there in the sequence $4, 8, 12, \\ldots, 2020$?",
    type: "multiple-choice",
    options: ["$505$", "$504$", "$510$", "$503$", "$700$"],
    correctAnswer: 0,
    explanation: "The given sequence is an arithmetic sequence with $a_1 = 4$ and common difference $d = 8 - 4 = 4$.\nThe $n^{\\text{th}}$ term is given by $a_n = a_1 + (n - 1)d$.\n$2020 = 4 + (n - 1)4$\n$2016 = 4(n - 1)$\n$n - 1 = 504$\n$n = 505$"
  },
  {
    id: "est2_arith_2",
    question: "How many terms are there in the sequence $4, 8, 12, \\ldots, 2020$?",
    type: "multiple-choice",
    options: ["$505$", "$504$", "$510$", "$503$", "$700$"],
    correctAnswer: 0,
    explanation: "This is a duplicate of the previous question. $a_n = a_1 + (n - 1)d \\Rightarrow 2020 = 4 + (n - 1)4 \\Rightarrow n = 505$."
  },
  {
    id: "est2_arith_3",
    question: "$U_n$ is a sequence such that $U_0 = 2$ and $U_{n+1} = (U_n - 3)^2$. What is the value of $U_2$?",
    type: "multiple-choice",
    options: ["$-4$", "$4$", "$2$", "$0$", "$6$"],
    correctAnswer: 1,
    explanation: "$U_0 = 2$\n$U_1 = (U_0 - 3)^2 = (2 - 3)^2 = (-1)^2 = 1$\n$U_2 = (U_1 - 3)^2 = (1 - 3)^2 = (-2)^2 = 4$"
  },
  {
    id: "est2_arith_4",
    question: "What is the $30^{\\text{th}}$ term of the following arithmetic sequence: $1, 2.5, 4, \\ldots$ ?",
    type: "multiple-choice",
    options: ["$40$", "$41.5$", "$43$", "$44.5$", "$46$"],
    correctAnswer: 3,
    explanation: "$a_1 = 1$\n$d = 2.5 - 1 = 1.5$\n$a_{30} = a_1 + (30 - 1)d = 1 + 29(1.5) = 1 + 43.5 = 44.5$"
  },
  {
    id: "est2_arith_5",
    question: "Three numbers have a sum of $36$, a product of $1680$, and form an arithmetic sequence. What is the largest number?",
    type: "multiple-choice",
    options: ["$10$", "$12$", "$14$", "$16$", "$18$"],
    correctAnswer: 2,
    explanation: "Let the three numbers be $a-d, a, a+d$.\nSum: $(a-d) + a + (a+d) = 3a = 36 \\Rightarrow a = 12$.\nProduct: $(12-d)(12)(12+d) = 1680 \\Rightarrow 12(144 - d^2) = 1680 \\Rightarrow 144 - d^2 = 140 \\Rightarrow d^2 = 4 \\Rightarrow d = 2$ (assuming $d > 0$ for sequence ordering).\nThe numbers are $10, 12, 14$. The largest is $14$."
  },
  {
    id: "est2_arith_6",
    question: "$2k, 3k + 1$, and $22$ are the consecutive terms of an arithmetic sequence. What is the value of $k$?",
    type: "multiple-choice",
    options: ["$-10$", "$-1$", "$5$", "$10$", "$16$"],
    correctAnswer: 2,
    explanation: "The difference between consecutive terms is constant: $(3k + 1) - 2k = 22 - (3k + 1)$.\n$k + 1 = 21 - 3k$\n$4k = 20 \\Rightarrow k = 5$."
  },
  {
    id: "est2_arith_7",
    question: "In the arithmetic progression $\\{a_n\\}, a_2 = 50$ and $a_4 = 44$. Which is the first term that is a negative number?",
    type: "multiple-choice",
    options: ["$17^{\\text{th}}$", "$18^{\\text{th}}$", "$19^{\\text{th}}$", "$20^{\\text{th}}$", "$21^{\\text{st}}$"],
    correctAnswer: 2,
    explanation: "$a_4 - a_2 = 2d \\Rightarrow 44 - 50 = 2d \\Rightarrow -6 = 2d \\Rightarrow d = -3$.\n$a_1 = a_2 - d = 50 - (-3) = 53$.\nWe want $a_n < 0 \\Rightarrow a_1 + (n-1)d < 0 \\Rightarrow 53 + (n-1)(-3) < 0$.\n$53 - 3n + 3 < 0 \\Rightarrow 56 < 3n \\Rightarrow n > 18.66$.\nThe first integer $n$ is $19$."
  },
  {
    id: "est2_arith_8",
    question: "If three numbers $\\log a, \\log b$, and $\\log c$ in that order form an arithmetic progression, which of the following is true?",
    type: "multiple-choice",
    options: ["$b = ac$", "$c = ab$", "$b = \\frac{a+c}{2}$", "$b^2 = ac$", "$b^2 = a+c$"],
    correctAnswer: 3,
    explanation: "If they form an arithmetic progression, then $\\log b - \\log a = \\log c - \\log b$.\n$\\log\\left(\\frac{b}{a}\\right) = \\log\\left(\\frac{c}{b}\\right)$\n$\\frac{b}{a} = \\frac{c}{b} \\Rightarrow b^2 = ac$."
  },
  {
    id: "est2_arith_9",
    question: "If $a_1 = 1, a_2 = 3$, and $a_{n+1} = \\frac{a_n + a_{n+2}}{2}$, then what is the $20^{\\text{th}}$ term of this sequence?",
    type: "multiple-choice",
    options: ["$36$", "$39$", "$41$", "$43$", "$60$"],
    correctAnswer: 1,
    explanation: "The given condition $2a_{n+1} = a_n + a_{n+2}$ means the sequence is arithmetic.\n$d = a_2 - a_1 = 3 - 1 = 2$.\n$a_{20} = a_1 + 19d = 1 + 19(2) = 39$."
  },
  {
    id: "est2_arith_10",
    question: "James adds to an oil tank $10$ liters on day $1$, then every day he adds $50\\%$ the amount he filled the day before. After $1000$ days, how much oil is there approximately in the tank?",
    type: "multiple-choice",
    options: ["$40$", "$50$", "$20$", "$65$"],
    correctAnswer: 2,
    explanation: "This is a geometric series with $a = 10$ and $r = 0.5$.\nThe sum of an infinite geometric series is $S = \\frac{a}{1 - r} = \\frac{10}{1 - 0.5} = 20$ liters."
  },
  {
    id: "est2_arith_11",
    question: "$17$ is subtracted from the sum of all integers from $1$ to $44$. What is the result?",
    type: "multiple-choice",
    options: ["$973$", "$939$", "$5923$", "$2953$"],
    correctAnswer: 0,
    explanation: "The sum of all integers from $1$ to $44$ is $S = \\frac{44}{2}(1 + 44) = 22(45) = 990$.\nSubtracting $17$ from this sum gives $990 - 17 = 973$."
  },
  {
    id: "est2_arith_12",
    question: "A sequence is defined as $a_1 = 1$ and $a_{n+1} = a_n + 3$. Which of the following is the $n^{\\text{th}}$ term of this sequence?",
    type: "multiple-choice",
    options: ["$3n - 2$", "$4n - 3$", "$5n - 4$", "$6n - 5$", "$n^2 - n + 1$"],
    correctAnswer: 0,
    explanation: "The sequence is arithmetic with $a_1 = 1$ and $d = 3$.\n$a_n = a_1 + (n - 1)d = 1 + (n - 1)3 = 1 + 3n - 3 = 3n - 2$."
  },
  {
    id: "est2_arith_13",
    question: "If the $11^{\\text{th}}$ term of an arithmetic sequence is $30$ and the $21^{\\text{st}}$ term is $0$, what is the $10^{\\text{th}}$ term of the sequence?",
    type: "multiple-choice",
    options: ["$30$", "$33$", "$36$", "$39$", "$42$"],
    correctAnswer: 1,
    explanation: "$a_{11} = a_1 + 10d = 30$ and $a_{21} = a_1 + 20d = 0$.\nSubtracting the first from the second gives $10d = -30 \\Rightarrow d = -3$.\n$a_{10} = a_{11} - d = 30 - (-3) = 33$."
  },
  {
    id: "est2_arith_14",
    question: "In the arithmetic progression, the first term is $5$ and the common difference is $3$. What is the sum of the first $20$ terms?",
    type: "multiple-choice",
    options: ["$300$", "$475$", "$670$", "$850$", "$925$"],
    correctAnswer: 2,
    explanation: "$a_1 = 5, d = 3$.\n$a_{20} = a_1 + 19d = 5 + 19(3) = 5 + 57 = 62$.\n$S_{20} = \\frac{20}{2}(a_1 + a_{20}) = 10(5 + 62) = 10(67) = 670$."
  },
  {
    id: "est2_arith_15",
    question: "$2k, 3k + 1$, and $22$ are the consecutive terms of an arithmetic sequence. What is the value of $k$?",
    type: "multiple-choice",
    options: ["$-10$", "$-1$", "$5$", "$10$", "$16$"],
    correctAnswer: 2,
    explanation: "$(3k + 1) - 2k = 22 - (3k + 1) \\Rightarrow k + 1 = 21 - 3k \\Rightarrow 4k = 20 \\Rightarrow k = 5$."
  },
  {
    id: "est2_arith_16",
    question: "If three numbers $\\log a, \\log b$, and $\\log c$ in that order form an arithmetic progression, which of the following is true?",
    type: "multiple-choice",
    options: ["$b = ac$", "$c = ab$", "$b = \\frac{a+c}{2}$", "$b^2 = ac$", "$b^2 = a+c$"],
    correctAnswer: 3,
    explanation: "If they form an arithmetic progression, then $\\log b - \\log a = \\log c - \\log b \\Rightarrow \\log\\left(\\frac{b}{a}\\right) = \\log\\left(\\frac{c}{b}\\right) \\Rightarrow \\frac{b}{a} = \\frac{c}{b} \\Rightarrow b^2 = ac$."
  },
  {
    id: "est2_arith_17",
    question: "Find the eighth term of the arithmetic sequence whose first term is $4$ and whose common difference is $-7$.",
    type: "fill-in-the-blank",
    options: [],
    answerText: "-45",
    explanation: "$a_n = a_1 + (n-1)d$\n$a_8 = 4 + (8-1)(-7) = 4 + 7(-7) = 4 - 49 = -45$"
  },
  {
    id: "est2_arith_18",
    question: "A sequence is defined as $a_1 = 1$ and $a_{n+1} = a_n + 3$. Which of the following is the $n^{\\text{th}}$ term of this sequence?",
    type: "multiple-choice",
    options: ["$3n - 2$", "$4n - 3$", "$5n - 4$", "$6n - 5$", "$n^2 - n + 1$"],
    correctAnswer: 0,
    explanation: "This is an arithmetic sequence with $a_1=1$ and $d=3$. $a_n = a_1 + (n-1)d = 1 + (n-1)3 = 3n - 2$."
  },
  {
    id: "est2_arith_19",
    question: "How many terms are there in the sequence $4, 8, 12, \\ldots, 2020$?",
    type: "multiple-choice",
    options: ["$505$", "$304$", "$510$", "$503$", "$700$"],
    correctAnswer: 0,
    explanation: "$a_n = a_1 + (n-1)d \\Rightarrow 2020 = 4 + (n-1)4 \\Rightarrow 2016 = 4(n-1) \\Rightarrow n-1 = 504 \\Rightarrow n = 505$."
  },
  {
    id: "est2_arith_20",
    question: "If $x-4, x$, and $x+4$ are the first three terms of an arithmetic sequence, then what is the fifth term of the sequence?",
    type: "multiple-choice",
    options: ["$x$", "$x-4$", "$x+8$", "$x+12$", "$4$"],
    correctAnswer: 3,
    explanation: "The common difference $d = x - (x-4) = 4$.\n$a_5 = a_1 + 4d = (x-4) + 4(4) = (x-4) + 16 = x + 12$."
  },
  {
    id: "est2_arith_21",
    question: "If the $11^{\\text{th}}$ term of an arithmetic sequence is $30$ and the $21^{\\text{st}}$ term is $0$, what is the $10^{\\text{th}}$ term of the arithmetic sequence?",
    type: "multiple-choice",
    options: ["$30$", "$33$", "$36$", "$39$", "$42$"],
    correctAnswer: 1,
    explanation: "$a_{11} = 30$, $a_{21} = 0$. $10d = a_{21} - a_{11} = -30 \\Rightarrow d = -3$.\n$a_{10} = a_{11} - d = 30 - (-3) = 33$."
  },
  {
    id: "est2_arith_22",
    question: "In the arithmetic progression $\\{a_n\\}, a_2 = 50$ and $a_4 = 44$. Which is the first term that is a negative number?",
    type: "multiple-choice",
    options: ["$17^{\\text{th}}$", "$18^{\\text{th}}$", "$19^{\\text{th}}$", "$20^{\\text{th}}$", "$21^{\\text{st}}$"],
    correctAnswer: 2,
    explanation: "$2d = a_4 - a_2 = 44 - 50 = -6 \\Rightarrow d = -3$.\n$a_1 = a_2 - d = 50 - (-3) = 53$.\nWe need $a_n < 0 \\Rightarrow 53 + (n-1)(-3) < 0 \\Rightarrow 56 < 3n \\Rightarrow n > 18.66$.\nThe first term is the $19^{\\text{th}}$."
  },
  {
    id: "est2_arith_23",
    question: "Find the sum of the first $100$ terms of the arithmetic sequence: $1, 3, 5, 7, \\ldots$",
    type: "fill-in-the-blank",
    options: [],
    answerText: "10000",
    explanation: "$a_1 = 1, d = 2$. $a_{100} = 1 + 99(2) = 199$.\n$S_{100} = \\frac{100}{2}(a_1 + a_{100}) = 50(1 + 199) = 50(200) = 10000$.\n(Also, the sum of the first $n$ odd integers is $n^2$, so $100^2 = 10000$)."
  },
  {
    id: "est2_arith_24",
    question: "If the sum of the first $n$ terms of a series is $S_n = n^2 + 4n$ then what is the $10^{\\text{th}}$ term?",
    type: "multiple-choice",
    options: ["$23$", "$40$", "$85$", "$125$", "$140$"],
    correctAnswer: 0,
    explanation: "The $n^{\\text{th}}$ term is given by $a_n = S_n - S_{n-1}$.\n$S_{10} = 10^2 + 4(10) = 100 + 40 = 140$.\n$S_9 = 9^2 + 4(9) = 81 + 36 = 117$.\n$a_{10} = S_{10} - S_9 = 140 - 117 = 23$."
  },
  {
    id: "est2_arith_25",
    question: "Find the sum of all multiples of $3$ from $3$ to $333$.",
    type: "fill-in-the-blank",
    options: [],
    answerText: "18648",
    explanation: "This is an arithmetic sequence with $a_1 = 3, a_n = 333$, and $d = 3$.\nThe number of terms is $n = \\frac{333}{3} = 111$.\n$S = \\frac{n}{2}(a_1 + a_n) = \\frac{111}{2}(3 + 333) = \\frac{111}{2}(336) = 111 \\times 168 = 18648$."
  },
  {
    id: "est2_arith_26",
    question: "If $4n + 1, 6n$, and $7n + 2$ are the first three terms of an arithmetic sequence, what is the sum of the first $20$ terms of the sequence?",
    type: "multiple-choice",
    options: ["$108$", "$605$", "$830$", "$1210$", "$2420$"],
    correctAnswer: 3,
    explanation: "$6n - (4n + 1) = (7n + 2) - 6n \\Rightarrow 2n - 1 = n + 2 \\Rightarrow n = 3$.\nThe terms are: $4(3)+1 = 13$, $6(3) = 18$, $7(3)+2 = 23$.\nThis is an arithmetic sequence with $a_1 = 13$ and $d = 5$.\n$a_{20} = 13 + 19(5) = 13 + 95 = 108$.\n$S_{20} = \\frac{20}{2}(a_1 + a_{20}) = 10(13 + 108) = 10(121) = 1210$."
  }
];
