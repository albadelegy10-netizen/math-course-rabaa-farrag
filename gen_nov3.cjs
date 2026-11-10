const fs = require('fs');

const q = [
  {
    "question": "The ratio of the base to the height of a triangle is 1 to 8. The base of the triangle is 104 centimeters. What is the height, in centimeters, of the triangle?",
    "options": ["$13$", "$52$", "$104$", "$832$"],
    "correctAnswer": 3,
    "explanation": "Let $b$ be the base and $h$ be the height. We have $\\\\frac{b}{h} = \\\\frac{1}{8}$. Given $b = 104$, we substitute to get $\\\\frac{104}{h} = \\\\frac{1}{8}$. Solving for $h$ yields $h = 104 \\\\times 8 = 832$."
  },
  {
    "question": "Which table gives three values of $x$ and their corresponding values of $q(x)$ for the function $q(x) = 15(3)^x$?",
    "options": ["$x = -1, 0, 1 \\\\Rightarrow q(x) = -45, 0, 45$", "$x = -1, 0, 1 \\\\Rightarrow q(x) = 1/3, 3, 45$", "$x = -1, 0, 1 \\\\Rightarrow q(x) = 1/5, 15, 45$", "$x = -1, 0, 1 \\\\Rightarrow q(x) = 5, 15, 45$"],
    "correctAnswer": 3,
    "explanation": "Substitute $x = -1, 0, 1$ into $q(x) = 15(3)^x$. For $x = -1$, $q(-1) = 15(3)^{-1} = 15/3 = 5$. For $x = 0$, $q(0) = 15(3)^0 = 15(1) = 15$. For $x = 1$, $q(1) = 15(3)^1 = 45$."
  },
  {
    "question": "A plant nursery classifies a perennial flower species as tall if its typical height when fully grown is more than 100 centimeters. Each of the following inequalities represents the possible heights $h$, in centimeters, for a specific perennial flower species when fully grown. Which inequality represents the possible heights $h$, in centimeters, for a tall perennial flower species?",
    "options": ["$14 < h < 95$", "$41 < h < 93$", "$78 < h < 100$", "$107 < h < 160$"],
    "correctAnswer": 3,
    "explanation": "A tall perennial species must have a typical fully grown height strictly greater than $100$ cm. The only interval where all possible heights $h$ are greater than $100$ is $107 < h < 160$."
  },
  {
    "question": "A linear function $f$ gives a company's profit, in dollars, for selling $x$ items. The company's profit is $\\\\$170$ when it sells $4$ items, and its profit is $\\\\$590$ when it sells $10$ items. Which equation defines $f$?",
    "options": ["$f(x) = 170x - 590$", "$f(x) = 59x$", "$f(x) = 70x - 10x$", "$f(x) = 70x - 110$"],
    "correctAnswer": 3,
    "explanation": "The linear function passes through the points $(4, 170)$ and $(10, 590)$. The slope is $\\\\frac{590 - 170}{10 - 4} = \\\\frac{420}{6} = 70$. Using the point-slope form with $(4, 170)$: $y - 170 = 70(x - 4) \\\\Rightarrow y = 70x - 280 + 170 \\\\Rightarrow y = 70x - 110$. Hence, $f(x) = 70x - 110$."
  },
  {
    "question": "Each year, the value of an investment increases by $0.69\\\\%$ of its value the previous year. Which of the following functions best models how the value of the investment changes over time?",
    "options": ["Decreasing exponential", "Decreasing linear", "Increasing exponential", "Increasing linear"],
    "correctAnswer": 2,
    "explanation": "Because the value increases by a constant percentage ($0.69\\\\%$) relative to its preceding value each year, the change is modeled by an increasing exponential function."
  },
  {
    "question": "Line $p$ in the $xy$-plane is defined by $y = x + \\\\frac{8}{3}$ and passes through the points $(a, 0)$ and $(0, b)$, where $a$ and $b$ are constants. What is the value of $a$?",
    "options": [],
    "answerText": "-8/3",
    "correctAnswer": "-8/3",
    "isGridIn": true,
    "explanation": "Substitute the point $(a, 0)$ into the equation: $0 = a + \\\\frac{8}{3} \\\\Rightarrow a = -\\\\frac{8}{3}$."
  },
  {
    "question": "$\\\\frac{25x}{x^2 - 25} = \\\\frac{x}{x - 5} + \\\\frac{20}{x + 5}$ \\n What is the positive solution to the given equation?",
    "options": [],
    "answerText": "10",
    "correctAnswer": "10",
    "isGridIn": true,
    "explanation": "Multiply both sides by $(x-5)(x+5) = x^2-25$ to get: $25x = x(x+5) + 20(x-5) \\\\Rightarrow 25x = x^2 + 5x + 20x - 100 \\\\Rightarrow 25x = x^2 + 25x - 100 \\\\Rightarrow x^2 = 100 \\\\Rightarrow x = 10, -10$. The positive solution is $10$."
  },
  {
    "question": "How many solutions does the equation $7(x + 12) + 5x = 12(x + 7)$ have?",
    "options": ["Exactly one", "Exactly two", "Infinitely many", "Zero"],
    "correctAnswer": 2,
    "explanation": "Simplify both sides: $7x + 84 + 5x = 12x + 84 \\\\Rightarrow 12x + 84 = 12x + 84$. Because both sides are identical, the equation has infinitely many solutions."
  },
  {
    "question": "The manager of a gym selected a sample of 142 members at random to estimate the percentage of the gym's members that would continue to pay for a membership if the price increased. From the survey, the manager estimates that $89\\\\%$ of the gym's members would continue to pay for a membership if the price increased, with an associated margin of error of $5.15\\\\%$. If the survey is repeated with a random sample of 284 members and the results are calculated in the same way, which of the following will be the most likely effect of using the larger random sample compared to the smaller random sample?",
    "options": ["The margin of error will be lower.", "The margin of error will be higher.", "The estimate of the percentage of the gym's members that would continue to pay for a membership if the price increased will be lower.", "The estimate of the percentage of the gym's members that would continue to pay for a membership if the price increased will be higher."],
    "correctAnswer": 0,
    "explanation": "Increasing the sample size generally decreases the margin of error in an estimate. The new estimated percentage itself is not guaranteed to be higher or lower."
  },
  {
    "question": "The function $f$ is defined by $f(x) = -9x + 9$. What is the $y$-coordinate of the $y$-intercept of the graph of $y = f(x)$ in the $xy$-plane?",
    "options": [],
    "answerText": "9",
    "correctAnswer": "9",
    "isGridIn": true,
    "explanation": "The $y$-intercept is found evaluating $f(0)$. $f(0) = -9(0) + 9 = 9$."
  },
  {
    "question": "A histogram summarizes a data set of the weights, in pounds, of 14 salmon. If an additional weight of 68 pounds is added to the original data set to create a new data set of 15 weights of salmon, which of the following measures must be greater for the new data set than for the original data set? \\n I. The median \\n II. The mean",
    "options": ["I only", "II only", "I and II", "Neither I nor II"],
    "correctAnswer": 1,
    "explanation": "Adding an outlier that is much larger than any current data value pulls the mean upward. However, the median may not change at all depending on the specific values in the middle bins. Thus, only the mean MUST be greater."
  }
];

fs.writeFileSync('q3.json', JSON.stringify(q, null, 2));
console.log('q3.json created');
