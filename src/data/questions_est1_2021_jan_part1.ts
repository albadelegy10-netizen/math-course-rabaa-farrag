import { Question } from '../../types';

export const EST1_2021_JAN_PART1: Question[] = [
  {
    id: "est1_2021_jan_q1",
    question: "For a point source, sound waves propagate in concentric spheres, therefore the intensity of the sound at a point A distant D from the source is given by: $$I = \\frac{P}{4\\pi D^2}$$ where:<br>I is the sound intensity<br>P is the power of the point source<br>D is the distance between the source and the point A where the intensity is to be found<br><br>Isolate D.",
    options: [
      "$$D = 2 \\sqrt{\\frac{\\pi I}{P}}$$",
      "$$D = \\frac{1}{2} \\sqrt{\\frac{P}{\\pi I}}$$",
      "$$D = \\left(\\frac{P}{4\\pi I}\\right)^2$$",
      "$$D = \\sqrt{\\frac{P}{2\\pi I}}$$"
    ],
    correctAnswer: 1,
    explanation: "$$I = \\frac{P}{4\\pi D^2} \\Rightarrow D^2 = \\frac{P}{4\\pi I} \\Rightarrow D = \\sqrt{\\frac{P}{4\\pi I}} = \\frac{1}{2}\\sqrt{\\frac{P}{\\pi I}}$$",
    topic: "Algebra",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q2",
    question: "If the power of the source doubles ($P' = 2P$), and the distance between the source and point A also doubles ($D' = 2D$), the sound intensity becomes $I'$. What is the relationship between $I'$ and $I$?",
    options: [
      "$$I' = I$$",
      "$$I' = 4I$$",
      "$$I' = \\frac{I}{2}$$",
      "$$I' = \\frac{I}{4}$$"
    ],
    correctAnswer: 2,
    explanation: "$$I' = \\frac{P'}{4\\pi (D')^2} = \\frac{2P}{4\\pi (2D)^2} = \\frac{2P}{4\\pi (4D^2)} = \\frac{2}{4} \\left(\\frac{P}{4\\pi D^2}\\right) = \\frac{1}{2}I$$",
    topic: "Algebra",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q3",
    question: "The weekly salary S of Samantha is given by $$S = 7hd + 75$$ where h is the number of hours she works every day and d is the number of working days each week. If Samantha is to be promoted with a salary increase, which of the following terms must change?",
    options: [
      "7",
      "h",
      "d",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "The term 7 represents her hourly wage. An increase in salary (wage) means the hourly rate must change.",
    topic: "Linear Equations",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q4",
    question: "In the xy-plane, the equation of the line (d) passing through A(-1, 4) and perpendicular to line $$3x - 2y = 5$$ is:",
    options: [
      "$$y = \\frac{3}{2}x + \\frac{11}{2}$$",
      "$$y = -\\frac{3}{2}x + \\frac{5}{2}$$",
      "$$y = -\\frac{2}{3}x + \\frac{14}{3}$$",
      "$$y = -\\frac{2}{3}x + \\frac{10}{3}$$"
    ],
    correctAnswer: 3,
    explanation: "The given line is $3x - 2y = 5 \\Rightarrow y = \\frac{3}{2}x - \\frac{5}{2}$. Its slope is $\\frac{3}{2}$. The perpendicular line has a slope of $-\\frac{2}{3}$. Using point-slope form with A(-1, 4): $y - 4 = -\\frac{2}{3}(x + 1) \\Rightarrow y = -\\frac{2}{3}x - \\frac{2}{3} + 4 \\Rightarrow y = -\\frac{2}{3}x + \\frac{10}{3}$.",
    topic: "Coordinate Geometry",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q5",
    question: "A researcher selected a random sample of 25 different brands of bottled water and measured the corresponding PH. He found out that the mean PH of the sample was 7.3 with an associated margin of error of 0.25. Which of the following is the best interpretation of the researcher's findings?",
    options: [
      "Most water bottles in the market have a PH between 7.05 and 7.55",
      "All water bottles in the market have a PH between 7.05 and 7.55",
      "Any PH between 7.05 and 7.55 is a plausible value for the mean PH of the water bottles in the sample",
      "Any PH between 7.05 and 7.55 is a plausible value for the mean PH of the water bottles in the market"
    ],
    correctAnswer: 3,
    explanation: "The margin of error applied to the sample mean gives a confidence interval for the true population mean. Therefore, it provides plausible values for the mean PH of all water bottles in the market.",
    topic: "Statistics",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q6",
    question: "If $$h(x) = -x^2 + 3x - 2$$ and $$k(x) = -2x - 5$$, what is the value of $$h(k(-2))$$?",
    options: [
      "-6",
      "-4",
      "0",
      "2"
    ],
    correctAnswer: 0,
    explanation: "First, find $k(-2) = -2(-2) - 5 = 4 - 5 = -1$. Then, find $h(-1) = -(-1)^2 + 3(-1) - 2 = -1 - 3 - 2 = -6$.",
    topic: "Functions",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q7",
    question: "The graph below depicts a function f(x). How many solutions does the equation f(x) = 0 admit?<br><br><svg width=\"300\" height=\"300\" viewBox=\"-12 -12 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><defs><pattern id=\"grid\" width=\"2\" height=\"2\" patternUnits=\"userSpaceOnUse\"><path d=\"M 2 0 L 0 0 0 2\" fill=\"none\" stroke=\"#e0e0e0\" stroke-width=\"0.1\"/></pattern></defs><rect x=\"-12\" y=\"-12\" width=\"24\" height=\"24\" fill=\"url(#grid)\" /><line x1=\"-12\" y1=\"0\" x2=\"12\" y2=\"0\" stroke=\"black\" stroke-width=\"0.3\"/><line x1=\"0\" y1=\"-12\" x2=\"0\" y2=\"12\" stroke=\"black\" stroke-width=\"0.3\"/><path d=\"M -5 -12 Q -4 10 -3 0 T 1 0 T 4 0 T 7 0\" fill=\"none\" stroke=\"red\" stroke-width=\"0.4\"/><path d=\"M -4.5 -12 C -4 -2, -3.5 2, -3 0 C -2 -4, -1 -6, 0 -5 C 1 -4, 2 4, 3 0 C 4 -4, 5 -4, 6 0 C 7 4, 8 12, 8 12\" fill=\"none\" stroke=\"red\" stroke-width=\"0.4\"/></svg><br>*(Note: The graph crosses the x-axis at 4 distinct points)*",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 3,
    explanation: "The solutions to $f(x) = 0$ are the x-intercepts of the graph. The graph crosses the x-axis at 4 distinct points.",
    topic: "Functions",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q8",
    question: "Which of the following angles have the same value of $$\\sin 32^\\circ$$?",
    options: [
      "$$\\sin (-32^\\circ)$$",
      "$$\\sin 58^\\circ$$",
      "$$\\cos (-32^\\circ)$$",
      "$$\\cos 58^\\circ$$"
    ],
    correctAnswer: 3,
    explanation: "Using the cofunction identity, $\\sin(\\theta) = \\cos(90^\\circ - \\theta)$. Therefore, $\\sin(32^\\circ) = \\cos(90^\\circ - 32^\\circ) = \\cos(58^\\circ)$.",
    topic: "Trigonometry",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q9",
    question: "Knowing that lines (xy) and (rs) are parallel, what is the type of triangle ABM? (Figure is not drawn to scale)<br><br><svg width=\"300\" height=\"200\" viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"120\" x2=\"280\" y2=\"120\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"25\" y=\"115\" font-size=\"12\">y</text><text x=\"270\" y=\"115\" font-size=\"12\">x</text><line x1=\"20\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"black\" stroke-width=\"1.5\"/><text x=\"25\" y=\"155\" font-size=\"12\">s</text><text x=\"270\" y=\"155\" font-size=\"12\">r</text><polygon points=\"150,40 80,120 220,120\" fill=\"none\" stroke=\"black\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"40\" x2=\"40\" y2=\"190\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"150\" y1=\"40\" x2=\"260\" y2=\"190\" stroke=\"black\" stroke-width=\"1\"/><text x=\"145\" y=\"35\" font-size=\"12\">M</text><text x=\"75\" y=\"115\" font-size=\"12\">A</text><text x=\"225\" y=\"115\" font-size=\"12\">B</text><text x=\"55\" y=\"155\" font-size=\"12\">127°</text><text x=\"235\" y=\"175\" font-size=\"12\">53°</text></svg>",
    options: [
      "Scalene",
      "Isosceles",
      "Equilateral",
      "Right isosceles"
    ],
    correctAnswer: 1,
    explanation: "The angle adjacent to $127^\\circ$ on the transversal is $180^\\circ - 127^\\circ = 53^\\circ$. Since the lines are parallel, the corresponding interior angles of the triangle are $53^\\circ$ and $53^\\circ$. A triangle with two equal base angles is isosceles.",
    topic: "Geometry",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q10",
    question: "A rental car company charges its clients by the number of days d the car is rented. If the bill b of a client is given by the equation $$b = 5d + 20$$, what is the best interpretation of the term 5?",
    options: [
      "The rental cost of the car per day",
      "The fixed cost of renting a car, no matter how many days it is rented",
      "The average number of days the car is rented",
      "The fees of renting a car for 7 days"
    ],
    correctAnswer: 0,
    explanation: "In the linear equation $b = 5d + 20$, the coefficient of $d$ (which is 5) represents the rate of change, or the cost per day.",
    topic: "Linear Equations",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q11",
    question: "The table below summarizes the grades out of 10 obtained by 4 players in a competition over a total of 5 rounds.\n\n| | Diego | Mark | Tyler | Toni |\n|---|---|---|---|---|\n| Round 1 | 7 | 3 | 8 | 10 |\n| Round 2 | 5 | 10 | 7 | 4 |\n| Round 3 | 8 | 9 | 6 | 9 |\n| Round 4 | 9 | 5 | 7 | 10 |\n| Round 5 | 4 | 8 | 8 | 7 |\n| Standard deviation | 1.85 | 2.61 | 0.75 | 2.28 |\n\nThe winner is the player with the highest average. Who won the competition?",
    options: [
      "Diego",
      "Toni",
      "Tyler",
      "Mark"
    ],
    correctAnswer: 1,
    explanation: "Sum of grades:<br>Diego: $7+5+8+9+4 = 33$<br>Mark: $3+10+9+5+8 = 35$<br>Tyler: $8+7+6+7+8 = 36$<br>Toni: $10+4+9+10+7 = 40$<br>Toni has the highest sum, and thus the highest average.",
    topic: "Statistics",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q12",
    question: "Based on the table in the previous question, which player was the most consistent in terms of his grades?",
    options: [
      "Mark",
      "Diego",
      "Toni",
      "Tyler"
    ],
    correctAnswer: 3,
    explanation: "Consistency is measured by the standard deviation. The lower the standard deviation, the more consistent the grades. Tyler has the lowest standard deviation (0.75).",
    topic: "Statistics",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q13",
    question: "What is the resulting coefficient of x when $$-2x + 3$$ is multiplied by $$-3x - 2$$?",
    options: [
      "-9",
      "-5",
      "5",
      "6"
    ],
    correctAnswer: 1,
    explanation: "$$(-2x + 3)(-3x - 2) = 6x^2 + 4x - 9x - 6 = 6x^2 - 5x - 6$$. The coefficient of $x$ is -5.",
    topic: "Polynomials",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q14",
    question: "Which of the following is equivalent to the expression $$\\frac{-6x^2 + 5x + 2}{2x + 1}$$?",
    options: [
      "$$-3x + 4 - \\frac{2}{2x + 1}$$",
      "$$-3x + 4 + \\frac{2}{2x + 1}$$",
      "$$-3x - \\frac{2}{2x + 1}$$",
      "$$-3x + 4$$"
    ],
    correctAnswer: 0,
    explanation: "Using polynomial long division:<br>$\\frac{-6x^2 + 5x + 2}{2x + 1}$<br>$-6x^2 / 2x = -3x$<br>$-3x(2x + 1) = -6x^2 - 3x$<br>Subtracting: $(5x) - (-3x) = 8x$<br>Bring down 2: $8x + 2$<br>$8x / 2x = 4$<br>$4(2x + 1) = 8x + 4$<br>Subtracting: $2 - 4 = -2$<br>Result: $-3x + 4 - \\frac{2}{2x + 1}$.",
    topic: "Polynomials",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q15",
    question: "If $m$ and $k$ are positive numbers, which of the following expressions is equivalent to $$(16k^{12}m^4)^{\\frac{1}{4}}$$?",
    options: [
      "$$4k^3m$$",
      "$$2k^3$$",
      "$$4k^3m^2$$",
      "$$2k^3m$$"
    ],
    correctAnswer: 3,
    explanation: "$$(16k^{12}m^4)^{\\frac{1}{4}} = 16^{\\frac{1}{4}} \\cdot (k^{12})^{\\frac{1}{4}} \\cdot (m^4)^{\\frac{1}{4}} = 2 \\cdot k^3 \\cdot m^1 = 2k^3m$$.",
    topic: "Exponents",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q16",
    question: "If the expression $$\\frac{-2i - i^3}{1 + 3i}$$ is written in the form $a + bi$ where a and b are real numbers and $$i = \\sqrt{-1}$$, what is the value of $$b - a$$?",
    options: [],
    answerText: "0.2",
    explanation: "$$i^3 = -i$$, so the numerator is $$-2i - (-i) = -i$$.<br>The expression becomes $$\\frac{-i}{1 + 3i}$$.<br>Multiply numerator and denominator by the conjugate $1 - 3i$:<br>$$\\frac{-i(1 - 3i)}{(1 + 3i)(1 - 3i)} = \\frac{-i + 3i^2}{1^2 - (3i)^2} = \\frac{-i - 3}{1 + 9} = \\frac{-3 - i}{10} = -\\frac{3}{10} - \\frac{1}{10}i$$.<br>So $a = -0.3$ and $b = -0.1$.<br>$$b - a = -0.1 - (-0.3) = 0.2$$.",
    topic: "Complex Numbers",
    difficulty: "Hard",
    type: "grid-in"
  },
  {
    id: "est1_2021_jan_q17",
    question: "If $$\\frac{1}{2}y - \\frac{3}{5}x = -6$$, what is the value of $$6x - 5y$$?",
    options: [],
    answerText: "60",
    explanation: "Multiply the entire equation by 10 to clear denominators:<br>$$10 \\left(\\frac{1}{2}y - \\frac{3}{5}x\\right) = 10(-6)$$<br>$$5y - 6x = -60$$<br>Multiply by -1:<br>$$6x - 5y = 60$$.",
    topic: "Linear Equations",
    difficulty: "Medium",
    type: "grid-in"
  },
  {
    id: "est1_2021_jan_q18",
    question: "If $$|-2b - 3| \\le 7$$, how many possible integer values of b are there?",
    options: [],
    answerText: "8",
    explanation: "$$-7 \\le -2b - 3 \\le 7$$<br>Add 3 to all parts:<br>$$-4 \\le -2b \\le 10$$<br>Divide by -2 (and flip inequalities):<br>$$2 \\ge b \\ge -5$$<br>The integer values are -5, -4, -3, -2, -1, 0, 1, 2. There are 8 values.",
    topic: "Inequalities",
    difficulty: "Medium",
    type: "grid-in"
  },
  {
    id: "est1_2021_jan_q19",
    question: "The table below shows several points from the graph of quadratic function q(x). What is q(-9)?\n\n| x | q(x) |\n|---|---|\n| -5 | -7 |\n| -3 | -15 |\n| -1 | -15 |\n| 1 | -7 |\n| 3 | 9 |\n| 5 | 33 |",
    options: [],
    answerText: "33",
    explanation: "The values of $q(x)$ are symmetric around $x = -2$ (since $q(-3) = q(-1) = -15$). Thus, the vertex is at $x = -2$.<br>The equation is $q(x) = a(x + 2)^2 + k$.<br>Using $(-1, -15)$: $a(1)^2 + k = -15 \\Rightarrow a + k = -15$<br>Using $(1, -7)$: $a(3)^2 + k = -7 \\Rightarrow 9a + k = -7$<br>Subtracting the two equations: $8a = 8 \\Rightarrow a = 1$.<br>Then $1 + k = -15 \\Rightarrow k = -16$.<br>So $q(x) = (x + 2)^2 - 16$.<br>We need $q(-9) = (-9 + 2)^2 - 16 = (-7)^2 - 16 = 49 - 16 = 33$.",
    topic: "Quadratics",
    difficulty: "Hard",
    type: "grid-in"
  },
  {
    id: "est1_2021_jan_q20",
    question: "If $$(3^9)^{3^{12}} = 3^{3^x}$$, what is the value of x?",
    options: [],
    answerText: "14",
    explanation: "Using the power of a power rule $(a^m)^n = a^{mn}$:<br>$$(3^9)^{3^{12}} = 3^{9 \\cdot 3^{12}}$$<br>We know $9 = 3^2$, so $9 \\cdot 3^{12} = 3^2 \\cdot 3^{12} = 3^{14}$.<br>Therefore, the equation becomes $3^{3^{14}} = 3^{3^x}$.<br>Equating the exponents: $3^{14} = 3^x \\Rightarrow x = 14$.",
    topic: "Exponents",
    difficulty: "Hard",
    type: "grid-in"
  }
];
