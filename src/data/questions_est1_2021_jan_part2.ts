import { Question } from '../../types';

export const EST1_2021_JAN_PART2: Question[] = [
  {
    id: "est1_2021_jan_q21",
    question: "What is the value of x that satisfies the equation?<br>$$\\frac{6(x - 1) + 4}{3} - \\frac{3 - (5 - 4x)}{2} = 0$$",
    options: [
      "$$-\\frac{2}{5}$$",
      "$$-\\frac{3}{7}$$",
      "There is no value of x for which the equation is true.",
      "There are infinitely many values of x for which the equation is true."
    ],
    correctAnswer: 2,
    explanation: "Multiply the entire equation by 6 to clear the denominators:<br>$$2(6(x - 1) + 4) - 3(3 - (5 - 4x)) = 0$$<br>$$2(6x - 6 + 4) - 3(3 - 5 + 4x) = 0$$<br>$$2(6x - 2) - 3(-2 + 4x) = 0$$<br>$$12x - 4 + 6 - 12x = 0$$<br>$$2 = 0$$<br>Since this is a false statement, there is no solution.",
    topic: "Linear Equations",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q22",
    question: "If $$-\\frac{4}{5}x + 3 \\ge 2 - \\frac{1}{5}x$$, what is the highest value of $$\\frac{3}{2}x + 4$$?",
    options: [
      "3.5",
      "4.5",
      "5.5",
      "6.5"
    ],
    correctAnswer: 3,
    explanation: "Solve the inequality for x:<br>$$-\\frac{4}{5}x + \\frac{1}{5}x \\ge 2 - 3$$<br>$$-\\frac{3}{5}x \\ge -1$$<br>Multiply by $$-\\frac{5}{3}$$ and flip the inequality sign:<br>$$x \\le \\frac{5}{3}$$<br>To find the highest value of $$\\frac{3}{2}x + 4$$, substitute the maximum value of x ($$\\frac{5}{3}$$):<br>$$\\frac{3}{2}\\left(\\frac{5}{3}\\right) + 4 = \\frac{5}{2} + 4 = 2.5 + 4 = 6.5$$.",
    topic: "Inequalities",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q23",
    question: "If $$g(x) = ax^2 + bx + c$$ represents the quadratic function whose graph is shown below, which of the following statements is not true?",
    svg: `<svg width="300" height="300" viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid2" width="1" height="1" patternUnits="userSpaceOnUse"><path d="M 1 0 L 0 0 0 1" fill="none" stroke="#e0e0e0" stroke-width="0.05"/></pattern></defs><rect x="-5" y="-5" width="10" height="10" fill="url(#grid2)" /><line x1="-5" y1="0" x2="5" y2="0" stroke="black" stroke-width="0.1"/><line x1="0" y1="-5" x2="0" y2="5" stroke="black" stroke-width="0.1"/><path d="M -1 5 Q 1.5 -9 4 5" fill="none" stroke="#4a90e2" stroke-width="0.15"/></svg>`,
    options: [
      "a > 0",
      "b > 0",
      "c > 0",
      "3a + b = 0"
    ],
    correctAnswer: 1,
    explanation: "The parabola opens upwards, so $a > 0$. The vertex is in the fourth quadrant (positive x, negative y). The x-coordinate of the vertex is $-\\frac{b}{2a}$. Since the vertex has a positive x-coordinate and $a > 0$, $b$ must be negative ($b < 0$). Therefore, the statement $b > 0$ is not true.",
    topic: "Quadratics",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q24",
    question: "A survey is done on 80 families from two cities A and B, separated into groups based on the number of cars they own. The results are shown in the table below.\n\n| Number of cars | City A | City B |\n|---|---|---|\n| 1 | 25 | 20 |\n| 2 | 31 | 19 |\n| 3 | 14 | 23 |\n| 4 | 8 | 12 |\n| 5 | 2 | 6 |\n\nWhat is the mean number of cars owned by citizens in both cities A & B combined?",
    options: [
      "Between 1 and 2",
      "Between 2 and 3",
      "Between 3 and 4",
      "Between 4 and 5"
    ],
    correctAnswer: 1,
    explanation: "Total cars in City A = $(1\\times25) + (2\\times31) + (3\\times14) + (4\\times8) + (5\\times2) = 25 + 62 + 42 + 32 + 10 = 171$.<br>Total cars in City B = $(1\\times20) + (2\\times19) + (3\\times23) + (4\\times12) + (5\\times6) = 20 + 38 + 69 + 48 + 30 = 205$.<br>Total cars combined = $171 + 205 = 376$.<br>Total families combined = $80 + 80 = 160$.<br>Combined mean = $\\frac{376}{160} = 2.35$. This is between 2 and 3.",
    topic: "Statistics",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q25",
    question: "Based on the table in the previous question, which measure of center is unchanged in both cities?",
    options: [
      "Mode",
      "Mean",
      "Median",
      "None of the above"
    ],
    correctAnswer: 3,
    explanation: "City A: Mode = 2, Median = 2, Mean = 2.1375.<br>City B: Mode = 3, Median = 3, Mean = 2.5625.<br>Since all measures of center are different between the two cities, the answer is None of the above.",
    topic: "Statistics",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q26",
    question: "If $$f(x) = -3 - 2x$$ and $$g(x) = \\frac{-x^2}{6}$$, which of the following could not be in the range of $$f(g(x))$$?",
    options: [
      "-4",
      "-2",
      "0",
      "2"
    ],
    correctAnswer: 0,
    explanation: "First, find the composite function $f(g(x))$:<br>$$f(g(x)) = -3 - 2\\left(\\frac{-x^2}{6}\\right) = -3 + \\frac{2x^2}{6} = -3 + \\frac{x^2}{3}$$.<br>Since $x^2 \\ge 0$ for all real numbers x, $\\frac{x^2}{3} \\ge 0$.<br>Therefore, $-3 + \\frac{x^2}{3} \\ge -3$.<br>The range of $f(g(x))$ is all real numbers greater than or equal to -3. The value -4 is less than -3, so it cannot be in the range.",
    topic: "Functions",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q27",
    question: "A shop sells two sizes of doughnuts: mini and regular. Mini doughnuts have a diameter of 1.8 inches while regular ones have a diameter of 3 inches. Approximately, by what percentage is a regular normal doughnut larger (in area) than a mini doughnut?",
    options: [
      "67%",
      "67\\pi%",
      "78%",
      "178%"
    ],
    correctAnswer: 3,
    explanation: "The ratio of their diameters is $\\frac{3}{1.8} = \\frac{30}{18} = \\frac{5}{3}$.<br>The ratio of their areas is the square of the ratio of their diameters: $\\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9} \\approx 2.777...$<br>This means the regular doughnut's area is approximately 277.8% of the mini doughnut's area.<br>To find how much *larger* it is, subtract 100%: $277.8\\% - 100\\% = 177.8\\% \\approx 178\\%$.",
    topic: "Geometry",
    difficulty: "Hard"
  },
  {
    id: "est1_2021_jan_q28",
    question: "Line (A) passes through the points $$\\left(-\\frac{5}{3}, 0\\right)$$ and $$\\left(0, -\\frac{2}{3}\\right)$$. Which of the following lines will never intersect with line (A)?",
    options: [
      "$$y = -\\frac{5}{2}x - 1$$",
      "$$y = \\frac{5}{2}x - 1$$",
      "$$y = -\\frac{2}{5}x - 1$$",
      "$$y = \\frac{2}{5}x - 1$$"
    ],
    correctAnswer: 2,
    explanation: "Lines that never intersect are parallel, meaning they have the same slope.<br>The slope of line (A) is $m = \\frac{-\\frac{2}{3} - 0}{0 - (-\\frac{5}{3})} = \\frac{-\\frac{2}{3}}{\\frac{5}{3}} = -\\frac{2}{5}$.<br>The line with a slope of $-\\frac{2}{5}$ is $y = -\\frac{2}{5}x - 1$.",
    topic: "Coordinate Geometry",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q29",
    question: "What is the value of k if the following system of simultaneous equations admits no solutions?<br>$$2x + 15y = 18$$<br>$$kx - 5y = -7$$",
    options: [
      "$$-\\frac{1}{3}$$",
      "-6",
      "$$-\\frac{2}{3}$$",
      "$$\\frac{2}{3}$$"
    ],
    correctAnswer: 2,
    explanation: "A system of linear equations has no solutions if the lines are parallel (same slope) but have different y-intercepts.<br>Convert both equations to slope-intercept form ($y = mx + b$):<br>1) $15y = -2x + 18 \\Rightarrow y = -\\frac{2}{15}x + \\frac{18}{15}$<br>2) $-5y = -kx - 7 \\Rightarrow y = \\frac{k}{5}x + \\frac{7}{5}$<br>Set the slopes equal: $-\\frac{2}{15} = \\frac{k}{5}$<br>Multiply by 5: $k = -\\frac{10}{15} = -\\frac{2}{3}$.",
    topic: "Linear Equations",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q30",
    question: "An oven costs $150 less than 4 times the cost of a microwave. If the oven and the microwave cost together $725, how much more does the oven cost than the microwave?",
    options: [
      "$175",
      "$275",
      "$375",
      "$550"
    ],
    correctAnswer: 2,
    explanation: "Let O be the cost of the oven and M be the cost of the microwave.<br>We have two equations:<br>1) $O = 4M - 150$<br>2) $O + M = 725$<br>Substitute (1) into (2):<br>$(4M - 150) + M = 725$<br>$5M = 875$<br>$M = 175$<br>The microwave costs $175. The oven costs $725 - 175 = 550$.<br>The difference is $550 - 175 = 375$.",
    topic: "Word Problems",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q31",
    question: "From 2020 to 2021, the amount in Tom's bank account decreased by 11% to $49840. What was the initial amount in his bank account?",
    options: [
      "$54820",
      "$44358",
      "$56000",
      "$45309"
    ],
    correctAnswer: 2,
    explanation: "Let X be the initial amount. A decrease of 11% means the new amount is 89% of the original.<br>$$0.89X = 49840$$<br>$$X = \\frac{49840}{0.89} = 56000$$.",
    topic: "Percentages",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q32",
    question: "What is the absolute value of the difference between the two roots of the equation $$(4x + 1)^2 - 9x^2 = 0$$?",
    options: [
      "$$\\frac{8}{65}$$",
      "$$\\frac{6}{7}$$",
      "$$\\frac{1}{4}$$",
      "$$\\frac{3}{14}$$"
    ],
    correctAnswer: 1,
    explanation: "This is a difference of squares: $a^2 - b^2 = (a - b)(a + b)$.<br>Here, $a = 4x + 1$ and $b = 3x$.<br>$$((4x + 1) - 3x)((4x + 1) + 3x) = 0$$<br>$$(x + 1)(7x + 1) = 0$$<br>The roots are $x = -1$ and $x = -\\frac{1}{7}$.<br>The absolute difference is $\\left|-1 - \\left(-\\frac{1}{7}\\right)\\right| = \\left|-1 + \\frac{1}{7}\\right| = \\left|-\\frac{6}{7}\\right| = \\frac{6}{7}$.",
    topic: "Quadratics",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q33",
    question: "The table below summarizes the results of a survey about the favorite school subject for a group of 350 students according to their educational stage.\n\n| | Primary | Secondary | Tertiary | Total |\n|---|---|---|---|---|\n| Math | 65 | 80 | 30 | 175 |\n| English | 35 | 55 | 10 | 100 |\n| Science | 15 | 10 | 25 | 50 |\n| History | 10 | 5 | 10 | 25 |\n| Total | 125 | 150 | 75 | 350 |\n\nAccording to the data, which subject had the lowest percentage of likers among primary students?",
    options: [
      "Math",
      "English",
      "Science",
      "History"
    ],
    correctAnswer: 3,
    explanation: "We need to find the lowest percentage among the 125 primary students.<br>Math: $65/125$<br>English: $35/125$<br>Science: $15/125$<br>History: $10/125$<br>History has the lowest number of likers (10), so it has the lowest percentage.",
    topic: "Statistics",
    difficulty: "Easy"
  },
  {
    id: "est1_2021_jan_q34",
    question: "Based on the table in the previous question, if a secondary student is chosen randomly, what is the probability that he favors Math or Science?",
    options: [
      "$$\\frac{9}{35}$$",
      "$$\\frac{18}{25}$$",
      "$$\\frac{8}{15}$$",
      "$$\\frac{3}{5}$$"
    ],
    correctAnswer: 3,
    explanation: "The total number of secondary students is 150.<br>The number of secondary students who favor Math is 80.<br>The number of secondary students who favor Science is 10.<br>Total favoring Math or Science = $80 + 10 = 90$.<br>Probability = $\\frac{90}{150} = \\frac{9}{15} = \\frac{3}{5}$.",
    topic: "Probability",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q35",
    question: "Given a cone whose height is the quadruple of its diameter. If the volume of the cone is $$72\\pi$$, what is the diameter of its base?",
    options: [
      "4",
      "5",
      "6",
      "9"
    ],
    correctAnswer: 2,
    explanation: "Let the diameter be $d$ and the radius be $r = \\frac{d}{2}$.<br>The height is $h = 4d = 4(2r) = 8r$.<br>The volume of a cone is $V = \\frac{1}{3}\\pi r^2 h$.<br>$$72\\pi = \\frac{1}{3}\\pi r^2 (8r)$$<br>$$72 = \\frac{8}{3}r^3$$<br>$$r^3 = 72 \\cdot \\frac{3}{8} = 9 \\cdot 3 = 27$$<br>$$r = 3$$<br>The diameter is $d = 2r = 6$.",
    topic: "Geometry",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q36",
    question: "If $$11x - 7y = 6$$ and $$17x - 13y = 9$$, what is the value of $$x - y$$?",
    options: [
      "0",
      "$$-\\frac{1}{2}$$",
      "$$\\frac{1}{2}$$",
      "-2"
    ],
    correctAnswer: 2,
    explanation: "Subtract the first equation from the second equation:<br>$$(17x - 13y) - (11x - 7y) = 9 - 6$$<br>$$6x - 6y = 3$$<br>Divide by 6:<br>$$x - y = \\frac{3}{6} = \\frac{1}{2}$$.",
    topic: "Linear Equations",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q37",
    question: "Anton has $20 to spend on stationary. Pens (p) cost $1.4 each, coloring crayons (c) are priced at $3.5 per pack and highlighters (h) sell for $2 each. He must buy a notebook for $5.5 as well. Which of the following describes how many highlighters Anton can buy?",
    options: [
      "$$h \\le \\frac{14.5 - 1.4p - 3.5c}{2}$$",
      "$$h \\le \\frac{14.5 + 1.4p + 3.5c}{2}$$",
      "$$h \\le \\frac{20 - 1.4p - 3.5c}{2} - 5.5$$",
      "$$h \\le \\frac{20 - 1.4p - 3.5c}{2}$$"
    ],
    correctAnswer: 0,
    explanation: "The total cost must be less than or equal to $20:<br>$$1.4p + 3.5c + 2h + 5.5 \\le 20$$<br>Subtract 5.5 from both sides:<br>$$1.4p + 3.5c + 2h \\le 14.5$$<br>Isolate the term with h:<br>$$2h \\le 14.5 - 1.4p - 3.5c$$<br>Divide by 2:<br>$$h \\le \\frac{14.5 - 1.4p - 3.5c}{2}$$.",
    topic: "Inequalities",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q38",
    question: "By what percentage should we raise the price of a good to return to its initial price knowing that it was subject to a 20% discount 2 weeks ago?",
    options: [
      "15%",
      "20%",
      "25%",
      "30%"
    ],
    correctAnswer: 2,
    explanation: "Let the original price be $P$. After a 20% discount, the new price is $0.8P$.<br>To return to $P$, we need to increase $0.8P$ by some amount $x$.<br>$$0.8P(1 + x) = P$$<br>$$1 + x = \\frac{1}{0.8} = 1.25$$<br>$$x = 0.25$$<br>This corresponds to a 25% increase.",
    topic: "Percentages",
    difficulty: "Medium"
  },
  {
    id: "est1_2021_jan_q39",
    question: "The general elections in a country provided a parliament composed of 35% deputies from the democratic party, 20% for the conservative party, 30% for the republican party and 27 members of the labor party. How many more democrats are there than conservatives?",
    options: [
      "9",
      "18",
      "27",
      "36"
    ],
    correctAnswer: 2,
    explanation: "The total percentage of the first three parties is $35\\% + 20\\% + 30\\% = 85\\%$.<br>This means the labor party represents $100\\% - 85\\% = 15\\%$ of the parliament.<br>We know there are 27 labor party members, so $0.15 \\times \\text{Total} = 27 \\Rightarrow \\text{Total} = \\frac{27}{0.15} = 180$ members.<br>Number of democrats = $0.35 \\times 180 = 63$.<br>Number of conservatives = $0.20 \\times 180 = 36$.<br>Difference = $63 - 36 = 27$.",
    topic: "Percentages",
    difficulty: "Hard"
  },
  {
    id: "est1_2021_jan_q40",
    question: "Based on the graph below, what is the value of $$f(-1) + g(-1) + h(-1)$$?<br>*(Note: At x = -1, f(x) = 2, g(x) = -2, h(x) = -5)*",
    svg: `<svg width="300" height="300" viewBox="-4 -6 4 6" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid3" width="1" height="1" patternUnits="userSpaceOnUse"><path d="M 1 0 L 0 0 0 1" fill="none" stroke="#e0e0e0" stroke-width="0.05"/></pattern></defs><rect x="-4" y="-6" width="4" height="6" fill="url(#grid3)" /><line x1="-4" y1="0" x2="4" y2="0" stroke="black" stroke-width="0.1"/><line x1="0" y1="-6" x2="0" y2="6" stroke="black" stroke-width="0.1"/><path d="M -3 -5 Q -1.5 5 0 -5" fill="none" stroke="#4a90e2" stroke-width="0.1"/><text x="-2.5" y="-1.5" fill="#4a90e2" font-size="0.4">f(x)</text><path d="M -3 -1 Q -1 -2 1 2" fill="none" stroke="#e74c3c" stroke-width="0.1" stroke-dasharray="0.2,0.2"/><text x="0.5" y="-0.5" fill="#e74c3c" font-size="0.4">g(x)</text><path d="M -3 -5 L 2 2" fill="none" stroke="#2ecc71" stroke-width="0.1" stroke-dasharray="0.4,0.2"/><text x="1.5" y="1.5" fill="#2ecc71" font-size="0.4">h(x)</text></svg>`,
    options: [
      "-4",
      "-5",
      "-6",
      "-7"
    ],
    correctAnswer: 1,
    explanation: "From the graph (and the note provided), at $x = -1$:<br>$f(-1) = 2$<br>$g(-1) = -2$<br>$h(-1) = -5$<br>Sum = $2 + (-2) + (-5) = -5$.",
    topic: "Functions",
    difficulty: "Medium"
  }
];
