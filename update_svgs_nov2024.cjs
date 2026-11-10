const fs = require('fs');

const file = "src/data/questions_sat_2024_nov_form_a.ts";
let content = fs.readFileSync(file, "utf8");

let start = content.indexOf(`export const SAT_NOV_2024_FORM_A_SET: Question[] = [`);
let endStr = "];\n";
let end = content.lastIndexOf(endStr);
let arrStr = content.substring(start + 51, end + 1);
let arr = JSON.parse(arrStr);

arr[0].svg = `<svg width="200" height="200" viewBox="-10 -10 20 20" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#ccc" stroke-width="0.2">
    <line x1="-10" y1="-8" x2="10" y2="-8" /><line x1="-10" y1="-6" x2="10" y2="-6" /><line x1="-10" y1="-4" x2="10" y2="-4" /><line x1="-10" y1="-2" x2="10" y2="-2" /><line x1="-10" y1="2" x2="10" y2="2" /><line x1="-10" y1="4" x2="10" y2="4" /><line x1="-10" y1="6" x2="10" y2="6" /><line x1="-10" y1="8" x2="10" y2="8" />
    <line x1="-8" y1="-10" x2="-8" y2="10" /><line x1="-6" y1="-10" x2="-6" y2="10" /><line x1="-4" y1="-10" x2="-4" y2="10" /><line x1="-2" y1="-10" x2="-2" y2="10" /><line x1="2" y1="-10" x2="2" y2="10" /><line x1="4" y1="-10" x2="4" y2="10" /><line x1="6" y1="-10" x2="6" y2="10" /><line x1="8" y1="-10" x2="8" y2="10" />
  </g>
  <line x1="-10" y1="0" x2="10" y2="0" stroke="black" stroke-width="0.5" />
  <line x1="0" y1="-10" x2="0" y2="10" stroke="black" stroke-width="0.5" />
  <line x1="-7" y1="-10" x2="10" y2="7" stroke="blue" stroke-width="0.5" />
</svg>`;

arr[1].svg = `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="20" x2="180" y2="130" stroke="black" stroke-width="2" />
  <line x1="20" y1="130" x2="180" y2="20" stroke="black" stroke-width="2" />
  <text x="100" y="60" font-size="14" text-anchor="middle">r°</text>
  <text x="100" y="105" font-size="14" text-anchor="middle">s°</text>
  <path d="M 90 65 Q 100 80 110 65" fill="none" stroke="black" />
  <path d="M 90 85 Q 100 70 110 85" fill="none" stroke="black" />
</svg>`;

arr[8].svg = `<svg width="200" height="200" viewBox="-2 -2 10 14" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#ccc" stroke-width="0.2">
    <line x1="-2" y1="2" x2="10" y2="2" /> <line x1="-2" y1="4" x2="10" y2="4" /> <line x1="-2" y1="6" x2="10" y2="6" /> <line x1="-2" y1="8" x2="10" y2="8" /> <line x1="-2" y1="10" x2="10" y2="10" /> <line x1="-2" y1="12" x2="10" y2="12" />
    <line x1="2" y1="-2" x2="2" y2="14" /> <line x1="4" y1="-2" x2="4" y2="14" /> <line x1="6" y1="-2" x2="6" y2="14" /> <line x1="8" y1="-2" x2="8" y2="14" />
  </g>
  <line x1="-2" y1="0" x2="10" y2="0" stroke="black" stroke-width="0.5" transform="scale(1, -1) translate(0, -12)" />
  <line x1="0" y1="-2" x2="0" y2="14" stroke="black" stroke-width="0.5" />
  <g transform="translate(0, 12) scale(1, -1)">
    <line x1="0" y1="0" x2="6" y2="10.5" stroke="blue" stroke-width="0.5" />
    <path d="M 0 0 Q 3 2 4 7 T 5.5 13" fill="none" stroke="red" stroke-width="0.5" />
  </g>
</svg>`;

arr[41].svg = `<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="10,90 190,90 190,10" fill="none" stroke="black" stroke-width="2" />
  <polyline points="180,90 180,80 190,80" fill="none" stroke="black" stroke-width="1" />
  <text x="5" y="95" font-size="14">Q</text>
  <text x="195" y="95" font-size="14">R</text>
  <text x="195" y="10" font-size="14">S</text>
  <text x="100" y="105" font-size="14">17</text>
</svg>`;

if (!arr[16].question.includes("| x | g(x) |")) {
  arr[16].question = arr[16].question.replace("the table shows", "the table\\n| x | g(x) |\\n|---|---|\\n| 1 | 34 |\\n| 2 | 31 |\\n| 3 | 28 |\\n| 4 | 25 |\\n\\nshows");
}

const newContent = `import { Question } from "../../types";\n\nexport const SAT_NOV_2024_FORM_A_SET: Question[] = ${JSON.stringify(arr, null, 2)};\n`;
fs.writeFileSync(file, newContent);
console.log("SVGs and Tables successfully updated!");
