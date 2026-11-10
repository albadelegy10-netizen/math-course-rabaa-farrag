const fs = require('fs');

let content = fs.readFileSync('questions_est1_2026_jan.ts', 'utf8');

// Fix the backticks inside the question string for est1_2026_jan_59
content = content.replace(
  /question: "`\$2x\^3 \+ 2x\^2 \+ 4x - 8 = \(x\^2 \+ bx \+ 4\)\(2x - a\)\$ \\n\\nIn the identity above, true for every real \$x\$, \$a\$ and \$b\$ are two integers\. Which of the following expressions has the smallest value\?`",/g,
  'question: "$2x^3 + 2x^2 + 4x - 8 = (x^2 + bx + 4)(2x - a)$ \\n\\nIn the identity above, true for every real $x$, $a$ and $b$ are two integers. Which of the following expressions has the smallest value?",'
);

// Fix the backticks inside the question string for est1_2026_jan_60
content = content.replace(
  /question: "`\$4\\\\sqrt{x} - 4 = x\$ \\n\\nWhat is the number of real solutions in the equation above\?`",/g,
  'question: "$4\\\\sqrt{x} - 4 = x$ \\n\\nWhat is the number of real solutions in the equation above?",'
);

fs.writeFileSync('questions_est1_2026_jan.ts', content);
