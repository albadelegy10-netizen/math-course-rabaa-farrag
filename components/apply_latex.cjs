const fs = require('fs');
let file = fs.readFileSync('src/data/questions_sat_2025_march_form_bb.ts', 'utf8');

file = file.replace(/s = 40 \+ 2t/g, '$s = 40 + 2t$')
           .replace(/16h \+ 13c = 700/g, '$16h + 13c = 700$')
           .replace(/AE = 24\(BD\)/g, '$AE = 24(BD)$')
           .replace(/y = x\/4 \+ 6/g, '$y = \\\\frac{x}{4} + 6$')
           .replace(/y = -x\/4 \+ 20/g, '$y = -\\\\frac{x}{4} + 20$')
           .replace(/y = 22 \+ 5/g, '$y = 22 + 5$')
           .replace(/y = 22\/5/g, '$y = 22/5$')
           .replace(/M = 100\(0\.22\)\^\{t \+ 11\.11\}/g, '$M = 100(0.22)^{t + 11.11}$')
           .replace(/y = 8x \+ 7/g, '$y = 8x + 7$')
           .replace(/rx \+ ty ≥ -44/g, '$rx + ty \\\\ge -44$')
           .replace(/f\(x\) = √\(3x \+ 8\)/g, '$f(x) = \\\\sqrt{3x + 8}$')
           .replace(/³√\(p⁴\) = t\^\(5\/6\)/g, '$\\\\sqrt[3]{p^4} = t^{5/6}$')
           .replace(/7x²\(4x - 13\)\(4x - u\) = 0/g, '$7x^2(4x - 13)(4x - u) = 0$')
           .replace(/24x² - \(12a \+ 2b\)x \+ ab = 0/g, '$24x^2 - (12a + 2b)x + ab = 0$')
           .replace(/f\(x\) = a \* b\^\(x\/n\)/g, '$f(x) = a \\\\cdot b^{x/n}$')
           .replace(/y = f\(x\)/g, '$y = f(x)$')
           .replace(/f\(a\) = -9a/g, '$f(a) = -9a$');

fs.writeFileSync('src/data/questions_sat_2025_march_form_bb.ts', file);
console.log('LaTeX replacements applied!');
