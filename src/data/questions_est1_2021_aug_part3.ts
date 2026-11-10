import { Question } from '../../types';

export const EST1_2021_AUG_PART3: Question[] = [
  {
    "id": "est1_2021_aug_q41",
    "examId": "EST12021Aug",
    "question": "A container is filled with 200 balls, 80 of them are yellow. After removing $x$ yellow balls, 75% of the remaining balls in the container are not yellow.\
\
Which of the following is the value of $x$?",
    "options": [
      "20",
      "30",
      "40",
      "50"
    ],
    "correctAnswer": 2,
    "explanation": "Total balls = 200, yellow = 80, not yellow = 120.\
After removing $x$ yellow balls, remaining total = $200 - x$.\
The number of not yellow balls remains 120.\
Since 75% of the remaining balls are not yellow:\
$120 = 0.75(200 - x)\
$120 = 150 - 0.75x \\implies 0.75x = 30 \\implies x = 40$."
  },
  {
    "id": "est1_2021_aug_q42",
    "examId": "EST12021Aug",
    "question": "In 2007, a watch manufacturer found that 2 out of every 30 watches produced are defected.\
\
If the manufacturer produces 2 million watches in a year, which of the following is closest to the estimated number of non-defected watches?",
    "options": [
      "1,866,000",
      "1,867,000",
      "133,000",
      "134,000"
    ],
    "correctAnswer": 1,
    "explanation": "Defect rate = 2/30 = 1/15. Non-defect rate = 14/15.\
Number of non-defected watches = $(14/15) \\times 2,000,000 = 1,866,666.67$.\
The closest estimate is 1,867,000."
  },
  {
    "id": "est1_2021_aug_q43",
    "examId": "EST12021Aug",
    "question": "The graph above shows the test grades over 20 of 40 students.\
\
Based on the bar graph above, what is the average grade on the test?",
    "svg": "<svg viewBox=\"0 0 340 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <text x=\"170\" y=\"22\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\" text-anchor=\"middle\">Test Score for a class of 40 students</text>\n  <line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"190\" stroke=\"#374151\" stroke-width=\"1.5\"/>\n  <text x=\"20\" y=\"115\" font-size=\"13\" font-weight=\"600\" fill=\"#1f2937\" transform=\"rotate(-90 20 115)\" text-anchor=\"middle\">Grades</text>\n  <line x1=\"50\" y1=\"50\" x2=\"310\" y2=\"50\" stroke=\"#9ca3af\" stroke-dasharray=\"4,4\"/>\n  <text x=\"42\" y=\"54\" font-size=\"12\" fill=\"#374151\" text-anchor=\"end\">20</text>\n  <line x1=\"50\" y1=\"78\" x2=\"310\" y2=\"78\" stroke=\"#9ca3af\" stroke-dasharray=\"4,4\"/>\n  <text x=\"42\" y=\"82\" font-size=\"12\" fill=\"#374151\" text-anchor=\"end\">16</text>\n  <line x1=\"50\" y1=\"92\" x2=\"310\" y2=\"92\" stroke=\"#9ca3af\" stroke-dasharray=\"4,4\"/>\n  <text x=\"42\" y=\"96\" font-size=\"12\" fill=\"#374151\" text-anchor=\"end\">14</text>\n  <line x1=\"50\" y1=\"134\" x2=\"310\" y2=\"134\" stroke=\"#9ca3af\" stroke-dasharray=\"4,4\"/>\n  <text x=\"42\" y=\"138\" font-size=\"12\" fill=\"#374151\" text-anchor=\"end\">8</text>\n  <line x1=\"50\" y1=\"148\" x2=\"310\" y2=\"148\" stroke=\"#9ca3af\" stroke-dasharray=\"4,4\"/>\n  <text x=\"42\" y=\"152\" fill=\"#374151\" text-anchor=\"end\">6</text>\n  <line x1=\"50\" y1=\"190\" x2=\"310\" y2=\"190\" stroke=\"#374151\" stroke-width=\"1.5\"/>\n  <text x=\"180\" y=\"230\" font-size=\"13\" font-weight=\"600\" fill=\"#1f2937\" text-anchor=\"middle\">Number of students</text>\n  <rect x=\"70\" y=\"148\" width=\"32\" height=\"42\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" rx=\"2\"/>\n  <text x=\"86\" y=\"206\" font-size=\"13\" font-weight=\"600\" fill=\"#1f2937\" text-anchor=\"middle\">4</text>\n  <rect x=\"120\" y=\"92\" width=\"32\" height=\"98\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" rx=\"2\"/>\n  <text x=\"136\" y=\"206\" font-size=\"13\" font-weight=\"600\" fill=\"#1f2937\" text-anchor=\"middle\">8</text>\n  <rect x=\"170\" y=\"50\" width=\"32\" height=\"140\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" rx=\"2\"/>\n  <text x=\"186\" y=\"206\" font-size=\"13\" font-weight=\"600\" fill=\"#1f2937\" text-anchor=\"middle\">12</text>\n  <rect x=\"220\" y=\"78\" width=\"32\" height=\"112\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" rx=\"2\"/>\n  <text x=\"236\" y=\"206\" font-size=\"13\" font-weight=\"600\" fill=\"#1f2937\" text-anchor=\"middle\">10</text>\n  <rect x=\"270\" y=\"134\" width=\"32\" height=\"56\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" rx=\"2\"/>\n  <text x=\"286\" y=\"206\" font-size=\"13\" font-weight=\"600\" fill=\"#1f2937\" text-anchor=\"middle\">6</text>\n</svg>",
    "options": [
      "10",
      "11.6",
      "12.8",
      "14.6"
    ],
    "correctAnswer": 3,
    "explanation": "Since the x-axis sum is 40 (4+8+12+10+6) and matches the total number of students, the x-axis represents the number of students. The y-axis represents the grades (4, 8, 12, 16, 20).\
Sum of all grades = $(4 \\times 8) + (8 \\times 14) + (12 \\times 20) + (10 \\times 16) + (6 \\times 6) = 32 + 112 + 240 + 160 + 36 = 580$.\
Average = $580 / 40 = 14.5$.\
The closest given option is 14.6."
  },
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
    "explanation": "$|4 - x| - 2 < 0 \\implies |4 - x| < 2$\
$-2 < 4 - x < 2 \\implies -6 < -x < -2 \\implies 2 < x < 6$\
The value 3 is the only option that lies in this interval."
  },
  {
    "id": "est1_2021_aug_q45",
    "examId": "EST12021Aug",
    "question": "The table above shows the distribution of age and sports activity for 540 employees of a company.\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\"></th>\n      <th class=\"border border-gray-400 px-2 py-1\">Practice any kind of sports</th>\n      <th class=\"border border-gray-400 px-2 py-1\">No sports activity</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Total</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"border border-gray-400 px-2 py-1 font-semibold\">Under 40</td>\n      <td class=\"border border-gray-400 px-2 py-1\">220</td>\n      <td class=\"border border-gray-400 px-2 py-1\">40</td>\n      <td class=\"border border-gray-400 px-2 py-1 font-semibold\">260</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-2 py-1 font-semibold\">40 and older</td>\n      <td class=\"border border-gray-400 px-2 py-1\">100</td>\n      <td class=\"border border-gray-400 px-2 py-1\">180</td>\n      <td class=\"border border-gray-400 px-2 py-1 font-semibold\">280</td>\n    </tr>\n    <tr>\n      <td class=\"border border-gray-400 px-2 py-1 font-semibold\">Total</td>\n      <td class=\"border border-gray-400 px-2 py-1 font-semibold\">320</td>\n      <td class=\"border border-gray-400 px-2 py-1 font-semibold\">220</td>\n      <td class=\"border border-gray-400 px-2 py-1 font-semibold\">540</td>\n    </tr>\n  </tbody>\n</table>\n\nIf an employee aged under 40 is selected at random, what is the probability that he practices any kind of sports?",
    "options": [
      "\\frac{2}{13}",
      "\\frac{27}{11}",
      "\\frac{16}{11}",
      "\\frac{11}{13}"
    ],
    "correctAnswer": 3,
    "explanation": "Out of 260 employees under 40, 220 practice sports. The probability is $220 / 260 = 11 / 13$."
  },
  {
    "id": "est1_2021_aug_q46",
    "examId": "EST12021Aug",
    "question": "Ryan estimates that there are $x$ people in a concert.\
\
Bella, who knows the actual number of people who attended the concert, $y$, notes that Ryan's estimate is within 50 people of the actual number of people.\
\
Which of the following inequalities represent the relationship between $x$ and $y$?",
    "options": [
      "$|x - y| \\le 50$",
      "$x \\le y + 50$",
      "$x \\ge y - 50$",
      "$x + y \\le 50$"
    ],
    "correctAnswer": 0,
    "explanation": "The phrase 'within 50 people' means the absolute difference between the estimate $x$ and actual $y$ is at most 50: $|x - y| \\le 50$."
  },
  {
    "id": "est1_2021_aug_q47",
    "examId": "EST12021Aug",
    "question": "**Questions 27-28 refer to the following information.**\
\
$f' = \\left( \\frac{v + v_0}{v} \\right) f$\
\
You are riding in a car at a velocity $v_0$, in meters per second, towards a loud block party. Because of this movement, the actual frequency of the sound waves emitted by the speakers, $f$, in hertz, is perceived by you to be a different frequency $f'$, in hertz.\
\
The speaker's sound waves travel at a velocity $v$, in meters per second. This phenomenon is called the Doppler effect. The formula above shows the relationship between these variables.\
\
---\
Which of the following expresses the velocity of the car $v_0$ in terms of the other variables?",
    "options": [
      "$v_0 = \\frac{f' - f}{vf}$",
      "$v_0 = \\frac{f - f'}{f'} v$",
      "$v_0 = \\frac{f}{f'} v$",
      "$v_0 = \\frac{f' - f}{f} v$"
    ],
    "correctAnswer": 3,
    "explanation": "Solving for $v_0$:\
$f'/f = (v + v_0)/v = 1 + v_0/v$\
$f'/f - 1 = v_0/v \\implies (f' - f)/f = v_0/v \\implies v_0 = (f' - f)/f \\times v$."
  },
  {
    "id": "est1_2021_aug_q48",
    "examId": "EST12021Aug",
    "question": "**Questions 27-28 refer to the following information.**\
\
$f' = \\left( \\frac{v + v_0}{v} \\right) f$\
\
You are riding in a car at a velocity $v_0$, in meters per second, towards a loud block party. Because of this movement, the actual frequency of the sound waves emitted by the speakers, $f$, in hertz, is perceived by you to be a different frequency $f'$, in hertz.\
\
The speaker's sound waves travel at a velocity $v$, in meters per second. This phenomenon is called the Doppler effect. The formula above shows the relationship between these variables.\
\
---\
If the velocity of the car is $22 \\text{ m/s}$, the velocity of the sound waves of the speaker is $340 \\text{ m/s}$ and you perceive the frequency of the speaker's sound waves to be $500 \\text{ Hz}$.\
\
Which of the following is the closest to the actual frequency of the speaker's sound waves?",
    "options": [
      "469",
      "532",
      "470",
      "533"
    ],
    "correctAnswer": 2,
    "explanation": "Substitute the values: $500 = \\left( \\frac{340 + 22}{340} \\right) f \\implies 500 = \\frac{362}{340} f$\
$f = 500 \\times \\frac{340}{362} \\approx 469.61$\
This is closest to 470."
  },
  {
    "id": "est1_2021_aug_q49",
    "examId": "EST12021Aug",
    "question": "The table below summarizes students' work placement after graduation, based on the major.\
\
Given a person who works outside his field of study, which of the following is closest to the probability that he majored in business?",
    "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iMjAwIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyI+CiAgPHN0eWxlPgogICAgLmJvcmRlcnMgbGluZSB7IHN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsgfQogICAgdGV4dCB7IGZvbnQtc2l6ZTogMTRweDsgdGV4dC1hbmNob3I6IG1pZGRsZTsgZG9taW5hbnQtYmFzZWxpbmU6IG1pZGRsZTsgfQogICAgLmhlYWRlciB7IGZvbnQtd2VpZ2h0OiBib2xkOyB9CiAgPC9zdHlsZT4KICA8ZyBjbGFzcz0iYm9yZGVycyI+CiAgICA8IS0tIEhvcml6b250YWwgbGluZXMgLS0+CiAgICA8bGluZSB4MT0iMTAiIHkxPSIxMCIgeDI9IjU5MCIgeTI9IjEwIiAvPgogICAgPGxpbmUgeDE9IjEwIiB5MT0iODAiIHgyPSI1OTAiIHkyPSI4MCIgLz4KICAgIDxsaW5lIHgxPSIxMCIgeTE9IjExMCIgeDI9IjU5MCIgeTI9IjExMCIgLz4KICAgIDxsaW5lIHgxPSIxMCIgeTE9IjE0MCIgeDI9IjU5MCIgeTI9IjE0MCIgLz4KICAgIDxsaW5lIHgxPSIxMCIgeTE9IjE3MCIgeDI9IjU5MCIgeTI9IjE3MCIgLz4KICAgIDxsaW5lIHgxPSIxMCIgeTE9IjIwMCIgeDI9IjU5MCIgeTI9IjIwMCIgLz4KICAgIDwhLS0gVmVydGljYWwgbGluZXMgLS0+CiAgICA8bGluZSB4MT0iMTAiIHkxPSIxMCIgeDI9IjEwIiB5Mj0iMjAwIiAvPgogICAgPGxpbmUgeDE9IjEyMCIgeTE9IjEwIiB4Mj0iMTIwIiB5Mj0iMjAwIiAvPgogICAgPGxpbmUgeDE9IjI2MCIgeTE9IjEwIiB4Mj0iMjYwIiB5Mj0iMjAwIiAvPgogICAgPGxpbmUgeDE9IjQwMCIgeTE9IjEwIiB4Mj0iNDAwIiB5Mj0iMjAwIiAvPgogICAgPGxpbmUgeDE9IjQ5MCIgeTE9IjEwIiB4Mj0iNDkwIiB5Mj0iMjAwIiAvPgogICAgPGxpbmUgeDE9IjU5MCIgeTE9IjEwIiB4Mj0iNTkwIiB5Mj0iMjAwIiAvPgogIDwvZz4KICA8dGV4dCB4PSI2NSIgeT0iNDUiPjwvdGV4dD4KICA8dGV4dCB4PSIxOTAiIHk9IjMwIj5Xb3JrPC90ZXh0PgogIDx0ZXh0IHg9IjE5MCIgeT0iNDUiPmluIHRoZWlyPC90ZXh0PgogIDx0ZXh0IHg9IjE5MCIgeT0iNjAiPmZpZWxkPC90ZXh0PgogIDx0ZXh0IHg9IjMzMCIgeT0iMzAiPldvcms8L3RleHQ+CiAgPHRleHQgeD0iMzMwIiB5PSI0NSI+aW48L3RleHQ+CiAgPHRleHQgeD0iMzMwIiB5PSI2MCI+YW5vdGhlciBmaWVsZDwvdGV4dD4KICA8dGV4dCB4PSI0NDUiIHk9IjM1Ij5Eb24ndDwvdGV4dD4KICA8dGV4dCB4PSI0NDUiIHk9IjU1Ij53b3JrPC90ZXh0PgogIDx0ZXh0IHg9IjU0MCIgeT0iNDUiPlRvdGFsPC90ZXh0PgogIDwhLS0gQ29udGVudCAtLT4KICA8dGV4dCB4PSI2NSIgeT0iOTUiPkVuZ2luZWVyaW5nPC90ZXh0PgogIDx0ZXh0IHg9IjE5MCIgeT0iOTUiPjE3LDA2NTwvdGV4dD48dGV4dCB4PSIzMzAiIHk9Ijk1Ij4xMCw1OTM8L3RleHQ+PHRleHQgeD0iNDQ1IiB5PSI5NSI+Myw4Njc8L3RleHQ+PHRleHQgeD0iNTQwIiB5PSI5NSI+MzEsNTI1PC90ZXh0PgogIDx0ZXh0IHg9IjY1IiB5PSIxMjUiPkJ1c2luZXNzPC90ZXh0PgogIDx0ZXh0IHg9IjE5MCIgeT0iMTI1Ij4xOCw1NDc8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIxMjUiPjExLDc1MzwvdGV4dD48dGV4dCB4PSI0NDUiIHk9IjEyNSI+MywyNDM8L3RleHQ+PHRleHQgeD0iNTQwIiB5PSIxMjUiPjMzLDU0MzwvdGV4dD4KICA8dGV4dCB4PSI2NSIgeT0iMTU1Ij5MYXc8L3RleHQ+CiAgPHRleHQgeD0iMTkwIiB5PSIxNTUiPjIwLDM3MjwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjE1NSI+MSw0Mzg8L3RleHQ+PHRleHQgeD0iNDQ1IiB5PSIxNTUiPjU0MjwvdGV4dD48dGV4dCB4PSI1NDAiIHk9IjE1NSI+MjIsMzUyPC90ZXh0PgogIDx0ZXh0IHg9IjY1IiB5PSIxODUiPlRvdGFsPC90ZXh0PgogIDx0ZXh0IHg9IjE5MCIgeT0iMTg1Ij41NSw5ODQ8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIxODUiPjIzLDc4NDwvdGV4dD48dGV4dCB4PSI0NDUiIHk9IjE4NSI+Nyw2NTI8L3RleHQ+PHRleHQgeD0iNTQwIiB5PSIxODUiPjg3LDQyMDwvdGV4dD4KPC9zdmc+",
    "options": [
      "0.35",
      "0.06",
      "0.5",
      "0.13"
    ],
    "correctAnswer": 2,
    "explanation": "Working outside their field corresponds to 'Work in another field'. Total people in this category = 23,784.\
Number of them who majored in Business = 11,753.\
Probability = 11753 / 23784 \\approx 0.494$, which is closest to 0.5."
  },
  {
    "id": "est1_2021_aug_q50",
    "examId": "EST12021Aug",
    "question": "$x^2 + y^2 - 6x - 4y + 9 = 0$\
\
The equation above is an equation of a circle. Which of the lines represented by the equations below is tangent to this circle?",
    "options": [
      "$y = \\frac{1}{3} x - \\frac{1}{3}$",
      "$y = x$",
      "$y = 3$",
      "$x = 5$"
    ],
    "correctAnswer": 3,
    "explanation": "Complete the square to find center and radius:\
$(x^2 - 6x + 9) + (y^2 - 4y + 4) = 4 \\implies (x - 3)^2 + (y - 2)^2 = 4$\
The circle has center $(3, 2)$ and radius $r = 2$.\
The distance from center $(3,2)$ to the vertical line $x = 5$ is $|5 - 3| = 2$, which equals the radius, making it tangent."
  }
];
