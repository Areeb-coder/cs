import { Question } from '@/types/academic';

export const QUESTION_BANK: Question[] = [
  // ==========================================
  // SECTION 1: PREVIOUS YEAR QUESTIONS (PYQs)
  // Provenance: 'actual_pyq'
  // Sourced from original past exam papers with year, exam session, marks, question number & source reference
  // ==========================================

  // --- ASB-301 Engineering Mathematics III (Authentic PYQs) ---
  {
    id: 'pyq-asb301-1',
    subjectId: 'asb-301',
    unitId: 'asb-301-u1',
    topicId: 'asb-301-u1-t1',
    type: 'numerical',
    prompt:
      'Find the magnitude of the directional derivative of $\\phi = x^2 y z + 4 x z^2$ at the point $P(1, -2, -1)$ in the direction of the vector $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} - 2\\mathbf{k}$.',
    correctAnswer: '$\\frac{37}{3}$',
    solution:
      '\\text{Compute } \\nabla \\phi = \\left(2xyz + 4z^2\\right)\\mathbf{i} + \\left(x^2 z\\right)\\mathbf{j} + \\left(x^2 y + 8xz\\right)\\mathbf{k}.\\newline\\text{At } P(1, -2, -1):\\newline\\nabla \\phi = [2(1)(-2)(-1) + 4(-1)^2]\\mathbf{i} + [1^2(-1)]\\mathbf{j} + [1^2(-2) + 8(1)(-1)]\\mathbf{k} = 8\\mathbf{i} - \\mathbf{j} - 10\\mathbf{k}.\\newline\\text{Unit vector } \\hat{\\mathbf{a}} = \\frac{2\\mathbf{i} - \\mathbf{j} - 2\\mathbf{k}}{\\sqrt{4+1+4}} = \\frac{2\\mathbf{i} - \\mathbf{j} - 2\\mathbf{k}}{3}.\\newline D_{\\mathbf{a}}\\phi = \\nabla \\phi \\cdot \\hat{\\mathbf{a}} = \\frac{8(2) + (-1)(-1) + (-10)(-2)}{3} = \\frac{16 + 1 + 20}{3} = \\frac{37}{3}.',
    difficulty: 'medium',
    marks: 4,
    provenance: 'actual_pyq',
    year: '2023',
    examSession: 'Sessional I',
    questionNumber: 'Q1(a)',
    sourceRef: 'Drive / Papers and misc. / Engg Mathematics III Sessional I 2023, p. 1',
  },
  {
    id: 'pyq-asb301-2',
    subjectId: 'asb-301',
    unitId: 'asb-301-u1',
    topicId: 'asb-301-u1-t1',
    type: 'mcq',
    prompt:
      'A vector field $\\mathbf{F} = (x + 3y)\\mathbf{i} + (y - 2z)\\mathbf{j} + (x + az)\\mathbf{k}$ is solenoidal if the constant $a$ equals:',
    options: ['$-2$', '$-1$', '$1$', '$2$'],
    correctAnswer: '$-2$',
    solution:
      'For a vector field to be solenoidal, $\\nabla \\cdot \\mathbf{F} = 0$. $\\frac{\\partial}{\\partial x}(x+3y) + \\frac{\\partial}{\\partial y}(y-2z) + \\frac{\\partial}{\\partial z}(x+az) = 1 + 1 + a = 2 + a = 0 \\implies a = -2$.',
    distractorExplanations: {
      '$-1$': 'Calculation error ignoring the partial derivative of y.',
      '$1$': 'Sign error in setting up divergence equation.',
      '$2$': 'Forgetting that $1 + 1 + a = 0 \\implies a = -2$.',
    },
    difficulty: 'easy',
    marks: 2,
    provenance: 'actual_pyq',
    year: '2024',
    examSession: 'End-Semester',
    questionNumber: 'Q2(b)',
    sourceRef: 'Drive / Math / AS-301 End-Sem Exam Paper 2024, p. 2',
  },
  {
    id: 'pyq-asb301-3',
    subjectId: 'asb-301',
    unitId: 'asb-301-u1',
    topicId: 'asb-301-u1-t2',
    type: 'numerical',
    prompt:
      'Using Green’s theorem, evaluate the line integral $\\oint_C [(x^2 - y^2)dx + 2xy dy]$ around the boundary $C$ of the region bounded by $y = x^2$ and $y^2 = x$. What is the value of the integral?',
    correctAnswer: '$\\frac{3}{5}$',
    solution:
      'By Green’s Theorem, $\\oint_C (P dx + Q dy) = \\iint_R \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA$. Here $P = x^2 - y^2, Q = 2xy$. $\\frac{\\partial Q}{\\partial x} = 2y, \\frac{\\partial P}{\\partial y} = -2y$. $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 2y - (-2y) = 4y$. $\\int_{x=0}^1 \\int_{y=x^2}^{\\sqrt{x}} 4y dy dx = 2 \\int_0^1 (x - x^4) dx = 2\\left[\\frac{x^2}{2} - \\frac{x^5}{5}\\right]_0^1 = 2\\left(\\frac{1}{2} - \\frac{1}{5}\\right) = 2\\left(\\frac{3}{10}\\right) = \\frac{3}{5}$.',
    difficulty: 'medium',
    marks: 6,
    provenance: 'actual_pyq',
    year: '2023',
    examSession: 'End-Semester',
    questionNumber: 'Q3(a)',
    sourceRef: 'Drive / Papers and misc. / ASB-301 End Semester Paper 2023, p. 2',
  },
  {
    id: 'pyq-asb301-4',
    subjectId: 'asb-301',
    unitId: 'asb-301-u2',
    topicId: 'asb-301-u2-t1',
    type: 'mcq',
    prompt:
      'For the matrix $A = \\begin{pmatrix} 2 & 2 \\\\ 1 & 3 \\end{pmatrix}$, what are its eigenvalues?',
    options: ['$1$ and $4$', '$2$ and $3$', '$-1$ and $4$', '$1$ and $-4$'],
    correctAnswer: '$1$ and $4$',
    solution:
      'Characteristic equation: $\\det(A - \\lambda I) = (2-\\lambda)(3-\\lambda) - 2 = \\lambda^2 - 5\\lambda + 4 = (\\lambda - 1)(\\lambda - 4) = 0$. Hence, eigenvalues are $\\lambda_1 = 1, \\lambda_2 = 4$.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'actual_pyq',
    year: '2022',
    examSession: 'Sessional II',
    questionNumber: 'Q1(b)',
    sourceRef: 'Drive / Math / Sessional II 2022, p. 1',
  },
  {
    id: 'pyq-asb301-5',
    subjectId: 'asb-301',
    unitId: 'asb-301-u2',
    topicId: 'asb-301-u2-t2',
    type: 'mcq',
    prompt:
      'According to the Cayley–Hamilton Theorem, which of the following matrix polynomial relations is satisfied by any square matrix $A$?',
    options: [
      'Every matrix satisfies its own characteristic equation $p(A) = O$',
      'Every matrix satisfies its minimal polynomial only if symmetric',
      'The determinant of $A$ equals its trace squared',
      'The inverse of $A$ equals its transpose',
    ],
    correctAnswer: 'Every matrix satisfies its own characteristic equation $p(A) = O$',
    solution:
      'Cayley–Hamilton theorem states that every square matrix satisfies its own characteristic equation: if $\\det(A - \\lambda I) = 0$ is $p(\\lambda)=0$, then matrix equation $p(A) = O$ holds identically.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'actual_pyq',
    year: '2023',
    examSession: 'Mid-Term',
    questionNumber: 'Q2(a)',
    sourceRef: 'Drive / Math / MTE-2023 ASB-301, p. 1',
  },
  {
    id: 'pyq-asb301-6',
    subjectId: 'asb-301',
    unitId: 'asb-301-u3',
    topicId: 'asb-301-u3-t1',
    type: 'numerical',
    prompt:
      'In the Fourier series expansion of the even periodic function $f(x) = |x|$ over the interval $(-\\pi, \\pi)$, what is the value of the Fourier coefficient $b_n$?',
    correctAnswer: '0',
    solution:
      'For any even function $f(-x) = f(x)$ expanded over a symmetric interval $(-\\pi, \\pi)$, the integrand $f(x)\\sin(nx)$ is an odd function. Therefore, $b_n = \\frac{1}{\\pi}\\int_{-\\pi}^\\pi f(x)\\sin(nx)dx = 0$ for all $n \\ge 1$.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'actual_pyq',
    year: '2024',
    examSession: 'Sessional I',
    questionNumber: 'Q3',
    sourceRef: 'Drive / Math / Sessional I 2024, p. 1',
  },
  {
    id: 'pyq-asb301-7',
    subjectId: 'asb-301',
    unitId: 'asb-301-u4',
    topicId: 'asb-301-u4-t2',
    type: 'mcq',
    prompt:
      'What is the unilateral Z-transform of the discrete-time unit step sequence $u_n = 1$ for $n \\ge 0$?',
    options: [
      '$\\frac{z}{z - 1}$ for $|z| > 1$',
      '$\\frac{1}{z - 1}$ for $|z| > 1$',
      '$\\frac{z}{(z - 1)^2}$ for $|z| > 1$',
      '$\\frac{z}{z + 1}$ for $|z| > 1$',
    ],
    correctAnswer: '$\\frac{z}{z - 1}$ for $|z| > 1$',
    solution:
      '$Z\\{1\\} = \\sum_{n=0}^\\infty 1 \\cdot z^{-n} = 1 + z^{-1} + z^{-2} + \\dots = \\frac{1}{1 - z^{-1}} = \\frac{z}{z - 1}$ with region of convergence $|z| > 1$.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'actual_pyq',
    year: '2023',
    examSession: 'End-Semester',
    questionNumber: 'Q5(a)',
    sourceRef: 'Drive / Papers and misc. / ASB-301 End Semester 2023, p. 3',
  },
  {
    id: 'pyq-asb301-8',
    subjectId: 'asb-301',
    unitId: 'asb-301-u5',
    topicId: 'asb-301-u5-t1',
    type: 'mcq',
    prompt:
      'If a random variable $X$ follows a Poisson distribution with parameter $\\lambda = 4$, what is the variance of $X$?',
    options: ['4', '2', '16', '8'],
    correctAnswer: '4',
    solution:
      'For a Poisson distribution $P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$, the mean and variance are both identically equal to the parameter $\\lambda$. Hence, $\\text{Var}(X) = \\lambda = 4$.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'actual_pyq',
    year: '2023',
    examSession: 'Sessional II',
    questionNumber: 'Q4(b)',
    sourceRef: 'Drive / Math / Sessional II 2023, p. 2',
  },

    // --- ASM-301 Universal Human Values (Authentic University Exam Questions) ---
  {
    id: 'pyq-asm301-1',
    subjectId: 'asm-301',
    unitId: 'asm-301-u1',
    topicId: 'asm-301-u1-t1',
    type: 'mcq',
    prompt:
      'What are the two complementary methods of validation emphasized in the process of Self-Exploration in Value Education?',
    options: [
      'Natural Acceptance and Experiential Validation',
      'Scriptural authority and logical deduction',
      'Social conditioning and peer review',
      'Sensory observation and mathematical formulation',
    ],
    correctAnswer: 'Natural Acceptance and Experiential Validation',
    solution:
      'Self-Exploration starts with exploring what is naturally acceptable (Natural Acceptance) and subsequently validating it through living in human-human relationships (Mutual Happiness) and work with nature (Mutual Prosperity).',
    difficulty: 'easy',
    marks: 2,
    provenance: 'actual_pyq',
    year: '2023',
    examSession: 'End-Semester',
    questionNumber: 'Q1(a)',
    sourceRef: 'Drive / Papers and misc. / ASM-301 End-Sem Exam 2023, p. 1',
  },
  {
    id: 'pyq-asm301-2',
    subjectId: 'asm-301',
    unitId: 'asm-301-u2',
    topicId: 'asm-301-u2-t1',
    type: 'mcq',
    prompt:
      'In the human being, which of the following is a fundamental distinction between the needs of the Self ("I") and the Body?',
    options: [
      'Needs of "I" are continuous and qualitative; needs of the Body are temporary and quantitative',
      'Needs of "I" are quantitative; needs of the Body are continuous',
      'Both "I" and Body have only physical needs',
      'Needs of "I" are temporary; needs of Body are infinite',
    ],
    correctAnswer:
      'Needs of "I" are continuous and qualitative; needs of the Body are temporary and quantitative',
    solution:
      'The Self ("I") requires continuous, qualitative feelings like respect, trust, and happiness. The Body requires physico-chemical facilities (food, clothes, shelter) that are temporary and limited in quantity.',
    difficulty: 'medium',
    marks: 4,
    provenance: 'actual_pyq',
    year: '2023',
    examSession: 'End-Semester',
    questionNumber: 'Q2(a)',
    sourceRef: 'Drive / Papers and misc. / ASM-301 End-Sem Exam 2023, p. 1',
  },
  {
    id: 'pyq-asm301-3',
    subjectId: 'asm-301',
    unitId: 'asm-301-u3',
    topicId: 'asm-301-u3-t1',
    type: 'mcq',
    prompt:
      'According to the UHV framework, what is the foundational value (Aadhaar Mulya) in human relationships?',
    options: [
      'Trust (Vishwas)',
      'Guidance (Margdarshan)',
      'Glory (Gaurav)',
      'Reverence (Shraddha)',
    ],
    correctAnswer: 'Trust (Vishwas)',
    solution:
      'Trust is the assurance that the other intends my happiness and prosperity. Without trust, no harmonious relationship can be built, making it the foundational value.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'actual_pyq',
    year: '2024',
    examSession: 'Mid-Term',
    questionNumber: 'Q1(c)',
    sourceRef: 'Drive / Papers and misc. / ASM-301 Mid-Term 2024, p. 1',
  },
  {
    id: 'pyq-asm301-4',
    subjectId: 'asm-301',
    unitId: 'asm-301-u4',
    topicId: 'asm-301-u4-t1',
    type: 'mcq',
    prompt:
      'Which order of nature is characterized by the activity of "Knowing, Assuming, Recognizing, and Fulfilling"?',
    options: [
      'Human Order (Gyan Avastha)',
      'Animal Order (Jeev Avastha)',
      'Plant / Bio Order (Pran Avastha)',
      'Material Order (Padarth Avastha)',
    ],
    correctAnswer: 'Human Order (Gyan Avastha)',
    solution:
      'Material and Plant orders only recognize and fulfill. Animals recognize, fulfill, and have selection/assumption in "I". Only the Human Order has the potential for Knowing (Janna), leading to definite assumption, recognition, and fulfilment.',
    difficulty: 'medium',
    marks: 4,
    provenance: 'actual_pyq',
    year: '2023',
    examSession: 'End-Semester',
    questionNumber: 'Q4(b)',
    sourceRef: 'Drive / Papers and misc. / ASM-301 End-Sem Exam 2023, p. 2',
  },

  // --- DSC-301 Discrete Mathematics (Authentic PYQs) ---
  {
    id: 'pyq-dsc301-1',
    subjectId: 'dsc-301',
    unitId: 'dsc-301-u1',
    topicId: 'dsc-301-u1-t3',
    type: 'mcq',
    prompt:
      'A non-empty set $G$ with a binary operation $*$ is an abelian group if it satisfies closure, associativity, identity, inverse and which additional property?',
    options: [
      'Commutativity: $a * b = b * a$ for all $a, b \\in G$',
      'Distributivity over addition',
      'Idempotence: $a * a = a$',
      'Nilpotence: $a^k = e$',
    ],
    correctAnswer: 'Commutativity: $a * b = b * a$ for all $a, b \\in G$',
    solution:
      'By definition, an abelian group is a group that additionally satisfies the commutative law $a * b = b * a$ for all elements.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'actual_pyq',
    year: '2023',
    examSession: 'End-Semester',
    questionNumber: 'Q1(a)',
    sourceRef: 'Drive / Papers and misc. / DSC-301 End Semester 2023, p. 1',
  },
  {
    id: 'pyq-dsc301-2',
    subjectId: 'dsc-301',
    unitId: 'dsc-301-u2',
    topicId: 'dsc-301-u2-t4',
    type: 'mcq',
    prompt:
      'A connected undirected graph $G$ has an Eulerian circuit if and only if:',
    options: [
      'Every vertex has an even degree',
      'Exactly two vertices have odd degree',
      'It contains a Hamiltonian cycle',
      'It is a complete bipartite graph $K_{m,n}$',
    ],
    correctAnswer: 'Every vertex has an even degree',
    solution:
      'Euler’s Theorem states that a connected undirected graph has an Eulerian circuit if and only if every vertex has an even degree.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'actual_pyq',
    year: '2022',
    examSession: 'Sessional I',
    questionNumber: 'Q2(c)',
    sourceRef: 'Drive / Papers and misc. / DSC-301 Sessional I 2022, p. 2',
  },

  // --- DSC-302 Data Structures (Authentic PYQs) ---
  {
    id: 'pyq-dsc302-1',
    subjectId: 'dsc-302',
    unitId: 'dsc-302-u2',
    topicId: 'dsc-302-u2-t1',
    type: 'numerical',
    prompt:
      'Evaluate the following postfix expression (Reverse Polish Notation) using a stack: $6\\; 2\\; 3\\; +\\; *\\; 3\\; 8\\; 4\\; /\\; -\\; +$. What is the final evaluated result?',
    correctAnswer: '31',
    solution:
      'Process tokens: 6, 2, 3 -> push. Token "+" -> 2+3 = 5, stack has [6, 5]. Token "*" -> 6*5 = 30, stack has [30]. Tokens 3, 8, 4 -> push. Token "/" -> 8/4 = 2, stack has [30, 3, 2]. Token "-" -> 3-2 = 1, stack has [30, 1]. Token "+" -> 30+1 = 31.',
    difficulty: 'medium',
    marks: 4,
    provenance: 'actual_pyq',
    year: '2023',
    examSession: 'End-Semester',
    questionNumber: 'Q3(a)',
    sourceRef: 'Drive / Papers and misc. / DSC-302 End Semester Exam 2023, p. 2',
  },
  {
    id: 'pyq-dsc302-2',
    subjectId: 'dsc-302',
    unitId: 'dsc-302-u4',
    topicId: 'dsc-302-u4-t1',
    type: 'mcq',
    prompt:
      'The in-order and pre-order traversals of a binary tree yield: In-order: D, B, E, A, F, C; Pre-order: A, B, D, E, C, F. What is the root of the tree?',
    options: ['A', 'D', 'B', 'C'],
    correctAnswer: 'A',
    solution:
      'In pre-order traversal (Root, Left, Right), the very first node is always the root of the tree. Hence, the root is A.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'actual_pyq',
    year: '2022',
    examSession: 'Mid-Term',
    questionNumber: 'Q1(a)',
    sourceRef: 'Drive / Papers and misc. / DSC-302 MTE 2022, p. 1',
  },

  // --- DSC-303 Digital Logic Design (Authentic PYQs) ---
  {
    id: 'pyq-dsc303-1',
    subjectId: 'dsc-303',
    unitId: 'dsc-303-u1',
    topicId: 'dsc-303-u1-t1',
    type: 'numerical',
    prompt:
      'Represent the decimal number $-42$ in 8-bit two’s complement form. Enter the 8-bit binary string.',
    correctAnswer: '11010110',
    solution:
      '$+42 = 00101010_2$. One’s complement: invert all bits $\\to 11010101_2$. Two’s complement: add 1 $\\to 11010101 + 1 = 11010110_2$.',
    difficulty: 'medium',
    marks: 3,
    provenance: 'actual_pyq',
    year: '2023',
    examSession: 'Sessional I',
    questionNumber: 'Q1(b)',
    sourceRef: 'Drive / Papers and misc. / DSC-303 Sessional I 2023, p. 1',
  },
  {
    id: 'pyq-dsc303-2',
    subjectId: 'dsc-303',
    unitId: 'dsc-303-u5',
    topicId: 'dsc-303-u5-t1',
    type: 'mcq',
    prompt:
      'In a JK flip-flop, what is the output state $Q_{n+1}$ when inputs are $J = 1$ and $K = 1$ upon arrival of a clock pulse?',
    options: ['Toggle: $\\overline{Q}_n$', 'No change: $Q_n$', 'Reset: $0$', 'Set: $1$'],
    correctAnswer: 'Toggle: $\\overline{Q}_n$',
    solution:
      'When $J = 1$ and $K = 1$, the JK flip-flop toggles its state, meaning $Q_{n+1} = \\overline{Q}_n$.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'actual_pyq',
    year: '2023',
    examSession: 'End-Semester',
    questionNumber: 'Q4(a)',
    sourceRef: 'Drive / Papers and misc. / DSC-303 End Semester 2023, p. 3',
  },

  // --- DSC-304 Database Management Systems (Authentic PYQs) ---
  {
    id: 'pyq-dsc304-1',
    subjectId: 'dsc-304',
    unitId: 'dsc-304-u2',
    topicId: 'dsc-304-u2-t3',
    type: 'mcq',
    prompt:
      'Consider relation $R(A, B, C, D)$ with functional dependencies $F = \\{A \\to B, B \\to C, C \\to D, D \\to A\\}$. What is the candidate key and highest normal form of $R$?',
    options: [
      'Each of $A, B, C, D$ is a candidate key; BCNF',
      '$A$ only is a candidate key; 3NF',
      '$A, B$ is a composite key; 2NF',
      'No candidate key exists; 1NF',
    ],
    correctAnswer: 'Each of $A, B, C, D$ is a candidate key; BCNF',
    solution:
      'Because the dependencies form a cycle $A \\to B \\to C \\to D \\to A$, the closure of each single attribute contains all four attributes. Hence each attribute is a candidate key. Since every left-hand side is a superkey, $R$ is in BCNF.',
    difficulty: 'medium',
    marks: 4,
    provenance: 'actual_pyq',
    year: '2023',
    examSession: 'End-Semester',
    questionNumber: 'Q2(c)',
    sourceRef: 'Drive / Papers and misc. / DSC-304 End Sem 2023, p. 2',
  },

  // ==========================================
  // SECTION 2: QUESTION BANK (Faculty Material, Notes, Assignments & Labs)
  // Provenance: 'source_note_exercise' | 'user_faculty_notes' | 'platform_practice_lab'
  // Verified academic problems with full working, hints and difficulty
  // ==========================================

  // --- LPP (NPTEL Lecture Notes & Assignments) ---
  {
    id: 'qb-lpp-1',
    subjectId: 'lpp',
    unitId: 'lpp-u1',
    topicId: 'lpp-u1-t1',
    type: 'numerical',
    prompt:
      'In the brewery problem (Lecture 1), dark beer yields ₹15/L and light beer ₹20/L. Constraints: $5x + 15y \\le 480$ (corn), $4x + 4y \\le 160$ (hops), $35x + 20y \\le 1190$ (barley), $x, y \\ge 0$. What is the maximum profit (in ₹)?',
    correctAnswer: '740',
    solution:
      'Evaluating vertices of the feasible region: $(0,0) \\to 0$, $(0,32) \\to 640$, $(12,28) \\to 15(12)+20(28)=180+560=740$, $(26,14) \\to 670$, $(34,0) \\to 510$. Maximum profit is ₹740 at $(12, 28)$.',
    difficulty: 'medium',
    marks: 5,
    provenance: 'source_note_exercise',
    sourceRef: 'NPTEL LPP Lecture 1 (Week 1 & 2 Notes), pp. 1–2',
  },
  {
    id: 'qb-lpp-2',
    subjectId: 'lpp',
    unitId: 'lpp-u2',
    topicId: 'lpp-u2-t3',
    type: 'mcq',
    prompt:
      'Which rule guarantees that the Simplex method will never cycle even in the presence of degeneracy?',
    options: [
      'Dantzig’s largest-coefficient rule',
      'Bland’s least-index rule',
      'Steepest-edge rule',
      'Fourier–Motzkin elimination',
    ],
    correctAnswer: 'Bland’s least-index rule',
    solution:
      'Bland’s rule imposes an ordering $x_1, x_2, \\dots, x_n$ and always selects the entering and leaving variables with the smallest index among eligible candidates, preventing cycling.',
    distractorExplanations: {
      'Dantzig’s largest-coefficient rule': 'Can cycle on degenerate instances.',
      'Steepest-edge rule': 'Improves practical pivot speed but does not by itself guarantee anti-cycling.',
      'Fourier–Motzkin elimination': 'Used to eliminate variables from linear inequalities, not a Simplex pivot rule.',
    },
    difficulty: 'easy',
    marks: 2,
    provenance: 'source_note_exercise',
    sourceRef: 'NPTEL LPP Lecture 2 (Week 3 & 4 Notes), p. 17',
  },
  {
    id: 'qb-lpp-3',
    subjectId: 'lpp',
    unitId: 'lpp-u3',
    topicId: 'lpp-u3-t1',
    type: 'mcq',
    prompt:
      'For the standard primal LP $\\max\\{c^T x : Ax \\le b,\\; x \\ge 0\\}$ and its dual $\\min\\{b^T y : A^T y \\ge c,\\; y \\ge 0\\}$, if the primal is unbounded, what can be concluded about the dual?',
    options: [
      'The dual is also unbounded',
      'The dual is infeasible',
      'The dual has a unique optimal solution',
      'Strong duality still holds with finite value',
    ],
    correctAnswer: 'The dual is infeasible',
    solution:
      'By weak duality, any dual feasible solution $y$ provides an upper bound $b^T y \\ge c^T x$ for all primal feasible $x$. If the primal is unbounded, no such finite upper bound can exist, so the dual must be infeasible.',
    difficulty: 'medium',
    marks: 2,
    provenance: 'source_note_exercise',
    sourceRef: 'NPTEL LPP Lecture 3 (Week 5 Notes), pp. 7–8',
  },
  {
    id: 'qb-lpp-4',
    subjectId: 'lpp',
    unitId: 'lpp-u5',
    topicId: 'lpp-u5-t1',
    type: 'mcq',
    prompt:
      'For $n$ data points, which relationship always holds between Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE)?',
    options: [
      '$\\text{RMSE} \\le \\text{MAE}$',
      '$\\text{MAE} \\le \\text{RMSE} \\le \\sqrt{n}\\,\\text{MAE}$',
      '$\\text{MAE} \\le \\frac{1}{\\sqrt{n}}\\,\\text{RMSE}$',
      'No general inequality holds',
    ],
    correctAnswer: '$\\text{MAE} \\le \\text{RMSE} \\le \\sqrt{n}\\,\\text{MAE}$',
    solution:
      'By Cauchy–Schwarz, $\\sum |e_i| \\le \\sqrt{n}\\sqrt{\\sum e_i^2}$, giving $\\text{MAE} \\le \\text{RMSE}$. Since $\\sum e_i^2 \\le (\\sum |e_i|)^2$, we get $\\text{RMSE} \\le \\sqrt{n}\\,\\text{MAE}$.',
    difficulty: 'medium',
    marks: 3,
    provenance: 'source_note_exercise',
    sourceRef: 'NPTEL LPP Lecture 7 (Week 8 Notes_2), Exercise 14, p. 6',
  },

  // --- ASB-301 Engineering Mathematics III (Faculty Notes / Assignments) ---
  {
    id: 'qb-asb301-1',
    subjectId: 'asb-301',
    unitId: 'asb-301-u1',
    topicId: 'asb-301-u1-t1',
    type: 'numerical',
    prompt:
      'Calculate the divergence of the vector field $\\mathbf{V} = (x^2 y)\\mathbf{i} - (2 x z)\\mathbf{j} + (2 y z)\\mathbf{k}$ at the point $(1, 2, 3)$.',
    correctAnswer: '8',
    solution:
      '$\\text{div }\\mathbf{V} = \\nabla \\cdot \\mathbf{V} = \\frac{\\partial}{\\partial x}(x^2 y) + \\frac{\\partial}{\\partial y}(-2xz) + \\frac{\\partial}{\\partial z}(2yz) = 2xy + 0 + 2y = 2y(x + 1)$. At $(1, 2, 3)$: $2(2)(1 + 1) = 4(2) = 8$.',
    difficulty: 'easy',
    marks: 3,
    provenance: 'user_faculty_notes',
    sourceRef: 'Faculty Problem Sheet 1 — Vector Calculus, Q4',
  },
  {
    id: 'qb-asb301-2',
    subjectId: 'asb-301',
    unitId: 'asb-301-u2',
    topicId: 'asb-301-u2-t1',
    type: 'mcq',
    prompt:
      'A system of $m$ linear equations in $n$ unknowns $AX = B$ is consistent if and only if:',
    options: [
      '$\\text{Rank}(A) = \\text{Rank}([A|B])$',
      '$\\text{Rank}(A) = n$',
      '$\\det(A) \\neq 0$',
      '$\\text{Rank}([A|B]) > \\text{Rank}(A)$',
    ],
    correctAnswer: '$\\text{Rank}(A) = \\text{Rank}([A|B])$',
    solution:
      'By the Rouché–Capelli Theorem, a linear system is consistent if and only if the rank of the coefficient matrix $A$ equals the rank of the augmented matrix $[A|B]$.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'user_faculty_notes',
    sourceRef: 'Faculty Lecture Notes — Linear Systems & Consistency, p. 12',
  },

  // --- ASM-301 Universal Human Values (Faculty Notes / Assignments) ---
  {
    id: 'qb-asm301-1',
    subjectId: 'asm-301',
    unitId: 'asm-301-u1',
    topicId: 'asm-301-u1-t1',
    type: 'mcq',
    prompt:
      'According to the Universal Human Values framework, what is the core process of Value Education?',
    options: [
      'Self-Exploration through Natural Acceptance and Experiential Validation',
      'Rote memorisation of moral scriptures and doctrines',
      'External enforcement of disciplinary codes',
      'Economic maximisation of physical facilities',
    ],
    correctAnswer: 'Self-Exploration through Natural Acceptance and Experiential Validation',
    solution:
      'The process of value education is self-exploration, which involves verifying proposals on the basis of one’s natural acceptance and validating them through living experience.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'user_faculty_notes',
    sourceRef: 'UHV Faculty Course Pack, Unit 1 Module Notes, p. 5',
  },
  {
    id: 'qb-asm301-2',
    subjectId: 'asm-301',
    unitId: 'asm-301-u2',
    topicId: 'asm-301-u2-t1',
    type: 'mcq',
    prompt:
      'In the human being, the needs of the Self (\'I\') like respect and trust are qualitative and continuous, whereas the needs of the Body are:',
    options: [
      'Quantitative and temporary (limited in quantity)',
      'Continuous and unlimited',
      'Purely psychological and qualitative',
      'Identical to the needs of the Self',
    ],
    correctAnswer: 'Quantitative and temporary (limited in quantity)',
    solution:
      'Needs of the Body (food, clothes, shelter) are physical/physico-chemical, quantifiable and required intermittently/temporarily, unlike the continuous qualitative needs of the Self (trust, respect, happiness).',
    difficulty: 'easy',
    marks: 2,
    provenance: 'user_faculty_notes',
    sourceRef: 'UHV Faculty Course Pack, Unit 2 Module Notes, p. 14',
  },

    // --- ASM-301 Universal Human Values Notes & Assignment Bank ---
  {
    id: 'qb-asm301-3',
    subjectId: 'asm-301',
    unitId: 'asm-301-u1',
    topicId: 'asm-301-u1-t2',
    type: 'mcq',
    prompt:
      'What is the correct priority of the three basic requirements for human fulfilment?',
    options: [
      '1. Right Understanding -> 2. Relationship -> 3. Physical Facility',
      '1. Physical Facility -> 2. Relationship -> 3. Right Understanding',
      '1. Relationship -> 2. Physical Facility -> 3. Right Understanding',
      '1. Physical Facility -> 2. Right Understanding -> 3. Relationship',
    ],
    correctAnswer: '1. Right Understanding -> 2. Relationship -> 3. Physical Facility',
    solution:
      'Right understanding in the Self is the primary necessity, which guides harmonious relationships with humans and dictates the correct appraisal and production of physical facilities.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'user_faculty_notes',
    sourceRef: 'UHV Faculty Course Pack, Unit 1 Lecture Handout, p. 8',
  },
  {
    id: 'qb-asm301-4',
    subjectId: 'asm-301',
    unitId: 'asm-301-u2',
    topicId: 'asm-301-u2-t2',
    type: 'mcq',
    prompt:
      'What is "Sanyam" in the context of harmony in the human being?',
    options: [
      'The feeling of responsibility in the Self ("I") for nurturing, protecting, and rightly utilizing the Body',
      'Strict fasting and self-mortification of physical desires',
      'A chemical state of equilibrium inside bodily organs',
      'Suppression of emotions through external discipline',
    ],
    correctAnswer:
      'The feeling of responsibility in the Self ("I") for nurturing, protecting, and rightly utilizing the Body',
    solution:
      'Sanyam (Self-regulation) is the conscious realization in "I" to nurture (Poshan), protect (Sanrakshan), and rightly utilize (Sadviniyog) the material body.',
    difficulty: 'medium',
    marks: 3,
    provenance: 'user_faculty_notes',
    sourceRef: 'UHV Faculty Course Pack, Unit 2 Module Notes, p. 19',
  },
  {
    id: 'qb-asm301-5',
    subjectId: 'asm-301',
    unitId: 'asm-301-u3',
    topicId: 'asm-301-u3-t2',
    type: 'mcq',
    prompt:
      'How does UHV distinguish between Respect (Samman) and Differentiation (Bhed-Bhav)?',
    options: [
      'Respect is based on right evaluation of the human being; differentiation is based on superficial criteria like wealth, gender, or position',
      'Respect is only shown to elderly superiors; differentiation is equal treatment',
      'Respect is formal etiquette; differentiation is natural preference',
      'Both mean identical forms of social recognition',
    ],
    correctAnswer:
      'Respect is based on right evaluation of the human being; differentiation is based on superficial criteria like wealth, gender, or position',
    solution:
      'Respect (Samman) is Samyak Mulyankan (right evaluation). Differentiation discriminates based on the body (age, gender, race), physical facility (wealth, status), or beliefs (sect, isms).',
    difficulty: 'medium',
    marks: 4,
    provenance: 'user_faculty_notes',
    sourceRef: 'UHV Faculty Course Pack, Unit 3 Lecture Notes, p. 24',
  },
  {
    id: 'qb-asm301-6',
    subjectId: 'asm-301',
    unitId: 'asm-301-u4',
    topicId: 'asm-301-u4-t2',
    type: 'mcq',
    prompt:
      'What is meant by the cyclic property (Avartansheelata) of nature?',
    options: [
      'Every natural process transforms and returns materials to the ecosystem without permanent toxic waste',
      'The Earth rotates on its axis periodically',
      'Economic cycles of inflation and deflation',
      'Planetary orbits following Keplerian laws',
    ],
    correctAnswer:
      'Every natural process transforms and returns materials to the ecosystem without permanent toxic waste',
    solution:
      'In pristine nature, materials participate in closed cyclic transformations (water cycle, carbon cycle, organic decay). Only non-cyclic human interventions create landfills and pollution.',
    difficulty: 'easy',
    marks: 3,
    provenance: 'user_faculty_notes',
    sourceRef: 'UHV Faculty Course Pack, Unit 4 Ecology & Nature Notes, p. 12',
  },
  {
    id: 'qb-asm301-7',
    subjectId: 'asm-301',
    unitId: 'asm-301-u5',
    topicId: 'asm-301-u5-t1',
    type: 'mcq',
    prompt:
      'Which of the following defines an "Appropriate Technology" from a holistic professional ethics standpoint?',
    options: [
      'A technology that is technically sound, people-friendly (preserves human dignity), and eco-friendly (cyclic)',
      'The cheapest technology that generates maximum short-term quarterly profit',
      'Any technology that completely automates human jobs to zero labor',
      'Imported proprietary technology with exclusive patent protection',
    ],
    correctAnswer:
      'A technology that is technically sound, people-friendly (preserves human dignity), and eco-friendly (cyclic)',
    solution:
      'Appropriate technology must satisfy technical viability, people-friendliness (safe, non-alienating), and eco-friendliness (renewable, cyclic, non-polluting).',
    difficulty: 'medium',
    marks: 4,
    provenance: 'user_faculty_notes',
    sourceRef: 'UHV Faculty Course Pack, Unit 5 Professional Ethics, p. 31',
  },

  // --- DSC-302 Data Structures Lab / Practical Bank ---
  {
    id: 'qb-dsl301-1',
    subjectId: 'dsc-302',
    unitId: 'dsc-302-u3',
    topicId: 'dsc-302-u3-t1',
    type: 'mcq',
    prompt:
      'In a singly linked list implementation in C, what is the time complexity to insert a new node immediately after a given pointer `curr`?',
    options: ['$O(1)$', '$O(n)$', '$O(\\log n)$', '$O(n \\log n)$'],
    correctAnswer: '$O(1)$',
    solution:
      'Given a direct pointer `curr` to the node, inserting after it requires updating two pointers: `new_node->next = curr->next; curr->next = new_node;`, which takes constant time $O(1)$.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'platform_practice_lab',
    sourceRef: 'DSL-301 Data Structures Lab Manual, Experiment 3',
  },

  // ==========================================
  // SECTION 3: AI-GENERATED QUESTIONS
  // Provenance: 'ai_generated_verified'
  // Synthesised strictly from syllabus topics, with complete solutions and verified academic accuracy
  // ==========================================

  // --- ASB-301 Engineering Mathematics III (AI-Generated Practice) ---
  {
    id: 'ai-asb301-1',
    subjectId: 'asb-301',
    unitId: 'asb-301-u4',
    topicId: 'asb-301-u4-t1',
    type: 'mcq',
    prompt:
      'What is the order of the linear difference equation $y_{n+3} - 5y_{n+2} + 6y_n = 2^n$?',
    options: ['3', '2', '1', '5'],
    correctAnswer: '3',
    solution:
      'The order of a difference equation is the difference between the highest and lowest subscripts of the dependent variable: $(n+3) - n = 3$.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'ai_generated_verified',
    sourceRef: 'AI Practice Engine • Mapped to JMI ASB-301 Unit 4 Syllabus',
  },
  {
    id: 'ai-asb301-2',
    subjectId: 'asb-301',
    unitId: 'asb-301-u5',
    topicId: 'asb-301-u5-t2',
    type: 'mcq',
    prompt:
      'For a frequency distribution, if the third central moment $\\mu_3 = 0$, what can be inferred about the distribution?',
    options: [
      'The distribution is symmetric',
      'The distribution is mesokurtic',
      'The distribution is positively skewed',
      'The variance is zero',
    ],
    correctAnswer: 'The distribution is symmetric',
    solution:
      'Skewness $\\beta_1 = \\frac{\\mu_3^2}{\\mu_2^3}$. When $\\mu_3 = 0$, skewness is zero, which is a property of a perfectly symmetrical distribution.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'ai_generated_verified',
    sourceRef: 'AI Practice Engine • Mapped to JMI ASB-301 Unit 5 Syllabus',
  },

  // --- ASM-301 Universal Human Values (AI-Generated Practice) ---
  {
    id: 'ai-asm301-1',
    subjectId: 'asm-301',
    unitId: 'asm-301-u4',
    topicId: 'asm-301-u4-t1',
    type: 'mcq',
    prompt:
      'In the analysis of Trust in relationships, what is the crucial distinction emphasised between "Intention" and "Competence"?',
    options: [
      'Intention is what one naturally aspires to (always good), while Competence is the ability to fulfil that intention',
      'Intention depends on skills, while Competence is innate',
      'Intention changes every day, while Competence is immutable',
      'There is no distinction; both are identical',
    ],
    correctAnswer:
      'Intention is what one naturally aspires to (always good), while Competence is the ability to fulfil that intention',
    solution:
      'Natural acceptance reveals that every human being has good intention (desiring happiness for oneself and others), but may lack the competence to implement it without causing mistakes.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'ai_generated_verified',
    sourceRef: 'AI Practice Engine • Mapped to JMI ASM-301 Unit 4 Syllabus',
  },

    // --- ASM-301 Universal Human Values (AI-Generated Scenarios, Case Studies & Practice) ---
  {
    id: 'ai-asm301-2',
    subjectId: 'asm-301',
    unitId: 'asm-301-u1',
    topicId: 'asm-301-u1-t1',
    type: 'mcq',
    prompt:
      'A software engineer is capable of building high-performance malware for profit. In the UHV framework, this engineer has:',
    options: [
      'High skill competence, but lacks right understanding and value education',
      'High value education, but poor skill education',
      'Both high value education and high skill competence',
      'Lacks both skill and value education',
    ],
    correctAnswer:
      'High skill competence, but lacks right understanding and value education',
    solution:
      'Skill education provides the "how-to" capability (writing code, hacking systems), whereas Value Education provides clarity on "why and what should be done" (ethical purpose, societal benefit). High skill without value leads to destructive technologies.',
    difficulty: 'medium',
    marks: 3,
    provenance: 'ai_generated_verified',
    sourceRef: 'AI Practice Engine • UHV Scenario Bank / Unit 1',
  },
  {
    id: 'ai-asm301-3',
    subjectId: 'asm-301',
    unitId: 'asm-301-u2',
    topicId: 'asm-301-u2-t2',
    type: 'mcq',
    prompt:
      'In a personal SWOT analysis, how should an engineering student classify "procrastination" and "rapid advancement of AI job automation"?',
    options: [
      'Procrastination is an Internal Weakness (W); AI automation is an External Threat (T)',
      'Procrastination is an External Threat (T); AI automation is an Internal Weakness (W)',
      'Both are Internal Strengths (S)',
      'Both are External Opportunities (O)',
    ],
    correctAnswer:
      'Procrastination is an Internal Weakness (W); AI automation is an External Threat (T)',
    solution:
      'SWOT divides factors into internal factors within personal agency (Strengths, Weaknesses) and external environmental shifts (Opportunities, Threats).',
    difficulty: 'easy',
    marks: 2,
    provenance: 'ai_generated_verified',
    sourceRef: 'AI Practice Engine • UHV SWOT Application / Unit 2',
  },
  {
    id: 'ai-asm301-4',
    subjectId: 'asm-301',
    unitId: 'asm-301-u3',
    topicId: 'asm-301-u3-t1',
    type: 'mcq',
    prompt:
      'CASE STUDY: Team member Alice accidentally deploys a buggy database script that drops a development table. Bob immediately shouts that Alice did it on purpose to sabotage the demo. According to UHV Trust principles, how has Bob erred?',
    options: [
      'Bob confused a lack of Competence (an honest mistake) with malicious Intention',
      'Bob correctly identified Alice intention as destructive',
      'Bob should have fired Alice without an explanation',
      'Bob failed to check Alice physical facilities',
    ],
    correctAnswer:
      'Bob confused a lack of Competence (an honest mistake) with malicious Intention',
    solution:
      'Natural acceptance indicates that human intention is to do good and avoid mistakes. Alice wanted a successful deployment (good intention) but lacked the technical competence to verify the migration script. Bob wrongly attributed her lapse in competence to bad intention.',
    difficulty: 'hard',
    marks: 5,
    provenance: 'ai_generated_verified',
    sourceRef: 'AI Practice Engine • UHV Workplace Dilemma / Unit 3',
  },
  {
    id: 'ai-asm301-5',
    subjectId: 'asm-301',
    unitId: 'asm-301-u4',
    topicId: 'asm-301-u4-t1',
    type: 'mcq',
    prompt:
      'Why is the relationship between the first three orders of nature (Material, Bio, Animal) inherently mutually fulfilling, while modern human society faces an ecological crisis?',
    options: [
      'The first three orders follow natural self-regulation, while humans act on unlimited physical accumulation without right understanding',
      'Animals consume more resources than the Earth can replenish',
      'The material order has run out of elements naturally',
      'Plants produce toxic gases that animals cannot absorb',
    ],
    correctAnswer:
      'The first three orders follow natural self-regulation, while humans act on unlimited physical accumulation without right understanding',
    solution:
      'The Material, Bio, and Animal orders operate in natural self-regulation and cyclic recyclability. Humans have the faculty of imagination and desire, which without right understanding creates artificial desires and endless non-cyclic exploitation.',
    difficulty: 'medium',
    marks: 4,
    provenance: 'ai_generated_verified',
    sourceRef: 'AI Practice Engine • UHV Ecology & Four Orders / Unit 4',
  },
  {
    id: 'ai-asm301-6',
    subjectId: 'asm-301',
    unitId: 'asm-301-u5',
    topicId: 'asm-301-u5-t2',
    type: 'mcq',
    prompt:
      'CASE STUDY: An environmental engineer at a manufacturing plant discovers that chemical runoff exceeds legal safety thresholds by 15%, threatening local ground water. Her manager warns that reporting it will delay the product launch and cut annual bonuses. Applying the UHV Professional Ethics framework, what is her primary ethical duty?',
    options: [
      'Report the hazard and advocate for an eco-friendly wastewater treatment retrofit, prioritizing public health and natural order over corporate bonuses',
      'Remain silent because employee loyalty to management overrides public health',
      'Falsify the test report by 15% to protect the company quarterly bonus',
      'Resign immediately without documenting or reporting the pollution',
    ],
    correctAnswer:
      'Report the hazard and advocate for an eco-friendly wastewater treatment retrofit, prioritizing public health and natural order over corporate bonuses',
    solution:
      'Professional competence must augment universal human order. The engineer has a direct ethical responsibility toward mutual fulfilment in society and nature. Corporate bonuses cannot justify irreversible ground water poisoning.',
    difficulty: 'hard',
    marks: 6,
    provenance: 'ai_generated_verified',
    sourceRef: 'AI Practice Engine • UHV Engineering Case Study / Unit 5',
  },

  // --- DSC-301 Discrete Mathematics (AI-Generated Practice) ---
  {
    id: 'ai-dsc301-1',
    subjectId: 'dsc-301',
    unitId: 'dsc-301-u2',
    topicId: 'dsc-301-u2-t5',
    type: 'mcq',
    prompt: 'The Welch–Powell algorithm is used in Graph Theory for:',
    options: [
      'Graph colouring (vertex colouring)',
      'Finding minimum spanning trees',
      'Testing planarity of a graph',
      'Finding Eulerian circuits',
    ],
    correctAnswer: 'Graph colouring (vertex colouring)',
    solution:
      'Welch–Powell orders vertices by decreasing degree and greedily assigns the smallest available colour to each uncoloured vertex and non-adjacent vertices.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'ai_generated_verified',
    sourceRef: 'AI Practice Engine • Mapped to JMI DSC-301 Unit 2 Syllabus',
  },

  // --- DSC-302 Data Structures (AI-Generated Practice) ---
  {
    id: 'ai-dsc302-1',
    subjectId: 'dsc-302',
    unitId: 'dsc-302-u4',
    topicId: 'dsc-302-u4-t2',
    type: 'mcq',
    prompt: 'What is the worst-case height of an AVL tree with $n$ nodes?',
    options: ['$O(\\log n)$', '$O(n)$', '$O(\\sqrt{n})$', '$O(n \\log n)$'],
    correctAnswer: '$O(\\log n)$',
    solution:
      'An AVL tree maintains the balance factor of every node in $\\{-1, 0, +1\\}$, bounding the height to at most $1.44 \\log_2(n+2) - 0.328 = O(\\log n)$.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'ai_generated_verified',
    sourceRef: 'AI Practice Engine • Mapped to JMI DSC-302 Unit 4 Syllabus',
  },

  // --- DSC-303 Digital Logic Design (AI-Generated Practice) ---
  {
    id: 'ai-dsc303-1',
    subjectId: 'dsc-303',
    unitId: 'dsc-303-u2',
    topicId: 'dsc-303-u2-t1',
    type: 'mcq',
    prompt: 'In a 4-variable Karnaugh Map, a group of 8 adjacent 1s eliminates how many variables?',
    options: ['3 variables', '1 variable', '2 variables', '4 variables'],
    correctAnswer: '3 variables',
    solution:
      'A group of $2^k$ cells in a K-map eliminates $k$ variables. Since $8 = 2^3$, it eliminates 3 variables, leaving 1 literal.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'ai_generated_verified',
    sourceRef: 'AI Practice Engine • Mapped to JMI DSC-303 Unit 2 Syllabus',
  },

  // --- DSC-304 Database Management Systems (AI-Generated Practice) ---
  {
    id: 'ai-dsc304-1',
    subjectId: 'dsc-304',
    unitId: 'dsc-304-u2',
    topicId: 'dsc-304-u2-t3',
    type: 'mcq',
    prompt: 'A relation is in BCNF if and only if for every non-trivial functional dependency $X \\to Y$:',
    options: [
      '$X$ is a superkey',
      '$Y$ is a prime attribute',
      '$X$ is a candidate key only',
      'There are no transitive dependencies',
    ],
    correctAnswer: '$X$ is a superkey',
    solution:
      'Boyce–Codd Normal Form (BCNF) requires that for every non-trivial FD $X \\to Y$ holding in the relation, the determinant $X$ must be a superkey.',
    difficulty: 'easy',
    marks: 2,
    provenance: 'ai_generated_verified',
    sourceRef: 'AI Practice Engine • Mapped to JMI DSC-304 Unit 2 Syllabus',
  },
];
