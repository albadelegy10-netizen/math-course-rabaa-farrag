import { Question } from '../../types';

export const PERCENTAGE_PART1: Question[] = [
  {
    id: "perc_1",
    question: "In his SAT Math practice test, Hamad solved 80% of the first section correctly, which included 20 questions. In the second section that included 38 questions, $\\frac{1250}{19}\\%$ of the questions were solved correctly. How many questions were correct in Hamad's test?",
    options: ["6 questions", "41 questions", "42 questions", "58 questions"],
    correctAnswer: 1,
    explanation: "First section: $0.80 \\times 20 = 16$ correct. Second section: $\\frac{1250}{19}\\% = \\frac{1250}{1900} = \\frac{125}{190}$. Correct in second section = $\\frac{125}{190} \\times 38 = 125 \\times \\frac{38}{190} = 125 \\times \\frac{1}{5} = 25$. Total correct = $16 + 25 = 41$."
  },
  {
    id: "perc_2",
    question: "Tony's salary was $\\$4600$. It increased by 10% in the first year and decreased by 3% in the second year. What will be the salary of Tony at the end of the second year?",
    options: ["$6500", "$5580.4", "$4908.2", "$4800.6"],
    correctAnswer: 2,
    explanation: "Salary after 1st year = $4600 \\times 1.10 = 5060$. Salary after 2nd year = $5060 \\times (1 - 0.03) = 5060 \\times 0.97 = 4908.2$."
  },
  {
    id: "perc_3",
    question: "The table below shows the distance Amir walked every day during the first week of April, 2021.\n\nThursday, April 1st: 1678m\nFriday, April 2nd: 2091m\nSaturday, April 3rd: 1245m\nSunday, April 4th: 1566m\nMonday, April 5th: 2100m\nTuesday, April 6th: 1989m\nWednesday, April 7th: 1888m\n\nIf on Thursday, April 8th, Amir walked the same distance he did the second day of April with an addition of 20%. What is the distance he walked?",
    options: ["4182 m", "2509.2 m", "2420.6 m", "2007.6 m"],
    correctAnswer: 1,
    explanation: "Distance on second day (April 2nd) = 2091m. Distance on April 8th = $2091 + 0.20(2091) = 2091 \\times 1.20 = 2509.2$m."
  },
  {
    id: "perc_4",
    question: "The histogram below shows the results of a survey done by a group of students on the source of news their parents trust most.\n\nTV: 14\nWebsites: 21\nSocial Media: 17\nRadio: 6\n\nWhat is the percentage of parents trusting the news from social media platforms in this survey?",
    options: ["17%", "25.7%", "29.3%", "34%"],
    correctAnswer: 2,
    explanation: "Total parents = $14 + 21 + 17 + 6 = 58$. Parents trusting social media = 17. Percentage = $\\frac{17}{58} \\times 100 \\approx 29.31\\%$."
  },
  {
    id: "perc_5",
    question: "The table below shows the distance Amir walked every day during the first week of April, 2021.\n\nThursday, April 1st: 1678m\nFriday, April 2nd: 2091m\nSaturday, April 3rd: 1245m\nSunday, April 4th: 1566m\nMonday, April 5th: 2100m\nTuesday, April 6th: 1989m\nWednesday, April 7th: 1888m\n\nBy what approximate percent did Amir increase the distance he walked from April 3rd to April 5th?",
    options: ["34%", "60%", "67%", "69%"],
    correctAnswer: 3,
    explanation: "Distance on April 3rd = 1245m. Distance on April 5th = 2100m. Increase = $2100 - 1245 = 855$m. Percent increase = $\\frac{855}{1245} \\times 100 \\approx 68.67\\%$, which is approximately 69%."
  },
  {
    id: "perc_6",
    question: "A company for renting cars published on their website a summary of the amount they won during the past few years from renting cars and trucks.\n\n2015: Cars $10004.6, Trucks $7888.3\n2016: Cars $12456.7, Trucks $7985.2\n2017: Cars $14899.9, Trucks $8050.2\n2018: Cars $13899.5, Trucks $9000.5\n2019: Cars $12003.4, Trucks $8599.4\n2020: Cars $13990.1, Trucks $7995.5\n\nWhat is the percentage increase of the amount won for renting trucks from 2015 to 2017?",
    options: ["1.62%", "2.01%", "2.05%", "48.93%"],
    correctAnswer: 2,
    explanation: "Amount for trucks in 2015 = 7888.3. Amount for trucks in 2017 = 8050.2. Increase = $8050.2 - 7888.3 = 161.9$. Percent increase = $\\frac{161.9}{7888.3} \\times 100 \\approx 2.05\\%$."
  },
  {
    id: "perc_7",
    question: "The histogram below shows the results of a survey done by a group of students on the source of news their parents trust most.\n\nTV: 14\nWebsites: 21\nSocial Media: 17\nRadio: 6\n\nIf this survey was conducted on 120 people, and the results showed the same percentage for each source. How many people approximately would say that radio stations or TV channels are the most trustworthy?",
    options: ["29", "41", "53", "58"],
    correctAnswer: 1,
    explanation: "Total in original survey = $14 + 21 + 17 + 6 = 58$. Radio + TV in original survey = $6 + 14 = 20$. Percentage = $\\frac{20}{58}$. Expected number in 120 people = $\\frac{20}{58} \\times 120 \\approx 41.38$, so approximately 41."
  },
  {
    id: "perc_8",
    question: "If Tony's salary is 25% greater than Sami's salary. Which of the following statements is true?",
    options: ["Sami's salary is lower than Tony's salary by 16%.", "Sami's salary is lower than Tony's salary by 20%.", "Sami's salary is lower than Tony's salary by 25%.", "Sami's salary is lower than Tony's salary by 33%."],
    correctAnswer: 1,
    explanation: "Let Sami's salary be $S$. Tony's salary $T = 1.25S$. So $S = \\frac{T}{1.25} = 0.8T$. This means Sami's salary is $100\\% - 80\\% = 20\\%$ lower than Tony's salary."
  },
  {
    id: "perc_9",
    question: "On a science exam of 40 multiple choice questions, Elvis got 80% of the 15 biology questions correct, 60% of the 15 chemistry questions wrong and 20% of the 10 physics questions wrong. Knowing that Elvis answered all the questions, what percentage of all the questions did he get wrong?",
    options: ["35%", "65%", "50%", "72.5%", "54%"],
    correctAnswer: 0,
    explanation: "Biology wrong: $20\\%$ of $15 = 0.2 \\times 15 = 3$. Chemistry wrong: $60\\%$ of $15 = 0.6 \\times 15 = 9$. Physics wrong: $20\\%$ of $10 = 0.2 \\times 10 = 2$. Total wrong = $3 + 9 + 2 = 14$. Percentage wrong = $\\frac{14}{40} \\times 100 = 35\\%$."
  },
  {
    id: "perc_10",
    question: "Adam and his fiancée worked as freelance graphic designers all year long during 2019 to save money for their wedding and to buy furniture for their home. Their mixed salary each month, in thousands of dollars, is shown in the graph above. (Assume total annual income is 38 thousand dollars, and May's income is 4 thousand dollars).\n\nWhat is the percentage of May's income out of their total annual income?",
    options: ["3.41%", "5.27%", "9.52%", "10.53%"],
    correctAnswer: 3,
    explanation: "May's income = 4. Total income = 38. Percentage = $\\frac{4}{38} \\times 100 \\approx 10.53\\%$."
  },
  {
    id: "perc_11",
    question: "On a science exam of 40 multiple choice questions, Elvis got 80% of the 15 biology questions correct, 60% of the 15 chemistry questions wrong and 20% of the 10 physics questions wrong. Knowing that Elvis answered all the questions, what percentage of all the questions did he get wrong?",
    options: ["35%", "65%", "50%", "72.5%", "54%"],
    correctAnswer: 0,
    explanation: "Biology wrong: $20\\%$ of $15 = 3$. Chemistry wrong: $60\\%$ of $15 = 9$. Physics wrong: $20\\%$ of $10 = 2$. Total wrong = $3 + 9 + 2 = 14$. Percentage wrong = $\\frac{14}{40} \\times 100 = 35\\%$."
  },
  {
    id: "perc_12",
    question: "A shop sells two sizes of doughnuts: mini and regular. Mini doughnuts have a diameter of 1.8 inches while regular ones have a diameter of 3 inches. Approximately, by what percentage is a regular normal doughnut larger (in area) than a mini doughnut?",
    options: ["67%", "67\\pi%", "78%", "178%"],
    correctAnswer: 3,
    explanation: "Area of mini = $\\pi (0.9)^2 = 0.81\\pi$. Area of regular = $\\pi (1.5)^2 = 2.25\\pi$. Percentage increase = $\\frac{2.25\\pi - 0.81\\pi}{0.81\\pi} \\times 100 = \\frac{1.44}{0.81} \\times 100 \\approx 177.7\\% \\approx 178\\%$."
  },
  {
    id: "perc_13",
    question: "A shop sells two sizes of doughnuts: mini and regular. Mini doughnuts have a diameter of 1.8 inches while regular ones have a diameter of 3 inches. Approximately, by what percentage is a regular normal doughnut larger (in area) than a mini doughnut?",
    options: ["67%", "67\\pi%", "78%", "178%"],
    correctAnswer: 3,
    explanation: "Area of mini = $\\pi (0.9)^2 = 0.81\\pi$. Area of regular = $\\pi (1.5)^2 = 2.25\\pi$. Percentage increase = $\\frac{2.25\\pi - 0.81\\pi}{0.81\\pi} \\times 100 = \\frac{1.44}{0.81} \\times 100 \\approx 177.7\\% \\approx 178\\%$."
  },
  {
    id: "perc_14",
    question: "The table below summarizes the results of a survey about travel destination preferences for a group of 750 university students of 4 different majors.\n\nHistory: Rome 65, Paris 75, Tokyo 40, NYC 70, Total 250\nMath: Rome 35, Paris 65, Tokyo 115, NYC 60, Total 275\nAudit: Rome 35, Paris 10, Tokyo 50, NYC 30, Total 125\nIT: Rome 15, Paris 25, Tokyo 20, NYC 40, Total 100\n\nIn which major can you find the highest percentage of students who prefer NYC?",
    options: ["History", "IT", "Audit", "Math"],
    correctAnswer: 1,
    explanation: "History: $70/250 = 28\\%$. Math: $60/275 \\approx 21.8\\%$. Audit: $30/125 = 24\\%$. IT: $40/100 = 40\\%$. IT has the highest percentage."
  },
  {
    id: "perc_15",
    question: "A company lost 20% of their stock the first year, then 26% the second year. In the third year, their stock increased by 30%. Which of the following statements is true?",
    options: ["The company's stock increased by 23.04% in comparison with the price of the stock before the start of the loss.", "The company's stock decreased by 23.04% in comparison with the price of the stock before the start of the loss.", "The company's stock decreased by 76.96% in comparison with the price of the stock before the start of the loss.", "The company's stock increased by 76.96% in comparison with the price of the stock before the start of the loss."],
    correctAnswer: 1,
    explanation: "Let initial stock be $S$. After year 1: $0.80S$. After year 2: $0.80S \\times (1 - 0.26) = 0.80S \\times 0.74 = 0.592S$. After year 3: $0.592S \\times 1.30 = 0.7696S$. The stock is $76.96\\%$ of the original, which means it decreased by $100\\% - 76.96\\% = 23.04\\%$."
  },
  {
    id: "perc_16",
    question: "If Tony's salary is 25% greater than Sami's salary. Which of the following statements is true?",
    options: ["Sami's salary is lower than Tony's salary by 16%.", "Sami's salary is lower than Tony's salary by 20%.", "Sami's salary is lower than Tony's salary by 25%.", "Sami's salary is lower than Tony's salary by 33%."],
    correctAnswer: 1,
    explanation: "Let Sami's salary be $S$. Tony's salary $T = 1.25S$. So $S = \\frac{T}{1.25} = 0.8T$. This means Sami's salary is $100\\% - 80\\% = 20\\%$ lower than Tony's salary."
  },
  {
    id: "perc_17",
    question: "In a large village, 40 citizens were surveyed by the municipality about their favorite afternoon snack. Their responses were collected and represented in a pie chart. It is noteworthy that the majority of the 40 citizens chose chocolate as their favorite afternoon snack (45%). Biscuits were 30%, nuts 15%, and fruits 10%.\n\nIf the least chosen snack was fruits, and biscuits were considered the second-best popular option, how many citizens chose nuts as their favorite afternoon snack?",
    options: ["4 citizens", "6 citizens", "8 citizens", "12 citizens"],
    correctAnswer: 1,
    explanation: "From the pie chart: 45% (chocolate, majority), 30% (biscuits, second), 15% (nuts), 10% (fruits, least). Citizens who chose nuts = $15\\%$ of $40 = 0.15 \\times 40 = 6$ citizens."
  },
  {
    id: "perc_18",
    question: "The government sent the survey back to the municipality to apply a major modification. What could be the best reason for this return?",
    options: ["The survey should include more citizens who favor fruits.", "The survey should include more teenagers.", "The pie chart does not represent the number of citizens who favor each type of snack.", "The survey is biased as it does not represent the preferences of all citizens in the village."],
    correctAnswer: 3,
    explanation: "Surveying only 40 citizens in a 'large village' is a very small sample size and likely biased, not representing the preferences of all citizens."
  },
  {
    id: "perc_19",
    question: "From 2020 to 2021, the amount in Tom's bank account decreased by 11% to $\\$49840$. What was the initial amount in her bank account?",
    options: ["$54820", "$44358", "$56000", "$45309"],
    correctAnswer: 2,
    explanation: "Let initial amount be $x$. $x(1 - 0.11) = 49840 \\Rightarrow 0.89x = 49840 \\Rightarrow x = \\frac{49840}{0.89} = 56000$."
  },
  {
    id: "perc_20",
    question: "In planning maintenance for a city's infrastructure, a civil engineer estimates that, starting from the present, the population of the city will decrease by 15% every 25 years. If the present population of the city is 40,000, which of the following expressions represents the engineer's estimate of the population of the city $t$ years from now?",
    options: ["$40,000(0.15)^{25t}$", "$40,000(0.85)^{25t}$", "$40,000(0.85)^{\\frac{t}{25}}$", "$0.85(40,000)^{\\frac{t}{25}}$"],
    correctAnswer: 2,
    explanation: "Initial population = 40,000. Decrease by 15% means multiplying by $1 - 0.15 = 0.85$. This happens every 25 years, so the exponent is $\\frac{t}{25}$. The expression is $40,000(0.85)^{\\frac{t}{25}}$."
  }
];
