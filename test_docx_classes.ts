import * as docx from 'docx';
for (const key in docx) {
  if (key === 'Math') console.log('Math', typeof docx[key]);
}
console.log(docx.Math.name);
