import { Question } from '../../types';

export const EST1_2021_DEC_PART6: Question[] = [
  {
    "id": "est1_2021_dec_q51",
    "examId": "EST12021Dec",
    
    
    "type": "grid-in",
    "question": "If $|2x - 3| \\le 4$, what is the greatest possible value of $|3x - 2|$? (Grid in)",
    "options": [
      "8.5"
    ],
    "correctAnswer": 0,
    "explanation": "Resolve the inequality: $-4 \\le 2x - 3 \\le 4$, which leads to $-1 \\le 2x \\le 7$ and $-0.5 \\le x \\le 3.5$.\\nEvaluate the boundary points in $|3x - 2|$:\\nAt $x = 3.5$: $|3(3.5) - 2| = |10.5 - 2| = 8.5$\\nAt $x = -0.5$: $|3(-0.5) - 2| = |-1.5 - 2| = |-3.5| = 3.5$\\nThe greatest possible value is 8.5 (or 17/2)."
  },
  {
    "id": "est1_2021_dec_q52",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "grid-in",
    "question": "A father decides to give his son 10 EGP for every math question solved correctly as to encourage him to study mathematics more, but takes back 5 EGP if the solution is wrong. After 30 questions, each has given and received the same amount of money. How many correct questions did the son solve? (Grid in)",
    "options": [
      "10"
    ],
    "correctAnswer": 0,
    "explanation": "Let $C$ be the number of correct questions and $W$ be wrong. We know $C + W = 30$. Because they gave and received the same, the net amount is zero: $10C - 5W = 0$. This gives $5W = 10C$, or $W = 2C$. Substituting into the first equation: $C + 2C = 30$, meaning $3C = 30$. So $C = 10$."
  },
  {
    "id": "est1_2021_dec_q53",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "grid-in",
    "question": "What is 17% of 36% of 2500? (Grid in)",
    "options": [
      "153"
    ],
    "correctAnswer": 0,
    "explanation": "Substitute as decimals and multiply: $0.17 \\times 0.36 \\times 2500 = 0.17 \\times 36 \\times 25 = 0.17 \\times 900 = 17 \\times 9 = 153$."
  },
  {
    "id": "est1_2021_dec_q54",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "grid-in",
    "question": "The graph above shows the number of push-ups Bob did last week.\\nMonday: 20, Tuesday: 15, Wednesday: 30, Thursday: 20, Friday: 10, Saturday: 55, Sunday: 60.\\nWhat was the average number of push-ups? (Grid in)",
    "options": [
      "30"
    ],
    "correctAnswer": 0,
    "explanation": "Total push-ups = $20 + 15 + 30 + 20 + 10 + 55 + 60 = 210$. There are 7 days in the week, resolving the average string: $210 / 7 = 30$."
  },
  {
    "id": "est1_2021_dec_q55",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "grid-in",
    "question": "On Mother's Day, a big store put a freezer and a refrigerator on sale. The owner of the store suggests that:\\n- The probability that a person buys a refrigerator is $\\frac{5}{7}$.\\n- The probability that a person buys a freezer if he buys a refrigerator is $\\frac{2}{5}$.\\n- The probability that a person buys a freezer if he doesn't buy the refrigerator is $5\\%$.\\nWhat is the probability that the person buys the freezer? (Grid in)",
    "options": [
      "0.3"
    ],
    "correctAnswer": 0,
    "explanation": "Using the Law of Total Probability: $P(F) = P(F|R)P(R) + P(F|\\text{not } R)P(\\text{not } R)$. We have $P(R) = \\frac{5}{7}$, so $P(\\text{not } R) = \\frac{2}{7}$.\\n$P(F) = (\\frac{2}{5})\\left(\\frac{5}{7}\\right) + (0.05)\\left(\\frac{2}{7}\\right)$.\\n$P(F) = \\frac{2}{7} + \\frac{1}{20}\\left(\\frac{2}{7}\\right) = \\frac{20}{70} + \\frac{1}{70} = \\frac{21}{70}$. Reducing yields $\\frac{3}{10} = 0.3$."
  },
  {
    "id": "est1_2021_dec_q56",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "grid-in",
    "question": "In a class of 25 students, the average of the grades of the boys, girls and the class is 12, 14 and 13.2 respectively. How many girls are in this class? (Grid in)",
    "options": [
      "15"
    ],
    "correctAnswer": 0,
    "explanation": "Let $b$ be boys and $g$ be girls. The system runs: $b + g = 25$ and $\\frac{12b + 14g}{25} = 13.2$.\\nSimplify to $12b + 14g = 330$. Rearrange by substituting $b = 25 - g$:\\n$12(25 - g) + 14g = 330$\\n$300 - 12g + 14g = 330$\\n$2g = 30$, signifying $g = 15$."
  },
  {
    "id": "est1_2021_dec_q57",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "grid-in",
    "question": "How many solutions, in $\\mathbb{R}$, does the equation $e^{3x} - 3x - 3 = 0$ admit? (Grid in)",
    "options": [
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "Let $f(x) = e^{3x} - 3x - 3$. Differentiating yields $f'(x) = 3e^{3x} - 3$. The global minimum establishes at $x = 0$ where $f(0) = 1 - 0 - 3 = -2$. The second derivative is always positive making a typical \"U\" contour. Reaching $-2$ indicates it drops beneath $0$ tracking up progressively passing positive infinity in each route resolving crossing x twice. Total 2 solutions."
  },
  {
    "id": "est1_2021_dec_q58",
    "examId": "EST12021Dec",
    
    "section": "Math Calculator",
    "type": "grid-in",
    "question": "In the triangle above, $\\overline{AD} \\perp \\overline{BC}$ and $\\overline{CE} \\perp \\overline{BA}$ such that $BD = 5, BE = 6$ and $AD = 8$. What is the length of $\\overline{CE}$? (The figure is not drawn to scale) (Grid in)",
    "options": [
      "9.6"
    ],
    "correctAnswer": 0,
    "explanation": "Observe right triangles $\\triangle ABD$ and $\\triangle CBE$. They share vertex angle $B$ and both pack a $90^\\circ$ angle at $D$ and $E$ respectingly. Due to the AA similarity postulate, $\\triangle ABD \\sim \\triangle CBE$. The sides are directly proportional linking $\\frac{AD}{CE} = \\frac{BD}{BE}$. Implantation solves: $\\frac{8}{CE} = \\frac{5}{6}$. Transposing resolves to $5 CE = 48 \\Rightarrow CE = \\frac{48}{5} = 9.6$."
  }
];
