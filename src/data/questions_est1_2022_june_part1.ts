import { Question } from '../../types';

export const EST1_2022_JUNE_PART1: Question[] = [
  {
    id: "est1_2022_june_q1",
    examId: "EST12022June",
    question: "Given $2x + y = 8$ and $3y + x = -1$. What is the value of $y - 2x$?",
    options: [
      "-16",
      "-12",
      "-8",
      "8"
    ],
    correctAnswer: 1,
    explanation: "From the first equation, $y = 8 - 2x$. Substitute this into the second equation: $3(8 - 2x) + x = -1 \\implies 24 - 6x + x = -1 \\implies 24 - 5x = -1 \\implies 5x = 25 \\implies x = 5$.\nNow, substitute $x=5$ back to find $y$: $y = 8 - 2(5) = -2$.\nFinally, calculate $y - 2x = -2 - 2(5) = -12$."
  },
  {
    id: "est1_2022_june_q2",
    examId: "EST12022June",
    question: "What is the slope of the line represented in the graph above? (The graph shows a line passing through $(-3, 0)$ and $(0, 2)$)",
    options: [
      "2",
      "$\\frac{3}{2}$",
      "1",
      "$\\frac{2}{3}$"
    ],
    correctAnswer: 3,
    explanation: "The slope $m$ of a line passing through points $(x_1, y_1)$ and $(x_2, y_2)$ is given by $m = \\frac{y_2 - y_1}{x_2 - x_1}$.\nUsing the points $(-3, 0)$ and $(0, 2)$, the slope is $m = \\frac{2 - 0}{0 - (-3)} = \\frac{2}{3}$."
  },
  {
    id: "est1_2022_june_q3",
    examId: "EST12022June",
    question: "In a company, the total cost, in dollars, of the production of a certain product $x$ is given by $C(x) = \\frac{1}{3}x^3 - 15x^2 + 2000x$. The profit made out of selling this product is given by $P(x) = -\\frac{1}{3}x^3 + \\frac{79}{3}x^2 + 1500x$. If $R(x)$ indicates the revenue made out of selling this product, and the relationship between the cost, the revenue, and the profit is represented by $P(x) = R(x) - C(x)$, which of the following expressions is equivalent to $R(x)$?",
    options: [
      "$R(x) = \\frac{64}{3}x^2 + 3500x$",
      "$R(x) = \\frac{34}{3}x^2 + 3500x$",
      "$R(x) = -\\frac{2}{3}x^3 + \\frac{64}{3}x^2 + 3500x$",
      "$R(x) = -\\frac{2}{3}x^3 + \\frac{124}{3}x^2 - 500x$"
    ],
    correctAnswer: 1,
    explanation: "Since $P(x) = R(x) - C(x)$, we have $R(x) = P(x) + C(x)$.\n$R(x) = \\left(-\\frac{1}{3}x^3 + \\frac{79}{3}x^2 + 1500x\\right) + \\left(\\frac{1}{3}x^3 - 15x^2 + 2000x\\right)$.\nCombine like terms:\n$x^3$ terms: $-\\frac{1}{3}x^3 + \\frac{1}{3}x^3 = 0$.\n$x^2$ terms: $\\frac{79}{3}x^2 - 15x^2 = \\frac{79}{3}x^2 - \\frac{45}{3}x^2 = \\frac{34}{3}x^2$.\n$x$ terms: $1500x + 2000x = 3500x$.\nSo, $R(x) = \\frac{34}{3}x^2 + 3500x$."
  },
  {
    id: "est1_2022_june_q4",
    examId: "EST12022June",
    question: "In Egypt, a tourist can travel a distance of $5\\text{ km}$ with just $15.57\\text{ EGP}$. Pedro needed to go to “San Pola” hospital in Cairo. He took a taxi from “Al Marazeek” bridge, which is approximately $35\\text{ km}$ away from the hospital. How much will Pedro pay for the driver, knowing that he gave him $10$ extra EGP as tips?",
    options: [
      "554.95 EGP",
      "477.1 EGP",
      "118.99 EGP",
      "109.09 EGP"
    ],
    correctAnswer: 2,
    explanation: "The journey is $35\\text{ km}$, which is $7$ times the distance of $5\\text{ km}$.\nThe base cost of the ride is $7 \\times 15.57 = 108.99\\text{ EGP}$.\nAdding the an extra $10\\text{ EGP}$ for tip gives $108.99 + 10 = 118.99\\text{ EGP}$."
  },
  {
    id: "est1_2022_june_q5",
    examId: "EST12022June",
    question: "The sum of three consecutive integers is 24. What is the product of the two greatest integers between them all?",
    options: [
      "27",
      "56",
      "72",
      "504"
    ],
    correctAnswer: 2,
    explanation: "Let the three consecutive integers be $x$, $x+1$, and $x+2$.\nTheir sum is $x + (x+1) + (x+2) = 24 \\implies 3x + 3 = 24 \\implies 3x = 21 \\implies x = 7$.\nThe three integers are 7, 8, and 9.\nThe two greatest integers are 8 and 9. Their product is $8 \\times 9 = 72$."
  },
  {
    id: "est1_2022_june_q6",
    examId: "EST12022June",
    question: "The impulsive force ($f$) derives from impulse, and it is a big force acting for a small interval of time. It is like having a truck travelling at a full speed, and suddenly crashing a garden’s gate because the driver did not pay attention to it. It can be represented by $f = m \\frac{v_f - v_i}{t}$, with $m$ the mass of the body, $v_f$ the final velocity, $v_i$ the initial velocity, and $t$ the time interval through which the force is applied. Which of the following represents $v_i$ in terms of $f$, $m$, $t$, and $v_f$?",
    options: [
      "$v_i = v_f - \\frac{ft}{m}$",
      "$v_i = v_f + \\frac{ft}{m}$",
      "$v_i = v_f - \\frac{fm}{t}$",
      "$v_i = v_f + \\frac{fm}{t}$"
    ],
    correctAnswer: 0,
    explanation: "We are given $f = m \\frac{v_f - v_i}{t}$.\nMultiply both sides by $t$: $ft = m(v_f - v_i)$.\nDivide both sides by $m$: $\\frac{ft}{m} = v_f - v_i$.\nIsolate $v_i$: $v_i = v_f - \\frac{ft}{m}$."
  },
  {
    id: "est1_2022_june_q7",
    examId: "EST12022June",
    question: "“Unou House”, located in Japan and built between 2010 and 2012, features a house with a floor of triangular shape and can be considered as an isosceles triangle. The area of the triangular floor is approximately $84\\text{ m}^2$. If we consider that the base of this triangle is $12\\text{ m}$, what is the dimension of one of the equal sides in this triangle?",
    options: [
      "$\\sqrt{193}\\text{ m}$",
      "$2\\sqrt{58}\\text{ m}$",
      "$14\\text{ m}$",
      "$170\\text{ m}$"
    ],
    correctAnswer: 1,
    explanation: "The area of a triangle is $A = \\frac{1}{2}bh$. Given $A = 84$ and $b = 12$:\n$84 = \\frac{1}{2}(12)h \\implies 84 = 6h \\implies h = 14\\text{ m}$.\nIn an isosceles triangle, the altitude bisects the base. So, it forms a right triangle with legs $\\frac{b}{2} = 6$ and $h = 14$. The hypotenuse is one of the equal sides, let's call it $s$.\nUsing Pythagorean theorem:\n$s^2 = 6^2 + 14^2 = 36 + 196 = 232$.\n$s = \\sqrt{232} = \\sqrt{4 \\times 58} = 2\\sqrt{58}\\text{ m}$."
  },
  {
    id: "est1_2022_june_q8",
    examId: "EST12022June",
    question: "If $x = \\sqrt{2} + 3$, what is the value of $2x^2 + 3x - 1$?",
    options: [
      "$5\\sqrt{2} + 14$",
      "$3\\sqrt{2} + 30$",
      "$3\\sqrt{2} + 24$",
      "$15\\sqrt{2} + 30$"
    ],
    correctAnswer: 3,
    explanation: "First, find $x^2$: $x^2 = (\\sqrt{2} + 3)^2 = 2 + 6\\sqrt{2} + 9 = 11 + 6\\sqrt{2}$.\nNow substitute $x$ and $x^2$ into the expression:\n$2(11 + 6\\sqrt{2}) + 3(\\sqrt{2} + 3) - 1$\n$= 22 + 12\\sqrt{2} + 3\\sqrt{2} + 9 - 1$\n$= (22 + 9 - 1) + (12\\sqrt{2} + 3\\sqrt{2})$\n$= 30 + 15\\sqrt{2}$."
  },
  {
    id: "est1_2022_june_q9",
    examId: "EST12022June",
    question: "If $4^{2x+4} = 16$, what is the value of $4^{3x}$?",
    options: [
      "$\\frac{1}{64}$",
      "64",
      "4096",
      "$\\frac{1}{4096}$"
    ],
    correctAnswer: 0,
    explanation: "Write $16$ as a power of $4$: $16 = 4^2$.\nSo, $4^{2x+4} = 4^2 \\implies 2x + 4 = 2 \\implies 2x = -2 \\implies x = -1$.\nNow find $4^{3x}$: $4^{3(-1)} = 4^{-3} = \\frac{1}{4^3} = \\frac{1}{64}$."
  },
  {
    id: "est1_2022_june_q10",
    examId: "EST12022June",
    question: "If $a + b > 0$, and $a - c < 0$, then $b + c$ ?",
    options: [
      "Is smaller than 0, with a < c",
      "Is greater than 0, with a < c",
      "Is smaller than 0, with a > c",
      "Is greater than 0, with a > c"
    ],
    correctAnswer: 1,
    explanation: "From $a - c < 0$, we get $a < c$.\nFrom $a + b > 0$, we can rewrite it as $b > -a$.\nIf we add the inequalities $c > a$ and $b > -a$, we get $b + c > a - a \\implies b + c > 0$.\nTherefore, $b+c$ is greater than 0, with $a < c$."
  },
  {
    id: "est1_2022_june_q11",
    examId: "EST12022June",
    question: "What is the square of the ordinate of the vertex of the graph of the function $f(x) = 3x^2 + 6x$?",
    options: [
      "-6",
      "-2",
      "1",
      "9"
    ],
    correctAnswer: 3,
    explanation: "The $x$-coordinate of the vertex (abscissa) is $x = -\\frac{b}{2a} = -\\frac{6}{2(3)} = -1$.\nThe $y$-coordinate (ordinate) is $f(-1) = 3(-1)^2 + 6(-1) = 3 - 6 = -3$.\nThe square of the ordinate is $(-3)^2 = 9$."
  },
  {
    id: "est1_2022_june_q12",
    examId: "EST12022June",
    question: "Which of the systems of equations below is being represented in the graph above? (The graph shows a system intersecting in the second quadrant, with one line passing through $(0,2)$ and $(4,0)$ and another passing through $(0,1)$ and $(-1,0)$)",
    options: [
      "$\\begin{cases} x + 2y = 4 \\\\ x - y = 1 \\end{cases}$",
      "$\\begin{cases} x + 2y = 4 \\\\ -x + y = 1 \\end{cases}$",
      "$\\begin{cases} x - 2y = 4 \\\\ x - y = 1 \\end{cases}$",
      "$\\begin{cases} x - 2y = 4 \\\\ -x + y = 1 \\end{cases}$"
    ],
    correctAnswer: 1,
    explanation: "Line 1 passes through $(0,2)$ and $(4,0)$. Its slope is $\\frac{-2}{4} = -\\frac{1}{2}$. Its equation is $y = -\\frac{1}{2}x + 2 \\implies 2y = -x + 4 \\implies x + 2y = 4$.\nLine 2 passes through $(-1,0)$ and $(0,1)$. Its slope is $\\frac{1}{1} = 1$. Its equation is $y = 1x + 1 \\implies -x + y = 1$.\nThus, the system is $x + 2y = 4$ and $-x + y = 1$."
  }
];
