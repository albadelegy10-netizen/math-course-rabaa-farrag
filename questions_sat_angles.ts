import { Question } from './types';

export const sat_angles_questions: Question[] = [
  {
    id: "sat_angles_1",
    question: `What is the sum of the interior angles of a convex hexagon ($6$ sides)?`,
    options: [
      `$540^\\circ$`,
      `$720^\\circ$`,
      `$900^\\circ$`,
      `$1080^\\circ$`,
    ],
    correctAnswer: 1,
    explanation: `The sum of interior angles of an $n$-sided convex polygon is given by $S = (n - 2) \\times 180^\\circ$. For a hexagon ($n = 6$): $S = (6 - 2) \\times 180^\\circ = 4 \\times 180^\\circ = 720^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Easy",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_2",
    question: `What is the sum of the interior angles of a convex octagon ($8$ sides)?`,
    options: [
      `$900^\\circ$`,
      `$1080^\\circ$`,
      `$1260^\\circ$`,
      `$1440^\\circ$`,
    ],
    correctAnswer: 1,
    explanation: `Using $S = (n - 2) \\times 180^\\circ$ for an octagon ($n = 8$): $S = (8 - 2) \\times 180^\\circ = 6 \\times 180^\\circ = 1080^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Easy",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_3",
    question: `If the sum of the interior angles of a polygon is $1440^\\circ$, how many sides does the polygon have?`,
    options: [
      `$8$`,
      `$9$`,
      `$10$`,
      `$12$`,
    ],
    correctAnswer: 2,
    explanation: `Set up the equation $(n - 2) \\times 180^\\circ = 1440^\\circ$. Divide both sides by $180^\\circ$: $n - 2 = 8 \\implies n = 10$. The polygon has $10$ sides (decagon).`,
    category: "Sat-angles",
    difficulty: "Medium",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_4",
    question: `If the sum of the interior angles of a polygon is $1800^\\circ$, how many sides does the polygon have?`,
    options: [
      `$10$`,
      `$11$`,
      `$12$`,
      `$14$`,
    ],
    correctAnswer: 2,
    explanation: `Using $(n - 2) \\times 180^\\circ = 1800^\\circ$: $n - 2 = \\frac{1800}{180} = 10 \\implies n = 12$. The polygon has $12$ sides (dodecagon).`,
    category: "Sat-angles",
    difficulty: "Medium",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_5",
    question: `How many sides does a polygon have if the sum of its interior angles is three times the sum of its exterior angles?`,
    options: [
      `$6$`,
      `$7$`,
      `$8$`,
      `$10$`,
    ],
    correctAnswer: 2,
    explanation: `The sum of the exterior angles of any convex polygon is always $360^\\circ$. Therefore, the sum of the interior angles is $3 \\times 360^\\circ = 1080^\\circ$. Solving $(n - 2) \\times 180^\\circ = 1080^\\circ$ yields $n - 2 = 6 \\implies n = 8$.`,
    category: "Sat-angles",
    difficulty: "Hard",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_6",
    question: `An $n$-sided polygon has $n-1$ interior angles that each measure $150^\\circ$, and one interior angle measuring $90^\\circ$. Find the value of $n$.`,
    options: [
      `$8$`,
      `$9$`,
      `$10$`,
      `$12$`,
    ],
    correctAnswer: 2,
    explanation: `The sum of all interior angles is $(n - 1)(150^\\circ) + 90^\\circ$. Equating this to $(n - 2) \\times 180^\\circ$: $150n - 150 + 90 = 180n - 360 \\implies 150n - 60 = 180n - 360 \\implies 30n = 300 \\implies n = 10$.`,
    category: "Sat-angles",
    difficulty: "Hard",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_7",
    question: `The interior angles of a pentagon ($n = 5$) measure $x^\\circ$, $(x + 20)^\\circ$, $(x + 40)^\\circ$, $(x + 60)^\\circ$, and $(x + 80)^\\circ$. What is the value of $x$?`,
    options: [
      `$60$`,
      `$68$`,
      `$72$`,
      `$80$`,
    ],
    correctAnswer: 1,
    explanation: `The sum of interior angles of a pentagon is $(5 - 2) \\times 180^\\circ = 540^\\circ$. Summing the angles: $x + (x + 20) + (x + 40) + (x + 60) + (x + 80) = 540 \\implies 5x + 200 = 540 \\implies 5x = 340 \\implies x = 68$.`,
    category: "Sat-angles",
    difficulty: "Medium",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_8",
    question: `Two interior angles of a hexagon measure $100^\\circ$ and $110^\\circ$. The remaining four interior angles are equal to each other. What is the measure of each of these four equal angles?`,
    options: [
      `$120^\\circ$`,
      `$125^\\circ$`,
      `$127.5^\\circ$`,
      `$130^\\circ$`,
    ],
    correctAnswer: 2,
    explanation: `The total sum of interior angles for a hexagon is $(6 - 2) \\times 180^\\circ = 720^\\circ$. Subtracting the two known angles gives $720^\\circ - 100^\\circ - 110^\\circ = 510^\\circ$. Each of the remaining four angles measures $\\frac{510^\\circ}{4} = 127.5^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Medium",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_9",
    question: `What is the measure of each interior angle of a regular pentagon?`,
    options: [
      `$90^\\circ$`,
      `$108^\\circ$`,
      `$120^\\circ$`,
      `$135^\\circ$`,
    ],
    correctAnswer: 1,
    explanation: `Each interior angle of a regular $n$-gon is $I = \\frac{(n - 2) \\times 180^\\circ}{n}$. For $n = 5$: $I = \\frac{(5 - 2) \\times 180^\\circ}{5} = \\frac{540^\\circ}{5} = 108^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Easy",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_10",
    question: `What is the measure of each interior angle of a regular hexagon?`,
    options: [
      `$108^\\circ$`,
      `$120^\\circ$`,
      `$135^\\circ$`,
      `$140^\\circ$`,
    ],
    correctAnswer: 1,
    explanation: `For a regular hexagon ($n = 6$): $I = \\frac{(6 - 2) \\times 180^\\circ}{6} = \\frac{720^\\circ}{6} = 120^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Easy",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_11",
    question: `What is the measure of each interior angle of a regular octagon?`,
    options: [
      `$120^\\circ$`,
      `$135^\\circ$`,
      `$144^\\circ$`,
      `$150^\\circ$`,
    ],
    correctAnswer: 1,
    explanation: `For a regular octagon ($n = 8$): $I = \\frac{(8 - 2) \\times 180^\\circ}{8} = \\frac{1080^\\circ}{8} = 135^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Easy",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_12",
    question: `Each interior angle of a regular polygon measures $144^\\circ$. How many sides does the polygon have?`,
    options: [
      `$8$`,
      `$9$`,
      `$10$`,
      `$12$`,
    ],
    correctAnswer: 2,
    explanation: `The exterior angle is $E = 180^\\circ - 144^\\circ = 36^\\circ$. The number of sides is $n = \\frac{360^\\circ}{E} = \\frac{360^\\circ}{36^\\circ} = 10$.`,
    category: "Sat-angles",
    difficulty: "Medium",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_13",
    question: `Each interior angle of a regular polygon measures $150^\\circ$. How many sides does the polygon have?`,
    options: [
      `$10$`,
      `$12$`,
      `$15$`,
      `$18$`,
    ],
    correctAnswer: 1,
    explanation: `The exterior angle is $E = 180^\\circ - 150^\\circ = 30^\\circ$. The number of sides is $n = \\frac{360^\\circ}{30^\\circ} = 12$.`,
    category: "Sat-angles",
    difficulty: "Medium",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_14",
    question: `The ratio of the measure of an interior angle to an exterior angle of a regular polygon is $5 : 1$. How many sides does the polygon have?`,
    options: [
      `$10$`,
      `$12$`,
      `$14$`,
      `$16$`,
    ],
    correctAnswer: 1,
    explanation: `Let interior angle $= 5x$ and exterior angle $= 1x$. Since they are supplementary: $5x + x = 180^\\circ \\implies 6x = 180^\\circ \\implies x = 30^\\circ$. The exterior angle is $30^\\circ$, so $n = \\frac{360^\\circ}{30^\\circ} = 12$.`,
    category: "Sat-angles",
    difficulty: "Hard",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_15",
    question: `The ratio of the measure of an interior angle to an exterior angle of a regular polygon is $7 : 2$. How many sides does the polygon have?`,
    options: [
      `$8$`,
      `$9$`,
      `$10$`,
      `$12$`,
    ],
    correctAnswer: 1,
    explanation: `Interior angle $= 7x$, exterior angle $= 2x$. $7x + 2x = 180^\\circ \\implies 9x = 180^\\circ \\implies x = 20^\\circ$. Exterior angle $E = 2(20^\\circ) = 40^\\circ$. Thus $n = \\frac{360^\\circ}{40^\\circ} = 9$.`,
    category: "Sat-angles",
    difficulty: "Hard",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_16",
    question: `If doubling the number of sides of a regular polygon increases each of its interior angles by $15^\\circ$, how many sides did the original polygon have?`,
    options: [
      `$6$`,
      `$8$`,
      `$10$`,
      `$12$`,
    ],
    correctAnswer: 3,
    explanation: `Let original sides be $n$. Interior angle $I_1 = 180^\\circ - \\frac{360^\\circ}{n}$. Doubling sides to $2n$ gives $I_2 = 180^\\circ - \\frac{360^\\circ}{2n} = 180^\\circ - \\frac{180^\\circ}{n}$. The difference is $I_2 - I_1 = \\frac{180^\\circ}{n} = 15^\\circ \\implies n = \\frac{180}{15} = 12$.`,
    category: "Sat-angles",
    difficulty: "Hard",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_17",
    question: `What is the measure of each exterior angle of an equilateral triangle?`,
    options: [
      `$60^\\circ$`,
      `$90^\\circ$`,
      `$120^\\circ$`,
      `$150^\\circ$`,
    ],
    correctAnswer: 2,
    explanation: `For an equilateral triangle ($n = 3$), each exterior angle is $E = \\frac{360^\\circ}{3} = 120^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Easy",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_18",
    question: `What is the measure of each exterior angle of a regular hexagon?`,
    options: [
      `$30^\\circ$`,
      `$45^\\circ$`,
      `$60^\\circ$`,
      `$90^\\circ$`,
    ],
    correctAnswer: 2,
    explanation: `For a regular hexagon ($n = 6$), each exterior angle is $E = \\frac{360^\\circ}{6} = 60^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Easy",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_19",
    question: `What is the measure of each exterior angle of a regular octagon?`,
    options: [
      `$30^\\circ$`,
      `$45^\\circ$`,
      `$60^\\circ$`,
      `$72^\\circ$`,
    ],
    correctAnswer: 1,
    explanation: `For a regular octagon ($n = 8$), each exterior angle is $E = \\frac{360^\\circ}{8} = 45^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Easy",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_20",
    question: `What is the measure of each exterior angle of a regular decagon ($10$ sides)?`,
    options: [
      `$30^\\circ$`,
      `$36^\\circ$`,
      `$40^\\circ$`,
      `$45^\\circ$`,
    ],
    correctAnswer: 1,
    explanation: `For a regular decagon ($n = 10$), each exterior angle is $E = \\frac{360^\\circ}{10} = 36^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Easy",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_21",
    question: `The measure of an exterior angle of a regular polygon is $24^\\circ$. How many sides does the polygon have?`,
    options: [
      `$12$`,
      `$15$`,
      `$16$`,
      `$20$`,
    ],
    correctAnswer: 1,
    explanation: `Using $n = \\frac{360^\\circ}{E}$: $n = \\frac{360^\\circ}{24^\\circ} = 15$. The polygon has $15$ sides.`,
    category: "Sat-angles",
    difficulty: "Medium",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_22",
    question: `The measure of an exterior angle of a regular polygon is $18^\\circ$. How many sides does the polygon have?`,
    options: [
      `$18$`,
      `$20$`,
      `$24$`,
      `$30$`,
    ],
    correctAnswer: 1,
    explanation: `Using $n = \\frac{360^\\circ}{E}$: $n = \\frac{360^\\circ}{18^\\circ} = 20$. The polygon has $20$ sides.`,
    category: "Sat-angles",
    difficulty: "Medium",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_23",
    question: `What is the sum of the exterior angles of a convex $15$-sided polygon?`,
    options: [
      `$360^\\circ$`,
      `$540^\\circ$`,
      `$2340^\\circ$`,
      `$2700^\\circ$`,
    ],
    correctAnswer: 0,
    explanation: `The sum of exterior angles (one at each vertex) for ANY convex polygon is always $360^\\circ$, regardless of the number of sides.`,
    category: "Sat-angles",
    difficulty: "Easy",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_24",
    question: `In $\\triangle ABC$, the exterior angle at vertex $C$ measures $130^\\circ$. If $\\angle A = (2x + 10)^\\circ$ and $\\angle B = (3x - 5)^\\circ$, find the value of $x$.`,
    options: [
      `$20$`,
      `$25$`,
      `$30$`,
      `$35$`,
    ],
    correctAnswer: 1,
    explanation: `By the Exterior Angle Theorem, an exterior angle of a triangle equals the sum of the two non-adjacent interior angles: $(2x + 10) + (3x - 5) = 130 \\implies 5x + 5 = 130 \\implies 5x = 125 \\implies x = 25$.`,
    category: "Sat-angles",
    difficulty: "Medium",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_25",
    question: `In $\\triangle PQR$, the measures of the three interior angles are in the ratio $2 : 3 : 7$. What is the measure of the largest exterior angle of the triangle?`,
    options: [
      `$105^\\circ$`,
      `$135^\\circ$`,
      `$150^\\circ$`,
      `$165^\\circ$`,
    ],
    correctAnswer: 2,
    explanation: `Let interior angles be $2k, 3k, 7k$. Sum $= 12k = 180^\\circ \\implies k = 15^\\circ$. The interior angles are $30^\\circ, 45^\\circ, 105^\\circ$. The largest exterior angle is supplementary to the smallest interior angle ($30^\\circ$), so Exterior Angle $= 180^\\circ - 30^\\circ = 150^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Hard",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_26",
    question: `A regular hexagon and a regular octagon share a common side. What is the measure of the angle formed between their adjacent non-shared sides at the shared vertex?`,
    options: [
      `$90^\\circ$`,
      `$105^\\circ$`,
      `$120^\\circ$`,
      `$135^\\circ$`,
    ],
    correctAnswer: 1,
    explanation: `Interior angle of regular hexagon $= 120^\\circ$. Interior angle of regular octagon $= 135^\\circ$. At the shared vertex, the sum of angles around a point is $360^\\circ$. The angle between adjacent sides is $360^\\circ - (120^\\circ + 135^\\circ) = 360^\\circ - 255^\\circ = 105^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Hard",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_27",
    question: `A regular pentagon and an equilateral triangle share a common side $AB$ and lie on opposite sides of $AB$. What is the measure of $\\angle CAD$, where $AC$ is a side of the pentagon and $AD$ is a side of the triangle?`,
    options: [
      `$148^\\circ$`,
      `$158^\\circ$`,
      `$168^\\circ$`,
      `$172^\\circ$`,
    ],
    correctAnswer: 2,
    explanation: `Interior angle of regular pentagon $= 108^\\circ$. Interior angle of equilateral triangle $= 60^\\circ$. Since they lie on opposite sides of $AB$, $\\angle CAD = 108^\\circ + 60^\\circ = 168^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Medium",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_28",
    question: `In quadrilateral $ABCD$, $\\angle A = (3x + 15)^\\circ$, $\\angle B = (2x + 25)^\\circ$, $\\angle C = (4x - 10)^\\circ$, and $\\angle D = (x + 30)^\\circ$. Find the measure of the smallest interior angle.`,
    options: [
      `$60^\\circ$`,
      `$85^\\circ$`,
      `$105^\\circ$`,
      `$110^\\circ$`,
    ],
    correctAnswer: 0,
    explanation: `Sum of interior angles in a quadrilateral is $360^\\circ$. $(3x + 15) + (2x + 25) + (4x - 10) + (x + 30) = 360 \\implies 10x + 60 = 360 \\implies 10x = 300 \\implies x = 30$. The angles are $\\angle A = 105^\\circ, \\angle B = 85^\\circ, \\angle C = 110^\\circ, \\angle D = 60^\\circ$. The smallest angle is $60^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Medium",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_29",
    question: `An exterior angle of an isosceles triangle measures $110^\\circ$. If the two non-adjacent interior angles are congruent, what is the measure of each of these interior angles?`,
    options: [
      `$35^\\circ$`,
      `$55^\\circ$`,
      `$70^\\circ$`,
      `$110^\\circ$`,
    ],
    correctAnswer: 1,
    explanation: `By the Exterior Angle Theorem, Exterior Angle $= \text{Angle } 1 + \text{Angle } 2$. Since they are congruent, $2x = 110^\\circ \\implies x = 55^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Easy",
    topics: ["Angles in Polygons"]
  },
  {
    id: "sat_angles_30",
    question: `A regular hexagon is inscribed in a circle. What is the measure of the central angle subtended by one side of the hexagon?`,
    options: [
      `$45^\\circ$`,
      `$60^\\circ$`,
      `$90^\\circ$`,
      `$120^\\circ$`,
    ],
    correctAnswer: 1,
    explanation: `A full circle is $360^\\circ$. A regular $n$-gon inscribed in a circle divides the circle into $n$ equal central angles. For $n = 6$, Central Angle $= \\frac{360^\\circ}{6} = 60^\\circ$.`,
    category: "Sat-angles",
    difficulty: "Easy",
    topics: ["Angles in Polygons"]
  }
];
