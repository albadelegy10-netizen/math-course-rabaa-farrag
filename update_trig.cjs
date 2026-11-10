const fs = require('fs');

let content = fs.readFileSync('constants.tsx', 'utf8');

// We need to replace the exact block for EST2Trigonometry
// It starts with `id: StaticLessonIds.EST2Trigonometry,` and goes until `},` before `id: StaticLessonIds.Similarity,`
const startStr = 'id: StaticLessonIds.EST2Trigonometry,';
const endStr = 'id: StaticLessonIds.Similarity,';

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

if (startIndex === -1 || endIndex === -1) {
  console.log('Could not find the target block');
  process.exit(1);
}

// Find the start of the object `{`
let objStartIndex = startIndex;
while (content[objStartIndex] !== '{') {
  objStartIndex--;
}

// Find the start of the next object `{`
let objEndIndex = endIndex;
while (content[objEndIndex] !== '{') {
  objEndIndex--;
}

const detailedNotes = `## EST2 Trigonometry: Complete Study Guide

Trigonometry is a heavily tested topic on the EST2 exam. It goes beyond basic right-triangle trigonometry and covers unit circle properties, radians, trigonometric graphs, identities, and solving complex triangles using the Law of Sines and Cosines.

### 1. Right Triangle Trigonometry (SOH CAH TOA)
For a right triangle with an acute angle $\\theta$:
- **Sine**: $\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$
- **Cosine**: $\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$
- **Tangent**: $\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$

**Reciprocal Functions:**
- **Cosecant**: $\\csc \\theta = \\frac{1}{\\sin \\theta} = \\frac{\\text{Hypotenuse}}{\\text{Opposite}}$
- **Secant**: $\\sec \\theta = \\frac{1}{\\cos \\theta} = \\frac{\\text{Hypotenuse}}{\\text{Adjacent}}$
- **Cotangent**: $\\cot \\theta = \\frac{1}{\\tan \\theta} = \\frac{\\text{Adjacent}}{\\text{Opposite}}$

**Complementary Angles:** 
If $\\alpha + \\beta = 90^\\circ$ (or $\\frac{\\pi}{2}$ radians):
$\\sin \\alpha = \\cos \\beta$ and $\\tan \\alpha = \\cot \\beta$.

---

### 2. Special Right Triangles
Memorizing these ratios saves time:
- **$30^\\circ-60^\\circ-90^\\circ$ Triangle:** Sides are in the ratio $x : x\\sqrt{3} : 2x$.
- **$45^\\circ-45^\\circ-90^\\circ$ Triangle:** Sides are in the ratio $x : x : x\\sqrt{2}$.

---

### 3. Radians and Degrees
- To convert degrees to radians: Multiply by $\\frac{\\pi}{180^\\circ}$
- To convert radians to degrees: Multiply by $\\frac{180^\\circ}{\\pi}$
- **Arc Length**: $s = r\\theta$ (where $\\theta$ is in radians)
- **Sector Area**: $A = \\frac{1}{2}r^2\\theta$ (where $\\theta$ is in radians)

---

### 4. The Unit Circle and Quadrants
The Unit Circle has a radius of $1$. For any point $(x, y)$ on the unit circle at an angle $\\theta$ from the positive x-axis:
- $\\cos \\theta = x$
- $\\sin \\theta = y$
- $\\tan \\theta = \\frac{y}{x}$

**ASTC Rule (All Students Take Calculus):**
- **Quadrant I**: **A**ll functions are positive.
- **Quadrant II**: **S**ine (and Cosecant) are positive.
- **Quadrant III**: **T**angent (and Cotangent) are positive.
- **Quadrant IV**: **C**osine (and Secant) are positive.

---

### 5. Trigonometric Identities
**Pythagorean Identities:**
- $\\sin^2 \\theta + \\cos^2 \\theta = 1$
- $1 + \\tan^2 \\theta = \\sec^2 \\theta$
- $1 + \\cot^2 \\theta = \\csc^2 \\theta$

**Double Angle Formulas:**
- $\\sin(2\\theta) = 2\\sin \\theta \\cos \\theta$
- $\\cos(2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta = 2\\cos^2 \\theta - 1 = 1 - 2\\sin^2 \\theta$
- $\\tan(2\\theta) = \\frac{2\\tan \\theta}{1 - \\tan^2 \\theta}$

---

### 6. Law of Sines and Law of Cosines
Used for solving oblique (non-right) triangles.
- **Law of Sines:** $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$
  - Use when you know AAS, ASA, or SSA (ambiguous case).
- **Law of Cosines:** $c^2 = a^2 + b^2 - 2ab \\cos C$
  - Use when you know SSS or SAS.
- **Area of a Triangle:** $\\text{Area} = \\frac{1}{2}ab \\sin C$

---

### 7. Graphing Trigonometric Functions
For functions in the form $y = A \\sin(B(x - C)) + D$ or $y = A \\cos(B(x - C)) + D$:
- **Amplitude**: $|A|$ (Half the distance from max to min)
- **Period**: $\\frac{2\\pi}{|B|}$ (For tangent/cotangent, period is $\\frac{\\pi}{|B|}$)
- **Phase Shift**: $C$ (Horizontal shift)
- **Vertical Shift**: $D$

---

### 8. EST2 Solved Examples

**Example 1: Complementary Angles**
*Question:* In right triangle $XYZ$ with right angle at $Y$, $\\sin X = \\frac{4}{7}$. What is $\\cos Z$?
*Solution:* Angles $X$ and $Z$ are complementary ($X + Z = 90^\\circ$). Therefore, $\\cos Z = \\sin X$.
*Answer:* $\\cos Z = \\frac{4}{7}$

**Example 2: Unit Circle & Quadrants**
*Question:* If $\\cos \\theta = -\\frac{3}{5}$ and $\\tan \\theta > 0$, what is the value of $\\sin \\theta$?
*Solution:* Since $\\cos$ is negative and $\\tan$ is positive, $\\theta$ must be in Quadrant III. In QIII, $\\sin$ is negative. Using the Pythagorean identity: $\\sin^2 \\theta + (-\\frac{3}{5})^2 = 1 \\implies \\sin^2 \\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$. Taking the negative root: $\\sin \\theta = -\\frac{4}{5}$.

**Example 3: Double Angle Identity**
*Question:* If $\\sin x = \\frac{1}{3}$ and $x$ is in the first quadrant, what is $\\cos(2x)$?
*Solution:* Use the identity $\\cos(2x) = 1 - 2\\sin^2 x$.
$\\cos(2x) = 1 - 2\\left(\\frac{1}{3}\\right)^2 = 1 - 2\\left(\\frac{1}{9}\\right) = 1 - \\frac{2}{9} = \\frac{7}{9}$.

**Example 4: Law of Cosines**
*Question:* In $\\triangle ABC$, $a = 5$, $b = 8$, and $\\angle C = 60^\\circ$. Find the length of side $c$.
*Solution:* Use the Law of Cosines: $c^2 = a^2 + b^2 - 2ab \\cos C$.
$c^2 = 5^2 + 8^2 - 2(5)(8)\\cos(60^\\circ)$
$c^2 = 25 + 64 - 80\\left(\\frac{1}{2}\\right) = 89 - 40 = 49$
$c = \\sqrt{49} = 7$.

**Example 5: Period of a Function**
*Question:* What is the period of the function $f(x) = -3\\tan\\left(\\frac{\\pi}{4} x\\right)$?
*Solution:* For a tangent function $y = A\\tan(Bx)$, the period is $\\frac{\\pi}{|B|}$.
Here, $B = \\frac{\\pi}{4}$.
$\\text{Period} = \\frac{\\pi}{\\frac{\\pi}{4}} = \\pi \\cdot \\frac{4}{\\pi} = 4$.`;

const newTrigLesson = `{
    id: StaticLessonIds.EST2Trigonometry,
    title: "trigonometry",
    description: "EST2 Math: Trigonometry, SOH CAH TOA, Unit Circle, Sine and Cosine Laws, and Trigonometric Identities",
    icon: "Activity",
    course: "EST2",
    type: "lesson",
    studyNotes: \`${detailedNotes.replace(/\\/g, '\\\\').replace(/\$/g, '\\$').replace(/`/g, '\\`')}\`
  },
  `;

// Replace
content = content.substring(0, objStartIndex) + newTrigLesson + content.substring(objEndIndex);

fs.writeFileSync('constants.tsx', content);
console.log("Successfully updated trigonometry lesson in constants.tsx");
