const fs = require('fs');

// Helper to convert SVG string to base64 data URI
function svgToBase64(svgString) {
  return "data:image/svg+xml;base64," + Buffer.from(svgString).toString('base64');
}

// Q25 table
const q25Svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="200" style="background-color: white; font-family: sans-serif;">
  <style>
    .header { font-weight: bold; }
    .borders line { stroke: black; stroke-width: 1; }
    text { font-size: 14px; text-anchor: middle; dominant-baseline: middle; }
  </style>
  <g class="borders">
    <!-- Horizontal lines -->
    <line x1="10" y1="10" x2="490" y2="10" />
    <line x1="10" y1="60" x2="490" y2="60" />
    <line x1="10" y1="100" x2="490" y2="100" />
    <line x1="10" y1="140" x2="490" y2="140" />
    <line x1="10" y1="180" x2="490" y2="180" />
    <!-- Vertical lines -->
    <line x1="10" y1="10" x2="10" y2="180" />
    <line x1="110" y1="10" x2="110" y2="180" />
    <line x1="260" y1="10" x2="260" y2="180" />
    <line x1="390" y1="10" x2="390" y2="180" />
    <line x1="490" y1="10" x2="490" y2="180" />
  </g>
  <text x="60" y="35" class="header"></text>
  <text x="185" y="27" class="header">Practice</text>
  <text x="185" y="45" class="header">any kind</text>
  <text x="185" y="63" class="header">of sports</text> <!-- Note string goes a bit down but it's ok -->
  <text x="325" y="27" class="header">No sports</text>
  <text x="325" y="45" class="header">activity</text>
  <text x="440" y="35" class="header">Total</text>
  
  <text x="60" y="72" class="header">Under</text>
  <text x="60" y="88" class="header">40</text>
  <text x="185" y="80">220</text>
  <text x="325" y="80">40</text>
  <text x="440" y="80">260</text>
  
  <text x="60" y="112" class="header">40 and</text>
  <text x="60" y="128" class="header">older</text>
  <text x="185" y="120">100</text>
  <text x="325" y="120">180</text>
  <text x="440" y="120">280</text>

  <text x="60" y="160" class="header">Total</text>
  <text x="185" y="160">320</text>
  <text x="325" y="160">220</text>
  <text x="440" y="160">540</text>
</svg>`;

// Q29 table
const q29Svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="200" style="background-color: white; font-family: sans-serif;">
  <style>
    .borders line { stroke: black; stroke-width: 1; }
    text { font-size: 14px; text-anchor: middle; dominant-baseline: middle; }
    .header { font-weight: bold; }
  </style>
  <g class="borders">
    <!-- Horizontal lines -->
    <line x1="10" y1="10" x2="590" y2="10" />
    <line x1="10" y1="80" x2="590" y2="80" />
    <line x1="10" y1="110" x2="590" y2="110" />
    <line x1="10" y1="140" x2="590" y2="140" />
    <line x1="10" y1="170" x2="590" y2="170" />
    <line x1="10" y1="200" x2="590" y2="200" />
    <!-- Vertical lines -->
    <line x1="10" y1="10" x2="10" y2="200" />
    <line x1="120" y1="10" x2="120" y2="200" />
    <line x1="260" y1="10" x2="260" y2="200" />
    <line x1="400" y1="10" x2="400" y2="200" />
    <line x1="490" y1="10" x2="490" y2="200" />
    <line x1="590" y1="10" x2="590" y2="200" />
  </g>
  <text x="65" y="45"></text>
  <text x="190" y="30">Work</text>
  <text x="190" y="45">in their</text>
  <text x="190" y="60">field</text>
  <text x="330" y="30">Work</text>
  <text x="330" y="45">in</text>
  <text x="330" y="60">another field</text>
  <text x="445" y="35">Don't</text>
  <text x="445" y="55">work</text>
  <text x="540" y="45">Total</text>
  <!-- Content -->
  <text x="65" y="95">Engineering</text>
  <text x="190" y="95">17,065</text><text x="330" y="95">10,593</text><text x="445" y="95">3,867</text><text x="540" y="95">31,525</text>
  <text x="65" y="125">Business</text>
  <text x="190" y="125">18,547</text><text x="330" y="125">11,753</text><text x="445" y="125">3,243</text><text x="540" y="125">33,543</text>
  <text x="65" y="155">Law</text>
  <text x="190" y="155">20,372</text><text x="330" y="155">1,438</text><text x="445" y="155">542</text><text x="540" y="155">22,352</text>
  <text x="65" y="185">Total</text>
  <text x="190" y="185">55,984</text><text x="330" y="185">23,784</text><text x="445" y="185">7,652</text><text x="540" y="185">87,420</text>
</svg>`;

