import { Question } from '../../types';

export const EST1_2020_DEC_PART5: Question[] = [
  {
    "id": "est1_2020_dec_q51",
    "examId": "EST12020Dec",
    "question": "In a chemistry lab, an apparatus is adjusted to measure the mass of gas released during a chemical reaction. The mass $M$ (in grams) of gas produced by the chemical reaction at time $t$ (in seconds) after the reaction starts is given by $M = 1.61t + 3.95$. For every 10 seconds, what is the increase in the mass of gas released?",
    "options": [
      "16.1"
    ],
    "correctAnswer": 0,
    "type": "grid-in",
    "explanation": "The rate of change is the slope of the linear equation, which is 1.61 grams per second. For 10 seconds, the increase is $1.61 \\times 10 = 16.1$ grams."
  },
  {
    "id": "est1_2020_dec_q52",
    "examId": "EST12020Dec",
    "question": "At a certain carnival booth, a trivia game can be played according to the following rule: the player wins 10 gold coins just for participating in the game; he then wins 3 gold coins for each correct answer and loses 1 gold coin for each wrong answer. At the end of the game when the time is up, the player gains money according to the equivalence: 1 gold coin = $3. If Jad makes 4 mistakes and gains $153 at the end of the game, how many correct answers does he have?",
    "options": [
      "15"
    ],
    "correctAnswer": 0,
    "type": "grid-in",
    "explanation": "He gained $153$, which is $153 / 3 = 51$ gold coins.\
The number of coins won: $10 + 3C - 1W$, where $C$ is correct answers and $W$ is wrong answers.\
We know $W = 4$, so $10 + 3C - 4 = 51 \\implies 3C + 6 = 51 \\implies 3C = 45 \\implies C = 15$."
  },
  {
    "id": "est1_2020_dec_q53",
    "examId": "EST12020Dec",
    "question": "If $f(x) = (2 - x)(x + 4)$ and $g(x) = f(x - 10)$ are functions whose graphs are parabolas in an $xy$-plane, what is the y-coordinate of the vertex of the parabola represented by $g$?",
    "options": [
      "9"
    ],
    "correctAnswer": 0,
    "type": "grid-in",
    "explanation": "The translation $g(x) = f(x-10)$ shifts the parabola horizontally, which does not change the y-coordinate of the vertex.\
So we just find the vertex of $f(x) = (2-x)(x+4)$.\
The roots are $x=2$ and $x=-4$. The x-coordinate of the vertex is the midpoint: $(2 + (-4))/2 = -1$.\
The y-coordinate is $f(-1) = (2 - (-1))(-1 + 4) = (3)(3) = 9$."
  },
  {
    "id": "est1_2020_dec_q54",
    "examId": "EST12020Dec",
    "question": "$\\frac{x}{x+2} - \\frac{1}{2} = x - 2$\
\
What is the positive solution of the equation given above?",
    "options": [
      "2"
    ],
    "correctAnswer": 0,
    "type": "grid-in",
    "explanation": "$\\frac{x}{x+2} - \\frac{1}{2} = x - 2$.\
Multiply by $2(x+2)$ to clear denominators (assuming $x \\neq -2$):\
$2x - (x+2) = 2(x - 2)(x + 2)$\
$x - 2 = 2(x^2 - 4)$\
$x - 2 = 2x^2 - 8$\
$2x^2 - x - 6 = 0$.\
Factor: $(2x + 3)(x - 2) = 0$.\
Solutions are $x = -1.5$ and $x = 2$. The positive solution is 2."
  },
  {
    "id": "est1_2020_dec_q55",
    "examId": "EST12020Dec",
    "question": "Distance covered by data as it is transferred between different parts of a large computer is measured in light-nanoseconds (lns). 1 light-nanosecond is equivalent to 29.9cm. If a certain data is transferred at the rate of 19 centimeters every second, what distance, in lns, does the data cover in 3 seconds? (Round your answer to the nearest tenths).",
    "options": [
      "1.9"
    ],
    "correctAnswer": 0,
    "type": "grid-in",
    "explanation": "Distance in 3 seconds = $19 \\text{ cm/s} \\times 3 \\text{ s} = 57 \\text{ cm}$.\
Convert cm to lns: $57 \\text{ cm} / 29.9 \\text{ cm/lns} = 1.906 \\text{ lns}$.\
Rounded to the nearest tenth: 1.9."
  },
  {
    "id": "est1_2020_dec_q56",
    "examId": "EST12020Dec",
    "question": "A school asks each of its 1550 students whether they use a smartphone, a laptop, or a tablet during online learning. The table above summarizes the results. If a student is selected at random, what is the probability that he or she doesn't use a tablet knowing that he or she is not in the secondary section? (Round your answer to the nearest tenth).",
    "html": "<table class='w-full text-center border-collapse border border-gray-300 mb-4'><tr><th class='border border-gray-300 px-2'></th><th class='border border-gray-300 px-2'>Smart phones</th><th class='border border-gray-300 px-2'>Laptops</th><th class='border border-gray-300 px-2'>Tablets</th><th class='border border-gray-300 px-2'>Total</th></tr><tr><th class='border border-gray-300 px-2'>Elementary</th><td class='border border-gray-300 px-2'>150</td><td class='border border-gray-300 px-2'>230</td><td class='border border-gray-300 px-2'>120</td><td class='border border-gray-300 px-2'>500</td></tr><tr><th class='border border-gray-300 px-2'>Intermediate</th><td class='border border-gray-300 px-2'>250</td><td class='border border-gray-300 px-2'>100</td><td class='border border-gray-300 px-2'>80</td><td class='border border-gray-300 px-2'>430</td></tr><tr><th class='border border-gray-300 px-2'>Secondary</th><td class='border border-gray-300 px-2'>300</td><td class='border border-gray-300 px-2'>220</td><td class='border border-gray-300 px-2'>100</td><td class='border border-gray-300 px-2'>620</td></tr><tr><th class='border border-gray-300 px-2'>Total</th><td class='border border-gray-300 px-2'>700</td><td class='border border-gray-300 px-2'>550</td><td class='border border-gray-300 px-2'>300</td><td class='border border-gray-300 px-2'>1550</td></tr></table>",
    "options": [
      "0.8"
    ],
    "correctAnswer": 0,
    "type": "grid-in",
    "explanation": "'Not in the secondary section' means they are in Elementary or Intermediate. Total students in these two sections = 500 + 430 = 930.\\nWe need the probability they DON'T use a tablet.\\nStudents in these sections who DO use a tablet: 120 (Elem) + 80 (Inter) = 200.\\nStudents who don't use a tablet = 930 - 200 = 730.\\nProbability = $730 / 930 \\\\approx 0.7849$.\\nRounded to the nearest tenth, this is 0.8."
  },
  {
    "id": "est1_2020_dec_q57",
    "examId": "EST12020Dec",
    "question": "In the given figure, ABC is a triangle right at B, segment ED is parallel to AB, BC = 24, and AC = 26. If ED = 8, what is the length of EC?",
    "svg": "<svg viewBox=\"0 0 300 200\" width=\"100%\" height=\"100%\"><path d=\"M 40 40 L 40 160 L 260 160 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"100\" y1=\"95\" x2=\"100\" y2=\"160\" stroke=\"black\" stroke-width=\"2\"/><circle cx=\"40\" cy=\"40\" r=\"3\" fill=\"blue\"/><circle cx=\"40\" cy=\"160\" r=\"3\" fill=\"blue\"/><circle cx=\"260\" cy=\"160\" r=\"3\" fill=\"blue\"/><circle cx=\"100\" cy=\"95\" r=\"3\" fill=\"blue\"/><circle cx=\"100\" cy=\"160\" r=\"3\" fill=\"blue\"/><text x=\"30\" y=\"35\" font-size=\"12\" fill=\"blue\">A</text><text x=\"25\" y=\"155\" font-size=\"12\" fill=\"blue\">B</text><text x=\"265\" y=\"155\" font-size=\"12\" fill=\"blue\">C</text><text x=\"105\" y=\"90\" font-size=\"12\" fill=\"blue\">E</text><text x=\"105\" y=\"155\" font-size=\"12\" fill=\"blue\">D</text></svg>",
    "options": [
      "20.8"
    ],
    "correctAnswer": 0,
    "type": "grid-in",
    "explanation": "In right triangle ABC, $AB^2 + BC^2 = AC^2$.\
$AB^2 + 24^2 = 26^2$.\
$AB^2 + 576 = 676 \\implies AB^2 = 100 \\implies AB = 10$.\
Triangles EDC and ABC are similar because ED || AB.\
The ratio of similarity is $ED / AB = 8 / 10 = 0.8$.\
Therefore, $EC / AC = 0.8 \\implies EC / 26 = 0.8 \\implies EC = 26 \\times 0.8 = 20.8$."
  },
  {
    "id": "est1_2020_dec_q58",
    "examId": "EST12020Dec",
    "question": "In the year 1990, 12000 tourists visited country X. Due to bad weather conditions, the number of tourists visiting country X started decreasing by 10% per year. How many more tourists visited country X in the year 1993 than the year 2000? (Give the answer to the nearest whole number).",
    "options": [
      "4564"
    ],
    "correctAnswer": 0,
    "type": "grid-in",
    "explanation": "Initial amount $P = 12000$. Rate of decrease is 10%, so multiplier is 0.9.\
Tourists in 1993 (3 years later) = $12000 \\times 0.9^3 = 12000 \\times 0.729 = 8748$.\
Tourists in 2000 (10 years later) = $12000 \\times 0.9^{10} \\approx 12000 \\times 0.348678 = 4184.1$.\
Difference = $8748 - 4184.1 = 4563.9$.\
Rounded to the nearest whole number, it is 4564."
  }
];
