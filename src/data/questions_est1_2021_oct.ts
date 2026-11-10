import { Question } from '../../types';

export const EST1_2021_OCTOBER_SET: Question[] = [
  {
    id: "est1_2021_oct_1",
    question: "Given $2x - 8 = 3y + 4$, what is the value of $x$ if $y$ is equivalent to the square of $2$?",
    options: ["4", "8", "12", "24"],
    correctAnswer: 2,
    explanation: "If $y = 2^2 = 4$, then $2x - 8 = 3(4) + 4 = 16$. Solving for $x$, we get $2x = 24$, so $x = 12$.",
    category: ""
  },
  {
    id: "est1_2021_oct_2",
    question: "Amina went to the flower shop and bought $2$ roses and $5$ daisies for $6$ EGP. Lara bought from the same shop, $4$ roses and $2$ daisies for $4$ EGP. How much should Ahmad pay to buy $2$ roses and $2$ daisies?",
    options: ["1 EGP", "1.5 EGP", "2 EGP", "3 EGP"],
    correctAnswer: 3,
    explanation: "Let $r$ be the price of a rose and $d$ be the price of a daisy.\n$2r + 5d = 6$\n$4r + 2d = 4 \\implies 2r + d = 2$\nSubtracting the second equation from the first: $4d = 4 \\implies d = 1$.\nSubstituting $d=1$ into $2r + d = 2$: $2r + 1 = 2 \\implies 2r = 1 \\implies r = 0.5$.\nAhmad buys $2$ roses and $2$ daisies: $2(0.5) + 2(1) = 1 + 2 = 3$ EGP.",
    category: ""
  },
  {
    id: "est1_2021_oct_3",
    question: "What is the simplified form of $2(3i - 7) + i(2i - 1)$ given that $i = \\sqrt{-1}$?",
    options: ["$-16 + 7i$", "$-14 + 3i$", "$-16 + 5i$", "$-15 + 4i$"],
    correctAnswer: 2,
    explanation: "$2(3i - 7) + i(2i - 1) = 6i - 14 + 2i^2 - i$.\nSince $i^2 = -1$, this becomes $6i - 14 - 2 - i = -16 + 5i$.",
    category: ""
  },
  {
    id: "est1_2021_oct_4",
    question: "If $\\frac{2a - 1}{b} = 6$, what is the value of $a - 3b$? ($b \\neq 0$)",
    options: ["0.5", "1", "2", "3"],
    correctAnswer: 0,
    explanation: "$\\frac{2a - 1}{b} = 6 \\implies 2a - 1 = 6b \\implies 2a - 6b = 1$.\nDividing by 2 gives $a - 3b = 0.5$.",
    category: ""
  },
  {
    id: "est1_2021_oct_5",
    question: "Given $f(x) = x^2 + 3x - 1$, and $g(x) = 2x - 1$, what is the equivalent expression representing $f(g(x))$?",
    options: ["$2x^2 + 2x - 3$", "$4x^2 + 2x - 3$", "$2x^2 + 4x - 1$", "$4x^2 + 4x - 1$"],
    correctAnswer: 1,
    explanation: "$f(g(x)) = f(2x - 1) = (2x - 1)^2 + 3(2x - 1) - 1$.\n$= (4x^2 - 4x + 1) + 6x - 3 - 1 = 4x^2 + 2x - 3$.",
    category: ""
  },
  {
    id: "est1_2021_oct_6",
    question: "The equation of a line is $\\frac{2}{x} - \\frac{3}{y - 1} = 0$. What is the slope of the line?",
    options: ["3", "2", "$\\frac{3}{2}$", "$\\frac{1}{2}$"],
    correctAnswer: 2,
    explanation: "$\\frac{2}{x} = \\frac{3}{y - 1} \\implies 2(y - 1) = 3x \\implies 2y - 2 = 3x \\implies 2y = 3x + 2 \\implies y = \\frac{3}{2}x + 1$.\nThe slope is $\\frac{3}{2}$.",
    category: ""
  },
  {
    id: "est1_2021_oct_7",
    question: "Which of the following statement(s) is/are true regarding the parabola shown in the graph? (The graph shows a downward-facing parabola with vertex at $(1, 0)$ and y-intercept at $(0, -1)$.)\nI. The coordinates of the vertex of the parabola are $(1, 0)$.\nII. The axis of symmetry is at $x = -1$.\nIII. The equation of the parabola is $y = -x^2 + 2x - 1$.",
    options: ["I only", "II only", "I and II", "I and III"],
    correctAnswer: 3,
    explanation: "I is true: The vertex is at $(1, 0)$.\nII is false: The axis of symmetry is $x = 1$.\nIII is true: The vertex form is $y = a(x - 1)^2 + 0$. Using the y-intercept $(0, -1)$, we get $-1 = a(0 - 1)^2 \\implies a = -1$. The equation is $y = -(x - 1)^2 = -x^2 + 2x - 1$.",
    category: ""
  },
  {
    id: "est1_2021_oct_8",
    question: "What is the equation of the tangent to this parabola at the vertex? (The graph shows a downward-facing parabola with vertex at $(1, 0)$.)",
    options: ["$x = 0$", "$y = 0$", "$y = x$", "$y = -x$"],
    correctAnswer: 1,
    explanation: "The tangent line at the vertex of a parabola is horizontal. Since the vertex is at $(1, 0)$, the tangent line is $y = 0$.",
    category: ""
  },
  {
    id: "est1_2021_oct_9",
    question: "In $\\triangle ABC$, point $F$ is on side $AB$ and point $D$ is on side $BC$. It is given that $AF = 20$, $FB = x + 3$, $CD = 9$, and $DB = 3$. If line segment $FD$ is parallel to $AC$, what is the value of $3x - 1$?",
    options: ["$\\frac{8}{3}$", "8", "10", "32"],
    correctAnswer: 2,
    explanation: "Since $FD \\parallel AC$, $\\triangle BFD \\sim \\triangle BAC$. Therefore, the sides are proportional: $\\frac{BF}{FA} = \\frac{BD}{DC}$.\n$\\frac{x + 3}{20} = \\frac{3}{9} \\implies \\frac{x + 3}{20} = \\frac{1}{3} \\implies x + 3 = \\frac{20}{3} \\implies x = \\frac{11}{3}$.\nThen, $3x - 1 = 3(\\frac{11}{3}) - 1 = 11 - 1 = 10$.",
    category: ""
  },
  {
    id: "est1_2021_oct_10",
    question: "The distance between Giza and Luxor is approximately $500$ Km. To travel that distance, Bilal received offers from $4$ different taxi companies:\nTaxi A: Fixed Amount $160$ EGP, Amount per $25$ Km is $15$ EGP.\nTaxi B: Fixed Amount $210$ EGP, Amount per $25$ Km is $13$ EGP.\nTaxi C: Fixed Amount $185$ EGP, Amount per $25$ Km is $14$ EGP.\nTaxi D: Fixed Amount $150$ EGP, Amount per $25$ Km is $16$ EGP.\nWhich company gave Bilal the cheapest offer?",
    options: ["Taxi A", "Taxi B", "Taxi C", "Taxi D"],
    correctAnswer: 0,
    explanation: "The total cost for each taxi is the fixed amount plus the cost for $500$ Km. Since the rate is per $25$ Km, the number of intervals is $500 / 25 = 20$.\nTaxi A: $160 + 20(15) = 160 + 300 = 460$ EGP.\nTaxi B: $210 + 20(13) = 210 + 260 = 470$ EGP.\nTaxi C: $185 + 20(14) = 185 + 280 = 465$ EGP.\nTaxi D: $150 + 20(16) = 150 + 320 = 470$ EGP.\nTaxi A is the cheapest.",
    category: ""
  },
  {
    id: "est1_2021_oct_11",
    question: "In order to prepare for the boxing tournament, Jamison needs to work out for at least $90$ hours during the next $3$ weeks. In the first week, he practiced for $42$ hours, and decided to divide the rest of the hours equally over the next two weeks. How much should he practice minimum each week?",
    options: ["12 hours", "24 hours", "46 hours", "48 hours"],
    correctAnswer: 1,
    explanation: "Remaining hours needed: $90 - 42 = 48$ hours. Divided equally over $2$ weeks, he needs to practice $48 / 2 = 24$ hours each week.",
    category: ""
  },
  {
    id: "est1_2021_oct_12",
    question: "Given $f(x) = 2x^2 + ax - 1$. What is the value of $a$ if the axis of symmetry of the graph of $f$ is equal to $-2.5$?",
    options: ["-10", "5", "10", "20"],
    correctAnswer: 2,
    explanation: "The axis of symmetry for a parabola $y = ax^2 + bx + c$ is $x = -\\frac{b}{2a}$. Here, $x = -\\frac{a}{2(2)} = -\\frac{a}{4}$.\nSetting this equal to $-2.5$: $-\\frac{a}{4} = -2.5 \\implies a = 10$.",
    category: ""
  },
  {
    id: "est1_2021_oct_13",
    question: "If $3 < 2x + 7 \\le 15$, which of the following integers represents the smallest value for $x + 3$?",
    options: ["1", "2", "-2", "-1"],
    correctAnswer: 1,
    explanation: "$3 < 2x + 7 \\le 15 \\implies -4 < 2x \\le 8 \\implies -2 < x \\le 4$.\nThe smallest integer value for $x$ is $-1$. Therefore, the smallest integer value for $x + 3$ is $-1 + 3 = 2$.",
    category: ""
  },
  {
    id: "est1_2021_oct_14",
    question: "Given $\\frac{d^2 - 4m^2}{2d + 4m} = \\frac{3}{8}$. What is the value of $d - 2m$?",
    options: ["$\\frac{3}{8}$", "$\\frac{3}{6}$", "$\\frac{3}{4}$", "$\\frac{3}{16}$"],
    correctAnswer: 2,
    explanation: "Factor the numerator and denominator: $\\frac{(d - 2m)(d + 2m)}{2(d + 2m)} = \\frac{3}{8}$.\nCanceling $(d + 2m)$, we get $\\frac{d - 2m}{2} = \\frac{3}{8}$. Multiplying by 2 yields $d - 2m = \\frac{6}{8} = \\frac{3}{4}$.",
    category: ""
  },
  {
    id: "est1_2021_oct_15",
    question: "Which of the following is the equation of the line perpendicular to the line with equation $2x - 3y = -1$ and passing through the midpoint of segment $AB$ given $A(2, 7)$ and $B(-1, 3)$?",
    options: ["$y = \\frac{2}{3}x + \\frac{14}{3}$", "$y = \\frac{2}{3}x + \\frac{16}{3}$", "$y = -\\frac{3}{2}x + \\frac{17}{4}$", "$y = -\\frac{3}{2}x + \\frac{23}{4}$"],
    correctAnswer: 3,
    explanation: "The given line is $3y = 2x + 1 \\implies y = \\frac{2}{3}x + \\frac{1}{3}$. Its slope is $\\frac{2}{3}$. A perpendicular line has slope $-\\frac{3}{2}$.\nThe midpoint of $AB$ is $(\\frac{2 + (-1)}{2}, \\frac{7 + 3}{2}) = (0.5, 5)$.\nUsing point-slope form: $y - 5 = -\\frac{3}{2}(x - 0.5) \\implies y = -\\frac{3}{2}x + \\frac{3}{4} + 5 \\implies y = -\\frac{3}{2}x + \\frac{23}{4}$.",
    category: ""
  },
  {
    id: "est1_2021_oct_16",
    question: "What is the value of $m + \\frac{3}{4}$ if $4^{2m+1} = 32^3$?",
    type: "grid-in",
    options: [],
    correctAnswer: "4",
    explanation: "Rewrite bases as powers of 2: $(2^2)^{2m+1} = (2^5)^3 \\implies 2^{4m+2} = 2^{15}$.\n$4m + 2 = 15 \\implies 4m = 13 \\implies m = \\frac{13}{4}$.\n$m + \\frac{3}{4} = \\frac{13}{4} + \\frac{3}{4} = \\frac{16}{4} = 4$.",
    category: ""
  },
  {
    id: "est1_2021_oct_17",
    question: "What is the product of the solutions of the equation $x^2 - 3x = -2$?",
    type: "grid-in",
    options: [],
    correctAnswer: "2",
    explanation: "Rewrite the equation: $x^2 - 3x + 2 = 0$. Using Vieta's formulas, the product of the roots of $ax^2 + bx + c = 0$ is $\\frac{c}{a}$. Thus, the product is $\\frac{2}{1} = 2$.",
    category: ""
  },
  {
    id: "est1_2021_oct_18",
    question: "The function $y = 2x^2 + dx - 1$ has a zero at $x = -2$. What is the value of $d$?",
    type: "grid-in",
    options: [],
    correctAnswer: "3.5",
    explanation: "Substitute $x = -2$ and $y = 0$: $0 = 2(-2)^2 + d(-2) - 1 \\implies 0 = 8 - 2d - 1 \\implies 2d = 7 \\implies d = 3.5$.",
    category: ""
  },
  {
    id: "est1_2021_oct_19",
    question: "If $\\frac{1}{x - 1} - \\frac{1}{x + 1} = 1$, and $x \\neq \\pm 1$, what is the value of $11x^2$?",
    type: "grid-in",
    options: [],
    correctAnswer: "33",
    explanation: "Find a common denominator: $\\frac{(x + 1) - (x - 1)}{(x - 1)(x + 1)} = 1 \\implies \\frac{2}{x^2 - 1} = 1 \\implies 2 = x^2 - 1 \\implies x^2 = 3$.\nTherefore, $11x^2 = 11(3) = 33$.",
    category: ""
  },
  {
    id: "est1_2021_oct_20",
    question: "In right triangle $ABC$ with right angle at $B$, $\\sin C = 0.5$. What is the measure of $\\angle A$ (in degrees)?",
    type: "grid-in",
    options: [],
    correctAnswer: "60",
    explanation: "Since $\\sin C = 0.5$, $\\angle C = 30^\\circ$. The sum of angles in a triangle is $180^\\circ$, so $\\angle A = 180^\\circ - 90^\\circ - 30^\\circ = 60^\\circ$.",
    category: ""
  },
  {
    id: "est1_2021_oct_21",
    question: "If $f$ is a linear function with $f(0) = \\frac{1}{2}$ and $f(-3) = -\\frac{3}{2}$, what is the value of $f(3)$?",
    options: ["0.5", "1.5", "2.5", "5"],
    correctAnswer: 2,
    explanation: "The slope $m = \\frac{-3/2 - 1/2}{-3 - 0} = \\frac{-2}{-3} = \\frac{2}{3}$. The y-intercept is $1/2$. So $f(x) = \\frac{2}{3}x + \\frac{1}{2}$. $f(3) = \\frac{2}{3}(3) + \\frac{1}{2} = 2 + 0.5 = 2.5$.",
    youtubeLink: "https://youtu.be/R1mAJT75sx8?si=7lgX4Pm9AIsP0Zyq",
    category: ""
  },
  {
    id: "est1_2021_oct_22",
    question: "The table below shows the distance Amir walked every day during the first week of April, 2021.\nWhat is the average (arithmetic mean) of the data shown in the table?",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Day</th>
      <th class="border border-gray-400 px-2 py-1">Distance (in m)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">Thursday, April 1st</td><td class="border border-gray-400 px-2 py-1">1678</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Friday, April 2nd</td><td class="border border-gray-400 px-2 py-1">2091</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Saturday, April 3rd</td><td class="border border-gray-400 px-2 py-1">1245</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Sunday, April 4th</td><td class="border border-gray-400 px-2 py-1">1566</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Monday, April 5th</td><td class="border border-gray-400 px-2 py-1">2100</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Tuesday, April 6th</td><td class="border border-gray-400 px-2 py-1">1989</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Wednesday, April 7th</td><td class="border border-gray-400 px-2 py-1">1888</td></tr>
  </tbody>
</table>`,
    options: ["2511.4", "1888", "1793.9", "1672.5"],
    correctAnswer: 2,
    explanation: "Sum = 1678 + 2091 + 1245 + 1566 + 2100 + 1989 + 1888 = 12557. Mean = 12557 / 7 = 1793.857... $\\approx 1793.9$.",
    youtubeLink: "https://youtu.be/vBKQ2W_2Ppg?si=Qh6pVUJkNWx6pLdJ",
    category: ""
  },
  {
    id: "est1_2021_oct_23",
    question: "If on Thursday, April 8th, Amir walked the same distance he did the second day of April with an addition of 20%. What is the distance he walked?",
    options: ["4182 m", "2509.2 m", "2420.6 m", "2007.6 m"],
    correctAnswer: 1,
    explanation: "The second day of April (April 2nd) distance was 2091 m. Adding 20% gives $2091 \\times 1.2 = 2509.2$ m.",
    youtubeLink: "https://youtu.be/ZCFB3UGbv2Y?si=Itdkll8-hJFtwEu",
    category: ""
  },
  {
    id: "est1_2021_oct_24",
    question: "By what approximate percent did Amir increase the distance he walked from April 3rd to April 5th?",
    options: ["34%", "60%", "67%", "69%"],
    correctAnswer: 3,
    explanation: "Distance on April 3rd = 1245 m. Distance on April 5th = 2100 m. Increase = $2100 - 1245 = 855$. Percent increase = $\\frac{855}{1245} \\times 100 \\approx 68.67\\% \\approx 69\\%$.",
    youtubeLink: "https://youtu.be/BSXr0yZgpm4?si=kbJk3DALSLXizhLn",
    category: ""
  },
  {
    id: "est1_2021_oct_25",
    question: "What is the vertex form of the function $f(x) = 3x^2 - 9x + 1$?",
    options: [
      "$f(x) = 3(x - \\frac{3}{2})^2 - \\frac{23}{4}$",
      "$f(x) = 3(x - \\frac{3}{2})^2 + \\frac{23}{4}$",
      "$f(x) = 3(x + \\frac{3}{2})^2 - \\frac{23}{4}$",
      "$f(x) = 3(x + \\frac{3}{2})^2 + \\frac{23}{4}$"
    ],
    correctAnswer: 0,
    explanation: "$f(x) = 3(x^2 - 3x) + 1 = 3(x^2 - 3x + \\frac{9}{4}) + 1 - 3(\\frac{9}{4}) = 3(x - \\frac{3}{2})^2 + 1 - \\frac{27}{4} = 3(x - \\frac{3}{2})^2 - \\frac{23}{4}$.",
    youtubeLink: "https://youtu.be/28DaSqidGPs?si=PnMqek8Wu0nlqKNA",
    category: ""
  },
  {
    id: "est1_2021_oct_26",
    question: "In a village, 25% of the residents own a German Shepherd, 45% own a Swiss Shepherd, and 35% do not own a dog. Which of the following statement(s) is/are correct?\nI. 11% of the residents own both a German Shepherd and a Swiss Shepherd at the same time.\nII. If we select a resident randomly, the probability of him having a Swiss Shepherd even though he has a German Shepherd is 0.8.\nIII. If we select a resident randomly, the probability of him having a Swiss Shepherd even though he has a German Shepherd is 0.05.",
    options: ["I only", "III only", "I and II", "II and III"],
    correctAnswer: 1,
    explanation: "Total dog owners = $100\\% - 35\\% = 65\\%$. Owners of both = $(25\\% + 45\\%) - 65\\% = 5\\%$. Statement I is false. The probability of selecting someone who owns a Swiss Shepherd and a German Shepherd is 0.05 (Statement III is true based on interpretation).",
    youtubeLink: "https://youtu.be/TFAtxAqv3p0?si=vWWGMgX5t_q9MFk_",
    category: ""
  },
  {
    id: "est1_2021_oct_27",
    question: "Which of the following is equivalent to $\\frac{4m\\sqrt{3a} - 2\\sqrt{27am^2} + m\\sqrt{12a}}{\\sqrt{243a^5}}$ for all positive values of $a$ and $m$?",
    options: ["$\\frac{2m}{9a^2}$", "$\\frac{m}{9a^2}$", "$-\\frac{m}{9a^2}$", "0"],
    correctAnswer: 3,
    explanation: "Simplify the numerator: $4m\\sqrt{3a} - 2(3m)\\sqrt{3a} + m(2)\\sqrt{3a} = 4m\\sqrt{3a} - 6m\\sqrt{3a} + 2m\\sqrt{3a} = 0$. Since the numerator is 0, the fraction is 0.",
    youtubeLink: "https://youtu.be/gq_YZQWiaiI?si=f0c4qkDhUF2Y61F7",
    category: ""
  },
  {
    id: "est1_2021_oct_28",
    question: "The sum of two numbers is 119. The product of the two numbers is 3430. What is half the greater number?",
    options: ["24.5", "35", "49", "70"],
    correctAnswer: 1,
    explanation: "Let the numbers be $x$ and $y$. $x + y = 119$ and $xy = 3430$. This forms the quadratic equation $x^2 - 119x + 3430 = 0$. Factoring gives $(x - 70)(x - 49) = 0$. The greater number is 70. Half of 70 is 35.",
    youtubeLink: "https://youtu.be/zhlYkWHsxE4?si=f_qKKmNV6zj10Pyz",
    category: ""
  },
  {
    id: "est1_2021_oct_29",
    question: "The resistance ($R$) of a resistor is expressed by $R = \\frac{U}{I}$ with $U$ as the voltage in volts ($V$), and $I$ as the current in amperes ($A$). The linear graph represents the characteristic current-voltage ($U$-$I$) of a resistor. The graph shows a line passing through $(0,0)$ and $(10, 4)$ where the y-axis is Voltage ($V$) and the x-axis is Current ($mA$). According to the graph, what is the value of the resistance of the resistor?",
    options: ["$400 \\Omega$", "$140 \\Omega$", "$4 \\Omega$", "$0.4 \\Omega$"],
    correctAnswer: 0,
    explanation: "From the graph, when $I = 10$ mA $= 0.01$ A, $U = 4$ V. $R = \\frac{U}{I} = \\frac{4}{0.01} = 400 \\Omega$.",
    youtubeLink: "https://youtu.be/1iB9mSkXCEc?si=Udv1N1jtfrtXw1Fx",
    category: ""
  },
  {
    id: "est1_2021_oct_30",
    question: "What is the inverse of the function shown in the graph above?",
    options: ["$U = 0.4I$", "$U = \\frac{I}{400}$", "$U = \\frac{I}{4}$", "$U = 400I$"],
    correctAnswer: 1,
    explanation: "The equation relating $U$ and $I$ (in Amperes) is $U = 400I$. If we define $f(I) = 400I$, its inverse function is $f^{-1}(I) = \\frac{I}{400}$. Thus, the inverse is $U = \\frac{I}{400}$.",
    youtubeLink: "https://youtu.be/zeRtEjxqK24?si=J2qc-fhit4T7GC0n",
    category: ""
  },
  {
    id: "est1_2021_oct_31",
    question: "The scatterplot shows how many boys there are in two different villages and the changes in numbers since year 2011. The cubic curve of best fit for village A is $y = -0.83x^3 + 51.43x^2 + 0.12x + 2149.86$. The line of best fit for village B is $y = 194.3x + 2020.4$. At which date did the two villages have approximately the same number of boys?",
    options: ["At the end of year 2011", "2012", "2013", "At the beginning of year 2014"],
    correctAnswer: 2,
    explanation: "Setting the equations equal or looking at the graph, they intersect around $x = 2$, which corresponds to the year $2011 + 2 = 2013$.",
    youtubeLink: "https://youtu.be/dm3FYSb04Vs?si=F_72VyDZ0IljBl_4",
    category: ""
  },
  {
    id: "est1_2021_oct_32",
    question: "What is the closest difference between the actual number of boys in village B and the number which can be predicted from the line of best fit in 2014?",
    options: ["13", "26", "53", "100"],
    correctAnswer: 2,
    explanation: "In 2014 ($x = 3$), the predicted value is $194.3(3) + 2020.4 = 2603.3$. The actual value from the graph is roughly 2550. The difference is $2603.3 - 2550 \\approx 53$.",
    youtubeLink: "https://youtu.be/0yT4kct2zy8?si=Gpdx6IwPPrH0ZTwr",
    category: ""
  },
  {
    id: "est1_2021_oct_33",
    question: "A bag contains 3 green balls, 5 red balls, 8 blue balls, and 4 yellow balls. What is the value of the square of the probability of choosing a yellow or a red ball from the bag?",
    options: ["0.2025", "0.45", "0.671", "0.9"],
    correctAnswer: 0,
    explanation: "Total balls = $3 + 5 + 8 + 4 = 20$. Probability of yellow or red = $\\frac{4 + 5}{20} = \\frac{9}{20} = 0.45$. The square of this probability is $0.45^2 = 0.2025$.",
    youtubeLink: "https://youtu.be/kNZ0TqYYLD8?si=YCuraloap0It76gx",
    category: ""
  },
  {
    id: "est1_2021_oct_34",
    question: "Brenda went to the mall on a sale day, and bought all the items shown in the table below. If all the items were on a 35% sale except for the socks which were on a 15% sale, how much would she pay if she bought the items on a non-sale day?",
    svg: `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Item</th>
      <th class="border border-gray-400 px-2 py-1">Price (in $)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">T-shirt</td><td class="border border-gray-400 px-2 py-1">25.6</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Pants</td><td class="border border-gray-400 px-2 py-1">35.25</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Shoes</td><td class="border border-gray-400 px-2 py-1">50.22</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Jacket</td><td class="border border-gray-400 px-2 py-1">71.21</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Socks</td><td class="border border-gray-400 px-2 py-1">11.44</td></tr>
  </tbody>
</table>`,
    options: ["$ 193.72", "$ 259.23", "$ 261.52", "$ 293.89"],
    correctAnswer: 3,
    explanation: "Non-sale price for items with 35% discount = $\\frac{25.6 + 35.25 + 50.22 + 71.21}{1 - 0.35} = \\frac{182.28}{0.65} = 280.43$. Non-sale price for socks = $\\frac{11.44}{1 - 0.15} = \\frac{11.44}{0.85} = 13.46$. Total non-sale price = $280.43 + 13.46 = 293.89$.",
    youtubeLink: "https://youtu.be/gYiFikjD8V4?si=etyeuvhXMVREWGod",
    category: ""
  },
  {
    id: "est1_2021_oct_35",
    question: "Intensity is the measure of the energy transmitted by a wave. The formula of intensity is given by $I = \\frac{P}{A}$, where $P$ is the power (in Watts), and $A$ is the area of the cross section (in square meters). What is the formula for the radius ($R$) of a circular surface in terms of $I$ and $P$?",
    options: ["$R = \\frac{P}{I}$", "$R = \\frac{P}{I\\pi}$", "$R = \\sqrt{\\frac{P}{I}}$", "$R = \\sqrt{\\frac{P}{I\\pi}}$"],
    correctAnswer: 3,
    explanation: "$I = \\frac{P}{\\pi R^2} \\implies R^2 = \\frac{P}{I\\pi} \\implies R = \\sqrt{\\frac{P}{I\\pi}}$.",
    youtubeLink: "https://youtu.be/sn8IJp2iFYM?si=ad1SgJ1-ZTaj_PT7",
    category: ""
  },
  {
    id: "est1_2021_oct_36",
    question: "Which of the following cannot be the value of the radius of the circular surface if the intensity of light incident to normal to the surface from a source of 110 W power of light, is greater than $1.2 \\times 10^4 \\text{ W/m}^2$?",
    options: ["5.45 cm", "5.35 cm", "5.25 cm", "5.15 cm"],
    correctAnswer: 0,
    explanation: "$I > 1.2 \\times 10^4 \\implies \\frac{110}{\\pi R^2} > 1.2 \\times 10^4 \\implies R^2 < \\frac{110}{1.2 \\times 10^4 \\pi} \\approx 0.002917$. Thus $R < 0.05401$ m or $5.401$ cm. Since 5.45 cm is greater than 5.401 cm, it cannot be the radius.",
    youtubeLink: "https://youtu.be/SAJWSLFEDhQ?si=-AD0ekylDnU9BQbL",
    category: ""
  },
  {
    id: "est1_2021_oct_37",
    question: "Using the figure (where an interior angle is $x+8$, another is $100^\\circ$, and the third vertex has exterior angle $3x-10$ and adjacent interior angle vertically opposite labeled $2y+20$), what is the value of $y$?",
    options: ["80", "59", "3.5", "-3.5"],
    correctAnswer: 3,
    explanation: "By the exterior angle theorem, $3x - 10 = 100 + (x + 8) \\implies 2x = 118 \\implies x = 59$. The interior angle is $180 - (3(59) - 10) = 180 - 167 = 13^\\circ$. The angle vertically opposite to the interior angle is $2y + 20$. So $2y + 20 = 13 \\implies 2y = -7 \\implies y = -3.5$.",
    youtubeLink: "https://youtu.be/JJNvZhbi1qc?si=j6-HeBPDxSo5sMLd",
    category: ""
  },
  {
    id: "est1_2021_oct_38",
    question: "Given that $A(2, 5)$, $B(9, -2)$ and $J(4, h)$ lie on the same line, what is the value of $h$?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    explanation: "Slope of $AB = \\frac{-2 - 5}{9 - 2} = -1$. Slope of $AJ = \\frac{h - 5}{4 - 2} = \\frac{h - 5}{2}$. Setting slopes equal: $\\frac{h - 5}{2} = -1 \\implies h - 5 = -2 \\implies h = 3$.",
    youtubeLink: "https://youtu.be/VczHOzmQeG4?si=l4Xc1fyCc0k6uUkg",
    category: ""
  },
  {
    id: "est1_2021_oct_39",
    question: "Which of the following systems has infinite number of solutions?",
    options: [
      "$2x - 3y = 1$ and $x + 3y = 4$",
      "$-2x + y = -1$ and $5y = -2x$",
      "$3x + y = 2$ and $x = -5y$",
      "$-2x - 2y = 4$ and $y = -x - 2$"
    ],
    correctAnswer: 3,
    explanation: "$-2x - 2y = 4$ simplifies to $x + y = -2$, which gives $y = -x - 2$. This is exactly the second equation in option D, meaning they are the same line and have infinitely many solutions.",
    youtubeLink: "https://youtu.be/m3Pj-EXQLiA?si=WJZ6_CFMrHp1SzLx",
    category: ""
  },
  {
    id: "est1_2021_oct_40",
    question: "How many different integers between 15 and 45 contain only digits from the following list: 1, 3, 5, 7, 9?",
    options: ["16", "7", "6", "5"],
    correctAnswer: 1,
    explanation: "The possible tens digits are 1 and 3. If the tens digit is 1, the units digit can be 7 or 9 (since the number must be > 15, assuming strictly between, but if 15 is excluded it's 17, 19). If the tens digit is 3, the units digit can be 1, 3, 5, 7, 9. That gives $2 + 5 = 7$ integers.",
    youtubeLink: "https://youtu.be/rsBm3_7AQmE?si=thQaVr3dTN7Ci8AH",
    category: ""
  },
  {
    id: "est1_2021_oct_41",
    question: "Which quadratic function has its graph passing through the points $(3,0)$, $(-2,0)$, and $(1,7)$?",
    options: [
      "$f(x) = \\frac{7}{6}x^2 + \\frac{7}{6}x + 7$",
      "$f(x) = -\\frac{7}{6}x^2 + \\frac{7}{6}x + 7$",
      "$f(x) = -\\frac{7}{6}x^2 - \\frac{7}{6}x + 7$",
      "$f(x) = \\frac{7}{6}x^2 - \\frac{7}{6}x + 7$"
    ],
    correctAnswer: 1,
    explanation: "The roots are 3 and -2, so $f(x) = a(x - 3)(x + 2)$. Using $(1,7)$: $7 = a(1 - 3)(1 + 2) = a(-2)(3) = -6a \\implies a = -\\frac{7}{6}$. Thus, $f(x) = -\\frac{7}{6}(x^2 - x - 6) = -\\frac{7}{6}x^2 + \\frac{7}{6}x + 7$.",
    youtubeLink: "https://youtu.be/-m_cjN_Biyk?si=o1IH6uUbuIr6G0gp",
    category: ""
  },
  {
    id: "est1_2021_oct_42",
    question: "Alonso used the table below to graph the sets of ordered pairs shown. What is the type of the graph drawn and which equation best models it?\\nx: -7, -4, -2, 1, 7\\ny: -11, -5, -1, 5, 17",
    options: [
      "Linear function: $y = 2x + 3$",
      "Linear function: $y = -2x + 3$",
      "Quadratic function: $y = x^2 + 4x - 32$",
      "Quadratic function: $y = -2x^2 - 10x + 17$"
    ],
    correctAnswer: 0,
    explanation: "Checking the slopes between points: $\\frac{-5 - (-11)}{-4 - (-7)} = \\frac{6}{3} = 2$. The slope is constant, so it's linear. Equation: $y - 5 = 2(x - 1) \\implies y = 2x + 3$.",
    youtubeLink: "https://youtu.be/XitBc9KlGS0?si=I1ib8treWSRv6piN",
    category: ""
  },
  {
    id: "est1_2021_oct_43",
    question: "A school conducted a survey on the brand of the phone its employees are using. The survey data is shown in the table below:\\nStaff: Huawei 13, Samsung 15, IPhone 20, Other 3\\nTeachers: Huawei 22, Samsung 56, IPhone 44, Other 7\\nWhat is the percentage of staff members using IPhone out of all the employees?",
    options: ["39.2%", "31.25%", "11.11%", "9%"],
    correctAnswer: 2,
    explanation: "Total staff = $13 + 15 + 20 + 3 = 51$. Total teachers = $22 + 56 + 44 + 7 = 129$. Total employees = $51 + 129 = 180$. Staff members using IPhone = 20. Percentage = $\\frac{20}{180} = \\frac{1}{9} \\approx 11.11\\%$.",
    youtubeLink: "https://youtu.be/qBwCGTxhrZ8?si=w_LLmLaYDQ2FeJ7v",
    category: ""
  },
  {
    id: "est1_2021_oct_44",
    question: "Given that the two lines $(d): 2x + ty = -1$ and $(m): -3x - gy = 2$ are perpendicular, and $t$ and $g$ are constants, what is the value of $-5tg$?",
    options: ["-30", "-6", "3/2", "30"],
    correctAnswer: 3,
    explanation: "Slope of $(d)$ is $-\\frac{2}{t}$. Slope of $(m)$ is $-\\frac{3}{g}$. Since they are perpendicular, $(-\\frac{2}{t})(-\\frac{3}{g}) = -1 \\implies \\frac{6}{tg} = -1 \\implies tg = -6$. Then $-5tg = -5(-6) = 30$.",
    youtubeLink: "https://youtu.be/TpyHr-4THIc?si=66-RCdglw8Lo0ani",
    category: ""
  },
  {
    id: "est1_2021_oct_45",
    question: "Which of the following points is not a solution to $|2x - 1| > 3y$?",
    options: ["(4, 2)", "(2, 1)", "(-1, -1)", "(-2, 1)"],
    correctAnswer: 1,
    explanation: "Check $(2, 1)$: $|2(2) - 1| > 3(1) \\implies |3| > 3 \\implies 3 > 3$, which is false. Therefore, $(2, 1)$ is not a solution.",
    youtubeLink: "https://youtu.be/65ryUcHQ6Ls?si=rG00hM3Q-88TSZIy",
    category: ""
  },
  {
    id: "est1_2021_oct_46",
    question: "Given $2x - 7 < 5$ and $\\frac{3x}{2} - 2 > \\frac{19}{4}$, what is the only integer $x$ that satisfies both inequalities?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    explanation: "$2x - 7 < 5 \\implies 2x < 12 \\implies x < 6$. \n$\\frac{3x}{2} > \\frac{19}{4} + 2 = \\frac{27}{4} \\implies 3x > 13.5 \\implies x > 4.5$. The only integer between 4.5 and 6 is 5.",
    youtubeLink: "https://youtu.be/xtFMdhjZSHs?si=2ScVbIe24pYH_MEf",
    category: ""
  },
  {
    id: "est1_2021_oct_47",
    question: "What is twice the remainder of the division of $(2x^3 - 1 + 3x^2)$ by $(2x - 3)$?",
    options: ["4.5", "12.5", "25", "26"],
    correctAnswer: 2,
    explanation: "By the Remainder Theorem, substitute $x = 1.5$. $P(1.5) = 2(1.5)^3 + 3(1.5)^2 - 1 = 2(3.375) + 3(2.25) - 1 = 6.75 + 6.75 - 1 = 12.5$. Twice the remainder is $2 \\times 12.5 = 25$.",
    youtubeLink: "https://youtu.be/SbAzDNYy2xY?si=NKE6EXjGc3gMv95Z",
    category: ""
  },
  {
    id: "est1_2021_oct_48",
    question: "A telecommunication company offers 4 different monthly packages of internet subscription to its customers. The first package is for $12 in which the customer will benefit from 1200 MBs internet in addition to 400 MBs gift after 3 consecutive months of subscription. The second package is for $16 in which the customer will benefit from 2000 MBs internet in addition to 550 MBs gift after 3 consecutive months of subscription. The third package is for $25 in which the customer will benefit from 3400 MBs internet in addition to 800 MBs gift after 5 consecutive months of subscription. The fourth package is for $30 in which the customer will benefit from 4000 MBs internet with no addition. If Abdallah wants to choose the cheapest offer for him for the next 3 months, which one should he choose?",
    options: ["First package", "Second package", "Third package", "Fourth package"],
    correctAnswer: 1,
    explanation: "Comparing the cost per MB over 3 months: First package gives $3 \\times 1200 + 400 = 4000$ MB for $\\$36$ ($\\$0.009$/MB). Second package gives $3 \\times 2000 + 550 = 6550$ MB for $\\$48$ ($\\$0.0073$/MB). The second package provides the cheapest cost per unit of data.",
    category: ""
  },
  {
    id: "est1_2021_oct_49",
    question: "If $\\frac{a + 2i}{3 - i} = 2 - 5i$ with $i = \\sqrt{-1}$, what is the value of $a^2$?",
    options: ["$2(19i + 180)$", "$19i + 180$", "$-19i - 180$", "$-2(19i + 180)$"],
    correctAnswer: 3,
    explanation: "$a + 2i = (3 - i)(2 - 5i) = 6 - 15i - 2i + 5i^2 = 6 - 17i - 5 = 1 - 17i$. So $a = 1 - 17i - 2i = 1 - 19i$. Then $a^2 = (1 - 19i)^2 = 1 - 38i + 361i^2 = 1 - 38i - 361 = -360 - 38i$. This is equal to $-2(180 + 19i)$.",
    youtubeLink: "https://youtu.be/AdFKmFivXf0?si=JnZg5Kihi4KETJ16",
    category: ""
  },
  {
    id: "est1_2021_oct_50",
    question: "According to the data published by \"Worldometer\", the total cases of people infected by Covid-19 in Egypt on July 24, 2020, was 91,072, while in August 3, 2020 it went up to 94,640 cases. If we consider the graph of the change in number of total cases over the change in days is linear, what will be the total cases reported in August 9, 2020? (Note that there are 31 days in July).",
    options: ["96,781 cases", "97,138 cases", "98,208 cases", "101,776 cases"],
    correctAnswer: 0,
    explanation: "Number of days from July 24 to August 3 is $7 + 3 = 10$ days. Change in cases = $94,640 - 91,072 = 3568$. Daily rate = $356.8$. August 9 is 6 days after August 3. Total cases = $94,640 + 6(356.8) = 94,640 + 2140.8 = 96,780.8 \\approx 96,781$.",
    youtubeLink: "https://youtu.be/dgl61cSH8B8?si=vr9Zvzobrmx7f60S",
    category: ""
  },
  {
    id: "est1_2021_oct_51",
    question: "If $h$ varies inversely as $k$, and $h = 9$ when $k = 20$, what is the value of $k + 4$ when $h = 15$?",
    type: "grid-in",
    options: [],
    correctAnswer: "16",
    explanation: "$hk = 9 \\times 20 = 180$. When $h = 15$, $15k = 180 \\implies k = 12$. The value of $k + 4$ is $12 + 4 = 16$.",
    youtubeLink: "https://youtu.be/16DZL8gJPd8?si=qOMKSI98RLei6T7A",
    category: ""
  },
  {
    id: "est1_2021_oct_52",
    question: "Given the points $A(1, 4)$, $C(-4, -1)$, $B(4, 1)$, and $R(-1, -4)$, what is the value of the area of quadrilateral $ABRC$?",
    type: "grid-in",
    options: [],
    correctAnswer: "30",
    explanation: "The coordinates form a rectangle. $AB = \\sqrt{(4-1)^2 + (1-4)^2} = \\sqrt{9+9} = \\sqrt{18}$. $BR = \\sqrt{(-1-4)^2 + (-4-1)^2} = \\sqrt{25+25} = \\sqrt{50}$. Area = $\\sqrt{18} \\times \\sqrt{50} = \\sqrt{900} = 30$.",
    youtubeLink: "https://youtu.be/KMfKXyo5G_8?si=oww7gHzkkwZ_QFgY",
    category: ""
  },
  {
    id: "est1_2021_oct_53",
    question: "A company decided to create brochures to introduce their products. The printing house responsible for designing and printing the brochures will charge the company $79 for the design with 44 cents for each brochure printed. If the company decided to print 2000 brochures, how much should they pay?",
    type: "grid-in",
    options: [],
    correctAnswer: "959",
    explanation: "Cost = $79 + 0.44 \\times 2000 = 79 + 880 = 959$.",
    youtubeLink: "https://youtu.be/QO6_EYCmQ0g?si=bt-DIfRRfW-4AUCK",
    category: ""
  },
  {
    id: "est1_2021_oct_54",
    question: "The maximum budget put by the company for the brochures is $1,950. How many brochures at most can they print?",
    type: "grid-in",
    options: [],
    correctAnswer: "4252",
    explanation: "$79 + 0.44x \\le 1950 \\implies 0.44x \\le 1871 \\implies x \\le 4252.27$. The maximum number of brochures is 4252.",
    youtubeLink: "https://youtu.be/fXzakwqKeuU?si=gTOiCos3TrR-nKE6",
    category: ""
  },
  {
    id: "est1_2021_oct_55",
    question: "Lucas bought a car for $3,500. He lost 12% of its price when he sold it for Brad, while Brad won 5% of what he paid when he sold it to Amira. How much did Amira pay for the car?",
    type: "grid-in",
    options: [],
    correctAnswer: "3234",
    explanation: "Brad's buying price = $3500 \\times (1 - 0.12) = 3500 \\times 0.88 = 3080$. Amira's buying price = $3080 \\times (1 + 0.05) = 3080 \\times 1.05 = 3234$.",
    youtubeLink: "https://youtu.be/-5HQB_VuFRs?si=ROzu87vfOqfOogdk",
    category: ""
  },
  {
    id: "est1_2021_oct_56",
    question: "In 2010, at a school, 3/5 of the seniors wanted to celebrate their prom night at restaurant X, while 30% of the rest voted for restaurant Y, and the 84 students left voted for restaurant Z. How many senior students voted for restaurant X?",
    type: "grid-in",
    options: [],
    correctAnswer: "180",
    explanation: "Let total students be $T$. $3/5 T$ voted for X, so $2/5 T$ is the rest. $30\\%$ of the rest voted for Y, leaving $70\\%$ of the rest for Z. So $0.7 \\times (2/5)T = 84 \\implies 0.28T = 84 \\implies T = 300$. Students who voted for X = $\\frac{3}{5} \\times 300 = 180$.",
    youtubeLink: "https://youtu.be/-XTzGLOLU-I?si=xAz4B9bydVoO9uDb",
    category: ""
  },
  {
    id: "est1_2021_oct_57",
    question: "The graph shows the number of new cars of the two brands Hyundai (solid line) and Honda (dashed line), bought by the citizens in country X during years 2010 and 2019. According to the graph, how much was the percent decline of buying a new Honda from 2010 to 2015?",
    type: "grid-in",
    options: [],
    correctAnswer: "12.5",
    explanation: "In 2010, Honda (dashed line) is at 800. In 2015, it reaches its minimum at 700. The decline is $800 - 700 = 100$. Percent decline = $\\frac{100}{800} \\times 100 = 12.5\\%$.",
    youtubeLink: "https://youtu.be/If1GUIwJxeI?si=fxTo0zNJdLCQAahU",
    category: ""
  },
  {
    id: "est1_2021_oct_58",
    question: "After the first tie between the number of cars bought of the two brands, how many years did it take Hyundai to sell 50 more cars than Honda in country X?",
    type: "grid-in",
    options: [],
    correctAnswer: "4",
    explanation: "The first tie (intersection) is in 2012 when both are at 850. In 2016, Hyundai (solid) is at 850 and Honda (dashed) is at 800, which is a difference of 50. The number of years is $2016 - 2012 = 4$.",
    youtubeLink: "https://youtu.be/n8Flm98VMk8?si=GxKNr_iEAaaLVpDr",
    category: ""
  }
];
