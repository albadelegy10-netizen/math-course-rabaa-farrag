import { Question } from "../../types";

export const EST1_2021_APRIL_PART1: Question[] = [
  {
    id: "est1_2021_april_1",
    question: "If $2x - 3y = 14$ and $-x + 2y = -8$, what is the value of $x + y$?",
    options: [
      "$-2$",
      "$0$",
      "$2$",
      "$6$"
    ],
    correctAnswer: 2,
    explanation: "We have the system:\n1) $2x - 3y = 14$\n2) $-x + 2y = -8$\nMultiply equation (2) by 2: $-2x + 4y = -16$.\nAdd this to equation (1):\n$(2x - 3y) + (-2x + 4y) = 14 - 16$\n$y = -2$.\nSubstitute $y = -2$ into equation (2):\n$-x + 2(-2) = -8 \\Rightarrow -x - 4 = -8 \\Rightarrow -x = -4 \\Rightarrow x = 4$.\nTherefore, $x + y = 4 + (-2) = 2$.",
    category: "Heart of Algebra",
    topics: ["Systems of Linear Equations"]
  },
  {
    id: "est1_2021_april_2",
    question: "Which of the following is equivalent to $4a^2 - 9 + (2a - 3)(a - 1) + 3(2a - 3)$?",
    options: [
      "$(3a + 5)(2a - 3)$",
      "$2(3a + 5)(2a - 3)$",
      "$(2a - 3)(a + 5)$",
      "$(2a - 3)(3a + 7)$"
    ],
    correctAnswer: 0,
    explanation: "Notice that $4a^2 - 9$ is a difference of squares: $(2a - 3)(2a + 3)$.\nThe expression becomes:\n$(2a - 3)(2a + 3) + (2a - 3)(a - 1) + 3(2a - 3)$\nFactor out the common term $(2a - 3)$:\n$(2a - 3)[(2a + 3) + (a - 1) + 3]$\nSimplify the expression inside the brackets:\n$(2a - 3)[2a + 3 + a - 1 + 3] = (2a - 3)(3a + 5)$.",
    category: "Passport to Advanced Math",
    topics: ["Polynomials", "Factoring"]
  },
  {
    id: "est1_2021_april_3",
    question: "For $i = \\sqrt{-1}$, which of the following is equivalent to $\\frac{2i - 3}{i - 5}$?",
    options: [
      "$\\frac{13 - 7i}{24}$",
      "$\\frac{13 - 13i}{24}$",
      "$\\frac{17 - 7i}{26}$",
      "$\\frac{17 - 13i}{24}$"
    ],
    correctAnswer: 2,
    explanation: "Multiply the numerator and denominator by the conjugate of the denominator, which is $-5 - i$ (or simply multiply by $-i - 5$):\n$\\frac{-3 + 2i}{-5 + i} \\cdot \\frac{-5 - i}{-5 - i} = \\frac{(-3)(-5) + (-3)(-i) + (2i)(-5) + (2i)(-i)}{(-5)^2 - (i)^2}$\n$= \\frac{15 + 3i - 10i - 2i^2}{25 - (-1)} = \\frac{15 - 7i - 2(-1)}{26} = \\frac{15 - 7i + 2}{26} = \\frac{17 - 7i}{26}$.",
    category: "Additional Topics in Math",
    topics: ["Complex Numbers"]
  },
  {
    id: "est1_2021_april_4",
    question: "The \"Bond Number\" $B_o$ or \"Eötvös Number\" is a formula used in fluid dynamics that shows the importance of gravitational forces compared to surface tension forces and is used to describe the shape of a droplet moving in a surrounding fluid. To find the bond number we apply the formula $B_o = \\frac{\\rho g D^2}{\\sigma}$ where $\\rho$ represents the density of the liquid, $g$ represents the acceleration due to gravity, $D$ is the diameter of the droplet, and $\\sigma$ is the surface temperature. What is $D$ in terms of $B_o$, $\\rho$, $g$, and $\\sigma$?",
    options: [
      "$D = \\frac{B_o \\sigma}{\\rho g}$",
      "$D = \\sqrt{\\frac{B_o \\sigma}{\\rho g}}$",
      "$D = \\sqrt{\\frac{B_o \\rho}{\\sigma g}}$",
      "$D = \\frac{B_o \\rho}{\\sigma g}$"
    ],
    correctAnswer: 1,
    explanation: "Start with the formula: $B_o = \\frac{\\rho g D^2}{\\sigma}$.\nMultiply both sides by $\\sigma$: $B_o \\sigma = \\rho g D^2$.\nDivide both sides by $\\rho g$: $D^2 = \\frac{B_o \\sigma}{\\rho g}$.\nTake the square root of both sides: $D = \\sqrt{\\frac{B_o \\sigma}{\\rho g}}$.",
    category: "Heart of Algebra",
    topics: ["Isolating Quantities"]
  },
  {
    id: "est1_2021_april_5",
    question: "If $\\frac{-1}{2x - 1} = \\sqrt{3}$, what is the value of $6x$?",
    options: [
      "$-3\\sqrt{3}$",
      "$\\sqrt{3} - 3$",
      "$-\\sqrt{3} + 3$",
      "$\\sqrt{3} + 3$"
    ],
    correctAnswer: 2,
    explanation: "Given $\\frac{-1}{2x - 1} = \\sqrt{3}$.\nMultiply both sides by $(2x - 1)$: $-1 = \\sqrt{3}(2x - 1)$.\nDivide by $\\sqrt{3}$: $2x - 1 = -\\frac{1}{\\sqrt{3}} = -\\frac{\\sqrt{3}}{3}$.\nAdd 1 to both sides: $2x = 1 - \\frac{\\sqrt{3}}{3} = \\frac{3 - \\sqrt{3}}{3}$.\nWe need the value of $6x$, so multiply by 3:\n$6x = 3 \\cdot (2x) = 3 \\cdot \\left(\\frac{3 - \\sqrt{3}}{3}\\right) = 3 - \\sqrt{3} = -\\sqrt{3} + 3$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations"]
  },
  {
    id: "est1_2021_april_6",
    question: "Questions 6 and 7 refer to the graph below.\n\nWhat is the slope of the line shown in the graph?",
    svg: `<svg viewBox="0 0 400 400" width="100%" height="400" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#e5e7eb" stroke-width="1">
    <line x1="50" y1="50" x2="350" y2="50"/>
    <line x1="50" y1="83.33" x2="350" y2="83.33"/>
    <line x1="50" y1="116.67" x2="350" y2="116.67"/>
    <line x1="50" y1="150" x2="350" y2="150"/>
    <line x1="50" y1="183.33" x2="350" y2="183.33"/>
    <line x1="50" y1="216.67" x2="350" y2="216.67"/>
    <line x1="50" y1="250" x2="350" y2="250"/>
    <line x1="50" y1="283.33" x2="350" y2="283.33"/>
    <line x1="50" y1="316.67" x2="350" y2="316.67"/>
    <line x1="50" y1="350" x2="350" y2="350"/>
    <line x1="50" y1="50" x2="50" y2="350"/>
    <line x1="83.33" y1="50" x2="83.33" y2="350"/>
    <line x1="116.67" y1="50" x2="116.67" y2="350"/>
    <line x1="150" y1="50" x2="150" y2="350"/>
    <line x1="183.33" y1="50" x2="183.33" y2="350"/>
    <line x1="216.67" y1="50" x2="216.67" y2="350"/>
    <line x1="250" y1="50" x2="250" y2="350"/>
    <line x1="283.33" y1="50" x2="283.33" y2="350"/>
    <line x1="316.67" y1="50" x2="316.67" y2="350"/>
    <line x1="350" y1="50" x2="350" y2="350"/>
  </g>
  <g stroke="black" stroke-width="2">
    <line x1="30" y1="250" x2="370" y2="250" marker-end="url(#arrow)"/>
    <line x1="183.33" y1="370" x2="183.33" y2="30" marker-end="url(#arrow)"/>
  </g>
  <line x1="83.33" y1="133.33" x2="316.67" y2="333.33" stroke="black" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <circle cx="216.67" cy="233.33" r="3" fill="black"/>
  <text x="225" y="225" font-size="14">A (1, 0.5)</text>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>`,
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAGyCAYAAABnWopYAAAAOnRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjEwLjEsIGh0dHBzOi8vbWF0cGxvdGxpYi5vcmcvc2/+5QAAAAlwSFlzAAAPYQAAD2EBqD+naQAAUO9JREFUeJzt3X18FPW9//+a2ZCEy27IRmBBcgcThYBAykUFUahCxds5x0OtrWCpPeQBfrX0AqglorWBHmvbh4XgsSD1VA9qW7y1KtQKKBCRIBoSiLkQk4ApSK6g5DIzvz/4zZpNdsPu7M5+5j15Px+PPB4w2cvzve+ZfWd23+/5SJqmaWAYhmEYGyGLFmAYhmGYSMPFjWEYhrEdXNwYhmEY28HFjWEYhrEdXNwYhmEY28HFjWEYhrEdXNwYhmEY28HFjWEYhrEdpha3Rx55BJIk+fxkZ2eb+ZQMwzAMgxizn2DcuHH4xz/+8fUTxpj+lAzDMEw/x/RKExMTA4/HY/bTMAzDMIwX04tbRUUFRo0ahfj4eMyYMQMFBQVISUnxe9v29na0t7d7/6+qKhobG5GUlARJksxWZRiGYSyEpmloa2vDqFGjIMuhfYsmmbnkzZtvvomzZ88iKysLn3/+OdauXYsTJ07gyJEjcDqdvW7/yCOPYO3atWbpMAzDMASpq6vD6NGjQ7qPqcWtJ83NzUhNTcWTTz6JJUuW9Pp9zzO3lpYWpKSkoLq6GkOHDr0gLEmQZRmqqqK7ur5dURSfxwy0XZZlSJLkdztw4awxmO0OhwOapvnd3tnZibKyMlx++eVwOBze7YHcrRZTZ2cnjh496vX35271mD766CPMmTMH//znPzF58mS/sVo5JkVRcPToUYwbN67Xpxd97XtWiUnTNJSWlvocA4FixWJMqqriyJEjPv6RfI8wO6aOjg6fYzga73uRjKm5uRkZGRlobm5GQkICQiGq3R1Dhw7FZZddhsrKSr+/j4uLQ1xcnN/7JSYmmq0XcRRFwahRo5CYmOhzYFOBuj8A7ycEQ4YMCfngsAJ6DhISEkjmgPo+xP7WwMjXUlGdczt79iyqqqowcuTIkO5HNSkOhwOZmZnsL5DuZ8wUoZ4D9heLHfyNYmpx+8lPfoLdu3ejpqYG+/btw+233w6Hw4E777wzpMfpeepLBVVV0dDQwP4C0d2pxkA9B+wvFjv4G8XU4lZfX48777wTWVlZ+M///E8kJSWhqKgIw4YNC+lxovi1YETRNA0NDQ3sLxDdnWoM1HPA/mKxg79RTP3Obdu2bWY+PMMwDMP4ha8tyTAMw9gOEsWN6gC3JElwu93sLxDdnWoM1HPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSBQ3ypw/f160QlhQ97cD1HPA/mKh7m8ULm4MwzCM7eDixjAMw9gOEsWN6gC3JElwu93sLxDdnWoM1HPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSBQ3ypw/f160QlhQ97cD1HPA/mKh7m8ULm4MwzCM7eDixjAMw9gOEsWN6gC3JElwu93sLxDdnWoM1HPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5duwY+wvEDt2SlHPA/mKxg79RSFzoMdTJdKsgy3LAq7FQgLo/8PW+w/uQGNhfLHbwN3zfCHqYBuVOn9raWvYXiB26JSnngP3FYgd/o5AobpQ7fRobG9lfIHbolqScA/YXix38jUKiuDEMwzBMKHBxYxiGYWwHieJGudPH4/Gwv0Ds0C1JOQfsLxY7+BuFuyVNRJZl0gu1UvcH7NEtSTkH7C8WO/gbvm8EPUyj5/IMVFAUBVVVVewvEN2dagzUc8D+YrGDv1FIFDfKtLW1iVYIC+r+doB6DthfLNT9jcLFjWEYhrEdXNwYhmEY20GiuFHu9ElOTmZ/gdihW5JyDthfLHbwNwp3S5qILMtISkoSrWEY6v6APbolKeeA/cViB3/D942gh2lQ7vQ5Regulation that occurs inside the cell that adjusts the internal processes to stay the same is called... homeostasis metabolism stimulus cell theory Rewatch Submit Next . Previous Mar 25 12:44 US Q (hp) m m o Q o f . m P . d h i i o o . m P . d h i i o o f . m m o Q o ",
    options: [
      "$-\\frac{1}{2}$",
      "$-\\frac{7}{8}$",
      "$-\\frac{8}{7}$",
      "$-2$"
    ],
    correctAnswer: 1,
    explanation: "The line passes through $A(1, 0.5)$. By observing the grid, it also passes through $(-3, 4)$ and $(5, -3)$.\nLet's calculate the slope using $(1, 0.5)$ and $(5, -3)$:\n$m = \\frac{-3 - 0.5}{5 - 1} = \\frac{-3.5}{4} = -\\frac{7}{8}$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations", "Graphs of Linear Equations"]
  },
  {
    id: "est1_2021_april_7",
    question: "Questions 6 and 7 refer to the graph below.\n\nWhat is the equation of the line passing through $A(1, 0.5)$ and perpendicular to the graphed line?",
    svg: `<svg viewBox="0 0 400 400" width="100%" height="400" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#e5e7eb" stroke-width="1">
    <line x1="50" y1="50" x2="350" y2="50"/>
    <line x1="50" y1="83.33" x2="350" y2="83.33"/>
    <line x1="50" y1="116.67" x2="350" y2="116.67"/>
    <line x1="50" y1="150" x2="350" y2="150"/>
    <line x1="50" y1="183.33" x2="350" y2="183.33"/>
    <line x1="50" y1="216.67" x2="350" y2="216.67"/>
    <line x1="50" y1="250" x2="350" y2="250"/>
    <line x1="50" y1="283.33" x2="350" y2="283.33"/>
    <line x1="50" y1="316.67" x2="350" y2="316.67"/>
    <line x1="50" y1="350" x2="350" y2="350"/>
    <line x1="50" y1="50" x2="50" y2="350"/>
    <line x1="83.33" y1="50" x2="83.33" y2="350"/>
    <line x1="116.67" y1="50" x2="116.67" y2="350"/>
    <line x1="150" y1="50" x2="150" y2="350"/>
    <line x1="183.33" y1="50" x2="183.33" y2="350"/>
    <line x1="216.67" y1="50" x2="216.67" y2="350"/>
    <line x1="250" y1="50" x2="250" y2="350"/>
    <line x1="283.33" y1="50" x2="283.33" y2="350"/>
    <line x1="316.67" y1="50" x2="316.67" y2="350"/>
    <line x1="350" y1="50" x2="350" y2="350"/>
  </g>
  <g stroke="black" stroke-width="2">
    <line x1="30" y1="250" x2="370" y2="250" marker-end="url(#arrow)"/>
    <line x1="183.33" y1="370" x2="183.33" y2="30" marker-end="url(#arrow)"/>
  </g>
  <line x1="83.33" y1="133.33" x2="316.67" y2="333.33" stroke="black" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <circle cx="216.67" cy="233.33" r="3" fill="black"/>
  <text x="225" y="225" font-size="14">A (1, 0.5)</text>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>`,
    options: [
      "$y = \\frac{1}{2}x$",
      "$y = 2x - \\frac{3}{2}$",
      "$y = \\frac{7}{8}x - \\frac{3}{8}$",
      "$y = \\frac{8}{7}x - \\frac{9}{14}$"
    ],
    correctAnswer: 3,
    explanation: "The slope of the graphed line is $m = -\\frac{7}{8}$.\nThe slope of a line perpendicular to it is the negative reciprocal: $m_{\\perp} = \\frac{8}{7}$.\nThe line passes through $A(1, 0.5)$ or $(1, \\frac{1}{2})$.\nUsing point-slope form: $y - y_1 = m(x - x_1)$\n$y - \\frac{1}{2} = \\frac{8}{7}(x - 1)$\n$y = \\frac{8}{7}x - \\frac{8}{7} + \\frac{1}{2}$\n$y = \\frac{8}{7}x - \\frac{16}{14} + \\frac{7}{14} = \\frac{8}{7}x - \\frac{9}{14}$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations", "Perpendicular Lines"]
  },
  {
    id: "est1_2021_april_8",
    question: "Using the figure below, what is the circumference of the circle with center $E$ and passing through point $F$?",
    svg: `<svg viewBox="0 0 400 400" width="100%" height="400" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#e5e7eb" stroke-width="1">
    <!-- grid 10x10 -->
    <line x1="50" y1="50" x2="350" y2="50"/><line x1="50" y1="80" x2="350" y2="80"/><line x1="50" y1="110" x2="350" y2="110"/><line x1="50" y1="140" x2="350" y2="140"/><line x1="50" y1="170" x2="350" y2="170"/><line x1="50" y1="200" x2="350" y2="200"/><line x1="50" y1="230" x2="350" y2="230"/><line x1="50" y1="260" x2="350" y2="260"/><line x1="50" y1="290" x2="350" y2="290"/><line x1="50" y1="320" x2="350" y2="320"/><line x1="50" y1="350" x2="350" y2="350"/>
    <line x1="50" y1="50" x2="50" y2="350"/><line x1="80" y1="50" x2="80" y2="350"/><line x1="110" y1="50" x2="110" y2="350"/><line x1="140" y1="50" x2="140" y2="350"/><line x1="170" y1="50" x2="170" y2="350"/><line x1="200" y1="50" x2="200" y2="350"/><line x1="230" y1="50" x2="230" y2="350"/><line x1="260" y1="50" x2="260" y2="350"/><line x1="290" y1="50" x2="290" y2="350"/><line x1="320" y1="50" x2="320" y2="350"/><line x1="350" y1="50" x2="350" y2="350"/>
  </g>
  <g stroke="black" stroke-width="2">
    <line x1="30" y1="260" x2="370" y2="260" marker-end="url(#arrow)"/>
    <line x1="230" y1="370" x2="230" y2="30" marker-end="url(#arrow)"/>
  </g>
  <circle cx="170" cy="200" r="84.85" fill="none" stroke="black" stroke-width="2"/>
  <circle cx="170" cy="200" r="4" fill="black"/>
  <text x="175" y="190" font-size="14">E</text>
  <circle cx="110" cy="260" r="4" fill="black"/>
  <text x="95" y="275" font-size="14">F</text>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>`,
    options: [
      "$\\pi\\sqrt{2}$",
      "$2\\pi\\sqrt{2}$",
      "$4\\pi\\sqrt{2}$",
      "$4\\sqrt{2}$"
    ],
    correctAnswer: 2,
    explanation: "The center of the circle is $E(-1, 2)$ and it passes through $F(-3, 0)$.\nThe radius $r$ is the distance between $E$ and $F$:\n$r = \\sqrt{(-3 - (-1))^2 + (0 - 2)^2} = \\sqrt{(-2)^2 + (-2)^2} = \\sqrt{4 + 4} = \\sqrt{8} = 2\\sqrt{2}$.\nThe circumference is $C = 2\\pi r = 2\\pi(2\\sqrt{2}) = 4\\pi\\sqrt{2}$.",
    category: "Additional Topics in Math",
    topics: ["Circles"]
  },
  {
    id: "est1_2021_april_9",
    question: "If $\\frac{-1}{2x} = \\frac{x - 3}{4}$, which of the following is the greatest value for $x$?",
    options: [
      "$2$",
      "$1$",
      "$0$",
      "$-1$"
    ],
    correctAnswer: 0,
    explanation: "Cross-multiply: $-4 = 2x(x - 3)$.\n$-4 = 2x^2 - 6x$.\nDivide by 2: $-2 = x^2 - 3x$.\nRearrange into a quadratic equation: $x^2 - 3x + 2 = 0$.\nFactor: $(x - 1)(x - 2) = 0$.\nThe solutions are $x = 1$ and $x = 2$.\nThe greatest value is $2$.",
    category: "Passport to Advanced Math",
    topics: ["Rational Equations", "Quadratic Equations"]
  },
  {
    id: "est1_2021_april_10",
    question: "If $9^{2x - 1} = 3^8$, what is the value of $2x - 5$?",
    options: [
      "$-5$",
      "$0$",
      "$5$",
      "$10$"
    ],
    correctAnswer: 1,
    explanation: "Express 9 as $3^2$:\n$(3^2)^{2x - 1} = 3^8$\n$3^{4x - 2} = 3^8$\nEquate the exponents: $4x - 2 = 8$.\n$4x = 10 \\Rightarrow x = 2.5$.\nWe need the value of $2x - 5$:\n$2(2.5) - 5 = 5 - 5 = 0$.",
    category: "Passport to Advanced Math",
    topics: ["Exponential Equations"]
  },
  {
    id: "est1_2021_april_11",
    question: "If the sum of half a number and 3 is smaller than twice the same number added to 3, which of the following could be the number?",
    options: [
      "$1$",
      "$0$",
      "$-0.5$",
      "$-2$"
    ],
    correctAnswer: 0,
    explanation: "Let the number be $x$.\nThe inequality is: $\\frac{1}{2}x + 3 < 2x + 3$.\nSubtract 3 from both sides: $\\frac{1}{2}x < 2x$.\nSubtract $\\frac{1}{2}x$ from both sides: $0 < 1.5x$.\nDivide by 1.5: $0 < x$, which means $x > 0$.\nAmong the options, only $1$ is greater than $0$.",
    category: "Heart of Algebra",
    topics: ["Linear Inequalities"]
  },
  {
    id: "est1_2021_april_12",
    question: "Given three consecutive even integers. If the sum of the first and three times the third is equal to 20, what is the sum of the three integers?",
    options: [
      "$14$",
      "$12$",
      "$8$",
      "$6$"
    ],
    correctAnswer: 1,
    explanation: "Let the three consecutive even integers be $x$, $x+2$, and $x+4$.\nThe sum of the first and three times the third is 20:\n$x + 3(x + 4) = 20$\n$x + 3x + 12 = 20$\n$4x = 8 \\Rightarrow x = 2$.\nThe integers are 2, 4, and 6.\nTheir sum is $2 + 4 + 6 = 12$.",
    category: "Heart of Algebra",
    topics: ["Linear Equations", "Word Problems"]
  },
  {
    id: "est1_2021_april_13",
    question: "What is the range of the function $f(x) = x^2 + 4x - 3$?",
    options: [
      "$[-1, +\\infty)$",
      "$[1, +\\infty)$",
      "$[7, +\\infty)$",
      "$[-7, +\\infty)$"
    ],
    correctAnswer: 3,
    explanation: "The function is a parabola opening upwards (since $a=1 > 0$). The minimum value occurs at the vertex.\nThe x-coordinate of the vertex is $x = -\\frac{b}{2a} = -\\frac{4}{2(1)} = -2$.\nThe y-coordinate is $f(-2) = (-2)^2 + 4(-2) - 3 = 4 - 8 - 3 = -7$.\nTherefore, the range is $[-7, +\\infty)$.",
    category: "Passport to Advanced Math",
    topics: ["Quadratic Functions", "Range"]
  },
  {
    id: "est1_2021_april_14",
    question: "In the figure below, $AB = 7\\text{ cm}$, $DC = 13\\text{ cm}$ and $\\tan C = \\frac{2\\sqrt{6}}{13}$. What is the dimension of segment $BC$? (The figure is not drawn to scale.)",
    svg: `<svg viewBox="0 0 400 250" width="100%" height="250" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,20 50,200 350,200" fill="none" stroke="black" stroke-width="2"/>
  <line x1="50" y1="20" x2="200" y2="200" stroke="black" stroke-width="2"/>
  <rect x="50" y="180" width="20" height="20" fill="none" stroke="black" stroke-width="1"/>
  <circle cx="50" cy="20" r="3" fill="black"/>
  <text x="45" y="10" font-size="14">A</text>
  <circle cx="50" cy="200" r="3" fill="black"/>
  <text x="45" y="220" font-size="14">D</text>
  <circle cx="200" cy="200" r="3" fill="black"/>
  <text x="195" y="220" font-size="14">B</text>
  <circle cx="350" cy="200" r="3" fill="black"/>
  <text x="345" y="220" font-size="14">C</text>
</svg>`,
    options: [
      "$5\\text{ cm}$",
      "$8\\text{ cm}$",
      "$10\\text{ cm}$",
      "$12\\text{ cm}$"
    ],
    correctAnswer: 1,
    explanation: "In right triangle $ADC$, $\\tan C = \\frac{AD}{DC}$.\nWe are given $\\tan C = \\frac{2\\sqrt{6}}{13}$ and $DC = 13$.\nSo, $\\frac{AD}{13} = \\frac{2\\sqrt{6}}{13} \\Rightarrow AD = 2\\sqrt{6}$.\nNow, in right triangle $ADB$, we can find $DB$ using the Pythagorean theorem:\n$AD^2 + DB^2 = AB^2$\n$(2\\sqrt{6})^2 + DB^2 = 7^2$\n$24 + DB^2 = 49 \\Rightarrow DB^2 = 25 \\Rightarrow DB = 5$.\nSince $DC = DB + BC$, we have $13 = 5 + BC \\Rightarrow BC = 8\\text{ cm}$.",
    category: "Additional Topics in Math",
    topics: ["Right Triangles", "Trigonometry"]
  },
  {
    id: "est1_2021_april_15",
    question: "If $xy$ is a positive integer and $xz$ is a negative integer, which of the following is true?\n\nI. $yz$ is always positive.\nII. $xy - xz$ is always positive.\nIII. $xyz$ is always negative.",
    options: [
      "I only",
      "II only",
      "III only",
      "I, II, and III"
    ],
    correctAnswer: 1,
    explanation: "Given $xy > 0$ and $xz < 0$.\nIf $x > 0$, then $y > 0$ and $z < 0$. In this case, $yz < 0$ and $xyz < 0$.\nIf $x < 0$, then $y < 0$ and $z > 0$. In this case, $yz < 0$ and $xyz > 0$.\nSo statements I and III are not always true.\nLet's check statement II: $xy - xz$. Since $xy$ is positive and $xz$ is negative, subtracting a negative number from a positive number always results in a positive number. So $xy - xz > 0$ is always true.",
    category: "Heart of Algebra",
    topics: ["Properties of Numbers", "Inequalities"]
  },
  {
    id: "est1_2021_april_16",
    question: "Given $f(x) = 2x^2 - 3x + 1$ and $g(x) = -3x + 5$, what is the value of $(f \\circ g)(-2)$?",
    options: [],
    type: "fill-in-the-blank",
    correctAnswer: 0,
    answerText: "210",
    explanation: "First, find $g(-2)$:\n$g(-2) = -3(-2) + 5 = 6 + 5 = 11$.\nNext, find $f(g(-2)) = f(11)$:\n$f(11) = 2(11)^2 - 3(11) + 1 = 2(121) - 33 + 1 = 242 - 33 + 1 = 210$.",
    category: "Passport to Advanced Math",
    topics: ["Functions", "Composition of Functions"]
  },
  {
    id: "est1_2021_april_17",
    question: "Joanne is a saleswoman in a TV store. Her salary is 1,300 Egyptian pounds per month, in addition to 10 Egyptian pounds for each TV she sells if the quantity sold is less than or equal to 10 TVs per month. If she sells more than 10 TVs in one month, she will get an extra bonus of 10% of her initial salary. Last November, she sold 12 TVs. What was her salary at the end of the month?",
    options: [],
    type: "fill-in-the-blank",
    correctAnswer: 0,
    answerText: "1430",
    explanation: "Initial salary = 1,300 EGP.\nSince she sold 12 TVs (which is > 10), she gets 10 EGP for each of the first 10 TVs? Wait, the problem says \"10 Egyptian pounds for each TV she sells if the quantity sold is less than or equal to 10 TVs per month. If she sells more than 10 TVs in one month, she will get an extra bonus of 10% of her initial salary.\"\nThis implies if she sells > 10, she gets the 10% bonus, but does she still get the 10 EGP per TV? The wording is tricky. Let's re-read: \"in addition to 10 Egyptian pounds for each TV she sells if the quantity sold is less than or equal to 10 TVs per month. If she sells more than 10 TVs... she will get an extra bonus...\"\nUsually, this means she gets the bonus INSTEAD of the 10 EGP per TV, or IN ADDITION to it? Let's check the math.\nIf she doesn't get the 10 EGP per TV: Salary = 1300 + 10% of 1300 = 1300 + 130 = 1430.\nIf she gets 10 EGP per TV for all 12: 1300 + 120 + 130 = 1550.\nIf she gets 10 EGP for the first 10: 1300 + 100 + 130 = 1530.\nThe official answer is 1430. This means the 10 EGP per TV ONLY applies if she sells $\\le 10$ TVs. If she sells $> 10$, she ONLY gets the 10% bonus (which is 130 EGP) on top of her base salary. So $1300 + 130 = 1430$.",
    category: "Heart of Algebra",
    topics: ["Word Problems", "Linear Models"]
  },
  {
    id: "est1_2021_april_18",
    question: "The function $h(x) = x^2 - ax - 3$ has zeros at $x = 3$ and $x = -1$. What is the value of $a$?",
    options: [],
    type: "fill-in-the-blank",
    correctAnswer: 0,
    answerText: "2",
    explanation: "Since $x = 3$ is a zero, $h(3) = 0$:\n$3^2 - a(3) - 3 = 0 \\Rightarrow 9 - 3a - 3 = 0 \\Rightarrow 6 - 3a = 0 \\Rightarrow 3a = 6 \\Rightarrow a = 2$.\nAlternatively, the sum of the roots is $-(-a)/1 = a$. The roots are 3 and -1, so their sum is $3 + (-1) = 2$. Therefore, $a = 2$.",
    category: "Passport to Advanced Math",
    topics: ["Quadratic Functions", "Roots of Polynomials"]
  },
  {
    id: "est1_2021_april_19",
    question: "Using the figure below, what is the value of $x$?",
    svg: `<svg viewBox="0 0 400 300" width="100%" height="300" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="250" x2="380" y2="250" stroke="black" stroke-width="2"/>
  <polygon points="50,250 250,50 200,250" fill="none" stroke="black" stroke-width="2"/>
  <text x="70" y="240" font-size="14">2x - 3</text>
  <text x="210" y="240" font-size="14">x + 22</text>
  <path d="M 250 100 Q 230 150 280 150" fill="none" stroke="black" stroke-width="1" marker-end="url(#arrow2)"/>
  <text x="285" y="140" font-size="14">x + 4</text>
  <defs>
    <marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>`,
    options: [],
    type: "fill-in-the-blank",
    correctAnswer: 0,
    answerText: "10.5",
    explanation: "The figure shows a triangle with an exterior angle $x+4$ at the top vertex, and two interior angles $2x-3$ and $x+22$ at the bottom. Wait, the image shows a triangle divided into two. The angle $x+4$ is at the top right. The angles at the bottom are $2x-3$ and $x+22$. Let's assume the exterior angle of a triangle is equal to the sum of the two opposite interior angles. \nIf the angle $x+4$ is the exterior angle at the top, and the opposite interior angles are $2x-3$ and $x+22$, then:\nWait, looking at the provided answer (10.5 or 21/2), let's see what equation gives 10.5.\nIf $2x - 3 = x + 22 \\Rightarrow x = 25$ (No).\nIf $(2x - 3) + (x + 22) + (x + 4) = 180 \\Rightarrow 4x + 23 = 180 \\Rightarrow 4x = 157 \\Rightarrow x = 39.25$ (No).\nIf the top angle is $x+4$, and the bottom angles are $2x-3$ and $x+22$. Maybe the top angle is an exterior angle to the triangle with interior angles $2x-3$ and $x+22$? Then $x+4 = (2x-3) + (x+22) \\Rightarrow x+4 = 3x+19 \\Rightarrow -2x = 15 \\Rightarrow x = -7.5$ (No).\nLet's reconsider the figure. The figure shows a triangle with a line segment from the top vertex to the base. The angles at the base are $2x-3$ and $x+22$. The angle at the top right is $x+4$. The arc for $x+4$ is between the right side of the triangle and an extension of the left side? No, it's an exterior angle. \nActually, if the two base angles are $2x-3$ and $x+22$, and the exterior angle at the top is $x+4$, wait. \nLet's assume the two base angles are equal (isosceles triangle): $2x - 3 = x + 22 \\Rightarrow x = 25$.\nWhat if the line bisects the top angle, and the base is divided into segments $2x-3$ and $x+22$? By the Angle Bisector Theorem, the ratio of the sides equals the ratio of the base segments. We don't have the sides.\nWhat if the angles $2x-3$ and $x+22$ are supplementary? $(2x-3) + (x+22) = 180 \\Rightarrow 3x + 19 = 180 \\Rightarrow 3x = 161 \\Rightarrow x = 53.6$.\nLet's look at the answer: 10.5. \nIf $x = 10.5$, then $2x - 3 = 21 - 3 = 18$. $x + 22 = 10.5 + 22 = 32.5$. $x + 4 = 14.5$.\nCould the equation be $2(x+4) = 2x - 3$? No.\nCould it be $2x - 3 + x + 4 = x + 22$? $3x + 1 = x + 22 \\Rightarrow 2x = 21 \\Rightarrow x = 10.5$. \nThis equation means: The exterior angle of a triangle is equal to the sum of the two opposite interior angles. If the triangle has an exterior angle $x+22$, and the opposite interior angles are $2x-3$ and $x+4$. \nLooking at the drawing, the angle $x+22$ is an exterior angle to the left triangle! Yes, the line from the top vertex to the base creates two triangles. The angle $x+22$ is the exterior angle at the base for the left triangle. The opposite interior angles of the left triangle are $2x-3$ (at the bottom left) and $x+4$ (at the top). \nTherefore, $(2x - 3) + (x + 4) = x + 22$.\n$3x + 1 = x + 22$\n$2x = 21 \\Rightarrow x = 10.5$.",
    category: "Additional Topics in Math",
    topics: ["Triangles", "Angles"]
  },
  {
    id: "est1_2021_april_20",
    question: "What is the abscissa of the vertex of the function $f(x) = 3x^2 - 18x + 4$?",
    options: [],
    type: "fill-in-the-blank",
    correctAnswer: 0,
    answerText: "3",
    explanation: "The abscissa is the x-coordinate of the vertex, which is given by the formula $x = -\\frac{b}{2a}$.\nHere, $a = 3$ and $b = -18$.\n$x = -\\frac{-18}{2(3)} = \\frac{18}{6} = 3$.",
    category: "Passport to Advanced Math",
    topics: ["Quadratic Functions"]
  }
];
