import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('378 is 18% of:\n3x − y = 15\n6x + 2y = 18', '378 is 18% of:')
text = text.replace('{$$', '$$')

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)
