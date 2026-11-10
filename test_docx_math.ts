import * as docx from 'docx';
for (const key in docx) {
  if (key.includes('Math')) console.log(key);
}
