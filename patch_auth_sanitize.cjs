const fs = require('fs');

let code = fs.readFileSync('authService.ts', 'utf-8');

code = code.replace(
    /const sanitize = \(obj: any\): any => \{\n  try \{\n    return deepSanitize\(obj\);\n  \} catch \(e\) \{\n    return \{\};\n  \}\n\};/g,
    "const sanitize = (obj: any): any => {\n  try {\n    return JSON.parse(safeStringify(deepCleanForFirebase(obj)));\n  } catch (e) {\n    return {};\n  }\n};"
);

fs.writeFileSync('authService.ts', code);
console.log("Patched sanitize in authService.ts");
