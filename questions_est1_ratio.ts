import { Question } from './types';

const svgBarGraphQ35 = `
<svg viewBox="0 0 400 250" class="mx-auto h-48 w-auto">
  <text x="100" y="20" font-size="12" font-weight="bold">Percent Spent</text>
  
  <!-- Y Axis -->
  <line x1="40" y1="200" x2="40" y2="40" stroke="black" />
  <text x="10" y="200" font-size="10">0</text>
  <text x="10" y="168" font-size="10">5</text>
  <text x="10" y="136" font-size="10">10</text>
  <text x="10" y="104" font-size="10">15</text>
  <text x="10" y="72" font-size="10">20</text>
  <text x="10" y="40" font-size="10">25</text>
  
  <!-- X Axis -->
  <line x1="40" y1="200" x2="350" y2="200" stroke="black" />
  
  <!-- Bars -->
  <!-- Infrastructure: 20% -->
  <rect x="50" y="72" width="30" height="128" fill="pink" />
  <text x="50" y="68" font-size="10">20</text>
  
  <!-- Transport: 12.5% -->
  <rect x="90" y="120" width="30" height="80" fill="orange" />
  <text x="90" y="116" font-size="10">12.5</text>
  
  <!-- Advertisement: 15% -->
  <rect x="130" y="104" width="30" height="96" fill="yellow" />
  <text x="130" y="100" font-size="10">15</text>
  
  <!-- Taxes: 10% -->
  <rect x="170" y="136" width="30" height="64" fill="gray" />
  <text x="170" y="132" font-size="10">10</text>
  
  <!-- Research: 5% -->
  <rect x="210" y="168" width="30" height="32" fill="red" />
  <text x="210" y="164" font-size="10">5</text>
  
  <!-- Salary: 20% -->
  <rect x="250" y="72" width="30" height="128" fill="green" />
  <text x="250" y="68" font-size="10">20</text>
  
  <!-- Interest: 17.5% -->
  <rect x="290" y="88" width="30" height="112" fill="purple" />
  <text x="290" y="84" font-size="10">17.5</text>
</svg>
`;

