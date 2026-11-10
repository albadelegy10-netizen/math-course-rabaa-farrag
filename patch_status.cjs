const fs = require('fs');

let code = fs.readFileSync('components/StudentHomework.tsx', 'utf-8');

code = code.replace(
    /const getStatus = \(lessonId: string\) => \{\n    const attempts = targetUser\.history\?\.filter\(h => h\.lessonId === lessonId\) \|\| \[\];\n    if \(attempts\.length > 0\) \{\n      const bestScore = Math\.max\(\.\.\.attempts\.map\(a => a\.score\)\);\n      return \{ completed: true, score: bestScore \};\n    \}\n    return \{ completed: false, score: 0 \};\n  \};/g,
    `const getStatus = (lessonId: string) => {
    const attempts = targetUser.history?.filter(h => h.lessonId === lessonId) || [];
    if (attempts.length > 0) {
      const bestScore = Math.max(...attempts.map(a => a.score));
      return { completed: true, score: bestScore, attempts };
    }
    return { completed: false, score: 0, attempts: [] };
  };`
);

fs.writeFileSync('components/StudentHomework.tsx', code);
console.log("Patched getStatus");
