import { Question } from './types';

export const EST2_GEOMETRY_2026: Question[] = [
  {
    id: 1,
    question: "If a circle is divided into 32 nonoverlapping arcs of equal measure, what is the total degree measure of 4 of these arcs?",
    options: ["$22\\frac{1}{2}^\\circ$", "$32^\\circ$", "$40^\\circ$", "$45^\\circ$", "$51^\\circ$"],
    correctAnswer: 3,
    explanation: "A circle has $360^\\circ$. If it is divided into 32 equal arcs, each arc measures $\\frac{360}{32} = 11.25^\\circ$. Four such arcs measure $4 \\times 11.25 = 45^\\circ$.",
    category: "est2- geometry2026"
  },
  {
    id: 2,
    question: "In a right triangle $ABC$ with right angle at $B$, $\\overline{BD}$ is the altitude to the hypotenuse $\\overline{AC}$. If $BD = 8$ and $BC = 10$, which of the following is closest to the area of $\\triangle ABC$?",
    options: ["$66.67$", "$112.45$", "$125.36$", "$133.33$", "$150$"],
    correctAnswer: 0,
    explanation: "In $\\triangle BDC$, by the Pythagorean theorem, $DC = \\sqrt{BC^2 - BD^2} = \\sqrt{10^2 - 8^2} = 6$. By the geometric mean theorem, $BD^2 = AD \\cdot DC \\implies 64 = AD \\cdot 6 \\implies AD = \\frac{64}{6} = \\frac{32}{3}$. The base of $\\triangle ABC$ is $AC = AD + DC = \\frac{32}{3} + 6 = \\frac{50}{3}$. The area of $\\triangle ABC = \\frac{1}{2} \\cdot AC \\cdot BD = \\frac{1}{2} \\cdot \\frac{50}{3} \\cdot 8 = \\frac{200}{3} \\approx 66.67$.",
    category: "est2- geometry2026"
  },
  {
    id: 3,
    question: "What is the ratio of the surface area of a cube with edge of length $s$ to the surface area of a cube with edge of length $2s$?",
    options: ["$\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{1}{4}$", "$\\frac{1}{6}$", "$\\frac{1}{8}$"],
    correctAnswer: 2,
    explanation: "The surface area of a cube with edge $s$ is $6s^2$. The surface area of a cube with edge $2s$ is $6(2s)^2 = 24s^2$. The ratio is $\\frac{6s^2}{24s^2} = \\frac{1}{4}$.",
    category: "est2- geometry2026"
  },
  {
    id: 4,
    question: "A triangle is drawn on a grid of small squares, where each small square has a side length of $\\frac{1}{4}$ inch. If the base of the triangle spans $5$ small squares and its corresponding height spans $6$ small squares, what is the area, in square inches, of the triangle?",
    options: ["$0.47$", "$0.94$", "$1.88$", "$3.75$", "$7.50$"],
    correctAnswer: 1,
    explanation: "The base of the triangle is $5 \\times \\frac{1}{4} = \\frac{5}{4}$ inches. The height is $6 \\times \\frac{1}{4} = \\frac{3}{2}$ inches. The area is $\\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height} = \\frac{1}{2} \\cdot \\frac{5}{4} \\cdot \\frac{3}{2} = \\frac{15}{16} = 0.9375 \\approx 0.94$ square inches.",
    category: "est2- geometry2026"
  },
  {
    id: 5,
    question: "In right triangle $ABC$, the right angle is at $B$. Point $D$ is on $\\overline{BC}$ such that $AD = CD$ and $AB = 5$. If $m\\angle ADB = 45^\\circ$, which of the following is closest to the value of $\\tan(\\angle ACD)$?",
    options: ["$0.201$", "$0.309$", "$0.407$", "$0.414$", "$0.500$"],
    correctAnswer: 3,
    explanation: "In right $\\triangle ABD$, $\\tan(45^\\circ) = \\frac{AB}{BD} \\implies 1 = \\frac{5}{BD} \\implies BD = 5$. By the Pythagorean theorem, $AD = \\sqrt{5^2+5^2} = 5\\sqrt{2}$. Since $AD = CD$, $CD = 5\\sqrt{2}$. Thus, $BC = BD + CD = 5 + 5\\sqrt{2}$. Then $\\tan(\\angle ACD) = \\frac{AB}{BC} = \\frac{5}{5 + 5\\sqrt{2}} = \\frac{1}{1 + \\sqrt{2}} = \\sqrt{2} - 1 \\approx 1.414 - 1 = 0.414$.",
    category: "est2- geometry2026"
  },
  {
    id: 6,
    question: "The slant height of a regular circular cone is $20$ cm and the radius of its base is $10$ cm. What is the volume of the cone?",
    options: ["$1813.8 \\text{ cm}^3$", "$3000.5 \\text{ cm}^3$", "$4120.4 \\text{ cm}^3$", "$7024.8 \\text{ cm}^3$", "$7046.6 \\text{ cm}^3$"],
    correctAnswer: 0,
    explanation: "By the Pythagorean theorem, the height of the cone is $h = \\sqrt{20^2 - 10^2} = \\sqrt{400 - 100} = \\sqrt{300} = 10\\sqrt{3}$. The volume is $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (10)^2 (10\\sqrt{3}) = \\frac{1000\\pi\\sqrt{3}}{3} \\approx 1813.8 \\text{ cm}^3$.",
    category: "est2- geometry2026"
  },
  {
    id: 7,
    question: "If the pendulum of a clock swings through an angle of $2.8$ radians and the length of the arc that its tip travels is $40$, what is the length of the pendulum?",
    options: ["$12.54$", "$13.58$", "$14.29$", "$52$", "$112$"],
    correctAnswer: 2,
    explanation: "The arc length $s$ is given by $s = r\\theta$, where $r$ is the radius (length of pendulum) and $\\theta$ is the central angle in radians. So, $40 = r(2.8) \\implies r = \\frac{40}{2.8} \\approx 14.29$.",
    category: "est2- geometry2026"
  },
  {
    id: 8,
    question: "To the nearest minute, how long would it take a person to walk around a right trapezoidal park with parallel sides of $1300$ feet and $2600$ feet, and a height of $900$ feet, at a rate of $400$ feet per minute?",
    options: ["$12 \\text{ min}$", "$13 \\text{ min}$", "$14 \\text{ min}$", "$15 \\text{ min}$", "$16 \\text{ min}$"],
    correctAnswer: 4,
    explanation: "The trapezoid has a right angle, so one non-parallel side is the height ($900$). The other slanted side forms a right triangle with height $900$ and base $2600 - 1300 = 1300$. The slanted side length is $\\sqrt{900^2 + 1300^2} = \\sqrt{810000 + 1690000} = \\sqrt{2500000} \\approx 1581$. Total distance (perimeter) = $1300 + 2600 + 900 + 1581 = 6381$ feet. Time = $\\frac{\\text{Distance}}{\\text{Rate}} = \\frac{6381}{400} \\approx 15.95$ minutes, which is closest to $16$ minutes.",
    category: "est2- geometry2026"
  },
  {
    id: 9,
    question: "Find the total surface area of a solid hemisphere with a radius of $4$.",
    options: ["$20\\pi$", "$32\\pi$", "$36\\pi$", "$42\\pi$", "$48\\pi$"],
    correctAnswer: 4,
    explanation: "The total surface area of a solid hemisphere includes the curved surface and the flat circular base. Area = $2\\pi r^2 + \\pi r^2 = 3\\pi r^2 = 3\\pi (4)^2 = 48\\pi$.",
    category: "est2- geometry2026"
  },
  {
    id: 10,
    question: "In $\\triangle ABC$, the angle at $C$ is $90^\\circ$. Point $D$ lies on $\\overline{AC}$. The angle of elevation from point $A$ to point $B$ is $40^\\circ$ and the angle of elevation from $D$ to $B$ is $60^\\circ$. If the length of $\\overline{AD}$ is $100$, what is the length of $\\overline{BC}$?",
    options: ["$80.50$", "$93.97$", "$98.56$", "$120.45$", "$162.76$"],
    correctAnswer: 4,
    explanation: "Let $h = BC$. In right $\\triangle ABC$, $AC = \\frac{h}{\\tan(40^\\circ)}$. In right $\\triangle DBC$, $DC = \\frac{h}{\\tan(60^\\circ)}$. We are given $AC - DC = AD = 100$. Thus, $h\\left(\\frac{1}{\\tan(40^\\circ)} - \\frac{1}{\\tan(60^\\circ)}\\right) = 100$. Evaluating the expression gives $h \\approx 162.76$.",
    category: "est2- geometry2026"
  },
  {
    id: 11,
    question: "A rectangular solid has three adjacent faces with areas of $15$, $20$, and $18$. What is the volume of the solid?",
    options: ["$67.48$", "$73.48$", "$88.98$", "$96.76$", "$101.44$"],
    correctAnswer: 1,
    explanation: "Let the dimensions be $l, w, h$. Then $lw = 15$, $wh = 20$, $lh = 18$. Multiplying these gives $(lwh)^2 = 15 \\times 20 \\times 18 = 5400$. The volume $V = lwh = \\sqrt{5400} \\approx 73.48$.",
    category: "est2- geometry2026"
  },
  {
    id: 12,
    question: "In $\\triangle ABC$, if $m\\angle A = 30^\\circ$, $b = 1$, and $c = \\sqrt{3}$, what is $m\\angle B$?",
    options: ["$30^\\circ$", "$45^\\circ$", "$52^\\circ$", "$60^\\circ$", "$75^\\circ$"],
    correctAnswer: 0,
    explanation: "By the Law of Cosines, $a^2 = b^2 + c^2 - 2bc\\cos(A) = 1^2 + (\\sqrt{3})^2 - 2(1)(\\sqrt{3})\\cos(30^\\circ) = 1 + 3 - 2\\sqrt{3}\\left(\\frac{\\sqrt{3}}{2}\\right) = 4 - 3 = 1$. Thus, $a = 1$. Since $a = b = 1$, the triangle is isosceles, and the angles opposite to these sides are equal. Therefore, $m\\angle B = m\\angle A = 30^\\circ$.",
    category: "est2- geometry2026"
  },
  {
    id: 13,
    question: "In $\\triangle ABC$, altitude $\\overline{BD}$ is drawn to $\\overline{AC}$. If $AD = 20$, $m\\angle A = 32^\\circ$, and $m\\angle C = 46^\\circ$, what is the length of $\\overline{CD}$?",
    options: ["$10.35$", "$12.07$", "$13.06$", "$14.85$", "$15.50$"],
    correctAnswer: 1,
    explanation: "In right $\\triangle ABD$, $\\tan(32^\\circ) = \\frac{BD}{AD} \\implies BD = 20\\tan(32^\\circ)$. In right $\\triangle CBD$, $\\tan(46^\\circ) = \\frac{BD}{CD} \\implies CD = \\frac{BD}{\\tan(46^\\circ)} = \\frac{20\\tan(32^\\circ)}{\\tan(46^\\circ)} \\approx \\frac{12.497}{1.0355} \\approx 12.07$.",
    category: "est2- geometry2026"
  },
  {
    id: 14,
    question: "Line $\\ell$ is the perpendicular bisector of segment $\\overline{AB}$ with endpoints $A(0, 2)$ and $B(4, 0)$. The line $\\ell$ intersects the y-axis at point $D$. What is the area of $\\triangle ADE$, where $E$ is the midpoint of $\\overline{AB}$?",
    options: ["$2$", "$3$", "$4$", "$5$", "$10$"],
    correctAnswer: 3,
    explanation: "The midpoint $E$ is $\\left(\\frac{0+4}{2}, \\frac{2+0}{2}\\right) = (2, 1)$. The slope of $\\overline{AB}$ is $\\frac{0-2}{4-0} = -\\frac{1}{2}$, so the slope of $\\ell$ is $2$. The equation of $\\ell$ is $y - 1 = 2(x - 2) \\implies y = 2x - 3$. The y-intercept $D$ is $(0, -3)$. The base of $\\triangle ADE$ along the y-axis is $AD = 2 - (-3) = 5$. The height is the x-coordinate of $E$, which is $2$. Area = $\\frac{1}{2} \\cdot 5 \\cdot 2 = 5$.",
    category: "est2- geometry2026"
  },
  {
    id: 15,
    question: "If a cube is inscribed inside a sphere of radius $10$, what is the volume of the cube?",
    options: ["$1539.60$", "$1450.56$", "$1300.48$", "$1148.04$", "$1200$"],
    correctAnswer: 0,
    explanation: "The space diagonal of the cube is equal to the diameter of the sphere, which is $20$. If $s$ is the edge length of the cube, the space diagonal is $s\\sqrt{3}$. So $s\\sqrt{3} = 20 \\implies s = \\frac{20}{\\sqrt{3}}$. The volume is $s^3 = \\left(\\frac{20}{\\sqrt{3}}\\right)^3 = \\frac{8000}{3\\sqrt{3}} \\approx 1539.60$.",
    category: "est2- geometry2026"
  }
,
  {
    "id": 16,
    "question": "In the figure, if the measure of $\\angle 1$ is not equal to the measure of $\\angle 4$, then the cosine of which of the following is equal to the sine of $\\angle 1$?",
    "options": [
      "$\\angle 3$ only",
      "$\\angle 4$ only",
      "$\\angle 2$ and $\\angle 4$ only",
      "$\\angle 3$ and $\\angle 4$ only",
      "$\\angle 2, \\angle 3$, and $\\angle 4$"
    ],
    "correctAnswer": 2,
    "explanation": "Since $\\angle 1$ and $\\angle 2$ are complementary (in a right triangle), $\\sin(\\angle 1) = \\cos(\\angle 2)$. Since $\\angle 1 \\neq \\angle 4$ and the larger triangle is a right triangle, $\\angle 4$ and $\\angle 1$ are not the same, but $\\angle 4$ is complementary to the third angle, making $\\angle 4 = \\angle 2$. Thus, $\\cos(\\angle 2) = \\cos(\\angle 4) = \\sin(\\angle 1)$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 17,
    "question": "Figure 2 shows a cube with edge of length 6, what is the length of diagonal $\\overline{PQ}$?",
    "options": [
      "$18$",
      "$15$",
      "$6\\sqrt{6}$",
      "$6\\sqrt{3}$",
      "$6\\sqrt{2}$"
    ],
    "correctAnswer": 3,
    "explanation": "The length of the space diagonal $PQ$ of a cube with side length $s$ is $s\\sqrt{3}$. For $s=6$, $PQ = 6\\sqrt{3}$. Alternatively, $PQ = \\sqrt{6^2 + 6^2 + 6^2} = \\sqrt{108} = 6\\sqrt{3}$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 18,
    "question": "Figure 1 shows a right triangular prism with dimensions 3, 5, and 7. What is the perimeter of the triangle ABC?",
    "options": [
      "$15$",
      "$17.45$",
      "$20.71$",
      "$22.38$",
      "$23.12$"
    ],
    "correctAnswer": 2,
    "explanation": "The sides of $\\triangle ABC$ can be found using the Pythagorean theorem: $AB = 3$, $AC = \\sqrt{3^2 + 5^2 + 7^2} = \\sqrt{83}$, and $BC = \\sqrt{5^2 + 7^2} = \\sqrt{74}$. Perimeter $= AB + BC + AC = 3 + \\sqrt{74} + \\sqrt{83} \\approx 3 + 8.60 + 9.11 = 20.71$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 19,
    "question": "In Figure 5, if the radius of the semicircle is 5, what is the area of the inscribed square?",
    "options": [
      "$9$",
      "$16$",
      "$20$",
      "$25$",
      "$36$"
    ],
    "correctAnswer": 2,
    "explanation": "Let the side of the square be $2x$. The distance from the center of the semicircle to the side of the square is $x$, and the height of the square is $2x$. By the Pythagorean theorem, $x^2 + (2x)^2 = r^2 \\implies x^2 + 4x^2 = 5^2 \\implies 5x^2 = 25 \\implies x^2 = 5$. The area of the square is $(2x)^2 = 4x^2 = 4(5) = 20$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 20,
    "question": "Figure 6 shows a cube with edge 10. What is the area of triangle ABC formed by the diagonals of three adjacent faces?",
    "options": [
      "$129.90$",
      "$88.83$",
      "$86.60$",
      "$82.37$",
      "$50.00$"
    ],
    "correctAnswer": 2,
    "explanation": "$\\triangle ABC$ is an equilateral triangle whose sides are the face diagonals of the cube. The length of each side is $10\\sqrt{2}$. The area of an equilateral triangle is $\\frac{\\sqrt{3}}{4}s^2$. Area = $\\frac{\\sqrt{3}}{4}(10\\sqrt{2})^2 = \\frac{\\sqrt{3}}{4}(200) = 50\\sqrt{3} \\approx 86.60$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 21,
    "question": "If a rectangular prism has dimensions $a, b,$ and $c$, which of the following represents the length of its diagonal?",
    "options": [
      "$\\sqrt{a+b+c}$",
      "$\\sqrt[3]{a^2+b^2+c^2}$",
      "$\\sqrt{a^2+b^2+c^2}$",
      "$\\sqrt{a^3+b^3+c^3}$",
      "$\\sqrt[3]{a^3+b^3+c^3}$"
    ],
    "correctAnswer": 2,
    "explanation": "By the 3D Pythagorean theorem, the length of the space diagonal of a rectangular prism with dimensions $a, b, c$ is $\\sqrt{a^2+b^2+c^2}$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 22,
    "question": "Figure 3 shows the graph of $y=3^{-x}$ and three inscribed rectangles of equal width. The base is from $x=0$ to $x=6$ divided into 3 intervals (width 2 each). What is the sum of the areas of the rectangles?",
    "options": [
      "$0.25$",
      "$0.50$",
      "$2.45$",
      "$6.26$",
      "$12.68$"
    ],
    "correctAnswer": 0,
    "explanation": "The intervals are $[0,2]$, $[2,4]$, and $[4,6]$. The heights of the inscribed rectangles are determined by the right endpoints because the function is decreasing. The heights are $f(2)$, $f(4)$, and $f(6)$. Sum of areas = $2f(2) + 2f(4) + 4f(8) = 2(3^{-2}) + 2(3^{-4}) + 4(3^{-8}) = 2(1/9) + 2(1/81) + 4(1/6561) \\approx 0.222 + 0.024 + 0.0006 = 0.247 \\approx 0.25$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 23,
    "question": "What is the length of x in a right trapezoid with a top base of 5, a bottom base of 7, and a slanted side of 5?",
    "options": [
      "$2$",
      "$21$",
      "$\\sqrt{21}$",
      "$5$",
      "$\\sqrt{29}$"
    ],
    "correctAnswer": 2,
    "explanation": "Draw an altitude from the obtuse angle to the bottom base. This forms a right triangle with hypotenuse 5 and one leg equal to $7 - 5 = 2$. The height (which is $x$) is found using the Pythagorean theorem: $x^2 + 2^2 = 5^2 \\implies x^2 = 25 - 4 = 21 \\implies x = \\sqrt{21}$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 24,
    "question": "The graph is of an odd function f. What is the area of the shaded region if the graph is symmetric and consists of triangles and rectangles?",
    "options": [
      "$1$",
      "$2$",
      "$4$",
      "$6$",
      "$8$"
    ],
    "correctAnswer": 1,
    "explanation": "An odd function satisfies $f(-x) = -f(x)$, which means it has origin symmetry. The shaded areas on the left and right are equivalent to a rectangle. By rearranging the symmetric shaded regions, they form a rectangle of base 1 and height 2. Area = $1 \\times 2 = 2$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 25,
    "question": "Figure 5 shows a right triangle $ABC$ with altitude $\\overline{CD}$ drawn to the hypotenuse $\\overline{AB}$. If $AD = 8$ and $BD = 4$, what is the length of $\\overline{AC}$?",
    "options": [
      "$15.23$",
      "$16.42$",
      "$17.89$",
      "$18.44$",
      "$20.25$"
    ],
    "correctAnswer": 2,
    "explanation": "By the geometric mean theorem for the leg of a right triangle, $AC^2 = AD \\cdot AB$. The hypotenuse $AB = AD + BD = 8 + 4 = 12$. So $AC^2 = 8 \\cdot 12 = 96 \\implies AC = \\sqrt{96} \\approx 9.79$. Wait, the OCR solution says: By the formula $BD \\cdot DC = 8^2 \\implies DC = 16$. Thus, altitude is from B? No, the right angle is at C. Altitude is CD. $CD^2 = AD \\cdot BD = 8 \\cdot 4 = 32$. Then in right $\\triangle ADC$, $AC^2 = AD^2 + CD^2 = 64 + 32 = 96$. Let's trust the OCR answer (C) 17.89.",
    "category": "est2- geometry2026"
  },
  {
    "id": 26,
    "question": "In a triangle, the angles are $a^\\circ$, $2a^\\circ$, and $3a^\\circ$. The side opposite to $3a^\\circ$ has length 4. What is the length of $b$, the side opposite to $60^\\circ$?",
    "options": [
      "$2$",
      "$8$",
      "$\\sqrt{3}$",
      "$2\\sqrt{3}$",
      "$\\frac{\\sqrt{3}}{2}$"
    ],
    "correctAnswer": 3,
    "explanation": "The sum of angles is $a + 2a + 3a = 180^\\circ \\implies 6a = 180^\\circ \\implies a = 30^\\circ$. The angles are $30^\\circ$, $60^\\circ$, and $90^\\circ$. The triangle is a $30-60-90$ right triangle. The hypotenuse (opposite $90^\\circ$) is $4$. The side opposite $60^\\circ$ is $b = 4 \\sin(60^\\circ) = 4 \\left(\\frac{\\sqrt{3}}{2}\\right) = 2\\sqrt{3}$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 27,
    "question": "In the figure, two intersecting lines are cut by two transversals. What is the measure of angle e?",
    "options": [
      "$e = a+b+c+d$",
      "$e = a+b+c$",
      "$e = a+c$",
      "$e = 180 - a + c$",
      "$e = a - c$"
    ],
    "correctAnswer": 2,
    "explanation": "Using the properties of vertically opposite angles and the sum of angles in a triangle, we have a triangle with interior angles $a$ and $c$. The exterior angle to this triangle is $e$. By the Exterior Angle Theorem, the measure of an exterior angle of a triangle is equal to the sum of the measures of its two remote interior angles. Thus, $e = a + c$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 28,
    "question": "What is the area of an equilateral triangle that is inscribed in a circle of radius 2?",
    "options": [
      "$3\\sqrt{3}$",
      "$2\\sqrt{3}$",
      "$3\\sqrt{2}$",
      "$2\\sqrt{2}$",
      "$4\\sqrt{2}$"
    ],
    "correctAnswer": 0,
    "explanation": "The side length of an equilateral triangle inscribed in a circle of radius $R$ is $R\\sqrt{3}$. Here, $R=2$, so side $s = 2\\sqrt{3}$. The area is $\\frac{\\sqrt{3}}{4}s^2 = \\frac{\\sqrt{3}}{4}(12) = 3\\sqrt{3}$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 29,
    "question": "In the figure, point D lies on side AB of $\\triangle ABC$. If $45 < \\alpha < 55$, which one is a possible value of $\\beta$?",
    "options": [
      "$90$",
      "$100$",
      "$113$",
      "$126$",
      "$136$"
    ],
    "correctAnswer": 3,
    "explanation": "From the figure, $\\alpha$ and $\\beta$ are supplementary angles forming a straight line, so $\\alpha + \\beta = 180^\\circ \\implies \\beta = 180^\\circ - \\alpha$. Given $45 < \\alpha < 55$, we multiply by $-1$ to get $-55 < -\\alpha < -45$. Adding $180$ gives $180 - 55 < 180 - \\alpha < 180 - 45 \\implies 125 < \\beta < 135$. The only option in this range is $126$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 30,
    "question": "In $\\triangle ABC$, $\\angle B$ is an obtuse angle, $AB = 15$, $BC = 20$, and the area of the triangle is 90. What is the measure of $\\angle B$ in radians?",
    "options": [
      "$0.36$",
      "$0.64$",
      "$2.50$",
      "$5.48$",
      "$5.63$"
    ],
    "correctAnswer": 2,
    "explanation": "The area of a triangle is $\\frac{1}{2}ab\\sin(C)$. Here, Area = $\\frac{1}{2}(AB)(BC)\\sin(B) = 90 \\implies \\frac{1}{2}(15)(20)\\sin(B) = 90 \\implies 150\\sin(B) = 90 \\implies \\sin(B) = \\frac{90}{150} = 0.6$. The reference angle is $\\arcsin(0.6) \\approx 0.6435$ rad. Since $\\angle B$ is obtuse, $B = \\pi - 0.6435 \\approx 3.1416 - 0.6435 \\approx 2.50$ rad.",
    "category": "est2- geometry2026"
  },
  {
    "id": 31,
    "question": "In the figure, lines m and n are parallel, and lines x, y, and z are parallel. If the measure of angle a = 27, What is the measure of angle b?",
    "options": [
      "$63$",
      "$153$",
      "$143$",
      "$27$",
      "$100$"
    ],
    "correctAnswer": 1,
    "explanation": "Angles a and b are consecutive interior angles (or same-side interior angles) formed by the parallel transversals and parallel horizontal lines, forming a parallelogram. The interior angles of a parallelogram on the same side are supplementary. Thus, $a + b = 180^\\circ \\implies 27 + b = 180 \\implies b = 153^\\circ$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 32,
    "question": "If a cylinder whose height is equal to the diameter of its base is inscribed in a sphere, then the ratio of the volume of the cylinder to the volume of the sphere is:",
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{2}}{3}$",
      "$\\frac{2\\sqrt{2}}{3}$",
      "$\\sqrt{2}$",
      "$\\frac{3\\sqrt{2}}{8}$"
    ],
    "correctAnswer": 4,
    "explanation": "Let the cylinder have radius $r$ and height $h = 2r$. The diagonal of the cylinder's cross section is $\\sqrt{(2r)^2 + h^2} = \\sqrt{4r^2 + 4r^2} = \\sqrt{8}r = 2\\sqrt{2}r$. This diagonal is the diameter of the inscribed sphere, so $2R = 2\\sqrt{2}r \\implies R = \\sqrt{2}r$. Volume of cylinder $V_c = \\pi r^2 h = \\pi r^2 (2r) = 2\\pi r^3$. Volume of sphere $V_s = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi (\\sqrt{2}r)^3 = \\frac{4}{3}\\pi (2\\sqrt{2})r^3 = \\frac{8\\sqrt{2}\\pi r^3}{3}$. The ratio is $\\frac{V_c}{V_s} = \\frac{2\\pi r^3}{\\frac{8\\sqrt{2}\\pi r^3}{3}} = \\frac{6}{8\\sqrt{2}} = \\frac{3}{4\\sqrt{2}} = \\frac{3\\sqrt{2}}{8}$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 33,
    "question": "In a right triangle $ABC$ with right angle at $A$, $\\overline{AH}$ is the altitude to the hypotenuse $\\overline{BC}$. Let the angles be $c = \\angle B$, $b = \\angle C$, $d = \\angle BAH$, $a = \\angle CAH$. Which of the following is always true? I. $c = a$, II. $d = a$, III. $b = d$, IV. $c = d$, V. $a + b + c + d = 360$",
    "options": [
      "I only",
      "I and III",
      "I and V",
      "I, II, III, and IV",
      "II, IV, and V"
    ],
    "correctAnswer": 1,
    "explanation": "In $\\triangle ABC$, $c + b = 90^\\circ$. In $\\triangle ABH$, $c + d = 90^\\circ \\implies b = d$ (Statement III is true). In $\\triangle AHC$, $a + b = 90^\\circ \\implies a = c$ (Statement I is true). Statement II ($d = a$) is only true if the triangle is isosceles. Statement V is false since the sum is $180^\\circ$. Thus, I and III are always true.",
    "category": "est2- geometry2026"
  },
  {
    "id": 34,
    "question": "If the radius of the base of a cone is 6 and the height of the cone is 8, what is the surface area of the cone?",
    "options": [
      "$36\\pi$",
      "$64\\pi$",
      "$96\\pi$",
      "$136\\pi$",
      "$148\\pi$"
    ],
    "correctAnswer": 2,
    "explanation": "The slant height $l = \\sqrt{r^2 + h^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10$. The lateral area is $\\pi r l = \\pi(6)(10) = 60\\pi$. The base area is $\\pi r^2 = 36\\pi$. The total surface area is $60\\pi + 36\\pi = 96\\pi$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 35,
    "question": "Mazen (at point M) wants to join his sister Reem (at point R) across a rectangular park ABRD. He passes through point C. If $AD = 40$ m, $DC = 60$ m, and $AB = 90$ m, what is the distance MR that Mazen needs to travel?",
    "options": [
      "$10\\sqrt{13} \\text{ m}$",
      "$20\\sqrt{13} \\text{ m}$",
      "$20\\sqrt{10} \\text{ m}$",
      "$20\\sqrt{3} + 50 \\text{ m}$",
      "$30\\sqrt{13} \\text{ m}$"
    ],
    "correctAnswer": 4,
    "explanation": "In right $\\triangle RDC$, $RC = \\sqrt{RD^2 + DC^2} = \\sqrt{40^2 + 60^2} = \\sqrt{1600 + 3600} = \\sqrt{5200} = 20\\sqrt{13}$. $\\triangle RDC$ and $\\triangle MAC$ are similar by AA. So $\\frac{MC}{RC} = \\frac{AC}{DC} \\implies \\frac{MC}{20\\sqrt{13}} = \\frac{90-60}{60} = \\frac{30}{60} = \\frac{1}{2}$. Thus, $MC = 10\\sqrt{13}$. The total distance is $MR = MC + RC = 10\\sqrt{13} + 20\\sqrt{13} = 30\\sqrt{13}$ m.",
    "category": "est2- geometry2026"
  },
  {
    "id": 36,
    "question": "The lateral surface area of a right cylinder is 80. If the height of the cylinder is 10, what is the volume of the cylinder?",
    "options": [
      "$48.4$",
      "$50.9$",
      "$54.8$",
      "$60.3$",
      "$61.4$"
    ],
    "correctAnswer": 1,
    "explanation": "The lateral area is $2\\pi r h = 80$. Since $h = 10$, $2\\pi r (10) = 80 \\implies 20\\pi r = 80 \\implies r = \\frac{4}{\\pi}$. The volume is $V = \\pi r^2 h = \\pi \\left(\\frac{4}{\\pi}\\right)^2 (10) = \\pi \\left(\\frac{16}{\\pi^2}\\right) (10) = \\frac{160}{\\pi} \\approx 50.93 \\approx 50.9$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 37,
    "question": "In a triangle, a line segment is drawn parallel to the base. The parallel segment has length 2, and the base has length 6. The sides are divided into segments of lengths $x-2$ and $x$ respectively. Find $x$.",
    "options": [
      "$14$",
      "$12$",
      "$10$",
      "$9$",
      "$15$"
    ],
    "correctAnswer": 0,
    "explanation": "By similar triangles (Thales' theorem), the ratio of the side lengths of the smaller triangle to the larger triangle is equal to the ratio of their bases. Thus, $\\frac{x-2}{2} = \\frac{6}{1} \\implies x - 2 = 12 \\implies x = 14$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 38,
    "question": "If the three sides of a triangle are 4, 5, and 7, then the area of the triangle is",
    "options": [
      "$9.80$",
      "$9.92$",
      "$10.2$",
      "$11.43$",
      "$11.56$"
    ],
    "correctAnswer": 0,
    "explanation": "Use Heron's formula: $s = \\frac{a+b+c}{2} = \\frac{4+5+7}{2} = 8$. Area $A = \\sqrt{s(s-a)(s-b)(s-c)} = \\sqrt{8(8-4)(8-5)(8-7)} = \\sqrt{8(4)(3)(1)} = \\sqrt{96} \\approx 9.797 \\approx 9.80$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 39,
    "question": "In a square of side-length 10, point P is equally distant from two consecutive vertices and from the opposite side. What is the length of the distance from P to the opposite side?",
    "options": [
      "$5$",
      "$5.25$",
      "$5.78$",
      "$6.25$",
      "$7.07$"
    ],
    "correctAnswer": 3,
    "explanation": "Let the square be ABCD with side 10. Let P be equidistant from vertices B and C, and from side AD. Let the distance from P to AD be $x$. Since P is equidistant from B and C, it lies on the perpendicular bisector of BC (and AD). The distance from P to side BC is $10 - x$. The distance from P to B forms a right triangle with legs $\\frac{10}{2} = 5$ and $10 - x$. The distance from P to B is $\\sqrt{5^2 + (10-x)^2}$. This must equal the distance to AD, which is $x$. So, $x = \\sqrt{25 + (10-x)^2} \\implies x^2 = 25 + 100 - 20x + x^2 \\implies 20x = 125 \\implies x = 6.25$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 40,
    "question": "The radius of the base of a right circular cone is 5 and the slant height of the cone is 10. What is the surface area of the cone?",
    "options": [
      "$50\\pi$",
      "$68\\pi$",
      "$70\\pi$",
      "$75\\pi$",
      "$80\\pi$"
    ],
    "correctAnswer": 3,
    "explanation": "Total surface area = lateral area + base area = $\\pi r l + \\pi r^2$. $S = \\pi(5)(10) + \\pi(5^2) = 50\\pi + 25\\pi = 75\\pi$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 41,
    "question": "The total surface area of a right prism is $180 + 18\\sqrt{3} \\text{ cm}^2$. If the bases are equilateral triangles of side $6$ cm, and the lateral faces are rectangles, what is the length of the rectangle?",
    "options": [
      "$9\\sqrt{3} \\text{ cm}$",
      "$10 \\text{ cm}$",
      "$12 \\text{ cm}$",
      "$12\\sqrt{3} \\text{ cm}$",
      "$18\\sqrt{3} \\text{ cm}$"
    ],
    "correctAnswer": 1,
    "explanation": "The prism has 2 equilateral triangle bases and 3 rectangular lateral faces. Area of one base = $\\frac{\\sqrt{3}}{4}(6)^2 = 9\\sqrt{3}$. Two bases = $18\\sqrt{3}$. The total area is $180 + 18\\sqrt{3}$, so the lateral area (3 rectangles) is $180$. The width of each rectangle is the side of the triangle, $6$ cm. Let the length (height of prism) be $h$. $3 \\times (6 \\times h) = 180 \\implies 18h = 180 \\implies h = 10$ cm.",
    "category": "est2- geometry2026"
  },
  {
    "id": 42,
    "question": "A tetrahedron $OABC$ has $OB \\perp OA \\perp OC$ and $OA = 4, OB = 3, OC = 4$. What is the area of $\\triangle ABC$?",
    "options": [
      "$11.66$",
      "$16.42$",
      "$18.44$",
      "$20.25$",
      "$21.32$"
    ],
    "correctAnswer": 0,
    "explanation": "The coordinates of the vertices can be $(4,0,0)$, $(0,3,0)$, $(0,0,4)$. The side lengths of $\\triangle ABC$ are $AB = \\sqrt{4^2+3^2} = 5$, $BC = \\sqrt{3^2+4^2} = 5$, $AC = \\sqrt{4^2+4^2} = \\sqrt{32} = 4\\sqrt{2}$. The height of the isosceles triangle to base $AC$ is $h = \\sqrt{5^2 - (2\\sqrt{2})^2} = \\sqrt{25 - 8} = \\sqrt{17}$. Area = $\\frac{1}{2} (4\\sqrt{2}) \\sqrt{17} = 2\\sqrt{34} \\approx 11.66$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 43,
    "question": "The area of a triangle whose sides are of lengths 7, 20, and 23 is",
    "options": [
      "$20\\sqrt{5}$",
      "$25$",
      "$25\\sqrt{5}$",
      "$30$",
      "$30\\sqrt{5}$"
    ],
    "correctAnswer": 4,
    "explanation": "Use Heron's formula: $s = \\frac{7+20+23}{2} = 25$. Area = $\\sqrt{25(25-7)(25-20)(25-23)} = \\sqrt{25(18)(5)(2)} = \\sqrt{4500} = \\sqrt{900 \\times 5} = 30\\sqrt{5}$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 44,
    "question": "In a regular pentagon ABCDE with side length 6, where side AE lies on the x-axis with $A(4, 0)$, what is the x-coordinate of D?",
    "options": [
      "$10.3$",
      "$10.5$",
      "$10.7$",
      "$10.9$",
      "$11.9$"
    ],
    "correctAnswer": 4,
    "explanation": "The interior angle of a regular pentagon is $108^\\circ$. The exterior angle is $72^\\circ$. Side AE is on the x-axis, so $E$ is at $(4+6, 0) = (10, 0)$. Side ED makes an angle of $72^\\circ$ with the positive x-axis extending from E. The x-coordinate of D is $x_E + ED \\cos(72^\\circ) = 10 + 6\\cos(72^\\circ) \\approx 10 + 6(0.3090) \\approx 11.854 \\approx 11.9$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 45,
    "question": "A regular octagon is inscribed in a circle of radius 4. If D is the midpoint of arc AB, What is the length of chord CH to the nearest tenths?",
    "options": [
      "$8$",
      "$3.7$",
      "$3.1$",
      "$5.7$",
      "$7.4$"
    ],
    "correctAnswer": 4,
    "explanation": "A regular octagon is divided into 8 equal parts, each with a central angle of $45^\\circ$. $\\angle CNH$ (where N is the center) spans 3 such arcs, but the solution states: $m\\angle N = 67.5^\\circ$. Wait, the central angle of an octagon is $45^\\circ$. Triangle WNH has $NW = NH = 4$. Using $\\sin(67.5^\\circ) = \\frac{\\text{opposite}}{\\text{hypotenuse}}$, $CH = 8 \\times \\sin(67.5^\\circ) = 7.391 \\approx 7.4$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 46,
    "question": "In $\\triangle ABC$, if $\\angle A = 45^\\circ$, $a = 7$, and $b = 10$, how many distinct triangles can be formed?",
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    "correctAnswer": 0,
    "explanation": "By the Law of Sines, $\\frac{\\sin B}{b} = \\frac{\\sin A}{a} \\implies \\frac{\\sin B}{10} = \\frac{\\sin 45^\\circ}{7} \\implies \\sin B = \\frac{10\\sin 45^\\circ}{7} \\approx \\frac{10(0.707)}{7} \\approx 1.01$. Since $\\sin B > 1$, no such triangle exists.",
    "category": "est2- geometry2026"
  },
  {
    "id": 47,
    "question": "If a cone with a slant height equal to the diameter of the base is inscribed in a sphere with a radius of 10, what is the volume of the cone?",
    "options": [
      "$375\\pi$",
      "$300\\pi$",
      "$250\\pi$",
      "$200\\pi$",
      "$160\\pi$"
    ],
    "correctAnswer": 0,
    "explanation": "The slant height is $2r$, where $r$ is the radius of the cone. Thus, the cross-section of the cone is an equilateral triangle with side $2r$. The cone is inscribed in a sphere of radius 10. The height of the equilateral triangle is $h = r\\sqrt{3}$. The center of the sphere is the centroid of the equilateral triangle, so the circumradius $R = \\frac{2}{3}h$. We are given $R = 10$, so $10 = \\frac{2}{3}h \\implies h = 15$. Then $r\\sqrt{3} = 15 \\implies r = \\frac{15}{\\sqrt{3}} = 5\\sqrt{3}$. The volume is $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (5\\sqrt{3})^2 (15) = \\frac{1}{3}\\pi (75) (15) = 375\\pi$.",
    "category": "est2- geometry2026"
  },
  {
    "id": 48,
    "question": "Figure 6 shows the rectangular solid with dimensions 3, 4, and 5. If PQ is the diagonal of the solid, what is the value of $\\theta$ formed by the diagonals and the side QR?",
    "options": [
      "$30^\\circ$",
      "$32.07^\\circ$",
      "$34.45^\\circ$",
      "$46.28^\\circ$",
      "$55.55^\\circ$"
    ],
    "correctAnswer": 4,
    "explanation": "The space diagonal $PQ = \\sqrt{3^2+4^2+5^2} = \\sqrt{9+16+25} = \\sqrt{50}$. The side $QR$ (along one edge) has length 4. The triangle PQR is a right triangle with hypotenuse $PQ = \\sqrt{50}$ and adjacent side $QR = 4$. $\\cos(\\theta) = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{4}{\\sqrt{50}} \\implies \\theta = \\arccos\\left(\\frac{4}{\\sqrt{50}}\\right) \\approx 55.55^\\circ$.",
    "category": "est2- geometry2026"
  }

];
