const fs = require('fs');
const content = fs.readFileSync('src/data/questions_est1_2021_aug_part3.ts', 'utf8');
console.log(content.slice(0, 300));
console.log('---');
console.log(content.substring(content.indexOf('html'), content.indexOf('html') + 100));
