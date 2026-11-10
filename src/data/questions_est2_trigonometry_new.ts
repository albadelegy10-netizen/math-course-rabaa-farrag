import { Question } from '../../types';

export const EST2_TRIGONOMETRY_NEW: Question[] = [
  {
    id: "est2_trig_new_1",
    question: "Simplify the following trigonometric expression:\n$$2 \\sin^2(x) \\cdot \\sec^2(x) + \\tan^2(x) =$$",
    options: [
      "$3 \\cot(x)$",
      "$\\frac{1}{2} \\tan(x)$",
      "$3 \\tan^2(x)$",
      "$\\cot^2(x)$",
      "$\\tan^2(x)$"
    ],
    correctAnswer: 2,
    explanation: "Recall the trigonometric identity $\\sec(x) = \\frac{1}{\\cos(x)}$.\nSubstitute this into the expression:\n$$2 \\sin^2(x) \\cdot \\left(\\frac{1}{\\cos(x)}\\right)^2 + \\tan^2(x) = 2 \\frac{\\sin^2(x)}{\\cos^2(x)} + \\tan^2(x)$$\nRecall that $\\tan(x) = \\frac{\\sin(x)}{\\cos(x)}$, so $\\tan^2(x) = \\frac{\\sin^2(x)}{\\cos^2(x)}$.\n$$= 2 \\tan^2(x) + \\tan^2(x) = 3 \\tan^2(x)$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Trigonometric Identities"]
  },
  {
    id: "est2_trig_new_2",
    question: "If $\\cos \\theta = -\\frac{3}{5}$ and $\\pi < \\theta < \\frac{3\\pi}{2}$, what is the value of $\\cos(2\\theta)$?",
    options: [
      "$\\frac{119}{169}$",
      "$-\\frac{119}{169}$",
      "$\\frac{7}{25}$",
      "$-\\frac{7}{25}$",
      "$\\frac{24}{25}$"
    ],
    correctAnswer: 2,
    explanation: "Using the double-angle formula for cosine in terms of $\\cos \\theta$:\n$$\\cos(2\\theta) = 2\\cos^2 \\theta - 1$$\nSubstitute $\\cos \\theta = -\\frac{3}{5}$:\n$$\\cos(2\\theta) = 2\\left(-\\frac{3}{5}\\right)^2 - 1 = 2\\left(\\frac{9}{25}\\right) - 1 = \\frac{18}{25} - \\frac{25}{25} = -\\frac{7}{25}$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Double Angle Identities"]
  },
  {
    id: "est2_trig_new_3",
    question: "Which of the following expressions is equivalent to $\\frac{1 - \\cos(2x)}{\\sin(2x)}$ for all values of $x$ where the expression is defined?",
    options: [
      "$\\cot(x)$",
      "$\\tan(x)$",
      "$\\sin(x)$",
      "$\\sec(x)$",
      "$\\csc(x)$"
    ],
    correctAnswer: 1,
    explanation: "Use the double angle identities $1 - \\cos(2x) = 2\\sin^2(x)$ and $\\sin(2x) = 2\\sin(x)\\cos(x)$:\n$$\\frac{1 - \\cos(2x)}{\\sin(2x)} = \\frac{2\\sin^2(x)}{2\\sin(x)\\cos(x)} = \\frac{\\sin(x)}{\\cos(x)} = \\tan(x)$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Trigonometric Identities"]
  },
  {
    id: "est2_trig_new_4",
    question: "What is the exact value of the expression $\\sin(75^\\circ) \\cos(15^\\circ) + \\cos(75^\\circ) \\sin(15^\\circ)$?",
    options: [
      "$0$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$1$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    correctAnswer: 3,
    explanation: "By the angle addition formula for sine:\n$$\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$$\nSetting $A = 75^\\circ$ and $B = 15^\\circ$:\n$$\\sin(75^\\circ + 15^\\circ) = \\sin(90^\\circ) = 1$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Compound Angle Formulas"]
  },
  {
    id: "est2_trig_new_5",
    question: "Find the sum of all solutions to the equation $2\\cos^2(x) - \\cos(x) - 1 = 0$ on the interval $[0, 2\\pi)$.",
    options: [
      "$2\\pi$",
      "$3\\pi$",
      "$4\\pi$",
      "$\\frac{5\\pi}{2}$",
      "$\\frac{7\\pi}{3}$"
    ],
    correctAnswer: 0,
    explanation: "Factor the quadratic equation in terms of $\\cos(x)$:\n$$(2\\cos(x) + 1)(\\cos(x) - 1) = 0$$\nSetting each factor to zero:\n1) $\\cos(x) - 1 = 0 \\implies \\cos(x) = 1 \\implies x = 0$\n2) $2\\cos(x) + 1 = 0 \\implies \\cos(x) = -\\frac{1}{2} \\implies x = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$\nSum of all solutions in $[0, 2\\pi)$:\n$$0 + \\frac{2\\pi}{3} + \\frac{4\\pi}{3} = \\frac{6\\pi}{3} = 2\\pi$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Trigonometric Equations"]
  },
  {
    id: "est2_trig_new_6",
    question: "What is the exact value of $\\tan\\left(\\arcsin\\left(\\frac{3}{5}\\right) + \\arccos\\left(\\frac{5}{13}\\right)\\right)$?",
    options: [
      "$\\frac{63}{16}$",
      "$-\\frac{63}{16}$",
      "$\\frac{33}{56}$",
      "$\\frac{56}{33}$",
      "$-\\frac{33}{56}$"
    ],
    correctAnswer: 1,
    explanation: "Let $\\alpha = \\arcsin\\left(\\frac{3}{5}\\right)$ and $\\beta = \\arccos\\left(\\frac{5}{13}\\right)$. Both angles are in Quadrant I.\n- For $\\alpha$: $\\sin \\alpha = \\frac{3}{5} \\implies \\cos \\alpha = \\frac{4}{5} \\implies \\tan \\alpha = \\frac{3}{4}$\n- For $\\beta$: $\\cos \\beta = \\frac{5}{13} \\implies \\sin \\beta = \\frac{12}{13} \\implies \\tan \\beta = \\frac{12}{5}$\nNow use the tangent addition formula:\n$$\\tan(\\alpha + \\beta) = \\frac{\\tan \\alpha + \\tan \\beta}{1 - \\tan \\alpha \\tan \\beta} = \\frac{\\frac{3}{4} + \\frac{12}{5}}{1 - \\left(\\frac{3}{4}\\right)\\left(\\frac{12}{5}\\right)} = \\frac{\\frac{15 + 48}{20}}{1 - \\frac{36}{20}} = \\frac{\\frac{63}{20}}{-\\frac{16}{20}} = -\\frac{63}{16}$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Inverse Trigonometric Functions"]
  },
  {
    id: "est2_trig_new_7",
    question: "In $\\triangle ABC$, side $a = 8$, side $b = 5$, and the area of the triangle is $10\\sqrt{3}$. If angle $C$ is obtuse, what is the measure of angle $C$?",
    options: [
      "$120^\\circ$",
      "$135^\\circ$",
      "$150^\\circ$",
      "$105^\\circ$",
      "$160^\\circ$"
    ],
    correctAnswer: 0,
    explanation: "The formula for the area of a triangle is:\n$$\\text{Area} = \\frac{1}{2}ab\\sin C$$\nSubstitute the given values:\n$$10\\sqrt{3} = \\frac{1}{2}(8)(5)\\sin C = 20\\sin C$$\n$$\\sin C = \\frac{10\\sqrt{3}}{20} = \\frac{\\sqrt{3}}{2}$$\nSince angle $C$ is an obtuse angle ($90^\\circ < C < 180^\\circ$):\n$$C = 180^\\circ - 60^\\circ = 120^\\circ$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Area of Triangles"]
  },
  {
    id: "est2_trig_new_8",
    question: "What is the period and horizontal phase shift of the trigonometric function $g(x) = 3\\sin\\left(4x - \\pi\\right) - 2$?",
    options: [
      "$\\text{Period} = \\frac{\\pi}{2},\\ \\text{Phase Shift} = \\frac{\\pi}{4}\\text{ to the right}$",
      "$\\text{Period} = \\frac{\\pi}{2},\\ \\text{Phase Shift} = \\pi\\text{ to the right}$",
      "$\\text{Period} = 2\\pi,\\ \\text{Phase Shift} = \\frac{\\pi}{4}\\text{ to the right}$",
      "$\\text{Period} = \\frac{\\pi}{4},\\ \\text{Phase Shift} = \\frac{\\pi}{4}\\text{ to the left}$",
      "$\\text{Period} = \\frac{\\pi}{2},\\ \\text{Phase Shift} = \\frac{\\pi}{4}\\text{ to the left}$"
    ],
    correctAnswer: 0,
    explanation: "Factor out the coefficient of $x$:\n$$g(x) = 3\\sin\\left(4\\left(x - \\frac{\\pi}{4}\\right)\\right) - 2$$\n- **Period**: $T = \\frac{2\\pi}{|B|} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$\n- **Phase Shift**: $\\frac{\\pi}{4}$ units to the right (positive direction).",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Trigonometric Graphs"]
  },
  {
    id: "est2_trig_new_9",
    question: "If $\\sec \\theta + \\tan \\theta = 4$, what is the value of $\\cos \\theta$?",
    options: [
      "$\\frac{4}{17}$",
      "$\\frac{8}{17}$",
      "$\\frac{15}{17}$",
      "$\\frac{1}{4}$",
      "$\\frac{8}{15}$"
    ],
    correctAnswer: 1,
    explanation: "Recall the Pythagorean identity $\\sec^2 \\theta - \\tan^2 \\theta = 1$.\nFactoring gives:\n$$(\\sec \\theta - \\tan \\theta)(\\sec \\theta + \\tan \\theta) = 1$$\nSubstitute $\\sec \\theta + \\tan \\theta = 4$:\n$$\\sec \\theta - \\tan \\theta = \\frac{1}{4}$$\nAdd this to the original equation:\n$$(\\sec \\theta + \\tan \\theta) + (\\sec \\theta - \\tan \\theta) = 4 + \\frac{1}{4} = \\frac{17}{4}$$\n$$2\\sec \\theta = \\frac{17}{4} \\implies \\sec \\theta = \\frac{17}{8}$$\nTherefore, $\\cos \\theta = \\frac{1}{\\sec \\theta} = \\frac{8}{17}$.",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Pythagorean Identities"]
  },
  {
    id: "est2_trig_new_10",
    question: "In $\\triangle ABC$, the side lengths are $a = 7$, $b = 9$, and $c = 12$. What is the value of $\\cos A$?",
    options: [
      "$\\frac{19}{27}$",
      "$\\frac{29}{36}$",
      "$\\frac{22}{27}$",
      "$\\frac{17}{24}$",
      "$\\frac{5}{9}$"
    ],
    correctAnswer: 2,
    explanation: "By the Law of Cosines:\n$$a^2 = b^2 + c^2 - 2bc\\cos A$$\nSubstitute $a = 7$, $b = 9$, $c = 12$:\n$$7^2 = 9^2 + 12^2 - 2(9)(12)\\cos A$$\n$$49 = 81 + 144 - 216\\cos A$$\n$$49 = 225 - 216\\cos A$$\n$$216\\cos A = 225 - 49 = 176$$\n$$\\cos A = \\frac{176}{216} = \\frac{22}{27}$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Law of Cosines"]
  },
  {
    id: "est2_trig_new_11",
    question: "Evaluate the product: $\\cos(20^\\circ)\\cos(40^\\circ)\\cos(80^\\circ)$.",
    options: [
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{8}$",
      "$\\frac{\\sqrt{3}}{8}$",
      "$\\frac{1}{16}$"
    ],
    correctAnswer: 2,
    explanation: "Multiply and divide by $2\\sin(20^\\circ)$:\n$$P = \\frac{2\\sin(20^\\circ)\\cos(20^\\circ)\\cos(40^\\circ)\\cos(80^\\circ)}{2\\sin(20^\\circ)}$$\nUsing $2\\sin \\theta \\cos \\theta = \\sin(2\\theta)$ repeatedly:\n$$P = \\frac{\\sin(40^\\circ)\\cos(40^\\circ)\\cos(80^\\circ)}{2\\sin(20^\\circ)} = \\frac{2\\sin(40^\\circ)\\cos(40^\\circ)\\cos(80^\\circ)}{4\\sin(20^\\circ)} = \\frac{\\sin(80^\\circ)\\cos(80^\\circ)}{4\\sin(20^\\circ)}$$\n$$P = \\frac{2\\sin(80^\\circ)\\cos(80^\\circ)}{8\\sin(20^\\circ)} = \\frac{\\sin(160^\\circ)}{8\\sin(20^\\circ)}$$\nSince $\\sin(160^\\circ) = \\sin(180^\\circ - 20^\\circ) = \\sin(20^\\circ)$:\n$$P = \\frac{\\sin(20^\\circ)}{8\\sin(20^\\circ)} = \\frac{1}{8}$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Product-to-Sum and Double Angle"]
  },
  {
    id: "est2_trig_new_12",
    question: "What is the range of the function $f(x) = 3\\sin^2(x) - 4\\cos^2(x) + 2$?",
    options: [
      "$[-2, 5]$",
      "$[-1, 6]$",
      "$[-4, 3]$",
      "$[0, 7]$",
      "$[-3, 4]$"
    ],
    correctAnswer: 0,
    explanation: "Rewrite the function in terms of $\\sin^2(x)$ using $\\cos^2(x) = 1 - \\sin^2(x)$:\n$$f(x) = 3\\sin^2(x) - 4(1 - \\sin^2(x)) + 2 = 3\\sin^2(x) - 4 + 4\\sin^2(x) + 2 = 7\\sin^2(x) - 2$$\nSince $0 \\le \\sin^2(x) \\le 1$ for all real $x$:\n- Minimum value when $\\sin^2(x) = 0$: $f_{\\min} = 7(0) - 2 = -2$\n- Maximum value when $\\sin^2(x) = 1$: $f_{\\max} = 7(1) - 2 = 5$\nThus, the range is $[-2, 5]$.",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Range of Functions"]
  },
  {
    id: "est2_trig_new_13",
    question: "If $\\sin(x) - \\cos(x) = \\frac{\\sqrt{2}}{3}$, what is the exact value of $\\sin(2x)$?",
    options: [
      "$\\frac{7}{9}$",
      "$\\frac{5}{9}$",
      "$\\frac{1}{3}$",
      "$-\\frac{7}{9}$",
      "$\\frac{2}{9}$"
    ],
    correctAnswer: 0,
    explanation: "Square both sides of the given equation:\n$$(\\sin x - \\cos x)^2 = \\left(\\frac{\\sqrt{2}}{3}\\right)^2$$\n$$\\sin^2 x - 2\\sin x \\cos x + \\cos^2 x = \\frac{2}{9}$$\nUsing the identities $\\sin^2 x + \\cos^2 x = 1$ and $2\\sin x \\cos x = \\sin(2x)$:\n$$1 - \\sin(2x) = \\frac{2}{9}$$\n$$\\sin(2x) = 1 - \\frac{2}{9} = \\frac{7}{9}$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Double Angle Identities"]
  },
  {
    id: "est2_trig_new_14",
    question: "Solve the trigonometric equation $\\tan(2x) = \\sqrt{3}$ for all $x$ in the interval $[0, \\pi)$.",
    options: [
      "$x = \\frac{\\pi}{6}, \\frac{2\\pi}{3}$",
      "$x = \\frac{\\pi}{3}, \\frac{5\\pi}{6}$",
      "$x = \\frac{\\pi}{6}, \\frac{7\\pi}{6}$",
      "$x = \\frac{\\pi}{12}, \\frac{7\\pi}{12}$",
      "$x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}$"
    ],
    correctAnswer: 0,
    explanation: "Since $x \\in [0, \\pi)$, we have $2x \\in [0, 2\\pi)$.\nThe equation $\\tan(2x) = \\sqrt{3}$ has solutions:\n$$2x = \\frac{\\pi}{3} \\quad \\text{or} \\quad 2x = \\frac{\\pi}{3} + \\pi = \\frac{4\\pi}{3}$$\nDividing by $2$:\n$$x = \\frac{\\pi}{6} \\quad \\text{or} \\quad x = \\frac{2\\pi}{3}$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Trigonometric Equations"]
  },
  {
    id: "est2_trig_new_15",
    question: "A regular octagon is inscribed in a circle of radius $R = 10\\text{ cm}$. What is the exact area of the regular octagon?",
    options: [
      "$200\\sqrt{2}\\text{ cm}^2$",
      "$100\\sqrt{2}\\text{ cm}^2$",
      "$400\\sqrt{2}\\text{ cm}^2$",
      "$200\\text{ cm}^2$",
      "$150\\sqrt{3}\\text{ cm}^2$"
    ],
    correctAnswer: 0,
    explanation: "A regular octagon ($n = 8$) inscribed in a circle of radius $R$ is composed of $8$ congruent isosceles triangles with central angle $\\theta = \\frac{360^\\circ}{8} = 45^\\circ$.\nArea of one triangle:\n$$A_{\\triangle} = \\frac{1}{2}R^2 \\sin(45^\\circ) = \\frac{1}{2}(10^2)\\left(\\frac{\\sqrt{2}}{2}\\right) = 25\\sqrt{2}\\text{ cm}^2$$\nTotal area of the octagon:\n$$\\text{Area} = 8 \\times 25\\sqrt{2} = 200\\sqrt{2}\\text{ cm}^2$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Area and Regular Polygons"]
  },
  {
    id: "est2_trig_new_16",
    question: "Which of the following is equivalent to $\\frac{\\sin(3\\theta) + \\sin(\\theta)}{\\cos(3\\theta) + \\cos(\\theta)}$ for all $\\theta$ where the denominator is non-zero?",
    options: [
      "$\\tan(\\theta)$",
      "$\\tan(2\\theta)$",
      "$\\tan(3\\theta)$",
      "$\\cot(2\\theta)$",
      "$2\\tan(2\\theta)$"
    ],
    correctAnswer: 1,
    explanation: "Use the sum-to-product trigonometric identities:\n$$\\sin A + \\sin B = 2\\sin\\left(\\frac{A+B}{2}\\right)\\cos\\left(\\frac{A-B}{2}\\right)$$\n$$\\cos A + \\cos B = 2\\cos\\left(\\frac{A+B}{2}\\right)\\cos\\left(\\frac{A-B}{2}\\right)$$\nFor $A = 3\\theta$ and $B = \\theta$:\n$$\\frac{\\sin(3\\theta) + \\sin(\\theta)}{\\cos(3\\theta) + \\cos(\\theta)} = \\frac{2\\sin(2\\theta)\\cos(\\theta)}{2\\cos(2\\theta)\\cos(\\theta)} = \\frac{\\sin(2\\theta)}{\\cos(2\\theta)} = \\tan(2\\theta)$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Sum-to-Product Identities"]
  },
  {
    id: "est2_trig_new_17",
    question: "If $\\arcsin(x) + \\arccos(y) = \\frac{2\\pi}{3}$, what is the value of $\\arcsin(x) - \\arcsin(y)$?",
    options: [
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{3}$",
      "$0$",
      "$\\frac{\\pi}{2}$",
      "$-\\frac{\\pi}{6}$"
    ],
    correctAnswer: 0,
    explanation: "Use the standard identity $\\arccos(y) = \\frac{\\pi}{2} - \\arcsin(y)$ for $y \\in [-1, 1]$:\n$$\\arcsin(x) + \\left(\\frac{\\pi}{2} - \\arcsin(y)\\right) = \\frac{2\\pi}{3}$$\nSubtract $\\frac{\\pi}{2}$ from both sides:\n$$\\arcsin(x) - \\arcsin(y) = \\frac{2\\pi}{3} - \\frac{\\pi}{2} = \\frac{4\\pi - 3\\pi}{6} = \\frac{\\pi}{6}$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Inverse Trigonometric Functions"]
  },
  {
    id: "est2_trig_new_18",
    question: "Evaluate the exact value of:\n$$\\sin^4\\left(\\frac{\\pi}{8}\\right) + \\sin^4\\left(\\frac{3\\pi}{8}\\right) + \\sin^4\\left(\\frac{5\\pi}{8}\\right) + \\sin^4\\left(\\frac{7\\pi}{8}\\right)$$",
    options: [
      "$\\frac{3}{2}$",
      "$\\frac{3}{4}$",
      "$1$",
      "$\\frac{5}{4}$",
      "$2$"
    ],
    correctAnswer: 0,
    explanation: "Notice symmetry properties on the unit circle:\n- $\\sin\\left(\\frac{7\\pi}{8}\\right) = \\sin\\left(\\pi - \\frac{\\pi}{8}\\right) = \\sin\\left(\\frac{\\pi}{8}\\right)$\n- $\\sin\\left(\\frac{5\\pi}{8}\\right) = \\sin\\left(\\pi - \\frac{3\\pi}{8}\\right) = \\sin\\left(\\frac{3\\pi}{8}\\right) = \\cos\\left(\\frac{\\pi}{8}\\right)$\nThus, the sum becomes:\n$$2\\left[\\sin^4\\left(\\frac{\\pi}{8}\\right) + \\cos^4\\left(\\frac{\\pi}{8}\\right)\\right]$$\nRecall that $a^4 + b^4 = (a^2 + b^2)^2 - 2a^2b^2$:\n$$= 2\\left[\\left(\\sin^2\\frac{\\pi}{8} + \\cos^2\\frac{\\pi}{8}\\right)^2 - 2\\sin^2\\frac{\\pi}{8}\\cos^2\\frac{\\pi}{8}\\right] = 2\\left[1^2 - \\frac{1}{2}\\left(2\\sin\\frac{\\pi}{8}\\cos\\frac{\\pi}{8}\\right)^2\\right]$$\n$$= 2\\left[1 - \\frac{1}{2}\\sin^2\\left(\\frac{\\pi}{4}\\right)\\right] = 2\\left[1 - \\frac{1}{2}\\left(\\frac{1}{2}\\right)\\right] = 2\\left[1 - \\frac{1}{4}\\right] = 2\\left(\\frac{3}{4}\\right) = \\frac{3}{2}$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Advanced Trigonometric Identities"]
  },
  {
    id: "est2_trig_new_19",
    question: "From a point $P$ on level ground, the angle of elevation to the top of a tower is $45^\\circ$. From a point $Q$ located $50\\text{ meters}$ further away from the tower along the same straight line, the angle of elevation is $\\theta$, where $\\tan \\theta = \\frac{3}{5}$. What is the height of the tower?",
    options: [
      "$75\\text{ meters}$",
      "$80\\text{ meters}$",
      "$100\\text{ meters}$",
      "$125\\text{ meters}$",
      "$150\\text{ meters}$"
    ],
    correctAnswer: 0,
    explanation: "Let $h$ be the height of the tower and $d$ be the distance from $P$ to the base of the tower.\n- From point $P$: $\\tan(45^\\circ) = \\frac{h}{d} = 1 \\implies d = h$.\n- From point $Q$: The distance to the base is $d + 50 = h + 50$.\n$$\\tan \\theta = \\frac{h}{h + 50} = \\frac{3}{5}$$\nCross-multiplying:\n$$5h = 3(h + 50) = 3h + 150$$\n$$2h = 150 \\implies h = 75\\text{ meters}$$",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Applications of Trigonometry"]
  },
  {
    id: "est2_trig_new_20",
    question: "If $\\tan(x) + \\sec(x) = 2$, find the value of $\\sin(x)$.",
    options: [
      "$\\frac{3}{5}$",
      "$\\frac{4}{5}$",
      "$\\frac{1}{2}$",
      "$\\frac{5}{13}$",
      "$-\\frac{3}{5}$"
    ],
    correctAnswer: 0,
    explanation: "Using $\\sec^2(x) - \\tan^2(x) = 1$:\n$$(\\sec x - \\tan x)(\\sec x + \\tan x) = 1$$\n$$\\sec x - \\tan x = \\frac{1}{2}$$\nAdding the two equations:\n$$2\\sec x = 2 + \\frac{1}{2} = \\frac{5}{2} \\implies \\sec x = \\frac{5}{4} \\implies \\cos x = \\frac{4}{5}$$\nSubtracting the two equations:\n$$2\\tan x = 2 - \\frac{1}{2} = \\frac{3}{2} \\implies \\tan x = \\frac{3}{4}$$\nThen $\\sin x = \\tan x \\cdot \\cos x = \\left(\\frac{3}{4}\\right)\\left(\\frac{4}{5}\\right) = \\frac{3}{5}$.",
    category: "(-Est2-Trigonometry-new )",
    topics: ["Trigonometry", "Trigonometric Identities"]
  }
];
