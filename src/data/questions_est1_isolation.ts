import { Question } from '../../types';

export const EST1_ISOLATION_SET: Question[] = [
  {
    id: 1,
    question: "The formula for the perimeter of a rectangle is $P = 2l + 2w$. Which of the following equations correctly expresses $w$ in terms of $P$ and $l$?",
    options: [
      "$w = \\frac{P - 2l}{2}$",
      "$w = \\frac{P + 2l}{2}$",
      "$w = 2P - l$",
      "$w = P - l$"
    ],
    correctAnswer: 0,
    explanation: "Subtract $2l$ from both sides of $P = 2l + 2w$:\n$$ P - 2l = 2w $$\nDivide both sides by $2$:\n$$ w = \\frac{P - 2l}{2} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 2,
    question: "The temperature conversion formula from Celsius $C$ to Fahrenheit $F$ is $F = \\frac{9}{5}C + 32$. Which equation correctly isolates $C$?",
    options: [
      "$C = \\frac{9}{5}(F - 32)$",
      "$C = \\frac{5}{9}(F - 32)$",
      "$C = \\frac{5}{9}F - 32$",
      "$C = 5(F - 32) - 9$"
    ],
    correctAnswer: 1,
    explanation: "Subtract $32$ from both sides:\n$$ F - 32 = \\frac{9}{5}C $$\nMultiply both sides by $\\frac{5}{9}$:\n$$ C = \\frac{5}{9}(F - 32) $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 3,
    question: "The simple interest future value formula is $A = P(1 + rt)$. Which equation correctly expresses $t$ in terms of $A, P,$ and $r$?",
    options: [
      "$t = \\frac{A - P}{r}$",
      "$t = \\frac{A - P}{Pr}$",
      "$t = \\frac{A}{Pr} - 1$",
      "$t = \\frac{AP - 1}{r}$"
    ],
    correctAnswer: 1,
    explanation: "Expand the right side or divide by $P$:\n$$ \\frac{A}{P} = 1 + rt $$\nSubtract $1$ from both sides:\n$$ \\frac{A}{P} - 1 = rt \\implies \\frac{A - P}{P} = rt $$\nDivide by $r$:\n$$ t = \\frac{A - P}{Pr} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 4,
    question: "The volume of a right circular cone is given by $V = \\frac{1}{3}\\pi r^2 h$. Which equation correctly isolates $h$?",
    options: [
      "$h = \\frac{V}{3\\pi r^2}$",
      "$h = \\frac{3V}{\\pi r^2}$",
      "$h = \\frac{3V\\pi}{r^2}$",
      "$h = 3V - \\pi r^2$"
    ],
    correctAnswer: 1,
    explanation: "Multiply both sides of $V = \\frac{1}{3}\\pi r^2 h$ by $3$:\n$$ 3V = \\pi r^2 h $$\nDivide both sides by $\\pi r^2$:\n$$ h = \\frac{3V}{\\pi r^2} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 5,
    question: "Kinetic energy is defined as $E = \\frac{1}{2}m v^2$. Assuming velocity $v > 0$, which equation correctly expresses $v$ in terms of $E$ and $m$?",
    options: [
      "$v = \\sqrt{\\frac{E}{2m}}$",
      "$v = \\frac{2E}{m}$",
      "$v = \\sqrt{\\frac{2E}{m}}$",
      "$v = \\frac{\\sqrt{2E}}{m}$"
    ],
    correctAnswer: 2,
    explanation: "Multiply both sides by $2$:\n$$ 2E = m v^2 $$\nDivide by $m$:\n$$ v^2 = \\frac{2E}{m} $$\nTake the square root of both sides ($v > 0$):\n$$ v = \\sqrt{\\frac{2E}{m}} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 6,
    question: "The total surface area of a closed cylinder is $S = 2\\pi r h + 2\\pi r^2$. Which equation correctly solves for $h$?",
    options: [
      "$h = \\frac{S - 2\\pi r^2}{2\\pi r}$",
      "$h = \\frac{S}{2\\pi r} - 2\\pi r$",
      "$h = \\frac{S + 2\\pi r^2}{2\\pi r}$",
      "$h = S - r$"
    ],
    correctAnswer: 0,
    explanation: "Subtract $2\\pi r^2$ from both sides:\n$$ S - 2\\pi r^2 = 2\\pi r h $$\nDivide both sides by $2\\pi r$:\n$$ h = \\frac{S - 2\\pi r^2}{2\\pi r} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 7,
    question: "Given the linear equation $ax + b = cx + d$ where $a \\neq c$, which expression represents $x$ in terms of $a, b, c,$ and $d$?",
    options: [
      "$x = \\frac{d + b}{a - c}$",
      "$x = \\frac{d - b}{a - c}$",
      "$x = \\frac{d - b}{a + c}$",
      "$x = \\frac{a - c}{d - b}$"
    ],
    correctAnswer: 1,
    explanation: "Rearrange terms with $x$ on one side:\n$$ ax - cx = d - b $$\nFactor out $x$:\n$$ x(a - c) = d - b $$\nDivide by $(a - c)$:\n$$ x = \\frac{d - b}{a - c} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 8,
    question: "In circuit physics, the equivalent resistance $R$ for two parallel resistors $R_1$ and $R_2$ satisfies $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$. Which equation correctly isolates $R$?",
    options: [
      "$R = R_1 + R_2$",
      "$R = \\frac{R_1 + R_2}{R_1 R_2}$",
      "$R = \\frac{R_1 R_2}{R_1 + R_2}$",
      "$R = R_1 R_2$"
    ],
    correctAnswer: 2,
    explanation: "Find a common denominator on the right side:\n$$ \\frac{1}{R} = \\frac{R_2 + R_1}{R_1 R_2} $$\nTake the reciprocal of both sides:\n$$ R = \\frac{R_1 R_2}{R_1 + R_2} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 9,
    question: "Given the rational function $y = \\frac{2x - 3}{x + 5}$, which expression correctly isolates $x$ in terms of $y$?",
    options: [
      "$x = \\frac{5y - 3}{2 - y}$",
      "$x = \\frac{5y + 3}{2 - y}$",
      "$x = \\frac{3 - 5y}{y - 2}$",
      "$x = \\frac{2y + 3}{y - 5}$"
    ],
    correctAnswer: 1,
    explanation: "Multiply both sides by $(x + 5)$:\n$$ y(x + 5) = 2x - 3 \\implies xy + 5y = 2x - 3 $$\nRearrange terms with $x$:\n$$ 5y + 3 = 2x - xy \\implies 5y + 3 = x(2 - y) $$\nDivide by $(2 - y)$:\n$$ x = \\frac{5y + 3}{2 - y} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 10,
    question: "The period $T$ of a simple pendulum is $T = 2\\pi \\sqrt{\\frac{L}{g}}$. Which equation correctly expresses $L$ in terms of $T, g,$ and $\\pi$?",
    options: [
      "$L = \\frac{g T}{2\\pi}$",
      "$L = \\frac{g T^2}{2\\pi^2}$",
      "$L = \\frac{g T^2}{4\\pi^2}$",
      "$L = \\frac{4\\pi^2 T^2}{g}$"
    ],
    correctAnswer: 2,
    explanation: "Divide both sides by $2\\pi$:\n$$ \\frac{T}{2\\pi} = \\sqrt{\\frac{L}{g}} $$\nSquare both sides:\n$$ \\frac{T^2}{4\\pi^2} = \\frac{L}{g} $$\nMultiply by $g$:\n$$ L = \\frac{g T^2}{4\\pi^2} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 11,
    question: "If $q = \\frac{p + 2}{3p - 1}$, which expression correctly isolates $p$ in terms of $q$?",
    options: [
      "$p = \\frac{q - 2}{3q + 1}$",
      "$p = \\frac{q + 2}{3q - 1}$",
      "$p = \\frac{3q - 1}{q + 2}$",
      "$p = \\frac{2q + 1}{3q - 1}$"
    ],
    correctAnswer: 1,
    explanation: "Multiply both sides by $(3p - 1)$:\n$$ q(3p - 1) = p + 2 \\implies 3pq - q = p + 2 $$\nCollect $p$ terms on one side:\n$$ 3pq - p = q + 2 \\implies p(3q - 1) = q + 2 $$\nDivide by $(3q - 1)$:\n$$ p = \\frac{q + 2}{3q - 1} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 12,
    question: "In physics, work done or change in kinetic energy is $K = \\frac{1}{2}m(v^2 - u^2)$. Which equation correctly expresses $u^2$ in terms of $K, m,$ and $v^2$?",
    options: [
      "$u^2 = v^2 - \\frac{2K}{m}$",
      "$u^2 = v^2 + \\frac{2K}{m}$",
      "$u^2 = \\frac{2K}{m} - v^2$",
      "$u^2 = \\frac{v^2 - 2K}{m}$"
    ],
    correctAnswer: 0,
    explanation: "Multiply both sides by $2$ and divide by $m$:\n$$ \\frac{2K}{m} = v^2 - u^2 $$\nAdd $u^2$ and subtract $\\frac{2K}{m}$:\n$$ u^2 = v^2 - \\frac{2K}{m} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 13,
    question: "The formula for the area of a trapezoid is $A = \\frac{1}{2}h(b_1 + b_2)$. Which equation expresses base $b_1$ in terms of $A, h,$ and $b_2$?",
    options: [
      "$b_1 = \\frac{A}{2h} - b_2$",
      "$b_1 = \\frac{2A - b_2}{h}$",
      "$b_1 = \\frac{2A}{h} - b_2$",
      "$b_1 = \\frac{2A + h b_2}{h}$"
    ],
    correctAnswer: 2,
    explanation: "Multiply both sides by $2$:\n$$ 2A = h(b_1 + b_2) $$\nDivide by $h$:\n$$ \\frac{2A}{h} = b_1 + b_2 $$\nSubtract $b_2$:\n$$ b_1 = \\frac{2A}{h} - b_2 $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 14,
    question: "Newton's law of universal gravitation is $F = G \\frac{m_1 m_2}{r^2}$. Assuming $r > 0$, which equation correctly isolates $r$?",
    options: [
      "$r = \\sqrt{\\frac{G m_1 m_2}{F}}$",
      "$r = \\frac{G m_1 m_2}{F}$",
      "$r = \\sqrt{\\frac{F}{G m_1 m_2}}$",
      "$r = \\frac{\\sqrt{G m_1 m_2}}{F}$"
    ],
    correctAnswer: 0,
    explanation: "Multiply both sides by $r^2$:\n$$ r^2 F = G m_1 m_2 $$\nDivide by $F$:\n$$ r^2 = \\frac{G m_1 m_2}{F} $$\nTake the square root ($r > 0$):\n$$ r = \\sqrt{\\frac{G m_1 m_2}{F}} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 15,
    question: "The perimeter of a circular sector with radius $r$ and central angle $\\theta$ (in radians) is $P = 2r + r\\theta$. Which equation correctly isolates $r$?",
    options: [
      "$r = \\frac{P}{2\\theta}$",
      "$r = \\frac{P}{2 + \\theta}$",
      "$r = P(2 + \\theta)$",
      "$r = \\frac{P - \\theta}{2}$"
    ],
    correctAnswer: 1,
    explanation: "Factor out $r$ on the right side of $P = 2r + r\\theta$:\n$$ P = r(2 + \\theta) $$\nDivide both sides by $(2 + \\theta)$:\n$$ r = \\frac{P}{2 + \\theta} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 16,
    question: "In the compound growth formula $A = P(1 + r)^t$, which expression correctly isolates $(1 + r)$?",
    options: [
      "$1 + r = \\sqrt[t]{\\frac{A}{P}}$",
      "$1 + r = \\left(\\frac{A}{P}\\right)^t$",
      "$1 + r = \\frac{A}{P t}$",
      "$1 + r = \\sqrt[P]{\\frac{A}{t}}$"
    ],
    correctAnswer: 0,
    explanation: "Divide both sides by $P$:\n$$ \\frac{A}{P} = (1 + r)^t $$\nTake the $t$-th root (or raise to power $\\frac{1}{t}$):\n$$ 1 + r = \\left(\\frac{A}{P}\\right)^{\\frac{1}{t}} = \\sqrt[t]{\\frac{A}{P}} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 17,
    question: "Given $z = \\frac{x + y}{x - y}$, solve for $x$ in terms of $y$ and $z$.",
    options: [
      "$x = y \\frac{z - 1}{z + 1}$",
      "$x = y \\frac{z + 1}{z - 1}$",
      "$x = \\frac{z + y}{z - 1}$",
      "$x = \\frac{y z + 1}{z - 1}$"
    ],
    correctAnswer: 1,
    explanation: "Multiply both sides by $(x - y)$:\n$$ z(x - y) = x + y \\implies xz - yz = x + y $$\nRearrange terms containing $x$:\n$$ xz - x = yz + y \\implies x(z - 1) = y(z + 1) $$\nDivide by $(z - 1)$:\n$$ x = y \\frac{z + 1}{z - 1} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 18,
    question: "A company's profit is $\\Pi = R - C$, where revenue $R = p \\cdot q$ and total cost $C = F + v \\cdot q$. Which equation correctly isolates unit price $p$?",
    options: [
      "$p = \\frac{\\Pi + F}{q} + v$",
      "$p = \\frac{\\Pi - F}{q} - v$",
      "$p = \\frac{\\Pi + F - v}{q}$",
      "$p = \\Pi + F + v$"
    ],
    correctAnswer: 0,
    explanation: "Substitute $R$ and $C$ into $\\Pi$:\n$$ \\Pi = p q - (F + v q) = p q - F - v q $$\nAdd $F + v q$ to both sides:\n$$ \\Pi + F + v q = p q $$\nDivide both sides by $q$:\n$$ p = \\frac{\\Pi + F + v q}{q} = \\frac{\\Pi + F}{q} + v $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 19,
    question: "If $m = \\frac{a b}{a + b}$, which expression represents $a$ in terms of $m$ and $b$?",
    options: [
      "$a = \\frac{b m}{b + m}$",
      "$a = \\frac{b m}{b - m}$",
      "$a = \\frac{b - m}{b m}$",
      "$a = \\frac{m}{b - m}$"
    ],
    correctAnswer: 1,
    explanation: "Multiply both sides by $(a + b)$:\n$$ m(a + b) = ab \\implies am + bm = ab $$\nRearrange terms with $a$:\n$$ bm = ab - am \\implies bm = a(b - m) $$\nDivide by $(b - m)$:\n$$ a = \\frac{bm}{b - m} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  },
  {
    id: 20,
    question: "Given the kinematic equation $v^2 = u^2 + 2as$, which equation correctly expresses acceleration $a$ in terms of $v, u,$ and $s$?",
    options: [
      "$a = \\frac{v - u}{2s}$",
      "$a = \\frac{v^2 + u^2}{2s}$",
      "$a = \\frac{v^2 - u^2}{2s}$",
      "$a = \\frac{2s}{v^2 - u^2}$"
    ],
    correctAnswer: 2,
    explanation: "Subtract $u^2$ from both sides:\n$$ v^2 - u^2 = 2as $$\nDivide both sides by $2s$:\n$$ a = \\frac{v^2 - u^2}{2s} $$",
    category: "ESt1-Isolation",
    topics: ["Algebra", "Isolation", "Literal Equations"]
  }
];
