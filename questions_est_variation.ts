import { Question } from "./types";

export const EST_VARIATION_SET: Question[] = [
  {
    id: "est_var_1",
    question: "In Egypt, a tourist can travel a distance of $5\\text{ km}$ with just $15.57\\text{ EGP}$. Pedro needed to go to \"San Pola\" hospital in Cairo. He took a taxi from \"Al Marazeek\" bridge, which is approximately $35\\text{ Km}$ away from the hospital. How much will Pedro pay for the driver, knowing that he gave him $10\\text{ extra EGP}$ as tips?",
    options: ["554.95 EGP", "477.1 EGP", "118.99 EGP", "109.09 EGP"],
    correctAnswer: 2,
    explanation: "This is a direct variation problem. The cost for the distance is proportional to the distance traveled. Cost for 35 km = $(35 / 5) \\times 15.57 = 7 \\times 15.57 = 108.99\\text{ EGP}$. The total amount Pedro pays includes the $10\\text{ EGP}$ tip, so Total = $108.99 + 10 = 118.99\\text{ EGP}$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Direct Variation", "Rates"]
  },
  {
    id: "est_var_2",
    question: "The selling price of an apartment is directly proportional its area. If an apartment of $127\\text{ sqm}$ is sold for $\\$168,275$, what would be the price of a $156\\text{ sqm}$ apartment?",
    options: ["237,900$", "208,500$", "136,993$", "206,700$"],
    correctAnswer: 3,
    explanation: "Let $P$ be the price and $A$ be the area. Since they are directly proportional, $P = kA$. We can find $k = 168275 / 127 = 1325$. For an area of $156\\text{ sqm}$, the price is $P = 1325 \\times 156 = \\$206,700$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Direct Variation"]
  },
  {
    id: "est_var_3",
    question: "A certain job can be done in 20 hours by 4 people. How many people are needed to do the same job in 10 hours?",
    options: ["2", "4", "8", "10"],
    correctAnswer: 2,
    explanation: "This is an inverse variation problem. The number of people ($W$) is inversely proportional to the time ($T$) it takes to complete the job. So, $W_1 \\times T_1 = W_2 \\times T_2$. We have $4 \\times 20 = x \\times 10 \\Rightarrow 80 = 10x \\Rightarrow x = 8$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Inverse Variation", "Work Rates"]
  },
  {
    id: "est_var_4",
    question: "A painter paints walls at an average rate of 1.2 walls per hour. He is asked to paint a villa containing 18 rooms each containing 5.4 walls on average. How long will he be actively painting the villa?",
    options: ["2 days, 18 hours", "3 days", "3 days, 9 hours", "3 days, 18 hours"],
    correctAnswer: 2,
    explanation: "First, find the total number of walls: $18 \\text{ rooms} \\times 5.4 \\text{ walls/room} = 97.2 \\text{ walls}$. The time required is $97.2 \\text{ walls} / 1.2 \\text{ walls/hour} = 81 \\text{ hours}$. Since there are 24 hours in a day, $81 \\text{ hours} = 72 \\text{ hours} + 9 \\text{ hours} = 3 \\text{ days and } 9 \\text{ hours}$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Rates"]
  },
  {
    id: "est_var_5",
    question: "Karim drove his car from his village to the city. It took him 2.5 hours to reach the city driving at a constant speed of $60\\text{ km}$ per hour. Approximately, how much will he save time if he starts driving at a constant speed of $70\\text{ km}$ per hour?",
    options: ["0.357 hours", "0.765 hours", "1.544 hours", "2.143 hours"],
    correctAnswer: 0,
    explanation: "First, find the distance to the city: $\\text{Distance} = \\text{Speed} \\times \\text{Time} = 60 \\times 2.5 = 150\\text{ km}$. The new time at $70\\text{ km/h}$ is $150 / 70 = 15/7 \\approx 2.143\\text{ hours}$. The time saved is $2.5 - 2.143 = 0.357\\text{ hours}$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Rates", "Speed, Distance, Time"]
  },
  {
    id: "est_var_6",
    question: "Ohm's law states that the current through a conductor between two points is directly proportional to the voltage across the two points. Introducing the constant of proportionality, the resistance, one arrives at the usual mathematical equation that describes this relationship:\n$I = \\frac{U}{R}$\nWhich of the following statements is true regarding the given formula?\nI. If R increases, the current I will increase.\nII. If U increases, the current I will increase.\nIII. If R increases, the current I will decrease.",
    options: ["I only", "II only", "I and II", "II and III"],
    correctAnswer: 3,
    explanation: "From the equation $I = U/R$, $I$ is directly proportional to $U$ (so if $U$ increases, $I$ increases, making II true) and inversely proportional to $R$ (so if $R$ increases, $I$ decreases, making III true). Therefore, statements II and III are true.",
    category: "Algebra",
    topics: ["Direct Variation", "Inverse Variation", "Formula Manipulation"]
  },
  {
    id: "est_var_7",
    question: "A secretary types on her computer keyboard at an average speed of 1.75 words per second. Her manager asked her to type a document containing 16 pages with an average of 525 words per page. How long will she be actively typing this document?",
    options: ["1 hour, 10 minutes", "1 hour, 20 minutes", "2 hours, 5 minutes", "4 hours, 5 minutes"],
    correctAnswer: 1,
    explanation: "Total number of words = $16 \\text{ pages} \\times 525 \\text{ words/page} = 8400 \\text{ words}$. Time in seconds = $8400 / 1.75 = 4800 \\text{ seconds}$. Convert to minutes: $4800 / 60 = 80 \\text{ minutes}$. This is equal to $1 \\text{ hour and } 20 \\text{ minutes}$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Rates"]
  },
  {
    id: "est_var_8",
    question: "Harvey wants to buy a new apartment. He estimates that he will need its area to be around 1400 square feet. But, the provider measures its units in square meters. If 1 meter is nearly 3.28 feet, how many square meters approximately will Harvey need?",
    options: ["427", "130", "4592", "15062"],
    correctAnswer: 1,
    explanation: "Since $1\\text{ m} = 3.28\\text{ ft}$, squaring both sides gives $1\\text{ m}^2 = (3.28)^2\\text{ ft}^2 \\approx 10.7584\\text{ ft}^2$. To convert 1400 square feet to square meters, divide by 10.7584: $1400 / 10.7584 \\approx 130.13\\text{ m}^2$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Unit Conversion"]
  },
  {
    id: "est_var_9",
    question: "If y varies directly as the square of 3x and y=16 when x=4, what is y when x is equal to 6?",
    options: ["30", "32", "34", "36"],
    correctAnswer: 3,
    explanation: "The relationship is $y = k(3x)^2 = k(9x^2)$. Substitute the given values: $16 = k(9 \\times 4^2) = k(144) \\Rightarrow k = 16 / 144 = 1/9$. Now, find $y$ when $x = 6$: $y = (1/9) \\times 9 \\times 6^2 = 36$.",
    category: "Algebra",
    topics: ["Direct Variation"]
  },
  {
    id: "est_var_10",
    question: "If y varies directly as the cube of 2x, and y = 8 when x = 2, what is y when x is equal to 4?",
    options: ["50", "54", "60", "64"],
    correctAnswer: 3,
    explanation: "The relationship is $y = k(2x)^3 = 8kx^3$. Substitute the given values: $8 = 8k(2)^3 = 64k \\Rightarrow k = 8 / 64 = 1/8$. Now, find $y$ when $x = 4$: $y = 8(1/8)(4)^3 = 64$.",
    category: "Algebra",
    topics: ["Direct Variation"]
  },
  {
    id: "est_var_11",
    question: "If h varies inversely as k, and h = 9 when k = 20, what is the value of k + 4 when h = 15?",
    options: ["14", "16", "18", "20"],
    correctAnswer: 1,
    explanation: "The relationship is $h = c / k$, or $h \\times k = c$. We have $c = 9 \\times 20 = 180$. When $h = 15$, $15 \\times k = 180 \\Rightarrow k = 180 / 15 = 12$. The question asks for $k + 4$, which is $12 + 4 = 16$.",
    category: "Algebra",
    topics: ["Inverse Variation"]
  },
  {
    id: "est_var_12",
    question: "The concentration of solution in sugar is directly proportional to the mass of sugar dissolved in the solution. If the concentration of a solution is $1.5\\text{mol/L}$ when $54\\text{g}$ are dissolved, how many grams are dissolved if the concentration is $2.1\\text{mol/L}$?",
    options: ["60", "75.6", "78", "82"],
    correctAnswer: 1,
    explanation: "Let $C$ be concentration and $m$ be mass. $C = k \\times m \\Rightarrow 1.5 = k \\times 54 \\Rightarrow k = 1.5 / 54 = 1/36$. When $C = 2.1$, $2.1 = (1/36) \\times m \\Rightarrow m = 2.1 \\times 36 = 75.6\\text{g}$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Direct Variation"]
  },
  {
    id: "est_var_13",
    question: "Bob is paid an hourly rate. One week he earned 165 $ by working 30 hours. If he works 40 hours the next week, how much will he earn?",
    options: ["180", "220", "330", "140"],
    correctAnswer: 1,
    explanation: "Bob's hourly rate is $165 / 30 = \\$5.50\\text{ per hour}$. For 40 hours of work, he will earn $40 \\times 5.50 = \\$220$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Rates", "Direct Variation"]
  },
  {
    id: "est_var_14",
    question: "The formula for speed is $\\text{speed} = \\text{distance} \\div \\text{time}$. If a girl cycles for 2.3 hours at a speed of $42\\text{ km/h}$, what distance does she travel?",
    options: ["45.5", "48.6", "47.6", "96.6"],
    correctAnswer: 3,
    explanation: "Rearranging the formula gives $\\text{Distance} = \\text{Speed} \\times \\text{Time}$. $\\text{Distance} = 42 \\times 2.3 = 96.6\\text{ km}$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Speed, Distance, Time"]
  },
  {
    id: "est_var_15",
    question: "The density of a substance is equal to the quotient of its mass and its volume. What is the mass, in kilograms, of a liquid whose density is $14.2\\text{ g/cm}^3$ if its volume is equal to $6\\text{ L}$? ($1\\text{ mL} = 1\\text{ cm}^3$)",
    options: ["45.5", "48.6", "85.2", "96.6"],
    correctAnswer: 2,
    explanation: "First, convert the volume to $\\text{cm}^3$: $6\\text{ L} = 6000\\text{ mL} = 6000\\text{ cm}^3$. Mass = density $\\times$ volume = $14.2\\text{ g/cm}^3 \\times 6000\\text{ cm}^3 = 85200\\text{ g}$. Convert to kilograms: $85200\\text{ g} = 85.2\\text{ kg}$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Unit Conversion", "Rates"]
  },
  {
    id: "est_var_16",
    question: "Alex spends $\\$2.25$ per gallon on gasoline. If Alex uses one gallon of gasoline to travel 30 miles, how many dollars will he spend to travel 240 miles?",
    options: ["18", "20", "24", "28"],
    correctAnswer: 0,
    explanation: "First, find the number of gallons needed: $240 \\text{ miles} / 30 \\text{ miles/gallon} = 8 \\text{ gallons}$. The cost is $8 \\text{ gallons} \\times \\$2.25/\\text{gallon} = \\$18$.",
    category: "Problem Solving and Data Analysis",
    topics: ["Rates"]
  },
  {
    id: "est_var_17",
    question: "Kara needs three hours to mow and trim Mrs. Tayler's lawn. One day she asked her friend Peter to work with her. When Peter worked with her, the job took only one hour. How long would it take Peter, in hours, to complete the job himself?",
    options: ["2", "3", "1.5", "2.5"],
    correctAnswer: 2,
    explanation: "Kara's work rate is $1/3$ of the job per hour. Their combined work rate is $1/1 = 1$ job per hour. Let Peter's rate be $1/P$. Then $1/3 + 1/P = 1 \\Rightarrow 1/P = 1 - 1/3 = 2/3$. Therefore, Peter takes $P = 3/2 = 1.5$ hours to complete the job himself.",
    category: "Problem Solving and Data Analysis",
    topics: ["Work Rates"]
  }
];
