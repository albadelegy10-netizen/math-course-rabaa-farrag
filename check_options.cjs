// check_options.js
require('ts-node').register({ transpileOnly: true });
const { EST1_2026_MARCH_SET } = require('./src/data/questions_est1_2026_march.ts');

let missing = 0;
EST1_2026_MARCH_SET.forEach((q, index) => {
    // some questions might not be multiple choice if options is empty, but if options exist, correct should be one of them
    if (q.options && q.options.length > 0) {
        if (!q.options.includes(q.correctAnswer)) {
            console.log(`Question ${index + 1} (id: ${q.id}): correctAnswer "${q.correctAnswer}" NOT found in options [${q.options.join(', ')}]`);
            missing++;
        }
    }
});
if (missing === 0) console.log("All correct answers match their options.");
