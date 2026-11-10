import { LESSONS } from './constants';
const est1Exams = LESSONS.filter(l => {
  if (l.course && l.course.toUpperCase() === 'EST1') {
    if (l.type === 'exam') return true;
    if (!l.type && ((l.title || '').toLowerCase().includes('exam') || l.id.includes('ex'))) return true;
  }
  return false;
});
console.log(`Total EST1 exams: ${est1Exams.length}`);
est1Exams.forEach((e, i) => {
  console.log(`${i+1}. id: ${e.id} | title: "${e.title}" | order: ${e.order}`);
});
