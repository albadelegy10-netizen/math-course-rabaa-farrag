import { Question } from '../../types';

export const EST1_2022_MARCH_PART5: Question[] = [
  {
    id: "est1_2022_march_q49",
    examId: "EST12022March",
    question: "Sami has a website where he sells books and copybooks. He purchases his books for $\\$10.26$ each and his copybooks for $\\$7.58$ each. Sami pays $\\$1$ to mail each book or copybook to his customers. He charges $\\$19.25$ per book and $\\$11.58$ per copybook plus a postage of $\\$1.25$ per book or copybook. Which of the following represents his profit P, in dollars, on the sale of $x$ books and $y$ copybooks?",
    options: ["P = 10.26x + 7.58y", "P = 8.99x + 4 y", "P = 9.24x + 4.25y", "P = 9.24x + 4y"],
    correctAnswer: 2,
    explanation: "Profit on one book: Revenue = $(19.25 + 1.25) = 20.50$. Cost = $(10.26 + 1.00) = 11.26$. Profit = $20.50 - 11.26 = 9.24$. Profit on one copybook: Revenue = $(11.58 + 1.25) = 12.83$. Cost = $(7.58 + 1.00) = 8.58$. Profit = $12.83 - 8.58 = 4.25$. Total profit $P = 9.24x + 4.25y$. Answer: C."
  },
  {
    id: "est1_2022_march_q50",
    examId: "EST12022March",
    question: "If $x - 2y = 1$, which of the following is always true?",
    options: ["x - y = 1 - y", "x + y = 1 + y", "2x - y = 1 + 3y", "2y - 2x = -x - 1"],
    correctAnswer: 3,
    explanation: "Check the options. From D: $2y - 2x = -x - 1 \\Rightarrow -x - 2y = -1$, wait, $x - 2y = 1$. Add $x$: $2x - 2y = x + 1 \\Rightarrow 2y - 2x = -x - 1$ is equivalent. Oh wait, D is $-2x + x + 2y + 1 = 0 \\Rightarrow -x + 2y = -1 \\Rightarrow x - 2y = 1$. This matches. Let's check D! Answer: D."
  },
  {
    id: "est1_2022_march_q51",
    examId: "EST12022March",
    question: "The sum of triple a number $x$ and 6 is equal to half the difference of twice a number $x$ and 5. What is the value of $(1-4x)$?",
    options: [],
    correctAnswer: "18",
    isGridIn: true,
    explanation: "$3x + 6 = \\frac{1}{2}(2x - 5) \\Rightarrow 3x + 6 = x - 2.5 \\Rightarrow 2x = -8.5 \\Rightarrow x = -4.25$. Then $1 - 4x = 1 - 4(-4.25) = 1 + 17 = 18$. Answer: 18."
  },
  {
    id: "est1_2022_march_q52",
    examId: "EST12022March",
    question: "If $y$ varies directly as the square of $3x$ and $y=16$ when $x=4$, what is $y$ when $x$ is equal to 6?",
    options: [],
    correctAnswer: "36",
    isGridIn: true,
    explanation: "$y = k(3x)^2 = 9kx^2$. $16 = 9k(4^2) = 144k \\Rightarrow k = 16/144 = 1/9$. So $y = \\frac{1}{9}(9x^2) = x^2$. When $x=6$, $y = 6^2 = 36$. Answer: 36."
  },
  {
    id: "est1_2022_march_q53",
    examId: "EST12022March",
    question: "What is the median score? (Bar chart: 40:2, 55:4, 75:6, 80:7, 95:1)",
    options: [],
    correctAnswer: "75",
    isGridIn: true,
    explanation: "Total students = $2 + 4 + 6 + 7 + 1 = 20$. Median is average of 10th and 11th values. 2 students get 40, 4 get 55 (Total: 6). Next 6 get 75 (Totals 7th to 12th). Both 10th and 11th values are 75. Answer: 75."
  },
  {
    id: "est1_2022_march_q54",
    examId: "EST12022March",
    question: "What is the range of the scores?",
    options: [],
    correctAnswer: "55",
    isGridIn: true,
    explanation: "Range = Max score - Min score = $95 - 40 = 55$. Answer: 55."
  },
  {
    id: "est1_2022_march_q55",
    examId: "EST12022March",
    question: "How many students score at least 55?",
    options: [],
    correctAnswer: "18",
    isGridIn: true,
    explanation: "Students scoring 55 or more: 4 (for 55) + 6 (for 75) + 7 (for 80) + 1 (for 95) = 18. Answer: 18."
  },
  {
    id: "est1_2022_march_q56",
    examId: "EST12022March",
    question: "Given that $2(16^x) = 64$, what is the value of $2x$?",
    options: [],
    correctAnswer: "2.5",
    isGridIn: true,
    explanation: "$16^x = 32 \\Rightarrow (2^4)^x = 2^5 \\Rightarrow 4x = 5 \\Rightarrow 2x = 2.5$. Answer: 2.5."
  },
  {
    id: "est1_2022_march_q57",
    examId: "EST12022March",
    question: "If $\\cos(x)\\sin(x) = 1/2$, what is the value of $(\\cos(x) + \\sin(x))^2 + 16 \\sin(2x)$?",
    options: [],
    correctAnswer: "18",
    isGridIn: true,
    explanation: "$(\\cos x + \\sin x)^2 = \\cos^2 x + \\sin^2 x + 2\\cos x\\sin x = 1 + 2(1/2) = 2$. Next $16 \\sin(2x) = 16 (2\\cos(x)\\sin(x)) = 16 (1) = 16$. Sum is $2 + 16 = 18$. Answer: 18."
  },
  {
    id: "est1_2022_march_q58",
    examId: "EST12022March",
    question: "The formula for speed is speed = distance / time. If a girl cycles for 2.3 hours at a speed of 42 km/h, what distance does she travel?",
    options: [],
    correctAnswer: "96.6",
    isGridIn: true,
    explanation: "distance = speed * time = $42 \\times 2.3 = 96.6$. Answer: 96.6."
  }
];
