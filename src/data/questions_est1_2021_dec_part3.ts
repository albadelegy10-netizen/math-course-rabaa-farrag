import { Question } from '../../types';

export const EST1_2021_DEC_PART3: Question[] = [
  {
    "id": "est1_2021_dec_q21",
    "examId": "EST12021Dec",
    
    
    "type": "multiple-choice",
    "question": "If $x$ is a positive number less than 1, then which of the following is true?\\nI. $x^2 < x$\\nII. $x^3 > x$\\nIII. $x + 1 > 1$",
    "options": [
      "III only",
      "I and II",
      "II and III",
      "I and III"
    ],
    "correctAnswer": 3,
    "explanation": "Let's test each statement with a positive number less than 1, such as $x = 0.5$.\\nI. $x^2 < x \\Rightarrow (0.5)^2 = 0.25 < 0.5$. This is true.\\nII. $x^3 > x \\Rightarrow (0.5)^3 = 0.125 > 0.5$. This is false.\\nIII. $x + 1 > 1 \\Rightarrow 0.5 + 1 = 1.5 > 1$. This is true since $x > 0$.\\nTherefore, only I and III are true."
  },
  {
    "id": "est1_2021_dec_q22",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "In a school competition, students have to prepare sketches of length $x$ minutes. The minimum length is 2 minutes and the maximum length is 3 minutes.\\nWhich inequality represents the given situation?",
    "options": [
      "$|x - 2| < 3$",
      "$|x - 3| < 2$",
      "$|x - 2.5| \\le 0.5$",
      "$|x - 0.5| \\le 2.5$"
    ],
    "correctAnswer": 2,
    "explanation": "The length $x$ must be between 2 and 3 minutes, inclusive ($2 \\le x \\le 3$). The midpoint between 2 and 3 is $2.5$. The distance from the midpoint to either extreme is $0.5$. We can express this range as $|x - \\text{midpoint}| \\le \\text{distance}$, which gives $|x - 2.5| \\le 0.5$."
  },
  {
    "id": "est1_2021_dec_q23",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "(d): $x + 2y + 2 = 0$\\nWhich of the equations below could not be a line perpendicular to line (d) given above?",
    "options": [
      "$4x - 2y - 2 = 0$",
      "$2x - y + 3 = 0$",
      "$2x + y + 1 = 0$",
      "$6x - 3y = 0$"
    ],
    "correctAnswer": 2,
    "explanation": "First, find the slope of line (d). Rearrange into slope-intercept form: $2y = -x - 2 \\Rightarrow y = -0.5x - 1$. The slope is $-0.5$ (or $-\\frac{1}{2}$). The slope of a perpendicular line must be the negative reciprocal, which is $2$.\\nLet's check the options:\\nA. $4x - 2y - 2 = 0 \\Rightarrow 2y = 4x - 2 \\Rightarrow y = 2x - 1$ (slope is 2)\\nB. $2x - y + 3 = 0 \\Rightarrow y = 2x + 3$ (slope is 2)\\nC. $2x + y + 1 = 0 \\Rightarrow y = -2x - 1$ (slope is -2)\\nD. $6x - 3y = 0 \\Rightarrow 3y = 6x \\Rightarrow y = 2x$ (slope is 2)\\nOption C has a slope of $-2$, so it cannot be perpendicular to line (d)."
  },
  {
    "id": "est1_2021_dec_q24",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "Street food tickets at the park cost 10 EGP for children and 15 EGP for adults. On a certain day, 1,500 tickets were bought for a total of 19,750 EGP.\\nWhat is the amount of money made from the tickets for adults only on that day?",
    "options": [
      "5,490 EGP",
      "7,500 EGP",
      "12,000 EGP",
      "14,250 EGP"
    ],
    "correctAnswer": 3,
    "explanation": "Let $c$ be the number of children's tickets and $a$ be the number of adult tickets. The system of equations is:\\n$c + a = 1500$\\n$10c + 15a = 19750$\\nFrom the first equation, $c = 1500 - a$. Substitute this into the second equation:\\n$10(1500 - a) + 15a = 19750$\\n$15000 - 10a + 15a = 19750$\\n$5a = 4750 \\Rightarrow a = 950$\\nThe number of tickets for adults is 950. The amount of money from adults is $15 \\times 950 = 14,250$ EGP."
  },
  {
    "id": "est1_2021_dec_q25",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "$$ 2\\left(\\frac{x}{3} - \\frac{1}{4}\\right) - 2x = \\frac{2}{5} $$\\nWhat is the solution to the equation above?",
    "options": [
      "$\\frac{-9}{28}$",
      "$\\frac{-27}{40}$",
      "$\\frac{-27}{10}$",
      "$\\frac{3}{40}$"
    ],
    "correctAnswer": 1,
    "explanation": "Distribute the $2$:\\n$\\frac{2x}{3} - \\frac{1}{2} - 2x = \\frac{2}{5}$\\nCombines the $x$ terms: $\\frac{2x}{3} - \\frac{6x}{3} = -\\frac{4x}{3}$.\\nMove the numerical value to the other side: $-\\frac{4x}{3} = \\frac{2}{5} + \\frac{1}{2}$.\\nFind a common denominator for the right side: $\\frac{4}{10} + \\frac{5}{10} = \\frac{9}{10}$.\\nWe have $-\\frac{4x}{3} = \\frac{9}{10}$.\\nMultiply by $-\\frac{3}{4}$: $x = \\frac{9}{10} \\times \\left(-\\frac{3}{4}\\right) = -\\frac{27}{40}$."
  },
  {
    "id": "est1_2021_dec_q26",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "If the straight line (d) of equation $kx + 3y - 1 = 0$ passes through the point $(-0.5, 1)$, what is the slope of (d)?",
    "options": [
      "$4$",
      "$\\frac{4}{3}$",
      "$\\frac{-4}{3}$",
      "$\\frac{-3}{4}$"
    ],
    "correctAnswer": 2,
    "explanation": "First, find $k$ by substituting the given point $x = -0.5, y = 1$ into the equation:\\n$k(-0.5) + 3(1) - 1 = 0$\\n$-0.5k + 2 = 0 \\Rightarrow 0.5k = 2 \\Rightarrow k = 4$\\nThe equation of the line is $4x + 3y - 1 = 0$. Rewrite in slope-intercept form:\\n$3y = -4x + 1 \\Rightarrow y = -\\frac{4}{3}x + \\frac{1}{3}$.\\nThe slope is $-\\frac{4}{3}$."
  },
  {
    "id": "est1_2021_dec_q27",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "The graph above shows the amount of money earned by Dana who works at a restaurant based on the number of hours she works every day.\\n*(The graph shows a straight line passing through (1, 8), (2, 16), ...)*\\nWhat is the unit rate of Dana's working hour?",
    "options": [
      "\\$8/h",
      "\\$1/h",
      "$1 h/\\$$",
      "\\$4/h"
    ],
    "correctAnswer": 0,
    "explanation": "Based on the graph, working $1$ hour earns Dana $\\$8$, $2$ hours earn $\\$16$, and so on. The unit rate is the money earned per hour, which is $\\frac{8}{1} = 8$ dollars per hour."
  },
  {
    "id": "est1_2021_dec_q28",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "If $ax + by = a - b$ and $bx - ay = a + b$ then:",
    "options": [
      "$x = y = 1$",
      "$x = y = -1$",
      "$x = 1 \\text{ and } y = -1$",
      "$x = -1 \\text{ and } y = 1$"
    ],
    "correctAnswer": 2,
    "explanation": "Solve the system using elimination:\\nMultiply the first equation by $a$: $a^2 x + aby = a^2 - ab$\\nMultiply the second equation by $b$: $b^2 x - aby = ab + b^2$\\nCombine the two new equations:\\n$(a^2 + b^2)x = a^2 + b^2$\\nDivide by $(a^2 + b^2)$, we get $x = 1$.\\nSubstitute $x = 1$ into the first equation:\\n$a(1) + by = a - b \\Rightarrow a + by = a - b \\Rightarrow by = -b \\Rightarrow y = -1$.\\nSo $x = 1$ and $y = -1$."
  },
  {
    "id": "est1_2021_dec_q29",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "On a math test of 30 questions, Mona got 75% of the 12 geometry questions correct, 60% of the 10 algebra questions correct and 25% of the 8 trigonometry questions wrong. What percentage of all the questions did Mona get correct?",
    "options": [
      "56.6%",
      "160%",
      "70%",
      "210%"
    ],
    "correctAnswer": 2,
    "explanation": "Find the number of correct questions in each section:\\nGeometry correct: $0.75 \\times 12 = 9$\\nAlgebra correct: $0.60 \\times 10 = 6$\\nTrigonometry: 25% wrong means 75% correct, so $0.75 \\times 8 = 6$\\nTotal correct questions = $9 + 6 + 6 = 21$.\\nThe percentage of total questions correct is $\\frac{21}{30} = \\frac{7}{10} = 70\\%$."
  },
  {
    "id": "est1_2021_dec_q30",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "multiple-choice",
    "question": "The price of the COVID-19 vaccine in the black market was first increased by 15% and then increased by 10% after two weeks. What is the percent increase in the price of the vaccine?",
    "options": [
      "126.5%",
      "26.5%",
      "25%",
      "1.265%"
    ],
    "correctAnswer": 1,
    "explanation": "To find the total percent increase, multiply the growth factors of each increase:\\nIncrease of 15% gives a growth factor of $1 + 0.15 = 1.15$.\\nIncrease of 10% gives a growth factor of $1 + 0.10 = 1.10$.\\nTotal growth factor = $1.15 \\times 1.10 = 1.265$.\\nConverting this back to a percentage increase: $(1.265 - 1) \\times 100 = 26.5\\%$."
  }
];
