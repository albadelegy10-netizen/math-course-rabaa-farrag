import { Question } from '../../types';

export const EST1_SOLVING_EQUATIONS_WORD_PROBLEMS_SET: Question[] = [
  {
    "id": "est1_word_prob_1",
    "question": "If $a$ is a solution of the equation $|2x - 4| = 5$, what is the distance between $a$ and the point of coordinate 2 on the number line?",
    "options": [
      "0.5",
      "2.5",
      "4.5",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "The equation is $|2x - 4| = 5$. Factoring out 2, we get $2|x - 2| = 5$, so $|x - 2| = 2.5$. The distance between $x$ (which is $a$) and 2 on the number line is exactly $|a - 2|$, which equals 2.5."
  },
  {
    "id": "est1_word_prob_2",
    "question": "In order to prepare for the boxing tournament, Jamison needs to work out for at least 90 hours during the next 3 weeks. In the first week, he practiced for 42 hours, and decided to divide the rest of the hours equally over the next two weeks. How much should he practice minimum each week?",
    "options": [
      "12 hours",
      "24 hours",
      "46 hours",
      "48 hours"
    ],
    "correctAnswer": 1,
    "explanation": "Total hours needed = 90. Hours practiced in first week = 42. Remaining hours = 90 - 42 = 48. These 48 hours are divided equally over the next 2 weeks, so $48 / 2 = 24$ hours per week."
  },
  {
    "id": "est1_word_prob_3",
    "question": "If $\\frac{1}{x-1} - \\frac{1}{x+1} = 1$, and $x \\neq \\pm 1$, what is the value of $11x^2$?",
    "options": [
      "9",
      "12",
      "33",
      "130"
    ],
    "correctAnswer": 2,
    "explanation": "$\\frac{1}{x-1} - \\frac{1}{x+1} = \\frac{(x+1) - (x-1)}{(x-1)(x+1)} = \\frac{2}{x^2 - 1} = 1$. So, $x^2 - 1 = 2$, which means $x^2 = 3$. Therefore, $11x^2 = 11(3) = 33$."
  },
  {
    "id": "est1_word_prob_4",
    "question": "If $\\frac{2a - 1}{b} = 6$, what is the value of $a - 3b$? ($b \\neq 0$)",
    "options": [
      "0.5",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "$\\frac{2a - 1}{b} = 6 \\Rightarrow 2a - 1 = 6b \\Rightarrow 2a - 6b = 1$. Dividing by 2 gives $a - 3b = 0.5$."
  },
  {
    "id": "est1_word_prob_5",
    "question": "Ibrahim is $x$ years old and Jamil is seven years younger. In five years, how old will Jamil be?",
    "options": [
      "$x + 2$",
      "$x - 2$",
      "$2x - 2$",
      "$x + 5$"
    ],
    "correctAnswer": 1,
    "explanation": "Jamil's current age is $x - 7$. In five years, Jamil will be $(x - 7) + 5 = x - 2$ years old."
  },
  {
    "id": "est1_word_prob_6",
    "question": "If the sum of half a number and 3 is smaller than twice the same number added to 3, which of the following could be the number?",
    "options": [
      "1",
      "0",
      "-0.5",
      "-2"
    ],
    "correctAnswer": 0,
    "explanation": "Let the number be $x$. $\\frac{1}{2}x + 3 < 2x + 3$. Subtracting 3 from both sides gives $\\frac{1}{2}x < 2x$, which means $0 < 1.5x$, so $x > 0$. The only option greater than 0 is 1."
  },
  {
    "id": "est1_word_prob_7",
    "question": "Given three consecutive even integers. If the sum of the first and three times the third is equal to 20, what is the sum of the three integers?",
    "options": [
      "14",
      "12",
      "8",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "Let the integers be $x, x+2, x+4$. $x + 3(x+4) = 20 \\Rightarrow 4x + 12 = 20 \\Rightarrow 4x = 8 \\Rightarrow x = 2$. The integers are 2, 4, 6. Their sum is $2 + 4 + 6 = 12$."
  },
  {
    "id": "est1_word_prob_8",
    "question": "If $\\frac{-1}{2x - 1} = \\sqrt{3}$, what is the value of $6x$?",
    "options": [
      "$-3\\sqrt{3}$",
      "$\\sqrt{3} - 3$",
      "$-\\sqrt{3} + 3$",
      "$\\sqrt{3} + 3$"
    ],
    "correctAnswer": 2,
    "explanation": "$2x - 1 = -\\frac{1}{\\sqrt{3}} = -\\frac{\\sqrt{3}}{3}$. So $2x = 1 - \\frac{\\sqrt{3}}{3}$. Multiplying by 3 gives $6x = 3 - \\sqrt{3} = -\\sqrt{3} + 3$."
  },
  {
    "id": "est1_word_prob_9",
    "question": "If $\\frac{-1}{2x} = \\frac{x - 3}{4}$, which of the following is the greatest value for $x$?",
    "options": [
      "2",
      "1",
      "0",
      "-1"
    ],
    "correctAnswer": 0,
    "explanation": "Cross-multiplying: $-4 = 2x(x - 3) \\Rightarrow -4 = 2x^2 - 6x \\Rightarrow 2x^2 - 6x + 4 = 0 \\Rightarrow x^2 - 3x + 2 = 0 \\Rightarrow (x-1)(x-2) = 0$. The solutions are $x=1$ and $x=2$. The greatest value is 2."
  },
  {
    "id": "est1_word_prob_10",
    "question": "If $\\frac{1}{2}y - \\frac{3}{5}x = -6$, what is the value of $6x - 5y$?",
    "options": [
      "50",
      "60",
      "80",
      "100"
    ],
    "correctAnswer": 1,
    "explanation": "Multiply the equation by 10 to clear denominators: $5y - 6x = -60$. Multiply by -1 to get $6x - 5y = 60$."
  },
  {
    "id": "est1_word_prob_11",
    "question": "If $\\frac{2x - 4}{3} - \\frac{x + 1}{6} = t + 1$ and $t = 3$, what is the value of $x$?",
    "options": [
      "27",
      "-1",
      "11",
      "$\\frac{31}{3}$"
    ],
    "correctAnswer": 2,
    "explanation": "Substitute $t=3$: $\\frac{2x - 4}{3} - \\frac{x + 1}{6} = 4$. Multiply by 6: $2(2x - 4) - (x + 1) = 24 \\Rightarrow 4x - 8 - x - 1 = 24 \\Rightarrow 3x - 9 = 24 \\Rightarrow 3x = 33 \\Rightarrow x = 11$."
  },
  {
    "id": "est1_word_prob_12",
    "question": "$\\sqrt{x^2 + 3} = x - 5$. Which of the following could be a solution for the equation above?",
    "options": [
      "0",
      "2.2",
      "5",
      "None of the above"
    ],
    "correctAnswer": 3,
    "explanation": "Square both sides: $x^2 + 3 = x^2 - 10x + 25 \\Rightarrow 10x = 22 \\Rightarrow x = 2.2$. Check the solution: $\\sqrt{2.2^2 + 3} = 2.2 - 5 \\Rightarrow \\sqrt{7.84} = -2.8$. Since a principal square root cannot be negative, $x=2.2$ is an extraneous solution. Thus, there is no solution."
  },
  {
    "id": "est1_word_prob_13",
    "question": "Mathew paid $X$ dollars for a play station that was only 30 dollars less than one third of the original price. What was the original price in dollars?",
    "options": [
      "$X - 30$",
      "$X + 60$",
      "$3X + 90$",
      "$\\frac{1}{3}X - 30$"
    ],
    "correctAnswer": 2,
    "explanation": "Let $P$ be the original price. $X = \\frac{1}{3}P - 30$. Solving for $P$: $\\frac{1}{3}P = X + 30 \\Rightarrow P = 3(X + 30) = 3X + 90$."
  },
  {
    "id": "est1_word_prob_14",
    "question": "If $\\frac{3a}{b} \\div c = 7$, what is the value of $\\frac{bc}{2a}$?",
    "options": [
      "$\\frac{3}{14}$",
      "$\\frac{7}{3}$",
      "21",
      "$\\frac{6}{7}$"
    ],
    "correctAnswer": 0,
    "explanation": "$\\frac{3a}{bc} = 7 \\Rightarrow \\frac{bc}{3a} = \\frac{1}{7}$. Multiply by $\\frac{3}{2}$: $\\frac{bc}{2a} = \\frac{1}{7} \\times \\frac{3}{2} = \\frac{3}{14}$."
  },
  {
    "id": "est1_word_prob_15",
    "question": "Amanda paid $\\$a$ for a makeup bag set that was only $\\$15$ less than half the original price. What was the original price, in dollars, of this set?",
    "options": [
      "$2a + 30$",
      "$a - 15$",
      "$\\frac{1}{2}a - 15$",
      "$2a + 15$"
    ],
    "correctAnswer": 0,
    "explanation": "Let $P$ be the original price. $a = \\frac{1}{2}P - 15$. Solving for $P$: $\\frac{1}{2}P = a + 15 \\Rightarrow P = 2(a + 15) = 2a + 30$."
  },
  {
    "id": "est1_word_prob_16",
    "question": "If $\\sqrt{x - 2} = 10$, what is the value of $3x$?",
    "options": [
      "98",
      "102",
      "294",
      "306"
    ],
    "correctAnswer": 3,
    "explanation": "Square both sides: $x - 2 = 100 \\Rightarrow x = 102$. Then $3x = 3(102) = 306$."
  },
  {
    "id": "est1_word_prob_17",
    "question": "What positive number is twice as far from 9 as it is far from 3?",
    "options": [
      "6",
      "4",
      "3.5",
      "5"
    ],
    "correctAnswer": 3,
    "explanation": "Let the number be $x$. $|x - 9| = 2|x - 3|$. Since $x$ is positive, let's test the options or solve: If $x=5$, $|5-9| = 4$ and $2|5-3| = 2(2) = 4$. This works."
  },
  {
    "id": "est1_word_prob_18",
    "question": "What number increased by 5 is equal to twice the same number minus 3?",
    "options": [
      "-8",
      "3",
      "5",
      "8"
    ],
    "correctAnswer": 3,
    "explanation": "Let the number be $x$. $x + 5 = 2x - 3 \\Rightarrow x = 8$."
  },
  {
    "id": "est1_word_prob_19",
    "question": "The sum of three consecutive integers is 24. What is the product of the two greatest integers between them all?",
    "options": [
      "27",
      "56",
      "72",
      "504"
    ],
    "correctAnswer": 2,
    "explanation": "Let the integers be $x-1, x, x+1$. Their sum is $3x = 24 \\Rightarrow x = 8$. The integers are 7, 8, 9. The two greatest are 8 and 9. Their product is $8 \\times 9 = 72$."
  },
  {
    "id": "est1_word_prob_20",
    "question": "$2\\left(\\frac{x}{5} - \\frac{1}{3}\\right) - 3x = \\frac{1}{5}$. What is the solution to the equation above?",
    "options": [
      "$x = -3$",
      "$x = \\frac{-1}{3}$",
      "$x = \\frac{-15}{24}$",
      "$x = \\frac{15}{8}$"
    ],
    "correctAnswer": 1,
    "explanation": "$\\frac{2x}{5} - \\frac{2}{3} - 3x = \\frac{1}{5} \\Rightarrow \\frac{2x - 15x}{5} = \\frac{1}{5} + \\frac{2}{3} \\Rightarrow -\\frac{13x}{5} = \\frac{13}{15} \\Rightarrow -x = \\frac{5}{15} = \\frac{1}{3} \\Rightarrow x = -\\frac{1}{3}$."
  },
  {
    "id": "est1_word_prob_21",
    "question": "If $\\sqrt{x - 2} - a = 5$. What is the value of $x$ when $a = -3$?",
    "options": [
      "4",
      "6",
      "14",
      "19"
    ],
    "correctAnswer": 1,
    "explanation": "Substitute $a = -3$: $\\sqrt{x - 2} - (-3) = 5 \\Rightarrow \\sqrt{x - 2} + 3 = 5 \\Rightarrow \\sqrt{x - 2} = 2 \\Rightarrow x - 2 = 4 \\Rightarrow x = 6$."
  },
  {
    "id": "est1_word_prob_22",
    "question": "$\\frac{3y - 2(4 - 2y)}{3} = \\frac{-11 + 3(2 + 3y)}{5}$. What is the value of $y$ in the equation above?",
    "options": [
      "2.5",
      "3",
      "3.125",
      "3.5"
    ],
    "correctAnswer": 2,
    "explanation": "Simplify numerators: $\\frac{3y - 8 + 4y}{3} = \\frac{-11 + 6 + 9y}{5} \\Rightarrow \\frac{7y - 8}{3} = \\frac{9y - 5}{5}$. Cross-multiply: $5(7y - 8) = 3(9y - 5) \\Rightarrow 35y - 40 = 27y - 15 \\Rightarrow 8y = 25 \\Rightarrow y = 3.125$."
  },
  {
    "id": "est1_word_prob_23",
    "question": "If $x - 2y = 1$, which of the following is always true?",
    "options": [
      "$x - y = 1 - y$",
      "$x + y = 1 + y$",
      "$2x - y = 1 + 3y$",
      "$2y - 2x = -x - 1$"
    ],
    "correctAnswer": 3,
    "explanation": "From $x - 2y = 1$, we can rearrange to $-x + 2y = -1$. Option D is $2y - 2x = -x - 1 \\Rightarrow 2y - x = -1$, which matches."
  },
  {
    "id": "est1_word_prob_24",
    "question": "$\\frac{x}{x+2} - \\frac{1}{2} = x - 2$. What is the positive solution of the equation given above?",
    "options": [
      "2",
      "1",
      "-2",
      "-1"
    ],
    "correctAnswer": 0,
    "explanation": "Multiply by $2(x+2)$: $2x - (x+2) = 2(x-2)(x+2) \\Rightarrow x - 2 = 2(x^2 - 4) \\Rightarrow x - 2 = 2x^2 - 8 \\Rightarrow 2x^2 - x - 6 = 0$. Factoring: $(2x + 3)(x - 2) = 0$. Solutions are $x = -1.5$ and $x = 2$. The positive solution is 2."
  },
  {
    "id": "est1_word_prob_25",
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
    "id": "est1_word_prob_26",
    "question": "If $4x + 14y = -7$, what is the value of $-x - \\frac{7}{2}y$?",
    "options": [
      "$-\\frac{7}{4}$",
      "$\\frac{7}{4}$",
      "$-\\frac{7}{2}$",
      "$\\frac{7}{2}$"
    ],
    "correctAnswer": 1,
    "explanation": "Divide the given equation by -4: $\\frac{4x + 14y}{-4} = \\frac{-7}{-4} \\Rightarrow -x - \\frac{14}{4}y = \\frac{7}{4} \\Rightarrow -x - \\frac{7}{2}y = \\frac{7}{4}$."
  },
  {
    "id": "est1_word_prob_27",
    "question": "If $\\frac{a}{2b + 1} = \\frac{1}{2}$, which of the following is correct?",
    "options": [
      "$a + b = \\frac{1}{2}$",
      "$a - b = \\frac{1}{2}$",
      "$2a - b = \\frac{1}{2}$",
      "$a - 2b = \\frac{1}{2}$"
    ],
    "correctAnswer": 1,
    "explanation": "Cross-multiply: $2a = 2b + 1 \\Rightarrow 2a - 2b = 1 \\Rightarrow a - b = \\frac{1}{2}$."
  },
  {
    "id": "est1_word_prob_28",
    "question": "The sum of twice a number $x$ and eleven is equal to one third the difference of the same number and one. What is the value of $(1 - x)$?",
    "options": [
      "7",
      "7.8",
      "8",
      "8.2"
    ],
    "correctAnswer": 1,
    "explanation": "$2x + 11 = \\frac{1}{3}(x - 1) \\Rightarrow 6x + 33 = x - 1 \\Rightarrow 5x = -34 \\Rightarrow x = -6.8$. Then $1 - x = 1 - (-6.8) = 7.8$."
  },
  {
    "id": "est1_word_prob_29",
    "question": "$\\frac{6(x - 1) + 4}{3} - \\frac{3 - (5 - 4x)}{2} = 0$. What is the value of $x$ that satisfies the equation?",
    "options": [
      "$-\\frac{2}{5}$",
      "$-\\frac{3}{7}$",
      "There is no value of x for which the equation is true.",
      "There are infinitely many values of x for which the equation is true."
    ],
    "correctAnswer": 2,
    "explanation": "Simplify numerators: $\\frac{6x - 2}{3} - \\frac{-2 + 4x}{2} = 0 \\Rightarrow 2x - \\frac{2}{3} - (-1 + 2x) = 0 \\Rightarrow 2x - \\frac{2}{3} + 1 - 2x = 0 \\Rightarrow \\frac{1}{3} = 0$. This is a contradiction, so there is no solution."
  },
  {
    "id": "est1_word_prob_30",
    "question": "The supply function of a product is given by $f(x) = \\frac{1 + x}{2}$ and the demand function of the same product is given by $g(x) = \\frac{2}{x} + 1$, where $x$ represents the price in dollars of the product in both functions. What is the market equilibrium of this product given that it is the point of intersection of the two curves of the two functions?",
    "options": [
      "1.56",
      "1.79",
      "2.56",
      "2.79"
    ],
    "correctAnswer": 2,
    "explanation": "Set $f(x) = g(x)$: $\\frac{1 + x}{2} = \\frac{2}{x} + 1 \\Rightarrow \\frac{1 + x}{2} = \\frac{2 + x}{x} \\Rightarrow x(1 + x) = 2(2 + x) \\Rightarrow x + x^2 = 4 + 2x \\Rightarrow x^2 - x - 4 = 0$. Using quadratic formula: $x = \\frac{1 \\pm \\sqrt{1 - 4(1)(-4)}}{2} = \\frac{1 \\pm \\sqrt{17}}{2}$. Since price must be positive, $x = \\frac{1 + \\sqrt{17}}{2} \\approx \\frac{1 + 4.123}{2} = 2.56$."
  },
  {
    "id": "est1_word_prob_31",
    "question": "If $5x + 2y = 12000$, what is the value of $-0.625x - 0.25y$?",
    "options": [
      "1500",
      "-1500",
      "3000",
      "-3000"
    ],
    "correctAnswer": 1,
    "explanation": "Notice that $-0.625 = -\\frac{5}{8}$ and $-0.25 = -\\frac{2}{8}$. So $-0.625x - 0.25y = -\\frac{1}{8}(5x + 2y) = -\\frac{1}{8}(12000) = -1500$."
  },
  {
    "id": "est1_word_prob_32",
    "question": "If $\\frac{2a + 1.2b}{a - 5} = \\frac{4}{5}$, which of the following is correct?",
    "options": [
      "$3a + 3b = -7$",
      "$a - b = 10$",
      "$a + b = -10/3$",
      "$2a - b = 5$"
    ],
    "correctAnswer": 2,
    "explanation": "Cross-multiply: $10a + 6b = 4a - 20 \\Rightarrow 6a + 6b = -20 \\Rightarrow a + b = -\\frac{20}{6} = -\\frac{10}{3}$."
  },
  {
    "id": "est1_word_prob_33",
    "question": "The sum of triple a number $x$ and 6 is equal to half the difference of twice a number $x$ and 5. What is the value of $(1 - 4x)$?",
    "options": [
      "17.2",
      "18",
      "16",
      "25"
    ],
    "correctAnswer": 1,
    "explanation": "$3x + 6 = \\frac{1}{2}(2x - 5) \\Rightarrow 3x + 6 = x - 2.5 \\Rightarrow 2x = -8.5 \\Rightarrow x = -4.25$. Then $1 - 4x = 1 - 4(-4.25) = 1 + 17 = 18$."
  },
  {
    "id": "est1_word_prob_34",
    "question": "What is the solution for $x$ in $2 = \\sqrt{2x - 3}$?",
    "options": [
      "2.5",
      "3.5",
      "4.5",
      "0.5"
    ],
    "correctAnswer": 1,
    "explanation": "Square both sides: $4 = 2x - 3 \\Rightarrow 2x = 7 \\Rightarrow x = 3.5$."
  },
  {
    "id": "est1_word_prob_35",
    "question": "Patrick is twice as old as Alonso. Alonso is 7 years older than Fatima, and Fatima is 2 years younger than Patricia. If Patricia's age to Salma's age is 4 to 3, what is the age of Patrick if Salma is 12 years old?",
    "options": [
      "16 years old",
      "21 years old",
      "42 years old",
      "48 years old"
    ],
    "correctAnswer": 2,
    "explanation": "Salma = 12. Patricia / Salma = 4 / 3 $\\Rightarrow$ Patricia = $\\frac{4}{3} \\times 12 = 16$. Fatima = Patricia - 2 = 14. Alonso = Fatima + 7 = 21. Patrick = 2 $\\times$ Alonso = 42."
  },
  {
    "id": "est1_word_prob_36",
    "question": "The sum of three numbers is equivalent to the product of the third number and half the difference of the first two numbers. Assuming that the first number is $a$, the second number is $b$, and the third number is $c$, which of the following statements represents $a$ in terms of $b$ and $c$?",
    "options": [
      "$a = cb + 2b + 2c$",
      "$a = \\frac{cb + 2b + 2c}{c - 2}$",
      "$a = \\frac{-cb - 2b - 2c}{c + 2}$",
      "$a = -cb - 2b - 2c$"
    ],
    "correctAnswer": 1,
    "explanation": "$a + b + c = c \\times \\frac{1}{2}(a - b) \\Rightarrow 2a + 2b + 2c = ca - cb \\Rightarrow 2a - ca = -cb - 2b - 2c \\Rightarrow a(2 - c) = -cb - 2b - 2c \\Rightarrow a = \\frac{-cb - 2b - 2c}{2 - c} = \\frac{cb + 2b + 2c}{c - 2}$."
  },
  {
    "id": "est1_word_prob_37",
    "question": "Ibrahim needs enough fencing to enclose a rectangular garden with a perimeter of 200 meters. If the length of his garden is to be 60 meters, which of the following equations can be used to solve the width of the garden?",
    "options": [
      "$2x + 120 = 200$",
      "$x + 60 = 200$",
      "$2x - 200 = 120$",
      "$2x + 60 = 200$"
    ],
    "correctAnswer": 0,
    "explanation": "Perimeter = $2(\\text{length} + \\text{width}) = 2(60 + x) = 120 + 2x$. So $2x + 120 = 200$."
  },
  {
    "id": "est1_word_prob_38",
    "question": "If $x^2 = -2y - 5$ and $z = -8y^3$, what is $x$ in terms of $z$?",
    "options": [
      "$x = \\sqrt[3]{z} - 5$",
      "$x = \\pm\\sqrt{\\sqrt[3]{z} - 5}$",
      "$x = \\pm(\\sqrt[3]{z} - 5)$",
      "$x = \\pm\\sqrt[6]{z} - \\sqrt{5}$",
      "$x = (\\sqrt[3]{z} - 5)^2$"
    ],
    "correctAnswer": 1,
    "explanation": "From $z = -8y^3$, we have $y^3 = -\\frac{z}{8} \\Rightarrow y = -\\frac{\\sqrt[3]{z}}{2}$. Substitute $y$ into the first equation: $x^2 = -2(-\\frac{\\sqrt[3]{z}}{2}) - 5 = \\sqrt[3]{z} - 5$. Therefore, $x = \\pm\\sqrt{\\sqrt[3]{z} - 5}$."
  },
  {
    "id": "est1_word_prob_39",
    "question": "If $x + \\frac{1}{x} = 2$, what is the value of $x^2 + \\frac{1}{x^2}$?",
    "options": [
      "4",
      "8",
      "2",
      "0.5",
      "16"
    ],
    "correctAnswer": 2,
    "explanation": "Square both sides of $x + \\frac{1}{x} = 2$: $(x + \\frac{1}{x})^2 = 4 \\Rightarrow x^2 + 2(x)(\\frac{1}{x}) + \\frac{1}{x^2} = 4 \\Rightarrow x^2 + 2 + \\frac{1}{x^2} = 4 \\Rightarrow x^2 + \\frac{1}{x^2} = 2$."
  },
  {
    "id": "est1_word_prob_40",
    "question": "If $\\frac{3}{x - 1} = x + 1$ and $x \\neq 1$, what is the value of $x^2$?",
    "options": [
      "1",
      "2",
      "4",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "Multiply by $x - 1$: $3 = (x + 1)(x - 1) \\Rightarrow 3 = x^2 - 1 \\Rightarrow x^2 = 4$."
  },
  {
    "id": "est1_word_prob_41",
    "question": "A group of students voted on five after-school activities. The bar graph shows the number of students who voted for each of the five activities. How many students chose activity 3?",
    "imageUrl": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPgogIDxsaW5lIHgxPSI1MCIgeTE9IjI1MCIgeDI9IjM1MCIgeTI9IjI1MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPGxpbmUgeDE9IjUwIiB5MT0iNTAiIHgyPSI1MCIgeTI9IjI1MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHRleHQgeD0iMjAwIiB5PSIyOTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QWN0aXZpdHk8L3RleHQ+CiAgPHRleHQgeD0iMjAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMjAgMTUwKSI+TnVtYmVyIG9mIHN0dWRlbnRzPC90ZXh0PgogIAogIDx0ZXh0IHg9IjQwIiB5PSIyNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9ImVuZCI+MDwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iMjE1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJlbmQiPjEwPC90ZXh0PgogIDx0ZXh0IHg9IjQwIiB5PSIxNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9ImVuZCI+MjA8L3RleHQ+CiAgPHRleHQgeD0iNDAiIHk9IjEzNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0iZW5kIj4zMDwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iOTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9ImVuZCI+NDA8L3RleHQ+CiAgPHRleHQgeD0iNDAiIHk9IjU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJlbmQiPjUwPC90ZXh0PgogIAogIDxyZWN0IHg9IjcwIiB5PSIxMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiNjY2MiIHN0cm9rZT0iYmxhY2siLz4KICA8dGV4dCB4PSI4NSIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE8L3RleHQ+CiAgCiAgPHJlY3QgeD0iMTIwIiB5PSI5MCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjE2MCIgZmlsbD0iI2NjYyIgc3Ryb2tlPSJibGFjayIvPgogIDx0ZXh0IHg9IjEzNSIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjI8L3RleHQ+CiAgCiAgPHJlY3QgeD0iMTcwIiB5PSI5NCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjE1NiIgZmlsbD0iI2NjYyIgc3Ryb2tlPSJibGFjayIvPgogIDx0ZXh0IHg9IjE4NSIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjM8L3RleHQ+CiAgCiAgPHJlY3QgeD0iMjIwIiB5PSI1MCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2NjYyIgc3Ryb2tlPSJibGFjayIvPgogIDx0ZXh0IHg9IjIzNSIgeT0iMjcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQ8L3RleHQ+CiAgCiAgPHJlY3QgeD0iMjcwIiB5PSIxMTAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxNDAiIGZpbGw9IiNjY2MiIHN0cm9rZT0iYmxhY2siLz4KICA8dGV4dCB4PSIyODUiIHk9IjI3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41PC90ZXh0Pgo8L3N2Zz4=",
    "options": [
      "25",
      "39",
      "48",
      "50"
    ],
    "correctAnswer": 1,
    "explanation": "The bar for activity 3 has a height that is between 35 and 40. Of the given choices, 39 is the only value between 35 and 40."
  },
  {
    "id": "est1_word_prob_42",
    "question": "On the first day of a semester, a film club has 90 members. Each day after the first day of the semester, 10 new members join the film club. If no members leave the film club, how many total members will the film club have 4 days after the first day of the semester?",
    "options": [
      "400",
      "130",
      "94",
      "90"
    ],
    "correctAnswer": 1,
    "explanation": "Initial members = 90. New members per day = 10. After 4 days, the number of new members is $4 \\times 10 = 40$. Total members = $90 + 40 = 130$."
  },
  {
    "id": "est1_word_prob_43",
    "question": "If Claire paid $k$ dollars for a computer that was only 20 dollars more than half the original price, what was the original price, in dollars?",
    "options": [
      "$k + 20$",
      "$k - 40$",
      "$2k - 20$",
      "$2k - 40$"
    ],
    "correctAnswer": 3,
    "explanation": "Let $P$ be the original price. $k = \\frac{1}{2}P + 20$. Solving for $P$: $\\frac{1}{2}P = k - 20 \\Rightarrow P = 2(k - 20) = 2k - 40$."
  },
  {
    "id": "est1_word_prob_44",
    "question": "$|x - 5| = 10$. What is one possible solution to the given equation?",
    "options": [
      "15",
      "10",
      "-15",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "$x - 5 = 10$ or $x - 5 = -10$. So $x = 15$ or $x = -5$. 15 is one of the options."
  },
  {
    "id": "est1_word_prob_45",
    "question": "Nasir bought 9 storage bins that were each the same price. He used a coupon for $\\$63$ off the entire purchase. The cost for the entire purchase after using the coupon was $\\$27$. What was the original price, in dollars, for 1 storage bin?",
    "options": [
      "8",
      "9",
      "10",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "Let $p$ be the price of one bin. $9p - 63 = 27 \\Rightarrow 9p = 90 \\Rightarrow p = 10$."
  },
  {
    "id": "est1_word_prob_46",
    "question": "$f(x) = 7x + 1$. The function gives the total number of people on a company retreat with $x$ managers. What is the total number of people on a company retreat with 7 managers?",
    "options": [
      "44",
      "34",
      "50",
      "40"
    ],
    "correctAnswer": 2,
    "explanation": "Substitute $x = 7$: $f(7) = 7(7) + 1 = 49 + 1 = 50$."
  },
  {
    "id": "est1_word_prob_47",
    "question": "In the fraction $\\frac{a - 5}{2b}$, $a$ is 5 less than two times $b$. If the fraction is equal to $\\frac{1}{2}$, what is the value of $a$?",
    "options": [
      "15",
      "20",
      "25",
      "30"
    ],
    "correctAnswer": 0,
    "explanation": "$a = 2b - 5$. Substitute this into the fraction: $\\frac{2b - 5 - 5}{2b} = \\frac{1}{2} \\Rightarrow \\frac{2b - 10}{2b} = \\frac{1}{2} \\Rightarrow 2(2b - 10) = 2b \\Rightarrow 4b - 20 = 2b \\Rightarrow 2b = 20 \\Rightarrow b = 10$. Then $a = 2(10) - 5 = 15$."
  },
  {
    "id": "est1_word_prob_48",
    "question": "If $4x - 28 = -24$, what is the value of $x - 7$?",
    "options": [
      "-24",
      "-22",
      "-6",
      "-1"
    ],
    "correctAnswer": 2,
    "explanation": "Divide the entire equation by 4: $\\frac{4x - 28}{4} = \\frac{-24}{4} \\Rightarrow x - 7 = -6$."
  },
  {
    "id": "est1_word_prob_49",
    "question": "$2.5b + 5r = 80$. The given equation describes the relationship between the number of birds, $b$, and the number of reptiles, $r$, that can be cared for at a pet care business on a given day. If the business cares for 16 reptiles on a given day, how many birds can it care for on this day?",
    "options": [
      "0",
      "5",
      "40",
      "80"
    ],
    "correctAnswer": 0,
    "explanation": "Substitute $r = 16$: $2.5b + 5(16) = 80 \\Rightarrow 2.5b + 80 = 80 \\Rightarrow 2.5b = 0 \\Rightarrow b = 0$."
  },
  {
    "id": "est1_word_prob_50",
    "question": "In the figure, lines $m$ and $n$ are parallel. If $x = 6k + 13$ and $y = 8k - 29$, what is the value of $z$?",
    "imageUrl": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPgogIDxsaW5lIHgxPSI1MCIgeTE9IjgwIiB4Mj0iMjUwIiB5Mj0iODAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjI2MCIgeT0iODUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiI+bTwvdGV4dD4KICAKICA8bGluZSB4MT0iNTAiIHkxPSIxNDAiIHgyPSIyNTAiIHkyPSIxNDAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjI2MCIgeT0iMTQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPm48L3RleHQ+CiAgCiAgPGxpbmUgeDE9IjgwIiB5MT0iNDAiIHgyPSIyMDAiIHkyPSIxODAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgogIDx0ZXh0IHg9IjcwIiB5PSIzNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2Ij50PC90ZXh0PgogIAogIDx0ZXh0IHg9IjE0MCIgeT0iNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCI+eMKwPC90ZXh0PgogIDx0ZXh0IHg9IjExNSIgeT0iOTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCI+ecKwPC90ZXh0PgogIDx0ZXh0IHg9IjE1NSIgeT0iMTM1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPnrCsDwvdGV4dD4KPC9zdmc+",
    "options": [
      "3",
      "21",
      "41",
      "139"
    ],
    "correctAnswer": 2,
    "explanation": "Angles $x$ and $y$ are vertical angles, so $x = y$. $6k + 13 = 8k - 29 \\Rightarrow 2k = 42 \\Rightarrow k = 21$. So $x = 6(21) + 13 = 139^\\circ$. Since lines $m$ and $n$ are parallel, angle $z$ and the angle corresponding to $y$ are consecutive interior angles, which are supplementary. Thus $z + y = 180^\\circ$. $z + 139 = 180 \\Rightarrow z = 41$."
  },
  {
    "id": "est1_word_prob_51",
    "question": "The average of a set of 8 consecutive odd integers is 18. What is the greatest of these 8 integers?",
    "options": [
      "10",
      "25",
      "30",
      "35"
    ],
    "correctAnswer": 1,
    "explanation": "Let the integers be $x, x+2, x+4, x+6, x+8, x+10, x+12, x+14$. The average is the median, which is between the 4th and 5th integers: $\\frac{(x+6) + (x+8)}{2} = x+7$. So $x+7 = 18 \\Rightarrow x = 11$. The greatest integer is $x+14 = 11+14 = 25$."
  },
  {
    "id": "est1_word_prob_52",
    "question": "$g(x) = \\frac{x^2 - 3x + 2}{(x + 2)^2 - 8x}$. For what value of $x$ is the function above undefined?",
    "options": [
      "5",
      "4",
      "3",
      "2"
    ],
    "correctAnswer": 3,
    "explanation": "The function is undefined when the denominator is zero. $(x + 2)^2 - 8x = 0 \\Rightarrow x^2 + 4x + 4 - 8x = 0 \\Rightarrow x^2 - 4x + 4 = 0 \\Rightarrow (x - 2)^2 = 0 \\Rightarrow x = 2$."
  }
];
