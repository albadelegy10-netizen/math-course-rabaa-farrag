import { Question } from "../../types";

export const ACT2_PERCENTAGE_SET: Question[] = [
  {
    id: "act2_perc_1",
    question: "A school surveyed $115$ students about their favorite academic subject. The pie chart below shows the student distribution across English ($20$), Math ($25$), Science ($40$), and French ($30$). What percentage of the surveyed students chose Math as their favorite subject?",
    svg: `<svg viewBox="0 0 300 220" class="w-full max-w-xs mx-auto my-2">
  <circle cx="110" cy="110" r="80" fill="#f3f4f6" stroke="#1f2937" stroke-width="2"/>
  <path d="M110,110 L110,30 A80,80 0 0,1 181.2,73.4 Z" fill="#93c5fd" stroke="#1f2937" stroke-width="1.5"/>
  <path d="M110,110 L181.2,73.4 A80,80 0 0,1 157.0,174.7 Z" fill="#86efac" stroke="#1f2937" stroke-width="1.5"/>
  <path d="M110,110 L157.0,174.7 A80,80 0 0,1 31.7,94.2 Z" fill="#fde047" stroke="#1f2937" stroke-width="1.5"/>
  <path d="M110,110 L31.7,94.2 A80,80 0 0,1 110,30 Z" fill="#fca5a5" stroke="#1f2937" stroke-width="1.5"/>
  <rect x="205" y="40" width="12" height="12" fill="#93c5fd" stroke="#1f2937"/>
  <text x="222" y="51" font-size="11" fill="#1f2937">English (20)</text>
  <rect x="205" y="65" width="12" height="12" fill="#86efac" stroke="#1f2937"/>
  <text x="222" y="76" font-size="11" font-weight="bold" fill="#1f2937">Math (25)</text>
  <rect x="205" y="90" width="12" height="12" fill="#fde047" stroke="#1f2937"/>
  <text x="222" y="101" font-size="11" fill="#1f2937">Science (40)</text>
  <rect x="205" y="115" width="12" height="12" fill="#fca5a5" stroke="#1f2937"/>
  <text x="222" y="126" font-size="11" fill="#1f2937">French (30)</text>
</svg>`,
    options: ["$17.39\\%$", "$21.74\\%$", "$26.09\\%$", "$34.78\\%$"],
    correctAnswer: 1,
    explanation: "Total students = $20 + 25 + 40 + 30 = 115$. Using the part-to-whole percentage formula $P = \\frac{\\text{Part}}{\\text{Total}} \\times 100\\%$: \n$$ P = \\frac{25}{115} \\times 100\\% \\approx 21.74\\% $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_2",
    question: "The population of a city is currently $9\\text{ million}$. If the population increases by $5\\%$ after one year, what will be the population of the city at the end of the year?",
    options: ["$9.05\\text{ million}$", "$9.45\\text{ million}$", "$9.50\\text{ million}$", "$9.90\\text{ million}$"],
    correctAnswer: 1,
    explanation: "Using the single-period percentage change formula $\\text{New} = \\text{Old}(1 + p)$ where $p = 0.05$:\n$$ \\text{New} = 9 \\times (1 + 0.05) = 9 \\times 1.05 = 9.45\\text{ million} $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_3",
    question: "A T-shirt has an original price of $\$500$. If a store applies a $20\\%$ discount, what is the new price of the T-shirt?",
    options: ["$\$380$", "$\$400$", "$\$420$", "$\$450$"],
    correctAnswer: 1,
    explanation: "Using the single-period discount formula $\\text{New} = \\text{Old}(1 - p)$ where $p = 0.20$:\n$$ \\text{New} = 500 \\times (1 - 0.20) = 500 \\times 0.80 = \\$400 $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_4",
    question: "In $2020$, the population of Cairo was $9\\text{ million}$. If the population increases by $5\\%$ every year, which expression gives the population in $2030$?",
    options: ["$9(1 + 0.05)^{10}$", "$9(1 + 0.50)^{10}$", "$9 + 10(0.05)$", "$9(1 + 0.05 \\times 10)$"],
    correctAnswer: 0,
    explanation: "Calculate elapsed years $t = 2030 - 2020 = 10\\text{ years}$. Using the compound annual growth formula $\\text{New} = \\text{Old}(1 + p)^t$ with $\\text{Old} = 9$ and $p = 0.05$:\n$$ \\text{New} = 9(1 + 0.05)^{10} $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_5",
    question: "The population of a metropolitan area is $10\\text{ million}$. If it increases by $12\\%$ every $8\\text{ years}$, how many millions of people will there be after $6\\text{ years}$?",
    options: ["$10.52\\text{ million}$", "$10.88\\text{ million}$", "$11.20\\text{ million}$", "$11.88\\text{ million}$"],
    correctAnswer: 1,
    explanation: "Using the interval compounding formula $\\text{New} = \\text{Old}(1 + p)^{\\frac{t}{E}}$ where $\\text{Old} = 10$, $p = 0.12$, $E = 8$, and $t = 6$:\n$$ \\text{New} = 10 \\times (1 + 0.12)^{\\frac{6}{8}} = 10 \\times (1.12)^{0.75} \\approx 10.88\\text{ million} $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_6",
    question: "A city has an initial population of $10\\text{ million}$. If it grows at a constant annual rate of $2\\%$ every year, what will the population be after $6\\text{ years}$?",
    options: ["$11.12\\text{ million}$", "$11.26\\text{ million}$", "$11.38\\text{ million}$", "$12.00\\text{ million}$"],
    correctAnswer: 1,
    explanation: "Using $\\text{New} = \\text{Old}(1 + p)^t$ with $\\text{Old} = 10$, $p = 0.02$, and $t = 6$:\n$$ \\text{New} = 10 \\times (1 + 0.02)^6 = 10 \\times (1.02)^6 \\approx 11.26\\text{ million} $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_7",
    question: "A company distributes its annual budget into four departments: Research ($35\\%$), Marketing ($25\\%$), Operations ($30\\%$), and Human Resources ($10\\%$). In a pie chart representing this budget, what is the central angle measure for the Research sector?",
    options: ["$90^\\circ$", "$108^\\circ$", "$126^\\circ$", "$140^\\circ$"],
    correctAnswer: 2,
    explanation: "The central angle $\\theta$ for a sector is proportional to its percentage:\n$$ \\theta = \\frac{\\text{Percentage}}{100} \\times 360^\\circ = 0.35 \\times 360^\\circ = 126^\\circ $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_8",
    question: "An electronic device costs $\$180$ before sales tax. If a state sales tax of $7.5\\%$ is added at the register, what is the total final cost of the device?",
    options: ["$\\$191.25$", "$\\$193.50$", "$\\$195.00$", "$\\$198.50$"],
    correctAnswer: 1,
    explanation: "Using $\\text{Total} = \\text{Price}(1 + \\text{tax rate})$:\n$$ \\text{Total} = 180 \\times (1 + 0.075) = 180 \\times 1.075 = \\$193.50 $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_9",
    question: "The histogram below displays the scores of $50$ students on a math assessment. What percentage of the students scored in the $80-89$ interval?",
    svg: `<svg viewBox="0 0 320 180" class="w-full max-w-xs mx-auto my-2">
  <line x1="40" y1="140" x2="300" y2="140" stroke="#000" stroke-width="1.5"/>
  <line x1="40" y1="20" x2="40" y2="140" stroke="#000" stroke-width="1.5"/>
  <line x1="35" y1="140" x2="40" y2="140" stroke="#000"/><text x="28" y="144" font-size="10" text-anchor="end">0</text>
  <line x1="35" y1="110" x2="40" y2="110" stroke="#000"/><text x="28" y="114" font-size="10" text-anchor="end">5</text>
  <line x1="35" y1="80" x2="40" y2="80" stroke="#000"/><text x="28" y="84" font-size="10" text-anchor="end">10</text>
  <line x1="35" y1="50" x2="40" y2="50" stroke="#000"/><text x="28" y="54" font-size="10" text-anchor="end">15</text>
  <line x1="35" y1="20" x2="40" y2="20" stroke="#000"/><text x="28" y="24" font-size="10" text-anchor="end">20</text>
  <line x1="40" y1="110" x2="300" y2="110" stroke="#e5e7eb" stroke-dasharray="2"/>
  <line x1="40" y1="80" x2="300" y2="80" stroke="#e5e7eb" stroke-dasharray="2"/>
  <line x1="40" y1="50" x2="300" y2="50" stroke="#e5e7eb" stroke-dasharray="2"/>
  <rect x="50" y="92" width="45" height="48" fill="#93c5fd" stroke="#1f2937"/>
  <text x="72" y="87" font-size="10" text-anchor="middle">8</text>
  <rect x="100" y="56" width="45" height="84" fill="#93c5fd" stroke="#1f2937"/>
  <text x="122" y="51" font-size="10" text-anchor="middle">14</text>
  <rect x="150" y="32" width="45" height="108" fill="#86efac" stroke="#1f2937" stroke-width="2"/>
  <text x="172" y="27" font-size="10" font-weight="bold" text-anchor="middle">18</text>
  <rect x="200" y="80" width="45" height="60" fill="#93c5fd" stroke="#1f2937"/>
  <text x="222" y="75" font-size="10" text-anchor="middle">10</text>
  <text x="72" y="155" font-size="9" text-anchor="middle">60-69</text>
  <text x="122" y="155" font-size="9" text-anchor="middle">70-79</text>
  <text x="172" y="155" font-size="9" font-weight="bold" text-anchor="middle">80-89</text>
  <text x="222" y="155" font-size="9" text-anchor="middle">90-99</text>
</svg>`,
    options: ["$30\\%$", "$36\\%$", "$40\\%$", "$45\\%$"],
    correctAnswer: 1,
    explanation: "Total students = $50$. Frequency of $80-89$ score interval = $18$. Percentage = $\\frac{18}{50} \\times 100\\% = 36\\%$.",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_10",
    question: "An industrial machine depreciates in value by $15\\%$ each year. If its initial purchase price was $\$80,000$, what is its value after $4\\text{ years}$?",
    options: ["$\\$32,000.00$", "$\\$41,760.50$", "$\\$45,000.00$", "$\\$48,000.00$"],
    correctAnswer: 1,
    explanation: "Using the annual decay compounding formula $\\text{New} = \\text{Old}(1 - p)^t$:\n$$ \\text{New} = 80000 \\times (1 - 0.15)^4 = 80000 \\times (0.85)^4 = 80000 \\times 0.52200625 = \\$41,760.50 $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_11",
    question: "An investment fund increases in value by $25\\%$ every $5\\text{ years}$. If the initial deposit was $\$12,000$, how much will the fund be worth after $12\\text{ years}$?",
    options: ["$\\$18,000.00$", "$\\$19,200.00$", "$\\$20,506.15$", "$\\$22,500.00$"],
    correctAnswer: 2,
    explanation: "Using interval compounding $\\text{New} = \\text{Old}(1 + p)^{\\frac{t}{E}}$ with $\\text{Old} = 12000$, $p = 0.25$, $E = 5$, and $t = 12$:\n$$ \\text{New} = 12000 \\times (1 + 0.25)^{\\frac{12}{5}} = 12000 \\times (1.25)^{2.4} \\approx 12000 \\times 1.708846 = \\$20,506.15 $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_12",
    question: "In a pie chart showing global renewable energy sources, Sector A (Solar) is $18\\%$, Sector B (Wind) is $27\\%$, Sector C (Hydro) is $35\\%$, and Sector D (Geothermal) is the remaining percentage. What is the central angle measure for Sector D?",
    options: ["$54^\\circ$", "$72^\\circ$", "$90^\\circ$", "$108^\\circ$"],
    correctAnswer: 1,
    explanation: "Calculate remaining percentage for Sector D:\n$$ 100\\% - (18\\% + 27\\% + 35\\%) = 100\\% - 80\\% = 20\\% $$\nCentral angle $\\theta = 0.20 \\times 360^\\circ = 72^\\circ$.",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_13",
    question: "After receiving a $15\\%$ salary raise, Hassan's new monthly income is $\$4,600$. What was his monthly income before the raise?",
    options: ["$\\$3,910.00$", "$\\$4,000.00$", "$\\$4,120.00$", "$\\$4,250.00$"],
    correctAnswer: 1,
    explanation: "Using reverse single-period percentage formula $\\text{New} = \\text{Old}(1 + p)$:\n$$ 4600 = \\text{Old} \\times (1 + 0.15) = \\text{Old} \\times 1.15 \\implies \\text{Old} = \\frac{4600}{1.15} = \\$4,000 $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_14",
    question: "The market value of a vintage vehicle grew at a constant rate of $8\\%$ per year for $5\\text{ years}$. If its current value is $\$14,693.28$, what was its value $5\\text{ years}$ ago?",
    options: ["$\\$9,500.00$", "$\\$10,000.00$", "$\\$10,500.00$", "$\\$11,000.00$"],
    correctAnswer: 1,
    explanation: "Using $\\text{New} = \\text{Old}(1 + p)^t$:\n$$ 14693.28 = \\text{Old} \\times (1.08)^5 \\implies 14693.28 = \\text{Old} \\times 1.469328 \\implies \\text{Old} = \\frac{14693.28}{1.469328} = \\$10,000 $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_15",
    question: "A biological specimen grows by $40\\%$ every $4\\text{ years}$. If the current population after $10\\text{ years}$ of growth is $23,124$ organisms, what was the initial population?",
    options: ["$10,000$", "$12,000$", "$14,000$", "$15,000$"],
    correctAnswer: 0,
    explanation: "Using $\\text{New} = \\text{Old}(1 + p)^{\\frac{t}{E}}$ with $p = 0.40$, $E = 4$, $t = 10$:\n$$ 23124 = \\text{Old} \\times (1.40)^{\\frac{10}{4}} = \\text{Old} \\times (1.40)^{2.5} \\approx \\text{Old} \\times 2.31242 \\implies \\text{Old} = \\frac{23124}{2.31242} \\approx 10,000 $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_16",
    question: "A histogram represents the exam scores of $50$ students grouped into intervals: $50-59$ ($4$), $60-69$ ($8$), $70-79$ ($12$), $80-89$ ($16$), and $90-99$ ($10$). What percentage of students scored at least $80$?",
    svg: `<svg viewBox="0 0 320 180" class="w-full max-w-xs mx-auto my-2">
  <line x1="40" y1="140" x2="300" y2="140" stroke="#000" stroke-width="1.5"/>
  <line x1="40" y1="20" x2="40" y2="140" stroke="#000" stroke-width="1.5"/>
  <rect x="45" y="116" width="45" height="24" fill="#cbd5e1" stroke="#1f2937"/>
  <rect x="95" y="92" width="45" height="48" fill="#cbd5e1" stroke="#1f2937"/>
  <rect x="145" y="68" width="45" height="72" fill="#cbd5e1" stroke="#1f2937"/>
  <rect x="195" y="44" width="45" height="96" fill="#86efac" stroke="#1f2937" stroke-width="2"/>
  <rect x="245" y="80" width="45" height="60" fill="#86efac" stroke="#1f2937" stroke-width="2"/>
  <text x="67" y="155" font-size="8" text-anchor="middle">50-59</text>
  <text x="117" y="155" font-size="8" text-anchor="middle">60-69</text>
  <text x="167" y="155" font-size="8" text-anchor="middle">70-79</text>
  <text x="217" y="155" font-size="8" font-weight="bold" text-anchor="middle">80-89</text>
  <text x="267" y="155" font-size="8" font-weight="bold" text-anchor="middle">90-99</text>
</svg>`,
    options: ["$32\\%$", "$40\\%$", "$52\\%$", "$60\\%$"],
    correctAnswer: 2,
    explanation: "Total students = $50$. Students scoring at least $80$ are in intervals $80-89$ ($16$) and $90-99$ ($10$):\n$$ \\text{Total } \\ge 80 = 16 + 10 = 26 \\implies P = \\frac{26}{50} \\times 100\\% = 52\\% $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_17",
    question: "The stock price of a technology company increased by $20\\%$ in Year 1 and then decreased by $20\\%$ in Year 2. Compared to the original price before Year 1, how did the final stock price change?",
    options: ["No change ($0\\%$)", "Decreased by $4\\%$", "Increased by $4\\%$", "Decreased by $2\\%$"],
    correctAnswer: 1,
    explanation: "Using successive percentage multipliers:\n$$ \\text{Final} = \\text{Old} \\times (1 + 0.20) \\times (1 - 0.20) = \\text{Old} \\times 1.20 \\times 0.80 = 0.96 \\times \\text{Old} $$\nOverall change = $0.96 - 1 = -0.04 = -4\\%$ (a $4\\%$ decrease).",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_18",
    question: "A retailer marks down a suit by $30\\%$. During a weekend clearance sale, an additional $10\\%$ discount is applied to the reduced price. What single percentage discount is equivalent to these two successive discounts?",
    options: ["$37\\%$", "$40\\%$", "$33\\%$", "$27\\%$"],
    correctAnswer: 0,
    explanation: "Multiply the discount factors:\n$$ \\text{Final Price} = \\text{Original} \\times (1 - 0.30) \\times (1 - 0.10) = \\text{Original} \\times 0.70 \\times 0.90 = 0.63 \\times \\text{Original} $$\nEquivalent single discount = $100\\% - 63\\% = 37\\%$.",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_19",
    question: "A pie chart represents the election votes for four candidates A, B, C, and D. Candidate A received $40\\%$ of the votes, Candidate B received $25\\%$, and Candidate C received $20\\%$. If Candidate D received $180$ votes, what was the total number of votes cast?",
    options: ["$1,000$", "$1,200$", "$1,500$", "$1,800$"],
    correctAnswer: 1,
    explanation: "Calculate Candidate D's vote percentage:\n$$ P_D = 100\\% - (40\\% + 25\\% + 20\\%) = 100\\% - 85\\% = 15\\% $$\nUsing Part-to-Whole formula: $180 = 0.15 \\times \\text{Total} \\implies \\text{Total} = \\frac{180}{0.15} = 1,200$.",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_20",
    question: "A radioactive material decays by $30\\%$ every $3\\text{ years}$. If the initial mass was $500\\text{ grams}$, what is the remaining mass after $9\\text{ years}$?",
    options: ["$171.5\\text{ grams}$", "$215.0\\text{ grams}$", "$245.0\\text{ grams}$", "$343.0\\text{ grams}$"],
    correctAnswer: 0,
    explanation: "Using $\\text{New} = \\text{Old}(1 - p)^{\\frac{t}{E}}$ with $\\text{Old} = 500$, $p = 0.30$, $E = 3$, $t = 9 \\implies \\frac{t}{E} = 3$:\n$$ \\text{New} = 500 \\times (1 - 0.30)^3 = 500 \\times (0.70)^3 = 500 \\times 0.343 = 171.5\\text{ grams} $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_21",
    question: "The histogram below displays worker salary distribution in thousands of dollars ($30-39\\text{k}$: $15$, $40-49\\text{k}$: $25$, $50-59\\text{k}$: $35$, $60-69\\text{k}$: $20$, $70-79\\text{k}$: $5$). What percentage of workers earn less than $\$50,000$?",
    options: ["$25\\%$", "$35\\%$", "$40\\%$", "$60\\%$"],
    correctAnswer: 2,
    explanation: "Total workers = $15 + 25 + 35 + 20 + 5 = 100$. Workers earning under $\$50\\text{k}$ are in ranges $30-39\\text{k}$ ($15$) and $40-49\\text{k}$ ($25$):\n$$ \\text{Total } < 50\\text{k} = 15 + 25 = 40 \\implies P = \\frac{40}{100} \\times 100\\% = 40\\% $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_22",
    question: "A population of bacteria doubles (increases by $100\\%$) every $5\\text{ hours}$. If an initial culture contains $1,500$ bacteria, how many bacteria will be present after $15\\text{ hours}$?",
    options: ["$4,500$", "$6,000$", "$12,000$", "$24,000$"],
    correctAnswer: 2,
    explanation: "Here rate $p = 1.00$, $E = 5\\text{ hours}$, $t = 15\\text{ hours} \\implies \\frac{t}{E} = 3$ intervals:\n$$ \\text{New} = 1500 \\times (1 + 1.00)^3 = 1500 \\times 2^3 = 1500 \\times 8 = 12,000 $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_23",
    question: "A pie chart represents $800$ commuters' preferred transport mode: Car ($45\\%$), Bus ($30\\%$), Bicycle ($15\\%$), and Walking ($10\\%$). How many more respondents commute by Car than by Bicycle?",
    options: ["$120$", "$160$", "$240$", "$360$"],
    correctAnswer: 2,
    explanation: "Difference in percentage = $45\\% - 15\\% = 30\\%$. Difference in commuters = $0.30 \\times 800 = 240$.",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_24",
    question: "A corporation's annual net revenue grew from $\$2.5\\text{ million}$ in $2021$ to $\$3.2\\text{ million}$ in $2022$. What was the percentage increase in revenue?",
    options: ["$22\\%$", "$28\\%$", "$32\\%$", "$35\\%$"],
    correctAnswer: 1,
    explanation: "Percentage increase formula $\\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100\\%$: \n$$ P = \\frac{3.2 - 2.5}{2.5} \\times 100\\% = \\frac{0.7}{2.5} \\times 100\\% = 28\\% $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_25",
    question: "A $600\\text{ mL}$ chemical mixture is $20\\%$ acid. How much pure acid must be added to increase the solution's concentration to $36\\%$ acid?",
    options: ["$100\\text{ mL}$", "$120\\text{ mL}$", "$150\\text{ mL}$", "$180\\text{ mL}$"],
    correctAnswer: 2,
    explanation: "Initial acid amount = $0.20 \\times 600 = 120\\text{ mL}$. Let $x$ be added pure acid:\n$$ \\frac{120 + x}{600 + x} = 0.36 \\implies 120 + x = 216 + 0.36x \\implies 0.64x = 96 \\implies x = \\frac{96}{0.64} = 150\\text{ mL} $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_26",
    question: "The population of a country is $50\\text{ million}$ and grows by $15\\%$ every $10\\text{ years}$. What will the population be after $15\\text{ years}$?",
    options: ["$58.25\\text{ million}$", "$61.52\\text{ million}$", "$61.64\\text{ million}$", "$65.00\\text{ million}$"],
    correctAnswer: 2,
    explanation: "Using $\\text{New} = \\text{Old}(1 + p)^{\\frac{t}{E}}$ with $\\text{Old} = 50$, $p = 0.15$, $E = 10$, $t = 15 \\implies \\frac{t}{E} = 1.5$:\n$$ \\text{New} = 50 \\times (1 + 0.15)^{1.5} = 50 \\times (1.15)^{1.5} \\approx 50 \\times 1.232826 = 61.64\\text{ million} $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_27",
    question: "A histogram records museum visitor ages: $0-19$ ($20$), $20-39$ ($45$), $40-59$ ($30$), and $60-79$ ($25$). What percentage of visitors belong to the modal age group?",
    options: ["$30\\%$", "$37.5\\%$", "$40\\%$", "$45\\%$"],
    correctAnswer: 1,
    explanation: "Total visitors = $20 + 45 + 30 + 25 = 120$. Modal group (highest frequency) is $20-39$ with $45$ visitors. Percentage = $\\frac{45}{120} \\times 100\\% = 37.5\\%$.",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_28",
    question: "A laboratory student measured a specimen length to be $12.4\\text{ cm}$. The true length is $12.0\\text{ cm}$. What is the percentage error of the student's measurement?",
    options: ["$3.23\\%$", "$3.33\\%$", "$4.00\\%$", "$4.17\\%$"],
    correctAnswer: 1,
    explanation: "Percentage Error formula $\\frac{|\\text{Measured} - \\text{Actual}|}{\\text{Actual}} \\times 100\\%$: \n$$ \\text{Error} = \\frac{|12.4 - 12.0|}{12.0} \\times 100\\% = \\frac{0.4}{12.0} \\times 100\\% \\approx 3.33\\% $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_29",
    question: "A tree's height grows by $20\\%$ every $2\\text{ years}$. If its height after $6\\text{ years}$ is $17.28\\text{ meters}$, what was its initial height?",
    options: ["$10.0\\text{ meters}$", "$12.0\\text{ meters}$", "$14.4\\text{ meters}$", "$15.0\\text{ meters}$"],
    correctAnswer: 0,
    explanation: "Interval ratio $\\frac{t}{E} = \\frac{6}{2} = 3$. Using $\\text{New} = \\text{Old}(1 + p)^3$:\n$$ 17.28 = \\text{Old} \\times (1.20)^3 = \\text{Old} \\times 1.728 \\implies \\text{Old} = \\frac{17.28}{1.728} = 10.0\\text{ meters} $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_30",
    question: "A corporation's annual expenditure is $\$2,400,000$. A pie chart breakdown shows: Salaries ($50\\%$), Rent ($20\\%$), Utilities ($12\\%$), Supplies ($10\\%$), and Misc ($8\\%$). How much money is spent on Utilities and Supplies combined?",
    options: ["$\\$480,000$", "$\\$528,000$", "$\\$576,000$", "$\\$600,000$"],
    correctAnswer: 1,
    explanation: "Combined percentage = $12\\% + 10\\% = 22\\%$. Combined cost = $0.22 \\times 2,400,000 = \\$528,000$.",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_31",
    question: "Price A increases by $10\\%$ and then increases again by $15\\%$. Price B increases once by $25\\%$. If both initial prices were $\$100$, what is the difference between the final values of Price A and Price B?",
    options: ["$\\$0.00$", "$\\$1.50$", "$\\$2.50$", "$\\$3.50$"],
    correctAnswer: 1,
    explanation: "Final Price A = $100 \\times 1.10 \\times 1.15 = \\$126.50$. Final Price B = $100 \\times 1.25 = \\$125.00$. Difference = $126.50 - 125.00 = \\$1.50$.",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_32",
    question: "An investment asset valued at $\$50,000$ grew by $10\\%$ in Year 1, $20\\%$ in Year 2, and $30\\%$ in Year 3. What is its final value at the end of Year 3?",
    options: ["$\\$78,000$", "$\\$80,000$", "$\\$85,800$", "$\\$88,000$"],
    correctAnswer: 2,
    explanation: "Using consecutive percentage growth factors:\n$$ \\text{Final} = 50000 \\times (1 + 0.10) \\times (1 + 0.20) \\times (1 + 0.30) = 50000 \\times 1.10 \\times 1.20 \\times 1.30 = \\$85,800 $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_33",
    question: "A histogram displays completion times (in minutes) for $80$ marathon runners: $180-199$ ($10$), $200-219$ ($22$), $220-239$ ($28$), $240-259$ ($14$), $260-279$ ($6$). What percentage of runners finished in under $220\\text{ minutes}$?",
    options: ["$32\\%$", "$40\\%$", "$42.5\\%$", "$50\\%$"],
    correctAnswer: 2,
    explanation: "Runners under $220\\text{ min}$ are in intervals $180-199$ ($10$) and $200-219$ ($22$):\n$$ \\text{Count} = 10 + 22 = 32 \\implies P = \\frac{32}{80} \\times 100\\% = 42.5\\% $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_34",
    question: "A lake's fish population decreases by $8\\%$ every $3\\text{ years}$. If the initial population was $25,000$, what is the population after $12\\text{ years}$?",
    options: ["$17,000$", "$17,909$", "$18,000$", "$18,400$"],
    correctAnswer: 1,
    explanation: "Number of $3$-year intervals $\\frac{t}{E} = \\frac{12}{3} = 4$. Using decay compounding $\\text{New} = \\text{Old}(1 - p)^4$:\n$$ \\text{New} = 25000 \\times (1 - 0.08)^4 = 25000 \\times (0.92)^4 = 25000 \\times 0.716393 \\approx 17,909 $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_35",
    question: "In a pie chart representing sales across four products, the sector central angles are $144^\\circ$ for Product A, $90^\\circ$ for Product B, $72^\\circ$ for Product C, and $54^\\circ$ for Product D. What percentage of total sales does Product A represent?",
    options: ["$36\\%$", "$40\\%$", "$44\\%$", "$50\\%$"],
    correctAnswer: 1,
    explanation: "Sector percentage formula $P = \\frac{\\text{Angle}}{360^\\circ} \\times 100\\%$: \n$$ P = \\frac{144^\\circ}{360^\\circ} \\times 100\\% = 0.40 \\times 100\\% = 40\\% $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_36",
    question: "A wholesale merchant buys an item for $\$800$ and sells it for $\$1,000$. What is the merchant's profit margin expressed as a percentage of the selling price?",
    options: ["$20\\%$", "$25\\%$", "$30\\%$", "$33.3\\%$"],
    correctAnswer: 0,
    explanation: "Profit = $\\$1,000 - \\$800 = \\$200$. Profit margin relative to selling price:\n$$ P = \\frac{\\text{Profit}}{\\text{Selling Price}} \\times 100\\% = \\frac{200}{1000} \\times 100\\% = 20\\% $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_37",
    question: "In $2010$, Town A had a population of $15,000$ and grew at $4\\%$ per year. Town B had a population of $20,000$ and decreased at $2\\%$ per year. What is the difference in population between the two towns in $2015$?",
    options: ["$120$", "$171$", "$220$", "$280$"],
    correctAnswer: 1,
    explanation: "Calculate $2015$ populations ($t = 5\\text{ years}$):\n$$\\text{Town A} = 15000 \\times (1.04)^5 \\approx 18,249.79$$\n$$\\text{Town B} = 20000 \\times (0.98)^5 \\approx 18,078.41$$\nDifference = $18,249.79 - 18,078.41 \\approx 171$.",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_38",
    question: "Investment Plan A grows by $16\\%$ every $4\\text{ years}$. Investment Plan B grows by $8\\%$ every $2\\text{ years}$. If $\$10,000$ is invested in each plan for $8\\text{ years}$, which plan yields more money and by how much?",
    options: ["Plan A by $\\$100$", "Plan B by $\\$149$", "Plan B by $\\$200$", "Both yield equal amounts"],
    correctAnswer: 1,
    explanation: "Plan A ($t/E = 8/4 = 2$): $\\text{New}_A = 10000 \\times (1.16)^2 = \\$13,456$.\nPlan B ($t/E = 8/2 = 4$): $\\text{New}_B = 10000 \\times (1.08)^4 \\approx \\$13,604.89$.\nPlan B yields more by $13604.89 - 13456 \\approx \\$149$.",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_39",
    question: "A histogram with non-uniform intervals records observations: $0-10$ ($20$), $10-30$ ($30$), $30-40$ ($25$), $40-70$ ($25$). What percentage of total observations lie in the range $10 \\le x < 40$?",
    options: ["$40\\%$", "$50\\%$", "$55\\%$", "$60\\%$"],
    correctAnswer: 2,
    explanation: "Total observations = $20 + 30 + 25 + 25 = 100$. Observations in $10 \\le x < 40$ are in intervals $10-30$ ($30$) and $30-40$ ($25$):\n$$ \\text{Count} = 30 + 25 = 55 \\implies P = \\frac{55}{100} \\times 100\\% = 55\\% $$",
    category: "ACT2-percentage"
  },
  {
    id: "act2_perc_40",
    question: "A real estate developer purchased land for $\$500,000$. The value of the land increased by $10\\%$ every year for $3\\text{ years}$, and then increased by $15\\%$ every $2\\text{ years}$ for the next $4\\text{ years}$. What is the final value of the land at the end of the $7$-year period?",
    options: ["$\\$820,500$", "$\\$865,000$", "$\\$880,124$", "$\\$920,000$"],
    correctAnswer: 2,
    explanation: "Phase 1 ($3\\text{ years}$ at $10\\%$ annual):\n$$ V_1 = 500000 \\times (1.10)^3 = 500000 \\times 1.331 = \\$665,500 $$\nPhase 2 ($4\\text{ years}$ with $E = 2$ at $15\\% \\implies \\frac{t}{E} = 2$):\n$$ V_2 = 665500 \\times (1.15)^2 = 665500 \\times 1.3225 = \\$880,123.75 \\approx \\$880,124 $$",
    category: "ACT2-percentage"
  }
];
