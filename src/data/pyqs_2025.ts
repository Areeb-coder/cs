import { Question } from '@/types/academic';

/**
 * AUTHENTIC 2025 PREVIOUS YEAR QUESTIONS (JMI B.Tech Semester III)
 * Extracted directly from official 2025-26 End-Semester, Mid-Semester, and Sessional examination papers.
 * Subjects: ASB-301 (Math III), DSC-301 (Discrete Math), DSC-302 (Data Structures),
 * DSC-303 (Digital Logic Design), DSC-304 (DBMS), ASM-301 (UHV).
 */

export const PYQS_2025: Question[] = [
  // =========================================================================
  // 1. ASB-301: ENGINEERING MATHEMATICS III (2025 PYQs)
  // =========================================================================
  {
    id: 'pyq-2025-asb301-q1a-solenoidal',
    subjectId: 'asb-301',
    unitId: 'asb-301-u1',
    topicId: 'asb-301-u1-t1',
    type: 'short_answer',
    prompt: 'Write the condition under which a vector field $\\vec{V}$ becomes a Solenoidal field.',
    correctAnswer: '$$\\text{div } \\vec{V} = \\nabla \\cdot \\vec{V} = 0$$',
    solution: 'A vector point function $\\vec{V}$ is called solenoidal if its divergence is zero at all points in the region, i.e., $$\\nabla \\cdot \\vec{V} = \\frac{\\partial V_1}{\\partial x} + \\frac{\\partial V_2}{\\partial y} + \\frac{\\partial V_3}{\\partial z} = 0$$ Physically, this signifies that there are no sources or sinks of flux in the region.',
    modelAnswer: 'A vector field $\\vec{V}$ is solenoidal if and only if $\\nabla \\cdot \\vec{V} = 0$ (divergence of $\\vec{V}$ is identically zero throughout the domain).',
    keyMarkingPoints: [
      'Mathematical condition $\\nabla \\cdot \\vec{V} = 0$ (0.5 marks)',
      'Explanation of physical meaning / flux incompressibility (0.5 marks)'
    ],
    difficulty: 'easy',
    marks: 1,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. (Data Science) 1st Mid-Sem Exam 2025-26, Paper ASB-301, Q1(a)',
    year: '2025',
    examSession: '1st Mid-Semester',
    questionNumber: 'Q1(a)',
    isSubjective: true
  },
  {
    id: 'pyq-2025-asb301-q1b-gradient',
    subjectId: 'asb-301',
    unitId: 'asb-301-u1',
    topicId: 'asb-301-u1-t1',
    type: 'short_answer',
    prompt: 'Define the gradient of a scalar field $\\phi(x, y, z)$ and write its mathematical formula in Cartesian coordinates.',
    correctAnswer: '$$\\text{grad } \\phi = \\nabla \\phi = \\frac{\\partial \\phi}{\\partial x}\\hat{i} + \\frac{\\partial \\phi}{\\partial y}\\hat{j} + \\frac{\\partial \\phi}{\\partial z}\\hat{k}$$',
    solution: 'The gradient of a continuously differentiable scalar field $\\phi(x,y,z)$ is a vector field pointing in the direction of the greatest rate of increase of $\\phi$. In Cartesian coordinates:\n$$\\nabla \\phi = \\hat{i}\\frac{\\partial \\phi}{\\partial x} + \\hat{j}\\frac{\\partial \\phi}{\\partial y} + \\hat{k}\\frac{\\partial \\phi}{\\partial z}$$',
    modelAnswer: 'The gradient $\\nabla \\phi$ represents a vector normal to the level surfaces $\\phi(x,y,z) = c$, given by $\\nabla \\phi = \\frac{\\partial \\phi}{\\partial x}\\hat{i} + \\frac{\\partial \\phi}{\\partial y}\\hat{j} + \\frac{\\partial \\phi}{\\partial z}\\hat{k}$.',
    keyMarkingPoints: [
      'Cartesian vector formula with unit vectors $\\hat{i}, \\hat{j}, \\hat{k}$ (0.5 marks)',
      'Definition as maximum rate of directional increase (0.5 marks)'
    ],
    difficulty: 'easy',
    marks: 1,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. (Data Science) 1st Mid-Sem Exam 2025-26, Paper ASB-301, Q1(b)',
    year: '2025',
    examSession: '1st Mid-Semester',
    questionNumber: 'Q1(b)',
    isSubjective: true
  },
  {
    id: 'pyq-2025-asb301-q1c-rank',
    subjectId: 'asb-301',
    unitId: 'asb-301-u2',
    topicId: 'asb-301-u2-t1',
    type: 'short_answer',
    prompt: 'Define the rank of a matrix.',
    correctAnswer: '$$\\text{Maximum number of linearly independent row or column vectors, or order of the largest non-zero minor}$$',
    solution: 'The rank of a matrix $A$, denoted $\\rho(A)$, is defined as:\n1. The maximum order of any non-vanishing minor of $A$.\n2. Equivalently, the maximum number of linearly independent row (or column) vectors of $A$.\n3. In row echelon form, it equals the number of non-zero rows.',
    modelAnswer: 'The rank of a matrix is the maximum order of its non-zero minors, which equals the number of linearly independent rows or the number of non-zero rows in its row-echelon form.',
    keyMarkingPoints: [
      'Definition via non-zero minors or linearly independent rows/columns (1 mark)'
    ],
    difficulty: 'easy',
    marks: 1,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. (Data Science) 1st Mid-Sem Exam 2025-26, Paper ASB-301, Q1(c)',
    year: '2025',
    examSession: '1st Mid-Semester',
    questionNumber: 'Q1(c)',
    isSubjective: true
  },
  {
    id: 'pyq-2025-asb301-q1d-infinite-sol',
    subjectId: 'asb-301',
    unitId: 'asb-301-u2',
    topicId: 'asb-301-u2-t1',
    type: 'short_answer',
    prompt: 'Write the condition for the non-homogeneous system of linear equations $AX = B$ to have infinitely many solutions.',
    correctAnswer: '$$\\text{rank}(A) = \\text{rank}([A|B]) = r < n$$',
    solution: 'For a non-homogeneous system of $m$ linear equations in $n$ unknowns $AX = B$ with augmented matrix $[A|B]$:\n1. The system is consistent if and only if $\\text{rank}(A) = \\text{rank}([A|B]) = r$.\n2. It has infinitely many solutions if and only if the rank $r < n$, where $n$ is the total number of unknowns. The system then has $n - r$ linearly independent arbitrary parameters.',
    modelAnswer: 'A non-homogeneous system $AX=B$ has infinitely many solutions if $\\text{rank}(A) = \\text{rank}([A|B]) = r < n$, where $n$ is the number of variables (possessing $n - r$ free parameters).',
    keyMarkingPoints: [
      'Consistency condition $\\text{rank}(A) = \\text{rank}([A|B])$ (0.5 marks)',
      'Strict inequality $r < n$ with number of variables $n$ (0.5 marks)'
    ],
    difficulty: 'easy',
    marks: 1,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. (Data Science) 1st Mid-Sem Exam 2025-26, Paper ASB-301, Q1(d)',
    year: '2025',
    examSession: '1st Mid-Semester',
    questionNumber: 'Q1(d)',
    isSubjective: true
  },
  {
    id: 'pyq-2025-asb301-q2-greens-parabola',
    subjectId: 'asb-301',
    unitId: 'asb-301-u1',
    topicId: 'asb-301-u1-t2',
    type: 'numerical',
    prompt: 'Verify Green\'s theorem in the plane for $\\oint_C [(3x^2 - 8y^2)dx + (4y - 6xy)dy]$, where $C$ is the boundary of the region bounded by $y = \\sqrt{x}$ and $y = x^2$.',
    correctAnswer: '$$\\frac{3}{2}$$',
    solution: 'By Green\'s Theorem: $\\oint_C (M dx + N dy) = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right) dx dy$.\nHere $M = 3x^2 - 8y^2 \\implies \\frac{\\partial M}{\\partial y} = -16y$.\n$N = 4y - 6xy \\implies \\frac{\\partial N}{\\partial x} = -6y$.\nIntegrand $= \\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} = -6y - (-16y) = 10y$.\nRegion $R$: bounded by $y = x^2$ (lower curve) and $y = \\sqrt{x}$ (upper curve). Intersection points: $x^2 = \\sqrt{x} \\implies x^4 = x \\implies x(x^3 - 1) = 0 \\implies x = 0, 1$.\nDouble Integral:\n$$\\iint_R 10y dy dx = \\int_{x=0}^1 \\left[ \\int_{y=x^2}^{\\sqrt{x}} 10y dy \\right] dx = \\int_0^1 10 \\left[ \\frac{y^2}{2} \\right]_{x^2}^{\\sqrt{x}} dx = 5 \\int_0^1 (x - x^4) dx = 5 \\left[ \\frac{x^2}{2} - \\frac{x^5}{5} \\right]_0^1 = 5 \\left( \\frac{1}{2} - \\frac{1}{5} \\right) = 5 \\left( \\frac{3}{10} \\right) = \\frac{3}{2}$$\nLine Integral Verification:\n- Along $C_1 (y=x^2, dy=2x dx, x: 0 \\to 1)$:\n$\\int_0^1 [(3x^2 - 8x^4) + (4x^2 - 6x^3)(2x)] dx = \\int_0^1 (3x^2 - 8x^4 + 8x^3 - 12x^4) dx = \\int_0^1 (3x^2 + 8x^3 - 20x^4) dx = [x^3 + 2x^4 - 4x^5]_0^1 = 1 + 2 - 4 = -1$.\n- Along $C_2 (y=\\sqrt{x} \\implies x=y^2, dx=2y dy, y: 1 \\to 0)$:\n$\\int_1^0 [(3y^4 - 8y^2)(2y) + (4y - 6y^3)] dy = \\int_1^0 (6y^5 - 16y^3 + 4y - 6y^3) dy = \\int_1^0 (6y^5 - 22y^3 + 4y) dy = [y^6 - \\frac{11}{2}y^4 + 2y^2]_1^0 = 0 - (1 - 5.5 + 2) = -(-2.5) = \\frac{5}{2}$.\nTotal Line Integral $= -1 + \\frac{5}{2} = \\frac{3}{2}$.\nBoth line integral and double integral equal $\\frac{3}{2}$. Hence Green\'s Theorem is verified.',
    modelAnswer: 'Green\'s theorem gives $\\iint_R (\\partial N/\\partial x - \\partial M/\\partial y) dA = \\int_0^1 \\int_{x^2}^{\\sqrt{x}} 10y dy dx = 5\\int_0^1 (x - x^4) dx = 3/2$. Evaluating line integrals along $C_1 (y=x^2)$ gives $-1$ and along $C_2 (y=\\sqrt{x})$ gives $5/2$. Sum $= -1 + 5/2 = 3/2$, verifying the theorem.',
    keyMarkingPoints: [
      'Finding partial derivatives $\\partial N/\\partial x = -6y, \\partial M/\\partial y = -16y$ and difference $10y$ (1 mark)',
      'Double integral setup with limits $y \\in [x^2, \\sqrt{x}]$ and $x \\in [0, 1]$ yielding $3/2$ (1.5 marks)',
      'Line integral calculations along both parabolic arcs confirming equality $3/2$ (1.5 marks)'
    ],
    difficulty: 'medium',
    marks: 4,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. (Data Science) 1st Mid-Sem Exam 2025-26, Paper ASB-301, Q2',
    year: '2025',
    examSession: '1st Mid-Semester',
    questionNumber: 'Q2',
    isSubjective: true
  },
  {
    id: 'pyq-2025-asb301-q3-consistency-linear',
    subjectId: 'asb-301',
    unitId: 'asb-301-u2',
    topicId: 'asb-301-u2-t1',
    type: 'numerical',
    prompt: 'Test for consistency and solve the following system of linear equations:\n$$4x - 2y + 6z = 8$$\n$$x + y - 3z = -1$$\n$$15x - 3y + 9z = 21$$',
    correctAnswer: '$$\\text{Consistent with infinitely many solutions: } x = 1, y = 3k - 2, z = k$$',
    solution: 'Augmented matrix $[A|B] = \\begin{bmatrix} 4 & -2 & 6 & | & 8 \\\\ 1 & 1 & -3 & | & -1 \\\\ 15 & -3 & 9 & | & 21 \\end{bmatrix}$.\nDivide $R_1$ by 2: $\\begin{bmatrix} 2 & -1 & 3 & | & 4 \\\\ 1 & 1 & -3 & | & -1 \\\\ 15 & -3 & 9 & | & 21 \\end{bmatrix}$.\nInterchange $R_1 \\leftrightarrow R_2$: $\\begin{bmatrix} 1 & 1 & -3 & | & -1 \\\\ 2 & -1 & 3 & | & 4 \\\\ 15 & -3 & 9 & | & 21 \\end{bmatrix}$.\nRow operations: $R_2 \\to R_2 - 2R_1$, $R_3 \\to R_3 - 15R_1$:\n$R_2: [2 - 2, -1 - 2, 3 - (-6) | 4 - (-2)] = [0, -3, 9 | 6]$.\n$R_3: [15 - 15, -3 - 15, 9 - (-45) | 21 - (-15)] = [0, -18, 54 | 36]$.\nNow $R_3 \\to R_3 - 6R_2$:\n$R_3: [0, -18 - (-18), 54 - 54 | 36 - 36] = [0, 0, 0 | 0]$.\nRow echelon form:\n$\\begin{bmatrix} 1 & 1 & -3 & | & -1 \\\\ 0 & -3 & 9 & | & 6 \\\\ 0 & 0 & 0 & | & 0 \\end{bmatrix}$.\nHere $\\text{rank}(A) = 2 = \\text{rank}([A|B]) < 3$ (number of unknowns).\nHence, the system is consistent with infinitely many solutions.\nFrom row 2: $-3y + 9z = 6 \\implies -y + 3z = 2 \\implies y = 3z - 2$.\nLet $z = k$ (where $k$ is any real parameter) $\\implies y = 3k - 2$.\nFrom row 1: $x + y - 3z = -1 \\implies x + (3k - 2) - 3k = -1 \\implies x - 2 = -1 \\implies x = 1$.\nSolution: $x = 1, y = 3k - 2, z = k$.',
    modelAnswer: 'Row echelon form shows $\\text{rank}(A) = \\text{rank}([A|B]) = 2 < 3$, establishing consistency with infinitely many solutions. Setting $z = k$, back substitution yields $x = 1, y = 3k - 2, z = k$.',
    keyMarkingPoints: [
      'Constructing augmented matrix $[A|B]$ (0.5 marks)',
      'Row reductions to echelon form with zero row in $R_3$ (1.5 marks)',
      'Rank conclusion: $\\text{rank}(A) = \\text{rank}([A|B]) = 2 < 3$ (1 mark)',
      'Parametric general solution $x = 1, y = 3k - 2, z = k$ (1 mark)'
    ],
    difficulty: 'medium',
    marks: 4,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. (Data Science) 1st Mid-Sem Exam 2025-26, Paper ASB-301, Q3',
    year: '2025',
    examSession: '1st Mid-Semester',
    questionNumber: 'Q3',
    isSubjective: true
  },
  {
    id: 'pyq-2025-asb301-endsem-gauss-parallelepiped',
    subjectId: 'asb-301',
    unitId: 'asb-301-u1',
    topicId: 'asb-301-u1-t2',
    type: 'numerical',
    prompt: 'Verify Gauss\'s divergence theorem for:\n$$\\vec{F} = (x^2 - yz)\\hat{i} + (y^2 - zx)\\hat{j} + (z^2 - xy)\\hat{k}$$\ntaken over the rectangular parallelepiped $0 \\le x \\le a, 0 \\le y \\le b, 0 \\le z \\le c$.',
    correctAnswer: '$$abc(a + b + c)$$',
    solution: 'By Gauss Divergence Theorem: $\\iint_S \\vec{F} \\cdot \\hat{n} dS = \\iiint_V (\\nabla \\cdot \\vec{F}) dV$.\nDivergence:\n$\\nabla \\cdot \\vec{F} = \\frac{\\partial}{\\partial x}(x^2 - yz) + \\frac{\\partial}{\\partial y}(y^2 - zx) + \\frac{\\partial}{\\partial z}(z^2 - xy) = 2x + 2y + 2z = 2(x + y + z)$.\nVolume Integral:\n$$\\iiint_V 2(x + y + z) dx dy dz = 2 \\int_0^a \\int_0^b \\int_0^c (x + y + z) dz dy dx$$\nIntegrating with respect to $z$:\n$\\int_0^c (x + y + z) dz = (x + y)c + \\frac{c^2}{2}$.\nIntegrating with respect to $y$:\n$\\int_0^b \\left[(x + y)c + \\frac{c^2}{2}\\right] dy = xbc + \\frac{b^2 c}{2} + \\frac{b c^2}{2} = bc \\left(x + \\frac{b + c}{2}\\right)$.\nIntegrating with respect to $x$:\n$bc \\int_0^a \\left(x + \\frac{b + c}{2}\\right) dx = bc \\left[\\frac{a^2}{2} + a \\frac{b + c}{2}\\right] = \\frac{abc}{2} (a + b + c)$.\nMultiplying by the factor of 2 outside:\nVolume Integral $= 2 \\times \\frac{abc}{2} (a + b + c) = abc(a + b + c)$.\nEvaluating surface integrals across all 6 rectangular faces ($x=0, x=a; y=0, y=b; z=0, z=c$) sums identically to $abc(a+b+c)$. Hence Gauss\'s Divergence Theorem is verified.',
    modelAnswer: 'Divergence is $\\nabla \\cdot \\vec{F} = 2(x+y+z)$. The triple integral over the parallelepiped evaluates to $2 \\times \\frac{abc(a+b+c)}{2} = abc(a+b+c)$. Surface integrals across the six faces sum to $abc(a+b+c)$, verifying Gauss\'s theorem.',
    keyMarkingPoints: [
      'Computation of divergence $\\nabla \\cdot \\vec{F} = 2(x+y+z)$ (1 mark)',
      'Triple integral setup and evaluation yielding $abc(a+b+c)$ (1.75 marks)',
      'Surface integral evaluations across the 6 faces and final verification (1.75 marks)'
    ],
    difficulty: 'hard',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. III Semester Examination 2025-26, Paper ASB-301, Q1(b)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q1(b)',
    isSubjective: true
  },
  {
    id: 'pyq-2025-asb301-endsem-eigen-3x3',
    subjectId: 'asb-301',
    unitId: 'asb-301-u2',
    topicId: 'asb-301-u2-t1',
    type: 'numerical',
    prompt: 'Find the eigenvalues and eigenvectors of the symmetric matrix:\n$$A = \\begin{bmatrix} 8 & -6 & 2 \\\\ -6 & 7 & -4 \\\\ 2 & -4 & 3 \\end{bmatrix}$$',
    correctAnswer: '$$\\lambda_1 = 0, \\lambda_2 = 3, \\lambda_3 = 15$$',
    solution: 'Characteristic equation: $|A - \\lambda I| = 0$.\nTrace $(A) = 8 + 7 + 3 = 18$.\nSum of principal minors: $M_{11} = (21 - 16) = 5$, $M_{22} = (24 - 4) = 20$, $M_{33} = (56 - 36) = 20$. Sum $= 5 + 20 + 20 = 45$.\nDeterminant $|A| = 8(21 - 16) - (-6)(-18 - (-8)) + 2(24 - 14) = 8(5) + 6(-10) + 2(10) = 40 - 60 + 20 = 0$.\nCharacteristic polynomial: $\\lambda^3 - 18\\lambda^2 + 45\\lambda = 0 \\implies \\lambda(\\lambda^2 - 18\\lambda + 45) = 0$.\nFactorizing: $\\lambda(\\lambda - 3)(\\lambda - 15) = 0$.\nEigenvalues: $\\lambda_1 = 0, \\lambda_2 = 3, \\lambda_3 = 15$.\nEigenvectors:\n1. For $\\lambda_1 = 0$: $(A - 0I)X = 0 \\implies X_1 = [1, 2, 2]^T$.\n2. For $\\lambda_2 = 3$: $(A - 3I)X = 0 \\implies X_2 = [2, 1, -2]^T$.\n3. For $\\lambda_3 = 15$: $(A - 15I)X = 0 \\implies X_3 = [2, -2, 1]^T$.\nNotice that $X_1, X_2, X_3$ are mutually orthogonal, as expected for a real symmetric matrix.',
    modelAnswer: 'Characteristic equation $\\lambda^3 - 18\\lambda^2 + 45\\lambda = 0$ yields eigenvalues $\\lambda = 0, 3, 15$. Corresponding orthogonal eigenvectors are $X_1 = [1, 2, 2]^T$, $X_2 = [2, 1, -2]^T$, and $X_3 = [2, -2, 1]^T$.',
    keyMarkingPoints: [
      'Characteristic polynomial formulation $\\lambda(\\lambda-3)(\\lambda-15) = 0$ (1.5 marks)',
      'Eigenvector for $\\lambda = 0$ (1 mark)',
      'Eigenvector for $\\lambda = 3$ (1 mark)',
      'Eigenvector for $\\lambda = 15$ (1 mark)'
    ],
    difficulty: 'medium',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. III Semester Examination 2025-26, Paper ASB-301, Q2(a)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q2(a)',
    isSubjective: true
  },
  {
    id: 'pyq-2025-asb301-endsem-ztrans-convolution',
    subjectId: 'asb-301',
    unitId: 'asb-301-u4',
    topicId: 'asb-301-u4-t2',
    type: 'numerical',
    prompt: 'Evaluate the inverse Z-transform of:\n$$U(z) = \\frac{z^2}{(z^2 - 3z + 2)}$$\nby using the Convolution Theorem for Z-transforms.',
    correctAnswer: '$$u_n = 2^{n+1} - 1$$',
    solution: 'Factor the denominator: $z^2 - 3z + 2 = (z - 1)(z - 2)$.\nWrite $U(z) = \\left(\\frac{z}{z - 1}\\right) \\cdot \\left(\\frac{z}{z - 2}\\right) = X(z) \\cdot Y(z)$.\nKnown inverse Z-transforms:\n$x_n = \\mathcal{Z}^{-1}\\left\\{\\frac{z}{z - 1}\\right\\} = 1^n = 1$ (for $n \\ge 0$).\n$y_n = \\mathcal{Z}^{-1}\\left\\{\\frac{z}{z - 2}\\right\\} = 2^n$ (for $n \\ge 0$).\nBy the Convolution Theorem for Z-transforms:\n$$\\mathcal{Z}^{-1}\\{X(z)Y(z)\\} = x_n * y_n = \\sum_{m=0}^n x_m y_{n-m} = \\sum_{m=0}^n (1) \\cdot 2^{n-m}$$\n$$= 2^n \\sum_{m=0}^n 2^{-m} = 2^n \\sum_{m=0}^n \\left(\\frac{1}{2}\\right)^m = 2^n \\left[ \\frac{1 - (1/2)^{n+1}}{1 - 1/2} \\right] = 2^n \\cdot 2 \\left[ 1 - \\frac{1}{2^{n+1}} \\right] = 2^{n+1} - 1$$\nTherefore, $\\mathcal{Z}^{-1}\\{U(z)\\} = 2^{n+1} - 1$.',
    modelAnswer: 'Splitting $U(z) = \\frac{z}{z-1} \\cdot \\frac{z}{z-2}$, their individual inverse transforms are $1$ and $2^n$. By the convolution theorem, $u_n = \\sum_{m=0}^n (1)(2^{n-m}) = 2^n \\sum_{m=0}^n (1/2)^m = 2^{n+1} - 1$.',
    keyMarkingPoints: [
      'Decomposition of $U(z)$ into product of elementary transforms $\\frac{z}{z-1} \\cdot \\frac{z}{z-2}$ (1 mark)',
      'Statement of Convolution Theorem formula $\\sum_{m=0}^n x_m y_{n-m}$ (1 mark)',
      'Evaluation of finite geometric series $\\sum (1/2)^m$ (1.5 marks)',
      'Simplification to final closed form $2^{n+1} - 1$ (1 mark)'
    ],
    difficulty: 'medium',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. III Semester Examination 2025-26, Paper ASB-301, Q4(b)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q4(b)',
    isSubjective: true
  },
  {
    id: 'pyq-2025-asb301-endsem-poisson-meandev',
    subjectId: 'asb-301',
    unitId: 'asb-301-u5',
    topicId: 'asb-301-u5-t2',
    type: 'proof',
    prompt: 'Show that in a Poisson distribution with unit mean ($\\lambda = 1$), the mean deviation about the mean is $\\frac{2}{e}$ times the standard deviation.',
    correctAnswer: '$$\\text{Mean Deviation} = \\frac{2}{e} \\sigma$$',
    solution: 'For a Poisson distribution with parameter $\\lambda = 1$:\nMean $\\mu = \\lambda = 1$, Variance $\\sigma^2 = \\lambda = 1 \\implies$ Standard Deviation $\\sigma = 1$.\nProbability mass function: $P(X = k) = \\frac{e^{-1} 1^k}{k!} = \\frac{e^{-1}}{k!} = \\frac{1}{e \\cdot k!}$ for $k = 0, 1, 2, \\dots$\nMean deviation about the mean is defined as:\n$$\\text{M.D.} = \\sum_{k=0}^\\infty |k - \\mu| P(X = k) = \\sum_{k=0}^\\infty |k - 1| \\frac{e^{-1}}{k!}$$\nBreak sum into two parts: $k = 0$ and $k \\ge 1$:\nFor $k = 0$: $|0 - 1| \\frac{e^{-1}}{0!} = 1 \\cdot e^{-1} = e^{-1}$.\nFor $k \\ge 1$: $|k - 1| = k - 1$.\n$$\\sum_{k=1}^\\infty (k - 1) \\frac{e^{-1}}{k!} = e^{-1} \\left[ \\sum_{k=1}^\\infty \\frac{k}{k!} - \\sum_{k=1}^\\infty \\frac{1}{k!} \\right] = e^{-1} \\left[ \\sum_{k=1}^\\infty \\frac{1}{(k-1)!} - \\sum_{k=1}^\\infty \\frac{1}{k!} \\right]$$\nNotice that $\\sum_{k=1}^\\infty \\frac{1}{(k-1)!} = e$, and $\\sum_{k=1}^\\infty \\frac{1}{k!} = e - 1$.\nTherefore, the bracket evaluates to $e - (e - 1) = 1$.\nSo the sum for $k \\ge 1$ equals $e^{-1} \\times 1 = e^{-1}$.\nTotal Mean Deviation $= e^{-1} (\\text{from } k=0) + e^{-1} (\\text{from } k \\ge 1) = 2e^{-1} = \\frac{2}{e}$.\nSince $\\sigma = 1$, $\\text{M.D.} = \\frac{2}{e} \\times 1 = \\frac{2}{e} \\sigma$. Hence proved.',
    modelAnswer: 'For unit mean Poisson distribution $\\mu = 1, \\sigma = 1$. The mean deviation $\\sum |k - 1| P(k)$ evaluates to $e^{-1}$ for $k=0$ plus $e^{-1} \\sum_{k=1}^\\infty (k-1)/k! = e^{-1}[e - (e-1)] = e^{-1}$. Summing gives $2/e = \\frac{2}{e} \\sigma$.',
    keyMarkingPoints: [
      'Stating parameters $\\mu = 1, \\sigma = 1$ and definition of Mean Deviation (1 mark)',
      'Splitting summation at $k=0$ yielding $e^{-1}$ (1 mark)',
      'Evaluating infinite series for $k \\ge 1$ using Taylor series of $e$ (1.5 marks)',
      'Summing parts to obtain $2/e = (2/e)\\sigma$ (1 mark)'
    ],
    difficulty: 'medium',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. III Semester Examination 2025-26, Paper ASB-301, Q5(b)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q5(b)',
    isSubjective: true
  },

  // =========================================================================
  // 2. DSC-304: DATABASE MANAGEMENT SYSTEMS (2025 PYQs)
  // =========================================================================
  {
    id: 'pyq-2025-dsc304-er-university-exam',
    subjectId: 'dsc-304',
    unitId: 'dsc-304-u1',
    topicId: 'dsc-304-u1-t2',
    type: 'case_study',
    prompt: 'Design an ER Diagram for a University Examination System that maintains information about students, subjects, exams, and results with the following requirements:\n1. Each student can appear for multiple subjects.\n2. Each subject can have several students.\n3. Each exam record should include attributes such as marks and exam_date.\nTasks:\n(a) Identify all entities, attributes, and relationships.\n(b) Identify the primary keys for each entity.\n(c) Draw the ER Diagram showing entities, attributes, relationships, and cardinalities.',
    correctAnswer: 'ER Model with Student, Subject, and Exam/Result relationship with Many-to-Many cardinality and composite primary keys.',
    solution: '1. Entities & Attributes:\n- Student (student_id [PK], name, roll_no, email, department)\n- Subject (subject_code [PK], subject_name, credits, semester)\n- Exam (exam_id [PK], exam_type, session, semester)\n- Result / AppearsIn (Relationship/Associative Entity: student_id [FK], subject_code [FK], marks, exam_date, grade)\n2. Cardinalities:\n- Student to Subject: Many-to-Many ($M:N$). A student can register for multiple subjects; a subject can be taken by multiple students.\n- Student to Exam: Many-to-Many ($M:N$).\n3. Relational Mapping:\nStudent(student_id PK, name, dept), Subject(subject_code PK, subject_name, credits), ExamResult(student_id FK, subject_code FK, exam_date, marks_obtained, PRIMARY KEY (student_id, subject_code)).',
    modelAnswer: 'Entities identified: Student (PK: student_id), Subject (PK: subject_code), Exam (PK: exam_id). Relationship: \'AppearsIn\' or \'TakesExam\' is an $M:N$ relationship with descriptive attributes (marks, exam_date). The primary key of the junction relation is composite (student_id, subject_code, exam_date).',
    keyMarkingPoints: [
      'Identification of all entities and attributes (1.5 marks)',
      'Primary key and foreign key specification (1 mark)',
      'Cardinality ratios ($M:N$) and associative relationship representation (2 marks)'
    ],
    difficulty: 'medium',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. CSE (Data Science) End-Sem Exam 2025-26, Paper DSC-304, Q1(b)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q1(b)',
    isSubjective: true
  },
  {
    id: 'pyq-2025-dsc304-normalization-student-course',
    subjectId: 'dsc-304',
    unitId: 'dsc-304-u2',
    topicId: 'dsc-304-u2-t1',
    type: 'case_study',
    prompt: 'Consider the table Student-Course which stores information about students and the courses they are enrolled in:\nStudentID | StudentName | CourseID | CourseName | Instructor\nS1 | Aliya | C1 | DBMS | Prof. Rao\nS1 | Aliya | C2 | OS | Prof. Singh\nS2 | Priya | C1 | DBMS | Prof. Rao\nS3 | Arjun | C3 | Networks | Prof. Das\n\n(a) Identify the candidate key(s) of the table Student-Course. [1 Mark]\n(b) Convert the table to Second Normal Form (2NF) and list the resulting tables. [2 Marks]\n(c) Further convert the tables to Third Normal Form (3NF) if needed, and list the resulting tables. [1.5 Marks]',
    correctAnswer: '$$\\text{Candidate Key: } \\{\\text{StudentID, CourseID}\\}$$',
    solution: 'Functional Dependencies:\n- StudentID $\\to$ StudentName\n- CourseID $\\to$ CourseName, Instructor\n(a) Candidate Key: {StudentID, CourseID} is the unique minimal superkey.\n(b) 2NF Conversion:\nA relation is in 2NF if it is in 1NF and no non-prime attribute is partially dependent on any candidate key.\nHere, StudentName depends partially on StudentID, and CourseName, Instructor depend partially on CourseID.\nDecomposing to eliminate partial dependencies:\n1. Student(StudentID [PK], StudentName)\n2. Course(CourseID [PK], CourseName, Instructor)\n3. Student_Enrollment(StudentID [FK], CourseID [FK], PRIMARY KEY (StudentID, CourseID))\n(c) 3NF Conversion:\nA relation is in 3NF if it is in 2NF and no transitive dependency exists ($X \\to Y$ where $Y$ is non-prime and $X$ is not superkey).\nIn Course(CourseID, CourseName, Instructor), assuming each course has one instructor and instructor does not determine course independently, all determinants are candidate keys.\nIf Instructor $\\to$ Department or similar existed, it would split; here, tables are already in 3NF (and BCNF).',
    modelAnswer: 'Candidate key is {StudentID, CourseID}. Partial dependencies (StudentID -> StudentName and CourseID -> CourseName, Instructor) violate 2NF. Decomposing yields: Student(StudentID, StudentName), Course(CourseID, CourseName, Instructor), and Student_Course(StudentID, CourseID). In 3NF, no transitive dependencies remain, so the three tables are in 3NF.',
    keyMarkingPoints: [
      'Candidate key identification: {StudentID, CourseID} (1 mark)',
      '2NF decomposition resolving partial dependencies into 3 relations (2 marks)',
      '3NF analysis verifying absence of transitive dependencies (1.5 marks)'
    ],
    difficulty: 'medium',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. CSE (Data Science) End-Sem Exam 2025-26, Paper DSC-304, Q2(a)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q2(a)',
    isSubjective: true
  },
  {
    id: 'pyq-2025-dsc304-sql-hospital-management',
    subjectId: 'dsc-304',
    unitId: 'dsc-304-u3',
    topicId: 'dsc-304-u3-t1',
    type: 'sql',
    prompt: 'Given the Hospital Management System relational schema:\n- patients(patient_id, patient_name, age, city)\n- doctors(doctor_id, doctor_name, specialization, city)\n- appointments(appt_id, patient_id, doctor_id, appt_date, fees)\n- prescriptions(presc_id, appt_id, medicine, quantity)\n\nWrite SQL queries for:\n(a) Find the patients who paid more than the average consultation fee across all appointments.\n(b) Find doctors who have treated more than one patient.\n(c) Find the names of doctors who have appointments with patients from Delhi.\n(d) List all doctors and their patients, including doctors who have not yet treated any patients.',
    correctAnswer: 'SQL queries using subquery with AVG(), GROUP BY HAVING COUNT(DISTINCT patient_id) > 1, JOIN with WHERE city=\'Delhi\', and LEFT OUTER JOIN.',
    solution: '-- (a) Patients who paid more than average fee:\nSELECT DISTINCT P.patient_id, P.patient_name\nFROM patients P JOIN appointments A ON P.patient_id = A.patient_id\nWHERE A.fees > (SELECT AVG(fees) FROM appointments);\n\n-- (b) Doctors who treated more than one patient:\nSELECT D.doctor_id, D.doctor_name\nFROM doctors D JOIN appointments A ON D.doctor_id = A.doctor_id\nGROUP BY D.doctor_id, D.doctor_name\nHAVING COUNT(DISTINCT A.patient_id) > 1;\n\n-- (c) Doctors with patients from Delhi:\nSELECT DISTINCT D.doctor_name\nFROM doctors D\nJOIN appointments A ON D.doctor_id = A.doctor_id\nJOIN patients P ON A.patient_id = P.patient_id\nWHERE P.city = \'Delhi\';\n\n-- (d) All doctors and their patients (including doctors without patients):\nSELECT D.doctor_name, P.patient_name\nFROM doctors D\nLEFT OUTER JOIN appointments A ON D.doctor_id = A.doctor_id\nLEFT OUTER JOIN patients P ON A.patient_id = P.patient_id;',
    modelAnswer: 'Four SQL queries: (a) Uses correlated subquery with AVG(fees); (b) Uses GROUP BY doctor_id HAVING COUNT(DISTINCT patient_id) > 1; (c) Uses 3-table INNER JOIN with predicate P.city = \'Delhi\'; (d) Employs LEFT OUTER JOIN on doctors to include doctors with 0 appointments.',
    keyMarkingPoints: [
      'Query (a) with scalar subquery AVG(fees) (1.5 marks)',
      'Query (b) with GROUP BY and HAVING COUNT(DISTINCT) (1.5 marks)',
      'Query (c) with 3-table JOIN condition (1.5 marks)',
      'Query (d) correctly using LEFT OUTER JOIN (1.5 marks)'
    ],
    difficulty: 'medium',
    marks: 6,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech (Data Science) 2nd Mid-Sem Exam 2025-26, Paper DSC-304, Q1',
    year: '2025',
    examSession: '2nd Mid-Semester',
    questionNumber: 'Q1',
    isSubjective: true
  },
  {
    id: 'pyq-2025-dsc304-timestamp-ordering',
    subjectId: 'dsc-304',
    unitId: 'dsc-304-u4',
    topicId: 'dsc-304-u4-t1',
    type: 'case_study',
    prompt: 'Given three transactions T1, T2, T3 with timestamps TS(T1) = 10, TS(T2) = 15, TS(T3) = 20.\nConsider the following sequence of operations on data item A and B:\n1. T1: Read(A)\n2. T2: Write(A)\n3. T3: Read(A)\n4. T1: Write(B)\n5. T2: Read(B)\n6. T3: Write(A)\nUsing the Basic Timestamp Ordering protocol, check for each operation whether it is allowed or causes rollback. Identify which transactions commit and which abort.',
    correctAnswer: 'Step-by-step trace of R-timestamp and W-timestamp updates and aborts based on Thomas Write Rule / Basic TO protocol.',
    solution: 'Basic Timestamp Ordering Rules:\n- Read(Q): If $TS(T) < W\\text{-timestamp}(Q)$, abort and roll back $T$. Else allow and set $R\\text{-timestamp}(Q) = \\max(R\\text{-timestamp}(Q), TS(T))$.\n- Write(Q): If $TS(T) < R\\text{-timestamp}(Q)$ or $TS(T) < W\\text{-timestamp}(Q)$, abort and roll back $T$. Else allow and set $W\\text{-timestamp}(Q) = TS(T)$.\n\nInitial: $R\\text{-TS}(A)=0, W\\text{-TS}(A)=0, R\\text{-TS}(B)=0, W\\text{-TS}(B)=0$.\n1. T1: Read(A): $TS(T1)=10 \\ge W\\text{-TS}(A)=0$. ALLOWED. Set $R\\text{-TS}(A) = \\max(0, 10) = 10$.\n2. T2: Write(A): $TS(T2)=15 \\ge R\\text{-TS}(A)=10$ and $15 \\ge W\\text{-TS}(A)=0$. ALLOWED. Set $W\\text{-TS}(A) = 15$.\n3. T3: Read(A): $TS(T3)=20 \\ge W\\text{-TS}(A)=15$. ALLOWED. Set $R\\text{-TS}(A) = \\max(10, 20) = 20$.\n4. T1: Write(B): $TS(T1)=10 \\ge R\\text{-TS}(B)=0$ and $10 \\ge W\\text{-TS}(B)=0$. ALLOWED. Set $W\\text{-TS}(B) = 10$.\n5. T2: Read(B): $TS(T2)=15 \\ge W\\text{-TS}(B)=10$. ALLOWED. Set $R\\text{-TS}(B) = \\max(0, 15) = 15$.\n6. T3: Write(A): $TS(T3)=20 \\ge R\\text{-TS}(A)=20$ and $20 \\ge W\\text{-TS}(A)=15$. ALLOWED. Set $W\\text{-TS}(A) = 20$.\nOutcome: All operations satisfy timestamp order. Transactions T1, T2, T3 all commit successfully without abort.',
    modelAnswer: 'Tracing the operations against Basic Timestamp Ordering rules: every read satisfies $TS(T) \\ge W\\text{-TS}$ and every write satisfies $TS(T) \\ge R\\text{-TS}$ and $TS(T) \\ge W\\text{-TS}$. All operations are allowed and no rollback occurs. T1, T2, T3 all commit.',
    keyMarkingPoints: [
      'Stating Timestamp Ordering Read and Write validity conditions (1 mark)',
      'Step-by-step updating of R-TS and W-TS for items A and B (1.5 marks)',
      'Concluding commit/abort status for T1, T2, and T3 (0.5 marks)'
    ],
    difficulty: 'medium',
    marks: 3,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech (Data Science) 2nd Mid-Sem Exam 2025-26, Paper DSC-304, Q2',
    year: '2025',
    examSession: '2nd Mid-Semester',
    questionNumber: 'Q2',
    isSubjective: true
  },

  // =========================================================================
  // 3. DSC-301: DISCRETE MATHEMATICS (2025 PYQs)
  // =========================================================================
  {
    id: 'pyq-2025-dsc301-characteristic-function',
    subjectId: 'dsc-301',
    unitId: 'dsc-301-u1',
    topicId: 'dsc-301-u1-t1',
    type: 'proof',
    prompt: 'Let $U$ be the universal set and set $X \\subseteq U$. The characteristic function $C_X(x)$ is defined as:\n$$C_X(x) = 1 \\text{ if } x \\in X \\quad \\text{and} \\quad C_X(x) = 0 \\text{ if } x \\notin X$$\nShow that for any subsets $X, Y, Z \\subseteq U$:\n$$C_{X \\cap (Y \\cup Z)}(x) = C_X(x) \\cdot [C_Y(x) + C_Z(x) - C_Y(x) C_Z(x)]$$',
    correctAnswer: 'Proof by truth table / indicator function algebraic identities.',
    solution: '1. Known characteristic function properties:\n- $C_{A \\cap B}(x) = C_A(x) \\cdot C_B(x)$\n- $C_{A \\cup B}(x) = C_A(x) + C_B(x) - C_A(x) C_B(x)$\n2. Application:\nLet $A = X$ and $B = Y \\cup Z$.\nThen $C_{X \\cap (Y \\cup Z)}(x) = C_X(x) \\cdot C_{Y \\cup Z}(x)$.\nSubstituting the formula for $C_{Y \\cup Z}(x)$:\n$C_{Y \\cup Z}(x) = C_Y(x) + C_Z(x) - C_Y(x) C_Z(x)$.\nTherefore:\n$$C_{X \\cap (Y \\cup Z)}(x) = C_X(x) \\cdot [C_Y(x) + C_Z(x) - C_Y(x) C_Z(x)]$$\n3. Verification over the 8 truth-value cases for $(x \\in X, x \\in Y, x \\in Z) \\in \\{0, 1\\}^3$ shows exact equality for every case.',
    modelAnswer: 'Using the algebraic identities of indicator functions: $C_{A \\cap B} = C_A \\cdot C_B$ and $C_{Y \\cup Z} = C_Y + C_Z - C_Y C_Z$. Multiplying $C_X(x)$ directly yields $C_X(x)[C_Y(x) + C_Z(x) - C_Y(x)C_Z(x)]$.',
    keyMarkingPoints: [
      'Definition and properties of intersection and union indicator functions (1.5 marks)',
      'Algebraic substitution $C_X \\cdot C_{Y \\cup Z}$ (1.5 marks)',
      'Truth table or case verification over boolean states (1 mark)'
    ],
    difficulty: 'easy',
    marks: 4,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. (Data Science) 1st Mid-Sem Exam 2025-26, Paper DSC-301, Q1',
    year: '2025',
    examSession: '1st Mid-Semester',
    questionNumber: 'Q1',
    isSubjective: true
  },
  {
    id: 'pyq-2025-dsc301-abelian-group-real',
    subjectId: 'dsc-301',
    unitId: 'dsc-301-u1',
    topicId: 'dsc-301-u1-t2',
    type: 'proof',
    prompt: 'Define an operation $\\circ$ on the set of real numbers $\\mathbb{R}$ as $x \\circ y = x + y + xy$. Prove or disprove that $(\\mathbb{R}, \\circ)$ is an Abelian group.',
    correctAnswer: '$$(\\mathbb{R}, \\circ) \\text{ is NOT a group because element } x = -1 \\text{ has no inverse in } \\mathbb{R}$$',
    solution: '1. Closure: For any $x, y \\in \\mathbb{R}$, $x + y + xy \\in \\mathbb{R}$. (Holds)\n2. Associativity:\n$(x \\circ y) \\circ z = (x + y + xy) \\circ z = (x + y + xy) + z + (x + y + xy)z = x + y + z + xy + yz + zx + xyz$.\n$x \\circ (y \\circ z) = x \\circ (y + z + yz) = x + (y + z + yz) + x(y + z + yz) = x + y + z + xy + yz + zx + xyz$.\nAssociative property holds.\n3. Identity Element:\n$x \\circ e = x \\implies x + e + xe = x \\implies e(1 + x) = 0 \\implies e = 0 \\in \\mathbb{R}$.\nCheck $0 \\circ x = 0 + x + 0 = x$. Identity exists and is $e = 0$.\n4. Inverse Element:\n$x \\circ y = e \\implies x + y + xy = 0 \\implies y(1 + x) = -x \\implies y = \\frac{-x}{1 + x}$.\nFor $x = -1$, $1 + x = 0$, so $y = \\frac{-(-1)}{0}$ is undefined!\nThe element $-1 \\in \\mathbb{R}$ does not have an inverse.\nConclusion: $(\\mathbb{R}, \\circ)$ is NOT a group. (Note: $(\\mathbb{R} \\setminus \\{-1\\}, \\circ)$ would be an Abelian group, but on $\\mathbb{R}$ it fails).',
    modelAnswer: 'Closure, associativity, and identity $e=0$ hold. However, the inverse equation $x + y + xy = 0$ requires $y = \\frac{-x}{1+x}$, which is undefined for $x = -1$. Because $-1 \\in \\mathbb{R}$ lacks an inverse, $(\\mathbb{R}, \\circ)$ is not a group.',
    keyMarkingPoints: [
      'Proof of associativity (1 mark)',
      'Finding identity element $e = 0$ (1 mark)',
      'Inverse formulation $y = -x/(1+x)$ (1 mark)',
      'Identifying that $x = -1$ has no inverse, disproving group axioms on $\\mathbb{R}$ (1 mark)'
    ],
    difficulty: 'medium',
    marks: 4,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. (Data Science) 1st Mid-Sem Exam 2025-26, Paper DSC-301, Q2',
    year: '2025',
    examSession: '1st Mid-Semester',
    questionNumber: 'Q2',
    isSubjective: true
  },
  {
    id: 'pyq-2025-dsc301-recurrence-second-order',
    subjectId: 'dsc-301',
    unitId: 'dsc-301-u3',
    topicId: 'dsc-301-u3-t1',
    type: 'numerical',
    prompt: 'Solve the non-homogeneous recurrence relation:\n$$a_n - 5a_{n-1} + 6a_{n-2} = 2^n + 3^n$$\nfor $n \\ge 2$, with initial conditions $a_0 = 0, a_1 = 1$.',
    correctAnswer: '$$a_n = -(1 + n)2^n + (1 + n)3^n$$',
    solution: '1. Characteristic Equation:\n$r^2 - 5r + 6 = 0 \\implies (r - 2)(r - 3) = 0 \\implies r_1 = 2, r_2 = 3$.\nHomogeneous solution: $a_n^{(h)} = c_1 2^n + c_2 3^n$.\n2. Particular Solution:\nSince both $2^n$ and $3^n$ are roots of multiplicity 1 of the characteristic equation, the standard guess must be multiplied by $n$:\n$a_n^{(p)} = A n 2^n + B n 3^n$.\n- For $A n 2^n$: Substitute into LHS:\n$A n 2^n - 5 A (n-1) 2^{n-1} + 6 A (n-2) 2^{n-2} = 2^n$.\nDivide by $2^{n-2}$: $4 A n - 10 A (n-1) + 6 A (n-2) = 4 \\implies A(4n - 10n + 10 + 6n - 12) = 4 \\implies A(-2) = 4 \\implies A = -2$.\nSo $A n 2^n = -2 n 2^n = -n 2^{n+1}$. Wait, let\'s check $A$: $-2A = 4 \\implies A = -2$.\n- For $B n 3^n$: Substitute into LHS:\n$B n 3^n - 5 B (n-1) 3^{n-1} + 6 B (n-2) 3^{n-2} = 3^n$.\nDivide by $3^{n-2}$: $9 B n - 15 B (n-1) + 6 B (n-2) = 9 \\implies B(9n - 15n + 15 + 6n - 12) = 9 \\implies B(3) = 9 \\implies B = 3$.\nSo $a_n^{(p)} = -2n 2^n + 3n 3^n = -n 2^{n+1} + n 3^{n+1}$.\n3. General Solution:\n$a_n = c_1 2^n + c_2 3^n - 2n 2^n + 3n 3^n$.\nApply initial conditions:\n$n = 0$: $a_0 = c_1 + c_2 = 0 \\implies c_2 = -c_1$.\n$n = 1$: $a_1 = 2c_1 + 3c_2 - 4 + 9 = 1 \\implies 2c_1 - 3c_1 + 5 = 1 \\implies -c_1 = -4 \\implies c_1 = 4, c_2 = -4$.\nFinal Solution: $a_n = 4(2^n) - 4(3^n) - n 2^{n+1} + n 3^{n+1} = (4 - 2n)2^n + (3n - 4)3^n$.',
    modelAnswer: 'Characteristic roots are $r = 2, 3$. Because $2^n$ and $3^n$ coincide with characteristic roots, particular solution takes form $a_n^{(p)} = A n 2^n + B n 3^n$. Substituting yields $A = -2, B = 3$. Enforcing initial conditions $a_0=0, a_1=1$ determines constants $c_1=4, c_2=-4$.',
    keyMarkingPoints: [
      'Characteristic equation roots $r = 2, 3$ and homogeneous form (1 mark)',
      'Particular solution ansatz $n(A 2^n + B 3^n)$ with resonance (1.5 marks)',
      'Evaluating coefficients $A = -2$ and $B = 3$ (1 mark)',
      'Using initial conditions $a_0=0, a_1=1$ to find constants (1 mark)'
    ],
    difficulty: 'hard',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. CSE (Data Science) End-Sem Exam 2025, Paper DSC-301, Q3(a)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q3(a)',
    isSubjective: true
  },
  {
    id: 'pyq-2025-dsc301-induction-divisibility',
    subjectId: 'dsc-301',
    unitId: 'dsc-301-u4',
    topicId: 'dsc-301-u4-t1',
    type: 'proof',
    prompt: 'Prove by the principle of mathematical induction that for any natural number $n$,\n$$2903^n - 803^n - 464^n + 261^n$$\nis divisible by $1897$.',
    correctAnswer: 'Proof by mathematical induction using factorization $(a^n - b^n)$ and coprimality of $1897 = 7 \\times 271$.',
    solution: 'Let $P(n): f(n) = 2903^n - 803^n - 464^n + 261^n$ is divisible by $1897$.\nFactor $1897$: Notice $1897 = 7 \\times 271$ (both 7 and 271 are primes, so $\\gcd(7, 271) = 1$).\nTo show divisibility by $1897$, it suffices to show divisibility by 7 and 271 separately.\n1. Divisibility by 7:\n$2903 = 7 \\times 414 + 5 \\equiv 5 \\pmod 7$.\n$803 = 7 \\times 114 + 5 \\equiv 5 \\pmod 7$.\n$464 = 7 \\times 66 + 2 \\equiv 2 \\pmod 7$.\n$261 = 7 \\times 37 + 2 \\equiv 2 \\pmod 7$.\nThen $f(n) \\equiv 5^n - 5^n - 2^n + 2^n \\equiv 0 \\pmod 7$.\nSo $7 \\mid f(n)$ for all $n$.\n2. Divisibility by 271:\n$2903 = 271 \\times 10 + 193 \\equiv 193 \\pmod{271}$.\n$803 = 271 \\times 2 + 261 \\equiv 261 \\pmod{271}$.\n$464 = 271 \\times 1 + 193 \\equiv 193 \\pmod{271}$.\n$261 \\equiv 261 \\pmod{271}$.\nThen $f(n) \\equiv 193^n - 261^n - 193^n + 261^n \\equiv 0 \\pmod{271}$.\nSo $271 \\mid f(n)$ for all $n$.\nSince $\\gcd(7, 271) = 1$, $7 \\times 271 = 1897$ divides $f(n)$ for all natural numbers $n$.',
    modelAnswer: 'Factor $1897 = 7 \\times 271$. Using modular arithmetic, $2903 \\equiv 803 \\pmod 7$ and $464 \\equiv 261 \\pmod 7$ proves $f(n) \\equiv 0 \\pmod 7$. Furthermore, $2903 \\equiv 464 \\pmod{271}$ and $803 \\equiv 261 \\pmod{271}$ proves $f(n) \\equiv 0 \\pmod{271}$. By coprimality of 7 and 271, $1897 \\mid f(n)$ for all $n$.',
    keyMarkingPoints: [
      'Factoring $1897 = 7 \\times 271$ into coprime factors (1 mark)',
      'Proving divisibility by 7 via modular reduction (1.5 marks)',
      'Proving divisibility by 271 via modular reduction (1.5 marks)',
      'Conclusion establishing divisibility by product 1897 (0.5 marks)'
    ],
    difficulty: 'hard',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. CSE (Data Science) End-Sem Exam 2025, Paper DSC-301, Q4(a)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q4(a)',
    isSubjective: true
  },

  // =========================================================================
  // 4. DSC-302: DATA STRUCTURES (2025 PYQs)
  // =========================================================================
  {
    id: 'pyq-2025-dsc302-3d-array-address',
    subjectId: 'dsc-302',
    unitId: 'dsc-302-u1',
    topicId: 'dsc-302-u1-t1',
    type: 'numerical',
    prompt: '(i) Write a recursive function in C for the sum of the first $N$ natural numbers. [1.5 Marks]\n(ii) Write a C declaration using pointers to initialize a 3-D Array of the form $A[5][10][20]$. If the starting address of array $A$ is 100, find the address of element $A[2][5][10]$ in Row-Major Order. Assume each element occupies 2 bytes. [3 Marks]',
    correctAnswer: '$$\\text{Address of } A[2][5][10] = 1120$$',
    solution: '(i) Recursive C function:\nint sumN(int n) {\n  if (n <= 1) return n;\n  return n + sumN(n - 1);\n}\n\n(ii) 3D Array Address Calculation:\nDimensions: $D_1 = 5, D_2 = 10, D_3 = 20$.\nBase address $B = 100$.\nIndices: $i_1 = 2, i_2 = 5, i_3 = 10$.\nElement size $w = 2$ bytes.\nRow-Major Formula for 3D array $A[D_1][D_2][D_3]$:\n$$\\text{Address}(A[i_1][i_2][i_3]) = B + w \\cdot [i_1 \\cdot D_2 \\cdot D_3 + i_2 \\cdot D_3 + i_3]$$\nSubstitution:\n$i_1 \\cdot D_2 \\cdot D_3 = 2 \\times 10 \\times 20 = 400$.\n$i_2 \\cdot D_3 = 5 \\times 20 = 100$.\n$i_3 = 10$.\nTotal offset count $= 400 + 100 + 10 = 510$ elements.\nByte offset $= 510 \\times 2 = 1020$ bytes.\nAddress $= 100 + 1020 = 1120$.',
    modelAnswer: 'Part (i): base case if(n<=1) return n, else return n + sumN(n-1). Part (ii): Row-major offset formula is $(i_1 D_2 D_3 + i_2 D_3 + i_3) \\times w = (2 \\times 200 + 5 \\times 20 + 10) \\times 2 = 510 \\times 2 = 1020$. Address $= 100 + 1020 = 1120$.',
    keyMarkingPoints: [
      'Recursive sum function implementation (1.5 marks)',
      'Row-major 3D offset formula derivation (1.5 marks)',
      'Substitution and exact byte address 1120 (1.5 marks)'
    ],
    difficulty: 'medium',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. CSE (Data Science) End-Sem Exam 2025-26, Paper DSC-302, Q1(a)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q1(a)',
    isSubjective: true
  },
  {
    id: 'pyq-2025-dsc302-avl-tree-construction',
    subjectId: 'dsc-302',
    unitId: 'dsc-302-u4',
    topicId: 'dsc-302-u4-t2',
    type: 'case_study',
    prompt: 'Construct a height-balanced AVL tree by inserting the following elements in the given order:\n$$15, 10, 12, 30, 22, 20, 60, 70, 75, 85$$\nSpecify the type of rotation (LL, RR, LR, RL) performed at each step to restore balance. What is the time complexity of searching an element in a height-balanced AVL tree of $n$ nodes?',
    correctAnswer: '$$\\mathcal{O}(\\log n)$$ with LR and RL double rotations and single RR rotations.',
    solution: '1. Insert 15, then 10 (balanced).\n2. Insert 12: Subtree at 15 has balance factor +2. Left child 10 has right child 12 (LR case). Perform LR double rotation: rotate left at 10, then rotate right at 15. Root becomes 12, children 10 (left) and 15 (right).\n3. Insert 30 (right of 15), balanced.\n4. Insert 22 (left of 30): Node 15 is unbalanced (+2/RL case). Perform RL rotation: rotate right at 30, rotate left at 15. Balanced.\n5. Insert 20, 60, 70: Insertion of 70 causes RR rotation at 30. Root and balance factors restored.\n6. Insert 75, 85: Triggers RR rotations.\n7. Search complexity: Since height $h \\le 1.44 \\log_2(n+2)$, search time complexity is strictly $\\mathcal{O}(\\log n)$.',
    modelAnswer: 'Step-by-step insertion: (1) Insert 12 triggers LR rotation at node 15, making 12 root. (2) Insert 22 triggers RL rotation at 15. (3) Insert 70 triggers RR rotation at 30. (4) Insert 85 triggers RR rotation. Final tree satisfies balance factor $\\in \\{-1, 0, +1\\}$ at all nodes. Search complexity is $\\mathcal{O}(\\log n)$.',
    keyMarkingPoints: [
      'Correct identification and trace of LR rotation on inserting 12 (1.5 marks)',
      'Correct identification of RL and RR rotations on subsequent insertions (1.5 marks)',
      'Final tree structure and $\\mathcal{O}(\\log n)$ complexity statement (1.5 marks)'
    ],
    difficulty: 'hard',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. CSE (Data Science) End-Sem Exam 2025-26, Paper DSC-302, Q4(b)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q4(b)',
    isSubjective: true
  },
  {
    id: 'pyq-2025-dsc302-huffman-polestar',
    subjectId: 'dsc-302',
    unitId: 'dsc-302-u4',
    topicId: 'dsc-302-u4-t3',
    type: 'case_study',
    prompt: 'A file contains the following characters with their respective frequencies:\n- A: 10\n- E: 15\n- L: 3\n- O: 8\n- P: 4\n- S: 7\n- T: 1\n- R: 6\nIf Huffman Coding is used for data compression:\n(i) Draw the Huffman Tree and find the prefix code for the word "POLESTAR".\n(ii) Suppose we design a Huffman Tree for 4 distinct symbols whose frequencies are two symbols with frequency 10 and two symbols with frequency 5. What are the savings in bits compared to fixed-length coding if we encode a word containing them?',
    correctAnswer: 'Optimal prefix Huffman tree with variable length binary encodings.',
    solution: 'Frequencies sorted: T(1), L(3), P(4), R(6), S(7), O(8), A(10), E(15).\n1. Merge T(1) and L(3) $\\implies$ node TL(4).\n2. Merge P(4) and TL(4) $\\implies$ node PTL(8).\n3. Merge R(6) and S(7) $\\implies$ node RS(13).\n4. Merge O(8) and PTL(8) $\\implies$ node OPTL(16).\n5. Merge A(10) and RS(13) $\\implies$ node ARS(23).\n6. Merge E(15) and OPTL(16) $\\implies$ node EOPTL(31).\n7. Merge ARS(23) and EOPTL(31) $\\implies$ Root(54).\nAssign 0 to left branches and 1 to right branches to extract codes for each letter, then concatenate codes for P, O, L, E, S, T, A, R.\n(ii) For 4 symbols {10, 10, 5, 5}: Fixed length code requires $\\lceil \\log_2 4 \\rceil = 2$ bits per symbol. Total bits $= (10+10+5+5) \\times 2 = 60$ bits.\nHuffman codes: Merge 5 and 5 to get 10. Then merge 10, 10, 10... Tree depth gives lengths: 1 bit for one symbol, 2 bits for another, 3 bits for remaining two. Total variable bits $= 10(1) + 10(2) + 5(3) + 5(3) = 10 + 20 + 15 + 15 = 60$ bits (or savings calculated based on frequency weighting).',
    modelAnswer: 'Construct the greedy minimum-heap Huffman tree by combining lowest frequencies {T(1), L(3)}, then {P(4), TL(4)}, until all 8 symbols are merged into a root of weight 54. Traverse from root to leaves to assign unique prefix codes for P-O-L-E-S-T-A-R. Calculate total bits compared against 3-bit fixed encoding.',
    keyMarkingPoints: [
      'Step-by-step priority queue merging to construct the Huffman tree (2 marks)',
      'Prefix binary codes generated for characters in "POLESTAR" (1.5 marks)',
      'Savings comparison vs fixed-length code in part (ii) (1 mark)'
    ],
    difficulty: 'hard',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. CSE (Data Science) End-Sem Exam 2025-26, Paper DSC-302, Q4(c)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q4(c)',
    isSubjective: true
  },

  // =========================================================================
  // 5. DSC-303: DIGITAL LOGIC DESIGN (2025 PYQs)
  // =========================================================================
  {
    id: 'pyq-2025-dsc303-radix-conversion-base-r',
    subjectId: 'dsc-303',
    unitId: 'dsc-303-u1',
    topicId: 'dsc-303-u1-t1',
    type: 'numerical',
    prompt: '(i) Given $A = (11011)_2$ and $B = (10110)_2$, find $(A - B)$ and $(B - A)$ using the 1\'s complement method. [2.5 Marks]\n(ii) If $(136)_r = (94)_{10}$, find the value of the base $r$. [2 Marks]',
    correctAnswer: '$$\\text{(i) } A - B = (00101)_2, B - A = -(00101)_2; \\quad \\text{(ii) } r = 8$$',
    solution: '(i) Subtraction using 1\'s complement:\n$A = 11011_2 (= 27_{10})$, $B = 10110_2 (= 22_{10})$.\n- For $A - B$:\n1\'s complement of $B (10110)$ is $01001$.\nAdd to $A$: $11011 + 01001 = 100100$.\nEnd-around carry is 1. Add end-around carry to the result: $00100 + 1 = 00101_2 (= 5_{10})$.\nResult is positive: $+00101_2$.\n- For $B - A$:\n1\'s complement of $A (11011)$ is $00100$.\nAdd to $B$: $10110 + 00100 = 11010$.\nNo end-around carry. This indicates the result is negative and in 1\'s complement form.\nTake 1\'s complement of $11010 \\implies -00101_2 (= -5_{10})$.\n\n(ii) Base $r$ evaluation:\n$(136)_r = 1 \\cdot r^2 + 3 \\cdot r^1 + 6 \\cdot r^0 = r^2 + 3r + 6$.\nGiven $r^2 + 3r + 6 = 94$.\n$r^2 + 3r - 88 = 0$.\nFactorizing: $(r + 11)(r - 8) = 0$.\nSince the base must be a positive integer and greater than the largest digit 6, $r = 8$ (Octal system).',
    modelAnswer: 'Part (i): $A-B$ generates an end-around carry of 1, giving $+00101_2$. $B-A$ generates no carry, so taking the 1\'s complement yields $-00101_2$. Part (ii): $r^2 + 3r + 6 = 94 \\implies (r-8)(r+11)=0$. Since radix must exceed maximum digit 6, $r = 8$.',
    keyMarkingPoints: [
      '1\'s complement subtraction $A - B$ with end-around carry addition (1.5 marks)',
      '1\'s complement subtraction $B - A$ with no-carry re-complementation (1 mark)',
      'Polynomial expansion $r^2 + 3r + 6 = 94$ and factoring to $r = 8$ (2 marks)'
    ],
    difficulty: 'easy',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. CSE (Data Science) End-Sem Exam 2025-26, Paper DSC-303, Q1(a)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q1(a)',
    isSubjective: true
  },
  {
    id: 'pyq-2025-dsc303-synchronous-counter-unwanted-states',
    subjectId: 'dsc-303',
    unitId: 'dsc-303-u5',
    topicId: 'dsc-303-u5-t2',
    type: 'case_study',
    prompt: 'Design a synchronous counter using J-K flip-flops that cycles through the sequence:\n$$000 \\to 001 \\to 010 \\to 011 \\to 100 \\to 000$$\nand ensure that the unwanted states $(101, 110, 111)$ all automatically transition to the valid state $000$ on the next clock pulse (self-correcting counter). Show state transition table, K-maps for J and K inputs, and the logic diagram.',
    correctAnswer: 'Self-correcting Mod-5 synchronous counter using 3 J-K flip-flops with locked-out states routed to 000.',
    solution: '3 flip-flops $Q_A, Q_B, Q_C$ required for 5 states.\nState transition specifications:\n- $000 \\to 001$\n- $001 \\to 010$\n- $010 \\to 011$\n- $011 \\to 100$\n- $100 \\to 000$\nUnwanted states routed to 000:\n- $101 \\to 000$\n- $110 \\to 000$\n- $111 \\to 000$\nExcitation table for J-K Flip Flop: $0 \\to 0: (0, X); 0 \\to 1: (1, X); 1 \\to 0: (X, 1); 1 \\to 1: (X, 0)$.\nConstruct excitation columns $J_A, K_A, J_B, K_B, J_C, K_C$ for all 8 rows.\nK-Map Minimization:\n- $J_A = Q_B Q_C, K_A = 1$\n- $J_B = Q_A\' Q_C, K_B = Q_C$\n- $J_C = Q_A\', K_C = 1$\nSelf-correction check: All unwanted states have deterministic next states $000$. Hence no lockout cycle exists.',
    modelAnswer: 'Construct the full 8-state transition table mapping desired count $000 \\to 001 \\to 010 \\to 011 \\to 100 \\to 000$ and unwanted states $101, 110, 111 \\to 000$. Using J-K excitation criteria, minimize flip-flop inputs via K-maps: $J_A = Q_B Q_C, K_A = 1, J_B = Q_A\' Q_C, K_B = Q_C, J_C = Q_A\', K_C = 1$. Draw the synchronous logic diagram.',
    keyMarkingPoints: [
      'Complete 8-state transition table with unwanted states directed to 000 (1.5 marks)',
      'Application of J-K excitation conditions across all flip-flops (1.5 marks)',
      'K-map grouping and minimized input equations (1 mark)',
      'Verification of self-clearing property avoiding lockout (0.5 marks)'
    ],
    difficulty: 'hard',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. CSE (Data Science) End-Sem Exam 2025-26, Paper DSC-303, Q5(c)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q5(c)',
    isSubjective: true
  },

  // =========================================================================
  // 6. ASM-301: UNIVERSAL HUMAN VALUES (2025 PYQs)
  // =========================================================================
  {
    id: 'pyq-2025-asm301-two-domains-education',
    subjectId: 'asm-301',
    unitId: 'asm-301-u1',
    topicId: 'asm-301-u1-t1',
    type: 'subjective',
    prompt: 'Describe the two domains of education (Value Education and Technical/Skill Education). How are they complementary? How do they assist an individual in living a fulfilling life?',
    correctAnswer: 'Values define the \'What to do\' (aim, direction, human goals); Skills provide the \'How to do\' (technology, techniques, execution).',
    solution: '1. Two Domains:\n- Value Education (What to do): Helps an individual decide what is valuable, meaningful, and naturally acceptable. It provides direction, purpose, and universal goals (continuous happiness and prosperity in mutual fulfillment).\n- Skill Education (How to do): Imparts technical proficiency, scientific understanding, engineering practices, and tools to realize those goals effectively.\n2. Complementarity:\n- Skills without values are blind and dangerous, resulting in ecological destruction, unethical exploitation, corruption, and arms proliferation.\n- Values without skills are helpless, remaining noble intentions without the practical competence to solve real-world problems.\n3. Living a Fulfilling Life: Values guide choices in relationships and societal living, while skills empower the individual to generate physical facilities sustainably and serve society.',
    modelAnswer: 'The two domains are Values (\'What to do\' - domain of wisdom and human goals) and Skills (\'How to do\' - domain of technical tools and execution). They are mutually complementary: skills without values cause ecological and social destruction; values without skills lack practical realization. Harmony between both leads to a fulfilled life.',
    keyMarkingPoints: [
      'Clear definition of Values Domain (\'What to do\') and Skills Domain (\'How to do\') (1.5 marks)',
      'Explanation of complementary synergy and dangers of separation (1.5 marks)',
      'Application to individual fulfillment and societal harmony (1.5 marks)'
    ],
    difficulty: 'easy',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. CSE (Data Science) End-Sem Exam 2025-26, Paper ASM-301, Q1(a)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q1(a)',
    isSubjective: true
  },
  {
    id: 'pyq-2025-asm301-sanyam-swasthya',
    subjectId: 'asm-301',
    unitId: 'asm-301-u2',
    topicId: 'asm-301-u2-t2',
    type: 'subjective',
    prompt: 'Define Self-regulation (Sanyam) and Health (Swasthya). How are the two related? Briefly discuss a comprehensive program to ensure Sanyam and Health in daily life.',
    correctAnswer: 'Sanyam is the feeling of responsibility in the Self for nurturing, protection, and right utilization of the Body. Swasthya is the state of physiological balance and harmony in the body.',
    solution: '1. Definitions:\n- Sanyam (Self-regulation): The feeling of responsibility in the Self (\'I\') for nurturing, protecting, and rightly utilizing the physical Body.\n- Swasthya (Health): The condition where all bodily organs act in close coordination and harmony, free from disease.\n2. Interrelation:\nSanyam is the cause and Swasthya is the effect. When the Self has Sanyam, it naturally adopts disciplined lifestyle habits that maintain physical health.\n3. Comprehensive Program for Sanyam and Swasthya:\n(a) Nurturing of the Body: Nutritious, digestible, fresh diet (Ahar), pure water, and fresh air.\n(b) Protection of the Body: Proper clothing, shelter, seasonal care, physical labor (Shram), exercise (Vyayam), posture (Asana), and regulated breathing (Pranayama).\n(c) Right Utilization of the Body: Engaging the body in meaningful production, human service, and expression of harmony rather than sensory overindulgence.\n(d) Rest and Recovery: Adequate sleep and mental relaxation (Vishram).\n(e) Medicine and Treatment (Aushadhi-Upchar): Natural healing and medical intervention when needed.',
    modelAnswer: 'Sanyam is the Self\'s feeling of responsibility to nurture, protect, and rightly utilize the Body; Swasthya is the resulting physiological harmony. Sanyam in the Self is the essential prerequisite for sustainable bodily health. The 5-pillar program includes: balanced nutrition (Ahar), physical labor and exercise (Shram/Vyayam), right utilization, scheduled rest, and therapeutic care.',
    keyMarkingPoints: [
      'Precise definitions of Sanyam and Swasthya (1.5 marks)',
      'Cause-and-effect relationship between Sanyam (Self) and Swasthya (Body) (1.5 marks)',
      'Four/five key pillars of the daily health management program (1.5 marks)'
    ],
    difficulty: 'medium',
    marks: 4.5,
    provenance: 'actual_pyq',
    sourceRef: 'JMI B.Tech. CSE (Data Science) End-Sem Exam 2025-26, Paper ASM-301, Q3(a)',
    year: '2025',
    examSession: 'End-Semester',
    questionNumber: 'Q3(a)',
    isSubjective: true
  }
];
