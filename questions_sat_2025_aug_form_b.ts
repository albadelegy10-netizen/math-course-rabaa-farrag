import { Question } from './types';

export const SAT_AUG_2025_FORM_B_SET: Question[] = [
  // --- MODULE 1 (22 Questions) ---
  {
    id: 1,
    question: "The length of each side of triangle A is 270 millimeters. The length of each side of triangle B is double the length of each side of triangle A. What is the length, in millimeters, of each side of triangle B?",
    options: ["270", "272", "540", "1,080"],
    correctAnswer: 2,
    explanation: "Side B = 2 * Side A = 2 * 270 = 540.",
    category: "Geometry",
    topics: ["Triangles", "Similarity"]
  },
  {
    id: 2,
    question: "Carrie has c dollars and Marjani has m dollars. Carrie has 4 times as many dollars as Marjani, and together they have a total of $40.00. Which system of equations represents this situation?",
    options: ["c = 4m\nc + m = 40", "m = 4c\nc + m = 40", "c = 40m\nc + m = 4", "m = 40c\nc + m = 4"],
    correctAnswer: 0,
    explanation: "Carrie (c) has 4 times Marjani (m) => c = 4m. Total is 40 => c + m = 40.",
    category: "Algebra",
    topics: ["Systems of Equations"]
  },
  {
    id: 3,
    question: "Anton is selling toys from his toy collection. When he started selling the toys, there were 2,800 toys in the collection. At the end of each week for 3 weeks after Anton started selling the toys, the number of toys in the collection had decreased by 1/2 of the toys in the collection at the end of the previous week. Which equation gives the number of toys, c, in the collection w weeks after Anton started selling the toys, where 0 <= w <= 3?",
    options: ["c = w^(1/2)", "c = 2,800(1/2)^w", "c = 1,400(1/2)^w", "c = 2,800(1/2)w"],
    correctAnswer: 1,
    explanation: "Initial amount 2800. Decreases by half each week means multiplying by 1/2. c = 2800(1/2)^w.",
    category: "Advanced Math",
    topics: ["Exponential Functions"]
  },
  {
    id: 4,
    question: "√w + 22 = 28. What is the solution to the given equation?",
    options: ["2", "3", "12", "36"],
    correctAnswer: 3,
    explanation: "√w = 28 - 22 = 6. w = 6^2 = 36.",
    category: "Advanced Math",
    topics: ["Radicals"]
  },
  {
    id: 5,
    question: "The function f is defined by f(x) = 7x³ + 6. What is the value of f(2)?",
    options: ["62", "56", "20", "14"],
    correctAnswer: 0,
    answerText: "62",
    type: "fill-in-the-blank",
    explanation: "f(2) = 7(2)^3 + 6 = 7(8) + 6 = 56 + 6 = 62.",
    category: "Advanced Math",
    topics: ["Functions"]
  },
  {
    id: 6,
    question: "The function f(x) = -30x + 310 gives the predicted height above the ground f(x), in feet, of a model airplane x minutes after it begins to descend. What is the predicted height above the ground, in feet, of the model airplane 2 minutes after it begins to descend?",
    options: ["60", "250", "280", "370"],
    correctAnswer: 1,
    explanation: "f(2) = -30(2) + 310 = -60 + 310 = 250.",
    category: "Algebra",
    topics: ["Linear Functions"]
  },
  {
    id: 7,
    question: "2x = 9 + 7y\n-2x = 3 + 7y\nThe solution to the given system of equations is (x, y). What is the value of 4x?",
    options: ["6", "12", "3", "-6"],
    correctAnswer: 0,
    answerText: "6",
    type: "fill-in-the-blank",
    explanation: "Rewrite: 2x - 7y = 9 and -2x - 7y = 3. Subtract second from first: (2x) - (-2x) = 9 - 3. 4x = 6.",
    category: "Algebra",
    topics: ["Systems of Equations"]
  },
  {
    id: 8,
    question: "A bank account was opened with an initial deposit. Over the next several months, regular deposits were made into this account, and there were no withdrawals made during this time. The graph of the function f shown, where y = f(x), estimates the account balance, in dollars, in this bank account x months since the initial deposit. To the nearest whole dollar, what is the amount of the initial deposit estimated by the graph?",
    options: ["10", "20", "0", "50"],
    correctAnswer: 0,
    answerText: "10",
    type: "fill-in-the-blank",
    explanation: "The initial deposit corresponds to the y-intercept (x=0). The graph starts at y=10.",
    category: "Algebra",
    topics: ["Linear Functions", "Graphs"]
  },
  {
    id: 9,
    question: "y = -12x + 16\ny = -20x + 24\nWhat is the solution (x, y) to the given system of equations?",
    options: ["(1, 4)", "(16, 24)", "(24, 16)", "(4, 1)"],
    correctAnswer: 0,
    explanation: "-12x + 16 = -20x + 24. 8x = 8. x = 1. y = -12(1) + 16 = 4. Solution (1, 4).",
    category: "Algebra",
    topics: ["Systems of Equations"]
  },
  {
    id: 10,
    question: "A rectangle has a length that is 73 times its width. The function y = (73w)(w) represents this situation, where y is the area, in square feet, of the rectangle and y > 0. Which of the following is the best interpretation of 73w in this context?",
    options: ["The length of the rectangle, in feet", "The area of the rectangle, in square feet", "The difference between the length and the width of the rectangle, in feet", "The width of the rectangle, in feet"],
    correctAnswer: 0,
    explanation: "Area = Length * Width. y = (73w) * w. Since width is w, length must be 73w.",
    category: "Geometry",
    topics: ["Area", "Rectangles"]
  },
  {
    id: 11,
    question: "An entomologist placed an initial population of 40 Tenebrio molitor, a type of beetle, into a habitat and monitored the population over time. When the number of Tenebrio molitor in the habitat reached 170% of the initial population, the entomologist moved 75% of the Tenebrio molitor to a second habitat. How many Tenebrio molitor did the entomologist move to the second habitat at this time?",
    options: ["51", "68", "30", "40"],
    correctAnswer: 0,
    answerText: "51",
    type: "fill-in-the-blank",
    explanation: "Reached 170% of 40 = 1.7 * 40 = 68. Moved 75% of 68 = 0.75 * 68 = 51.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Percentages"]
  },
  {
    id: 12,
    question: "For the polynomial function f, the graph of y = f(x) in the xy-plane passes through the points (-3, 0), (1, 0), and (4, 0). Which of the following must be a factor of f(x)?",
    options: ["x + 1", "x + 4", "x - 1", "x - 3"],
    correctAnswer: 2,
    explanation: "If (1, 0) is a point, then x=1 is a root, so (x-1) is a factor.",
    category: "Advanced Math",
    topics: ["Polynomials"]
  },
  {
    id: 13,
    question: "A circle has a circumference of 89π centimeters. What is the diameter, in centimeters, of the circle?",
    options: ["89", "44.5", "178", "89π"],
    correctAnswer: 0,
    answerText: "89",
    type: "fill-in-the-blank",
    explanation: "C = πd. 89π = πd. d = 89.",
    category: "Geometry",
    topics: ["Circles"]
  },
  {
    id: 14,
    question: "If (x - 17)/18 = (x - 17)/6, what is the value of x + 17?",
    options: ["0", "3", "17", "34"],
    correctAnswer: 3,
    explanation: "For A/18 = A/6 to be true, A must be 0. x - 17 = 0 => x = 17. x + 17 = 34.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 15,
    question: "For what value of a is ⁶√r⁴² equivalent to rᵃ, where r > 1?",
    options: ["7", "6", "42", "1"],
    correctAnswer: 0,
    answerText: "7",
    type: "fill-in-the-blank",
    explanation: "r^(42/6) = r^7. a = 7.",
    category: "Advanced Math",
    topics: ["Exponents", "Radicals"]
  },
  {
    id: 16,
    question: "In the xy-plane, line s passes through the point (0, 0) and is parallel to the line represented by the equation y = 36x + 6. If line s also passes through the point (9, d), what is the value of d?",
    options: ["324", "36", "9", "4"],
    correctAnswer: 0,
    answerText: "324",
    type: "fill-in-the-blank",
    explanation: "Parallel means slope is 36. Passes through (0,0) means y = 36x. At x=9, y = 36(9) = 324.",
    category: "Algebra",
    topics: ["Linear Functions"]
  },
  {
    id: 17,
    question: "Circles A and B are graphed in the xy-plane. Circle A is represented by the equation (x + 8)² + (y - 8)² = 64 and intersects the x-axis at the point (r, s). Circle B has its center at (r, s) and has a radius of the same length as circle A. Which equation represents circle B?",
    options: ["x² + (y + 8)² = 64", "x² + (y - 8)² = 64", "(x + 8)² + y² = 64", "(x - 8)² + y² = 64"],
    correctAnswer: 2,
    explanation: "Circle A center (-8, 8), radius 8. Tangent to x-axis at (-8, 0). So (r, s) = (-8, 0). Circle B center (-8, 0), radius 8. Eq: (x+8)² + y² = 64.",
    category: "Geometry",
    topics: ["Circles"]
  },
  {
    id: 18,
    question: "The dot plots represent the distributions of values in data sets A and B. Which of the following statements must be true? I. The median of data set A is equal to the median of data set B. II. The standard deviation of data set A is equal to the standard deviation of data set B.",
    options: ["I and II", "I only", "II only", "Neither I nor II"],
    correctAnswer: 0,
    explanation: "The dot plots are identical in distribution. Therefore, both median and standard deviation are equal.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Statistics"]
  },
  {
    id: 19,
    question: "The scatterplot shows the relationship between two variables, x and y. A line of best fit for the data is also shown. For how many of the 9 data points is the actual y-value greater than the y-value predicted by the line of best fit?",
    options: ["8", "7", "5", "2"],
    correctAnswer: 2,
    explanation: "Counting the points strictly above the line yields 5 points.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Scatterplots"]
  },
  {
    id: 20,
    question: "RS = 504, ST = 128, TR = 520. The side lengths of right triangle RST are given. Triangle RST is similar to triangle UVW, where S corresponds to V and T corresponds to W. What is the value of tan W?",
    options: ["16/65", "16/63", "63/65", "63/16"],
    correctAnswer: 3,
    explanation: "S is the right angle (520 is hypotenuse). tan T = RS/ST = 504/128 = 63/16. Since T corresponds to W, tan W = 63/16.",
    category: "Geometry and Trigonometry",
    topics: ["Trigonometry", "Similarity"]
  },
  {
    id: 21,
    question: "f(x) = 20(2)^x + 6(2)^x. The function f is defined by the given equation. Which of the following equivalent forms of f displays, as a coefficient or a base, the y-coordinate of the y-intercept of the graph of y = f(x) in the xy-plane?",
    options: ["f(x) = 80(2)^(x-2) + 24(2)^(x-2)", "f(x) = 2(10(2)^x + 3(2)^x)", "f(x) = 20(4)^(x/2) + 6(4)^(x/2)", "f(x) = 26(2)^x"],
    correctAnswer: 3,
    explanation: "Combine terms: f(x) = 26(2)^x. y-intercept is f(0) = 26. This form displays 26.",
    category: "Advanced Math",
    topics: ["Exponential Functions"]
  },
  {
    id: 22,
    question: "In a set of three consecutive integers, where the integers are ordered from least to greatest, the first integer is represented by x. The sum of 4 and the second integer is less than the product of 17 and the third integer. Which inequality represents this situation?",
    options: ["4 + (x + 1) > 17(x + 2)", "4 + (x + 1) < 17(x + 2)", "4 + (x + 2) > 17(x + 3)", "4 + (x + 2) < 17(x + 3)"],
    correctAnswer: 1,
    explanation: "Second integer is x+1. Third is x+2. Sum of 4 and second: 4 + (x+1). Product of 17 and third: 17(x+2). Inequality: 4 + (x+1) < 17(x+2).",
    category: "Algebra",
    topics: ["Inequalities"]
  },

  // --- MODULE 2 (22 Questions) ---
  {
    id: 23,
    question: "The function g is defined by g(x) = 19 - x. What is the value of g(4)?",
    options: ["4", "15", "19", "23"],
    correctAnswer: 1,
    explanation: "g(4) = 19 - 4 = 15.",
    category: "Algebra",
    topics: ["Functions"]
  },
  {
    id: 24,
    question: "Micah deposited a total of $6,600 into two retirement accounts last year by depositing x dollars once each month into one account and y dollars twice each month into the other account. Which equation represents this situation?",
    options: ["6,600 = 12x + 12y", "6,600 = 12x + 24y", "6,600 = 24x + 12y", "6,600 = 24x + 24y"],
    correctAnswer: 1,
    explanation: "One account: x once/month = 12x. Other: y twice/month = 24y. Total 6600 = 12x + 24y. Wait, let me re-read screenshot 7. 'y dollars twice each month'. Yes, 24y. Option B is 12x + 24y. My previous analysis said B was 12x+12y. Let me check screenshot 7 again. Option B: 6,600 = 12x + 24y. Correct.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 25,
    question: "The measure of angle G is π/10 radians. If the measure of angle G is 9n degrees, where n is a constant, what is the value of n?",
    options: ["2", "9", "10", "18"],
    correctAnswer: 0,
    explanation: "π/10 radians = 18 degrees. 9n = 18 => n = 2.",
    category: "Geometry and Trigonometry",
    topics: ["Radians"]
  },
  {
    id: 26,
    question: "The ratio 6 to 3 is equivalent to the ratio 24 to 3k, where k is a constant. What is the value of k?",
    options: ["0.75", "4", "12", "72"],
    correctAnswer: 1,
    explanation: "6/3 = 24/(3k). 2 = 8/k. k = 4.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Ratios"]
  },
  {
    id: 27,
    question: "Which expression is equivalent to (8m² + 2nr) + (4n²r + 3nr)?",
    options: ["12n²r² + 5nr", "12n³r³ + 5n²r²", "32n³r³ + 6n²r²", "8m² + 4n²r + 5nr"],
    correctAnswer: 3,
    explanation: "Combine like terms: 8m² + 4n²r + (2nr + 3nr) = 8m² + 4n²r + 5nr.",
    category: "Algebra",
    topics: ["Polynomials"]
  },
  {
    id: 28,
    question: "R = 0.43l / A. The given equation relates the resistance R, in ohms, of a wire to its length l, in meters, and its cross-sectional area A, in square meters. Which equation correctly expresses the length, in meters, of the wire in terms of its resistance, in ohms, and its cross-sectional area, in square meters?",
    options: ["l = (R - A) / 0.43", "l = (R + A) / 0.43", "l = 0.43R / A", "l = AR / 0.43"],
    correctAnswer: 3,
    explanation: "Multiply by A: RA = 0.43l. Divide by 0.43: l = RA / 0.43.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 29,
    question: "The graphs of y = -3x + 7 and y = x - 5 are shown. Point P (not shown) has coordinates (3, -5) and lies in the shaded region. The coordinates of P satisfy which of the following inequalities? I. y < -3x + 7. II. y > x - 5.",
    options: ["I only", "II only", "I and II", "Neither I nor II"],
    correctAnswer: 0,
    explanation: "Test (3, -5): -5 < -3(3)+7 = -2 (True). -5 > 3-5 = -2 (False). Only I is satisfied.",
    category: "Algebra",
    topics: ["Inequalities"]
  },
  {
    id: 30,
    question: "There is a linear relationship between x and y. The table shows three values of x and their corresponding values of y in terms of a constant n. (0, n), (5, n+24), (10, n+48). What is the slope of the line that represents this relationship in the xy-plane?",
    options: ["4.8", "24", "5", "12"],
    correctAnswer: 0,
    answerText: "4.8",
    type: "fill-in-the-blank",
    explanation: "Slope = (n+24 - n) / (5 - 0) = 24/5 = 4.8.",
    category: "Algebra",
    topics: ["Linear Functions"]
  },
  {
    id: 31,
    question: "If (1/2 x - 21/2)² - 81 = 0, what is the value of (x - 21)²?",
    options: ["324", "162", "21", "9"],
    correctAnswer: 0,
    explanation: "(1/2(x-21))^2 = 81. 1/4(x-21)^2 = 81. (x-21)^2 = 324.",
    category: "Advanced Math",
    topics: ["Quadratics"]
  },
  {
    id: 32,
    question: "Rectangles ABCD and EFGH are similar. The length of each side of EFGH is 6 times the length of the corresponding side of ABCD. The area of ABCD is 90 square units. What is the area, in square units, of EFGH?",
    options: ["15", "36", "540", "3,240"],
    correctAnswer: 3,
    explanation: "Area ratio is square of side ratio. 6^2 = 36. 36 * 90 = 3240.",
    category: "Geometry",
    topics: ["Area", "Similarity"]
  },
  {
    id: 33,
    question: "On a plot of land, 48.0% of the square footage is farmland and the remaining square footage is pasture. There are buildings on exactly 16.0% of the square footage of the pasture. If there are buildings on exactly p% of the square footage of the plot of land, what is the value of p?",
    options: ["8.32", "16", "32", "64"],
    correctAnswer: 0,
    answerText: "8.32",
    type: "fill-in-the-blank",
    explanation: "Pasture = 100 - 48 = 52%. Buildings = 16% of 52% = 0.16 * 52 = 8.32.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Percentages"]
  },
  {
    id: 34,
    question: "The scatterplot shows data set A, which consists of the weights y, in pounds, of a Labrador retriever puppy at various ages, x, in months. The equation of a line of best fit for the relationship in data set A can be written as y = -5.1 + 8.7x, where 2 <= x <= 6. The puppy was weighed again at 9 months old and weighed 52 pounds. Data set B consists of all the data points in data set A as well as the data point (9, 52). The equation of a line of best fit for data set B can be written as y = r + zx, where r and z are constants. Which of the following is the best estimate for the value of z?",
    options: ["5.9", "8.7", "13.8", "17.7"],
    correctAnswer: 0,
    explanation: "The new point (9, 52) is significantly below the projected trend (8.7*9 - 5.1 = 73.2). This will pull the slope down. 5.9 is the only option less than 8.7.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Scatterplots", "Linear Models"]
  },
  {
    id: 35,
    question: "If |16 - 2x| = 58, which of the following is a value of 8 - x?",
    options: ["0", "8", "29", "42"],
    correctAnswer: 2,
    explanation: "|2(8 - x)| = 58 => 2|8 - x| = 58 => |8 - x| = 29. So 8 - x can be 29 or -29.",
    category: "Algebra",
    topics: ["Absolute Value"]
  },
  {
    id: 36,
    question: "A book-of-the-month club charges $16 for the first book purchased during the month and an additional $11 for each book after the first. Which equation describes this situation, where y is the total cost, in dollars, for books purchased during a month, x is the number of books purchased during the month, and x > 0?",
    options: ["y = x + 16", "y = 11x + 16", "y = 11(x - 1) + 16", "y = (x - 1) + 16"],
    correctAnswer: 2,
    explanation: "Cost = 16 + 11(x - 1).",
    category: "Algebra",
    topics: ["Linear Functions"]
  },
  {
    id: 37,
    question: "A company developed a plan to set the selling price of a product. The company determined that for a selling price of $120.00, zero products would be sold. For each $2.50 decrease in the selling price, the number of products sold would increase by one. For a revenue of exactly $1,437.50, which of the following could be the number of products sold?",
    options: ["23", "24", "527", "1,440"],
    correctAnswer: 0,
    explanation: "Price p = 120 - 2.5n. Revenue = n(120 - 2.5n) = 1437.5. 2.5n^2 - 120n + 1437.5 = 0. n = 23 or n = 25.",
    category: "Advanced Math",
    topics: ["Quadratics"]
  },
  {
    id: 38,
    question: "The equation of the graph shown is y = a^x + b, where a and b are constants. What is the value of a - b?",
    options: ["10", "16", "20", "36"],
    correctAnswer: 0,
    answerText: "10",
    type: "fill-in-the-blank",
    explanation: "Graph passes through (0, -5) and (1, -2). 0: 1+b=-5 => b=-6. 1: a-6=-2 => a=4. a-b = 4-(-6)=10.",
    category: "Advanced Math",
    topics: ["Exponential Functions"]
  },
  {
    id: 39,
    question: "y = 7x² - bx - 6. Which of the following equations is equivalent to the given equation, where b is a positive constant?",
    options: ["y = 7(x - b/14)² - 6 - b²/28", "y = 7(x - b/14)² - 6", "y = 7(x + b/14)² - 6 - b²/28", "y = 7(x + b/14)² - 6"],
    correctAnswer: 0,
    explanation: "Vertex form completion. 7(x² - bx/7) - 6. 7(x² - bx/7 + (b/14)²) - 6 - 7(b/14)². 7(x - b/14)² - 6 - 7(b²/196). 7(x - b/14)² - 6 - b²/28.",
    category: "Advanced Math",
    topics: ["Quadratics"]
  },
  {
    id: 40,
    question: "The equation d = 6t + 210 gives the distance d, in feet, from a reference point on the surface of Mars to a Mars rover, where t is the number of minutes after the start of a period of observation. By how many feet does the Mars rover's distance from the reference point increase over a period of 20 minutes?",
    options: ["330", "230", "120", "6"],
    correctAnswer: 2,
    explanation: "Rate is 6 ft/min. Increase = 6 * 20 = 120.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 41,
    question: "A line intersects two parallel lines, forming four acute angles and four obtuse angles. The measure of one of the acute angles is (7x - 410)°. The sum of the measures of one of the acute angles and three of the obtuse angles is (-14x + w)°. What is the value of w?",
    options: ["1360", "1000", "590", "180"],
    correctAnswer: 0,
    answerText: "1360",
    type: "fill-in-the-blank",
    explanation: "Acute A = 7x - 410. Obtuse O = 180 - A = 590 - 7x. Sum = A + 3O = 7x - 410 + 3(590 - 7x) = 7x - 410 + 1770 - 21x = -14x + 1360. w = 1360.",
    category: "Geometry",
    topics: ["Angles", "Parallel Lines"]
  },
  {
    id: 42,
    question: "The table summarizes the distribution of age and assigned group for 90 participants in a study. One of these participants will be selected at random. What is the probability of selecting a participant from group A, given that the participant is at least 10 years of age?",
    options: ["1/6", "1/4", "11/30", "1/2"],
    correctAnswer: 1,
    explanation: "Total >= 10 is 30 + 30 = 60. Group A >= 10 is 11 + 4 = 15. Prob = 15/60 = 1/4.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Probability"]
  },
  {
    id: 43,
    question: "A circle in the xy-plane has its center at (2, 9). Line t is tangent to this circle at the point (a, -4), where a is a constant. The slope of line t is 6/5. What is the value of a?",
    options: ["68/5", "53/6", "77/6", "88/5"],
    correctAnswer: 3,
    explanation: "Slope of radius = -5/6. Slope = (-4 - 9)/(a - 2) = -13/(a - 2). -13/(a - 2) = -5/6. 78 = 5a - 10. 5a = 88. a = 88/5.",
    category: "Geometry",
    topics: ["Circles", "Tangent Lines"]
  },
  {
    id: 44,
    question: "-x² + bx - 49 = 0. In the given equation, b is an integer. The equation has no real solutions. What is the least possible value of b?",
    options: ["-13", "-14", "0", "13"],
    correctAnswer: 0,
    answerText: "-13",
    type: "fill-in-the-blank",
    explanation: "Discriminant b² - 4(-1)(-49) < 0. b² - 196 < 0. -14 < b < 14. Least integer is -13.",
    category: "Advanced Math",
    topics: ["Quadratics"]
  }
];
