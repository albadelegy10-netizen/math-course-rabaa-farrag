const build = require('./build_est.cjs');
const qs = require('./est1_sample.json').map(q => ({ ...q, options: q.options.map(o => String(o).replace(/^\s*[A-E]\)\s*/, '')), explanation: q.explanation || '' }));
const C = { kicker: 'Digital SAT & EST Math Courses', reach: 'Digital SAT &amp; EST Math', label: 'EST I • Official Exam • Practice Test', title: 'EST1 March 2026', subtitle: 'Official Exam • Full Practice Test', topics: 'Algebra, functions, geometry, statistics & word problems', minutes: 75, expert: 'Digital SAT &amp; EST Math expert', expertCaps: 'DIGITAL SAT &amp; EST MATH EXPERT', short: 'March 2026', banner: 'EST I MATH • OFFICIAL EXAM • MARCH 2026' };
const THEMES = {
  deep_vivid: { dark: '#022c1e', light: '#00e676', teal: '#00c853', pg: '#04492f', wm: 'rgba(2,44,30,.05)', soft: '#e9fbf1' },
  deep_neon:  { dark: '#01261a', light: '#39ff88', teal: '#10d07a', pg: '#063f2a', wm: 'rgba(1,38,26,.05)', soft: '#eafdf2' },
};
(async () => {
  for (const [k, t] of Object.entries(THEMES)) {
    const r = await build([{ slug: 'prev_' + k, qs, C, out: __dirname + '/out/prev_' + k + '.pdf' }], t);
    console.log(r);
  }
})();
