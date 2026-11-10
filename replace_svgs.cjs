const fs = require('fs');

const graphs = JSON.parse(fs.readFileSync('generated_graphs.json', 'utf8'));

const files = [
  'src/data/questions_est1_2021_april_part1.ts',
  'src/data/questions_est1_2021_april_part2.ts',
  'src/data/questions_est1_2021_april_part3.ts'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  for (const id of Object.keys(graphs)) {
    const b64 = graphs[id];
    if (!b64) continue;
    
    // Find the question object with this id
    const idStr = `id: "${id}",`;
    if (content.includes(idStr)) {
      console.log(`Found ${id} in ${file}`);
      // Replace svg: `...` with image: "data:image/png;base64,..."
      // Note: SVG string might span multiple lines, so we use regex
      const regex = /svg:\s*`[\s\S]*?`,/g;
      // Wait, we only want to replace it for THIS specific id.
      // So let's find the block from id: "..." to the next },
      const blockRegex = new RegExp(`id:\\s*"${id}"[\\s\\S]*?\\},`, 'g');
      content = content.replace(blockRegex, (match) => {
        return match.replace(/svg:\s*`[\s\S]*?`,/, `image: "${b64}",`);
      });
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
