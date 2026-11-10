const fs = require('fs');
const file = '/app/applet/components/ExamEditor.tsx';
let code = fs.readFileSync(file, 'utf-8');

if (code.includes('pdfjs.GlobalWorkerOptions.workerSrc')) {
    code = code.replace(
        'pdfjs.GlobalWorkerOptions.workerSrc = `https://esm.sh/pdfjs-dist@${version}/build/pdf.worker.min.mjs`;',
        'pdfjs.GlobalWorkerOptions.workerSrc = `https://esm.sh/pdfjs-dist@${version}/build/pdf.worker.min.mjs`;\n        // Disable pdf.js warnings to prevent logging circular objects which crash the AI Studio proxy\n        if (pdfjs.VerbosityLevel) pdfjs.GlobalWorkerOptions.verbosity = pdfjs.VerbosityLevel.ERRORS;\n        else pdfjs.GlobalWorkerOptions.verbosity = 0;'
    );
    fs.writeFileSync(file, code, 'utf-8');
    console.log("ExamEditor.tsx patched for pdf.js verbosity.");
} else {
    console.log("Could not find insertion point.");
}
