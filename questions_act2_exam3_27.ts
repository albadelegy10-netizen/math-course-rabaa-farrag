import { Question } from './types';

export const ACT2_EXAM3_27_SET: Question[] = [
  {
    id: 'act2_ex3_q1',
    question: 'Find the value of $x$ in the circle shown below:',
    options: ['54', '540', '360', '45'],
    correctAnswer: 3,
    explanation: 'By the Intersecting Chords Theorem, the products of the segments of intersecting chords are equal:\n$$30 \\cdot 18 = 12 \\cdot x$$\n$$540 = 12x \\implies x = 45$$',
    category: '',
    svg: `<svg viewBox="0 0 250 250" class="mx-auto h-48 w-auto">
  <circle cx="125" cy="125" r="90" fill="none" stroke="black" stroke-width="2" />
  <line x1="55" y1="70" x2="195" y2="180" stroke="black" stroke-width="2" />
  <line x1="60" y1="175" x2="190" y2="70" stroke="black" stroke-width="2" />
  <text x="85" y="100" font-size="14" font-weight="bold">30</text>
  <text x="155" y="100" font-size="14" font-weight="bold">12</text>
  <text x="95" y="150" font-size="14" font-weight="bold">x</text>
  <text x="150" y="150" font-size="14" font-weight="bold">18</text>
</svg>`
  },
  {
    id: 'act2_ex3_q2',
    question: 'Factorize $4x^3 y^2 (2y^4 x + 6x^3 y^7)$:',
    options: [
      '$8x^3 y^8 + 24x^9 y^{14}$',
      '$8x^4 y^6 + 24x^6 y^9$',
      '$6x^4 y^6 + 10x^6 y^9$',
      '$6x^3 y^8 + 10x^9 y^{14}$'
    ],
    correctAnswer: 1,
    explanation: 'Expand the term by distributing $4x^3 y^2$ across the terms inside the parentheses:\n$$4x^3 y^2 \\cdot 2y^4 x + 4x^3 y^2 \\cdot 6x^3 y^7 = 8x^4 y^6 + 24x^6 y^9$$',
    category: ''
  },
  {
    id: 'act2_ex3_q3',
    question: 'What is the minimum number of points required to uniquely define a plane?',
    options: ['4', '3', '2', '1'],
    correctAnswer: 1,
    explanation: 'In geometry, exactly 3 non-collinear points uniquely determine a single plane.',
    category: ''
  },
  {
    id: 'act2_ex3_q4',
    question: 'If $-3x + 7 < 16$, which of the following must be true?',
    options: ['$x > -3$', '$x < -3$', '$x < -9$', '$x > -9$'],
    correctAnswer: 0,
    explanation: 'Subtract 7 from both sides:\n$$-3x < 9$$\nDivide by $-3$ (and flip the inequality sign):\n$$x > -3$$',
    category: ''
  },
  {
    id: 'act2_ex3_q5',
    question: 'What are the solution(s) to the equation $5|x - 2| + 1 = 16$?',
    options: ['$x = 3$ only', '$x = 5$ only', '$x = 5$ and $x = 3$', '$x = 5$ and $x = -1$'],
    correctAnswer: 3,
    explanation: 'Isolate the absolute value term:\n$$5|x - 2| = 15 \\implies |x - 2| = 3$$\nSet up the two linear equations:\n1) $x - 2 = 3 \\implies x = 5$\n2) $x - 2 = -3 \\implies x = -1$',
    category: ''
  },
  {
    id: 'act2_ex3_q6',
    question: 'Find the volume of the right triangular prism shown below:',
    options: ['100', '120', '240', '480'],
    correctAnswer: 1,
    explanation: 'The base of the prism is a right triangle with hypotenuse 17 and vertical leg 8. The missing horizontal leg $b$ is:\n$$b = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$$\nArea of the triangular base:\n$$\\text{Area} = \\frac{1}{2} \\times 15 \\times 8 = 60$$\nVolume of the prism:\n$$\\text{Volume} = \\text{Base Area} \\times \\text{depth} = 60 \\times 2 = 120$$',
    category: '',
    svg: `<svg viewBox="0 0 320 200" class="mx-auto h-48 w-auto">
  <polygon points="50,150 220,150 250,50 80,50" fill="none" stroke="black" stroke-width="1.5" stroke-dasharray="4" />
  <polygon points="50,150 220,150 220,60" fill="none" stroke="black" stroke-width="2" />
  <polygon points="80,50 250,50 220,60" fill="none" stroke="black" stroke-width="2" />
  <line x1="50" y1="150" x2="80" y2="50" stroke="black" stroke-width="2" />
  <line x1="220" y1="150" x2="250" y2="50" stroke="black" stroke-width="2" />
  <line x1="220" y1="60" x2="250" y2="50" stroke="black" stroke-width="2" />
  <rect x="210" y="60" width="10" height="10" fill="none" stroke="black" />
  <text x="135" y="168" font-size="14" font-weight="bold">17</text>
  <text x="230" y="105" font-size="14" font-weight="bold">8</text>
  <text x="150" y="45" font-size="14" font-weight="bold">15</text>
  <text x="240" y="50" font-size="14" font-weight="bold">2</text>
</svg>`
  },
  {
    id: 'act2_ex3_q7',
    question: 'Find the perimeter of the figure below, bounded by the coordinate axes and the line $y = 2x + 4$ forming a quarter circle sector:',
    options: ['$\\pi \\sqrt{5}$', '6', '$6 + \\pi \\sqrt{5}$', '$\\frac{5}{2}\\pi + 4$'],
    correctAnswer: 2,
    explanation: 'The line $y = 2x + 4$ has $y$-intercept at $(0,4)$ and $x$-intercept at $(-2,0)$. The straight sides along the axes measure 2 units and 4 units (total straight perimeter $= 2 + 4 = 6$).\nThe radius of the circular arc is $r = \\sqrt{(-2)^2 + 4^2} = \\sqrt{20} = 2\\sqrt{5}$.\nThe arc length of the quarter circle is:\n$$\\text{Arc} = \\frac{1}{4} (2\\pi r) = \\frac{\\pi (2\\sqrt{5})}{2} = \\pi \\sqrt{5}$$\nTotal perimeter $= 6 + \\pi \\sqrt{5}$.',
    category: '',
    svg: `<svg viewBox="0 0 250 220" class="mx-auto h-48 w-auto">
  <line x1="20" y1="160" x2="230" y2="160" stroke="black" stroke-width="2" />
  <line x1="160" y1="20" x2="160" y2="200" stroke="black" stroke-width="2" />
  <line x1="60" y1="210" x2="210" y2="20" stroke="black" stroke-width="1.5" />
  <path d="M 80 160 A 80 80 0 0 1 160 80 L 160 160 Z" fill="gray" opacity="0.6" stroke="black" stroke-width="2" />
  <text x="165" y="30" font-size="12" font-weight="bold">y</text>
  <text x="220" y="150" font-size="12" font-weight="bold">x</text>
  <text x="65" y="190" font-size="12">y = 2x + 4</text>
</svg>`
  },
  {
    id: 'act2_ex3_q8',
    question: 'In the $30^\\circ-60^\\circ-90^\\circ$ right triangle shown below, find the value of $x$:',
    options: ['$9\\sqrt{3}$', '4.5', '18', '9'],
    correctAnswer: 0,
    explanation: 'In a $30^\\circ-60^\\circ-90^\\circ$ right triangle, the side opposite the $30^\\circ$ angle is $a = 9$. The side opposite the $60^\\circ$ angle is:\n$$x = a\\sqrt{3} = 9\\sqrt{3}$$',
    category: '',
    svg: `<svg viewBox="0 0 260 180" class="mx-auto h-48 w-auto">
  <polygon points="50,30 50,150 220,150" fill="none" stroke="black" stroke-width="2" />
  <rect x="50" y="135" width="15" height="15" fill="none" stroke="black" />
  <text x="30" y="95" font-size="14" font-weight="bold">9</text>
  <text x="130" y="170" font-size="14" font-weight="bold">x</text>
  <text x="60" y="55" font-size="12">60°</text>
  <text x="175" y="145" font-size="12">30°</text>
</svg>`
  },
  {
    id: 'act2_ex3_q9',
    question: 'A rectangle has a length that is 6 units more than double its width. If the area of this rectangle is 80, find the length of the rectangle.',
    options: ['8', '16', '40', '80'],
    correctAnswer: 1,
    explanation: 'Let $w$ be the width. The length is $l = 2w + 6$.\n$$\\text{Area} = w(2w + 6) = 80$$\n$$2w^2 + 6w - 80 = 0 \\implies w^2 + 3w - 40 = 0$$\n$$(w + 8)(w - 5) = 0 \\implies w = 5$$\nSubstitute $w = 5$ to find the length:\n$$l = 2(5) + 6 = 16$$',
    category: ''
  },
  {
    id: 'act2_ex3_q10',
    question: 'You have 5 strawberry donuts, 6 chocolate donuts, 3 glazed donuts, and 4 caramel donuts. If you choose a donut randomly, what is the probability that it is strawberry?',
    options: ['$\\frac{2}{9}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{5}{18}$'],
    correctAnswer: 3,
    explanation: 'Total number of donuts $= 5 + 6 + 3 + 4 = 18$.\nNumber of strawberry donuts $= 5$.\n$$P(\\text{strawberry}) = \\frac{5}{18}$$',
    category: ''
  },
  {
    id: 'act2_ex3_q11',
    question: 'What kind of triangle is triangle $ABC$ shown in the figure below?',
    options: ['Acute triangle', 'Obtuse triangle', 'Right triangle', 'Isosceles triangle'],
    correctAnswer: 2,
    explanation: 'In the figure, altitude $CD = 12$ splits the base $AB$ into $AD = 4$ and $BD = 3$, giving side lengths $BC = 13$ and $AC = \\sqrt{160}$. Testing angle $\\angle ACB$ confirms it is a Right triangle.',
    category: '',
    svg: `<svg viewBox="0 0 250 200" class="mx-auto h-48 w-auto">
  <polygon points="170,30 50,170 210,170" fill="none" stroke="black" stroke-width="2" />
  <line x1="170" y1="30" x2="170" y2="170" stroke="black" stroke-width="1.5" stroke-dasharray="4" />
  <rect x="160" y="160" width="10" height="10" fill="none" stroke="black" />
  <text x="175" y="25" font-size="14" font-weight="bold">C</text>
  <text x="155" y="100" font-size="14" font-weight="bold">12</text>
  <text x="195" y="100" font-size="14" font-weight="bold">13</text>
  <text x="35" y="175" font-size="14" font-weight="bold">B</text>
  <text x="105" y="165" font-size="14" font-weight="bold">3</text>
  <text x="170" y="185" font-size="14" font-weight="bold">D</text>
  <text x="185" y="165" font-size="14" font-weight="bold">4</text>
  <text x="220" y="175" font-size="14" font-weight="bold">A</text>
</svg>`
  },
  {
    id: 'act2_ex3_q12',
    question: 'The triangle below is an isosceles triangle with equal legs. Find the value of $x$:',
    options: ['$x = 154$', '$x = 7$', '$x = 22$', '$x = 34$'],
    correctAnswer: 2,
    explanation: 'Since the two legs are marked as equal, the two base angles are also equal, each measuring $(3x + 13)^\\circ$.\nThe sum of interior angles in a triangle is $180^\\circ$:\n$$x + 2(3x + 13) = 180$$\n$$x + 6x + 26 = 180 \\implies 7x = 154 \\implies x = 22$$',
    category: '',
    svg: `<svg viewBox="0 0 220 200" class="mx-auto h-48 w-auto">
  <polygon points="110,30 40,170 180,170" fill="none" stroke="black" stroke-width="2" />
  <line x1="70" y1="95" x2="80" y2="105" stroke="black" stroke-width="2" />
  <line x1="150" y1="95" x2="140" y2="105" stroke="black" stroke-width="2" />
  <text x="105" y="55" font-size="14" font-weight="bold">x°</text>
  <text x="45" y="160" font-size="12" font-weight="bold">(3x+13)°</text>
</svg>`
  },
  {
    id: 'act2_ex3_q13',
    question: 'A initial population of 6 rabbits doubles every year. How many rabbits will there be in the population after 10 years?',
    options: ['12', '1200', '6144', '1024'],
    correctAnswer: 2,
    explanation: 'Exponential growth model for doubling every year:\n$$N = N_0 \\cdot 2^t = 6 \\cdot 2^{10} = 6 \\cdot 1024 = 6144$$',
    category: ''
  },
  {
    id: 'act2_ex3_q14',
    question: 'Solve the compound inequality: $2x - 8 \\le x - 4 < 3(x + 6)$',
    options: ['$-11 < x < 4$', '$-11 > x > 4$', '$-11 < x \\le 4$', '$-11 \\le x < 4$'],
    correctAnswer: 2,
    explanation: 'Solve the two parts separately:\n1) $2x - 8 \\le x - 4 \\implies x \\le 4$\n2) $x - 4 < 3x + 18 \\implies -22 < 2x \\implies x > -11$\nCombining both gives: $-11 < x \\le 4$.',
    category: ''
  },
  {
    id: 'act2_ex3_q15',
    question: 'If the volume of a cube is equal to 2 times its total surface area, what is the side length $s$ of the cube?',
    options: ['$s = -12$', '$s = 12$', '$s = -6$', '$s = 6$'],
    correctAnswer: 1,
    explanation: 'Volume of cube $= s^3$. Total surface area of cube $= 6s^2$.\n$$s^3 = 2(6s^2) = 12s^2$$\nDividing by $s^2$ (since $s > 0$):\n$$s = 12$$',
    category: ''
  },
  {
    id: 'act2_ex3_q16',
    question: 'In the figure below, two tangents are drawn to a circle from an external point forming an angle $x^\\circ$. If the central angle subtended by the points of tangency is $130^\\circ$, find the value of $x$:',
    options: ['$x = 20^\\circ$', '$x = 50^\\circ$', '$x = 90^\\circ$', '$x = 130^\\circ$'],
    correctAnswer: 1,
    explanation: 'The quadrilateral formed by the center, the two points of tangency, and the external point has two right angles ($90^\\circ$) at the points of tangency. Therefore, the central angle and the external angle between the tangents are supplementary:\n$$x + 130^\\circ = 180^\\circ \\implies x = 50^\\circ$$',
    category: '',
    svg: `<svg viewBox="0 0 250 200" class="mx-auto h-48 w-auto">
  <circle cx="160" cy="100" r="50" fill="none" stroke="black" stroke-width="2" />
  <line x1="50" y1="100" x2="160" y2="51" stroke="black" stroke-width="2" />
  <line x1="50" y1="100" x2="160" y2="149" stroke="black" stroke-width="2" />
  <line x1="160" y1="100" x2="160" y2="51" stroke="black" stroke-width="1.5" />
  <line x1="160" y1="100" x2="160" y2="149" stroke="black" stroke-width="1.5" />
  <path d="M 145 80 A 25 25 0 0 1 145 120" fill="none" stroke="black" stroke-width="1.5" />
  <text x="120" y="105" font-size="12">130°</text>
  <text x="65" y="105" font-size="12" font-weight="bold">x°</text>
</svg>`
  },
  {
    id: 'act2_ex3_q17',
    question: 'Two parallel lines are intersected by a transversal, forming consecutive interior angles measuring $x^2$ degrees and $3x$ degrees. Solve for $x$:',
    options: ['45', '180', '15', '12'],
    correctAnswer: 3,
    explanation: 'Consecutive interior angles formed by parallel lines cut by a transversal are supplementary (sum to $180^\\circ$):\n$$x^2 + 3x = 180 \\implies x^2 + 3x - 180 = 0$$\n$$(x + 15)(x - 12) = 0$$\nSince an angle measure must be positive, $x = 12$.',
    category: '',
    svg: `<svg viewBox="0 0 250 180" class="mx-auto h-48 w-auto">
  <line x1="30" y1="60" x2="220" y2="60" stroke="black" stroke-width="2" />
  <line x1="30" y1="140" x2="220" y2="140" stroke="black" stroke-width="2" />
  <line x1="80" y1="20" x2="170" y2="170" stroke="black" stroke-width="2" />
  <text x="125" y="80" font-size="14" font-weight="bold">x²</text>
  <text x="110" y="130" font-size="14" font-weight="bold">3x</text>
</svg>`
  },
  {
    id: 'act2_ex3_q18',
    question: 'Solve for $x$: $2(x + 4) = 10$',
    options: ['3', '-1', '1', '2'],
    correctAnswer: 2,
    explanation: 'Divide both sides by 2:\n$$x + 4 = 5 \\implies x = 1$$',
    category: ''
  },
  {
    id: 'act2_ex3_q19',
    question: 'Find the coordinates of point $P$ where the two diagonals of the rectangle with vertices $(-5,3)$, $(5,3)$, $(-6,-4)$, and $(4,-4)$ intersect:',
    options: ['$(-1,-1)$', '$(1,1)$', '$\\left(-\\frac{1}{2}, -\\frac{1}{2}\\right)$', '$\\left(\\frac{1}{2}, \\frac{1}{2}\\right)$'],
    correctAnswer: 2,
    explanation: 'The intersection of the diagonals of a parallelogram/quadrilateral is the midpoint of either diagonal. Using endpoints $(-5,3)$ and $(4,-4)$:\n$$M = \\left(\\frac{-5 + 4}{2}, \\frac{3 + (-4)}{2}\\right) = \\left(-\\frac{1}{2}, -\\frac{1}{2}\\right)$$',
    category: '',
    svg: `<svg viewBox="0 0 260 200" class="mx-auto h-48 w-auto">
  <polygon points="60,40 200,40 220,160 40,160" fill="none" stroke="black" stroke-width="2" />
  <line x1="60" y1="40" x2="220" y2="160" stroke="black" stroke-width="1.5" />
  <line x1="200" y1="40" x2="40" y2="160" stroke="black" stroke-width="1.5" />
  <circle cx="130" cy="100" r="4" fill="black" />
  <text x="135" y="95" font-size="14" font-weight="bold">P</text>
  <text x="25" y="35" font-size="12">(-5,3)</text>
  <text x="205" y="35" font-size="12">(5,3)</text>
  <text x="10" y="175" font-size="12">(-6,-4)</text>
  <text x="220" y="175" font-size="12">(4,-4)</text>
</svg>`
  },
  {
    id: 'act2_ex3_q20',
    question: 'Which line segment always divides any triangle into two triangles of equal area?',
    options: ['A median', 'An altitude', 'An angle bisector', 'A perpendicular bisector of a side'],
    correctAnswer: 0,
    explanation: 'A median connects a vertex to the midpoint of the opposite side. Both resulting smaller triangles share the same height and have equal bases, so their areas are equal.',
    category: ''
  },
  {
    id: 'act2_ex3_q21',
    question: 'In a college with 14,000 students, 490 students are majoring in mathematics. What percentage of the student body do the mathematics majors represent?',
    options: ['0.0035%', '0.035%', '0.35%', '3.5%'],
    correctAnswer: 3,
    explanation: 'Calculate the ratio and convert to percentage:\n$$\\text{Percentage} = \\frac{490}{14000} \\times 100\\% = 0.035 \\times 100\\% = 3.5\\%$$',
    category: ''
  },
  {
    id: 'act2_ex3_q22',
    question: 'Given that $\\cos^2 x = \\frac{5}{12}$, what is the value of $\\sin^2 x$?',
    options: ['$\\frac{5}{13}$', '$\\frac{7}{12}$', '$\\frac{5}{7}$', '$\\frac{12}{5}$'],
    correctAnswer: 1,
    explanation: 'Use the Pythagorean identity $\\sin^2 x + \\cos^2 x = 1$:\n$$\\sin^2 x = 1 - \\cos^2 x = 1 - \\frac{5}{12} = \\frac{7}{12}$$',
    category: ''
  },
  {
    id: 'act2_ex3_q23',
    question: 'Michael constructed two parallel lines intersected by a transversal. Which of the following statements is a valid conjecture Michael can make about the resulting angles?',
    options: [
      'Pairs of same-side interior angles are supplementary.',
      'Pairs of alternate interior angles are supplementary.',
      'Pairs of alternate exterior angles are supplementary.',
      'Pairs of corresponding angles are supplementary.'
    ],
    correctAnswer: 0,
    explanation: 'When parallel lines are cut by a transversal, same-side (consecutive) interior angles add up to $180^\\circ$ (supplementary). Alternate interior, alternate exterior, and corresponding angle pairs are congruent.',
    category: ''
  },
  {
    id: 'act2_ex3_q24',
    question: 'The endpoints of directed line segment $PQ$ are $P(-7,-5)$ and $Q(5,3)$. What are the coordinates of point $A$ on $PQ$ that divides $PQ$ in the ratio $1 : 3$?',
    options: ['$A(-1,1)$', '$A(2,1)$', '$A(3,2)$', '$A(-4,-3)$'],
    correctAnswer: 3,
    explanation: 'Use the section formula for ratio $1 : 3$ (where $m=1, n=3$):\n$$x_A = \\frac{3(-7) + 1(5)}{1 + 3} = \\frac{-21 + 5}{4} = \\frac{-16}{4} = -4$$\n$$y_A = \\frac{3(-5) + 1(3)}{1 + 3} = \\frac{-15 + 3}{4} = \\frac{-12}{4} = -3$$\nSo $A = (-4, -3)$.',
    category: ''
  },
  {
    id: 'act2_ex3_q25',
    question: 'Zahra spent $\$20.50$ on 10 party favors for her party. Puzzle books cost $\$1.75$ each for boys, and magic tricks cost $\$2.25$ each for girls. How many boys and girls attended the party?',
    options: ['4 boys and 6 girls', '5 boys and 5 girls', '6 boys and 4 girls', '7 boys and 3 girls'],
    correctAnswer: 0,
    explanation: 'Let $b$ be the number of boys and $g$ be the number of girls. $g = 10 - b$.\n$$1.75b + 2.25(10 - b) = 20.50$$\n$$22.50 - 0.50b = 20.50 \\implies 0.50b = 2.00 \\implies b = 4$$\nSo there are 4 boys and 6 girls.',
    category: ''
  },
  {
    id: 'act2_ex3_q26',
    question: 'John is comparing two sales job offers. Company ABC offers a base salary of $\$45,000$. Company XYZ offers $\$38,000$ plus a $2\\%$ commission on sales. For what total sales amount ($X$) is the salary at XYZ greater than ABC?',
    options: ['$X > 7,000$', '$X > 35,000$', '$X > 70,000$', '$X > 350,000$'],
    correctAnswer: 3,
    explanation: 'Set up the inequality:\n$$38000 + 0.02X > 45000$$\n$$0.02X > 7000 \\implies X > \\frac{7000}{0.02} = 350,000$$',
    category: ''
  },
  {
    id: 'act2_ex3_q27',
    question: 'Write an equation for the line with $y$-intercept 2 that is perpendicular to the line $3x + y = 6$:',
    options: [
      '$y = -3x + 2$',
      '$y = -3x - 2$',
      '$y = \\frac{1}{3}x + 2$',
      '$y = \\frac{1}{3}x - 2$'
    ],
    correctAnswer: 2,
    explanation: 'Rewrite $3x + y = 6$ as $y = -3x + 6$. Its slope is $m_1 = -3$.\nThe perpendicular slope is $m_2 = -\\frac{1}{-3} = \\frac{1}{3}$.\nWith $y$-intercept $c = 2$, the line equation is $y = \\frac{1}{3}x + 2$.',
    category: ''
  },
  {
    id: 'act2_ex3_q28',
    question: 'Which compound inequality is represented by the shaded line segment between 2 and 8 on the number line below?',
    options: [
      '$x \\ge 2$ and $x \\le 8$',
      '$x \\ge 2$ or $x \\ge 8$',
      '$x \\ge 2$ or $x \\le 8$',
      '$x \\le 2$ or $x \\le 8$'
    ],
    correctAnswer: 0,
    explanation: 'The graph shows solid endpoints at 2 and 8 with the segment in between shaded, representing the intersection $x \\ge 2$ and $x \\le 8$ (or $2 \\le x \\le 8$).',
    category: '',
    svg: `<svg viewBox="0 0 300 80" class="mx-auto h-24 w-auto">
  <line x1="20" y1="40" x2="280" y2="40" stroke="black" stroke-width="2" />
  <!-- Ticks -->
  <line x1="40" y1="35" x2="40" y2="45" stroke="black" stroke-width="1.5" /><text x="37" y="60" font-size="12">0</text>
  <line x1="80" y1="35" x2="80" y2="45" stroke="black" stroke-width="1.5" /><text x="77" y="60" font-size="12">2</text>
  <line x1="140" y1="35" x2="140" y2="45" stroke="black" stroke-width="1.5" /><text x="137" y="60" font-size="12">5</text>
  <line x1="200" y1="35" x2="200" y2="45" stroke="black" stroke-width="1.5" /><text x="197" y="60" font-size="12">8</text>
  <line x1="240" y1="35" x2="240" y2="45" stroke="black" stroke-width="1.5" /><text x="235" y="60" font-size="12">10</text>
  <!-- Shaded segment -->
  <line x1="80" y1="40" x2="200" y2="40" stroke="black" stroke-width="5" />
  <circle cx="80" cy="40" r="5" fill="black" />
  <circle cx="200" cy="40" r="5" fill="black" />
</svg>`
  },
  {
    id: 'act2_ex3_q29',
    question: 'Big Sky Mountain charges $\$5$ per hour plus $\$50$ insurance. Powder Hills charges $\$10$ per hour plus $\$30$ insurance. For how many hours of lessons is the total cost identical at both resorts?',
    options: ['3 hours', '4 hours', '5 hours', '6 hours'],
    correctAnswer: 1,
    explanation: 'Set the cost equations equal:\n$$5h + 50 = 10h + 30$$\n$$20 = 5h \\implies h = 4\\text{ hours}$$',
    category: ''
  },
  {
    id: 'act2_ex3_q30',
    question: 'Find the intersection of set $W = \\{0, 1, 2, 3, \\dots\\}$ (whole numbers) and set $P = \\{\\dots, -2, -1, 1, 2, 3, \\dots\\}$ (nonzero integers):',
    options: ['$\\{\\}$', '$\\{0\\}$', 'The set of negative integers', 'The set of positive integers'],
    correctAnswer: 3,
    explanation: 'Whole numbers are non-negative integers $\\{0, 1, 2, 3, \\dots\\}$. Nonzero integers exclude 0. Their intersection is $\\{1, 2, 3, \\dots\\}$, which is the set of positive integers.',
    category: ''
  },
  {
    id: 'act2_ex3_q31',
    question: 'In the figure below, line $FAD$ is parallel to line $EHC$. If $m\\angle FAB = 48^\\circ$ and $m\\angle ECB = 18^\\circ$, find $m\\angle ABC$:',
    options: ['$18^\\circ$', '$48^\\circ$', '$66^\\circ$', '$114^\\circ$'],
    correctAnswer: 2,
    explanation: 'Drawing a parallel auxiliary line through $B$ parallel to lines $FAD$ and $EHC$ splits $\\angle ABC$ into two alternate interior angles:\n$$m\\angle ABC = m\\angle FAB + m\\angle ECB = 48^\\circ + 18^\\circ = 66^\\circ$$',
    category: '',
    svg: `<svg viewBox="0 0 280 180" class="mx-auto h-48 w-auto">
  <line x1="30" y1="40" x2="250" y2="40" stroke="black" stroke-width="2" />
  <line x1="30" y1="140" x2="250" y2="140" stroke="black" stroke-width="2" />
  <line x1="80" y1="40" x2="130" y2="90" stroke="black" stroke-width="2" />
  <line x1="130" y1="90" x2="200" y2="140" stroke="black" stroke-width="2" />
  <text x="75" y="30" font-size="12" font-weight="bold">A</text>
  <text x="125" y="105" font-size="12" font-weight="bold">B</text>
  <text x="200" y="155" font-size="12" font-weight="bold">C</text>
  <text x="50" y="55" font-size="12">48°</text>
  <text x="170" y="135" font-size="12">18°</text>
</svg>`
  },
  {
    id: 'act2_ex3_q32',
    question: 'A carton holds $X$ eggs. Employees have $E$ eggs to pack. Using the formula $\\frac{E}{X} = C + \\frac{3}{X}$, solve for $C$, the number of full cartons packed:',
    options: [
      '$C = \\frac{E - 3}{X}$',
      '$C = \\frac{E}{X} - 3$',
      '$C = \\frac{E}{X - 3}$',
      '$C = 3 - \\frac{E}{X}$'
    ],
    correctAnswer: 0,
    explanation: 'Subtract $\\frac{3}{X}$ from both sides:\n$$C = \\frac{E}{X} - \\frac{3}{X} = \\frac{E - 3}{X}$$',
    category: ''
  },
  {
    id: 'act2_ex3_q33',
    question: 'In the identity $4x^2 + ax = 2x(2x + 1)$, what is the value of $a$?',
    options: ['2', '4', '6', '8'],
    correctAnswer: 0,
    explanation: 'Expand the right-hand side:\n$$2x(2x + 1) = 4x^2 + 2x$$\nComparing coefficients of $x$ gives $a = 2$.',
    category: ''
  },
  {
    id: 'act2_ex3_q34',
    question: 'If $\\angle A$ is an acute angle, how many degrees larger is its supplement than its complement?',
    options: ['$-90^\\circ$', '$0^\\circ$', '$90^\\circ$', '$180^\\circ$'],
    correctAnswer: 2,
    explanation: 'Supplement of $A = 180^\\circ - A$.\nComplement of $A = 90^\\circ - A$.\n$$\\text{Difference} = (180^\\circ - A) - (90^\\circ - A) = 90^\\circ$$',
    category: ''
  },
  {
    id: 'act2_ex3_q35',
    question: 'Determine which of the scatter plot graphs below represent a function:',
    options: [
      'None of the graphs are functions.',
      'All of the graphs are functions.',
      'Graphs A and B are functions.',
      'Graphs B and C are functions.'
    ],
    correctAnswer: 2,
    explanation: 'By the Vertical Line Test, a set of points represents a function if no vertical line intersects more than one point. Graphs A and B pass this condition.',
    category: '',
    svg: `<svg viewBox="0 0 320 140" class="mx-auto h-36 w-auto">
  <g transform="translate(10,10)">
    <line x1="0" y1="50" x2="90" y2="50" stroke="black" stroke-width="1" />
    <line x1="45" y1="0" x2="45" y2="100" stroke="black" stroke-width="1" />
    <circle cx="20" cy="80" r="3" fill="black" />
    <circle cx="35" cy="60" r="3" fill="black" />
    <circle cx="55" cy="40" r="3" fill="black" />
    <circle cx="75" cy="20" r="3" fill="black" />
    <text x="25" y="115" font-size="12" font-weight="bold">Graph A</text>
  </g>
  <g transform="translate(115,10)">
    <line x1="0" y1="50" x2="90" y2="50" stroke="black" stroke-width="1" />
    <line x1="45" y1="0" x2="45" y2="100" stroke="black" stroke-width="1" />
    <circle cx="15" cy="30" r="3" fill="black" />
    <circle cx="35" cy="70" r="3" fill="black" />
    <circle cx="55" cy="30" r="3" fill="black" />
    <circle cx="75" cy="70" r="3" fill="black" />
    <text x="25" y="115" font-size="12" font-weight="bold">Graph B</text>
  </g>
  <g transform="translate(220,10)">
    <line x1="0" y1="50" x2="90" y2="50" stroke="black" stroke-width="1" />
    <line x1="45" y1="0" x2="45" y2="100" stroke="black" stroke-width="1" />
    <circle cx="45" cy="20" r="3" fill="black" />
    <circle cx="45" cy="40" r="3" fill="black" />
    <circle cx="45" cy="60" r="3" fill="black" />
    <circle cx="45" cy="80" r="3" fill="black" />
    <text x="25" y="115" font-size="12" font-weight="bold">Graph C</text>
  </g>
</svg>`
  },
  {
    id: 'act2_ex3_q36',
    question: 'If $0.002 \\le x \\le 0.2$ and $5 \\le y \\le 25$, what is the maximum possible value of $\\frac{x}{y}$?',
    options: ['0.04', '0.4', '4', '40'],
    correctAnswer: 0,
    explanation: 'To maximize $\\frac{x}{y}$, select the largest numerator $x = 0.2$ and the smallest denominator $y = 5$:\n$$\\text{Max } \\frac{x}{y} = \\frac{0.2}{5} = 0.04$$',
    category: ''
  },
  {
    id: 'act2_ex3_q37',
    question: 'Write an equation in slope-intercept form for the line passing through $(3,7)$ and $(7,4)$:',
    options: [
      '$y = -\\frac{3}{4}x + \\frac{37}{4}$',
      '$y = \\frac{3}{4}x + \\frac{37}{4}$',
      '$y = -\\frac{4}{3}x + \\frac{37}{4}$',
      '$y = -\\frac{3}{4}x + \\frac{4}{37}$'
    ],
    correctAnswer: 0,
    explanation: 'Slope $m = \\frac{4 - 7}{7 - 3} = -\\frac{3}{4}$.\nUsing point-slope with $(3,7)$:\n$$y - 7 = -\\frac{3}{4}(x - 3) \\implies y = -\\frac{3}{4}x + \\frac{9}{4} + \\frac{28}{4} = -\\frac{3}{4}x + \\frac{37}{4}$$',
    category: ''
  },
  {
    id: 'act2_ex3_q38',
    question: 'If true statements have truth value 1 and false statements have truth value 0, what is the truth value of the compound statement: "All squares are rectangles, OR all squares are circles"?',
    options: ['$-1$', '0', '$\\frac{1}{2}$', '1'],
    correctAnswer: 3,
    explanation: '"All squares are rectangles" is TRUE (value 1). "All squares are circles" is FALSE (value 0). For an OR logical disjunction, $1 \\lor 0 = 1$.',
    category: ''
  },
  {
    id: 'act2_ex3_q39',
    question: 'In any right triangle, the altitude drawn to the hypotenuse always:',
    options: [
      'lies inside the triangle',
      'lies outside the triangle',
      'bisects the hypotenuse',
      'bisects the right angle'
    ],
    correctAnswer: 0,
    explanation: 'The altitude to the hypotenuse originates from the right-angle vertex and meets the hypotenuse perpendicularly at an interior point, so it always lies completely inside the triangle.',
    category: ''
  },
  {
    id: 'act2_ex3_q40',
    question: 'What is the sum of the measures of the interior angles of a 14-sided polygon?',
    options: ['1,980', '2,160', '2,520', '2,880'],
    correctAnswer: 1,
    explanation: 'Sum of interior angles formula:\n$$S = (n - 2) \\times 180^\\circ = (14 - 2) \\times 180^\\circ = 12 \\times 180^\\circ = 2,160^\\circ$$',
    category: ''
  },
  {
    id: 'act2_ex3_q41',
    question: 'Simplify the expression $\\frac{a^{15}b^{12} - a^5b^8}{a^3b^2}$ for $a \\neq 0, b \\neq 0$:',
    options: [
      '$a^5 b^6 - a^5 b^4$',
      '$a^{12} b^{10} - a^2 b^6$',
      '$a^6 b^4$',
      '$a^7 b^2$'
    ],
    correctAnswer: 1,
    explanation: 'Divide each term in the numerator by the denominator $a^3b^2$:\n$$\\frac{a^{15}b^{12}}{a^3b^2} - \\frac{a^5b^8}{a^3b^2} = a^{12}b^{10} - a^2b^6$$',
    category: ''
  },
  {
    id: 'act2_ex3_q42',
    question: 'If minor arc $\\widehat{AC} = 4\\pi\\text{ cm}$ in a circle with central angle $60^\\circ$, find the area in square centimeters of sector $ABC$:',
    options: ['$4\\pi$', '$12\\pi$', '$24\\pi$', '$40\\pi$'],
    correctAnswer: 2,
    explanation: 'Arc length formula: $\\frac{60^\\circ}{360^\\circ} \\cdot 2\\pi r = \\frac{\\pi r}{3} = 4\\pi \\implies r = 12\\text{ cm}$.\nSector Area $= \\frac{60^\\circ}{360^\\circ} \\cdot \\pi r^2 = \\frac{1}{6} \\cdot \\pi(144) = 24\\pi\\text{ cm}^2$.',
    category: '',
    svg: `<svg viewBox="0 0 220 200" class="mx-auto h-48 w-auto">
  <circle cx="110" cy="100" r="70" fill="none" stroke="black" stroke-width="2" />
  <line x1="110" y1="100" x2="180" y2="100" stroke="black" stroke-width="2" />
  <line x1="110" y1="100" x2="145" y2="39" stroke="black" stroke-width="2" />
  <path d="M 135 100 A 25 25 0 0 0 124 78" fill="none" stroke="black" stroke-width="1.5" />
  <text x="110" y="115" font-size="12" font-weight="bold">B</text>
  <text x="185" y="105" font-size="12" font-weight="bold">A</text>
  <text x="150" y="35" font-size="12" font-weight="bold">C</text>
  <text x="135" y="90" font-size="10">60°</text>
</svg>`
  },
  {
    id: 'act2_ex3_q43',
    question: 'In right triangle $ABC$ with $DE \\parallel BC$, $DE = 4$, $BC = 6$, and $AC = 9$. What is the measurement of $EC$?',
    options: ['3', '5', '6', '$\\frac{27}{2}$'],
    correctAnswer: 0,
    explanation: 'Using similar triangles $\\triangle ADE \\sim \\triangle ABC$:\n$$\\frac{DE}{BC} = \\frac{AE}{AC} \\implies \\frac{4}{6} = \\frac{AE}{9} \\implies AE = 6$$\n$$EC = AC - AE = 9 - 6 = 3$$',
    category: '',
    svg: `<svg viewBox="0 0 260 180" class="mx-auto h-48 w-auto">
  <polygon points="40,140 220,140 220,30" fill="none" stroke="black" stroke-width="2" />
  <line x1="160" y1="140" x2="160" y2="67" stroke="black" stroke-width="2" />
  <text x="25" y="145" font-size="14" font-weight="bold">A</text>
  <text x="155" y="155" font-size="14" font-weight="bold">E</text>
  <text x="225" y="155" font-size="14" font-weight="bold">C</text>
  <text x="165" y="60" font-size="14" font-weight="bold">D</text>
  <text x="225" y="25" font-size="14" font-weight="bold">B</text>
  <text x="145" y="105" font-size="14" font-weight="bold">4</text>
  <text x="230" y="85" font-size="14" font-weight="bold">6</text>
</svg>`
  },
  {
    id: 'act2_ex3_q44',
    question: 'In the figure, 5 nested squares are positioned such that the distance between adjacent squares is $1\\text{ cm}$. If the side length of the largest square is $10\\text{ cm}$, what is the ratio of the area of the largest square to that of the smallest square?',
    options: ['2:1', '5:3', '25:9', '25:1'],
    correctAnswer: 3,
    explanation: 'The largest square has side $s_1 = 10\\text{ cm}$. Moving inwards across 4 gaps of $1\\text{ cm}$ on both sides gives the side of the smallest square:\n$$s_5 = 10 - 2(4 \\times 1) = 2\\text{ cm}$$\nRatio of areas $= 10^2 : 2^2 = 100 : 4 = 25 : 1$.',
    category: '',
    svg: `<svg viewBox="0 0 220 220" class="mx-auto h-48 w-auto">
  <rect x="10" y="10" width="200" height="200" fill="none" stroke="black" stroke-width="2" />
  <rect x="30" y="30" width="160" height="160" fill="none" stroke="black" stroke-width="1.5" />
  <rect x="50" y="50" width="120" height="120" fill="none" stroke="black" stroke-width="1.5" />
  <rect x="70" y="70" width="80" height="80" fill="none" stroke="black" stroke-width="1.5" />
  <rect x="90" y="90" width="40" height="40" fill="none" stroke="black" stroke-width="2" />
  <text x="10" y="115" font-size="12" font-weight="bold">10 cm</text>
  <text x="175" y="25" font-size="10">1 cm</text>
</svg>`
  },
  {
    id: 'act2_ex3_q45',
    question: 'Which expression is equivalent to $(h^2 + 9h - 1)(-4h + 3)$?',
    options: [
      '$-4h^3 - 33h^2 + 31h - 3$',
      '$4h^3 + 39h^2 - 23h - 3$',
      '$-4h^3 - 39h^2 + 23h + 3$',
      '$4h^3 + 33h^2 - 31h + 3$'
    ],
    correctAnswer: 0,
    explanation: 'Expand the polynomials:\n$$h^2(-4h + 3) + 9h(-4h + 3) - 1(-4h + 3)$$\n$$= -4h^3 + 3h^2 - 36h^2 + 27h + 4h - 3 = -4h^3 - 33h^2 + 31h - 3$$',
    category: ''
  },
  {
    id: 'act2_ex3_q46',
    question: 'What expression is equivalent to $x^2 - 17x - 60$?',
    options: [
      '$(x - 20)(x + 3)$',
      '$(x - 5)(x - 12)$',
      '$(x - 20)(x - 3)$',
      '$(x + 5)(x - 12)$'
    ],
    correctAnswer: 0,
    explanation: 'Find two integers with product $-60$ and sum $-17$: $-20$ and $+3$.\n$$x^2 - 17x - 60 = (x - 20)(x + 3)$$',
    category: ''
  },
  {
    id: 'act2_ex3_q47',
    question: 'The formula $A = p + prt$ models the balance in a savings account. Which equation is correctly solved for interest rate $r$?',
    options: [
      '$r = Apt$',
      '$r = A - 2pt$',
      '$r = \\frac{A}{2pt}$',
      '$r = \\frac{A - p}{pt}$'
    ],
    correctAnswer: 3,
    explanation: 'Subtract $p$ from both sides and then divide by $pt$:\n$$A - p = prt \\implies r = \\frac{A - p}{pt}$$',
    category: ''
  },
  {
    id: 'act2_ex3_q48',
    question: 'Which expression is equivalent to $\\frac{(q^4)^{-3}}{q^{-15}}$ for all defined values of $q$?',
    options: ['$q^{27}$', '$\\frac{1}{q^{27}}$', '$q^3$', '$\\frac{1}{q^3}$'],
    correctAnswer: 2,
    explanation: 'Apply exponent rules:\n$$(q^4)^{-3} = q^{-12}$$\n$$\\frac{q^{-12}}{q^{-15}} = q^{-12 - (-15)} = q^3$$',
    category: ''
  },
  {
    id: 'act2_ex3_q49',
    question: 'The figure below is a cross shape composed of 5 identical squares of side length $2\\text{ cm}$. What is the total area of the figure?',
    options: ['$8\\text{ cm}^2$', '$16\\text{ cm}^2$', '$20\\text{ cm}^2$', '$24\\text{ cm}^2$'],
    correctAnswer: 2,
    explanation: 'Area of 1 square $= 2 \\times 2 = 4\\text{ cm}^2$.\nTotal area of 5 squares $= 5 \\times 4 = 20\\text{ cm}^2$.',
    category: '',
    svg: `<svg viewBox="0 0 220 220" class="mx-auto h-48 w-auto">
  <polygon points="70,10 150,10 150,70 210,70 210,150 150,150 150,210 70,210 70,150 10,150 10,70 70,70" fill="none" stroke="black" stroke-width="2" />
  <line x1="70" y1="70" x2="150" y2="70" stroke="black" stroke-width="1.5" />
  <line x1="70" y1="150" x2="150" y2="150" stroke="black" stroke-width="1.5" />
  <line x1="70" y1="70" x2="70" y2="150" stroke="black" stroke-width="1.5" />
  <line x1="150" y1="70" x2="150" y2="150" stroke="black" stroke-width="1.5" />
  <text x="100" y="5" font-size="12" font-weight="bold">2 cm</text>
  <text x="155" y="45" font-size="12" font-weight="bold">2 cm</text>
</svg>`
  },
  {
    id: 'act2_ex3_q50',
    question: 'In the circle with center $H$, line $\\overline{XY}$ is tangent to the circle at point $Y$. If the exterior angle at $X$ measures $145^\\circ$, find $m\\angle XHY$:',
    options: ['$25^\\circ$', '$35^\\circ$', '$90^\\circ$', '$55^\\circ$'],
    correctAnswer: 3,
    explanation: 'Since $\\overline{XY}$ is tangent to the circle at $Y$, $HY \\perp XY$, so $m\\angle HYX = 90^\\circ$.\nThe interior angle $m\\angle HXY = 180^\\circ - 145^\\circ = 35^\\circ$.\nIn right triangle $\\triangle HXY$:\n$$m\\angle XHY = 180^\\circ - (90^\\circ + 35^\\circ) = 55^\\circ$$',
    category: '',
    svg: `<svg viewBox="0 0 260 180" class="mx-auto h-48 w-auto">
  <circle cx="190" cy="80" r="45" fill="none" stroke="black" stroke-width="2" />
  <line x1="60" y1="140" x2="220" y2="140" stroke="black" stroke-width="2" />
  <line x1="190" y1="80" x2="190" y2="140" stroke="black" stroke-width="2" />
  <line x1="190" y1="80" x2="120" y2="140" stroke="black" stroke-width="2" />
  <path d="M 90 140 A 30 30 0 0 1 110 130" fill="none" stroke="black" stroke-width="1.5" />
  <text x="75" y="130" font-size="12">145°</text>
  <text x="115" y="155" font-size="12" font-weight="bold">X</text>
  <text x="190" y="155" font-size="12" font-weight="bold">Y</text>
  <text x="190" y="70" font-size="12" font-weight="bold">H</text>
</svg>`
  }
];
