import { Question } from '../../types';

export const EST2_EST1_STATISTIC: Question[] = [
  {
    id: "est2_stat_1",
    question: "A data set consists of six numbers: $\\{12, 18, 25, 31, x, 44\\}$. If the arithmetic mean of the data set is $26$, what is the value of $x$?",
    options: [
      "$20$",
      "$22$",
      "$24$",
      "$26$",
      "$28$"
    ],
    correctAnswer: 1,
    explanation: "The formula for the arithmetic mean $\\bar{x}$ of $n$ numbers is:\n$$\\bar{x} = \\frac{\\sum x_i}{n}$$\nFor $n = 6$ and $\\bar{x} = 26$:\n$$26 = \\frac{12 + 18 + 25 + 31 + x + 44}{6}$$\nMultiply both sides by $6$:\n$$156 = 130 + x$$\n$$x = 156 - 130 = 26$$\nWait, let's verify the sum: $12 + 18 = 30$, $30 + 25 = 55$, $55 + 31 = 86$, $86 + 44 = 130$. $156 - 130 = 26$. Therefore, $x = 26$.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Mean", "Data Set"]
  },
  {
    id: "est2_stat_2",
    question: "The table below shows the distribution of scores obtained by $25$ students on a $10$-point mathematics quiz.\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Score</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Frequency</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$6$</td><td class=\"border border-gray-400 px-2 py-1\">$4$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$7$</td><td class=\"border border-gray-400 px-2 py-1\">$7$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$8$</td><td class=\"border border-gray-400 px-2 py-1\">$8$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$9$</td><td class=\"border border-gray-400 px-2 py-1\">$5$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$10$</td><td class=\"border border-gray-400 px-2 py-1\">$1$</td></tr>\n  </tbody>\n</table>\n\nWhat is the mean score of the $25$ students?",
    options: [
      "$7.48$",
      "$7.68$",
      "$7.80$",
      "$8.00$",
      "$8.12$"
    ],
    correctAnswer: 1,
    explanation: "To calculate the weighted mean from a frequency table:\n$$\\bar{x} = \\frac{\\sum (\\text{Score} \\times \\text{Frequency})}{\\sum \\text{Frequency}}$$\nCalculate the sum of the products:\n$$\\sum (x \\cdot f) = (6 \\times 4) + (7 \\times 7) + (8 \\times 8) + (9 \\times 5) + (10 \\times 1)$$\n$$= 24 + 49 + 64 + 45 + 10 = 192$$\nDivide by total frequency $N = 25$:\n$$\\bar{x} = \\frac{192}{25} = 7.68$$",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Mean", "Frequency Table"]
  },
  {
    id: "est2_stat_3",
    question: "The histogram below displays the number of books read during summer break by a group of $30$ high school students. In which interval does the median number of books read lie?",
    svg: `<svg viewBox="0 0 320 220" class="w-full max-w-sm mx-auto">
      <line x1="40" y1="180" x2="300" y2="180" stroke="currentColor" stroke-width="2"/>
      <line x1="40" y1="180" x2="40" y2="20" stroke="currentColor" stroke-width="2"/>
      <!-- Grid lines -->
      <line x1="40" y1="140" x2="300" y2="140" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2" opacity="0.4"/>
      <line x1="40" y1="100" x2="300" y2="100" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2" opacity="0.4"/>
      <line x1="40" y1="60" x2="300" y2="60" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2" opacity="0.4"/>
      <line x1="40" y1="20" x2="300" y2="20" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2" opacity="0.4"/>
      <!-- Y-axis labels -->
      <text x="32" y="184" text-anchor="end" font-size="10" fill="currentColor">0</text>
      <text x="32" y="144" text-anchor="end" font-size="10" fill="currentColor">3</text>
      <text x="32" y="104" text-anchor="end" font-size="10" fill="currentColor">6</text>
      <text x="32" y="64" text-anchor="end" font-size="10" fill="currentColor">9</text>
      <text x="32" y="24" text-anchor="end" font-size="10" fill="currentColor">12</text>
      <!-- Bars -->
      <!-- 0-1 books: freq 6 (height 80 => y=100) -->
      <rect x="50" y="100" width="45" height="80" fill="#3b82f6" fill-opacity="0.8" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="72.5" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">6</text>
      <!-- 2-3 books: freq 10 (height 133.3 => y=46.7) -->
      <rect x="95" y="47" width="45" height="133" fill="#3b82f6" fill-opacity="0.8" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="117.5" y="41" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">10</text>
      <!-- 4-5 books: freq 8 (height 106.7 => y=73.3) -->
      <rect x="140" y="73" width="45" height="107" fill="#3b82f6" fill-opacity="0.8" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="162.5" y="67" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">8</text>
      <!-- 6-7 books: freq 4 (height 53.3 => y=126.7) -->
      <rect x="185" y="127" width="45" height="53" fill="#3b82f6" fill-opacity="0.8" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="207.5" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">4</text>
      <!-- 8-9 books: freq 2 (height 26.7 => y=153.3) -->
      <rect x="230" y="153" width="45" height="27" fill="#3b82f6" fill-opacity="0.8" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="252.5" y="147" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">2</text>
      <!-- X-axis labels -->
      <text x="72.5" y="196" text-anchor="middle" font-size="10" fill="currentColor">0-1</text>
      <text x="117.5" y="196" text-anchor="middle" font-size="10" fill="currentColor">2-3</text>
      <text x="162.5" y="196" text-anchor="middle" font-size="10" fill="currentColor">4-5</text>
      <text x="207.5" y="196" text-anchor="middle" font-size="10" fill="currentColor">6-7</text>
      <text x="252.5" y="196" text-anchor="middle" font-size="10" fill="currentColor">8-9</text>
      <text x="170" y="214" text-anchor="middle" font-size="11" font-weight="500" fill="currentColor">Number of Books</text>
    </svg>`,
    options: [
      "$0 - 1$",
      "$2 - 3$",
      "$4 - 5$",
      "$6 - 7$",
      "$8 - 9$"
    ],
    correctAnswer: 1,
    explanation: "Total number of students $N = 30$.\nThe median is the average of the $15^{\\text{th}}$ and $16^{\\text{th}}$ values when ordered.\nLet's find the cumulative frequencies across the intervals:\n- Interval $0 - 1$: $6$ students (students $1$ to $6$)\n- Interval $2 - 3$: $6 + 10 = 16$ students (students $7$ to $16$)\nSince both the $15^{\\text{th}}$ and $16^{\\text{th}}$ students fall into the cumulative count of $16$, the median is located in the $2 - 3$ interval.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Median", "Histogram"]
  },
  {
    id: "est2_stat_4",
    question: "The box-and-whisker plot below summarizes the distribution of daily calorie burn (in tens of calories) for a group of athletes.\n\nBased on the plot, what is the Interquartile Range (IQR), and what is the lower boundary threshold for identifying mild outliers?",
    svg: `<svg viewBox="0 0 340 140" class="w-full max-w-sm mx-auto">
      <!-- Axis -->
      <line x1="30" y1="100" x2="310" y2="100" stroke="currentColor" stroke-width="1.5"/>
      <!-- Ticks and labels (Scale: 10 to 90 => x = 30 + (val-10)*3.5) -->
      <!-- 10: 30, 20: 65, 30: 100, 40: 135, 50: 170, 60: 205, 70: 240, 80: 275, 90: 310 -->
      <line x1="30" y1="100" x2="30" y2="106" stroke="currentColor" stroke-width="1.5"/>
      <text x="30" y="118" text-anchor="middle" font-size="9" fill="currentColor">10</text>
      <line x1="65" y1="100" x2="65" y2="106" stroke="currentColor" stroke-width="1.5"/>
      <text x="65" y="118" text-anchor="middle" font-size="9" fill="currentColor">20</text>
      <line x1="100" y1="100" x2="100" y2="106" stroke="currentColor" stroke-width="1.5"/>
      <text x="100" y="118" text-anchor="middle" font-size="9" fill="currentColor">30</text>
      <line x1="135" y1="100" x2="135" y2="106" stroke="currentColor" stroke-width="1.5"/>
      <text x="135" y="118" text-anchor="middle" font-size="9" fill="currentColor">40</text>
      <line x1="170" y1="100" x2="170" y2="106" stroke="currentColor" stroke-width="1.5"/>
      <text x="170" y="118" text-anchor="middle" font-size="9" fill="currentColor">50</text>
      <line x1="205" y1="100" x2="205" y2="106" stroke="currentColor" stroke-width="1.5"/>
      <text x="205" y="118" text-anchor="middle" font-size="9" fill="currentColor">60</text>
      <line x1="240" y1="100" x2="240" y2="106" stroke="currentColor" stroke-width="1.5"/>
      <text x="240" y="118" text-anchor="middle" font-size="9" fill="currentColor">70</text>
      <line x1="275" y1="100" x2="275" y2="106" stroke="currentColor" stroke-width="1.5"/>
      <text x="275" y="118" text-anchor="middle" font-size="9" fill="currentColor">80</text>
      <!-- Boxplot components: Min=16(51), Q1=28(93), Med=44(149), Q3=58(198), Max=82(282) -->
      <!-- Whiskers -->
      <line x1="51" y1="50" x2="93" y2="50" stroke="currentColor" stroke-width="1.5"/>
      <line x1="51" y1="40" x2="51" y2="60" stroke="currentColor" stroke-width="1.5"/>
      <line x1="198" y1="50" x2="282" y2="50" stroke="currentColor" stroke-width="1.5"/>
      <line x1="282" y1="40" x2="282" y2="60" stroke="currentColor" stroke-width="1.5"/>
      <!-- Box -->
      <rect x="93" y="30" width="105" height="40" fill="#10b981" fill-opacity="0.25" stroke="#059669" stroke-width="2"/>
      <!-- Median line -->
      <line x1="149" y1="30" x2="149" y2="70" stroke="#b91c1c" stroke-width="2.5"/>
      <!-- Value callouts -->
      <text x="51" y="24" text-anchor="middle" font-size="9" fill="currentColor">16</text>
      <text x="93" y="24" text-anchor="middle" font-size="9" fill="currentColor">28</text>
      <text x="149" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">44</text>
      <text x="198" y="24" text-anchor="middle" font-size="9" fill="currentColor">58</text>
      <text x="282" y="24" text-anchor="middle" font-size="9" fill="currentColor">82</text>
    </svg>`,
    options: [
      "$\\text{IQR} = 30,\\ \\text{Lower Outlier Threshold} = -17$",
      "$\\text{IQR} = 30,\\ \\text{Lower Outlier Threshold} = -2$",
      "$\\text{IQR} = 30,\\ \\text{Lower Outlier Threshold} = 13$",
      "$\\text{IQR} = 26,\\ \\text{Lower Outlier Threshold} = 2$",
      "$\\text{IQR} = 30,\\ \\text{Lower Outlier Threshold} = 0$"
    ],
    correctAnswer: 0,
    explanation: "From the five-number summary on the box plot:\n- $\\text{Minimum} = 16$\n- $Q_1 = 28$\n- $\\text{Median} = 44$\n- $Q_3 = 58$\n- $\\text{Maximum} = 82$\n\n1. Calculate the Interquartile Range (IQR):\n$$\\text{IQR} = Q_3 - Q_1 = 58 - 28 = 30$$\n\n2. Lower outlier threshold is given by the $1.5 \\times \\text{IQR}$ rule:\n$$\\text{Threshold} = Q_1 - 1.5(\\text{IQR}) = 28 - 1.5(30) = 28 - 45 = -17$$",
    category: "( Est1- statistic)",
    topics: ["Statistics", "IQR", "Box Plot"]
  },
  {
    id: "est2_stat_5",
    question: "A data set $X$ has an arithmetic mean of $\\mu_X = 60$ and a standard deviation of $\\sigma_X = 8$. If a new data set $Y$ is created by the linear transformation $Y = 3X - 25$, what are the mean $\\mu_Y$ and standard deviation $\\sigma_Y$ of data set $Y$?",
    options: [
      "$\\mu_Y = 155,\\ \\sigma_Y = 8$",
      "$\\mu_Y = 155,\\ \\sigma_Y = 24$",
      "$\\mu_Y = 155,\\ \\sigma_Y = -1$",
      "$\\mu_Y = 180,\\ \\sigma_Y = 24$",
      "$\\mu_Y = 180,\\ \\sigma_Y = 49$"
    ],
    correctAnswer: 1,
    explanation: "For any linear transformation of a random variable $Y = aX + b$:\n1. The mean scales by $a$ and shifts by $b$:\n$$\\mu_Y = a\\mu_X + b = 3(60) - 25 = 180 - 25 = 155$$\n2. The standard deviation scales strictly by $|a|$ (shifting by $b$ does not change the spread):\n$$\\sigma_Y = |a|\\sigma_X = |3| \\times 8 = 24$$\nThus, $\\mu_Y = 155$ and $\\sigma_Y = 24$.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Standard Deviation", "Linear Transformation"]
  },
  {
    id: "est2_stat_6",
    question: "Section A of an EST2 prep class has $15$ students with an average score of $74$. Section B has $25$ students with an average score of $86$. What is the combined mean score of all $40$ students?",
    options: [
      "$78.5$",
      "$80.0$",
      "$81.5$",
      "$82.0$",
      "$83.5$"
    ],
    correctAnswer: 2,
    explanation: "To find the combined (weighted) mean of two groups:\n$$\\bar{x}_{\\text{combined}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$$\n$$\\bar{x}_{\\text{combined}} = \\frac{(15 \\times 74) + (25 \\times 86)}{15 + 25}$$\n$$= \\frac{1110 + 2150}{40} = \\frac{3260}{40} = 81.5$$",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Mean", "Weighted Average"]
  },
  {
    id: "est2_stat_7",
    question: "The two histograms below show the distribution of test scores for Class 1 and Class 2, both having the same sample size $N = 40$ and identical mean $\\mu = 50$.\n\nWhich of the following statements comparing their standard deviations $\\sigma_1$ and $\\sigma_2$ must be true?",
    svg: `<svg viewBox="0 0 340 180" class="w-full max-w-sm mx-auto">
      <!-- Subplot 1: Class 1 (Clustered in Center) -->
      <text x="85" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">Class 1</text>
      <line x1="20" y1="140" x2="150" y2="140" stroke="currentColor" stroke-width="1.5"/>
      <rect x="25" y="125" width="20" height="15" fill="#6366f1" fill-opacity="0.8"/>
      <rect x="47" y="95" width="20" height="45" fill="#6366f1" fill-opacity="0.8"/>
      <rect x="69" y="35" width="20" height="105" fill="#6366f1" fill-opacity="0.8"/>
      <rect x="91" y="95" width="20" height="45" fill="#6366f1" fill-opacity="0.8"/>
      <rect x="113" y="125" width="20" height="15" fill="#6366f1" fill-opacity="0.8"/>
      <text x="35" y="152" text-anchor="middle" font-size="8" fill="currentColor">30</text>
      <text x="57" y="152" text-anchor="middle" font-size="8" fill="currentColor">40</text>
      <text x="79" y="152" text-anchor="middle" font-size="8" fill="currentColor">50</text>
      <text x="101" y="152" text-anchor="middle" font-size="8" fill="currentColor">60</text>
      <text x="123" y="152" text-anchor="middle" font-size="8" fill="currentColor">70</text>

      <!-- Subplot 2: Class 2 (Spread out at Tails) -->
      <text x="255" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="currentColor">Class 2</text>
      <line x1="190" y1="140" x2="320" y2="140" stroke="currentColor" stroke-width="1.5"/>
      <rect x="195" y="55" width="20" height="85" fill="#ec4899" fill-opacity="0.8"/>
      <rect x="217" y="105" width="20" height="35" fill="#ec4899" fill-opacity="0.8"/>
      <rect x="239" y="125" width="20" height="15" fill="#ec4899" fill-opacity="0.8"/>
      <rect x="261" y="105" width="20" height="35" fill="#ec4899" fill-opacity="0.8"/>
      <rect x="283" y="55" width="20" height="85" fill="#ec4899" fill-opacity="0.8"/>
      <text x="205" y="152" text-anchor="middle" font-size="8" fill="currentColor">30</text>
      <text x="227" y="152" text-anchor="middle" font-size="8" fill="currentColor">40</text>
      <text x="249" y="152" text-anchor="middle" font-size="8" fill="currentColor">50</text>
      <text x="271" y="152" text-anchor="middle" font-size="8" fill="currentColor">60</text>
      <text x="293" y="152" text-anchor="middle" font-size="8" fill="currentColor">70</text>
    </svg>`,
    options: [
      "$\\sigma_1 > \\sigma_2$",
      "$\\sigma_1 < \\sigma_2$",
      "$\\sigma_1 = \\sigma_2$",
      "$\\sigma_1 = 0$",
      "The relationship cannot be determined without the exact numerical values."
    ],
    correctAnswer: 1,
    explanation: "Standard deviation measures the spread or dispersion of data points around the mean:\n- In **Class 1**, the vast majority of observations are tightly concentrated near the center (mean = $50$), resulting in smaller squared deviations $(x_i - \\mu)^2$.\n- In **Class 2**, the observations are heavily distributed in the extreme tails ($30$ and $70$), creating much larger distances from the mean.\nTherefore, the standard deviation of Class 2 is greater than that of Class 1: $\\sigma_1 < \\sigma_2$.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Standard Deviation", "Histogram"]
  },
  {
    id: "est2_stat_8",
    question: "The frequency table below shows the weekly work hours for $40$ employees at an engineering firm.\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Hours Worked</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Frequency</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$20$</td><td class=\"border border-gray-400 px-2 py-1\">$6$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$30$</td><td class=\"border border-gray-400 px-2 py-1\">$12$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$35$</td><td class=\"border border-gray-400 px-2 py-1\">$14$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$40$</td><td class=\"border border-gray-400 px-2 py-1\">$8$</td></tr>\n  </tbody>\n</table>\n\nWhat is the median number of hours worked per week?",
    options: [
      "$30$",
      "$32.5$",
      "$35$",
      "$37.5$",
      "$40$"
    ],
    correctAnswer: 2,
    explanation: "Total number of employees $N = 40$ (even).\nThe median is the average of the $20^{\\text{th}}$ and $21^{\\text{st}}$ ordered observations.\nLet's construct cumulative frequencies:\n- Up to $20$ hours: $6$ employees (ranks $1 - 6$)\n- Up to $30$ hours: $6 + 12 = 18$ employees (ranks $7 - 18$)\n- Up to $35$ hours: $18 + 14 = 32$ employees (ranks $19 - 32$)\nBoth the $20^{\\text{th}}$ and $21^{\\text{st}}$ employees fall within the $35$-hour category.\nTherefore, the median is $\\frac{35 + 35}{2} = 35$ hours.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Median", "Frequency Table"]
  },
  {
    id: "est2_stat_9",
    question: "Consider the data set: $\\{4, 7, 7, 8, 9, 13\\}$. What is the exact population standard deviation $\\sigma$ of this data set?",
    options: [
      "$\\sqrt{\\frac{22}{3}}$",
      "$\\sqrt{8}$",
      "$\\frac{22}{3}$",
      "$\\sqrt{\\frac{44}{5}}$",
      "$3$"
    ],
    correctAnswer: 0,
    explanation: "Step 1: Calculate the mean $\\mu$:\n$$\\mu = \\frac{4 + 7 + 7 + 8 + 9 + 13}{6} = \\frac{48}{6} = 8$$\n\nStep 2: Find deviations $(x_i - \\mu)$ and their squares $(x_i - \\mu)^2$:\n- $(4 - 8)^2 = (-4)^2 = 16$\n- $(7 - 8)^2 = (-1)^2 = 1$\n- $(7 - 8)^2 = (-1)^2 = 1$\n- $(8 - 8)^2 = 0^2 = 0$\n- $(9 - 8)^2 = 1^2 = 1$\n- $(13 - 8)^2 = 5^2 = 25$\n\nStep 3: Sum of squared deviations:\n$$\\sum (x_i - \\mu)^2 = 16 + 1 + 1 + 0 + 1 + 25 = 44$$\n\nStep 4: Population standard deviation $\\sigma$:\n$$\\sigma = \\sqrt{\\frac{\\sum (x_i - \\mu)^2}{N}} = \\sqrt{\\frac{44}{6}} = \\sqrt{\\frac{22}{3}}$$",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Standard Deviation", "Data Set"]
  },
  {
    id: "est2_stat_10",
    question: "A data set of $11$ distinct positive integers has a mean of $45$, a median of $42$, a range of $50$, and a standard deviation of $16$. The maximum value in the set is $80$. If the value $80$ is removed from the data set, which of the following statements must be true regarding the new $10$-number data set?",
    options: [
      "The mean decreases, and the range decreases.",
      "The mean decreases, but the range remains the same.",
      "The median increases, and the standard deviation increases.",
      "The mean increases, and the range decreases.",
      "Both the mean and the median remain unchanged."
    ],
    correctAnswer: 0,
    explanation: "1. **Mean**: The removed value is $80$, which is strictly greater than the original mean ($80 > 45$). Removing an observation larger than the mean always **decreases** the mean of the remaining set.\n2. **Range**: Since $80$ was the unique maximum value, removing it means the new maximum must be strictly smaller than $80$. With the minimum value unchanged, $\\text{New Range} = \\text{New Max} - \\text{Min} < 80 - \\text{Min}$, so the range **decreases**.\nTherefore, the mean decreases, and the range decreases.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Mean", "Range", "Outliers"]
  },
  {
    id: "est2_stat_11",
    question: "The table below lists the frequency distribution of integers in a sample.\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Value ($x$)</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Frequency ($f$)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$12$</td><td class=\"border border-gray-400 px-2 py-1\">$3$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$15$</td><td class=\"border border-gray-400 px-2 py-1\">$9$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$18$</td><td class=\"border border-gray-400 px-2 py-1\">$14$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$21$</td><td class=\"border border-gray-400 px-2 py-1\">$8$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$24$</td><td class=\"border border-gray-400 px-2 py-1\">$2$</td></tr>\n  </tbody>\n</table>\n\nWhat is the value of $\\text{Mode} + \\text{Range}$ for this distribution?",
    options: [
      "$26$",
      "$28$",
      "$30$",
      "$32$",
      "$34$"
    ],
    correctAnswer: 2,
    explanation: "1. **Mode**: The value with the highest frequency ($f = 14$) is $18$.\n2. **Range**: $\\text{Maximum Value} - \\text{Minimum Value} = 24 - 12 = 12$.\n3. Sum: $\\text{Mode} + \\text{Range} = 18 + 12 = 30$.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Mode", "Range", "Frequency Table"]
  },
  {
    id: "est2_stat_12",
    question: "Test scores on a standardized EST2 Mathematics examination are normally distributed with a mean of $\\mu = 640$ and a standard deviation of $\\sigma = 60$. According to the Empirical Rule ($68-95-99.7\\%$ rule), what percentage of test-takers scored between $520$ and $760$?",
    options: [
      "$68.2\\%$",
      "$95.4\\%$",
      "$99.7\\%$",
      "$47.7\\%$",
      "$81.5\\%$"
    ],
    correctAnswer: 1,
    explanation: "Calculate the standard score (z-scores) for both boundaries:\n- For $X = 520$: $z = \\frac{520 - 640}{60} = \\frac{-120}{60} = -2$\n- For $X = 760$: $z = \\frac{760 - 640}{60} = \\frac{120}{60} = +2$\n\nAccording to the Empirical Rule for a normal distribution:\n- Approximately $68.2\\%$ of the data lies within $\\mu \\pm 1\\sigma$\n- Approximately $95.4\\%$ of the data lies within $\\mu \\pm 2\\sigma$\n- Approximately $99.7\\%$ of the data lies within $\\mu \\pm 3\\sigma$\n\nSince the interval $[520, 760]$ represents $[\r\\mu - 2\\sigma, \\mu + 2\\sigma]$, approximately $95.4\\%$ (or $95\\%$) of test-takers scored within this range.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Standard Deviation", "Normal Distribution"]
  },
  {
    id: "est2_stat_13",
    question: "The histogram below shows the one-way commute times (in minutes) for $80$ employees at a technology firm. What percentage of the employees commute for at least $20$ minutes?",
    svg: `<svg viewBox="0 0 320 200" class="w-full max-w-sm mx-auto">
      <line x1="40" y1="160" x2="300" y2="160" stroke="currentColor" stroke-width="2"/>
      <line x1="40" y1="160" x2="40" y2="20" stroke="currentColor" stroke-width="2"/>
      <!-- Grid -->
      <line x1="40" y1="125" x2="300" y2="125" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2" opacity="0.3"/>
      <line x1="40" y1="90" x2="300" y2="90" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2" opacity="0.3"/>
      <line x1="40" y1="55" x2="300" y2="55" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2" opacity="0.3"/>
      <line x1="40" y1="20" x2="300" y2="20" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2" opacity="0.3"/>
      <!-- Y-labels (Scale: 0, 7, 14, 21, 28) -->
      <text x="32" y="164" text-anchor="end" font-size="9" fill="currentColor">0</text>
      <text x="32" y="129" text-anchor="end" font-size="9" fill="currentColor">7</text>
      <text x="32" y="94" text-anchor="end" font-size="9" fill="currentColor">14</text>
      <text x="32" y="59" text-anchor="end" font-size="9" fill="currentColor">21</text>
      <text x="32" y="24" text-anchor="end" font-size="9" fill="currentColor">28</text>
      <!-- Bars: width 55 -->
      <!-- 0-10: 12 (height 60 => y=100) -->
      <rect x="50" y="100" width="55" height="60" fill="#f59e0b" fill-opacity="0.8" stroke="#d97706" stroke-width="1.5"/>
      <text x="77.5" y="94" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">12</text>
      <!-- 10-20: 28 (height 140 => y=20) -->
      <rect x="105" y="20" width="55" height="140" fill="#f59e0b" fill-opacity="0.8" stroke="#d97706" stroke-width="1.5"/>
      <text x="132.5" y="15" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">28</text>
      <!-- 20-30: 24 (height 120 => y=40) -->
      <rect x="160" y="40" width="55" height="120" fill="#059669" fill-opacity="0.85" stroke="#047857" stroke-width="1.5"/>
      <text x="187.5" y="34" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">24</text>
      <!-- 30-40: 16 (height 80 => y=80) -->
      <rect x="215" y="80" width="55" height="80" fill="#059669" fill-opacity="0.85" stroke="#047857" stroke-width="1.5"/>
      <text x="242.5" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">16</text>
      <!-- X-labels -->
      <text x="77.5" y="174" text-anchor="middle" font-size="9" fill="currentColor">0-10</text>
      <text x="132.5" y="174" text-anchor="middle" font-size="9" fill="currentColor">10-20</text>
      <text x="187.5" y="174" text-anchor="middle" font-size="9" fill="currentColor">20-30</text>
      <text x="242.5" y="174" text-anchor="middle" font-size="9" fill="currentColor">30-40</text>
      <text x="170" y="192" text-anchor="middle" font-size="10" font-weight="500" fill="currentColor">Commute Time (minutes)</text>
    </svg>`,
    options: [
      "$40\\%$",
      "$45\\%$",
      "$50\\%$",
      "$55\\%$",
      "$60\\%$"
    ],
    correctAnswer: 2,
    explanation: "\"At least $20$ minutes\" includes all employees in the intervals $20 - 30$ and $30 - 40$:\n$$\\text{Number of employees} = 24 + 16 = 40$$\nTotal number of employees $= 80$.\n$$\\text{Percentage} = \\frac{40}{80} \\times 100\\% = 50\\%$$",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Histogram", "Percentages"]
  },
  {
    id: "est2_stat_14",
    question: "The arithmetic mean of five distinct positive integers $a, b, c, d, e$ is $24$. If $a < b < c < d < e$ and the median of the five integers is $18$, what is the greatest possible value that $e$ could have?",
    options: [
      "$76$",
      "$78$",
      "$80$",
      "$82$",
      "$84$"
    ],
    correctAnswer: 2,
    explanation: "Given that the mean of $5$ integers is $24$, their sum is:\n$$a + b + c + d + e = 5 \\times 24 = 120$$\nSince the numbers are arranged in ascending order, the median is the third number:\n$$c = 18$$\nTo maximize $e$, we must make the other integers $a, b,$ and $d$ as small as possible while preserving the condition $1 \\le a < b < c < d < e$:\n- The smallest distinct positive integers for $a$ and $b$ are $a = 1$ and $b = 2$.\n- The smallest integer strictly greater than $c = 18$ is $d = 19$.\nNow calculate $e$:\n$$1 + 2 + 18 + 19 + e = 120$$\n$$40 + e = 120 \\implies e = 80$$\nThus, the greatest possible value of $e$ is $80$.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Mean", "Median", "Algebraic Problems"]
  },
  {
    id: "est2_stat_15",
    question: "What is the Interquartile Range (IQR) of the following eleven ordered data points?\n$$\\{5, 9, 12, 15, 18, 20, 24, 27, 30, 35, 42\\}$$",
    options: [
      "$15$",
      "$18$",
      "$20$",
      "$22$",
      "$24$"
    ],
    correctAnswer: 1,
    explanation: "For $N = 11$ ordered values:\n1. **Median ($Q_2$)**: The $6^{\\text{th}}$ value is $20$.\n2. **Lower Half** (excluding the median): $\\{5, 9, 12, 15, 18\\}$\n   - $Q_1$ is the median of the lower half: $Q_1 = 12$.\n3. **Upper Half** (excluding the median): $\\{24, 27, 30, 35, 42\\}$\n   - $Q_3$ is the median of the upper half: $Q_3 = 30$.\n4. **Interquartile Range (IQR)**:\n$$\\text{IQR} = Q_3 - Q_1 = 30 - 12 = 18$$",
    category: "( Est1- statistic)",
    topics: ["Statistics", "IQR", "Data Set"]
  },
  {
    id: "est2_stat_16",
    question: "The table below provides the frequency distribution of variable $x$. If the mean of the distribution is $27.5$, what is the missing frequency $k$?\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Value ($x$)</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Frequency ($f$)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$10$</td><td class=\"border border-gray-400 px-2 py-1\">$2$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$20$</td><td class=\"border border-gray-400 px-2 py-1\">$k$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$30$</td><td class=\"border border-gray-400 px-2 py-1\">$5$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$40$</td><td class=\"border border-gray-400 px-2 py-1\">$3$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$50$</td><td class=\"border border-gray-400 px-2 py-1\">$2$</td></tr>\n  </tbody>\n</table>",
    options: [
      "$4$",
      "$6$",
      "$8$",
      "$10$",
      "$12$"
    ],
    correctAnswer: 2,
    explanation: "Step 1: Express total frequency $N$ and sum of products $\\sum (x \\cdot f)$ in terms of $k$:\n$$N = 2 + k + 5 + 3 + 2 = 12 + k$$\n$$\\sum (x \\cdot f) = (10 \\times 2) + (20 \\times k) + (30 \\times 5) + (40 \\times 3) + (50 \\times 2)$$\n$$= 20 + 20k + 150 + 120 + 100 = 390 + 20k$$\n\nStep 2: Use the given mean $\\bar{x} = 27.5$:\n$$27.5 = \\frac{390 + 20k}{12 + k}$$\n$$27.5(12 + k) = 390 + 20k$$\n$$330 + 27.5k = 390 + 20k$$\n$$7.5k = 60 \\implies k = \\frac{60}{7.5} = 8$$",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Mean", "Frequency Table"]
  },
  {
    id: "est2_stat_17",
    question: "The histogram below displays a right-skewed (positively skewed) distribution of salaries in thousands of dollars at a startup company.\n\nWhich of the following inequalities correctly orders the Mode, Median, and Mean of this distribution?",
    svg: `<svg viewBox="0 0 320 180" class="w-full max-w-sm mx-auto">
      <line x1="30" y1="140" x2="290" y2="140" stroke="currentColor" stroke-width="1.5"/>
      <!-- Right skewed bars -->
      <rect x="40" y="30" width="35" height="110" fill="#3b82f6" fill-opacity="0.85"/>
      <rect x="80" y="55" width="35" height="85" fill="#3b82f6" fill-opacity="0.85"/>
      <rect x="120" y="85" width="35" height="55" fill="#3b82f6" fill-opacity="0.85"/>
      <rect x="160" y="110" width="35" height="30" fill="#3b82f6" fill-opacity="0.85"/>
      <rect x="200" y="125" width="35" height="15" fill="#3b82f6" fill-opacity="0.85"/>
      <rect x="240" y="132" width="35" height="8" fill="#3b82f6" fill-opacity="0.85"/>
      <!-- Labels -->
      <text x="57.5" y="154" text-anchor="middle" font-size="9" fill="currentColor">40-50</text>
      <text x="97.5" y="154" text-anchor="middle" font-size="9" fill="currentColor">50-60</text>
      <text x="137.5" y="154" text-anchor="middle" font-size="9" fill="currentColor">60-70</text>
      <text x="177.5" y="154" text-anchor="middle" font-size="9" fill="currentColor">70-80</text>
      <text x="217.5" y="154" text-anchor="middle" font-size="9" fill="currentColor">80-90</text>
      <text x="257.5" y="154" text-anchor="middle" font-size="9" fill="currentColor">90+</text>
      <!-- Skewness curve line -->
      <path d="M 57.5 25 Q 110 50 260 135" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3"/>
    </svg>`,
    options: [
      "$\\text{Mean} < \\text{Median} < \\text{Mode}$",
      "$\\text{Mode} < \\text{Median} < \\text{Mean}$",
      "$\\text{Median} < \\text{Mode} < \\text{Mean}$",
      "$\\text{Mode} < \\text{Mean} < \\text{Median}$",
      "$\\text{Mean} = \\text{Median} = \\text{Mode}$"
    ],
    correctAnswer: 1,
    explanation: "For a **right-skewed (positively skewed)** distribution:\n- The **Mode** is located at the peak of the histogram (the smallest central value).\n- The **Median** divides the total area/frequency into two equal halves.\n- The **Mean** is pulled furthest to the right by the extreme high values in the right tail.\nThus, the standard relationship is:\n$$\\text{Mode} < \\text{Median} < \\text{Mean}$$",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Skewness", "Mean", "Median", "Mode"]
  },
  {
    id: "est2_stat_18",
    question: "For a set of $n = 10$ measurements, the sum of the measurements is $\\sum_{i=1}^{10} x_i = 140$, and the sum of their squares is $\\sum_{i=1}^{10} x_i^2 = 2050$. What is the population standard deviation $\\sigma$ of this set?",
    options: [
      "$2$",
      "$3$",
      "$6$",
      "$9$",
      "$\\sqrt{15}$"
    ],
    correctAnswer: 1,
    explanation: "Step 1: Calculate the mean $\\mu$:\n$$\\mu = \\frac{\\sum x_i}{n} = \\frac{140}{10} = 14$$\n\nStep 2: Use the computational formula for population variance $\\sigma^2$:\n$$\\sigma^2 = \\frac{\\sum x_i^2}{n} - \\mu^2$$\n$$\\sigma^2 = \\frac{2050}{10} - (14)^2 = 205 - 196 = 9$$\n\nStep 3: Calculate the standard deviation $\\sigma$:\n$$\\sigma = \\sqrt{9} = 3$$",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Standard Deviation", "Variance"]
  },
  {
    id: "est2_stat_19",
    question: "Class X and Class Y each took the same physics test. Both classes had an average score of $75$. However, the standard deviation for Class X was $\\sigma_X = 3.2$, while for Class Y it was $\\sigma_Y = 12.8$. Which of the following conclusions is most accurate?",
    options: [
      "The highest score in Class X was greater than the highest score in Class Y.",
      "The scores in Class X were more consistent and clustered closer to the mean than the scores in Class Y.",
      "Class Y had more students than Class X.",
      "Class X had a higher median score than Class Y.",
      "Every student in Class X scored exactly $75$."
    ],
    correctAnswer: 1,
    explanation: "Standard deviation measures the consistency and degree of dispersion of data around the mean:\n- A smaller standard deviation ($\\sigma_X = 3.2$) indicates that the scores of Class X are closely clustered around the mean of $75$, signifying higher consistency.\n- A larger standard deviation ($\\sigma_Y = 12.8$) indicates greater variability and spread across the scores of Class Y.\nTherefore, the scores in Class X were more consistent and clustered closer to the mean.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Standard Deviation", "Interpretation"]
  },
  {
    id: "est2_stat_20",
    question: "The parallel box-and-whisker plots below compare the battery lifetimes (in hours) of two smartphone models, Brand A and Brand B.\n\nWhich of the following statements is supported by the plots?",
    svg: `<svg viewBox="0 0 340 170" class="w-full max-w-sm mx-auto">
      <!-- Axis -->
      <line x1="30" y1="130" x2="310" y2="130" stroke="currentColor" stroke-width="1.5"/>
      <!-- Ticks (10 to 50, step 10 => x = 30 + (val-10)*7) -->
      <line x1="30" y1="130" x2="30" y2="136" stroke="currentColor" stroke-width="1.5"/>
      <text x="30" y="148" text-anchor="middle" font-size="9" fill="currentColor">10</text>
      <line x1="100" y1="130" x2="100" y2="136" stroke="currentColor" stroke-width="1.5"/>
      <text x="100" y="148" text-anchor="middle" font-size="9" fill="currentColor">20</text>
      <line x1="170" y1="130" x2="170" y2="136" stroke="currentColor" stroke-width="1.5"/>
      <text x="170" y="148" text-anchor="middle" font-size="9" fill="currentColor">30</text>
      <line x1="240" y1="130" x2="240" y2="136" stroke="currentColor" stroke-width="1.5"/>
      <text x="240" y="148" text-anchor="middle" font-size="9" fill="currentColor">40</text>
      <line x1="310" y1="130" x2="310" y2="136" stroke="currentColor" stroke-width="1.5"/>
      <text x="310" y="148" text-anchor="middle" font-size="9" fill="currentColor">50</text>
      <text x="170" y="164" text-anchor="middle" font-size="10" fill="currentColor">Battery Life (hours)</text>

      <!-- Brand A: Min=15(65), Q1=22(114), Med=28(156), Q3=35(205), Max=45(275) -->
      <text x="25" y="42" text-anchor="end" font-size="10" font-weight="bold" fill="currentColor">Brand A</text>
      <line x1="65" y1="40" x2="114" y2="40" stroke="currentColor" stroke-width="1.5"/>
      <line x1="65" y1="32" x2="65" y2="48" stroke="currentColor" stroke-width="1.5"/>
      <line x1="205" y1="40" x2="275" y2="40" stroke="currentColor" stroke-width="1.5"/>
      <line x1="275" y1="32" x2="275" y2="48" stroke="currentColor" stroke-width="1.5"/>
      <rect x="114" y="24" width="91" height="32" fill="#3b82f6" fill-opacity="0.3" stroke="#2563eb" stroke-width="1.5"/>
      <line x1="156" y1="24" x2="156" y2="56" stroke="#b91c1c" stroke-width="2"/>

      <!-- Brand B: Min=20(100), Q1=28(156), Med=36(212), Q3=42(254), Max=48(296) -->
      <text x="25" y="92" text-anchor="end" font-size="10" font-weight="bold" fill="currentColor">Brand B</text>
      <line x1="100" y1="90" x2="156" y2="90" stroke="currentColor" stroke-width="1.5"/>
      <line x1="100" y1="82" x2="100" y2="98" stroke="currentColor" stroke-width="1.5"/>
      <line x1="254" y1="90" x2="296" y2="90" stroke="currentColor" stroke-width="1.5"/>
      <line x1="296" y1="82" x2="296" y2="98" stroke="currentColor" stroke-width="1.5"/>
      <rect x="156" y="74" width="98" height="32" fill="#10b981" fill-opacity="0.3" stroke="#059669" stroke-width="1.5"/>
      <line x1="212" y1="74" x2="212" y2="106" stroke="#b91c1c" stroke-width="2"/>
    </svg>`,
    options: [
      "Brand A has a greater median lifetime than Brand B.",
      "The Interquartile Range of Brand B is strictly greater than $20$ hours.",
      "At least $75\\%$ of Brand B phones last longer than the median lifetime of Brand A.",
      "The range of Brand B is greater than the range of Brand A.",
      "Both brands have the exact same standard deviation."
    ],
    correctAnswer: 2,
    explanation: "Let's analyze the five-number summaries:\n- **Brand A**: $\\text{Median} = 28$ hours.\n- **Brand B**: $Q_1 = 28$ hours, $\\text{Median} = 36$ hours.\n\nSince $Q_1$ of Brand B is $28$, exactly $75\\%$ of the data for Brand B lies at or above $28$ hours ($Q_1 \\le X$).\nSince the median of Brand A is $28$ hours, at least $75\\%$ of Brand B phones last as long as or longer than the median lifetime of Brand A.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Box Plot", "Quartiles", "Median"]
  },
  {
    id: "est2_stat_21",
    question: "The numbers $3, 7, 10, x, 15, 21$ are written in increasing order ($3 \\le 7 \\le 10 \\le x \\le 15 \\le 21$). If the mean of the six numbers is equal to their median, what is the value of $x$?",
    options: [
      "$11$",
      "$12$",
      "$13$",
      "$14$",
      "$14.5$"
    ],
    correctAnswer: 2,
    explanation: "For the ordered list of $6$ numbers $\\{3, 7, 10, x, 15, 21\\}$:\n1. **Median**: The average of the $3^{\\text{rd}}$ and $4^{\\text{th}}$ elements:\n$$\\text{Median} = \\frac{10 + x}{2}$$\n2. **Mean**:\n$$\\text{Mean} = \\frac{3 + 7 + 10 + x + 15 + 21}{6} = \\frac{56 + x}{6}$$\n3. Set $\\text{Mean} = \\text{Median}$:\n$$\\frac{56 + x}{6} = \\frac{10 + x}{2}$$\nMultiply both sides by $6$:\n$$56 + x = 3(10 + x)$$\n$$56 + x = 30 + 3x$$\n$$2x = 26 \\implies x = 13$$\nSince $10 \\le 13 \\le 15$, the condition of increasing order is satisfied.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Mean", "Median", "Algebraic Problem"]
  },
  {
    id: "est2_stat_22",
    question: "The table below presents the grouped frequency distribution of driving test scores for $40$ candidates.\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Score Interval</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Midpoint ($m_i$)</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Frequency ($f_i$)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$0 - 10$</td><td class=\"border border-gray-400 px-2 py-1\">$5$</td><td class=\"border border-gray-400 px-2 py-1\">$6$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$10 - 20$</td><td class=\"border border-gray-400 px-2 py-1\">$15$</td><td class=\"border border-gray-400 px-2 py-1\">$14$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$20 - 30$</td><td class=\"border border-gray-400 px-2 py-1\">$25$</td><td class=\"border border-gray-400 px-2 py-1\">$12$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$30 - 40$</td><td class=\"border border-gray-400 px-2 py-1\">$35$</td><td class=\"border border-gray-400 px-2 py-1\">$8$</td></tr>\n  </tbody>\n</table>\n\nWhat is the estimated mean score for this group?",
    options: [
      "$19.5$",
      "$20.0$",
      "$20.5$",
      "$21.0$",
      "$22.5$"
    ],
    correctAnswer: 2,
    explanation: "For grouped data, the estimated mean is given by:\n$$\\bar{x} = \\frac{\\sum (m_i \\cdot f_i)}{\\sum f_i}$$\n$$\\sum (m_i \\cdot f_i) = (5 \\times 6) + (15 \\times 14) + (25 \\times 12) + (35 \\times 8)$$\n$$= 30 + 210 + 300 + 280 = 820$$\nDivide by total frequency $N = 40$:\n$$\\bar{x} = \\frac{820}{40} = 20.5$$",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Mean", "Grouped Data", "Frequency Table"]
  },
  {
    id: "est2_stat_23",
    question: "If a constant $c = 15$ is added to every data value in a dataset, which of the following statistical measures will remain completely unchanged?",
    options: [
      "Mean and Median",
      "Mode and Range",
      "Range and Standard Deviation",
      "Mean and Standard Deviation",
      "Median and Interquartile Range"
    ],
    correctAnswer: 2,
    explanation: "When a constant $c$ is added to all observations ($x_i' = x_i + c$):\n- **Measures of Center** (Mean, Median, Mode) shift by $+c$.\n- **Measures of Spread** (Range, IQR, Variance, Standard Deviation) measure differences between data points $(x_j + c) - (x_i + c) = x_j - x_i$, so they remain **completely unchanged**.\nTherefore, the Range and Standard Deviation remain unchanged.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Standard Deviation", "Range", "Data Transformation"]
  },
  {
    id: "est2_stat_24",
    question: "The stem-and-leaf plot below displays the test percentages of $16$ students in a statistics seminar.\n\n$$\\begin{array}{r|l}\n2 & 1, 3, 5, 5, 8 \\\\\n3 & 0, 2, 4, 7, 7, 7, 9 \\\\\n4 & 1, 3, 6, 8\n\\end{array}$$\n$$\\text{Key: } 3 \\mid 2 = 32\\%$$ \n\nWhat is the median percentage of the class?",
    options: [
      "$34.0\\%$",
      "$35.5\\%$",
      "$37.0\\%$",
      "$36.0\\%$",
      "$34.5\\%$"
    ],
    correctAnswer: 1,
    explanation: "List all $16$ values in ascending order:\n$$21, 23, 25, 25, 28, 30, 32, \\mathbf{34}, \\mathbf{37}, 37, 37, 39, 41, 43, 46, 48$$\nSince $N = 16$ (even), the median is the average of the $8^{\\text{th}}$ and $9^{\\text{th}}$ values:\n- $8^{\\text{th}}$ value $= 34$\n- $9^{\\text{th}}$ value $= 37$\n$$\\text{Median} = \\frac{34 + 37}{2} = \\frac{71}{2} = 35.5\\%$$",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Median", "Stem-and-Leaf Plot"]
  },
  {
    id: "est2_stat_25",
    question: "Adam scored $84$ on a calculus midterm with a class mean of $\\mu = 72$ and standard deviation $\\sigma = 8$. Brian scored $88$ on a linear algebra midterm with a class mean of $\\mu = 80$ and standard deviation $\\sigma = 5$. Comparing their standardized z-scores, which student performed relatively better within their class?",
    options: [
      "Adam, because his raw score was only $4$ points below Brian's.",
      "Brian, because his standardized score is $z = 1.6$, compared to Adam's $z = 1.5$.",
      "Adam, because his class had a lower average.",
      "Brian, because his standardized score is $z = 2.4$.",
      "Both performed equally because both were in the top $10\\%$."
    ],
    correctAnswer: 1,
    explanation: "Calculate the standardized z-score $z = \\frac{x - \\mu}{\\sigma}$ for both students:\n- **Adam**: $z_{\\text{Adam}} = \\frac{84 - 72}{8} = \\frac{12}{8} = 1.50$\n- **Brian**: $z_{\\text{Brian}} = \\frac{88 - 80}{5} = \\frac{8}{5} = 1.60$\nSince Brian's standardized z-score is higher ($1.60 > 1.50$), Brian performed relatively better compared to his classmates.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Z-Score", "Standard Deviation"]
  },
  {
    id: "est2_stat_26",
    question: "The histogram below illustrates the distribution of daily high temperatures (in $^{\\circ}\\text{F}$) over a $30$-day period.\n\nWhat is the modal class of the distribution, and what percentage of days experienced temperatures within this modal interval?",
    svg: `<svg viewBox="0 0 320 180" class="w-full max-w-sm mx-auto">
      <line x1="30" y1="140" x2="300" y2="140" stroke="currentColor" stroke-width="1.5"/>
      <!-- Bars: 50-60: 4, 60-70: 9, 70-80: 12, 80-90: 5 -->
      <!-- 50-60 (h=35) -->
      <rect x="45" y="105" width="55" height="35" fill="#3b82f6" fill-opacity="0.8" stroke="#1d4ed8"/>
      <text x="72.5" y="99" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">4</text>
      <!-- 60-70 (h=80) -->
      <rect x="105" y="60" width="55" height="80" fill="#3b82f6" fill-opacity="0.8" stroke="#1d4ed8"/>
      <text x="132.5" y="54" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">9</text>
      <!-- 70-80 (h=105) (Modal) -->
      <rect x="165" y="35" width="55" height="105" fill="#ef4444" fill-opacity="0.85" stroke="#b91c1c" stroke-width="1.5"/>
      <text x="192.5" y="29" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">12</text>
      <!-- 80-90 (h=45) -->
      <rect x="225" y="95" width="55" height="45" fill="#3b82f6" fill-opacity="0.8" stroke="#1d4ed8"/>
      <text x="252.5" y="89" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">5</text>
      <!-- Labels -->
      <text x="72.5" y="154" text-anchor="middle" font-size="9" fill="currentColor">50-60</text>
      <text x="132.5" y="154" text-anchor="middle" font-size="9" fill="currentColor">60-70</text>
      <text x="192.5" y="154" text-anchor="middle" font-size="9" fill="currentColor">70-80</text>
      <text x="252.5" y="154" text-anchor="middle" font-size="9" fill="currentColor">80-90</text>
      <text x="165" y="172" text-anchor="middle" font-size="10" fill="currentColor">Temperature (°F)</text>
    </svg>`,
    options: [
      "$\\text{Modal Class: } 60 - 70,\\ 30\\%$",
      "$\\text{Modal Class: } 70 - 80,\\ 40\\%$",
      "$\\text{Modal Class: } 70 - 80,\\ 36\\%$",
      "$\\text{Modal Class: } 50 - 60,\\ 13.3\\%$",
      "$\\text{Modal Class: } 80 - 90,\\ 16.7\\%$"
    ],
    correctAnswer: 1,
    explanation: "1. **Modal Class**: The interval with the highest frequency is $70 - 80$ ($f = 12$).\n2. **Percentage of days**:\n$$\\text{Percentage} = \\frac{12}{30} \\times 100\\% = 40\\%$$",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Mode", "Histogram", "Percentages"]
  },
  {
    id: "est2_stat_27",
    question: "If every value in a dataset is multiplied by $-4$, what will happen to the original standard deviation $\\sigma$ and the original variance $\\sigma^2$?",
    options: [
      "$\\text{New } \\sigma = -4\\sigma,\\ \\text{New } \\sigma^2 = -16\\sigma^2$",
      "$\\text{New } \\sigma = 4\\sigma,\\ \\text{New } \\sigma^2 = 16\\sigma^2$",
      "$\\text{New } \\sigma = 4\\sigma,\\ \\text{New } \\sigma^2 = 4\\sigma^2$",
      "$\\text{New } \\sigma = 16\\sigma,\\ \\text{New } \\sigma^2 = 16\\sigma^2$",
      "$\\text{New } \\sigma = \\sigma,\\ \\text{New } \\sigma^2 = \\sigma^2$"
    ],
    correctAnswer: 1,
    explanation: "For the transformation $Y = aX$:\n- Standard deviation is always non-negative and scales by $|a|$:\n$$\\sigma_Y = |-4|\\sigma_X = 4\\sigma_X$$\n- Variance scales by $a^2$:\n$$\\sigma_Y^2 = (-4)^2 \\sigma_X^2 = 16\\sigma_X^2$$\nThus, the new standard deviation is $4\\sigma$ and the new variance is $16\\sigma^2$.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Standard Deviation", "Variance", "Transformations"]
  },
  {
    id: "est2_stat_28",
    question: "The cumulative frequency table below represents the test score percentiles for $50$ students.\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\">\n  <thead>\n    <tr class=\"bg-gray-100\">\n      <th class=\"border border-gray-400 px-2 py-1\">Score Interval</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Frequency</th>\n      <th class=\"border border-gray-400 px-2 py-1\">Cumulative Frequency</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$50 - 59$</td><td class=\"border border-gray-400 px-2 py-1\">$5$</td><td class=\"border border-gray-400 px-2 py-1\">$5$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$60 - 69$</td><td class=\"border border-gray-400 px-2 py-1\">$12$</td><td class=\"border border-gray-400 px-2 py-1\">$17$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$70 - 79$</td><td class=\"border border-gray-400 px-2 py-1\">$18$</td><td class=\"border border-gray-400 px-2 py-1\">$35$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$80 - 89$</td><td class=\"border border-gray-400 px-2 py-1\">$10$</td><td class=\"border border-gray-400 px-2 py-1\">$45$</td></tr>\n    <tr><td class=\"border border-gray-400 px-2 py-1\">$90 - 99$</td><td class=\"border border-gray-400 px-2 py-1\">$5$</td><td class=\"border border-gray-400 px-2 py-1\">$50$</td></tr>\n  </tbody>\n</table>\n\nIn which interval does the $75^{\\text{th}}$ percentile ($Q_3$) lie?",
    options: [
      "$60 - 69$",
      "$70 - 79$",
      "$80 - 89$",
      "$90 - 99$",
      "$50 - 59$"
    ],
    correctAnswer: 2,
    explanation: "For $N = 50$, the position of the $75^{\\text{th}}$ percentile ($Q_3$) is:\n$$\\text{Position} = 0.75 \\times 50 = 37.5$$\nLooking at the cumulative frequencies:\n- Cumulative frequency up to $70 - 79$ is $35$.\n- Cumulative frequency up to $80 - 89$ is $45$.\nSince $37.5$ lies between $35$ and $45$, the $75^{\\text{th}}$ percentile falls in the $80 - 89$ interval.",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Percentile", "Quartiles", "Frequency Table"]
  },
  {
    id: "est2_stat_29",
    question: "A set of $8$ numbers has a mean of $25$ and a range of $18$. The minimum value in the set is $14$, and all other values are at least $20$. If the value $14$ is replaced by $22$, what are the new mean and new range of the resulting set?",
    options: [
      "$\\text{New Mean} = 26,\\ \\text{New Range} = 12$",
      "$\\text{New Mean} = 26,\\ \\text{New Range} = 10$",
      "$\\text{New Mean} = 25.5,\\ \\text{New Range} = 12$",
      "$\\text{New Mean} = 27,\\ \\text{New Range} = 18$",
      "$\\text{New Mean} = 26,\\ \\text{New Range} = 14$"
    ],
    correctAnswer: 0,
    explanation: "1. **Old Sum and Maximum**:\n- $\\text{Old Sum} = 8 \\times 25 = 200$\n- Since $\\text{Min} = 14$ and $\\text{Range} = 18$, the maximum value is $\\text{Max} = 14 + 18 = 32$.\n\n2. **New Sum and Mean**:\n- Replacing $14$ with $22$ increases the sum by $22 - 14 = 8$.\n- $\\text{New Sum} = 200 + 8 = 208$\n- $\\text{New Mean} = \\frac{208}{8} = 26$\n\n3. **New Range**:\n- Since all other remaining numbers are at least $20$, and the replaced value is $22$, the new minimum value of the set is $20$.\n- The maximum value remains $32$.\n- $\\text{New Range} = 32 - 20 = 12$",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Mean", "Range", "Data Manipulation"]
  },
  {
    id: "est2_stat_30",
    question: "A random sample of $n = 5$ measurements is taken: $\\{6, 8, 10, 12, 14\\}$. What is the sample variance $s^2$ of this data set?",
    options: [
      "$8$",
      "$10$",
      "$12.5$",
      "$\\sqrt{10}$",
      "$16$"
    ],
    correctAnswer: 1,
    explanation: "Step 1: Calculate the sample mean $\\bar{x}$:\n$$\\bar{x} = \\frac{6 + 8 + 10 + 12 + 14}{5} = \\frac{50}{5} = 10$$\n\nStep 2: Calculate squared deviations $(x_i - \\bar{x})^2$:\n- $(6 - 10)^2 = (-4)^2 = 16$\n- $(8 - 10)^2 = (-2)^2 = 4$\n- $(10 - 10)^2 = 0^2 = 0$\n- $(12 - 10)^2 = 2^2 = 4$\n- $(14 - 10)^2 = 4^2 = 16$\n\nStep 3: Sum of squared deviations:\n$$\\sum (x_i - \\bar{x})^2 = 16 + 4 + 0 + 4 + 16 = 40$$\n\nStep 4: Sample variance $s^2$ uses degrees of freedom $n - 1 = 5 - 1 = 4$:\n$$s^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n - 1} = \\frac{40}{4} = 10$$",
    category: "( Est1- statistic)",
    topics: ["Statistics", "Sample Variance", "Standard Deviation"]
  }
];
