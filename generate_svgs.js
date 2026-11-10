const fs = require('fs');

const barGraphSvg = `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="white"/>
  <line x1="50" y1="250" x2="350" y2="250" stroke="black" stroke-width="2"/>
  <line x1="50" y1="50" x2="50" y2="250" stroke="black" stroke-width="2"/>
  <text x="200" y="290" font-family="Arial" font-size="14" text-anchor="middle">Activity</text>
  <text x="20" y="150" font-family="Arial" font-size="14" text-anchor="middle" transform="rotate(-90 20 150)">Number of students</text>
  
  <text x="40" y="255" font-family="Arial" font-size="12" text-anchor="end">0</text>
  <text x="40" y="215" font-family="Arial" font-size="12" text-anchor="end">10</text>
  <text x="40" y="175" font-family="Arial" font-size="12" text-anchor="end">20</text>
  <text x="40" y="135" font-family="Arial" font-size="12" text-anchor="end">30</text>
  <text x="40" y="95" font-family="Arial" font-size="12" text-anchor="end">40</text>
  <text x="40" y="55" font-family="Arial" font-size="12" text-anchor="end">50</text>
  
  <rect x="70" y="130" width="30" height="120" fill="#ccc" stroke="black"/>
  <text x="85" y="270" font-family="Arial" font-size="12" text-anchor="middle">1</text>
  
  <rect x="120" y="90" width="30" height="160" fill="#ccc" stroke="black"/>
  <text x="135" y="270" font-family="Arial" font-size="12" text-anchor="middle">2</text>
  
  <rect x="170" y="94" width="30" height="156" fill="#ccc" stroke="black"/>
  <text x="185" y="270" font-family="Arial" font-size="12" text-anchor="middle">3</text>
  
  <rect x="220" y="50" width="30" height="200" fill="#ccc" stroke="black"/>
  <text x="235" y="270" font-family="Arial" font-size="12" text-anchor="middle">4</text>
  
  <rect x="270" y="110" width="30" height="140" fill="#ccc" stroke="black"/>
  <text x="285" y="270" font-family="Arial" font-size="12" text-anchor="middle">5</text>
</svg>`;

const parallelLinesSvg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="white"/>
  <line x1="50" y1="80" x2="250" y2="80" stroke="black" stroke-width="2"/>
  <text x="260" y="85" font-family="Arial" font-size="16">m</text>
  
  <line x1="50" y1="140" x2="250" y2="140" stroke="black" stroke-width="2"/>
  <text x="260" y="145" font-family="Arial" font-size="16">n</text>
  
  <line x1="80" y1="40" x2="200" y2="180" stroke="black" stroke-width="2"/>
  <text x="70" y="35" font-family="Arial" font-size="16">t</text>
  
  <text x="140" y="75" font-family="Arial" font-size="14">x°</text>
  <text x="115" y="95" font-family="Arial" font-size="14">y°</text>
  <text x="155" y="135" font-family="Arial" font-size="14">z°</text>
</svg>`;

console.log("BAR_GRAPH_BASE64: data:image/svg+xml;base64," + Buffer.from(barGraphSvg).toString('base64'));
console.log("PARALLEL_LINES_BASE64: data:image/svg+xml;base64," + Buffer.from(parallelLinesSvg).toString('base64'));
