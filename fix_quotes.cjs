const fs = require('fs');

function fixFile(path) {
    let content = fs.readFileSync(path, 'utf8');
    
    // We need to replace unescaped quotes inside string properties like "html", "svg", "question"
    // Wait, the files export an array of objects. It's actually easier: 
    // it's just invalid TS now. We can match string values that start with: 
    // "html": "<
    // and ends with >",
    
    // First, let's use a very targeted regex to fix class="..."
    content = content.replace(/class="([^"]+)"/g, 'class=\\"$1\\"');
    
    // Next, fix SVG attributes: width="..."
    // we can replace any attribute="value" inside <... >
    content = content.replace(/([a-zA-Z0-9_-]+)="([^"]*)"/g, '$1=\\"$2\\"');
    
    // We should also look at other things like \n which the tool might have written as literal newline, 
    // but the file has literal \n if I look at "question": "***\n\n". 
    // Wait, if it had literal newline, it would break string. But they are \n.
    // Let's check if there are actual syntax errors left after this.
    
    fs.writeFileSync(path, content);
}

fixFile('src/data/questions_est1_2021_aug_part3.ts');
fixFile('src/data/questions_est1_2021_aug_part4.ts');
console.log("Files fixed.");
