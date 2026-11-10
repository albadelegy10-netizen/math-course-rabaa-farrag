import { Question } from './types';

export const EST2_CIRCLE_SPHERE_SET: Question[] = [
  {
    id: 1,
    question: "What is the area of the sector defined by a central angle of $54^\\circ$ in the circle of equation $x^2 + y^2 - 8x + 12y - 12 = 0$?",
    options: ["$15\\pi$", "$9.6\\pi$", "$5.4\\pi$", "$2.4\\pi$"],
    correctAnswer: 1,
    explanation: "First, complete the square to find the radius of the circle: $(x - 4)^2 + (y + 6)^2 = 12 + (-4)^2 + 6^2 = 12 + 16 + 36 = 64$. So $r^2 = 64$. The area of the circle is $\\pi r^2 = 64\\pi$. The area of the sector is $\\frac{\\theta}{360^\\circ} \\times \\text{Area} = \\frac{54^\\circ}{360^\\circ} \\times 64\\pi = \\frac{3}{20} \\times 64\\pi = 9.6\\pi$.",
    category: "Circle Equation",
    topics: ["Geometry", "Circles", "Sectors"]
  },
  {
    id: 2,
    question: "The radius of the circle $x^2 - 2x + y^2 - 4y = 9$ is",
    options: ["$3.00$", "$3.74$", "$4.12$", "$5.43$", "$6.15$"],
    correctAnswer: 1,
    explanation: "Rearrange the equation by completing the square: $(x - 1)^2 - 1 + (y - 2)^2 - 4 = 9 \\implies (x - 1)^2 + (y - 2)^2 = 14$. The radius is $r = \\sqrt{14} \\approx 3.74$.",
    category: "Circle Equation",
    topics: ["Geometry", "Circles"]
  },
  {
    id: 3,
    question: "If the line $y = x + k$ is tangent to the graph of the circle $x^2 + y^2 = 4$, then $k = \\_\\_\\_\\_\\_$",
    options: ["$2\\sqrt{2}$ only", "$3\\sqrt{2}$ only", "$4\\sqrt{2}$ only", "$\\pm 2\\sqrt{2}$", "$\\pm 4\\sqrt{2}$"],
    correctAnswer: 3,
    explanation: "Substitute $y$ into the circle equation: $x^2 + (x + k)^2 = 4 \\implies 2x^2 + 2kx + k^2 - 4 = 0$. Since the line is tangent to the circle, the discriminant $\\Delta$ must be 0. $\\Delta = (2k)^2 - 4(2)(k^2 - 4) = 0 \\implies 4k^2 - 8k^2 + 32 = 0 \\implies 4k^2 = 32 \\implies k^2 = 8 \\implies k = \\pm \\sqrt{8} = \\pm 2\\sqrt{2}$.",
    category: "Circle Equation",
    topics: ["Geometry", "Circles", "Tangents"]
  },
  {
    id: 4,
    question: "The set of points $(x, y, z)$ such that $(x - 1)^2 + (y - 1)^2 + z^2 = 0$ is",
    options: ["A point", "A circle", "A plane", "A sphere", "Empty"],
    correctAnswer: 0,
    explanation: "The equation has the form of a sphere $(x - h)^2 + (y - k)^2 + (z - l)^2 = r^2$. Since $r^2 = 0$, the set is just the center point $(1, 1, 0)$.",
    category: "Sphere Equation",
    topics: ["Geometry", "Spheres", "3D Coordinates"]
  },
  {
    id: 5,
    question: "Which of the following is the center of a circle $x^2 + y^2 + 10x + 6y = 10$?",
    options: ["$(-5, -3)$", "$(5, 3)$", "$(10, 6)$", "$(-10, -6)$", "$(10, -10)$"],
    correctAnswer: 0,
    explanation: "Complete the squares: $(x^2 + 10x + 25) + (y^2 + 6y + 9) = 10 + 25 + 9 \\implies (x + 5)^2 + (y + 3)^2 = 44$. The center of the circle is $(-5, -3)$.",
    category: "Circle Equation",
    topics: ["Geometry", "Circles"]
  },
  {
    id: 6,
    question: "What is the slope of the line tangent to the circle $(x - 1)^2 + (y - 1)^2 = 25$ at the point $(4, 5)$?",
    options: ["$-\\frac{4}{3}$", "$-\\frac{3}{4}$", "$-\\frac{5}{4}$", "$\\frac{4}{5}$", "$\\frac{4}{5}$"],
    correctAnswer: 1,
    explanation: "The center of the circle is $(1, 1)$. The slope of the radius passing through $(4, 5)$ is $m_{\\text{radius}} = \\frac{5 - 1}{4 - 1} = \\frac{4}{3}$. The tangent line is perpendicular to the radius, so its slope is $m_{\\text{tangent}} = -\\frac{1}{m_{\\text{radius}}} = -\\frac{3}{4}$.",
    category: "Circle Equation",
    topics: ["Geometry", "Circles", "Tangents"]
  },
  {
    id: 7,
    question: "If the equation of a circle is $x^2 - 2x + y^2 - 4y = 1$, then the area of the circle is",
    options: ["$5\\pi$", "$6\\pi$", "$25\\pi$", "$36\\pi$", "$42\\pi$"],
    correctAnswer: 1,
    explanation: "Complete the square: $(x - 1)^2 - 1 + (y - 2)^2 - 4 = 1 \\implies (x - 1)^2 + (y - 2)^2 = 6$. The radius squared is $r^2 = 6$. The area of the circle is $\\pi r^2 = 6\\pi$.",
    category: "Circle Equation",
    topics: ["Geometry", "Circles", "Area"]
  },
  {
    id: 8,
    question: "If a circle is defined by the equation $x^2 - 10x + y^2 - 2y = 10$, what are the coordinates of the center of the circle?",
    options: ["$(5, 1)$", "$(5, -1)$", "$(-5, 1)$", "$(-5, -1)$", "$(-10, -2)$"],
    correctAnswer: 0,
    explanation: "Complete the squares to find the center: $(x^2 - 10x + 25) + (y^2 - 2y + 1) = 10 + 25 + 1 \\implies (x - 5)^2 + (y - 1)^2 = 36$. Hence, the center of the circle is $(5, 1)$.",
    category: "Circle Equation",
    topics: ["Geometry", "Circles"]
  },
  {
    id: 9,
    question: "Which of the following is true for the graph of the equation $x^2 + y^2 = kx$, where $k$ is a positive constant?",
    options: [
      "A circle with center on the y-axis is tangent to the x-axis",
      "A circle with center on the x-axis is not tangent to the y-axis",
      "A circle with center on the x-axis is tangent to the y-axis",
      "An ellipse with center on the x-axis is tangent to the y-axis",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Rearranging the equation: $x^2 - kx + y^2 = 0$. Completing the square gives $(x - \\frac{k}{2})^2 - \\frac{k^2}{4} + y^2 = 0 \\implies (x - \\frac{k}{2})^2 + y^2 = (\\frac{k}{2})^2$. This is a circle with its center at $(\\frac{k}{2}, 0)$, which is on the x-axis. Its radius is $\\frac{k}{2}$. Since the distance from the center to the y-axis equals its radius, the circle is tangent to the y-axis.",
    category: "Circle Equation",
    topics: ["Geometry", "Circles", "Tangents"]
  },
  {
    id: 10,
    question: "Which equation does not represent a line of symmetry for the circle with equation $x^2 + y^2 = 10^2$?",
    options: ["$y = 0$", "$y = -x$", "$y = x - 1$", "$y = 10x$", "$y = -100x$"],
    correctAnswer: 2,
    explanation: "The equation $x^2 + y^2 = 100$ represents a circle centered at the origin $(0, 0)$. Any line of symmetry for a circle must pass through its center. The line $y = x - 1$ does not pass through $(0, 0)$ since $0 \\neq 0 - 1$, so it is not a line of symmetry.",
    category: "Circle Equation",
    topics: ["Geometry", "Circles", "Symmetry"]
  },
  {
    id: 11,
    question: "Which of the following is the point(s) of intersection of $x^2 + y^2 = 16$ and $-y^2 + x = 4$?",
    options: ["$(4, 0)$", "$(5, 0)$", "$(4, 0)$ and $(-5, -3)$", "$(4, 0)$ and $(-4, 0)$", "$(5, 0)$ and $(-5, 0)$"],
    correctAnswer: 0,
    explanation: "From the second equation, $y^2 = x - 4$. Substitute this into the first equation: $x^2 + (x - 4) = 16 \\implies x^2 + x - 20 = 0 \\implies (x + 5)(x - 4) = 0$. So, $x = -5$ or $x = 4$. If $x = -5$, $y^2 = -5 - 4 = -9$, which has no real solutions. If $x = 4$, $y^2 = 4 - 4 = 0 \\implies y = 0$. The only intersection point is $(4, 0)$.",
    category: "Circle Equation",
    topics: ["Geometry", "Circles", "Systems of Equations"]
  },
  {
    id: 12,
    question: "What is the radius of the sphere whose equation is $x^2 + y^2 + z^2 - 2x - 4y + 6z = 0$?",
    options: ["$3$", "$3.74$", "$8.56$", "$12.45$", "$14$"],
    correctAnswer: 1,
    explanation: "Complete the squares for $x$, $y$, and $z$: $(x^2 - 2x + 1) + (y^2 - 4y + 4) + (z^2 + 6z + 9) = 1 + 4 + 9 \\implies (x - 1)^2 + (y - 2)^2 + (z + 3)^2 = 14$. The radius is $r = \\sqrt{14} \\approx 3.74$.",
    category: "Sphere Equation",
    topics: ["Geometry", "Spheres", "3D Coordinates"]
  },
  {
    id: 13,
    question: "What is the equation of line $l$ that is tangent to the circle $x^2 + y^2 = 1$ and passes through the point $(0, 2)$?",
    options: ["$y = -x + 2$", "$y = -\\sqrt{2}x + 2$", "$y = -\\sqrt{3}x + 2$", "$y = -2x + 2$", "$y = -3x + 2$"],
    correctAnswer: 2,
    explanation: "The line passes through $(0, 2)$, yielding the y-intercept. Its equation is $y = mx + 2$. Substituting into the circle: $x^2 + (mx + 2)^2 = 1 \\implies (1 + m^2)x^2 + 4mx + 3 = 0$. For a tangent, the discriminant is zero: $\\Delta = (4m)^2 - 4(1 + m^2)(3) = 0 \\implies 16m^2 - 12 - 12m^2 = 0 \\implies 4m^2 = 12 \\implies m^2 = 3 \\implies m = \\pm \\sqrt{3}$. Assuming line $l$ has a negative slope based on typical figures, $m = -\\sqrt{3}$. The equation is $y = -\\sqrt{3}x + 2$.",
    category: "Circle Equation",
    topics: ["Geometry", "Circles", "Tangents"]
  },
  {
    id: 14,
    question: "A circle has a circumference of $400$ units. What is the approximate diameter of the circle?",
    options: ["$127$ units", "$215$ units", "$312$ units", "$200$ units"],
    correctAnswer: 0,
    explanation: "The circumference $C$ of a circle is $\\pi d$. So $400 = \\pi d \\implies d = \\frac{400}{\\pi} \\approx 127.32$. Alternatively, if approximating $\\pi$ as $3.14$, $d \\approx 127$ units.",
    category: "Circle Equation",
    topics: ["Geometry", "Circles", "Circumference"]
  },
  {
    id: 15,
    question: "In the $xy$-plane, $(C)$ is a circle of center $A(1, 0)$ and radius 2. $(d)$ is the line of equation $x + m = 0$. For what values of $m$ does the line $(d)$ cut circle $(C)$ in two distinct points?",
    options: ["$m < 2$", "$-1 < m < 3$", "$-3 < m < 1$", "$-2 \\le m \\le 2$", "$m > 3$"],
    correctAnswer: 2,
    explanation: "Line $(d)$ is a vertical line $x = -m$. The distance from the center $A(1, 0)$ to line $(d)$ must be strictly less than the radius for two intersection points: $|1 - (-m)| < 2 \\implies |1 + m| < 2 \\implies -2 < 1 + m < 2 \\implies -3 < m < 1$.",
    category: "Circle Equation",
    topics: ["Geometry", "Circles", "Intersections"]
  }
];
