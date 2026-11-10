import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Helper to wrap in $ if not already wrapped
def wrap(match):
    s = match.group(1)
    # Check if already wrapped
    if '$' + s + '$' in text: 
        # Actually this is flawed if there are duplicates, but we're replacing the whole text
        pass
    return f'${s}$'

# Replace specific substrings for Q5
text = text.replace('f(x) = 3x + 1', '$f(x) = 3x + 1$')
text = text.replace('g(x) = \\\\frac{2x^2 - 3}{6x + 2}', '$g(x) = \\\\frac{2x^2 - 3}{6x + 2}$')
text = text.replace('x \\\\geq  0', '$x \\\\geq 0$')
text = text.replace('(f \\\\times g)(x) = \\\\frac{1}{2}', '$(f \\\\times g)(x) = \\\\frac{1}{2}$')

# Q7
text = text.replace('f(x) = \\\\frac{2x + 5}{3x - 6}', '$f(x) = \\\\frac{2x + 5}{3x - 6}$')
text = text.replace('x = 2', '$x = 2$')
text = text.replace('y = \\\\frac{2}{3}x', '$y = \\\\frac{2}{3}x$')

# Q8
text = text.replace('f(x) = 3x^2 - 4x + 1', '$f(x) = 3x^2 - 4x + 1$')
text = text.replace('g(x) = 3x + 4', '$g(x) = 3x + 4$')
text = text.replace('h(x) = x^2 + \\\\frac{2}{3}x', '$h(x) = x^2 + \\\\frac{2}{3}x$')
text = text.replace('(f + g)(h(3))', '$(f + g)(h(3))$')

# Q13
text = text.replace('f(x) = -5x^4 + 3x^3', '$f(x) = -5x^4 + 3x^3$')
text = text.replace('x approaches -\\\\infty', '$x \\\\to -\\\\infty$')
text = text.replace('f(x) approaches +\\\\infty', '$f(x) \\\\to +\\\\infty$')
text = text.replace('(\\\\frac{3}{5}, 0)', '$(\\\\frac{3}{5}, 0)$')
text = text.replace('(-\\\\infty, \\\\frac{9}{20})', '$(-\\\\infty, \\\\frac{9}{20})$')

# Q22
text = text.replace('g(x) = 2|2x - 1|', '$g(x) = 2|2x - 1|$')

# Q25
text = text.replace('f(x) = \\\\frac{2}{2x + 4} + 1', '$f(x) = \\\\frac{2}{2x + 4} + 1$')

# Clean up any double $$ that might have occurred if we accidentally wrapped twice
text = text.replace('$$f(x)', '$f(x)')
text = text.replace('1$$', '1$')

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Wrapped explicit equations in $")
