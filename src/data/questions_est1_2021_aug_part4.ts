import { Question } from '../../types';

export const EST1_2021_AUG_PART4: Question[] = [
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
    "svg": "<svg viewBox=\"0 0 380 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"190\" y=\"24\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\" text-anchor=\"middle\">Temperature versus Humidity</text>\n  <line x1=\"60\" y1=\"40\" x2=\"60\" y2=\"240\" stroke=\"#374151\" stroke-width=\"1.5\"/>\n  <text x=\"18\" y=\"140\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2937\" transform=\"rotate(-90 18 140)\" text-anchor=\"middle\">Relative Humidity (%)</text>\n  <line x1=\"60\" y1=\"40\" x2=\"350\" y2=\"40\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"44\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">95</text>\n  <line x1=\"60\" y1=\"68.5\" x2=\"350\" y2=\"68.5\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"72.5\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">90</text>\n  <line x1=\"60\" y1=\"97.1\" x2=\"350\" y2=\"97.1\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"101.1\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">85</text>\n  <line x1=\"60\" y1=\"125.7\" x2=\"350\" y2=\"125.7\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"129.7\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">80</text>\n  <line x1=\"60\" y1=\"154.3\" x2=\"350\" y2=\"154.3\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"158.3\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">75</text>\n  <line x1=\"60\" y1=\"182.9\" x2=\"350\" y2=\"182.9\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"186.9\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">70</text>\n  <line x1=\"60\" y1=\"211.4\" x2=\"350\" y2=\"211.4\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"215.4\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">65</text>\n  <line x1=\"60\" y1=\"240\" x2=\"350\" y2=\"240\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"244\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">60</text>\n  <line x1=\"60\" y1=\"240\" x2=\"350\" y2=\"240\" stroke=\"#374151\" stroke-width=\"1.5\"/>\n  <text x=\"205\" y=\"280\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2937\" text-anchor=\"middle\">Temperature (°Fahrenheit)</text>\n  <line x1=\"118\" y1=\"40\" x2=\"118\" y2=\"240\" stroke=\"#e5e7eb\"/><text x=\"118\" y=\"256\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"middle\">70</text>\n  <line x1=\"176\" y1=\"40\" x2=\"176\" y2=\"240\" stroke=\"#e5e7eb\"/><text x=\"176\" y=\"256\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"middle\">72</text>\n  <line x1=\"234\" y1=\"40\" x2=\"234\" y2=\"240\" stroke=\"#e5e7eb\"/><text x=\"234\" y=\"256\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"middle\">74</text>\n  <line x1=\"292\" y1=\"40\" x2=\"292\" y2=\"240\" stroke=\"#e5e7eb\"/><text x=\"292\" y=\"256\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"middle\">76</text>\n  <line x1=\"350\" y1=\"40\" x2=\"350\" y2=\"240\" stroke=\"#e5e7eb\"/><text x=\"350\" y=\"256\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"middle\">78</text>\n  <line x1=\"75.5\" y1=\"240\" x2=\"350\" y2=\"97.1\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n  <circle cx=\"103.5\" cy=\"240\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"103.5\" cy=\"211.4\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"152.8\" cy=\"182.9\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"176\" cy=\"182.9\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"234\" cy=\"182.9\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"254.3\" cy=\"154.3\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"254.3\" cy=\"125.7\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"292\" cy=\"125.7\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"326.8\" cy=\"68.5\" r=\"4\" fill=\"#1f2937\"/>\n</svg>",
    "options": [],
    "correctAnswer": "75",
    "isGridIn": true,
    "explanation": "Looking at the line of best fit in the graph, at temperature 74 (x-axis), the line is exactly at y = 75 (halfway between 70 and 80)."
  },
  {
    "id": "est1_2021_aug_q53",
    "examId": "EST12021Aug",
    "question": "**Questions 32-33 refer to the following information.**\n\nHumidity percentage vary according to the temperature. The scatterplot below compares the temperature, in degree Fahrenheit and relative humidity on a certain day, every hour from 12:00 P.M. to 8:00 P.M. The line of best fit is also shown.\n\n---\nWhat is the humidity percentage represented by the data point that is farthest from the line of best fit?",
    "svg": "<svg viewBox=\"0 0 380 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"190\" y=\"24\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\" text-anchor=\"middle\">Temperature versus Humidity</text>\n  <line x1=\"60\" y1=\"40\" x2=\"60\" y2=\"240\" stroke=\"#374151\" stroke-width=\"1.5\"/>\n  <text x=\"18\" y=\"140\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2937\" transform=\"rotate(-90 18 140)\" text-anchor=\"middle\">Relative Humidity (%)</text>\n  <line x1=\"60\" y1=\"40\" x2=\"350\" y2=\"40\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"44\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">95</text>\n  <line x1=\"60\" y1=\"68.5\" x2=\"350\" y2=\"68.5\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"72.5\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">90</text>\n  <line x1=\"60\" y1=\"97.1\" x2=\"350\" y2=\"97.1\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"101.1\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">85</text>\n  <line x1=\"60\" y1=\"125.7\" x2=\"350\" y2=\"125.7\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"129.7\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">80</text>\n  <line x1=\"60\" y1=\"154.3\" x2=\"350\" y2=\"154.3\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"158.3\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">75</text>\n  <line x1=\"60\" y1=\"182.9\" x2=\"350\" y2=\"182.9\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"186.9\" fill=\"#4b5563\" text-anchor=\"end\">70</text>\n  <line x1=\"60\" y1=\"211.4\" x2=\"350\" y2=\"211.4\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"215.4\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">65</text>\n  <line x1=\"60\" y1=\"240\" x2=\"350\" y2=\"240\" stroke=\"#e5e7eb\"/><text x=\"52\" y=\"244\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"end\">60</text>\n  <line x1=\"60\" y1=\"240\" x2=\"350\" y2=\"240\" stroke=\"#374151\" stroke-width=\"1.5\"/>\n  <text x=\"205\" y=\"280\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2937\" text-anchor=\"middle\">Temperature (°Fahrenheit)</text>\n  <line x1=\"118\" y1=\"40\" x2=\"118\" y2=\"240\" stroke=\"#e5e7eb\"/><text x=\"118\" y=\"256\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"middle\">70</text>\n  <line x1=\"176\" y1=\"40\" x2=\"176\" y2=\"240\" stroke=\"#e5e7eb\"/><text x=\"176\" y=\"256\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"middle\">72</text>\n  <line x1=\"234\" y1=\"40\" x2=\"234\" y2=\"240\" stroke=\"#e5e7eb\"/><text x=\"234\" y=\"256\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"middle\">74</text>\n  <line x1=\"292\" y1=\"40\" x2=\"292\" y2=\"240\" stroke=\"#e5e7eb\"/><text x=\"292\" y=\"256\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"middle\">76</text>\n  <line x1=\"350\" y1=\"40\" x2=\"350\" y2=\"240\" stroke=\"#e5e7eb\"/><text x=\"350\" y=\"256\" font-size=\"11\" fill=\"#4b5563\" text-anchor=\"middle\">78</text>\n  <line x1=\"75.5\" y1=\"240\" x2=\"350\" y2=\"97.1\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n  <circle cx=\"103.5\" cy=\"240\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"103.5\" cy=\"211.4\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"152.8\" cy=\"182.9\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"176\" cy=\"182.9\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"234\" cy=\"182.9\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"254.3\" cy=\"154.3\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"254.3\" cy=\"125.7\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"292\" cy=\"125.7\" r=\"4\" fill=\"#1f2937\"/>\n  <circle cx=\"326.8\" cy=\"68.5\" r=\"4\" fill=\"#1f2937\"/>\n</svg>",
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
    "question": "**Questions 37-38 refer to the following information.**\n\nThe chart above shows the commission structure for staff members working in a company.\n\nAll members of the staff benefit from a fixed salary of $800 monthly plus a commission on the profit of the company as shown in the chart.\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-3 py-1.5\">Job title</th>\n      <th class=\"border border-gray-400 px-3 py-1.5\">Commission percentage rate</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"border border-gray-400 px-3 py-1.5 font-medium\">Trainee</td>\n      <td class=\"border border-gray-400 px-3 py-1.5\">1%</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-3 py-1.5 font-medium\">Employee</td>\n      <td class=\"border border-gray-400 px-3 py-1.5\">2%</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-3 py-1.5 font-medium\">Supervisor</td>\n      <td class=\"border border-gray-400 px-3 py-1.5\">3%</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-3 py-1.5 font-medium\">Senior supervisor</td>\n      <td class=\"border border-gray-400 px-3 py-1.5\">4%</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-3 py-1.5 font-medium\">Manager</td>\n      <td class=\"border border-gray-400 px-3 py-1.5\">5%</td>\n    </tr>\n  </tbody>\n</table>\n\n---\nThe salary of the manager Sam for the month of January was $7,000. What is the salary of the supervisor John in January?",
    "options": [],
    "correctAnswer": "4520",
    "isGridIn": true,
    "explanation": "Manager's commission is 5%.\nLet $P$ be the company's profit.\n$800 + 0.05 P = 7000 \\implies 0.05 P = 6200 \\implies P = 124000$.\nSupervisor John gets 3% commission. His salary is $800 + 0.03(124000) = 800 + 3720 = 4520$."
  },
  {
    "id": "est1_2021_aug_q58",
    "examId": "EST12021Aug",
    "question": "**Questions 37-38 refer to the following information.**\n\nThe chart above shows the commission structure for staff members working in a company.\n\nAll members of the staff benefit from a fixed salary of $800 monthly plus a commission on the profit of the company as shown in the chart.\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-3 py-1.5\">Job title</th>\n      <th class=\"border border-gray-400 px-3 py-1.5\">Commission percentage rate</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"border border-gray-400 px-3 py-1.5 font-medium\">Trainee</td>\n      <td class=\"border border-gray-400 px-3 py-1.5\">1%</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-3 py-1.5 font-medium\">Employee</td>\n      <td class=\"border border-gray-400 px-3 py-1.5\">2%</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-3 py-1.5 font-medium\">Supervisor</td>\n      <td class=\"border border-gray-400 px-3 py-1.5\">3%</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-3 py-1.5 font-medium\">Senior supervisor</td>\n      <td class=\"border border-gray-400 px-3 py-1.5\">4%</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-3 py-1.5 font-medium\">Manager</td>\n      <td class=\"border border-gray-400 px-3 py-1.5\">5%</td>\n    </tr>\n  </tbody>\n</table>\n\n---\nIn February, the salary of an employee, a senior supervisor and a trainee was $13,650 altogether.\n\nWhat was the approximate salary, rounded to the nearest dollar, of the trainee alone in February?",
    "options": [],
    "correctAnswer": "2407",
    "isGridIn": true,
    "explanation": "Total salary = 3 fixed salaries + (Employee + Senior + Trainee) commission.\n$3(800) + (0.02 + 0.04 + 0.01) P = 13650 \\implies 2400 + 0.07 P = 13650 \\implies 0.07 P = 11250 \\implies P = \\frac{11250}{0.07} \\approx 160714.28$.\nTrainee's salary = $800 + 0.01 P = 800 + 1607.14 = 2407.14$.\nRounded to the nearest dollar is 2407."
  }
];
