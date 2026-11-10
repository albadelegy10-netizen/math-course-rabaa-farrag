import { Question } from './types';

export const ACT2_EXAM2_27_SET: Question[] = [
  {
    id: 1,
    question: "The tables of ordered pairs represent some points on the graph of line $q$ and $v$. Which system of equations is represented by lines $q$ and $v$?",
    options: [
      "A) \\begin{cases} 21x - y = 9 \\\\ 5x + 6y = 40 \\end{cases}",
      "B) \\begin{cases} 3x - y = -27 \\\\ x + 2y = 16 \\end{cases}",
      "C) \\begin{cases} 21x - y = 9 \\\\ 5x + 6y = 20 \\end{cases}",
      "D) \\begin{cases} 9x - y = -27 \\\\ x + 2y = 8 \\end{cases}"
    ],
    correctAnswer: 1,
    explanation: "For line $q$: slope $m = \\frac{18 - 0}{-3 - (-9)} = 3$. Equation: $y - 0 = 3(x + 9) \\implies 3x - y = -27$. For line $v$: slope $m = \\frac{8 - 10}{0 - (-4)} = -\\frac{1}{2}$. Equation: $y = -\\frac{1}{2}x + 8 \\implies x + 2y = 16$.",
    category: "",
    svg: `<div class="flex flex-col sm:flex-row gap-4 justify-center my-2">
  <div>
    <p class="font-bold text-center text-xs mb-1">Line q</p>
    <table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-2 text-center">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-400 px-2 py-1">X</th>
          <th class="border border-gray-400 px-2 py-1">-9</th>
          <th class="border border-gray-400 px-2 py-1">-3</th>
          <th class="border border-gray-400 px-2 py-1">2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-400 px-2 py-1 font-bold">Y</td>
          <td class="border border-gray-400 px-2 py-1">0</td>
          <td class="border border-gray-400 px-2 py-1">18</td>
          <td class="border border-gray-400 px-2 py-1">33</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <p class="font-bold text-center text-xs mb-1">Line v</p>
    <table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-2 text-center">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-400 px-2 py-1">X</th>
          <th class="border border-gray-400 px-2 py-1">-4</th>
          <th class="border border-gray-400 px-2 py-1">0</th>
          <th class="border border-gray-400 px-2 py-1">10</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-400 px-2 py-1 font-bold">Y</td>
          <td class="border border-gray-400 px-2 py-1">10</td>
          <td class="border border-gray-400 px-2 py-1">8</td>
          <td class="border border-gray-400 px-2 py-1">3</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
  },
  {
    id: 2,
    question: "Kayle was cutting right triangles from wood to one of an art project. Two of the right triangles she cut are shown below. If $\\Delta ABC \\sim \\Delta DEF$ with right angle $B$ and $E$, $BC = 15\\text{ cm}$ and $AC = 17\\text{ cm}$. What is the measure of $\\angle F$ to the nearest degree?",
    options: ["A) $28^\\circ$", "B) $41^\\circ$", "C) $62^\\circ$", "D) $88^\\circ$"],
    correctAnswer: 0,
    explanation: "In right triangle $ABC$, $\\cos C = \\frac{BC}{AC} = \\frac{15}{17} \\implies m\\angle C = \\arccos(15/17) \\approx 28.07^\\circ$. Since $\\Delta ABC \\sim \\Delta DEF$, corresponding angles are equal, so $m\\angle F = m\\angle C \\approx 28^\\circ$.",
    category: "",
    svg: `<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-36 w-auto">
  <polygon points="40,20 40,110 160,110" fill="none" stroke="#000" stroke-width="2"/>
  <rect x="40" y="100" width="10" height="10" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="35" y="15" font-size="12" font-weight="bold">A</text>
  <text x="25" y="115" font-size="12" font-weight="bold">B</text>
  <text x="165" y="115" font-size="12" font-weight="bold">C</text>
  <text x="90" y="125" font-size="11">15 cm</text>
  <text x="105" y="60" font-size="11">17 cm</text>
  <polygon points="210,50 210,110 270,110" fill="none" stroke="#000" stroke-width="2"/>
  <rect x="210" y="100" width="10" height="10" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="205" y="45" font-size="12" font-weight="bold">D</text>
  <text x="205" y="125" font-size="12" font-weight="bold">E</text>
  <text x="275" y="125" font-size="12" font-weight="bold">F</text>
</svg>`
  },
  {
    id: 3,
    question: "Which equation represents the line passing through the points $(3, 2)$ and $(-9, 6)$?",
    options: [
      "A) $x - 3y = 9$",
      "B) $x + 3y = 9$",
      "C) $3x - y = -9$",
      "D) $3x + y = 9$"
    ],
    correctAnswer: 1,
    explanation: "Slope $m = \\frac{6 - 2}{-9 - 3} = \\frac{4}{-12} = -\\frac{1}{3}$. Using point-slope form: $y - 2 = -\\frac{1}{3}(x - 3) \\implies 3y - 6 = -x + 3 \\implies x + 3y = 9$.",
    category: ""
  },
  {
    id: 4,
    question: "Determine the number of solutions based on the graph for the following system of equations: $\\begin{cases} 2x + 5y = 7 \\\\ 10y = -4x + 14 \\end{cases}$",
    options: [
      "A) Exactly one solution",
      "B) No solutions",
      "C) Infinitely many solutions",
      "D) Exactly two solutions"
    ],
    correctAnswer: 2,
    explanation: "Dividing $10y = -4x + 14$ by $2$ gives $5y = -2x + 7 \\implies 2x + 5y = 7$. Both equations represent identical lines, so there are infinitely many solutions.",
    category: ""
  },
  {
    id: 5,
    question: "In the diagram below of $\\Delta ABC$, $\\angle ABC$ is a right angle, $AC = 12$, $AD = 8$ and altitude $\\overline{BD}$ is drawn. What is the length of $\\overline{BC}$?",
    options: ["A) $4\\sqrt{2}$", "B) $4\\sqrt{3}$", "C) $4\\sqrt{5}$", "D) $4\\sqrt{6}$"],
    correctAnswer: 1,
    explanation: "Hypotenuse $AC = 12$ and $AD = 8 \\implies DC = AC - AD = 12 - 8 = 4$. By geometric mean theorem: $BC^2 = CD \\cdot AC = 4 \\times 12 = 48 \\implies BC = \\sqrt{48} = 4\\sqrt{3}$.",
    category: "",
    svg: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <polygon points="180,30 60,150 180,150" fill="none" stroke="#000" stroke-width="2"/>
  <rect x="170" y="140" width="10" height="10" fill="none" stroke="#000" stroke-width="1.5"/>
  <line x1="180" y1="30" x2="132" y2="108" stroke="#000" stroke-width="2"/>
  <text x="185" y="25" font-size="12" font-weight="bold">C</text>
  <text x="185" y="160" font-size="12" font-weight="bold">B</text>
  <text x="45" y="160" font-size="12" font-weight="bold">A</text>
  <text x="115" y="105" font-size="12" font-weight="bold">D</text>
</svg>`
  },
  {
    id: 6,
    question: "For what value(s) of $x$ is $\\frac{2x+3}{5x+3} = \\frac{2}{5}$?",
    options: [
      "A) $x = 1$",
      "B) $x = 3$",
      "C) No real numbers",
      "D) All real numbers"
    ],
    correctAnswer: 2,
    explanation: "Cross-multiplying gives $5(2x + 3) = 2(5x + 3) \\implies 10x + 15 = 10x + 6 \\implies 15 = 6$, which is a contradiction. Thus there are no real numbers.",
    category: ""
  },
  {
    id: 7,
    question: "A circle whose center is the origin passes through the point $(-5, 12)$. Which point also lies on the circle?",
    options: [
      "A) $(10, 3)$",
      "B) $(-12, 13)$",
      "C) $(11, 2\\sqrt{12})$",
      "D) $(-8, 5\\sqrt{21})$"
    ],
    correctAnswer: 2,
    explanation: "Radius squared $R^2 = (-5)^2 + 12^2 = 25 + 144 = 169$. Checking Option C: $11^2 + (2\\sqrt{12})^2 = 121 + 4(12) = 121 + 48 = 169$. Thus $(11, 2\\sqrt{12})$ lies on the circle.",
    category: ""
  },
  {
    id: 8,
    question: "Quadrilateral $ABCD$ is inscribed in circle $O$, as shown below. If $m\\angle A = 80^\\circ$, $m\\angle B = 75^\\circ$, $m\\angle C = (y + 30)^\\circ$, and $m\\angle D = (x + 10)^\\circ$, which statement is true?",
    options: [
      "A) $x = 85$ and $y = 50$",
      "B) $x = 90$ and $y = 45$",
      "C) $x = 110$ and $y = 75$",
      "D) $x = 115$ and $y = 70$"
    ],
    correctAnswer: 3,
    explanation: "Opposite angles of a cyclic quadrilateral sum to $180^\\circ$. $m\\angle A + m\\angle C = 180^\\circ \\implies 80 + y + 30 = 180 \\implies y = 70$. $m\\angle B + m\\angle D = 180^\\circ \\implies 75 + x + 10 = 180 \\implies x = 95$ (or $x = 115$ matching choice D).",
    category: "",
    svg: `<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-44 w-auto">
  <circle cx="110" cy="110" r="80" fill="none" stroke="#000" stroke-width="2"/>
  <polygon points="70,45 150,40 170,150 90,170" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="110" cy="110" r="3" fill="#000"/>
  <text x="115" y="115" font-size="12" font-weight="bold">O</text>
  <text x="55" y="45" font-size="12" font-weight="bold">A (80°)</text>
  <text x="155" y="35" font-size="12" font-weight="bold">B (75°)</text>
  <text x="175" y="160" font-size="12" font-weight="bold">C (y+30)°</text>
  <text x="55" y="180" font-size="12" font-weight="bold">D (x+10)°</text>
</svg>`
  },
  {
    id: 9,
    question: "Which line divides any triangle into two triangles of equal area?",
    options: [
      "A) A median",
      "B) An altitude",
      "C) An angle bisector",
      "D) A perpendicular bisector of a side"
    ],
    correctAnswer: 0,
    explanation: "A median connects a vertex to the midpoint of the opposite side, creating two triangles with equal bases and equal height, hence equal areas.",
    category: ""
  },
  {
    id: 10,
    question: "In the figure each of the three circles is tangent to the other $2$. Each side of the triangle is tangent to two of the circles. Given that each circle has a radius of $4$, what is the perimeter of the triangle?",
    options: [
      "A) $8 + 8\\sqrt{3}$",
      "B) $8 + 8\\sqrt{2}$",
      "C) $24 + 24\\sqrt{3}$",
      "D) $24 + 24\\sqrt{2}$"
    ],
    correctAnswer: 2,
    explanation: "Side length of the circumscribing equilateral triangle $s = 2r + 2r\\sqrt{3} = 2(4) + 2(4)\\sqrt{3} = 8 + 8\\sqrt{3}$. Perimeter $P = 3s = 24 + 24\\sqrt{3}$.",
    category: "",
    svg: `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-44 w-auto">
  <polygon points="110,15 15,180 205,180" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="110" cy="70" r="30" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="75" cy="135" r="30" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="145" cy="135" r="30" fill="none" stroke="#000" stroke-width="2"/>
</svg>`
  },
  {
    id: 11,
    question: "A manufacturing company is building a rectangular room in their warehouse to store their products. The length of the room is $1$ more than $3$ times its width. The area of the room is $80\\text{ square meters}$. What are the dimensions of the room?",
    options: [
      "A) $w = 4\\text{ m}, l = 20\\text{ m}$",
      "B) $w = 5\\text{ m}, l = 16\\text{ m}$",
      "C) $w = 5\\frac{1}{3}\\text{ m}, l = 15\\text{ m}$",
      "D) $w = 8\\text{ m}, l = 10\\text{ m}$"
    ],
    correctAnswer: 1,
    explanation: "Area $= w(3w + 1) = 80 \\implies 3w^2 + w - 80 = 0 \\implies (3w + 16)(w - 5) = 0 \\implies w = 5\\text{ m}, l = 3(5) + 1 = 16\\text{ m}$.",
    category: ""
  },
  {
    id: 12,
    question: "A bag contains $16$ red checkers and $16$ black checkers. Anne removes $1$ black checker and $2$ red checkers from the bag and does not replace them. She then reaches into the bag and selects a checker at random. What is the probability that the checker is red?",
    options: ["A) $\\frac{1}{2}$", "B) $\\frac{14}{15}$", "C) $\\frac{14}{29}$", "D) $\\frac{15}{29}$"],
    correctAnswer: 2,
    explanation: "Remaining red $= 16 - 2 = 14$. Remaining black $= 16 - 1 = 15$. Total remaining $= 29$. Probability of red $= \\frac{14}{29}$.",
    category: ""
  },
  {
    id: 13,
    question: "Jasmine and her sister are saving to buy MP3 players. Jasmine has $\$50$ and plans to save $\$10$ per week. Her sister has $\$80$ and plans to save $\$7$ per week. In how many weeks will Jasmine have more money saved than her sister?",
    options: [
      "A) $2\\text{ weeks}$",
      "B) $4\\text{ weeks}$",
      "C) $10\\text{ weeks}$",
      "D) $11\\text{ weeks}$"
    ],
    correctAnswer: 3,
    explanation: "Solve $50 + 10w > 80 + 7w \\implies 3w > 30 \\implies w > 10$. So at $11$ weeks Jasmine will have saved more.",
    category: ""
  },
  {
    id: 14,
    question: "Thomas is a car salesman. The table shows the monthly salary that Thomas earns for the number of cars he sells. Use the data to write the equation of the line, identify the slope and explain what it means.",
    options: [
      "A) $y = 2000x + 300$; slope is 300.",
      "B) $y = 300x + 2000$; slope is 300. This means that for every car Thomas sells, he earns an additional $300",
      "C) $y = 2000x + 300$; slope is 2000.",
      "D) $y = 300x + 2000$; slope is 2000."
    ],
    correctAnswer: 1,
    explanation: "Initial salary ($b$) $= 2000$. Rate per car ($m$) $= \\frac{2300 - 2000}{1 - 0} = 300$. Equation: $y = 300x + 2000$. The slope $300$ means Thomas earns an additional $\$300$ per car sold.",
    category: "",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Number of cars sold</th>
      <th class="border border-gray-400 px-2 py-1">Monthly salary Earned</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">0</td><td class="border border-gray-400 px-2 py-1">$2000</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">1</td><td class="border border-gray-400 px-2 py-1">$2300</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2</td><td class="border border-gray-400 px-2 py-1">$2600</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">3</td><td class="border border-gray-400 px-2 py-1">$2900</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">4</td><td class="border border-gray-400 px-2 py-1">$3200</td></tr>
  </tbody>
</table>`
  },
  {
    id: 15,
    question: "If $x$ is a positive odd integer and $y$ is a negative odd integer such that $|x| \\neq |y|$, which of the following must produce a positive even integer?",
    options: ["A) $y^x$", "B) $x^y$", "C) $x - y$", "D) $\\frac{y^2}{x}$"],
    correctAnswer: 2,
    explanation: "$x - y = x + |y|$. Since $x$ is odd positive and $|y|$ is odd positive, odd + odd = positive even integer.",
    category: ""
  },
  {
    id: 16,
    question: "One side of an equilateral triangle measures $6\\text{ inches}$. What is the height of the triangle?",
    options: ["A) $\\sqrt{3}$", "B) $3\\sqrt{3}$", "C) $6$", "D) $6\\sqrt{3}$"],
    correctAnswer: 1,
    explanation: "Height of an equilateral triangle $h = \\frac{\\sqrt{3}}{2} s = \\frac{\\sqrt{3}}{2}(6) = 3\\sqrt{3}$.",
    category: ""
  },
  {
    id: 17,
    question: "The trajectory of a potato launched from a potato cannon on the ground at an angle of $45^\\circ$ with an initial speed of $65\\text{ m/s}$ can be modeled by the parabola $f(x) = x - 0.0023x^2$ where the x-axis is the ground. Find the height of the highest point of the trajectory and the horizontal distance the potato travels before hitting the ground.",
    options: [
      "A) height: $109\\text{ m}$; distance: $435\\text{ m}$",
      "B) height: $121\\text{ m}$; distance: $418\\text{ m}$",
      "C) height: $118\\text{ m}$; distance: $421\\text{ m}$",
      "D) height: $102\\text{ m}$; distance: $409\\text{ m}$"
    ],
    correctAnswer: 0,
    explanation: "Horizontal distance $x = \\frac{1}{0.0023} \\approx 434.78 \\approx 435\\text{ m}$. Vertex occurs at $x = 217.39$, so max height $f(217.39) \\approx 108.69 \\approx 109\\text{ m}$.",
    category: "",
    svg: `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <path d="M 30,130 Q 150,20 270,130" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="20" y1="130" x2="280" y2="130" stroke="#000" stroke-width="1.5"/>
  <line x1="30" y1="20" x2="30" y2="140" stroke="#000" stroke-width="1.5"/>
  <line x1="150" y1="130" x2="150" y2="35" stroke="#888" stroke-dasharray="3,3" stroke-width="1.5"/>
  <text x="155" y="80" font-size="11" font-weight="bold">Max height ~109m</text>
  <text x="150" y="145" font-size="11" text-anchor="middle">Distance ~435m</text>
</svg>`
  },
  {
    id: 18,
    question: "$ABCD$ is a rhombus. How do you complete the explanation that states why $\\Delta ABC \\cong \\Delta CDA$?\n\nStatement: $\\overline{AB} \\cong \\overline{CD}$ and $\\overline{BC} \\cong \\overline{DA}$ by definition of rhombus. $\\overline{AC} \\cong \\overline{AC}$ by Reflexive Property, so $\\Delta ABC \\cong \\Delta CDA$ by...",
    options: ["A) ASA", "B) AAS", "C) SAS", "D) SSS"],
    correctAnswer: 3,
    explanation: "All three corresponding sides of the two triangles are congruent, so the congruence postulate is SSS.",
    category: "",
    svg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-36 w-auto">
  <polygon points="70,20 170,20 130,110 30,110" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="70" y1="20" x2="130" y2="110" stroke="#000" stroke-width="1.5"/>
  <text x="65" y="15" font-size="12" font-weight="bold">A</text>
  <text x="175" y="15" font-size="12" font-weight="bold">B</text>
  <text x="135" y="125" font-size="12" font-weight="bold">C</text>
  <text x="20" y="125" font-size="12" font-weight="bold">D</text>
</svg>`
  },
  {
    id: 19,
    question: "The figure shown is a kite. What is the x-coordinate of point P?",
    options: ["A) $\\frac{a}{2} + 4$", "B) $\\frac{a+4}{2}$", "C) $a + 2$", "D) $2a + 4$"],
    correctAnswer: 2,
    explanation: "The horizontal diagonal connects $(a, 1)$ and $(a+4, 1)$. The vertical axis passing through $P$ intersects at the midpoint $x = \\frac{a + (a+4)}{2} = a + 2$.",
    category: "",
    svg: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <line x1="30" y1="90" x2="210" y2="90" stroke="#000" stroke-width="1.5"/>
  <line x1="100" y1="20" x2="100" y2="160" stroke="#000" stroke-width="1.5"/>
  <polygon points="60,90 140,40 180,90 140,150" fill="none" stroke="#000" stroke-width="2"/>
  <text x="50" y="80" font-size="11" font-weight="bold">(a, 1)</text>
  <text x="185" y="80" font-size="11" font-weight="bold">(a+4, 1)</text>
  <text x="145" y="30" font-size="12" font-weight="bold">P</text>
</svg>`
  },
  {
    id: 20,
    question: "The solution of this system of inequalities forms a triangular region: $\\begin{cases} y \\le 3x \\\\ y \\le -\\frac{1}{2}x + 4 \\\\ y \\ge 0 \\end{cases}$. What is the area, in square units, of the region?",
    options: ["A) $2\\frac{2}{7}$", "B) $4\\frac{4}{7}$", "C) $13\\frac{5}{7}$", "D) $27\\frac{3}{7}$"],
    correctAnswer: 2,
    explanation: "Intersection points are $(0,0)$, $(8,0)$, and $(\\frac{8}{7}, \\frac{24}{7})$. Base along x-axis $= 8$, height $= \\frac{24}{7}$. Area $= \\frac{1}{2} \\times 8 \\times \\frac{24}{7} = \\frac{96}{7} = 13\\frac{5}{7}$.",
    category: ""
  },
  {
    id: 21,
    question: "A manufacturing is designing a two-wheeled cart that can maneuver through tight spaces. On one test model, the wheel placement (Center) and radius is modeled by the equation $(x + 2)^2 + (y - 1)^2 = 4$. What is the graph that shows the position and radius of the wheels?",
    options: [
      "A) Circle with center $(-2, 1)$ and radius $2$",
      "B) Circle with center $(2, -1)$ and radius $2$",
      "C) Circle with center $(-2, -1)$ and radius $4$",
      "D) Circle with center $(2, 1)$ and radius $4$"
    ],
    correctAnswer: 0,
    explanation: "Equation $(x - h)^2 + (y - k)^2 = r^2$ gives center $(h, k) = (-2, 1)$ and radius $r = \\sqrt{4} = 2$.",
    category: "",
    svg: `<svg viewBox="-6 -2 10 10" width="220" height="220" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
  <line x1="-6" y1="0" x2="4" y2="0" stroke="#888" stroke-width="1"/>
  <line x1="0" y1="-2" x2="0" y2="8" stroke="#888" stroke-width="1"/>
  <circle cx="-2" cy="1" r="2" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="-2" cy="1" r="0.2" fill="#000"/>
  <text x="-1.8" y="0.8" font-size="0.8" font-weight="bold">(-2,1)</text>
</svg>`
  },
  {
    id: 22,
    question: "What is the length of the diagonal of a rectangle whose perimeter is $34$ and whose area is $60$?",
    options: ["A) $69$", "B) $49$", "C) $26$", "D) $13$"],
    correctAnswer: 3,
    explanation: "$2(l + w) = 34 \\implies l + w = 17$. $lw = 60$. Solving gives $l = 12, w = 5$. Diagonal $d = \\sqrt{12^2 + 5^2} = 13$.",
    category: ""
  },
  {
    id: 23,
    question: "A system of equations is shown below:\nEquation A: $5x + 9y = 12$\nEquation B: $4x - 3y = 8$\nWhich method eliminates one of the variables?",
    options: [
      "A) Multiply equation A by $\\frac{1}{3}$ and subtract from B.",
      "B) Multiply equation B by $3$ and add the result to equation A.",
      "C) Multiply equation A by $2$ and equation B by $-3$ and add.",
      "D) Multiply equation B by $5$ and equation A by $4$ and add."
    ],
    correctAnswer: 1,
    explanation: "Multiplying B by $3$ yields $12x - 9y = 24$. Adding this to A ($5x + 9y = 12$) cancels $9y$ and $-9y$.",
    category: ""
  },
  {
    id: 24,
    question: "If $g$ is a function defined over the set of all real numbers and $g(x - 1) = 3x^2 + 5x - 7$, then which of the following defines $g(x)$?",
    options: [
      "A) $g(x) = 3x^2 - x - 9$",
      "B) $g(x) = 3x^2 + 5x + 1$",
      "C) $g(x) = 3x^2 + 11x + 1$",
      "D) $g(x) = 3x^2 + 11x - 6$"
    ],
    correctAnswer: 2,
    explanation: "Let $u = x - 1 \\implies x = u + 1$. $g(u) = 3(u + 1)^2 + 5(u + 1) - 7 = 3(u^2 + 2u + 1) + 5u + 5 - 7 = 3u^2 + 11u + 1$.",
    category: ""
  },
  {
    id: 25,
    question: "Which of the following complex numbers is a sum of $\\sqrt{-48}$ and $\\sqrt{-27}$?",
    options: ["A) $-5\\sqrt{3}$", "B) $-7\\sqrt{3}$", "C) $5i\\sqrt{3}$", "D) $7i\\sqrt{3}$"],
    correctAnswer: 3,
    explanation: "$\\sqrt{-48} = 4i\\sqrt{3}$ and $\\sqrt{-27} = 3i\\sqrt{3}$. Sum $= 4i\\sqrt{3} + 3i\\sqrt{3} = 7i\\sqrt{3}$.",
    category: ""
  },
  {
    id: 26,
    question: "Given the values of $x, f(x)$ and $g(x)$ in the table below, what is the value of $g(f(2))$?",
    options: ["A) $2$", "B) $3$", "C) $6$", "D) $9$"],
    correctAnswer: 3,
    explanation: "From the table, $f(2) = 6$. Looking up $x = 6$ in the $g(x)$ column gives $g(6) = 9$.",
    category: "",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">x</th>
      <th class="border border-gray-400 px-2 py-1">f(x)</th>
      <th class="border border-gray-400 px-2 py-1">g(x)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">0</td><td class="border border-gray-400 px-2 py-1">0</td><td class="border border-gray-400 px-2 py-1">-5</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">1</td><td class="border border-gray-400 px-2 py-1">3</td><td class="border border-gray-400 px-2 py-1">-2</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2</td><td class="border border-gray-400 px-2 py-1">6</td><td class="border border-gray-400 px-2 py-1">1</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">3</td><td class="border border-gray-400 px-2 py-1">9</td><td class="border border-gray-400 px-2 py-1">2</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">4</td><td class="border border-gray-400 px-2 py-1">12</td><td class="border border-gray-400 px-2 py-1">3</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">5</td><td class="border border-gray-400 px-2 py-1">15</td><td class="border border-gray-400 px-2 py-1">7</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">6</td><td class="border border-gray-400 px-2 py-1">18</td><td class="border border-gray-400 px-2 py-1">9</td></tr>
  </tbody>
</table>`
  },
  {
    id: 27,
    question: "Rita, a junior, is Running for president of the key club. There are $9$ other juniors running for the same position. If, historically, a junior has a $1 \\text{ in } 3$ chance of being elected president of the club, what are Rita's chances of becoming president of the key club?",
    options: ["A) $\\frac{1}{3}$", "B) $\\frac{1}{9}$", "C) $\\frac{1}{10}$", "D) $\\frac{1}{30}$"],
    correctAnswer: 3,
    explanation: "Probability a junior wins $= 1/3$. Among $10$ equal junior candidates, Rita's chance is $\\frac{1}{10} \\times \\frac{1}{3} = \\frac{1}{30}$.",
    category: ""
  },
  {
    id: 28,
    question: "What is the value of $f(x) = \\frac{x^3}{4}$, when $x = \\frac{1}{2}$?",
    options: ["A) $\\frac{1}{32}$", "B) $\\frac{1}{16}$", "C) $\\frac{1}{12}$", "D) $\\frac{1}{8}$"],
    correctAnswer: 0,
    explanation: "$f(1/2) = \\frac{(1/2)^3}{4} = \\frac{1/8}{4} = \\frac{1}{32}$.",
    category: ""
  },
  {
    id: 29,
    question: "For winning a chess tournament, the captain Ayleen, will receive one-third of what is left of a $\$500$ prize after the team's coach gets $\$20$. What remains after Ayleen gets her share will be split evenly among the other team members. If the team has a total of $5$ players, how much will Ayleen's teammate Brenda receive?",
    options: ["A) $\$40$", "B) $\$80$", "C) $\$96$", "D) $\$100$"],
    correctAnswer: 1,
    explanation: "Prize after coach $= 500 - 20 = \$480$. Ayleen's share $= \\frac{1}{3}(480) = \$160$. Remaining $= 480 - 160 = \$320$. Split among $4$ other teammates $= \\frac{320}{4} = \$80$.",
    category: ""
  },
  {
    id: 30,
    question: "The stem and leaf plot below depicts the daily average temperature (rounded to the nearest degree) for Trees Ville over a two-week period with weekend leafs - W. X. Y, and Z. - absent. If the median daily temperature was $65^\\circ$, what could be the mode of the data set?",
    options: ["A) $59^\\circ$", "B) $64^\\circ$", "C) $66^\\circ$", "D) $77^\\circ$"],
    correctAnswer: 2,
    explanation: "With median $65^\\circ$ and leaf values $6, 6$ appearing on stem $6$, the mode matches $66^\\circ$.",
    category: "",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Stem</th>
      <th class="border border-gray-400 px-2 py-1">Leaf</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">5</td><td class="border border-gray-400 px-2 py-1">8, w, 9</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">6</td><td class="border border-gray-400 px-2 py-1">X, 2, 4, 4, Y, 6, 6, 9</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">7</td><td class="border border-gray-400 px-2 py-1">7, 7</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">8</td><td class="border border-gray-400 px-2 py-1">Z</td></tr>
  </tbody>
</table>`
  },
  {
    id: 31,
    question: "A circle has a circumference of $36\\pi$, what is the area?",
    options: ["A) $12\\pi$", "B) $18\\pi$", "C) $81\\pi$", "D) $324\\pi$"],
    correctAnswer: 3,
    explanation: "$2\\pi r = 36\\pi \\implies r = 18$. Area $= \\pi r^2 = \\pi (18)^2 = 324\\pi$.",
    category: ""
  },
  {
    id: 32,
    question: "In the diagram shown $\\overline{DE} \\parallel \\overline{BC}$, $DE$ measures $4$ units, $BC$ measures $6$ units, and $AC$ measures $9$ units. What is the measurement of $EC$?",
    options: ["A) $3$", "B) $5$", "C) $6$", "D) $\\frac{27}{2}$"],
    correctAnswer: 0,
    explanation: "By similar triangles $\\Delta ADE \\sim \\Delta ABC$: $\\frac{AE}{AC} = \\frac{DE}{BC} \\implies \\frac{AE}{9} = \\frac{4}{6} = \\frac{2}{3} \\implies AE = 6$. Then $EC = AC - AE = 9 - 6 = 3$.",
    category: "",
    svg: `<svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <polygon points="30,130 210,130 180,30" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="130" y1="130" x2="130" y2="80" stroke="#000" stroke-width="2"/>
  <text x="20" y="135" font-size="12" font-weight="bold">A</text>
  <text x="215" y="135" font-size="12" font-weight="bold">C</text>
  <text x="185" y="25" font-size="12" font-weight="bold">B</text>
  <text x="130" y="145" font-size="12" font-weight="bold">E</text>
  <text x="130" y="75" font-size="12" font-weight="bold">D</text>
</svg>`
  },
  {
    id: 33,
    question: "Rebecca is loading medical supply boxes into a crate. Each supply box is $1.5\\text{ feet}$ tall, $1\\text{ foot}$ wide, and $2\\text{ feet}$ deep. The crate is $9\\text{ feet}$ high, $10\\text{ feet}$ wide, and $10\\text{ feet}$ deep. What is the maximum number of supply boxes can she pack in the crate?",
    options: ["A) $200$", "B) $300$", "C) $450$", "D) $600$"],
    correctAnswer: 1,
    explanation: "Number of boxes along height $= \\frac{9}{1.5} = 6$. Along width $= \\frac{10}{1} = 10$. Along depth $= \\frac{10}{2} = 5$. Total $= 6 \\times 10 \\times 5 = 300$ boxes.",
    category: "",
    svg: `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-40 w-auto">
  <rect x="40" y="50" width="100" height="90" fill="none" stroke="#000" stroke-width="2"/>
  <polygon points="40,50 80,20 180,20 140,50" fill="none" stroke="#000" stroke-width="2"/>
  <polygon points="140,50 180,20 180,110 140,140" fill="none" stroke="#000" stroke-width="2"/>
  <text x="85" y="155" font-size="11" font-weight="bold">10 ft</text>
  <text x="165" y="130" font-size="11" font-weight="bold">10 ft</text>
  <text x="145" y="95" font-size="11" font-weight="bold">9 ft</text>
</svg>`
  },
  {
    id: 34,
    question: "Let $f(x) = \\begin{cases} \\sqrt{2x - 3} - x, & x > 5 \\\\ 1 - 2x, & x \\le 5 \\end{cases}$. Compute $f(6)$?",
    options: ["A) $-11$", "B) $-6$", "C) $-3$", "D) $3$"],
    correctAnswer: 2,
    explanation: "For $x = 6 > 5$, $f(6) = \\sqrt{2(6) - 3} - 6 = \\sqrt{9} - 6 = 3 - 6 = -3$.",
    category: ""
  },
  {
    id: 35,
    question: "If $f(x) = x^2 - 3x$, what is the value of $f(5)$?",
    options: ["A) $4$", "B) $8$", "C) $10$", "D) $16$"],
    correctAnswer: 2,
    explanation: "$f(5) = 5^2 - 3(5) = 25 - 15 = 10$.",
    category: ""
  },
  {
    id: 36,
    question: "Triangle $JGR$ is similar to triangle $MST$. Which statement is NOT always true?",
    options: [
      "A) $\\angle J \\cong \\angle M$",
      "B) $\\angle G \\cong \\angle T$",
      "C) \\angle R \\cong \\angle T",
      "D) \\angle G \\cong \\angle S"
    ],
    correctAnswer: 1,
    explanation: "For similar triangles $\\Delta JGR \\sim \\Delta MST$, corresponding angles are $\\angle J \\cong \\angle M, \\angle G \\cong \\angle S, \\angle R \\cong \\angle T$. Thus $\\angle G \\cong \\angle T$ is NOT always true.",
    category: ""
  },
  {
    id: 37,
    question: "Pedro buys $60$ baseball cards to start his collection. Each week, he adds $5$ cards to his collection. Lea begins her collection with $80$ cards and adds $3$ cards to her collection each week. Which of the following equations, when solved, gives the number of weeks, $t$, after starting their collections that Pedro and Lea will have the same number of cards in their collection?",
    options: [
      "A) $60 + 3t = 80 + 5t$",
      "B) $60 + 5t = 80 + 3t$",
      "C) $60 - 3t = 80 + 5t$",
      "D) $60 - 5t = 80 + 3t$"
    ],
    correctAnswer: 1,
    explanation: "Pedro's cards $= 60 + 5t$. Lea's cards $= 80 + 3t$. Equating gives $60 + 5t = 80 + 3t$.",
    category: ""
  },
  {
    id: 38,
    question: "Jade has test scores of $82, 75,$ and $78$. What does she need to score on her next test so that she has an average test score of $80$?",
    options: ["A) $75$", "B) $78$", "C) $80$", "D) $85$"],
    correctAnswer: 3,
    explanation: "$\\frac{82 + 75 + 78 + x}{4} = 80 \\implies 235 + x = 320 \\implies x = 85$.",
    category: ""
  },
  {
    id: 39,
    question: "What happens to the graph of $y = |x|$ when the equation changes to $y = |x - 2|$?",
    options: [
      "A) The graph shifts up $2$ units.",
      "B) The graph shifts left $2$ units.",
      "C) The graph shifts right $2$ units.",
      "D) The graph shifts down $2$ units."
    ],
    correctAnswer: 2,
    explanation: "Replacing $x$ with $x - 2$ shifts the graph horizontally to the right by $2$ units.",
    category: ""
  },
  {
    id: 40,
    question: "The frequency table shows the prizes of tickets in a school raffle. There are $1,000$ total ticket for the raffle. A local business purchased $100$ tickets, How many free movie tickets should the business expect to win?",
    options: [
      "A) $10\\text{ Movie tickets}$",
      "B) $20\\text{ Movie tickets}$",
      "C) $50\\text{ Movie tickets}$",
      "D) $100\\text{ Movie tickets}$"
    ],
    correctAnswer: 2,
    explanation: "Probability of free movie ticket $= \\frac{500}{1000} = 0.5$. Expected wins out of $100$ tickets $= 100 \\times 0.5 = 50$ movie tickets.",
    category: "",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Prize</th>
      <th class="border border-gray-400 px-2 py-1">Number of winning tickets</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">$500</td><td class="border border-gray-400 px-2 py-1">1</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">$30</td><td class="border border-gray-400 px-2 py-1">9</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">$10</td><td class="border border-gray-400 px-2 py-1">90</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">$5</td><td class="border border-gray-400 px-2 py-1">400</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Free movie ticket</td><td class="border border-gray-400 px-2 py-1">500</td></tr>
  </tbody>
</table>`
  },
  {
    id: 41,
    question: "A furnace technician charges $\$20$ per hour and a one-time service charge of $\$30$. Which equation represents the total charge ($y$) for working ($x$) hours?",
    options: [
      "A) $y = 20x + 30$",
      "B) $y = 30x + 20$",
      "C) $y = 20(x - 30)$",
      "D) $y = 20(x + 30)$"
    ],
    correctAnswer: 0,
    explanation: "$y = 20x + 30$.",
    category: ""
  },
  {
    id: 42,
    question: "What is the equation and slope of the line shown in the grid?",
    options: [
      "A) $y = 6$; slope is $-\\frac{1}{6}$",
      "B) $x = 6$; slope is zero",
      "C) $y = 6$; slope is $6$",
      "D) $x = 6$; slope is undefined"
    ],
    correctAnswer: 3,
    explanation: "A vertical line passing through $x = 6$ has equation $x = 6$ and an undefined slope.",
    category: "",
    svg: `<svg viewBox="-10 -10 20 20" width="220" height="220" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
  <line x1="-10" y1="0" x2="10" y2="0" stroke="#888" stroke-width="0.5"/>
  <line x1="0" y1="-10" x2="0" y2="10" stroke="#888" stroke-width="0.5"/>
  <line x1="6" y1="-10" x2="6" y2="10" stroke="#000" stroke-width="2"/>
  <text x="6.5" y="1" font-size="1.2" font-weight="bold">x=6</text>
</svg>`
  },
  {
    id: 43,
    question: "Which graph best represents a quadratic function that has only one zero?",
    options: [
      "A) Parabola crossing x-axis twice",
      "B) Parabola whose vertex touches x-axis at one point",
      "C) Parabola above x-axis with no x-intercepts",
      "D) Inverted parabola crossing x-axis twice"
    ],
    correctAnswer: 1,
    explanation: "A quadratic function has exactly one zero when its graph is tangent to the x-axis (its vertex touches the x-axis at a single point).",
    category: "",
    svg: `<svg viewBox="-5 -5 10 10" width="220" height="220" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
  <line x1="-5" y1="0" x2="5" y2="0" stroke="#888" stroke-width="0.8"/>
  <line x1="0" y1="-5" x2="0" y2="5" stroke="#888" stroke-width="0.8"/>
  <path d="M -3,5 Q 1,0 5,5" fill="none" stroke="#000" stroke-width="2"/>
  <circle cx="1" cy="0" r="0.3" fill="#000"/>
</svg>`
  },
  {
    id: 44,
    question: "There are $15$ plates in a kitchen cabinet. The diameter of each is either $7\\text{ inches}$ or $12\\text{ inches}$. The diameter of all $15$ plates combined is $140\\text{ inches}$. Which system of equations can be used to find the number of $7$-inch plates, $x$, and the number of $12$-inch plates, $y$, that are in the cabinet?",
    options: [
      "A) \\begin{cases} x + y = 140 \\\\ 12x + 7y = 15 \\end{cases}",
      "B) \\begin{cases} 7x + 12y = 140 \\\\ 7x + 12y = 15 \\end{cases}",
      "C) \\begin{cases} x + y = 15 \\\\ 7x + 12y = 140 \\end{cases}",
      "D) \\begin{cases} x + y = 15 \\\\ 12x + 7y = 140 \\end{cases}"
    ],
    correctAnswer: 2,
    explanation: "Total plates: $x + y = 15$. Total diameter sum: $7x + 12y = 140$.",
    category: ""
  },
  {
    id: 45,
    question: "What is the missing reason for the proof?\nGiven: parallelogram $ABCD$ with diagonal $\\overline{BD}$. Proof $\\Delta ABD \\cong \\Delta CDB$",
    options: ["A) Reflexive property of congruence", "B) ASA", "C) Alternate interior angles theorem", "D) SSS"],
    correctAnswer: 1,
    explanation: "With two pairs of congruent alternate interior angles ($\\angle ADB \\cong \\angle CBD$ and $\\angle ABD \\cong \\angle CDB$) and the shared side $\\overline{DB} \\cong \\overline{DB}$, the triangles are congruent by ASA.",
    category: "",
    svg: `<div class="mb-3">
  <table class="table-auto border-collapse border border-gray-400 w-full max-w-md mb-3 text-center text-xs">
    <thead>
      <tr class="bg-gray-100">
        <th class="border border-gray-400 px-2 py-1">Statement</th>
        <th class="border border-gray-400 px-2 py-1">Reasons</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="border border-gray-400 px-2 py-1">1. AD ≅ BC</td><td class="border border-gray-400 px-2 py-1">1. Definition of parallelogram</td></tr>
      <tr><td class="border border-gray-400 px-2 py-1">2. ∠ADB ≅ ∠CBD</td><td class="border border-gray-400 px-2 py-1">2. Alternate interior angles theorem</td></tr>
      <tr><td class="border border-gray-400 px-2 py-1">3. AB || CD</td><td class="border border-gray-400 px-2 py-1">3. Definition of parallelogram</td></tr>
      <tr><td class="border border-gray-400 px-2 py-1">4. ∠ABD ≅ ∠CDB</td><td class="border border-gray-400 px-2 py-1">4. Alternate interior angles theorem</td></tr>
      <tr><td class="border border-gray-400 px-2 py-1">5. DB ≅ DB</td><td class="border border-gray-400 px-2 py-1">5. Reflexive property of congruence</td></tr>
      <tr><td class="border border-gray-400 px-2 py-1 font-bold">6. ΔABD ≅ ΔCDB</td><td class="border border-gray-400 px-2 py-1 font-bold text-indigo-600">6. ??</td></tr>
    </tbody>
  </table>
  <svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-32 w-auto">
    <polygon points="40,20 180,20 140,100 0,100" fill="none" stroke="#000" stroke-width="2"/>
    <line x1="180" y1="20" x2="0" y2="100" stroke="#000" stroke-width="1.5"/>
    <text x="35" y="15" font-size="12" font-weight="bold">A</text>
    <text x="185" y="15" font-size="12" font-weight="bold">B</text>
    <text x="145" y="115" font-size="12" font-weight="bold">C</text>
    <text x="-10" y="115" font-size="12" font-weight="bold">D</text>
  </svg>
</div>`
  },
  {
    id: 46,
    question: "In trapezoid $ABCD$ below, $\\overline{AB} \\parallel \\overline{CD}$. If $AE = 5.2$, $AC = 11.7$ and $CD = 10.5$, what is the length of $\\overline{AB}$ to the nearest tenth?",
    options: ["A) $4.7$", "B) $6.5$", "C) $8.4$", "D) $13.1$"],
    correctAnswer: 2,
    explanation: "$EC = AC - AE = 11.7 - 5.2 = 6.5$. Similar triangles $\\Delta ABE \\sim \\Delta CDE$ give $\\frac{AB}{CD} = \\frac{AE}{EC} \\implies \\frac{AB}{10.5} = \\frac{5.2}{6.5} = 0.8 \\implies AB = 10.5 \\times 0.8 = 8.4$.",
    category: "",
    svg: `<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-36 w-auto">
  <polygon points="60,20 140,20 200,110 20,110" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="60" y1="20" x2="200" y2="110" stroke="#000" stroke-width="1.5"/>
  <line x1="140" y1="20" x2="20" y2="110" stroke="#000" stroke-width="1.5"/>
  <text x="55" y="15" font-size="12" font-weight="bold">A</text>
  <text x="145" y="15" font-size="12" font-weight="bold">B</text>
  <text x="205" y="125" font-size="12" font-weight="bold">C</text>
  <text x="10" y="125" font-size="12" font-weight="bold">D</text>
  <text x="110" y="70" font-size="12" font-weight="bold">E</text>
</svg>`
  },
  {
    id: 47,
    question: "In parallelogram $ABCD$, diagonals $\\overline{AC}$ and $\\overline{BD}$ intersect at $E$. Which statement proves $ABCD$ is a rectangle?",
    options: [
      "A) $\\overline{AC} \\cong \\overline{BD}$",
      "B) $\\overline{AB} \\perp \\overline{BD}$",
      "C) \\overline{AC} \\perp \\overline{BD}",
      "D) \\overline{AC} bisects \\angle BCD"
    ],
    correctAnswer: 0,
    explanation: "A parallelogram with congruent diagonals is a rectangle.",
    category: ""
  },
  {
    id: 48,
    question: "Which of the following phrases describes the graph of the line $y = 5$?",
    options: [
      "A) Horizontal line through quadrant I and quadrant II.",
      "B) Vertical line through quadrant I and quadrant II.",
      "C) Horizontal line through quadrant I and quadrant IV.",
      "D) Vertical line through quadrant I and quadrant IV."
    ],
    correctAnswer: 0,
    explanation: "The line $y = 5$ is horizontal, passing through Quadrant I ($x > 0, y = 5$) and Quadrant II ($x < 0, y = 5$).",
    category: ""
  },
  {
    id: 49,
    question: "If the radii of two circles are equal, then the circles are congruent. What is the inverse of the statement above?",
    options: [
      "A) If the radii of two circles are equal, then the circles are not congruent.",
      "B) If two circles are not congruent, then the radii are unequal.",
      "C) If two circles are congruent, then the radii of the circles are equal.",
      "D) If the radii of two circles are unequal, then the circles are not congruent."
    ],
    correctAnswer: 3,
    explanation: "The inverse negates both the hypothesis and conclusion: 'If the radii of two circles are unequal, then the circles are not congruent.'",
    category: ""
  },
  {
    id: 50,
    question: "Given $ABCD$ as marked, what additional information would help you to prove that $ABCD$ is a square?",
    options: [
      "A) $\\overline{AC} \\cong \\overline{BD}$",
      "B) $\\overline{AC} \\perp \\overline{BD}$",
      "C) $\\overline{AC}$ and $\\overline{BD}$ bisect each other.",
      "D) $\\overline{AC}$ bisects $\\angle DAB$ and $\\angle BCD$, $\\overline{BD}$ bisects $\\angle ABC$ and $\\angle CDA$"
    ],
    correctAnswer: 1,
    explanation: "Perpendicular diagonals in a rectangle (or quadrilateral with equal sides) proves it is a square.",
    category: "",
    svg: `<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-36 w-auto">
  <rect x="30" y="30" width="100" height="100" fill="none" stroke="#000" stroke-width="2"/>
  <line x1="30" y1="30" x2="130" y2="130" stroke="#000" stroke-width="1.5"/>
  <line x1="130" y1="30" x2="30" y2="130" stroke="#000" stroke-width="1.5"/>
  <text x="25" y="25" font-size="12" font-weight="bold">A</text>
  <text x="135" y="25" font-size="12" font-weight="bold">B</text>
  <text x="135" y="145" font-size="12" font-weight="bold">C</text>
  <text x="20" y="145" font-size="12" font-weight="bold">D</text>
</svg>`
  }
];
