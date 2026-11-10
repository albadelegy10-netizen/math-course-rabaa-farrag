import { Question } from "../../types";

export const EST2_2026_JAN_PART5: Question[] = [
  {
    id: "est2_2026_jan_41",
    question: "If $f(x) = \\frac{1}{x-2}$ and $g(x) = \\sqrt{x+1}$, what is the domain of $f(g(x))$?",
    options: [
      "$x \\ge -1$",
      "$x \\ne 2$",
      "$x \\ge -1$ and $x \\ne 3$",
      "$x > -1$ and $x \\ne 2$",
      "All real numbers"
    ],
    correctAnswer: 2,
    explanation: "To find the domain of the composite function $f(g(x))$, we must consider two conditions:\n1. The inner function $g(x)$ must be defined. Since $g(x) = \\sqrt{x+1}$, the expression under the square root must be non-negative: $x + 1 \\ge 0 \\Rightarrow x \\ge -1$.\n2. The outer function $f(x)$ must be defined for the outputs of $g(x)$. The function $f(x) = \\frac{1}{x-2}$ is undefined when its denominator is zero, so $x - 2 \\ne 0 \\Rightarrow x \\ne 2$. Therefore, for $f(g(x))$, we must have $g(x) \\ne 2$.\nSubstitute $g(x)$ into this inequality:\n$\\sqrt{x+1} \\ne 2$\nSquare both sides:\n$x + 1 \\ne 4$\n$x \\ne 3$\nCombining both conditions, the domain is all real numbers $x$ such that $x \\ge -1$ and $x \\ne 3$.",
    category: "Algebra",
    topics: ["Functions", "Domain", "Composite Functions"]
  },
  {
    id: "est2_2026_jan_42",
    question: "A line passes through the points $(2, 5)$ and $(-1, -4)$. What is the y-intercept of the line?",
    options: [
      "-1",
      "1",
      "2",
      "3",
      "5"
    ],
    correctAnswer: 0,
    explanation: "First, find the slope ($m$) of the line using the two points:\n$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-4 - 5}{-1 - 2} = \\frac{-9}{-3} = 3$.\nNow, use the point-slope form of a linear equation, $y - y_1 = m(x - x_1)$, with one of the points, say $(2, 5)$:\n$y - 5 = 3(x - 2)$\nDistribute the 3:\n$y - 5 = 3x - 6$\nAdd 5 to both sides to get the slope-intercept form ($y = mx + b$):\n$y = 3x - 1$\nThe y-intercept is the constant term $b$, which is -1.",
    category: "Algebra",
    topics: ["Linear Equations", "Coordinate Geometry", "y-intercept"]
  },
  {
    id: "est2_2026_jan_43",
    question: "If $\\sin \\theta = \\frac{4}{5}$ and $\\frac{\\pi}{2} < \\theta < \\pi$, what is the value of $\\tan \\theta$?",
    options: [
      "$\\frac{3}{4}$",
      "$-\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$-\\frac{4}{3}$",
      "$-\\frac{3}{5}$"
    ],
    correctAnswer: 3,
    explanation: "The angle $\\theta$ is between $\\frac{\\pi}{2}$ and $\\pi$, which means it lies in the second quadrant. In the second quadrant, sine is positive, but cosine and tangent are negative.\nWe can use the Pythagorean identity $\\sin^2 \\theta + \\cos^2 \\theta = 1$ to find $\\cos \\theta$:\n$(\\frac{4}{5})^2 + \\cos^2 \\theta = 1$\n$\\frac{16}{25} + \\cos^2 \\theta = 1$\n$\\cos^2 \\theta = 1 - \\frac{16}{25} = \\frac{9}{25}$\nSince $\\theta$ is in the second quadrant, $\\cos \\theta$ must be negative:\n$\\cos \\theta = -\\sqrt{\\frac{9}{25}} = -\\frac{3}{5}$.\nNow, we can find $\\tan \\theta$ using the identity $\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}$:\n$\\tan \\theta = \\frac{4/5}{-3/5} = \\frac{4}{5} \\times \\left(-\\frac{5}{3}\\right) = -\\frac{4}{3}$.",
    category: "Geometry",
    topics: ["Trigonometry", "Trigonometric Identities", "Quadrants"]
  },
  {
    id: "est2_2026_jan_44",
    question: "What is the value of $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$?",
    options: [
      "0",
      "2",
      "4",
      "8",
      "Undefined"
    ],
    correctAnswer: 2,
    explanation: "Direct substitution of $x = 2$ into the expression yields $\\frac{2^2 - 4}{2 - 2} = \\frac{0}{0}$, which is an indeterminate form. We need to simplify the expression first.\nFactor the numerator, which is a difference of squares:\n$x^2 - 4 = (x - 2)(x + 2)$\nSubstitute this back into the limit:\n$\\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{x - 2}$\nCancel the common factor $(x - 2)$:\n$\\lim_{x \\to 2} (x + 2)$\nNow, substitute $x = 2$ directly into the simplified expression:\n$2 + 2 = 4$.",
    category: "Algebra",
    topics: ["Limits", "Rational Expressions"]
  },
  {
    id: "est2_2026_jan_45",
    question: "A circle has a circumference of $10\\pi$. What is its area?",
    options: [
      "$5\\pi$",
      "$10\\pi$",
      "$20\\pi$",
      "$25\\pi$",
      "$100\\pi$"
    ],
    correctAnswer: 3,
    explanation: "The formula for the circumference of a circle is $C = 2\\pi r$, where $r$ is the radius.\nWe are given $C = 10\\pi$. Substitute this into the formula to find the radius:\n$10\\pi = 2\\pi r$\nDivide both sides by $2\\pi$:\n$r = 5$\nThe formula for the area of a circle is $A = \\pi r^2$.\nSubstitute the radius $r = 5$ into the area formula:\n$A = \\pi (5)^2 = 25\\pi$.",
    category: "Geometry",
    topics: ["Circles", "Area", "Circumference"]
  },
  {
    id: "est2_2026_jan_46",
    question: "If $2x - 3y = 12$ and $x + y = 1$, what is the value of $x - y$?",
    options: [
      "-1",
      "1",
      "3",
      "5",
      "7"
    ],
    correctAnswer: 3,
    explanation: "We have a system of two linear equations:\n1) $2x - 3y = 12$\n2) $x + y = 1$\nFrom equation 2, we can express $x$ in terms of $y$: $x = 1 - y$.\nSubstitute this expression for $x$ into equation 1:\n$2(1 - y) - 3y = 12$\nDistribute the 2:\n$2 - 2y - 3y = 12$\nCombine like terms:\n$2 - 5y = 12$\nSubtract 2 from both sides:\n$-5y = 10$\nDivide by -5:\n$y = -2$\nNow substitute $y = -2$ back into the expression for $x$:\n$x = 1 - (-2) = 1 + 2 = 3$\nWe need to find the value of $x - y$:\n$x - y = 3 - (-2) = 3 + 2 = 5$.",
    category: "Algebra",
    topics: ["Systems of Equations"]
  },
  {
    id: "est2_2026_jan_47",
    question: "The length of a rectangle is 3 more than twice its width. If the perimeter is 42, what is the area?",
    options: [
      "54",
      "72",
      "90",
      "108",
      "120"
    ],
    correctAnswer: 2,
    explanation: "Let $W$ be the width of the rectangle. The length $L$ is 3 more than twice the width, so $L = 2W + 3$.\nThe formula for the perimeter of a rectangle is $P = 2L + 2W$.\nWe are given $P = 42$. Substitute the expression for $L$ into the perimeter formula:\n$42 = 2(2W + 3) + 2W$\nDistribute the 2:\n$42 = 4W + 6 + 2W$\nCombine like terms:\n$42 = 6W + 6$\nSubtract 6 from both sides:\n$36 = 6W$\nDivide by 6:\n$W = 6$\nNow find the length $L$:\n$L = 2(6) + 3 = 12 + 3 = 15$\nThe formula for the area of a rectangle is $A = L \\times W$.\n$A = 15 \\times 6 = 90$.",
    category: "Geometry",
    topics: ["Rectangles", "Area", "Perimeter", "Word Problems"]
  },
  {
    id: "est2_2026_jan_48",
    question: "Which of the following is equivalent to $(2+3i)(4-i)$?",
    options: [
      "$8 - 3i$",
      "$5 + 2i$",
      "$11 + 10i$",
      "$8 + 10i$",
      "$11 - 10i$"
    ],
    correctAnswer: 2,
    explanation: "To multiply the complex numbers, use the FOIL method (First, Outer, Inner, Last):\n$(2 + 3i)(4 - i) = (2)(4) + (2)(-i) + (3i)(4) + (3i)(-i)$\n$= 8 - 2i + 12i - 3i^2$\nCombine the imaginary terms:\n$= 8 + 10i - 3i^2$\nRecall that $i^2 = -1$. Substitute this into the expression:\n$= 8 + 10i - 3(-1)$\n$= 8 + 10i + 3$\nCombine the real terms:\n$= 11 + 10i$.",
    category: "Algebra",
    topics: ["Complex Numbers"]
  },
  {
    id: "est2_2026_jan_49",
    question: "If $g(x) = x^3 - 2x^2 + x - 5$, what is the remainder when $g(x)$ is divided by $x-2$?",
    options: [
      "-5",
      "-3",
      "0",
      "2",
      "5"
    ],
    correctAnswer: 1,
    explanation: "According to the Polynomial Remainder Theorem, the remainder of the division of a polynomial $f(x)$ by a linear polynomial $(x - a)$ is equal to $f(a)$.\nIn this case, we are dividing $g(x)$ by $(x - 2)$, so $a = 2$.\nThe remainder is $g(2)$. Substitute $x = 2$ into the polynomial:\n$g(2) = (2)^3 - 2(2)^2 + (2) - 5$\n$g(2) = 8 - 2(4) + 2 - 5$\n$g(2) = 8 - 8 + 2 - 5$\n$g(2) = 0 + 2 - 5$\n$g(2) = -3$.",
    category: "Algebra",
    topics: ["Polynomials", "Remainder Theorem"]
  },
  {
    id: "est2_2026_jan_50",
    question: "In triangle $ABC$, $AB = 7$, $BC = 8$, and $AC = 9$. What is the cosine of angle $B$?",
    options: [
      "$\\frac{1}{7}$",
      "$\\frac{2}{7}$",
      "$\\frac{3}{7}$",
      "$\\frac{4}{7}$",
      "$\\frac{5}{7}$"
    ],
    correctAnswer: 1,
    explanation: "To find the cosine of an angle in a triangle when all three sides are known, we use the Law of Cosines:\n$b^2 = a^2 + c^2 - 2ac \\cos(B)$\nwhere $b$ is the side opposite angle $B$ (which is $AC$), $a$ is the side opposite angle $A$ (which is $BC$), and $c$ is the side opposite angle $C$ (which is $AB$).\nSubstitute the given values into the formula:\n$AC^2 = BC^2 + AB^2 - 2(BC)(AB) \\cos(B)$\n$9^2 = 8^2 + 7^2 - 2(8)(7) \\cos(B)$\n$81 = 64 + 49 - 112 \\cos(B)$\n$81 = 113 - 112 \\cos(B)$\nSubtract 113 from both sides:\n$-32 = -112 \\cos(B)$\nDivide by -112:\n$\\cos(B) = \\frac{-32}{-112}$\nSimplify the fraction by dividing the numerator and denominator by 16:\n$\\cos(B) = \\frac{2}{7}$.",
    category: "Geometry",
    topics: ["Triangles", "Law of Cosines"]
  }
];
