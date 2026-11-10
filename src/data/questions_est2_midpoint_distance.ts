import { Question } from '../../types';

export const EST2_MIDPOINT_DISTANCE_SET: Question[] = [
  {
    id: 1,
    question: "Find the coordinates of the midpoint of the line segment connecting the points $A(-4, 8)$ and $B(6, -2)$ in the 2D coordinate plane.",
    options: [
      "A) $(1, 3)$",
      "B) $(2, 6)$",
      "C) $(1, 5)$",
      "D) $(-5, 5)$",
      "E) $(5, 3)$"
    ],
    correctAnswer: 0,
    explanation: "The 2D midpoint formula is:\n$$ M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right) $$\nSubstitute the given coordinates $(-4, 8)$ and $(6, -2)$:\n$$ M = \\left( \\frac{-4 + 6}{2}, \\frac{8 + (-2)}{2} \\right) = \\left( \\frac{2}{2}, \\frac{6}{2} \\right) = (1, 3) $$",
    category: "midpoint &distance between two points",
    topics: ["2D Geometry", "Midpoint", "Coordinate Plane"]
  },
  {
    id: 2,
    question: "Calculate the exact distance between the points $P(-3, 5)$ and $Q(5, -10)$ in the 2D Cartesian plane.",
    options: [
      "A) $15$",
      "B) $17$",
      "C) $\\sqrt{233}$",
      "D) $13$",
      "E) $19$"
    ],
    correctAnswer: 1,
    explanation: "The 2D distance formula is:\n$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$\nSubstitute the coordinates $(-3, 5)$ and $(5, -10)$:\n$$ d = \\sqrt{(5 - (-3))^2 + (-10 - 5)^2} = \\sqrt{8^2 + (-15)^2} $$\n$$ d = \\sqrt{64 + 225} = \\sqrt{289} = 17 $$",
    category: "midpoint &distance between two points",
    topics: ["2D Geometry", "Distance Formula", "Pythagorean Theorem"]
  },
  {
    id: 3,
    question: "If $M(3, -2)$ is the midpoint of segment $AB$ and $A(-1, 4)$, find the coordinates of endpoint $B(x, y)$.",
    options: [
      "A) $(7, -8)$",
      "B) $(5, -6)$",
      "C) $(1, 1)$",
      "D) $(7, -6)$",
      "E) $(2, -8)$"
    ],
    correctAnswer: 0,
    explanation: "Use the endpoint formula derived from the midpoint formula:\n$$ x_B = 2x_M - x_A \\quad \\text{and} \\quad y_B = 2y_M - y_A $$\nSubstitute $M(3, -2)$ and $A(-1, 4)$:\n$$ x_B = 2(3) - (-1) = 6 + 1 = 7 $$\n$$ y_B = 2(-2) - 4 = -4 - 4 = -8 $$\nTherefore, $B = (7, -8)$.",
    category: "midpoint &distance between two points",
    topics: ["2D Geometry", "Midpoint", "Endpoints"]
  },
  {
    id: 4,
    question: "The distance between the points $(k, 2)$ and $(3, -6)$ in the $xy$-plane is equal to $10$. What are all possible values of $k$?",
    options: [
      "A) $k = 9$ only",
      "B) $k = -3$ or $k = 9$",
      "C) $k = -9$ or $k = 3$",
      "D) $k = 3$ or $k = 6$",
      "E) $k = -6$ or $k = 12$"
    ],
    correctAnswer: 1,
    explanation: "Apply the distance formula and set $d = 10$:\n$$ \\sqrt{(3 - k)^2 + (-6 - 2)^2} = 10 $$\nSquare both sides:\n$$ (3 - k)^2 + (-8)^2 = 100 $$\n$$ (3 - k)^2 + 64 = 100 \\implies (3 - k)^2 = 36 $$\nTake the square root of both sides:\n$$ 3 - k = 6 \\implies k = -3 $$\n$$ 3 - k = -6 \\implies k = 9 $$\nThus, $k = -3$ or $k = 9$.",
    category: "midpoint &distance between two points",
    topics: ["2D Geometry", "Distance Formula", "Algebraic Equations"]
  },
  {
    id: 5,
    question: "In 3D space, find the midpoint of the line segment connecting $P_1(2, -4, 7)$ and $P_2(8, 10, -3)$.",
    options: [
      "A) $(5, 3, 2)$",
      "B) $(10, 6, 4)$",
      "C) $(3, 7, 5)$",
      "D) $(5, 7, 2)$",
      "E) $(6, 14, 10)$"
    ],
    correctAnswer: 0,
    explanation: "The 3D midpoint formula is:\n$$ M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}, \\frac{z_1 + z_2}{2} \\right) $$\nSubstitute $P_1(2, -4, 7)$ and $P_2(8, 10, -3)$:\n$$ M = \\left( \\frac{2 + 8}{2}, \\frac{-4 + 10}{2}, \\frac{7 + (-3)}{2} \\right) = \\left( \\frac{10}{2}, \\frac{6}{2}, \\frac{4}{2} \\right) = (5, 3, 2) $$",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "Midpoint Formula"]
  },
  {
    id: 6,
    question: "Determine the distance between points $A(1, -2, 4)$ and $B(4, 2, 16)$ in three-dimensional coordinate space.",
    options: [
      "A) $11$",
      "B) $12$",
      "C) $13$",
      "D) $15$",
      "E) $\\sqrt{185}$"
    ],
    correctAnswer: 2,
    explanation: "The 3D distance formula is:\n$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2} $$\nSubstitute the 3D coordinates:\n$$ d = \\sqrt{(4 - 1)^2 + (2 - (-2))^2 + (16 - 4)^2} $$\n$$ d = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13 $$",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "Distance Formula"]
  },
  {
    id: 7,
    question: "A line segment in 3D space has midpoint $M(4, -1, 5)$ and one endpoint $A(1, 3, -2)$. Find the coordinates of the other endpoint $B(x, y, z)$.",
    options: [
      "A) $(7, -5, 12)$",
      "B) $(7, -3, 8)$",
      "C) $(2.5, 1, 1.5)$",
      "D) $(6, -5, 12)$",
      "E) $(7, -4, 10)$"
    ],
    correctAnswer: 0,
    explanation: "For 3D endpoints:\n$$ x_B = 2x_M - x_A, \\quad y_B = 2y_M - y_A, \\quad z_B = 2z_M - z_A $$\nSubstitute $M(4, -1, 5)$ and $A(1, 3, -2)$:\n$$ x_B = 2(4) - 1 = 7 $$\n$$ y_B = 2(-1) - 3 = -5 $$\n$$ z_B = 2(5) - (-2) = 12 $$\nSo $B = (7, -5, 12)$.",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "Midpoint", "3D Endpoints"]
  },
  {
    id: 8,
    question: "The endpoints of a diameter of a sphere in 3D space are $A(-2, 3, 5)$ and $B(4, -1, 1)$. Which equation represents this sphere?",
    options: [
      "A) $(x - 1)^2 + (y - 1)^2 + (z - 3)^2 = 17$",
      "B) $(x + 1)^2 + (y + 1)^2 + (z + 3)^2 = 68$",
      "C) $(x - 1)^2 + (y - 1)^2 + (z - 3)^2 = 68$",
      "D) $(x - 2)^2 + (y - 1)^2 + (z - 3)^2 = 17$",
      "E) $(x - 1)^2 + (y - 1)^2 + (z - 3)^2 = 34$"
    ],
    correctAnswer: 0,
    explanation: "1. The center $(h, k, l)$ of the sphere is the midpoint of diameter $AB$:\n$$ h = \\frac{-2 + 4}{2} = 1, \\quad k = \\frac{3 + (-1)}{2} = 1, \\quad l = \\frac{5 + 1}{2} = 3 $$\nCenter $= (1, 1, 3)$.\n2. The diameter length $d_{AB}$ is:\n$$ d_{AB} = \\sqrt{(4 - (-2))^2 + (-1 - 3)^2 + (1 - 5)^2} = \\sqrt{6^2 + (-4)^2 + (-4)^2} = \\sqrt{36 + 16 + 16} = \\sqrt{68} $$\nRadius $r = \\frac{\\sqrt{68}}{2} = \\sqrt{\\frac{68}{4}} = \\sqrt{17} \\implies r^2 = 17$.\n3. Equation of sphere: $(x - 1)^2 + (y - 1)^2 + (z - 3)^2 = 17$.",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "Sphere Equation", "Midpoint & Distance"]
  },
  {
    id: 9,
    question: "Find the equation of the perpendicular bisector of the line segment joining $A(1, 2)$ and $B(5, 10)$ in the $xy$-plane.",
    options: [
      "A) $y = -\\frac{1}{2}x + \\frac{15}{2}$",
      "B) $y = 2x$",
      "C) $y = -\\frac{1}{2}x + 6$",
      "D) $y = -2x + 12$",
      "E) $y = -\\frac{1}{2}x + 8$"
    ],
    correctAnswer: 0,
    explanation: "1. Find the midpoint $M$ of $AB$:\n$$ M = \\left( \\frac{1 + 5}{2}, \\frac{2 + 10}{2} \\right) = (3, 6) $$\n2. Calculate slope $m_{AB}$:\n$$ m_{AB} = \\frac{10 - 2}{5 - 1} = \\frac{8}{4} = 2 $$\n3. Perpendicular slope $m_\\perp = -\\frac{1}{m_{AB}} = -\\frac{1}{2}$.\n4. Use point-slope form with $M(3, 6)$:\n$$ y - 6 = -\\frac{1}{2}(x - 3) \\implies y = -\\frac{1}{2}x + \\frac{3}{2} + 6 = -\\frac{1}{2}x + \\frac{15}{2} $$",
    category: "midpoint &distance between two points",
    topics: ["2D Geometry", "Perpendicular Bisector", "Line Equations"]
  },
  {
    id: 10,
    question: "Points $P(k, 1, 2)$ and $Q(3, 5, -2)$ in 3D space are separated by a distance of $9$. What is the sum of all possible real values of $k$?",
    options: [
      "A) $6$",
      "B) $8$",
      "C) $3$",
      "D) $10$",
      "E) $-4$"
    ],
    correctAnswer: 0,
    explanation: "1. Set up the 3D distance equation:\n$$ \\sqrt{(3 - k)^2 + (5 - 1)^2 + (-2 - 2)^2} = 9 $$\nSquare both sides:\n$$ (3 - k)^2 + 4^2 + (-4)^2 = 81 $$\n$$ (3 - k)^2 + 16 + 16 = 81 \\implies (3 - k)^2 + 32 = 81 \\implies (3 - k)^2 = 49 $$\n2. Solve for $k$:\n$$ 3 - k = 7 \\implies k = -4 $$\n$$ 3 - k = -7 \\implies k = 10 $$\n3. Sum of values $= -4 + 10 = 6$.",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "Distance Formula", "Sum of Roots"]
  },
  {
    id: 11,
    question: "Triangle $ABC$ has vertices $A(2, 8)$, $B(-4, 0)$, and $C(6, 2)$. What is the length of the median from vertex $A$ to side $BC$?",
    options: [
      "A) $5\\sqrt{2}$",
      "B) $7$",
      "C) $\\sqrt{53}$",
      "D) $2\\sqrt{10}$",
      "E) $5\\sqrt{3}$"
    ],
    correctAnswer: 0,
    explanation: "1. The median from $A$ intersects side $BC$ at its midpoint $M_{BC}$:\n$$ M_{BC} = \\left( \\frac{-4 + 6}{2}, \\frac{0 + 2}{2} \\right) = (1, 1) $$\n2. Calculate distance $AM_{BC}$ between $A(2, 8)$ and $M(1, 1)$:\n$$ d = \\sqrt{(1 - 2)^2 + (1 - 8)^2} = \\sqrt{(-1)^2 + (-7)^2} = \\sqrt{1 + 49} = \\sqrt{50} = 5\\sqrt{2} $$",
    category: "midpoint &distance between two points",
    topics: ["2D Geometry", "Triangle Median", "Distance Formula"]
  },
  {
    id: 12,
    question: "Find the $z$-coordinate of point $P(0, 0, z)$ on the $z$-axis such that $P$ is equidistant from $A(2, 3, 1)$ and $B(4, 1, 5)$.",
    options: [
      "A) $z = 3.5$",
      "B) $z = 4.0$",
      "C) $z = 2.5$",
      "D) $z = 5.0$",
      "E) $z = 1.5$"
    ],
    correctAnswer: 0,
    explanation: "Equidistant means $PA^2 = PB^2$:\n$$ PA^2 = (2 - 0)^2 + (3 - 0)^2 + (1 - z)^2 = 4 + 9 + (1 - 2z + z^2) = z^2 - 2z + 14 $$\n$$ PB^2 = (4 - 0)^2 + (1 - 0)^2 + (5 - z)^2 = 16 + 1 + (25 - 10z + z^2) = z^2 - 10z + 42 $$\nSet $PA^2 = PB^2$:\n$$ z^2 - 2z + 14 = z^2 - 10z + 42 $$\n$$ -2z + 14 = -10z + 42 \\implies 8z = 28 \\implies z = \\frac{28}{8} = 3.5 $$",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "Equidistant Points", "3D Distance"]
  },
  {
    id: 13,
    question: "Point $P$ partitions the directed line segment from $A(-5, 3)$ to $B(7, -9)$ in the ratio $1:3$. Find the coordinates of $P$.",
    options: [
      "A) $(-2, 0)$",
      "B) $(1, -3)$",
      "C) $(-1, -1)$",
      "D) $(4, -6)$",
      "E) $(-2, 1)$"
    ],
    correctAnswer: 0,
    explanation: "The section formula for ratio $m : n = 1 : 3$ is:\n$$ P = \\left( \\frac{3(-5) + 1(7)}{1 + 3}, \\frac{3(3) + 1(-9)}{1 + 3} \\right) $$\n$$ P = \\left( \\frac{-15 + 7}{4}, \\frac{9 - 9}{4} \\right) = \\left( \\frac{-8}{4}, 0 \\right) = (-2, 0) $$",
    category: "midpoint &distance between two points",
    topics: ["2D Geometry", "Section Formula", "Partitioning Segment"]
  },
  {
    id: 14,
    question: "In 3D space, point $P$ divides the line segment joining $A(1, -2, 3)$ and $B(7, 4, 12)$ internally in the ratio $2:1$. Find $P(x, y, z)$.",
    options: [
      "A) $(5, 2, 9)$",
      "B) $(4, 1, 7.5)$",
      "C) $(3, 0, 6)$",
      "D) $(5, 3, 8)$",
      "E) $(6, 2, 10)$"
    ],
    correctAnswer: 0,
    explanation: "3D section formula for internal division $m : n = 2 : 1$:\n$$ P = \\left( \\frac{1(1) + 2(7)}{2 + 1}, \\frac{1(-2) + 2(4)}{2 + 1}, \\frac{1(3) + 2(12)}{2 + 1} \\right) $$\n$$ P = \\left( \\frac{1 + 14}{3}, \\frac{-2 + 8}{3}, \\frac{3 + 24}{3} \\right) = \\left( \\frac{15}{3}, \\frac{6}{3}, \\frac{27}{3} \\right) = (5, 2, 9) $$",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "Section Formula", "Ratio Partition"]
  },
  {
    id: 15,
    question: "The endpoints of a circle's diameter in the Cartesian coordinate plane are $A(-3, 1)$ and $B(5, 7)$. Calculate the exact area of the circle.",
    options: [
      "A) $25\\pi$",
      "B) $100\\pi$",
      "C) $50\\pi$",
      "D) $16\\pi$",
      "E) $36\\pi$"
    ],
    correctAnswer: 0,
    explanation: "1. Find diameter length $d$:\n$$ d = \\sqrt{(5 - (-3))^2 + (7 - 1)^2} = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10 $$\n2. Radius $r = \\frac{d}{2} = 5$.\n3. Circle Area $= \\pi r^2 = \\pi (5)^2 = 25\\pi$.",
    category: "midpoint &distance between two points",
    topics: ["2D Geometry", "Circle Area", "Distance Formula"]
  },
  {
    id: 16,
    question: "Two opposite vertices of a rectangular box in 3D space are $A(1, -1, 2)$ and $B(5, 3, 10)$. What is the length of the space diagonal of the box?",
    options: [
      "A) $4\\sqrt{6}$",
      "B) $8\\sqrt{2}$",
      "C) $10$",
      "D) $12$",
      "E) $6\\sqrt{3}$"
    ],
    correctAnswer: 0,
    explanation: "The space diagonal length equals the 3D distance between opposite vertices $A$ and $B$:\n$$ d = \\sqrt{(5 - 1)^2 + (3 - (-1))^2 + (10 - 2)^2} $$\n$$ d = \\sqrt{4^2 + 4^2 + 8^2} = \\sqrt{16 + 16 + 64} = \\sqrt{96} = \\sqrt{16 \\times 6} = 4\\sqrt{6} $$",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "Space Diagonal", "3D Distance"]
  },
  {
    id: 17,
    question: "Points $A(1, 2)$, $B(4, k)$, and $C(7, 10)$ are collinear in the $xy$-plane. Find the value of $k$ and the length of segment $AB$.",
    options: [
      "A) $k = 6$, $AB = 5$",
      "B) $k = 5$, $AB = 4$",
      "C) $k = 6$, $AB = \\sqrt{29}$",
      "D) $k = 7$, $AB = 5$",
      "E) $k = 8$, $AB = 6$"
    ],
    correctAnswer: 0,
    explanation: "1. Collinear points have equal slopes $m_{AB} = m_{AC}$:\n$$ m_{AC} = \\frac{10 - 2}{7 - 1} = \\frac{8}{6} = \\frac{4}{3} $$\n$$ m_{AB} = \\frac{k - 2}{4 - 1} = \\frac{k - 2}{3} $$\nSet $\\frac{k - 2}{3} = \\frac{4}{3} \\implies k - 2 = 4 \\implies k = 6$.\n2. Distance $AB$ between $(1, 2)$ and $(4, 6)$:\n$$ AB = \\sqrt{(4 - 1)^2 + (6 - 2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5 $$",
    category: "midpoint &distance between two points",
    topics: ["2D Geometry", "Collinear Points", "Slope & Distance"]
  },
  {
    id: 18,
    question: "A cube in 3D space has two main opposite vertices at $A(0, 0, 0)$ and $B(6, 6, 6)$. What is the distance from the center of the cube to any of its 8 vertices?",
    options: [
      "A) $3\\sqrt{3}$",
      "B) $6$",
      "C) $3\\sqrt{2}$",
      "D) $9$",
      "E) $2\\sqrt{6}$"
    ],
    correctAnswer: 0,
    explanation: "1. The center $C$ of the cube is the midpoint of space diagonal $AB$:\n$$ C = \\left( \\frac{0 + 6}{2}, \\frac{0 + 6}{2}, \\frac{0 + 6}{2} \\right) = (3, 3, 3) $$\n2. Distance from $C(3, 3, 3)$ to origin $(0, 0, 0)$:\n$$ d = \\sqrt{(3 - 0)^2 + (3 - 0)^2 + (3 - 0)^2} = \\sqrt{9 + 9 + 9} = \\sqrt{27} = 3\\sqrt{3} $$",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "Cube Properties", "Midpoint & Distance"]
  },
  {
    id: 19,
    question: "The vertices of triangle $ABC$ are $A(-2, 1)$, $B(2, 5)$, and $C(4, -1)$. Calculate the exact perimeter of $\\triangle ABC$.",
    options: [
      "A) $4\\sqrt{2} + 4\\sqrt{10}$",
      "B) $8\\sqrt{5}$",
      "C) $2\\sqrt{10} + 6\\sqrt{2}$",
      "D) $4\\sqrt{5} + 4\\sqrt{10}$",
      "E) $12\\sqrt{2}$"
    ],
    correctAnswer: 0,
    explanation: "Calculate all 3 side lengths:\n$$ AB = \\sqrt{(2 - (-2))^2 + (5 - 1)^2} = \\sqrt{4^2 + 4^2} = \\sqrt{32} = 4\\sqrt{2} $$\n$$ BC = \\sqrt{(4 - 2)^2 + (-1 - 5)^2} = \\sqrt{2^2 + (-6)^2} = \\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10} $$\n$$ AC = \\sqrt{(4 - (-2))^2 + (-1 - 1)^2} = \\sqrt{6^2 + (-2)^2} = \\sqrt{36 + 4} = \\sqrt{40} = 2\\sqrt{10} $$\nPerimeter $= AB + BC + AC = 4\\sqrt{2} + 2\\sqrt{10} + 2\\sqrt{10} = 4\\sqrt{2} + 4\\sqrt{10}$.",
    category: "midpoint &distance between two points",
    topics: ["2D Geometry", "Triangle Perimeter", "Isosceles Triangle"]
  },
  {
    id: 20,
    question: "Points $A(1, 2, 3)$, $B(3, 6, 7)$, and $C(6, 12, 13)$ are collinear in 3D space. What is the ratio of distance $AB$ to distance $BC$?",
    options: [
      "A) $2 : 3$",
      "B) $1 : 2$",
      "C) $3 : 4$",
      "D) $1 : 3$",
      "E) $2 : 5$"
    ],
    correctAnswer: 0,
    explanation: "1. Calculate distance $AB$:\n$$ AB = \\sqrt{(3 - 1)^2 + (6 - 2)^2 + (7 - 3)^2} = \\sqrt{2^2 + 4^2 + 4^2} = \\sqrt{4 + 16 + 16} = \\sqrt{36} = 6 $$\n2. Calculate distance $BC$:\n$$ BC = \\sqrt{(6 - 3)^2 + (12 - 6)^2 + (13 - 7)^2} = \\sqrt{3^2 + 6^2 + 6^2} = \\sqrt{9 + 36 + 36} = \\sqrt{81} = 9 $$\n3. Ratio $AB : BC = 6 : 9 = 2 : 3$.",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "Distance Ratio", "Collinear Points"]
  },
  {
    id: 21,
    question: "The midpoint of $P(x + 2, y - 3)$ and $Q(3x - 4, 5y + 1)$ is $M(5, 7)$. Find the value of $x + y$.",
    options: [
      "A) $\\frac{17}{3}$",
      "B) $6$",
      "C) $\\frac{19}{3}$",
      "D) $5$",
      "E) $\\frac{14}{3}$"
    ],
    correctAnswer: 0,
    explanation: "Set up equations using midpoint $M(5, 7)$:\n1. $x$-midpoint:\n$$ \\frac{(x + 2) + (3x - 4)}{2} = 5 \\implies \\frac{4x - 2}{2} = 5 \\implies 2x - 1 = 5 \\implies 2x = 6 \\implies x = 3 $$\n2. $y$-midpoint:\n$$ \\frac{(y - 3) + (5y + 1)}{2} = 7 \\implies \\frac{6y - 2}{2} = 7 \\implies 3y - 1 = 7 \\implies 3y = 8 \\implies y = \\frac{8}{3} $$\n3. $x + y = 3 + \\frac{8}{3} = \\frac{9}{3} + \\frac{8}{3} = \\frac{17}{3}$.",
    category: "midpoint &distance between two points",
    topics: ["2D Geometry", "Midpoint System", "Algebraic Variables"]
  },
  {
    id: 22,
    question: "In 3D Cartesian coordinates, what is the distance from point $P(-5, 8, -6)$ to the $xy$-plane?",
    options: [
      "A) $6$",
      "B) $5$",
      "C) $8$",
      "D) $\\sqrt{89}$",
      "E) $10$"
    ],
    correctAnswer: 0,
    explanation: "The perpendicular distance from any 3D point $(x, y, z)$ to the $xy$-plane is equal to the absolute value of its $z$-coordinate:\n$$ d = |z| = |-6| = 6 $$",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "Distance to Plane"]
  },
  {
    id: 23,
    question: "A sphere in 3D space is defined by $(x - 2)^2 + (y + 3)^2 + (z - 4)^2 = 49$. At what two $z$-values does this sphere intersect the $z$-axis?",
    options: [
      "A) $z = 10$ and $z = -2$",
      "B) $z = 11$ and $z = -3$",
      "C) $z = 8$ and $z = -4$",
      "D) $z = 7$ and $z = -7$",
      "E) $z = 9$ and $z = -1$"
    ],
    correctAnswer: 0,
    explanation: "Points on the $z$-axis have $x = 0$ and $y = 0$. Substitute $x = 0$ and $y = 0$ into sphere equation:\n$$ (0 - 2)^2 + (0 + 3)^2 + (z - 4)^2 = 49 $$\n$$ 4 + 9 + (z - 4)^2 = 49 \\implies 13 + (z - 4)^2 = 49 $$\n$$ (z - 4)^2 = 36 $$\nTake the square root:\n$$ z - 4 = 6 \\implies z = 10 $$\n$$ z - 4 = -6 \\implies z = -2 $$\nThus, $z = 10$ and $z = -2$.",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "Sphere Intersects Axis", "3D Distance"]
  },
  {
    id: 24,
    question: "A triangle has vertices at $A(2, 4)$, $B(6, -2)$, and $C(-2, 7)$. Find the coordinates of its centroid $G(x, y)$.",
    options: [
      "A) $(2, 3)$",
      "B) $(3, 3)$",
      "C) $(2, 2.5)$",
      "D) $(1.5, 3)$",
      "E) $(2, 4)$"
    ],
    correctAnswer: 0,
    explanation: "The centroid $G$ formula for a 2D triangle is:\n$$ G = \\left( \\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3} \\right) $$\nSubstitute the vertices $(2, 4)$, $(6, -2)$, and $(-2, 7)$:\n$$ G = \\left( \\frac{2 + 6 + (-2)}{3}, \\frac{4 + (-2) + 7}{3} \\right) = \\left( \\frac{6}{3}, \\frac{9}{3} \\right) = (2, 3) $$",
    category: "midpoint &distance between two points",
    topics: ["2D Geometry", "Centroid Formula"]
  },
  {
    id: 25,
    question: "Find the coordinates of the centroid $G(x, y, z)$ of a triangle in 3D space with vertices $A(1, 4, 2)$, $B(3, -2, 8)$, and $C(5, 7, -1)$.",
    options: [
      "A) $(3, 3, 3)$",
      "B) $(4.5, 4.5, 4.5)$",
      "C) $(3, 2, 4)$",
      "D) $(2, 3, 3)$",
      "E) $(3, 4, 3)$"
    ],
    correctAnswer: 0,
    explanation: "The 3D triangle centroid formula is:\n$$ G = \\left( \\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}, \\frac{z_1 + z_2 + z_3}{3} \\right) $$\nSubstitute vertices:\n$$ G = \\left( \\frac{1 + 3 + 5}{3}, \\frac{4 + (-2) + 7}{3}, \\frac{2 + 8 + (-1)}{3} \\right) = \\left( \\frac{9}{3}, \\frac{9}{3}, \\frac{9}{3} \\right) = (3, 3, 3) $$",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "3D Centroid", "Midpoint Properties"]
  },
  {
    id: 26,
    question: "What is the shortest (perpendicular) distance from the origin $(0, 0)$ to the line $3x + 4y = 20$ in the $xy$-plane?",
    options: [
      "A) $4$",
      "B) $5$",
      "C) $3.2$",
      "D) $6$",
      "E) $2\\sqrt{5}$"
    ],
    correctAnswer: 0,
    explanation: "The perpendicular distance formula from point $(x_0, y_0)$ to line $Ax + By + C = 0$ is:\n$$ d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}} $$\nRewrite line as $3x + 4y - 20 = 0$. For origin $(0, 0)$:\n$$ d = \\frac{|3(0) + 4(0) - 20|}{\\sqrt{3^2 + 4^2}} = \\frac{|-20|}{\\sqrt{9 + 16}} = \\frac{20}{5} = 4 $$",
    category: "midpoint &distance between two points",
    topics: ["2D Geometry", "Distance Point to Line"]
  },
  {
    id: 27,
    question: "A quadrilateral in 3D space has vertices $A(1, 2, 3)$, $B(4, 5, 6)$, $C(7, 8, 8)$, and $D(4, 5, 5)$. What is the midpoint of diagonal $AC$?",
    options: [
      "A) $(4, 5, 5.5)$",
      "B) $(4, 5, 5)$",
      "C) $(3.5, 4.5, 5.5)$",
      "D) $(4, 5, 6)$",
      "E) $(5, 6, 6.5)$"
    ],
    correctAnswer: 0,
    explanation: "Calculate the midpoint $M_{AC}$ of diagonal $AC$ between $A(1, 2, 3)$ and $C(7, 8, 8)$:\n$$ M_{AC} = \\left( \\frac{1 + 7}{2}, \\frac{2 + 8}{2}, \\frac{3 + 8}{2} \\right) = \\left( \\frac{8}{2}, \\frac{10}{2}, \\frac{11}{2} \\right) = (4, 5, 5.5) $$",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "3D Quadrilateral", "Diagonals & Midpoint"]
  },
  {
    id: 28,
    question: "An emergency station $S$ is located at the midpoint between Hospital $A(-8, 12)$ and Hospital $B(16, -6)$. An ambulance at station $S$ drives directly along a straight line to Hospital $B$. What distance does the ambulance travel?",
    options: [
      "A) $15$",
      "B) $30$",
      "C) $18$",
      "D) $20$",
      "E) $12\\sqrt{2}$"
    ],
    correctAnswer: 0,
    explanation: "1. Find midpoint $S$ of $AB$:\n$$ S = \\left( \\frac{-8 + 16}{2}, \\frac{12 + (-6)}{2} \\right) = \\left( \\frac{8}{2}, \\frac{6}{2} \\right) = (4, 3) $$\n2. Calculate distance $SB$ from $S(4, 3)$ to $B(16, -6)$:\n$$ SB = \\sqrt{(16 - 4)^2 + (-6 - 3)^2} = \\sqrt{12^2 + (-9)^2} = \\sqrt{144 + 81} = \\sqrt{225} = 15 $$",
    category: "midpoint &distance between two points",
    topics: ["2D Geometry", "Word Problem", "Midpoint & Distance"]
  },
  {
    id: 29,
    question: "Vector $\\vec{AB}$ connects point $A(2, -1, 5)$ to $B(x, 3, 1)$ in 3D space. If the length of vector $\\vec{AB}$ is $6$, find all possible values of $x$.",
    options: [
      "A) $x = 0$ or $x = 4$",
      "B) $x = -2$ or $x = 6$",
      "C) $x = 2$ or $x = 4$",
      "D) $x = -4$ or $x = 0$",
      "E) $x = 1$ or $x = 5$"
    ],
    correctAnswer: 0,
    explanation: "Set up the 3D distance equation for length $6$:\n$$ \\sqrt{(x - 2)^2 + (3 - (-1))^2 + (1 - 5)^2} = 6 $$\nSquare both sides:\n$$ (x - 2)^2 + 4^2 + (-4)^2 = 36 $$\n$$ (x - 2)^2 + 16 + 16 = 36 \\implies (x - 2)^2 + 32 = 36 \\implies (x - 2)^2 = 4 $$\nTake square root:\n$$ x - 2 = 2 \\implies x = 4 $$\n$$ x - 2 = -2 \\implies x = 0 $$\nSo $x = 0$ or $x = 4$.",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "Vector Length", "3D Distance"]
  },
  {
    id: 30,
    question: "A sphere in 3D space has center $C(3, -1, 4)$ and passes through point $P(6, 3, 4)$. What is the exact volume of the sphere?",
    options: [
      "A) $\\frac{500\\pi}{3}$",
      "B) $100\\pi$",
      "C) $\\frac{256\\pi}{3}$",
      "D) $125\\pi$",
      "E) $\\frac{400\\pi}{3}$"
    ],
    correctAnswer: 0,
    explanation: "1. The radius $r$ is the distance from center $C(3, -1, 4)$ to point $P(6, 3, 4)$:\n$$ r = \\sqrt{(6 - 3)^2 + (3 - (-1))^2 + (4 - 4)^2} = \\sqrt{3^2 + 4^2 + 0} = \\sqrt{9 + 16} = 5 $$\n2. Sphere Volume formula: $V = \\frac{4}{3}\\pi r^3$.\n$$ V = \\frac{4}{3}\\pi (5)^3 = \\frac{4}{3}\\pi (125) = \\frac{500\\pi}{3} $$",
    category: "midpoint &distance between two points",
    topics: ["3D Geometry", "Sphere Volume", "Radius & Distance"]
  }
];
