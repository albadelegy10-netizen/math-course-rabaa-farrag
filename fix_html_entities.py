import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace < and <= inside the specific table headers in svg
text = text.replace('0 <= n < 10', '0 &le; n &lt; 10')
text = text.replace('10 <= n < 14', '10 &le; n &lt; 14')
text = text.replace('14 <= n < 17', '14 &le; n &lt; 17')
text = text.replace('17 <= n <= 20', '17 &le; n &le; 20')

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed HTML entities!")
