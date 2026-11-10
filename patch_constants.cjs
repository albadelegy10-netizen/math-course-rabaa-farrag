const fs = require('fs');

const deletedIds = ["dsat_custom_1776268459582","dsat_custom_1782818565522","dsat_custom_1782818566189","est1_2022_june_exam","est1_2022_march_exam","est1_2025_custom","est1_2025_form3","est1_2025_form5","est1_2025_form6","est1_2026_jan","est1_2026_may","est1_custom_1782814097985","est1_custom_1782814099360","est1_custom_1782814099848","est1_custom_1782814100060","est1_custom_1782814100270","est1_ex1","est1_ex2","est1_ex3","est1_linear_equation_part1","est1_new_exam","est1_percentage","est1_statistics_part1","est2_custom_1784471462112","geometry_custom_1771470921166","geometry_custom_1772859262897","geometry_custom_1776987139850","sat_2025_dec","sat_2025_dec_form_c","sat_2025_march_form_b","sat_2025_nov1","sat_circle_mastery","sat_ex1","sat_ex10","sat_ex3","sat_ex4","sat_ex5","sat_ex6","sat_ex7","sat_ex8","sat_ex9","sat_pythagoras_sin_law","solving_equation_28"];

let content = fs.readFileSync('constants.tsx', 'utf8');

// Find the start of LESSONS
const lessonsMatch = content.match(/export const LESSONS: Lesson\[\] = \[\s*\{/);
if (!lessonsMatch) {
  console.log("Could not find LESSONS array start");
  process.exit(1);
}

// Just add a filter map at the end of the file.
// Or we can just re-assign it. But wait, LESSONS is `const`.
// It's `export const LESSONS: Lesson[] = [ ... ];`
// We can rename it to `const _LESSONS` and then export `const LESSONS = _LESSONS.filter(...)`
content = content.replace(/export const LESSONS: Lesson\[\] = \[/, "const _LESSONS: Lesson[] = [");

const filterStr = `\nconst DELETED_IDS = new Set(${JSON.stringify(deletedIds)});
export const LESSONS = _LESSONS.filter(l => !DELETED_IDS.has(l.id) && !DELETED_IDS.has(l.id + '_exam'));\n`;

content += filterStr;
fs.writeFileSync('constants.tsx', content);
console.log("Patched constants.tsx successfully");
