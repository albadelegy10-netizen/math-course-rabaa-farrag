import { Question } from './types';

const htmlTableQ7 = `
<div class="overflow-x-auto my-4 flex justify-center">
  <table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
    <thead>
      <tr class="bg-gray-100">
        <th class="border border-gray-400 px-2 py-1"></th>
        <th class="border border-gray-400 px-2 py-1">History</th>
        <th class="border border-gray-400 px-2 py-1">Math</th>
        <th class="border border-gray-400 px-2 py-1">Audit</th>
        <th class="border border-gray-400 px-2 py-1">IT</th>
        <th class="border border-gray-400 px-2 py-1">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-400 px-2 py-1 font-bold">Rome</td>
        <td class="border border-gray-400 px-2 py-1">65</td>
        <td class="border border-gray-400 px-2 py-1">35</td>
        <td class="border border-gray-400 px-2 py-1">35</td>
        <td class="border border-gray-400 px-2 py-1">15</td>
        <td class="border border-gray-400 px-2 py-1 font-bold">150</td>
      </tr>
      <tr>
        <td class="border border-gray-400 px-2 py-1 font-bold">Paris</td>
        <td class="border border-gray-400 px-2 py-1">75</td>
        <td class="border border-gray-400 px-2 py-1">65</td>
        <td class="border border-gray-400 px-2 py-1">10</td>
        <td class="border border-gray-400 px-2 py-1">25</td>
        <td class="border border-gray-400 px-2 py-1 font-bold">175</td>
      </tr>
      <tr>
        <td class="border border-gray-400 px-2 py-1 font-bold">Tokyo</td>
        <td class="border border-gray-400 px-2 py-1">40</td>
        <td class="border border-gray-400 px-2 py-1">115</td>
        <td class="border border-gray-400 px-2 py-1">50</td>
        <td class="border border-gray-400 px-2 py-1">20</td>
        <td class="border border-gray-400 px-2 py-1 font-bold">225</td>
      </tr>
      <tr>
        <td class="border border-gray-400 px-2 py-1 font-bold">NYC</td>
        <td class="border border-gray-400 px-2 py-1">70</td>
        <td class="border border-gray-400 px-2 py-1">60</td>
        <td class="border border-gray-400 px-2 py-1">30</td>
        <td class="border border-gray-400 px-2 py-1">40</td>
        <td class="border border-gray-400 px-2 py-1 font-bold">200</td>
      </tr>
      <tr class="bg-gray-100 font-bold">
        <td class="border border-gray-400 px-2 py-1">Total</td>
        <td class="border border-gray-400 px-2 py-1">250</td>
        <td class="border border-gray-400 px-2 py-1">275</td>
        <td class="border border-gray-400 px-2 py-1">125</td>
        <td class="border border-gray-400 px-2 py-1">100</td>
        <td class="border border-gray-400 px-2 py-1">750</td>
      </tr>
    </tbody>
  </table>
</div>
`;

const svgBarGraphQ19 = `
<svg viewBox="0 0 400 250" class="mx-auto h-48 w-auto">
  <text x="100" y="20" font-size="12" font-weight="bold">Age distribution of employees</text>
  
  <!-- Y Axis -->
  <line x1="40" y1="200" x2="40" y2="40" stroke="black" />
  <text x="10" y="200" font-size="10">0</text>
  <text x="10" y="160" font-size="10">10</text>
  <text x="10" y="120" font-size="10">20</text>
  <text x="10" y="80" font-size="10">30</text>
  <text x="10" y="40" font-size="10">40</text>
  
  <!-- X Axis -->
  <line x1="40" y1="200" x2="350" y2="200" stroke="black" />
  
  <!-- Bars -->
  <!-- 20-30: 28% -->
  <rect x="50" y="88" width="40" height="112" fill="gray" />
  <text x="50" y="215" font-size="10">[20;30[</text>
  
  <!-- 30-40: 37% -->
  <rect x="110" y="52" width="40" height="148" fill="gray" />
  <text x="110" y="215" font-size="10">[30;40[</text>
  
  <!-- 40-50: 20% -->
  <rect x="170" y="120" width="40" height="80" fill="gray" />
  <text x="170" y="215" font-size="10">[40;50[</text>
  
  <!-- 50-60: 12% -->
  <rect x="230" y="152" width="40" height="48" fill="gray" />
  <text x="230" y="215" font-size="10">[50;60[</text>
  
  <!-- 60-70: 3% -->
  <rect x="290" y="188" width="40" height="12" fill="gray" />
  <text x="290" y="215" font-size="10">[60;70[</text>
</svg>
`;

