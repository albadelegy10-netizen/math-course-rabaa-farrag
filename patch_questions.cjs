const fs = require('fs');
let content = fs.readFileSync('questions.ts', 'utf8');

content = content.replace(
  '[StaticLessonIds.EST1Variation]: EST_VARIATION_SET,',
  '[StaticLessonIds.EST1Variation]: EST_VARIATION_SET,\n  [StaticLessonIds.EST1ProbabilityPart1]: EST1_PROBABILITY_PART1,'
);
fs.writeFileSync('questions.ts', content);
