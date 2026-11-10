import re
with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()
    
matches = re.finditer(r'id:\s*(\d+),\s*question:\s*`(.*?)`', text, re.DOTALL)
for m in matches:
    if m.group(1) in ['24', '28', '33', '34', '50']:
        print(f"Q{m.group(1)}: {repr(m.group(2))}")
