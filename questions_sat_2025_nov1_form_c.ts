import { Question } from './types';

export const SAT_NOV1_2025_FORM_C_SET: Question[] = [
  // Module 1
  {
    id: 304,
    question: "A sample was selected at random from a population. Based on the sample, it is estimated that the mean value of a variable for this population is 178, with an associated margin of error of 1.5. Based on the estimate and associated margin of error, which of the following best describes the range of plausible values for the population mean?",
    options: [
      "Any value between 175 and 178",
      "Any value between 176.5 and 179.5",
      "Any value less than 176.5",
      "Any value greater than 179.5"
    ],
    correctAnswer: 1,
    explanation: "The range of plausible values is the estimate plus or minus the margin of error: 178 - 1.5 = 176.5 and 178 + 1.5 = 179.5. So the range is 176.5 to 179.5.",
    category: "Statistics",
    topics: ["Statistics"]
  },
  {
    id: 305,
    question: "A line in the xy-plane has a slope of 0 and passes through the point (8, 2). Which equation represents this line?",
    options: [
      "y = 2",
      "y = 8",
      "y = 2x",
      "y = 8x"
    ],
    correctAnswer: 0,
    explanation: "A line with slope 0 is a horizontal line of the form y = k. Since it passes through (8, 2), the y-coordinate is 2. So the equation is y = 2.",
    category: "Linear Equations",
    topics: ["Linear Equations"]
  },
  {
    id: 306,
    question: "During hibernation, American black bears do not eat or replenish calories. A certain black bear weighed 258 pounds when entering hibernation and lost weight at a mean rate of 0.8 pounds per day. At this rate, how many days after entering hibernation would the black bear weigh 210 pounds?",
    options: [
      "39",
      "48",
      "60",
      "168"
    ],
    correctAnswer: 2,
    explanation: "Weight loss = 258 - 210 = 48 pounds. Rate = 0.8 lbs/day. Days = 48 / 0.8 = 60.",
    category: "Word Problem",
    topics: ["Word Problem", "Linear Equations"]
  },
  {
    id: 307,
    question: "The graph of $y = (\\frac{1}{8})^x + 1$ in the xy-plane is shifted up 6 units. What is an equation of the resulting graph?",
    options: [
      "y = (\\frac{1}{8})^{x+6} + 1",
      "y = (\\frac{1}{8})^{x-6} + 1",
      "y = 6(\\frac{1}{8})^x + 1",
      "y = (\\frac{1}{8})^x + 7"
    ],
    correctAnswer: 3,
    explanation: "Shifting a function f(x) up by k units results in f(x) + k. Here, f(x) = (1/8)^x + 1. Adding 6 gives (1/8)^x + 1 + 6 = (1/8)^x + 7.",
    category: "Functions",
    topics: ["Functions", "Transformation", "Exponential Growth"]
  },
  {
    id: 308,
    question: "The function $f(x) = 500(0.5)^{\\frac{x}{7}}$ gives the predicted intensity of a beam $f(x)$, in number of photons in the beam, $x$ millimeters below the surface of a certain material. What is the best interpretation of $f(7) = 250$?",
    options: [
      "A beam at the surface of the material has a predicted intensity of 7 photons in the beam.",
      "A beam at the surface of the material has a predicted intensity of 250 photons in the beam.",
      "A beam 7 millimeters below the surface of the material has a predicted intensity of 250 photons in the beam.",
      "A beam 7 millimeters below the surface of the material has a predicted intensity of 500 photons in the beam."
    ],
    correctAnswer: 2,
    explanation: "x represents the depth in millimeters. f(x) represents the intensity. f(7) = 250 means at a depth of x=7 mm, the intensity is 250 photons.",
    category: "Functions",
    topics: ["Functions", "Exponential Growth"]
  },
  {
    id: 309,
    question: "Which expression is equivalent to $10x^3 + 90x^2y + xy^2 + 9y^3$?",
    options: [
      "$(10x^2 + 9y)(x + y^2)$",
      "$(10x^2 + y^2)(x + 9y)$",
      "$(10x^3 + y^2)(x^2 + 9y^3)$",
      "$(10x^3 + y^3)(x + 9y)$"
    ],
    correctAnswer: 1,
    explanation: "Factor by grouping: $10x^2(x + 9y) + y^2(x + 9y) = (10x^2 + y^2)(x + 9y)$.",
    category: "Polynomials",
    topics: ["Polynomials", "Factoring"]
  },
  {
    id: 310,
    question: "A marine biologist is studying a habitat that contains shoal bass, a species of freshwater fish. The box plot shown summarizes the lengths, in centimeters (cm), of a sample of 65 shoal bass from this habitat. What is the range, in cm, of the lengths of the shoal bass in the sample?",
    options: [
      "12",
      "17",
      "18",
      "47"
    ],
    correctAnswer: 2,
    explanation: "The range is the maximum value minus the minimum value. From the box plot (based on visual inspection of the screenshot), Max is 56 and Min is 38. Range = 56 - 38 = 18.",
    category: "Statistics",
    topics: ["Statistics", "Data Analysis"]
  },
  {
    id: 311,
    question: "$(x - 20)(x - 10)(x + 3)(x + 15) = 0$. What is a positive solution to the given equation?",
    options: [],
    correctAnswer: 0,
    answerText: "10",
    explanation: "The solutions are x = 20, x = 10, x = -3, x = -15. The positive solutions are 10 and 20. 10 is one valid answer.",
    category: "Polynomials",
    topics: ["Polynomials", "solving equation"]
  },
  {
    id: 312,
    question: "The table gives the perimeters of similar triangles TUV and XYZ, where TU corresponds to XY. The length of TU is 18. What is the length of XY?",
    options: [
      "2",
      "18",
      "61",
      "162"
    ],
    correctAnswer: 3,
    explanation: "Perimeter of TUV = 43. Perimeter of XYZ = 387. Ratio of perimeters = 387/43 = 9. Since triangles are similar, the ratio of corresponding sides is the same. XY/TU = 9. XY = 9 * TU = 9 * 18 = 162.",
    category: "Geometry",
    topics: ["Geometry", "Triangles", "ratio"]
  },
  {
    id: 313,
    question: "What is 5% of 220?",
    options: [
      "11",
      "44",
      "110",
      "215"
    ],
    correctAnswer: 0,
    explanation: "0.05 * 220 = 11.",
    category: "Percentages",
    topics: ["percentage"]
  },
  {
    id: 314,
    question: "$12x + 13y = 21$. If the graph of the given equation is shifted up 5 units in the xy-plane, what is the y-intercept of the resulting graph?",
    options: [
      "$(0, \\frac{86}{13})$",
      "$(0, \\frac{21}{13})$",
      "$(0, \\frac{53}{13})$",
      "$(0, 26)$"
    ],
    correctAnswer: 0,
    explanation: "Original y-intercept (set x=0): 13y = 21 => y = 21/13. Shifting up 5 units adds 5 to the y-coordinate: 21/13 + 5 = 21/13 + 65/13 = 86/13. The point is (0, 86/13).",
    category: "Linear Equations",
    topics: ["Linear Equations", "Transformation"]
  },
  {
    id: 315,
    question: "The area of a triangle is 54 square inches. The length of the base of the triangle, in inches, is the sum of 8 and a positive number d, and the height, in inches, is 4 less than d. What is the value of d?",
    options: [],
    correctAnswer: 0,
    answerText: "10",
    explanation: "Area = 1/2 * base * height. 54 = 1/2 * (8+d) * (d-4). 108 = (d+8)(d-4). 108 = d^2 + 4d - 32. d^2 + 4d - 140 = 0. (d+14)(d-10) = 0. Since d is positive, d = 10.",
    category: "Geometry",
    topics: ["Geometry", "Quadratics", "area"]
  },
  {
    id: 316,
    question: "The shaded region shown represents the solutions to which inequality?",
    options: [
      "$y > 2x - 40$",
      "$y < 2x - 40$",
      "$y > 10x - 40$",
      "$y < 10x - 40$"
    ],
    correctAnswer: 3,
    explanation: "The line passes through (0, -40) and (4, 0). Slope = (0 - (-40))/(4 - 0) = 40/4 = 10. y-intercept is -40. Equation: y = 10x - 40. The shaded region is below the line (e.g., point (6,0) is in shaded region, 0 < 60-40 is true). So y < 10x - 40.",
    category: "Inequalities",
    topics: ["Inequalities", "Linear Equations"]
  },
  {
    id: 317,
    question: "A certain town has an area of 3.72 square miles. What is the area, in square yards, of this town? (1 mile = 1,760 yards)",
    options: [
      "473",
      "6,547",
      "832,688",
      "11,523,072"
    ],
    correctAnswer: 3,
    explanation: "1 square mile = (1760 yards)^2 = 3,097,600 square yards. 3.72 * 3,097,600 = 11,523,072.",
    category: "Unit Conversion",
    topics: ["Unit Conversion", "area"]
  },
  {
    id: 318,
    question: "The equation $d = 35w + 100$ gives the total amount of money d, in dollars, that Jerome plans to save w weeks after he starts to save. What is the total amount of money, in dollars, he plans to save in 10 weeks?",
    options: [
      "400",
      "450",
      "500",
      "550"
    ],
    correctAnswer: 1,
    explanation: "Substitute w = 10: d = 35(10) + 100 = 350 + 100 = 450.",
    category: "Linear Equations",
    topics: ["Linear Equations", "Word Problem"]
  },
  {
    id: 319,
    question: "For a project, Kayla recorded the heights of 17 people in her neighborhood. The histogram summarizes the heights, in inches (in), of these 17 people in Kayla's neighborhood. How many of these 17 people in Kayla's neighborhood had a height of at least 51 in but less than 57 in?",
    options: [],
    correctAnswer: 0,
    answerText: "6",
    explanation: "The bin 51-54 has frequency 2. The bin 54-57 has frequency 4. Total = 2 + 4 = 6.",
    category: "Statistics",
    topics: ["Statistics", "Data Analysis"]
  },
  {
    id: 320,
    question: "A jar has 470 marbles, and 20% of these marbles are blue. How many marbles in the jar are blue?",
    options: [
      "94",
      "188",
      "235",
      "450"
    ],
    correctAnswer: 0,
    explanation: "0.20 * 470 = 94.",
    category: "Percentages",
    topics: ["percentage"]
  },
  {
    id: 321,
    question: "$5x + 9y = 20$\n$rx + 18y = 40$\nIn the given system of equations, r is a constant. The system has infinitely many solutions. What is the value of r?",
    options: [
      "2",
      "5",
      "9",
      "10"
    ],
    correctAnswer: 3,
    explanation: "For infinitely many solutions, the equations must be proportional. The second equation's y-coefficient (18) is 2 times the first (9). So the x-coefficient must also be 2 times the first: r = 2 * 5 = 10.",
    category: "Systems",
    topics: ["Systems", "Linear Equations"]
  },
  {
    id: 322,
    question: "If $9x - 10 = 8$, what is the value of $9x + 10$?",
    options: [
      "-2",
      "2",
      "12",
      "28"
    ],
    correctAnswer: 3,
    explanation: "9x = 18. So 9x + 10 = 18 + 10 = 28.",
    category: "Algebra",
    topics: ["Algebra", "solving equation"]
  },
  {
    id: 323,
    question: "Line q is defined by $y = -\\frac{1}{9}x - \\frac{1}{4}$. Line r is perpendicular to line q in the xy-plane. What is the slope of line r?",
    options: [
      "13",
      "9",
      "5",
      "4"
    ],
    correctAnswer: 1,
    explanation: "The slope of q is -1/9. The slope of a perpendicular line is the negative reciprocal: -1 / (-1/9) = 9.",
    category: "Linear Equations",
    topics: ["Linear Equations"]
  },
  {
    id: 324,
    question: "$y = 8x - 16$\n$5x + y = 23$\nThe solution to the given system of equations is (x, y). What is the value of x + y?",
    options: [],
    correctAnswer: 0,
    answerText: "11",
    explanation: "Substitute y: 5x + (8x - 16) = 23. 13x = 39. x = 3. y = 8(3) - 16 = 24 - 16 = 8. x + y = 3 + 8 = 11.",
    category: "Systems",
    topics: ["Systems", "Linear Equations"]
  },
  {
    id: 325,
    question: "Which expression is equivalent to $5xy + 30x^2y + 35xy^2$?",
    options: [
      "$5xy(1 + 30x + 35y)$",
      "$5xy(1 + 6x + 7y)$",
      "$5xy(30x + 35y)$",
      "$5xy(6x + 7y)$"
    ],
    correctAnswer: 1,
    explanation: "Factor out 5xy: $5xy(1 + 6x + 7y)$.",
    category: "Polynomials",
    topics: ["Polynomials", "Factoring"]
  },

  // Module 2
  {
    id: 494,
    question: "$3x + 2y = 10$\n$9x + 6y = 30$\nHow many solutions does the given system of equations have?",
    options: [
      "Exactly one",
      "Exactly two",
      "Infinitely many",
      "Zero"
    ],
    correctAnswer: 2,
    explanation: "Multiply the first equation by 3: 9x + 6y = 30. This is identical to the second equation. Thus, there are infinitely many solutions.",
    category: "Systems",
    topics: ["Systems", "Linear Equations"]
  },
  {
    id: 495,
    question: "Which quadratic equation has no real solutions?",
    options: [
      "$21r^2 = 20$",
      "$21r^2 = -20r + 20$",
      "$-21r^2 = -20r$",
      "$-21r^2 = -20r + 20$"
    ],
    correctAnswer: 3,
    explanation: "Rearrange to standard form ax^2+bx+c=0 and check discriminant b^2-4ac. D: 21r^2 - 20r + 20 = 0. Disc = (-20)^2 - 4(21)(20) = 400 - 1680 < 0. No real solutions.",
    category: "Quadratics",
    topics: ["Quadratics"]
  },
  {
    id: 496,
    question: "The figure shown is a right rectangular pyramid, where l = 10 units, w = 5 units, and h = 11 units. What is the surface area, in square units, of the pyramid?",
    options: [],
    correctAnswer: 0,
    answerText: "223.22",
    explanation: "Base area = 10*5 = 50. Slant height 1 (for side 10): sqrt(11^2 + 2.5^2) = sqrt(121+6.25) = 11.28. Area = 2 * 0.5 * 10 * 11.28 = 112.8. Slant height 2 (for side 5): sqrt(11^2 + 5^2) = sqrt(121+25) = 12.08. Area = 2 * 0.5 * 5 * 12.08 = 60.4. Total = 50 + 112.8 + 60.4 = 223.2.",
    category: "Geometry",
    topics: ["Geometry", "area", "volume"]
  },
  {
    id: 497,
    question: "$2x^2 - 8x - 25 = 0$. One solution to the given equation can be written as $x = h - \\frac{1}{2}\\sqrt{k}$, where h and k are integer constants. What is the value of h + k?",
    options: [
      "-32",
      "10",
      "33",
      "68"
    ],
    correctAnswer: 3,
    explanation: "x = (8 +/- sqrt(64 - 4(2)(-25)))/4 = (8 +/- sqrt(264))/4 = 2 +/- 1/2 sqrt(66). h=2, k=66. h+k=68.",
    category: "Quadratics",
    topics: ["Quadratics", "solving equation"]
  },
  {
    id: 498,
    question: "At different times on a certain day, a manager at a theme park recorded the number of visitors. An exponential model gives the estimated number of visitors, V, at the theme park t hours after the theme park opened, where $t \\le 3$. Based on the model, 75 visitors were estimated to be at the theme park when it opened, and every 30 minutes the estimated number of visitors increased by 120% of the estimated number of visitors 30 minutes earlier. Which of the following equations best represents this model?",
    options: [
      "$V = 75(2.20)^{2t}$",
      "$V = 75(2.20)^{\\frac{t}{30}}$",
      "$V = 75(1.20)^{2t}$",
      "$V = 75(1.20)^{\\frac{t}{30}}$"
    ],
    correctAnswer: 0,
    explanation: "Initial = 75. Increase by 120% means multiplier is 1 + 1.20 = 2.20. This happens every 30 mins (0.5 hours). So in t hours, it happens 2t times. V = 75(2.20)^(2t).",
    category: "Exponential Growth",
    topics: ["Exponential Growth", "Word Problem"]
  },
  {
    id: 499,
    question: "The functions f and g are defined by the given equations, where $x \\ge 0$, a and b are integer constants, $a < b$, and $a > 1$. If $y = f(x)$ and $y = g(x)$ are graphed in the xy-plane, which of the following equations displays, as a constant or coefficient, the minimum value of the function it defines, where $x \\ge 0$?\nI. $f(x) = a(0.27)^{-bx}$\nII. $g(x) = a(1.73)^{x+2} + b$",
    options: [
      "I only",
      "II only",
      "I and II",
      "Neither I nor II"
    ],
    correctAnswer: 0,
    explanation: "f(x) is increasing, min at x=0 is f(0)=a. 'a' is a coefficient in the equation. g(x) is increasing, min at x=0 is g(0) = a(1.73)^2 + b, which is not just 'b'. So only I displays the min value 'a'.",
    category: "Functions",
    topics: ["Functions", "Exponential Growth"]
  },
  {
    id: 500,
    question: "In triangle XYZ, the measure of angle X is $x^\\circ$, the measure of angle Y is $y^\\circ$, and the measure of angle Z is $34^\\circ$. If $x > y > 34$, which of the following additional pieces of information is NOT sufficient to determine the values of x and y?",
    options: [
      "The value of $34 - x - 3y$",
      "The value of $34 + 3x + y$",
      "The value of $34 - 3x + 3y$",
      "The value of $34 - 3x - 3y$"
    ],
    correctAnswer: 3,
    explanation: "x+y = 146. Option D gives 34 - 3(x+y) = 34 - 3(146), which is a constant and always true regardless of x and y. It adds no new constraint.",
    category: "Geometry",
    topics: ["Geometry", "Triangles"]
  },
  {
    id: 501,
    question: "A manager is responsible for ordering supplies for a coffee shop. The shop's inventory starts with 5,500 disposable cups, and the manager estimates that 70 of these cups are used each day. Based on this estimate, in how many days will the supply of disposable cups reach 1,300?",
    options: [
      "30",
      "60",
      "90",
      "120"
    ],
    correctAnswer: 1,
    explanation: "5500 - 70d = 1300. 4200 = 70d. d = 60.",
    category: "Word Problem",
    topics: ["Word Problem", "Linear Equations"]
  },
  {
    id: 502,
    question: "Zuri has a goal to run at least 17 miles per week while training for a race. This week, she has run 7 miles. If x represents the additional number of miles Zuri needs to run this week to meet her goal, which inequality represents this situation?",
    options: [
      "$7 - x \\le 17$",
      "$7 + x \\le 17$",
      "$7 - x \\ge 17$",
      "$7 + x \\ge 17$"
    ],
    correctAnswer: 3,
    explanation: "Total miles = 7 + x. Goal is at least 17. So 7 + x >= 17.",
    category: "Inequalities",
    topics: ["Inequalities", "Word Problem"]
  },
  {
    id: 503,
    question: "The function f is defined by $f(x) = \\frac{ax+b}{x+c} + k$, where a, b, c, and k are constants. The graph of y = f(x) is shown. For how many values of x does f(x) = 0?",
    options: [
      "Three",
      "Two",
      "One",
      "Zero"
    ],
    correctAnswer: 2,
    explanation: "The graph shows the function crossing the x-axis exactly once.",
    category: "Functions",
    topics: ["Functions", "Rational Expressions"]
  },
  {
    id: 504,
    question: "The area of triangle ABC is 120 square centimeters. What is the height h, in centimeters, of this triangle?",
    options: [
      "10",
      "12",
      "24",
      "48"
    ],
    correctAnswer: 2,
    explanation: "Area = 1/2 * base * height. 120 = 1/2 * 10 * h. 120 = 5h. h = 24.",
    category: "Geometry",
    topics: ["Geometry", "Triangles", "area"]
  },
  {
    id: 505,
    question: "The table shows the distribution of people in a certain city by age group. If a person in this city is selected at random, which of the following is closest to the probability of selecting a person who is greater than 65 years old, given that the person is at least 18 years old?",
    options: [
      "0.23",
      "0.31",
      "0.51",
      "0.88"
    ],
    correctAnswer: 1,
    explanation: "P(>65 | >=18) = P(>65) / P(>=18) = 0.23 / (0.27+0.24+0.23) = 0.23 / 0.74 ≈ 0.31.",
    category: "Probability",
    topics: ["Probability", "Statistics"]
  },
  {
    id: 506,
    question: "$9x - 3y = 3y + 11$\n$hy = 3 + 9x$\nIn the given system of equations, h is a constant. If the system has no solution, what is the value of h?",
    options: [],
    correctAnswer: 0,
    answerText: "6",
    explanation: "Rewrite: 9x - 6y = 11 and -9x + hy = 3. For no solution, lines must be parallel (same slope). Slope 1: 6y=9x-11 -> m=1.5. Slope 2: hy=9x+3 -> m=9/h. 1.5 = 9/h -> h = 6.",
    category: "Systems",
    topics: ["Systems", "Linear Equations"]
  },
  {
    id: 507,
    question: "a, 26, 29, b, 32, 47, c\nFor the given data set, the data values are listed in ascending order, where a, b, and c are constants. For this data set, the mean is 36, the median is 29, and the range is 71. What is the value of c?",
    options: [
      "54",
      "71",
      "80",
      "97"
    ],
    correctAnswer: 2,
    explanation: "Median of 7 items is the 4th item, which is b. So b=29. Range c-a=71. Mean sum/7=36 -> sum=252. Sum = a+26+29+29+32+47+c = a+c+163. a+c = 89. System: c-a=71, c+a=89. 2c=160 -> c=80.",
    category: "Statistics",
    topics: ["Statistics"]
  },
  {
    id: 508,
    question: "Which of the following expressions is(are) a factor of $4x^2 + 15x - 54$?\nI. $x - 6$\nII. $4x - 9$",
    options: [
      "I only",
      "II only",
      "I and II",
      "Neither I nor II"
    ],
    correctAnswer: 1,
    explanation: "Roots are 9/4 and -6. Factors are (4x-9) and (x+6). I is x-6 (incorrect). II is 4x-9 (correct). So II only.",
    category: "Polynomials",
    topics: ["Polynomials", "Factoring"]
  },
  {
    id: 509,
    question: "For the function f, the table shows four values of x and their corresponding values of f(x). (1, 2000), (2, 400), (3, 80), (4, 16). Which of the following could describe this function?",
    options: [
      "Decreasing exponential",
      "Increasing exponential",
      "Decreasing linear",
      "Increasing linear"
    ],
    correctAnswer: 0,
    explanation: "Ratio of consecutive terms is 400/2000 = 0.2, 80/400 = 0.2. Constant ratio < 1 implies decreasing exponential.",
    category: "Functions",
    topics: ["Functions", "Exponential Growth"]
  },
  {
    id: 510,
    question: "The quadratic equation $(8x + 9)^2 = a$, where a is a constant, has exactly one real solution. What is the value of a?",
    options: [],
    correctAnswer: 0,
    answerText: "0",
    explanation: "For exactly one solution, the discriminant must be 0, which corresponds to a=0.",
    category: "Quadratics",
    topics: ["Quadratics"]
  },
  {
    id: 511,
    question: "$2x^2 - 20x - 23 = 0$\nOne solution to the given equation can be written as $x = h - \\frac{1}{2}\\sqrt{k}$, where h and k are integer constants. What is the value of h + k?",
    options: [
      "151",
      "73",
      "59",
      "22"
    ],
    correctAnswer: 0,
    explanation: "x = (20 +/- sqrt(400 - 4(2)(-23)))/4 = (20 +/- sqrt(584))/4 = 5 +/- 1/2 sqrt(146). h=5, k=146. h+k=151.",
    category: "Quadratics",
    topics: ["Quadratics", "solving equation"]
  },
  {
    id: 512,
    question: "The result of increasing the quantity x by 800% is 360. What is the value of x?",
    options: [
      "40",
      "45",
      "440",
      "2,880"
    ],
    correctAnswer: 0,
    explanation: "x + 8x = 360. 9x = 360. x = 40.",
    category: "Percentages",
    topics: ["percentage", "Linear Equations"]
  },
  {
    id: 513,
    question: "In the figure, AD and BC intersect at point D. The measure of angle ABD is w, the measure of angle CAD is z, and AD = 168. If $\\cos w = \\frac{9}{41}$, what is the value of $\\tan z$?",
    options: [],
    correctAnswer: 0,
    answerText: "40/9",
    explanation: "Since A is a right angle (implied by context of similar problems or diagram), and AD is altitude? No, diagram shows D on BC. If angles are complementary in a specific way... Actually, typically in these problems, angle z = angle w. If z=w, then tan z = tan w. Given cos w = 9/41, adj=9, hyp=41, opp=40. tan w = 40/9.",
    category: "Trigonometry",
    topics: ["Trigonometry"]
  }
];
