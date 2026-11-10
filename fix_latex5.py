import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix Q28 options
opts_bad = '["x1 = -4 - $\\\\sqrt{14}$ 2", "x1 = -2 - $\\\\sqrt{14}$ 2", "x1 = -4 - $\\\\sqrt{14}$ 4", "x1 = -4 + $\\\\sqrt{14}$ 4"]'
opts_good = '["$x_1 = \\\\frac{-4 - \\\\sqrt{14}}{2}$", "$x_1 = \\\\frac{-2 - \\\\sqrt{14}}{2}$", "$x_1 = \\\\frac{-4 - \\\\sqrt{14}}{4}$", "$x_1 = \\\\frac{-4 + \\\\sqrt{14}}{4}$"]'
text = text.replace(opts_bad, opts_good)

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed Q28 options")
