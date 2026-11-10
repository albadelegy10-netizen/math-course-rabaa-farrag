const fs = require('fs');

let content = fs.readFileSync('src/data/questions_est1_2026_march.ts', 'utf8');

const { EST1_2026_MARCH_SET } = require('./check_march_bundle.cjs');

EST1_2026_MARCH_SET.forEach((q) => {
  if (q.options && q.options.length > 0 && typeof q.correctAnswer === 'string') {
    const idx = q.options.indexOf(q.correctAnswer);
    if (idx !== -1) {
      // replace `correctAnswer: "..."` with `correctAnswer: idx`
      // safely escape for regex
      const strToReplace = `correctAnswer: ${JSON.stringify(q.correctAnswer)}`;
      content = content.replace(strToReplace, `correctAnswer: ${idx}`);
    } else {
        // Also try with quotes if the file has different wrapping
        const strToReplace2 = `correctAnswer: "${q.correctAnswer}"`;
        const strToReplace3 = `correctAnswer: '${q.correctAnswer}'`;
        if (content.includes(strToReplace2)) {
            content = content.replace(strToReplace2, `correctAnswer: ${idx}`);
        } else if (content.includes(strToReplace3)) {
            content = content.replace(strToReplace3, `correctAnswer: ${idx}`);
        }
    }
  }
});

fs.writeFileSync('src/data/questions_est1_2026_march.ts', content, 'utf8');
console.log('Done mapping string answers to indices.');
