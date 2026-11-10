const fs = require('fs');
const file = '/app/applet/index.html';
let code = fs.readFileSync(file, 'utf-8');

if (!code.includes('katex.min.css')) {
    code = code.replace('</head>', '    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />\n</head>');
    fs.writeFileSync(file, code, 'utf-8');
    console.log("index.html patched.");
} else {
    console.log("KaTeX CSS already present.");
}
