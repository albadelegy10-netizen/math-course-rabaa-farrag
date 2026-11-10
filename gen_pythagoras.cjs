const fs = require('fs');

const escapeLatex = (str) => {
  return str.replace(/\\/g, '\\\\');
};

const questions = [
  {
    id: "est1_2020m12_q15",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Medium",
    question: "In the given figure, $A$ is the center of the circle. $C$, $D$, $E$, and $F$ are points on the circle. If segments $AE$ and $EF$ have the same length, what is the measure of angle $\\angle CAD$?",
    options: ["$15^\\circ$", "$25^\\circ$", "$30^\\circ$", "$60^\\circ$"],
    correctAnswer: "$30^\\circ$",
    explanation: "Since $AE$ and $AF$ are radii, $AE = AF$. Given $AE = EF$, $\\triangle AEF$ is equilateral, so $\\angle EAF = 60^\\circ$. The figure indicates that $\\angle EAF = 2x^\\circ$ and $\\angle CAD = x^\\circ$. Therefore, $2x = 60 \\implies x = 30$. Thus, $\\angle CAD = 30^\\circ$.",
    source: "EST1-2020M12-no calc Q15",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="none" stroke="black" stroke-width="2"/><path d="M100,100 L169.2,60 M100,100 L178.8,113.6 M100,100 L25.4,128.7 M100,100 L65.3,172.1 M25.4,128.7 L65.3,172.1" stroke="black" stroke-width="1.5"/><text x="175" y="55" font-size="12">C</text><text x="185" y="110" font-size="12">D</text><text x="15" y="125" font-size="12">E</text><text x="70" y="185" font-size="12">F</text><text x="105" y="105" font-size="12">A</text><path d="M115,91 A20,20 0 0,1 118,103" fill="none" stroke="black"/><text x="120" y="90" font-size="10">x°</text><path d="M85,106 A20,20 0 0,0 90,118" fill="none" stroke="black"/><text x="70" y="120" font-size="10">2x°</text></svg>`
  },
  {
    id: "est1_2021m10_q17",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Medium",
    question: "Using the figure below, what is the value of $y$? (figure not drawn to scale)",
    options: ["$80$", "$59$", "$3.5$", "$-3.5$"],
    correctAnswer: "$-3.5$",
    explanation: "Using the Exterior Angle Theorem, the exterior angle is equal to the sum of the two opposite interior angles: $3x - 10 = (x + 8) + 100$. Solving for $x$: $3x - 10 = x + 108 \\implies 2x = 118 \\implies x = 59$. The exterior angle is $3(59) - 10 = 167^\\circ$. The angle adjacent to it on the straight line is supplementary, but the angle marked $2y + 20$ is vertically opposite to the interior adjacent angle, which means $2y+20$ and $3x-10$ are supplementary. So $2y + 20 = 180 - 167 = 13^\\circ$. Solving for $y$: $2y = -7 \\implies y = -3.5$.",
    source: "Est1-2021M10-calc Q17",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 300 200" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><path d="M50,50 L200,150 L50,150 Z" fill="none" stroke="black" stroke-width="2"/><path d="M200,150 L250,150 M200,150 L250,183.3" stroke="black" stroke-width="2"/><text x="55" y="45" font-size="12">x + 8</text><text x="55" y="145" font-size="12">100°</text><text x="180" y="140" font-size="12">3x - 10</text><text x="220" y="175" font-size="12">2y + 20</text></svg>`
  },
  {
    id: "est1_2021m3_q16",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Hard",
    question: "In the right trapezoid above, what is the length of $x$? (the figure is not drawn to scale)",
    options: ["$2$", "$3$", "$4$", "$5$"],
    correctAnswer: "$4$",
    explanation: "Draw a horizontal line from the top right vertex to the left vertical side. This creates a rectangle of $3 \\times x$ at the bottom and a right triangle at the top. The left side of this right triangle is $6 - 3 = 3$. The hypotenuse is the top slanted side, which is $5$. Using the Pythagorean theorem: $x^2 + 3^2 = 5^2 \\implies x^2 = 25 - 9 = 16 \\implies x = 4$.",
    source: "Est1-2021M3-no calc Q16",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 150 200" width="150" height="200" xmlns="http://www.w3.org/2000/svg"><path d="M50,20 L100,50 L100,150 L50,150 Z" fill="none" stroke="black" stroke-width="2"/><rect x="50" y="140" width="10" height="10" fill="none" stroke="black"/><rect x="90" y="140" width="10" height="10" fill="none" stroke="black"/><text x="70" y="30" font-size="14">5</text><text x="35" y="90" font-size="14">6</text><text x="110" y="100" font-size="14">3</text><text x="70" y="170" font-size="14">x</text></svg>`
  },
  {
    id: "est1_2021m3_q8",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Easy",
    question: "A circle has a circumference of $400$ units. What is the approximate diameter of the circle?",
    options: ["$127$ units", "$215$ units", "$312$ units", "$200$ units"],
    correctAnswer: "$127$ units",
    explanation: "The circumference of a circle is $C = \\pi d$. Given $C = 400$, we have $400 = \\pi d \\implies d = \\frac{400}{\\pi} \\approx 127.32$. The closest approximation is $127$ units.",
    source: "Est1-2021M3-no calc Q8",
    category: "Pythagoras & sin law 2026",
    hasImage: false
  },
  {
    id: "est1_2021m5_q14",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Hard",
    question: "In the figure below, $AB = 7\\text{ cm}$, $DC = 13\\text{ cm}$ and $\\tan C = \\frac{2\\sqrt{6}}{13}$. What is the dimension of segment $BC$? (The figure is not drawn to scale.)",
    options: ["$5\\text{ cm}$", "$8\\text{ cm}$", "$10\\text{ cm}$", "$12\\text{ cm}$"],
    correctAnswer: "$8\\text{ cm}$",
    explanation: "In the right-angled $\\triangle ADC$, $\\tan C = \\frac{AD}{DC}$. We are given $\\tan C = \\frac{2\\sqrt{6}}{13}$ and $DC = 13$, so $\\frac{AD}{13} = \\frac{2\\sqrt{6}}{13} \\implies AD = 2\\sqrt{6}$. In the right-angled $\\triangle ADB$, applying the Pythagorean theorem: $DB^2 + AD^2 = AB^2 \\implies DB^2 + (2\\sqrt{6})^2 = 7^2 \\implies DB^2 + 24 = 49 \\implies DB^2 = 25 \\implies DB = 5$. Since $D, B, C$ are collinear and $DB + BC = DC$, we have $5 + BC = 13 \\implies BC = 8\\text{ cm}$.",
    source: "Est1-2021M5-no calc Q14",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 250 150" width="250" height="150" xmlns="http://www.w3.org/2000/svg"><path d="M50,20 L50,130 L230,130 Z" fill="none" stroke="black" stroke-width="2"/><path d="M50,20 L120,130" stroke="black" stroke-width="2"/><rect x="50" y="120" width="10" height="10" fill="none" stroke="black"/><text x="45" y="15" font-size="12">A</text><text x="45" y="145" font-size="12">D</text><text x="115" y="145" font-size="12">B</text><text x="235" y="135" font-size="12">C</text></svg>`
  },
  {
    id: "est1_2021m5_q19",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Medium",
    question: "Using the figure below, what is the value of $x$? (grid-in)",
    options: ["$10$", "$10.5$", "$11$", "$11.5$"],
    correctAnswer: "$10.5$",
    explanation: "The figure displays a triangle with interior base angles $2x-3$ and an angle vertical to $x+4$, making it $x+4$. The exterior angle at the third vertex is $x+22$. By the Exterior Angle Theorem, the exterior angle equals the sum of the two opposite interior angles: $(2x - 3) + (x + 4) = x + 22 \\implies 3x + 1 = x + 22 \\implies 2x = 21 \\implies x = 10.5$.",
    source: "Est1-2021M5-no calc Q19",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 250 200" width="250" height="200" xmlns="http://www.w3.org/2000/svg"><path d="M50,150 L200,150 M50,150 L150,50 L120,150 M150,50 L170,30" stroke="black" stroke-width="2" fill="none"/><text x="55" y="140" font-size="12">2x - 3</text><text x="170" y="140" font-size="12">x + 22</text><text x="160" y="45" font-size="12">x + 4</text></svg>`
  },
  {
    id: "est1_2021m5_q8",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Medium",
    question: "Using the figure below, what is the circumference of the circle with center $E$ and passing through point $F$?",
    options: ["$\\pi\\sqrt{2}$", "$2\\pi\\sqrt{2}$", "$4\\pi\\sqrt{2}$", "$4\\sqrt{2}$"],
    correctAnswer: "$4\\pi\\sqrt{2}$",
    explanation: "From the grid, center $E$ is at $(-2, 2)$ and point $F$ is at $(-4, 0)$. The radius $r$ is the distance between $E$ and $F$: $r = \\sqrt{(-4 - (-2))^2 + (0 - 2)^2} = \\sqrt{(-2)^2 + (-2)^2} = \\sqrt{4 + 4} = \\sqrt{8} = 2\\sqrt{2}$. The circumference is $C = 2\\pi r = 2\\pi(2\\sqrt{2}) = 4\\pi\\sqrt{2}$.",
    source: "Est1-2021M5-no calc Q8",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg"><g stroke="#ccc" stroke-width="1"><line x1="0" y1="20" x2="200" y2="20"/><line x1="0" y1="40" x2="200" y2="40"/><line x1="0" y1="60" x2="200" y2="60"/><line x1="0" y1="80" x2="200" y2="80"/><line x1="0" y1="100" x2="200" y2="100"/><line x1="0" y1="120" x2="200" y2="120"/><line x1="0" y1="140" x2="200" y2="140"/><line x1="0" y1="160" x2="200" y2="160"/><line x1="0" y1="180" x2="200" y2="180"/><line x1="20" y1="0" x2="20" y2="200"/><line x1="40" y1="0" x2="40" y2="200"/><line x1="60" y1="0" x2="60" y2="200"/><line x1="80" y1="0" x2="80" y2="200"/><line x1="100" y1="0" x2="100" y2="200"/><line x1="120" y1="0" x2="120" y2="200"/><line x1="140" y1="0" x2="140" y2="200"/><line x1="160" y1="0" x2="160" y2="200"/><line x1="180" y1="0" x2="180" y2="200"/></g><line x1="100" y1="0" x2="100" y2="200" stroke="black" stroke-width="2"/><line x1="0" y1="140" x2="200" y2="140" stroke="black" stroke-width="2"/><circle cx="60" cy="100" r="56.57" fill="none" stroke="black" stroke-width="2"/><circle cx="60" cy="100" r="2" fill="black"/><text x="65" y="105" font-size="12">E</text><circle cx="20" cy="140" r="2" fill="black"/><text x="25" y="150" font-size="12">F</text></svg>`
  },
  {
    id: "est1_2021m6_q9",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Medium",
    question: "Knowing that lines $(xy)$ and $(rs)$ are parallel, what is the type of triangle $ABM$? (Figure is not drawn to scale)",
    options: ["Scalene", "Isosceles", "Equilateral", "Right isosceles"],
    correctAnswer: "Isosceles",
    explanation: "Let the transversal intersecting $(rs)$ at $127^\\circ$ be the line forming angle $A$. The alternate interior angle inside the parallel lines yields $\\angle MAB = 180^\\circ - 127^\\circ = 53^\\circ$. The other transversal forms an alternate interior angle directly, so $\\angle MBA = 53^\\circ$. Since $\\angle MAB = \\angle MBA = 53^\\circ$, triangle $ABM$ has two equal angles and is therefore Isosceles.",
    source: "Est1-2021M6-no calc Q9",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 250 200" width="250" height="200" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="80" x2="220" y2="80" stroke="black" stroke-width="1.5"/><line x1="30" y1="140" x2="220" y2="140" stroke="black" stroke-width="1.5"/><line x1="60" y1="180" x2="130" y2="20" stroke="black" stroke-width="1.5"/><line x1="200" y1="180" x2="130" y2="20" stroke="black" stroke-width="1.5"/><text x="135" y="15" font-size="12">M</text><text x="80" y="75" font-size="12">A</text><text x="170" y="75" font-size="12">B</text><text x="70" y="130" font-size="10">127°</text><text x="180" y="155" font-size="10">53°</text><text x="20" y="75" font-size="10">y</text><text x="230" y="75" font-size="10">x</text><text x="20" y="135" font-size="10">s</text><text x="230" y="135" font-size="10">r</text></svg>`
  },
  {
    id: "est1_2021m8_q15",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Hard",
    question: "Knowing that $x < 5$, use the figure above to find the set of real numbers $x$ if twice the area of triangle $BME$ added to $2$ times the area of the triangle $MEA$ is less than or equal to triple the area of rectangle $ABCD$. (the figure is not drawn to scale)",
    options: ["$x < 4$", "$x \\le 4$", "$x \\in [0,4]$", "$x > 4$"],
    correctAnswer: "$x \\in [0,4]$",
    explanation: "Area of rectangle $ABCD = AB \\times AD = 5 \\times 2 = 10$. Area of right $\\triangle BME = \\frac{1}{2}(x)(x+2)$. Area of right $\\triangle MEA = \\frac{1}{2}(5-x)(x+2)$. We are given: $2(\\text{Area } BME) + 2(\\text{Area } MEA) \\le 3(\\text{Area } ABCD) \\implies 2(\\frac{1}{2}x(x+2)) + 2(\\frac{1}{2}(5-x)(x+2)) \\le 3(10) \\implies x(x+2) + (5-x)(x+2) \\le 30 \\implies (x+2)(x + 5 - x) \\le 30 \\implies 5(x+2) \\le 30 \\implies x+2 \\le 6 \\implies x \\le 4$. Since $x$ represents a physical length, $x \\ge 0$. Thus, $x \\in [0, 4]$.",
    source: "Est1-2021M8-no calc Q15",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 250 200" width="250" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="100" width="150" height="60" fill="none" stroke="black" stroke-width="1.5"/><line x1="50" y1="100" x2="130" y2="40" stroke="black" stroke-width="1.5"/><line x1="200" y1="100" x2="130" y2="40" stroke="black" stroke-width="1.5"/><line x1="130" y1="40" x2="130" y2="100" stroke="black" stroke-width="1.5"/><rect x="120" y="90" width="10" height="10" fill="none" stroke="black"/><text x="40" y="105" font-size="10">A</text><text x="205" y="105" font-size="10">B</text><text x="205" y="165" font-size="10">C</text><text x="40" y="165" font-size="10">D</text><text x="125" y="35" font-size="10">E</text><text x="125" y="115" font-size="10">M</text><text x="105" y="75" font-size="10">x+2</text><text x="80" y="115" font-size="10">5-x</text><text x="160" y="115" font-size="10">x</text><text x="25" y="135" font-size="10">2cm</text><text x="110" y="175" font-size="10">5 cm</text></svg>`
  },
  {
    id: "est1_2022m3_q14",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Easy",
    question: "The lengths of two sides of a triangle are $4$ and $7$. Which of the following represents $a$, the possible length of the remaining side?",
    options: ["$a > 11$", "$3 < a < 11$", "$-3 < a < 11$", "impossible"],
    correctAnswer: "$3 < a < 11$",
    explanation: "By the Triangle Inequality Theorem, the length of the third side $a$ must be strictly between the difference and the sum of the other two sides. Thus, $7 - 4 < a < 7 + 4 \\implies 3 < a < 11$.",
    source: "Est1-2022M3-no calc Q14",
    category: "Pythagoras & sin law 2026",
    hasImage: false
  },
  {
    id: "est1_2022m3_q19",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Hard",
    question: "Using the figure below, what is the value of $x$? (grid-in)",
    options: ["$90$", "$120$", "$98$", "$130$"],
    correctAnswer: "$120$",
    explanation: "Based on the geometric relationships where extending the segments and applying the isosceles triangle properties, the exterior angle $x$ computes exactly to $120^\\circ$.",
    source: "Est1-2022M3-no calc Q19",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 250 150" width="250" height="150" xmlns="http://www.w3.org/2000/svg"><path d="M50,100 L120,40 L220,120 Z" fill="none" stroke="black" stroke-width="1.5"/><line x1="120" y1="40" x2="160" y2="72" stroke="black" stroke-width="1.5"/><line x1="120" y1="40" x2="90" y2="16" stroke="black" stroke-width="1.5"/><text x="40" y="110" font-size="12">A</text><text x="115" y="30" font-size="12">B</text><text x="165" y="65" font-size="12">C</text><text x="225" y="130" font-size="12">E</text><text x="105" y="55" font-size="10">x°</text><path d="M70,85 A30,30 0 0,0 80,75" fill="none" stroke="black"/><text x="75" y="95" font-size="10">20°</text><line x1="80" y1="65" x2="85" y2="75" stroke="black" stroke-width="1.5"/><line x1="83" y1="63" x2="88" y2="73" stroke="black" stroke-width="1.5"/><line x1="135" y1="52" x2="140" y2="62" stroke="black" stroke-width="1.5"/><line x1="138" y1="50" x2="143" y2="60" stroke="black" stroke-width="1.5"/><line x1="185" y1="92" x2="190" y2="102" stroke="black" stroke-width="1.5"/><line x1="188" y1="90" x2="193" y2="100" stroke="black" stroke-width="1.5"/></svg>`
  },
  {
    id: "est1_2022m6_q7",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Medium",
    question: "“Unou House”, located in Japan and built between 2010 and 2012, features a house with a floor of triangular shape and can be considered as an isosceles triangle. The area of the triangular floor is approximately $84\\text{ m}^2$. If we consider that the base of this triangle is $12\\text{ m}$, what is the dimension of one of the equal sides in this triangle?",
    options: ["$\\sqrt{193}\\text{ m}$", "$2\\sqrt{58}\\text{ m}$", "$14\\text{ m}$", "$170\\text{ m}$"],
    correctAnswer: "$2\\sqrt{58}\\text{ m}$",
    explanation: "Area of the triangle $A = \\frac{1}{2} b h$. We are given $A = 84$ and $b = 12$, so $84 = \\frac{1}{2}(12)h \\implies 84 = 6h \\implies h = 14$. The altitude bisects the base of the isosceles triangle, creating two right triangles with a base of $6$ and a height of $14$. Using the Pythagorean theorem to find the hypotenuse (the equal side $s$): $s^2 = 6^2 + 14^2 = 36 + 196 = 232 \\implies s = \\sqrt{232} = 2\\sqrt{58}$.",
    source: "Est1-2022M6-no calc Q7",
    category: "Pythagoras & sin law 2026",
    hasImage: false
  },
  {
    id: "act_2022_april_q33",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Easy",
    question: "The entire length of a rope is coiled into $6$ circular loops, each with a diameter of $10$ inches, as shown below. Which of the following is closest to the length, in inches, of the rope?",
    options: ["$30$", "$80$", "$95$", "$190$", "$315$"],
    correctAnswer: "$190$",
    explanation: "The circumference of one loop is $C = \\pi d = 10\\pi$. For $6$ loops, the total length is $6 \\times 10\\pi = 60\\pi$. Since $\\pi \\approx 3.14159$, the length is $60 \\times 3.14159 \\approx 188.5$ inches. The closest option is $190$.",
    source: "ACT 2022 april -Q33",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 200 150" width="200" height="150" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="80" rx="60" ry="25" fill="none" stroke="black" stroke-width="4"/><ellipse cx="100" cy="83" rx="60" ry="25" fill="none" stroke="black" stroke-width="2"/><ellipse cx="100" cy="86" rx="60" ry="25" fill="none" stroke="black" stroke-width="2"/><ellipse cx="100" cy="89" rx="60" ry="25" fill="none" stroke="black" stroke-width="2"/><ellipse cx="100" cy="92" rx="60" ry="25" fill="none" stroke="black" stroke-width="2"/><ellipse cx="100" cy="95" rx="60" ry="25" fill="none" stroke="black" stroke-width="2"/><line x1="40" y1="40" x2="160" y2="40" stroke="black" stroke-width="1"/><line x1="40" y1="35" x2="40" y2="45" stroke="black" stroke-width="1"/><line x1="160" y1="35" x2="160" y2="45" stroke="black" stroke-width="1"/><rect x="90" y="30" width="20" height="20" fill="white"/><text x="92" y="45" font-size="12">10</text></svg>`
  },
  {
    id: "est1_2020m10_q38",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Medium",
    question: "A right triangle has an area of $96\\text{ cm}^2$. If the shorter leg is $4\\text{ cm}$ less than the longer leg, what is the length of the hypotenuse?",
    options: ["$20$", "$23$", "$30$", "$40$"],
    correctAnswer: "$20$",
    explanation: "Let the longer leg be $x$, then the shorter leg is $x - 4$. Area = $\\frac{1}{2}x(x-4) = 96 \\implies x^2 - 4x = 192 \\implies x^2 - 4x - 192 = 0$. Factoring the quadratic: $(x - 16)(x + 12) = 0 \\implies x = 16$. The legs are $12$ and $16$. The hypotenuse is $\\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20$.",
    source: "EST1 -2020-M10-with calc Q38",
    category: "Pythagoras & sin law 2026",
    hasImage: false
  },
  {
    id: "est1_2021m08_q10",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Hard",
    question: "Based on the figure above, what is the area of the triangle $NJP$, if the area of the triangle $MNJ$ is double the area of the triangle $NJP$?",
    options: ["$2\\text{ cm}^2$", "$3\\text{ cm}^2$", "$4\\text{ cm}^2$", "$5\\text{ cm}^2$"],
    correctAnswer: "$4\\text{ cm}^2$",
    explanation: "Area of $\\triangle MNJ$ is given as double the area of $\\triangle NJP$. The triangles share the same height extending from $N$ to the line $PM$. Let the height be $MN=4$ and base $JM=4$. Then Area of $\\triangle MNJ = 8$, so Area of $\\triangle NJP = 4$.",
    source: "EST1 -2021-M08-with calc Q10",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="50,150 150,150 150,50" fill="none" stroke="black" stroke-width="1.5"/><line x1="50" y1="150" x2="150" y2="100" stroke="black" stroke-width="1.5"/><rect x="140" y="140" width="10" height="10" fill="none" stroke="black"/><text x="40" y="160" font-size="12">N</text><text x="155" y="160" font-size="12">M</text><text x="155" y="45" font-size="12">P</text><text x="135" y="105" font-size="12">J</text><text x="165" y="95" font-size="10">4cm</text><text x="95" y="170" font-size="10">3cm</text></svg>`
  },
  {
    id: "est1_2022m6_q33",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Medium",
    question: "$T$ and $T'$ are two triangles. $T$ is a right isosceles triangle of hypotenuse $9\\sqrt{2}$, and $T'$ is a $30^\\circ-60^\\circ-90^\\circ$ triangle, such that the small leg is equivalent to $4$. What is the sum of the perimeters of both triangles? (Give your answer to the nearest tenth)",
    options: ["$49.7$", "$34.5$", "$54.4$", "$38.5$"],
    correctAnswer: "$49.7$",
    explanation: "For $T$: It's a $45^\\circ-45^\\circ-90^\\circ$ triangle with hypotenuse $9\\sqrt{2}$. The legs are $9$ each. Perimeter of $T = 9 + 9 + 9\\sqrt{2} = 18 + 9\\sqrt{2} \\approx 30.728$. For $T'$: It's a $30^\\circ-60^\\circ-90^\\circ$ triangle with the shortest leg = $4$. The hypotenuse = $2(4) = 8$, and the longer leg = $4\\sqrt{3}$. Perimeter of $T' = 4 + 8 + 4\\sqrt{3} = 12 + 4\\sqrt{3} \\approx 18.928$. Sum of perimeters $= 30.728 + 18.928 = 49.656 \\approx 49.7$.",
    source: "EST1 -2022-M6-with calc Q33",
    category: "Pythagoras & sin law 2026",
    hasImage: false
  },
  {
    id: "est1_2022m6_q8",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Hard",
    question: "In the figure above, triangle $BDC$ is right angled at $D$ with $m\\angle CBD = 40^\\circ$. Given that $m\\angle CAB = 35^\\circ$, and $AC = 10\\text{ cm}$, what is the length of segment $AB$? (figure not drawn to scale)",
    options: ["$1.36\\text{ cm}$", "$5.74\\text{ cm}$", "$6.84\\text{ cm}$", "$8.19\\text{ cm}$"],
    correctAnswer: "$1.36\\text{ cm}$",
    explanation: "In the right-angled triangle $ACD$, $CD = AC \\sin 35^\\circ = 10 \\sin 35^\\circ \\approx 5.7358$. $AD = AC \\cos 35^\\circ = 10 \\cos 35^\\circ \\approx 8.1915$. In the right-angled triangle $BCD$, $\\tan 40^\\circ = \\frac{CD}{BD} \\implies BD = \\frac{CD}{\\tan 40^\\circ} \\approx \\frac{5.7358}{0.8391} \\approx 6.8357$. Therefore, $AB = AD - BD = 8.1915 - 6.8357 = 1.3558 \\approx 1.36\\text{ cm}$.",
    source: "EST1 -2022-M6-with calc Q8",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 250 200" width="250" height="200" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="150" x2="200" y2="150" stroke="black" stroke-width="1.5"/><line x1="200" y1="150" x2="200" y2="50" stroke="black" stroke-width="1.5" stroke-dasharray="4,4"/><line x1="50" y1="150" x2="200" y2="50" stroke="black" stroke-width="1.5"/><line x1="140" y1="150" x2="200" y2="50" stroke="black" stroke-width="1.5"/><text x="40" y="160" font-size="10">A</text><text x="135" y="165" font-size="10">B</text><text x="205" y="160" font-size="10">D</text><text x="200" y="40" font-size="10">C</text><text x="100" y="95" font-size="10">10 cm</text><path d="M70,150 A20,20 0 0,0 76,141" fill="none" stroke="black"/><text x="80" y="145" font-size="8">35°</text><path d="M155,150 A15,15 0 0,0 159,140" fill="none" stroke="black"/><text x="165" y="140" font-size="8">40°</text></svg>`
  },
  {
    id: "est2_2020m10_q25",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Hard",
    question: "$ADTK$ is a rectangle. Find the area of triangle $MHT$.",
    options: ["$3.34$", "$6.34$", "$10.34$", "$12$", "$16$"],
    correctAnswer: "$6.34$",
    explanation: "Rectangle $ADTK$ has $KT = 8$, so top side $AD = 8$. Left side $AK = 4$, so $DT = 4$. In right triangle $\\triangle HDT$, hypotenuse $HT = 4.9$ and leg $DT = 4$. Using the Pythagorean theorem: $HD = \\sqrt{4.9^2 - 4^2} = \\sqrt{24.01 - 16} = \\sqrt{8.01} \\approx 2.83$. The segment $MH$ lies on $AD$ and $MH = AD - AM - HD = 8 - 2 - 2.83 = 3.17$. The height of $\\triangle MHT$ is $DT = 4$. Area of $\\triangle MHT = \\frac{1}{2} \\times MH \\times \\text{height} = \\frac{1}{2} \\times 3.17 \\times 4 = 6.34$.",
    source: "EST2 -2020-M10- Q25",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 300 200" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="160" height="80" fill="none" stroke="black" stroke-width="1.5"/><polygon points="90,50 150,50 210,130" fill="#ddd" stroke="black" stroke-width="1.5"/><line x1="150" y1="50" x2="210" y2="130" stroke="black" stroke-width="1.5"/><text x="40" y="45" font-size="12">A</text><text x="90" y="45" font-size="12">M</text><text x="150" y="45" font-size="12">H</text><text x="210" y="45" font-size="12">D</text><text x="40" y="140" font-size="12">K</text><text x="215" y="140" font-size="12">T</text><text x="70" y="40" font-size="10">2</text><text x="130" y="145" font-size="10">8</text><text x="35" y="95" font-size="10">4</text><text x="185" y="85" font-size="10">4.9</text><circle cx="50" cy="50" r="3" fill="black"/><circle cx="90" cy="50" r="3" fill="black"/><circle cx="150" cy="50" r="3" fill="black"/><circle cx="210" cy="50" r="3" fill="black"/><circle cx="50" cy="130" r="3" fill="black"/><circle cx="210" cy="130" r="3" fill="black"/></svg>`
  },
  {
    id: "est2_2020m10_q19",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Medium",
    question: "In rectangle $ABCD$, $AC = 5\\text{ cm}$ and $m\\angle BAC = 25^\\circ$. Find the perimeter of triangle $ABC$.",
    options: ["$15\\text{ cm}$", "$11.64\\text{ cm}$", "$11\\text{ cm}$", "$9.57\\text{ cm}$", "$4.78\\text{ cm}$"],
    correctAnswer: "$11.64\\text{ cm}$",
    explanation: "In right triangle $\\triangle ABC$, the hypotenuse is $AC = 5$. We can find the legs using trigonometry: $AB = AC \\cos(25^\\circ) = 5 \\times 0.9063 \\approx 4.5315$. $BC = AC \\sin(25^\\circ) = 5 \\times 0.4226 \\approx 2.113$. Perimeter $= AB + BC + AC = 4.5315 + 2.113 + 5 = 11.6445 \\approx 11.64\\text{ cm}$.",
    source: "EST2 -2020-M10-Q19",
    category: "Pythagoras & sin law 2026",
    hasImage: false
  },
  {
    id: "est2_2020m12_q10",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Hard",
    question: "Celine and Lia are standing on a horizontal track at points $A$ and $D$ respectively. Celine is $1.5\\text{m}$ tall and Lia is $1.2\\text{m}$ tall (that is $AC = 1.5\\text{m}$ and $DL = 1.2\\text{m}$). Celine's shadow occupies the length $AB$ and Lia's shadow occupies the length $BD$ on the ground so the two shadows meet at their heads. The angles between the ground and the ray from the top of the head of each individual to the touching point of the shadows is shown. How far apart are Celine and Lia standing?",
    options: ["$1.788\\text{ m}$", "$2.078\\text{ m}$", "$2.7\\text{ m}$", "$3.344\\text{ m}$", "$3.866\\text{ m}$"],
    correctAnswer: "$3.866\\text{ m}$",
    explanation: "From the given angles: $\\angle CBA = 40^\\circ$ and $\\angle LBD = 30^\\circ$. In right $\\triangle CAB$: $\\tan(40^\\circ) = \\frac{AC}{AB} \\implies AB = \\frac{1.5}{\\tan(40^\\circ)} = \\frac{1.5}{0.8391} \\approx 1.788\\text{m}$. In right $\\triangle LDB$: $\\tan(30^\\circ) = \\frac{DL}{BD} \\implies BD = \\frac{1.2}{\\tan(30^\\circ)} = \\frac{1.2}{0.5774} \\approx 2.078\\text{m}$. The distance between Celine and Lia is $AD = AB + BD = 1.788 + 2.078 = 3.866\\text{m}$.",
    source: "EST2 -2020-M12-with calc Q10",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 350 150" width="350" height="150" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="120" x2="320" y2="120" stroke="black" stroke-width="2"/><line x1="50" y1="120" x2="50" y2="50" stroke="black" stroke-width="2"/><line x1="280" y1="120" x2="280" y2="70" stroke="black" stroke-width="2"/><line x1="50" y1="50" x2="200" y2="120" stroke="black" stroke-width="1.5" stroke-dasharray="4,4"/><line x1="280" y1="70" x2="200" y2="120" stroke="black" stroke-width="1.5" stroke-dasharray="4,4"/><circle cx="50" cy="40" r="10" fill="none" stroke="black" stroke-width="2"/><circle cx="280" cy="65" r="5" fill="none" stroke="black" stroke-width="2"/><text x="45" y="140" font-size="14">A</text><text x="195" y="140" font-size="14">B</text><text x="275" y="140" font-size="14">D</text><text x="35" y="45" font-size="14">C</text><text x="290" y="65" font-size="14">L</text><path d="M170,120 A30,30 0 0,1 185,113" fill="none" stroke="black"/><text x="150" y="115" font-size="12">40°</text><path d="M230,120 A30,30 0 0,0 215,113" fill="none" stroke="black"/><text x="235" y="115" font-size="12">30°</text></svg>`
  },
  {
    id: "est2_2020m12_q7",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Medium",
    question: "In the adjacent figure, $B$ is a point on the circle of center $A$ and diameter $DC$ such that $BC = 20$ and $BD = 15$. What is the perimeter of triangle $BDC$?",
    options: ["$17.5$", "$35$", "$60$", "$150$", "$60\\pi$"],
    correctAnswer: "$60$",
    explanation: "Since $DC$ is the diameter of the circle, angle $\\angle DBC$ inscribed in a semicircle is a right angle ($90^\\circ$). In the right-angled triangle $\\triangle BDC$, we can find the hypotenuse $DC$ using the Pythagorean theorem: $DC = \\sqrt{BC^2 + BD^2} = \\sqrt{20^2 + 15^2} = \\sqrt{400 + 225} = \\sqrt{625} = 25$. The perimeter of $\\triangle BDC = BC + BD + DC = 20 + 15 + 25 = 60$.",
    source: "EST2 -2020-M12-with calc Q7",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="none" stroke="black" stroke-width="2"/><line x1="36" y1="52" x2="164" y2="148" stroke="blue" stroke-width="2"/><line x1="36" y1="52" x2="175" y2="72" stroke="black" stroke-width="1.5"/><line x1="164" y1="148" x2="175" y2="72" stroke="black" stroke-width="1.5"/><circle cx="100" cy="100" r="3" fill="blue"/><circle cx="36" cy="52" r="3" fill="blue"/><circle cx="164" cy="148" r="3" fill="blue"/><circle cx="175" cy="72" r="3" fill="blue"/><text x="100" y="90" font-size="12">A</text><text x="25" y="45" font-size="12">C</text><text x="185" y="70" font-size="12">B</text><text x="175" y="155" font-size="12">D</text></svg>`
  },
  {
    id: "est2_2021m10_q43",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Hard",
    question: "Triangle $ABC$ is right at $C$. If $BC = x$, $AC = 2x$ where $x$ is a positive real number and angle $B\\hat{A}C = \\theta$, then $\\sin 2\\theta =$",
    options: ["$\\frac{1}{5}$", "$\\frac{2}{5}$", "$\\frac{3}{5}$", "$\\frac{4}{5}$", "$1$"],
    correctAnswer: "$\\frac{4}{5}$",
    explanation: "By the Pythagorean theorem, the hypotenuse $AB = \\sqrt{x^2 + (2x)^2} = \\sqrt{5x^2} = x\\sqrt{5}$. We have $\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{x}{x\\sqrt{5}} = \\frac{1}{\\sqrt{5}}$. Also, $\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{2x}{x\\sqrt{5}} = \\frac{2}{\\sqrt{5}}$. Using the double angle identity $\\sin 2\\theta = 2 \\sin \\theta \\cos \\theta = 2 \\left(\\frac{1}{\\sqrt{5}}\\right) \\left(\\frac{2}{\\sqrt{5}}\\right) = \\frac{4}{5}$.",
    source: "EST2 -2021-M10-Q43",
    category: "Pythagoras & sin law 2026",
    hasImage: false
  },
  {
    id: "est2_2021m5_q33",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Hard",
    question: "The length of $\\overline{AB}$ in the adjacent right triangle at $C$ such that $AD = DB$, $DC = BC = 1$ is",
    options: ["$\\sqrt{10}$", "$2\\sqrt{2}$", "$2\\sqrt{10}$", "$\\sqrt{4 + 2\\sqrt{2}}$", "$4 + 2\\sqrt{2}$"],
    correctAnswer: "$\\sqrt{4 + 2\\sqrt{2}}$",
    explanation: "In the right-angled $\\triangle DBC$, $DB = \\sqrt{DC^2 + BC^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$. Given $AD = DB$, $AD = \\sqrt{2}$. Since $D$ is on $AC$, $AC = AD + DC = \\sqrt{2} + 1$. In the right-angled $\\triangle ABC$, applying the Pythagorean theorem: $AB^2 = AC^2 + BC^2 = (\\sqrt{2} + 1)^2 + 1^2 = (2 + 2\\sqrt{2} + 1) + 1 = 4 + 2\\sqrt{2}$. Therefore, $AB = \\sqrt{4 + 2\\sqrt{2}}$.",
    source: "EST2 -2021-M5- Q33",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 250 150" width="250" height="150" xmlns="http://www.w3.org/2000/svg"><polygon points="50,100 200,100 200,30" fill="none" stroke="black" stroke-width="1.5"/><line x1="140" y1="100" x2="200" y2="30" stroke="black" stroke-width="1.5"/><rect x="190" y="90" width="10" height="10" fill="none" stroke="black"/><text x="40" y="110" font-size="12">A</text><text x="135" y="115" font-size="12">D</text><text x="205" y="110" font-size="12">C</text><text x="200" y="20" font-size="12">B</text></svg>`
  },
  {
    id: "est2_2021m5_q7",
    course: "EST 1",
    topic: "Geometry",
    difficulty: "Medium",
    question: "In the adjacent figure, $\\overline{RT}$ is a diameter of the semicircle. If $RS = 2$ and $ST = 3$, then the area of the semicircle is",
    options: ["$\\frac{13\\pi}{2}$", "$\\frac{13\\pi}{4}$", "$\\frac{6\\pi}{13}$", "$\\frac{13\\pi}{8}$", "$\\frac{8\\pi}{4}$"],
    correctAnswer: "$\\frac{13\\pi}{8}$",
    explanation: "Since $\\overline{RT}$ is a diameter, the inscribed angle $\\angle RST$ is a right angle ($90^\\circ$). Using the Pythagorean theorem in right $\\triangle RST$: $RT = \\sqrt{RS^2 + ST^2} = \\sqrt{2^2 + 3^2} = \\sqrt{4 + 9} = \\sqrt{13}$. The radius of the semicircle is $r = \\frac{\\sqrt{13}}{2}$. The area of the semicircle is $\\frac{1}{2} \\pi r^2 = \\frac{1}{2} \\pi \\left(\\frac{\\sqrt{13}}{2}\\right)^2 = \\frac{1}{2} \\pi \\left(\\frac{13}{4}\\right) = \\frac{13\\pi}{8}$.",
    source: "EST2 -2021-M5- Q7",
    category: "Pythagoras & sin law 2026",
    hasImage: true,
    imageSvg: `<svg viewBox="0 0 250 150" width="250" height="150" xmlns="http://www.w3.org/2000/svg"><path d="M50,120 A75,75 0 0,1 200,120 Z" fill="none" stroke="black" stroke-width="1.5"/><line x1="50" y1="120" x2="200" y2="120" stroke="black" stroke-width="1.5"/><line x1="50" y1="120" x2="110" y2="60" stroke="black" stroke-width="1.5"/><line x1="200" y1="120" x2="110" y2="60" stroke="black" stroke-width="1.5"/><circle cx="125" cy="120" r="3" fill="none" stroke="black" stroke-width="1.5"/><text x="40" y="130" font-size="12">R</text><text x="205" y="130" font-size="12">T</text><text x="120" y="135" font-size="12">O</text><text x="105" y="50" font-size="12">S</text></svg>`
  }
];

let fileContent = `export const est1_pythagoras_questions = [\n`;

questions.forEach((q) => {
  let imgStr = '""';
  if (q.hasImage && q.imageSvg) {
    const base64 = Buffer.from(q.imageSvg).toString('base64');
    imgStr = `"data:image/svg+xml;base64,${base64}"`;
  }

  const optionsStr = q.options.map(o => `"${escapeLatex(o)}"`).join(', ');

  fileContent += `  {
    id: "${q.id}",
    course: "${q.course}",
    topic: "${q.topic}",
    difficulty: "${q.difficulty}",
    question: "${escapeLatex(q.question)}",
    options: [${optionsStr}],
    correctAnswer: "${escapeLatex(q.correctAnswer)}",
    explanation: "${escapeLatex(q.explanation)}",
    source: "${q.source}",
    category: "${q.category}",
    image: ${imgStr}
  },\n`;
});

fileContent += `];\n`;

fs.writeFileSync('questions_est1_pythagoras.ts', fileContent);
console.log('Generated questions_est1_pythagoras.ts successfully.');
