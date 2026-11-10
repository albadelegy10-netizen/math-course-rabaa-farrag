const fs = require('fs');

let code = fs.readFileSync('lessonService.ts', 'utf-8');

// Replace cleanUndefined({ with JSON.parse(safeStringify(deepSanitize({
code = code.replace(
    /const payload: any = cleanUndefined\(\{/g,
    "const payload: any = JSON.parse(safeStringify(deepSanitize({"
);

code = code.replace(
    /const payload = cleanUndefined\(\{/g,
    "const payload = JSON.parse(safeStringify(deepSanitize({"
);

// We need to close the parentheses. 
// For saveLesson:
code = code.replace(
    /deleted: lesson\.deleted \/\/ Ensure deleted status is synced if changed\n      \}\);/g,
    "deleted: lesson.deleted // Ensure deleted status is synced if changed\n      })));"
);

// For resetLesson:
code = code.replace(
    /deleted: false \/\/ resurrect\n        \}\);/g,
    "deleted: false // resurrect\n        })));"
);

fs.writeFileSync('lessonService.ts', code);
console.log("Patched lessonService.ts");
