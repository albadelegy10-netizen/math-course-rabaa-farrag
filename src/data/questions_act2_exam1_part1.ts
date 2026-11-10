import { Question } from '../../types';

export const ACT2_EXAM1_PART1: Question[] = [
  {
    id: "act2_exam1_1",
    question: "The perimeter of a square is equal to the circumference of a circle whose area is $20 \\text{ in}^2$. What is the area in square inches if the square?",
    options: [
      "$5\\pi$",
      "5",
      "$20\\pi$",
      "20"
    ],
    correctAnswer: 0,
    explanation: "Area of circle = $\\pi r^2 = 20 \\Rightarrow r = \\sqrt{\\frac{20}{\\pi}}$. Circumference = $2\\pi r = 2\\pi\\sqrt{\\frac{20}{\\pi}} = 2\\sqrt{20\\pi}$. Perimeter of square = $4s = 2\\sqrt{20\\pi} \\Rightarrow s = \\frac{\\sqrt{20\\pi}}{2}$. Area of square = $s^2 = \\frac{20\\pi}{4} = 5\\pi$.",
    category: "Geometry",
    topics: ["Area", "Perimeter", "Circles", "Squares"]
  },
  {
    id: "act2_exam1_2",
    question: "The large circle has a radius of 5 ft and the small circle has a radius of 2 ft. The distance between the two centers of the circles is 9 ft. if the large circle, rotates 10 times the small circle rotates how many times?\n\n<svg viewBox=\"0 0 300 150\" width=\"300\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n  <circle cx=\"100\" cy=\"75\" r=\"50\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  <circle cx=\"220\" cy=\"50\" r=\"20\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  <line x1=\"100\" y1=\"75\" x2=\"100\" y2=\"125\" stroke=\"black\" stroke-width=\"1\"/>\n  <text x=\"90\" y=\"105\" font-size=\"12\">5</text>\n  <line x1=\"220\" y1=\"50\" x2=\"220\" y2=\"70\" stroke=\"black\" stroke-width=\"1\"/>\n  <text x=\"210\" y=\"65\" font-size=\"12\">2</text>\n  <line x1=\"100\" y1=\"25\" x2=\"220\" y2=\"30\" stroke=\"black\" stroke-width=\"1\"/>\n  <line x1=\"100\" y1=\"125\" x2=\"220\" y2=\"70\" stroke=\"black\" stroke-width=\"1\"/>\n  <circle cx=\"100\" cy=\"75\" r=\"2\" fill=\"black\"/>\n  <circle cx=\"220\" cy=\"50\" r=\"2\" fill=\"black\"/>\n</svg>",
    options: [
      "4",
      "10",
      "25",
      "50"
    ],
    correctAnswer: 2,
    explanation: "The distance traveled by the belt is the same for both circles. Circumference of large circle = $10\\pi$. Distance for 10 rotations = $100\\pi$. Circumference of small circle = $4\\pi$. Number of rotations = $\\frac{100\\pi}{4\\pi} = 25$.",
    category: "Geometry",
    topics: ["Circles", "Circumference", "Rotations"]
  },
  {
    id: "act2_exam1_3",
    question: "A worker wants to make 10 pounds of mixed nuts using peanuts and cashews. He buys Peanuts at 3.75 dollars per pounds and cashews at 8 dollars per pound. If 1 pound of his mixture is valued at 5.45 dollars how many of peanuts did, he buy?",
    options: [
      "6",
      "10",
      "7.25",
      "8"
    ],
    correctAnswer: 0,
    explanation: "Let $p$ be the pounds of peanuts and $c$ be the pounds of cashews. $p + c = 10$. The total value is $3.75p + 8c = 5.45(10) = 54.5$. Substitute $c = 10 - p$: $3.75p + 8(10 - p) = 54.5 \\Rightarrow 3.75p + 80 - 8p = 54.5 \\Rightarrow -4.25p = -25.5 \\Rightarrow p = 6$.",
    category: "Algebra",
    topics: ["Word Problems", "Systems of Equations"]
  },
  {
    id: "act2_exam1_4",
    question: "A garden with measurements 4m x 6m is surrounded by a sidewalk on all sides. The area of the garden with the sidewalk is $40 \\text{ m}^2$ what is the width of the sidewalk?",
    options: [
      "$\\frac{-5+\\sqrt{41}}{2}$",
      "$\\frac{-5-\\sqrt{41}}{2}$",
      "5",
      "41"
    ],
    correctAnswer: 0,
    explanation: "Let $x$ be the width of the sidewalk. The dimensions of the garden with the sidewalk are $(4 + 2x)$ and $(6 + 2x)$. The area is $(4 + 2x)(6 + 2x) = 40 \\Rightarrow 24 + 8x + 12x + 4x^2 = 40 \\Rightarrow 4x^2 + 20x - 16 = 0 \\Rightarrow x^2 + 5x - 4 = 0$. Using the quadratic formula: $x = \\frac{-5 \\pm \\sqrt{25 - 4(1)(-4)}}{2} = \\frac{-5 \\pm \\sqrt{41}}{2}$. Since width must be positive, $x = \\frac{-5+\\sqrt{41}}{2}$.",
    category: "Algebra",
    topics: ["Quadratic Equations", "Area"]
  },
  {
    id: "act2_exam1_5",
    question: "Sarah invested 5000 dollars with 3% simple annual interest rate. What will be the interest in sarah's account after t years?",
    options: [
      "15T",
      "150T",
      "3T",
      "1.5T"
    ],
    correctAnswer: 1,
    explanation: "Simple interest formula: $I = Prt$. $I = 5000 \\times 0.03 \\times t = 150t$.",
    category: "Algebra",
    topics: ["Simple Interest"]
  },
  {
    id: "act2_exam1_6",
    question: "The table below shows the number of bacteria increasing exponentially. What will the value of y be when x=10 ?\n\n<svg viewBox=\"0 0 200 120\" width=\"200\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"0\" y=\"0\" width=\"200\" height=\"120\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n  <line x1=\"100\" y1=\"0\" x2=\"100\" y2=\"120\" stroke=\"black\" stroke-width=\"1\"/>\n  <line x1=\"0\" y1=\"24\" x2=\"200\" y2=\"24\" stroke=\"black\" stroke-width=\"1\"/>\n  <line x1=\"0\" y1=\"48\" x2=\"200\" y2=\"48\" stroke=\"black\" stroke-width=\"1\"/>\n  <line x1=\"0\" y1=\"72\" x2=\"200\" y2=\"72\" stroke=\"black\" stroke-width=\"1\"/>\n  <line x1=\"0\" y1=\"96\" x2=\"200\" y2=\"96\" stroke=\"black\" stroke-width=\"1\"/>\n  <text x=\"50\" y=\"17\" text-anchor=\"middle\" font-weight=\"bold\">X</text>\n  <text x=\"150\" y=\"17\" text-anchor=\"middle\" font-weight=\"bold\">Y</text>\n  <text x=\"50\" y=\"41\" text-anchor=\"middle\">0</text>\n  <text x=\"150\" y=\"41\" text-anchor=\"middle\">1</text>\n  <text x=\"50\" y=\"65\" text-anchor=\"middle\">1</text>\n  <text x=\"150\" y=\"65\" text-anchor=\"middle\">2</text>\n  <text x=\"50\" y=\"89\" text-anchor=\"middle\">2</text>\n  <text x=\"150\" y=\"89\" text-anchor=\"middle\">4</text>\n  <text x=\"50\" y=\"113\" text-anchor=\"middle\">3</text>\n  <text x=\"150\" y=\"113\" text-anchor=\"middle\">8</text>\n</svg>",
    options: [
      "124",
      "1024",
      "2015",
      "200"
    ],
    correctAnswer: 1,
    explanation: "The relationship is $y = 2^x$. When $x = 10$, $y = 2^{10} = 1024$.",
    category: "Algebra",
    topics: ["Exponential Growth"]
  },
  {
    id: "act2_exam1_7",
    question: "If X=2Y, which of the following is the value of X?\n\n<svg viewBox=\"0 0 200 100\" width=\"200\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"10,80 190,80 150,20\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  <text x=\"30\" y=\"70\" font-size=\"14\">30</text>\n  <text x=\"145\" y=\"40\" font-size=\"14\">X</text>\n  <text x=\"170\" y=\"70\" font-size=\"14\">Y</text>\n</svg>",
    options: [
      "60",
      "120",
      "30",
      "45",
      "100"
    ],
    correctAnswer: 4,
    explanation: "The sum of angles in a triangle is $180^\\circ$. So, $30 + X + Y = 180$. Given $X = 2Y$, we have $30 + 2Y + Y = 180 \\Rightarrow 3Y = 150 \\Rightarrow Y = 50$. Then $X = 2(50) = 100$.",
    category: "Geometry",
    topics: ["Triangles", "Angles"]
  },
  {
    id: "act2_exam1_8",
    question: "IF Measure of Arc AED = 84, What is the Measure of Angle ACE?\n\n<svg viewBox=\"0 0 200 150\" width=\"200\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n  <circle cx=\"120\" cy=\"75\" r=\"50\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  <line x1=\"20\" y1=\"75\" x2=\"160\" y2=\"45\" stroke=\"black\" stroke-width=\"2\"/>\n  <line x1=\"20\" y1=\"75\" x2=\"160\" y2=\"105\" stroke=\"black\" stroke-width=\"2\"/>\n  <line x1=\"80\" y1=\"105\" x2=\"160\" y2=\"45\" stroke=\"black\" stroke-width=\"1\"/>\n  <line x1=\"80\" y1=\"45\" x2=\"160\" y2=\"105\" stroke=\"black\" stroke-width=\"1\"/>\n  <text x=\"10\" y=\"80\" font-size=\"12\">C</text>\n  <text x=\"70\" y=\"40\" font-size=\"12\">B</text>\n  <text x=\"170\" y=\"40\" font-size=\"12\">A</text>\n  <text x=\"70\" y=\"120\" font-size=\"12\">D</text>\n  <text x=\"170\" y=\"120\" font-size=\"12\">E</text>\n  <line x1=\"115\" y1=\"70\" x2=\"125\" y2=\"80\" stroke=\"black\" stroke-width=\"2\"/>\n  <line x1=\"115\" y1=\"80\" x2=\"125\" y2=\"70\" stroke=\"black\" stroke-width=\"2\"/>\n</svg>",
    options: [
      "24",
      "84",
      "42",
      "168"
    ],
    correctAnswer: 2,
    explanation: "The image shows two secants intersecting outside the circle. The angle is half the difference of the intercepted arcs. However, the tick marks suggest chords are equal or there's a specific relationship. If arc AED is 84, and the angle ACE intercepts arc AE and arc BD. Assuming the question implies angle ACE is an inscribed angle or similar, or maybe arc BD is 0. If angle ACE = 84 / 2 = 42.",
    category: "Geometry",
    topics: ["Circles", "Angles", "Arcs"]
  },
  {
    id: "act2_exam1_9",
    question: "Jade bought two similar planters. The second planter has dimensions 3 times as large as the first planter. if the first planter gets filled using 1 bag of soil, how many bags will the second planter need to be filled?",
    options: [
      "9",
      "81",
      "27",
      "3"
    ],
    correctAnswer: 2,
    explanation: "The ratio of the volumes of similar figures is the cube of the ratio of their corresponding linear dimensions. Since the dimensions are 3 times as large, the volume is $3^3 = 27$ times as large. Therefore, it will need 27 bags of soil.",
    category: "Geometry",
    topics: ["Volume", "Similar Figures"]
  },
  {
    id: "act2_exam1_10",
    question: "If $f(x) = y$, a point with coordinates (x,y) lies if the first number of the coordinates lies 3 less than half the second number?",
    options: [
      "$y = \\frac{1}{2}x - 3$",
      "$y = 2x - 3$",
      "$y = \\frac{1}{2}x + 3$",
      "$y = 2x - 3$"
    ],
    correctAnswer: 0,
    explanation: "The problem statement says 'the first number of the coordinates (x) lies 3 less than half the second number (y)'. This translates to $x = \\frac{1}{2}y - 3$. However, looking at the options, it seems the intended meaning was 'the second number (y) is 3 less than half the first number (x)', which gives $y = \\frac{1}{2}x - 3$.",
    category: "Algebra",
    topics: ["Linear Equations", "Word Problems"]
  },
  {
    id: "act2_exam1_11",
    question: "Triangle ABC is isosceles. Find the Perimeter of ABCED.\n\n<svg viewBox=\"0 0 150 200\" width=\"150\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"25,150 125,150 125,50 25,50\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  <polygon points=\"25,50 125,50 75,10\" fill=\"gray\" stroke=\"black\" stroke-width=\"2\"/>\n  <text x=\"70\" y=\"8\" font-size=\"12\">A</text>\n  <text x=\"10\" y=\"55\" font-size=\"12\">B</text>\n  <text x=\"130\" y=\"55\" font-size=\"12\">C</text>\n  <text x=\"10\" y=\"155\" font-size=\"12\">D</text>\n  <text x=\"130\" y=\"155\" font-size=\"12\">E</text>\n  <text x=\"40\" y=\"25\" font-size=\"12\">1</text>\n  <text x=\"105\" y=\"25\" font-size=\"12\">1</text>\n</svg>",
    options: [
      "$2 + \\sqrt{3}$",
      "$2 + 3\\sqrt{2}$",
      "$2\\sqrt{3}$",
      "$3\\sqrt{2}$"
    ],
    correctAnswer: 1,
    explanation: "Triangle ABC is an isosceles right triangle? The image shows a square BCED and an isosceles triangle ABC on top. The sides AB and AC are 1. If angle A is $90^\\circ$, then $BC = \\sqrt{1^2 + 1^2} = \\sqrt{2}$. Since BCED is a square (implied by the drawing), the sides BD, DE, EC are all $\\sqrt{2}$. The perimeter of ABCED is $AB + AC + CE + ED + DB = 1 + 1 + \\sqrt{2} + \\sqrt{2} + \\sqrt{2} = 2 + 3\\sqrt{2}$.",
    category: "Geometry",
    topics: ["Perimeter", "Triangles", "Squares"]
  },
  {
    id: "act2_exam1_12",
    question: "What proves $AB = 2$?\n\n<svg viewBox=\"0 0 150 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n  <circle cx=\"75\" cy=\"75\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  <line x1=\"15\" y1=\"75\" x2=\"135\" y2=\"75\" stroke=\"black\" stroke-width=\"1\"/>\n  <line x1=\"75\" y1=\"15\" x2=\"75\" y2=\"135\" stroke=\"black\" stroke-width=\"1\"/>\n  <rect x=\"75\" y=\"15\" width=\"42.4\" height=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  <line x1=\"75\" y1=\"75\" x2=\"117.4\" y2=\"15\" stroke=\"black\" stroke-width=\"1\"/>\n  <text x=\"110\" y=\"40\" font-size=\"12\">B</text>\n  <text x=\"80\" y=\"70\" font-size=\"12\">A</text>\n  <text x=\"120\" y=\"85\" font-size=\"12\">2</text>\n</svg>",
    options: [
      "Diagonal of the rectangle are congruent",
      "The radius = 2",
      "The second diagonal = the radius",
      "All the above"
    ],
    correctAnswer: 3,
    explanation: "The figure shows a rectangle inscribed in a quarter circle. The diagonal of the rectangle from the center to the corner on the circle is a radius. The other diagonal AB is equal in length to the first diagonal. Since the radius is 2, the diagonal is 2, so AB = 2. All statements contribute to this proof.",
    category: "Geometry",
    topics: ["Circles", "Rectangles", "Diagonals"]
  },
  {
    id: "act2_exam1_13",
    question: "Find the area of a regular hexagon with side length 4 m. Round to the nearest tenth.\n\n<svg viewBox=\"0 0 150 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"75,15 125,45 125,105 75,135 25,105 25,45\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  <line x1=\"75\" y1=\"75\" x2=\"75\" y2=\"135\" stroke=\"black\" stroke-width=\"1\" stroke-dasharray=\"4\"/>\n  <line x1=\"75\" y1=\"75\" x2=\"125\" y2=\"105\" stroke=\"black\" stroke-width=\"1\"/>\n  <text x=\"130\" y=\"75\" font-size=\"12\">4 m</text>\n  <text x=\"30\" y=\"80\" font-size=\"10\">Apothem</text>\n  <text x=\"90\" y=\"145\" font-size=\"10\">2 m</text>\n</svg>",
    options: [
      "$83.1 \\text{ m}^2$",
      "$24 \\text{ m}^2$",
      "$41.6 \\text{ m}^2$",
      "$20.8 \\text{ m}^2$"
    ],
    correctAnswer: 2,
    explanation: "A regular hexagon is composed of 6 equilateral triangles. The area of one equilateral triangle with side $s=4$ is $\\frac{\\sqrt{3}}{4}s^2 = \\frac{\\sqrt{3}}{4}(16) = 4\\sqrt{3}$. The total area is $6 \\times 4\\sqrt{3} = 24\\sqrt{3} \\approx 41.569 \\approx 41.6 \\text{ m}^2$.",
    category: "Geometry",
    topics: ["Area", "Polygons", "Hexagons"]
  },
  {
    id: "act2_exam1_14",
    question: "In this figure each of the 3 circles is tangent to the other. Each side of the triangle is tangent to 2 of the circles. Given that each circle has a radius of 3, what is the perimeter of the triangle?\n\n<svg viewBox=\"0 0 150 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"75,10 140,130 10,130\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  <circle cx=\"75\" cy=\"55\" r=\"20\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n  <circle cx=\"55\" cy=\"95\" r=\"20\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n  <circle cx=\"95\" cy=\"95\" r=\"20\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n</svg>",
    options: [
      "$18 + 18\\sqrt{2}$",
      "$18 + 18\\sqrt{3}$",
      "$36 + 18\\sqrt{2}$",
      "$36 + 36\\sqrt{2}$"
    ],
    correctAnswer: 1,
    explanation: "The centers of the three circles form an equilateral triangle with side length $2r = 6$. The distance from the corner of the large triangle to the point of tangency is $r\\sqrt{3} = 3\\sqrt{3}$. The side of the large triangle is $r\\sqrt{3} + 2r + r\\sqrt{3} = 2r + 2r\\sqrt{3} = 6 + 6\\sqrt{3}$. The perimeter is $3 \\times (6 + 6\\sqrt{3}) = 18 + 18\\sqrt{3}$.",
    category: "Geometry",
    topics: ["Perimeter", "Triangles", "Circles", "Tangents"]
  },
  {
    id: "act2_exam1_15",
    question: "Ali invested 5000$ in an account that paid him 32% compound interest, what will the balance of his account be after t years",
    options: [
      "$1600t$",
      "$5000 + 1600t$",
      "$5000(132)t$",
      "$5000(1.32)^t$"
    ],
    correctAnswer: 3,
    explanation: "Compound interest formula: $A = P(1 + r)^t$. Here $P = 5000$, $r = 0.32$. So $A = 5000(1 + 0.32)^t = 5000(1.32)^t$.",
    category: "Algebra",
    topics: ["Compound Interest", "Exponential Functions"]
  }
];
