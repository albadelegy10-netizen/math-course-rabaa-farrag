const fs = require('fs');

const lesson = `
  {
    id: StaticLessonIds.EST2RationalFunction,
    title: "EST2-RATIONAL FUNCTION",
    description: "Finding domain, vertical asymptotes, horizontal asymptotes, and range for rational functions.",
    icon: "FunctionSquare",
    course: "EST2",
    type: "lesson",
    studyNotes: \`**Rational Functions Study Guide**

A rational function is a function of the form $f(x) = \\\\frac{P(x)}{Q(x)}$, where $P(x)$ and $Q(x)$ are polynomials and $Q(x) \\\\neq 0$.

### 1. Domain
The domain of a rational function is the set of all real numbers except those that make the denominator equal to zero.

**Example:** Find the domain of $f(x) = \\\\frac{2x+3}{x-4}$.
The denominator is zero when $x - 4 = 0 \\\\Rightarrow x = 4$.
Therefore, the domain is all real numbers except $x = 4$. (In interval notation: $(-\\\\infty, 4) \\\\cup (4, \\\\infty)$)

### 2. Vertical Asymptotes (VA)
A vertical asymptote occurs at the values of $x$ that make the denominator zero after the rational function has been simplified (common factors between numerator and denominator canceled out).

**Example:** Find the vertical asymptote(s) of $f(x) = \\\\frac{x+2}{x^2-4}$.
Factor the denominator: $f(x) = \\\\frac{x+2}{(x-2)(x+2)} = \\\\frac{1}{x-2}$ (for $x \\\\neq -2$).
The simplified denominator is zero when $x - 2 = 0 \\\\Rightarrow x = 2$.
So, there is a vertical asymptote at $x = 2$. (Note: There is a hole at $x = -2$).

### 3. Horizontal Asymptotes (HA)
The horizontal asymptote is determined by comparing the degrees of the numerator polynomial ($n$) and the denominator polynomial ($m$).
- If $n < m$, the HA is $y = 0$ (the $x$-axis).
- If $n = m$, the HA is $y = \\\\frac{a}{b}$, where $a$ and $b$ are the leading coefficients of the numerator and denominator, respectively.
- If $n > m$, there is no horizontal asymptote (but there may be an oblique asymptote if $n = m + 1$).

**Example 1:** $f(x) = \\\\frac{3x+1}{x^2+2}$. Degree of numerator (1) < Degree of denominator (2). HA is $y = 0$.
**Example 2:** $f(x) = \\\\frac{4x^2-1}{2x^2+3}$. Degree of numerator (2) = Degree of denominator (2). HA is $y = \\\\frac{4}{2} = 2$.
**Example 3:** $f(x) = \\\\frac{x^3+1}{x^2-1}$. Degree of numerator (3) > Degree of denominator (2). No HA.

### 4. Range
The horizontal asymptote often dictates the range, but a rational function can cross its horizontal asymptote. For simple rational functions of the form $y = \\\\frac{ax+b}{cx+d}$, the range is all real numbers except the horizontal asymptote $y = \\\\frac{a}{c}$.

**Example:** Find the range of $f(x) = \\\\frac{3x-1}{2x+4}$.
The HA is $y = \\\\frac{3}{2}$. The range is all real numbers except $\\\\frac{3}{2}$.\`
  },`;

let constants = fs.readFileSync('constants.tsx', 'utf-8');
const insertIndex = constants.indexOf('id: StaticLessonIds.EST2LinearPolynomial,');
const previousBrace = constants.lastIndexOf('  {', insertIndex);

constants = constants.slice(0, previousBrace) + lesson + "\n" + constants.slice(previousBrace);
fs.writeFileSync('constants.tsx', constants);

console.log("Updated constants.tsx");
