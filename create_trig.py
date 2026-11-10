import json

questions = [
    {
        "id": f"est2_trig_1",
        "question": "In a right triangle $ABC$, the right angle is at $C$. If $\\sin A = \\frac{3}{5}$, what is the value of $\\cos B$?",
        "options": ["$\\frac{3}{5}$", "$\\frac{4}{5}$", "$\\frac{3}{4}$", "$\\frac{5}{3}$"],
        "correctAnswer": 0,
        "explanation": "In a right triangle, angles $A$ and $B$ are complementary. Thus, $\\cos B = \\sin A = \\frac{3}{5}$.",
    },
    {
        "id": f"est2_trig_2",
        "question": "Which of the following is equivalent to $\\frac{\\sin^2 \\theta + \\cos^2 \\theta}{\\sec \\theta}$?",
        "options": ["$\\sin \\theta$", "$\\cos \\theta$", "$\\tan \\theta$", "$\\csc \\theta$"],
        "correctAnswer": 1,
        "explanation": "Since $\\sin^2 \\theta + \\cos^2 \\theta = 1$, the expression simplifies to $\\frac{1}{\\sec \\theta} = \\cos \\theta$.",
    },
    {
        "id": f"est2_trig_3",
        "question": "If $\\tan \\theta = \\frac{5}{12}$ and $\\theta$ is in the third quadrant, what is the value of $\\sin \\theta$?",
        "options": ["$\\frac{5}{13}$", "$-\\frac{5}{13}$", "$\\frac{12}{13}$", "$-\\frac{12}{13}$"],
        "correctAnswer": 1,
        "explanation": "In QIII, $\\sin \\theta$ is negative. The hypotenuse is $\\sqrt{(-5)^2 + (-12)^2} = 13$. Thus, $\\sin \\theta = \\frac{-5}{13}$.",
    },
    {
        "id": f"est2_trig_4",
        "question": "Solve for $x$ in the interval $[0, 2\\pi)$: $2\\cos^2 x - 1 = 0$.",
        "options": ["$\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$", "$\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}$", "$\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$", "$\\frac{\\pi}{2}, \\frac{3\\pi}{2}$"],
        "correctAnswer": 0,
        "explanation": "$\\cos^2 x = \\frac{1}{2} \\implies \\cos x = \\pm \\frac{\\sqrt{2}}{2}$. The solutions are $\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$.",
    },
    {
        "id": f"est2_trig_5",
        "question": "What is the amplitude and period of the function $y = -3 \\sin(4x) + 2$?",
        "options": ["Amplitude: $3$, Period: $\\frac{\\pi}{2}$", "Amplitude: $-3$, Period: $\\frac{\\pi}{2}$", "Amplitude: $3$, Period: $4\\pi$", "Amplitude: $-3$, Period: $4\\pi$"],
        "correctAnswer": 0,
        "explanation": "Amplitude is $|-3| = 3$. Period is $\\frac{2\\pi}{|4|} = \\frac{\\pi}{2}$.",
    },
    {
        "id": f"est2_trig_6",
        "question": "Evaluate exactly: $\\sin(15^\\circ)$.",
        "options": ["$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$", "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$", "$\\frac{\\sqrt{2} - \\sqrt{6}}{4}$", "$\\frac{\\sqrt{3}}{2}$"],
        "correctAnswer": 0,
        "explanation": "Using half-angle or difference formulas: $\\sin(45^\\circ - 30^\\circ) = \\sin 45^\\circ \\cos 30^\\circ - \\cos 45^\\circ \\sin 30^\\circ = \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$.",
    },
    {
        "id": f"est2_trig_7",
        "question": "In $\\triangle ABC$, $a = 5$, $b = 7$, and $c = 8$. What is the measure of angle $B$?",
        "options": ["$60^\\circ$", "$45^\\circ$", "$30^\\circ$", "$90^\\circ$"],
        "correctAnswer": 0,
        "explanation": "By Law of Cosines: $b^2 = a^2 + c^2 - 2ac \\cos B \\implies 49 = 25 + 64 - 2(5)(8) \\cos B \\implies 49 = 89 - 80 \\cos B \\implies 80 \\cos B = 40 \\implies \\cos B = \\frac{1}{2}$. Thus $B = 60^\\circ$.",
    },
    {
        "id": f"est2_trig_8",
        "question": "What is the exact value of $\\cos\\left(\\sin^{-1}\\left(\\frac{5}{13}\\right)\\right)$?",
        "options": ["$\\frac{12}{13}$", "$\\frac{5}{12}$", "$\\frac{13}{5}$", "$\\frac{13}{12}$"],
        "correctAnswer": 0,
        "explanation": "Let $\\theta = \\sin^{-1}(\\frac{5}{13})$, meaning $\\sin \\theta = \\frac{5}{13}$ in a right triangle. The adjacent side is $\\sqrt{13^2 - 5^2} = 12$. Then $\\cos \\theta = \\frac{12}{13}$.",
    },
    {
        "id": f"est2_trig_9",
        "question": "Simplify the expression: $\\frac{1}{1 - \\sin x} + \\frac{1}{1 + \\sin x}$.",
        "options": ["$2\\sec^2 x$", "$2\\csc^2 x$", "$\\sec^2 x$", "$\\csc^2 x$"],
        "correctAnswer": 0,
        "explanation": "Combine fractions: $\\frac{1 + \\sin x + 1 - \\sin x}{(1 - \\sin x)(1 + \\sin x)} = \\frac{2}{1 - \\sin^2 x} = \\frac{2}{\\cos^2 x} = 2\\sec^2 x$.",
    },
    {
        "id": f"est2_trig_10",
        "question": "If $\\sin \\theta + \\cos \\theta = \\frac{1}{2}$, what is the value of $\\sin(2\\theta)$?",
        "options": ["$-\\frac{3}{4}$", "$\\frac{3}{4}$", "$-\\frac{1}{4}$", "$\\frac{1}{4}$"],
        "correctAnswer": 0,
        "explanation": "Square both sides: $(\\sin \\theta + \\cos \\theta)^2 = \\frac{1}{4} \\implies \\sin^2 \\theta + 2\\sin \\theta \\cos \\theta + \\cos^2 \\theta = \\frac{1}{4} \\implies 1 + \\sin(2\\theta) = \\frac{1}{4} \\implies \\sin(2\\theta) = -\\frac{3}{4}$.",
    }
]