const q32Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="100%" height="100%" style="background-color: white;">
  <style>
    text { font-family: sans-serif; font-size: 14px; fill: black; }
    .grid { stroke: #d3d3d3; stroke-width: 1; }
    .axis { stroke: black; stroke-width: 2; }
    .line { stroke: black; stroke-width: 1.5; }
    .point { fill: black; }
  </style>
  <text x="250" y="30" text-anchor="middle" font-size="16" font-weight="bold">Temperature versus Humidity</text>
  
  <g transform="translate(60, 60)">
    <!-- Y-axis lines -->
    <line x1="0" y1="0" x2="350" y2="0" class="grid"/>
    <line x1="0" y1="40" x2="350" y2="40" class="grid"/>
    <line x1="0" y1="80" x2="350" y2="80" class="grid"/>
    <line x1="0" y1="120" x2="350" y2="120" class="grid"/>
    <line x1="0" y1="160" x2="350" y2="160" class="grid"/>
    <line x1="0" y1="200" x2="350" y2="200" class="grid"/>
    <line x1="0" y1="240" x2="350" y2="240" class="grid"/>
    <line x1="0" y1="280" x2="350" y2="280" class="grid"/>
    <!-- X-axis lines -->
    <line x1="80" y1="0" x2="80" y2="280" class="grid"/>
    <line x1="160" y1="0" x2="160" y2="280" class="grid"/>
    <line x1="240" y1="0" x2="240" y2="280" class="grid"/>
    <line x1="320" y1="0" x2="320" y2="280" class="grid"/>
    <!-- Box -->
    <rect x="0" y="0" width="350" height="280" fill="none" stroke="black" stroke-width="2"/>
    
    <!-- Y-axis labels -->
    <text x="-10" y="0" text-anchor="end" dominant-baseline="middle">95</text>
    <text x="-10" y="40" text-anchor="end" dominant-baseline="middle">90</text>
    <text x="-10" y="80" text-anchor="end" dominant-baseline="middle">85</text>
    <text x="-10" y="120" text-anchor="end" dominant-baseline="middle">80</text>
    <text x="-10" y="160" text-anchor="end" dominant-baseline="middle">75</text>
    <text x="-10" y="200" text-anchor="end" dominant-baseline="middle">70</text>
    <text x="-10" y="240" text-anchor="end" dominant-baseline="middle">65</text>
    <text x="-10" y="280" text-anchor="end" dominant-baseline="middle">60</text>
    <!-- X-axis labels -->
    <text x="80" y="300" text-anchor="middle">70</text>
    <text x="160" y="300" text-anchor="middle">72</text>
    <text x="240" y="300" text-anchor="middle">74</text>
    <text x="320" y="300" text-anchor="middle">76</text>
    
    <!-- line and points -->
    <line x1="40" y1="280" x2="350" y2="86" class="line"/> 
    <circle cx="56" cy="240" r="4" class="point"/> 
    <circle cx="80" cy="200" r="4" class="point"/> 
    <circle cx="106" cy="246" r="4" class="point"/> 
    <circle cx="160" cy="120" r="4" class="point"/> 
    <circle cx="200" cy="200" r="4" class="point"/> 
    <circle cx="240" cy="160" r="4" class="point"/> 
    <circle cx="320" cy="40" r="4" class="point"/> 
  </g>
  <text x="20" y="200" transform="rotate(-90 20,200)" text-anchor="middle">Relative Humidity (%)</text>
  <text x="235" y="390" text-anchor="middle">Temperature (&#xb0;Fahrenheit)</text>
</svg>`;

const q37Svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="220" style="background-color: white; font-family: sans-serif;">
  <style>
    .borders line { stroke: black; stroke-width: 1; }
    text { font-size: 14px; text-anchor: middle; dominant-baseline: middle; }
    .header { font-weight: bold; }
  </style>
  <g class="borders">
    <!-- Horizontal lines -->
    <line x1="10" y1="10" x2="290" y2="10" />
    <line x1="10" y1="60" x2="290" y2="60" />
    <line x1="10" y1="90" x2="290" y2="90" />
    <line x1="10" y1="120" x2="290" y2="120" />
    <line x1="10" y1="150" x2="290" y2="150" />
    <line x1="10" y1="180" x2="290" y2="180" />
    <line x1="10" y1="210" x2="290" y2="210" />
    <!-- Vertical lines -->
    <line x1="10" y1="10" x2="10" y2="210" />
    <line x1="150" y1="10" x2="150" y2="210" />
    <line x1="290" y1="10" x2="290" y2="210" />
  </g>
  <text x="80" y="35" class="header">Job title</text>
  <text x="220" y="25" class="header">Commission</text>
  <text x="220" y="45" class="header">percentage rate</text>
  
  <text x="80" y="75">Trainee</text><text x="220" y="75">1%</text>
  <text x="80" y="105">Employee</text><text x="220" y="105">2%</text>
  <text x="80" y="135">Supervisor</text><text x="220" y="135">3%</text>
  <text x="80" y="165">Senior supervisor</text><text x="220" y="165">4%</text>
  <text x="80" y="195">Manager</text><text x="220" y="195">5%</text>
</svg>`;


const questionsPart3 = [
  {
    "id": "est1_2021_aug_q44",
    "examId": "EST12021Aug",
    "question": "For what value of $x$, $|4 - x| - 2$ is less than 0?",
    "options": [
      "-7",
      "1",
      "3",
      "There is no such value of $x$"
    ],
    "correctAnswer": 2,
    "explanation": "$|4 - x| - 2 < 0 \\implies |4 - x| < 2$\n$-2 < 4 - x < 2 \\implies -6 < -x < -2 \\implies 2 < x < 6$\nThe value 3 is the only option that lies in this interval."
  },
  {
    "id": "est1_2021_aug_q45",
    "examId": "EST12021Aug",
    "question": "The table above shows the distribution of age and sports activity for 540 employees of a company.\n\nIf an employee aged under 40 is selected at random, what is the probability that he practices any kind of sports?",
    "imageUrl": svgToBase64(q25Svg),
    "options": [
      "$\\frac{2}{13}$",
      "$\\frac{27}{11}$",
      "$\\frac{16}{11}$",
      "$\\frac{11}{13}$"
    ],
    "correctAnswer": 3,
    "explanation": "Out of 260 employees under 40, 220 practice sports. The probability is $\\frac{220}{260} = \\frac{11}{13}$."
  },
  {
    "id": "est1_2021_aug_q46",
    "examId": "EST12021Aug",
    "question": "Ryan estimates that there are $x$ people in a concert.\n\nBella, who knows the actual number of people who attended the concert, $y$, notes that Ryan's estimate is within 50 people of the actual number of people.\n\nWhich of the following inequalities represent the relationship between $x$ and $y$?",
    "options": [
      "$|x - y| \\le 50$",
      "$x \\le y + 50$",
      "$x \\ge y - 50$",
      "$x + y \\le 50$"
    ],
    "correctAnswer": 0,
    "explanation": "The phrase \"within 50 people\" means the absolute difference between the estimate $x$ and actual $y$ is at most 50: $|x - y| \\le 50$."
  },
  {
    "id": "est1_2021_aug_q47",
    "examId": "EST12021Aug",
    "question": "**Questions 27-28 refer to the following information.**\n\n$f' = \\left( \\frac{v + v_0}{v} \\right) f$\n\nYou are riding in a car at a velocity $v_0$, in meters per second, towards a loud block party. Because of this movement, the actual frequency of the sound waves emitted by the speakers, $f$, in hertz, is perceived by you to be a different frequency $f'$, in hertz.\n\nThe speaker's sound waves travel at a velocity $v$, in meters per second. This phenomenon is called the Doppler effect. The formula above shows the relationship between these variables.\n\n---\nWhich of the following expresses the velocity of the car $v_0$ in terms of the other variables?",
    "options": [
      "$v_0 = \\frac{f' - f}{vf}$",
      "$v_0 = \\frac{f - f'}{f'} v$",
      "$v_0 = \\frac{f}{f'} v$",
      "$v_0 = \\frac{f' - f}{f} v$"
    ],
    "correctAnswer": 3,
    "explanation": "Solving for $v_0$:\n$\\frac{f'}{f} = \\frac{v + v_0}{v} = 1 + \\frac{v_0}{v}$\n$\\frac{f'}{f} - 1 = \\frac{v_0}{v} \\implies \\frac{f' - f}{f} = \\frac{v_0}{v} \\implies v_0 = \\frac{f' - f}{f} v$"
  },
  {
    "id": "est1_2021_aug_q48",
    "examId": "EST12021Aug",
    "question": "**Questions 27-28 refer to the following information.**\n\n$f' = \\left( \\frac{v + v_0}{v} \\right) f$\n\nYou are riding in a car at a velocity $v_0$, in meters per second, towards a loud block party. Because of this movement, the actual frequency of the sound waves emitted by the speakers, $f$, in hertz, is perceived by you to be a different frequency $f'$, in hertz.\n\nThe speaker's sound waves travel at a velocity $v$, in meters per second. This phenomenon is called the Doppler effect. The formula above shows the relationship between these variables.\n\n---\nIf the velocity of the car is $22 \\text{ m/s}$, the velocity of the sound waves of the speaker is $340 \\text{ m/s}$ and you perceive the frequency of the speaker's sound waves to be $500 \\text{ Hz}$.\n\nWhich of the following is the closest to the actual frequency of the speaker's sound waves?",
    "options": [
      "469",
      "532",
      "470",
      "533"
    ],
    "correctAnswer": 2,
    "explanation": "Substitute the values: $500 = \\left( \\frac{340 + 22}{340} \\right) f \\implies 500 = \\frac{362}{340} f$\n$f = 500 \\times \\frac{340}{362} \\approx 469.61$\nThis is closest to 470."
  },
  {
    "id": "est1_2021_aug_q49",
    "examId": "EST12021Aug",
    "question": "The table below summarizes students' work placement after graduation, based on the major.\n\nGiven a person who works outside his field of study, which of the following is closest to the probability that he majored in business?",
    "imageUrl": svgToBase64(q29Svg),
    "options": [
      "0.35",
      "0.06",
      "0.5",
      "0.13"
    ],
    "correctAnswer": 2,
    "explanation": "Working outside their field corresponds to \"Work in another field\". Total people in this category $= 23,784$.\nNumber of them who majored in Business $= 11,753$.\nProbability $= \\frac{11753}{23784} \\approx 0.494$, which is closest to 0.5."
  },
  {
    "id": "est1_2021_aug_q50",
    "examId": "EST12021Aug",
    "question": "$x^2 + y^2 - 6x - 4y + 9 = 0$\n\nThe equation above is an equation of a circle. Which of the lines represented by the equations below is tangent to this circle?",
    "options": [
      "$y = \\frac{1}{3} x - \\frac{1}{3}$",
      "$y = x$",
      "$y = 3$",
      "$x = 5$"
    ],
    "correctAnswer": 3,
    "explanation": "Complete the square to find center and radius:\n$(x^2 - 6x + 9) + (y^2 - 4y + 4) = 4 \\implies (x - 3)^2 + (y - 2)^2 = 4$\nThe circle has center $(3, 2)$ and radius $r = 2$.\nThe distance from center $(3,2)$ to the vertical line $x = 5$ is $|5 - 3| = 2$, which equals the radius, making it tangent."
  }
];

const questionsPart4 = [
  {
    "id": "est1_2021_aug_q51",
    "examId": "EST12021Aug",
    "question": "A supermarket has three branches A, B and C in three different cities. The head manager realized that, in average per day, branch A has 20% more customers than branch B and branch B has 20% less customers than branch C.\n\nIf the number of customers in branch A is 1200 on a random day, what is the estimated number of customers in branch C that same day?",
    "options": [],
    "correctAnswer": "1250",
    "isGridIn": true,
    "explanation": "$A = 1.2 B \\implies 1200 = 1.2 B \\implies B = 1000$.\n$B = 0.8 C \\implies 1000 = 0.8 C \\implies C = \\frac{1000}{0.8} = 1250$."
  },
  {
    "id": "est1_2021_aug_q52",
    "examId": "EST12021Aug",
    "question": "**Questions 32-33 refer to the following information.**\n\nHumidity percentage vary according to the temperature. The scatterplot below compares the temperature, in degree Fahrenheit and relative humidity on a certain day, every hour from 12:00 P.M. to 8:00 P.M. The line of best fit is also shown.\n\n---\nBased on the line of best fit, what is the predicted humidity percentage at a temperature of $74^{\\circ}$ Fahrenheit?",
    "imageUrl": svgToBase64(q32Svg),
    "options": [],
    "correctAnswer": "75",
    "isGridIn": true,
    "explanation": "Looking at the line of best fit in the graph, at temperature 74 (x-axis), the line is exactly at y = 75 (halfway between 70 and 80)."
  },
  {
    "id": "est1_2021_aug_q53",
    "examId": "EST12021Aug",
    "question": "**Questions 32-33 refer to the following information.**\n\nHumidity percentage vary according to the temperature. The scatterplot below compares the temperature, in degree Fahrenheit and relative humidity on a certain day, every hour from 12:00 P.M. to 8:00 P.M. The line of best fit is also shown.\n\n---\nWhat is the humidity percentage represented by the data point that is farthest from the line of best fit?",
    "imageUrl": svgToBase64(q32Svg),
    "options": [],
    "correctAnswer": "90",
    "isGridIn": true,
    "explanation": "The point farthest vertically from the line of best fit is at humidity percentage 90 (at temperature 76, where the line expects around 82.5)."
  },
  {
    "id": "est1_2021_aug_q54",
    "examId": "EST12021Aug",
    "question": "James adds to an oil tank 10 liters on day 1, then every day he adds 50% the amount he filled the day before.\n\nAfter 1000 days, how much oil is there approximately in the tank?",
    "options": [],
    "correctAnswer": "20",
    "isGridIn": true,
    "explanation": "This forms a geometric series with $a = 10$ and $r = 0.5$.\nThe sum is $S = \\frac{a}{1 - r} = \\frac{10}{1 - 0.5} = 20$.\nAfter 1000 days, the sum approaches exactly 20 liters."
  },
  {
    "id": "est1_2021_aug_q55",
    "examId": "EST12021Aug",
    "question": "Myriam opens a bank account with an initial deposit of 10,000 EGP. The bank account will earn 5 percent interest compounded annually for the first 3 years, after which it will earn 8 percent interest compounded annually.\n\nWhat is the approximate amount, rounded to the nearest EGP, added to Myriam's account after 5 years?",
    "options": [],
    "correctAnswer": "3503",
    "isGridIn": true,
    "explanation": "Amount after 5 years = $10000 \\times (1.05)^3 \\times (1.08)^2 \\approx 13502.73$ EGP.\nThe amount added (interest earned) = $13502.73 - 10000 = 3502.73$.\nRounded to the nearest EGP is 3503."
  },
  {
    "id": "est1_2021_aug_q56",
    "examId": "EST12021Aug",
    "question": "A spinner has 2 blue sections, 3 red sections and 5 yellow sections. It is spun twice.\n\nWhat is the probability of getting different colors?",
    "options": [],
    "correctAnswer": "0.62",
    "isGridIn": true,
    "explanation": "Total sections = $2 + 3 + 5 = 10$.\nProbability of getting same colors = $P(B,B) + P(R,R) + P(Y,Y) = \\left(\\frac{2}{10}\\right)^2 + \\left(\\frac{3}{10}\\right)^2 + \\left(\\frac{5}{10}\\right)^2 = 0.04 + 0.09 + 0.25 = 0.38$.\nProbability of getting different colors = $1 - 0.38 = 0.62$.\n(Can also be gridded in as 31/50)."
  },
  {
    "id": "est1_2021_aug_q57",
    "examId": "EST12021Aug",
    "question": "**Questions 37-38 refer to the following information.**\n\nThe chart above shows the commission structure for staff members working in a company.\n\nAll members of the staff benefit from a fixed salary of $800 monthly plus a commission on the profit of the company as shown in the chart.\n\n---\nThe salary of the manager Sam for the month of January was $7,000. What is the salary of the supervisor John in January?",
    "imageUrl": svgToBase64(q37Svg),
    "options": [],
    "correctAnswer": "4520",
    "isGridIn": true,
    "explanation": "Manager's commission is 5%.\nLet $P$ be the company's profit.\n$800 + 0.05 P = 7000 \\implies 0.05 P = 6200 \\implies P = 124000$.\nSupervisor John gets 3% commission. His salary is $800 + 0.03(124000) = 800 + 3720 = 4520$."
  },
  {
    "id": "est1_2021_aug_q58",
    "examId": "EST12021Aug",
    "question": "**Questions 37-38 refer to the following information.**\n\nThe chart above shows the commission structure for staff members working in a company.\n\nAll members of the staff benefit from a fixed salary of $800 monthly plus a commission on the profit of the company as shown in the chart.\n\n---\nIn February, the salary of an employee, a senior supervisor and a trainee was $13,650 altogether.\n\nWhat was the approximate salary, rounded to the nearest dollar, of the trainee alone in February?",
    "imageUrl": svgToBase64(q37Svg),
    "options": [],
    "correctAnswer": "2407",
    "isGridIn": true,
    "explanation": "Total salary = 3 fixed salaries + (Employee + Senior + Trainee) commission.\n$3(800) + (0.02 + 0.04 + 0.01) P = 13650 \\implies 2400 + 0.07 P = 13650 \\implies 0.07 P = 11250 \\implies P = \\frac{11250}{0.07} \\approx 160714.28$.\nTrainee's salary = $800 + 0.01 P = 800 + 1607.14 = 2407.14$.\nRounded to the nearest dollar is 2407."
  }
];

let p3 = fs.readFileSync('src/data/questions_est1_2021_aug_part3.ts', 'utf8');
let idx3 = p3.indexOf('{\\n    "id": "est1_2021_aug_q44"'); // search current text
if (idx3 === -1) idx3 = p3.indexOf('{\n    "id": "est1_2021_aug_q44"'); // search current text

let jsonStr3 = JSON.stringify(questionsPart3, null, 2);
jsonStr3 = jsonStr3.substring(jsonStr3.indexOf('{'), jsonStr3.lastIndexOf('}') + 1);

let newContent3 = p3.substring(0, p3.indexOf('  {', p3.indexOf('est1_2021_aug_q44') - 30)) + '  ' + jsonStr3.replace(/\\n/g, '\\n').replace(/\\n}/g, '\n  }') + '\n];\n';

fs.writeFileSync('src/data/questions_est1_2021_aug_part3.ts', newContent3);

let p4 = fs.readFileSync('src/data/questions_est1_2021_aug_part4.ts', 'utf8');

let jsonStr4 = JSON.stringify(questionsPart4, null, 2);
jsonStr4 = jsonStr4.substring(jsonStr4.indexOf('{'), jsonStr4.lastIndexOf('}') + 1);

let newContent4 = p4.substring(0, p4.indexOf('  {', p4.indexOf('est1_2021_aug_q51') - 30)) + '  ' + jsonStr4.replace(/\\n/g, '\\n').replace(/\\n}/g, '\n  }') + '\n];\n';

fs.writeFileSync('src/data/questions_est1_2021_aug_part4.ts', newContent4);

console.log("Successfully extracted correctly formatted questions with base64 encoded images!");
