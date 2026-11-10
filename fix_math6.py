import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix Q8 junk
text = re.sub(r'\\nA group of students sketched several cylindrical shapes.*?A line of best fit is displayed\.', '', text, flags=re.DOTALL)
text = re.sub(r'A group of students sketched several cylindrical shapes.*?A line of best fit is displayed\.', '', text, flags=re.DOTALL)

# Fix Q13 junk
text = re.sub(r'\\nScore 𝒏 0 \\\\leq.*?summarized in the table above\.', '', text, flags=re.DOTALL)
text = re.sub(r'Score 𝒏 0 \\\\leq.*?summarized in the table above\.', '', text, flags=re.DOTALL)

# Q11 options fix (has system of equations)
text = re.sub(r'"2,250 \{ 3x − y = 15 6x \+ 2y = 18"', r'"2,250"', text)

# Let's fix the question 12 string that starts with "The solution of the system"
text = re.sub(r'(question:\s*`)The solution of the system', r'\1\\begin{cases} 3x - y = 15 \\\\ 6x + 2y = 18 \\end{cases}\\nThe solution of the system', text)

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Junk removed and Q11/12 fixed.")
