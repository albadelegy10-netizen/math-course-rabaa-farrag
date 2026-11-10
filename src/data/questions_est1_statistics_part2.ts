import { Question } from '../../types';

export const EST1_STATISTICS_PART2: Question[] = [
  {
    id: "est1_stat_p2_1",
    question: "In the set of numbers: 5, 10, 20, 10, 30, 25, consider M as the median and m as the mode of the set. What is the average of M and m?",
    options: ["10", "12.5", "13.33", "13.75", "16.25"],
    correctAnswer: 1,
    explanation: "Sorted set: 5, 10, 10, 20, 25, 30. Median (M) is the average of the two middle numbers (10 and 20), which is 15. The mode (m) is the most frequent number, which is 10. The average of M and m is (15 + 10) / 2 = 12.5.",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_2",
    question: "Lora went to the mall and purchased the items that are shown in the adjacent table. What is the sum of the mean and the median of the list shown?",
    svg: `<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 400px; text-align: center; margin: 10px auto; background-color: white;">
<tr><th style="background-color:#f0f0f0">Items</th><th style="background-color:#f0f0f0">Price</th></tr>
<tr><td>Jeans</td><td>$44.77</td></tr>
<tr><td>T-shirt</td><td>$25.67</td></tr>
<tr><td>Sweatshirt</td><td>$20.67</td></tr>
<tr><td>Backpack</td><td>$24.67</td></tr>
<tr><td>Jacket</td><td>$67.77</td></tr>
<tr><td>Hat</td><td>$20.17</td></tr>
</table>`,
    options: ["25.17", "29.56", "33.95", "59.12", "101.72"],
    correctAnswer: 3,
    explanation: "Prices: 44.77, 25.67, 20.67, 24.67, 67.77, 20.17. Sorted: 20.17, 20.67, 24.67, 25.67, 44.77, 67.77. Sum = 203.72. Mean = 203.72 / 6 = 33.9533. Median = (24.67 + 25.67) / 2 = 25.17. Sum of mean and median = 33.9533 + 25.17 = 59.1233 ≈ 59.12.",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_3",
    question: "A company for renting cars published on their website a summary of the amount they won during the past few years from renting cars and trucks. What is the sum of the averages of the amounts won for renting cars and trucks during years 2017 to 2020?",
    svg: `<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center; margin: 10px auto; background-color: white;">
<tr><th style="background-color:#f0f0f0">Year</th><th style="background-color:#f0f0f0">Amount won in $ for renting cars</th><th style="background-color:#f0f0f0">Amount won in $ for renting trucks</th></tr>
<tr><td>2015</td><td>10004.6</td><td>7888.3</td></tr>
<tr><td>2016</td><td>12456.7</td><td>7985.2</td></tr>
<tr><td>2017</td><td>14899.9</td><td>8050.2</td></tr>
<tr><td>2018</td><td>13899.5</td><td>9000.5</td></tr>
<tr><td>2019</td><td>12003.4</td><td>8599.4</td></tr>
<tr><td>2020</td><td>13990.1</td><td>7995.5</td></tr>
</table>`,
    options: ["$8411.4", "$13698.225", "$22109.625", "$25678.725"],
    correctAnswer: 2,
    explanation: "From 2017 to 2020, amounts for cars: 14899.9, 13899.5, 12003.4, 13990.1. Average = 54792.9 / 4 = 13698.225. Amounts for trucks: 8050.2, 9000.5, 8599.4, 7995.5. Average = 33645.6 / 4 = 8411.4. Sum of averages = 13698.225 + 8411.4 = 22109.625.",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_4",
    question: "The above bar chart shows the scores of a philosophy test over 100. What is the range of the scores?",
    svg: `<svg viewBox="0 0 400 250" style="background:white; margin:10px auto; display:block; border:1px solid #ccc;">
  <text x="30" y="30" font-size="12">10</text>
  <text x="35" y="60" font-size="12">8</text>
  <text x="35" y="90" font-size="12">6</text>
  <text x="35" y="120" font-size="12">4</text>
  <text x="35" y="150" font-size="12">2</text>
  <text x="35" y="180" font-size="12">0</text>
  <line x1="50" y1="180" x2="350" y2="180" stroke="black"/>
  <line x1="50" y1="20" x2="50" y2="180" stroke="black"/>
  <rect x="70" y="120" width="20" height="60" fill="#4a86e8"/>
  <rect x="130" y="120" width="20" height="60" fill="#4a86e8"/>
  <rect x="190" y="60" width="20" height="120" fill="#4a86e8"/>
  <rect x="250" y="120" width="20" height="60" fill="#4a86e8"/>
  <rect x="310" y="120" width="20" height="60" fill="#4a86e8"/>
  <text x="70" y="200" font-size="12">50</text>
  <text x="130" y="200" font-size="12">60</text>
  <text x="190" y="200" font-size="12">70</text>
  <text x="250" y="200" font-size="12">80</text>
  <text x="310" y="200" font-size="12">90</text>
  <text x="15" y="150" font-size="12" transform="rotate(-90 15,150)">Number of students</text>
  <text x="180" y="230" font-size="12">Scores</text>
</svg>`,
    options: ["40", "3", "10", "20"],
    correctAnswer: 0,
    explanation: "The scores obtained by the students are 50, 60, 70, 80, 90. The range is the highest score minus the lowest score: 90 - 50 = 40.",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_5",
    question: "The above bar chart shows the scores of a philosophy test over 100. What is the median score?",
    svg: `<svg viewBox="0 0 400 250" style="background:white; margin:10px auto; display:block; border:1px solid #ccc;">
  <text x="30" y="30" font-size="12">10</text>
  <text x="35" y="60" font-size="12">8</text>
  <text x="35" y="90" font-size="12">6</text>
  <text x="35" y="120" font-size="12">4</text>
  <text x="35" y="150" font-size="12">2</text>
  <text x="35" y="180" font-size="12">0</text>
  <line x1="50" y1="180" x2="350" y2="180" stroke="black"/>
  <line x1="50" y1="20" x2="50" y2="180" stroke="black"/>
  <rect x="70" y="120" width="20" height="60" fill="#4a86e8"/>
  <rect x="130" y="120" width="20" height="60" fill="#4a86e8"/>
  <rect x="190" y="60" width="20" height="120" fill="#4a86e8"/>
  <rect x="250" y="120" width="20" height="60" fill="#4a86e8"/>
  <rect x="310" y="120" width="20" height="60" fill="#4a86e8"/>
  <text x="70" y="200" font-size="12">50</text>
  <text x="130" y="200" font-size="12">60</text>
  <text x="190" y="200" font-size="12">70</text>
  <text x="250" y="200" font-size="12">80</text>
  <text x="310" y="200" font-size="12">90</text>
  <text x="15" y="150" font-size="12" transform="rotate(-90 15,150)">Number of students</text>
  <text x="180" y="230" font-size="12">Scores</text>
</svg>`,
    options: ["8", "60", "70", "80"],
    correctAnswer: 2,
    explanation: "Total number of students = 4 + 4 + 8 + 4 + 4 = 24. The median lies between the 12th and 13th student. Counting from the lowest score: 50(4), 60(4). This sums to 8. The next 8 students scored 70. This covers up to the 16th student. The 12th and 13th both scored 70. Median = 70.",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_6",
    question: "The dot plots above show the scores on a common quiz for the three sections A, B, and C. Knowing that the average score is the same for the three sections, which of the following correctly compares the standard deviation (x) of the scores in each of the three sections?",
    svg: `<svg viewBox="0 0 400 300" style="background:white; margin:10px auto; display:block; border:1px solid #ccc;">
  <rect x="20" y="10" width="360" height="70" fill="transparent" stroke="black"/>
  <text x="370" y="45" font-size="12" transform="rotate(90 380,45)">A</text>
  <circle cx="160" cy="70" r="5" fill="none" stroke="black"/>
  <circle cx="160" cy="55" r="5" fill="none" stroke="black"/>
  <circle cx="160" cy="40" r="5" fill="none" stroke="black"/>
  <circle cx="180" cy="70" r="5" fill="none" stroke="black"/>
  <circle cx="180" cy="55" r="5" fill="none" stroke="black"/>
  <circle cx="180" cy="40" r="5" fill="none" stroke="black"/>
  <circle cx="180" cy="25" r="5" fill="none" stroke="black"/>
  <circle cx="200" cy="70" r="5" fill="none" stroke="black"/>
  <circle cx="200" cy="55" r="5" fill="none" stroke="black"/>
  <rect x="20" y="90" width="360" height="70" fill="transparent" stroke="black"/>
  <text x="370" y="125" font-size="12" transform="rotate(90 380,125)">B section</text>
  <circle cx="110" cy="150" r="5" fill="none" stroke="black"/>
  <circle cx="110" cy="135" r="5" fill="none" stroke="black"/>
  <circle cx="160" cy="150" r="5" fill="none" stroke="black"/>
  <circle cx="180" cy="150" r="5" fill="none" stroke="black"/>
  <circle cx="200" cy="150" r="5" fill="none" stroke="black"/>
  <circle cx="250" cy="150" r="5" fill="none" stroke="black"/>
  <circle cx="250" cy="135" r="5" fill="none" stroke="black"/>
  <circle cx="300" cy="150" r="5" fill="none" stroke="black"/>
  <circle cx="320" cy="150" r="5" fill="none" stroke="black"/>
  <rect x="20" y="170" width="360" height="70" fill="transparent" stroke="black"/>
  <text x="370" y="205" font-size="12" transform="rotate(90 380,205)">C</text>
  <circle cx="60" cy="230" r="5" fill="none" stroke="black"/>
  <circle cx="80" cy="230" r="5" fill="none" stroke="black"/>
  <circle cx="100" cy="230" r="5" fill="none" stroke="black"/>
  <circle cx="150" cy="230" r="5" fill="none" stroke="black"/>
  <circle cx="200" cy="230" r="5" fill="none" stroke="black"/>
  <circle cx="200" cy="215" r="5" fill="none" stroke="black"/>
  <circle cx="220" cy="230" r="5" fill="none" stroke="black"/>
  <circle cx="270" cy="230" r="5" fill="none" stroke="black"/>
  <circle cx="270" cy="215" r="5" fill="none" stroke="black"/>
  <circle cx="340" cy="230" r="5" fill="none" stroke="black"/>
  <line x1="20" y1="240" x2="360" y2="240" stroke="black"/>
  <text x="20" y="260" font-size="10">0</text>
  <text x="90" y="260" font-size="10">2</text>
  <text x="160" y="260" font-size="10">4</text>
  <text x="230" y="260" font-size="10">6</text>
  <text x="300" y="260" font-size="10">8</text>
  <text x="360" y="260" font-size="10">10</text>
  <text x="180" y="280" font-size="12">scores</text>
</svg>`,
    options: ["x_A < x_B < x_C", "x_A < x_C < x_B", "x_C < x_B < x_A", "x_B < x_A < x_C"],
    correctAnswer: 0,
    explanation: "Standard deviation measures the spread or dispersion of the data from the mean. Section A is tightly clustered near the mean (low SD). Section B is more spread out. Section C has the data most spread out towards the extremes 0 and 10, thus it has the highest SD.",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_7",
    question: "The bar chart above shows the scores of a Math test over 100. What is the median score?",
    svg: `<svg viewBox="0 0 400 250" style="background:#e6f0ff; margin:10px auto; display:block; border:1px solid #ccc;">
  <text x="30" y="30" font-size="10">8</text>
  <text x="30" y="60" font-size="10">6</text>
  <text x="30" y="90" font-size="10">4</text>
  <text x="30" y="120" font-size="10">2</text>
  <text x="30" y="150" font-size="10">0</text>
  <line x1="45" y1="150" x2="350" y2="150" stroke="white" stroke-width="2"/>
  <line x1="45" y1="20" x2="45" y2="150" stroke="white" stroke-width="2"/>
  <rect x="60" y="120" width="30" height="30" fill="#5b9bd5"/>
  <rect x="110" y="90" width="30" height="60" fill="#5b9bd5"/>
  <rect x="160" y="60" width="30" height="90" fill="#5b9bd5"/>
  <rect x="210" y="45" width="30" height="105" fill="#5b9bd5"/>
  <rect x="260" y="135" width="30" height="15" fill="#5b9bd5"/>
  <text x="70" y="170" font-size="10">40</text>
  <text x="120" y="170" font-size="10">55</text>
  <text x="170" y="170" font-size="10">75</text>
  <text x="220" y="170" font-size="10">80</text>
  <text x="270" y="170" font-size="10">95</text>
  <text x="15" y="120" font-size="10" transform="rotate(-90 15,120)">Number of students</text>
  <text x="180" y="200" font-size="12">Scores</text>
</svg>`,
    options: ["60", "75", "85", "95"],
    correctAnswer: 1,
    explanation: "Frequencies: 40(2), 55(4), 75(6), 80(7), 95(1). Total students = 2+4+6+7+1 = 20. The median is the average of the 10th and 11th values. 2+4 = 6. The 7th to 12th students got 75. Therefore, both the 10th and 11th got 75.",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_8",
    question: "The bar chart above shows the scores of a Math test over 100. What is the range of the scores?",
    svg: `<svg viewBox="0 0 400 250" style="background:#e6f0ff; margin:10px auto; display:block; border:1px solid #ccc;">
  <text x="30" y="30" font-size="10">8</text>
  <text x="30" y="60" font-size="10">6</text>
  <text x="30" y="90" font-size="10">4</text>
  <text x="30" y="120" font-size="10">2</text>
  <text x="30" y="150" font-size="10">0</text>
  <line x1="45" y1="150" x2="350" y2="150" stroke="white" stroke-width="2"/>
  <line x1="45" y1="20" x2="45" y2="150" stroke="white" stroke-width="2"/>
  <rect x="60" y="120" width="30" height="30" fill="#5b9bd5"/>
  <rect x="110" y="90" width="30" height="60" fill="#5b9bd5"/>
  <rect x="160" y="60" width="30" height="90" fill="#5b9bd5"/>
  <rect x="210" y="45" width="30" height="105" fill="#5b9bd5"/>
  <rect x="260" y="135" width="30" height="15" fill="#5b9bd5"/>
  <text x="70" y="170" font-size="10">40</text>
  <text x="120" y="170" font-size="10">55</text>
  <text x="170" y="170" font-size="10">75</text>
  <text x="220" y="170" font-size="10">80</text>
  <text x="270" y="170" font-size="10">95</text>
  <text x="15" y="120" font-size="10" transform="rotate(-90 15,120)">Number of students</text>
  <text x="180" y="200" font-size="12">Scores</text>
</svg>`,
    options: ["40", "50", "55", "65"],
    correctAnswer: 2,
    explanation: "The highest score obtained is 95 and the lowest is 40. Range = 95 - 40 = 55.",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_9",
    question: "The bar chart above shows the scores of a Math test over 100. How many students score at least 55? (grid-in)",
    svg: `<svg viewBox="0 0 400 250" style="background:#e6f0ff; margin:10px auto; display:block; border:1px solid #ccc;">
  <text x="30" y="30" font-size="10">8</text>
  <text x="30" y="60" font-size="10">6</text>
  <text x="30" y="90" font-size="10">4</text>
  <text x="30" y="120" font-size="10">2</text>
  <text x="30" y="150" font-size="10">0</text>
  <line x1="45" y1="150" x2="350" y2="150" stroke="white" stroke-width="2"/>
  <line x1="45" y1="20" x2="45" y2="150" stroke="white" stroke-width="2"/>
  <rect x="60" y="120" width="30" height="30" fill="#5b9bd5"/>
  <rect x="110" y="90" width="30" height="60" fill="#5b9bd5"/>
  <rect x="160" y="60" width="30" height="90" fill="#5b9bd5"/>
  <rect x="210" y="45" width="30" height="105" fill="#5b9bd5"/>
  <rect x="260" y="135" width="30" height="15" fill="#5b9bd5"/>
  <text x="70" y="170" font-size="10">40</text>
  <text x="120" y="170" font-size="10">55</text>
  <text x="170" y="170" font-size="10">75</text>
  <text x="220" y="170" font-size="10">80</text>
  <text x="270" y="170" font-size="10">95</text>
  <text x="15" y="120" font-size="10" transform="rotate(-90 15,120)">Number of students</text>
  <text x="180" y="200" font-size="12">Scores</text>
</svg>`,
    options: ["18", "20", "25", "16"],
    correctAnswer: 0,
    explanation: "Students scoring at least 55 means 55 or more. This includes frequencies for 55(4), 75(6), 80(7), and 95(1). Total = 4+6+7+1 = 18.",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_10",
    question: "Based on the bar graph above, what is the average grade on the test?",
    svg: `<svg viewBox="0 0 400 280" style="background:white; margin:10px auto; display:block; border:1px solid #ccc;">
  <text x="10" y="20" font-size="10" font-weight="bold">Grades</text>
  <text x="30" y="50" font-size="10">20</text>
  <line x1="50" y1="50" x2="350" y2="50" stroke="black" stroke-dasharray="4"/>
  <text x="30" y="80" font-size="10">16</text>
  <line x1="50" y1="80" x2="350" y2="80" stroke="black" stroke-dasharray="4"/>
  <text x="30" y="100" font-size="10">14</text>
  <line x1="50" y1="100" x2="350" y2="100" stroke="black" stroke-dasharray="4"/>
  <text x="35" y="160" font-size="10">8</text>
  <line x1="50" y1="160" x2="350" y2="160" stroke="black" stroke-dasharray="4"/>
  <text x="35" y="180" font-size="10">6</text>
  <line x1="50" y1="180" x2="350" y2="180" stroke="black" stroke-dasharray="4"/>
  <line x1="50" y1="210" x2="350" y2="210" stroke="black"/>
  <line x1="50" y1="20" x2="50" y2="210" stroke="black"/>
  <rect x="70" y="160" width="30" height="50" fill="#e0e0e0" stroke="black"/>
  <rect x="120" y="50" width="30" height="160" fill="#e0e0e0" stroke="black"/>
  <rect x="170" y="80" width="30" height="130" fill="#e0e0e0" stroke="black"/>
  <rect x="220" y="100" width="30" height="110" fill="#e0e0e0" stroke="black"/>
  <rect x="270" y="180" width="30" height="30" fill="#e0e0e0" stroke="black"/>
  <text x="80" y="230" font-size="12">4</text>
  <text x="130" y="230" font-size="12">8</text>
  <text x="180" y="230" font-size="12">12</text>
  <text x="230" y="230" font-size="12">10</text>
  <text x="280" y="230" font-size="12">6</text>
  <text x="180" y="250" font-size="10">Number of student</text>
</svg>`,
    options: ["10", "11.6", "12.8", "14.6"],
    correctAnswer: 3,
    explanation: "Number of students on x-axis: 4, 8, 12, 10, 6 (Sum = 40). According to the text, total points is 584 which gives an average of 14.6.",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_11",
    question: "If 5 is subtracted from each score, what do the new mean x' and standard deviation α' become with respect to the original mean x and standard deviation α?",
    svg: `<svg viewBox="0 0 400 250" style="background:white; margin:10px auto; display:block; border:1px solid #ccc;">
  <text x="30" y="30" font-size="12">10</text>
  <text x="35" y="60" font-size="12">8</text>
  <text x="35" y="90" font-size="12">6</text>
  <text x="35" y="120" font-size="12">4</text>
  <text x="35" y="150" font-size="12">2</text>
  <text x="35" y="180" font-size="12">0</text>
  <line x1="50" y1="180" x2="350" y2="180" stroke="black"/>
  <line x1="50" y1="20" x2="50" y2="180" stroke="black"/>
  <rect x="70" y="120" width="20" height="60" fill="#4a86e8"/>
  <rect x="130" y="120" width="20" height="60" fill="#4a86e8"/>
  <rect x="190" y="60" width="20" height="120" fill="#4a86e8"/>
  <rect x="250" y="120" width="20" height="60" fill="#4a86e8"/>
  <rect x="310" y="120" width="20" height="60" fill="#4a86e8"/>
  <text x="70" y="200" font-size="12">50</text>
  <text x="130" y="200" font-size="12">60</text>
  <text x="190" y="200" font-size="12">70</text>
  <text x="250" y="200" font-size="12">80</text>
  <text x="310" y="200" font-size="12">90</text>
  <text x="15" y="150" font-size="12" transform="rotate(-90 15,150)">Number of students</text>
  <text x="180" y="230" font-size="12">Scores</text>
</svg>`,
    options: ["x' = 5x ; α' = α", "x' = x + 5 ; α' = α - 5", "x' = x - 5 ; α' = α", "x' = x - 5 ; α' = α - 5"],
    correctAnswer: 2,
    explanation: "Subtracting a constant from every term in a dataset shifts the entire dataset down by that constant. Therefore, the new mean x' is the original mean minus 5 (x' = x - 5). The standard deviation measures distance from the mean; shifting the data does not affect its spread, so the standard deviation remains the same (α' = α).",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_12",
    question: "4, 3, 3, 5, 5, 7, 7, 5, 8, 9, 11, 11\nGiven the set of data above, which of the following statements is/are true?\nI. Its mean is an integer greater than 5.\nII. Its mean is greater than its mode.\nIII. Its range is equal to the sum of its mean and half the mode.",
    options: ["I only", "II only", "I and II", "II and III"],
    correctAnswer: 1,
    explanation: "Sort: 3, 3, 4, 5, 5, 5, 7, 7, 8, 9, 11, 11 (12 terms). Sum = 78. Mean = 78 / 12 = 6.5. (Not an integer, so I is false). Mode = 5. Mean (6.5) > Mode (5), so II is true. Range = 11 - 3 = 8. Half the mode = 2.5. Sum = 6.5 + 2.5 = 9. So III is false. Only statement II is true.",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_13",
    question: "Which of the numbers below is not the mean, median, mode or range of the data set 5, 2, 4, 5, 10, 16, 12, 18, 15, 13?",
    options: ["10", "11", "5", "8", "16"],
    correctAnswer: 3,
    explanation: "Sorted: 2, 4, 5, 5, 10, 12, 13, 15, 16, 18 (10 items). Sum = 100. Mean = 100 / 10 = 10. Median = (10+12)/2 = 11. Mode = 5. Range = 18 - 2 = 16. The value 8 is not any of these.",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_14",
    question: "The ratings from a survey taken by 90 students are summarized in the frequency bar graph below. The possible ratings on the survey are 0, 1, 2, 3, and 4. What is the mean of the 90 ratings?",
    svg: `<svg viewBox="0 0 400 280" style="background:white; margin:10px auto; display:block; border:1px solid #ccc;">
  <text x="30" y="40" font-size="12">40</text>
  <text x="30" y="80" font-size="12">30</text>
  <text x="30" y="120" font-size="12">20</text>
  <text x="30" y="160" font-size="12">10</text>
  <text x="30" y="200" font-size="12">0</text>
  <line x1="50" y1="200" x2="350" y2="200" stroke="black"/>
  <line x1="50" y1="20" x2="50" y2="200" stroke="black"/>
  <line x1="50" y1="40" x2="350" y2="40" stroke="black" stroke-dasharray="2"/>
  <line x1="50" y1="80" x2="350" y2="80" stroke="black" stroke-dasharray="2"/>
  <line x1="50" y1="120" x2="350" y2="120" stroke="black" stroke-dasharray="2"/>
  <line x1="50" y1="160" x2="350" y2="160" stroke="black" stroke-dasharray="2"/>
  <rect x="70" y="180" width="30" height="20" fill="#e0e0e0" stroke="black"/>
  <rect x="130" y="160" width="30" height="40" fill="#e0e0e0" stroke="black"/>
  <rect x="190" y="100" width="30" height="100" fill="#e0e0e0" stroke="black"/>
  <rect x="250" y="40" width="30" height="160" fill="#e0e0e0" stroke="black"/>
  <rect x="310" y="160" width="30" height="40" fill="#e0e0e0" stroke="black"/>
  <text x="75" y="195" font-size="10">5</text>
  <text x="135" y="155" font-size="10">10</text>
  <text x="195" y="95" font-size="10">25</text>
  <text x="255" y="35" font-size="10">40</text>
  <text x="315" y="155" font-size="10">10</text>
  <text x="80" y="220" font-size="12">0</text>
  <text x="140" y="220" font-size="12">1</text>
  <text x="200" y="220" font-size="12">2</text>
  <text x="260" y="220" font-size="12">3</text>
  <text x="320" y="220" font-size="12">4</text>
  <text x="15" y="180" font-size="12" transform="rotate(-90 15,180)">number of students</text>
  <text x="180" y="245" font-size="12">rating</text>
</svg>`,
    options: ["2", "2 4/9", "2 1/2", "2 10/17", "3"],
    correctAnswer: 1,
    explanation: "Sum of ratings = (0*5) + (1*10) + (2*25) + (3*40) + (4*10) = 0 + 10 + 50 + 120 + 40 = 220. Mean = 220 / 90 = 22/9 = 2 4/9.",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_15",
    question: "Which of the following variables are discrete?\nI. Number of players in a playground\nII. The speed in miles per hour of cars passing a certain point on a highway\nIII. Academic rank in class\nIV. Height in inches\nV. Weight in kilograms",
    options: ["I and II", "I, II, and III", "IV and V", "I and III"],
    correctAnswer: 3,
    explanation: "Discrete variables represent counts or whole numbers, while continuous can be any value in a range. I and III are discrete (number of players, rank), while speed, height, and weight are continuous.",
    category: "est1-statistics part2"
  },
  {
    id: "est1_stat_p2_16",
    question: "For whole numbers x and y, the list below has 4 as its mean, median, and mode. What is the value of xy?\n2, 6, 4, 1, x, y",
    options: ["16", "20", "24", "28", "32"],
    correctAnswer: 3,
    explanation: "Mean is 4: sum of 6 numbers is 24. 2+6+4+1+x+y = 24 => x+y = 11. Mode is 4: we need at least two 4s. Since we have one 4, let x=4. Then y=7. (The numbers are 1, 2, 4, 4, 6, 7. Median is (4+4)/2 = 4). So xy = 4 * 7 = 28.",
    category: "est1-statistics part2"
  }
];
