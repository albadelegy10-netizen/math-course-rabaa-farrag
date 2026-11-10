const fs = require('fs');

const newQ44_50 = `  {
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
    "explanation": "$|4 - x| - 2 < 0 \\\\Rightarrow |4 - x| < 2$.\\n$-2 < 4 - x < 2 \\\\Rightarrow -6 < -x < -2 \\\\Rightarrow 2 < x < 6$.\\nOption C is 3, which is the only value between 2 and 6."
  },
  {
    "id": "est1_2021_aug_q45",
    "examId": "EST12021Aug",
    "question": "The table above shows the distribution of age and sports activity for 540 employees of a company.\\n\\nIf an employee aged under 40 is selected at random, what is the probability that he practices any kind of sports?",
    "options": [
      "$\\\\frac{2}{13}$",
      "$\\\\frac{27}{11}$",
      "$\\\\frac{16}{11}$",
      "$\\\\frac{11}{13}$"
    ],
    "correctAnswer": 3,
    "html": "<table class=\\"w-full mt-4 border-collapse border border-gray-400\\"><thead><tr><th class=\\"border border-gray-400 p-2\\"></th><th class=\\"border border-gray-400 p-2\\">Practice any kind of sports</th><th class=\\"border border-gray-400 p-2\\">No sports activity</th><th class=\\"border border-gray-400 p-2\\">Total</th></tr></thead><tbody><tr><td class=\\"border border-gray-400 p-2 font-semibold\\">Under 40</td><td class=\\"border border-gray-400 p-2 text-center\\">220</td><td class=\\"border border-gray-400 p-2 text-center\\">40</td><td class=\\"border border-gray-400 p-2 text-center\\">260</td></tr><tr><td class=\\"border border-gray-400 p-2 font-semibold\\">40 and older</td><td class=\\"border border-gray-400 p-2 text-center\\">100</td><td class=\\"border border-gray-400 p-2 text-center\\">180</td><td class=\\"border border-gray-400 p-2 text-center\\">280</td></tr><tr><td class=\\"border border-gray-400 p-2 font-semibold\\">Total</td><td class=\\"border border-gray-400 p-2 text-center\\">320</td><td class=\\"border border-gray-400 p-2 text-center\\">220</td><td class=\\"border border-gray-400 p-2 text-center\\">540</td></tr></tbody></table>",
    "explanation": "Out of 260 employees under 40, 220 practice sports. Probability = $\\\\frac{220}{260} = \\\\frac{11}{13}$."
  },
  {
    "id": "est1_2021_aug_q46",
    "examId": "EST12021Aug",
    "question": "Ryan estimates that there are $x$ people in a concert.\\n\\nBella, who knows the actual number of people who attended the concert, $y$, notes that Ryan's estimate is within 50 people of the actual number of people.\\n\\nWhich of the following inequalities represent the relationship between $x$ and $y$?",
    "options": [
      "$|x - y| \\\\leq 50$",
      "$x \\\\leq y + 50$",
      "$x \\\\ge y - 50$",
      "$x + y \\\\leq 50$"
    ],
    "correctAnswer": 0,
    "explanation": "The phrase \\"is within 50 of\\" means the absolute difference is less than or equal to 50: $|x - y| \\\\leq 50$."
  },
  {
    "id": "est1_2021_aug_q47",
    "examId": "EST12021Aug",
    "question": "**Questions 27-28 refer to the following information.**\\n\\n$$f' = \\\\left(\\\\frac{v + v_0}{v}\\\\right) f$$\\n\\nYou are riding in a car at a velocity $v_0$, in meters per second, towards a loud block party. Because of this movement, the actual frequency of the sound waves emitted by the speakers, $f$, in hertz, is perceived by you to be a different frequency $f'$, in hertz.\\n\\nThe speaker's sound waves travel at a velocity $v$, in meters per second. This phenomenon is called the Doppler effect. The formula above shows the relationship between these variables.\\n\\n---\\nWhich of the following expresses the velocity of the car $v_0$ in terms of the other variables?",
    "options": [
      "$v_0 = \\\\frac{f' - f}{v f}$",
      "$v_0 = \\\\frac{f - f'}{f'} v$",
      "$v_0 = \\\\frac{f}{f'} v$",
      "$v_0 = \\\\frac{f' - f}{f} v$"
    ],
    "correctAnswer": 3,
    "explanation": "$f' = \\\\left(\\\\frac{v + v_0}{v}\\\\right) f \\\\Rightarrow \\\\frac{f'}{f} = \\\\frac{v+v_0}{v} = 1 + \\\\frac{v_0}{v}$. Subtract 1: $\\\\frac{f' - f}{f} = \\\\frac{v_0}{v}$. Multiply by $v$: $v_0 = \\\\frac{f' - f}{f} v$."
  },
  {
    "id": "est1_2021_aug_q48",
    "examId": "EST12021Aug",
    "question": "**Questions 27-28 refer to the following information.**\\n\\n$$f' = \\\\left(\\\\frac{v + v_0}{v}\\\\right) f$$\\n\\nYou are riding in a car at a velocity $v_0$, in meters per second, towards a loud block party. Because of this movement, the actual frequency of the sound waves emitted by the speakers, $f$, in hertz, is perceived by you to be a different frequency $f'$, in hertz.\\n\\nThe speaker's sound waves travel at a velocity $v$, in meters per second. This phenomenon is called the Doppler effect. The formula above shows the relationship between these variables.\\n\\n---\\nIf the velocity of the car is $22 \\\\text{ m/s}$, the velocity of the sound waves of the speaker is $340 \\\\text{ m/s}$ and you perceive the frequency of the speaker's sound waves to be $500 \\\\text{ Hz}$.\\n\\nWhich of the following is the closest to the actual frequency of the speaker's sound waves?",
    "options": [
      "469",
      "532",
      "470",
      "533"
    ],
    "correctAnswer": 2,
    "explanation": "$500 = \\\\left(\\\\frac{340 + 22}{340}\\\\right) f \\\\Rightarrow 500 = \\\\frac{362}{340} f \\\\Rightarrow f = \\\\frac{500 \\\\times 340}{362} \\\\approx 469.61$. Closest is 470."
  },
  {
    "id": "est1_2021_aug_q49",
    "examId": "EST12021Aug",
    "question": "The table below summarizes students' work placement after graduation, based on the major.\\n\\nGiven a person who works outside his field of study, which of the following is closest to the probability that he majored in business?",
    "options": [
      "0.35",
      "0.06",
      "0.5",
      "0.13"
    ],
    "correctAnswer": 2,
    "html": "<table class=\\"w-full mt-4 border-collapse border border-gray-400\\"><thead><tr><th class=\\"border border-gray-400 p-2\\"></th><th class=\\"border border-gray-400 p-2\\">Work in their field of study</th><th class=\\"border border-gray-400 p-2\\">Work in another field</th><th class=\\"border border-gray-400 p-2\\">Don\\'t work</th><th class=\\"border border-gray-400 p-2\\">Total</th></tr></thead><tbody><tr><td class=\\"border border-gray-400 p-2 font-semibold\\">Engineering</td><td class=\\"border border-gray-400 p-2 text-center\\">17,065</td><td class=\\"border border-gray-400 p-2 text-center\\">10,593</td><td class=\\"border border-gray-400 p-2 text-center\\">3,867</td><td class=\\"border border-gray-400 p-2 text-center\\">31,525</td></tr><tr><td class=\\"border border-gray-400 p-2 font-semibold\\">Business</td><td class=\\"border border-gray-400 p-2 text-center\\">18,547</td><td class=\\"border border-gray-400 p-2 text-center\\">11,753</td><td class=\\"border border-gray-400 p-2 text-center\\">3,243</td><td class=\\"border border-gray-400 p-2 text-center\\">33,543</td></tr><tr><td class=\\"border border-gray-400 p-2 font-semibold\\">Law</td><td class=\\"border border-gray-400 p-2 text-center\\">20,372</td><td class=\\"border border-gray-400 p-2 text-center\\">1,438</td><td class=\\"border border-gray-400 p-2 text-center\\">542</td><td class=\\"border border-gray-400 p-2 text-center\\">22,352</td></tr><tr><td class=\\"border border-gray-400 p-2 font-semibold\\">Total</td><td class=\\"border border-gray-400 p-2 text-center\\">55,984</td><td class=\\"border border-gray-400 p-2 text-center\\">23,784</td><td class=\\"border border-gray-400 p-2 text-center\\">7,652</td><td class=\\"border border-gray-400 p-2 text-center\\">87,420</td></tr></tbody></table>",
    "explanation": "Out of 23,784 people working in another field, 11,753 majored in Business. Probability = $\\\\frac{11753}{23784} \\\\approx 0.494$, which is closest to 0.5."
  },
  {
    "id": "est1_2021_aug_q50",
    "examId": "EST12021Aug",
    "question": "$$x^2 + y^2 - 6x - 4y + 9 = 0$$\\n\\nThe equation above is an equation of a circle. Which of the lines represented by the equations below is tangent to this circle?",
    "options": [
      "$y = \\\\frac{1}{3}x - \\\\frac{1}{3}$",
      "$y = x$",
      "$y = 3$",
      "$x = 5$"
    ],
    "correctAnswer": 3,
    "explanation": "Complete square: $(x - 3)^2 + (y - 2)^2 = 4$. Center $(3, 2)$ and radius $r = 2$. Line $x=5$ distance to center $(3,2)$ is $|3 - 5| = 2$, which equals the radius."
  }
];`;

let p3 = fs.readFileSync('src/data/questions_est1_2021_aug_part3.ts', 'utf8');
let idx = p3.indexOf('  {\\n    "id": "est1_2021_aug_q44"');
if(idx === -1) {
    console.error("Could not find q44 in part3.");
} else {
    p3 = p3.substring(0, idx) + newQ44_50;
    fs.writeFileSync('src/data/questions_est1_2021_aug_part3.ts', p3);
    console.log("part3 updated.");
}
