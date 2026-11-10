import { Question } from '../../types';

export const EST1_PROBABILITY_PART1: Question[] = [
  {
    id: 1,
    question: "A bag contains $3$ green balls, $5$ red balls, $8$ blue balls, and $4$ yellow balls. What is the value of the square of the probability of choosing a yellow or a red ball from the bag?",
    options: ["$0.2025$", "$0.45$", "$0.671$", "$0.9$"],
    correctAnswer: 0,
    explanation: "Total balls = $3 + 5 + 8 + 4 = 20$. Number of yellow or red balls = $4 + 5 = 9$. Probability $P = \\frac{9}{20} = 0.45$. The square of the probability is $(0.45)^2 = 0.2025$.",
    category: "Probability Part1"
  },
  {
    id: 2,
    question: "In a farm, there are $30$ rabbits of two sizes \"small and big\" and three colors \"white, brown, and gray\" as shown in the table below.<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Size \\ Color</th><th class=\"border border-gray-400 px-2 py-1\">White</th><th class=\"border border-gray-400 px-2 py-1\">Brown</th><th class=\"border border-gray-400 px-2 py-1\">Gray</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">Small</td><td class=\"border border-gray-400 px-2 py-1\">4</td><td class=\"border border-gray-400 px-2 py-1\">4</td><td class=\"border border-gray-400 px-2 py-1\">6</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Big</td><td class=\"border border-gray-400 px-2 py-1\">10</td><td class=\"border border-gray-400 px-2 py-1\">2</td><td class=\"border border-gray-400 px-2 py-1\">4</td></tr></tbody></table><br>One rabbit is selected at random from this farm. What is the probability that the selected rabbit is white?",
    options: ["$\\frac{4}{14}$", "$\\frac{7}{15}$", "$1$", "$\\frac{10}{30}$"],
    correctAnswer: 1,
    explanation: "Total number of white rabbits = $4 \\text{ (Small)} + 10 \\text{ (Big)} = 14$. Total number of rabbits = $30$. Probability = $\\frac{14}{30} = \\frac{7}{15}$.",
    category: "Probability Part1"
  },
  {
    id: 3,
    question: "In a bag, there are $12$ identical tokens numbered from $1$ to $12$. A token is drawn at random. What is the probability to obtain an even multiple of $3$?",
    options: ["$\\frac{1}{4}$", "$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{1}{6}$"],
    correctAnswer: 3,
    explanation: "Multiples of $3$ from $1$ to $12$ are: $3, 6, 9, 12$. The even multiples of $3$ are: $6, 12$. Total favorable outcomes = $2$. Total possible outcomes = $12$. Probability = $\\frac{2}{12} = \\frac{1}{6}$.",
    category: "Probability Part1"
  },
  {
    id: 4,
    question: "In a school, there are $80$ students distributed into three classes according to the following table:<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\"></th><th class=\"border border-gray-400 px-2 py-1\">First Secondary</th><th class=\"border border-gray-400 px-2 py-1\">Second Secondary</th><th class=\"border border-gray-400 px-2 py-1\">Third Secondary</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">Females</td><td class=\"border border-gray-400 px-2 py-1\">18</td><td class=\"border border-gray-400 px-2 py-1\">17</td><td class=\"border border-gray-400 px-2 py-1\">5</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Males</td><td class=\"border border-gray-400 px-2 py-1\">12</td><td class=\"border border-gray-400 px-2 py-1\">18</td><td class=\"border border-gray-400 px-2 py-1\">10</td></tr></tbody></table><br>One student is selected at random from this school. What is the probability that the selected student is from the second secondary?",
    options: ["$\\frac{17}{35}$", "$\\frac{7}{16}$", "$\\frac{30}{80}$", "$\\frac{18}{35}$"],
    correctAnswer: 1,
    explanation: "Total students in the second secondary = $17 \\text{ (Females)} + 18 \\text{ (Males)} = 35$. Total students = $80$. Probability = $\\frac{35}{80} = \\frac{7}{16}$.",
    category: "Probability Part1"
  },
  {
    id: 5,
    question: "Amina has a bag of $6$ black balls and $4$ green balls. Hamad has a bag of $3$ black balls and $5$ green balls. If one ball is drawn from each bag, what is the probability that one is black and one is green?",
    options: ["$0.225$", "$0.25$", "$0.475$", "$0.525$"],
    correctAnswer: 3,
    explanation: "Amina's bag: $P(\\text{Black}) = \\frac{6}{10}$, $P(\\text{Green}) = \\frac{4}{10}$. Hamad's bag: $P(\\text{Black}) = \\frac{3}{8}$, $P(\\text{Green}) = \\frac{5}{8}$. The probability of one black and one green means either (Amina gets Black AND Hamad gets Green) OR (Amina gets Green AND Hamad gets Black). $P = \\left(\\frac{6}{10} \\times \\frac{5}{8}\\right) + \\left(\\frac{4}{10} \\times \\frac{3}{8}\\right) = \\frac{30}{80} + \\frac{12}{80} = \\frac{42}{80} = \\frac{21}{40} = 0.525$.",
    category: "Probability Part1"
  },
  {
    id: 6,
    question: "A survey is done in an enterprise having $20\\%$ administrators and $80\\%$ employees. We know that $5\\%$ of the administrators and $20\\%$ of the employees speak Spanish. A person is chosen randomly from the enterprise, what is the probability that he/she speaks Spanish?",
    options: ["$0.26$", "$0.17$", "$0.25$", "$0.08$", "$0.48$"],
    correctAnswer: 1,
    explanation: "Probability of selecting an administrator who speaks Spanish = $0.20 \\times 0.05 = 0.01$. Probability of selecting an employee who speaks Spanish = $0.80 \\times 0.20 = 0.16$. Total probability = $0.01 + 0.16 = 0.17$.",
    category: "Probability Part1"
  },
  {
    id: 7,
    question: "A school asks each of its $1550$ students whether they use a smartphone, a laptop, or a tablet during online learning. The table below summarizes the results. If a student is selected at random, what is the probability that he or she doesn't use a tablet knowing that he or she is not in the secondary section? (Round your answer to the nearest tenth).<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\"></th><th class=\"border border-gray-400 px-2 py-1\">Smart phones</th><th class=\"border border-gray-400 px-2 py-1\">Laptops</th><th class=\"border border-gray-400 px-2 py-1\">Tablets</th><th class=\"border border-gray-400 px-2 py-1\">Total</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">Elementary</td><td class=\"border border-gray-400 px-2 py-1\">150</td><td class=\"border border-gray-400 px-2 py-1\">230</td><td class=\"border border-gray-400 px-2 py-1\">120</td><td class=\"border border-gray-400 px-2 py-1\">500</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Intermediate</td><td class=\"border border-gray-400 px-2 py-1\">250</td><td class=\"border border-gray-400 px-2 py-1\">100</td><td class=\"border border-gray-400 px-2 py-1\">80</td><td class=\"border border-gray-400 px-2 py-1\">430</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Secondary</td><td class=\"border border-gray-400 px-2 py-1\">300</td><td class=\"border border-gray-400 px-2 py-1\">220</td><td class=\"border border-gray-400 px-2 py-1\">100</td><td class=\"border border-gray-400 px-2 py-1\">620</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Total</td><td class=\"border border-gray-400 px-2 py-1\">700</td><td class=\"border border-gray-400 px-2 py-1\">550</td><td class=\"border border-gray-400 px-2 py-1\">300</td><td class=\"border border-gray-400 px-2 py-1\">1550</td></tr></tbody></table>",
    options: ["$1.8$", "$0.8$", "$0.3$", "$1.4$"],
    correctAnswer: 1,
    explanation: "Total students NOT in secondary = $500 \\text{ (Elementary)} + 430 \\text{ (Intermediate)} = 930$. Students NOT in secondary who use tablets = $120 \\text{ (Elementary)} + 80 \\text{ (Intermediate)} = 200$. Students NOT in secondary who DON'T use tablets = $930 - 200 = 730$. Probability = $\\frac{730}{930} \\approx 0.784$. Rounded to the nearest tenth, this is $0.8$.",
    category: "Probability Part1"
  },
  {
    id: 8,
    question: "In a farm, there are $30$ rabbits of two sizes \"small and big\" and three colors \"white, brown, and gray\" as shown in the table below.<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Size \\ Color</th><th class=\"border border-gray-400 px-2 py-1\">White</th><th class=\"border border-gray-400 px-2 py-1\">Brown</th><th class=\"border border-gray-400 px-2 py-1\">Gray</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">Small</td><td class=\"border border-gray-400 px-2 py-1\">4</td><td class=\"border border-gray-400 px-2 py-1\">4</td><td class=\"border border-gray-400 px-2 py-1\">6</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Big</td><td class=\"border border-gray-400 px-2 py-1\">10</td><td class=\"border border-gray-400 px-2 py-1\">2</td><td class=\"border border-gray-400 px-2 py-1\">4</td></tr></tbody></table><br>Suppose that the selected rabbit is not of white color, what is the probability for this rabbit to be from the big size?",
    options: ["$\\frac{3}{5}$", "$\\frac{3}{7}$", "$\\frac{3}{8}$", "$\\frac{16}{30}$"],
    correctAnswer: 2,
    explanation: "Total rabbits that are NOT white = $4+6 \\text{ (Small brown and gray)} + 2+4 \\text{ (Big brown and gray)} = 16$. Number of these that are Big = $2 \\text{ (Brown)} + 4 \\text{ (Gray)} = 6$. Probability = $\\frac{6}{16} = \\frac{3}{8}$.",
    category: "Probability Part1"
  },
  {
    id: 9,
    question: "The table below shows the distribution of age and sports activity for $540$ employees of a company.<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\"></th><th class=\"border border-gray-400 px-2 py-1\">Practice any kind of sports</th><th class=\"border border-gray-400 px-2 py-1\">No sports activity</th><th class=\"border border-gray-400 px-2 py-1\">Total</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">Under 40</td><td class=\"border border-gray-400 px-2 py-1\">220</td><td class=\"border border-gray-400 px-2 py-1\">40</td><td class=\"border border-gray-400 px-2 py-1\">260</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">40 and older</td><td class=\"border border-gray-400 px-2 py-1\">100</td><td class=\"border border-gray-400 px-2 py-1\">180</td><td class=\"border border-gray-400 px-2 py-1\">280</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Total</td><td class=\"border border-gray-400 px-2 py-1\">320</td><td class=\"border border-gray-400 px-2 py-1\">220</td><td class=\"border border-gray-400 px-2 py-1\">540</td></tr></tbody></table><br>If an employee aged under $40$ is selected at random, what is the probability that he practices any kind of sports?",
    options: ["$\\frac{2}{13}$", "$\\frac{11}{27}$", "$\\frac{16}{11}$", "$\\frac{11}{13}$"],
    correctAnswer: 3,
    explanation: "Total employees under 40 = $260$. Employees under 40 who practice sports = $220$. Probability = $\\frac{220}{260} = \\frac{22}{26} = \\frac{11}{13}$.",
    category: "Probability Part1"
  },
  {
    id: 10,
    question: "The table below summarizes students' work placement after graduation, based on the major.<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\"></th><th class=\"border border-gray-400 px-2 py-1\">Work in their field of study</th><th class=\"border border-gray-400 px-2 py-1\">Work in another field</th><th class=\"border border-gray-400 px-2 py-1\">Don't work</th><th class=\"border border-gray-400 px-2 py-1\">Total</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">Engineering</td><td class=\"border border-gray-400 px-2 py-1\">17,065</td><td class=\"border border-gray-400 px-2 py-1\">10,593</td><td class=\"border border-gray-400 px-2 py-1\">3,867</td><td class=\"border border-gray-400 px-2 py-1\">31,525</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Business</td><td class=\"border border-gray-400 px-2 py-1\">18,547</td><td class=\"border border-gray-400 px-2 py-1\">11,753</td><td class=\"border border-gray-400 px-2 py-1\">3,243</td><td class=\"border border-gray-400 px-2 py-1\">33,543</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Law</td><td class=\"border border-gray-400 px-2 py-1\">20,372</td><td class=\"border border-gray-400 px-2 py-1\">1,438</td><td class=\"border border-gray-400 px-2 py-1\">542</td><td class=\"border border-gray-400 px-2 py-1\">22,352</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Total</td><td class=\"border border-gray-400 px-2 py-1\">55,984</td><td class=\"border border-gray-400 px-2 py-1\">23,784</td><td class=\"border border-gray-400 px-2 py-1\">7,652</td><td class=\"border border-gray-400 px-2 py-1\">87,420</td></tr></tbody></table><br>Given a person who works outside his field of study, which of the following is closest to the probability that he majored in business?",
    options: ["$0.35$", "$0.06$", "$0.5$", "$0.13$"],
    correctAnswer: 2,
    explanation: "Working outside field of study means \"Work in another field\". Total in this category = $23,784$. The number of these who majored in business = $11,753$. Probability = $\\frac{11,753}{23,784} \\approx 0.494$, which is closest to $0.5$.",
    category: "Probability Part1"
  },
  {
    id: 11,
    question: "Amina has a bag of $6$ black balls and $4$ green balls. Hamad has a bag of $3$ black balls and $5$ green balls. If one ball is drawn from each bag, what is the probability that one is black and one is green?",
    options: ["$0.225$", "$0.25$", "$0.475$", "$0.525$"],
    correctAnswer: 3,
    explanation: "Amina's bag: $P(\\text{Black}) = \\frac{6}{10}$, $P(\\text{Green}) = \\frac{4}{10}$. Hamad's bag: $P(\\text{Black}) = \\frac{3}{8}$, $P(\\text{Green}) = \\frac{5}{8}$. The probability of one black and one green means either (Amina gets Black AND Hamad gets Green) OR (Amina gets Green AND Hamad gets Black). $P = \\left(\\frac{6}{10} \\times \\frac{5}{8}\\right) + \\left(\\frac{4}{10} \\times \\frac{3}{8}\\right) = \\frac{30}{80} + \\frac{12}{80} = \\frac{42}{80} = \\frac{21}{40} = 0.525$.",
    category: "Probability Part1"
  },
  {
    id: 12,
    question: "Suppose that the $8$ identical faces of a regular octahedron are numbered from $11$ through $18$, with $1$ number per face, and each face is equally likely to land down when the octahedron is tossed. What is the probability that, on $1$ toss of this octahedron, the number on the face landing down is a prime number or an even number?",
    options: ["$0$", "$\\frac{1}{8}$", "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{7}{8}$"],
    correctAnswer: 4,
    explanation: "The numbers are $11, 12, 13, 14, 15, 16, 17, 18$. The prime numbers are $11, 13, 17$. The even numbers are $12, 14, 16, 18$. These sets are mutually exclusive (there is no even prime greater than 2). The total number of outcomes that are either prime or even is $3 + 4 = 7$. The probability is $\\frac{7}{8}$.",
    category: "Probability Part1"
  },
  {
    id: 13,
    question: "Three friends are picking apples. Bill picks $5$ red and $3$ green apples; Ming picks $8$ red and $2$ green apples; Randi picks $2$ red and $4$ green apples. They combine their apples into an empty basket. Ming will randomly select $1$ apple from the basket. What is the probability she will select a green apple?",
    options: ["$\\frac{1}{5}$", "$\\frac{3}{8}$", "$\\frac{1}{2}$", "$\\frac{3}{5}$", "$\\frac{5}{8}$"],
    correctAnswer: 1,
    explanation: "Total red apples = $5 + 8 + 2 = 15$. Total green apples = $3 + 2 + 4 = 9$. Total apples = $15 + 9 = 24$. Probability of selecting a green apple = $\\frac{9}{24} = \\frac{3}{8}$.",
    category: "Probability Part1"
  },
  {
    id: 14,
    question: "A bag contains exactly $7$ marbles, each with $1$ number on it: $4$ red marbles numbered $1$, $2$, $3$, and $4$; and $3$ black marbles numbered $1$, $2$, and $3$. One marble will be selected at random from the bag. What is the probability that the marble selected will be an odd-numbered red marble?",
    options: ["$\\frac{1}{2}$", "$\\frac{2}{7}$", "$\\frac{7}{12}$", "$\\frac{8}{49}$", "$\\frac{16}{49}$"],
    correctAnswer: 1,
    explanation: "The odd-numbered red marbles are Red-1 and Red-3. There are $2$ such marbles. The total number of marbles is $7$. The probability is $\\frac{2}{7}$.",
    category: "Probability Part1"
  },
  {
    id: 15,
    question: "A jar of solid-colored marbles contains some yellow marbles, $21$ blue marbles, $40$ red marbles, and $14$ green marbles. The probability of randomly drawing a green marble is $\\frac{2}{15}$. How many yellow marbles are in the jar?",
    options: ["$10$", "$12$", "$25$", "$30$", "$68$"],
    correctAnswer: 3,
    explanation: "Let $x$ be the number of yellow marbles. The total number of marbles is $x + 21 + 40 + 14 = x + 75$. The probability of drawing a green marble is $\\frac{14}{x + 75}$. We are given this is equal to $\\frac{2}{15}$. So, $\\frac{14}{x + 75} = \\frac{2}{15}$. Cross-multiplying gives $2(x + 75) = 14 \\times 15$, which means $2x + 150 = 210$. Then $2x = 60$, so $x = 30$. There are $30$ yellow marbles.",
    category: "Probability Part1"
  },
  {
    id: 16,
    question: "The graph below shows the number of students who were present on Thursday from each of the 5 groups in Ms. Meagan's class. What is the probability that a student selected at random from the class on Thursday is in Group 4?<br><br><b>Graph Data:</b><br>Group 1: 8 students<br>Group 2: 12 students<br>Group 3: 6 students<br>Group 4: 2 students<br>Group 5: 0 students",
    options: ["$\\frac{1}{28}$", "$\\frac{1}{14}$", "$\\frac{1}{5}$", "$\\frac{1}{4}$", "$\\frac{1}{2}$"],
    correctAnswer: 1,
    explanation: "Total students present = $8 + 12 + 6 + 2 + 0 = 28$. The number of students in Group 4 is $2$. The probability is $\\frac{2}{28} = \\frac{1}{14}$.",
    category: "Probability Part1"
  },
  {
    id: 17,
    question: "A survey of $120$ college students recorded their major and preferred study location as shown in the table below.<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Major \\ Location</th><th class=\"border border-gray-400 px-2 py-1\">Library</th><th class=\"border border-gray-400 px-2 py-1\">Coffee Shop</th><th class=\"border border-gray-400 px-2 py-1\">Total</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">STEM</td><td class=\"border border-gray-400 px-2 py-1\">45</td><td class=\"border border-gray-400 px-2 py-1\">25</td><td class=\"border border-gray-400 px-2 py-1\">70</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Humanities</td><td class=\"border border-gray-400 px-2 py-1\">20</td><td class=\"border border-gray-400 px-2 py-1\">30</td><td class=\"border border-gray-400 px-2 py-1\">50</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Total</td><td class=\"border border-gray-400 px-2 py-1\">65</td><td class=\"border border-gray-400 px-2 py-1\">55</td><td class=\"border border-gray-400 px-2 py-1\">120</td></tr></tbody></table><br>If a student who prefers studying in a Coffee Shop is selected at random, what is the probability that the student is a STEM major?",
    options: ["$\\frac{5}{11}$", "$\\frac{25}{70}$", "$\\frac{5}{24}$", "$\\frac{5}{12}$"],
    correctAnswer: 0,
    explanation: "Given that the selected student prefers studying in a Coffee Shop, we restrict the sample space to the total number of students who prefer Coffee Shops ($25 + 30 = 55$). Out of these $55$ students, $25$ are STEM majors. Therefore, the conditional probability is $\\frac{25}{55} = \\frac{5}{11}$.",
    category: "Probability Part1"
  },
  {
    id: 18,
    question: "A box contains $15$ cards numbered from $1$ to $15$. Two cards are drawn at random one after another without replacement. What is the probability that both selected cards show prime numbers?",
    options: ["$\\frac{4}{25}$", "$\\frac{1}{7}$", "$\\frac{2}{15}$", "$\\frac{6}{35}$"],
    correctAnswer: 1,
    explanation: "The prime numbers between $1$ and $15$ are $2, 3, 5, 7, 11,$ and $13$ (a total of $6$ prime numbers). On the first draw, the probability of choosing a prime number is $\\frac{6}{15}$. Without replacement, there are $5$ prime numbers remaining out of $14$ total cards. The probability of choosing a second prime card is $\\frac{5}{14}$. Thus, $P = \\frac{6}{15} \\times \\frac{5}{14} = \\frac{30}{210} = \\frac{1}{7}$.",
    category: "Probability Part1"
  },
  {
    id: 19,
    question: "A spinner is divided into $12$ equal sectors numbered $1$ through $12$. What is the probability that a single spin lands on a number that is a multiple of $4$ or a number greater than $8$?",
    options: ["$\\frac{1}{3}$", "$\\frac{5}{12}$", "$\\frac{1}{2}$", "$\\frac{7}{12}$"],
    correctAnswer: 2,
    explanation: "The possible outcomes are $\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12\}$. Multiples of $4$ are $\{4, 8, 12\}$. Numbers greater than $8$ are $\{9, 10, 11, 12\}$. Combining these sets (without repeating $12$), the favorable outcomes are $\{4, 8, 9, 10, 11, 12\}$, which consists of $6$ outcomes. The probability is $\\frac{6}{12} = \\frac{1}{2}$.",
    category: "Probability Part1"
  },
  {
    id: 20,
    question: "The probability that a student passes an algebra test is $0.85$, and the probability that the student passes a physics test is $0.70$. Assuming the two events are independent, what is the probability that the student fails at least one of the two tests?",
    options: ["$0.15$", "$0.405$", "$0.595$", "$0.895$"],
    correctAnswer: 1,
    explanation: "Since passing algebra and passing physics are independent events, the probability that the student passes both tests is $P(\\text{Both}) = 0.85 \\times 0.70 = 0.595$. The event 'failing at least one test' is the complement of 'passing both tests'. Therefore, $P(\\text{Fails at least one}) = 1 - P(\\text{Passes both}) = 1 - 0.595 = 0.405$.",
    category: "Probability Part1"
  },
  {
    id: 21,
    question: "A jar contains $18$ red counters and $12$ blue counters. How many blue counters must be added to the jar so that the probability of randomly choosing a red counter from the jar becomes $0.4$?",
    options: ["$10$", "$12$", "$15$", "$18$"],
    correctAnswer: 2,
    explanation: "Let $x$ be the number of blue counters added to the jar. The number of red counters remains $18$, and the total number of counters becomes $30 + x$. We want the probability of drawing a red counter to be $0.4 = \\frac{2}{5}$. Setting up the equation: $\\frac{18}{30 + x} = \\frac{2}{5} \\implies 2(30 + x) = 90 \\implies 60 + 2x = 90 \\implies 2x = 30 \\implies x = 15$. So $15$ blue counters must be added.",
    category: "Probability Part1"
  },
  {
    id: 22,
    question: "A square target has a side length of $10\\text{ cm}$. Inside the square, a circle with a radius of $3\\text{ cm}$ is drawn. A dart is thrown randomly at the square target and lands inside it. What is the probability that the dart lands inside the square but outside the circle?",
    options: ["$\\frac{9\\pi}{100}$", "$1 - \\frac{9\\pi}{100}$", "$\\frac{3\\pi}{10}$", "$1 - \\frac{3\\pi}{10}$"],
    correctAnswer: 1,
    explanation: "The area of the entire square target is $\\text{Side}^2 = 10^2 = 100\\text{ cm}^2$. The area of the circle inside the square is $\\pi r^2 = \\pi (3)^2 = 9\\pi\\text{ cm}^2$. The area inside the square but outside the circle is $100 - 9\\pi\\text{ cm}^2$. The probability that the dart lands in this region is $\\frac{100 - 9\\pi}{100} = 1 - \\frac{9\\pi}{100}$.",
    category: "Probability Part1"
  },
  {
    id: 23,
    question: "A group of $200$ visitors at an art exhibit was surveyed regarding their age group and whether they purchased a souvenir as shown in the table below.<br><table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Age Group \\ Souvenir</th><th class=\"border border-gray-400 px-2 py-1\">Purchased</th><th class=\"border border-gray-400 px-2 py-1\">Did Not Purchase</th><th class=\"border border-gray-400 px-2 py-1\">Total</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1\">Under 30</td><td class=\"border border-gray-400 px-2 py-1\">36</td><td class=\"border border-gray-400 px-2 py-1\">44</td><td class=\"border border-gray-400 px-2 py-1\">80</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">30 and older</td><td class=\"border border-gray-400 px-2 py-1\">84</td><td class=\"border border-gray-400 px-2 py-1\">36</td><td class=\"border border-gray-400 px-2 py-1\">120</td></tr><tr><td class=\"border border-gray-400 px-2 py-1\">Total</td><td class=\"border border-gray-400 px-2 py-1\">120</td><td class=\"border border-gray-400 px-2 py-1\">80</td><td class=\"border border-gray-400 px-2 py-1\">200</td></tr></tbody></table><br>What is the probability that a randomly chosen visitor who purchased a souvenir is under $30$ years old?",
    options: ["$0.18$", "$0.30$", "$0.45$", "$0.60$"],
    correctAnswer: 1,
    explanation: "We are given that the selected visitor purchased a souvenir, so we only consider the column of visitors who purchased souvenirs, which totals $120$. Out of these $120$ visitors, $36$ are under $30$ years old. Therefore, the conditional probability is $\\frac{36}{120} = \\frac{3}{10} = 0.30$.",
    category: "Probability Part1"
  },
  {
    id: 24,
    question: "Two standard six-sided dice are rolled simultaneously. What is the probability that the sum of the numbers showing on the two dice is a prime number?",
    options: ["$\\frac{5}{12}$", "$\\frac{1}{2}$", "$\\frac{7}{18}$", "$\\frac{4}{9}$"],
    correctAnswer: 0,
    explanation: "When two six-sided dice are rolled, there are $36$ possible outcomes. The possible prime sums are $2, 3, 5, 7,$ and $11$. The pairs producing these sums are:\n- Sum of $2$: $(1,1)$ [1 outcome]\n- Sum of $3$: $(1,2), (2,1)$ [2 outcomes]\n- Sum of $5$: $(1,4), (2,3), (3,2), (4,1)$ [4 outcomes]\n- Sum of $7$: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ [6 outcomes]\n- Sum of $11$: $(5,6), (6,5)$ [2 outcomes]\nTotal favorable outcomes = $1 + 2 + 4 + 6 + 2 = 15$. So $P = \\frac{15}{36} = \\frac{5}{12}$.",
    category: "Probability Part1"
  },
  {
    id: 25,
    question: "A game spinner has four colored regions: Red, Blue, Yellow, and Green. The probability of landing on Red is $\\frac{1}{3}$, Blue is $\\frac{1}{4}$, and Yellow is $\\frac{1}{6}$. What is the probability of landing on Green?",
    options: ["$\\frac{1}{12}$", "$\\frac{1}{6}$", "$\\frac{1}{4}$", "$\\frac{1}{3}$"],
    correctAnswer: 2,
    explanation: "The sum of the probabilities of all mutually exclusive outcomes on the spinner must equal $1$. We add the given probabilities: $\\frac{1}{3} + \\frac{1}{4} + \\frac{1}{6} = \\frac{4}{12} + \\frac{3}{12} + \\frac{2}{12} = \\frac{9}{12} = \\frac{3}{4}$. The probability of landing on Green is $1 - \\frac{3}{4} = \\frac{1}{4}$.",
    category: "Probability Part1"
  },
  {
    id: 26,
    question: "A committee of $2$ students is to be chosen at random from a group of $4$ boys and $6$ girls. What is the probability that both chosen students are girls?",
    options: ["$\\frac{1}{3}$", "$\\frac{2}{5}$", "$\\frac{1}{2}$", "$\\frac{3}{5}$"],
    correctAnswer: 0,
    explanation: "The total number of students is $4 + 6 = 10$. The probability that the first student selected is a girl is $\\frac{6}{10}$. Without replacement, there are $5$ girls remaining out of $9$ total students, so the probability that the second student selected is also a girl is $\\frac{5}{9}$. The probability that both students chosen are girls is $\\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}$.",
    category: "Probability Part1"
  }
];
