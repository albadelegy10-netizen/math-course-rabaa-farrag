require('esbuild-register');
const { STATIC_QUESTIONS } = require('./questions.ts');

const est2_rational = STATIC_QUESTIONS['est2_rational_function'];
const ids = est2_rational.map(q => q.id);
const dups = ids.filter((item, index) => ids.indexOf(item) !== index);
if (dups.length > 0) {
    console.log("Duplicate questions in rational:", dups);
} else {
    console.log("No duplicates in rational.");
}
