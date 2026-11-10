import { Question } from '../../types';

export const EST2_MATRIX: Question[] = [
  {
    "id": "est2_matrix_1",
    "question": "What are the dimensions of matrix $A$ if $A = \\begin{bmatrix} 2 & -1 & 3 \\\\ 0 & 4 & 5 \\end{bmatrix}$?",
    "options": [
      "$3 \\times 2$",
      "$2 \\times 3$",
      "$6 \\times 1$",
      "$2 \\times 2$"
    ],
    "correctAnswer": 1,
    "explanation": "The dimensions of a matrix are given as $\\text{rows} \\times \\text{columns}$. Matrix $A$ has $2$ rows and $3$ columns, so its dimensions are $2 \\times 3$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_2",
    "question": "Given $B = \\begin{bmatrix} 7 & 8 \\\\ -1 & 0 \\\\ 5 & 2 \\end{bmatrix}$, what is the value of $b_{32}$?",
    "options": [
      "$5$",
      "$0$",
      "$2$",
      "$-1$"
    ],
    "correctAnswer": 2,
    "explanation": "The element $b_{ij}$ represents the entry in the $i$-th row and $j$-th column. Here, $b_{32}$ is the element in the 3rd row and 2nd column, which is $2$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_3",
    "question": "Given $C = \\begin{bmatrix} 4 & -2 \\\\ 1 & 6 \\end{bmatrix}$, what is the value of $c_{12} + c_{21}$?",
    "options": [
      "$2$",
      "$-1$",
      "$3$",
      "$-2$"
    ],
    "correctAnswer": 1,
    "explanation": "$c_{12} = -2$ and $c_{21} = 1$. The sum is $-2 + 1 = -1$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_4",
    "question": "If matrix $D$ has dimensions $4 \\times 1$ and matrix $E$ has dimensions $1 \\times 4$, what are the dimensions of the product matrix $DE$?",
    "options": [
      "$1 \\times 1$",
      "$4 \\times 4$",
      "$4 \\times 1$",
      "$1 \\times 4$"
    ],
    "correctAnswer": 1,
    "explanation": "When multiplying an $m \\times n$ matrix by an $n \\times p$ matrix, the result is an $m \\times p$ matrix. Multiplying a $4 \\times 1$ by a $1 \\times 4$ gives a $4 \\times 4$ matrix.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_5",
    "question": "Let matrix $A$ be a $3 \\times 5$ matrix and matrix $B$ be a $p \\times 4$ matrix. For the product $AB$ to be defined, what must be the value of $p$?",
    "options": [
      "$3$",
      "$4$",
      "$5$",
      "$8$"
    ],
    "correctAnswer": 2,
    "explanation": "For $AB$ to be defined, the number of columns of $A$ (which is $5$) must equal the number of rows of $B$ (which is $p$). Therefore, $p = 5$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_6",
    "question": "If $A = \\begin{bmatrix} 1 & 3 \\\\ -2 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} 0 & 5 \\\\ 2 & -1 \\end{bmatrix}$, what is $A + B$?",
    "options": [
      "$\\begin{bmatrix} 1 & 8 \\\\ 0 & 3 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & -2 \\\\ -4 & 5 \\end{bmatrix}$",
      "$\\begin{bmatrix} 0 & 15 \\\\ -4 & -4 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix}$"
    ],
    "correctAnswer": 0,
    "explanation": "Add corresponding elements: $\\begin{bmatrix} 1+0 & 3+5 \\\\ -2+2 & 4+(-1) \\end{bmatrix} = \\begin{bmatrix} 1 & 8 \\\\ 0 & 3 \\end{bmatrix}$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_7",
    "question": "If $X = \\begin{bmatrix} 5 & -1 & 0 \\\\ 2 & 3 & -4 \\end{bmatrix}$ and $Y = \\begin{bmatrix} 2 & -3 & 1 \\\\ 4 & 0 & -2 \\end{bmatrix}$, find $X - Y$.",
    "options": [
      "$\\begin{bmatrix} 3 & 2 & -1 \\\\ -2 & 3 & -2 \\end{bmatrix}$",
      "$\\begin{bmatrix} 7 & -4 & 1 \\\\ 6 & 3 & -6 \\end{bmatrix}$",
      "$\\begin{bmatrix} 3 & -4 & -1 \\\\ -2 & 3 & -2 \\end{bmatrix}$",
      "$\\begin{bmatrix} 10 & 3 & 0 \\\\ 8 & 0 & 8 \\end{bmatrix}$"
    ],
    "correctAnswer": 0,
    "explanation": "Subtract corresponding elements: $\\begin{bmatrix} 5-2 & -1-(-3) & 0-1 \\\\ 2-4 & 3-0 & -4-(-2) \\end{bmatrix} = \\begin{bmatrix} 3 & 2 & -1 \\\\ -2 & 3 & -2 \\end{bmatrix}$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_8",
    "question": "Given $M = \\begin{bmatrix} -3 & 4 \\\\ 1 & -2 \\end{bmatrix}$, what is $3M$?",
    "options": [
      "$\\begin{bmatrix} -9 & 12 \\\\ 3 & -6 \\end{bmatrix}$",
      "$\\begin{bmatrix} 0 & 7 \\\\ 4 & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} -1 & 7 \\\\ 4 & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} -6 & 1 \\\\ -2 & -5 \\end{bmatrix}$"
    ],
    "correctAnswer": 0,
    "explanation": "Multiply each element by $3$: $3 \\times \\begin{bmatrix} -3 & 4 \\\\ 1 & -2 \\end{bmatrix} = \\begin{bmatrix} -9 & 12 \\\\ 3 & -6 \\end{bmatrix}$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_9",
    "question": "If $A = \\begin{bmatrix} 2 & 0 \\\\ 1 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} -1 & 3 \\\\ 2 & -2 \\end{bmatrix}$, find $2A - B$.",
    "options": [
      "$\\begin{bmatrix} 5 & -3 \\\\ 0 & 10 \\end{bmatrix}$",
      "$\\begin{bmatrix} 3 & -3 \\\\ -1 & 6 \\end{bmatrix}$",
      "$\\begin{bmatrix} 5 & 3 \\\\ 0 & 10 \\end{bmatrix}$",
      "$\\begin{bmatrix} 5 & -3 \\\\ 4 & 10 \\end{bmatrix}$"
    ],
    "correctAnswer": 0,
    "explanation": "$2A = \\begin{bmatrix} 4 & 0 \\\\ 2 & 8 \\end{bmatrix}$. Then $2A - B = \\begin{bmatrix} 4-(-1) & 0-3 \\\\ 2-2 & 8-(-2) \\end{bmatrix} = \\begin{bmatrix} 5 & -3 \\\\ 0 & 10 \\end{bmatrix}$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_10",
    "question": "Let $A$ be a $2 \\times 3$ matrix and $B$ be a $2 \\times 3$ matrix. Which of the following operations is UNDEFINED?",
    "options": [
      "$A + B$",
      "$3A - 2B$",
      "$AB$",
      "$-B$"
    ],
    "correctAnswer": 2,
    "explanation": "Matrix addition and scalar multiplication require the same dimensions, so $A+B$ and $3A-2B$ are defined. Matrix multiplication $AB$ requires the columns of $A$ ($3$) to equal the rows of $B$ ($2$). Since $3 \\neq 2$, $AB$ is undefined.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_11",
    "question": "Find the product $\\begin{bmatrix} 1 & 2 \\end{bmatrix} \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$.",
    "options": [
      "$\\begin{bmatrix} 11 \\end{bmatrix}$",
      "$\\begin{bmatrix} 3 & 8 \\end{bmatrix}$",
      "$\\begin{bmatrix} 3 \\\\ 8 \\end{bmatrix}$",
      "$\\begin{bmatrix} 4 & 6 \\end{bmatrix}$"
    ],
    "correctAnswer": 0,
    "explanation": "This is a $1 \\times 2$ multiplied by a $2 \\times 1$, resulting in a $1 \\times 1$ matrix. $(1)(3) + (2)(4) = 3 + 8 = 11$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_12",
    "question": "Given $A = \\begin{bmatrix} -1 & 2 \\\\ 3 & 0 \\end{bmatrix}$ and $B = \\begin{bmatrix} 2 & 1 \\\\ 4 & -2 \\end{bmatrix}$, find the element in the first row and second column of $AB$.",
    "options": [
      "$7$",
      "$-5$",
      "$6$",
      "$-3$"
    ],
    "correctAnswer": 1,
    "explanation": "The element $(AB)_{12}$ is the dot product of the 1st row of $A$ and the 2nd column of $B$: $(-1)(1) + (2)(-2) = -1 - 4 = -5$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_13",
    "question": "Which of the following describes the identity matrix $I_2$?",
    "options": [
      "$\\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$"
    ],
    "correctAnswer": 2,
    "explanation": "The identity matrix has $1$s on the main diagonal and $0$s elsewhere: $\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_14",
    "question": "If $I$ is the $2 \\times 2$ identity matrix and $A = \\begin{bmatrix} 4 & 3 \\\\ -1 & 0 \\end{bmatrix}$, what is $AI$?",
    "options": [
      "$\\begin{bmatrix} 4 & 3 \\\\ -1 & 0 \\end{bmatrix}$",
      "$\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 4 & 0 \\\\ 0 & 0 \\end{bmatrix}$"
    ],
    "correctAnswer": 0,
    "explanation": "Multiplying any matrix $A$ by the identity matrix $I$ (of the appropriate dimension) leaves $A$ unchanged: $AI = A$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_15",
    "question": "Consider $A = \\begin{bmatrix} 2 & 0 \\\\ 1 & -1 \\end{bmatrix}$ and $B = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$. Find $AB$.",
    "options": [
      "$\\begin{bmatrix} -2 \\\\ -3 \\end{bmatrix}$",
      "$\\begin{bmatrix} -1 \\\\ -3 \\end{bmatrix}$",
      "$\\begin{bmatrix} -2 & -3 \\end{bmatrix}$",
      "Undefined"
    ],
    "correctAnswer": 0,
    "explanation": "The product of a $2 \\times 2$ and a $2 \\times 1$ is a $2 \\times 1$ matrix. $(AB)_{11} = 2(-1) + (0)(2) = -2$. $(AB)_{21} = 1(-1) + (-1)(2) = -3$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_16",
    "question": "Let $A$ be a matrix of dimension $2 \\times 3$, and $B$ be a matrix of dimension $3 \\times 3$. What is the dimension of the matrix $(AB)$?",
    "options": [
      "$2 \\times 3$",
      "$3 \\times 3$",
      "$2 \\times 2$",
      "Undefined"
    ],
    "correctAnswer": 0,
    "explanation": "Multiplying an $m \\times n$ matrix by an $n \\times p$ matrix yields an $m \\times p$ matrix. Here, $2 \\times 3$ multiplied by $3 \\times 3$ yields $2 \\times 3$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_17",
    "question": "Given that $\\begin{bmatrix} x & 3 \\\\ -1 & 4 \\end{bmatrix} + \\begin{bmatrix} 8 & y \\\\ 2 & z \\end{bmatrix} = \\begin{bmatrix} 16 & 5 \\\\ 1 & 10 \\end{bmatrix}$, what is the value of $y + z$?",
    "options": [
      "$8$",
      "$6$",
      "$4$",
      "$-2$"
    ],
    "correctAnswer": 0,
    "explanation": "From the addition, $3 + y = 5 \\implies y = 2$. And $4 + z = 10 \\implies z = 6$. Therefore, $y + z = 2 + 6 = 8$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_18",
    "question": "If $I$ is the $2 \\times 2$ identity matrix and $A = \\begin{bmatrix} 2 & 3 \\\\ -1 & 0 \\end{bmatrix}$, what is $AI$?",
    "options": [
      "$\\begin{bmatrix} 2 & 3 \\\\ -1 & 0 \\end{bmatrix}$",
      "$\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 2 & 0 \\\\ 0 & 0 \\end{bmatrix}$"
    ],
    "correctAnswer": 0,
    "explanation": "Multiplying any matrix $A$ by the identity matrix $I$ (of the appropriate dimension) leaves $A$ unchanged: $AI = A$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_19",
    "question": "Consider $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & -1 \\end{bmatrix}$ and $B = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$. Find $AB$.",
    "options": [
      "$\\begin{bmatrix} 0 \\\\ -3 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 \\\\ -3 \\end{bmatrix}$",
      "$\\begin{bmatrix} 0 & -3 \\end{bmatrix}$",
      "Undefined"
    ],
    "correctAnswer": 0,
    "explanation": "The product of a $2 \\times 2$ and a $2 \\times 1$ is a $2 \\times 1$ matrix. $(AB)_{11} = 2(-1) + (1)(2) = 0$. $(AB)_{21} = 1(-1) + (-1)(2) = -3$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_20",
    "question": "Let $A$ be a matrix of dimension $1 \\times 4$, and $B$ be a matrix of dimension $4 \\times 2$. What is the dimension of the matrix $(AB)$?",
    "options": [
      "$1 \\times 2$",
      "$4 \\times 4$",
      "$1 \\times 1$",
      "Undefined"
    ],
    "correctAnswer": 0,
    "explanation": "Multiplying an $m \\times n$ matrix by an $n \\times p$ matrix yields an $m \\times p$ matrix. Here, $1 \\times 4$ multiplied by $4 \\times 2$ yields $1 \\times 2$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_21",
    "question": "Given that $\\begin{bmatrix} x & 3 \\\\ -1 & 4 \\end{bmatrix} + \\begin{bmatrix} 2 & y \\\\ 2 & z \\end{bmatrix} = \\begin{bmatrix} 4 & 5 \\\\ 1 & 10 \\end{bmatrix}$, what is the value of $y + z$?",
    "options": [
      "$8$",
      "$6$",
      "$4$",
      "$-2$"
    ],
    "correctAnswer": 0,
    "explanation": "From the addition, $3 + y = 5 \\implies y = 2$. And $4 + z = 10 \\implies z = 6$. Therefore, $y + z = 2 + 6 = 8$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_22",
    "question": "If $I$ is the $2 \\times 2$ identity matrix and $A = \\begin{bmatrix} 3 & 3 \\\\ -1 & 0 \\end{bmatrix}$, what is $AI$?",
    "options": [
      "$\\begin{bmatrix} 3 & 3 \\\\ -1 & 0 \\end{bmatrix}$",
      "$\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 3 & 0 \\\\ 0 & 0 \\end{bmatrix}$"
    ],
    "correctAnswer": 0,
    "explanation": "Multiplying any matrix $A$ by the identity matrix $I$ (of the appropriate dimension) leaves $A$ unchanged: $AI = A$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_23",
    "question": "Consider $A = \\begin{bmatrix} 2 & 2 \\\\ 1 & -1 \\end{bmatrix}$ and $B = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$. Find $AB$.",
    "options": [
      "$\\begin{bmatrix} 2 \\\\ -3 \\end{bmatrix}$",
      "$\\begin{bmatrix} 3 \\\\ -3 \\end{bmatrix}$",
      "$\\begin{bmatrix} 2 & -3 \\end{bmatrix}$",
      "Undefined"
    ],
    "correctAnswer": 0,
    "explanation": "The product of a $2 \\times 2$ and a $2 \\times 1$ is a $2 \\times 1$ matrix. $(AB)_{11} = 2(-1) + (2)(2) = 2$. $(AB)_{21} = 1(-1) + (-1)(2) = -3$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_24",
    "question": "Let $A$ be a matrix of dimension $5 \\times 2$, and $B$ be a matrix of dimension $2 \\times 6$. What is the dimension of the matrix $(AB)$?",
    "options": [
      "$5 \\times 6$",
      "$2 \\times 2$",
      "$5 \\times 5$",
      "Undefined"
    ],
    "correctAnswer": 0,
    "explanation": "Multiplying an $m \\times n$ matrix by an $n \\times p$ matrix yields an $m \\times p$ matrix. Here, $5 \\times 2$ multiplied by $2 \\times 6$ yields $5 \\times 6$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_25",
    "question": "Given that $\\begin{bmatrix} x & 3 \\\\ -1 & 4 \\end{bmatrix} + \\begin{bmatrix} 6 & y \\\\ 2 & z \\end{bmatrix} = \\begin{bmatrix} 12 & 5 \\\\ 1 & 10 \\end{bmatrix}$, what is the value of $y + z$?",
    "options": [
      "$8$",
      "$6$",
      "$4$",
      "$-2$"
    ],
    "correctAnswer": 0,
    "explanation": "From the addition, $3 + y = 5 \\implies y = 2$. And $4 + z = 10 \\implies z = 6$. Therefore, $y + z = 2 + 6 = 8$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_26",
    "question": "If $I$ is the $2 \\times 2$ identity matrix and $A = \\begin{bmatrix} 4 & 3 \\\\ -1 & 0 \\end{bmatrix}$, what is $AI$?",
    "options": [
      "$\\begin{bmatrix} 4 & 3 \\\\ -1 & 0 \\end{bmatrix}$",
      "$\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 4 & 0 \\\\ 0 & 0 \\end{bmatrix}$"
    ],
    "correctAnswer": 0,
    "explanation": "Multiplying any matrix $A$ by the identity matrix $I$ (of the appropriate dimension) leaves $A$ unchanged: $AI = A$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_27",
    "question": "Consider $A = \\begin{bmatrix} 2 & 0 \\\\ 1 & -1 \\end{bmatrix}$ and $B = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$. Find $AB$.",
    "options": [
      "$\\begin{bmatrix} -2 \\\\ -3 \\end{bmatrix}$",
      "$\\begin{bmatrix} -1 \\\\ -3 \\end{bmatrix}$",
      "$\\begin{bmatrix} -2 & -3 \\end{bmatrix}$",
      "Undefined"
    ],
    "correctAnswer": 0,
    "explanation": "The product of a $2 \\times 2$ and a $2 \\times 1$ is a $2 \\times 1$ matrix. $(AB)_{11} = 2(-1) + (0)(2) = -2$. $(AB)_{21} = 1(-1) + (-1)(2) = -3$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_28",
    "question": "Let $A$ be a matrix of dimension $4 \\times 3$, and $B$ be a matrix of dimension $3 \\times 5$. What is the dimension of the matrix $(AB)$?",
    "options": [
      "$4 \\times 5$",
      "$3 \\times 3$",
      "$4 \\times 4$",
      "Undefined"
    ],
    "correctAnswer": 0,
    "explanation": "Multiplying an $m \\times n$ matrix by an $n \\times p$ matrix yields an $m \\times p$ matrix. Here, $4 \\times 3$ multiplied by $3 \\times 5$ yields $4 \\times 5$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_29",
    "question": "Given that $\\begin{bmatrix} x & 3 \\\\ -1 & 4 \\end{bmatrix} + \\begin{bmatrix} 10 & y \\\\ 2 & z \\end{bmatrix} = \\begin{bmatrix} 20 & 5 \\\\ 1 & 10 \\end{bmatrix}$, what is the value of $y + z$?",
    "options": [
      "$8$",
      "$6$",
      "$4$",
      "$-2$"
    ],
    "correctAnswer": 0,
    "explanation": "From the addition, $3 + y = 5 \\implies y = 2$. And $4 + z = 10 \\implies z = 6$. Therefore, $y + z = 2 + 6 = 8$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  },
  {
    "id": "est2_matrix_30",
    "question": "If $I$ is the $2 \\times 2$ identity matrix and $A = \\begin{bmatrix} 2 & 3 \\\\ -1 & 0 \\end{bmatrix}$, what is $AI$?",
    "options": [
      "$\\begin{bmatrix} 2 & 3 \\\\ -1 & 0 \\end{bmatrix}$",
      "$\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 2 & 0 \\\\ 0 & 0 \\end{bmatrix}$"
    ],
    "correctAnswer": 0,
    "explanation": "Multiplying any matrix $A$ by the identity matrix $I$ (of the appropriate dimension) leaves $A$ unchanged: $AI = A$.",
    "category": "Matrices",
    "topics": [
      "Matrix Operations",
      "Matrix Dimensions"
    ]
  }
];
