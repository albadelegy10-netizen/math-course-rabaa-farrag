const fs = require('fs');
const path = require('path');

function processFile(p) {
    let content = fs.readFileSync(p, 'utf8');
    let modified = false;

    // Find options: [], \s* correctAnswer: "..." 
    // And replace correctAnswer with answerText
    
    // A regex to find grid-ins:
    // options: \s*\[\s*\],?[\s\S]*?correctAnswer:\s*(["'][^"']+["'])
    content = content.replace(/options:\s*\[\s*\],([\s\S]*?)correctAnswer:\s*(["'][^"']+["'])/g, (match, middle, answerStr) => {
        modified = true;
        return `options: [],${middle}answerText: ${answerStr}`;
    });

    if (modified) {
        fs.writeFileSync(p, content, 'utf8');
        console.log('Fixed Grid-In:', p);
    }
}

function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      if (!p.includes('node_modules') && !p.includes('.git') && !p.includes('.vite')) walk(p);
    } else if (p.endsWith('.ts')) {
      processFile(p);
    }
  });
}

walk('.');
