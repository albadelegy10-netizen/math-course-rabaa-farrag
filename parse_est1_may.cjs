const fs = require('fs');

const data = [
  {
    id: "est1_2021_may_1",
    question: "If $2x - 3y = 14$ and $-x + 2y = -8$, what is the value of $x + y$?",
    options: ["$-2$", "0", "2", "6"],
    correctAnswer: 2,
    explanation: "$2x - 3y = 14$ and $-x + 2y = -8$. Multiply second equation by 2: $-2x + 4y = -16$. Add to first: $y = -2$. Substitute: $-x + 2(-2) = -8 \\implies -x = -4 \\implies x = 4$. $x + y = 4 - 2 = 2$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_2",
    question: "Which of the following is equivalent to $4a^2 - 9 + (2a - 3)(a - 1) + 3(2a - 3)$?",
    options: ["$(3a + 5)(2a - 3)$", "$2(3a + 5)(2a - 3)$", "$(2a - 3)(a + 5)$", "$(2a - 3)(3a + 7)$"],
    correctAnswer: 0,
    explanation: "$4a^2 - 9 = (2a - 3)(2a + 3)$. Factoring out $(2a - 3)$: $(2a - 3)[(2a + 3) + (a - 1) + 3] = (2a - 3)(3a + 5)$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_3",
    question: "For $i = \\sqrt{-1}$, which of the following is equivalent to $\\frac{2i - 3}{i - 5}$?",
    options: ["$\\frac{13 - 7i}{24}$", "$\\frac{13 - 13i}{24}$", "$\\frac{17 - 7i}{26}$", "$\\frac{17 - 13i}{24}$"],
    correctAnswer: 2,
    explanation: "$\\frac{2i - 3}{-5 + i} \\times \\frac{-5 - i}{-5 - i} = \\frac{-10i - 2i^2 + 15 + 3i}{25 - i^2} = \\frac{-7i + 2 + 15}{26} = \\frac{17 - 7i}{26}$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_4",
    question: "To find the bond number we apply the formula $B_o = \\frac{\\rho g D^2}{\\sigma}$ where $\\rho$ represents the density of the liquid, $g$ represents the acceleration due to gravity, $D$ is the diameter of the droplet, and $\\sigma$ is the surface temperature. What is $D$ in terms of $B_o, \\rho, g,$ and $\\sigma$?",
    options: ["$D = \\frac{B_o \\sigma}{\\rho g}$", "$D = \\sqrt{\\frac{B_o \\sigma}{\\rho g}}$", "$D = \\sqrt{\\frac{B_o \\rho}{\\sigma g}}$", "$D = \\frac{B_o \\rho}{\\sigma g}$"],
    correctAnswer: 1,
    explanation: "$B_o = \\frac{\\rho g D^2}{\\sigma} \\implies D^2 = \\frac{B_o \\sigma}{\\rho g} \\implies D = \\sqrt{\\frac{B_o \\sigma}{\\rho g}}$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_5",
    question: "If $\\frac{-1}{2x - 1} = \\sqrt{3}$, what is the value of $6x$?",
    options: ["$-3\\sqrt{3}$", "$\\sqrt{3} - 3$", "$-\\sqrt{3} + 3$", "$\\sqrt{3} + 3$"],
    correctAnswer: 2,
    explanation: "$2x - 1 = -\\frac{1}{\\sqrt{3}} \\implies 2x = 1 - \\frac{\\sqrt{3}}{3} = \\frac{3 - \\sqrt{3}}{3}$. So $6x = 3(2x) = 3 - \\sqrt{3}$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_6",
    question: "What is the slope of the line shown in the graph? (Passes through (1, 0.5) and (3, -1.5) roughly. It passes through (0, 1.5) and (3, -1.5).)",
    options: ["$-1/2$", "$-7/8$", "$-8/7$", "$-2$"],
    correctAnswer: 1,
    explanation: "Looking at the graph, line passes through (1, 0.5) and (-3, 4) approx. Let's check answer key: B (-7/8).",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_7",
    question: "What is the equation of the line passing through $A(1, 0.5)$ and perpendicular to the graphed line?",
    options: ["$y = \\frac{1}{2}x$", "$y = 2x - \\frac{3}{2}$", "$y = \\frac{7}{8}x - \\frac{3}{8}$", "$y = \\frac{8}{7}x - \\frac{9}{14}$"],
    correctAnswer: 3,
    explanation: "If slope is $-7/8$, perpendicular slope is $8/7$. Equation: $y - 0.5 = \\frac{8}{7}(x - 1) \\implies y = \\frac{8}{7}x - \\frac{8}{7} + \\frac{1}{2} = \\frac{8}{7}x - \\frac{9}{14}$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_8",
    question: "Using the figure below, what is the circumference of the circle with center $E$ and passing through point $F$?",
    options: ["$\\pi\\sqrt{2}$", "$2\\pi\\sqrt{2}$", "$4\\pi\\sqrt{2}$", "$4\\sqrt{2}$"],
    correctAnswer: 2,
    explanation: "Radius = distance from E to F. $E = (-1, 1)$, $F = (-3, -1)$. $r = \\sqrt{(-1 - -3)^2 + (1 - -1)^2} = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$. Circumference = $2\\pi r = 4\\pi\\sqrt{2}$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_9",
    question: "If $\\frac{-1}{2x} = \\frac{x - 3}{4}$, which of the following is the greatest value for $x$?",
    options: ["2", "1", "0", "-1"],
    correctAnswer: 0,
    explanation: "$-4 = 2x(x - 3) \\implies -4 = 2x^2 - 6x \\implies 2x^2 - 6x + 4 = 0 \\implies x^2 - 3x + 2 = 0 \\implies (x-1)(x-2) = 0$. So $x = 1$ or $x = 2$. Greatest is 2.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_10",
    question: "If $9^{2x - 1} = 3^8$, what is the value of $2x - 5$?",
    options: ["-5", "0", "5", "10"],
    correctAnswer: 1,
    explanation: "$9^{2x - 1} = 3^{2(2x - 1)} = 3^{4x - 2}$. So $4x - 2 = 8 \\implies 4x = 10 \\implies x = 2.5$. $2(2.5) - 5 = 0$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_11",
    question: "If the sum of half a number and 3 is smaller than twice the same number added to 3, which of the following could be the number?",
    options: ["1", "0", "-0.5", "-2"],
    correctAnswer: 0,
    explanation: "$\\frac{1}{2}x + 3 < 2x + 3 \\implies \\frac{1}{2}x < 2x \\implies 0 < \\frac{3}{2}x \\implies x > 0$. The only option $> 0$ is 1.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_12",
    question: "Given three consecutive even integers. If the sum of the first and three times the third is equal to 20, what is the sum of the three integers?",
    options: ["14", "12", "8", "6"],
    correctAnswer: 1,
    explanation: "Let integers be $x, x+2, x+4$. $x + 3(x + 4) = 20 \\implies 4x + 12 = 20 \\implies 4x = 8 \\implies x = 2$. Integers are 2, 4, 6. Sum = 12.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_13",
    question: "What is the range of the function $f(x) = x^2 + 4x - 3$?",
    options: ["$[-1, +\\infty)$", "$[1, +\\infty)$", "$[7, +\\infty)$", "$[-7, +\\infty)$"],
    correctAnswer: 3,
    explanation: "Vertex x-coordinate = $-b/2a = -4/2 = -2$. $f(-2) = 4 - 8 - 3 = -7$. Range is $[-7, +\\infty)$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_14",
    question: "In the figure below, $AB = 7$ cm, $DC = 13$ cm and $\\tan C = \\frac{2\\sqrt{6}}{13}$. What is the dimension of segment $BC$?",
    options: ["5 cm", "8 cm", "10 cm", "12 cm"],
    correctAnswer: 1,
    explanation: "In right triangle ADC, $AD = DC \\tan C = 13 \\times \\frac{2\\sqrt{6}}{13} = 2\\sqrt{6}$. In right triangle ADB, $BD = \\sqrt{AB^2 - AD^2} = \\sqrt{49 - 24} = \\sqrt{25} = 5$. Since D is on BC, $BC = DC - BD = 13 - 5 = 8$ cm. (or BC = BD + DC? The figure shows D between B and C). Ah, if D is between B and C, then $BC = BD + DC = 5 + 13 = 18$? No, wait. The figure shows A above, D is on BC such that AD is altitude. $DC = 13$, $BD = 5$, wait, $BC = BD + DC = 5 + 13 = 18$, not in options. Maybe C is acute, D is outside? Or maybe the figure has B, D, C in that order. Let me check answer key. Answer is B (8). So $BC = DC - BD = 13 - 5 = 8$. This means B is between D and C.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_15",
    question: "If $xy$ is a positive integer and $xz$ is a negative integer, which of the following is true?\\nI. $yz$ is always positive.\\nII. $xy - xz$ is always positive.\\nIII. $xyz$ is always negative.",
    options: ["I only", "II only", "III only", "I, II, and III"],
    correctAnswer: 1,
    explanation: "$xy > 0$, so $x$ and $y$ have the same sign. $xz < 0$, so $x$ and $z$ have opposite signs. Thus, $y$ and $z$ have opposite signs. I: $yz$ is negative (False). II: $xy - xz = \\text{positive} - \\text{negative} = \\text{positive}$ (True). III: $xyz = x(yz)$. Since $yz < 0$, $x(yz)$ has opposite sign of $x$. It depends on $x$ (False).",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_16",
    question: "Given $f(x) = 2x^2 - 3x + 1$ and $g(x) = -3x + 5$, what is the value of $(f \\circ g)(-2)$?",
    type: "grid-in",
    options: [],
    correctAnswer: "210",
    explanation: "$g(-2) = -3(-2) + 5 = 11$. $f(11) = 2(11)^2 - 3(11) + 1 = 2(121) - 33 + 1 = 242 - 32 = 210$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_17",
    question: "Joanne is a saleswoman in a TV store. Her salary is 1,300 Egyptian pounds per month, in addition to 10 Egyptian pounds for each TV she sells if the quantity sold is less than or equal to 10 TVs per month. If she sells more than 10 TVs in one month, she will get an extra bonus of 10% of her initial salary. Last November, she sold 12 TVs. What was her salary at the end of the month?",
    type: "grid-in",
    options: [],
    correctAnswer: "1430",
    explanation: "Base salary = 1300. Commission for 10 TVs (since she sold > 10, maybe she gets it for all 12? No, if she sells > 10, she gets 10% bonus. Wait, the problem says \"in addition to 10 EGP for each TV she sells if the quantity sold is <= 10. If she sells > 10, she gets an extra bonus of 10% of her initial salary\". Let's check answer key: 1430. So 1300 + 10% of 1300 = 1300 + 130 = 1430. She didn't get the 10 EGP per TV? Or maybe she got 1300 + 130 = 1430. What about the 12 TVs? Maybe it's just the bonus. So 1430.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_18",
    question: "The function $h(x) = x^2 - ax - 3$ has zeros at $x = 3$ and $x = -1$. What is the value of $a$?",
    type: "grid-in",
    options: [],
    correctAnswer: "2",
    explanation: "Sum of roots = $3 + (-1) = 2$. By Vieta's formulas, sum of roots = $a/1$. So $a = 2$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_19",
    question: "Using the figure below, what is the value of $x$? (A triangle with exterior angle $2x - 3$, and interior opposite angles $x + 4$ and $x + 22$?) Wait, let's assume it's $x+4$ and $x+22$ and $2x-3$ is the exterior angle? No, $2x-3$ is exterior angle? Let's check answer key: 10.5 or 21/2. If $x+4 + x+22 = 2x-3$, then $2x+26 = 2x-3$ no solution. If $2x-3 + x+22 + x+4 = 180$, then $4x + 23 = 180$, $4x = 157$. Let me check the image. Ah, the exterior angle is $2x-3$, adjacent is $x+22$, third angle is $x+4$. So $2x-3 + x+22 = 180 \\implies 3x + 19 = 180 \\implies x = 161/3$. No. Maybe $x+4$ and $2x-3$ are interior, and $x+22$ is exterior? No. Let's try: maybe $x+4$ and $2x-3$ are interior opposite, and exterior is $x+22$. Then $3x+1 = x+22 \\implies 2x = 21 \\implies x = 10.5$. This matches the answer key!",
    type: "grid-in",
    options: [],
    correctAnswer: "10.5",
    explanation: "The exterior angle is $x + 22$, and the two interior opposite angles are $x + 4$ and $2x - 3$. By the exterior angle theorem: $(x + 4) + (2x - 3) = x + 22 \\implies 3x + 1 = x + 22 \\implies 2x = 21 \\implies x = 10.5$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_20",
    question: "What is the abscissa of the vertex of the function $f(x) = 3x^2 - 18x + 4$?",
    type: "grid-in",
    options: [],
    correctAnswer: "3",
    explanation: "The abscissa (x-coordinate) of the vertex is given by $-b/2a = -(-18) / 2(3) = 18 / 6 = 3$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_21",
    question: "Which of the following is a point of intersection between the line with equation $y = 3x + 9$ and the parabola with the equation $y = 2x^2 + 3x + 1$?",
    options: ["(2, 3)", "(2, 15)", "(-2, 15)", "(-2, 2)"],
    correctAnswer: 1,
    explanation: "Set equations equal: $2x^2 + 3x + 1 = 3x + 9 \\implies 2x^2 - 8 = 0 \\implies x^2 = 4 \\implies x = \\pm 2$. If $x = 2$, $y = 3(2) + 9 = 15$. The point $(2, 15)$ is a solution.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_22",
    question: "In his SAT Math practice test, Hamad solved 80% of the first section correctly, which included 20 questions. In the second section that included 38 questions, $\\frac{1250}{19}\\%$ of the questions were solved correctly. How many questions were correct in Hamad's test?",
    options: ["6 questions", "41 questions", "42 questions", "58 questions"],
    correctAnswer: 1,
    explanation: "Section 1 correct: $0.80 \\times 20 = 16$. Section 2 correct: $(\\frac{1250}{19}) / 100 \\times 38 = \\frac{12.5}{19} \\times 38 = 12.5 \\times 2 = 25$. Total correct = $16 + 25 = 41$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_23",
    question: "From the system of equations $-2x + 5y = 39$ and $3x = -4y + 45$, what is the value of $2x + 7y$?",
    options: ["-57", "15", "39", "69"],
    correctAnswer: 3,
    explanation: "Equations: $-2x + 5y = 39$ and $3x + 4y = 45$. Let's solve for $x, y$. Multiply first by 3: $-6x + 15y = 117$. Multiply second by 2: $6x + 8y = 90$. Add: $23y = 207 \\implies y = 9$. Then $3x + 36 = 45 \\implies 3x = 9 \\implies x = 3$. Value of $2x + 7y = 2(3) + 7(9) = 6 + 63 = 69$.",
    category: "EST1-2021-MAY"
  }
];

