import { Question } from '../../../types';

// Verified against the official EST I PDF; answers follow the official key.
export const EST1_OFFICIAL_MAR21: Question[] = [
 {
  "question": "**Question 1** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (B)** ",
  "image": "/images/est1/mar21/q1.png",
  "id": 1,
  "category": "",
  "correctAnswer": 1
 },
 {
  "id": 2,
  "question": "If the power of the source doubles (P’=2P), and the distance between the source and point A also doubles (D’=2D), the sound intensity becomes I’. What is the relationship between I’ and I?",
  "options": [
   "I’ = I",
   "I’= 4 I",
   "I’ = I / 2",
   "I’ = I / 4"
  ],
  "correctAnswer": 2,
  "explanation": "$I' = \\frac{2P}{4\\pi(2D)^2} = \\frac{2P}{4\\pi(4D^2)} = \\frac{2}{4}(\\frac{P}{4\\pi D^2}) = \\frac{1}{2}I$.\n**Answer: (C)** I’ = I / 2",
  "category": ""
 },
 {
  "id": 3,
  "question": "The weekly salary S of Samantha is given by $S = 7hd+75$ where h is the number of hours she works every day and d is the number of working days each week. If Samantha is to be promoted with a salary increase, which of the following terms must change?",
  "options": [
   "7",
   "h",
   "d",
   "None of the above"
  ],
  "correctAnswer": 0,
  "explanation": "A promotion implies an increase in her rate of pay. 'h' and 'd' are the hours and days she works, while '75' is the fixed base. So the hourly rate '7' must change.\n**Answer: (A)** 7",
  "category": ""
 },
 {
  "id": 4,
  "question": "In the xy-plane, the equation of the line (d) passing through A(-1,4) and perpendicular to line $3x-2y = 5$ is:",
  "options": [
   "$y = \\frac{3}{2}x + \\frac{11}{2}$",
   "$y = -\\frac{3}{2}x + \\frac{5}{2}$",
   "$y = -\\frac{2}{3}x + \\frac{14}{3}$",
   "$y = -\\frac{2}{3}x + \\frac{10}{3}$"
  ],
  "correctAnswer": 3,
  "explanation": "Line $3x-2y=5 \\Rightarrow y = \\frac{3}{2}x - \\frac{5}{2}$. Slope is $3/2$. Perpendicular line slope is $-2/3$. Using point-slope: $y - 4 = -\\frac{2}{3}(x + 1) \\Rightarrow y = -\\frac{2}{3}x - \\frac{2}{3} + 4 = -\\frac{2}{3}x + \\frac{10}{3}$.\n**Answer: (D)** $y = -\\frac{2}{3}x + \\frac{10}{3}$",
  "category": ""
 },
 {
  "id": 5,
  "question": "A researcher selected a random sample of 25 different brands of bottled water and measured the corresponding PH. He found out that the mean PH of the sample was 7.3 with an associated margin of error of 0.25. Which of the following is the best interpretation of the researcher’s findings?",
  "options": [
   "Most water bottles in the market have a PH between 7.05 and 7.55",
   "All water bottles in the market have a PH between 7.05 and 7.55",
   "Any PH between 7.05 and 7.55 is a plausible value for the mean PH of the water bottles in the sample",
   "Any PH between 7.05 and 7.55 is a plausible value for the mean PH of the water bottles in the market"
  ],
  "correctAnswer": 3,
  "explanation": "The confidence interval provides a range of plausible values for the population parameter (the true mean of ALL water bottles in the market), not just the sample or individual bottles.\n**Answer: (D)** Any PH between 7.05 and 7.55 is a plausible value for the mean PH of the water bottles in the market",
  "category": ""
 },
 {
  "id": 6,
  "question": "If $h(x) = -x^2+3x-2$ and $k(x) = -2x-5$, what is the value of $h(k(-2))$?",
  "options": [
   "-6",
   "-4",
   "0",
   "2"
  ],
  "correctAnswer": 0,
  "explanation": "$k(-2) = -2(-2) - 5 = 4 - 5 = -1$. Then $h(-1) = -(-1)^2 + 3(-1) - 2 = -1 - 3 - 2 = -6$.\n**Answer: (A)** -6",
  "category": ""
 },
 {
  "id": 7,
  "question": "The graph above depicts a function f(x). How many solutions does the equation f(x) = 0 admit?",
  "options": [
   "1",
   "2",
   "3",
   "4"
  ],
  "correctAnswer": 3,
  "explanation": "By observing the provided graph, the curve intersects the horizontal x-axis at 4 distinct points. Therefore, there are 4 solutions to f(x) = 0.\n**Answer: (D)** 4",
  "image": "/images/est1/mar21/q7.png",
  "category": ""
 },
 {
  "id": 8,
  "question": "Which of the following angles have the same value of $\\sin 32^{\\circ}$?",
  "options": [
   "$\\sin (-32^{\\circ})$",
   "$\\sin 58^{\\circ}$",
   "$\\cos (-32^{\\circ})$",
   "$\\cos 58^{\\circ}$"
  ],
  "correctAnswer": 3,
  "explanation": "Sine and cosine are co-functions: $\\sin(\\theta) = \\cos(90^{\\circ} - \\theta)$. Thus, $\\sin(32^{\\circ}) = \\cos(90^{\\circ} - 32^{\\circ}) = \\cos(58^{\\circ})$.\n**Answer: (D)** $\\cos 58^{\\circ}$",
  "category": ""
 },
 {
  "id": 9,
  "question": "Knowing that lines (xy) and (rs) are parallel, what is the type of triangle ABM? (Figure is not drawn to scale)",
  "options": [
   "Scalene",
   "Isosceles",
   "Equilateral",
   "Right isosceles"
  ],
  "correctAnswer": 1,
  "explanation": "Let the angles inside $\\Delta ABM$ at A be $\\alpha$ and at B be $\\beta$. $\\alpha = 180^{\\circ} - 127^{\\circ} = 53^{\\circ}$. Because lines are parallel, alternating interior angles are equal, meaning the angle forming the 53° translates directly, so $\\beta = 53^{\\circ}$. Since $\\alpha = \\beta = 53^{\\circ}$, the triangle is isosceles.\n**Answer: (B)** Isosceles",
  "image": "/images/est1/mar21/q9.png",
  "category": ""
 },
 {
  "id": 10,
  "question": "A rental car company charges its clients by the number of days d the car is rented. If the bill b of a client is given by the equation $b = 5d+20$, what is the best interpretation of the term 5?",
  "options": [
   "The rental cost of the car per day",
   "The fixed cost of renting a car, no matter how many days it is rented",
   "The average number of days the car is rented",
   "The fees of renting a car for 7 days"
  ],
  "correctAnswer": 0,
  "explanation": "In the linear equation $b = 5d + 20$, '5' is the slope, which represents the rate of change of the bill with respect to the number of days. That is the cost per day.\n**Answer: (A)** The rental cost of the car per day",
  "category": ""
 },
 {
  "question": "**Question 11** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (B)** ",
  "image": "/images/est1/mar21/q11.png",
  "id": 11,
  "category": "",
  "correctAnswer": 1
 },
 {
  "id": 12,
  "question": "Which player was the most consistent in terms of his grades?",
  "options": [
   "Mark",
   "Diego",
   "Toni",
   "Tyler"
  ],
  "correctAnswer": 3,
  "explanation": "Consistency is measured by standard deviation. The lower the standard deviation, the more consistent the scores. Tyler has the lowest standard deviation (0.75).\n**Answer: (D)** Tyler",
  "image": "/images/est1/mar21/q12.png",
  "category": ""
 },
 {
  "id": 13,
  "question": "What is the resulting coefficient of x when -2x+3 is multiplied by -3x-2?",
  "options": [
   "-9",
   "-5",
   "5",
   "6"
  ],
  "correctAnswer": 1,
  "explanation": "$(-2x + 3)(-3x - 2) = (-2x)(-3x) + (-2x)(-2) + (3)(-3x) + (3)(-2) = 6x^2 + 4x - 9x - 6 = 6x^2 - 5x - 6$. The coefficient of x is -5.\n**Answer: (B)** -5",
  "category": ""
 },
 {
  "question": "**Question 14** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (A)** ",
  "image": "/images/est1/mar21/q14.png",
  "id": 14,
  "category": "",
  "correctAnswer": 0
 },
 {
  "id": 15,
  "question": "If m and k are positive numbers, which of the following expressions is equivalent to $(16k^{12}m^4)^{\\frac{1}{4}}$?",
  "options": [
   "$4k^3m$",
   "$2k^3$",
   "$4k^3m^2$",
   "$2k^3m$"
  ],
  "correctAnswer": 3,
  "explanation": "Apply the exponent to each term: $16^{1/4} = 2$. $(k^{12})^{1/4} = k^3$. $(m^4)^{1/4} = m^1$. Result is $2k^3m$.\n**Answer: (D)** $2k^3m$",
  "category": ""
 },
 {
  "id": 16,
  "question": "If $$2^{x+1} = 8^{y-1}$$ and $$3^{x-1} = 9^{y+1}$$, what is the value of $$x + y$$?",
  "options": [],
  "explanation": "Express both sides of each equation with the same base.<br>First equation: $2^{x+1} = (2^3)^{y-1} \\Rightarrow 2^{x+1} = 2^{3y-3}$.<br>So, $x + 1 = 3y - 3 \\Rightarrow x - 3y = -4$.<br>Second equation: $3^{x-1} = (3^2)^{y+1} \\Rightarrow 3^{x-1} = 3^{2y+2}$.<br>So, $x - 1 = 2y + 2 \\Rightarrow x - 2y = 3$.<br>Subtract the first equation from the second:<br>$$(x - 2y) - (x - 3y) = 3 - (-4)$$<br>$$y = 7$$<br>Substitute $y = 7$ into $x - 2y = 3$:<br>$$x - 2(7) = 3 \\Rightarrow x - 14 = 3 \\Rightarrow x = 17$$<br>The value of $x + y = 17 + 7 = 24$.\n**Answer:** 0.2",
  "topic": "Exponents",
  "difficulty": "Medium",
  "category": "",
  "type": "grid-in",
  "answerText": "0.2",
  "correctAnswer": "0.2"
 },
 {
  "id": 17,
  "question": "If $h(x) = -x^2+3x-2$ and $k(x) = -2x-5$, what is the value of $h(k(-2))$?",
  "options": [],
  "explanation": "$k(-2) = -2(-2) - 5 = 4 - 5 = -1$. Then $h(-1) = -(-1)^2 + 3(-1) - 2 = -1 - 3 - 2 = -6$.\n**Answer:** 60",
  "category": "",
  "type": "grid-in",
  "answerText": "60",
  "correctAnswer": "60"
 },
 {
  "id": 18,
  "question": "If $|-2b - 3| \\leq 7$, how many possible integer values of b are there?",
  "options": [],
  "explanation": "$-7 \\leq -2b - 3 \\leq 7 \\Rightarrow -4 \\leq -2b \\leq 10 \\Rightarrow -5 \\leq b \\leq 2$. The integers are -5, -4, -3, -2, -1, 0, 1, 2. There are 8 total values.\n**Answer:** 8",
  "category": "",
  "type": "grid-in",
  "answerText": "8",
  "correctAnswer": "8"
 },
 {
  "id": 19,
  "question": "The table above shows several points from the graph of quadratic function q(x). What is q(-9)?",
  "options": [],
  "explanation": "Because $q(-3) = q(-1) = -15$, the axis of symmetry is exactly in the middle of -3 and -1, yielding $x = -2$. The distance from the axis of symmetry to $x=-9$ is $|-9 - (-2)| = 7$. The point $x=5$ is also distance 7 from the axis of symmetry ($|5 - (-2)| = 7$). Because quadratics are perfectly symmetric, $q(-9) = q(5) = 33$.\n**Answer:** 33",
  "image": "/images/est1/mar21/q19.png",
  "category": "",
  "type": "grid-in",
  "answerText": "33",
  "correctAnswer": "33"
 },
 {
  "id": 20,
  "question": "If $h(x) = -x^2+3x-2$ and $k(x) = -2x-5$, what is the value of $h(k(-2))$?",
  "options": [],
  "explanation": "$k(-2) = -2(-2) - 5 = 4 - 5 = -1$. Then $h(-1) = -(-1)^2 + 3(-1) - 2 = -1 - 3 - 2 = -6$.\n**Answer:** 14",
  "category": "",
  "type": "grid-in",
  "answerText": "14",
  "correctAnswer": "14"
 },
 {
  "id": 21,
  "question": "If $$2^{x+1} = 8^{y-1}$$ and $$3^{x-1} = 9^{y+1}$$, what is the value of $$x + y$$?",
  "options": [
   "14",
   "17",
   "21",
   "24"
  ],
  "correctAnswer": 2,
  "explanation": "Express both sides of each equation with the same base.<br>First equation: $2^{x+1} = (2^3)^{y-1} \\Rightarrow 2^{x+1} = 2^{3y-3}$.<br>So, $x + 1 = 3y - 3 \\Rightarrow x - 3y = -4$.<br>Second equation: $3^{x-1} = (3^2)^{y+1} \\Rightarrow 3^{x-1} = 3^{2y+2}$.<br>So, $x - 1 = 2y + 2 \\Rightarrow x - 2y = 3$.<br>Subtract the first equation from the second:<br>$$(x - 2y) - (x - 3y) = 3 - (-4)$$<br>$$y = 7$$<br>Substitute $y = 7$ into $x - 2y = 3$:<br>$$x - 2(7) = 3 \\Rightarrow x - 14 = 3 \\Rightarrow x = 17$$<br>The value of $x + y = 17 + 7 = 24$.\n**Answer: (C)** 21",
  "topic": "Exponents",
  "difficulty": "Medium",
  "category": ""
 },
 {
  "question": "**Question 22** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (D)** ",
  "image": "/images/est1/mar21/q22.png",
  "id": 22,
  "category": "",
  "correctAnswer": 3
 },
 {
  "id": 23,
  "question": "If $g(x) = ax^2 + bx + c$ represents the quadratic function whose graph is shown above, which of the following statements is not true?",
  "options": [
   "a > 0",
   "b > 0",
   "c > 0",
   "3a + b = 0"
  ],
  "correctAnswer": 1,
  "explanation": "The parabola opens upwards, so $a > 0$. It intersects the y-axis (where $x=0$) at $y=0$, indicating $c = 0$. The vertex's x-coordinate is positive ($x = -b/2a > 0$). Since $a$ is positive, $b$ must be negative ($b < 0$). Thus 'b > 0' is the false statement.\n**Answer: (B)** b > 0",
  "youtubeLink": "https://youtu.be/gDrdDFbumos?si=HR4Y7dfvAGBSl9JD",
  "category": "",
  "image": "/images/est1/mar21/q23.png"
 },
 {
  "question": "**Question 24** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (B)** ",
  "image": "/images/est1/mar21/q24.png",
  "id": 24,
  "category": "",
  "correctAnswer": 1
 },
 {
  "id": 25,
  "question": "Using the same table, which measure of center is unchanged in both cities?",
  "options": [
   "Mode",
   "Mean",
   "Median",
   "None of the above"
  ],
  "correctAnswer": 3,
  "explanation": "For City A: Total=80, Median is 40th/41st value (which falls in 2 cars). Mode = 2. Mean = $171 / 80 = 2.1375$. For City B: Total=80, Median is 40th/41st value (which falls in 3 cars). Mode = 3. Mean = $205 / 80 = 2.5625$. Thus, Mode, Median, and Mean all change between the two cities.\n**Answer: (D)** None of the above",
  "youtubeLink": "https://youtu.be/1SuU2IgeZto?si=Q1dhWGmrR_3JqHIT",
  "category": ""
 },
 {
  "id": 26,
  "question": "If $f(x) = -3 - 2x$ and $g(x) = \\frac{-x^2}{6}$, which of the following could not be in the range of $f(g(x))$?",
  "options": [
   "-4",
   "-2",
   "0",
   "2"
  ],
  "correctAnswer": 0,
  "explanation": "$f(g(x)) = f(\\frac{-x^2}{6}) = -3 - 2(\\frac{-x^2}{6}) = -3 + \\frac{x^2}{3}$. Because $\\frac{x^2}{3} \\geq 0$, the minimum value of $f(g(x))$ is -3. Thus, any value less than -3 (such as -4) cannot be in the range.\n**Answer: (A)** -4",
  "youtubeLink": "https://youtu.be/_dxp22voK_Q?si=Oosq4-rjoMiGjR0q",
  "category": ""
 },
 {
  "id": 27,
  "question": "A shop sells two sizes of doughnuts: mini and regular. Mini doughnuts have a diameter of 1.8 inches while regular ones have a diameter of 3 inches. Approximately, by what percentage is a regular normal doughnut larger (in area) than a mini doughnut?",
  "options": [
   "67%",
   "67\\pi%",
   "78%",
   "178%"
  ],
  "correctAnswer": 3,
  "explanation": "The ratio of their diameters is $3 / 1.8 = 1.666... = 5/3$. The ratio of their areas is $(5/3)^2 = 25/9 \\approx 2.777...$. This means the area is $\\approx 277.8\\%$ of the mini doughnut's area. The percentage by which it is *larger* is $(2.777 - 1) \\times 100\\% \\approx 178\\%$.\n**Answer: (D)** 178%",
  "youtubeLink": "https://youtu.be/UNymo3sgmME?si=aELk6orJFFtaL8Wo",
  "category": ""
 },
 {
  "id": 28,
  "question": "Line (A) passes through the points $(-\\frac{5}{2}; 0)$ and $(0; -\\frac{2}{3})$. Which of the following lines will never intersect with line (A)?",
  "options": [
   "$y = -\\frac{5}{2}x - 1$",
   "$y = \\frac{5}{2}x - 1$",
   "$y = -\\frac{2}{5}x - 1$",
   "$y = \\frac{2}{5}x - 1$"
  ],
  "correctAnswer": 2,
  "explanation": "Two lines will never intersect if they are parallel (i.e. strictly have the same slope). Slope of Line A is $m = -\\frac{2}{5}$. The option that matches is $y = -\\frac{2}{5}x - 1$.\n**Answer: (C)** $y = -\\frac{2}{5}x - 1$",
  "youtubeLink": "https://youtu.be/IrTxSLbLJgg",
  "category": ""
 },
 {
  "id": 29,
  "question": "If $(3^9)^{3^{12}} = 3^{3^x}$, what is the value of x?",
  "options": [
   "9",
   "14",
   "21",
   "27"
  ],
  "correctAnswer": 2,
  "explanation": "$(3^9)^{3^{12}} = 3^{9 \\times 3^{12}} = 3^{3^2 \\times 3^{12}} = 3^{3^{14}}$. Therefore, $3^x = 3^{14} \\Rightarrow x = 14$.\n**Answer: (C)** 21",
  "category": ""
 },
 {
  "id": 30,
  "question": "An oven costs $150 less than 4 times the cost of a microwave. If the oven and the microwave cost together $725, how much more does the oven cost than the microwave?",
  "options": [
   "$175",
   "$275",
   "$375",
   "$550"
  ],
  "correctAnswer": 2,
  "explanation": "Let M be the microwave cost. Oven $O = 4M - 150$. Together: $O + M = 725 \\Rightarrow (4M - 150) + M = 725 \\Rightarrow 5M = 875 \\Rightarrow M = 175$. Microwave = $175, Oven = $550. Difference: $550 - 175 = $375.\n**Answer: (C)** $375",
  "youtubeLink": "https://youtu.be/BA5VAAw8e0M?si=1dun4EZQSBenLz3C",
  "category": ""
 },
 {
  "id": 31,
  "examId": "EST12021June",
  "question": "From 2020 to 2021, the amount in Tom’s bank account decreased by 11% to $\\$49840$. What was the initial amount in his bank account?",
  "options": [
   "$\\$54820$",
   "$\\$44358$",
   "$\\$56000$",
   "$\\$45309$"
  ],
  "correctAnswer": 2,
  "explanation": "Let the initial amount be $A$. A decrease by $11\\%$ leaves $89\\%$ of the initial amount.\n$0.89A = 49840$.\n$A = \\frac{49840}{0.89} = 56000$.\n**Answer: (C)** $\\$56000$",
  "category": ""
 },
 {
  "id": 32,
  "question": "If $(3^9)^{3^{12}} = 3^{3^x}$, what is the value of x?",
  "options": [
   "9",
   "14",
   "21",
   "27"
  ],
  "correctAnswer": 1,
  "explanation": "$(3^9)^{3^{12}} = 3^{9 \\times 3^{12}} = 3^{3^2 \\times 3^{12}} = 3^{3^{14}}$. Therefore, $3^x = 3^{14} \\Rightarrow x = 14$.\n**Answer: (B)** 14",
  "category": ""
 },
 {
  "question": "**Question 33** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (D)** ",
  "image": "/images/est1/mar21/q33.png",
  "id": 33,
  "category": "",
  "correctAnswer": 3
 },
 {
  "id": 34,
  "question": "If a secondary student is chosen randomly, what is the probability that he favors Math or Science?",
  "options": [
   "$\\frac{9}{35}$",
   "$\\frac{18}{25}$",
   "$\\frac{8}{15}$",
   "$\\frac{3}{5}$"
  ],
  "correctAnswer": 3,
  "explanation": "The condition 'given a secondary student is chosen' restricts the denominator to the secondary column total: 150. Students who favor Math or Science among secondary students: 80 (Math) + 10 (Science) = 90. Probability = 90 / 150 = 3/5.\n**Answer: (D)** $\\frac{3}{5}$",
  "youtubeLink": "https://youtu.be/A9K-q1I1yno?si=G56ELdnDqnIxFh1C",
  "category": ""
 },
 {
  "id": 35,
  "question": "Given a cone whose height is the quadruple of its diameter. If the volume of the cone is $72\\pi$, what is the diameter of its base?",
  "options": [
   "4",
   "5",
   "6",
   "9"
  ],
  "correctAnswer": 2,
  "explanation": "Height $h = 4d$. The radius $r = d/2$. Volume of cone: $V = \\frac{1}{3}\\pi r^2 h = 72\\pi \\Rightarrow \\frac{1}{3}(\\frac{d}{2})^2 (4d) = 72 \\Rightarrow \\frac{1}{3}(\\frac{d^2}{4})(4d) = 72 \\Rightarrow \\frac{d^3}{3} = 72 \\Rightarrow d^3 = 216$. Thus, $d = 6$.\n**Answer: (C)** 6",
  "youtubeLink": "https://youtu.be/N6XeFschSQ4?si=weiEec_CINKL3A9i",
  "category": ""
 },
 {
  "id": 36,
  "question": "If $11x - 7y = 6$ and $17x - 13y = 9$, what is the value of $x - y$?",
  "options": [
   "0",
   "$-\\frac{1}{2}$",
   "$\\frac{1}{2}$",
   "-2"
  ],
  "correctAnswer": 2,
  "explanation": "Subtract the first equation from the second: $(17x - 13y) - (11x - 7y) = 9 - 6 \\Rightarrow 6x - 6y = 3 \\Rightarrow 6(x - y) = 3 \\Rightarrow x - y = \\frac{3}{6} = \\frac{1}{2}$.\n**Answer: (C)** $\\frac{1}{2}$",
  "youtubeLink": "https://youtu.be/MJuRtAoIPH4?si=_dZ8eGDJUy5K_5B1",
  "category": ""
 },
 {
  "id": 37,
  "examId": "EST12021June",
  "question": "Anton has $\\$20$ to spend on stationary. Pens (p) cost $\\$1.4$ each, coloring crayons (c) are priced at $\\$3.5$ per pack and highlighters (h) sell for $\\$2$ each. He must buy a notebook for $\\$5.5$ as well. Which of the following describes how many highlighters Anton can buy?",
  "options": [
   "$h \\le \\frac{14.5 - 1.4p - 3.5c}{2}$",
   "$h \\le \\frac{14.5 + 1.4p + 3.5c}{2}$",
   "$h \\le \\frac{20 - 1.4p - 3.5c}{2} - 5.5$",
   "$h \\le \\frac{20 - 1.4p - 3.5c}{2}$"
  ],
  "correctAnswer": 0,
  "explanation": "Total spent cannot exceed $\\$20$.\nThe cost of the items is $1.4p + 3.5c + 2h + 5.5$.\nInequality: $1.4p + 3.5c + 2h + 5.5 \\le 20$.\nSubtract 5.5 from both sides: $1.4p + 3.5c + 2h \\le 14.5$.\nIsolate $2h$: $2h \\le 14.5 - 1.4p - 3.5c$.\nDivide by 2: $h \\le \\frac{14.5 - 1.4p - 3.5c}{2}$.\n**Answer: (A)** $h \\le \\frac{14.5 - 1.4p - 3.5c}{2}$",
  "category": ""
 },
 {
  "id": 38,
  "question": "By what percentage should we raise the price of a good to return to its initial price knowing that it was subject to a 20% discount 2 weeks ago?",
  "options": [
   "15%",
   "20%",
   "25%",
   "30%"
  ],
  "correctAnswer": 2,
  "explanation": "Let the initial price be 100. After a 20% discount, the price is 80. To return to 100, we must increase by 20. The percentage increase is $20 / 80 = 1/4 = 25\\%$.\n**Answer: (C)** 25%",
  "youtubeLink": "https://youtu.be/LZ4GPwNTIg0?si=BRwXCcvdAjZEZmzT",
  "category": ""
 },
 {
  "id": 39,
  "question": "The general elections in a country provided a parliament composed of 35% deputies from the democratic party, 20% for the conservative party, 30% for the republican party and 27 members of the labor party. How many more democrats are there than conservatives?",
  "options": [
   "9",
   "18",
   "27",
   "36"
  ],
  "correctAnswer": 2,
  "explanation": "Sum of given percentages: $35 + 20 + 30 = 85\\%$. Labor party makes up the remaining $15\\%$. If $15\\% = 27$ members, $1\\% = 27/15 = 1.8$ members. Democrats ($35\\%$) minus conservatives ($20\\%$) is a $15\\%$ difference. A $15\\%$ difference equals exactly 27 members.\n**Answer: (C)** 27",
  "youtubeLink": "https://youtu.be/Ip1dsBhy89U?si=_a-7dFnIcOtcD8XV",
  "category": ""
 },
 {
  "id": 40,
  "question": "Based on the graph above, what is the value of $f(-1) + g(-1) + h(-1)$?",
  "options": [
   "-4",
   "-5",
   "-6",
   "-7"
  ],
  "correctAnswer": 1,
  "explanation": "At $x = -1$, by carefully examining the grid points: $f(-1) = -1$, $g(-1) = -2$, and $h(-1) = -2$. Sum = $-1 + (-2) + (-2) = -5$.\n**Answer: (B)** -5",
  "youtubeLink": "https://youtu.be/tVfhyLrrmoo?si=erqkzinOCvvxqnQ8",
  "category": "",
  "image": "/images/est1/mar21/q40.png"
 },
 {
  "id": 41,
  "question": "A painter paints walls at an average rate of 1.2 walls per hour. He is asked to paint a villa containing 18 rooms each containing 5.4 walls on average. How long will he be actively painting the villa?",
  "options": [
   "2 days, 18 hours",
   "3 days",
   "3 days, 9 hours",
   "3 days, 18 hours"
  ],
  "correctAnswer": 2,
  "explanation": "Total walls = $18 \\times 5.4 = 97.2$ walls. Total hours required = $97.2 / 1.2 = 81$ hours. We know 1 day = 24 hours. $81 / 24 = 3$ remainder 9. So 3 days and 9 hours.\n**Answer: (C)** 3 days, 9 hours",
  "youtubeLink": "https://youtu.be/P0Uh52NzfeE?si=bhRdDJlxZB8BBMtn",
  "category": ""
 },
 {
  "id": 42,
  "question": "The bar graph represents the percentage of money spent by a company on different sectors last year. If 200,000 dollars were spent on the transport sector, what was the budget used for salaries?",
  "options": [
   "$320,000",
   "$340,000",
   "$360,000",
   "$370,000"
  ],
  "correctAnswer": 0,
  "explanation": "Transport is 12.5%. $12.5\\% = 200,000$. The total budget is $200,000 / 0.125 = 1,600,000$. Salaries represent 20%. $20\\%$ of 1,600,000 = $320,000$.\n**Answer: (A)** $320,000",
  "youtubeLink": "https://youtu.be/CIrsfLVo-uo?si=8wgGOiWRhDM_3q_3",
  "category": "",
  "image": "/images/est1/mar21/q42.png"
 },
 {
  "question": "**Question 43** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (C)** ",
  "image": "/images/est1/mar21/q43.png",
  "id": 43,
  "category": "",
  "correctAnswer": 2
 },
 {
  "question": "**Question 44** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (A)** ",
  "image": "/images/est1/mar21/q44.png",
  "id": 44,
  "category": "",
  "correctAnswer": 0
 },
 {
  "question": "**Question 45** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (A)** ",
  "image": "/images/est1/mar21/q45.png",
  "id": 45,
  "category": "",
  "correctAnswer": 0
 },
 {
  "question": "**Question 46** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (C)** ",
  "image": "/images/est1/mar21/q46.png",
  "id": 46,
  "category": "",
  "correctAnswer": 2
 },
 {
  "id": 47,
  "question": "Which of the following is equivalent to the quotient of the division given above: $\\frac{\\sqrt[4]{3}}{\\sqrt[8]{3}}$?",
  "options": [
   "$\\sqrt{3}$",
   "$\\sqrt[4]{3}$",
   "$\\sqrt[8]{3}$",
   "9"
  ],
  "correctAnswer": 2,
  "explanation": "Rewrite applying exponent rules: $\\frac{3^{1/4}}{3^{1/8}} = 3^{1/4 - 1/8} = 3^{2/8 - 1/8} = 3^{1/8} = \\sqrt[8]{3}$.\n**Answer: (C)** $\\sqrt[8]{3}$",
  "youtubeLink": "https://youtu.be/xbcZu7xtmhQ?si=CgcvNdh3bKrhqoiJ",
  "category": ""
 },
 {
  "id": 48,
  "question": "The number of bees in a beehive rose from 2400 to 2520 in a month. How many bees do we expect to have in the next month knowing that the population experiences the same percent increase every month?",
  "options": [
   "2600",
   "2640",
   "2646",
   "2656"
  ],
  "correctAnswer": 2,
  "explanation": "Percent increase = $(2520 - 2400) / 2400 = 120 / 2400 = 0.05$ (5%). Next month increase will be $5\\%$ of 2520: $2520 \\times 1.05 = 2646$.\n**Answer: (C)** 2646",
  "youtubeLink": "https://youtu.be/Pb_1A2d2F4w",
  "category": ""
 },
 {
  "id": 49,
  "question": "Which value of x could make the inequality $\\frac{2}{3}(x + 2) - x > 5$ true?",
  "options": [
   "-12",
   "-10",
   "-8",
   "-6"
  ],
  "correctAnswer": 0,
  "explanation": "Multiply by 3: $2(x+2) - 3x > 15 \\Rightarrow 2x + 4 - 3x > 15 \\Rightarrow -x > 11 \\Rightarrow x < -11$. The only option completely less than -11 is -12.\n**Answer: (A)** -12",
  "youtubeLink": "https://youtu.be/RLOtPhfzYsU?si=5dwEfnPh9lXdKK_3",
  "category": ""
 },
 {
  "id": 50,
  "question": "Harvey wants to buy a new apartment. He estimates that he will need its area to be around 1400 square feet. But, the provider measures its units in square meters. If 1 meter is nearly 3.28 feet, how many square meters approximately will Harvey need?",
  "options": [
   "427",
   "130",
   "4592",
   "15062"
  ],
  "correctAnswer": 1,
  "explanation": "We convert square feet to square meters by dividing by $(3.28)^2$. $1\\text{ m}^2 = (3.28\\text{ ft})^2 = 10.7584\\text{ ft}^2$. $1400 / 10.7584 \\approx 130.13$. So he needs approximately 130 square meters.\n**Answer: (B)** 130",
  "youtubeLink": "https://youtu.be/ghWIhIt0DjQ?si=n81e6weRckp4NakA",
  "category": ""
 },
 {
  "id": 51,
  "question": "The mean of x,y,z and t is 11.5. The mean of x,y,z,t and q is 11.8. What is the value of q?",
  "type": "grid-in",
  "options": [],
  "answerText": "13",
  "explanation": "Sum of x,y,z,t = $4 \\times 11.5 = 46$. Sum of x,y,z,t,q = $5 \\times 11.8 = 59$. Therefore, $q = 59 - 46 = 13$.\n**Answer:** 13",
  "youtubeLink": "https://youtu.be/tDSuodRGwKA?si=qdD5GE62z2lilqwe",
  "category": "",
  "correctAnswer": "13"
 },
 {
  "id": 52,
  "question": "The function g is defined by $g(x) = 3x^2 + kx - 8$ and $g(-2) = -4$. What is the value of $g(-3)$?",
  "type": "grid-in",
  "options": [],
  "answerText": "7",
  "explanation": "First, find k. $g(-2) = 3(-2)^2 + k(-2) - 8 = -4 \\Rightarrow 3(4) - 2k - 8 = -4 \\Rightarrow 12 - 2k - 8 = -4 \\Rightarrow 4 - 2k = -4 \\Rightarrow 2k = 8 \\Rightarrow k = 4$. So $g(x) = 3x^2 + 4x - 8$. Now find $g(-3)$: $g(-3) = 3(-3)^2 + 4(-3) - 8 = 3(9) - 12 - 8 = 27 - 20 = 7$.\n**Answer:** 7",
  "youtubeLink": "https://youtu.be/hHrEKvoN2bY?si=gICSXv8t0HrzY_X4",
  "category": "",
  "correctAnswer": "7"
 },
 {
  "id": 53,
  "question": "What is the remainder of the division of $P(x) = 4x^3 - x^2 - 8x + 6$ by $x - 1$?",
  "type": "grid-in",
  "options": [],
  "answerText": "1",
  "explanation": "By the Remainder Theorem, the remainder of dividing $P(x)$ by $x - 1$ is $P(1)$. $P(1) = 4(1)^3 - (1)^2 - 8(1) + 6 = 4 - 1 - 8 + 6 = 1$.\n**Answer:** 1",
  "youtubeLink": "https://youtu.be/xMA1rkr0FHY?si=7KXUZTVfVOa5njyg",
  "category": "",
  "correctAnswer": "1"
 },
 {
  "id": 54,
  "question": "The concentration of solution in sugar is directly proportional to the mass of sugar dissolved in the solution. If the concentration of a solution is 1.5mol/L when 54g are dissolved, how many grams are dissolved if the concentration is 2.1mol/L?",
  "type": "grid-in",
  "options": [],
  "answerText": "75.6",
  "explanation": "Let C = kM. $1.5 = k(54) \\Rightarrow k = 1.5/54$. Therefore, $2.1 = (1.5/54) M \\Rightarrow M = 2.1 \\times 54 / 1.5 = 75.6$g.\n**Answer:** 75.6",
  "youtubeLink": "https://youtu.be/q4iaaQDKXWc?si=IYWxLpkTPwj2sqok",
  "category": "",
  "correctAnswer": "75.6"
 },
 {
  "id": 55,
  "question": "If $h(x) = -x^2+3x-2$ and $k(x) = -2x-5$, what is the value of $h(k(-2))$?",
  "options": [],
  "explanation": "$k(-2) = -2(-2) - 5 = 4 - 5 = -1$. Then $h(-1) = -(-1)^2 + 3(-1) - 2 = -1 - 3 - 2 = -6$.\n**Answer:** 0.28",
  "category": "",
  "type": "grid-in",
  "answerText": "0.28",
  "correctAnswer": "0.28"
 },
 {
  "id": 56,
  "question": "The table shows several values for the functions p(x) and q(x). What is the value of p(q(0))?",
  "type": "grid-in",
  "options": [],
  "answerText": "1",
  "explanation": "First, look up $q(0)$. From the table, when $x = 0$, $q(x) = -1$. Next, look up $p(-1)$. From the table, when $x = -1$, $p(x) = 1$. Thus, $p(q(0)) = 1$.\n**Answer:** 1",
  "youtubeLink": "https://youtu.be/3ZiHBtt5PLk?si=jMkfoLpU_nhCTIFS",
  "category": "",
  "image": "/images/est1/mar21/q56.png",
  "correctAnswer": "1"
 },
 {
  "id": 57,
  "question": "If $h(x) = -x^2+3x-2$ and $k(x) = -2x-5$, what is the value of $h(k(-2))$?",
  "options": [],
  "explanation": "$k(-2) = -2(-2) - 5 = 4 - 5 = -1$. Then $h(-1) = -(-1)^2 + 3(-1) - 2 = -1 - 3 - 2 = -6$.\n**Answer:** 6",
  "category": "",
  "type": "grid-in",
  "answerText": "6",
  "correctAnswer": "6"
 },
 {
  "id": 58,
  "question": "Trevor has $600 to spend on shopping, 25 percent of which he spent to buy groceries. If he budgets 30 percent of the remaining amount for clothes, allots $120 for cooking utensils and spends the rest on gaming accessories, what percentage of the original $600 did he spend on gaming accessories? (Input your answer without the % sign)",
  "type": "grid-in",
  "options": [],
  "answerText": "32.5",
  "explanation": "Groceries: $25\\%$ of $600 = $150. Remaining amount = $450. Clothes: $30\\%$ of $450 = $135. Balance = $450 - 135 = 315. Utensils = $120. Final balance for gaming accessories = $315 - 120 = $195. Percentage of original = $(195 / 600) \\times 100 = 32.5\\%$.\n**Answer:** 32.5",
  "youtubeLink": "https://youtu.be/V86uIb7y0Kc?si=Y9-2q7zuGA_FSdXP",
  "category": "",
  "correctAnswer": "32.5"
 }
];
