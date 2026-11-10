import re
import json

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Make it extremely permissive
text = re.sub(r'2x2\s*[-−]\s*36x\s*\+\s*2', r'\\frac{2x^2 - 3}{6x + 2}', text)
text = re.sub(r'2x\s*\+\s*53x\s*[-−]\s*6', r'\\frac{2x + 5}{3x - 6}', text)
text = re.sub(r'y\s*=\s*23x', r'y = \\frac{2}{3}x', text)
text = re.sub(r'x2\s*\+\s*23x', r'x^2 + \\frac{2}{3}x', text)
text = re.sub(r'22x\s*\+\s*4\+\s*1', r'\\frac{2}{2x + 4} + 1', text)
text = re.sub(r'\(f\s*\\times\s*g\)\(x\)\s*=\s*12\?', r'(f \\times g)(x) = \\frac{1}{2}?', text)

# Just to make sure $ ... $ wraps the equations for aesthetic:
def add_latex(match):
    return f"${match.group(1)}$"

# Apply $ to fractions
text = re.sub(r'(\\frac\{.*?\}\{.*?\}[\s\+\-]*\d*)', add_latex, text)

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)
print("Math fractions fixed better.")
