import { Question } from '../../types';

export const EST1_2021_JAN_PART3: Question[] = [
  {
    id: "est1_2021_jan_q41",
    question: "In the figure below, lines l and m are parallel. What is the value of x?",
    svg: `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="30" x2="180" y2="30" stroke="black" stroke-width="2"/><text x="10" y="35">l</text><line x1="20" y1="120" x2="180" y2="120" stroke="black" stroke-width="2"/><text x="10" y="125">m</text><polyline points="50,30 100,75 50,120" fill="none" stroke="black" stroke-width="2"/><text x="60" y="45">115°</text><text x="60" y="110">125°</text><text x="110" y="80">x°</text></svg>`,
    options: [
      "110",
      "120",
      "130",
      "140"
    ],
    correctAnswer: 1,
    explanation: "Draw a line parallel to l and m through the vertex of the angle x. This divides x into two smaller angles. By consecutive interior angles (or alternate interior angles if we extend the lines), the top part of x is $180 - 115 = 65^\\circ$. The bottom part of x is $180 - 125 = 55^\\circ$. Therefore, $x = 65 + 55 = 120$.",
    topic: "Geometry",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q42",
    question: "What are the solutions to the equation $$x^2 - 12x + 20 = -12$$?",
    options: [
      "2 and 10",
      "-2 and -10",
      "-4 and -8",
      "4 and 8"
    ],
    correctAnswer: 3,
    explanation: "Add 12 to both sides to set the equation to zero:<br>$$x^2 - 12x + 32 = 0$$<br>Factor the quadratic equation:<br>$$(x - 4)(x - 8) = 0$$<br>The solutions are $x = 4$ and $x = 8$.",
    topic: "Quadratics",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q43",
    question: "What is the perimeter of the triangle with vertices A(-2, 5), B(1, 1), and C(4, 5)?",
    options: [
      "12",
      "14",
      "16",
      "18"
    ],
    correctAnswer: 2,
    explanation: "Use the distance formula $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ to find the lengths of the sides.<br>AB = $\\sqrt{(1 - (-2))^2 + (1 - 5)^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.<br>BC = $\\sqrt{(4 - 1)^2 + (5 - 1)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.<br>AC = $\\sqrt{(4 - (-2))^2 + (5 - 5)^2} = \\sqrt{6^2 + 0^2} = \\sqrt{36} = 6$.<br>Perimeter = $AB + BC + AC = 5 + 5 + 6 = 16$.",
    topic: "Coordinate Geometry",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q44",
    question: "What is the vertex of the parabola given by the equation $$f(x) = (x - 2)^2 - 4$$?",
    options: [
      "(-2, -4)",
      "(-2, 4)",
      "(2, 4)",
      "(2, -4)"
    ],
    correctAnswer: 3,
    explanation: "The equation is in vertex form $f(x) = a(x - h)^2 + k$, where $(h, k)$ is the vertex.<br>Here, $h = 2$ and $k = -4$.<br>Therefore, the vertex is $(2, -4)$.",
    topic: "Quadratics",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q45",
    question: "What is the distance between the x-intercept and the y-intercept of the line $$3x - 2y = 12$$?",
    options: [
      "$$2\\sqrt{5}$$",
      "$$4\\sqrt{3}$$",
      "$$2\\sqrt{13}$$",
      "$$3\\sqrt{13}$$"
    ],
    correctAnswer: 2,
    explanation: "Find the x-intercept by setting $y = 0$:<br>$$3x - 2(0) = 12 \\Rightarrow 3x = 12 \\Rightarrow x = 4$$. The point is $(4, 0)$.<br>Find the y-intercept by setting $x = 0$:<br>$$3(0) - 2y = 12 \\Rightarrow -2y = 12 \\Rightarrow y = -6$$. The point is $(0, -6)$.<br>Use the distance formula:<br>$$d = \\sqrt{(4 - 0)^2 + (0 - (-6))^2} = \\sqrt{4^2 + 6^2} = \\sqrt{16 + 36} = \\sqrt{52}$$.<br>Simplify the radical: $\\sqrt{52} = \\sqrt{4 \\cdot 13} = 2\\sqrt{13}$.",
    topic: "Coordinate Geometry",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q46",
    question: "If $$\\frac{2}{x} + \\frac{3}{y} = 5$$ and $$\\frac{4}{x} - \\frac{3}{y} = 1$$, what is the value of $$x + y$$?",
    options: [
      "1",
      "1.5",
      "2",
      "2.5"
    ],
    correctAnswer: 2,
    explanation: "Add the two equations together to eliminate the $\\frac{3}{y}$ term:<br>$$\\left(\\frac{2}{x} + \\frac{3}{y}\\right) + \\left(\\frac{4}{x} - \\frac{3}{y}\\right) = 5 + 1$$<br>$$\\frac{6}{x} = 6$$<br>$$x = 1$$<br>Substitute $x = 1$ back into the first equation:<br>$$\\frac{2}{1} + \\frac{3}{y} = 5$$<br>$$2 + \\frac{3}{y} = 5$$<br>$$\\frac{3}{y} = 3$$<br>$$y = 1$$<br>Therefore, $x + y = 1 + 1 = 2$.",
    topic: "Linear Equations",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q47",
    question: "What is the area of the circle given by the equation $$x^2 + y^2 - 6x + 8y = 0$$?",
    options: [
      "$$5\\pi$$",
      "$$10\\pi$$",
      "$$16\\pi$$",
      "$$25\\pi$$"
    ],
    correctAnswer: 3,
    explanation: "Complete the square for both x and y terms:<br>$$(x^2 - 6x) + (y^2 + 8y) = 0$$<br>$$(x^2 - 6x + 9) + (y^2 + 8y + 16) = 9 + 16$$<br>$$(x - 3)^2 + (y + 4)^2 = 25$$<br>This is the standard equation of a circle $(x - h)^2 + (y - k)^2 = r^2$.<br>Here, $r^2 = 25$.<br>The area of a circle is $A = \\pi r^2 = 25\\pi$.",
    topic: "Coordinate Geometry",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q48",
    question: "For the function $$f(x) = 2x^3 - 3x^2 - 12x + 5$$, what is the difference between its local maximum and local minimum values?",
    options: [
      "20",
      "27",
      "32",
      "35"
    ],
    correctAnswer: 1,
    explanation: "Find the critical points by taking the derivative and setting it to zero:<br>$$f'(x) = 6x^2 - 6x - 12 = 0$$<br>Divide by 6: $x^2 - x - 2 = 0$<br>Factor: $(x - 2)(x + 1) = 0$<br>Critical points are at $x = 2$ and $x = -1$.<br>Evaluate the function at these points:<br>$f(2) = 2(2)^3 - 3(2)^2 - 12(2) + 5 = 16 - 12 - 24 + 5 = -15$ (local minimum).<br>$f(-1) = 2(-1)^3 - 3(-1)^2 - 12(-1) + 5 = -2 - 3 + 12 + 5 = 12$ (local maximum).<br>The difference is $12 - (-15) = 12 + 15 = 27$.",
    topic: "Polynomials",
    difficulty: "Hard"
  },
  {
    id: "est1_2021_jan_q49",
    question: "If $$2^{x+1} = 8^{y-1}$$ and $$3^{x-1} = 9^{y+1}$$, what is the value of $$x + y$$?",
    options: [
      "14",
      "17",
      "21",
      "24"
    ],
    correctAnswer: 3,
    explanation: "Express both sides of each equation with the same base.<br>First equation: $2^{x+1} = (2^3)^{y-1} \\Rightarrow 2^{x+1} = 2^{3y-3}$.<br>So, $x + 1 = 3y - 3 \\Rightarrow x - 3y = -4$.<br>Second equation: $3^{x-1} = (3^2)^{y+1} \\Rightarrow 3^{x-1} = 3^{2y+2}$.<br>So, $x - 1 = 2y + 2 \\Rightarrow x - 2y = 3$.<br>Subtract the first equation from the second:<br>$$(x - 2y) - (x - 3y) = 3 - (-4)$$<br>$$y = 7$$<br>Substitute $y = 7$ into $x - 2y = 3$:<br>$$x - 2(7) = 3 \\Rightarrow x - 14 = 3 \\Rightarrow x = 17$$<br>The value of $x + y = 17 + 7 = 24$.",
    topic: "Exponents",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q50",
    question: "If $$\\frac{1}{2}x - \\frac{1}{3}y = 1$$ and $$\\frac{1}{4}x + \\frac{1}{2}y = 2$$, what is the value of $$x - y$$?",
    options: [
      "1.25",
      "2.25",
      "3.5",
      "5.75"
    ],
    correctAnswer: 0,
    explanation: "Clear the fractions by multiplying the equations by their least common multiples.<br>Multiply the first equation by 6: $3x - 2y = 6$.<br>Multiply the second equation by 4: $x + 2y = 8$.<br>Add the two new equations:<br>$$(3x - 2y) + (x + 2y) = 6 + 8$$<br>$$4x = 14 \\Rightarrow x = 3.5$$<br>Substitute $x = 3.5$ into $x + 2y = 8$:<br>$$3.5 + 2y = 8 \\Rightarrow 2y = 4.5 \\Rightarrow y = 2.25$$<br>The value of $x - y = 3.5 - 2.25 = 1.25$.",
    topic: "Linear Equations",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q51",
    question: "What is the value of x that satisfies the equation $$3(x - 2) = 2(x + 3)$$?",
    options: [],
    answerText: "12",
    explanation: "Distribute the numbers on both sides:<br>$$3x - 6 = 2x + 6$$<br>Subtract $2x$ from both sides:<br>$$x - 6 = 6$$<br>Add 6 to both sides:<br>$$x = 12$$.",
    topic: "Linear Equations",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q52",
    question: "If $$\\frac{5}{x} = \\frac{15}{12}$$, what is the value of x?",
    options: [],
    answerText: "4",
    explanation: "Simplify the fraction on the right side:<br>$$\\frac{15}{12} = \\frac{5}{4}$$<br>So, $$\\frac{5}{x} = \\frac{5}{4}$$<br>Since the numerators are equal, the denominators must be equal:<br>$$x = 4$$.",
    topic: "Linear Equations",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q53",
    question: "What is the minimum value of the function $$f(x) = x^2 - 4x + 3$$?",
    options: [],
    answerText: "-1",
    explanation: "The minimum value of an upward-opening parabola occurs at its vertex. The x-coordinate of the vertex is $x = -\\frac{b}{2a}$.<br>Here, $a = 1$ and $b = -4$.<br>$$x = -\\frac{-4}{2(1)} = \\frac{4}{2} = 2$$<br>Substitute $x = 2$ back into the function to find the minimum value:<br>$$f(2) = (2)^2 - 4(2) + 3 = 4 - 8 + 3 = -1$$.",
    topic: "Quadratics",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q54",
    question: "The line $$2x + 3y = 12$$ has an x-intercept of a and a y-intercept of b. What is the value of $$a + b$$?",
    options: [],
    answerText: "10",
    explanation: "Find the x-intercept (a) by setting $y = 0$:<br>$$2x + 3(0) = 12 \\Rightarrow 2x = 12 \\Rightarrow x = 6$$. So, $a = 6$.<br>Find the y-intercept (b) by setting $x = 0$:<br>$$2(0) + 3y = 12 \\Rightarrow 3y = 12 \\Rightarrow y = 4$$. So, $b = 4$.<br>The sum $a + b = 6 + 4 = 10$.",
    topic: "Linear Equations",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q55",
    question: "What is the sum of the solutions to the equation $$3^{x^2 - 4x} = 1$$?",
    options: [],
    answerText: "4",
    explanation: "Any non-zero number raised to the power of 0 is 1. Therefore, we can set the exponent to 0:<br>$$x^2 - 4x = 0$$<br>Factor the equation:<br>$$x(x - 4) = 0$$<br>The solutions are $x = 0$ and $x = 4$.<br>The sum of the solutions is $0 + 4 = 4$.<br>Alternatively, using Vieta's formulas for $ax^2 + bx + c = 0$, the sum of the roots is $-\\frac{b}{a} = -\\frac{-4}{1} = 4$.",
    topic: "Exponents",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q56",
    question: "Triangle ABC is similar to triangle DEF. The lengths of the sides of triangle ABC are 3, 4, and 5. If the shortest side of triangle DEF has a length of 6, what is the area of triangle DEF?",
    options: [],
    answerText: "24",
    explanation: "Triangle ABC is a right triangle because its sides satisfy the Pythagorean theorem ($3^2 + 4^2 = 5^2$).<br>The area of triangle ABC is $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 3 \\times 4 = 6$.<br>The ratio of the sides of the similar triangles is $\\frac{6}{3} = 2$.<br>The ratio of their areas is the square of the ratio of their sides: $2^2 = 4$.<br>Therefore, the area of triangle DEF is $4 \\times \\text{Area of ABC} = 4 \\times 6 = 24$.",
    topic: "Geometry",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q57",
    question: "The circle with equation $$x^2 + y^2 = 25$$ intersects the line $$y = \\frac{3}{4}x$$ in the first quadrant at the point (x, y). What is the value of $$x + y$$?",
    options: [],
    answerText: "7",
    explanation: "Substitute the expression for y from the line equation into the circle equation:<br>$$x^2 + \\left(\\frac{3}{4}x\\right)^2 = 25$$<br>$$x^2 + \\frac{9}{16}x^2 = 25$$<br>$$\\frac{25}{16}x^2 = 25$$<br>Divide by 25 and multiply by 16:<br>$$x^2 = 16$$<br>Since the intersection is in the first quadrant, $x > 0$, so $x = 4$.<br>Substitute $x = 4$ back into the line equation to find y:<br>$$y = \\frac{3}{4}(4) = 3$$<br>The point is (4, 3). The value of $x + y = 4 + 3 = 7$.",
    topic: "Coordinate Geometry",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q58",
    question: "What is the solution to the equation $$\\frac{2}{x - 1} + \\frac{3}{x + 1} = \\frac{5}{x^2 - 1}$$?",
    options: [],
    answerText: "1.2",
    explanation: "Notice that $x^2 - 1 = (x - 1)(x + 1)$. Multiply the entire equation by the common denominator $(x - 1)(x + 1)$ to clear the fractions:<br>$$2(x + 1) + 3(x - 1) = 5$$<br>$$2x + 2 + 3x - 3 = 5$$<br>$$5x - 1 = 5$$<br>$$5x = 6$$<br>$$x = \\frac{6}{5} = 1.2$$.",
    topic: "Rational Equations",
    difficulty: "Medium"
  }
];
