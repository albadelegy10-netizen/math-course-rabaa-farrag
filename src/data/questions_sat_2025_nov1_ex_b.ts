
import { Question } from '../../types';

export const SAT_NOV1_2025_EX_B_SET: Question[] = [
  // --- MODULE 1: MATH ---
  {
    id: 1,
    question: "If $5x + 2 = 32$, what is the value of $50x + 20$?",
    options: ["6", "60", "70", "320"],
    correctAnswer: 3,
    explanation: "First, solve for $x$: $5x = 30 \\Rightarrow x = 6$. Then substitute into the expression: $50(6) + 20 = 300 + 20 = 320$. Alternatively, notice that $50x + 20 = 10(5x + 2) = 10(32) = 320$.",
    category: "Algebra",
    topics: ["Algebra", "solving equation"]
  },
  {
    id: 2,
    question: "In each of the following data sets of 5 values, $p$ is a constant. Which of these data sets has the largest standard deviation?",
    options: ["$p - 4, p, p, p, p + 4$", "$p - 1, p - 1, p + 1, p + 1$", "$p, p, p, p, p$", "$p - 5, p - 4, p, p + 4, p + 5$"],
    correctAnswer: 3,
    explanation: "Standard deviation measures the spread of data. Set C has 0 spread. Set B is clustered near mean. Set A has range 8. Set D has range 10 and values are most spread out from the mean.",
    category: "Statistics",
    topics: ["Statistics"]
  },
  {
    id: 3,
    question: "A jar has 430 marbles, and 20% of these marbles are blue. How many marbles in the jar are blue?",
    options: ["86", "172", "215", "410"],
    correctAnswer: 0,
    explanation: "$430 \\times 0.20 = 86$.",
    category: "Percentages",
    topics: ["percentage"]
  },
  {
    id: 4,
    question: "For which of the following tables are all the values of $r$ and their corresponding values of $g$ solutions to the inequality $r + g < 56$?",
    options: ["r: 0, 2, 4; g: 55, 53, 51", "r: 0, 2, 4; g: 53, 55, 51", "r: 0, 2, 4; g: 51, 55, 53", "r: 0, 2, 4; g: 51, 53, 55"],
    correctAnswer: 0,
    explanation: "Check sums: A: $0+55=55$, $2+53=55$, $4+51=55$. All < 56. B: $2+55=57$ (Fail). C: $2+55=57$ (Fail). D: $4+55=59$ (Fail).",
    category: "Inequalities",
    topics: ["Inequalities"]
  },
  {
    id: 5,
    question: "The scatterplot shows the relationship between the square footage of 12 clothing stores and their annual sales. According to the trend, which is the best prediction for the annual sales (in millions) of a store with 4 thousand square feet?",
    options: ["4.1", "5.4", "7.5", "12"],
    correctAnswer: 2,
    explanation: "Looking at the line of best fit on the graph at $x=4$, the y-value corresponds to approximately 7.5.",
    category: "Data Analysis",
    topics: ["Data Analysis", "scatter plot"]
  },
  {
    id: 6,
    question: "The solution to the given system of equations is $(x, y)$. What is the value of $y$? \n$x + y = 165$\n$x + 2y = 185$",
    options: [],
    correctAnswer: 0,
    answerText: "20",
    explanation: "Subtract the first equation from the second: $(x + 2y) - (x + y) = 185 - 165 \\Rightarrow y = 20$.",
    category: "Systems of Equations",
    topics: ["Systems", "Linear Equations"]
  },
  {
    id: 7,
    question: "A total of 50 people attended a conference. 9 chose vegetarian. If one person is selected at random, what is the probability of selecting a vegetarian?",
    options: [],
    correctAnswer: 0,
    answerText: "0.18",
    explanation: "Probability = Part / Total = $9 / 50 = 0.18$.",
    category: "Probability",
    topics: ["Probability"]
  },
  {
    id: 8,
    question: "In the figure shown, lines $l$ and $k$ are parallel. If $x > 116$, which of the following must be true about $y$?",
    options: ["$y < 64$", "$y > 64$", "$x + y < 180$", "$x + y > 180$"],
    correctAnswer: 0,
    explanation: "Angles $x$ and $y$ are consecutive interior angles, so $x + y = 180$. If $x > 116$, then $y = 180 - x < 180 - 116 \\Rightarrow y < 64$.",
    category: "Geometry",
    topics: ["Geometry", "Parallel Lines"]
  },
  {
    id: 9,
    question: "In the xy-plane, the graph of $y = 2x$ intersects the graph of $y = x^2 - 35$ at two points. What is the sum of the x-coordinates of the two points of intersection?",
    options: ["-35", "-5", "2", "7"],
    correctAnswer: 2,
    explanation: "Set $2x = x^2 - 35 \\Rightarrow x^2 - 2x - 35 = 0$. The sum of roots is $-b/a = -(-2)/1 = 2$.",
    category: "Quadratics",
    topics: ["Quadratics", "Systems"]
  },
  {
    id: 10,
    question: "The function $f$ is defined by $f(x) = 3(\\frac{1}{4} - x) + \\frac{13}{4}$. What is the value of $f(\\frac{1}{4})$?",
    options: [],
    correctAnswer: 0,
    answerText: "13/4",
    explanation: "$f(1/4) = 3(1/4 - 1/4) + 13/4 = 3(0) + 13/4 = 13/4$.",
    category: "Functions",
    topics: ["Functions"]
  },
  {
    id: 11,
    question: "The box plot summarizes the lengths of shoal bass. Min=34, Max=49. What is the range?",
    options: ["10", "15", "29", "41"],
    correctAnswer: 1,
    explanation: "Range = Max - Min = $49 - 34 = 15$.",
    category: "Statistics",
    topics: ["Statistics"]
  },
  {
    id: 12,
    question: "The area of triangle ABC is 150 square cm. The base is 10 cm. What is the height $h$?",
    options: ["10", "15", "30", "60"],
    correctAnswer: 2,
    explanation: "Area = $0.5 \\times b \\times h \\Rightarrow 150 = 0.5 \\times 10 \\times h \\Rightarrow 150 = 5h \\Rightarrow h = 30$.",
    category: "Geometry",
    topics: ["Geometry", "Triangles", "area"]
  },
  {
    id: 13,
    question: "What is one of the solutions to $x^2 - 2x = 29$?",
    options: ["$\\sqrt{29}$", "$1 + \\sqrt{30}$", "30", "$29 + \\sqrt{2}$"],
    correctAnswer: 1,
    explanation: "$x^2 - 2x - 29 = 0$. Using quadratic formula: $x = \\frac{2 \\pm \\sqrt{4 - 4(1)(-29)}}{2} = \\frac{2 \\pm \\sqrt{120}}{2} = 1 \\pm \\sqrt{30}$.",
    category: "Quadratics",
    topics: ["Quadratics", "solving equation"]
  },
  {
    id: 14,
    question: "The graph of $y = f(x)$ is shown. For what value of $x$ does $f(x) = 0$?",
    options: ["-4", "0", "1", "4"],
    correctAnswer: 0,
    explanation: "The graph intersects the x-axis at $x = -4$.",
    category: "Functions",
    topics: ["Functions"]
  },
  {
    id: 15,
    question: "What is the sum of the solutions to $\\frac{|3x - 30| + 3}{6} = 5$?",
    options: ["1", "19", "20", "30"],
    correctAnswer: 2,
    explanation: "$\\frac{|3x - 30|}{6} = 2 \\Rightarrow |3x - 30| = 12$. $3x - 30 = 12 \\Rightarrow 3x = 42 \\Rightarrow x = 14$. $3x - 30 = -12 \\Rightarrow 3x = 18 \\Rightarrow x = 6$. Sum = $14 + 6 = 20$.",
    category: "Absolute Value",
    topics: ["Algebra", "solving equation"]
  },
  {
    id: 16,
    question: "The width of a rectangle is 16 inches less than 2 times its length. The area is 130. What is the width?",
    options: ["5", "10", "13", "18"],
    correctAnswer: 1,
    explanation: "$w = 2l - 16$. $l(2l - 16) = 130 \\Rightarrow 2l^2 - 16l - 130 = 0 \\Rightarrow l^2 - 8l - 65 = 0$. $(l-13)(l+5)=0$. $l=13$. $w = 2(13) - 16 = 10$.",
    category: "Quadratics",
    topics: ["Quadratics", "Word Problem"]
  },
  {
    id: 17,
    question: "A machine makes 8-inch, 9-inch, and 3-inch parts. Total 100 parts. 8-inch parts are 5 times 9-inch parts ($n$). Number of 3-inch parts is 4. Which equation represents this?",
    options: ["$8(5n) + 9n + 3(4) = 100$", "$8n + 9n + 3n = 100$", "$5n + 4 = 100$", "$6n + 4 = 100$"],
    correctAnswer: 3,
    explanation: "Number of 9-inch = $n$. Number of 8-inch = $5n$. Number of 3-inch = 4. Total count = $n + 5n + 4 = 6n + 4 = 100$.",
    category: "Word Problems",
    topics: ["Word Problem", "Linear Equations"]
  },
  {
    id: 18,
    question: "An exponential model for squirrels: 200 in 2003. Increases by 120% every 4 years. Which equation represents number $N$, $t$ years after 2003?",
    options: ["$N = 200(2.20)^{t/4}$", "$N = 200(1.20)^{4t}$", "$N = 200(1.20)^{t/4}$", "$N = 200(2.20)^t$"],
    correctAnswer: 0,
    explanation: "Increase by 120% means growth factor is $1 + 1.2 = 2.2$. Period is 4 years, so exponent is $t/4$.",
    category: "Exponential Growth",
    topics: ["Exponential Growth"]
  },
  {
    id: 19,
    question: "If $5x + 7 = 52$, what is the value of $50x + 70$?",
    options: ["9", "90", "120", "520"],
    correctAnswer: 3,
    explanation: "$50x + 70 = 10(5x + 7) = 10(52) = 520$.",
    category: "Algebra",
    topics: ["Algebra", "solving equation"]
  },
  {
    id: 20,
    question: "The measures of interior angles of triangle ABC are $42^\\circ, 84^\\circ, x^\\circ$. What is $x$?",
    options: ["42", "54", "126", "180"],
    correctAnswer: 1,
    explanation: "$42 + 84 + x = 180 \\Rightarrow 126 + x = 180 \\Rightarrow x = 54$.",
    category: "Geometry",
    topics: ["Geometry", "Triangles"]
  },
  {
    id: 21,
    question: "The function $f$ is defined by $f(x) = 7 + \\sqrt{x}$. What is $f(36)$?",
    options: ["0", "13", "16", "25"],
    correctAnswer: 1,
    explanation: "$f(36) = 7 + \\sqrt{36} = 7 + 6 = 13$.",
    category: "Functions",
    topics: ["Functions"]
  },
  {
    id: 22,
    question: "For linear function $f$, $f(-2) = -8$, and slope is 6. Which equation defines $f$?",
    options: ["$f(x) = 6x - 10$", "$f(x) = 6x - 8$", "$f(x) = 6x - 2$", "$f(x) = 6x + 4$"],
    correctAnswer: 3,
    explanation: "$y - (-8) = 6(x - (-2)) \\Rightarrow y + 8 = 6x + 12 \\Rightarrow y = 6x + 4$.",
    category: "Linear Equations",
    topics: ["Linear Equations"]
  },

  // --- MODULE 2: MATH ---
  {
    id: 23,
    question: "A line passes through $(4, 7)$ and $(18, 28)$. What is the slope?",
    options: [],
    correctAnswer: 0,
    answerText: "3/2",
    explanation: "Slope = $\\frac{28 - 7}{18 - 4} = \\frac{21}{14} = \\frac{3}{2}$.",
    category: "Linear Equations",
    topics: ["Linear Equations"]
  },
  {
    id: 24,
    question: "The length of a rectangle's diagonal is $\\sqrt{106}$, and one side is 9. What is the perimeter?",
    options: ["106", "45", "28", "14"],
    correctAnswer: 2,
    explanation: "$d^2 = l^2 + w^2 \\Rightarrow 106 = 81 + w^2 \\Rightarrow w^2 = 25 \\Rightarrow w = 5$. Perimeter = $2(9 + 5) = 28$.",
    category: "Geometry",
    topics: ["Geometry", "Rectangle"]
  },
  {
    id: 25,
    question: "Which of the following is a solution to $(5x + 6)(8x - 5) = 0$?",
    options: ["-8/5", "-6/5", "-5/6", "-5/8"],
    correctAnswer: 1,
    explanation: "$5x + 6 = 0 \\Rightarrow x = -6/5$.",
    category: "Quadratics",
    topics: ["Quadratics", "solving equation"]
  },
  {
    id: 26,
    question: "$x^2 + y^2 = 3185$ and $y - 8x = 0$. If $x < 0$, what is the value of $y$?",
    options: ["-392", "-56", "-8", "-7"],
    correctAnswer: 1,
    explanation: "Substitute $y=8x$: $x^2 + 64x^2 = 3185 \\Rightarrow 65x^2 = 3185 \\Rightarrow x^2 = 49$. Since $x < 0$, $x = -7$. $y = 8(-7) = -56$.",
    category: "Systems",
    topics: ["Systems", "Quadratics"]
  },
  {
    id: 27,
    question: "The equation $y = -4.9(x - 8.9)^2 + 12,400$ gives height. What is the best interpretation of the vertex?",
    options: ["The plane reached max height of 12,400 meters 4.9 seconds after start.", "The plane reached max height of 12,400 meters 8.9 seconds after start.", "The plane reached max height of 4.9 meters...", "The plane reached max height of 8.9 meters..."],
    correctAnswer: 1,
    explanation: "Vertex form $a(x-h)^2 + k$. Vertex is $(8.9, 12400)$. Max height 12,400 at 8.9 seconds.",
    category: "Quadratics",
    topics: ["Quadratics", "Parabola"]
  },
  {
    id: 28,
    question: "$a(4 - x) = 28 - 7x$. The equation has exactly one solution. Which of the following CANNOT be the value of $a$?",
    options: ["1", "4", "7", "28"],
    correctAnswer: 2,
    explanation: "$4a - ax = 28 - 7x$. For exactly one solution, slopes must differ: $-a \\neq -7 \\Rightarrow a \\neq 7$. If $a=7$, it has infinite solutions.",
    category: "Linear Equations",
    topics: ["Linear Equations"]
  },
  {
    id: 29,
    question: "Function $g(x) = (x + 13)(t - x)$. Graph passes through $(24, 0)$. What is $g(0)$?",
    options: [],
    correctAnswer: 0,
    answerText: "312",
    explanation: "$g(24) = 0 \\Rightarrow (37)(t - 24) = 0 \\Rightarrow t = 24$. $g(0) = (13)(24 - 0) = 312$.",
    category: "Functions",
    topics: ["Functions"]
  },
  {
    id: 30,
    question: "In triangle QRS, angle R is $90^\\circ$. Which expression represents the length of QS?",
    options: ["$23 \\cos Q$", "$23 \\sin Q$", "$23 / \\cos Q$", "$23 / \\sin Q$"],
    correctAnswer: 3,
    explanation: "$\\sin Q = \\text{Opposite} / \\text{Hypotenuse} = RS / QS = 23 / QS$. So $QS = 23 / \\sin Q$.",
    category: "Trigonometry",
    topics: ["Trigonometry"]
  },
  {
    id: 31,
    question: "The graph of $y = 5^x + k$ is shown. What is the value of $k$?",
    options: ["-8", "-7", "7", "8"],
    correctAnswer: 0,
    explanation: "The y-intercept appears to be at $(0, -7)$. $5^0 + k = -7 \\Rightarrow 1 + k = -7 \\Rightarrow k = -8$.",
    category: "Exponentials",
    topics: ["Exponential Growth"]
  },
  {
    id: 32,
    question: "Beekeeper model: Starts 1800. +120/week for 2 weeks. Then +180/week. Goal 3300. Which function $p(w)$ gives number of bees still needed after $w$ weeks ($w>2$)?",
    options: ["$3300 - 180w$", "$3180 + 180w$", "$1620 - 180w$", "$-120 + 180w$"],
    correctAnswer: 2,
    explanation: "Current = $1800 + 2(120) + 180(w-2) = 2040 + 180w - 360 = 1680 + 180w$. Needed = $3300 - (1680 + 180w) = 1620 - 180w$.",
    category: "Word Problems",
    topics: ["Word Problem", "Linear Equations"]
  },
  {
    id: 33,
    question: "If $r(x)s(x) = 13(x^4 - 16)$, where $r(x) = 13(x - 2)$ and $s(x) = x^3 + nx^2 + 2nx + 8$, what is $n$?",
    options: [],
    correctAnswer: 0,
    answerText: "2",
    explanation: "Divide by 13: $(x-2)(x^3 + nx^2 + 2nx + 8) = x^4 - 16$. Expanding $x^3$ term: $(n-2)x^3$. RHS has $0x^3$. So $n-2=0 \\Rightarrow n=2$.",
    category: "Polynomials",
    topics: ["Polynomials"]
  },
  {
    id: 34,
    question: "Triangle sides 10, 11, $x$. Which inequality represents $x$?",
    options: ["$x < 21$", "$x > 21$", "$1 < x < 21$", "$x < 1$ or $x > 21$"],
    correctAnswer: 2,
    explanation: "Triangle Inequality: Sum of two sides > third side. $10+11 > x \\Rightarrow x < 21$. $10+x > 11 \\Rightarrow x > 1$. So $1 < x < 21$.",
    category: "Geometry",
    topics: ["Geometry", "Inequalities", "Triangles"]
  },
  {
    id: 35,
    question: "An area of 58.00 square nautical miles is equivalent to $k$ square kilometers. (1 nm = 1.852 km). Value of $k$?",
    options: [],
    correctAnswer: 0,
    answerText: "198.9",
    explanation: "$58 \\times (1.852)^2 = 58 \\times 3.4299 = 198.93$.",
    category: "Unit Conversion",
    topics: ["Unit Conversion"]
  },
  {
    id: 36,
    question: "Line passes through $(9, 1)$, $(0, 8)$, and $(c, 0)$. What is $c$?",
    options: [],
    correctAnswer: 0,
    answerText: "72/7",
    explanation: "Slope = $(8-1)/(0-9) = -7/9$. Equation: $y = -7/9 x + 8$. Set $y=0$: $0 = -7/9 c + 8 \\Rightarrow 7/9 c = 8 \\Rightarrow c = 72/7$.",
    category: "Linear Equations",
    topics: ["Linear Equations"]
  },
  {
    id: 37,
    question: "In 2005, Aster earned 12% more than 2004. In 2006, 6% more than 2005. If 2004 earnings were $y$ times 2006 earnings, what is $y$?",
    options: ["0.5000", "0.7200", "0.8423", "1.1872"],
    correctAnswer: 2,
    explanation: "$E_{2006} = 1.06 \\times 1.12 \\times E_{2004} = 1.1872 E_{2004}$. So $E_{2004} = (1/1.1872) E_{2006}$. $y = 1/1.1872 \\approx 0.8423$.",
    category: "Percentages",
    topics: ["percentage"]
  },
  {
    id: 38,
    question: "Which expression is a factor of $y^2(x - 9) - 36(x - 9)^3$?",
    options: ["$y(x-9)$", "$(x-9)(x-6)$", "$y+x-9$", "$y+6x-54$"],
    correctAnswer: 3,
    explanation: "Factor out $(x-9)$: $(x-9)(y^2 - 36(x-9)^2)$. Difference of squares: $(x-9)(y - 6(x-9))(y + 6(x-9))$. The last factor is $y + 6x - 54$.",
    category: "Factoring",
    topics: ["Polynomials", "Factoring"]
  },
  {
    id: 39,
    question: "Line of best fit passes near $(0, 0.5)$ and $(5, 2.8)$. What is the slope?",
    options: ["-1.84", "-0.54", "0.54", "1.84"],
    correctAnswer: 2,
    explanation: "Slope $\\approx (2.8 - 0.5) / 5 = 2.3 / 5 = 0.46$. Closest option is 0.54.",
    category: "Data Analysis",
    topics: ["Data Analysis", "scatter plot"]
  },
  {
    id: 40,
    question: "What is an x-coordinate of an x-intercept of $y = 2(x - 13)(x + 7)(x + 4)$?",
    options: [],
    correctAnswer: 0,
    answerText: "13",
    explanation: "Roots are $13, -7, -4$.",
    category: "Polynomials",
    topics: ["Polynomials"]
  },
  {
    id: 41,
    question: "One factor of $8x^4 + 50x^2 + 63$ is $ax^2 + b$. What is a possible value of $ab$?",
    options: ["7", "14", "18", "36"],
    correctAnswer: 2,
    explanation: "Let $u=x^2$. $8u^2 + 50u + 63 = (4u+7)(2u+9)$. Factors are $4x^2+7$ ($ab=28$) and $2x^2+9$ ($ab=18$).",
    category: "Polynomials",
    topics: ["Polynomials"]
  },
  {
    id: 42,
    question: "Line $t$ has slope $1/4$ and passes through $(20, -9)$. Which equation defines line $t$?",
    options: ["$y = -14x + 1/4$", "$y = x/4 - 14$", "$y = x/4 - 9$", "$y = 20x - 9$"],
    correctAnswer: 1,
    explanation: "$y - (-9) = 1/4(x - 20) \\Rightarrow y + 9 = x/4 - 5 \\Rightarrow y = x/4 - 14$.",
    category: "Linear Equations",
    topics: ["Linear Equations"]
  },
  {
    id: 43,
    question: "$f(x) \\cdot g(x) - h(x) = ax^2 + bx + c$. If $f(x)=2x+7, g(x)=4x-3, h(x)=7x+2$, what is $b$?",
    options: ["-7", "15", "27", "29"],
    correctAnswer: 1,
    explanation: "$(2x+7)(4x-3) - (7x+2) = (8x^2 + 22x - 21) - 7x - 2 = 8x^2 + 15x - 23$. $b=15$.",
    category: "Polynomials",
    topics: ["Polynomials"]
  },
  {
    id: 44,
    question: "Points $(5, 6), (9, 10), (9, 2)$ define a circle. Circumference is $k\\pi$. What is $k$?",
    options: [],
    correctAnswer: 0,
    answerText: "8",
    explanation: "Center is $(9, 6)$. Radius to $(5, 6)$ is 4. Circumference $2\\pi(4) = 8\\pi$. So $k=8$.",
    category: "Geometry",
    topics: ["Geometry", "Circle Geometry"]
  }
];
