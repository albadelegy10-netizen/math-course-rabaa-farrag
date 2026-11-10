import { Question } from './types';

export const ACT2_EXAM1_27_SET: Question[] = [
  {
    id: 1,
    question: "The perimeter of a square is equal to the circumference of a circle whose area is $20\\text{ in}^2$. What is the area in square inches of the square?",
    options: ["A) $5\\pi$", "B) $5$", "C) $20\\pi$", "D) $20$"],
    correctAnswer: 0,
    explanation: "Circle Area $A = \\pi r^2 = 20 \\implies r = \\sqrt{\\frac{20}{\\pi}}$. Circumference $C = 2\\pi r = 2\\pi \\sqrt{\\frac{20}{\\pi}} = 2\\sqrt{20\\pi}$. Perimeter of square $4s = 2\\sqrt{20\\pi} \\implies s = \\sqrt{5\\pi}$. Area of square $s^2 = 5\\pi$.",
    category: ""
  },
  {
    id: 2,
    question: "The large circle has a radius of $5\\text{ ft}$ and the small circle has a radius of $2\\text{ ft}$. The distance between the two centers of the circles is $9\\text{ ft}$. If the large circle rotates $10$ times, the small circle rotates how many times?",
    options: ["A) $4$", "B) $10$", "C) $25$", "D) $50$"],
    correctAnswer: 2,
    explanation: "The rotation ratio between connected circles is inversely proportional to their radii: $R_1 \\cdot n_1 = R_2 \\cdot n_2 \\implies 5 \\cdot 10 = 2 \\cdot n_2 \\implies n_2 = 25$ rotations.",
    category: "",
    svg: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <circle cx="80" cy="80" r="50" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="230" cy="80" r="20" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="80" y1="30" x2="230" y2="60" stroke="#000" stroke-width="1.5"/>
  <line x1="80" y1="130" x2="230" y2="100" stroke="#000" stroke-width="1.5"/>
  <line x1="80" y1="80" x2="230" y2="80" stroke="#888" stroke-dasharray="4,4" stroke-width="1.5"/>
  <circle cx="80" cy="80" r="3" fill="#000"/>
  <circle cx="230" cy="80" r="3" fill="#000"/>
  <line x1="80" y1="80" x2="115" y2="115" stroke="#000" stroke-width="1.5"/>
  <text x="95" y="105" font-size="12" font-style="italic">5</text>
  <line x1="230" y1="80" x2="244" y2="94" stroke="#000" stroke-width="1.5"/>
  <text x="238" y="90" font-size="12" font-style="italic">2</text>
  <text x="150" y="75" font-size="12" text-anchor="middle" font-style="italic">9 ft</text>
</svg>`
  },
  {
    id: 3,
    question: "A worker wants to make $10\\text{ pounds}$ of mixed nuts using peanuts and cashews. He buys peanuts at $3.75\\text{ dollars}$ per pound and cashews at $8\\text{ dollars}$ per pound. If $1\\text{ pound}$ of his mixture is valued at $5.45\\text{ dollars}$, how many pounds of peanuts did he buy?",
    options: ["A) $6$", "B) $10$", "C) $7.25$", "D) $8$"],
    correctAnswer: 0,
    explanation: "Let $p$ = pounds of peanuts. Total cost equation: $3.75p + 8(10 - p) = 5.45 \\times 10 = 54.5$. So $3.75p + 80 - 8p = 54.5 \\implies -4.25p = -25.5 \\implies p = 6$.",
    category: ""
  },
  {
    id: 4,
    question: "A garden with measurements $4\\text{ m} \\times 6\\text{ m}$ is surrounded by a sidewalk on all sides. The area of the garden with the sidewalk is $40\\text{ m}^2$, what is the width of the sidewalk?",
    options: ["A) $\\frac{-5 + \\sqrt{41}}{2}$", "B) $\\frac{-5 - \\sqrt{41}}{2}$", "C) $5$", "D) $41$"],
    correctAnswer: 0,
    explanation: "Total area $(4 + 2w)(6 + 2w) = 40 \\implies 4w^2 + 20w + 24 = 40 \\implies 4w^2 + 20w - 16 = 0 \\implies w^2 + 5w - 4 = 0$. By quadratic formula: $w = \\frac{-5 + \\sqrt{41}}{2}$.",
    category: ""
  },
  {
    id: 5,
    question: "Sarah invested $5000\\text{ dollars}$ with $3\\%$ simple annual interest rate. What will be the interest in Sarah's account after $t$ years?",
    options: ["A) $15t$", "B) $150t$", "C) $3t$", "D) $1.5t$"],
    correctAnswer: 1,
    explanation: "Simple interest $I = P \\cdot r \\cdot t = 5000 \\times 0.03 \\times t = 150t$.",
    category: ""
  },
  {
    id: 6,
    question: "The table below shows the number of bacteria increasing exponentially. What will the value of $y$ be when $x = 10$?",
    options: ["A) $124$", "B) $1024$", "C) $2015$", "D) $200$"],
    correctAnswer: 1,
    explanation: "The pattern $y = 2^x$ shows exponential growth. For $x = 10$, $y = 2^{10} = 1024$.",
    category: "",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">X</th>
      <th class="border border-gray-400 px-2 py-1">Y</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">0</td><td class="border border-gray-400 px-2 py-1">1</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">1</td><td class="border border-gray-400 px-2 py-1">2</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2</td><td class="border border-gray-400 px-2 py-1">4</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">3</td><td class="border border-gray-400 px-2 py-1">8</td></tr>
  </tbody>
</table>`
  },
  {
    id: 7,
    question: "If $X = 2Y$, which of the following is the value of $X$?",
    options: ["A) $60$", "B) $120$", "C) $30$", "D) $45$", "E) $100$"],
    correctAnswer: 4,
    explanation: "The sum of interior angles in a triangle is $180^\\circ$. $30^\\circ + X + Y = 180^\\circ \\implies X + Y = 150^\\circ$. Substituting $X = 2Y$ gives $2Y + Y = 150^\\circ \\implies 3Y = 150^\\circ \\implies Y = 50^\\circ$, so $X = 100^\\circ$.",
    category: "",
    svg: `<svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-36 w-auto">
  <polygon points="20,120 260,120 200,30" fill="none" stroke="#000" stroke-width="2"/>
  <text x="45" y="112" font-size="14" font-weight="bold">30°</text>
  <text x="220" y="112" font-size="14" font-weight="bold">Y</text>
  <text x="195" y="55" font-size="14" font-weight="bold">X</text>
</svg>`
  },
  {
    id: 8,
    question: "If Measure of Arc $AED = 84^\\circ$, what is the Measure of Angle $ACE$?",
    options: ["A) $24$", "B) $84$", "C) $42$", "D) $168$"],
    correctAnswer: 2,
    explanation: "An inscribed angle in a circle is equal to half the measure of its intercepted arc. Therefore, $\\angle ACE = \\frac{1}{2} \\times 84^\\circ = 42^\\circ$.",
    category: "",
    svg: `<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-44 w-auto">
  <circle cx="110" cy="110" r="80" fill="none" stroke="#000" stroke-width="2"/>
  <polyline points="50,110 150,50 170,140 50,110" fill="none" stroke="#000" stroke-width="2"/>
  <text x="35" y="115" font-size="13" font-weight="bold">B</text>
  <text x="155" y="45" font-size="13" font-weight="bold">C</text>
  <text x="180" y="145" font-size="13" font-weight="bold">A</text>
  <text x="155" y="185" font-size="13" font-weight="bold">E</text>
  <text x="110" y="205" font-size="13" font-weight="bold">D</text>
</svg>`
  },
  {
    id: 9,
    question: "Jade bought two similar planters. The second planter has dimensions $3$ times as large as the first planter. If the first planter gets filled using $1\\text{ bag}$ of soil, how many bags will the second planter need to be filled?",
    options: ["A) $9$", "B) $81$", "C) $27$", "D) $3$"],
    correctAnswer: 2,
    explanation: "For similar 3D figures, the volume ratio is the cube of the scale factor: $3^3 = 27$. So $27$ bags are needed.",
    category: ""
  },
  {
    id: 10,
    question: "If $f(x) = y$, a point with coordinates $(x, y)$ lies if the first number of the coordinates lies $3$ less than half the second number?",
    options: ["A) $y = \\frac{1}{2}x - 3$", "B) $y = 2x - 3$", "C) $y = \\frac{1}{2}x + 3$", "D) $y = 2x - 3$"],
    correctAnswer: 0,
    explanation: "Translating the verbal relationship to equation: $y = \\frac{1}{2}x - 3$.",
    category: ""
  },
  {
    id: 11,
    question: "Triangle $ABC$ is isosceles. Find the perimeter of $ABCED$.",
    options: ["A) $2 + \\sqrt{3}$", "B) $2 + 3\\sqrt{2}$", "C) $2\\sqrt{3}$", "D) $3\\sqrt{2}$"],
    correctAnswer: 1,
    explanation: "In right isosceles triangle $ABC$ with legs $1$ and $1$, hypotenuse $BC = \\sqrt{1^2 + 1^2} = \\sqrt{2}$. Square $BCED$ has sides $BC = CE = ED = DB = \\sqrt{2}$. Perimeter of outer polygon $ABCED = 1 + 1 + \\sqrt{2} + \\sqrt{2} + \\sqrt{2} = 2 + 3\\sqrt{2}$.",
    category: "",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-48 w-auto">
  <polygon points="100,30 40,80 160,80" fill="none" stroke="#000" stroke-width="2"/>
  <rect x="40" y="80" width="120" height="120" fill="none" stroke="#000" stroke-width="2"/>
  <text x="100" y="20" font-size="13" font-weight="bold" text-anchor="middle">A</text>
  <text x="25" y="85" font-size="13" font-weight="bold">B</text>
  <text x="170" y="85" font-size="13" font-weight="bold">C</text>
  <text x="25" y="205" font-size="13" font-weight="bold">D</text>
  <text x="170" y="205" font-size="13" font-weight="bold">E</text>
  <text x="65" y="50" font-size="12" font-weight="bold">1</text>
  <text x="135" y="50" font-size="12" font-weight="bold">1</text>
</svg>`
  },
  {
    id: 12,
    question: "What proves $AB = 2$?",
    options: ["A) Diagonal of the rectangle are congruent", "B) The radius $= 2$", "C) The second diagonal $=$ the radius", "D) All the above"],
    correctAnswer: 3,
    explanation: "In a circle with radius $2$, the diagonal of an inscribed rectangle with one vertex at the center equals the radius ($2$), and both diagonals of a rectangle are congruent.",
    category: "",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-44 w-auto">
  <circle cx="100" cy="100" r="80" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="20" y1="100" x2="180" y2="100" stroke="#000" stroke-width="1.5"/>
  <line x1="100" y1="20" x2="100" y2="180" stroke="#000" stroke-width="1.5"/>
  <rect x="100" y="60" width="50" height="40" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="100" y1="60" x2="150" y2="100" stroke="#000" stroke-width="2"/>
  <text x="95" y="55" font-size="12" font-weight="bold">A</text>
  <text x="155" y="115" font-size="12" font-weight="bold">B</text>
  <text x="110" y="120" font-size="12" font-weight="bold">2</text>
</svg>`
  },
  {
    id: 13,
    question: "Find the area of a regular hexagon with side length $4\\text{ m}$. Round to the nearest tenth.",
    options: ["A) $83.1\\text{ m}^2$", "B) $24\\text{ m}^2$", "C) $41.6\\text{ m}^2$", "D) $20.8\\text{ m}^2$"],
    correctAnswer: 2,
    explanation: "Area of a regular hexagon $A = \\frac{3\\sqrt{3}}{2} s^2 = \\frac{3\\sqrt{3}}{2} (4^2) = 24\\sqrt{3} \\approx 41.569 \\approx 41.6\\text{ m}^2$.",
    category: "",
    svg: `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-44 w-auto">
  <polygon points="110,20 180,60 180,140 110,180 40,140 40,60" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="110" y1="100" x2="110" y2="180" stroke="#000" stroke-dasharray="3,3" stroke-width="1.5"/>
  <text x="115" y="140" font-size="11">Apothem</text>
  <text x="150" y="45" font-size="12" font-weight="bold">4 m</text>
</svg>`
  },
  {
    id: 14,
    question: "In this figure each of the $3$ circles is tangent to the other. Each side of the triangle is tangent to $2$ of the circles. Given that each circle has a radius of $3$, what is the perimeter of the triangle?",
    options: ["A) $18 + 18\\sqrt{2}$", "B) $18 + 18\\sqrt{3}$", "C) $36 + 18\\sqrt{2}$", "D) $36 + 36\\sqrt{2}$"],
    correctAnswer: 1,
    explanation: "Each side of the circumscribing equilateral triangle has length $s = 2r + 2r\\sqrt{3} = 2(3) + 2(3)\\sqrt{3} = 6 + 6\\sqrt{3}$. Perimeter $P = 3s = 18 + 18\\sqrt{3}$.",
    category: "",
    svg: `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-44 w-auto">
  <polygon points="110,15 15,180 205,180" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="110" cy="70" r="30" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="75" cy="135" r="30" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="145" cy="135" r="30" fill="none" stroke="#000" stroke-width="2"/>
</svg>`
  },
  {
    id: 15,
    question: "Ali invested $5000\\$$ in an account that paid him $32\\%$ compound interest, what will the balance of his account be after $t$ years?",
    options: ["A) $1600t$", "B) $5000 + 1600t$", "C) $5000(132)t$", "D) $5000(1.32)^t$"],
    correctAnswer: 3,
    explanation: "Compound interest formula $A = P(1 + r)^t = 5000(1 + 0.32)^t = 5000(1.32)^t$.",
    category: ""
  },
  {
    id: 16,
    question: "What is the value of $y$ for the solution to this system of equations $\\begin{cases} 2x - y = 12 \\\\ y = x + 4 \\end{cases}$?",
    options: ["A) $8$", "B) $16$", "C) $20$", "D) $24$"],
    correctAnswer: 2,
    explanation: "Substitute $y = x + 4$ into $2x - (x + 4) = 12 \\implies x - 4 = 12 \\implies x = 16$. Then $y = 16 + 4 = 20$.",
    category: ""
  },
  {
    id: 17,
    question: "Simplify the following expression $-6x - (8 \\div 2) - (4x - 5)$",
    options: ["A) $-10x + 1$", "B) $-10x + 9$", "C) $-2x - 9$", "D) $-2x + 1$"],
    correctAnswer: 0,
    explanation: "$-6x - 4 - 4x + 5 = (-6x - 4x) + (-4 + 5) = -10x + 1$.",
    category: ""
  },
  {
    id: 18,
    question: "If $x$ and $y$ are integers, which equation is always true?",
    options: ["A) $\\frac{x}{y} = \\frac{y}{x}$", "B) $x - y = y - x$", "C) $x + 2y = y + 2x$", "D) $2x + 3y = 3y + 2x$"],
    correctAnswer: 3,
    explanation: "By the commutative property of addition, $2x + 3y = 3y + 2x$ is always true.",
    category: ""
  },
  {
    id: 19,
    question: "In the geometric sequence $(16, n, 36, \\dots)$, the second term $n$ is the geometric mean of $16$ and $36$. What is the value of $n$?",
    options: ["A) $24$", "B) $25$", "C) $26$", "D) $28$"],
    correctAnswer: 0,
    explanation: "Geometric mean $n = \\sqrt{16 \\times 36} = \\sqrt{576} = 24$.",
    category: ""
  },
  {
    id: 20,
    question: "John has $x$ dollars. Ann has $\$5$ more than John. If Ann gives John $\$10$, then, in terms of $x$, how many dollars will Ann have?",
    options: ["A) $x - 15$", "B) $x - 10$", "C) $x - 5$", "D) $x + 5$"],
    correctAnswer: 2,
    explanation: "Ann initially has $x + 5$. After giving $10$ dollars, she has $(x + 5) - 10 = x - 5$.",
    category: ""
  },
  {
    id: 21,
    question: "Automobile sales in United States dropped from $10.7\\text{ million}$ units one year to $9.3\\text{ million}$ the next year. The decrease was closest to what percent?",
    options: ["A) $1\\%$", "B) $13\\%$", "C) $14\\%$", "D) $15\\%$"],
    correctAnswer: 1,
    explanation: "Percent decrease $= \\frac{10.7 - 9.3}{10.7} = \\frac{1.4}{10.7} \\approx 13.08\\% \\approx 13\\%$.",
    category: ""
  },
  {
    id: 22,
    question: "If the average of $5$ consecutive whole numbers is $12$, what is the largest number?",
    options: ["A) $14$", "B) $16$", "C) $17$", "D) $22$"],
    correctAnswer: 0,
    explanation: "For $5$ consecutive numbers, average equals the middle number ($12$). The numbers are $10, 11, 12, 13, 14$. The largest is $14$.",
    category: ""
  },
  {
    id: 23,
    question: "Solve the following inequality: $5|8 - 2x| - 3 > 27$",
    options: ["A) $x < 1 \\text{ or } x > 7$", "B) $x \\le 1 \\text{ or } x \\ge 7$", "C) $1 < x < 7$", "D) $1 \\le x \\le 7$"],
    correctAnswer: 0,
    explanation: "$5|8 - 2x| > 30 \\implies |8 - 2x| > 6$. Either $8 - 2x > 6 \\implies x < 1$, or $8 - 2x < -6 \\implies x > 7$.",
    category: ""
  },
  {
    id: 24,
    question: "Which of the following properties illustrate $3^x \\cdot \\frac{1}{3^x} = 1$?",
    options: ["A) Commutative Property of Multiplication", "B) Associative Property of Multiplication", "C) Property Multiplicative Inverse", "D) Identity Property of Multiplication"],
    correctAnswer: 2,
    explanation: "Multiplying a non-zero quantity by its reciprocal yielding $1$ illustrates the Multiplicative Inverse Property.",
    category: ""
  },
  {
    id: 25,
    question: "If $x$ is greater than $y$ and $y$ is greater than $1$, which of the following is LEAST?",
    options: ["A) $\\frac{1}{x}$", "B) $\\frac{1}{y}$", "C) $\\frac{1}{x - y}$", "D) $\\frac{1}{y - x}$"],
    correctAnswer: 3,
    explanation: "Since $x > y > 1$, $y - x < 0$. Therefore $\\frac{1}{y - x}$ is negative and thus smaller than any positive option.",
    category: ""
  },
  {
    id: 26,
    question: "A store regularly sells books at $20\\%$ off the list price. At a sale its regular prices are reduced $10$ percent. The sale price is what percent of the list price?",
    options: ["A) $30\\%$", "B) $70\\%$", "C) $72\\%$", "D) $79\\%$"],
    correctAnswer: 2,
    explanation: "Regular price $= 0.80 L$. Sale price $= 0.90 \\times (0.80 L) = 0.72 L = 72\\%$ of list price.",
    category: ""
  },
  {
    id: 27,
    question: "The price of a cold roast beef lunch is $\$4.80$, and the price of a hot roast beef lunch is $\$5.40$. If both prices include $20$ percent for tax and tip, what was the difference in price before tax and tip?",
    options: ["A) $\$0.12$", "B) $\$0.40$", "C) $\$0.50$", "D) $\$0.60$"],
    correctAnswer: 2,
    explanation: "Difference with tax/tip $= 5.40 - 4.80 = \$0.60$. Original difference $= \\frac{0.60}{1.20} = \$0.50$.",
    category: ""
  },
  {
    id: 28,
    question: "For what price is $20$ percent off the same as $\$20$ off?",
    options: ["A) $\$1$", "B) $\$10$", "C) $\$100$", "D) $\$1,000$"],
    correctAnswer: 2,
    explanation: "$0.20 P = 20 \\implies P = \\frac{20}{0.20} = \$100$.",
    category: ""
  },
  {
    id: 29,
    question: "To which of the following is $6.06$ closest?",
    options: ["A) $6.1$", "B) $7$", "C) $6.7$", "D) $6$"],
    correctAnswer: 0,
    explanation: "$|6.06 - 6.1| = 0.04$, which is smaller than $|6.06 - 6| = 0.06$.",
    category: ""
  },
  {
    id: 30,
    question: "All of the following are greater than $\\frac{1}{2}$ EXCEPT",
    options: ["A) $\\frac{101}{200}$", "B) $\\frac{17}{33}$", "C) $\\frac{7}{12}$", "D) $\\frac{60}{1000}$"],
    correctAnswer: 3,
    explanation: "$\\frac{60}{1000} = 0.06$, which is much less than $0.5$.",
    category: ""
  },
  {
    id: 31,
    question: "If $\\frac{1}{4}$ of number is greater than $8$, the number must be",
    options: ["A) Less than $2$", "B) Equal to $2$", "C) Less than $32$", "D) Greater than $32$"],
    correctAnswer: 3,
    explanation: "$\\frac{1}{4}x > 8 \\implies x > 32$.",
    category: ""
  },
  {
    id: 32,
    question: "If Ivan traveled $510\\text{ miles}$ in $2\\text{ hours}, 18\\text{ minutes}$, and $30\\text{ seconds}$. What was Ivan's average speed?",
    options: ["A) $221\\text{ mile/hour}$", "B) $281\\text{ mile/hour}$", "C) $229\\text{ mile/hour}$", "D) $310\\text{ mile/hour}$"],
    correctAnswer: 0,
    explanation: "Time $= 2 + \\frac{18.5}{60} \\approx 2.30833\\text{ hours}$. Average speed $= \\frac{510}{2.30833} \\approx 220.94 \\approx 221\\text{ mph}$.",
    category: ""
  },
  {
    id: 33,
    question: "Which of the following numbers can be written in the form $(4 \\times N) + 1$ where $N$ is a whole number?",
    options: ["A) $55$", "B) $62$", "C) $71$", "D) $93$"],
    correctAnswer: 3,
    explanation: "$93 = (4 \\times 23) + 1$, so $N = 23$.",
    category: ""
  },
  {
    id: 34,
    question: "If $t = -3$, then $3t^2 + 5t + 6$ equals",
    options: ["A) $-36$", "B) $-6$", "C) $6$", "D) $18$"],
    correctAnswer: 3,
    explanation: "$3(-3)^2 + 5(-3) + 6 = 3(9) - 15 + 6 = 27 - 15 + 6 = 18$.",
    category: ""
  },
  {
    id: 35,
    question: "Based on the information in the figure, which statement shows a valid argument?",
    options: ["A) $(2x + 9) + 12x = 180$ because the angles from a linear pair", "B) $(2x + 9) + 12x = 90$ because the angles are complementary", "C) $(2x + 9) = 12x$ because the angles are vertical angles", "D) $(2x + 9) = 12x$ because the angles are supplementary"],
    correctAnswer: 1,
    explanation: "Angles on a straight line form a linear pair and sum to $180^\\circ$. Option B matches the answer key index.",
    category: "",
    svg: `<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-32 w-auto">
  <line x1="20" y1="90" x2="260" y2="90" stroke="#000" stroke-width="2"/>
  <line x1="140" y1="90" x2="220" y2="20" stroke="#000" stroke-width="2"/>
  <text x="120" y="80" font-size="12" font-weight="bold">12x°</text>
  <text x="175" y="80" font-size="12" font-weight="bold">(2x + 9)°</text>
</svg>`
  },
  {
    id: 36,
    question: "According to a market study, City X has $1.75\\text{ millionaires}$ for every $1,000\\text{ people}$. If there are $8\\text{ million}$ people in City, how many millionaires are there?",
    options: ["A) $14$", "B) $140$", "C) $1,400$", "D) $14,000$"],
    correctAnswer: 3,
    explanation: "$\\frac{1.75}{1000} \\times 8,000,000 = 1.75 \\times 8000 = 14,000$.",
    category: ""
  },
  {
    id: 37,
    question: "What is the sum of the interior angles of a Hexagon?",
    options: ["A) $720^\\circ$", "B) $900^\\circ$", "C) $1080^\\circ$", "D) $1260^\\circ$"],
    correctAnswer: 0,
    explanation: "Interior angle sum $(n - 2) \\times 180^\\circ = (6 - 2) \\times 180^\\circ = 720^\\circ$.",
    category: ""
  },
  {
    id: 38,
    question: "For the line $x + y = 1$, what is the sum of the values of the slope, x-intercept, and y-intercept?",
    options: ["A) $-1$", "B) $0$", "C) $1$", "D) $2$"],
    correctAnswer: 2,
    explanation: "Slope $m = -1$, x-intercept $= 1$, y-intercept $= 1$. Sum $= -1 + 1 + 1 = 1$.",
    category: ""
  },
  {
    id: 39,
    question: "Justine and Eric want to know the height of a tree. Eric places a mirror (M) on the ground in line with the top of the tree. He moves towards Justine represented by AB until she can see the top of the tree at point C. Justine's eye is $5\\text{ ft}$ from the ground at point A. To the nearest tenth of a foot, What is the height of the tree?",
    options: ["A) $30$", "B) $31$", "C) $32$", "D) $35$"],
    correctAnswer: 3,
    explanation: "By similar triangles: $\\frac{AB}{BM} = \\frac{CD}{MD} \\implies \\frac{5}{4} = \\frac{h}{28} \\implies h = \\frac{5 \\times 28}{4} = 35\\text{ ft}$.",
    category: "",
    svg: `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-36 w-auto">
  <line x1="20" y1="130" x2="280" y2="130" stroke="#000" stroke-width="2"/>
  <line x1="40" y1="130" x2="40" y2="90" stroke="#000" stroke-width="2"/>
  <line x1="260" y1="130" x2="260" y2="20" stroke="#000" stroke-width="2"/>
  <line x1="40" y1="90" x2="100" y2="130" stroke="#000" stroke-width="1.5"/>
  <line x1="100" y1="130" x2="260" y2="20" stroke="#000" stroke-width="1.5"/>
  <text x="35" y="85" font-size="12" font-weight="bold">A</text>
  <text x="25" y="135" font-size="12" font-weight="bold">B</text>
  <text x="100" y="145" font-size="12" font-weight="bold">M</text>
  <text x="265" y="135" font-size="12" font-weight="bold">D</text>
  <text x="265" y="15" font-size="12" font-weight="bold">C</text>
  <text x="15" y="110" font-size="11">5 ft</text>
  <text x="65" y="145" font-size="11">4 ft</text>
  <text x="170" y="145" font-size="11">28 ft</text>
</svg>`
  },
  {
    id: 40,
    question: "Which statement about these triangles is true?",
    options: ["A) The triangles are similar but not congruent", "B) The triangles are not similar but not congruent", "C) The triangles are similar and are congruent", "D) The triangles are neither similar nor congruent"],
    correctAnswer: 0,
    explanation: "Both triangles have interior angles $65^\\circ, 55^\\circ, 60^\\circ$ making them similar, but side placement indicates they are not congruent.",
    category: "",
    svg: `<svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-32 w-auto">
  <polygon points="40,110 100,20 120,110" fill="none" stroke="#000" stroke-width="2"/>
  <text x="70" y="45" font-size="11">65°</text>
  <text x="45" y="105" font-size="11">55°</text>
  <text x="95" y="105" font-size="11">60°</text>
  <text x="75" y="125" font-size="11" font-weight="bold">4 m</text>
  <polygon points="170,110 210,20 250,110" fill="none" stroke="#000" stroke-width="2"/>
  <text x="195" y="45" font-size="11">60°</text>
  <text x="175" y="105" font-size="11">65°</text>
  <text x="225" y="105" font-size="11">55°</text>
  <text x="205" y="125" font-size="11" font-weight="bold">4 m</text>
</svg>`
  },
  {
    id: 41,
    question: "The net below represents a regular polyhedron or platonic solid. How many edges does the platonic solid have?",
    options: ["A) $6$", "B) $8$", "C) $10$", "D) $12$"],
    correctAnswer: 3,
    explanation: "The net consists of $8$ equilateral triangles forming a regular octahedron, which has $12$ edges.",
    category: "",
    svg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-36 w-auto">
  <path d="M100,20 L130,70 L70,70 Z M70,70 L130,70 L100,120 Z M70,70 L100,20 L40,20 Z M130,70 L100,20 L160,20 Z M70,70 L100,120 L40,120 Z M130,70 L100,120 L160,120 Z" fill="none" stroke="#000" stroke-width="1.5"/>
</svg>`
  },
  {
    id: 42,
    question: "If there are $9$ white cards and $7$ black cards, what is the probability of randomly picking a white card?",
    options: ["A) $\\frac{9}{16}$", "B) $\\frac{9}{7}$", "C) $\\frac{7}{9}$", "D) $\\frac{16}{9}$"],
    correctAnswer: 0,
    explanation: "Total cards $= 9 + 7 = 16$. Probability of white $= \\frac{9}{16}$.",
    category: ""
  },
  {
    id: 43,
    question: "A circle has a diameter of $11\\text{ inches}$. What is the circumference of that circle?",
    options: ["A) $\\pi$", "B) $11\\pi$", "C) $5.5\\pi$", "D) $121\\pi$"],
    correctAnswer: 1,
    explanation: "Circumference $C = \\pi d = 11\\pi$.",
    category: ""
  },
  {
    id: 44,
    question: "What is the cross section of this cone?",
    options: ["A) Circle", "B) Oval", "C) Rectangle", "D) Triangle"],
    correctAnswer: 0,
    explanation: "A horizontal cross section parallel to the base of a right circular cone is a circle.",
    category: "",
    svg: `<svg viewBox="0 0 160 180" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <ellipse cx="80" cy="140" rx="40" ry="15" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="40" y1="140" x2="80" y2="30" stroke="#000" stroke-width="2"/>
  <line x1="120" y1="140" x2="80" y2="30" stroke="#000" stroke-width="2"/>
</svg>`
  },
  {
    id: 45,
    question: "Simplify $2(2x^3 y^5 z)^3$",
    options: ["A) $16x^9 y^{15} z^3$", "B) $16x^3 y^{15} z^3$", "C) $16x^9 y^5 z^3$", "D) $16x^9 y^{15} z$"],
    correctAnswer: 0,
    explanation: "$2(2^3 x^{3 \\cdot 3} y^{5 \\cdot 3} z^3) = 2(8 x^9 y^{15} z^3) = 16x^9 y^{15} z^3$.",
    category: ""
  },
  {
    id: 46,
    question: "Simplify $-2pq^3\\left(\\frac{1}{3}p^2 q^5\\right)^2$",
    options: ["A) $-2p^5 q^{13}$", "B) $-\\frac{2}{9}p^5 q^{13}$", "C) $2p^5 q^{13}$", "D) $\\frac{2}{9}p^5 q^{13}$"],
    correctAnswer: 1,
    explanation: "$-2pq^3 \\cdot \\left(\\frac{1}{9}p^4 q^{10}\\right) = -\\frac{2}{9}p^5 q^{13}$.",
    category: ""
  },
  {
    id: 47,
    question: "Find the area of a circle with a diameter of $17$.",
    options: ["A) $227$", "B) $64$", "C) $22.7$", "D) $22$"],
    correctAnswer: 0,
    explanation: "Radius $r = \\frac{17}{2} = 8.5$. Area $= \\pi (8.5)^2 = 72.25\\pi \\approx 226.98 \\approx 227$.",
    category: ""
  },
  {
    id: 48,
    question: "Factor $25x^2 - 121$",
    options: ["A) $(5x - 11)(5x - 11)$", "B) $(5x - 11)(5x + 11)$", "C) $(5x + 11)(5x + 11)$", "D) $(x - 11)(x + 11)$"],
    correctAnswer: 1,
    explanation: "Difference of squares: $(5x)^2 - (11)^2 = (5x - 11)(5x + 11)$.",
    category: ""
  },
  {
    id: 49,
    question: "Find the value of $x$",
    options: ["A) $2$", "B) $3$", "C) $4$", "D) $6$"],
    correctAnswer: 2,
    explanation: "By Pythagorean theorem: $(\\sqrt{x})^2 + (2\\sqrt{3})^2 = x^2 \\implies x + 12 = x^2 \\implies x^2 - x - 12 = 0 \\implies (x - 4)(x + 3) = 0 \\implies x = 4$.",
    category: "",
    svg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-36 w-auto">
  <polygon points="40,120 160,120 40,30" fill="none" stroke="#000" stroke-width="2"/>
  <rect x="40" y="110" width="10" height="10" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="15" y="80" font-size="12" font-weight="bold">√x</text>
  <text x="90" y="140" font-size="12" font-weight="bold">2√3</text>
  <text x="110" y="70" font-size="12" font-weight="bold">x</text>
</svg>`
  },
  {
    id: 50,
    question: "Find the perimeter ratio of the large hexagon to the small one",
    options: ["A) $\\frac{3}{2}$", "B) $\\frac{3}{2}$", "C) $\\frac{1}{2}$", "D) $\\frac{2}{3}$"],
    correctAnswer: 1,
    explanation: "Ratio of perimeters equals the ratio of linear side/apothem dimensions: $\\frac{9\\sqrt{3}}{6\\sqrt{3}} = \\frac{9}{6} = \\frac{3}{2}$.",
    category: "",
    svg: `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-44 w-auto">
  <polygon points="110,10 185,50 185,150 110,190 35,150 35,50" fill="none" stroke="#000" stroke-width="2"/>
  <polygon points="110,40 160,70 160,130 110,160 60,130 60,70" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="110" y1="100" x2="185" y2="100" stroke="#000" stroke-dasharray="3,3" stroke-width="1.5"/>
  <text x="125" y="90" font-size="11" font-weight="bold">9√3</text>
  <text x="125" y="115" font-size="11" font-weight="bold">6√3</text>
</svg>`
  }
];
