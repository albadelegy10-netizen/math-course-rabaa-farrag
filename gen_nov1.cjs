const fs = require('fs');

const q = [
  {
    "question": "The graph of the function $f$ is shown, where $y = f(x)$. What is the value of $f(0)$?",
    "options": ["$-6$", "$-4$", "$-3$", "$0$"],
    "correctAnswer": 2,
    "explanation": "The graph intersects the $y$-axis at the point $(0, -3)$. Therefore, the value of $f(0)$ is $-3$."
  },
  {
    "question": "In the figure, two lines intersect at a point. If $r = 61$, what is the value of $s$?",
    "options": [],
    "answerText": "61",
    "correctAnswer": "61",
    "isGridIn": true,
    "explanation": "Vertical angles are equal. Since angles $r$ and $s$ are vertical angles, $s = r = 61$."
  },
  {
    "question": "The function $f$ is defined by $f(x) = 5x^2$. What is the value of $f(7)$?",
    "options": ["$35$", "$45$", "$70$", "$245$"],
    "correctAnswer": 3,
    "explanation": "Substitute $x = 7$ into the function: $f(7) = 5(7)^2 = 5(49) = 245$."
  },
  {
    "question": "\\\\begin{align*} x + 5y &= 5 \\\\\\\\ x - 5y &= 7 \\\\end{align*} \\n The solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    "options": ["$1.2$", "$5$", "$6$", "$12$"],
    "correctAnswer": 2,
    "explanation": "Add the two equations together: $(x + 5y) + (x - 5y) = 5 + 7 \\\\Rightarrow 2x = 12 \\\\Rightarrow x = 6$."
  },
  {
    "question": "Which expression is equivalent to $6x(x + 3)$?",
    "options": ["$6x^2 + 3$", "$6x^2 + 18x$", "$7x^2 + 3$", "$7x^2 + 9x$"],
    "correctAnswer": 1,
    "explanation": "Distribute the $6x$: $6x(x) + 6x(3) = 6x^2 + 18x$."
  },
  {
    "question": "The function $f$ is defined by $f(x) = 3x^5$. In the $xy$-plane, the graph of $y = g(x)$ is the result of shifting the graph of $y = f(x)$ up $9$ units. Which equation defines the function $g$?",
    "options": ["$g(x) = 3x^5 + 9$", "$g(x) = 3x^5 - 9$", "$g(x) = 3x^{45}$", "$g(x) = 27x^5$"],
    "correctAnswer": 0,
    "explanation": "Shifting a graph up by $9$ units adds $9$ to the function. So, $g(x) = f(x) + 9 = 3x^5 + 9$."
  },
  {
    "question": "For the linear function $f$, the graph of $y = f(x)$ in the $xy$-plane has a slope of $69$ and $f(0) = 3$. Which equation defines $f$?",
    "options": ["$f(x) = 3x$", "$f(x) = 3x + 3$", "$f(x) = 69x$", "$f(x) = 69x + 3$"],
    "correctAnswer": 3,
    "explanation": "The equation of a line is $f(x) = mx + b$, where $m$ is the slope and $b$ is the $y$-intercept. The $y$-intercept is given by $f(0) = 3$. Thus, $f(x) = 69x + 3$."
  },
  {
    "question": "$5\\\\%$ of $w$ is $741.41$. What is the value of $w$?",
    "options": ["$778.481$", "$3,707.05$", "$14,828.2$", "$70,433.95$"],
    "correctAnswer": 2,
    "explanation": "We have $0.05w = 741.41$. Dividing both sides by $0.05$ gives $w = 14828.2$."
  },
  {
    "question": "The graph of a system of a linear and a quadratic equation is shown. What system is represented by the graph?",
    "options": ["$y = \\\\frac{7}{16}x^2$, $y = \\\\frac{7}{4}x$", "$y = -\\\\frac{7}{16}x^2$, $y = \\\\frac{7}{4}x$", "$y = \\\\frac{7}{16}x^2$, $y = -\\\\frac{7}{4}x$", "$y = -\\\\frac{7}{16}x^2$, $y = -\\\\frac{7}{4}x$"],
    "correctAnswer": 0,
    "explanation": "The parabola opens upwards, so the leading coefficient is positive. It passes through $(0,0)$ and $(4,7)$, so $7 = a(4)^2 \\\\Rightarrow a = 7/16$. The line passes through $(0,0)$ and intersects the parabola at $(4,7)$, so its slope is $7/4$, and the equation is $y = \\\\frac{7}{4}x$."
  },
  {
    "question": "$W(x) = 4x + 80$ \\n The function $W$ gives the total time, in minutes, it takes for a gardener to water $x$ plants and mow the grass. According to the function, how many minutes does it take the gardener to mow the grass?",
    "options": [],
    "answerText": "80",
    "correctAnswer": "80",
    "isGridIn": true,
    "explanation": "The constant term represents the time taken to mow the grass, which is independent of the number of plants $x$. So, it takes $80$ minutes."
  },
  {
    "question": "\\\\begin{align*} 19 &= x + y \\\\\\\\ x - y &= 9 \\\\end{align*} \\n The solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    "options": ["$9$", "$10$", "$14$", "$19$"],
    "correctAnswer": 2,
    "explanation": "Add the two equations: $(x + y) + (x - y) = 19 + 9 \\\\Rightarrow 2x = 28 \\\\Rightarrow x = 14$."
  }
];

fs.writeFileSync('q1.json', JSON.stringify(q, null, 2));
console.log('q1.json created');
