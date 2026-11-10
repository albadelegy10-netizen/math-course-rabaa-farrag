const fs = require('fs');
let code = fs.readFileSync('App.tsx', 'utf8');
code = code.replace(/setIsSynced\(true\);\n        \}\n    \};/, "setIsSynced(true);\n    };");
fs.writeFileSync('App.tsx', code);
