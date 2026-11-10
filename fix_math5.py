import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Q8
text = re.sub(r'f\(x\)\s*=\s*3x\n2\s*[-−]\s*4x\s*\+\s*1', r'f(x) = 3x^2 - 4x + 1', text)
text = re.sub(r'h\(x\)\s*=\s*x\n2\s*\+\n2\n3\nx', r'h(x) = x^2 + \\frac{2}{3}x', text)

# Q13
text = re.sub(r'f\(x\)\s*=\s*[-−]5x\n4\s*\+\s*3x\n3\n,', r'f(x) = -5x^4 + 3x^3,', text)
text = re.sub(r'\(\n3\n5\n,\s*0\)', r'(\\frac{3}{5}, 0)', text)
text = re.sub(r'\([-−]\\infty,\n9\n20\)', r'(-\\infty, \\frac{9}{20})', text)

# Remove the context text from Q8 and Q13 that shouldn't be there
# Q8 text ends at "value\nof (f + g)(h(3))?"
# After that is the context for Q9/10
q8_junk = r'\nA group of students sketched several cylindrical shapes with varying radii and heights, as shown\nin the scatterplot above. A line of best fit is displayed.'
text = text.replace(q8_junk, '')

# Q13 text ends at "III.The function f is decreasing on ..."
# After that is the context for Q14
q13_junk = r'\nScore 𝒏 0 \\leq  n < 10 10 \\leq  n < 14 14 \\leq  n < 17 17 \\leq  n \\leq  20\nNumber of Students 7 13 11 5\nA group of students at a learning center took a literature exam, and the scores were given out of\n20, with a passing score of 10. The scores are summarized in the table above.'
text = text.replace(q13_junk, '')

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Q8 and Q13 fixed.")
