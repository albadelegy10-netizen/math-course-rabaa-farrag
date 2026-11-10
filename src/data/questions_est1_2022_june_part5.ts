import { Question } from '../../types';

export const EST1_2022_JUNE_PART5: Question[] = [
  {
    id: "est1_2022_june_q49",
    examId: "EST12022June",
    question: "For the list $k+2, 2k+4, 2k+5, 3k+5$, the average is 36. Find $k$.",
    options: [
      "144",
      "18",
      "16",
      "2"
    ],
    correctAnswer: 2,
    explanation: "Sum of the items: $(k+2) + (2k+4) + (2k+5) + (3k+5) = 8k + 16$.\nSince there are 4 items and the average is 36, the sum must be $4 \\times 36 = 144$.\nSet $8k + 16 = 144 \\implies 8k = 128 \\implies k = 16$."
  },
  {
    id: "est1_2022_june_q50",
    examId: "EST12022June",
    question: "The sum of three numbers is equivalent to the product of the third number and half the difference of the first two numbers. Assuming that the first number is $a$, the second number is $b$, and the third number is $c$, which of the following statements represents $a$ in terms of $b$ and $c$?",
    options: [
      "$a = cb + 2b + 2c$",
      "$a = \\frac{cb + 2b + 2c}{c - 2}$",
      "$a = \\frac{-cb - 2b - 2c}{c + 2}$",
      "$a = -cb - 2b - 2c$"
    ],
    correctAnswer: 1,
    explanation: "Write out the equation: $a + b + c = c \\cdot \\frac{a - b}{2}$.\nMultiply both sides by 2: $2a + 2b + 2c = ca - cb$.\nGather the terms with $a$ on one side: $2a - ca = -cb - 2b - 2c$.\nFactor out $a: a(2 - c) = -cb - 2b - 2c$.\nDivide by $(2-c): a = \\frac{-cb - 2b - 2c}{2 - c}$.\nMultiply numerator and denominator by $-1$ to match an option: $a = \\frac{cb + 2b + 2c}{c - 2}$."
  },
  {
    id: "est1_2022_june_q51",
    examId: "EST12022June",
    question: "30% of a number is 86.4% of 50. What is this number?",
    options: [
      "144",
      "17.36",
      "1440",
      "92"
    ],
    correctAnswer: 0,
    explanation: "Let the number be $x$. The equation is $0.30x = 0.864 \\times 50$.\nCalculate the right side: $0.864 \\times 50 = 43.2$.\nSo, $0.30x = 43.2 \\implies x = 43.2 / 0.30 = 144$."
  },
  {
    id: "est1_2022_june_q52",
    examId: "EST12022June",
    question: "If $h(x) = 2x - 3g(x)$, and $g(x) = 3x + 7$, what is the value of $h(-4)$?",
    options: [
      "-5",
      "-23",
      "7",
      "23"
    ],
    correctAnswer: 2,
    explanation: "First, evaluate $g(-4) = 3(-4) + 7 = -12 + 7 = -5$.\nNext, find $h(-4) = 2(-4) - 3g(-4) = -8 - 3(-5) = -8 + 15 = 7$."
  },
  {
    id: "est1_2022_june_q53",
    examId: "EST12022June",
    question: "$T$ and $T'$ are two triangles. $T$ is a right isosceles triangle of hypotenuse $9\\sqrt{2}$, and the $T'$ is a $30^\\circ-60^\\circ-90^\\circ$ triangle, such that the small leg is equivalent to 4. What is the sum of the perimeters of both triangles? (Give your answer to the nearest tenth)",
    options: [
      "49.7",
      "34.5",
      "54.4",
      "38.5"
    ],
    correctAnswer: 0,
    explanation: "For triangle $T$ (right isosceles, $45^\\circ-45^\\circ-90^\\circ$): hypotenuse is $x\\sqrt{2} = 9\\sqrt{2}$, so legs are 9 and 9. Perimeter = $18 + 9\\sqrt{2} \\approx 18 + 12.7279 = 30.7279$.\nFor triangle $T'$ ($30^\\circ-60^\\circ-90^\\circ$): shortest leg ($x$) = 4, hypotenuse ($2x$) = 8, other leg ($x\\sqrt{3}$) = $4\\sqrt{3}$. Perimeter = $12 + 4\\sqrt{3} \\approx 12 + 6.9282 = 18.9282$.\nSum of perimeters = $30.7279 + 18.9282 = 49.6561$, which rounds to 49.7."
  },
  {
    id: "est1_2022_june_q54",
    examId: "EST12022June",
    question: "$\\begin{cases} -2x + y = 1 \\\\ ax + y = 4 \\\\ -4x = -y + 1 \\end{cases}$ ($a$ is a positive constant)\nThe sum of the abscissas of the intersections of the lines of the three equations in the system above is $1.6$. What is the value of $a$?",
    options: [
      "0.5",
      "1",
      "1.5",
      "2"
    ],
    correctAnswer: 1,
    explanation: "Let's find the pairwise intersections for $L_1: y = 2x+1$, $L_2: y = -ax+4$, $L_3: y = 4x+1$.\nIntersection of $L_1$ & $L_3$: $2x+1 = 4x+1 \\implies 2x=0 \\implies x_1 = 0$.\nIntersection of $L_1$ & $L_2$: $2x+1 = -ax+4 \\implies x(a+2) = 3 \\implies x_2 = \\frac{3}{a+2}$.\nIntersection of $L_2$ & $L_3$: $-ax+4 = 4x+1 \\implies x(a+4) = 3 \\implies x_3 = \\frac{3}{a+4}$.\nThe sum of abscissas = $0 + \\frac{3}{a+2} + \\frac{3}{a+4} = 1.6 = \\frac{8}{5}$.\nTesting $a=1$: $\\frac{3}{3} + \\frac{3}{5} = 1 + 0.6 = 1.6$. So $a=1$ is correct."
  },
  {
    id: "est1_2022_june_q55",
    examId: "EST12022June",
    question: "17 is subtracted from triple the sum of all integers from 1 to 44. What is the result?",
    options: [
      "973",
      "939",
      "5923",
      "2953"
    ],
    correctAnswer: 3,
    explanation: "The sum of integers from 1 to 44 is given by $S = \\frac{n(n+1)}{2} = \\frac{44(45)}{2} = 22(45) = 990$.\nTriple this sum is $3 \\times 990 = 2970$.\nSubtracting 17 gives $2970 - 17 = 2953$."
  },
  {
    id: "est1_2022_june_q56",
    examId: "EST12022June",
    question: "If the distance between points $A(3, c)$ and $B(9, -5)$ in a coordinate system is $3\\sqrt{13}$, and $A$ is a point in the first quadrant, what is the value of $\\frac{c}{2} + 7$?",
    options: [
      "0",
      "4",
      "9",
      "11"
    ],
    correctAnswer: 2,
    explanation: "Using the distance formula squared: $d^2 = (9-3)^2 + (-5-c)^2 = 36 + (5+c)^2$.\nWe know $d = 3\\sqrt{13}$, so $d^2 = 9 \\times 13 = 117$.\n$36 + (5+c)^2 = 117 \\implies (5+c)^2 = 81 \\implies 5+c = \\pm 9$.\n$c = 4$ or $c = -14$. Since A gets a first-quadrant location, its y-coordinate $c$ must be positive, so $c=4$.\nCompute $\\frac{4}{2} + 7 = 2 + 7 = 9$."
  },
  {
    id: "est1_2022_june_q57",
    examId: "EST12022June",
    question: "The arithmetic mean of the set below is 7.25. What is the median of this set?\n$n+4 \\;\\; ; \\;\\; 6 \\;\\; ; \\;\\; 11 \\;\\; ; \\;\\; 2n-1$",
    options: [
      "6",
      "7",
      "6.5",
      "8.5"
    ],
    correctAnswer: 2,
    explanation: "The set has 4 terms. Mean = $(n+4 + 6 + 11 + 2n-1) / 4 = 7.25$.\n$3n + 20 = 4 \\times 7.25 = 29 \\implies 3n = 9 \\implies n = 3$.\nThe set evaluated at $n=3$ is: $3+4=7, 6, 11, 2(3)-1=5$. So the set is $\\{7, 6, 11, 5\\}$.\nSorted order is $\\{5, 6, 7, 11\\}$. Since this set has an even number of terms, the median is the average of the middle two: $\\frac{6+7}{2} = 6.5$."
  },
  {
    id: "est1_2022_june_q58",
    examId: "EST12022June",
    question: "Sami has a circular land of a radius $6\\text{ m}$. He decided to cultivate a part of this land, which is a sector with angle $m\\angle DAC = 155^\\circ$. Each $1\\text{ m}^2$ will cost him $\\$79\\text{ EGP}$. How much will Sami pay to cultivate the desired area? (Give your answer to the nearest ones)",
    options: [
      "3,847 EGP",
      "220,410 EGP",
      "20,752 EGP",
      "5,248 EGP"
    ],
    correctAnswer: 0,
    explanation: "The area of the sector is $A = \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{155}{360} \\times \\pi (6^2) = \\frac{155}{360} \\times 36\\pi = 15.5\\pi \\approx 48.6947\\text{ m}^2$.\nTotal cost = Area $\\times$ Cost per square meter = $48.6947 \\times 79 \\approx 3846.88\\text{ EGP}$.\nRounding to the nearest one gives $3847\\text{ EGP}$."
  }
];
