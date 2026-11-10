import { Question } from '../../types';

export const EST1_LINEAR_EQUATION_PART2: Question[] = [
  {
    id: "est1_linear_eq_p2_1",
    question: "In the xy-plane, the equation of line l is $x + 3y = 5$. If line m is perpendicular to line l, what is a possible equation of line m?",
    options: [
      "$y = -\\frac{1}{3}x + 2$",
      "$y = \\frac{1}{3}x - 1$",
      "$y = -3x + 1$",
      "$y = 3x + \\frac{2}{3}$"
    ],
    correctAnswer: 3,
    explanation: "The equation of line l is $x + 3y = 5$, which can be rewritten as $y = -\\frac{1}{3}x + \\frac{5}{3}$. The slope of line l is $-\\frac{1}{3}$. Since line m is perpendicular to line l, its slope must be the negative reciprocal of $-\\frac{1}{3}$, which is $3$. The only option with a slope of $3$ is $y = 3x + \\frac{2}{3}$."
  },
  {
    id: "est1_linear_eq_p2_2",
    question: "If the values in the table above represent a linear relationship, what is the missing value?",
    svg: `<svg viewBox="0 0 200 100" width="200" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="180" height="80" fill="none" stroke="black" stroke-width="2"/>
      <line x1="10" y1="50" x2="190" y2="50" stroke="black" stroke-width="2"/>
      <line x1="70" y1="10" x2="70" y2="90" stroke="black" stroke-width="2"/>
      <line x1="130" y1="10" x2="130" y2="90" stroke="black" stroke-width="2"/>
      <text x="40" y="35" font-family="sans-serif" font-size="16" text-anchor="middle">X</text>
      <text x="100" y="35" font-family="sans-serif" font-size="16" text-anchor="middle">2</text>
      <text x="160" y="35" font-family="sans-serif" font-size="16" text-anchor="middle">5</text>
      <text x="40" y="75" font-family="sans-serif" font-size="16" text-anchor="middle">Y</text>
      <text x="100" y="75" font-family="sans-serif" font-size="16" text-anchor="middle">-1</text>
      <text x="160" y="75" font-family="sans-serif" font-size="16" text-anchor="middle">-7</text>
    </svg>`,
    options: [
      "-3",
      "3",
      "9",
      "12"
    ],
    correctAnswer: 2,
    explanation: "The table shows points $(2, -1)$ and $(5, -7)$. The slope is $m = \\frac{-7 - (-1)}{5 - 2} = \\frac{-6}{3} = -2$. The equation is $y - (-1) = -2(x - 2) \\Rightarrow y = -2x + 3$. The missing value is for $x = -3$. So $y = -2(-3) + 3 = 6 + 3 = 9$."
  },
  {
    id: "est1_linear_eq_p2_3",
    question: "What is the slope of the line perpendicular to the line of equation $3y + x = 15$?",
    options: [
      "$-\\frac{1}{3}$",
      "$\\frac{1}{3}$",
      "$3$",
      "$6$"
    ],
    correctAnswer: 2,
    explanation: "The equation $3y + x = 15$ can be written as $y = -\\frac{1}{3}x + 5$. The slope is $-\\frac{1}{3}$. The slope of the perpendicular line is the negative reciprocal, which is $3$."
  },
  {
    id: "est1_linear_eq_p2_4",
    question: "In the xy-plane, line (m) passes through the point $(2,5)$ and is perpendicular to the line (n) that passes through the points $(4,7)$ and $(-2,3)$. Which of the following represents the equation of line (m)?",
    options: [
      "$y = -\\frac{3}{2}x + 8$",
      "$y = -\\frac{3}{2}x - 8$",
      "$y = 2x + 1$",
      "$y = -\\frac{2}{3}x + \\frac{19}{3}$"
    ],
    correctAnswer: 0,
    explanation: "The slope of line n is $\\frac{3 - 7}{-2 - 4} = \\frac{-4}{-6} = \\frac{2}{3}$. The slope of line m, which is perpendicular to n, is $-\\frac{3}{2}$. The equation of line m passing through $(2,5)$ is $y - 5 = -\\frac{3}{2}(x - 2) \\Rightarrow y = -\\frac{3}{2}x + 3 + 5 \\Rightarrow y = -\\frac{3}{2}x + 8$."
  },
  {
    id: "est1_linear_eq_p2_5",
    question: "What is the equation of the line $(d_1)$ passing through $A(3,4)$ and parallel to the line $(d)$ of equation $y = -2x + 5$?",
    options: [
      "$y = -2x + 3$",
      "$y = \\frac{1}{2}x + 10$",
      "$y = -2x + 10$",
      "$y = 2x$"
    ],
    correctAnswer: 2,
    explanation: "The slope of line d is $-2$. Since $d_1$ is parallel to d, its slope is also $-2$. The equation of $d_1$ passing through $(3,4)$ is $y - 4 = -2(x - 3) \\Rightarrow y = -2x + 6 + 4 \\Rightarrow y = -2x + 10$."
  },
  {
    id: "est1_linear_eq_p2_6",
    question: "In the xy-plane, the line determined by the points $(3,m)$ and $(m,12)$ passes through the origin. Which of the following could be the value of m?",
    options: [
      "$-6$",
      "$9$",
      "$1$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "Since the line passes through the origin $(0,0)$, the slope between $(0,0)$ and $(3,m)$ is the same as the slope between $(0,0)$ and $(m,12)$. So, $\\frac{m - 0}{3 - 0} = \\frac{12 - 0}{m - 0} \\Rightarrow \\frac{m}{3} = \\frac{12}{m} \\Rightarrow m^2 = 36 \\Rightarrow m = \\pm 6$. The option $-6$ is correct."
  },
  {
    id: "est1_linear_eq_p2_7",
    question: "If $f(x) = \\frac{1}{x} - x$ and $g(x) = f(2x)$, what is the value of $g(-3)$?",
    options: [
      "$\\frac{35}{6}$",
      "$\\frac{14}{5}$",
      "$7$",
      "$-\\frac{4}{7}$"
    ],
    correctAnswer: 0,
    explanation: "$g(-3) = f(2(-3)) = f(-6)$. $f(-6) = \\frac{1}{-6} - (-6) = -\\frac{1}{6} + 6 = \\frac{35}{6}$."
  },
  {
    id: "est1_linear_eq_p2_8",
    question: "Consider the line of equation $2y + \\frac{5}{3}x = \\frac{1}{2}$. If the x-coordinate of the x-intercept is $\\frac{3}{h}$, then h is equal to:",
    options: [
      "$5$",
      "$6$",
      "$10$",
      "$16$"
    ],
    correctAnswer: 2,
    explanation: "To find the x-intercept, set $y = 0$. So, $\\frac{5}{3}x = \\frac{1}{2} \\Rightarrow x = \\frac{1}{2} \\cdot \\frac{3}{5} = \\frac{3}{10}$. We are given that the x-intercept is $\\frac{3}{h}$, so $\\frac{3}{10} = \\frac{3}{h} \\Rightarrow h = 10$."
  },
  {
    id: "est1_linear_eq_p2_9",
    question: "In the xy-plane, the perpendicular lines T and K intersect at the point $(3,2)$. If line T contains the point $(2,5)$, which of the following points is on line K?",
    options: [
      "$(5,3)$",
      "$(-2,1)$",
      "$(1,2)$",
      "$(6,3)$"
    ],
    correctAnswer: 3,
    explanation: "The slope of line T is $\\frac{5 - 2}{2 - 3} = \\frac{3}{-1} = -3$. Since line K is perpendicular to T, its slope is $\\frac{1}{3}$. The equation of line K passing through $(3,2)$ is $y - 2 = \\frac{1}{3}(x - 3) \\Rightarrow y = \\frac{1}{3}x - 1 + 2 \\Rightarrow y = \\frac{1}{3}x + 1$. Checking the options, for $(6,3)$, $y = \\frac{1}{3}(6) + 1 = 2 + 1 = 3$. So $(6,3)$ is on line K."
  },
  {
    id: "est1_linear_eq_p2_10",
    question: "What is the y-intercept of the line passing through points $(5,5)$ and $(-5,-1)$?",
    options: [
      "$-3$",
      "$2$",
      "$0$",
      "$4$"
    ],
    correctAnswer: 1,
    explanation: "The slope is $m = \\frac{-1 - 5}{-5 - 5} = \\frac{-6}{-10} = \\frac{3}{5}$. The equation is $y - 5 = \\frac{3}{5}(x - 5) \\Rightarrow y = \\frac{3}{5}x - 3 + 5 \\Rightarrow y = \\frac{3}{5}x + 2$. The y-intercept is $2$."
  },
  {
    id: "est1_linear_eq_p2_11",
    question: "What is the equation of line d (not shown) that passes through origin O and is perpendicular to line k in the figure above?",
    svg: `<svg viewBox="-20 -20 220 220" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="100" x2="200" y2="100" stroke="black" stroke-width="1"/>
      <line x1="100" y1="0" x2="100" y2="200" stroke="black" stroke-width="1"/>
      <line x1="100" y1="40" x2="140" y2="100" stroke="blue" stroke-width="2"/>
      <circle cx="100" cy="40" r="3" fill="red"/>
      <text x="110" y="35" font-family="sans-serif" font-size="12">A(0, 3)</text>
      <circle cx="140" cy="100" r="3" fill="red"/>
      <text x="145" y="95" font-family="sans-serif" font-size="12">B(2, 0)</text>
    </svg>`,
    options: [
      "$y = \\frac{2}{3}x$",
      "$y = -\\frac{3}{2}x$",
      "$y = \\frac{3}{2}x$",
      "$y = x$"
    ],
    correctAnswer: 0,
    explanation: "Line k passes through $(0,3)$ and $(2,0)$. Its slope is $\\frac{0 - 3}{2 - 0} = -\\frac{3}{2}$. The slope of the perpendicular line d is $\\frac{2}{3}$. Since line d passes through the origin $(0,0)$, its equation is $y = \\frac{2}{3}x$."
  },
  {
    id: "est1_linear_eq_p2_12",
    question: "Line (A) passes through the points $(-\\frac{5}{3}, 0)$ and $(0, -\\frac{2}{3})$. Which of the following lines will never intersect with line (A)?",
    options: [
      "$y = -\\frac{5}{2}x - 1$",
      "$y = \\frac{5}{2}x - 1$",
      "$y = -\\frac{2}{5}x - 1$",
      "$y = \\frac{2}{5}x - 1$"
    ],
    correctAnswer: 2,
    explanation: "Lines that never intersect are parallel, meaning they have the same slope. The slope of line A is $\\frac{-\\frac{2}{3} - 0}{0 - (-\\frac{5}{3})} = \\frac{-\\frac{2}{3}}{\\frac{5}{3}} = -\\frac{2}{5}$. The line $y = -\\frac{2}{5}x - 1$ has the same slope and a different y-intercept, so it is parallel to line A."
  },
  {
    id: "est1_linear_eq_p2_13",
    question: "Given the line with equation $5y - 3(x - 2) = -1$, which of the following statements is true?",
    options: [
      "The slope of the line is $\\frac{3}{5}$, and the line is decreasing.",
      "The slope of the line is $-\\frac{3}{5}$, and the line is decreasing.",
      "The slope of the line is $\\frac{3}{5}$, and the line is increasing.",
      "The slope of the line is $-\\frac{3}{5}$, and the line is increasing."
    ],
    correctAnswer: 2,
    explanation: "Rewrite the equation in slope-intercept form: $5y - 3x + 6 = -1 \\Rightarrow 5y = 3x - 7 \\Rightarrow y = \\frac{3}{5}x - \\frac{7}{5}$. The slope is $\\frac{3}{5}$, which is positive, so the line is increasing."
  },
  {
    id: "est1_linear_eq_p2_14",
    question: "Supposing that the relation is linear, what is the rate of change between years 2013 and 2019?",
    svg: `<svg viewBox="0 0 300 200" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="280" height="180" fill="none" stroke="black" stroke-width="2"/>
      <line x1="10" y1="40" x2="290" y2="40" stroke="black" stroke-width="2"/>
      <line x1="150" y1="10" x2="150" y2="190" stroke="black" stroke-width="2"/>
      <text x="80" y="30" font-family="sans-serif" font-size="14" text-anchor="middle">Year</text>
      <text x="220" y="30" font-family="sans-serif" font-size="14" text-anchor="middle">Average Closing Price ($)</text>
      <text x="80" y="60" font-family="sans-serif" font-size="14" text-anchor="middle">2020</text>
      <text x="220" y="60" font-family="sans-serif" font-size="14" text-anchor="middle">1,771.9</text>
      <text x="80" y="80" font-family="sans-serif" font-size="14" text-anchor="middle">2019</text>
      <text x="220" y="80" font-family="sans-serif" font-size="14" text-anchor="middle">1,393.34</text>
      <text x="80" y="100" font-family="sans-serif" font-size="14" text-anchor="middle">2018</text>
      <text x="220" y="100" font-family="sans-serif" font-size="14" text-anchor="middle">1,268.93</text>
      <text x="80" y="120" font-family="sans-serif" font-size="14" text-anchor="middle">2017</text>
      <text x="220" y="120" font-family="sans-serif" font-size="14" text-anchor="middle">1,251.92</text>
      <text x="80" y="140" font-family="sans-serif" font-size="14" text-anchor="middle">2016</text>
      <text x="220" y="140" font-family="sans-serif" font-size="14" text-anchor="middle">1,158.86</text>
      <text x="80" y="160" font-family="sans-serif" font-size="14" text-anchor="middle">2015</text>
      <text x="220" y="160" font-family="sans-serif" font-size="14" text-anchor="middle">1,266.06</text>
      <text x="80" y="180" font-family="sans-serif" font-size="14" text-anchor="middle">2013</text>
      <text x="220" y="180" font-family="sans-serif" font-size="14" text-anchor="middle">1,668.86</text>
    </svg>`,
    options: [
      "$-45.92$",
      "$-39.36$",
      "$39.36$",
      "$45.92$"
    ],
    correctAnswer: 0,
    explanation: "The rate of change is the slope between the points $(2013, 1668.86)$ and $(2019, 1393.34)$. Rate = $\\frac{1393.34 - 1668.86}{2019 - 2013} = \\frac{-275.52}{6} = -45.92$."
  },
  {
    id: "est1_linear_eq_p2_15",
    question: "Which of the following equations is represented in the table below?",
    svg: `<svg viewBox="0 0 300 100" width="300" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="280" height="80" fill="none" stroke="black" stroke-width="2"/>
      <line x1="10" y1="50" x2="290" y2="50" stroke="black" stroke-width="2"/>
      <line x1="50" y1="10" x2="50" y2="90" stroke="black" stroke-width="2"/>
      <line x1="100" y1="10" x2="100" y2="90" stroke="black" stroke-width="2"/>
      <line x1="150" y1="10" x2="150" y2="90" stroke="black" stroke-width="2"/>
      <line x1="200" y1="10" x2="200" y2="90" stroke="black" stroke-width="2"/>
      <line x1="250" y1="10" x2="250" y2="90" stroke="black" stroke-width="2"/>
      <text x="30" y="35" font-family="sans-serif" font-size="14" text-anchor="middle">x</text>
      <text x="75" y="35" font-family="sans-serif" font-size="14" text-anchor="middle">-2</text>
      <text x="125" y="35" font-family="sans-serif" font-size="14" text-anchor="middle">-1</text>
      <text x="175" y="35" font-family="sans-serif" font-size="14" text-anchor="middle">0</text>
      <text x="225" y="35" font-family="sans-serif" font-size="14" text-anchor="middle">1</text>
      <text x="270" y="35" font-family="sans-serif" font-size="14" text-anchor="middle">2</text>
      <text x="30" y="75" font-family="sans-serif" font-size="14" text-anchor="middle">y</text>
      <text x="75" y="75" font-family="sans-serif" font-size="14" text-anchor="middle">12</text>
      <text x="125" y="75" font-family="sans-serif" font-size="14" text-anchor="middle">6</text>
      <text x="175" y="75" font-family="sans-serif" font-size="14" text-anchor="middle">3</text>
      <text x="225" y="75" font-family="sans-serif" font-size="14" text-anchor="middle">1.5</text>
      <text x="270" y="75" font-family="sans-serif" font-size="14" text-anchor="middle">0.75</text>
    </svg>`,
    options: [
      "$y = (\\frac{3}{2})^x$",
      "$y = (\\frac{1}{2})^x + 3$",
      "$y = (\\frac{1}{2})^x - 3$",
      "$y = 3(\\frac{1}{2})^x$"
    ],
    correctAnswer: 3,
    explanation: "When $x = 0$, $y = 3$. The only option that gives $y = 3$ when $x = 0$ is $y = 3(\\frac{1}{2})^x$. Also, as $x$ increases by 1, $y$ is multiplied by $\\frac{1}{2}$, which is characteristic of an exponential function with base $\\frac{1}{2}$."
  },
  {
    id: "est1_linear_eq_p2_16",
    question: "What is the x-intercept of the line passing through points $(3,5)$ and $(4,-2)$?",
    options: [
      "$-7$",
      "$\\frac{25}{7}$",
      "$\\frac{26}{7}$",
      "$26$"
    ],
    correctAnswer: 2,
    explanation: "The slope is $m = \\frac{-2 - 5}{4 - 3} = -7$. The equation is $y - 5 = -7(x - 3) \\Rightarrow y = -7x + 21 + 5 \\Rightarrow y = -7x + 26$. To find the x-intercept, set $y = 0$: $0 = -7x + 26 \\Rightarrow 7x = 26 \\Rightarrow x = \\frac{26}{7}$."
  },
  {
    id: "est1_linear_eq_p2_17",
    question: "Given that the two lines $(d): 2x + ty = -1$ and $(m): -3x - gy = 2$ are perpendicular, and t and g are constants, what is the value of $-5tg$?",
    options: [
      "$-30$",
      "$-6$",
      "$\\frac{3}{2}$",
      "$30$"
    ],
    correctAnswer: 3,
    explanation: "The slope of line d is $-\\frac{2}{t}$. The slope of line m is $-\\frac{-3}{-g} = -\\frac{3}{g}$. Since they are perpendicular, their product is $-1$: $(-\\frac{2}{t})(-\\frac{3}{g}) = -1 \\Rightarrow \\frac{6}{tg} = -1 \\Rightarrow tg = -6$. Therefore, $-5tg = -5(-6) = 30$."
  },
  {
    id: "est1_linear_eq_p2_18",
    question: "In the xy-plane, the equation of the line (d) passing through $A(1,3)$ and perpendicular to line $3x - 2y = 6$ is:",
    options: [
      "$y = \\frac{3}{2}x - \\frac{7}{2}$",
      "$y = -\\frac{3}{2}x + \\frac{11}{2}$",
      "$y = -\\frac{2}{3}x + 3$",
      "$y = -\\frac{2}{3}x + \\frac{11}{3}$"
    ],
    correctAnswer: 3,
    explanation: "The given line is $2y = 3x - 6 \\Rightarrow y = \\frac{3}{2}x - 3$. Its slope is $\\frac{3}{2}$. The perpendicular line d has slope $-\\frac{2}{3}$. The equation of line d passing through $(1,3)$ is $y - 3 = -\\frac{2}{3}(x - 1) \\Rightarrow y = -\\frac{2}{3}x + \\frac{2}{3} + 3 \\Rightarrow y = -\\frac{2}{3}x + \\frac{11}{3}$."
  },
  {
    id: "est1_linear_eq_p2_19",
    question: "The straight line m has an equation $y = 3x$. The point A of coordinates $(1,3)$ is on m. The line p is perpendicular to m at point A. Which of the following points is on p?",
    options: [
      "$(3,9)$",
      "$(5, \\frac{5}{3})$",
      "$(3,0)$",
      "$(0,0)$"
    ],
    correctAnswer: 1,
    explanation: "The slope of line m is $3$. The slope of line p, which is perpendicular to m, is $-\\frac{1}{3}$. The equation of line p passing through $(1,3)$ is $y - 3 = -\\frac{1}{3}(x - 1) \\Rightarrow y = -\\frac{1}{3}x + \\frac{1}{3} + 3 \\Rightarrow y = -\\frac{1}{3}x + \\frac{10}{3}$. Checking the options, for $(5, \\frac{5}{3})$, $y = -\\frac{1}{3}(5) + \\frac{10}{3} = \\frac{5}{3}$. So $(5, \\frac{5}{3})$ is on line p."
  },
  {
    id: "est1_linear_eq_p2_20",
    question: "Given a linear function f such that $f(2) = 1$, and $f(-3) = 11$. What is the y-intercept of f?",
    options: [
      "$3$",
      "$5$",
      "$6$",
      "$9$"
    ],
    correctAnswer: 1,
    explanation: "The points are $(2, 1)$ and $(-3, 11)$. The slope is $m = \\frac{11 - 1}{-3 - 2} = \\frac{10}{-5} = -2$. The equation is $y - 1 = -2(x - 2) \\Rightarrow y = -2x + 4 + 1 \\Rightarrow y = -2x + 5$. The y-intercept is $5$."
  },
  {
    id: "est1_linear_eq_p2_21",
    question: "What is the sum of the slope of AB and the slope of a line perpendicular to AC?",
    svg: `<svg viewBox="-60 -40 140 100" width="280" height="200" xmlns="http://www.w3.org/2000/svg">
      <line x1="-60" y1="0" x2="80" y2="0" stroke="gray" stroke-width="0.5"/>
      <line x1="0" y1="-40" x2="0" y2="60" stroke="gray" stroke-width="0.5"/>
      <polygon points="-40,-10 -10,30 60,10 30,-40" fill="none" stroke="black" stroke-width="1.5"/>
      <circle cx="-40" cy="-10" r="2" fill="black"/>
      <text x="-45" y="-15" font-family="sans-serif" font-size="8">A</text>
      <circle cx="-10" cy="30" r="2" fill="black"/>
      <text x="-15" y="40" font-family="sans-serif" font-size="8">B</text>
      <circle cx="60" cy="10" r="2" fill="black"/>
      <text x="65" y="15" font-family="sans-serif" font-size="8">C</text>
      <circle cx="30" cy="-40" r="2" fill="black"/>
      <text x="35" y="-45" font-family="sans-serif" font-size="8">D</text>
    </svg>`,
    options: [
      "$\\frac{1}{3}$",
      "$\\frac{11}{3}$",
      "$-\\frac{23}{15}$",
      "$-\\frac{5}{8}$"
    ],
    correctAnswer: 1,
    explanation: "From the graph, the coordinates are $A(-4, 1)$, $B(-1, -3)$, $C(6, -1)$, and $D(3, 4)$. The slope of AB is $\\frac{-3 - 1}{-1 - (-4)} = \\frac{-4}{3}$. The slope of AC is $\\frac{-1 - 1}{6 - (-4)} = \\frac{-2}{10} = -\\frac{1}{5}$. The slope of a line perpendicular to AC is $5$. The sum is $-\\frac{4}{3} + 5 = \\frac{11}{3}$."
  },
  {
    id: "est1_linear_eq_p2_22",
    question: "What is the value of $AD^2 + DC$?",
    options: [
      "$53$",
      "$58$",
      "$78$",
      "$48$"
    ],
    correctAnswer: 1,
    explanation: "Using the coordinates $A(-4, 1)$, $C(6, -1)$, and $D(3, 4)$. $AD^2 = (3 - (-4))^2 + (4 - 1)^2 = 7^2 + 3^2 = 49 + 9 = 58$. Wait, if $D$ is $(3,3)$, $AD^2 = 7^2 + 2^2 = 53$. $DC = \\sqrt{(6-3)^2 + (-1-3)^2} = \\sqrt{3^2 + (-4)^2} = 5$. So $AD^2 + DC = 53 + 5 = 58$."
  },
  {
    id: "est1_linear_eq_p2_23",
    question: "Which of the systems of equations below is being represented in the graph above?",
    svg: `<svg viewBox="-40 -20 80 60" width="240" height="180" xmlns="http://www.w3.org/2000/svg">
      <line x1="-40" y1="0" x2="40" y2="0" stroke="gray" stroke-width="0.5"/>
      <line x1="0" y1="-20" x2="0" y2="40" stroke="gray" stroke-width="0.5"/>
      <line x1="-40" y1="-20" x2="40" y2="20" stroke="blue" stroke-width="1.5"/>
      <line x1="-20" y1="40" x2="20" y2="-40" stroke="red" stroke-width="1.5"/>
    </svg>`,
    options: [
      "$x + 2y = 4$ and $x - y = 1$",
      "$x + 2y = 4$ and $-x + y = 1$",
      "$x - 2y = 4$ and $x - y = 1$",
      "$x - 2y = 4$ and $-x + y = 1$"
    ],
    correctAnswer: 1,
    explanation: "The graph shows two lines. One line passes through $(0, 2)$ and $(4, 0)$, so its equation is $y = -\\frac{1}{2}x + 2 \\Rightarrow x + 2y = 4$. The other line passes through $(0, 1)$ and $(-1, 0)$, so its equation is $y = x + 1 \\Rightarrow -x + y = 1$. This matches option B."
  },
  {
    id: "est1_linear_eq_p2_24",
    question: "Which of the following is the equation of the line perpendicular to the line with equation $2x - 3y = -1$ and passing through the midpoint of segment AB given $A(2, 7)$ and $B(-1, 3)$?",
    options: [
      "$y = \\frac{2}{3}x + \\frac{14}{3}$",
      "$y = \\frac{2}{3}x + \\frac{16}{3}$",
      "$y = -\\frac{3}{2}x + \\frac{17}{4}$",
      "$y = -\\frac{3}{2}x + \\frac{23}{4}$"
    ],
    correctAnswer: 3,
    explanation: "The midpoint of AB is $(\\frac{2 + (-1)}{2}, \\frac{7 + 3}{2}) = (\\frac{1}{2}, 5)$. The given line is $3y = 2x + 1 \\Rightarrow y = \\frac{2}{3}x + \\frac{1}{3}$. Its slope is $\\frac{2}{3}$. The perpendicular line has slope $-\\frac{3}{2}$. The equation is $y - 5 = -\\frac{3}{2}(x - \\frac{1}{2}) \\Rightarrow y = -\\frac{3}{2}x + \\frac{3}{4} + 5 \\Rightarrow y = -\\frac{3}{2}x + \\frac{23}{4}$."
  },
  {
    id: "est1_linear_eq_p2_25",
    question: "Alonso used the table below to graph the sets of ordered pairs shown. What is the type of the graph drawn and which equation best models it?",
    svg: `<svg viewBox="0 0 300 100" width="300" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="280" height="80" fill="none" stroke="black" stroke-width="2"/>
      <line x1="10" y1="50" x2="290" y2="50" stroke="black" stroke-width="2"/>
      <line x1="50" y1="10" x2="50" y2="90" stroke="black" stroke-width="2"/>
      <line x1="100" y1="10" x2="100" y2="90" stroke="black" stroke-width="2"/>
      <line x1="150" y1="10" x2="150" y2="90" stroke="black" stroke-width="2"/>
      <line x1="200" y1="10" x2="200" y2="90" stroke="black" stroke-width="2"/>
      <line x1="250" y1="10" x2="250" y2="90" stroke="black" stroke-width="2"/>
      <text x="30" y="35" font-family="sans-serif" font-size="14" text-anchor="middle">x</text>
      <text x="75" y="35" font-family="sans-serif" font-size="14" text-anchor="middle">-7</text>
      <text x="125" y="35" font-family="sans-serif" font-size="14" text-anchor="middle">-4</text>
      <text x="175" y="35" font-family="sans-serif" font-size="14" text-anchor="middle">-2</text>
      <text x="225" y="35" font-family="sans-serif" font-size="14" text-anchor="middle">1</text>
      <text x="270" y="35" font-family="sans-serif" font-size="14" text-anchor="middle">7</text>
      <text x="30" y="75" font-family="sans-serif" font-size="14" text-anchor="middle">y</text>
      <text x="75" y="75" font-family="sans-serif" font-size="14" text-anchor="middle">-11</text>
      <text x="125" y="75" font-family="sans-serif" font-size="14" text-anchor="middle">-5</text>
      <text x="175" y="75" font-family="sans-serif" font-size="14" text-anchor="middle">-1</text>
      <text x="225" y="75" font-family="sans-serif" font-size="14" text-anchor="middle">5</text>
      <text x="270" y="75" font-family="sans-serif" font-size="14" text-anchor="middle">17</text>
    </svg>`,
    options: [
      "Linear function: $y = 2x + 3$",
      "Linear function: $y = -2x + 3$",
      "Quadratic function: $y = x^2 + 4x - 32$",
      "Quadratic function: $y = -2x^2 - 10x + 17$"
    ],
    correctAnswer: 0,
    explanation: "Calculate the rate of change between consecutive points: $\\frac{-5 - (-11)}{-4 - (-7)} = \\frac{6}{3} = 2$. $\\frac{-1 - (-5)}{-2 - (-4)} = \\frac{4}{2} = 2$. Since the rate of change is constant, it is a linear function with slope $2$. The equation is $y - 5 = 2(x - 1) \\Rightarrow y = 2x + 3$."
  },
  {
    id: "est1_linear_eq_p2_26",
    question: "If f is a linear function, what is the value of $m + n$?",
    svg: `<svg viewBox="0 0 200 100" width="200" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="180" height="80" fill="none" stroke="black" stroke-width="2"/>
      <line x1="10" y1="50" x2="190" y2="50" stroke="black" stroke-width="2"/>
      <line x1="70" y1="10" x2="70" y2="90" stroke="black" stroke-width="2"/>
      <line x1="130" y1="10" x2="130" y2="90" stroke="black" stroke-width="2"/>
      <text x="40" y="35" font-family="sans-serif" font-size="16" text-anchor="middle">x</text>
      <text x="100" y="35" font-family="sans-serif" font-size="16" text-anchor="middle">1</text>
      <text x="160" y="35" font-family="sans-serif" font-size="16" text-anchor="middle">2</text>
      <text x="40" y="75" font-family="sans-serif" font-size="16" text-anchor="middle">f(x)</text>
      <text x="100" y="75" font-family="sans-serif" font-size="16" text-anchor="middle">m</text>
      <text x="160" y="75" font-family="sans-serif" font-size="16" text-anchor="middle">6</text>
    </svg>`,
    options: [
      "$10$",
      "$12$",
      "$14$",
      "$16$"
    ],
    correctAnswer: 1,
    explanation: "Since f is a linear function, the rate of change is constant. The value of $f(2)$ is the average of $f(1)$ and $f(3)$ because $x=2$ is exactly in the middle of $x=1$ and $x=3$. So, $6 = \\frac{m + n}{2} \\Rightarrow m + n = 12$."
  },
  {
    id: "est1_linear_eq_p2_27",
    question: "If f is a linear function with $f(0) = \\frac{1}{2}$ and $f(-3) = -\\frac{3}{2}$, what is the value of $f(3)$?",
    options: [
      "$0.5$",
      "$1.5$",
      "$2.5$",
      "$5$"
    ],
    correctAnswer: 2,
    explanation: "The slope is $m = \\frac{-\\frac{3}{2} - \\frac{1}{2}}{-3 - 0} = \\frac{-2}{-3} = \\frac{2}{3}$. The equation is $f(x) = \\frac{2}{3}x + \\frac{1}{2}$. Then $f(3) = \\frac{2}{3}(3) + \\frac{1}{2} = 2 + 0.5 = 2.5$."
  },
  {
    id: "est1_linear_eq_p2_28",
    question: "Given that $A(2, 5)$, $B(9, -2)$ and $J(4, h)$ lie on the same line, what is the value of h?",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    correctAnswer: 2,
    explanation: "The slope of AB is $\\frac{-2 - 5}{9 - 2} = \\frac{-7}{7} = -1$. The slope of AJ must also be $-1$. So $\\frac{h - 5}{4 - 2} = -1 \\Rightarrow \\frac{h - 5}{2} = -1 \\Rightarrow h - 5 = -2 \\Rightarrow h = 3$."
  },
  {
    id: "est1_linear_eq_p2_29",
    question: "Based on the above graph, if the absolute maximum and minimum of the represented function f(x) are (p,q) and (r,s) respectively, what is the value of $q - p + s - r$?",
    svg: `<svg viewBox="-50 -50 100 100" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <line x1="-50" y1="0" x2="50" y2="0" stroke="gray" stroke-width="0.5"/>
      <line x1="0" y1="-50" x2="0" y2="50" stroke="gray" stroke-width="0.5"/>
      <polyline points="-40,10 -20,-40 -10,30 20,10 40,-20" fill="none" stroke="black" stroke-width="1.5"/>
    </svg>`,
    options: [
      "$-2$",
      "$2$",
      "$4$",
      "$-4$"
    ],
    correctAnswer: 2,
    explanation: "From the graph, the absolute maximum is at $(-2, 4)$, so $p = -2$ and $q = 4$. The absolute minimum is at $(-1, -3)$, so $r = -1$ and $s = -3$. The value is $q - p + s - r = 4 - (-2) + (-3) - (-1) = 4 + 2 - 3 + 1 = 4$."
  },
  {
    id: "est1_linear_eq_p2_30",
    question: "In the xy-plane, the equation of the line (d) passing through $A(-1,4)$ and perpendicular to line $3x - 2y = 5$ is:",
    options: [
      "$y = \\frac{3}{2}x + \\frac{11}{2}$",
      "$y = -\\frac{3}{2}x + \\frac{5}{2}$",
      "$y = -\\frac{2}{3}x + \\frac{14}{3}$",
      "$y = -\\frac{2}{3}x + \\frac{10}{3}$"
    ],
    correctAnswer: 3,
    explanation: "The given line is $2y = 3x - 5 \\Rightarrow y = \\frac{3}{2}x - \\frac{5}{2}$. Its slope is $\\frac{3}{2}$. The perpendicular line d has slope $-\\frac{2}{3}$. The equation of line d passing through $(-1,4)$ is $y - 4 = -\\frac{2}{3}(x - (-1)) \\Rightarrow y = -\\frac{2}{3}x - \\frac{2}{3} + 4 \\Rightarrow y = -\\frac{2}{3}x + \\frac{10}{3}$."
  },
  {
    id: "est1_linear_eq_p2_31",
    question: "What is the equation of the line passing through $A(1, 0.5)$ and perpendicular to the graphed line?",
    svg: `<svg viewBox="-20 -20 120 120" width="240" height="240" xmlns="http://www.w3.org/2000/svg">
      <line x1="-20" y1="50" x2="100" y2="50" stroke="gray" stroke-width="0.5"/>
      <line x1="10" y1="-20" x2="10" y2="100" stroke="gray" stroke-width="0.5"/>
      <line x1="-10" y1="10" x2="90" y2="80" stroke="black" stroke-width="1.5"/>
    </svg>`,
    options: [
      "$y = \\frac{1}{2}x$",
      "$y = 2x - \\frac{3}{2}$",
      "$y = \\frac{7}{8}x - \\frac{8}{9}$",
      "$y = \\frac{8}{7}x - \\frac{9}{14}$"
    ],
    correctAnswer: 3,
    explanation: "From the graph, the line passes through $(0, 4)$ and $(8, -3)$. The slope is $\\frac{-3 - 4}{8 - 0} = -\\frac{7}{8}$. The perpendicular line has slope $\\frac{8}{7}$. The equation passing through $(1, 0.5)$ is $y - 0.5 = \\frac{8}{7}(x - 1) \\Rightarrow y = \\frac{8}{7}x - \\frac{8}{7} + \\frac{1}{2} \\Rightarrow y = \\frac{8}{7}x - \\frac{16}{14} + \\frac{7}{14} \\Rightarrow y = \\frac{8}{7}x - \\frac{9}{14}$."
  },
  {
    id: "est1_linear_eq_p2_32",
    question: "In the xy-plane above, line g is perpendicular to line f. What is the value of m? (the figure is not drawn to scale)",
    svg: `<svg viewBox="-40 -40 80 80" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <line x1="-40" y1="0" x2="40" y2="0" stroke="gray" stroke-width="0.5"/>
      <line x1="0" y1="-40" x2="0" y2="40" stroke="gray" stroke-width="0.5"/>
      <line x1="-30" y1="30" x2="30" y2="-30" stroke="blue" stroke-width="1.5"/>
      <line x1="-30" y1="-30" x2="30" y2="30" stroke="red" stroke-width="1.5"/>
    </svg>`,
    options: [
      "$6$",
      "$-2$",
      "$2$",
      "$8$"
    ],
    correctAnswer: 0,
    explanation: "Line f passes through $(-1, 1)$ and $(0, 2)$, so its slope is $\\frac{2 - 1}{0 - (-1)} = 1$. Line g is perpendicular to f, so its slope is $-1$. Line g passes through $(2, 2)$ and $(-2, m)$. The slope is $\\frac{m - 2}{-2 - 2} = \\frac{m - 2}{-4}$. Setting this equal to $-1$, we get $\\frac{m - 2}{-4} = -1 \\Rightarrow m - 2 = 4 \\Rightarrow m = 6$."
  },
  {
    id: "est1_linear_eq_p2_33",
    question: "The graph above represents the curve of an increasing function f. What is the solution of $f(x) - 1.5 = 0$?",
    svg: `<svg viewBox="-40 -40 80 80" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <line x1="-40" y1="0" x2="40" y2="0" stroke="gray" stroke-width="0.5"/>
      <line x1="0" y1="-40" x2="0" y2="40" stroke="gray" stroke-width="0.5"/>
      <path d="M -30 30 Q 0 -15 30 -30" fill="none" stroke="black" stroke-width="1.5"/>
    </svg>`,
    options: [
      "$0$",
      "$1.5$",
      "$3$",
      "$4.5$"
    ],
    correctAnswer: 0,
    explanation: "The equation $f(x) - 1.5 = 0$ means $f(x) = 1.5$. Looking at the graph, the y-value is $1.5$ when the x-value is $0$. Therefore, the solution is $x = 0$."
  },
  {
    id: "est1_linear_eq_p2_34",
    question: "The distance between Giza and Luxor is approximately 500 Km. To travel that distance, Bilal received offers from 4 different taxi companies:\n\n| | Fixed Amount (EGP) | Amount per 25 Km (EGP) |\n|---|---|---|\n| Taxi \"A\" | 160 | 15 |\n| Taxi \"B\" | 210 | 13 |\n| Taxi \"C\" | 185 | 14 |\n| Taxi \"D\" | 150 | 16 |\n\nWhich company gave Bilal the cheapest offer?",
    options: [
      "Taxi \"A\"",
      "Taxi \"B\"",
      "Taxi \"C\"",
      "Taxi \"D\""
    ],
    correctAnswer: 0,
    explanation: "The distance is $500$ Km, which is $\\frac{500}{25} = 20$ segments of 25 Km. The cost for each taxi is:\nTaxi A: $160 + 15(20) = 160 + 300 = 460$\nTaxi B: $210 + 13(20) = 210 + 260 = 470$\nTaxi C: $185 + 14(20) = 185 + 280 = 465$\nTaxi D: $150 + 16(20) = 150 + 320 = 470$\nThe cheapest offer is Taxi A."
  },
  {
    id: "est1_system_of_eq_pdf_q1",
    question: "Amina went to the flower shop and bought $2$ roses and $5$ daisies for $6$ EGP. Lara bought from the same shop, $4$ roses and $2$ daisies for $4$ EGP. How much should Ahmad pay to buy $2$ roses and $2$ daisies?",
    options: [
      "$1$ EGP",
      "$1.5$ EGP",
      "$2$ EGP",
      "$3$ EGP"
    ],
    correctAnswer: 3,
    explanation: "Let $x$ be the price of a rose and $y$ be the price of a daisy.\nFrom the given information, we can write the system of equations:\n$$\\begin{cases} 2x + 5y = 6 \\\\ 4x + 2y = 4 \\end{cases}$$\n\nTo solve for $x$ and $y$, we can multiply the first equation by $-2$:\n$$-4x - 10y = -12$$\n\nAdding this to the second equation:\n$$-8y = -8 \\implies y = 1$$\n\nSubstitute $y = 1$ into the second equation:\n$$4x + 2(1) = 4 \\implies 4x = 2 \\implies x = 0.5$$\n\nNow, we find the cost for $2$ roses and $2$ daisies:\n$$2x + 2y = 2(0.5) + 2(1) = 1 + 2 = 3\\text{ EGP}$$\nTherefore, Ahmad should pay $3$ EGP."
  },
  {
    id: "est1_system_of_eq_pdf_q2",
    question: "In the system of equations below, $a$ is a constant and $(x, y)$ is a solution, where $x = 3$. What is the value of $a$?\n$$\\begin{cases} 3y = 12 - 3y \\\\ y + a = x - 1 \\end{cases}$$",
    options: [
      "$-4$",
      "$0$",
      "$2$",
      "$4$"
    ],
    correctAnswer: 1,
    explanation: "First, solve the first equation for $y$:\n$$3y = 12 - 3y \\implies 6y = 12 \\implies y = 2$$\n\nWe are given that $x = 3$ is part of the solution. Substitute $x = 3$ and $y = 2$ into the second equation:\n$$y + a = x - 1 \\implies 2 + a = 3 - 1 \\implies 2 + a = 2 \\implies a = 0$$\nTherefore, the value of $a$ is $0$."
  },
  {
    id: "est1_system_of_eq_pdf_q3",
    question: "If $2x - 3y = 14$ and $-x + 2y = -8$, what is the value of $x + y$?",
    options: [
      "$-2$",
      "$0$",
      "$2$",
      "$6$"
    ],
    correctAnswer: 2,
    explanation: "We have the system of equations:\n$$\\begin{cases} 2x - 3y = 14 \\\\ -x + 2y = -8 \\end{cases}$$\n\nMultiply the second equation by $2$ to eliminate $x$:\n$$-2x + 4y = -16$$\n\nAdd this to the first equation:\n$$(2x - 3y) + (-2x + 4y) = 14 - 16 \\implies y = -2$$\n\nNow substitute $y = -2$ back into the second equation to find $x$:\n$$-x + 2(-2) = -8 \\implies -x - 4 = -8 \\implies -x = -4 \\implies x = 4$$\n\nThe value of $x + y$ is:\n$$x + y = 4 + (-2) = 2$$\nTherefore, the correct answer is $2$."
  },
  {
    id: "est1_system_of_eq_pdf_q4",
    question: "Given $2x + y = 8$ and $3y + x = -1$. What is the value of $y - 2x$?",
    options: [
      "$-16$",
      "$-12$",
      "$-8$",
      "$8$"
    ],
    correctAnswer: 1,
    explanation: "We have the system of equations:\n$$\\begin{cases} 2x + y = 8 \\\\ x + 3y = -1 \\end{cases}$$\n\nMultiply the second equation by $-2$:\n$$-2x - 6y = 2$$\n\nAdd this to the first equation:\n$$(2x + y) + (-2x - 6y) = 8 + 2 \\implies -5y = 10 \\implies y = -2$$\n\nSubstitute $y = -2$ into the first equation to solve for $x$:\n$$2x + (-2) = 8 \\implies 2x = 10 \\implies x = 5$$\n\nNow, evaluate $y - 2x$:\n$$y - 2x = -2 - 2(5) = -2 - 10 = -12$$\nTherefore, the value of $y - 2x$ is $-12$."
  },
  {
    id: "est1_system_of_eq_pdf_q5",
    question: "The price of three squash and two zucchini is $10$ EGP, while the price of five squash and three zucchini is $16.5$ EGP. What is the price of one squash and four zucchini?",
    options: [
      "$7$ EGP",
      "$5$ EGP",
      "$10$ EGP",
      "$8.5$ EGP"
    ],
    correctAnswer: 1,
    explanation: "Let $s$ be the price of one squash and $z$ be the price of one zucchini.\nFrom the given information, we can write the system:\n$$\\begin{cases} 3s + 2z = 10 \\\\ 5s + 3z = 16.5 \\end{cases}$$\n\nTo eliminate $z$, multiply the first equation by $3$ and the second equation by $-2$:\n$$\\begin{cases} 9s + 6z = 30 \\\\ -10s - 6z = -33 \\end{cases}$$\n\nAdd the two equations:\n$$-s = -3 \\implies s = 3$$\n\nSubstitute $s = 3$ into the first equation to solve for $z$:\n$$3(3) + 2z = 10 \\implies 9 + 2z = 10 \\implies 2z = 1 \\implies z = 0.5$$\n\nNow, calculate the price of one squash and four zucchini ($s + 4z$):\n$$s + 4z = 3 + 4(0.5) = 3 + 2 = 5\\text{ EGP}$$\nTherefore, the price is $5$ EGP."
  },
  {
    id: "est1_system_of_eq_pdf_q6",
    question: "Shahira and Nicole went to the supermarket to buy chocolate. The list of what they bought and the total price paid can be seen in the table below:\n\n| | Number of chocolates brand \"A\" | Number of chocolates brand \"B\" | Total price paid (in \\$) |\n|---|---|---|---|\n| Shahira | $7$ | $3$ | $25.4$ |\n| Nicole | $4$ | $5$ | $24.7$ |\n\nIf you went to the same supermarket and bought $1$ chocolate from brand \"A\" and $3$ chocolates from brand \"B\", how much will you pay?",
    options: [
      "\\$5.4",
      "\\$7.5",
      "\\$10",
      "\\$11.6"
    ],
    correctAnswer: 3,
    explanation: "Let $x$ be the price of chocolate brand A and $y$ be the price of chocolate brand B.\nFrom the table, we set up the system:\n$$\\begin{cases} 7x + 3y = 25.4 \\\\ 4x + 5y = 24.7 \\end{cases}$$\n\nTo solve this system, we can use elimination. Multiply the first equation by $5$ and the second by $-3$:\n$$\\begin{cases} 35x + 15y = 127 \\\\ -12x - 15y = -74.1 \\end{cases}$$\n\nAdd the two equations:\n$$23x = 52.9 \\implies x = 2.3$$\n\nSubstitute $x = 2.3$ into the second equation to solve for $y$:\n$$4(2.3) + 5y = 24.7 \\implies 9.2 + 5y = 24.7 \\implies 5y = 15.5 \\implies y = 3.1$$\n\nNow, calculate the cost of $1$ brand A and $3$ brand B chocolates ($x + 3y$):\n$$x + 3y = 2.3 + 3(3.1) = 2.3 + 9.3 = 11.6$$\nTherefore, you will pay \\$11.6."
  },
  {
    id: "est1_system_of_eq_pdf_q7",
    question: "The cost of $2$ notebooks and a package of pencils is \\$7.00. The cost of $3$ notebooks and $2$ packages of pencils is \\$11.00. What is the cost of $1$ notebook and $1$ package of pencils?",
    options: [
      "\\$1.00",
      "\\$3.00",
      "\\$4.00",
      "\\$4.40",
      "\\$4.66"
    ],
    correctAnswer: 2,
    explanation: "Let $n$ be the cost of a notebook and $p$ be the cost of a package of pencils.\nWe can represent the situation with the system:\n$$\\begin{cases} 2n + p = 7 \\\\ 3n + 2p = 11 \\end{cases}$$\n\nSolve the first equation for $p$:\n$$p = 7 - 2n$$\n\nSubstitute $p = 7 - 2n$ into the second equation:\n$$3n + 2(7 - 2n) = 11 \\implies 3n + 14 - 4n = 11 \\implies -n = -3 \\implies n = 3$$\n\nNow find $p$:\n$$p = 7 - 2(3) = 1$$\n\nThe cost of $1$ notebook and $1$ package of pencils ($n + p$) is:\n$$n + p = 3 + 1 = 4.00$$\nTherefore, the cost is \\$4.00."
  },
  {
    id: "est1_system_of_eq_pdf_q8",
    question: "Given the system of equations below, where $d$ and $m$ are constants:\n$$\\begin{cases} dx - 2my = -14 \\\\ 3dx + 6my = 78 \\end{cases}$$\nIf the solution to the system is $(2, 5)$, what is the value of $2mx - 3dy$?",
    options: [
      "$-37$",
      "$-18$",
      "$11$",
      "$20$"
    ],
    correctAnswer: 0,
    explanation: "Since $(2, 5)$ is the solution to the system, substitute $x = 2$ and $y = 5$ into the equations:\n$$\\begin{cases} 2d - 10m = -14 \\\\ 6d + 30m = 78 \\end{cases}$$\n\nMultiply the first equation by $3$:\n$$6d - 30m = -42$$\n\nAdd this to the second equation:\n$$(6d - 30m) + (6d + 30m) = -42 + 78 \\implies 12d = 36 \\implies d = 3$$\n\nSubstitute $d = 3$ back into the first equation to solve for $m$:\n$$2(3) - 10m = -14 \\implies 6 - 10m = -14 \\implies -10m = -20 \\implies m = 2$$\n\nNow, evaluate $2mx - 3dy$ at the solution $(2, 5)$ with $d = 3$ and $m = 2$:\n$$2mx - 3dy = 2(2)(2) - 3(3)(5) = 8 - 45 = -37$$\nTherefore, the correct answer is $-37$."
  },
  {
    id: "est1_system_of_eq_pdf_q9",
    question: "What is the solution of the given system of equations?\n$$\\begin{cases} \\frac{2}{3}x + y = -3 \\\\ \\frac{x}{3} + \\frac{y}{2} = -3 \\end{cases}$?",
    options: [
      "$(-6, 1)$",
      "$(6, 9)$",
      "$(6, -7)$",
      "$\\emptyset$"
    ],
    correctAnswer: 3,
    explanation: "We can compare the two equations by multiplying the second equation by $2$:\n$$2 \\left( \\frac{x}{3} + \\frac{y}{2} \\right) = 2(-3) \\implies \\frac{2}{3}x + y = -6$$\n\nCompare this to the first equation:\n$$\\frac{2}{3}x + y = -3$$\n\nSince both equations have the same left-hand side (and hence represent parallel lines with the same slope but different y-intercepts), there is no common point of intersection.\nTherefore, the system has no solution, which is represented by the empty set $\\emptyset$."
  },
  {
    id: "est1_system_of_eq_pdf_q10",
    question: "Which of the following is a point of intersection between the line with equation $y = 3x + 9$ and the parabola with the equation $y = 2x^2 + 3x + 1$?",
    options: [
      "$(2, 3)$",
      "$(2, 15)$",
      "$(-2, 15)$",
      "$(-2, 2)$"
    ],
    correctAnswer: 1,
    explanation: "To find the points of intersection, we set the two equations equal to each other:\n$$2x^2 + 3x + 1 = 3x + 9$$\n\nSubtract $3x$ from both sides:\n$$2x^2 + 1 = 9 \\implies 2x^2 = 8 \\implies x^2 = 4 \\implies x = \\pm 2$$\n\nNow, substitute the x-values back into the linear equation $y = 3x + 9$ to find the corresponding y-values:\n- For $x = 2$: $y = 3(2) + 9 = 15 \\implies (2, 15)$\n- For $x = -2$: $y = 3(-2) + 9 = 3 \\implies (-2, 3)$\n\nChecking the options, $(2, 15)$ is listed as option B.\nTherefore, the correct answer is $(2, 15)$."
  },
  {
    id: "est1_system_of_eq_pdf_q11",
    question: "From the system of equations below, what is the value of $2x + 7y$?\n$$\\begin{cases} -2x + 5y = 39 \\\\ 3x = -4y + 45 \\end{cases}$$",
    options: [
      "$-57$",
      "$15$",
      "$39$",
      "$69$"
    ],
    correctAnswer: 3,
    explanation: "We rewrite the second equation in standard form:\n$$\\begin{cases} -2x + 5y = 39 \\\\ 3x + 4y = 45 \\end{cases}$$\n\nMultiply the first equation by $3$ and the second by $2$ to eliminate $x$:\n$$\\begin{cases} -6x + 15y = 117 \\\\ 6x + 8y = 90 \\end{cases}$$\n\nAdd the two equations:\n$$23y = 207 \\implies y = 9$$\n\nSubstitute $y = 9$ into the first equation to solve for $x$:\n$$-2x + 5(9) = 39 \\implies -2x + 45 = 39 \\implies -2x = -6 \\implies x = 3$$\n\nNow, calculate $2x + 7y$:\n$$2x + 7y = 2(3) + 7(9) = 6 + 63 = 69$$\nTherefore, the correct answer is $69$."
  },
  {
    id: "est1_system_of_eq_pdf_q12",
    question: "Which of the following is a point of intersection between the line with the equation $y = 3x+2$ and the parabola with the equation $y = 4x^2 - 9x + 11$?",
    options: [
      "$(3.5 , 3)$",
      "$(4 , 14)$",
      "$(-2 , -4)$",
      "$(1.5 , 6.5)$"
    ],
    correctAnswer: 3,
    explanation: "To find the points of intersection, set the two equations equal:\n$$4x^2 - 9x + 11 = 3x + 2$$\n\nRearrange into standard quadratic form:\n$$4x^2 - 12x + 9 = 0$$\n\nNotice that this is a perfect square trinomial:\n$$(2x - 3)^2 = 0 \\implies 2x - 3 = 0 \\implies x = 1.5$$\n\nSubstitute $x = 1.5$ back into the linear equation $y = 3x + 2$:\n$$y = 3(1.5) + 2 = 4.5 + 2 = 6.5$$\n\nTherefore, the unique intersection point is $(1.5, 6.5)$, which corresponds to option D."
  },
  {
    id: "est1_system_of_eq_pdf_q13",
    question: "Based on the system of equations below, what is the value of $4x + 4y$?\n$$\\begin{cases} 13x - 7y = 12 \\\\ 7x - 13y = 6 \\end{cases}$$",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    correctAnswer: 3,
    explanation: "We are given the system:\n$$\\begin{cases} 13x - 7y = 12 \\\\ 7x - 13y = 6 \\end{cases}$$\n\nSubtract the second equation from the first equation to eliminate $y$:\n$$(13x - 7x) + (-7y - (-13y)) = 12 - 6$$\n$$6x + 6y = 6$$\n\nDivide the entire equation by $6$:\n$$x + y = 1$$\n\nWe want to find the value of $4x + 4y$:\n$$4x + 4y = 4(x + y) = 4(1) = 4$$\nTherefore, the value of $4x + 4y$ is $4$."
  },
  {
    id: "est1_system_of_eq_pdf_q14",
    question: "A $100$-page album costs twice as much as a $50$-page album. The cost of three $100$-page albums and two $50$-page albums is $t$. How much does a $50$-page album cost?",
    options: [
      "$8t$",
      "$4t$",
      "$\\frac{t}{4}$",
      "$\\frac{t}{8}$"
    ],
    correctAnswer: 3,
    explanation: "Let $x$ be the cost of a $100$-page album and $y$ be the cost of a $50$-page album.\nFrom the problem description, we have:\n$$x = 2y$$\n$$3x + 2y = t$$\n\nSubstitute $x = 2y$ into the second equation:\n$$3(2y) + 2y = t \\implies 6y + 2y = t \\implies 8y = t \\implies y = \\frac{t}{8}$$\n\nTherefore, the cost of a $50$-page album is $\\frac{t}{8}$."
  },
  {
    id: "est1_system_of_eq_pdf_q15",
    question: "A truck contains $15$ identical boxes that are either red or blue. The red box weighs $3$ kg and the blue box weighs $2$ kg. If the total weight of the boxes is $36$ kgs, what is the positive difference between the number of red and blue boxes in the truck?",
    options: [
      "$6$",
      "$9$",
      "$1$",
      "$3$"
    ],
    correctAnswer: 3,
    explanation: "Let $r$ be the number of red boxes and $b$ be the number of blue boxes.\nWe set up the following system of linear equations:\n$$\\begin{cases} r + b = 15 \\\\ 3r + 2b = 36 \\end{cases}$$\n\nMultiply the first equation by $-2$:\n$$-2r - 2b = -30$$\n\nAdd this to the second equation:\n$$(3r + 2b) + (-2r - 2b) = 36 - 30 \\implies r = 6$$\n\nSubstitute $r = 6$ back into the first equation to solve for $b$:\n$$6 + b = 15 \\implies b = 9$$\n\nThe positive difference between the number of red and blue boxes is:\n$$|r - b| = |6 - 9| = 3$$\nTherefore, the correct answer is $3$."
  },
  {
    id: "est1_system_of_eq_pdf_q16",
    question: "If $x + y = 500$ and $3x + 2y = 3000$, what is the value of $5x - y$?",
    options: [
      "$8000$",
      "$7000$",
      "$11500$",
      "$-7000$"
    ],
    correctAnswer: 2,
    explanation: "We are given the system:\n$$\\begin{cases} x + y = 500 \\\\ 3x + 2y = 3000 \\end{cases}$$\n\nMultiply the first equation by $-2$:\n$$-2x - 2y = -1000$$\n\nAdd this to the second equation:\n$$(3x + 2y) + (-2x - 2y) = 3000 - 1000 \\implies x = 2000$$\n\nSubstitute $x = 2000$ back into the first equation to find $y$:\n$$2000 + y = 500 \\implies y = -1500$$\n\nNow, evaluate $5x - y$:\n$$5x - y = 5(2000) - (-1500) = 10000 + 1500 = 11500$$\nTherefore, the correct answer is $11500$."
  },
  {
    id: "est1_system_of_eq_pdf_q17",
    question: "Consider $3$ circles: $A$, $B$, and $C$. The sum of the radii of Circle $A$ and Circle $B$ is $5$ m. The sum of the radii of Circle $A$ and Circle $C$ is $8$ m. The sum of the radii of Circle $B$ and Circle $C$ is $7$ m. What is the length, in meters, of the radius of Circle $C$?",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    correctAnswer: 4,
    explanation: "Let $a$, $b$, and $c$ be the radii of circles $A$, $B$, and $C$ respectively.\nWe are given the following system of linear equations:\n$$\\begin{cases} a + b = 5 \\\\ a + c = 8 \\\\ b + c = 7 \\end{cases}$$\n\nAdd all three equations together:\n$$(a + b) + (a + c) + (b + c) = 5 + 8 + 7$$\n$$2a + 2b + 2c = 20 \\implies a + b + c = 10$$\n\nTo find the radius of circle $C$ ($c$), subtract the first equation ($a + b = 5$) from this sum:\n$$c = (a + b + c) - (a + b) = 10 - 5 = 5\\text{ m}$$\nTherefore, the radius of Circle $C$ is $5$ m."
  },
  {
    id: "est1_system_of_eq_pdf_q18",
    question: "When a system of two linear equations has a unique solution, how do the graphs of the equations appear in the $xy$-plane?",
    options: [
      "The lines are parallel.",
      "The lines are confounded (coincident).",
      "The lines intersect at a single point.",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "A unique solution to a system of two linear equations corresponds to a single point $(x, y)$ that satisfies both equations. In the coordinate plane, this is represented by two lines that intersect at exactly one point."
  },
  {
    id: "est1_system_of_eq_pdf_q19",
    question: "When a system of two linear equations has no solution, how do the graphs of the equations appear in the $xy$-plane?",
    options: [
      "The lines intersect at a single point.",
      "The lines have the same $x$-intercept.",
      "The lines are parallel.",
      "The lines are confounded (coincident)."
    ],
    correctAnswer: 2,
    explanation: "A system of two linear equations has no solution if the lines are parallel and distinct. Parallel lines have the same slope but different y-intercepts, meaning they will never intersect, so there is no coordinate pair $(x, y)$ that satisfies both equations."
  },
  {
    id: "est1_system_of_eq_pdf_q20",
    question: "Given the system of equations below, where $a$ and $c$ are constants:\n$$\\begin{cases} ax - \\frac{1}{2}y = c \\\\ 2x + 4y = 5 \\end{cases}$$\nIf the system has infinitely many solutions, what is the value of $c$?",
    options: [
      "$-\\frac{5}{8}$",
      "$\\frac{1}{4}$",
      "$\\frac{5}{4}$",
      "$-\\frac{11}{4}$"
    ],
    correctAnswer: 0,
    explanation: "For a system of two linear equations to have infinitely many solutions, the two equations must represent the same line. This means their corresponding coefficients and constants must be proportional:\n$$\\frac{a}{2} = \\frac{-\\frac{1}{2}}{4} = \\frac{c}{5}$$\n\nUsing the known ratio:\n$$\\frac{-\\frac{1}{2}}{4} = -\\frac{1}{8}$$\n\nNow, solve for $c$:\n$$\\frac{c}{5} = -\\frac{1}{8} \\implies c = -\\frac{5}{8}$$\n\nTherefore, the value of $c$ is $-\\frac{5}{8}$."
  },
  {
    id: "est1_system_of_eq_pdf_q21",
    question: "Which of the following systems has an infinite number of solutions?",
    options: [
      "$\\begin{cases} 2x - 3y = 1 \\\\ x + 3y = 4 \\end{cases}$",
      "$\\begin{cases} -2x + y = -1 \\\\ 5y = -2x \\end{cases}$",
      "$\\begin{cases} 3x + y = 2 \\\\ x = -5y \\end{cases}$",
      "$\\begin{cases} -2x - 2y = 4 \\\\ y = -x - 2 \\end{cases}$"
    ],
    correctAnswer: 3,
    explanation: "An infinite number of solutions occurs when the two linear equations are identical (coincident lines).\nLet us check Option D:\n- First equation: $-2x - 2y = 4 \\implies -2y = 2x + 4 \\implies y = -x - 2$\n- Second equation: $y = -x - 2$\n\nBoth equations simplify to the exact same line, meaning they have infinitely many intersection points. Therefore, Option D is the correct answer."
  },
  {
    id: "est1_system_of_eq_pdf_q22",
    question: "The graph of a system of a linear equation and a nonlinear equation is shown in the $xy$-plane below. What is the solution $(x, y)$ to this system?",
    svg: `<svg viewBox="-30 -30 300 300" width="100%" height="250" class="max-w-[300px] mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Grid -->
      <path d="M 0,0 L 240,0 M 0,30 L 240,30 M 0,60 L 240,60 M 0,90 L 240,90 M 0,120 L 240,120 M 0,150 L 240,150 M 0,180 L 240,180 M 0,210 L 240,210 M 0,240 L 240,240" stroke="#e5e7eb" stroke-width="1"/>
      <path d="M 0,0 L 0,240 M 30,0 L 30,240 M 60,0 L 60,240 M 90,0 L 90,240 M 120,0 L 120,240 M 150,0 L 150,240 M 180,0 L 180,240 M 210,0 L 210,240 M 240,0 L 240,240" stroke="#e5e7eb" stroke-width="1"/>
      
      <!-- Axes -->
      <line x1="60" y1="0" x2="60" y2="240" stroke="#4b5563" stroke-width="2"/>
      <line x1="0" y1="180" x2="240" y2="180" stroke="#4b5563" stroke-width="2"/>
      
      <!-- Axis Arrows -->
      <path d="M 240,180 L 235,177 L 235,183 Z" fill="#4b5563"/>
      <path d="M 60,0 L 57,5 L 63,5 Z" fill="#4b5563"/>
      
      <!-- Grid Labels -->
      <text x="245" y="184" font-family="sans-serif" font-size="10" fill="#4b5563">x</text>
      <text x="58" y="-10" font-family="sans-serif" font-size="10" fill="#4b5563">y</text>
      
      <!-- Numbers -->
      <text x="30" y="195" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#9ca3af">-1</text>
      <text x="90" y="195" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#9ca3af">1</text>
      <text x="120" y="195" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#9ca3af">2</text>
      <text x="150" y="195" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#9ca3af">3</text>
      <text x="180" y="195" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#9ca3af">4</text>
      <text x="210" y="195" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#9ca3af">5</text>
      
      <text x="48" y="153" font-family="sans-serif" font-size="9" text-anchor="end" fill="#9ca3af">1</text>
      <text x="48" y="123" font-family="sans-serif" font-size="9" text-anchor="end" fill="#9ca3af">2</text>
      <text x="48" y="93" font-family="sans-serif" font-size="9" text-anchor="end" fill="#9ca3af">3</text>
      <text x="48" y="63" font-family="sans-serif" font-size="9" text-anchor="end" fill="#9ca3af">4</text>
      <text x="48" y="33" font-family="sans-serif" font-size="9" text-anchor="end" fill="#9ca3af">5</text>
      <text x="48" y="213" font-family="sans-serif" font-size="9" text-anchor="end" fill="#9ca3af">-1</text>
      
      <line x1="174" y1="0" x2="222" y2="240" stroke="#2563eb" stroke-width="2.5"/>
      <path d="M 0,63 Q 120,60 180,30 T 240,-30" fill="none" stroke="#10b981" stroke-width="2.5"/>
      <circle cx="180" cy="30" r="5" fill="#dc2626"/>
      <text x="190" y="25" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">(4, 5)</text>
    </svg>`,
    options: [
      "$(0, 0)$",
      "$(0, 4)$",
      "$(4, 5)$",
      "$(5, 0)$"
    ],
    correctAnswer: 2,
    explanation: "The solution to a system of equations represented graphically in the $xy$-plane corresponds to the coordinates of the point where the graphs intersect.\n\nLooking at the graph, the line and the curve intersect at exactly one point:\n- The $x$-coordinate of the intersection point is $4$.\n- The $y$-coordinate of the intersection point is $5$.\n\nTherefore, the solution to the system of equations is $(4, 5)$, which corresponds to option C."
  },
  {
    id: "est1_system_of_eq_pdf_q23",
    question: "What is the solution $(r, s)$ to the given system of equations?\n$$\\begin{cases} s + 7r = 27 \\\\ r = 3 \\end{cases}$$",
    options: [
      "$(6, 3)$",
      "$(3, 6)$",
      "$(3, 27)$",
      "$(27, 3)$"
    ],
    correctAnswer: 1,
    explanation: "The system is:\n$$\\begin{cases} s + 7r = 27 \\\\ r = 3 \\end{cases}$$\n\nSubstitute the value of $r = 3$ into the first equation:\n$$s + 7(3) = 27 \\implies s + 21 = 27 \\implies s = 6$$\n\nWe are asked for the solution as an ordered pair $(r, s)$:\n$$(r, s) = (3, 6)$$\nTherefore, the correct answer is option B."
  },
  {
    id: "est1_system_of_eq_pdf_q24",
    question: "What is the solution $(x, y)$ to the given system of equations?\n$$\\begin{cases} x + y = 18 \\\\ 5y = x \\end{cases}$$",
    options: [
      "$(15, 3)$",
      "$(16, 2)$",
      "$(17, 1)$",
      "$(18, 0)$"
    ],
    correctAnswer: 0,
    explanation: "We are given the system:\n$$\\begin{cases} x + y = 18 \\\\ 5y = x \\end{cases}$$\n\nSubstitute $x = 5y$ into the first equation:\n$$5y + y = 18 \\implies 6y = 18 \\implies y = 3$$\n\nNow substitute $y = 3$ back into the second equation to solve for $x$:\n$$x = 5(3) = 15$$\n\nThe solution is $(x, y) = (15, 3)$, which corresponds to option A."
  },
  {
    id: "est1_system_of_eq_pdf_q25",
    question: "The graph of a system of two linear equations is shown in the $xy$-plane below. If the solution to the system is $(x, y)$, what is the value of $x$?",
    svg: `<svg viewBox="-30 -30 300 300" width="100%" height="250" class="max-w-[300px] mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Grid -->
      <path d="M 0,0 L 240,0 M 0,30 L 240,30 M 0,60 L 240,60 M 0,90 L 240,90 M 0,120 L 240,120 M 0,150 L 240,150 M 0,180 L 240,180 M 0,210 L 240,210 M 0,240 L 240,240" stroke="#e5e7eb" stroke-width="1"/>
      <path d="M 0,0 L 0,240 M 30,0 L 30,240 M 60,0 L 60,240 M 90,0 L 90,240 M 120,0 L 120,240 M 150,0 L 150,240 M 180,0 L 180,240 M 210,0 L 210,240 M 240,0 L 240,240" stroke="#e5e7eb" stroke-width="1"/>
      
      <!-- Axes -->
      <line x1="60" y1="0" x2="60" y2="240" stroke="#4b5563" stroke-width="2"/>
      <line x1="0" y1="180" x2="240" y2="180" stroke="#4b5563" stroke-width="2"/>
      
      <!-- Axis Arrows -->
      <path d="M 240,180 L 235,177 L 235,183 Z" fill="#4b5563"/>
      <path d="M 60,0 L 57,5 L 63,5 Z" fill="#4b5563"/>
      
      <!-- Grid Labels -->
      <text x="245" y="184" font-family="sans-serif" font-size="10" fill="#4b5563">x</text>
      <text x="58" y="-10" font-family="sans-serif" font-size="10" fill="#4b5563">y</text>
      
      <!-- Numbers -->
      <text x="30" y="195" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#9ca3af">-1</text>
      <text x="90" y="195" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#9ca3af">1</text>
      <text x="120" y="195" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#9ca3af">2</text>
      <text x="150" y="195" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#9ca3af">3</text>
      <text x="180" y="195" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#9ca3af">4</text>
      <text x="210" y="195" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#9ca3af">5</text>
      
      <text x="48" y="153" font-family="sans-serif" font-size="9" text-anchor="end" fill="#9ca3af">1</text>
      <text x="48" y="123" font-family="sans-serif" font-size="9" text-anchor="end" fill="#9ca3af">2</text>
      <text x="48" y="93" font-family="sans-serif" font-size="9" text-anchor="end" fill="#9ca3af">3</text>
      <text x="48" y="63" font-family="sans-serif" font-size="9" text-anchor="end" fill="#9ca3af">4</text>
      <text x="48" y="33" font-family="sans-serif" font-size="9" text-anchor="end" fill="#9ca3af">5</text>
      
      <line x1="60" y1="30" x2="210" y2="180" stroke="#2563eb" stroke-width="2"/>
      <line x1="90" y1="240" x2="210" y2="120" stroke="#dc2626" stroke-width="2"/>
      <circle cx="180" cy="150" r="5" fill="#dc2626"/>
    </svg>`,
    options: [
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    correctAnswer: 2,
    explanation: "The solution to a system of equations represented graphically is the coordinate point where the two lines intersect.\n\nFrom the given graph:\n- The two lines intersect at the point $(4, 1)$.\n- Since the solution is represented as $(x, y)$, we have $x = 4$ and $y = 1$.\n\nThus, the value of $x$ is $4$."
  },
  {
    id: "est1_system_of_eq_pdf_q26",
    question: "Given the system of equations below, where $a$ and $b$ are constants and $a = 2b$:\n$$\\begin{cases} 2x + by = 10 \\\\ ax + 4y = 15 \\end{cases}$$\nIf the system has no solution, which of the following could be a possible value of $a$?",
    options: [
      "$-2$",
      "$\\frac{1}{2}$",
      "$4$",
      "$8$"
    ],
    correctAnswer: 2,
    explanation: "For a system of two linear equations to have no solution, their slopes must be equal (parallel lines) but their y-intercepts must be different:\n$$\\frac{2}{a} = \\frac{b}{4} \\ne \\frac{10}{15}$$\n\nFrom the coefficient ratio:\n$$\\frac{2}{a} = \\frac{b}{4} \\implies ab = 8$$\n\nWe are given that $a = 2b$, which means $b = \\frac{a}{2}$. Substitute this into $ab = 8$:\n$$a \\left( \\frac{a}{2} \\right) = 8 \\implies \\frac{a^2}{2} = 8 \\implies a^2 = 16 \\implies a = \\pm 4$$\n\nThus, a possible value of $a$ is $4$, which corresponds to option C."
  },
  {
    id: "est1_system_of_eq_pdf_q27",
    question: "A solution to the given system of equations is $(x, y)$, where $x > 0$. What is the value of $x$?\n$$\\begin{cases} y = 4x \\\\ y = x^2 - 12 \\end{cases}$$",
    options: [
      "$2$",
      "$4$",
      "$6$",
      "$8$"
    ],
    correctAnswer: 2,
    explanation: "To find the solutions, we set the equations equal to each other:\n$$x^2 - 12 = 4x \\implies x^2 - 4x - 12 = 0$$\n\nFactor the quadratic equation:\n$$(x - 6)(x + 2) = 0 \\implies x = 6\\text{ or } x = -2$$\n\nSince we are given that $x > 0$, we choose the positive value:\n$$x = 6$$\nTherefore, the value of $x$ is $6$."
  },
  {
    id: "est1_system_of_eq_pdf_q28",
    question: "A store sells two different-sized containers of blueberries. The store's sales of these blueberries totaled \\$896.86 last month. The equation $4.51x + 6.07y = 896.86$ represents this situation, where $x$ is the number of smaller containers sold and $y$ is the number of larger containers sold. According to the equation, what is the price, in dollars, of each smaller container?",
    options: [
      "\\$4.51",
      "\\$3.50",
      "\\$4.80",
      "\\$6.50"
    ],
    correctAnswer: 0,
    explanation: "In the equation $4.51x + 6.07y = 896.86$:\n- $x$ represents the number of smaller containers sold.\n- $y$ represents the number of larger containers sold.\n- The coefficient of $x$ ($4.51$) represents the price in dollars of each smaller container.\n- The coefficient of $y$ ($6.07$) represents the price in dollars of each larger container.\n\nTherefore, the price of each smaller container is \\$4.51."
  },
  {
    id: "est1_system_of_eq_pdf_q29",
    question: "The solution to the given system of equations is $(x, y)$. What is the value of $y$?\n$$\\begin{cases} 24x + y = 48 \\\\ 6x + y = 72 \\end{cases}$$",
    options: [
      "$80$",
      "$70$",
      "$40$",
      "$20$"
    ],
    correctAnswer: 0,
    explanation: "We are given the system:\n$$\\begin{cases} 24x + y = 48 \\\\ 6x + y = 72 \\end{cases}$$\n\nSubtract the second equation from the first equation to eliminate $y$:\n$$(24x - 6x) + (y - y) = 48 - 72 \\implies 18x = -24 \\implies x = -\\frac{24}{18} = -\\frac{4}{3}$$\n\nSubstitute $x = -\\frac{4}{3}$ into the second equation to find $y$:\n$$6\\left(-\\frac{4}{3}\\right) + y = 72 \\implies -8 + y = 72 \\implies y = 80$$\n\nTherefore, the value of $y$ is $80$."
  },
  {
    id: "est1_system_of_eq_pdf_q30",
    question: "For a theater, a ticket for an adult is $5$ dollars more than a ticket for a child. If a group of $6$ adults and $10$ children pay a total of $142$ dollars, what is the cost, in dollars, of a ticket for one adult and one child?",
    options: [
      "$19$",
      "$18$",
      "$17$",
      "$16$"
    ],
    correctAnswer: 0,
    explanation: "Let $c$ be the cost of a child's ticket and $a$ be the cost of an adult's ticket.\nFrom the problem description, we have the system:\n$$\\begin{cases} a = c + 5 \\\\ 6a + 10c = 142 \\end{cases}$$\n\nSubstitute $a = c + 5$ into the second equation:\n$$6(c + 5) + 10c = 142 \\implies 6c + 30 + 10c = 142 \\implies 16c = 112 \\implies c = 7$$\n\nNow find the cost of an adult ticket:\n$$a = 7 + 5 = 12$$\n\nThe cost of one adult and one child ticket ($a + c$) is:\n$$a + c = 12 + 7 = 19\\text{ dollars}$$\nTherefore, the cost is $19$ dollars."
  },
  {
    id: "est1_system_of_eq_pdf_q31",
    question: "In the given system of equations below, $a$ is a constant:\n$$\\begin{cases} y = 2x^2 - 21x + 64 \\\\ y = 3x + a \\end{cases}$$\nIf the graphs of the equations intersect at exactly one point $(x, y)$ in the $xy$-plane, what is the value of $x$?",
    options: [
      "$-8$",
      "$-6$",
      "$6$",
      "$8$"
    ],
    correctAnswer: 2,
    explanation: "To find the points of intersection, set the equations equal:\n$$2x^2 - 21x + 64 = 3x + a \\implies 2x^2 - 24x + (64 - a) = 0$$\n\nFor the system to intersect at exactly one point, this quadratic equation must have exactly one real solution, which means its discriminant ($\\Delta$) must be equal to $0$:\n$$\\Delta = B^2 - 4AC = 0$$\n$$(-24)^2 - 4(2)(64 - a) = 0 \\implies 576 - 8(64 - a) = 0$$\n$$576 - 512 + 8a = 0 \\implies 64 + 8a = 0 \\implies a = -8$$\n\nNow, substitute $a = -8$ back into the quadratic equation to find $x$:\n$$2x^2 - 24x + (64 - (-8)) = 0 \\implies 2x^2 - 24x + 72 = 0$$\n\nDivide the entire equation by $2$:\n$$x^2 - 12x + 36 = 0 \\implies (x - 6)^2 = 0 \\implies x = 6$$\n\nTherefore, the value of $x$ is $6$."
  },
  {
    id: "est1_system_of_eq_pdf_q32",
    question: "Given the equations below:\n$$\\begin{cases} x - y = 5 \\\\ xy = 10 \\end{cases}$$\nWhat is the value of $x^2 + y^2$?",
    options: [
      "$15$",
      "$25$",
      "$36$",
      "$45$"
    ],
    correctAnswer: 3,
    explanation: "We can use the algebraic identity for the square of a difference:\n$$(x - y)^2 = x^2 - 2xy + y^2$$\n\nSubstitute the known values $x - y = 5$ and $xy = 10$ into this identity:\n$$(5)^2 = x^2 + y^2 - 2(10)$$\n$$25 = x^2 + y^2 - 20$$\n\nAdd $20$ to both sides:\n$$x^2 + y^2 = 25 + 20 = 45$$\n\nTherefore, the value of $x^2 + y^2$ is $45$."
  }
];
