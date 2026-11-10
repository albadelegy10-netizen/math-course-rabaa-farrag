import { Question } from '../../types';

export const EST1_2021_DEC_PART5: Question[] = [
  {
    "id": "est1_2021_dec_q42",
    "examId": "EST12021Dec",
    
    
    "type": "multiple-choice",
    "question": "If $3^x \\cdot \\sqrt[4]{3} = 9^{2x}$, then $x =$ ",
    "options": [
      "$4$",
      "$\\frac{1}{12}$",
      "$\\frac{3}{4}$",
      "$\\frac{-7}{4}$"
    ],
    "correctAnswer": 1,
    "explanation": "Rewrite everything with base $3$: $\\sqrt[4]{3} = 3^{1/4}$ and $9^{2x} = (3^2)^{2x} = 3^{4x}$.\\nThe equation becomes: $3^x \\cdot 3^{1/4} = 3^{4x}$.\\n$3^{x + 1/4} = 3^{4x}$.\\nEquating exponents: $x + \\frac{1}{4} = 4x \\Rightarrow 3x = \\frac{1}{4} \\Rightarrow x = \\frac{1}{12}$."
  },
  {
    "id": "est1_2021_dec_q43",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "The math teacher asked four of her students to draw the function $f(x) = \\frac{2}{x - 1}$ in the xy-plane and to write only one piece of information from their obtained curves. The table below shows the results.\\n\\n| Name | Information |\\n|---|---|\\n| Maya | The curve admits a center of symmetry of coordinates (1,0). |\\n| Tarek | The curve admits two vertices. |\\n| Mirna | The curve admits an asymptote of equation $y = 1$. |\\n| Albert | The range of the function is $\\mathbb{R}$. |\\n\\nWhich student could be right?",
    "options": [
      "Maya",
      "Tarek",
      "Mirna",
      "Albert"
    ],
    "correctAnswer": 0,
    "explanation": "The function $f(x) = \\frac{2}{x - 1}$ is a standard hyperbola $y = 1/x$ shifted right by 1 unit. Its vertical asymptote is $x = 1$ and its horizontal asymptote is $y = 0$. The center of symmetry is the intersection of these asymptotes, which is $(1, 0)$. This shows Maya is correct. Mirna's asymptote should be $y=0$, Albert's range should exclude $0$, and rational functions of this type possess symmetry but not classical polynomial vertices."
  },
  {
    "id": "est1_2021_dec_q44",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "If $A = \\frac{\\sqrt{16x^2y^2}}{\\sqrt[3]{-125x^3y^3} + 2xy}$ and $x > 0, y < 0$ then $A =$ ",
    "options": [
      "$\\frac{-4}{7}$",
      "$\\frac{3}{4}$",
      "$\\frac{-4}{3}$",
      "$\\frac{4}{3}$"
    ],
    "correctAnswer": 3,
    "explanation": "Evaluate the numerator: $\\sqrt{16x^2y^2} = 4|xy|$. Since $x > 0$ and $y < 0$, the product $xy$ is negative, so $|xy| = -xy$. The numerator is $-4xy$.\\nEvaluate the denominator expression: $\\sqrt[3]{-125x^3y^3} = -5xy$. Adding $2xy$ gives $-5xy + 2xy = -3xy$.\\nThen $A = \\frac{-4xy}{-3xy} = \\frac{4}{3}$."
  },
  {
    "id": "est1_2021_dec_q45",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "If $f(x) = x^2 + 3$ and $h(x) = x \\cdot f(x) + 3x$, what is $h(-1)$?",
    "options": [
      "1",
      "-7",
      "-5",
      "-4"
    ],
    "correctAnswer": 1,
    "explanation": "First, evaluate $f(-1)$: $f(-1) = (-1)^2 + 3 = 1 + 3 = 4$.\\nNext, evaluate $h(-1)$: $h(-1) = (-1) \\cdot f(-1) + 3(-1) = (-1)(4) - 3 = -4 - 3 = -7$."
  },
  {
    "id": "est1_2021_dec_q46",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "The curve above represents the curve of function $f$ defined over $\\mathbb{R}$.\\nWhat is the solution of $0 \\le f(x) \\le 2$?\\n*(The graph shows a curve that comes from above $y=2$ falling precisely downwards forming bounds around intervals. It intercepts $y=0$ moving up near x=2)*",
    "options": [
      "$[\\frac{-4}{3}, -0.5] \\cup [2, +\\infty[$",
      "$[-2, -1] \\cup [0, +\\infty[$",
      "$[-2.5, -0.5]$",
      "$[\\frac{-4}{3}, -0.5] \\cup [-2, +\\infty[$"
    ],
    "correctAnswer": 0,
    "explanation": "Based on interpreting the graph, the functional values stay within $0$ to $2$ ($0 \\le y \\le 2$) in two distinct x-intervals.\\nThe curve dips to values from $2$ to $0$ bounded exactly by $[\\-4/3, -0.5]$. Further ascending above zero it stabilizes inside $2$ along the entire range beyond $2$, satisfying $[2, +\\infty[$. This matches option A."
  },
  {
    "id": "est1_2021_dec_q47",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "Which of the following represents $3^4 = 81$ in logarithmic form?",
    "options": [
      "$\\log_3 4 = 81$",
      "$\\log_4 81 = 3$",
      "$\\log_3 81 = 4$",
      "$\\log_{81} 3 = 4$"
    ],
    "correctAnswer": 2,
    "explanation": "The exponential equation $b^x = y$ transforms into the logarithmic equation $\\log_b y = x$. Applying this, $3^4 = 81$ becomes $\\log_3 81 = 4$."
  },
  {
    "id": "est1_2021_dec_q48",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "What is the area of the cross section perpendicular to the base of the right cone with a diameter of 6? (The figure is not drawn to scale)\\n*(The figure indicates a cone with a slant height of 9)*",
    "options": [
      "$36\\sqrt{2}$",
      "$6\\sqrt{2}$",
      "$18\\sqrt{2}$",
      "18"
    ],
    "correctAnswer": 2,
    "explanation": "The required cross section through the vertex and diameter forms a triangle with base equal to the diameter $b = 6$ and height equal to the cone's height $h$.\\nFind $h$ using the Pythagorean theorem since the slant height $l = 9$ and the radius $r = 3$: $h^2 + 3^2 = 9^2 \\Rightarrow h^2 = 81 - 9 = 72 \\Rightarrow h = \\sqrt{72} = 6\\sqrt{2}$.\\nThe area of the triangle is $\\frac{1}{2} b h = \\frac{1}{2} (6) (6\\sqrt{2}) = 18\\sqrt{2}$."
  },
  {
    "id": "est1_2021_dec_q49",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "In the xy-plane above, if the coordinates of point B are $(-\\sqrt{3}, -\\sqrt{3})$, what is the measure, in radians, of angle AOB? (Point A is on the positive x-axis)",
    "options": [
      "$\\frac{-\\pi}{4}$",
      "$\\frac{3\\pi}{4}$",
      "$\\frac{-3\\pi}{4}$",
      "$\\frac{4\\pi}{5}$"
    ],
    "correctAnswer": 2,
    "explanation": "Point B is in the 3rd quadrant with identical $x$ and $y$ values, maintaining a reference angle of $45^\\circ$ or $\\frac{\\pi}{4}$. Rotating from the standard positive x-axis negatively into the 3rd quadrant produces $-\\pi + \\frac{\\pi}{4} = \\frac{-3\\pi}{4}$."
  },
  {
    "id": "est1_2021_dec_q50",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "In the figure above, D1 and D2 are two parallel lines.\\nWhich of the following is always true?\\n*(The drawing shows a generic transversal alignment crossing inwards between D1 and D2 defining an acute top angle $x$, obtuse middle joining angle $y$, and an acute bottom angle $z$ on identical alignments)*",
    "options": [
      "$z = x$",
      "$z = x - y$",
      "$x = y - z$",
      "$x + z + y = 180$"
    ],
    "correctAnswer": 2,
    "explanation": "Extending one of the connecting transversal strings to form a triangle inside the boundaries yields angles mapped by vertically opposite connections. Combining them geometrically constructs an exterior angle equivalence where $y = x + z$, implying $x = y - z$."
  }
];
