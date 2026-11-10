import { Question } from './types';

export const est1_statistics_part1_new_questions: Question[] = [
  {
    id: "est1_stat_part1_1",
    question: `Questions 2-3-4 refer to the following information.

The table below shows the distance Amir walked every day during the first week of April, 2021.

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Day</th>
      <th class="border border-gray-400 px-2 py-1">Distance (in $m$)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">Thursday, April $1^{\\text{st}}$</td><td class="border border-gray-400 px-2 py-1">$1678$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Friday, April $2^{\\text{nd}}$</td><td class="border border-gray-400 px-2 py-1">$2091$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Saturday, April $3^{\\text{rd}}$</td><td class="border border-gray-400 px-2 py-1">$1245$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Sunday, April $4^{\\text{th}}$</td><td class="border border-gray-400 px-2 py-1">$1566$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Monday, April $5^{\\text{th}}$</td><td class="border border-gray-400 px-2 py-1">$2100$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Tuesday, April $6^{\\text{th}}$</td><td class="border border-gray-400 px-2 py-1">$1989$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Wednesday, April $7^{\\text{th}}$</td><td class="border border-gray-400 px-2 py-1">$1888$</td></tr>
  </tbody>
</table>

What is the average (arithmetic mean) of the data shown in the table?`,
    options: [
      `2511.4`,
      `1888`,
      `1793.9`,
      `1672.5`
    ],
    correctAnswer: 2,
    explanation: `The arithmetic mean is the total sum divided by the number of data points ($n = 7$):
$$\\text{Sum} = 1678 + 2091 + 1245 + 1566 + 2100 + 1989 + 1888 = 12557$$
$$\\text{Average} = \\frac{12557}{7} \\approx 1793.857 \\approx 1793.9$$`,
    category: "EST1-statistics part1",
    difficulty: "Easy",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_2",
    question: `The table below summarizes the grades out of $10$ obtained by $4$ players in a competition over a total of $5$ rounds.

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1">Diego</th>
      <th class="border border-gray-400 px-2 py-1">Mark</th>
      <th class="border border-gray-400 px-2 py-1">Tyler</th>
      <th class="border border-gray-400 px-2 py-1">Toni</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Round 1</td><td class="border border-gray-400 px-2 py-1">$7$</td><td class="border border-gray-400 px-2 py-1">$3$</td><td class="border border-gray-400 px-2 py-1">$8$</td><td class="border border-gray-400 px-2 py-1">$10$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Round 2</td><td class="border border-gray-400 px-2 py-1">$5$</td><td class="border border-gray-400 px-2 py-1">$10$</td><td class="border border-gray-400 px-2 py-1">$7$</td><td class="border border-gray-400 px-2 py-1">$4$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Round 3</td><td class="border border-gray-400 px-2 py-1">$8$</td><td class="border border-gray-400 px-2 py-1">$9$</td><td class="border border-gray-400 px-2 py-1">$6$</td><td class="border border-gray-400 px-2 py-1">$9$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Round 4</td><td class="border border-gray-400 px-2 py-1">$9$</td><td class="border border-gray-400 px-2 py-1">$5$</td><td class="border border-gray-400 px-2 py-1">$7$</td><td class="border border-gray-400 px-2 py-1">$10$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Round 5</td><td class="border border-gray-400 px-2 py-1">$4$</td><td class="border border-gray-400 px-2 py-1">$8$</td><td class="border border-gray-400 px-2 py-1">$8$</td><td class="border border-gray-400 px-2 py-1">$7$</td></tr>
    <tr class="bg-gray-50"><td class="border border-gray-400 px-2 py-1 font-bold">Standard deviation</td><td class="border border-gray-400 px-2 py-1 font-bold">$1.85$</td><td class="border border-gray-400 px-2 py-1 font-bold">$2.61$</td><td class="border border-gray-400 px-2 py-1 font-bold">$0.75$</td><td class="border border-gray-400 px-2 py-1 font-bold">$2.28$</td></tr>
  </tbody>
</table>

The winner is the player with the highest average. Who won the competition?`,
    options: [
      `Diego`,
      `Toni`,
      `Tyler`,
      `Mark`
    ],
    correctAnswer: 1,
    explanation: `Calculate the arithmetic mean for each player across the 5 rounds:
- **Diego:** $\\frac{7 + 5 + 8 + 9 + 4}{5} = \\frac{33}{5} = 6.6$
- **Mark:** $\\frac{3 + 10 + 9 + 5 + 8}{5} = \\frac{35}{5} = 7.0$
- **Tyler:** $\\frac{8 + 7 + 6 + 7 + 8}{5} = \\frac{36}{5} = 7.2$
- **Toni:** $\\frac{10 + 4 + 9 + 10 + 7}{5} = \\frac{40}{5} = 8.0$

Toni has the highest average ($8.0$), so Toni won the competition.`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_3",
    question: `Using the same table as the previous question:

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1">Diego</th>
      <th class="border border-gray-400 px-2 py-1">Mark</th>
      <th class="border border-gray-400 px-2 py-1">Tyler</th>
      <th class="border border-gray-400 px-2 py-1">Toni</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Round 1</td><td class="border border-gray-400 px-2 py-1">$7$</td><td class="border border-gray-400 px-2 py-1">$3$</td><td class="border border-gray-400 px-2 py-1">$8$</td><td class="border border-gray-400 px-2 py-1">$10$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Round 2</td><td class="border border-gray-400 px-2 py-1">$5$</td><td class="border border-gray-400 px-2 py-1">$10$</td><td class="border border-gray-400 px-2 py-1">$7$</td><td class="border border-gray-400 px-2 py-1">$4$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Round 3</td><td class="border border-gray-400 px-2 py-1">$8$</td><td class="border border-gray-400 px-2 py-1">$9$</td><td class="border border-gray-400 px-2 py-1">$6$</td><td class="border border-gray-400 px-2 py-1">$9$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Round 4</td><td class="border border-gray-400 px-2 py-1">$9$</td><td class="border border-gray-400 px-2 py-1">$5$</td><td class="border border-gray-400 px-2 py-1">$7$</td><td class="border border-gray-400 px-2 py-1">$10$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1 font-bold">Round 5</td><td class="border border-gray-400 px-2 py-1">$4$</td><td class="border border-gray-400 px-2 py-1">$8$</td><td class="border border-gray-400 px-2 py-1">$8$</td><td class="border border-gray-400 px-2 py-1">$7$</td></tr>
    <tr class="bg-gray-50"><td class="border border-gray-400 px-2 py-1 font-bold">Standard deviation</td><td class="border border-gray-400 px-2 py-1 font-bold">$1.85$</td><td class="border border-gray-400 px-2 py-1 font-bold">$2.61$</td><td class="border border-gray-400 px-2 py-1 font-bold">$0.75$</td><td class="border border-gray-400 px-2 py-1 font-bold">$2.28$</td></tr>
  </tbody>
</table>

Which player was the most consistent in terms of his grades?`,
    options: [
      `Mark`,
      `Diego`,
      `Toni`,
      `Tyler`
    ],
    correctAnswer: 3,
    explanation: `Consistency is measured by standard deviation: a smaller standard deviation indicates less variability and greater consistency around the mean.
Comparing the standard deviations:
- Diego: $1.85$
- Mark: $2.61$
- Tyler: $0.75$
- Toni: $2.28$

Tyler has the smallest standard deviation ($0.75$), which means he was the most consistent.`,
    category: "EST1-statistics part1",
    difficulty: "Easy",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_4",
    question: `If the average (arithmetic mean) of three numbers $a$, $b$, and $c$ is $10$, what is the average of $a$ and $b$ in terms of $c$?`,
    options: [
      `$5 - 0.5c$`,
      `$15 - c$`,
      `$30 - 0.5c$`,
      `$15 - 0.5c$`
    ],
    correctAnswer: 3,
    explanation: `From the given average of $a, b,$ and $c$:
$$\\frac{a + b + c}{3} = 10 \\implies a + b + c = 30 \\implies a + b = 30 - c$$
The average of $a$ and $b$ is:
$$\\text{Average}(a, b) = \\frac{a + b}{2} = \\frac{30 - c}{2} = 15 - 0.5c$$`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_5",
    question: `Consider the list: $15, 5, 10, 12, 13, 15, 17, 40, 31, x$.
If the range of the list above is $29$, which of the following can be the value of $x$?
I. $2$
II. $34$`,
    options: [
      `Only I`,
      `Only II`,
      `Both I and II`,
      `Neither I nor II`
    ],
    correctAnswer: 3,
    explanation: `The range of a set of data is:
$$\\text{Range} = \\text{Maximum} - \\text{Minimum}$$
Excluding $x$, the current minimum is $5$ and the maximum is $40$.
The range of the existing numbers is already:
$$40 - 5 = 35$$
Adding any additional value $x$ cannot decrease this difference below $35$; it can only keep the range at $35$ (if $5 \\le x \\le 40$) or make it even larger (if $x < 5$ or $x > 40$).
Since the range cannot be less than $35$, it is impossible for the range to equal $29$.
Thus, neither $2$ nor $34$ can be the value of $x$.`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_6",
    question: `A company for renting cars published on their website a summary of the amount they won during the past few years from renting cars and trucks.

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Year</th>
      <th class="border border-gray-400 px-2 py-1">Amount won in $\\$$ for renting cars</th>
      <th class="border border-gray-400 px-2 py-1">Amount won in $\\$$ for renting trucks</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">2015</td><td class="border border-gray-400 px-2 py-1">$10004.6$</td><td class="border border-gray-400 px-2 py-1">$7888.3$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2016</td><td class="border border-gray-400 px-2 py-1">$12456.7$</td><td class="border border-gray-400 px-2 py-1">$7985.2$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2017</td><td class="border border-gray-400 px-2 py-1">$14899.9$</td><td class="border border-gray-400 px-2 py-1">$8050.2$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2018</td><td class="border border-gray-400 px-2 py-1">$13899.5$</td><td class="border border-gray-400 px-2 py-1">$9000.5$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2019</td><td class="border border-gray-400 px-2 py-1">$12003.4$</td><td class="border border-gray-400 px-2 py-1">$8599.4$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2020</td><td class="border border-gray-400 px-2 py-1">$13990.1$</td><td class="border border-gray-400 px-2 py-1">$7995.5$</td></tr>
  </tbody>
</table>

What is the sum of the averages of the amounts won for renting cars and trucks during years 2017 to 2020?`,
    options: [
      `$\\$8411.4$`,
      `$\\$13698.225$`,
      `$\\$22109.625$`,
      `$\\$25678.725$`
    ],
    correctAnswer: 2,
    explanation: `Calculate the average for cars over the 4 years (2017 to 2020):
$$\\text{Average}_{\\text{cars}} = \\frac{14899.9 + 13899.5 + 12003.4 + 13990.1}{4} = \\frac{54792.9}{4} = 13698.225$$
Calculate the average for trucks over the 4 years:
$$\\text{Average}_{\\text{trucks}} = \\frac{8050.2 + 9000.5 + 8599.4 + 7995.5}{4} = \\frac{33645.6}{4} = 8411.4$$
The sum of the two averages is:
$$13698.225 + 8411.4 = 22109.625$$`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_7",
    question: `The table below shows the scores of $18$ students on an online history exam. Due to technical issues, the score of the $19^{\\text{th}}$ student was not added to the list. The professor adds the score and finds out that doing so increases the median score.

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <tbody>
    <tr><td class="border border-gray-400 px-1 py-1">46</td><td class="border border-gray-400 px-1 py-1">55</td><td class="border border-gray-400 px-1 py-1">60</td><td class="border border-gray-400 px-1 py-1">65</td><td class="border border-gray-400 px-1 py-1">71</td><td class="border border-gray-400 px-1 py-1">71</td><td class="border border-gray-400 px-1 py-1">76</td><td class="border border-gray-400 px-1 py-1">80</td><td class="border border-gray-400 px-1 py-1">86</td></tr>
    <tr><td class="border border-gray-400 px-1 py-1">88</td><td class="border border-gray-400 px-1 py-1">89</td><td class="border border-gray-400 px-1 py-1">90</td><td class="border border-gray-400 px-1 py-1">92</td><td class="border border-gray-400 px-1 py-1">95</td><td class="border border-gray-400 px-1 py-1">98</td><td class="border border-gray-400 px-1 py-1">100</td><td class="border border-gray-400 px-1 py-1">100</td><td class="border border-gray-400 px-1 py-1">100</td></tr>
  </tbody>
</table>

Which of the following is the most likely score of the $19^{\\text{th}}$ student?`,
    options: [
      `74`,
      `86`,
      `87`,
      `88`
    ],
    correctAnswer: 3,
    explanation: `The $18$ scores are already sorted in ascending order.
For $18$ scores, the median is the average of the $9^{\\text{th}}$ score ($86$) and $10^{\\text{th}}$ score ($88$):
$$\\text{Median}_{18} = \\frac{86 + 88}{2} = 87$$
When a $19^{\\text{th}}$ score ($x$) is added, the new median is the $10^{\\text{th}}$ score of the sorted list of $19$ values:
- If $x \\le 86$ (e.g. $74$ or $86$), the $10^{\\text{th}}$ value remains $86$, decreasing the median.
- If $x = 87$, the $10^{\\text{th}}$ value is $87$, leaving the median unchanged at $87$.
- If $x \\ge 88$ (e.g. $88$), the first $9$ values are $\\le 86$, so the $10^{\\text{th}}$ value becomes $88$. The new median is $88$, which increases the median from $87$ to $88$.

Thus, the score is $88$.`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_8",
    question: `Gold is one of the most important items in the world. Its price increases and decreases every day. The average closing price for the past 8 years is shown in the table below.

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Year</th>
      <th class="border border-gray-400 px-2 py-1">Average Closing Price ($\$$)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">2020</td><td class="border border-gray-400 px-2 py-1">$1,771.9$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2019</td><td class="border border-gray-400 px-2 py-1">$1,393.34$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2018</td><td class="border border-gray-400 px-2 py-1">$1,268.93$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2017</td><td class="border border-gray-400 px-2 py-1">$1,251.92$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2016</td><td class="border border-gray-400 px-2 py-1">$1,158.86$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2015</td><td class="border border-gray-400 px-2 py-1">$1,266.06$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2014</td><td class="border border-gray-400 px-2 py-1">$1,409.51$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2013</td><td class="border border-gray-400 px-2 py-1">$1,668.86$</td></tr>
  </tbody>
</table>

What is the mean of the average closing price of the last 5 years according to the given table?`,
    options: [
      `1,137.2`,
      `1,351.82`,
      `1,368.99`,
      `1,622.18`
    ],
    correctAnswer: 2,
    explanation: `The last 5 years are 2016, 2017, 2018, 2019, and 2020.
$$\\text{Sum} = 1771.9 + 1393.34 + 1268.93 + 1251.92 + 1158.86 = 6844.95$$
$$\\text{Mean} = \\frac{6844.95}{5} = 1368.99$$`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_9",
    question: `The mean of $x, y, z,$ and $t$ is $11.5$. The mean of $x, y, z, t,$ and $q$ is $11.8$. What is the value of $q$?`,
    options: [
      `11.2`,
      `13`,
      `16`,
      `25`
    ],
    correctAnswer: 1,
    explanation: `Calculate the sums:
$$\\text{Sum}(x, y, z, t) = 4 \\times 11.5 = 46$$
$$\\text{Sum}(x, y, z, t, q) = 5 \\times 11.8 = 59$$
The value of $q$ is:
$$q = 59 - 46 = 13$$`,
    category: "EST1-statistics part1",
    difficulty: "Easy",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_10",
    question: `What is the average (arithmetic mean) of $2^{11}$ and $2^{23}$?`,
    options: [
      `$2^{17}$`,
      `$2^{15}$`,
      `$2^{10} + 2^{22}$`,
      `$2^{34}$`
    ],
    correctAnswer: 2,
    explanation: `The arithmetic mean of two numbers is their sum divided by $2$:
$$\\text{Average} = \\frac{2^{11} + 2^{23}}{2} = \\frac{2^{11}}{2} + \\frac{2^{23}}{2} = 2^{10} + 2^{22}$$`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_11",
    question: `Consider the list of four algebraic expressions:
$$k + 2 ;\\; 2k + 4 ;\\; 2k + 5 ;\\; 3k + 5$$
The average of the list above is $36$. Find $k$.`,
    options: [
      `144`,
      `18`,
      `16`,
      `2`
    ],
    correctAnswer: 2,
    explanation: `Find the sum of the four expressions:
$$\\text{Sum} = (k + 2) + (2k + 4) + (2k + 5) + (3k + 5) = 8k + 16$$
The average is:
$$\\frac{8k + 16}{4} = 36$$
$$2k + 4 = 36 \\implies 2k = 32 \\implies k = 16$$`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_12",
    question: `The arithmetic mean of the set below is $7.25$. What is the median of this set?
$$n + 4 ;\\; 6 ;\\; 11 ;\\; 2n - 1$$`,
    options: [
      `6`,
      `7`,
      `6.5`,
      `8.5`
    ],
    correctAnswer: 2,
    explanation: `Find the sum of the four expressions:
$$\\text{Sum} = (n + 4) + 6 + 11 + (2n - 1) = 3n + 20$$
Given the mean is $7.25$:
$$\\text{Sum} = 4 \\times 7.25 = 29$$
$$3n + 20 = 29 \\implies 3n = 9 \\implies n = 3$$
Substitute $n = 3$ to find the four values:
- $n + 4 = 3 + 4 = 7$
- $6$
- $11$
- $2n - 1 = 2(3) - 1 = 5$

Sort the numbers in ascending order:
$$5, 6, 7, 11$$
The median is the average of the two middle numbers:
$$\\text{Median} = \\frac{6 + 7}{2} = 6.5$$`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_13",
    question: `$$4, 3, 3, 5, 5, 7, 7, 5, 8, 9, 11, 11$$
Given the set of data above, which of the following statements is/are true?
I. Its mean is an integer greater than $5$.
II. Its mean is greater than its mode.
III. Its range is equal to the sum of its mean and half the mode.`,
    options: [
      `I only`,
      `II only`,
      `I and II`,
      `II and III`
    ],
    correctAnswer: 1,
    explanation: `Let's sort the $12$ numbers:
$$3, 3, 4, 5, 5, 5, 7, 7, 8, 9, 11, 11$$
- **Mean:** $\\frac{3 + 3 + 4 + 5 + 5 + 5 + 7 + 7 + 8 + 9 + 11 + 11}{12} = \\frac{78}{12} = 6.5$
- **Mode:** $5$ appears three times, more than any other number. $\\text{Mode} = 5$.
- **Range:** $11 - 3 = 8$.

Evaluate each statement:
- **Statement I:** The mean is $6.5$, which is NOT an integer. (False)
- **Statement II:** Mean ($6.5$) is greater than the mode ($5$). (True)
- **Statement III:** Sum of mean and half mode = $6.5 + \\frac{5}{2} = 6.5 + 2.5 = 9$. Since range is $8 \\ne 9$, this is false. (False)

Therefore, only statement II is true.`,
    category: "EST1-statistics part1",
    difficulty: "Hard",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_14",
    question: `Consider the ages of your 6 cousins as follows:
$$6, 19, 14, 13, 7, 11$$
What is the standard deviation of their ages?`,
    options: [
      `3.8`,
      `4.38`,
      `5.14`,
      `11.49`,
      `22`
    ],
    correctAnswer: 1,
    explanation: `Calculate the mean:
$$\\mu = \\frac{6 + 19 + 14 + 13 + 7 + 11}{6} = \\frac{70}{6} \\approx 11.667$$
Calculate the squared deviations from the mean:
$$(6 - 11.667)^2 \\approx 32.11$$
$$(19 - 11.667)^2 \\approx 53.78$$
$$(14 - 11.667)^2 \\approx 5.44$$
$$(13 - 11.667)^2 \\approx 1.78$$
$$(7 - 11.667)^2 \\approx 21.78$$
$$(11 - 11.667)^2 \\approx 0.44$$
$$\\sum (x_i - \\mu)^2 \\approx 115.33$$
$$\\sigma = \\sqrt{\\frac{115.33}{6}} = \\sqrt{19.22} \\approx 4.38$$`,
    category: "EST1-statistics part1",
    difficulty: "Hard",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_15",
    question: `In the set of numbers: $5, 10, 20, 10, 30, 25$, consider $M$ as the median and $m$ as the mode of the set. What is the average of $M$ and $m$?`,
    options: [
      `10`,
      `12.5`,
      `13.33`,
      `13.75`,
      `16.25`
    ],
    correctAnswer: 1,
    explanation: `Sort the $6$ numbers in ascending order:
$$5, 10, 10, 20, 25, 30$$
- **Median ($M$):** Average of the $3^{\\text{rd}}$ and $4^{\\text{th}}$ values:
$$M = \\frac{10 + 20}{2} = 15$$
- **Mode ($m$):** The number appearing most frequently is $10$:
$$m = 10$$
- **Average of $M$ and $m$:**
$$\\frac{M + m}{2} = \\frac{15 + 10}{2} = 12.5$$`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_16",
    question: `Which of the numbers below is NOT the mean, median, mode or range of the data set:
$$5, 2, 4, 5, 10, 16, 12, 18, 15, 13\\;?$$`,
    options: [
      `10`,
      `11`,
      `5`,
      `8`,
      `16`
    ],
    correctAnswer: 3,
    explanation: `Order the $10$ values:
$$2, 4, 5, 5, 10, 12, 13, 15, 16, 18$$
- **Mean:** $\\frac{2 + 4 + 5 + 5 + 10 + 12 + 13 + 15 + 16 + 18}{10} = \\frac{100}{10} = 10$ (Option A)
- **Median:** $\\frac{10 + 12}{2} = 11$ (Option B)
- **Mode:** $5$ appears twice (Option C)
- **Range:** $18 - 2 = 16$ (Option E)

The number $8$ is neither the mean, median, mode, nor range of the set.`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_17",
    question: `The adjacent table shows the heights of $10$ randomly chosen buildings in Egypt. What is the sum of the interquartile range and the median of the data shown?

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Building</th>
      <th class="border border-gray-400 px-2 py-1">Height (m)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">Cairo Tower</td><td class="border border-gray-400 px-2 py-1">187</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Ministry of Foreign Affairs Building, Cairo</td><td class="border border-gray-400 px-2 py-1">143</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Nile City South Tower</td><td class="border border-gray-400 px-2 py-1">142</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">El Maadi Residential Tower 16</td><td class="border border-gray-400 px-2 py-1">140</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Great Pyramid of Giza</td><td class="border border-gray-400 px-2 py-1">138.8</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">National Bank of Egypt Tower 1</td><td class="border border-gray-400 px-2 py-1">135</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Residences Roda Island</td><td class="border border-gray-400 px-2 py-1">118</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Ramses Hilton & World Trade Center</td><td class="border border-gray-400 px-2 py-1">110</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Hilton World Trade Center Residences</td><td class="border border-gray-400 px-2 py-1">110</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Four Seasons Cairo at First Residence</td><td class="border border-gray-400 px-2 py-1">103</td></tr>
  </tbody>
</table>`,
    options: [
      `32`,
      `110`,
      `136.9`,
      `142`,
      `168.9`
    ],
    correctAnswer: 4,
    explanation: `List the $10$ heights in ascending order:
$$103, 110, 110, 118, 135, 138.8, 140, 142, 143, 187$$
- **Median ($n = 10$):**
$$\\text{Median} = \\frac{135 + 138.8}{2} = 136.9$$
- **Lower Quartile ($Q_1$):** Median of lower 5 values $\\{103, 110, 110, 118, 135\\}$:
$$Q_1 = 110$$
- **Upper Quartile ($Q_3$):** Median of upper 5 values $\\{138.8, 140, 142, 143, 187\\}$:
$$Q_3 = 142$$
- **Interquartile Range (IQR):**
$$\\text{IQR} = Q_3 - Q_1 = 142 - 110 = 32$$
- **Sum of IQR and Median:**
$$32 + 136.9 = 168.9$$`,
    category: "EST1-statistics part1",
    difficulty: "Hard",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_18",
    question: `Lora went to the mall and purchased the items that are shown in the adjacent table. What is the sum of the mean and the median of the list shown?

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Items</th>
      <th class="border border-gray-400 px-2 py-1">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">Jeans</td><td class="border border-gray-400 px-2 py-1">$\\$44.77$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">T-shirt</td><td class="border border-gray-400 px-2 py-1">$\\$25.67$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Sweatshirt</td><td class="border border-gray-400 px-2 py-1">$\\$20.67$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Backpack</td><td class="border border-gray-400 px-2 py-1">$\\$24.67$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Jacket</td><td class="border border-gray-400 px-2 py-1">$\\$67.77$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Hat</td><td class="border border-gray-400 px-2 py-1">$\\$20.17$</td></tr>
  </tbody>
</table>`,
    options: [
      `25.17`,
      `29.56`,
      `33.95`,
      `59.12`,
      `101.72`
    ],
    correctAnswer: 3,
    explanation: `List the $6$ prices in ascending order:
$$20.17, 20.67, 24.67, 25.67, 44.77, 67.77$$
- **Mean:**
$$\\text{Mean} = \\frac{20.17 + 20.67 + 24.67 + 25.67 + 44.77 + 67.77}{6} = \\frac{203.72}{6} \\approx 33.9533$$
- **Median:**
$$\\text{Median} = \\frac{24.67 + 25.67}{2} = 25.17$$
- **Sum of Mean and Median:**
$$33.9533 + 25.17 = 59.1233 \\approx 59.12$$`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_19",
    question: `Consider the ages of your 6 cousins as follows:
$$6, 19, 14, 13, 7, 11$$
What is the standard deviation of their ages?`,
    options: [
      `3.8`,
      `4.38`,
      `5.14`,
      `11.49`,
      `22`
    ],
    correctAnswer: 1,
    explanation: `Mean $\\mu = \\frac{70}{6} \\approx 11.667$.
Sum of squared deviations $\\sum(x_i - \\mu)^2 \\approx 115.33$.
$$\\sigma = \\sqrt{\\frac{115.33}{6}} \\approx 4.38$$`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_20",
    question: `The scores given below were earned by $10$ students on a recent biology test. What is the median score?
$$71, 94, 86, 77, 88, 94, 88, 80, 78, 94$$`,
    options: [
      `85`,
      `86`,
      `87`,
      `88`,
      `91`
    ],
    correctAnswer: 2,
    explanation: `Sort the $10$ test scores in ascending order:
$$71, 77, 78, 80, 86, 88, 88, 94, 94, 94$$
The median is the average of the $5^{\\text{th}}$ ($86$) and $6^{\\text{th}}$ ($88$) scores:
$$\\text{Median} = \\frac{86 + 88}{2} = 87$$`,
    category: "EST1-statistics part1",
    difficulty: "Easy",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_21",
    question: `The mean of a list of $7$ numbers is $85$. The first $6$ numbers on the list are $82, 93, 68, 93, 70,$ and $98$. What is the $7^{\\text{th}}$ number on the list?`,
    options: [
      `83`,
      `84`,
      `90`,
      `91`,
      `93`
    ],
    correctAnswer: 3,
    explanation: `The total sum of the $7$ numbers is:
$$\\text{Total Sum} = 7 \\times 85 = 595$$
The sum of the first $6$ numbers is:
$$82 + 93 + 68 + 93 + 70 + 98 = 504$$
The $7^{\\text{th}}$ number is:
$$x_7 = 595 - 504 = 91$$`,
    category: "EST1-statistics part1",
    difficulty: "Easy",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_22",
    question: `For which of the following data sets is the difference between the mean and the median the greatest?`,
    options: [
      `$\\{10, 10, 10, 10\\}$`,
      `$\\{10, 10, 15, 20\\}$`,
      `$\\{10, 15, 15, 15\\}$`,
      `$\\{10, 15, 15, 100\\}$`,
      `$\\{10, 20, 90, 100\\}$`
    ],
    correctAnswer: 3,
    explanation: `Compute the mean, median, and their absolute difference for each data set:
- **Set A $\\{10, 10, 10, 10\\}$:**
  $$\\text{Mean} = 10, \\quad \\text{Median} = 10 \\implies |10 - 10| = 0$$
- **Set B $\\{10, 10, 15, 20\\}$:**
  $$\\text{Mean} = \\frac{55}{4} = 13.75, \\quad \\text{Median} = 12.5 \\implies |13.75 - 12.5| = 1.25$$
- **Set C $\\{10, 15, 15, 15\\}$:**
  $$\\text{Mean} = \\frac{55}{4} = 13.75, \\quad \\text{Median} = 15 \\implies |13.75 - 15| = 1.25$$
- **Set D $\\{10, 15, 15, 100\\}$:**
  $$\\text{Mean} = \\frac{140}{4} = 35, \\quad \\text{Median} = 15 \\implies |35 - 15| = 20$$
- **Set E $\\{10, 20, 90, 100\\}$:**
  $$\\text{Mean} = \\frac{220}{4} = 55, \\quad \\text{Median} = 55 \\implies |55 - 55| = 0$$

The extreme outlier of $100$ in set D pulls the mean up dramatically while the median remains $15$, yielding the greatest difference of $20$.`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_23",
    question: `An outlier is added to the data set below. Which of the following pairs of statistics has no change in value as a result of the addition of the outlier?
$$\\{60, 63, 66, 70, 72, 72, 73, 73, 73, 75\\}$$`,
    options: [
      `Mean and median`,
      `Mean and mode`,
      `Mean and range`,
      `Median and mode`,
      `Median and range`
    ],
    correctAnswer: 3,
    explanation: `Analyze the original data set ($n = 10$):
- **Median:** $\\frac{72 + 72}{2} = 72$
- **Mode:** $73$ (appears $3$ times)

When a single extreme outlier is added (e.g. $0$ or $500$):
1. **Mode:** $73$ still appears $3$ times, while the single outlier appears once. The mode remains $73$.
2. **Median:** With $11$ data points, the new median is the $6^{\\text{th}}$ value in the sorted order. Whether the outlier is placed on the far left or far right, the $6^{\\text{th}}$ value is $72$. The median remains $72$.
3. Mean and range are both sensitive to outliers and change significantly.

Therefore, **median and mode** experience no change in value.`,
    category: "EST1-statistics part1",
    difficulty: "Hard",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_24",
    question: `Let $m$ and $s$ be the mean and standard deviation, respectively, of the ages of children in a certain daycare center. Which of the following gives the mean and standard deviation of the ages of the same children 5 years later?`,
    options: [
      `Mean: $m$, Standard deviation: $s$`,
      `Mean: $m$, Standard deviation: $s + 5$`,
      `Mean: $m + 5$, Standard deviation: $s$`,
      `Mean: $m + 5$, Standard deviation: $s + 5$`,
      `Mean: $m + 5$, Standard deviation: $5s$`
    ],
    correctAnswer: 2,
    explanation: `When a constant $c$ (here $c = 5$) is added to each data point in a set:
- **Mean:** Shifts by $+c$, so the new mean is $m + 5$.
- **Standard deviation:** Measures the dispersion/spread of values relative to each other. Since every value shifts by the exact same amount, the spread and distances between values do not change at all. Thus, the standard deviation remains $s$.

Therefore, the new mean is $m + 5$ and the new standard deviation is $s$.`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_25",
    question: `The average weight of Juan, Jim, and Malik is exactly $160$ pounds. The average weight of Juan, Jim, Malik, and Harry is exactly $150$ pounds. How many pounds does Harry weigh?`,
    options: [
      `100`,
      `120`,
      `130`,
      `155`,
      `190`
    ],
    correctAnswer: 1,
    explanation: `Calculate total weights:
- Sum of weights for Juan, Jim, and Malik:
$$3 \\times 160 = 480 \\text{ pounds}$$
- Sum of weights for all $4$ people:
$$4 \\times 150 = 600 \\text{ pounds}$$
Harry's weight is the difference:
$$\\text{Harry's weight} = 600 - 480 = 120 \\text{ pounds}$$`,
    category: "EST1-statistics part1",
    difficulty: "Easy",
    topics: ["Statistics"]
  },
  {
    id: "est1_stat_part1_26",
    question: `Sofia earned scores of $85, 86, 87,$ and $82$ points on 4 math tests. What score must Sofia earn on the $5^{\\text{th}}$ math test for the average of the 5 tests to be exactly 3 points higher than the average of the first 4 tests?`,
    options: [
      `70`,
      `82`,
      `85`,
      `88`,
      `100`
    ],
    correctAnswer: 4,
    explanation: `Find the average of the first 4 tests:
$$\\text{Sum}_4 = 85 + 86 + 87 + 82 = 340$$
$$\\text{Average}_4 = \\frac{340}{4} = 85$$
The desired average for all 5 tests is:
$$85 + 3 = 88$$
The required total sum for 5 tests is:
$$\\text{Sum}_5 = 5 \\times 88 = 440$$
The score needed on the $5^{\\text{th}}$ test is:
$$440 - 340 = 100$$`,
    category: "EST1-statistics part1",
    difficulty: "Medium",
    topics: ["Statistics"]
  }
];