export const EST1_2020_M10_SET: Question[] = [
  {
    id: 1,
    question: "The secret value, $k$, of a 4-digit pin code $abcd$ is obtained by subtracting the triple of $b$ from $c$, and dividing the resulting expression by half of the sum of $a$ and $d$. What is the secret value, $k$, in terms of $a$, $b$, $c$ and $d$?",
    options: [
      "$k = \\frac{c-3b}{2a+2d}$",
      "$k = \\frac{b-3c}{2a+2b}$",
      "$k = \\frac{2c-6b}{a+d}$",
      "$k = \\frac{6b-2c}{a+d}$"
    ],
    correctAnswer: 2,
    explanation: "$k = \\frac{c - 3b}{\\frac{a+d}{2}} = \\frac{2(c-3b)}{a+d} = \\frac{2c-6b}{a+d}$.",
    youtubeLink: "https://youtu.be/C1A5Px491_o?si=moVafVgA3L_UsUOr",
    category: "",
    topics: ["Algebra", "isolation"]
  },
  {
    id: 2,
    question: "A library sells new and used books. If, out of the total of 474, there are twice as many new books as old ones. How many new books are there in the library?",
    options: ["316", "158", "352", "238"],
    correctAnswer: 0,
    explanation: "$\\text{New} = 2 \\times \\text{Old}$. $\\text{Total} = \\text{New} + \\text{Old} = 3 \\times \\text{Old} = 474$. $\\text{Old} = 158$. $\\text{New} = 2 \\times 158 = 316$.",
    youtubeLink: "https://youtu.be/9BIJ3H5t020?si=NQLEWMm_Urqv-vdI",
    category: "",
    topics: ["Word Problem", "Linear Equations"]
  },
  {
    id: 3,
    question: "What is the area of the sector defined by a central angle of $54^\\circ$ in the circle of equation $x^2 + y^2 - 8x + 12y - 12 = 0$?",
    options: ["$15\\pi$", "$9.6\\pi$", "$5.4\\pi$", "$2.4\\pi$"],
    correctAnswer: 1,
    explanation: "$(x-4)^2 + (y+6)^2 = 12 + 16 + 36 = 64$. Radius $r=8$. Area = $\\pi(8)^2 = 64\\pi$. Sector = $\\frac{54}{360} \\times 64\\pi = 0.15 \\times 64\\pi = 9.6\\pi$.",
    youtubeLink: "https://youtu.be/RUmKbcB2G1c?si=ps__mKDu1UWLTCff",
    category: "",
    topics: ["Geometry", "Circle Geometry", "area"]
  },
  {
    id: 4,
    question: "The graph shown represents which of the following equations?",
    options: ["$y = -\\frac{2}{5}x - 3$", "$y = \\frac{2}{5}x + 3$", "$y = -\\frac{2}{5}x + 3$", "$y = -\\frac{5}{2}x + 3$"],
    correctAnswer: 2,
    explanation: "The line has a negative slope of $-\\frac{2}{5}$ and a positive $y$-intercept of $3$.",
    youtubeLink: "https://youtu.be/4TWXYHuSGis?si=de-jbR5gnjiBA3Vu",
    category: "",
    topics: ["Linear Equations", "Data Analysis"]
  },
  {
    id: 5,
    question: "If $f(x) = 5 - 2x$ and $g(x) = \\frac{x^2}{4}$, which of the following is not in the range of $f(g(x))$?",
    options: ["-3", "0", "5", "6"],
    correctAnswer: 3,
    explanation: "$f(g(x)) = 5 - 2\\left(\\frac{x^2}{4}\\right) = 5 - \\frac{x^2}{2}$. The maximum value is $5$ (when $x=0$). The range is $(-\\infty, 5]$. $6$ is greater than $5$, so it is not in the range.",
    youtubeLink: "https://youtu.be/VuEjyqExpcI?si=o1wQwHvtlgu0dIfY",
    category: "",
    topics: ["Functions", "composite"]
  },
  {
    id: 6,
    question: "A line, having a slope of $-\\frac{2}{3}$ passes through the points $A (2-k ; 5)$ and $B (-2k ; -1)$. What is the value of $k$?",
    options: ["11", "4", "-4", "-11"],
    correctAnswer: 3,
    explanation: "\\text{Slope} = $\\frac{-1 - 5}{-2k - (2-k)} = \\frac{-6}{-k - 2}$. $-\\frac{2}{3} = \\frac{-6}{-k - 2} \\implies -2(-k-2) = -18 \\implies 2k + 4 = -18 \\implies 2k = -22 \\implies k = -11$.",
    youtubeLink: "https://youtu.be/tJ8iIsNpJOs?si=7zgoRs6C3Ne_hARy",
    category: "",
    topics: ["Geometry", "Linear Equations"]
  },
  {
    id: 7,
    question: "In which major can you find the highest percentage of students who prefer NYC?",
    svg: htmlTableQ7,
    options: ["History", "IT", "Audit", "Math"],
    correctAnswer: 1,
    explanation: "History: $\\frac{70}{250} = 28\\%$. Math: $\\frac{60}{275} \\approx 21.8\\%$. Audit: $\\frac{30}{125} = 24\\%$. IT: $\\frac{40}{100} = 40\\%$. IT is the highest.",
    youtubeLink: "https://youtu.be/ZOjy0JFZ-l4?si=eWqnnXEts4gwmxuJ",
    category: "",
    topics: ["Data Analysis", "percentage"]
  },
  {
    id: 8,
    question: "What fraction of people who prefer Rome or Paris come from Audit or Math majors?",
    svg: htmlTableQ7,
    options: ["140/325", "17/65", "29/65", "4/13"],
    correctAnswer: 2,
    explanation: "Total preferring Rome or Paris = $150 + 175 = 325$. Audit/Math in Rome = $35+35=70$. Audit/Math in Paris = $65+10=75$. Total Audit/Math = $145$. Fraction = $\\frac{145}{325} = \\frac{29}{65}$.",
    youtubeLink: "https://youtu.be/0SrcZuFkXmI?si=IXWomEuthXWitgBE",
    category: "",
    topics: ["Data Analysis", "ratio"]
  },
  {
    id: 9,
    question: "The selling price of an apartment is directly proportional to its area. If an apartment of $127\\text{ m}^2$ is sold for $\$168,275$, what would be the price of a $156\\text{ m}^2$ apartment?",
    options: ["$237,900$", "$208,500$", "$136,993$", "$206,700$"],
    correctAnswer: 3,
    explanation: "$\\frac{\\text{Price}}{\\text{Area}} = k$. $\\frac{168275}{127} = 1325 \\text{ \\$/m}^2$. $\\text{Price} = 1325 \\times 156 = \\$206,700$.",
    youtubeLink: "https://youtu.be/EmUCeeiYz5o?si=NCJOW-w2FDTGbwQ_",
    category: "",
    topics: ["ratio", "Word Problem"]
  },
  {
    id: 10,
    question: "In a hospital, the medical staff is composed of 34 doctors and 68 nurses. How many additional doctors should join the hospital in order for the ratio of doctors to total number of medical staff to become 3 to 7?",
    options: ["21", "19", "17", "15"],
    correctAnswer: 2,
    explanation: "Current total = $102$. Let $x$ be added doctors. $\\frac{34+x}{102+x} = \\frac{3}{7} \\implies 7(34+x) = 3(102+x) \\implies 238 + 7x = 306 + 3x \\implies 4x = 68 \\implies x = 17$.",
    youtubeLink: "https://youtu.be/4tQIM4lLrss?si=lL_9_J_dARLiPSy5",
    category: "",
    topics: ["ratio", "Word Problem"]
  },
  {
    id: 11,
    question: "Which of the following is equivalent to the expression $\\sqrt{27x^3y^5 - 18x^2y^4}$ where $x,y > 0$?",
    options: [
      "$3xy^2(\\sqrt{3xy} - \\sqrt{2})$",
      "$3xy^2\\sqrt{3xy - 2}$",
      "$9xy^2\\sqrt{3xy - 2}$",
      "$9xy^2(\\sqrt{3xy} - \\sqrt{2})$"
    ],
    correctAnswer: 1,
    explanation: "Factor out $9x^2y^4$: $\\sqrt{9x^2y^4(3xy - 2)} = 3xy^2\\sqrt{3xy - 2}$.",
    youtubeLink: "https://youtu.be/HwF51gzZAlE?si=ZsgGQEweKpSW3Hja",
    category: "",
    topics: ["Radicals", "Algebra"]
  },
  {
    id: 12,
    question: "If $\\sin A = \\cos\\left(\\frac{7\\pi}{3}\\right)$, what is one possible value of $A$ in radians?",
    options: ["$\\frac{\\pi}{2}$", "$\\frac{\\pi}{3}$", "$\\frac{\\pi}{4}$", "$\\frac{\\pi}{6}$"],
    correctAnswer: 3,
    explanation: "$\\frac{7\\pi}{3} = 2\\pi + \\frac{\\pi}{3}$. $\\cos\\left(\\frac{7\\pi}{3}\\right) = \\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$. $\\sin A = \\frac{1}{2} \\implies A = \\frac{\\pi}{6}$.",
    youtubeLink: "https://youtu.be/qkJazH6v_WY?si=aPeIEowko1VXMYHU",
    category: "",
    topics: ["Trigonometry"]
  },
  {
    id: 13,
    question: "Maria downloaded to her music library a total of 350 pop and rock songs. If the ratio of pop to rock songs is 3 to 11, how many rock songs are there in Maria's library?",
    options: ["75", "125", "175", "275"],
    correctAnswer: 3,
    explanation: "Total parts = $3 + 11 = 14$. Rock fraction = $\\frac{11}{14}$. Rock songs = $\\frac{11}{14} \\times 350 = 11 \\times 25 = 275$.",
    youtubeLink: "https://youtu.be/sHUnMbDW0lQ?si=yTyi2c1eYbG3x92H",
    category: "",
    topics: ["ratio"]
  },
  {
    id: 14,
    question: "If $5 - \\frac{3}{2}x \\ge 3$, what is the highest value of $\\frac{9}{8}x + 1$?",
    options: ["2.5", "3.5", "4.5", "5.5"],
    correctAnswer: 0,
    explanation: "$5 - 3 \\ge 1.5x \\implies 2 \\ge 1.5x \\implies x \\le \\frac{4}{3}$. Max $x$ is $\\frac{4}{3}$. Max value = $\\frac{9}{8}\\left(\\frac{4}{3}\\right) + 1 = \\frac{3}{2} + 1 = 2.5$.",
    youtubeLink: "https://youtu.be/AO5x6wrUbHw?si=Tjd17jeN3PUjTw5x",
    category: "",
    topics: ["Inequalities"]
  },
  {
    id: 15,
    question: "A craftsman is looking for two kinds of paint. The first kind $a$ is packaged in 10 kg jars ($\$45$), the second $b$ in 25 kg jars ($\$120$). The load must not exceed 250 kg and the total sum must be at least $\$900$. Which system of inequalities verifies this?",
    options: [
      "$\\begin{cases} 10a + 25b \\ge 250 \\\\ 45a + 120b \\le 900 \\end{cases}$",
      "$\\begin{cases} 10a + 25b \\le 250 \\\\ 45a + 120b \\le 900 \\end{cases}$",
      "$\\begin{cases} 10a + 25b \\ge 250 \\\\ 45a + 120b \\ge 900 \\end{cases}$",
      "$\\begin{cases} 10a + 25b \\le 250 \\\\ 45a + 120b \\ge 900 \\end{cases}$"
    ],
    correctAnswer: 3,
    explanation: "Load not exceed $250\\text{ kg} \\implies 10a + 25b \\le 250$. Cost at least $\$900 \\implies 45a + 120b \\ge 900$.",
    youtubeLink: "https://youtu.be/I8Aa5WUcTYw?si=WwjPUpiRl6n72Yk2",
    category: "",
    topics: ["Inequalities", "Systems"]
  },
  {
    id: 16,
    question: "Brad got an average of 76 on his last three math tests. What grade should he get on the fourth test to obtain an average of 80?",
    options: ["88", "90", "92", "94"],
    correctAnswer: 2,
    explanation: "Total needed = $80 \\times 4 = 320$. Current total = $76 \\times 3 = 228$. Grade needed = $320 - 228 = 92$.",
    youtubeLink: "https://youtu.be/RMtAseuQm80?si=EBx4DL8-lSN0xzqP",
    category: "",
    topics: ["Statistics"]
  },
  {
    id: 17,
    question: "From 2018 to 2019, the amount in Julia's bank account increased by $22.5\\%$ to $\$14,325$. To the nearest dollar, what was the initial amount in her bank account?",
    options: ["$11,694$", "$14,010$", "$11,102$", "$12,775$"],
    correctAnswer: 0,
    explanation: "$\\text{Initial} \\times 1.225 = 14325 \\implies \\text{Initial} = \\frac{14325}{1.225} \\approx 11693.88 \\approx \\$11,694$.",
    youtubeLink: "https://youtu.be/woH-2XwXgHc?si=u1l012vnXXXQqhLE",
    category: "",
    topics: ["percentage"]
  },
  {
    id: 18,
    question: "The ministry of finance conducted a survey... meeting was held in the presence of 150 bank managers... Which conclusion can be drawn about the survey's reliability?",
    options: [
      "Reliable because involves people from banking.",
      "Unreliable because sample is too small.",
      "Unreliable because sample does not cover employees of different positions.",
      "Reliable because it was made by ministry."
    ],
    correctAnswer: 2,
    explanation: "The sample is biased as it only includes managers, not employees of different positions.",
    youtubeLink: "https://youtu.be/BYlolfkFuQY?si=5_2ttRKukeU213J0",
    category: "",
    topics: ["Statistics"]
  },
  {
    id: 19,
    question: "If 481 employees are aged between 30 and 40, what is the total number of employees in this company?",
    svg: svgBarGraphQ19,
    options: ["1150", "1200", "1550", "1300"],
    correctAnswer: 3,
    explanation: "The bar for $[30;40[$ represents approx $37\\%$. $0.37 \\times \\text{Total} = 481 \\implies \\text{Total} = \\frac{481}{0.37} = 1300$.",
    youtubeLink: "https://youtu.be/eaBeajzrH1I?si=sTSJMiHs0zUg7a_7",
    category: "",
    topics: ["Data Analysis", "Statistics"]
  },
  {
    id: 20,
    question: "In which interval does the median age lie?",
    svg: svgBarGraphQ19,
    options: ["[20;30[", "[30;40[", "[40;50[", "[50;60["],
    correctAnswer: 1,
    explanation: "Cumulative frequency: $[20;30[$ is $28\\%$. $[30;40[$ adds $37\\%$, reaching $65\\%$. The median ($50\\%$) falls in $[30;40[$.",
    youtubeLink: "https://youtu.be/jaNPusL93x8?si=rxqN12EqM30qAG2C",
    category: "",
    topics: ["Statistics"]
  },
  {
    id: 21,
    question: "If the system of linear equations $\\frac{2}{5}x - \\frac{1}{3}y = 7$ and $-\\frac{m}{10}x + \\frac{5}{6}y = 3$ admits no solutions, and $m$ is an integer, what is the value of $m$?",
    options: ["-2", "10", "6", "-10"],
    correctAnswer: 1,
    explanation: "Slopes must be equal. Eq1 slope: $\\frac{2/5}{1/3} = \\frac{6}{5}$. Eq2 slope: $\\frac{m/10}{5/6} = \\frac{6m}{50} = \\frac{3m}{25}$. $\\frac{6}{5} = \\frac{3m}{25} \\implies 30 = 3m \\implies m = 10$.",
    youtubeLink: "https://youtu.be/-v55T7ibDlo?si=J6vacVBy1esNnsk8",
    category: "",
    topics: ["Systems", "Linear Equations"]
  },
  {
    id: 22,
    question: "The graph plotted above represents which of the following functions?",
    options: [
      "$f(x) = (x+1)(x-2)^2$",
      "$f(x) = (x-1)(x+2)^2$",
      "$f(x) = (x+1)(x-2)$",
      "$f(x) = (x-2)(x+1)^2$"
    ],
    correctAnswer: 0,
    explanation: "The graph touches the $x$-axis at $x=2$ (double root) and crosses at $x=-1$.",
    youtubeLink: "https://youtu.be/Dy4ct6H_OeA?si=eQdqoM_CzLYGj0Eq",
    category: "",
    topics: ["Polynomials", "Quadratics"]
  },
  {
    id: 23,
    question: "A secretary types at an average speed of 1.75 words per second. If a document has 16 pages with 525 words per page, how long will she be actively typing?",
    options: ["1 hour, 10 minutes", "1 hour, 20 minutes", "2 hours, 5 minutes", "4 hours, 5 minutes"],
    correctAnswer: 1,
    explanation: "Total words = $16 \\times 525 = 8400$. Time = $\\frac{8400}{1.75} = 4800\\text{ seconds} = 80\\text{ minutes} = 1\\text{h } 20\\text{m}$.",
    youtubeLink: "https://youtu.be/IjN9uATzPiI?si=15rM7dgKvg3mIg0h",
    category: "",
    topics: ["Word Problem", "ratio"]
  },
  {
    id: 24,
    question: "The graph above depicts a function $f(x)$. How many solutions does the equation $f(x) = 0.5$ admit?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 3,
    explanation: "Drawing the horizontal line $y=0.5$ intersects the graph at 4 distinct points.",
    youtubeLink: "https://youtu.be/VRcpu4L_cyY?si=2HW_qYWsIPzNXTy3",
    category: "",
    topics: ["Functions"]
  },
  {
    id: 25,
    question: "What is the equation of the function $f$ graphed above?",
    options: [
      "$f(x) = (x+1)(x-3)$",
      "$f(x) = (x-1)(x+3)$",
      "$f(x) = -(x+1)(x-3)$",
      "$f(x) = -(x-1)(x+3)$"
    ],
    correctAnswer: 2,
    explanation: "Parabola opens downward (negative leading coefficient) with roots at $x = -1$ and $x = 3$.",
    youtubeLink: "https://youtu.be/7Wm8_l5FugU?si=5Vx0vibY5xNUudOF",
    category: "",
    topics: ["Quadratics", "Parabola"]
  },
  {
    id: 26,
    question: "What is the absolute value of the difference between the two roots of the equation $(3x - 2)^2 = (x + 3)^2$?",
    options: ["$\\frac{11}{4}$", "$\\frac{9}{4}$", "$\\frac{5}{3}$", "$\\frac{11}{2}$"],
    correctAnswer: 0,
    explanation: "$3x-2 = x+3 \\implies 2x=5 \\implies x=2.5$. OR $3x-2 = -(x+3) \\implies 4x=-1 \\implies x=-0.25$. Difference = $|2.5 - (-0.25)| = 2.75 = \\frac{11}{4}$.",
    youtubeLink: "https://youtu.be/C7Ux28v-4Lc?si=WMoJ4RzV4N3UZV3V",
    category: "",
    topics: ["Algebra", "solving equation"]
  },
  {
    id: 27,
    question: "A liquid covering 12 cm of the height of a cylindrical glass of diameter 8 cm is transferred into another glass shaped as a cone with a diameter of 12 cm. What height of the cone will the liquid cover?",
    options: ["8 cm", "10 cm", "16 cm", "14 cm"],
    correctAnswer: 2,
    explanation: "$\\text{Volume}_{\\text{Cylinder}} = \\pi(4)^2(12) = 192\\pi$. $\\text{Volume}_{\\text{Cone}} = \\frac{1}{3}\\pi(6)^2h = 12\\pi h$. $192\\pi = 12\\pi h \\implies h = 16\\text{ cm}$.",
    youtubeLink: "https://youtu.be/eIPd-wHXeCM?si=cyUdwyx1hA7Oae0w",
    category: "",
    topics: ["Geometry", "volume"]
  },
  {
    id: 28,
    question: "A gaming website charges according to $f = 7g + 88$. What is the best interpretation of the term 88?",
    options: [
      "The price of one downloaded game.",
      "The subscription fees of the website",
      "The average number of games",
      "The fees of downloading 7 games"
    ],
    correctAnswer: 1,
    explanation: "88 is the $y$-intercept, representing the fixed base cost or subscription fee of the website.",
    youtubeLink: "https://youtu.be/DkQAGW1CFoU?si=n-EsX6qzRPh7ypqR",
    category: "",
    topics: ["Linear Equations"]
  },
  {
    id: 29,
    question: "A local supermarket offered a discount of $15\\%$ on its items after the government raised all the prices by $25\\%$. Overall, by what percentage were the original prices raised?",
    options: ["8.625%", "7.250%", "6.250%", "5.625%"],
    correctAnswer: 2,
    explanation: "$\\text{Final} = P \\times 1.25 \\times 0.85 = 1.0625 P$. The overall increase is $0.0625 = 6.250\\%$.",
    youtubeLink: "https://youtu.be/rJdZsAIKiI0?si=8SDlg5kU5prsMghs",
    category: "",
    topics: ["percentage"]
  },
  {
    id: 30,
    question: "The right triangles $ADE$ and $ABC$ are similar. If $AD = \\frac{4}{3} ED$, how long is $DB$?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    explanation: "Using similarity ratios from the video solution, $DB$ is found to be 4.",
    youtubeLink: "https://youtu.be/pvvZt39ivrA?si=Wq1NjzNVI7Y5dElk",
    category: "",
    topics: ["Geometry", "Triangles"]
  },
  {
    id: 31,
    question: "What is the value of $y$ in the equation $\\frac{3y - 2(4 - 2y)}{3} = \\frac{-11 + 3(2 + 3y)}{5}$?",
    options: ["2.5", "3", "3.125", "3.5"],
    correctAnswer: 2,
    explanation: "Solving the linear equation yields $y = 3.125$.",
    youtubeLink: "https://youtu.be/K67XwOCByhM?si=mfBzU6VnTvjwHFgu",
    category: "",
    topics: ["solving equation", "Linear Equations"]
  },
  {
    id: 32,
    question: "A multiple choice test contains 50 questions. Correct answer = 3 points, Incorrect answer = -2 points. If a student receives 75 points, how many questions did he answer correctly?",
    options: ["17", "25", "35", "15"],
    correctAnswer: 2,
    explanation: "$3x - 2(50-x) = 75 \\implies 5x - 100 = 75 \\implies 5x = 175 \\implies x = 35$.",
    youtubeLink: "https://youtu.be/Sp9vinhlSqM?si=bOyi3_yRuZxSlKU5",
    category: "",
    topics: ["Word Problem", "Systems"]
  },
  {
    id: 33,
    question: "If $|2b - 1| \\le 3$, how many possible integer values of $b$ are there?",
    options: ["4", "6", "11", "14"],
    correctAnswer: 0,
    explanation: "$-3 \\le 2b - 1 \\le 3 \\implies -2 \\le 2b \\le 4 \\implies -1 \\le b \\le 2$. Integer values are $-1, 0, 1, 2$. Count is 4.",
    youtubeLink: "https://youtu.be/EzDp3e4YUDw?si=p13qvcl9H54g35tF",
    category: "",
    topics: ["Inequalities"]
  },
  {
    id: 34,
    question: "We chose randomly a sample of 250 lawyers out of 4900. In this sample, 80 answered murder. Presumably, what is the total number of lawyers in the population who deal most frequently with murder?",
    options: ["1500", "1568", "1750", "1850"],
    correctAnswer: 1,
    explanation: "\\left(\\frac{80}{250}\\right) \\times 4900 = 0.32 \\times 4900 = 1568.",
    youtubeLink: "https://youtu.be/eFLSbffwgSo?si=OzN1emj6vb45KPo4",
    category: "",
    topics: ["Statistics", "Probability"]
  },
  {
    id: 35,
    question: "The function $g$ is defined by $g(x) = ax^2 - 2x - 5$ and $g(-1) = 1$. What is the value of $g(2)$?",
    options: ["3", "4", "5", "7"],
    correctAnswer: 3,
    explanation: "$g(-1) = a + 2 - 5 = a - 3 = 1 \\implies a = 4$. $g(2) = 4(2)^2 - 2(2) - 5 = 16 - 4 - 5 = 7$.",
    youtubeLink: "https://youtu.be/nH_7dX5RHRk?si=X-7fuMJ0EnAr9HmO",
    category: "",
    topics: ["Functions", "Quadratics"]
  },
  {
    id: 36,
    question: "What is the remainder of the division of $k(x) = 3x^3 + 8x^2 - 2x - 7$ by $x+2$?",
    options: ["3", "4", "5", "8"],
    correctAnswer: 2,
    explanation: "$k(-2) = 3(-2)^3 + 8(-2)^2 - 2(-2) - 7 = -24 + 32 + 4 - 7 = 5$.",
    youtubeLink: "https://youtu.be/9MR1MRTJcV0?si=JIbtm2doE3G5xmui",
    category: "",
    topics: ["Polynomials"]
  },
  {
    id: 37,
    question: "For $x^2 - 2mx = -9$, what is the minimum positive integer value of $m$ that allows the equation to have two distinct real solutions?",
    options: ["2", "3", "4", "7"],
    correctAnswer: 2,
    explanation: "Discriminant $> 0 \\implies (-2m)^2 - 4(1)(9) > 0 \\implies 4m^2 - 36 > 0 \\implies m^2 > 9 \\implies m > 3$. The minimum positive integer is $4$.",
    youtubeLink: "https://youtu.be/UTrXZieXQdQ?si=xDGqnsM5A0P4iTl0",
    category: "",
    topics: ["Quadratics"]
  },
  {
    id: 38,
    question: "A right triangle has an area of $96\\text{ cm}^2$. If the shorter leg is $4\\text{ cm}$ less than the longer leg, what is the length of the hypotenuse?",
    options: ["20", "23", "30", "40"],
    correctAnswer: 0,
    explanation: "$\\frac{1}{2} x (x - 4) = 96 \\implies x^2 - 4x - 192 = 0 \\implies (x - 16)(x + 12) = 0$. Legs are $16\\text{ cm}$ and $12\\text{ cm}$. Hypotenuse = $\\sqrt{16^2 + 12^2} = 20\\text{ cm}$.",
    youtubeLink: "https://youtu.be/Kokc9aqZiwo?si=hQ66GKmkyqvXPNUY",
    category: "",
    topics: ["Geometry", "Triangles", "area"]
  }
];
