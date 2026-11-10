import { Question } from './types';

export const ACT2_EXAM8_27_SET: Question[] = [
  {
    id: 1,
    question: "Each of these $5$ clues is a true statement:\nClue 1: George, Wendy, and Juanita did not bring their lunches.\nClue 2: George ate the last piece of candy if and only if Juanita brought her lunch.\nClue 3: If Wendy did not bring her lunch, then Juanita did not eat the last piece of candy.\nClue 4: If Dashon ate the last piece of candy, then Wendy brought her lunch.\nClue 5: Only one of these people ate the last piece of candy.\n\nUse these clues to determine who ate the last piece of candy.",
    options: ["A) Dashon", "B) George", "C) Juanita", "D) Wendy"],
    correctAnswer: 3,
    explanation: "By Clue 1, Juanita and Wendy did not bring their lunches. By Clue 3, Juanita did not eat the candy. By Clue 2, George did not eat the candy. By Clue 4, Dashon did not eat the candy. By Clue 5, Wendy ate the last piece of candy.",
    category: "",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-sm mb-4 text-center text-xs">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1 font-bold">Clue #</th>
      <th class="border border-gray-400 px-2 py-1 font-bold">Statement</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Clue 1</td><td class="border border-gray-400 px-2 py-1 text-left">George, Wendy, and Juanita did not bring their lunches.</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Clue 2</td><td class="border border-gray-400 px-2 py-1 text-left">George ate the last piece of candy if and only if Juanita brought her lunch.</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Clue 3</td><td class="border border-gray-400 px-2 py-1 text-left">If Wendy did not bring her lunch, then Juanita did not eat the last piece of candy.</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Clue 4</td><td class="border border-gray-400 px-2 py-1 text-left">If Dashon ate the last piece of candy, then Wendy brought her lunch.</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Clue 5</td><td class="border border-gray-400 px-2 py-1 text-left">Only one of these people ate the last piece of candy.</td></tr>
  </tbody>
</table>`
  },
  {
    id: 2,
    question: "Which of the following is $3(4 - x^2) + 10$ in simplified form?",
    options: ["A) $22 - x^2$", "B) $22 - 3x^2$", "C) $12 - x^2$", "D) $12 - 3x^2$"],
    correctAnswer: 1,
    explanation: "$3(4 - x^2) + 10 = 12 - 3x^2 + 10 = 22 - 3x^2$.",
    category: ""
  },
  {
    id: 3,
    question: "Mr. Brady's $9^{\\text{th}}$ grade science class grows a type of bacterium in a petri dish. The table shows the number of bacteria in the dish at different times. If the pattern continues, how many bacteria will be in the dish after $10$ hours?",
    options: ["A) $256$", "B) $512$", "C) $1,024$", "D) $2,048$"],
    correctAnswer: 2,
    explanation: "The bacteria population doubles every hour: $y = 2^t$. At $t = 10$, $y = 2^{10} = 1024$.",
    category: "",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Time in hours</th>
      <th class="border border-gray-400 px-2 py-1">Number of bacteria</th>
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
    id: 4,
    question: "This map shows the intersections of four roads. King Street and Monroe Street are parallel. Elk Avenue intersects King Street such that $m\\angle 1 = 71^\\circ$. Park Avenue intersects Monroe Street such that $m\\angle 2 = 43^\\circ$. What is $m\\angle 3$?",
    options: ["A) $38^\\circ$", "B) $56^\\circ$", "C) $66^\\circ$", "D) $94^\\circ$"],
    correctAnswer: 2,
    explanation: "By alternate interior and consecutive interior angle properties between parallel lines King St. and Monroe St., $m\\angle 3 = 180^\\circ - (71^\\circ + 43^\\circ) = 180^\\circ - 114^\\circ = 66^\\circ$.",
    category: "",
    svg: `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <line x1="20" y1="50" x2="260" y2="50" stroke="#000" stroke-width="2"/>
  <line x1="20" y1="110" x2="260" y2="110" stroke="#000" stroke-width="2"/>
  <line x1="140" y1="20" x2="180" y2="140" stroke="#000" stroke-width="2"/>
  <line x1="240" y1="20" x2="160" y2="140" stroke="#000" stroke-width="2"/>
  <text x="180" y="45" font-size="11" font-weight="bold">King St.</text>
  <text x="200" y="105" font-size="11" font-weight="bold">Monroe St.</text>
  <text x="125" y="40" font-size="11">Elk Ave.</text>
  <text x="215" y="40" font-size="11">Park Ave.</text>
  <text x="145" y="45" font-size="11" font-weight="bold">1</text>
  <text x="190" y="125" font-size="11" font-weight="bold">2</text>
  <text x="170" y="125" font-size="11" font-weight="bold">3</text>
</svg>`
  },
  {
    id: 5,
    question: "In $\\Delta BCD$, $m\\angle BDC = 30^\\circ$, if the measure of exterior $\\angle ABD$ is twice $m\\angle DCB$, what is $m\\angle ABD$?",
    options: ["A) $30^\\circ$", "B) $60^\\circ$", "C) $105^\\circ$", "D) $120^\\circ$"],
    correctAnswer: 1,
    explanation: "By the exterior angle theorem, $m\\angle ABD = m\\angle BDC + m\\angle DCB$. Let $x = m\\angle DCB$. Then $2x = 30^\\circ + x \\implies x = 30^\\circ$. Thus $m\\angle ABD = 2(30^\\circ) = 60^\\circ$.",
    category: "",
    svg: `<svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-36 w-auto">
  <polygon points="120,30 30,110 210,110" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="120" y1="30" x2="230" y2="10" stroke="#000" stroke-width="1.5"/>
  <text x="115" y="20" font-size="12" font-weight="bold">B</text>
  <text x="15" y="115" font-size="12" font-weight="bold">D</text>
  <text x="215" y="115" font-size="12" font-weight="bold">C</text>
  <text x="140" y="25" font-size="12" font-weight="bold">A</text>
  <text x="50" y="105" font-size="11">30°</text>
</svg>`
  },
  {
    id: 6,
    question: "The chord of this circle is perpendicular to a radius of the circle. The chord divides the radius into segment $2\\text{ cm}$ and $4\\text{ cm}$ long. What is the length, in centimeters, of the chord?",
    options: ["A) $2\\sqrt{5}$", "B) $2\\sqrt{13}$", "C) $4\\sqrt{5}$", "D) $10$"],
    correctAnswer: 2,
    explanation: "Radius $R = 2 + 4 = 6\\text{ cm}$. Distance from center to chord $d = 4\\text{ cm}$. Half chord $h = \\sqrt{R^2 - d^2} = \\sqrt{6^2 - 4^2} = \\sqrt{20} = 2\\sqrt{5}$. Total chord length $= 2 \\times 2\\sqrt{5} = 4\\sqrt{5}\\text{ cm}$.",
    category: "",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <circle cx="100" cy="100" r="80" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="100" y1="100" x2="160" y2="153" stroke="#000" stroke-width="1.5"/>
  <line x1="100" y1="100" x2="180" y2="100" stroke="#000" stroke-width="2"/>
  <line x1="153" y1="40" x2="153" y2="160" stroke="#000" stroke-width="2"/>
  <rect x="143" y="90" width="10" height="10" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="120" y="95" font-size="12" font-weight="bold">4</text>
  <text x="165" y="95" font-size="12" font-weight="bold">2</text>
</svg>`
  },
  {
    id: 7,
    question: "What is the square root of $25 \\cdot 3^{16}$?",
    options: ["A) $5 \\cdot 3^4$", "B) $5 \\cdot 3^8$", "C) $5 \\cdot 3^{14}$", "D) $5 \\cdot 3^{16}$"],
    correctAnswer: 1,
    explanation: "$\\sqrt{25 \\cdot 3^{16}} = \\sqrt{25} \\cdot \\sqrt{3^{16}} = 5 \\cdot 3^8$.",
    category: ""
  },
  {
    id: 8,
    question: "A line has a slope of $-2$ and passes through the point $(4, -5)$. What is the equation of this line in standard form?",
    options: ["A) $2x + y = 3$", "B) $2x + y = 13$", "C) $2x + y = -6$", "D) $2x + y = -13$"],
    correctAnswer: 0,
    explanation: "$y - (-5) = -2(x - 4) \\implies y + 5 = -2x + 8 \\implies 2x + y = 3$.",
    category: ""
  },
  {
    id: 9,
    question: "In the figure, $\\overline{PQ}$ is a diameter of circle $O$, and $R$ lies on the circle. If $QR$ is $1\\text{ unit}$ and the radius of the circle is $\\frac{5}{2}\\text{ units}$, how many units is $PR$?",
    options: ["A) $\\frac{\\sqrt{21}}{2}$", "B) $4$", "C) $\\sqrt{24}$", "D) $\\sqrt{26}$"],
    correctAnswer: 2,
    explanation: "Diameter $PQ = 2r = 5$. Triangle $PRQ$ inscribed in a semicircle is a right triangle at $R$. By Pythagorean theorem: $PR^2 + QR^2 = PQ^2 \\implies PR^2 + 1^2 = 5^2 = 25 \\implies PR^2 = 24 \\implies PR = \\sqrt{24}$.",
    category: "",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <circle cx="100" cy="100" r="80" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="20" y1="100" x2="180" y2="100" stroke="#000" stroke-width="2"/>
  <polygon points="20,100 180,100 150,165" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="100" cy="100" r="3" fill="#000"/>
  <text x="95" y="90" font-size="12" font-weight="bold">O</text>
  <text x="5" y="105" font-size="12" font-weight="bold">P</text>
  <text x="185" y="105" font-size="12" font-weight="bold">Q</text>
  <text x="155" y="180" font-size="12" font-weight="bold">R</text>
</svg>`
  },
  {
    id: 10,
    question: "A student gave this proof that $3^0 = 1$:\nWhat is the justification for the fourth step of the proof?",
    options: [
      "A) Identity property for multiplication",
      "B) Inverse property of multiplication",
      "C) Identity property for addition",
      "D) Multiplication property of equality"
    ],
    correctAnswer: 1,
    explanation: "Multiplying $3^2$ by its multiplicative inverse $\\frac{1}{3^2}$ to yield $1$ is justified by the Inverse Property of Multiplication.",
    category: "",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-md mb-4 text-center text-xs">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1 font-bold">Step</th>
      <th class="border border-gray-400 px-2 py-1 font-bold">Justification</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">3⁰ = 3⁽²⁻²⁾</td><td class="border border-gray-400 px-2 py-1">Subtraction fact</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">3⁽²⁻²⁾ = 3² / 3²</td><td class="border border-gray-400 px-2 py-1">Quotient property of exponents</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">3² / 3² = 3² · (1 / 3²)</td><td class="border border-gray-400 px-2 py-1">Definition of division</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">3² · (1 / 3²) = 1</td><td class="border border-gray-400 px-2 py-1 font-bold text-indigo-600">______</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">3⁰ = 1</td><td class="border border-gray-400 px-2 py-1">Transitive property of equality</td></tr>
  </tbody>
</table>`
  },
  {
    id: 11,
    question: "What is the standard form equation of a circle with a diameter that has endpoints of $(-1, 6)$ and $(5, 2)$?",
    options: [
      "A) $(x - 2)^2 + (y - 4)^2 = 13$",
      "B) $(x + 2)^2 + (y + 4)^2 = 13$",
      "C) $(x - 2)^2 + (y + 4)^2 = 26$",
      "D) $(x + 2)^2 + (y - 4)^2 = 26$"
    ],
    correctAnswer: 0,
    explanation: "Center $(h, k) = (\\frac{-1+5}{2}, \\frac{6+2}{2}) = (2, 4)$. Radius squared $r^2 = (5-2)^2 + (2-4)^2 = 9 + 4 = 13$. Equation: $(x - 2)^2 + (y - 4)^2 = 13$.",
    category: ""
  },
  {
    id: 12,
    question: "Jordan is considering purchasing two posters. Each dimension of one poster is three times the corresponding dimension of the other poster. How many times greater is the area of the larger poster than the smaller one?",
    options: ["A) $3$", "B) $6$", "C) $9$", "D) $12$"],
    correctAnswer: 2,
    explanation: "Area scale factor $= 3^2 = 9$.",
    category: ""
  },
  {
    id: 13,
    question: "If Event 1 occurs before Event 2, which of the following pairs of events are independent?",
    options: [
      "A) Event 1: Toss a coin. Event 2: Toss the same coin again.",
      "B) Event 1: Select a card from a deck of 52 cards. Event 2: Select another card without replacing.",
      "C) Event 1: It begins raining outside at 1:15 p.m. Event 2: The sidewalk outside is wet at 1:20 p.m.",
      "D) Event 1: Select a marble from a bag. Event 2: Select a second marble without replacing."
    ],
    correctAnswer: 0,
    explanation: "Tossing a coin multiple times results in completely independent outcomes.",
    category: ""
  },
  {
    id: 14,
    question: "Solve $2|3x - 8| - 3 = 11$",
    options: [
      "A) $x = 4 \\text{ or } x = \\frac{4}{3}$",
      "B) $x = \\frac{20}{3} \\text{ or } x = -\\frac{4}{3}$",
      "C) $x = 8 \\text{ or } x = -\\frac{8}{3}$",
      "D) $x = 5 \\text{ or } x = \\frac{1}{3}$"
    ],
    correctAnswer: 3,
    explanation: "$2|3x - 8| = 14 \\implies |3x - 8| = 7$. Case 1: $3x - 8 = 7 \\implies x = 5$. Case 2: $3x - 8 = -7 \\implies x = \\frac{1}{3}$.",
    category: ""
  },
  {
    id: 15,
    question: "Simplify $\\frac{\\sqrt{8x^3}}{\\sqrt{27x}}$ for $x > 0$",
    options: ["A) $\\frac{4x}{3}$", "B) $\\frac{2x}{3}$", "C) $\\frac{2x\\sqrt{6}}{9}$", "D) $\\frac{2x\\sqrt{6}}{3}$"],
    correctAnswer: 2,
    explanation: "$\\sqrt{\\frac{8x^3}{27x}} = \\sqrt{\\frac{8x^2}{27}} = \\frac{2x\\sqrt{2}}{3\\sqrt{3}} = \\frac{2x\\sqrt{6}}{9}$.",
    category: ""
  },
  {
    id: 16,
    question: "Completely factor $4x^2 - 12xy + 9y^2$",
    options: ["A) $(2x - 3y)^2$", "B) $(2x + 9y)^2$", "C) $(4x - 9y)^2$", "D) $4(x - 3y)^2$"],
    correctAnswer: 0,
    explanation: "Perfect square trinomial: $(2x - 3y)^2 = 4x^2 - 12xy + 9y^2$.",
    category: ""
  },
  {
    id: 17,
    question: "This is a scale model of a house. Triangle $EDC$ is an isosceles right triangle, and $ABCE$ is a square. If $DE = 1$, what is the perimeter of $ABCDE$?",
    options: ["A) $5$", "B) $6$", "C) $2 + 3\\sqrt{2}$", "D) $4\\sqrt{2}$"],
    correctAnswer: 2,
    explanation: "In right isosceles $\\Delta EDC$ with $DE = DC = 1$, hypotenuse $EC = \\sqrt{2}$. Square $ABCE$ has sides equal to $EC = \\sqrt{2}$. Perimeter of $ABCDE = 1 + 1 + \\sqrt{2} + \\sqrt{2} + \\sqrt{2} = 2 + 3\\sqrt{2}$.",
    category: "",
    svg: `<svg viewBox="0 0 180 220" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-44 w-auto">
  <polygon points="90,20 30,70 150,70" fill="none" stroke="#000" stroke-width="2"/>
  <rect x="30" y="70" width="120" height="120" fill="none" stroke="#000" stroke-width="2"/>
  <text x="85" y="15" font-size="12" font-weight="bold">D</text>
  <text x="20" y="70" font-size="12" font-weight="bold">E</text>
  <text x="155" y="70" font-size="12" font-weight="bold">C</text>
  <text x="20" y="195" font-size="12" font-weight="bold">A</text>
  <text x="155" y="195" font-size="12" font-weight="bold">B</text>
  <text x="50" y="40" font-size="11">1</text>
</svg>`
  },
  {
    id: 18,
    question: "For the equation $x^2 - 2a = 0$, what value(s) of $a$ will result in an equation with two distinct real roots?",
    options: ["A) $a < -2$", "B) $a > 0$", "C) $a = 0$", "D) $a < 0$"],
    correctAnswer: 1,
    explanation: "For two distinct real roots, $x^2 = 2a \\implies 2a > 0 \\implies a > 0$.",
    category: ""
  },
  {
    id: 19,
    question: "The area of a triangle is found using $A = \\frac{1}{2}bh$, where $b$ is the base and $h$ is the height. Which formula yields the height of a triangle?",
    options: ["A) $h = \\frac{2A}{b}$", "B) $h = \\frac{A}{2b}$", "C) $h = \\frac{AB}{2}$", "D) $h = \\frac{b}{2A}$"],
    correctAnswer: 0,
    explanation: "$A = \\frac{1}{2}bh \\implies 2A = bh \\implies h = \\frac{2A}{b}$.",
    category: ""
  },
  {
    id: 20,
    question: "A ladder is leaning against the side of house. The base of the ladder is $1.50\\text{ ft}$ from the base of a $6.00\\text{ ft}$ tall fence. The fence is $3.00\\text{ ft}$ from, and parallel to, the side of the house. If the ladder touches the top of the fence, how many feet does the ladder reach up the house's side?",
    options: ["A) $18\\text{ ft}$", "B) $19\\text{ ft}$", "C) $20\\text{ ft}$", "D) $21\\text{ ft}$"],
    correctAnswer: 0,
    explanation: "By similar triangles: $\\frac{h}{6.00} = \\frac{1.50 + 3.00}{1.50} = \\frac{4.50}{1.50} = 3 \\implies h = 6.00 \\times 3 = 18\\text{ ft}$.",
    category: "",
    svg: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <line x1="20" y1="150" x2="220" y2="150" stroke="#000" stroke-width="2"/>
  <line x1="50" y1="150" x2="50" y2="20" stroke="#000" stroke-width="2"/>
  <line x1="120" y1="150" x2="120" y2="90" stroke="#000" stroke-width="2"/>
  <line x1="170" y1="150" x2="50" y2="20" stroke="#000" stroke-dasharray="3,3" stroke-width="2"/>
  <text x="25" y="85" font-size="11" font-weight="bold">side of house</text>
  <text x="125" y="85" font-size="11">6.0 ft fence</text>
  <text x="70" y="165" font-size="11">3.0 ft</text>
  <text x="135" y="165" font-size="11">1.5 ft</text>
</svg>`
  },
  {
    id: 21,
    question: "Given $\\Delta BAC \\cong \\Delta FED$, $C$ and $D$ are on $\\overline{AE}$, prove $\\overline{AB} \\parallel \\overline{EF}$. Which is the reason for statement 3?",
    options: [
      "A) If two lines cut by a transversal form a pair of congruent alternate interior angles, then the two lines are parallel.",
      "B) If two lines cut by a transversal form a pair of congruent alternate exterior angles, then the two lines are parallel.",
      "C) Corresponding parts of congruent triangles are congruent.",
      "D) Congruent corresponding sides of congruent triangles are parallel."
    ],
    correctAnswer: 0,
    explanation: "Congruent alternate interior angles formed by a transversal prove lines $\\overline{AB}$ and $\\overline{EF}$ are parallel.",
    category: "",
    svg: `<div class="mb-3">
  <table class="table-auto border-collapse border border-gray-400 w-full max-w-md mb-3 text-center text-xs">
    <thead>
      <tr class="bg-gray-100">
        <th class="border border-gray-400 px-2 py-1">Statements</th>
        <th class="border border-gray-400 px-2 py-1">Reasons</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="border border-gray-400 px-2 py-1">1. ΔBCA ≅ ΔFED</td><td class="border border-gray-400 px-2 py-1">Given</td></tr>
      <tr><td class="border border-gray-400 px-2 py-1">2. ∠BAE ≅ ∠FEA</td><td class="border border-gray-400 px-2 py-1">CPCTC</td></tr>
      <tr><td class="border border-gray-400 px-2 py-1 font-bold">3. AB || EF</td><td class="border border-gray-400 px-2 py-1 font-bold text-indigo-600">______</td></tr>
    </tbody>
  </table>
  <svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-28 w-auto">
    <line x1="20" y1="80" x2="220" y2="80" stroke="#000" stroke-width="2"/>
    <polyline points="20,80 80,20 140,80" fill="none" stroke="#000" stroke-width="2"/>
    <polyline points="100,80 160,110 220,80" fill="none" stroke="#000" stroke-width="2"/>
    <text x="15" y="75" font-size="12" font-weight="bold">A</text>
    <text x="80" y="15" font-size="12" font-weight="bold">B</text>
    <text x="135" y="75" font-size="12" font-weight="bold">C</text>
    <text x="95" y="95" font-size="12" font-weight="bold">D</text>
    <text x="160" y="125" font-size="12" font-weight="bold">F</text>
    <text x="220" y="75" font-size="12" font-weight="bold">E</text>
  </svg>
</div>`
  },
  {
    id: 22,
    question: "The town of Newton purchased a new emergency siren that can be heard within $\\frac{1}{2}\\text{ mile}$ radius. Assuming the square blocks are all the same size, at which corner should the police install the siren so that it is within $\\frac{1}{2}\\text{ mile}$ of any street corner in Newton?",
    options: ["A) Maple and 6th", "B) Maple and 7th", "C) Oak and 6th", "D) Oak and 7th"],
    correctAnswer: 0,
    explanation: "Maple and 6th is centrally located within 2 blocks ($\\frac{1}{2}\\text{ mile}$) of all street corners in Newton.",
    category: "",
    svg: `<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <path d="M 60,30 H 180 V 150 H 60 Z" fill="none" stroke="#000" stroke-width="2"/>
  <path d="M 60,60 H 180 M 60,90 H 180 M 60,120 H 180" stroke="#888" stroke-width="1"/>
  <path d="M 90,30 V 150 M 120,30 V 150 M 150,30 V 150" stroke="#888" stroke-width="1"/>
  <text x="10" y="65" font-size="11" font-weight="bold">Maple</text>
  <text x="10" y="95" font-size="11" font-weight="bold">Oak</text>
  <text x="115" y="165" font-size="11" font-weight="bold">6th</text>
  <text x="145" y="165" font-size="11" font-weight="bold">7th</text>
</svg>`
  },
  {
    id: 23,
    question: "Jade bought $2$ similar cylindrical planters. Both the diameter and height of the larger one were $3$ times that of the smaller one. It took $1\\text{ bag}$ of soil to fill the small planter. How many bags of soil does Jade need to fill the larger planter?",
    options: ["A) $3$", "B) $9$", "C) $10$", "D) $27$"],
    correctAnswer: 3,
    explanation: "Volume ratio $= 3^3 = 27$. So $27$ bags are needed.",
    category: ""
  },
  {
    id: 24,
    question: "Find the difference: $(x^2 + 4x + 4) - (5x^2 - x - 2)$",
    options: ["A) $4x^2 + 3x + 2$", "B) $4x^2 + 3x + 6$", "C) $-4x^2 + 5x + 6$", "D) $-4x^2 + 5x + 2$"],
    correctAnswer: 2,
    explanation: "$(x^2 - 5x^2) + (4x - (-x)) + (4 - (-2)) = -4x^2 + 5x + 6$.",
    category: ""
  },
  {
    id: 25,
    question: "Which of the following expressions is a simplified form of this expression? $(\\sqrt{16x^6})^2(\\sqrt{4x^4})^2$",
    options: ["A) $8x^6$", "B) $64x^{10}$", "C) $64x^{24}$", "D) $4,096x^{20}$"],
    correctAnswer: 1,
    explanation: "$(\\sqrt{16x^6})^2 \\cdot (\\sqrt{4x^4})^2 = (16x^6)(4x^4) = 64x^{10}$.",
    category: ""
  },
  {
    id: 26,
    question: "The equation $d = 16t^2$ models the distance ($d$), in feet, that a free-falling object travels in $t$ seconds. According to this model, how many seconds does it take a free-falling object to travel $162\\text{ ft}$?",
    options: ["A) $\\frac{9}{4}$", "B) $\\frac{9\\sqrt{2}}{2}$", "C) $\\frac{9\\sqrt{2}}{4}$", "D) $\\frac{9\\sqrt{2}}{16}$"],
    correctAnswer: 2,
    explanation: "$162 = 16t^2 \\implies t^2 = \\frac{162}{16} = \\frac{81}{8} \\implies t = \\frac{9}{2\\sqrt{2}} = \\frac{9\\sqrt{2}}{4}$.",
    category: ""
  },
  {
    id: 27,
    question: "Circle $O$ has a radius of $2\\text{ cm}$, and $MNOP$ is a rectangle. Which reason justifies $PN = 2\\text{ cm}$?",
    options: [
      "A) The diagonals of a rectangle are congruent.",
      "B) Both pairs of opposite sides of a rectangle are parallel.",
      "C) The sum of the angles in a rectangle is $360^\\circ$.",
      "D) Pythagorean theorem"
    ],
    correctAnswer: 0,
    explanation: "Diagonal $MO$ is a radius of circle $O$ ($2\\text{ cm}$). Since diagonals of a rectangle are congruent, $PN = MO = 2\\text{ cm}$.",
    category: "",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <circle cx="100" cy="100" r="80" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="20" y1="100" x2="180" y2="100" stroke="#000" stroke-width="1.5"/>
  <line x1="100" y1="20" x2="100" y2="180" stroke="#000" stroke-width="1.5"/>
  <rect x="50" y="60" width="50" height="40" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="50" y1="100" x2="100" y2="60" stroke="#000" stroke-width="1.5"/>
  <text x="40" y="55" font-size="12" font-weight="bold">M</text>
  <text x="105" y="55" font-size="12" font-weight="bold">N</text>
  <text x="105" y="115" font-size="12" font-weight="bold">O</text>
  <text x="40" y="115" font-size="12" font-weight="bold">P</text>
</svg>`
  },
  {
    id: 28,
    question: "If $f(x) = x^2 - 3x - 1$ find $f(-2)$.",
    options: ["A) $-11$", "B) $-3$", "C) $1$", "D) $9$"],
    correctAnswer: 3,
    explanation: "$f(-2) = (-2)^2 - 3(-2) - 1 = 4 + 6 - 1 = 9$.",
    category: ""
  },
  {
    id: 29,
    question: "A function $y = f(x)$, consists of the set of all ordered pairs such that the first member of the ordered pair is $3$ less than $\\frac{1}{2}$ the second member. Which of the following is the graph of this function?",
    options: [
      "A) Line with y-intercept -3 and slope 1/2",
      "B) Line with y-intercept 3 and slope 1/2",
      "C) Line with y-intercept 6 and slope 2",
      "D) Line with y-intercept -6 and slope 2"
    ],
    correctAnswer: 2,
    explanation: "$x = \\frac{1}{2}y - 3 \\implies \\frac{1}{2}y = x + 3 \\implies y = 2x + 6$. The line has y-intercept $(0,6)$ and slope $2$.",
    category: "",
    svg: `<svg viewBox="-6 -2 12 12" width="220" height="220" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
  <line x1="-6" y1="0" x2="6" y2="0" stroke="#888" stroke-width="0.8"/>
  <line x1="0" y1="-2" x2="0" y2="10" stroke="#888" stroke-width="0.8"/>
  <line x1="-4" y1="-2" x2="2" y2="10" stroke="#000" stroke-width="2"/>
  <circle cx="0" cy="6" r="0.3" fill="#000"/>
  <text x="0.5" y="6" font-size="1" font-weight="bold">(0,6)</text>
</svg>`
  },
  {
    id: 30,
    question: "Which set of measurements could be the side lengths of an obtuse triangle?",
    options: [
      "A) $3\\text{ in}, 4\\text{ in}, 4\\text{ in}$",
      "B) $5\\text{ in}, 12\\text{ in}, 13\\text{ in}$",
      "C) $6\\text{ in}, 7\\text{ in}, 12\\text{ in}$",
      "D) $6\\text{ in}, 8\\text{ in}, 9\\text{ in}$"
    ],
    correctAnswer: 2,
    explanation: "An obtuse triangle satisfies $a^2 + b^2 < c^2$. For C: $6^2 + 7^2 = 36 + 49 = 85 < 12^2 = 144$.",
    category: ""
  },
  {
    id: 31,
    question: "What is the equation in slope-intercept form of the line that passes through the point $(2, -2)$ and is perpendicular to the line represented by $y = \\frac{2}{5}x + 2$?",
    options: [
      "A) $y = \\frac{5}{2}x - 7$",
      "B) $y = \\frac{5}{2}x + 7$",
      "C) $y = -\\frac{5}{2}x + 3$",
      "D) $y = -\\frac{5}{2}x - 3$"
    ],
    correctAnswer: 2,
    explanation: "Perpendicular slope $m = -\\frac{5}{2}$. Using point $(2,-2)$: $y - (-2) = -\\frac{5}{2}(x - 2) \\implies y + 2 = -\\frac{5}{2}x + 5 \\implies y = -\\frac{5}{2}x + 3$.",
    category: ""
  },
  {
    id: 32,
    question: "In the circle, $H$ is the center, and $\\overline{XY}$ is tangent to the circle, what is the measure of $\\angle XHY$?",
    options: ["A) $25^\\circ$", "B) $55^\\circ$", "C) $90^\\circ$", "D) $125^\\circ$"],
    correctAnswer: 1,
    explanation: "Tangent is perpendicular to radius at point of tangency: $m\\angle HYX = 90^\\circ$. Interior angle $m\\angle HXY = 180^\\circ - 145^\\circ = 35^\\circ$. In $\\Delta HXY$, $m\\angle XHY = 180^\\circ - (90^\\circ + 35^\\circ) = 55^\\circ$.",
    category: "",
    svg: `<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <circle cx="150" cy="80" r="50" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="30" y1="130" x2="200" y2="130" stroke="#000" stroke-width="2"/>
  <line x1="150" y1="80" x2="150" y2="130" stroke="#000" stroke-width="2"/>
  <line x1="150" y1="80" x2="70" y2="130" stroke="#000" stroke-width="2"/>
  <circle cx="150" cy="80" r="3" fill="#000"/>
  <text x="150" y="70" font-size="12" font-weight="bold">H</text>
  <text x="65" y="145" font-size="12" font-weight="bold">X</text>
  <text x="150" y="145" font-size="12" font-weight="bold">Y</text>
  <text x="35" y="125" font-size="11">145°</text>
</svg>`
  },
  {
    id: 33,
    question: "The graph shows the linear relationship between the maximum area in square feet that can be painted and the number of gallons of paint used. Which of these represents the rate of change of the maximum area painted with respect to the number of gallons of paint used?",
    options: [
      "A) $200\\text{ ft}^2/\\text{gal}$",
      "B) $\\frac{1}{200}\\text{ ft}^2/\\text{gal}$",
      "C) $400\\text{ ft}^2/\\text{gal}$",
      "D) $\\frac{1}{400}\\text{ ft}^2/\\text{gal}$"
    ],
    correctAnswer: 2,
    explanation: "Slope $= \\frac{400 - 0}{1 - 0} = 400\\text{ ft}^2/\\text{gal}$.",
    category: "",
    svg: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <line x1="40" y1="140" x2="210" y2="140" stroke="#000" stroke-width="1.5"/>
  <line x1="40" y1="20" x2="40" y2="140" stroke="#000" stroke-width="1.5"/>
  <line x1="40" y1="140" x2="200" y2="20" stroke="#000" stroke-width="2"/>
  <text x="10" y="15" font-size="10" font-weight="bold">Area Painted (ft²)</text>
  <text x="80" y="160" font-size="10" font-weight="bold">Number of Gallons of Paint</text>
</svg>`
  },
  {
    id: 34,
    question: "Two customers went to a post office to buy postcards and large Envelopes. Each postcard costs the same amount, and a large envelope costs the same amount.\n• The first customer paid $\$12$ for $14$ postcards and $5$ large envelopes.\n• The second customer paid $\$24.80$ for $10$ postcards and $15$ large envelopes.\nWhat was the cost in dollars of each large envelope?",
    options: ["A) $\$1.42$", "B) $\$0.35$", "C) $\$1.15$", "D) $\$0.63$"],
    correctAnswer: 0,
    explanation: "System: $14p + 5e = 12$ and $10p + 15e = 24.80$. Multiply first by $3$: $42p + 15e = 36$. Subtract second: $32p = 11.20 \\implies p = 0.35$. Then $5e = 12 - 14(0.35) = 7.10 \\implies e = \\$1.42$.",
    category: ""
  },
  {
    id: 35,
    question: "Imagine that this net will be folded into a cube. Which color will not be adjacent to the red face?",
    options: ["A) Purple", "B) Green", "C) Blue", "D) Tan"],
    correctAnswer: 2,
    explanation: "When folded into a cube, Blue face is opposite (not adjacent) to the Red face.",
    category: "",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <rect x="70" y="20" width="35" height="35" fill="#f87171" stroke="#000" stroke-width="1.5"/>
  <rect x="70" y="55" width="35" height="35" fill="#fef08a" stroke="#000" stroke-width="1.5"/>
  <rect x="105" y="55" width="35" height="35" fill="#86efac" stroke="#000" stroke-width="1.5"/>
  <rect x="105" y="90" width="35" height="35" fill="#93c5fd" stroke="#000" stroke-width="1.5"/>
  <rect x="140" y="90" width="35" height="35" fill="#fed7aa" stroke="#000" stroke-width="1.5"/>
  <rect x="105" y="125" width="35" height="35" fill="#c084fc" stroke="#000" stroke-width="1.5"/>
  <text x="87" y="42" font-size="10" text-anchor="middle">Red</text>
  <text x="87" y="77" font-size="10" text-anchor="middle">Yellow</text>
  <text x="122" y="77" font-size="10" text-anchor="middle">Green</text>
  <text x="122" y="112" font-size="10" text-anchor="middle">Blue</text>
  <text x="157" y="112" font-size="10" text-anchor="middle">Tan</text>
  <text x="122" y="147" font-size="10" text-anchor="middle">Purple</text>
</svg>`
  },
  {
    id: 36,
    question: "Which function is equivalent to $f(x) = -4(x + 7)^2 - 6$?",
    options: [
      "A) $f(x) = -4x^2 - 56x - 202$",
      "B) $f(x) = -4x^2 + 14x + 43$",
      "C) $f(x) = -4x^2 - 56x - 172$",
      "D) $f(x) = -4x^2 + 190$"
    ],
    correctAnswer: 0,
    explanation: "$-4(x^2 + 14x + 49) - 6 = -4x^2 - 56x - 196 - 6 = -4x^2 - 56x - 202$.",
    category: ""
  },
  {
    id: 37,
    question: "Which expression is a factor of $21x^2 + 13x - 20$?",
    options: ["A) $3x - 4$", "B) $7x - 5$", "C) $7x + 4$", "D) $3x + 5$"],
    correctAnswer: 1,
    explanation: "$21x^2 + 13x - 20 = (3x + 4)(7x - 5)$. Factor is $7x - 5$.",
    category: ""
  },
  {
    id: 38,
    question: "Which set shows the front, right, and top views of this three-dimensional figure?",
    options: ["A) View Set A", "B) View Set B", "C) View Set C", "D) View Set D"],
    correctAnswer: 3,
    explanation: "Option D correctly displays the 2D orthographic projections (front, right, top views).",
    category: "",
    svg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-36 w-auto">
  <path d="M120,40 L160,20 L180,40 L140,60 Z" fill="none" stroke="#000" stroke-width="1.5"/>
  <path d="M120,40 L120,100 L140,120 L140,60 Z" fill="none" stroke="#000" stroke-width="1.5"/>
  <path d="M140,120 L180,100 L180,40 L140,60 Z" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="100" y="110" font-size="10" font-weight="bold">Front</text>
  <text x="185" y="110" font-size="10" font-weight="bold">Right</text>
</svg>`
  },
  {
    id: 39,
    question: "In a sequence of numbers $a_3 = 0$, $a_4 = 6$, $a_5 = 12$, $a_6 = 18$, and $a_7 = 24$. Based on this information, which equation can be used to find $n^{\\text{th}}$ term in the sequence, $a_n$?",
    options: [
      "A) $a_n = -6n + 18$",
      "B) $a_n = -18n + 6$",
      "C) $a_n = 6n - 18$",
      "D) $a_n = 18n - 6$"
    ],
    correctAnswer: 2,
    explanation: "Common difference $d = 6$. Explicit term $a_n = a_3 + (n - 3)d = 0 + (n - 3)(6) = 6n - 18$.",
    category: ""
  },
  {
    id: 40,
    question: "Kayle was cutting right triangles from wood to one of an art project. Two of the right triangles she cut are shown below. If $\\Delta ABC \\sim \\Delta DEF$ with right angle $B$ and $E$, $BC = 15\\text{ cm}$ and $AC = 17\\text{ cm}$. What is the measure of $\\angle F$ to the nearest degree?",
    options: ["A) $28^\\circ$", "B) $41^\\circ$", "C) $62^\\circ$", "D) $88^\\circ$"],
    correctAnswer: 0,
    explanation: "$\\cos C = \\frac{15}{17} \\implies C \\approx 28^\\circ$. Similar triangle gives $m\\angle F = m\\angle C \\approx 28^\\circ$.",
    category: ""
  },
  {
    id: 41,
    question: "Which equation represents the line passing through the points $(3, 2)$ and $(-9, 6)$?",
    options: ["A) $x - 3y = 9$", "B) $x + 3y = 9$", "C) $3x - y = -9$", "D) $3x + y = 9$"],
    correctAnswer: 1,
    explanation: "$x + 3y = 9$.",
    category: ""
  },
  {
    id: 42,
    question: "The graph of linear function $f$ and $g$ are shown on the grid. Which function is best represented by the graph of $g$?",
    options: [
      "A) $g(x) = f(x) - 4$",
      "B) $g(x) = \\frac{1}{3}f(x)$",
      "C) $g(x) = f(x) - 2$",
      "D) $g(x) = 3f(x)$"
    ],
    correctAnswer: 1,
    explanation: "Graph $g$ is vertically compressed relative to $f$ by factor $\\frac{1}{3}$, so $g(x) = \\frac{1}{3}f(x)$.",
    category: "",
    svg: `<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <line x1="20" y1="160" x2="200" y2="160" stroke="#888" stroke-width="1"/>
  <line x1="20" y1="20" x2="20" y2="160" stroke="#888" stroke-width="1"/>
  <line x1="20" y1="160" x2="180" y2="20" stroke="#000" stroke-width="2"/>
  <line x1="20" y1="160" x2="180" y2="110" stroke="#000" stroke-dasharray="4,4" stroke-width="2"/>
  <text x="185" y="25" font-size="12" font-weight="bold">f</text>
  <text x="185" y="115" font-size="12" font-weight="bold">g</text>
</svg>`
  },
  {
    id: 43,
    question: "In the diagram below of $\\Delta ABC$, $\\angle ABC$ is a right angle, $AC = 12$, $AD = 8$ and altitude $\\overline{BD}$ is drawn. What is the length of $\\overline{BC}$?",
    options: ["A) $4\\sqrt{2}$", "B) $4\\sqrt{3}$", "C) $4\\sqrt{5}$", "D) $4\\sqrt{6}$"],
    correctAnswer: 1,
    explanation: "$BC = 4\\sqrt{3}$.",
    category: ""
  },
  {
    id: 44,
    question: "A circle whose center is the origin passes through the point $(-5, 12)$. Which point also lies on the circle?",
    options: ["A) $(10, 3)$", "B) $(-12, 13)$", "C) $(11, 2\\sqrt{12})$", "D) $(-8, 5\\sqrt{21})$"],
    correctAnswer: 2,
    explanation: "$(11, 2\\sqrt{12})$ lies on $x^2 + y^2 = 169$.",
    category: ""
  },
  {
    id: 45,
    question: "What is the contrapositive of the statement below?\n\"If today is Friday, then tomorrow is Saturday\"",
    options: [
      "A) If tomorrow is not Saturday, then today is not Friday.",
      "B) If today is Saturday, then tomorrow is not Friday.",
      "C) If tomorrow is Saturday, then today is Friday.",
      "D) If today is not Friday, then tomorrow is not Saturday."
    ],
    correctAnswer: 0,
    explanation: "Contrapositive of 'If $p$, then $q$' is 'If not $q$, then not $p$'.",
    category: ""
  },
  {
    id: 46,
    question: "Which statement about the graph of $y = 8(0.25)^x$ is true?",
    options: [
      "A) The coordinates of the x-intercept are $(0.25, 0)$",
      "B) The coordinates of the y-intercept are $(0, 8)$",
      "C) The equation of the asymptote is $x = 0$",
      "D) The graph includes the point $(2, 1)$"
    ],
    correctAnswer: 1,
    explanation: "At $x = 0$, $y = 8(0.25)^0 = 8(1) = 8$. So the y-intercept is $(0, 8)$.",
    category: ""
  },
  {
    id: 47,
    question: "Which graph represents a function?",
    options: ["A) Graph A", "B) Graph B", "C) Graph C", "D) Graph D"],
    correctAnswer: 3,
    explanation: "Graph D passes the Vertical Line Test.",
    category: "",
    svg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-36 w-auto">
  <line x1="20" y1="120" x2="180" y2="120" stroke="#888" stroke-width="1"/>
  <line x1="100" y1="20" x2="100" y2="150" stroke="#888" stroke-width="1"/>
  <path d="M 40,30 Q 100,120 160,20" fill="none" stroke="#000" stroke-width="2"/>
  <text x="165" y="25" font-size="12" font-weight="bold">D</text>
</svg>`
  },
  {
    id: 48,
    question: "Two semicircles are congruent and are collinear. How many points and lines of symmetry do they have, if any?",
    options: [
      "A) 1 Point, 2 line",
      "B) 2 point, 1 line",
      "C) 1 point, 1 line",
      "D) 0 point, 0 line"
    ],
    correctAnswer: 0,
    explanation: "Two collinear congruent semicircles possess $1$ point of symmetry (their midpoint) and $2$ lines of symmetry.",
    category: ""
  },
  {
    id: 49,
    question: "In $f(x) = y$, a point with coordinates $x, y$ lies. If the first member of the coordinates lies $3$ less than the second member, which graph represents $f(x)$?",
    options: [
      "A) Line with y-intercept -3",
      "B) Line with x-intercept -3",
      "C) Line with x-intercept 3",
      "D) Line with y-intercept 3 and x-intercept -3"
    ],
    correctAnswer: 3,
    explanation: "$x = y - 3 \\implies y = x + 3$. Line has y-intercept $(0,3)$ and x-intercept $(-3,0)$.",
    category: "",
    svg: `<svg viewBox="-6 -6 12 12" width="200" height="200" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
  <line x1="-6" y1="0" x2="6" y2="0" stroke="#888" stroke-width="0.8"/>
  <line x1="0" y1="-6" x2="0" y2="6" stroke="#888" stroke-width="0.8"/>
  <line x1="-6" y1="-3" x2="3" y2="6" stroke="#000" stroke-width="2"/>
  <text x="0.5" y="3" font-size="1" font-weight="bold">3</text>
  <text x="-3.5" y="-0.5" font-size="1" font-weight="bold">-3</text>
</svg>`
  },
  {
    id: 50,
    question: "Triangle $JGR$ is similar to triangle $MST$. Which statement is not always true?",
    options: [
      "A) $\\angle J \\cong \\angle M$",
      "B) $\\angle G \\cong \\angle T$",
      "C) \\angle R \\cong \\angle T",
      "D) \\angle G \\cong \\angle S"
    ],
    correctAnswer: 1,
    explanation: "$\\angle G \\cong \\angle T$ is not always true.",
    category: ""
  }
];
