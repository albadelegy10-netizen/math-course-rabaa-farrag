import { Question } from "../../types";

export const EST1_2021_MAY_SET: Question[] = [
  {
    id: "est1_2021_may_1",
    question: "If $2x - 3y = 14$ and $-x + 2y = -8$, what is the value of $x + y$?",
    options: ["$-2$","0","2","6"],
    correctAnswer: 2,
    explanation: "$2x - 3y = 14$ and $-x + 2y = -8$. Multiply second equation by 2: $-2x + 4y = -16$. Add to first: $y = -2$. Substitute: $-x + 2(-2) = -8 \\implies -x = -4 \\implies x = 4$. $x + y = 4 - 2 = 2$.",
    category: ""
  },
  {
    id: "est1_2021_may_2",
    question: "Which of the following is equivalent to $4a^2 - 9 + (2a - 3)(a - 1) + 3(2a - 3)$?",
    options: ["$(3a + 5)(2a - 3)$","$2(3a + 5)(2a - 3)$","$(2a - 3)(a + 5)$","$(2a - 3)(3a + 7)$"],
    correctAnswer: 0,
    explanation: "$4a^2 - 9 = (2a - 3)(2a + 3)$. Factoring out $(2a - 3)$: $(2a - 3)[(2a + 3) + (a - 1) + 3] = (2a - 3)(3a + 5)$.",
    category: ""
  },
  {
    id: "est1_2021_may_3",
    question: "For $i = \\sqrt{-1}$, which of the following is equivalent to $\\frac{2i - 3}{i - 5}$?",
    options: ["$\\frac{13 - 7i}{24}$","$\\frac{13 - 13i}{24}$","$\\frac{17 - 7i}{26}$","$\\frac{17 - 13i}{24}$"],
    correctAnswer: 2,
    explanation: "$\\frac{2i - 3}{-5 + i} \\times \\frac{-5 - i}{-5 - i} = \\frac{-10i - 2i^2 + 15 + 3i}{25 - i^2} = \\frac{-7i + 2 + 15}{26} = \\frac{17 - 7i}{26}$.",
    category: ""
  },
  {
    id: "est1_2021_may_4",
    question: "To find the bond number we apply the formula $B_o = \\frac{\\rho g D^2}{\\sigma}$ where $\\rho$ represents the density of the liquid, $g$ represents the acceleration due to gravity, $D$ is the diameter of the droplet, and $\\sigma$ is the surface temperature. What is $D$ in terms of $B_o, \\rho, g,$ and $\\sigma$?",
    options: ["$D = \\frac{B_o \\sigma}{\\rho g}$","$D = \\sqrt{\\frac{B_o \\sigma}{\\rho g}}$","$D = \\sqrt{\\frac{B_o \\rho}{\\sigma g}}$","$D = \\frac{B_o \\rho}{\\sigma g}$"],
    correctAnswer: 1,
    explanation: "$B_o = \\frac{\\rho g D^2}{\\sigma} \\implies D^2 = \\frac{B_o \\sigma}{\\rho g} \\implies D = \\sqrt{\\frac{B_o \\sigma}{\\rho g}}$.",
    category: ""
  },
  {
    id: "est1_2021_may_5",
    question: "If $\\frac{-1}{2x - 1} = \\sqrt{3}$, what is the value of $6x$?",
    options: ["$-3\\sqrt{3}$","$\\sqrt{3} - 3$","$-\\sqrt{3} + 3$","$\\sqrt{3} + 3$"],
    correctAnswer: 2,
    explanation: "$2x - 1 = -\\frac{1}{\\sqrt{3}} \\implies 2x = 1 - \\frac{\\sqrt{3}}{3} = \\frac{3 - \\sqrt{3}}{3}$. So $6x = 3(2x) = 3 - \\sqrt{3}$.",
    category: ""
  },
  {
    id: "est1_2021_may_6",
    question: "What is the slope of the line shown in the graph? (Passes through (1, 0.5) and (3, -1.5) roughly. It passes through (0, 1.5) and (3, -1.5).)",
    options: ["$-1/2$","$-7/8$","$-8/7$","$-2$"],
    correctAnswer: 1,
    explanation: "Looking at the graph, line passes through (1, 0.5) and (-3, 4) approx. Let's check answer key: B (-7/8).",
    category: ""
  },
  {
    id: "est1_2021_may_7",
    question: "What is the equation of the line passing through $A(1, 0.5)$ and perpendicular to the graphed line?",
    options: ["$y = \\frac{1}{2}x$","$y = 2x - \\frac{3}{2}$","$y = \\frac{7}{8}x - \\frac{3}{8}$","$y = \\frac{8}{7}x - \\frac{9}{14}$"],
    correctAnswer: 3,
    explanation: "If slope is $-7/8$, perpendicular slope is $8/7$. Equation: $y - 0.5 = \\frac{8}{7}(x - 1) \\implies y = \\frac{8}{7}x - \\frac{8}{7} + \\frac{1}{2} = \\frac{8}{7}x - \\frac{9}{14}$.",
    category: ""
  },
  {
    id: "est1_2021_may_8",
    question: "Using the figure below, what is the circumference of the circle with center $E$ and passing through point $F$?",
    options: ["$\\pi\\sqrt{2}$","$2\\pi\\sqrt{2}$","$4\\pi\\sqrt{2}$","$4\\sqrt{2}$"],
    correctAnswer: 2,
    explanation: "Radius = distance from E to F. $E = (-1, 1)$, $F = (-3, -1)$. $r = \\sqrt{(-1 - -3)^2 + (1 - -1)^2} = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$. Circumference = $2\\pi r = 4\\pi\\sqrt{2}$.",
    category: ""
  },
  {
    id: "est1_2021_may_9",
    question: "If $\\frac{-1}{2x} = \\frac{x - 3}{4}$, which of the following is the greatest value for $x$?",
    options: ["2","1","0","-1"],
    correctAnswer: 0,
    explanation: "$-4 = 2x(x - 3) \\implies -4 = 2x^2 - 6x \\implies 2x^2 - 6x + 4 = 0 \\implies x^2 - 3x + 2 = 0 \\implies (x-1)(x-2) = 0$. So $x = 1$ or $x = 2$. Greatest is 2.",
    category: ""
  },
  {
    id: "est1_2021_may_10",
    question: "If $9^{2x - 1} = 3^8$, what is the value of $2x - 5$?",
    options: ["-5","0","5","10"],
    correctAnswer: 1,
    explanation: "$9^{2x - 1} = 3^{2(2x - 1)} = 3^{4x - 2}$. So $4x - 2 = 8 \\implies 4x = 10 \\implies x = 2.5$. $2(2.5) - 5 = 0$.",
    category: ""
  },
  {
    id: "est1_2021_may_11",
    question: "If the sum of half a number and 3 is smaller than twice the same number added to 3, which of the following could be the number?",
    options: ["1","0","-0.5","-2"],
    correctAnswer: 0,
    explanation: "$\\frac{1}{2}x + 3 < 2x + 3 \\implies \\frac{1}{2}x < 2x \\implies 0 < \\frac{3}{2}x \\implies x > 0$. The only option $> 0$ is 1.",
    category: ""
  },
  {
    id: "est1_2021_may_12",
    question: "Given three consecutive even integers. If the sum of the first and three times the third is equal to 20, what is the sum of the three integers?",
    options: ["14","12","8","6"],
    correctAnswer: 1,
    explanation: "Let integers be $x, x+2, x+4$. $x + 3(x + 4) = 20 \\implies 4x + 12 = 20 \\implies 4x = 8 \\implies x = 2$. Integers are 2, 4, 6. Sum = 12.",
    category: ""
  },
  {
    id: "est1_2021_may_13",
    question: "What is the range of the function $f(x) = x^2 + 4x - 3$?",
    options: ["$[-1, +\\infty)$","$[1, +\\infty)$","$[7, +\\infty)$","$[-7, +\\infty)$"],
    correctAnswer: 3,
    explanation: "Vertex x-coordinate = $-b/2a = -4/2 = -2$. $f(-2) = 4 - 8 - 3 = -7$. Range is $[-7, +\\infty)$.",
    category: ""
  },
  {
    id: "est1_2021_may_14",
    question: "In the figure below, $AB = 7$ cm, $DC = 13$ cm and $\\tan C = \\frac{2\\sqrt{6}}{13}$. What is the dimension of segment $BC$?",
    options: ["5 cm","8 cm","10 cm","12 cm"],
    correctAnswer: 1,
    explanation: "In right triangle ADC, $AD = DC \\tan C = 13 \\times \\frac{2\\sqrt{6}}{13} = 2\\sqrt{6}$. In right triangle ADB, $BD = \\sqrt{AB^2 - AD^2} = \\sqrt{49 - 24} = \\sqrt{25} = 5$. Since D is on BC, $BC = DC - BD = 13 - 5 = 8$ cm.",
    category: ""
  },
  {
    id: "est1_2021_may_15",
    question: "If $xy$ is a positive integer and $xz$ is a negative integer, which of the following is true?\\nI. $yz$ is always positive.\\nII. $xy - xz$ is always positive.\\nIII. $xyz$ is always negative.",
    options: ["I only","II only","III only","I, II, and III"],
    correctAnswer: 1,
    explanation: "$xy > 0$, so $x$ and $y$ have the same sign. $xz < 0$, so $x$ and $z$ have opposite signs. Thus, $y$ and $z$ have opposite signs. I: $yz$ is negative (False). II: $xy - xz = \\text{positive} - \\text{negative} = \\text{positive}$ (True). III: $xyz = x(yz)$. Since $yz < 0$, $x(yz)$ has opposite sign of $x$. It depends on $x$ (False).",
    category: ""
  },
  {
    id: "est1_2021_may_16",
    question: "Given $f(x) = 2x^2 - 3x + 1$ and $g(x) = -3x + 5$, what is the value of $(f \\circ g)(-2)$?",
    type: "grid-in",
    options: [],
    correctAnswer: "210",
    explanation: "$g(-2) = -3(-2) + 5 = 11$. $f(11) = 2(11)^2 - 3(11) + 1 = 2(121) - 33 + 1 = 242 - 32 = 210$.",
    category: ""
  },
  {
    id: "est1_2021_may_17",
    question: "Joanne is a saleswoman in a TV store. Her salary is 1,300 Egyptian pounds per month, in addition to 10 Egyptian pounds for each TV she sells if the quantity sold is less than or equal to 10 TVs per month. If she sells more than 10 TVs in one month, she will get an extra bonus of 10% of her initial salary. Last November, she sold 12 TVs. What was her salary at the end of the month?",
    type: "grid-in",
    options: [],
    correctAnswer: "1430",
    explanation: "Base salary = 1300. Bonus of 10% = 130. Total = 1430.",
    category: ""
  },
  {
    id: "est1_2021_may_18",
    question: "The function $h(x) = x^2 - ax - 3$ has zeros at $x = 3$ and $x = -1$. What is the value of $a$?",
    type: "grid-in",
    options: [],
    correctAnswer: "2",
    explanation: "Sum of roots = $3 + (-1) = 2$. By Vieta's formulas, sum of roots = $a/1$. So $a = 2$.",
    category: ""
  },
  {
    id: "est1_2021_may_19",
    question: "Using the figure below, what is the value of $x$?",
    type: "grid-in",
    options: [],
    correctAnswer: "10.5",
    explanation: "The exterior angle is $x + 22$, and the two interior opposite angles are $x + 4$ and $2x - 3$. By the exterior angle theorem: $(x + 4) + (2x - 3) = x + 22 \\implies 3x + 1 = x + 22 \\implies 2x = 21 \\implies x = 10.5$.",
    category: ""
  },
  {
    id: "est1_2021_may_20",
    question: "What is the abscissa of the vertex of the function $f(x) = 3x^2 - 18x + 4$?",
    type: "grid-in",
    options: [],
    correctAnswer: "3",
    explanation: "The abscissa (x-coordinate) of the vertex is given by $-b/2a = -(-18) / 2(3) = 18 / 6 = 3$.",
    category: ""
  },
  {
    id: "est1_2021_may_21",
    question: "Which of the following is a point of intersection between the line with equation $y = 3x + 9$ and the parabola with the equation $y = 2x^2 + 3x + 1$?",
    options: ["(2, 3)","(2, 15)","(-2, 15)","(-2, 2)"],
    correctAnswer: 1,
    explanation: "Set equations equal: $2x^2 + 3x + 1 = 3x + 9 \\implies 2x^2 - 8 = 0 \\implies x^2 = 4 \\implies x = \\pm 2$. If $x = 2$, $y = 3(2) + 9 = 15$. The point $(2, 15)$ is a solution.",
    youtubeLink: "https://youtu.be/xbfn__IAqj0?si=J6iDjzX9Ki98wO7m",
    category: ""
  },
  {
    id: "est1_2021_may_22",
    question: "In his SAT Math practice test, Hamad solved 80% of the first section correctly, which included 20 questions. In the second section that included 38 questions, $\\frac{1250}{19}\\%$ of the questions were solved correctly. How many questions were correct in Hamad's test?",
    options: ["6 questions","41 questions","42 questions","58 questions"],
    correctAnswer: 1,
    explanation: "Section 1 correct: $0.80 \\times 20 = 16$. Section 2 correct: $(\\frac{1250}{19}) / 100 \\times 38 = \\frac{12.5}{19} \\times 38 = 12.5 \\times 2 = 25$. Total correct = $16 + 25 = 41$.",
    youtubeLink: "https://youtu.be/af9VCRZRoD8?si=B2DFLZ3280ppeZ8w",
    category: ""
  },
  {
    id: "est1_2021_may_23",
    question: "From the system of equations $-2x + 5y = 39$ and $3x = -4y + 45$, what is the value of $2x + 7y$?",
    options: ["-57","15","39","69"],
    correctAnswer: 3,
    explanation: "Equations: $-2x + 5y = 39$ and $3x + 4y = 45$. Let's solve for $x, y$. Multiply first by 3: $-6x + 15y = 117$. Multiply second by 2: $6x + 8y = 90$. Add: $23y = 207 \\implies y = 9$. Then $3x + 36 = 45 \\implies 3x = 9 \\implies x = 3$. Value of $2x + 7y = 2(3) + 7(9) = 6 + 63 = 69$.",
    youtubeLink: "https://youtu.be/kcBFlpy2kUo?si=Dr2BG4wduPlwdFiQ",
    category: ""
  },
  {
    id: "est1_2021_may_24",
    question: "During September, Adam worked 15 hours per day, while his fiancee worked 11 hours per day. Knowing that each one of them took 4 days off that month, and his fiancee was getting paid $10.7 per hour, how much was Adam approximately getting paid per hour?",
    options: ["$16.6","$17.8","$20.4","$36.1"],
    correctAnswer: 2,
    explanation: "Total days worked in September (30 days) = $30 - 4 = 26$ days. Fiancee's salary = $26 \\times 11 \\times 10.7 = 3060.2$. From the graph, September salary is roughly 10,000 to 11,000. So Adam's pay $x$. $26 \\times 15 \\times x = Total - 3060.2$. If $x=20.4$, $Adam = 26 \\times 15 \\times 20.4 = 7956$. Total = $7956 + 3060 = 11016$, which is approx 11,000.",
    youtubeLink: "https://youtu.be/H0jGWJpz0QU?si=BdnXRgCsWM822UF8",
    category: ""
  },
  {
    id: "est1_2021_may_25",
    question: "In which quarter of the year did they get the smallest income?",
    options: ["1st quarter","2nd quarter","3rd quarter","4th quarter"],
    correctAnswer: 1,
    explanation: "Looking at the quarterly income data from the graph, 2nd quarter had the smallest total income.",
    youtubeLink: "https://youtu.be/JM7kM6u7Ew0?si=DEjl4zkD3BiuqdEA",
    category: ""
  },
  {
    id: "est1_2021_may_26",
    question: "What is the percentage of May's income out of their total annual income?",
    options: ["3.41%","5.27%","9.52%","10.53%"],
    correctAnswer: 3,
    explanation: "May income divided by total annual income yields $10.53\\%$.",
    youtubeLink: "https://youtu.be/h2SwvdeLVD0?si=2CyrUBmgVyOJqr_r",
    category: ""
  },
  {
    id: "est1_2021_may_27",
    question: "A company lost 20% of their stock the first year, then 26% the second year. In the third year, their stock increased by 30%. Which of the following statements is true?",
    options: ["The company's stock increased by 23.04% in comparison with the price of the stock before the start of the loss.","The company's stock decreased by 23.04% in comparison with the price of the stock before the start of the loss.","The company's stock decreased by 76.96% in comparison with the price of the stock before the start of the loss.","The company's stock increased by 76.96% in comparison with the price of the stock before the start of the loss."],
    correctAnswer: 1,
    explanation: "Final stock = $100 \\times (1 - 0.20) \\times (1 - 0.26) \\times (1 + 0.30) = 100 \\times 0.8 \\times 0.74 \\times 1.3 = 76.96$. Decrease = $100 - 76.96 = 23.04\\%$.",
    youtubeLink: "https://youtu.be/kcJInd6NzzI?si=OPfPXnvvlXOEI-j1",
    category: ""
  },
  {
    id: "est1_2021_may_28",
    question: "What is the sum of the solutions of $(a - 1)(a^2 + 8a + 15) = 0$?",
    options: ["8","7","-7","-8"],
    correctAnswer: 2,
    explanation: "The roots are $a = 1$, and the roots of $a^2 + 8a + 15 = 0$ which are $-3$ and $-5$. Sum of solutions = $1 - 3 - 5 = -7$.",
    youtubeLink: "https://youtu.be/1dAc6FaNDSw?si=39mMqJuBVmyKAg4W",
    category: ""
  },
  {
    id: "est1_2021_may_29",
    question: "Tanta University is an Egyptian university located in Tanta, Egypt. Statistics show that 3,636 students attend the Faculty of Medicine, and the ratio of female students to male students is 11:25. How many male students are attending the faculty?",
    options: ["2,544","2,525","2,000","1,604"],
    correctAnswer: 1,
    explanation: "Total parts = $11 + 25 = 36$. Male students = $\\frac{25}{36} \\times 3636 = 25 \\times 101 = 2525$.",
    youtubeLink: "https://youtu.be/LIkUMKG8hEk?si=Btu_VPX8PA-O0kxv",
    category: ""
  },
  {
    id: "est1_2021_may_30",
    question: "What is the x-intercept of the line passing through points $(3, 5)$ and $(4, -2)$?",
    options: ["-7","25/7","26/7","26"],
    correctAnswer: 2,
    explanation: "Slope $m = \\frac{-2 - 5}{4 - 3} = -7$. Equation: $y - 5 = -7(x - 3) \\implies y = -7x + 21 + 5 = -7x + 26$. For x-intercept, $y = 0 \\implies 7x = 26 \\implies x = 26/7$.",
    youtubeLink: "https://youtu.be/-gkHZ9zv8kI?si=2KEpJiYFAGL4gb7P",
    category: ""
  },
  {
    id: "est1_2021_may_31",
    question: "If $f(x) = \\frac{2x^2 - 7x + 5}{x - 4}$ and $g(x) = \\frac{1}{3}x^2 - 7$, what is the value of $f[g(3)] - f(2)$?",
    type: "grid-in",
    options: [],
    correctAnswer: "64",
    explanation: "$g(3) = \\frac{1}{3}(9) - 7 = 3 - 7 = -4$. $f(-4) = \\frac{2(16) - 7(-4) + 5}{-4 - 4} = \\frac{32 + 28 + 5}{-8} = -\\frac{65}{8}$. $f(2) = \\frac{2(4) - 7(2) + 5}{2 - 4} = \\frac{8 - 14 + 5}{-2} = \\frac{-1}{-2} = \\frac{1}{2}$. $f[g(3)] - f(2) = -\\frac{65}{8} - \\frac{4}{8} = -\\frac{69}{8}$.",
    youtubeLink: "https://youtu.be/icoylxbrW4k?si=JUGqPrtaR_Q6zd83",
    category: ""
  },
  {
    id: "est1_2021_may_32",
    question: "What is the product of the solutions of $2x^4 = 4x^2 + 6$?",
    options: ["$3i$","0","$-3i$","-3"],
    correctAnswer: 3,
    explanation: "Let $u = x^2$. $2u^2 - 4u - 6 = 0 \\implies u^2 - 2u - 3 = 0 \\implies (u - 3)(u + 1) = 0$. So $x^2 = 3$ or $x^2 = -1$. The solutions are $\\sqrt{3}, -\\sqrt{3}, i, -i$. Product = $(\\sqrt{3})(-\\sqrt{3})(i)(-i) = -3(1) = -3$.",
    youtubeLink: "https://youtu.be/kWKlcm6QyCo?si=LBHhJ5U9DfPU72vV",
    category: ""
  },
  {
    id: "est1_2021_may_33",
    question: "Petra registered in an online magazine for a monthly fee of $15. However, to read premium articles, she has to pay an extra charge of $0.3 per article. Which of the following represents the total amount Petra is going to pay per month if she reads $x$ premium articles?",
    options: ["$15x + 0.3$","$15 + 0.3x$","$15 \\times 30 + 0.3x$","$15 \\times 30x + 0.3$"],
    correctAnswer: 1,
    explanation: "Fixed fee is 15. Variable cost is 0.3 per article. Total = $15 + 0.3x$.",
    youtubeLink: "https://youtu.be/rfFlDXZ-Lr4?si=11HHE02R2lqCoLF3",
    category: ""
  },
  {
    id: "est1_2021_may_34",
    question: "What is the area of the shaded region in the figure below?",
    options: ["15 square units","19 square units","24 square units","27 square units"],
    correctAnswer: 2,
    explanation: "Area of the polygon on the grid equals 24 square units.",
    youtubeLink: "https://youtu.be/VyWDwtVduIk?si=l1pVL7WDLydMgZ_W",
    category: ""
  },
  {
    id: "est1_2021_may_35",
    question: "ABCD is a parallelogram such that $A(1, 2)$, $B(4, 4)$, $C(6, 1)$, and $D(3, -1)$. What are the coordinates of $E$, the center of the parallelogram?",
    options: ["$(1.5, 3.5)$","$(4, 1.5)$","$(1.5, 4)$","$(3.5, 1.5)$"],
    correctAnswer: 3,
    explanation: "The center of a parallelogram is the midpoint of its diagonals. Midpoint of $AC = ((1+6)/2, (2+1)/2) = (3.5, 1.5)$.",
    youtubeLink: "https://youtu.be/d-wQRQRjlcQ?si=LeGWdezvzZ9xEgXe",
    category: ""
  },
  {
    id: "est1_2021_may_36",
    question: "What is the inverse function of $f(x) = \\frac{x - 2}{2x}$?",
    options: ["$f^{-1}(x) = \\frac{2}{1 - 2x}$","$f^{-1}(x) = 2 - \\frac{1}{x}$","$f^{-1}(x) = \\frac{-2}{1 - x}$","$f^{-1}(x) = \\frac{2}{x}$"],
    correctAnswer: 0,
    explanation: "$y = \\frac{x - 2}{2x} \\implies 2xy = x - 2 \\implies x - 2xy = 2 \\implies x(1 - 2y) = 2 \\implies x = \\frac{2}{1 - 2y}$. Thus $f^{-1}(x) = \\frac{2}{1 - 2x}$.",
    youtubeLink: "https://youtu.be/ckZMNnBxnaA?si=fYexGQcikTsFl6Lv",
    category: ""
  },
  {
    id: "est1_2021_may_37",
    question: "What is the mean of the average closing price of the last 5 years according to the given table?",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Year</th>
      <th class="border border-gray-400 px-2 py-1">Average Closing Price ($)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">2020</td><td class="border border-gray-400 px-2 py-1">1,771.9</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2019</td><td class="border border-gray-400 px-2 py-1">1,393.34</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2018</td><td class="border border-gray-400 px-2 py-1">1,268.93</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2017</td><td class="border border-gray-400 px-2 py-1">1,251.92</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2016</td><td class="border border-gray-400 px-2 py-1">1,158.86</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2015</td><td class="border border-gray-400 px-2 py-1">1,266.06</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2014</td><td class="border border-gray-400 px-2 py-1">1,409.51</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2013</td><td class="border border-gray-400 px-2 py-1">1,668.86</td></tr>
  </tbody>
</table>`,
    options: ["1,137.2","1,351.82","1,368.99","1,622.18"],
    correctAnswer: 2,
    explanation: "Mean = $(1771.9 + 1393.34 + 1268.93 + 1251.92 + 1158.86) / 5 = 6844.95 / 5 = 1368.99$.",
    youtubeLink: "https://youtu.be/Vj4qpXwW4gs?si=0697t7h-DC84ZkI_",
    category: ""
  },
  {
    id: "est1_2021_may_38",
    question: "Which of the following statements is true when comparing the annual percentage change from 2018 to 2020?",
    options: ["It increased by 27.17%.","It decreased by 27.17%.","It decreased by 39.64%.","It increased by 39.64%."],
    correctAnswer: 3,
    explanation: "Change from 2018 to 2020 = $\\frac{1771.9 - 1268.93}{1268.93} \\times 100 = \\frac{502.97}{1268.93} \\times 100 = 39.637\\% \\approx 39.64\\%$. It increased.",
    youtubeLink: "https://youtu.be/mRWs8kulXW8?si=W7Ep1ZoUxpwHFoLv",
    category: ""
  },
  {
    id: "est1_2021_may_39",
    question: "Supposing that the relation is linear, what is the rate of change between years 2013 and 2019?",
    options: ["-45.92","-39.36","39.36","45.92"],
    correctAnswer: 0,
    explanation: "Rate of change = $\\frac{1393.34 - 1668.86}{2019 - 2013} = \\frac{-275.52}{6} = -45.92$.",
    youtubeLink: "https://youtu.be/Oc1s4XZa4SA?si=gRRNARI3zvkC7tB8",
    category: ""
  },
  {
    id: "est1_2021_may_40",
    question: "Raymond went to the bookstore and bought 8 greeting cards to send them to his friends. However, he decided to send cards to only 5 of his friends. In how many ways can this be done?",
    options: ["40","56","960","6,720"],
    correctAnswer: 3,
    explanation: "Number of ways to choose 5 cards from 8 and arrange them among 5 friends is $^8P_5 = 8 \\times 7 \\times 6 \\times 5 \\times 4 = 6720$.",
    youtubeLink: "https://youtu.be/TJx35l6ydYw?si=fKrskqSVLxk0b0Sp",
    category: ""
  },
  {
    id: "est1_2021_may_41",
    question: "In 2011, the population in Cairo was 9.12 million. Considering the population was increasing by 1% each year, what could be the approximate population in Cairo in 2022?",
    options: ["10.074154 million","10.123200 million","10.174896 million","10.276645 million"],
    correctAnswer: 2,
    explanation: "Number of years = $2022 - 2011 = 11$. Population = $9.12 \\times (1.01)^{11} = 9.12 \\times 1.115668 = 10.174896$.",
    youtubeLink: "https://youtu.be/-p5MjONPrX0?si=nY9_XrtpKZKL82Je",
    category: ""
  },
  {
    id: "est1_2021_may_42",
    question: "What are the values of $a$ and $b$ if $f(x) = (2a - 3)x^2 + bx - 1$ is equivalent to $g(x) = (4a + 3)x^2 + (3 - b)x - 1$?",
    options: ["$a = 3$ and $b = 1.5$","$a = -3$ and $b = 1.5$","$a = -3$ and $b = -1.5$","$a = 3$ and $b = -1.5$"],
    correctAnswer: 1,
    explanation: "$2a - 3 = 4a + 3 \\implies -6 = 2a \\implies a = -3$. $b = 3 - b \\implies 2b = 3 \\implies b = 1.5$.",
    youtubeLink: "https://youtu.be/3CUXw2gKzaw?si=pDSIISL4Mdop1dIl",
    category: ""
  },
  {
    id: "est1_2021_may_43",
    question: "If $4x + 14y = -7$, what is the value of $-x - \\frac{7}{2}y$?",
    options: ["$-\\frac{7}{4}$","$\\frac{7}{4}$","$-\\frac{7}{2}$","$\\frac{7}{2}$"],
    correctAnswer: 1,
    explanation: "Divide the given equation by -4: $\\frac{4x}{-4} + \\frac{14y}{-4} = \\frac{-7}{-4} \\implies -x - \\frac{7}{2}y = \\frac{7}{4}$.",
    youtubeLink: "https://youtu.be/pohua8IXa7w?si=Jf2jncY-ZqUuQ6sd",
    category: ""
  },
  {
    id: "est1_2021_may_44",
    question: "Acceleration is a vector quantity that represents the rate of change of velocity over time. The formula used to find the velocity $\\vec{v}$ of an object is $\\vec{v} = \\frac{\\Delta\\vec{r}}{\\Delta t}$ and that of the acceleration is $\\vec{a} = \\frac{\\Delta\\vec{v}}{\\Delta t}$. Which of the following statements is true regarding the given formula?\\nI. If $\\Delta\\vec{r}$ increases and $\\Delta t$ decreases, the acceleration will increase.\\nII. If $\\Delta\\vec{r}$ decreases and $\\Delta t$ increases, the acceleration will increase.\\nIII. If $\\Delta\\vec{r}$ decreases and $\\Delta t$ increases, the acceleration will decrease.",
    options: ["I only","II only","I and II","I and III"],
    correctAnswer: 3,
    explanation: "Acceleration $a = \\frac{\\Delta r}{(\\Delta t)^2}$. I: If $\\Delta r$ increases and $\\Delta t$ decreases, $a$ increases (True). II: If $\\Delta r$ decreases and $\\Delta t$ increases, $a$ decreases (False). III: True. So I and III.",
    youtubeLink: "https://youtu.be/wzBP1f9EWfM?si=TQcwiEDruacZAlIJ",
    category: ""
  },
  {
    id: "est1_2021_may_45",
    question: "$-3 < 2x - y \\le 14$\\nWhich point could be the solution for the inequality above?",
    options: ["(0, 3)","(4, -8)","(3, 4)","(4, 12)"],
    correctAnswer: 2,
    explanation: "Check (3, 4): $2(3) - 4 = 6 - 4 = 2$. Is $-3 < 2 \\le 14$? Yes.",
    youtubeLink: "https://youtu.be/2mijL20I5tI?si=IVqpojHLEOzoHSBY",
    category: ""
  },
  {
    id: "est1_2021_may_46",
    question: "For what values of $x$ is $f(x) = \\frac{2x^2 - 3}{(x - 3)(2x + 5)}$ undefined?",
    options: ["$x = 2.5$ and $x = 3$","$x = -2.5$ and $x = -3$","$x = 2.5$ and $x = -3$","$x = -2.5$ and $x = 3$"],
    correctAnswer: 3,
    explanation: "Undefined when denominator is 0. $(x - 3)(2x + 5) = 0 \\implies x = 3, x = -2.5$.",
    youtubeLink: "https://youtu.be/R0sQ78ZHtH4?si=rJvhss-izFchplN0",
    category: ""
  },
  {
    id: "est1_2021_may_47",
    question: "If $\\frac{a}{2b + 1} = \\frac{1}{2}$, which of the following is correct?",
    options: ["$a + b = \\frac{1}{2}$","$a - b = \\frac{1}{2}$","$2a - b = \\frac{1}{2}$","$a - 2b = \\frac{1}{2}$"],
    correctAnswer: 1,
    explanation: "Cross-multiply: $2a = 2b + 1 \\implies 2a - 2b = 1 \\implies a - b = 1/2$.",
    youtubeLink: "https://youtu.be/gc3EXTG5CIg?si=TStcNdn35QMD_yLK",
    category: ""
  },
  {
    id: "est1_2021_may_48",
    question: "What was the seasonal ticket price for a male person in 2018? How much did it decrease or increase in 2019?",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Year</th>
      <th class="border border-gray-400 px-2 py-1">Male (Avg)</th>
      <th class="border border-gray-400 px-2 py-1">Female (Avg)</th>
      <th class="border border-gray-400 px-2 py-1">Child (Avg)</th>
      <th class="border border-gray-400 px-2 py-1">Male (Season)</th>
      <th class="border border-gray-400 px-2 py-1">Female (Season)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-400 px-2 py-1">2018</td>
      <td class="border border-gray-400 px-2 py-1">4521</td>
      <td class="border border-gray-400 px-2 py-1">1254</td>
      <td class="border border-gray-400 px-2 py-1">759</td>
      <td class="border border-gray-400 px-2 py-1">1122</td>
      <td class="border border-gray-400 px-2 py-1">780</td>
    </tr>
    <tr>
      <td class="border border-gray-400 px-2 py-1">2019</td>
      <td class="border border-gray-400 px-2 py-1">4668</td>
      <td class="border border-gray-400 px-2 py-1">1102</td>
      <td class="border border-gray-400 px-2 py-1">884</td>
      <td class="border border-gray-400 px-2 py-1">1088</td>
      <td class="border border-gray-400 px-2 py-1">794</td>
    </tr>
  </tbody>
</table>
<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Year</th>
      <th class="border border-gray-400 px-2 py-1">Male ($)</th>
      <th class="border border-gray-400 px-2 py-1">Female ($)</th>
      <th class="border border-gray-400 px-2 py-1">Child ($)</th>
      <th class="border border-gray-400 px-2 py-1">Male (Season $)</th>
      <th class="border border-gray-400 px-2 py-1">Female (Season $)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-400 px-2 py-1">2018</td>
      <td class="border border-gray-400 px-2 py-1">72336</td>
      <td class="border border-gray-400 px-2 py-1">16552.8</td>
      <td class="border border-gray-400 px-2 py-1">4402.2</td>
      <td class="border border-gray-400 px-2 py-1">78540</td>
      <td class="border border-gray-400 px-2 py-1">47970</td>
    </tr>
    <tr>
      <td class="border border-gray-400 px-2 py-1">2019</td>
      <td class="border border-gray-400 px-2 py-1">79822.8</td>
      <td class="border border-gray-400 px-2 py-1">15428</td>
      <td class="border border-gray-400 px-2 py-1">4420</td>
      <td class="border border-gray-400 px-2 py-1">80512</td>
      <td class="border border-gray-400 px-2 py-1">47640</td>
    </tr>
  </tbody>
</table>`,
    options: ["It costed $70 in 2018, and it decreased by $4 the next year.","It costed $74 in 2018, and it increased by $4 the next year.","It costed $70 in 2018, and it increased by $4 the next year.","It costed $74 in 2018, and it decreased by $4 the next year."],
    correctAnswer: 2,
    explanation: "2018 male seasonal tickets sold = 1122. Revenue = 78540. Price = $78540 / 1122 = 70$. 2019 male seasonal tickets sold = 1088. Revenue = 80512. Price = $80512 / 1088 = 74$. Increased by $4.",
    youtubeLink: "https://youtu.be/OB1qbPJohZg?si=3ZVNj4lTp4bn-3yH",
    category: ""
  },
  {
    id: "est1_2021_may_49",
    question: "Which of the following represents the equation of the line describing the change of the number of seasonal tickets sold for a female person to the revenue obtained from the same category?",
    options: ["$y = -\\frac{165}{7}x + 66355.7$","$y = \\frac{165}{7}x + 66355.7$","$y = -\\frac{165}{7}x - 66355.7$","$y = \\frac{165}{7}x - 66355.7$"],
    correctAnswer: 0,
    explanation: "2018: Female tickets = 780, Revenue = 47970. 2019: Female tickets = 794, Revenue = 47640. Slope = $\\frac{47640 - 47970}{794 - 780} = \\frac{-330}{14} = -\\frac{165}{7}$. Equation: $y - 47970 = -\\frac{165}{7}(x - 780) \\implies y = -\\frac{165}{7}x + \\frac{165(780)}{7} + 47970 = -\\frac{165}{7}x + 18385.7 + 47970 = -\\frac{165}{7}x + 66355.7$.",
    youtubeLink: "https://youtu.be/B7a0Wr5Gnzs?si=JHoU3fBlZBTIE-jQ",
    category: ""
  },
  {
    id: "est1_2021_may_50",
    question: "What is the average revenue ticket from selling them at the entrance door per game in 2019?",
    options: ["$13.16","$14.31","$14.98","$17.27"],
    correctAnswer: 2,
    explanation: "Total revenue 2019 entrance door = $79822.8 + 15428 + 4420 = 99670.8$. Total tickets 2019 entrance door = $4668 + 1102 + 884 = 6654$. Average = $99670.8 / 6654 = 14.979 \\approx 14.98$.",
    youtubeLink: "https://youtu.be/yRGUfXpWXD0?si=OVyIdCckVa0NNs64",
    category: ""
  },
  {
    id: "est1_2021_may_51",
    question: "If $f(x) = -4x + 8(x - 5)$ and $g(x) = -3x + 1$, what is the value of $f(2) \\times g(1)$?",
    type: "grid-in",
    options: [],
    correctAnswer: "64",
    explanation: "$f(2) = -4(2) + 8(2 - 5) = -8 + 8(-3) = -8 - 24 = -32$. $g(1) = -3(1) + 1 = -2$. Product = $-32 \\times -2 = 64$.",
    category: ""
  },
  {
    id: "est1_2021_may_52",
    question: "The sum of twice a number $x$ and eleven is equal to one third the difference of the same number and one. What is the value of $(1 - x)$?",
    type: "grid-in",
    options: [],
    correctAnswer: "7.8",
    explanation: "$2x + 11 = \\frac{1}{3}(x - 1) \\implies 6x + 33 = x - 1 \\implies 5x = -34 \\implies x = -6.8$. Value of $(1 - x) = 1 - (-6.8) = 7.8$.",
    category: ""
  },
  {
    id: "est1_2021_may_53",
    question: "If $y$ varies directly as the cube of $2x$, and $y = 8$ when $x = 2$, what is $y$ when $x = 4$?",
    type: "grid-in",
    options: [],
    correctAnswer: "64",
    explanation: "$y = k(2x)^3$. When $x = 2$, $y = 8 \\implies 8 = k(4)^3 = 64k \\implies k = 1/8$. When $x = 4$, $y = \\frac{1}{8}(2(4))^3 = \\frac{1}{8}(8^3) = \\frac{512}{8} = 64$.",
    category: ""
  },
  {
    id: "est1_2021_may_54",
    question: "Based on the line of best fit shown as a dashed line, what is the average yearly increase in the number of repaired laptops rounded to the nearest tenth?",
    type: "grid-in",
    options: [],
    correctAnswer: "0.3",
    explanation: "Line of best fit passes through approx $(2010, 17.4)$ and $(2015, 19)$. Increase = $\\frac{19 - 17.4}{5} = \\frac{1.6}{5} = 0.32 \\approx 0.3$.",
    category: ""
  },
  {
    id: "est1_2021_may_55",
    question: "How many laptops were repaired between years 2012 and 2014?",
    type: "grid-in",
    options: [],
    correctAnswer: "198",
    explanation: "Reading from the graph: 2012 points sum to 198.",
    category: ""
  },
  {
    id: "est1_2021_may_56",
    question: "Given that $3^x = 11$, what is the value of $2(3^{3x}) - 4$?",
    type: "grid-in",
    options: [],
    correctAnswer: "2658",
    explanation: "$3^{3x} = (3^x)^3 = 11^3 = 1331$. Value = $2(1331) - 4 = 2662 - 4 = 2658$.",
    category: ""
  },
  {
    id: "est1_2021_may_57",
    question: "If $\\sin a = 2 - \\frac{\\cos a}{3}$, what is the value of $9\\sin a + 3\\cos a$?",
    type: "grid-in",
    options: [],
    correctAnswer: "18",
    explanation: "Multiply by 9: $9\\sin a = 18 - 3\\cos a \\implies 9\\sin a + 3\\cos a = 18$.",
    category: ""
  },
  {
    id: "est1_2021_may_58",
    question: "The density of a substance is equal to the quotient of its mass and its volume. What is the mass, in kilograms, of a liquid whose density is 14.2 g/cm$^3$ if its volume is equal to 6 L? (1 mL = 1 cm$^3$)",
    type: "grid-in",
    options: [],
    correctAnswer: "85.2",
    explanation: "Volume = $6 L = 6000 mL = 6000 cm^3$. Mass = density $\\times$ volume = $14.2 \\times 6000 = 85200$ g = $85.2$ kg.",
    category: ""
  }
];
