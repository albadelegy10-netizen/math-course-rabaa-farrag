import('./lessonService.js').then(ls => {
  const qs = ls.lessonService.getQuestions('est1_probability_part1');
  console.log("Found questions:", qs.length);
}).catch(console.error);
