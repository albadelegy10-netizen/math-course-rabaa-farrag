import { Question } from "../../types";

export const EST2_2026_JAN_PART3: Question[] = [
  {
    id: "est2_2026_jan_21",
    question: "If $|7 - 4x| > 3x + 1$, which of the following is the solution of the inequality?",
    options: [
      "$x < \\frac{7}{6}$",
      "$x < \\frac{6}{8}$",
      "$x < \\frac{6}{7}$ or $x > 8$",
      "$x > 7$",
      "$x > \\frac{6}{7}$ or $x < 7$"
    ],
    correctAnswer: 2,
    explanation: "An absolute value inequality $|A| > B$ is equivalent to two separate inequalities: $A > B$ or $A < -B$.\nCase 1: $7 - 4x > 3x + 1$\nSubtract $3x$ from both sides: $7 - 7x > 1$\nSubtract 7 from both sides: $-7x > -6$\nDivide by -7 and flip the inequality sign: $x < \\frac{6}{7}$\nCase 2: $7 - 4x < -(3x + 1)$\n$7 - 4x < -3x - 1$\nAdd $4x$ to both sides: $7 < x - 1$\nAdd 1 to both sides: $8 < x$, which is the same as $x > 8$\nCombining both cases, the solution is $x < \\frac{6}{7}$ or $x > 8$.",
    category: "Algebra",
    topics: ["Inequalities", "Absolute Value Inequalities"]
  },
  {
    id: "est2_2026_jan_22",
    question: "$ABC$ is a right triangle as shown in the figure above. If $AB = 5x - 6$ and $BC = 2x$, which of the following is true if $ABC$ is also isosceles? (Figure not drawn to scale)",
    svg: `<svg viewBox="0 0 200 150" class="w-full h-full max-w-xs mx-auto">
      <path d="M 50 20 L 50 120 L 180 120 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <rect x="50" y="20" width="10" height="10" fill="currentColor" opacity="0.3"/>
      <text x="40" y="15" class="text-xs" fill="currentColor">A</text>
      <text x="35" y="125" class="text-xs" fill="currentColor">B</text>
      <text x="185" y="125" class="text-xs" fill="currentColor">C</text>
      <text x="15" y="70" class="text-xs" fill="currentColor">5x - 6</text>
      <text x="115" y="135" class="text-xs" fill="currentColor">2x</text>
    </svg>`,
    options: [
      "$x = \\frac{6}{7}$",
      "$x = \\frac{30-6\\sqrt{2}}{23}$",
      "$x = \\frac{6}{5}$",
      "$x = 2$",
      "None of the above"
    ],
    correctAnswer: 4,
    explanation: "The figure shows a right triangle with the right angle at $A$. Therefore, $AB$ and $AC$ are the legs, and $BC$ is the hypotenuse.\nIf the right triangle is also isosceles, the two legs must be equal in length. So, $AB = AC$.\nUsing the Pythagorean theorem: $BC^2 = AB^2 + AC^2$.\nSince $AB = AC$, we have $BC^2 = 2AB^2$.\nSubstitute the given expressions: $(2x)^2 = 2(5x - 6)^2$.\n$4x^2 = 2(25x^2 - 60x + 36)$\nDivide by 2: $2x^2 = 25x^2 - 60x + 36$\nRearrange into a standard quadratic equation: $23x^2 - 60x + 36 = 0$\nUse the quadratic formula to solve for $x$:\n$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{60 \\pm \\sqrt{(-60)^2 - 4(23)(36)}}{2(23)}$\n$x = \\frac{60 \\pm \\sqrt{3600 - 3312}}{46} = \\frac{60 \\pm \\sqrt{288}}{46} = \\frac{60 \\pm 12\\sqrt{2}}{46} = \\frac{30 \\pm 6\\sqrt{2}}{23}$\nWe have two possible solutions for $x$. However, we must check if they result in valid side lengths (side lengths must be positive).\nThe side length $AB = 5x - 6$ must be greater than 0, so $5x > 6 \\Rightarrow x > 1.2$.\nLet's evaluate the two solutions:\n$x_1 = \\frac{30 - 6\\sqrt{2}}{23} \\approx \\frac{30 - 8.485}{23} \\approx 0.935$. Since $0.935 < 1.2$, this solution gives a negative side length and is invalid.\n$x_2 = \\frac{30 + 6\\sqrt{2}}{23} \\approx \\frac{30 + 8.485}{23} \\approx 1.673$. Since $1.673 > 1.2$, this is a valid solution.\nOption B is $x = \\frac{30 - 6\\sqrt{2}}{23}$, which is the invalid solution.\nThe correct valid solution is not listed among the options A, B, C, or D. Therefore, the answer is 'None of the above'.",
    category: "Geometry",
    topics: ["Triangles", "Right Triangles", "Pythagorean Theorem", "Quadratic Equations"]
  },
  {
    id: "est2_2026_jan_23",
    question: "In the figure above, the area of the shaded part is: (Figure not drawn to scale)",
    svg: `<svg viewBox="0 0 200 200" class="w-full h-full max-w-xs mx-auto">
      <circle cx="100" cy="100" r="80" fill="#9ca3af" stroke="black" stroke-width="2"/>
      <circle cx="100" cy="100" r="40" fill="white" stroke="black" stroke-width="2"/>
      <circle cx="100" cy="100" r="2" fill="black"/>
      <path d="M 100 100 L 90 60" fill="none" stroke="black" stroke-width="1.5"/>
      <path d="M 30 60 L 170 60" fill="none" stroke="black" stroke-width="1.5"/>
      <text x="90" y="55" class="text-xs" fill="black">100 m</text>
      <path d="M 50 55 L 60 65 M 55 55 L 65 65" fill="none" stroke="black" stroke-width="1"/>
      <path d="M 140 55 L 150 65 M 145 55 L 155 65" fill="none" stroke="black" stroke-width="1"/>
      <rect x="85" y="60" width="5" height="5" fill="none" stroke="black" stroke-width="1"/>
    </svg>`,
    options: [
      "$100\\pi\\ m^2$",
      "$250\\pi\\ m^2$",
      "$1,000\\pi\\ m^2$",
      "$1,250\\pi\\ m^2$",
      "$2,500\\pi\\ m^2$"
    ],
    correctAnswer: 4,
    explanation: "The shaded area is an annulus (a ring), which is the area of the larger circle minus the area of the smaller circle.\nLet $R$ be the radius of the larger circle and $r$ be the radius of the smaller circle.\nArea of shaded region = $\\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2)$.\nThe figure shows a chord of the larger circle that is tangent to the smaller circle. The length of this chord is $100\\ m$.\nA radius of the larger circle drawn to the point of tangency is perpendicular to the chord and bisects it. This forms a right triangle where the hypotenuse is $R$, one leg is $r$, and the other leg is half the length of the chord, which is $100 / 2 = 50\\ m$.\nUsing the Pythagorean theorem on this right triangle:\n$r^2 + 50^2 = R^2$\n$R^2 - r^2 = 50^2 = 2500$\nSubstitute this back into the area formula:\nArea = $\\pi(R^2 - r^2) = \\pi(2500) = 2,500\\pi\\ m^2$.",
    category: "Geometry",
    topics: ["Circles", "Area", "Pythagorean Theorem"]
  },
  {
    id: "est2_2026_jan_24",
    question: "A chemist has a solution $A$ that is 30% acid and another solution $B$ that is 60% acid.\n\nHow many liters of each solution should be mixed to form 120 liters of a new solution that is 40% acid?\n\nNote: Solution $A$ and Solution $B$ are HCl acids, and their percentage concentrations are given as v/v (volume by volume) to ensure scientific accuracy.",
    options: [
      "Volume of solution A: 88 L, Volume of solution B: 32 L",
      "Volume of solution A: 80 L, Volume of solution B: 40 L",
      "Volume of solution A: 50 L, Volume of solution B: 70 L",
      "Volume of solution A: 30 L, Volume of solution B: 90 L",
      "Volume of solution A: 20 L, Volume of solution B: 100 L"
    ],
    correctAnswer: 1,
    explanation: "Let $x$ be the volume of solution A in liters, and $y$ be the volume of solution B in liters.\nWe can set up a system of two linear equations based on the total volume and the total amount of acid.\nEquation 1 (Total Volume): $x + y = 120$\nEquation 2 (Total Acid): $0.30x + 0.60y = 0.40(120)$\nSimplify Equation 2:\n$0.30x + 0.60y = 48$\nMultiply the entire equation by 10 to remove decimals:\n$3x + 6y = 480$\nDivide by 3:\n$x + 2y = 160$\nNow we have a simpler system:\n1) $x + y = 120$\n2) $x + 2y = 160$\nSubtract Equation 1 from Equation 2:\n$(x + 2y) - (x + y) = 160 - 120$\n$y = 40$\nSubstitute $y = 40$ back into Equation 1:\n$x + 40 = 120 \\Rightarrow x = 80$\nSo, 80 liters of solution A and 40 liters of solution B are needed.",
    category: "Algebra",
    topics: ["Systems of Equations", "Word Problems", "Mixture Problems"]
  },
  {
    id: "est2_2026_jan_25",
    question: "In the figure above, the curve $C_f$ represents the graph of a function $f$. Which of the following rational functions correspond to $f$?",
    svg: `<svg viewBox="-20 -20 200 150" class="w-full h-full max-w-md mx-auto">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" stroke-width="1"/>
        </pattern>
      </defs>
      <rect x="-20" y="-20" width="200" height="150" fill="url(#grid)" />
      <path d="M 60 -20 L 60 130" fill="none" stroke="black" stroke-width="1.5"/>
      <path d="M -20 100 L 180 100" fill="none" stroke="black" stroke-width="1.5"/>
      <polygon points="180,100 175,95 175,105" fill="black"/>
      <polygon points="60,-20 55,-15 65,-15" fill="black"/>
      <text x="185" y="110" class="text-xs" fill="currentColor">x</text>
      <text x="45" y="-15" class="text-xs" fill="currentColor">y</text>
      <text x="50" y="115" class="text-xs" fill="currentColor">0</text>
      
      <path d="M 40 -20 L 40 130" fill="none" stroke="black" stroke-width="1" stroke-dasharray="4"/>
      <path d="M 120 -20 L 120 130" fill="none" stroke="black" stroke-width="1" stroke-dasharray="4"/>
      
      <path d="M -20 95 Q 10 95 20 100 T 35 130" fill="none" stroke="black" stroke-width="1.5"/>
      <path d="M 45 -20 Q 50 60 60 73 T 100 100 T 115 130" fill="none" stroke="black" stroke-width="1.5"/>
      <path d="M 125 -20 Q 130 60 180 70" fill="none" stroke="black" stroke-width="1.5"/>
      
      <text x="130" y="60" class="text-xs" fill="currentColor">C_f</text>
      
      <text x="-10" y="115" class="text-xs" fill="currentColor">-6</text>
      <text x="10" y="115" class="text-xs" fill="currentColor">-4</text>
      <text x="30" y="115" class="text-xs" fill="currentColor">-2</text>
      <text x="90" y="115" class="text-xs" fill="currentColor">2</text>
      <text x="130" y="115" class="text-xs" fill="currentColor">4</text>
      <text x="150" y="115" class="text-xs" fill="currentColor">6</text>
      
      <text x="50" y="65" class="text-xs" fill="currentColor">2</text>
      <text x="50" y="25" class="text-xs" fill="currentColor">4</text>
      <text x="45" y="135" class="text-xs" fill="currentColor">-2</text>
    </svg>`,
    options: [
      "$\\frac{1-x^2}{(x+1)(x-3)}$",
      "$\\frac{x^2-1}{(x+1)(x-3)}$",
      "$\\frac{x^2-4}{(x+1)(x-3)}$",
      "$\\frac{4-x^2}{(x-1)(x-3)}$",
      "$\\frac{x^2-4}{(-x+1)(x+3)}$"
    ],
    correctAnswer: 2,
    explanation: "Let's analyze the key features of the graph to determine the correct rational function.\n1. **Vertical Asymptotes:** The graph has vertical asymptotes at $x = -1$ and $x = 3$. This means the denominator of the rational function must be zero at these $x$-values. Therefore, the denominator should contain the factors $(x + 1)$ and $(x - 3)$. This eliminates options D and E.\n2. **x-intercepts:** The graph crosses the x-axis at $x = -2$ and $x = 2$. This means the numerator must be zero at these values. The factors corresponding to these roots are $(x + 2)$ and $(x - 2)$. Multiplying them gives $(x + 2)(x - 2) = x^2 - 4$. This points to option C.\n3. **y-intercept:** Let's verify with the y-intercept. The graph crosses the y-axis at a positive value, seemingly around $y = 1.33$ or $4/3$. Let's evaluate option C at $x = 0$:\n$f(0) = \\frac{0^2 - 4}{(0 + 1)(0 - 3)} = \\frac{-4}{(1)(-3)} = \\frac{-4}{-3} = \\frac{4}{3}$.\nThis matches the visual representation on the graph.\nTherefore, the correct function is $f(x) = \\frac{x^2-4}{(x+1)(x-3)}$.",
    category: "Algebra",
    topics: ["Rational Functions", "Graphs of Functions", "Asymptotes"]
  },
  {
    id: "est2_2026_jan_26",
    question: "Which of the situations below is best described by the graph above?",
    svg: `<svg viewBox="-20 -20 150 250" class="w-full h-full max-w-xs mx-auto">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" stroke-width="1"/>
        </pattern>
      </defs>
      <rect x="-20" y="-20" width="150" height="250" fill="url(#grid)" />
      <path d="M 20 -20 L 20 210" fill="none" stroke="black" stroke-width="1.5"/>
      <path d="M -20 180 L 110 180" fill="none" stroke="black" stroke-width="1.5"/>
      <polygon points="110,180 105,175 105,185" fill="black"/>
      <polygon points="20,-20 15,-15 25,-15" fill="black"/>
      <text x="115" y="190" class="text-xs" fill="currentColor">x</text>
      <text x="5" y="-15" class="text-xs" fill="currentColor">y</text>
      <text x="10" y="195" class="text-xs" fill="currentColor">0</text>
      
      <text x="35" y="195" class="text-xs" fill="currentColor">1</text>
      <text x="55" y="195" class="text-xs" fill="currentColor">2</text>
      <text x="75" y="195" class="text-xs" fill="currentColor">3</text>
      <text x="95" y="195" class="text-xs" fill="currentColor">4</text>
      
      <text x="5" y="165" class="text-xs" fill="currentColor">1</text>
      <text x="5" y="145" class="text-xs" fill="currentColor">2</text>
      <text x="5" y="125" class="text-xs" fill="currentColor">3</text>
      <text x="5" y="105" class="text-xs" fill="currentColor">4</text>
      <text x="5" y="85" class="text-xs" fill="currentColor">5</text>
      <text x="5" y="65" class="text-xs" fill="currentColor">6</text>
      <text x="5" y="45" class="text-xs" fill="currentColor">7</text>
      <text x="5" y="25" class="text-xs" fill="currentColor">8</text>
      <text x="5" y="5" class="text-xs" fill="currentColor">9</text>
      
      <path d="M 20 140 L 70 -10" fill="none" stroke="black" stroke-width="1.5"/>
    </svg>`,
    options: [
      "A guy starts with $4 in his account and earns $3 for every item he sells.",
      "A person pays a fixed fee of $2 for a taxi ride and an additional $3 for every mile traveled.",
      "The height of a plant is $2\\ cm$, and it grows by $1\\ cm$ every week.",
      "The price of a cup of coffee is $2, and an additional $2 is charged for every extra shot.",
      "The temperature is 2 degrees Celsius and rises by 1.5 degrees every hour."
    ],
    correctAnswer: 1,
    explanation: "Let's find the equation of the line shown in the graph.\nThe line passes through the y-intercept $(0, 2)$. This means the initial value (when $x=0$) is 2.\nThe line also passes through the point $(1, 5)$.\nWe can calculate the slope (rate of change): $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{5 - 2}{1 - 0} = \\frac{3}{1} = 3$.\nThe equation of the line is $y = 3x + 2$.\nNow let's evaluate the options to see which one matches this equation:\nA. Starts with $4 (y-intercept is 4), earns $3 per item (slope is 3). Equation: $y = 3x + 4$. Incorrect.\nB. Fixed fee of $2 (y-intercept is 2), $3 per mile (slope is 3). Equation: $y = 3x + 2$. This matches perfectly.\nC. Height is 2 (y-intercept is 2), grows 1 per week (slope is 1). Equation: $y = x + 2$. Incorrect.\nD. Price is $2 (y-intercept is 2), $2 per extra shot (slope is 2). Equation: $y = 2x + 2$. Incorrect.\nE. Temperature is 2 (y-intercept is 2), rises 1.5 per hour (slope is 1.5). Equation: $y = 1.5x + 2$. Incorrect.",
    category: "Data Analysis",
    topics: ["Linear Models", "Interpreting Graphs"]
  },
  {
    id: "est2_2026_jan_27",
    question: "Which of the following points does not satisfy the system of inequalities:\n$\\begin{cases} y \\ge 2x - 1 \\\\ y < -x + 4 \\end{cases}$?",
    options: [
      "$(0, 0)$",
      "$(1, 1)$",
      "$(1, 2)$",
      "$(2, 3)$",
      "$(0, 3)$"
    ],
    correctAnswer: 3,
    explanation: "To find which point does not satisfy the system, we plug each point $(x, y)$ into both inequalities. A point must satisfy BOTH inequalities to be a solution to the system.\nA. $(0, 0)$: $0 \\ge 2(0) - 1 \\Rightarrow 0 \\ge -1$ (True). $0 < -0 + 4 \\Rightarrow 0 < 4$ (True). Satisfies both.\nB. $(1, 1)$: $1 \\ge 2(1) - 1 \\Rightarrow 1 \\ge 1$ (True). $1 < -1 + 4 \\Rightarrow 1 < 3$ (True). Satisfies both.\nC. $(1, 2)$: $2 \\ge 2(1) - 1 \\Rightarrow 2 \\ge 1$ (True). $2 < -1 + 4 \\Rightarrow 2 < 3$ (True). Satisfies both.\nD. $(2, 3)$: $3 \\ge 2(2) - 1 \\Rightarrow 3 \\ge 3$ (True). $3 < -2 + 4 \\Rightarrow 3 < 2$ (False). Does NOT satisfy the second inequality.\nE. $(0, 3)$: $3 \\ge 2(0) - 1 \\Rightarrow 3 \\ge -1$ (True). $3 < -0 + 4 \\Rightarrow 3 < 4$ (True). Satisfies both.\nTherefore, the point $(2, 3)$ does not satisfy the system.",
    category: "Algebra",
    topics: ["Systems of Inequalities"]
  },
  {
    id: "est2_2026_jan_28",
    question: "The table above shows the temperatures, in degrees Celsius, recorded over a week in a certain village. If the coldest day was Friday, the warmest day was Sunday, the range of temperatures is 6, and the mean temperature is 13, then $(x, y) =$\n\n| Day | Temperature |\n| :--- | :--- |\n| Monday | 12 |\n| Tuesday | 14 |\n| Wednesday | 13 |\n| Thursday | 11 |\n| Friday | $x$ |\n| Saturday | 15 |\n| Sunday | $y$ |",
    options: [
      "$(10, 16)$",
      "$(13, 19)$",
      "$(16, 10)$",
      "$(16, 12)$",
      "$(18, 14)$"
    ],
    correctAnswer: 0,
    explanation: "We are given two pieces of information to create a system of equations.\n1. **Range:** The range is the difference between the highest and lowest values. We are told Sunday ($y$) is the warmest and Friday ($x$) is the coldest. So, $y - x = 6$.\n2. **Mean:** The mean is the sum of all values divided by the number of values. The mean is 13.\n$\\frac{12 + 14 + 13 + 11 + x + 15 + y}{7} = 13$\n$\\frac{65 + x + y}{7} = 13$\n$65 + x + y = 91$\n$x + y = 26$\nNow we have a system of two linear equations:\n1) $-x + y = 6$\n2) $x + y = 26$\nAdd the two equations together:\n$(-x + x) + (y + y) = 6 + 26$\n$2y = 32 \\Rightarrow y = 16$\nSubstitute $y = 16$ into the second equation:\n$x + 16 = 26 \\Rightarrow x = 10$\nSo, $(x, y) = (10, 16)$.",
    category: "Data Analysis",
    topics: ["Statistics", "Mean", "Range", "Systems of Equations"]
  },
  {
    id: "est2_2026_jan_29",
    question: "$ABC$ is a right triangle at $A$, such that $AB = 5\\ cm$ and $AC = 12\\ cm$. If $\\overline{AM}$ is the median relative to $\\overline{BC}$, then $AM$ equals: (Figure not drawn to scale)",
    svg: `<svg viewBox="0 0 200 150" class="w-full h-full max-w-xs mx-auto">
      <path d="M 50 20 L 50 120 L 180 20 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <rect x="50" y="20" width="10" height="10" fill="currentColor" opacity="0.3"/>
      <text x="40" y="15" class="text-xs" fill="currentColor">A</text>
      <text x="35" y="125" class="text-xs" fill="currentColor">B</text>
      <text x="185" y="15" class="text-xs" fill="currentColor">C</text>
      <text x="15" y="70" class="text-xs" fill="currentColor">5 cm</text>
      <text x="115" y="10" class="text-xs" fill="currentColor">12 cm</text>
      <path d="M 50 20 L 115 70" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text x="115" y="85" class="text-xs" fill="currentColor">M</text>
      <path d="M 80 90 L 85 100" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 145 40 L 150 50" fill="none" stroke="currentColor" stroke-width="1"/>
      <circle cx="115" cy="70" r="2" fill="currentColor"/>
    </svg>`,
    options: [
      "$3.0\\ cm$",
      "$3.5\\ cm$",
      "$4.5\\ cm$",
      "$5.5\\ cm$",
      "$6.5\\ cm$"
    ],
    correctAnswer: 4,
    explanation: "In a right triangle, the median drawn to the hypotenuse is equal to half the length of the hypotenuse.\nFirst, find the length of the hypotenuse $BC$ using the Pythagorean theorem:\n$BC^2 = AB^2 + AC^2$\n$BC^2 = 5^2 + 12^2 = 25 + 144 = 169$\n$BC = \\sqrt{169} = 13\\ cm$.\nSince $AM$ is the median to the hypotenuse $BC$, its length is half of $BC$:\n$AM = \\frac{BC}{2} = \\frac{13}{2} = 6.5\\ cm$.",
    category: "Geometry",
    topics: ["Right Triangles", "Medians", "Pythagorean Theorem"]
  },
  {
    id: "est2_2026_jan_30",
    question: "The following table shows the annual salaries of all 200 employees in a company.\n\n| Annual Salary in $1,000 | [5 - 7) | [7 - 9) | [9 - 11) | [11 - 13) | [13 - 15] |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **Men** | 45 | 25 | 30 | 20 | 12 |\n| **Women** | 15 | 20 | 10 | 15 | 8 |\n\nOne employee is randomly selected from the company. What is the probability that the employee is a man with an annual salary of at least $11,000?",
    options: [
      "$\\frac{4}{25}$",
      "$\\frac{32}{132}$",
      "$\\frac{50}{132}$",
      "$\\frac{32}{55}$",
      "$\\frac{35}{55}$"
    ],
    correctAnswer: 0,
    explanation: "The total number of employees in the company is given as 200. This is our sample space.\nWe need to find the number of employees who are BOTH men AND have an annual salary of at least $11,000.\nThe salary categories that are at least $11,000 are $[11 - 13)$ and $[13 - 15]$.\nLooking at the 'Men' row:\nNumber of men in $[11 - 13)$ = 20\nNumber of men in $[13 - 15]$ = 12\nTotal men with salary $\\ge \\$11,000 = 20 + 12 = 32$.\nThe probability is the number of favorable outcomes divided by the total number of outcomes:\nProbability = $\\frac{32}{200}$.\nSimplify the fraction by dividing the numerator and denominator by 8:\n$\\frac{32 \\div 8}{200 \\div 8} = \\frac{4}{25}$.",
    category: "Data Analysis",
    topics: ["Probability", "Tables"]
  }
];
