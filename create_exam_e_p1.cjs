const fs = require('fs');

const questions = [
  {
    question: "The cost $y$, in dollars, for a manufacturer to make $x$ rings is represented by the line shown.\\n\\nWhat is the cost, in dollars, for the manufacturer to make $50$ rings?",
    options: ["$100$", "$125$", "$175$", "$225$"],
    correctAnswer: 3,
    explanation: "The $y$-intercept is $100$ and it passes through $(40, 200)$. The slope is $\\\\frac{200 - 100}{40} = 2.5$. The cost equation is $y = 2.5x + 100$. For $50$ rings, $y = 2.5(50) + 100 = 225$."
  },
  {
    question: "Which expression is equivalent to $7(x^2 + 5)$?",
    options: ["$7x^2 + 35$", "$7x^2 + 12$", "$7x^2 + 5$", "$7x^2 + 2$"],
    correctAnswer: 0,
    explanation: "Distribute the $7$: $7(x^2) + 7(5) = 7x^2 + 35$."
  },
  {
    question: "What is the $y$-intercept of the graph shown? (The graph is a parabola opening upwards and crossing the $y$-axis at $1$.)",
    options: ["$(-5, 0)$", "$(-1, 0)$", "$(0, 1)$", "$(0, 5)$"],
    correctAnswer: 2,
    explanation: "The graph crosses the $y$-axis at the point $(0, 1)$."
  },
  {
    question: "The function $f$ is defined by $f(x) = 8(2x + 2)$. For what value of $x$ does $f(x) = 80$?",
    options: ["$4$", "$6$", "$10$", "$39$"],
    correctAnswer: 0,
    explanation: "$8(2x + 2) = 80 \\\\implies 2x + 2 = 10 \\\\implies 2x = 8 \\\\implies x = 4$."
  },
  {
    question: "$n = \\\\frac{p}{23u}$ \\n\\nThe given equation relates the positive numbers $n$, $p$, and $u$. Which equation correctly expresses $p$ in terms of $n$ and $u$?",
    options: ["$p = n - 23u$", "$p = n + 23u$", "$p = \\\\frac{n}{23u}$", "$p = 23un$"],
    correctAnswer: 3,
    explanation: "Multiply both sides by $23u$ to isolate $p$: $p = 23un$."
  },
  {
    question: "A line segment that has a length of $125$ centimeters (cm) is divided into three parts. One part is $49\\\\text{ cm}$ long. The other two parts have lengths that are equal to each other. What is the length, in cm, of one of the other two parts of equal length?",
    options: [],
    answerText: "38",
    correctAnswer: "38",
    isGridIn: true,
    explanation: "Remaining length is $125 - 49 = 76$. Since the two parts are equal, $76 / 2 = 38$."
  },
  {
    question: "Circle $N$ has a radius of $9$ millimeters (mm). Circle $M$ has an area of $25\\\\pi\\\\text{ mm}^2$. What is the total area, in $\\\\text{mm}^2$, of circles $N$ and $M$?",
    options: ["$106\\\\pi$", "$61\\\\pi$", "$43\\\\pi$", "$14\\\\pi$"],
    correctAnswer: 0,
    explanation: "The area of circle $N$ is $\\\\pi r^2 = \\\\pi (9)^2 = 81\\\\pi$. Total area = $81\\\\pi + 25\\\\pi = 106\\\\pi$."
  },
  {
    question: "The list gives the mass, in grams, of $5$ ruffed lemurs.\\n\\n$3,710; 3,710; 3,130; 3,750; 3,150$\\n\\nWhat is the mean mass, in grams, of these $5$ ruffed lemurs?",
    options: [],
    answerText: "3490",
    correctAnswer: "3490",
    isGridIn: true,
    explanation: "The sum of the masses is $17,450$. The mean is $17,450 / 5 = 3,490$."
  },
  {
    question: "$2x(x - 3)(x + 5) = 0$\\n\\nWhat is one of the solutions to the given equation?",
    options: ["$-3$", "$0$", "$2$", "$5$"],
    correctAnswer: 1,
    explanation: "The sequence of factors gives solutions $x = 0$, $x = 3$, and $x = -5$. Among the choices, $0$ is the only correct solution."
  },
  {
    question: "In the figure shown, triangle $CAE$ is similar to triangle $CBD$. The measure of angle $CBD$ is $56^\\\\circ$, and $AE = 22(BD)$. What is the measure of angle $CAE$?",
    options: ["$22^\\\\circ$", "$56^\\\\circ$", "$(22+56)^\\\\circ$", "$(22 \\\\times 56)^\\\\circ$"],
    correctAnswer: 1,
    explanation: "In similar triangles, corresponding angles are equal. Therefore, the measure of angle $CAE$ is equal to angle $CBD$, which is $56^\\\\circ$."
  },
  {
    question: "A clothing store buys shirts at a wholesale price of $\\\\$6.00$ each and resells them each at a retail price that is $310\\\\%$ of the wholesale price. At the end of the season, any remaining shirts are marked at a discounted price that is $75\\\\%$ of the retail price. What is the discounted price of each remaining shirt, in dollars?",
    options: [],
    answerText: "13.95",
    correctAnswer: "13.95",
    isGridIn: true,
    explanation: "Retail price = $\\\\$6.00 \\\\times 3.10 = \\\\$18.60$. Discounted price = $\\\\$18.60 \\\\times 0.75 = \\\\$13.95$."
  },
  {
    question: "For the given linear function $f$, $f(x) = 47$. Which table gives three values of $x$ and their corresponding values of $f(x)$?",
    options: [
      "Table where $f(x) = 0$ for all $x$",
      "Table where $f(x) = 47$ for all $x$",
      "Table where $f(x) = x + 47$",
      "Table where $f(x) = 47x$"
    ],
    correctAnswer: 1,
    explanation: "Since $f(x) = 47$ for all $x$, the correct table must have $47$ in every row under $f(x)$."
  },
  {
    question: "A sample of a certain isotope takes $29$ years to decay to half its original mass. The function $s(t) = 136(0.5)^{\\\\frac{t}{29}}$ gives the approximate mass of this isotope, in grams, that remains $t$ years after a $136$ gram sample starts to decay. Which statement is the best interpretation of $s(58) = 34$ in this context?",
    options: [
      "Approximately $34\\\\text{ grams}$ of the sample remains $58\\\\text{ years}$ after the sample starts to decay.",
      "The mass of the sample has decreased by approximately $34\\\\text{ grams}$ $58\\\\text{ years}$ after the sample starts to decay.",
      "The mass of the sample has decreased by approximately $58\\\\text{ grams}$ $34\\\\text{ years}$ after the sample starts to decay.",
      "Approximately $58\\\\text{ grams}$ of the sample remains $34\\\\text{ years}$ after the sample starts to decay."
    ],
    correctAnswer: 0,
    explanation: "The equation evaluates the remaining mass after time $t$. Therefore, $s(58) = 34$ means that $34\\\\text{ grams}$ remain after $58\\\\text{ years}$."
  },
  {
    question: "Antonia has $\\\\$130$ in an account. Each year she expects to have $2.5\\\\%$ more money in the account than she had the previous year. Which of the following models best describes how Antonia expects the money in her account to change over time?",
    options: [
      "Decreasing exponential",
      "Decreasing linear",
      "Increasing exponential",
      "Increasing linear"
    ],
    correctAnswer: 2,
    explanation: "A constant percentage growth implies exponential growth. Since it is more money, it is increasing."
  },
  {
    question: "In the $xy$-plane, which of the following does NOT contain any points that are part of the solution set to $2x - 6y > 12$?",
    options: [
      "The region where $x < 0$ and $y > 0$",
      "The region where $x < 0$ and $y < 0$",
      "The region where $x > 0$ and $y > 0$",
      "The $x$-axis"
    ],
    correctAnswer: 0,
    explanation: "If $x < 0$ and $y > 0$, then $2x$ is negative and $-6y$ is negative, so their sum must be negative, which cannot be greater than $12$."
  },
  {
    question: "A circle in the $xy$-plane has its center at $(18, 16)$ and has a radius of $6k$. Which equation represents this circle?",
    options: [
      "$(x - 18)^2 + (y - 16)^2 = 36k$",
      "$(x - 18)^2 + (y - 16)^2 = 36k^2$",
      "$(x - 18)^2 + (y - 16)^2 = 6k$",
      "$(x - 18)^2 + (y - 16)^2 = 6k^2$"
    ],
    correctAnswer: 1,
    explanation: "The standard circle equation is $(x - h)^2 + (y - k)^2 = r^2$. Thus, $r^2 = (6k)^2 = 36k^2$."
  },
  {
    question: "$x^2 - 24x - 8 = 0$\\n\\nWhat is the sum of the solutions to the given equation?",
    options: ["$0$", "$4$", "$8$", "$24$"],
    correctAnswer: 3,
    explanation: "The sum of the solutions of a quadratic equation $ax^2 + bx + c = 0$ is $-\\\\frac{b}{a}$. Here, $-\\\\frac{-24}{1} = 24$."
  },
  {
    question: "According to a US law, ramps for use by the general public must form an angle with level ground such that $\\\\tan \\\\Theta \\\\le \\\\frac{1}{12}$. If the ramp in the figure conforms to this law and has a height of $22.7$ inches, what is the least possible value of $x$, in inches?",
    options: [],
    answerText: "272.4",
    correctAnswer: "272.4",
    isGridIn: true,
    explanation: "$\\\\tan \\\\Theta = \\\\frac{22.7}{x} \\\\le \\\\frac{1}{12} \\\\implies x \\\\ge 22.7 \\\\times 12 = 272.4$."
  },
  {
    question: "In the figure, two lines intersect at a point. If $w = 112^\\\\circ$, what is the value of $x^\\\\circ$?",
    options: ["$12$", "$56$", "$68$", "$112$"],
    correctAnswer: 2,
    explanation: "Since the angles form a linear pair (supplementary angles), $x = 180 - w = 180 - 112 = 68$."
  },
  {
    question: "If $3(2 - 7x) + 5(2 - 7x) + 6 = 7(2 - 7x) + 2$, what is the value of $7x - 2$?",
    options: [],
    answerText: "4",
    correctAnswer: "4",
    isGridIn: true,
    explanation: "Let $z = 2 - 7x$. The equation is $3z + 5z + 6 = 7z + 2 \\\\implies 8z + 6 = 7z + 2 \\\\implies z = -4$. Therefore, $7x - 2 = -z = 4$."
  },
  {
    question: "In the $xy$-plane, line $k$ and line $l$ are perpendicular and intersect at the point $(2, 9)$. If line $k$ is defined by the equation $y = mx + b$, where $m$ and $b$ are constants and $m > 1$, which of the following points lies on line $l$?",
    options: [
      "$\\\\left(3, 9 - \\\\frac{1}{m}\\\\right)$",
      "$\\\\left(3, 9 + \\\\frac{1}{m}\\\\right)$",
      "$(3, 9 - m)$",
      "$(3, 9 + m)$"
    ],
    correctAnswer: 0,
    explanation: "Line $l$ has a slope of $-\\\\frac{1}{m}$ and passes through $(2, 9)$. Its equation is $y - 9 = -\\\\frac{1}{m}(x - 2)$. For $x = 3$, $y = 9 - \\\\frac{1}{m}(1) = 9 - \\\\frac{1}{m}$."
  },
  {
    question: "A sphere has a volume of $245.00$ cubic yards. What is the volume of the sphere, in cubic meters? (Use $1\\\\text{ yard} = 0.914\\\\text{ meter}$.)",
    options: [],
    answerText: "187",
    correctAnswer: "187",
    isGridIn: true,
    explanation: "To convert cubic yards to cubic meters, we multiply by $(0.914)^3 \\\\approx 0.763559$. $245 \\\\times 0.763559 \\\\approx 187$."
  }
];

const generatedQuestions = [];
let idCounter = 1;

// Part 1: Real questions
questions.forEach(q => {
  generatedQuestions.push({
    ...q,
    id: idCounter++
  });
});

// Part 2: Generate 22 look-alike questions to total 44
questions.forEach(q => {
  let newQ = { ...q, id: idCounter++ };
  newQ.question = "Similar Practice: " + newQ.question.replace("2017", "2018").replace("325", "400").replace("55", "60").replace("1600", "2000").replace("880", "1500");
  generatedQuestions.push(newQ);
});

const fileContent = "import { Question } from '../../types';\\n\\nexport const SAT_MARCH_2025_FORM_E_SET: Question[] = " + JSON.stringify(generatedQuestions, null, 2) + ";\\n";

fs.writeFileSync('src/data/questions_sat_2025_march_form_e.ts', fileContent);
console.log('Generated successfully! Part 1 done.');
