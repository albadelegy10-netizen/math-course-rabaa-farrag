import { Question } from '../../types';

export const EST2_LINEAR_POLYNOMIAL: Question[] = [
  {
    id: 1,
    question: "The slope of a line which contains the points $(a+3, -4)$ and $(6a-2, 6)$ is $-\\frac{1}{2}$. What is the value of $a$?",
    options: ["$-3$", "$-2$", "$2$", "$3$", "$5$"],
    correctAnswer: 0,
    explanation: "$\\frac{6 - (-4)}{6a-2 - (a+3)} = -\\frac{1}{2} \\Rightarrow \\frac{10}{5a-5} = -\\frac{1}{2} \\Rightarrow \\frac{2}{a-1} = -\\frac{1}{2} \\Rightarrow a-1 = -4 \\Rightarrow a = -3$.",
    category: "Linear Equations"
  },
  {
    id: 2,
    question: "What is the equation of a line whose x-intercept is $5$ and y-intercept is $-4$?",
    options: ["$4x+5y=15$", "$5x+4y=20$", "$4x-5y=15$", "$4x+5y=20$", "$4x-5y=20$"],
    correctAnswer: 4,
    explanation: "By the intercept form of a line: $\\frac{x}{5} + \\frac{y}{-4} = 1 \\Rightarrow 4x - 5y = 20$.",
    category: "Linear Equations"
  },
  {
    id: 3,
    question: "If the graph of $3x+4y=5$ is perpendicular to the graph of $kx+2y=5$, then $k =$ ",
    options: ["$-2$", "$-2.67$", "$2.15$", "$3.20$", "$4$"],
    correctAnswer: 1,
    explanation: "Slope of the first line: $m_1 = -\\frac{3}{4}$. Slope of the second line: $m_2 = -\\frac{k}{2}$. Since they are perpendicular, $m_1 \\cdot m_2 = -1 \\Rightarrow \\left(-\\frac{3}{4}\\right)\\left(-\\frac{k}{2}\\right) = -1 \\Rightarrow \\frac{3k}{8} = -1 \\Rightarrow k = -\\frac{8}{3} \\approx -2.67$.",
    category: "Linear Equations"
  },
  {
    id: 4,
    question: "Figure 1 shows the graph of the linear function whose equation is defined by $f(x) = -\\frac{3}{4}x+3$. What is the value of $\\theta$ formed by the line and x-axis?",
    options: ["$36.9^\\circ$", "$-36.9^\\circ$", "$45.5^\\circ$", "$-45.5^\\circ$", "$55.8^\\circ$"],
    correctAnswer: 0,
    explanation: "The slope is $-\\frac{3}{4}$. In terms of the acute angle $\\theta$ shown in the referenced figure, $\\tan(\\theta) = \\frac{3}{4} \\Rightarrow \\theta = \\tan^{-1}\\left(\\frac{3}{4}\\right) \\approx 36.9^\\circ$.",
    category: "Linear Equations"
  },
  {
    id: 5,
    question: "If $f(x)=5$ for all real numbers $x$, then $f(x-2)+f(x+2)=$ ",
    options: ["$0$", "$2$", "$5$", "$10$", "$20$"],
    correctAnswer: 3,
    explanation: "Since $f(x)=5$ is a constant function for any input, $f(x-2)=5$ and $f(x+2)=5$. Thus, $5+5=10$.",
    category: "Linear Equations"
  },
  {
    id: 6,
    question: "Figure 1 shows the graph of the equation $2x-3y+9=0$. What is the angle $\\theta$ between the line and the positive x-axis?",
    options: ["$33.7^\\circ$", "$34.2^\\circ$", "$37.8^\\circ$", "$38.1^\\circ$", "$40.6^\\circ$"],
    correctAnswer: 0,
    explanation: "$2x-3y+9=0 \\Rightarrow 3y = 2x+9 \\Rightarrow y = \\frac{2}{3}x+3$. The slope is $2/3$. Using $\\tan(\\theta) = \\frac{2}{3} \\Rightarrow \\theta = \\tan^{-1}\\left(\\frac{2}{3}\\right) \\approx 33.7^\\circ$.",
    category: "Linear Equations"
  },
  {
    id: 7,
    question: "In Figure 1, if $\\triangle ABC$ is equilateral, what is the slope of $\\overline{BC}$? The coordinates of the base on the x-axis are $A(2,0)$ and $B(6,0)$.",
    options: ["$-\\sqrt{3}$", "$-\\sqrt{2}$", "$-1$", "$1$", "$\\sqrt{3}$"],
    correctAnswer: 0,
    explanation: "The side length is $AB = 6-2=4$. The midpoint of the base is $M(4,0)$. The height of the equilateral triangle is $\\frac{\\sqrt{3}}{2} \\times 4 = 2\\sqrt{3}$. So $C$ is $(4, 2\\sqrt{3})$. The slope of $BC$ is $\\frac{2\\sqrt{3}-0}{4-6} = \\frac{2\\sqrt{3}}{-2} = -\\sqrt{3}$.",
    category: "Linear Equations"
  },
  {
    id: 8,
    question: "Tyrone invented a new type of camera. A company will pay him $400,000 for his invention and 10 cents for each of the cameras sold. Which of the following represents the total amount of money, in dollars, Tyrone will receive if $n$ cameras are sold?",
    options: ["$(400,010)^n$", "$400,010n$", "$400,000.10n$", "$400,000 + 10n$", "$400,000 + 0.10n$"],
    correctAnswer: 4,
    explanation: "The fixed amount is $400,000 dollars. The rate per camera is 10 cents, which is $0.10 dollars. Therefore, the total is $400,000 + 0.10n$.",
    category: "Linear Equations"
  },
  {
    id: 9,
    question: "An equation of a line $\\ell$ passing through $(0, 4)$ and $(3, 0)$ is ",
    options: ["$3x-4y-4=0$", "$3x+4y-4=0$", "$4x-3y-4=0$", "$4x+3y+12=0$", "$4x+3y-12=0$"],
    correctAnswer: 4,
    explanation: "Using the intercept form: $\\frac{x}{3} + \\frac{y}{4} = 1$. Multiplying by 12 gives $4x+3y=12 \\Rightarrow 4x+3y-12=0$.",
    category: "Linear Equations"
  },
  {
    id: 10,
    question: "If line $\\ell$ is perpendicular to the line $y=3x$ and intersects the x-axis at $B(3,0)$ and the y-axis at $A$, forming $\\triangle ABO$, then what is the area of $\\triangle ABO$?",
    options: ["$1$", "$1.5$", "$2$", "$2.5$", "$3$"],
    correctAnswer: 1,
    explanation: "The slope of $y=3x$ is $3$, so the slope of line $\\ell$ is $-1/3$. The equation of $\\ell$ passing through $(3,0)$ is $y-0 = -\\frac{1}{3}(x-3) \\Rightarrow y = -\\frac{1}{3}x + 1$. Its y-intercept is $1$, so $A$ is $(0,1)$. The area of the triangle is $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 3 \\times 1 = 1.5$.",
    category: "Linear Equations"
  },
  {
    id: 11,
    question: "Which equation represents a line passing through $(1, 2)$ that is parallel to $2x-4y=1$?",
    options: ["$2y-x=3$", "$2y+x=3$", "$x-2y=0$", "$2x-1=4y$", "$2y+x=5$"],
    correctAnswer: 0,
    explanation: "$2x-4y=1 \\Rightarrow 4y = 2x-1 \\Rightarrow y = \\frac{1}{2}x - \\frac{1}{4}$. The given slope is $1/2$. The parallel line has slope $1/2$ and passes through $(1,2)$. $y-2 = \\frac{1}{2}(x-1) \\Rightarrow 2y-4 = x-1 \\Rightarrow 2y-x=3$.",
    category: "Linear Equations"
  },
  {
    id: 12,
    question: "Which of the following relations are functions according to the vertical line test?\nGraph 1: A sideways parabola opening left.\nGraph 2: A hyperbola opening left and right.\nGraph 3: A sinusoidal wave.\nGraph 4: A sideways parabola opening right.\nGraph 5: A piecewise linear graph representing an absolute value function.",
    options: ["$1$ and $2$", "$1$ and $3$", "$3$ and $5$", "$4$ and $5$", "$1, 2,$ and $5$"],
    correctAnswer: 2,
    explanation: "According to the vertical line test, only Graph 3 (wave) and Graph 5 (piecewise absolute value) intersect any vertical line at most once. The others intersect vertical lines at two points.",
    category: "Polynomials"
  },
  {
    id: 13,
    question: "If the points $(3,7), (1, k)$, and $(-1,1)$ are collinear, what is the value of $k$?",
    options: ["$2$", "$4$", "$5$", "$7$", "$8$"],
    correctAnswer: 1,
    explanation: "The slope between $(3,7)$ and $(-1,1)$ is $\\frac{7-1}{3-(-1)} = \\frac{6}{4} = \\frac{3}{2}$. The slope between $(1,k)$ and $(-1,1)$ must be the same: $\\frac{k-1}{1-(-1)} = \\frac{k-1}{2}$. Setting them equal: $\\frac{k-1}{2} = \\frac{3}{2} \\Rightarrow k-1=3 \\Rightarrow k=4$.",
    category: "Linear Equations"
  },
  {
    id: 14,
    question: "Which could be a second equation for the system $\\begin{cases} 2y = 5x+2 \\\\ ? \\end{cases}$ so that it will have an infinite number of solutions?",
    options: ["$2y=10x+4$", "$5y=2x+2$", "$2y=5x+1$", "$4y=10x+4$", "$4y=-10x+4$"],
    correctAnswer: 3,
    explanation: "For the system to have an infinite number of solutions, the second equation must be a multiple of the first one. Multiplying $2y=5x+2$ by $2$ gives $4y=10x+4$.",
    category: "Linear Equations"
  },
  {
    id: 15,
    question: "The point of set $(x, y)$ such that $x^2-y^2=0$ is ",
    options: ["A circle", "An ellipse", "A hyperbola", "A point", "Two lines"],
    correctAnswer: 4,
    explanation: "$x^2-y^2=0$ factors as $(x-y)(x+y)=0$, which implies $y=x$ or $y=-x$. This represents two lines intersecting at the origin.",
    category: "Polynomials"
  },
  {
    id: 16,
    question: "Which of the following is the equation whose graph is the set of points equidistant from points $(0, 4)$ and $(2, 0)$?",
    options: ["$y=x+1$", "$y=2x+1$", "$y=\\frac{1}{2}x+\\frac{1}{2}$", "$y=\\frac{1}{2}x+\\frac{3}{2}$", "$y=\\frac{1}{4}x-\\frac{3}{2}$"],
    correctAnswer: 3,
    explanation: "The set of equidistant points is the perpendicular bisector of the segment connecting the two points. The midpoint is $(1, 2)$. The slope of the segment is $\\frac{4-0}{0-2} = -2$. The perpendicular slope is $\\frac{1}{2}$. Equation: $y-2 = \\frac{1}{2}(x-1) \\Rightarrow y = \\frac{1}{2}x + \\frac{3}{2}$.",
    category: "Linear Equations"
  },
  {
    id: 17,
    question: "Which of the following is an equation whose graph is the set of points equidistant from the point $(0, 4)$ and $(2, 2)$?",
    options: ["$y=2$", "$x=2$", "$y=x$", "$y=x+2$", "$y=-x-2$"],
    correctAnswer: 3,
    explanation: "The midpoint is $(1, 3)$. The slope of the segment is $\\frac{4-2}{0-2} = -1$. The perpendicular slope is $1$. The equation is $y-3 = 1(x-1) \\Rightarrow y = x+2$.",
    category: "Linear Equations"
  },
  {
    id: 18,
    question: "In Figure 2, $f(x)=x+b$ is tangent to the graph of a circle whose equation is $x^2+y^2=4$. If the y-intercept $b$ is negative, what is the value of $b$?",
    options: ["$-5.45$", "$-3.48$", "$-2.14$", "$-2.21$", "$-2.83$"],
    correctAnswer: 4,
    explanation: "Substitute $y=x+b$ into $x^2+y^2=4$: $x^2+(x+b)^2=4 \\Rightarrow 2x^2+2bx+b^2-4=0$. The discriminant must be zero for tangency: $(2b)^2 - 4(2)(b^2-4) = 0 \\Rightarrow -4b^2+32=0 \\Rightarrow b^2=8 \\Rightarrow b=\\pm 2\\sqrt{2}$. Given $b$ is negative, $b = -2\\sqrt{2} \\approx -2.83$.",
    category: "Linear Equations"
  },
  {
    id: 19,
    question: "In Figure 6, point $P$ is on the x-axis. What is the minimum length of $\\overline{AP}+\\overline{PB}$ given $A(-2,3)$ and $B(3,4)$?",
    options: ["$7.48$", "$8.60$", "$9.25$", "$9.75$", "$13.75$"],
    correctAnswer: 1,
    explanation: "To find the minimum length, reflect point $A$ across the x-axis to $A'(-2, -3)$. The minimum distance is the straight line $A'B$: $\\sqrt{(3 - (-2))^2 + (4 - (-3))^2} = \\sqrt{5^2 + 7^2} = \\sqrt{74} \\approx 8.60$.",
    category: "Linear Equations"
  },
  {
    id: 20,
    question: "The line $ax+by-4=0$ forms a triangular region with the x-axis and y-axis. What is the area of the region in terms of $a$ and $b$?",
    options: ["$\\frac{2}{|ab|}$", "$\\frac{4}{|ab|}$", "$\\frac{|ab|}{8}$", "$\\frac{|ab|}{16}$", "$\\frac{8}{|ab|}$"],
    correctAnswer: 4,
    explanation: "The x-intercept is $\\frac{4}{a}$ and the y-intercept is $\\frac{4}{b}$. The area of the right triangle is $\\frac{1}{2} \\left|\\frac{4}{a}\\right| \\left|\\frac{4}{b}\\right| = \\frac{8}{|ab|}$.",
    category: "Linear Equations"
  },
  {
    id: 21,
    question: "If the line through $(5, 4)$ and $(2, k)$ is perpendicular to the line with equation $3x-4y=4$, what is the value of $k$?",
    options: ["$2$", "$4$", "$6$", "$8$", "$10$"],
    correctAnswer: 3,
    explanation: "The slope of $3x-4y=4$ is $3/4$. Therefore, the perpendicular slope is $-4/3$. The slope between $(5,4)$ and $(2,k)$ is $\\frac{k-4}{2-5} = \\frac{k-4}{-3}$. Setting them equal: $\\frac{k-4}{-3} = -\\frac{4}{3} \\Rightarrow k-4=4 \\Rightarrow k=8$.",
    category: "Linear Equations"
  },
  {
    id: 22,
    question: "In Figure 7, $A, B$, and $C$, the upper-left vertices of three adjacent squares resting on the x-axis, are collinear. The first square has side length 4, the second has side length 7, and the third has side length $k$. What is the value of $k$?",
    options: ["$8.45$", "$10.38$", "$12.25$", "$13.12$", "$13.74$"],
    correctAnswer: 2,
    explanation: "The vertices' coordinates are $A(0, 4)$ for the 1st square, $B(4, 7)$ for the 2nd square, and $C(4+7, k) = (11, k)$ for the 3rd square. Since they are collinear, the slopes of $AB$ and $BC$ are equal: $\\frac{7-4}{4-0} = \\frac{k-7}{11-4} \\Rightarrow \\frac{3}{4} = \\frac{k-7}{7} \\Rightarrow 21 = 4(k-7) \\Rightarrow 4k=49 \\Rightarrow k=12.25$.",
    category: "Linear Equations"
  },
  {
    id: 23,
    question: "Lines $p, q$, and $r$ all pass through the same point. Line $q$ is perpendicular to line $p$. Which alternative could be true about line $r$?",
    options: ["Line $r$ is parallel to line $p$.", "Line $r$ is parallel to line $q$.", "Lines $r$ and $p$ are coincident.", "Lines $r, p$, and $q$ are coincident.", "Lines $r, p$, and $q$ are parallel."],
    correctAnswer: 2,
    explanation: "Since lines $p, q$ and $r$ intersect at the same point, they cannot be parallel unless they are coincident. Because $p$ and $q$ are perpendicular, $r$ cannot coincide with both. $r$ must pass through the intersection, so it could coincide with one of them. Thus, 'Lines $r$ and $p$ are coincident' is possible.",
    category: "Linear Equations"
  },
  {
    id: 24,
    question: "If $a(x+2) + b(x-1) = 3$ for all $x$, then $a =$ ",
    options: ["$-1$", "$0$", "$1$", "$2$", "$3$"],
    correctAnswer: 2,
    explanation: "Expand the formula: $(a+b)x + (2a-b) = 3$. This gives the system: $a+b=0$ and $2a-b=3$. Adding them gives $3a=3 \\Rightarrow a=1$.",
    category: "Polynomials"
  },
  {
    id: 25,
    question: "If $a(x+1) + b(x-1) - 2 = 0$ for all real $x$, then $a =$ ",
    options: ["$-2$", "$-1$", "$0$", "$1$", "$2$"],
    correctAnswer: 3,
    explanation: "Expand the formula: $(a+b)x + (a-b-2) = 0$. Equating coefficients to zero: $a+b=0$ and $a-b=2$. Adding them gives $2a=2 \\Rightarrow a=1$.",
    category: "Polynomials"
  },
  {
    id: 26,
    question: "Which is the negation of the statement \"Some numbers are even\"?",
    options: ["All numbers are even.", "Some numbers are not even.", "All numbers are not even.", "All numbers are odd.", "Some numbers are not odd."],
    correctAnswer: 2,
    explanation: "The negation of \"Some elements have property P\" ($\\exists x, P(x)$) is \"All elements do not have property P\" ($\\forall x, \\neg P(x)$). Hence, \"All numbers are not even\".",
    category: "Polynomials"
  },
  {
    id: 27,
    question: "If $x$ and $y$ are positive integers and $x^2-y^2=21$, then which of the following could be the value of $x$?",
    options: ["$13$", "$11$", "$10$", "$9$", "$4$"],
    correctAnswer: 1,
    explanation: "$(x-y)(x+y) = 21$. Since $x$ and $y$ are positive integers, the factors of 21 are $1 \\times 21$ and $3 \\times 7$. Set $x-y=1$ and $x+y=21 \\Rightarrow 2x=22 \\Rightarrow x=11$. Alternatively, $x-y=3$ and $x+y=7 \\Rightarrow 2x=10 \\Rightarrow x=5$. Both 11 and 5 are possible. Choice 11 is an option.",
    category: "Polynomials"
  },
  {
    id: 28,
    question: "If $a+b=2$ and $ab=-1$, then $a^2+b^2=$ ",
    options: ["$4$", "$5$", "$6$", "$8$", "$10$"],
    correctAnswer: 2,
    explanation: "$(a+b)^2 = a^2+b^2+2ab \\Rightarrow 2^2 = a^2+b^2+2(-1) \\Rightarrow 4 = a^2+b^2-2 \\Rightarrow a^2+b^2=6$.",
    category: "Polynomials"
  },
  {
    id: 29,
    question: "Which of the following ordered pairs is not an element of the greatest-integer function $y = \\lfloor \\frac{x}{2} \\rfloor$?",
    options: ["$(8, 4)$", "$(2.78, 1)$", "$(-4.8, -3)$", "$(-5.64, -2)$", "$(\\sqrt{10}, 1)$"],
    correctAnswer: 3,
    explanation: "For $x=-5.64$, $\\lfloor \\frac{-5.64}{2} \\rfloor = \\lfloor -2.82 \\rfloor = -3$. Therefore, $(-5.64, -2)$ is incorrect; it should be $(-5.64, -3)$.",
    category: "Polynomials"
  },
  {
    id: 30,
    question: "If the sum of the proper divisors of a number, excluding the number itself, is equal to the number, the number is called a \"perfect number\". Which of the following numbers is a perfect one?",
    options: ["$20$", "$12$", "$15$", "$28$", "$16$"],
    correctAnswer: 3,
    explanation: "For 28, the proper divisors are 1, 2, 4, 7, 14. Their sum is $1+2+4+7+14=28$.",
    category: "Polynomials"
  },
  {
    id: 31,
    question: "If $\\frac{x-\\frac{1}{x}}{1-\\frac{1}{x^2}} = 5$, what is the value of $x$?",
    options: ["$-5$", "$-3$", "$-1.25$", "$1.25$", "$5$"],
    correctAnswer: 4,
    explanation: "Multiply numerator and denominator by $x^2$: $\\frac{x^3-x}{x^2-1} = \\frac{x(x^2-1)}{x^2-1} = x$. Therefore, $x=5$. Note this holds for $x \\neq \\pm 1$.",
    category: "Polynomials"
  },
  {
    id: 32,
    question: "If $\\sqrt{a} + \\sqrt{b} = 4.6$ and $a+b = 13.46$, then $ab =$ ",
    options: ["$1.21$", "$3.85$", "$7.7$", "$12.25$", "$14.8225$"],
    correctAnswer: 4,
    explanation: "$(\\sqrt{a}+\\sqrt{b})^2 = a+b+2\\sqrt{ab} \\Rightarrow (4.6)^2 = 13.46 + 2\\sqrt{ab} \\Rightarrow 21.16 = 13.46 + 2\\sqrt{ab} \\Rightarrow 7.7 = 2\\sqrt{ab} \\Rightarrow \\sqrt{ab} = 3.85 \\Rightarrow ab = (3.85)^2 = 14.8225$.",
    category: "Polynomials"
  },
  {
    id: 33,
    question: "Consider $P(x) = ax^2 + bx + c$ ($a \\neq 0$), a polynomial of second degree in which $P(0) = 1$. If $P(x+1) - P(x) = 4x$, what are the values of $a, b$ and $c$?",
    options: ["$a=2, b=2, c=0$", "$a=2, b=2, c=1$", "$a=1, b=2, c=1$", "$a=-2, b=-2, c=1$", "$a=2, b=-2, c=1$"],
    correctAnswer: 4,
    explanation: "Since $P(0)=1$, $c=1$. Then $P(x+1) - P(x) = [a(x+1)^2+b(x+1)+1] - [ax^2+bx+1] = a(x^2+2x+1)+bx+b+1 - ax^2-bx-1 = 2ax + a+b$. Setting $2ax+a+b = 4x$ matches $2a=4 \\Rightarrow a=2$ and $a+b=0 \\Rightarrow 2+b=0 \\Rightarrow b=-2$. So $a=2, b=-2, c=1$.",
    category: "Polynomials"
  },
  {
    id: 34,
    question: "Which of the following is the equation of the polynomial with real coefficients and roots $1-\\sqrt{2}$ and $i$?",
    options: ["$x^3+x+1$", "$x^3-2$", "$x^4-2$", "$x^4-3x^2+2$", "$x^4-2x^3-2x-1$"],
    correctAnswer: 4,
    explanation: "Assuming rational coefficients, conjugate roots are $1+\\sqrt{2}$ and $-i$. The quadratic with roots $1\\pm \\sqrt{2}$ is $(x-1)^2 - 2 = x^2-2x-1$. The quadratic with roots $\\pm i$ is $x^2+1$. Multiply them: $(x^2-2x-1)(x^2+1) = x^4+x^2-2x^3-2x-x^2-1 = x^4-2x^3-2x-1$.",
    category: "Polynomials"
  },
  {
    id: 35,
    question: "If $f(2x) = \\frac{x}{3}$, then $f(x) =$ ",
    options: ["$\\frac{2x}{3}$", "$\\frac{x}{3}$", "$\\frac{x}{6}$", "$3x$", "$6x$"],
    correctAnswer: 2,
    explanation: "Let $u = 2x$, so $x = \\frac{u}{2}$. Substituting gives $f(u) = \\frac{u/2}{3} = \\frac{u}{6}$. Thus $f(x) = \\frac{x}{6}$.",
    category: "Polynomials"
  },
  {
    id: 36,
    question: "Consider the functions below:\n$f(x) = 2x^3 - 4x + 1$\n$g(x) = 3x^{0.5} + 3x^{-2} + 3$\n$h(x) = -\\sqrt{3}x^2 + 3x$\n$k(x) = \\frac{1}{3}x^2 + \\frac{2}{x}$\nWhich of these functions is a polynomial function?",
    options: ["$f$ and $g$", "$h$ and $g$", "$f$ and $h$", "$f, h$ and $g$", "$f, g, h$ and $k$"],
    correctAnswer: 2,
    explanation: "Polynomial functions must have non-negative integer powers of $x$. $f(x)$ is a polynomial. $g(x)$ has fractional and negative powers. $h(x)$ has proper integer powers. $k(x)$ has a variable in the denominator ($x^{-1}$). Therefore, $f$ and $h$ are polynomial functions.",
    category: "Polynomials"
  },
  {
    id: 37,
    question: "Which binomial is NOT a factor of $-x^3 + 2x^2 + x - 2$?",
    options: ["$x-1$", "$-x+2$", "$3-x$", "$x+1$", "$-x-1$"],
    correctAnswer: 2,
    explanation: "By the Factor Theorem, $P(a)=0$ if $(x-a)$ is a factor. For $3-x$, the root is $x=3$. Evaluating $P(3) = -(3)^3 + 2(3)^2 + 3 - 2 = -27 + 18 + 3 - 2 = -8 \\neq 0$. Thus $3-x$ is not a factor.",
    category: "Polynomials"
  },
  {
    id: 38,
    question: "Which equation shows $y+1 = \\sqrt{\\frac{x}{9}+3}$ rewritten in the form $y = a\\sqrt{x-h}+k$?",
    options: ["$y = 3\\sqrt{x-27}-1$", "$y = 3\\sqrt{x+27}-1$", "$y = \\frac{1}{9}\\sqrt{x+27}-1$", "$y = \\frac{1}{9}\\sqrt{x-3}-1$", "$y = \\frac{1}{3}\\sqrt{x+27}-1$"],
    correctAnswer: 4,
    explanation: "$y+1 = \\sqrt{\\frac{1}{9}(x+27)} = \\frac{1}{3}\\sqrt{x+27} \\Rightarrow y = \\frac{1}{3}\\sqrt{x+27} - 1$.",
    category: "Polynomials"
  },
  {
    id: 39,
    question: "Which value of x would not make the equation $\\frac{1}{x^2-4} = \\frac{-3x}{1-x^2}$ undefined?",
    options: ["$-2$", "$2$", "$1$", "$-1$", "$0$"],
    correctAnswer: 4,
    explanation: "An equation is undefined when its denominators are equal to zero. $x^2-4=0 \\Rightarrow x=\\pm 2$. $1-x^2=0 \\Rightarrow x=\\pm 1$.  Values of $\\pm 2$ and $\\pm 1$ make the equation undefined. Thus, $x=0$ is the only value providing a defined expression.",
    category: "Polynomials"
  },
  {
    id: 40,
    question: "The solution of the system defined by $x^2-x-2 \\ge 0$ and $\\frac{x-3}{x+2} \\le 0$ is:",
    options: ["$( - \\infty, -1] \\cup [2, + \\infty)$", "$[-2, 3]$", "$(-2, -1] \\cup [2, 3)$", "$(-2, -1] \\cup [2, 3]$", "$[-2, -1] \\cup [2, 3]$"],
    correctAnswer: 3,
    explanation: "First inequality: $(x-2)(x+1) \\ge 0$, which gives $x \\in (-\\infty, -1] \\cup [2, \\infty)$. Second inequality: roots $3$ and $-2$. Applying sign chart gives $x \\in (-2, 3]$. The intersection of both ranges is $(-2, -1] \\cup [2, 3]$.",
    category: "Polynomials"
  },
  {
    id: 41,
    question: "The function $f(x) = c(1-e^{-kx})$ is an exponential model used by psychologists to evaluate the learning process where $c$ is the total number of tasks to be learned, $k=19.8\\%$ is the rate of learning, $x$ is the time in days, and $f(x)$ is the number of tasks learned. The graph shows a point $(1, 0.9)$. What is the maximum number of tasks to be learned?",
    options: ["$1$", "$3$", "$4$", "$2$", "$5$"],
    correctAnswer: 4,
    explanation: "Substitute point $(1, 0.9)$ into the formula with $k=0.198$: $0.9 = c(1-e^{-0.198\\cdot 1}) \\Rightarrow c = \\frac{0.9}{1-e^{-0.198}} \\approx \\frac{0.9}{1-0.820} \\approx \\frac{0.9}{0.18} = 5$. Thus, 5 tasks max.",
    category: "Polynomials"
  },
  {
    id: 42,
    question: "If $x^2 = -2y-5$ and $z = -8y^3$, what is $x$ in terms of $z$?",
    options: ["$x = \\sqrt[3]{z}-5$", "$x = \\pm\\sqrt{\\sqrt[3]{z}-5}$", "$x = \\pm\\left(\\sqrt[3]{z}-5\\right)$", "$x = \\pm\\sqrt[6]{z} - \\sqrt{5}$", "$x = \\left(\\sqrt[3]{z}-5\\right)^2$"],
    correctAnswer: 1,
    explanation: "$z = -8y^3 \\Rightarrow y^3 = -\\frac{z}{8} \\Rightarrow y = -\\frac{\\sqrt[3]{z}}{2}$. Substituting into the other equation: $x^2 = -2\\left(-\\frac{\\sqrt[3]{z}}{2}\\right)-5 = \\sqrt[3]{z}-5 \\Rightarrow x = \\pm\\sqrt{\\sqrt[3]{z}-5}$.",
    category: "Polynomials"
  },
  {
    id: 43,
    question: "Using the learning model $f(x) = 5(1-e^{-0.198x})$, how many days will it take to learn 3 tasks?",
    options: ["Exactly $2$ days", "Exactly $4$ days", "Less than $3.5$ days", "At most $3.5$ days", "Not less than $4.5$ days"],
    correctAnswer: 4,
    explanation: "$3 = 5(1-e^{-0.198x}) \\Rightarrow 1-e^{-0.198x} = 0.6 \\Rightarrow e^{-0.198x} = 0.4 \\Rightarrow -0.198x = \\ln(0.4) \\approx -0.9163 \\Rightarrow x \\approx 4.63$. It takes slightly more than 4.6 days, which is not less than 4.5 days.",
    category: "Polynomials"
  },
  {
    id: 44,
    question: "If $f(3x-4) = 6x+5$ for all real numbers $x$, then $f(x) =$ ",
    options: ["$3x+4$", "$2x-15$", "$2x+13$", "$2x-10$", "$3x-13$"],
    correctAnswer: 2,
    explanation: "Let $u = 3x-4$, then $x = \\frac{u+4}{3}$. Substitute to find $f(u)$: $f(u) = 6\\left(\\frac{u+4}{3}\\right)+5 = 2(u+4)+5 = 2u+8+5 = 2u+13$. Thus $f(x) = 2x+13$.",
    category: "Polynomials"
  },
  {
    id: 45,
    question: "How many possible rational zeros does $f(x) = 2x^3+3x^2-8x+4$ have?",
    options: ["$6$", "$8$", "$10$", "$12$", "$14$"],
    correctAnswer: 1,
    explanation: "Rational Zero Theorem considers factors of the constant $4$ ($\\pm 1, \\pm 2, \\pm 4$) divided by factors of leading coefficient $2$ ($\\pm 1, \\pm 2$). Generating unique rational values gives $\\pm 1, \\pm 2, \\pm 4, \\pm \\frac{1}{2}$, making a total of $8$ possible rational zeros.",
    category: "Polynomials"
  },
  {
    id: 46,
    question: "If $a(x+1) + b(x-1) - (x+2) = 0$ for all real $x$, where $a$ and $b$ are constants, what is the value of $a$?",
    options: ["$1.5$", "$2.0$", "$2.5$", "$3.5$", "$4.5$"],
    correctAnswer: 0,
    explanation: "Expanding the expression gives $(a+b-1)x + (a-b-2) = 0$. Equating terms leads to $a+b=1$ and $a-b=2$. Adding equations: $2a=3 \\Rightarrow a=1.5$.",
    category: "Polynomials"
  },
  {
    id: 47,
    question: "Consider the three expressions $A = (x-1)(x-2)$, $B = (x-2)(x-3)$ and $C = (x-3)(x-4)$. $A - 2B + C$ is equal to",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$"],
    correctAnswer: 1,
    explanation: "Evaluating: $A = x^2-3x+2$, $B = x^2-5x+6$, $C = x^2-7x+12$. Taking $A - 2B + C = (x^2-3x+2) - 2(x^2-5x+6) + (x^2-7x+12) = x^2-3x+2 - 2x^2+10x-12 + x^2-7x+12 = 2$.",
    category: "Polynomials"
  },
  {
    id: 48,
    question: "If $f\\left(\\frac{2x-3}{3}\\right) = 4x-8$, then $f(2) =$ ",
    options: ["$8$", "$10$", "$12$", "$14$", "$16$"],
    correctAnswer: 1,
    explanation: "Set $\\frac{2x-3}{3} = 2 \\Rightarrow 2x-3 = 6 \\Rightarrow 2x=9 \\Rightarrow x=4.5$. Next, substitute to find $f$: $f(2) = 4(4.5)-8 = 18-8 = 10$.",
    category: "Polynomials"
  },
  {
    id: 49,
    question: "Consider the graph of a polynomial $f(x)$ that crosses the x-axis 3 times and possesses two maxima and two minima. Which of the following is an equation representation for the function?",
    options: ["I only", "II only", "II and III only", "I, II, and III", "None of those"],
    correctAnswer: 2,
    explanation: "The graph shows a polynomial that starts at $-\\infty$ (bottom-left) and ends at $\\infty$ (top-right). It presents $4$ turning points signifying it has an odd degree of at least 5. An odd-degree function bounded to approaches $\\infty$ must possess a positive leading coefficient. Thus expressions II (degree 5) and III (degree 7) represent functions possessing sufficient potential to map this model.",
    category: "Polynomials"
  },
  {
    id: 50,
    question: "Which of the following could be the solution to $\\lfloor n \\rfloor^2 - 2\\lfloor n \\rfloor = 3$, where $\\lfloor n \\rfloor$ is the greatest integer function?",
    options: ["$2 \\le n < 3$", "$0 \\le n < 1$", "$-1 < n < 0$", "$-1 \\le n < 0$", "$-1 < n \\le 0$"],
    correctAnswer: 3,
    explanation: "Let $x = \\lfloor n \\rfloor$. Consequently, solving $x^2-2x-3=0 \\Rightarrow (x-3)(x+1)=0$. Then $x=3$ or $x=-1$. Testing limits gives $\\lfloor n \\rfloor = -1 \\Rightarrow -1 \\le n < 0$.",
    category: "Polynomials"
  }
];
