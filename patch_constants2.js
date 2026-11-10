const fs = require('fs');
const file = './constants.tsx';
let code = fs.readFileSync(file, 'utf-8');

const targetStr = "  {\n    id: StaticLessonIds.EST2DomainRange,";
    
const replacementStr = `  {
    id: StaticLessonIds.EST2EvenOdd,
    title: "even-odd function",
    description: "Polynomial definition, function definition, even and odd functions",
    icon: "FunctionSquare",
    course: "EST2",
    type: "lesson",
    studyNotes: \`**EST2 - Even and Odd Functions**\\n\\n**Polynomial Definition:**\\nA polynomial is an expression consisting of variables and coefficients, that involves only the operations of addition, subtraction, multiplication, and non-negative integer exponents of variables.\\n\\n**Even Function:**\\nA function $f$ is even if $f(-x) = f(x)$ for all $x$ in the domain of $f$. The graph of an even function is symmetric with respect to the $y$-axis.\\n\\n**Odd Function:**\\nA function $f$ is odd if $f(-x) = -f(x)$ for all $x$ in the domain of $f$. The graph of an odd function is symmetric with respect to the origin.\\n\\n**Neither:**\\nA function that does not satisfy either of the above conditions is neither even nor odd.\`
  },
  {
    id: StaticLessonIds.EST2DomainRange,`;

code = code.replace(targetStr, replacementStr);
fs.writeFileSync(file, code, 'utf-8');
console.log("Patched constants");
