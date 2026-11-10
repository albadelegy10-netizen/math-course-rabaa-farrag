import { Question } from '../../types';

export const EST1_2021_AUG_PART2: Question[] = [
  {
    "id": "est1_2021_aug_q21",
    "examId": "EST12021Aug",
    "question": "In 2017, country Y had 500 miles of paved roads. Starting in 2018, the country has been building 6 miles of new paved roads each year. At this rate, if $m$ is the number of years after 2017, which of the following functions $f$ gives the number of miles of paved roads that will be in country Y assuming that no paved roads go out of service?",
    "options": [
      "$f(m) = 6 + 2017m$",
      "$f(m) = 2017 + 6m$",
      "$f(m) = 500 + 6m$",
      "$f(m) = 2018 + 6m$"
    ],
    "correctAnswer": 2,
    "explanation": "The initial amount in 2017 is 500 miles. The rate of change is 6 miles per year. So the function is $f(m) = 500 + 6m$."
  },
  {
    "id": "est1_2021_aug_q22",
    "examId": "EST12021Aug",
    "question": "The circular diagram above shows the results of a survey made on the number of books read by 200 pupils in a certain school.\n\nWhat is the number of pupils who read less than 3 books?",
    "svg": "<svg viewBox=\"0 0 200 200\" width=\"100%\" height=\"100%\">\n  <circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n  <path d=\"M 100 100 L 100 20 A 80 80 0 0 1 176 75 Z\" fill=\"#4682B4\"/>\n  <path d=\"M 100 100 L 176 75 A 80 80 0 0 1 165 146 Z\" fill=\"#A52A2A\"/>\n  <path d=\"M 100 100 L 165 146 A 80 80 0 0 1 24 124 Z\" fill=\"#6B8E23\"/>\n  <path d=\"M 100 100 L 24 124 A 80 80 0 0 1 20 100 Z\" fill=\"#483D8B\"/>\n  <path d=\"M 100 100 L 20 100 A 80 80 0 0 1 47 40 Z\" fill=\"#20B2AA\"/>\n  <path d=\"M 100 100 L 47 40 A 80 80 0 0 1 100 20 Z\" fill=\"#D2691E\"/>\n  <text x=\"130\" y=\"60\" font-size=\"12\" fill=\"white\">1 (20%)</text>\n  <text x=\"150\" y=\"110\" font-size=\"12\" fill=\"white\">2 (18%)</text>\n  <text x=\"100\" y=\"150\" font-size=\"12\" fill=\"white\">3 (30%)</text>\n  <text x=\"40\" y=\"110\" font-size=\"12\" fill=\"white\">4 (14%)</text>\n  <text x=\"50\" y=\"60\" font-size=\"12\" fill=\"white\">5 (10%)</text>\n  <text x=\"80\" y=\"40\" font-size=\"12\" fill=\"white\">6 (8%)</text>\n</svg>",
    "options": [
      "68",
      "116",
      "38",
      "76"
    ],
    "correctAnswer": 3,
    "explanation": "Less than 3 books means 1 or 2 books. The percentages are 20% and 18%, totaling 38%. $38\\%$ of 200 is $0.38 \\times 200 = 76$ pupils."
  },
  {
    "id": "est1_2021_aug_q23",
    "examId": "EST12021Aug",
    "question": "A machine finishes the paving of 600m of a road in 1 hour. At the same steady rate, how much time would take two identical machines to finish paving 300m?",
    "options": [
      "15 minutes",
      "2 hours",
      "1 hour",
      "30 minutes"
    ],
    "correctAnswer": 0,
    "explanation": "One machine paves 600m in 60 minutes. Two machines pave $600 \\times 2 = 1200$m in 60 minutes. To pave 300m, it takes $300 / 1200 \\times 60 = 15$ minutes."
  },
  {
    "id": "est1_2021_aug_q24",
    "examId": "EST12021Aug",
    "question": "In the $xy$-plane above, the equation of line L is $2mx - 2y + 12 = 0$, where $m$ is a constant.\n\nWhat is the slope (gradient) of L?",
    "svg": "<svg viewBox=\"0 0 300 240\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow24\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#374151\"/>\n    </marker>\n  </defs>\n  <line x1=\"15\" y1=\"190\" x2=\"270\" y2=\"190\" stroke=\"#374151\" stroke-width=\"1.8\" marker-end=\"url(#arrow24)\"/>\n  <line x1=\"65\" y1=\"230\" x2=\"65\" y2=\"25\" stroke=\"#374151\" stroke-width=\"1.8\" marker-end=\"url(#arrow24)\"/>\n  <text x=\"280\" y=\"194\" font-size=\"14\" font-weight=\"600\" font-style=\"italic\" fill=\"#1f2937\">x</text>\n  <text x=\"65\" y=\"16\" font-size=\"14\" font-weight=\"600\" font-style=\"italic\" fill=\"#1f2937\" text-anchor=\"middle\">y</text>\n  <text x=\"50\" y=\"204\" font-size=\"14\" font-style=\"italic\" fill=\"#374151\">O</text>\n  <line x1=\"25\" y1=\"35\" x2=\"245\" y2=\"215\" stroke=\"#1f2937\" stroke-width=\"2.2\"/>\n  <circle cx=\"140\" cy=\"129\" r=\"3.5\" fill=\"#1f2937\"/>\n  <text x=\"148\" y=\"125\" font-size=\"13\" font-weight=\"500\" fill=\"#1f2937\">(3, 2)</text>\n  <text x=\"250\" y=\"222\" font-size=\"16\" font-weight=\"bold\" fill=\"#1f2937\">L</text>\n</svg>",
    "options": [
      "$-\\frac{4}{3}$",
      "$\\frac{2}{3}$",
      "$-\\frac{8}{3}$",
      "$\\frac{1}{2}$"
    ],
    "correctAnswer": 0,
    "explanation": "The equation is $2y = 2mx + 12 \\Rightarrow y = mx + 6$. The line passes through $(3, 2)$. Substituting these coordinates: $2 = m(3) + 6 \\Rightarrow 3m = -4 \\Rightarrow m = -\\frac{4}{3}$. The slope is $m = -\\frac{4}{3}$."
  },
  {
    "id": "est1_2021_aug_q25",
    "examId": "EST12021Aug",
    "question": "Jack has $k$ dollars. He spends $\\frac{3}{4}$ of his money on a T-shirt and $\\frac{1}{3}$ of what was left on a sandwich. If this left him with $t$ dollars, which of the following is the value of $k$ in terms of $t$?",
    "svg": "<svg viewBox=\"0 0 340 120\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"20\" y=\"30\" width=\"300\" height=\"40\" fill=\"#f3f4f6\" stroke=\"#374151\" stroke-width=\"2\" rx=\"4\"/>\n  <rect x=\"20\" y=\"30\" width=\"225\" height=\"40\" fill=\"#dbeafe\" stroke=\"#374151\" stroke-width=\"1.5\"/>\n  <rect x=\"245\" y=\"30\" width=\"25\" height=\"40\" fill=\"#fef3c7\" stroke=\"#374151\" stroke-width=\"1.5\"/>\n  <rect x=\"270\" y=\"30\" width=\"50\" height=\"40\" fill=\"#dcfce7\" stroke=\"#374151\" stroke-width=\"1.5\"/>\n  <text x=\"132\" y=\"55\" font-size=\"13\" font-weight=\"600\" fill=\"#1e40af\" text-anchor=\"middle\">T-Shirt (3/4 k)</text>\n  <text x=\"257.5\" y=\"55\" font-size=\"11\" font-weight=\"600\" fill=\"#92400e\" text-anchor=\"middle\">1/3</text>\n  <text x=\"295\" y=\"55\" font-size=\"13\" font-weight=\"bold\" fill=\"#166534\" text-anchor=\"middle\">t</text>\n  <line x1=\"20\" y1=\"85\" x2=\"320\" y2=\"85\" stroke=\"#374151\" stroke-width=\"1\"/>\n  <line x1=\"20\" y1=\"80\" x2=\"20\" y2=\"90\" stroke=\"#374151\" stroke-width=\"1\"/>\n  <line x1=\"320\" y1=\"80\" x2=\"320\" y2=\"90\" stroke=\"#374151\" stroke-width=\"1\"/>\n  <text x=\"170\" y=\"105\" font-size=\"13\" font-weight=\"bold\" fill=\"#1f2937\" text-anchor=\"middle\">Total money = k dollars</text>\n</svg>",
    "options": [
      "$6t$",
      "$9t$",
      "$12t$",
      "$24t$"
    ],
    "correctAnswer": 0,
    "explanation": "After spending $\\frac{3}{4}$, he has $\\frac{1}{4}k$ left. He spends $\\frac{1}{3}$ of this on a sandwich, leaving him with $\\frac{2}{3}$ of $\\frac{1}{4}k$. So $t = \\frac{2}{3} \\times \\frac{1}{4}k = \\frac{1}{6}k$. Therefore, $k = 6t$."
  },
  {
    "id": "est1_2021_aug_q26",
    "examId": "EST12021Aug",
    "question": "The supply function of a product is given by $f(x) = \\frac{1+x}{2}$ and the demand function of the same product is given by $g(x) = \\frac{2}{x} + 1$, where $x$ represents the price in dollars of the product in both functions. What is the market equilibrium of this product given that it is the point of intersection of the two curves of the two functions?",
    "options": [
      "1.56",
      "1.79",
      "2.56",
      "2.79"
    ],
    "correctAnswer": 2,
    "explanation": "Set $f(x) = g(x)$: $\\frac{1+x}{2} = \\frac{2}{x} + 1 \\Rightarrow \\frac{1+x}{2} = \\frac{2+x}{x} \\Rightarrow x(1+x) = 2(2+x) \\Rightarrow x + x^2 = 4 + 2x \\Rightarrow x^2 - x - 4 = 0$. Using the quadratic formula: $x = \\frac{1 \\pm \\sqrt{1 - 4(1)(-4)}}{2} = \\frac{1 \\pm \\sqrt{17}}{2}$. Since price must be positive, $x = \\frac{1 + \\sqrt{17}}{2} \\approx \\frac{1 + 4.123}{2} = 2.56$."
  },
  {
    "id": "est1_2021_aug_q27",
    "examId": "EST12021Aug",
    "question": "Tina got on her exams the following grades:\nPhysics 75/100 with coefficient 2\nEnglish 60/100 with coefficient 4\nChemistry 80/100 with coefficient 1\nKnowing that the coefficient of Math is 5, what should her minimum grade in Math be to have at least an average of 80/100?",
    "options": [
      "100",
      "85",
      "98",
      "She won’t be able to have at least this average"
    ],
    "correctAnswer": 2,
    "explanation": "Total coefficient = $2 + 4 + 1 + 5 = 12$. Total points needed for an 80 average = $80 \\times 12 = 960$. Points earned so far = $75(2) + 60(4) + 80(1) = 150 + 240 + 80 = 470$. Points needed in Math = $960 - 470 = 490$. Minimum grade in Math = $490 / 5 = 98$."
  },
  {
    "id": "est1_2021_aug_q28",
    "examId": "EST12021Aug",
    "question": "The graph of $y = tx^2 - 5tx - 6t$ is shown in the $xy$-plane above, where $t$ is a constant. If the graph passes through the point $(1,10)$, which of the following is the maximum value of $y$?",
    "svg": "<svg viewBox=\"0 0 320 260\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow28\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#374151\"/>\n    </marker>\n  </defs>\n  <line x1=\"15\" y1=\"180\" x2=\"285\" y2=\"180\" stroke=\"#374151\" stroke-width=\"1.8\" marker-end=\"url(#arrow28)\"/>\n  <line x1=\"70\" y1=\"225\" x2=\"70\" y2=\"25\" stroke=\"#374151\" stroke-width=\"1.8\" marker-end=\"url(#arrow28)\"/>\n  <text x=\"295\" y=\"184\" font-size=\"14\" font-weight=\"600\" font-style=\"italic\" fill=\"#1f2937\">x</text>\n  <text x=\"70\" y=\"16\" font-size=\"14\" font-weight=\"600\" font-style=\"italic\" fill=\"#1f2937\" text-anchor=\"middle\">y</text>\n  <text x=\"76\" y=\"196\" font-size=\"14\" font-style=\"italic\" fill=\"#374151\">O</text>\n  <path d=\"M 45,215 Q 135,-115 225,215\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2.2\"/>\n  <circle cx=\"88\" cy=\"95\" r=\"3.5\" fill=\"#1f2937\"/>\n  <text x=\"94\" y=\"110\" font-size=\"13\" font-weight=\"500\" fill=\"#1f2937\">(1, 10)</text>\n  <text x=\"160\" y=\"248\" font-size=\"13\" fill=\"#374151\" text-anchor=\"middle\">Note: Figure not drawn to scale.</text>\n</svg>",
    "options": [
      "2.5",
      "10",
      "11.75",
      "12.25"
    ],
    "correctAnswer": 3,
    "explanation": "Substitute $(1, 10)$ into the equation: $10 = t(1)^2 - 5t(1) - 6t = t - 5t - 6t = -10t \\Rightarrow t = -1$. The equation is $y = -x^2 + 5x + 6$. The maximum occurs at $x = -\\frac{5}{2(-1)} = 2.5$. The maximum value is $y = -(2.5)^2 + 5(2.5) + 6 = -6.25 + 12.5 + 6 = 12.25$."
  },
  {
    "id": "est1_2021_aug_q29",
    "examId": "EST12021Aug",
    "question": "A study showed that the number of users of a mobile application has been growing exponentially with the number of new members doubling every 3 months. We know that the initial number of users when the study started was 100,000 users. The equation of the growth is given by $y = 100e^{at}$ ($a \\in \\mathbb{R}$), measured in thousands of users after $t$ months.\n\nHow many users will the application have in 2 years?",
    "options": [
      "25,600 users",
      "25,600,000 users",
      "12,151 users",
      "12,151,041 users"
    ],
    "correctAnswer": 1,
    "explanation": "The number of users doubles every 3 months. In 2 years (24 months), the number of doubling periods is $24 / 3 = 8$. The final number of users is $100,000 \\times 2^8 = 100,000 \\times 256 = 25,600,000$."
  },
  {
    "id": "est1_2021_aug_q30",
    "examId": "EST12021Aug",
    "question": "Based on the figure above, what is the area of the triangle MNJ, if the area of the triangle MNJ is double the area of the triangle NJP?",
    "svg": "<svg viewBox=\"0 0 280 230\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrowDim\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#374151\"/>\n    </marker>\n  </defs>\n  <polygon points=\"40,165 170,165 170,25\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2.2\"/>\n  <line x1=\"40\" y1=\"165\" x2=\"170\" y2=\"105\" stroke=\"#1f2937\" stroke-width=\"1.8\"/>\n  <rect x=\"157\" y=\"152\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.5\"/>\n  <text x=\"24\" y=\"171\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\">N</text>\n  <text x=\"178\" y=\"171\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\">M</text>\n  <text x=\"178\" y=\"27\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\">P</text>\n  <text x=\"178\" y=\"110\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\">J</text>\n  <text x=\"105\" y=\"185\" font-size=\"13\" font-weight=\"600\" fill=\"#1f2937\" text-anchor=\"middle\">3cm</text>\n  <line x1=\"215\" y1=\"30\" x2=\"215\" y2=\"160\" stroke=\"#374151\" stroke-width=\"1.5\" marker-start=\"url(#arrowDim)\" marker-end=\"url(#arrowDim)\"/>\n  <text x=\"228\" y=\"100\" font-size=\"13\" font-weight=\"600\" fill=\"#1f2937\">4cm</text>\n  <text x=\"140\" y=\"215\" font-size=\"13\" fill=\"#374151\" text-anchor=\"middle\">Note: Figure not drawn to scale.</text>\n</svg>",
    "options": [
      "2 cm²",
      "3 cm²",
      "4 cm²",
      "5 cm²"
    ],
    "correctAnswer": 2,
    "explanation": "Triangle NMP is a right triangle at M. NM = 3cm, MP = 4cm. Area of MNJ is double the area of NJP. Since they share the same height (NM), their bases MJ and JP must be in a 2:1 ratio. Thus, $MJ = \\frac{2}{3}MP = \\frac{2}{3}(4) = \\frac{8}{3}$ cm. Area of MNJ = $\\frac{1}{2} \\times NM \\times MJ = \\frac{1}{2} \\times 3 \\times \\frac{8}{3} = 4$ cm²."
  },
  {
    "id": "est1_2021_aug_q31",
    "examId": "EST12021Aug",
    "question": "$f(x) = (x-2)(x+3) - (2x-4)^2$\n\nWhich of the following is an equivalent form of the function above?",
    "options": [
      "$(x-2)(11+3x)$",
      "$(x-2)(-x+7)$",
      "$(x-2)(11-3x)$",
      "$(x-2)(x-7)$"
    ],
    "correctAnswer": 2,
    "explanation": "$(x-2)(x+3) - [2(x-2)]^2 = (x-2)(x+3) - 4(x-2)^2 = (x-2)[(x+3) - 4(x-2)] = (x-2)[x+3 - 4x + 8] = (x-2)(11-3x)$."
  },
  {
    "id": "est1_2021_aug_q32",
    "examId": "EST12021Aug",
    "question": "In the figure above, the circles are tangent to each other. The radius of circle (1) is R and the radius of circle (2) is 2R.\n\nIf the sum of their areas is $100\\pi$ cm², what is the length of [AB]?",
    "svg": "<svg viewBox=\"0 0 300 150\" width=\"100%\" height=\"100%\">\n  <circle cx=\"80\" cy=\"75\" r=\"30\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  <circle cx=\"170\" cy=\"75\" r=\"60\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/>\n  <line x1=\"50\" y1=\"75\" x2=\"230\" y2=\"75\" stroke=\"black\" stroke-width=\"1\"/>\n  <circle cx=\"80\" cy=\"75\" r=\"3\" fill=\"black\"/>\n  <circle cx=\"170\" cy=\"75\" r=\"3\" fill=\"black\"/>\n  <text x=\"40\" y=\"80\" font-size=\"12\">A</text>\n  <text x=\"240\" y=\"80\" font-size=\"12\">B</text>\n  <text x=\"75\" y=\"65\" font-size=\"12\">(1)</text>\n  <text x=\"165\" y=\"65\" font-size=\"12\">(2)</text>\n</svg>",
    "options": [
      "100 cm",
      "$2\\sqrt{5}$ cm",
      "50 cm",
      "$12\\sqrt{5}$ cm"
    ],
    "correctAnswer": 3,
    "explanation": "Sum of areas = $\\pi R^2 + \\pi (2R)^2 = \\pi R^2 + 4\\pi R^2 = 5\\pi R^2 = 100\\pi \\Rightarrow R^2 = 20 \\Rightarrow R = \\sqrt{20} = 2\\sqrt{5}$. The length of AB is the sum of the diameters: $2R + 4R = 6R = 6(2\\sqrt{5}) = 12\\sqrt{5}$ cm."
  },
  {
    "id": "est1_2021_aug_q33",
    "examId": "EST12021Aug",
    "question": "If $3x = 24y$, what is the value of $(\\frac{3y}{x})^2$?",
    "options": [
      "$\\frac{9}{64}$",
      "$\\frac{3}{4}$",
      "$\\frac{8}{3}$",
      "24"
    ],
    "correctAnswer": 0,
    "explanation": "$3x = 24y \\Rightarrow x = 8y \\Rightarrow \\frac{y}{x} = \\frac{1}{8}$. Then $(\\frac{3y}{x})^2 = (3 \\times \\frac{1}{8})^2 = (\\frac{3}{8})^2 = \\frac{9}{64}$."
  },
  {
    "id": "est1_2021_aug_q34",
    "examId": "EST12021Aug",
    "question": "Tom has horses, dogs and birds in his farm. The number of birds he has is four times the number of dogs, and he has three more dogs than horses.\n\nWhich of the following could be the total number of these animals?",
    "options": [
      "25",
      "26",
      "27",
      "28"
    ],
    "correctAnswer": 2,
    "explanation": "Let $h$ be the number of horses. Dogs $d = h + 3$. Birds $b = 4d = 4(h + 3)$. Total animals = $h + d + b = h + (h + 3) + 4(h + 3) = 2h + 3 + 4h + 12 = 6h + 15$. We need $6h + 15$ to equal one of the options. If $6h + 15 = 27$, then $6h = 12 \\Rightarrow h = 2$. Since $h$ is an integer, 27 is a possible total."
  },
  {
    "id": "est1_2021_aug_q35",
    "examId": "EST12021Aug",
    "question": "If $x$ is different than -1, 0 and 1, which of the following is equivalent to $\\frac{x}{\\frac{1}{x-1} + \\frac{1}{1+x}}$?",
    "options": [
      "$\\frac{1}{x^2-1}$",
      "$\\frac{(x-1)(x+1)}{2x}$",
      "$\\frac{2x}{x^2-1}$",
      "$\\frac{x^2-1}{2}$"
    ],
    "correctAnswer": 3,
    "explanation": "Simplify the denominator: $\\frac{1}{x-1} + \\frac{1}{x+1} = \\frac{x+1 + x-1}{(x-1)(x+1)} = \\frac{2x}{x^2-1}$. Then the expression is $\\frac{x}{\\frac{2x}{x^2-1}} = x \\times \\frac{x^2-1}{2x} = \\frac{x^2-1}{2}$."
  },
  {
    "id": "est1_2021_aug_q36",
    "examId": "EST12021Aug",
    "question": "What is the equation of line d (not shown) that passes through origin O and is perpendicular to line k in the figure above?",
    "svg": "<svg viewBox=\"0 0 300 260\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <pattern id=\"grid36\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"#e5e7eb\" stroke-width=\"1\"/>\n    </pattern>\n    <marker id=\"arrow36\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#374151\"/>\n    </marker>\n  </defs>\n  <rect width=\"300\" height=\"260\" fill=\"url(#grid36)\"/>\n  <line x1=\"20\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#374151\" stroke-width=\"1.5\" marker-end=\"url(#arrow36)\"/>\n  <line x1=\"80\" y1=\"240\" x2=\"80\" y2=\"20\" stroke=\"#374151\" stroke-width=\"1.5\" marker-end=\"url(#arrow36)\"/>\n  <text x=\"285\" y=\"164\" font-size=\"13\" font-weight=\"600\" fill=\"#1f2937\">x</text>\n  <text x=\"80\" y=\"14\" font-size=\"13\" font-weight=\"600\" fill=\"#1f2937\" text-anchor=\"middle\">y</text>\n  <text x=\"68\" y=\"176\" font-size=\"13\" font-style=\"italic\" fill=\"#374151\">O</text>\n  <line x1=\"40\" y1=\"40\" x2=\"200\" y2=\"280\" stroke=\"#374151\" stroke-width=\"2.5\"/>\n  <circle cx=\"80\" cy=\"100\" r=\"4.5\" fill=\"#3b82f6\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/>\n  <text x=\"92\" y=\"98\" font-size=\"13\" font-weight=\"600\" fill=\"#3b82f6\">A</text>\n  <circle cx=\"120\" cy=\"160\" r=\"4.5\" fill=\"#3b82f6\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/>\n  <text x=\"128\" y=\"152\" font-size=\"13\" font-weight=\"600\" fill=\"#3b82f6\">B</text>\n  <text x=\"185\" y=\"240\" font-size=\"16\" font-weight=\"bold\" fill=\"#1f2937\">k</text>\n</svg>",
    "options": [
      "$y = \\frac{2}{3}x$",
      "$y = -\\frac{3}{2}x$",
      "$y = \\frac{3}{2}x$",
      "$y = x$"
    ],
    "correctAnswer": 0,
    "explanation": "Line k passes through $(0, 3)$ and $(2, 0)$. Its slope is $\\frac{0 - 3}{2 - 0} = -\\frac{3}{2}$. A line perpendicular to k has a slope of $\\frac{2}{3}$. Since it passes through the origin $(0,0)$, its equation is $y = \\frac{2}{3}x$."
  },
  {
    "id": "est1_2021_aug_q37",
    "examId": "EST12021Aug",
    "question": "Line m in the $xy$-plane passes through the points $(2a, a^2)$ and $(2b, b^2)$ with $a \\neq b$.\n\nWhich of the following is the slope (gradient) of line m?",
    "options": [
      "$\\frac{a}{b}$",
      "$\\frac{a+b}{2}$",
      "$\\frac{2}{a+b}$",
      "$\\frac{a^2-b^2}{a-b}$"
    ],
    "correctAnswer": 1,
    "explanation": "Slope = $\\frac{y_2 - y_1}{x_2 - x_1} = \\frac{b^2 - a^2}{2b - 2a} = \\frac{(b-a)(b+a)}{2(b-a)} = \\frac{a+b}{2}$."
  },
  {
    "id": "est1_2021_aug_q38",
    "examId": "EST12021Aug",
    "question": "What is the solution region of the system $x - y \\le 3$ and $y > -x$ represented in the graph above?",
    "svg": "<svg viewBox=\"0 0 320 280\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <pattern id=\"grid38\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"#e5e7eb\" stroke-width=\"1\"/>\n    </pattern>\n    <marker id=\"arrow38\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#374151\"/>\n    </marker>\n  </defs>\n  <rect width=\"320\" height=\"280\" fill=\"url(#grid38)\"/>\n  <line x1=\"20\" y1=\"140\" x2=\"300\" y2=\"140\" stroke=\"#374151\" stroke-width=\"1.5\" marker-end=\"url(#arrow38)\"/>\n  <line x1=\"140\" y1=\"260\" x2=\"140\" y2=\"20\" stroke=\"#374151\" stroke-width=\"1.5\" marker-end=\"url(#arrow38)\"/>\n  <line x1=\"20\" y1=\"20\" x2=\"260\" y2=\"260\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"80\" y1=\"260\" x2=\"300\" y2=\"40\" stroke=\"#dc2626\" stroke-width=\"2.5\"/>\n  <text x=\"230\" y=\"160\" font-size=\"28\" font-weight=\"bold\" fill=\"#1f2937\">1</text>\n  <text x=\"150\" y=\"80\" font-size=\"28\" font-weight=\"bold\" fill=\"#1f2937\">2</text>\n  <text x=\"60\" y=\"150\" font-size=\"28\" font-weight=\"bold\" fill=\"#1f2937\">3</text>\n  <text x=\"170\" y=\"220\" font-size=\"28\" font-weight=\"bold\" fill=\"#1f2937\">4</text>\n</svg>",
    "options": [
      "Region 1",
      "Region 2",
      "Region 3",
      "Region 4"
    ],
    "correctAnswer": 1,
    "explanation": "The inequality $x - y \\le 3$ can be rewritten as $y \\ge x - 3$, which represents the region above the solid line $y = x - 3$. The inequality $y > -x$ represents the region above the dashed line $y = -x$. The intersection of these two regions (above both lines) is Region 2."
  },
  {
    "id": "est1_2021_aug_q39",
    "examId": "EST12021Aug",
    "question": "$\\begin{cases} x + 3y = \\frac{b}{2} \\\\ 4x + 4ay = 20 \\end{cases}$\n\nIn the system of equations above, $a$ and $b$ are constants. If the system has one solution, which of the following could be the values of $a$ and $b$?",
    "options": [
      "$a = 3; b = 10$",
      "$a = 3; b = 12$",
      "$a = 3; b = -4$",
      "$a = 10; b = 3$"
    ],
    "correctAnswer": 3,
    "explanation": "For a system of linear equations to have exactly one solution, the lines must not be parallel, meaning their slopes must be different. The ratio of the coefficients of $x$ and $y$ must not be equal: $\\frac{1}{4} \\neq \\frac{3}{4a} \\Rightarrow 4a \\neq 12 \\Rightarrow a \\neq 3$. Only option D has $a \\neq 3$."
  },
  {
    "id": "est1_2021_aug_q40",
    "examId": "EST12021Aug",
    "question": "In the figure above, $AE = \\frac{1}{3}AB$ and $AD = \\frac{1}{3}AC$.\n\nThe area of the triangle ABC is how many times the area of the trapezoid EDCB?",
    "svg": "<svg viewBox=\"0 0 280 160\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"140,20 20,130 260,130\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2.5\"/>\n  <line x1=\"100\" y1=\"56.6\" x2=\"180\" y2=\"56.6\" stroke=\"#1f2937\" stroke-width=\"2\"/>\n  <text x=\"140\" y=\"14\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\" text-anchor=\"middle\">A</text>\n  <text x=\"10\" y=\"136\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\">B</text>\n  <text x=\"268\" y=\"136\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\">C</text>\n  <text x=\"88\" y=\"58\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\">E</text>\n  <text x=\"188\" y=\"58\" font-size=\"14\" font-weight=\"bold\" fill=\"#1f2937\">D</text>\n</svg>",
    "options": [
      "$\\frac{9}{8}$",
      "$\\frac{8}{9}$",
      "3",
      "$\\frac{2}{3}$"
    ],
    "correctAnswer": 0,
    "explanation": "Triangle ADE is similar to triangle ABC with a ratio of side lengths $\\frac{1}{3}$. The ratio of their areas is $(\\frac{1}{3})^2 = \\frac{1}{9}$. So, Area(ADE) = $\\frac{1}{9}$ Area(ABC). The area of trapezoid EDCB is Area(ABC) - Area(ADE) = Area(ABC) - $\\frac{1}{9}$ Area(ABC) = $\\frac{8}{9}$ Area(ABC). Therefore, Area(ABC) = $\\frac{9}{8}$ Area(EDCB)."
  }
];
