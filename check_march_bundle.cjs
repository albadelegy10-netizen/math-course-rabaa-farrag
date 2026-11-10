"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/data/questions_est1_2026_march.ts
var questions_est1_2026_march_exports = {};
__export(questions_est1_2026_march_exports, {
  EST1_2026_MARCH_SET: () => EST1_2026_MARCH_SET
});
module.exports = __toCommonJS(questions_est1_2026_march_exports);
var EST1_2026_MARCH_SET = [
  {
    id: "est1_2026_mar_1",
    question: "A line passes through points of coordinates $(0; 4)$ and $(s; 3)$ where $s$ is a real number different than zero. What is the slope of this line in terms of $s$?",
    options: ["$-s^{-1}$", "$2s$", "$-s$", "$\\frac{2}{s}$"],
    correctAnswer: "$-s^{-1}$",
    explanation: "Slope = $\\frac{y_2 - y_1}{x_2 - x_1} = \\frac{3 - 4}{s - 0} = \\frac{-1}{s} = -s^{-1}$."
  },
  {
    id: "est1_2026_mar_2",
    question: "The parabola of equation $y = ax^2 + 1$ with $a < 0$ intersects the $x$-axis in:",
    options: ["3 points", "2 points", "1 point", "No points"],
    correctAnswer: "2 points",
    explanation: "For $y = ax^2 + 1$ with $a < 0$, the vertex is at $(0, 1)$ and it opens downwards. It will cross the $x$-axis at 2 distinct points."
  },
  {
    id: "est1_2026_mar_3",
    question: "The expression $1 - 3|\\sqrt{3} - 2| + 5 - 2\\sqrt{3}$ is equivalent to:",
    options: ["$-5\\sqrt{3}$", "$12 - 5\\sqrt{3}$", "$12 - \\sqrt{3}$", "$\\sqrt{3}$"],
    correctAnswer: "$\\sqrt{3}$",
    explanation: "Since $\\sqrt{3} \\approx 1.732$, $\\sqrt{3} - 2$ is negative. Therefore, $|\\sqrt{3} - 2| = 2 - \\sqrt{3}$. Substituting this in: $1 - 3(2 - \\sqrt{3}) + 5 - 2\\sqrt{3} = 1 - 6 + 3\\sqrt{3} + 5 - 2\\sqrt{3} = \\sqrt{3}$."
  },
  {
    id: "est1_2026_mar_4",
    question: "Given the following equation $y = -\\frac{1}{2}gt^2 + vt + y_0$. Solve for $g$.",
    options: ["$\\frac{2v}{t} + \\frac{2(y_0 - y)}{t^2}$", "$\\frac{v+2(y_0 - y)}{t^2}$", "$\\frac{v}{t} + \\frac{2y_0 - y}{t^2}$", "$\\frac{2v}{t} + \\frac{y_0 - y}{t^2}$"],
    correctAnswer: "$\\frac{2v}{t} + \\frac{2(y_0 - y)}{t^2}$",
    explanation: "Isolate $g$: $-\\frac{1}{2}gt^2 = y - y_0 - vt \\implies g = -\\frac{2}{t^2}(y - y_0 - vt) = \\frac{2(y_0 - y + vt)}{t^2} = \\frac{2v}{t} + \\frac{2(y_0 - y)}{t^2}$."
  },
  {
    id: "est1_2026_mar_5",
    question: "The function $f(x) = x^3 + bx - 30$ has the following roots: $5, -3$ and $n$. what is the value of $n$?",
    options: ["-4", "-2", "2", "4"],
    correctAnswer: "-2",
    explanation: "By Vieta's formulas, the product of the roots $r_1 r_2 r_3 = -d/a$. Here, $a=1, d=-30$. So $5 \\times (-3) \\times n = -(-30)/1 = 30$. Thus $-15n = 30 \\implies n = -2$."
  },
  {
    id: "est1_2026_mar_6",
    question: "A line has the following equation $4x - 3y - 12 = 0$. its slope is:",
    options: ["$-\\frac{4}{3}$", "$\\frac{3}{4}$", "-4", "$\\frac{4}{3}$"],
    correctAnswer: "$\\frac{4}{3}$",
    explanation: "Write the equation in slope-intercept form: $3y = 4x - 12 \\implies y = \\frac{4}{3}x - 4$. The slope is $\\frac{4}{3}$."
  },
  {
    id: "est1_2026_mar_7",
    question: "Given $f(x) = 2x - 3$ and $g(x) = 4 - x$, what is the value of $f(g(-2))$?",
    options: ["1", "6", "9", "12"],
    correctAnswer: "9",
    explanation: "$g(-2) = 4 - (-2) = 6$. Then $f(6) = 2(6) - 3 = 12 - 3 = 9$."
  },
  {
    id: "est1_2026_mar_8",
    question: "Given the system\n$\\begin{cases} 5x - 7y = 14 \\\\ 4y - 3x = -4 \\end{cases}$\nwhat is the value of $2x - 3y$?",
    options: ["-11", "-6", "10", "18"],
    correctAnswer: "10",
    explanation: "Add the two equations directly: $(5x - 7y) + (-3x + 4y) = 14 + (-4) \\implies 2x - 3y = 10$."
  },
  {
    id: "est1_2026_mar_9",
    question: "What is the value of $i^2(i - 1)^2 - 2i$?",
    options: ["$i$", "$-i$", "0", "$4i$"],
    correctAnswer: "0",
    explanation: "Recall $i^2 = -1$. Expand $(i-1)^2 = i^2 - 2i + 1 = -1 - 2i + 1 = -2i$. Then $i^2(i - 1)^2 - 2i = (-1)(-2i) - 2i = 2i - 2i = 0$."
  },
  {
    id: "est1_2026_mar_10",
    question: "Given $x = 2^3$ and $y = 2^4$, what is the value of $4x^3y^2$?",
    options: ["$2^{14}$", "$2^{17}$", "$2^{19}$", "$2^{21}$"],
    correctAnswer: "$2^{19}$",
    explanation: "$4 = 2^2$. $x^3 = (2^3)^3 = 2^9$. $y^2 = (2^4)^2 = 2^8$. Multiplying them: $2^2 \\times 2^9 \\times 2^8 = 2^{2+9+8} = 2^{19}$."
  },
  {
    id: "est1_2026_mar_11",
    question: "Given the line with equation $x + y = n(2y - x)$ where $n$ is a real number different than zero, its $y$-intercept is:",
    options: ["-2", "0", "0.5", "$n$"],
    correctAnswer: "0",
    explanation: "To find the $y$-intercept, set $x = 0$. This gives $0 + y = n(2y - 0) \\implies y = 2ny \\implies y(1 - 2n) = 0$. Since this holds for any non-zero real number $n$, $y$ must be 0."
  },
  {
    id: "est1_2026_mar_12",
    question: "Using the figure above, for which values of $x$ does $h(x) + k(x) = 0$?",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<text x="10" y="20" font-size="12" font-family="sans-serif">Refer to the graphs of h(x) and k(x)</text>
<text x="10" y="40" font-size="12" font-family="sans-serif">Line h(x) goes through (0,0) & (5,5)</text>
<text x="10" y="60" font-size="12" font-family="sans-serif">Line k(x) goes through (0,-5) & (5,0)</text>
</svg>`,
    options: ["-1, 3", "0, -1", "1, -1, 3", "3, 5"],
    correctAnswer: "0, -1",
    explanation: "By analyzing the graphs of $h(x)$ and $k(x)$ where they are symmetric across the $x$-axis, the values of $x$ where they sum to zero are 0 and -1."
  },
  {
    id: "est1_2026_mar_13",
    question: "Given the following equation of a curve $y = -(x + 2)^2 + 3x + 5$, its $y$-intercept is:",
    options: ["5", "4", "3", "1"],
    correctAnswer: "1",
    explanation: "The $y$-intercept is found by setting $x = 0$: $y = -(0 + 2)^2 + 3(0) + 5 = -4 + 5 = 1$."
  },
  {
    id: "est1_2026_mar_14",
    question: "If $-\\frac{2}{3} < 4x - 1 < -\\frac{1}{4}$, which of the following is correct regarding $12x - 3$?",
    options: [
      "$-\\frac{5}{4} < 12x - 3 < -\\frac{2}{5}$",
      "$-\\frac{3}{4} < 12x - 3 < -\\frac{1}{4}$",
      "$-\\frac{1}{2} < 12x - 3 < -\\frac{1}{3}$",
      "$-2 < 12x - 3 < -\\frac{3}{4}$"
    ],
    correctAnswer: "$-2 < 12x - 3 < -\\frac{3}{4}$",
    explanation: "Since $12x - 3 = 3(4x - 1)$, multiply all parts of the inequality by 3: $3(-\\frac{2}{3}) < 3(4x - 1) < 3(-\\frac{1}{4}) \\implies -2 < 12x - 3 < -\\frac{3}{4}$."
  },
  {
    id: "est1_2026_mar_15",
    question: "Given the absolute value equation $|x + 1| = |x - 3|$, what is the value of $x$?",
    options: ["-2", "-1", "1", "2"],
    correctAnswer: "1",
    explanation: "Either $x+1 = x-3$ (which gives no solution) or $x+1 = -(x-3) \\implies x+1 = -x+3 \\implies 2x = 2 \\implies x=1$."
  },
  {
    id: "est1_2026_mar_16",
    question: "Given $9^{3n - 1.5} = 27^2$, what is the value of the real number $n$?",
    options: ["1.5", "2.5", "3", "4.5"],
    correctAnswer: "1.5",
    explanation: "Express both sides with base 3: $(3^2)^{3n - 1.5} = (3^3)^2 \\implies 3^{6n - 3} = 3^6$. Equating exponents gives $6n - 3 = 6 \\implies 6n = 9 \\implies n = 1.5$."
  },
  {
    id: "est1_2026_mar_17",
    question: "If $x = -2$ is a root of $y = 3x^2 + nx - 4$, what is the value of the real number $n$?",
    options: ["-4", "-2", "2", "4"],
    correctAnswer: "4",
    explanation: "Being a root means $y=0$ when $x=-2$. Substitute $x=-2$: $0 = 3(-2)^2 + n(-2) - 4 \\implies 0 = 12 - 2n - 4 \\implies 8 - 2n = 0 \\implies n = 4$."
  },
  {
    id: "est1_2026_mar_18",
    question: "Given the following system of inequalities\n\\[ \\begin{cases} y > x - 3 \\\\ y > -x + 1 \\end{cases} \\]\nwhat is the smallest integer value that $y$ can attain in the solution set?",
    options: ["-1", "0", "1", "2"],
    correctAnswer: "0",
    explanation: "Adding the two inequalities gives $2y > -2 \\implies y > -1$. Since $y$ must be strictly greater than -1, the smallest integer value it can attain is 0 (for example, at $x=2$)."
  },
  {
    id: "est1_2026_mar_19",
    question: "The graph of the function of equation $y = 2x^2 + 9x - 4$ has an axis of symmetry of equation $x = -\\frac{t}{4}$, what is the value of $t$?",
    options: ["-9", "9", "$\\frac{-9}{4}$", "4"],
    correctAnswer: "9",
    explanation: "The axis of symmetry of $y = ax^2 + bx + c$ is $x = -b / (2a)$. Here $x = -9/(2 \\times 2) = -9/4$. By setting this equal to $-t/4$, we have $-t/4 = -9/4 \\implies t = 9$."
  },
  {
    id: "est1_2026_mar_20",
    question: "For $0 < a < 1$, which of the options below is the greatest?",
    options: ["$\\frac{1}{a}$", "$a^2$", "$\\sqrt{a}$", "$-a$"],
    correctAnswer: "$\\frac{1}{a}$",
    explanation: "Since $0 < a < 1$, taking the reciprocal gives $1/a > 1$. Meanwhile $a^2 < 1$, $\\sqrt{a} < 1$, and $-a < 0$. Therefore, $\\frac{1}{a}$ is the greatest."
  },
  {
    id: "est1_2026_mar_21",
    question: "The cost of using Wi - Fi connection at the mall is $0.06$ cents per minute. After using it for $n$ hours, what is the cost in cents?",
    options: ["$0.06n$", "$0.36n$", "$0.6n$", "$3.6n$"],
    correctAnswer: "$3.6n$",
    explanation: "There are $60n$ minutes in $n$ hours. Cost = $0.06 \\times 60n = 3.6n$ cents."
  },
  {
    id: "est1_2026_mar_22",
    question: "Given that $a = 5n - 23$ and $b = 3n + 5$ and if $a$ and $b$ are complementary angles, what is the value of $n$?",
    options: ["13.5", "12.2", "11.6", "10"],
    correctAnswer: "13.5",
    explanation: "Complementary angles sum to $90^\\circ$. $(5n - 23) + (3n + 5) = 90 \\implies 8n - 18 = 90 \\implies 8n = 108 \\implies n = 108 / 8 = 13.5$."
  },
  {
    id: "est1_2026_mar_23",
    question: "Sam is 12 years older than his sister Mary. In 8 years, Sam will be twice as old as Mary. How old is Sam?",
    options: ["12 years", "16 years", "20 years", "24 years"],
    correctAnswer: "16 years",
    explanation: "Let Mary's current age be $M$. Then Sam is $S = M + 12$. In 8 years: $S + 8 = 2(M + 8) \\implies (M + 12) + 8 = 2M + 16 \\implies M + 20 = 2M + 16 \\implies M = 4$. So Sam is currently $4 + 12 = 16$ years old."
  },
  {
    id: "est1_2026_mar_24",
    question: "A school principal decide to donate his set of books to $s$ group of teachers. Giving each teacher 5 books will leave 23 books behind. Giving each teacher 6 books, the principle will need 8 more books. How many teachers are there?",
    options: ["178", "124", "60", "31"],
    correctAnswer: "31",
    explanation: "Let $t$ be the number of teachers. Total books = $5t + 23 = 6t - 8$. Solving for $t$: $23 + 8 = 6t - 5t \\implies t = 31$."
  },
  {
    id: "est1_2026_mar_25",
    question: "What is the radius of the following circle $x^2 + y^2 - 6x + 4y - 3 = 0$?",
    options: ["$\\sqrt{3}$", "3", "4", "6"],
    correctAnswer: "4",
    explanation: "Complete the square: $(x^2 - 6x + 9) + (y^2 + 4y + 4) = 3 + 9 + 4 \\implies (x - 3)^2 + (y + 2)^2 = 16$. Radius $r = \\sqrt{16} = 4$."
  },
  {
    id: "est1_2026_mar_26",
    question: "What is the value of $x$ in $5(x + 5) + 3x + 11 = 180$?",
    options: ["144", "72", "18", "10"],
    correctAnswer: "18",
    explanation: "Expand: $5x + 25 + 3x + 11 = 180 \\implies 8x + 36 = 180 \\implies 8x = 144 \\implies x = 18$."
  },
  {
    id: "est1_2026_mar_27",
    question: "The average number of insects in a forest from 1990 to 2020 can be modeled by the equation $n = 32 + 1.5t$ where $t$ represents the number of years since 1990, and $n$ represents the average number of insects in the forest. Which of the following best describes the significance of the number 1.5 in the equation?",
    options: [
      "The approximate increase in the number of insects per year.",
      "The difference between the number of insects in 1990 and 2020.",
      "The average number of insects in 2020.",
      "The average number of new insects arriving to the forest."
    ],
    correctAnswer: "The approximate increase in the number of insects per year.",
    explanation: "In a linear model $y = mx + b$, the slope $m$ ($1.5$) represents the rate of change per unit of time (per year)."
  },
  {
    id: "est1_2026_mar_28",
    question: "John was driving his car with a speed of $70\\ km/h$. express his speed in $m/s$.",
    options: ["18.44", "19.44", "20.44", "21.44"],
    correctAnswer: "19.44",
    explanation: "$70 \\text{ km/h} = \\frac{70 \\times 1000}{3600} \\text{ m/s} = \\frac{700}{36} = \\frac{175}{9} \\approx 19.44 \\text{ m/s}$."
  },
  {
    id: "est1_2026_mar_29",
    question: "A class contains 35 students. 15 students speak French, while 20 speak English. If 10 students speak both English and French, what is the number of students who don't speak neither English nor French?",
    options: ["5", "10", "15", "20"],
    correctAnswer: "10",
    explanation: "Using the inclusion-exclusion principle for those who speak at least one language: $n(F \\cup E) = 15 + 20 - 10 = 25$. Students who speak neither = Total - $n(F \\cup E) = 35 - 25 = 10$."
  },
  {
    id: "est1_2026_mar_30",
    question: "The table above gives the number of hours Jane studied for the EST exam during the 4 weeks of February. What is the average number of the hours she studied per week?",
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
<foreignObject width="100%" height="100%">
  <div xmlns="http://www.w3.org/1999/xhtml">
    <table style="width:100px; border-collapse: collapse; text-align: center; border: 1px solid black;">
      <tr><td style="border: 1px solid black; padding: 4px;">Week 1</td><td style="border: 1px solid black; padding: 4px;">50</td></tr>
      <tr><td style="border: 1px solid black; padding: 4px;">Week 2</td><td style="border: 1px solid black; padding: 4px;">30</td></tr>
      <tr><td style="border: 1px solid black; padding: 4px;">Week 3</td><td style="border: 1px solid black; padding: 4px;">20</td></tr>
      <tr><td style="border: 1px solid black; padding: 4px;">Week 4</td><td style="border: 1px solid black; padding: 4px;">50</td></tr>
    </table>
  </div>
</foreignObject>
</svg>`,
    options: ["150", "75", "37.5", "25"],
    correctAnswer: "37.5",
    explanation: "Sum of hours = $50 + 30 + 20 + 50 = 150$. Average per week = $150 / 4 = 37.5$."
  },
  {
    id: "est1_2026_mar_31",
    question: "If $(3a + 18)x^2 + 2b = 10^2$ for all values of $x$, what is the value of $a + b$?",
    options: ["8", "44", "56", "118"],
    correctAnswer: "44",
    explanation: "For the equation to be true equivalent to a constant ($10^2 = 100$), the coefficient of $x^2$ must be 0: $3a + 18 = 0 \\implies a = -6$. The constant term $2b = 100 \\implies b = 50$. Sum $a + b = -6 + 50 = 44$."
  },
  {
    id: "est1_2026_mar_32",
    question: "If $3x^2 + 2y^2 = 44$ and $y = -2x$, what could be the value of $x \\times y$?",
    options: ["-4", "4", "-8", "12"],
    correctAnswer: "-8",
    explanation: "Substitute $y$: $3x^2 + 2(-2x)^2 = 44 \\implies 3x^2 + 8x^2 = 44 \\implies 11x^2 = 44 \\implies x^2 = 4$. So $x = 2$ or $x = -2$. The product $xy = x(-2x) = -2x^2 = -2(4) = -8$."
  },
  {
    id: "est1_2026_mar_33",
    question: "What is the lowest value of $y$ that $f(x) = 2x^2 - 12x + 13$ can have?",
    options: ["-13", "-5", "0", "3"],
    correctAnswer: "-5",
    explanation: "The minimum occurs at the vertex $x = -(-12) / (2 \\times 2) = 12/4 = 3$. Minimum value $y = f(3) = 2(3)^2 - 12(3) + 13 = 18 - 36 + 13 = -5$."
  },
  {
    id: "est1_2026_mar_34",
    question: "Using the figure above, what is the value of $\\cos b$?",
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
<polygon points="50,150 250,150 50,20" fill="none" stroke="black" stroke-width="2"/>
<text x="165" y="75" font-size="14">16 (Hypotenuse)</text>
<text x="145" y="170" font-size="14">12 (Opposite Leg)</text>
<text x="60" y="50" font-size="16" font-family="italic">b</text>
</svg>`,
    options: ["0.661", "0.7", "0.75", "0.911"],
    correctAnswer: "0.661",
    explanation: "Right triangle with hypotenuse $16$ and opposite leg $12$ (to angle $b$). The adjacent leg is $\\sqrt{16^2 - 12^2} = \\sqrt{256 - 144} = \\sqrt{112}$. $\\cos b = \\frac{\\text{adj}}{\\text{hyp}} = \\frac{\\sqrt{112}}{16} \\approx \\frac{10.583}{16} \\approx 0.661$."
  },
  {
    id: "est1_2026_mar_35",
    question: "Given the equation $\\frac{3(n-1) + 2}{2} = \\frac{4 + (3 - 2n)}{3}$, what is the value of $n$?",
    options: ["$\\frac{2}{13}$", "$\\frac{2}{17}$", "$\\frac{13}{17}$", "$\\frac{17}{13}$"],
    correctAnswer: "$\\frac{17}{13}$",
    explanation: "Simplify numerators: $\\frac{3n - 3 + 2}{2} = \\frac{4 + 3 - 2n}{3} \\implies \\frac{3n - 1}{2} = \\frac{7 - 2n}{3}$. Cross-multiply: $3(3n - 1) = 2(7 - 2n) \\implies 9n - 3 = 14 - 4n \\implies 13n = 17 \\implies n = \\frac{17}{13}$."
  },
  {
    id: "est1_2026_mar_36",
    question: "Given the following $\\frac{8x^2 - 22x + 11}{2x + n} = 4x + 1 + \\frac{17}{2x+n}$, what is the value of $n$?",
    options: ["-6", "-3", "2", "5"],
    correctAnswer: "-6",
    explanation: "Multiply throughout by $2x+n$: $8x^2 - 22x + 11 = (4x + 1)(2x + n) + 17 = 8x^2 + 4nx + 2x + n + 17 = 8x^2 + (4n + 2)x + (n + 17)$. Matching the $x$ coefficients: $-22 = 4n + 2 \\implies 4n = -24 \\implies n = -6$."
  },
  {
    id: "est1_2026_mar_37",
    question: "For $x < 0$, how many solutions does $x^3(x^2 - 5) = -4x$ admit?",
    options: ["1", "2", "3", "5"],
    correctAnswer: "2",
    explanation: "Since $x < 0$, $x \\neq 0$. Divide by $x$: $x^2(x^2 - 5) = -4 \\implies x^4 - 5x^2 + 4 = 0 \\implies (x^2 - 1)(x^2 - 4) = 0$. Solutions are $x = \\pm 1$ and $x = \\pm 2$. Since $x < 0$, the valid solutions are $-1$ and $-2$ (a total of 2 solutions)."
  },
  {
    id: "est1_2026_mar_38",
    question: "For $n > 0$, the points $(2; n+5)$ and $(n; 3)$ belong to line $(L)$. if $(L)$ passes through the origin, what is the value of $n$?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "1",
    explanation: "Because it passes through $(0,0)$, the slopes from origin are equal: $\\frac{n+5 - 0}{2 - 0} = \\frac{3 - 0}{n - 0} \\implies \\frac{n+5}{2} = \\frac{3}{n} \\implies n(n+5) = 6 \\implies n^2 + 5n - 6 = 0 \\implies (n+6)(n-1) = 0$. Since $n>0$, $n=1$."
  },
  {
    id: "est1_2026_mar_39",
    question: "An object has a mass of $500\\ grams$. If its density is $2\\ kg/m^3$, what is its volume?",
    options: ["$1000\\ m^3$", "$4\\ m^3$", "$0.25\\ m^3$", "$250\\ m^3$"],
    correctAnswer: "$0.25\\ m^3$",
    explanation: "Convert mass to kg: $500\\text{ g} = 0.5\\text{ kg}$. $\\text{Volume} = \\frac{\\text{Mass}}{\\text{Density}} = \\frac{0.5}{2} = 0.25\\text{ m}^3$."
  },
  {
    id: "est1_2026_mar_40",
    question: "In which year was the recorded temperature the highest with respect to the temperature given by the best fit line?",
    svg: `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
<text x="10" y="50" font-size="10" font-family="sans-serif">Scatterplot mapping years 2002 to 2012</text>
<text x="10" y="70" font-size="10" font-family="sans-serif">Highest positive residual is at time=4 (2006)</text>
</svg>`,
    options: ["2006", "2007", "2008", "2009"],
    correctAnswer: "2006",
    explanation: "This corresponds to the largest positive vertical distance from the point to the line of best fit. Looking at the graph, this happens at time = 4, which corresponds to the year 2006 ($2002 + 4$)."
  },
  {
    id: "est1_2026_mar_41",
    question: "What was the average change of temperature per year for the whole period of 10 years?",
    options: ["0.4", "0.5", "0.6", "0.7"],
    correctAnswer: "0.5",
    explanation: "The line of best fit starts at approximately 28$^{\\circ}$ at year 0 and ends at 33$^{\\circ}$ at year 10. The average rate of change (slope) is $\\frac{33 - 28}{10} = \\frac{5}{10} = 0.5^{\\circ}$/year."
  },
  {
    id: "est1_2026_mar_42",
    question: "A company manufactures gift boxes and sells them for $\\$8$ each. Manufacturing $n$ items costs $6n + 200$. How many items do they need to sell in order to start making profit if the profit is the difference of the revenue and cost?",
    options: ["98", "99", "100", "101"],
    correctAnswer: "101",
    explanation: "Profit $P(n) = \\text{Revenue} - \\text{Cost} = 8n - (6n + 200) = 2n - 200$. To make a profit, $P(n) > 0 \\implies 2n - 200 > 0 \\implies 2n > 200 \\implies n > 100$. They need to sell at least 101 items."
  },
  {
    id: "est1_2026_mar_43",
    question: "$y$ varies directly as $2m$, and $y = 4$ when $m = 1$, what is the value of $3y$ when $m = 4$?",
    options: ["4", "16", "32", "48"],
    correctAnswer: "48",
    explanation: "equation is $y = k(2m)$. Substituting $y=4$ and $m=1$: $4 = k(2(1)) \\implies k = 2$. So $y = 4m$. When $m=4$, $y = 4(4) = 16$. Then $3y = 3(16) = 48$."
  },
  {
    id: "est1_2026_mar_44",
    question: "$11, 12, 15, x, 19, 22, 22, 23$ the list of values above is in ascending order such that the sum of the median and the mode is equal to 39.5. what is double the mean of this list? Such that $x \\neq \\{15; 19\\}$.",
    options: ["17.5", "22.5", "35", "40"],
    correctAnswer: "35",
    explanation: "There are 8 values. The median is the average of the 4th and 5th terms: $\\frac{x + 19}{2}$. The mode is 22. Sum $= \\frac{x + 19}{2} + 22 = 39.5 \\implies \\frac{x + 19}{2} = 17.5 \\implies x + 19 = 35 \\implies x = 16$. The sum of all values is $11+12+15+16+19+22+22+23 = 140$. Mean = $140 / 8 = 17.5$. Double the mean is $35$."
  },
  {
    id: "est1_2026_mar_45",
    question: "Given the parabola $y = x^2 + 3$ and the straight line $y = x$, their graphs",
    options: ["intersect in 1 point", "intersect in 2 points", "don't intersect", "are parallel."],
    correctAnswer: "don't intersect",
    explanation: "Set the equations equal to find intersections: $x^2 + 3 = x \\implies x^2 - x + 3 = 0$. The discriminant is $\\Delta = b^2 - 4ac = (-1)^2 - 4(1)(3) = 1 - 12 = -11$. Since $\\Delta < 0$, there are no real solutions, so they don't intersect."
  },
  {
    id: "est1_2026_mar_46",
    question: "Which age group running in the marathon has the highest percentage?",
    svg: `<svg viewBox="0 0 450 250" xmlns="http://www.w3.org/2000/svg">
<foreignObject width="100%" height="100%">
  <div xmlns="http://www.w3.org/1999/xhtml">
    <table style="width:100%; border-collapse: collapse; text-align: center; border: 1px solid black;">
      <tr style="font-weight: bold; background: #eee;">
        <td style="border: 1px solid black; padding: 4px;">Age Group</td>
        <td style="border: 1px solid black; padding: 4px;">Number of runners</td>
        <td style="border: 1px solid black; padding: 4px;">Total number of people</td>
      </tr>
      <tr><td style="border: 1px solid black; padding: 4px;">10-19 years</td><td style="border: 1px solid black; padding: 4px;">18</td><td style="border: 1px solid black; padding: 4px;">165</td></tr>
      <tr><td style="border: 1px solid black; padding: 4px;">20-29 years</td><td style="border: 1px solid black; padding: 4px;">51</td><td style="border: 1px solid black; padding: 4px;">145</td></tr>
      <tr><td style="border: 1px solid black; padding: 4px;">30-39 years</td><td style="border: 1px solid black; padding: 4px;">36</td><td style="border: 1px solid black; padding: 4px;">180</td></tr>
      <tr><td style="border: 1px solid black; padding: 4px;">40-49 years</td><td style="border: 1px solid black; padding: 4px;">55</td><td style="border: 1px solid black; padding: 4px;">175</td></tr>
    </table>
  </div>
</foreignObject>
</svg>`,
    options: ["10 - 19 years.", "20 - 29 years.", "30 - 39 years.", "40 - 49 years."],
    correctAnswer: "20 - 29 years.",
    explanation: "Percentages of runners relative to total people in each age group: $18/165 \\approx 10.9\\%$, $51/145 \\approx 35.1\\%$, $36/180 = 20\\%$, $55/175 \\approx 31.4\\%$. The highest is 20-29 years."
  },
  {
    id: "est1_2026_mar_47",
    question: "What is the probability that the winner is between 20 and 39 years of age?",
    options: ["51/145", "36/180", "87/325", "87/160"],
    correctAnswer: "87/160",
    explanation: "Total number of runners = $18 + 51 + 36 + 55 = 160$. Number of runners between 20 and 39 years = $51 + 36 = 87$. Probability = $\\frac{\\text{favorable}}{\\text{total}} = \\frac{87}{160}$."
  },
  {
    id: "est1_2026_mar_48",
    question: "If $8x^2 + 3y^2 < 100$ and $y = 2x$ what is the value of $3x$?",
    options: ["$-3 < 3x < 3$", "$-\\sqrt{3} < 3x < \\sqrt{3}$", "$-3\\sqrt{5} < 3x < 3\\sqrt{5}$", "$-5\\sqrt{3} < 3x < 5\\sqrt{3}$"],
    correctAnswer: "$-3\\sqrt{5} < 3x < 3\\sqrt{5}$",
    explanation: "Substitute $y$: $8x^2 + 3(2x)^2 < 100 \\implies 8x^2 + 3(4x^2) < 100 \\implies 20x^2 < 100 \\implies x^2 < 5 \\implies -\\sqrt{5} < x < \\sqrt{5}$. Multiply by 3 to find $3x$: $-3\\sqrt{5} < 3x < 3\\sqrt{5}$."
  },
  {
    id: "est1_2026_mar_49",
    question: "Given the following function $f(x) = \\sqrt{2 - |x|}$, the domain of definition of $f$ is.",
    options: ["$0 \\leq x \\leq 2$", "$-2 \\leq x \\leq 2$", "$x \\leq -2$ or $x \\geq 2$", "$x = 2$ or $x = -2$"],
    correctAnswer: "$-2 \\leq x \\leq 2$",
    explanation: "The expression inside the square root must be non-negative: $2 - |x| \\geq 0 \\implies |x| \\leq 2$, which means $-2 \\leq x \\leq 2$."
  },
  {
    id: "est1_2026_mar_50",
    question: "Tom won a voucher from a supermarket. The voucher states that some items can be bought for a discount of 50% while others can be bought for a discount of 25% according to the below table. Tom buys one item from each and uses the voucher. What is the total discount percentage that he will get on the bill?",
    svg: `<svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg">
<foreignObject width="100%" height="100%">
  <div xmlns="http://www.w3.org/1999/xhtml">
    <table style="width:100%; border-collapse: collapse; text-align: center; border: 1px solid black;">
      <tr style="background: #eee; font-weight:bold;">
        <td style="border: 1px solid black; padding: 4px;">Item</td><td style="border: 1px solid black;">Cereals</td><td style="border: 1px solid black;">Milk</td><td style="border: 1px solid black;">Cheese</td><td style="border: 1px solid black;">Biscuits</td><td style="border: 1px solid black;">Juice</td>
      </tr>
      <tr><td style="border: 1px solid black; padding: 4px; font-weight:bold;">Price($)</td><td style="border: 1px solid black;">20</td><td style="border: 1px solid black;">25</td><td style="border: 1px solid black;">35</td><td style="border: 1px solid black;">10</td><td style="border: 1px solid black;">10</td></tr>
      <tr><td style="border: 1px solid black; padding: 4px; font-weight:bold;">Discount</td><td style="border: 1px solid black;">50%</td><td style="border: 1px solid black;">25%</td><td style="border: 1px solid black;">25%</td><td style="border: 1px solid black;">50%</td><td style="border: 1px solid black;">50%</td></tr>
    </table>
  </div>
</foreignObject>
</svg>`,
    options: ["75%", "65%", "37.5%", "35%"],
    correctAnswer: "35%",
    explanation: "Total original price = $20 + 25 + 35 + 10 + 10 = 100$. Discount on Cereals = $50\\%$ of $20 = 10$. Milk = $25\\%$ of $25 = 6.25$. Cheese = $25\\%$ of $35 = 8.75$. Biscuits = $50\\%$ of $10 = 5$. Juice = $50\\%$ of $10 = 5$. Total discount amount = $10 + 6.25 + 8.75 + 5 + 5 = 35$. The percentage discount is $(35 / 100) \\times 100\\% = 35\\%$."
  },
  {
    id: "est1_2026_mar_51",
    question: "Given the two lines $(L_1): 5y + 7x = 3$ and $(L_2): \\frac{8}{3}y = ax - 4$, What is the value of $a$ if the lines are perpendicular?",
    options: ["-7/5", "3/8", "-21/40", "40/21"],
    correctAnswer: "40/21",
    explanation: "Write both in slope-intercept form. For $L_1$: $5y = -7x + 3 \\implies y = -\\frac{7}{5}x + \\frac{3}{5}$. Slope $m_1 = -\\frac{7}{5}$. For $L_2$: $y = \\frac{3}{8}(ax - 4) = \\frac{3a}{8}x - 1.5$. Slope $m_2 = \\frac{3a}{8}$. Since they are perpendicular, $m_1 \\times m_2 = -1 \\implies -\\frac{7}{5} \\times \\frac{3a}{8} = -1 \\implies -\\frac{21a}{40} = -1 \\implies a = \\frac{40}{21}$."
  },
  {
    id: "est1_2026_mar_52",
    question: "What is the area, in square units, of the region bounded by the lines $y = 4, y = 7, x = 9$ and $x = 11$?",
    options: ["6", "9", "13", "48"],
    correctAnswer: "6",
    explanation: "This region is a rectangle. The length is $11 - 9 = 2$ and the width is $7 - 4 = 3$. Area $= 2 \\times 3 = 6$ square units."
  },
  {
    id: "est1_2026_mar_53",
    question: "For $x < -1$, find the equivalent expression to $A(x) = 18|x^2| - 6|-3x^2| - |x + 1|$.",
    options: ["$x + 1$", "$-x - 1$", "$36x^2 - x - 1$", "$36x^2 + x + 1$"],
    correctAnswer: "$x + 1$",
    explanation: "For any real $x$, $|x^2| = x^2$ and $|-3x^2| = 3x^2$. Since $x < -1$, we know $x + 1 < 0$, so $|x + 1| = -(x + 1) = -x - 1$. Substituting these in: $A(x) = 18(x^2) - 6(3x^2) - (-x - 1) = 18x^2 - 18x^2 + x + 1 = x + 1$."
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EST1_2026_MARCH_SET
});
