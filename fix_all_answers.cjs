const fs = require('fs');
const path = require('path');

function processFile(p) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Quick check if there are string correctAnswers
    if (!content.match(/correctAnswer:\s*["'][^"']+["']/)) {
        return;
    }

    // A simple regex approach won't work well if there are multiple, so we will use evaluating or regex accurately
    // Actually, finding `options: [ ... ]` and `correctAnswer: "..."` is safer. Let's do a naive replace:
    
    // We'll extract arrays of options and correctAnswers.
    // Instead of doing it with regex that might fail, lets use node's require for .ts files (since we have ts-node or esbuild).
    // Actually, simple regex matching block by block is easier since they are formatted consistently.
    
    let modified = false;
    const blocks = content.split('correctAnswer:');
    
    for (let i = 1; i < blocks.length; i++) {
        // Look backwards in blocks[i-1] for options: [ "...", ... ]
        const optionsMatch = blocks[i-1].match(/options:\s*\[([\s\S]*?)\]/);
        if (optionsMatch) {
            const optionsStr = optionsMatch[1];
            // Split options by looking for strings
            const optionMatches = [...optionsStr.matchAll(/["'](.*?)["']/g)];
            const optionsArray = optionMatches.map(m => m[1]);
            
            // Look forward in blocks[i] for the string answer
            const answerMatch = blocks[i].match(/^\s*["']([^"']+)["']/);
            if (answerMatch) {
                const answerStr = answerMatch[1];
                let idx = optionsArray.indexOf(answerStr);
                
                // fallback if escaped differently
                if(idx === -1) {
                    for(let j=0; j<optionsArray.length; j++) {
                        if(optionsArray[j].trim() === answerStr.trim()) {
                            idx = j;
                            break;
                        }
                    }
                }
                
                if (idx !== -1) {
                    blocks[i] = blocks[i].replace(/^\s*["'][^"']+["']/, ` ${idx}`);
                    modified = true;
                }
            }
        }
    }
    
    if (modified) {
        fs.writeFileSync(p, blocks.join('correctAnswer:'), 'utf8');
        console.log('Fixed:', p);
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
