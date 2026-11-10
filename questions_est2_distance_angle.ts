import { Question } from './types';

export const EST2_DISTANCE_ANGLE_SET: Question[] = [
  {
    id: 1,
    question: "Find the distance between the point $(0, 7)$ and line $3x + 2y - 4 = 0$.",
    options: ["$\\frac{9}{\\sqrt{17}}$ units", "$\\frac{18}{5}$ units", "$\\frac{10}{\\sqrt{13}}$ units", "$\\frac{18}{\\sqrt{13}}$ units"],
    correctAnswer: 2,
    explanation: "Using the formula $d = \\frac{|Ax_1+By_1+C|}{\\sqrt{A^2+B^2}}$, $d = \\frac{|3(0)+2(7)-4|}{\\sqrt{3^2+2^2}} = \\frac{|14-4|}{\\sqrt{9+4}} = \\frac{10}{\\sqrt{13}}$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Lines", "Distance Formula"]
  },
  {
    id: 2,
    question: "What is the formula for finding the distance between a point $(x_1, y_1)$ and a line $Ax + By + C = 0$?",
    options: ["$d = \\frac{|Ax_1+By_1+C|}{\\sqrt{A^2+B^2}}$", "$d = \\frac{|(Ax_1+By_1)|}{\\sqrt{A^2+B^2}}$", "$d = \\frac{|Ax_1+By_1+C|}{\\sqrt{A^2-B^2}}$", "$d = |(Ax_1 + By_1)|\\sqrt{A^2+B^2}$"],
    correctAnswer: 0,
    explanation: "The standard formula for the perpendicular distance from a point $(x_1,y_1)$ to a line $Ax+By+C=0$ is $d = \\frac{|Ax_1+By_1+C|}{\\sqrt{A^2+B^2}}$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Lines", "Distance Formula"]
  },
  {
    id: 3,
    question: "The distance of the point $(0, 1)$ from x-axis is",
    options: ["$\\sqrt{2}$ units", "1 unit", "2 units", "1.1 units"],
    correctAnswer: 1,
    explanation: "The distance to the x-axis ($y=0$) from any point $(x,y)$ is $|y|$. So, from $(0,1)$ to the x-axis, the distance is $|1| = 1$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Lines", "Distance Formula"]
  },
  {
    id: 4,
    question: "What is the distance of the point $(1, 0)$ from the line $x = 1$?",
    options: ["1 unit", "2 units", "0 units", "$\\sqrt{2}$ units"],
    correctAnswer: 2,
    explanation: "The point $(1,0)$ actually lies on the line $x=1$. Therefore, its distance to the line is 0.",
    category: "Distance and Angle",
    topics: ["Geometry", "Lines", "Distance Formula"]
  },
  {
    id: 5,
    question: "Find the distance between the point $(0, 0)$ and the line $4x - 3y + 25 = 0$.",
    options: ["5", "2", "-1", "-2"],
    correctAnswer: 0,
    explanation: "Distance $d = \\frac{|4(0)-3(0)+25|}{\\sqrt{4^2+(-3)^2}} = \\frac{25}{\\sqrt{16+9}} = \\frac{25}{5} = 5$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Lines", "Distance Formula"]
  },
  {
    id: 6,
    question: "If the length of the perpendicular drawn from the point $(2, a)$ to the straight line $3x + 4y + 1 = 0$ equals 3 length units, then $a = \\_\\_\\_\\_\\_$, where $a \\in \\mathbb{Z}^+$.",
    options: ["3", "5", "4", "2"],
    correctAnswer: 3,
    explanation: "Given $d = 3$, $d = \\frac{|3(2)+4(a)+1|}{\\sqrt{3^2+4^2}} = \\frac{|6+4a+1|}{5} = \\frac{|4a+7|}{5}$. So $|4a+7|=15$. $4a+7=15 \\implies 4a=8 \\implies a=2$. Or $4a+7=-15 \\implies a=-22/4$ (not integer). Thus $a=2$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Lines", "Distance Formula"]
  },
  {
    id: 7,
    question: "Given $A(-2, -7), B(-4, 1)$, and $M(-7, -4)$ in a circle with center $M$, then the perpendicular distance between chord $\\overline{AB}$ and $M$ equals _____ length units.",
    options: ["$\\sqrt{34}$", "$\\sqrt{17}$", "$2\\sqrt{17}$", "$2\\sqrt{34}$"],
    correctAnswer: 1,
    explanation: "Line equation of AB: Slope $m = \\frac{1 - (-7)}{-4 - (-2)} = \\frac{8}{-2} = -4$. Equation: $y - 1 = -4(x + 4) \\implies 4x + y + 15 = 0$. Distance from $M(-7,-4)$ to $4x+y+15=0$: $d = \\frac{|4(-7)+1(-4)+15|}{\\sqrt{4^2+1^2}} = \\frac{|-28-4+15|}{\\sqrt{17}} = \\frac{|-17|}{\\sqrt{17}} = \\sqrt{17}$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Lines", "Distance Formula"]
  },
  {
    id: 8,
    question: "If $c$ is the length of the perpendicular drawn from the origin to straight line $x + by = 2c$, then $|b| = \\_\\_\\_\\_\\_$.",
    options: ["1", "$\\sqrt{3}$", "$c$", "$\\frac{1}{c}$"],
    explanation: "Rewrite line: $x + by - 2c = 0$. Distance from origin $(0,0)$ is $c$. So we have $c = \\frac{|0+0-2c|}{\\sqrt{1^2+b^2}} = \\frac{2c}{\\sqrt{1+b^2}}$. Dividing by c gives $\\sqrt{1+b^2} = 2$. Squaring gives $1+b^2 = 4 \\implies b^2=3 \\implies |b|=\\sqrt{3}$. Wait, checking the options and the test it should be answer A? Let me recalculate: $c = |2c|/\\sqrt{1+b^2}$. Wait, the handwritten image says $1+b^2=2^2=4 \\implies b^2=3$, so $|b|=\\sqrt{3}$, which is Option B. Let's fix the correct answer to B. In OCR it said A, but it's $\\sqrt{3}$ which is B.",
    correctAnswer: 1,
    category: "Distance and Angle",
    topics: ["Geometry", "Lines", "Distance Formula"]
  },
  {
    id: 9,
    question: "Given two points $A(1, -2, 1)$ and $B(5, 6, z_B)$, find a value of $z_B$ if the distance in space between the two points is equal to 9.",
    options: ["1", "2", "3", "-1", "-2"],
    correctAnswer: 1,
    explanation: "$9^2 = (5-1)^2 + (6 - (-2))^2 + (z_B - 1)^2 \\implies 81 = 16 + 64 + (z_B-1)^2 \\implies 1 = (z_B-1)^2 \\implies z_B - 1 = \\pm 1$. Thus $z_B = 2$ or $0$. Only 2 is in the options.",
    category: "Distance and Angle",
    topics: ["Geometry", "Distance Formula", "3D Coordinates"]
  },
  {
    id: 10,
    question: "What is the distance between the two points of intersection of the circles whose equations are $x^2 + y^2 = 16$ and $(x-4)^2 + (y-4)^2 = 16$?",
    options: ["1.12", "2.73", "3.35", "4.87", "5.66"],
    correctAnswer: 4,
    explanation: "Looking at the circles, the intersection passing points are easy to guess or solve. The points are $(0,4)$ and $(4,0)$. Distance is $\\sqrt{4^2+4^2} = \\sqrt{32} = 4\\sqrt{2} \\approx 5.66$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Circles", "Distance Formula"]
  },
  {
    id: 11,
    question: "The distance $AB$ between the points $A(-3, 7)$ and $B(6, -5)$ in a coordinate system in which the y-axis is inclined $60^\\circ$ to the positive x-axis is",
    options: ["$\\sqrt{117}$", "$\\sqrt{120}$", "$\\sqrt{189}$", "$\\sqrt{333}$", "$\\sqrt{108}$"],
    correctAnswer: 0,
    explanation: "Distance squared in oblique coordinates: $d^2 = \\Delta x^2 + \\Delta y^2 + 2\\Delta x\\Delta y\\cos\\theta = (6 - (-3))^2 + (-5 - 7)^2 + 2(9)(-12)\\cos(60^\\circ) = 81 + 144 + 2(9)(-12)(0.5) = 225 - 108 = 117$. The distance is $\\sqrt{117}$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Oblique Coordinates", "Distance Formula"]
  },
  {
    id: 12,
    question: "What is the nature of triangle $ABC$ if $A(2, 3, 1)$, $B(-1, 3, 0)$ and $C(2, 3, -1)$?",
    options: ["Isosceles", "Right", "Right isosceles", "Equilateral", "Scalene"],
    correctAnswer: 0,
    explanation: "$AB = \\sqrt{(-1-2)^2 + 0 + (0-1)^2} = \\sqrt{9+1} = \\sqrt{10}$.\n$BC = \\sqrt{(2 - (-1))^2 + 0 + (-1-0)^2} = \\sqrt{9+1} = \\sqrt{10}$.\n$AC = \\sqrt{0 + 0 + (-1-1)^2} = \\sqrt{4} = 2$.\nSince $AB = BC$, the triangle is isosceles. But is it right? $AB^2+BC^2 = 10+10 = 20 \\neq AC^2$. So it's just isosceles.",
    category: "Distance and Angle",
    topics: ["Geometry", "Triangles", "3D Coordinates"]
  },
  {
    id: 13,
    question: "Given $A(2, 3, -7)$ and $B(3m, -2m+1, 6)$. What is the value of $m$ if $AB^2 = 221$?",
    options: ["-2", "0", "1", "2", "4"],
    correctAnswer: 3,
    explanation: "$AB^2 = (3m-2)^2 + (-2m-2)^2 + (6 - (-7))^2 = 221$. \n$9m^2 - 12m + 4 + 4m^2 + 8m + 4 + 169 = 221$, so $13m^2 - 4m + 177 = 221 \\implies 13m^2 - 4m - 44 = 0$.\nPlugging options: $m=2 \\implies 13(4) - 4(2) - 44 = 52 - 8 - 44 = 0$. Thus $m=2$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Distance Formula", "3D Coordinates"]
  },
  {
    id: 14,
    question: "What is the distance between two points of $(1, 2, 3)$ and $(0, -4, -2)$?",
    options: ["7.87", "8.24", "8.48", "10.25", "11.24"],
    correctAnswer: 0,
    explanation: "$d = \\sqrt{(0-1)^2 + (-4-2)^2 + (-2-3)^2} = \\sqrt{1 + 36 + 25} = \\sqrt{62} \\approx 7.87$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Distance Formula", "3D Coordinates"]
  },
  {
    id: 15,
    question: "How far is the point $(2, 1)$ from the line $3x - y = 4$?",
    options: ["0.316", "0.542", "1.358", "2.855", "3.282"],
    correctAnswer: 0,
    explanation: "Rewrite line to standard form: $3x - y - 4 = 0$. $d = \\frac{|3(2)-1(1)-4|}{\\sqrt{3^2+(-1)^2}} = \\frac{|6-1-4|}{\\sqrt{10}} = \\frac{1}{\\sqrt{10}} \\approx 0.316$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Lines", "Distance Formula"]
  },
  {
    id: 16,
    question: "Which of the following is the distance from the origin to the plane $x - y - z - 3 = 0$?",
    options: ["$\\sqrt{2}$", "$\\sqrt{3}$", "2", "$\\sqrt{5}$", "$\\sqrt{6}$"],
    correctAnswer: 1,
    explanation: "Distance from origin $(0,0,0)$ to plane $Ax+By+Cz+D=0$ is $d = \\frac{|D|}{\\sqrt{A^2+B^2+C^2}}$. Thus $d = \\frac{|-3|}{\\sqrt{1^2+(-1)^2+(-1)^2}} = \\frac{3}{\\sqrt{3}} = \\sqrt{3}$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Planes", "3D Coordinates", "Distance Formula"]
  },
  {
    id: 17,
    question: "What is the distance from the plane $3x - 4y - 5z + 10 = 0$ to the point $(0, 0, 0)$?",
    options: ["$\\sqrt{2}$", "2", "$2\\sqrt{2}$", "4", "$4\\sqrt{2}$"],
    correctAnswer: 0,
    explanation: "Distance $d = \\frac{|10|}{\\sqrt{3^2 + (-4)^2 + (-5)^2}} = \\frac{10}{\\sqrt{9 + 16 + 25}} = \\frac{10}{\\sqrt{50}} = \\frac{10}{5\\sqrt{2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Planes", "3D Coordinates", "Distance Formula"]
  },
  {
    id: 18,
    question: "What is the distance from the plane $x - 2y + 3z = 5$ to the point $(2, 2, 0)$?",
    options: ["1.871", "2.225", "2.786", "3.125", "4.750"],
    correctAnswer: 0,
    explanation: "Rewrite plane as $x - 2y + 3z - 5 = 0$. $d = \\frac{|2 - 2(2) + 3(0) - 5|}{\\sqrt{1^2 + (-2)^2 + 3^2}} = \\frac{|2 - 4 - 5|}{\\sqrt{14}} = \\frac{7}{\\sqrt{14}} \\approx 1.871$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Planes", "3D Coordinates", "Distance Formula"]
  },
  {
    id: 19,
    question: "In the xy-plane, consider a straight line ($D$) passing through $A(-\\sqrt{3}, -3 - 2\\sqrt{3})$ and making an acute angle $\\alpha$ with the x-axis such that $\\cos \\alpha = \\frac{\\sqrt{3}}{3} \\times \\sin \\alpha$. The values of $\\sin \\alpha$ and $\\cos \\alpha$ are respectively",
    options: ["$-\\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{3}}{2}, \\frac{1}{2}$", "$-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}, -\\frac{1}{2}$"],
    correctAnswer: 2,
    explanation: "We are given $\\cos \\alpha = \\frac{\\sqrt{3}}{3} \\sin \\alpha$. Then $\\frac{\\sin \\alpha}{\\cos \\alpha} = \\frac{3}{\\sqrt{3}} = \\sqrt{3}$. Thus $\\tan \\alpha = \\sqrt{3}$. Since $\\alpha$ is an acute angle, $\\alpha = 60^\\circ$. The values are $\\sin(60^\\circ) = \\frac{\\sqrt{3}}{2}$ and $\\cos(60^\\circ) = \\frac{1}{2}$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Trigonometry", "Lines"]
  },
  {
    id: 20,
    question: "In the xy-plane, consider the points $A(-3, 0), B(3, 5)$ and $C(2, 0)$. What is the approximate measure, in degrees, of the angle $\\theta$ formed by the lines AB and BC?",
    options: ["$39^\\circ$", "$40^\\circ$", "$62^\\circ$", "$79^\\circ$", "$28^\\circ$"],
    correctAnswer: 0,
    explanation: "Slope of AB: $m_1 = \\frac{5 - 0}{3 - (-3)} = \\frac{5}{6}$. Slope of BC: $m_2 = \\frac{0 - 5}{2 - 3} = \\frac{-5}{-1} = 5$. The angle $\\theta$ between them is given by $\\tan \\theta = |\\frac{m_1 - m_2}{1 + m_1 m_2}| = |\\frac{5/6 - 5}{1 + (5/6)(5)}| = |\\frac{-25/6}{31/6}| = \\frac{25}{31}$. $\\theta = \\tan^{-1}(\\frac{25}{31}) \\approx 38.88^\\circ \\approx 39^\\circ$.",
    category: "Distance and Angle",
    topics: ["Geometry", "Angles", "Lines"]
  }
];
