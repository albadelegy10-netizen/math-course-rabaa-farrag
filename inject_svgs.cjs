const fs = require('fs');

let content = fs.readFileSync('questions_est1_2022_march.ts', 'utf8');

const q2Svg = `svg: \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 6 7" width="300" height="300" style="background:#fff">
  <!-- Grid -->
  <g stroke="#eee" stroke-width="0.05">
    \${Array.from({length: 10}, (_, i) => \`<line x1="-3" y1="\${i-2}" x2="6" y2="\${i-2}"/><line x1="\${i-3}" y1="-2" x2="\${i-3}" y2="7"/>\`).join('')}
  </g>
  <!-- Axes -->
  <line x1="-3" y1="0" x2="6" y2="0" stroke="black" stroke-width="0.08" />
  <line x1="0" y1="-2" x2="0" y2="7" stroke="black" stroke-width="0.08" />
  <!-- Line passing through (0,1) and (2,4): y = 1.5x + 1 -->
  <line x1="-2" y1="-2" x2="4" y2="7" stroke="#666" stroke-width="0.08" transform="scale(1, -1)" />
</svg>\`,`;

const q12Svg = `svg: \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 6 6" width="300" height="300" style="background:#fff">
  <g stroke="#eee" stroke-width="0.05">
    \${Array.from({length: 10}, (_, i) => \`<line x1="-3" y1="\${i-3}" x2="6" y2="\${i-3}"/><line x1="\${i-3}" y1="-3" x2="\${i-3}" y2="6"/>\`).join('')}
  </g>
  <line x1="-3" y1="0" x2="6" y2="0" stroke="black" stroke-width="0.08" />
  <line x1="0" y1="-3" x2="0" y2="6" stroke="black" stroke-width="0.08" />
  <!-- Line 1: y = x + 1 -->
  <line x1="-3" y1="-2" x2="4" y2="5" stroke="#666" stroke-width="0.08" transform="scale(1, -1)" />
  <!-- Line 2: y = -0.5x + 2 -->
  <line x1="-2" y1="3" x2="6" y2="-1" stroke="#666" stroke-width="0.08" transform="scale(1, -1)" />
</svg>\`,`;

const q15Svg = `svg: \`<svg viewBox="0 0 400 300" width="100%" height="300" xmlns="http://www.w3.org/2000/svg">
  <!-- Just a placeholder pie chart -->
  <circle cx="200" cy="150" r="100" fill="#eee" />
  <path d="M 200 150 L 200 50 A 100 100 0 0 1 295 120 Z" fill="#4285F4" /> <!-- banana 14.2% -->
  <path d="M 200 150 L 295 120 A 100 100 0 0 1 250 236 Z" fill="#EA4335" /> <!-- apple 21.5% -->
  <path d="M 200 150 L 250 236 A 100 100 0 0 1 120 210 Z" fill="#FBBC05" /> <!-- mango 18.6% (apx) -->
  <path d="M 200 150 L 120 210 A 100 100 0 0 1 100 150 Z" fill="#34A853" /> <!-- avocado 17.6% (apx) -->
  <path d="M 200 150 L 100 150 A 100 100 0 0 1 130 75 Z" fill="#9C27B0" /> <!-- oranges 13.2% (apx) -->
  <path d="M 200 150 L 130 75 A 100 100 0 0 1 200 50 Z" fill="#00BCD4" /> <!-- watermelon 14.9% (apx) -->
  <!-- Legend -->
  <rect x="320" y="50" width="10" height="10" fill="#4285F4"/><text x="335" y="60" font-size="12">banana</text>
  <rect x="320" y="70" width="10" height="10" fill="#EA4335"/><text x="335" y="80" font-size="12">apple</text>
  <rect x="320" y="90" width="10" height="10" fill="#FBBC05"/><text x="335" y="100" font-size="12">mango</text>
  <rect x="320" y="110" width="10" height="10" fill="#34A853"/><text x="335" y="120" font-size="12">avocado</text>
  <rect x="320" y="130" width="10" height="10" fill="#9C27B0"/><text x="335" y="140" font-size="12">oranges</text>
  <rect x="320" y="150" width="10" height="10" fill="#00BCD4"/><text x="335" y="160" font-size="12">watermelon</text>
</svg>\`,`;

const q8Svg = `svg: \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
  <polygon points="50,150 250,150 250,50" fill="none" stroke="black" stroke-width="2"/>
  <text x="40" y="160">A</text>
  <text x="255" y="160">D</text>
  <text x="255" y="45">C</text>
  <!-- Point B on AD -->
  <line x1="180" y1="150" x2="250" y2="50" stroke="black" stroke-width="2"/>
  <text x="175" y="165">B</text>
  <text x="210" y="145">40°</text>
  <text x="80" y="145">35°</text>
</svg>\`,`;

content = content.replace("id: 'est1_2022_march_nocalc_2',", "id: 'est1_2022_march_nocalc_2',\\n    " + q2Svg);
content = content.replace("id: 'est1_2022_march_nocalc_12',", "id: 'est1_2022_march_nocalc_12',\\n    " + q12Svg);
content = content.replace("id: 'est1_2022_march_calc_15',", "id: 'est1_2022_march_calc_15',\\n    " + q15Svg);
content = content.replace("id: 'est1_2022_march_calc_8',", "id: 'est1_2022_march_calc_8',\\n    " + q8Svg);

// Make math latex wrapper using simple regex where appropriate.
// Turn 2x + y into $2x + y$
content = content.replace(/Given 2x \+ y = 8 and 3y \+ x = -1\. What is the value of y - 2x\?/g,
  'Given $2x + y = 8$ and $3y + x = -1$. What is the value of $y - 2x$?');

content = content.replace(/f\\(x\\) = 1\/3 x\^3 - 15x\^2 \+ 2000x/g, '$f(x) = \\\\frac{1}{3} x^3 - 15x^2 + 2000x$');
content = content.replace(/P\\(x\\) = -1\/3 x\^3 \+ 79\/3 x\^2 \+ 1500x/g, '$P(x) = -\\\\frac{1}{3} x^3 + \\\\frac{79}{3} x^2 + 1500x$');
content = content.replace(/P\\(x\\) = R\\(x\\) - C\\(x\\)/g, '$P(x) = R(x) - C(x)$');

content = content.replace(/R\\(x\\) = /g, '$R(x) = ');
content = content.replace(/x\^2 \+ 3500x/g, 'x^2 + 3500x$');

fs.writeFileSync('questions_est1_2022_march.ts', content);
console.log('SVGs and formatting injected!');
