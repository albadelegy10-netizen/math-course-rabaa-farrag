# Custom Agent Instructions

The user has explicitly requested the following rules be followed for all future interactions:

1. You will always write math equations and expressions in mathematical form (LaTeX) in the code and app UI to increase readability.
2. When creating downloaded exams (Word/PDF), write all equations (math expressions) in mathematical form (in LaTeX) to increase readability, and delete all unnecessary empty lines.
3. Convert images, graphs, and tables into base64 strings when extracting or processing them.
4. **DO NOT RUN SCRIPTS TO OVERWRITE FIRESTORE**: Never run scripts like `upload_to_firebase.ts` or `upload_est1_2025_form1.ts` to push static questions directly to Firebase. This overwrites the user's manual edits and images in the database. Instead, just update `questions.ts` (STATIC_QUESTIONS) and `constants.tsx` (LESSONS). The app's `lessonService.ts` will merge these automatically at runtime.
5. **Table Formatting**: When generating questions that contain tables, ALWAYS use the following HTML structure with these exact Tailwind classes:
`<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">...</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">...</td></tr>
  </tbody>
</table>`
6. **Question Categories for Lessons**: When generating or adding questions to a specific lesson (not an exam), ALWAYS set the `category` property of each question to match the lesson's name or primary topic exactly (e.g., if adding to a "Ratio" lesson, set `category: "Ratio"`).
7. **Study Guides for Lessons**: Whenever generating or adding a new lesson (rather than a full exam), ALWAYS include a comprehensive study guide with solved examples. The style of the examples should match the exam style corresponding to the course name (e.g., EST1, EST2, or SAT math exam style).
8. **PDF Processing Completeness**: When extracting questions from a provided PDF document, ALWAYS ensure you read and process EVERY single question present in the document. Do not truncate the extraction process or arbitrarily limit the number of questions.
9. **Standard SAT Graph Styling & Grid Alignment**: When generating or drawing coordinate graphs in questions (SVG or Base64/Python), ALWAYS use standard College Board / SAT graph styling:
   - **Exact Grid Alignment**: Render complete, subtle grid lines for every unit interval across the entire coordinate plane.
   - **Clean Black Axes & Arrowheads**: Use black axis lines (`#000000`) with arrowheads at the ends, italic $x$ and $y$ axis labels, and an italic origin label $O$.
   - **Tick Marks & Labels**: Include explicit tick marks and numeric labels along both axes.
   - **Matching Black Line Weights**: Draw all function graphs, curves, and lines using clean black strokes (`#000000`).
10. **Question Categories for Exams (DO NOT SET CATEGORIES FOR EXAMS)**: For ALL exams in this app (e.g., EST1, EST2, SAT, ACT exams or practice forms), NEVER add a category for questions. ALWAYS leave the `category` property empty (i.e. `category: ""`) until the user explicitly specifies and adds the category name for each question in the exam.
