import { Question } from '../../../types';

// ACT2 Exam 7 (Test #7) — transcribed from the 3D Academy ACT Subject Test (Math Level 1) PDF.
// Answers follow the PDF answer key. Figures are cleaned scans stored as base64 PNG.
export const ACT2_3D_EXAM7: Question[] = [
  {
    "id": 1,
    "question": "This graph shows the grade point average and ACT score for each student in Mr. Rodriguez's class. Use the line of best fit from the graph to determine which of the following statements must be true for Mr. Rodriguez's class.",
    "options": [
      "There is no correlation between ACT scores and grade point averages.",
      "There is a positive correlation between ACT scores and grade point averages.",
      "As ACT scores increase, grade point averages decrease.",
      "The student with the highest ACT score has the lowest grade point average."
    ],
    "correctAnswer": 1,
    "explanation": "The line of best fit rises from left to right: higher ACT scores go with higher GPAs — a positive correlation.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 2,
    "question": "When folded along the dashed lines, which of the nets forms a cube?",
    "options": [
      "Net A",
      "Net B",
      "Net C",
      "Net D"
    ],
    "correctAnswer": 1,
    "explanation": "Net B (a $1$–$3$–$2$ staircase arrangement of six squares) folds into a cube; the others have overlapping faces or the wrong number of squares.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 3,
    "question": "Simplify $-4x - 8 - 2(3x + 1) - 10$.",
    "options": [
      "$10x + 20$",
      "$-10x - 17$",
      "$-10x - 20$",
      "$-2x - 20$"
    ],
    "correctAnswer": 2,
    "explanation": "$-4x - 8 - 6x - 2 - 10 = -10x - 20$.",
    "category": ""
  },
  {
    "id": 4,
    "question": "A list has mean $= 6$, median $= 6$, mode $= 10$. If we wrote a second list with each number increased by $5$, the mean of the second list will be:",
    "options": [
      "$6$",
      "$10$",
      "$11$",
      "$15$"
    ],
    "correctAnswer": 2,
    "explanation": "Adding $5$ to every value adds $5$ to the mean: $6 + 5 = 11$.",
    "category": ""
  },
  {
    "id": 5,
    "question": "What is the value of $x$?",
    "options": [
      "$-4$",
      "$-5$",
      "$4$",
      "$5$"
    ],
    "correctAnswer": 3,
    "explanation": "Pythagorean theorem: $(\\sqrt{x})^2 + (2\\sqrt{5})^2 = x^2 \\Rightarrow x + 20 = x^2 \\Rightarrow (x - 5)(x + 4) = 0$. Length must be positive: $x = 5$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 6,
    "question": "What is the value of $x$?",
    "options": [
      "$2$",
      "$11$",
      "$16$",
      "$22$"
    ],
    "correctAnswer": 2,
    "explanation": "Intersecting chords: $22 \\cdot 8 = 11 \\cdot x \\Rightarrow x = 16$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 7,
    "question": "What is the area of a circle when the diameter is equal to $17$?",
    "options": [
      "$289\\pi$",
      "$72.25\\pi$",
      "$17\\pi$",
      "$34\\pi$"
    ],
    "correctAnswer": 1,
    "explanation": "$r = 8.5$, $A = \\pi(8.5)^2 = 72.25\\pi$.",
    "category": ""
  },
  {
    "id": 8,
    "question": "Triangle $DCE$ is similar to triangle $ACB$. Which statement is true?",
    "options": [
      "Angle $D$ corresponds to angle $B$.",
      "Angle $E$ corresponds to angle $B$.",
      "Angle $A$ corresponds to angle $C$.",
      "Angle $C$ corresponds to angle $B$."
    ],
    "correctAnswer": 1,
    "explanation": "The order of the letters gives the correspondence $D \\leftrightarrow A$, $C \\leftrightarrow C$, $E \\leftrightarrow B$.",
    "category": ""
  },
  {
    "id": 9,
    "question": "The points $(2, 4)$ and $(2, -6)$ give which kind of slope?",
    "options": [
      "Positive slope",
      "Negative slope",
      "Undefined slope",
      "Zero slope"
    ],
    "correctAnswer": 2,
    "explanation": "Both points have $x = 2$: a vertical line, whose slope is undefined.",
    "category": ""
  },
  {
    "id": 10,
    "question": "Simplify $\\dfrac{3x^2}{3x^3 + 27x}$.",
    "options": [
      "$\\frac{3x^2}{30x^3}$",
      "$\\frac{x}{3x^2 + 3x}$",
      "$\\frac{1}{x + 9}$",
      "$\\frac{x}{x^2 + 9}$"
    ],
    "correctAnswer": 3,
    "explanation": "$\\frac{3x^2}{3x(x^2 + 9)} = \\frac{x}{x^2 + 9}$.",
    "category": ""
  },
  {
    "id": 11,
    "question": "A quadrilateral has interior angles measuring $n$, $2n$, $3n$, and $4n$. What is the value of $n$?",
    "options": [
      "$36$",
      "$3.6$",
      "$360$",
      "$180$"
    ],
    "correctAnswer": 0,
    "explanation": "$n + 2n + 3n + 4n = 360 \\Rightarrow 10n = 360 \\Rightarrow n = 36$.",
    "category": ""
  },
  {
    "id": 12,
    "question": "Find the solution of the following system: $3x + 4 = -4y$ and $2y + x = 2$.",
    "options": [
      "$(-5, 8)$",
      "$(-8, 5)$",
      "$(-10, 4)$",
      "$(10, -4)$"
    ],
    "correctAnswer": 1,
    "explanation": "$x = 2 - 2y$. Then $3(2 - 2y) + 4 = -4y \\Rightarrow 10 - 6y = -4y \\Rightarrow y = 5$, $x = -8$.",
    "category": ""
  },
  {
    "id": 13,
    "question": "What is the median of the data shown in the bar graph?",
    "options": [
      "$3$",
      "$5$",
      "$9$",
      "$4$"
    ],
    "correctAnswer": 0,
    "explanation": "The bars give the frequencies of the values $1$–$5$: $4, 6, 5, 3, 4$ ($22$ data points). The $11$th and $12$th values fall in the cumulative range $11$–$15$, which is the value $3$.",
    "category": "",
    "svg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"mx-auto h-48 w-auto\"><g transform=\"translate(30,15)\"><line x1=\"0\" y1=\"154\" x2=\"230\" y2=\"154\" stroke=\"#ccc\"/><text x=\"-8\" y=\"158\" font-size=\"10\" text-anchor=\"end\" font-family=\"sans-serif\">0</text><line x1=\"0\" y1=\"132\" x2=\"230\" y2=\"132\" stroke=\"#ccc\"/><text x=\"-8\" y=\"136\" font-size=\"10\" text-anchor=\"end\" font-family=\"sans-serif\">1</text><line x1=\"0\" y1=\"110\" x2=\"230\" y2=\"110\" stroke=\"#ccc\"/><text x=\"-8\" y=\"114\" font-size=\"10\" text-anchor=\"end\" font-family=\"sans-serif\">2</text><line x1=\"0\" y1=\"88\" x2=\"230\" y2=\"88\" stroke=\"#ccc\"/><text x=\"-8\" y=\"92\" font-size=\"10\" text-anchor=\"end\" font-family=\"sans-serif\">3</text><line x1=\"0\" y1=\"66\" x2=\"230\" y2=\"66\" stroke=\"#ccc\"/><text x=\"-8\" y=\"70\" font-size=\"10\" text-anchor=\"end\" font-family=\"sans-serif\">4</text><line x1=\"0\" y1=\"44\" x2=\"230\" y2=\"44\" stroke=\"#ccc\"/><text x=\"-8\" y=\"48\" font-size=\"10\" text-anchor=\"end\" font-family=\"sans-serif\">5</text><line x1=\"0\" y1=\"22\" x2=\"230\" y2=\"22\" stroke=\"#ccc\"/><text x=\"-8\" y=\"26\" font-size=\"10\" text-anchor=\"end\" font-family=\"sans-serif\">6</text><line x1=\"0\" y1=\"0\" x2=\"230\" y2=\"0\" stroke=\"#ccc\"/><text x=\"-8\" y=\"4\" font-size=\"10\" text-anchor=\"end\" font-family=\"sans-serif\">7</text><rect x=\"5\" y=\"66\" width=\"44\" height=\"88\" fill=\"#e8e8e8\" stroke=\"#000\" stroke-width=\"1.5\"/><text x=\"27.0\" y=\"62\" font-size=\"10\" text-anchor=\"middle\" font-family=\"sans-serif\">4</text><text x=\"27.0\" y=\"168\" font-size=\"11\" text-anchor=\"middle\" font-family=\"sans-serif\">1</text><rect x=\"49\" y=\"22\" width=\"44\" height=\"132\" fill=\"#e8e8e8\" stroke=\"#000\" stroke-width=\"1.5\"/><text x=\"71.0\" y=\"18\" font-size=\"10\" text-anchor=\"middle\" font-family=\"sans-serif\">6</text><text x=\"71.0\" y=\"168\" font-size=\"11\" text-anchor=\"middle\" font-family=\"sans-serif\">2</text><rect x=\"93\" y=\"44\" width=\"44\" height=\"110\" fill=\"#e8e8e8\" stroke=\"#000\" stroke-width=\"1.5\"/><text x=\"115.0\" y=\"40\" font-size=\"10\" text-anchor=\"middle\" font-family=\"sans-serif\">5</text><text x=\"115.0\" y=\"168\" font-size=\"11\" text-anchor=\"middle\" font-family=\"sans-serif\">3</text><rect x=\"137\" y=\"88\" width=\"44\" height=\"66\" fill=\"#e8e8e8\" stroke=\"#000\" stroke-width=\"1.5\"/><text x=\"159.0\" y=\"84\" font-size=\"10\" text-anchor=\"middle\" font-family=\"sans-serif\">3</text><text x=\"159.0\" y=\"168\" font-size=\"11\" text-anchor=\"middle\" font-family=\"sans-serif\">4</text><rect x=\"181\" y=\"66\" width=\"44\" height=\"88\" fill=\"#e8e8e8\" stroke=\"#000\" stroke-width=\"1.5\"/><text x=\"203.0\" y=\"62\" font-size=\"10\" text-anchor=\"middle\" font-family=\"sans-serif\">4</text><text x=\"203.0\" y=\"168\" font-size=\"11\" text-anchor=\"middle\" font-family=\"sans-serif\">5</text><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"154\" stroke=\"#000\" stroke-width=\"1.5\"/><line x1=\"0\" y1=\"154\" x2=\"230\" y2=\"154\" stroke=\"#000\" stroke-width=\"1.5\"/></g></svg>"
  },
  {
    "id": 14,
    "question": "A bike ramp is $50$ ft long, and the angle of elevation is $30^\\circ$. To the nearest hundredth of a foot, how high is the end of the ramp?",
    "options": [
      "$25.00$",
      "$28.87$",
      "$35.36$",
      "$43.30$"
    ],
    "correctAnswer": 0,
    "explanation": "$h = 50\\sin 30^\\circ = 25.00$ ft.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 15,
    "question": "Rationalize the denominator and simplify $\\frac{30}{\\sqrt{20}}$.",
    "options": [
      "$3$",
      "$3\\sqrt{5}$",
      "$\\frac{3\\sqrt{2}}{2}$",
      "$3\\sqrt{2}$"
    ],
    "correctAnswer": 1,
    "explanation": "$\\frac{30}{2\\sqrt{5}} = \\frac{15}{\\sqrt{5}} = 3\\sqrt{5}$.",
    "category": ""
  },
  {
    "id": 16,
    "question": "How many points of intersection do the following equations have? $y = \\frac{1}{3}x + 5$ and $y = -x^2 + 8$",
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$3$"
    ],
    "correctAnswer": 2,
    "explanation": "$-x^2 + 8 = \\frac{1}{3}x + 5 \\Rightarrow x^2 + \\frac{1}{3}x - 3 = 0$; discriminant $\\frac{1}{9} + 12 > 0$, so $2$ points.",
    "category": ""
  },
  {
    "id": 17,
    "question": "If $-3x + 7 < 16$, which of the following must be true?",
    "options": [
      "$x > -3$",
      "$x < -3$",
      "$x \\ge -3$",
      "$x \\le -3$"
    ],
    "correctAnswer": 0,
    "explanation": "$-3x < 9 \\Rightarrow x > -3$.",
    "category": ""
  },
  {
    "id": 18,
    "question": "Simplify $(5x^3z^4y^{-2})^{-2}(3xy^4z^{-3})^3$.",
    "options": [
      "$\\frac{27y^{16}}{25z^{17}x^3}$",
      "$\\frac{27y^{16}}{5z^{17}x^3}$",
      "$\\frac{3y^{16}}{25z^{17}x^3}$",
      "$\\frac{27y^{16}}{25z^2x^3}$"
    ],
    "correctAnswer": 0,
    "explanation": "$(5x^3z^4y^{-2})^{-2} = \\frac{y^4}{25x^6z^8}$ and $(3xy^4z^{-3})^3 = \\frac{27x^3y^{12}}{z^9}$. Product: $\\frac{27y^{16}}{25x^3z^{17}}$.",
    "category": ""
  },
  {
    "id": 19,
    "question": "Simplify $\\dfrac{\\sqrt{a^2b} + \\sqrt{ab^2}}{ab}$ for $a, b > 0$.",
    "options": [
      "$\\frac{a\\sqrt{b} + b\\sqrt{a}}{ab}$",
      "$\\frac{a^2\\sqrt{b} + b^3\\sqrt{a}}{ab}$",
      "$\\frac{a^3\\sqrt{b} + b^2\\sqrt{a}}{ab}$",
      "$\\frac{a\\sqrt{b} + b\\sqrt{a}}{\\sqrt{ab}}$"
    ],
    "correctAnswer": 0,
    "explanation": "$\\sqrt{a^2b} = a\\sqrt{b}$ and $\\sqrt{ab^2} = b\\sqrt{a}$, giving $\\frac{a\\sqrt{b} + b\\sqrt{a}}{ab}$.",
    "category": ""
  },
  {
    "id": 20,
    "question": "To the nearest tenth, how many small cylinders full of water can fit into the large cylinder? (Small: diameter $6$, height $10$. Large: diameter $8$, height $20$.)",
    "options": [
      "$3.5$",
      "$3.7$",
      "$3.6$",
      "$3$"
    ],
    "correctAnswer": 2,
    "explanation": "Small: $\\pi(3)^2(10) = 90\\pi$. Large: $\\pi(4)^2(20) = 320\\pi$. $\\frac{320}{90} \\approx 3.6$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 21,
    "question": "The diameter of the first circle is $1$, the second is $2$, and the third (largest) is $3$. If a point were to be chosen at random in the square with side length $4$, what is the probability of the point landing in the large circle but not in the two smaller tangent circles?",
    "options": [
      "$18\\%$",
      "$19\\%$",
      "$20\\%$",
      "$21\\%$"
    ],
    "correctAnswer": 2,
    "explanation": "Region area $= \\pi(1.5)^2 - \\pi(0.5)^2 - \\pi(1)^2 = \\pi(2.25 - 0.25 - 1) = \\pi$. Probability $= \\frac{\\pi}{16} \\approx 19.6\\% \\approx 20\\%$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 22,
    "question": "A basketball hoop is $13$ ft tall with a shadow of $3$ ft $4$ in. A boy is $4$ ft $5$ in tall. What is the length of the shadow he creates?",
    "options": [
      "$1$ ft $1.5$ in",
      "$1$ ft $15$ in",
      "$12$ ft $1.5$ in",
      "$3$ ft $1.5$ in"
    ],
    "correctAnswer": 0,
    "explanation": "Proportion (in inches): $\\frac{156}{40} = \\frac{53}{s} \\Rightarrow s \\approx 13.6$ in $\\approx 1$ ft $1.5$ in.",
    "category": ""
  },
  {
    "id": 23,
    "question": "The mean of $6$ numbers is $6$, the median is $6$, and the mode is $10$. If each number is increased by $5$, what would be the mean?",
    "options": [
      "$2$",
      "$11$",
      "$5$",
      "$6$"
    ],
    "correctAnswer": 1,
    "explanation": "Adding $5$ to each value raises the mean by $5$: $11$.",
    "category": ""
  },
  {
    "id": 24,
    "question": "A line has a $y$-intercept of $0$ and a negative slope. Which quadrants would the line lie in?",
    "options": [
      "$Q_1$, $Q_2$",
      "$Q_2$, $Q_4$",
      "$Q_1$, $Q_3$",
      "$Q_3$, $Q_4$"
    ],
    "correctAnswer": 1,
    "explanation": "A line through the origin with negative slope goes from quadrant II down to quadrant IV.",
    "category": ""
  },
  {
    "id": 25,
    "question": "A set of points was reflected across the $y$-axis. What would be the new set of points after the reflection? $(-3, 5)$, $(-4, 2)$, $(-1, 6)$",
    "options": [
      "$(3, 5)$, $(4, 2)$, $(1, 6)$",
      "$(-3, -5)$, $(-4, -2)$, $(-1, -6)$",
      "$(5, -3)$, $(2, -4)$, $(6, -1)$",
      "$(3, -5)$, $(4, -2)$, $(-1, 6)$"
    ],
    "correctAnswer": 0,
    "explanation": "Reflecting across the $y$-axis maps $(x, y) \\to (-x, y)$.",
    "category": ""
  },
  {
    "id": 26,
    "question": "Marco, Charlie, Rob, and Lauren ate desserts; the options were cookies, ice cream, brownies, and cake. Marco and Charlie had the same dessert. No one chose the same dessert as Rob or Lauren. Rob chose brownies and Charlie chose cake. Neither Marco nor Lauren chose cookies. What did Lauren eat?",
    "options": [
      "Ice cream",
      "Brownies",
      "Cookies",
      "Cake"
    ],
    "correctAnswer": 0,
    "explanation": "Marco had cake (same as Charlie). Lauren's dessert is unique, so not brownies (Rob) or cake (Marco and Charlie), and she didn't choose cookies: ice cream.",
    "category": ""
  },
  {
    "id": 27,
    "question": "Simplify $\\dfrac{x^2 - 100}{x^2 + 4x - 60} \\cdot \\dfrac{x^2 - 6x}{x - 10}$.",
    "options": [
      "$x^2$",
      "$x$",
      "$x - 10$",
      "$x - 6$"
    ],
    "correctAnswer": 1,
    "explanation": "$\\frac{(x - 10)(x + 10)}{(x + 10)(x - 6)} \\cdot \\frac{x(x - 6)}{x - 10} = x$.",
    "category": ""
  },
  {
    "id": 28,
    "question": "Find and compare the mean and median of the following numbers: $75, 70, 80, 70, 80, 90, 95, 70, 70, 75, 80, 80, 90, 95$",
    "options": [
      "Mean $>$ Median",
      "Mean $<$ Median",
      "Mean $=$ Median",
      "Mean $= 75$, Median $= 85$"
    ],
    "correctAnswer": 2,
    "explanation": "Sum $= 1120$ over $14$ numbers: mean $= 80$. Sorted, the $7$th and $8$th values are both $80$: median $= 80$.",
    "category": ""
  },
  {
    "id": 29,
    "question": "Chris started a new job. On the first day he worked for $5$ hours, on the fifth day he worked for $4$ hours, and on the $12$th and $14$th days he worked for $6$ hours. Which relation represents this situation (day, hours)?",
    "options": [
      "$(1, 5)$, $(5, 4)$, $(12, 6)$, $(14, 6)$",
      "$(5, 1)$, $(5, 4)$, $(6, 12)$, $(6, 14)$",
      "$(1, 5)$, $(4, 5)$, $(12, 6)$, $(6, 14)$",
      "$(1, 5)$, $(5, 4)$, $(6, 12)$, $(14, 6)$"
    ],
    "correctAnswer": 0,
    "explanation": "Pairs of (day, hours): $(1, 5)$, $(5, 4)$, $(12, 6)$, $(14, 6)$.",
    "category": ""
  },
  {
    "id": 30,
    "question": "If there were $6$ rabbits on an isolated island and their number doubles each year, what would be their number after $9$ years?",
    "options": [
      "$3000$",
      "$3070$",
      "$3072$",
      "$300$"
    ],
    "correctAnswer": 2,
    "explanation": "$6 \\cdot 2^9 = 6 \\cdot 512 = 3072$.",
    "category": ""
  },
  {
    "id": 31,
    "question": "The radii of $3$ concentric circles have a ratio of $5:8:9$. The circle between the smallest and the largest has a radius of $10$ cm. To the nearest hundredth of a centimeter, what is the distance from the smallest circle to the largest circle?",
    "options": [
      "$1$",
      "$1.25$",
      "$2.5$",
      "$5$"
    ],
    "correctAnswer": 3,
    "explanation": "$8k = 10 \\Rightarrow k = 1.25$. Distance $= 9k - 5k = 4k = 5$ cm.",
    "category": ""
  },
  {
    "id": 32,
    "question": "What is the greatest number of squares, $5$ cm on a side, that can be cut from a rectangular piece of construction paper $60$ cm long and $45$ cm wide?",
    "options": [
      "$75$",
      "$90$",
      "$96$",
      "$108$"
    ],
    "correctAnswer": 3,
    "explanation": "$\\frac{60}{5} \\times \\frac{45}{5} = 12 \\times 9 = 108$.",
    "category": ""
  },
  {
    "id": 33,
    "question": "A store has square rugs in three sizes. A side of the largest rug is twice as long as a side of the middle one, and a side of the middle one is twice as long as a side of the smallest one. What is the ratio of the area that the largest rug will cover to the area that the smallest one will cover?",
    "options": [
      "$3$ to $1$",
      "$4$ to $1$",
      "$8$ to $1$",
      "$16$ to $1$"
    ],
    "correctAnswer": 3,
    "explanation": "Sides in ratio $4 : 1$, areas in ratio $16 : 1$.",
    "category": ""
  },
  {
    "id": 34,
    "question": "If $a$, $b$, $m$ and $n$ are integers, $m > 0$, $n < 0$, and $x^2 + mx + n = (x + a)(x + b)$, what must be true of the product and the sum of $a$ and $b$?",
    "options": [
      "$ab > 0$ and $a + b > 0$",
      "$ab > 0$ and $a + b < 0$",
      "$ab < 0$ and $a + b > 0$",
      "$ab < 0$ and $a + b < 0$"
    ],
    "correctAnswer": 2,
    "explanation": "Expanding gives $a + b = m > 0$ and $ab = n < 0$.",
    "category": ""
  },
  {
    "id": 35,
    "question": "When two square regions overlap, what can the shape of the overlapping portion be? I. Square  II. Triangular  III. Rectangular",
    "options": [
      "I only",
      "II only",
      "III only",
      "I, II, and III"
    ],
    "correctAnswer": 3,
    "explanation": "Depending on position and rotation, the overlap can be a square, a triangle (corner over a rotated square), or a non-square rectangle.",
    "category": ""
  },
  {
    "id": 36,
    "question": "A day-care center has a bag of blocks of various geometric shapes. For these blocks, each of these statements is true: If a block is triangular, then it is blue. If a block is not blue, then it is plastic. If a block is square, then it is not blue. If a block is circular, then it is plastic. If a block is not blue, then it is not circular. If a block from the bag is blue, which of the following statements must be true about the block?",
    "options": [
      "It is triangular",
      "It is circular",
      "It is not a square",
      "It is not plastic"
    ],
    "correctAnswer": 2,
    "explanation": "Contrapositive of “square $\\Rightarrow$ not blue” is “blue $\\Rightarrow$ not square”.",
    "category": ""
  },
  {
    "id": 37,
    "question": "Quadrilateral $ABCD$ is inscribed in a circle with a diameter $\\overline{AC}$ such that $m\\angle DAC = 55^\\circ$ and $m\\angle BCA = 40^\\circ$. What are $m\\angle BAD$ and $m\\angle BCD$?",
    "options": [
      "$m\\angle BAD = 105^\\circ$ and $m\\angle BCD = 75^\\circ$",
      "$m\\angle BAD = 100^\\circ$ and $m\\angle BCD = 80^\\circ$",
      "$m\\angle BAD = 95^\\circ$ and $m\\angle BCD = 85^\\circ$",
      "$m\\angle BAD = 95^\\circ$ and $m\\angle BCD = 90^\\circ$"
    ],
    "correctAnswer": 0,
    "explanation": "$\\angle ABC = 90^\\circ$ (inscribed in a semicircle), so $\\angle BAC = 50^\\circ$ and $\\angle BAD = 50^\\circ + 55^\\circ = 105^\\circ$. Opposite angles are supplementary: $\\angle BCD = 75^\\circ$.",
    "category": ""
  },
  {
    "id": 38,
    "question": "Point $P$ is on the line $y = 3$. The distance from $P$ to the point with coordinates $(8, 8)$ is $13$ units. What is the $x$-coordinate of $P$ if it is less than $8$?",
    "options": [
      "$-5$",
      "$-4$",
      "$0$",
      "$3$"
    ],
    "correctAnswer": 1,
    "explanation": "$(x - 8)^2 + 5^2 = 169 \\Rightarrow (x - 8)^2 = 144 \\Rightarrow x = -4$ (taking $x < 8$).",
    "category": ""
  },
  {
    "id": 39,
    "question": "What is the slope of the line whose equation is $5x - 3y = 9$?",
    "options": [
      "$-3$",
      "$-\\frac{5}{3}$",
      "$\\frac{5}{3}$",
      "$5$"
    ],
    "correctAnswer": 2,
    "explanation": "$y = \\frac{5}{3}x - 3$, slope $\\frac{5}{3}$.",
    "category": ""
  },
  {
    "id": 40,
    "question": "If $5 \\times (P + Q) = 30$ and $P$ is greater than zero, then $Q$ could NOT be:",
    "options": [
      "$7$",
      "$4$",
      "$3\\frac{1}{2}$",
      "$0$"
    ],
    "correctAnswer": 0,
    "explanation": "$P + Q = 6$ with $P > 0$ means $Q < 6$, so $Q$ cannot be $7$.",
    "category": ""
  },
  {
    "id": 41,
    "question": "What property of real numbers is demonstrated by the statement “If $a = 20$, then $20 = a$”?",
    "options": [
      "Transitive Property of Equality",
      "Substitution Property of Equality",
      "Reflexive Property of Equality",
      "Symmetric Property of Equality"
    ],
    "correctAnswer": 3,
    "explanation": "If $a = b$ then $b = a$ is the symmetric property.",
    "category": ""
  },
  {
    "id": 42,
    "question": "Which statements are always logically equivalent?",
    "options": [
      "The converse of a conditional statement and the contrapositive of a conditional statement",
      "The conditional statement and its inverse",
      "The conditional statement and its contrapositive",
      "The inverse and contrapositive of a conditional statement"
    ],
    "correctAnswer": 2,
    "explanation": "A conditional and its contrapositive always have the same truth value.",
    "category": ""
  },
  {
    "id": 43,
    "question": "Which graph shows a function where $x$ is the input and $y$ is the output?",
    "options": [
      "Graph A",
      "Graph B",
      "Graph C",
      "Graph D"
    ],
    "correctAnswer": 3,
    "explanation": "Only graph D passes the vertical line test (each $x$ has one $y$).",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 44,
    "question": "Which of the following proves that the two triangles are similar?",
    "options": [
      "AA",
      "ASA",
      "SAS",
      "SSS"
    ],
    "correctAnswer": 0,
    "explanation": "$\\overline{AB} \\parallel \\overline{CD}$ gives equal alternate interior angles, and the vertical angles are equal: AA similarity.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 45,
    "question": "Which is the converse of the following statement? “If Chris uses toothpaste X, he doesn't get cavities.”",
    "options": [
      "If Chris doesn't get cavities, he uses toothpaste X.",
      "If Chris gets cavities, he uses toothpaste X.",
      "If Chris doesn't get cavities, he doesn't use toothpaste X.",
      "If Chris doesn't use toothpaste X, he doesn't get cavities."
    ],
    "correctAnswer": 0,
    "explanation": "The converse swaps hypothesis and conclusion: “If $q$, then $p$”.",
    "category": ""
  },
  {
    "id": 46,
    "question": "$\\overline{GB}$ is a chord. Find the value of $GB$.",
    "options": [
      "$2\\sqrt{5}$",
      "$4\\sqrt{5}$",
      "$\\sqrt{5}$",
      "$2\\sqrt{4}$"
    ],
    "correctAnswer": 1,
    "explanation": "Radius $= 4 + 2 = 6$. Half-chord $= \\sqrt{6^2 - 4^2} = \\sqrt{20} = 2\\sqrt{5}$, so $GB = 4\\sqrt{5}$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 47,
    "question": "$A$ represents adults while $S$ represents children: $6A + 3S \\ge 1500$. Which graph should be used?",
    "options": [
      "Graph A",
      "Graph B",
      "Graph C",
      "Graph D"
    ],
    "correctAnswer": 3,
    "explanation": "The boundary $6A + 3S = 1500$ has negative slope, and “$\\ge$” means shading above the line (away from the origin) in the first quadrant: graph D.",
    "category": "",
    "svg": "<svg viewBox=\"0 0 340 330\" xmlns=\"http://www.w3.org/2000/svg\" class=\"mx-auto h-64 w-auto\"><g transform=\"translate(0,0)\"><text x=\"0\" y=\"14\" font-size=\"16\" font-weight=\"bold\" font-family=\"sans-serif\">A</text><g transform=\"translate(20,20)\"><polygon points=\"30,0 130,0 130,120 90,120\" fill=\"#8c8c8c\" fill-opacity=\"0.75\"/><line x1=\"0\" y1=\"70\" x2=\"130\" y2=\"70\" stroke=\"#000\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"0\" x2=\"30\" y2=\"120\" stroke=\"#000\" stroke-width=\"1.5\"/><line x1=\"15\" y1=\"67\" x2=\"15\" y2=\"73\" stroke=\"#000\"/><line x1=\"30\" y1=\"67\" x2=\"30\" y2=\"73\" stroke=\"#000\"/><line x1=\"45\" y1=\"67\" x2=\"45\" y2=\"73\" stroke=\"#000\"/><line x1=\"60\" y1=\"67\" x2=\"60\" y2=\"73\" stroke=\"#000\"/><line x1=\"75\" y1=\"67\" x2=\"75\" y2=\"73\" stroke=\"#000\"/><line x1=\"90\" y1=\"67\" x2=\"90\" y2=\"73\" stroke=\"#000\"/><line x1=\"105\" y1=\"67\" x2=\"105\" y2=\"73\" stroke=\"#000\"/><line x1=\"120\" y1=\"67\" x2=\"120\" y2=\"73\" stroke=\"#000\"/><line x1=\"27\" y1=\"10\" x2=\"33\" y2=\"10\" stroke=\"#000\"/><line x1=\"27\" y1=\"25\" x2=\"33\" y2=\"25\" stroke=\"#000\"/><line x1=\"27\" y1=\"40\" x2=\"33\" y2=\"40\" stroke=\"#000\"/><line x1=\"27\" y1=\"55\" x2=\"33\" y2=\"55\" stroke=\"#000\"/><line x1=\"27\" y1=\"70\" x2=\"33\" y2=\"70\" stroke=\"#000\"/><line x1=\"27\" y1=\"85\" x2=\"33\" y2=\"85\" stroke=\"#000\"/><line x1=\"27\" y1=\"100\" x2=\"33\" y2=\"100\" stroke=\"#000\"/><line x1=\"27\" y1=\"115\" x2=\"33\" y2=\"115\" stroke=\"#000\"/><line x1=\"30\" y1=\"0\" x2=\"90\" y2=\"120\" stroke=\"#000\" stroke-width=\"2\"/></g></g><g transform=\"translate(175,0)\"><text x=\"0\" y=\"14\" font-size=\"16\" font-weight=\"bold\" font-family=\"sans-serif\">B</text><g transform=\"translate(20,20)\"><polygon points=\"0,0 30,0 90,120 0,120\" fill=\"#8c8c8c\" fill-opacity=\"0.75\"/><line x1=\"0\" y1=\"70\" x2=\"130\" y2=\"70\" stroke=\"#000\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"0\" x2=\"30\" y2=\"120\" stroke=\"#000\" stroke-width=\"1.5\"/><line x1=\"15\" y1=\"67\" x2=\"15\" y2=\"73\" stroke=\"#000\"/><line x1=\"30\" y1=\"67\" x2=\"30\" y2=\"73\" stroke=\"#000\"/><line x1=\"45\" y1=\"67\" x2=\"45\" y2=\"73\" stroke=\"#000\"/><line x1=\"60\" y1=\"67\" x2=\"60\" y2=\"73\" stroke=\"#000\"/><line x1=\"75\" y1=\"67\" x2=\"75\" y2=\"73\" stroke=\"#000\"/><line x1=\"90\" y1=\"67\" x2=\"90\" y2=\"73\" stroke=\"#000\"/><line x1=\"105\" y1=\"67\" x2=\"105\" y2=\"73\" stroke=\"#000\"/><line x1=\"120\" y1=\"67\" x2=\"120\" y2=\"73\" stroke=\"#000\"/><line x1=\"27\" y1=\"10\" x2=\"33\" y2=\"10\" stroke=\"#000\"/><line x1=\"27\" y1=\"25\" x2=\"33\" y2=\"25\" stroke=\"#000\"/><line x1=\"27\" y1=\"40\" x2=\"33\" y2=\"40\" stroke=\"#000\"/><line x1=\"27\" y1=\"55\" x2=\"33\" y2=\"55\" stroke=\"#000\"/><line x1=\"27\" y1=\"70\" x2=\"33\" y2=\"70\" stroke=\"#000\"/><line x1=\"27\" y1=\"85\" x2=\"33\" y2=\"85\" stroke=\"#000\"/><line x1=\"27\" y1=\"100\" x2=\"33\" y2=\"100\" stroke=\"#000\"/><line x1=\"27\" y1=\"115\" x2=\"33\" y2=\"115\" stroke=\"#000\"/><line x1=\"30\" y1=\"0\" x2=\"90\" y2=\"120\" stroke=\"#000\" stroke-width=\"2\"/></g></g><g transform=\"translate(0,165)\"><text x=\"0\" y=\"14\" font-size=\"16\" font-weight=\"bold\" font-family=\"sans-serif\">C</text><g transform=\"translate(20,20)\"><polygon points=\"30,10 125,90 30,90\" fill=\"#8c8c8c\" fill-opacity=\"0.75\"/><line x1=\"0\" y1=\"70\" x2=\"130\" y2=\"70\" stroke=\"#000\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"0\" x2=\"30\" y2=\"120\" stroke=\"#000\" stroke-width=\"1.5\"/><line x1=\"15\" y1=\"67\" x2=\"15\" y2=\"73\" stroke=\"#000\"/><line x1=\"30\" y1=\"67\" x2=\"30\" y2=\"73\" stroke=\"#000\"/><line x1=\"45\" y1=\"67\" x2=\"45\" y2=\"73\" stroke=\"#000\"/><line x1=\"60\" y1=\"67\" x2=\"60\" y2=\"73\" stroke=\"#000\"/><line x1=\"75\" y1=\"67\" x2=\"75\" y2=\"73\" stroke=\"#000\"/><line x1=\"90\" y1=\"67\" x2=\"90\" y2=\"73\" stroke=\"#000\"/><line x1=\"105\" y1=\"67\" x2=\"105\" y2=\"73\" stroke=\"#000\"/><line x1=\"120\" y1=\"67\" x2=\"120\" y2=\"73\" stroke=\"#000\"/><line x1=\"27\" y1=\"10\" x2=\"33\" y2=\"10\" stroke=\"#000\"/><line x1=\"27\" y1=\"25\" x2=\"33\" y2=\"25\" stroke=\"#000\"/><line x1=\"27\" y1=\"40\" x2=\"33\" y2=\"40\" stroke=\"#000\"/><line x1=\"27\" y1=\"55\" x2=\"33\" y2=\"55\" stroke=\"#000\"/><line x1=\"27\" y1=\"70\" x2=\"33\" y2=\"70\" stroke=\"#000\"/><line x1=\"27\" y1=\"85\" x2=\"33\" y2=\"85\" stroke=\"#000\"/><line x1=\"27\" y1=\"100\" x2=\"33\" y2=\"100\" stroke=\"#000\"/><line x1=\"27\" y1=\"115\" x2=\"33\" y2=\"115\" stroke=\"#000\"/><line x1=\"30\" y1=\"10\" x2=\"130\" y2=\"94\" stroke=\"#000\" stroke-width=\"2\"/></g></g><g transform=\"translate(175,165)\"><text x=\"0\" y=\"14\" font-size=\"16\" font-weight=\"bold\" font-family=\"sans-serif\">D</text><g transform=\"translate(20,20)\"><polygon points=\"30,10 130,10 130,94\" fill=\"#8c8c8c\" fill-opacity=\"0.75\"/><line x1=\"0\" y1=\"70\" x2=\"130\" y2=\"70\" stroke=\"#000\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"0\" x2=\"30\" y2=\"120\" stroke=\"#000\" stroke-width=\"1.5\"/><line x1=\"15\" y1=\"67\" x2=\"15\" y2=\"73\" stroke=\"#000\"/><line x1=\"30\" y1=\"67\" x2=\"30\" y2=\"73\" stroke=\"#000\"/><line x1=\"45\" y1=\"67\" x2=\"45\" y2=\"73\" stroke=\"#000\"/><line x1=\"60\" y1=\"67\" x2=\"60\" y2=\"73\" stroke=\"#000\"/><line x1=\"75\" y1=\"67\" x2=\"75\" y2=\"73\" stroke=\"#000\"/><line x1=\"90\" y1=\"67\" x2=\"90\" y2=\"73\" stroke=\"#000\"/><line x1=\"105\" y1=\"67\" x2=\"105\" y2=\"73\" stroke=\"#000\"/><line x1=\"120\" y1=\"67\" x2=\"120\" y2=\"73\" stroke=\"#000\"/><line x1=\"27\" y1=\"10\" x2=\"33\" y2=\"10\" stroke=\"#000\"/><line x1=\"27\" y1=\"25\" x2=\"33\" y2=\"25\" stroke=\"#000\"/><line x1=\"27\" y1=\"40\" x2=\"33\" y2=\"40\" stroke=\"#000\"/><line x1=\"27\" y1=\"55\" x2=\"33\" y2=\"55\" stroke=\"#000\"/><line x1=\"27\" y1=\"70\" x2=\"33\" y2=\"70\" stroke=\"#000\"/><line x1=\"27\" y1=\"85\" x2=\"33\" y2=\"85\" stroke=\"#000\"/><line x1=\"27\" y1=\"100\" x2=\"33\" y2=\"100\" stroke=\"#000\"/><line x1=\"27\" y1=\"115\" x2=\"33\" y2=\"115\" stroke=\"#000\"/><line x1=\"30\" y1=\"10\" x2=\"130\" y2=\"94\" stroke=\"#000\" stroke-width=\"2\"/></g></g></svg>"
  },
  {
    "id": 48,
    "question": "You have the quadratic $y = x^2 + bx + c$ with $b > 0$ and $c < 0$. Which graph could it be?",
    "options": [
      "Graph A",
      "Graph B",
      "Graph C",
      "Graph D"
    ],
    "correctAnswer": 0,
    "explanation": "$c < 0$: the $y$-intercept is negative. $b > 0$ with leading coefficient $1$: the vertex $x = -\\frac{b}{2} < 0$ (left of the $y$-axis), opening up — graph A.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 49,
    "question": "Determine the number of solutions for the following system of equations: $2x + 5y = 7$ and $10y = -4x + 14$.",
    "options": [
      "Exactly one solution",
      "No solutions",
      "Infinitely many solutions",
      "Exactly two solutions"
    ],
    "correctAnswer": 2,
    "explanation": "The second equation is $4x + 10y = 14$, which is twice the first: the same line, so infinitely many solutions.",
    "category": ""
  },
  {
    "id": 50,
    "question": "Which of these graphs shows the quadratic function $y = 2x^2 + 8x + 7$?",
    "options": [
      "Graph A",
      "Graph B",
      "Graph C",
      "Graph D"
    ],
    "correctAnswer": 2,
    "explanation": "Vertex at $x = -\\frac{8}{4} = -2$, $y = 8 - 16 + 7 = -1$: vertex $(-2, -1)$, opening up — graph C.",
    "category": "",
    "svg": "<svg viewBox=\"0 0 360 380\" xmlns=\"http://www.w3.org/2000/svg\" class=\"mx-auto h-72 w-auto\"><g transform=\"translate(0,0)\"><circle cx=\"9\" cy=\"9\" r=\"8\" fill=\"none\" stroke=\"#000\"/><text x=\"9\" y=\"13\" font-size=\"10\" text-anchor=\"middle\" font-family=\"sans-serif\">A</text><g transform=\"translate(20,14)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"0\" x2=\"156\" y2=\"0\" stroke=\"#d0d0d0\"/><line x1=\"13\" y1=\"0\" x2=\"13\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"13\" x2=\"156\" y2=\"13\" stroke=\"#d0d0d0\"/><line x1=\"26\" y1=\"0\" x2=\"26\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"26\" x2=\"156\" y2=\"26\" stroke=\"#d0d0d0\"/><line x1=\"39\" y1=\"0\" x2=\"39\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"39\" x2=\"156\" y2=\"39\" stroke=\"#d0d0d0\"/><line x1=\"52\" y1=\"0\" x2=\"52\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"52\" x2=\"156\" y2=\"52\" stroke=\"#d0d0d0\"/><line x1=\"65\" y1=\"0\" x2=\"65\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"65\" x2=\"156\" y2=\"65\" stroke=\"#d0d0d0\"/><line x1=\"78\" y1=\"0\" x2=\"78\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"78\" x2=\"156\" y2=\"78\" stroke=\"#d0d0d0\"/><line x1=\"91\" y1=\"0\" x2=\"91\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"91\" x2=\"156\" y2=\"91\" stroke=\"#d0d0d0\"/><line x1=\"104\" y1=\"0\" x2=\"104\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"104\" x2=\"156\" y2=\"104\" stroke=\"#d0d0d0\"/><line x1=\"117\" y1=\"0\" x2=\"117\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"117\" x2=\"156\" y2=\"117\" stroke=\"#d0d0d0\"/><line x1=\"130\" y1=\"0\" x2=\"130\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"130\" x2=\"156\" y2=\"130\" stroke=\"#d0d0d0\"/><line x1=\"143\" y1=\"0\" x2=\"143\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"143\" x2=\"156\" y2=\"143\" stroke=\"#d0d0d0\"/><line x1=\"156\" y1=\"0\" x2=\"156\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"156\" x2=\"156\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"78\" x2=\"156\" y2=\"78\" stroke=\"#000\" stroke-width=\"1.3\"/><line x1=\"78\" y1=\"0\" x2=\"78\" y2=\"156\" stroke=\"#000\" stroke-width=\"1.3\"/><text x=\"13\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-5</text><text x=\"26\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-4</text><text x=\"39\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-3</text><text x=\"52\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-2</text><text x=\"65\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-1</text><text x=\"91\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">1</text><text x=\"104\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">2</text><text x=\"117\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">3</text><text x=\"130\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">4</text><text x=\"143\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">5</text><text x=\"75\" y=\"146\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-5</text><text x=\"75\" y=\"133\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-4</text><text x=\"75\" y=\"120\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-3</text><text x=\"75\" y=\"107\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-2</text><text x=\"75\" y=\"94\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-1</text><text x=\"75\" y=\"68\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">1</text><text x=\"75\" y=\"55\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">2</text><text x=\"75\" y=\"42\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">3</text><text x=\"75\" y=\"29\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">4</text><text x=\"75\" y=\"16\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">5</text><polyline points=\"83.8,2.5 84.5,6.5 85.2,10.3 85.8,14.0 86.5,17.6 87.1,21.1 87.8,24.4 88.4,27.6 89.0,30.6 89.7,33.5 90.4,36.3 91.0,39.0 91.7,41.5 92.3,43.9 93.0,46.2 93.6,48.4 94.2,50.4 94.9,52.3 95.6,54.0 96.2,55.6 96.9,57.1 97.5,58.5 98.2,59.7 98.8,60.8 99.5,61.8 100.1,62.7 100.8,63.4 101.4,64.0 102.1,64.4 102.7,64.7 103.4,64.9 104.0,65.0 104.7,64.9 105.3,64.7 106.0,64.4 106.6,64.0 107.2,63.4 107.9,62.7 108.5,61.8 109.2,60.8 109.8,59.7 110.5,58.5 111.1,57.1 111.8,55.6 112.4,54.0 113.1,52.3 113.7,50.4 114.4,48.4 115.0,46.2 115.7,43.9 116.3,41.5 117.0,39.0 117.6,36.3 118.3,33.5 118.9,30.6 119.6,27.6 120.2,24.4 120.9,21.1 121.5,17.6 122.2,14.0 122.8,10.3 123.5,6.5 124.1,2.5\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/></g></g><g transform=\"translate(185,0)\"><circle cx=\"9\" cy=\"9\" r=\"8\" fill=\"none\" stroke=\"#000\"/><text x=\"9\" y=\"13\" font-size=\"10\" text-anchor=\"middle\" font-family=\"sans-serif\">B</text><g transform=\"translate(20,14)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"0\" x2=\"156\" y2=\"0\" stroke=\"#d0d0d0\"/><line x1=\"13\" y1=\"0\" x2=\"13\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"13\" x2=\"156\" y2=\"13\" stroke=\"#d0d0d0\"/><line x1=\"26\" y1=\"0\" x2=\"26\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"26\" x2=\"156\" y2=\"26\" stroke=\"#d0d0d0\"/><line x1=\"39\" y1=\"0\" x2=\"39\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"39\" x2=\"156\" y2=\"39\" stroke=\"#d0d0d0\"/><line x1=\"52\" y1=\"0\" x2=\"52\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"52\" x2=\"156\" y2=\"52\" stroke=\"#d0d0d0\"/><line x1=\"65\" y1=\"0\" x2=\"65\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"65\" x2=\"156\" y2=\"65\" stroke=\"#d0d0d0\"/><line x1=\"78\" y1=\"0\" x2=\"78\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"78\" x2=\"156\" y2=\"78\" stroke=\"#d0d0d0\"/><line x1=\"91\" y1=\"0\" x2=\"91\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"91\" x2=\"156\" y2=\"91\" stroke=\"#d0d0d0\"/><line x1=\"104\" y1=\"0\" x2=\"104\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"104\" x2=\"156\" y2=\"104\" stroke=\"#d0d0d0\"/><line x1=\"117\" y1=\"0\" x2=\"117\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"117\" x2=\"156\" y2=\"117\" stroke=\"#d0d0d0\"/><line x1=\"130\" y1=\"0\" x2=\"130\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"130\" x2=\"156\" y2=\"130\" stroke=\"#d0d0d0\"/><line x1=\"143\" y1=\"0\" x2=\"143\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"143\" x2=\"156\" y2=\"143\" stroke=\"#d0d0d0\"/><line x1=\"156\" y1=\"0\" x2=\"156\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"156\" x2=\"156\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"78\" x2=\"156\" y2=\"78\" stroke=\"#000\" stroke-width=\"1.3\"/><line x1=\"78\" y1=\"0\" x2=\"78\" y2=\"156\" stroke=\"#000\" stroke-width=\"1.3\"/><text x=\"13\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-5</text><text x=\"26\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-4</text><text x=\"39\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-3</text><text x=\"52\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-2</text><text x=\"65\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-1</text><text x=\"91\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">1</text><text x=\"104\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">2</text><text x=\"117\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">3</text><text x=\"130\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">4</text><text x=\"143\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">5</text><text x=\"75\" y=\"146\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-5</text><text x=\"75\" y=\"133\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-4</text><text x=\"75\" y=\"120\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-3</text><text x=\"75\" y=\"107\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-2</text><text x=\"75\" y=\"94\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-1</text><text x=\"75\" y=\"68\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">1</text><text x=\"75\" y=\"55\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">2</text><text x=\"75\" y=\"42\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">3</text><text x=\"75\" y=\"29\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">4</text><text x=\"75\" y=\"16\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">5</text><polyline points=\"31.8,2.5 32.5,6.5 33.1,10.3 33.8,14.0 34.4,17.6 35.1,21.1 35.7,24.4 36.4,27.6 37.0,30.6 37.7,33.5 38.3,36.3 39.0,39.0 39.6,41.5 40.3,43.9 40.9,46.2 41.6,48.4 42.2,50.4 42.9,52.3 43.5,54.0 44.2,55.6 44.8,57.1 45.5,58.5 46.1,59.7 46.8,60.8 47.4,61.8 48.1,62.7 48.7,63.4 49.4,64.0 50.0,64.4 50.7,64.7 51.3,64.9 52.0,65.0 52.6,64.9 53.3,64.7 53.9,64.4 54.6,64.0 55.2,63.4 55.9,62.7 56.5,61.8 57.2,60.8 57.8,59.7 58.5,58.5 59.1,57.1 59.8,55.6 60.4,54.0 61.1,52.3 61.7,50.4 62.4,48.4 63.0,46.2 63.7,43.9 64.3,41.5 65.0,39.0 65.6,36.3 66.3,33.5 66.9,30.6 67.6,27.6 68.2,24.4 68.9,21.1 69.5,17.6 70.2,14.0 70.8,10.3 71.5,6.5 72.1,2.5\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/></g></g><g transform=\"translate(0,190)\"><circle cx=\"9\" cy=\"9\" r=\"8\" fill=\"none\" stroke=\"#000\"/><text x=\"9\" y=\"13\" font-size=\"10\" text-anchor=\"middle\" font-family=\"sans-serif\">C</text><g transform=\"translate(20,14)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"0\" x2=\"156\" y2=\"0\" stroke=\"#d0d0d0\"/><line x1=\"13\" y1=\"0\" x2=\"13\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"13\" x2=\"156\" y2=\"13\" stroke=\"#d0d0d0\"/><line x1=\"26\" y1=\"0\" x2=\"26\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"26\" x2=\"156\" y2=\"26\" stroke=\"#d0d0d0\"/><line x1=\"39\" y1=\"0\" x2=\"39\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"39\" x2=\"156\" y2=\"39\" stroke=\"#d0d0d0\"/><line x1=\"52\" y1=\"0\" x2=\"52\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"52\" x2=\"156\" y2=\"52\" stroke=\"#d0d0d0\"/><line x1=\"65\" y1=\"0\" x2=\"65\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"65\" x2=\"156\" y2=\"65\" stroke=\"#d0d0d0\"/><line x1=\"78\" y1=\"0\" x2=\"78\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"78\" x2=\"156\" y2=\"78\" stroke=\"#d0d0d0\"/><line x1=\"91\" y1=\"0\" x2=\"91\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"91\" x2=\"156\" y2=\"91\" stroke=\"#d0d0d0\"/><line x1=\"104\" y1=\"0\" x2=\"104\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"104\" x2=\"156\" y2=\"104\" stroke=\"#d0d0d0\"/><line x1=\"117\" y1=\"0\" x2=\"117\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"117\" x2=\"156\" y2=\"117\" stroke=\"#d0d0d0\"/><line x1=\"130\" y1=\"0\" x2=\"130\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"130\" x2=\"156\" y2=\"130\" stroke=\"#d0d0d0\"/><line x1=\"143\" y1=\"0\" x2=\"143\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"143\" x2=\"156\" y2=\"143\" stroke=\"#d0d0d0\"/><line x1=\"156\" y1=\"0\" x2=\"156\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"156\" x2=\"156\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"78\" x2=\"156\" y2=\"78\" stroke=\"#000\" stroke-width=\"1.3\"/><line x1=\"78\" y1=\"0\" x2=\"78\" y2=\"156\" stroke=\"#000\" stroke-width=\"1.3\"/><text x=\"13\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-5</text><text x=\"26\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-4</text><text x=\"39\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-3</text><text x=\"52\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-2</text><text x=\"65\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-1</text><text x=\"91\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">1</text><text x=\"104\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">2</text><text x=\"117\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">3</text><text x=\"130\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">4</text><text x=\"143\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">5</text><text x=\"75\" y=\"146\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-5</text><text x=\"75\" y=\"133\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-4</text><text x=\"75\" y=\"120\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-3</text><text x=\"75\" y=\"107\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-2</text><text x=\"75\" y=\"94\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-1</text><text x=\"75\" y=\"68\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">1</text><text x=\"75\" y=\"55\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">2</text><text x=\"75\" y=\"42\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">3</text><text x=\"75\" y=\"29\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">4</text><text x=\"75\" y=\"16\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">5</text><polyline points=\"27.9,2.0 28.6,6.8 29.2,11.4 29.9,15.9 30.5,20.2 31.2,24.4 31.8,28.5 32.5,32.5 33.1,36.3 33.8,40.0 34.4,43.6 35.1,47.1 35.7,50.4 36.4,53.6 37.0,56.6 37.7,59.5 38.3,62.3 39.0,65.0 39.6,67.5 40.3,69.9 40.9,72.2 41.6,74.4 42.2,76.4 42.9,78.3 43.5,80.0 44.2,81.6 44.8,83.1 45.5,84.5 46.1,85.7 46.8,86.8 47.4,87.8 48.1,88.7 48.7,89.4 49.4,90.0 50.0,90.4 50.7,90.7 51.3,90.9 52.0,91.0 52.6,90.9 53.3,90.7 53.9,90.4 54.6,90.0 55.2,89.4 55.9,88.7 56.5,87.8 57.2,86.8 57.8,85.7 58.5,84.5 59.1,83.1 59.8,81.6 60.4,80.0 61.1,78.3 61.7,76.4 62.4,74.4 63.0,72.2 63.7,69.9 64.3,67.5 65.0,65.0 65.6,62.3 66.3,59.5 66.9,56.6 67.6,53.6 68.2,50.4 68.9,47.1 69.5,43.6 70.2,40.0 70.8,36.3 71.5,32.5 72.1,28.5 72.8,24.4 73.4,20.2 74.1,15.9 74.7,11.4 75.4,6.8 76.0,2.0\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/></g></g><g transform=\"translate(185,190)\"><circle cx=\"9\" cy=\"9\" r=\"8\" fill=\"none\" stroke=\"#000\"/><text x=\"9\" y=\"13\" font-size=\"10\" text-anchor=\"middle\" font-family=\"sans-serif\">D</text><g transform=\"translate(20,14)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"0\" x2=\"156\" y2=\"0\" stroke=\"#d0d0d0\"/><line x1=\"13\" y1=\"0\" x2=\"13\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"13\" x2=\"156\" y2=\"13\" stroke=\"#d0d0d0\"/><line x1=\"26\" y1=\"0\" x2=\"26\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"26\" x2=\"156\" y2=\"26\" stroke=\"#d0d0d0\"/><line x1=\"39\" y1=\"0\" x2=\"39\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"39\" x2=\"156\" y2=\"39\" stroke=\"#d0d0d0\"/><line x1=\"52\" y1=\"0\" x2=\"52\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"52\" x2=\"156\" y2=\"52\" stroke=\"#d0d0d0\"/><line x1=\"65\" y1=\"0\" x2=\"65\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"65\" x2=\"156\" y2=\"65\" stroke=\"#d0d0d0\"/><line x1=\"78\" y1=\"0\" x2=\"78\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"78\" x2=\"156\" y2=\"78\" stroke=\"#d0d0d0\"/><line x1=\"91\" y1=\"0\" x2=\"91\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"91\" x2=\"156\" y2=\"91\" stroke=\"#d0d0d0\"/><line x1=\"104\" y1=\"0\" x2=\"104\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"104\" x2=\"156\" y2=\"104\" stroke=\"#d0d0d0\"/><line x1=\"117\" y1=\"0\" x2=\"117\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"117\" x2=\"156\" y2=\"117\" stroke=\"#d0d0d0\"/><line x1=\"130\" y1=\"0\" x2=\"130\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"130\" x2=\"156\" y2=\"130\" stroke=\"#d0d0d0\"/><line x1=\"143\" y1=\"0\" x2=\"143\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"143\" x2=\"156\" y2=\"143\" stroke=\"#d0d0d0\"/><line x1=\"156\" y1=\"0\" x2=\"156\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"156\" x2=\"156\" y2=\"156\" stroke=\"#d0d0d0\"/><line x1=\"0\" y1=\"78\" x2=\"156\" y2=\"78\" stroke=\"#000\" stroke-width=\"1.3\"/><line x1=\"78\" y1=\"0\" x2=\"78\" y2=\"156\" stroke=\"#000\" stroke-width=\"1.3\"/><text x=\"13\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-5</text><text x=\"26\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-4</text><text x=\"39\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-3</text><text x=\"52\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-2</text><text x=\"65\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">-1</text><text x=\"91\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">1</text><text x=\"104\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">2</text><text x=\"117\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">3</text><text x=\"130\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">4</text><text x=\"143\" y=\"89\" font-size=\"7\" text-anchor=\"middle\" font-family=\"sans-serif\">5</text><text x=\"75\" y=\"146\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-5</text><text x=\"75\" y=\"133\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-4</text><text x=\"75\" y=\"120\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-3</text><text x=\"75\" y=\"107\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-2</text><text x=\"75\" y=\"94\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">-1</text><text x=\"75\" y=\"68\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">1</text><text x=\"75\" y=\"55\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">2</text><text x=\"75\" y=\"42\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">3</text><text x=\"75\" y=\"29\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">4</text><text x=\"75\" y=\"16\" font-size=\"7\" text-anchor=\"end\" font-family=\"sans-serif\">5</text><polyline points=\"80.0,2.0 80.6,6.8 81.2,11.4 81.9,15.9 82.5,20.2 83.2,24.4 83.8,28.5 84.5,32.5 85.2,36.3 85.8,40.0 86.5,43.6 87.1,47.1 87.8,50.4 88.4,53.6 89.0,56.6 89.7,59.5 90.4,62.3 91.0,65.0 91.7,67.5 92.3,69.9 93.0,72.2 93.6,74.4 94.2,76.4 94.9,78.3 95.6,80.0 96.2,81.6 96.9,83.1 97.5,84.5 98.2,85.7 98.8,86.8 99.5,87.8 100.1,88.7 100.8,89.4 101.4,90.0 102.1,90.4 102.7,90.7 103.4,90.9 104.0,91.0 104.7,90.9 105.3,90.7 106.0,90.4 106.6,90.0 107.2,89.4 107.9,88.7 108.5,87.8 109.2,86.8 109.8,85.7 110.5,84.5 111.1,83.1 111.8,81.6 112.4,80.0 113.1,78.3 113.7,76.4 114.4,74.4 115.0,72.2 115.7,69.9 116.3,67.5 117.0,65.0 117.6,62.3 118.3,59.5 118.9,56.6 119.6,53.6 120.2,50.4 120.9,47.1 121.5,43.6 122.2,40.0 122.8,36.3 123.5,32.5 124.1,28.5 124.8,24.4 125.4,20.2 126.1,15.9 126.7,11.4 127.4,6.8 128.0,2.0\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/></g></g></svg>"
  }
];