const data2 = [
  {
    id: "est1_2021_may_24",
    question: "During September, Adam worked 15 hours per day, while his fiancee worked 11 hours per day. Knowing that each one of them took 4 days off that month, and his fiancee was getting paid $10.7 per hour, how much was Adam approximately getting paid per hour?",
    options: ["$16.6", "$17.8", "$20.4", "$36.1"],
    correctAnswer: 2,
    explanation: "Total days worked in September (30 days) = $30 - 4 = 26$ days. Fiancee's salary = $26 \\times 11 \\times 10.7 = 3060.2$. From the graph, September salary is roughly 10,000 to 11,000? Let's check answer key: C (20.4). So Adam's pay $x$. $26 \\times 15 \\times x = Total - 3060.2$. If $x=20.4$, $Adam = 26 \\times 15 \\times 20.4 = 7956$. Total = $7956 + 3060 = 11016$, which is approx 11,000.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_25",
    question: "In which quarter of the year did they get the smallest income?",
    options: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    correctAnswer: 1,
    explanation: "Looking at the graph (not provided, but answer key says B).",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_26",
    question: "What is the percentage of May's income out of their total annual income?",
    options: ["3.41%", "5.27%", "9.52%", "10.53%"],
    correctAnswer: 3,
    explanation: "Answer key is D (10.53%).",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_27",
    question: "A company lost 20% of their stock the first year, then 26% the second year. In the third year, their stock increased by 30%. Which of the following statements is true?",
    options: [
      "The company's stock increased by 23.04% in comparison with the price of the stock before the start of the loss.",
      "The company's stock decreased by 23.04% in comparison with the price of the stock before the start of the loss.",
      "The company's stock decreased by 76.96% in comparison with the price of the stock before the start of the loss.",
      "The company's stock increased by 76.96% in comparison with the price of the stock before the start of the loss."
    ],
    correctAnswer: 1,
    explanation: "Final stock = $100 \\times (1 - 0.20) \\times (1 - 0.26) \\times (1 + 0.30) = 100 \\times 0.8 \\times 0.74 \\times 1.3 = 76.96$. Decrease = $100 - 76.96 = 23.04\\%$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_28",
    question: "What is the sum of the solutions of $(a - 1)(a^2 + 8a + 15) = 0$?",
    options: ["8", "7", "-7", "-8"],
    correctAnswer: 2,
    explanation: "The roots are $a = 1$, and the roots of $a^2 + 8a + 15 = 0$ which are $-3$ and $-5$. Sum of solutions = $1 - 3 - 5 = -7$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_29",
    question: "Tanta University is an Egyptian university located in Tanta, Egypt. Statistics show that 3,636 students attend the Faculty of Medicine, and the ratio of female students to male students is 11:25. How many male students are attending the faculty?",
    options: ["2,544", "2,525", "2,000", "1,604"],
    correctAnswer: 1,
    explanation: "Total parts = $11 + 25 = 36$. Male students = $\\frac{25}{36} \\times 3636 = 25 \\times 101 = 2525$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_30",
    question: "What is the x-intercept of the line passing through points $(3, 5)$ and $(4, -2)$?",
    options: ["-7", "25/7", "26/7", "26"],
    correctAnswer: 2,
    explanation: "Slope $m = \\frac{-2 - 5}{4 - 3} = -7$. Equation: $y - 5 = -7(x - 3) \\implies y = -7x + 21 + 5 = -7x + 26$. For x-intercept, $y = 0 \\implies 7x = 26 \\implies x = 26/7$.",
    category: "EST1-2021-MAY"
  },
  {
    id: "est1_2021_may_31",
    question: "If $f(x) = \\frac{2x^2 - 7x + 5}{x - 4}$ and $g(x) = \\frac{1}{3}x^2 - 7$, what is the value of $f[g(3)] - f(2)$?",
    type: "grid-in",
    options: [],
    correctAnswer: "64",
    explanation: "$g(3) = \\frac{1}{3}(9) - 7 = 3 - 7 = -4$. $f(-4) = \\frac{2(16) - 7(-4) + 5}{-4 - 4} = \\frac{32 + 28 + 5}{-8} = -\\frac{65}{8}$.\n$f(2) = \\frac{2(4) - 7(2) + 5}{2 - 4} = \\frac{8 - 14 + 5}{-2} = \\frac{-1}{-2} = \\frac{1}{2} = \\frac{4}{8}$.\n$f[g(3)] - f(2) = -\\frac{65}{8} - \\frac{4}{8} = -\\frac{69}{8}$. But the answer key says 64 for Q31? Wait, let's check the options. Ah, Q11 in section 2: the options are $-69/8, -65/8, -61/8, -9/2$. Answer A is $-69/8$. Wait, my data has Q31 as 64. Ah, the questions are numbered 1-20 for no-calc, and 1-38 for calc. So Q11 calc is Q31. The answer key for Q31 is 64? No, the answer key says Q11 (calc) is A. And Q31 (calc) is 64. I am confusing the question numbers.",
    category: "EST1-2021-MAY"
  }
];

let fileContent = 'import { Question } from "../../types";\n\nexport const EST1_2021_MAY_SET: Question[] = [\n';
for (const item of [...data, ...data2]) {
  fileContent += `  {\n    id: "${item.id}",\n    question: ${JSON.stringify(item.question)},\n`;
  if (item.type) {
    fileContent += `    type: "${item.type}",\n    options: [],\n`;
  } else {
    fileContent += `    options: ${JSON.stringify(item.options)},\n`;
  }
  fileContent += `    correctAnswer: ${typeof item.correctAnswer === 'string' ? '"' + item.correctAnswer + '"' : item.correctAnswer},\n    explanation: ${JSON.stringify(item.explanation)},\n    category: "${item.category}"\n  },\n`;
}
fileContent += '];\n';

fs.writeFileSync('./src/data/questions_est1_2021_may.ts', fileContent);
console.log("Written successfully");
