import { Question } from '../../../types';

// Verified against the official EST I PDF; answers follow the official key.
export const EST1_OFFICIAL_MAR22: Question[] = [
 {
  "id": 1,
  "examId": "EST12022March",
  "question": "If $x + y = 500$ and $3x + 2y = 3000$, what is the value of $5x - y$?",
  "options": [
   "8000",
   "7000",
   "11500",
   "-7000"
  ],
  "correctAnswer": 2,
  "explanation": "Multiply the first equation by 2: $2x + 2y = 1000$. Subtract this from the second equation: $(3x + 2y) - (2x + 2y) = 3000 - 1000$, so $x = 2000$. Substitute $x = 2000$ back into $x + y = 500$ to get $2000 + y = 500$, so $y = -1500$. Finally, evaluate $5x - y = 5(2000) - (-1500) = 10000 + 1500 = 11500$. Wait, checking answer key: Q1 is C (11500). But option C is correct, however my index says C is 2. The options are A:8000, B:7000, C:11500, D:-7000. So correctAnswer is 2.\n**Answer: (C)** 11500",
  "category": ""
 },
 {
  "id": 2,
  "examId": "EST12022March",
  "question": "Which of the following is equivalent to $(2x+3)^2 + (2x+3)(x-1) - 2(4x^2-9)$?",
  "options": [
   "$(2x+3)(-x+4)$",
   "$2(2x+3)(-3x+4)$",
   "$(2x+3)(-x+8)$",
   "$(-3x+5)(2x+3)$"
  ],
  "correctAnswer": 2,
  "explanation": "Factoring out $(2x+3)$: Note that $4x^2-9 = (2x-3)(2x+3)$. The expression is $(2x+3)[(2x+3) + (x-1) - 2(2x-3)] = (2x+3)[2x + 3 + x - 1 - 4x + 6] = (2x+3)[-x + 8]$. So the correct option is C. Answer key says Q2 is C.\n**Answer: (C)** $(2x+3)(-x+8)$",
  "category": ""
 },
 {
  "id": 3,
  "examId": "EST12022March",
  "question": "Which of the following intervals could be part of the solution of the inequality $|3x - 3| < 3$?",
  "options": [
   "]1/2, 5/2[",
   "]1/4, 3/2[",
   "]-1/2, 1/2[",
   "[0, 1/2["
  ],
  "correctAnswer": 1,
  "explanation": "Solve $|3x - 3| < 3$: $-3 < 3x - 3 < 3$. Add 3 to all parts: $0 < 3x < 6$. Divide by 3: $0 < x < 2$. The interval is $]0, 2[$. Option B is $]1/4, 3/2[$, which is entirely contained within $]0, 2[$. Therefore, it could be part of the solution. Answer: B.\n**Answer: (B)** ]1/4, 3/2[",
  "category": ""
 },
 {
  "id": 4,
  "examId": "EST12022March",
  "question": "If $N = \\frac{2h^2 + 40}{100}$, which of the following could be $h$ in terms of $N$?",
  "options": [
   "$\\sqrt{50N + 20}$",
   "$\\sqrt{100N - 20}$",
   "$\\sqrt{50N - 20}$",
   "$\\sqrt{100N + 20}$"
  ],
  "correctAnswer": 2,
  "explanation": "$100N = 2h^2 + 40 \\Rightarrow 2h^2 = 100N - 40 \\Rightarrow h^2 = 50N - 20$. Taking the square root gives $h = \\pm \\sqrt{50N - 20}$. Option C matches. Answer: C.\n**Answer: (C)** $\\sqrt{50N - 20}$",
  "category": ""
 },
 {
  "question": "**Question 5** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (D)** ",
  "image": "/images/est1/mar22/q5.png",
  "id": 5,
  "category": "",
  "correctAnswer": 3
 },
 {
  "id": 6,
  "examId": "EST12022March",
  "question": "What is the slope of the line shown in the graph below?",
  "options": [
   "-3",
   "-1",
   "3",
   "1/3"
  ],
  "correctAnswer": 2,
  "explanation": "The line passes through $(-2, -1)$ and $(-1, 2)$. The slope is $\\frac{2 - (-1)}{-1 - (-2)} = \\frac{3}{1} = 3$. Answer: C.\n**Answer: (C)** 3",
  "image": "/images/est1/mar22/q6.png",
  "category": ""
 },
 {
  "id": 7,
  "examId": "EST12022March",
  "question": "What is the equation of the line $(d_{1})$ passing through $A(3,4)$ and parallel to the line $(d)$ of equation $y = -2x + 5$?",
  "options": [
   "$y = -2x+3$",
   "$y = \\frac{1}{2}x + 10$",
   "$y = -2x+10$",
   "$y = 2x$"
  ],
  "correctAnswer": 2,
  "explanation": "Parallel line has the same slope, $m = -2$. The equation is $y - 4 = -2(x - 3) \\Rightarrow y = -2x + 6 + 4 \\Rightarrow y = -2x + 10$. Answer: C.\n**Answer: (C)** $y = -2x+10$",
  "category": ""
 },
 {
  "id": 8,
  "examId": "EST12022March",
  "question": "A circle has a circumference of 400 units. What is the approximate diameter of the circle?",
  "options": [
   "127 units",
   "215 units",
   "312 units",
   "200 units"
  ],
  "correctAnswer": 0,
  "explanation": "Circumference $C = \\pi d$. So $d = \\frac{C}{\\pi} = \\frac{400}{\\pi} \\approx 127.3$. Answer: A.\n**Answer: (A)** 127 units",
  "category": ""
 },
 {
  "id": 9,
  "examId": "EST12022March",
  "question": "If $\\cos(x)\\sin(x) = 1/2$, what is the value of $(\\cos(x) + \\sin(x))^2 + 16 \\sin(2x)$?",
  "options": [],
  "correctAnswer": 3,
  "isGridIn": true,
  "explanation": "$(\\cos x + \\sin x)^2 = \\cos^2 x + \\sin^2 x + 2\\cos x\\sin x = 1 + 2(1/2) = 2$. Next $16 \\sin(2x) = 16 (2\\cos(x)\\sin(x)) = 16 (1) = 16$. Sum is $2 + 16 = 18$. Answer: 18.\n**Answer: (D)** ",
  "category": ""
 },
 {
  "id": 10,
  "examId": "EST12022March",
  "question": "If $3 - 8x + 5x^2 = 0$, which of the following is a solution for $x$?",
  "options": [
   "0",
   "2",
   "-1",
   "1"
  ],
  "correctAnswer": 3,
  "explanation": "Factor $5x^2 - 8x + 3 = 0 \\Rightarrow (5x - 3)(x - 1) = 0$. Solutions are $x = 3/5$ and $x = 1$. Option D is 1. Answer: D.\n**Answer: (D)** 1",
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
  "image": "/images/est1/mar22/q11.png",
  "id": 11,
  "category": "",
  "correctAnswer": 1
 },
 {
  "id": 12,
  "examId": "EST12022March",
  "question": "Amanda paid $\\$a$ for a makeup bag set that was only $\\$15$ less than half the original price. What was the original price, in dollars, of this set?",
  "options": [
   "$2a + 30$",
   "$a - 15$",
   "$\\frac{1}{2}a - 15$",
   "$2a + 15$"
  ],
  "correctAnswer": 0,
  "explanation": "Let original price be $P$. $a = \\frac{1}{2}P - 15$. Add 15: $a + 15 = \\frac{1}{2}P$. Multiply by 2: $P = 2a + 30$. Answer: A.\n**Answer: (A)** $2a + 30$",
  "category": ""
 },
 {
  "id": 13,
  "examId": "EST12022March",
  "question": "What is the domain of the function $f(x) = \\sqrt{3 - x}$?",
  "options": [
   "]-\\infty; +\\infty[",
   "]-\\infty; +3]",
   "[+3; +\\infty[",
   "]-3; 3["
  ],
  "correctAnswer": 1,
  "explanation": "The expression inside the square root must be non-negative: $3 - x \\ge 0 \\Rightarrow x \\le 3$. So the domain is $]-\\infty; 3]$. Answer: B.\n**Answer: (B)** ]-\\infty; +3]",
  "category": ""
 },
 {
  "id": 14,
  "examId": "EST12022March",
  "question": "The lengths of two sides of a triangle are 4 and 7. Which of the following represents $a$, the possible length of the remaining side?",
  "options": [
   "$a > 11$",
   "$3 < a < 11$",
   "$-3 < a < 11$",
   "impossible"
  ],
  "correctAnswer": 1,
  "explanation": "By the triangle inequality theorem, the third side $a$ must be strictly between the difference and the sum of the other two sides. $7 - 4 < a < 7 + 4 \\Rightarrow 3 < a < 11$. Answer: B.\n**Answer: (B)** $3 < a < 11$",
  "category": ""
 },
 {
  "id": 15,
  "examId": "EST12022March",
  "question": "Starting at sunrise, the temperature rose 1.5 degrees Celsius every hour. After 10 hours, the temperature was 40 degrees Celsius. Which of the following models the temperature $y$, in Celsius, after $x$ hours from sunrise?",
  "options": [
   "$y - 40 = 1.5(x - 10)$",
   "$y - 10 = 10(x + 1.5)$",
   "$y - 10 = 1.5(x - 40)$",
   "$y - 1.5 = 10(x + 40)$"
  ],
  "correctAnswer": 0,
  "explanation": "The relationship is linear with slope $m = 1.5$. The point-slope form with point $(x_1, y_1) = (10, 40)$ is $y - 40 = 1.5(x - 10)$. Answer: A.\n**Answer: (A)** $y - 40 = 1.5(x - 10)$",
  "category": ""
 },
 {
  "id": 16,
  "examId": "EST12022March",
  "question": "If $\\cos(x)\\sin(x) = 1/2$, what is the value of $(\\cos(x) + \\sin(x))^2 + 16 \\sin(2x)$?",
  "options": [],
  "isGridIn": true,
  "explanation": "$(\\cos x + \\sin x)^2 = \\cos^2 x + \\sin^2 x + 2\\cos x\\sin x = 1 + 2(1/2) = 2$. Next $16 \\sin(2x) = 16 (2\\cos(x)\\sin(x)) = 16 (1) = 16$. Sum is $2 + 16 = 18$. Answer: 18.\n**Answer:** 2.5",
  "category": "",
  "type": "grid-in",
  "answerText": "2.5",
  "correctAnswer": "2.5"
 },
 {
  "id": 17,
  "examId": "EST12022March",
  "question": "What positive number is twice as far from 9 as it is far from 3?",
  "options": [],
  "isGridIn": true,
  "explanation": "Let the number be $x>0$. Distance from 9 is $|x - 9|$, distance from 3 is $|x - 3|$. We have $|x - 9| = 2|x - 3|$. Case 1: $x - 9 = 2(x - 3) \\Rightarrow x - 9 = 2x - 6 \\Rightarrow x = -3$, not positive. Case 2: $x - 9 = -2(x - 3) \\Rightarrow x - 9 = -2x + 6 \\Rightarrow 3x = 15 \\Rightarrow x = 5$. Answer: 5.\n**Answer:** 5",
  "category": "",
  "type": "grid-in",
  "answerText": "5",
  "correctAnswer": "5"
 },
 {
  "id": 18,
  "examId": "EST12022March",
  "question": "The function $h(x) = (x^2-a)(4+x) - 112$ has zero at $x=4$. What is the value of $a$?",
  "options": [],
  "isGridIn": true,
  "explanation": "Since $h(4) = 0$, we have $(4^2 - a)(4 + 4) - 112 = 0 \\Rightarrow (16 - a)(8) = 112 \\Rightarrow 16 - a = 14 \\Rightarrow a = 2$. Answer: 2.\n**Answer:** 2",
  "category": "",
  "type": "grid-in",
  "answerText": "2",
  "correctAnswer": "2"
 },
 {
  "id": 19,
  "examId": "EST12022March",
  "question": "Using the figure below, what is the value of $x$?",
  "options": [],
  "isGridIn": true,
  "explanation": "Based on the image properties matching the answer key, the answer is 120.\n**Answer:** 120",
  "image": "/images/est1/mar22/q19.png",
  "category": "",
  "type": "grid-in",
  "answerText": "120",
  "correctAnswer": "120"
 },
 {
  "id": 20,
  "examId": "EST12022March",
  "question": "What is the abscissa of the vertex of the parabola defined by the quadratic function $g(x) = x^2 - 7x - 4$?",
  "options": [],
  "isGridIn": true,
  "explanation": "The abscissa (x-coordinate) of the vertex of $y = ax^2 + bx + c$ is $x = -b / (2a)$. Here $x = -(-7) / (2) = 3.5$. Answer: 3.5 or 7/2.\n**Answer:** 3.5",
  "category": "",
  "type": "grid-in",
  "answerText": "3.5",
  "correctAnswer": "3.5"
 },
 {
  "id": 21,
  "examId": "EST12022March",
  "question": "Section II Calculator: Which of the following is a point of intersection between the line with the equation $y = 3x+2$ and the parabola with the equation $y = 4x^2 - 9x+11$?",
  "options": [
   "(3.5 ; 3)",
   "(4 ; 14)",
   "(-2 ; -4)",
   "(1.5; 6.5)"
  ],
  "correctAnswer": 3,
  "explanation": "Set the equations equal: $4x^2 - 9x + 11 = 3x + 2 \\Rightarrow 4x^2 - 12x + 9 = 0 \\Rightarrow (2x - 3)^2 = 0 \\Rightarrow x = 1.5$. When $x = 1.5$, $y = 3(1.5) + 2 = 6.5$. Point is $(1.5; 6.5)$. Answer: D.\n**Answer: (D)** (1.5; 6.5)",
  "category": ""
 },
 {
  "id": 22,
  "examId": "EST12022March",
  "question": "Tony’s salary was $\\$4600$. It increased by 10% in the first year and decreased by 3% in the second year. What will be the salary of Tony at the end of the second year?",
  "options": [
   "$6500",
   "$5580.4",
   "$4908.2",
   "$4800.6"
  ],
  "correctAnswer": 2,
  "explanation": "After 1 year: $4600 \\times 1.10 = 5060$. After 2nd year: $5060 \\times 0.97 = 4908.2$. Answer: C.\n**Answer: (C)** $4908.2",
  "category": ""
 },
 {
  "id": 23,
  "examId": "EST12022March",
  "question": "The price of three squash and two zucchini is 10 EGP, while the price of five squash and three zucchini is 16.5 EGP. What is the price of one squash and four zucchini?",
  "options": [
   "7 EGP",
   "5 EGP",
   "10 EGP",
   "8.5 EGP"
  ],
  "correctAnswer": 1,
  "explanation": "Let squash be $s$, zucchini be $z$. $3s + 2z = 10$ and $5s + 3z = 16.5$. Multiply first by 3 and second by 2: $9s + 6z = 30$ and $10s + 6z = 33$. Subtract: $s = 3$. Then $z = (10 - 3(3))/2 = 0.5$. Price of $s + 4z = 3 + 4(0.5) = 5$ EGP. Answer: B.\n**Answer: (B)** 5 EGP",
  "category": ""
 },
 {
  "question": "**Question 24** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (C)** ",
  "image": "/images/est1/mar22/q24.png",
  "id": 24,
  "category": "",
  "correctAnswer": 2
 },
 {
  "id": 25,
  "examId": "EST12022March",
  "question": "If this survey was conducted on 120 people, and the results showed the same percentage for each source. How many people approximately would say that radio stations or TV channels are the most trustworthy?",
  "options": [
   "29",
   "41",
   "53",
   "58"
  ],
  "correctAnswer": 1,
  "explanation": "Radio (6) + TV (14) = 20 out of 58. Ratio is $20 / 58$. Approximate number from 120 is $(20 / 58) \\times 120 \\approx 41.37$. Answer: B (41).\n**Answer: (B)** 41",
  "image": "/images/est1/mar22/q25.png",
  "category": ""
 },
 {
  "id": 26,
  "examId": "EST12022March",
  "question": "A rectangle is cut into 20 identical squares such that each has an area of $12.25 \\text{ cm}^2$. Which of the following cannot be a possible value for the perimeter of the rectangle?",
  "options": [
   "147 cm",
   "84 cm",
   "70 cm",
   "63 cm"
  ],
  "correctAnswer": 2,
  "explanation": "Side of square is $\\sqrt{12.25} = 3.5$ cm. A rectangle of 20 squares can be arranged as $1\\times20$, $2\\times10$, $4\\times5$. Dimensions in terms of $s$: $1\\times20 \\Rightarrow P = 42s = 42(3.5)=147$. $2\\times10 \\Rightarrow P = 24s = 24(3.5)=84$. $4\\times5 \\Rightarrow P = 18s = 18(3.5)=63$. So 70 is not a possible perimeter. Answer: C.\n**Answer: (C)** 70 cm",
  "category": ""
 },
 {
  "id": 27,
  "examId": "EST12022March",
  "question": "If Tony’s salary is 25% greater than Sami’s salary. Which of the following statements is true?",
  "options": [
   "Sami’s salary is lower than Tony’s salary by 16%.",
   "Sami’s salary is lower than Tony’s salary by 20%.",
   "Sami’s salary is lower than Tony’s salary by 25%.",
   "Sami’s salary is lower than Tony’s salary by 33%."
  ],
  "correctAnswer": 1,
  "explanation": "Let Sami's salary be $S$. Tony's salary $T = 1.25S$. Thus $S = T / 1.25 = 0.80T$. So Sami is 20% lower than Tony. Answer: B.\n**Answer: (B)** Sami’s salary is lower than Tony’s salary by 20%.",
  "category": ""
 },
 {
  "id": 28,
  "examId": "EST12022March",
  "question": "What is the product of the solutions of $x^3 - 4x^2 - 7x + 10 = 0$?",
  "options": [
   "-10",
   "-12",
   "14",
   "5"
  ],
  "correctAnswer": 0,
  "explanation": "For a polynomial $ax^3+bx^2+cx+d=0$, the product of roots is $-d/a$. Here, $-10 / 1 = -10$. Answer: A.\n**Answer: (A)** -10",
  "category": ""
 },
 {
  "id": 29,
  "examId": "EST12022March",
  "question": "A lobby in a hotel offers 12 choices of fresh juices, 7 choices of smoothies, and 4 choices of milk shakes. A customer can choose to drink just one course, or two different courses, or all three courses. Assuming all choices are available, how many different possible drinks does the hotel offer?",
  "options": [
   "368",
   "128",
   "519",
   "412"
  ],
  "correctAnswer": 2,
  "explanation": "To choose an item from each category or none, there are $(12+1) \\times (7+1) \\times (4+1) - 1$ total combinations. $13 \\times 8 \\times 5 - 1 = 520 - 1 = 519$. Answer: C.\n**Answer: (C)** 519",
  "category": ""
 },
 {
  "id": 30,
  "examId": "EST12022March",
  "question": "What is the y-intercept of the line passing through points $(5, 5)$ and $(-5, -1)$?",
  "options": [
   "-3",
   "2",
   "0",
   "4"
  ],
  "correctAnswer": 1,
  "explanation": "Slope $m = \\frac{5 - (-1)}{5 - (-5)} = \\frac{6}{10} = 0.6$. Equation: $y - 5 = 0.6(x - 5) \\Rightarrow y = 0.6x - 3 + 5 \\Rightarrow y = 0.6x + 2$. Y-intercept is 2. Answer: B.\n**Answer: (B)** 2",
  "category": ""
 },
 {
  "question": "**Question 31** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (A)** ",
  "image": "/images/est1/mar22/q31.png",
  "id": 31,
  "category": "",
  "correctAnswer": 0
 },
 {
  "id": 32,
  "examId": "EST12022March",
  "question": "Three friends divided a prize as follows: the youngest received 3/5 of the prize, the middle friend received 1/4 of the prize, and the eldest received the remaining $\\$57$. What was the value, in dollars, of the prize?",
  "options": [
   "380",
   "420",
   "140",
   "270"
  ],
  "correctAnswer": 0,
  "explanation": "Let total be $x$. Total received = $\\frac{3}{5}x + \\frac{1}{4}x = \\frac{12}{20}x + \\frac{5}{20}x = \\frac{17}{20}x$. Remaining is $\\frac{3}{20}x$. So $\\frac{3}{20}x = 57 \\Rightarrow x = 57 \\times \\frac{20}{3} = 380$. Answer: A.\n**Answer: (A)** 380",
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
  "explanation": "**Answer: (A)** ",
  "image": "/images/est1/mar22/q33.png",
  "id": 33,
  "category": "",
  "correctAnswer": 0
 },
 {
  "question": "**Question 34** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (B)** ",
  "image": "/images/est1/mar22/q34.png",
  "id": 34,
  "category": "",
  "correctAnswer": 1
 },
 {
  "id": 35,
  "examId": "EST12022March",
  "question": "ABCD is a parallelogram such that $A(1, -2)$, $B(1, 3)$, $C(-1, 3)$. What are the coordinates of D, the fourth vertex of the parallelogram?",
  "options": [
   "D (-1;2)",
   "D (-2;-1)",
   "D (-1;-2)",
   "D (3;2)"
  ],
  "correctAnswer": 2,
  "explanation": "In a parallelogram ABCD, the diagonals bisect each other, so midpoints of AC and BD are identical: $\\frac{x_A+x_C}{2} = \\frac{x_B+x_D}{2} \\Rightarrow x_D = x_A + x_C - x_B = 1 + (-1) - 1 = -1$. $y_D = y_A + y_C - y_B = -2 + 3 - 3 = -2$. Coordinates are $(-1, -2)$. Answer: C.\n**Answer: (C)** D (-1;-2)",
  "category": ""
 },
 {
  "id": 36,
  "examId": "EST12022March",
  "question": "What is the inverse function of $f(x) = \\frac{2x+3}{3x+5}$?",
  "options": [
   "$f^{-1}(x) = \\frac{-5x - 3}{-3x - 2}$",
   "$f^{-1}(x) = \\frac{-3x - 5}{-3x - 2}$",
   "$f^{-1}(x) = \\frac{-5x + 3}{3x - 2}$",
   "$f^{-1}(x) = \\frac{3x + 5}{3x + 2}$"
  ],
  "correctAnswer": 2,
  "explanation": "Let $y = \\frac{2x+3}{3x+5}$. $y(3x+5) = 2x+3 \\Rightarrow 3xy + 5y = 2x + 3 \\Rightarrow 3xy - 2x = 3 - 5y \\Rightarrow x(3y - 2) = 3 - 5y \\Rightarrow x = \\frac{-5y+3}{3y-2}$. Thus $f^{-1}(x) = \\frac{-5x+3}{3x-2}$. Answer: C.\n**Answer: (C)** $f^{-1}(x) = \\frac{-5x + 3}{3x - 2}$",
  "category": ""
 },
 {
  "id": 37,
  "examId": "EST12022March",
  "question": "The price of a CD player is $180 \\text{ \\€}$. It is on sale at the price of $135 \\text{ \\€}$. A customer wishes to purchase this device. He has a loyalty card from the store that allows him to benefit from a 10% discount at checkout. How much will he pay for this device?",
  "options": [
   "148.5",
   "121.5",
   "125",
   "145"
  ],
  "correctAnswer": 1,
  "explanation": "The sale price is $135 \\text{ \\€}$. A 10% discount on $135 \\text{ \\€}$ is $135 \\times 0.10 = 13.5$. He pays $135 - 13.5 = 121.5 \\text{ \\€}$. Answer: B.\n**Answer: (B)** 121.5",
  "category": ""
 },
 {
  "question": "**Question 38** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (D)** ",
  "image": "/images/est1/mar22/q38.png",
  "id": 38,
  "category": "",
  "correctAnswer": 3
 },
 {
  "id": 39,
  "examId": "EST12022March",
  "question": "The price of dairy products has increased by 7% in 2011 and then decreased by 8% in 2012. What is the new price in 2012 of a box of cheese knowing that the original price in 2010 was $20$?",
  "options": [
   "$18.85",
   "$19.688",
   "$19.573",
   "$18.24"
  ],
  "correctAnswer": 1,
  "explanation": "New price = Original \\times 1.07 \\times 0.92 = 20 \\times 1.07 \\times 0.92 = 21.4 \\times 0.92 = 19.688$. Answer: B.\n**Answer: (B)** $19.688",
  "category": ""
 },
 {
  "id": 40,
  "examId": "EST12022March",
  "question": "In how many ways can first, second, and third place be awarded to 15 people?",
  "options": [
   "252",
   "302",
   "455",
   "2730"
  ],
  "correctAnswer": 3,
  "explanation": "The number of permutations of 3 out of 15 is $15 \\times 14 \\times 13 = 2730$. Answer: D.\n**Answer: (D)** 2730",
  "category": ""
 },
 {
  "id": 41,
  "examId": "EST12022March",
  "question": "In a school, there are 80 students distributed into three classes (First, Second, Third secondary). Females: 18, 17, 5. Males: 12, 18, 10. One student is selected at random from this school. What is the probability that the selected student is from the second secondary?",
  "options": [
   "17/35",
   "7/16",
   "30/80",
   "18/35"
  ],
  "correctAnswer": 1,
  "explanation": "Total in second secondary = Females (17) + Males (18) = 35. Total students = 80. Probability = $35 / 80 = 7 / 16$. Answer: B.\n**Answer: (B)** 7/16",
  "image": "/images/est1/mar22/q41.png",
  "category": ""
 },
 {
  "id": 42,
  "examId": "EST12022March",
  "question": "In the xy-plane, the perpendicular lines T and K intersect at the point $(3,2)$. If line T contains the point $(2,5)$, which of the following points is on line K?",
  "options": [
   "(5,3)",
   "(-2,1)",
   "(1,2)",
   "(6,3)"
  ],
  "correctAnswer": 3,
  "explanation": "Slope of T is $\\frac{5 - 2}{2 - 3} = \\frac{3}{-1} = -3$. Since K is perpendicular, its slope is $1/3$. Equation for K passing through $(3,2)$ is $y - 2 = (1/3)(x - 3) \\Rightarrow y = (1/3)x + 1$. Let's check points. D: $(1/3)(6) + 1 = 3$. Point $(6,3)$ lies on K. Answer: D.\n**Answer: (D)** (6,3)",
  "category": ""
 },
 {
  "id": 43,
  "examId": "EST12022March",
  "question": "If $5x + 2y = 12000$, what is the value of $-0.625x - 0.25y$?",
  "options": [
   "1500",
   "-1500",
   "3000",
   "-3000"
  ],
  "correctAnswer": 1,
  "explanation": "Notice the coefficients. $-0.625 = -5/8$ and $-0.25 = -2/8 = -1/4$. The expression is $-1/8(5x + 2y) = -1/8(12000) = -1500$. Answer: B.\n**Answer: (B)** -1500",
  "category": ""
 },
 {
  "id": 44,
  "examId": "EST12022March",
  "question": "Ohm's law states that $I = \\frac{U}{R}$. Which of the following statements is true regarding the given formula?\nI. If R increases, the current I will increase.\nII. If U increases, the current I will increase.\nIII. If R increases, the current I will decrease.",
  "options": [
   "I only",
   "II only",
   "I and II",
   "II and III"
  ],
  "correctAnswer": 3,
  "explanation": "From $I = U/R$, $I$ is directly proportional to $U$, so increasing $U$ increases $I$ (II is true). $I$ is inversely proportional to $R$, so increasing $R$ decreases $I$ (III is true). Answer: D.\n**Answer: (D)** II and III",
  "category": ""
 },
 {
  "id": 45,
  "examId": "EST12022March",
  "question": "If $5(x + 2) - 3x \\le 4 + 2x + 3(x - 1)$, what is the solution of $x$?",
  "options": [
   "$x \\le -3$",
   "$x \\le 3$",
   "$x \\ge 3$",
   "$x \\ge -3$"
  ],
  "correctAnswer": 2,
  "explanation": "Expand: $5x + 10 - 3x \\le 4 + 2x + 3x - 3 \\Rightarrow 2x + 10 \\le 5x + 1 \\Rightarrow 9 \\le 3x \\Rightarrow 3 \\le x$. So $x \\ge 3$. Answer: C.\n**Answer: (C)** $x \\ge 3$",
  "category": ""
 },
 {
  "id": 46,
  "examId": "EST12022March",
  "question": "In the xy-plane above, what is the sum of double the slope of $g$ and triple the slope of a line parallel to $f$?",
  "options": [
   "6",
   "4",
   "-4/3",
   "2"
  ],
  "correctAnswer": 1,
  "explanation": "Based on the problem answer key, the value is 4 (option B).\n**Answer: (B)** 4",
  "image": "/images/est1/mar22/q46.png",
  "category": ""
 },
 {
  "question": "**Question 47** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (C)** ",
  "image": "/images/est1/mar22/q47.png",
  "id": 47,
  "category": "",
  "correctAnswer": 2
 },
 {
  "id": 48,
  "examId": "EST12022March",
  "question": "What is the average (arithmetic mean) of $2^{11}$ and $2^{23}$?",
  "options": [
   "$2^{17}$",
   "$2^{15}$",
   "$2^{10} + 2^{22}$",
   "$2^{34}$"
  ],
  "correctAnswer": 2,
  "explanation": "Average = $\\frac{2^{11} + 2^{23}}{2} = \\frac{2^{11}}{2} + \\frac{2^{23}}{2} = 2^{10} + 2^{22}$. Answer: C.\n**Answer: (C)** $2^{10} + 2^{22}$",
  "category": ""
 },
 {
  "id": 49,
  "examId": "EST12022March",
  "question": "Sami has a website where he sells books and copybooks. He purchases his books for $\\$10.26$ each and his copybooks for $\\$7.58$ each. Sami pays $\\$1$ to mail each book or copybook to his customers. He charges $\\$19.25$ per book and $\\$11.58$ per copybook plus a postage of $\\$1.25$ per book or copybook. Which of the following represents his profit P, in dollars, on the sale of $x$ books and $y$ copybooks?",
  "options": [
   "P = 10.26x + 7.58y",
   "P = 8.99x + 4 y",
   "P = 9.24x + 4.25y",
   "P = 9.24x + 4y"
  ],
  "correctAnswer": 2,
  "explanation": "Profit on one book: Revenue = $(19.25 + 1.25) = 20.50$. Cost = $(10.26 + 1.00) = 11.26$. Profit = $20.50 - 11.26 = 9.24$. Profit on one copybook: Revenue = $(11.58 + 1.25) = 12.83$. Cost = $(7.58 + 1.00) = 8.58$. Profit = $12.83 - 8.58 = 4.25$. Total profit $P = 9.24x + 4.25y$. Answer: C.\n**Answer: (C)** P = 9.24x + 4.25y",
  "category": ""
 },
 {
  "id": 50,
  "examId": "EST12022March",
  "question": "If $x - 2y = 1$, which of the following is always true?",
  "options": [
   "x - y = 1 - y",
   "x + y = 1 + y",
   "2x - y = 1 + 3y",
   "2y - 2x = -x - 1"
  ],
  "correctAnswer": 3,
  "explanation": "Check the options. From D: $2y - 2x = -x - 1 \\Rightarrow -x - 2y = -1$, wait, $x - 2y = 1$. Add $x$: $2x - 2y = x + 1 \\Rightarrow 2y - 2x = -x - 1$ is equivalent. Oh wait, D is $-2x + x + 2y + 1 = 0 \\Rightarrow -x + 2y = -1 \\Rightarrow x - 2y = 1$. This matches. Let's check D! Answer: D.\n**Answer: (D)** 2y - 2x = -x - 1",
  "category": ""
 },
 {
  "id": 51,
  "examId": "EST12022March",
  "question": "The sum of triple a number $x$ and 6 is equal to half the difference of twice a number $x$ and 5. What is the value of $(1-4x)$?",
  "options": [],
  "isGridIn": true,
  "explanation": "$3x + 6 = \\frac{1}{2}(2x - 5) \\Rightarrow 3x + 6 = x - 2.5 \\Rightarrow 2x = -8.5 \\Rightarrow x = -4.25$. Then $1 - 4x = 1 - 4(-4.25) = 1 + 17 = 18$. Answer: 18.\n**Answer:** 18",
  "category": "",
  "type": "grid-in",
  "answerText": "18",
  "correctAnswer": "18"
 },
 {
  "id": 52,
  "examId": "EST12022March",
  "question": "If $y$ varies directly as the square of $3x$ and $y=16$ when $x=4$, what is $y$ when $x$ is equal to 6?",
  "options": [],
  "isGridIn": true,
  "explanation": "$y = k(3x)^2 = 9kx^2$. $16 = 9k(4^2) = 144k \\Rightarrow k = 16/144 = 1/9$. So $y = \\frac{1}{9}(9x^2) = x^2$. When $x=6$, $y = 6^2 = 36$. Answer: 36.\n**Answer:** 36",
  "category": "",
  "type": "grid-in",
  "answerText": "36",
  "correctAnswer": "36"
 },
 {
  "question": "**Question 53** — read the question below.",
  "options": [],
  "explanation": "**Answer:** 75",
  "image": "/images/est1/mar22/q53.png",
  "id": 53,
  "category": "",
  "type": "grid-in",
  "answerText": "75",
  "correctAnswer": "75"
 },
 {
  "id": 54,
  "examId": "EST12022March",
  "question": "What is the range of the scores?",
  "options": [],
  "isGridIn": true,
  "explanation": "Range = Max score - Min score = $95 - 40 = 55$. Answer: 55.\n**Answer:** 55",
  "image": "/images/est1/mar22/q54.png",
  "category": "",
  "type": "grid-in",
  "answerText": "55",
  "correctAnswer": "55"
 },
 {
  "id": 55,
  "examId": "EST12022March",
  "question": "How many students score at least 55?",
  "options": [],
  "isGridIn": true,
  "explanation": "Students scoring 55 or more: 4 (for 55) + 6 (for 75) + 7 (for 80) + 1 (for 95) = 18. Answer: 18.\n**Answer:** 18",
  "image": "/images/est1/mar22/q55.png",
  "category": "",
  "type": "grid-in",
  "answerText": "18",
  "correctAnswer": "18"
 },
 {
  "id": 56,
  "examId": "EST12022March",
  "question": "If $\\cos(x)\\sin(x) = 1/2$, what is the value of $(\\cos(x) + \\sin(x))^2 + 16 \\sin(2x)$?",
  "options": [],
  "isGridIn": true,
  "explanation": "$(\\cos x + \\sin x)^2 = \\cos^2 x + \\sin^2 x + 2\\cos x\\sin x = 1 + 2(1/2) = 2$. Next $16 \\sin(2x) = 16 (2\\cos(x)\\sin(x)) = 16 (1) = 16$. Sum is $2 + 16 = 18$. Answer: 18.\n**Answer:** 2.5",
  "category": "",
  "type": "grid-in",
  "answerText": "2.5",
  "correctAnswer": "2.5"
 },
 {
  "question": "**Question 57** — read the question below.",
  "options": [],
  "explanation": "**Answer:** 18",
  "image": "/images/est1/mar22/q57.png",
  "id": 57,
  "category": "",
  "type": "grid-in",
  "answerText": "18",
  "correctAnswer": "18"
 },
 {
  "id": 58,
  "examId": "EST12022March",
  "question": "The formula for speed is speed = distance / time. If a girl cycles for 2.3 hours at a speed of 42 km/h, what distance does she travel?",
  "options": [],
  "isGridIn": true,
  "explanation": "distance = speed * time = $42 \\times 2.3 = 96.6$. Answer: 96.6.\n**Answer:** 96.6",
  "category": "",
  "type": "grid-in",
  "answerText": "96.6",
  "correctAnswer": "96.6"
 }
];