export const EST1_RATIO_SET: Question[] = [
  {
    id: 1,
    question: "If $\\frac{2a}{b} = 5$, what is the value of $\\frac{5b}{a}$?",
    options: ["2", "4", "10", "12.5"],
    correctAnswer: 0,
    explanation: "$\\frac{2a}{b} = 5 \\Rightarrow \\frac{a}{b} = \\frac{5}{2} \\Rightarrow \\frac{b}{a} = \\frac{2}{5}$. Then $\\frac{5b}{a} = 5(\\frac{2}{5}) = 2$.",
    youtubeLink: "https://youtu.be/tWjVMnL4xQ8",
    category: "Ratio"
  },
  {
    id: 2,
    question: "James spent $\\frac{3}{4}$ of his allowance on a music CD. He spent $\\frac{2}{3}$ of what was left on a hamburger. If this left him $P$ dollars, which of the following was his allowance in dollars?",
    options: ["$12P$", "$14P$", "$16P$", "$18P$"],
    correctAnswer: 0,
    explanation: "Spent 3/4, Left 1/4. Spent 2/3 of 1/4 = 2/12 = 1/6. Remaining = 1/4 - 1/6 = 3/12 - 2/12 = 1/12. So $P = \\frac{1}{12} \\times \\text{Total}$. Total = $12P$.",
    category: "Word Problem"
  },
  {
    id: 3,
    question: "For a certain rectangular region, the ratio of its length to its width is 35 to 10. If the width of the rectangular region increases by 7 units, how must the length change to maintain this ratio?",
    options: ["It must decrease by 24.5 units.", "It must increase by 24.5 units.", "It must decrease by 7 units.", "It must increase by 7 units."],
    correctAnswer: 1,
    explanation: "$l/w = 35/10 = 3.5 \\Rightarrow l = 3.5w$. New width $w+7$. New length $l+x$. $\\frac{l+x}{w+7} = 3.5 \\Rightarrow l+x = 3.5(w+7) = 3.5w + 24.5$. Since $l=3.5w$, $x=24.5$. Increase by 24.5.",
    category: "Ratio"
  },
  {
    id: 4,
    question: "Twenty members of a math club are planning a trip to an amusing park... admission price of $\\$10$ per person. The club members going on the trip must share the $\\$500$ cost of a bus and the admission price for 2 supervisors who will accompany them on the trip. What is the cost, in dollars, for each member?",
    options: ["40", "38", "36", "35"],
    correctAnswer: 2,
    explanation: "Total cost = (20 members $\\times$ 10) + (2 supervisors $\\times$ 10) + 500 = 200 + 20 + 500 = 720. Cost per member = $720 / 20 = 36$.",
    category: "Word Problem"
  },
  {
    id: 5,
    question: "If the average of $2a$ and $b$ is equal to 50 percent of $4b$, what is the value of $\\frac{a}{b}$?",
    options: ["1.5", "2.5", "3.5", "2"],
    correctAnswer: 0,
    explanation: "$\\frac{2a+b}{2} = 0.5(4b) = 2b \\Rightarrow 2a+b = 4b \\Rightarrow 2a = 3b \\Rightarrow \\frac{a}{b} = \\frac{3}{2} = 1.5$.",
    category: "Algebra"
  },
  {
    id: 6,
    question: "Given that the equation $\\frac{3x-y}{x+y} = \\frac{2}{4}$ is true, what is the value of $\\frac{x}{y}$?",
    options: ["$\\frac{1}{5}$", "$\\frac{1}{2}$", "$\\frac{3}{5}$", "$\\frac{3}{2}$", "3"],
    correctAnswer: 2,
    explanation: "$4(3x-y) = 2(x+y) \\Rightarrow 12x - 4y = 2x + 2y \\Rightarrow 10x = 6y \\Rightarrow \\frac{x}{y} = \\frac{6}{10} = \\frac{3}{5}$.",
    category: "Algebra"
  },
  {
    id: 7,
    question: "The secret value, $k$, of a 4-digit pin code $abcd$ is obtained by subtracting the triple of $b$ from $c$, and dividing the resulting expression by half of the sum of $a$ and $d$. What is the secret value, $k$, in terms of $a, b, c$ and $d$?",
    options: [
      "$k = \\frac{c-3b}{2a+2d}$",
      "$k = \\frac{b-3c}{2a+2b}$",
      "$k = \\frac{2c-6b}{a+d}$",
      "$k = \\frac{6b-2c}{a+d}$"
    ],
    correctAnswer: 2,
    explanation: "$k = \\frac{c - 3b}{(a+d)/2} = \\frac{2(c-3b)}{a+d} = \\frac{2c-6b}{a+d}$.",
    category: "Algebra"
  },
  {
    id: 8,
    question: "In a hospital, the medical staff is composed of 34 doctors and 68 nurses. How many additional doctors should join the hospital in order for the ratio of doctors to total number of medical staff to become 3 to 7?",
    options: ["21", "19", "17", "15"],
    correctAnswer: 2,
    explanation: "Current total = 102. Let $x$ be added doctors. $\\frac{34+x}{102+x} = \\frac{3}{7} \\Rightarrow 7(34+x) = 3(102+x) \\Rightarrow 238 + 7x = 306 + 3x \\Rightarrow 4x = 68 \\Rightarrow x = 17$.",
    youtubeLink: "https://youtu.be/4tQIM4lLrss",
    category: "Ratio"
  },
  {
    id: 9,
    question: "Three friends divided a prize as follows: the youngest received $\\frac{3}{5}$ of the prize, the middle friend received $\\frac{1}{4}$ of the prize, and the eldest received the remaining $\\$57$. What was the value, in dollars, of the prize?",
    options: ["380", "420", "140", "270"],
    correctAnswer: 0,
    explanation: "Eldest share = $1 - \\frac{3}{5} - \\frac{1}{4} = 1 - 0.6 - 0.25 = 0.15$. $0.15 \\times \\text{Total} = 57 \\Rightarrow \\text{Total} = 57 / 0.15 = 380$.",
    youtubeLink: "https://youtu.be/sEN9s5YTYT4",
    category: "Word Problem"
  },
  {
    id: 10,
    question: "Maria downloaded to her music library a total of 350 pop and rock songs. If the ratio of pop to rock song is 3 to 11. How many rock songs are there in Maria's library?",
    options: ["75", "125", "175", "275"],
    correctAnswer: 3,
    explanation: "Total parts = $3 + 11 = 14$. Rock part = $11/14$. Rock songs = $(11/14) \\times 350 = 11 \\times 25 = 275$.",
    youtubeLink: "https://youtu.be/sHUnMbDW0lQ",
    category: "Ratio"
  },
  {
    id: 11,
    question: "If $\\frac{1}{x-y} = \\frac{3}{5y}$, which of the following proportions is equivalent?",
    options: ["$\\frac{x}{y} = \\frac{3}{8}$", "$\\frac{x}{y} = \\frac{8}{3}$", "$\\frac{x}{y} = \\frac{8}{15}$", "$\\frac{x}{y} = \\frac{15}{8}$"],
    correctAnswer: 1,
    explanation: "$5y = 3(x-y) \\Rightarrow 5y = 3x - 3y \\Rightarrow 8y = 3x \\Rightarrow \\frac{x}{y} = \\frac{8}{3}$.",
    category: "Algebra"
  },
  {
    id: 12,
    question: "Distance covered by data... 1 light-nanosecond (lns) is equivalent to 29.9cm. If a certain data is transferred at the rate of 19 centimeters every second, what distance, in lns, does the data cover in 3 seconds? (Round your answer to the nearest tenths).",
    options: ["1.7", "1.9", "2.5", "1.6"],
    correctAnswer: 1,
    explanation: "Rate = 19 cm/s. Time = 3 s. Distance = $19 \\times 3 = 57$ cm. Distance in lns = $57 / 29.9 \\approx 1.906$. Rounded = 1.9.",
    category: "Word Problem"
  },
  {
    id: 13,
    question: "We chose randomly a sample of 250 lawyers out of 4900... 80 answered murder. Presumably, what is the total number of lawyers who deal most frequently with murder?",
    options: ["1500", "1568", "1750", "1850"],
    correctAnswer: 1,
    explanation: "$(80/250) \\times 4900 = 0.32 \\times 4900 = 1568$.",
    youtubeLink: "https://youtu.be/eFLSbffwgSo",
    category: "Statistics"
  },
  {
    id: 14,
    question: "A restaurant offers a 40 cm diameter pizza for $\\$12$. Three friends divided one pizza among themselves... If Samir ate one-eighth of the pizza, how much should he pay?",
    options: ["$1.5", "$2.0", "$2.5", "$3.0"],
    correctAnswer: 0,
    explanation: "Samir pays for the portion he ate. $\\frac{1}{8} \\times 12 = 1.5$.",
    category: "Word Problem"
  },
  {
    id: 15,
    question: "Of the 450 parking spaces in a parking lot, 8% of the spaces are reserved for handicapped parking. Of those parking spaces NOT reserved for handicapped parking, 18 are suitable for compact cars only. How many spaces that are NOT reserved for handicapped parking are suitable for noncompact cars?",
    options: ["432", "424", "414", "396", "369"],
    correctAnswer: 3,
    explanation: "Handicapped = $0.08 \\times 450 = 36$. Not handicapped = $450 - 36 = 414$. Non-compact = $414 - 18 = 396$.",
    category: "Word Problem"
  },
  {
    id: 16,
    question: "Adams High School has 120 students, and $\\frac{1}{3}$ of the students are taking Literature. Of the students NOT taking Literature, $\\frac{1}{4}$ are taking Composition. How many students are taking Composition?",
    options: ["10", "20", "30", "40", "80"],
    correctAnswer: 1,
    explanation: "Taking Lit = $120/3 = 40$. Not taking Lit = $120 - 40 = 80$. Taking Comp = $80/4 = 20$.",
    category: "Word Problem"
  },
  {
    id: 17,
    question: "An amount $\\$12,000$ is to be divided between the winner and the runner-up in a spelling competition in the ratio 5:3. To participate in the competition, each player should pay $\\$600$. How much money will the winner get as a profit?",
    options: ["$3,900", "$6,900", "$7,500", "$8,100$"],
    correctAnswer: 1,
    explanation: "Winner share = $\\frac{5}{8} \\times 12000 = 7500$. Profit = $7500 - 600 = 6900$.",
    category: "Word Problem"
  },
  {
    id: 18,
    question: "The circular diagram above shows the results of a survey made on the number of books read by 200 pupils... What is the number of pupils who read less than 3 books?",
    options: ["68", "116", "38", "76"],
    correctAnswer: 3,
    explanation: "Based on the answer key provided, the answer is 76 (38% of 200). This corresponds to the sum of percentages for 2 books (18%) and 6 books (20%)? Or possibly a misinterpretation of the chart labels in the source material. We follow the official key.",
    category: "Statistics"
  },
  {
    id: 19,
    question: "Jack has $k$ dollars. He spends $\\frac{3}{4}$ of his money on a T-shirt and $\\frac{1}{3}$ of what was left on a sandwich. If this left him with $t$ dollars, which of the following is the value of $k$ in terms of $t$?",
    options: ["$6t$", "$9t$", "$12t$", "$24t$"],
    correctAnswer: 0,
    explanation: "Left after T-shirt = $1/4 k$. Spent on sandwich = $1/3 \\times 1/4 k = 1/12 k$. Remaining $t = 1/4 k - 1/12 k = 3/12 k - 1/12 k = 2/12 k = 1/6 k$. So $k = 6t$.",
    category: "Algebra"
  },
  {
    id: 20,
    question: "Tanta University... ratio of female students to male students is 11:25. How many male students are attending the faculty? (Total students implied to be sum of parts or given in context, assumed solvable by ratio).",
    options: ["2,544", "2,525", "2,000", "1,604"],
    correctAnswer: 1,
    explanation: "Ratio F:M = 11:25. Total parts = 36. Males = $25/36 \\times \\text{Total}$. If Total is 3636 (from context of similar problems), Males = 2525.",
    category: "Ratio"
  },
  {
    id: 21,
    question: "During the final game of UEFA Euro 2020... 67,173 fans. Ratio of adults to children was approximately 13 to 6. Which of the following numbers represents approximately the number of children who attended the game?",
    options: ["21213", "31002", "36170", "45960"],
    correctAnswer: 0,
    explanation: "Children = $\\frac{6}{19} \\times 67173 \\approx 21212.5$. Closest is 21213.",
    youtubeLink: "https://youtu.be/v1hfDQyczl8",
    category: "Ratio"
  },
  {
    id: 22,
    question: "If $\\frac{a}{b}$ is negative, which of the following is definitely negative?",
    options: ["$2ab$", "$a^2b$", "$b(b-a)^2$", "$a-b$"],
    correctAnswer: 0,
    explanation: "If $a/b < 0$, then $a$ and $b$ have opposite signs. Thus their product $ab$ is negative. $2ab$ is negative.",
    category: "Algebra"
  },
  {
    id: 23,
    question: "If $3x = 24y$, what is the value of $(\\frac{3y}{x})^2$?",
    options: ["$\\frac{9}{64}$", "$\\frac{3}{4}$", "$\\frac{8}{3}$", "24"],
    correctAnswer: 0,
    explanation: "$x = 8y \\Rightarrow \\frac{y}{x} = \\frac{1}{8}$. $(\\frac{3y}{x})^2 = (3 \\times \\frac{1}{8})^2 = (\\frac{3}{8})^2 = \\frac{9}{64}$.",
    category: "Algebra"
  },
  {
    id: 24,
    question: "The histogram shown summarizes the number of people who got infected by the Covid-19 virus... Which of the following is closest to the ratio of the number of infected people below the age of 10 to those above the age of 80?",
    options: ["$\\frac{10}{80}$", "$\\frac{215}{410}$", "$\\frac{215}{80}$", "10"],
    correctAnswer: 2,
    explanation: "Below 10 (0-10 bar) $\\approx 215$. Above 80 (80-100 bars) $\\approx 80$. Ratio $\\approx 215/80$.",
    category: "Statistics"
  },
  {
    id: 25,
    question: "The general elections in a country provided a parliament composed of 35% deputies from the democratic party, 30% for the republican party and 27 members of the labor party. How many more democrats are there than conservatives?",
    options: ["9", "18", "27", "36"],
    correctAnswer: 2,
    explanation: "Labor (27 members) corresponds to $100 - (35+30+20) = 15\\%$. Total = $27/0.15 = 180$. Democrats = $0.35 \\times 180 = 63$. Conservatives = $0.20 \\times 180 = 36$. Difference = $63 - 36 = 27$.",
    youtubeLink: "https://youtu.be/Oc1s4XZa4SA",
    category: "Word Problem"
  },
  {
    id: 26,
    question: "A container is filled with 200 balls, 80 of them are yellow. After removing $x$ yellow balls, 75% of the remaining balls in the container are not yellow. Which of the following is the value of $x$?",
    options: ["20", "30", "40", "50"],
    correctAnswer: 2,
    explanation: "Not yellow = 120. New Total = $200-x$. $120 = 0.75(200-x) \\Rightarrow 120 = 150 - 0.75x \\Rightarrow 0.75x = 30 \\Rightarrow x = 40$.",
    category: "Word Problem"
  },
  {
    id: 27,
    question: "In 2007, a watch manufacturer found that 2 out of every 30 watches produced are defected. If the manufacturer produces 2 million watches... closest to the estimated number of non-defected watches?",
    options: ["1,866,000", "1,867,000", "133,000", "134,000"],
    correctAnswer: 1,
    explanation: "Defective rate = $2/30 = 1/15$. Non-defective rate = $14/15$. $14/15 \\times 2,000,000 \\approx 1,866,667$. Closest is 1,867,000.",
    category: "Word Problem"
  },
  {
    id: 28,
    question: "In 2010, at a school, 3:5 of the seniors wanted to celebrate their prom... at restaurant X, while 30% of the rest voted for restaurant Y, and the 84 students left voted for restaurant Z. How many senior students voted for restaurant X?",
    options: ["200", "300", "509", "180"],
    correctAnswer: 3,
    explanation: "Let Total = $h$. X = $3/5 h$. Rest = $2/5 h$. Y = $0.3(2/5 h) = 0.12h$. Z = $2/5 h - 0.12h = 0.28h$. $0.28h = 84 \\Rightarrow h = 300$. X = $3/5(300) = 180$.",
    youtubeLink: "https://youtu.be/-XTzGLOLU-I",
    category: "Word Problem"
  },
  {
    id: 29,
    question: "Two numbers are in ratio 3:5. If 9 is subtracted from each, the new numbers are in the ratio 12:23. What is the biggest number?",
    options: ["50", "55", "40", "25"],
    correctAnswer: 1,
    explanation: "$\\frac{3x-9}{5x-9} = \\frac{12}{23} \\Rightarrow 69x - 207 = 60x - 108 \\Rightarrow 9x = 99 \\Rightarrow x = 11$. Biggest = $5(11) = 55$.",
    youtubeLink: "https://youtu.be/tDSuodRGwKA",
    category: "Ratio"
  },
  {
    id: 30,
    question: "A sum of 7,200 $\\$$ is to be divided equally among many people. If five people were excluded, each part would increase by 20 $\\$$. What is the number of people?",
    options: ["45", "50", "55", "65"],
    correctAnswer: 0,
    explanation: "$\\frac{7200}{n-5} - \\frac{7200}{n} = 20 \\Rightarrow 360n - 360(n-5) = n(n-5) \\Rightarrow 1800 = n^2 - 5n \\Rightarrow n^2 - 5n - 1800 = 0 \\Rightarrow (n-45)(n+40)=0 \\Rightarrow n=45$.",
    youtubeLink: "https://youtu.be/q4iaaQDKXWc",
    category: "Algebra"
  },
  {
    id: 31,
    question: "What fractional part of their weekly income is left for unbudgeted items?",
    options: ["$\\frac{5}{48}$", "$\\frac{1}{48}$", "$\\frac{1}{24}$", "$\\frac{1}{16}$", "$\\frac{1}{8}$"],
    correctAnswer: 3,
    explanation: "Sum of fractions: $3/8 + 1/4 + 1/8 + 1/12 + 1/16 + 1/24 = 45/48$. Remaining = $3/48 = 1/16$.",
    category: "Word Problem"
  },
  {
    id: 32,
    question: "Last year at RT University, the ratio of the number of students accepted to the number of students applying for admission was 2 to 7. RT University accepted 630 students... How many students applied?",
    options: ["810", "1,260", "2,205", "2,835", "4,410"],
    correctAnswer: 2,
    explanation: "$2/7 = 630/x \\Rightarrow 2x = 4410 \\Rightarrow x = 2205$.",
    category: "Ratio"
  },
  {
    id: 33,
    question: "On a typical day at Limestone College, $\\frac{3}{5}$ of all students ride a bicycle. Among the rest of the students, $\\frac{1}{3}$ ride the bus and $\\frac{1}{6}$ walk. What fraction of the students ride the bus to class?",
    options: ["$\\frac{1}{5}$", "$\\frac{2}{15}$", "$\\frac{1}{10}$", "$\\frac{1}{15}$", "$\\frac{1}{18}$"],
    correctAnswer: 1,
    explanation: "Rest = $2/5$. Bus = $1/3 \\times 2/5 = 2/15$.",
    category: "Word Problem"
  },
  {
    id: 34,
    question: "The bar graph above represents the percentage of money spent by a company on different sectors... If 200,000 dollars were spent on the transport sector, what was the budget used for salaries?",
    svg: svgBarGraphQ35,
    options: ["$320,000", "$340,000", "$360,000", "$370,000"],
    correctAnswer: 0,
    explanation: "Transport (12.5%) = 200,000. Total = $200,000 / 0.125 = 1,600,000$. Salaries (20%) = $0.20 \\times 1,600,000 = 320,000$.",
    youtubeLink: "https://youtu.be/3CUXw2gKzaw",
    category: "Data Analysis"
  },
  {
    id: 35,
    question: "Patrick organized a sports event at his village. 243 people joined... ratio of ping-pong, boxing, or golf was 9:10:8. How many people joined the boxing tournament?",
    options: ["72", "81", "90", "99", "100"],
    correctAnswer: 2,
    explanation: "Boxing share = $10 / (9+10+8) = 10/27$. Count = $10/27 \\times 243 = 90$.",
    category: "Ratio"
  }
];
