import { Question } from '../../types';

export const EST1_2025_FORM4_SET: Question[] = [
  {
    id: "est1_2025_f4_1",
    question: "If the length of a rectangle is twice its width. If the area of the rectangle is 32 cm^2, then the width is equal to:",
    options: ["3", "4", "8", "16"],
    correctAnswer: 1,
    explanation: "Let width be W. Length L = 2W. Area = L * W = 2W * W = 2W^2. We are given Area = 32, so 2W^2 = 32 => W^2 = 16 => W = 4.",
    category: "Geometry"
  },
  {
    id: "est1_2025_f4_2",
    question: "The graphs of y = x^2 - 1 and y = x^2 + x + 3 intersect at:",
    options: ["(-4, 15)", "(-4, 17)", "(4, 15)", "(4, 17)"],
    correctAnswer: 0,
    explanation: "Set the equations equal to each other: x^2 - 1 = x^2 + x + 3. Subtract x^2 from both sides: -1 = x + 3 => x = -4. Substitute x = -4 back into the first equation: y = (-4)^2 - 1 = 16 - 1 = 15. The point of intersection is (-4, 15).",
    category: "Algebra"
  },
  {
    id: "est1_2025_f4_5",
    question: "If 4^{2x-3} = 32, then x =",
    options: ["2.25", "2.50", "2.75", "3.0"],
    correctAnswer: 2,
    explanation: "Express both sides with base 2: (2^2)^{2x-3} = 2^5 => 2^{4x-6} = 2^5. Equate exponents: 4x - 6 = 5 => 4x = 11 => x = 11/4 = 2.75.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f4_6",
    question: "What is the y-intercept of the line passing through points (9, 5) and (-3, 9)?",
    options: ["(0, -1/3)", "(0, 3)", "(0, 5)", "(0, 8)"],
    correctAnswer: 3,
    explanation: "First, find the slope m = (9 - 5) / (-3 - 9) = 4 / -12 = -1/3. Use point-slope form with (9, 5): y - 5 = -1/3(x - 9) => y = -1/3x + 3 + 5 => y = -1/3x + 8. The y-intercept is 8, which corresponds to the point (0, 8).",
    category: "Algebra"
  },
  {
    id: "est1_2025_f4_9",
    question: "What is the solution \\sqrt{x^2 - 1} = x + 1?",
    options: ["-5", "-4", "-2", "-1"],
    correctAnswer: 3,
    explanation: "Square both sides: x^2 - 1 = (x + 1)^2 => x^2 - 1 = x^2 + 2x + 1. Subtract x^2 from both sides: -1 = 2x + 1 => 2x = -2 => x = -1. Check the solution: \\sqrt{(-1)^2 - 1} = \\sqrt{0} = 0. And -1 + 1 = 0. The solution is valid.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f4_10",
    question: "-3(4y - 1) + 11 = 3(5y - 2)\nIn the equation above, 27y is equal to:",
    options: ["10", "15", "20", "22"],
    correctAnswer: 2,
    explanation: "Expand both sides: -12y + 3 + 11 = 15y - 6 => -12y + 14 = 15y - 6. Add 12y to both sides: 14 = 27y - 6. Add 6 to both sides: 20 = 27y. Therefore, 27y is equal to 20.",
    category: "Algebra"
  }
];
