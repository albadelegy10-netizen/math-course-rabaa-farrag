import re
with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()
    
matches = re.finditer(r'id:\s*(\d+),\s*question:\s*`(.*?)`', text, re.DOTALL)
for m in matches:
    if int(m.group(1)) > 30:
        q_text = m.group(2)
        if '\n' in q_text:
            print(f"Q{m.group(1)}: {repr(q_text)}")
