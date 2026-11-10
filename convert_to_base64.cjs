const fs = require('fs');

let content = fs.readFileSync('questions_est1_2026_jan.ts', 'utf8');

// We need to find all `svg: \`<svg ... </svg>\`,` and replace them with `imageUrl: "data:image/svg+xml;base64,..."`
// Since the svgs can span multiple lines, we can use a regular expression.

let newContent = content.replace(/svg:\s*`([\s\S]*?)`,/g, (match, svgContent) => {
  const base64 = Buffer.from(svgContent).toString('base64');
  return `imageUrl: "data:image/svg+xml;base64,${base64}",`;
});

fs.writeFileSync('questions_est1_2026_jan.ts', newContent);
console.log("Converted SVGs to base64 imageUrls.");
