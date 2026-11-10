const fs = require('fs');

const q = [
  {
    "question": "In the $xy$-plane, the graph of the equation $x^2 - 16x + y^2 - 10y - 55 = 0$ is a circle. If this circle is inscribed in a square, what is the perimeter of the square?",
    "options": ["$24$", "$48$", "$96$", "$220$"],
    "correctAnswer": 2,
    "explanation": "Rewrite the equation by completing the square: $(x^2 - 16x + 64) + (y^2 - 10y + 25) = 55 + 64 + 25 \\\\Rightarrow (x - 8)^2 + (y - 5)^2 = 144$. The radius of the circle is $r = \\\\sqrt{144} = 12$. The side length of the circumscribed square is equal to the diameter, $2r = 24$. The perimeter of the square is $4 \\\\times 24 = 96$."
  },
  {
    "question": "If $5(3x + 6) = 3(3x + 6) + 78$, what is the value of $3x + 6$?",
    "options": ["$78$", "$39$", "$33$", "$11$"],
    "correctAnswer": 1,
    "explanation": "Let $u = 3x + 6$. The equation becomes $5u = 3u + 78 \\\\Rightarrow 2u = 78 \\\\Rightarrow u = 39$. Thus, $3x + 6 = 39$."
  },
  {
    "question": "If $f(x) = x + 5$ and $g(x) = 5x$, what is the value of $7f(4) - g(4)$?",
    "options": ["$-11$", "$13$", "$35$", "$43$"],
    "correctAnswer": 3,
    "explanation": "Evaluate $f(4)$ and $g(4)$: $f(4) = 4 + 5 = 9$, and $g(4) = 5(4) = 20$. Then, $7f(4) - g(4) = 7(9) - 20 = 63 - 20 = 43$."
  },
  {
    "question": "$C(t) = 240 \\\\left(\\\\frac{53}{52}\\\\right)^{t-15} + 7$ \\n The function $C$ gives the estimated number of cephalopods, a class of marine animal, in a certain area, where $t$ is the number of months since a study began. How many months after the study began was the number of cephalopods in the area estimated to be $247$?",
    "options": [],
    "answerText": "15",
    "correctAnswer": "15",
    "isGridIn": true,
    "explanation": "Set $C(t)$ to $247$ and solve for $t$: $240 \\\\left(\\\\frac{53}{52}\\\\right)^{t-15} + 7 = 247 \\\\Rightarrow 240 \\\\left(\\\\frac{53}{52}\\\\right)^{t-15} = 240 \\\\Rightarrow \\\\left(\\\\frac{53}{52}\\\\right)^{t-15} = 1$. This implies the exponent must be $0$, so $t - 15 = 0 \\\\Rightarrow t = 15$."
  },
  {
    "question": "An object moves at a speed of $\\\\frac{3}{17}$ feet per second. What is this speed in yards per second? ($3\\\\text{ feet} = 1\\\\text{ yard}$)",
    "options": [],
    "answerText": "1/17",
    "correctAnswer": "1/17",
    "isGridIn": true,
    "explanation": "Convert feet per second to yards per second by multiplying by $(1\\\\text{ yard} / 3\\\\text{ feet})$: $\\\\frac{3}{17} \\\\times \\\\frac{1}{3} = \\\\frac{1}{17}$ yards per second."
  },
  {
    "question": "For the linear function $g$, a table shows four values of $x$ and their corresponding values of $g(x)$. The function can be written as $g(x) = mx + b$, where $m$ and $b$ are constants. \n $x = 1 \\\\Rightarrow g(x) = 34$ \n $x = 2 \\\\Rightarrow g(x) = 31$ \n $x = 3 \\\\Rightarrow g(x) = 28$ \n $x = 4 \\\\Rightarrow g(x) = 25$ \n What is the value of $b$?",
    "options": [],
    "answerText": "37",
    "correctAnswer": "37",
    "isGridIn": true,
    "explanation": "The slope $m$ is the change in $g(x)$ over the change in $x$: $m = \\\\frac{(31 - 34)}{(2 - 1)} = -3$. Using point-slope form with $(1, 34)$: $g(x) - 34 = -3(x - 1) \\\\Rightarrow g(x) = -3x + 3 + 34 = -3x + 37$. Therefore, $b = 37$."
  },
  {
    "question": "The current value of a house is $\\\\$174,000$, and this value increases by $2.4\\\\%$ each year from the value of the previous year. Which function $f$ gives the value, in dollars, of the house $x$ years from now?",
    "options": ["$f(x) = 174,000(0.024)^x$", "$f(x) = 174,000(0.24)^x$", "$f(x) = 174,000(1.024)^x$", "$f(x) = 174,000(1.24)^x$"],
    "correctAnswer": 2,
    "explanation": "An increase of $2.4\\\\%$ corresponds to a multiplier of $1 + 0.024 = 1.024$. The function representing exponential growth is $174,000(1.024)^x$."
  },
  {
    "question": "What is the value of $\\\\sin 18\\\\pi$?",
    "options": ["$0$", "$\\\\frac{1}{2}$", "$\\\\frac{\\\\sqrt{2}}{2}$", "$1$"],
    "correctAnswer": 0,
    "explanation": "The sine of any integer multiple of $\\\\pi$ is $0$. Thus, $\\\\sin 18\\\\pi = 0$."
  },
  {
    "question": "In triangle $QRS$ shown, angle $R$ is a right angle and $SR$ has a length of $17$. Which expression represents the length of $QS$?",
    "options": ["$17 \\\\cos Q$", "$17 \\\\sin Q$", "$\\\\frac{17}{\\\\cos Q}$", "$\\\\frac{17}{\\\\sin Q}$"],
    "correctAnswer": 3,
    "explanation": "In right triangle $QRS$, the sine of angle $Q$ is the ratio of the opposite side ($SR$) to the hypotenuse ($QS$). Therefore, $\\\\sin Q = \\\\frac{17}{QS}$, which gives $QS = \\\\frac{17}{\\\\sin Q}$."
  },
  {
    "question": "One of the equations in a system of two linear equations is given by $\\\\frac{1}{9}x - \\\\frac{3r}{7}y = 34$, where $r$ is a nonzero constant. The system has no solution. If the other equation in the system is graphed in the $xy$-plane, what is the slope of the graph?",
    "options": ["$\\\\frac{27r}{7}$", "$\\\\frac{27}{7r}$", "$\\\\frac{7r}{27}$", "$\\\\frac{7}{27r}$"],
    "correctAnswer": 3,
    "explanation": "For a system of linear equations to have no solution, the lines must be parallel, meaning they have the same slope. Rewrite the first equation in slope-intercept form: $\\\\frac{3r}{7}y = \\\\frac{1}{9}x - 34 \\\\Rightarrow y = \\\\frac{7}{3r}\\\\left(\\\\frac{1}{9}x - 34\\\\right) = \\\\frac{7}{27r}x - \\\\frac{238}{3r}$. Thus, the slope is $\\\\frac{7}{27r}$."
  },
  {
    "question": "A machine makes $8$-inch, $9$-inch, and $3$-inch parts. During a certain day, the number of $8$-inch parts that the machine makes is $4$ times the number $n$ of $9$-inch parts, and the number of $3$-inch parts is $30$. During this day, the machine makes $100$ parts total. Which equation represents this situation?",
    "options": ["$8(4n) + 9n + 3(30) = 100$", "$8n + 9n + 3n = 100$", "$4n + 30 = 100$", "$5n + 30 = 100$"],
    "correctAnswer": 3,
    "explanation": "The number of $9$-inch parts is $n$. The number of $8$-inch parts is $4n$. The number of $3$-inch parts is $30$. The total number of parts is $n + 4n + 30 = 5n + 30$. Because the total is $100$, the equation is $5n + 30 = 100$."
  }
];

fs.writeFileSync('q2.json', JSON.stringify(q, null, 2));
console.log('q2.json created');
