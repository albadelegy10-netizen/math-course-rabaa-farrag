import { Question } from './types';

export const SAT_JUNE_2025_FORM_B_SET: Question[] = [
  // --- MODULE 1 (22 Questions) ---
  {
    id: 1,
    question: "In the figure, line n intersects lines r and s. Line r is parallel to line s. The angle marked 164° is on line r. What is the value of x, which is an acute angle on line s?",
    options: ["16", "26", "74", "164"],
    correctAnswer: 0,
    explanation: "The angle x and the angle 164° are consecutive interior angles (same side interior). Their sum is 180°. x + 164 = 180 => x = 16.",
    category: "Geometry",
    topics: ["Lines", "Angles"]
  },
  {
    id: 2,
    question: "During a portion of a flight, a small airplane's cruising speed varied between 175 miles per hour and 195 miles per hour. Which inequality best represents this situation, where s is the cruising speed, in miles per hour, during this portion of the flight?",
    options: ["s <= 20", "s <= 175", "s <= 195", "175 <= s <= 195"],
    correctAnswer: 3,
    explanation: "Varied between 175 and 195 means 175 <= s <= 195.",
    category: "Algebra",
    topics: ["Inequalities"]
  },
  {
    id: 3,
    question: "If 5x = 9, what is the value of 20x?",
    options: ["5", "13", "36", "49"],
    correctAnswer: 2,
    explanation: "20x = 4 * (5x) = 4 * 9 = 36.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 4,
    question: "Which expression is equivalent to (x^3 + 9x^2 - 8x) + 5(x^2 + 8)?",
    options: ["x^3 + 14x^2 - 8x + 40", "x^3 + 9x^2 - 8x + 40", "x^3 + 5x^2 - 8x + 40", "x^3 + 8x^2 - 8x + 40"],
    correctAnswer: 0,
    explanation: "x^3 + 9x^2 - 8x + 5x^2 + 40 = x^3 + 14x^2 - 8x + 40.",
    category: "Algebra",
    topics: ["Polynomials"]
  },
  {
    id: 5,
    question: "The function f is defined by f(x) = x^3 + 9. What is the value of f(2)?",
    options: ["17", "11", "15", "13"],
    correctAnswer: 0,
    answerText: "17",
    type: "fill-in-the-blank",
    explanation: "f(2) = 2^3 + 9 = 8 + 9 = 17.",
    category: "Advanced Math",
    topics: ["Functions"]
  },
  {
    id: 6,
    question: "The function g is defined by g(x) = x/2. For what value of x does g(x) = 620?",
    options: ["310", "620", "1240", "2480"],
    correctAnswer: 2,
    answerText: "1240",
    type: "fill-in-the-blank",
    explanation: "x/2 = 620 => x = 1240.",
    category: "Algebra",
    topics: ["Functions"]
  },
  {
    id: 7,
    question: "The scatterplot shows the relationship between two variables, x and y. Which of the following equations is the most appropriate linear model for the data shown?",
    options: ["y = 0.8 + 8.7x", "y = 0.8 - 8.7x", "y = 8.7 + 0.8x", "y = 8.7 - 0.8x"],
    correctAnswer: 2,
    explanation: "The line starts around y=8.7 (intercept) and has a positive slope. Slope is roughly (10-8.7)/2 = 0.65. Closest is 0.8. Equation y = 8.7 + 0.8x.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Scatterplots", "Linear Models"]
  },
  {
    id: 8,
    question: "3x - 2y = -18. For the given equation, which table gives three values of x and their corresponding values of y?",
    options: ["x: 0, 2, 4; y: 9, 12, 15", "x: 0, 2, 4; y: 15, 12, 9", "x: 9, 12, 15; y: 0, 2, 4", "x: 9, 12, 15; y: 4, 2, 0"],
    correctAnswer: 0,
    explanation: "If x=0, -2y=-18 => y=9. If x=2, 6-2y=-18 => -2y=-24 => y=12. Matches Option A.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 9,
    question: "A chemist combines water and isopropanol to make a mixture with a volume of 41 milliliters (mL). The volume of isopropanol in the mixture is 10 mL. What is the volume of water, in mL, in the mixture?",
    options: ["10", "31", "41", "51"],
    correctAnswer: 1,
    answerText: "31",
    type: "fill-in-the-blank",
    explanation: "Water = Total - Isopropanol = 41 - 10 = 31.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Arithmetic"]
  },
  {
    id: 10,
    question: "y = -1/4 x\ny = 1/6 x\nThe solution to the given system of equations is (x, y). What is the value of x?",
    options: ["-4", "0", "2", "6"],
    correctAnswer: 1,
    explanation: "-1/4 x = 1/6 x. Only possible if x = 0.",
    category: "Algebra",
    topics: ["Systems of Equations"]
  },
  {
    id: 11,
    question: "PC = N(18 - C). The given equation relates the variables P, N, and C. Which expression represents the value of C for distinct positive values of P and N?",
    options: ["C(N + P) / N", "PC / (18 - C)", "18N / (N + P)", "18N / (P + 1)"],
    correctAnswer: 2,
    explanation: "PC = 18N - NC. PC + NC = 18N. C(P + N) = 18N. C = 18N / (P + N).",
    category: "Algebra",
    topics: ["Literal Equations"]
  },
  {
    id: 12,
    question: "A company has a customer loyalty program. In January 2018, there were 200 customers enrolled in the loyalty program. For the next 24 months after January 2018, the total number of customers enrolled in the loyalty program each month was 4% greater than the total number enrolled the previous month. Which equation gives the total number of customers, c, enrolled in the company's loyalty program m months after January 2018, where m <= 24?",
    options: ["c = 200(0.04)^m", "c = 200(1.04)^m", "c = 200(1.4)^m", "c = 200(4)^m"],
    correctAnswer: 1,
    explanation: "Growth rate 4% => factor 1.04. c = 200(1.04)^m.",
    category: "Advanced Math",
    topics: ["Exponential Functions"]
  },
  {
    id: 13,
    question: "The function f(t) = 8,000(2)^(t/300) gives the number of bacteria in a population t minutes after an initial observation. How much time, in minutes, does it take for the number of bacteria in the population to double?",
    options: ["150", "300", "600", "2"],
    correctAnswer: 1,
    answerText: "300",
    type: "fill-in-the-blank",
    explanation: "Doubling time is the denominator of the exponent: 300.",
    category: "Advanced Math",
    topics: ["Exponential Functions"]
  },
  {
    id: 14,
    question: "If 3x^2 - 6x - 30 = 0, what is the value of x^2 - 2x?",
    options: ["10", "3", "2", "0"],
    correctAnswer: 0,
    explanation: "Divide by 3: x^2 - 2x - 10 = 0. x^2 - 2x = 10.",
    category: "Advanced Math",
    topics: ["Quadratics"]
  },
  {
    id: 15,
    question: "The function f is defined by f(x) = (x - 4)(x - 11)(x + k), where k is a constant. In the xy-plane, the graph of y = f(x) passes through the point (-2, 0). What is the value of f(0)?",
    options: ["-156", "-2", "13", "88"],
    correctAnswer: 3,
    explanation: "Root at -2 means (-2+k)=0 => k=2. f(x)=(x-4)(x-11)(x+2). f(0)=(-4)(-11)(2) = 44*2 = 88.",
    category: "Advanced Math",
    topics: ["Polynomials"]
  },
  {
    id: 16,
    question: "Line k is shown in the xy-plane. Line j (not shown) is perpendicular to line k and passes through the point (-15, -28). Which equation defines line j?",
    options: ["y = 4/3 x - 8", "y = 4/3 x - 48", "y = 3/4 x - 8", "y = 3/4 x - 48"],
    correctAnswer: 0,
    explanation: "Line k passes through (0, 0) and (-4, 3)? Slope k = -3/4. Perpendicular slope j = 4/3. Eq: y - (-28) = 4/3(x - (-15)). y + 28 = 4/3(x + 15). y = 4/3 x + 20 - 28. y = 4/3 x - 8.",
    category: "Algebra",
    topics: ["Linear Functions"]
  },
  {
    id: 17,
    question: "In right triangle ABC, angles A and B are acute, side AC has a length of 23.2, and Tan B = 1/7. What is the length of side BC, rounded to the nearest tenth?",
    options: ["538.2", "162.4", "4.8", "3.3"],
    correctAnswer: 1,
    explanation: "Tan B = AC/BC. 1/7 = 23.2/BC. BC = 23.2 * 7 = 162.4.",
    category: "Geometry and Trigonometry",
    topics: ["Trigonometry"]
  },
  {
    id: 18,
    question: "A rectangular banner has an area of 3,500 square inches. A copy of the banner is made in which the length and width of the original banner are each increased by 40%. What is the area of the copy, in square inches?",
    options: ["6,860", "4,900", "3,580", "3,540"],
    correctAnswer: 0,
    explanation: "Scale factor 1.4. Area factor 1.4^2 = 1.96. 3500 * 1.96 = 6860.",
    category: "Geometry",
    topics: ["Area", "Similarity"]
  },
  {
    id: 19,
    question: "f(x) = (x - 1)^2 + 7. What is the minimum value of the given function?",
    options: ["1", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "Vertex form (x-h)^2 + k. Min value is k=7.",
    category: "Advanced Math",
    topics: ["Quadratics"]
  },
  {
    id: 20,
    question: "Point F lies on a unit circle in the xy-plane and has coordinates (1, 0). Point G is the center of the circle and has coordinates (0, 0). Point H also lies on the circle and has coordinates (-1, y), where y is a constant. Which of the following could be the positive measure of angle FGH, in radians?",
    options: ["13π/2", "15π/2", "10π", "11π"],
    correctAnswer: 3,
    explanation: "H is (-1, 0). Angle is π. Coterminal angles: 3π, 5π, ... 11π is odd multiple of π.",
    category: "Geometry and Trigonometry",
    topics: ["Unit Circle"]
  },
  {
    id: 21,
    question: "A circle has a circumference of 12π. What is the area of the circle?",
    options: ["6π", "12π", "36π", "144π"],
    correctAnswer: 2,
    explanation: "2πr = 12π => r = 6. Area = πr^2 = 36π.",
    category: "Geometry",
    topics: ["Circles"]
  },
  {
    id: 22,
    question: "x + y = 10\nx + y = 12\nHow many solutions does the given system of equations have?",
    options: ["Zero", "Exactly one", "Exactly two", "Infinitely many"],
    correctAnswer: 0,
    explanation: "Parallel lines with different intercepts. No solution.",
    category: "Algebra",
    topics: ["Systems of Equations"]
  },

  // --- MODULE 2 (22 Questions) ---
  {
    id: 23,
    question: "An object's average acceleration, in meters per second squared, is the change in the object's speed, in meters per second, divided by the time during which the change occurred, in seconds. A certain object's speed changes by 45 meters per second in 6 seconds. What is this object's average acceleration, in meters per second squared, during this time period?",
    options: ["0.13", "7.5", "39", "51"],
    correctAnswer: 1,
    explanation: "Acceleration = Change in Speed / Time = 45 / 6 = 7.5.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Rates"]
  },
  {
    id: 24,
    question: "x + 26 = y\n(x + 26)^2 = y\nA solution to the given system of equations is (x, y). What is a possible value of x?",
    options: ["-25", "0", "1", "26"],
    correctAnswer: 0,
    explanation: "Substitute y: x+26 = (x+26)^2. Let u = x+26. u = u^2. u(u-1)=0. u=0 or u=1. x+26=0 => x=-26. x+26=1 => x=-25.",
    category: "Algebra",
    topics: ["Nonlinear Systems"]
  },
  {
    id: 25,
    question: "Lao walks at a speed of 2 miles per hour and runs at a speed of 6 miles per hour. He walks for w hours and runs for r hours for a combined total of 10 miles. Which equation represents this situation?",
    options: ["2w + 6r = 10", "1/2 w + 1/6 r = 10", "2w + 6r = 80", "1/2 w + 1/6 r = 80"],
    correctAnswer: 0,
    explanation: "Distance = Speed * Time. 2w + 6r = 10.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 26,
    question: "1/3(x + 7) - 1/2(x + 7) = -8. What value of x is the solution to the given equation?",
    options: ["-15", "-7", "41", "132"],
    correctAnswer: 2,
    explanation: "Let u = x+7. u/3 - u/2 = -8. (2u - 3u)/6 = -8. -u/6 = -8. u = 48. x + 7 = 48. x = 41.",
    category: "Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: 27,
    question: "The function g is defined by g(x) = 4/9 x - 24. What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    options: ["54", "24", "96", "108"],
    correctAnswer: 0,
    answerText: "54",
    type: "fill-in-the-blank",
    explanation: "0 = 4/9 x - 24. 24 = 4/9 x. x = 24 * 9 / 4 = 6 * 9 = 54.",
    category: "Algebra",
    topics: ["Linear Functions"]
  },
  {
    id: 28,
    question: "Two students are playing a game. In the first round, Player 1 answers 49 questions. If an answer is correct, Player 1 earns 1 point. If an answer is incorrect, Player 2 will earn 1 point instead. The graph shows y = f(x), where y is the number of points Player 2 will earn when x is the number of points Player 1 earns. Which of the following is the best interpretation of the point (49, 0) in this context?",
    options: ["When Player 1 earns 49 points, Player 2 will earn 49 points.", "When Player 1 earns 49 points, Player 2 will earn 0 points.", "When Player 1 earns 0 points, Player 2 will earn 49 points.", "When Player 1 earns 0 points, Player 2 will earn 0 points."],
    correctAnswer: 1,
    explanation: "x is Player 1 points, y is Player 2 points. (49, 0) means P1 gets 49, P2 gets 0.",
    category: "Algebra",
    topics: ["Linear Functions", "Graphs"]
  },
  {
    id: 29,
    question: "Which expression is a factor of 3x^2 - 5x + 6x - 10?",
    options: ["x - 2", "x + 5", "3x - 5", "3x + 2"],
    correctAnswer: 2,
    explanation: "3x^2 + x - 10. (3x - 5)(x + 2). Factors are 3x-5 and x+2.",
    category: "Algebra",
    topics: ["Factoring"]
  },
  {
    id: 30,
    question: "The graph shows the momentum y, in newton-seconds, of an object x seconds after the object started moving, for 0 <= x <= 8. What is the average rate of change, in newton-seconds per second, in the momentum of the object from x = 2 to x = 6?",
    options: ["1.5", "2", "3", "6"],
    correctAnswer: 0,
    answerText: "1.5",
    type: "fill-in-the-blank",
    explanation: "At x=2, y=4. At x=6, y=10. Rate = (10-4)/(6-2) = 6/4 = 1.5.",
    category: "Advanced Math",
    topics: ["Functions", "Rate of Change"]
  },
  {
    id: 31,
    question: "(x + 64)^2 = -100. How many distinct real solutions does the given equation have?",
    options: ["Exactly one", "Exactly two", "Infinitely many", "Zero"],
    correctAnswer: 3,
    explanation: "Square of a real number cannot be negative.",
    category: "Advanced Math",
    topics: ["Quadratics"]
  },
  {
    id: 32,
    question: "|x - 8| = 11. What is the sum of the solutions to the given equation?",
    options: ["0", "16", "19", "22"],
    correctAnswer: 1,
    explanation: "x-8=11 => x=19. x-8=-11 => x=-3. Sum = 19 + (-3) = 16.",
    category: "Algebra",
    topics: ["Absolute Value"]
  },
  {
    id: 33,
    question: "The manager of a gym selected a sample of 159 members at random... The survey is repeated with a sample of 318 members... The estimate of the percentage... will be the most likely effect of using the larger random sample?",
    options: ["The margin of error will be lower.", "The margin of error will be higher.", "The estimate... will be lower.", "The estimate... will be higher."],
    correctAnswer: 0,
    explanation: "Larger sample size reduces the margin of error.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Statistics"]
  },
  {
    id: 34,
    question: "The maximum temperature on April 1... histogram... The temperature of 76.2°F is removed from this data set... Which of the following statements must be true? I. The mean of the new data set is less than the mean of the original data set. II. The median of the new data set is less than the median of the original data set.",
    options: ["I only", "II only", "I and II", "Neither I nor II"],
    correctAnswer: 0,
    explanation: "Removing the maximum value (outlier) decreases the mean. The median was in the 55-60 bin and likely remains there or shifts slightly but stays within the central cluster, making II not necessarily true or harder to determine without exact values, but I is definitely true.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Statistics"]
  },
  {
    id: 35,
    question: "For the positive quantities h, j, and k, 44% of h is equivalent to 62% of j, and j is equivalent to 22% of k. What percentage of k is h?",
    options: ["31", "22", "44", "62"],
    correctAnswer: 0,
    answerText: "31",
    type: "fill-in-the-blank",
    explanation: "0.44h = 0.62j. j = 0.22k. h = (0.62/0.44)(0.22k) = 0.31k. 31%.",
    category: "Problem-Solving and Data Analysis",
    topics: ["Percentages"]
  },
  {
    id: 36,
    question: "Company A and Company B... The graph shows the relationship between the number of shares of stock from Company A, x, and Company B, y... Which equation could represent this relationship?",
    options: ["y = 10x + 18", "10x + 18y = 900", "y = 18x + 10", "18x + 10y = 900"],
    correctAnswer: 1,
    explanation: "Graph shows x-intercept 90, y-intercept 50. Option B: 10x + 18y = 900. x-int: 10x=900 => x=90. y-int: 18y=900 => y=50. Matches.",
    category: "Algebra",
    topics: ["Linear Equations", "Graphs"]
  },
  {
    id: 37,
    question: "For the exponential function f, the value of f(1) is k, where k is a constant. Which of the following equivalent forms of the function f shows the value of k as the coefficient or the base? f(x) = 35(1.2)^(x+1).",
    options: ["f(x) = 35(1.2)^(x+1)", "f(x) = 42(1.2)^x", "f(x) = 50.4(1.2)^(x-1)", "f(x) = 60.48(1.2)^(x-2)"],
    correctAnswer: 1,
    explanation: "f(1) = 35(1.2)^2 = 35(1.44) = 50.4. Wait. f(x) = 35(1.2)^(x+1) = 35(1.2)(1.2)^x = 42(1.2)^x. In this form, coefficient is 42. f(1) = 42(1.2) = 50.4. The question asks for f(1) to be shown. Option C has 50.4 as coefficient. f(x) = 50.4(1.2)^(x-1). When x=1, f(1) = 50.4(1.2)^0 = 50.4. This form displays the value of f(1). Answer C.",
    category: "Advanced Math",
    topics: ["Exponential Functions"]
  },
  {
    id: 38,
    question: "In triangle PQR, the measure of angle P is (4x + 9)°, the measure of angle Q is (5x + 4)°, and the measure of angle R is (5y + 4)°. If side QR is extended through point R to point S, and the measure of angle PRS is (x + y)°, what is the value of x + y?",
    options: ["31", "29", "2", "176"],
    correctAnswer: 0,
    answerText: "31",
    type: "fill-in-the-blank",
    explanation: "Exterior angle PRS = P + Q. x + y = (4x + 9) + (5x + 4) = 9x + 13. y = 8x + 13. Also R + PRS = 180. (5y + 4) + (x + y) = 180. x + 6y = 176. x + 6(8x + 13) = 176. 49x + 78 = 176. 49x = 98. x = 2. y = 29. x + y = 31.",
    category: "Geometry",
    topics: ["Triangles", "Angles"]
  },
  {
    id: 39,
    question: "The triangle inequality theorem states that the sum of any two sides of a triangle must be greater than the length of the third side. If a triangle has side lengths of 5 and 9, which inequality represents the possible lengths, x, of the third side of the triangle?",
    options: ["x < 14", "x > 14", "4 < x < 14", "x < 4 or x > 14"],
    correctAnswer: 2,
    explanation: "Difference < x < Sum. 9-5 < x < 9+5. 4 < x < 14.",
    category: "Geometry",
    topics: ["Triangles"]
  },
  {
    id: 40,
    question: "A right circular cone has a volume of 34,496π cubic centimeters and the area of its base is 3,136π square centimeters. What is the slant height, in centimeters, of this cone?",
    options: ["11", "33", "56", "65"],
    correctAnswer: 3,
    explanation: "Base Area = πr^2 = 3136π => r = 56. Volume = 1/3 Area * h. 34496π = 1/3 (3136π) h. h = 33. Slant height = sqrt(56^2 + 33^2) = 65.",
    category: "Geometry",
    topics: ["Cones"]
  },
  {
    id: 41,
    question: "A quadratic function models the height, in feet, of an object above the ground in terms of the time, in seconds, after the object was launched. According to the model, the object was launched from a height of 0 feet and reached its maximum height of 400 feet 5 seconds after it was launched. Based on the model, what was the height, in feet, of the object 9 seconds after it was launched?",
    options: ["144", "256", "300", "384"],
    correctAnswer: 0,
    answerText: "144",
    type: "fill-in-the-blank",
    explanation: "h(t) = a(t-5)^2 + 400. h(0)=0 => 25a + 400 = 0 => a = -16. h(9) = -16(9-5)^2 + 400 = -16(16) + 400 = -256 + 400 = 144.",
    category: "Advanced Math",
    topics: ["Quadratics"]
  },
  {
    id: 42,
    question: "The cost of renting a power washer is $56 for the first day and $28 for each additional day. Which of the following functions gives the cost C(d), in dollars, of renting the power washer for d days, where d is a positive integer?",
    options: ["C(d) = 28d + 28", "C(d) = 28d + 56", "C(d) = 56d - 28", "C(d) = 56d + 84"],
    correctAnswer: 0,
    explanation: "C(d) = 56 + 28(d-1) = 28d + 28.",
    category: "Algebra",
    topics: ["Linear Functions"]
  },
  {
    id: 43,
    question: "The function f is defined by f(x) = ax^2 + bx + c, where a, b, and c are constants. The graph of y = f(x) in the xy-plane passes through the points (8, 0) and (-5, 0). If a is an integer greater than 1, which of the following could be the value of a + b?",
    options: ["4", "3", "-2", "-4"],
    correctAnswer: 3,
    explanation: "f(x) = a(x-8)(x+5) = a(x^2 - 3x - 40) = ax^2 - 3ax - 40a. b = -3a. a+b = -2a. Since a > 1, a+b can be -4, -6, ... -4 is an option.",
    category: "Advanced Math",
    topics: ["Quadratics"]
  },
  {
    id: 44,
    question: "In the given equation, q is an integer constant. The given equation has no real solutions. What is the largest possible value of q? x^2 + qx = 4x - 55.",
    options: ["18", "19", "20", "21"],
    correctAnswer: 0,
    answerText: "18",
    type: "fill-in-the-blank",
    explanation: "x^2 + (q-4)x + 55 = 0. Discriminant (q-4)^2 - 220 < 0. (q-4)^2 < 220. -14.8 < q-4 < 14.8. q < 18.8. Max integer 18.",
    category: "Advanced Math",
    topics: ["Quadratics"]
  }
];
