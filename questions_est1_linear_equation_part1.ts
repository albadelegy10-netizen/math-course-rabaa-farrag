import { Question } from './types';

const svgGraphQ3 = `
<svg viewBox="0 0 200 200" class="mx-auto h-48 w-auto bg-white border border-gray-200">
  <line x1="100" y1="0" x2="100" y2="200" stroke="black" stroke-width="1" />
  <line x1="0" y1="100" x2="200" y2="100" stroke="black" stroke-width="1" />
  <path d="M 80 20 L 120 140" stroke="#0ea5e9" stroke-width="2" />
  <circle cx="80" cy="20" r="2" fill="black" />
  <circle cx="100" cy="80" r="2" fill="black" />
  <text x="105" y="80" font-size="10">1</text>
  <text x="105" y="60" font-size="10">2</text>
  <text x="105" y="40" font-size="10">3</text>
  <text x="105" y="20" font-size="10">4</text>
  <text x="80" y="115" font-size="10">-1</text>
</svg>
`;

const svgGraphQ5 = `
<svg viewBox="0 0 200 200" class="mx-auto h-48 w-auto bg-white border border-gray-200">
  <line x1="100" y1="0" x2="100" y2="200" stroke="black" stroke-width="1" />
  <line x1="0" y1="100" x2="200" y2="100" stroke="black" stroke-width="1" />
  <line x1="0" y1="0" x2="200" y2="200" stroke="black" stroke-width="0.5" opacity="0.2" />
  <path d="M 60 20 L 140 180" stroke="black" stroke-width="2" />
  <text x="110" y="90" font-size="10">A(1, 0.5)</text>
</svg>
`;

const svgGraphQ6 = `
<svg viewBox="0 0 200 200" class="mx-auto h-48 w-auto bg-white border border-gray-200">
  <line x1="100" y1="0" x2="100" y2="200" stroke="black" stroke-width="1" />
  <line x1="0" y1="100" x2="200" y2="100" stroke="black" stroke-width="1" />
  <path d="M 80 20 L 120 180" stroke="#ef4444" stroke-width="2" />
  <text x="125" y="60" font-size="10">y=f(x)</text>
</svg>
`;

const svgGraphQ8 = `
<svg viewBox="0 0 200 200" class="mx-auto h-48 w-auto bg-white border border-gray-200">
  <line x1="100" y1="0" x2="100" y2="200" stroke="black" stroke-width="1" />
  <line x1="0" y1="100" x2="200" y2="100" stroke="black" stroke-width="1" />
  <path d="M 0 100 L 200 20" stroke="black" stroke-width="1" />
</svg>
`;

const svgGraphQ9 = `
<svg viewBox="0 0 200 200" class="mx-auto h-48 w-auto bg-white border border-gray-200">
  <line x1="100" y1="0" x2="100" y2="200" stroke="black" stroke-width="1" />
  <line x1="0" y1="100" x2="200" y2="100" stroke="black" stroke-width="1" />
  <polyline points="20,120 40,80 60,120 100,140 140,120 180,120" fill="none" stroke="blue" stroke-width="2" />
  <text x="30" y="100" font-size="10">f</text>
  <text x="50" y="100" font-size="10">g</text>
  <text x="80" y="130" font-size="10">h</text>
  <text x="120" y="130" font-size="10">i</text>
  <text x="160" y="110" font-size="10">j</text>
</svg>
`;

const svgGraphQ11 = `
<svg viewBox="0 0 200 200" class="mx-auto h-48 w-auto bg-white border border-gray-200">
  <line x1="100" y1="0" x2="100" y2="200" stroke="black" stroke-width="1" />
  <line x1="0" y1="100" x2="200" y2="100" stroke="black" stroke-width="1" />
  <polyline points="40,140 80,40 120,140 160,80" fill="none" stroke="black" stroke-width="2" />
</svg>
`;

