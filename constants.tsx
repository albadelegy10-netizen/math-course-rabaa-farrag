
import { EST1_OFFICIAL_LESSONS } from './src/data/est1_official';
import { Lesson, StaticLessonIds } from './types';
import { 
  Square, 
  Hexagon, 
  Box, 
  Activity,
  Home as HomeIcon,
  BookOpen,
  Trophy,
  User,
  GraduationCap,
  Circle,
  Globe,
  Layers,
  List,
  TrendingUp,
  Ruler,
  Orbit,
  Grid3x3,
  Scale,
  ArrowUpRight,
  FileText,
  Triangle,
  Sigma
} from 'lucide-react';

export const getIcon = (name: string, className?: string) => {
  const props = { className: className || "w-6 h-6" };
  switch (name) {
    case 'Square': return <Square {...props} />;
    case 'Hexagon': return <Hexagon {...props} />;
    case 'Box': return <Box {...props} />;
    case 'Activity': return <Activity {...props} />;
    case 'Home': return <HomeIcon {...props} />;
    case 'BookOpen': return <BookOpen {...props} />;
    case 'Trophy': return <Trophy {...props} />;
    case 'User': return <User {...props} />;
    case 'GraduationCap': return <GraduationCap {...props} />;
    case 'Circle': return <Circle {...props} />;
    case 'Globe': return <Globe {...props} />;
    case 'Layers': return <Layers {...props} />;
    case 'List': return <List {...props} />;
    case 'TrendingUp': return <TrendingUp {...props} />;
    case 'Ruler': return <Ruler {...props} />;
    case 'Orbit': return <Orbit {...props} />;
    case 'Grid3x3': return <Grid3x3 {...props} />;
    case 'Scale': return <Scale {...props} />;
    case 'ArrowUpRight': return <ArrowUpRight {...props} />;
    case 'FileText': return <FileText {...props} />;
    case 'Triangle': return <Triangle {...props} />;
    case 'Sigma': return <Sigma {...props} />;
    default: return <FileText {...props} />;
  }
};

