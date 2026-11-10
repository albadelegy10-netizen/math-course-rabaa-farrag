import { Question } from '../../types';

export const SAT_MARCH_2025_FORM_E_SET: Question[] = [
  {
    "question": "The cost $y$, in dollars, for a manufacturer to make $x$ rings is represented by the line shown.\\n\\nWhat is the cost, in dollars, for the manufacturer to make $50$ rings?",
    "options": [
      "$100$",
      "$125$",
      "$175$",
      "$225$"
    ],
    "correctAnswer": 3,
    "explanation": "The $y$-intercept is $100$ and it passes through $(40, 200)$. The slope is $\\\\frac{200 - 100}{40} = 2.5$. The cost equation is $y = 2.5x + 100$. For $50$ rings, $y = 2.5(50) + 100 = 225$.",
    "id": 1
  },
  {
    "question": "Which expression is equivalent to $7(x^2 + 5)$?",
    "options": [
      "$7x^2 + 35$",
      "$7x^2 + 12$",
      "$7x^2 + 5$",
      "$7x^2 + 2$"
    ],
    "correctAnswer": 0,
    "explanation": "Distribute the $7$: $7(x^2) + 7(5) = 7x^2 + 35$.",
    "id": 2
  },
  {
    "question": "What is the $y$-intercept of the graph shown? (The graph is a parabola opening upwards and crossing the $y$-axis at $1$.)",
    "options": [
      "$(-5, 0)$",
      "$(-1, 0)$",
      "$(0, 1)$",
      "$(0, 5)$"
    ],
    "correctAnswer": 2,
    "explanation": "The graph crosses the $y$-axis at the point $(0, 1)$.",
    "id": 3
  },
  {
    "question": "The function $f$ is defined by $f(x) = 8(2x + 2)$. For what value of $x$ does $f(x) = 80$?",
    "options": [
      "$4$",
      "$6$",
      "$10$",
      "$39$"
    ],
    "correctAnswer": 0,
    "explanation": "$8(2x + 2) = 80 \\\\implies 2x + 2 = 10 \\\\implies 2x = 8 \\\\implies x = 4$.",
    "id": 4
  },
  {
    "question": "$n = \\\\frac{p}{23u}$ \\n\\nThe given equation relates the positive numbers $n$, $p$, and $u$. Which equation correctly expresses $p$ in terms of $n$ and $u$?",
    "options": [
      "$p = n - 23u$",
      "$p = n + 23u$",
      "$p = \\\\frac{n}{23u}$",
      "$p = 23un$"
    ],
    "correctAnswer": 3,
    "explanation": "Multiply both sides by $23u$ to isolate $p$: $p = 23un$.",
    "id": 5
  },
  {
    "question": "A line segment that has a length of $125$ centimeters (cm) is divided into three parts. One part is $49\\\\text{ cm}$ long. The other two parts have lengths that are equal to each other. What is the length, in cm, of one of the other two parts of equal length?",
    "options": [],
    "answerText": "38",
    "correctAnswer": "38",
    "isGridIn": true,
    "explanation": "Remaining length is $125 - 49 = 76$. Since the two parts are equal, $76 / 2 = 38$.",
    "id": 6
  },
  {
    "question": "Circle $N$ has a radius of $9$ millimeters (mm). Circle $M$ has an area of $25\\\\pi\\\\text{ mm}^2$. What is the total area, in $\\\\text{mm}^2$, of circles $N$ and $M$?",
    "options": [
      "$106\\\\pi$",
      "$61\\\\pi$",
      "$43\\\\pi$",
      "$14\\\\pi$"
    ],
    "correctAnswer": 0,
    "explanation": "The area of circle $N$ is $\\\\pi r^2 = \\\\pi (9)^2 = 81\\\\pi$. Total area = $81\\\\pi + 25\\\\pi = 106\\\\pi$.",
    "id": 7
  },
  {
    "question": "The list gives the mass, in grams, of $5$ ruffed lemurs.\\n\\n$3,710; 3,710; 3,130; 3,750; 3,150$\\n\\nWhat is the mean mass, in grams, of these $5$ ruffed lemurs?",
    "options": [],
    "answerText": "3490",
    "correctAnswer": "3490",
    "isGridIn": true,
    "explanation": "The sum of the masses is $17,450$. The mean is $17,450 / 5 = 3,490$.",
    "id": 8
  },
  {
    "question": "$2x(x - 3)(x + 5) = 0$\\n\\nWhat is one of the solutions to the given equation?",
    "options": [
      "$-3$",
      "$0$",
      "$2$",
      "$5$"
    ],
    "correctAnswer": 1,
    "explanation": "The sequence of factors gives solutions $x = 0$, $x = 3$, and $x = -5$. Among the choices, $0$ is the only correct solution.",
    "id": 9
  },
  {
    "question": "In the figure shown, triangle $CAE$ is similar to triangle $CBD$. The measure of angle $CBD$ is $56^\\\\circ$, and $AE = 22(BD)$. What is the measure of angle $CAE$?",
    "options": [
      "$22^\\\\circ$",
      "$56^\\\\circ$",
      "$(22+56)^\\\\circ$",
      "$(22 \\\\times 56)^\\\\circ$"
    ],
    "correctAnswer": 1,
    "explanation": "In similar triangles, corresponding angles are equal. Therefore, the measure of angle $CAE$ is equal to angle $CBD$, which is $56^\\\\circ$.",
    "id": 10
  },
  {
    "question": "A clothing store buys shirts at a wholesale price of $\\\\$6.00$ each and resells them each at a retail price that is $310\\\\%$ of the wholesale price. At the end of the season, any remaining shirts are marked at a discounted price that is $75\\\\%$ of the retail price. What is the discounted price of each remaining shirt, in dollars?",
    "options": [],
    "answerText": "13.95",
    "correctAnswer": "13.95",
    "isGridIn": true,
    "explanation": "Retail price = $\\\\$6.00 \\\\times 3.10 = \\\\$18.60$. Discounted price = $\\\\$18.60 \\\\times 0.75 = \\\\$13.95$.",
    "id": 11
  },
  {
    "question": "For the given linear function $f$, $f(x) = 47$. Which table gives three values of $x$ and their corresponding values of $f(x)$?",
    "options": [
      "Table where $f(x) = 0$ for all $x$",
      "Table where $f(x) = 47$ for all $x$",
      "Table where $f(x) = x + 47$",
      "Table where $f(x) = 47x$"
    ],
    "correctAnswer": 1,
    "explanation": "Since $f(x) = 47$ for all $x$, the correct table must have $47$ in every row under $f(x)$.",
    "id": 12
  },
  {
    "question": "A sample of a certain isotope takes $29$ years to decay to half its original mass. The function $s(t) = 136(0.5)^{\\\\frac{t}{29}}$ gives the approximate mass of this isotope, in grams, that remains $t$ years after a $136$ gram sample starts to decay. Which statement is the best interpretation of $s(58) = 34$ in this context?",
    "options": [
      "Approximately $34\\\\text{ grams}$ of the sample remains $58\\\\text{ years}$ after the sample starts to decay.",
      "The mass of the sample has decreased by approximately $34\\\\text{ grams}$ $58\\\\text{ years}$ after the sample starts to decay.",
      "The mass of the sample has decreased by approximately $58\\\\text{ grams}$ $34\\\\text{ years}$ after the sample starts to decay.",
      "Approximately $58\\\\text{ grams}$ of the sample remains $34\\\\text{ years}$ after the sample starts to decay."
    ],
    "correctAnswer": 0,
    "explanation": "The equation evaluates the remaining mass after time $t$. Therefore, $s(58) = 34$ means that $34\\\\text{ grams}$ remain after $58\\\\text{ years}$.",
    "id": 13
  },
  {
    "question": "Antonia has $\\\\$130$ in an account. Each year she expects to have $2.5\\\\%$ more money in the account than she had the previous year. Which of the following models best describes how Antonia expects the money in her account to change over time?",
    "options": [
      "Decreasing exponential",
      "Decreasing linear",
      "Increasing exponential",
      "Increasing linear"
    ],
    "correctAnswer": 2,
    "explanation": "A constant percentage growth implies exponential growth. Since it is more money, it is increasing.",
    "id": 14
  },
  {
    "question": "In the $xy$-plane, which of the following does NOT contain any points that are part of the solution set to $2x - 6y > 12$?",
    "options": [
      "The region where $x < 0$ and $y > 0$",
      "The region where $x < 0$ and $y < 0$",
      "The region where $x > 0$ and $y > 0$",
      "The $x$-axis"
    ],
    "correctAnswer": 0,
    "explanation": "If $x < 0$ and $y > 0$, then $2x$ is negative and $-6y$ is negative, so their sum must be negative, which cannot be greater than $12$.",
    "id": 15
  },
  {
    "question": "A circle in the $xy$-plane has its center at $(18, 16)$ and has a radius of $6k$. Which equation represents this circle?",
    "options": [
      "$(x - 18)^2 + (y - 16)^2 = 36k$",
      "$(x - 18)^2 + (y - 16)^2 = 36k^2$",
      "$(x - 18)^2 + (y - 16)^2 = 6k$",
      "$(x - 18)^2 + (y - 16)^2 = 6k^2$"
    ],
    "correctAnswer": 1,
    "explanation": "The standard circle equation is $(x - h)^2 + (y - k)^2 = r^2$. Thus, $r^2 = (6k)^2 = 36k^2$.",
    "id": 16
  },
  {
    "question": "$x^2 - 24x - 8 = 0$\\n\\nWhat is the sum of the solutions to the given equation?",
    "options": [
      "$0$",
      "$4$",
      "$8$",
      "$24$"
    ],
    "correctAnswer": 3,
    "explanation": "The sum of the solutions of a quadratic equation $ax^2 + bx + c = 0$ is $-\\\\frac{b}{a}$. Here, $-\\\\frac{-24}{1} = 24$.",
    "id": 17
  },
  {
    "question": "According to a US law, ramps for use by the general public must form an angle with level ground such that $\\\\tan \\\\Theta \\\\le \\\\frac{1}{12}$. If the ramp in the figure conforms to this law and has a height of $22.7$ inches, what is the least possible value of $x$, in inches?",
    "options": [],
    "answerText": "272.4",
    "correctAnswer": "272.4",
    "isGridIn": true,
    "explanation": "$\\\\tan \\\\Theta = \\\\frac{22.7}{x} \\\\le \\\\frac{1}{12} \\\\implies x \\\\ge 22.7 \\\\times 12 = 272.4$.",
    "id": 18
  },
  {
    "question": "In the figure, two lines intersect at a point. If $w = 112^\\\\circ$, what is the value of $x^\\\\circ$?",
    "options": [
      "$12$",
      "$56$",
      "$68$",
      "$112$"
    ],
    "correctAnswer": 2,
    "explanation": "Since the angles form a linear pair (supplementary angles), $x = 180 - w = 180 - 112 = 68$.",
    "id": 19
  },
  {
    "question": "If $3(2 - 7x) + 5(2 - 7x) + 6 = 7(2 - 7x) + 2$, what is the value of $7x - 2$?",
    "options": [],
    "answerText": "4",
    "correctAnswer": "4",
    "isGridIn": true,
    "explanation": "Let $z = 2 - 7x$. The equation is $3z + 5z + 6 = 7z + 2 \\\\implies 8z + 6 = 7z + 2 \\\\implies z = -4$. Therefore, $7x - 2 = -z = 4$.",
    "id": 20
  },
  {
    "question": "In the $xy$-plane, line $k$ and line $l$ are perpendicular and intersect at the point $(2, 9)$. If line $k$ is defined by the equation $y = mx + b$, where $m$ and $b$ are constants and $m > 1$, which of the following points lies on line $l$?",
    "options": [
      "$\\\\left(3, 9 - \\\\frac{1}{m}\\\\right)$",
      "$\\\\left(3, 9 + \\\\frac{1}{m}\\\\right)$",
      "$(3, 9 - m)$",
      "$(3, 9 + m)$"
    ],
    "correctAnswer": 0,
    "explanation": "Line $l$ has a slope of $-\\\\frac{1}{m}$ and passes through $(2, 9)$. Its equation is $y - 9 = -\\\\frac{1}{m}(x - 2)$. For $x = 3$, $y = 9 - \\\\frac{1}{m}(1) = 9 - \\\\frac{1}{m}$.",
    "id": 21
  },
  {
    "question": "A sphere has a volume of $245.00$ cubic yards. What is the volume of the sphere, in cubic meters? (Use $1\\\\text{ yard} = 0.914\\\\text{ meter}$.)",
    "options": [],
    "answerText": "187",
    "correctAnswer": "187",
    "isGridIn": true,
    "explanation": "To convert cubic yards to cubic meters, we multiply by $(0.914)^3 \\\\approx 0.763559$. $245 \\\\times 0.763559 \\\\approx 187$.",
    "id": 22
  },
  {
    "question": "In one week in 2017, a technician earned a total of $\\\\$900$ by working at her regular job and at a second job doing part-time work. The equation $21h + 10c = 900$ represents this situation, where $h$ is the number of hours worked at her regular job and $c$ is the number of hours worked at her second job. Which of the following is the best interpretation of $21$ in this context?",
    "options": [
      "The amount, in dollars, the technician earned for each hour she worked at her regular job",
      "The amount, in dollars, the technician earned for each hour she worked at her second job",
      "The number of hours the technician worked in one week at her regular job",
      "The number of hours the technician worked in one week at her second job"
    ],
    "correctAnswer": 0,
    "explanation": "In $21h + 10c = 900$, $21$ is multiplied by $h$ (the hours worked at the regular job). Thus, it represents her hourly wage ($\\$21$/hour) for her regular job.",
    "id": 23
  },
  {
    "question": "The scatterplot shows the relationship between two variables, $x$ and $y$. A line of best fit is also shown. (The line goes down passing through $(-15.4, 0)$ and has a slope of negative $1$.)\\n\\nWhich of the following equations best represents the line of best fit shown?",
    "options": [
      "$y = x - 15.4$",
      "$y = -x + 15.4$",
      "$y = x - 1.5$",
      "$y = -x - 15.4$"
    ],
    "correctAnswer": 3,
    "explanation": "The line crosses at about $-15.4$ for the $x$-intercept and has a negative slope of $-1$. Setting $y=0$ in $y = -x - 15.4$ gives $x = -15.4$, matching the graph.",
    "id": 24
  },
  {
    "question": "At what point $(x, y)$ do the graphs of the equations $y = 3x + 1$ and $y = 4x - 6$ intersect in the $xy$-plane?",
    "options": [
      "$(3, 4)$",
      "$(4, 3)$",
      "$(7, 22)$",
      "$(22, 7)$"
    ],
    "correctAnswer": 2,
    "explanation": "Set the equations equal: $3x + 1 = 4x - 6 \\\\implies x = 7$. Substitute back into either equation to find $y = 3(7) + 1 = 22$.",
    "id": 25
  },
  {
    "question": "$y = \\\\frac{2}{7}x + 3$\\n\\nOne of the two equations in a system of linear equations is given. The system has infinitely many solutions. If the second equation in the system is $y = mx + b$, where $m$ and $b$ are constants, what is the value of $b$?",
    "options": [
      "$-3$",
      "$\\\\frac{1}{3}$",
      "$\\\\frac{1}{3}$",
      "$3$"
    ],
    "correctAnswer": 3,
    "explanation": "A system with infinitely many solutions means the equations are identical lines. Thus, $b$ must be $3$.",
    "id": 26
  },
  {
    "question": "A chemist performed an experiment using a set of beakers that can each be modeled by a right circular cylinder with a height of $58$ millimeters. The equation $y = 58\\\\pi x^2$ gives the volume $y$, in cubic millimeters, of the right circular cylinder that models a beaker in this set, where $x$ is the radius, in millimeters, of the base of the cylinder. Which graph best represents this equation in the $xy$-plane?",
    "options": [
      "A parabola starting at the origin and reaching $y=4550$ when $x=5$",
      "A straight line with negative slope",
      "A straight line with positive slope",
      "An exponential decay curved down"
    ],
    "correctAnswer": 0,
    "explanation": "The equation $y = 58\\\\pi x^2 \\\\approx 182 x^2$ models a half-parabola starting at $(0, 0)$. When $x=5$, $y \\\\approx 182(25) = 4550$.",
    "id": 27
  },
  {
    "question": "At a convention center, there are a total of $325$ visitors. Each visitor is located in either room A, room B, or room C. If one of these visitors is selected at random, the probability of selecting a visitor who is located in room A is $0.64$, and the probability of selecting a visitor who is located in room B is $0.32$. How many visitors are located in room C?",
    "options": [
      "$4$",
      "$13$",
      "$67$",
      "$104$"
    ],
    "correctAnswer": 1,
    "explanation": "Probability of room C is $1 - 0.64 - 0.32 = 0.04$. The number of visitors is $0.04 \\\\times 325 = 13$.",
    "id": 28
  },
  {
    "question": "$y = \\\\frac{x}{3} + 8$\\n$y = -\\\\frac{x}{3} + 20$\\n\\nThe solution to the given system of equations is $(x, y)$. What is the value of $2y$?",
    "options": [
      "$8$",
      "$12$",
      "$20$",
      "$28$"
    ],
    "correctAnswer": 3,
    "explanation": "Add the two equations: $y + y = \\\\frac{x}{3} + 8 - \\\\frac{x}{3} + 20 \\\\implies 2y = 28$.",
    "id": 29
  },
  {
    "question": "An object is launched from a height of $124$ feet above the ground. A quadratic function models the height above the ground, in feet, of the object $t$ seconds after it is launched. According to the model, $3$ seconds after the object is launched, it reaches a maximum height of $268$ feet above the ground. Which equation defines $f$?",
    "options": [
      "$f(t) = -16(t + 268)^2 - 3$",
      "$f(t) = -16(t - 268)^2 + 3$",
      "$f(t) = -16(t + 3)^2 - 268$",
      "$f(t) = -16(t - 3)^2 + 268$"
    ],
    "correctAnswer": 3,
    "explanation": "The maximum at $t=3$, height $268$ gives the vertex form $f(t) = a(t - 3)^2 + 268$. The initial height at $t=0$ means $a(-3)^2 + 268 = 124 \\\\implies 9a = -144 \\\\implies a = -16$.",
    "id": 30
  },
  {
    "question": "The graph of $y = f(x)$ is shown, where $f(x) = ab^x + c$, and $a$, $b$, and $c$ are constants. For how many values of $x$ does $f(x) = 0$?",
    "options": [
      "Three",
      "Two",
      "One",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "The graph is an exponential function that crosses the $x$-axis exactly once.",
    "id": 31
  },
  {
    "question": "The equation $h = \\\\frac{9(u - 273.15)}{5} + 32$ gives the corresponding temperature $h$, in degrees Fahrenheit, of any substance that has a temperature of $u$ kelvins, where $u > 0$. If a substance has a temperature of $809.33$ degrees Fahrenheit, what is the corresponding temperature, in kelvins, of this substance?",
    "options": [],
    "answerText": "705",
    "correctAnswer": "705",
    "isGridIn": true,
    "explanation": "Solve for $u$: $\\\\frac{9(u - 273.15)}{5} + 32 = 809.33 \\\\implies 1.8(u - 273.15) = 777.33 \\\\implies u - 273.15 = 431.85 \\\\implies u = 705$.",
    "id": 32
  },
  {
    "question": "$x(r - 7) + 3 = 17x + 25$\\n\\nIn the given equation, $r$, is a positive integer. If the given equation has exactly one solution, what CANNOT be the value of $r$?",
    "options": [
      "$3$",
      "$7$",
      "$22$",
      "$24$"
    ],
    "correctAnswer": 3,
    "explanation": "For a linear equation to have exactly one solution, the coefficient of $x$ on both sides must be different. If $r - 7 = 17 \\\\implies r = 24$, it would have no solutions. So $r$ cannot be $24$.",
    "id": 33
  },
  {
    "question": "Which expression is equivalent to $9x^6 - 63x^2$, where $x > 0$?",
    "options": [
      "$9(x^3 - 7x)^2$",
      "$x^2(9x - 7)^4$",
      "$9x^2(x - 7)^4$",
      "$9x^2(x^4 - 7)$"
    ],
    "correctAnswer": 3,
    "explanation": "Factor out the greatest common factor $9x^2$: $9x^2(x^4 - 7)$.",
    "id": 34
  },
  {
    "question": "In the figure shown, $WZ$ and $XY$ intersect at point $Q$. $YQ = 27$, $WQ = 90$, $WX = 60$, and $XQ = 110$. What is the length of $YZ$?",
    "options": [
      "$18$",
      "$33$",
      "$110$",
      "$200$"
    ],
    "correctAnswer": 0,
    "explanation": "Using similarity ratios corresponding to opposing triangles, if the multiplier relates the sides properly, it can be tested: $\\\\frac{WX}{YZ} = \\\\frac{WQ}{YQ} \\\\implies \\\\frac{60}{YZ} = \\\\frac{90}{27} = \\\\frac{10}{3} \\\\implies 10YZ = 180 \\\\implies YZ = 18$.",
    "id": 35
  },
  {
    "question": "The positive number $a$ is $2,184\\\\%$ of the sum of the positive numbers $b$ and $c$, and $b$ is $84\\\\%$ of $c$. What percent of $b$ is $a$?",
    "options": [
      "$4,784\\\\%$",
      "$2,600\\\\%$",
      "$40.19\\\\%$",
      "$22.68\\\\%$"
    ],
    "correctAnswer": 0,
    "explanation": "$a = 21.84(b + c)$ and $b = 0.84c \\\\implies c = \\\\frac{b}{0.84}$. Then $a = 21.84(b + \\\\frac{b}{0.84}) = 21.84b(1 + \\\\frac{1}{0.84}) = 21.84b(\\\\frac{1.84}{0.84}) = 47.84b$, which is $4,784\\\\%$.",
    "id": 36
  },
  {
    "question": "$\\\\sqrt[5]{p^4} = x^{\\\\frac{1}{2}}$. In the given equation, $p > 1$ and $x > 1$. If $x = p^{2n - 1}$, where $n$ is a constant. What is the value of $n$?",
    "options": [],
    "answerText": "1.3",
    "correctAnswer": "1.3",
    "isGridIn": true,
    "explanation": "$p^{\\\\frac{4}{5}} = x^{\\\\frac{1}{2}} \\\\implies x = (p^{\\\\frac{4}{5}})^2 = p^{\\\\frac{8}{5}}$. Hence $2n - 1 = \\\\frac{8}{5} = 1.6 \\\\implies 2n = 2.6 \\\\implies n = 1.3$.",
    "id": 37
  },
  {
    "question": "A painting studio is offering a promotion where the first class is free, the second class is half off the regular price, and the remaining classes are regularly priced. If the regular price of a class is $\\\\$26.40$, which function $f$ gives the total cost, in dollars, of $x$ classes taken using this promotion, where $x > 2$?",
    "options": [
      "$f(x) = 26.40(x - 1) + 13.20$",
      "$f(x) = 26.40(x - 2) + 13.20$",
      "$f(x) = 26.40(x - 1) + 13.20(x - 2)$",
      "$f(x) = 26.40(x - 2) + 13.20(x - 1)$"
    ],
    "correctAnswer": 1,
    "explanation": "First class: $\\\\$0$. Second class: $\\\\$13.20$. Remaining $(x-2)$ classes: $\\\\$26.40$. Total = $13.20 + 26.40(x - 2)$.",
    "id": 38
  },
  {
    "question": "The triangle inequality theorem states that the sum of any two sides of a triangle must be greater than the length of the third side. If a triangle has side lengths of $10$ and $12$, which inequality represents the possible lengths, $x$, of the third side of the triangle?",
    "options": [
      "$x < 22$",
      "$x > 22$",
      "$2 < x < 22$",
      "$x < 2 \\\\text{ or } x > 22$"
    ],
    "correctAnswer": 2,
    "explanation": "The third side must be between the difference and sum of the other two sides: $12 - 10 < x < 12 + 10 \\\\implies 2 < x < 22$.",
    "id": 39
  },
  {
    "question": "The graph of $y = f(x) + 2$ is shown. (The graph has a $y$-intercept at $5$ and an asymptote at $y = 6$.) Which equation defines function $f$?",
    "options": [
      "$f(x) = -4^x + 3$",
      "$f(x) = -4^x + 5$",
      "$f(x) = -4^x + 6$",
      "$f(x) = -4^x + 7$"
    ],
    "correctAnswer": 2,
    "explanation": "The graph given fits the equation $y = -4^x + 6$, assuming the question asks for the function representing the graph shown directly.",
    "id": 40
  },
  {
    "question": "A circle in the $xy$-plane has its center at $(-2, 2)$. Line $t$ is tangent to this circle at the point $(3, -1)$. Which of the following points also lies on line $t$?",
    "options": [
      "$(0, \\\\frac{5}{3})$",
      "$(1, 7)$",
      "$(6, 4)$",
      "$(8, 2)$"
    ],
    "correctAnswer": 2,
    "explanation": "Slope of radius is $\\\\frac{-1 - 2}{3 - (-2)} = -\\\\frac{3}{5}$. Tangent slope is $\\\\frac{5}{3}$. Line equation: $y + 1 = \\\\frac{5}{3}(x - 3) \\\\implies y = \\\\frac{5}{3}x - 6$. For $x = 6$, $y = 10 - 6 = 4$. So $(6, 4)$ is on the line.",
    "id": 41
  },
  {
    "question": "Right rectangular prism $X$ is similar to right rectangular prism $Y$. The surface area of right rectangular prism $X$ is $55\\\\text{ cm}^2$, and the surface area of right rectangular prism $Y$ is $880\\\\text{ cm}^2$. The volume of right rectangular prism $Y$ is $1,600\\\\text{ cm}^3$. What is the sum of the volumes, in $\\\\text{cm}^3$, of right rectangular prism $X$ and right rectangular prism $Y$?",
    "options": [],
    "answerText": "1625",
    "correctAnswer": "1625",
    "isGridIn": true,
    "explanation": "Ratio of surface areas = $\\\\frac{55}{880} = \\\\frac{1}{16}$. Scale factor = $\\\\frac{1}{4}$. Ratio of volumes = $\\\\frac{1}{64}$. Volume $X = \\\\frac{1600}{64} = 25$. Sum = $1600 + 25 = 1625$.",
    "id": 42
  },
  {
    "question": "The function $f$ is defined by $f(x) = \\\\frac{|x|}{a}$, where $a < 0$, what is the product of $f(17a)$ and $f(8a)$?",
    "options": [],
    "answerText": "136",
    "correctAnswer": "136",
    "isGridIn": true,
    "explanation": "$f(17a) = \\\\frac{|17a|}{a} = \\\\frac{-17a}{a} = -17$. $f(8a) = \\\\frac{|8a|}{a} = \\\\frac{-8a}{a} = -8$. Product = $(-17)(-8) = 136$.",
    "id": 43
  },
  {
    "question": "$125x^2 - (25a + 5b)x + ab = 0$\\n\\nIn the given equation, $a$ and $b$ are positive constants. The sum of the solutions to the given equation is $k(5a + b)$, where $k$ is a constant, what is the value of $k$?",
    "options": [],
    "answerText": "1/25",
    "correctAnswer": "1/25",
    "isGridIn": true,
    "explanation": "Sum of solutions = $-\\\\frac{B}{A} = \\\\frac{25a + 5b}{125} = \\\\frac{5(5a + b)}{125} = \\\\frac{1}{25}(5a + b)$. Thus $k = \\\\frac{1}{25}$.",
    "id": 44
  }
];
