import { Question } from './types';

export const SAT_OCT_2025_FORM_B_SET: Question[] = [
  // --- MODULE 1 (22 Questions) ---
  {
    id: 1,
    question: "The length of a rectangle's diagonal is √65, and the length of one of the rectangle's sides is 4. What is the perimeter of the rectangle?",
    options: ["11", "22", "28", "65"],
    correctAnswer: 1,
    explanation: "d² = l² + w². (√65)² = 4² + w². 65 = 16 + w². w² = 49. w = 7. Perimeter = 2(l + w) = 2(4 + 7) = 2(11) = 22.",
    category: "Geometry",
    topics: ["Rectangles", "Pythagorean Theorem"]
  },
  {
    id: 2,
    question: "The function h is defined by h(x) = 7|x|. What is the value of h(-6)?",
    options: ["-42", "1", "13", "42"],
    correctAnswer: 3,
    explanation: "h(-6) = 7|-6| = 7(6) = 42.",
    category: "Advanced Math",
    topics: ["Absolute Value", "Functions"]
  },
  {
    id: 3,
    question: "If x/y = 52 and cx/4y = 52, what is the value of c?",
    options: ["4", "13", "52", "208"],
    correctAnswer: 0,
    explanation: "(c/4) * (x/y) = 52. (c/4) * 52 = 52. c/4 = 1. c = 4.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 4,
    question: "If 5(8-4x)+2 = 4(8-4x)+18, what is the value of 8-4x?",
    options: ["-16", "-2", "2", "16"],
    correctAnswer: 3,
    explanation: "Let u = 8-4x. 5u + 2 = 4u + 18. u = 16.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 5,
    question: "The function g is defined by g(x) = 16x + 25. For what value of a does g(a) = 29?",
    options: ["0.25", "4", "16", "29"],
    correctAnswer: 0,
    explanation: "16a + 25 = 29. 16a = 4. a = 4/16 = 0.25.",
    category: "Algebra",
    topics: ["Functions"]
  },
  {
    id: 6,
    question: "The positive number a is 240% of the number b, and a is 70% of the number c. If c is p% of b, which of the following is closest to the value of p?",
    options: ["168", "200", "243", "343"],
    correctAnswer: 3,
    explanation: "a = 2.4b. a = 0.7c. 2.4b = 0.7c. c = (2.4/0.7)b ≈ 3.428b. p ≈ 343.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Percentages"]
  },
  {
    id: 7,
    question: "x + y = 48. The given equation relates the total number of marble queen pothos stems, x, and the total number of snow queen pothos stems, y, a plant nursery propagates to create pothos plants. If 18 snow queen pothos stems are propagated, how many marble queen pothos stems are propagated?",
    options: ["48", "30", "18", "12"],
    correctAnswer: 1,
    explanation: "y = 18 (snow queen). x + 18 = 48. x = 30.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 8,
    question: "If 7 + x = 5, what is the value of -14 - 2x?",
    options: ["-10", "-2", "4", "18"],
    correctAnswer: 0,
    explanation: "x = -2. -14 - 2(-2) = -14 + 4 = -10.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 9,
    question: "The function k is defined by k(x) = x³ + 20. What is the value of k(x) when x = 2?",
    options: ["28", "26", "25", "20"],
    correctAnswer: 0,
    explanation: "k(2) = 2³ + 20 = 8 + 20 = 28.",
    category: "Advanced Math",
    topics: ["Functions"]
  },
  {
    id: 10,
    question: "Which expression is a factor of x⁴ + 14ax² + 49a² - 64, where a is a positive constant?",
    options: ["x² + 7a + 8", "x² - 7a - 8", "x² + 14a", "x² - 8a"],
    correctAnswer: 0,
    explanation: "This is a difference of squares: (x² + 7a)² - 8². Factors are (x² + 7a - 8) and (x² + 7a + 8).",
    category: "Advanced Math",
    topics: ["Polynomials", "Factoring"]
  },
  {
    id: 11,
    question: "For the linear function g, g(9) = 11 and g(x+1) - g(x) = 2. Which equation defines g?",
    options: ["g(x) = 9x + 2", "g(x) = 9x + 11", "g(x) = 2x - 18", "g(x) = 2x - 7"],
    correctAnswer: 3,
    explanation: "Slope m = 2. y - 11 = 2(x - 9). y = 2x - 18 + 11 = 2x - 7.",
    category: "Algebra",
    topics: ["Linear Functions"]
  },
  {
    id: 12,
    question: "A hollow steel pipe is in the shape of a right circular cylinder. The steel pipe has an outside diameter of 6.5 inches, a wall thickness of 1 inch, and a height of 144 inches. Which of the following is closest to the volume, in cubic inches, of the wall of this steel pipe?",
    options: ["162", "518", "2,475", "15,389"],
    correctAnswer: 2,
    explanation: "R = 3.25, r = 2.25. V = πh(R² - r²) = 144π(3.25² - 2.25²) = 144π(10.5625 - 5.0625) = 144π(5.5) = 792π ≈ 2488. Closest is 2,475.",
    category: "Geometry",
    topics: ["Volume", "Cylinders"]
  },
  {
    id: 13,
    question: "The function h is defined by h(x) = 7|x|. What is the value of h(-4)?",
    options: ["-28", "3", "11", "28"],
    correctAnswer: 3,
    explanation: "h(-4) = 7|-4| = 28.",
    category: "Advanced Math",
    topics: ["Absolute Value", "Functions"]
  },
  {
    id: 14,
    question: "In triangle ABC, DE is parallel to AC, BD = AD, BE = 9, and AC = 17. What is the length of BC?",
    options: ["153", "34", "26", "18"],
    correctAnswer: 3,
    explanation: "Since DE || AC and D is midpoint (BD=AD), E is midpoint of BC. BC = 2 * BE = 18.",
    category: "Geometry",
    topics: ["Triangles", "Similarity"]
  },
  {
    id: 15,
    question: "If 5(8-2x) + 3 = 4(8-2x) + 15, what is the value of 8-2x?",
    options: ["-12", "2", "2", "12"],
    correctAnswer: 3,
    explanation: "Let u = 8-2x. 5u + 3 = 4u + 15. u = 12.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 16,
    question: "The positive number a is 270% of the number b, and a is 80% of the number c. If c is p% of b, which of the following is closest to the value of p?",
    options: ["213", "216", "238", "338"],
    correctAnswer: 3,
    explanation: "a = 2.7b. a = 0.8c. 2.7b = 0.8c. c = (2.7/0.8)b = 3.375b. p ≈ 338.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Percentages"]
  },
  {
    id: 17,
    question: "x + y = 53. The given equation relates the total number of marble queen pothos stems, x, and the total number of snow queen pothos stems, y, a plant nursery propagates to create pothos plants. If 13 snow queen pothos stems are propagated, how many marble queen pothos stems are propagated?",
    options: ["53", "40", "27", "13"],
    correctAnswer: 1,
    explanation: "y = 13. x + 13 = 53. x = 40.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 18,
    question: "If 7 + x = 5, what is the value of -21 - 3x?",
    options: ["-15", "-3", "6", "27"],
    correctAnswer: 0,
    explanation: "x = -2. -21 - 3(-2) = -21 + 6 = -15.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 19,
    question: "The function k is defined by k(x) = x³ + 50. What is the value of k(x) when x = 2?",
    options: ["50", "55", "56", "58"],
    correctAnswer: 3,
    explanation: "k(2) = 2³ + 50 = 8 + 50 = 58.",
    category: "Advanced Math",
    topics: ["Functions"]
  },
  {
    id: 20,
    question: "2x(x-1)(x+7) = 0. What is one of the solutions to the given equation?",
    options: ["-1", "0", "2", "7"],
    correctAnswer: 1,
    explanation: "Solutions are x = 0, 1, -7. 0 is in the options.",
    category: "Advanced Math",
    topics: ["Polynomials"]
  },
  {
    id: 21,
    question: "The scatterplot shows the relationship between two variables, x and y. A line of best fit for the data is also shown. For how many of the 9 data points is the actual y-value greater than the y-value predicted by the line of best fit?",
    options: ["2", "5", "7", "8"],
    correctAnswer: 1,
    explanation: "Counting points above the line in the scatterplot shows 5 points.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Scatterplots"]
  },
  {
    id: 22,
    question: "For two acute angles X and Y, the measure of angle Y is 24° and sin X / cos Y = 1. What is the measure, in degrees, of angle X?",
    options: ["24", "45", "66", "69"],
    correctAnswer: 2,
    explanation: "sin X = cos Y. Since X and Y are acute, X + Y = 90. X + 24 = 90. X = 66.",
    category: "Geometry and Trigonometry",
    topics: ["Trigonometry"]
  },

  // --- MODULE 2 (22 Questions) ---
  {
    id: 23,
    question: "Which expression is equivalent to 9yz³ + 6yz + 3yz³?",
    options: ["12yz³ + 6yz", "12y² + 6yz", "18yz⁶", "18yz²"],
    correctAnswer: 0,
    explanation: "Combine like terms: 9yz³ + 3yz³ = 12yz³. Result: 12yz³ + 6yz.",
    category: "Algebra",
    topics: ["Polynomials"]
  },
  {
    id: 24,
    question: "A sum of 9,000 dollars was invested in a certificate of deposit (CD) that earns interest, and no other deposits or withdrawals were made after that. The function f(x) = 9,000(1 + 0.03)ˣ gives the value of the CD, in dollars, x years after the investment was initially made, where x ≤ 5. Which of the following is the best interpretation of the statement \"f(2) is approximately equal to 9,474.08\" in this context?",
    options: [
      "The value of the CD would be approximately 9,474.08 dollars if invested at 2% interest.",
      "9,474.08 days after the investment was made, the value of the CD was approximately 2 times greater than its initial value.",
      "2 years after the investment was made, the value of the CD was approximately 9,474.08 dollars.",
      "2 years after the investment was made, the value of the CD was approximately 9,474.08 dollars greater than its initial value."
    ],
    correctAnswer: 2,
    explanation: "x represents years. f(2) is the value after 2 years.",
    category: "Advanced Math",
    topics: ["Exponential Functions"]
  },
  {
    id: 25,
    question: "What is an equation of the graph shown?",
    options: ["49x - 35y = -126", "35x - 49y = -126", "7x - 5y = -18", "5x - 7y = -126"],
    correctAnswer: 2,
    explanation: "The line passes through points that satisfy 7x - 5y = -18 (e.g., roughly (1, 5) and (-4, -2)).",
    category: "Algebra",
    topics: ["Linear Functions", "Graphs"]
  },
  {
    id: 26,
    question: "5y = 6x + 17 and -5y = 7x - 23. The solution to the given system of equations is (x, y). What is the value of 39x?",
    options: ["-18", "-6", "6", "18"],
    correctAnswer: 3,
    explanation: "Add equations: 0 = 13x - 6. 13x = 6. x = 6/13. 39x = 39(6/13) = 18.",
    category: "Algebra",
    topics: ["Systems of Equations"]
  },
  {
    id: 27,
    question: "The shaded region shown represents the solutions to which inequality?",
    options: ["y > 4x + 3", "y > 4x - 3", "y < 4x + 3", "y < 4x - 3"],
    correctAnswer: 2,
    explanation: "Line passes through (0, 3) with slope 4. Shaded region is below/right. Test (0,0): 0 < 3 (True). So y < 4x + 3.",
    category: "Algebra",
    topics: ["Inequalities", "Graphs"]
  },
  {
    id: 28,
    question: "A circle in the xy-plane has its center at (-5, 2) and the point (-9, 5) lies on the circle. Which equation represents this circle?",
    options: ["(x - 5)² + (y + 2)² = 5", "(x + 5)² + (y - 2)² = 5", "(x - 5)² + (y + 2)² = 25", "(x + 5)² + (y - 2)² = 25"],
    correctAnswer: 3,
    explanation: "r² = (-9 - (-5))² + (5 - 2)² = 16 + 9 = 25. Eq: (x + 5)² + (y - 2)² = 25.",
    category: "Geometry",
    topics: ["Circles"]
  },
  {
    id: 29,
    question: "y < -3x + 18. Which point (x, y) is a solution to the given inequality in the xy-plane?",
    options: ["(0, 19)", "(-1, 22)", "(-3, 0)", "(7, -1)"],
    correctAnswer: 2,
    explanation: "Test (-3, 0): 0 < -3(-3) + 18 = 27. True.",
    category: "Algebra",
    topics: ["Inequalities"]
  },
  {
    id: 30,
    question: "18(x + 5) = 2(x + c) + 16x. In the given equation, c is a constant. The equation has infinitely many solutions. What is the value of c?",
    options: ["90", "45", "10", "5"],
    correctAnswer: 1,
    explanation: "18x + 90 = 18x + 2c. 90 = 2c. c = 45.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 31,
    question: "The table shows three values of x and their corresponding values of y. There is a quadratic relationship between x and y. An equation that represents this relationship can be written as y = 36x² - bx - 120, where b is a constant. What is the value of b?",
    options: ["28", "26", "25", "20"],
    correctAnswer: 196, 
    answerText: "196",
    type: "fill-in-the-blank",
    explanation: "Using root x=6: 36(36) - 6b - 120 = 0. 1296 - 120 = 6b. 1176 = 6b. b = 196.",
    category: "Advanced Math",
    topics: ["Quadratics"]
  },
  {
    id: 32,
    question: "Hannah and Wyatt are saving money to purchase a car. Hannah saves 1/5 of her salary each month, and Wyatt saves 2/7 of his salary each month. Together, they save a total of $3,270 from their monthly salaries each month. If h and w represent Hannah's and Wyatt's monthly salaries, in dollars, respectively, which equation shows the relationship between h and w?",
    options: ["h + w = 3,270", "h + 2w = 3,270", "10h + 7w = 114,450", "7h + 10w = 114,450"],
    correctAnswer: 3,
    explanation: "h/5 + 2w/7 = 3270. Multiply by 35: 7h + 10w = 114450.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 33,
    question: "x - a = (x - a)(x - 24). Which of the following are solutions to the given equation, where a is a constant and a > 25?",
    options: ["I and II only", "I and III only", "II and III only", "I, II, and III"],
    correctAnswer: 1,
    explanation: "(x-a)(1 - (x-24)) = 0. (x-a)(25-x) = 0. x=a or x=25. Solutions are I (a) and III (25).",
    category: "Advanced Math",
    topics: ["Quadratics"]
  },
  {
    id: 34,
    question: "If √(x-1) = 2, what is the value of (x-1)?",
    options: ["2", "3", "4", "8"],
    correctAnswer: 2,
    explanation: "Square both sides: x - 1 = 4.",
    category: "Advanced Math",
    topics: ["Radicals"]
  },
  {
    id: 35,
    question: "The figure shows a rectangular pool surrounded by a concrete path that is x feet wide on all sides. The pool is 21 ft long and 11 ft wide. The area of the concrete path is 144 ft². What is the value of x?",
    options: ["2", "4", "18", "36"],
    correctAnswer: 0,
    explanation: "Area path = (21+2x)(11+2x) - 21*11 = 144. 4x² + 64x - 144 = 0. x² + 16x - 36 = 0. (x+18)(x-2)=0. x=2.",
    category: "Geometry",
    topics: ["Area", "Quadratics"]
  },
  {
    id: 36,
    question: "At a nature preserve, a wildlife biologist counted bald eagles from an observation deck at the same time each day for 21 days. The table summarizes the resulting data set, data set A. The data value 19 was recorded in error and is removed from data set A to create data set B. Which statement best compares the median of data set A and the median of data set B?",
    options: [
      "The median of data set B is less than the median of data set A.",
      "The median of data set B is equal to the median of data set A.",
      "The median of data set B is greater than the median of data set A.",
      "There is not enough information to compare the medians of the two data sets."
    ],
    correctAnswer: 1,
    explanation: "Median A (21 values) is 3. Median B (20 values) is 3. They are equal.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Statistics"]
  },
  {
    id: 37,
    question: "One gallon of paint will cover 70 square feet of a surface. A room has a total wall area of w square feet. Which equation represents the total amount of paint P, in gallons, needed to paint the walls of the room twice?",
    options: ["P = w/70", "P = 70w", "P = 140w", "P = w/35"],
    correctAnswer: 3,
    explanation: "Total area = 2w. P = 2w / 70 = w / 35.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Rates"]
  },
  {
    id: 38,
    question: "f(x) = 4⁻⁵⁽ˣ⁺¹⁾. Which of the following equivalent forms of the given function f displays, as the base or the coefficient, the y-coordinate of the y-intercept of the graph of y = f(x) in the xy-plane?",
    options: ["f(x) = (1/1024)(1/4)⁵ˣ", "f(x) = (1/4)⁵ˣ⁺⁵", "f(x) = 4⁻⁵ˣ⁻⁵", "f(x) = 1,024⁻ˣ⁻¹"],
    correctAnswer: 0,
    explanation: "f(0) = 4⁻⁵ = 1/1024. Option A shows 1/1024 as coefficient.",
    category: "Advanced Math",
    topics: ["Exponential Functions"]
  },
  {
    id: 39,
    question: "³√(117n) (⁵√(117n))². For what value of x is the given expression equivalent to (117n)¹¹/ˣ where n > 1?",
    options: ["15", "11", "8", "3"],
    correctAnswer: 15,
    answerText: "15",
    type: "fill-in-the-blank",
    explanation: "1/3 + 2/5 = 11/15. So x = 15.",
    category: "Advanced Math",
    topics: ["Exponents", "Radicals"]
  },
  {
    id: 40,
    question: "The table shows the volume of two similar solids, right circular cylinder A and right circular cylinder B. The radius of right circular cylinder A is 7 units. The surface area of right circular cylinder A is kπ square units, and the surface area of right circular cylinder B is nπ square units, where k and n are constants. What is the value of n - k?",
    options: ["1680", "210", "1890", "1500"],
    correctAnswer: 1680,
    answerText: "1680",
    type: "fill-in-the-blank",
    explanation: "Vol A = 392π. h_A = 8. SA_A = 210π (k=210). Ratio Vol = 27. Scale factor = 3. SA_B = 9 * 210π = 1890π (n=1890). n - k = 1680.",
    category: "Geometry",
    topics: ["Volume", "Surface Area", "Similarity"]
  },
  {
    id: 41,
    question: "In triangle RST, angle T is a right angle, point L lies on RS, point K lies on ST, and LK is parallel to RT. If the length of RT is 63 units, the length of LK is 21 units, and the area of triangle RST is 252 square units, what is the length of KT, in units?",
    options: ["5.33", "8", "2.67", "16"],
    correctAnswer: 0,
    answerText: "16/3",
    type: "fill-in-the-blank",
    explanation: "Area = 0.5 * 63 * ST = 252 => ST = 8. Ratio LK/RT = 1/3. SK = 1/3 ST = 8/3. KT = 8 - 8/3 = 16/3 ≈ 5.33.",
    category: "Geometry",
    topics: ["Triangles", "Similarity"]
  },
  {
    id: 42,
    question: "A researcher investigated two species of mites: a predator and its prey. At the start of a week, there was an equal number of the two species. At the end of the week, the number of prey had increased by 1,900% of the number of prey at the start of the week, and the number of predators had increased by 150% of the number of predators at the start of the week. The number of prey at the end of the week was p% greater than the number of predators at the end of the week. What is the value of p?",
    options: ["700", "500", "350", "1750"],
    correctAnswer: 700,
    answerText: "700",
    type: "fill-in-the-blank",
    explanation: "Prey end = 20x. Pred end = 2.5x. 20x = 2.5x(1 + p/100). 8 = 1 + p/100. p = 700.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Percentages"]
  },
  {
    id: 43,
    question: "The measure of angle Z is 45°. What is the measure, in radians, of angle Z?",
    options: ["π/4", "π/2", "π/8", "π"],
    correctAnswer: 0,
    explanation: "45 * π/180 = π/4.",
    category: "Geometry and Trigonometry",
    topics: ["Radians"]
  },
  {
    id: 44,
    question: "For a certain type of rope, the equation y = 900ax² gives the estimated breaking strength y, in pounds, of a rope with a circumference of x inches. Based on this equation, if a rope of this type has a circumference of 1.75 inches, it has an estimated breaking strength of 3,858.75 pounds. What is the estimated breaking strength, in pounds, of a rope of this type that has a circumference of 3.50 inches?",
    options: ["15435", "7717.5", "3858.75", "1929.375"],
    correctAnswer: 15435,
    answerText: "15435",
    type: "fill-in-the-blank",
    explanation: "Circumference doubles (1.75 to 3.50). Strength is proportional to x². Strength quadruples. 4 * 3858.75 = 15435.",
    category: "Algebra",
    topics: ["Quadratics", "Proportions"]
  }
];
