const fs = require('fs');

// Patch types.ts
let typesCode = fs.readFileSync('/app/applet/types.ts', 'utf-8');
if (!typesCode.includes("Similarity: 'geometry_similarity'")) {
    typesCode = typesCode.replace(
        "GeometryPythagorasSinLaw: 'geometry_pythagoras_sin_law',",
        "GeometryPythagorasSinLaw: 'geometry_pythagoras_sin_law',\n  Similarity: 'geometry_similarity',"
    );
    fs.writeFileSync('/app/applet/types.ts', typesCode, 'utf-8');
    console.log("types.ts patched.");
}

// Patch constants.tsx
let constantsCode = fs.readFileSync('/app/applet/constants.tsx', 'utf-8');
if (!constantsCode.includes("StaticLessonIds.Similarity")) {
    const lessonDef = `
  {
    id: StaticLessonIds.Similarity,
    title: "Similarity",
    description: "Geometry: Similar Triangles and Figures",
    icon: "Triangle",
    course: "GEOMETRY",
    type: "lesson",
    studyNotes: "## Similarity\\n\\nTwo triangles are similar if their corresponding angles are congruent and their corresponding sides are proportional.\\n\\n**Similarity Theorems:**\\n- **AA (Angle-Angle):** Two angles of one triangle are congruent to two angles of another.\\n- **SSS (Side-Side-Side):** All three pairs of corresponding sides are proportional.\\n- **SAS (Side-Angle-Side):** Two pairs of corresponding sides are proportional and the included angles are congruent.\\n\\n**Properties:**\\n- Ratio of perimeters = Ratio of corresponding sides.\\n- Ratio of areas = (Ratio of corresponding sides)^2."
  },`;
    const replaceTarget = "export const LESSONS: Lesson[] = [";
    constantsCode = constantsCode.replace(
        replaceTarget,
        replaceTarget + lessonDef
    );
    fs.writeFileSync('/app/applet/constants.tsx', constantsCode, 'utf-8');
    console.log("constants.tsx patched.");
}

// Patch questions.ts
let questionsCode = fs.readFileSync('/app/applet/questions.ts', 'utf-8');
if (!questionsCode.includes("GEOMETRY_SIMILARITY")) {
    questionsCode = "import { GEOMETRY_SIMILARITY } from './src/data/questions_similarity';\n" + questionsCode;
    questionsCode = questionsCode.replace(
        "export const STATIC_QUESTIONS: Record<LessonId, Question[]> = {",
        "export const STATIC_QUESTIONS: Record<LessonId, Question[]> = {\n  [StaticLessonIds.Similarity]: GEOMETRY_SIMILARITY,"
    );
    fs.writeFileSync('/app/applet/questions.ts', questionsCode, 'utf-8');
    console.log("questions.ts patched.");
}
