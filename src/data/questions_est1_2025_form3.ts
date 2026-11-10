import { Question } from '../../types';

export const EST1_2025_FORM3_SET: Question[] = [
  {
    id: "est1_2025_f3_25",
    question: "If p(x) = x^4 - 3x^2 - mx - 28 is divisible by (x - 4), what is the value of m?",
    options: [
      "-19",
      "19",
      "-45",
      "45"
    ],
    correctAnswer: 3,
    explanation: "By the Remainder Theorem, if p(x) is divisible by (x - 4), then p(4) = 0. \np(4) = (4)^4 - 3(4)^2 - m(4) - 28 = 256 - 48 - 4m - 28 = 180 - 4m. \nSetting this to 0: 180 - 4m = 0 => 4m = 180 => m = 45.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f3_26",
    question: "Amr wants to buy a number of containers each container costs 14$ and amr got a 20$ discount code and he doesn't want to spend more than 200$. What is the maximum number of containers amr can buy?",
    options: [
      "16",
      "17",
      "15",
      "14"
    ],
    correctAnswer: 2,
    explanation: "Let x be the number of containers. The cost is 14x. With a $20 discount, the total cost is 14x - 20. \nHe wants to spend at most $200, so: 14x - 20 <= 200 => 14x <= 220 => x <= 220 / 14 ≈ 15.71. \nThe maximum whole number of containers is 15.",
    category: "Problem Solving"
  },
  {
    id: "est1_2025_f3_27",
    question: "If f(x) = x^3 - 6x + 5. Find f^-1(25)",
    options: [
      "1.77",
      "7.4",
      "9.2",
      "3.44"
    ],
    correctAnswer: 3,
    explanation: "We need to find x such that f(x) = 25. \nx^3 - 6x + 5 = 25 => x^3 - 6x - 20 = 0. \nTesting the given options, if x = 3.44: (3.44)^3 - 6(3.44) - 20 ≈ 40.7 - 20.64 - 20 = 0.06 ≈ 0. \nTherefore, f^-1(25) is approximately 3.44.",
    category: "Advanced Math"
  },
  {
    id: "est1_2025_f3_28",
    question: "If 3x - 5y = 1/2, find the value of x when y = 35",
    options: [
      "8.3",
      "11.4",
      "58.5",
      "1"
    ],
    correctAnswer: 2,
    explanation: "Substitute y = 35 into the equation: \n3x - 5(35) = 0.5 \n3x - 175 = 0.5 \n3x = 175.5 \nx = 175.5 / 3 = 58.5.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f3_22",
    question: "4^{x+2} = 8^{4x-2} what is the value of x",
    options: [
      "2",
      "1",
      "11",
      "-1"
    ],
    correctAnswer: 1,
    explanation: "Express both sides with base 2: (2^2)^{x+2} = (2^3)^{4x-2} => 2^{2x+4} = 2^{12x-6}. \nEquate the exponents: 2x + 4 = 12x - 6 => 10x = 10 => x = 1.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f3_23",
    question: "Number of Children: 0, 1, 2, 3, 4, 5. Cumulative Frequency (of families): 4, 13, 28, 40, 46, 50. What is the mean number of children?",
    options: [
      "1.28",
      "2.38",
      "3.38",
      "4.28"
    ],
    correctAnswer: 1,
    explanation: "First, find the frequencies for each number of children:\n0: 4\n1: 13 - 4 = 9\n2: 28 - 13 = 15\n3: 40 - 28 = 12\n4: 46 - 40 = 6\n5: 50 - 46 = 4\nTotal families = 50.\nSum of children = (0*4) + (1*9) + (2*15) + (3*12) + (4*6) + (5*4) = 0 + 9 + 30 + 36 + 24 + 20 = 119.\nMean = 119 / 50 = 2.38.",
    category: "Data Analysis"
  },
  {
    id: "est1_2025_f3_24",
    question: "A linear equation with points (1,-6) and (9,-13). What is the value of the y-intercept?",
    options: [
      "-5",
      "5",
      "5.125",
      "-5.125"
    ],
    correctAnswer: 3,
    explanation: "Slope m = (-13 - (-6)) / (9 - 1) = -7 / 8 = -0.875. \nEquation: y - (-6) = -0.875(x - 1) => y + 6 = -0.875x + 0.875 => y = -0.875x - 5.125. \nThe y-intercept is -5.125.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f3_oct_1",
    question: "The solution to the system of equations below is (x, y). What is the value of y?\ny = 3x\n2y - 5x = 3",
    options: [
      "3",
      "6",
      "9",
      "12"
    ],
    correctAnswer: 2,
    explanation: "Substitute y = 3x into the second equation: 2(3x) - 5x = 3 => 6x - 5x = 3 => x = 3. \nThen, y = 3(3) = 9.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f3_oct_2",
    question: "A line m of equation 2y = 8x - 5 passes through point A with an x-coordinate that is equal to 2. What is the y-intercept of line n, perpendicular to line m at point A?",
    options: [
      "1/2",
      "3",
      "9/2",
      "6"
    ],
    correctAnswer: 3,
    explanation: "Line m: 2y = 8x - 5 => y = 4x - 2.5. The slope of m is 4. \nThe slope of line n (perpendicular to m) is -1/4 = -0.25. \nFind point A: x = 2, y = 4(2) - 2.5 = 8 - 2.5 = 5.5. A is (2, 5.5). \nEquation of line n: y - 5.5 = -0.25(x - 2) => y = -0.25x + 0.5 + 5.5 => y = -0.25x + 6. \nThe y-intercept is 6.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f3_oct_3",
    question: "Which of the following is/are true regarding the graph F(x) = -x^2 + 6x + 1\nI. It has an axis of symmetry at x = -3\nII. The y-coordinate of its highest point is 28.",
    options: [
      "I only",
      "II only",
      "I and II",
      "Both statements are false"
    ],
    correctAnswer: 3,
    explanation: "Axis of symmetry: x = -b / (2a) = -6 / (2 * -1) = -6 / -2 = 3. So statement I is false (it says x = -3). \nHighest point (vertex) y-coordinate: F(3) = -(3)^2 + 6(3) + 1 = -9 + 18 + 1 = 10. So statement II is false (it says 28). \nBoth statements are false.",
    category: "Advanced Math"
  },
  {
    id: "est1_2025_f3_oct_4",
    question: "The graph of the function g defined by g(x) = (8x + 1) / (2x - 8) has a vertical asymptote at:",
    options: [
      "x = -4",
      "x = 2",
      "x = 4",
      "y = 4"
    ],
    correctAnswer: 2,
    explanation: "A vertical asymptote occurs where the denominator is zero (and the numerator is not zero). \n2x - 8 = 0 => 2x = 8 => x = 4.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f3_oct_5",
    question: "Which of the following expressions is equivalent to (3xy)(4y)^2(-2x^2y)?",
    options: [
      "-96x^2y^2",
      "-32x^3y^4",
      "-96x^3y^4",
      "-32x^4y^3"
    ],
    correctAnswer: 2,
    explanation: "Simplify the expression: \n(3xy) * (16y^2) * (-2x^2y) \n= (3 * 16 * -2) * (x * x^2) * (y * y^2 * y) \n= -96 * x^3 * y^4.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f3_oct_6",
    question: "Given f(x) = 2x + 7 and g(x) = 4x^2 + a, where a is a real number, if f(g(1)) = 19, what is the value of a?",
    options: [
      "-1",
      "2",
      "3",
      "7"
    ],
    correctAnswer: 1,
    explanation: "First, find g(1): g(1) = 4(1)^2 + a = 4 + a. \nNext, substitute into f(x): f(4 + a) = 2(4 + a) + 7 = 8 + 2a + 7 = 2a + 15. \nWe are given f(g(1)) = 19, so 2a + 15 = 19 => 2a = 4 => a = 2.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f3_oct_7",
    question: "Which of the following is the domain of f(x) = 1 / sqrt(x - 7)?",
    options: [
      "All real numbers such that x >= 7",
      "All real numbers such that x > 7",
      "All real numbers",
      "All real numbers, except 7"
    ],
    correctAnswer: 1,
    explanation: "For the function to be defined, the expression inside the square root must be non-negative, and the denominator cannot be zero. \nTherefore, x - 7 > 0 => x > 7.",
    category: "Advanced Math"
  },
  {
    id: "est1_2025_f3_oct_8",
    question: "An angle is one-third its complement. What is the measure of this angle?",
    options: [
      "18.5°",
      "20.0°",
      "22.5°",
      "30.0°"
    ],
    correctAnswer: 2,
    explanation: "Let the angle be x. Its complement is 90 - x. \nThe problem states: x = (90 - x) / 3 \n3x = 90 - x \n4x = 90 \nx = 22.5°.",
    category: "Geometry"
  },
  {
    id: "est1_2025_f3_oct_9",
    question: "|3x - 6| = 18\nWhat is the sum of the solutions of the equation above?",
    options: [
      "-4",
      "4",
      "12",
      "32"
    ],
    correctAnswer: 1,
    explanation: "The absolute value equation gives two cases: \n1) 3x - 6 = 18 => 3x = 24 => x = 8 \n2) 3x - 6 = -18 => 3x = -12 => x = -4 \nThe sum of the solutions is 8 + (-4) = 4.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f3_14",
    question: "Use the values (2, 3, 5, 7, 5, 3, 5, 3, x, 1, 2, 5) to answer the question.\nWhat could be the value of x to make the mean 8?",
    options: [
      "45",
      "55.5",
      "45.5",
      "55"
    ],
    correctAnswer: 3,
    explanation: "There are 12 values in the list. The sum of the known values is 2+3+5+7+5+3+5+3+1+2+5 = 41. \nThe mean is 8, so the total sum must be 12 * 8 = 96. \nTherefore, 41 + x = 96 => x = 55.",
    category: "Data Analysis"
  },
  {
    id: "est1_2025_f3_15",
    question: "If there is a set of 10 values added to the list above (which originally had 12 values and a sum of 96), the new mean will be 5. What is the sum of these numbers added?",
    options: [
      "12",
      "13",
      "14",
      "15"
    ],
    correctAnswer: 2,
    explanation: "The original list has 12 values with a sum of 96. \nIf 10 values are added, the new total number of values is 12 + 10 = 22. \nThe new mean is 5, so the new total sum is 22 * 5 = 110. \nThe sum of the added numbers is 110 - 96 = 14.",
    category: "Data Analysis"
  },
  {
    id: "est1_2025_f3_16",
    question: "What is the median of the list: 12, 3, 4, 5, 6, 9, 4, 11, 13?",
    options: [
      "6",
      "5.5",
      "6.5",
      "7"
    ],
    correctAnswer: 0,
    explanation: "First, order the list from least to greatest: 3, 4, 4, 5, 6, 9, 11, 12, 13. \nThere are 9 values, so the median is the middle value (the 5th value), which is 6.",
    category: "Data Analysis"
  },
  {
    id: "est1_2025_f3_17",
    question: "A prize is divided among 3 friends Jane, Peter, and Jeff in the ratio 3:4:5 respectively. If the total prize is 15000, what will Jane gain?",
    options: [
      "3750",
      "3800",
      "5000",
      "5500"
    ],
    correctAnswer: 0,
    explanation: "The total number of ratio parts is 3 + 4 + 5 = 12. \nJane's share is 3 parts out of 12, which is 3/12 = 1/4 of the total. \nJane's gain = (1/4) * 15000 = 3750.",
    category: "Problem Solving"
  },
  {
    id: "est1_2025_f3_18",
    question: "Mohamed has a principal amount of 230000 and he put it in the bank where the amount will be compounded annually at 4.5%. What will be the interest he will gain 3 years from now?",
    options: [
      "32468",
      "31050",
      "262468",
      "230000"
    ],
    correctAnswer: 0,
    explanation: "The formula for compound interest is A = P(1 + r)^t. \nA = 230000 * (1 + 0.045)^3 = 230000 * (1.045)^3 ≈ 230000 * 1.141166 = 262468.21. \nThe interest gained is the final amount minus the principal: 262468.21 - 230000 = 32468.21. \nRounding to the nearest whole number gives 32468.",
    category: "Problem Solving"
  },
  {
    id: "est1_2025_f3_19",
    question: "The area of a composite shape is 48 m^2. The shape consists of two attached rectangles: Rectangle A has a width of 2m and a height of 8m. Rectangle B is attached to the right side of A, with a width of x and a height of 4m. What is the value of x?",
    options: [
      "6",
      "7",
      "8",
      "9"
    ],
    correctAnswer: 2,
    explanation: "The total area is the sum of the areas of Rectangle A and Rectangle B. \nArea of A = 2m * 8m = 16 m^2. \nArea of B = x * 4m = 4x m^2. \nTotal Area = 16 + 4x = 48 => 4x = 32 => x = 8.",
    category: "Geometry"
  },
  {
    id: "est1_2025_f3_20",
    question: "A girl walks to school through a distance of 18 km. If she went by riding she goes 5 mins earlier at a velocity of 18.8 km/hr. What is the average speed of the girl while walking?",
    options: [
      "3 km/hr",
      "17 km/hr",
      "18 km/hr",
      "14 km/hr"
    ],
    correctAnswer: 1,
    explanation: "Time riding = Distance / Speed = 18 / 18.8 ≈ 0.9574 hours ≈ 57.44 minutes. \nTime walking = Time riding + 5 minutes = 62.44 minutes ≈ 1.0407 hours. \nSpeed walking = Distance / Time walking = 18 / 1.0407 ≈ 17.29 km/hr. \nThe closest option is 17 km/hr.",
    category: "Problem Solving"
  },
  {
    id: "est1_2025_f3_21",
    question: "A Venn diagram shows three intersecting sets A, B, and C. \nThe regions contain the following values: \nA only = 3 \nB only = 10 \nC only = 11 \nA ∩ B only = 2 \nA ∩ C only = 4 \nB ∩ C only = 7 \nA ∩ B ∩ C = 5 \nWhat is the sum of values of the set A ∩ (B ∪ C')?",
    options: [
      "10",
      "11",
      "12",
      "14"
    ],
    correctAnswer: 0,
    explanation: "We need to find the sum of elements in A ∩ (B ∪ C'). \nThis means elements that are in A AND (in B OR not in C). \nElements in A: {3, 2, 4, 5}. \nLet's check each element in A against the condition (in B OR not in C): \n- 3 (A only): Is it in B? No. Is it not in C? Yes. So, keep 3. \n- 2 (A ∩ B only): Is it in B? Yes. So, keep 2. \n- 4 (A ∩ C only): Is it in B? No. Is it not in C? No (it is in C). So, discard 4. \n- 5 (A ∩ B ∩ C): Is it in B? Yes. So, keep 5. \nThe valid elements are 3, 2, and 5. \nSum = 3 + 2 + 5 = 10.",
    category: "Data Analysis"
  }
];
