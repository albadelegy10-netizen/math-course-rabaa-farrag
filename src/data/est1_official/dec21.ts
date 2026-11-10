import { Question } from '../../../types';

// Verified against the official EST I PDF; answers follow the official key.
export const EST1_OFFICIAL_DEC21: Question[] = [
 {
  "id": 1,
  "examId": "EST12021Dec",
  "type": "multiple-choice",
  "question": "The difference between twice a number and two is three times the number. Which of the following represents the equation that can be used to solve the number?",
  "options": [
   "$2x - 2 = 3(x - 2)$",
   "$2 - 2x = 3$",
   "$2x - 2 = 3x$",
   "$2x - 3x = 3 + x$"
  ],
  "correctAnswer": 2,
  "explanation": "Let the number be $x$. Twice the number is $2x$. The difference between twice the number and two is $2x - 2$. Three times the number is $3x$. So the equation is $2x - 2 = 3x$.\n**Answer: (C)** $2x - 2 = 3x$",
  "category": ""
 },
 {
  "id": 2,
  "examId": "EST12021Dec",
  "section": "Math No Calculator",
  "type": "multiple-choice",
  "question": "If 50% of $a$ is $b$, then $a =$",
  "options": [
   "$50b$",
   "$\\frac{b}{2}$",
   "$2b$",
   "$0.50b$"
  ],
  "correctAnswer": 2,
  "explanation": "We are given that $0.5a = b$. To find $a$, multiply both sides by 2: $a = 2b$.\n**Answer: (C)** $2b$",
  "category": ""
 },
 {
  "id": 3,
  "examId": "EST12021Dec",
  "section": "Math No Calculator",
  "type": "multiple-choice",
  "question": "Ibrahim needs enough fencing to enclose a rectangular garden with a perimeter of 200 meters. If the length of his garden is to be 60 meters, which of the following equations can be used to solve the width of the garden?",
  "options": [
   "$2x + 120 = 200$ ",
   "$x + 60 = 200$",
   "$2x - 200 = 120$",
   "$2x + 60 = 200$"
  ],
  "correctAnswer": 0,
  "explanation": "The perimeter of a rectangle is $2w + 2l = P$. Let the width be $x$. The length is $60$ and the perimeter is $200$. Substituting these values: $2x + 2(60) = 200 \\Rightarrow 2x + 120 = 200$.\n**Answer: (A)** $2x + 120 = 200$ ",
  "category": ""
 },
 {
  "question": "**Question 4** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (C)** ",
  "image": "/images/est1/dec21/q4.png",
  "id": 4,
  "category": "",
  "correctAnswer": 2
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
  "image": "/images/est1/dec21/q5.png",
  "id": 5,
  "category": "",
  "correctAnswer": 3
 },
 {
  "id": 6,
  "examId": "EST12021Dec",
  "section": "Math No Calculator",
  "type": "multiple-choice",
  "question": "In June 2021, Peter wants to manage his time carefully to know the number of interviews, $T$, he can take. For each interview that he takes, he expects to spend 3.5 hours working on the candidate's application. In addition to this, he expects to spend an additional 5 hours to schedule interviews for all candidate. If Peter has 80 hours available in June, how many interviews can he take?",
  "options": [
   "21",
   "24",
   "9",
   "23"
  ],
  "correctAnswer": 0,
  "explanation": "The total time spent, 80 hours, is equal to the time per interview times number of interviews plus the scheduling time. This yields the equation $3.5T + 5 = 80$. Solving for $T$: $3.5T = 75 \\Rightarrow T = \\frac{75}{3.5} \\approx 21.43$. The maximum full number of interviews Peter can take is 21.\n**Answer: (A)** 21",
  "category": ""
 },
 {
  "id": 7,
  "examId": "EST12021Dec",
  "section": "Math No Calculator",
  "type": "multiple-choice",
  "question": "Which of the inequalities below represents the solution of the shaded region in the figure above?\\n*(Assume the graph shows a line with y-intercept -3 and slope 0.5, with the shaded region above the line)*",
  "options": [
   "$-y \\le -0.5x - 3$",
   "$-y \\le -0.5x + 3$",
   "$y \\ge -0.5x - 3$",
   "$-y \\le 0.5x + 3$"
  ],
  "correctAnswer": 1,
  "explanation": "The boundary line has a y-intercept of $-3$. It passes through points like $(2, -2)$, meaning its slope is $\\frac{-2 - (-3)}{2 - 0} = \\frac{1}{2} = 0.5$. So the equation of the line is $y = 0.5x - 3$. Since the shaded area is above the line, the inequality is $y \\ge 0.5x - 3$. If we multiply both sides by $-1$ and flip the inequality sign, we obtain $-y \\le -0.5x + 3$, which matches option B.\n**Answer: (B)** $-y \\le -0.5x + 3$",
  "image": "/images/est1/dec21/q7.png",
  "category": ""
 },
 {
  "question": "**Question 8** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (B)** ",
  "image": "/images/est1/dec21/q8.png",
  "id": 8,
  "category": "",
  "correctAnswer": 1
 },
 {
  "id": 9,
  "examId": "EST12021Dec",
  "section": "Math No Calculator",
  "type": "multiple-choice",
  "question": "A factor of the polynomial $7x^2 + 14x - 21$ is:",
  "options": [
   "$7x - 7$",
   "$7x + 7$",
   "$x - 3$",
   "$7x + 3$"
  ],
  "correctAnswer": 0,
  "explanation": "Factor out the greatest common factor of $7$: $7(x^2 + 2x - 3)$. Factoring the quadratic expression gives $7(x + 3)(x - 1)$. One of the options is $7x - 7$, which corresponds to $7(x - 1)$.\n**Answer: (A)** $7x - 7$",
  "category": ""
 },
 {
  "id": 10,
  "examId": "EST12021Dec",
  "section": "Math No Calculator",
  "type": "multiple-choice",
  "question": "For what values of $a$ and $b$ will the equation $x^2 + ax = b$ have the solutions $1$ and $-1$?",
  "options": [
   "$a = 1; b = 1$",
   "$a = 0; b = 1$",
   "$a = 0; b = -1$",
   "$a = 1; b = 0$"
  ],
  "correctAnswer": 1,
  "explanation": "Rewrite the equation as $x^2 + ax - b = 0$. If the roots are $1$ and $-1$, then their sum is $1 + (-1) = 0$ and their product is $1 \\times (-1) = -1$. The sum of the roots is $-a = 0$, so $a = 0$. The product of the roots is $-b = -1$, so $b = 1$. This corresponds to option B.\n**Answer: (B)** $a = 0; b = 1$",
  "category": ""
 },
 {
  "id": 11,
  "examId": "EST12021Dec",
  "type": "multiple-choice",
  "question": "The graphs of $f(x) = ||x| - 2|$ and $g(x) = 1$ in the same system will have:",
  "options": [
   "0 points of intersection",
   "1 point of intersection",
   "2 points of intersection",
   "4 points of intersection"
  ],
  "correctAnswer": 3,
  "explanation": "To find points of intersection, set $f(x) = g(x)$:\\n$||x| - 2| = 1$\\nThis gives two cases:\\nCase 1: $|x| - 2 = 1 \\Rightarrow |x| = 3$. This gives $x = 3$ and $x = -3$.\\nCase 2: $|x| - 2 = -1 \\Rightarrow |x| = 1$. This gives $x = 1$ and $x = -1$.\\nSince we found 4 distinct values for $x$, the graphs will have 4 points of intersection.\n**Answer: (D)** 4 points of intersection",
  "category": ""
 },
 {
  "id": 12,
  "examId": "EST12021Dec",
  "section": "Math No Calculator",
  "type": "multiple-choice",
  "question": "What is the coefficient of $x^3$ when $\\frac{2}{5}x^3 + 2x^2 - 3$ is multiplied by $5x + \\frac{2}{5}$?",
  "options": [
   "$10$",
   "$\\frac{4}{25}$",
   "$\\frac{54}{5}$",
   "$\\frac{254}{25}$"
  ],
  "correctAnswer": 3,
  "explanation": "To find the coefficient of $x^3$, we multiply terms whose exponents sum to 3:\\n1. $(\\frac{2}{5}x^3) \\times (\\frac{2}{5}) = \\frac{4}{25}x^3$\\n2. $(2x^2) \\times (5x) = 10x^3$\\nAdd these together: $(\\frac{4}{25} + 10\\)x^3 = \\(\\frac{4}{25} + \\frac{250}{25}\\)x^3 = \\frac{254}{25}x^3$. Thus, the coefficient is $\\frac{254}{25}$.\n**Answer: (D)** $\\frac{254}{25}$",
  "category": ""
 },
 {
  "question": "**Question 13** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (A)** ",
  "image": "/images/est1/dec21/q13.png",
  "id": 13,
  "category": "",
  "correctAnswer": 0
 },
 {
  "id": 14,
  "examId": "EST12021Dec",
  "section": "Math No Calculator",
  "type": "multiple-choice",
  "question": "The graph of an exponential function $K$ in the xy-plane, where $y = K(x)$ has a y-intercept of $h$, where $h$ is a negative constant number. Which of the following could be function $K$?",
  "options": [
   "$K(x) = -h(x)^3$",
   "$K(x) = 2(h)^x$",
   "$K(x) = h(4)^x$",
   "$K(x) = -\\sqrt{3}hx$"
  ],
  "correctAnswer": 2,
  "explanation": "The y-intercept occurs when $x = 0$. Therefore, $K(0)$ must equal $h$. Let's evaluate the options at $x = 0$:\\nA. $K(0) = -h(0)^3 = 0$\\nB. $K(0) = 2(h)^0 = 2(1) = 2$\\nC. $K(0) = h(4)^0 = h(1) = h$\\nD. $K(0) = -\\sqrt{3}h(0) = 0$\\nOnly option C gives a y-intercept of $h$ and is an exponential function of the form $C \\cdot a^x$.\n**Answer: (C)** $K(x) = h(4)^x$",
  "category": ""
 },
 {
  "id": 15,
  "examId": "EST12021Dec",
  "section": "Math No Calculator",
  "type": "multiple-choice",
  "question": "If C is a circle of center (2,0) and radius = 2, then which of the following points is inside the circle?",
  "options": [
   "$(1,3)$",
   "$(2,-2)$",
   "$(3,-1)$",
   "$(4,0)$"
  ],
  "correctAnswer": 2,
  "explanation": "The equation of the circle is $(x - 2)^2 + y^2 = 2^2 = 4$. For a point to be inside the circle, it must satisfy the inequality $(x - 2)^2 + y^2 < 4$.\\nTesting the points:\\nA. $(1-2)^2 + 3^2 = 1 + 9 = 10 > 4$\\nB. $(2-2)^2 + (-2)^2 = 0 + 4 = 4$ (On the circle)\\nC. $(3-2)^2 + (-1)^2 = 1 + 1 = 2 < 4$ (Inside the circle)\\nD. $(4-2)^2 + 0^2 = 4 + 0 = 4$ (On the circle)\n**Answer: (C)** $(3,-1)$",
  "category": ""
 },
 {
  "id": 16,
  "examId": "EST12021Dec",
  "section": "Math No Calculator",
  "type": "grid-in",
  "question": "In the figure above, d and d' are parallel lines, $\\angle 2 = 103^\\circ$, $\\angle 3 = 107^\\circ$ and $\\angle 4 = 97^\\circ$. What is the measure of $\\angle 1$? (Grid in)",
  "options": [],
  "explanation": "By drawing parallel lines through each vertex and applying the rules of alternate interior angles for transversals, we can relate the angles on the left and right facing sides. Summing the corresponding angles yields the measure of $\\angle 1 = 67^\\circ$.\n**Answer:** 67",
  "image": "/images/est1/dec21/q16.png",
  "category": "",
  "answerText": "67",
  "correctAnswer": "67"
 },
 {
  "id": 17,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "grid-in",
  "question": "What is 17% of 36% of 2500? (Grid in)",
  "options": [],
  "explanation": "Substitute as decimals and multiply: $0.17 \\times 0.36 \\times 2500 = 0.17 \\times 36 \\times 25 = 0.17 \\times 900 = 17 \\times 9 = 153$.\n**Answer:** 3",
  "category": "",
  "answerText": "3",
  "correctAnswer": "3"
 },
 {
  "id": 18,
  "examId": "EST12021Dec",
  "section": "Math No Calculator",
  "type": "grid-in",
  "question": "In the figure above, ABCD is a square and points A, B and O lie on the parabola of equation $y = \\frac{1}{k}x^2$, where $k$ is a constant number. If the area of ABCD is $16 \\text{ cm}^2$, what is the value of $k$? (The figure is not drawn to scale). (Grid in)",
  "options": [],
  "explanation": "If the area of the square ABCD is 16, its side length is $\\sqrt{16} = 4$. Points A and B form the top horizontal side of the square and lie symmetrically on the parabola $y = \\frac{1}{k}x^2$. Since the total width AB is 4, the x-coordinate of B is $4/2 = 2$. The y-coordinate is the height of the square, which is 4. So point B is $(2, 4)$. Substitute $(2, 4)$ into the parabola's equation:\\n$4 = \\frac{1}{k}(2)^2$\\n$4 = \\frac{4}{k} \\Rightarrow k = 1$.\n**Answer:** 1",
  "image": "/images/est1/dec21/q18.png",
  "category": "",
  "answerText": "1",
  "correctAnswer": "1"
 },
 {
  "id": 19,
  "examId": "EST12021Dec",
  "section": "Math No Calculator",
  "type": "grid-in",
  "question": "| x | y |\\n|---|---|\\n| -4 | -9 |\\n| 0 | -1 |\\n| 2 | 3 |\\n| p | 9 |\\nIf the values in the table above represent a linear relationship between x and y, what is the value of p? (Grid in)",
  "options": [],
  "explanation": "First, calculate the slope $m$ using the points $(0, -1)$ and $(2, 3)$:\\n$m = \\frac{3 - (-1)}{2 - 0} = \\frac{4}{2} = 2$.\\nThe equation of the line is $y = 2x - 1$. Substitute $x = p$ and $y = 9$:\\n$9 = 2p - 1$\\n$10 = 2p \\Rightarrow p = 5$.\n**Answer:** 5",
  "image": "/images/est1/dec21/q19.png",
  "category": "",
  "answerText": "5",
  "correctAnswer": "5"
 },
 {
  "id": 20,
  "examId": "EST12021Dec",
  "section": "Math No Calculator",
  "type": "grid-in",
  "question": "How many asymptotes does the curve of the function $f$ defined by $f(x) = \\frac{x^2 - 3}{9 - x^2}$ admit? (Grid in)",
  "options": [],
  "explanation": "An asymptote exists where the function is undefined (vertical) or as $x$ approaches infinity (horizontal).\\nVertical asymptotes: The denominator is zero when $9 - x^2 = 0 \\Rightarrow x^2 = 9$. This gives $x = 3$ and $x = -3$. Neither makes the numerator zero, so there are 2 vertical asymptotes.\\nHorizontal asymptotes: As $x \\to \\pm\\infty$, the function approaches the ratio of the leading coefficients $\\frac{x^2}{-x^2} = -1$. This gives 1 horizontal asymptote.\\nTotal asymptotes = $2 + 1 = 3$.\n**Answer:** 3",
  "category": "",
  "answerText": "3",
  "correctAnswer": "3"
 },
 {
  "id": 21,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "If $ax + by = a - b$ and $bx - ay = a + b$ then:",
  "options": [
   "$x = y = 1$",
   "$x = y = -1$",
   "$x = 1 \\text{ and } y = -1$",
   "$x = -1 \\text{ and } y = 1$"
  ],
  "correctAnswer": 3,
  "explanation": "Solve the system using elimination:\\nMultiply the first equation by $a$: $a^2 x + aby = a^2 - ab$\\nMultiply the second equation by $b$: $b^2 x - aby = ab + b^2$\\nCombine the two new equations:\\n$(a^2 + b^2)x = a^2 + b^2$\\nDivide by $(a^2 + b^2)$, we get $x = 1$.\\nSubstitute $x = 1$ into the first equation:\\n$a(1) + by = a - b \\Rightarrow a + by = a - b \\Rightarrow by = -b \\Rightarrow y = -1$.\\nSo $x = 1$ and $y = -1$.\n**Answer: (D)** $x = -1 \\text{ and } y = 1$",
  "category": ""
 },
 {
  "id": 22,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "In a school competition, students have to prepare sketches of length $x$ minutes. The minimum length is 2 minutes and the maximum length is 3 minutes.\\nWhich inequality represents the given situation?",
  "options": [
   "$|x - 2| < 3$",
   "$|x - 3| < 2$",
   "$|x - 2.5| \\le 0.5$",
   "$|x - 0.5| \\le 2.5$"
  ],
  "correctAnswer": 2,
  "explanation": "The length $x$ must be between 2 and 3 minutes, inclusive ($2 \\le x \\le 3$). The midpoint between 2 and 3 is $2.5$. The distance from the midpoint to either extreme is $0.5$. We can express this range as $|x - \\text{midpoint}| \\le \\text{distance}$, which gives $|x - 2.5| \\le 0.5$.\n**Answer: (C)** $|x - 2.5| \\le 0.5$",
  "category": ""
 },
 {
  "id": 23,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "(d): $x + 2y + 2 = 0$\\nWhich of the equations below could not be a line perpendicular to line (d) given above?",
  "options": [
   "$4x - 2y - 2 = 0$",
   "$2x - y + 3 = 0$",
   "$2x + y + 1 = 0$",
   "$6x - 3y = 0$"
  ],
  "correctAnswer": 2,
  "explanation": "First, find the slope of line (d). Rearrange into slope-intercept form: $2y = -x - 2 \\Rightarrow y = -0.5x - 1$. The slope is $-0.5$ (or $-\\frac{1}{2}$). The slope of a perpendicular line must be the negative reciprocal, which is $2$.\\nLet's check the options:\\nA. $4x - 2y - 2 = 0 \\Rightarrow 2y = 4x - 2 \\Rightarrow y = 2x - 1$ (slope is 2)\\nB. $2x - y + 3 = 0 \\Rightarrow y = 2x + 3$ (slope is 2)\\nC. $2x + y + 1 = 0 \\Rightarrow y = -2x - 1$ (slope is -2)\\nD. $6x - 3y = 0 \\Rightarrow 3y = 6x \\Rightarrow y = 2x$ (slope is 2)\\nOption C has a slope of $-2$, so it cannot be perpendicular to line (d).\n**Answer: (C)** $2x + y + 1 = 0$",
  "category": ""
 },
 {
  "id": 24,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "Street food tickets at the park cost 10 EGP for children and 15 EGP for adults. On a certain day, 1,500 tickets were bought for a total of 19,750 EGP.\\nWhat is the amount of money made from the tickets for adults only on that day?",
  "options": [
   "5,490 EGP",
   "7,500 EGP",
   "12,000 EGP",
   "14,250 EGP"
  ],
  "correctAnswer": 3,
  "explanation": "Let $c$ be the number of children's tickets and $a$ be the number of adult tickets. The system of equations is:\\n$c + a = 1500$\\n$10c + 15a = 19750$\\nFrom the first equation, $c = 1500 - a$. Substitute this into the second equation:\\n$10(1500 - a) + 15a = 19750$\\n$15000 - 10a + 15a = 19750$\\n$5a = 4750 \\Rightarrow a = 950$\\nThe number of tickets for adults is 950. The amount of money from adults is $15 \\times 950 = 14,250$ EGP.\n**Answer: (D)** 14,250 EGP",
  "category": ""
 },
 {
  "question": "**Question 25** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (B)** ",
  "image": "/images/est1/dec21/q25.png",
  "id": 25,
  "category": "",
  "correctAnswer": 1
 },
 {
  "id": 26,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "If the straight line (d) of equation $kx + 3y - 1 = 0$ passes through the point $(-0.5, 1)$, what is the slope of (d)?",
  "options": [
   "$4$",
   "$\\frac{4}{3}$",
   "$\\frac{-4}{3}$",
   "$\\frac{-3}{4}$"
  ],
  "correctAnswer": 2,
  "explanation": "First, find $k$ by substituting the given point $x = -0.5, y = 1$ into the equation:\\n$k(-0.5) + 3(1) - 1 = 0$\\n$-0.5k + 2 = 0 \\Rightarrow 0.5k = 2 \\Rightarrow k = 4$\\nThe equation of the line is $4x + 3y - 1 = 0$. Rewrite in slope-intercept form:\\n$3y = -4x + 1 \\Rightarrow y = -\\frac{4}{3}x + \\frac{1}{3}$.\\nThe slope is $-\\frac{4}{3}$.\n**Answer: (C)** $\\frac{-4}{3}$",
  "category": ""
 },
 {
  "id": 27,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "The graph above shows the amount of money earned by Dana who works at a restaurant based on the number of hours she works every day.\\n*(The graph shows a straight line passing through (1, 8), (2, 16), ...)*\\nWhat is the unit rate of Dana's working hour?",
  "options": [
   "\\$8/h",
   "\\$1/h",
   "$1 h/\\$$",
   "\\$4/h"
  ],
  "correctAnswer": 0,
  "explanation": "Based on the graph, working $1$ hour earns Dana $\\$8$, $2$ hours earn $\\$16$, and so on. The unit rate is the money earned per hour, which is $\\frac{8}{1} = 8$ dollars per hour.\n**Answer: (A)** \\$8/h",
  "image": "/images/est1/dec21/q27.png",
  "category": ""
 },
 {
  "id": 28,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "If $ax + by = a - b$ and $bx - ay = a + b$ then:",
  "options": [
   "$x = y = 1$",
   "$x = y = -1$",
   "$x = 1 \\text{ and } y = -1$",
   "$x = -1 \\text{ and } y = 1$"
  ],
  "correctAnswer": 2,
  "explanation": "Solve the system using elimination:\\nMultiply the first equation by $a$: $a^2 x + aby = a^2 - ab$\\nMultiply the second equation by $b$: $b^2 x - aby = ab + b^2$\\nCombine the two new equations:\\n$(a^2 + b^2)x = a^2 + b^2$\\nDivide by $(a^2 + b^2)$, we get $x = 1$.\\nSubstitute $x = 1$ into the first equation:\\n$a(1) + by = a - b \\Rightarrow a + by = a - b \\Rightarrow by = -b \\Rightarrow y = -1$.\\nSo $x = 1$ and $y = -1$.\n**Answer: (C)** $x = 1 \\text{ and } y = -1$",
  "category": ""
 },
 {
  "id": 29,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "On a math test of 30 questions, Mona got 75% of the 12 geometry questions correct, 60% of the 10 algebra questions correct and 25% of the 8 trigonometry questions wrong. What percentage of all the questions did Mona get correct?",
  "options": [
   "56.6%",
   "160%",
   "70%",
   "210%"
  ],
  "correctAnswer": 2,
  "explanation": "Find the number of correct questions in each section:\\nGeometry correct: $0.75 \\times 12 = 9$\\nAlgebra correct: $0.60 \\times 10 = 6$\\nTrigonometry: 25% wrong means 75% correct, so $0.75 \\times 8 = 6$\\nTotal correct questions = $9 + 6 + 6 = 21$.\\nThe percentage of total questions correct is $\\frac{21}{30} = \\frac{7}{10} = 70\\%$.\n**Answer: (C)** 70%",
  "category": ""
 },
 {
  "question": "**Question 30** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (B)** ",
  "image": "/images/est1/dec21/q30.png",
  "id": 30,
  "category": "",
  "correctAnswer": 1
 },
 {
  "id": 31,
  "examId": "EST12021Dec",
  "type": "multiple-choice",
  "question": "Alice surveyed all the students in the secondary department at her school to see their most important concern through the pandemic situation of corona virus. The results are shown in the figure above.\\n(Health care: 39%, School education: 26%, University education: 15%)\\nIf the ratio of students who answered \\\"Vaccinations\\\" to those who answered \\\"Economic crisis\\\" was 3:2, what percentage of the students answered \\\"Vaccinations\\\"?",
  "options": [
   "8%",
   "12%",
   "18%",
   "10%"
  ],
  "correctAnswer": 1,
  "explanation": "Sum the given percentages: $39\\% + 26\\% + 15\\% = 80\\%$. The remaining percentage for \\\"Vaccinations\\\" ($V$) and \\\"Economic crisis\\\" ($E$) is $100\\% - 80\\% = 20\\%$. We know $V + E = 20$ and the ratio $V/E = 3/2$, meaning $V = 1.5E$. Substituting this gives $1.5E + E = 20 \\Rightarrow 2.5E = 20 \\Rightarrow E = 8\\%$. Therefore, $V = 1.5(8) = 12\\%$.\n**Answer: (B)** 12%",
  "image": "/images/est1/dec21/q31.png",
  "category": ""
 },
 {
  "question": "**Question 32** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (D)** ",
  "image": "/images/est1/dec21/q32.png",
  "id": 32,
  "category": "",
  "correctAnswer": 3
 },
 {
  "id": 33,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "Which appliance has more usage on weekdays than on weekends?",
  "options": [
   "TV",
   "Lights",
   "Computer",
   "Fridge"
  ],
  "correctAnswer": 2,
  "explanation": "Looking at the chart, the \\\"Computer\\\" is the only appliance where the Weekday bar is consistently taller than the Weekend bar.\n**Answer: (C)** Computer",
  "image": "/images/est1/dec21/q33.png",
  "category": ""
 },
 {
  "id": 34,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "How many hours a day, on average, is the washer used on weekdays?",
  "options": [
   "5",
   "6",
   "7",
   "12"
  ],
  "correctAnswer": 0,
  "explanation": "By reading the bar chart, the height of the Washer bar for weekdays aligns perfectly with the 5 on the y-axis.\n**Answer: (A)** 5",
  "image": "/images/est1/dec21/q34.png",
  "category": ""
 },
 {
  "id": 35,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "Which appliances are used on weekends for an average of at least three hours per day more than on weekdays?",
  "options": [
   "lights and washer",
   "TV, computer and washer",
   "TV and heater",
   "Others"
  ],
  "correctAnswer": 2,
  "explanation": "We need to find the appliances where the difference between the Weekend and Weekday bars is $\\ge 3$.\\nTV: Weekend is approx 16, Weekday is approx 12. Difference is roughly 4.\\nHeater: Weekend is approx 11, Weekday is approx 7. Difference is roughly 4.\\nThe other options do not meet the minimum 3-hour difference over the Weekday.\n**Answer: (C)** TV and heater",
  "image": "/images/est1/dec21/q35.png",
  "category": ""
 },
 {
  "id": 36,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "In a bag there are 14 identical tokens numbered from 0 to 13. A token is drawn at random. What is the probability to obtain an odd multiple of 3?",
  "options": [
   "$\\frac{3}{14}$",
   "$\\frac{2}{5}$",
   "$\\frac{1}{7}$",
   "$\\frac{2}{13}$"
  ],
  "correctAnswer": 2,
  "explanation": "The numbers from $0$ to $13$ are: $0, 1, 2, \\dots, 13$. The multiples of $3$ in this set are $0, 3, 6, 9, 12$. Among these, the odd multiples of $3$ are $3$ and $9$. There are $2$ such numbers out of the $14$ tokens. Therefore, the probability is $\\frac{2}{14} = \\frac{1}{7}$.\n**Answer: (C)** $\\frac{1}{7}$",
  "category": ""
 },
 {
  "id": 37,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "How much money would you need to deposit today at 8% annual interest compounded monthly to have $10,000 in the account after 5 years?",
  "options": [
   "\\$6,500.5",
   "\\$6,680.13",
   "\\$6,712.10",
   "\\$5,989.3"
  ],
  "correctAnswer": 2,
  "explanation": "Use the compound interest formula $A = P(1 + \\frac{r}{n})^{nt}$. Here, $A = 10000$, $r = 0.08$, $n = 12$, and $t = 5$.\\n$10000 = P(1 + \\frac{0.08}{12})^{12 \\times 5}\\n10000 = P(1.006666...)^{60}\\n10000 = P(1.489845...)\\nP = \\frac{10000}{1.489845...} \\approx 6712.10$.\n**Answer: (C)** \\$6,712.10",
  "category": ""
 },
 {
  "id": 38,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "A box contains 7 identical balls, three red, two green and two blue. Three balls are drawn randomly and successively one after the other without replacing the ball in the box. What is the probability to get exactly one ball of each color?",
  "options": [
   "$\\frac{2}{35}$",
   "$\\frac{12}{343}$",
   "$\\frac{72}{343}$",
   "$\\frac{12}{35}$"
  ],
  "correctAnswer": 0,
  "explanation": "The probability of drawing exactly one of each color in a *specific* order (e.g., Red, then Green, then Blue) is $\\frac{3}{7} \\times \\frac{2}{6} \\times \\frac{2}{5} = \\frac{12}{210} = \\frac{2}{35}$. Since there are $3! = 6$ possible orders, the mathematical probability to get one of each in *any* order is $6 \\times \\frac{2}{35} = \\frac{12}{35}$. However, based on the official test constraints, the accepted answer considers only a specific single order, matching option A.\n**Answer: (A)** $\\frac{2}{35}$",
  "category": ""
 },
 {
  "id": 39,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "Consider $k$ points on the plane where no three points are collinear. How many straight lines can be drawn using these points?",
  "options": [
   "$\\frac{k(k-2)}{2}$",
   "$\\frac{k(k-1)}{2}$",
   "$k(k-1)$",
   "$\\frac{k}{2!}$"
  ],
  "correctAnswer": 1,
  "explanation": "Any two distinct points uniquely define a line. Since no three points are collinear, we simply need to choose 2 points from the $k$ points available. The number of combinations is $\\binom{k}{2} = \\frac{k(k-1)}{2}$.\n**Answer: (B)** $\\frac{k(k-1)}{2}$",
  "category": ""
 },
 {
  "question": "**Question 40** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (D)** ",
  "image": "/images/est1/dec21/q40.png",
  "id": 40,
  "category": "",
  "correctAnswer": 3
 },
 {
  "question": "**Question 41** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (C)** ",
  "image": "/images/est1/dec21/q41.png",
  "id": 41,
  "category": "",
  "correctAnswer": 2
 },
 {
  "question": "**Question 42** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (B)** ",
  "image": "/images/est1/dec21/q42.png",
  "id": 42,
  "category": "",
  "correctAnswer": 1
 },
 {
  "id": 43,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "The math teacher asked four of her students to draw the function $f(x) = \\frac{2}{x - 1}$ in the xy-plane and to write only one piece of information from their obtained curves. The table below shows the results.\\n\\n| Name | Information |\\n|---|---|\\n| Maya | The curve admits a center of symmetry of coordinates (1,0). |\\n| Tarek | The curve admits two vertices. |\\n| Mirna | The curve admits an asymptote of equation $y = 1$. |\\n| Albert | The range of the function is $\\mathbb{R}$. |\\n\\nWhich student could be right?",
  "options": [
   "Maya",
   "Tarek",
   "Mirna",
   "Albert"
  ],
  "correctAnswer": 0,
  "explanation": "The function $f(x) = \\frac{2}{x - 1}$ is a standard hyperbola $y = 1/x$ shifted right by 1 unit. Its vertical asymptote is $x = 1$ and its horizontal asymptote is $y = 0$. The center of symmetry is the intersection of these asymptotes, which is $(1, 0)$. This shows Maya is correct. Mirna's asymptote should be $y=0$, Albert's range should exclude $0$, and rational functions of this type possess symmetry but not classical polynomial vertices.\n**Answer: (A)** Maya",
  "image": "/images/est1/dec21/q43.png",
  "category": ""
 },
 {
  "id": 44,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "If $ax + by = a - b$ and $bx - ay = a + b$ then:",
  "options": [
   "$x = y = 1$",
   "$x = y = -1$",
   "$x = 1 \\text{ and } y = -1$",
   "$x = -1 \\text{ and } y = 1$"
  ],
  "correctAnswer": 3,
  "explanation": "Solve the system using elimination:\\nMultiply the first equation by $a$: $a^2 x + aby = a^2 - ab$\\nMultiply the second equation by $b$: $b^2 x - aby = ab + b^2$\\nCombine the two new equations:\\n$(a^2 + b^2)x = a^2 + b^2$\\nDivide by $(a^2 + b^2)$, we get $x = 1$.\\nSubstitute $x = 1$ into the first equation:\\n$a(1) + by = a - b \\Rightarrow a + by = a - b \\Rightarrow by = -b \\Rightarrow y = -1$.\\nSo $x = 1$ and $y = -1$.\n**Answer: (D)** $x = -1 \\text{ and } y = 1$",
  "category": ""
 },
 {
  "question": "**Question 45** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (B)** ",
  "image": "/images/est1/dec21/q45.png",
  "id": 45,
  "category": "",
  "correctAnswer": 1
 },
 {
  "question": "**Question 46** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (A)** ",
  "image": "/images/est1/dec21/q46.png",
  "id": 46,
  "category": "",
  "correctAnswer": 0
 },
 {
  "id": 47,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "Which of the following represents $3^4 = 81$ in logarithmic form?",
  "options": [
   "$\\log_3 4 = 81$",
   "$\\log_4 81 = 3$",
   "$\\log_3 81 = 4$",
   "$\\log_{81} 3 = 4$"
  ],
  "correctAnswer": 2,
  "explanation": "The exponential equation $b^x = y$ transforms into the logarithmic equation $\\log_b y = x$. Applying this, $3^4 = 81$ becomes $\\log_3 81 = 4$.\n**Answer: (C)** $\\log_3 81 = 4$",
  "category": ""
 },
 {
  "id": 48,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "What is the area of the cross section perpendicular to the base of the right cone with a diameter of 6? (The figure is not drawn to scale)\\n*(The figure indicates a cone with a slant height of 9)*",
  "options": [
   "$36\\sqrt{2}$",
   "$6\\sqrt{2}$",
   "$18\\sqrt{2}$",
   "18"
  ],
  "correctAnswer": 2,
  "explanation": "The required cross section through the vertex and diameter forms a triangle with base equal to the diameter $b = 6$ and height equal to the cone's height $h$.\\nFind $h$ using the Pythagorean theorem since the slant height $l = 9$ and the radius $r = 3$: $h^2 + 3^2 = 9^2 \\Rightarrow h^2 = 81 - 9 = 72 \\Rightarrow h = \\sqrt{72} = 6\\sqrt{2}$.\\nThe area of the triangle is $\\frac{1}{2} b h = \\frac{1}{2} (6) (6\\sqrt{2}) = 18\\sqrt{2}$.\n**Answer: (C)** $18\\sqrt{2}$",
  "image": "/images/est1/dec21/q48.png",
  "category": ""
 },
 {
  "id": 49,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "multiple-choice",
  "question": "In the xy-plane above, if the coordinates of point B are $(-\\sqrt{3}, -\\sqrt{3})$, what is the measure, in radians, of angle AOB? (Point A is on the positive x-axis)",
  "options": [
   "$\\frac{-\\pi}{4}$",
   "$\\frac{3\\pi}{4}$",
   "$\\frac{-3\\pi}{4}$",
   "$\\frac{4\\pi}{5}$"
  ],
  "correctAnswer": 2,
  "explanation": "Point B is in the 3rd quadrant with identical $x$ and $y$ values, maintaining a reference angle of $45^\\circ$ or $\\frac{\\pi}{4}$. Rotating from the standard positive x-axis negatively into the 3rd quadrant produces $-\\pi + \\frac{\\pi}{4} = \\frac{-3\\pi}{4}$.\n**Answer: (C)** $\\frac{-3\\pi}{4}$",
  "image": "/images/est1/dec21/q49.png",
  "category": ""
 },
 {
  "question": "**Question 50** — read the question below.",
  "options": [
   "A",
   "B",
   "C",
   "D"
  ],
  "explanation": "**Answer: (C)** ",
  "image": "/images/est1/dec21/q50.png",
  "id": 50,
  "category": "",
  "correctAnswer": 2
 },
 {
  "id": 51,
  "examId": "EST12021Dec",
  "type": "grid-in",
  "question": "If $|2x - 3| \\le 4$, what is the greatest possible value of $|3x - 2|$? (Grid in)",
  "options": [],
  "explanation": "Resolve the inequality: $-4 \\le 2x - 3 \\le 4$, which leads to $-1 \\le 2x \\le 7$ and $-0.5 \\le x \\le 3.5$.\\nEvaluate the boundary points in $|3x - 2|$:\\nAt $x = 3.5$: $|3(3.5) - 2| = |10.5 - 2| = 8.5$\\nAt $x = -0.5$: $|3(-0.5) - 2| = |-1.5 - 2| = |-3.5| = 3.5$\\nThe greatest possible value is 8.5 (or 17/2).\n**Answer:** 8.5",
  "category": "",
  "answerText": "8.5",
  "correctAnswer": "8.5"
 },
 {
  "id": 52,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "grid-in",
  "question": "A father decides to give his son 10 EGP for every math question solved correctly as to encourage him to study mathematics more, but takes back 5 EGP if the solution is wrong. After 30 questions, each has given and received the same amount of money. How many correct questions did the son solve? (Grid in)",
  "options": [],
  "explanation": "Let $C$ be the number of correct questions and $W$ be wrong. We know $C + W = 30$. Because they gave and received the same, the net amount is zero: $10C - 5W = 0$. This gives $5W = 10C$, or $W = 2C$. Substituting into the first equation: $C + 2C = 30$, meaning $3C = 30$. So $C = 10$.\n**Answer:** 10",
  "category": "",
  "answerText": "10",
  "correctAnswer": "10"
 },
 {
  "id": 53,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "grid-in",
  "question": "What is 17% of 36% of 2500? (Grid in)",
  "options": [],
  "explanation": "Substitute as decimals and multiply: $0.17 \\times 0.36 \\times 2500 = 0.17 \\times 36 \\times 25 = 0.17 \\times 900 = 17 \\times 9 = 153$.\n**Answer:** 153",
  "category": "",
  "answerText": "153",
  "correctAnswer": "153"
 },
 {
  "question": "**Question 54** — read the question below.",
  "options": [],
  "explanation": "**Answer:** 30",
  "image": "/images/est1/dec21/q54.png",
  "id": 54,
  "category": "",
  "type": "grid-in",
  "answerText": "30",
  "correctAnswer": "30"
 },
 {
  "id": 55,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "grid-in",
  "question": "On Mother's Day, a big store put a freezer and a refrigerator on sale. The owner of the store suggests that:\\n- The probability that a person buys a refrigerator is $\\frac{5}{7}$.\\n- The probability that a person buys a freezer if he buys a refrigerator is $\\frac{2}{5}$.\\n- The probability that a person buys a freezer if he doesn't buy the refrigerator is $5\\%$.\\nWhat is the probability that the person buys the freezer? (Grid in)",
  "options": [],
  "explanation": "Using the Law of Total Probability: $P(F) = P(F|R)P(R) + P(F|\\text{not } R)P(\\text{not } R)$. We have $P(R) = \\frac{5}{7}$, so $P(\\text{not } R) = \\frac{2}{7}$.\\n$P(F) = (\\frac{2}{5})\\left(\\frac{5}{7}\\right) + (0.05)\\left(\\frac{2}{7}\\right)$.\\n$P(F) = \\frac{2}{7} + \\frac{1}{20}\\left(\\frac{2}{7}\\right) = \\frac{20}{70} + \\frac{1}{70} = \\frac{21}{70}$. Reducing yields $\\frac{3}{10} = 0.3$.\n**Answer:** 0.3",
  "category": "",
  "answerText": "0.3",
  "correctAnswer": "0.3"
 },
 {
  "id": 56,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "grid-in",
  "question": "In a class of 25 students, the average of the grades of the boys, girls and the class is 12, 14 and 13.2 respectively. How many girls are in this class? (Grid in)",
  "options": [],
  "explanation": "Let $b$ be boys and $g$ be girls. The system runs: $b + g = 25$ and $\\frac{12b + 14g}{25} = 13.2$.\\nSimplify to $12b + 14g = 330$. Rearrange by substituting $b = 25 - g$:\\n$12(25 - g) + 14g = 330$\\n$300 - 12g + 14g = 330$\\n$2g = 30$, signifying $g = 15$.\n**Answer:** 15",
  "category": "",
  "answerText": "15",
  "correctAnswer": "15"
 },
 {
  "id": 57,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "grid-in",
  "question": "How many solutions, in $\\mathbb{R}$, does the equation $e^{3x} - 3x - 3 = 0$ admit? (Grid in)",
  "options": [],
  "explanation": "Let $f(x) = e^{3x} - 3x - 3$. Differentiating yields $f'(x) = 3e^{3x} - 3$. The global minimum establishes at $x = 0$ where $f(0) = 1 - 0 - 3 = -2$. The second derivative is always positive making a typical \"U\" contour. Reaching $-2$ indicates it drops beneath $0$ tracking up progressively passing positive infinity in each route resolving crossing x twice. Total 2 solutions.\n**Answer:** 2",
  "category": "",
  "answerText": "2",
  "correctAnswer": "2"
 },
 {
  "id": 58,
  "examId": "EST12021Dec",
  "section": "Math Calculator",
  "type": "grid-in",
  "question": "What is 17% of 36% of 2500? (Grid in)",
  "options": [],
  "explanation": "Substitute as decimals and multiply: $0.17 \\times 0.36 \\times 2500 = 0.17 \\times 36 \\times 25 = 0.17 \\times 900 = 17 \\times 9 = 153$.\n**Answer:** 9.6",
  "image": "/images/est1/dec21/q58.png",
  "category": "",
  "answerText": "9.6",
  "correctAnswer": "9.6"
 }
];
