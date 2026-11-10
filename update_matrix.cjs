const fs = require('fs');

let content = fs.readFileSync('constants.tsx', 'utf8');

const startStr = 'id: StaticLessonIds.EST2Trigonometry,';
const startIndex = content.indexOf(startStr);

if (startIndex === -1) {
  console.log('Could not find the target block');
  process.exit(1);
}

// Find the start of the object `{`
let objStartIndex = startIndex;
while (content[objStartIndex] !== '{') {
  objStartIndex--;
}

const detailedNotes = `## EST2 Matrices: Complete Study Guide

Matrices are rectangular arrays of numbers arranged in rows and columns. They are a fundamental topic in EST2 math, covering dimensions, elements, arithmetic, and multiplication.

### 1. Dimensions of a Matrix
The dimensions (or size) of a matrix are defined by the number of its rows and columns, written as **rows $\\times$ columns** (read as "rows by columns").
- A matrix with $m$ rows and $n$ columns has dimensions $m \\times n$.
- Example: $A = \\begin{bmatrix} 2 & -1 & 3 \\\\ 0 & 4 & 5 \\end{bmatrix}$ has $2$ rows and $3$ columns, so it is a $2 \\times 3$ matrix.

### 2. Matrix Elements
An individual number in a matrix is called an element or entry. It is denoted by a lowercase letter with subscripts for its row and column.
- $a_{ij}$ refers to the element in row $i$ and column $j$.
- In the matrix $A$ above:
  - $a_{12}$ (row 1, col 2) is $-1$.
  - $a_{23}$ (row 2, col 3) is $5$.

---

### 3. Matrix Addition and Subtraction
**Rule**: You can only add or subtract matrices if they have the **exact same dimensions**.
**How**: Add or subtract the corresponding elements.

*Example:*
$\\begin{bmatrix} 1 & 3 \\\\ -2 & 4 \\end{bmatrix} + \\begin{bmatrix} 0 & 5 \\\\ 2 & -1 \\end{bmatrix} = \\begin{bmatrix} 1+0 & 3+5 \\\\ -2+2 & 4+(-1) \\end{bmatrix} = \\begin{bmatrix} 1 & 8 \\\\ 0 & 3 \\end{bmatrix}$

---

### 4. Scalar Multiplication
**Rule**: Multiply every element in the matrix by the given scalar (number).

*Example:*
$3 \\begin{bmatrix} -3 & 4 \\\\ 1 & -2 \\end{bmatrix} = \\begin{bmatrix} 3(-3) & 3(4) \\\\ 3(1) & 3(-2) \\end{bmatrix} = \\begin{bmatrix} -9 & 12 \\\\ 3 & -6 \\end{bmatrix}$

---

### 5. Matrix Multiplication
**Rule for Definition**: The product of two matrices $AB$ is only defined if the **number of columns in $A$ equals the number of rows in $B$**.
- If $A$ is $m \\times n$ and $B$ is $n \\times p$, then $AB$ is defined.
- The resulting matrix will have dimensions $m \\times p$ (the outer numbers).
- **Important**: Matrix multiplication is *not* commutative ($AB \\neq BA$ in most cases).

**How to Multiply**: Take the dot product of rows from the first matrix and columns from the second matrix.
*Example (Product of $2 \\times 2$ matrices):*
$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\begin{bmatrix} e & f \\\\ g & h \\end{bmatrix} = \\begin{bmatrix} ae+bg & af+bh \\\\ ce+dg & cf+dh \\end{bmatrix}$

---

### 6. The Identity Matrix
The identity matrix $I$ is a square matrix with $1$s on the main diagonal (top-left to bottom-right) and $0$s everywhere else.
- $2 \\times 2$ Identity: $I_2 = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$
- Property: Multiplying any matrix $A$ by the identity matrix yields $A$. ($AI = IA = A$).

---

### EST2 Solved Examples

**Example 1: Undefined Operations**
*Question:* Let $A$ be a $2 \\times 3$ matrix and $B$ be a $2 \\times 3$ matrix. Which of the following is UNDEFINED? (A) $A+B$, (B) $3A-B$, (C) $AB$.
*Solution:* $A$ and $B$ have the same dimensions, so addition and subtraction are defined. For $AB$, the columns of $A$ (which is $3$) must equal the rows of $B$ (which is $2$). Since $3 \\neq 2$, $AB$ is undefined.

**Example 2: Elements and Equations**
*Question:* If $\\begin{bmatrix} x & 3 \\\\ -1 & 4 \\end{bmatrix} + \\begin{bmatrix} x & y \\\\ 2 & 6 \\end{bmatrix} = \\begin{bmatrix} 2x & 5 \\\\ 1 & 10 \\end{bmatrix}$, find $y$.
*Solution:* Set up the equation using the corresponding elements in the first row, second column:
$3 + y = 5 \\implies y = 2$.

**Example 3: Matrix Multiplication**
*Question:* Find $\\begin{bmatrix} -1 & 2 \\\\ 3 & 0 \\end{bmatrix} \\begin{bmatrix} 2 & 1 \\\\ 4 & -2 \\end{bmatrix}$.
*Solution:* 
- Top-Left: $(-1)(2) + (2)(4) = -2 + 8 = 6$
- Top-Right: $(-1)(1) + (2)(-2) = -1 - 4 = -5$
- Bottom-Left: $(3)(2) + (0)(4) = 6 + 0 = 6$
- Bottom-Right: $(3)(1) + (0)(-2) = 3 + 0 = 3$
Result: $\\begin{bmatrix} 6 & -5 \\\\ 6 & 3 \\end{bmatrix}$`;

const newMatrixLesson = `{
    id: StaticLessonIds.EST2Matrix,
    title: "Matrix",
    description: "EST2 Math: Matrix Dimensions, Elements, Operations, and Multiplication",
    icon: "Grid",
    course: "EST2",
    type: "lesson",
    studyNotes: \`${detailedNotes.replace(/\\/g, '\\\\').replace(/\$/g, '\\$').replace(/`/g, '\\`')}\`
  },
  `;

// Inject before EST2Trigonometry
content = content.substring(0, objStartIndex) + newMatrixLesson + content.substring(objStartIndex);

fs.writeFileSync('constants.tsx', content);
console.log("Successfully added matrix lesson to constants.tsx");
