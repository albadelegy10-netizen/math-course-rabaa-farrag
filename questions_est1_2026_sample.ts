import { Question } from "./types";

export const EST1_2026_SAMPLE_SET: Question[] = [
  {
    id: "est1_2026_sample_1",
    question: "Consider the two functions $f(x) = x^2 - 2x + 1$ and $g(x) = -x + 3$. Which of the following is the correct graph representing $f$ and $g$?",
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-96 w-auto">
  <defs>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e0e0" stroke-width="1"/>
    </pattern>
  </defs>
  <g transform="translate(10, 10)">
    <rect width="180" height="180" fill="url(#grid)" />
    <line x1="0" y1="140" x2="180" y2="140" stroke="black" stroke-width="1.5"/>
    <line x1="80" y1="0" x2="80" y2="180" stroke="black" stroke-width="1.5"/>
    <text x="10" y="170" font-weight="bold" font-size="16">A.</text>
    <polyline points="46.0,-5.8 48.0,4.8 50.0,15.0 52.0,24.8 54.0,34.2 56.0,43.2 58.0,51.8 60.0,60.0 62.0,67.8 64.0,75.2 66.0,82.2 68.0,88.8 70.0,95.0 72.0,100.8 74.0,106.2 76.0,111.2 78.0,115.8 80.0,120.0 82.0,123.8 84.0,127.2 86.0,130.2 88.0,132.8 90.0,135.0 92.0,136.8 94.0,138.2 96.0,139.2 98.0,139.8 100.0,140.0 102.0,139.8 104.0,139.2 106.0,138.2 108.0,136.8 110.0,135.0 112.0,132.8 114.0,130.2 116.0,127.2 118.0,123.8 120.0,120.0 122.0,115.8 124.0,111.2 126.0,106.2 128.0,100.8 130.0,95.0 132.0,88.8 134.0,82.2 136.0,75.2 138.0,67.8 140.0,60.0 142.0,51.8 144.0,43.2 146.0,34.2 148.0,24.8 150.0,15.0 152.0,4.8 154.0,-5.8" fill="none" stroke="black" stroke-width="1.5"/>
    <polyline points="20.0,0.0 22.0,2.0 24.0,4.0 26.0,6.0 28.0,8.0 30.0,10.0 32.0,12.0 34.0,14.0 36.0,16.0 38.0,18.0 40.0,20.0 42.0,22.0 44.0,24.0 46.0,26.0 48.0,28.0 50.0,30.0 52.0,32.0 54.0,34.0 56.0,36.0 58.0,38.0 60.0,40.0 62.0,42.0 64.0,44.0 66.0,46.0 68.0,48.0 70.0,50.0 72.0,52.0 74.0,54.0 76.0,56.0 78.0,58.0 80.0,60.0 82.0,62.0 84.0,64.0 86.0,66.0 88.0,68.0 90.0,70.0 92.0,72.0 94.0,74.0 96.0,76.0 98.0,78.0 100.0,80.0 102.0,82.0 104.0,84.0 106.0,86.0 108.0,88.0 110.0,90.0 112.0,92.0 114.0,94.0 116.0,96.0 118.0,98.0 120.0,100.0 122.0,102.0 124.0,104.0 126.0,106.0 128.0,108.0 130.0,110.0 132.0,112.0 134.0,114.0 136.0,116.0 138.0,118.0 140.0,120.0 142.0,122.0 144.0,124.0 146.0,126.0 148.0,128.0 150.0,130.0 152.0,132.0 154.0,134.0 156.0,136.0 158.0,138.0 160.0,140.0 162.0,142.0 164.0,144.0 166.0,146.0 168.0,148.0 170.0,150.0 172.0,152.0 174.0,154.0 176.0,156.0 178.0,158.0 180.0,160.0" fill="none" stroke="black" stroke-width="1.5"/>
  </g>
  <g transform="translate(210, 10)">
    <rect width="180" height="180" fill="url(#grid)" />
    <line x1="0" y1="140" x2="180" y2="140" stroke="black" stroke-width="1.5"/>
    <line x1="80" y1="0" x2="80" y2="180" stroke="black" stroke-width="1.5"/>
    <text x="10" y="170" font-weight="bold" font-size="16">B.</text>
    <polyline points="40.0,0.0 42.0,11.8 44.0,23.2 46.0,34.2 48.0,44.8 50.0,55.0 52.0,64.8 54.0,74.2 56.0,83.2 58.0,91.8 60.0,100.0 62.0,107.8 64.0,115.2 66.0,122.2 68.0,128.8 70.0,135.0 72.0,140.8 74.0,146.2 76.0,151.2 78.0,155.8 80.0,160.0 82.0,163.8 84.0,167.2 86.0,170.2 88.0,172.8 90.0,175.0 92.0,176.8 94.0,178.2 96.0,179.2 98.0,179.8 100.0,180.0 102.0,179.8 104.0,179.2 106.0,178.2 108.0,176.8 110.0,175.0 112.0,172.8 114.0,170.2 116.0,167.2 118.0,163.8 120.0,160.0 122.0,155.8 124.0,151.2 126.0,146.2 128.0,140.8 130.0,135.0 132.0,128.8 134.0,122.2 136.0,115.2 138.0,107.8 140.0,100.0 142.0,91.8 144.0,83.2 146.0,74.2 148.0,64.8 150.0,55.0 152.0,44.8 154.0,34.2 156.0,23.2 158.0,11.8 160.0,-0.0" fill="none" stroke="black" stroke-width="1.5"/>
    <polyline points="20.0,20.0 22.0,22.0 24.0,24.0 26.0,26.0 28.0,28.0 30.0,30.0 32.0,32.0 34.0,34.0 36.0,36.0 38.0,38.0 40.0,40.0 42.0,42.0 44.0,44.0 46.0,46.0 48.0,48.0 50.0,50.0 52.0,52.0 54.0,54.0 56.0,56.0 58.0,58.0 60.0,60.0 62.0,62.0 64.0,64.0 66.0,66.0 68.0,68.0 70.0,70.0 72.0,72.0 74.0,74.0 76.0,76.0 78.0,78.0 80.0,80.0 82.0,82.0 84.0,84.0 86.0,86.0 88.0,88.0 90.0,90.0 92.0,92.0 94.0,94.0 96.0,96.0 98.0,98.0 100.0,100.0 102.0,102.0 104.0,104.0 106.0,106.0 108.0,108.0 110.0,110.0 112.0,112.0 114.0,114.0 116.0,116.0 118.0,118.0 120.0,120.0 122.0,122.0 124.0,124.0 126.0,126.0 128.0,128.0 130.0,130.0 132.0,132.0 134.0,134.0 136.0,136.0 138.0,138.0 140.0,140.0 142.0,142.0 144.0,144.0 146.0,146.0 148.0,148.0 150.0,150.0 152.0,152.0 154.0,154.0 156.0,156.0 158.0,158.0 160.0,160.0 162.0,162.0 164.0,164.0 166.0,166.0 168.0,168.0 170.0,170.0 172.0,172.0 174.0,174.0 176.0,176.0 178.0,178.0 180.0,180.0" fill="none" stroke="black" stroke-width="1.5"/>
  </g>
  <g transform="translate(10, 210)">
    <rect width="180" height="180" fill="url(#grid)" />
    <line x1="0" y1="140" x2="180" y2="140" stroke="black" stroke-width="1.5"/>
    <line x1="80" y1="0" x2="80" y2="180" stroke="black" stroke-width="1.5"/>
    <text x="10" y="170" font-weight="bold" font-size="16">C.</text>
    <polyline points="46.0,-5.8 48.0,4.8 50.0,15.0 52.0,24.8 54.0,34.2 56.0,43.2 58.0,51.8 60.0,60.0 62.0,67.8 64.0,75.2 66.0,82.2 68.0,88.8 70.0,95.0 72.0,100.8 74.0,106.2 76.0,111.2 78.0,115.8 80.0,120.0 82.0,123.8 84.0,127.2 86.0,130.2 88.0,132.8 90.0,135.0 92.0,136.8 94.0,138.2 96.0,139.2 98.0,139.8 100.0,140.0 102.0,139.8 104.0,139.2 106.0,138.2 108.0,136.8 110.0,135.0 112.0,132.8 114.0,130.2 116.0,127.2 118.0,123.8 120.0,120.0 122.0,115.8 124.0,111.2 126.0,106.2 128.0,100.8 130.0,95.0 132.0,88.8 134.0,82.2 136.0,75.2 138.0,67.8 140.0,60.0 142.0,51.8 144.0,43.2 146.0,34.2 148.0,24.8 150.0,15.0 152.0,4.8 154.0,-5.8" fill="none" stroke="black" stroke-width="1.5"/>
    <polyline points="20.0,20.0 22.0,22.0 24.0,24.0 26.0,26.0 28.0,28.0 30.0,30.0 32.0,32.0 34.0,34.0 36.0,36.0 38.0,38.0 40.0,40.0 42.0,42.0 44.0,44.0 46.0,46.0 48.0,48.0 50.0,50.0 52.0,52.0 54.0,54.0 56.0,56.0 58.0,58.0 60.0,60.0 62.0,62.0 64.0,64.0 66.0,66.0 68.0,68.0 70.0,70.0 72.0,72.0 74.0,74.0 76.0,76.0 78.0,78.0 80.0,80.0 82.0,82.0 84.0,84.0 86.0,86.0 88.0,88.0 90.0,90.0 92.0,92.0 94.0,94.0 96.0,96.0 98.0,98.0 100.0,100.0 102.0,102.0 104.0,104.0 106.0,106.0 108.0,108.0 110.0,110.0 112.0,112.0 114.0,114.0 116.0,116.0 118.0,118.0 120.0,120.0 122.0,122.0 124.0,124.0 126.0,126.0 128.0,128.0 130.0,130.0 132.0,132.0 134.0,134.0 136.0,136.0 138.0,138.0 140.0,140.0 142.0,142.0 144.0,144.0 146.0,146.0 148.0,148.0 150.0,150.0 152.0,152.0 154.0,154.0 156.0,156.0 158.0,158.0 160.0,160.0 162.0,162.0 164.0,164.0 166.0,166.0 168.0,168.0 170.0,170.0 172.0,172.0 174.0,174.0 176.0,176.0 178.0,178.0 180.0,180.0" fill="none" stroke="black" stroke-width="1.5"/>
  </g>
  <g transform="translate(210, 210)">
    <rect width="180" height="180" fill="url(#grid)" />
    <line x1="0" y1="140" x2="180" y2="140" stroke="black" stroke-width="1.5"/>
    <line x1="80" y1="0" x2="80" y2="180" stroke="black" stroke-width="1.5"/>
    <text x="10" y="170" font-weight="bold" font-size="16">D.</text>
    <polyline points="20.0,0.0 22.0,11.8 24.0,23.2 26.0,34.2 28.0,44.8 30.0,55.0 32.0,64.8 34.0,74.2 36.0,83.2 38.0,91.8 40.0,100.0 42.0,107.8 44.0,115.2 46.0,122.2 48.0,128.8 50.0,135.0 52.0,140.8 54.0,146.2 56.0,151.2 58.0,155.8 60.0,160.0 62.0,163.8 64.0,167.2 66.0,170.2 68.0,172.8 70.0,175.0 72.0,176.8 74.0,178.2 76.0,179.2 78.0,179.8 80.0,180.0 82.0,179.8 84.0,179.2 86.0,178.2 88.0,176.8 90.0,175.0 92.0,172.8 94.0,170.2 96.0,167.2 98.0,163.8 100.0,160.0 102.0,155.8 104.0,151.2 106.0,146.2 108.0,140.8 110.0,135.0 112.0,128.8 114.0,122.2 116.0,115.2 118.0,107.8 120.0,100.0 122.0,91.8 124.0,83.2 126.0,74.2 128.0,64.8 130.0,55.0 132.0,44.8 134.0,34.2 136.0,23.2 138.0,11.8 140.0,-0.0" fill="none" stroke="black" stroke-width="1.5"/>
    <polyline points="20.0,20.0 22.0,22.0 24.0,24.0 26.0,26.0 28.0,28.0 30.0,30.0 32.0,32.0 34.0,34.0 36.0,36.0 38.0,38.0 40.0,40.0 42.0,42.0 44.0,44.0 46.0,46.0 48.0,48.0 50.0,50.0 52.0,52.0 54.0,54.0 56.0,56.0 58.0,58.0 60.0,60.0 62.0,62.0 64.0,64.0 66.0,66.0 68.0,68.0 70.0,70.0 72.0,72.0 74.0,74.0 76.0,76.0 78.0,78.0 80.0,80.0 82.0,82.0 84.0,84.0 86.0,86.0 88.0,88.0 90.0,90.0 92.0,92.0 94.0,94.0 96.0,96.0 98.0,98.0 100.0,100.0 102.0,102.0 104.0,104.0 106.0,106.0 108.0,108.0 110.0,110.0 112.0,112.0 114.0,114.0 116.0,116.0 118.0,118.0 120.0,120.0 122.0,122.0 124.0,124.0 126.0,126.0 128.0,128.0 130.0,130.0 132.0,132.0 134.0,134.0 136.0,136.0 138.0,138.0 140.0,140.0 142.0,142.0 144.0,144.0 146.0,146.0 148.0,148.0 150.0,150.0 152.0,152.0 154.0,154.0 156.0,156.0 158.0,158.0 160.0,160.0 162.0,162.0 164.0,164.0 166.0,166.0 168.0,168.0 170.0,170.0 172.0,172.0 174.0,174.0 176.0,176.0 178.0,178.0 180.0,180.0" fill="none" stroke="black" stroke-width="1.5"/>
  </g>
</svg>`, 
    options: ["Graph A", "Graph B", "Graph C", "Graph D"],
    correctAnswer: 2,
    explanation: "$f(x) = x^2 - 2x + 1 = (x-1)^2$, which is a parabola opening upwards with its vertex at $(1, 0)$. $g(x) = -x + 3$ is a line with a y-intercept of 3 and a slope of -1. Graph C correctly shows this parabola and line.",
    category: "Passport to Advanced Math",
    topics: ["Quadratic Functions", "Linear Functions", "Graphs"]
  },
  {
    id: "est1_2026_sample_2",
    question: "A box contains 6 plain chocolate bars, 11 chocolates filled with nuts, and 7 chocolates filled with nougat. If Arjun selects one chocolate at random, what is the probability that he chooses a plain chocolate bar?",
    options: ["0.25", "0.46", "0.55", "0.71"],
    correctAnswer: 0,
    explanation: "Total chocolates = $6 + 11 + 7 = 24$. Probability of plain = $6 / 24 = 1/4 = 0.25$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Probability"]
  },
  {
    id: "est1_2026_sample_3",
    question: "A pencil case contains 4 blue pens, 1 green pen, 2 black pens and 2 red pens. One pen is chosen randomly. What is the probability of not picking a blue pen?",
    options: ["3/5", "5/9", "4/9", "1/3"],
    correctAnswer: 1,
    explanation: "Total pens = $4 + 1 + 2 + 2 = 9$. Non-blue pens = $1 + 2 + 2 = 5$. Probability = $5/9$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Probability"]
  },
  {
    id: "est1_2026_sample_4",
    question: "The ratio of men to women in an office is 7 to 4. If there are 66 employees in this office, what is the difference in numbers between the two genders?",
    options: ["12", "14", "16", "18"],
    correctAnswer: 3,
    explanation: "Total ratio parts = $7 + 4 = 11$. Each part = $66 / 11 = 6$ employees. Men = $7 \\times 6 = 42$, Women = $4 \\times 6 = 24$. Difference = $42 - 24 = 18$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Ratios"]
  },
  {
    id: "est1_2026_sample_5",
    question: "What is the value of $x$ in the equation: $\\frac{2x - 7}{5} = \\frac{4x^2 + 7}{10x}$?",
    options: ["1.0", "-0.5", "-1.0", "-2.0"],
    correctAnswer: 1,
    explanation: "Cross-multiply: $10x(2x - 7) = 5(4x^2 + 7) \\Rightarrow 20x^2 - 70x = 20x^2 + 35 \\Rightarrow -70x = 35 \\Rightarrow x = -0.5$.",
    category: "Heart of Algebra",
    topics: ["Rational Equations"]
  },
  {
    id: "est1_2026_sample_6",
    question: "Given $p = -1 + 2i$ and $q = 2 - 3i$, then $p + \\bar{q} =$ ",
    options: ["1 - 5i", "1 + 4i", "1 + 5i", "5 - i"],
    correctAnswer: 2,
    explanation: "The conjugate of $q$ is $\\bar{q} = 2 + 3i$. Then $p + \\bar{q} = (-1 + 2i) + (2 + 3i) = 1 + 5i$.",
    category: "Additional Topics in Math",
    topics: ["Complex Numbers"]
  },
  {
    id: "est1_2026_sample_7",
    question: "The bar chart represents the preferred subject chosen by Grade 10 students in a school. What is the approximate percentage of students who prefer to study English?",
    svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-64 w-auto">
  <line x1="50" y1="250" x2="550" y2="250" stroke="black" stroke-width="1.5"/>
  <line x1="50" y1="50" x2="50" y2="250" stroke="black" stroke-width="1.5"/>
  <line x1="45" y1="250" x2="550" y2="250" stroke="#e0e0e0" stroke-width="1"/>
  <text x="40" y="254" font-size="12" text-anchor="end">0</text>
  <line x1="45" y1="210" x2="550" y2="210" stroke="#e0e0e0" stroke-width="1"/>
  <text x="40" y="214" font-size="12" text-anchor="end">2.5</text>
  <line x1="45" y1="170" x2="550" y2="170" stroke="#e0e0e0" stroke-width="1"/>
  <text x="40" y="174" font-size="12" text-anchor="end">5</text>
  <line x1="45" y1="130" x2="550" y2="130" stroke="#e0e0e0" stroke-width="1"/>
  <text x="40" y="134" font-size="12" text-anchor="end">7.5</text>
  <line x1="45" y1="90" x2="550" y2="90" stroke="#e0e0e0" stroke-width="1"/>
  <text x="40" y="94" font-size="12" text-anchor="end">10</text>
  <line x1="45" y1="50" x2="550" y2="50" stroke="#e0e0e0" stroke-width="1"/>
  <text x="40" y="54" font-size="12" text-anchor="end">12.5</text>
  <rect x="60" y="90" width="40" height="160" fill="#9CA3AF" />
  <text x="80" y="85" font-size="12" text-anchor="middle">10</text>
  <text x="80" y="265" font-size="12" text-anchor="middle">Biology</text>
  <rect x="140" y="170" width="40" height="80" fill="#9CA3AF" />
  <text x="160" y="165" font-size="12" text-anchor="middle">5</text>
  <text x="160" y="265" font-size="12" text-anchor="middle">Chemistry</text>
  <rect x="220" y="170" width="40" height="80" fill="#9CA3AF" />
  <text x="240" y="165" font-size="12" text-anchor="middle">5</text>
  <text x="240" y="265" font-size="12" text-anchor="middle">Physics</text>
  <rect x="300" y="58" width="40" height="192" fill="#9CA3AF" />
  <text x="320" y="53" font-size="12" text-anchor="middle">12</text>
  <text x="320" y="265" font-size="12" text-anchor="middle">Math</text>
  <rect x="380" y="138" width="40" height="112.00000000000001" fill="#9CA3AF" />
  <text x="400" y="133" font-size="12" text-anchor="middle">7</text>
  <text x="400" y="265" font-size="12" text-anchor="middle">English</text>
  <rect x="460" y="202" width="40" height="48" fill="#9CA3AF" />
  <text x="480" y="197" font-size="12" text-anchor="middle">3</text>
  <text x="480" y="265" font-size="12" text-anchor="middle">Social Studies</text>
</svg>`, 
    options: ["10.8%", "16.7%", "28.6%", "27.5%"],
    correctAnswer: 1,
    explanation: "Total students = $10 + 5 + 5 + 12 + 7 + 3 = 42$. English = 7. Percentage = $(7 / 42) \\times 100 = (1/6) \\times 100 \\approx 16.7\\%$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Data Interpretation", "Percentages"]
  },
  {
    id: "est1_2026_sample_8",
    question: "Based on the bar chart below, if one student is selected at random, what is the probability that the student prefers either Mathematics or Social Studies?",
    svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-64 w-auto">
  <line x1="50" y1="250" x2="550" y2="250" stroke="black" stroke-width="1.5"/>
  <line x1="50" y1="50" x2="50" y2="250" stroke="black" stroke-width="1.5"/>
  <line x1="45" y1="250" x2="550" y2="250" stroke="#e0e0e0" stroke-width="1"/>
  <text x="40" y="254" font-size="12" text-anchor="end">0</text>
  <line x1="45" y1="210" x2="550" y2="210" stroke="#e0e0e0" stroke-width="1"/>
  <text x="40" y="214" font-size="12" text-anchor="end">2.5</text>
  <line x1="45" y1="170" x2="550" y2="170" stroke="#e0e0e0" stroke-width="1"/>
  <text x="40" y="174" font-size="12" text-anchor="end">5</text>
  <line x1="45" y1="130" x2="550" y2="130" stroke="#e0e0e0" stroke-width="1"/>
  <text x="40" y="134" font-size="12" text-anchor="end">7.5</text>
  <line x1="45" y1="90" x2="550" y2="90" stroke="#e0e0e0" stroke-width="1"/>
  <text x="40" y="94" font-size="12" text-anchor="end">10</text>
  <line x1="45" y1="50" x2="550" y2="50" stroke="#e0e0e0" stroke-width="1"/>
  <text x="40" y="54" font-size="12" text-anchor="end">12.5</text>
  <rect x="60" y="90" width="40" height="160" fill="#9CA3AF" />
  <text x="80" y="85" font-size="12" text-anchor="middle">10</text>
  <text x="80" y="265" font-size="12" text-anchor="middle">Biology</text>
  <rect x="140" y="170" width="40" height="80" fill="#9CA3AF" />
  <text x="160" y="165" font-size="12" text-anchor="middle">5</text>
  <text x="160" y="265" font-size="12" text-anchor="middle">Chemistry</text>
  <rect x="220" y="170" width="40" height="80" fill="#9CA3AF" />
  <text x="240" y="165" font-size="12" text-anchor="middle">5</text>
  <text x="240" y="265" font-size="12" text-anchor="middle">Physics</text>
  <rect x="300" y="58" width="40" height="192" fill="#9CA3AF" />
  <text x="320" y="53" font-size="12" text-anchor="middle">12</text>
  <text x="320" y="265" font-size="12" text-anchor="middle">Math</text>
  <rect x="380" y="138" width="40" height="112.00000000000001" fill="#9CA3AF" />
  <text x="400" y="133" font-size="12" text-anchor="middle">7</text>
  <text x="400" y="265" font-size="12" text-anchor="middle">English</text>
  <rect x="460" y="202" width="40" height="48" fill="#9CA3AF" />
  <text x="480" y="197" font-size="12" text-anchor="middle">3</text>
  <text x="480" y="265" font-size="12" text-anchor="middle">Social Studies</text>
</svg>`, 
    options: ["5/42", "3/14", "5/14", "5/21"],
    correctAnswer: 2,
    explanation: "Math = 12, Social Studies = 3. Total for both = 15. Probability = $15 / 42 = 5 / 14$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Probability"]
  },
  {
    id: "est1_2026_sample_9",
    question: "A company manufactures cotton T-shirts. The manufacturing cost for two shirts is $5 and the average worker's wage to produce one shirt is $2. Which of the following equations below best represents the total cost $C$ of producing $r$ shirts?",
    options: ["C = 5r", "C = 5r - 2", "C = 4.5r", "C = 2.5r + 2"],
    correctAnswer: 2,
    explanation: "Manufacturing cost per shirt = $\\$5 / 2 = \\$2.50$. Wage per shirt = $\\$2$. Total cost per shirt = $2.50 + 2 = \\$4.50$. Total cost $C = 4.5r$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations", "Word Problems"]
  },
  {
    id: "est1_2026_sample_10",
    question: "Which of the following is the remainder when dividing $3x^4 - 4x^2 + 3x - 6$ by $(x + 2)$?",
    options: ["-15", "10", "15", "20"],
    correctAnswer: 3,
    explanation: "By the Remainder Theorem, substitute $x = -2$: $3(-2)^4 - 4(-2)^2 + 3(-2) - 6 = 3(16) - 4(4) - 6 - 6 = 48 - 16 - 12 = 20$.",
    category: "Passport to Advanced Math",
    topics: ["Polynomial Division", "Remainder Theorem"]
  },
  {
    id: "est1_2026_sample_11",
    question: "If $f(x) = 3x - 5$ and $g(x) = -2x + 1$, which of the following is $f(g(x))$?",
    options: ["-6x - 2", "-2x + 5", "4x - 2", "6x - 1"],
    correctAnswer: 0,
    explanation: "$f(g(x)) = 3(-2x + 1) - 5 = -6x + 3 - 5 = -6x - 2$.",
    category: "Passport to Advanced Math",
    topics: ["Composite Functions"]
  },
  {
    id: "est1_2026_sample_12",
    question: "A line passes through the origin and the point $A(2, 28)$. What is the y-coordinate of a point $B$ that lies on the same line if $x_B = -5$?",
    options: ["-70", "-7", "0", "70"],
    correctAnswer: 0,
    explanation: "The line passes through $(0,0)$ and $(2,28)$, so its slope is $28/2 = 14$. The equation is $y = 14x$. If $x = -5$, $y = 14(-5) = -70$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2026_sample_13",
    question: "The line of equation $y - 1 = 7x$ passes through the point $(1, a)$. What is the value of $2a$?",
    options: ["8", "10", "16", "18"],
    correctAnswer: 2,
    explanation: "Substitute $x=1, y=a$ into the equation: $a - 1 = 7(1) \\Rightarrow a = 8$. Then $2a = 16$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2026_sample_14",
    question: "Based on the data in the table (2023: 32 cars, 2024: 40 cars), the owner estimates that the percentage increase in cars sold between 2023 and 2024 would be half the percentage increase between 2024 and 2025. How many cars are expected to be sold in 2025?",
    options: ["48", "60", "65", "90"],
    correctAnswer: 1,
    explanation: "Increase from 2023 to 2024 = $(40 - 32) / 32 = 8 / 32 = 25\\%$. This is half the 2024-2025 increase, so the 2024-2025 increase is $50\\%$. Cars in 2025 = $40 \\times 1.50 = 60$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Percentages"]
  },
  {
    id: "est1_2026_sample_15",
    question: "The sum of 5, 15, 2, 18, 7, and $x$ is 50. What is the value of the interquartile range?",
    options: ["12", "13", "15", "16"],
    correctAnswer: 0,
    explanation: "Sum = $47 + x = 50 \\Rightarrow x = 3$. The ordered data set is: 2, 3, 5, 7, 15, 18. The lower half is 2, 3, 5 (Q1 = 3). The upper half is 7, 15, 18 (Q3 = 15). IQR = $Q3 - Q1 = 15 - 3 = 12$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Statistics", "Interquartile Range"]
  },
  {
    id: "est1_2026_sample_16",
    question: "What is the value of $x$ if $25^{\\frac{3}{x}} = 125^{\\frac{5}{x} - 4}$?",
    options: ["0.50", "0.75", "1.25", "2.50"],
    correctAnswer: 1,
    explanation: "Rewrite with base 5: $(5^2)^{3/x} = (5^3)^{5/x - 4} \\Rightarrow 5^{6/x} = 5^{15/x - 12}$. Equate exponents: $6/x = 15/x - 12 \\Rightarrow 12 = 9/x \\Rightarrow 12x = 9 \\Rightarrow x = 9/12 = 0.75$.",
    category: "Passport to Advanced Math",
    topics: ["Exponential Equations"]
  },
  {
    id: "est1_2026_sample_17",
    question: "Consider the line $l$ defined by the equation $x - 3y - 12 = 0$. Let line $AB$ be parallel to $l$, where $A$ has coordinates $(0, -1)$. Which of the following could be the coordinates of point $B$?",
    options: ["(6, -1)", "(-3, 1)", "(3, 0)", "(-2, 1)"],
    correctAnswer: 2,
    explanation: "Line $l$: $3y = x - 12 \\Rightarrow y = 1/3 x - 4$. Slope is $1/3$. Line $AB$ has slope $1/3$ and passes through $(0, -1)$. Equation of $AB$: $y = 1/3 x - 1$. Test the options: For $(3, 0)$, $0 = 1/3(3) - 1 = 1 - 1 = 0$. This point lies on the line.",
    category: "Heart of Algebra",
    topics: ["Linear Equations", "Parallel Lines"]
  },
  {
    id: "est1_2026_sample_18",
    question: "After a 45% discount, Tim bought sweatpants for $5. What was the original price of the sweatpants before discount?",
    options: ["$2.25", "$7.25", "$7.50", "$9.09"],
    correctAnswer: 3,
    explanation: "Let original price be $P$. $P \\times (1 - 0.45) = 5 \\Rightarrow 0.55P = 5 \\Rightarrow P = 5 / 0.55 = 500 / 55 = 100 / 11 \\approx 9.09$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Percentages"]
  },
  {
    id: "est1_2026_sample_19",
    question: "James has 3 rings, 4 watches, and 2 necklaces. How many different ways can he wear exactly one accessory from each category?",
    options: ["12", "20", "24", "32"],
    correctAnswer: 2,
    explanation: "By the fundamental counting principle, the number of combinations is $3 \\times 4 \\times 2 = 24$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Combinatorics"]
  },
  {
    id: "est1_2026_sample_20",
    question: "Given $f(x) = 2x^2$ and $g(x) = 10x - n$, for which value of $n$ is $g$ tangent to $f$?",
    options: ["-18.5", "-12.5", "12.5", "18.0"],
    correctAnswer: 2,
    explanation: "Set them equal: $2x^2 = 10x - n \\Rightarrow 2x^2 - 10x + n = 0$. For the line to be tangent, the discriminant must be 0. $\\Delta = b^2 - 4ac = (-10)^2 - 4(2)(n) = 100 - 8n = 0 \\Rightarrow 8n = 100 \\Rightarrow n = 12.5$.",
    category: "Passport to Advanced Math",
    topics: ["Quadratic Equations", "Discriminant"]
  },
  {
    id: "est1_2026_sample_21",
    question: "A ball was launched, from the ground, having its trajectory along the curve represented by $y = -3x^2 + 6x + 9$, where $x$ and $y$ are measured in meters. How high, above the ground, does the ball get to as it travels?",
    options: ["12 meters", "10 meters", "8 meters", "5 meters"],
    correctAnswer: 0,
    explanation: "The maximum height is the y-coordinate of the vertex. $x = -b / (2a) = -6 / (2 \\times -3) = 1$. Substitute $x=1$ into the equation: $y = -3(1)^2 + 6(1) + 9 = -3 + 6 + 9 = 12$.",
    category: "Passport to Advanced Math",
    topics: ["Quadratic Functions", "Vertex"]
  },
  {
    id: "est1_2026_sample_22",
    question: "What is the x-intercept of the line defined by $2x + 5y = 40$?",
    options: ["2", "8", "10", "20"],
    correctAnswer: 3,
    explanation: "To find the x-intercept, set $y = 0$: $2x + 5(0) = 40 \\Rightarrow 2x = 40 \\Rightarrow x = 20$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations", "Intercepts"]
  },
  {
    id: "est1_2026_sample_23",
    question: "Given two points $A(-20, 4)$ and $K(12, -3)$, the x-coordinate of the midpoint of $AK$ is:",
    options: ["-32", "-4", "0.5", "16"],
    correctAnswer: 1,
    explanation: "The x-coordinate of the midpoint is $(x_1 + x_2) / 2 = (-20 + 12) / 2 = -8 / 2 = -4$.",
    category: "Additional Topics in Math",
    topics: ["Coordinate Geometry", "Midpoint"]
  },
  {
    id: "est1_2026_sample_24",
    question: "Which of the following expressions is equivalent to $\\frac{x^2 + 2x + 4}{x + 5}$?",
    options: [
      "x - 4 - 18/(x+5)",
      "x - 3 - 19/(x+5)",
      "x - 3 + 19/(x+5)",
      "x + 3 + 19/(x+5)"
    ],
    correctAnswer: 2,
    explanation: "Use polynomial long division or synthetic division. Dividing $x^2 + 2x + 4$ by $x + 5$: $x(x+5) = x^2+5x$. Subtracting gives $-3x+4$. $-3(x+5) = -3x-15$. Subtracting gives remainder 19. Result: $x - 3 + 19/(x+5)$.",
    category: "Passport to Advanced Math",
    topics: ["Rational Expressions", "Polynomial Division"]
  },
  {
    id: "est1_2026_sample_25",
    question: "A student went to the bookstore to buy $x$ notebooks and $y$ copybooks. The price of each notebook is $5 and the price of each copybook is $6. Which of the following expressions represent the total price of buying $y$ copybooks and $x$ notebooks?",
    options: ["6x + 6y", "5x + 6y", "5x + y", "x + 6y"],
    correctAnswer: 1,
    explanation: "Total price = (price per notebook $\\times$ number of notebooks) + (price per copybook $\\times$ number of copybooks) = $5x + 6y$.",
    category: "Heart of Algebra",
    topics: ["Linear Expressions"]
  },
  {
    id: "est1_2026_sample_26",
    question: "What is the maximum number of copybooks ($6 each) that can be purchased with $23?",
    options: ["10", "4", "3", "1"],
    correctAnswer: 2,
    explanation: "$23 / 6 = 3.833...$ The maximum whole number of copybooks is 3.",
    category: "Heart of Algebra",
    topics: ["Linear Inequalities"]
  },
  {
    id: "est1_2026_sample_27",
    question: "If the student paid $27 at the counter for notebooks ($5) and copybooks ($6), how many of each could he have bought?",
    options: [
      "1 notebook and 4 copybooks",
      "2 notebooks and 4 copybooks",
      "3 notebooks and 2 copybooks",
      "3 notebooks and 3 copybooks"
    ],
    correctAnswer: 2,
    explanation: "We need $5x + 6y = 27$. Let's test the options: A) $5(1) + 6(4) = 29$. B) $5(2) + 6(4) = 34$. C) $5(3) + 6(2) = 15 + 12 = 27$. Option C works.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2026_sample_28",
    question: "What is the exponent of $n$ in the simplified form of the expression: $\\left[ \\frac{(2m^{10}n^{14})^4}{(3m^4n^2)^3} \\right]^5$?",
    options: ["140", "250", "300", "360"],
    correctAnswer: 1,
    explanation: "Focus only on $n$. Numerator: $(n^{14})^4 = n^{56}$. Denominator: $(n^2)^3 = n^6$. Inside the bracket: $n^{56} / n^6 = n^{50}$. Outside the bracket: $(n^{50})^5 = n^{250}$.",
    category: "Passport to Advanced Math",
    topics: ["Exponents"]
  },
  {
    id: "est1_2026_sample_29",
    question: "Suppose you have a bag of 12 yellow marbles and 9 blue marbles. If you select 2 marbles randomly and without replacement, what is the probability that both marbles are yellow?",
    options: ["11/35", "16/49", "21/23", "140/157"],
    correctAnswer: 0,
    explanation: "Total marbles = $12 + 9 = 21$. P(first is yellow) = $12/21$. P(second is yellow given first was yellow) = $11/20$. P(both yellow) = $(12/21) \\times (11/20) = (4/7) \\times (11/20) = 44 / 140 = 11 / 35$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Probability"]
  },
  {
    id: "est1_2026_sample_30",
    question: "The vertex form of the equation $y = 4x^2 + 12x - 5$ is $y = 4(x + b)^2 - c$. What is the value of $c - b - 3$?",
    options: ["8.0", "9.5", "10.5", "14.0"],
    correctAnswer: 1,
    explanation: "Complete the square: $y = 4(x^2 + 3x) - 5 = 4(x^2 + 3x + 2.25) - 5 - 4(2.25) = 4(x + 1.5)^2 - 14$. So $b = 1.5$ and $c = 14$. Then $c - b - 3 = 14 - 1.5 - 3 = 9.5$.",
    category: "Passport to Advanced Math",
    topics: ["Quadratic Functions", "Vertex Form"]
  },
  {
    id: "est1_2026_sample_31",
    question: "Amjad and Ali are preparing for a math exam. The probability of Amjad passing is 0.65. The probability of both Ali and Amjad failing is 0.25. Assuming independent events, what is the probability, rounded to the nearest tenth, that both pass?",
    options: ["0.6", "0.3", "0.2", "0.1"],
    correctAnswer: 2,
    explanation: "P(Amjad fails) = $1 - 0.65 = 0.35$. P(both fail) = P(Amjad fails) $\\times$ P(Ali fails) = $0.35 \\times$ P(Ali fails) = 0.25. P(Ali fails) = $0.25 / 0.35 = 5/7$. P(Ali passes) = $1 - 5/7 = 2/7$. P(both pass) = $0.65 \\times (2/7) = 1.3 / 7 \\approx 0.1857 \\approx 0.2$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Probability", "Independent Events"]
  },
  {
    id: "est1_2026_sample_32",
    question: "A survey was conducted to determine the number of pens owned by employees in a company. The table below shows the number of employees who own 1, 2, 3, and 5 pens. What is the product of the mean, median, and mode of the number of pens?\n\n| Number of pens | 1 | 2 | 3 | 5 |\n|---|---|---|---|---|\n| Number of employees | 23 | 17 | 25 | 10 |",
    options: ["10.25", "13.50", "14.50", "14.56"],
    correctAnswer: 3,
    explanation: "Total employees = $23+17+25+10 = 75$. Sum of pens = $1(23)+2(17)+3(25)+5(10) = 23+34+75+50 = 182$. Mean = $182/75$. Median is the 38th value. First 23 are '1', next 17 are '2' (up to 40th). So median = 2. Mode is 3 (highest frequency 25). Product = $(182/75) \\times 2 \\times 3 = 182/75 \\times 6 = 1092/75 = 14.56$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Statistics", "Mean, Median, Mode"]
  },
  {
    id: "est1_2026_sample_33",
    question: "Evaluate: $9^2 + 4[6 \\times (-5) + 7] + 10 =$",
    options: ["-2", "-1", "2", "6"],
    correctAnswer: 1,
    explanation: "$81 + 4[-30 + 7] + 10 = 81 + 4[-23] + 10 = 81 - 92 + 10 = -1$.",
    category: "Heart of Algebra",
    topics: ["Order of Operations"]
  },
  {
    id: "est1_2026_sample_34",
    question: "If the point $(a, b)$, where $a > 1$ and both $a$ and $b$ integers, lies in the solution set of $x + y < 13$ and $y - x > 7$, what is the value of $b^a$?",
    options: ["100", "225", "1,000", "1,024"],
    correctAnswer: 0,
    explanation: "We have $y < 13 - x$ and $y > x + 7$. So $x + 7 < y < 13 - x$. This requires $x + 7 < 13 - x \\Rightarrow 2x < 6 \\Rightarrow x < 3$. Since $x > 1$ and is an integer, $x = 2$. Then $2 + 7 < y < 13 - 2 \\Rightarrow 9 < y < 11$. Since $y$ is an integer, $y = 10$. So $a = 2, b = 10$. $b^a = 10^2 = 100$.",
    category: "Heart of Algebra",
    topics: ["Systems of Inequalities"]
  },
  {
    id: "est1_2026_sample_35",
    question: "A company sells electric scooters for $625 each. Last month, they decided to apply a 10% tax fee on all products. This month, they reduced the total price of a scooter by 15%. Approximately, how much does a scooter cost now?",
    options: ["$531.2", "$584.4", "$593.7", "$687.5"],
    correctAnswer: 1,
    explanation: "Price after tax = $625 \\times 1.10 = 687.5$. Price after reduction = $687.5 \\times (1 - 0.15) = 687.5 \\times 0.85 = 584.375 \\approx \\$584.4$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Percentages"]
  },
  {
    id: "est1_2026_sample_36",
    question: "To watch a movie, Fady bought 4 adult tickets and 1 child ticket for $46, while Samer bought 3 adult tickets and 2 child tickets for $42. What is the price of 1 child ticket?",
    options: ["$5", "$6", "$8", "$10"],
    correctAnswer: 1,
    explanation: "System: $4A + C = 46$ and $3A + 2C = 42$. From first, $C = 46 - 4A$. Substitute into second: $3A + 2(46 - 4A) = 42 \\Rightarrow 3A + 92 - 8A = 42 \\Rightarrow -5A = -50 \\Rightarrow A = 10$. Then $C = 46 - 4(10) = 6$.",
    category: "Heart of Algebra",
    topics: ["Systems of Linear Equations"]
  },
  {
    id: "est1_2026_sample_37",
    question: "In Turkey, the dollar exchange rate increased from 32.2 TRY in May 2024 to 38.5 TRY in May 2025. What was the percentage increase, rounded to the nearest whole percent?",
    options: ["15%", "19%", "20%", "30%"],
    correctAnswer: 2,
    explanation: "Increase = $38.5 - 32.2 = 6.3$. Percentage increase = $(6.3 / 32.2) \\times 100 \\approx 19.56\\%$, which rounds to $20\\%$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Percentages"]
  },
  {
    id: "est1_2026_sample_38",
    question: "Consider triangle ABC, right-angled at A. If $\\sin(C) = \\frac{\\sqrt{2}}{2}$, what is the measure of angle B?",
    options: ["60°", "45°", "30°", "15°"],
    correctAnswer: 1,
    explanation: "Since $\\sin(C) = \\sqrt{2}/2$, angle $C = 45^\\circ$. In a right triangle, the acute angles sum to $90^\\circ$. So angle $B = 90^\\circ - 45^\\circ = 45^\\circ$.",
    category: "Additional Topics in Math",
    topics: ["Trigonometry"]
  },
  {
    id: "est1_2026_sample_39",
    question: "In the figure, the area of triangle ABE is $31.5\\text{ cm}^2$. If $FE = \\frac{2}{3}BE$, what is the area of the parallelogram ANFE?",
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-48 w-auto">
  <polygon points="100,150 250,150 120,50" fill="none" stroke="black" stroke-width="1.5"/>
  <polygon points="250,150 350,150 220,50 120,50" fill="none" stroke="black" stroke-width="1.5"/>
  <line x1="120" y1="50" x2="120" y2="150" stroke="black" stroke-width="1.5" stroke-dasharray="4"/>
  <rect x="120" y="145" width="5" height="5" fill="none" stroke="black"/>
  <circle cx="120" cy="50" r="3" fill="gray" stroke="black"/>
  <circle cx="220" cy="50" r="3" fill="gray" stroke="black"/>
  <circle cx="100" cy="150" r="3" fill="gray" stroke="black"/>
  <circle cx="250" cy="150" r="3" fill="gray" stroke="black"/>
  <circle cx="350" cy="150" r="3" fill="gray" stroke="black"/>
  <text x="110" y="45" font-size="14" font-style="italic">A</text>
  <text x="220" y="45" font-size="14" font-style="italic">N</text>
  <text x="90" y="165" font-size="14" font-style="italic">B</text>
  <text x="245" y="165" font-size="14" font-style="italic">E</text>
  <text x="350" y="165" font-size="14" font-style="italic">F</text>
  <text x="130" y="100" font-size="12">7 cm</text>
</svg>`,
    options: ["18 cm²", "21 cm²", "42 cm²", "54 cm²"],
    correctAnswer: 2,
    explanation: "Area of $\\triangle ABE = \\frac{1}{2} \\times BE \\times h = 31.5$. Area of parallelogram $ANFE = \\text{base} \\times \\text{height} = FE \\times h$. Since $FE = \\frac{2}{3}BE$, Area $= \\frac{2}{3}BE \\times h = \\frac{4}{3} \\times (\\frac{1}{2} \\times BE \\times h) = \\frac{4}{3} \\times 31.5 = 42\\text{ cm}^2$.",
    category: "Additional Topics in Math",
    topics: ["Geometry", "Area"]
  },
  {
    id: "est1_2026_sample_40",
    question: "The vertical asymptote of the graph of $f(x) = \\frac{2}{x + 4} - 1$ is $x = a$, while its horizontal asymptote is $y = b$. What is the value of $|b + a|$?",
    options: ["1", "3", "4", "5"],
    correctAnswer: 3,
    explanation: "Vertical asymptote occurs where denominator is zero: $x + 4 = 0 \\Rightarrow x = -4$, so $a = -4$. Horizontal asymptote is the constant term as $x \\to \\infty$: $y = -1$, so $b = -1$. $|b + a| = |-1 - 4| = |-5| = 5$.",
    category: "Passport to Advanced Math",
    topics: ["Rational Functions", "Asymptotes"]
  },
  {
    id: "est1_2026_sample_41",
    question: "If $\\frac{13}{8}a + 7x = \\frac{1}{2}$ and $x = 1$, what is the value of $a$?",
    options: ["-2", "-3", "-4", "-8"],
    correctAnswer: 2,
    explanation: "Substitute $x=1$: $\\frac{13}{8}a + 7 = \\frac{1}{2} \\Rightarrow \\frac{13}{8}a = \\frac{1}{2} - 7 = -\\frac{13}{2} \\Rightarrow a = -\\frac{13}{2} \\times \\frac{8}{13} = -4$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2026_sample_42",
    question: "The interior angles of a hexagon are in the ratio 2:3:4:5:5:6. What is the measure of the largest angle in this hexagon?",
    options: ["118.5°", "136.0°", "172.5°", "172.8°"],
    correctAnswer: 3,
    explanation: "Sum of interior angles of a hexagon = $(6-2) \\times 180^\\circ = 720^\\circ$. Sum of ratio parts = $2+3+4+5+5+6 = 25$. Largest angle = $(6 / 25) \\times 720^\\circ = 172.8^\\circ$.",
    category: "Additional Topics in Math",
    topics: ["Geometry", "Polygons"]
  },
  {
    id: "est1_2026_sample_43",
    question: "A company has 6 stores in different cities in Egypt. The table below shows the number of staff members in each store. If the Giza store increases its staff members to 42, which of the following is true regarding the new average?\n\n| City | Cairo | Alexandria | Port Said | Giza | Aswan | Luxor |\n|---|---|---|---|---|---|---|\n| Number of staff members | 33 | 37 | 19 | 30 | 11 | 10 |",
    options: [
      "The average will decrease",
      "The average will increase by 2",
      "The average will increase by 4",
      "The average will not change"
    ],
    correctAnswer: 1,
    explanation: "The total number of staff increases by $42 - 30 = 12$. Since there are 6 stores, the average increases by $12 / 6 = 2$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Statistics", "Mean"]
  },
  {
    id: "est1_2026_sample_44",
    question: "What is the value of $x$ if $4|2x + 1| = 10$ and $x < 0$?",
    options: ["1.75", "0.75", "-1.75", "-2.0"],
    correctAnswer: 2,
    explanation: "$|2x + 1| = 10 / 4 = 2.5$. This gives $2x + 1 = 2.5 \\Rightarrow 2x = 1.5 \\Rightarrow x = 0.75$ OR $2x + 1 = -2.5 \\Rightarrow 2x = -3.5 \\Rightarrow x = -1.75$. Since $x < 0$, $x = -1.75$.",
    category: "Heart of Algebra",
    topics: ["Absolute Value Equations"]
  },
  {
    id: "est1_2026_sample_45",
    question: "The area of the sector containing the major arc BC in the figure is:",
    svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-64 w-auto">
  <defs>
    <pattern id="grid3" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e0e0e0" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="300" height="300" fill="url(#grid3)" />
  <!-- Origin at (90, 210). 1 unit = 30px -->
  <line x1="0" y1="210" x2="300" y2="210" stroke="black" stroke-width="1.5"/>
  <line x1="90" y1="0" x2="90" y2="300" stroke="black" stroke-width="1.5"/>
  <circle cx="150" cy="150" r="123.69" fill="none" stroke="black" stroke-width="2"/>
  <line x1="150" y1="150" x2="270" y2="180" stroke="black" stroke-width="1.5"/>
  <line x1="150" y1="150" x2="120" y2="270" stroke="black" stroke-width="1.5"/>
  <path d="M 135 150 A 15 15 0 1 1 165 150 A 15 15 0 0 1 164.5 153.7" fill="#9CA3AF" stroke="black"/>
  <text x="110" y="130" font-size="14">270°</text>
  <circle cx="150" cy="150" r="4" fill="gray" stroke="black"/>
  <circle cx="270" cy="180" r="4" fill="gray" stroke="black"/>
  <circle cx="120" cy="270" r="4" fill="gray" stroke="black"/>
  <text x="155" y="165" font-size="14" font-style="italic">A</text>
  <text x="275" y="175" font-size="14" font-style="italic">B</text>
  <text x="105" y="265" font-size="14" font-style="italic">C</text>
  <text x="285" y="225" font-size="12" font-style="italic">x</text>
  <text x="75" y="15" font-size="12" font-style="italic">y</text>
  <text x="25" y="225" font-size="10">-2</text>
  <text x="55" y="225" font-size="10">-1</text>
  <text x="115" y="225" font-size="10">1</text>
  <text x="145" y="225" font-size="10">2</text>
  <text x="175" y="225" font-size="10">3</text>
  <text x="205" y="225" font-size="10">4</text>
  <text x="235" y="225" font-size="10">5</text>
  <text x="265" y="225" font-size="10">6</text>
  <text x="75" y="275" font-size="10">-2</text>
  <text x="75" y="245" font-size="10">-1</text>
  <text x="75" y="185" font-size="10">1</text>
  <text x="75" y="155" font-size="10">2</text>
  <text x="75" y="125" font-size="10">3</text>
  <text x="75" y="95" font-size="10">4</text>
  <text x="75" y="65" font-size="10">5</text>
  <text x="75" y="35" font-size="10">6</text>
</svg>`, 
    options: [
      "\\sqrt{17}/4 \\pi squared units",
      "17/4 \\pi squared units",
      "51/4 \\pi squared units",
      "17\\pi squared units"
    ],
    correctAnswer: 2,
    explanation: "Radius $r^2 = (2-1)^2 + (2 - (-2))^2 = 1^2 + 4^2 = 17$. Area of circle = $17\\pi$. The major arc is $270^\\circ$, which is $270/360 = 3/4$ of the circle. Area of sector = $(3/4) \\times 17\\pi = 51\\pi/4$.",
    category: "Additional Topics in Math",
    topics: ["Geometry", "Circles", "Sectors"]
  },
  {
    id: "est1_2026_sample_46",
    question: "Which of the points below does not satisfy the system of inequalities: $2x - y \\le 4$ and $y + 4x > 1$?",
    options: ["(-1, 6)", "(1, 2)", "(0, 5)", "(-1, 1)"],
    correctAnswer: 3,
    explanation: "Test (-1, 1): $2(-1) - 1 = -3 \\le 4$ (True). $1 + 4(-1) = -3 > 1$ (False). So (-1, 1) does not satisfy the system.",
    category: "Heart of Algebra",
    topics: ["Systems of Inequalities"]
  },
  {
    id: "est1_2026_sample_47",
    question: "What is the value of $x$ if $\\frac{3}{x - 3} = \\sqrt{3}$?",
    options: ["\\sqrt{3}", "3", "3 + \\sqrt{3}", "\\sqrt{6}"],
    correctAnswer: 2,
    explanation: "$x - 3 = 3 / \\sqrt{3} = \\sqrt{3}$. Therefore, $x = 3 + \\sqrt{3}$.",
    category: "Passport to Advanced Math",
    topics: ["Radical Equations"]
  },
  {
    id: "est1_2026_sample_48",
    question: "In the identity $2x^3 + 2x^2 + 4x - 8 = (x^2 + bx + 4)(2x - a)$, true for every real $x$, $a$ and $b$ are two integers. Which of the following expressions has the smallest value?",
    options: ["-4a - b", "a - 8", "2b - 12", "b^2 - 8"],
    correctAnswer: 0,
    explanation: "Expand RHS: $2x^3 - ax^2 + 2bx^2 - abx + 8x - 4a$. Equate constant terms: $-8 = -4a \\Rightarrow a = 2$. Equate $x^2$ terms: $2 = 2b - a \\Rightarrow 2 = 2b - 2 \\Rightarrow 2b = 4 \\Rightarrow b = 2$. Evaluate options: A) $-4(2) - 2 = -10$. B) $2 - 8 = -6$. C) $2(2) - 12 = -8$. D) $2^2 - 8 = -4$. Smallest is -10.",
    category: "Passport to Advanced Math",
    topics: ["Polynomials", "Identities"]
  },
  {
    id: "est1_2026_sample_49",
    question: "The domain of definition of the function $h(x) = \\frac{6}{\\sqrt{-2x + 7}}$ is:",
    options: ["(-\\infty, 3.5)", "(0, +\\infty)", "[3.5, +\\infty)", "(3.5, +\\infty)"],
    correctAnswer: 0,
    explanation: "The expression inside the square root in the denominator must be strictly positive: $-2x + 7 > 0 \\Rightarrow 2x < 7 \\Rightarrow x < 3.5$. Domain is $(-\\infty, 3.5)$.",
    category: "Passport to Advanced Math",
    topics: ["Functions", "Domain"]
  },
  {
    id: "est1_2026_sample_50",
    question: "What is the number of real solutions in the equation $4\\sqrt{x - 4} = x$?",
    options: ["3", "2", "1", "0"],
    correctAnswer: 2,
    explanation: "Square both sides: $16(x - 4) = x^2 \\Rightarrow x^2 - 16x + 64 = 0 \\Rightarrow (x - 8)^2 = 0 \\Rightarrow x = 8$. Check the solution: $4\\sqrt{8 - 4} = 4\\sqrt{4} = 8$. It works. There is 1 solution.",
    category: "Passport to Advanced Math",
    topics: ["Radical Equations"]
  }
];
