import { Question } from "../../types";

export const SAT_NOV_2024_FORM_A_SET: Question[] = [
  {
    "question": "The graph of the function $f$ is shown, where $y = f(x)$. What is the value of $f(0)$?",
    "options": [
      "$-6$",
      "$-4$",
      "$-3$",
      "$0$"
    ],
    "correctAnswer": 2,
    "explanation": "The graph intersects the $y$-axis at the point $(0, -3)$. Therefore, the value of $f(0)$ is $-3$.",
    "id": 1,
    "svg": "<svg width=\"200\" height=\"200\" viewBox=\"-10 -10 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g stroke=\"#ccc\" stroke-width=\"0.2\">\n    <line x1=\"-10\" y1=\"-8\" x2=\"10\" y2=\"-8\" /><line x1=\"-10\" y1=\"-6\" x2=\"10\" y2=\"-6\" /><line x1=\"-10\" y1=\"-4\" x2=\"10\" y2=\"-4\" /><line x1=\"-10\" y1=\"-2\" x2=\"10\" y2=\"-2\" /><line x1=\"-10\" y1=\"2\" x2=\"10\" y2=\"2\" /><line x1=\"-10\" y1=\"4\" x2=\"10\" y2=\"4\" /><line x1=\"-10\" y1=\"6\" x2=\"10\" y2=\"6\" /><line x1=\"-10\" y1=\"8\" x2=\"10\" y2=\"8\" />\n    <line x1=\"-8\" y1=\"-10\" x2=\"-8\" y2=\"10\" /><line x1=\"-6\" y1=\"-10\" x2=\"-6\" y2=\"10\" /><line x1=\"-4\" y1=\"-10\" x2=\"-4\" y2=\"10\" /><line x1=\"-2\" y1=\"-10\" x2=\"-2\" y2=\"10\" /><line x1=\"2\" y1=\"-10\" x2=\"2\" y2=\"10\" /><line x1=\"4\" y1=\"-10\" x2=\"4\" y2=\"10\" /><line x1=\"6\" y1=\"-10\" x2=\"6\" y2=\"10\" /><line x1=\"8\" y1=\"-10\" x2=\"8\" y2=\"10\" />\n  </g>\n  <line x1=\"-10\" y1=\"0\" x2=\"10\" y2=\"0\" stroke=\"black\" stroke-width=\"0.5\" />\n  <line x1=\"0\" y1=\"-10\" x2=\"0\" y2=\"10\" stroke=\"black\" stroke-width=\"0.5\" />\n  <line x1=\"-7\" y1=\"-10\" x2=\"10\" y2=\"7\" stroke=\"blue\" stroke-width=\"0.5\" />\n</svg>"
  },
  {
    "question": "In the figure, two lines intersect at a point. If $r = 61$, what is the value of $s$?",
    "options": [],
    "answerText": "61",
    "correctAnswer": "61",
    "isGridIn": true,
    "explanation": "Vertical angles are equal. Since angles $r$ and $s$ are vertical angles, $s = r = 61$.",
    "id": 2,
    "svg": "<svg width=\"200\" height=\"150\" viewBox=\"0 0 200 150\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"20\" y1=\"20\" x2=\"180\" y2=\"130\" stroke=\"black\" stroke-width=\"2\" />\n  <line x1=\"20\" y1=\"130\" x2=\"180\" y2=\"20\" stroke=\"black\" stroke-width=\"2\" />\n  <text x=\"100\" y=\"60\" font-size=\"14\" text-anchor=\"middle\">r°</text>\n  <text x=\"100\" y=\"105\" font-size=\"14\" text-anchor=\"middle\">s°</text>\n  <path d=\"M 90 65 Q 100 80 110 65\" fill=\"none\" stroke=\"black\" />\n  <path d=\"M 90 85 Q 100 70 110 85\" fill=\"none\" stroke=\"black\" />\n</svg>"
  },
  {
    "question": "The function $f$ is defined by $f(x) = 5x^2$. What is the value of $f(7)$?",
    "options": [
      "$35$",
      "$45$",
      "$70$",
      "$245$"
    ],
    "correctAnswer": 3,
    "explanation": "Substitute $x = 7$ into the function: $f(7) = 5(7)^2 = 5(49) = 245$.",
    "id": 3
  },
  {
    "question": "\\\\begin{align*} x + 5y &= 5 \\\\\\\\ x - 5y &= 7 \\\\end{align*} \\n The solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    "options": [
      "$1.2$",
      "$5$",
      "$6$",
      "$12$"
    ],
    "correctAnswer": 2,
    "explanation": "Add the two equations together: $(x + 5y) + (x - 5y) = 5 + 7 \\\\Rightarrow 2x = 12 \\\\Rightarrow x = 6$.",
    "id": 4
  },
  {
    "question": "Which expression is equivalent to $6x(x + 3)$?",
    "options": [
      "$6x^2 + 3$",
      "$6x^2 + 18x$",
      "$7x^2 + 3$",
      "$7x^2 + 9x$"
    ],
    "correctAnswer": 1,
    "explanation": "Distribute the $6x$: $6x(x) + 6x(3) = 6x^2 + 18x$.",
    "id": 5
  },
  {
    "question": "The function $f$ is defined by $f(x) = 3x^5$. In the $xy$-plane, the graph of $y = g(x)$ is the result of shifting the graph of $y = f(x)$ up $9$ units. Which equation defines the function $g$?",
    "options": [
      "$g(x) = 3x^5 + 9$",
      "$g(x) = 3x^5 - 9$",
      "$g(x) = 3x^{45}$",
      "$g(x) = 27x^5$"
    ],
    "correctAnswer": 0,
    "explanation": "Shifting a graph up by $9$ units adds $9$ to the function. So, $g(x) = f(x) + 9 = 3x^5 + 9$.",
    "id": 6
  },
  {
    "question": "For the linear function $f$, the graph of $y = f(x)$ in the $xy$-plane has a slope of $69$ and $f(0) = 3$. Which equation defines $f$?",
    "options": [
      "$f(x) = 3x$",
      "$f(x) = 3x + 3$",
      "$f(x) = 69x$",
      "$f(x) = 69x + 3$"
    ],
    "correctAnswer": 3,
    "explanation": "The equation of a line is $f(x) = mx + b$, where $m$ is the slope and $b$ is the $y$-intercept. The $y$-intercept is given by $f(0) = 3$. Thus, $f(x) = 69x + 3$.",
    "id": 7
  },
  {
    "question": "$5\\\\%$ of $w$ is $741.41$. What is the value of $w$?",
    "options": [
      "$778.481$",
      "$3,707.05$",
      "$14,828.2$",
      "$70,433.95$"
    ],
    "correctAnswer": 2,
    "explanation": "We have $0.05w = 741.41$. Dividing both sides by $0.05$ gives $w = 14828.2$.",
    "id": 8
  },
  {
    "question": "The graph of a system of a linear and a quadratic equation is shown. What system is represented by the graph?",
    "options": [
      "$y = \\\\frac{7}{16}x^2$, $y = \\\\frac{7}{4}x$",
      "$y = -\\\\frac{7}{16}x^2$, $y = \\\\frac{7}{4}x$",
      "$y = \\\\frac{7}{16}x^2$, $y = -\\\\frac{7}{4}x$",
      "$y = -\\\\frac{7}{16}x^2$, $y = -\\\\frac{7}{4}x$"
    ],
    "correctAnswer": 0,
    "explanation": "The parabola opens upwards, so the leading coefficient is positive. It passes through $(0,0)$ and $(4,7)$, so $7 = a(4)^2 \\\\Rightarrow a = 7/16$. The line passes through $(0,0)$ and intersects the parabola at $(4,7)$, so its slope is $7/4$, and the equation is $y = \\\\frac{7}{4}x$.",
    "id": 9,
    "svg": "<svg width=\"200\" height=\"200\" viewBox=\"-2 -2 10 14\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g stroke=\"#ccc\" stroke-width=\"0.2\">\n    <line x1=\"-2\" y1=\"2\" x2=\"10\" y2=\"2\" /> <line x1=\"-2\" y1=\"4\" x2=\"10\" y2=\"4\" /> <line x1=\"-2\" y1=\"6\" x2=\"10\" y2=\"6\" /> <line x1=\"-2\" y1=\"8\" x2=\"10\" y2=\"8\" /> <line x1=\"-2\" y1=\"10\" x2=\"10\" y2=\"10\" /> <line x1=\"-2\" y1=\"12\" x2=\"10\" y2=\"12\" />\n    <line x1=\"2\" y1=\"-2\" x2=\"2\" y2=\"14\" /> <line x1=\"4\" y1=\"-2\" x2=\"4\" y2=\"14\" /> <line x1=\"6\" y1=\"-2\" x2=\"6\" y2=\"14\" /> <line x1=\"8\" y1=\"-2\" x2=\"8\" y2=\"14\" />\n  </g>\n  <line x1=\"-2\" y1=\"0\" x2=\"10\" y2=\"0\" stroke=\"black\" stroke-width=\"0.5\" transform=\"scale(1, -1) translate(0, -12)\" />\n  <line x1=\"0\" y1=\"-2\" x2=\"0\" y2=\"14\" stroke=\"black\" stroke-width=\"0.5\" />\n  <g transform=\"translate(0, 12) scale(1, -1)\">\n    <line x1=\"0\" y1=\"0\" x2=\"6\" y2=\"10.5\" stroke=\"blue\" stroke-width=\"0.5\" />\n    <path d=\"M 0 0 Q 3 2 4 7 T 5.5 13\" fill=\"none\" stroke=\"red\" stroke-width=\"0.5\" />\n  </g>\n</svg>"
  },
  {
    "question": "$W(x) = 4x + 80$ \\n The function $W$ gives the total time, in minutes, it takes for a gardener to water $x$ plants and mow the grass. According to the function, how many minutes does it take the gardener to mow the grass?",
    "options": [],
    "answerText": "80",
    "correctAnswer": "80",
    "isGridIn": true,
    "explanation": "The constant term represents the time taken to mow the grass, which is independent of the number of plants $x$. So, it takes $80$ minutes.",
    "id": 10
  },
  {
    "question": "\\\\begin{align*} 19 &= x + y \\\\\\\\ x - y &= 9 \\\\end{align*} \\n The solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    "options": [
      "$9$",
      "$10$",
      "$14$",
      "$19$"
    ],
    "correctAnswer": 2,
    "explanation": "Add the two equations: $(x + y) + (x - y) = 19 + 9 \\\\Rightarrow 2x = 28 \\\\Rightarrow x = 14$.",
    "id": 11
  },
  {
    "question": "In the $xy$-plane, the graph of the equation $x^2 - 16x + y^2 - 10y - 55 = 0$ is a circle. If this circle is inscribed in a square, what is the perimeter of the square?",
    "options": [
      "$24$",
      "$48$",
      "$96$",
      "$220$"
    ],
    "correctAnswer": 2,
    "explanation": "Rewrite the equation by completing the square: $(x^2 - 16x + 64) + (y^2 - 10y + 25) = 55 + 64 + 25 \\\\Rightarrow (x - 8)^2 + (y - 5)^2 = 144$. The radius of the circle is $r = \\\\sqrt{144} = 12$. The side length of the circumscribed square is equal to the diameter, $2r = 24$. The perimeter of the square is $4 \\\\times 24 = 96$.",
    "id": 12
  },
  {
    "question": "If $5(3x + 6) = 3(3x + 6) + 78$, what is the value of $3x + 6$?",
    "options": [
      "$78$",
      "$39$",
      "$33$",
      "$11$"
    ],
    "correctAnswer": 1,
    "explanation": "Let $u = 3x + 6$. The equation becomes $5u = 3u + 78 \\\\Rightarrow 2u = 78 \\\\Rightarrow u = 39$. Thus, $3x + 6 = 39$.",
    "id": 13
  },
  {
    "question": "If $f(x) = x + 5$ and $g(x) = 5x$, what is the value of $7f(4) - g(4)$?",
    "options": [
      "$-11$",
      "$13$",
      "$35$",
      "$43$"
    ],
    "correctAnswer": 3,
    "explanation": "Evaluate $f(4)$ and $g(4)$: $f(4) = 4 + 5 = 9$, and $g(4) = 5(4) = 20$. Then, $7f(4) - g(4) = 7(9) - 20 = 63 - 20 = 43$.",
    "id": 14
  },
  {
    "question": "$C(t) = 240 \\\\left(\\\\frac{53}{52}\\\\right)^{t-15} + 7$ \\n The function $C$ gives the estimated number of cephalopods, a class of marine animal, in a certain area, where $t$ is the number of months since a study began. How many months after the study began was the number of cephalopods in the area estimated to be $247$?",
    "options": [],
    "answerText": "15",
    "correctAnswer": "15",
    "isGridIn": true,
    "explanation": "Set $C(t)$ to $247$ and solve for $t$: $240 \\\\left(\\\\frac{53}{52}\\\\right)^{t-15} + 7 = 247 \\\\Rightarrow 240 \\\\left(\\\\frac{53}{52}\\\\right)^{t-15} = 240 \\\\Rightarrow \\\\left(\\\\frac{53}{52}\\\\right)^{t-15} = 1$. This implies the exponent must be $0$, so $t - 15 = 0 \\\\Rightarrow t = 15$.",
    "id": 15
  },
  {
    "question": "An object moves at a speed of $\\\\frac{3}{17}$ feet per second. What is this speed in yards per second? ($3\\\\text{ feet} = 1\\\\text{ yard}$)",
    "options": [],
    "answerText": "1/17",
    "correctAnswer": "1/17",
    "isGridIn": true,
    "explanation": "Convert feet per second to yards per second by multiplying by $(1\\\\text{ yard} / 3\\\\text{ feet})$: $\\\\frac{3}{17} \\\\times \\\\frac{1}{3} = \\\\frac{1}{17}$ yards per second.",
    "id": 16
  },
  {
    "question": "For the linear function $g$, a table shows four values of $x$ and their corresponding values of $g(x)$. The function can be written as $g(x) = mx + b$, where $m$ and $b$ are constants. \n $x = 1 \\\\Rightarrow g(x) = 34$ \n $x = 2 \\\\Rightarrow g(x) = 31$ \n $x = 3 \\\\Rightarrow g(x) = 28$ \n $x = 4 \\\\Rightarrow g(x) = 25$ \n What is the value of $b$?",
    "options": [],
    "answerText": "37",
    "correctAnswer": "37",
    "isGridIn": true,
    "explanation": "The slope $m$ is the change in $g(x)$ over the change in $x$: $m = \\\\frac{(31 - 34)}{(2 - 1)} = -3$. Using point-slope form with $(1, 34)$: $g(x) - 34 = -3(x - 1) \\\\Rightarrow g(x) = -3x + 3 + 34 = -3x + 37$. Therefore, $b = 37$.",
    "id": 17
  },
  {
    "question": "The current value of a house is $\\\\$174,000$, and this value increases by $2.4\\\\%$ each year from the value of the previous year. Which function $f$ gives the value, in dollars, of the house $x$ years from now?",
    "options": [
      "$f(x) = 174,000(0.024)^x$",
      "$f(x) = 174,000(0.24)^x$",
      "$f(x) = 174,000(1.024)^x$",
      "$f(x) = 174,000(1.24)^x$"
    ],
    "correctAnswer": 2,
    "explanation": "An increase of $2.4\\\\%$ corresponds to a multiplier of $1 + 0.024 = 1.024$. The function representing exponential growth is $174,000(1.024)^x$.",
    "id": 18
  },
  {
    "question": "What is the value of $\\\\sin 18\\\\pi$?",
    "options": [
      "$0$",
      "$\\\\frac{1}{2}$",
      "$\\\\frac{\\\\sqrt{2}}{2}$",
      "$1$"
    ],
    "correctAnswer": 0,
    "explanation": "The sine of any integer multiple of $\\\\pi$ is $0$. Thus, $\\\\sin 18\\\\pi = 0$.",
    "id": 19
  },
  {
    "question": "In triangle $QRS$ shown, angle $R$ is a right angle and $SR$ has a length of $17$. Which expression represents the length of $QS$?",
    "options": [
      "$17 \\\\cos Q$",
      "$17 \\\\sin Q$",
      "$\\\\frac{17}{\\\\cos Q}$",
      "$\\\\frac{17}{\\\\sin Q}$"
    ],
    "correctAnswer": 3,
    "explanation": "In right triangle $QRS$, the sine of angle $Q$ is the ratio of the opposite side ($SR$) to the hypotenuse ($QS$). Therefore, $\\\\sin Q = \\\\frac{17}{QS}$, which gives $QS = \\\\frac{17}{\\\\sin Q}$.",
    "id": 20
  },
  {
    "question": "One of the equations in a system of two linear equations is given by $\\\\frac{1}{9}x - \\\\frac{3r}{7}y = 34$, where $r$ is a nonzero constant. The system has no solution. If the other equation in the system is graphed in the $xy$-plane, what is the slope of the graph?",
    "options": [
      "$\\\\frac{27r}{7}$",
      "$\\\\frac{27}{7r}$",
      "$\\\\frac{7r}{27}$",
      "$\\\\frac{7}{27r}$"
    ],
    "correctAnswer": 3,
    "explanation": "For a system of linear equations to have no solution, the lines must be parallel, meaning they have the same slope. Rewrite the first equation in slope-intercept form: $\\\\frac{3r}{7}y = \\\\frac{1}{9}x - 34 \\\\Rightarrow y = \\\\frac{7}{3r}\\\\left(\\\\frac{1}{9}x - 34\\\\right) = \\\\frac{7}{27r}x - \\\\frac{238}{3r}$. Thus, the slope is $\\\\frac{7}{27r}$.",
    "id": 21
  },
  {
    "question": "A machine makes $8$-inch, $9$-inch, and $3$-inch parts. During a certain day, the number of $8$-inch parts that the machine makes is $4$ times the number $n$ of $9$-inch parts, and the number of $3$-inch parts is $30$. During this day, the machine makes $100$ parts total. Which equation represents this situation?",
    "options": [
      "$8(4n) + 9n + 3(30) = 100$",
      "$8n + 9n + 3n = 100$",
      "$4n + 30 = 100$",
      "$5n + 30 = 100$"
    ],
    "correctAnswer": 3,
    "explanation": "The number of $9$-inch parts is $n$. The number of $8$-inch parts is $4n$. The number of $3$-inch parts is $30$. The total number of parts is $n + 4n + 30 = 5n + 30$. Because the total is $100$, the equation is $5n + 30 = 100$.",
    "id": 22
  },
  {
    "question": "The ratio of the base to the height of a triangle is 1 to 8. The base of the triangle is 104 centimeters. What is the height, in centimeters, of the triangle?",
    "options": [
      "$13$",
      "$52$",
      "$104$",
      "$832$"
    ],
    "correctAnswer": 3,
    "explanation": "Let $b$ be the base and $h$ be the height. We have $\\\\frac{b}{h} = \\\\frac{1}{8}$. Given $b = 104$, we substitute to get $\\\\frac{104}{h} = \\\\frac{1}{8}$. Solving for $h$ yields $h = 104 \\\\times 8 = 832$.",
    "id": 23
  },
  {
    "question": "Which table gives three values of $x$ and their corresponding values of $q(x)$ for the function $q(x) = 15(3)^x$?",
    "options": [
      "$x = -1, 0, 1 \\\\Rightarrow q(x) = -45, 0, 45$",
      "$x = -1, 0, 1 \\\\Rightarrow q(x) = 1/3, 3, 45$",
      "$x = -1, 0, 1 \\\\Rightarrow q(x) = 1/5, 15, 45$",
      "$x = -1, 0, 1 \\\\Rightarrow q(x) = 5, 15, 45$"
    ],
    "correctAnswer": 3,
    "explanation": "Substitute $x = -1, 0, 1$ into $q(x) = 15(3)^x$. For $x = -1$, $q(-1) = 15(3)^{-1} = 15/3 = 5$. For $x = 0$, $q(0) = 15(3)^0 = 15(1) = 15$. For $x = 1$, $q(1) = 15(3)^1 = 45$.",
    "id": 24
  },
  {
    "question": "A plant nursery classifies a perennial flower species as tall if its typical height when fully grown is more than 100 centimeters. Each of the following inequalities represents the possible heights $h$, in centimeters, for a specific perennial flower species when fully grown. Which inequality represents the possible heights $h$, in centimeters, for a tall perennial flower species?",
    "options": [
      "$14 < h < 95$",
      "$41 < h < 93$",
      "$78 < h < 100$",
      "$107 < h < 160$"
    ],
    "correctAnswer": 3,
    "explanation": "A tall perennial species must have a typical fully grown height strictly greater than $100$ cm. The only interval where all possible heights $h$ are greater than $100$ is $107 < h < 160$.",
    "id": 25
  },
  {
    "question": "A linear function $f$ gives a company's profit, in dollars, for selling $x$ items. The company's profit is $\\\\$170$ when it sells $4$ items, and its profit is $\\\\$590$ when it sells $10$ items. Which equation defines $f$?",
    "options": [
      "$f(x) = 170x - 590$",
      "$f(x) = 59x$",
      "$f(x) = 70x - 10x$",
      "$f(x) = 70x - 110$"
    ],
    "correctAnswer": 3,
    "explanation": "The linear function passes through the points $(4, 170)$ and $(10, 590)$. The slope is $\\\\frac{590 - 170}{10 - 4} = \\\\frac{420}{6} = 70$. Using the point-slope form with $(4, 170)$: $y - 170 = 70(x - 4) \\\\Rightarrow y = 70x - 280 + 170 \\\\Rightarrow y = 70x - 110$. Hence, $f(x) = 70x - 110$.",
    "id": 26
  },
  {
    "question": "Each year, the value of an investment increases by $0.69\\\\%$ of its value the previous year. Which of the following functions best models how the value of the investment changes over time?",
    "options": [
      "Decreasing exponential",
      "Decreasing linear",
      "Increasing exponential",
      "Increasing linear"
    ],
    "correctAnswer": 2,
    "explanation": "Because the value increases by a constant percentage ($0.69\\\\%$) relative to its preceding value each year, the change is modeled by an increasing exponential function.",
    "id": 27
  },
  {
    "question": "Line $p$ in the $xy$-plane is defined by $y = x + \\\\frac{8}{3}$ and passes through the points $(a, 0)$ and $(0, b)$, where $a$ and $b$ are constants. What is the value of $a$?",
    "options": [],
    "answerText": "-8/3",
    "correctAnswer": "-8/3",
    "isGridIn": true,
    "explanation": "Substitute the point $(a, 0)$ into the equation: $0 = a + \\\\frac{8}{3} \\\\Rightarrow a = -\\\\frac{8}{3}$.",
    "id": 28
  },
  {
    "question": "$\\\\frac{25x}{x^2 - 25} = \\\\frac{x}{x - 5} + \\\\frac{20}{x + 5}$ \\n What is the positive solution to the given equation?",
    "options": [],
    "answerText": "10",
    "correctAnswer": "10",
    "isGridIn": true,
    "explanation": "Multiply both sides by $(x-5)(x+5) = x^2-25$ to get: $25x = x(x+5) + 20(x-5) \\\\Rightarrow 25x = x^2 + 5x + 20x - 100 \\\\Rightarrow 25x = x^2 + 25x - 100 \\\\Rightarrow x^2 = 100 \\\\Rightarrow x = 10, -10$. The positive solution is $10$.",
    "id": 29
  },
  {
    "question": "How many solutions does the equation $7(x + 12) + 5x = 12(x + 7)$ have?",
    "options": [
      "Exactly one",
      "Exactly two",
      "Infinitely many",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "Simplify both sides: $7x + 84 + 5x = 12x + 84 \\\\Rightarrow 12x + 84 = 12x + 84$. Because both sides are identical, the equation has infinitely many solutions.",
    "id": 30
  },
  {
    "question": "The manager of a gym selected a sample of 142 members at random to estimate the percentage of the gym's members that would continue to pay for a membership if the price increased. From the survey, the manager estimates that $89\\\\%$ of the gym's members would continue to pay for a membership if the price increased, with an associated margin of error of $5.15\\\\%$. If the survey is repeated with a random sample of 284 members and the results are calculated in the same way, which of the following will be the most likely effect of using the larger random sample compared to the smaller random sample?",
    "options": [
      "The margin of error will be lower.",
      "The margin of error will be higher.",
      "The estimate of the percentage of the gym's members that would continue to pay for a membership if the price increased will be lower.",
      "The estimate of the percentage of the gym's members that would continue to pay for a membership if the price increased will be higher."
    ],
    "correctAnswer": 0,
    "explanation": "Increasing the sample size generally decreases the margin of error in an estimate. The new estimated percentage itself is not guaranteed to be higher or lower.",
    "id": 31
  },
  {
    "question": "The function $f$ is defined by $f(x) = -9x + 9$. What is the $y$-coordinate of the $y$-intercept of the graph of $y = f(x)$ in the $xy$-plane?",
    "options": [],
    "answerText": "9",
    "correctAnswer": "9",
    "isGridIn": true,
    "explanation": "The $y$-intercept is found evaluating $f(0)$. $f(0) = -9(0) + 9 = 9$.",
    "id": 32
  },
  {
    "question": "A histogram summarizes a data set of the weights, in pounds, of 14 salmon. If an additional weight of 68 pounds is added to the original data set to create a new data set of 15 weights of salmon, which of the following measures must be greater for the new data set than for the original data set? \\n I. The median \\n II. The mean",
    "options": [
      "I only",
      "II only",
      "I and II",
      "Neither I nor II"
    ],
    "correctAnswer": 1,
    "explanation": "Adding an outlier that is much larger than any current data value pulls the mean upward. However, the median may not change at all depending on the specific values in the middle bins. Thus, only the mean MUST be greater.",
    "id": 33
  },
  {
    "question": "A table shows three values of $x$ and their corresponding values of $y$, where there is a linear relationship between $x$ and $y$. \\n $x = -12 \\\\Rightarrow y = 44$ \\n $x = a \\\\Rightarrow y = 14$ \\n $x = 2 \\\\Rightarrow y = b$ \\n In the $xy$-plane, the $y$-intercept of the line representing this relationship is $(0, -16)$. What is the value of $a + b$?",
    "options": [
      "$-32$",
      "$-31$",
      "$-22$",
      "$-21$"
    ],
    "correctAnswer": 0,
    "explanation": "The line passes through $(-12, 44)$ and $(0, -16)$. The slope is $m = \\\\frac{-16 - 44}{0 - (-12)} = \\\\frac{-60}{12} = -5$. The equation is $y = -5x - 16$. Find $a$ when $y = 14$: $14 = -5a - 16 \\\\Rightarrow 5a = -30 \\\\Rightarrow a = -6$. Find $b$ when $x = 2$: $b = -5(2) - 16 = -26$. Evaluate $a + b = -6 - 26 = -32$.",
    "id": 34
  },
  {
    "question": "In the given equation, $k$ is a constant. How many distinct real solutions does the equation $(x + k)^2 + 37 = 37$ have?",
    "options": [
      "Zero",
      "Exactly one",
      "Exactly two",
      "Infinitely many"
    ],
    "correctAnswer": 1,
    "explanation": "Subtract 37 from both sides to get $(x + k)^2 = 0$. Taking the square root gives $x + k = 0 \\\\Rightarrow x = -k$. This is exactly one distinct real solution.",
    "id": 35
  },
  {
    "question": "For a certain circuit, its power $P$ in watts, current $C$ in amperes, voltage $V$ in volts, and resistance $R$ in ohms are related as $\\\\frac{CV^2}{P} = \\\\sqrt{PR}$, where $P, C, V,$ and $R$ are positive. When $R = 18$, which equation correctly expresses $P$ in terms of $C$ and $V$?",
    "options": [
      "$P = \\\\frac{CV^2}{\\\\sqrt{18P}}$",
      "$P = \\\\frac{CV^2}{\\\\sqrt{18}}$",
      "$P = \\\\sqrt[3]{\\\\frac{C^2V^4}{18}}$",
      "$P = \\\\frac{3}{18}\\\\sqrt[3]{C^2V^4}$"
    ],
    "correctAnswer": 2,
    "explanation": "Substitute $R = 18$ into the equation: $\\\\frac{CV^2}{P} = \\\\sqrt{18P}$. Square both sides: $\\\\frac{C^2V^4}{P^2} = 18P$. Multiply by $P^2$: $C^2V^4 = 18P^3$. Divide by 18: $P^3 = \\\\frac{C^2V^4}{18}$. Taking the cube root yields $P = \\\\sqrt[3]{\\\\frac{C^2V^4}{18}}$.",
    "id": 36
  },
  {
    "question": "For which of the following points $(x, y)$ are all the values solutions to the given system of inequalities? \\n \\\\begin{align*} y &< -5x - 21 \\\\\\\\ y &> 32x - 8 \\\\end{align*}",
    "options": [
      "$(-1, -25)$",
      "$(0, 0)$",
      "$(1, 1)$",
      "$(2, 2)$"
    ],
    "correctAnswer": 0,
    "explanation": "Test point $(-1, -25)$: $y = -25$. $-5(-1) - 21 = 5 - 21 = -16$. Since $-25 < -16$, the first inequality holds. $32(-1) - 8 = -32 - 8 = -40$. Since $-25 > -40$, the second inequality holds. This point is a solution.",
    "id": 37
  },
  {
    "question": "A circle is inscribed in a square such that the circumference of the circle touches the midpoint of each side of the square. The length of the diagonal of the square is $228$ units. What is the area, in square units, of the circle?",
    "options": [
      "$6,498\\\\pi$",
      "$12,996\\\\pi$",
      "$25,992\\\\pi$",
      "$51,984\\\\pi$"
    ],
    "correctAnswer": 0,
    "explanation": "Let $s$ be the side of the square. The diagonal is $s\\\\sqrt{2} = 228 \\\\Rightarrow s = \\\\frac{228}{\\\\sqrt{2}} = 114\\\\sqrt{2}$. The circle has a diameter equal to the side of the square, so $r = \\\\frac{s}{2} = 57\\\\sqrt{2}$. The area of the circle is $\\\\pi r^2 = \\\\pi(57\\\\sqrt{2})^2 = \\\\pi(3249 \\\\times 2) = 6498\\\\pi$.",
    "id": 38
  },
  {
    "question": "The expression $kx$ represents the result of decreasing a positive force, $x$, acting on an object by $0.34\\\\%$. What is the value of $k$?",
    "options": [],
    "answerText": "0.9966",
    "correctAnswer": "0.9966",
    "isGridIn": true,
    "explanation": "Decreasing a value by $0.34\\\\%$ is equivalent to multiplying it by $(1 - 0.0034) = 0.9966$. Therefore, $k = 0.9966$.",
    "id": 39
  },
  {
    "question": "A polygon has exactly $87$ sides. If the measure of each of the $87$ interior angles of this polygon is $(180p)^\\\\circ$, what is the value of $p$?",
    "options": [],
    "answerText": "85/87",
    "correctAnswer": "85/87",
    "isGridIn": true,
    "explanation": "The sum of interior angles of an $n$-sided polygon is $(n - 2) \\\\times 180^\\\\circ$. For $n = 87$, the sum is $85 \\\\times 180^\\\\circ$. Each angle is $\\\\frac{85 \\\\times 180^\\\\circ}{87}$. Since this equals $(180p)^\\\\circ$, we have $180p = 180 \\\\times \\\\frac{85}{87} \\\\Rightarrow p = \\\\frac{85}{87}$.",
    "id": 40
  },
  {
    "question": "The number of bacteria in a liquid medium doubles every hour. There are $66,000$ bacteria in the liquid medium at the start of an observation. Which of the following represents the number of bacteria, $y$, in the liquid medium $t$ hours after the start of the observation?",
    "options": [
      "$y = \\\\frac{1}{2}(66,000)^t$",
      "$y = 2(66,000)^t$",
      "$y = 66,000\\\\left(\\\\frac{1}{2}\\\\right)^t$",
      "$y = 66,000(2)^t$"
    ],
    "correctAnswer": 3,
    "explanation": "The initial amount is $66,000$, and the growth factor for doubling every hour is $2$. Thus, the exponential function is $y = 66,000(2)^t$.",
    "id": 41
  },
  {
    "question": "The function $f(n) = 7(20.44)^{\\\\frac{n}{4}}$ gives each term of a sequence as a function of the term's position, $n$, in the sequence, where $n$ is a whole number. The value of the term in position $14$ is $p\\\\%$ more than the value of the term in position $10$. What is the value of $p$?",
    "options": [
      "$20.44$",
      "$44$",
      "$1,944$",
      "$2,044$"
    ],
    "correctAnswer": 2,
    "explanation": "Calculate the ratio of the 14th term to the 10th term: $\\\\frac{f(14)}{f(10)} = \\\\frac{7(20.44)^{14/4}}{7(20.44)^{10/4}} = (20.44)^{14/4 - 10/4} = (20.44)^1 = 20.44$. Since $f(14) = 20.44 \\\\times f(10)$, it is $(20.44 - 1) \\\\times 100\\\\% = 19.44 \\\\times 100\\\\% = 1944\\\\%$ more. Therefore, $p = 1944$.",
    "id": 42,
    "svg": "<svg width=\"200\" height=\"100\" viewBox=\"0 0 200 100\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"10,90 190,90 190,10\" fill=\"none\" stroke=\"black\" stroke-width=\"2\" />\n  <polyline points=\"180,90 180,80 190,80\" fill=\"none\" stroke=\"black\" stroke-width=\"1\" />\n  <text x=\"5\" y=\"95\" font-size=\"14\">Q</text>\n  <text x=\"195\" y=\"95\" font-size=\"14\">R</text>\n  <text x=\"195\" y=\"10\" font-size=\"14\">S</text>\n  <text x=\"100\" y=\"105\" font-size=\"14\">17</text>\n</svg>"
  },
  {
    "question": "A right square pyramid has a total surface area of $28,160$ square inches, and the combined surface area of the four lateral faces of this pyramid is $16,060$ square inches. What is the height, in inches, of this pyramid?",
    "options": [
      "$48$",
      "$55$",
      "$73$",
      "$110$"
    ],
    "correctAnswer": 0,
    "explanation": "Total area = base area + lateral area $\\\\Rightarrow 28160 = \\\\text{base area} + 16060 \\\\Rightarrow \\\\text{base area} = 12100$. The square base side is $\\\\sqrt{12100} = 110$. Lateral area = half perimeter $\\\\times$ slant height $l = \\\\frac{1}{2}(440)l = 16060 \\\\Rightarrow 220l = 16060 \\\\Rightarrow l = 73$. The height $h$ is found by $h^2 + (110/2)^2 = l^2 \\\\Rightarrow h^2 + 55^2 = 73^2 \\\\Rightarrow h^2 + 3025 = 5329 \\\\Rightarrow h^2 = 2304 \\\\Rightarrow h = 48$.",
    "id": 43
  },
  {
    "question": "The expression $6x^4 + 17x^2 + 7$ can be rewritten as $(3x^2 + a)(2x^2 + b)$, where $a$ and $b$ are positive integers, or as $(3x^2 + c)(2x^2 + d)$, where $c$ and $d$ are positive nonintegers. What is the value of $a + c$?",
    "options": [],
    "answerText": "8.5",
    "correctAnswer": "8.5",
    "isGridIn": true,
    "explanation": "Let $y = x^2$. We factor $6y^2 + 17y + 7 = 6y^2 + 14y + 3y + 7 = 2y(3y + 7) + 1(3y + 7) = (3y + 7)(2y + 1)$. So with integers, $a = 7$ and $b = 1$. The non-integer factorization requires $3d + 2c = 17$ and $cd = 7 \\\\Rightarrow d = 7/c$. Substituting gives $21/c + 2c = 17 \\\\Rightarrow 2c^2 - 17c + 21 = 0 \\\\Rightarrow (2c - 3)(c - 7) = 0$. Since $c$ is a non-integer, $c = 1.5$ (and $d = 14/3$). Thus, $a + c = 7 + 1.5 = 8.5$.",
    "id": 44
  }
];