export const EST1_LINEAR_EQUATION_PART1_SET: Question[] = [
  {
    id: 1,
    question: "The line with equation $2x + 5y = 9$ is graphed in the standard $(x,y)$ coordinate plane. What is the slope of the line?",
    options: ["$-\\frac{5}{2}$", "$-\\frac{2}{5}$", "$\\frac{2}{5}$", "$\\frac{5}{2}$", "2"],
    correctAnswer: 1,
    explanation: "$5y = -2x + 9 \\Rightarrow y = -\\frac{2}{5}x + \\frac{9}{5}$. Slope is $-\\frac{2}{5}$.",
    category: "Linear Equations"
  },
  {
    id: 2,
    question: "If $f(x) = 3x - 4(2x+7)$ and $g(x) = 4(-2x+1)$, what is the value of $\\frac{f(-1)}{g(3)}$?",
    options: ["$\\frac{43}{4}$", "$\\frac{23}{20}$", "$\\frac{20}{23}$", "$\\frac{43}{4}$"],
    correctAnswer: 1,
    explanation: "$f(-1) = 3(-1) - 4(2(-1)+7) = -3 - 4(5) = -23$. $g(3) = 4(-2(3)+1) = 4(-5) = -20$. Ratio: $\\frac{-23}{-20} = \\frac{23}{20}$.",
    category: "Functions"
  },
  {
    id: 3,
    question: "What is the slope of the line shown in the graph below?",
    svg: svgGraphQ3,
    options: ["-3", "-1", "3", "$\\frac{1}{3}$"],
    correctAnswer: 0,
    explanation: "Points $(-1, 4)$ and $(0, 1)$. Slope $m = \\frac{1-4}{0-(-1)} = \\frac{-3}{1} = -3$.",
    category: "Slope"
  },
  {
    id: 4,
    question: "Line $m$ in the $xy$-plane passes through the points $(2a, a^2)$ and $(2b, b^2)$ with $a \\neq b$. Which of the following is the slope of line $m$?",
    options: ["$\\frac{a}{b}$", "$\\frac{2}{a+b}$", "$\\frac{a+b}{2}$", "$a-b$"],
    correctAnswer: 2,
    explanation: "$m = \\frac{b^2 - a^2}{2b - 2a} = \\frac{(b-a)(b+a)}{2(b-a)} = \\frac{a+b}{2}$.",
    category: "Slope"
  },
  {
    id: 5,
    question: "What is the slope of the line shown in the graph?",
    svg: svgGraphQ5,
    options: ["$-\\frac{1}{2}$", "$-\\frac{2}{7}$", "$-\\frac{8}{7}$", "-2"],
    correctAnswer: 3,
    explanation: "Line passes through $(0, 2)$ and $(1, 0)$. Slope $m = \\frac{0-2}{1-0} = -2$.",
    category: "Slope"
  },
  {
    id: 6,
    question: "The graph shown above is that of a linear function $f$ whose expression is given by $f(x) = cx + d$, where $c$ and $d$ are constants. Which of the following must be true about $c$ and $d$?",
    svg: svgGraphQ6,
    options: ["$c=d$", "$c>d$", "$c<d$", "$c=0$"],
    correctAnswer: 2,
    explanation: "Slope $c$ is negative ($c<0$). Y-intercept $d$ is positive ($d>0$). Thus $c < d$.",
    category: "Linear Functions"
  },
  {
    id: 7,
    question: "In the $xy$-plane above, the equation of line $L$ is $2mx - 2y + 12 = 0$, where $m$ is a constant. What is the slope (gradient) of L?",
    options: ["$-\\frac{4}{3}$", "$-\\frac{2}{3}$", "$-\\frac{3}{8}$", "$-\\frac{1}{2}$"],
    correctAnswer: 0,
    explanation: "Line passes through $(3, 2)$ (from visual/context). $2m(3) - 2(2) + 12 = 0 \\Rightarrow 6m + 8 = 0 \\Rightarrow m = -4/3$. Equation $2y = 2mx + 12 \\Rightarrow y = mx + 6$. Slope is $m = -4/3$.",
    category: "Linear Equations"
  },
  {
    id: 8,
    question: "What is the slope of the line represented in the graph above?",
    svg: svgGraphQ8,
    options: ["2", "$\\frac{3}{2}$", "1", "$\\frac{2}{3}$"],
    correctAnswer: 3,
    explanation: "Points $(0, 1)$ and $(3, 3)$. Slope $m = \\frac{3-1}{3-0} = \\frac{2}{3}$.",
    category: "Slope"
  },
  {
    id: 9,
    question: "Which of the line segments in the figure below has the largest slope?",
    svg: svgGraphQ9,
    options: ["f", "j", "h", "i"],
    correctAnswer: 0,
    explanation: "Segment f has the steepest positive incline.",
    category: "Slope"
  },
  {
    id: 10,
    question: "What is the sum of the values of the $x$ and $y$-intercepts of the graph of the function $f(x) = 2x + 3(x-5)$?",
    options: ["-18", "-12", "12", "18"],
    correctAnswer: 1,
    explanation: "$f(x) = 5x - 15$. Y-int ($x=0$): -15. X-int ($y=0$): $5x=15 \\Rightarrow x=3$. Sum: $-15 + 3 = -12$.",
    youtubeLink: "https://youtu.be/qC9WUlxty2M",
    category: "Functions"
  },
  {
    id: 11,
    question: "Based on the above graph, if the absolute maximum and minimum of the represented function $f(x)$ are $(p,q)$ and $(r,s)$ respectively, what is the value of $q - p + s - r$?",
    svg: svgGraphQ11,
    options: ["-2", "2", "4", "-4"],
    correctAnswer: 2,
    explanation: "From analysis: Max $(p,q) = (-2, 4)$? Min $(r,s) = (-1, -3)$? Using values from handwritten note: $q=4, p=-2, s=-3, r=-1$. $4 - (-2) + (-3) - (-1) = 6 - 3 + 1 = 4$.",
    category: "Functions"
  },
  {
    id: 12,
    question: "The equation of a line is $\\frac{2}{x} - \\frac{3}{y-1} = 0$. What is the slope of the line?",
    options: ["3", "$\\frac{2}{3}$", "$\\frac{3}{2}$", "2"],
    correctAnswer: 2,
    explanation: "$\\frac{2}{x} = \\frac{3}{y-1} \\Rightarrow 2(y-1) = 3x \\Rightarrow 2y - 2 = 3x \\Rightarrow 2y = 3x + 2 \\Rightarrow y = \\frac{3}{2}x + 1$. Slope is $\\frac{3}{2}$.",
    category: "Linear Equations"
  },
  {
    id: 13,
    question: "If $h(x) = 2x - 3g(x)$, and $g(x) = 3x + 7$, what is the value of $h(-4)$?",
    options: ["-5", "-23", "7", "23"],
    correctAnswer: 2,
    explanation: "$g(-4) = 3(-4) + 7 = -5$. $h(-4) = 2(-4) - 3(-5) = -8 + 15 = 7$.",
    category: "Functions"
  },
  {
    id: 14,
    question: "Hana deposited a fixed amount into her bank account each month. The function $f(t) = 100 + 25t$ gives the amount... What is the best interpretation of 25?",
    options: ["With each monthly deposit, the amount increases by 25.", "Before Hana made any monthly deposits, the amount was 25.", "After 1 monthly deposit, the amount is 25.", "Hana made a total of 25 monthly deposits."],
    correctAnswer: 0,
    explanation: "25 is the slope/rate of change, representing the monthly deposit amount.",
    category: "Linear Functions"
  },
  {
    id: 15,
    question: "The table shows selected values from function $f$. $x: -1, 0, 1, 2$. $f(x): 16, 17, 18, 19$. Which is the best description of function $f$?",
    options: ["Decreasing linear", "Increasing linear", "Decreasing exponential", "Increasing exponential"],
    correctAnswer: 1,
    explanation: "As $x$ increases by 1, $f(x)$ increases by a constant amount (1). This is an increasing linear function.",
    category: "Functions"
  }
];
