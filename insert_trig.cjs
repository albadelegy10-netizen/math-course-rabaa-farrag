const fs = require('fs');

let content = fs.readFileSync('constants.tsx', 'utf8');
const trigLesson = `
  {
    id: StaticLessonIds.EST2Trigonometry,
    title: "trigonometry",
    description: "EST2 Math: Trigonometry, SOH CAH TOA, Unit Circle, Sine and Cosine Laws, and Trigonometric Identities",
    icon: "Activity",
    course: "EST2",
    type: "lesson",
    studyNotes: "## Trigonometry\\n\\nTrigonometry is a branch of mathematics that studies relationships between side lengths and angles of triangles.\\n\\n### Key Concepts\\n- **SOH CAH TOA**: $\\\\sin \\\\theta = \\\\frac{\\\\text{Opposite}}{\\\\text{Hypotenuse}}$, $\\\\cos \\\\theta = \\\\frac{\\\\text{Adjacent}}{\\\\text{Hypotenuse}}$, $\\\\tan \\\\theta = \\\\frac{\\\\text{Opposite}}{\\\\text{Adjacent}}$\\n- **Unit Circle**: A circle with radius $1$. $\\\\sin \\\\theta = y$-coordinate, $\\\\cos \\\\theta = x$-coordinate.\\n- **Pythagorean Identity**: $\\\\sin^2 \\\\theta + \\\\cos^2 \\\\theta = 1$\\n- **Law of Sines**: $\\\\frac{a}{\\\\sin A} = \\\\frac{b}{\\\\sin B} = \\\\frac{c}{\\\\sin C}$\\n- **Law of Cosines**: $c^2 = a^2 + b^2 - 2ab \\\\cos C$\\n\\n---\\n\\n### Solved Examples\\n\\n**Example 1:**\\nIn a right triangle $ABC$ with right angle at $C$, $\\\\sin A = \\\\frac{3}{5}$. Find $\\\\cos B$.\\n\\n*Solution:*\\nSince $A$ and $B$ are complementary angles in a right triangle ($A + B = 90^\\\\circ$), $\\\\cos B = \\\\sin(90^\\\\circ - B) = \\\\sin A$. Thus, $\\\\cos B = \\\\frac{3}{5}$.\\n\\n**Example 2:**\\nFind the area of triangle $PQR$ if $p = 8$, $q = 10$, and $\\\\angle R = 30^\\\\circ$.\\n\\n*Solution:*\\nThe area of a triangle can be found using the sine formula: $\\\\text{Area} = \\\\frac{1}{2}pq \\\\sin R$.\\n$\\\\text{Area} = \\\\frac{1}{2}(8)(10) \\\\sin 30^\\\\circ = 40(0.5) = 20$."
  },`;

content = content.replace("  {\n    id: StaticLessonIds.Similarity,", trigLesson + "\n  {\n    id: StaticLessonIds.Similarity,");

fs.writeFileSync('constants.tsx', content);
