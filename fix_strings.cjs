const fs = require('fs');

let content = fs.readFileSync('questions_est1_2026_jan.ts', 'utf8');

content = content.replace(
  'question: "$\\frac{2x - 7}{5} = \\frac{4x^2 + 7}{10x}$' + '\n\n' + 'What is the value of $x$ in the equation above?",',
  'question: `$\\frac{2x - 7}{5} = \\frac{4x^2 + 7}{10x}$ \\n\\nWhat is the value of $x$ in the equation above?`,'
);

content = content.replace(
  'question: "$\\sqrt{13 + x} = x + 1$' + '\n\n' + 'What is the value of $x$?",',
  'question: `$\\sqrt{13 + x} = x + 1$ \\n\\nWhat is the value of $x$?`,'
);

content = content.replace(
  'question: "What is the exponent of $n$ in the simplified form of the expression below?' + '\n\n' + '$\\frac{[(2m^{10}n^{14})^4]^5}{(3m^4n^2)^3}$",',
  'question: `What is the exponent of $n$ in the simplified form of the expression below?\\n\\n$\\frac{[(2m^{10}n^{14})^4]^5}{(3m^4n^2)^3}$`,'
);

content = content.replace(
  'question: "$2x^3 + 2x^2 + 4x - 8 = (x^2 + bx + 4)(2x - a)$' + '\n\n' + 'In the identity above, true for every real $x$, $a$ and $b$ are two integers. Which of the following expressions has the smallest value?",',
  'question: `$2x^3 + 2x^2 + 4x - 8 = (x^2 + bx + 4)(2x - a)$ \\n\\nIn the identity above, true for every real $x$, $a$ and $b$ are two integers. Which of the following expressions has the smallest value?`,'
);

content = content.replace(
  'question: "$4\\sqrt{x} - 4 = x$' + '\n\n' + 'What is the number of real solutions in the equation above?",',
  'question: `$4\\sqrt{x} - 4 = x$ \\n\\nWhat is the number of real solutions in the equation above?`,'
);

fs.writeFileSync('questions_est1_2026_jan.ts', content);
