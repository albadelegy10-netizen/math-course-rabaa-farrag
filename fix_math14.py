import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix literal unicode escapes
text = text.replace('\\u2212', '-')
text = text.replace('\\ud835\\udc65', 'x')
text = text.replace('\\ud835\\udc66', 'y')
text = text.replace('\\ud835\\udc4e', 'a')
text = text.replace('\\ud835\\udc50\\ud835\\udc5a', 'cm')
text = text.replace('\\ud835\\udc50', 'c')
text = text.replace('\\ud835\\udc5a', 'm')

# Fix Q3 options
text = text.replace('"-6 y = a(x - 1)(x + 4)"', '"-6"')

# Let's wrap all options in LaTeX if they look like equations
def latexify_option(m):
    opt = m.group(1)
    if 'x' in opt or 'y' in opt or '=' in opt or '\\' in opt:
        if not opt.startswith('$'):
            return f'"${opt}$"'
    return f'"{opt}"'

# Re-apply carefully. But wait, replacing `"-6 y = a(x - 1)(x + 4)"` with `"-6"` works.
with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)
