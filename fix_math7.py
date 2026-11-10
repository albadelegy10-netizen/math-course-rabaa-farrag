import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'\\nScore 𝒏.*?summarized in the table above\.', '', text, flags=re.DOTALL)
text = re.sub(r'Score 𝒏.*?summarized in the table above\.', '', text, flags=re.DOTALL)

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)
