import { Question } from '../../types';

export const EST1_2026_MAY_NEW_SET: Question[] = [
  {
    id: 1,
    question: "If $2x + 3y = 9a$ and $-3x + 11 = 20$, then $3a - y =$",
    options: ["$-2$", "$2$", "$3$", "$6$"],
    correctAnswer: 0,
    explanation: "From $-3x + 11 = 20$, we have $-3x = 9 \\implies x = -3$.\nSubstitute $x = -3$ into $2x + 3y = 9a$:\n$$2(-3) + 3y = 9a \\implies -6 + 3y = 9a$$\nRearranging gives:\n$$9a - 3y = -6$$\nDivide by $3$:\n$$3a - y = -2$$\nThus, the correct value is $-2$.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 2,
    question: "Ghassan took three Chemistry tests in Term 1 and achieved an average score of $88$ out of $100$. In Term 2, he took two Chemistry tests, scoring $90$ and $88$. In Term 3, he will take one final Chemistry test. If all tests carry equal weight, what is the minimum score Ghassan must obtain so that his overall average is greater than or equal to $90$?",
    options: ["$95$", "$96$", "$98$", "$99$"],
    correctAnswer: 2,
    explanation: "Total number of tests across all three terms is $3 + 2 + 1 = 6$.\nTo have an overall average of at least $90$, the total sum of the $6$ scores must be at least:\n$$6 \\times 90 = 540$$\nCurrent sum of scores from Term 1 and Term 2:\n$$\\text{Term 1} = 3 \\times 88 = 264$$\n$$\\text{Term 2} = 90 + 88 = 178$$\n$$\\text{Current Total} = 264 + 178 = 442$$\nLet $x$ be the score on the final test:\n$$442 + x \\ge 540 \\implies x \\ge 540 - 442 = 98$$\nTherefore, the minimum score required is $98$.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 3,
    question: "Which of the following is the greatest integer that satisfies the solution set of $|x + 5| > 5x$?",
    options: ["$2$", "$1$", "$-1$", "$-6$"],
    correctAnswer: 1,
    explanation: "We test the given integer values starting with the largest:\n- For $x = 2$: $|2 + 5| = 7$, and $5(2) = 10$. Is $7 > 10$? False.\n- For $x = 1$: $|1 + 5| = 6$, and $5(1) = 5$. Is $6 > 5$? True!\nHence, $x = 1$ satisfies the inequality and is the greatest integer among the choices.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 4,
    question: "Given the equation $y = a(x - 1)(x + 4)$, the vertex of the graph of the equation is $(m, 12.5)$. The value of $m$ is:",
    options: ["$-2.0$", "$-1.5$", "$-0.5$", "$0.5$"],
    correctAnswer: 1,
    explanation: "The $x$-intercepts of the parabola $y = a(x - 1)(x + 4)$ are $x = 1$ and $x = -4$.\nBecause a parabola is symmetric about its axis of symmetry, the $x$-coordinate of the vertex, $m$, is the midpoint between the two roots:\n$$m = \\frac{1 + (-4)}{2} = \\frac{-3}{2} = -1.5$$\nThus, $m = -1.5$.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 5,
    question: "Given two functions $f$ and $g$ defined by $f(x) = 3x + 1$ and $g(x) = \\frac{2x^2 - 3}{6x + 2}$, where $x \\ge 0$, what is the solution of $(f \\times g)(x) = \\frac{1}{2}$?",
    options: ["$x = \\sqrt{2}$", "$x = \\sqrt{3}$", "$x = 2$", "$x = \\sqrt{5}$"],
    correctAnswer: 0,
    explanation: "Notice that the denominator of $g(x)$ factors as $6x + 2 = 2(3x + 1)$.\nTherefore:\n$$(f \\times g)(x) = (3x + 1) \\times \\frac{2x^2 - 3}{2(3x + 1)} = \\frac{2x^2 - 3}{2}$$\nSetting this equal to $\\frac{1}{2}$:\n$$\\frac{2x^2 - 3}{2} = \\frac{1}{2} \\implies 2x^2 - 3 = 1 \\implies 2x^2 = 4 \\implies x^2 = 2$$\nSince $x \\ge 0$, we take the positive square root:\n$$x = \\sqrt{2}$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 6,
    question: "A box contains $11$ marbles: $3$ blue, $4$ red, and the rest are yellow. Two marbles are drawn at random without replacement. Given that at least one of the drawn marbles is yellow, what is the probability that both drawn marbles are yellow?",
    options: ["$\\frac{3}{55}$", "$\\frac{6}{55}$", "$\\frac{3}{17}$", "$\\frac{2}{7}$"],
    correctAnswer: 2,
    explanation: "The number of yellow marbles is $11 - (3 + 4) = 4$.\nTotal ways to choose $2$ marbles from $11$ is $\\binom{11}{2} = \\frac{11 \\times 10}{2} = 55$.\nThe number of ways to choose $2$ non-yellow marbles (from the $7$ blue and red marbles) is $\\binom{7}{2} = 21$.\nThus, the number of outcomes with at least one yellow marble is $55 - 21 = 34$.\nThe number of ways both drawn marbles are yellow is $\\binom{4}{2} = 6$.\nTherefore, the conditional probability is:\n$$P(\\text{both yellow} \\mid \\text{at least one yellow}) = \\frac{6}{34} = \\frac{3}{17}$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 7,
    question: "Given a function $f$ defined by $f(x) = \\frac{2x + 5}{3x - 6}$, which of the following statements is/are true about the graph of $f$?\n\nI. It has a vertical asymptote at $x = 2$.\nII. It has an oblique asymptote at $y = \\frac{2}{3}x$.\nIII. It does not have a horizontal asymptote.",
    options: ["I only", "III only", "I and III only", "I, II, and III"],
    correctAnswer: 0,
    explanation: "- **Vertical asymptote:** The denominator is zero when $3x - 6 = 0 \\implies x = 2$. Since the numerator at $x = 2$ is $2(2) + 5 = 9 \\ne 0$, $x = 2$ is a vertical asymptote (Statement I is true).\n- **Horizontal asymptote:** Since the degrees of numerator and denominator are both $1$, the horizontal asymptote is $y = \\frac{2}{3}$ (Statement III is false).\n- **Oblique asymptote:** An oblique asymptote only exists when the degree of the numerator is $1$ greater than the denominator (Statement II is false).\nThus, only Statement I is true.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 8,
    question: "If $f(x) = 3x^2 - 4x + 1$, $g(x) = 3x + 4$, and $h(x) = x^2 + \\frac{2}{3}x$, what is the value of $(f + g)(h(3))$?",
    options: ["$320$", "$333$", "$340$", "$357$"],
    correctAnswer: 3,
    explanation: "First, evaluate $h(3)$:\n$$h(3) = 3^2 + \\frac{2}{3}(3) = 9 + 2 = 11$$\nNext, find $(f + g)(x)$:\n$$(f + g)(x) = (3x^2 - 4x + 1) + (3x + 4) = 3x^2 - x + 5$$\nNow substitute $x = 11$:\n$$(f + g)(11) = 3(11^2) - 11 + 5 = 3(121) - 6 = 363 - 6 = 357$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 9,
    svg: "<svg viewBox=\"0 0 580 380\" class=\"w-full max-w-xl mx-auto my-3 bg-white border border-gray-200 rounded-lg p-3 shadow-sm font-sans\" xmlns=\"http://www.w3.org/2000/svg\">\n<text x=\"290.0\" y=\"18\" font-size=\"13\" font-weight=\"bold\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#111827\">Questions 9 and 10 refer to the information below:</text>\n<line x1=\"30\" y1=\"24\" x2=\"550\" y2=\"24\" stroke=\"#9ca3af\" stroke-width=\"1.2\" />\n<line x1=\"30\" y1=\"27\" x2=\"550\" y2=\"27\" stroke=\"#9ca3af\" stroke-width=\"1.2\" />\n<line x1=\"80.0\" y1=\"315.0\" x2=\"80.0\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"141.4\" y1=\"315.0\" x2=\"141.4\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"202.9\" y1=\"315.0\" x2=\"202.9\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"264.3\" y1=\"315.0\" x2=\"264.3\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"325.7\" y1=\"315.0\" x2=\"325.7\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"387.1\" y1=\"315.0\" x2=\"387.1\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"448.6\" y1=\"315.0\" x2=\"448.6\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"510.0\" y1=\"315.0\" x2=\"510.0\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"80.0\" y1=\"315.0\" x2=\"525.0\" y2=\"315.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"80.0\" y1=\"250.0\" x2=\"525.0\" y2=\"250.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"80.0\" y1=\"185.0\" x2=\"525.0\" y2=\"185.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"80.0\" y1=\"120.0\" x2=\"525.0\" y2=\"120.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"80.0\" y1=\"55.0\" x2=\"525.0\" y2=\"55.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<defs>\n  <marker id=\"arr-q9\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#1f2937\" />\n  </marker>\n</defs>\n<line x1=\"58.0\" y1=\"315.0\" x2=\"540.0\" y2=\"315.0\" stroke=\"#1f2937\" stroke-width=\"1.75\" marker-end=\"url(#arr-q9)\" />\n<line x1=\"80.0\" y1=\"335.0\" x2=\"80.0\" y2=\"33.0\" stroke=\"#1f2937\" stroke-width=\"1.75\" marker-end=\"url(#arr-q9)\" />\n<line x1=\"65.0\" y1=\"309.0\" x2=\"71.0\" y2=\"321.0\" stroke=\"#1f2937\" stroke-width=\"2\" />\n<line x1=\"69.0\" y1=\"309.0\" x2=\"75.0\" y2=\"321.0\" stroke=\"#1f2937\" stroke-width=\"2\" />\n<line x1=\"74.0\" y1=\"322.0\" x2=\"86.0\" y2=\"328.0\" stroke=\"#1f2937\" stroke-width=\"2\" />\n<line x1=\"74.0\" y1=\"326.0\" x2=\"86.0\" y2=\"332.0\" stroke=\"#1f2937\" stroke-width=\"2\" />\n<line x1=\"80.0\" y1=\"315.0\" x2=\"80.0\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"80.0\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">2</text>\n<line x1=\"141.4\" y1=\"315.0\" x2=\"141.4\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"141.4\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">3</text>\n<line x1=\"202.9\" y1=\"315.0\" x2=\"202.9\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"202.9\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">4</text>\n<line x1=\"264.3\" y1=\"315.0\" x2=\"264.3\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"264.3\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">5</text>\n<line x1=\"325.7\" y1=\"315.0\" x2=\"325.7\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"325.7\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">6</text>\n<line x1=\"387.1\" y1=\"315.0\" x2=\"387.1\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"387.1\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">7</text>\n<line x1=\"448.6\" y1=\"315.0\" x2=\"448.6\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"448.6\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">8</text>\n<line x1=\"510.0\" y1=\"315.0\" x2=\"510.0\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"510.0\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">9</text>\n<line x1=\"75.0\" y1=\"315.0\" x2=\"80.0\" y2=\"315.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"70.0\" y=\"319.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">4</text>\n<line x1=\"75.0\" y1=\"250.0\" x2=\"80.0\" y2=\"250.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"70.0\" y=\"254.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">5</text>\n<line x1=\"75.0\" y1=\"185.0\" x2=\"80.0\" y2=\"185.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"70.0\" y=\"189.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">6</text>\n<line x1=\"75.0\" y1=\"120.0\" x2=\"80.0\" y2=\"120.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"70.0\" y=\"124.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">7</text>\n<line x1=\"75.0\" y1=\"55.0\" x2=\"80.0\" y2=\"55.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"70.0\" y=\"59.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">8</text>\n<text x=\"295.0\" y=\"353.0\" font-size=\"13\" font-family=\"serif\" text-anchor=\"middle\" fill=\"#111827\">Radius <tspan font-style=\"italic\">(cm)</tspan></text>\n<text x=\"44.0\" y=\"185.0\" font-size=\"13\" font-family=\"serif\" text-anchor=\"middle\" fill=\"#111827\" transform=\"rotate(-90 44.0 185.0)\">Height <tspan font-style=\"italic\">(cm)</tspan></text>\n<circle cx=\"110.7\" cy=\"250.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"141.4\" cy=\"217.5\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"141.4\" cy=\"120.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"172.1\" cy=\"120.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"202.9\" cy=\"185.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"202.9\" cy=\"152.5\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"264.3\" cy=\"315.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"264.3\" cy=\"120.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"295.0\" cy=\"250.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"325.7\" cy=\"217.5\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"325.7\" cy=\"120.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"356.4\" cy=\"217.5\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"356.4\" cy=\"120.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"387.1\" cy=\"185.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"417.9\" cy=\"120.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"448.6\" cy=\"55.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"479.3\" cy=\"87.5\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"510.0\" cy=\"185.0\" r=\"4\" fill=\"#6b7280\" />\n<line x1=\"80.0\" y1=\"215.0\" x2=\"522.3\" y2=\"125.3\" stroke=\"#4b5563\" stroke-width=\"2\" />\n</svg>",
    question: "Questions 9 and 10 refer to the information below:\n\nA group of students sketched several cylindrical shapes with varying radii and heights, as shown in the scatterplot above. A line of best fit is displayed.\n\nWhich of the following equations represents the line of best fit shown above?",
    options: ["$y = 0.1915x + 5.1561$", "$y = 0.20x - 5.10$", "$y = 0.20x + 2.10$", "$y = 5.1561x + 0.1915$"],
    correctAnswer: 0,
    explanation: "From the scatterplot:\n- The line of best fit has a positive slope and rises gently as radius increases from $2\\text{ cm}$ to $9\\text{ cm}$.\n- At $x = 2$, $y \\approx 5.54$. At $x = 9$, $y \\approx 6.88$.\n- The slope $m \\approx \\frac{6.88 - 5.54}{9 - 2} = \\frac{1.34}{7} \\approx 0.1915$.\n- The $y$-intercept when extending back to $x = 0$ is around $5.16$.\n- Thus, the equation is $y = 0.1915x + 5.1561$.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 10,
    svg: "<svg viewBox=\"0 0 580 380\" class=\"w-full max-w-xl mx-auto my-3 bg-white border border-gray-200 rounded-lg p-3 shadow-sm font-sans\" xmlns=\"http://www.w3.org/2000/svg\">\n<text x=\"290.0\" y=\"18\" font-size=\"13\" font-weight=\"bold\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#111827\">Questions 9 and 10 refer to the information below:</text>\n<line x1=\"30\" y1=\"24\" x2=\"550\" y2=\"24\" stroke=\"#9ca3af\" stroke-width=\"1.2\" />\n<line x1=\"30\" y1=\"27\" x2=\"550\" y2=\"27\" stroke=\"#9ca3af\" stroke-width=\"1.2\" />\n<line x1=\"80.0\" y1=\"315.0\" x2=\"80.0\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"141.4\" y1=\"315.0\" x2=\"141.4\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"202.9\" y1=\"315.0\" x2=\"202.9\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"264.3\" y1=\"315.0\" x2=\"264.3\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"325.7\" y1=\"315.0\" x2=\"325.7\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"387.1\" y1=\"315.0\" x2=\"387.1\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"448.6\" y1=\"315.0\" x2=\"448.6\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"510.0\" y1=\"315.0\" x2=\"510.0\" y2=\"45.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"80.0\" y1=\"315.0\" x2=\"525.0\" y2=\"315.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"80.0\" y1=\"250.0\" x2=\"525.0\" y2=\"250.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"80.0\" y1=\"185.0\" x2=\"525.0\" y2=\"185.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"80.0\" y1=\"120.0\" x2=\"525.0\" y2=\"120.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"80.0\" y1=\"55.0\" x2=\"525.0\" y2=\"55.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<defs>\n  <marker id=\"arr-q9\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#1f2937\" />\n  </marker>\n</defs>\n<line x1=\"58.0\" y1=\"315.0\" x2=\"540.0\" y2=\"315.0\" stroke=\"#1f2937\" stroke-width=\"1.75\" marker-end=\"url(#arr-q9)\" />\n<line x1=\"80.0\" y1=\"335.0\" x2=\"80.0\" y2=\"33.0\" stroke=\"#1f2937\" stroke-width=\"1.75\" marker-end=\"url(#arr-q9)\" />\n<line x1=\"65.0\" y1=\"309.0\" x2=\"71.0\" y2=\"321.0\" stroke=\"#1f2937\" stroke-width=\"2\" />\n<line x1=\"69.0\" y1=\"309.0\" x2=\"75.0\" y2=\"321.0\" stroke=\"#1f2937\" stroke-width=\"2\" />\n<line x1=\"74.0\" y1=\"322.0\" x2=\"86.0\" y2=\"328.0\" stroke=\"#1f2937\" stroke-width=\"2\" />\n<line x1=\"74.0\" y1=\"326.0\" x2=\"86.0\" y2=\"332.0\" stroke=\"#1f2937\" stroke-width=\"2\" />\n<line x1=\"80.0\" y1=\"315.0\" x2=\"80.0\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"80.0\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">2</text>\n<line x1=\"141.4\" y1=\"315.0\" x2=\"141.4\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"141.4\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">3</text>\n<line x1=\"202.9\" y1=\"315.0\" x2=\"202.9\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"202.9\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">4</text>\n<line x1=\"264.3\" y1=\"315.0\" x2=\"264.3\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"264.3\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">5</text>\n<line x1=\"325.7\" y1=\"315.0\" x2=\"325.7\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"325.7\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">6</text>\n<line x1=\"387.1\" y1=\"315.0\" x2=\"387.1\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"387.1\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">7</text>\n<line x1=\"448.6\" y1=\"315.0\" x2=\"448.6\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"448.6\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">8</text>\n<line x1=\"510.0\" y1=\"315.0\" x2=\"510.0\" y2=\"320.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"510.0\" y=\"333.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">9</text>\n<line x1=\"75.0\" y1=\"315.0\" x2=\"80.0\" y2=\"315.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"70.0\" y=\"319.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">4</text>\n<line x1=\"75.0\" y1=\"250.0\" x2=\"80.0\" y2=\"250.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"70.0\" y=\"254.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">5</text>\n<line x1=\"75.0\" y1=\"185.0\" x2=\"80.0\" y2=\"185.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"70.0\" y=\"189.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">6</text>\n<line x1=\"75.0\" y1=\"120.0\" x2=\"80.0\" y2=\"120.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"70.0\" y=\"124.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">7</text>\n<line x1=\"75.0\" y1=\"55.0\" x2=\"80.0\" y2=\"55.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" />\n<text x=\"70.0\" y=\"59.0\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">8</text>\n<text x=\"295.0\" y=\"353.0\" font-size=\"13\" font-family=\"serif\" text-anchor=\"middle\" fill=\"#111827\">Radius <tspan font-style=\"italic\">(cm)</tspan></text>\n<text x=\"44.0\" y=\"185.0\" font-size=\"13\" font-family=\"serif\" text-anchor=\"middle\" fill=\"#111827\" transform=\"rotate(-90 44.0 185.0)\">Height <tspan font-style=\"italic\">(cm)</tspan></text>\n<circle cx=\"110.7\" cy=\"250.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"141.4\" cy=\"217.5\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"141.4\" cy=\"120.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"172.1\" cy=\"120.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"202.9\" cy=\"185.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"202.9\" cy=\"152.5\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"264.3\" cy=\"315.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"264.3\" cy=\"120.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"295.0\" cy=\"250.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"325.7\" cy=\"217.5\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"325.7\" cy=\"120.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"356.4\" cy=\"217.5\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"356.4\" cy=\"120.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"387.1\" cy=\"185.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"417.9\" cy=\"120.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"448.6\" cy=\"55.0\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"479.3\" cy=\"87.5\" r=\"4\" fill=\"#6b7280\" />\n<circle cx=\"510.0\" cy=\"185.0\" r=\"4\" fill=\"#6b7280\" />\n<line x1=\"80.0\" y1=\"215.0\" x2=\"522.3\" y2=\"125.3\" stroke=\"#4b5563\" stroke-width=\"2\" />\n</svg>",
    question: "Questions 9 and 10 refer to the information below:\n\nA group of students sketched several cylindrical shapes with varying radii and heights, as shown in the scatterplot above. A line of best fit is displayed.\n\nAnother student decided to sketch a cylinder with a radius of $11\\text{ cm}$, following the line of best fit shown. What would be the corresponding height of the cylinder?",
    options: ["$56.9\\text{ cm}$", "$7.26\\text{ cm}$", "$4.30\\text{ cm}$", "$2.90\\text{ cm}$"],
    correctAnswer: 1,
    explanation: "Using the line of best fit equation $y = 0.1915x + 5.1561$ with radius $x = 11\\text{ cm}$:\n$$y = 0.1915(11) + 5.1561 = 2.1065 + 5.1561 = 7.2626\\text{ cm} \\approx 7.26\\text{ cm}$$\nTherefore, the corresponding height is approximately $7.26\\text{ cm}$.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 11,
    question: "$378$ is $18\\%$ of:",
    options: ["$1,800$", "$1,950$", "$2,100$", "$2,250$"],
    correctAnswer: 2,
    explanation: "Let the unknown number be $x$.\n$$0.18x = 378 \\implies x = \\frac{378}{0.18} = 2,100$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 12,
    question: "Given the system of equations:\n$$\\begin{cases} 3x - y = 15 \\\\ 6x + 2y = 18 \\end{cases}$$\nThe solution of the system can be represented by the pair $(a, b)$, where $a$ and $b$ are two real numbers. What is the value of $b$?",
    options: ["$-4$", "$-3$", "$3$", "$4$"],
    correctAnswer: 1,
    explanation: "From the first equation, express $y$ in terms of $x$:\n$$y = 3x - 15$$\nSubstitute into the second equation:\n$$6x + 2(3x - 15) = 18 \\implies 6x + 6x - 30 = 18 \\implies 12x = 48 \\implies x = 4$$\nNow find $y$:\n$$y = 3(4) - 15 = 12 - 15 = -3$$\nSince the solution pair is $(a, b)$, we have $b = y = -3$.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 13,
    question: "Given a function $f$ defined by $f(x) = -5x^4 + 3x^3$, which of the following statements is/are true about the graph of $f$?\n\nI. As $x$ approaches $-\\infty$, $f(x)$ approaches $+\\infty$.\nII. $(\\frac{3}{5}, 0)$ is an $x$-intercept.\nIII. The function $f$ is decreasing on $(-\\infty, \\frac{9}{20})$.",
    options: ["I only", "II only", "I and II", "II and III"],
    correctAnswer: 1,
    explanation: "- **Statement I:** The leading term is $-5x^4$. As $x \\to -\\infty$, $x^4 \\to +\\infty$, so $-5x^4 \\to -\\infty$. Thus $f(x) \\to -\\infty$ (Statement I is false).\n- **Statement II:** Setting $f(x) = 0 \\implies x^3(-5x + 3) = 0 \\implies x = 0$ or $x = \\frac{3}{5}$. Thus $(\\frac{3}{5}, 0)$ is an $x$-intercept (Statement II is true).\n- **Statement III:** The derivative is $f'(x) = -20x^3 + 9x^2 = x^2(9 - 20x)$. For $x < \\frac{9}{20}$ (with $x \\ne 0$), $9 - 20x > 0$ and $x^2 > 0$, so $f'(x) > 0$. That means $f$ is increasing, not decreasing (Statement III is false).\nTherefore, only Statement II is true.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 14,
    svg: "<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Score $n$</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Number of Students</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$0 \\le n < 10$</td><td class=\"border border-gray-400 px-2 py-1\">7</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$10 \\le n < 14$</td><td class=\"border border-gray-400 px-2 py-1\">13</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$14 \\le n < 17$</td><td class=\"border border-gray-400 px-2 py-1\">11</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$17 \\le n \\le 20$</td><td class=\"border border-gray-400 px-2 py-1\">5</td></tr>\n  </tbody>\n</table>",
    question: "Questions 14 \u2013 16 refer to the information below:\n\nA group of students at a learning center took a literature exam, and the scores were given out of $20$, with a passing score of $10$. The scores are summarized in the table above.\n\nWhich of the following statements is true about the data collected?",
    options: ["The majority scored between 17 and 20.", "The majority passed the literature exam.", "Less than 15% of the students failed the literature exam.", "As the scores are increasing, the number of students is decreasing."],
    correctAnswer: 1,
    explanation: "Total number of students is $7 + 13 + 11 + 5 = 36$.\nThe passing score is $10$. The students who passed are those with $n \\ge 10$:\n$$\\text{Passed} = 13 + 11 + 5 = 29$$\nPercentage passed:\n$$\\frac{29}{36} \\approx 80.6\\%$$\nSince $80.6\\% > 50\\%$, the majority passed the exam.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 15,
    svg: "<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Score $n$</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Number of Students</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$0 \\le n < 10$</td><td class=\"border border-gray-400 px-2 py-1\">7</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$10 \\le n < 14$</td><td class=\"border border-gray-400 px-2 py-1\">13</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$14 \\le n < 17$</td><td class=\"border border-gray-400 px-2 py-1\">11</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$17 \\le n \\le 20$</td><td class=\"border border-gray-400 px-2 py-1\">5</td></tr>\n  </tbody>\n</table>",
    question: "Questions 14 \u2013 16 refer to the information below:\n\nA group of students at a learning center took a literature exam, and the scores were given out of $20$, with a passing score of $10$. The scores are summarized in the table above.\n\nThe teacher bought chocolate bars for each student who scored $14$ or more on this exam. If each chocolate bar costs $\\$3.11$, how much did the teacher pay?",
    options: ["\\$15.55", "\\$34.21", "\\$40.87", "\\$49.76"],
    correctAnswer: 3,
    explanation: "Students scoring $14$ or more belong to the intervals $14 \\le n < 17$ ($11$ students) and $17 \\le n \\le 20$ ($5$ students).\nTotal eligible students:\n$$11 + 5 = 16$$\nTotal cost:\n$$16 \\times \\$3.11 = \\$49.76$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 16,
    svg: "<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Score $n$</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Number of Students</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$0 \\le n < 10$</td><td class=\"border border-gray-400 px-2 py-1\">7</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$10 \\le n < 14$</td><td class=\"border border-gray-400 px-2 py-1\">13</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$14 \\le n < 17$</td><td class=\"border border-gray-400 px-2 py-1\">11</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$17 \\le n \\le 20$</td><td class=\"border border-gray-400 px-2 py-1\">5</td></tr>\n  </tbody>\n</table>",
    question: "Questions 14 \u2013 16 refer to the information below:\n\nA group of students at a learning center took a literature exam, and the scores were given out of $20$, with a passing score of $10$. The scores are summarized in the table above.\n\nThe mean of the data is found by multiplying the midpoint of each class by its frequency, adding these products, then dividing the total by the sum of the frequencies. What is the mean of the scores recorded?",
    options: ["$11.78$", "$12.61$", "$12.81$", "$13.05$"],
    correctAnswer: 1,
    explanation: "Calculate the midpoint of each class interval:\n- $0 \\le n < 10$: midpoint $= 5$, frequency $= 7 \\implies 5 \\times 7 = 35$\n- $10 \\le n < 14$: midpoint $= 12$, frequency $= 13 \\implies 12 \\times 13 = 156$\n- $14 \\le n < 17$: midpoint $= 15.5$, frequency $= 11 \\implies 15.5 \\times 11 = 170.5$\n- $17 \\le n \\le 20$: midpoint $= 18.5$, frequency $= 5 \\implies 18.5 \\times 5 = 92.5$\nSum of products:\n$$35 + 156 + 170.5 + 92.5 = 454$$\nTotal frequency $= 36$.\n$$\\text{Mean} = \\frac{454}{36} \\approx 12.61$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 17,
    question: "$x$ and $y$ are two even natural numbers. Which of the following can be an odd integer less than $x$?",
    options: ["$\\frac{x+y}{2}$", "$2x - y$", "$x + \\frac{y}{2}$", "$x + y$"],
    correctAnswer: 0,
    explanation: "Let $x = 6$ and $y = 4$ (both are even natural numbers):\n- $\\frac{x+y}{2} = \\frac{6+4}{2} = 5$, which is an odd integer, and $5 < 6 = x$.\n- $2x - y$ is always even (even minus even is even).\n- $x + \\frac{y}{2} > x$ for all natural numbers $y$.\n- $x + y$ is always even and greater than $x$.\nTherefore, only $\\frac{x+y}{2}$ can be an odd integer less than $x$.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 18,
    question: "If $3r + \\frac{x + r}{2} = 5(3y - r)$, what is $r$ in terms of $x$ and $y$?",
    options: ["$\\frac{30y - x}{17}$", "$\\frac{x - 30y}{17}$", "$\\frac{x}{17} + 30y$", "$\\frac{x + 30y}{17}$"],
    correctAnswer: 0,
    explanation: "Multiply the entire equation by $2$:\n$$6r + x + r = 10(3y - r)$$\n$$7r + x = 30y - 10r$$\nAdd $10r$ to both sides and subtract $x$:\n$$17r = 30y - x \\implies r = \\frac{30y - x}{17}$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 19,
    svg: "<svg viewBox=\"0 0 320 420\" class=\"w-full max-w-sm mx-auto my-3 bg-white border border-gray-200 rounded-lg p-2 shadow-sm font-sans\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs>\n  <marker id=\"arr19\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#1e293b\" />\n  </marker>\n</defs>\n<line x1=\"63.8\" y1=\"380.0\" x2=\"63.8\" y2=\"30.0\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"82.5\" y1=\"380.0\" x2=\"82.5\" y2=\"30.0\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"101.2\" y1=\"380.0\" x2=\"101.2\" y2=\"30.0\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"120.0\" y1=\"380.0\" x2=\"120.0\" y2=\"30.0\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"138.8\" y1=\"380.0\" x2=\"138.8\" y2=\"30.0\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"157.5\" y1=\"380.0\" x2=\"157.5\" y2=\"30.0\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"176.2\" y1=\"380.0\" x2=\"176.2\" y2=\"30.0\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"195.0\" y1=\"380.0\" x2=\"195.0\" y2=\"30.0\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"213.8\" y1=\"380.0\" x2=\"213.8\" y2=\"30.0\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"232.5\" y1=\"380.0\" x2=\"232.5\" y2=\"30.0\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"251.2\" y1=\"380.0\" x2=\"251.2\" y2=\"30.0\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"270.0\" y1=\"380.0\" x2=\"270.0\" y2=\"30.0\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"363.2\" x2=\"285.0\" y2=\"363.2\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"346.3\" x2=\"285.0\" y2=\"346.3\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"329.5\" x2=\"285.0\" y2=\"329.5\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"312.7\" x2=\"285.0\" y2=\"312.7\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"295.9\" x2=\"285.0\" y2=\"295.9\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"279.0\" x2=\"285.0\" y2=\"279.0\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"262.2\" x2=\"285.0\" y2=\"262.2\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"245.4\" x2=\"285.0\" y2=\"245.4\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"228.6\" x2=\"285.0\" y2=\"228.6\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"211.7\" x2=\"285.0\" y2=\"211.7\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"194.9\" x2=\"285.0\" y2=\"194.9\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"178.1\" x2=\"285.0\" y2=\"178.1\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"161.2\" x2=\"285.0\" y2=\"161.2\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"144.4\" x2=\"285.0\" y2=\"144.4\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"127.6\" x2=\"285.0\" y2=\"127.6\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"110.8\" x2=\"285.0\" y2=\"110.8\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"93.9\" x2=\"285.0\" y2=\"93.9\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"77.1\" x2=\"285.0\" y2=\"77.1\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"60.3\" x2=\"285.0\" y2=\"60.3\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"45.0\" y1=\"43.5\" x2=\"285.0\" y2=\"43.5\" stroke=\"#f1f5f9\" stroke-width=\"1\" />\n<line x1=\"37.0\" y1=\"272.3\" x2=\"297.0\" y2=\"272.3\" stroke=\"#1e293b\" stroke-width=\"1.75\" marker-end=\"url(#arr19)\" />\n<line x1=\"165.0\" y1=\"388.0\" x2=\"165.0\" y2=\"18.0\" stroke=\"#1e293b\" stroke-width=\"1.75\" marker-end=\"url(#arr19)\" />\n<text x=\"300.0\" y=\"276.3\" font-size=\"13\" font-style=\"italic\" font-family=\"serif\" fill=\"#1e293b\">x</text>\n<text x=\"159.0\" y=\"16.0\" font-size=\"13\" font-style=\"italic\" font-family=\"serif\" text-anchor=\"end\" fill=\"#1e293b\">y</text>\n<line x1=\"90.0\" y1=\"268.3\" x2=\"90.0\" y2=\"276.3\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n<text x=\"90.0\" y=\"288.3\" font-size=\"11\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1e293b\">-1</text>\n<line x1=\"240.0\" y1=\"268.3\" x2=\"240.0\" y2=\"276.3\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n<text x=\"240.0\" y=\"288.3\" font-size=\"11\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1e293b\">1</text>\n<line x1=\"161.0\" y1=\"339.6\" x2=\"169.0\" y2=\"339.6\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n<text x=\"158.0\" y=\"343.6\" font-size=\"11\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1e293b\">-1</text>\n<line x1=\"161.0\" y1=\"205.0\" x2=\"169.0\" y2=\"205.0\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n<text x=\"158.0\" y=\"209.0\" font-size=\"11\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1e293b\">1</text>\n<line x1=\"161.0\" y1=\"137.7\" x2=\"169.0\" y2=\"137.7\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n<text x=\"158.0\" y=\"141.7\" font-size=\"11\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1e293b\">2</text>\n<line x1=\"161.0\" y1=\"70.4\" x2=\"169.0\" y2=\"70.4\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n<text x=\"158.0\" y=\"74.4\" font-size=\"11\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1e293b\">3</text>\n<text x=\"158.0\" y=\"286.3\" font-size=\"11\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1e293b\">0</text>\n<line x1=\"75.0\" y1=\"373.3\" x2=\"225.0\" y2=\"36.7\" stroke=\"#1e293b\" stroke-width=\"2.2\" />\n<circle cx=\"90.0\" cy=\"339.6\" r=\"3.5\" fill=\"#1e293b\" />\n<circle cx=\"165.0\" cy=\"171.3\" r=\"3.5\" fill=\"#1e293b\" />\n<text x=\"230.0\" y=\"40.7\" font-size=\"14\" font-style=\"italic\" font-family=\"serif\" font-weight=\"bold\" fill=\"#1e293b\">f</text>\n</svg>",
    question: "Consider the graph of the linear function $f$ shown above. If the graph of $g(x) = -2x + \\frac{1}{2}$ is represented on the same coordinate plane, the point of intersection of both graphs is:",
    options: ["$(-2, \\frac{17}{18})$", "$(-2, -\\frac{9}{2})$", "$(-\\frac{2}{7}, -\\frac{9}{2})$", "$(-\\frac{2}{9}, \\frac{17}{18})$"],
    correctAnswer: 3,
    explanation: "The line $f$ passes through $(-1, -1)$ and $(0, 1.5)$:\n$$\\text{Slope } m = \\frac{1.5 - (-1)}{0 - (-1)} = 2.5 = \\frac{5}{2}$$\nSo the equation of line $f$ is:\n$$f(x) = \\frac{5}{2}x + \\frac{3}{2}$$\nEquating $f(x) = g(x)$:\n$$\\frac{5}{2}x + \\frac{3}{2} = -2x + \\frac{1}{2}$$\nMultiply by $2$:\n$$5x + 3 = -4x + 1 \\implies 9x = -2 \\implies x = -\\frac{2}{9}$$\nNow find $y$:\n$$y = -2\\left(-\\frac{2}{9}\\right) + \\frac{1}{2} = \\frac{4}{9} + \\frac{1}{2} = \\frac{8 + 9}{18} = \\frac{17}{18}$$\nThus, the point of intersection is $(-\\frac{2}{9}, \\frac{17}{18})$.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 20,
    question: "If $i = \\sqrt{-1}$, which of the following is/are equivalent to $A = 2i(i - 3)(3i - 1)$?\n\nI. $A = 2i(-10i)$\nII. $A = 2i(-6 - 10i)$\nIII. $A = 20$",
    options: ["I only", "I and II", "I and III", "None of the statements is equivalent to A."],
    correctAnswer: 2,
    explanation: "Expand $(i - 3)(3i - 1)$:\n$$(i - 3)(3i - 1) = 3i^2 - i - 9i + 3 = 3(-1) - 10i + 3 = -3 - 10i + 3 = -10i$$\nTherefore:\n$$A = 2i(-10i) \\quad \\text{(Statement I is equivalent)}$$\nNow compute $A$:\n$$A = 2i(-10i) = -20i^2 = -20(-1) = 20 \\quad \\text{(Statement III is equivalent)}$$\nStatement II is incorrect. Thus, Statements I and III are equivalent to $A$.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 21,
    question: "Which of the following is not correct regarding the graph of $f$ with equation $f(x) = \\sqrt{3x - 9}$?",
    options: ["It has a vertical asymptote at $x = 3$.", "It passes through $(3, 0)$.", "Its domain is all real numbers greater than or equal to $3$.", "Its range is $[0, +\\infty)$."],
    correctAnswer: 0,
    explanation: "For $f(x) = \\sqrt{3x - 9}$:\n- The radicand requires $3x - 9 \\ge 0 \\implies x \\ge 3$, so the domain is $[3, +\\infty)$.\n- At $x = 3$, $f(3) = \\sqrt{0} = 0$, so $(3, 0)$ is on the graph.\n- The range is $[0, +\\infty)$.\n- A square root function is continuous on its domain and does NOT have a vertical asymptote at $x = 3$.\nTherefore, 'It has a vertical asymptote at $x = 3$' is the statement that is NOT correct.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 22,
    question: "What is the local minimum of the graph of $g(x) = 2|2x - 1|$?",
    options: ["$(1, 0)$", "$(0.5, 0)$", "$(0, 0)$", "$(-0.5, 0)$"],
    correctAnswer: 1,
    explanation: "The absolute value expression $|2x - 1|$ is always $\\ge 0$, and achieves its minimum value of $0$ when $2x - 1 = 0 \\implies x = 0.5$.\nAt $x = 0.5$, $g(0.5) = 2|0| = 0$.\nThus, the local minimum is at $(0.5, 0)$.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 23,
    question: "A square cardboard has a perimeter of $200\\text{ cm}$. Squares with sides of length $x\\text{ cm}$ are cut out from each corner, and the remaining sides are folded up to form an open-top box of volume $5,808\\text{ cm}^3$. What can be the surface area of the resulting box?",
    options: ["$1,936\\text{ cm}^2$", "$2,066\\text{ cm}^2$", "$2,464\\text{ cm}^2$", "$2,808\\text{ cm}^2$"],
    correctAnswer: 2,
    explanation: "The side of the square cardboard is $\\frac{200}{4} = 50\\text{ cm}$.\nAfter cutting corners of size $x$, the base of the open box has dimensions $(50 - 2x) \\times (50 - 2x)$ and height $x$.\n$$V = x(50 - 2x)^2 = 5,808$$\nTesting $x = 3$:\n$$3(50 - 6)^2 = 3(44^2) = 3(1,936) = 5,808\\text{ cm}^3$$\nSo $x = 3$ is a solution.\nThe surface area of the resulting open-top box is the original cardboard area minus the area of the $4$ cut-out corner squares:\n$$\\text{Surface Area} = 50^2 - 4(x^2) = 2,500 - 4(3^2) = 2,500 - 36 = 2,464\\text{ cm}^2$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 24,
    question: "If $\\frac{3}{x+5} + \\frac{7}{2x-1} = \\frac{ax+b}{(x+5)(2x-1)}$ for every $x > \\frac{1}{2}$, where $a$ and $b$ are two constants, what is the value of $a + b$?",
    options: ["$19$", "$32$", "$39$", "$45$"],
    correctAnswer: 3,
    explanation: "Combine the fractions over the common denominator:\n$$\\frac{3(2x - 1) + 7(x + 5)}{(x + 5)(2x - 1)} = \\frac{6x - 3 + 7x + 35}{(x + 5)(2x - 1)} = \\frac{13x + 32}{(x + 5)(2x - 1)}$$\nEquating numerators gives $ax + b = 13x + 32 \\implies a = 13, b = 32$.\nThus:\n$$a + b = 13 + 32 = 45$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 25,
    svg: "<svg viewBox=\"0 0 600 520\" class=\"w-full max-w-xl mx-auto my-3 bg-white border border-gray-200 rounded-lg p-2 shadow-sm font-sans\" xmlns=\"http://www.w3.org/2000/svg\">\n<defs>\n  <marker id=\"arr-axis\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\">\n    <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#1f2937\" />\n  </marker>\n</defs>\n<clipPath id=\"clip-A\"><rect x=\"35\" y=\"35\" width=\"230\" height=\"175\" /></clipPath>\n<line x1=\"56.9\" y1=\"210.0\" x2=\"56.9\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"78.8\" y1=\"210.0\" x2=\"78.8\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"100.7\" y1=\"210.0\" x2=\"100.7\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"122.6\" y1=\"210.0\" x2=\"122.6\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"144.5\" y1=\"210.0\" x2=\"144.5\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"166.4\" y1=\"210.0\" x2=\"166.4\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"188.3\" y1=\"210.0\" x2=\"188.3\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"210.2\" y1=\"210.0\" x2=\"210.2\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"232.1\" y1=\"210.0\" x2=\"232.1\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"254.0\" y1=\"210.0\" x2=\"254.0\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"192.5\" x2=\"265.0\" y2=\"192.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"175.0\" x2=\"265.0\" y2=\"175.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"157.5\" x2=\"265.0\" y2=\"157.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"140.0\" x2=\"265.0\" y2=\"140.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"122.5\" x2=\"265.0\" y2=\"122.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"105.0\" x2=\"265.0\" y2=\"105.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"87.5\" x2=\"265.0\" y2=\"87.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"70.0\" x2=\"265.0\" y2=\"70.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"52.5\" x2=\"265.0\" y2=\"52.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"140.0\" x2=\"277.0\" y2=\"140.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" marker-end=\"url(#arr-axis)\" />\n<line x1=\"188.3\" y1=\"210.0\" x2=\"188.3\" y2=\"23.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" marker-end=\"url(#arr-axis)\" />\n<text x=\"280.0\" y=\"144.0\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" fill=\"#1f2937\">x</text>\n<text x=\"184.3\" y=\"21.0\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" text-anchor=\"end\" fill=\"#1f2937\">y</text>\n<text x=\"78.8\" y=\"154.0\" font-size=\"10\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">-5</text>\n<text x=\"182.3\" y=\"152.0\" font-size=\"10\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">0</text>\n<text x=\"182.3\" y=\"56.5\" font-size=\"10\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">5</text>\n<g clip-path=\"url(#clip-A)\">\n<path d=\"M 35.0,126.0 L 36.8,126.1 L 38.6,126.1 L 40.4,126.2 L 42.2,126.2 L 44.0,126.3 L 45.8,126.4 L 47.6,126.5 L 49.4,126.5 L 51.2,126.6 L 53.0,126.7 L 54.8,126.8 L 56.6,126.9 L 58.4,126.9 L 60.1,127.0 L 61.9,127.1 L 63.7,127.2 L 65.5,127.4 L 67.3,127.5 L 69.1,127.6 L 70.9,127.7 L 72.7,127.8 L 74.5,128.0 L 76.3,128.1 L 78.1,128.3 L 79.9,128.4 L 81.7,128.6 L 83.5,128.8 L 85.3,129.0 L 87.1,129.2 L 88.9,129.4 L 90.7,129.6 L 92.5,129.9 L 94.3,130.1 L 96.1,130.4 L 97.9,130.7 L 99.7,131.0 L 101.5,131.4 L 103.3,131.8 L 105.1,132.2 L 106.8,132.7 L 108.6,133.2 L 110.4,133.7 L 112.2,134.4 L 114.0,135.1 L 115.8,135.9 L 117.6,136.8 L 119.4,137.8 L 121.2,138.9 L 123.0,140.3 L 124.8,141.9 L 126.6,143.9 L 128.4,146.3 L 130.2,149.3 L 132.0,153.1 L 133.8,158.2 L 135.6,165.4 L 137.4,176.2 L 139.2,194.2 L 141.0,230.5 L 142.8,341.2 M 146.3,-96.2 L 148.3,19.8 L 150.2,55.4 L 152.2,72.6 L 154.2,82.8 L 156.2,89.6 L 158.1,94.4 L 160.1,97.9 L 162.1,100.7 L 164.1,102.9 L 166.1,104.7 L 168.0,106.2 L 170.0,107.5 L 172.0,108.5 L 174.0,109.5 L 176.0,110.3 L 177.9,111.0 L 179.9,111.7 L 181.9,112.2 L 183.9,112.8 L 185.9,113.2 L 187.8,113.6 L 189.8,114.0 L 191.8,114.4 L 193.8,114.7 L 195.7,115.0 L 197.7,115.3 L 199.7,115.6 L 201.7,115.8 L 203.7,116.0 L 205.6,116.2 L 207.6,116.4 L 209.6,116.6 L 211.6,116.8 L 213.6,116.9 L 215.5,117.1 L 217.5,117.2 L 219.5,117.4 L 221.5,117.5 L 223.4,117.6 L 225.4,117.8 L 227.4,117.9 L 229.4,118.0 L 231.4,118.1 L 233.3,118.2 L 235.3,118.3 L 237.3,118.4 L 239.3,118.5 L 241.3,118.5 L 243.2,118.6 L 245.2,118.7 L 247.2,118.8 L 249.2,118.8 L 251.1,118.9 L 253.1,119.0 L 255.1,119.0 L 257.1,119.1 L 259.1,119.2 L 261.0,119.2 L 263.0,119.3 L 265.0,119.3\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" />\n</g>\n<text x=\"150.0\" y=\"233.0\" font-size=\"14\" font-weight=\"bold\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#111827\">A.</text>\n<clipPath id=\"clip-B\"><rect x=\"335\" y=\"35\" width=\"230\" height=\"175\" /></clipPath>\n<line x1=\"356.9\" y1=\"210.0\" x2=\"356.9\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"378.8\" y1=\"210.0\" x2=\"378.8\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"400.7\" y1=\"210.0\" x2=\"400.7\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"422.6\" y1=\"210.0\" x2=\"422.6\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"444.5\" y1=\"210.0\" x2=\"444.5\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"466.4\" y1=\"210.0\" x2=\"466.4\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"488.3\" y1=\"210.0\" x2=\"488.3\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"510.2\" y1=\"210.0\" x2=\"510.2\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"532.1\" y1=\"210.0\" x2=\"532.1\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"554.0\" y1=\"210.0\" x2=\"554.0\" y2=\"35.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"192.5\" x2=\"565.0\" y2=\"192.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"175.0\" x2=\"565.0\" y2=\"175.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"157.5\" x2=\"565.0\" y2=\"157.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"140.0\" x2=\"565.0\" y2=\"140.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"122.5\" x2=\"565.0\" y2=\"122.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"105.0\" x2=\"565.0\" y2=\"105.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"87.5\" x2=\"565.0\" y2=\"87.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"70.0\" x2=\"565.0\" y2=\"70.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"52.5\" x2=\"565.0\" y2=\"52.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"140.0\" x2=\"577.0\" y2=\"140.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" marker-end=\"url(#arr-axis)\" />\n<line x1=\"488.3\" y1=\"210.0\" x2=\"488.3\" y2=\"23.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" marker-end=\"url(#arr-axis)\" />\n<text x=\"580.0\" y=\"144.0\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" fill=\"#1f2937\">x</text>\n<text x=\"484.3\" y=\"21.0\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" text-anchor=\"end\" fill=\"#1f2937\">y</text>\n<text x=\"378.8\" y=\"154.0\" font-size=\"10\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">-5</text>\n<text x=\"482.3\" y=\"152.0\" font-size=\"10\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">0</text>\n<text x=\"482.3\" y=\"56.5\" font-size=\"10\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">5</text>\n<g clip-path=\"url(#clip-B)\">\n<path d=\"M 335.0,160.4 L 337.2,160.5 L 339.3,160.5 L 341.5,160.6 L 343.6,160.6 L 345.8,160.7 L 348.0,160.7 L 350.1,160.8 L 352.3,160.9 L 354.5,160.9 L 356.6,161.0 L 358.8,161.1 L 360.9,161.1 L 363.1,161.2 L 365.3,161.3 L 367.4,161.4 L 369.6,161.5 L 371.7,161.5 L 373.9,161.6 L 376.1,161.7 L 378.2,161.8 L 380.4,162.0 L 382.5,162.1 L 384.7,162.2 L 386.9,162.3 L 389.0,162.5 L 391.2,162.6 L 393.4,162.7 L 395.5,162.9 L 397.7,163.1 L 399.8,163.3 L 402.0,163.4 L 404.2,163.7 L 406.3,163.9 L 408.5,164.1 L 410.6,164.4 L 412.8,164.6 L 415.0,164.9 L 417.1,165.3 L 419.3,165.6 L 421.5,166.0 L 423.6,166.5 L 425.8,166.9 L 427.9,167.5 L 430.1,168.1 L 432.3,168.7 L 434.4,169.5 L 436.6,170.3 L 438.7,171.3 L 440.9,172.5 L 443.1,173.9 L 445.2,175.6 L 447.4,177.6 L 449.5,180.2 L 451.7,183.5 L 453.9,188.0 L 456.0,194.4 L 458.2,204.0 L 460.4,220.6 L 462.5,255.4 L 464.7,376.2 M 468.2,-61.3 L 469.8,43.6 L 471.4,80.5 L 473.0,99.4 L 474.6,110.8 L 476.2,118.5 L 477.9,124.0 L 479.5,128.1 L 481.1,131.4 L 482.7,133.9 L 484.3,136.1 L 485.9,137.8 L 487.5,139.3 L 489.2,140.6 L 490.8,141.8 L 492.4,142.7 L 494.0,143.6 L 495.6,144.4 L 497.2,145.1 L 498.8,145.7 L 500.5,146.2 L 502.1,146.7 L 503.7,147.2 L 505.3,147.6 L 506.9,148.0 L 508.5,148.4 L 510.1,148.7 L 511.7,149.0 L 513.4,149.3 L 515.0,149.6 L 516.6,149.9 L 518.2,150.1 L 519.8,150.3 L 521.4,150.5 L 523.0,150.7 L 524.7,150.9 L 526.3,151.1 L 527.9,151.3 L 529.5,151.4 L 531.1,151.6 L 532.7,151.7 L 534.3,151.9 L 536.0,152.0 L 537.6,152.1 L 539.2,152.2 L 540.8,152.3 L 542.4,152.5 L 544.0,152.6 L 545.6,152.7 L 547.2,152.8 L 548.9,152.8 L 550.5,152.9 L 552.1,153.0 L 553.7,153.1 L 555.3,153.2 L 556.9,153.3 L 558.5,153.3 L 560.2,153.4 L 561.8,153.5 L 563.4,153.5 L 565.0,153.6\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" />\n</g>\n<text x=\"450.0\" y=\"233.0\" font-size=\"14\" font-weight=\"bold\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#111827\">B.</text>\n<clipPath id=\"clip-C\"><rect x=\"35\" y=\"290\" width=\"230\" height=\"175\" /></clipPath>\n<line x1=\"56.9\" y1=\"465.0\" x2=\"56.9\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"78.8\" y1=\"465.0\" x2=\"78.8\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"100.7\" y1=\"465.0\" x2=\"100.7\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"122.6\" y1=\"465.0\" x2=\"122.6\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"144.5\" y1=\"465.0\" x2=\"144.5\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"166.4\" y1=\"465.0\" x2=\"166.4\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"188.3\" y1=\"465.0\" x2=\"188.3\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"210.2\" y1=\"465.0\" x2=\"210.2\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"232.1\" y1=\"465.0\" x2=\"232.1\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"254.0\" y1=\"465.0\" x2=\"254.0\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"447.5\" x2=\"265.0\" y2=\"447.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"430.0\" x2=\"265.0\" y2=\"430.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"412.5\" x2=\"265.0\" y2=\"412.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"395.0\" x2=\"265.0\" y2=\"395.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"377.5\" x2=\"265.0\" y2=\"377.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"360.0\" x2=\"265.0\" y2=\"360.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"342.5\" x2=\"265.0\" y2=\"342.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"325.0\" x2=\"265.0\" y2=\"325.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"307.5\" x2=\"265.0\" y2=\"307.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"35.0\" y1=\"395.0\" x2=\"277.0\" y2=\"395.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" marker-end=\"url(#arr-axis)\" />\n<line x1=\"188.3\" y1=\"465.0\" x2=\"188.3\" y2=\"278.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" marker-end=\"url(#arr-axis)\" />\n<text x=\"280.0\" y=\"399.0\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" fill=\"#1f2937\">x</text>\n<text x=\"184.3\" y=\"276.0\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" text-anchor=\"end\" fill=\"#1f2937\">y</text>\n<text x=\"78.8\" y=\"409.0\" font-size=\"10\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">-5</text>\n<text x=\"182.3\" y=\"407.0\" font-size=\"10\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">0</text>\n<text x=\"182.3\" y=\"311.5\" font-size=\"10\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">5</text>\n<g clip-path=\"url(#clip-C)\">\n<path d=\"M 35.0,398.5 L 36.8,398.6 L 38.6,398.6 L 40.4,398.7 L 42.2,398.7 L 44.0,398.8 L 45.8,398.9 L 47.6,399.0 L 49.4,399.0 L 51.2,399.1 L 53.0,399.2 L 54.8,399.3 L 56.6,399.4 L 58.4,399.4 L 60.1,399.5 L 61.9,399.6 L 63.7,399.7 L 65.5,399.9 L 67.3,400.0 L 69.1,400.1 L 70.9,400.2 L 72.7,400.3 L 74.5,400.5 L 76.3,400.6 L 78.1,400.8 L 79.9,400.9 L 81.7,401.1 L 83.5,401.3 L 85.3,401.5 L 87.1,401.7 L 88.9,401.9 L 90.7,402.1 L 92.5,402.4 L 94.3,402.6 L 96.1,402.9 L 97.9,403.2 L 99.7,403.5 L 101.5,403.9 L 103.3,404.3 L 105.1,404.7 L 106.8,405.2 L 108.6,405.7 L 110.4,406.2 L 112.2,406.9 L 114.0,407.6 L 115.8,408.4 L 117.6,409.3 L 119.4,410.3 L 121.2,411.4 L 123.0,412.8 L 124.8,414.4 L 126.6,416.4 L 128.4,418.8 L 130.2,421.8 L 132.0,425.6 L 133.8,430.7 L 135.6,437.9 L 137.4,448.7 L 139.2,466.7 L 141.0,503.0 L 142.8,613.7 M 146.3,176.3 L 148.3,292.3 L 150.2,327.9 L 152.2,345.1 L 154.2,355.3 L 156.2,362.1 L 158.1,366.9 L 160.1,370.4 L 162.1,373.2 L 164.1,375.4 L 166.1,377.2 L 168.0,378.7 L 170.0,380.0 L 172.0,381.0 L 174.0,382.0 L 176.0,382.8 L 177.9,383.5 L 179.9,384.2 L 181.9,384.7 L 183.9,385.3 L 185.9,385.7 L 187.8,386.1 L 189.8,386.5 L 191.8,386.9 L 193.8,387.2 L 195.7,387.5 L 197.7,387.8 L 199.7,388.1 L 201.7,388.3 L 203.7,388.5 L 205.6,388.7 L 207.6,388.9 L 209.6,389.1 L 211.6,389.3 L 213.6,389.4 L 215.5,389.6 L 217.5,389.7 L 219.5,389.9 L 221.5,390.0 L 223.4,390.1 L 225.4,390.3 L 227.4,390.4 L 229.4,390.5 L 231.4,390.6 L 233.3,390.7 L 235.3,390.8 L 237.3,390.9 L 239.3,391.0 L 241.3,391.0 L 243.2,391.1 L 245.2,391.2 L 247.2,391.3 L 249.2,391.3 L 251.1,391.4 L 253.1,391.5 L 255.1,391.5 L 257.1,391.6 L 259.1,391.7 L 261.0,391.7 L 263.0,391.8 L 265.0,391.8\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" />\n</g>\n<text x=\"150.0\" y=\"488.0\" font-size=\"14\" font-weight=\"bold\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#111827\">C.</text>\n<clipPath id=\"clip-D\"><rect x=\"335\" y=\"290\" width=\"230\" height=\"175\" /></clipPath>\n<line x1=\"356.9\" y1=\"465.0\" x2=\"356.9\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"378.8\" y1=\"465.0\" x2=\"378.8\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"400.7\" y1=\"465.0\" x2=\"400.7\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"422.6\" y1=\"465.0\" x2=\"422.6\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"444.5\" y1=\"465.0\" x2=\"444.5\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"466.4\" y1=\"465.0\" x2=\"466.4\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"488.3\" y1=\"465.0\" x2=\"488.3\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"510.2\" y1=\"465.0\" x2=\"510.2\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"532.1\" y1=\"465.0\" x2=\"532.1\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"554.0\" y1=\"465.0\" x2=\"554.0\" y2=\"290.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"447.5\" x2=\"565.0\" y2=\"447.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"430.0\" x2=\"565.0\" y2=\"430.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"412.5\" x2=\"565.0\" y2=\"412.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"395.0\" x2=\"565.0\" y2=\"395.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"377.5\" x2=\"565.0\" y2=\"377.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"360.0\" x2=\"565.0\" y2=\"360.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"342.5\" x2=\"565.0\" y2=\"342.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"325.0\" x2=\"565.0\" y2=\"325.0\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"307.5\" x2=\"565.0\" y2=\"307.5\" stroke=\"#e5e7eb\" stroke-width=\"1\" />\n<line x1=\"335.0\" y1=\"395.0\" x2=\"577.0\" y2=\"395.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" marker-end=\"url(#arr-axis)\" />\n<line x1=\"488.3\" y1=\"465.0\" x2=\"488.3\" y2=\"278.0\" stroke=\"#1f2937\" stroke-width=\"1.5\" marker-end=\"url(#arr-axis)\" />\n<text x=\"580.0\" y=\"399.0\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" fill=\"#1f2937\">x</text>\n<text x=\"484.3\" y=\"276.0\" font-size=\"12\" font-style=\"italic\" font-family=\"serif\" text-anchor=\"end\" fill=\"#1f2937\">y</text>\n<text x=\"378.8\" y=\"409.0\" font-size=\"10\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">-5</text>\n<text x=\"482.3\" y=\"407.0\" font-size=\"10\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">0</text>\n<text x=\"482.3\" y=\"311.5\" font-size=\"10\" font-family=\"sans-serif\" text-anchor=\"end\" fill=\"#1f2937\">5</text>\n<g clip-path=\"url(#clip-D)\">\n<path d=\"M 335.0,374.0 L 336.8,373.9 L 338.6,373.9 L 340.4,373.8 L 342.2,373.8 L 344.0,373.7 L 345.8,373.6 L 347.6,373.5 L 349.4,373.5 L 351.2,373.4 L 353.0,373.3 L 354.8,373.2 L 356.6,373.1 L 358.4,373.1 L 360.1,373.0 L 361.9,372.9 L 363.7,372.8 L 365.5,372.6 L 367.3,372.5 L 369.1,372.4 L 370.9,372.3 L 372.7,372.2 L 374.5,372.0 L 376.3,371.9 L 378.1,371.7 L 379.9,371.6 L 381.7,371.4 L 383.5,371.2 L 385.3,371.0 L 387.1,370.8 L 388.9,370.6 L 390.7,370.4 L 392.5,370.1 L 394.3,369.9 L 396.1,369.6 L 397.9,369.3 L 399.7,369.0 L 401.5,368.6 L 403.3,368.2 L 405.1,367.8 L 406.8,367.3 L 408.6,366.8 L 410.4,366.3 L 412.2,365.6 L 414.0,364.9 L 415.8,364.1 L 417.6,363.2 L 419.4,362.2 L 421.2,361.1 L 423.0,359.7 L 424.8,358.1 L 426.6,356.1 L 428.4,353.7 L 430.2,350.7 L 432.0,346.9 L 433.8,341.8 L 435.6,334.6 L 437.4,323.8 L 439.2,305.8 L 441.0,269.5 L 442.8,158.8 M 446.3,596.2 L 448.3,480.2 L 450.2,444.6 L 452.2,427.4 L 454.2,417.2 L 456.2,410.4 L 458.1,405.6 L 460.1,402.1 L 462.1,399.3 L 464.1,397.1 L 466.1,395.3 L 468.0,393.8 L 470.0,392.5 L 472.0,391.5 L 474.0,390.5 L 476.0,389.7 L 477.9,389.0 L 479.9,388.3 L 481.9,387.8 L 483.9,387.2 L 485.9,386.8 L 487.8,386.4 L 489.8,386.0 L 491.8,385.6 L 493.8,385.3 L 495.7,385.0 L 497.7,384.7 L 499.7,384.4 L 501.7,384.2 L 503.7,384.0 L 505.6,383.8 L 507.6,383.6 L 509.6,383.4 L 511.6,383.2 L 513.6,383.1 L 515.5,382.9 L 517.5,382.8 L 519.5,382.6 L 521.5,382.5 L 523.4,382.4 L 525.4,382.2 L 527.4,382.1 L 529.4,382.0 L 531.4,381.9 L 533.3,381.8 L 535.3,381.7 L 537.3,381.6 L 539.3,381.5 L 541.3,381.5 L 543.2,381.4 L 545.2,381.3 L 547.2,381.2 L 549.2,381.2 L 551.1,381.1 L 553.1,381.0 L 555.1,381.0 L 557.1,380.9 L 559.1,380.8 L 561.0,380.8 L 563.0,380.7 L 565.0,380.7\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" />\n</g>\n<text x=\"450.0\" y=\"488.0\" font-size=\"14\" font-weight=\"bold\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#111827\">D.</text>\n</svg>",
    question: "Which of the following represents the graph of $f(x) = \\frac{2}{2x + 4} + 1$?",
    options: ["Graph A", "Graph B", "Graph C", "Graph D"],
    correctAnswer: 0,
    explanation: "Simplify the rational function:\n$$f(x) = \\frac{2}{2(x + 2)} + 1 = \\frac{1}{x + 2} + 1$$\nKey characteristics:\n- **Vertical asymptote:** $x + 2 = 0 \\implies x = -2$.\n- **Horizontal asymptote:** $y = 1$.\n- **$y$-intercept:** $f(0) = \\frac{1}{2} + 1 = 1.5$.\n- **$x$-intercept:** $0 = \\frac{1}{x + 2} + 1 \\implies \\frac{1}{x + 2} = -1 \\implies x = -3$.\n- **Branches:** Right branch is for $x > -2$ (above $y = 1$); left branch is for $x < -2$ (below $y = 1$).\nExamining the options, Graph A matches these exact features.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 26,
    question: "What is the largest possible integer in the solution set of $3(2x + 1) < 4(x + 1)$?",
    options: ["$3$", "$1$", "$0$", "$-1$"],
    correctAnswer: 2,
    explanation: "Expand both sides:\n$$6x + 3 < 4x + 4$$\nSubtract $4x$ and $3$:\n$$2x < 1 \\implies x < 0.5$$\nThe largest integer strictly less than $0.5$ is $0$.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 27,
    question: "The sum of two adjacent angles is $66^\\circ$. If one angle measures $(x + 3)^\\circ$ and the other is twice the first, the value of $x$ is:",
    options: ["$6$", "$9$", "$14$", "$19$"],
    correctAnswer: 3,
    explanation: "The two angles are $(x + 3)^\\circ$ and $2(x + 3)^\\circ$.\nTheir sum is:\n$$(x + 3) + 2(x + 3) = 66 \\implies 3(x + 3) = 66$$\nDivide by $3$:\n$$x + 3 = 22 \\implies x = 19$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 28,
    question: "Given the equation $2x^2 + ax + 1 = 0$, where $a$ is a real number, the sum of the solutions of the equation, $x_1$ and $x_2$, is $-4$. If $x_1 < x_2$, which of the following is $x_1$?",
    options: ["$x_1 = \\frac{-4 - \\sqrt{14}}{2}$", "$x_1 = \\frac{-2 - \\sqrt{14}}{2}$", "$x_1 = \\frac{-4 - \\sqrt{14}}{4}$", "$x_1 = \\frac{-4 + \\sqrt{14}}{4}$"],
    correctAnswer: 0,
    explanation: "By Vieta's formulas, the sum of the roots of $2x^2 + ax + 1 = 0$ is:\n$$x_1 + x_2 = -\\frac{a}{2} = -4 \\implies a = 8$$\nNow solve $2x^2 + 8x + 1 = 0$ using the quadratic formula:\n$$x = \\frac{-8 \\pm \\sqrt{8^2 - 4(2)(1)}}{2(2)} = \\frac{-8 \\pm \\sqrt{64 - 8}}{4} = \\frac{-8 \\pm \\sqrt{56}}{4} = \\frac{-8 \\pm 2\\sqrt{14}}{4} = \\frac{-4 \\pm \\sqrt{14}}{2}$$\nSince $x_1 < x_2$, we take the minus sign:\n$$x_1 = \\frac{-4 - \\sqrt{14}}{2}$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 29,
    question: "If $y$ varies inversely as $x^2$ and $y = 12$ when $x = 5$, what is the value of $y$ when $x = 4$?",
    options: ["$18.25$", "$18.75$", "$19.0$", "$19.75$"],
    correctAnswer: 1,
    explanation: "Inverse variation with $x^2$ means:\n$$y = \\frac{k}{x^2} \\implies k = y x^2$$\nUsing $y = 12$ and $x = 5$:\n$$k = 12 \\times 5^2 = 12 \\times 25 = 300$$\nWhen $x = 4$:\n$$y = \\frac{300}{4^2} = \\frac{300}{16} = 18.75$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 30,
    question: "Consider a circle $C$ with radius equal to $4\\text{ cm}$. $\\widehat{MN}$ is an arc of the circle with a length of $2\\pi\\text{ cm}$. What is the area of this arc sector?",
    options: ["$\\frac{\\pi}{2}\\text{ cm}^2$", "$\\pi\\text{ cm}^2$", "$3\\pi\\text{ cm}^2$", "$4\\pi\\text{ cm}^2$"],
    correctAnswer: 3,
    explanation: "The area of a sector with radius $r$ and arc length $L$ is given by:\n$$\\text{Area} = \\frac{1}{2} r L$$\nGiven $r = 4\\text{ cm}$ and $L = 2\\pi\\text{ cm}$:\n$$\\text{Area} = \\frac{1}{2}(4)(2\\pi) = 4\\pi\\text{ cm}^2$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 31,
    svg: "<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-md mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Job</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Wage Rate</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"border border-gray-400 px-2 py-1\">Saleswoman at Store X</td>\n      <td class=\"border border-gray-400 px-2 py-1\">\\$300 base salary per month plus \\$4.50 per item sold</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-2 py-1\">English Tutor</td>\n      <td class=\"border border-gray-400 px-2 py-1\">\\$35 per hour</td>\n    </tr>\n  </tbody>\n</table>",
    question: "Questions 31 and 32 refer to the information below:\n\nBrenda works two jobs: as a saleswoman at Store X from 9:00 AM to 4:00 PM and as an English tutor in the afternoon. Her wages are shown in the table above.\n\nLast month, Brenda tutored three students for $5$ hours each and sold $30$ items at Store X. What is the total wage Brenda is expected to receive?",
    options: ["\\$540", "\\$610", "\\$660", "\\$960"],
    correctAnswer: 3,
    explanation: "- **Tutoring income:** $3 \\text{ students} \\times 5 \\text{ hours} = 15 \\text{ hours}$. At $\\$35/\\text{hour}$:\n$$15 \\times 35 = \\$525$$\n- **Store X income:** Base salary of $\\$300$ plus $\\$4.50$ per item for $30$ items:\n$$300 + (30 \\times 4.50) = 300 + 135 = \\$435$$\n- **Total wage:**\n$$525 + 435 = \\$960$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 32,
    svg: "<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-md mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Job</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Wage Rate</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"border border-gray-400 px-2 py-1\">Saleswoman at Store X</td>\n      <td class=\"border border-gray-400 px-2 py-1\">\\$300 base salary per month plus \\$4.50 per item sold</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-2 py-1\">English Tutor</td>\n      <td class=\"border border-gray-400 px-2 py-1\">\\$35 per hour</td>\n    </tr>\n  </tbody>\n</table>",
    question: "Questions 31 and 32 refer to the information below:\n\nBrenda works two jobs: as a saleswoman at Store X from 9:00 AM to 4:00 PM and as an English tutor in the afternoon. Her wages are shown in the table above.\n\nIf Brenda tutors one student for $2$ hours per day during the month of July and wants to earn a total of $\\$2,740$ by the end of the month, how many items must she sell at Store X?",
    options: ["$30$", "$45$", "$60$", "$70$"],
    correctAnswer: 2,
    explanation: "July has $31$ days. Tutoring $2$ hours each day gives $31 \\times 2 = 62$ hours.\n- **Tutoring income:**\n$$62 \\times 35 = \\$2,170$$\n- **Amount needed from Store X:**\n$$\\$2,740 - \\$2,170 = \\$570$$\n- Store X wage equation:\n$$300 + 4.50n = 570 \\implies 4.50n = 270 \\implies n = \\frac{270}{4.50} = 60$$\nThus, Brenda must sell $60$ items.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 33,
    question: "Given the points $S(9, -3)$ and $T(12, a)$, where $a$ is a real number, and knowing that $N(10.5, -4)$ is the midpoint of segment $\\overline{ST}$, then the length of $\\overline{ST}$ is equal to:",
    options: ["$\\sqrt{10}\\text{ units}$", "$\\sqrt{13}\\text{ units}$", "$\\sqrt{17}\\text{ units}$", "$2\\sqrt{5}\\text{ units}$"],
    correctAnswer: 1,
    explanation: "Using the midpoint formula for the $y$-coordinate:\n$$\\frac{-3 + a}{2} = -4 \\implies -3 + a = -8 \\implies a = -5$$\nNow calculate the distance $ST$ between $S(9, -3)$ and $T(12, -5)$:\n$$ST = \\sqrt{(12 - 9)^2 + (-5 - (-3))^2} = \\sqrt{3^2 + (-2)^2} = \\sqrt{9 + 4} = \\sqrt{13}\\text{ units}$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 34,
    question: "Given the points $A(-3, 4)$, $M(3, 10)$, and $H(2, b)$, where $b$ is a real number, if $H$ lies on the line $AM$, then the value of $b$ equals:",
    options: ["$9$", "$6$", "$5$", "$2$"],
    correctAnswer: 0,
    explanation: "First, calculate the slope of line $AM$:\n$$m = \\frac{10 - 4}{3 - (-3)} = \\frac{6}{6} = 1$$\nThe equation of line $AM$ using point $M(3, 10)$ is:\n$$y - 10 = 1(x - 3) \\implies y = x + 7$$\nSince $H(2, b)$ lies on this line:\n$$b = 2 + 7 = 9$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 35,
    question: "Given the data set:\n$$3, 5, 5, 7, 11, 13, 19, 19, 19, 20, 22, 25, 30$$\nFor the set of data above, $m$ is the mean, $n$ is the mode, and $a$ is the range. What is the value of $26mn - 13a$?",
    options: ["$7,173$", "$7,524$", "$7,605$", "$7,875$"],
    correctAnswer: 0,
    explanation: "- Total sum of the $13$ values:\n$$3+5+5+7+11+13+19+19+19+20+22+25+30 = 198$$\n- Mean $m = \\frac{198}{13}$.\n- Mode $n$: $19$ appears three times, so $n = 19$.\n- Range $a = 30 - 3 = 27$.\nNow evaluate $26mn - 13a$:\n$$26 \\times \\left(\\frac{198}{13}\\right) \\times 19 - 13(27) = 2 \\times 198 \\times 19 - 351 = 7,524 - 351 = 7,173$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 36,
    question: "Questions 36 and 37 refer to the information below:\n\nA school has $2,400$ students. A random sample of $100$ students is chosen. In this sample:\n- $4$ students are in their final year.\n- $20$ students are aged between $10$ and $12$ years.\n- The remaining students are in kindergarten.\n\nIf the sample represents the actual repartition of students, how many of the registered students in the school are presumably in their final year?",
    options: ["$90$", "$96$", "$98$", "$110$"],
    correctAnswer: 1,
    explanation: "The proportion of final-year students in the sample is $\\frac{4}{100} = 4\\%$.\nExpected total number in the entire school of $2,400$ students:\n$$2,400 \\times 0.04 = 96$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 37,
    question: "Questions 36 and 37 refer to the information below:\n\nA school has $2,400$ students. A random sample of $100$ students is chosen. In this sample:\n- $4$ students are in their final year.\n- $20$ students are aged between $10$ and $12$ years.\n- The remaining students are in kindergarten.\n\nTwo of the kindergarten students in the sample are leaving the school at the end of the academic year. Approximately, what is the expected total number of kindergarten students leaving the school by the end of the academic year?",
    options: ["$24$", "$48$", "$63$", "$66$"],
    correctAnswer: 1,
    explanation: "The proportion of leaving kindergarten students out of the sample is $\\frac{2}{100} = 2\\%$.\nExpected number leaving from the school of $2,400$ students:\n$$2,400 \\times 0.02 = 48$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 38,
    question: "Bashar travelled to Dubai for $5$ days. He had $\\$3,400$ at the beginning of the trip and returned home with $\\$150$ left. On average, how much money did he spend per day?",
    options: ["\\$550", "\\$650", "\\$700", "\\$750"],
    correctAnswer: 1,
    explanation: "Total money spent over $5$ days:\n$$\\$3,400 - \\$150 = \\$3,250$$\nAverage spent per day:\n$$\\frac{\\$3,250}{5} = \\$650$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 39,
    question: "If $45\\text{ km/h} = a\\text{ m/min}$, what is the value of $a$?",
    options: ["$75$", "$600$", "$750$", "$920$"],
    correctAnswer: 2,
    explanation: "Convert kilometers per hour to meters per minute:\n$$1\\text{ km} = 1,000\\text{ m}, \\quad 1\\text{ h} = 60\\text{ min}$$\n$$45\\text{ km/h} = \\frac{45 \\times 1,000}{60}\\text{ m/min} = \\frac{45,000}{60} = 750\\text{ m/min}$$\nThus, $a = 750$.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 40,
    question: "Which of the following statements is/are true regarding the graph of the inequality $y + 3x \\le -2$?\n\nI. It represents the region above the line of equation $y = -3x - 2$.\nII. It passes through $(1, -5)$.\nIII. All points with a negative $y$-coordinate are in the solution set of the inequality.",
    options: ["I only", "II only", "I and II", "II and III"],
    correctAnswer: 1,
    explanation: "Rewrite the inequality as $y \\le -3x - 2$:\n- **Statement I:** $y \\le -3x - 2$ represents the region *on or below* the line, not above (Statement I is false).\n- **Statement II:** Substitute $(1, -5)$: $-5 + 3(1) = -2 \\le -2$, which is true. The point lies on the boundary line (Statement II is true).\n- **Statement III:** Consider the point $(5, -1)$ which has a negative $y$-coordinate: $-1 + 3(5) = 14 \\not\\le -2$, so not all points with negative $y$-coordinates are solutions (Statement III is false).\nTherefore, only Statement II is true.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 41,
    question: "Which of the following is the factored form of the polynomial $3x^2 - 150m + 25mx - 18x$?",
    options: ["$(x - 6)(3x + 25m)$", "$(x + 6)(3x - 25m)$", "$(x + m)(6 - 25m)$", "$(x + m)(6 + 25m)$"],
    correctAnswer: 0,
    explanation: "Group terms with common factors:\n$$3x^2 - 18x + 25mx - 150m = 3x(x - 6) + 25m(x - 6)$$\nFactor out $(x - 6)$:\n$$(x - 6)(3x + 25m)$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 42,
    question: "Given $A(x) = 9x^2 - ax + 1$ and $B(x) = x^2 + bx + 25$, where $a$ and $b$ are positive real numbers, and if $A(x)$ and $B(x)$ represent perfect squares by having equal roots, what is the value of $a + b$?",
    options: ["$2$", "$8$", "$16$", "$24$"],
    correctAnswer: 2,
    explanation: "A quadratic $Ax^2 + Bx + C$ has equal roots when its discriminant is zero:\n- For $A(x) = 9x^2 - ax + 1$:\n$$\\Delta = (-a)^2 - 4(9)(1) = 0 \\implies a^2 = 36 \\implies a = 6 \\quad (a > 0)$$\n- For $B(x) = x^2 + bx + 25$:\n$$\\Delta = b^2 - 4(1)(25) = 0 \\implies b^2 = 100 \\implies b = 10 \\quad (b > 0)$$\nTherefore:\n$$a + b = 6 + 10 = 16$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 43,
    question: "The sum of two numbers is $41$ and their product is $408$. The largest number is:",
    options: ["$8$", "$12$", "$17$", "$24$"],
    correctAnswer: 3,
    explanation: "Let the two numbers be the roots of $t^2 - 41t + 408 = 0$.\nUsing the quadratic formula:\n$$t = \\frac{41 \\pm \\sqrt{41^2 - 4(408)}}{2} = \\frac{41 \\pm \\sqrt{1,681 - 1,632}}{2} = \\frac{41 \\pm \\sqrt{49}}{2} = \\frac{41 \\pm 7}{2}$$\nThe two numbers are $\\frac{48}{2} = 24$ and $\\frac{34}{2} = 17$.\nThe largest number is $24$.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 44,
    question: "What is the value of the radicand in the simplified form of $\\sqrt[3]{8a^4b^3} \\times \\sqrt[3]{ab^5}$ if $a = 2$ and $b = -1$?",
    options: ["$-4$", "$4$", "$8$", "$16$"],
    correctAnswer: 1,
    explanation: "Multiply the cube roots together:\n$$\\sqrt[3]{(8a^4b^3)(ab^5)} = \\sqrt[3]{8a^5b^8}$$\nExtract perfect cubes from the radical:\n$$\\sqrt[3]{8 \\cdot a^3 \\cdot b^6 \\cdot a^2b^2} = 2ab^2 \\sqrt[3]{a^2b^2}$$\nThe simplified radical is $2ab^2 \\sqrt[3]{a^2b^2}$, so the radicand remaining under the cube root is $a^2b^2$.\nEvaluate for $a = 2$ and $b = -1$:\n$$a^2b^2 = (2)^2(-1)^2 = 4 \\times 1 = 4$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 45,
    question: "$x^\\circ$, $(2x + 1)^\\circ$, $(3x - 15)^\\circ$, and $(x + 4)^\\circ$ are the measures of the angles in a quadrilateral. What is the value of $x$, to the nearest tenth?",
    options: ["$51.5$", "$52.3$", "$52.9$", "$53.6$"],
    correctAnswer: 2,
    explanation: "The sum of the interior angles of a quadrilateral is $360^\\circ$:\n$$x + (2x + 1) + (3x - 15) + (x + 4) = 360$$\n$$7x - 10 = 360 \\implies 7x = 370 \\implies x = \\frac{370}{7} \\approx 52.857^\\circ \\approx 52.9^\\circ$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 46,
    question: "The perimeter of a triangle is $126\\text{ cm}$. The sides of this triangle are in the ratio of $4 : 6 : 8$. What is the measure of the longest side of this triangle?",
    options: ["$28\\text{ cm}$", "$35\\text{ cm}$", "$42\\text{ cm}$", "$56\\text{ cm}$"],
    correctAnswer: 3,
    explanation: "Let the side lengths be $4k$, $6k$, and $8k$.\nPerimeter:\n$$4k + 6k + 8k = 126 \\implies 18k = 126 \\implies k = 7$$\nThe longest side is $8k$:\n$$8 \\times 7 = 56\\text{ cm}$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 47,
    question: "Zein bought a sofa at a $15\\%$ discount. After a year, he sold it for half the price he had paid, receiving $\\$637.50$. What was the original price of the sofa?",
    options: ["\\$1,400", "\\$1,500", "\\$1,700", "\\$1,800"],
    correctAnswer: 1,
    explanation: "Let the original price be $P$.\nZein bought it at a $15\\%$ discount, so he paid $0.85P$.\nHe sold it for half of that amount, receiving $\\$637.50$:\n$$\\frac{0.85P}{2} = 637.50 \\implies 0.85P = 1,275 \\implies P = \\frac{1,275}{0.85} = \\$1,500$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 48,
    question: "A shirt originally costs $\\$40$. It was discounted by $10\\%$ the first time, then by $20\\%$. What is the final price of the shirt?",
    options: ["\\$28.80", "\\$29.40", "\\$34.50", "\\$35.60"],
    correctAnswer: 0,
    explanation: "After the first discount of $10\\%$, the price is:\n$$40 \\times (1 - 0.10) = 40 \\times 0.90 = \\$36$$\nAfter the second discount of $20\\%$, the final price is:\n$$36 \\times (1 - 0.20) = 36 \\times 0.80 = \\$28.80$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 49,
    question: "Mazen consumed $600$ calories at breakfast and $1,200$ calories at lunch. He then went to the gym and burned $350$ calories. If his daily net calorie intake should be $1,600$ calories, how many calories should he consume at dinner?",
    options: ["$100$", "$150$", "$200$", "$350$"],
    correctAnswer: 1,
    explanation: "Let $d$ be the calories Mazen consumes at dinner.\nHis net calorie intake is:\n$$\\text{Net Calories} = 600 + 1,200 + d - 350 = 1,450 + d$$\nSetting this equal to the goal of $1,600$ calories:\n$$1,450 + d = 1,600 \\implies d = 150\\text{ calories}$$",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  },
  {
    id: 50,
    question: "Which of the following statements is true about $A(x) = \\frac{2x}{(3x - 1)^2}$?",
    options: ["It is always negative for all real numbers $x$.", "It is always positive for all real numbers $x$.", "It is equal to zero when $x = 0$ or $x = \\frac{1}{3}$.", "It is negative for all values of $x < 0$."],
    correctAnswer: 3,
    explanation: "For any $x \\ne \\frac{1}{3}$, the denominator $(3x - 1)^2$ is strictly positive.\nTherefore, the sign of $A(x)$ is determined entirely by the numerator $2x$:\n- For $x < 0$, $2x < 0$, so $A(x) = \\frac{2x}{(3x - 1)^2} < 0$.\nThus, the statement 'It is negative for all values of $x < 0$' is true.",
    category: "EST1-2026-May -new",
    topics: ["EST1"]
  }
];

export default EST1_2026_MAY_NEW_SET;
