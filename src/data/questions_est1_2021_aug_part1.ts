import { Question } from '../../types';

export const EST1_2021_AUG_PART1: Question[] = [
  {
    "id": "est1_2021_aug_q1",
    "examId": "EST12021Aug",
    "question": "If $\\frac{2x-4}{3} - \\frac{x+1}{6} = t+1$ and $t=3$, what is the value of $x$?",
    "options": [
      "27",
      "$-1$",
      "11",
      "$\\frac{31}{3}$"
    ],
    "correctAnswer": 2,
    "explanation": "Substitute $t=3$: $\\frac{2x-4}{3} - \\frac{x+1}{6} = 4$. Multiply by 6: $2(2x-4) - (x+1) = 24 \\Rightarrow 4x - 8 - x - 1 = 24 \\Rightarrow 3x - 9 = 24 \\Rightarrow 3x = 33 \\Rightarrow x = 11$."
  },
  {
    "id": "est1_2021_aug_q2",
    "examId": "EST12021Aug",
    "question": "$Z - Z' = a + bi$\n\nIn the equation above, $a$ and $b$ are real numbers and $i$ is the imaginary unit such that $i^2 = -1$.\n\nIf $Z = 3 + 2i$ and $Z' = 4 - 3i$, what is the value of $(Z - Z')^2$?",
    "options": [
      "$2i$",
      "$-24 - 10i$",
      "$-26 - 10i$",
      "$-1 + 5i$"
    ],
    "correctAnswer": 1,
    "explanation": "$Z - Z' = (3+2i) - (4-3i) = -1 + 5i$. Then $(-1+5i)^2 = 1 - 10i + 25i^2 = 1 - 10i - 25 = -24 - 10i$."
  },
  {
    "id": "est1_2021_aug_q3",
    "examId": "EST12021Aug",
    "question": "Mathew paid X dollars for a play station that was only 30 dollars less than one third of the original price.\n\nWhat was the original price in dollars?",
    "options": [
      "$X - 30$",
      "$X + 60$",
      "$3X + 90$",
      "$\\frac{1}{3}X - 30$"
    ],
    "correctAnswer": 2,
    "explanation": "Let $P$ be the original price. $X = \\frac{1}{3}P - 30$. Solving for $P$: $\\frac{1}{3}P = X + 30 \\Rightarrow P = 3(X+30) = 3X + 90$."
  },
  {
    "id": "est1_2021_aug_q4",
    "examId": "EST12021Aug",
    "question": "A truck contains 15 identical boxes that are either red or blue.\n\nThe red box weighs 3 kg and the blue box weighs 2 kg.\n\nIf the total weight of the boxes is 36 kgs, what is the difference between the red and blue boxes in the truck?",
    "options": [
      "6",
      "9",
      "1",
      "3"
    ],
    "correctAnswer": 3,
    "explanation": "Let $r$ be the number of red boxes and $b$ be the number of blue boxes. $r + b = 15$ and $3r + 2b = 36$. Multiply first by 2: $2r + 2b = 30$. Subtract from second: $r = 6$. Then $b = 9$. The difference is $9 - 6 = 3$."
  },
  {
    "id": "est1_2021_aug_q5",
    "examId": "EST12021Aug",
    "question": "A 100-page album costs twice as much as a 50-page album. The cost of three 100-page albums and two 50-page albums is $t$. How much does a 50-page album cost?",
    "options": [
      "$8t$",
      "$4t$",
      "$\\frac{t}{4}$",
      "$\\frac{t}{8}$"
    ],
    "correctAnswer": 3,
    "explanation": "Let $x$ be the cost of a 50-page album. A 100-page album costs $2x$. $3(2x) + 2(x) = t \\Rightarrow 6x + 2x = t \\Rightarrow 8x = t \\Rightarrow x = \\frac{t}{8}$."
  },
  {
    "id": "est1_2021_aug_q6",
    "examId": "EST12021Aug",
    "question": "An enterprise conducted a study on its products and the results showed that when the unit selling price (P) is raised, the number of units sold (U) went down.\n\nThis result is modeled by the equation $10P+2U=2500$.\n\nBased on this model, the manager decided to decrease the unit selling price from $50 to $45.\n\nHow many more items did he sell?",
    "options": [
      "75",
      "50",
      "25",
      "10"
    ],
    "correctAnswer": 2,
    "explanation": "At $P=50$, $10(50) + 2U = 2500 \\Rightarrow 500 + 2U = 2500 \\Rightarrow 2U = 2000 \\Rightarrow U = 1000$. At $P=45$, $10(45) + 2U = 2500 \\Rightarrow 450 + 2U = 2500 \\Rightarrow 2U = 2050 \\Rightarrow U = 1025$. The increase is $1025 - 1000 = 25$."
  },
  {
    "id": "est1_2021_aug_q7",
    "examId": "EST12021Aug",
    "question": "$[(2x-y)^2 - (2x+y)^2]^2$\n\nWhich of the following is equivalent to the expression above?",
    "options": [
      "$16x^4 - y^2$",
      "$-64x^4y^4$",
      "$-8x^2y^2$",
      "$64x^2y^2$"
    ],
    "correctAnswer": 3,
    "explanation": "Inside the brackets: $(2x-y)^2 - (2x+y)^2 = (4x^2 - 4xy + y^2) - (4x^2 + 4xy + y^2) = -8xy$. Squaring this gives $(-8xy)^2 = 64x^2y^2$."
  },
  {
    "id": "est1_2021_aug_q8",
    "examId": "EST12021Aug",
    "question": "If $\\frac{3a}{b} \\div c = 7$, what is the value of $\\frac{bc}{2a}$?",
    "options": [
      "$\\frac{3}{14}$",
      "$\\frac{7}{3}$",
      "21",
      "$\\frac{6}{7}$"
    ],
    "correctAnswer": 0,
    "explanation": "$\\frac{3a}{bc} = 7 \\Rightarrow \\frac{a}{bc} = \\frac{7}{3} \\Rightarrow \\frac{bc}{a} = \\frac{3}{7}$. Then $\\frac{bc}{2a} = \\frac{1}{2} \\cdot \\frac{3}{7} = \\frac{3}{14}$."
  },
  {
    "id": "est1_2021_aug_q9",
    "examId": "EST12021Aug",
    "question": "Which of the following is equivalent to $f(x) = 2x^2 - 12x + 8$?",
    "options": [
      "$(2x-6)^2 - 28$",
      "$2(x-3)^2 - 10$",
      "$2(x-9)^2 + 5$",
      "$4(x-3)^2 - 5$"
    ],
    "correctAnswer": 1,
    "explanation": "$2x^2 - 12x + 8 = 2(x^2 - 6x) + 8 = 2(x^2 - 6x + 9 - 9) + 8 = 2(x-3)^2 - 18 + 8 = 2(x-3)^2 - 10$."
  },
  {
    "id": "est1_2021_aug_q10",
    "examId": "EST12021Aug",
    "question": "$f(x) = ax^2 + (3-b)x - 5$\n\nFor the function $f$ defined above, $a$ and $b$ are constants. If $f(1) = 2$ and $f(2) = -1$, which of the following is the value of $f(-1)$?",
    "options": [
      "$-22$",
      "$-16$",
      "2",
      "11"
    ],
    "correctAnswer": 0,
    "explanation": "$f(1) = a + 3 - b - 5 = a - b - 2 = 2 \\Rightarrow a - b = 4$. $f(2) = 4a + 2(3-b) - 5 = 4a + 6 - 2b - 5 = 4a - 2b + 1 = -1 \\Rightarrow 4a - 2b = -2 \\Rightarrow 2a - b = -1$. Subtracting the first from the second: $a = -5$. Then $-5 - b = 4 \\Rightarrow b = -9$. So $f(x) = -5x^2 + (3 - (-9))x - 5 = -5x^2 + 12x - 5$. $f(-1) = -5(-1)^2 + 12(-1) - 5 = -5 - 12 - 5 = -22$."
  },
  {
    "id": "est1_2021_aug_q11",
    "examId": "EST12021Aug",
    "question": "Sam wants to rent a car. He receives the following offers.\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Offer</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Fixed amount to be paid</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Amount to be paid for each kilometer driven</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"border border-gray-400 px-2 py-1\">Offer A</td>\n      <td class=\"border border-gray-400 px-2 py-1\">$65</td>\n      <td class=\"border border-gray-400 px-2 py-1\">$0.50</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-2 py-1\">Offer B</td>\n      <td class=\"border border-gray-400 px-2 py-1\">$60</td>\n      <td class=\"border border-gray-400 px-2 py-1\">$0.52</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-2 py-1\">Offer C</td>\n      <td class=\"border border-gray-400 px-2 py-1\">$55</td>\n      <td class=\"border border-gray-400 px-2 py-1\">$0.54</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-2 py-1\">Offer D</td>\n      <td class=\"border border-gray-400 px-2 py-1\">$50</td>\n      <td class=\"border border-gray-400 px-2 py-1\">$0.56</td>\n    </tr>\n  </tbody>\n</table>\n\nWhich offer is the best if Sam wants to travel 100 km?",
    "options": [
      "Offer A",
      "Offer B",
      "Offer C",
      "Offer D"
    ],
    "correctAnswer": 3,
    "explanation": "Cost for A: $65 + 0.50(100) = 115$. Cost for B: $60 + 0.52(100) = 112$. Cost for C: $55 + 0.54(100) = 109$. Cost for D: $50 + 0.56(100) = 106$. Offer D is the cheapest."
  },
  {
    "id": "est1_2021_aug_q12",
    "examId": "EST12021Aug",
    "question": "If $m$ is a real parameter different than zero, what is the number of the real roots of the equation $2x(x^2+4)(mx^2+x-m) = 0$?",
    "options": [
      "1",
      "2",
      "3",
      ">3"
    ],
    "correctAnswer": 2,
    "explanation": "The roots are $x=0$, roots of $x^2+4=0$ (no real roots), and roots of $mx^2+x-m=0$. The discriminant of the quadratic is $1^2 - 4(m)(-m) = 1 + 4m^2$. Since $m \\neq 0$, $1+4m^2 > 0$, so there are 2 distinct real roots for the quadratic. Total real roots = $1 + 2 = 3$."
  },
  {
    "id": "est1_2021_aug_q13",
    "examId": "EST12021Aug",
    "question": "$\\sqrt{x^2+3} = x-5$\n\nWhich of the following could be a solution for the equation above?",
    "options": [
      "0",
      "2.2",
      "5",
      "None of the above"
    ],
    "correctAnswer": 3,
    "explanation": "Squaring both sides: $x^2+3 = (x-5)^2 = x^2 - 10x + 25 \\Rightarrow 3 = -10x + 25 \\Rightarrow 10x = 22 \\Rightarrow x = 2.2$. Checking the solution: $\\sqrt{2.2^2+3} = \\sqrt{4.84+3} = \\sqrt{7.84} = 2.8$. But $x-5 = 2.2 - 5 = -2.8$. Since $2.8 \\neq -2.8$, $x=2.2$ is an extraneous solution. There is no real solution."
  },
  {
    "id": "est1_2021_aug_q14",
    "examId": "EST12021Aug",
    "question": "$25x^2 - tx + 4 = (5x-2)(ax+b)$\n\nIn the equation above, $a$, $b$ and $t$ are constant numbers.\nWhat is the value of $t$?",
    "options": [
      "5",
      "-2",
      "20",
      "-15"
    ],
    "correctAnswer": 2,
    "explanation": "Expanding the right side: $5ax^2 + (5b-2a)x - 2b$. Comparing coefficients: $5a = 25 \\Rightarrow a = 5$. $-2b = 4 \\Rightarrow b = -2$. $-t = 5b - 2a = 5(-2) - 2(5) = -10 - 10 = -20 \\Rightarrow t = 20$."
  },
  {
    "id": "est1_2021_aug_q15",
    "examId": "EST12021Aug",
    "question": "Knowing that $x < 5$, use the figure above to find the set of real numbers $x$ if twice the area of triangle BME added to 2 times the area of the triangle MEA is less than or equal to triple the area of rectangle ABCD. (the figure is not drawn to scale)",
    "svg": "<svg viewBox=\"0 0 300 150\" width=\"100%\" height=\"100%\">\n  <rect x=\"50\" y=\"50\" width=\"200\" height=\"80\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  <line x1=\"50\" y1=\"50\" x2=\"150\" y2=\"10\" stroke=\"black\" stroke-width=\"2\"/>\n  <line x1=\"250\" y1=\"50\" x2=\"150\" y2=\"10\" stroke=\"black\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"10\" x2=\"150\" y2=\"50\" stroke=\"black\" stroke-width=\"2\"/>\n  <rect x=\"150\" y=\"40\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n  <text x=\"40\" y=\"50\" font-size=\"12\">A</text>\n  <text x=\"255\" y=\"50\" font-size=\"12\">B</text>\n  <text x=\"255\" y=\"140\" font-size=\"12\">C</text>\n  <text x=\"40\" y=\"140\" font-size=\"12\">D</text>\n  <text x=\"145\" y=\"5\" font-size=\"12\">E</text>\n  <text x=\"145\" y=\"65\" font-size=\"12\">M</text>\n  <text x=\"100\" y=\"65\" font-size=\"12\">5-x</text>\n  <text x=\"200\" y=\"65\" font-size=\"12\">x</text>\n  <text x=\"120\" y=\"30\" font-size=\"12\">x+2</text>\n  <text x=\"25\" y=\"90\" font-size=\"12\">2cm</text>\n  <text x=\"140\" y=\"145\" font-size=\"12\">5 cm</text>\n</svg>",
    "options": [
      "$x < 4$",
      "$x \\le 4$",
      "$x \\in [0, 4]$",
      "$x > 4$"
    ],
    "correctAnswer": 2,
    "explanation": "Area of BME = $\\frac{1}{2}(x)(x+2)$. Area of MEA = $\\frac{1}{2}(5-x)(x+2)$. Area of ABCD = $5 \\times 2 = 10$. The condition is $2 \\times \\text{Area}(BME) + 2 \\times \\text{Area}(MEA) \\le 3 \\times \\text{Area}(ABCD)$. This simplifies to $x(x+2) + (5-x)(x+2) \\le 30 \\Rightarrow (x+2)(x + 5 - x) \\le 30 \\Rightarrow 5(x+2) \\le 30 \\Rightarrow x+2 \\le 6 \\Rightarrow x \\le 4$. Since $x$ represents a length, $x \\ge 0$. So $x \\in [0, 4]$."
  },
  {
    "id": "est1_2021_aug_q16",
    "examId": "EST12021Aug",
    "question": "If $3x - y = 1$ and $\\frac{8^{2x}}{4^y} + t = 7$, what is the value of $t$?",
    "options": [],
    "correctAnswer": -1,
    "explanation": "$\\frac{8^{2x}}{4^y} = \\frac{(2^3)^{2x}}{(2^2)^y} = \\frac{2^{6x}}{2^{2y}} = 2^{6x-2y} = 2^{2(3x-y)}$. Since $3x-y = 1$, this is $2^{2(1)} = 4$. So $4 + t = 7 \\Rightarrow t = 3$."
  },
  {
    "id": "est1_2021_aug_q17",
    "examId": "EST12021Aug",
    "question": "In the $xy$-plane above, O is the center of the circle and the measure of $\\angle AOx$ is $\\frac{4\\pi}{a}$ radians. What is the value of $a$?",
    "svg": "<svg viewBox=\"0 0 280 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow17\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#374151\"/>\n    </marker>\n  </defs>\n  <line x1=\"20\" y1=\"130\" x2=\"250\" y2=\"130\" stroke=\"#374151\" stroke-width=\"1.5\" marker-end=\"url(#arrow17)\"/>\n  <line x1=\"100\" y1=\"220\" x2=\"100\" y2=\"20\" stroke=\"#374151\" stroke-width=\"1.5\" marker-end=\"url(#arrow17)\"/>\n  <text x=\"255\" y=\"134\" font-size=\"14\" font-weight=\"600\" fill=\"#1f2937\">x</text>\n  <text x=\"100\" y=\"15\" font-size=\"14\" font-weight=\"600\" fill=\"#1f2937\" text-anchor=\"middle\">y</text>\n  <circle cx=\"100\" cy=\"130\" r=\"65\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\"/>\n  <text x=\"88\" y=\"146\" font-size=\"14\" font-style=\"italic\" fill=\"#1f2937\">O</text>\n  <line x1=\"100\" y1=\"130\" x2=\"146\" y2=\"84\" stroke=\"#1f2937\" stroke-width=\"2\"/>\n  <circle cx=\"146\" cy=\"84\" r=\"3.5\" fill=\"#1f2937\"/>\n  <text x=\"154\" y=\"80\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\">A</text>\n  <g transform=\"translate(150, 15)\">\n    <text x=\"0\" y=\"28\" font-size=\"18\" fill=\"#1f2937\"> ( </text>\n    <text x=\"10\" y=\"20\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2937\">√2</text>\n    <line x1=\"8\" y1=\"24\" x2=\"26\" y2=\"24\" stroke=\"#1f2937\" stroke-width=\"1.2\"/>\n    <text x=\"13\" y=\"35\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2937\">2</text>\n    <text x=\"29\" y=\"28\" font-size=\"14\" fill=\"#1f2937\">,</text>\n    <text x=\"38\" y=\"20\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2937\">√2</text>\n    <line x1=\"36\" y1=\"24\" x2=\"54\" y2=\"24\" stroke=\"#1f2937\" stroke-width=\"1.2\"/>\n    <text x=\"41\" y=\"35\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2937\">2</text>\n    <text x=\"56\" y=\"28\" font-size=\"18\" fill=\"#1f2937\"> ) </text>\n  </g>\n</svg>",
    "options": [],
    "correctAnswer": 16,
    "isGridIn": true,
    "explanation": "Point A is in Quadrant I with coordinates $(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$, which corresponds to an angle of $45^\\circ$ or $\\frac{\\pi}{4}$ radians. We are given the angle measure is $\\frac{4\\pi}{a}$. So $\\frac{4\\pi}{a} = \\frac{\\pi}{4} \\Rightarrow a = 16$."
  },
  {
    "id": "est1_2021_aug_q18",
    "examId": "EST12021Aug",
    "question": "The table above shows some values for the function $f$.\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-4 py-1.5\">$x$</th>\n      <th class=\"border border-gray-400 px-4 py-1.5\">$f(x)$</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"border border-gray-400 px-4 py-1.5\">1</td>\n      <td class=\"border border-gray-400 px-4 py-1.5\">$m$</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-4 py-1.5\">2</td>\n      <td class=\"border border-gray-400 px-4 py-1.5\">6</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-4 py-1.5\">3</td>\n      <td class=\"border border-gray-400 px-4 py-1.5\">$n$</td>\n    </tr>\n  </tbody>\n</table>\n\nIf $f$ is a linear function, what is the value of $m+n$?",
    "options": [],
    "correctAnswer": 12,
    "isGridIn": true,
    "explanation": "For a linear function, the midpoint of $x=1$ and $x=3$ is $x=2$. Thus, $f(2) = \\frac{f(1) + f(3)}{2}$. So $6 = \\frac{m+n}{2} \\Rightarrow m+n = 12$."
  },
  {
    "id": "est1_2021_aug_q19",
    "examId": "EST12021Aug",
    "question": "$P(x) = (3a-6)x^2 + (4-2b)x + c - 3$\n\nIn the polynomial $P$ above, $a$, $b$ and $c$ are constant numbers.\nIf $P$ is identically zero, what is the value of $a+b+c$?",
    "options": [],
    "correctAnswer": -1,
    "explanation": "If $P(x) = 0$ for all $x$, then all coefficients are zero. $3a-6 = 0 \\Rightarrow a=2$. $4-2b = 0 \\Rightarrow b=2$. $c-3 = 0 \\Rightarrow c=3$. Then $a+b+c = 2+2+3 = 7$."
  },
  {
    "id": "est1_2021_aug_q20",
    "examId": "EST12021Aug",
    "question": "$\\sqrt{x^2-5x+8} = 2$\n\nWhat is the product of the two solutions of the equation above?",
    "options": [],
    "correctAnswer": -1,
    "explanation": "Squaring both sides: $x^2-5x+8 = 4 \\Rightarrow x^2-5x+4 = 0$. The solutions are $x=1$ and $x=4$. Both are valid since $x^2-5x+8$ is positive. The product of the solutions is $1 \\times 4 = 4$."
  }
];
