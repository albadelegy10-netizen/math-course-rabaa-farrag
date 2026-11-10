import { Question } from '../../types';

export const EST1_2025_FORM5_SET: Question[] = [
  {
    id: "est1_2025_f5_7",
    question: "If 2x^2 - 3x + 1 = bx^2 - 3ax + 1, what is the value of a/b?",
    options: ["1", "1/2", "2", "-1"],
    correctAnswer: 1,
    explanation: "Since the polynomials are equal for all x, their corresponding coefficients must be equal. Comparing x^2 coefficients: b = 2. Comparing x coefficients: -3a = -3 => a = 1. Therefore, a/b = 1/2.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f5_8",
    question: "(a + 2) + by = -3\na and b are constants, if y = -1, find the value of b in terms of a",
    options: ["b = a/2 + 5/2", "b = a + 5", "b = a - 5", "b = a/2 - 5/2"],
    correctAnswer: 1,
    explanation: "Substitute y = -1 into the equation: (a + 2) + b(-1) = -3 => a + 2 - b = -3. Solve for b: a + 2 + 3 = b => b = a + 5.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f5_10",
    question: "3x - 2y = 8 is parallel to ax - by = 9, find a/b?",
    options: ["3", "2/3", "3/2", "2"],
    correctAnswer: 2,
    explanation: "Parallel lines have the same slope. Rewrite both equations in slope-intercept form (y = mx + c). First line: 2y = 3x - 8 => y = (3/2)x - 4, so slope m1 = 3/2. Second line: by = ax - 9 => y = (a/b)x - 9/b, so slope m2 = a/b. Since they are parallel, m1 = m2 => a/b = 3/2.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f5_11",
    question: "y + x = 4\n2x + y = -5\n(a,b) is the solution to the system of the equation above. Find b",
    options: ["7", "9", "10", "13"],
    correctAnswer: 3,
    explanation: "From the first equation, y = 4 - x. Substitute this into the second equation: 2x + (4 - x) = -5 => x + 4 = -5 => x = -9. Now find y: y = 4 - (-9) = 4 + 9 = 13. The solution is (a, b) = (-9, 13), so b = 13.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f5_14",
    question: "12x - 3 > 21, find smallest integer of x",
    options: ["0", "2", "3", "4"],
    correctAnswer: 2,
    explanation: "Solve the inequality: 12x - 3 > 21 => 12x > 24 => x > 2. The smallest integer strictly greater than 2 is 3.",
    category: "Algebra"
  },
  {
    id: "est1_2025_f5_16",
    question: "A + B = 5, B - C = -2, C = 5, find A",
    options: ["0", "1", "2", "-2"],
    correctAnswer: 2,
    explanation: "We are given C = 5. Substitute C into the second equation: B - 5 = -2 => B = 3. Substitute B into the first equation: A + 3 = 5 => A = 2.",
    category: "Algebra"
  }
];