const _LESSONS: Lesson[] = [
  {
    id: StaticLessonIds.EST2Isolation,
    title: "EST2-isolation",
    description: "An advanced EST2 Subject Test lesson on isolating variables across complex rational, exponential, logarithmic, trigonometric, matrix, and function equations.",
    icon: "Sigma",
    course: "EST2",
    type: "lesson",
    studyNotes: `## EST2 Advanced Variable Isolation Guide

### 1. Advanced Algebraic Techniques for EST2
In the EST2 Math Subject Test, variable isolation goes beyond linear equations to encompass higher-level algebraic manipulation, complex fraction operations, exponential/logarithmic changes, matrix determinants, and trigonometric identities.

- **Multi-Fraction Simplification:** Clear denominators by multiplying the entire equation by the Least Common Multiple (LCM) of all denominators.
- **Logarithmic Properties:**
  $$ \\log_b(A) - \\log_b(B) = \\log_b\\left(\\frac{A}{B}\\right) \\implies b^{\\text{result}} = \\frac{A}{B} $$
- **Exponential Variable Isolation:** Take natural logarithms ($\\ln$) on both sides when variables appear in powers with different bases.
- **Inverse Functions:** To find $f^{-1}(y)$, set $y = f(x)$ and solve for $x$. Alternatively, $f^{-1}(b) = a \\iff f(a) = b$.

---

### 2. EST2 Isolation Reference Patterns

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Type</th>
      <th class="border border-gray-400 px-2 py-1">Equation</th>
      <th class="border border-gray-400 px-2 py-1">Isolated Variable</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">Multi-Fraction</td><td class="border border-gray-400 px-2 py-1">$\\frac{p - 3q}{4} + \\frac{q}{2} = \\frac{2p + q}{2} - \\frac{11}{4}$</td><td class="border border-gray-400 px-2 py-1">$p = -q + \\frac{11}{3}$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Exponential</td><td class="border border-gray-400 px-2 py-1">$y = A e^{kx} + c$</td><td class="border border-gray-400 px-2 py-1">$x = \\frac{1}{k}\\ln\\left(\\frac{y - c}{A}\\right)$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Matrix Determinant</td><td class="border border-gray-400 px-2 py-1">$\\det\\begin{pmatrix} x & 2a \\\\ b & x+a \\end{pmatrix} = k$</td><td class="border border-gray-400 px-2 py-1">$a = \\frac{k - x^2}{x - 2b}$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Trig Identity</td><td class="border border-gray-400 px-2 py-1">$\\tan\\theta + \\cot\\theta = k$</td><td class="border border-gray-400 px-2 py-1">$\\sin(2\\theta) = \\frac{2}{k}$</td></tr>
  </tbody>
</table>

---

### Solved Examples (EST2 Style)

**Example 1 (Multi-Fraction Linear Combination):**
If $\\frac{p - 3q}{4} + \\frac{q}{2} = \\frac{2p + q}{2} - \\frac{11}{4}$, find $p$ in terms of $q$.

*Solution:*
1. Multiply through by $4$:
$$ (p - 3q) + 2q = 2(2p + q) - 11 $$
$$ p - q = 4p + 2q - 11 $$
2. Isolate $p$:
$$ 11 - 3q = 3p \\implies p = -q + \\frac{11}{3} $$

---

**Example 2 (Logarithmic Ratio Isolation):**
If $\\log_2(x + 3y) - \\log_2(x - y) = 3$, solve for $x$ in terms of $y$.

*Solution:*
1. Condense into a single log:
$$ \\log_2\\left(\\frac{x + 3y}{x - y}\\right) = 3 $$
2. Convert to exponential form:
$$ \\frac{x + 3y}{x - y} = 2^3 = 8 \\implies x + 3y = 8x - 8y $$
3. Solve for $x$:
$$ 11y = 7x \\implies x = \\frac{11}{7}y $$`
  },
  {
    id: StaticLessonIds.EST2MidpointDistance,
    title: "midpoint &distance between two points",
    description: "Master 2D and 3D coordinate geometry, midpoint calculations, distance formulas, section partition ratios, perpendicular bisectors, and 3D sphere equations for the EST2 Subject Test.",
    icon: "Ruler",
    course: "EST2",
    type: "lesson",
    studyNotes: `## EST2 Midpoint & Distance Between Two Points Guide

### 1. Fundamental 2D & 3D Geometry Formulas
In the EST2 Math Subject Test, coordinate geometry questions frequently extend into 3D space ($x, y, z$) as well as advanced 2D applications such as section ratios, perpendicular bisectors, and 3D sphere equations.

- **2D Distance Formula:**
  $$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$
- **2D Midpoint Formula:**
  $$ M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right) $$
- **3D Distance Formula:**
  $$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2} $$
- **3D Midpoint Formula:**
  $$ M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}, \\frac{z_1 + z_2}{2} \\right) $$
- **Section Formula (Internal Division in Ratio $m : n$):**
  $$ P = \\left( \\frac{n x_1 + m x_2}{m + n}, \\frac{n y_1 + m y_2}{m + n}, \\frac{n z_1 + m z_2}{m + n} \\right) $$
- **3D Sphere Equation (Center $(h, k, l)$ and Radius $r$):**
  $$ (x - h)^2 + (y - k)^2 + (z - l)^2 = r^2 $$

---

### 2. Quick Formula Summary Table

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Concept</th>
      <th class="border border-gray-400 px-2 py-1">2D Space Formula</th>
      <th class="border border-gray-400 px-2 py-1">3D Space Formula</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">Distance</td><td class="border border-gray-400 px-2 py-1">$\\sqrt{\\Delta x^2 + \\Delta y^2}$</td><td class="border border-gray-400 px-2 py-1">$\\sqrt{\\Delta x^2 + \\Delta y^2 + \\Delta z^2}$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Midpoint</td><td class="border border-gray-400 px-2 py-1">$\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$</td><td class="border border-gray-400 px-2 py-1">$\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}, \\frac{z_1+z_2}{2}\\right)$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Centroid</td><td class="border border-gray-400 px-2 py-1">$\\left(\\frac{x_1+x_2+x_3}{3}, \\frac{y_1+y_2+y_3}{3}\\right)$</td><td class="border border-gray-400 px-2 py-1">$\\left(\\frac{x_1+x_2+x_3}{3}, \\frac{y_1+y_2+y_3}{3}, \\frac{z_1+z_2+z_3}{3}\\right)$</td></tr>
  </tbody>
</table>

---

### Solved Examples (EST2 Style)

**Example 1 (2D Unknown Endpoint & Distance):**
If $M(3, -2)$ is the midpoint of segment $AB$ and $A(-1, 4)$, find the coordinates of $B$ and the length of $AB$.

*Solution:*
1. Endpoint formula:
$$ x_B = 2x_M - x_A = 2(3) - (-1) = 7 $$
$$ y_B = 2y_M - y_A = 2(-2) - 4 = -8 \\implies B(7, -8) $$
2. Length $AB$:
$$ d = \\sqrt{(7 - (-1))^2 + (-8 - 4)^2} = \\sqrt{8^2 + (-12)^2} = \\sqrt{64 + 144} = \\sqrt{208} = 4\\sqrt{13} $$

---

**Example 2 (3D Distance & Unknown Parameter):**
Points $P(k, 1, 2)$ and $Q(3, 5, -2)$ in 3D space are separated by a distance of $9$. Solve for $k$.

*Solution:*
1. Set up distance formula:
$$ \\sqrt{(3 - k)^2 + (5 - 1)^2 + (-2 - 2)^2} = 9 $$
2. Square both sides:
$$ (3 - k)^2 + 16 + 16 = 81 \\implies (3 - k)^2 + 32 = 81 \\implies (3 - k)^2 = 49 $$
3. Take square root:
$$ 3 - k = \\pm 7 \\implies k = -4 \\text{ or } k = 10 $$

---

**Example 3 (3D Sphere Equation from Diameter Endpoints):**
Diameter endpoints of a 3D sphere are $A(-2, 3, 5)$ and $B(4, -1, 1)$. Find the equation of the sphere.

*Solution:*
1. Center $(h, k, l)$ is midpoint of $AB$:
$$ h = \\frac{-2+4}{2} = 1, \\quad k = \\frac{3+(-1)}{2} = 1, \\quad l = \\frac{5+1}{2} = 3 \\implies C(1, 1, 3) $$
2. Diameter $d_{AB} = \\sqrt{(4 - (-2))^2 + (-1 - 3)^2 + (1 - 5)^2} = \\sqrt{36 + 16 + 16} = \\sqrt{68}$. Radius $r = \\frac{\\sqrt{68}}{2} = \\sqrt{17} \\implies r^2 = 17$.
3. Sphere equation:
$$ (x - 1)^2 + (y - 1)^2 + (z - 3)^2 = 17 $$`
  },
  {
    id: StaticLessonIds.EST1Isolation,
    title: "ESt1-Isolation",
    description: "A comprehensive lesson on isolating variables, rearranging formulas, and solving literal equations in EST1 Math.",
    icon: "Sigma",
    course: "EST1",
    type: "lesson",
    studyNotes: `## Variable Isolation & Literal Equations Guide

### 1. Fundamental Principles of Variable Isolation
Variable isolation involves rearranging an algebraic equation to solve for one specific variable in terms of all other parameters.

- **Inverse Operations Strategy:**
  - Addition $\\leftrightarrow$ Subtraction
  - Multiplication $\\leftrightarrow$ Division
  - Squaring ($x^2$) $\\leftrightarrow$ Square Root ($\sqrt{x}$)
  - Reciprocal ($\\frac{1}{x}$) $\\leftrightarrow$ Flipping both sides

---

### 2. Key Isolation Patterns

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Equation Type</th>
      <th class="border border-gray-400 px-2 py-1">Original</th>
      <th class="border border-gray-400 px-2 py-1">Isolated Variable</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">Linear</td><td class="border border-gray-400 px-2 py-1">$P = 2l + 2w$</td><td class="border border-gray-400 px-2 py-1">$w = \\frac{P - 2l}{2}$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Temperature</td><td class="border border-gray-400 px-2 py-1">$F = \\frac{9}{5}C + 32$</td><td class="border border-gray-400 px-2 py-1">$C = \\frac{5}{9}(F - 32)$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Quadratic / Power</td><td class="border border-gray-400 px-2 py-1">$E = \\frac{1}{2}m v^2$</td><td class="border border-gray-400 px-2 py-1">$v = \\sqrt{\\frac{2E}{m}}$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Rational</td><td class="border border-gray-400 px-2 py-1">$y = \\frac{ax + b}{cx + d}$</td><td class="border border-gray-400 px-2 py-1">$x = \\frac{d y - b}{a - c y}$</td></tr>
  </tbody>
</table>

---

### Solved Examples (EST1 Style)

**Example 1 (Factoring out target variable):**
Given $ax + b = cx + d$, solve for $x$.

*Solution:*
1. Group terms containing $x$ on one side:
$$ ax - cx = d - b $$
2. Factor out $x$:
$$ x(a - c) = d - b $$
3. Divide by $(a - c)$:
$$ x = \\frac{d - b}{a - c} $$

---

**Example 2 (Rational Equation Isolation):**
In physics, $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$. Express $R$ in terms of $R_1$ and $R_2$.

*Solution:*
1. Combine fractions on the right side:
$$ \\frac{1}{R} = \\frac{R_2 + R_1}{R_1 R_2} $$
2. Take the reciprocal of both sides:
$$ R = \\frac{R_1 R_2}{R_1 + R_2} $$`
  },
  {
    id: StaticLessonIds.EST1SystemOfEquations,
    title: "(Est1- system of equations )",
    description: "A comprehensive lesson on solving systems of linear and nonlinear equations for EST1 Math with calculator shortcuts, coefficient test rules, and solved examples.",
    icon: "Layers",
    course: "EST1",
    type: "lesson",
    studyNotes: `## EST1 System of Equations Guide

### 1. Fundamental Principles of Systems of Equations
A **system of equations** is two or more equations solved together. The solution $(x, y)$ is the point where the graphs intersect — it satisfies every equation simultaneously.

- **One Solution:** The lines intersect at a single point (different slopes).
- **No Solution:** The lines are parallel (same slope, different $y$-intercepts).
- **Infinitely Many Solutions:** The lines coincide / confounded (same slope, same $y$-intercept).

---

### 2. Quick Coefficient Test for $a_1 x + b_1 y = c_1$ and $a_2 x + b_2 y = c_2$

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Type of Solution</th>
      <th class="border border-gray-400 px-2 py-1">Condition on Coefficients</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">One solution</td><td class="border border-gray-400 px-2 py-1">$\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">No solution</td><td class="border border-gray-400 px-2 py-1">$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Infinitely many</td><td class="border border-gray-400 px-2 py-1">$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$</td></tr>
  </tbody>
</table>

---

### 3. Solving Methods
- **Substitution:** Express one variable in terms of the other and substitute into the remaining equation.
- **Elimination:** Multiply equations to cancel a variable when added or subtracted.
- **Calculator Shortcut (Mode 5 1 / Menu 9 2 1):** Rearrange equations into standard form $ax + by = c$, enter coefficients into equation mode to read $x$ and $y$ directly.

---

### Solved Examples

**Example 1 (Linear System):**
Solve the system:
$$\\begin{cases} 2x = -y + 7 \\\\ x - y = -1 \\end{cases}$$

*Solution:*
1. Rearrange first equation to standard form: $2x + y = 7$.
2. Second equation is already $x - y = -1$.
3. Add the two equations:
   $$(2x + y) + (x - y) = 7 + (-1) \\implies 3x = 6 \\implies x = 2$$
4. Substitute $x = 2$ into $2 - y = -1 \\implies y = 3$.
   Solution: $(x, y) = (2, 3)$.

---

**Example 2 (Linear + Nonlinear System):**
Find the intersection points of $y = 2x + 3$ and $y = x^2 - x - 20$.

*Solution:*
1. Set the expressions equal: $x^2 - x - 20 = 2x + 3$.
2. Rearrange: $x^2 - 3x - 23 = 0$.
3. Solve for $x$ using quadratic formula:
   $$x = \\frac{3 \\pm \\sqrt{9 - 4(1)(-23)}}{2} = \\frac{3 \\pm \\sqrt{101}}{2}$$
   $$x \\approx 6.52 \\quad \\text{and} \\quad x \\approx -3.52$$
4. Substitute back into $y = 2x + 3$:
   For $x \\approx 6.52 \\implies y \\approx 16.05 \\implies (6.52, 16.05)$.
   For $x \\approx -3.52 \\implies y \\approx -4.05 \\implies (-3.52, -4.05)$.`
  },
  {
    id: StaticLessonIds.EST1MidpointLength,
    title: "Midpoint and length between two points",
    description: "A comprehensive lesson on calculating line segment midpoints, distance between two points, circumference, and area of circles for EST1 Math.",
    icon: "Ruler",
    course: "EST1",
    type: "lesson",
    studyNotes: `## Midpoint, Distance, and Circle Geometry Guide

### 1. Midpoint Formula
The midpoint $M$ of a line segment connecting two points $A(x_1, y_1)$ and $B(x_2, y_2)$ is:
$$ M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) $$

- **Finding an Unknown Endpoint:** If given midpoint $M(x_M, y_M)$ and endpoint $A(x_1, y_1)$, solve:
  $$ x_M = \\frac{x_1 + x_2}{2} \\implies x_2 = 2x_M - x_1 $$
  $$ y_M = \\frac{y_1 + y_2}{2} \\implies y_2 = 2y_M - y_1 $$

---

### 2. Distance Formula
The distance $d$ (or length) between two points $A(x_1, y_1)$ and $B(x_2, y_2)$ in the coordinate plane is derived from the Pythagorean theorem:
$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$

---

### 3. Circle Formulas
- **Circumference ($C$):**
  $$ C = 2\\pi r = \\pi d $$
- **Area ($A$):**
  $$ A = \\pi r^2 $$
- **Standard Equation of a Circle:**
  $$ (x - h)^2 + (y - k)^2 = r^2 $$
  where $(h, k)$ is the center and $r$ is the radius.
- **Arc Length ($L$):**
  $$ L = \\left(\\frac{\\theta}{360^\\circ}\\right) \\cdot 2\\pi r $$
- **Sector Area ($A_{\\text{sector}}$):**
  $$ A_{\\text{sector}} = \\left(\\frac{\\theta}{360^\\circ}\\right) \\cdot \\pi r^2 $$

---

### Formula Reference Summary

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Concept</th>
      <th class="border border-gray-400 px-2 py-1">Formula</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">Midpoint</td><td class="border border-gray-400 px-2 py-1">$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Distance</td><td class="border border-gray-400 px-2 py-1">$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Circumference</td><td class="border border-gray-400 px-2 py-1">$C = 2\\pi r$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Circle Area</td><td class="border border-gray-400 px-2 py-1">$A = \\pi r^2$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Arc Length</td><td class="border border-gray-400 px-2 py-1">$L = \\frac{\\theta}{360^\\circ} \\cdot 2\\pi r$</td></tr>
  </tbody>
</table>

---

### Solved Examples (EST1 Style)

**Example 1 (Midpoint & Endpoint):**
The midpoint of segment $AB$ is $M(4, 2)$. If $A$ is $(1, -2)$, find the coordinates of point $B$.

*Solution:*
$$ \\frac{1 + x_B}{2} = 4 \\implies 1 + x_B = 8 \\implies x_B = 7 $$
$$ \\frac{-2 + y_B}{2} = 2 \\implies -2 + y_B = 4 \\implies y_B = 6 $$
Thus, $B = (7, 6)$.

---

**Example 2 (Distance Between Points):**
Find the distance between $P(-3, 1)$ and $Q(5, 7)$.

*Solution:*
$$ d = \\sqrt{(5 - (-3))^2 + (7 - 1)^2} = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10 $$

---

**Example 3 (Circle Circumference & Area):**
A circle has a circumference of $16\\pi$. What is its area?

*Solution:*
$$ C = 2\\pi r = 16\\pi \\implies r = 8 $$
$$ A = \\pi r^2 = \\pi (8^2) = 64\\pi $$`
  },
  {
    id: StaticLessonIds.EST1LinearEquationWordProblem,
    title: "linear equation- word problem",
    description: "A comprehensive lesson on modeling real-world situations with linear equations y = mx + c, interpreting rates of change (slope) and y-intercepts, and solving word problems for EST1.",
    icon: "FileText",
    course: "EST1",
    type: "lesson",
    studyNotes: `## Linear Equation Word Problems (y = mx + c)

### 1. The Standard Slope-Intercept Form
$$ y = mx + c $$
- **$y$**: Total value, final amount, or output variable.
- **$m$**: Rate of change or slope. Represents how much $y$ changes for each unit increase in $x$.
- **$x$**: Independent variable (e.g., number of hours, days, items, or kilometers).
- **$c$**: Y-intercept or initial value. Represents the starting value when $x = 0$.

---

### 2. Key Decoding Keywords

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Keyword for Slope ($m$)</th>
      <th class="border border-gray-400 px-2 py-1">Keyword for Y-Intercept ($c$)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">Each / Per / Every</td><td class="border border-gray-400 px-2 py-1">Initial value</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Average rate of change</td><td class="border border-gray-400 px-2 py-1">Fixed cost / Service fee</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Rise / Run from graph</td><td class="border border-gray-400 px-2 py-1">Subscription fee / Setup fee</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Constant rate (+ increase / - decrease)</td><td class="border border-gray-400 px-2 py-1">Start at $0$ / Base amount</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Additional amount per unit</td><td class="border border-gray-400 px-2 py-1">Point $(0, \text{number})$</td></tr>
  </tbody>
</table>

---

### Solved Examples (EST1 Style)

**Example 1 (Interpreting Slope & Y-Intercept):**
A rental car company charges a client $b$ dollars for renting a car for $d$ days according to the equation:
$$ b = 5d + 20 $$
What is the best interpretation of the number $5$ and $20$?

*Solution:*
- $5$ is the coefficient of $d$ (slope), representing the daily rental cost ($\$5$ per day).
- $20$ is the constant term ($y$-intercept), representing the fixed base fee ($\$20$) charged regardless of the number of days.

---

**Example 2 (Building & Solving Equations):**
Petra registers for an online magazine with a monthly fee of $\$15$. In addition, she pays $\$0.30$ for each premium article she reads. If she reads $x$ premium articles in a month, write an expression for her total monthly cost $C$.

*Solution:*
Total Cost = Fixed Monthly Fee + (Cost per Article $\\times$ Number of Articles)
$$ C = 15 + 0.30x $$`
  },
  {
    id: StaticLessonIds.EST1ProbabilityPart1,
    title: "Probability Part1",
    description: "A lesson covering basic probability concepts, tables, and mutually exclusive/independent events.",
    icon: "Calculator",
    course: "EST1",
    type: "lesson",
    studyNotes: "## Probability (Part 1)\n\n### Basic Probability\nThe probability of an event $A$ is the ratio of the number of favorable outcomes to the total number of possible outcomes.\n$ P(A) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of outcomes}} $\n\n### OR Probability (Mutually Exclusive)\nIf two events $A$ and $B$ cannot happen at the same time, the probability that either $A$ or $B$ occurs is the sum of their individual probabilities:\n$ P(A \\text{ or } B) = P(A) + P(B) $\n\n### AND Probability (Independent Events)\nIf two events $A$ and $B$ are independent, the probability that both $A$ and $B$ occur is the product of their individual probabilities:\n$ P(A \\text{ and } B) = P(A) \\times P(B) $\n\n### Conditional Probability\nThe probability of event $B$ occurring given that event $A$ has already occurred is:\n$ P(B | A) = \\frac{P(A \\text{ and } B)}{P(A)} $\nIn table problems, this usually means restricting your \"total\" to only the row or column specified by the given condition.\n\n### Solved Example (EST1 Style)\n**Example:** A bag contains 4 red balls, 5 blue balls, and 6 green balls. If one ball is drawn at random, what is the probability that it is NOT blue?\n\n**Solution:**\nTotal number of balls = $4 + 5 + 6 = 15$.\nNumber of non-blue balls = $4 \\text{ (red)} + 6 \\text{ (green)} = 10$.\nProbability = $\\frac{10}{15} = \\frac{2}{3}$."
  },
  {
    id: StaticLessonIds.DSATProbabilityPart1,
    title: "Dsat-probability part1",
    description: "A comprehensive lesson covering basic probability concepts, two-way tables, conditional probability, and independent events for the Digital SAT.",
    icon: "Calculator",
    course: "DSAT",
    type: "lesson",
    studyNotes: "## DSAT Probability (Part 1)\n\n### 1. Basic Probability\nThe probability of an event $E$ measures how likely it is to happen:\n$$ P(E) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}} $$\n\n- **Probability Scale:** $0 \\le P(E) \\le 1$\n- **Complementary Events:** $P(\\text{not } E) = 1 - P(E)$\n\n---\n\n### 2. Compound Events: Mutually Exclusive vs. Independent\n- **Mutually Exclusive (OR):** Two events cannot occur at the same time.\n  $$ P(A \\text{ or } B) = P(A) + P(B) $$\n- **Independent Events (AND):** The outcome of event $A$ does not affect event $B$.\n  $$ P(A \\text{ and } B) = P(A) \\times P(B) $$\n\n---\n\n### 3. Two-Way Tables & Conditional Probability\nOn the Digital SAT, probability questions frequently present data in two-way tables.\n- **Conditional Probability:** $P(B | A) = \\frac{P(A \\text{ and } B)}{P(A)}$\n- **Reading Tables:** When a condition is given (e.g., \"Given that the student is a STEM major...\"), restrict the total denominator to only the total for that row or column.\n\n---\n\n### Solved Examples (DSAT Style)\n\n**Example 1:**\nA jar contains $18$ red marbles and $12$ blue marbles. How many blue marbles must be added to the jar so that the probability of randomly choosing a red marble becomes $0.4$?\n\n*Solution:*\nLet $x$ be the number of blue marbles added.\nTotal marbles = $18 + 12 + x = 30 + x$.\nSet up the probability equation:\n$$ \\frac{18}{30 + x} = 0.4 = \\frac{2}{5} $$\n$$ 2(30 + x) = 18 \\times 5 \\implies 60 + 2x = 90 \\implies 2x = 30 \\implies x = 15 $$\nThus, $15$ blue marbles must be added.\n\n---\n\n**Example 2 (Two-Way Table):**\nA survey recorded $120$ college students by major and study location:\n\n<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Major \\ Location</th><th class=\"border border-gray-400 px-2 py-1\">Library</th><th class=\"border border-gray-400 px-2 py-1\">Coffee Shop</th><th class=\"border border-gray-400 px-2 py-1\">Total</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">STEM</td><td class=\"border border-gray-400 px-2 py-1\">45</td><td class=\"border border-gray-400 px-2 py-1\">25</td><td class=\"border border-gray-400 px-2 py-1\">70</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Humanities</td><td class=\"border border-gray-400 px-2 py-1\">20</td><td class=\"border border-gray-400 px-2 py-1\">30</td><td class=\"border border-gray-400 px-2 py-1\">50</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Total</td><td class=\"border border-gray-400 px-2 py-1\">65</td><td class=\"border border-gray-400 px-2 py-1\">55</td><td class=\"border border-gray-400 px-2 py-1\">120</td></tr></tbody></table>\n\nIf a student who prefers studying in a Coffee Shop is selected at random, what is the probability that the student is a STEM major?\n\n*Solution:*\nRestricting to students who prefer a Coffee Shop ($55$ total), $25$ are STEM majors.\n$$ P = \\frac{25}{55} = \\frac{5}{11} $$"
  },
  {
    id: StaticLessonIds.SAT2026MarchFormA,
    title: "SAT-2026-March-form A",
    description: "Digital SAT Math Practice Exam March 2026 Form A featuring 44 complete questions (Module 1 and Module 2) with detailed explanations, tables, and graphs.",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "# SAT 2026 March Form A - Full Exam Guide\n\nThis complete exam contains 44 Digital SAT Math questions split into Module 1 (22 questions) and Module 2 (22 questions).\n\n### Exam Specifications\n- **Course**: DSAT\n- **Total Questions**: 44 (Multiple Choice and Grid-in)\n- **Topics Covered**: Linear Equations, Systems, Exponential Growth & Decay, Geometry & Trigonometry, Probability, Data Tables, and Quadratics."
  },
  {
    id: StaticLessonIds.SAT2026MarchFormB,
    title: "SAT-2026-March-form B",
    description: "Digital SAT Math Practice Exam March 2026 Form B featuring 44 complete questions (Module 1 and Module 2) with detailed explanations, tables, and graphs.",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "# SAT 2026 March Form B - Full Exam Guide\n\nThis complete exam contains 44 Digital SAT Math questions split into Module 1 (22 questions) and Module 2 (22 questions).\n\n### Exam Specifications\n- **Course**: DSAT\n- **Total Questions**: 44 (Multiple Choice and Grid-in)\n- **Topics Covered**: Linear Equations, Systems, Exponential Growth & Decay, Geometry & Trigonometry, Probability, Data Tables, and Quadratics."
  },
  {
    id: StaticLessonIds.SAT2026MarchFormC,
    title: "SAT-2026-March-form C",
    description: "Digital SAT Math Practice Exam March 2026 Form C featuring 44 complete questions (Module 1 and Module 2) with detailed explanations, tables, and graphs.",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "# SAT 2026 March Form C - Full Exam Guide\n\nThis complete exam contains 44 Digital SAT Math questions split into Module 1 (22 questions) and Module 2 (22 questions).\n\n### Exam Specifications\n- **Course**: DSAT\n- **Total Questions**: 44 (Multiple Choice and Grid-in)\n- **Topics Covered**: Linear Equations, Systems, Exponential Growth & Decay, Geometry & Trigonometry, Probability, Data Tables, and Quadratics."
  },
  {
    id: StaticLessonIds.SAT2026MarchFormD,
    title: "SAT-2026-March-form D",
    description: "Digital SAT Math Practice Exam March 2026 Form D featuring 44 complete questions (Module 1 and Module 2) with detailed explanations, tables, and graphs.",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "# SAT 2026 March Form D - Full Exam Guide\n\nThis complete exam contains 44 Digital SAT Math questions split into Module 1 (22 questions) and Module 2 (22 questions).\n\n### Exam Specifications\n- **Course**: DSAT\n- **Total Questions**: 44 (Multiple Choice and Grid-in)\n- **Topics Covered**: Linear Equations, Systems, Exponential Growth & Decay, Geometry & Trigonometry, Probability, Data Tables, and Quadratics."
  },
  {
    id: StaticLessonIds.ACT1MalekExam,
    title: "Malek Exam",
    description: "An exam covering rounding, ratio, direct variation, and solving equations.",
    icon: "FileText",
    course: "ACT1",
    type: "exam",
    studyNotes: "This exam covers rounding to the nearest tenth and hundredth, setting up and solving ratios and proportions, direct variation problems, and solving basic linear equations."
  },
  {
    id: StaticLessonIds.EST12020M10,
    title: "EST1-2020-M10-EXAM",
    description: "EST1 October 2020 Calculator Section",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "# EST1 October 2020 (M10) Exam Review\n\nFull 38 questions with detailed step-by-step video explanation links for every question."
  },
  {
    id: StaticLessonIds.EST1Oct2021,
    title: "EST1 October 2021 Exam",
    description: "EST1 Full Exam - October 2021 (Section 1)",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "# EST1 October 2021 Exam Review\n\nThis exam is generated from the October 2021 test."
  },
  {
    id: StaticLessonIds.EST1May2021,
    title: "EST1 May 2021 Exam",
    description: "EST1 Full Exam - May 2021",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "# EST1 May 2021 Exam Review\n\nThis exam is generated from the May 2021 test."
  },
  {
    id: StaticLessonIds.EST2InverseFunction1,
    title: "Inverse Function 1",
    description: "EST2 Math: Finding and Evaluating Inverse Functions",
    icon: "Activity",
    course: "EST2",
    type: "lesson",
    studyNotes: "## Inverse Function 1\n\nAn **inverse function** reverses the operation of the original function. If a function $f$ maps $x$ to $y$, then its inverse $f^{-1}$ maps $y$ back to $x$.\n\n### Key Properties\n- $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$\n- The graph of $f^{-1}(x)$ is a reflection of the graph of $f(x)$ across the line $y = x$.\n- A function has an inverse function if and only if it is **one-to-one** (passes the Horizontal Line Test).\n- Domain of $f(x)$ = Range of $f^{-1}(x)$\n- Range of $f(x)$ = Domain of $f^{-1}(x)$\n\n### How to Find the Inverse of a Function\n1. Replace $f(x)$ with $y$.\n2. Swap $x$ and $y$.\n3. Solve for $y$.\n4. Replace $y$ with $f^{-1}(x)$.\n\n---\n\n### Solved Examples\n\n**Example 1:**\nFind the inverse of $f(x) = 2x - 5$.\n\n*Solution:*\n1. $y = 2x - 5$\n2. Swap $x$ and $y$: $x = 2y - 5$\n3. Solve for $y$:\n   $x + 5 = 2y$\n   $y = \\frac{x + 5}{2}$\n4. $f^{-1}(x) = \\frac{x + 5}{2}$\n\n**Example 2:**\nFind the inverse of $g(x) = \\frac{3x + 1}{x - 2}$.\n\n*Solution:*\n1. $y = \\frac{3x + 1}{x - 2}$\n2. Swap $x$ and $y$: $x = \\frac{3y + 1}{y - 2}$\n3. Solve for $y$:\n   $x(y - 2) = 3y + 1$\n   $xy - 2x = 3y + 1$\n   $xy - 3y = 2x + 1$\n   $y(x - 3) = 2x + 1$\n   $y = \\frac{2x + 1}{x - 3}$\n4. $g^{-1}(x) = \\frac{2x + 1}{x - 3}$"
  },
  {
    id: StaticLessonIds.EST2Transformations,
    title: "transformations",
    description: "EST2 Math: Transformations of Radical, Quadratic, Absolute Value & Exponential Functions, Domain & Range",
    icon: "Maximize2",
    course: "EST2",
    type: "lesson",
    studyNotes: `# EST2 Math: Transformations of Functions, Domain & Range

## 1. General Principles of Function Transformations
Given a parent function $y = f(x)$, the transformed function can be expressed in general form as:
$$g(x) = a \\cdot f(b(x - h)) + k$$

### A. Vertical Transformations (Outside the Function)
- **Vertical Stretch / Compression ($a$):**
  - If $|a| > 1$: Vertical stretch by a factor of $|a|$.
  - If $0 < |a| < 1$: Vertical compression (shrink) by a factor of $|a|$.
- **Vertical Reflection ($-a$):**
  - If $a < 0$: Reflection across the $x$-axis (all $y$-values are negated).
- **Vertical Shift ($k$):**
  - $+k$: Shifted upward by $k$ units.
  - $-k$: Shifted downward by $k$ units.

### B. Horizontal Transformations (Inside the Function)
- **Horizontal Compression / Stretch ($b$):**
  - If $|b| > 1$: Horizontal compression by a factor of $\\frac{1}{|b|}$.
  - If $0 < |b| < 1$: Horizontal stretch by a factor of $\\frac{1}{|b|}$.
- **Horizontal Reflection ($-b$):**
  - If $b < 0$: Reflection across the $y$-axis (all $x$-values are negated).
- **Horizontal Shift ($h$):**
  - $x - h$: Shifted right by $h$ units ($h > 0$).
  - $x + h$: Shifted left by $h$ units ($h > 0$).
  - **Important Rule:** Always factor out $b$ first: $f(bx - c) = f\\left(b\\left(x - \\frac{c}{b}\\right)\\right)$, meaning the true horizontal shift is $\\frac{c}{b}$.

---

## 2. Radical Functions: $f(x) = a\\sqrt{b(x - h)} + k$

### Key Properties:
- **Starting Point (Initial Endpoint):** Located at $(h, k)$.
- **Domain:** Set radicand $\\ge 0$:
  $$b(x - h) \\ge 0$$
  - If $b > 0$: Domain is $[h, \\infty)$.
  - If $b < 0$: Domain is $(-\\infty, h]$.
- **Range:**
  - If $a > 0$: Range is $[k, \\infty)$.
  - If $a < 0$: Range is $(-\\infty, k]$.

### Semicircles:
- $y = \\sqrt{r^2 - x^2}$: Upper semicircle centered at origin, radius $r$. Domain: $[-r, r]$, Range: $[0, r]$.
- $y = -\\sqrt{r^2 - x^2}$: Lower semicircle. Domain: $[-r, r]$, Range: $[-r, 0]$.

### Cube Root Functions: $f(x) = a\\sqrt[3]{x - h} + k$
- Inflection / symmetry point is at $(h, k)$.
- **Domain:** $(-\\infty, \\infty)$
- **Range:** $(-\\infty, \\infty)$

---

## 3. Quadratic Functions: $f(x) = a(x - h)^2 + k$

### Key Properties:
- **Vertex:** $(h, k)$
- **Axis of Symmetry:** $x = h$
- **Direction & Extrema:**
  - If $a > 0$: Parabola opens upward $\\implies$ Minimum value is $k$ at $x = h$.
    - **Domain:** $(-\\infty, \\infty)$
    - **Range:** $[k, \\infty)$
  - If $a < 0$: Parabola opens downward $\\implies$ Maximum value is $k$ at $x = h$.
    - **Domain:** $(-\\infty, \\infty)$
    - **Range:** $(-\\infty, k]$

### Range on a Restricted Domain $[p, q]$:
1. Check if the vertex $x = h$ falls inside $[p, q]$.
2. If $h \\in [p, q]$, the vertex $y$-value $k$ is an absolute extremum (max or min).
3. Evaluate $f(p)$ and $f(q)$ at the endpoints.
4. Range is $[\\min, \\max]$ among $\\{k, f(p), f(q)\\}$.

---

## 4. Absolute Value Functions: $f(x) = a|b(x - h)| + k$

### Key Properties:
- **Vertex (Cusp):** $(h, k)$
- **Slopes of the V-shape:** Left branch has slope $-a|b|$, right branch has slope $a|b|$.
- **Domain:** $(-\\infty, \\infty)$
- **Range:**
  - If $a > 0$: Range is $[k, \\infty)$
  - If $a < 0$: Range is $(-\\infty, k]$

### Special Absolute Value Transformations:
- **$y = |f(x)|$:** Reflects any portion of $f(x)$ lying below the $x$-axis ($y < 0$) upward to positive $y$. The range becomes $[0, \\infty)$ if $f(x)$ has real zeros.
- **$y = f(|x|)$:** Erases the left side ($x < 0$) and replaces it with a mirror reflection of the right side ($x \\ge 0$) across the $y$-axis. The resulting graph is always an even function ($f(|-x|) = f(|x|)$).

---

## 5. Exponential Functions: $f(x) = a \\cdot b^{x - h} + k$ ($b > 0, b \\ne 1$)

### Key Properties:
- **Horizontal Asymptote:** The line $y = k$.
- **Domain:** $(-\\infty, \\infty)$ (exponents accept all real numbers).
- **Range:** **Strictly open interval!**
  - If $a > 0$: $a \\cdot b^{x-h} > 0$ always $\\implies$ **Range:** $(k, \\infty)$
  - If $a < 0$: $a \\cdot b^{x-h} < 0$ always $\\implies$ **Range:** $(-\\infty, k)$
  - *Crucial EST2 Note:* The horizontal asymptote is an open boundary; the function never touches $y = k$.

---

## 6. Solved Examples (EST2 Exam Style)

### Example 1: Transformed Radical Function
**Problem:** The function $g(x) = -3\\sqrt{8 - 4x} + 7$ is given. Determine its domain, range, and starting endpoint.

**Solution:**
1. Factor the radicand:
   $$g(x) = -3\\sqrt{-4(x - 2)} + 7 = -3\\sqrt{4}\\sqrt{-(x - 2)} + 7 = -6\\sqrt{-(x - 2)} + 7$$
2. **Domain:**
   $$8 - 4x \\ge 0 \\implies -4x \\ge -8 \\implies x \\le 2$$
   Domain: $(-\\infty, 2]$.
3. **Starting Point:** $x = 2 \\implies g(2) = 7$. Point is $(2, 7)$.
4. **Range:** Since $\\sqrt{\\cdot} \\ge 0$ and $a = -6 < 0$:
   $$-6\\sqrt{8 - 4x} \\le 0 \\implies g(x) \\le 7$$
   Range: $(-\\infty, 7]$.

### Example 2: Quadratic Range on a Restricted Interval
**Problem:** Find the range of $f(x) = 2(x - 3)^2 - 5$ on the interval $[1, 6]$.

**Solution:**
1. The vertex is at $(3, -5)$.
2. Since $x = 3 \\in [1, 6]$ and $a = 2 > 0$, the absolute minimum on the interval is $f(3) = -5$.
3. Evaluate at the boundary endpoints:
   - $f(1) = 2(1 - 3)^2 - 5 = 2(4) - 5 = 3$
   - $f(6) = 2(6 - 3)^2 - 5 = 2(9) - 5 = 13$
4. The maximum value on the interval is $13$.
5. Range: $[-5, 13]$.

### Example 3: Inverted Exponential Asymptote & Range
**Problem:** What is the horizontal asymptote, domain, and range of $h(x) = -4 \\cdot 3^{x+1} + 12$?

**Solution:**
1. **Horizontal Asymptote:** As $x \\to -\\infty$, $3^{x+1} \\to 0$, so $h(x) \\to 12$. The line is $y = 12$.
2. **Domain:** $(-\\infty, \\infty)$.
3. **Range:** Since $3^{x+1} > 0$ for all $x \\in \\mathbb{R}$:
   $$-4 \\cdot 3^{x+1} < 0 \\implies h(x) < 12$$
   Range is strictly $(-\\infty, 12)$.`
  },

  {
    id: StaticLessonIds.EST2Matrix,
    title: "Matrix",
    description: "EST2 Math: Matrix Dimensions, Elements, Operations, and Multiplication",
    icon: "Grid",
    course: "EST2",
    type: "lesson",
    studyNotes: `## EST2 Matrices: Complete Study Guide

Matrices are rectangular arrays of numbers arranged in rows and columns. They are a fundamental topic in EST2 math, covering dimensions, elements, arithmetic, and multiplication.

### 1. Dimensions of a Matrix
The dimensions (or size) of a matrix are defined by the number of its rows and columns, written as **rows \$\\times\$ columns** (read as "rows by columns").
- A matrix with \$m\$ rows and \$n\$ columns has dimensions \$m \\times n\$.
- Example: \$A = \\begin{bmatrix} 2 & -1 & 3 \\\\ 0 & 4 & 5 \\end{bmatrix}\$ has \$2\$ rows and \$3\$ columns, so it is a \$2 \\times 3\$ matrix.

### 2. Matrix Elements
An individual number in a matrix is called an element or entry. It is denoted by a lowercase letter with subscripts for its row and column.
- \$a_{ij}\$ refers to the element in row \$i\$ and column \$j\$.
- In the matrix \$A\$ above:
  - \$a_{12}\$ (row 1, col 2) is \$-1\$.
  - \$a_{23}\$ (row 2, col 3) is \$5\$.

---

### 3. Matrix Addition and Subtraction
**Rule**: You can only add or subtract matrices if they have the **exact same dimensions**.
**How**: Add or subtract the corresponding elements.

*Example:*
\$\\begin{bmatrix} 1 & 3 \\\\ -2 & 4 \\end{bmatrix} + \\begin{bmatrix} 0 & 5 \\\\ 2 & -1 \\end{bmatrix} = \\begin{bmatrix} 1+0 & 3+5 \\\\ -2+2 & 4+(-1) \\end{bmatrix} = \\begin{bmatrix} 1 & 8 \\\\ 0 & 3 \\end{bmatrix}\$

---

### 4. Scalar Multiplication
**Rule**: Multiply every element in the matrix by the given scalar (number).

*Example:*
\$3 \\begin{bmatrix} -3 & 4 \\\\ 1 & -2 \\end{bmatrix} = \\begin{bmatrix} 3(-3) & 3(4) \\\\ 3(1) & 3(-2) \\end{bmatrix} = \\begin{bmatrix} -9 & 12 \\\\ 3 & -6 \\end{bmatrix}\$

---

### 5. Matrix Multiplication
**Rule for Definition**: The product of two matrices \$AB\$ is only defined if the **number of columns in \$A\$ equals the number of rows in \$B\$**.
- If \$A\$ is \$m \\times n\$ and \$B\$ is \$n \\times p\$, then \$AB\$ is defined.
- The resulting matrix will have dimensions \$m \\times p\$ (the outer numbers).
- **Important**: Matrix multiplication is *not* commutative (\$AB \\neq BA\$ in most cases).

**How to Multiply**: Take the dot product of rows from the first matrix and columns from the second matrix.
*Example (Product of \$2 \\times 2\$ matrices):*
\$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\begin{bmatrix} e & f \\\\ g & h \\end{bmatrix} = \\begin{bmatrix} ae+bg & af+bh \\\\ ce+dg & cf+dh \\end{bmatrix}\$

---

### 6. The Identity Matrix
The identity matrix \$I\$ is a square matrix with \$1\$s on the main diagonal (top-left to bottom-right) and \$0\$s everywhere else.
- \$2 \\times 2\$ Identity: \$I_2 = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}\$
- Property: Multiplying any matrix \$A\$ by the identity matrix yields \$A\$. (\$AI = IA = A\$).

---

### EST2 Solved Examples

**Example 1: Undefined Operations**
*Question:* Let \$A\$ be a \$2 \\times 3\$ matrix and \$B\$ be a \$2 \\times 3\$ matrix. Which of the following is UNDEFINED? (A) \$A+B\$, (B) \$3A-B\$, (C) \$AB\$.
*Solution:* \$A\$ and \$B\$ have the same dimensions, so addition and subtraction are defined. For \$AB\$, the columns of \$A\$ (which is \$3\$) must equal the rows of \$B\$ (which is \$2\$). Since \$3 \\neq 2\$, \$AB\$ is undefined.

**Example 2: Elements and Equations**
*Question:* If \$\\begin{bmatrix} x & 3 \\\\ -1 & 4 \\end{bmatrix} + \\begin{bmatrix} x & y \\\\ 2 & 6 \\end{bmatrix} = \\begin{bmatrix} 2x & 5 \\\\ 1 & 10 \\end{bmatrix}\$, find \$y\$.
*Solution:* Set up the equation using the corresponding elements in the first row, second column:
\$3 + y = 5 \\implies y = 2\$.

**Example 3: Matrix Multiplication**
*Question:* Find \$\\begin{bmatrix} -1 & 2 \\\\ 3 & 0 \\end{bmatrix} \\begin{bmatrix} 2 & 1 \\\\ 4 & -2 \\end{bmatrix}\$.
*Solution:* 
- Top-Left: \$(-1)(2) + (2)(4) = -2 + 8 = 6\$
- Top-Right: \$(-1)(1) + (2)(-2) = -1 - 4 = -5\$
- Bottom-Left: \$(3)(2) + (0)(4) = 6 + 0 = 6\$
- Bottom-Right: \$(3)(1) + (0)(-2) = 3 + 0 = 3\$
Result: \$\\begin{bmatrix} 6 & -5 \\\\ 6 & 3 \\end{bmatrix}\$`
  },
  {
    id: StaticLessonIds.EST2TrigonometryNew,
    title: "(-Est2-Trigonometry-new )",
    description: "EST2 Math: Advanced Trigonometry, Trigonometric Identities, Equations, Law of Sines & Cosines, and Trigonometric Modeling",
    icon: "Activity",
    course: "EST2",
    type: "lesson",
    studyNotes: `## EST2 Trigonometry (Advanced): Study Guide & Key Formulas

Trigonometry on the EST2 Math exam tests an in-depth understanding of algebraic identities, compound and double angle formulas, reciprocal functions, periodic modeling, and triangle trigonometry.

---

### 1. Fundamental & Reciprocal Identities
- **Reciprocals:**
  $$\\csc x = \\frac{1}{\\sin x}, \\quad \\sec x = \\frac{1}{\\cos x}, \\quad \\cot x = \\frac{1}{\\tan x} = \\frac{\\cos x}{\\sin x}$$
- **Pythagorean Identities:**
  $$\\sin^2 x + \\cos^2 x = 1$$
  $$1 + \\tan^2 x = \\sec^2 x \\implies \\sec^2 x - \\tan^2 x = 1$$
  $$1 + \\cot^2 x = \\csc^2 x \\implies \\csc^2 x - \\cot^2 x = 1$$

---

### 2. Compound Angle & Double Angle Formulas
- **Sum & Difference Formulas:**
  $$\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B$$
  $$\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B$$
  $$\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}$$
- **Double Angle Formulas:**
  $$\\sin(2x) = 2\\sin x \\cos x$$
  $$\\cos(2x) = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x$$
  $$\\tan(2x) = \\frac{2\\tan x}{1 - \\tan^2 x}$$

---

### 3. Sum-to-Product & Product-to-Sum Formulas
- **Sum-to-Product:**
  $$\\sin A + \\sin B = 2\\sin\\left(\\frac{A+B}{2}\\right)\\cos\\left(\\frac{A-B}{2}\\right)$$
  $$\\cos A + \\cos B = 2\\cos\\left(\\frac{A+B}{2}\\right)\\cos\\left(\\frac{A-B}{2}\\right)$$
  $$\\sin A - \\sin B = 2\\cos\\left(\\frac{A+B}{2}\\right)\\sin\\left(\\frac{A-B}{2}\\right)$$
  $$\\cos A - \\cos B = -2\\sin\\left(\\frac{A+B}{2}\\right)\\sin\\left(\\frac{A-B}{2}\\right)$$

---

### 4. Non-Right Triangle Formulas
- **Law of Sines:** $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$
- **Law of Cosines:** $c^2 = a^2 + b^2 - 2ab\\cos C \\implies \\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$
- **Area of a Triangle:** $\\text{Area} = \\frac{1}{2}ab\\sin C$
- **Area of a Regular Polygon ($n$ sides, inscribed in circle of radius $R$):**
  $$\\text{Area} = n \\times \\left(\\frac{1}{2} R^2 \\sin\\left(\\frac{360^\\circ}{n}\\right)\\right)$$

---

### 5. Sinusoidal Function Graphs & Transformations
For $y = A \\sin(Bx - C) + D = A\\sin\\left(B\\left(x - \\frac{C}{B}\\right)\\right) + D$:
- **Amplitude**: $|A|$
- **Period ($T$)**: $\\frac{2\\pi}{|B|}$ (or $\\frac{\\pi}{|B|}$ for tangent)
- **Phase Shift**: $\\frac{C}{B}$ (shift right if $>0$, left if $<0$)
- **Vertical Shift / Midline**: $y = D$
- **Range**: $[D - |A|, D + |A|]$

---

### 6. EST2 Solved Examples

**Example 1: Simplifying with Reciprocals**
*Problem:* Simplify $2\\sin^2 x \\cdot \\sec^2 x + \\tan^2 x$.
*Solution:*
Since $\\sec x = \\frac{1}{\\cos x}$, we have $\\sec^2 x = \\frac{1}{\\cos^2 x}$.
$$2\\sin^2 x \\left(\\frac{1}{\\cos^2 x}\\right) + \\tan^2 x = 2\\left(\\frac{\\sin^2 x}{\\cos^2 x}\\right) + \\tan^2 x = 2\\tan^2 x + \\tan^2 x = 3\\tan^2 x$$

**Example 2: Difference of Inverses**
*Problem:* If $\\arcsin(x) + \\arccos(y) = \\frac{2\\pi}{3}$, evaluate $\\arcsin(x) - \\arcsin(y)$.
*Solution:*
Recall the identity $\\arccos(y) = \\frac{\\pi}{2} - \\arcsin(y)$.
Substitute:
$$\\arcsin(x) + \\left(\\frac{\\pi}{2} - \\arcsin(y)\\right) = \\frac{2\\pi}{3} \\implies \\arcsin(x) - \\arcsin(y) = \\frac{2\\pi}{3} - \\frac{\\pi}{2} = \\frac{\\pi}{6}$$`
  },
  {
    id: StaticLessonIds.EST2Trigonometry,
    title: "(152-Est2Trigonometry )",
    description: "EST2 Math: Trigonometry, SOH CAH TOA, Unit Circle, Sine and Cosine Laws, and Trigonometric Identities",
    icon: "Activity",
    course: "EST2",
    type: "lesson",
    studyNotes: `## EST2 Trigonometry: Complete Study Guide

Trigonometry is a heavily tested topic on the EST2 exam. It goes beyond basic right-triangle trigonometry and covers unit circle properties, radians, trigonometric graphs, identities, and solving complex triangles using the Law of Sines and Cosines.

### 1. Right Triangle Trigonometry (SOH CAH TOA)
For a right triangle with an acute angle \$\\theta\$:
- **Sine**: \$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}\$
- **Cosine**: \$\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}\$
- **Tangent**: \$\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}\$

**Reciprocal Functions:**
- **Cosecant**: \$\\csc \\theta = \\frac{1}{\\sin \\theta} = \\frac{\\text{Hypotenuse}}{\\text{Opposite}}\$
- **Secant**: \$\\sec \\theta = \\frac{1}{\\cos \\theta} = \\frac{\\text{Hypotenuse}}{\\text{Adjacent}}\$
- **Cotangent**: \$\\cot \\theta = \\frac{1}{\\tan \\theta} = \\frac{\\text{Adjacent}}{\\text{Opposite}}\$

**Complementary Angles:** 
If \$\\alpha + \\beta = 90^\\circ\$ (or \$\\frac{\\pi}{2}\$ radians):
\$\\sin \\alpha = \\cos \\beta\$ and \$\\tan \\alpha = \\cot \\beta\$.

---

### 2. Special Right Triangles
Memorizing these ratios saves time:
- **\$30^\\circ-60^\\circ-90^\\circ\$ Triangle:** Sides are in the ratio \$x : x\\sqrt{3} : 2x\$.
- **\$45^\\circ-45^\\circ-90^\\circ\$ Triangle:** Sides are in the ratio \$x : x : x\\sqrt{2}\$.

---

### 3. Radians and Degrees
- To convert degrees to radians: Multiply by \$\\frac{\\pi}{180^\\circ}\$
- To convert radians to degrees: Multiply by \$\\frac{180^\\circ}{\\pi}\$
- **Arc Length**: \$s = r\\theta\$ (where \$\\theta\$ is in radians)
- **Sector Area**: \$A = \\frac{1}{2}r^2\\theta\$ (where \$\\theta\$ is in radians)

---

### 4. The Unit Circle and Quadrants
The Unit Circle has a radius of \$1\$. For any point \$(x, y)\$ on the unit circle at an angle \$\\theta\$ from the positive x-axis:
- \$\\cos \\theta = x\$
- \$\\sin \\theta = y\$
- \$\\tan \\theta = \\frac{y}{x}\$

**ASTC Rule (All Students Take Calculus):**
- **Quadrant I**: **A**ll functions are positive.
- **Quadrant II**: **S**ine (and Cosecant) are positive.
- **Quadrant III**: **T**angent (and Cotangent) are positive.
- **Quadrant IV**: **C**osine (and Secant) are positive.

---

### 5. Trigonometric Identities
**Pythagorean Identities:**
- \$\\sin^2 \\theta + \\cos^2 \\theta = 1\$
- \$1 + \\tan^2 \\theta = \\sec^2 \\theta\$
- \$1 + \\cot^2 \\theta = \\csc^2 \\theta\$

**Double Angle Formulas:**
- \$\\sin(2\\theta) = 2\\sin \\theta \\cos \\theta\$
- \$\\cos(2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta = 2\\cos^2 \\theta - 1 = 1 - 2\\sin^2 \\theta\$
- \$\\tan(2\\theta) = \\frac{2\\tan \\theta}{1 - \\tan^2 \\theta}\$

---

### 6. Law of Sines and Law of Cosines
Used for solving oblique (non-right) triangles.
- **Law of Sines:** \$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}\$
  - Use when you know AAS, ASA, or SSA (ambiguous case).
- **Law of Cosines:** \$c^2 = a^2 + b^2 - 2ab \\cos C\$
  - Use when you know SSS or SAS.
- **Area of a Triangle:** \$\\text{Area} = \\frac{1}{2}ab \\sin C\$

---

### 7. Graphing Trigonometric Functions
For functions in the form \$y = A \\sin(B(x - C)) + D\$ or \$y = A \\cos(B(x - C)) + D\$:
- **Amplitude**: \$|A|\$ (Half the distance from max to min)
- **Period**: \$\\frac{2\\pi}{|B|}\$ (For tangent/cotangent, period is \$\\frac{\\pi}{|B|}\$)
- **Phase Shift**: \$C\$ (Horizontal shift)
- **Vertical Shift**: \$D\$

---

### 8. EST2 Solved Examples

**Example 1: Complementary Angles**
*Question:* In right triangle \$XYZ\$ with right angle at \$Y\$, \$\\sin X = \\frac{4}{7}\$. What is \$\\cos Z\$?
*Solution:* Angles \$X\$ and \$Z\$ are complementary (\$X + Z = 90^\\circ\$). Therefore, \$\\cos Z = \\sin X\$.
*Answer:* \$\\cos Z = \\frac{4}{7}\$

**Example 2: Unit Circle & Quadrants**
*Question:* If \$\\cos \\theta = -\\frac{3}{5}\$ and \$\\tan \\theta > 0\$, what is the value of \$\\sin \\theta\$?
*Solution:* Since \$\\cos\$ is negative and \$\\tan\$ is positive, \$\\theta\$ must be in Quadrant III. In QIII, \$\\sin\$ is negative. Using the Pythagorean identity: \$\\sin^2 \\theta + (-\\frac{3}{5})^2 = 1 \\implies \\sin^2 \\theta = 1 - \\frac{9}{25} = \\frac{16}{25}\$. Taking the negative root: \$\\sin \\theta = -\\frac{4}{5}\$.

**Example 3: Double Angle Identity**
*Question:* If \$\\sin x = \\frac{1}{3}\$ and \$x\$ is in the first quadrant, what is \$\\cos(2x)\$?
*Solution:* Use the identity \$\\cos(2x) = 1 - 2\\sin^2 x\$.
\$\\cos(2x) = 1 - 2\\left(\\frac{1}{3}\\right)^2 = 1 - 2\\left(\\frac{1}{9}\\right) = 1 - \\frac{2}{9} = \\frac{7}{9}\$.

**Example 4: Law of Cosines**
*Question:* In \$\\triangle ABC\$, \$a = 5\$, \$b = 8\$, and \$\\angle C = 60^\\circ\$. Find the length of side \$c\$.
*Solution:* Use the Law of Cosines: \$c^2 = a^2 + b^2 - 2ab \\cos C\$.
\$c^2 = 5^2 + 8^2 - 2(5)(8)\\cos(60^\\circ)\$
\$c^2 = 25 + 64 - 80\\left(\\frac{1}{2}\\right) = 89 - 40 = 49\$
\$c = \\sqrt{49} = 7\$.

**Example 5: Period of a Function**
*Question:* What is the period of the function \$f(x) = -3\\tan\\left(\\frac{\\pi}{4} x\\right)\$?
*Solution:* For a tangent function \$y = A\\tan(Bx)\$, the period is \$\\frac{\\pi}{|B|}\$.
Here, \$B = \\frac{\\pi}{4}\$.
\$\\text{Period} = \\frac{\\pi}{\\frac{\\pi}{4}} = \\pi \\cdot \\frac{4}{\\pi} = 4\$.`
  },
  {
    id: StaticLessonIds.Similarity,
    title: "Similarity",
    description: "Geometry: Similar Triangles and Figures",
    icon: "Triangle",
    course: "GEOMETRY",
    type: "lesson",
    studyNotes: "## Similarity\n\nTwo triangles are similar if their corresponding angles are congruent and their corresponding sides are proportional.\n\n**Similarity Theorems:**\n- **AA (Angle-Angle):** Two angles of one triangle are congruent to two angles of another.\n- **SSS (Side-Side-Side):** All three pairs of corresponding sides are proportional.\n- **SAS (Side-Angle-Side):** Two pairs of corresponding sides are proportional and the included angles are congruent.\n\n**Properties:**\n- Ratio of perimeters = Ratio of corresponding sides.\n- Ratio of areas = (Ratio of corresponding sides)^2."
  },
  {
    id: StaticLessonIds.EST2Similarity,
    title: "Similarity",
    description: "EST2 Math: Similar Triangles, Scale Factors, and Area & Volume Ratios",
    icon: "Triangle",
    course: "EST2",
    type: "lesson",
    studyNotes: `## EST2 Math: Similarity & Scale Factors

Two geometric figures are **similar** (denoted by $\\sim$) if their corresponding angles are congruent and their corresponding side lengths are proportional.

---

### 1. Triangle Similarity Criteria

Two triangles $\\triangle ABC$ and $\\triangle DEF$ are similar if:

1. **AA (Angle-Angle) Postulate:** Two angles of one triangle are congruent to two angles of another triangle.
   - If $\\angle A = \\angle D$ and $\\angle B = \\angle E$, then $\\triangle ABC \\sim \\triangle DEF$.
2. **SAS (Side-Angle-Side) Similarity:** Two pairs of corresponding sides are proportional and the included angles are congruent.
   - If $\\frac{AB}{DE} = \\frac{AC}{DF}$ and $\\angle A = \\angle D$, then $\\triangle ABC \\sim \\triangle DEF$.
3. **SSS (Side-Side-Side) Similarity:** All three pairs of corresponding side lengths are proportional.
   - If $\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF} = k$.

---

### 2. Scale Factors & Dimensional Ratios

For similar figures with scale factor $k = \\frac{a}{b}$:

- **Linear Ratio:** $\\frac{\\text{Perimeter}_1}{\\text{Perimeter}_2} = k = \\frac{a}{b}$
- **Area Ratio:** $\\frac{\\text{Area}_1}{\\text{Area}_2} = k^2 = \\frac{a^2}{b^2}$
- **Volume Ratio (3D Solids):** $\\frac{\\text{Volume}_1}{\\text{Volume}_2} = k^3 = \\frac{a^3}{b^3}$

---

### Solved Examples (EST2 Style)

**Example 1:**
Given $\\triangle XYZ \\sim \\triangle FGH$, where $\\triangle XYZ$ is a right triangle at $Z$ with $XY = 10$, $YZ = 8$, and $XZ = 6$. Find the value of $\\sin F$.

*Solution:*
1. Since $\\triangle XYZ \\sim \\triangle FGH$, corresponding angles are congruent, so $\\angle F = \\angle X$.
2. In right triangle $\\triangle XYZ$, $\\sin X = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{YZ}{XY} = \\frac{8}{10} = \\frac{4}{5}$.
3. Therefore, $\\sin F = \\sin X = \\frac{4}{5}$.

---

**Example 2:**
Two similar polygons have an area ratio of $\\frac{9}{25}$. If the perimeter of the smaller polygon is $18\\text{ cm}$, what is the perimeter of the larger polygon?

*Solution:*
1. The scale factor $k$ is the square root of the area ratio:
   $$k = \\sqrt{\\frac{9}{25}} = \\frac{3}{5}$$
2. The ratio of perimeters equals the scale factor:
   $$\\frac{18}{P} = \\frac{3}{5} \\implies P = \\frac{18 \\times 5}{3} = 30\\text{ cm}$$

---

**Example 3:**
Two similar solid cones have volumes of $16\\pi\\text{ cm}^3$ and $54\\pi\\text{ cm}^3$. If the height of the smaller cone is $4\\text{ cm}$, find the height of the larger cone.

*Solution:*
1. The volume ratio is $\\frac{16\\pi}{54\\pi} = \\frac{8}{27}$.
2. The linear scale factor for heights is the cube root of the volume ratio:
   $$k = \\sqrt[3]{\\frac{8}{27}} = \\frac{2}{3}$$
3. Set up the height proportion:
   $$\\frac{4}{h_2} = \\frac{2}{3} \\implies h_2 = \\frac{4 \\times 3}{2} = 6\\text{ cm}$$`
  },
  {
    id: StaticLessonIds.EST2ArithmeticSequence,
    title: "Arithmetic Sequence",
    description: "EST2 Course - Arithmetic Sequence Examples and Practice",
    icon: "Sigma",
    course: "EST2",
    type: "lesson",
    studyNotes: "## Arithmetic Sequence\n\n**General Term of an Arithmetic Sequence:**\nThe $n^{\\text{th}}$ term (the general term) of an arithmetic sequence with first term $a_1$ and common difference $d$ is:\n$a_n = a_1 + (n - 1)d$\n\n**The Sum of the First $n$ Terms of an Arithmetic Sequence:**\n$S_n = \\frac{n}{2}(a_1 + a_n)$\nwhere $a_1$ is the first term and $a_n$ is the last term.\n\n**Note:** If three numbers $\\log a, \\log b,$ and $\\log c$ in that order form an arithmetic progression, then $b^2 = ac$."
  },
  {
    id: StaticLessonIds.EST2GeometricSequence,
    title: "ESt2-Geometric Sequence",
    description: "EST2 Math: Geometric Sequences, Common Ratio, Explicit & Recursive Formulas, Partial Sums, Infinite Series, and Word Applications",
    icon: "Sigma",
    course: "EST2",
    type: "lesson",
    studyNotes: String.raw`## EST2 Geometric Sequence: Complete Study Guide & Formulas

A **geometric sequence** is a sequence of non-zero numbers where each term after the first is found by multiplying the previous term by a fixed, non-zero number called the **common ratio** ($r$).

---

### Key Formulas & Core Rules

1. **Common Ratio ($r$):**
   $$r = \frac{a_n}{a_{n-1}} \quad \text{for any } n \ge 2$$

2. **Explicit Formula ($n^{\text{th}}$ term):**
   $$a_n = a_1 \cdot r^{n-1}$$
   where $a_1$ is the first term and $r$ is the common ratio.

3. **Recursive Formula:**
   $$a_1 = \text{given value}, \quad a_n = r \cdot a_{n-1} \text{ for } n \ge 2$$

4. **Sum of Finite Geometric Series ($S_n$):**
   $$S_n = a_1 \cdot \frac{1 - r^n}{1 - r} \quad (r \neq 1)$$

5. **Sum of Infinite Geometric Series ($S_\infty$):**
   An infinite geometric series converges **if and only if** $|r| < 1$:
   $$S_\infty = \frac{a_1}{1 - r}$$
   *Note: If $|r| \ge 1$, the infinite series diverges and has no finite sum.*

6. **Geometric Mean:**
   If three terms $a, b, c$ form a geometric sequence, then $b^2 = ac \implies b = \pm\sqrt{ac}$.

7. **Logarithmic Transformation:**
   If $a_1, a_2, a_3, \dots$ is a geometric sequence with common ratio $r > 0$, then $\ln(a_1), \ln(a_2), \ln(a_3), \dots$ forms an **arithmetic sequence** with common difference $d = \ln(r)$.

---

### Core Formula Reference Table

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Concept</th>
      <th class="border border-gray-400 px-2 py-1">Formula</th>
      <th class="border border-gray-400 px-2 py-1">Condition</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">$n^{\text{th}}$ Term</td><td class="border border-gray-400 px-2 py-1">$a_n = a_1 r^{n-1}$</td><td class="border border-gray-400 px-2 py-1">Explicit</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Finite Sum</td><td class="border border-gray-400 px-2 py-1">$S_n = a_1 \frac{1 - r^n}{1 - r}$</td><td class="border border-gray-400 px-2 py-1">$r \neq 1$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Infinite Sum</td><td class="border border-gray-400 px-2 py-1">$S_\infty = \frac{a_1}{1 - r}$</td><td class="border border-gray-400 px-2 py-1">$|r| < 1$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Geometric Mean</td><td class="border border-gray-400 px-2 py-1 font-bold text-indigo-600">$b = \sqrt{ac}$</td><td class="border border-gray-400 px-2 py-1">3 terms $a,b,c$</td></tr>
  </tbody>
</table>

---

### Solved Examples (EST2 Exam Style)

**Example 1 (Finding $n^{\text{th}}$ Term from Two Given Terms):**
In a geometric sequence, $a_3 = 12$ and $a_6 = 96$. Find the first term $a_1$ and the common ratio $r$.
*Solution:*
$$\frac{a_6}{a_3} = \frac{a_1 r^5}{a_1 r^2} = r^3 = \frac{96}{12} = 8 \implies r = 2$$
$$a_3 = a_1 r^2 \implies 12 = a_1 (2^2) = 4 a_1 \implies a_1 = 3$$

**Example 2 (Infinite Series Convergence):**
Find the sum of the infinite geometric series $18 + 12 + 8 + \frac{16}{3} + \dots$
*Solution:*
$$a_1 = 18, \quad r = \frac{12}{18} = \frac{2}{3}$$
Since $|r| = \frac{2}{3} < 1$, the infinite sum converges:
$$S_\infty = \frac{18}{1 - 2/3} = \frac{18}{1/3} = 54$$

**Example 3 (Bouncing Ball Total Distance):**
A ball is dropped from a height of $100\text{ m}$. On each rebound, it rises to $70\%$ of its previous height. Find the total vertical distance traveled by the ball.
*Solution:*
$$D = h_0 \cdot \frac{1 + r}{1 - r} = 100 \cdot \frac{1 + 0.7}{1 - 0.7} = 100 \cdot \frac{1.7}{0.3} = \frac{1700}{3} \approx 566.67\text{ meters}$$`
  },
  {
    id: StaticLessonIds.EST2Percentage,
    title: "EST2-percentage",
    description: "EST2 Math: Percentage Formulas, Single & Compound Growth/Decay, Multi-Year Intervals (Every E Years), Pie Charts, and Histograms",
    icon: "TrendingUp",
    course: "EST2",
    type: "lesson",
    studyNotes: String.raw`## EST2 Percentage: Complete Study Guide & Rules

Mastering percentage calculations is essential for high performance on the EST2 Math exam. This study guide covers core formulas, compound growth/decay models, multi-year intervals, and interpreting visual data representations including pie charts and histograms.

---

### Rule 1: Percentage Formula (Part to Whole Ratio)
The fundamental percentage formula measures what fraction a specific part represents out of a total set:

$$ P = \frac{\text{What I Want}}{\text{Total}} \times 100\% $$

**Example 1 (Pie Chart Sector Breakdown):**
A survey recorded student subject preferences across $115$ total students: $20$ English ($E$), $25$ Math, $40$ Science ($SC$), and $30$ French ($F$).

$$ P_{\text{Math}} = \frac{25}{20 + 25 + 40 + 30} \times 100\% = \frac{25}{115} \times 100\% \approx 21.74\% $$

---

### Rule 2: Single-Period Percentage Increase and Decrease
For a single transaction or single time period with percentage change $p$ (expressed as a decimal):

$$ \text{New} = \text{Old}(1 \pm p) $$

- **Percentage Increase / Growth:** Use $(1 + p)$
- **Percentage Decrease / Discount:** Use $(1 - p)$

**Example 2A (Single-Year Population Growth):**
The population of Cairo is currently $9\text{ million}$. If the population increases by $5\%$ after one year, what is the new population?

$$ \text{New} = \text{Old} \times (1 + p) = 9 \times (1 + 0.05) = 9 \times 1.05 = 9.45\text{ million} $$

**Example 2B (Discount / Price Reduction):**
A T-shirt has an original price of $\$500$. If a store offers a $20\%$ discount, find the new price.

$$ \text{New} = \text{Old} \times (1 - p) = 500 \times (1 - 0.20) = 500 \times 0.80 = \$400 $$

---

### Rule 3: Compound Percentage over $t$ Annual Periods
When a value increases or decreases by a fixed percentage $p$ every year over $t$ consecutive years:

$$ \text{New} = \text{Old}(1 \pm p)^t $$

**Example 3 (Annual Compound Population Growth):**
In $2020$, the population of Cairo was $9\text{ million}$. Assuming the population grows by $5\%$ every year, what will the population be in $2030$ ($t = 10\text{ years}$)?

$$ \text{New} = 9 \times (1 + 0.05)^{10} = 9 \times (1.05)^{10} \approx 14.66\text{ million} $$

---

### Rule 4: Compound Percentage over Multi-Year Intervals ($E$ Years)
If the percentage change $p$ applies once every $E$ years rather than every single year:

$$ \text{New} = \text{Old}(1 \pm p)^{\frac{t}{E}} $$

**Example 4A (Simple Annual Compound vs Interval):**
If Cairo has $10\text{ million}$ people and grows by $2\%$ every year, after $6\text{ years}$:

$$ \text{New} = 10 \times (1 + 0.02)^6 = 10 \times (1.02)^6 \approx 11.26\text{ million} $$

**Example 4B (Interval Compound Growth):**
The population of Cairo is $10\text{ million}$. It increases by $12\%$ every $8\text{ years}$ ($E = 8$). How many people will there be after $6\text{ years}$ ($t = 6$)?

$$ \text{New} = 10 \times (1 + 0.12)^{\frac{6}{8}} = 10 \times (1.12)^{0.75} \approx 10.88\text{ million} $$

---

### Summary Table of Core Percentage Rules

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Concept</th>
      <th class="border border-gray-400 px-2 py-1">Formula</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">Part to Whole Percentage</td><td class="border border-gray-400 px-2 py-1">$$P = \frac{\text{What I Want}}{\text{Total}} \times 100\%$$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Single Period Change</td><td class="border border-gray-400 px-2 py-1">$$\text{New} = \text{Old}(1 \pm p)$$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Compound Annual Growth/Decay</td><td class="border border-gray-400 px-2 py-1">$$\text{New} = \text{Old}(1 \pm p)^t$$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Interval Compounding (Every $E$ Years)</td><td class="border border-gray-400 px-2 py-1">$$\text{New} = \text{Old}(1 \pm p)^{\frac{t}{E}}$$</td></tr>
  </tbody>
</table>`
  },
  {
    id: StaticLessonIds.ACT2Percentage,
    title: "ACT2-percentage",
    description: "ACT2 Math: Percentage Formulas, Single & Compound Growth/Decay, Multi-Year Intervals (Every E Years), Pie Charts, and Histograms",
    icon: "TrendingUp",
    course: "ACT2",
    type: "lesson",
    studyNotes: String.raw`## ACT2 Percentage: Complete Study Guide & Rules

Mastering percentage calculations is essential for high performance on the ACT2 Math exam. This study guide covers core formulas, compound growth/decay models, multi-year intervals, and interpreting visual data representations including pie charts and histograms.

---

### Rule 1: Percentage Formula (Part to Whole Ratio)
The fundamental percentage formula measures what fraction a specific part represents out of a total set:

$$ P = \frac{\text{What I Want}}{\text{Total}} \times 100\% $$

**Example 1 (Pie Chart Sector Breakdown):**
A survey recorded student subject preferences across $115$ total students: $20$ English ($E$), $25$ Math, $40$ Science ($SC$), and $30$ French ($F$).

$$ P_{\text{Math}} = \frac{25}{20 + 25 + 40 + 30} \times 100\% = \frac{25}{115} \times 100\% \approx 21.74\% $$

---

### Rule 2: Single-Period Percentage Increase and Decrease
For a single transaction or single time period with percentage change $p$ (expressed as a decimal):

$$ \text{New} = \text{Old}(1 \pm p) $$

- **Percentage Increase / Growth:** Use $(1 + p)$
- **Percentage Decrease / Discount:** Use $(1 - p)$

**Example 2A (Single-Year Population Growth):**
The population of Cairo is currently $9\text{ million}$. If the population increases by $5\%$ after one year, what is the new population?

$$ \text{New} = \text{Old} \times (1 + p) = 9 \times (1 + 0.05) = 9 \times 1.05 = 9.45\text{ million} $$

**Example 2B (Discount / Price Reduction):**
A T-shirt has an original price of $\$500$. If a store offers a $20\%$ discount, find the new price.

$$ \text{New} = \text{Old} \times (1 - p) = 500 \times (1 - 0.20) = 500 \times 0.80 = \$400 $$

---

### Rule 3: Compound Percentage over $t$ Annual Periods
When a value increases or decreases by a fixed percentage $p$ every year over $t$ consecutive years:

$$ \text{New} = \text{Old}(1 \pm p)^t $$

**Example 3 (Annual Compound Population Growth):**
In $2020$, the population of Cairo was $9\text{ million}$. Assuming the population grows by $5\%$ every year, what will the population be in $2030$ ($t = 10\text{ years}$)?

$$ \text{New} = 9 \times (1 + 0.05)^{10} = 9 \times (1.05)^{10} \approx 14.66\text{ million} $$

---

### Rule 4: Compound Percentage over Multi-Year Intervals ($E$ Years)
If the percentage change $p$ applies once every $E$ years rather than every single year:

$$ \text{New} = \text{Old}(1 \pm p)^{\frac{t}{E}} $$

**Example 4A (Simple Annual Compound vs Interval):**
If Cairo has $10\text{ million}$ people and grows by $2\%$ every year, after $6\text{ years}$:

$$ \text{New} = 10 \times (1 + 0.02)^6 = 10 \times (1.02)^6 \approx 11.26\text{ million} $$

**Example 4B (Interval Compound Growth):**
The population of Cairo is $10\text{ million}$. It increases by $12\%$ every $8\text{ years}$ ($E = 8$). How many people will there be after $6\text{ years}$ ($t = 6$)?

$$ \text{New} = 10 \times (1 + 0.12)^{\frac{6}{8}} = 10 \times (1.12)^{0.75} \approx 10.88\text{ million} $$

---

### Summary Table of Core Percentage Rules

<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Concept</th>
      <th class="border border-gray-400 px-2 py-1">Formula</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">Part to Whole Percentage</td><td class="border border-gray-400 px-2 py-1">$$P = \frac{\text{What I Want}}{\text{Total}} \times 100\%$$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Single Period Change</td><td class="border border-gray-400 px-2 py-1">$$\text{New} = \text{Old}(1 \pm p)$$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Compound Annual Growth/Decay</td><td class="border border-gray-400 px-2 py-1">$$\text{New} = \text{Old}(1 \pm p)^t$$</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">Interval Compounding (Every $E$ Years)</td><td class="border border-gray-400 px-2 py-1">$$\text{New} = \text{Old}(1 \pm p)^{\frac{t}{E}}$$</td></tr>
  </tbody>
</table>`
  },
  
  {
    id: "est1_2022_march_exam",
    title: "EST1 - 2022 - March",
    description: "EST1 Official Exam - March 2022",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: `### EST1 March 2022 Exam Notes\nThis is a placeholder for the March 2022 exam study guide. Add explanations here as needed.`
  },
  {
    id: "est1_2022_june_exam",
    title: "EST1 - 2022 - June",
    description: "EST1 Official Exam - June 2022",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: `### EST1 June 2022 Exam Notes\nThis is a placeholder for the June 2022 exam study guide. Add explanations here as needed.`
  },
  {
    id: StaticLessonIds.SATEx1,
    title: "(1-SAT-2025-Nov-mA)",
    description: "SAT Practice Exam - November 2025 Module A",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**Sat-2025-Nov-mA Comprehensive Review**

This module focuses on **Advanced Algebra**, **Geometry**, and **Data Analysis**. Below are the key formulas and concepts.

1. **Linear Equations & Systems**
**Rule:**
- **Infinitely Many Solutions**: Lines are identical (Same slope $m$, Same intercept $b$).
- **No Solution**: Lines are parallel (Same slope $m$, Different intercept $b$).

**Example:**
Given the system:
$3x + 2y = 10$
$9x + 6y = k$
For infinitely many solutions, multiply the first by 3: $9x + 6y = 30$.
Therefore, $k = 30$.

2. **Geometry: Angles & Parallel Lines**
**Rule:** When a transversal intersects parallel lines:
- **Alternate Interior Angles** are equal ($a = b$).
- **Consecutive Interior Angles** add up to $180^\\circ$ ($b + c = 180^\\circ$).

**Example:**
Line $L \\parallel M$. If one interior angle is $x=120^\\circ$ and the consecutive interior angle is $y$, then $x + y = 180^\\circ \\Rightarrow 120 + y = 180 \\Rightarrow y = 60^\\circ$.

3. **Exponential Growth & Decay**
**Formula:** $y = a(1 \\pm r)^t$
- $a$: Initial amount
- $r$: Rate (decimal)
- $(1+r)$: Growth Factor

**Example:**
A population of 200 squirrels increases by 120% every 4 years.
Initial ($a$) = 200
Rate ($r$) = 1.20
Growth Factor = $1 + 1.20 = 2.20$
Period ($t$) scaled by 4 years: Exponent is $t/4$.
**Solution:** $N = 200(2.20)^{t/4}$

4. **Quadratic Equations: Discriminant**
**Rule:** For $ax^2 + bx + c = 0$, Discriminant $D = b^2 - 4ac$.

**Example:**
Find $k$ if $x^2 + \\sqrt{k-3}x + 42 = 0$ has exactly one solution.
$b^2 - 4ac = 0 \\Rightarrow (\\sqrt{k-3})^2 - 4(1)(42) = 0$
$k - 3 - 168 = 0 \\Rightarrow k = 171$.

5. **Statistics: Box Plots**
**Rule:** A visual summary of data distribution.

**Example:**
If Min = 34 and Max = 49, then **Range** = $49 - 34 = 15$.`
  },
  {
    id: StaticLessonIds.SATDec_2025,
    title: "(3-SAT-2025-December)",
    description: "SAT Practice Exam - December 2025 Full",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "**Sat-2025-December**\n\nFull length practice including Module 1 and Module 2. Covers advanced function modeling, geometry systems, and statistical analysis."
  },
  {
    id: StaticLessonIds.SATDec_2025_FormC,
    title: "(27-sat2025decemberform C)",
    description: "SAT December 2025 Form C (Full Exam)",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT December 2025 Form C**

This exam focuses on:
*   **Advanced Circle Geometry**: Equations of circles, tangents, and radii.
*   **Non-Linear Systems**: Intersections of parabolas and lines.
*   **Exponential Models**: Interpreting growth/decay in real-world contexts.
*   **Rational Functions**: Simplifying and evaluating complex algebraic fractions.

**Study Tip:**
When dealing with systems having "no solution" or "infinite solutions", pay close attention to the slope-intercept form ($y=mx+b$). 
*   **Parallel lines ($m_1 = m_2, b_1 
eq b_2$)** $\\rightarrow$ No Solution.
*   **Identical lines ($m_1 = m_2, b_1 = b_2$)** $\\rightarrow$ Infinite Solutions.`
  },
  {
    id: StaticLessonIds.SATDec_2025_FormD,
    title: "(35-sat2025decform D)",
    description: "SAT December 2025 International Form D",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT December 2025 Form D Review**

This exam contains 44 questions covering:
*   **Linear & Quadratic Functions**: Interpretation of slope, intercept, and roots.
*   **Geometry**: Similarity, Trigonometry, and Volume.
*   **Exponential Models**: Growth and decay functions.
*   **Statistics**: Margin of error and histograms.

**Key Formulas:**
*   **Similar Triangles**: Corresponding sides are proportional.
*   **Cone Volume**: $V = \\frac{1}{3}\\pi r^2 h$.
*   **Discriminant**: $b^2 - 4ac$ determines the number of real solutions.`
  },
  {
    id: StaticLessonIds.SATMarch2025FormE,
    title: "sat-2025-March-form E",
    description: "SAT Practice Exam - March 2025 Form E",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT March 2025 Form E Review**

This exam contains 44 questions based on the structural style of recent SAT forms. Focuses on Algebra, Statistics, and Data Analysis.
`
  },
  {
    id: StaticLessonIds.SATMarch2025FormBB,
    title: "sat-2025-March-form BB",
    description: "SAT Practice Exam - March 2025 Form BB",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT March 2025 Form BB Review**

This exam contains 44 questions based on the structural style of recent SAT forms. Focuses on Algebra, Statistics, and Data Analysis.
`
  },
  {
    id: StaticLessonIds.SATMarch2025FormA,
    title: "sat-2025-March-form A",
    description: "SAT Practice Exam - March 2025 Form A",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT March 2025 Form A Review**

This exam contains 44 questions based on the structural style of recent SAT forms. Make sure you practice your pacing and focus on understanding core Algebra and Geometry concepts.
`
  },
  {
    id: StaticLessonIds.SATMarch2025FormANew1,
    title: "Sat-2025-March -form A-new1",
    description: "SAT Practice Exam - March 2025 Form A (New 1)",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**Sat-2025-March -form A-new1 Review**

This exam contains 22 questions reflecting the March 2025 DSAT Math Form A (New 1) specification.

**Key Topics Covered:**
* **Algebra:** Linear equations, slope, rate models, and linear systems.
* **Advanced Math:** Quadratic functions, vertex form, radical equations, and exponent properties.
* **Problem Solving & Data Analysis:** Ratios, double percentages, frequency tables, and revenue line graphs.
* **Geometry & Trigonometry:** Cylinders, circle equations, and right-triangle trigonometric identities.
`
  },
  {
    id: StaticLessonIds.SATMarch2025FormB,
    title: "sat-2025-march-form B",
    description: "SAT Practice Exam - March 2025 Form B",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT March 2025 Form B Review**

This exam contains 22 questions extracted from the March 2025 International Form B PDF (Module 1).

**Key Topics Covered:**
*   **Algebra:** Linear equations, inequalities, and systems.
*   **Advanced Math:** Quadratics, polynomials, and non-linear functions.
*   **Problem Solving:** Ratios, rates, percentages, and data analysis.
*   **Geometry:** Area, volume, similarity, and angles.

**Formulas & Concepts:**
*   **Similar Triangles:** Corresponding angles are equal, sides are proportional.
*   **Quadratic Formula:** $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.
*   **Exponential Growth/Decay:** $y = a(1 \\pm r)^t$.`
  },
  {
    id: StaticLessonIds.SATMarch2025FormC,
    title: "sat-2025-march-form C",
    description: "SAT Practice Exam - March 2025 Form C",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT March 2025 Form C Review**

This exam contains questions extracted from the March 2025 International Form C PDF (Modules 1 and 2).

**Key Topics Covered:**
*   **Algebra:** Linear equations, inequalities, and systems.
*   **Advanced Math:** Quadratics, polynomials, and non-linear functions.
*   **Problem Solving:** Ratios, rates, percentages, and data analysis.
*   **Geometry:** Area, volume, similarity, and angles.

**Formulas & Concepts:**
*   **Similar Triangles:** Corresponding angles are equal, sides are proportional.
*   **Quadratic Formula:** $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.
*   **Exponential Growth/Decay:** $y = a(1 \\pm r)^t$.`
  },
  {
    id: StaticLessonIds.SATMarch2025FormD,
    title: "sat-2025-march-form D",
    description: "SAT Practice Exam - March 2025 Form D",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT March 2025 Form D Review**

This exam contains questions extracted from the March 2025 International Form D PDF.

**Key Topics Covered:**
*   **Algebra:** Linear equations, inequalities, and systems.
*   **Advanced Math:** Quadratics, polynomials, and non-linear functions.
*   **Problem Solving:** Ratios, rates, percentages, and data analysis.
*   **Geometry:** Area, volume, similarity, and angles.

**Formulas & Concepts:**
*   **Similar Triangles:** Corresponding angles are equal, sides are proportional.
*   **Quadratic Formula:** $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.
*   **Exponential Growth/Decay:** $y = a(1 \\pm r)^t$.`
  },
  {
    id: StaticLessonIds.SATEx3,
    title: "(3-SAT-2025-Nov-mC)",
    description: "SAT Practice Exam - November 2025 Module C",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "**Sat-2025-Nov-mC**\n\nFinal module focusing on high-difficulty questions, including advanced quadratics, exponential models, and 3D geometry."
  },
  {
    id: StaticLessonIds.SATNov1_2025_FormA,
    title: "sat-2025-nov1-form A",
    description: "SAT Practice Exam - November 2025 Form A",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "**SAT Nov 1 2025 Form A Review**\n\nThis exam covers a broad range of SAT Math topics including:\n\n*   **Algebra:** Linear equations, inequalities, and systems.\n*   **Advanced Math:** Quadratics, polynomials, and non-linear functions.\n*   **Problem Solving:** Ratios, rates, percentages, and data analysis.\n*   **Geometry:** Area, volume, angles, and trigonometry."
  },
  {
    id: StaticLessonIds.SATNov1_2025_ExB,
    title: "sat-2025-Nov1-ex B",
    description: "SAT Practice Exam - November 2025 Exam B (Math Only)",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "**SAT Nov 1 2025 Exam B Review (Math Only)**\n\nThis exam contains 44 math questions extracted from the November 2025 Exam B PDF. It covers:\n\n*   **Algebra:** Linear equations, inequalities, and systems.\n*   **Advanced Math:** Quadratics, polynomials, and non-linear functions.\n*   **Problem Solving:** Ratios, rates, percentages, and data analysis.\n*   **Geometry:** Area, volume, circles, and trigonometry."
  },
  {
    id: StaticLessonIds.SATNov1_2025_FormC,
    title: "sat-2025-nov1-form C",
    description: "SAT Practice Exam - November 2025 Form C",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "**SAT Nov 1 2025 Form C Review**\n\nThis exam covers a broad range of SAT Math topics including:\n\n*   **Algebra:** Linear equations, inequalities, and systems.\n*   **Advanced Math:** Quadratics, polynomials, and non-linear functions.\n*   **Problem Solving:** Ratios, rates, percentages, and data analysis.\n*   **Geometry:** Area, volume, angles, and trigonometry."
  },
  {
    id: StaticLessonIds.SATNov2024FormA,
    title: "sat-2024-Nov-form A",
    description: "SAT Practice Exam - November 2024 Form A",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "**SAT Nov 2024 Form A Review**\n\nThis exam contains 44 questions reflecting the structure and core topics of recent DSAT exams. Practice pacing and focus on core Algebra and Geometry concepts."
  },
  {
    id: StaticLessonIds.SATEx4,
    title: "(4-SAT Practice Exam 4)",
    description: "SAT Practice Exam 4",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "**sat-ex4**\n\nComprehensive practice for SAT Math sections."
  },
  {
    id: StaticLessonIds.SATEx5,
    title: "(5-SAT Practice Exam 5)",
    description: "Full Exam - November 15, 2025",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "**SAT Practice 5 Review**\n\nThis exam covers advanced algebra, geometry, and problem solving. Key topics include:\n\n*   **Circle Equations:** $(x-h)^2 + (y-k)^2 = r^2$\n*   **Systems of Equations:** Conditions for no solution vs infinite solutions.\n*   **Flux Density:** Applications of rates and area.\n*   **Quadratic Models:** Finding minimums and intercepts."
  },
  {
    id: StaticLessonIds.SATEx6,
    title: "(6-SAT Practice Exam 6)",
    description: "SAT Practice Exam 6",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "**sat-ex6**\n\nData analysis and problem solving scenarios."
  },
  {
    id: StaticLessonIds.SATEx7,
    title: "(7-SAT Practice Exam 7)",
    description: "SAT Practice Exam 7",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "**sat-ex7**\n\nGeometry and complex numbers review."
  },
  {
    id: StaticLessonIds.SATEx8,
    title: "(8-SAT Practice Exam 8)",
    description: "SAT Practice Exam 8",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "**sat-ex8**\n\nFull syllabus practice exam."
  },
  {
    id: StaticLessonIds.SATEx9,
    title: "(9-SAT Practice Exam 9)",
    description: "SAT Practice Exam 9",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "**sat-ex9**\n\nTimed simulation practice."
  },
  {
    id: StaticLessonIds.SATEx10,
    title: "(10-SAT Practice Exam 10)",
    description: "SAT Practice Exam 10",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "**sat-ex10**\n\nFinal review and assessment."
  },
  {
    id: StaticLessonIds.SATScatterPlot,
    title: "(11-SAT Scatter Plot)",
    description: "Mastering Data Analysis & Trends",
    icon: "Activity",
    course: "DSAT",
    type: "lesson",
    studyNotes: `**SAT Scatter Plots Masterclass**

Scatter plots are a staple of the SAT Data Analysis domain. They represent the relationship between two quantitative variables.

**1. Types of Association**
- **Positive Correlation:** As $x$ increases, $y$ tends to increase.
- **Negative Correlation:** As $x$ increases, $y$ tends to decrease.
- **No Correlation:** No apparent pattern between $x$ and $y$.

**2. Line of Best Fit (Trend Line)**
- A straight line that best represents the data.
- **Equation:** $y = mx + b$
- **Slope ($m$):** The average rate of change. For example, "an increase of 1 unit in $x$ leads to an increase of $m$ units in $y$".
- **Y-intercept ($b$):** The predicted value of $y$ when $x = 0$.

**3. Residuals**
- **Residual = Actual $y$ - Predicted $y$**
- A positive residual means the data point is **above** the line.
- A negative residual means the data point is **below** the line.

**4. Interpolation vs. Extrapolation**
- **Interpolation:** Predicting values inside the range of data points.
- **Extrapolation:** Predicting values outside the range of data points.

**5. Outliers**
- Data points that deviate significantly from the overall pattern.
- Outliers can skew the slope and correlation coefficient.

**Tip:** Always pay attention to the labels and scales of the axes!`
  },
  {
    id: StaticLessonIds.SATSolvingEquationsWordProblems,
    title: "solving equations word problems",
    description: "DSAT Solving Equations Word Problems",
    icon: "Sigma",
    course: "DSAT",
    type: "lesson",
    studyNotes: "**DSAT Solving Equations Word Problems**\n\nThis lesson focuses on interpreting word problems and translating them into equations. Key skills:\n\n*   **Identifying Variables:** What represents the unknown?\n*   **Translating English to Math:** Recognizing \"sum\", \"difference\", \"product\", \"quotient\".\n*   **Setting up Equations:** Creating equations based on the problem description.\n*   **Solving Equations:** Solving the equations to find the unknown."
  },
  {
    id: StaticLessonIds.SATPercentage,
    title: "sat-percentage",
    description: "DSAT Percentage",
    icon: "Percent",
    course: "DSAT",
    type: "lesson",
    studyNotes: "**DSAT Percentage**\n\nThis lesson covers percentage problems, including percent increase/decrease, finding the original amount, and interpreting percentage data."
  },
  {
    id: StaticLessonIds.SATInverseFunction,
    title: "DSAT-Inverse Function",
    description: "Finding Inverse Functions (Linear, Radical, Rational)",
    icon: "Sigma",
    course: "DSAT",
    type: "lesson",
    studyNotes: "**DSAT Inverse Functions Review**\n\n**1. Concept of Inverse Function**\nThe inverse function $f^{-1}(x)$ reverses the operation of $f(x)$.\n- **Domain & Range:** Domain of $f$ = Range of $f^{-1}$. Range of $f$ = Domain of $f^{-1}$.\n- **Graph:** Reflection over the line $y = x$.\n\n**2. Finding the Inverse Algebraically**\n1. Replace $f(x)$ with $y$.\n2. Swap $x$ and $y$.\n3. Solve for $y$.\n4. Replace $y$ with $f^{-1}(x)$.\n\n**3. Examples by Type**\n\n*   **Linear:** $f(x) = 2x + 5 \\rightarrow x = 2y + 5 \\rightarrow y = \\frac{x-5}{2}$.\n*   **Radical:** $f(x) = \\sqrt{x+2} \\rightarrow x = \\sqrt{y+2} \\rightarrow x^2 = y+2 \\rightarrow y = x^2 - 2$ (for $x \\ge 0$).\n*   **Rational:** $f(x) = \\frac{x}{x-1} \\rightarrow x = \\frac{y}{y-1} \\rightarrow xy - x = y \\rightarrow y(x-1) = x \\rightarrow y = \\frac{x}{x-1}$."
  },
  {
    id: StaticLessonIds.SATCircleMastery,
    title: "(34-circle )",
    description: "Complete Guide to Circles: Geometry & Equations",
    icon: "Circle",
    course: "GEOMETRY",
    type: "lesson",
    studyNotes: `**Circle Mastery: The Ultimate SAT Guide**

**1. Standard Equation of a Circle**
The equation of a circle with center $(h, k)$ and radius $r$ is:
$$(x - h)^2 + (y - k)^2 = r^2$$

**Example:** 
If the equation is $(x - 4)^2 + (y + 2)^2 = 36$:
- **Center:** $(4, -2)$ (Flip the signs!)
- **Radius:** $\\sqrt{36} = 6$

**2. General Form to Standard Form**
For the general equation $x^2 + y^2 + Dx + Ey + F = 0$, you can use the **Shortcut Formulas**:

*   **Center $(h, k)$**:
    $$(h, k) = (\\frac{D}{-2}, \\frac{E}{-2})$$

*   **Radius $r$**:
    $$r = \\sqrt{(\\frac{D}{-2})^2 + (\\frac{E}{-2})^2 - F}$$

**Solved Example:**
Find the center and radius of $x^2 + y^2 + 6x - 8y = 0$.

1.  **Identify coefficients:** $D=6$, $E=-8$, $F=0$.
2.  **Find Center using shortcut:**
    $$h = \\frac{6}{-2} = -3$$
    $$k = \\frac{-8}{-2} = 4$$
    Center is $(-3, 4)$.
3.  **Find Radius using shortcut:**
    $$r = \\sqrt{(-3)^2 + (4)^2 - 0}$$
    $$r = \\sqrt{9 + 16}$$
    $$r = \\sqrt{25} = 5$$

**3. Circumference and Area**
- **Circumference ($C$):** $C = 2\\pi r$ or $C = \\pi d$
- **Area ($A$):** $A = \\pi r^2$

**4. Arc Length and Sector Area**
- **Arc Length ($s$):** The distance along the curve.
  $$s = \\frac{\\theta}{360} \\times 2\\pi r$$ (Degrees)
  $$s = r\\theta$$ (Radians)
- **Sector Area ($A_{sec}$):** The area of the "slice".
  $$A_{sec} = \\frac{\\theta}{360} \\times \\pi r^2$$ (Degrees)
  $$A_{sec} = \\frac{1}{2}r^2\\theta$$ (Radians)

**5. Radians vs Degrees**
$$180^\\circ = \\pi \\text{ radians}$$
To convert Degrees $\\to$ Radians: Multiply by $\\frac{\\pi}{180}$.
To convert Radians $\\to$ Degrees: Multiply by $\\frac{180}{\\pi}$.`
  },
  {
    id: StaticLessonIds.SATNov1_2025,
    title: "(SAT-2025-nov1)",
    description: "New Exam - Extracted from PDF (Nov 2025)",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT November 2025 Exam**

This exam contains 44 questions extracted from the November 2025 Practice PDF (Pages 55-98).

**Key Topics Covered:**
*   Advanced Algebra (Linear & Quadratic Equations)
*   Problem Solving & Data Analysis (Scatter Plots, Ratios, Rates)
*   Geometry & Trigonometry (Circles, Triangles, Lines)
*   Complex Functions

*Generated by AI Assistant based on uploaded materials.*`
  },
  {
    id: "act2_3d_exam1",
    title: "ACT2 Exam 1",
    description: "ACT Subject Test Math Level 1 - Test #1 (50 Questions)",
    icon: "Triangle",
    course: "ACT2",
    type: "exam",
    order: 1,
    examMinutes: 60,
    pdfUrl: "/pdfs/act2/ACT2-Exam-1.pdf",
    studyNotes: "**ACT Subject Test Math Level 1 - Test #1**\n\nComplete 50-question practice test covering algebra, geometry, functions, probability, and spatial reasoning. Download the printable PDF (questions + answer key) with the Download PDF button above."
  },
  {
    id: "act2_3d_exam2",
    title: "ACT2 Exam 2",
    description: "ACT Subject Test Math Level 1 - Test #2 (50 Questions)",
    icon: "Triangle",
    course: "ACT2",
    type: "exam",
    order: 2,
    examMinutes: 60,
    pdfUrl: "/pdfs/act2/ACT2-Exam-2.pdf",
    studyNotes: "**ACT Subject Test Math Level 1 - Test #2**\n\nComplete 50-question practice test covering linear systems, similarity, geometric means, probability, functions, logic, and coordinate geometry. Download the printable PDF (questions + answer key) with the Download PDF button above."
  },
  {
    id: "act2_3d_exam3",
    title: "ACT2 Exam 3",
    description: "ACT Subject Test Math Level 1 - Test #3 (50 Questions)",
    icon: "Triangle",
    course: "ACT2",
    type: "exam",
    order: 3,
    examMinutes: 60,
    pdfUrl: "/pdfs/act2/ACT2-Exam-3.pdf",
    studyNotes: "**ACT Subject Test Math Level 1 - Test #3**\n\nComplete 50-question practice test covering intersecting chords, prisms, geometry, algebra, inequalities, and functions. Download the printable PDF (questions + answer key) with the Download PDF button above."
  },
  {
    id: "act2_3d_exam4",
    title: "ACT2 Exam 4",
    description: "ACT Subject Test Math Level 1 - Test #4 (50 Questions)",
    icon: "Triangle",
    course: "ACT2",
    type: "exam",
    order: 4,
    examMinutes: 60,
    pdfUrl: "/pdfs/act2/ACT2-Exam-4.pdf",
    studyNotes: "**ACT Subject Test Math Level 1 - Test #4**\n\nComplete 50-question practice test covering area, lines and slopes, factoring, similarity, statistics, circles, and solids. Download the printable PDF (questions + answer key) with the Download PDF button above."
  },
  {
    id: "act2_3d_exam5",
    title: "ACT2 Exam 5",
    description: "ACT Subject Test Math Level 1 - Test #5 (50 Questions)",
    icon: "Triangle",
    course: "ACT2",
    type: "exam",
    order: 5,
    examMinutes: 60,
    pdfUrl: "/pdfs/act2/ACT2-Exam-5.pdf",
    studyNotes: "**ACT Subject Test Math Level 1 - Test #5**\n\nComplete 50-question practice test covering polygons, circles, right-triangle trigonometry, factoring, radicals, and inequalities. Download the printable PDF (questions + answer key) with the Download PDF button above."
  },
  {
    id: "act2_3d_exam6",
    title: "ACT2 Exam 6",
    description: "ACT Subject Test Math Level 1 - Test #6 (50 Questions)",
    icon: "Triangle",
    course: "ACT2",
    type: "exam",
    order: 6,
    examMinutes: 60,
    pdfUrl: "/pdfs/act2/ACT2-Exam-6.pdf",
    studyNotes: "**ACT Subject Test Math Level 1 - Test #6**\n\nComplete 50-question practice test covering radicals, absolute value, percents, word problems, complex numbers, and solids. Download the printable PDF (questions + answer key) with the Download PDF button above."
  },
  {
    id: "act2_3d_exam7",
    title: "ACT2 Exam 7",
    description: "ACT Subject Test Math Level 1 - Test #7 (50 Questions)",
    icon: "Triangle",
    course: "ACT2",
    type: "exam",
    order: 7,
    examMinutes: 60,
    pdfUrl: "/pdfs/act2/ACT2-Exam-7.pdf",
    studyNotes: "**ACT Subject Test Math Level 1 - Test #7**\n\nComplete 50-question practice test covering statistics, nets, circles, systems, logic, conditional statements, and graphs of functions. Download the printable PDF (questions + answer key) with the Download PDF button above."
  },
  {
    id: "act2_3d_exam8",
    title: "ACT2 Exam 8",
    description: "ACT Subject Test Math Level 1 - Test #8 (50 Questions)",
    icon: "Triangle",
    course: "ACT2",
    type: "exam",
    order: 8,
    examMinutes: 60,
    pdfUrl: "/pdfs/act2/ACT2-Exam-8.pdf",
    studyNotes: "**ACT Subject Test Math Level 1 - Test #8**\n\nComplete 50-question practice test covering geometry, 3D solids, circle tangents, logic, functions, coordinate geometry, and probability. Download the printable PDF (questions + answer key) with the Download PDF button above."
  },
  {
    id: StaticLessonIds.EST1Ex1,
    title: "EST1-EXAM 1",
    description: "EST1 Full Practice Exam 1",
    icon: "Sigma",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 Exam 1 Review**\n\n(Questions pending)"
  },
  {
    id: StaticLessonIds.EST12025May,
    title: "ESt1-2025-May",
    description: "EST1 2025 May Exam from PDF",
    icon: "Sigma",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2025 May Exam**\n\nGenerated from the May 2025 PDF."
  },
  {
    id: StaticLessonIds.EST1Ex2,
    title: "EST1-EXAM2",
    description: "EST1 Full Practice Exam 2",
    icon: "Sigma",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 Exam 2 Review**\n\n(Questions pending)"
  },
  {
    id: StaticLessonIds.EST1Ex3,
    title: "EST1-EXAM3",
    description: "EST1 Full Practice Exam 3",
    icon: "Sigma",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 Exam 3 Review**\n\n(Questions pending)"
  },
  {
    id: StaticLessonIds.EST12020M10,
    title: "EST1-2020-M10-EXAM",
    description: "EST1 October 2020 Calculator Section",
    icon: "Sigma",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 October 2020 Exam Review**\n\nThis exam covers the Calculator section of the EST1 October 2020 test. It includes topics such as algebra, geometry, statistics, and functions."
  },
  {
    id: StaticLessonIds.EST1Inequality,
    title: "EST1-inequality",
    description: "EST1 Inequality Practice Questions",
    icon: "Sigma",
    course: "EST1",
    type: "lesson",
    recordLink: "https://youtu.be/CaKTIqHsUMQ",
    studyNotes: `# EST1 - Inequality: Comprehensive Study Guide

### Official Recorded Lecture
- **Watch Recorded Session:** [Watch on YouTube](https://youtu.be/CaKTIqHsUMQ)

<a href="https://youtu.be/CaKTIqHsUMQ" target="_blank" class="flex items-center p-4 bg-red-50 text-red-700 rounded-lg border border-red-100 hover:bg-red-100 transition-colors my-4 font-bold not-prose no-underline"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube w-6 h-6 mr-3"><path d="M2.5 17a24.12 24.12 0 0 1 0-3.235.199.199 0 0 1 .233-.197c1.697.278 3.396.417 5.093.417 1.697 0 3.396-.14 5.093-.417a.2.2 0 0 1 .233.197c.07.603.116 1.68.04 3.235-.113 2.308-1.574 3.522-3.15 3.522-1.575 0-3.036-1.214-3.149-3.522"/><path d="M16 8a5 5 0 0 1 5 5c0 2.761-2.239 5-5 5"/><path d="M4 8a5 5 0 0 0-5 5c0 2.761 2.239 5 5 5"/><line x1="12" x2="12" y1="2" y2="12"/></svg>Watch Recorded Lecture on YouTube</a>

---

## 1. Linear Inequalities
Linear inequalities follow identical balancing steps to linear equations, with one crucial exception:
$$\\text{When multiplying or dividing both sides by a negative number, the inequality sign must be reversed.}$$
- If $ax < b$ and $a < 0$, then $x > \\frac{b}{a}$.

---

## 2. Compound Inequalities
Compound inequalities state two inequalities connected by "and" or "or":
- **Conjunction (AND):** $a < x < b$ means $x > a$ AND $x < b$ (the overlap/intersection of solutions).
- **Disjunction (OR):** $x < a$ OR $x > b$ (the union of non-overlapping solution intervals).

---

## 3. Absolute Value Inequalities
For any real positive constant $c > 0$:
- **Less Than (Bounded interval):**
  $$|ax + b| < c \\iff -c < ax + b < c$$
- **Greater Than (Disjoint intervals):**
  $$|ax + b| > c \\iff ax + b > c \\quad \\text{or} \\quad ax + b < -c$$

---

## 4. Systems of Inequalities
A solution to a system of inequalities is any coordinate pair $(x, y)$ that satisfies all inequalities in the system simultaneously.

---

### Solved Examples (EST1 Style)

**Example:** Given $2x - 7 < 5$ and $\\frac{3x}{2} - 2 > \\frac{19}{4}$, what is the only integer $x$ that satisfies both inequalities?
*Solution:*
1. Solve the first inequality:
   $$2x - 7 < 5 \\implies 2x < 12 \\implies x < 6$$
2. Solve the second inequality:
   $$\\frac{3x}{2} - 2 > \\frac{19}{4} \\implies \\frac{3x}{2} > \\frac{19}{4} + \\frac{8}{4} = \\frac{27}{4}$$
   Multiply both sides by $2$:
   $$3x > \\frac{27}{2} \\implies x > \\frac{9}{2} = 4.5$$
Combining both inequalities gives $4.5 < x < 6$. The only integer satisfying this range is $x = 5$.

**Example:** If $|-2b - 3| \\le 7$, how many possible integer values of $b$ are there?
*Solution:*
Expand the absolute value inequality:
$$-7 \\le -2b - 3 \\le 7$$
Add $3$ across all parts:
$$-4 \\le -2b \\le 10$$
Divide all parts by $-2$ and reverse the inequality symbols:
$$2 \\ge b \\ge -5 \\iff -5 \\le b \\le 2$$
The integer values are $-5, -4, -3, -2, -1, 0, 1, 2$, which gives a total of $8$ integers.`
  },
  {
    id: StaticLessonIds.EST1Ratio,
    title: "EST1-Ratio",
    description: "EST1 Ratio & Proportion Practice",
    icon: "Sigma",
    course: "EST1",
    type: "lesson",
    studyNotes: "**EST1 Ratio & Proportion Review**\n\nThis lesson covers ratio, proportion, and percentage problems from various EST1 exams. Key concepts include:\n\n*   **Direct Proportion:** $y = kx$\n*   **Inverse Proportion:** $y = k/x$\n*   **Ratios:** Part-to-Part and Part-to-Whole relationships.\n*   **Percentages:** Growth, decay, and profit calculations."
  },
  {
    id: StaticLessonIds.EST1Exponent,
    title: "EST1-Exponent",
    description: "EST1 Exponents & Radicals Practice",
    icon: "Sigma",
    course: "EST1",
    type: "lesson",
    studyNotes: "**EST1 Exponents & Radicals Review**\n\nThis lesson covers properties of exponents and radicals, including:\n\n*   **Product Rule:** $a^m \\cdot a^n = a^{m+n}$\n*   **Quotient Rule:** $\\frac{a^m}{a^n} = a^{m-n}$\n*   **Power Rule:** $(a^m)^n = a^{mn}$\n*   **Rational Exponents:** $\\sqrt[n]{a^m} = a^{m/n}$\n*   **Solving Exponential Equations:** Equating bases ($a^x = a^y \\Rightarrow x=y$) or using logarithms."
  },
  {
    id: StaticLessonIds.EST1Polynomial,
    title: "EST1-polynomial",
    description: "EST1 Polynomials & Algebra Practice",
    icon: "Sigma",
    course: "EST1",
    type: "lesson",
    studyNotes: "**EST1 Polynomials Review**\n\nThis lesson covers operations with polynomials, factoring, and algebraic expressions. Key concepts:\n\n*   **Operations:** Adding, subtracting, multiplying polynomials.\n*   **Factoring:** Difference of squares $a^2-b^2=(a-b)(a+b)$, Perfect squares.\n*   **Rational Expressions:** Simplifying and operations.\n*   **Radicals:** Simplifying expressions with roots."
  },
  {
    id: StaticLessonIds.EST1LinearEquationPart1,
    title: "solving equations part1",
    description: "EST1 Linear Equations & Functions Practice",
    icon: "Sigma",
    course: "EST1",
    type: "lesson",
    studyNotes: "**EST1 Linear Equations Review**\n\nThis lesson covers linear equations, slopes, and functions.\n\n*   **Slope-Intercept Form:** $y = mx + b$\n*   **Slope Formula:** $m = \\frac{y_2 - y_1}{x_2 - x_1}$\n*   **Standard Form:** $Ax + By = C$\n*   **Functions:** Evaluating $f(x)$ and interpreting graphs."
  },
  {
    id: StaticLessonIds.EST1LinearEquationWord,
    title: "EST1-linear -equation word",
    description: "EST1 Linear Equation Word Problems",
    icon: "Sigma",
    course: "EST1",
    type: "lesson",
    studyNotes: "**EST1 Linear Equation Word Problems**\n\nThis lesson focuses on interpreting word problems and translating them into linear equations. Key skills:\n\n*   **Identifying Variables:** What represents $x$ and $y$?\n*   **Rates of Change:** Recognizing \"per\", \"each\", \"every\" as slope.\n*   **Initial Values:** Recognizing starting amounts or fixed costs as the y-intercept.\n*   **Systems:** Setting up two equations for two unknowns."
  },
  {
    id: StaticLessonIds.EST1SolvingEquationsWordProblems,
    title: "solving equations word problems",
    description: "EST1 Solving Equations Word Problems",
    icon: "Sigma",
    course: "EST1",
    type: "lesson",
    studyNotes: "**EST1 Solving Equations Word Problems**\n\nThis lesson focuses on interpreting word problems and translating them into equations. Key skills:\n\n*   **Identifying Variables:** What represents the unknown?\n*   **Translating English to Math:** Recognizing \"sum\", \"difference\", \"product\", \"quotient\".\n*   **Setting up Equations:** Creating equations based on the problem description.\n*   **Solving Equations:** Solving the equations to find the unknown."
  },
  {
    id: StaticLessonIds.EST1Percentage,
    title: "Est1-percentage",
    description: "EST1 Percentage",
    icon: "Percent",
    course: "EST1",
    type: "lesson",
    studyNotes: "**EST1 Percentage**\n\nThis lesson covers percentage problems, including percent increase/decrease, finding the original amount, and interpreting percentage data."
  },
  {
    id: StaticLessonIds.EST1StatisticsPart1New,
    title: "EST1-statistics part1",
    description: "EST1 - Statistics Part 1: Arithmetic Mean, Median, Mode, Range, Standard Deviation & Outlier Analysis",
    icon: "TrendingUp",
    course: "EST1",
    type: "lesson",
    studyNotes: `# EST1 - Statistics Part 1: Comprehensive Study Guide
**Instructor:** Eng. Rabaa Farrag

---

### Official Video Explanations & Recorded Lectures
- **Lecture 1:** [Watch on YouTube](https://youtu.be/BPBoYIQu1QA)
- **Lecture 2:** [Watch on YouTube](https://youtu.be/GBUoVNzUqas)
- **Lecture 3:** [Watch on YouTube](https://youtu.be/Iv8o7pZ9tHU)
- **Lecture 4:** [Watch on YouTube](https://youtu.be/ZsXitmhb1_U)
- **Problem Solving (Q29 Walkthrough):** [Watch on YouTube](https://youtu.be/FGs0ruP-OJ8)
- **Problem Solving (Q37 Walkthrough):** [Watch on YouTube](https://youtu.be/qSonXXcAGis)

---

## 1. Measures of Central Tendency

### A. Arithmetic Mean (Average)
The arithmetic mean is the sum of all values divided by the total number of observations $n$:
$$\\text{Mean} = \\bar{x} = \\frac{\\sum_{i=1}^n x_i}{n}$$

**Key Properties & Problem-Solving Strategies:**
- **Finding Missing Values:** Always find the total sum first:
  $$\\text{Total Sum} = \\text{Mean} \\times n$$
- **Combining Groups (Weighted Mean):** If group $1$ has $n_1$ items with mean $\\bar{x}_1$ and group $2$ has $n_2$ items with mean $\\bar{x}_2$:
  $$\\bar{x}_{\\text{combined}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$$

### B. Median
The median is the middle value when all numbers are arranged in ascending (or descending) order.
- **If $n$ is odd:** The median is the single value at position $\\frac{n + 1}{2}$.
- **If $n$ is even:** The median is the arithmetic mean of the two middle values at positions $\\frac{n}{2}$ and $\\frac{n}{2} + 1$:
  $$\\text{Median} = \\frac{x_{(n/2)} + x_{(n/2 + 1)}}{2}$$

### C. Mode
The mode is the data value(s) that appear with the greatest frequency.
- A data set can have one mode (unimodal), two modes (bimodal), multiple modes (multimodal), or no mode (if all values appear with equal frequency).

---

## 2. Measures of Spread & Variability

### A. Range
The simplest measure of dispersion:
$$\\text{Range} = \\text{Maximum Value} - \\text{Minimum Value}$$

### B. Interquartile Range (IQR)
The difference between the third quartile ($75^{\\text{th}}$ percentile) and first quartile ($25^{\\text{th}}$ percentile):
$$\\text{IQR} = Q_3 - Q_1$$
- The IQR measures the spread of the middle $50\\%$ of the data and is resistant to outliers.

### C. Standard Deviation ($\\sigma$ or $s$)
Measures the average distance of the data points from their mean:
$$\\sigma = \\sqrt{\\frac{\\sum_{i=1}^n (x_i - \\mu)^2}{n}}$$
- **Consistency Rule:** A **smaller standard deviation** means data points are clustered closely around the mean $\\implies$ **higher consistency** / **more reliable**.
- A **larger standard deviation** means data points are widely spread out $\\implies$ **lower consistency**.

---

## 3. Transformations & Invariance of Statistics

### Adding or Subtracting a Constant $c$ ($y_i = x_i + c$)
When each value in a dataset is shifted by adding $c$:
- **Mean:** $\\bar{y} = \\bar{x} + c$
- **Median:** $\\text{Median}_{\\text{new}} = \\text{Median} + c$
- **Mode:** $\\text{Mode}_{\\text{new}} = \\text{Mode} + c$
- **Standard Deviation:** $\\sigma_{\\text{new}} = \\sigma$ (UNCHANGED!)
- **Range & IQR:** Unchanged!

### Multiplying by a Constant $k$ ($y_i = k \\cdot x_i$)
When each value is scaled by $k$:
- **Mean, Median, Mode:** Multiplied by $k$.
- **Standard Deviation, Range, IQR:** Multiplied by $|k|$.

---

## 4. Effect of Outliers & Skewness

- **Extreme Outliers:** Severely affect the **Mean**, **Range**, and **Standard Deviation**.
- **Resistant Statistics:** The **Median** and **Mode** are robust and resist drastic changes when an outlier is introduced.
- **Distribution Shapes:**
  - **Symmetric:** $\\text{Mean} \\approx \\text{Median}$
  - **Right-Skewed (Positive Skew):** $\\text{Mean} > \\text{Median}$ (tail extends to the right)
  - **Left-Skewed (Negative Skew):** $\\text{Mean} < \\text{Median}$ (tail extends to the left)

---

## 5. Solved Examples (EST1 Exam Style)

### Example 1: Finding an Unknown Member to Increase the Average
**Problem:** A student has test scores of $85, 86, 87,$ and $82$. What must the student score on the $5^{\\text{th}}$ test for the 5-test average to be exactly $3$ points higher than the average of the first $4$ tests?

**Solution:**
1. Find the 4-test total and average:
   $$\\text{Sum}_4 = 85 + 86 + 87 + 82 = 340$$
   $$\\text{Average}_4 = \\frac{340}{4} = 85$$
2. Desired 5-test average:
   $$\\text{Average}_5 = 85 + 3 = 88$$
3. Target 5-test sum:
   $$\\text{Sum}_5 = 5 \\times 88 = 440$$
4. Required $5^{\\text{th}}$ test score:
   $$\\text{Score}_5 = 440 - 340 = 100$$

### Example 2: Impact of Adding a Constant to Data
**Problem:** In a daycare, the mean age of children is $m$ and the standard deviation of their ages is $s$. What will be the mean and standard deviation of their ages $5$ years later?

**Solution:**
Every child grows older by exactly $5$ years ($x_{\\text{new}} = x + 5$).
- The mean increases by $5$: $\\text{Mean}_{\\text{new}} = m + 5$.
- Because every child's age shifts by the exact same amount, the spread of the data does not change at all. Thus, the standard deviation is invariant: $\\text{SD}_{\\text{new}} = s$.`
  },
  {
    id: StaticLessonIds.EST1StatisticsPart2,
    title: "est1-statistics part2",
    description: "EST1 Statistics Practice Questions Part 2",
    icon: "Activity",
    course: "EST1",
    type: "lesson",
    studyNotes: "**EST1 Statistics Part 2**\n\nThis lesson covers median, mode, mean calculations from frequency tables, bar charts, and data sets. Key topics include:\n\n*   **Interpreting Bar Charts**: Understanding when x-axis vs y-axis represents frequencies.\n*   **Standard Deviation**: Understanding how spread affects variance in dot plots.\n*   **Shift Operations**: How subtracting a constant impacts mean and standard deviation.\n*   **Discrete vs Continuous Variables**: Distinguishing between countable values and measured values."
  },
  {
    id: StaticLessonIds.DSATStatisticsPart2,
    title: "est1-statistics part2 (DSAT)",
    description: "DSAT Statistics Practice Questions Part 2",
    icon: "Activity",
    course: "DSAT",
    type: "lesson",
    studyNotes: "**DSAT Statistics Part 2**\n\nThis lesson covers median, mode, mean calculations from frequency tables, bar charts, and data sets. Key topics include:\n\n*   **Interpreting Bar Charts**: Understanding when x-axis vs y-axis represents frequencies.\n*   **Standard Deviation**: Understanding how spread affects variance in dot plots.\n*   **Shift Operations**: How subtracting a constant impacts mean and standard deviation.\n*   **Discrete vs Continuous Variables**: Distinguishing between countable values and measured values."
  },
  {
    id: StaticLessonIds.EST1InverseFunction,
    title: "EST1-Inverse Function",
    description: "Finding Inverse Functions (Linear, Radical, Quadratic, Rational)",
    icon: "Sigma",
    course: "EST1",
    type: "lesson",
    studyNotes: "**EST1 Inverse Functions Review**\n\n**1. Concept of Inverse Function**\nThe inverse function $f^{-1}(x)$ reverses the operation of $f(x)$.\n- **Domain & Range:** Domain of $f$ = Range of $f^{-1}$. Range of $f$ = Domain of $f^{-1}$.\n- **Graph:** Reflection over the line $y = x$.\n\n**2. Finding the Inverse Algebraically**\n1. Replace $f(x)$ with $y$.\n2. Swap $x$ and $y$.\n3. Solve for $y$.\n4. Replace $y$ with $f^{-1}(x)$.\n\n**3. Examples by Type**\n\n*   **Linear:** $f(x) = 2x + 5 \\rightarrow x = 2y + 5 \\rightarrow y = \\frac{x-5}{2}$.\n*   **Radical:** $f(x) = \\sqrt{x+2} \\rightarrow x = \\sqrt{y+2} \\rightarrow x^2 = y+2 \\rightarrow y = x^2 - 2$ (for $x \\ge 0$).\n*   **Rational:** $f(x) = \\frac{x}{x-1} \\rightarrow x = \\frac{y}{y-1} \\rightarrow xy - x = y \\rightarrow y(x-1) = x \\rightarrow y = \\frac{x}{x-1}$."
  },
  {
    id: StaticLessonIds.EST1Transformations,
    title: "EST1-Transformations",
    description: "Function Transformations & Vertex Form",
    icon: "Sigma",
    course: "EST1",
    type: "lesson",
    studyNotes: "**EST1 Transformations & Vertex Form Review**\n\n**1. Translations (Shifts)**\nGiven a function $y = f(x)$:\n*   **Vertical Shift:** $y = f(x) + k$ (Up $k$), $y = f(x) - k$ (Down $k$).\n*   **Horizontal Shift:** $y = f(x - h)$ (Right $h$), $y = f(x + h)$ (Left $h$).\n\n**2. Vertex Forms**\n*   **Quadratic:** $y = a(x - h)^2 + k$. Vertex is $(h, k)$.\n*   **Absolute Value:** $y = a|x - h| + k$. Vertex is $(h, k)$.\n*   **Radical:** $y = a\\sqrt{x - h} + k$. Starting point is $(h, k)$.\n\n**3. Examples**\n*   $y = (x - 3)^2 + 2$: Shifted Right 3, Up 2. Vertex $(3, 2)$.\n*   $y = |x + 4| - 1$: Shifted Left 4, Down 1. Vertex $(-4, -1)$."
  },
  {
    id: StaticLessonIds.EST1Variation,
    title: "variation (direct -inverse)",
    description: "EST1 Variation (Direct - Inverse) Practice",
    icon: "Sigma",
    course: "EST1",
    type: "lesson",
    studyNotes: `**EST1 Variation Review**

This lesson covers direct and inverse variation problems from various EST1 exams.

**Key Concepts:**
*   **Direct Variation:** $y = kx$ (As $x$ increases, $y$ increases proportionally).
*   **Inverse Variation:** $y = k/x$ or $xy = k$ (As $x$ increases, $y$ decreases proportionally).
*   **Work Rates:** If person A takes $a$ hours and person B takes $b$ hours, their combined rate is $1/a + 1/b = 1/t$.
*   **Speed, Distance, Time:** $D = S \\times T$.`
  },
  {
    id: StaticLessonIds.EST1QuadraticEquationsRootsPart1,
    title: "EST1-Quadratic Equations (roots) part1",
    description: "EST1 Quadratic Equations (roots) part1 Practice",
    icon: "Sigma",
    course: "EST1",
    type: "lesson",
    studyNotes: `**EST1 Quadratic Equations (roots) part1 Review**

This lesson covers quadratic equations and their roots. Key concepts:

*   **Standard Form:** $ax^2 + bx + c = 0$
    *   **Sum of Roots:** $-\\frac{b}{a}$
    *   **Product of Roots:** $\\frac{c}{a}$
    *   **Example:** For $2x^2 - 4x - 6 = 0$, sum $= -\\frac{-4}{2} = 2$, product $= \\frac{-6}{2} = -3$.
*   **Vertex Form:** $y = a(x - h)^2 + k$
    *   Vertex is at $(h, k)$.
    *   Axis of symmetry is $x = h$.
    *   **Example:** For $y = 3(x - 2)^2 + 5$, the vertex is $(2, 5)$.
*   **Factored Form (Brackets):** $y = a(x - r_1)(x - r_2)$
    *   Roots (x-intercepts) are at $x = r_1$ and $x = r_2$.
    *   **Example:** For $y = 2(x - 3)(x + 4)$, the roots are $x = 3$ and $x = -4$.
*   **Discriminant:** $\\Delta = b^2 - 4ac$
    *   $\\Delta > 0$: 2 distinct real roots
    *   $\\Delta = 0$: 1 real root (multiplicity 2)
    *   $\\Delta < 0$: 0 real roots (2 complex roots)`
  },
  {
    id: StaticLessonIds.EST1QuadraticEquationsVertexPart2,
    title: "EST1-Quadratic Equations (vertex) part2",
    description: "EST1 Quadratic Equations (vertex) part2 Practice",
    icon: "Sigma",
    course: "EST1",
    type: "lesson",
    studyNotes: `**EST1 Quadratic Equations (vertex) part2 Review**

This lesson covers quadratic equations with a focus on the vertex form and finding the maximum or minimum values. Key concepts:

*   **Vertex Form:** $y = a(x - h)^2 + k$
    *   Vertex is at $(h, k)$.
    *   Axis of symmetry is $x = h$.
    *   If $a > 0$, the parabola opens upward, and $k$ is the minimum value.
    *   If $a < 0$, the parabola opens downward, and $k$ is the maximum value.
*   **Standard Form to Vertex:** For $y = ax^2 + bx + c$, the x-coordinate of the vertex is $h = -\\frac{b}{2a}$.
    *   To find the y-coordinate (the max/min value), substitute $h$ back into the equation: $k = f(-\\frac{b}{2a})$.
*   **Factored Form to Vertex:** For $y = a(x - r_1)(x - r_2)$, the x-coordinate of the vertex is the midpoint of the roots: $h = \\frac{r_1 + r_2}{2}$.`
  },
  {
    id: StaticLessonIds.EST1NewExam,
    title: "EST1 New Exam",
    description: "EST I Math Exam - Uploaded PDF",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: `**EST I Math Exam**

This exam contains 58 questions generated from the uploaded PDF.

**Key Topics Covered:**
*   **Heart of Algebra:** Linear functions, systems of equations, and inequalities.
*   **Problem Solving and Data Analysis:** Ratios, proportions, percentages, probability, and scatterplots.
*   **Passport to Advanced Math:** Polynomials, quadratics, and non-linear functions.
*   **Additional Topics in Math:** Geometry, circles, and trigonometry.`
  },
  {
    id: StaticLessonIds.EST22026Jan,
    title: "Est2-2026-jan",
    description: "EST II Math Level 1 Exam - January 2026",
    icon: "Sigma",
    course: "EST2",
    type: "exam",
    studyNotes: `**EST II Math Level 1 Exam - January 2026 Review**

This exam covers a wide range of topics typical for the EST II Math Level 1 section.

**Key Topics Covered:**
*   **Algebra:** Equations, inequalities, functions, sequences, complex numbers.
*   **Geometry:** Coordinate geometry, plane geometry, solid geometry, trigonometry.
*   **Data Analysis:** Statistics, probability.
`
  },
  {
    id: StaticLessonIds.EST2Exam6,
    title: "EST2-Exam-6",
    description: "EST II Math Level 1 Practice Exam 6 (40 Questions)",
    icon: "Sigma",
    course: "EST2",
    type: "exam",
    studyNotes: `**EST2-Exam-6 Review**

This exam contains 40 multiple-choice questions covering core EST II Math Level 1 topics with graphs, coordinate geometry, and data tables.

**Key Topics Covered:**
*   **Algebra & Functions:** Consecutive integers, literal equations, domain of rational functions, geometric and arithmetic sequences, inverse functions, functional equations, absolute value inequalities, systems of equations and inequalities, exponential and logarithmic equations.
*   **Geometry & Trigonometry:** Coordinate geometry of lines and quadrilaterals, circle equations and tangent lines, circle chords and inscribed angles, annulus shaded area, right triangle properties and medians, Pythagorean theorem, trigonometric identities, co-function identities, 3D volume of cones and cylinders.
*   **Data Analysis & Probability:** Mean and median with tables, range and systems of equations, two-way contingency tables, permutations and codes, dependent and independent probability events, proportional distribution.`
  },
  {
    id: StaticLessonIds.EST2Exam7,
    title: "EST2-Exam-7",
    description: "EST II Math Level 1 Practice Exam 7 (40 Questions)",
    icon: "Sigma",
    course: "EST2",
    type: "exam",
    studyNotes: `**EST2-Exam-7 Review**

This exam contains 40 multiple-choice questions based on the EST II Math Level 1 2026 Sample curriculum, featuring fresh problems, SAT standard coordinate graphs, and statistical tables.

**Key Topics Covered:**
*   **Algebra & Functions:** Polynomial graphs and zeros, number of real roots, geometric and recursive sequences, proportional reasoning in multiple variables, composite functions, rational slant asymptotes, logarithmic inequalities, complex modulus, Vieta's formulas, exponential growth models.
*   **Geometry & Trigonometry:** Coordinate plane polygon area, vertex distance formulas, supplementary and complementary angle relations, trigonometric identities, angle in standard position, sector areas and segment perimeters, Law of Cosines, 3D inscribed sphere volume, surface revolution and tangent lines to parabolas.
*   **Data Analysis & Probability:** Distinct letter permutations, two-way contingency tables, weighted mean score tables, counting passcode combinations with restrictions, complementary probability of committee selections.`
  },
  {
    id: StaticLessonIds.EST22026Sample,
    title: "Est2-2026-sample",
    description: "EST II Math Level 1 Exam - 2026 Sample",
    icon: "Sigma",
    course: "EST2",
    type: "exam",
    studyNotes: `**EST II Math Level 1 Exam - 2026 Sample Review**

This exam covers a wide range of topics typical for the EST II Math Level 1 section.

**Key Topics Covered:**
*   **Algebra:** Equations, inequalities, functions, sequences, complex numbers.
*   **Geometry:** Coordinate geometry, plane geometry, solid geometry, trigonometry.
*   **Data Analysis:** Statistics, probability.
`
  },
  {
    id: StaticLessonIds.EST22021October,
    title: "ESt2-2021-October",
    description: "EST II Math Level 1 Exam - October 2021 (50 Questions)",
    icon: "Sigma",
    course: "EST2",
    type: "exam",
    studyNotes: `**EST II Math Level 1 Exam - October 2021 Review**

This exam contains 50 multiple choice questions covering the complete EST II Math Level 1 curriculum.

**Key Topics Covered:**
*   **Algebra & Functions:** Sequences, matrices, complex numbers, composite/inverse functions, polynomials, logarithms, and piecewise functions.
*   **Geometry & Trigonometry:** Coordinate geometry, line/circle intersections, 3D geometry, transformations, vector angles, and trigonometric identities.
*   **Data Analysis & Statistics:** Combinatorics, probability, normal distribution, and linear regression analysis.

**EST II Math Level 1 October 2021 - Official Answer Key:**
*   **Questions 1 - 10:** 1: A | 2: E | 3: B | 4: B | 5: B | 6: A | 7: E | 8: D | 9: D | 10: E
*   **Questions 11 - 20:** 11: E | 12: B | 13: E | 14: C | 15: B | 16: C | 17: D | 18: D | 19: C | 20: B
*   **Questions 21 - 30:** 21: C | 22: B | 23: E | 24: D | 25: B | 26: C | 27: B | 28: B | 29: D | 30: D
*   **Questions 31 - 40:** 31: A | 32: E | 33: D | 34: A | 35: A | 36: D | 37: C | 38: C | 39: A | 40: B
*   **Questions 41 - 50:** 41: A | 42: B | 43: D | 44: C | 45: C | 46: A | 47: B | 48: C | 49: D | 50: E`
  },
  {
    id: StaticLessonIds.EST22021May,
    title: "Est2-2021-May",
    description: "EST II Math Level 1 Exam - May 2021 (50 Multiple Choice Questions)",
    icon: "FileText",
    course: "EST2",
    type: "exam",
    studyNotes: `**EST II Math Level 1 Exam - May 2021 Review**

This complete exam contains 50 multiple choice questions covering the complete EST II Math Level 1 curriculum.

**Key Topics Covered:**
*   **Algebra & Functions:** Polynomial division, complex roots, radical equations, rational inequalities, vertex minimums, systems of equations, matrix operations, logarithms, trigonometric identities, and parametric equations.
*   **Geometry & Trigonometry:** Semicircles, line segment distances, oblique coordinate systems, area bisectors, inscribed circles, coordinate geometry, tangents to circles and parabolas.
*   **Data Analysis & Probability:** Grouped median, combinations & permutations, two-way probability tables, linear regression, and expected values.

**EST II Math Level 1 May 2021 - Official Answer Key:**
*   **Questions 1 - 10:** 1: A | 2: B | 3: B | 4: B | 5: B | 6: C | 7: D | 8: D | 9: B | 10: A
*   **Questions 11 - 20:** 11: B | 12: D | 13: A | 14: E | 15: E | 16: C | 17: C | 18: C | 19: D | 20: E
*   **Questions 21 - 30:** 21: D | 22: A | 23: C | 24: A | 25: C | 26: B | 27: B | 28: A | 29: A | 30: B
*   **Questions 31 - 40:** 31: A | 32: A | 33: D | 34: A | 35: A | 36: A | 37: E | 38: C | 39: B | 40: C
*   **Questions 41 - 50:** 41: B | 42: E | 43: C | 44: D | 45: D | 46: A | 47: E | 48: C | 49: D | 50: E`
  },
  {
    id: StaticLessonIds.EST22021June,
    title: "Est2-2021-June",
    description: "EST II Math Level 1 Exam - June 2021 (50 Multiple Choice Questions)",
    icon: "FileText",
    course: "EST2",
    type: "exam",
    studyNotes: `**EST II Math Level 1 Exam - June 2021 Review**

This complete exam contains 50 multiple choice questions covering the complete EST II Math Level 1 curriculum.

**Key Topics Covered:**
*   **Algebra & Functions:** Polynomial identity, geometric sequences, perpendicular line slopes, function composite domains, exponential roots, oblique asymptotes, and complex equations.
*   **Geometry & Trigonometry:** Right triangles, area of rectangles/polygons, cone-cylinder combined volumes, 3D cube coordinates, trapezoids, equilateral triangle heights, and similar triangles.
*   **Data Analysis & Probability:** Binomial probability, interquartile ranges, mean/median totals, combinations with constraints, and matrix addition.

**EST II Math Level 1 June 2021 - Official Answer Key:**
*   **Questions 1 - 10:** 1: D | 2: B | 3: A | 4: C | 5: E | 6: A | 7: C | 8: B | 9: A | 10: D
*   **Questions 11 - 20:** 11: C | 12: D | 13: B | 14: C | 15: C | 16: E | 17: D | 18: C | 19: B | 20: D
*   **Questions 21 - 30:** 21: A | 22: D | 23: B | 24: A | 25: E | 26: E | 27: D | 28: B | 29: C | 30: B
*   **Questions 31 - 40:** 31: D | 32: C | 33: E | 34: D | 35: E | 36: A | 37: D | 38: B | 39: A | 40: C
*   **Questions 41 - 50:** 41: E | 42: A | 43: D | 44: B | 45: C | 46: E | 47: A | 48: D | 49: D | 50: B`
  },
  {
    id: StaticLessonIds.EST2SolvingEquation,
    title: "EST2-SOLVING EQUATION",
    description: "Solving equations in EST2 course",
    icon: "Sigma",
    course: "EST2",
    type: "lesson",
    studyNotes: `**EST2 - Solving Equations**

This lesson covers solving various types of equations including linear, quadratic, radical, exponential, absolute value, and trigonometric equations.`
  },
  {
    id: StaticLessonIds.EST2Quadratic,
    title: "EST2-quadratic EQUATION",
    description: "Quadratic equations in EST2 course",
    icon: "FunctionSquare",
    course: "EST2",
    type: "lesson",
    studyNotes: `**EST2 - Quadratic Equations**

This lesson covers quadratic functions, solving quadratic equations via factoring and completing the square, understanding the discriminant and roots, maximum/minimum values, and rational zero theorem.`
  },
  {
    id: StaticLessonIds.EST2Est1Statistic,
    title: "( Est1- statistic)",
    description: "Comprehensive EST2 Math Statistics: Mean, Median, Mode, Range, IQR, Standard Deviation, Data Sets, Frequency Tables, and Histograms",
    icon: "BarChart3",
    course: "EST2",
    type: "lesson",
    studyNotes: `## Statistics & Data Analysis (EST2 Math)

Statistics in EST2 focuses on data sets, frequency tables, histograms, measures of central tendency, and measures of dispersion.

---

### 1. Measures of Central Tendency

#### A. Arithmetic Mean (Average)
For a raw dataset of $n$ numbers:
$$\\bar{x} = \\frac{\\sum_{i=1}^n x_i}{n} = \\frac{x_1 + x_2 + \\dots + x_n}{n}$$

For a frequency distribution with frequencies $f_i$:
$$\\bar{x} = \\frac{\\sum (x_i \\cdot f_i)}{\\sum f_i} = \\frac{\\sum (x_i \\cdot f_i)}{N}$$

For grouped data with class midpoints $m_i$:
$$\\bar{x} \\approx \\frac{\\sum (m_i \\cdot f_i)}{\\sum f_i}$$

#### B. Median
The middle value when data is arranged in ascending order:
- If $n$ is **odd**, the median is the value at position $\\frac{n + 1}{2}$.
- If $n$ is **even**, the median is the average of the two middle values at positions $\\frac{n}{2}$ and $\\frac{n}{2} + 1$.

#### C. Mode
- The value(s) that appear with the greatest frequency.
- A dataset can be **unimodal**, **bimodal**, **multimodal**, or have **no mode**.

---

### 2. Measures of Dispersion (Spread)

#### A. Range
$$\\text{Range} = \\text{Maximum Value} - \\text{Minimum Value}$$

#### B. Quartiles & Interquartile Range (IQR)
- $Q_1$ (First Quartile / $25^{\\text{th}}$ percentile): Median of the lower half of the data.
- $Q_2$ (Second Quartile / $50^{\\text{th}}$ percentile): Overall median.
- $Q_3$ (Third Quartile / $75^{\\text{th}}$ percentile): Median of the upper half of the data.
$$\\text{IQR} = Q_3 - Q_1$$

#### C. Identifying Outliers ($1.5 \\times \\text{IQR}$ Rule)
- **Lower Outlier Threshold:** $< Q_1 - 1.5(\\text{IQR})$
- **Upper Outlier Threshold:** $> Q_3 + 1.5(\\text{IQR})$

#### D. Standard Deviation & Variance
- **Population Standard Deviation ($\\sigma$):**
$$\\sigma = \\sqrt{\\frac{\\sum (x_i - \\mu)^2}{N}} = \\sqrt{\\frac{\\sum x_i^2}{N} - \\mu^2}$$
- **Sample Standard Deviation ($s$):**
$$s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$$
- **Variance:** $\\sigma^2$ (population) or $s^2$ (sample).

---

### 3. Linear Transformations ($y = ax + b$)

When each data point $x_i$ is transformed into $y_i = ax_i + b$:
- **Mean:** $\\mu_y = a\\mu_x + b$
- **Median:** $\\text{Median}_y = a(\\text{Median}_x) + b$
- **Mode:** $\\text{Mode}_y = a(\\text{Mode}_x) + b$
- **Range:** $\\text{Range}_y = |a| \\cdot \\text{Range}_x$ (adding $b$ has NO effect)
- **IQR:** $\\text{IQR}_y = |a| \\cdot \\text{IQR}_x$
- **Standard Deviation:** $\\sigma_y = |a|\\sigma_x$
- **Variance:** $\\sigma_y^2 = a^2 \\sigma_x^2$

---

### 4. Shape of Distributions & Skewness

- **Symmetric (Bell-shaped / Normal):**
$$\\text{Mean} \\approx \\text{Median} \\approx \\text{Mode}$$
- **Right-Skewed (Positively Skewed):** Tail extends to the right (pulled by high values):
$$\\text{Mode} < \\text{Median} < \\text{Mean}$$
- **Left-Skewed (Negatively Skewed):** Tail extends to the left (pulled by low values):
$$\\text{Mean} < \\text{Median} < \\text{Mode}$$

---

### 5. Normal Distribution & Standard Scores ($z$-score)

- **Standard Score ($z$-score):**
$$z = \\frac{x - \\mu}{\\sigma}$$
- **Empirical Rule ($68 - 95 - 99.7\\%$ Rule):**
  - $68.27\\%$ of data lies within $[\\mu - \\sigma, \\mu + \\sigma]$
  - $95.45\\%$ of data lies within $[\\mu - 2\\sigma, \\mu + 2\\sigma]$
  - $99.73\\%$ of data lies within $[\\mu - 3\\sigma, \\mu + 3\\sigma]$

---

### Solved Examples (EST2 Style)

#### Example 1: Finding Missing Value Given Mean & Median
**Problem:** The list $\\{4, 8, 9, x, 16, 22\\}$ is in ascending order. If the mean equals the median, find $x$.
**Solution:**
$$\\text{Median} = \\frac{9 + x}{2}$$
$$\\text{Mean} = \\frac{4 + 8 + 9 + x + 16 + 22}{6} = \\frac{59 + x}{6}$$
Setting them equal:
$$\\frac{9 + x}{2} = \\frac{59 + x}{6} \\implies 3(9 + x) = 59 + x \\implies 27 + 3x = 59 + x \\implies 2x = 32 \\implies x = 16$$

#### Example 2: Outlier Detection
**Problem:** For a data set with $Q_1 = 34$ and $Q_3 = 58$, is a score of $96$ an outlier?
**Solution:**
$$\\text{IQR} = 58 - 34 = 24$$
$$\\text{Upper Fence} = Q_3 + 1.5(\\text{IQR}) = 58 + 1.5(24) = 58 + 36 = 94$$
Since $96 > 94$, the score $96$ is an upper outlier.`
  },
  {
    id: StaticLessonIds.EST2Statistics,
    title: "EST2-statistics",
    description: "Statistics in EST2 course",
    icon: "BarChart3",
    course: "EST2",
    type: "lesson",
    studyNotes: `**EST2 - Statistics**

This lesson covers data analysis, measures of center (mean, median, mode), measures of spread (range, standard deviation, interquartile range), reading tables and bar graphs, and the normal distribution.`
  },
  {
    id: StaticLessonIds.EST2CompositeInverse,
    title: "EST2-composite-inverse functions",
    description: "Composite and inverse functions in EST2 course",
    icon: "Repeat2",
    course: "EST2",
    type: "lesson",
    studyNotes: `**EST2 - Composite and Inverse Functions**

This lesson covers composite functions, evaluating compositions, finding inverse functions, and operations with complex numbers.`
  },
  {
    id: StaticLessonIds.EST2Composite,
    title: "EST2-composite",
    description: "Composite functions in EST2 course",
    icon: "Repeat2",
    course: "EST2",
    type: "lesson",
    studyNotes: `## Composite Functions (EST2)

### 1. Evaluating a Function at a Given Value
**Example:** Find $f(3)$ if $f(x) = 5x + 2$.
**Solution:**
Replace $x$ with $3$:
$$f(3) = 5(3) + 2 = 17$$

### 2. Evaluating a Composite Function
**Example:** Find $f(g(x))$ if $f(x) = 2x + 3$ and $g(x) = 10x + 1$.
**Solution:**
Replace $x \\to g(x)$ in $f$:
$$f(g(x)) = 2g(x) + 3$$
Substitute $g(x)$:
$$= 2(10x + 1) + 3$$
$$= 20x + 2 + 3 = 20x + 5$$

**Alternative method:**
$$f(g(x)) = f(10x + 1)$$
Replace $x \\to 10x + 1$ in $f(x)$:
$$f(10x + 1) = 2(10x + 1) + 3 = 20x + 5$$

### 3. Finding Inner Value from Function Notation
**Example:** If $f(2x + 1) = 5x - 3$, find $f(2)$.
**Solution:**
Set the input expressions equal:
$$2x + 1 = 2 \\implies 2x = 1 \\implies x = \\frac{1}{2}$$
Substitute $x = \\frac{1}{2}$ into the output expression:
$$f(2) = 5\\left(\\frac{1}{2}\\right) - 3 = 2.5 - 3 = -0.5$$

### 4. Finding an Unknown Inner Function
**Example:** If $f(x) = 3x + 5$ and $f(g(x)) = 7x - 2$, find $g(x)$.
**Solution:**
Replace $x \\to g(x)$ in $f(x)$:
$$f(g(x)) = 3g(x) + 5$$
Set the two expressions for $f(g(x))$ equal:
$$7x - 2 = 3g(x) + 5$$
Solve for $g(x)$:
$$3g(x) = 7x - 2 - 5$$
$$3g(x) = 7x - 7$$
$$g(x) = \\frac{7x - 7}{3}$$

### 5. Evaluating with Algebraic Expressions
**Example:** If $f(x) = 3x + 7$, find $f(2x + 5)$.
**Solution:**
Replace $x \\to 2x + 5$:
$$f(2x + 5) = 3(2x + 5) + 7$$
$$= 6x + 15 + 7$$
$$= 6x + 22$$

### 6. Finding Original Function Given a Transformation
**Example:** If $f(3x - 1) = 10x + 8$, find $f(x)$.
**Solution:**
Set $3x - 1 = k$:
$$3x = k + 1 \\implies x = \\frac{k + 1}{3} = \\frac{1}{3}k + \\frac{1}{3}$$
Substitute $x$ back into the original equation:
$$f(k) = 10\\left(\\frac{1}{3}k + \\frac{1}{3}\\right) + 8$$
$$f(k) = \\frac{10}{3}k + \\frac{10}{3} + 8$$
$$f(k) = \\frac{10}{3}k + \\frac{10}{3} + \\frac{24}{3} = \\frac{10}{3}k + \\frac{34}{3}$$
Replace $k$ with $x$:
$$f(x) = \\frac{10}{3}x + \\frac{34}{3}$$`
  },
  {
    id: StaticLessonIds.EST2Complex,
    title: "EST2- complex",
    description: "Complex functions in EST2 course",
    icon: "Repeat2",
    course: "EST2",
    type: "lesson",
    studyNotes: `**EST2 - Complex Functions**

This lesson covers composite functions, evaluating compositions, finding inverse functions, and operations with complex numbers.`
  },
  {
    id: StaticLessonIds.EST2Polynomial2027,
    title: "(Est2-polynomial 2027)",
    description: "Polynomial functions, equating coefficients, remainder and factor theorems, functions & vertical line test, even/odd symmetry, zeros & multiplicity, and graphical analysis for EST2 Math.",
    icon: "FunctionSquare",
    course: "EST2",
    type: "lesson",
    studyNotes: `**EST2 Math - Polynomials & Functions Study Guide**

Polynomials form the bedrock of high-level algebra and analytical geometry on the EST2 Math exam. This comprehensive guide covers all fundamental definitions, equating coefficients, algebraic identities, division theorems, and graph behaviors.

---

### 1. Algebraic Definition of a Polynomial

A polynomial in a single variable $x$ is an algebraic expression of the form:
$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0$$
where:
- The exponents $n, n-1, \\dots, 1, 0$ must be **non-negative integers** ($n \\in \\{0, 1, 2, 3, \\dots\\}$).
- The coefficients $a_n, a_{n-1}, \\dots, a_0$ are real (or complex) constants, with leading coefficient $a_n \\neq 0$.
- The **degree** of the polynomial is the highest power $n$.

#### Key Restrictions:
- **No negative exponents**: $x^{-1} = \\frac{1}{x}$ or $x^{-2}$ are **not** polynomials.
- **No fractional exponents or radicals containing variables**: $\\sqrt{x} = x^{1/2}$ is **not** a polynomial.
- **No variables in denominators**: $\\frac{3}{x^2 + 1}$ is a rational expression, **not** a polynomial.
- Real radical coefficients are completely valid: $P(x) = \\sqrt{3}x^2 + \\pi x - 7$ is a polynomial.

**Example 1:** Which of the following is a polynomial?
A. $y = 3x^{-2} + 7x^3 + 8$
B. $y = 5x + 10\\sqrt{x} + 7$
C. $y = 3x^2 + 10x - 8$
D. $y = \\frac{4}{x^2 + 1} + 2x$
**Solution:**
Only **C** contains powers of $x$ that are non-negative integers ($2, 1, 0$). A has $x^{-2}$, B has $x^{1/2}$, and D has $x$ in the denominator.

---

### 2. Equating Coefficients (Polynomial Identities)

If two polynomials are equal for all values of $x$, the coefficients of each corresponding power of $x$ must be identical:
$$a_n x^n + \\dots + a_0 = b_n x^n + \\dots + b_0 \\iff a_k = b_k \\quad \\text{for all } k$$

**Example 2 (Linear):** If $3x + 7 = ax + b$ for all real $x$, find $2a - b$.
**Solution:**
$$a = 3, \\quad b = 7$$
$$2a - b = 2(3) - 7 = 6 - 7 = -1$$

**Example 3 (Quadratic):** If $3x^2 + (a - 3)x + (3b + 2) = 3x^2 + 8x - 5$ for all $x$, find $a + b$.
**Solution:**
Equate coefficients:
1. $x$-term: $a - 3 = 8 \\implies a = 11$
2. Constant term: $3b + 2 = -5 \\implies 3b = -7 \\implies b = -\\frac{7}{3}$
3. Sum: $a + b = 11 - \\frac{7}{3} = \\frac{33 - 7}{3} = \\frac{26}{3}$

**Example 4 (Missing terms):** If $5x^2 + (3a + 2b)x - 10b = 5x^2 - 30$ for all $x$, find $a + b$.
**Solution:**
The right-hand side has linear coefficient $0$:
1. Constant term: $-10b = -30 \\implies b = 3$
2. Linear coefficient: $3a + 2b = 0 \\implies 3a + 2(3) = 0 \\implies 3a = -6 \\implies a = -2$
3. Sum: $a + b = -2 + 3 = 1$

**Example 5:** Given $g(x) = 3x^2 + 7x - 10$ and $f(x) = (a + 2)x^2 + (b - 3)x + c + 1$. If $f(x) = g(x)$ for all $x$, find $a + b + 2c$.
**Solution:**
- $a + 2 = 3 \\implies a = 1$
- $b - 3 = 7 \\implies b = 10$
- $c + 1 = -10 \\implies c = -11$
- Result: $a + b + 2c = 1 + 10 + 2(-11) = 11 - 22 = -11$

---

### 3. Undefined Values & Rational Function Domain

A rational expression $R(x) = \\frac{P(x)}{Q(x)}$ is undefined wherever $Q(x) = 0$.

**Example 6:** For which values of $x$ is $g(x) = \\frac{x - 3}{(x - 2)(x^2 - x - 20)}$ undefined?
**Solution:**
Set the denominator equal to zero:
$$(x - 2)(x^2 - x - 20) = 0$$
Factor the quadratic:
$$(x - 2)(x - 5)(x + 4) = 0$$
Values making the denominator zero:
$$x = 2, \\quad x = 5, \\quad x = -4$$
Therefore, $g(x)$ is undefined at $x \\in \\{-4, 2, 5\\}$.

---

### 4. The Remainder and Factor Theorems

#### Remainder Theorem
When a polynomial $P(x)$ is divided by a linear factor $(x - c)$, the remainder is simply the value of the polynomial evaluated at $x = c$:
$$\\text{Remainder } R = P(c)$$
For a general linear divisor $(ax + b)$, set $ax + b = 0 \\implies x = -\\frac{b}{a}$, then:
$$R = P\\left(-\\frac{b}{a}\\right)$$

**Example 7:** Find the remainder when $P(x) = 3x^3 + 5x^2 - 7x + 2$ is divided by $x + 3$.
**Solution:**
Set $x + 3 = 0 \\implies x = -3$:
$$P(-3) = 3(-3)^3 + 5(-3)^2 - 7(-3) + 2$$
$$= 3(-27) + 5(9) + 21 + 2 = -81 + 45 + 21 + 2 = -13$$

**Example 8:** Find the remainder when $P(t) = t^{10} + 1$ is divided by $t + 1$.
**Solution:**
Set $t + 1 = 0 \\implies t = -1$:
$$P(-1) = (-1)^{10} + 1 = 1 + 1 = 2$$

#### Factor Theorem
A linear expression $(x - c)$ is a factor of $P(x)$ if and only if $P(c) = 0$.
$$\\text{Factor } (x - c) \\iff P(c) = 0 \\iff x = c \\text{ is a root / zero / } x\\text{-intercept}$$

**Example 9:** The polynomial $P(x) = 2x^3 + 5kx + 7$ has a root at $x = -2$. Find $k$.
**Solution:**
$$P(-2) = 0 \\implies 2(-2)^3 + 5k(-2) + 7 = 0$$
$$-16 - 10k + 7 = 0 \\implies -9 = 10k \\implies k = -0.9$$

**Example 10:** If $2x + 3$ is a factor of $f(x) = 5x^2 + 2kx - 8$, find $k$.
**Solution:**
Set $2x + 3 = 0 \\implies x = -1.5$:
$$f(-1.5) = 5(-1.5)^2 + 2k(-1.5) - 8 = 0$$
$$5(2.25) - 3k - 8 = 0 \\implies 11.25 - 8 - 3k = 0$$
$$3.25 = 3k \\implies k = \\frac{3.25}{3} = \\frac{13}{12} \\approx 1.083$$

**Example 11:** When $P(x) = 5x^3 - 10kx^2 + 8$ is divided by $2x + 5$, the remainder is $5$. Find $3k$.
**Solution:**
Set $2x + 5 = 0 \\implies x = -2.5$:
$$P(-2.5) = 5(-2.5)^3 - 10k(-2.5)^2 + 8 = 5$$
$$5(-15.625) - 10k(6.25) + 8 = 5$$
$$-78.125 - 62.5k + 8 = 5 \\implies -70.125 - 62.5k = 5$$
$$-62.5k = 75.125 \\implies k = -1.202$$
$$3k = 3(-1.202) = -3.606$$

---

### 5. Vertical Line Test for Functions

- **Function Definition:** A relation where every input $x$ in the domain corresponds to **exactly one** output $y$ in the codomain.
- **Vertical Line Test:** If any vertical line intersects a graph in the Cartesian plane at more than one point, the graph does **not** represent $y$ as a function of $x$.
- Circles ($x^2 + y^2 = r^2$), ellipses, and sideways parabolas ($x = y^2$) fail the vertical line test.
- Polynomial curves ($y = ax^n + \\dots$) always pass the vertical line test and are valid functions everywhere on $\\mathbb{R}$.

---

### 6. Even, Odd, and Neither Functions

Let $f(x)$ be a function whose domain is symmetric about the origin:
1. **Even Function:**
   $$f(-x) = f(x)$$
   - **Symmetry:** Reflective symmetry with respect to the **$y$-axis**.
   - **Polynomial rule:** Contains **only even powers** of $x$ (including constants $c = c x^0$).
   - Examples: $f(x) = x^4 - 3x^2 + 7$, $\\cos(x)$, $|x|$.
2. **Odd Function:**
   $$f(-x) = -f(x)$$
   - **Symmetry:** Rotational symmetry ($180^\\circ$) about the **origin $(0, 0)$**.
   - **Polynomial rule:** Contains **only odd powers** of $x$ (no non-zero constant term).
   - Examples: $g(x) = 3x^5 - 4x^3 + 7x$, $\\sin(x)$, $\\tan(x)$.
3. **Neither:** If $f(-x)$ is neither $f(x)$ nor $-f(x)$ for all $x$.
   - Example: $f(x) = 2\\sin(x) + 5x^2$. Here $f(-x) = -2\\sin(x) + 5x^2 \\neq f(x)$ and $\\neq -f(x)$.

---

### 7. Function Substitutions and Inversions

**Example 12:** If $f(x) = \\frac{7}{2}x^2 - 8$, find $f(2x + 1)$.
**Solution:**
Replace $x$ with $(2x + 1)$:
$$f(2x + 1) = \\frac{7}{2}(2x + 1)^2 - 8 = \\frac{7}{2}(4x^2 + 4x + 1) - 8$$
$$= 14x^2 + 14x + 3.5 - 8 = 14x^2 + 14x - 4.5$$

**Example 13:** If $f(3x - 1) = 7x + 2$, find $f(x)$.
**Solution:**
Let $u = 3x - 1 \\implies 3x = u + 1 \\implies x = \\frac{u + 1}{3}$.
Substitute into the output:
$$f(u) = 7\\left(\\frac{u + 1}{3}\\right) + 2 = \\frac{7u + 7 + 6}{3} = \\frac{7u + 13}{3}$$
Therefore, $f(x) = \\frac{7x + 13}{3}$.

---

### 8. Graphical Properties: Roots, Multiplicity, and End Behavior

1. **Multiplicity of Zeros:**
   - **Odd multiplicity ($1, 3, 5, \\dots$):** The graph **crosses** the $x$-axis at $(r, 0)$.
   - **Even multiplicity ($2, 4, 6, \\dots$):** The graph is **tangent** (bounces off) the $x$-axis at $(r, 0)$ without crossing.
2. **End Behavior:**
   - **Even degree, $a_n > 0$:** $x \\to \\pm\\infty, y \\to +\\infty$ (Up on left, Up on right).
   - **Even degree, $a_n < 0$:** $x \\to \\pm\\infty, y \\to -\\infty$ (Down on left, Down on right).
   - **Odd degree, $a_n > 0$:** As $x \\to -\\infty, y \\to -\\infty$; as $x \\to +\\infty, y \\to +\\infty$ (Down on left, Up on right).
   - **Odd degree, $a_n < 0$:** As $x \\to -\\infty, y \\to +\\infty$; as $x \\to +\\infty, y \\to -\\infty$ (Up on left, Down on right).
3. **Turning Points:** A polynomial of degree $n$ has at most $n - 1$ turning points (local extrema).`
  },

  {
    id: StaticLessonIds.EST2RationalFunction,
    title: "EST2-RATIONAL FUNCTION",
    description: "Finding domain, vertical asymptotes, horizontal asymptotes, and range for rational functions.",
    icon: "FunctionSquare",
    course: "EST2",
    type: "lesson",
    studyNotes: `**Rational Functions Study Guide**

A rational function is a function of the form $f(x) = \\frac{P(x)}{Q(x)}$, where $P(x)$ and $Q(x)$ are polynomials and $Q(x) \\neq 0$.

### 1. Domain
The domain of a rational function is the set of all real numbers except those that make the denominator equal to zero.

**Example:** Find the domain of $f(x) = \\frac{2x+3}{x-4}$.
The denominator is zero when $x - 4 = 0 \\Rightarrow x = 4$.
Therefore, the domain is all real numbers except $x = 4$. (In interval notation: $(-\\infty, 4) \\cup (4, \\infty)$)

### 2. Vertical Asymptotes (VA)
A vertical asymptote occurs at the values of $x$ that make the denominator zero after the rational function has been simplified (common factors between numerator and denominator canceled out).

**Example:** Find the vertical asymptote(s) of $f(x) = \\frac{x+2}{x^2-4}$.
Factor the denominator: $f(x) = \\frac{x+2}{(x-2)(x+2)} = \\frac{1}{x-2}$ (for $x \\neq -2$).
The simplified denominator is zero when $x - 2 = 0 \\Rightarrow x = 2$.
So, there is a vertical asymptote at $x = 2$. (Note: There is a hole at $x = -2$).

### 3. Horizontal Asymptotes (HA)
The horizontal asymptote is determined by comparing the degrees of the numerator polynomial ($n$) and the denominator polynomial ($m$).
- If $n < m$, the HA is $y = 0$ (the $x$-axis).
- If $n = m$, the HA is $y = \\frac{a}{b}$, where $a$ and $b$ are the leading coefficients of the numerator and denominator, respectively.
- If $n > m$, there is no horizontal asymptote (but there may be an oblique asymptote if $n = m + 1$).

**Example 1:** $f(x) = \\frac{3x+1}{x^2+2}$. Degree of numerator (1) < Degree of denominator (2). HA is $y = 0$.
**Example 2:** $f(x) = \\frac{4x^2-1}{2x^2+3}$. Degree of numerator (2) = Degree of denominator (2). HA is $y = \\frac{4}{2} = 2$.
**Example 3:** $f(x) = \\frac{x^3+1}{x^2-1}$. Degree of numerator (3) > Degree of denominator (2). No HA.

### 4. Range
The horizontal asymptote often dictates the range, but a rational function can cross its horizontal asymptote. For simple rational functions of the form $y = \\frac{ax+b}{cx+d}$, the range is all real numbers except the horizontal asymptote $y = \\frac{a}{c}$.

**Example:** Find the range of $f(x) = \\frac{3x-1}{2x+4}$.
The HA is $y = \\frac{3}{2}$. The range is all real numbers except $\\frac{3}{2}$.`
  },
  {
    id: StaticLessonIds.EST2PeriodicFunction,
    title: "EST2-PERIODIC FUNCTION",
    description: "Finding period, range, and checking even/odd properties for periodic functions in EST2.",
    icon: "Activity",
    course: "EST2",
    type: "lesson",
    studyNotes: `**Periodic Functions Study Guide**

A function $f(x)$ is periodic if there exists a positive real number $P$ such that $f(x + P) = f(x)$ for all $x$ in the domain. The smallest such positive number $P$ is called the fundamental **period**.

### 1. Finding the Period
For standard trigonometric functions $f(x) = A \\sin(Bx + C) + D$ or $f(x) = A \\cos(Bx + C) + D$:
- **Period ($T$):** $T = \\frac{2\\pi}{|B|}$
- For tangent and cotangent $f(x) = A \\tan(Bx + C) + D$: $T = \\frac{\\pi}{|B|}$
- For absolute value functions $f(x) = |\\sin(Bx)|$ or $f(x) = |\\cos(Bx)|$: $T = \\frac{\\pi}{|B|}$

**Example:** Find the period of $f(x) = 3 \\cos\\left(4x - \\frac{\\pi}{2}\\right) + 1$.
Here $B = 4$. Using the period formula: $T = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$.

### 2. Finding the Range
For $f(x) = A \\sin(Bx + C) + D$ or $f(x) = A \\cos(Bx + C) + D$:
- **Amplitude:** $|A|$
- **Midline:** $y = D$
- **Minimum Value:** $D - |A|$
- **Maximum Value:** $D + |A|$
- **Range:** $[D - |A|, D + |A|]$

**Example:** Find the range of $g(x) = -2 \\sin(3x) + 5$.
Here $A = -2$, so $|A| = 2$, and $D = 5$.
Minimum $= 5 - 2 = 3$, Maximum $= 5 + 2 = 7$.
The range is $[3, 7]$.

### 3. Checking Even and Odd Properties
A function $f(x)$ is evaluated at $-x$:
- **Even Function:** $f(-x) = f(x)$ (Symmetric with respect to the $y$-axis). Example: $\\cos(x)$, $\\cos^2(x)$, $| \\sin(x) |$.
- **Odd Function:** $f(-x) = -f(x)$ (Symmetric with respect to the origin). Example: $\\sin(x)$, $\\tan(x)$, $\\sin(3x)$.
- **Neither:** If $f(-x)$ equals neither $f(x)$ nor $-f(x)$.

**Example:** Determine if $h(x) = x \\sin(x)$ is even, odd, or neither.
Test $h(-x)$: $h(-x) = (-x) \\sin(-x) = (-x)(-\\sin(x)) = x \\sin(x) = h(x)$.
Since $h(-x) = h(x)$, $h(x)$ is an **even** function.`
  },
    {
    id: StaticLessonIds.EST1Angles,
    title: "Est1-angles",
    description: "Interior angles, exterior angles, sum of angles, and geometric properties for triangles, hexagons, octagons, and general polygons in EST1.",
    icon: "Compass",
    course: "EST1",
    type: "lesson",
    studyNotes: `**Est1 Angles Study Guide**

A polygon with $n$ sides has fundamental relationships governing its interior and exterior angles.

### 1. Sum of Interior Angles
For any convex polygon with $n$ sides ($n \ge 3$):
$$\text{Sum of Interior Angles } S = (n - 2) \times 180^\circ$$

**Examples:**
- **Triangle ($n = 3$):** $S = (3 - 2) \times 180^\circ = 180^\circ$
- **Quadrilateral ($n = 4$):** $S = (4 - 2) \times 180^\circ = 360^\circ$
- **Hexagon ($n = 6$):** $S = (6 - 2) \times 180^\circ = 720^\circ$
- **Octagon ($n = 8$):** $S = (8 - 2) \times 180^\circ = 1080^\circ$

**Example:** Find the sum of interior angles of a regular $12$-gon (dodecagon).
Using $S = (n - 2) \times 180^\circ$ with $n = 12$:
$$S = (12 - 2) \times 180^\circ = 10 \times 180^\circ = 1800^\circ$$

### 2. Interior Angle of a Regular Polygon
In a **regular** $n$-sided polygon, all sides are equal and all interior angles are equal:
$$\text{Each Interior Angle } I = \frac{(n - 2) \times 180^\circ}{n} = 180^\circ - \frac{360^\circ}{n}$$

**Examples:**
- **Equilateral Triangle ($n = 3$):** $I = 60^\circ$
- **Regular Hexagon ($n = 6$):** $I = \frac{720^\circ}{6} = 120^\circ$
- **Regular Octagon ($n = 8$):** $I = \frac{1080^\circ}{8} = 135^\circ$

### 3. Exterior Angles of Polygons
An exterior angle and its adjacent interior angle form a linear pair, so they add up to $180^\circ$:
$$\text{Interior Angle } I + \text{Exterior Angle } E = 180^\circ$$

- **Sum of Exterior Angles:** For *any* convex polygon, the sum of all exterior angles (one at each vertex) is always **$360^\circ$**.
- **Each Exterior Angle of a Regular $n$-gon:**
$$E = \frac{360^\circ}{n}$$

**Examples:**
- **Regular Triangle ($n = 3$):** $E = \frac{360^\circ}{3} = 120^\circ$
- **Regular Hexagon ($n = 6$):** $E = \frac{360^\circ}{6} = 60^\circ$
- **Regular Octagon ($n = 8$):** $E = \frac{360^\circ}{8} = 45^\circ$

### 4. Exterior Angle Theorem for Triangles
An exterior angle of a triangle is equal to the sum of the two non-adjacent (remote) interior angles:
$$\text{Exterior Angle } = \angle A + \angle B$$

**Example:** If the exterior angle at vertex $C$ of $\triangle ABC$ measures $115^\circ$, and $\angle A = 50^\circ$, then $\angle B = 115^\circ - 50^\circ = 65^\circ$.`
  },
  {
    id: StaticLessonIds.SATAngles,
    title: "Sat-angles",
    description: "Interior angles, exterior angles, sum of angles, and geometric properties for triangles, hexagons, octagons, and general polygons in SAT.",
    icon: "Compass",
    course: "DSAT",
    type: "lesson",
    studyNotes: `**Sat Angles Study Guide**

A polygon with $n$ sides has fundamental relationships governing its interior and exterior angles.

### 1. Sum of Interior Angles
For any convex polygon with $n$ sides ($n \\ge 3$):
$$\\text{Sum of Interior Angles } S = (n - 2) \\times 180^\\circ$$

**Examples:**
- **Triangle ($n = 3$):** $S = (3 - 2) \\times 180^\\circ = 180^\\circ$
- **Quadrilateral ($n = 4$):** $S = (4 - 2) \\times 180^\\circ = 360^\\circ$
- **Hexagon ($n = 6$):** $S = (6 - 2) \\times 180^\\circ = 720^\\circ$
- **Octagon ($n = 8$):** $S = (8 - 2) \\times 180^\\circ = 1080^\\circ$

**Example:** Find the sum of interior angles of a regular $12$-gon (dodecagon).
Using $S = (n - 2) \\times 180^\\circ$ with $n = 12$:
$$S = (12 - 2) \\times 180^\\circ = 10 \\times 180^\\circ = 1800^\\circ$$

### 2. Interior Angle of a Regular Polygon
In a **regular** $n$-sided polygon, all sides are equal and all interior angles are equal:
$$\\text{Each Interior Angle } I = \\frac{(n - 2) \\times 180^\\circ}{n} = 180^\\circ - \\frac{360^\\circ}{n}$$

**Examples:**
- **Equilateral Triangle ($n = 3$):** $I = 60^\\circ$
- **Regular Hexagon ($n = 6$):** $I = \\frac{720^\\circ}{6} = 120^\\circ$
- **Regular Octagon ($n = 8$):** $I = \\frac{1080^\\circ}{8} = 135^\\circ$

### 3. Exterior Angles of Polygons
An exterior angle and its adjacent interior angle form a linear pair, so they add up to $180^\\circ$:
$$\\text{Interior Angle } I + \\text{Exterior Angle } E = 180^\\circ$$

- **Sum of Exterior Angles:** For *any* convex polygon, the sum of all exterior angles (one at each vertex) is always **$360^\\circ$**.
- **Each Exterior Angle of a Regular $n$-gon:**
$$E = \\frac{360^\\circ}{n}$$

**Examples:**
- **Regular Triangle ($n = 3$):** $E = \\frac{360^\\circ}{3} = 120^\\circ$
- **Regular Hexagon ($n = 6$):** $E = \\frac{360^\\circ}{6} = 60^\\circ$
- **Regular Octagon ($n = 8$):** $E = \\frac{360^\\circ}{8} = 45^\\circ$

### 4. Exterior Angle Theorem for Triangles
An exterior angle of a triangle is equal to the sum of the two non-adjacent (remote) interior angles:
$$\\text{Exterior Angle } = \\angle A + \\angle B$$

**Example:** If the exterior angle at vertex $C$ of $\\triangle ABC$ measures $115^\\circ$, and $\\angle A = 50^\\circ$, then $\\angle B = 115^\\circ - 50^\\circ = 65^\\circ$.`
  },
  {
    id: StaticLessonIds.SATPythagorasSinLaw,
    title: "Pythagoras& sin law 2026",
    description: "DSAT - Pythagoras Theorem and Sine Law",
    icon: "Sigma",
    course: "DSAT",
    type: "lesson",
    
    studyNotes: "## Pythagoras Theorem & Sine Law (DSAT)\n\n### Pythagoras Theorem\nFor any right-angled triangle with legs $a$, $b$, and hypotenuse $c$:\n$$ a^2 + b^2 = c^2 $$\n\n**Special Right Triangles:**\n- **$45^\\circ-45^\\circ-90^\\circ$:** Legs are $x$, hypotenuse is $x\\sqrt{2}$.\n- **$30^\\circ-60^\\circ-90^\\circ$:** Short leg is $x$, long leg is $x\\sqrt{3}$, hypotenuse is $2x$.\n\n### The Sine Law\nFor any triangle with sides $a$, $b$, $c$ and opposite angles $A$, $B$, $C$:\n$$ \\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c} $$\n\n### Solved Example (SAT Style)\n**Example:** In $\\triangle ABC$, $m\\angle A = 30^\\circ$, $m\\angle B = 45^\\circ$, and $BC = 10$. What is the length of $AC$?\n\n**Solution:**\nUsing the Law of Sines:\n$$ \\frac{\\sin A}{BC} = \\frac{\\sin B}{AC} $$\n$$ \\frac{\\sin(30^\\circ)}{10} = \\frac{\\sin(45^\\circ)}{AC} $$\n$$ \\frac{0.5}{10} = \\frac{\\frac{\\sqrt{2}}{2}}{AC} $$\n$$ 0.5 AC = 10 \\times \\frac{\\sqrt{2}}{2} = 5\\sqrt{2} $$\n$$ AC = 10\\sqrt{2} $$"
  },
  {
    id: StaticLessonIds.EST2Geometry2026,
    title: "est2- geometry2026",
    description: "Geometry topics for EST2 including triangles, circles, cubes, right trapezoids, and trigonometry.",
    icon: "Box",
    course: "EST2",
    type: "lesson",
    studyNotes: `## Geometry (EST2 2026)

### 1. Circle Arcs and Measures
A full circle measures $360^\\circ$.
If a circle is divided into $n$ equal arcs, the measure of each arc is $\\frac{360^\\circ}{n}$.
**Example:** A circle is divided into $32$ equal arcs. Each arc is $\\frac{360^\\circ}{32} = 11.25^\\circ$.

### 2. Right Triangles and Altitudes
In a right triangle $ABC$ with right angle at $B$ and altitude $\\overline{BD}$ to the hypotenuse:
- **Geometric Mean Theorem:** $BD^2 = AD \\cdot DC$
- **Area of Triangle:** $\\text{Area} = \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height}$

### 3. Surface Area and Volume
- **Cube:** Surface Area = $6s^2$, Volume = $s^3$
- **Regular Circular Cone:** Volume = $\\frac{1}{3}\\pi r^2 h$. The slant height $l$, radius $r$, and height $h$ form a right triangle: $l^2 = r^2 + h^2$.
- **Hemisphere:** Total Surface Area (including flat base) = $3\\pi r^2$. (Curved surface is $2\\pi r^2$, base is $\\pi r^2$).
- **Rectangular Solid:** Volume = $l \\cdot w \\cdot h$. If face areas are $A_1 = lw$, $A_2 = wh$, $A_3 = lh$, then $V = \\sqrt{A_1 \\cdot A_2 \\cdot A_3}$.

### 4. Trigonometry and Coordinate Geometry
- **Law of Cosines:** $c^2 = a^2 + b^2 - 2ab \\cos(C)$. Used to find side lengths or angles in any triangle.
- **Tangent:** $\\tan(\\theta) = \\frac{\\text{Opposite}}{\\text{Adjacent}}$.
- **Perpendicular Bisectors:** A perpendicular bisector of a segment passes through its midpoint and has a slope that is the negative reciprocal of the segment's slope.

### 5. Arc Length (Radians)
- **Arc Length Formula:** $s = r\\theta$, where $s$ is arc length, $r$ is radius, and $\\theta$ is the central angle in radians.

### 6. Cubes inscribed in Spheres
- The space diagonal of a cube inscribed in a sphere is equal to the diameter of the sphere.
- For a cube of side $s$, the space diagonal is $s\\sqrt{3}$.
- Thus, $s\\sqrt{3} = 2r$.`
  },
  {
    id: StaticLessonIds.EST2Angles,
    title: "EST2-ANGLES",
    description: "Interior angles, exterior angles, sum of angles, and geometric properties for triangles, hexagons, octagons, and general polygons in EST2.",
    icon: "Compass",
    course: "EST2",
    type: "lesson",
    studyNotes: `**Polygons & Angles Study Guide**

A polygon with $n$ sides has fundamental relationships governing its interior and exterior angles.

### 1. Sum of Interior Angles
For any convex polygon with $n$ sides ($n \\ge 3$):
$$\\text{Sum of Interior Angles } S = (n - 2) \\times 180^\\circ$$

**Examples:**
- **Triangle ($n = 3$):** $S = (3 - 2) \\times 180^\\circ = 180^\\circ$
- **Quadrilateral ($n = 4$):** $S = (4 - 2) \\times 180^\\circ = 360^\\circ$
- **Hexagon ($n = 6$):** $S = (6 - 2) \\times 180^\\circ = 720^\\circ$
- **Octagon ($n = 8$):** $S = (8 - 2) \\times 180^\\circ = 1080^\\circ$

**Example:** Find the sum of interior angles of a regular $12$-gon (dodecagon).
Using $S = (n - 2) \\times 180^\\circ$ with $n = 12$:
$$S = (12 - 2) \\times 180^\\circ = 10 \\times 180^\\circ = 1800^\\circ$$

### 2. Interior Angle of a Regular Polygon
In a **regular** $n$-sided polygon, all sides are equal and all interior angles are equal:
$$\\text{Each Interior Angle } I = \\frac{(n - 2) \\times 180^\\circ}{n} = 180^\\circ - \\frac{360^\\circ}{n}$$

**Examples:**
- **Equilateral Triangle ($n = 3$):** $I = 60^\\circ$
- **Regular Hexagon ($n = 6$):** $I = \\frac{720^\\circ}{6} = 120^\\circ$
- **Regular Octagon ($n = 8$):** $I = \\frac{1080^\\circ}{8} = 135^\\circ$

### 3. Exterior Angles of Polygons
An exterior angle and its adjacent interior angle form a linear pair, so they add up to $180^\\circ$:
$$\\text{Interior Angle } I + \\text{Exterior Angle } E = 180^\\circ$$

- **Sum of Exterior Angles:** For *any* convex polygon, the sum of all exterior angles (one at each vertex) is always **$360^\\circ$**.
- **Each Exterior Angle of a Regular $n$-gon:**
$$E = \\frac{360^\\circ}{n}$$

**Examples:**
- **Regular Triangle ($n = 3$):** $E = \\frac{360^\\circ}{3} = 120^\\circ$
- **Regular Hexagon ($n = 6$):** $E = \\frac{360^\\circ}{6} = 60^\\circ$
- **Regular Octagon ($n = 8$):** $E = \\frac{360^\\circ}{8} = 45^\\circ$

### 4. Exterior Angle Theorem for Triangles
An exterior angle of a triangle is equal to the sum of the two non-adjacent (remote) interior angles:
$$\\text{Exterior Angle } = \\angle A + \\angle B$$

**Example:** If the exterior angle at vertex $C$ of $\\triangle ABC$ measures $115^\\circ$, and $\\angle A = 50^\\circ$, then $\\angle B = 115^\\circ - 50^\\circ = 65^\\circ$.`
  },
  {
    id: StaticLessonIds.EST2LinearPolynomial,
    title: "EST2-linear-polynomial",
    description: "Linear and polynomial functional problems in EST2 course",
    icon: "FunctionSquare",
    course: "EST2",
    type: "lesson",
    studyNotes: `**EST2 - Linear and Polynomial Functions**

This lesson analyzes linear and polynomial equations comprehensively, demonstrating intersections, intercepts, transformations, slope perpendicularity, roots manipulation, and properties for non-linear structures under complex evaluations.`
  },
  {
    id: StaticLessonIds.EST2Inequality,
    title: "ESt2-inequality",
    description: "Inequality and absolute value problems in EST2 course",
    icon: "Sigma",
    course: "EST2",
    type: "lesson",
    studyNotes: `**EST2 - Inequality**

This lesson covers absolute value inequalities, rational inequalities, and systems of algebraic inequalities frequently tested on EST2.`
  },
  {
    id: StaticLessonIds.EST2EvenOdd,
    title: "even-odd function",
    description: "Polynomial definition, function definition, even and odd functions",
    icon: "FunctionSquare",
    course: "EST2",
    type: "lesson",
    studyNotes: `**EST2 - Even and Odd Functions**

**Polynomial Definition:**
A polynomial is an expression consisting of variables and coefficients, that involves only the operations of addition, subtraction, multiplication, and non-negative integer exponents of variables.

**Even Function:**
A function $f$ is even if $f(-x) = f(x)$ for all $x$ in the domain of $f$. The graph of an even function is symmetric with respect to the $y$-axis.

**Odd Function:**
A function $f$ is odd if $f(-x) = -f(x)$ for all $x$ in the domain of $f$. The graph of an odd function is symmetric with respect to the origin.

**Neither:**
A function that does not satisfy either of the above conditions is neither even nor odd.`
  },
  {
    id: StaticLessonIds.EST2DomainRange,
    title: "domain-range-even-odd functions",
    description: "Domain, range, even/odd functions, increasing/decreasing",
    icon: "FunctionSquare",
    course: "EST2",
    type: "lesson",
    studyNotes: `**EST2 - Domain and Range**

This lesson covers how to find the domain and range of square root, absolute value, quadratic, and rational functions, as well as properties like even/odd and intervals of increasing/decreasing.`
  },
  {
    id: StaticLessonIds.EST2DistanceAngle,
    title: "Distance between point and line, angle between two lines",
    description: "Distance between point and line, angle between two lines, oblique coordinates, 3D distance and planes",
    icon: "Ruler",
    course: "EST2",
    type: "lesson",
    studyNotes: `**EST2 - Distance and Angles**

This lesson covers the perpendicular distance from a point to a line/plane, angles between lines, distances between 3D points, and dealing with oblique coordinates.`
  },
    {
    id: StaticLessonIds.EST2Logarithm,
    title: "logarithm",
    description: "EST2 Logarithmic and Exponential Functions, Properties, Change of Base, and Equations",
    icon: "Calculator",
    course: "EST2",
    type: "lesson",
    studyNotes: `**EST2 Logarithm Study Guide**

Logarithms are the inverses of exponential functions. Mastering logarithmic properties, change of base, exponential equations, and function composition is essential for the EST2 exam.

### 1. Fundamental Definition & Properties

*   **Definition:** $y = \log_b(x) \iff b^y = x$ (where $b > 0, b \neq 1$, and $x > 0$).
*   **Product Rule:** $\log_b(xy) = \log_b(x) + \log_b(y)$
*   **Quotient Rule:** $\log_b\left(\frac{x}{y}\right) = \log_b(x) - \log_b(y)$
*   **Power Rule:** $\log_b(x^k) = k \cdot \log_b(x)$
*   **Identity & Zero Rules:** $\log_b(b) = 1$ and $\log_b(1) = 0$
*   **Inverse Properties:** $b^{\log_b(x)} = x$ and $\log_b(b^x) = x$

---

### 2. Change of Base Formula & Base Theorems

*   **Change of Base:** $\log_b(x) = \frac{\log_c(x)}{\log_c(b)} = \frac{\ln(x)}{\ln(b)} = \frac{\log(x)}{\log(b)}$
*   **Power of Base Theorem:** $\log_{b^k}(x) = \frac{1}{k}\log_b(x)$
*   **Equal Power Theorem:** $\log_{a^k}(b^k) = \log_a(b)$

---

### 3. Solved EST2 Exam Examples

#### **Example 1: Solving Exponential Equations using Logarithms**
*Question:* Solve $3^{2y+1} = 5$ for $y$.
*Solution:*
1. Take $\log_3$ or $\ln$ of both sides:
   $$2y + 1 = \log_3 5 = \frac{\log 5}{\log 3}$$
2. Isolate $y$:
   $$2y = \frac{\log 5}{\log 3} - 1 \implies y = \frac{1}{2}\left(\frac{\log 5}{\log 3} - 1\right) \approx 0.23$$

---

#### **Example 2: Composite Functions with Natural Exponentials**
*Question:* If $f(x) = 3\ln x$ and $g(x) = e^x$, find $(g \circ f)(x)$.
*Solution:*
1. Substitute $f(x)$ into $g(x)$:
   $$(g \circ f)(x) = g(f(x)) = e^{3\ln x}$$
2. Use exponent rules for logarithms: $3\ln x = \ln(x^3)$
   $$g(f(x)) = e^{\ln(x^3)} = x^3$$

---

#### **Example 3: Logarithmic Equations & Extraneous Solutions**
*Question:* Find the solution set of $\log_3(x-5) = \log_9(2x+5)$.
*Solution:*
1. Rewrite base 3 in terms of base 9: $\log_3(x-5) = \log_9(x-5)^2$
2. Equate arguments:
   $$(x-5)^2 = 2x + 5 \implies x^2 - 10x + 25 = 2x + 5 \implies x^2 - 12x + 20 = 0$$
3. Factor: $(x-2)(x-10) = 0 \implies x = 2 \text{ or } x = 10$.
4. Check domain: $x - 5 > 0 \implies x > 5$.
   * $x = 2$ is rejected because $2 - 5 = -3 < 0$.
   * $x = 10$ is valid ($10 - 5 = 5 > 0$).
   * **Solution set:** $\{10\}$

---

#### **Example 4: Exponential Decay Models (Car Depreciation)**
*Question:* The value of a car is modeled by $V = \beta e^{-\alpha t}$. If initial value is $\$8000$ and value after $1$ year is $\$6000$, find $\alpha$.
*Solution:*
1. At $t = 0$: $V(0) = 8000 \implies 8000 = \beta e^0 \implies \beta = 8000$.
2. At $t = 1$: $V(1) = 6000 \implies 6000 = 8000 e^{-\alpha}$
3. Divide by $8000$:
   $$e^{-\alpha} = \frac{6000}{8000} = \frac{3}{4} \implies e^{\alpha} = \frac{4}{3}$$
4. Take natural logarithm:
   $$\alpha = \ln\left(\frac{4}{3}\right)`
  },
  {
    id: StaticLessonIds.EST2CircleSphere,
    title: "circle equation-sphere equation-cosine law",
    description: "Circle and sphere equations, circumference, tangents, area, volume, and intersection problems",
    icon: "Circle",
    course: "EST2",
    type: "lesson",
    studyNotes: `**EST2 - Circles and Spheres**

This lesson covers standard and general forms of circle and sphere equations, how to find centers and radii by completing the square, distance and intersections involving tangent lines, and problems utilizing sine and cosine rules within circular geometry context.`
  },
  {
    id: StaticLessonIds.EST12026Jan,
    title: "EST-2026-jan",
    description: "EST I Math Exam - January 2026",
    icon: "Sigma",
    course: "EST1",
    type: "exam",
    studyNotes: `**EST I Math Exam - January 2026 Review**

This exam covers a wide range of topics typical for the EST I Math section, with a strong emphasis on algebra, data analysis, and advanced math concepts.

**Key Topics Covered:**
*   **Heart of Algebra:** Linear equations, systems of linear equations, linear inequalities, slope, and interpreting linear models.
*   **Problem Solving and Data Analysis:** Ratios, proportions, percentages, probability, data tables, scatterplots, line of best fit, predictions, and box plots.
*   **Passport to Advanced Math:** Polynomial division, remainder theorem, polynomial identities, quadratic functions, rational equations, asymptotes, radical equations, exponential equations, absolute value equations and inequalities.
*   **Additional Topics in Math:** Circle equations, transformations, geometry (angles, similar triangles), coordinate geometry (distance formula), function composition, inverse functions, domain of functions, and trigonometry (right triangles).

**Formulas & Concepts:**
*   **Polynomial Remainder Theorem:** The remainder of dividing $P(x)$ by $ax - b$ is $P(b/a)$.
*   **Circle Equation:** $(x - h)^2 + (y - k)^2 = r^2$, where $(h, k)$ is the center and $r$ is the radius.
*   **Line of Best Fit:** $y = mx + b$, where $m$ is the slope and $b$ is the y-intercept.
*   **Distance Formula:** $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.
*   **Function Composition:** $(f \\circ g)(x) = f(g(x))$.
*   **Trigonometry:** SOH CAH TOA for right triangles.`
  },
  {
    id: StaticLessonIds.EST12026JanComplete,
    title: "Est1- 2026- jan complete",
    description: "EST I Math Complete Exam - January 2026 - 50 Questions",
    icon: "Sigma",
    course: "EST1",
    type: "exam",
    studyNotes: `**EST I Math Complete Exam - January 2026 Review**

This represents the full and complete 50-question mock for the EST I Math section from January 2026, formatted in LaTeX and optimized for study.

**Exam Guidelines:**
*   **Duration:** 75 minutes
*   **Questions:** 50 Multiple Choice & Grid-In Questions
*   **Calculator:** Allowed

**Structure & Concepts:**
*   **Linear & Algebra Systems:** Interpreting real-world models, solving multi-variable configurations, and performing system translations.
*   **Geometry & Trigonometry:** Distance calculations, right triangle properties, and circle structures.
*   **Data Analysis:** Probability computations, scatter plots, box-and-whisker plots, and statistical evaluation.`
  },
  {
    id: StaticLessonIds.EST12026Jan2,
    title: "est1-2026-jan2",
    description: "EST I Math Exam - January 2026 (Version 2)",
    icon: "Sigma",
    course: "EST1",
    type: "exam",
    studyNotes: `**EST I Math Exam - January 2026 (Version 2) Review**

This exam covers a wide range of topics typical for the EST I Math section, with a strong emphasis on algebra, data analysis, and advanced math concepts.

**Key Topics Covered:**
*   **Heart of Algebra:** Linear equations, systems of linear equations, linear inequalities, slope, and interpreting linear models.
*   **Problem Solving and Data Analysis:** Ratios, proportions, percentages, probability, data tables, scatterplots, line of best fit, predictions, and box plots.
*   **Passport to Advanced Math:** Polynomial division, remainder theorem, polynomial identities, quadratic functions, rational equations, asymptotes, radical equations, exponential equations, absolute value equations and inequalities.
*   **Additional Topics in Math:** Circle equations, transformations, geometry (angles, similar triangles), coordinate geometry (distance formula), function composition, inverse functions, domain of functions, and trigonometry (right triangles).`
  },
  {
    id: StaticLessonIds.EST12026Sample,
    title: "EST-2026-sample",
    description: "EST I Math Exam - 2026 Sample",
    icon: "Sigma",
    course: "EST1",
    type: "exam",
    studyNotes: `**EST I Math Exam - 2026 Sample Review**
    
This exam covers a wide range of topics typical for the EST I Math section.

**Key Topics Covered:**
*   **Heart of Algebra:** Linear functions, systems of equations, and inequalities.
*   **Problem Solving and Data Analysis:** Ratios, proportions, percentages, probability, and scatterplots.
*   **Passport to Advanced Math:** Polynomials, quadratics, and non-linear functions.
*   **Additional Topics in Math:** Geometry, circles, and trigonometry.

**Formulas & Concepts:**
*   **Polynomial Remainder Theorem:** The remainder of dividing $P(x)$ by $ax - b$ is $P(b/a)$.
*   **Circle Equation:** $(x - h)^2 + (y - k)^2 = r^2$.
*   **Line of Best Fit:** $y = mx + b$, where $m$ is the slope and $b$ is the y-intercept.`
  },
  {
    id: StaticLessonIds.EST12021March,
    title: "Est1-2021-march",
    description: "EST1 2021 March Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: `# EST 1 2021 March Practice Exam\nComplete this full-length exam.`
  },
  {
    id: StaticLessonIds.EST12026March,
    title: "EST1-2026-MARCH-NEW",
    description: "EST1 2026 March Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: `# EST 1 2026 March Practice Exam\nComplete this full-length exam.`
  },
  {
    id: StaticLessonIds.EST12026Expect,
    title: "est1- 2026-expect",
    description: "EST1 2026 Expected Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2026 Expected Review**\n\nThis exam covers a variety of topics including:\n\n*   **Algebra:** Linear equations, inequalities, polynomials, and rational expressions.\n*   **Geometry:** Circles, triangles, and coordinate geometry.\n*   **Data Analysis:** Scatter plots, lines of best fit, and probability.\n*   **Advanced Math:** Quadratics, vertex form, and functions."
  },
  {
    id: StaticLessonIds.EST1LinearEquationPart2,
    title: "estlinear-equations part2",
    description: "EST1 Linear Equations Part 2",
    icon: "BookOpen",
    course: "EST1",
    type: "lesson",
    studyNotes: "**Linear Equations Part 2 Review**\n\nThis lesson covers advanced linear equations topics including:\n\n*   **Perpendicular Lines:** Slopes are negative reciprocals.\n*   **Parallel Lines:** Slopes are equal.\n*   **Systems of Equations:** Solving graphically and algebraically.\n*   **Word Problems:** Modeling real-world scenarios with linear functions."
  },
  {
    id: StaticLessonIds.EST12025,
    title: "(31-EST12025)",
    description: "EST Custom Exam July/Oct 2025",
    icon: "Sigma",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 Custom Exam Review**\n\nThis exam compiles recent questions from July 2025 and October sessions. Focus areas include:\n\n*   **Complex Numbers & Quadratics**: Roots, discriminants, and operations.\n*   **Geometry**: Sectors, circles, and coordinate geometry.\n*   **Statistics**: Box plots, skewness, and probability.\n*   **Algebra**: Systems of equations and inequalities."
  },
  {
    id: StaticLessonIds.EST12025Form1,
    title: "EST1-2025-form1",
    description: "EST1 2025 Form 1 Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2025 Form 1 Review**\n\nThis exam covers a variety of topics including:\n\n*   **Algebra:** Linear equations, inequalities, polynomials, and rational expressions.\n*   **Geometry:** Circles, triangles, and coordinate geometry.\n*   **Data Analysis:** Scatter plots, lines of best fit, and probability.\n*   **Advanced Math:** Quadratics, vertex form, and functions."
  },
  {
    id: StaticLessonIds.EST12025Form2,
    title: "EST1-2025-form2",
    description: "EST1 2025 Form 2 Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2025 Form 2 Review**\n\nThis exam covers a variety of topics including:\n\n*   **Algebra:** Linear equations, inequalities, polynomials, and rational expressions.\n*   **Geometry:** Circles, triangles, and coordinate geometry.\n*   **Data Analysis:** Scatter plots, lines of best fit, and probability.\n*   **Advanced Math:** Quadratics, vertex form, and functions."
  },
  {
    id: StaticLessonIds.EST12025Form3,
    title: "EST1-2025-form3",
    description: "EST1 2025 Form 3 Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2025 Form 3 Review**\n\nThis exam covers a variety of topics including:\n\n*   **Algebra:** Linear equations, inequalities, polynomials, and rational expressions.\n*   **Geometry:** Circles, triangles, and coordinate geometry.\n*   **Data Analysis:** Scatter plots, lines of best fit, and probability.\n*   **Advanced Math:** Quadratics, vertex form, and functions."
  },
  {
    id: StaticLessonIds.EST12025Form4,
    title: "EST1-2025-form4",
    description: "EST1 2025 Form 4 Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2025 Form 4 Review**\n\nThis exam covers a variety of topics including:\n\n*   **Algebra:** Linear equations, inequalities, polynomials, and rational expressions.\n*   **Geometry:** Circles, triangles, and coordinate geometry.\n*   **Data Analysis:** Scatter plots, lines of best fit, and probability.\n*   **Advanced Math:** Quadratics, vertex form, and functions."
  },
  {
    id: StaticLessonIds.EST12025Form5,
    title: "EST1-2025-form5",
    description: "EST1 2025 Form 5 Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2025 Form 5 Review**\n\nThis exam covers a variety of topics including:\n\n*   **Algebra:** Linear equations, inequalities, polynomials, and rational expressions.\n*   **Geometry:** Circles, triangles, and coordinate geometry.\n*   **Data Analysis:** Scatter plots, lines of best fit, and probability.\n*   **Advanced Math:** Quadratics, vertex form, and functions."
  },
  {
    id: StaticLessonIds.EST12025Form6,
    title: "EST1-2025-form6",
    description: "EST1 2025 Form 6 Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2025 Form 6 Review**\n\nThis exam covers a variety of topics including:\n\n*   **Algebra:** Linear equations, inequalities, polynomials, and rational expressions.\n*   **Geometry:** Circles, triangles, and coordinate geometry.\n*   **Data Analysis:** Scatter plots, lines of best fit, and probability.\n*   **Advanced Math:** Quadratics, vertex form, and functions."
  },
  {
    id: StaticLessonIds.EST12021April,
    title: "EST1-2021-APRIL",
    description: "EST1 2021 April Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2021 April Review**\n\nThis exam covers a variety of topics including:\n\n*   **Algebra:** Linear equations, inequalities, polynomials, and rational expressions.\n*   **Geometry:** Circles, triangles, and coordinate geometry.\n*   **Data Analysis:** Scatter plots, lines of best fit, and probability.\n*   **Advanced Math:** Quadratics, vertex form, and functions."
  },
  {
    id: StaticLessonIds.EST12021Jan,
    title: "EST1-2021-JAN",
    description: "EST1 2021 January Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2021 January Review**\n\nThis exam covers a variety of topics including:\n\n*   **Algebra:** Linear equations, inequalities, polynomials, and rational expressions.\n*   **Geometry:** Circles, triangles, and coordinate geometry.\n*   **Data Analysis:** Scatter plots, lines of best fit, and probability.\n*   **Advanced Math:** Quadratics, vertex form, and functions."
  },
  {
    id: StaticLessonIds.EST12021Aug,
    title: "est1- 2021-august",
    description: "EST1 2021 August Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2021 August Review**\n\nThis exam covers a variety of topics including:\n\n*   **Algebra:** Linear equations, inequalities, polynomials, and rational expressions.\n*   **Geometry:** Circles, triangles, and coordinate geometry.\n*   **Data Analysis:** Scatter plots, lines of best fit, and probability.\n*   **Advanced Math:** Quadratics, vertex form, and functions."
  },
  {
    id: StaticLessonIds.EST12021Dec,
    title: "est1- 2021-december",
    description: "EST1 2021 December Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2021 December Review**\n\nThis exam covers a variety of topics including:\n\n*   **Algebra:** Linear equations, inequalities, polynomials, and rational expressions.\n*   **Geometry:** Circles, triangles, and coordinate geometry.\n*   **Data Analysis:** Scatter plots, lines of best fit, and probability.\n*   **Advanced Math:** Quadratics, vertex form, and functions."
  },
  {
    id: StaticLessonIds.EST12020Dec,
    title: "est1- 2020-december",
    description: "EST1 2020 December Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2020 December Review**\n\nThis exam covers a variety of topics including:\n\n*   **Algebra:** Linear equations, inequalities, polynomials, and rational expressions.\n*   **Geometry:** Circles, triangles, and coordinate geometry.\n*   **Data Analysis:** Scatter plots, lines of best fit, and probability.\n*   **Advanced Math:** Quadratics, vertex form, and functions."
  },
  {
    id: StaticLessonIds.EST12020Oct,
    title: "est1- 2020-october",
    description: "EST1 2020 October Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2020 October Review**\n\nThis section covers both Calculator and Non-Calculator sections of the October 2020 EST I Math exam."
  },
  {
    id: StaticLessonIds.EST12021June,
    title: "est1-2021-june",
    description: "EST1 2021 June Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2021 June Review**\n\nThis section covers both Calculator and Non-Calculator sections of the June 2021 EST I Math exam."
  },
  {
    id: StaticLessonIds.EST12022June,
    title: "est1-2022-june",
    description: "EST1 2022 June Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2022 June Review**\n\nThis section covers both Calculator and Non-Calculator sections of the June 2022 EST I Math exam."
  },
  {
    id: StaticLessonIds.EST12022March,
    title: "est1-2022-march",
    description: "EST1 2022 March Practice Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "**EST1 2022 March Review**\n\nThis section covers both Calculator and Non-Calculator sections of the March 2022 EST I Math exam (labeled October 2021)."
  },
  {
    id: StaticLessonIds.SolvingEquation28,
    title: "(28-11solving equation )",
    description: "Translating Words to Math & Consecutive Integers",
    icon: "FileText",
    course: "EST1",
    type: "lesson",
    studyNotes: `**Translating Words into Mathematical Symbols**

Converting word problems into algebraic equations is a crucial skill. Use the table below to identify keywords and their corresponding operations.

<div class="overflow-x-auto my-6">
  <table class="w-full text-sm text-left border border-green-200 rounded-lg shadow-sm">
    <thead class="text-xs text-green-900 uppercase bg-green-100 font-bold">
      <tr>
        <th class="px-4 py-3 border-b border-green-200">Keyword</th>
        <th class="px-4 py-3 border-b border-green-200">Meaning</th>
        <th class="px-4 py-3 border-b border-green-200">Example</th>
        <th class="px-4 py-3 border-b border-green-200">Equation</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-green-50 bg-white">
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Is / Equals</td>
        <td class="px-4 py-2">Equality between two expressions</td>
        <td class="px-4 py-2">"A number plus 3 equals 10"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$x + 3 = 10$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Increase</td>
        <td class="px-4 py-2">Addition or growth</td>
        <td class="px-4 py-2">"A number increases by 5"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$x + 5$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Decrease</td>
        <td class="px-4 py-2">Subtraction</td>
        <td class="px-4 py-2">"Number decreases by 3"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$x - 3$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">More than</td>
        <td class="px-4 py-2">Sum of smaller part + diff = larger</td>
        <td class="px-4 py-2">"x is more than y by 5"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$x = y + 5$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">More than (by %)</td>
        <td class="px-4 py-2">Increase by percentage</td>
        <td class="px-4 py-2">"x is more than y by 30%"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$x = 1.30y$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Less than</td>
        <td class="px-4 py-2">Difference</td>
        <td class="px-4 py-2">"x is less than y by 5"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$y = x + 5$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Less than (by %)</td>
        <td class="px-4 py-2">Decrease by percentage</td>
        <td class="px-4 py-2">"x is less than y by 60%"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$x = 0.40y$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Of</td>
        <td class="px-4 py-2">Multiplication</td>
        <td class="px-4 py-2">"20% of x is 50"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$0.20x = 50$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Double / Twice</td>
        <td class="px-4 py-2">Multiplying by 2</td>
        <td class="px-4 py-2">"Twice a number"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$2x$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Three times</td>
        <td class="px-4 py-2">Multiplying by 3</td>
        <td class="px-4 py-2">"Three times a number"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$3x$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Four times</td>
        <td class="px-4 py-2">Multiplying by 4</td>
        <td class="px-4 py-2">"Four times a number"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$4x$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">One-third</td>
        <td class="px-4 py-2">Multiplication by 1/3</td>
        <td class="px-4 py-2">"One-third a number"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$\\frac{1}{3}x$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Half</td>
        <td class="px-4 py-2">Division by 2</td>
        <td class="px-4 py-2">"Half of a number"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$\\frac{x}{2}$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Total</td>
        <td class="px-4 py-2">Sum of quantities</td>
        <td class="px-4 py-2">"Total of two numbers is 10"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$x+y=10$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Difference</td>
        <td class="px-4 py-2">Subtraction result</td>
        <td class="px-4 py-2">"Difference between two numbers is 4"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$x-y=4$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Sum</td>
        <td class="px-4 py-2">Addition of quantities</td>
        <td class="px-4 py-2">"Sum of two numbers is 15"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$x+y=15$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Product</td>
        <td class="px-4 py-2">Multiplication</td>
        <td class="px-4 py-2">"Product of two numbers is 24"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$xy=24$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Quotient</td>
        <td class="px-4 py-2">Division</td>
        <td class="px-4 py-2">"Quotient of a number divided by 2 is 6"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$\\frac{x}{2}=6$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Ratio</td>
        <td class="px-4 py-2">Comparison by division</td>
        <td class="px-4 py-2">"Ratio of apples to oranges is 3:2"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$\\frac{x}{y}=\\frac{3}{2}$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Per</td>
        <td class="px-4 py-2">Division or rate</td>
        <td class="px-4 py-2">"The cost is $5 per item"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$C = 5x$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">As much as</td>
        <td class="px-4 py-2">Equality</td>
        <td class="px-4 py-2">"x is as much as y"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$x = y$</td>
      </tr>
      <tr class="hover:bg-green-50/50">
        <td class="px-4 py-2 font-bold text-green-700">Twice as many x as y</td>
        <td class="px-4 py-2">Comparison</td>
        <td class="px-4 py-2">"Twice as many old books as new"</td>
        <td class="px-4 py-2 font-mono text-purple-700">$Old = 2 \\times New$</td>
      </tr>
    </tbody>
  </table>
</div>

### Consecutive Numbers Notes

When solving problems involving "consecutive" integers, use these variable setups:

**1. Consecutive Integers**
Integers that follow each other in order (difference is always 1).
- **Pattern:** $x, x+1, x+2, x+3, \\dots$
- **Example:** 4, 5, 6

**2. Consecutive Even Integers**
Even numbers that follow each other (difference is 2).
- **Pattern:** $x, x+2, x+4, x+6, \\dots$ (where $x$ is even)
- **Example:** 4, 6, 8

**3. Consecutive Odd Integers**
Odd numbers that follow each other (difference is also 2).
- **Pattern:** $x, x+2, x+4, x+6, \\dots$ (where $x$ is odd)
- **Example:** 3, 5, 7

**Example Problem:**
Find three consecutive odd integers whose sum is 51.
Equation: $x + (x+2) + (x+4) = 51$
$3x + 6 = 51$
$3x = 45$
$x = 15$
The integers are **15, 17, 19**.`
  },
  {
    id: StaticLessonIds.AnglesParallelLines,
    title: "(angles-parallel lines)",
    description: "Geometry: Triangles, Polygons & Parallel Lines",
    icon: "Ruler",
    course: "GEOMETRY",
    type: "lesson",
    studyNotes: `**Mastering Angles and Parallel Lines**

**1. Parallel Lines Cut by a Transversal**
When two parallel lines ($l \\parallel m$) are intersected by a transversal line $t$:
*   **Alternate Interior Angles:** Are equal ($a = b$).
*   **Corresponding Angles:** Are equal ($c = d$).
*   **Consecutive Interior Angles:** Add up to $180^\\circ$ ($e + f = 180^\\circ$).
*   **Vertical Angles:** Are opposite and equal ($g = h$).

**2. Triangle Properties**
*   **Sum of Interior Angles:** The sum of angles in any triangle is always $180^\\circ$. ($A + B + C = 180^\\circ$)
*   **Exterior Angle Theorem:** An exterior angle of a triangle is equal to the sum of the two opposite interior angles. ($Ext = A + B$)
*   **Isosceles Triangle:** If two sides are equal, the angles opposite those sides are equal.

**3. Polygons**
*   **Sum of Interior Angles:** For an $n$-sided polygon, Sum $= (n-2) \\times 180^\\circ$.
*   **Regular Polygon:** Each interior angle $= \\frac{(n-2) \\times 180}{n}$.
*   **Sum of Exterior Angles:** Always $360^\\circ$ for any convex polygon.

**4. Linear Pairs & Complementary/Supplementary**
*   **Supplementary:** Angles add up to $180^\\circ$ (Straight line).
*   **Complementary:** Angles add up to $90^\\circ$ (Right angle).`
  },
  {
    id: StaticLessonIds.AreaPerimeter,
    title: "Area perimeter for ( square, rectangle ,triangle ,,rhombus.....etc )",
    description: "Geometry: Area and Perimeter Formulas & Applications",
    icon: "Square",
    course: "GEOMETRY",
    type: "lesson",
    studyNotes: `**Area and Perimeter Formulas**

**1. Square**
- **Area:** $A = s^2$
- **Perimeter:** $P = 4s$
- **Diagonal:** $d = s\sqrt{2}$

**2. Rectangle**
- **Area:** $A = l \times w$
- **Perimeter:** $P = 2(l + w)$
- **Diagonal:** $d = \sqrt{l^2 + w^2}$

**3. Triangle**
- **Area:** $A = \frac{1}{2}bh$
- **Perimeter:** Sum of all sides ($a + b + c$)
- **Heron's Formula:** $A = \sqrt{s(s-a)(s-b)(s-c)}$ where $s = \frac{a+b+c}{2}$

**4. Parallelogram**
- **Area:** $A = bh$
- **Perimeter:** $2(a+b)$

**5. Rhombus**
- **Area:** $A = \frac{1}{2} d_1 d_2$ or $A = bh$
- **Perimeter:** $4s$

**6. Trapezoid**
- **Area:** $A = \frac{1}{2}(b_1 + b_2)h$
- **Perimeter:** Sum of all sides

**7. Circle**
- **Area:** $A = \pi r^2$
- **Circumference:** $C = 2\pi r = \pi d$

**8. Regular Polygon**
- **Area:** $A = \frac{1}{2} a P$ where $a$ is apothem and $P$ is perimeter.

**Important Tip:**
Always ensure units are consistent before calculating area or perimeter!`
  },
  {
    id: StaticLessonIds.Circle1,
    title: "Circle 1",
    description: "Circumference, Area, Arc Length, Sector Area, Circle Equations",
    icon: "Circle",
    course: "GEOMETRY",
    type: "lesson",
    studyNotes: `**Circle 1: Study Notes**

**1. Basic Formulas**
- **Circumference:** $C = 2\\pi r = \\pi d$
- **Area:** $A = \\pi r^2$

**Example:**
Find the area and circumference of a circle with radius 5.
- $C = 2\\pi(5) = 10\\pi$
- $A = \\pi(5^2) = 25\\pi$

**2. Arc Length & Sector Area**
- **Arc Length ($s$):** Portion of the circumference.
  $$s = \\frac{\\theta}{360} \\times 2\\pi r$$ (Degrees)
  $$s = r\\theta$$ (Radians)
- **Sector Area ($A_{sec}$):** Portion of the area.
  $$A_{sec} = \\frac{\\theta}{360} \\times \\pi r^2$$ (Degrees)
  $$A_{sec} = \\frac{1}{2}r^2\\theta$$ (Radians)

**Example:**
Find the arc length and sector area for a central angle of $60^\\circ$ and radius 6.
- Arc Length: $s = \\frac{60}{360} \\times 2\\pi(6) = \\frac{1}{6} \\times 12\\pi = 2\\pi$
- Sector Area: $A_{sec} = \\frac{60}{360} \\times \\pi(6^2) = \\frac{1}{6} \\times 36\\pi = 6\\pi$

**3. Equation of a Circle**
- **Standard Form:** $(x - h)^2 + (y - k)^2 = r^2$
  - Center: $(h, k)$
  - Radius: $r$

**Example:**
$(x - 3)^2 + (y + 2)^2 = 16$
- Center: $(3, -2)$
- Radius: $\\sqrt{16} = 4$

- **General Form:** $x^2 + y^2 + Dx + Ey + F = 0$
  - **Center Rule:** $(\\frac{\ coefficient of  X}{-2}, $\\frac{ \coefficient of  Y}{-2})
  - **Radius Rule:** $r = \\sqrt{h^2 + k^2 - F}$ where $(h,k)$ is the center.

**Example:**
$x^2 + y^2 + 6x - 8y - 11 = 0$
- Coefficient of $x = 6 \\rightarrow h = \\frac{6}{-2} = -3$
- Coefficient of $y = -8 \\rightarrow k = \\frac{-8}{-2} = 4$
- Center: $(-3, 4)$
- Radius: $r = \\sqrt{(-3)^2 + (4)^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$`
  },
  {
    id: StaticLessonIds.GeometryPythagorasSinLaw,
    title: "Pythagoras and sin law",
    description: "SAT Style Practice on Pythagoras and Sine law",
    icon: "Triangle",
    course: "GEOMETRY",
    type: "lesson",
    studyNotes: `**Pythagoras and Sine Law Review**

**1. Pythagorean Theorem**
Applicable to right triangles only.
$a^2 + b^2 = c^2$
where $c$ is the hypotenuse, and $a$ and $b$ are the legs.

**2. Law of Sines**
Applicable to any triangle.
$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$
Used when you know two angles and one side (AAS, ASA) or two sides and a non-included angle (SSA).`
  },
  {
    id: StaticLessonIds.SATOct2025FormA,
    title: "SAT-2025-Oct-Form A",
    description: "Official SAT Practice Test - October 2025 Form A",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT October 2025 Form A - Study Notes**

**Overview**
This exam consists of two math modules covering the four main domains:
1.  **Algebra:** Linear equations, inequalities, systems of equations.
2.  **Advanced Math:** Quadratic equations, exponential functions, polynomials, nonlinear equations.
3.  **Problem-Solving and Data Analysis:** Ratios, percentages, probability, statistics, scatterplots.
4.  **Geometry and Trigonometry:** Area, volume, angles, triangles, circles, trigonometric ratios.

**Key Formulas to Remember:**
- **Slope-Intercept Form:** $y = mx + b$
- **Quadratic Formula:** $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$
- **Vertex of Parabola:** $x = -\\frac{b}{2a}$
- **Circle Equation:** $(x-h)^2 + (y-k)^2 = r^2$
- **Pythagorean Theorem:** $a^2 + b^2 = c^2$
- **SOH CAH TOA:** $\\sin = \\frac{Opp}{Hyp}, \\cos = \\frac{Adj}{Hyp}, \\tan = \\frac{Opp}{Adj}$
- **Exponential Growth/Decay:** $y = a(1 \\pm r)^t$

**Test Strategies:**
- **Desmos is your friend:** Use the built-in calculator for graphing systems and solving equations.
- **Plug in numbers:** If variables are confusing, substitute simple numbers.
- **Work backwards:** Plug in the answer choices to see which one works.
- **Check for extraneous solutions:** Especially with radical and rational equations.`
  },
  {
    id: StaticLessonIds.SATOct2025FormB,
    title: "SAT-2025-Oct-Form B",
    description: "Official SAT Practice Test - October 2025 Form B",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT October 2025 Form B - Study Notes**

**Overview**
This exam consists of two math modules covering the four main domains:
1.  **Algebra:** Linear equations, inequalities, systems of equations.
2.  **Advanced Math:** Quadratic equations, exponential functions, polynomials, nonlinear equations.
3.  **Problem-Solving and Data Analysis:** Ratios, percentages, probability, statistics, scatterplots.
4.  **Geometry and Trigonometry:** Area, volume, angles, triangles, circles, trigonometric ratios.

**Key Concepts:**
- **Linear Functions:** Slope-intercept form ($y=mx+b$), standard form ($Ax+By=C$).
- **Quadratics:** Vertex form ($y=a(x-h)^2+k$), factored form ($y=a(x-r_1)(x-r_2)$).
- **Exponentials:** Growth/Decay ($y=a(1 \pm r)^t$).
- **Geometry:** Similar triangles, circle equations, volume of cylinders/prisms.
- **Trigonometry:** SOH CAH TOA, radians/degrees conversion.

**Test Strategies:**
- **Read Carefully:** Pay attention to units and what the question is asking (e.g., value of $x$ vs value of $2x$).
- **Use Desmos:** Graph equations to find intersections or solutions.
- **Eliminate Options:** Use logic to rule out obviously wrong answers.
- **Check Your Work:** Plug answers back into the original equation.`
  },
  {
    id: StaticLessonIds.SATSep2025FormB,
    title: "SAT-2025-Sep-Form B",
    description: "Official SAT Practice Test - September 2025 Form B",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT September 2025 Form B - Study Notes**

**Overview**
This exam consists of two math modules covering the four main domains:
1.  **Algebra:** Linear equations, inequalities, systems of equations.
2.  **Advanced Math:** Quadratic equations, exponential functions, polynomials, nonlinear equations.
3.  **Problem-Solving and Data Analysis:** Ratios, percentages, probability, statistics, scatterplots.
4.  **Geometry and Trigonometry:** Area, volume, angles, triangles, circles, trigonometric ratios.

**Key Concepts:**
- **Linear Functions:** Slope-intercept form ($y=mx+b$), standard form ($Ax+By=C$).
- **Quadratics:** Vertex form ($y=a(x-h)^2+k$), factored form ($y=a(x-r_1)(x-r_2)$).
- **Exponentials:** Growth/Decay ($y=a(1 \pm r)^t$).
- **Geometry:** Similar triangles, circle equations, volume of cylinders/prisms.
- **Trigonometry:** SOH CAH TOA, radians/degrees conversion.

**Test Strategies:**
- **Read Carefully:** Pay attention to units and what the question is asking (e.g., value of $x$ vs value of $2x$).
- **Use Desmos:** Graph equations to find intersections or solutions.
- **Eliminate Options:** Use logic to rule out obviously wrong answers.
- **Check Your Work:** Plug answers back into the original equation.`
  },
  {
    id: StaticLessonIds.SATAug2025FormB,
    title: "SAT-2025-Aug-Form B",
    description: "Official SAT Practice Test - August 2025 Form B",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT August 2025 Form B - Study Notes**

**Overview**
This exam consists of two math modules covering the four main domains:
1.  **Algebra:** Linear equations, inequalities, systems of equations.
2.  **Advanced Math:** Quadratic equations, exponential functions, polynomials, nonlinear equations.
3.  **Problem-Solving and Data Analysis:** Ratios, percentages, probability, statistics, scatterplots.
4.  **Geometry and Trigonometry:** Area, volume, angles, triangles, circles, trigonometric ratios.

**Key Concepts:**
- **Linear Functions:** Slope-intercept form ($y=mx+b$), standard form ($Ax+By=C$).
- **Quadratics:** Vertex form ($y=a(x-h)^2+k$), factored form ($y=a(x-r_1)(x-r_2)$).
- **Exponentials:** Growth/Decay ($y=a(1 \pm r)^t$).
- **Geometry:** Similar triangles, circle equations, volume of cylinders/prisms.
- **Trigonometry:** SOH CAH TOA, radians/degrees conversion.

**Test Strategies:**
- **Read Carefully:** Pay attention to units and what the question is asking (e.g., value of $x$ vs value of $2x$).
- **Use Desmos:** Graph equations to find intersections or solutions.
- **Eliminate Options:** Use logic to rule out obviously wrong answers.
- **Check Your Work:** Plug answers back into the original equation.`
  },
  {
    id: StaticLessonIds.SATAug2025FormBB,
    title: "SAT-2025-Aug-Form BB",
    description: "Official SAT Practice Test - August 2025 Form BB",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT August 2025 Form BB - Study Notes**

**Overview**
This exam consists of two math modules covering the four main domains:
1.  **Algebra:** Linear equations, inequalities, systems of equations.
2.  **Advanced Math:** Quadratic equations, exponential functions, polynomials, nonlinear equations.
3.  **Problem-Solving and Data Analysis:** Ratios, percentages, probability, statistics, scatterplots.
4.  **Geometry and Trigonometry:** Area, volume, angles, triangles, circles, trigonometric ratios.

**Key Concepts:**
- **Linear Functions:** Slope-intercept form ($y=mx+b$), standard form ($Ax+By=C$).
- **Quadratics:** Vertex form ($y=a(x-h)^2+k$), factored form ($y=a(x-r_1)(x-r_2)$).
- **Exponentials:** Growth/Decay ($y=a(1 \pm r)^t$).
- **Geometry:** Similar triangles, circle equations, volume of cylinders/prisms.
- **Trigonometry:** SOH CAH TOA, radians/degrees conversion.

**Test Strategies:**
- **Read Carefully:** Pay attention to units and what the question is asking (e.g., value of $x$ vs value of $2x$).
- **Use Desmos:** Graph equations to find intersections or solutions.
- **Eliminate Options:** Use logic to rule out obviously wrong answers.
- **Check Your Work:** Plug answers back into the original equation.`
  },
  {
    id: StaticLessonIds.SATJune2025FormA,
    title: "SAT-2025-June-Form A",
    description: "Official SAT Practice Test - June 2025 Form A",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT June 2025 Form A - Study Notes**

**Overview**
This exam consists of two math modules covering the four main domains:
1.  **Algebra:** Linear equations, inequalities, systems of equations.
2.  **Advanced Math:** Quadratic equations, exponential functions, polynomials, nonlinear equations.
3.  **Problem-Solving and Data Analysis:** Ratios, percentages, probability, statistics, scatterplots.
4.  **Geometry and Trigonometry:** Area, volume, angles, triangles, circles, trigonometric ratios.

**Key Concepts:**
- **Linear Functions:** Slope-intercept form ($y=mx+b$), standard form ($Ax+By=C$).
- **Quadratics:** Vertex form ($y=a(x-h)^2+k$), factored form ($y=a(x-r_1)(x-r_2)$).
- **Exponentials:** Growth/Decay ($y=a(1 \pm r)^t$).
- **Geometry:** Similar triangles, circle equations, volume of cylinders/prisms.
- **Trigonometry:** SOH CAH TOA, radians/degrees conversion.

**Test Strategies:**
- **Read Carefully:** Pay attention to units and what the question is asking (e.g., value of $x$ vs value of $2x$).
- **Use Desmos:** Graph equations to find intersections or solutions.
- **Eliminate Options:** Use logic to rule out obviously wrong answers.
- **Check Your Work:** Plug answers back into the original equation.`
  },
  {
    id: StaticLessonIds.SATJune2025FormB,
    title: "SAT-2025-June-Form B",
    description: "Official SAT Practice Test - June 2025 Form B",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: `**SAT June 2025 Form B - Study Notes**

**Overview**
This exam consists of two math modules covering the four main domains:
1.  **Algebra:** Linear equations, inequalities, systems of equations.
2.  **Advanced Math:** Quadratic equations, exponential functions, polynomials, nonlinear equations.
3.  **Problem-Solving and Data Analysis:** Ratios, percentages, probability, statistics, scatterplots.
4.  **Geometry and Trigonometry:** Area, volume, angles, triangles, circles, trigonometric ratios.

**Key Concepts:**
- **Linear Functions:** Slope-intercept form ($y=mx+b$), standard form ($Ax+By=C$).
- **Quadratics:** Vertex form ($y=a(x-h)^2+k$), factored form ($y=a(x-r_1)(x-r_2)$).
- **Exponentials:** Growth/Decay ($y=a(1 \pm r)^t$).
- **Geometry:** Similar triangles, circle equations, volume of cylinders/prisms.
- **Trigonometry:** SOH CAH TOA, radians/degrees conversion.

**Test Strategies:**
- **Read Carefully:** Pay attention to units and what the question is asking (e.g., value of $x$ vs value of $2x$).
- **Use Desmos:** Graph equations to find intersections or solutions.
- **Eliminate Options:** Use logic to rule out obviously wrong answers.
- **Check Your Work:** Plug answers back into the original equation.`
  },
  {
    id: StaticLessonIds.SAT1Exam,
    title: "SAT1-EXAM",
    description: "Official SAT Practice Test #1",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "**SAT Practice Test #1 Review**\n\nThis exam covers the full range of SAT Math topics including Algebra, Advanced Math, Problem-Solving and Data Analysis, and Geometry and Trigonometry."
  },
  {
    id: StaticLessonIds.DSATHardQuestionsPart1,
    title: "dsat-hard questions part1",
    description: "DSAT Math Practice Exam - Hard Questions Part 1",
    icon: "FileText",
    course: "DSAT",
    type: "exam",
    studyNotes: "# DSAT Hard Questions Part 1\n\nThis practice exam contains selected hard DSAT math questions."
  },
  {
    id: StaticLessonIds.EST12026MaySample,
    title: "Est1 2026-May-sample",
    description: "EST1 Practice Exam - May 2026 Sample",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "# EST1 May 2026 Sample Review\n\nThis exam contains 50 questions reflecting the structure and core topics of the EST1 2026 May sample form."
  },
  {
    id: StaticLessonIds.EST12026MayNew,
    title: "EST1-2026-May -new",
    description: "EST1 2026 May New Exam",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "# EST1 2026 May New Exam\n\nGenerated from the PDF."
  },
  {
    id: StaticLessonIds.EST12026May,
    title: "Est1-2026 May",
    description: "EST1 2026 May Exam from PDF",
    icon: "FileText",
    course: "EST1",
    type: "exam",
    studyNotes: "# EST1 2026 May Exam Review\n\nThis exam is generated from the May 2026 PDF."
  },
  {
    id: StaticLessonIds.EST1PythagorasSinLaw,
    title: "Pythagoras& sin law 2026",
    description: "EST1 - Pythagoras Theorem and Sine Law",
    icon: "Sigma",
    course: "EST1",
    type: "lesson",
    studyNotes: "## Pythagoras Theorem & Sine Law (EST1)\n\n### Pythagoras Theorem\nFor any right-angled triangle with legs $a$, $b$, and hypotenuse $c$:\n$$ a^2 + b^2 = c^2 $$\n\n**Special Right Triangles:**\n- **$45^\\circ-45^\\circ-90^\\circ$:** Legs are $x$, hypotenuse is $x\\sqrt{2}$.\n- **$30^\\circ-60^\\circ-90^\\circ$:** Short leg is $x$, long leg is $x\\sqrt{3}$, hypotenuse is $2x$.\n\n### The Sine Law\nFor any triangle with sides $a$, $b$, $c$ and opposite angles $A$, $B$, $C$:\n$$ \\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c} $$\n\n### Solved Example (EST1 Style)\n**Example:** In $\\triangle ABC$, $m\\angle A = 30^\\circ$, $m\\angle B = 45^\\circ$, and $BC = 10$. What is the length of $AC$?\n\n**Solution:**\nUsing the Law of Sines:\n$$ \\frac{\\sin A}{BC} = \\frac{\\sin B}{AC} $$\n$$ \\frac{\\sin(30^\\circ)}{10} = \\frac{\\sin(45^\\circ)}{AC} $$\n$$ \\frac{0.5}{10} = \\frac{\\frac{\\sqrt{2}}{2}}{AC} $$\n$$ 0.5 AC = 10 \\times \\frac{\\sqrt{2}}{2} = 5\\sqrt{2} $$\n$$ AC = 10\\sqrt{2} $$"
  }
];

const DELETED_IDS = new Set(["dsat_custom_1776268459582","dsat_custom_1782818565522","dsat_custom_1782818566189","est1_2022_june_exam","est1_2022_march_exam","est1_2025_custom","est1_2025_form3","est1_2025_form5","est1_2025_form6","est1_2026_jan","est1_2026_may","est1_custom_1782814097985","est1_custom_1782814099360","est1_custom_1782814099848","est1_custom_1782814100060","est1_custom_1782814100270","est1_ex1","est1_ex2","est1_ex3","est1_linear_equation_part1","est1_new_exam","est1_percentage","est2_custom_1784471462112","geometry_custom_1771470921166","geometry_custom_1772859262897","geometry_custom_1776987139850","sat_2025_dec","sat_2025_dec_form_c","sat_2025_march_form_b","sat_2025_nov1","sat_circle_mastery","sat_ex1","sat_ex10","sat_ex3","sat_ex4","sat_ex5","sat_ex6","sat_ex7","sat_ex8","sat_ex9","sat_pythagoras_sin_law","solving_equation_28"]);
export const LESSONS = [
  ..._LESSONS.filter(l => !DELETED_IDS.has(l.id) && !DELETED_IDS.has(l.id + '_exam')),
  ...EST1_OFFICIAL_LESSONS,
];
