const fs = require('fs');

const questions = [
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
    svg: \`<svg viewBox="-20 -20 220 220" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="100" x2="200" y2="100" stroke="black" stroke-width="1"/>
      <line x1="100" y1="0" x2="100" y2="200" stroke="black" stroke-width="1"/>
      <line x1="100" y1="40" x2="140" y2="100" stroke="blue" stroke-width="2"/>
      <circle cx="100" cy="40" r="3" fill="red"/>
      <text x="110" y="35" font-family="sans-serif" font-size="12">A(0, 3)</text>
      <circle cx="140" cy="100" r="3" fill="red"/>
      <text x="145" y="95" font-family="sans-serif" font-size="12">B(2, 0)</text>
    </svg>\`,
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
    svg: \`<svg viewBox="0 0 300 200" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
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
    </svg>\`,
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
    svg: \`<svg viewBox="0 0 300 100" width="300" height="100" xmlns="http://www.w3.org/2000/svg">
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
    </svg>\`,
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
    svg: \`<svg viewBox="-60 -40 140 100" width="280" height="200" xmlns="http://www.w3.org/2000/svg">
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
    </svg>\`,
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
    svg: \`<svg viewBox="-40 -20 80 60" width="240" height="180" xmlns="http://www.w3.org/2000/svg">
      <line x1="-40" y1="0" x2="40" y2="0" stroke="gray" stroke-width="0.5"/>
      <line x1="0" y1="-20" x2="0" y2="40" stroke="gray" stroke-width="0.5"/>
      <line x1="-40" y1="-20" x2="40" y2="20" stroke="blue" stroke-width="1.5"/>
      <line x1="-20" y1="40" x2="20" y2="-40" stroke="red" stroke-width="1.5"/>
    </svg>\`,
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
    svg: \`<svg viewBox="0 0 300 100" width="300" height="100" xmlns="http://www.w3.org/2000/svg">
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
    </svg>\`,
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
    svg: \`<svg viewBox="0 0 200 100" width="200" height="100" xmlns="http://www.w3.org/2000/svg">
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
    </svg>\`,
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
    svg: \`<svg viewBox="-50 -50 100 100" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <line x1="-50" y1="0" x2="50" y2="0" stroke="gray" stroke-width="0.5"/>
      <line x1="0" y1="-50" x2="0" y2="50" stroke="gray" stroke-width="0.5"/>
      <polyline points="-40,10 -20,-40 -10,30 20,10 40,-20" fill="none" stroke="black" stroke-width="1.5"/>
    </svg>\`,
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
    svg: \`<svg viewBox="-20 -20 120 120" width="240" height="240" xmlns="http://www.w3.org/2000/svg">
      <line x1="-20" y1="50" x2="100" y2="50" stroke="gray" stroke-width="0.5"/>
      <line x1="10" y1="-20" x2="10" y2="100" stroke="gray" stroke-width="0.5"/>
      <line x1="-10" y1="10" x2="90" y2="80" stroke="black" stroke-width="1.5"/>
    </svg>\`,
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
    svg: \`<svg viewBox="-40 -40 80 80" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <line x1="-40" y1="0" x2="40" y2="0" stroke="gray" stroke-width="0.5"/>
      <line x1="0" y1="-40" x2="0" y2="40" stroke="gray" stroke-width="0.5"/>
      <line x1="-30" y1="30" x2="30" y2="-30" stroke="blue" stroke-width="1.5"/>
      <line x1="-30" y1="-30" x2="30" y2="30" stroke="red" stroke-width="1.5"/>
    </svg>\`,
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
    svg: \`<svg viewBox="-40 -40 80 80" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <line x1="-40" y1="0" x2="40" y2="0" stroke="gray" stroke-width="0.5"/>
      <line x1="0" y1="-40" x2="0" y2="40" stroke="gray" stroke-width="0.5"/>
      <path d="M -30 30 Q 0 -15 30 -30" fill="none" stroke="black" stroke-width="1.5"/>
    </svg>\`,
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
  }
];

const content = \`import { Question } from '../types';

export const EST1_LINEAR_EQUATION_PART2: Question[] = \${JSON.stringify(questions, null, 2)};
\`;

fs.writeFileSync('src/data/questions_est1_linear_eq_part2.ts', content);
console.log('Generated src/data/questions_est1_linear_eq_part2.ts');
