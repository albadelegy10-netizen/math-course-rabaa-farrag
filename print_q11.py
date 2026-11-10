import re
with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()
    
m = re.search(r'id:\s*11,\s*question:\s*`(.*?)`', text, re.DOTALL)
print(repr(m.group(1)))
