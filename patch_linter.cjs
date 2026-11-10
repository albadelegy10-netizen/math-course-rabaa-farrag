const fs = require('fs');

// Patch ExamEditor.tsx
const editorFile = '/app/applet/components/ExamEditor.tsx';
let editorCode = fs.readFileSync(editorFile, 'utf-8');
editorCode = editorCode.replace(
    'if (pdfjs.VerbosityLevel) pdfjs.GlobalWorkerOptions.verbosity = pdfjs.VerbosityLevel.ERRORS;',
    '// @ts-ignore\n        if (pdfjs.VerbosityLevel) pdfjs.GlobalWorkerOptions.verbosity = pdfjs.VerbosityLevel.ERRORS;'
);
editorCode = editorCode.replace(
    'else pdfjs.GlobalWorkerOptions.verbosity = 0;',
    '// @ts-ignore\n        else pdfjs.GlobalWorkerOptions.verbosity = 0;'
);
fs.writeFileSync(editorFile, editorCode, 'utf-8');
console.log("ExamEditor.tsx patched.");

// Patch documentGenerator.ts
const docFile = '/app/applet/utils/documentGenerator.ts';
let docCode = fs.readFileSync(docFile, 'utf-8');

// Replace toSuperscript
docCode = docCode.replace(/const toSuperscript = \(str: string\): string => \{[\s\S]*?\n\};\n/g, '');

// Replace toSubscript
docCode = docCode.replace(/const toSubscript = \(str: string\): string => \{[\s\S]*?\n\};\n/g, '');

fs.writeFileSync(docFile, docCode, 'utf-8');
console.log("documentGenerator.ts patched.");
