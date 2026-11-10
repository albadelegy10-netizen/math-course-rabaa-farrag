import fs from 'fs';
import { execSync } from 'child_process';

const files = [
  'src/data/questions_est1_2021_april_part1.ts',
  'src/data/questions_est1_2021_april_part2.ts',
  'src/data/questions_est1_2021_april_part3.ts'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Regex to match id and svg block
  // id: "est1_2021_april_X", ... svg: `<svg ... </svg>`,
  const regex = /id:\s*"([^"]+)"[\s\S]*?svg:\s*`([\s\S]*?)`,/g;
  
  let match;
  let replacements = [];
  while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    let svg = match[2];
    
    if (!svg.includes('<svg')) continue; // Skip if it's a table, not an svg
    
    console.log(`Processing SVG for ${id}`);
    fs.writeFileSync(`${id}.svg`, svg, 'utf8');
    
    try {
      execSync(`convert -background white -density 300 ${id}.svg ${id}.png`);
      const b64 = fs.readFileSync(`${id}.png`, 'base64');
      const dataUri = `data:image/png;base64,${b64}`;
      replacements.push({
        matchText: match[0],
        replacementText: match[0].replace(/svg:\s*`[\s\S]*?`,/, `image: "${dataUri}",`)
      });
      changed = true;
    } catch (e) {
      console.error(`Failed to convert ${id}:`, e.message);
    }
  }

  for (const rep of replacements) {
    content = content.replace(rep.matchText, rep.replacementText);
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file} with base64 PNGs`);
  }
}
