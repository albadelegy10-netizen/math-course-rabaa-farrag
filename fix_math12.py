import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix Q35 junk
text = re.sub(r'\\nA school has 2,400 students\..*?The remaining students are in kindergarten\.', '', text, flags=re.DOTALL)
text = re.sub(r'A school has 2,400 students\..*?The remaining students are in kindergarten\.', '', text, flags=re.DOTALL)

# Fix Q40
text = text.replace('y = −3x − 2', '$y = -3x - 2$')
text = text.replace('(1, −5)', '$(1, -5)$')

# Fix Q42
q42_bad = "Given 𝐴(x) = 9x\\n2 − ax + 1 and 𝐵(x) = x\\n2 + bx + 25, where a and b are\\npositive real numbers, and if 𝐴(x) and 𝐵(x) represent perfect squares by having\\nequal roots, what is the value of a + b?"
q42_good = "Given $A(x) = 9x^2 - ax + 1$ and $B(x) = x^2 + bx + 25$, where a and b are positive real numbers, and if $A(x)$ and $B(x)$ represent perfect squares by having equal roots, what is the value of a + b?"
text = text.replace(q42_bad.replace('\\n', '\n'), q42_good)
text = re.sub(r'Given 𝐴\(x\) = 9x.*?value of a \+ b\?', lambda _: q42_good, text, flags=re.DOTALL)

# Fix Q44
q44_good = "What is the value of the radicand in the simplified form of $\\sqrt[3]{8a^4b^3} \\times \\sqrt[3]{ab^5}$ if a = 2 and b = -1?"
text = re.sub(r'What is the value of the radicand in the simplified form of.*?and b = −1\?', lambda _: q44_good, text, flags=re.DOTALL)

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)
