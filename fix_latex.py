import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

commands = ['frac', 'times', 'geq', 'leq', 'infty', 'sqrt', 'begin', 'end', 'cases', 'circ']
for cmd in commands:
    # Match a backslash that is not preceded by a backslash
    text = re.sub(r'(?<!\\)\\' + cmd, r'\\\\' + cmd, text)

# For the newline \\ in cases, it needs to be \\\\
text = re.sub(r'(?<!\\)\\\\\s+6x', r'\\\\\\\\ 6x', text)

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed")
