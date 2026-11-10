import re
import json

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace any whitespace with space for the specific patterns we want to match
def flex_replace(text, pattern, replacement):
    # pattern can contain spaces which mean \s+
    regex = pattern.replace(' ', r'\s+')
    return re.sub(regex, replacement, text)

text = flex_replace(text, r'2x2 − 36x \+ 2', r'\\frac{2x^2 - 3}{6x + 2}')
text = flex_replace(text, r'2x \+ 53x − 6', r'\\frac{2x + 5}{3x - 6}')
text = flex_replace(text, r'y =23x', r'y = \\frac{2}{3}x')
text = flex_replace(text, r'x2 \+23x', r'x^2 + \\frac{2}{3}x')
text = flex_replace(text, r'22x \+ 4\+ 1', r'\\frac{2}{2x + 4} + 1')
text = flex_replace(text, r'\(f \times g\)\(x\) =12', r'(f \\times g)(x) = \\frac{1}{2}')
text = flex_replace(text, r'12\?', r'\\frac{1}{2}?')

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Math fractions fixed.")
