import { Question } from '../../types';

export const EST2_POLYNOMIAL_2027_SET: Question[] = [
  {
    "id": "est2_poly_2027_1",
    "question": "If $3x + 7 = ax + b$ is true for all real values of $x$, what is the value of $2a - b$?",
    "options": [
      "$-1$",
      "$1$",
      "$13$",
      "$-13$"
    ],
    "correctAnswer": 0,
    "explanation": "For two polynomials to be identical for all $x$, the coefficients of corresponding powers of $x$ must be equal:\\n\\n- Coefficient of $x$: $a = 3$\\n- Constant term: $b = 7$\\n\\nNow compute the requested expression:\\n$$2a - b = 2(3) - 7 = 6 - 7 = -1$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Easy",
    "topics": [
      "Polynomials",
      "Equating Coefficients"
    ]
  },
  {
    "id": "est2_poly_2027_2",
    "question": "For all real values of $x$, the equation $3x^2 + (a - 3)x + (3b + 2) = 3x^2 + 8x - 5$ holds. What is the value of $a + b$?",
    "options": [
      "$\\frac{26}{3}$",
      "$\\frac{16}{3}$",
      "$\\frac{38}{3}$",
      "$-\\frac{26}{3}$"
    ],
    "correctAnswer": 0,
    "explanation": "Equating coefficients of identical powers on both sides:\\n\\n1. **Coefficients of $x$**:\\n$$a - 3 = 8 \\implies a = 11$$\\n\\n2. **Constant terms**:\\n$$3b + 2 = -5 \\implies 3b = -7 \\implies b = -\\frac{7}{3}$$\\n\\n3. **Calculate $a + b$**:\\n$$a + b = 11 + \\left(-\\frac{7}{3}\\right) = \\frac{33}{3} - \\frac{7}{3} = \\frac{26}{3}$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Easy",
    "topics": [
      "Polynomials",
      "Equating Coefficients"
    ]
  },
  {
    "id": "est2_poly_2027_3",
    "question": "If $5x^2 + (3a + 2b)x - 10b = 5x^2 - 30$ is an identity for all real values of $x$, what is the value of $a + b$?",
    "options": [
      "$1$",
      "$-1$",
      "$5$",
      "$-5$"
    ],
    "correctAnswer": 0,
    "explanation": "Comparing both sides of the identity $5x^2 + (3a + 2b)x - 10b = 5x^2 + 0x - 30$:\\n\\n1. **Constant terms**:\\n$$-10b = -30 \\implies b = 3$$\\n\\n2. **Coefficients of $x$**:\\n$$3a + 2b = 0$$\\nSubstitute $b = 3$:\\n$$3a + 2(3) = 0 \\implies 3a + 6 = 0 \\implies 3a = -6 \\implies a = -2$$\\n\\n3. **Sum $a + b$**:\\n$$a + b = -2 + 3 = 1$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Easy",
    "topics": [
      "Polynomials",
      "Equating Coefficients"
    ]
  },
  {
    "id": "est2_poly_2027_4",
    "question": "Let $g(x) = 3x^2 + 7x - 10$ and $f(x) = (a + 2)x^2 + (b - 3)x + c + 1$. If $f(x) = g(x)$ for all real numbers $x$, what is the value of $a + b + 2c$?",
    "options": [
      "$-11$",
      "$-1$",
      "$11$",
      "$-23$"
    ],
    "correctAnswer": 0,
    "explanation": "Equating coefficients of like terms between $f(x)$ and $g(x)$:\\n\\n1. **$x^2$ coefficient**:\\n$$a + 2 = 3 \\implies a = 1$$\\n\\n2. **$x$ coefficient**:\\n$$b - 3 = 7 \\implies b = 10$$\\n\\n3. **Constant term**:\\n$$c + 1 = -10 \\implies c = -11$$\\n\\n4. **Evaluate $a + b + 2c$**:\\n$$a + b + 2c = 1 + 10 + 2(-11) = 11 - 22 = -11$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "Equating Coefficients"
    ]
  },
  {
    "id": "est2_poly_2027_5",
    "question": "If $2x^3 - 5x^2 + cx - 8 = (2x - 1)(x^2 - 2x + d)$ for all real values of $x$, what is the value of $c + d$?",
    "options": [
      "$26$",
      "$18$",
      "$10$",
      "$22$"
    ],
    "correctAnswer": 0,
    "explanation": "Expand the right-hand side product:\\n$$(2x - 1)(x^2 - 2x + d) = 2x(x^2 - 2x + d) - 1(x^2 - 2x + d)$$\\n$$= 2x^3 - 4x^2 + 2dx - x^2 + 2x - d$$\\n$$= 2x^3 - 5x^2 + (2d + 2)x - d$$\\n\\nNow compare coefficients with the left-hand side $2x^3 - 5x^2 + cx - 8$:\\n1. Constant term: $-d = -8 \\implies d = 8$\\n2. Linear coefficient: $c = 2d + 2 = 2(8) + 2 = 18$\\n\\nTherefore:\\n$$c + d = 18 + 8 = 26$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "Polynomial Multiplication"
    ]
  },
  {
    "id": "est2_poly_2027_6",
    "question": "According to the formal mathematical definition of a polynomial, which of the following expressions is a polynomial?",
    "options": [
      "$y = 3x^{-2} + 7x^3 + 8$",
      "$y = 5x + 10\\sqrt{x} + 7$",
      "$y = 3x^2 + 10x - 8$",
      "$y = \\frac{4}{x^2 + 1} + 2x$"
    ],
    "correctAnswer": 2,
    "explanation": "A polynomial is a sum of terms in which the variable is raised only to non-negative integer powers ($0, 1, 2, \\dots$).\\n\\n- $y = 3x^{-2} + 7x^3 + 8$ is **not** a polynomial because the exponent $-2$ is negative.\\n- $y = 5x + 10\\sqrt{x} + 7 = 5x + 10x^{1/2} + 7$ is **not** a polynomial because the exponent $1/2$ is a fraction.\\n- $y = \\frac{4}{x^2 + 1} + 2x$ is a rational expression, not a polynomial.\\n- $y = 3x^2 + 10x - 8$ has exponents $2, 1, 0$, all of which are non-negative integers. Hence, it is a polynomial.",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Easy",
    "topics": [
      "Polynomials",
      "Definition of Polynomials"
    ]
  },
  {
    "id": "est2_poly_2027_7",
    "question": "For which integer value of $n$ is the expression $P(x) = 4x^{\\frac{12}{n}} - 3x^{n - 3} + 5$ a polynomial in $x$ of degree $4$?",
    "options": [
      "$3$",
      "$4$",
      "$6$",
      "$12$"
    ],
    "correctAnswer": 0,
    "explanation": "For $P(x)$ to be a polynomial of degree $4$:\\n1. The maximum non-negative integer exponent must be $4$. Setting the first exponent to $4$:\\n$$\\frac{12}{n} = 4 \\implies n = 3$$\\n2. Next, verify that the second exponent $n - 3$ is a non-negative integer when $n = 3$:\\n$$n - 3 = 3 - 3 = 0$$\\nSince $x^0 = 1$, the second term is $-3(1) = -3$, which is a valid constant term.\\n\\nThus, $n = 3$.",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "Degree of Polynomials"
    ]
  },
  {
    "id": "est2_poly_2027_8",
    "question": "For which values of $x$ is the rational function $g(x) = \\frac{x - 3}{(x - 2)(x^2 - x - 20)}$ undefined?",
    "options": [
      "$x = -4, 2, 5$",
      "$x = -5, 2, 4$",
      "$x = 2, 3, 5$",
      "$x = -4, 3, 5$"
    ],
    "correctAnswer": 0,
    "explanation": "A rational function is undefined wherever its denominator is equal to zero:\\n$$(x - 2)(x^2 - x - 20) = 0$$\\n\\nFactor the quadratic factor:\\n$$x^2 - x - 20 = (x - 5)(x + 4)$$\\n\\nSo the denominator becomes:\\n$$(x - 2)(x - 5)(x + 4) = 0$$\\n\\nSetting each factor to zero:\\n- $x - 2 = 0 \\implies x = 2$\\n- $x - 5 = 0 \\implies x = 5$\\n- $x + 4 = 0 \\implies x = -4$\\n\\nTherefore, the function is undefined for $x \\in \\{-4, 2, 5\\}$.",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Easy",
    "topics": [
      "Polynomials",
      "Rational Functions",
      "Domain"
    ]
  },
  {
    "id": "est2_poly_2027_9",
    "question": "The graph of the rational function $f(x)$ is shown below. It has a vertical asymptote at $x = -2$ and a removable discontinuity (hole) at $(3, 1)$. Which of the following functions could represent $f(x)$?",
    "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzIwIiB3aWR0aD0iNDUwIiBoZWlnaHQ9IjMyMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZmZmZiIvPgogIDwhLS0gR3JpZCBsaW5lcyAtLT4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkOSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGggZD0iTSAzMCAwIEwgMCAwIDAgMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZDkpIiAvPgogIAogIDwhLS0gQ29vcmRpbmF0ZSBBeGVzOiBDZW50ZXIgaXMgYXQgeD0yMDAsIHk9MTgwIC0tPgogIDwhLS0gWC1BeGlzICh5PTE4MCkgLS0+CiAgPGxpbmUgeDE9IjIwIiB5MT0iMTgwIiB4Mj0iNDMwIiB5Mj0iMTgwIiBzdHJva2U9IiMzMzQxNTUiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxwb2x5Z29uIHBvaW50cz0iNDMwLDE3NiA0MzgsMTgwIDQzMCwxODQiIGZpbGw9IiMzMzQxNTUiLz4KICA8dGV4dCB4PSI0MzAiIHk9IjE5OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzM0MTU1Ij54PC90ZXh0PgogIAogIDwhLS0gWS1BeGlzICh4PTIwMCkgLS0+CiAgPGxpbmUgeDE9IjIwMCIgeTE9IjMwMCIgeDI9IjIwMCIgeTI9IjIwIiBzdHJva2U9IiMzMzQxNTUiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxwb2x5Z29uIHBvaW50cz0iMTk2LDIwIDIwMCwxMiAyMDQsMjAiIGZpbGw9IiMzMzQxNTUiLz4KICA8dGV4dCB4PSIyMTIiIHk9IjI0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzQxNTUiPnk8L3RleHQ+CiAgCiAgPCEtLSBUaWNrcyBhbmQgbGFiZWxzIChTY2FsZTogMzBweCBwZXIgdW5pdCkgLS0+CiAgPCEtLSBPcmlnaW4gLS0+CiAgPHRleHQgeD0iMTg4IiB5PSIxOTYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjQ3NDhiIj4wPC90ZXh0PgogIDwhLS0geCB0aWNrczogLTQsIC0zLCAtMiwgLTEsIDEsIDIsIDMsIDQsIDUsIDYgLS0+CiAgPCEtLSB4ID0gLTIgaXMgYXQgMjAwIC0gNjAgPSAxNDAgLS0+CiAgPCEtLSB4ID0gMyBpcyBhdCAyMDAgKyA5MCA9IDI5MCAtLT4KICA8bGluZSB4MT0iMTQwIiB5MT0iMTc1IiB4Mj0iMTQwIiB5Mj0iMTg1IiBzdHJva2U9IiM2NDc0OGIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iMTMyIiB5PSIxOTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjZGMyNjI2Ij4tMjwvdGV4dD4KICAKICA8bGluZSB4MT0iMjkwIiB5MT0iMTc1IiB4Mj0iMjkwIiB5Mj0iMTg1IiBzdHJva2U9IiM2NDc0OGIiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iMjg2IiB5PSIxOTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjMjU2M2ViIj4zPC90ZXh0PgogIAogIDwhLS0geSA9IDEgaXMgYXQgMTgwIC0gMzAgPSAxNTAgLS0+CiAgPGxpbmUgeDE9IjE5NSIgeTE9IjE1MCIgeDI9IjIwNSIgeTI9IjE1MCIgc3Ryb2tlPSIjNjQ3NDhiIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDx0ZXh0IHg9IjE4NCIgeT0iMTU0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iIzI1NjNlYiI+MTwvdGV4dD4KICAKICA8IS0tIFZlcnRpY2FsIEFzeW1wdG90ZSBhdCB4ID0gLTIgKHg9MTQwKSAtLT4KICA8bGluZSB4MT0iMTQwIiB5MT0iMjAiIHgyPSIxNDAiIHkyPSIzMDAiIHN0cm9rZT0iI2RjMjYyNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI2LDQiLz4KICA8dGV4dCB4PSI3NSIgeT0iNDUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2RjMjYyNiI+Vi5BLiB4ID0gLTI8L3RleHQ+CiAgCiAgPCEtLSBDdXJ2ZSB5ID0gNSAvICh4ICsgMikgLS0+CiAgPCEtLSBMZWZ0IGJyYW5jaDogeCBmcm9tIC02IHRvIC0yLjMgLS0+CiAgPCEtLSB4PS02IC0+IHB4PTgwLCB5PTUvKC00KT0tMS4yNSAtPiBweT0xODAgKyAzNy41ID0gMjE3LjUgLS0+CiAgPCEtLSB4PS00IC0+IHB4PTExMCwgeT01LygtMik9LTIuNSAtPiBweT0xODAgKyA3NSA9IDI1NSAtLT4KICA8IS0tIHg9LTIuNSAtPiBweD0xMjUsIHk9NS8oLTAuNSk9LTEwIC0+IHB5PTE4MCArIDMwMCA9IDQ4MCAob2ZmKSAtLT4KICA8cGF0aCBkPSJNIDQwIDE4OCBRIDEwMCAxOTUgMTI1IDI5NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjU2M2ViIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogIAogIDwhLS0gUmlnaHQgYnJhbmNoOiB4IGZyb20gLTEuNyB0byA3IC0tPgogIDwhLS0geD0tMSAtPiBweD0xNzAsIHk9NS8oMSk9NSAtPiBweT0xODAgLSAxNTAgPSAzMCAtLT4KICA8IS0tIHg9MCAtPiBweD0yMDAsIHk9Mi41IC0+IHB5PTE4MCAtIDc1ID0gMTA1IC0tPgogIDwhLS0geD0zIC0+IHB4PTI5MCwgeT0xIC0+IHB5PTE4MCAtIDMwID0gMTUwIC0tPgogIDwhLS0geD02IC0+IHB4PTM4MCwgeT01Lzg9MC42MjUgLT4gcHk9MTgwIC0gMTguNzUgPSAxNjEuMjUgLS0+CiAgPHBhdGggZD0iTSAxNTUgMzUgUSAxNzUgMTIwIDI4NiAxNDkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICA8cGF0aCBkPSJNIDI5NCAxNTEgUSAzNTAgMTY1IDQxMCAxNzIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAKICA8IS0tIFJlbW92YWJsZSBkaXNjb250aW51aXR5IChIb2xlKSBhdCAoMywgMSkgLT4gKDI5MCwgMTUwKSAtLT4KICA8Y2lyY2xlIGN4PSIyOTAiIGN5PSIxNTAiIHI9IjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICA8dGV4dCB4PSIzMDIiIHk9IjE0NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMGYxNzJhIj5Ib2xlICgzLCAxKTwvdGV4dD4KICAKICA8IS0tIFRpdGxlIEJhZGdlIC0tPgogIDxyZWN0IHg9IjI1IiB5PSIxNSIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIyNiIgcng9IjYiIGZpbGw9IiNmOGZhZmMiIHN0cm9rZT0iI2NiZDVlMSIvPgogIDx0ZXh0IHg9IjM1IiB5PSIzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjNDc1NTY5Ij5HcmFwaCBvZiB5ID0gZih4KTwvdGV4dD4KPC9zdmc+",
    "options": [
      "$f(x) = \\frac{5(x - 3)}{(x - 3)(x + 2)}$",
      "$f(x) = \\frac{5(x + 2)}{(x - 3)(x + 2)}$",
      "$f(x) = \\frac{x - 3}{(x + 3)(x - 2)}$",
      "$f(x) = \\frac{x + 2}{(x - 3)^2}$"
    ],
    "correctAnswer": 0,
    "explanation": "1. A removable discontinuity (hole) at $x = 3$ requires the factor $(x - 3)$ to be present in both the numerator and the denominator so that it cancels out.\\n2. A vertical asymptote at $x = -2$ requires the factor $(x + 2)$ to remain in the denominator after cancellation.\\n3. Simplifying option A gives $f(x) = \\frac{5}{x + 2}$ for $x \\neq 3$.\\nEvaluating the $y$-value at the hole $x = 3$:\\n$$y = \\frac{5}{3 + 2} = \\frac{5}{5} = 1$$\\nThis exactly matches the hole at $(3, 1)$. Thus, option A is correct.",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "Rational Functions",
      "Asymptotes and Holes"
    ]
  },
  {
    "id": "est2_poly_2027_10",
    "question": "What is the remainder when the polynomial $P(x) = 3x^3 + 5x^2 - 7x + 2$ is divided by $x + 3$?",
    "options": [
      "$-13$",
      "$13$",
      "$-5$",
      "$5$"
    ],
    "correctAnswer": 0,
    "explanation": "By the Remainder Theorem, when a polynomial $P(x)$ is divided by $x - c$, the remainder is $P(c)$.\\n\\nHere, the divisor is $x + 3$, so set $x + 3 = 0 \\implies x = -3$.\\n\\nSubstitute $x = -3$ into $P(x)$:\\n$$P(-3) = 3(-3)^3 + 5(-3)^2 - 7(-3) + 2$$\\n$$= 3(-27) + 5(9) + 21 + 2$$\\n$$= -81 + 45 + 21 + 2 = -13$$\\n\\nThe remainder is $-13$.",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Easy",
    "topics": [
      "Polynomials",
      "Remainder Theorem"
    ]
  },
  {
    "id": "est2_poly_2027_11",
    "question": "What is the remainder when the polynomial $P(t) = t^{10} + 1$ is divided by $t + 1$?",
    "options": [
      "$2$",
      "$0$",
      "$-2$",
      "$1$"
    ],
    "correctAnswer": 0,
    "explanation": "By the Remainder Theorem, dividing $P(t)$ by $t + 1$ yields a remainder equal to $P(-1)$:\\n\\n$$P(-1) = (-1)^{10} + 1$$\\n\\nSince $10$ is an even exponent, $(-1)^{10} = 1$:\\n$$P(-1) = 1 + 1 = 2$$\\n\\nThe remainder is $2$.",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Easy",
    "topics": [
      "Polynomials",
      "Remainder Theorem"
    ]
  },
  {
    "id": "est2_poly_2027_12",
    "question": "The polynomial $P(x) = 2x^3 + 5kx + 7$ has a root at $x = -2$. What is the value of the constant $k$?",
    "options": [
      "$-0.9$",
      "$0.9$",
      "$-1.8$",
      "$1.8$"
    ],
    "correctAnswer": 0,
    "explanation": "If $x = -2$ is a root of $P(x)$, then $P(-2) = 0$:\\n\\n$$2(-2)^3 + 5k(-2) + 7 = 0$$\\n$$2(-8) - 10k + 7 = 0$$\\n$$-16 - 10k + 7 = 0$$\\n$$-9 - 10k = 0$$\\n$$10k = -9 \\implies k = -\\frac{9}{10} = -0.9$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "Roots and Zeros"
    ]
  },
  {
    "id": "est2_poly_2027_13",
    "question": "If $2x + 3$ is a factor of the quadratic polynomial $f(x) = 5x^2 + 2kx - 8$, what is the value of $k$?",
    "options": [
      "$\\frac{13}{12}$",
      "$\\frac{11}{12}$",
      "$-\\frac{13}{12}$",
      "$\\frac{7}{6}$"
    ],
    "correctAnswer": 0,
    "explanation": "By the Factor Theorem, if $2x + 3$ is a factor, then $f\\left(-\\frac{3}{2}\\right) = 0$ (or $x = -1.5$):\\n\\n$$5(-1.5)^2 + 2k(-1.5) - 8 = 0$$\\n$$5(2.25) - 3k - 8 = 0$$\\n$$11.25 - 8 - 3k = 0$$\\n$$3.25 - 3k = 0 \\implies 3k = 3.25$$\\n\\nExpress $3.25$ as a fraction: $3.25 = \\frac{13}{4}$:\\n$$k = \\frac{13}{4 \\times 3} = \\frac{13}{12} \\approx 1.083$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "Factor Theorem"
    ]
  },
  {
    "id": "est2_poly_2027_14",
    "question": "Which of the following linear binomials is a factor of $P(x) = 3x^4 - 10x + 7$?",
    "options": [
      "$x - 1$",
      "$x$",
      "$x + 1$",
      "$x - 2$"
    ],
    "correctAnswer": 0,
    "explanation": "According to the Factor Theorem, $x - c$ is a factor of $P(x)$ if and only if $P(c) = 0$.\\n\\nTest each option:\\n- For $x - 1$, test $x = 1$:\\n$$P(1) = 3(1)^4 - 10(1) + 7 = 3 - 10 + 7 = 0$$\\nSince $P(1) = 0$, $x - 1$ is a factor.\\n\\n- For $x = 0$: $P(0) = 7 \\neq 0$\\n- For $x = -1$: $P(-1) = 3(1) + 10 + 7 = 20 \\neq 0$\\n- For $x = 2$: $P(2) = 3(16) - 20 + 7 = 35 \\neq 0$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Easy",
    "topics": [
      "Polynomials",
      "Factor Theorem"
    ]
  },
  {
    "id": "est2_poly_2027_15",
    "question": "When the polynomial $P(x) = 5x^3 - 10kx^2 + 8$ is divided by $2x + 5$, the remainder is $5$. What is the value of $3k$?",
    "options": [
      "$-3.606$",
      "$-1.202$",
      "$3.606$",
      "$-2.404$"
    ],
    "correctAnswer": 0,
    "explanation": "Set the divisor to zero: $2x + 5 = 0 \\implies x = -2.5$.\\nBy the Remainder Theorem, $P(-2.5) = 5$:\\n\\n$$5(-2.5)^3 - 10k(-2.5)^2 + 8 = 5$$\\n$$5(-15.625) - 10k(6.25) + 8 = 5$$\\n$$-78.125 - 62.5k + 8 = 5$$\\n$$-70.125 - 62.5k = 5$$\\n$$-62.5k = 5 + 70.125 = 75.125$$\\n$$k = -\\frac{75.125}{62.5} = -1.202$$\\n\\nNow compute $3k$:\\n$$3k = 3(-1.202) = -3.606$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Hard",
    "topics": [
      "Polynomials",
      "Remainder Theorem"
    ]
  },
  {
    "id": "est2_poly_2027_16",
    "question": "Based on the Vertical Line Test shown in the graphs below, which of the four plotted relations represents $y$ as a function of $x$?",
    "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NDAgMzIwIiB3aWR0aD0iNTQwIiBoZWlnaHQ9IjMyMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZmZmZiIvPgogIAogIDwhLS0gUGFuZWwgMTogQ3VydmUgSSAoQ2lyY2xlKSAtLT4KICA8cmVjdCB4PSIxNSIgeT0iMTUiIHdpZHRoPSIyNDUiIGhlaWdodD0iMTM1IiByeD0iOCIgZmlsbD0iI2Y4ZmFmYyIgc3Ryb2tlPSIjZTJlOGYwIi8+CiAgPGxpbmUgeDE9IjI1IiB5MT0iODUiIHgyPSIyNTAiIHkyPSI4NSIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDxsaW5lIHgxPSIxMzUiIHkxPSIyNSIgeDI9IjEzNSIgeTI9IjE0MCIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDxjaXJjbGUgY3g9IjEzNSIgY3k9Ijg1IiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGMyNjI2IiBzdHJva2Utd2lkdGg9IjIuNSIvPgogIDwhLS0gVmVydGljYWwgbGluZSB0ZXN0IC0tPgogIDxsaW5lIHgxPSIxNTUiIHkxPSIzMCIgeDI9IjE1NSIgeTI9IjEzNSIgc3Ryb2tlPSIjN2MzYWVkIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWRhc2hhcnJheT0iNCw0Ii8+CiAgPGNpcmNsZSBjeD0iMTU1IiBjeT0iNTAiIHI9IjMuNSIgZmlsbD0iIzdjM2FlZCIvPgogIDxjaXJjbGUgY3g9IjE1NSIgY3k9IjEyMCIgcj0iMy41IiBmaWxsPSIjN2MzYWVkIi8+CiAgPHRleHQgeD0iMjUiIHk9IjM1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMxZTI5M2IiPkN1cnZlIEkgKENpcmNsZSk8L3RleHQ+CiAgPHRleHQgeD0iMTY1IiB5PSI0MiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjN2MzYWVkIj4yIGludGVyc2VjdGlvbnM8L3RleHQ+CgogIDwhLS0gUGFuZWwgMjogQ3VydmUgSUkgKFNpZGV3YXlzIFBhcmFib2xhKSAtLT4KICA8cmVjdCB4PSIyODAiIHk9IjE1IiB3aWR0aD0iMjQ1IiBoZWlnaHQ9IjEzNSIgcng9IjgiIGZpbGw9IiNmOGZhZmMiIHN0cm9rZT0iI2UyZThmMCIvPgogIDxsaW5lIHgxPSIyOTAiIHkxPSI4NSIgeDI9IjUxNSIgeTI9Ijg1IiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPGxpbmUgeDE9IjM3NSIgeTE9IjI1IiB4Mj0iMzc1IiB5Mj0iMTQwIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHBhdGggZD0iTSA0ODAgMzUgUSAzNjAgODUgNDgwIDEzNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGMyNjI2IiBzdHJva2Utd2lkdGg9IjIuNSIvPgogIDwhLS0gVmVydGljYWwgbGluZSB0ZXN0IC0tPgogIDxsaW5lIHgxPSI0MzAiIHkxPSIzMCIgeDI9IjQzMCIgeTI9IjEzNSIgc3Ryb2tlPSIjN2MzYWVkIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWRhc2hhcnJheT0iNCw0Ii8+CiAgPGNpcmNsZSBjeD0iNDMwIiBjeT0iNTUiIHI9IjMuNSIgZmlsbD0iIzdjM2FlZCIvPgogIDxjaXJjbGUgY3g9IjQzMCIgY3k9IjExNSIgcj0iMy41IiBmaWxsPSIjN2MzYWVkIi8+CiAgPHRleHQgeD0iMjkwIiB5PSIzNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMWUyOTNiIj5DdXJ2ZSBJSSAoU2lkZXdheXMgUGFyYWJvbGEpPC90ZXh0PgogIDx0ZXh0IHg9IjQzOCIgeT0iNDIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzdjM2FlZCI+MiBpbnRlcnNlY3Rpb25zPC90ZXh0PgoKICA8IS0tIFBhbmVsIDM6IEN1cnZlIElJSSAoVmVydGljYWwgRWxsaXBzZSkgLS0+CiAgPHJlY3QgeD0iMTUiIHk9IjE2NSIgd2lkdGg9IjI0NSIgaGVpZ2h0PSIxMzUiIHJ4PSI4IiBmaWxsPSIjZjhmYWZjIiBzdHJva2U9IiNlMmU4ZjAiLz4KICA8bGluZSB4MT0iMjUiIHkxPSIyMzUiIHgyPSIyNTAiIHkyPSIyMzUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8bGluZSB4MT0iMTM1IiB5MT0iMTc1IiB4Mj0iMTM1IiB5Mj0iMjkwIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPGVsbGlwc2UgY3g9IjEzNSIgY3k9IjIzNSIgcng9IjMwIiByeT0iNDgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2RjMjYyNiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICA8IS0tIFZlcnRpY2FsIGxpbmUgdGVzdCAtLT4KICA8bGluZSB4MT0iMTUwIiB5MT0iMTc1IiB4Mj0iMTUwIiB5Mj0iMjkwIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtZGFzaGFycmF5PSI0LDQiLz4KICA8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxOTUiIHI9IjMuNSIgZmlsbD0iIzdjM2FlZCIvPgogIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjI3NSIgcj0iMy41IiBmaWxsPSIjN2MzYWVkIi8+CiAgPHRleHQgeD0iMjUiIHk9IjE4NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMWUyOTNiIj5DdXJ2ZSBJSUkgKEVsbGlwc2UpPC90ZXh0PgogIDx0ZXh0IHg9IjE1OCIgeT0iMTkwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM3YzNhZWQiPjIgaW50ZXJzZWN0aW9uczwvdGV4dD4KCiAgPCEtLSBQYW5lbCA0OiBDdXJ2ZSBJViAoQ3ViaWMgUG9seW5vbWlhbCkgLS0+CiAgPHJlY3QgeD0iMjgwIiB5PSIxNjUiIHdpZHRoPSIyNDUiIGhlaWdodD0iMTM1IiByeD0iOCIgZmlsbD0iI2VjZmRmNSIgc3Ryb2tlPSIjMTBiOTgxIi8+CiAgPGxpbmUgeDE9IjI5MCIgeTE9IjIzNSIgeDI9IjUxNSIgeTI9IjIzNSIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDxsaW5lIHgxPSI0MDAiIHkxPSIxNzUiIHgyPSI0MDAiIHkyPSIyOTAiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8IS0tIEN1YmljIGN1cnZlIC0tPgogIDxwYXRoIGQ9Ik0gMzEwIDI4NSBDIDM2MCAyODUgMzY1IDE5MCA0MDAgMjM1IEMgNDM1IDI4MCA0NDAgMTg1IDQ5MCAxODUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE2YTM0YSIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICA8IS0tIFZlcnRpY2FsIGxpbmUgdGVzdCAtLT4KICA8bGluZSB4MT0iNDM1IiB5MT0iMTc1IiB4Mj0iNDM1IiB5Mj0iMjkwIiBzdHJva2U9IiMyNTYzZWIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtZGFzaGFycmF5PSI0LDQiLz4KICA8Y2lyY2xlIGN4PSI0MzUiIGN5PSIyNjUiIHI9IjQiIGZpbGw9IiMyNTYzZWIiLz4KICA8dGV4dCB4PSIyOTAiIHk9IjE4NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMTU4MDNkIj5DdXJ2ZSBJViAoQ3ViaWMgUG9seW5vbWlhbCk8L3RleHQ+CiAgPHRleHQgeD0iNDQyIiB5PSIyNzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzI1NjNlYiI+T25seSAxIHBvaW50ITwvdGV4dD4KPC9zdmc+",
    "options": [
      "Curve IV only",
      "Curve I and Curve IV",
      "Curve II and Curve III",
      "All four curves"
    ],
    "correctAnswer": 0,
    "explanation": "The **Vertical Line Test** states that a graph in the Cartesian plane defines $y$ as a function of $x$ if and only if no vertical line intersects the curve at more than one point.\\n\\n- **Curve I (Circle)**: A vertical line intersects it at 2 points $\\implies$ Not a function.\\n- **Curve II (Sideways Parabola)**: A vertical line intersects it at 2 points $\\implies$ Not a function.\\n- **Curve III (Ellipse)**: A vertical line intersects it at 2 points $\\implies$ Not a function.\\n- **Curve IV (Cubic Polynomial)**: Any vertical line intersects the curve at exactly one point $\\implies$ **Function**.\\n\\nTherefore, only Curve IV is a function.",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Easy",
    "topics": [
      "Polynomials",
      "Functions",
      "Vertical Line Test"
    ]
  },
  {
    "id": "est2_poly_2027_17",
    "question": "Determine whether the function $f(x) = 2\\sin(x) + 5x^2$ is an even function, an odd function, or neither.",
    "options": [
      "Neither even nor odd",
      "Even",
      "Odd",
      "Both even and odd"
    ],
    "correctAnswer": 0,
    "explanation": "Evaluate $f(-x)$ using the properties of sine and powers:\\n- $\\sin(-x) = -\\sin(x)$ (odd function)\\n- $(-x)^2 = x^2$ (even power)\\n\\n$$f(-x) = 2\\sin(-x) + 5(-x)^2 = -2\\sin(x) + 5x^2$$\\n\\nNow compare:\\n1. For **Even**: $f(-x) = f(x) \\implies -2\\sin(x) + 5x^2 = 2\\sin(x) + 5x^2 \\implies -2\\sin(x) = 2\\sin(x)$, which is false in general.\\n2. For **Odd**: $f(-x) = -f(x) \\implies -2\\sin(x) + 5x^2 = -(2\\sin(x) + 5x^2) = -2\\sin(x) - 5x^2 \\implies 5x^2 = -5x^2$, which is false in general.\\n\\nSince $f(-x) \\neq f(x)$ and $f(-x) \\neq -f(x)$, $f(x)$ is **neither even nor odd**.",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "Even and Odd Functions"
    ]
  },
  {
    "id": "est2_poly_2027_18",
    "question": "Which of the following polynomial functions is an odd function?",
    "options": [
      "$g(x) = 3x^5 - 4x^3 + 7x$",
      "$f(x) = x^4 - 6x^2 + 3$",
      "$h(x) = 2x^3 - x^2 + 5$",
      "$k(x) = x^6 + 2x$"
    ],
    "correctAnswer": 0,
    "explanation": "A polynomial is an odd function if and only if **all** of its terms have odd powers of $x$ (with no constant term, since a non-zero constant has degree $0$, which is even).\\n\\n- In $g(x) = 3x^5 - 4x^3 + 7x$, the powers are $5, 3, 1$ (all odd). Testing:\\n$$g(-x) = 3(-x)^5 - 4(-x)^3 + 7(-x) = -3x^5 + 4x^3 - 7x = -g(x)$$\\nThus, $g(x)$ is an odd function.\\n\\n- $f(x)$ has powers $4, 2, 0$, so it is even.\\n- $h(x)$ and $k(x)$ have mixed even and odd powers, so they are neither.",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Easy",
    "topics": [
      "Polynomials",
      "Even and Odd Functions"
    ]
  },
  {
    "id": "est2_poly_2027_19",
    "question": "The graph of an even polynomial function $f(x)$ is shown below. It passes through the points $(0, -4)$ and $(2, 0)$. If $f(1) = -3$, what is the value of $f(-2) + f(-1)$?",
    "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzIwIiB3aWR0aD0iNDUwIiBoZWlnaHQ9IjMyMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZmZmZiIvPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImdyaWQxOSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGggZD0iTSAzMCAwIEwgMCAwIDAgMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZDE5KSIgLz4KICAKICA8IS0tIEF4ZXMgKENlbnRlcjogeD0yMjUsIHk9MTYwKSAtLT4KICA8bGluZSB4MT0iMjAiIHkxPSIxNjAiIHgyPSI0MzAiIHkyPSIxNjAiIHN0cm9rZT0iIzMzNDE1NSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHBvbHlnb24gcG9pbnRzPSI0MzAsMTU2IDQzOCwxNjAgNDMwLDE2NCIgZmlsbD0iIzMzNDE1NSIvPgogIDx0ZXh0IHg9IjQzMCIgeT0iMTc4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzQxNTUiPng8L3RleHQ+CiAgCiAgPGxpbmUgeDE9IjIyNSIgeTE9IjMwMCIgeDI9IjIyNSIgeTI9IjIwIiBzdHJva2U9IiMzMzQxNTUiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxwb2x5Z29uIHBvaW50cz0iMjIxLDIwIDIyNSwxMiAyMjksMjAiIGZpbGw9IiMzMzQxNTUiLz4KICA8dGV4dCB4PSIyMzUiIHk9IjI0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzQxNTUiPnk8L3RleHQ+CiAgCiAgPCEtLSBTY2FsZTogNDBweCBwZXIgdW5pdCAtLT4KICA8IS0tIHggPSAtMiAtPiAyMjUgLSA4MCA9IDE0NSAtLT4KICA8IS0tIHggPSAtMSAtPiAyMjUgLSA0MCA9IDE4NSAtLT4KICA8IS0tIHggPSAxIC0+IDIyNSArIDQwID0gMjY1IC0tPgogIDwhLS0geCA9IDIgLT4gMjI1ICsgODAgPSAzMDUgLS0+CiAgPCEtLSB5ID0gLTQgLT4gMTYwICsgODAgPSAyNDAgKDIwcHggcGVyIHVuaXQgaW4geSkgLS0+CiAgPCEtLSB5ID0gLTMgLT4gMTYwICsgNjAgPSAyMjAgLS0+CiAgCiAgPCEtLSBDdXJ2ZTogeSA9IHheNCAtIDV4XjIgKyA0IG9yIHN0YW5kYXJkIGV2ZW4gY3VydmUgLS0+CiAgPCEtLSAoMCwgLTQpOiBweD0yMjUsIHB5PTI0MCAtLT4KICA8IS0tICgxLCAtMyk6IHB4PTI2NSwgcHk9MjIwIC0tPgogIDwhLS0gKC0xLCAtMyk6IHB4PTE4NSwgcHk9MjIwIC0tPgogIDwhLS0gKDIsIDApOiBweD0zMDUsIHB5PTE2MCAtLT4KICA8IS0tICgtMiwgMCk6IHB4PTE0NSwgcHk9MTYwIC0tPgogIDxwYXRoIGQ9Ik0gMTE1IDUwIEMgMTMwIDEzMCAxNjAgMjIwIDE4NSAyMjAgQyAyMDUgMjIwIDIxNSAyNDAgMjI1IDI0MCBDIDIzNSAyNDAgMjQ1IDIyMCAyNjUgMjIwIEMgMjkwIDIyMCAzMjAgMTMwIDMzNSA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjU2M2ViIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogIAogIDwhLS0gUG9pbnRzIC0tPgogIDxjaXJjbGUgY3g9IjIyNSIgY3k9IjI0MCIgcj0iNC41IiBmaWxsPSIjZGMyNjI2Ii8+CiAgPHRleHQgeD0iMjMzIiB5PSIyNDUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2RjMjYyNiI+KDAsIC00KTwvdGV4dD4KICAKICA8Y2lyY2xlIGN4PSIzMDUiIGN5PSIxNjAiIHI9IjQuNSIgZmlsbD0iIzE2YTM0YSIvPgogIDx0ZXh0IHg9IjMwMCIgeT0iMTUwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMxNmEzNGEiPigyLCAwKTwvdGV4dD4KICAKICA8Y2lyY2xlIGN4PSIxNDUiIGN5PSIxNjAiIHI9IjQuNSIgZmlsbD0iIzE2YTM0YSIvPgogIDx0ZXh0IHg9IjEyMCIgeT0iMTUwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMxNmEzNGEiPigtMiwgMCk8L3RleHQ+CiAgCiAgPGNpcmNsZSBjeD0iMjY1IiBjeT0iMjIwIiByPSI0IiBmaWxsPSIjMjU2M2ViIi8+CiAgPHRleHQgeD0iMjcyIiB5PSIyMTgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzI1NjNlYiI+KDEsIC0zKTwvdGV4dD4KICAKICA8Y2lyY2xlIGN4PSIxODUiIGN5PSIyMjAiIHI9IjQiIGZpbGw9IiMyNTYzZWIiLz4KICA8dGV4dCB4PSIxMzUiIHk9IjIxOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjU2M2ViIj4oLTEsIC0zKTwvdGV4dD4KICAKICA8IS0tIFN5bW1ldHJ5IGluZGljYXRvciAtLT4KICA8bGluZSB4MT0iMjI1IiB5MT0iMzAiIHgyPSIyMjUiIHkyPSIyOTAiIHN0cm9rZT0iI2Y1OWUwYiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjUsNSIvPgogIDxyZWN0IHg9IjI1IiB5PSIyMCIgd2lkdGg9IjE2NSIgaGVpZ2h0PSIyNiIgcng9IjYiIGZpbGw9IiNmZWYzYzciIHN0cm9rZT0iI2ZkZTY4YSIvPgogIDx0ZXh0IHg9IjMzIiB5PSIzNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjYjQ1MzA5Ij5FdmVuOiBTeW1tZXRyaWMgdy5yLnQgeS1heGlzPC90ZXh0Pgo8L3N2Zz4=",
    "options": [
      "$-3$",
      "$0$",
      "$3$",
      "$-7$"
    ],
    "correctAnswer": 0,
    "explanation": "Because $f(x)$ is an **even function**, it satisfies the algebraic identity $f(-x) = f(x)$ for all real numbers $x$ (reflectional symmetry across the $y$-axis):\\n\\n1. Since the graph passes through $(2, 0)$, $f(2) = 0$. By even symmetry:\\n$$f(-2) = f(2) = 0$$\\n\\n2. Since $f(1) = -3$, by even symmetry:\\n$$f(-1) = f(1) = -3$$\\n\\n3. Compute the sum:\\n$$f(-2) + f(-1) = 0 + (-3) = -3$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "Even Functions",
      "Symmetry"
    ]
  },
  {
    "id": "est2_poly_2027_20",
    "question": "Given the quadratic function $f(x) = \\frac{7}{2}x^2 - 8$, what is the simplified standard expression for $f(2x + 1)$?",
    "options": [
      "$14x^2 + 14x - 4.5$",
      "$14x^2 + 14x - 8$",
      "$7x^2 + 7x - 4.5$",
      "$14x^2 + 7x - 4.5$"
    ],
    "correctAnswer": 0,
    "explanation": "Substitute $(2x + 1)$ for $x$ into $f(x)$:\\n\\n$$f(2x + 1) = \\frac{7}{2}(2x + 1)^2 - 8$$\\n\\nExpand the binomial squared $(2x + 1)^2 = 4x^2 + 4x + 1$:\\n$$f(2x + 1) = \\frac{7}{2}(4x^2 + 4x + 1) - 8$$\\n$$= \\frac{7}{2}(4x^2) + \\frac{7}{2}(4x) + \\frac{7}{2}(1) - 8$$\\n$$= 14x^2 + 14x + 3.5 - 8$$\\n$$= 14x^2 + 14x - 4.5$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "Function Substitution"
    ]
  },
  {
    "id": "est2_poly_2027_21",
    "question": "If $f(3x - 1) = 7x + 2$ for all real numbers $x$, what is the expression for $f(x)$?",
    "options": [
      "$\\frac{7x + 13}{3}$",
      "$\\frac{7x - 1}{3}$",
      "$\\frac{7x + 5}{3}$",
      "$21x + 7$"
    ],
    "correctAnswer": 0,
    "explanation": "Use the method of substitution:\\nLet $k = 3x - 1$. Solve for $x$ in terms of $k$:\\n$$3x = k + 1 \\implies x = \\frac{k + 1}{3} = \\frac{k}{3} + \\frac{1}{3}$$\\n\\nSubstitute $x$ into the output formula:\\n$$f(k) = 7\\left(\\frac{k + 1}{3}\\right) + 2$$\\n$$= \\frac{7k + 7}{3} + \\frac{6}{3}$$\\n$$= \\frac{7k + 13}{3}$$\\n\\nReplacing the dummy variable $k$ with $x$ gives:\\n$$f(x) = \\frac{7x + 13}{3}$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "Function Transformations"
    ]
  },
  {
    "id": "est2_poly_2027_22",
    "question": "If $p(x) = x^2 - 3x + 4$ and $q(x) = 2x - 1$, what is the constant term of the composite polynomial $p(q(x))$?",
    "options": [
      "$8$",
      "$4$",
      "$2$",
      "$-1$"
    ],
    "correctAnswer": 0,
    "explanation": "The constant term of any polynomial $h(x)$ is equal to its value at $x = 0$, which is $h(0)$.\\n\\nHere, $h(x) = p(q(x))$, so the constant term is $p(q(0))$:\\n1. Find $q(0)$:\\n$$q(0) = 2(0) - 1 = -1$$\\n2. Evaluate $p(-1)$:\\n$$p(-1) = (-1)^2 - 3(-1) + 4 = 1 + 3 + 4 = 8$$\\n\\nThus, the constant term is $8$.",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "Composite Functions"
    ]
  },
  {
    "id": "est2_poly_2027_23",
    "question": "The graph of a degree $4$ polynomial $P(x)$ is shown below. It crosses the $x$-axis at $x = -2$ and $x = 0$, and is tangent to the $x$-axis at $x = 3$. If the graph passes through the point $(1, 24)$, what is the leading coefficient of $P(x)$?",
    "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzIwIiB3aWR0aD0iNDUwIiBoZWlnaHQ9IjMyMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZmZmZiIvPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImdyaWQyMyIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGggZD0iTSAzMCAwIEwgMCAwIDAgMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZDIzKSIgLz4KICAKICA8IS0tIEF4ZXM6IChDZW50ZXIgeD0xNzAsIHk9MTgwKSAtLT4KICA8IS0tIFNjYWxlOiA0MHB4IHBlciB1bml0IGluIHggLS0+CiAgPCEtLSB4PS0yOiAxNzAgLSA4MCA9IDkwIC0tPgogIDwhLS0geD0wOiAxNzAgLS0+CiAgPCEtLSB4PTE6IDE3MCArIDQwID0gMjEwIC0tPgogIDwhLS0geD0zOiAxNzAgKyAxMjAgPSAyOTAgLS0+CiAgPGxpbmUgeDE9IjIwIiB5MT0iMTgwIiB4Mj0iNDMwIiB5Mj0iMTgwIiBzdHJva2U9IiMzMzQxNTUiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxwb2x5Z29uIHBvaW50cz0iNDMwLDE3NiA0MzgsMTgwIDQzMCwxODQiIGZpbGw9IiMzMzQxNTUiLz4KICA8dGV4dCB4PSI0MzAiIHk9IjE5OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzM0MTU1Ij54PC90ZXh0PgogIAogIDxsaW5lIHgxPSIxNzAiIHkxPSIzMDAiIHgyPSIxNzAiIHkyPSIyMCIgc3Ryb2tlPSIjMzM0MTU1IiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cG9seWdvbiBwb2ludHM9IjE2NiwyMCAxNzAsMTIgMTc0LDIwIiBmaWxsPSIjMzM0MTU1Ii8+CiAgPHRleHQgeD0iMTgwIiB5PSIyNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzM0MTU1Ij55PC90ZXh0PgogIAogIDwhLS0gQ3VydmUgUCh4KSA9IDJ4KHgrMikoeC0zKV4yIC0tPgogIDwhLS0gQXQgeD0tMjogY3Jvc3NlcyBmcm9tIHBvc2l0aXZlIHRvIG5lZ2F0aXZlIC0tPgogIDwhLS0gQXQgeD0wOiBjcm9zc2VzIGZyb20gbmVnYXRpdmUgdG8gcG9zaXRpdmUgLS0+CiAgPCEtLSBBdCB4PTE6IHJlYWNoZXMgeT0yNCAocHg9MjEwLCBweT03MCkgLS0+CiAgPCEtLSBBdCB4PTM6IHRvdWNoZXMgeC1heGlzIChweT0xODApIGFuZCBib3VuY2VzIHVwIC0tPgogIDxwYXRoIGQ9Ik0gNTAgMzAgQyA3MCAxMjAgODAgMTgwIDkwIDE4MCBDIDExMCAxODAgMTIwIDI0MCAxNDUgMjQwIEMgMTYwIDI0MCAxNjUgMjAwIDE3MCAxODAgQyAxODUgMTAwIDE5NSA3MCAyMTAgNzAgQyAyMzUgNzAgMjYwIDE4MCAyOTAgMTgwIEMgMzE1IDE4MCAzNDAgMTAwIDM3MCAzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjU2M2ViIiBzdHJva2Utd2lkdGg9IjIuNSIvPgogIAogIDwhLS0gSW1wb3J0YW50IFBvaW50cyAtLT4KICA8IS0tIHggPSAtMiAoY3Jvc3NlcykgLS0+CiAgPGNpcmNsZSBjeD0iOTAiIGN5PSIxODAiIHI9IjQuNSIgZmlsbD0iI2RjMjYyNiIvPgogIDx0ZXh0IHg9Ijc1IiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2RjMjYyNiI+LTI8L3RleHQ+CiAgCiAgPCEtLSB4ID0gMCAoY3Jvc3NlcykgLS0+CiAgPGNpcmNsZSBjeD0iMTcwIiBjeT0iMTgwIiByPSI0LjUiIGZpbGw9IiNkYzI2MjYiLz4KICA8dGV4dCB4PSIxNTYiIHk9IjIwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjZGMyNjI2Ij4wPC90ZXh0PgogIAogIDwhLS0gUG9pbnQgKDEsIDI0KSAtLT4KICA8Y2lyY2xlIGN4PSIyMTAiIGN5PSI3MCIgcj0iNSIgZmlsbD0iIzdjM2FlZCIvPgogIDx0ZXh0IHg9IjIxOCIgeT0iNjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzdjM2FlZCI+KDEsIDI0KTwvdGV4dD4KICAKICA8IS0tIHggPSAzICh0YW5nZW50L2JvdW5jZSkgLS0+CiAgPGNpcmNsZSBjeD0iMjkwIiBjeT0iMTgwIiByPSI1IiBmaWxsPSIjMTZhMzRhIi8+CiAgPHRleHQgeD0iMjg2IiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzE2YTM0YSI+MzwvdGV4dD4KICA8dGV4dCB4PSIyNzAiIHk9IjIyNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiMxNmEzNGEiPlRhbmdlbnQgKEJvdW5jZSk8L3RleHQ+CiAgCiAgPHJlY3QgeD0iMjUiIHk9IjIwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjI2IiByeD0iNiIgZmlsbD0iI2Y4ZmFmYyIgc3Ryb2tlPSIjY2JkNWUxIi8+CiAgPHRleHQgeD0iMzUiIHk9IjM3IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM0NzU1NjkiPkRlZ3JlZSA0OiB5ID0gUCh4KTwvdGV4dD4KPC9zdmc+",
    "options": [
      "$2$",
      "$1$",
      "$-2$",
      "$\\frac{1}{2}$"
    ],
    "correctAnswer": 0,
    "explanation": "1. **Multiplicity of roots**:\\n- Crossing at $x = -2$ and $x = 0 \\implies$ simple roots of multiplicity $1$: factors $(x + 2)$ and $x$.\\n- Tangent (bouncing) at $x = 3 \\implies$ root of even multiplicity $2$: factor $(x - 3)^2$.\\n\\nSince $P(x)$ has degree $4$, its factored form is:\\n$$P(x) = a x (x + 2)(x - 3)^2$$\\n\\n2. **Find leading coefficient $a$ using the point $(1, 24)$**:\\n$$24 = a(1)(1 + 2)(1 - 3)^2$$\\n$$24 = a(1)(3)(-2)^2$$\\n$$24 = a(3)(4) = 12a$$\\n$$a = \\frac{24}{12} = 2$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Hard",
    "topics": [
      "Polynomials",
      "Multiplicity of Zeros",
      "Polynomial Graphs"
    ]
  },
  {
    "id": "est2_poly_2027_24",
    "question": "The graph of a polynomial function $P(x)$ is shown below. As $x \\to -\\infty$, $P(x) \\to \\infty$, and as $x \\to \\infty$, $P(x) \\to -\\infty$. The graph has two turning points. Which of the following statements must be true?",
    "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzIwIiB3aWR0aD0iNDUwIiBoZWlnaHQ9IjMyMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZmZmZiIvPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImdyaWQyNCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGggZD0iTSAzMCAwIEwgMCAwIDAgMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZDI0KSIgLz4KICAKICA8IS0tIEF4ZXM6IENlbnRlciB4PTIyNSwgeT0xNjAgLS0+CiAgPGxpbmUgeDE9IjIwIiB5MT0iMTYwIiB4Mj0iNDMwIiB5Mj0iMTYwIiBzdHJva2U9IiMzMzQxNTUiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxwb2x5Z29uIHBvaW50cz0iNDMwLDE1NiA0MzgsMTYwIDQzMCwxNjQiIGZpbGw9IiMzMzQxNTUiLz4KICA8dGV4dCB4PSI0MzAiIHk9IjE3OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzM0MTU1Ij54PC90ZXh0PgogIAogIDxsaW5lIHgxPSIyMjUiIHkxPSIzMDAiIHgyPSIyMjUiIHkyPSIyMCIgc3Ryb2tlPSIjMzM0MTU1IiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cG9seWdvbiBwb2ludHM9IjIyMSwyMCAyMjUsMTIgMjI5LDIwIiBmaWxsPSIjMzM0MTU1Ii8+CiAgPHRleHQgeD0iMjM1IiB5PSIyNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzM0MTU1Ij55PC90ZXh0PgogIAogIDwhLS0gQ3VydmU6IC0gKHgrMikoeCkoeC0yKSA9IC14XjMgKyA0eCAtLT4KICA8IS0tIEFzIHggLT4gLWluZiwgeSAtPiAraW5mIChRdWFkIElJKSAtLT4KICA8IS0tIExvY2FsIG1pbiBhdCB4ID0gLTEuMTUsIHkgPSAtMy4wNyAocHggPSAxNjAsIHB5ID0gMjE1KSAtLT4KICA8IS0tIExvY2FsIG1heCBhdCB4ID0gMS4xNSwgeSA9IDMuMDcgKHB4ID0gMjkwLCBweSA9IDEwNSkgLS0+CiAgPCEtLSBBcyB4IC0+ICtpbmYsIHkgLT4gLWluZiAoUXVhZCBJVikgLS0+CiAgPHBhdGggZD0iTSA5MCAzNSBDIDEzMCAxMTAgMTQwIDIyMCAxNzAgMjIwIEMgMjAwIDIyMCAyMTAgMTYwIDIyNSAxNjAgQyAyNDAgMTYwIDI2MCAxMDAgMjg1IDEwMCBDIDMxMCAxMDAgMzI1IDIxMCAzNjAgMjg1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzZWIiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgCiAgPCEtLSBBcnJvd3MgaW5kaWNhdGluZyBlbmQgYmVoYXZpb3IgLS0+CiAgPHBvbHlnb24gcG9pbnRzPSI4OCw0MyA4NSwzMCA5OCwzMyIgZmlsbD0iIzI1NjNlYiIvPgogIDxwb2x5Z29uIHBvaW50cz0iMzYyLDI3NyAzNjUsMjkwIDM1MiwyODciIGZpbGw9IiMyNTYzZWIiLz4KICAKICA8IS0tIFR1cm5pbmcgcG9pbnRzIC0tPgogIDxjaXJjbGUgY3g9IjE3MCIgY3k9IjIyMCIgcj0iNC41IiBmaWxsPSIjZGMyNjI2Ii8+CiAgPHRleHQgeD0iMTEwIiB5PSIyNDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2RjMjYyNiI+VHVybmluZyBQb2ludCAxPC90ZXh0PgogIAogIDxjaXJjbGUgY3g9IjI4NSIgY3k9IjEwMCIgcj0iNC41IiBmaWxsPSIjMTZhMzRhIi8+CiAgPHRleHQgeD0iMjcwIiB5PSI4NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMTZhMzRhIj5UdXJuaW5nIFBvaW50IDI8L3RleHQ+CiAgCiAgPCEtLSBFbmQgYmVoYXZpb3IgYmFkZ2VzIC0tPgogIDxyZWN0IHg9IjI1IiB5PSIyMCIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIyNiIgcng9IjYiIGZpbGw9IiNlZmY2ZmYiIHN0cm9rZT0iI2JmZGJmZSIvPgogIDx0ZXh0IHg9IjMyIiB5PSIzNyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMWQ0ZWQ4Ij54IOKGkiAt4oieLCB5IOKGkiAr4oiePC90ZXh0PgogIAogIDxyZWN0IHg9IjI5NSIgeT0iMjcwIiB3aWR0aD0iMTMwIiBoZWlnaHQ9IjI2IiByeD0iNiIgZmlsbD0iI2VmZjZmZiIgc3Ryb2tlPSIjYmZkYmZlIi8+CiAgPHRleHQgeD0iMzA0IiB5PSIyODciIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzFkNGVkOCI+eCDihpIgK+KIniwgeSDihpIgLeKInjwvdGV4dD4KPC9zdmc+",
    "options": [
      "The degree of $P(x)$ is odd and its leading coefficient is negative.",
      "The degree of $P(x)$ is even and its leading coefficient is negative.",
      "The degree of $P(x)$ is odd and its leading coefficient is positive.",
      "The degree of $P(x)$ is even and its leading coefficient is positive."
    ],
    "correctAnswer": 0,
    "explanation": "1. **End Behavior**:\\n- Left side ($x \\to -\\infty$) goes UP ($y \\to +\\infty$).\\n- Right side ($x \\to +\\infty$) goes DOWN ($y \\to -\\infty$).\\nOpposite end behaviors occur exclusively in **odd-degree polynomials**.\\n\\n2. **Sign of Leading Coefficient**:\\nBecause the graph falls to the right as $x \\to +\\infty$, the leading coefficient must be **negative** (a positive leading coefficient with odd degree would rise to the right).\\n\\n3. **Turning Points**:\\nWith $2$ turning points, the polynomial has a degree of at least $2 + 1 = 3$ (odd degree).\\n\\nTherefore, the degree is odd and the leading coefficient is negative.",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "End Behavior",
      "Polynomial Graphs"
    ]
  },
  {
    "id": "est2_poly_2027_25",
    "question": "When $2x^3 - 3x^2 + 4x - 5$ is divided by $x - 2$, the result is written in the form $Q(x) + \\frac{R}{x - 2}$, where $Q(x)$ is the quotient polynomial and $R$ is a constant. What is $Q(x)$?",
    "options": [
      "$2x^2 + x + 6$",
      "$2x^2 - 7x + 18$",
      "$2x^2 + x - 6$",
      "$2x^2 + 3x + 10$"
    ],
    "correctAnswer": 0,
    "explanation": "Use synthetic division with $c = 2$ and coefficients $[2, -3, 4, -5]$:\\n\\n$$\\begin{array}{c|rrrr} 2 & 2 & -3 & 4 & -5 \\\\ & & 4 & 2 & 12 \\\\ \\hline & 2 & 1 & 6 & 7 \\end{array}$$\\n\\n- The quotient coefficients are $2, 1, 6$, giving the quotient:\\n$$Q(x) = 2x^2 + x + 6$$\\n- The remainder is $R = 7$.\\n\\nThus, $Q(x) = 2x^2 + x + 6$.",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "Polynomial Division",
      "Synthetic Division"
    ]
  },
  {
    "id": "est2_poly_2027_26",
    "question": "Let $r_1, r_2, r_3$ be the three roots of the cubic polynomial equation $x^3 - 6x^2 + 11x - 6 = 0$. What is the value of $\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{r_3}$?",
    "options": [
      "$\\frac{11}{6}$",
      "$\\frac{6}{11}$",
      "$1$",
      "$-\\frac{11}{6}$"
    ],
    "correctAnswer": 0,
    "explanation": "Express the sum of reciprocals over a common denominator:\\n$$\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{r_3} = \\frac{r_1 r_2 + r_2 r_3 + r_1 r_3}{r_1 r_2 r_3}$$\\n\\nBy Vieta's formulas for $ax^3 + bx^2 + cx + d = 0$ with $a = 1, b = -6, c = 11, d = -6$:\\n- Sum of pairwise products: $r_1 r_2 + r_2 r_3 + r_1 r_3 = \\frac{c}{a} = \\frac{11}{1} = 11$\\n- Product of roots: $r_1 r_2 r_3 = -\\frac{d}{a} = -\\frac{-6}{1} = 6$\\n\\nTherefore:\\n$$\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{r_3} = \\frac{11}{6}$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Hard",
    "topics": [
      "Polynomials",
      "Vieta's Formulas",
      "Roots of Polynomials"
    ]
  },
  {
    "id": "est2_poly_2027_27",
    "question": "A monic polynomial $P(x)$ with real coefficients has degree $3$. Two of its zeros are $4$ and $2 - 3i$. Which of the following is $P(x)$ in standard form?",
    "options": [
      "$x^3 - 8x^2 + 29x - 52$",
      "$x^3 - 8x^2 + 21x - 52$",
      "$x^3 - 4x^2 + 13x - 52$",
      "$x^3 + 8x^2 + 29x + 52$"
    ],
    "correctAnswer": 0,
    "explanation": "By the Complex Conjugate Root Theorem, because the polynomial has real coefficients, the non-real zero $2 - 3i$ must have its complex conjugate $2 + 3i$ as a zero.\\n\\n1. **Quadratic factor for the complex conjugate pair**:\\n$$(x - (2 - 3i))(x - (2 + 3i)) = ((x - 2) + 3i)((x - 2) - 3i)$$\\n$$= (x - 2)^2 - (3i)^2 = x^2 - 4x + 4 - (-9) = x^2 - 4x + 13$$\\n\\n2. **Multiply by the real root factor $(x - 4)$**:\\n$$P(x) = (x - 4)(x^2 - 4x + 13)$$\\n$$= x(x^2 - 4x + 13) - 4(x^2 - 4x + 13)$$\\n$$= x^3 - 4x^2 + 13x - 4x^2 + 16x - 52$$\\n$$= x^3 - 8x^2 + 29x - 52$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Hard",
    "topics": [
      "Polynomials",
      "Complex Roots",
      "Fundamental Theorem of Algebra"
    ]
  },
  {
    "id": "est2_poly_2027_28",
    "question": "What is the product of all real solutions to the quartic polynomial equation $x^4 - 13x^2 + 36 = 0$?",
    "options": [
      "$36$",
      "$-36$",
      "$13$",
      "$-13$"
    ],
    "correctAnswer": 0,
    "explanation": "Let $u = x^2$. The equation is in quadratic form:\\n$$u^2 - 13u + 36 = 0$$\\n\\nFactor the quadratic in $u$:\\n$$(u - 4)(u - 9) = 0 \\implies u = 4 \\quad \\text{or} \\quad u = 9$$\\n\\nBack-substitute $x^2 = u$:\\n- For $x^2 = 4 \\implies x = \\pm 2$\\n- For $x^2 = 9 \\implies x = \\pm 3$\\n\\nAll four roots are real: $x \\in \\{-3, -2, 2, 3\\}$.\\nCompute their product:\\n$$\\text{Product} = (-3) \\times (-2) \\times 2 \\times 3 = 36$$",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "Quartic Equations",
      "Factoring"
    ]
  },
  {
    "id": "est2_poly_2027_29",
    "question": "The graph of the polynomial function $f(x) = x^3 - 3x^2 - 9x + 5$ is shown below. Its local maximum is at $(-1, 10)$ and its local minimum is at $(3, -22)$. Over which of the following intervals is $f(x)$ strictly increasing?",
    "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NTAgMzIwIiB3aWR0aD0iNDUwIiBoZWlnaHQ9IjMyMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZmZmZiIvPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImdyaWQyOSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGggZD0iTSAzMCAwIEwgMCAwIDAgMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZDI5KSIgLz4KICAKICA8IS0tIEF4ZXM6IENlbnRlciB4PTE4MCwgeT0xNDAgLS0+CiAgPGxpbmUgeDE9IjIwIiB5MT0iMTQwIiB4Mj0iNDMwIiB5Mj0iMTQwIiBzdHJva2U9IiMzMzQxNTUiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxwb2x5Z29uIHBvaW50cz0iNDMwLDEzNiA0MzgsMTQwIDQzMCwxNDQiIGZpbGw9IiMzMzQxNTUiLz4KICA8dGV4dCB4PSI0MzAiIHk9IjE1OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzM0MTU1Ij54PC90ZXh0PgogIAogIDxsaW5lIHgxPSIxODAiIHkxPSIzMDAiIHgyPSIxODAiIHkyPSIyMCIgc3Ryb2tlPSIjMzM0MTU1IiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cG9seWdvbiBwb2ludHM9IjE3NiwyMCAxODAsMTIgMTg0LDIwIiBmaWxsPSIjMzM0MTU1Ii8+CiAgPHRleHQgeD0iMTkwIiB5PSIyNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzM0MTU1Ij55PC90ZXh0PgogIAogIDwhLS0gU2NhbGU6IHg6IDM1cHggcGVyIHVuaXQuIHggPSAtMSBpcyBhdCAxODAgLSAzNSA9IDE0NS4geCA9IDMgaXMgYXQgMTgwICsgMTA1ID0gMjg1LiAtLT4KICA8IS0tIExvY2FsIG1heCBhdCAoLTEsIDEwKSAtPiBweD0xNDUsIHB5PTY1IC0tPgogIDwhLS0gTG9jYWwgbWluIGF0ICgzLCAtMjIpIC0+IHB4PTI4NSwgcHk9MjU1IC0tPgogIDxwYXRoIGQ9Ik0gNjAgMjgwIEMgMTAwIDIwMCAxMjAgNjUgMTQ1IDY1IEMgMTgwIDY1IDI0MCAyNTUgMjg1IDI1NSBDIDMyMCAyNTUgMzUwIDE4MCAzOTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KICAKICA8IS0tIE1hcmsgTWF4ICgtMSwgMTApIC0tPgogIDxjaXJjbGUgY3g9IjE0NSIgY3k9IjY1IiByPSI1IiBmaWxsPSIjMTZhMzRhIi8+CiAgPHRleHQgeD0iOTUiIHk9IjU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMxNmEzNGEiPk1heCAoLTEsIDEwKTwvdGV4dD4KICA8bGluZSB4MT0iMTQ1IiB5MT0iNjUiIHgyPSIxNDUiIHkyPSIxNDAiIHN0cm9rZT0iIzE2YTM0YSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMyIvPgogIDx0ZXh0IHg9IjEzNSIgeT0iMTU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMxNmEzNGEiPi0xPC90ZXh0PgogIAogIDwhLS0gTWFyayBNaW4gKDMsIC0yMikgLS0+CiAgPGNpcmNsZSBjeD0iMjg1IiBjeT0iMjU1IiByPSI1IiBmaWxsPSIjZGMyNjI2Ii8+CiAgPHRleHQgeD0iMjQ1IiB5PSIyNzUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2RjMjYyNiI+TWluICgzLCAtMjIpPC90ZXh0PgogIDxsaW5lIHgxPSIyODUiIHkxPSIxNDAiIHgyPSIyODUiIHkyPSIyNTUiIHN0cm9rZT0iI2RjMjYyNiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMyIvPgogIDx0ZXh0IHg9IjI4MSIgeT0iMTMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNkYzI2MjYiPjM8L3RleHQ+CiAgCiAgPCEtLSBHcmVlbiBhcnJvd3Mgc2hvd2luZyBpbmNyZWFzaW5nIGJyYW5jaGVzIC0tPgogIDx0ZXh0IHg9IjQ1IiB5PSIyMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzE1ODAzZCI+SW5jcmVhc2luZyDihpc8L3RleHQ+CiAgPHRleHQgeD0iMzQwIiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzE1ODAzZCI+SW5jcmVhc2luZyDihpc8L3RleHQ+CiAgPHRleHQgeD0iMTg1IiB5PSIxODAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2I5MWMxYyI+RGVjcmVhc2luZyDihpg8L3RleHQ+Cjwvc3ZnPg==",
    "options": [
      "$(-\\infty, -1) \\cup (3, \\infty)$",
      "$(-1, 3)$",
      "$(-22, 10)$",
      "$(-\\infty, 0) \\cup (2, \\infty)$"
    ],
    "correctAnswer": 0,
    "explanation": "A function is strictly increasing where the curve rises from left to right as $x$ increases:\\n\\n- From $-\\infty$ up to the local maximum at $x = -1$, the graph rises $\\implies$ increasing on $(-\\infty, -1)$.\\n- Between the local maximum at $x = -1$ and local minimum at $x = 3$, the graph falls $\\implies$ decreasing on $(-1, 3)$.\\n- From the local minimum at $x = 3$ to $\\infty$, the graph rises again $\\implies$ increasing on $(3, \\infty)$.\\n\\nTherefore, $f(x)$ is strictly increasing on $(-\\infty, -1) \\cup (3, \\infty)$.",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Medium",
    "topics": [
      "Polynomials",
      "Intervals of Increase and Decrease",
      "Extrema"
    ]
  },
  {
    "id": "est2_poly_2027_30",
    "question": "When a polynomial $P(x)$ is divided by $x - 1$, the remainder is $3$. When $P(x)$ is divided by $x + 2$, the remainder is $-6$. What is the remainder when $P(x)$ is divided by $(x - 1)(x + 2)$?",
    "options": [
      "$3x$",
      "$3x + 1$",
      "$-3x + 6$",
      "$2x + 1$"
    ],
    "correctAnswer": 0,
    "explanation": "When dividing by a quadratic divisor $D(x) = (x - 1)(x + 2)$, the remainder $R(x)$ has degree strictly less than $2$, so it can be represented as:\\n$$R(x) = ax + b$$\\n\\nBy the Division Algorithm:\\n$$P(x) = (x - 1)(x + 2)Q(x) + (ax + b)$$\\n\\nUsing the given remainders via the Remainder Theorem:\\n1. $P(1) = 3 \\implies (0)Q(1) + a(1) + b = 3 \\implies a + b = 3$\\n2. $P(-2) = -6 \\implies (0)Q(-2) + a(-2) + b = -6 \\implies -2a + b = -6$\\n\\nSubtract equation (2) from equation (1):\\n$$(a + b) - (-2a + b) = 3 - (-6)$$\\n$$3a = 9 \\implies a = 3$$\\n\\nSubstitute $a = 3$ into equation (1):\\n$$3 + b = 3 \\implies b = 0$$\\n\\nThus, the remainder is $R(x) = 3x + 0 = 3x$.",
    "category": "(Est2-polynomial 2027)",
    "difficulty": "Hard",
    "topics": [
      "Polynomials",
      "Remainder Theorem",
      "Division Algorithm"
    ]
  }
];