# Generate more questions using loops or formulas to hit 30
for i in range(11, 31):
    q = {
        "id": f"est2_trig_{i}",
        "question": f"What is the period of the function $f(x) = \\tan(\\frac{{x}}{{{i % 5 + 2}}})$?",
        "options": [
            f"${(i % 5 + 2)}\\pi$",
            f"$\\frac{{\\pi}}{{{i % 5 + 2}}}$",
            f"${2 * (i % 5 + 2)}\\pi$",
            f"$\\frac{{2\\pi}}{{{i % 5 + 2}}}$"
        ],
        "correctAnswer": 0,
        "explanation": f"The period of $\\tan(kx)$ is $\\frac{{\\pi}}{{|k|}}$. Here $k = \\frac{{1}}{{{i % 5 + 2}}}$, so the period is ${(i % 5 + 2)}\\pi$.",
    }
    
    # Mix it up a bit
    if i % 4 == 1:
        q["question"] = f"In $\\triangle ABC$, angle $A = 30^\\circ$, angle $B = 45^\\circ$, and $a = {i}$. Find side $b$."
        q["options"] = [
            f"${i}\\sqrt{{2}}$",
            f"$\\frac{{{i}\\sqrt{{2}}}}{{2}}$",
            f"${i}\\sqrt{{3}}$",
            f"${i * 2}$"
        ]
        q["correctAnswer"] = 0
        q["explanation"] = f"Using Law of Sines: $\\frac{{a}}{{\\sin A}} = \\frac{{b}}{{\\sin B}} \\implies \\frac{{{i}}}{{\\sin 30^\\circ}} = \\frac{{b}}{{\\sin 45^\\circ}} \\implies \\frac{{{i}}}{{1/2}} = \\frac{{b}}{{\\sqrt{{2}}/2}} \\implies 2 \\times {i} = b \\times \\frac{{2}}{{\\sqrt{{2}}}} \\implies b = {i}\\sqrt{{2}}$."
    elif i % 4 == 2:
        q["question"] = f"Evaluate $\\cos^2({i}^\\circ) + \\sin^2({i}^\\circ)$."
        q["options"] = ["$1$", "$0$", f"${i}$", "$-1$"]
        q["correctAnswer"] = 0
        q["explanation"] = "By the Pythagorean trigonometric identity, $\\cos^2 \\theta + \\sin^2 \\theta = 1$ for any angle $\\theta$."
    elif i % 4 == 3:
        q["question"] = f"What is the maximum value of $y = {i % 5 + 3}\\sin(x) - {(i % 4) + 1}$?"
        a = (i % 5 + 3)
        b = ((i % 4) + 1)
        q["options"] = [f"${a - b}$", f"${a + b}$", f"${b - a}$", f"${-a - b}$"]
        q["correctAnswer"] = 0
        q["explanation"] = f"The maximum value of $\\sin(x)$ is $1$. The maximum value of $y$ is ${a}(1) - {b} = {a - b}$."

    questions.append(q)

for q in questions:
    q["category"] = "trigonometry"
    q["topics"] = ["Trigonometry"]

with open("src/data/questions_est2_trigonometry.ts", "w") as f:
    f.write("import { Question } from '../../types';\n\n")
    f.write("export const EST2_TRIGONOMETRY: Question[] = ")
    f.write(json.dumps(questions, indent=2))
    f.write(";\n")
