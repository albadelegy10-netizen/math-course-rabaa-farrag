import { Question } from '../../../types';

// ACT2 Exam 4 (Test #4) — transcribed from the 3D Academy ACT Subject Test (Math Level 1) PDF.
// Answers follow the PDF answer key. Figures are cleaned scans stored as base64 PNG.
export const ACT2_3D_EXAM4: Question[] = [
  {
    "id": 1,
    "question": "Marvin removed a triangle section from a rectangle, as shown below. Lengths in the figure are given in meters. What is the area, in square meters, of the remaining polygon?",
    "options": [
      "$68$",
      "$74$",
      "$75$",
      "$78$"
    ],
    "correctAnswer": 1,
    "explanation": "Rectangle area $= 10 \\times 8 = 80$. The removed right triangle has legs $3$ and $4$, area $\\frac{1}{2}(3)(4) = 6$. Remaining area $= 80 - 6 = 74$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 2,
    "question": "A line passes through the points $(4,1)$ and $(7,10)$. What is the slope of the line?",
    "options": [
      "$-3$",
      "$-\\frac{1}{3}$",
      "$\\frac{1}{3}$",
      "$3$"
    ],
    "correctAnswer": 3,
    "explanation": "$m = \\frac{10-1}{7-4} = \\frac{9}{3} = 3$.",
    "category": ""
  },
  {
    "id": 3,
    "question": "Which of the following shapes has the greatest number of lines of symmetry?",
    "options": [
      "Square",
      "Rectangle that is not a square",
      "Equilateral triangle",
      "Circle"
    ],
    "correctAnswer": 3,
    "explanation": "A circle has infinitely many lines of symmetry (every diameter).",
    "category": ""
  },
  {
    "id": 4,
    "question": "A circular pizza fits tightly in the bottom of a square box. The inside area of the box is $144$ square inches. Which of the following values is closest to the area, in square inches, of the top of the pizza?",
    "options": [
      "$144\\pi$",
      "$36\\pi$",
      "$12\\pi$",
      "$6\\pi$"
    ],
    "correctAnswer": 1,
    "explanation": "Side of box $= \\sqrt{144} = 12$, so the pizza's diameter is $12$ and $r = 6$. Area $= \\pi(6)^2 = 36\\pi$.",
    "category": ""
  },
  {
    "id": 5,
    "question": "Given points $A$, $B$, $C$, $D$, and $E$ are collinear. $AC = 12$, $DB = 20$, $BE = 8$. $C$ is between $B$ and $E$, $A$ is between $B$ and $D$, and $B$ is the midpoint of $\\overline{AC}$. What is $DE$?",
    "options": [
      "$40$",
      "$28$",
      "$24$",
      "$16$"
    ],
    "correctAnswer": 1,
    "explanation": "The order of the points is $D, A, B, C, E$. Since $D$ and $E$ are on opposite sides of $B$: $DE = DB + BE = 20 + 8 = 28$.",
    "category": ""
  },
  {
    "id": 6,
    "question": "The value of a car as it ages is displayed in the table below. Based on the table, which of the following completes the sentence: As the age of the car increases, the value of the car decreases ____.",
    "options": [
      "Linearly by $\\$9{,}646.87$ per year",
      "Linearly by $\\$1{,}787.00$ per year",
      "Exponentially by $85\\%$ per year",
      "Exponentially by $15\\%$ per year"
    ],
    "correctAnswer": 3,
    "explanation": "$\\frac{15353.13}{25000} \\approx 0.614 = 0.85^3$, so each year the value is multiplied by $0.85$: an exponential decrease of $15\\%$ per year.",
    "category": "",
    "svg": "<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Age (Yr)</th><th class=\"border border-gray-400 px-2 py-1\">Value</th></tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">0</td><td class=\"border border-gray-400 px-2 py-1\">\\$25,000.00</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">3</td><td class=\"border border-gray-400 px-2 py-1\">\\$15,353.13</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">5</td><td class=\"border border-gray-400 px-2 py-1\">\\$11,092.63</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">9</td><td class=\"border border-gray-400 px-2 py-1\">\\$5,790.42</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">12</td><td class=\"border border-gray-400 px-2 py-1\">\\$3,556.04</td></tr>\n  </tbody>\n</table>"
  },
  {
    "id": 7,
    "question": "Which of the following equations represents the line in the standard $(x, y)$ coordinate plane that has $y$-intercept of $-2$ and that is parallel to the line represented by the equation $y = \\frac{2}{3}x - 4$?",
    "options": [
      "$y = -\\frac{2}{3}x - 2$",
      "$y = -\\frac{3}{2}x - 2$",
      "$y = \\frac{2}{3}x - \\frac{2}{3}$",
      "$y = \\frac{2}{3}x - 2$"
    ],
    "correctAnswer": 3,
    "explanation": "Parallel lines have the same slope $\\frac{2}{3}$; with $y$-intercept $-2$: $y = \\frac{2}{3}x - 2$.",
    "category": ""
  },
  {
    "id": 8,
    "question": "Jayme and her friends are planning a bowling party. The family bowling center offers 2 different party rate plans. Plan A has a cost of $\\$4.00$ per person per hour with no charge for shoe rental. Plan B has a cost of $\\$2.00$ per person per hour and $\\$4.00$ per person for shoe rental. Jayme graphs the cost per person for each plan so that she and her friends can choose the less expensive plan for the amount of time they want to bowl. Jayme creates one of the following graphs. Which one?",
    "options": [
      "Graph A",
      "Graph B",
      "Graph C"
    ],
    "correctAnswer": 2,
    "explanation": "Plan A: $C = 4t$ (starts at $0$). Plan B: $C = 2t + 4$ (starts at $4$, less steep). The lines meet at $t = 2$, $C = 8$ — graph C.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 9,
    "question": "Which of the following expressions is a factor of $9x^2 - 48x + 64$?",
    "options": [
      "$3x - 32$",
      "$3x - 8$",
      "$9x - 4$",
      "$9x - 16$"
    ],
    "correctAnswer": 1,
    "explanation": "$9x^2 - 48x + 64 = (3x - 8)^2$.",
    "category": ""
  },
  {
    "id": 10,
    "question": "A line passes through quadrant 1 and quadrant 3 in the standard $(x, y)$ coordinate plane. Which statement about the slope of this line is true?",
    "options": [
      "It is positive",
      "It is negative",
      "It is zero",
      "It is undefined"
    ],
    "correctAnswer": 0,
    "explanation": "A line through quadrants I and III rises from left to right, so its slope is positive.",
    "category": ""
  },
  {
    "id": 11,
    "question": "One of the following tables shows a direct variation between $x$ and $y$. Which one?",
    "options": [
      "Table A",
      "Table B",
      "Table C",
      "Table D"
    ],
    "correctAnswer": 2,
    "explanation": "Direct variation means $y = kx$ (constant ratio $\\frac{y}{x}$). In table C: $\\frac{6}{-2} = \\frac{-3}{1} = \\frac{-12}{4} = -3$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 12,
    "question": "Simplify $6x + 8 \\div 2 - (4x - 5)$.",
    "options": [
      "$2x + 9$",
      "$2x - 1$",
      "$-x + 9$",
      "$-x - 1$"
    ],
    "correctAnswer": 0,
    "explanation": "$8 \\div 2 = 4$, so $6x + 4 - 4x + 5 = 2x + 9$.",
    "category": ""
  },
  {
    "id": 13,
    "question": "Simplify $\\dfrac{7(4-3) - 6\\left(\\frac{1}{2} - \\frac{1}{3}\\right)}{6} + 7(m - 1)$",
    "options": [
      "$7m$",
      "$7m - 6$",
      "$7m + 8$",
      "$\\frac{7}{6}m - 1$"
    ],
    "correctAnswer": 1,
    "explanation": "Numerator: $7(1) - 6\\left(\\frac{1}{6}\\right) = 7 - 1 = 6$, so the fraction is $1$. Then $1 + 7m - 7 = 7m - 6$.",
    "category": ""
  },
  {
    "id": 14,
    "question": "If isosceles triangle $\\triangle ABC$ has an obtuse angle at vertex $B$, which statement is true?",
    "options": [
      "$AB + BC < AC$",
      "$AB = AC$",
      "$AB = BC$",
      "$AC = BC$"
    ],
    "correctAnswer": 2,
    "explanation": "A triangle can have only one obtuse angle, so $\\angle B$ is the vertex angle and the two legs meeting at $B$ are equal: $AB = BC$.",
    "category": ""
  },
  {
    "id": 15,
    "question": "Triangle $\\triangle ABC$ is a right isosceles triangle with $AB > AC$. Find $m\\angle B$.",
    "options": [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$"
    ],
    "correctAnswer": 1,
    "explanation": "$AB$ is the longest side (hypotenuse), so the right angle is at $C$ and the two base angles are each $45^\\circ$.",
    "category": ""
  },
  {
    "id": 16,
    "question": "The radius and height of a cylinder are in the ratio $5:7$, and its volume is $550\\text{ in}^3$. What is the radius of the cylinder, in inches?",
    "options": [
      "$\\sqrt{5}$",
      "$\\sqrt{7}$",
      "$5$",
      "$7$"
    ],
    "correctAnswer": 2,
    "explanation": "Let $r = 5k$, $h = 7k$. $V = \\pi(5k)^2(7k) = 175\\pi k^3 = 550 \\Rightarrow k^3 \\approx 1 \\Rightarrow k = 1$, so $r = 5$.",
    "category": ""
  },
  {
    "id": 17,
    "question": "What values of $y$ make this equation true? $|2y + 1| = 7$",
    "options": [
      "$-3$ and $4$",
      "$-3$ and $3$",
      "$-4$ and $4$",
      "$-4$ and $3$"
    ],
    "correctAnswer": 3,
    "explanation": "$2y + 1 = 7 \\Rightarrow y = 3$, or $2y + 1 = -7 \\Rightarrow y = -4$.",
    "category": ""
  },
  {
    "id": 18,
    "question": "If $\\triangle ABC \\cong \\triangle FED$, with angle measures as noted, which equation CANNOT be used to find the value of $x$?",
    "options": [
      "$x + 35 = 115$",
      "$x - 50 = 30$",
      "$x - 45 = 35$",
      "$x + 35 = 65$"
    ],
    "correctAnswer": 3,
    "explanation": "Corresponding angles: $\\angle A = \\angle F = 35^\\circ$, $\\angle B = \\angle E = 30^\\circ$, $\\angle C = \\angle D = 180^\\circ - 65^\\circ = 115^\\circ$. So $x - 45 = 35$, $x - 50 = 30$ and $x + 35 = 115$ all give $x = 80$; $x + 35 = 65$ does not.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 19,
    "question": "A rectangle has adjacent sides measuring $(x + 3)$ inches and $2x$ inches. The perimeter of the rectangle is $51$ inches. Determine the area of the rectangle to the nearest $0.1$ square inch.",
    "options": [
      "$120.3$",
      "$157.5$",
      "$225.0$",
      "$608.0$"
    ],
    "correctAnswer": 1,
    "explanation": "$2(x + 3 + 2x) = 51 \\Rightarrow 3x + 3 = 25.5 \\Rightarrow x = 7.5$. Sides are $10.5$ and $15$, so the area is $157.5$.",
    "category": ""
  },
  {
    "id": 20,
    "question": "Simplify the expression $\\sqrt{6}\\left(5 + \\sqrt{6}\\right)$.",
    "options": [
      "$\\sqrt{30} + 6$",
      "$6\\sqrt{5} + 6$",
      "$5\\sqrt{6} + 6$",
      "$11\\sqrt{6}$"
    ],
    "correctAnswer": 2,
    "explanation": "$\\sqrt{6} \\cdot 5 + \\sqrt{6} \\cdot \\sqrt{6} = 5\\sqrt{6} + 6$.",
    "category": ""
  },
  {
    "id": 21,
    "question": "After taking $3$ exams in physics, Zola's mean score is $80$. If she scores $70$ on her $4$th exam, what will be her new mean score?",
    "options": [
      "$77.5$",
      "$75$",
      "$72.5$",
      "$65$"
    ],
    "correctAnswer": 0,
    "explanation": "Total of first three $= 240$. New mean $= \\frac{240 + 70}{4} = 77.5$.",
    "category": ""
  },
  {
    "id": 22,
    "question": "Based on this bar graph, what is the median of this set of data?",
    "options": [
      "$3$",
      "$3.5$",
      "$4$",
      "$5$"
    ],
    "correctAnswer": 0,
    "explanation": "The bars give frequencies of the values $1$–$7$: $1, 5, 3, 2, 1, 4, 1$ ($17$ data points). The $9$th value is the median; cumulative counts $1, 6, 9$ reach $9$ at the value $3$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 23,
    "question": "This chart shows the number of people who visited a state park during the years shown. Assuming that this geometric growth trend continued, which of the following values best estimates the number of people who visited the park in the year $2000$?",
    "options": [
      "$60{,}000$",
      "$69{,}000$",
      "$96{,}000$",
      "$192{,}000$"
    ],
    "correctAnswer": 3,
    "explanation": "The number doubles every $5$ years: $1985 \\to 24$, $1990 \\to 48$, $1995 \\to 96$, $2000 \\to 192$ thousand.",
    "category": "",
    "svg": "<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Year</th><th class=\"border border-gray-400 px-2 py-1\">Thousands of individuals</th></tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">1970</td><td class=\"border border-gray-400 px-2 py-1\">3</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">1975</td><td class=\"border border-gray-400 px-2 py-1\">6</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">1980</td><td class=\"border border-gray-400 px-2 py-1\">12</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">1990</td><td class=\"border border-gray-400 px-2 py-1\">48</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">2000</td><td class=\"border border-gray-400 px-2 py-1\">?</td></tr>\n  </tbody>\n</table>"
  },
  {
    "id": 24,
    "question": "The figure below shows $\\triangle PQR$ and $\\triangle RST$ where $R$ is the intersection of $\\overline{PS}$ and $\\overline{TQ}$. Which of the following statements, if true, could be used to prove $\\triangle PQR \\sim \\triangle SRT$ without any other given information?",
    "options": [
      "$\\overline{PQ} \\parallel \\overline{TS}$",
      "$\\overline{PQ} \\cong \\overline{TS}$",
      "$\\overline{PR} \\cong \\overline{TR}$",
      "$\\overline{PS} \\perp \\overline{TS}$"
    ],
    "correctAnswer": 0,
    "explanation": "Vertical angles at $R$ are equal. If $\\overline{PQ} \\parallel \\overline{TS}$, alternate interior angles are equal too, so the triangles are similar by AA.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 25,
    "question": "In this figure: $\\overline{AD}$ is perpendicular to plane $BCD$, $\\overline{CD} \\perp \\overline{DB}$, $CD = DB$, and $m\\angle DAB = 35^\\circ$. What is $m\\angle ACD$?",
    "options": [
      "$35^\\circ$",
      "$45^\\circ$",
      "$55^\\circ$",
      "$90^\\circ$"
    ],
    "correctAnswer": 2,
    "explanation": "$\\triangle ADC \\cong \\triangle ADB$ (SAS: $AD$ common, right angles at $D$, $CD = DB$), so $m\\angle DAC = 35^\\circ$. In right $\\triangle ADC$: $m\\angle ACD = 90^\\circ - 35^\\circ = 55^\\circ$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 26,
    "question": "Solve for $x$ where $a$, $b$, and $c$ are real numbers and $a > 0$: $ax + b > 3b + c$",
    "options": [
      "$x > \\frac{c + 2b}{a}$",
      "$x < \\frac{c + 2b}{a}$",
      "$x > c + 2b - a$",
      "$x < \\frac{c}{a} + 2b$"
    ],
    "correctAnswer": 0,
    "explanation": "$ax > 2b + c$. Since $a > 0$, dividing keeps the direction: $x > \\frac{c + 2b}{a}$.",
    "category": ""
  },
  {
    "id": 27,
    "question": "Given that $f(2) = -20$, what are the zeros of $f(x) = x^2 + 3x + bx + 3b$?",
    "options": [
      "$-6$ and $3$",
      "$-3$ and $2$",
      "$-3$ and $6$",
      "$-2$ and $3$"
    ],
    "correctAnswer": 2,
    "explanation": "$f(2) = 4 + 6 + 5b = -20 \\Rightarrow b = -6$. Then $f(x) = x^2 - 3x - 18 = (x - 6)(x + 3)$, zeros $-3$ and $6$.",
    "category": ""
  },
  {
    "id": 28,
    "question": "For all positive values of $x$ and $y$, the expression $(3x^0y^2)(2x^2y^3)^2$ is equivalent to:",
    "options": [
      "$6x^2y^5$",
      "$12x^4y^7$",
      "$12x^4y^8$",
      "$36x^4y^{10}$"
    ],
    "correctAnswer": 2,
    "explanation": "$(3y^2)(4x^4y^6) = 12x^4y^8$.",
    "category": ""
  },
  {
    "id": 29,
    "question": "Kristi has a photo that is $4$ inches tall and $6$ inches long. She enlarges the photo such that the ratio of the dimensions remains the same and the new photo is $5$ inches longer than it is tall. What is the new photo's length, in inches?",
    "options": [
      "$9$",
      "$10$",
      "$15$",
      "$20$"
    ],
    "correctAnswer": 2,
    "explanation": "New height $4k$, length $6k$: $6k - 4k = 5 \\Rightarrow k = 2.5$, so length $= 15$.",
    "category": ""
  },
  {
    "id": 30,
    "question": "Given $x = 3$ and $y = -2$, what is the value of $\\dfrac{4x^5y^2}{15x^2y^3}$?",
    "options": [
      "$-\\frac{18}{5}$",
      "$-\\frac{6}{5}$",
      "$\\frac{12}{5}$",
      "$\\frac{18}{5}$"
    ],
    "correctAnswer": 0,
    "explanation": "$\\frac{4x^3}{15y} = \\frac{4(27)}{15(-2)} = -\\frac{108}{30} = -\\frac{18}{5}$.",
    "category": ""
  },
  {
    "id": 31,
    "question": "A plane flew $662$ miles from Cleveland to New Orleans in $2$ hours $20$ minutes. To the nearest mile per hour, what was the average speed of the plane?",
    "options": [
      "$221$",
      "$284$",
      "$301$",
      "$331$"
    ],
    "correctAnswer": 1,
    "explanation": "$2\\text{ h }20\\text{ min} = \\frac{7}{3}\\text{ h}$. Speed $= 662 \\div \\frac{7}{3} \\approx 283.7 \\approx 284$ mph.",
    "category": ""
  },
  {
    "id": 32,
    "question": "What are the zeros of the function $f(x) = x^2 - 3x - 4$?",
    "options": [
      "$-1$ and $4$",
      "$-4$ and $-3$",
      "$-4$ and $1$",
      "$-4, -1, 1$, and $4$"
    ],
    "correctAnswer": 0,
    "explanation": "$x^2 - 3x - 4 = (x - 4)(x + 1)$, zeros $-1$ and $4$.",
    "category": ""
  },
  {
    "id": 33,
    "question": "Rationalize the denominator of $\\frac{2}{\\sqrt{3}}$.",
    "options": [
      "$2\\sqrt{3}$",
      "$-2\\sqrt{3}$",
      "$\\frac{2\\sqrt{3}}{\\sqrt{6}}$",
      "$\\frac{2\\sqrt{3}}{3}$"
    ],
    "correctAnswer": 3,
    "explanation": "$\\frac{2}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}$.",
    "category": ""
  },
  {
    "id": 34,
    "question": "What equation corresponds to this graph?",
    "options": [
      "$y = -4x + 8$",
      "$y = x^2 - 5x + 6$",
      "$y = x^2 - 9x + 14$",
      "$y = x^3 - 11x^2 + 32x - 28$"
    ],
    "correctAnswer": 2,
    "explanation": "The graph is a parabola through $(2, 0)$ and $(3, -4)$. Check C: $2^2 - 18 + 14 = 0$ and $9 - 27 + 14 = -4$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 35,
    "question": "Let $a$ and $b$ be constants such that one of the following graphs in the standard $(x, y)$ coordinate plane contains all the points in the table below. Which one?",
    "options": [
      "Graph A",
      "Graph B",
      "Graph C",
      "Graph D"
    ],
    "correctAnswer": 1,
    "explanation": "Each time $x$ increases by $1$, $y$ decreases by $2$: a line with slope $-2$. Graph B is the steep decreasing line.",
    "category": "",
    "svg": "<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">$x$</th><th class=\"border border-gray-400 px-2 py-1\">$y$</th></tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$a$</td><td class=\"border border-gray-400 px-2 py-1\">$b$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$a + 1$</td><td class=\"border border-gray-400 px-2 py-1\">$b - 2$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$a + 2$</td><td class=\"border border-gray-400 px-2 py-1\">$b - 4$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$a + 3$</td><td class=\"border border-gray-400 px-2 py-1\">$b - 6$</td></tr>\n  </tbody>\n</table>",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 36,
    "question": "For all values of $y > 0$, which expression is equivalent to $\\frac{x}{\\sqrt{y}}$?",
    "options": [
      "$x$",
      "$x\\sqrt{y}$",
      "$\\frac{\\sqrt{xy}}{y}$",
      "$\\frac{x\\sqrt{y}}{y}$"
    ],
    "correctAnswer": 3,
    "explanation": "Multiply by $\\frac{\\sqrt{y}}{\\sqrt{y}}$: $\\frac{x\\sqrt{y}}{y}$.",
    "category": ""
  },
  {
    "id": 37,
    "question": "A science student observed that $9$ times the Celsius temperature $(C)$ of an object is equal to $160$ less than $5$ times the Fahrenheit temperature $(F)$ of that object. Which of the following equations models the physical phenomenon that the student observed?",
    "options": [
      "$F = \\frac{9}{5}C + 32$",
      "$F = \\frac{5}{9}C - 32$",
      "$F = \\frac{5}{9}C + 32$",
      "$F = \\frac{9}{5}C - 32$"
    ],
    "correctAnswer": 0,
    "explanation": "$9C = 5F - 160 \\Rightarrow 5F = 9C + 160 \\Rightarrow F = \\frac{9}{5}C + 32$.",
    "category": ""
  },
  {
    "id": 38,
    "question": "Each wheel on Shing's bicycle has a $14$ inch radius. How many complete rotations will each wheel make in traveling a distance of $1$ mile? (Note: $1$ mile $= 5{,}280$ ft and $\\pi \\approx 3.14$)",
    "options": [
      "$60$",
      "$100$",
      "$120$",
      "$720$"
    ],
    "correctAnswer": 3,
    "explanation": "Circumference $= 2\\pi(14) \\approx 87.92$ in. One mile $= 5280 \\times 12 = 63{,}360$ in. $63360 \\div 87.92 \\approx 720$ rotations.",
    "category": ""
  },
  {
    "id": 39,
    "question": "Which of the following sets gives both solutions to the quadratic equation $4x^2 - 16x + 15 = 0$?",
    "options": [
      "$\\left\\{-\\frac{3}{2}, \\frac{5}{2}\\right\\}$",
      "$\\left\\{\\frac{3}{2}, -\\frac{5}{2}\\right\\}$",
      "$\\left\\{-\\frac{3}{2}, -\\frac{5}{2}\\right\\}$",
      "$\\left\\{\\frac{3}{2}, \\frac{5}{2}\\right\\}$"
    ],
    "correctAnswer": 3,
    "explanation": "$4x^2 - 16x + 15 = (2x - 3)(2x - 5)$, so $x = \\frac{3}{2}$ or $\\frac{5}{2}$.",
    "category": ""
  },
  {
    "id": 40,
    "question": "The figure below consists of $2$ semicircles and $2$ diameters that intersect in $1$ point. The diameters are congruent and collinear. How many lines of symmetry and how many points of symmetry does this figure have, if any?",
    "options": [
      "$0$ lines and $0$ points",
      "$0$ lines and $1$ point",
      "$1$ line and $0$ points",
      "$1$ line and $1$ point"
    ],
    "correctAnswer": 1,
    "explanation": "The two semicircles open in opposite directions, so no reflection maps the figure onto itself, but a $180^\\circ$ rotation about the shared point does: $0$ lines, $1$ point of symmetry.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 41,
    "question": "In right triangles $\\triangle ABC$ and $\\triangle DEF$ shown below, $\\angle C \\cong \\angle F$, $BC = 5$ cm, $AB = 8$ cm, and $DE = 4$ cm. What is the length of $\\overline{EF}$ in cm? (Note: the triangles are not drawn to scale.)",
    "options": [
      "$\\frac{5}{32}$",
      "$\\frac{5}{2}$",
      "$1$",
      "$\\frac{32}{5}$"
    ],
    "correctAnswer": 1,
    "explanation": "$\\triangle ABC \\sim \\triangle DEF$ (AA). $\\frac{AB}{BC} = \\frac{DE}{EF} \\Rightarrow \\frac{8}{5} = \\frac{4}{EF} \\Rightarrow EF = \\frac{5}{2}$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 42,
    "question": "In right triangle $\\triangle XYZ$ shown below, what is $ZY$, in inches?",
    "options": [
      "$7\\sqrt{3}$",
      "$\\sqrt{674}$",
      "$18$",
      "$24$"
    ],
    "correctAnswer": 3,
    "explanation": "$ZY = \\sqrt{25^2 - 7^2} = \\sqrt{576} = 24$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 43,
    "question": "Simplify $2\\sqrt{2} \\cdot 3\\sqrt{5}$.",
    "options": [
      "$5\\sqrt{7}$",
      "$5\\sqrt{10}$",
      "$6\\sqrt{7}$",
      "$6\\sqrt{10}$"
    ],
    "correctAnswer": 3,
    "explanation": "$(2 \\cdot 3)\\sqrt{2 \\cdot 5} = 6\\sqrt{10}$.",
    "category": ""
  },
  {
    "id": 44,
    "question": "Which of the following expressions is equivalent to $4x^3y^2\\left(2y^4x + 6x^3y^7\\right)$?",
    "options": [
      "$8x^3y^8 + 24x^9y^{14}$",
      "$8x^{12}y^2 + 24x^9y^{14}$",
      "$8x^4y^6 + 24x^6y^9$",
      "$8x^7y^3 + 24x^6y^9$"
    ],
    "correctAnswer": 2,
    "explanation": "$4x^3y^2 \\cdot 2xy^4 = 8x^4y^6$ and $4x^3y^2 \\cdot 6x^3y^7 = 24x^6y^9$.",
    "category": ""
  },
  {
    "id": 45,
    "question": "Which of the following inequalities is represented on the number line below?",
    "options": [
      "$x \\ge -1$",
      "$x \\le -1$",
      "$x > -1$",
      "$x < -1$"
    ],
    "correctAnswer": 2,
    "explanation": "Open circle at $-1$ with shading to the right: $x > -1$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 46,
    "question": "What is the name of a polygon in which the sum of the interior angles is $540^\\circ$?",
    "options": [
      "Pentagon",
      "Hexagon",
      "Heptagon",
      "Octagon"
    ],
    "correctAnswer": 0,
    "explanation": "$(n - 2) \\cdot 180^\\circ = 540^\\circ \\Rightarrow n = 5$: a pentagon.",
    "category": ""
  },
  {
    "id": 47,
    "question": "Given points $A$, $B$, $C$, and $E$ lie on circle $O$. $\\overline{AC} \\perp \\overline{BD}$ at $O$. $\\overline{AC}$ is a diameter of the circle. $E$, $D$, and $C$ are collinear. What is $m\\angle BEC$?",
    "options": [
      "$22.5^\\circ$",
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$"
    ],
    "correctAnswer": 2,
    "explanation": "$\\angle BOC = 90^\\circ$ (central angle), so arc $BC = 90^\\circ$. The inscribed angle $\\angle BEC$ intercepts arc $BC$: $\\frac{90^\\circ}{2} = 45^\\circ$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 48,
    "question": "The base of a right triangular incline is $67.2$ yd. The distance covered when walking up the incline is $84$ yd. What is the height, in yards, of the incline?",
    "options": [
      "$107.6$",
      "$50.4$",
      "$33.6$",
      "$16.8$"
    ],
    "correctAnswer": 1,
    "explanation": "$h = \\sqrt{84^2 - 67.2^2} = \\sqrt{7056 - 4515.84} = \\sqrt{2540.16} = 50.4$.",
    "category": ""
  },
  {
    "id": 49,
    "question": "Find the value of $x$.",
    "options": [
      "$96$",
      "$24$",
      "$52$",
      "$48$"
    ],
    "correctAnswer": 1,
    "explanation": "The $48^\\circ$ angle is a central angle and $x$ is an inscribed angle intercepting the same arc: $x = \\frac{48^\\circ}{2} = 24^\\circ$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 50,
    "question": "Find the area of the shaded region. (Round your answer to the nearest $0.1$)",
    "options": [
      "$70.18$",
      "$77.17$",
      "$65.8$",
      "$75.6$"
    ],
    "correctAnswer": 1,
    "explanation": "Each of the four congruent right triangles has hypotenuse $24$ and a $30^\\circ$ angle, so legs $24\\cos 30^\\circ = 12\\sqrt{3}$ and $24\\sin 30^\\circ = 12$. The inner square has side $12\\sqrt{3} - 12 \\approx 8.785$, area $\\approx 77.17$.",
    "category": "",
    "image": "data:image/png;base64,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"
  }
];
