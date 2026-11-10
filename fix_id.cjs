const fs = require('fs');
let types = fs.readFileSync('types.ts', 'utf8');
types = types.replace(/EST12026March:\s*'est1_2026_march'/, "EST12026March: 'est1_2026_march_new'");
fs.writeFileSync('types.ts', types);

let questions = fs.readFileSync('questions.ts', 'utf8');
questions = questions.replace(/\[StaticLessonIds\.EST12026March\]:\s*est1_2026_march,/, "[StaticLessonIds.EST12026March]: est1_2026_march,");
// actually, since I just changed the value of the enum in types.ts, it will automatically use 'est1_2026_march_new' for the key in questions.ts!
// Let's verify.
