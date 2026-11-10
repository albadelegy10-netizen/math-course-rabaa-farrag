import { Question } from '../../types';

export const GEOMETRY_SIMILARITY: Question[] = [
  {
    "id": "similarity_1",
    "question": "What is the value of $\\sin(F)$, given $\\triangle XYZ$ is similar to $\\triangle FGH$ as shown in the corresponding figure?\n\n$\\triangle XYZ$ is a right triangle at $Z$, with $XY = 10$, $YZ = 8$, $XZ = 6$.\n$\\triangle FGH$ is a right triangle at $H$, with $FG$ corresponding to $XY$, $GH$ to $YZ$, and $FH$ to $XZ$.",
    "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjAwIj48cGF0aCBkPSJNMTAwLDE1MCBMMTgwLDE1MCBMMTgwLDUwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjgwIiB5PSIxNTAiIGZvbnQtc2l6ZT0iMTZweCI+WDwvdGV4dD48dGV4dCB4PSIxOTAiIHk9IjE1MCIgZm9udC1zaXplPSIxNnB4Ij5aPC90ZXh0Pjx0ZXh0IHg9IjE3NSIgeT0iNDAiIGZvbnQtc2l6ZT0iMTZweCI+WTwvdGV4dD48dGV4dCB4PSIxMzAiIHk9IjE2NSIgZm9udC1zaXplPSIxNnB4Ij42PC90ZXh0Pjx0ZXh0IHg9IjE5MCIgeT0iMTAwIiBmb250LXNpemU9IjE2cHgiPjg8L3RleHQ+PHRleHQgeD0iMTIwIiB5PSI5MSIgZm9udC1zaXplPSIxNnB4Ij4xMDwvdGV4dD48cmVjdCB4PSIxNzAiIHk9IjE0MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjUwLDE1MCBMMzEwLDE1MCBMMzEwLDc1IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjIzMCIgeT0iMTUwIiBmb250LXNpemU9IjE2cHgiPkY8L3RleHQ+PHRleHQgeD0iMzIwIiB5PSIxNTAiIGZvbnQtc2l6ZT0iMTZweCI+SDwvdGV4dD48dGV4dCB4PSIzMDUiIHk9IjY1IiBmb250LXNpemU9IjE2cHgiPkc8L3RleHQ+PHJlY3QgeD0iMzAwIiB5PSIxNDAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
    "options": [
      "$\\frac{3}{5}$",
      "$\\frac{4}{3}$",
      "$\\frac{4}{5}$",
      "$\\frac{3}{4}$"
    ],
    "correctAnswer": 2,
    "explanation": "Since $\\triangle XYZ \\sim \\triangle FGH$, $\\angle F$ corresponds to $\\angle X$. Therefore, $\\sin(F) = \\sin(X)$. In the right triangle $\\triangle XYZ$, $\\sin(X) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{YZ}{XY} = \\frac{8}{10} = \\frac{4}{5}$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_2",
    "question": "Triangles $\\triangle ABC$ and $\\triangle XYZ$ are similar. Based on the figures provided, what is the length of side XZ?",
    "imageUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjAwIj48cGF0aCBkPSJNMTAwLDE1MCBMNTAsMTUwIEw1MCw1MCBaIiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSI0NSIgeT0iNDAiIGZvbnQtc2l6ZT0iMTZweCI+QTwvdGV4dD48dGV4dCB4PSIzNSIgeT0iMTYwIiBmb250LXNpemU9IjE2cHgiPkI8L3RleHQ+PHRleHQgeD0iMTA1IiB5PSIxNjAiIGZvbnQtc2l6ZT0iMTZweCI+QzwvdGV4dD48dGV4dCB4PSIxNSIgeT0iMTA1IiBmb250LXNpemU9IjE0cHgiPjljbTwvdGV4dD48dGV4dCB4PSI2NSIgeT0iMTcwIiBmb250LXNpemU9IjE0cHgiPjEyY208L3RleHQ+PHRleHQgeD0iOTUiIHk9Ijk1IiBmb250LXNpemU9IjE0cHgiPjE1Y208L3RleHQ+PHJlY3QgeD0iNTAiIHk9IjE0MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjUwLDE1MCBMMjEwLDE1MCBMMjEwLDg1IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjIwNSIgeT0iNzUiIGZvbnQtc2l6ZT0iMTZweCI+WDwvdGV4dD48dGV4dCB4PSIxOTUiIHk9IjE2MCIgZm9udC1zaXplPSIxNnB4Ij5ZPC90ZXh0Pjx0ZXh0IHg9IjI1NSIgeT0iMTYwIiBmb250LXNpemU9IjE2cHgiPlo8L3RleHQ+PHRleHQgeD0iMTgwIiB5PSIxMjAiIGZvbnQtc2l6ZT0iMTRweCI+NmNtPC90ZXh0PjxyZWN0IHg9IjIxMCIgeT0iMTQwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
    "options": [
      "12",
      "10",
      "8",
      "15"
    ],
    "correctAnswer": 1,
    "explanation": "Using the properties of similar triangles, the ratio of corresponding sides is equal. $AB$ corresponds to $XY$, and $AC$ corresponds to $XZ$. Thus, $\\frac{XY}{AB} = \\frac{6}{9} = \\frac{2}{3}$. Then, $XZ = AC \\times \\frac{2}{3} = 15 \\times \\frac{2}{3} = 10$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_3",
    "question": "Triangle ABE is similar to triangle DCE. Line segments AE and DE have lengths of 28 and 21, respectively, while line segments CE and CD have lengths of 20 and 29, respectively. What is the length of line segment BE?\n\n(A sketch shows $\\triangle ABE$ and $\\triangle DCE$ sharing vertex E with AD and BC intersecting at E.)",
    "options": [
      "$\\frac{812}{21}$",
      "15",
      "$\\frac{560}{21}$",
      "$\\frac{560}{29}$"
    ],
    "correctAnswer": 2,
    "explanation": "Since $\\triangle ABE \\sim \\triangle DCE$, the ratio of their corresponding sides are equal. Therefore, $\\frac{BE}{CE} = \\frac{AE}{DE}$. Substituting the given values: $\\frac{BE}{20} = \\frac{28}{21}$. Solving for BE gives $BE = 20 \\times \\frac{28}{21} = \\frac{560}{21}$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_4",
    "question": "In triangles ABC and XYZ, AB = 22, XY = 11, and angles A and X both measure 77 degrees. Which of the following pieces of information, if any, would be enough to prove that the two triangles are similar to each other?\n\nI. Angle B measures 40 degrees\nII. Angle Y measures 50 degrees\nIII. Angle Z measures 63 degrees",
    "options": [
      "Angle measures alone do not provide enough information.",
      "No additional information is necessary.",
      "I and III together provide enough information.",
      "I and II together provide enough information."
    ],
    "correctAnswer": 2,
    "explanation": "If I and III are true, then in $\\triangle ABC$, $\\angle A = 77^\\circ$ and $\\angle B = 40^\\circ$, so $\\angle C = 180^\\circ - 77^\\circ - 40^\\circ = 63^\\circ$. In $\\triangle XYZ$, $\\angle X = 77^\\circ$ and $\\angle Z = 63^\\circ$. Since two angles of $\\triangle ABC$ are equal to two corresponding angles of $\\triangle XYZ$ ($\\angle A = \\angle X$ and $\\angle C = \\angle Z$), the triangles are similar by AA similarity.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_5",
    "question": "Triangles ABC and DEF are similar triangles. Angles A and D are right angles, and angle B corresponds to angle E. If $\\cos(C) = \\frac{23}{265}$, what is the value of $\\cos(F)$?",
    "options": [
      "$\\frac{265}{23}$",
      "$\\frac{23}{265}$",
      "$\\frac{264}{265}$",
      "$\\frac{265}{264}$"
    ],
    "correctAnswer": 1,
    "explanation": "Since the triangles are similar, corresponding angles are equal. Angle C corresponds to angle F, therefore $\\angle C \\cong \\angle F$. Thus, $\\cos(F) = \\cos(C) = \\frac{23}{265}$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_6",
    "question": "The side lengths of right triangle ABC are given as AB = 99, BC = 168, and CA = 195. Triangle DEF is similar to triangle ABC, where B corresponds to E and C corresponds to F. What is the value of $\\cos(D)$?",
    "options": [
      "$\\frac{65}{33}$",
      "$\\frac{33}{65}$",
      "$\\frac{33}{56}$",
      "$\\frac{56}{65}$"
    ],
    "correctAnswer": 1,
    "explanation": "In $\\triangle ABC$, $99^2 + 168^2 = 195^2$, so the right angle is at B. Since D corresponds to A, $\\cos(D) = \\cos(A)$. In the right triangle, $\\cos(A) = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{AB}{AC} = \\frac{99}{195} = \\frac{33}{65}$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_7",
    "question": "In triangle PQR, angle P measures 35 degrees and angle Q measures 43 degrees. In triangle LMN, angle M measures 43 degrees and angle N measures 35 degrees. Which additional piece of information is necessary to determine whether triangle PQR and triangle LMN are similar?",
    "options": [
      "The lengths of sides PQ and MN",
      "No additional information is necessary.",
      "The measure of angle L",
      "The length of side LM"
    ],
    "correctAnswer": 1,
    "explanation": "Two triangles are similar if two of their corresponding angles are equal (AA similarity). Both triangles have angles measuring 35 degrees and 43 degrees. Therefore, they are similar and no additional information is necessary.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_8",
    "question": "Triangles LMN and PQR are similar right triangles, where L corresponds to P and M corresponds to Q. The side lengths of triangle LMN are LM = 180, MN = 385, and NL = 425. What is the value of $\\cos(R)$?",
    "options": [
      "$\\frac{36}{77}$",
      "$\\frac{77}{85}$",
      "$\\frac{36}{85}$",
      "$\\frac{85}{36}$"
    ],
    "correctAnswer": 1,
    "explanation": "In $\\triangle LMN$, $180^2 + 385^2 = 425^2$, making the angle at M the right angle. R corresponds to N, so $\\cos(R) = \\cos(N)$. $\\cos(N) = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{MN}{NL} = \\frac{385}{425} = \\frac{77}{85}$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_9",
    "question": "Triangles ABC and DEF are similar to each other, and A, B, and C correspond to D, E, and F, respectively. Angle A is a right angle, angle E measures 35 degrees, and the length of segment AB is 15. What is the measure of angle B?",
    "options": [
      "35 degrees",
      "15 degrees",
      "55 degrees",
      "90 degrees"
    ],
    "correctAnswer": 0,
    "explanation": "Because $\\triangle ABC$ and $\\triangle DEF$ are similar, their corresponding angles are equal. Since B corresponds to E, $\\angle B = \\angle E = 35^\\circ$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_10",
    "question": "In triangles ABC and DEF, AC = 11, DF = 55, and angles B and E each measure 85 degrees. Which additional piece of information is sufficient to prove that triangles ABC and DEF are similar?",
    "options": [
      "The measures of angles A and F are 30 degrees and 65 degrees, respectively.",
      "BC = 6 and EF = 30",
      "The measures of angles A and D are 30 degrees and 35 degrees, respectively.",
      "BC = 6 and EF = 6"
    ],
    "correctAnswer": 0,
    "explanation": "If $\\angle A = 30^\\circ$ and $\\angle F = 65^\\circ$, then in $\\triangle ABC$, $\\angle C = 180^\\circ - 85^\\circ - 30^\\circ = 65^\\circ$. In $\\triangle DEF$, $\\angle D = 180^\\circ - 85^\\circ - 65^\\circ = 30^\\circ$. Since corresponding angles are equal, the triangles are similar (AA similarity). Option B would yield SSA which is not sufficient.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_11",
    "question": "In similar triangles QRS and TUV, angles Q and T each measure 90 degrees and angle R corresponds to angle U. The value of $\\cos(U)$ is $\\frac{93}{485}$. What is the value of $\\cos(R)$?",
    "options": [
      "$\\frac{476}{485}$",
      "$\\frac{485}{476}$",
      "$\\frac{485}{93}$",
      "$\\frac{93}{485}$"
    ],
    "correctAnswer": 3,
    "explanation": "Since the triangles are similar and R corresponds to U, their angle measures are identical. Thus, $\\cos(R) = \\cos(U) = \\frac{93}{485}$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_12",
    "question": "Triangles ABC and DEF are similar, where A, B, and C correspond to D, E, and F, respectively. If $BC = \\frac{1}{3}EF$ and angle B measures 30 degrees, what is the measure of angle E?",
    "options": [
      "10 degrees",
      "90 degrees",
      "30 degrees",
      "60 degrees"
    ],
    "correctAnswer": 2,
    "explanation": "Since the triangles are similar, their corresponding angles are equal. $\\angle E$ corresponds to $\\angle B$, so $\\angle E = 30^\\circ$. The scale factor relates to side lengths, not angle measures.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_13",
    "question": "Similar right triangles ABC and DEF are shown in the accompanying graphic, where B corresponds to E. If the measure of angle E is 52 degrees, what is the measure of angle C?\n\n(Triangles ABC and DEF are right-angled at A and D respectively.)",
    "options": [
      "128 degrees",
      "142 degrees",
      "38 degrees",
      "52 degrees"
    ],
    "correctAnswer": 2,
    "explanation": "Since $\\triangle ABC \\sim \\triangle DEF$, corresponding angles are equal, so $\\angle B = \\angle E = 52^\\circ$. Since $\\angle A = 90^\\circ$, $\\angle C = 90^\\circ - 52^\\circ = 38^\\circ$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_14",
    "question": "Similar right triangles ABC and DEF are shown, where B corresponds to E. If the measure of angle E is 52 degrees, what is the measure of angle C?",
    "options": [
      "52 degrees",
      "142 degrees",
      "38 degrees",
      "128 degrees"
    ],
    "correctAnswer": 2,
    "explanation": "Like the previous problem, $\\angle B = \\angle E = 52^\\circ$. Thus $\\angle C = 90^\\circ - 52^\\circ = 38^\\circ$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_15",
    "question": "In similar triangles ABC and XYZ, angles A, B, and C correspond to angles X, Y, and Z, respectively. If the measure of angle X is 30 degrees and the measure of angle Y is 110 degrees, what is the measure of angle B?",
    "options": [
      "150 degrees",
      "110 degrees",
      "40 degrees",
      "30 degrees"
    ],
    "correctAnswer": 1,
    "explanation": "Corresponding angles of similar triangles are equal. Angle B corresponds to angle Y, so the measure of angle B is $110^\\circ$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_16",
    "question": "A triangle has a base that is $65\\%$ of its height. If the base were decreased by 13 inches, how would the height need to change to keep the same proportions?",
    "options": [
      "It must decrease by 20 inches.",
      "It must decrease by 13 inches.",
      "It must increase by 13 inches.",
      "It must increase by 20 inches."
    ],
    "correctAnswer": 0,
    "explanation": "The proportion is $b = 0.65h$. If the base is $b - 13$, then $b - 13 = 0.65(h - x)$, where $x$ is the change in height. Since $b = 0.65h$, we have $0.65h - 13 = 0.65h - 0.65x$. This gives $13 = 0.65x$, or $x = \\frac{13}{0.65} = 20$. The height must decrease by 20 inches.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_17",
    "question": "A vertical flagpole casts a shadow of 12 feet along flat ground, while a nearby vertical 6-foot person casts a shadow of 2 feet at the exact same time. What is the height, in feet, of the flagpole?",
    "options": [
      "36",
      "72",
      "18",
      "24"
    ],
    "correctAnswer": 0,
    "explanation": "Set up a proportion using the similar triangles formed by the heights and shadows: $\\frac{h}{12} = \\frac{6}{2}$. Solving for $h$, we get $h = 12 \\times 3 = 36$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_18",
    "question": "Triangle ABC is similar to triangle DEF. The area of triangle ABC is 25 square units, and the area of triangle DEF is 100 square units. If the perimeter of triangle ABC is 15 units, what is the perimeter of triangle DEF?",
    "options": [
      "30",
      "60",
      "75",
      "45"
    ],
    "correctAnswer": 0,
    "explanation": "The ratio of their areas is $\\frac{25}{100} = \\frac{1}{4}$. The ratio of their perimeters is the square root of the area ratio, which is $\\sqrt{\\frac{1}{4}} = \\frac{1}{2}$. Thus, the perimeter of DEF is $15 \\times 2 = 30$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_19",
    "question": "Two similar triangles have a linear scale factor of 3:4. If the length of an altitude of the smaller triangle is 9, what is the length of the corresponding altitude of the larger triangle?",
    "options": [
      "16",
      "12",
      "27",
      "15"
    ],
    "correctAnswer": 1,
    "explanation": "Corresponding lengths in similar figures are proportional to the scale factor. So $\\frac{9}{x} = \\frac{3}{4}$, which gives $3x = 36 \\Rightarrow x = 12$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_20",
    "question": "In $\\triangle ABC$, a line segment DE is drawn parallel to BC such that D is positioned on side AB and E is on side AC. If AD = 4, DB = 2, and DE = 6, what is the length of segment BC?",
    "options": [
      "9",
      "12",
      "3",
      "8"
    ],
    "correctAnswer": 0,
    "explanation": "Because DE is parallel to BC, $\\triangle ADE \\sim \\triangle ABC$. The ratio of their corresponding sides is equal: $\\frac{AD}{AB} = \\frac{DE}{BC}$. Since $AB = AD + DB = 4 + 2 = 6$, we have $\\frac{4}{6} = \\frac{6}{BC}$. Solving yields $BC = 9$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_21",
    "question": "In a right triangle ABC with angle C equal to 90 degrees, an altitude CD is drawn perpendicular to the hypotenuse AB. If AD = 4 and DB = 9, what is the length of segment CD?",
    "options": [
      "5",
      "6",
      "13",
      "6.5"
    ],
    "correctAnswer": 1,
    "explanation": "By the geometric mean theorem (altitude rule), the altitude to the hypotenuse of a right triangle is the geometric mean of the segments of the hypotenuse. Thus, $CD^2 = AD \\times DB = 4 \\times 9 = 36$. Therefore, $CD = 6$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_22",
    "question": "Right triangle JKL is similar to right triangle MNO, where vertex J corresponds to M and K corresponds to N. If $\\tan(L) = \\frac{5}{12}$, what is the value of $\\sin(O)$?",
    "options": [
      "$\\frac{5}{12}$",
      "$\\frac{12}{13}$",
      "$\\frac{13}{5}$",
      "$\\frac{5}{13}$"
    ],
    "correctAnswer": 3,
    "explanation": "Because the triangles are similar, $\\angle L = \\angle O$. We are given $\\tan(O) = \\frac{5}{12}$. In a right triangle with legs 5 and 12, the hypotenuse is 13. Therefore, $\\sin(O) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{5}{13}$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_23",
    "question": "If triangle ABC is transformed and dilated by a scale factor of 2 to form triangle A'B'C', which of the following properties changes?",
    "options": [
      "The lengths of the sides",
      "The interior angle measures",
      "The general shape classification",
      "The values of the trigonometric ratios"
    ],
    "correctAnswer": 0,
    "explanation": "A dilation changes the size of the figure but not its shape, meaning the angle measures and trigonometric ratios stay the same. The lengths of the sides change according to the scale factor.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_24",
    "question": "A geometric proof requires showing that $\\triangle PQR$ is similar to $\\triangle STU$. If $\\frac{PQ}{ST} = \\frac{QR}{TU} = \\frac{PR}{SU}$, which similarity theorem is being directly applied?",
    "options": [
      "Side-Angle-Side (SAS) Similarity",
      "Side-Side-Side (SSS) Similarity",
      "Angle-Angle (AA) Similarity",
      "Hypotenuse-Leg (HL) Congruence"
    ],
    "correctAnswer": 1,
    "explanation": "The given condition shows that all three pairs of corresponding sides are proportional. This matches the Side-Side-Side (SSS) Similarity theorem.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_25",
    "question": "Triangle XYZ is similar to triangle WVY. If the perimeter of triangle XYZ is 48 and the ratio of their corresponding sides is $\\frac{3}{2}$, what is the perimeter of triangle WVY?",
    "options": [
      "72",
      "16",
      "24",
      "32"
    ],
    "correctAnswer": 3,
    "explanation": "The ratio of the perimeters of similar triangles is equal to the ratio of their corresponding sides. So $\\frac{\\text{Perimeter XYZ}}{\\text{Perimeter WVY}} = \\frac{3}{2} \\Rightarrow \\frac{48}{P} = \\frac{3}{2}$. Solving for $P$, we get $P = 48 \\times \\frac{2}{3} = 32$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_26",
    "question": "In right triangle ABC, the measure of angle B is 90 degrees. Triangle DEF is similar to triangle ABC, where vertex A corresponds to D and C corresponds to F. If $\\sin(A) = \\frac{7}{25}$, what is the value of $\\cos(F)$?",
    "options": [
      "$\\frac{24}{25}$",
      "$\\frac{25}{24}$",
      "$\\frac{7}{25}$",
      "$\\frac{25}{7}$"
    ],
    "correctAnswer": 2,
    "explanation": "Since the triangles are similar, corresponding angles are equal, so $\\angle F = \\angle C$. In the right triangle ABC, $\\sin(A) = \\frac{\\text{Opposite}(A)}{\\text{Hypotenuse}} = \\frac{BC}{AC} = \\frac{7}{25}$. The cosine of C is $\\frac{\\text{Adjacent}(C)}{\\text{Hypotenuse}} = \\frac{BC}{AC} = \\frac{7}{25}$. Therefore, $\\cos(F) = \\frac{7}{25}$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_27",
    "question": "A map uses a scale where 1 inch represents 5 miles. A triangular park depicted on the map has sides of lengths 3 inches, 4 inches, and 5 inches. What is the actual perimeter of the park in miles?",
    "options": [
      "15",
      "300",
      "60",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "The perimeter on the map is $3 + 4 + 5 = 12$ inches. The actual perimeter is scaled by a factor of 5 miles per inch, so $12 \\times 5 = 60$ miles.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_28",
    "question": "Triangles ABC and A'B'C' are mathematically similar. If the ratio of their corresponding sides is represented by the constant $k$, what is the ratio of their areas?",
    "options": [
      "$k^2$",
      "$\\sqrt{k}$",
      "$k$",
      "$k^3$"
    ],
    "correctAnswer": 0,
    "explanation": "The ratio of the areas of two similar figures is equal to the square of the ratio of their corresponding linear dimensions (scale factor). Since the linear scale factor is $k$, the area ratio is $k^2$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_29",
    "question": "In $\\triangle ABC$, points D and E are located on sides AB and AC, respectively, such that segment DE is parallel to BC. If AE = 3, EC = 6, and DE = 4, what is the length of side BC?",
    "options": [
      "8",
      "12",
      "9",
      "16"
    ],
    "correctAnswer": 1,
    "explanation": "Because DE is parallel to BC, $\\triangle ADE \\sim \\triangle ABC$. This implies $\\frac{AE}{AC} = \\frac{DE}{BC}$. Since $AC = AE + EC = 3 + 6 = 9$, we have $\\frac{3}{9} = \\frac{4}{BC}$. Simplifying, $\\frac{1}{3} = \\frac{4}{BC}$, which gives $BC = 12$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  },
  {
    "id": "similarity_30",
    "question": "In similar triangles MNO and PQR, the ratio of the area of MNO to the area of PQR is $\\frac{4}{9}$. If MN = 10, what is the length of the corresponding side PQ?",
    "options": [
      "6.67",
      "20",
      "22.5",
      "15"
    ],
    "correctAnswer": 3,
    "explanation": "The ratio of areas of similar triangles is the square of the ratio of their corresponding sides. So $\\left(\\frac{MN}{PQ}\\right)^2 = \\frac{4}{9}$, which means $\\frac{MN}{PQ} = \\frac{2}{3}$. Given MN = 10, we have $\\frac{10}{PQ} = \\frac{2}{3} \\Rightarrow 2PQ = 30 \\Rightarrow PQ = 15$.",
    "category": "Geometry",
    "topics": [
      "Similarity"
    ]
  }
];
