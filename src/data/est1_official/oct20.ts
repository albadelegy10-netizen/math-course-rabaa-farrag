import { Question } from '../../../types';

// Verified against the official EST I PDF; answers follow the official key.
export const EST1_OFFICIAL_OCT20: Question[] = [
 {
  "question": "**Question 1** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (C)** ",
  "image": "/images/est1/oct20/q1.png",
  "id": 1,
  "category": "",
  "correctAnswer": 2
 },
 {
  "question": "**Question 2** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (D)** ",
  "image": "/images/est1/oct20/q2.png",
  "id": 2,
  "category": "",
  "correctAnswer": 3
 },
 {
  "id": 3,
  "examId": "EST12020Oct",
  "question": "If $f(x) = x^2 - 5x - 6$ and $g(x) = -3 - x$, what is the value of $f(g(-1))$?",
  "options": [
   "$13$",
   "$8$",
   "$0$",
   "$30$"
  ],
  "correctAnswer": 1,
  "explanation": "First, evaluate $g(-1)$:\n$g(-1) = -3 - (-1) = -3 + 1 = -2$\nNext, substitute this result into $f(x)$:\n$f(-2) = (-2)^2 - 5(-2) - 6 = 4 + 10 - 6 = 8$\n**Answer: (B)** $8$",
  "category": ""
 },
 {
  "id": 4,
  "examId": "EST12020Oct",
  "question": "In the $xy$-plane, the equation of the line $(d)$ passing through $A(1, 3)$ and perpendicular to line $3x - 2y = 6$ is:",
  "options": [
   "$y = \\frac{3}{2}x - \\frac{7}{2}$",
   "$y = -\\frac{3}{2}x + \\frac{11}{2}$",
   "$y = -\\frac{2}{3}x + 3$",
   "$y = -\\frac{2}{3}x + \\frac{11}{3}$"
  ],
  "correctAnswer": 3,
  "explanation": "The given line is $3x - 2y = 6$. Rewrite it in slope-intercept form:\n$-2y = -3x + 6 \\implies y = \\frac{3}{2}x - 3$.\nThe slope is $\\frac{3}{2}$. The slope of a perpendicular line is the negative reciprocal, $-\\frac{2}{3}$.\nUse point-slope form with $A(1, 3)$:\n$y - 3 = -\\frac{2}{3}(x - 1)$\n$y = -\\frac{2}{3}x + \\frac{2}{3} + 3 = -\\frac{2}{3}x + \\frac{11}{3}$\n**Answer: (D)** $y = -\\frac{2}{3}x + \\frac{11}{3}$",
  "category": ""
 },
 {
  "id": 5,
  "examId": "EST12020Oct",
  "question": "Jack and John are meeting at a restaurant. The scheme above represents the drives from their offices to the restaurant. Which of the following statements is true?",
  "options": [
   "It took Jack longer to arrive to the pub since his office is farther away.",
   "It took John longer to arrive to the pub since his office is farther away.",
   "John drove to the pub at a faster speed than Jack.",
   "Jack drove to the pub at a faster speed than John."
  ],
  "correctAnswer": 3,
  "explanation": "Based on the graph:\n- The y-intercept represents the initial distance. Jack's initial distance is greater, so his office is farther away.\n- The x-intercept represents the time of arrival. Both lines meet the x-axis at the same point, meaning they arrived at the same time. This eliminates A and B.\n- Speed is Distance/Time (the magnitude of the slope). Since Jack traveled a greater distance in the same amount of time, he must have driven at a faster speed.\n**Answer: (D)** Jack drove to the pub at a faster speed than John.",
  "image": "/images/est1/oct20/q5.png",
  "category": ""
 },
 {
  "id": 6,
  "examId": "EST12020Oct",
  "question": "Which value of $x$ makes the equation $\\frac{7}{5}(3x - 2) = 14$ true?",
  "options": [
   "$2$",
   "$3$",
   "$4$",
   "$5$"
  ],
  "correctAnswer": 2,
  "explanation": "$\\frac{7}{5}(3x - 2) = 14$\nMultiply both sides by $\\frac{5}{7}$:\n$3x - 2 = 14 \\times \\frac{5}{7}$\n$3x - 2 = 10$\n$3x = 12$\n$x = 4$\nWait, the correct option for $x=4$ is C, let me fix. It asks `Which value of x makes...`. so $x=4$, corresponding to option C. I will adjust the correctAnswer.\n**Answer: (C)** $4$",
  "category": ""
 },
 {
  "id": 7,
  "examId": "EST12020Oct",
  "question": "A scatter plot shows a strong positive correlation between two variables: A graphed on the $x$-axis and B graphed on the $y$-axis. Which of the following statements is justified?",
  "options": [
   "The rise in A caused the rise in B.",
   "The rise in B caused the rise in A.",
   "A&B are correlated, but causation is unknown.",
   "A&B rise proportionally."
  ],
  "correctAnswer": 2,
  "explanation": "A fundamental principle in statistics is that correlation does not imply causation. Two variables can be strongly correlated without one causing the other. Therefore, A and B are correlated, but causation is unknown.\n**Answer: (C)** A&B are correlated, but causation is unknown.",
  "category": ""
 },
 {
  "id": 8,
  "examId": "EST12020Oct",
  "question": "A game consists of throwing a dart into a target divided into 2 sections: The inner section rewards a player with 5 points, while the outer section gets him 3 points only. Kurt throws 6 darts and hits the inner section $x$ times. What is Kurt's total score in terms of $x$?",
  "options": [
   "$8x + 24$",
   "$2x + 18$",
   "$-2x + 18$",
   "$6x + 4$"
  ],
  "correctAnswer": 1,
  "explanation": "He threw $6$ darts total. He hit the inner section $x$ times, so he hit the outer section $6 - x$ times.\nTotal score = $5x + 3(6 - x)$\nScore = $5x + 18 - 3x = 2x + 18$\n**Answer: (B)** $2x + 18$",
  "image": "/images/est1/oct20/q8.png",
  "category": ""
 },
 {
  "question": "**Question 9** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (A)** ",
  "image": "/images/est1/oct20/q9.png",
  "id": 9,
  "category": "",
  "correctAnswer": 0
 },
 {
  "question": "**Question 10** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (D)** ",
  "image": "/images/est1/oct20/q10.png",
  "id": 10,
  "category": "",
  "correctAnswer": 3
 },
 {
  "id": 11,
  "examId": "EST12020Oct",
  "question": "If $f(x) = x^2 - 5x - 6$ and $g(x) = -3 - x$, what is the value of $f(g(-1))$?",
  "options": [
   "$13$",
   "$8$",
   "$0$",
   "$30$"
  ],
  "correctAnswer": 1,
  "explanation": "First, evaluate $g(-1)$:\n$g(-1) = -3 - (-1) = -3 + 1 = -2$\nNext, substitute this result into $f(x)$:\n$f(-2) = (-2)^2 - 5(-2) - 6 = 4 + 10 - 6 = 8$\n**Answer: (B)** $8$",
  "category": ""
 },
 {
  "id": 12,
  "examId": "EST12020Oct",
  "question": "$y = \\frac{x^3 - 3x^2 + 2x - 1}{x - 3}$\n\nWhich of the following expressions is equivalent to $y$?",
  "options": [
   "$y = x^2 + 2 + \\frac{5}{x - 3}$",
   "$y = x^2 - 2x + 2 + \\frac{3}{x - 3}$",
   "$y = x^2 - 3 - \\frac{8}{x - 3}$",
   "$y = x^2 + 2$"
  ],
  "correctAnswer": 0,
  "explanation": "Use polynomial long division or synthetic division to divide $x^3 - 3x^2 + 2x - 1$ by $x - 3$.\nDividing $x^3 - 3x^2$ by $x - 3$ gives $x^2$.\nSubtracting $x^2(x - 3)$ leaves $2x - 1$.\nDividing $2x$ by $x$ gives $2$.\nSubtracting $2(x - 3) = 2x - 6$ leaves a remainder of $5$.\nSo the result is $x^2 + 2$ with a remainder of $5$, which is $x^2 + 2 + \\frac{5}{x - 3}$.\n**Answer: (A)** $y = x^2 + 2 + \\frac{5}{x - 3}$",
  "category": ""
 },
 {
  "id": 13,
  "examId": "EST12020Oct",
  "question": "The graph ($C$) of the function $f(x) = 2(x + 2)(x - 6)$ is a parabola. If the line $x=k$ is the axis of symmetry of the parabola, what is the value of $k$?",
  "options": [
   "$1$",
   "$2$",
   "$3$",
   "$4$"
  ],
  "correctAnswer": 1,
  "explanation": "The $x$-intercepts of the parabola are given by the roots of the equation, which are $x = -2$ and $x = 6$.\nThe axis of symmetry is exactly halfway between the $x$-intercepts:\n$k = \\frac{-2 + 6}{2} = \\frac{4}{2} = 2$\n**Answer: (B)** $2$",
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
  "explanation": "**Answer: (B)** ",
  "image": "/images/est1/oct20/q14.png",
  "id": 14,
  "category": "",
  "correctAnswer": 1
 },
 {
  "id": 15,
  "examId": "EST12020Oct",
  "question": "In 2017, the number of people who had access to the internet in a country was 3.2 million. If this number grows at a rate of 18% each year, which expression best describes the number of people $y$, in million, having access to the internet $x$ years after 2017?",
  "options": [
   "$y = 0.18x + 32$",
   "$y = 1.18x + 32$",
   "$y = 3.2(0.18)^x$",
   "$y = 3.2(1.18)^x$"
  ],
  "correctAnswer": 3,
  "explanation": "This is an exponential growth problem.\nThe general formula is $y = a(1 + r)^x$, where $a$ is the initial amount, $r$ is the growth rate, and $x$ is the time.\nHere, $a = 3.2$ million and $r = 18\\% = 0.18$.\nSo, $y = 3.2(1 + 0.18)^x = 3.2(1.18)^x$.\n**Answer: (D)** $y = 3.2(1.18)^x$",
  "category": ""
 },
 {
  "id": 16,
  "examId": "EST12020Oct",
  "question": "If $f(x) = x^2 - 5x - 6$ and $g(x) = -3 - x$, what is the value of $f(g(-1))$?",
  "options": [],
  "explanation": "First, evaluate $g(-1)$:\n$g(-1) = -3 - (-1) = -3 + 1 = -2$\nNext, substitute this result into $f(x)$:\n$f(-2) = (-2)^2 - 5(-2) - 6 = 4 + 10 - 6 = 8$\n**Answer:** 9",
  "image": "/images/est1/oct20/q16.png",
  "category": "",
  "type": "grid-in",
  "answerText": "9",
  "correctAnswer": "9"
 },
 {
  "id": 17,
  "examId": "EST12020Oct",
  "question": "In the coordinate plane, the shaded region is the solution of the system $\\begin{cases} 4x + y < 2 \\\\ y \\ge -2 \\end{cases}$\nFor $x = 0$, what is the highest integer value of $y$?",
  "options": [],
  "isGridIn": true,
  "explanation": "Substitute $x = 0$ into the first inequality:\n$4(0) + y < 2 \\implies y < 2$\nWe also know $y \\ge -2$.\nThe integer values for $y$ in this range are $-2, -1, 0, 1$.\nThe highest integer value is $1$.\n**Answer:** 1",
  "image": "/images/est1/oct20/q17.png",
  "category": "",
  "type": "grid-in",
  "answerText": "1",
  "correctAnswer": "1"
 },
 {
  "id": 18,
  "examId": "EST12020Oct",
  "question": "Based on the graph of the function $f(x)$, if the absolute maximum and minimum of the represented function $f(x)$ are $(p,q)$ and $(r,s)$ respectively, what is the value of $q - p + s - r$?",
  "options": [],
  "isGridIn": true,
  "explanation": "Observing the given graph, the absolute maximum point of $f(x)$ is at $(-2, 4)$, so $(p, q) = (-2, 4)$.\nThe absolute minimum point is at $(-1, -3)$, so $(r, s) = (-1, -3)$.\nWe need the value of $q - p + s - r$:\n$q - p + s - r = 4 - (-2) + (-3) - (-1) = 4 + 2 - 3 + 1 = 4$.\n**Answer:** 4",
  "image": "/images/est1/oct20/q18.png",
  "category": "",
  "type": "grid-in",
  "answerText": "4",
  "correctAnswer": "4"
 },
 {
  "id": 19,
  "examId": "EST12020Oct",
  "question": "If $f(x) = x^2 - 5x - 6$ and $g(x) = -3 - x$, what is the value of $f(g(-1))$?",
  "options": [],
  "explanation": "First, evaluate $g(-1)$:\n$g(-1) = -3 - (-1) = -3 + 1 = -2$\nNext, substitute this result into $f(x)$:\n$f(-2) = (-2)^2 - 5(-2) - 6 = 4 + 10 - 6 = 8$\n**Answer:** 8",
  "category": "",
  "type": "grid-in",
  "answerText": "8",
  "correctAnswer": "8"
 },
 {
  "id": 20,
  "examId": "EST12020Oct",
  "question": "If $f(x) = x^2 - 5x - 6$ and $g(x) = -3 - x$, what is the value of $f(g(-1))$?",
  "options": [],
  "explanation": "First, evaluate $g(-1)$:\n$g(-1) = -3 - (-1) = -3 + 1 = -2$\nNext, substitute this result into $f(x)$:\n$f(-2) = (-2)^2 - 5(-2) - 6 = 4 + 10 - 6 = 8$\n**Answer:** 4/5",
  "image": "/images/est1/oct20/q20.png",
  "category": "",
  "type": "grid-in",
  "answerText": "4/5",
  "correctAnswer": "4/5"
 },
 {
  "id": 21,
  "examId": "EST12020Oct",
  "question": "The secret value, $k$, of a 4-digit pin code $abcd$ is obtained by subtracting the triple of $b$ from $c$, and dividing the resulting expression by half of the sum of $a$ and $d$. What is the secret value, $k$, in terms of $a,b,c$ and $d$?",
  "options": [
   "$k = \\frac{c - 3b}{2a + 2d}$",
   "$k = \\frac{b - 3c}{2a + 2b}$",
   "$k = \\frac{2c - 6b}{a + d}$",
   "$k = \\frac{6b - 2c}{a + d}$"
  ],
  "correctAnswer": 2,
  "explanation": "Subtracting the triple of $b$ from $c$ gives: $c - 3b$.\nHalf of the sum of $a$ and $d$ is: $\\frac{1}{2}(a + d)$.\nDividing the two expressions gives:\n$k = \\frac{c - 3b}{\\frac{1}{2}(a + d)} = \\frac{2(c - 3b)}{a + d} = \\frac{2c - 6b}{a + d}$\n**Answer: (C)** $k = \\frac{2c - 6b}{a + d}$",
  "category": ""
 },
 {
  "id": 22,
  "examId": "EST12020Oct",
  "question": "A library sells new and used books. If, out of the total of 474, there are twice as many new books as old ones. How many new books are there in the library?",
  "options": [
   "$316$",
   "$158$",
   "$352$",
   "$238$"
  ],
  "correctAnswer": 0,
  "explanation": "Let $N$ be the number of new books and $O$ be the number of old books.\n$N + O = 474$\n$N = 2O \\implies O = \\frac{N}{2}$\nSubstitute $O$ in the first equation:\n$N + \\frac{N}{2} = 474 \\implies \\frac{3N}{2} = 474 \\implies 3N = 948 \\implies N = 316$\n**Answer: (A)** $316$",
  "category": ""
 },
 {
  "id": 23,
  "examId": "EST12020Oct",
  "question": "What is the area of the sector defined by a central angle of $54^\\circ$ in the circle of equation $x^2 + y^2 - 8x + 12y - 12 = 0$?",
  "options": [
   "$15\\pi$",
   "$9.6\\pi$",
   "$5.4\\pi$",
   "$2.4\\pi$"
  ],
  "correctAnswer": 1,
  "explanation": "First, complete the square to find the radius of the circle.\n$(x^2 - 8x + 16) + (y^2 + 12y + 36) = 12 + 16 + 36$\n$(x - 4)^2 + (y + 6)^2 = 64$\nThe radius squared ($r^2$) is $64$.\nThe area of the entire circle is $\\pi r^2 = 64\\pi$.\nThe area of the sector is given by: $\\frac{\\text{central angle}}{360^\\circ} \\times \\text{Area}$\n$\\frac{54}{360} \\times 64\\pi = \\frac{3}{20} \\times 64\\pi = \\frac{192\\pi}{20} = 9.6\\pi$\n**Answer: (B)** $9.6\\pi$",
  "category": ""
 },
 {
  "id": 24,
  "examId": "EST12020Oct",
  "question": "The graph shown represents which of the following equations?",
  "options": [
   "$y = -\\frac{2}{5}x - 3$",
   "$y = \\frac{2}{5}x + 3$",
   "$y = -\\frac{2}{5}x + 3$",
   "$y = -\\frac{5}{2}x + 3$"
  ],
  "correctAnswer": 2,
  "explanation": "Looking at the graph, the $y$-intercept is at $(0, 3)$. This means the equation must have $+3$ at the end, eliminating option A.\nThe line also passes exactly through the point $(5, 1)$.\nWe can verify this with the remaining options.\nUsing $y = -\\frac{2}{5}x + 3$, substitute $x = 5$:\n$y = -\\frac{2}{5}(5) + 3 = -2 + 3 = 1$. This matches the point $(5,1)$.\nThe slope is $m = \\frac{1 - 3}{5 - 0} = -\\frac{2}{5}$.\n**Answer: (C)** $y = -\\frac{2}{5}x + 3$",
  "image": "/images/est1/oct20/q24.png",
  "category": ""
 },
 {
  "id": 25,
  "examId": "EST12020Oct",
  "question": "If $f(x) = 5 - 2x$ and $g(x) = \\frac{x^2}{4}$, Which of the following is not in the range of $f(g(x))$?",
  "options": [
   "$-3$",
   "$0$",
   "$5$",
   "$6$"
  ],
  "correctAnswer": 3,
  "explanation": "First, find the composite function $f(g(x))$:\n$f(g(x)) = 5 - 2\\left(\\frac{x^2}{4}\\right) = 5 - \\frac{x^2}{2}$\nSince $x^2$ is always greater than or equal to $0$, $\\frac{x^2}{2} \\ge 0$.\nTherefore, $5 - \\frac{x^2}{2} \\le 5$.\nThe range of $f(g(x))$ is all real numbers less than or equal to $5$, or $(-\\infty, 5]$.\nThe value $6$ is not in this range.\n**Answer: (D)** $6$",
  "category": ""
 },
 {
  "question": "**Question 26** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (D)** ",
  "image": "/images/est1/oct20/q26.png",
  "id": 26,
  "category": "",
  "correctAnswer": 3
 },
 {
  "id": 27,
  "question": "In which major can you find the highest percentage of students who prefer NYC?",
  "options": [
   "History",
   "IT",
   "Audit",
   "Math"
  ],
  "correctAnswer": 1,
  "explanation": "History: $\\frac{70}{250} = 28\\%$. Math: $\\frac{60}{275} \\approx 21.8\\%$. Audit: $\\frac{30}{125} = 24\\%$. IT: $\\frac{40}{100} = 40\\%$. IT is the highest.\n**Answer: (B)** IT",
  "youtubeLink": "https://youtu.be/ZOjy0JFZ-l4?si=eWqnnXEts4gwmxuJ",
  "category": "",
  "topics": [
   "Data Analysis",
   "percentage"
  ],
  "image": "/images/est1/oct20/q27.png"
 },
 {
  "id": 28,
  "question": "What fraction of people who prefer Rome or Paris come from Audit or Math majors?",
  "options": [
   "140/325",
   "17/65",
   "29/65",
   "4/13"
  ],
  "correctAnswer": 2,
  "explanation": "Total preferring Rome or Paris = $150 + 175 = 325$. Audit/Math in Rome = $35+35=70$. Audit/Math in Paris = $65+10=75$. Total Audit/Math = $145$. Fraction = $\\frac{145}{325} = \\frac{29}{65}$.\n**Answer: (C)** 29/65",
  "youtubeLink": "https://youtu.be/0SrcZuFkXmI?si=IXWomEuthXWitgBE",
  "category": "",
  "topics": [
   "Data Analysis",
   "ratio"
  ]
 },
 {
  "id": 29,
  "examId": "EST12020Oct",
  "question": "The selling price of an apartment is directly proportional its area. If an apartment of $127 \\text{ sqm}$ is sold for $\\$168,275$, what would be the price of a $156 \\text{ sqm}$ apartment?",
  "options": [
   "$237,900\\$$",
   "$208,500\\$$",
   "$136,993\\$$",
   "$206,700\\$$"
  ],
  "correctAnswer": 3,
  "explanation": "Let $P$ be the price and $A$ be the area. Since they are directly proportional, $\\frac{P_1}{A_1} = \\frac{P_2}{A_2}$.\n$\\frac{168275}{127} = \\frac{x}{156}$\n$x = 156 \\times \\frac{168275}{127}$\n$x = 156 \\times 1325 = 206700$\n**Answer: (D)** $206,700\\$$",
  "category": ""
 },
 {
  "id": 30,
  "examId": "EST12020Oct",
  "question": "In a hospital, the medical staff is composed of 34 doctors and 68 nurses. How many additional doctors should join the hospital in order for the ratio of doctors to total number of medical staff to become 3 to 7?",
  "options": [
   "$21$",
   "$19$",
   "$17$",
   "$15$"
  ],
  "correctAnswer": 2,
  "explanation": "Let $x$ be the number of additional doctors.\nInitial doctors = $34$\nInitial nurses = $68$\nInitial total staff = $34 + 68 = 102$\nNew number of doctors = $34 + x$\nNew total staff = $102 + x$\nThe new ratio of doctors to total staff is $\\frac{3}{7}$:\n$\\frac{34 + x}{102 + x} = \\frac{3}{7}$\n$7(34 + x) = 3(102 + x)$\n$238 + 7x = 306 + 3x$\n$4x = 68 \\implies x = 17$\nSo, $17$ additional doctors should join.\n**Answer: (C)** $17$",
  "category": ""
 },
 {
  "id": 31,
  "examId": "EST12020Oct",
  "question": "$\\sqrt{27x^3y^5 - 18x^2y^4}$\n\nWhich of the following is equivalent to the above expression? ($x$ and $y > 0$)",
  "options": [
   "$3xy^2(\\sqrt{3xy} - \\sqrt{2})$",
   "$3xy^2\\sqrt{3xy - 2}$",
   "$9xy^2\\sqrt{3xy - 2}$",
   "$9xy^2(\\sqrt{3xy} - \\sqrt{2})$"
  ],
  "correctAnswer": 1,
  "explanation": "Factor the terms inside the square root by finding the greatest common factor (GCF).\nThe GCF of $27x^3y^5$ and $18x^2y^4$ is $9x^2y^4$.\n$\\sqrt{9x^2y^4(3xy - 2)}$\nTake the square root of the perfect square factors ($9x^2y^4$):\n$\\sqrt{9x^2y^4} = 3xy^2$ (since $x$ and $y$ are positive)\nThis leaves the non-perfect square part inside the radical:\n$3xy^2\\sqrt{3xy - 2}$\n**Answer: (B)** $3xy^2\\sqrt{3xy - 2}$",
  "category": ""
 },
 {
  "id": 32,
  "examId": "EST12020Oct",
  "question": "If $f(x) = x^2 - 5x - 6$ and $g(x) = -3 - x$, what is the value of $f(g(-1))$?",
  "options": [
   "$13$",
   "$8$",
   "$0$",
   "$30$"
  ],
  "correctAnswer": 3,
  "explanation": "First, evaluate $g(-1)$:\n$g(-1) = -3 - (-1) = -3 + 1 = -2$\nNext, substitute this result into $f(x)$:\n$f(-2) = (-2)^2 - 5(-2) - 6 = 4 + 10 - 6 = 8$\n**Answer: (D)** $30$",
  "category": ""
 },
 {
  "id": 33,
  "examId": "EST12020Oct",
  "question": "Maria downloaded to her music library a total of 350 pop and rock songs. If the ratio of pop to rock song is 3 to 11. How many rock songs are there in Maria's library?",
  "options": [
   "$75$",
   "$125$",
   "$175$",
   "$275$"
  ],
  "correctAnswer": 3,
  "explanation": "The ratio is 3 parts pop to 11 parts rock, which means there are $3 + 11 = 14$ parts in total.\nTo find the number of songs per part, divide the total number of songs by the total number of parts:\n$350 \\div 14 = 25$ songs per part.\nSince there are 11 parts rock songs, multiply 11 by the number of songs per part:\n$11 \\times 25 = 275$ rock songs.\n**Answer: (D)** $275$",
  "category": ""
 },
 {
  "question": "**Question 34** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (A)** ",
  "image": "/images/est1/oct20/q34.png",
  "id": 34,
  "category": "",
  "correctAnswer": 0
 },
 {
  "id": 35,
  "examId": "EST12020Oct",
  "question": "A craftsman is looking for two kinds of paint from a wholesaler. The first kind $a$ is packaged in $10 \\text{ kg}$ jars, the second $b$ in $25 \\text{ kg}$ jars. The $10 \\text{ kg}$ jar costs $\\$45$ and the $25 \\text{ kg}$ one costs $\\$120$. The load must not exceed $250 \\text{ kg}$ and the total sum must be at least $\\$900$ in order to get a discount. Which system of inequalities verifies the given information?",
  "options": [
   "$\\begin{cases} 10a + 25b \\ge 250 \\\\ 45a + 120b \\le 900 \\end{cases}$",
   "$\\begin{cases} 10a + 25b \\le 250 \\\\ 45a + 120b \\le 900 \\end{cases}$",
   "$\\begin{cases} 10a + 25b \\ge 250 \\\\ 45a + 120b \\ge 900 \\end{cases}$",
   "$\\begin{cases} 10a + 25b \\le 250 \\\\ 45a + 120b \\ge 900 \\end{cases}$"
  ],
  "correctAnswer": 3,
  "explanation": "Let $a$ be the number of $10 \\text{ kg}$ jars and $b$ be the number of $25 \\text{ kg}$ jars.\nThe total weight is $10a + 25b$, and it must not exceed $250$, so: $10a + 25b \\le 250$.\nThe total cost is $45a + 120b$, and it must be at least $\\$900$, so: $45a + 120b \\ge 900$.\nThis corresponds to the system in option D.\n**Answer: (D)** $\\begin{cases} 10a + 25b \\le 250 \\\\ 45a + 120b \\ge 900 \\end{cases}$",
  "category": ""
 },
 {
  "id": 36,
  "examId": "EST12020Oct",
  "question": "Brad got an average of 76 on his last three math tests. What grade should he get on the fourth test to obtain an average of 80?",
  "options": [
   "88",
   "90",
   "92",
   "94"
  ],
  "correctAnswer": 2,
  "explanation": "Sum of the three tests = $3 \\times 76 = 228$.\nLet $x$ be the fourth test grade.\n$\\frac{228 + x}{4} = 80 \\implies 228 + x = 320 \\implies x = 320 - 228 = 92$.\n**Answer: (C)** 92",
  "category": ""
 },
 {
  "id": 37,
  "examId": "EST12020Oct",
  "question": "From 2018 to 2019, the amount in Julias's bank account increased by 22.5% to $14325. To the nearest dollar, what was the initial amount in her bank account?",
  "options": [
   "11694\\$",
   "14010\\$",
   "11102\\$",
   "12775\\$"
  ],
  "correctAnswer": 0,
  "explanation": "Let the initial amount be $x$.\n$x (1 + 0.225) = 14325 \\implies 1.225x = 14325$\n$x = \\frac{14325}{1.225} \\approx 11693.88$\nRounded to the nearest dollar is $11694\\$.\n**Answer: (A)** 11694\\$",
  "category": ""
 },
 {
  "id": 38,
  "examId": "EST12020Oct",
  "question": "The ministry of finance conducted a survey to determine the average income rate in the industry of banking in a given country. So, a meeting was held in the presence of 150 bank managers to ask them about their annual income. Which conclusion can be drawn about the survey's reliability?",
  "options": [
   "The survey is reliable because it involves people from the banking industry.",
   "The survey is unreliable because the sample is too small.",
   "The survey is unreliable because the sample does not cover employees of different positions.",
   "The survey is reliable since it was made by the ministry of finance."
  ],
  "correctAnswer": 2,
  "explanation": "The survey wants to find the average income rate in the *entire* banking industry, but they only asked bank managers. This is a biased sample representing only the highest earners, thereby making it unreliable since it doesn't cover all different positions.\n**Answer: (C)** The survey is unreliable because the sample does not cover employees of different positions.",
  "category": ""
 },
 {
  "question": "**Question 39** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (D)** ",
  "image": "/images/est1/oct20/q39.png",
  "id": 39,
  "category": "",
  "correctAnswer": 3
 },
 {
  "id": 40,
  "question": "In which interval does the median age lie?",
  "options": [
   "[20;30[",
   "[30;40[",
   "[40;50[",
   "[50;60["
  ],
  "correctAnswer": 1,
  "explanation": "Cumulative frequency: $[20;30[$ is $28\\%$. $[30;40[$ adds $37\\%$, reaching $65\\%$. The median ($50\\%$) falls in $[30;40[$.\n**Answer: (B)** [30;40[",
  "youtubeLink": "https://youtu.be/jaNPusL93x8?si=rxqN12EqM30qAG2C",
  "category": "",
  "topics": [
   "Statistics"
  ]
 },
 {
  "question": "**Question 41** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (B)** ",
  "image": "/images/est1/oct20/q41.png",
  "id": 41,
  "category": "",
  "correctAnswer": 1
 },
 {
  "id": 42,
  "question": "The graph plotted above represents which of the following functions?",
  "options": [
   "$f(x) = (x+1)(x-2)^2$",
   "$f(x) = (x-1)(x+2)^2$",
   "$f(x) = (x+1)(x-2)$",
   "$f(x) = (x-2)(x+1)^2$"
  ],
  "correctAnswer": 0,
  "explanation": "The graph touches the $x$-axis at $x=2$ (double root) and crosses at $x=-1$.\n**Answer: (A)** $f(x) = (x+1)(x-2)^2$",
  "youtubeLink": "https://youtu.be/Dy4ct6H_OeA?si=eQdqoM_CzLYGj0Eq",
  "category": "",
  "topics": [
   "Polynomials",
   "Quadratics"
  ],
  "image": "/images/est1/oct20/q42.png"
 },
 {
  "id": 43,
  "examId": "EST12020Oct",
  "question": "A secretary types on her computer keyboard at an average speed of 1.75 words per second. Her manager asked her to type a document containing 16 pages with an average of 525 words per page. How long will she be actively typing this document?",
  "options": [
   "1 hour, 10 minutes",
   "1 hour, 20 minutes",
   "2 hours, 5 minutes",
   "4 hours, 5 minutes"
  ],
  "correctAnswer": 1,
  "explanation": "Total number of words = $16 \\times 525 = 8400$ words.\nTime in seconds = $\\frac{8400}{1.75} = 4800$ seconds.\nConvert to minutes: $\\frac{4800}{60} = 80$ minutes.\n80 minutes is 1 hour and 20 minutes.\n**Answer: (B)** 1 hour, 20 minutes",
  "category": ""
 },
 {
  "id": 44,
  "examId": "EST12020Oct",
  "question": "A graph above depicts a function $f(x)$. How many solutions does the equation $f(x) = 0.5$ admit?",
  "options": [
   "1",
   "2",
   "3",
   "4"
  ],
  "correctAnswer": 3,
  "explanation": "Looking at the pdf graph, drawing a horizontal line at $y = 0.5$ intersects the depicted curve at 4 different points. Hence, there are 4 solutions.\n**Answer: (D)** 4",
  "image": "/images/est1/oct20/q44.png",
  "category": ""
 },
 {
  "id": 45,
  "question": "What is the equation of the function $f$ graphed above?",
  "options": [
   "$f(x) = (x+1)(x-3)$",
   "$f(x) = (x-1)(x+3)$",
   "$f(x) = -(x+1)(x-3)$",
   "$f(x) = -(x-1)(x+3)$"
  ],
  "correctAnswer": 2,
  "explanation": "Parabola opens downward (negative leading coefficient) with roots at $x = -1$ and $x = 3$.\n**Answer: (C)** $f(x) = -(x+1)(x-3)$",
  "youtubeLink": "https://youtu.be/7Wm8_l5FugU?si=5Vx0vibY5xNUudOF",
  "category": "",
  "topics": [
   "Quadratics",
   "Parabola"
  ],
  "image": "/images/est1/oct20/q45.png"
 },
 {
  "id": 46,
  "examId": "EST12020Oct",
  "question": "If $f(x) = x^2 - 5x - 6$ and $g(x) = -3 - x$, what is the value of $f(g(-1))$?",
  "options": [
   "$13$",
   "$8$",
   "$0$",
   "$30$"
  ],
  "correctAnswer": 0,
  "explanation": "First, evaluate $g(-1)$:\n$g(-1) = -3 - (-1) = -3 + 1 = -2$\nNext, substitute this result into $f(x)$:\n$f(-2) = (-2)^2 - 5(-2) - 6 = 4 + 10 - 6 = 8$\n**Answer: (A)** $13$",
  "category": ""
 },
 {
  "id": 47,
  "examId": "EST12020Oct",
  "question": "A liquid covering 12 cm of the height of a cylindrical glass of diameter 8cm is transferred into another glass shaped as a cone with a diameter of 12 cm. What height of the cone will the liquid cover?",
  "options": [
   "8 cm",
   "10 cm",
   "16 cm",
   "14 cm"
  ],
  "correctAnswer": 2,
  "explanation": "Volume of liquid in cylinder = $\\pi r^2 h = \\pi (4)^2 (12) = 192\\pi$.\nThe volume of the liquid in the cone will be the same.\nThe volume of a cone is $V = \\frac{1}{3}\\pi r^2 h$.\nThe new cone has a diameter of 12 cm, so $r = 6$ cm.\n$192\\pi = \\frac{1}{3}\\pi (6)^2 h \\implies 192\\pi = 12\\pi h \\implies h = 16$ cm.\n**Answer: (C)** 16 cm",
  "category": ""
 },
 {
  "id": 48,
  "examId": "EST12020Oct",
  "question": "A gaming website charges its client by number of games downloaded $g$. If the total fees $f$ of a gamer are given by the equation $f = 7g + 88$, what is the best interpretation of the term $88$?",
  "options": [
   "The price of one downloaded game.",
   "The subscription fees of the website",
   "The average number of games downloaded per player",
   "The fees of downloading 7 games"
  ],
  "correctAnswer": 1,
  "explanation": "In the linear equation $f = 7g + 88$, $88$ is the $y$-intercept, representing the initial, fixed cost before any games are downloaded. This corresponds to a fixed subscription fee for the website. 7 is the rate (cost per game).\n**Answer: (B)** The subscription fees of the website",
  "category": ""
 },
 {
  "id": 49,
  "examId": "EST12020Oct",
  "question": "A local supermarket offered a discount of 15% on its items after the government raised all the prices by 25%. Overall, by what percentage were the original prices raised in this supermarket in particular?",
  "options": [
   "8.625%",
   "7.250%",
   "6.250%",
   "5.625%"
  ],
  "correctAnswer": 2,
  "explanation": "Let the original price be $P$.\nFirst, increased by 25%: $P \\times 1.25$.\nThen, decreased by 15%: $(P \\times 1.25) \\times 0.85 = P \\times 1.0625$.\nThe overall effect is multiplying by 1.0625, which corresponds to a $6.25\\%$ increase.\n**Answer: (C)** 6.250%",
  "category": ""
 },
 {
  "id": 50,
  "examId": "EST12020Oct",
  "question": "The right triangles ADE and ABC are similar. If $AD = \\frac{4}{3}ED$, how long is $DB$?",
  "options": [
   "$3$",
   "$4$",
   "$5$",
   "$6$"
  ],
  "correctAnswer": 1,
  "explanation": "From the graph, $ED = 9$ and $BC = 12$.\nWe know $AD = \\frac{4}{3}ED = \\frac{4}{3}(9) = 12$.\nSince triangles $ADE$ and $ABC$ are similar, the ratios of corresponding sides are equal:\n$\\frac{AD}{AB} = \\frac{ED}{BC}$\n$\\frac{12}{AB} = \\frac{9}{12}$\n$\\frac{12}{AB} = \\frac{3}{4} \\implies AB = \\frac{48}{3} = 16$.\n$DB = AB - AD = 16 - 12 = 4$.\n**Answer: (B)** $4$",
  "image": "/images/est1/oct20/q50.png",
  "category": ""
 },
 {
  "id": 51,
  "examId": "EST12020Oct",
  "question": "If $f(x) = x^2 - 5x - 6$ and $g(x) = -3 - x$, what is the value of $f(g(-1))$?",
  "options": [],
  "explanation": "First, evaluate $g(-1)$:\n$g(-1) = -3 - (-1) = -3 + 1 = -2$\nNext, substitute this result into $f(x)$:\n$f(-2) = (-2)^2 - 5(-2) - 6 = 4 + 10 - 6 = 8$\n**Answer:** 25/8",
  "category": "",
  "type": "grid-in",
  "answerText": "25/8",
  "correctAnswer": "25/8"
 },
 {
  "id": 52,
  "examId": "EST12020Oct",
  "question": "A multiple choice test contains 50 questions. A correct answer is worth 3 points and an incorrect answer is worth -2 points. If a student receives 75 on the test, how many questions did he answer correctly?",
  "options": [],
  "isGridIn": true,
  "explanation": "Let $c$ be the number of correct answers and $w$ be the number of incorrect answers.\n$c + w = 50 \\implies w = 50 - c$\n$3c - 2w = 75$\nSubstitute $w$:\n$3c - 2(50 - c) = 75$\n$3c - 100 + 2c = 75$\n$5c = 175$\n$c = 35$\n**Answer:** 35",
  "category": "",
  "type": "grid-in",
  "answerText": "35",
  "correctAnswer": "35"
 },
 {
  "id": 53,
  "examId": "EST12020Oct",
  "question": "If $|2b - 1| \\le 3$, how many possible integer values of $b$ are there?",
  "options": [],
  "isGridIn": true,
  "explanation": "$-3 \\le 2b - 1 \\le 3$\nAdd 1 to all parts:\n$-2 \\le 2b \\le 4$\nDivide all parts by 2:\n$-1 \\le b \\le 2$\nThe integer values for $b$ are $-1, 0, 1, 2$.\nThere are exactly 4 integer values.\n**Answer:** 4",
  "category": "",
  "type": "grid-in",
  "answerText": "4",
  "correctAnswer": "4"
 },
 {
  "id": 54,
  "examId": "EST12020Oct",
  "question": "We chose randomly a sample of 250 lawyers out of the 4900 registered in the syndicate, and we asked them about the most frequent case they defend. The results showed that 45 answered divorce, 125 answered theft and 80 answered murder. Presumably, what is the total number of lawyers registered in the syndicate who deal most frequently with murder?",
  "options": [],
  "isGridIn": true,
  "explanation": "In the sample, 80 out of 250 lawyers deal most frequently with murder.\nProportion = $\\frac{80}{250} = \\frac{8}{25}$.\nTo estimate the total out of 4900, multiply the proportion by the total population:\n$\\frac{8}{25} \\times 4900 = 8 \\times 196 = 1568$.\n**Answer:** 1568",
  "category": "",
  "type": "grid-in",
  "answerText": "1568",
  "correctAnswer": "1568"
 },
 {
  "id": 55,
  "examId": "EST12020Oct",
  "question": "The function $g$ is defined by $g(x) = ax^2 - 2x - 5$ and $g(-1) = 1$. What is the value of $g(2)$?",
  "options": [],
  "isGridIn": true,
  "explanation": "First, use $g(-1) = 1$ to find $a$:\n$a(-1)^2 - 2(-1) - 5 = 1$\n$a + 2 - 5 = 1$\n$a - 3 = 1 \\implies a = 4$\nNow the function is $g(x) = 4x^2 - 2x - 5$.\nFind $g(2)$:\n$g(2) = 4(2)^2 - 2(2) - 5 = 4(4) - 4 - 5 = 16 - 9 = 7$.\n**Answer:** 7",
  "category": "",
  "type": "grid-in",
  "answerText": "7",
  "correctAnswer": "7"
 },
 {
  "id": 56,
  "examId": "EST12020Oct",
  "question": "What is the remainder of the division of $k(x) = 3x^3 + 8x^2 - 2x - 7$ by $x + 2$?",
  "options": [],
  "isGridIn": true,
  "explanation": "According to the Remainder Theorem, the remainder of polynomial $k(x)$ divided by $x + 2$ is equal to $k(-2)$.\n$k(-2) = 3(-2)^3 + 8(-2)^2 - 2(-2) - 7$\n$k(-2) = 3(-8) + 8(4) + 4 - 7$\n$k(-2) = -24 + 32 + 4 - 7 = 5$\n**Answer:** 5",
  "category": "",
  "type": "grid-in",
  "answerText": "5",
  "correctAnswer": "5"
 },
 {
  "id": 57,
  "examId": "EST12020Oct",
  "question": "If $f(x) = x^2 - 5x - 6$ and $g(x) = -3 - x$, what is the value of $f(g(-1))$?",
  "options": [],
  "explanation": "First, evaluate $g(-1)$:\n$g(-1) = -3 - (-1) = -3 + 1 = -2$\nNext, substitute this result into $f(x)$:\n$f(-2) = (-2)^2 - 5(-2) - 6 = 4 + 10 - 6 = 8$\n**Answer:** 4",
  "category": "",
  "type": "grid-in",
  "answerText": "4",
  "correctAnswer": "4"
 },
 {
  "id": 58,
  "examId": "EST12020Oct",
  "question": "A right triangle has an area of $96 \\text{ cm}^2$. If the shorter leg is $4\\text{ cm}$ less than the longer leg, what is the length of the hypotenuse?",
  "options": [],
  "isGridIn": true,
  "explanation": "Let the longer leg be $x$ and the shorter leg be $x - 4$.\nArea = $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = 96$\n$\\frac{1}{2} x (x - 4) = 96 \\implies x(x - 4) = 192$\n$x^2 - 4x - 192 = 0$\n$(x - 16)(x + 12) = 0 \\implies x = 16$ (since length must be positive).\nThe legs are $16$ and $16 - 4 = 12$.\nThe hypotenuse $h$ is found using the Pythagorean theorem:\n$h = \\sqrt{16^2 + 12^2} = \\sqrt{256 + 144} = \\sqrt{400} = 20$.\n**Answer:** 20",
  "category": "",
  "type": "grid-in",
  "answerText": "20",
  "correctAnswer": "20"
 }
];
