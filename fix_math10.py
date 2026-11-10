import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix Q21
text = text.replace('f(x) = √3x − 9?', '$f(x) = \\sqrt{3x - 9}?$')

# Fix Q24
q24_bad = "If 3\\nx+5\\n+\\n7\\n2x−1\\n=\\nax+b\\n(x+5)(2x−1)\\nfor every x >\\n1\\n2\\n, where a and b are two constants, what\\nis the value of a + b?"
q24_good = "If $\\frac{3}{x+5} + \\frac{7}{2x-1} = \\frac{ax+b}{(x+5)(2x-1)}$ for every $x > \\frac{1}{2}$, where a and b are two constants, what is the value of a + b?"
text = text.replace(q24_bad.replace('\\n', '\n'), q24_good)

# Fix Q28
q28_bad = "Given the equation 2x\\n2 + ax + 1 = 0, where a is a real number, the sum of the\\nsolutions of the equation, x1 and x^2, is −4. If x1 < x^2, which of the following is\\nx1?"
q28_good = "Given the equation $2x^2 + ax + 1 = 0$, where a is a real number, the sum of the solutions of the equation, $x_1$ and $x_2$, is $-4$. If $x_1 < x_2$, which of the following is $x_1$?"
text = text.replace(q28_bad.replace('\\n', '\n'), q28_good)

# Fix Q50
q50_bad = "Which of the following statements is true about 𝐴(x) =\\n2x\\n(3x−1)2\\n?"
q50_good = "Which of the following statements is true about $A(x) = \\frac{2x}{(3x-1)^2}$?"
text = text.replace(q50_bad.replace('\\n', '\n'), q50_good)

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)
