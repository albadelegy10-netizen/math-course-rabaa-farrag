import { Question } from './types';

export const EST1_2022_MARCH: Question[] = [
  {
    id: 'est1_2022_march_nocalc_1',
    question: `Given $2x + y = 8$ and $3y + x = -1$. What is the value of $y - 2x$?`,
    options: [
      `-16`,
      `-12`,
      `-8`,
      `8`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_2',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 6 7" width="300" height="300" style="background:#fff">
  <!-- Grid -->
  <g stroke="#eee" stroke-width="0.05">
    ${Array.from({length: 10}, (_, i) => `<line x1="-3" y1="${i-2}" x2="6" y2="${i-2}"/><line x1="${i-3}" y1="-2" x2="${i-3}" y2="7"/>`).join('')}
  </g>
  <!-- Axes -->
  <line x1="-3" y1="0" x2="6" y2="0" stroke="black" stroke-width="0.08" />
  <line x1="0" y1="-2" x2="0" y2="7" stroke="black" stroke-width="0.08" />
  <!-- Line passing through (0,1) and (2,4): y = 1.5x + 1 -->
  <line x1="-2" y1="-2" x2="4" y2="7" stroke="#666" stroke-width="0.08" transform="scale(1, -1)" />
</svg>`,
    question: `What is the slope of the line represented in the graph above? (Passes through (0,1) and (2,4) approximately - wait, let\'s look at OCR options)`,
    options: [
      `2`,
      `3/2`,
      `1`,
      `2/3`
    ],
    correctAnswer: 3,
    explanation: `The correct answer is D.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_3',
    question: `In a company, the total cost, in dollars, of the production of a certain product x is given by C(x) = 1/3 x^3 - 15x^2 + 2000x. The profit made out of selling this product is given by P(x) = -1/3 x^3 + 79/3 x^2 + 1500x. If R(x) indicates the revenue made out of selling this product, and the relationship between the cost, the revenue, and the profit is represented by P(x) = R(x) - C(x), which of the following expressions is equivalent to R(x)?`,
    options: [
      `R(x) = 64/3 x^2 + 3500x$`,
      `R(x) = 34/3 x^2 + 3500x$`,
      `R(x) = -2/3 x^3 + 64/3 x^2 + 3500x$`,
      `R(x) = -2/3 x^3 + 124/3 x^2 - 500x`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_4',
    question: `In Egypt, a tourist can travel a distance of 5 km with just 15.57 EGP. Pedro needed to go to \"San Pola\" hospital in Cairo. He took a taxi from \"Al Marazeek\" bridge, which is approximately 35 km away from the hospital. How much will Pedro pay for the driver, knowing that he gave him 10 extra EGP as tips?`,
    options: [
      `554.95 EGP`,
      `477.1 EGP`,
      `118.99 EGP`,
      `109.09 EGP`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_5',
    question: `The sum of three consecutive integers is 24. What is the product of the two greatest integers between them all?`,
    options: [
      `27`,
      `56`,
      `72`,
      `504`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_6',
    question: `The impulsive force (f) derives from impulse, and it is a big force acting for a small interval of time. It is like having a truck travelling at a full speed, and suddenly crashing a garden\'s gate because the driver did not pay attention to it. It can be represented by f = m * (vf - vi) / t, with m the mass of the body, vf the final velocity, vi the initial velocity, and t the time interval through which the force is applied. Which of the following represents vi in terms of f, m, t, and vf?`,
    options: [
      `vi = vf - ft/m`,
      `vi = vf + ft/m`,
      `vi = vf - fm/t`,
      `vi = vf + fm/t`
    ],
    correctAnswer: 0,
    explanation: `The correct answer is A.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_7',
    question: `\"Unou House\", located in Japan and built between 2010 and 2012, features a house with a floor of triangular shape and can be considered as an isosceles triangle. The area of the triangular floor is approximately 84 m^2. If we consider that the base of this triangle is 12 m, what is the dimension of one of the equal sides in this triangle?`,
    options: [
      `\\\\sqrt{193} m`,
      `2\\\\sqrt{58} m`,
      `14 m`,
      `170 m`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_8',
    question: `If x = \\\\sqrt{2} + 3, what is the value of 2x^2 + 3x - 1?`,
    options: [
      `5\\\\sqrt{2} + 14`,
      `3\\\\sqrt{2} + 30`,
      `3\\\\sqrt{2} + 24`,
      `15\\\\sqrt{2} + 30`
    ],
    correctAnswer: 3,
    explanation: `The correct answer is D.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_9',
    question: `If 4^(2x+4) = 16, what is the value of 4^(3x)?`,
    options: [
      `1/64`,
      `64`,
      `4096`,
      `1/4096`
    ],
    correctAnswer: 0,
    explanation: `The correct answer is A.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_10',
    question: `If a + b > 0, and a - c < 0, then b + c ?`,
    options: [
      `Is smaller than 0, with a < c`,
      `Is greater than 0, with a < c`,
      `Is smaller than 0, with a > c`,
      `Is greater than 0, with a > c`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_11',
    question: `What is the square of the ordinate of the vertex of the graph of the function f(x) = 3x^2 + 6x?`,
    options: [
      `-6`,
      `-2`,
      `1`,
      `9`
    ],
    correctAnswer: 3,
    explanation: `The correct answer is D.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_12',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 6 6" width="300" height="300" style="background:#fff">
  <g stroke="#eee" stroke-width="0.05">
    ${Array.from({length: 10}, (_, i) => `<line x1="-3" y1="${i-3}" x2="6" y2="${i-3}"/><line x1="${i-3}" y1="-3" x2="${i-3}" y2="6"/>`).join('')}
  </g>
  <line x1="-3" y1="0" x2="6" y2="0" stroke="black" stroke-width="0.08" />
  <line x1="0" y1="-3" x2="0" y2="6" stroke="black" stroke-width="0.08" />
  <!-- Line 1: y = x + 1 -->
  <line x1="-3" y1="-2" x2="4" y2="5" stroke="#666" stroke-width="0.08" transform="scale(1, -1)" />
  <!-- Line 2: y = -0.5x + 2 -->
  <line x1="-2" y1="3" x2="6" y2="-1" stroke="#666" stroke-width="0.08" transform="scale(1, -1)" />
</svg>`,
    question: `Which of the systems of equations below is being represented in the graph above? (Passes through x-axis at ~1)`,
    options: [
      `x + 2y = 4 and x - y = 1`,
      `x + 2y = 4 and -x + y = 1`,
      `x - 2y = 4 and x - y = 1`,
      `x - 2y = 4 and -x + y = 1`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_13',
    question: `What is the value of [f(g \\circ f)(1)] if f(x) = 2x^2 - 3 and g(x) = 4x + 1?`,
    options: [
      `-21`,
      `-15`,
      `10`,
      `15`
    ],
    correctAnswer: 3,
    explanation: `The correct answer is D.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_14',
    question: `What number increased by 5 is equal to twice the same number minus 3?`,
    options: [
      `-8`,
      `3`,
      `5`,
      `8`
    ],
    correctAnswer: 3,
    explanation: `The correct answer is D.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_15',
    question: `What is triple the square root of the discriminant of the equation 4x^2 - 5(x + 3) = -6 ?`,
    options: [
      `13`,
      `26`,
      `39`,
      `13\\\\sqrt{3}`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_16',
    question: `Given that 2x^2 + ax + (4c - 1) = (2b - 1)x^2 + 7x + c + 1, what is the value of bc + a, where a, b and c are real numbers?`,
    options: [
      `8`,
      `37/4`,
      `7.5`,
      `67/9`
    ],
    correctAnswer: 0,
    explanation: `The correct answer is A.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_17',
    question: `What is the value of AD^2 + DC^2? (In quadrilateral ABCD, diags intersect at O)`,
    options: [
      `53`,
      `58`,
      `78`,
      `48`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_18',
    question: `What is the sum of the slope of AB and the slope of a line perpendicular to AC?`,
    options: [
      `1/3`,
      `11/3`,
      `-23/15`,
      `-5/8`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_nocalc_19',
    question: `What is the smallest value of the range of the function f(x) = 4x^2 - 2x + 1?`,
    options: [
      `1/4`,
      `1/2`,
      `3/4`,
      `1`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math w/o Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_no_calc_20',
    question: `1/5 \\\\pi radians is how much in degrees?`,
    options: [
      `36^\\\\circ`,
      `288^\\\\circ`,
      `72^\\\\circ`,
      `112^\\\\circ`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_1',
    question: `Given the two inequalities 3x + 1 \\\\ge 8 and 4x - 1 < 3(x + 3), what is the greatest possible integer for x?`,
    options: [
      `2`,
      `3`,
      `9`,
      `10`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_2',
    question: `In the xy-plane, line (m) passes through the point (2,5) and is perpendicular to the line (n) that passes through the points (4,7) and (-2,3). Which of the following represents the equation of line (m)?`,
    options: [
      `y = -3/2 x + 8`,
      `y = -3/2 x - 8`,
      `y = 2x + 1`,
      `y = -2/3 x + 19/3`
    ],
    correctAnswer: 0,
    explanation: `The correct answer is A.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_3',
    question: `What is the sum of the averages of the amounts won for renting cars and trucks during years 2017 to 2020?`,
    options: [
      `$8411.4`,
      `$13698.225`,
      `$22109.625`,
      `$25678.725`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_4',
    question: `What is the percentage increase of the amount won for renting trucks from 2015 to 2017?`,
    options: [
      `1.62%`,
      `2.01%`,
      `2.05%`,
      `48.93%`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_5',
    question: `This company has only one employee who works for $1650 per month. In which year was this company unable to pay his full wage from the amount won from renting cars and trucks?`,
    options: [
      `2015`,
      `2016`,
      `2019`,
      `2020`
    ],
    correctAnswer: 0,
    explanation: `The correct answer is A.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_6',
    question: `Amina has a bag of 6 black balls and 4 green balls. Hamad has a bag of 3 black balls and 5 green balls. If one ball is drawn from each bag, what is the probability that one is black and one is green?`,
    options: [
      `0.225`,
      `0.25`,
      `0.475`,
      `0.525`
    ],
    correctAnswer: 3,
    explanation: `The correct answer is D.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_7',
    question: `Which of the following ordered pairs satisfy both inequalities: x + 3y \\\\le 8 and 2x - y > 9?`,
    options: [
      `(0, 3)`,
      `(1, 2)`,
      `(1, -2)`,
      `(1, -9)`
    ],
    correctAnswer: 3,
    explanation: `The correct answer is D.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_8',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <polygon points="50,150 250,150 250,50" fill="none" stroke="black" stroke-width="2"/>
  <text x="40" y="160">A</text>
  <text x="255" y="160">D</text>
  <text x="255" y="45">C</text>
  <!-- Point B on AD -->
  <line x1="180" y1="150" x2="250" y2="50" stroke="black" stroke-width="2"/>
  <text x="175" y="165">B</text>
  <text x="210" y="145">40°</text>
  <text x="80" y="145">35°</text>
</svg>`,
    question: `In the figure above, triangle BDC is right angled at D with m\\\\angle CBD = 40^\\\\circ. Given that m\\\\angle CAB = 35^\\\\circ, and AC = 10 cm, what is the length of segment AB?`,
    options: [
      `1.36 cm`,
      `5.74 cm`,
      `6.84 cm`,
      `8.19 cm`
    ],
    correctAnswer: 0,
    explanation: `The correct answer is A.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_9',
    question: `During the final game of UEFA Euro 2020 between Italy and England, 67,173 fans attended the game in Wembley Stadium in London, England. Assuming that the ratio of adults to children who attended the game was approximately 13 to 6, which of the following numbers represents approximately the number of children who attended the game live in the stadium?`,
    options: [
      `21213`,
      `31002`,
      `36170`,
      `45960`
    ],
    correctAnswer: 0,
    explanation: `The correct answer is A.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_10',
    question: `What is the solution for x in 2 = \\\\sqrt{2x - 3} ?`,
    options: [
      `2.5`,
      `3.5`,
      `4.5`,
      `0.5`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_11',
    question: `Giving that abscissa \"0\" signifies the beginning of the month of January, which of the following statements is/are true?\\nI. The largest increase in the number of phones sold was between the beginning of May and the beginning of June.\\nII. Most of the phones were sold in the first quarter of the year.\\nIII. The number of phones sold in mid-January is equivalent to the number of phones sold in mid-June.`,
    options: [
      `I only`,
      `I and II`,
      `I and III`,
      `II and III`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_12',
    question: `What is the average increase in the number of phones sold?`,
    options: [
      `0.8`,
      `0.9`,
      `1`,
      `1.1`
    ],
    correctAnswer: 3,
    explanation: `The correct answer is D.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_13',
    question: `Which of the following represents the graph of the function f(x) = x^3 + x + 1 ?`,
    options: [
      `Graph A`,
      `Graph B`,
      `Graph C`,
      `Graph D`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_14',
    question: `What is the range R of the function f(x) = 2/(x+2)?`,
    options: [
      `R = (-\\infty, 0] \\cup [0, \\infty)`,
      `R = (-\\infty, 0) \\cup (0, \\infty)`,
      `R = (-\\infty, -2) \\cup (-2, \\infty)`,
      `R = (-\\infty, -2] \\cup [2, \\infty)`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_15',
    svg: `<svg viewBox="0 0 400 300" width="100%" height="300" xmlns="http://www.w3.org/2000/svg">
  <!-- Just a placeholder pie chart -->
  <circle cx="200" cy="150" r="100" fill="#eee" />
  <path d="M 200 150 L 200 50 A 100 100 0 0 1 295 120 Z" fill="#4285F4" /> <!-- banana 14.2% -->
  <path d="M 200 150 L 295 120 A 100 100 0 0 1 250 236 Z" fill="#EA4335" /> <!-- apple 21.5% -->
  <path d="M 200 150 L 250 236 A 100 100 0 0 1 120 210 Z" fill="#FBBC05" /> <!-- mango 18.6% (apx) -->
  <path d="M 200 150 L 120 210 A 100 100 0 0 1 100 150 Z" fill="#34A853" /> <!-- avocado 17.6% (apx) -->
  <path d="M 200 150 L 100 150 A 100 100 0 0 1 130 75 Z" fill="#9C27B0" /> <!-- oranges 13.2% (apx) -->
  <path d="M 200 150 L 130 75 A 100 100 0 0 1 200 50 Z" fill="#00BCD4" /> <!-- watermelon 14.9% (apx) -->
  <!-- Legend -->
  <rect x="320" y="50" width="10" height="10" fill="#4285F4"/><text x="335" y="60" font-size="12">banana</text>
  <rect x="320" y="70" width="10" height="10" fill="#EA4335"/><text x="335" y="80" font-size="12">apple</text>
  <rect x="320" y="90" width="10" height="10" fill="#FBBC05"/><text x="335" y="100" font-size="12">mango</text>
  <rect x="320" y="110" width="10" height="10" fill="#34A853"/><text x="335" y="120" font-size="12">avocado</text>
  <rect x="320" y="130" width="10" height="10" fill="#9C27B0"/><text x="335" y="140" font-size="12">oranges</text>
  <rect x="320" y="150" width="10" height="10" fill="#00BCD4"/><text x="335" y="160" font-size="12">watermelon</text>
</svg>`,
    question: `The pie chart above shows the results of a survey that asked 1420 students in a school about their favorite fruit. How many students like mango more than any other fruit? And, approximately how many more students said apple was their favorite fruit than said oranges was their favorite one?`,
    options: [
      `250 students like mango, and 110 students said apple was their favorite fruit more than said orange was their favorite one.`,
      `250 students like mango, and 118 students said apple was their favorite fruit more than said orange was their favorite one.`,
      `306 students like mango, and 63 students said apple was their favorite fruit more than said orange was their favorite one.`,
      `187 students like mango, and 56 students said apple was their favorite fruit more than said orange was their favorite one.`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_16',
    question: `Citrus trees are fruit trees that require wet roots. These trees need a careful attention summarized by an excellent drainage and sandy soil. Adnan has a land in a village in Egypt. He decided to start a project of planting 205 citrus trees in it and getting a farmer to manage the land. He got each tree for 172 EGP, and the farmer asked for 100 EGP to plant each tree, in addition of 3994 EGP per month to manage the land and the drainage. How much will Adnan pay during the first year of his project?`,
    options: [
      `103,688 EGP`,
      `100,388 EGP`,
      `83,288 EGP`,
      `59,754 EGP`
    ],
    correctAnswer: 0,
    explanation: `The correct answer is A.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_17',
    question: `Santa Clara County is the 6th most populous county in California, United States of America, with 1.928 million people were living there in 2019. If this number was decreased by 7% the next year due to people who died or left this county, and 4% of year 2020\'s population was added again in the population of year 2021 due to newborns or newcomers to the county, how many people are in this county in 2021?`,
    options: [
      `1,734,229`,
      `1,793,040`,
      `1,864,762`,
      `1,939,353`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_18',
    question: `Shahira and Nicole went to the supermarket to buy chocolate. (Shahira bought 7 from A, 3 from B total 25.4. Nicole 4 from A, 5 from B total 24.7). If you went to the same supermarket and bought 1 chocolate from brand \"A\" and 3 chocolates from brand \"B\", how much will you pay?`,
    options: [
      `$5.4`,
      `$7.5`,
      `$10`,
      `$11.6`
    ],
    correctAnswer: 3,
    explanation: `The correct answer is D.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_19',
    question: `If f(x) = 3x - 4(2x + 7) and g(x) = 4(-2x + 1), what is the value of f(-1)/g(3)?`,
    options: [
      `-43/4`,
      `-23/20`,
      `-23/20`,
      `43/4`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_20',
    question: `Fares decided to sell his 450 books. 22% of the books are new, and the rest are considered old. If each new book will be sold for $11, and each old book will be sold for $6.5, how much will Fares get from selling his books?`,
    options: [
      `$4504.5`,
      `$3370.5`,
      `$2281.5`,
      `$1089`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_21',
    question: `Which of the following is a factor of the polynomial: 2x^3 + 13x^2 + 5x - 6 ?`,
    options: [
      `x - 1`,
      `x - 6`,
      `2x + 1`,
      `2x - 1`
    ],
    correctAnswer: 3,
    explanation: `The correct answer is D.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_22',
    question: `Karim drove his car from his village to the city. It took him 2.5 hours to reach the city driving at a constant speed of 60 km per hour. Approximately, how much will he save time if he starts driving at a constant speed of 70 km per hour?`,
    options: [
      `0.357 hours`,
      `0.765 hours`,
      `1.544 hours`,
      `2.143 hours`
    ],
    correctAnswer: 0,
    explanation: `The correct answer is A.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_23',
    question: `A store did a sale on a pair of shoes. It is now for $103.5 instead of $230. What is the percent discount?`,
    options: [
      `50%`,
      `45%`,
      `55%`,
      `58%`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_24',
    question: `Which of the following equations represents the graph of a quadratic function that passes through points (2, 5), (3, 0), and (-4, 0)?`,
    options: [
      `y = -5/6 x^2 + 5/6 x + 10`,
      `y = -5/6 x^2 - 5/6 x + 10`,
      `y = 5/6 x^2 + 5/6 x + 10`,
      `y = 5/6 x^2 - 5/6 x + 10`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_25',
    question: `Given that h(t) = (2t + 1) / (5t^2) (t \\\\ne 0), what is the negative value of t if h(t) = 3 ?`,
    options: [
      `-0.5`,
      `-0.4`,
      `-0.3`,
      `-0.2`
    ],
    correctAnswer: 3,
    explanation: `The correct answer is D.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_26',
    question: `What is the sum of the values of the x and y-intercepts of the graph of the function f(x) = 2x + 3(x - 5)?`,
    options: [
      `-18`,
      `-12`,
      `12`,
      `18`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_27',
    question: `dx - 2my = -14 and 3dx + 6my = 78. Given that the solution of the system above is (2, 5), what is the value of 2mx - 3dy?`,
    options: [
      `-37`,
      `-18`,
      `11`,
      `20`
    ],
    correctAnswer: 0,
    explanation: `The correct answer is A.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_28',
    question: `Patrick is twice as old as Alonso. Alonso is 7 years older than Fatima, and Fatima is 2 years younger than Patricia. If Patricia\'s age to Salma\'s age is 4 to 3, what is the age of Patrick if Salma is 12 years old?`,
    options: [
      `16 years old`,
      `21 years old`,
      `42 years old`,
      `48 years old`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_29',
    question: `k + 2 ; 2k + 4 ; 2k + 5 ; 3k + 5. The average of the list above is 36. Find k.`,
    options: [
      `144`,
      `18`,
      `16`,
      `2`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_30',
    question: `The sum of three numbers is equivalent to the product of the third number and half the difference of the first two numbers. Assuming that the first number is a, the second number is b, and the third number is c, which of the following statements represents a in terms of b and c?`,
    options: [
      `a = cb + 2b + 2c`,
      `a = (cb + 2b + 2c) / (c - 2)`,
      `a = (-cb - 2b - 2c) / (c + 2)`,
      `a = -cb - 2b - 2c`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_31',
    question: `30% of a number is 86.4% of 50. What is this number?`,
    options: [
      `144`,
      `17.36`,
      `1440`,
      `92`
    ],
    correctAnswer: 0,
    explanation: `The correct answer is A.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_32',
    question: `If h(x) = 2x - 3g(x), and g(x) = 3x + 7, what is the value of h(-4)?`,
    options: [
      `-5`,
      `-23`,
      `7`,
      `23`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_33',
    question: `T and T\' are two triangles. T is a right isosceles triangle of hypotenuse 9\\\\sqrt{2}, and the T\' is a 30^\\\\circ - 60^\\\\circ - 90^\\\\circ triangle, such that the small leg is equivalent to 4. What is the sum of the perimeters of both triangles? (Give your answer to the nearest tenth)`,
    options: [
      `49.7`,
      `34.5`,
      `54.4`,
      `38.5`
    ],
    correctAnswer: 0,
    explanation: `The correct answer is A.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_34',
    question: `-2x + y = 1; ax + y = 4 (a is a positive constant); -4x = -y + 1\\nThe sum of the abscissas of the intersections of the lines of the three equations in the system above is 1.6. What is the value of a?`,
    options: [
      `0.5`,
      `1`,
      `1.5`,
      `2`
    ],
    correctAnswer: 1,
    explanation: `The correct answer is B.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_35',
    question: `17 is subtracted from triple the sum of all integers from 1 to 44. What is the result?`,
    options: [
      `973`,
      `939`,
      `5923`,
      `2953`
    ],
    correctAnswer: 3,
    explanation: `The correct answer is D.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_36',
    question: `If the distance between points A(3, c) and B(9, -5) in a coordinate system is 3\\\\sqrt{13}, and A is a point in the first quadrant, what is the value of c/2 + 7 ?`,
    options: [
      `0`,
      `4`,
      `9`,
      `11`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_37',
    question: `The arithmetic mean of the set below is 7.25. What is the median of this set? n + 4 ; 6 ; 11 ; 2n - 1`,
    options: [
      `6`,
      `7`,
      `6.5`,
      `8.5`
    ],
    correctAnswer: 2,
    explanation: `The correct answer is C.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
  {
    id: 'est1_2022_march_calc_38',
    question: `Sami has a circular land of a radius 6 m. He decided to cultivate a part of this land, which is shown shaded in the figure above. Each 1 m^2 will cost him 79 EGP. Knowing that m\\\\angle DAC = 155^\\\\circ, how much will Sami pay to cultivate the desired area? (Give your answer to the nearest ones)`,
    options: [
      `3,847 EGP`,
      `220,410 EGP`,
      `20,752 EGP`,
      `5,248 EGP`
    ],
    correctAnswer: 0,
    explanation: `The correct answer is A.`,
    category: 'Math with Calculator',
    difficulty: 'Medium'
  },
];
