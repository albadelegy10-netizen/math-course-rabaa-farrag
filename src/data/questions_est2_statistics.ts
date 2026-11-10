import { Question } from '../../types';

export const EST2_STATISTICS: Question[] = [
  {
    id: 1,
    question: `A company for renting cars published on their website a summary of the amount they won during the past few years from renting cars and trucks.

| Year | Amount won in $ for renting cars | Amount won in $ for renting trucks |
|-------|------------------------------------|--------------------------------------|
| 2015 | 10004.6 | 7888.3 |
| 2016 | 12456.7 | 7985.2 |
| 2017 | 14899.9 | 8050.2 |
| 2018 | 13899.5 | 9000.5 |
| 2019 | 12003.4 | 8599.4 |
| 2020 | 13990.1 | 7995.5 |

What is the sum of the averages of the amounts won for renting cars and trucks during years 2017 to 2020?`,
    options: ["$8411.4", "$13698.225", "$22109.625", "$25678.725"],
    correctAnswer: 2,
    explanation: `Average amounts for 2017 to 2020:
Sum for renting cars = 14899.9 + 13899.5 + 12003.4 + 13990.1 = 54792.9
Average for renting cars = 54792.9 / 4 = 13698.225
Sum for renting trucks = 8050.2 + 9000.5 + 8599.4 + 7995.5 = 33645.6
Average for renting trucks = 33645.6 / 4 = 8411.4
Sum of averages = 13698.225 + 8411.4 = 22109.625`,
    category: "Statistics"
  },
  {
    id: 2,
    question: `We survey 125 employees at random from each of two companies labeled A and B, and separated into groups based on how many siblings do they have. The results are shown in the table below.

| Number of siblings | Company A | Company B |
|--------------------|-----------|-----------|
| 0 | 15 | 25 |
| 1 | 45 | 40 |
| 2 | 30 | 25 |
| 3 | 25 | 15 |
| 4 | 10 | 20 |

What is the median number of siblings of the sample of employees in company B?`,
    options: ["1", "2", "3", "4"],
    correctAnswer: 0,
    explanation: "Median position for 125 employees is \\frac{(125 + 1)}{2} = 63rd term.\\nFor Company B, cumulative frequencies are:\\n0 siblings: 25\\n1 sibling: 25 + 40 = 65\\nSince 63 falls within the sum up to 1 sibling, the median is 1.",
    category: "Statistics"
  },
  {
    id: 3,
    question: `We survey 125 employees at random from each of two companies labeled A and B, and separated into groups based on how many siblings do they have. The results are shown in the table below.

| Number of siblings | Company A | Company B |
|--------------------|-----------|-----------|
| 0 | 15 | 25 |
| 1 | 45 | 40 |
| 2 | 30 | 25 |
| 3 | 25 | 15 |
| 4 | 10 | 20 |

Which measure of center is the same in both companies?`,
    options: ["Range", "Mean", "Median", "Mode"],
    correctAnswer: 3,
    explanation: "Mean A = 220/125 = 1.76. Mean B = 215/125 = 1.72 (Not the same).\\nMedian A = 2. Median B = 1 (Not the same).\\nThe most frequent number of siblings (Mode) for A is 1 (frequency 45) and for B is 1 (frequency 40). Hence, the mode is the same for both.",
    category: "Statistics"
  },
  {
    id: 4,
    question: `The table below summarizes the grades out of 10 obtained by 4 players in a competition over a total of 5 rounds.

| | Diego | Mark | Tyler | Toni |
|---|---|---|---|---|
| Round 1 | 7 | 3 | 8 | 10 |
| Round 2 | 5 | 10 | 7 | 4 |
| Round 3 | 8 | 9 | 6 | 9 |
| Round 4 | 9 | 5 | 7 | 10 |
| Round 5 | 4 | 8 | 8 | 7 |
| Standard deviation | 1.85 | 2.61 | 0.75 | 2.28 |

The winner is the player with the highest average. Who won the competition?`,
    options: ["Diego", "Toni", "Tyler", "Mark"],
    correctAnswer: 1,
    explanation: "Calculating the sum of grades for each player:\\nDiego = 33\\nMark = 35\\nTyler = 36\\nToni = 40\\nToni has the highest sum, so Toni has the highest average.",
    category: "Statistics"
  },
  {
    id: 5,
    question: `The table below summarizes the grades out of 10 obtained by 4 players in a competition over a total of 5 rounds.

| | Diego | Mark | Tyler | Toni |
|---|---|---|---|---|
| Round 1 | 7 | 3 | 8 | 10 |
| Round 2 | 5 | 10 | 7 | 4 |
| Round 3 | 8 | 9 | 6 | 9 |
| Round 4 | 9 | 5 | 7 | 10 |
| Round 5 | 4 | 8 | 8 | 7 |
| Standard deviation | 1.85 | 2.61 | 0.75 | 2.28 |

Which player was the most consistent in terms of his grades?`,
    options: ["Mark", "Diego", "Toni", "Tyler"],
    correctAnswer: 3,
    explanation: "Consistency in statistics is measured by standard deviation. The lower the standard deviation, the more consistent the data. Tyler has the lowest standard deviation (0.75).",
    category: "Statistics"
  },
  {
    id: 6,
    question: `The graph shows the test grades for a class of 40 students. The data from the graph is summarized below:

| Number of students | Grade |
|---|---|
| 4 | 6 |
| 8 | 14 |
| 12 | 20 |
| 10 | 16 |
| 6 | 8 |

Based on the data above, what is the average grade on the test?`,
    options: ["10", "11.6", "12.8", "14.6"],
    correctAnswer: 3,
    explanation: `Mean = Sum of (Grade × Number of students) / Total students\nMean = (4×6 + 8×14 + 12×20 + 10×16 + 6×8) / 40\nMean = (24 + 112 + 240 + 160 + 48) / 40 = 584 / 40 = 14.6`,
    category: "Statistics"
  },
  {
    id: 7,
    question: `Given the set of data below:
$4, 3, 3, 5, 5, 7, 7, 5, 8, 9, 11, 11$
  
Which of the following statements is/are true?
I. Its mean is an integer greater than 5.
II. Its mean is greater than its mode.
III. Its range is equal to the sum of its mean and half the mode.`,
    options: ["I only", "II only", "I and II", "II and III"],
    correctAnswer: 1,
    explanation: `Sorted data: 3, 3, 4, 5, 5, 5, 7, 7, 8, 9, 11, 11\nMean = (3+3+4+5+5+5+7+7+8+9+11+11) / 12 = 78 / 12 = 6.5\nMode = 5 (most frequent)\nRange = 11 - 3 = 8\nI. Mean is 6.5, not an integer (False).\nII. Mean (6.5) > Mode (5) (True).\nIII. Range (8) vs Mean + half Mode = 6.5 + 2.5 = 9. They are not equal (False).\nOnly II is true.`,
    category: "Statistics"
  },
  {
    id: 8,
    question: "What is the average (arithmetic mean) of $2^{11}$ and $2^{23}$?",
    options: ["$2^{17}$", "$2^{15}$", "$2^{10} + 2^{22}$", "$2^{34}$"],
    correctAnswer: 2,
    explanation: `Average = $(2^{11} + 2^{23}) / 2 = \\frac{2^{11}}{2} + \\frac{2^{23}}{2} = 2^{10} + 2^{22}$.`,
    category: "Statistics"
  },
  {
    id: 9,
    question: `The average of the list $k+2, 2k+4, 2k+5, 3k+5$ is 36.
Find $k$.`,
    options: ["144", "18", "16", "2"],
    correctAnswer: 2,
    explanation: `Mean = Sum / 4\n36 = (k + 2 + 2k + 4 + 2k + 5 + 3k + 5) / 4\n144 = 8k + 16\n128 = 8k\nk = 16`,
    category: "Statistics"
  },
  {
    id: 10,
    question: `The adjacent table shows the heights of 10 randomly chosen buildings in Egypt.

| Building | Height (m) |
|---|---|
| Cairo Tower | 187 |
| Ministry of Foreign Affairs Building, Cairo | 143 |
| Nile City South Tower | 142 |
| El Maadi Residential Tower 16 | 140 |
| Great Pyramid of Giza | 138.8 |
| National Bank of Egypt Tower 1 | 135 |
| Residences Roda Island | 118 |
| Ramses Hilton & World Trade Center | 110 |
| Hilton World Trade Center Residences | 110 |
| Four Seasons Cairo at First Residence | 103 |

What is the sum of the interquartile range and the median of the data shown?`,
    options: ["32", "110", "136.9", "142", "168.9"],
    correctAnswer: 4,
    explanation: `Heights sorted ascending: 103, 110, 110, 118, 135, 138.8, 140, 142, 143, 187.\nMedian (Q2) = average of 5th and 6th = (135 + 138.8) / 2 = 136.9.\nQ1 is the median of the first half (103, 110, 110, 118, 135) -> 110.\nQ3 is the median of the second half (138.8, 140, 142, 143, 187) -> 142.\nInterquartile Range (IQR) = Q3 - Q1 = 142 - 110 = 32.\nSum of IQR and Median = 32 + 136.9 = 168.9.`,
    category: "Statistics"
  },
  {
    id: 11,
    question: `The bar chart shows the scores of a Math test over 100.

| Score | Number of students |
|---|---|
| 40 | 2 |
| 55 | 4 |
| 75 | 5 |
| 80 | 7 |
| 95 | 2 |

What is the median score?`,
    options: ["60", "75", "85", "95"],
    correctAnswer: 1,
    explanation: `Total students = 20.\nThe median position is the average of the 10th and 11th values.\nCumulative frequencies:\nScore 40: 2 students (1st to 2nd)\nScore 55: 2 + 4 = 6 students (3rd to 6th)\nScore 75: 6 + 5 = 11 students (7th to 11th)\nSince both the 10th and 11th values fall into the "75" group, the median is 75.`,
    category: "Statistics"
  },
  {
    id: 12,
    question: `Using the same data:

| Score | Number of students |
|---|---|
| 40 | 2 |
| 55 | 4 |
| 75 | 5 |
| 80 | 7 |
| 95 | 2 |

What is the range of the scores?`,
    options: ["40", "50", "55", "65"],
    correctAnswer: 2,
    explanation: `Range = Maximum score - Minimum score = 95 - 40 = 55.`,
    category: "Statistics"
  },
  {
    id: 13,
    question: `Using the same data:

| Score | Number of students |
|---|---|
| 40 | 2 |
| 55 | 4 |
| 75 | 5 |
| 80 | 7 |
| 95 | 2 |

How many students score at least 55?`,
    options: ["18", "20", "25", "16"],
    correctAnswer: 0,
    explanation: `Students scoring at least 55 = 4 + 5 + 7 + 2 = 18. Alternatively, out of 20 students, only 2 scored below 55 (they scored 40), so 20 - 2 = 18.`,
    category: "Statistics"
  },
  {
    id: 14,
    question: `The arithmetic mean of the set below is 7.25. What is the median of this set?
$n+4, \\; 6, \\; 11, \\; 2n-1$`,
    options: ["6", "7", "6.5", "8.5"],
    correctAnswer: 2,
    explanation: `Mean = (n+4 + 6 + 11 + 2n-1) / 4 = 7.25\n(3n + 20) / 4 = 7.25\n3n + 20 = 29\n3n = 9\nn = 3\nSubstitute n = 3 into the set: 3+4=7, 6, 11, 2(3)-1=5.\nThe set is {7, 6, 11, 5}.\nOrdered: {5, 6, 7, 11}.\nMedian = (6 + 7) / 2 = 6.5.`,
    category: "Statistics"
  },
  {
    id: 15,
    question: `If the mean of a normal distribution is 55 and the standard deviation is 5, then almost all of the scores are likely to fall between:`,
    options: ["40 and 70", "50 and 60", "30 and 55", "55 and 80", "60 and 90"],
    correctAnswer: 0,
    explanation: `The empirical rule states that almost all (99.7%) of the data falls within 3 standard deviations of the mean.\nMean ± 3(SD) = 55 ± 3(5) = 55 ± 15.\nThis gives the range (40, 70).`,
    category: "Statistics"
  },
  {
    id: 16,
    question: `Which of the numbers below is not the mean, median, mode or range of the data set 5, 2, 4, 5, 10, 16, 12, 18, 15, 13?`,
    options: ["10", "11", "5", "8", "16"],
    correctAnswer: 3,
    explanation: `Sorted data: 2, 4, 5, 5, 10, 12, 13, 15, 16, 18.\nMean = Sum/10 = 100/10 = 10.\nMedian = (10+12)/2 = 11.\nMode = 5 (occurs twice).\nRange = 18 - 2 = 16.\nThe number 8 does not match the mean, median, mode, or range.`,
    category: "Statistics"
  }
];
