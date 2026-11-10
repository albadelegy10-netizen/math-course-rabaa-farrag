import { Question } from './types';

export const EST2_LOGARITHM_SET: Question[] = [
  {
    "id": "est2_logarithm_1",
    "question": "If $e^x = 3^2$, then $x =$",
    "options": [
      "1.4",
      "1.7",
      "1.9",
      "2.2",
      "2.4"
    ],
    "correctAnswer": 3,
    "explanation": "Taking the natural logarithm of both sides: $\\ln(e^x) = \\ln(3^2) \\implies x = \\ln(9) \\approx 2.197 \\approx 2.2$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "Exponents",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_2",
    "question": "If $3^{2y+1} = 5$, then $y =$",
    "options": [
      "0.23",
      "0.32",
      "2.75",
      "3.12",
      "3.44"
    ],
    "correctAnswer": 0,
    "explanation": "Taking $\\log_3$ on both sides: $2y+1 = \\log_3 5 = \\frac{\\log 5}{\\log 3} \\approx 1.465 \\implies 2y \\approx 0.465 \\implies y \\approx 0.23$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "Exponents",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_3",
    "question": "If $\\log 3 = a$, then $\\log 90 =$",
    "options": [
      "$1 + 2a$",
      "$10a^2$",
      "$10 + 2a$",
      "$30a$",
      "$10 + 3a$"
    ],
    "correctAnswer": 0,
    "explanation": "$\\log 90 = \\log(3 \\times 3 \\times 10) = \\log 3 + \\log 3 + \\log 10 = a + a + 1 = 1 + 2a$.",
    "category": "Logarithm",
    "difficulty": "Easy",
    "topics": [
      "Logarithms",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_4",
    "question": "If $f(x) = 3\\ln x$ and $g(x) = e^x$, then $g(f(x)) =$",
    "options": [
      "$3x$",
      "$e^x$",
      "$e^{2x}$",
      "$x^3$",
      "$x^2 + 1$"
    ],
    "correctAnswer": 3,
    "explanation": "$g(f(x)) = e^{3\\ln x} = e^{\\ln(x^3)} = x^3$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "Functions",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_5",
    "question": "A bicycle store finds that $N$, the number of bikes sold, is related to $d$, the number of dollars spent on advertising by the relation $N = 51 + 10\\ln\\left(\\frac{d}{10} + 2\\right)$. If the average profit is $\\$35$ per bike, is it worthwhile to spend $\\$1000$ on advertising?",
    "options": [
      "No, because the profit will be less than the amount spent on advertising.",
      "No, because the profit will be $97.",
      "Yes, because advertisement is important.",
      "Yes, because the profit is bigger than $1000.",
      "No, because the advertisement amount is big with respect to the product being advertised."
    ],
    "correctAnswer": 3,
    "explanation": "For $d = 1000$: $N = 51 + 10\\ln\\left(\\frac{1000}{10} + 2\\right) = 51 + 10\\ln(102) \\approx 51 + 10(4.625) = 97.25$ bikes. Total profit $= 97.25 \\times \\$35 = \\$3403.75$. Since $\\$3403.75 > \\$1000$, it is worthwhile.",
    "category": "Logarithm",
    "difficulty": "Hard",
    "topics": [
      "Logarithms",
      "Word Problems",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_6",
    "question": "If $e^x = 3$, what is the value of $\\left(\\frac{1}{e^3}\\right)^{-2x}$?",
    "options": [
      "729",
      "64",
      "27",
      "$\\frac{1}{64}$",
      "$\\frac{1}{729}$"
    ],
    "correctAnswer": 0,
    "explanation": "$\\left(\\frac{1}{e^3}\\right)^{-2x} = (e^{-3})^{-2x} = e^{6x} = (e^x)^6 = 3^6 = 729$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "Exponents",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_7",
    "question": "If $a = \\log_5 9$, then $25^{2a}$ is:",
    "options": [
      "81",
      "729",
      "2187",
      "6561",
      "13122"
    ],
    "correctAnswer": 3,
    "explanation": "Since $a = \\log_5 9 \\implies 5^a = 9$. Then $25^{2a} = (5^2)^{2a} = 5^{4a} = (5^a)^4 = 9^4 = 6561$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "Exponents",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_8",
    "question": "If $\\log_2 16 = x + y$ and $\\log_x 4 = 2$, then what is $\\log_2 y$?",
    "options": [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "$\\log_2 16 = 4 \\implies x + y = 4$. $\\log_x 4 = 2 \\implies x^2 = 4 \\implies x = 2$ (since base $x > 0$). $2 + y = 4 \\implies y = 2$. Therefore $\\log_2 y = \\log_2 2 = 1$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_9",
    "question": "If $5^{2x+3} = 7^{x+1}$, then $x =$",
    "options": [
      "4.35",
      "2.26",
      "1.32",
      "-2.26",
      "-4.35"
    ],
    "correctAnswer": 3,
    "explanation": "Taking $\\log$ on both sides: $(2x+3)\\log 5 = (x+1)\\log 7 \\implies x(2\\log 5 - \\log 7) = \\log 7 - 3\\log 5 \\implies x = \\frac{\\log 7 - 3\\log 5}{2\\log 5 - \\log 7} \\approx -2.26$.",
    "category": "Logarithm",
    "difficulty": "Hard",
    "topics": [
      "Logarithms",
      "Exponents",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_10",
    "question": "If $2\\left(3^{2x-5}\\right) - 5 = 10$, what is the value of $x$?",
    "options": [
      "1.28",
      "2.46",
      "3.42",
      "3.68",
      "4.12"
    ],
    "correctAnswer": 2,
    "explanation": "$2\\left(3^{2x-5}\\right) = 15 \\implies 3^{2x-5} = 7.5 \\implies 2x - 5 = \\log_3 7.5 = \\frac{\\log 7.5}{\\log 3} \\approx 1.834 \\implies 2x = 6.834 \\implies x \\approx 3.42$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_11",
    "question": "Which of the following is the solution set of the equation $\\log_3(x-5) = \\log_9(2x+5)$?",
    "options": [
      "$\\{2\\}$",
      "$\\{5\\}$",
      "$\\{10\\}$",
      "$\\{2, 10\\}$",
      "$\\{2, 5, 10\\}$"
    ],
    "correctAnswer": 2,
    "explanation": "$\\log_3(x-5) = \\log_9(x-5)^2 = \\log_9(2x+5) \\implies (x-5)^2 = 2x+5 \\implies x^2 - 12x + 20 = 0 \\implies (x-2)(x-10) = 0$. Since domain requires $x - 5 > 0 \\implies x > 5$, $x = 2$ is rejected. Solution set is $\\{10\\}$.",
    "category": "Logarithm",
    "difficulty": "Hard",
    "topics": [
      "Logarithms",
      "Equations",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_12",
    "question": "If $\\log_2(\\log_3(\\log_2 x)) = 1$, what is the value of $x$?",
    "options": [
      "126",
      "256",
      "512",
      "1024",
      "2048"
    ],
    "correctAnswer": 2,
    "explanation": "$\\log_2(\\log_3(\\log_2 x)) = 1 \\implies \\log_3(\\log_2 x) = 2^1 = 2 \\implies \\log_2 x = 3^2 = 9 \\implies x = 2^9 = 512$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_13",
    "question": "If $x = (\\log_{27} 3)^{\\log_3 27}$, then $\\log_3 x =$",
    "options": [
      "3",
      "-3",
      "$\\frac{1}{3}$",
      "$\\frac{1}{9}$",
      "$\\frac{1}{27}$"
    ],
    "correctAnswer": 1,
    "explanation": "$\\log_{27} 3 = \\frac{1}{3}$ and $\\log_3 27 = 3$. So $x = \\left(\\frac{1}{3}\\right)^3 = 3^{-3}$. Therefore, $\\log_3 x = \\log_3(3^{-3}) = -3$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_14",
    "question": "If $3^x = 5^y$, then $\\frac{x}{y} =$",
    "options": [
      "$\\frac{3}{5}$",
      "$\\frac{5}{3}$",
      "$\\log_3 5$",
      "$\\log_5 3$",
      "$3^5$"
    ],
    "correctAnswer": 2,
    "explanation": "$(3^x)^{1/y} = (5^y)^{1/y} \\implies 3^{x/y} = 5 \\implies \\frac{x}{y} = \\log_3 5$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "Exponents",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_15",
    "question": "If $(\\log x)^2 + \\log x^2 = 3$, then which of the following could be the value of $x$?",
    "options": [
      "-10",
      "3",
      "5",
      "8",
      "10"
    ],
    "correctAnswer": 4,
    "explanation": "$(\\log x)^2 + 2\\log x - 3 = 0 \\implies (\\log x + 3)(\\log x - 1) = 0 \\implies \\log x = -3$ or $\\log x = 1 \\implies x = 10^{-3}$ or $x = 10$. Among options, $x = 10$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "Quadratic Equations",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_16",
    "question": "If $2^{\\log_2 x} + \\log_3 3^{4x} = 25$, then $x =$",
    "options": [
      "5",
      "0.83",
      "-1.66",
      "1.78",
      "1.92"
    ],
    "correctAnswer": 0,
    "explanation": "$2^{\\log_2 x} = x$ and $\\log_3(3^{4x}) = 4x$. So $x + 4x = 25 \\implies 5x = 25 \\implies x = 5$.",
    "category": "Logarithm",
    "difficulty": "Easy",
    "topics": [
      "Logarithms",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_17",
    "question": "If $f(x) = 2\\ln(x+1)$ and $g(x) = e^x$, then $(g \\circ f)(x) =$",
    "options": [
      "$e^{x+1}$",
      "$e^{x^2+2x+1}$",
      "$x+1$",
      "$2(x+1)$",
      "$x^2 + 2x + 1$"
    ],
    "correctAnswer": 4,
    "explanation": "$(g \\circ f)(x) = e^{2\\ln(x+1)} = e^{\\ln(x+1)^2} = (x+1)^2 = x^2 + 2x + 1$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "Functions",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_18",
    "question": "The value, in US dollars, of a car is given by $V = \\beta e^{-\\alpha t}$ where $t$ represents the age of the car in years and $\\beta$ and $\\alpha$ are real numbers. The initial price of the car was $\\$8000$, and its price after one year becomes $\\$6000$. Then the value of $\\alpha$ is:",
    "options": [
      "$\\ln\\left(\\frac{1}{4}\\right)$",
      "$\\ln\\left(\\frac{1}{3}\\right)$",
      "$\\ln\\left(\\frac{2}{3}\\right)$",
      "$\\ln\\left(\\frac{3}{4}\\right)$",
      "$\\ln\\left(\\frac{4}{3}\\right)$"
    ],
    "correctAnswer": 4,
    "explanation": "At $t = 0$: $V = 8000 \\implies \\beta = 8000$. At $t = 1$: $6000 = 8000 e^{-\\alpha} \\implies e^{-\\alpha} = \\frac{3}{4} \\implies e^{\\alpha} = \\frac{4}{3} \\implies \\alpha = \\ln\\left(\\frac{4}{3}\\right)$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "Word Problems",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_19",
    "question": "If $2\\log x = \\log(2x+3)$, then which of the following is the solution set of $x$?",
    "options": [
      "$\\{-1\\}$",
      "$\\{-1, 3\\}$",
      "$\\{3\\}$",
      "$\\{3, 4\\}$",
      "All real numbers"
    ],
    "correctAnswer": 2,
    "explanation": "$2\\log x = \\log(2x+3) \\implies x^2 = 2x+3 \\implies x^2 - 2x - 3 = 0 \\implies (x-3)(x+1) = 0 \\implies x = 3$ or $x = -1$. Domain $x > 0$ excludes $x = -1$, so solution set is $\\{3\\}$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "Equations",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_20",
    "question": "If $f(x) = \\log_2(x^2+7)$ and $f(g(1)) = 4$, which of the following could be $g(x)$?",
    "options": [
      "$g(x) = x^2 + x + 2$",
      "$g(x) = 2x^2 + x - 1$",
      "$g(x) = \\cos(\\pi x) + 4$",
      "$g(x) = \\sin(\\pi x) + 2$",
      "$g(x) = 3^x - 1$"
    ],
    "correctAnswer": 2,
    "explanation": "Let $k = g(1)$. $f(k) = \\log_2(k^2+7) = 4 \\implies k^2 + 7 = 16 \\implies k^2 = 9 \\implies k = \\pm 3$. For choice (C): $g(1) = \\cos(\\pi) + 4 = -1 + 4 = 3$, which works.",
    "category": "Logarithm",
    "difficulty": "Hard",
    "topics": [
      "Logarithms",
      "Functions",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_21",
    "question": "$\\log_{16} 81 - \\log_2 3 =$",
    "options": [
      "-2",
      "-1",
      "0",
      "1",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "$\\log_{16} 81 = \\log_{2^4}(3^4) = \\frac{4}{4}\\log_2 3 = \\log_2 3$. Thus $\\log_{16} 81 - \\log_2 3 = 0$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_22",
    "question": "If $\\log_2 x + \\log_2(x-1) < 1$, which of the following is the solution set of the inequality?",
    "options": [
      "$\\{x \\mid x < -1\\}$",
      "$\\{x \\mid -1 < x < 2\\}$",
      "$\\{x \\mid 0 < x < 2\\}$",
      "$\\{x \\mid 1 < x < 2\\}$",
      "$\\{x \\mid x > 2\\}$"
    ],
    "correctAnswer": 3,
    "explanation": "$\\log_2(x(x-1)) < 1 \\implies x^2 - x < 2 \\implies x^2 - x - 2 < 0 \\implies (x-2)(x+1) < 0 \\implies -1 < x < 2$. Domain constraints: $x > 0$ and $x-1 > 0 \\implies x > 1$. Therefore $1 < x < 2$.",
    "category": "Logarithm",
    "difficulty": "Hard",
    "topics": [
      "Logarithms",
      "Inequalities",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_23",
    "question": "If $\\log_{\\sqrt{3}} x = 10$, then $\\log_3 x^3 =$",
    "options": [
      "10",
      "15",
      "30",
      "45",
      "60"
    ],
    "correctAnswer": 1,
    "explanation": "$\\log_{\\sqrt{3}} x = \\log_{3^{1/2}} x = 2\\log_3 x = 10 \\implies \\log_3 x = 5$. Then $\\log_3 x^3 = 3\\log_3 x = 3(5) = 15$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_24",
    "question": "Figure 5 shows the graph of $y = \\log_2(2x)$. What is the sum of the areas of the three shaded rectangles with base intervals $[2, 4]$, $[4, 8]$, and $[8, 12]$ evaluated at the left endpoints?",
    "options": [
      "24",
      "32",
      "36",
      "42",
      "48"
    ],
    "correctAnswer": 1,
    "explanation": "Sum of areas $= (4-2)\\log_2(4) + (8-4)\\log_2(8) + (12-8)\\log_2(16) = 2(2) + 4(3) + 4(4) = 4 + 12 + 16 = 32$.",
    "category": "Logarithm",
    "difficulty": "Hard",
    "topics": [
      "Logarithms",
      "Geometry",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_25",
    "question": "The current population of Lake Pond is 50,000. The population at any time $t$ can be calculated by the function $P(t) = A e^{-0.025t}$, where $A$ is initial population and $t$ is the time in years. How many years would it take for the population to reach half the present population?",
    "options": [
      "12.4",
      "15.5",
      "18.4",
      "24.6",
      "27.7"
    ],
    "correctAnswer": 4,
    "explanation": "$25000 = 50000 e^{-0.025t} \\implies 0.5 = e^{-0.025t} \\implies -0.025t = \\ln 0.5 \\implies t = \\frac{\\ln 0.5}{-0.025} \\approx 27.7$ years.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "Word Problems",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_26",
    "question": "If $f(x) = \\log(x+1) + \\log(x-1)$, then $f^{-1}(x) =$",
    "options": [
      "$10^{x^2 - 1}$",
      "$x^2 - 10$",
      "$\\sqrt{10^x + 1}$",
      "$-\\sqrt{10^x + 1}$",
      "$\\pm\\sqrt{10^x + 1}$"
    ],
    "correctAnswer": 2,
    "explanation": "$f(x) = \\log(x^2-1)$ for $x > 1$. Let $x = \\log(y^2-1) \\implies y^2-1 = 10^x \\implies y^2 = 10^x+1 \\implies y = \\sqrt{10^x+1}$ (since range of $f^{-1}$ is $y > 1$).",
    "category": "Logarithm",
    "difficulty": "Hard",
    "topics": [
      "Logarithms",
      "Inverse Functions",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_27",
    "question": "$\\ln(x^2 - 2x + 2) > 0$ is verified in:",
    "options": [
      "$]-\\infty, +\\infty[$",
      "$]0, +\\infty[$",
      "$[0, 1]$",
      "$]-\\infty, -\\frac{1}{2}[ \\cup ]0, +\\infty[$",
      "$]-\\infty, 1[ \\cup ]1, +\\infty[$"
    ],
    "correctAnswer": 4,
    "explanation": "$\\ln(x^2 - 2x + 2) > 0 \\implies x^2 - 2x + 2 > e^0 = 1 \\implies x^2 - 2x + 1 > 0 \\implies (x-1)^2 > 0$. This is true for all real $x$ except $x = 1$, giving $]-\\infty, 1[ \\cup ]1, +\\infty[$.",
    "category": "Logarithm",
    "difficulty": "Hard",
    "topics": [
      "Logarithms",
      "Inequalities",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_28",
    "question": "If $\\log_a x = 3$ and $\\log_b x = 4$, then $\\log_{ab} x =$",
    "options": [
      "12",
      "$\\frac{8}{3}$",
      "$\\frac{12}{7}$",
      "$\\frac{7}{12}$",
      "$\\frac{3}{8}$"
    ],
    "correctAnswer": 2,
    "explanation": "$\\log_{ab} x = \\frac{1}{\\log_x(ab)} = \\frac{1}{\\log_x a + \\log_x b} = \\frac{1}{\\frac{1}{3} + \\frac{1}{4}} = \\frac{1}{\\frac{7}{12}} = \\frac{12}{7}$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_29",
    "question": "If $\\log_2 5 = a$ and $\\log_2 3 = b$, then $\\log_2 \\sqrt{75} =$",
    "options": [
      "$\\sqrt{2a+b}$",
      "$2a+b$",
      "$\\frac{1}{2}(a+b)$",
      "$\\frac{1}{2}(a+2b)$",
      "$a + \\frac{1}{2}b$"
    ],
    "correctAnswer": 4,
    "explanation": "$\\log_2 \\sqrt{75} = \\frac{1}{2}\\log_2(5^2 \\times 3) = \\frac{1}{2}(2\\log_2 5 + \\log_2 3) = \\frac{1}{2}(2a+b) = a + \\frac{1}{2}b$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_30",
    "question": "If $\\left(\\frac{1}{2}\\right)^{2a} = \\left(\\frac{1}{3}\\right)^b$, what is the value of $\\frac{a}{b}$?",
    "options": [
      "0.33",
      "0.67",
      "0.79",
      "0.81",
      "0.87"
    ],
    "correctAnswer": 2,
    "explanation": "Taking natural log: $2a\\ln(1/2) = b\\ln(1/3) \\implies -2a\\ln 2 = -b\\ln 3 \\implies \\frac{a}{b} = \\frac{\\ln 3}{2\\ln 2} \\approx \\frac{1.0986}{1.3863} \\approx 0.79$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "Exponents",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_31",
    "question": "$3^{\\log_9 18} =$",
    "options": [
      "$3\\sqrt{2}$",
      "$3\\sqrt{3}$",
      "$2\\sqrt{5}$",
      "$2\\sqrt{6}$",
      "$2\\sqrt{7}$"
    ],
    "correctAnswer": 0,
    "explanation": "$3^{\\log_9 18} = 3^{\\log_{3^2} 18} = 3^{\\frac{1}{2}\\log_3 18} = 3^{\\log_3 \\sqrt{18}} = \\sqrt{18} = 3\\sqrt{2}$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_32",
    "question": "If $y = \\log_5(x^2 - 6x + 14)$, what is the minimum value of $y$?",
    "options": [
      "-2",
      "-1",
      "1",
      "2",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "The minimum of $x^2 - 6x + 14$ occurs at $x = 3$, yielding $3^2 - 6(3) + 14 = 5$. Thus the minimum value of $y$ is $\\log_5 5 = 1$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "Functions",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_33",
    "question": "If $\\log_b(x^2 - 4) - \\log_b(x - 2) = 3$, express $x$ in terms of $b$.",
    "options": [
      "$b^3 - 2$",
      "$b^3 + 2$",
      "$2b^3$",
      "$\\frac{b^3}{2}$",
      "$b^3 + 4$"
    ],
    "correctAnswer": 0,
    "explanation": "$\\log_b\\left(\\frac{x^2-4}{x-2}\\right) = 3 \\implies \\log_b(x+2) = 3 \\implies x+2 = b^3 \\implies x = b^3 - 2$.",
    "category": "Logarithm",
    "difficulty": "Medium",
    "topics": [
      "Logarithms",
      "Equations",
      "EST2"
    ]
  },
  {
    "id": "est2_logarithm_34",
    "question": "Solve for $x$: $2^{x+1} = 3^{x-1}$. Which of the following is an equivalent expression for $x$?",
    "options": [
      "$\\frac{\\log 6}{\\log 1.5}$",
      "$\\frac{\\log 6}{\\log 3 - \\log 2}$",
      "$\\frac{\\log 2 + \\log 3}{\\log(3/2)}$",
      "$\\frac{\\ln 6}{\\ln 1.5}$",
      "All of the above"
    ],
    "correctAnswer": 4,
    "explanation": "$2^{x+1} = 3^{x-1} \\implies (x+1)\\log 2 = (x-1)\\log 3 \\implies x(\\log 3 - \\log 2) = \\log 3 + \\log 2 = \\log 6 \\implies x = \\frac{\\log 6}{\\log 3 - \\log 2} = \\frac{\\log 6}{\\log 1.5}$. All listed options are mathematically equivalent.",
    "category": "Logarithm",
    "difficulty": "Hard",
    "topics": [
      "Logarithms",
      "Exponents",
      "EST2"
    ]
  }
];
