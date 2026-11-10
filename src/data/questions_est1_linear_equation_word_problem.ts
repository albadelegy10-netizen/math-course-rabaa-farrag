import { Question } from '../../types';

export const EST1_LINEAR_EQUATION_WORD_PROBLEM_SET: Question[] = [
  {
    id: 1,
    question: "The weekly salary $S$ of Samantha is given by $S = 7 \\cdot h \\cdot d + 75$ where $h$ is the number of hours she works every day and $d$ is the number of working days each week. If Samantha is to be promoted with a salary increase, which of the following terms must change?",
    options: ["$7$", "$h$", "$d$", "None of the above"],
    correctAnswer: 0,
    explanation: "In the expression $S = 7hd + 75$, the number $7$ represents her hourly wage rate. A promotion with a salary rate increase directly modifies her hourly rate $7$.",
    category: "linear equation- word problem"
  },
  {
    id: 2,
    question: "A rental car company charges its clients by the number of days $d$ the car is rented. If the bill $b$ of a client is given by the equation $b = 5d + 20$, what is the best interpretation of the term $5$?",
    options: [
      "The rental cost of the car per day",
      "The fixed cost of renting a car, no matter how many days it is rented",
      "The average number of days the car is rented",
      "The fees of renting a car for $7$ days"
    ],
    correctAnswer: 0,
    explanation: "In $b = 5d + 20$, $5$ is the rate of change (slope) multiplied by the number of days $d$. Thus, $5$ represents the rental cost per day.",
    category: "linear equation- word problem"
  },
  {
    id: 3,
    question: "Joanne is a saleswoman in a TV store. Her salary is $1,300$ Egyptian pounds per month, in addition to $10$ Egyptian pounds for each TV she sells if the quantity sold is less than or equal to $10$ TVs per month. If she sells more than $10$ TVs in one month, she will get an extra bonus of $10\\%$ of her initial salary. Last November, she sold $12$ TVs. What was her salary at the end of the month?",
    options: ["$1,420$", "$1,550$", "$1,430$", "$1,520$"],
    correctAnswer: 1,
    explanation: "Base salary = $1,300$ EGP. Commission for 12 TVs = $12 \\times 10 = 120$ EGP. Bonus = $10\\% \\times 1,300 = 130$ EGP. Total salary = $1,300 + 120 + 130 = 1,550$ EGP.",
    category: "linear equation- word problem"
  },
  {
    id: 4,
    question: "Petra registered in an online magazine for a monthly fee of $\$15$. However, to read premium articles, she has to pay an extra charge of $\$0.3$ per article. Which of the following represents the total amount Petra is going to pay per month if she reads $x$ premium articles?",
    options: [
      "$15x + 0.3$",
      "$15 + 0.3x$",
      "$15 \\times 30 + 0.3x$",
      "$15 \\times 30x + 0.3$"
    ],
    correctAnswer: 1,
    explanation: "Total monthly cost = Fixed fee + (Cost per article $\\times$ Number of articles) = $15 + 0.3x$.",
    category: "linear equation- word problem"
  },
  {
    id: 5,
    question: "Brenda works two jobs: as a saleswoman at Store X from 9:00 AM to 4:00 PM (wages: $\$300$ per month $+ \\$4.5$ per item sold) and as an English tutor in the afternoon ($\$35$ per hour). Last month, Brenda tutored three students for $5$ hours each and sold $30$ items at Store X. What is the total wage Brenda is expected to receive?<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Role</th><th class=\"border border-gray-400 px-2 py-1\">Rate</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">Tutor</td><td class=\"border border-gray-400 px-2 py-1\">$\$35$ per hour</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Saleswoman</td><td class=\"border border-gray-400 px-2 py-1\">$\$300$ per month $+ \\$4.5$ per item sold</td></tr></tbody></table>",
    options: ["$\$540$", "$\$610$", "$\$660$", "$\$960$"],
    correctAnswer: 3,
    explanation: "Tutoring income = $3 \\times 5 \\times 35 = 525$. Saleswoman income = $300 + 30 \\times 4.5 = 300 + 135 = 435$. Total wage = $525 + 435 = 960$.",
    category: "linear equation- word problem"
  },
  {
    id: 6,
    question: "If Brenda tutors one student for $2$ hours per day during the month of July (31 days) and wants to earn a total of $\$2,740$ by the end of the month, how many items must she sell at Store X?",
    options: ["$30$", "$45$", "$60$", "$70$"],
    correctAnswer: 2,
    explanation: "Tutoring income = $1 \\text{ student} \\times 2 \\text{ hrs/day} \\times 31 \\text{ days} \\times 35 = 2,170$. Remaining needed from Store X = $2,740 - 2,170 = 570$. Since base pay is $300$, commission needed = $570 - 300 = 270$. Items to sell = $270 / 4.5 = 60$.",
    category: "linear equation- word problem"
  },
  {
    id: 7,
    question: "Bashar travelled to Dubai for $5$ days. He had $\$3,400$ at the beginning of the trip and returned home with $\$150$ left. On average, how much money did he spend per day?",
    options: ["$\$550$", "$\$650$", "$\$700$", "$\$750$"],
    correctAnswer: 1,
    explanation: "Total money spent = $\$3,400 - \$150 = \$3,250$. Average per day = $3,250 / 5 = \$650$.",
    category: "linear equation- word problem"
  },
  {
    id: 8,
    question: "A car rental company leased a total of $54$ cars of various brands to an embassy for a period of one year. The table below shows the numbers of cars rented for each brand along with the total revenue earned at the end of the year. What is the monthly rental cost paid by the embassy for each Hyundai car?<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Brand</th><th class=\"border border-gray-400 px-2 py-1\">Number of cars rented</th><th class=\"border border-gray-400 px-2 py-1\">Revenue earned (in $\$)</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">Hyundai</td><td class=\"border border-gray-400 px-2 py-1\">14</td><td class=\"border border-gray-400 px-2 py-1\">134,400</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Toyota</td><td class=\"border border-gray-400 px-2 py-1\">8</td><td class=\"border border-gray-400 px-2 py-1\">85,440</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Jeep</td><td class=\"border border-gray-400 px-2 py-1\">19</td><td class=\"border border-gray-400 px-2 py-1\">239,400</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Honda</td><td class=\"border border-gray-400 px-2 py-1\">13</td><td class=\"border border-gray-400 px-2 py-1\">117,000</td></tr></tbody></table>",
    options: ["$\$750$", "$\$760$", "$\$775$", "$\$800$"],
    correctAnswer: 3,
    explanation: "Total annual revenue for 14 Hyundai cars = $\$134,400$. Cost per car per year = $134,400 / 14 = 9,600$. Cost per car per month = $9,600 / 12 = \$800$.",
    category: "linear equation- word problem"
  },
  {
    id: 9,
    question: "An enterprise conducted a study on its products and the results showed that when the unit selling price ($P$) is raised, the number of units sold ($U$) went down. This result is modeled by the equation $10P + 2U = 2500$. Based on this model, the manager decided to decrease the unit selling price from $\$50$ to $\$45$. How many more items did he sell?",
    options: ["$75$", "$50$", "$25$", "$10$"],
    correctAnswer: 2,
    explanation: "At $P = 50$: $10(50) + 2U = 2500 \\implies 500 + 2U = 2500 \\implies 2U = 2000 \\implies U = 1000$. At $P = 45$: $10(45) + 2U = 2500 \\implies 450 + 2U = 2500 \\implies 2U = 2050 \\implies U = 1025$. Additional items sold = $1025 - 1000 = 25$.",
    category: "linear equation- word problem"
  },
  {
    id: 10,
    question: "Sam wants to rent a car. He receives the following offers shown in the table below. Which offer is the best if Sam wants to travel $100\\text{ km}$?<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Offer</th><th class=\"border border-gray-400 px-2 py-1\">Fixed amount to be paid</th><th class=\"border border-gray-400 px-2 py-1\">Amount to be paid for each kilometer driven</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">Offer A</td><td class=\"border border-gray-400 px-2 py-1\">$65\\$</td><td class=\"border border-gray-400 px-2 py-1\">$0.50\\$</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Offer B</td><td class=\"border border-gray-400 px-2 py-1\">$60\\$</td><td class=\"border border-gray-400 px-2 py-1\">$0.52\\$</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Offer C</td><td class=\"border border-gray-400 px-2 py-1\">$55\\$</td><td class=\"border border-gray-400 px-2 py-1\">$0.54\\$</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Offer D</td><td class=\"border border-gray-400 px-2 py-1\">$50\\$</td><td class=\"border border-gray-400 px-2 py-1\">$0.56\\$</td></tr></tbody></table>",
    options: ["Offer A", "Offer B", "Offer C", "Offer D"],
    correctAnswer: 3,
    explanation: "Offer A: $65 + 0.50(100) = 115$. Offer B: $60 + 0.52(100) = 112$. Offer C: $55 + 0.54(100) = 109$. Offer D: $50 + 0.56(100) = 106$. Offer D is the cheapest.",
    category: "linear equation- word problem"
  },
  {
    id: 11,
    question: "The table below shows the number of people who owned a smartphone from the year 2016 to the year 2020. The number of people $N$ (in billions) is a linear function of the number of years $y$ from the year 2016. Which of the following expressions best describes $N$ in terms of $y$?<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Year</th><th class=\"border border-gray-400 px-2 py-1\">Number of People (in billions)</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">2016</td><td class=\"border border-gray-400 px-2 py-1\">2.3</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">2017</td><td class=\"border border-gray-400 px-2 py-1\">2.6</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">2018</td><td class=\"border border-gray-400 px-2 py-1\">2.9</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">2019</td><td class=\"border border-gray-400 px-2 py-1\">3.2</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">2020</td><td class=\"border border-gray-400 px-2 py-1\">3.5</td></tr></tbody></table>",
    options: [
      "$N = 0.3y$",
      "$N = 0.3y + 2016$",
      "$N = 0.3y + 2.3$",
      "$N = 3.3y + 2.3$"
    ],
    correctAnswer: 2,
    explanation: "Slope $m = 2.6 - 2.3 = 0.3$ billion per year. At $y = 0$ (year 2016), $N = 2.3$. Therefore, $N = 0.3y + 2.3$.",
    category: "linear equation- word problem"
  },
  {
    id: 12,
    question: "Starting at sunrise, the temperature rose $1.5$ degrees Celsius every hour. After $10$ hours, the temperature was $40$ degrees Celsius. Which of the following models the temperature $y$, in Celsius, after $x$ hours from sunrise?",
    options: [
      "$y - 40 = 1.5(x - 10)$",
      "$y - 10 = 10(x + 1.5)$",
      "$y - 10 = 1.5(x - 40)$",
      "$y - 1.5 = 10(x + 40)$"
    ],
    correctAnswer: 0,
    explanation: "Using point-slope form $y - y_1 = m(x - x_1)$ with rate $m = 1.5$ and point $(x_1, y_1) = (10, 40)$, we get $y - 40 = 1.5(x - 10)$.",
    category: "linear equation- word problem"
  },
  {
    id: 13,
    question: "As a treat for the holidays, the principal of a school got a bucket of $120$ cookies for the teachers. Every hour, when the principal checked the bucket, $4$ of the cookies seemed to be missing. Which of the following expressions models the number of cookies $C$ eaten by the teachers after $T$ hours?",
    options: [
      "$C = 120 - 4T$",
      "$C = 120 + 4T$",
      "$C = -4T$",
      "$C = 4T$"
    ],
    correctAnswer: 3,
    explanation: "The total number of cookies eaten after $T$ hours increases at a constant rate of $4$ cookies per hour, so $C = 4T$.",
    category: "linear equation- word problem"
  },
  {
    id: 14,
    question: "Jack and John are meeting at a restaurant. The graph below shows their distances from the restaurant as a function of time. Jack's distance decreases from a higher starting distance in less time than John's.<br><div class=\"flex justify-center my-4\"><svg width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"border border-gray-300 rounded bg-white\"><line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"180\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"50\" y1=\"180\" x2=\"300\" y2=\"180\" stroke=\"#333\" stroke-width=\"2\"/><polygon points=\"46,25 50,15 54,25\" fill=\"#333\"/><polygon points=\"295,176 305,180 295,184\" fill=\"#333\"/><text x=\"15\" y=\"100\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" transform=\"rotate(-90 20 100)\">Distance</text><text x=\"160\" y=\"202\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\">Time</text><line x1=\"50\" y1=\"35\" x2=\"260\" y2=\"180\" stroke=\"#1d4ed8\" stroke-width=\"2.5\"/><line x1=\"50\" y1=\"110\" x2=\"260\" y2=\"180\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><text x=\"140\" y=\"85\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1d4ed8\" transform=\"rotate(-33 140 85)\">JACK</text><text x=\"95\" y=\"132\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#dc2626\" transform=\"rotate(-18 95 132)\">JOHN</text></svg></div><br>Which of the following statements is true?",
    options: [
      "It took Jack longer to arrive to the pub since his office is farther away.",
      "It took John longer to arrive to the pub since his office is farther away.",
      "John drove to the pub at a faster speed than Jack.",
      "Jack drove to the pub at a faster speed than John."
    ],
    correctAnswer: 3,
    explanation: "The slope of distance versus time represents speed. Since Jack covered a greater distance in a shorter time interval, Jack's speed (magnitude of slope) was faster than John's.",
    category: "linear equation- word problem"
  },
  {
    id: 15,
    question: "Ryan wants to calculate the amount of time he spends on social media which, for him, includes only Instagram and Facebook. To do this he uses a formula $T = aI + bF$, where $I$ is the number of hours he spends on Instagram every day, $F$ is the number of hours he spends on Facebook every day, and $T$ is the total number of hours he spends on social media every week. If he spends the same amount of time on Instagram every day and the same amount of time on Facebook every day, which of the following could be the value of $a + b$?",
    options: ["$7$", "$14$", "$\\frac{1}{7}$", "$\\frac{1}{14}$"],
    correctAnswer: 1,
    explanation: "Since $I$ and $F$ are daily hours and $T$ is weekly total hours, $T = 7I + 7F$. Comparing coefficients, $a = 7$ and $b = 7$, so $a + b = 7 + 7 = 14$.",
    category: "linear equation- word problem"
  },
  {
    id: 16,
    question: "The distance between Giza and Luxor is approximately $500\\text{ Km}$. To travel that distance, Bilal received offers from $4$ different taxi companies shown in the table below. Which company gave Bilal the cheapest offer?<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Company</th><th class=\"border border-gray-400 px-2 py-1\">Fixed Amount (EGP)</th><th class=\"border border-gray-400 px-2 py-1\">Amount per 25 Km (EGP)</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">Taxi \"A\"</td><td class=\"border border-gray-400 px-2 py-1\">160</td><td class=\"border border-gray-400 px-2 py-1\">15</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Taxi \"B\"</td><td class=\"border border-gray-400 px-2 py-1\">210</td><td class=\"border border-gray-400 px-2 py-1\">13</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Taxi \"C\"</td><td class=\"border border-gray-400 px-2 py-1\">185</td><td class=\"border border-gray-400 px-2 py-1\">14</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Taxi \"D\"</td><td class=\"border border-gray-400 px-2 py-1\">150</td><td class=\"border border-gray-400 px-2 py-1\">16</td></tr></tbody></table>",
    options: ["Taxi \"A\"", "Taxi \"B\"", "Taxi \"C\"", "Taxi \"D\""],
    correctAnswer: 0,
    explanation: "Number of 25-km blocks in 500 km = $500 / 25 = 20$. Taxi A: $160 + 20(15) = 460$. Taxi B: $210 + 20(13) = 470$. Taxi C: $185 + 20(14) = 465$. Taxi D: $150 + 20(16) = 470$. Taxi A is the cheapest at $460$ EGP.",
    category: "linear equation- word problem"
  },
  {
    id: 17,
    question: "In order to prepare for the boxing tournament, Jamison needs to work out for at least $90$ hours during the next $3$ weeks. In the first week, he practiced for $42$ hours, and decided to divide the rest of the hours equally over the next two weeks. How much should he practice minimum each week?",
    options: ["$12$ hours", "$24$ hours", "$46$ hours", "$48$ hours"],
    correctAnswer: 1,
    explanation: "Remaining hours needed = $90 - 42 = 48$ hours. Divided equally over 2 weeks = $48 / 2 = 24$ hours per week.",
    category: "linear equation- word problem"
  },
  {
    id: 18,
    question: "If a salesperson receives a base pay of $800\\text{ EGP}$ per month and a $5\\%$ commission on sales, what is the equation relating sales ($a$) and the monthly income ($b$) for this person?",
    options: [
      "$b = 800a + 0.05$",
      "$b = 0.05a + 800$",
      "$a = 800b + 0.05$",
      "$a = 0.05b + 800$"
    ],
    correctAnswer: 1,
    explanation: "Monthly income $b$ = Base pay + Commission = $800 + 0.05a = 0.05a + 800$.",
    category: "linear equation- word problem"
  },
  {
    id: 19,
    question: "Vanessa's company has a bonus policy. At the end of each month, based on performance, every employee gets effort points. At the end of each year, each employee gets paid a fixed bonus amount of $\$400$ and an additional bonus of $\$50$ for each effort point earned. At the end of the year 2019, Vanessa got a bonus of $\$1000$. How many effort points had she earned during the year 2019?",
    options: ["$2$", "$2.375$", "$12$", "$200$"],
    correctAnswer: 2,
    explanation: "Total bonus = $400 + 50p = 1000 \\implies 50p = 600 \\implies p = 12$ effort points.",
    category: "linear equation- word problem"
  },
  {
    id: 20,
    question: "The graph below represents the volume of oil (in liters) in a container over time (in minutes). The volume remains constant at $25$ liters between $t = 12.5$ and $t = 22.5$ minutes, while a leak is present.<br><div class=\"flex justify-center my-4\"><svg width=\"360\" height=\"240\" viewBox=\"0 0 360 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"border border-gray-300 rounded bg-white\"><line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"200\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"50\" y1=\"200\" x2=\"340\" y2=\"200\" stroke=\"#333\" stroke-width=\"2\"/><polygon points=\"46,25 50,15 54,25\" fill=\"#333\"/><polygon points=\"335,196 345,200 335,204\" fill=\"#333\"/><text x=\"10\" y=\"110\" font-size=\"11\" font-family=\"sans-serif\" font-weight=\"bold\" transform=\"rotate(-90 15 110)\">Volume (in liters)</text><text x=\"170\" y=\"230\" font-size=\"11\" font-family=\"sans-serif\" font-weight=\"bold\">Time (minutes)</text><text x=\"45\" y=\"215\" font-size=\"10\">0</text><text x=\"85\" y=\"215\" font-size=\"10\">5</text><text x=\"125\" y=\"215\" font-size=\"10\">10</text><text x=\"165\" y=\"215\" font-size=\"10\">15</text><text x=\"205\" y=\"215\" font-size=\"10\">20</text><text x=\"245\" y=\"215\" font-size=\"10\">25</text><text x=\"285\" y=\"215\" font-size=\"10\">30</text><text x=\"325\" y=\"215\" font-size=\"10\">35</text><text x=\"30\" y=\"203\" font-size=\"10\">0</text><text x=\"30\" y=\"178\" font-size=\"10\">5</text><text x=\"25\" y=\"153\" font-size=\"10\">10</text><text x=\"25\" y=\"128\" font-size=\"10\">15</text><text x=\"25\" y=\"103\" font-size=\"10\">20</text><text x=\"25\" y=\"78\" font-size=\"10\">25</text><text x=\"25\" y=\"53\" font-size=\"10\">30</text><text x=\"25\" y=\"28\" font-size=\"10\">35</text><line x1=\"50\" y1=\"200\" x2=\"330\" y2=\"200\" stroke=\"#e5e7eb\" stroke-dasharray=\"2\"/><line x1=\"50\" y1=\"175\" x2=\"330\" y2=\"175\" stroke=\"#e5e7eb\" stroke-dasharray=\"2\"/><line x1=\"50\" y1=\"150\" x2=\"330\" y2=\"150\" stroke=\"#e5e7eb\" stroke-dasharray=\"2\"/><line x1=\"50\" y1=\"125\" x2=\"330\" y2=\"125\" stroke=\"#e5e7eb\" stroke-dasharray=\"2\"/><line x1=\"50\" y1=\"100\" x2=\"330\" y2=\"100\" stroke=\"#e5e7eb\" stroke-dasharray=\"2\"/><line x1=\"50\" y1=\"75\" x2=\"330\" y2=\"75\" stroke=\"#e5e7eb\" stroke-dasharray=\"2\"/><line x1=\"50\" y1=\"50\" x2=\"330\" y2=\"50\" stroke=\"#e5e7eb\" stroke-dasharray=\"2\"/><polyline points=\"70,150 150,50 230,50 270,75 310,75 330,200\" stroke=\"#2563eb\" stroke-width=\"3\" fill=\"none\"/></svg></div><br>Which statement is true?",
    options: [
      "Oil is not leaking from the container after 30 minutes.",
      "Oil is being added to the container at the same rate at which it is leaking between 12.5 and 22.5 minutes.",
      "Oil is leaking from the container without any amount being added between 27.5 and 32.5 minutes.",
      "The rate at which oil is added is the same at which oil is leaking between 2.5 and 12.5 minutes."
    ],
    correctAnswer: 1,
    explanation: "Since the volume line is flat (zero net slope) between $12.5$ and $22.5$ minutes despite the ongoing leak, oil is being added at the exact same rate at which it is leaking.",
    category: "linear equation- word problem"
  },
  {
    id: 21,
    question: "In a chemistry lab, the mass $M$ (in grams) of gas produced by a chemical reaction at time $t$ (in seconds) is given by $M = 1.61t + 3.95$. For every $10$ seconds, what is the increase in the mass of gas released?",
    options: ["$1.61$", "$3.95$", "$16.1$", "$39.5$"],
    correctAnswer: 2,
    explanation: "Rate of mass increase per second = $1.61$ grams/sec. Increase over 10 seconds = $1.61 \\times 10 = 16.1$ grams.",
    category: "linear equation- word problem"
  },
  {
    id: 22,
    question: "At a trivia game, a player wins $10$ gold coins just for participating, wins $3$ gold coins for each correct answer, and loses $1$ gold coin for each wrong answer. At the end, $1\\text{ gold coin} = \\$3$. If Jad makes $4$ mistakes and gains $\$153$, how many correct answers does he have?",
    options: ["$17$", "$10$", "$19$", "$15$"],
    correctAnswer: 3,
    explanation: "Total coins gained = $\$153 / 3 = 51$ coins. Let $C$ = correct answers. Equation: $10 + 3C - 1(4) = 51 \\implies 6 + 3C = 51 \\implies 3C = 45 \\implies C = 15$.",
    category: "linear equation- word problem"
  },
  {
    id: 23,
    question: "A company employer wants to distribute work documents among workers. Giving $2$ documents to each employee leaves $20$ leftover. Giving $3$ to each employee and keeping $1$ for himself leaves $9$ leftover. What is the total number of documents?",
    options: ["$44$", "$11$", "$10$", "$40$"],
    correctAnswer: 3,
    explanation: "Let $E$ = number of employees, $D$ = total documents. Equation 1: $D = 2E + 20$. Equation 2: $D = 3E + 1 + 9 = 3E + 10$. Setting $2E + 20 = 3E + 10 \\implies E = 10$. Total documents $D = 2(10) + 20 = 40$.",
    category: "linear equation- word problem"
  },
  {
    id: 24,
    question: "Due to large demand, a shop owner increases hand sanitizer price modeled by $P = 3.5D + 6$, where $D$ is the number of days after the decision. What is the best interpretation of $6$ in the expression?",
    options: [
      "The increase in the price of the sanitizer per day.",
      "The change in the price of sanitizer every day.",
      "The price of the sanitizer after the shop owner stops increasing the price.",
      "The price of the sanitizer before the large demand."
    ],
    correctAnswer: 3,
    explanation: "When $D = 0$ (before the price increase days begin), $P = 6$. So $6$ represents the initial price before the price increase decision.",
    category: "linear equation- word problem"
  },
  {
    id: 25,
    question: "The graph $d$ of a linear function $f$ has a negative slope. Which of the following may be true about the graph $n$ of a linear function $g$ of slope $12$?",
    options: [
      "Only I",
      "Only II",
      "I and III",
      "II and III"
    ],
    correctAnswer: 2,
    explanation: "I: $n$ can be perpendicular to $d$ if $d$'s slope is $-1/12$. (True). II: $n$ cannot be parallel to $d$ because $d$ has negative slope while $n$ has slope $+12$. III: $n$ can pass through $(0,0)$ if its y-intercept is $0$. (True). Hence, I and III are correct.",
    category: "linear equation- word problem"
  },
  {
    id: 26,
    question: "The given graph shows the speeds $v$ (in m/s) of Sam and Daniel as a function of time $t$ (in seconds).<br><div class=\"flex justify-center my-4\"><svg width=\"320\" height=\"260\" viewBox=\"0 0 320 260\" xmlns=\"http://www.w3.org/2000/svg\" class=\"border border-gray-300 rounded bg-white\"><line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"220\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"60\" y1=\"220\" x2=\"300\" y2=\"220\" stroke=\"#333\" stroke-width=\"2\"/><polygon points=\"56,25 60,15 64,25\" fill=\"#333\"/><polygon points=\"295,216 305,220 295,224\" fill=\"#333\"/><text x=\"20\" y=\"25\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\">v (m/s)</text><text x=\"280\" y=\"240\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\">t (s)</text><text x=\"50\" y=\"235\" font-size=\"10\">0</text><text x=\"150\" y=\"235\" font-size=\"10\">0.2</text><text x=\"230\" y=\"235\" font-size=\"10\">0.4</text><text x=\"280\" y=\"235\" font-size=\"10\">0.6</text><text x=\"35\" y=\"173\" font-size=\"10\">0.2</text><text x=\"35\" y=\"123\" font-size=\"10\">0.4</text><text x=\"35\" y=\"73\" font-size=\"10\">0.6</text><line x1=\"60\" y1=\"170\" x2=\"280\" y2=\"170\" stroke=\"#e5e7eb\" stroke-dasharray=\"2\"/><line x1=\"60\" y1=\"120\" x2=\"280\" y2=\"120\" stroke=\"#e5e7eb\" stroke-dasharray=\"2\"/><line x1=\"60\" y1=\"70\" x2=\"280\" y2=\"70\" stroke=\"#e5e7eb\" stroke-dasharray=\"2\"/><line x1=\"155\" y1=\"20\" x2=\"155\" y2=\"220\" stroke=\"#e5e7eb\" stroke-dasharray=\"2\"/><line x1=\"235\" y1=\"20\" x2=\"235\" y2=\"220\" stroke=\"#e5e7eb\" stroke-dasharray=\"2\"/><line x1=\"60\" y1=\"220\" x2=\"180\" y2=\"20\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><line x1=\"60\" y1=\"70\" x2=\"245\" y2=\"225\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><text x=\"185\" y=\"50\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#2563eb\">Sam</text><text x=\"210\" y=\"185\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#dc2626\">Daniel</text></svg></div><br>At $t = 0$, Sam's speed is $0\\text{ m/s}$ and Daniel's is $0.6\\text{ m/s}$ (difference = $0.6$). At $t = 0.2\\text{ s}$, both speeds intersect at $0.4\\text{ m/s}$ (difference = $0$). The difference in speeds is how much less at $t = 0.2\\text{ s}$ than initially?",
    options: ["$0\\text{ seconds}$", "$0.3\\text{ seconds}$", "$0.4\\text{ seconds}$", "$0.6\\text{ seconds}$"],
    correctAnswer: 3,
    explanation: "Initial difference = $0.6 - 0 = 0.6\\text{ m/s}$. Difference at $t = 0.2\\text{ s}$ = $0.4 - 0.4 = 0\\text{ m/s}$. The reduction in speed difference is $0.6 - 0 = 0.6\\text{ m/s}$.",
    category: "linear equation- word problem"
  },
  {
    id: 27,
    question: "Ahmad runs half the distance to school at $3\\text{ m/s}$ and walks the remaining half at $2\\text{ m/s}$. He takes $55$ minutes to complete the trip. Find the total distance (in meters) Ahmad has to travel to reach school.",
    options: ["$7920$", "$7500$", "$8520$", "$9530$"],
    correctAnswer: 0,
    explanation: "Let half distance = $x$ meters. Time running = $x/3$, time walking = $x/2$. Total time = $5x/6$ seconds = $55 \\times 60 = 3300$ seconds. $5x/6 = 3300 \\implies x = 3960$ meters. Total distance $2x = 2(3960) = 7920$ meters.",
    category: "linear equation- word problem"
  },
  {
    id: 28,
    question: "The expression $1.6y + 10.8$ models eligible voters in millions from 1990 to 2015 ($y = 1$ is 1990). What is the difference between eligible voters in millions in 2020 and 2017?",
    options: ["$5.2$", "$4.8$", "$6.4$", "$2.4$"],
    correctAnswer: 1,
    explanation: "Difference in years between 2020 and 2017 = $3$ years. Rate of change per year = $1.6$ million. Difference in voters = $1.6 \\times 3 = 4.8$ million.",
    category: "linear equation- word problem"
  },
  {
    id: 29,
    question: "The expression $1.6y + 10.8$ models eligible voters in millions from 1990 to 2015 where $y = 1$ represents 1990. Find the approximate number of eligible voters in millions in 1999.",
    options: ["$27$", "$25$", "$29$", "$3209$"],
    correctAnswer: 0,
    explanation: "For year 1999, $y = 10$. Eligible voters = $1.6(10) + 10.8 = 16 + 10.8 = 26.8 \\approx 27$ million.",
    category: "linear equation- word problem"
  },
  {
    id: 30,
    question: "The table below shows average closing price of gold. Supposing the relation is linear, what is the rate of change between years 2013 and 2019?<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Year</th><th class=\"border border-gray-400 px-2 py-1\">Average Closing Price ($\$)</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">2013</td><td class=\"border border-gray-400 px-2 py-1\">1,668.86</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">2019</td><td class=\"border border-gray-400 px-2 py-1\">1,393.34</td></tr></tbody></table>",
    options: ["$-45.92$", "$-39.36$", "$39.36$", "$45.92$"],
    correctAnswer: 0,
    explanation: "Rate of change = $(1,393.34 - 1,668.86) / (2019 - 2013) = -275.52 / 6 = -45.92$.",
    category: "linear equation- word problem"
  },
  {
    id: 31,
    question: "Based on football ticket sales tables, what was the seasonal ticket price for a male person in 2018, and how much did it change in 2019?<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Year</th><th class=\"border border-gray-400 px-2 py-1\">Male Seasonal Tickets</th><th class=\"border border-gray-400 px-2 py-1\">Male Seasonal Revenue ($\$)</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">2018</td><td class=\"border border-gray-400 px-2 py-1\">1122</td><td class=\"border border-gray-400 px-2 py-1\">78540</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">2019</td><td class=\"border border-gray-400 px-2 py-1\">1088</td><td class=\"border border-gray-400 px-2 py-1\">80512</td></tr></tbody></table>",
    options: [
      "It cost $\$70$ in 2018, and it decreased by $\$4$ the next year.",
      "It cost $\$74$ in 2018, and it increased by $\$4$ the next year.",
      "It cost $\$70$ in 2018, and it increased by $\$4$ the next year.",
      "It cost $\$74$ in 2018, and it decreased by $\$4$ the next year."
    ],
    correctAnswer: 2,
    explanation: "2018 price = $78,540 / 1,122 = \\$70$. 2019 price = $80,512 / 1,088 = \\$74$. The price increased by $\$4$ in 2019.",
    category: "linear equation- word problem"
  },
  {
    id: 32,
    question: "The graph below shows earnings in thousands of dollars for each month of the year.<br><div class=\"flex justify-center my-4\"><svg width=\"400\" height=\"220\" viewBox=\"0 0 400 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"border border-gray-300 rounded bg-white\"><line x1=\"40\" y1=\"15\" x2=\"40\" y2=\"180\" stroke=\"#333\" stroke-width=\"2\"/><line x1=\"40\" y1=\"180\" x2=\"380\" y2=\"180\" stroke=\"#333\" stroke-width=\"2\"/><polygon points=\"36,20 40,10 44,20\" fill=\"#333\"/><polygon points=\"375,176 385,180 375,184\" fill=\"#333\"/><text x=\"45\" y=\"20\" font-size=\"10\" font-family=\"sans-serif\">in thousands dollars</text><text x=\"22\" y=\"153\" font-size=\"9\">2</text><text x=\"22\" y=\"125\" font-size=\"9\">4</text><text x=\"22\" y=\"97\" font-size=\"9\">6</text><text x=\"22\" y=\"69\" font-size=\"9\">8</text><text x=\"18\" y=\"41\" font-size=\"9\">10</text><text x=\"18\" y=\"20\" font-size=\"9\">12</text><g stroke=\"#d1d5db\" stroke-width=\"0.5\"><line x1=\"40\" y1=\"150\" x2=\"380\" y2=\"150\"/><line x1=\"40\" y1=\"122\" x2=\"380\" y2=\"122\"/><line x1=\"40\" y1=\"94\" x2=\"380\" y2=\"94\"/><line x1=\"40\" y1=\"66\" x2=\"380\" y2=\"66\"/><line x1=\"40\" y1=\"38\" x2=\"380\" y2=\"38\"/></g><g font-size=\"8\" font-family=\"sans-serif\" text-anchor=\"middle\"><text x=\"65\" y=\"193\">Jan</text><text x=\"90\" y=\"193\">Feb</text><text x=\"115\" y=\"193\">Mar</text><text x=\"140\" y=\"193\">Apr</text><text x=\"165\" y=\"193\">May</text><text x=\"190\" y=\"193\">June</text><text x=\"215\" y=\"193\">July</text><text x=\"240\" y=\"193\">Aug</text><text x=\"265\" y=\"193\">Sep</text><text x=\"290\" y=\"193\">Oct</text><text x=\"315\" y=\"193\">Nov</text><text x=\"340\" y=\"193\">Dec</text></g><g stroke=\"#2563eb\" stroke-width=\"1.5\"><line x1=\"65\" y1=\"180\" x2=\"65\" y2=\"150\"/><text x=\"65\" y=\"147\" fill=\"#1e40af\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"90\" y1=\"180\" x2=\"90\" y2=\"136\"/><text x=\"90\" y=\"133\" fill=\"#1e40af\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"115\" y1=\"180\" x2=\"115\" y2=\"150\"/><text x=\"115\" y=\"147\" fill=\"#1e40af\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"140\" y1=\"180\" x2=\"140\" y2=\"66\"/><text x=\"140\" y=\"63\" fill=\"#1e40af\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"165\" y1=\"180\" x2=\"165\" y2=\"94\"/><text x=\"165\" y=\"91\" fill=\"#1e40af\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"190\" y1=\"180\" x2=\"190\" y2=\"122\"/><text x=\"190\" y=\"119\" fill=\"#1e40af\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"215\" y1=\"180\" x2=\"215\" y2=\"150\"/><text x=\"215\" y=\"147\" fill=\"#1e40af\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"240\" y1=\"180\" x2=\"240\" y2=\"164\"/><text x=\"240\" y=\"161\" fill=\"#1e40af\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"265\" y1=\"180\" x2=\"265\" y2=\"24\"/><text x=\"265\" y=\"21\" fill=\"#dc2626\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"290\" y1=\"180\" x2=\"290\" y2=\"52\"/><text x=\"290\" y=\"49\" fill=\"#1e40af\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"315\" y1=\"180\" x2=\"315\" y2=\"136\"/><text x=\"315\" y=\"133\" fill=\"#1e40af\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"340\" y1=\"180\" x2=\"340\" y2=\"94\"/><text x=\"340\" y=\"91\" fill=\"#1e40af\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">✕</text></g></svg></div><br>During September (26 working days), Adam worked $15$ hours/day and his fiancée worked $11$ hours/day at $\$10.7$/hour. Their combined total salary for September was $\$11,000$. Approximately how much was Adam getting paid per hour?",
    options: ["$\$16.6$", "$\$17.8$", "$\$20.4$", "$\$36.1$"],
    correctAnswer: 2,
    explanation: "Fiancée total pay = $11 \\text{ hrs/day} \\times 26 \\text{ days} \\times 10.7 = 3,060.20$. Adam total pay = $11,000 - 3,060.20 = 7,939.80$. Adam total hours = $15 \\times 26 = 390$ hours. Adam hourly rate = $7,939.80 / 390 \\approx \$20.4$.",
    category: "linear equation- word problem"
  },
  {
    id: 33,
    question: "Sami purchases books for $\$10.26$ and copybooks for $\$7.58$, paying $\$1$ postage each. He charges customers $\$19.25$ per book and $\$11.58$ per copybook plus $\$1.25$ postage each. Which equation represents profit $P$ on $x$ books and $y$ copybooks?",
    options: [
      "$P = 10.26x + 7.58y$",
      "$P = 8.99x + 4y$",
      "$P = 9.24x + 4.25y$",
      "$P = 9.24x + 4y$"
    ],
    correctAnswer: 2,
    explanation: "Profit per book = $(19.25 + 1.25) - (10.26 + 1.00) = 20.50 - 11.26 = 9.24$. Profit per copybook = $(11.58 + 1.25) - (7.58 + 1.00) = 12.83 - 8.58 = 4.25$. Total profit $P = 9.24x + 4.25y$.",
    category: "linear equation- word problem"
  },
  {
    id: 34,
    question: "Adnan plants $205$ citrus trees on his land. Each tree costs $172\\text{ EGP}$ to buy, $100\\text{ EGP}$ to plant, plus $3994\\text{ EGP}$ per month to manage the land. How much will Adnan pay during the first year of his project?",
    options: [
      "$103,688\\text{ EGP}$",
      "$100,388\\text{ EGP}$",
      "$83,288\\text{ EGP}$",
      "$59,754\\text{ EGP}$"
    ],
    correctAnswer: 0,
    explanation: "Trees purchase = $205 \\times 172 = 35,260$. Planting = $205 \\times 100 = 20,500$. Annual land management = $3,994 \\times 12 = 47,928$. Total 1st year cost = $35,260 + 20,500 + 47,928 = 103,688\\text{ EGP}$.",
    category: "linear equation- word problem"
  },
  {
    id: 35,
    question: "A company has 1 employee earning $\$1,650$ per month ($\$19,800$/year). In which year was the total rental revenue for cars and trucks less than his annual wage?<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Year</th><th class=\"border border-gray-400 px-2 py-1\">Cars ($\$)</th><th class=\"border border-gray-400 px-2 py-1\">Trucks ($\$)</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">2015</td><td class=\"border border-gray-400 px-2 py-1\">10004.6</td><td class=\"border border-gray-400 px-2 py-1\">7888.3</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">2016</td><td class=\"border border-gray-400 px-2 py-1\">12456.7</td><td class=\"border border-gray-400 px-2 py-1\">7985.2</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">2017</td><td class=\"border border-gray-400 px-2 py-1\">14899.9</td><td class=\"border border-gray-400 px-2 py-1\">8050.2</td></tr></tbody></table>",
    options: ["$2015$", "$2016$", "$2019$", "$2020$"],
    correctAnswer: 0,
    explanation: "In 2015, total revenue = $10,004.6 + 7,888.3 = \$17,892.90$, which is less than his full annual wage of $\$19,800$.",
    category: "linear equation- word problem"
  },
  {
    id: 36,
    question: "A dart game rewards $5$ points for inner section and $3$ points for outer section as shown in the diagram below.<br><div class=\"flex justify-center my-4\"><svg width=\"200\" height=\"200\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"border border-gray-200 rounded bg-white\"><circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"#9ca3af\" stroke=\"#4b5563\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"100\" r=\"35\" fill=\"#e5e7eb\" stroke=\"#6b7280\" stroke-width=\"2\"/><text x=\"50\" y=\"70\" font-size=\"16\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1f2937\">3</text></svg></div><br>Kurt throws $6$ darts and hits the inner section $x$ times. What is Kurt's total score in terms of $x$?",
    options: ["$8x + 24$", "$2x + 18$", "$-2x + 18$", "$6x + 4$"],
    correctAnswer: 1,
    explanation: "Inner score = $5x$. Outer score = $3(6 - x) = 18 - 3x$. Total score = $5x + 18 - 3x = 2x + 18$.",
    category: "linear equation- word problem"
  },
  {
    id: 37,
    question: "A technician charges an initial diagnostic fee of $\$45$ plus $\$30$ for each hour of repair work. If the total bill was $\$165$, how many hours did the repair work take?",
    options: ["$3$ hours", "$4$ hours", "$5$ hours", "$6$ hours"],
    correctAnswer: 1,
    explanation: "Equation: $45 + 30h = 165 \\implies 30h = 120 \\implies h = 4$ hours.",
    category: "linear equation- word problem"
  }
];
