import { Question } from '../../types';

export const EST2_COMPOSITE_INVERSE: Question[] = [
  {
    id: 1,
    question: "If $f(x) = |3x|$ and $g(x) = \\lfloor 2x \\rfloor$, then $f(g(-5.4)) =$ ",
    options: ["$33$", "$30$", "$25$", "$20$", "$3$"],
    correctAnswer: 0,
    explanation: "First compute $g(-5.4)$: $g(-5.4) = \\lfloor 2(-5.4) \\rfloor = \\lfloor -10.8 \\rfloor = -11$. Then compute $f(-11)$: $f(-11) = |3(-11)| = |-33| = 33$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 2,
    question: "If $f(x) = \\sqrt[3]{x-1}$ and $g(x)=5$, then $g(f(-7.82))=$ ",
    options: ["$-10.3$", "$-5$", "$5$", "$10.3$", "$15.6$"],
    correctAnswer: 2,
    explanation: "$g(x) = 5$ is a constant function. So for any input $x$, the output is always $5$. Thus $g(f(-7.82)) = 5$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 3,
    question: "If $f(x) = 3 \\ln(x)$ and $g(x) = e^x$, then $g(f(x))=$ ",
    options: ["$3x$", "$e^x$", "$e^{2x}$", "$x^3$", "$x^2+1$"],
    correctAnswer: 3,
    explanation: "$g(f(x)) = e^{3 \\ln x} = e^{\\ln x^3} = x^3$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 4,
    question: "If $f(x) = \\sqrt{9x^2-x}$ and $g(x) = \\frac{x-1}{x+1}$, then $f(g(2))=$ ",
    options: ["$\\frac{\\sqrt{2}}{3}$", "$\\frac{\\sqrt{3}}{3}$", "$\\frac{\\sqrt{5}}{3}$", "$\\frac{\\sqrt{6}}{3}$", "$\\frac{2\\sqrt{2}}{3}$"],
    correctAnswer: 3,
    explanation: "$g(2) = \\frac{2-1}{2+1} = \\frac{1}{3}$. Then $f(1/3) = \\sqrt{9(1/3)^2 - 1/3} = \\sqrt{1 - 1/3} = \\sqrt{2/3} = \\frac{\\sqrt{6}}{3}$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 5,
    question: "If $f(x) = x+1$ and $(f \\circ g)(x) = x^2+3x+2$, which of the following is $g(x)$?",
    options: ["$x+2$", "$x^2+3x$", "$x^2+3x-1$", "$x^2+3x+1$", "$(x+1)^2(x+2)$"],
    correctAnswer: 3,
    explanation: "Since $f(g(x)) = g(x) + 1 = x^2 + 3x + 2$, we have $g(x) = x^2 + 3x + 1$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 6,
    question: "If $f\\left(\\frac{3x}{x-1}\\right) = x^2+1$, what is the value of $f(6)$?",
    options: ["$3$", "$5$", "$18$", "$37$", "$42$"],
    correctAnswer: 1,
    explanation: "Set $\\frac{3x}{x-1} = 6 \\implies 3x = 6x - 6 \\implies 3x = 6 \\implies x = 2$. Then $f(6) = 2^2 + 1 = 5$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 7,
    question: "Using the tables below, what is $(g \\circ f)(-2)$?\n\n| $x$ | $f(x)$ |\n|---|---|\n| $-2$ | $-1$ |\n| $4$ | $-2$ |\n| $5$ | $4$ |\n\n| $x$ | $g(x)$ |\n|---|---|\n| $5$ | $4$ |\n| $-1$ | $2$ |\n| $3$ | $6$ |",
    options: ["$3$", "$5$", "$-2$", "$-1$", "$2$"],
    correctAnswer: 4,
    explanation: "First, find $f(-2) = -1$. Then find $g(-1) = 2$. So $(g \\circ f)(-2) = 2$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 8,
    question: "If $f(x) = \\frac{x+1}{x-1}$ and $f(g(x)) = \\frac{1}{x}$, then which of the following could be $g(x)$?",
    options: ["$x-1$", "$\\frac{1}{x+1}$", "$x+1$", "$\\frac{1}{x-1}$", "$\\frac{x+1}{1-x}$"],
    correctAnswer: 4,
    explanation: "$f(g(x)) = \\frac{g(x)+1}{g(x)-1} = \\frac{1}{x}$. Cross multiply: $x(g(x)+1) = g(x)-1 \\implies x \\cdot g(x) + x = g(x) - 1 \\implies g(x)(x-1) = -x-1 \\implies g(x) = \\frac{-x-1}{x-1} = \\frac{x+1}{1-x}$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 9,
    question: "If $f(x) = 2 \\ln(x+1)$ and $g(x) = e^x$, then $(g \\circ f)(x) = $",
    options: ["$e^{x+1}$", "$e^{x^2+2x+1}$", "$x+1$", "$2(x+1)$", "$x^2+2x+1$"],
    correctAnswer: 4,
    explanation: "$(g \\circ f)(x) = g(2 \\ln(x+1)) = e^{2 \\ln(x+1)} = e^{\\ln((x+1)^2)} = (x+1)^2 = x^2+2x+1$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 10,
    question: "If $f(x) = \\log_2(x^2+7)$ and $f(g(1)) = 4$, which of the following could be $g(x)$?",
    options: ["$g(x) = x^2+x+2$", "$g(x) = 2x^2+x-1$", "$g(x) = \\cos(\\pi x)+4$", "$g(x) = \\sin(\\pi x)+2$", "$g(x) = 3^x-1$"],
    correctAnswer: 2,
    explanation: "$f(k) = \\log_2(k^2+7) = 4 \\implies k^2+7 = 2^4 = 16 \\implies k^2 = 9 \\implies k = \\pm 3$. Thus $g(1)$ must equal $3$ or $-3$. Checking the choices, only for (C) $g(1) = \\cos(\\pi) + 4 = -1 + 4 = 3$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 11,
    question: "If $f(x) = \\frac{1}{x-1}$ and $f(g(x)) = x$, then which of the following is $g(x)$?",
    options: ["$x-1$", "$\\frac{x}{x+1}$", "$\\frac{x+1}{x}$", "$\\frac{x-1}{x}$", "$\\frac{x}{1-x}$"],
    correctAnswer: 2,
    explanation: "$f(g(x)) = \\frac{1}{g(x)-1} = x \\implies g(x)-1 = \\frac{1}{x} \\implies g(x) = \\frac{1}{x} + 1 = \\frac{x+1}{x}$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 12,
    question: "Which of the two relations is a function and why?\nRelation $f$ maps $\\{2, -3, 4, 0\\}$ to $\\{0, 1, 2\\}$, with 4 mapping to both 0 and 2.\nRelation $h$ maps $\\{0, 1, 3, 5\\}$ to $\\{-2, -1, -4\\}$, with each input mapping to exactly one output.",
    options: ["$f$ because input 4 has two images", "$f$ because each input has exactly one output", "$h$ because input $-2$ has two pre-images", "$f$ or $h$ because each relation is a function", "$h$ because each input has only one image"],
    correctAnswer: 4,
    explanation: "Relation $h$ is a function because every input maps to exactly one output (no $x$-value repeats). Relation $f$ is not a function because input 4 maps to two different outputs (0 and 2).",
    category: "Composite and Inverse Functions"
  },
  {
    id: 13,
    question: "If $f(2x-3) = 4x-2$, $f(x) = $",
    options: ["$x+4$", "$x-4$", "$2x+4$", "$3x+5$", "$3x-5$"],
    correctAnswer: 2,
    explanation: "Let $u = 2x-3$, then $x = \\frac{u+3}{2}$. Substitute into the expression: $f(u) = 4\\left(\\frac{u+3}{2}\\right) - 2 = 2(u+3) - 2 = 2u+6-2 = 2u+4$. Thus $f(x) = 2x+4$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 14,
    question: "If $f(x) = x^2+1$, where $x \\ge 0$, then $(f \\circ f^{-1})(x)$ could equal",
    options: ["$1$", "$x$", "$x^2$", "$x^2+1$", "$\\frac{1}{x^2+1}$"],
    correctAnswer: 1,
    explanation: "By the property of inverse functions, $f(f^{-1}(x)) = x$ for all $x$ in the domain of $f^{-1}$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 15,
    question: "If $f(x) = e^{2x}$ and $g(x) = \\ln(x^2+1)$, then $(f \\circ g)(x) = $",
    options: ["$x^2+1$", "$x^3+x$", "$2x(x^2+1)$", "$x^4+2x^2+1$", "$2x\\ln(x^2+1)$"],
    correctAnswer: 3,
    explanation: "$(f \\circ g)(x) = f(\\ln(x^2+1)) = e^{2\\ln(x^2+1)} = e^{\\ln((x^2+1)^2)} = (x^2+1)^2 = x^4+2x^2+1$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 16,
    question: "Two circles are symmetric with respect to $y=x$. If the equation of a circle is $x^2+y^2-2x-4y+1=0$, then which of the following is the equation of the other circle?",
    options: ["$(x-2)^2 + (y-1)^2 = 4$", "$(x-1)^2 + (y-2)^2 = 2$", "$(x-1)^2 + (y-2)^2 = 4$", "$(x-2)^2 + (y-2)^2 = 4$", "$(x+1)^2 + (y+2)^2 = 4$"],
    correctAnswer: 0,
    explanation: "If two curves are symmetric with respect to $y=x$, their equations are inverses of each other obtained by swapping $x$ and $y$. So substitute $y$ for $x$ and $x$ for $y$: $y^2+x^2-2y-4x+1=0$. Rearranging and completing the square: $x^2 - 4x + 4 + y^2 - 2y + 1 = -1 + 4 + 1 \\implies (x-2)^2 + (y-1)^2 = 4$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 17,
    question: "If $f(x) = x^3+3x+1$, then $f^{-1}(f(x)) =$ ",
    options: ["$x$", "$x^2$", "$x^3+3x+1$", "$\\sqrt[3]{x^3+3x+1}$", "$(x^3+3x+1)^3$"],
    correctAnswer: 0,
    explanation: "By the property of inverse functions, $f^{-1}(f(x)) = x$ for all $x$ in the domain of $f$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 18,
    question: "If $f(x) = \\sqrt[3]{x^3+3} + 3$ and $f^{-1}(x) = \\sqrt[3]{-3}$, what is the value of $x$?",
    options: ["$-3$", "$-2$", "$0$", "$3$", "$2$"],
    correctAnswer: 3,
    explanation: "If $f^{-1}(x) = a$, then $x = f(a)$. So $x = f(\\sqrt[3]{-3}) = \\sqrt[3]{(\\sqrt[3]{-3})^3+3} + 3 = \\sqrt[3]{-3+3} + 3 = \\sqrt[3]{0} + 3 = 3$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 19,
    question: "If $f(x) = \\log(x+1) + \\log(x-1)$, then $f^{-1}(x) = $",
    options: ["$10^{x^2-1}$", "$x^2-10$", "$\\sqrt{10^x+1}$", "$-\\sqrt{10^x+1}$", "$\\pm\\sqrt{10^x+1}$"],
    correctAnswer: 2,
    explanation: "$y = \\log(x^2-1)$. Convert to exponential form: $10^y = x^2-1 \\implies x^2 = 10^y+1 \\implies x = \\sqrt{10^y+1}$ (since domain $x>1$, we take the positive root). Thus $f^{-1}(x) = \\sqrt{10^x+1}$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 20,
    question: "If $f(x) = \\log_3(\\sqrt{x}) + 3$ and $g(x)$ is the inverse of $f(x)$, what is the value of $g(2)$?",
    options: ["$\\frac{1}{27}$", "$\\frac{1}{9}$", "$\\frac{1}{3}$", "$3$", "$9$"],
    correctAnswer: 1,
    explanation: "To find $g(2)$, set $f(x) = 2$: $\\log_3(\\sqrt{x}) + 3 = 2 \\implies \\log_3(\\sqrt{x}) = -1 \\implies \\sqrt{x} = 3^{-1} = 1/3 \\implies x = 1/9$. Thus $g(2) = 1/9$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 21,
    question: "If $f(x) = \\sqrt[3]{2x+3}$, then $f^{-1}(3) = $",
    options: ["$3.6$", "$5$", "$8$", "$10$", "$12$"],
    correctAnswer: 4,
    explanation: "Set $f(x) = 3 \\implies \\sqrt[3]{2x+3} = 3 \\implies 2x+3 = 27 \\implies 2x = 24 \\implies x = 12$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 22,
    question: "If $g(x) = \\sqrt[3]{\\frac{x+1}{2}}$, then $g^{-1}(1.5) = $",
    options: ["$4.25$", "$5.75$", "$6.52$", "$7.12$", "$8.45$"],
    correctAnswer: 1,
    explanation: "Set $g(x) = 1.5 \\implies \\sqrt[3]{\\frac{x+1}{2}} = 1.5 \\implies \\frac{x+1}{2} = 1.5^3 = 3.375 \\implies x+1 = 6.75 \\implies x = 5.75$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 23,
    question: "If function $f(x) = \\frac{1}{4}x-3$, and $f^{-1}(x)$ is the inverse function of $f(x)$, then $f^{-1}(f^{-1}(-3)) =$ ",
    options: ["$0$", "$3$", "$6$", "$12$", "$18$"],
    correctAnswer: 3,
    explanation: "First find $f^{-1}(x)$: $y = \\frac{1}{4}x-3 \\implies x = 4(y+3) = 4y+12$, so $f^{-1}(x) = 4x+12$. Then $f^{-1}(-3) = 4(-3)+12 = 0$. Next, $f^{-1}(0) = 4(0)+12 = 12$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 24,
    question: "If $f(x) = 4x-2$, then the inverse function $f^{-1}(x)$ is",
    options: ["$\\frac{x+8}{4}$", "$\\frac{2x+1}{2}$", "$\\frac{x+2}{4}$", "$\\frac{2x-1}{2}$", "$\\frac{x-2}{4}$"],
    correctAnswer: 2,
    explanation: "$y = 4x-2 \\implies 4x = y+2 \\implies x = \\frac{y+2}{4}$. Thus $f^{-1}(x) = \\frac{x+2}{4}$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 25,
    question: "Which of the following is the equation of the inverse of $y = 3^{x+1}$?",
    options: ["$y = \\log_{x+1} 3$", "$y = \\log(x) - 1$", "$y = \\log_3\\left(\\frac{x}{3}\\right)$", "$y = \\log_3(x) + 1$", "$y = \\log_3(x-1)$"],
    correctAnswer: 2,
    explanation: "$x = 3^{y+1} \\implies y+1 = \\log_3(x) \\implies y = \\log_3(x) - 1 = \\log_3(x) - \\log_3(3) = \\log_3(x/3)$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 26,
    question: "If $f(x) = \\log_2(x-1) + 2$, then $f^{-1}(x) = $",
    options: ["$2^{x-1}$", "$x^2+1$", "$2^{x-2}$", "$2^{x-2}+1$", "$2^{2x}+2^x+1$"],
    correctAnswer: 3,
    explanation: "$x = \\log_2(y-1) + 2 \\implies \\log_2(y-1) = x-2 \\implies y-1 = 2^{x-2} \\implies y = 2^{x-2}+1$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 27,
    question: "If $f(x) = x^2+2x-4$ for $x \\ge 0$, what is the value of $f^{-1}(4)$?",
    options: ["$2$", "$4$", "$5$", "$8$", "$10$"],
    correctAnswer: 0,
    explanation: "Set $f(x) = 4 \\implies x^2+2x-4 = 4 \\implies x^2+2x-8 = 0 \\implies (x+4)(x-2) = 0$. Since $x \\ge 0$, $x=2$.",
    category: "Composite and Inverse Functions"
  },
  {
    id: 28,
    question: "If $a$ and $b$ are real numbers $i^2 = -1$, and $2+(a+b)^2i = a+4i$, what is/are the value(s) of $b$?",
    options: ["$\\{0\\}$", "$\\{-1\\}$", "$\\{-4\\}$", "$\\{-4, 0\\}$", "$\\{-1, 0\\}$"],
    correctAnswer: 3,
    explanation: "Real parts must be equal: $2=a$. Imaginary parts must be equal: $(a+b)^2 = 4$. Substituting $a=2$: $(2+b)^2 = 4 \\implies 2+b = \\pm 2 \\implies b = 0 \\text{ or } b = -4$.",
    category: "Complex Numbers"
  },
  {
    id: 29,
    question: "If $i = \\sqrt{-1}$, which of the following is a negative integer?",
    options: ["$i^{24}$", "$i^{33}$", "$i^{46}$", "$i^{55}$", "$i^{72}$"],
    correctAnswer: 2,
    explanation: "$i^{46} = i^{44} \\times i^2 = (i^4)^{11} \\times (-1) = 1 \\times (-1) = -1$, which is a negative integer.",
    category: "Complex Numbers"
  },
  {
    id: 30,
    question: "If $(a+b)+(a-b)i = 1+5i$, where $a$ and $b$ are real numbers, then $a = $",
    options: ["$0$", "$1$", "$2$", "$3$", "$4$"],
    correctAnswer: 3,
    explanation: "Equating real and imaginary parts: $a+b=1$ and $a-b=5$. Adding the two equations: $2a = 6 \\implies a = 3$.",
    category: "Complex Numbers"
  },
  {
    id: 31,
    question: "If $z_1 = 1+2i$ and $z_2 = 3-5i$, then $|z_1+z_2| = $",
    options: ["$10$", "$5$", "$4$", "$3$", "$2$"],
    correctAnswer: 1,
    explanation: "$z_1+z_2 = (1+3) + (2-5)i = 4-3i$. Then $|4-3i| = \\sqrt{4^2 + (-3)^2} = \\sqrt{16+9} = \\sqrt{25} = 5$.",
    category: "Complex Numbers"
  },
  {
    id: 32,
    question: "What is the value of $x$ in the equality $2ix(i-1) = (i-1)^2 - 2$ knowing that $i=\\sqrt{-1}$?",
    options: ["$-2$", "$-1$", "$0$", "$2$", "$1$"],
    correctAnswer: 4,
    explanation: "$(i-1)^2 = i^2-2i+1 = -1-2i+1 = -2i$. Thus the equation becomes $2ix(i-1) = -2i - 2 = -2(i+1)$. Divide both sides by $2i$: $x(i-1) = \\frac{-2(i+1)}{2i} = -\\frac{i+1}{i} = i(i+1) = i^2+i = -1+i$. Since $x(i-1) = i-1$, then $x=1$.",
    category: "Complex Numbers"
  },
  {
    id: 33,
    question: "If $a+bi = \\frac{3+i}{1+i}$, which of the following is true?",
    options: ["$a=1, b=2$", "$a=2, b=1$", "$a=2, b=-1$", "$a=-2, b=1$", "$a=-2, b=-1$"],
    correctAnswer: 2,
    explanation: "$\\frac{3+i}{1+i} = \\frac{3+i}{1+i} \\cdot \\frac{1-i}{1-i} = \\frac{3 - 3i + i - i^2}{1^2 - i^2} = \\frac{3 - 2i - (-1)}{2} = \\frac{4-2i}{2} = 2-i$. Thus $a=2, b=-1$.",
    category: "Complex Numbers"
  },
  {
    id: 34,
    question: "What is the value of $\\left|\\frac{2+i}{i-2}\\right|$?",
    options: ["$1$", "$\\sqrt{2}$", "$\\sqrt{3}$", "$2$", "$2\\sqrt{3}$"],
    correctAnswer: 0,
    explanation: "The modulus of a quotient is the quotient of the moduli: $\\frac{|2+i|}{|-2+i|} = \\frac{\\sqrt{2^2+1^2}}{\\sqrt{(-2)^2+1^2}} = \\frac{\\sqrt{5}}{\\sqrt{5}} = 1$.",
    category: "Complex Numbers"
  },
  {
    id: 35,
    question: "If complex number $z = 4-6i$, then $|z-2| = $",
    options: ["$5.87$", "$6.32$", "$6.38$", "$7.21$", "$7.31$"],
    correctAnswer: 1,
    explanation: "$|z-2| = |4-6i-2| = |2-6i| = \\sqrt{2^2 + (-6)^2} = \\sqrt{4+36} = \\sqrt{40} \\approx 6.32$.",
    category: "Complex Numbers"
  },
  {
    id: 36,
    question: "The multiplicative inverse of $\\frac{1-i}{3+i}$ is",
    options: ["$\\frac{1-2i}{10}$", "$2-i$", "$1+2i$", "$2+i$", "$\\frac{3-i}{2}$"],
    correctAnswer: 2,
    explanation: "The inverse is $\\frac{3+i}{1-i} = \\frac{3+i}{1-i} \\cdot \\frac{1+i}{1+i} = \\frac{3 + 3i + i + i^2}{1^2 - i^2} = \\frac{3 + 4i - 1}{2} = \\frac{2+4i}{2} = 1+2i$.",
    category: "Complex Numbers"
  },
  {
    id: 37,
    question: "If $f(x) = 2x^2 - x$ and $g(x) = x + 3$, what is the value of $(f \\circ g)(-1)$?",
    options: ["2", "4", "6", "8", "10"],
    correctAnswer: 2,
    explanation: "First find $g(-1) = -1 + 3 = 2$. Then evaluate $f(2) = 2(2)^2 - 2 = 8 - 2 = 6$.",
    category: "EST2-composite"
  },
  {
    id: 38,
    question: "Let $f(x) = \\frac{1}{x}$ and $g(x) = \\frac{x}{x-1}$. What is $(f \\circ g)(x)$ for $x \\ne 1$?",
    options: ["$\\frac{x-1}{x}$", "$\\frac{x}{x-1}$", "$\\frac{1}{x-1}$", "$x-1$", "$\\frac{-1}{x-1}$"],
    correctAnswer: 0,
    explanation: "$(f \\circ g)(x) = f(g(x)) = \\frac{1}{\\frac{x}{x-1}} = \\frac{x-1}{x}$.",
    category: "EST2-composite"
  },
  {
    id: 39,
    question: "If $f(x) = x^2$ and $g(x) = \\sin x$, which of the following represents $(g \\circ f)(x)$?",
    options: ["$\\sin^2(x)$", "$\\sin(x^2)$", "$x^2 \\sin(x)$", "$2 \\sin(x) \\cos(x)$", "$\\arcsin(x^2)$"],
    correctAnswer: 1,
    explanation: "$(g \\circ f)(x) = g(f(x)) = g(x^2) = \\sin(x^2)$. Note that $\\sin^2(x)$ represents $(f \\circ g)(x)$.",
    category: "EST2-composite"
  },
  {
    id: 40,
    question: "Suppose $f(x) = 3x - 2$ and $g(x)$ is a linear function such that $(f \\circ g)(x) = 6x + 7$. What is $g(x)$?",
    options: ["$2x+3$", "$2x-3$", "$3x+2$", "$6x+5$", "$3x-5$"],
    correctAnswer: 0,
    explanation: "$f(g(x)) = 3g(x) - 2$. Set this equal to $6x+7$: $3g(x) - 2 = 6x + 7 \\implies 3g(x) = 6x + 9 \\implies g(x) = 2x + 3$.",
    category: "EST2-composite"
  },
  {
    id: 41,
    question: "If $h(x) = \\sqrt{4x-3}$ can be expressed as $(f \\circ g)(x)$, where $f(x) = \\sqrt{x}$, then what is $g(x)$?",
    options: ["$4x-3$", "$x-3$", "$4x$", "$\\sqrt{4x-3}$", "$16x^2-3$"],
    correctAnswer: 0,
    explanation: "Since $f(x) = \\sqrt{x}$, $f(g(x)) = \\sqrt{g(x)}$. Equating this to $\\sqrt{4x-3}$ gives $g(x) = 4x-3$.",
    category: "EST2-composite"
  },
  {
    id: 42,
    question: "If $f(x) = 5^x$ and $g(x) = \\log_5(x)$, what is $(f \\circ g)(25)$?",
    options: ["5", "10", "25", "125", "625"],
    correctAnswer: 2,
    explanation: "Since $f$ and $g$ are inverse functions, $(f \\circ g)(x) = x$ for all $x$ in the domain of $g$. Therefore, $(f \\circ g)(25) = 25$.",
    category: "EST2-composite"
  },
  {
    id: 43,
    question: "Given $f(x) = 2x$ and $g(x) = x^2 + 1$. For what positive value of $x$ does $(f \\circ g)(x) = (g \\circ f)(x)$?",
    options: ["$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$", "$1$", "$\\sqrt{2}$", "No real solutions"],
    correctAnswer: 1,
    explanation: "$(f \\circ g)(x) = 2(x^2+1) = 2x^2+2$. $(g \\circ f)(x) = (2x)^2+1 = 4x^2+1$. Setting them equal: $2x^2+2 = 4x^2+1 \\implies 2x^2 = 1 \\implies x^2 = \\frac{1}{2} \\implies x = \\frac{\\sqrt{2}}{2}$.",
    category: "EST2-composite"
  },
  {
    id: 44,
    question: "Let $f(x) = \\frac{x+2}{x-3}$. Find $(f \\circ f)(x)$.",
    options: ["$\\frac{3x-4}{-2x+11}$", "$\\frac{x+2}{x-3}$", "$x$", "$\\frac{3x+4}{2x-11}$", "$\\frac{-3x+4}{2x+11}$"],
    correctAnswer: 0,
    explanation: "$f(f(x)) = \\frac{\\frac{x+2}{x-3} + 2}{\\frac{x+2}{x-3} - 3}$. Multiply numerator and denominator by $(x-3)$ to get $\\frac{(x+2) + 2(x-3)}{(x+2) - 3(x-3)} = \\frac{x+2+2x-6}{x+2-3x+9} = \\frac{3x-4}{-2x+11}$.",
    category: "EST2-composite"
  },
  {
    id: 45,
    question: "If $f(x) = |x-3|$ and $g(x) = -2x$, find the value of $(f \\circ g)(-4) - (g \\circ f)(-4)$.",
    options: ["-9", "9", "19", "23", "29"],
    correctAnswer: 2,
    explanation: "$g(-4) = 8 \\implies f(g(-4)) = f(8) = |8-3| = 5$. $f(-4) = |-4-3| = 7 \\implies g(f(-4)) = g(7) = -14$. Therefore, $5 - (-14) = 19$.",
    category: "EST2-composite"
  },
  {
    id: 46,
    question: "If $P(x) = 2x+1$ and $Q(x) = x^2 - 1$, find the minimum value of the composite function $(Q \\circ P)(x)$.",
    options: ["-2", "-1", "0", "1", "2"],
    correctAnswer: 1,
    explanation: "$(Q \\circ P)(x) = Q(2x+1) = (2x+1)^2 - 1$. The minimum value of $(2x+1)^2$ is $0$, which occurs at $x = -0.5$. Thus, the minimum value is $0 - 1 = -1$.",
    category: "EST2-composite"
  },
  {
    id: 47,
    question: "Let $f(x) = 10^x$ and $g(x) = \\log(x^2+1)$. What is the domain of $(f \\circ g)(x)$?",
    options: ["$x > 0$", "$x \\ge 1$", "$-1 < x < 1$", "All real numbers", "$x \\ne 0$"],
    correctAnswer: 3,
    explanation: "The domain of $g(x)$ is all real numbers because $x^2+1 \\ge 1 > 0$ for all real $x$. The domain of $f(x)$ is all real numbers. Thus, the composite function is defined for all real numbers.",
    category: "EST2-composite"
  },
  {
    id: 48,
    question: "If $f(x) = x - 1$ and $g(x) = x^2 + x$, for what values of $x$ is $(g \\circ f)(x) = 0$?",
    options: ["$0, 1$", "$-1, 0$", "$1, 2$", "$-1, 1$", "No real values"],
    correctAnswer: 0,
    explanation: "$(g \\circ f)(x) = g(x-1) = (x-1)^2 + (x-1) = (x^2-2x+1) + x - 1 = x^2 - x = x(x-1)$. Setting this to zero gives $x = 0$ or $x = 1$.",
    category: "EST2-composite"
  },
  {
    id: 49,
    question: "If $f(x) = \\frac{x+1}{2}$ and $g(x) = 2x - 1$, what is $(f \\circ g)(x)$?",
    options: ["$x$", "$\\frac{1}{x}$", "$2x$", "$x^2-1$", "$\\frac{x-1}{2}$"],
    correctAnswer: 0,
    explanation: "$(f \\circ g)(x) = f(2x-1) = \\frac{(2x-1)+1}{2} = \\frac{2x}{2} = x$. This indicates $f$ and $g$ are inverse functions.",
    category: "EST2-composite"
  },
  {
    id: 50,
    question: "If $f(x) = x^2 - 4$ and $g(x) = \\sqrt{x}$, what is the domain of $(f \\circ g)(x)$?",
    options: ["All real numbers", "$x \\ge 0$", "$x \\ge 4$", "$x \\ge -4$", "$x \\ne 4$"],
    correctAnswer: 1,
    explanation: "The domain of the inner function $g(x)$ is $x \\ge 0$. Evaluating gives $(f \\circ g)(x) = (\\sqrt{x})^2 - 4 = x - 4$. Since the inner function restricts $x$, the domain of the composition is $x \\ge 0$.",
    category: "EST2-composite"
  },
  {
    id: 51,
    question: "If $f(x) = \\frac{1}{x+1}$ and $g(x) = \\frac{1}{x-1}$, what is $(f \\circ g)(x)$?",
    options: ["$\\frac{x-1}{x}$", "$\\frac{x}{x-1}$", "$\\frac{1}{x^2-1}$", "$\\frac{x-1}{x+1}$", "$\\frac{x+1}{x}$"],
    correctAnswer: 0,
    explanation: "$(f \\circ g)(x) = f\\left(\\frac{1}{x-1}\\right) = \\frac{1}{\\frac{1}{x-1} + 1} = \\frac{1}{\\frac{1 + (x-1)}{x-1}} = \\frac{1}{\\frac{x}{x-1}} = \\frac{x-1}{x}$.",
    category: "EST2-composite"
  },
  {
    id: 52,
    question: "Evaluate $(2+3i)(4-i)$.",
    options: ["$11+10i$", "$11-10i$", "$5+10i$", "$5-10i$", "$10+11i$"],
    correctAnswer: 0,
    explanation: "$(2+3i)(4-i) = 8 - 2i + 12i - 3i^2 = 8 + 10i - 3(-1) = 11 + 10i$.",
    category: "EST2- complex"
  },
  {
    id: 53,
    question: "Simplify $\\frac{3+i}{2-i}$.",
    options: ["$1+i$", "$1-i$", "$2+i$", "$\\frac{5+5i}{3}$", "$\\frac{7+5i}{5}$"],
    correctAnswer: 0,
    explanation: "Multiply the numerator and denominator by the conjugate of the denominator: $\\frac{(3+i)(2+i)}{(2-i)(2+i)} = \\frac{6 + 3i + 2i + i^2}{4 - i^2} = \\frac{6 + 5i - 1}{4 + 1} = \\frac{5+5i}{5} = 1+i$.",
    category: "EST2- complex"
  },
  {
    id: 54,
    question: "Find the modulus of $z = -5+12i$.",
    options: ["7", "13", "17", "119", "169"],
    correctAnswer: 1,
    explanation: "The modulus $|z| = \\sqrt{a^2+b^2} = \\sqrt{(-5)^2+12^2} = \\sqrt{25+144} = \\sqrt{169} = 13$.",
    category: "EST2- complex"
  },
  {
    id: 55,
    question: "What is the value of $i^{2026}$?",
    options: ["$1$", "$-1$", "$i$", "$-i$", "$0$"],
    correctAnswer: 1,
    explanation: "Divide the exponent by 4: $2026 \\div 4 = 506$ with a remainder of $2$. Therefore, $i^{2026} = i^2 = -1$.",
    category: "EST2- complex"
  },
  {
    id: 56,
    question: "If $z = 3-4i$, what is $z + \\bar{z}$?",
    options: ["6", "-8i", "8i", "0", "25"],
    correctAnswer: 0,
    explanation: "The conjugate of $z$ is $\\bar{z} = 3+4i$. Adding them gives $3-4i + 3+4i = 6$. Notice that $z + \\bar{z} = 2\\text{Re}(z)$.",
    category: "EST2- complex"
  },
  {
    id: 57,
    question: "Let $z = x+yi$. If $2z - 3\\bar{z} = -2 + 15i$, what is the value of $x+y$?",
    options: ["5", "1", "-1", "7", "3"],
    correctAnswer: 0,
    explanation: "$2(x+yi) - 3(x-yi) = 2x+2yi - 3x+3yi = -x + 5yi$. Equating real and imaginary parts: $-x = -2 \\implies x = 2$, and $5y = 15 \\implies y = 3$. Then $x+y = 2+3 = 5$.",
    category: "EST2- complex"
  },
  {
    id: 58,
    question: "Find the value of $(1+i)^4$.",
    options: ["-4", "4", "-4i", "4i", "16"],
    correctAnswer: 0,
    explanation: "First compute $(1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$. Then $(1+i)^4 = ((1+i)^2)^2 = (2i)^2 = 4i^2 = -4$.",
    category: "EST2- complex"
  },
  {
    id: 59,
    question: "If $\\sqrt{-16} \\cdot \\sqrt{-9} = x$, what is $x$?",
    options: ["12", "-12", "12i", "-12i", "7"],
    correctAnswer: 1,
    explanation: "$\\sqrt{-16} = 4i$ and $\\sqrt{-9} = 3i$. Their product is $4i \\cdot 3i = 12i^2 = 12(-1) = -12$. Note: $\\sqrt{a} \\sqrt{b} = \\sqrt{ab}$ is not true when both $a$ and $b$ are negative.",
    category: "EST2- complex"
  },
  {
    id: 60,
    question: "Express $\\frac{1}{i^{45}}$ in simplest $a+bi$ form.",
    options: ["$1$", "$-1$", "$i$", "$-i$", "$0$"],
    correctAnswer: 3,
    explanation: "$i^{45} = i^{44} \\cdot i = (i^4)^{11} \\cdot i = 1 \\cdot i = i$. So $\\frac{1}{i^{45}} = \\frac{1}{i} = \\frac{1 \\cdot i}{i \\cdot i} = \\frac{i}{-1} = -i$.",
    category: "EST2- complex"
  },
  {
    id: 61,
    question: "Which of the following is equivalent to $2i(3-5i) - 4(1+2i)$?",
    options: ["$6-2i$", "$10-2i$", "$14-2i$", "$-4+2i$", "$6+10i$"],
    correctAnswer: 0,
    explanation: "$2i(3-5i) = 6i - 10i^2 = 6i + 10$. Also, $-4(1+2i) = -4 - 8i$. Adding them gives $10 + 6i - 4 - 8i = 6 - 2i$.",
    category: "EST2- complex"
  },
  {
    id: 62,
    question: "What is the distance in the complex plane between $z_1 = 2+3i$ and $z_2 = -1-i$?",
    options: ["5", "6", "7", "25", "$\\sqrt{7}$"],
    correctAnswer: 0,
    explanation: "Distance $= |z_1 - z_2| = |(2+3i) - (-1-i)| = |3+4i| = \\sqrt{3^2+4^2} = \\sqrt{25} = 5$.",
    category: "EST2- complex"
  },
  {
    id: 63,
    question: "If $(x+2i)(3-iy) = 13 + 4i$, where $x$ and $y$ are real numbers, what is a possible value of $x$?",
    options: ["3", "2", "5", "-1", "4"],
    correctAnswer: 4,
    explanation: "Expand: $3x - ixy + 6i - 2i^2y = (3x+2y) + i(6-xy)$. Equating parts: $3x+2y = 13$ and $6-xy = 4 \\implies xy = 2 \\implies y = \\frac{2}{x}$. Substitute into the first equation: $3x + \\frac{4}{x} = 13 \\implies 3x^2 - 13x + 4 = 0 \\implies (3x-1)(x-4) = 0$. So $x = \\frac{1}{3}$ or $x = 4$.",
    category: "EST2- complex"
  },
  {
    id: 64,
    question: "The expression $(2+i)^2 + (2-i)^2$ is equal to:",
    options: ["6", "8", "10", "3", "0"],
    correctAnswer: 0,
    explanation: "$(2+i)^2 = 4 + 4i + i^2 = 3 + 4i$. $(2-i)^2 = 4 - 4i + i^2 = 3 - 4i$. Their sum is $3 + 4i + 3 - 4i = 6$.",
    category: "EST2- complex"
  },
  {
    id: 65,
    question: "If $a+bi = \\frac{4-2i}{1-i}$, what is $a-b$?",
    options: ["4", "2", "1", "-1", "3"],
    correctAnswer: 1,
    explanation: "$\\frac{4-2i}{1-i} \\cdot \\frac{1+i}{1+i} = \\frac{4 + 4i - 2i - 2i^2}{1 - i^2} = \\frac{4 + 2i + 2}{2} = \\frac{6+2i}{2} = 3+i$. So $a=3, b=1$, and $a-b = 2$.",
    category: "EST2- complex"
  },
  {
    id: 66,
    question: "What is the imaginary part of $z = (2-3i)(1+2i)$?",
    options: ["1", "8", "-1", "-8", "7"],
    correctAnswer: 0,
    explanation: "Multiply: $z = 2 + 4i - 3i - 6i^2 = 2 + i + 6 = 8 + i$. The imaginary part is the coefficient of $i$, which is 1.",
    category: "EST2- complex"
  }
];
