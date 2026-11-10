import { Question } from '../../types';

export const EST1_2025_FORM6_SET: Question[] = [
  {
    id: "est1_2025_f6_2",
    question: "14, 14, 15, 17, 28, 21, 22, 22, 23, 25\nWhat is the IQR range?",
    options: ["8", "15", "23", "17"],
    correctAnswer: 0,
    explanation: "First, order the 10 values from least to greatest: 14, 14, 15, 17, 21, 22, 22, 23, 25, 28. The median (Q2) splits the data into two halves of 5 values each. Lower half: 14, 14, 15, 17, 21. Q1 is the median of the lower half, which is 15. Upper half: 22, 22, 23, 25, 28. Q3 is the median of the upper half, which is 23. The Interquartile Range (IQR) = Q3 - Q1 = 23 - 15 = 8.",
    category: "Data Analysis"
  },
  {
    id: "est1_2025_f6_4",
    question: "A circle has a center (1, 4) and passes through the point t at (4, 7), what is the diameter of the circle?",
    options: ["2.5", "5", "8.49", "20"],
    correctAnswer: 2,
    explanation: "The radius r is the distance between the center (1, 4) and the point (4, 7). r = \\sqrt{(4 - 1)^2 + (7 - 4)^2} = \\sqrt{3^2 + 3^2} = \\sqrt{9 + 9} = \\sqrt{18} = 3\\sqrt{2}. The diameter is 2r = 6\\sqrt{2} ≈ 6 * 1.414 = 8.484. The closest option is 8.49.",
    category: "Geometry"
  },
  {
    id: "est1_2025_f6_5",
    question: "Sheco when played games, in win got 1.5$ in lose got 1.2$, you earned 12$, ratio of win to lose 4 : 5. How many times did Sheco play the game?",
    options: ["9", "14", "18", "20"],
    correctAnswer: 0,
    explanation: "Let the number of wins be 4k and losses be 5k. The total earnings are from both wins and losses (assuming he gets paid for participating even if he loses). Earnings = 1.5(4k) + 1.2(5k) = 6k + 6k = 12k. We are given total earnings = $12, so 12k = 12 => k = 1. The total number of games played is 4k + 5k = 9k = 9(1) = 9.",
    category: "Problem Solving"
  },
  {
    id: "est1_2025_f6_6",
    question: "A rectangular pyramid has a volume of 216 cubic units. Its height is 4 units, and the ratio of the length to width of the base is 3:2. What is the length of the base round to the nearest tenth?",
    options: ["1.7", "4.1", "5.2", "15.6"],
    correctAnswer: 3,
    explanation: "Let the length be 3x and width be 2x. The volume of a pyramid is V = (1/3) * base_area * height. 216 = (1/3) * (3x * 2x) * 4 => 216 = (1/3) * 6x^2 * 4 => 216 = 8x^2 => x^2 = 216 / 8 = 27 => x = \\sqrt{27} = 3\\sqrt{3}. The length is 3x = 3(3\\sqrt{3}) = 9\\sqrt{3} ≈ 9 * 1.732 = 15.588. Rounded to the nearest tenth, this is 15.6.",
    category: "Geometry"
  },
  {
    id: "est1_2025_f6_8",
    question: "If f(x) = x^3 + (m+1)x + (m+3), f(x) is divisible by x - 3, what is the value of m?",
    options: ["0", "3", "1", "-33/4"],
    correctAnswer: 3,
    explanation: "By the Remainder Theorem, if f(x) is divisible by x - 3, then f(3) = 0. f(3) = (3)^3 + (m+1)(3) + (m+3) = 27 + 3m + 3 + m + 3 = 4m + 33. Setting this to 0: 4m + 33 = 0 => 4m = -33 => m = -33/4.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f6_9",
    question: "8^{2x-1} = 512",
    options: ["9", "2", "4", "1"],
    correctAnswer: 1,
    explanation: "Express 512 as a power of 8: 8^3 = 512. So, 8^{2x-1} = 8^3. Equating the exponents: 2x - 1 = 3 => 2x = 4 => x = 2.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f6_10",
    question: "A data set has x values, the sum of the values is 1576 and the mean is 78.8. What is the value of x?",
    options: ["11", "10", "21", "20"],
    correctAnswer: 3,
    explanation: "The mean is the sum of the values divided by the number of values (x). Mean = Sum / x => 78.8 = 1576 / x => x = 1576 / 78.8 = 20.",
    category: "Data Analysis"
  }
];
