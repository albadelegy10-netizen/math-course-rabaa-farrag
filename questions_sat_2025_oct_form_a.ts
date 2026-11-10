import { Question } from './types';

export const SAT_OCT_2025_FORM_A_SET: Question[] = [
  // --- MODULE 1 (22 Questions) ---
  {
    id: 1,
    question: "If 3x + 12 = 24, what is the value of x + 4?",
    options: ["4", "8", "12", "16"],
    correctAnswer: 1,
    explanation: "3x = 12 => x = 4. Then x + 4 = 4 + 4 = 8.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 2,
    question: "Which expression is equivalent to (x^2 + 3x) - (2x^2 - x)?",
    options: ["-x^2 + 2x", "-x^2 + 4x", "3x^2 + 2x", "3x^2 + 4x"],
    correctAnswer: 1,
    explanation: "Distribute the negative: x^2 + 3x - 2x^2 + x = (1-2)x^2 + (3+1)x = -x^2 + 4x.",
    category: "Advanced Math",
    topics: ["Polynomials"]
  },
  {
    id: 3,
    question: "A line in the xy-plane has a slope of 2 and passes through the point (0, 3). Which equation represents this line?",
    options: ["y = 2x + 3", "y = 2x - 3", "y = 3x + 2", "y = 3x - 2"],
    correctAnswer: 0,
    explanation: "Slope-intercept form y = mx + b. m = 2, b = 3 (y-intercept). So y = 2x + 3.",
    category: "Algebra",
    topics: ["Linear Functions"]
  },
  {
    id: 4,
    question: "What is 20% of 450?",
    options: ["9", "90", "45", "180"],
    correctAnswer: 1,
    explanation: "0.20 * 450 = 90.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Percentages"]
  },
  {
    id: 5,
    question: "If f(x) = 2x^2 - 5, what is the value of f(-3)?",
    options: ["-23", "-11", "13", "1"],
    correctAnswer: 2,
    explanation: "f(-3) = 2(-3)^2 - 5 = 2(9) - 5 = 18 - 5 = 13.",
    category: "Advanced Math",
    topics: ["Functions"]
  },
  {
    id: 6,
    question: "The solution to the system of equations x + y = 10 and x - y = 4 is (x, y). What is the value of x?",
    options: ["3", "7", "14", "6"],
    correctAnswer: 1,
    explanation: "Add the two equations: (x + y) + (x - y) = 10 + 4 => 2x = 14 => x = 7.",
    category: "Algebra",
    topics: ["Systems of Equations"]
  },
  {
    id: 7,
    question: "A rectangle has a length that is 4 units greater than its width. If the perimeter is 40 units, what is the width?",
    options: ["8", "10", "12", "6"],
    correctAnswer: 0,
    explanation: "Let w = width. Length l = w + 4. P = 2(l + w) = 2(w + 4 + w) = 2(2w + 4) = 4w + 8. 40 = 4w + 8 => 32 = 4w => w = 8.",
    category: "Geometry and Trigonometry",
    topics: ["Area and Perimeter"]
  },
  {
    id: 8,
    question: "Which of the following is a factor of x^2 - 5x - 6?",
    options: ["x - 6", "x - 1", "x + 6", "x - 2"],
    correctAnswer: 0,
    explanation: "Find two numbers that multiply to -6 and add to -5. They are -6 and 1. Factors are (x - 6)(x + 1).",
    category: "Advanced Math",
    topics: ["Quadratics"]
  },
  {
    id: 9,
    question: "The graph of y = f(x) is shown in the xy-plane. If f(0) = 2, which could be the equation of f?",
    options: ["f(x) = 2x", "f(x) = x + 2", "f(x) = x - 2", "f(x) = 2x + 2"],
    correctAnswer: 1,
    explanation: "If f(0) = 2, the y-intercept is 2. y = x + 2 has a y-intercept of 2.",
    category: "Advanced Math",
    topics: ["Functions"]
  },
  {
    id: 10,
    question: "If 4^x = 64, what is the value of x?",
    options: ["2", "3", "4", "16"],
    correctAnswer: 1,
    explanation: "4^3 = 4 * 4 * 4 = 64. So x = 3.",
    category: "Advanced Math",
    topics: ["Exponents"]
  },
  {
    id: 11,
    question: "A bag contains 3 red marbles and 5 blue marbles. What is the probability of selecting a red marble?",
    options: ["3/5", "3/8", "5/8", "1/3"],
    correctAnswer: 1,
    explanation: "Total marbles = 3 + 5 = 8. Probability(Red) = Red / Total = 3/8.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Probability"]
  },
  {
    id: 12,
    question: "Which equation has no solution?",
    options: ["2x + 3 = 2x + 3", "2x + 3 = 2x + 5", "2x + 3 = 3x + 2", "2x + 3 = 5"],
    correctAnswer: 1,
    explanation: "2x + 3 = 2x + 5 subtracts 2x from both sides to get 3 = 5, which is false. No solution.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 13,
    question: "The scatterplot shows the relationship between x and y. A line of best fit is shown. If x = 10, the predicted y-value is closest to:",
    options: ["5", "10", "15", "20"],
    correctAnswer: 2,
    explanation: "Assuming a standard positive correlation graph (placeholder for visual). Let's assume the line passes near (10, 15).",
    category: "Problem-Solving and Data Analysis",
    topics: ["Scatterplots"]
  },
  {
    id: 14,
    question: "What is the radius of the circle defined by x^2 + y^2 = 49?",
    options: ["7", "49", "24.5", "14"],
    correctAnswer: 0,
    explanation: "r^2 = 49 => r = 7.",
    category: "Geometry and Trigonometry",
    topics: ["Circles"]
  },
  {
    id: 15,
    question: "If sin(x) = 0.6, what is cos(90 - x)?",
    options: ["0.4", "0.6", "0.8", "0.5"],
    correctAnswer: 1,
    explanation: "Cofunction identity: sin(x) = cos(90 - x). So cos(90 - x) = 0.6.",
    category: "Geometry and Trigonometry",
    topics: ["Trigonometry"]
  },
  {
    id: 16,
    question: "The population of a town grows by 5% each year. If the initial population is 10,000, which function models the population P after t years?",
    options: ["P(t) = 10000(1.05)^t", "P(t) = 10000(0.95)^t", "P(t) = 10000(5)^t", "P(t) = 10000 + 1.05t"],
    correctAnswer: 0,
    explanation: "Exponential growth: P(t) = P0(1 + r)^t. r = 0.05. P(t) = 10000(1.05)^t.",
    category: "Advanced Math",
    topics: ["Exponential Functions"]
  },
  {
    id: 17,
    question: "Solve for k: 3(k - 2) = 2(k + 4).",
    options: ["10", "14", "2", "6"],
    correctAnswer: 1,
    explanation: "3k - 6 = 2k + 8 => k = 14.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 18,
    question: "The mean of a set of 5 numbers is 12. If a sixth number, 18, is added, what is the new mean?",
    options: ["12", "13", "14", "15"],
    correctAnswer: 1,
    explanation: "Sum of 5 numbers = 5 * 12 = 60. New sum = 60 + 18 = 78. New count = 6. New mean = 78 / 6 = 13.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Statistics"]
  },
  {
    id: 19,
    question: "Which of the following is equivalent to (a^3 * a^2)^2?",
    options: ["a^10", "a^12", "a^7", "a^36"],
    correctAnswer: 0,
    explanation: "(a^5)^2 = a^(5*2) = a^10.",
    category: "Advanced Math",
    topics: ["Exponents"]
  },
  {
    id: 20,
    question: "In triangle ABC, angle A is 90 degrees. If AB = 3 and BC = 5, what is the length of AC?",
    options: ["2", "4", "8", "√34"],
    correctAnswer: 1,
    explanation: "Pythagorean theorem: AB^2 + AC^2 = BC^2. 3^2 + AC^2 = 5^2. 9 + AC^2 = 25. AC^2 = 16. AC = 4.",
    category: "Geometry and Trigonometry",
    topics: ["Triangles"]
  },
  {
    id: 21,
    question: "If y varies directly with x, and y = 12 when x = 4, what is y when x = 6?",
    options: ["18", "24", "14", "16"],
    correctAnswer: 0,
    explanation: "y = kx. 12 = k(4) => k = 3. y = 3x. When x = 6, y = 3(6) = 18.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Ratios and Proportions"]
  },
  {
    id: 22,
    question: "What is the vertex of the parabola y = 2(x - 3)^2 + 4?",
    options: ["(3, 4)", "(-3, 4)", "(3, -4)", "(-3, -4)"],
    correctAnswer: 0,
    explanation: "Vertex form y = a(x - h)^2 + k. Vertex is (h, k) = (3, 4).",
    category: "Advanced Math",
    topics: ["Quadratics"]
  },

  // --- MODULE 2 (22 Questions) ---
  {
    id: 23,
    question: "If 2x + 3y = 12 and 4x - y = 10, what is the value of x + y?",
    options: ["5", "3", "2", "6"],
    correctAnswer: 0,
    explanation: "Multiply second eq by 3: 12x - 3y = 30. Add to first: (2x + 3y) + (12x - 3y) = 12 + 30 => 14x = 42 => x = 3. Substitute x=3 into 4x - y = 10: 12 - y = 10 => y = 2. x + y = 3 + 2 = 5.",
    category: "Algebra",
    topics: ["Systems of Equations"]
  },
  {
    id: 24,
    question: "A car travels 60 miles per hour. How many miles does it travel in 2.5 hours?",
    options: ["120", "150", "180", "140"],
    correctAnswer: 1,
    explanation: "Distance = Rate * Time = 60 * 2.5 = 150.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Rates"]
  },
  {
    id: 25,
    question: "Which of the following is equivalent to 1/x + 1/y?",
    options: ["(x+y)/xy", "2/(x+y)", "xy/(x+y)", "1/(xy)"],
    correctAnswer: 0,
    explanation: "Common denominator xy. (y + x) / xy.",
    category: "Advanced Math",
    topics: ["Rational Expressions"]
  },
  {
    id: 26,
    question: "The function g is defined by g(x) = ax + b, where a and b are constants. If g(0) = -2 and g(2) = 4, what is the value of g(1)?",
    options: ["1", "0", "2", "-1"],
    correctAnswer: 0,
    explanation: "g(0) = b = -2. g(2) = 2a - 2 = 4 => 2a = 6 => a = 3. g(x) = 3x - 2. g(1) = 3(1) - 2 = 1.",
    category: "Algebra",
    topics: ["Linear Functions"]
  },
  {
    id: 27,
    question: "In the circle above, arc AB has a length of 2π and the radius is 4. What is the measure of the central angle in radians?",
    options: ["π/2", "π/4", "π", "2π"],
    correctAnswer: 0,
    explanation: "s = rθ. 2π = 4θ => θ = 2π/4 = π/2.",
    category: "Geometry and Trigonometry",
    topics: ["Circles"]
  },
  {
    id: 28,
    question: "If x > 0 and x^2 - 9 = 0, what is x?",
    options: ["3", "-3", "9", "0"],
    correctAnswer: 0,
    explanation: "x^2 = 9 => x = ±3. Since x > 0, x = 3.",
    category: "Advanced Math",
    topics: ["Quadratics"]
  },
  {
    id: 29,
    question: "A store decreases the price of a shirt by 20% to $40. What was the original price?",
    options: ["$48", "$50", "$60", "$80"],
    correctAnswer: 1,
    explanation: "Let P be original price. P(1 - 0.20) = 40. 0.8P = 40. P = 40 / 0.8 = 50.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Percentages"]
  },
  {
    id: 30,
    question: "Which of the following could be the equation of a circle with center (-2, 5) and radius 3?",
    options: ["(x+2)^2 + (y-5)^2 = 9", "(x-2)^2 + (y+5)^2 = 9", "(x+2)^2 + (y-5)^2 = 3", "(x-2)^2 + (y+5)^2 = 3"],
    correctAnswer: 0,
    explanation: "(x - h)^2 + (y - k)^2 = r^2. h=-2, k=5, r=3. (x - (-2))^2 + (y - 5)^2 = 3^2 => (x+2)^2 + (y-5)^2 = 9.",
    category: "Geometry and Trigonometry",
    topics: ["Circles"]
  },
  {
    id: 31,
    question: "If 2^(x+1) = 8^x, what is x?",
    options: ["1/2", "1", "2", "3"],
    correctAnswer: 0,
    explanation: "8 = 2^3. 2^(x+1) = (2^3)^x = 2^(3x). x + 1 = 3x => 1 = 2x => x = 1/2.",
    category: "Advanced Math",
    topics: ["Exponents"]
  },
  {
    id: 32,
    question: "The density of an object is mass divided by volume. If mass is 50g and volume is 10cm^3, what is the density?",
    options: ["5 g/cm^3", "0.2 g/cm^3", "500 g/cm^3", "40 g/cm^3"],
    correctAnswer: 0,
    explanation: "D = M/V = 50/10 = 5.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Rates"]
  },
  {
    id: 33,
    question: "What is the solution set for |x - 3| = 5?",
    options: ["{8}", "{-2}", "{8, -2}", "{2, -8}"],
    correctAnswer: 2,
    explanation: "x - 3 = 5 => x = 8. x - 3 = -5 => x = -2.",
    category: "Algebra",
    topics: ["Absolute Value"]
  },
  {
    id: 34,
    question: "A triangle has sides 5, 12, and x. Which of the following could be x for it to be a right triangle?",
    options: ["13", "10", "15", "17"],
    correctAnswer: 0,
    explanation: "5-12-13 is a Pythagorean triple. 5^2 + 12^2 = 25 + 144 = 169 = 13^2.",
    category: "Geometry and Trigonometry",
    topics: ["Triangles"]
  },
  {
    id: 35,
    question: "If f(x) = x^2 + kx + 4 and f(2) = 10, what is k?",
    options: ["1", "2", "3", "0"],
    correctAnswer: 0,
    explanation: "f(2) = 2^2 + k(2) + 4 = 4 + 2k + 4 = 2k + 8. 2k + 8 = 10 => 2k = 2 => k = 1.",
    category: "Advanced Math",
    topics: ["Functions"]
  },
  {
    id: 36,
    question: "How many solutions does the system y = x^2 and y = -1 have?",
    options: ["0", "1", "2", "Infinite"],
    correctAnswer: 0,
    explanation: "x^2 = -1 has no real solutions.",
    category: "Advanced Math",
    topics: ["Systems of Equations"]
  },
  {
    id: 37,
    question: "The volume of a cube is 64. What is the surface area?",
    options: ["16", "64", "96", "32"],
    correctAnswer: 2,
    explanation: "s^3 = 64 => s = 4. Surface Area = 6s^2 = 6(4^2) = 6(16) = 96.",
    category: "Geometry and Trigonometry",
    topics: ["Volume"]
  },
  {
    id: 38,
    question: "If 3x - y = 12 and x/y = 2, what is x?",
    options: ["4.8", "6", "8", "12"],
    correctAnswer: 0,
    explanation: "x = 2y. 3(2y) - y = 12 => 6y - y = 12 => 5y = 12 => y = 2.4. x = 2(2.4) = 4.8.",
    category: "Algebra",
    topics: ["Systems of Equations"]
  },
  {
    id: 39,
    question: "Which of the following is equivalent to sin(30)?",
    options: ["cos(30)", "cos(60)", "sin(60)", "tan(45)"],
    correctAnswer: 1,
    explanation: "sin(x) = cos(90-x). sin(30) = cos(60).",
    category: "Geometry and Trigonometry",
    topics: ["Trigonometry"]
  },
  {
    id: 40,
    question: "A box contains 10 red, 20 blue, and 30 green balls. If one is picked at random, what is the probability it is NOT blue?",
    options: ["1/3", "2/3", "1/2", "1/6"],
    correctAnswer: 1,
    explanation: "Total = 60. Not blue = Red + Green = 10 + 30 = 40. P = 40/60 = 2/3.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Probability"]
  },
  {
    id: 41,
    question: "If (x + 2)(x - 5) = 0, what is the sum of the solutions?",
    options: ["3", "-3", "7", "-7"],
    correctAnswer: 0,
    explanation: "Solutions are x = -2 and x = 5. Sum = -2 + 5 = 3.",
    category: "Advanced Math",
    topics: ["Quadratics"]
  },
  {
    id: 42,
    question: "The graph of a linear function passes through (1, 5) and (3, 9). What is the slope?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "m = (y2 - y1) / (x2 - x1) = (9 - 5) / (3 - 1) = 4 / 2 = 2.",
    category: "Algebra",
    topics: ["Linear Functions"]
  },
  {
    id: 43,
    question: "If 100 = 10^k, what is k?",
    options: ["1", "2", "10", "100"],
    correctAnswer: 1,
    explanation: "10^2 = 100. k = 2.",
    category: "Advanced Math",
    topics: ["Exponents"]
  },
  {
    id: 44,
    question: "In a right triangle, one leg is 6 and the hypotenuse is 10. What is the length of the other leg?",
    options: ["4", "8", "12", "16"],
    correctAnswer: 1,
    explanation: "6-8-10 is a Pythagorean triple (2 * 3-4-5). Or 6^2 + b^2 = 10^2. 36 + b^2 = 100. b^2 = 64. b = 8.",
    category: "Geometry and Trigonometry",
    topics: ["Triangles"]
  }
];
