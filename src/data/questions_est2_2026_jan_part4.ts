import { Question } from "../../types";

export const EST2_2026_JAN_PART4: Question[] = [
  {
    id: "est2_2026_jan_31",
    question: "If $x$ is a positive real number, which of the following is equivalent to $\\frac{x^2 - 1}{x^2 + 2x + 1}$?",
    options: [
      "$\\frac{x-1}{x+1}$",
      "$\\frac{x+1}{x-1}$",
      "$\\frac{x-1}{x}$",
      "$\\frac{x}{x+1}$",
      "$x - 1$"
    ],
    correctAnswer: 0,
    explanation: "To simplify the rational expression, we factor both the numerator and the denominator.\nThe numerator is a difference of squares: $x^2 - 1 = (x - 1)(x + 1)$.\nThe denominator is a perfect square trinomial: $x^2 + 2x + 1 = (x + 1)(x + 1) = (x + 1)^2$.\nSubstituting the factored forms back into the expression:\n$\\frac{(x - 1)(x + 1)}{(x + 1)(x + 1)}$\nSince $x$ is a positive real number, $x + 1$ is not zero, so we can cancel the common factor $(x + 1)$ from the numerator and denominator:\n$\\frac{x - 1}{x + 1}$.",
    category: "Algebra",
    topics: ["Rational Expressions", "Factoring"]
  },
  {
    id: "est2_2026_jan_32",
    question: "In the figure above, the area of the shaded part is: (Figure not drawn to scale)",
    svg: `<svg viewBox="0 0 200 150" class="w-full h-full max-w-xs mx-auto">
      <rect x="20" y="20" width="160" height="120" fill="#9ca3af" stroke="black" stroke-width="1.5"/>
      <polygon points="100,20 180,80 100,140 20,80" fill="white" stroke="black" stroke-width="1.5"/>
      <text x="100" y="15" class="text-xs" fill="currentColor" text-anchor="middle">8</text>
      <text x="10" y="80" class="text-xs" fill="currentColor" text-anchor="middle">6</text>
      <path d="M 20 15 L 20 5 M 180 15 L 180 5 M 20 10 L 180 10" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 15 20 L 5 20 M 15 140 L 5 140 M 10 20 L 10 140" fill="none" stroke="currentColor" stroke-width="1"/>
    </svg>`,
    options: [
      "12",
      "16",
      "20",
      "24",
      "48"
    ],
    correctAnswer: 3,
    explanation: "The figure shows a rectangle with a width of 8 and a height of 6. Inside the rectangle is a rhombus whose vertices are the midpoints of the rectangle's sides.\nThe shaded area is the area of the rectangle minus the area of the rhombus.\nArea of the rectangle = $\\text{width} \\times \\text{height} = 8 \\times 6 = 48$.\nThe diagonals of the rhombus are equal to the width and height of the rectangle, so $d_1 = 8$ and $d_2 = 6$.\nArea of the rhombus = $\\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 8 \\times 6 = 24$.\nArea of the shaded part = $48 - 24 = 24$.\nAlternatively, the shaded part consists of four identical right triangles at the corners of the rectangle. Each triangle has legs of length $8/2 = 4$ and $6/2 = 3$.\nArea of one triangle = $\\frac{1}{2} \\times 4 \\times 3 = 6$.\nArea of four triangles = $4 \\times 6 = 24$.",
    category: "Geometry",
    topics: ["Area", "Rectangles", "Rhombuses", "Triangles"]
  },
  {
    id: "est2_2026_jan_33",
    question: "A bag contains 5 red balls, 3 blue balls, and 2 green balls. If two balls are drawn at random without replacement, what is the probability that both are red?",
    options: [
      "$\\frac{1}{4}$",
      "$\\frac{2}{9}$",
      "$\\frac{5}{18}$",
      "$\\frac{1}{5}$",
      "$\\frac{4}{25}$"
    ],
    correctAnswer: 1,
    explanation: "The total number of balls in the bag initially is $5 + 3 + 2 = 10$.\nThe probability of drawing a red ball on the first draw is $\\frac{5}{10} = \\frac{1}{2}$.\nSince the first ball is not replaced, there are now 9 balls left in the bag, and 4 of them are red.\nThe probability of drawing a red ball on the second draw, given that the first was red, is $\\frac{4}{9}$.\nThe probability of both events happening is the product of their individual probabilities:\n$P(\\text{both red}) = P(\\text{first is red}) \\times P(\\text{second is red | first is red})$\n$P(\\text{both red}) = \\frac{1}{2} \\times \\frac{4}{9} = \\frac{4}{18} = \\frac{2}{9}$.",
    category: "Data Analysis",
    topics: ["Probability", "Dependent Events"]
  },
  {
    id: "est2_2026_jan_34",
    question: "If $f(x) = 2x^2 - 3x + 1$, what is the value of $f(-2)$?",
    options: [
      "-1",
      "3",
      "7",
      "11",
      "15"
    ],
    correctAnswer: 4,
    explanation: "To find the value of $f(-2)$, substitute $x = -2$ into the function's equation:\n$f(-2) = 2(-2)^2 - 3(-2) + 1$\nFirst, evaluate the exponent: $(-2)^2 = 4$.\n$f(-2) = 2(4) - 3(-2) + 1$\nNext, perform the multiplications:\n$f(-2) = 8 + 6 + 1$\nFinally, add the numbers:\n$f(-2) = 15$.",
    category: "Algebra",
    topics: ["Functions", "Evaluating Functions"]
  },
  {
    id: "est2_2026_jan_35",
    question: "Which of the following is the equation of a circle with center $(2, -3)$ and radius 4?",
    options: [
      "$(x - 2)^2 + (y - 3)^2 = 16$",
      "$(x + 2)^2 + (y - 3)^2 = 16$",
      "$(x - 2)^2 + (y + 3)^2 = 16$",
      "$(x + 2)^2 + (y + 3)^2 = 16$",
      "$(x - 2)^2 + (y + 3)^2 = 4$"
    ],
    correctAnswer: 2,
    explanation: "The standard equation of a circle with center $(h, k)$ and radius $r$ is:\n$(x - h)^2 + (y - k)^2 = r^2$\nGiven the center is $(2, -3)$, we have $h = 2$ and $k = -3$.\nGiven the radius is 4, we have $r = 4$.\nSubstitute these values into the standard equation:\n$(x - 2)^2 + (y - (-3))^2 = 4^2$\nSimplify the equation:\n$(x - 2)^2 + (y + 3)^2 = 16$.",
    category: "Geometry",
    topics: ["Circles", "Coordinate Geometry", "Equations of Circles"]
  },
  {
    id: "est2_2026_jan_36",
    question: "If $\\log_2(x) + \\log_2(x-3) = 2$, what is the value of $x$?",
    options: [
      "-1",
      "1",
      "3",
      "4",
      "5"
    ],
    correctAnswer: 3,
    explanation: "Use the product property of logarithms, $\\log_b(m) + \\log_b(n) = \\log_b(m \\cdot n)$, to combine the terms on the left side:\n$\\log_2(x(x - 3)) = 2$\nConvert the logarithmic equation to its exponential form, $b^y = x$:\n$x(x - 3) = 2^2$\n$x^2 - 3x = 4$\nRearrange into a standard quadratic equation:\n$x^2 - 3x - 4 = 0$\nFactor the quadratic equation:\n$(x - 4)(x + 1) = 0$\nThis gives two possible solutions: $x = 4$ or $x = -1$.\nHowever, the domain of a logarithmic function $\\log_b(x)$ requires $x > 0$. In the original equation, we have $\\log_2(x)$ and $\\log_2(x-3)$.\nFor $\\log_2(x)$ to be defined, $x > 0$.\nFor $\\log_2(x-3)$ to be defined, $x - 3 > 0 \\Rightarrow x > 3$.\nTherefore, the solution must be greater than 3. The only valid solution is $x = 4$.",
    category: "Algebra",
    topics: ["Logarithms", "Logarithmic Equations", "Quadratic Equations"]
  },
  {
    id: "est2_2026_jan_37",
    question: "In a right triangle, the sine of one acute angle is $\\frac{3}{5}$. What is the cosine of the other acute angle?",
    options: [
      "$\\frac{3}{5}$",
      "$\\frac{4}{5}$",
      "$\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$\\frac{5}{3}$"
    ],
    correctAnswer: 0,
    explanation: "Let the two acute angles of the right triangle be $A$ and $B$. Since the sum of angles in a triangle is $180^\\circ$ and one angle is $90^\\circ$, the two acute angles are complementary, meaning $A + B = 90^\\circ$, or $B = 90^\\circ - A$.\nA fundamental trigonometric identity states that the sine of an angle is equal to the cosine of its complement: $\\sin(A) = \\cos(90^\\circ - A) = \\cos(B)$.\nWe are given that the sine of one acute angle (let's say $A$) is $\\frac{3}{5}$.\nTherefore, $\\sin(A) = \\frac{3}{5}$.\nUsing the identity, the cosine of the other acute angle ($B$) is:\n$\\cos(B) = \\sin(A) = \\frac{3}{5}$.",
    category: "Geometry",
    topics: ["Trigonometry", "Right Triangles", "Complementary Angles"]
  },
  {
    id: "est2_2026_jan_38",
    question: "What is the sum of the first 10 terms of an arithmetic sequence if the first term is 5 and the common difference is 3?",
    options: [
      "155",
      "170",
      "185",
      "200",
      "215"
    ],
    correctAnswer: 2,
    explanation: "The formula for the sum of the first $n$ terms of an arithmetic sequence is:\n$S_n = \\frac{n}{2} [2a_1 + (n - 1)d]$\nwhere:\n$n$ is the number of terms (10)\n$a_1$ is the first term (5)\n$d$ is the common difference (3)\nSubstitute the given values into the formula:\n$S_{10} = \\frac{10}{2} [2(5) + (10 - 1)3]$\n$S_{10} = 5 [10 + (9)3]$\n$S_{10} = 5 [10 + 27]$\n$S_{10} = 5 [37]$\n$S_{10} = 185$.",
    category: "Algebra",
    topics: ["Sequences and Series", "Arithmetic Sequences"]
  },
  {
    id: "est2_2026_jan_39",
    question: "If $3^{x+1} = 81$, what is the value of $x$?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: 2,
    explanation: "To solve the exponential equation, express both sides with the same base.\nWe know that $81 = 9 \\times 9 = 3^2 \\times 3^2 = 3^4$.\nSubstitute $3^4$ for 81 in the equation:\n$3^{x+1} = 3^4$\nSince the bases are the same, the exponents must be equal:\n$x + 1 = 4$\nSubtract 1 from both sides:\n$x = 3$.",
    category: "Algebra",
    topics: ["Exponential Equations"]
  },
  {
    id: "est2_2026_jan_40",
    question: "The volume of a cylinder is $72\\pi$ cubic centimeters. If the height of the cylinder is 8 cm, what is its radius?",
    options: [
      "2 cm",
      "3 cm",
      "4 cm",
      "6 cm",
      "9 cm"
    ],
    correctAnswer: 1,
    explanation: "The formula for the volume of a cylinder is:\n$V = \\pi r^2 h$\nwhere $V$ is the volume, $r$ is the radius, and $h$ is the height.\nWe are given $V = 72\\pi$ and $h = 8$. Substitute these values into the formula:\n$72\\pi = \\pi r^2 (8)$\nDivide both sides by $\\pi$:\n$72 = 8r^2$\nDivide both sides by 8:\n$9 = r^2$\nTake the square root of both sides. Since the radius must be a positive length, we only consider the positive root:\n$r = \\sqrt{9} = 3\\ cm$.",
    category: "Geometry",
    topics: ["Volume", "Cylinders"]
  }
];
