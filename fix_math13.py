import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace mathematically styled letters
text = text.replace('\ud835\udc65', 'x') # math italic x
text = text.replace('\ud835\udc66', 'y') # math italic y
text = text.replace('\ud835\udc4e', 'a') # math italic a
text = text.replace('\ud835\udc50\ud835\udc5a', 'cm') # math italic c and m
text = text.replace('\ud835\udc50', 'c')
text = text.replace('\ud835\udc5a', 'm')
text = text.replace('\u2212', '-') # MINUS SIGN

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)
