const build = require('./build_est.cjs');
const { EST1_OFFICIAL_EXAMS: E, EST1_OFFICIAL_LESSONS: L } = require('./est1.cjs');
const THEME = require('./theme_est1.json');
const fs = require('fs');
const pngW = f => { try { const b = fs.readFileSync(f.replace('file://', '')); return b.readUInt32BE(16); } catch (e) { return 0; } };
const only = process.argv[2] ? process.argv[2].split(',') : null;
const seen = new Set(); const jobs = [];
for (const l of L) {
  const out = '/home/claude/site/public' + l.pdfUrl;
  if (seen.has(out) || (only && !only.includes(l.id))) continue; seen.add(out);
  const qs = E[l.id].map(q => {
    const img = q.image ? 'file:///home/claude/site/public' + q.image : undefined;
    const imageOnly = /read the question below/.test(q.question);
    const exp = String(q.explanation || '').replace(/\n?\*\*Answer[^\n]*$/, '');
    return { ...q, image: img, imageOnly, imgmm: img ? Math.min(178, pngW(img) / 150 * 25.4 * 1.05) : 0, explanation: exp || (imageOnly ? 'See the answer key.' : '') };
  });
  const name = l.pdfUrl.split('/').pop().replace('.pdf', '').replace('EST1-', '').replace(/-/g, ' ');
  const C = { kicker: 'Digital SAT & EST Math Courses', reach: 'Digital SAT &amp; EST Math', label: 'EST I Math • Official Exam • Practice Test',
    title: 'EST1 ' + name, subtitle: 'Official Exam • Full Practice Test', topics: 'Algebra, functions, data analysis, probability and geometry from the official EST I paper',
    minutes: l.examMinutes || 90, expert: 'Digital SAT &amp; EST Math expert', expertCaps: 'DIGITAL SAT &amp; EST MATH EXPERT',
    short: name, banner: 'EST I MATH • OFFICIAL EXAM • ' + name.toUpperCase() };
  jobs.push({ slug: l.id, qs, C, out });
}
fs.mkdirSync('/home/claude/site/public/pdfs/est1', { recursive: true });
build(jobs, THEME).then(r => r.forEach(([o, n]) => console.log(o.split('/').pop(), n, 'pages', Math.round(fs.statSync(o).size / 1024) + 'KB')));
