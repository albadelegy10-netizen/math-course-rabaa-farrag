const fs = require('fs');
const content = fs.readFileSync('constants.tsx', 'utf8');

const deletedIds = "dsat_custom_1776268459582,dsat_custom_1782818565522,dsat_custom_1782818566189,est1_2022_june_exam,est1_2022_march_exam,est1_2025_custom,est1_2025_form3,est1_2025_form5,est1_2025_form6,est1_2026_jan,est1_2026_may,est1_custom_1782814097985,est1_custom_1782814099360,est1_custom_1782814099848,est1_custom_1782814100060,est1_custom_1782814100270,est1_ex1,est1_ex2,est1_ex3,est1_linear_equation_part1,est1_new_exam,est1_percentage,est1_statistics_part1,est2_custom_1784471462112,geometry_custom_1771470921166,geometry_custom_1772859262897,geometry_custom_1776987139850,sat_2025_dec,sat_2025_dec_form_c,sat_2025_march_form_b,sat_2025_nov1,sat_circle_mastery,sat_ex1,sat_ex10,sat_ex3,sat_ex4,sat_ex5,sat_ex6,sat_ex7,sat_ex8,sat_ex9,sat_pythagoras_sin_law,solving_equation_28".split(',');

let found = [];
for (const id of deletedIds) {
  if (content.includes(`StaticLessonIds.${id}`) || content.includes(`id: '${id}'`) || content.includes(`id: "${id}"`)) {
     found.push(id);
  }
}
console.log('Static deleted:', found.join(','));
