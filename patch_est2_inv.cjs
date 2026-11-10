const fs = require('fs');

// Patch types.ts
let typesCode = fs.readFileSync('/app/applet/types.ts', 'utf-8');
if (!typesCode.includes("EST2InverseFunction1: 'est2_inverse_function1'")) {
    typesCode = typesCode.replace(
        "Similarity: 'geometry_similarity',",
        "Similarity: 'geometry_similarity',\n  EST2InverseFunction1: 'est2_inverse_function1',"
    );
    fs.writeFileSync('/app/applet/types.ts', typesCode, 'utf-8');
    console.log("types.ts patched.");
}

// Patch constants.tsx
let constantsCode = fs.readFileSync('/app/applet/constants.tsx', 'utf-8');
if (!constantsCode.includes("StaticLessonIds.EST2InverseFunction1")) {
    const lessonDef = `
  {
    id: StaticLessonIds.EST2InverseFunction1,
    title: "Inverse Function 1",
    description: "EST2 Math: Finding and Evaluating Inverse Functions",
    icon: "FunctionSquare",
    course: "EST2",
    type: "lesson",
    studyNotes: "## Inverse Function 1\\n\\nAn **inverse function** reverses the operation of the original function. If a function $f$ maps $x$ to $y$, then its inverse $f^{-1}$ maps $y$ back to $x$.\\n\\n### Key Properties\\n- $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$\\n- The graph of $f^{-1}(x)$ is a reflection of the graph of $f(x)$ across the line $y = x$.\\n- A function has an inverse function if and only if it is **one-to-one** (passes the Horizontal Line Test).\\n- Domain of $f(x)$ = Range of $f^{-1}(x)$\\n- Range of $f(x)$ = Domain of $f^{-1}(x)$\\n\\n### How to Find the Inverse of a Function\\n1. Replace $f(x)$ with $y$.\\n2. Swap $x$ and $y$.\\n3. Solve for $y$.\\n4. Replace $y$ with $f^{-1}(x)$.\\n\\n---\\n\\n### Solved Examples\\n\\n**Example 1:**\\nFind the inverse of $f(x) = 2x - 5$.\\n\\n*Solution:*\\n1. $y = 2x - 5$\\n2. Swap $x$ and $y$: $x = 2y - 5$\\n3. Solve for $y$:\\n   $x + 5 = 2y$\\n   $y = \\\\frac{x + 5}{2}$\\n4. $f^{-1}(x) = \\\\frac{x + 5}{2}$\\n\\n**Example 2:**\\nFind the inverse of $g(x) = \\\\frac{3x + 1}{x - 2}$.\\n\\n*Solution:*\\n1. $y = \\\\frac{3x + 1}{x - 2}$\\n2. Swap $x$ and $y$: $x = \\\\frac{3y + 1}{y - 2}$\\n3. Solve for $y$:\\n   $x(y - 2) = 3y + 1$\\n   $xy - 2x = 3y + 1$\\n   $xy - 3y = 2x + 1$\\n   $y(x - 3) = 2x + 1$\\n   $y = \\\\frac{2x + 1}{x - 3}$\\n4. $g^{-1}(x) = \\\\frac{2x + 1}{x - 3}$"
  },`;
    const replaceTarget = "export const LESSONS: Lesson[] = [";
    constantsCode = constantsCode.replace(
        replaceTarget,
        replaceTarget + lessonDef
    );
    // Add import for FunctionSquare if it's not there, but let's just use an existing one to be safe. "Activity" or "BookOpen" is usually available, or we can see what's in constants.tsx.
    // I'll replace FunctionSquare with Activity to be safe.
    constantsCode = constantsCode.replace('"FunctionSquare"', '"Activity"');
    fs.writeFileSync('/app/applet/constants.tsx', constantsCode, 'utf-8');
    console.log("constants.tsx patched.");
}

// Patch questions.ts
let questionsCode = fs.readFileSync('/app/applet/questions.ts', 'utf-8');
if (!questionsCode.includes("EST2_INVERSE_FUNCTION1_SET")) {
    questionsCode = "import { EST2_INVERSE_FUNCTION1_SET } from './src/data/questions_est2_inverse_function1';\n" + questionsCode;
    questionsCode = questionsCode.replace(
        "export const STATIC_QUESTIONS: Record<LessonId, Question[]> = {",
        "export const STATIC_QUESTIONS: Record<LessonId, Question[]> = {\n  [StaticLessonIds.EST2InverseFunction1]: EST2_INVERSE_FUNCTION1_SET,"
    );
    fs.writeFileSync('/app/applet/questions.ts', questionsCode, 'utf-8');
    console.log("questions.ts patched.");
}
