require('esbuild-register');
const { LESSONS } = require('./constants.tsx');
const ids = LESSONS.map(l => l.id);
const counts = {};
ids.forEach(id => counts[id] = (counts[id] || 0) + 1);
for (const [id, count] of Object.entries(counts)) {
  if (count > 1) console.log("Duplicate:", id, count);
}
console.log("Total lessons:", ids.length);
