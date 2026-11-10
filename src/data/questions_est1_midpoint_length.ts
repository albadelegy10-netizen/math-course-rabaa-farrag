import { Question } from '../../types';

export const EST1_MIDPOINT_LENGTH_SET: Question[] = [
  {
    id: 1,
    question: "What is the midpoint of the line segment connecting the points $A(-4, 6)$ and $B(8, -2)$ in the coordinate plane?",
    options: ["$(2, 2)$", "$(6, 4)$", "$(4, 4)$", "$(-2, 2)$"],
    correctAnswer: 0,
    explanation: "Using the midpoint formula $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$:\n$$ x_M = \\frac{-4 + 8}{2} = \\frac{4}{2} = 2 $$\n$$ y_M = \\frac{6 + (-2)}{2} = \\frac{4}{2} = 2 $$\nThus, the midpoint is $(2, 2)$.",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Midpoint"]
  },
  {
    id: 2,
    question: "What is the distance between the points $P(1, 2)$ and $Q(7, 10)$ in the $xy$-plane?",
    options: ["$8$", "$10$", "$12$", "$14$"],
    correctAnswer: 1,
    explanation: "Using the distance formula $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$:\n$$ d = \\sqrt{(7 - 1)^2 + (10 - 2)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Distance"]
  },
  {
    id: 3,
    question: "A circle has a diameter of $14\\text{ cm}$. What is its circumference in terms of $\\pi$?",
    options: ["$7\\pi\\text{ cm}$", "$14\\pi\\text{ cm}$", "$28\\pi\\text{ cm}$", "$49\\pi\\text{ cm}$"],
    correctAnswer: 1,
    explanation: "The formula for the circumference of a circle given diameter $d$ is:\n$$ C = \\pi d = \\pi \\times 14 = 14\\pi\\text{ cm} $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Circumference"]
  },
  {
    id: 4,
    question: "A circle has a radius of $9\\text{ units}$. What is the area of the circle?",
    options: ["$18\\pi$", "$36\\pi$", "$81\\pi$", "$162\\pi$"],
    correctAnswer: 2,
    explanation: "The formula for the area of a circle with radius $r$ is:\n$$ A = \\pi r^2 = \\pi (9^2) = 81\\pi $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Area"]
  },
  {
    id: 5,
    question: "The midpoint of segment $AB$ is $M(3, -1)$. If point $A$ has coordinates $(-1, 5)$, what are the coordinates of point $B$?",
    options: ["$(1, 2)$", "$(5, -3)$", "$(7, -7)$", "$(8, -6)$"],
    correctAnswer: 2,
    explanation: "Let point $B$ be $(x_B, y_B)$. Using the midpoint formula:\n$$ \\frac{-1 + x_B}{2} = 3 \\implies -1 + x_B = 6 \\implies x_B = 7 $$\n$$ \\frac{5 + y_B}{2} = -1 \\implies 5 + y_B = -2 \\implies y_B = -7 $$\nTherefore, point $B$ is $(7, -7)$.",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Midpoint"]
  },
  {
    id: 6,
    question: "Find the exact length of the line segment joining the points $C(-2, 3)$ and $D(4, -1)$.",
    options: ["$2\\sqrt{13}$", "$4\\sqrt{13}$", "$\\sqrt{10}$", "$2\\sqrt{5}$"],
    correctAnswer: 0,
    explanation: "Applying the distance formula:\n$$ d = \\sqrt{(4 - (-2))^2 + (-1 - 3)^2} = \\sqrt{6^2 + (-4)^2} = \\sqrt{36 + 16} = \\sqrt{52} = \\sqrt{4 \\times 13} = 2\\sqrt{13} $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Distance"]
  },
  {
    id: 7,
    question: "The area of a circular region is $36\\pi\\text{ cm}^2$. What is the circumference of this circle?",
    options: ["$6\\pi\\text{ cm}$", "$12\\pi\\text{ cm}$", "$18\\pi\\text{ cm}$", "$24\\pi\\text{ cm}$"],
    correctAnswer: 1,
    explanation: "First find the radius from the area:\n$$ A = \\pi r^2 = 36\\pi \\implies r^2 = 36 \\implies r = 6 $$\nNext, calculate the circumference:\n$$ C = 2\\pi r = 2\\pi(6) = 12\\pi\\text{ cm} $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Area", "Circumference"]
  },
  {
    id: 8,
    question: "A circular bicycle wheel has a radius of $35\\text{ cm}$. How far, in centimeters, does the wheel travel in $100$ complete revolutions? (Use $\\pi \\approx \\frac{22}{7}$)",
    options: ["$11,000\\text{ cm}$", "$15,400\\text{ cm}$", "$22,000\\text{ cm}$", "$38,500\\text{ cm}$"],
    correctAnswer: 2,
    explanation: "In 1 revolution, the distance traveled equals the circumference:\n$$ C = 2\\pi r = 2 \\times \\frac{22}{7} \\times 35 = 220\\text{ cm} $$\nFor $100$ revolutions, total distance:\n$$ \\text{Distance} = 100 \\times 220 = 22,000\\text{ cm} $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Circumference"]
  },
  {
    id: 9,
    question: "In the $xy$-plane, line segment $JK$ has endpoints $J(a, b)$ and $K(3a, 5b)$. What is the midpoint of segment $JK$ in terms of $a$ and $b$?",
    options: ["$(a, 2b)$", "$(2a, 3b)$", "$(3a, 4b)$", "$(4a, 6b)$"],
    correctAnswer: 1,
    explanation: "Using the midpoint formula:\n$$ M = \\left(\\frac{a + 3a}{2}, \\frac{b + 5b}{2}\\right) = \\left(\\frac{4a}{2}, \\frac{6b}{2}\\right) = (2a, 3b) $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Midpoint"]
  },
  {
    id: 10,
    question: "A triangle in the coordinate plane has vertices $O(0,0)$, $A(6,0)$, and $B(0,8)$. What is the perimeter of triangle $OAB$?",
    options: ["$18$", "$20$", "$24$", "$48$"],
    correctAnswer: 2,
    explanation: "The side lengths are:\n$$ OA = 6 $$\n$$ OB = 8 $$\n$$ AB = \\sqrt{(6 - 0)^2 + (0 - 8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 $$\nPerimeter $= 6 + 8 + 10 = 24$.",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Distance"]
  },
  {
    id: 11,
    question: "A circle has a radius of $12\\text{ inches}$. What is the length of an arc subtended by a central angle of $60^\\circ$?",
    options: ["$2\\pi\\text{ in}$", "$4\\pi\\text{ in}$", "$6\\pi\\text{ in}$", "$12\\pi\\text{ in}$"],
    correctAnswer: 1,
    explanation: "Arc length formula $L = \\left(\\frac{\\theta}{360^\\circ}\\right) \\cdot 2\\pi r$:\n$$ L = \\frac{60^\\circ}{360^\\circ} \\cdot 2\\pi(12) = \\frac{1}{6} \\cdot 24\\pi = 4\\pi\\text{ inches} $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Arc Length"]
  },
  {
    id: 12,
    question: "In a circle with radius $10\\text{ cm}$, a sector has a central angle of $90^\\circ$. What is the area of this sector?",
    options: ["$10\\pi\\text{ cm}^2$", "$20\\pi\\text{ cm}^2$", "$25\\pi\\text{ cm}^2$", "$50\\pi\\text{ cm}^2$"],
    correctAnswer: 2,
    explanation: "Sector area formula $A_{\\text{sector}} = \\left(\\frac{\\theta}{360^\\circ}\\right) \\cdot \\pi r^2$:\n$$ A_{\\text{sector}} = \\frac{90^\\circ}{360^\\circ} \\cdot \\pi(10^2) = \\frac{1}{4} \\cdot 100\\pi = 25\\pi\\text{ cm}^2 $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Sector Area"]
  },
  {
    id: 13,
    question: "A circle in the $xy$-plane has a diameter with endpoints $A(-3, 1)$ and $B(5, 7)$. What is the length of the radius of the circle?",
    options: ["$5$", "$10$", "$\\sqrt{50}$", "$25$"],
    correctAnswer: 0,
    explanation: "First calculate the diameter using the distance formula:\n$$ d = \\sqrt{(5 - (-3))^2 + (7 - 1)^2} = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10 $$\nThe radius $r = \\frac{d}{2} = \\frac{10}{2} = 5$.",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Distance"]
  },
  {
    id: 14,
    question: "For a circle in the $xy$-plane with diameter endpoints $A(-3, 1)$ and $B(5, 7)$, what is the standard equation of the circle?",
    options: [
      "$(x + 1)^2 + (y + 4)^2 = 25$",
      "$(x - 1)^2 + (y - 4)^2 = 25$",
      "$(x - 1)^2 + (y - 4)^2 = 100$",
      "$(x + 3)^2 + (y - 1)^2 = 25$"
    ],
    correctAnswer: 1,
    explanation: "The center $(h, k)$ is the midpoint of $AB$:\n$$ h = \\frac{-3 + 5}{2} = 1, \\quad k = \\frac{1 + 7}{2} = 4 $$\nRadius $r = 5$, so $r^2 = 25$. Equation: $(x - 1)^2 + (y - 4)^2 = 25$.",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Midpoint", "Equation"]
  },
  {
    id: 15,
    question: "The midpoint of line segment $EF$ is $M\\left(\\frac{1}{2}, \\frac{5}{2}\\right)$. If point $E$ has coordinates $(-2, 4)$, what is the $x$-coordinate of point $F$?",
    options: ["$1$", "$2$", "$3$", "$5$"],
    correctAnswer: 2,
    explanation: "Using the $x$-coordinate midpoint relation:\n$$ \\frac{-2 + x_F}{2} = \\frac{1}{2} \\implies -2 + x_F = 1 \\implies x_F = 3 $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Midpoint"]
  },
  {
    id: 16,
    question: "Point $P(x, 0)$ lies on the $x$-axis and is equidistant from $A(0, 4)$ and $B(6, 2)$. What is the value of $x$?",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correctAnswer: 1,
    explanation: "Set distance $PA^2 = PB^2$:\n$$ (x - 0)^2 + (0 - 4)^2 = (x - 6)^2 + (0 - 2)^2 $$\n$$ x^2 + 16 = x^2 - 12x + 36 + 4 $$\n$$ 16 = -12x + 40 \\implies 12x = 24 \\implies x = 2 $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Distance"]
  },
  {
    id: 17,
    question: "Two concentric circles have radii of $5\\text{ cm}$ and $8\\text{ cm}$. What is the area of the ring (annulus) between the two circles?",
    options: ["$13\\pi\\text{ cm}^2$", "$26\\pi\\text{ cm}^2$", "$39\\pi\\text{ cm}^2$", "$89\\pi\\text{ cm}^2$"],
    correctAnswer: 2,
    explanation: "The area of the region between two concentric circles is:\n$$ A = \\pi R^2 - \\pi r^2 = \\pi (8^2) - \\pi (5^2) = 64\\pi - 25\\pi = 39\\pi\\text{ cm}^2 $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Area"]
  },
  {
    id: 18,
    question: "A square is inscribed in a circle of radius $6\\text{ units}$. What is the area of the region inside the circle but outside the square?",
    options: [
      "$36\\pi - 36$",
      "$36\\pi - 72$",
      "$72\\pi - 36$",
      "$144\\pi - 72$"
    ],
    correctAnswer: 1,
    explanation: "The diagonal of the inscribed square equals the diameter of the circle, $d = 2(6) = 12$.\nIf $s$ is the side length of the square: $s\\sqrt{2} = 12 \\implies s = \\frac{12}{\\sqrt{2}} = 6\\sqrt{2}$.\nArea of square $= s^2 = (6\\sqrt{2})^2 = 72$.\nArea of circle $= \\pi(6^2) = 36\\pi$.\nRemaining region area $= 36\\pi - 72$.",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Area"]
  },
  {
    id: 19,
    question: "Segment $AB$ has endpoints $A(2, 5)$ and $B(8, 5)$. What is the equation of the perpendicular bisector of segment $AB$?",
    options: ["$y = 5$", "$x = 5$", "$x = 3$", "$y = x + 3$"],
    correctAnswer: 1,
    explanation: "The midpoint of $AB$ is $\\left(\\frac{2+8}{2}, \\frac{5+5}{2}\\right) = (5, 5)$.\nSince $AB$ lies on the horizontal line $y = 5$, its perpendicular bisector is a vertical line passing through $x = 5$.",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Midpoint"]
  },
  {
    id: 20,
    question: "If the radius of Circle $A$ is $3$ times the radius of Circle $B$, what is the ratio of the circumference of Circle $A$ to the circumference of Circle $B$?",
    options: ["$1:3$", "$3:1$", "$6:1$", "$9:1$"],
    correctAnswer: 1,
    explanation: "Circumference is directly proportional to radius ($C = 2\\pi r$).\nIf $r_A = 3 r_B$, then $C_A = 2\\pi (3 r_B) = 3 (2\\pi r_B) = 3 C_B$.\nTherefore, the ratio is $3:1$.",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Circumference"]
  },
  {
    id: 21,
    question: "If the circumference of Circle $X$ is $4$ times the circumference of Circle $Y$, by what factor is the area of Circle $X$ larger than the area of Circle $Y$?",
    options: ["$4$", "$8$", "$16$", "$64$"],
    correctAnswer: 2,
    explanation: "Since $C_X = 4 C_Y$, the radius $r_X = 4 r_Y$.\nThe area scales with the square of the radius ratio:\n$$ A_X = \\pi (r_X)^2 = \\pi (4 r_Y)^2 = 16 \\pi r_Y^2 = 16 A_Y $$\nThus, the area is larger by a factor of $16$.",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Area", "Circumference"]
  },
  {
    id: 22,
    question: "On a map grid where $1\\text{ unit} = 2\\text{ miles}$, City $M$ is located at $(-3, 4)$ and City $N$ is located at $(5, -2)$. What is the actual distance in miles between City $M$ and City $N$?",
    options: ["$10\\text{ miles}$", "$15\\text{ miles}$", "$20\\text{ miles}$", "$40\\text{ miles}$"],
    correctAnswer: 2,
    explanation: "Grid distance:\n$$ d = \\sqrt{(5 - (-3))^2 + (-2 - 4)^2} = \\sqrt{8^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\text{ units} $$\nSince $1\\text{ unit} = 2\\text{ miles}$, actual distance $= 10 \\times 2 = 20\\text{ miles}$.",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Distance"]
  },
  {
    id: 23,
    question: "The table below shows the coordinates of three vertices of parallelogram $ABCD$:<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Vertex</th><th class=\"border border-gray-400 px-2 py-1\">$x$-coordinate</th><th class=\"border border-gray-400 px-2 py-1\">$y$-coordinate</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">$A$</td><td class=\"border border-gray-400 px-2 py-1\">$-2$</td><td class=\"border border-gray-400 px-2 py-1\">$1$</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">$B$</td><td class=\"border border-gray-400 px-2 py-1\">$4$</td><td class=\"border border-gray-400 px-2 py-1\">$5$</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">$C$</td><td class=\"border border-gray-400 px-2 py-1\">$8$</td><td class=\"border border-gray-400 px-2 py-1\">$1$</td></tr></tbody></table>If the diagonals of a parallelogram bisect each other, what is the intersection point of the diagonals $AC$ and $BD$?",
    options: ["$(3, 1)$", "$(1, 3)$", "$(6, 2)$", "$(3, 3)$"],
    correctAnswer: 0,
    explanation: "The intersection of the diagonals is the midpoint of diagonal $AC$:\n$$ M = \\left(\\frac{-2 + 8}{2}, \\frac{1 + 1}{2}\\right) = \\left(\\frac{6}{2}, \\frac{2}{2}\\right) = (3, 1) $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Midpoint"]
  },
  {
    id: 24,
    question: "Using the same parallelogram $ABCD$ with vertices $A(-2, 1)$, $B(4, 5)$, $C(8, 1)$, and diagonal intersection point at $M(3, 1)$, what are the coordinates of vertex $D$?",
    options: ["$(2, -3)$", "$(2, 3)$", "$(-2, 3)$", "$(0, -1)$"],
    correctAnswer: 0,
    explanation: "Point $M(3, 1)$ is also the midpoint of diagonal $BD$. Let $D = (x_D, y_D)$:\n$$ \\frac{4 + x_D}{2} = 3 \\implies 4 + x_D = 6 \\implies x_D = 2 $$\n$$ \\frac{5 + y_D}{2} = 1 \\implies 5 + y_D = 2 \\implies y_D = -3 $$\nThus, vertex $D$ is $(2, -3)$.",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Midpoint"]
  },
  {
    id: 25,
    question: "A garden track is shaped as a semicircle with a diameter of $20\\text{ meters}$. What is the total perimeter of the semicircle, including its straight boundary?",
    options: [
      "$10\\pi\\text{ meters}$",
      "$20\\pi\\text{ meters}$",
      "$10\\pi + 20\\text{ meters}$",
      "$20\\pi + 20\\text{ meters}$"
    ],
    correctAnswer: 2,
    explanation: "Curved arc length $= \\frac{1}{2} \\pi d = \\frac{1}{2} \\pi (20) = 10\\pi\\text{ meters}$.\nStraight boundary length $= d = 20\\text{ meters}$.\nTotal Perimeter $= 10\\pi + 20\\text{ meters}$.",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Circumference"]
  },
  {
    id: 26,
    question: "What is the length of segment $AB$ if point $A$ is at $(3, -5)$ and point $B$ is at $(-1, 3)$?",
    options: ["$4\\sqrt{5}$", "$80$", "$2\\sqrt{20}$", "$10$"],
    correctAnswer: 0,
    explanation: "Using the distance formula:\n$$ d = \\sqrt{(-1 - 3)^2 + (3 - (-5))^2} = \\sqrt{(-4)^2 + 8^2} = \\sqrt{16 + 64} = \\sqrt{80} = 4\\sqrt{5} $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Distance"]
  },
  {
    id: 27,
    question: "A circle is inscribed inside a square with side length $10\\text{ cm}$. What is the area of the region inside the square but outside the circle?",
    options: [
      "$25\\pi - 100$",
      "$100 - 25\\pi$",
      "$100 - 10\\pi$",
      "$50 - 25\\pi$"
    ],
    correctAnswer: 1,
    explanation: "Area of square $= 10^2 = 100\\text{ cm}^2$.\nThe diameter of the inscribed circle equals the side of the square, so $d = 10 \\implies r = 5$.\nArea of circle $= \\pi (5^2) = 25\\pi\\text{ cm}^2$.\nRemaining area $= 100 - 25\\pi\\text{ cm}^2$.",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Area"]
  },
  {
    id: 28,
    question: "The distance between the points $(2, y)$ and $(5, 1)$ is equal to $5\\text{ units}$. What are the possible values of $y$?",
    options: [
      "$y = 3$ or $y = -5$",
      "$y = -3$ or $y = 5$",
      "$y = 4$ or $y = -4$",
      "$y = 1$ or $y = 5$"
    ],
    correctAnswer: 1,
    explanation: "Using the distance formula squared:\n$$ (5 - 2)^2 + (1 - y)^2 = 5^2 $$\n$$ 3^2 + (1 - y)^2 = 25 $$\n$$ 9 + (1 - y)^2 = 25 \\implies (1 - y)^2 = 16 $$\n$$ 1 - y = 4 \\implies y = -3 $$\n$$ 1 - y = -4 \\implies y = 5 $$\nTherefore, $y = -3$ or $y = 5$.",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Distance"]
  },
  {
    id: 29,
    question: "Segment $AB$ has endpoints $A(0, 0)$ and $B(12, 18)$. Point $M$ is the midpoint of $AB$, and point $N$ is the midpoint of segment $AM$. What are the coordinates of point $N$?",
    options: ["$(3, 4.5)$", "$(6, 9)$", "$(3, 6)$", "$(4.5, 3)$"],
    correctAnswer: 0,
    explanation: "First find midpoint $M$ of $AB$:\n$$ M = \\left(\\frac{0 + 12}{2}, \\frac{0 + 18}{2}\\right) = (6, 9) $$\nNext find midpoint $N$ of $AM$ with $A(0,0)$ and $M(6,9)$:\n$$ N = \\left(\\frac{0 + 6}{2}, \\frac{0 + 9}{2}\\right) = (3, 4.5) $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Coordinate Geometry", "Midpoint"]
  },
  {
    id: 30,
    question: "A circle has a total circumference of $36\\pi\\text{ cm}$. If the length of arc $AB$ on this circle is $3\\pi\\text{ cm}$, what is the measure of the central angle $\\theta$ subtended by arc $AB$ in degrees?",
    options: ["$15^\\circ$", "$30^\\circ$", "$45^\\circ$", "$60^\\circ$"],
    correctAnswer: 1,
    explanation: "The ratio of arc length to total circumference equals the ratio of the central angle to $360^\\circ$:\n$$ \\frac{\\theta}{360^\\circ} = \\frac{\\text{Arc Length}}{\\text{Circumference}} = \\frac{3\\pi}{36\\pi} = \\frac{1}{12} $$\n$$ \\theta = \\frac{1}{12} \\times 360^\\circ = 30^\\circ $$",
    category: "Midpoint and length between two points",
    topics: ["Geometry", "Circle", "Arc Length", "Circumference"]
  }
];
