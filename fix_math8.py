import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix Q11
text = text.replace('378 is 18% of:3x − y = 15\n6x + 2y = 18', '378 is 18% of:')
text = text.replace('378 is 18% of:3x − y = 156x + 2y = 18', '378 is 18% of:')

# Fix Q12
# The equations belong in Q12
q12_fixed = "\\n$$ \\\\begin{cases} 3x - y = 15 \\\\\\\\ 6x + 2y = 18 \\\\end{cases} $$\\nThe solution of the system of equations"
text = re.sub(r'\{?The solution of the system of equations', q12_fixed, text)

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)
