import { Question } from "./types";

export const SAT_2025_MARCH_FORM_D: Question[] = [
  {
    id: "sat_2025_march_d_m1_1",
    question: "The cost y, in dollars, for a manufacturer to make x rings is represented by the line shown. What is the cost, in dollars, for the manufacturer to make 50 rings?",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="gray" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#grid)" />
      <line x1="20" y1="180" x2="180" y2="180" stroke="black" stroke-width="2"/>
      <line x1="20" y1="20" x2="20" y2="180" stroke="black" stroke-width="2"/>
      <line x1="20" y1="140" x2="120" y2="40" stroke="blue" stroke-width="2"/>
    </svg>`,
    options: ["100", "125", "175", "225"],
    correctAnswer: 2,
    explanation: "Looking at the graph, when the x-value (number of rings) is 50, the corresponding y-value (cost) on the line is 175.",
    category: "Data Analysis",
    topics: ["Linear equation", "Graph reading"]
  },
  {
    id: "sat_2025_march_d_m1_2",
    question: "Which expression is equivalent to $9(x^2 + 6)$?",
    options: ["9x^2 + 3", "9x^2 + 6", "9x^2 + 15", "9x^2 + 54"],
    correctAnswer: 3,
    explanation: "Distribute the 9 to both terms inside the parentheses: $9(x^2) + 9(6) = 9x^2 + 54$.",
    category: "Algebra",
    topics: ["Polynomials"]
  },
  {
    id: "sat_2025_march_d_m1_4",
    question: "$7x + 21 = 7x + k$\nIn the given equation, $k$ is a constant. The equation has infinitely many solutions. What is the value of $k$?",
    options: [],
    correctAnswer: 0,
    answerText: "21",
    type: "fill-in-the-blank",
    explanation: "For a linear equation to have infinitely many solutions, both sides must be identical. Therefore, the constant terms must be equal, so $k = 21$.",
    category: "Algebra",
    topics: ["Linear equation"]
  },
  {
    id: "sat_2025_march_d_m1_5",
    question: "The function $f$ is defined by $f(x) = 2x - \\frac{1}{4}$. What is the y-intercept of the graph of $y = f(x)$ in the xy-plane?",
    options: ["(0, -1/4)", "(0, -2)", "(0, 2)", "(0, 4)"],
    correctAnswer: 0,
    explanation: "The y-intercept occurs when $x = 0$. $f(0) = 2(0) - 1/4 = -1/4$. Thus, the y-intercept is $(0, -1/4)$.",
    category: "Algebra",
    topics: ["Linear equation"]
  },
  {
    id: "sat_2025_march_d_m1_6",
    question: "The list gives the mass, in grams, of 5 ruffed lemurs: 3,810; 3,810; 3,530; 3,850; 3,550. What is the mean mass, in grams, of these 5 ruffed lemurs?",
    options: [],
    correctAnswer: 0,
    answerText: "3710",
    type: "fill-in-the-blank",
    explanation: "Mean = $(3810 + 3810 + 3530 + 3850 + 3550) / 5 = 18550 / 5 = 3710$.",
    category: "Data Analysis",
    topics: ["Statistics", "Mean"]
  },
  {
    id: "sat_2025_march_d_m1_7",
    question: "The price of an object increased from $16 to $80. What was the percent increase in the price of the object?",
    options: ["20%", "64%", "80%", "400%"],
    correctAnswer: 3,
    explanation: "Percent increase = $\\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100\\% = \\frac{80 - 16}{16} \\times 100\\% = \\frac{64}{16} \\times 100\\% = 4 \\times 100\\% = 400\\%$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Percentage"]
  },
  {
    id: "sat_2025_march_d_m1_8",
    question: "In the figure shown, triangle $CAE$ is similar to triangle $CBD$. The measure of angle $CBD$ is $59^\\circ$, and $AE = 28(BD)$. What is the measure of angle $CAE$?",
    svg: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,20 40,120 160,120" fill="none" stroke="black" stroke-width="2"/>
      <line x1="70" y1="70" x2="130" y2="70" stroke="black" stroke-width="2"/>
      <text x="95" y="15" font-size="12">C</text>
      <text x="30" y="130" font-size="12">A</text>
      <text x="165" y="130" font-size="12">E</text>
      <text x="55" y="75" font-size="12">B</text>
      <text x="135" y="75" font-size="12">D</text>
    </svg>`,
    options: ["(28 * 59)°", "(28 + 59)°", "59°", "28°"],
    correctAnswer: 2,
    explanation: "Since triangle $CAE$ is similar to triangle $CBD$, their corresponding angles are equal. Therefore, the measure of angle $CAE$ is equal to the measure of angle $CBD$, which is $59^\\circ$. The side length ratio does not affect the angle measures.",
    category: "Geometry",
    topics: ["Similarity", "Triangles"]
  },
  {
    id: "sat_2025_march_d_m1_9",
    question: "A student needs at least 190 signatures from classmates to run for class president. The student collects 30 signatures on Monday and collects enough additional signatures on Tuesday to run for class president. Which inequality represents the number of additional signatures, $s$, that the student collects on Tuesday?",
    options: ["s + 30 \\le 190", "s + 30 \\ge 190", "s - 30 \\le 190", "s - 30 \\ge 190"],
    correctAnswer: 1,
    explanation: "The total number of signatures is the sum of signatures collected on Monday (30) and Tuesday ($s$). This total must be at least 190. Therefore, $s + 30 \\ge 190$.",
    category: "Algebra",
    topics: ["Inequality", "Word Problem"]
  },
  {
    id: "sat_2025_march_d_m1_10",
    question: "Which expression is equivalent to $7x^6 - 14x^2$, where $x > 0$?",
    options: ["7(x^3 - 2x^2)^2", "x^2(7x - 2)^4", "7x^2(x - 2)^4", "7x^2(x^4 - 2)"],
    correctAnswer: 3,
    explanation: "Factor out the greatest common factor, which is $7x^2$. $7x^6 - 14x^2 = 7x^2(x^4 - 2)$.",
    category: "Algebra",
    topics: ["Polynomials"]
  },
  {
    id: "sat_2025_march_d_m1_12",
    question: "$8x^2 + 13x = 6$\nWhat is the positive solution to the given equation?",
    options: [],
    correctAnswer: 0,
    answerText: "0.375",
    type: "fill-in-the-blank",
    explanation: "Rearrange to standard form: $8x^2 + 13x - 6 = 0$. Factor the quadratic: $(8x - 3)(x + 2) = 0$. The solutions are $x = 3/8 = 0.375$ and $x = -2$. The positive solution is $0.375$ (or $3/8$).",
    category: "Advanced Math",
    topics: ["Quadratic", "Solving equation"]
  }
];
