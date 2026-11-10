const fs = require('fs');

const q = [
  {
    "question": "A table shows three values of $x$ and their corresponding values of $y$, where there is a linear relationship between $x$ and $y$. \\n $x = -12 \\\\Rightarrow y = 44$ \\n $x = a \\\\Rightarrow y = 14$ \\n $x = 2 \\\\Rightarrow y = b$ \\n In the $xy$-plane, the $y$-intercept of the line representing this relationship is $(0, -16)$. What is the value of $a + b$?",
    "options": ["$-32$", "$-31$", "$-22$", "$-21$"],
    "correctAnswer": 0,
    "explanation": "The line passes through $(-12, 44)$ and $(0, -16)$. The slope is $m = \\\\frac{-16 - 44}{0 - (-12)} = \\\\frac{-60}{12} = -5$. The equation is $y = -5x - 16$. Find $a$ when $y = 14$: $14 = -5a - 16 \\\\Rightarrow 5a = -30 \\\\Rightarrow a = -6$. Find $b$ when $x = 2$: $b = -5(2) - 16 = -26$. Evaluate $a + b = -6 - 26 = -32$."
  },
  {
    "question": "In the given equation, $k$ is a constant. How many distinct real solutions does the equation $(x + k)^2 + 37 = 37$ have?",
    "options": ["Zero", "Exactly one", "Exactly two", "Infinitely many"],
    "correctAnswer": 1,
    "explanation": "Subtract 37 from both sides to get $(x + k)^2 = 0$. Taking the square root gives $x + k = 0 \\\\Rightarrow x = -k$. This is exactly one distinct real solution."
  },
  {
    "question": "For a certain circuit, its power $P$ in watts, current $C$ in amperes, voltage $V$ in volts, and resistance $R$ in ohms are related as $\\\\frac{CV^2}{P} = \\\\sqrt{PR}$, where $P, C, V,$ and $R$ are positive. When $R = 18$, which equation correctly expresses $P$ in terms of $C$ and $V$?",
    "options": ["$P = \\\\frac{CV^2}{\\\\sqrt{18P}}$", "$P = \\\\frac{CV^2}{\\\\sqrt{18}}$", "$P = \\\\sqrt[3]{\\\\frac{C^2V^4}{18}}$", "$P = \\\\frac{3}{18}\\\\sqrt[3]{C^2V^4}$"],
    "correctAnswer": 2,
    "explanation": "Substitute $R = 18$ into the equation: $\\\\frac{CV^2}{P} = \\\\sqrt{18P}$. Square both sides: $\\\\frac{C^2V^4}{P^2} = 18P$. Multiply by $P^2$: $C^2V^4 = 18P^3$. Divide by 18: $P^3 = \\\\frac{C^2V^4}{18}$. Taking the cube root yields $P = \\\\sqrt[3]{\\\\frac{C^2V^4}{18}}$."
  },
  {
    "question": "For which of the following points $(x, y)$ are all the values solutions to the given system of inequalities? \\n \\\\begin{align*} y &< -5x - 21 \\\\\\\\ y &> 32x - 8 \\\\end{align*}",
    "options": ["$(-1, -25)$", "$(0, 0)$", "$(1, 1)$", "$(2, 2)$"],
    "correctAnswer": 0,
    "explanation": "Test point $(-1, -25)$: $y = -25$. $-5(-1) - 21 = 5 - 21 = -16$. Since $-25 < -16$, the first inequality holds. $32(-1) - 8 = -32 - 8 = -40$. Since $-25 > -40$, the second inequality holds. This point is a solution."
  },
  {
    "question": "A circle is inscribed in a square such that the circumference of the circle touches the midpoint of each side of the square. The length of the diagonal of the square is $228$ units. What is the area, in square units, of the circle?",
    "options": ["$6,498\\\\pi$", "$12,996\\\\pi$", "$25,992\\\\pi$", "$51,984\\\\pi$"],
    "correctAnswer": 0,
    "explanation": "Let $s$ be the side of the square. The diagonal is $s\\\\sqrt{2} = 228 \\\\Rightarrow s = \\\\frac{228}{\\\\sqrt{2}} = 114\\\\sqrt{2}$. The circle has a diameter equal to the side of the square, so $r = \\\\frac{s}{2} = 57\\\\sqrt{2}$. The area of the circle is $\\\\pi r^2 = \\\\pi(57\\\\sqrt{2})^2 = \\\\pi(3249 \\\\times 2) = 6498\\\\pi$."
  },
  {
    "question": "The expression $kx$ represents the result of decreasing a positive force, $x$, acting on an object by $0.34\\\\%$. What is the value of $k$?",
    "options": [],
    "answerText": "0.9966",
    "correctAnswer": "0.9966",
    "isGridIn": true,
    "explanation": "Decreasing a value by $0.34\\\\%$ is equivalent to multiplying it by $(1 - 0.0034) = 0.9966$. Therefore, $k = 0.9966$."
  },
  {
    "question": "A polygon has exactly $87$ sides. If the measure of each of the $87$ interior angles of this polygon is $(180p)^\\\\circ$, what is the value of $p$?",
    "options": [],
    "answerText": "85/87",
    "correctAnswer": "85/87",
    "isGridIn": true,
    "explanation": "The sum of interior angles of an $n$-sided polygon is $(n - 2) \\\\times 180^\\\\circ$. For $n = 87$, the sum is $85 \\\\times 180^\\\\circ$. Each angle is $\\\\frac{85 \\\\times 180^\\\\circ}{87}$. Since this equals $(180p)^\\\\circ$, we have $180p = 180 \\\\times \\\\frac{85}{87} \\\\Rightarrow p = \\\\frac{85}{87}$."
  },
  {
    "question": "The number of bacteria in a liquid medium doubles every hour. There are $66,000$ bacteria in the liquid medium at the start of an observation. Which of the following represents the number of bacteria, $y$, in the liquid medium $t$ hours after the start of the observation?",
    "options": ["$y = \\\\frac{1}{2}(66,000)^t$", "$y = 2(66,000)^t$", "$y = 66,000\\\\left(\\\\frac{1}{2}\\\\right)^t$", "$y = 66,000(2)^t$"],
    "correctAnswer": 3,
    "explanation": "The initial amount is $66,000$, and the growth factor for doubling every hour is $2$. Thus, the exponential function is $y = 66,000(2)^t$."
  },
  {
    "question": "The function $f(n) = 7(20.44)^{\\\\frac{n}{4}}$ gives each term of a sequence as a function of the term's position, $n$, in the sequence, where $n$ is a whole number. The value of the term in position $14$ is $p\\\\%$ more than the value of the term in position $10$. What is the value of $p$?",
    "options": ["$20.44$", "$44$", "$1,944$", "$2,044$"],
    "correctAnswer": 2,
    "explanation": "Calculate the ratio of the 14th term to the 10th term: $\\\\frac{f(14)}{f(10)} = \\\\frac{7(20.44)^{14/4}}{7(20.44)^{10/4}} = (20.44)^{14/4 - 10/4} = (20.44)^1 = 20.44$. Since $f(14) = 20.44 \\\\times f(10)$, it is $(20.44 - 1) \\\\times 100\\\\% = 19.44 \\\\times 100\\\\% = 1944\\\\%$ more. Therefore, $p = 1944$."
  },
  {
    "question": "A right square pyramid has a total surface area of $28,160$ square inches, and the combined surface area of the four lateral faces of this pyramid is $16,060$ square inches. What is the height, in inches, of this pyramid?",
    "options": ["$48$", "$55$", "$73$", "$110$"],
    "correctAnswer": 0,
    "explanation": "Total area = base area + lateral area $\\\\Rightarrow 28160 = \\\\text{base area} + 16060 \\\\Rightarrow \\\\text{base area} = 12100$. The square base side is $\\\\sqrt{12100} = 110$. Lateral area = half perimeter $\\\\times$ slant height $l = \\\\frac{1}{2}(440)l = 16060 \\\\Rightarrow 220l = 16060 \\\\Rightarrow l = 73$. The height $h$ is found by $h^2 + (110/2)^2 = l^2 \\\\Rightarrow h^2 + 55^2 = 73^2 \\\\Rightarrow h^2 + 3025 = 5329 \\\\Rightarrow h^2 = 2304 \\\\Rightarrow h = 48$."
  },
  {
    "question": "The expression $6x^4 + 17x^2 + 7$ can be rewritten as $(3x^2 + a)(2x^2 + b)$, where $a$ and $b$ are positive integers, or as $(3x^2 + c)(2x^2 + d)$, where $c$ and $d$ are positive nonintegers. What is the value of $a + c$?",
    "options": [],
    "answerText": "8.5",
    "correctAnswer": "8.5",
    "isGridIn": true,
    "explanation": "Let $y = x^2$. We factor $6y^2 + 17y + 7 = 6y^2 + 14y + 3y + 7 = 2y(3y + 7) + 1(3y + 7) = (3y + 7)(2y + 1)$. So with integers, $a = 7$ and $b = 1$. The non-integer factorization requires $3d + 2c = 17$ and $cd = 7 \\\\Rightarrow d = 7/c$. Substituting gives $21/c + 2c = 17 \\\\Rightarrow 2c^2 - 17c + 21 = 0 \\\\Rightarrow (2c - 3)(c - 7) = 0$. Since $c$ is a non-integer, $c = 1.5$ (and $d = 14/3$). Thus, $a + c = 7 + 1.5 = 8.5$."
  }
];

fs.writeFileSync('q4.json', JSON.stringify(q, null, 2));
console.log('q4.json created');
