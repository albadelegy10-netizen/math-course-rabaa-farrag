import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix unicode square roots
text = re.sub(r'\\u221a(\d+)', r'$\\sqrt{\1}$', text)
text = re.sub(r'\\u221a', r'\\sqrt', text)  # Fallback for \u221a without immediate digits

# Replace \sqrt with \\sqrt (since we just introduced \sqrt)
text = re.sub(r'(?<!\\)\\sqrt', r'\\\\sqrt', text)

# Fix {$$ in Q12
text = text.replace('{$$', '$$')

# Fix \ud835\udf0b (pi)
text = text.replace('\\ud835\\udf0b', r'\\\\pi')

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed")
