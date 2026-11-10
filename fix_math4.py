import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's fix the specific problems with literal replacements, dealing with \n correctly
# Q5
text = text.replace('g(x) =2x\n2 − 3\n6x + 2\n,\nwhere', 'g(x) = \\frac{2x^2 - 3}{6x + 2}, where')
text = text.replace('g(x) =2x\n2 - 3\n6x + 2\n,\nwhere', 'g(x) = \\frac{2x^2 - 3}{6x + 2}, where')
# Wait, some minus signs might be U+2212. I'll just use regex.
text = re.sub(r'g\(x\)\s*=\s*2x\n2\s*[-−]\s*3\n6x\s*\+\s*2\n,\nwhere', r'g(x) = \\frac{2x^2 - 3}{6x + 2}, where', text)

text = re.sub(r'\(f\s*\\times\s*g\)\(x\)\s*=\s*\n1\n2\n\?', r'(f \\times g)(x) = \\frac{1}{2}?', text)

# Q7
text = re.sub(r'f\(x\)\s*=\s*\n2x\s*\+\s*5\n3x\s*[-−]\s*6\n,', r'f(x) = \\frac{2x + 5}{3x - 6},', text)
text = re.sub(r'y\s*=\s*\n2\n3\nx', r'y = \\frac{2}{3}x', text)

# Q8
text = re.sub(r'h\(x\)\s*=\s*x2\s*\+\s*\n2\n3\nx', r'h(x) = x^2 + \\frac{2}{3}x', text)

# Q25
text = re.sub(r'f\(x\)\s*=\s*\n2\n2x\s*\+\s*4\n\+\s*1\?', r'f(x) = \\frac{2}{2x + 4} + 1?', text)

# Q13 options (fixing option D containing Q14 context)
text = re.sub(r'("II and III\s*\n\nQuestions 14 - 16.*?table above.")', r'"II and III"', text, flags=re.DOTALL)

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Multiline fractions fixed.")
