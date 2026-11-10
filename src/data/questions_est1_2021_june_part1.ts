import { Question } from '../../types';

export const EST1_2021_JUNE_PART1: Question[] = [
  {
    id: "est1_2021_june_q1",
    examId: "EST12021June",
    question: "For a point source, sound waves propagate in concentric spheres, therefore the intensity of the sound at a point A distant D from the source is given by: $I = \\frac{P}{4\\pi D^2}$ where:\nI is the sound intensity\nP is the power of the point source\nD is the distance between the source and the point A where the intensity is to be found\n\nIsolate D.",
    options: [
      "$D = 2 \\sqrt{\\frac{\\pi I}{P}}$",
      "$D = \\frac{1}{2} \\sqrt{\\frac{P}{\\pi I}}$",
      "$D = (\\frac{P}{4\\pi I})^2$",
      "$D = \\sqrt{\\frac{P}{2\\pi I}}$"
    ],
    correctAnswer: 1,
    explanation: "From the equation $I = \\frac{P}{4\\pi D^2}$, multiply both sides by $4\\pi D^2$ to get $4\\pi D^2 I = P$. Then divide by $4\\pi I$ to isolate $D^2$, giving $D^2 = \\frac{P}{4\\pi I}$. Finally, take the square root of both sides to get $D = \\sqrt{\\frac{P}{4\\pi I}} = \\frac{1}{2} \\sqrt{\\frac{P}{\\pi I}}$."
  },
  {
    id: "est1_2021_june_q2",
    examId: "EST12021June",
    question: "If the power of the source doubles (P'=2P), and the distance between the source and point A also doubles (D'=2D), the sound intensity becomes I'. What is the relationship between I' and I?",
    options: [
      "$I' = I$",
      "$I'= 4 I$",
      "$I' = \\frac{I}{2}$",
      "$I' = \\frac{I}{4}$"
    ],
    correctAnswer: 2,
    explanation: "The original intensity is $I = \\frac{P}{4\\pi D^2}$. The new intensity $I'$ is $\\frac{2P}{4\\pi (2D)^2} = \\frac{2P}{4\\pi (4D^2)} = \\frac{2P}{16\\pi D^2} = \\frac{1}{2} \\left( \\frac{P}{4\\pi D^2} \\right) = \\frac{1}{2}I$."
  },
  {
    id: "est1_2021_june_q3",
    examId: "EST12021June",
    question: "The weekly salary S of Samantha is given by $S = 7hd + 75$ where h is the number of hours she works every day and d is the number of working days each week. If Samantha is to be promoted with a salary increase, which of the following terms must change?",
    options: [
      "7",
      "h",
      "d",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "A promotion with a salary increase implies a change in the hourly wage rate. In the equation $S = 7hd + 75$, '7' represents Samantha's hourly wage rate. If she gets a raise, this parameter would increase."
  },
  {
    id: "est1_2021_june_q4",
    examId: "EST12021June",
    question: "In the xy-plane, the equation of the line (d) passing through $A(-1,4)$ and perpendicular to line $3x-2y = 5$ is:",
    options: [
      "$y = \\frac{3}{2}x + \\frac{11}{2}$",
      "$y = -\\frac{3}{2}x + \\frac{5}{2}$",
      "$y = -\\frac{2}{3}x + \\frac{14}{3}$",
      "$y = -\\frac{2}{3}x + \\frac{10}{3}$"
    ],
    correctAnswer: 3,
    explanation: "The given line is $3x - 2y = 5$, which has a slope of $\\frac{3}{2}$. A perpendicular line must have a slope of $-\\frac{2}{3}$. Using the point $(-1, 4)$ and point-slope form: $y - 4 = -\\frac{2}{3}(x - (-1)) \\implies y = -\\frac{2}{3}x - \\frac{2}{3} + 4 \\implies y = -\\frac{2}{3}x + \\frac{10}{3}$."
  },
  {
    id: "est1_2021_june_q5",
    examId: "EST12021June",
    question: "A researcher selected a random sample of 25 different brands of bottled water and measured the corresponding PH. He found out that the mean PH of the sample was 7.3 with an associated margin of error of 0.25. Which of the following is the best interpretation of the researcher’s findings?",
    options: [
      "Most water bottles in the market have a PH between 7.05 and 7.55",
      "All water bottles in the market have a PH between 7.05 and 7.55",
      "Any PH between 7.05 and 7.55 is a plausible value for the mean PH of the water bottles in the sample",
      "Any PH between 7.05 and 7.55 is a plausible value for the mean PH of the water bottles in the market"
    ],
    correctAnswer: 3,
    explanation: "A margin of error applies to the estimated population parameter based on sample data. Thus, the interval $7.3 \\pm 0.25$ (from 7.05 to 7.55) represents the range of plausible values for the mean PH of all water bottles in the market (population mean)."
  },
  {
    id: "est1_2021_june_q6",
    examId: "EST12021June",
    question: "If $h(x) = -x^2+3x-2$ and $k(x) = -2x-5$, what is the value of $h(k(-2))$?",
    options: [
      "-6",
      "-4",
      "0",
      "2"
    ],
    correctAnswer: 0,
    explanation: "First, evaluate $k(-2) = -2(-2) - 5 = 4 - 5 = -1$. Then, plug this result into $h(x)$: $h(-1) = -(-1)^2 + 3(-1) - 2 = -1 - 3 - 2 = -6$."
  },
  {
    id: "est1_2021_june_q7",
    examId: "EST12021June",
    question: "The graph above depicts a function $f(x)$. How many solutions does the equation $f(x) = 0$ admit?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 3,
    explanation: "Solutions to $f(x) = 0$ correspond to the $x$-intercepts of the graph. Looking at the graph, the curve crosses or touches the $x$-axis exactly 4 times, implying 4 solutions."
  },
  {
    id: "est1_2021_june_q8",
    examId: "EST12021June",
    question: "Which of the following angles have the same value of $\\sin(32^\\circ)$?",
    options: [
      "$\\sin(-32^\\circ)$",
      "$\\sin(58^\\circ)$",
      "$\\cos(-32^\\circ)$",
      "$\\cos(58^\\circ)$"
    ],
    correctAnswer: 3,
    explanation: "By the cofunction identity, $\\sin(\\theta) = \\cos(90^\\circ - \\theta)$. Therefore, $\\sin(32^\\circ) = \\cos(90^\\circ - 32^\\circ) = \\cos(58^\\circ)$."
  },
  {
    id: "est1_2021_june_q9",
    examId: "EST12021June",
    question: "Knowing that lines (xy) and (rs) are parallel, what is the type of triangle ABM? (Figure is not drawn to scale)",
    options: [
      "Scalene",
      "Isosceles",
      "Equilateral",
      "Right isosceles"
    ],
    correctAnswer: 1,
    explanation: "The alternate interior angle to the exterior $127^\\circ$ tells us the adjacent interior angle of the triangle is $180^\\circ - 127^\\circ = 53^\\circ$. The other angle is $53^\\circ$ through transversal. Since two angles in the triangle are $53^\\circ$, it's an isosceles triangle."
  },
  {
    id: "est1_2021_june_q10",
    examId: "EST12021June",
    question: "A rental car company charges its clients by the number of days $d$ the car is rented. If the bill $b$ of a client is given by the equation $b = 5d+20$, what is the best interpretation of the term 5?",
    options: [
      "The rental cost of the car per day",
      "The fixed cost of renting a car, no matter how many days it is rented",
      "The average number of days the car is rented",
      "The fees of renting a car for 7 days"
    ],
    correctAnswer: 0,
    explanation: "In the linear equation $b = 5d + 20$, the coefficient of $d$ (which is 5) represents the rate of change, which corresponds to the cost per each additional day the car is rented."
  },
  {
    id: "est1_2021_june_q11",
    examId: "EST12021June",
    question: "The table below summarizes the grades out of 10 obtained by 4 players in a competition over a total of 5 rounds.\n\n| | Diego | Mark | Tyler | Toni |\n| :--- | :--- | :--- | :--- | :--- |\n| Round 1 | 7 | 3 | 8 | 10 |\n| Round 2 | 5 | 10 | 7 | 4 |\n| Round 3 | 8 | 9 | 6 | 9 |\n| Round 4 | 9 | 5 | 7 | 10 |\n| Round 5 | 4 | 8 | 8 | 7 |\n\nThe winner is the player with the highest average. Who won the competition?",
    options: [
      "Diego",
      "Toni",
      "Tyler",
      "Mark"
    ],
    correctAnswer: 1,
    explanation: "Sums: Diego = $7+5+8+9+4=33$; Mark = $3+10+9+5+8=35$; Tyler = $8+7+6+7+8=36$; Toni = $10+4+9+10+7=40$. Since the averages are directly proportional to the sums over 5 rounds, Toni has the highest sum and therefore the highest average."
  },
  {
    id: "est1_2021_june_q12",
    examId: "EST12021June",
    question: "Which player was the most consistent in terms of his grades?\n\n| | Diego | Mark | Tyler | Toni |\n| :--- | :--- | :--- | :--- | :--- |\n| Standard deviation | 1.85 | 2.61 | 0.75 | 2.28 |",
    options: [
      "Mark",
      "Diego",
      "Toni",
      "Tyler"
    ],
    correctAnswer: 3,
    explanation: "Consistency is measured by the standard deviation. A lower standard deviation implies greater consistency (less spread around the mean). Tyler has the lowest standard deviation (0.75)."
  }
];
