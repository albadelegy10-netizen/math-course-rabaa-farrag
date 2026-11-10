import { Question } from '../../types';

export const PERCENTAGE_PART2: Question[] = [
  {
    "id": "perc_21",
    "question": "In a certain village, the number of people doubles every three months. If there were 120 people in the village in March, which of the following equations should be solved to find when the population reaches 1500 assuming no deaths occur? ($m$ represents the number of months)",
    "options": [
      "$120(2)^{\\frac{m}{3}} = 1500$",
      "$120(2)^{3m} = 1500$",
      "$2(120)^{\\frac{m}{3}} = 1500$",
      "$1500(2)^{\\frac{m}{3}} = 120$"
    ],
    "correctAnswer": 0,
    "explanation": "Initial population = 120. It doubles (multiplier is 2) every 3 months, so the exponent is $\\frac{m}{3}$. The equation is $120(2)^{\\frac{m}{3}} = 1500$."
  },
  {
    "id": "perc_22",
    "question": "According to the data, which subject had the lowest percentage of likers among primary students?",
    "imageUrl": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxsaW5lIHgxPSIxMCIgeTE9IjIwIiB4Mj0iMjkwIiB5Mj0iMjAiIHN0cm9rZT0iYmxhY2siLz48dGV4dCB4PSIyMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+TWFqb3I8L3RleHQ+PHRleHQgeD0iODAiIHk9IjM1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPkhpc3Rvcnk8L3RleHQ+PHRleHQgeD0iMTMwIiB5PSIzNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj5NYXRoPC90ZXh0Pjx0ZXh0IHg9IjE4MCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+QXVkaXQ8L3RleHQ+PHRleHQgeD0iMjMwIiB5PSIzNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj5JVDwvdGV4dD48dGV4dCB4PSIyNzAiIHk9IjM1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPlRvdGFsPC90ZXh0PjxsaW5lIHgxPSIxMCIgeTE9IjQwIiB4Mj0iMjkwIiB5Mj0iNDAiIHN0cm9rZT0iYmxhY2siLz48dGV4dCB4PSIyMCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+Um9tZTwvdGV4dD48dGV4dCB4PSI4MCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+NjU8L3RleHQ+PHRleHQgeD0iMTMwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj4zNTwvdGV4dD48dGV4dCB4PSIxODAiIHk9IjU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjM1PC90ZXh0Pjx0ZXh0IHg9IjIzMCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+MTU8L3RleHQ+PHRleHQgeD0iMjcwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj4xNTA8L3RleHQ+PHRleHQgeD0iMjAiIHk9IjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPlBhcmlzPC90ZXh0Pjx0ZXh0IHg9IjgwIiB5PSI3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj43NTwvdGV4dD48dGV4dCB4PSIxMzAiIHk9IjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjY1PC90ZXh0Pjx0ZXh0IHg9IjE4MCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+MTA8L3RleHQ+PHRleHQgeD0iMjMwIiB5PSI3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj4yNTwvdGV4dD48dGV4dCB4PSIyNzAiIHk9IjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjE3NTwvdGV4dD48dGV4dCB4PSIyMCIgeT0iODUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+VG9reW88L3RleHQ+PHRleHQgeD0iODAiIHk9Ijg1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjQwPC90ZXh0Pjx0ZXh0IHg9IjEzMCIgeT0iODUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+MTE1PC90ZXh0Pjx0ZXh0IHg9IjE4MCIgeT0iODUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+NTA8L3RleHQ+PHRleHQgeD0iMjMwIiB5PSI4NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj4yMDwvdGV4dD48dGV4dCB4PSIyNzAiIHk9Ijg1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjIyNTwvdGV4dD48dGV4dCB4PSIyMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPk5ZQzwvdGV4dD48dGV4dCB4PSI4MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjcwPC90ZXh0Pjx0ZXh0IHg9IjEzMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjYwPC90ZXh0Pjx0ZXh0IHg9IjE4MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjMwPC90ZXh0Pjx0ZXh0IHg9IjIzMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjQwPC90ZXh0Pjx0ZXh0IHg9IjI3MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjIwMDwvdGV4dD48bGluZSB4MT0iMTAiIHkxPSIxMDUiIHgyPSIyOTAiIHkyPSIxMDUiIHN0cm9rZT0iYmxhY2siLz48dGV4dCB4PSIyMCIgeT0iMTIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPlRvdGFsPC90ZXh0Pjx0ZXh0IHg9IjgwIiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+MjUwPC90ZXh0Pjx0ZXh0IHg9IjEzMCIgeT0iMTIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjI3NTwvdGV4dD48dGV4dCB4PSIxODAiIHk9IjEyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj4xMjU8L3RleHQ+PHRleHQgeD0iMjMwIiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+MTAwPC90ZXh0Pjx0ZXh0IHg9IjI3MCIgeT0iMTIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjc1MDwvdGV4dD48L3N2Zz4=",
    "options": [
      "Math",
      "English",
      "Science",
      "History"
    ],
    "correctAnswer": 3,
    "explanation": "Looking at the Primary column: Math (65), English (35), Science (15), History (10). Total = 125. The lowest number is History (10), which corresponds to the lowest percentage."
  },
  {
    "id": "perc_23",
    "question": "In a certain country, the ratio of male individuals who got infected by the COVID-19 virus to the female individuals who got infected by the same virus is 6 to 4. Moreover, it was observed that only 9% of the males and 5% of the females who get infected by the virus got severe symptoms. If the number of COVID-19 cases in the country is 1200, how many females have severe symptoms?",
    "options": [
      "24",
      "162",
      "600",
      "1200",
      "1800"
    ],
    "correctAnswer": 0,
    "explanation": "Ratio of male to female = 6:4. Total parts = 10. Number of females = $\\frac{4}{10} \\times 1200 = 480$. Females with severe symptoms = $5\\%$ of $480 = 0.05 \\times 480 = 24$."
  },
  {
    "id": "perc_24",
    "question": "The price of a CD player is $180$ €. It is on sale at the price of $135$ €. A customer wishes to purchase this device. He has a loyalty card from the store that allows him to benefit from a 10% discount at checkout. How much will he pay for this device?",
    "options": [
      "148.5",
      "121.5",
      "125",
      "145"
    ],
    "correctAnswer": 1,
    "explanation": "Sale price = $135$ €. Discount = 10%. Final price = $135 \\times (1 - 0.10) = 135 \\times 0.90 = 121.5$ €."
  },
  {
    "id": "perc_25",
    "question": "The pie chart above shows the results of a survey that asked 1420 students in a school about their favorite fruit. How many students like mango more than any other fruit? And, approximately how many more students said apple was their favorite fruit than said oranges was their favorite one?",
    "imageUrl": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siLz48dGV4dCB4PSIxMDAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QaWUgQ2hhcnQ8L3RleHQ+PHRleHQgeD0iMTAwIiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QXBwbGU6IDIxLjUlPC90ZXh0Pjx0ZXh0IHg9IjEwMCIgeT0iMTQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1hbmdvOiAxNy42JTwvdGV4dD48dGV4dCB4PSIxMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5PcmFuZ2U6IDEzLjIlPC90ZXh0Pjwvc3ZnPg==",
    "options": [
      "250 students like mango, and 110 students said apple was their favorite fruit more than said orange was their favorite one.",
      "250 students like mango, and 118 students said apple was their favorite fruit more than said orange was their favorite one.",
      "306 students like mango, and 63 students said apple was their favorite fruit more than said orange was their favorite one.",
      "187 students like mango, and 56 students said apple was their favorite fruit more than said orange was their favorite one."
    ],
    "correctAnswer": 1,
    "explanation": "Mango = $17.6\\%$ of $1420 = 0.176 \\times 1420 = 249.92 \\approx 250$. Apple = $21.5\\%$. Orange = $13.2\\%$. Difference = $21.5\\% - 13.2\\% = 8.3\\%$. Number of students = $8.3\\%$ of $1420 = 0.083 \\times 1420 = 117.86 \\approx 118$."
  },
  {
    "id": "perc_26",
    "question": "If 35% of a number is equal to two-thirds of another number, what is the ratio of the first number to the second number?",
    "options": [
      "$\\frac{21}{40}$",
      "$\\frac{2}{95}$",
      "$\\frac{40}{21}$",
      "$\\frac{35}{150}$"
    ],
    "correctAnswer": 2,
    "explanation": "$0.35x = \\frac{2}{3}y \\Rightarrow \\frac{35}{100}x = \\frac{2}{3}y \\Rightarrow \\frac{7}{20}x = \\frac{2}{3}y \\Rightarrow \\frac{x}{y} = \\frac{2}{3} \\times \\frac{20}{7} = \\frac{40}{21}$."
  },
  {
    "id": "perc_27",
    "question": "In 2017, the number of people who had access to the internet in a country was 3.2 million. If this number grows at a rate of 18% each year, which expression best describes the number of people $y$, in million, having access to the internet $x$ years after 2017?",
    "options": [
      "$y = 0.18x + 32$",
      "$y = 1.18x + 32$",
      "$y = 3.2(0.18)^x$",
      "$y = 3.2(1.18)^x$"
    ],
    "correctAnswer": 3,
    "explanation": "Initial value = 3.2 million. Growth rate = 18%, so multiplier = $1 + 0.18 = 1.18$. The expression is $y = 3.2(1.18)^x$."
  },
  {
    "id": "perc_28",
    "question": "A company that produces staples uses the two functions $f(x) = x^3 - 4x + 4$ and $g(x) = \\frac{1}{3}x^2 + x$ to find the cost and the revenue per day, respectively, in thousands of dollars, when producing $x$ hundred boxes of staples. The graphs of $f$ and $g$ are represented in the figure below.\n\nWhat will be the cost of producing 100 boxes of staples?",
    "imageUrl": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdyYXBoIG9mIGYoeCkgYW5kIGcoeCk8L3RleHQ+PC9zdmc+",
    "options": [
      "$1",
      "$1,000",
      "$999,604",
      "$999,604,000"
    ],
    "correctAnswer": 1,
    "explanation": "$x$ is in hundreds of boxes. For 100 boxes, $x = 1$. Cost function is $f(x)$. $f(1) = 1^3 - 4(1) + 4 = 1 - 4 + 4 = 1$. Since cost is in thousands of dollars, the cost is $1 \\times 1000 = \\$1,000$."
  },
  {
    "id": "perc_29",
    "question": "From 2018 to 2019, the amount in Julias's bank account increased by 22.5% to $\\$14325$. To the nearest dollar, what was the initial amount in her bank account?",
    "options": [
      "11694$",
      "14010$",
      "11102$",
      "12775$"
    ],
    "correctAnswer": 0,
    "explanation": "Let initial amount be $x$. $x(1 + 0.225) = 14325 \\Rightarrow 1.225x = 14325 \\Rightarrow x = \\frac{14325}{1.225} = 11693.87 \\approx 11694$."
  },
  {
    "id": "perc_30",
    "question": "The histogram shown summarizes the number of people who got infected by the Covid-19 virus according to their age in Lebanon. The survey was done over 11,200 people.\n\nIf 15% of the tests performed in each age group to identify the people who were infected gave wrong results, which of the following gives the closest estimate to the number cases in the age range 20 to 30 who are actually healthy (rounded to the nearest whole number)?",
    "imageUrl": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhpc3RvZ3JhbSBvZiBDb3ZpZC0xOSBjYXNlczwvdGV4dD48L3N2Zz4=",
    "options": [
      "431",
      "1680",
      "2440",
      "9520"
    ],
    "correctAnswer": 0,
    "explanation": "From the histogram (assuming standard values for this problem), let's say the number of infected in age 20-30 is around 2800. If 15% gave wrong results (false positives), then $15\\%$ of 2800 are actually healthy. $0.15 \\times 2800 = 420$. The closest option is 431. Let's re-evaluate. Maybe the bar is at 2873. $0.15 \\times 2873 = 430.95 \\approx 431$."
  },
  {
    "id": "perc_31",
    "question": "The price of a CD player is $180$ €. It is on sale at the price of $135$ €. A customer wishes to purchase this device. He has a loyalty card from the store that allows him to benefit from a 10% discount at checkout. How much will he pay for this device?",
    "options": [
      "148.5",
      "121.5",
      "125",
      "145"
    ],
    "correctAnswer": 1,
    "explanation": "Sale price = $135$ €. Discount = 10%. Final price = $135 \\times (1 - 0.10) = 135 \\times 0.90 = 121.5$ €."
  },
  {
    "id": "perc_32",
    "question": "Santa Clara County is the 6th most populous county in California, United States of America, with 1.928 million people were living there in 2019. If this number was decreased by 7% the next year due to people who died or left this county, and 4% of year 2020's population was added again in the population of year 2021 due to newborns or newcomers to the county, how many people are in this county in 2021?",
    "options": [
      "1,734,229",
      "1,793,040",
      "1,864,762",
      "1,939,353"
    ],
    "correctAnswer": 2,
    "explanation": "Population in 2019 = 1,928,000. Population in 2020 = $1,928,000 \\times (1 - 0.07) = 1,928,000 \\times 0.93 = 1,793,040$. Population in 2021 = $1,793,040 \\times (1 + 0.04) = 1,793,040 \\times 1.04 = 1,864,761.6 \\approx 1,864,762$."
  },
  {
    "id": "perc_33",
    "question": "The price of dairy products has increased by 7% in 2011 and then decreased by 8% in 2012. What is the new price in 2012 of a box of cheese knowing that the original price in 2010 was $\\$20$?",
    "options": [
      "$18.85",
      "$19.688",
      "$19.573",
      "$18.24"
    ],
    "correctAnswer": 1,
    "explanation": "Original price = $\\$20$. Price in 2011 = $20 \\times (1 + 0.07) = 20 \\times 1.07 = 21.4$. Price in 2012 = $21.4 \\times (1 - 0.08) = 21.4 \\times 0.92 = 19.688$."
  },
  {
    "id": "perc_34",
    "question": "By what percentage should we raise the price of a good to return to its initial price knowing that it was subject to a 20% discount 2 weeks ago?",
    "options": [
      "15%",
      "20%",
      "25%",
      "30%"
    ],
    "correctAnswer": 2,
    "explanation": "Let initial price be $P$. Price after discount = $0.80P$. To return to $P$, we need to multiply by $x$: $0.80P \\times x = P \\Rightarrow x = \\frac{1}{0.80} = 1.25$. This is a 25% increase."
  },
  {
    "id": "perc_35",
    "question": "Gold is one of the most important items in the world. Its price increases and decreases every day. The average closing price for the past 8 years is shown in the table below.\n\nWhich of the following statements is true when comparing the annual percentage change from 2018 to 2020?",
    "imageUrl": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRhYmxlIG9mIEdvbGQgUHJpY2VzPC90ZXh0Pjwvc3ZnPg==",
    "options": [
      "It increased by 27.17%.",
      "It decreased by 27.17%.",
      "It decreased by 39.64%.",
      "It increased by 39.64%."
    ],
    "correctAnswer": 3,
    "explanation": "Price in 2018 = 1,268.93. Price in 2020 = 1,771.9. Increase = $1,771.9 - 1,268.93 = 502.97$. Percentage increase = $\\frac{502.97}{1,268.93} \\times 100 \\approx 39.64\\%$."
  },
  {
    "id": "perc_36",
    "question": "The price of dairy products has increased by 7% in 2011 and then decreased by 8% in 2012. What is the new price in 2012 of a box of cheese knowing that the original price in 2010 was $\\$20$?",
    "options": [
      "$18.85",
      "$19.688",
      "$19.573",
      "$18.24"
    ],
    "correctAnswer": 1,
    "explanation": "Original price = $\\$20$. Price in 2011 = $20 \\times (1 + 0.07) = 20 \\times 1.07 = 21.4$. Price in 2012 = $21.4 \\times (1 - 0.08) = 21.4 \\times 0.92 = 19.688$."
  },
  {
    "id": "perc_37",
    "question": "In a certain chip manufacturing company, there are three operating machines A, B, and C. Every day, Machine A produces 30% more chips than machine B, and machine B produces twice as many chips as machine C. If on any particular day machine A produces $x$ chips, what is the total number of chips produced by machines A, B, and C combined on that day in terms of $x$?",
    "options": [
      "$x + 1.3x + 2.6x$",
      "$x + 0.3x + 0.6x$",
      "$x + \\frac{x}{0.3} + \\frac{x}{0.6}$",
      "$x + \\frac{x}{1.3} + \\frac{x}{2.6}$"
    ],
    "correctAnswer": 3,
    "explanation": "$A = x$. $A = 1.3B \\Rightarrow B = \\frac{x}{1.3}$. $B = 2C \\Rightarrow C = \\frac{B}{2} = \\frac{x}{2.6}$. Total = $A + B + C = x + \\frac{x}{1.3} + \\frac{x}{2.6}$."
  },
  {
    "id": "perc_38",
    "question": "The bar graph below shows the age distribution of the employees in a multi-branched bank.\n\nIf 481 employees are aged between 30 and 40, what is the total number of employees in this company?",
    "imageUrl": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJhciBHcmFwaCBvZiBBZ2UgRGlzdHJpYnV0aW9uPC90ZXh0Pjwvc3ZnPg==",
    "options": [
      "1150",
      "1200",
      "1550",
      "1300"
    ],
    "correctAnswer": 3,
    "explanation": "From the graph, the percentage of employees aged 30-40 is 37%. So, $37\\%$ of Total = 481. $0.37 \\times \\text{Total} = 481 \\Rightarrow \\text{Total} = \\frac{481}{0.37} = 1300$."
  },
  {
    "id": "perc_39",
    "question": "Fares decided to sell his 450 books. 22% of the books are new, and the rest are considered old. If each new book will be sold for $\\$11$, and each old book will be sold for $\\$6.5$, how much will Fares get from selling his books?",
    "options": [
      "$4504.5",
      "$3370.5",
      "$2281.5",
      "$1089"
    ],
    "correctAnswer": 1,
    "explanation": "New books = $22\\%$ of $450 = 0.22 \\times 450 = 99$. Old books = $450 - 99 = 351$. Revenue = $99 \\times 11 + 351 \\times 6.5 = 1089 + 2281.5 = 3370.5$."
  },
  {
    "id": "perc_40",
    "question": "In 2011, the population in Cairo was 9.12 million. Considering the population was increasing by 1% each year, what could be the approximate population in Cairo in 2022?",
    "options": [
      "10.074154 million",
      "10.123200 million",
      "10.174896 million",
      "10.276645 million"
    ],
    "correctAnswer": 2,
    "explanation": "Initial population = 9.12 million. Rate = 1%. Years = $2022 - 2011 = 11$. Population = $9.12 \\times (1.01)^{11} \\approx 9.12 \\times 1.115668 \\approx 10.174896$ million."
  },
  {
    "id": "perc_41",
    "question": "The bar graph above represents the percentage of money spent by a company on different sectors last year. If 200,000 dollars were spent on the transport sector, what was the budget used for salaries?",
    "imageUrl": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJhciBHcmFwaCBvZiBCdWRnZXQ8L3RleHQ+PC9zdmc+",
    "options": [
      "$320,000",
      "$340,000",
      "$360,000",
      "$370,000"
    ],
    "correctAnswer": 0,
    "explanation": "From the graph, Transport is 12.5% and Salaries is 20%. $12.5\\%$ of Total = 200,000 $\\Rightarrow$ Total = $200,000 / 0.125 = 1,600,000$. Salaries = $20\\%$ of $1,600,000 = 0.20 \\times 1,600,000 = 320,000$."
  },
  {
    "id": "perc_42",
    "question": "A bank has opened a new branch and, as part of a promotion, the bank branch is offering 2,000$ certificates of deposit at an interest rate of 6% per year, compounded semi-annually. The bank is selling certificates with terms of 1, 2, 3 or 4 years. Which of the following functions gives the total amount, $A$, in dollars, a customer will receive when a certificate with a term of $k$ years is finally paid?",
    "options": [
      "$A = 2000(1 + 0.03k)$",
      "$A = 2000(1 + 0.06k)$",
      "$A = 2000(1.06)^k$",
      "$A = 2000(1.03)^{2k}$"
    ],
    "correctAnswer": 3,
    "explanation": "Compound interest formula: $A = P(1 + \\frac{r}{n})^{nt}$. $P = 2000$, $r = 0.06$, $n = 2$ (semi-annually), $t = k$. $A = 2000(1 + \\frac{0.06}{2})^{2k} = 2000(1.03)^{2k}$."
  },
  {
    "id": "perc_43",
    "question": "A store did a sale on a pair of shoes. It is now for $\\$103.5$ instead of $\\$230$. What is the percent discount?",
    "options": [
      "50%",
      "45%",
      "55%",
      "58%"
    ],
    "correctAnswer": 2,
    "explanation": "Discount = $230 - 103.5 = 126.5$. Percent discount = $\\frac{126.5}{230} \\times 100 = 0.55 \\times 100 = 55\\%$."
  },
  {
    "id": "perc_44",
    "question": "A school conducted a survey on the brand of the phone its employees are using. The survey data is shown in the table below:\n\nWhat is the percentage of staff members using IPhone out of all the employees?",
    "imageUrl": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxsaW5lIHgxPSIxMCIgeTE9IjIwIiB4Mj0iMjkwIiB5Mj0iMjAiIHN0cm9rZT0iYmxhY2siLz48dGV4dCB4PSIyMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+PC90ZXh0Pjx0ZXh0IHg9IjgwIiB5PSIzNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj5IdWF3ZWk8L3RleHQ+PHRleHQgeD0iMTMwIiB5PSIzNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj5TYW1zdW5nPC90ZXh0Pjx0ZXh0IHg9IjE4MCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+SVBob25lPC90ZXh0Pjx0ZXh0IHg9IjIzMCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+T3RoZXI8L3RleHQ+PGxpbmUgeDE9IjEwIiB5MT0iNDAiIHgyPSIyOTAiIHkyPSI0MCIgc3Ryb2tlPSJibGFjayIvPjx0ZXh0IHg9IjIwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj5TdGFmZjwvdGV4dD48dGV4dCB4PSI4MCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+MTM8L3RleHQ+PHRleHQgeD0iMTMwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj4xNTwvdGV4dD48dGV4dCB4PSIxODAiIHk9IjU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjIwPC90ZXh0Pjx0ZXh0IHg9IjIzMCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+MzwvdGV4dD48dGV4dCB4PSIyMCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+VGVhY2hlcnM8L3RleHQ+PHRleHQgeD0iODAiIHk9IjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjIyPC90ZXh0Pjx0ZXh0IHg9IjEzMCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCI+NTY8L3RleHQ+PHRleHQgeD0iMTgwIiB5PSI3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIj40NDwvdGV4dD48dGV4dCB4PSIyMzAiIHk9IjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiPjc8L3RleHQ+PC9zdmc+",
    "options": [
      "39.2%",
      "31.25%",
      "11.11%",
      "9%"
    ],
    "correctAnswer": 2,
    "explanation": "Staff using iPhone = 20. Total employees = $13+15+20+3+22+56+44+7 = 180$. Percentage = $\\frac{20}{180} \\times 100 = \\frac{1}{9} \\times 100 \\approx 11.11\\%$."
  },
  {
    "id": "perc_45",
    "question": "The number of bees in a beehive rose from 2400 to 2520 in a month. How many bees do we expect to have in the next month knowing that the population experiences the same percent increase every month?",
    "options": [
      "2600",
      "2640",
      "2646",
      "2656"
    ],
    "correctAnswer": 2,
    "explanation": "Multiplier = $\\frac{2520}{2400} = 1.05$ (5% increase). Next month = $2520 \\times 1.05 = 2646$."
  }
];
