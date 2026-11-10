import { Question } from '../../../types';

// ACT2 Exam 6 (Test #6) — transcribed from the 3D Academy ACT Subject Test (Math Level 1) PDF.
// Answers follow the PDF answer key. Figures are cleaned scans stored as base64 PNG.
export const ACT2_3D_EXAM6: Question[] = [
  {
    "id": 1,
    "question": "Rationalize the denominator and simplify $\\frac{30}{\\sqrt{20}}$.",
    "options": [
      "$3$",
      "$3\\sqrt{5}$",
      "$\\frac{3\\sqrt{2}}{2}$",
      "$3\\sqrt{2}$"
    ],
    "correctAnswer": 1,
    "explanation": "$\\frac{30}{2\\sqrt{5}} = \\frac{15}{\\sqrt{5}} = \\frac{15\\sqrt{5}}{5} = 3\\sqrt{5}$.",
    "category": ""
  },
  {
    "id": 2,
    "question": "What is the solution set for $|x - 3| = 2x$?",
    "options": [
      "$\\{-3, 3\\}$",
      "$\\{-3\\}$",
      "$\\{1\\}$",
      "$\\{-3, 1\\}$"
    ],
    "correctAnswer": 2,
    "explanation": "$x - 3 = 2x \\Rightarrow x = -3$, but then $2x < 0$ (rejected). $-(x - 3) = 2x \\Rightarrow x = 1$, which checks: $|1 - 3| = 2$.",
    "category": ""
  },
  {
    "id": 3,
    "question": "What is the slope of the line whose equation is $5x - 3y = 9$?",
    "options": [
      "$-3$",
      "$-\\frac{5}{3}$",
      "$\\frac{5}{3}$",
      "$5$"
    ],
    "correctAnswer": 2,
    "explanation": "$y = \\frac{5}{3}x - 3$, slope $\\frac{5}{3}$.",
    "category": ""
  },
  {
    "id": 4,
    "question": "What is the complete factorization of $-2x^3 + 4x^2 - 8x$?",
    "options": [
      "$-2x(x^2 - 2x + 4)$",
      "$-4x(x^2 - x + 2)$",
      "$-2(x^2 - 2x^2 + 4x)$",
      "$-4(x^3 - x^2 + 2x)$"
    ],
    "correctAnswer": 0,
    "explanation": "Factor out $-2x$: $-2x(x^2 - 2x + 4)$ (the quadratic does not factor further).",
    "category": ""
  },
  {
    "id": 5,
    "question": "The shape of a certain city park is a regular pentagon. The length of one side is $922$ ft. What is the approximate area, in square feet, of the park?",
    "options": [
      "$4.0$ million",
      "$2.3$ million",
      "$3.6$ million",
      "$1.5$ million"
    ],
    "correctAnswer": 3,
    "explanation": "$A = \\frac{5s^2}{4\\tan 36^\\circ} \\approx 1.72 \\times 922^2 \\approx 1.46$ million ft$^2$.",
    "category": ""
  },
  {
    "id": 6,
    "question": "Of the following, $15$ percent of $\\$8.95$ is closest to:",
    "options": [
      "$\\$1.95$",
      "$\\$1.75$",
      "$\\$1.50$",
      "$\\$1.35$"
    ],
    "correctAnswer": 3,
    "explanation": "$0.15 \\times 8.95 \\approx 1.34$, closest to $\\$1.35$.",
    "category": ""
  },
  {
    "id": 7,
    "question": "Betsy raked leaves from 9:30 a.m. to 11:00 a.m. and finished $\\frac{1}{4}$ of the yard. She wants to finish raking the yard by 6:30 p.m. If she plans to rake at the same rate, what is the latest time that she can start raking the leaves again?",
    "options": [
      "12:30 p.m.",
      "2:00 p.m.",
      "1:00 p.m.",
      "3:30 p.m."
    ],
    "correctAnswer": 1,
    "explanation": "$\\frac{1}{4}$ took $1.5$ h, so the remaining $\\frac{3}{4}$ takes $4.5$ h. $6{:}30 - 4{:}30 = 2{:}00$ p.m.",
    "category": ""
  },
  {
    "id": 8,
    "question": "If $0.39$ is about $\\frac{N}{10}$, then $N$ is closest to which of the following?",
    "options": [
      "$0.4$",
      "$3$",
      "$4$",
      "$39$"
    ],
    "correctAnswer": 2,
    "explanation": "$N \\approx 3.9 \\approx 4$.",
    "category": ""
  },
  {
    "id": 9,
    "question": "In a class, $\\frac{1}{8}$ of the boys and $\\frac{1}{4}$ of the girls play the piano, and $3$ times as many girls as boys play the piano. If there are $100$ boys and girls in the class, how many boys play the piano?",
    "options": [
      "$3$",
      "$5$",
      "$12$",
      "$24$"
    ],
    "correctAnswer": 1,
    "explanation": "Let $b$ boys: $\\frac{1}{4}(100 - b) = 3 \\cdot \\frac{b}{8} \\Rightarrow 25 = \\frac{5b}{8} \\Rightarrow b = 40$. Boys who play: $\\frac{40}{8} = 5$.",
    "category": ""
  },
  {
    "id": 10,
    "question": "In the problems below, $A \\div 17 = 25$ remainder $1$, and $B \\div 17 = 26$. What is $B - A$?",
    "options": [
      "$0$",
      "$1$",
      "$16$",
      "$18$"
    ],
    "correctAnswer": 2,
    "explanation": "$A = 17 \\cdot 25 + 1 = 426$, $B = 17 \\cdot 26 = 442$. $B - A = 16$.",
    "category": "",
    "image": "data:image/png;base64,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"
  },
  {
    "id": 11,
    "question": "A store regularly sells books at $20\\%$ off the list price. At a sale, its regular prices are reduced $10$ percent. The sale price is what percent of the list price?",
    "options": [
      "$30\\%$",
      "$70\\%$",
      "$72\\%$",
      "$79\\%$"
    ],
    "correctAnswer": 2,
    "explanation": "$0.80 \\times 0.90 = 0.72$, i.e. $72\\%$ of list price.",
    "category": ""
  },
  {
    "id": 12,
    "question": "A store has square rugs in three sizes. A side of the largest rug is twice as long as a side of the middle one, and a side of the middle one is twice as long as a side of the smallest one. What is the ratio of the area that the largest rug will cover to the area that the smallest one will cover?",
    "options": [
      "$3$ to $1$",
      "$4$ to $1$",
      "$8$ to $1$",
      "$16$ to $1$"
    ],
    "correctAnswer": 3,
    "explanation": "Sides are in ratio $4 : 1$, so areas are in ratio $4^2 : 1 = 16 : 1$.",
    "category": ""
  },
  {
    "id": 13,
    "question": "With $3$ weeks remaining before the recycling van comes, Al has collected $23$ more cans than Bob. If Bob is to collect more cans than Al, he must average at least how many more cans per week than Al?",
    "options": [
      "$7\\frac{2}{3}$",
      "$8$",
      "$24$",
      "$69$"
    ],
    "correctAnswer": 1,
    "explanation": "Bob needs more than $23$ extra cans in $3$ weeks: more than $7\\frac{2}{3}$ per week, so at least $8$ (cans are whole numbers).",
    "category": ""
  },
  {
    "id": 14,
    "question": "If $y = 2x - 4$, then what does $y + 2$ equal?",
    "options": [
      "$2x - 6$",
      "$2x - 2$",
      "$4x - 6$",
      "$4x - 2$"
    ],
    "correctAnswer": 1,
    "explanation": "$y + 2 = 2x - 4 + 2 = 2x - 2$.",
    "category": ""
  },
  {
    "id": 15,
    "question": "The sale of a certain product increased from $25$ thousand units sold in $1992$ to $5$ million units sold in $1996$. The number of units sold in $1996$ was how many times the number sold in $1992$?",
    "options": [
      "$5$",
      "$20$",
      "$200$",
      "$500$"
    ],
    "correctAnswer": 2,
    "explanation": "$\\frac{5{,}000{,}000}{25{,}000} = 200$.",
    "category": ""
  },
  {
    "id": 16,
    "question": "If $S$ is the sum of two consecutive integers, which of the following is always true?",
    "options": [
      "$S$ is positive",
      "$S$ is negative",
      "$S$ is even",
      "$S$ is odd"
    ],
    "correctAnswer": 3,
    "explanation": "$n + (n + 1) = 2n + 1$, which is always odd.",
    "category": ""
  },
  {
    "id": 17,
    "question": "A string is used to show where the floor of a rectangular patio is to be laid. The width of the patio is to be half the length. If $12$ meters of string just fit around the edges of the floor, what is the length of the patio?",
    "options": [
      "$6$ m",
      "$4$ m",
      "$3$ m",
      "$2$ m"
    ],
    "correctAnswer": 1,
    "explanation": "$2\\left(L + \\frac{L}{2}\\right) = 12 \\Rightarrow 3L = 12 \\Rightarrow L = 4$ m.",
    "category": ""
  },
  {
    "id": 18,
    "question": "Each of the $x$ members in the AZ club may bring up to $4$ guests to a party. What is the maximum number of members and guests who might attend the party?",
    "options": [
      "$x + 4$",
      "$4x$",
      "$4x + 4$",
      "$5x$"
    ],
    "correctAnswer": 3,
    "explanation": "Each member plus up to $4$ guests is $5$ people: $5x$.",
    "category": ""
  },
  {
    "id": 19,
    "question": "Triangle A is similar to Triangle B. If Triangle B has angles measuring $30^\\circ$ and $70^\\circ$, which of the following is the measure of one of the angles of Triangle A?",
    "options": [
      "$20^\\circ$",
      "$40^\\circ$",
      "$60^\\circ$",
      "$80^\\circ$"
    ],
    "correctAnswer": 3,
    "explanation": "Similar triangles have equal angles: $30^\\circ$, $70^\\circ$ and $180^\\circ - 100^\\circ = 80^\\circ$.",
    "category": ""
  },
  {
    "id": 20,
    "question": "Ann's stock was worth $28\\frac{1}{4}$ a share when the stock market opened for the day and its value went down $\\frac{3}{8}$ during the day. If the amounts are in dollars, how many dollars were her $40$ shares of stock worth at the end of the day?",
    "options": [
      "$1{,}080\\frac{7}{8}$",
      "$1{,}115$",
      "$1{,}085$",
      "$1{,}125$"
    ],
    "correctAnswer": 1,
    "explanation": "$28.25 - 0.375 = 27.875$ per share; $27.875 \\times 40 = 1{,}115$.",
    "category": ""
  },
  {
    "id": 21,
    "question": "What is the slope of $3y - 6x = 10$?",
    "options": [
      "$\\frac{1}{2}$",
      "$2$",
      "$3$",
      "$6$"
    ],
    "correctAnswer": 1,
    "explanation": "$y = 2x + \\frac{10}{3}$, slope $2$.",
    "category": ""
  },
  {
    "id": 22,
    "question": "How many numbers between $1$ and $80$ (inclusive) meet both conditions below? Statement 1: The number has a factor of $4$. Statement 2: The number is a multiple of $10$.",
    "options": [
      "$2$",
      "$6$",
      "$4$",
      "$8$"
    ],
    "correctAnswer": 2,
    "explanation": "Multiples of both $4$ and $10$ are multiples of $20$: $20, 40, 60, 80$ — four numbers.",
    "category": ""
  },
  {
    "id": 23,
    "question": "Given that $x \\ge -2$, which of the following expressions is equivalent to the product of $\\sqrt{x + 2}$ and $\\sqrt{(x + 2)^3}$?",
    "options": [
      "$\\pm(x + 2)^{\\frac{3}{4}}$",
      "$x + 2$",
      "$(x + 2)^2$",
      "$(x + 2)^4$"
    ],
    "correctAnswer": 2,
    "explanation": "$(x + 2)^{\\frac{1}{2}} \\cdot (x + 2)^{\\frac{3}{2}} = (x + 2)^2$.",
    "category": ""
  },
  {
    "id": 24,
    "question": "A polynomial function is defined by the equation $p(x) = 2x^2 + ax - 4x - 2a$. If $p(-3) = 0$, what is the value of $a$?",
    "options": [
      "$0$",
      "$2$",
      "$4$",
      "$6$"
    ],
    "correctAnswer": 3,
    "explanation": "$p(-3) = 18 - 3a + 12 - 2a = 30 - 5a = 0 \\Rightarrow a = 6$.",
    "category": ""
  },
  {
    "id": 25,
    "question": "If $f(x) = 9^{2x - 1}$ and $g(x) = 3^{3x + 3}$, for what value of $x$ does $f(x) - g(x) = 0$?",
    "options": [
      "$-4$",
      "$-\\frac{7}{4}$",
      "$-\\frac{10}{7}$",
      "$5$"
    ],
    "correctAnswer": 3,
    "explanation": "$9^{2x - 1} = 3^{4x - 2}$. Set $4x - 2 = 3x + 3 \\Rightarrow x = 5$.",
    "category": ""
  },
  {
    "id": 26,
    "question": "From $1970$ through $1980$, the population of City $Q$ increased by $20\\%$. From $1980$ through $1990$, the population increased by $30\\%$. What was the combined percent increase for the period $1970$–$1990$?",
    "options": [
      "$25\\%$",
      "$50\\%$",
      "$36\\%$",
      "$56\\%$"
    ],
    "correctAnswer": 3,
    "explanation": "$1.20 \\times 1.30 = 1.56$, a $56\\%$ increase.",
    "category": ""
  },
  {
    "id": 27,
    "question": "In complex numbers, where $i^2 = -1$, what is the simplified form of the expression $\\dfrac{(i + 1)(i + 1)}{(i - 1)(i - 1)}$?",
    "options": [
      "$\\frac{i + 1}{i - 1}$",
      "$\\frac{i}{2}$",
      "$\\frac{2}{i}$",
      "$-1$"
    ],
    "correctAnswer": 3,
    "explanation": "$(i + 1)^2 = 2i$ and $(i - 1)^2 = -2i$, so the quotient is $\\frac{2i}{-2i} = -1$.",
    "category": ""
  },
  {
    "id": 28,
    "question": "The expression $x^2 + 6x + m$ can be factored as $(x + k)^2$ for some integer value of $k$. What is the value of $m$?",
    "options": [
      "$1$",
      "$3$",
      "$9$",
      "$36$"
    ],
    "correctAnswer": 2,
    "explanation": "$(x + k)^2 = x^2 + 2kx + k^2$, so $2k = 6 \\Rightarrow k = 3$ and $m = 9$.",
    "category": ""
  },
  {
    "id": 29,
    "question": "The line $y = x + 5$ undergoes a transformation such that every point $(a, b)$ is now $(a, b + 3)$ on the resulting line. What is the equation of the line after the transformation?",
    "options": [
      "$y = 3x + 5$",
      "$y = 3x + 8$",
      "$y = x + 2$",
      "$y = x + 8$"
    ],
    "correctAnswer": 3,
    "explanation": "Shifting up $3$ units: $y = x + 5 + 3 = x + 8$.",
    "category": ""
  },
  {
    "id": 30,
    "question": "An online candle business, open five days a week (Monday through Friday), sells fifteen candles a day its first week. If each week it sells three more candles a day, how many candles in total does that business sell in week $5$?",
    "options": [
      "$24$ candles",
      "$120$ candles",
      "$27$ candles",
      "$135$ candles"
    ],
    "correctAnswer": 3,
    "explanation": "Week $5$: $15 + 4(3) = 27$ candles a day, times $5$ days $= 135$.",
    "category": ""
  },
  {
    "id": 31,
    "question": "How many points of intersection do the following equations have? $y = -\\frac{1}{3}x + 5$ and $y = -x^2 + 8$",
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$3$"
    ],
    "correctAnswer": 2,
    "explanation": "$-x^2 + 8 = -\\frac{1}{3}x + 5 \\Rightarrow x^2 - \\frac{1}{3}x - 3 = 0$. Discriminant $= \\frac{1}{9} + 12 > 0$, so $2$ points.",
    "category": ""
  },
  {
    "id": 32,
    "question": "If $-3x + 7 < 16$, which of the following must be true?",
    "options": [
      "$x > -3$",
      "$x < -3$",
      "$x < -9$",
      "$x > -9$"
    ],
    "correctAnswer": 0,
    "explanation": "$-3x < 9 \\Rightarrow x > -3$.",
    "category": ""
  },
  {
    "id": 33,
    "question": "What is the surface area of a sphere whose largest cross section has an area that measures $16\\pi$ units$^2$?",
    "options": [
      "$64\\pi$ units$^2$",
      "$\\frac{256\\pi}{3}$ units$^2$",
      "$1{,}024\\pi$ units$^2$",
      "It is impossible to determine from the given information."
    ],
    "correctAnswer": 0,
    "explanation": "The largest cross section is a great circle: $\\pi r^2 = 16\\pi \\Rightarrow r = 4$. Surface area $= 4\\pi r^2 = 64\\pi$.",
    "category": ""
  },
  {
    "id": 34,
    "question": "Anja decides to track how long it takes her to get to school each day. After tracking her drive five times, Anja finds that it takes her an average of $27$ minutes to get to school each day. The quickest Anja can get to school, if she encounters no traffic, is $23$ minutes. If on the first day Anja drove to school in $31$ minutes, what is the longest possible time it took Anja to drive to school during those five days?",
    "options": [
      "$29$ minutes",
      "$31$ minutes",
      "$33$ minutes",
      "$35$ minutes"
    ],
    "correctAnswer": 3,
    "explanation": "Total $= 5 \\times 27 = 135$. To maximize one day, make three days $23$ min: $135 - 31 - 69 = 35$ minutes.",
    "category": ""
  },
  {
    "id": 35,
    "question": "What are the solutions to the equation $5|x - 2| + 1 = 16$?",
    "options": [
      "$x = 3$ only",
      "$x = 5$ only",
      "$x = 5$ and $x = 3$",
      "$x = 5$ and $x = -1$"
    ],
    "correctAnswer": 3,
    "explanation": "$|x - 2| = 3 \\Rightarrow x = 5$ or $x = -1$.",
    "category": ""
  },
  {
    "id": 36,
    "question": "The amount of Pollutant A in a lake increases linearly over time, at a rate given by the equation $y = \\frac{3}{2}x + 221$, where $x$ is time in days and $y$ is units of Pollutant A. Pollutant B, on the other hand, is decreasing at the same rate that Pollutant A is increasing. If on Day $0$ there were $108$ units of Pollutant B in the lake, which equation represents the amount of Pollutant B in the lake after $x$ days?",
    "options": [
      "$y = \\frac{2}{3}x + 221$",
      "$y = -\\frac{2}{3}x + 108$",
      "$y = -\\frac{3}{2}x + 108$",
      "$y = -\\frac{3}{2}x - 113$"
    ],
    "correctAnswer": 2,
    "explanation": "Same rate, opposite direction: slope $-\\frac{3}{2}$; starting value $108$.",
    "category": ""
  },
  {
    "id": 37,
    "question": "Which of the following is equivalent to $2\\tan^2 x \\cos^2 x$?",
    "options": [
      "$4\\sin^2 x$",
      "$2 - \\sin^2 x$",
      "$2(1 - \\cos^2 x)$",
      "$\\frac{2}{\\cot x \\sec x}$"
    ],
    "correctAnswer": 2,
    "explanation": "$2 \\cdot \\frac{\\sin^2 x}{\\cos^2 x} \\cdot \\cos^2 x = 2\\sin^2 x = 2(1 - \\cos^2 x)$.",
    "category": ""
  },
  {
    "id": 38,
    "question": "Which of the following is NOT an $x$-intercept of $y = x^3 - 4x^2 - 21x$?",
    "options": [
      "$(-7, 0)$",
      "$(-3, 0)$",
      "$(0, 0)$",
      "$(7, 0)$"
    ],
    "correctAnswer": 0,
    "explanation": "$x(x^2 - 4x - 21) = x(x - 7)(x + 3)$: intercepts at $0$, $7$, $-3$. $(-7, 0)$ is not one.",
    "category": ""
  },
  {
    "id": 39,
    "question": "A line is tangent to the circle $25 = (x + 1)^2 + (y + 4)^2$ at $(-4, 0)$. What is the slope of that line?",
    "options": [
      "$-\\frac{4}{3}$",
      "$\\frac{1}{4}$",
      "$\\frac{3}{5}$",
      "$\\frac{3}{4}$"
    ],
    "correctAnswer": 3,
    "explanation": "Radius from center $(-1, -4)$ to $(-4, 0)$ has slope $\\frac{4}{-3} = -\\frac{4}{3}$. The tangent is perpendicular: slope $\\frac{3}{4}$.",
    "category": ""
  },
  {
    "id": 40,
    "question": "What is the solution set for the equation $\\left|\\frac{2 - x}{7}\\right| = \\left|\\frac{x + 3}{5}\\right|$?",
    "options": [
      "$\\left\\{\\frac{11}{12}\\right\\}$",
      "$\\left\\{-\\frac{11}{12}\\right\\}$",
      "$\\left\\{-\\frac{11}{12}, \\frac{11}{6}\\right\\}$",
      "$\\left\\{-\\frac{11}{12}, -\\frac{31}{2}\\right\\}$"
    ],
    "correctAnswer": 3,
    "explanation": "$5(2 - x) = 7(x + 3) \\Rightarrow x = -\\frac{11}{12}$; $5(2 - x) = -7(x + 3) \\Rightarrow 2x = -31 \\Rightarrow x = -\\frac{31}{2}$.",
    "category": ""
  },
  {
    "id": 41,
    "question": "These tables show some ordered pairs from two linear equations. What is the $x$-coordinate of the solution to the system of equations?",
    "options": [
      "$-2$",
      "$-1$",
      "$2$",
      "$7$"
    ],
    "correctAnswer": 0,
    "explanation": "Both tables contain the point $(-2, 7)$, so the solution has $x = -2$. (Equation 1: $y = -2x + 3$; Equation 2: $y = -5x - 3$.)",
    "category": "",
    "svg": "<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Equation 1: $x$</th><th class=\"border border-gray-400 px-2 py-1\">$-3$</th><th class=\"border border-gray-400 px-2 py-1\">$-2$</th><th class=\"border border-gray-400 px-2 py-1\">$0$</th><th class=\"border border-gray-400 px-2 py-1\">$2$</th></tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$y$</td><td class=\"border border-gray-400 px-2 py-1\">$9$</td><td class=\"border border-gray-400 px-2 py-1\">$7$</td><td class=\"border border-gray-400 px-2 py-1\">$3$</td><td class=\"border border-gray-400 px-2 py-1\">$-1$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">Equation 2: $x$</td><td class=\"border border-gray-400 px-2 py-1\">$-2$</td><td class=\"border border-gray-400 px-2 py-1\">$-1$</td><td class=\"border border-gray-400 px-2 py-1\">$1$</td><td class=\"border border-gray-400 px-2 py-1\">$3$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$y$</td><td class=\"border border-gray-400 px-2 py-1\">$7$</td><td class=\"border border-gray-400 px-2 py-1\">$2$</td><td class=\"border border-gray-400 px-2 py-1\">$-8$</td><td class=\"border border-gray-400 px-2 py-1\">$-18$</td></tr>\n  </tbody>\n</table>"
  },
  {
    "id": 42,
    "question": "If $\\sqrt{w}$ is greater than $8$, which of the following could be the value of $w$?",
    "options": [
      "$9$",
      "$16$",
      "$49$",
      "$81$"
    ],
    "correctAnswer": 3,
    "explanation": "$\\sqrt{w} > 8 \\Rightarrow w > 64$; only $81$ works.",
    "category": ""
  },
  {
    "id": 43,
    "question": "Which of the following pairs of lines are parallel?",
    "options": [
      "$3y = 2x - 1$ and $y = -\\frac{3}{2}x + 1$",
      "$y = 2x + 1$ and $y = 1 - 2x$",
      "$\\frac{1}{2}x - y = 2$ and $2y = x - 1$",
      "$2y = 5x$ and $5y = 2x$"
    ],
    "correctAnswer": 2,
    "explanation": "In C both lines have slope $\\frac{1}{2}$ ($y = \\frac{1}{2}x - 2$ and $y = \\frac{1}{2}x - \\frac{1}{2}$) with different intercepts.",
    "category": ""
  },
  {
    "id": 44,
    "question": "For all $m$ and $n$, $-m(n - m) + n(m - n) =$",
    "options": [
      "$m^2 + n^2$",
      "$(m - n)^2$",
      "$(m + n)^2$",
      "$m^2 - n^2$"
    ],
    "correctAnswer": 3,
    "explanation": "$-mn + m^2 + mn - n^2 = m^2 - n^2$.",
    "category": ""
  },
  {
    "id": 45,
    "question": "Two sides of a triangle have lengths $7$ and $2$. Which of the following could be the perimeter of this triangle?",
    "options": [
      "$9$",
      "$11$",
      "$14$",
      "$16$"
    ],
    "correctAnswer": 3,
    "explanation": "The third side is between $7 - 2 = 5$ and $7 + 2 = 9$, so the perimeter is between $14$ and $18$ (exclusive): $16$.",
    "category": ""
  },
  {
    "id": 46,
    "question": "A plane intersects a hexagonal prism. The plane is perpendicular to the base of the prism. Which two-dimensional figure is the cross-section of the plane intersecting the prism?",
    "options": [
      "Triangle",
      "Trapezoid",
      "Hexagon",
      "Rectangle"
    ],
    "correctAnswer": 3,
    "explanation": "A plane perpendicular to the base cuts the prism's vertical faces in vertical segments, giving a rectangle.",
    "category": ""
  },
  {
    "id": 47,
    "question": "A water cup in the shape of a cone has a height of $4$ inches and a maximum diameter of $3$ inches. What is the volume of the water in the cup, to the nearest tenth of a cubic inch, when the cup is filled to half its height?",
    "options": [
      "$1.2$",
      "$3.5$",
      "$4.7$",
      "$14.1$"
    ],
    "correctAnswer": 0,
    "explanation": "At half height ($2$ in), the water's radius is half of $1.5$, i.e. $0.75$ in. $V = \\frac{1}{3}\\pi(0.75)^2(2) \\approx 1.2$ in$^3$.",
    "category": ""
  },
  {
    "id": 48,
    "question": "A regular pyramid has a square base. The perimeter of the base is $36$ inches and the height of the pyramid is $15$ inches. What is the volume of the pyramid in cubic inches?",
    "options": [
      "$180$",
      "$405$",
      "$540$",
      "$1215$"
    ],
    "correctAnswer": 1,
    "explanation": "Base side $9$, base area $81$. $V = \\frac{1}{3}(81)(15) = 405$.",
    "category": ""
  },
  {
    "id": 49,
    "question": "A student is constructing a triangle for a geometry assignment. The teacher has specified these requirements: the perimeter of the triangle is $30$ cm; the lengths of all $3$ sides are whole numbers of centimeters; the shortest side of the triangle is $7$ cm. How many different lengths are possible for the longest side of the triangle?",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    "correctAnswer": 1,
    "explanation": "Other two sides $a \\le b$ with $a + b = 23$, $a \\ge 7$. Triangle inequality: $b < 7 + a = 30 - b \\Rightarrow b < 15$; and $b \\ge 11.5$. So $b = 12, 13, 14$: $3$ lengths.",
    "category": ""
  },
  {
    "id": 50,
    "question": "In the diagram below, two concentric circles with center $O$, and radii $\\overline{OC}$, $\\overline{OD}$, $\\overline{OCE}$, and $\\overline{ODF}$ are drawn. If $OC = 4$ and $OE = 6$, which relationship between the length of arc $EF$ and the length of arc $CD$ is always true?",
    "options": [
      "The length of arc $EF$ is $2$ units longer than the length of arc $CD$.",
      "The length of arc $EF$ is $4$ units longer than the length of arc $CD$.",
      "The length of arc $EF$ is $1.5$ times the length of arc $CD$.",
      "The length of arc $EF$ is $2.0$ times the length of arc $CD$."
    ],
    "correctAnswer": 2,
    "explanation": "Both arcs have the same central angle, so their lengths are proportional to the radii: $\\frac{6}{4} = 1.5$.",
    "category": "",
    "image": "data:image/png;base64,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"
  }
];
