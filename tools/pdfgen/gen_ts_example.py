import sys, json, io, base64, importlib
from PIL import Image
sys.path.insert(0, 'data')
TABLE_OPEN = '<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">'
def b64png(path, maxw=700):
    im = Image.open(path).convert('L')
    if im.width > maxw: im = im.resize((maxw, int(im.height * maxw / im.width)), Image.LANCZOS)
    b = io.BytesIO(); im.quantize(16).save(b, 'PNG', optimize=True)
    return 'data:image/png;base64,' + base64.b64encode(b.getvalue()).decode()
def table_html(rows):
    h = TABLE_OPEN + '\n  <thead>\n    <tr class="bg-gray-100">' + ''.join(f'<th class="border border-gray-400 px-2 py-1">{c}</th>' for c in rows[0]) + '</tr>\n  </thead>\n  <tbody>\n'
    for r in rows[1:]:
        h += '    <tr>' + ''.join(f'<td class="border border-gray-400 px-2 py-1">{c}</td>' for c in r) + '</tr>\n'
    return h + '  </tbody>\n</table>'
def build(tag, n, title):
    m = importlib.import_module(tag)
    out = []
    for i, q in enumerate(m.Q):
        d = {'id': i + 1, 'question': q['q'], 'options': q['o'], 'correctAnswer': 'ABCDE'.index(m.KEY[i]),
             'explanation': q['e'], 'category': ''}
        svg = []
        if q.get('table'): svg.append(table_html(q['table']))
        if q.get('svgfile'): svg.append(open('data/' + q['svgfile']).read())
        if svg: d['svg'] = '\n'.join(svg)
        if q.get('fig'): d['image'] = b64png(f'fig/{tag}/q{i+1}.png')
        out.append(d)
    name = f'ACT2_3D_EXAM{n}'
    ts = "import { Question } from '../../../types';\n\n"
    ts += f"// {title} — transcribed from the 3D Academy ACT Subject Test (Math Level 1) PDF.\n"
    ts += "// Answers follow the PDF answer key. Figures are cleaned scans stored as base64 PNG.\n"
    ts += f"export const {name}: Question[] = " + json.dumps(out, indent=2, ensure_ascii=False) + ";\n"
    open(f'/home/claude/site/src/data/act2_3d/exam{n}.ts', 'w').write(ts)
    print(name, len(out), len(ts) // 1024, 'KB')
for n in (4, 5, 6, 7):
    build(f'e{n}', n, f'ACT2 Exam {n} (Test #{n})')
open('/home/claude/act2/q29.txt', 'w').write(b64png('fig/e8_q29.png'))
