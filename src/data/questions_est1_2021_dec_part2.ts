import { Question } from '../../types';

export const EST1_2021_DEC_PART2: Question[] = [
  {
    "id": "est1_2021_dec_q11",
    "examId": "EST12021Dec",
    
    
    "type": "multiple-choice",
    "question": "The graphs of $f(x) = ||x| - 2|$ and $g(x) = 1$ in the same system will have:",
    "options": [
      "0 points of intersection",
      "1 point of intersection",
      "2 points of intersection",
      "4 points of intersection"
    ],
    "correctAnswer": 3,
    "explanation": "To find points of intersection, set $f(x) = g(x)$:\\n$||x| - 2| = 1$\\nThis gives two cases:\\nCase 1: $|x| - 2 = 1 \\Rightarrow |x| = 3$. This gives $x = 3$ and $x = -3$.\\nCase 2: $|x| - 2 = -1 \\Rightarrow |x| = 1$. This gives $x = 1$ and $x = -1$.\\nSince we found 4 distinct values for $x$, the graphs will have 4 points of intersection."
  },
  {
    "id": "est1_2021_dec_q12",
    "examId": "EST12021Dec",
    
    "section": "Math No Calculator",
    "type": "multiple-choice",
    "question": "What is the coefficient of $x^3$ when $\\frac{2}{5}x^3 + 2x^2 - 3$ is multiplied by $5x + \\frac{2}{5}$?",
    "options": [
      "$10$",
      "$\\frac{4}{25}$",
      "$\\frac{54}{5}$",
      "$\\frac{254}{25}$"
    ],
    "correctAnswer": 3,
    "explanation": "To find the coefficient of $x^3$, we multiply terms whose exponents sum to 3:\\n1. $(\\frac{2}{5}x^3) \\times (\\frac{2}{5}) = \\frac{4}{25}x^3$\\n2. $(2x^2) \\times (5x) = 10x^3$\\nAdd these together: $\(\\frac{4}{25} + 10\\)x^3 = \\(\\frac{4}{25} + \\frac{250}{25}\\)x^3 = \\frac{254}{25}x^3$. Thus, the coefficient is $\\frac{254}{25}$."
  },
  {
    "id": "est1_2021_dec_q13",
    "examId": "EST12021Dec",
    
    "section": "Math No Calculator",
    "type": "multiple-choice",
    "question": "Which of the following is equivalent to the expression above, given that $x \\neq 3$?\\n$$ \\left(\\frac{2x - 3}{x - 3}\\right)^2 \\div \\frac{3}{2x - 6} $$",
    "options": [
      "$\\frac{2(2x-3)^2}{3(x-3)}$",
      "$\\frac{2(x-3)}{3(2x-3)^2}$",
      "$\\frac{2(2x-3)}{3(x-3)^2}$",
      "$\\frac{2(2x-3)^2}{3}$"
    ],
    "correctAnswer": 0,
    "explanation": "Rewrite the division as multiplication by the reciprocal:\\n$$ \\frac{(2x - 3)^2}{(x - 3)^2} \\times \\frac{2x - 6}{3} $$\\nFactor out 2 from $2x - 6$:\\n$$ \\frac{(2x - 3)^2}{(x - 3)^2} \\times \\frac{2(x - 3)}{3} $$\\nCancel one $(x - 3)$ term:\\n$$ \\frac{2(2x - 3)^2}{3(x - 3)} $$"
  },
  {
    "id": "est1_2021_dec_q14",
    "examId": "EST12021Dec",
    
    "section": "Math No Calculator",
    "type": "multiple-choice",
    "question": "The graph of an exponential function $K$ in the xy-plane, where $y = K(x)$ has a y-intercept of $h$, where $h$ is a negative constant number. Which of the following could be function $K$?",
    "options": [
      "$K(x) = -h(x)^3$",
      "$K(x) = 2(h)^x$",
      "$K(x) = h(4)^x$",
      "$K(x) = -\\sqrt{3}hx$"
    ],
    "correctAnswer": 2,
    "explanation": "The y-intercept occurs when $x = 0$. Therefore, $K(0)$ must equal $h$. Let's evaluate the options at $x = 0$:\\nA. $K(0) = -h(0)^3 = 0$\\nB. $K(0) = 2(h)^0 = 2(1) = 2$\\nC. $K(0) = h(4)^0 = h(1) = h$\\nD. $K(0) = -\\sqrt{3}h(0) = 0$\\nOnly option C gives a y-intercept of $h$ and is an exponential function of the form $C \\cdot a^x$."
  },
  {
    "id": "est1_2021_dec_q15",
    "examId": "EST12021Dec",
    
    "section": "Math No Calculator",
    "type": "multiple-choice",
    "question": "If C is a circle of center (2,0) and radius = 2, then which of the following points is inside the circle?",
    "options": [
      "$(1,3)$",
      "$(2,-2)$",
      "$(3,-1)$",
      "$(4,0)$"
    ],
    "correctAnswer": 2,
    "explanation": "The equation of the circle is $(x - 2)^2 + y^2 = 2^2 = 4$. For a point to be inside the circle, it must satisfy the inequality $(x - 2)^2 + y^2 < 4$.\\nTesting the points:\\nA. $(1-2)^2 + 3^2 = 1 + 9 = 10 > 4$\\nB. $(2-2)^2 + (-2)^2 = 0 + 4 = 4$ (On the circle)\\nC. $(3-2)^2 + (-1)^2 = 1 + 1 = 2 < 4$ (Inside the circle)\\nD. $(4-2)^2 + 0^2 = 4 + 0 = 4$ (On the circle)"
  },
  {
    "id": "est1_2021_dec_q16",
    "examId": "EST12021Dec",
    
    "section": "Math No Calculator",
    "type": "grid-in",
    "question": "In the figure above, d and d' are parallel lines, $\\angle 2 = 103^\\circ$, $\\angle 3 = 107^\\circ$ and $\\angle 4 = 97^\\circ$. What is the measure of $\\angle 1$? (Grid in)",
    "options": [
      "67"
    ],
    "correctAnswer": 0,
    "explanation": "By drawing parallel lines through each vertex and applying the rules of alternate interior angles for transversals, we can relate the angles on the left and right facing sides. Summing the corresponding angles yields the measure of $\\angle 1 = 67^\\circ$."
  },
  {
    "id": "est1_2021_dec_q17",
    "examId": "EST12021Dec",
    
    "section": "Math No Calculator",
    "type": "grid-in",
    "question": "$$ 3x - 1 = \\sqrt{3k^2 - x} $$\\nIf $k > 0$ and $x = 2$ in the equation above, what is the value of $k$? (Grid in)",
    "options": [
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "Substitute $x = 2$ into the equation:\\n$3(2) - 1 = \\sqrt{3k^2 - 2}$\\n$5 = \\sqrt{3k^2 - 2}$\\nSquare both sides:\\n$25 = 3k^2 - 2$\\n$27 = 3k^2$\\n$k^2 = 9$\\nSince $k > 0$, $k = 3$."
  },
  {
    "id": "est1_2021_dec_q18",
    "examId": "EST12021Dec",
    
    "section": "Math No Calculator",
    "type": "grid-in",
    "question": "In the figure above, ABCD is a square and points A, B and O lie on the parabola of equation $y = \\frac{1}{k}x^2$, where $k$ is a constant number. If the area of ABCD is $16 \\text{ cm}^2$, what is the value of $k$? (The figure is not drawn to scale). (Grid in)",
    "options": [
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "If the area of the square ABCD is 16, its side length is $\\sqrt{16} = 4$. Points A and B form the top horizontal side of the square and lie symmetrically on the parabola $y = \\frac{1}{k}x^2$. Since the total width AB is 4, the x-coordinate of B is $4/2 = 2$. The y-coordinate is the height of the square, which is 4. So point B is $(2, 4)$. Substitute $(2, 4)$ into the parabola's equation:\\n$4 = \\frac{1}{k}(2)^2$\\n$4 = \\frac{4}{k} \\Rightarrow k = 1$."
  },
  {
    "id": "est1_2021_dec_q19",
    "examId": "EST12021Dec",
    
    "section": "Math No Calculator",
    "type": "grid-in",
    "question": "| x | y |\\n|---|---|\\n| -4 | -9 |\\n| 0 | -1 |\\n| 2 | 3 |\\n| p | 9 |\\nIf the values in the table above represent a linear relationship between x and y, what is the value of p? (Grid in)",
    "options": [
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "First, calculate the slope $m$ using the points $(0, -1)$ and $(2, 3)$:\\n$m = \\frac{3 - (-1)}{2 - 0} = \\frac{4}{2} = 2$.\\nThe equation of the line is $y = 2x - 1$. Substitute $x = p$ and $y = 9$:\\n$9 = 2p - 1$\\n$10 = 2p \\Rightarrow p = 5$."
  },
  {
    "id": "est1_2021_dec_q20",
    "examId": "EST12021Dec",
    
    "section": "Math No Calculator",
    "type": "grid-in",
    "question": "How many asymptotes does the curve of the function $f$ defined by $f(x) = \\frac{x^2 - 3}{9 - x^2}$ admit? (Grid in)",
    "options": [
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "An asymptote exists where the function is undefined (vertical) or as $x$ approaches infinity (horizontal).\\nVertical asymptotes: The denominator is zero when $9 - x^2 = 0 \\Rightarrow x^2 = 9$. This gives $x = 3$ and $x = -3$. Neither makes the numerator zero, so there are 2 vertical asymptotes.\\nHorizontal asymptotes: As $x \\to \\pm\\infty$, the function approaches the ratio of the leading coefficients $\\frac{x^2}{-x^2} = -1$. This gives 1 horizontal asymptote.\\nTotal asymptotes = $2 + 1 = 3$."
  }
];
