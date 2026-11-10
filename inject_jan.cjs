const fs = require('fs');

let content = fs.readFileSync('questions_est1_2026_jan.ts', 'utf8');

const q9Svg = `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-64 w-auto">
      <defs>
        <pattern id="grid_q9" width="20" height="15" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 15" fill="none" stroke="#e0e0e0" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect x="40" y="30" width="300" height="150" fill="url(#grid_q9)" />
      <line x1="40" y1="180" x2="340" y2="180" stroke="black" stroke-width="1.5"/>
      <line x1="40" y1="30" x2="40" y2="180" stroke="black" stroke-width="1.5"/>
      <text x="60" y="195" font-size="10" text-anchor="middle">0.5</text>
      <text x="80" y="195" font-size="10" text-anchor="middle">1</text>
      <text x="100" y="195" font-size="10" text-anchor="middle">1.5</text>
      <text x="120" y="195" font-size="10" text-anchor="middle">2</text>
      <text x="140" y="195" font-size="10" text-anchor="middle">2.5</text>
      <text x="160" y="195" font-size="10" text-anchor="middle">3</text>
      <text x="180" y="195" font-size="10" text-anchor="middle">3.5</text>
      <text x="200" y="195" font-size="10" text-anchor="middle">4</text>
      <text x="220" y="195" font-size="10" text-anchor="middle">4.5</text>
      <text x="240" y="195" font-size="10" text-anchor="middle">5</text>
      <text x="260" y="195" font-size="10" text-anchor="middle">5.5</text>
      <text x="280" y="195" font-size="10" text-anchor="middle">6</text>
      <text x="300" y="195" font-size="10" text-anchor="middle">6.5</text>
      <text x="320" y="195" font-size="10" text-anchor="middle">7</text>
      <text x="35" y="168" font-size="10" text-anchor="end">50</text>
      <text x="35" y="153" font-size="10" text-anchor="end">55</text>
      <text x="35" y="138" font-size="10" text-anchor="end">60</text>
      <text x="35" y="123" font-size="10" text-anchor="end">65</text>
      <text x="35" y="108" font-size="10" text-anchor="end">70</text>
      <text x="35" y="93" font-size="10" text-anchor="end">75</text>
      <text x="35" y="78" font-size="10" text-anchor="end">80</text>
      <text x="35" y="63" font-size="10" text-anchor="end">85</text>
      <text x="35" y="48" font-size="10" text-anchor="end">90</text>
      <text x="190" y="215" font-size="12" text-anchor="middle">Time Studied</text>
      <text x="15" y="105" font-size="12" text-anchor="middle" transform="rotate(-90 15,105)">Test Scores</text>
      <circle cx="80" cy="159" r="4" fill="#9CA3AF" stroke="black"/>
      <circle cx="120" cy="135" r="4" fill="#9CA3AF" stroke="black"/>
      <circle cx="160" cy="114" r="4" fill="#9CA3AF" stroke="black"/>
      <circle cx="200" cy="99" r="4" fill="#9CA3AF" stroke="black"/>
      <circle cx="240" cy="81" r="4" fill="#9CA3AF" stroke="black"/>
      <circle cx="280" cy="60" r="4" fill="#9CA3AF" stroke="black"/>
      <circle cx="320" cy="51" r="4" fill="#9CA3AF" stroke="black"/>
    </svg>`;

// Replace Q9 SVG
content = content.replace(
  /<svg viewBox="0 0 300 200".*?<\/svg>/s,
  q9Svg
);

