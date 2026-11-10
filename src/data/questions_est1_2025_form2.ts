import { Question } from '../../types';

export const EST1_2025_FORM2_SET: Question[] = [
  {
    id: "est1_2025_f2_32",
    question: "Given the graph of the function f above, which of the following equations correctly represents f(x)? (The graph is a parabola opening upward with vertex at (-2, -3) and passing through (0, 1))",
    options: [
      "f(x) = x^2 - 4x + 1",
      "f(x) = x^2 + 4x + 1",
      "f(x) = x^2 - 4x - 1",
      "f(x) = x^2 + 4x - 1"
    ],
    correctAnswer: 1,
    explanation: "The vertex of the parabola is at $(-2, -3)$. Using the vertex form $f(x) = a(x - h)^2 + k$, we have $f(x) = a(x + 2)^2 - 3$. Since it passes through $(0, 1)$, $1 = a(0 + 2)^2 - 3 \\Rightarrow 4 = 4a \\Rightarrow a = 1$. So $f(x) = (x + 2)^2 - 3 = x^2 + 4x + 4 - 3 = x^2 + 4x + 1$.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f2_33",
    question: "If $P(x) = 10x^3 - mx^2 - 10x + 3$ is divisible by $(2x + 1)$, then $m =$ ",
    options: [
      "12",
      "17",
      "27",
      "32"
    ],
    correctAnswer: 2,
    explanation: "By the Remainder Theorem, if $P(x)$ is divisible by $(2x + 1)$, then $P(-1/2) = 0$. $P(-1/2) = 10(-1/8) - m(1/4) - 10(-1/2) + 3 = -5/4 - m/4 + 5 + 3 = 0 \\Rightarrow -m/4 + 8 - 5/4 = 0 \\Rightarrow -m/4 + 27/4 = 0 \\Rightarrow m = 27$.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f2_34",
    question: "If $3(3x - 4) + 2x = 2(x - 1)$, then $18x - 5 =$ ",
    options: [
      "15",
      "20",
      "25",
      "30"
    ],
    correctAnswer: 0,
    explanation: "Expand the equation: $9x - 12 + 2x = 2x - 2 \\Rightarrow 11x - 12 = 2x - 2 \\Rightarrow 9x = 10 \\Rightarrow x = 10/9$. We need to find $18x - 5 = 18(10/9) - 5 = 2(10) - 5 = 20 - 5 = 15$.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f2_35",
    question: "A bookstore has 120 books. 10% of them are defective. The non-defective books are sold for $40 each, and each defective book is sold for half that price. What is the total amount of money earned from selling all the books?",
    options: [
      "4200",
      "4320",
      "4560",
      "4600"
    ],
    correctAnswer: 2,
    explanation: "Defective books = $10\\%$ of $120 = 12$. Non-defective books = $120 - 12 = 108$. Price of non-defective = $40$. Price of defective = $40 / 2 = 20$. Total earned = $(108 \\times 40) + (12 \\times 20) = 4320 + 240 = 4560$.",
    category: "Problem Solving"
  },
  {
    id: "est1_2025_f2_36",
    question: "If $2^y \\times (9^{x - 3})^{1/2} = 36$, find $xy$",
    options: [
      "2",
      "15",
      "10",
      "20"
    ],
    correctAnswer: 2,
    explanation: "Simplify the expression: $(9^{x - 3})^{1/2} = 9^{(x - 3)/2} = (3^2)^{(x - 3)/2} = 3^{x - 3}$. The equation becomes $2^y \\times 3^{x - 3} = 36$. Prime factorization of $36$ is $2^2 \\times 3^2$. Equating the bases: $y = 2$ and $x - 3 = 2 \\Rightarrow x = 5$. Therefore, $xy = 5 \\times 2 = 10$.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f2_37",
    question: "22% of which number is 88?",
    options: [
      "400",
      "320",
      "50",
      "120"
    ],
    correctAnswer: 0,
    explanation: "Let the number be $x$. $0.22x = 88 \\Rightarrow x = 88 / 0.22 = 400$.",
    category: "Problem Solving"
  },
  {
    id: "est1_2025_f2_38",
    question: "If $2r + 4q = 18$ and $r + 2q = g + 17$, what is the value of $g$?",
    options: [
      "1",
      "5",
      "11",
      "-8"
    ],
    correctAnswer: 3,
    explanation: "Divide the first equation by 2: $r + 2q = 9$. Substitute this into the second equation: $9 = g + 17 \\Rightarrow g = 9 - 17 = -8$.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f2_39",
    question: "There is a graph of an absolute value function $F(x)$ opening downward with vertex at $(0, 3)$. How many solutions does the graph of the given equation $F(x) = -x + 1$ have?",
    options: [
      "1",
      "2",
      "0",
      "3"
    ],
    correctAnswer: 0,
    explanation: "The graph is $F(x) = -|x| + 3$. We need to find the number of intersections with $y = -x + 1$. For $x \\ge 0$, $F(x) = -x + 3$. The lines $y = -x + 3$ and $y = -x + 1$ are parallel, so no intersection. For $x < 0$, $F(x) = x + 3$. Intersection: $x + 3 = -x + 1 \\Rightarrow 2x = -2 \\Rightarrow x = -1$. Since $x = -1$ is in the domain $x < 0$, there is exactly 1 solution.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f2_40",
    question: "A smart watch and a smart pen price equals 377. If the pen price equals 88 and the price of the watch was 15% off, what is the original price of the watch?",
    options: [
      "300",
      "320",
      "340",
      "440"
    ],
    correctAnswer: 2,
    explanation: "Discounted watch price = $377 - 88 = 289$. Let original price be $W$. $W \\times (1 - 0.15) = 289 \\Rightarrow 0.85W = 289 \\Rightarrow W = 289 / 0.85 = 340$.",
    category: "Problem Solving"
  },
  {
    id: "est1_2025_f2_41",
    question: "What is the upper quartile of the data below? 4-4-5-7-8-9-10-20-20-21-24-25",
    options: [
      "15",
      "20",
      "20.5",
      "21"
    ],
    correctAnswer: 2,
    explanation: "There are 12 numbers. The median (Q2) is the average of the 6th and 7th numbers: $(9 + 10) / 2 = 9.5$. The upper half of the data is 10, 20, 20, 21, 24, 25. The upper quartile (Q3) is the median of this upper half, which is the average of the 3rd and 4th numbers in this subset: $(20 + 21) / 2 = 20.5$.",
    category: "Data Analysis"
  }
];
