const { EST1_2026_MARCH_SET } = require('./check_march_bundle.cjs');

let missing = 0;
EST1_2026_MARCH_SET.forEach((q, index) => {
    if (q.options && q.options.length > 0) {
        if (!q.options.includes(q.correctAnswer)) {
            console.log(`Question ${index + 1} (id: ${q.id}): correctAnswer "${q.correctAnswer}" NOT found in options [${q.options.join(', ')}]`);
            missing++;
        }
    }
});
if (missing === 0) console.log("All correct answers match their options.");
