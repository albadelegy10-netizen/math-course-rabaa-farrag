const fs = require('fs');
const content = fs.readFileSync('src/data/questions_est1_2026_may_new.ts', 'utf-8');
const match = content.match(/f\(x\) = 3x \+ 1 and g\(x\) = (.*?), where/);
console.log("Raw in file:", JSON.stringify(match[1]));

// Let's eval it like the JS engine would
const evalled = eval('`' + match[1] + '`');
console.log("Evalled in JS:", JSON.stringify(evalled));
