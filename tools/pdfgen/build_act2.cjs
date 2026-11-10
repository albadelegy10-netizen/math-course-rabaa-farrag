// Builds branded printable PDFs for the ACT2 exams (Rabaa Farrag style).
const fs = require('fs');
const path = require('path');
const katex = require('katex');
const { chromium } = require('playwright');
const { ACT2_3D_EXAMS } = require('./exams.cjs');

const WWW = path.join(__dirname, 'www');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function rich(text) {
  let out = '', s = String(text || '').replace(/\\\$/g, '\uE001');
  const re = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g; let last = 0, m;
  while ((m = re.exec(s))) {
    out += prose(s.slice(last, m.index));
    out += katex.renderToString((m[1] || m[2]).replace(/\uE001/g, '\\$'), { throwOnError: false, displayMode: !!m[1] });
    last = re.lastIndex;
  }
  return out + prose(s.slice(last));
}
const prose = t => esc(t).replace(/\uE001/g, '$').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
function figureHtml(q) {
  let h = '';
  if (q.image) h += `<div class="fig"><img src="${q.image}"></div>`;
  if (q.svg) {
    // tables may contain $...$ inside cells; render math in text nodes only
    const svg = q.svg.replace(/>([^<]*\$[^<]*\$[^<]*)</g, (_, t) => '>' + rich(t.replace(/\\\$/g, '')).replace(//g, '$') + '<');
    h += `<div class="fig">${svg}</div>`;
  }
  return h;
}
const LETTERS = 'ABCDE';
function card(q, i) {
  const opts = q.options.map((o, k) => `<div class="opt"><span class="bub">${LETTERS[k]}</span><span class="ot">${rich(o)}</span></div>`).join('');
  return `<div class="card"><div class="num">${i + 1}</div><div class="body"><div class="qt">${rich(q.question)}</div>${figureHtml(q)}<div class="opts ${q.options.every(o => String(o).length < 28) && q.options.length === 4 ? 'grid' : ''}">${opts}</div></div></div>`;
}
function solCard(q, i) {
  const idx = Number(q.correctAnswer);
  const body = String(q.explanation || '').replace(/\n?\*\*Answer:[^\n]*$/, '');
  return `<div class="scard"><div class="shead"><span class="num">${i + 1}</span><span class="ans">Answer: <b>${LETTERS[idx]}</b></span><span class="aopt">${rich(q.options[idx])}</span></div><div class="sbody">${rich(body)}</div></div>`;
}
const TOPICS = {1:'Algebra, geometry, functions, probability & spatial reasoning',2:'Linear systems, similarity, probability, functions & logic',3:'Chords, prisms, inequalities, algebra & functions',4:'Area, slopes, factoring, similarity, statistics & circles',5:'Polygons, circles, trigonometry, factoring & radicals',6:'Radicals, absolute value, percents, word problems & solids',7:'Statistics, nets, systems, logic & graphs of functions',8:'Geometry, 3D solids, tangents, logic & coordinate geometry'};

function html(n, qs) {
  const key = qs.map((q, i) => ({ n: i + 1, a: LETTERS[Number(q.correctAnswer)] }));
  const keyRows = []; for (let r = 0; r < 25; r++) keyRows.push([key[r], key[r + 25]]);
  return `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="katex/katex.min.css">
<style>
@font-face{font-family:P;font-weight:400;src:url(poppins-latin-400-normal.woff2)}
@font-face{font-family:P;font-weight:500;src:url(poppins-latin-500-normal.woff2)}
@font-face{font-family:P;font-weight:600;src:url(poppins-latin-600-normal.woff2)}
@font-face{font-family:P;font-weight:700;src:url(poppins-latin-700-normal.woff2)}
@font-face{font-family:P;font-weight:800;src:url(poppins-latin-800-normal.woff2)}
@font-face{font-family:P;font-weight:900;src:url(poppins-latin-900-normal.woff2)}
:root{--navy:#14265c;--pink:#e83e6c;--yellow:#fbbf24;--teal:#14a38b;--blue:#3b82f6;--ink:#0f1a3c;--muted:#5b6478;--line:#dfe3ee}
*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}
@page{size:A4;margin:0}
body{margin:0;font-family:P,sans-serif;color:var(--ink)}
.page{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;background:#fff}
.stripe{height:5px;display:flex}.stripe i{flex:1}
.stripe i:nth-child(1){background:var(--pink)}.stripe i:nth-child(2){background:var(--yellow)}.stripe i:nth-child(3){background:var(--teal)}.stripe i:nth-child(4){background:var(--navy)}.stripe i:nth-child(5){background:var(--blue)}
/* cover */
.hero{height:62mm;background:var(--navy);position:relative;overflow:hidden;color:#fff}
.hero .left{position:absolute;left:14mm;top:12mm}
.kicker{font-size:8.5pt;font-weight:700;letter-spacing:.14em;color:var(--yellow);text-transform:uppercase}
.hero h1{font-size:30pt;font-weight:800;margin:1mm 0 0;letter-spacing:-.01em}
.uline{width:22mm;height:3px;background:var(--yellow);border-radius:3px;margin:2mm 0 4mm}
.phone{display:inline-block;background:var(--yellow);color:var(--navy);font-weight:800;font-size:14pt;padding:2mm 7mm;border-radius:99px}
.hero .right{position:absolute;right:0;top:0;width:96mm;height:100%;background:#fff;clip-path:polygon(18% 0,100% 0,100% 100%,0 100%);}
.bars{position:absolute;right:86mm;top:-5mm;height:75mm;width:22mm;transform:skewX(-14deg)}
.bars i{position:absolute;top:0;bottom:0;width:4mm}
.bars i:nth-child(1){left:0;background:var(--yellow)}.bars i:nth-child(2){left:6mm;background:var(--pink)}.bars i:nth-child(3){left:12mm;background:var(--teal)}
.yrs{position:absolute;right:10mm;top:7mm;width:72mm;color:var(--navy)}
.yrs .big{font-size:40pt;font-weight:900;color:var(--pink);line-height:1;float:left;margin-right:3mm}
.yrs .t1{font-size:12pt;font-weight:800;line-height:1.1;padding-top:2mm}.yrs .t1 span{color:var(--teal)}
.yrs .t2{clear:both;font-size:12.5pt;font-weight:800;line-height:1.2;margin-top:2mm}.yrs .t2 b{color:var(--pink);font-size:15pt}
.free{display:inline-block;margin-top:2.5mm;background:var(--teal);color:#fff;font-weight:800;font-size:9.5pt;padding:1.6mm 6mm;border-radius:99px;letter-spacing:.03em}
.dont{font-size:7pt;color:var(--pink);font-weight:700;margin-top:1.4mm}
.circ{position:absolute;border-radius:50%}
.content{padding:9mm 14mm 0}
.label{font-size:7.5pt;font-weight:800;letter-spacing:.12em;color:var(--teal);text-transform:uppercase}
.title{font-size:28pt;font-weight:800;color:var(--navy);margin:1mm 0 0;line-height:1.1}
.subtitle{font-size:19pt;font-weight:700;color:var(--pink);margin:0 0 2mm}
.desc{font-size:9.5pt;color:var(--muted);max-width:165mm}
.stats{display:flex;gap:5mm;margin:7mm 0}
.stat{flex:1;border:1px solid var(--line);border-radius:4mm;text-align:center;padding:5mm 2mm 4mm;position:relative;overflow:hidden}
.stat::before{content:'';position:absolute;left:0;right:0;top:0;height:2mm}
.stat.a::before{background:var(--pink)}.stat.b::before{background:var(--teal)}.stat.c::before{background:var(--yellow)}
.stat .v{font-size:22pt;font-weight:800;line-height:1.1}.stat.a .v{color:var(--pink)}.stat.b .v{color:var(--teal)}.stat.c .v{color:var(--navy)}
.stat .k{font-size:6.5pt;font-weight:700;letter-spacing:.16em;color:var(--muted)}
.namebox{background:#f2f4fb;border:1px solid var(--line);border-radius:4mm;padding:6mm 7mm;display:flex;gap:8mm;font-size:7pt;font-weight:800;letter-spacing:.14em;color:var(--navy)}
.namebox div{display:flex;align-items:flex-end;gap:2mm}.namebox i{flex:1;border-bottom:1px solid #9aa3b8;height:1px}
.tips{margin-top:7mm;background:#e8f6f2;border:1px solid #c5e9df;border-radius:4mm;padding:5mm 7mm;font-size:9pt}
.tips h4{margin:0 0 2mm;color:var(--teal);font-size:10pt}
.tips ul{margin:0;padding-left:5mm}.tips li{margin:1mm 0}
.coach{margin-top:7mm;background:var(--navy);border-radius:5mm;color:#fff;padding:6mm 7mm;display:flex;gap:5mm;align-items:center;position:relative;overflow:hidden}
.rf{width:15mm;height:15mm;border-radius:50%;border:2px solid var(--yellow);color:var(--yellow);font-weight:800;font-size:13pt;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.coach .k{font-size:7pt;font-weight:800;letter-spacing:.14em;color:var(--yellow)}
.coach h3{margin:.5mm 0;font-size:15pt}.coach p{margin:0;font-size:8.5pt;color:#d6dcf0}.coach b{color:var(--yellow)}
.credit{position:absolute;left:14mm;right:14mm;bottom:9mm;font-size:7pt;color:#9aa3b8}
.bottom{position:absolute;left:0;right:0;bottom:0}
/* question pages */
.qhead{display:flex;justify-content:space-between;padding:4mm 14mm 0;font-size:7.5pt;font-weight:800;letter-spacing:.12em;color:var(--navy)}
.qhead .dot{display:inline-block;width:2mm;height:2mm;border-radius:50%;background:var(--yellow);margin-right:2mm;vertical-align:middle}
.qhead .r{letter-spacing:.02em;font-weight:600}.qhead .r b{color:var(--pink)}
.banner{margin:4mm 14mm 0;background:var(--navy);border-radius:4mm;padding:4mm 6mm;color:#fff;display:flex;justify-content:space-between;align-items:center}
.banner .k{font-size:7pt;font-weight:800;letter-spacing:.14em;color:var(--yellow)}
.banner h2{margin:0;font-size:15pt}
.pill{background:var(--yellow);color:var(--navy);font-weight:800;font-size:8pt;padding:1.5mm 5mm;border-radius:99px}
.flow{position:absolute;left:14mm;right:14mm;top:var(--top);bottom:26mm}
.card{display:flex;gap:4mm;border:1px solid var(--line);border-left:5px solid var(--teal);border-radius:3.5mm;padding:4mm 5mm;margin-bottom:3.5mm;break-inside:avoid;background:#fff}
.num{width:8mm;height:8mm;border-radius:50%;background:var(--navy);color:#fff;font-weight:800;font-size:9.5pt;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.body{flex:1;min-width:0;font-size:9.5pt;line-height:1.45}
.qt{font-weight:500;margin-top:.8mm}
.fig{margin:2.5mm 0;text-align:center}
.fig img{max-width:80%;max-height:64mm}
.fig svg{max-width:80%;max-height:60mm;width:auto;height:auto;min-height:38mm}
.fig table{border-collapse:collapse;margin:0 auto;font-size:9pt}.fig td,.fig th{border:1px solid #888;padding:1mm 3mm}.fig thead tr{background:#f1f2f6}
.opts{margin-top:2mm;display:flex;flex-direction:column;gap:1.4mm}
.opts.grid{display:grid;grid-template-columns:1fr 1fr;column-gap:6mm}
.opt{display:flex;align-items:center;gap:2.5mm}
.bub{width:5.2mm;height:5.2mm;border-radius:50%;border:1.3px solid var(--teal);color:var(--teal);font-size:7pt;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.wm{position:absolute;left:50%;top:52%;transform:translate(-50%,-50%) rotate(-38deg);font-size:64pt;font-weight:800;color:rgba(20,38,92,.045);white-space:nowrap;pointer-events:none;z-index:5}
.foot{position:absolute;left:0;right:0;bottom:0;height:18mm;background:var(--navy);color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 14mm}
.foot .n{font-weight:800;font-size:11pt}.foot .s{font-size:5.5pt;letter-spacing:.14em;color:#c3cbe6;font-weight:700}
.join{background:var(--teal);font-weight:800;font-size:7.5pt;padding:2mm 6mm;border-radius:99px;letter-spacing:.08em}
.call{text-align:right}.call .s{display:block}.call b{color:var(--yellow);font-size:13pt}
.pg{background:#2b3f7a;border-radius:99px;font-size:7pt;font-weight:800;padding:1mm 3mm;margin-left:3mm;vertical-align:middle}
.footwrap{position:absolute;left:0;right:0;bottom:18mm}
.katex{font-size:1.06em}
/* solutions */
.scard{border:1px solid var(--line);border-left:5px solid var(--pink);border-radius:3.5mm;padding:3.5mm 5mm;margin-bottom:3mm;break-inside:avoid;background:#fff}
.shead{display:flex;align-items:center;gap:3mm;margin-bottom:1.5mm}
.shead .ans{font-size:8.5pt;font-weight:700;color:var(--muted)}.shead .ans b{color:var(--teal);font-size:10pt}
.shead .aopt{font-size:9pt;color:var(--ink);background:#e8f6f2;border-radius:2mm;padding:.5mm 2.5mm}
.sbody{font-size:9pt;line-height:1.55;color:#24304f}.sbody b{color:var(--navy)}
.sbody .katex-display{margin:1mm 0}
/* answer key */
.keytbl{border-collapse:separate;border-spacing:0;margin:6mm auto 0;font-size:10pt;width:120mm}
.keytbl td,.keytbl th{border-bottom:1px solid var(--line);padding:1.6mm 4mm;text-align:center}
.keytbl th{background:var(--navy);color:#fff;font-size:8pt;letter-spacing:.1em}
.keytbl td.a{font-weight:800;color:var(--teal)}
.keytbl tr:nth-child(even) td{background:#f6f7fb}
</style></head><body>
<!-- COVER -->
<div class="page">
  <div class="hero">
    <div class="circ" style="width:60mm;height:60mm;left:-18mm;bottom:-30mm;background:rgba(255,255,255,.05)"></div>
    <div class="left"><div class="kicker">ACT Subject Test & Digital SAT Math Courses</div><h1>Rabaa Farrag</h1><div class="uline"></div><div class="phone">01120486569</div></div>
    <div class="right">
      <div class="circ" style="width:30mm;height:30mm;right:-8mm;top:-8mm;background:#dbe6ff"></div>
      <div class="yrs"><div class="big">23</div><div class="t1">YEARS OF<br><span>EXPERIENCE</span></div>
        <div class="t2">Reach a <b>700+</b> in<br>ACT, Digital SAT &amp; EST Math</div>
        <div class="free">✓ FIRST SESSION IS FREE!</div><div class="dont">Don't watch others hit 700+ while you wait.</div></div>
    </div>
    <div class="bars"><i></i><i></i><i></i></div>
  </div>
  <div class="stripe"><i></i><i></i><i></i><i></i><i></i></div>
  <div class="circ" style="width:46mm;height:46mm;right:-14mm;top:80mm;background:#fdecc8;opacity:.7"></div>
  <div class="circ" style="width:22mm;height:22mm;right:40mm;top:70mm;background:#fbd3de;opacity:.7"></div>
  <div class="content" style="position:relative">
    <div class="label" style="color:var(--pink)">ACT2 • ACT Subject Test Math Level 1 • Practice Exam</div>
    <div class="title">ACT2 Exam ${n}</div>
    <div class="subtitle">Full Practice Test • Test #${n}</div>
    <div class="desc">${esc(TOPICS[n])}. Work through all 50 questions under timed conditions, then check your answers with the answer key and the step-by-step solutions at the end.</div>
    <div class="stats"><div class="stat a"><div class="v">50</div><div class="k">QUESTIONS</div></div><div class="stat b"><div class="v">MCQ</div><div class="k">MULTIPLE CHOICE</div></div><div class="stat c"><div class="v">60 min</div><div class="k">TIME LIMIT</div></div></div>
    <div class="namebox"><div style="flex:2.2">NAME <i></i></div><div style="flex:1.2">DATE <i></i></div><div style="flex:1">SCORE <i></i><span style="letter-spacing:0">/ 50</span></div></div>
    <div class="tips"><h4>How to get the most from this practice test</h4><ul>
      <li><b>Read</b> every question slowly and underline the key words.</li>
      <li><b>Draw</b> a quick sketch for every geometry question before you solve it.</li>
      <li><b>Solve</b> step by step and show your work.</li>
      <li><b>Check</b> your answer by substituting it back before you choose.</li></ul></div>
    <div class="coach"><div class="rf">RF</div><div><div class="k">YOUR MATH COACH</div><h3>Eng. Rabaa Farrag</h3><p>ACT, Digital SAT &amp; EST Math expert with <b>23 years of experience</b>, helping students master math and reach <b>700+</b>.</p></div></div>
  </div>
  <div class="bottom"><div class="stripe"><i></i><i></i><i></i><i></i><i></i></div></div>
</div>
<div id="cards" style="position:absolute;left:-9999px;width:182mm">${qs.map(card).join('')}</div>
<div id="sols" style="position:absolute;left:-9999px;width:182mm">${qs.map(solCard).join('')}</div>
<template id="keytpl"><div class="banner" style="margin-top:4mm"><div><div class="k">TEST #${n} • CHECK YOUR WORK</div><h2>Answer Key</h2></div><span class="pill">50 ANSWERS</span></div>
<table class="keytbl"><tr><th>Q</th><th>ANSWER</th><th>Q</th><th>ANSWER</th></tr>${keyRows.map(([a, b]) => `<tr><td>${a.n}</td><td class="a">${a.a}</td><td>${b.n}</td><td class="a">${b.a}</td></tr>`).join('')}</table></template>
<script>
const N=${n};
function pageShell(first){
  const p=document.createElement('div');p.className='page';
  p.innerHTML='<div class="stripe"><i></i><i></i><i></i><i></i><i></i></div><div class="qhead"><span><span class="dot"></span>ENG. RABAA FARRAG</span><span class="r">ACT2 • <b>Exam '+N+'</b> • '+(window.__label||'Practice Questions')+'</span></div>'
   +(first?'<div class="banner"><div><div class="k">ACT SUBJECT TEST • MATH LEVEL 1 • TEST #'+N+'</div><h2>Practice Questions</h2></div><span class="pill">50 QUESTIONS</span></div>':'')
   +'<div class="wm">Rabaa Farrag</div><div class="flow" style="--top:'+(first?'34mm':'14mm')+'"></div>'
   +'<div class="foot"><div><div class="n">Rabaa Farrag</div><div class="s">ACT, DIGITAL SAT &amp; EST MATH EXPERT • 23 YEARS OF EXPERIENCE</div></div><div class="join">JOIN • FIRST SESSION FREE</div><div class="call"><span class="s">CALL TO BOOK</span><b>01120486569</b><span class="pg"></span></div></div>';
  document.body.appendChild(p);return p;
}
const cards=[...document.querySelectorAll('#cards .card')];
let page=pageShell(true), flow=page.querySelector('.flow');
for(const c of cards){
  flow.appendChild(c);
  if(flow.scrollHeight>flow.clientHeight+1 && flow.children.length>1){ page=pageShell(false); flow=page.querySelector('.flow'); flow.appendChild(c); }
}
window.__label='Answer Key'; const kp=pageShell(false); kp.querySelector('.flow').appendChild(document.getElementById('keytpl').content.cloneNode(true));
document.getElementById('cards').remove();
// Detailed solutions
window.__label='Detailed Solutions'; let sp=pageShell(false), sflow=sp.querySelector('.flow');
const sb=document.createElement('div'); sb.className='banner'; sb.style.margin='0 0 4mm';
sb.innerHTML='<div><div class="k">TEST #'+N+' • STEP-BY-STEP</div><h2>Detailed Solutions</h2></div><span class="pill">50 SOLUTIONS</span>';
sflow.appendChild(sb);
for(const c of [...document.querySelectorAll('#sols .scard')]){
  sflow.appendChild(c);
  if(sflow.scrollHeight>sflow.clientHeight+1 && sflow.children.length>1){ sp=pageShell(false); sflow=sp.querySelector('.flow'); sflow.appendChild(c); }
}
document.getElementById('sols').remove();
const pages=[...document.querySelectorAll('.page')];
pages.forEach((p,i)=>{const g=p.querySelector('.pg'); if(g) g.textContent=(i+1)+' / '+pages.length;});
pages[pages.length-1].style.pageBreakAfter='auto';
window.__done=pages.length;
</script></body></html>`;
}

(async () => {
  const only = process.argv[2] ? process.argv[2].split(',').map(Number) : [1,2,3,4,5,6,7,8];
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const n of only) {
    const qs = ACT2_3D_EXAMS['act2_3d_exam' + n];
    const file = path.join(WWW, `exam${n}.html`);
    fs.writeFileSync(file, html(n, qs));
    await page.goto('file://' + file);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => window.__done);
    const pages = await page.evaluate(() => window.__done);
    const out = path.join(__dirname, 'out', `ACT2-Exam-${n}.pdf`);
    await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log(out, pages, 'pages', Math.round(fs.statSync(out).size / 1024) + 'KB');
  }
  await browser.close();
})();
