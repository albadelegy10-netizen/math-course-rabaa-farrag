import { Question } from './types';

export const est2_periodic_questions: Question[] = [
  {
    id: "est2_periodic_1",
    question: `What is the period of the function $f(x) = 4 \\sin(3x - \\pi) + 2$?`,
    options: [
      `$\\frac{2\\pi}{3}$`,
      `$\\pi$`,
      `$\\frac{\\pi}{3}$`,
      `$2\\pi$`,
    ],
    correctAnswer: 0,
    explanation: `For a sine function of the form $f(x) = A \\sin(Bx - C) + D$, the period is given by $T = \\frac{2\\pi}{|B|}$. Here $B = 3$, so $T = \\frac{2\\pi}{3}$.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_2",
    question: `Determine the period of the function $g(x) = -2 \\cos\\left(\\frac{\\pi}{4} x\\right) + 5$.`,
    options: [
      `$4$`,
      `$8$`,
      `$2\\pi$`,
      `$\\frac{\\pi}{2}$`,
    ],
    correctAnswer: 1,
    explanation: `The period formula for cosine is $T = \\frac{2\\pi}{|B|}$. Here $B = \\frac{\\pi}{4}$. Thus, $T = \\frac{2\\pi}{\\frac{\\pi}{4}} = 2\\pi \\cdot \\frac{4}{\\pi} = 8$.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_3",
    question: `What is the fundamental period of the tangent function $h(x) = 3 \\tan(2x) - 1$?`,
    options: [
      `$2\\pi$`,
      `$\\pi$`,
      `$\\frac{\\pi}{2}$`,
      `$\\frac{\\pi}{4}$`,
    ],
    correctAnswer: 2,
    explanation: `For $h(x) = A \\tan(Bx + C) + D$, the period of tangent is $T = \\frac{\\pi}{|B|}$. With $B = 2$, the period is $T = \\frac{\\pi}{2}$.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_4",
    question: `Find the period of $f(x) = \\sec(5x + \\frac{\\pi}{6})$.`,
    options: [
      `$\\frac{2\\pi}{5}$`,
      `$\\frac{\\pi}{5}$`,
      `$5\\pi$`,
      `$\\frac{5\\pi}{2}$`,
    ],
    correctAnswer: 0,
    explanation: `The secant function $\\sec(Bx)$ has the same period as cosine, which is $T = \\frac{2\\pi}{|B|}$. Here $B = 5$, so $T = \\frac{2\\pi}{5}$.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_5",
    question: `What is the fundamental period of $f(x) = |\\sin(x)|$?`,
    options: [
      `$2\\pi$`,
      `$\\pi$`,
      `$\\frac{\\pi}{2}$`,
      `$\\frac{\\pi}{4}$`,
    ],
    correctAnswer: 1,
    explanation: `The standard function $\\sin(x)$ has a period of $2\\pi$ and alternates positive and negative lobes. Taking the absolute value $|\\sin(x)|$ reflects the negative half-cycles upward, making the function repeat every $\\pi$ units. Thus, $T = \\pi$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_6",
    question: `Find the period of the function $g(x) = |\\cos(3x)|$.`,
    options: [
      `$\\frac{2\\pi}{3}$`,
      `$\\frac{\\pi}{3}$`,
      `$\\frac{\\pi}{6}$`,
      `$3\\pi$`,
    ],
    correctAnswer: 1,
    explanation: `The function $\\cos(3x)$ has period $\\frac{2\\pi}{3}$. Applying the absolute value halves the period because the negative lobes are reflected, so $T = \\frac{1}{2} \\cdot \\frac{2\\pi}{3} = \\frac{\\pi}{3}$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_7",
    question: `If $f(x)$ is a periodic function with fundamental period $T = 6$, and $f(2) = 9$, what is the value of $f(20)$?`,
    options: [
      `$3$`,
      `$6$`,
      `$9$`,
      `$12$`,
    ],
    correctAnswer: 2,
    explanation: `Since $f(x)$ is periodic with period $T = 6$, $f(x + 6k) = f(x)$ for any integer $k$. We can express $20$ as $2 + 3(6)$. Thus, $f(20) = f(2 + 18) = f(2) = 9$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_8",
    question: `Determine the fundamental period of the sum $f(x) = \\sin(2x) + \\cos(3x)$.`,
    options: [
      `$\\pi$`,
      `$\\frac{2\\pi}{3}$`,
      `$2\\pi$`,
      `$6\\pi$`,
    ],
    correctAnswer: 2,
    explanation: `The period of $\\sin(2x)$ is $T_1 = \\frac{2\\pi}{2} = \\pi$. The period of $\\cos(3x)$ is $T_2 = \\frac{2\\pi}{3}$. The period of the sum is the least common multiple (LCM) of $T_1$ and $T_2$. $\\pi = 3 \\left(\\frac{\\pi}{3}\\right)$ and $\\frac{2\\pi}{3} = 2 \\left(\\frac{\\pi}{3}\\right)$. The LCM of $3$ and $2$ is $6$, so $T = 6 \\cdot \\frac{\\pi}{3} = 2\\pi$.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_9",
    question: `A function $f(x)$ satisfies $f(x + 4) = f(x - 2)$ for all real numbers $x$. What is the period of $f(x)$?`,
    options: [
      `$2$`,
      `$4$`,
      `$6$`,
      `$8$`,
    ],
    correctAnswer: 2,
    explanation: `Let $u = x - 2$, so $x = u + 2$. Substituting into $f(x + 4) = f(x - 2)$ gives $f(u + 6) = f(u)$. This fits the definition of a periodic function $f(u + P) = f(u)$ with period $P = 6$.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_10",
    question: `What is the period of $h(x) = 5 \\cot\\left(\\frac{2}{3}x\\right) + 7$?`,
    options: [
      `$\\frac{2\\pi}{3}$`,
      `$\\frac{3\\pi}{2}$`,
      `$3\\pi$`,
      `$\\frac{\\pi}{3}$`,
    ],
    correctAnswer: 1,
    explanation: `The period of $\\cot(Bx)$ is given by $T = \\frac{\\pi}{|B|}$. Here $B = \\frac{2}{3}$, so $T = \\frac{\\pi}{\\frac{2}{3}} = \\frac{3\\pi}{2}$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_11",
    question: `What is the range of the function $f(x) = 3 \\sin(2x) - 1$?`,
    options: [
      `$[-4, 2]$`,
      `$[-3, 3]$`,
      `$[-2, 4]$`,
      `$[-1, 3]$`,
    ],
    correctAnswer: 0,
    explanation: `The sine function $\\sin(2x)$ oscillates between $-1$ and $1$. Multiplying by $3$ gives $[-3, 3]$. Subtracting $1$ shifts the interval down by $1$: $[-3 - 1, 3 - 1] = [-4, 2]$.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_12",
    question: `Find the range of $g(x) = -5 \\cos\\left(x + \\frac{\\pi}{3}\\right) + 4$.`,
    options: [
      `$[-1, 9]$`,
      `$[-9, 1]$`,
      `$[-5, 5]$`,
      `$[-4, 4]$`,
    ],
    correctAnswer: 0,
    explanation: `Since $\\cos\\left(x + \\frac{\\pi}{3}\\right)$ ranges between $-1$ and $1$, $-5 \\cos\\left(x + \\frac{\\pi}{3}\\right)$ ranges between $-5$ and $5$. Adding $4$ gives $[-5 + 4, 5 + 4] = [-1, 9]$.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_13",
    question: `Determine the range of $f(x) = 6 - 2\\sin(4x)$.`,
    options: [
      `$[4, 8]$`,
      `$[-2, 6]$`,
      `$[2, 10]$`,
      `$[0, 8]$`,
    ],
    correctAnswer: 0,
    explanation: `Since $\\sin(4x) \\in [-1, 1]$, $-2\\sin(4x) \\in [-2, 2]$. Therefore, $6 - 2\\sin(4x)$ has minimum value $6 - 2 = 4$ and maximum value $6 + 2 = 8$. The range is $[4, 8]$.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_14",
    question: `What is the range of $h(x) = 4 \\tan(3x) + 2$?`,
    options: [
      `$[-2, 6]$`,
      `$[-4, 4]$`,
      `$(-\\infty, \\infty)$`,
      `$[2, \\infty)$`,
    ],
    correctAnswer: 2,
    explanation: `The tangent function $\\tan(3x)$ takes all real values from $-\\infty$ to $\\infty$. Multiplying by $4$ and adding $2$ does not restrict this unbounded output. Thus, the range is all real numbers $(-\\infty, \\infty)$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_15",
    question: `Find the range of $f(x) = 2 \\sin^2(x) + 3$.`,
    options: [
      `$[3, 5]$`,
      `$[1, 5]$`,
      `$[2, 5]$`,
      `$[0, 5]$`,
    ],
    correctAnswer: 0,
    explanation: `Since $\\sin(x) \\in [-1, 1]$, its square $\\sin^2(x) \\in [0, 1]$. Multiplying by $2$ gives $2\\sin^2(x) \\in [0, 2]$. Adding $3$ yields $[0+3, 2+3] = [3, 5]$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_16",
    question: `Determine the range of $g(x) = |3 \\cos(x) - 1|$.`,
    options: [
      `$[0, 4]$`,
      `$[-4, 4]$`,
      `$[1, 4]$`,
      `$[2, 4]$`,
    ],
    correctAnswer: 0,
    explanation: `First find the range of $u(x) = 3 \\cos(x) - 1$. Since $\\cos(x) \\in [-1, 1]$, $u(x) \\in [3(-1)-1, 3(1)-1] = [-4, 2]$. The absolute value $|u(x)|$ maps $[-4, 2]$ to $[0, 4]$ because $u(x) = 0$ is achievable (when $\\cos(x) = 1/3$). Thus, the range is $[0, 4]$.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_17",
    question: `What is the minimum and maximum value of $f(x) = \\frac{1}{2}\\cos(6x) - \\frac{3}{2}$?`,
    options: [
      `Min $= -2$, Max $= -1$`,
      `Min $= -1$, Max $= 0$`,
      `Min $= -2$, Max $= 0$`,
      `Min $= -1.5$, Max $= 1.5$`,
    ],
    correctAnswer: 0,
    explanation: `Maximum occurs when $\\cos(6x) = 1$: $\\frac{1}{2}(1) - \\frac{3}{2} = -1$. Minimum occurs when $\\cos(6x) = -1$: $\\frac{1}{2}(-1) - \\frac{3}{2} = -2$. The range is $[-2, -1]$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_18",
    question: `Find the range of the quadratic trigonometric expression $f(x) = \\sin^2(x) - 4\\sin(x) + 5$.`,
    options: [
      `$[2, 10]$`,
      `$[1, 5]$`,
      `$[0, 10]$`,
      `$[2, 5]$`,
    ],
    correctAnswer: 0,
    explanation: `Let $t = \\sin(x)$, where $t \\in [-1, 1]$. We want the range of $y = t^2 - 4t + 5$ for $t \\in [-1, 1]$. The vertex of the parabola is at $t = -\\frac{-4}{2(1)} = 2$, which lies outside $[-1, 1]$. Since $y'(t) = 2t - 4 < 0$ on $[-1, 1]$, $y(t)$ is strictly decreasing on $[-1, 1]$. At $t = 1$, $y = 1 - 4 + 5 = 2$. At $t = -1$, $y = 1 + 4 + 5 = 10$. The range is $[2, 10]$.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_19",
    question: `Which of the following periodic functions is an EVEN function?`,
    options: [
      `$f(x) = \\sin(x)$`,
      `$f(x) = \\tan(2x)$`,
      `$f(x) = \\cos(3x)$`,
      `$f(x) = \\sin(x) + 1$`,
    ],
    correctAnswer: 2,
    explanation: `A function is even if $f(-x) = f(x)$. For $f(x) = \\cos(3x)$, $f(-x) = \\cos(-3x) = \\cos(3x) = f(x)$. Thus, $\\cos(3x)$ is an even function.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_20",
    question: `Which of the following functions is an ODD function?`,
    options: [
      `$f(x) = \\cos(x)$`,
      `$f(x) = \\sin(4x)$`,
      `$f(x) = \\cos^2(x)$`,
      `$f(x) = |\\sin(x)|$`,
    ],
    correctAnswer: 1,
    explanation: `A function is odd if $f(-x) = -f(x)$. For $f(x) = \\sin(4x)$, $f(-x) = \\sin(-4x) = -\\sin(4x) = -f(x)$. Hence, $\\sin(4x)$ is an odd function.`,
    category: "Math",
    difficulty: "Easy",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_21",
    question: `Classify the function $f(x) = x \\cdot \\sin(x)$ as even, odd, or neither.`,
    options: [
      `Even`,
      `Odd`,
      `Neither even nor odd`,
      `Cannot be determined`,
    ],
    correctAnswer: 0,
    explanation: `Test $f(-x)$: $f(-x) = (-x) \\cdot \\sin(-x) = (-x) \\cdot (-\\sin(x)) = x \\sin(x) = f(x)$. Since $f(-x) = f(x)$, $f(x)$ is an EVEN function.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_22",
    question: `Classify the function $g(x) = \\sin(x) \\cdot \\cos(x)$ as even, odd, or neither.`,
    options: [
      `Even`,
      `Odd`,
      `Neither even nor odd`,
      `Both even and odd`,
    ],
    correctAnswer: 1,
    explanation: `We can use the identity $g(x) = \\frac{1}{2} \\sin(2x)$. Since sine is an odd function, $g(-x) = \\frac{1}{2} \\sin(-2x) = -\\frac{1}{2} \\sin(2x) = -g(x)$. Therefore, $g(x)$ is an ODD function.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_23",
    question: `Classify the function $h(x) = \\cos(x) + \\sin(x)$ as even, odd, or neither.`,
    options: [
      `Even`,
      `Odd`,
      `Neither even nor odd`,
      `Constant function`,
    ],
    correctAnswer: 2,
    explanation: `Test $h(-x)$: $h(-x) = \\cos(-x) + \\sin(-x) = \\cos(x) - \\sin(x)$. Notice that $h(-x) \\neq h(x)$ and $h(-x) \\neq -h(x) = -\\cos(x) - \\sin(x)$. Therefore, $h(x)$ is NEITHER even nor odd.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_24",
    question: `Which of the following functions is NEITHER even nor odd?`,
    options: [
      `$f(x) = \\cos(2x) - 3$`,
      `$f(x) = \\sin(x) + x^3$`,
      `$f(x) = \\sin(2x + \\frac{\\pi}{4})$`,
      `$f(x) = |\\tan(x)|$`,
    ],
    correctAnswer: 2,
    explanation: `For $f(x) = \\sin\\left(2x + \\frac{\\pi}{4}\\right)$, $f(-x) = \\sin\\left(-2x + \\frac{\\pi}{4}\\right) = -\\sin\\left(2x - \\frac{\\pi}{4}\\right)$. This does not equal $f(x)$ or $-f(x)$ due to the phase shift. Thus, it is neither even nor odd.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_25",
    question: `Let $f(x) = \\frac{\\sin(3x)}{x}$ for $x \\neq 0$. What is the symmetry of $f(x)$?`,
    options: [
      `Odd function`,
      `Even function`,
      `Neither even nor odd`,
      `Symmetric about $y = x$`,
    ],
    correctAnswer: 1,
    explanation: `Test $f(-x)$: $f(-x) = \\frac{\\sin(3(-x))}{-x} = \\frac{-\\sin(3x)}{-x} = \\frac{\\sin(3x)}{x} = f(x)$. Since $f(-x) = f(x)$, $f(x)$ is an EVEN function.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_26",
    question: `A periodic function is given by $f(x) = -3 \\sin\\left(\\frac{\\pi}{4} x\\right) + 2$. Which statement about $f(x)$ is correct?`,
    options: [
      `Period $= 8$, Range $= [-1, 5]$`,
      `Period $= 4$, Range $= [-1, 5]$`,
      `Period $= 8$, Range $= [-3, 3]$`,
      `Period $= 2\\pi$, Range $= [-5, 1]$`,
    ],
    correctAnswer: 0,
    explanation: `Period: $T = \\frac{2\\pi}{|B|} = \\frac{2\\pi}{\\frac{\\pi}{4}} = 8$. Range: Since $\\sin(\dots) \\in [-1, 1]$, $-3\\sin(\dots) \\in [-3, 3]$. Adding $2$ gives $[-3 + 2, 3 + 2] = [-1, 5]$. Thus, Period $= 8$ and Range $= [-1, 5]$.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_27",
    question: `Which equation represents an EVEN periodic function with period $T = 4\\pi$, amplitude $A = 5$, and midline $y = -2$?`,
    options: [
      `$f(x) = 5 \\sin\\left(\\frac{1}{2}x\\right) - 2$`,
      `$f(x) = 5 \\cos\\left(\\frac{1}{2}x\\right) - 2$`,
      `$f(x) = 5 \\cos(2x) - 2$`,
      `$f(x) = -5 \\sin(2x) - 2$`,
    ],
    correctAnswer: 1,
    explanation: `Even function implies a cosine function without horizontal phase shift: $f(x) = A \\cos(Bx) + D$. Amplitude $A = 5$, midline $D = -2$. Period $T = 4\\pi \implies \\frac{2\\pi}{B} = 4\\pi \implies B = \\frac{1}{2}$. Thus, $f(x) = 5 \\cos\\left(\\frac{1}{2}x\\right) - 2$.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_28",
    question: `Let $f(x)$ be a continuous periodic function with period $T = 5$. If $\\int_0^5 f(x)\,dx = 12$, what is the value of $\\int_{10}^{25} f(x)\,dx$?`,
    options: [
      `$12$`,
      `$24$`,
      `$36$`,
      `$60$`,
    ],
    correctAnswer: 2,
    explanation: `Since $f(x)$ is periodic with period $T = 5$, the integral over any interval of length $5$ is equal to $12$. The interval $[10, 25]$ has length $15 = 3 \\times 5$. Therefore, $\\int_{10}^{25} f(x)\,dx = 3 \\times \\int_0^5 f(x)\,dx = 3 \\times 12 = 36$.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_29",
    question: `Consider the function $g(x) = |\\tan(2x)|$. What are its period, range, and parity (even/odd)?`,
    options: [
      `Period $= \\frac{\\pi}{2}$, Range $= [0, \\infty)$, Even`,
      `Period $= \\pi$, Range $= (-\\infty, \\infty)$, Odd`,
      `Period $= \\frac{\\pi}{4}$, Range $= [0, \\infty)$, Even`,
      `Period $= \\frac{\\pi}{2}$, Range $= (-\\infty, \\infty)$, Neither`,
    ],
    correctAnswer: 0,
    explanation: `1) Period of $\\tan(2x)$ is $\\frac{\\pi}{2}$. Taking absolute value retains the period $\\frac{\\pi}{2}$. 2) Range: Since absolute value cannot be negative and $\\tan(2x)$ is unbounded, range is $[0, \\infty)$. 3) Parity: $g(-x) = |\\tan(-2x)| = |-\\tan(2x)| = |\\tan(2x)| = g(x)$, so $g(x)$ is EVEN.`,
    category: "Math",
    difficulty: "Hard",
    topics: ["Periodic Functions"]
  },
  {
    id: "est2_periodic_30",
    question: `The tide height in meters at a harbor is modeled by $H(t) = 2.5 \\cos\\left(\\frac{\\pi}{6} t\\right) + 4.0$, where $t$ is hours past midnight. How many hours elapse between consecutive high tides, and what is the maximum water height?`,
    options: [
      `$12$ hours, $6.5$ meters`,
      `$6$ hours, $4.0$ meters`,
      `$12$ hours, $4.0$ meters`,
      `$24$ hours, $6.5$ meters`,
    ],
    correctAnswer: 0,
    explanation: `High tides occur at maximums of the cosine function. The time between consecutive high tides is the period $T = \\frac{2\\pi}{\\frac{\\pi}{6}} = 12$ hours. The maximum height is $H_{\text{max}} = 2.5(1) + 4.0 = 6.5$ meters.`,
    category: "Math",
    difficulty: "Medium",
    topics: ["Periodic Functions"]
  }
];
