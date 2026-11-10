import sys, importlib, os, numpy as np
from PIL import Image, ImageDraw
sys.path.insert(0, 'data')
S = 150 / 105
def crop(exam_tag, hi_prefix, q, n):
    page, x0, y0, x1, y1 = q['fig']
    path = f'hi/{hi_prefix}-{page:02d}.png'
    im = Image.open(path).convert('L')
    box = tuple(int(v * S) for v in (x0, y0, x1, y1))
    im = im.crop(box)
    a = np.array(im).astype(int)
    keep = np.zeros(a.shape, bool)
    if q.get('keep'):
        k = [int(v * S) for v in q['keep']]
        keep[max(0,k[1]-box[1]):k[3]-box[1], max(0,k[0]-box[0]):k[2]-box[0]] = True
    for er in q.get('erase', []):
        e = [int(v * S) for v in er]
        a[max(0,e[1]-box[1]):max(0,e[3]-box[1]), max(0,e[0]-box[0]):max(0,e[2]-box[0])] = 255
    wm = (a >= 95) & (a <= 178) & ~keep
    a[wm] = 255
    a[(a > 178) & ~keep] = 255
    a = np.where((a < 95) & ~keep, np.clip(a * 0.6, 0, 255), a)
    im = Image.fromarray(a.astype('uint8'))
    # trim white margins
    arr = np.array(im); ys, xs = np.where(arr < 200)
    if len(xs):
        pad = 8
        im = im.crop((max(0, xs.min()-pad), max(0, ys.min()-pad), min(im.width, xs.max()+pad), min(im.height, ys.max()+pad)))
    os.makedirs(f'fig/{exam_tag}', exist_ok=True)
    out = f'fig/{exam_tag}/q{n}.png'
    im.save(out, optimize=True)
    return out
def run(tag, hi_prefix):
    m = importlib.import_module(tag)
    outs = [(i+1, crop(tag, hi_prefix, q, i+1)) for i, q in enumerate(m.Q) if q.get('fig')]
    # contact sheet
    ims = [(n, Image.open(p)) for n, p in outs]
    W = 1400; x = y = rowh = 0; sheet = Image.new('L', (W, 6000), 255); d = ImageDraw.Draw(sheet)
    for n, im in ims:
        im.thumbnail((440, 330))
        if x + im.width > W: x = 0; y += rowh + 30; rowh = 0
        d.text((x, y), f'Q{n}', fill=0); sheet.paste(im, (x, y + 14)); x += im.width + 20; rowh = max(rowh, im.height + 14)
    sheet.crop((0, 0, W, y + rowh + 20)).save(f'fig/{tag}_sheet.png')
    print(tag, len(outs), 'figures')
if __name__ == '__main__':
    run(sys.argv[1], sys.argv[2])
