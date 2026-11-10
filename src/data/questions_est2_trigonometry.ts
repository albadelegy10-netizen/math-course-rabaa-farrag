import { Question } from '../../types';

export const EST2_TRIGONOMETRY: Question[] = [
  {
    id: "est2_trig_1",
    question: "If $\\cos \\theta = -\\frac{3}{5}$ and $\\pi < \\theta < \\frac{3\\pi}{2}$, what is the value of $\\sin(2\\theta)$?",
    options: [
      "$\\frac{7}{25}$",
      "$\\frac{24}{25}$",
      "$-\\frac{24}{25}$",
      "$-\\frac{7}{25}$"
    ],
    correctAnswer: 1,
    explanation: "Since $\\theta$ is in Quadrant III ($\\pi < \\theta < \\frac{3\\pi}{2}$), $\\sin \\theta$ is negative:\n$$\\sin \\theta = -\\sqrt{1 - \\cos^2 \\theta} = -\\sqrt{1 - \\frac{9}{25}} = -\\frac{4}{5}$$\nUsing the double-angle identity for sine:\n$$\\sin(2\\theta) = 2\\sin \\theta \\cos \\theta = 2\\left(-\\frac{4}{5}\\right)\\left(-\\frac{3}{5}\\right) = \\frac{24}{25}$$",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Double Angle Identities"]
  },
  {
    id: "est2_trig_2",
    question: "What is the exact value of $\\tan\\left(\\frac{5\\pi}{12}\\right)$?",
    options: [
      "$2 - \\sqrt{3}$",
      "$\\sqrt{3} + 1$",
      "$2 + \\sqrt{3}$",
      "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$"
    ],
    correctAnswer: 2,
    explanation: "Rewrite $\\frac{5\\pi}{12}$ as the sum of two special angles: $\\frac{5\\pi}{12} = \\frac{\\pi}{4} + \\frac{\\pi}{6}$.\nUsing the angle addition formula for tangent:\n$$\\tan\\left(\\frac{\\pi}{4} + \\frac{\\pi}{6}\\right) = \\frac{\\tan\\frac{\\pi}{4} + \\tan\\frac{\\pi}{6}}{1 - \\tan\\frac{\\pi}{4}\\tan\\frac{\\pi}{6}} = \\frac{1 + \\frac{\\sqrt{3}}{3}}{1 - (1)\\left(\\frac{\\sqrt{3}}{3}\\right)} = \\frac{3 + \\sqrt{3}}{3 - \\sqrt{3}}$$\nMultiplying numerator and denominator by the conjugate $(3 + \\sqrt{3})$:\n$$= \\frac{(3 + \\sqrt{3})^2}{3^2 - (\\sqrt{3})^2} = \\frac{9 + 6\\sqrt{3} + 3}{9 - 3} = \\frac{12 + 6\\sqrt{3}}{6} = 2 + \\sqrt{3}$$",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Compound Angle Formulas"]
  },
  {
    id: "est2_trig_3",
    question: "Solve the trigonometric equation $2\\sin^2 x - 3\\sin x + 1 = 0$ for $0 \\le x < 2\\pi$.",
    options: [
      "$x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$",
      "$x = \\frac{\\pi}{3}, \\frac{\\pi}{2}, \\frac{2\\pi}{3}$",
      "$x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$",
      "$x = \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$"
    ],
    correctAnswer: 0,
    explanation: "Factor the quadratic in terms of $\\sin x$:\n$$(2\\sin x - 1)(\\sin x - 1) = 0$$\nSetting each factor to zero:\n1) $2\\sin x - 1 = 0 \\implies \\sin x = \\frac{1}{2} \\implies x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$\n2) $\\sin x - 1 = 0 \\implies \\sin x = 1 \\implies x = \\frac{\\pi}{2}$\nThus, the solutions in the interval $[0, 2\\pi)$ are $x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$.",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Trigonometric Equations"]
  },
  {
    id: "est2_trig_4",
    question: "Which of the following is equivalent to the expression $\\frac{\\sin x}{1 + \\cos x} + \\frac{1 + \\cos x}{\\sin x}$ for all valid $x$?",
    options: [
      "$2\\sec x$",
      "$2\\csc x$",
      "$2\\tan x$",
      "$2\\cot x$"
    ],
    correctAnswer: 1,
    explanation: "Find a common denominator:\n$$\\frac{\\sin^2 x + (1 + \\cos x)^2}{\\sin x (1 + \\cos x)} = \\frac{\\sin^2 x + 1 + 2\\cos x + \\cos^2 x}{\\sin x(1 + \\cos x)}$$\nSince $\\sin^2 x + \\cos^2 x = 1$:\n$$= \\frac{1 + 1 + 2\\cos x}{\\sin x(1 + \\cos x)} = \\frac{2 + 2\\cos x}{\\sin x(1 + \\cos x)} = \\frac{2(1 + \\cos x)}{\\sin x(1 + \\cos x)} = \\frac{2}{\\sin x} = 2\\csc x$$",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Trigonometric Identities"]
  },
  {
    id: "est2_trig_5",
    question: "In $\\triangle ABC$, side $a = 6$, side $b = 10$, and side $c = 14$. What is the measure of the largest angle in the triangle?",
    options: [
      "$90^\\circ$",
      "$150^\\circ$",
      "$135^\\circ$",
      "$120^\\circ$"
    ],
    correctAnswer: 3,
    explanation: "The largest angle is opposite the longest side, which is angle $C$ opposite side $c = 14$.\nBy the Law of Cosines:\n$$c^2 = a^2 + b^2 - 2ab\\cos C$$\n$$14^2 = 6^2 + 10^2 - 2(6)(10)\\cos C$$\n$$196 = 36 + 100 - 120\\cos C$$\n$$196 = 136 - 120\\cos C$$\n$$60 = -120\\cos C \\implies \\cos C = -\\frac{60}{120} = -\\frac{1}{2}$$\nSince $\\cos C = -\\frac{1}{2}$ for an angle in a triangle ($0^\\circ < C < 180^\\circ$), $C = 180^\\circ - 60^\\circ = 120^\\circ$.",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Law of Cosines"]
  },
  {
    id: "est2_trig_6",
    question: "What is the exact value of $\\cos\\left(2\\arcsin\\left(\\frac{2}{3}\\right)\\right)$?",
    options: [
      "$\\frac{5}{9}$",
      "$\\frac{1}{9}$",
      "$\\frac{7}{9}$",
      "$-\\frac{1}{9}$"
    ],
    correctAnswer: 1,
    explanation: "Let $\\theta = \\arcsin\\left(\\frac{2}{3}\\right)$, which means $\\sin \\theta = \\frac{2}{3}$.\nWe need to find $\\cos(2\\theta)$. Using the double angle formula for cosine in terms of sine:\n$$\\cos(2\\theta) = 1 - 2\\sin^2 \\theta$$\n$$\\cos(2\\theta) = 1 - 2\\left(\\frac{2}{3}\\right)^2 = 1 - 2\\left(\\frac{4}{9}\\right) = 1 - \\frac{8}{9} = \\frac{1}{9}$$",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Inverse Trigonometric Functions"]
  },
  {
    id: "est2_trig_7",
    question: "A sinusoidal wave is modeled by the function $f(x) = -5\\cos\\left(3x - \\frac{\\pi}{2}\\right) + 4$. What are the amplitude, period, and range of $f(x)$?",
    options: [
      "Amplitude: $5$, Period: $\\frac{2\\pi}{3}$, Range: $[-1, 9]$",
      "Amplitude: $-5$, Period: $\\frac{2\\pi}{3}$, Range: $[-1, 9]$",
      "Amplitude: $5$, Period: $3\\pi$, Range: $[4, 9]$",
      "Amplitude: $5$, Period: $\\frac{\\pi}{3}$, Range: $[-5, 5]$"
    ],
    correctAnswer: 0,
    explanation: "For the function $f(x) = A\\cos(Bx - C) + D$:\n- Amplitude is $|A| = |-5| = 5$.\n- Period is $\\frac{2\\pi}{|B|} = \\frac{2\\pi}{3}$.\n- Vertical shift is $D = 4$, so the midline is $y = 4$.\n- Minimum value $= 4 - 5 = -1$; Maximum value $= 4 + 5 = 9$.\n- Range is $[-1, 9]$.",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Trigonometric Graphs"]
  },
  {
    id: "est2_trig_8",
    question: "In $\\triangle ABC$, $\\angle A = 30^\\circ$, $a = 7$, and $b = 10$. How many distinct triangles can be formed with these given measurements?",
    options: [
      "$0$",
      "$1$",
      "$2$",
      "Infinitely many"
    ],
    correctAnswer: 2,
    explanation: "This is the ambiguous case (SSA) of the Law of Sines.\nFirst, calculate the perpendicular altitude from $C$ to side $c$:\n$$h = b\\sin A = 10\\sin(30^\\circ) = 10\\left(\\frac{1}{2}\\right) = 5$$\nCompare the given opposite side $a = 7$ with the height $h = 5$ and the adjacent side $b = 10$:\n$$h < a < b \\implies 5 < 7 < 10$$\nSince side $a$ is strictly greater than the altitude $h$ and strictly less than side $b$, exactly $2$ distinct triangles can be formed (one acute and one obtuse).",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Law of Sines"]
  },
  {
    id: "est2_trig_9",
    question: "If $\\tan \\alpha = \\frac{1}{2}$ and $\\tan \\beta = \\frac{1}{3}$, where $\\alpha$ and \\beta are acute angles, what is the value of $\\alpha + \\beta$?",
    options: [
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{2}$"
    ],
    correctAnswer: 1,
    explanation: "Use the angle addition identity for tangent:\n$$\\tan(\\alpha + \\beta) = \\frac{\\tan \\alpha + \\tan \\beta}{1 - \\tan \\alpha \\tan \\beta} = \\frac{\\frac{1}{2} + \\frac{1}{3}}{1 - \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{3}\\right)} = \\frac{\\frac{5}{6}}{1 - \\frac{1}{6}} = \\frac{\\frac{5}{6}}{\\frac{5}{6}} = 1$$\nSince $\\alpha$ and $\\beta$ are acute angles ($0 < \\alpha, \\beta < \\frac{\\pi}{2}$), $0 < \\alpha + \\beta < \\pi$.\nTherefore, $\\alpha + \\beta = \\arctan(1) = \\frac{\\pi}{4}$ ($45^\\circ$).",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Compound Angle Formulas"]
  },
  {
    id: "est2_trig_10",
    question: "A sector of a circle with radius $r = 12\\text{ cm}$ has a central angle of $\\theta = \\frac{2\\pi}{3}\\text{ radians}$. What is the area of the sector and the length of its subtended arc?",
    options: [
      "$\\text{Area} = 96\\pi\\text{ cm}^2, \\text{Arc Length} = 8\\pi\\text{ cm}$",
      "$\\text{Area} = 48\\pi\\text{ cm}^2, \\text{Arc Length} = 8\\pi\\text{ cm}$",
      "$\\text{Area} = 48\\pi\\text{ cm}^2, \\text{Arc Length} = 16\\pi\\text{ cm}$",
      "$\\text{Area} = 24\\pi\\text{ cm}^2, \\text{Arc Length} = 4\\pi\\text{ cm}$"
    ],
    correctAnswer: 1,
    explanation: "Using the circle sector formulas where $\\theta$ is in radians:\n- **Arc Length**: $s = r\\theta = 12\\left(\\frac{2\\pi}{3}\\right) = 8\\pi\\text{ cm}$\n- **Sector Area**: $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(12^2)\\left(\\frac{2\\pi}{3}\\right) = \\frac{1}{2}(144)\\left(\\frac{2\\pi}{3}\\right) = 48\\pi\\text{ cm}^2$",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Radians and Sectors"]
  },
  {
    id: "est2_trig_11",
    question: "If $\\sec x - \\tan x = \\frac{1}{3}$, what is the value of $\\sec x + \\tan x$?",
    options: [
      "$\\frac{1}{3}$",
      "$3$",
      "$\\frac{2}{3}$",
      "$\\frac{10}{3}$"
    ],
    correctAnswer: 1,
    explanation: "Recall the fundamental Pythagorean identity $\\sec^2 x - \\tan^2 x = 1$.\nFactoring as a difference of squares:\n$$(\\sec x - \\tan x)(\\sec x + \\tan x) = 1$$\nSubstitute the given value $\\sec x - \\tan x = \\frac{1}{3}$:\n$$\\frac{1}{3}(\\sec x + \\tan x) = 1 \\implies \\sec x + \\tan x = 3$$",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Pythagorean Identities"]
  },
  {
    id: "est2_trig_12",
    question: "What is the domain and range of the inverse trigonometric function $f(x) = \\arcsin(2x - 1)$?",
    options: [
      "Domain: $[0, 1]$, Range: $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$",
      "Domain: $[-1, 1]$, Range: $[-\\pi, \\pi]$",
      "Domain: $[-0.5, 0.5]$, Range: $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$",
      "Domain: $[0, 1]$, Range: $[0, \\pi]$"
    ],
    correctAnswer: 0,
    explanation: "The domain of $\\arcsin(u)$ is $-1 \\le u \\le 1$:\n$$-1 \\le 2x - 1 \\le 1$$\nAdd 1 to all sides:\n$$0 \\le 2x \\le 2 \\implies 0 \\le x \\le 1$$\nSo the domain is $[0, 1]$.\nThe range of the principal $\\arcsin$ branch is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Inverse Trigonometric Functions"]
  },
  {
    id: "est2_trig_13",
    question: "Find all solutions to the equation $\\cos(2x) = \\sin x$ in the interval $[0, 2\\pi)$.",
    options: [
      "$x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$",
      "$x = \\frac{\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$",
      "$x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$",
      "$x = \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$"
    ],
    correctAnswer: 2,
    explanation: "Use the double angle formula $\\cos(2x) = 1 - 2\\sin^2 x$:\n$$1 - 2\\sin^2 x = \\sin x$$\n$$2\\sin^2 x + \\sin x - 1 = 0$$\nFactor the quadratic:\n$$(2\\sin x - 1)(\\sin x + 1) = 0$$\n- Case 1: $2\\sin x - 1 = 0 \\implies \\sin x = \\frac{1}{2} \\implies x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$\n- Case 2: $\\sin x + 1 = 0 \\implies \\sin x = -1 \\implies x = \\frac{3\\pi}{2}$\nTherefore, the complete set of solutions in $[0, 2\\pi)$ is $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$.",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Trigonometric Equations"]
  },
  {
    id: "est2_trig_14",
    question: "An observer standing at ground level measures the angle of elevation to the top of a building as $30^\\circ$. After walking $60\\text{ meters}$ directly toward the building, the angle of elevation increases to $60^\\circ$. What is the height of the building?",
    options: [
      "$60\\sqrt{3}\\text{ meters}$",
      "$30\\sqrt{3}\\text{ meters}$",
      "$30\\text{ meters}$",
      "$45\\sqrt{3}\\text{ meters}$"
    ],
    correctAnswer: 1,
    explanation: "Let $h$ be the height of the building, and let $d$ be the distance from the second observation point to the base of the building.\nFrom the second point: $\\tan(60^\\circ) = \\frac{h}{d} \\implies d = \\frac{h}{\\sqrt{3}}$.\nFrom the first point: $\\tan(30^\\circ) = \\frac{h}{60 + d} \\implies \\frac{1}{\\sqrt{3}} = \\frac{h}{60 + \\frac{h}{\\sqrt{3}}}$.\nCross-multiplying:\n$$60 + \\frac{h}{\\sqrt{3}} = h\\sqrt{3}$$\n$$60 = h\\sqrt{3} - \\frac{h}{\\sqrt{3}} = h\\left(\\frac{3 - 1}{\\sqrt{3}}\\right) = \\frac{2h}{\\sqrt{3}}$$\n$$2h = 60\\sqrt{3} \\implies h = 30\\sqrt{3}\\text{ meters}$$",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Applications of Trigonometry"]
  },
  {
    id: "est2_trig_15",
    question: "If $\\cos \\theta = \\frac{1}{4}$ with $0 < \\theta < \\frac{\\pi}{2}$, what is the value of $\\cos\\left(\\frac{\\theta}{2}\\right)$?",
    options: [
      "$\\frac{\\sqrt{6}}{4}$",
      "$\\frac{\\sqrt{5}}{4}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{\\sqrt{10}}{4}$"
    ],
    correctAnswer: 3,
    explanation: "Using the half-angle formula for cosine:\n$$\\cos\\left(\\frac{\\theta}{2}\\right) = \\pm\\sqrt{\\frac{1 + \\cos \\theta}{2}}$$\nSince $0 < \\theta < \\frac{\\pi}{2}$, the half-angle satisfies $0 < \\frac{\\theta}{2} < \\frac{\\pi}{4}$, where cosine is positive:\n$$\\cos\\left(\\frac{\\theta}{2}\\right) = \\sqrt{\\frac{1 + \\frac{1}{4}}{2}} = \\sqrt{\\frac{\\frac{5}{4}}{2}} = \\sqrt{\\frac{5}{8}} = \\frac{\\sqrt{5}}{2\\sqrt{2}} = \\frac{\\sqrt{10}}{4}$$",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Half-Angle Formulas"]
  },
  {
    id: "est2_trig_16",
    question: "A parallelogram has adjacent side lengths of $8\\text{ cm}$ and $15\\text{ cm}$, and the angle between these two sides is $150^\\circ$. What is the area of the parallelogram?",
    options: [
      "$60\\text{ cm}^2$",
      "$60\\sqrt{3}\\text{ cm}^2$",
      "$120\\text{ cm}^2$",
      "$30\\text{ cm}^2$"
    ],
    correctAnswer: 0,
    explanation: "The area of a parallelogram with side lengths $a, b$ and included angle $\\theta$ is:\n$$\\text{Area} = ab\\sin \\theta$$\n$$\\text{Area} = (8)(15)\\sin(150^\\circ)$$\nSince $\\sin(150^\\circ) = \\sin(180^\\circ - 30^\\circ) = \\sin(30^\\circ) = \\frac{1}{2}$:\n$$\\text{Area} = 120 \\times \\frac{1}{2} = 60\\text{ cm}^2$$",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Area of Figures"]
  },
  {
    id: "est2_trig_17",
    question: "Which of the following functions has a period of $6$ and an amplitude of $4$?",
    options: [
      "$f(x) = 4\\sin(6\\pi x)$",
      "$f(x) = 4\\sin\\left(\\frac{\\pi}{3}x\\right)$",
      "$f(x) = 4\\sin\\left(\\frac{\\pi}{6}x\\right)$",
      "$f(x) = 6\\sin(4x)$"
    ],
    correctAnswer: 1,
    explanation: "For the sine function $f(x) = A\\sin(Bx)$:\n- Amplitude is $|A| = 4$.\n- Period $T = \\frac{2\\pi}{B} = 6 \\implies B = \\frac{2\\pi}{6} = \\frac{\\pi}{3}$.\nTherefore, the matching function is $f(x) = 4\\sin\\left(\\frac{\\pi}{3}x\\right)$.",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Trigonometric Graphs"]
  },
  {
    id: "est2_trig_18",
    question: "If $\\tan \\theta + \\cot \\theta = 3$, what is the value of $\\tan^2 \\theta + \\cot^2 \\theta$?",
    options: [
      "$9$",
      "$11$",
      "$7$",
      "$5$"
    ],
    correctAnswer: 2,
    explanation: "Square both sides of the given equation:\n$$(\\tan \\theta + \\cot \\theta)^2 = 3^2$$\n$$\\tan^2 \\theta + 2\\tan \\theta \\cot \\theta + \\cot^2 \\theta = 9$$\nSince $\\tan \\theta \\cot \\theta = 1$:\n$$\\tan^2 \\theta + 2(1) + \\cot^2 \\theta = 9$$\n$$\\tan^2 \\theta + \\cot^2 \\theta = 9 - 2 = 7$$",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Algebraic Trigonometric Identities"]
  },
  {
    id: "est2_trig_19",
    question: "Evaluate the exact value of the trigonometric expression $\\cos(105^\\circ)$.",
    options: [
      "$\\frac{\\sqrt{2} - \\sqrt{6}}{4}$",
      "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$",
      "$-\\frac{\\sqrt{6} + \\sqrt{2}}{4}$",
      "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$"
    ],
    correctAnswer: 0,
    explanation: "Express $105^\\circ$ as the sum of special angles $60^\\circ + 45^\\circ$.\nUsing the cosine addition formula:\n$$\\cos(60^\\circ + 45^\\circ) = \\cos 60^\\circ \\cos 45^\\circ - \\sin 60^\\circ \\sin 45^\\circ$$\n$$= \\left(\\frac{1}{2}\\right)\\left(\\frac{\\sqrt{2}}{2}\\right) - \\left(\\frac{\\sqrt{3}}{2}\\right)\\left(\\frac{\\sqrt{2}}{2}\\right) = \\frac{\\sqrt{2} - \\sqrt{6}}{4}$$",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Compound Angle Formulas"]
  },
  {
    id: "est2_trig_20",
    question: "What is the exact value of $\\sin\\left(\\arccos\\left(-\\frac{5}{13}\\right)\\right)$?",
    options: [
      "$-\\frac{12}{13}$",
      "$\\frac{5}{13}$",
      "$\\frac{12}{13}$",
      "$-\\frac{5}{13}$"
    ],
    correctAnswer: 2,
    explanation: "Let $\\theta = \\arccos\\left(-\\frac{5}{13}\\right)$.\nBy definition, the range of $\\arccos(x)$ is $[0, \\pi]$. Since the argument $-\\frac{5}{13}$ is negative, $\\theta$ lies in Quadrant II ($\\frac{\\pi}{2} < \\theta < \\pi$).\nIn Quadrant II, sine is positive:\n$$\\sin \\theta = \\sqrt{1 - \\cos^2 \\theta} = \\sqrt{1 - \\left(-\\frac{5}{13}\\right)^2} = \\sqrt{1 - \\frac{25}{169}} = \\sqrt{\\frac{144}{169}} = \\frac{12}{13}$$",
    category: "(152-Est2Trigonometry )",
    topics: ["Trigonometry", "Inverse Trigonometric Functions"]
  }
];