const newQuestions = `
  {
    id: "est1_2026_jan_17",
    question: "Question 17 text here...",
    svg: \`<svg viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-64 w-auto">
      <defs>
        <pattern id="grid_q17" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#e0e0e0" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="240" height="210" fill="url(#grid_q17)" />
      <line x1="0" y1="45" x2="240" y2="45" stroke="black" stroke-width="1.5"/>
      <line x1="180" y1="0" x2="180" y2="210" stroke="black" stroke-width="1.5"/>
      <line x1="15" y1="0" x2="225" y2="210" stroke="black" stroke-width="1.5"/>
      <text x="170" y="15" font-size="12" font-style="italic">y</text>
      <text x="230" y="40" font-size="12" font-style="italic">x</text>
      <text x="175" y="58" font-size="10" text-anchor="end">0</text>
      <text x="175" y="34" font-size="10" text-anchor="end">2</text>
      <text x="175" y="79" font-size="10" text-anchor="end">-2</text>
      <text x="175" y="109" font-size="10" text-anchor="end">-4</text>
      <text x="175" y="139" font-size="10" text-anchor="end">-6</text>
      <text x="175" y="169" font-size="10" text-anchor="end">-8</text>
      <text x="175" y="199" font-size="10" text-anchor="end">-10</text>
      <text x="210" y="58" font-size="10" text-anchor="middle">2</text>
      <text x="150" y="58" font-size="10" text-anchor="middle">-2</text>
      <text x="120" y="58" font-size="10" text-anchor="middle">-4</text>
      <text x="90" y="58" font-size="10" text-anchor="middle">-6</text>
      <text x="60" y="58" font-size="10" text-anchor="middle">-8</text>
    </svg>\`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2026_jan_18",
    question: "Question 18 text here...\n\n| Player | Goals scored in the World Cup |\n|---|---|\n| Kevin | 3 |\n| Toni | 4 |\n| Harry | 4 |\n| Cristiano | 4 |\n| Mohamed | 6 |\n| Lionel | 6 |\n| Kylian | 8 |",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Problem Solving and Data Analysis",
    topics: ["Data Tables"]
  },
  {
    id: "est1_2026_jan_21",
    question: "Question 21 text here...",
    svg: \`<svg viewBox="0 0 340 100" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-32 w-auto">
      <line x1="20" y1="30" x2="320" y2="30" stroke="black" stroke-width="1.5"/>
      <g stroke="black" stroke-width="1.5">
        <line x1="20" y1="25" x2="20" y2="35"/>
        <line x1="95" y1="25" x2="95" y2="35"/>
        <line x1="170" y1="25" x2="170" y2="35"/>
        <line x1="245" y1="25" x2="245" y2="35"/>
        <line x1="320" y1="25" x2="320" y2="35"/>
      </g>
      <g stroke="black" stroke-width="1">
        <line x1="35" y1="28" x2="35" y2="32"/>
        <line x1="50" y1="28" x2="50" y2="32"/>
        <line x1="65" y1="28" x2="65" y2="32"/>
        <line x1="80" y1="28" x2="80" y2="32"/>
        <line x1="110" y1="28" x2="110" y2="32"/>
        <line x1="125" y1="28" x2="125" y2="32"/>
        <line x1="140" y1="28" x2="140" y2="32"/>
        <line x1="155" y1="28" x2="155" y2="32"/>
        <line x1="185" y1="28" x2="185" y2="32"/>
        <line x1="200" y1="28" x2="200" y2="32"/>
        <line x1="215" y1="28" x2="215" y2="32"/>
        <line x1="230" y1="28" x2="230" y2="32"/>
        <line x1="260" y1="28" x2="260" y2="32"/>
        <line x1="275" y1="28" x2="275" y2="32"/>
        <line x1="290" y1="28" x2="290" y2="32"/>
        <line x1="305" y1="28" x2="305" y2="32"/>
      </g>
      <text x="20" y="20" font-size="14" text-anchor="middle">0</text>
      <text x="95" y="20" font-size="14" text-anchor="middle">25</text>
      <text x="170" y="20" font-size="14" text-anchor="middle">50</text>
      <text x="245" y="20" font-size="14" text-anchor="middle">75</text>
      <text x="320" y="20" font-size="14" text-anchor="middle">100</text>
      <line x1="65" y1="70" x2="80" y2="70" stroke="black" stroke-width="1.5"/>
      <line x1="200" y1="70" x2="305" y2="70" stroke="black" stroke-width="1.5"/>
      <rect x="80" y="55" width="120" height="30" fill="none" stroke="black" stroke-width="1.5"/>
      <line x1="110" y1="55" x2="110" y2="85" stroke="black" stroke-width="1.5"/>
      <circle cx="65" cy="70" r="2" fill="black"/>
      <circle cx="80" cy="70" r="2" fill="black"/>
      <circle cx="110" cy="70" r="2" fill="black"/>
      <circle cx="200" cy="70" r="2" fill="black"/>
      <circle cx="305" cy="70" r="2" fill="black"/>
    </svg>\`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Problem Solving and Data Analysis",
    topics: ["Box Plots"]
  },
  {
    id: "est1_2026_jan_24",
    question: "Question 24 text here...\n\n| Class Section | Number of Students |\n|---|---|\n| 10-A | 28 |\n| 10-B | 25 |\n| 11-A | 30 |\n| 11-B | 24 |",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Problem Solving and Data Analysis",
    topics: ["Data Tables"]
  },
  {
    id: "est1_2026_jan_25",
    question: "Question 25 text here...",
    svg: \`<svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-64 w-auto">
      <defs>
        <pattern id="grid_q25" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#e0e0e0" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="240" height="300" fill="url(#grid_q25)" />
      <line x1="0" y1="150" x2="240" y2="150" stroke="black" stroke-width="1.5"/>
      <line x1="90" y1="0" x2="90" y2="300" stroke="black" stroke-width="1.5"/>
      <text x="80" y="15" font-size="12" font-style="italic">y</text>
      <text x="230" y="165" font-size="12" font-style="italic">x</text>
      <text x="45" y="60" font-size="16" font-style="italic">f</text>
      <text x="85" y="165" font-size="10" text-anchor="end">0</text>
      <text x="85" y="125" font-size="10" text-anchor="end">1</text>
      <text x="85" y="95" font-size="10" text-anchor="end">2</text>
      <text x="85" y="65" font-size="10" text-anchor="end">3</text>
      <text x="85" y="35" font-size="10" text-anchor="end">4</text>
      <text x="85" y="185" font-size="10" text-anchor="end">-1</text>
      <text x="85" y="215" font-size="10" text-anchor="end">-2</text>
      <text x="120" y="165" font-size="10" text-anchor="middle">1</text>
      <text x="150" y="165" font-size="10" text-anchor="middle">2</text>
      <text x="180" y="165" font-size="10" text-anchor="middle">3</text>
      <text x="60" y="165" font-size="10" text-anchor="middle">-1</text>
      <text x="30" y="165" font-size="10" text-anchor="middle">-2</text>
      <path d="M 15.0 294.4 L 18.0 260.2 L 21.0 228.7 L 24.0 199.9 L 27.0 173.7 L 30.0 150.0 L 33.0 128.7 L 36.0 109.7 L 39.0 92.9 L 42.0 78.2 L 45.0 65.6 L 48.0 55.0 L 51.0 46.2 L 54.0 39.1 L 57.0 33.8 L 60.0 30.0 L 63.0 27.7 L 66.0 26.9 L 69.0 27.3 L 72.0 29.0 L 75.0 31.9 L 78.0 35.8 L 81.0 40.6 L 84.0 46.3 L 87.0 52.8 L 90.0 60.0 L 93.0 67.8 L 96.0 76.1 L 99.0 84.8 L 102.0 93.8 L 105.0 103.1 L 108.0 112.6 L 111.0 122.1 L 114.0 131.5 L 117.0 140.9 L 120.0 150.0 L 123.0 158.8 L 126.0 167.3 L 129.0 175.2 L 132.0 182.6 L 135.0 189.4 L 138.0 195.4 L 141.0 200.5 L 144.0 204.7 L 147.0 207.9 L 150.0 210.0 L 153.0 210.9 L 156.0 210.5 L 159.0 208.7 L 162.0 205.4 L 165.0 200.6 L 168.0 194.2 L 171.0 186.0 L 174.0 175.9 L 177.0 164.0 L 180.0 150.0 L 183.0 133.9 L 186.0 115.7 L 189.0 95.1 L 192.0 72.2 L 195.0 46.9" fill="none" stroke="#4B5563" stroke-width="2"/>
    </svg>\`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Passport to Advanced Math",
    topics: ["Polynomial Functions"]
  },
  {
    id: "est1_2026_jan_28",
    question: "Question 28 text here...",
    svg: \`<svg viewBox="0 0 150 210" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-64 w-auto">
      <defs>
        <pattern id="grid_q28" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#e0e0e0" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="150" height="210" fill="url(#grid_q28)" />
      <line x1="0" y1="60" x2="150" y2="60" stroke="black" stroke-width="1.5"/>
      <line x1="60" y1="0" x2="60" y2="210" stroke="black" stroke-width="1.5"/>
      <text x="50" y="15" font-size="12" font-style="italic">y</text>
      <text x="140" y="75" font-size="12" font-style="italic">x</text>
      <text x="55" y="75" font-size="10" text-anchor="end">0</text>
      <text x="55" y="105" font-size="10" text-anchor="end">-1</text>
      <text x="55" y="135" font-size="10" text-anchor="end">-2</text>
      <text x="55" y="165" font-size="10" text-anchor="end">-3</text>
      <text x="55" y="195" font-size="10" text-anchor="end">-4</text>
      <text x="30" y="75" font-size="10" text-anchor="middle">-1</text>
      <text x="90" y="75" font-size="10" text-anchor="middle">1</text>
      <line x1="52.5" y1="210" x2="105" y2="0" stroke="#4B5563" stroke-width="2"/>
      <circle cx="60" cy="180" r="3" fill="gray" stroke="black"/>
      <circle cx="90" cy="60" r="3" fill="gray" stroke="black"/>
      <text x="70" y="185" font-size="12" font-style="italic">A</text>
      <text x="100" y="55" font-size="12" font-style="italic">B</text>
    </svg>\`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2026_jan_29",
    question: "Question 29 text here...",
    svg: \`<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-48 w-auto">
      <polygon points="20,150 200,150 200,30" fill="none" stroke="black" stroke-width="1.5"/>
      <line x1="140" y1="150" x2="140" y2="70" stroke="black" stroke-width="1.5"/>
      <rect x="130" y="140" width="10" height="10" fill="gray" stroke="black"/>
      <rect x="190" y="140" width="10" height="10" fill="gray" stroke="black"/>
      <circle cx="20" cy="150" r="3" fill="gray" stroke="black"/>
      <circle cx="140" cy="150" r="3" fill="gray" stroke="black"/>
      <circle cx="200" cy="150" r="3" fill="gray" stroke="black"/>
      <circle cx="140" cy="70" r="3" fill="gray" stroke="black"/>
      <circle cx="200" cy="30" r="3" fill="gray" stroke="black"/>
      <text x="15" y="165" font-size="14" font-style="italic">A</text>
      <text x="135" y="165" font-size="14" font-style="italic">B</text>
      <text x="195" y="165" font-size="14" font-style="italic">M</text>
      <text x="135" y="60" font-size="14" font-style="italic">C</text>
      <text x="195" y="20" font-size="14" font-style="italic">N</text>
    </svg>\`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Additional Topics in Math",
    topics: ["Similar Triangles"]
  },
  {
    id: "est1_2026_jan_38",
    question: "Question 38 text here...",
    svg: \`<svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-48 w-auto">
      <line x1="0" y1="100" x2="240" y2="100" stroke="black" stroke-width="1.5"/>
      <line x1="60" y1="0" x2="60" y2="160" stroke="black" stroke-width="1.5"/>
      <text x="50" y="15" font-size="12" font-style="italic">y</text>
      <text x="230" y="115" font-size="12" font-style="italic">x</text>
      <text x="55" y="115" font-size="10" text-anchor="end">0</text>
      <text x="55" y="65" font-size="10" text-anchor="end">2</text>
      <text x="55" y="25" font-size="10" text-anchor="end">4</text>
      <text x="55" y="145" font-size="10" text-anchor="end">-2</text>
      <text x="20" y="115" font-size="10" text-anchor="middle">-2</text>
      <text x="100" y="115" font-size="10" text-anchor="middle">2</text>
      <text x="140" y="115" font-size="10" text-anchor="middle">4</text>
      <text x="180" y="115" font-size="10" text-anchor="middle">6</text>
      <text x="220" y="115" font-size="10" text-anchor="middle">8</text>
      <line x1="20" y1="140" x2="160" y2="0" stroke="#4B5563" stroke-width="2" stroke-dasharray="6,4"/>
      <line x1="0" y1="70" x2="240" y2="190" stroke="#9CA3AF" stroke-width="2" stroke-dasharray="6,4"/>
      <rect x="140" y="80" width="20" height="15" fill="#D1D5DB"/>
      <text x="150" y="92" font-size="12" text-anchor="middle">I</text>
      <rect x="80" y="40" width="20" height="15" fill="#D1D5DB"/>
      <text x="90" y="52" font-size="12" text-anchor="middle">II</text>
      <rect x="30" y="80" width="20" height="15" fill="#D1D5DB"/>
      <text x="40" y="92" font-size="12" text-anchor="middle">III</text>
      <rect x="90" y="140" width="20" height="15" fill="#D1D5DB"/>
      <text x="100" y="152" font-size="12" text-anchor="middle">IV</text>
    </svg>\`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Heart of Algebra",
    topics: ["Linear Inequalities"]
  },
  {
    id: "est1_2026_jan_40",
    question: "Question 40 text here...",
    svg: \`<svg viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-64 w-auto">
      <defs>
        <pattern id="grid_q40" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#e0e0e0" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="240" height="210" fill="url(#grid_q40)" />
      <line x1="0" y1="60" x2="240" y2="60" stroke="black" stroke-width="1.5"/>
      <line x1="60" y1="0" x2="60" y2="210" stroke="black" stroke-width="1.5"/>
      <text x="50" y="15" font-size="12" font-style="italic">y</text>
      <text x="230" y="75" font-size="12" font-style="italic">x</text>
      <text x="55" y="75" font-size="10" text-anchor="end">0</text>
      <text x="55" y="105" font-size="10" text-anchor="end">-1</text>
      <text x="55" y="135" font-size="10" text-anchor="end">-2</text>
      <text x="55" y="165" font-size="10" text-anchor="end">-3</text>
      <text x="55" y="195" font-size="10" text-anchor="end">-4</text>
      <text x="90" y="75" font-size="10" text-anchor="middle">1</text>
      <text x="120" y="75" font-size="10" text-anchor="middle">2</text>
      <text x="150" y="75" font-size="10" text-anchor="middle">3</text>
      <text x="180" y="75" font-size="10" text-anchor="middle">4</text>
      <text x="210" y="75" font-size="10" text-anchor="middle">5</text>
      <path d="M 75.0 -7.5 L 78.0 7.2 L 81.0 21.3 L 84.0 34.8 L 87.0 47.7 L 90.0 60.0 L 93.0 71.7 L 96.0 82.8 L 99.0 93.3 L 102.0 103.2 L 105.0 112.5 L 108.0 121.2 L 111.0 129.3 L 114.0 136.8 L 117.0 143.7 L 120.0 150.0 L 123.0 155.7 L 126.0 160.8 L 129.0 165.3 L 132.0 169.2 L 135.0 172.5 L 138.0 175.2 L 141.0 177.3 L 144.0 178.8 L 147.0 179.7 L 150.0 180.0 L 153.0 179.7 L 156.0 178.8 L 159.0 177.3 L 162.0 175.2 L 165.0 172.5 L 168.0 169.2 L 171.0 165.3 L 174.0 160.8 L 177.0 155.7 L 180.0 150.0 L 183.0 143.7 L 186.0 136.8 L 189.0 129.3 L 192.0 121.2 L 195.0 112.5 L 198.0 103.2 L 201.0 93.3 L 204.0 82.8 L 207.0 71.7 L 210.0 60.0 L 213.0 47.7 L 216.0 34.8 L 219.0 21.3 L 222.0 7.2 L 225.0 -7.5" fill="none" stroke="#4B5563" stroke-width="2"/>
    </svg>\`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Passport to Advanced Math",
    topics: ["Quadratic Functions"]
  },
  {
    id: "est1_2026_jan_41",
    question: "Question 41 text here...",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,
    explanation: "Explanation here.",
    category: "Additional Topics in Math",
    topics: ["Geometry"]
  }
];
`;

content = content.replace('];', newQuestions);

fs.writeFileSync('questions_est1_2026_jan.ts', content);
console.log("Updated questions_est1_2026_jan.ts");
