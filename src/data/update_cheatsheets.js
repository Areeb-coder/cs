/**
 * Script to enrich and align cheat sheets data for:
 * - ASB-301 Engineering Mathematics III (Vector Calc, Linear Algebra, Fourier, Z-Transforms, Probability & Statistics)
 * - DSC-302 Data Structures (Arrays/Pointers, Stacks/Queues, Linked Lists, Trees/AVL/Heap, Graphs/MST/Sorting)
 * - DSC-304 Database Management Systems (Intro/EER/RA, Normalization/BCNF, SQL/PL-SQL, Transactions/ACID/2PL, Advanced/NoSQL)
 */
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'cheatsheets_data.json');
const masterDataPath = path.join(__dirname, 'master_cheatsheets_data.json');

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Find subjects
const math = data.find(s => s.subjectId === 'asb-301');
const dsa = data.find(s => s.subjectId === 'dsc-302');
const dbms = data.find(s => s.subjectId === 'dsc-304');

// ----------------------------------------------------------------------------------------
// 1. ASB-301 Engineering Mathematics III Updates
// ----------------------------------------------------------------------------------------
if (math) {
  // Unit 1: Vector Calculus
  const mU1T1 = math.units[0].topics[0];
  mU1T1.formulaCards = [
    {
      id: 'fc-m-grad-1',
      name: 'Gradient of Scalar Field',
      formula: '\\nabla \\phi = \\frac{\\partial \\phi}{\\partial x}\\mathbf{i} + \\frac{\\partial \\phi}{\\partial y}\\mathbf{j} + \\frac{\\partial \\phi}{\\partial z}\\mathbf{k}',
      conditions: '\\phi(x,y,z) is a continuously differentiable scalar field.',
      whereUsed: 'Normal vector to level surface \\phi = c; Direction of maximum rate of increase.',
      commonMistake: 'Forgetting to normalize direction vector when computing directional derivative.'
    },
    {
      id: 'fc-m-dir-der-1',
      name: 'Directional Derivative',
      formula: 'D_{\\hat{\\mathbf{u}}} \\phi = \\nabla \\phi \\cdot \\hat{\\mathbf{u}} = |\\nabla \\phi| \\cos \\theta',
      conditions: '\\hat{\\mathbf{u}} = \\frac{\\mathbf{a}}{|\\mathbf{a}|} must be a unit vector.',
      whereUsed: 'Rate of change along any direction; maximum directional derivative is |\\nabla \\phi|.',
      commonMistake: 'Taking dot product with un-normalized vector.'
    },
    {
      id: 'fc-m-div-curl-1',
      name: 'Divergence & Curl of Vector Field',
      formula: '\\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}, \\quad \\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{vmatrix}',
      conditions: 'Solenoidal field: \\nabla \\cdot \\mathbf{F} = 0; Irrotational field: \\nabla \\times \\mathbf{F} = \\mathbf{0}.',
      whereUsed: 'Fluid flow, electromagnetism, conservative force fields admitting \\mathbf{F} = \\nabla \\phi.',
      commonMistake: 'Confusing scalar divergence with vector curl.'
    }
  ];
  mU1T1.coreConcepts = [
    'Important vector identities: \\nabla \\cdot (\\nabla \\phi) = \\nabla^2 \\phi, \\nabla \\times (\\nabla \\phi) = \\mathbf{0}, \\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0.',
    'Conservative vector fields satisfy \\nabla \\times \\mathbf{F} = \\mathbf{0} and can be written as gradient of potential function: \\mathbf{F} = \\nabla \\phi.'
  ];

  const mU1T2 = math.units[0].topics[1];
  mU1T2.formulaCards = [
    {
      id: 'fc-m-gauss-1',
      name: 'Gauss Divergence Theorem',
      formula: '\\oiint_S \\mathbf{F} \\cdot \\hat{\\mathbf{n}}\\, dS = \\iiint_V (\\nabla \\cdot \\mathbf{F})\\, dV',
      conditions: 'S is a closed piecewise smooth surface bounding region V.',
      whereUsed: 'Converts difficult surface flux integrals into volume triple integrals.',
      commonMistake: 'Applying Gauss theorem to an open surface (must cap open cylinders/hemispheres).'
    },
    {
      id: 'fc-m-green-1',
      name: "Green's Theorem in the Plane",
      formula: '\\oint_C (P\\, dx + Q\\, dy) = \\iint_R \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA',
      conditions: 'C is a closed positively-oriented plane boundary of region R.',
      whereUsed: 'Planar line integrals and finding area: \\text{Area}(R) = \\frac{1}{2}\\oint_C (x\\, dy - y\\, dx).',
      commonMistake: 'Reversing sign: it is \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}, not P minus Q.'
    },
    {
      id: 'fc-m-stokes-1',
      name: "Stokes' Theorem",
      formula: '\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot \\hat{\\mathbf{n}}\\, dS',
      conditions: 'C is the bounding curve of open surface S with right-hand orientation.',
      whereUsed: 'Circulation of vector field around closed space curve converted to surface curl.',
      commonMistake: 'Confusing open bounding surface in Stokes with closed bounding surface in Gauss.'
    }
  ];

  // Unit 2: Linear Algebra
  const mU2T1 = math.units[1].topics[0];
  mU2T1.formulaCards = [
    {
      id: 'fc-m-consistency-1',
      name: 'Linear System Consistency (Rouché–Capelli)',
      formula: '\\text{rank}(A) = \\text{rank}([A|B]) \\iff AX=B \\text{ is consistent}',
      conditions: 'Unique solution if rank = n (unknowns); Infinitely many if rank < n; Inconsistent if rank(A) < rank([A|B]).',
      whereUsed: 'Solving m equations in n unknowns using row-echelon reduction.',
      commonMistake: 'Assuming system is always solvable if number of equations equals unknowns.'
    },
    {
      id: 'fc-m-eigen-1',
      name: 'Eigenvalues and Eigenvectors',
      formula: '\\det(A - \\lambda I) = 0, \\quad (A - \\lambda I)X = 0',
      conditions: 'A is an n \\times n square matrix.',
      whereUsed: 'Diagonalization, matrix powers, vibration analysis, stability.',
      commonMistake: 'Trace = \\sum \\lambda_i, Det = \\prod \\lambda_i (vital quick checking tools).'
    }
  ];

  const mU2T2 = math.units[1].topics[1];
  mU2T2.formulaCards = [
    {
      id: 'fc-m-cayley-1',
      name: 'Cayley–Hamilton Theorem',
      formula: 'p(\\lambda) = \\det(A - \\lambda I) = 0 \\implies p(A) = A^n + c_{n-1}A^{n-1} + \\dots + c_0 I = O',
      conditions: 'Holds for any square matrix over \\mathbb{R} or \\mathbb{C}.',
      whereUsed: 'Computing high powers A^k and matrix inverses: A^{-1} = -\\frac{1}{c_0}(A^{n-1} + \\dots + c_1 I).',
      commonMistake: 'Forgetting identity matrix I on the constant scalar term.'
    },
    {
      id: 'fc-m-rank-nullity-1',
      name: 'Rank-Nullity Theorem & Basis',
      formula: '\\dim(V) = \\text{rank}(T) + \\text{nullity}(T) = \\dim(\\text{Range}(T)) + \\dim(\\text{Ker}(T))',
      conditions: 'T: V \\to W is a linear transformation between finite-dimensional vector spaces.',
      whereUsed: 'Checking injectivity, surjectivity, and finding dimension of solution spaces.',
      commonMistake: 'Confusing dimension of domain V with dimension of codomain W.'
    }
  ];

  // Unit 3: Fourier Series & Transforms
  const mU3T1 = math.units[2].topics[0];
  mU3T1.formulaCards = [
    {
      id: 'fc-m-fourier-full-1',
      name: 'Fourier Series for Period 2L',
      formula: 'f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty \\left[a_n \\cos\\left(\\frac{n\\pi x}{L}\\right) + b_n \\sin\\left(\\frac{n\\pi x}{L}\\right)\\right]',
      conditions: 'a_0 = \\frac{1}{L}\\int_{-L}^L f(x)dx, \\; a_n = \\frac{1}{L}\\int_{-L}^L f(x)\\cos\\left(\\frac{n\\pi x}{L}\\right)dx, \\; b_n = \\frac{1}{L}\\int_{-L}^L f(x)\\sin\\left(\\frac{n\\pi x}{L}\\right)dx',
      whereUsed: 'Periodic waveforms, boundary value problems, signal analysis.',
      commonMistake: 'Forgetting that a_0 has a factor of 1/2 in front in the series expansion.'
    },
    {
      id: 'fc-m-fourier-half-1',
      name: 'Half-Range Sine & Cosine Series (Interval [0, L])',
      formula: '\\text{Cosine: } a_n = \\frac{2}{L}\\int_0^L f(x)\\cos\\left(\\frac{n\\pi x}{L}\\right)dx \\quad | \\quad \\text{Sine: } b_n = \\frac{2}{L}\\int_0^L f(x)\\sin\\left(\\frac{n\\pi x}{L}\\right)dx',
      conditions: 'Even extension yields cosine series (b_n = 0); Odd extension yields sine series (a_n = 0).',
      whereUsed: 'Representing non-periodic functions on half-intervals.',
      commonMistake: 'Forgetting pre-factor 2/L in half-range series compared to 1/L in full-range.'
    }
  ];

  const mU3T2 = math.units[2].topics[1];
  mU3T2.formulaCards = [
    {
      id: 'fc-m-fourier-transform-1',
      name: 'Fourier Transform & Inverse Pair',
      formula: '\\mathcal{F}\\{f(x)\\} = F(\\omega) = \\int_{-\\infty}^\\infty f(x) e^{-i\\omega x}\\, dx, \\quad f(x) = \\frac{1}{2\\pi}\\int_{-\\infty}^\\infty F(\\omega) e^{i\\omega x}\\, d\\omega',
      conditions: 'f(x) must be absolutely integrable: \\int_{-\\infty}^\\infty |f(x)|dx < \\infty.',
      whereUsed: 'Continuous frequency spectra, heat conduction, differential equations.',
      commonMistake: 'Mixing up the signs of exponents between forward transform (-i\\omega x) and inverse (+i\\omega x).'
    },
    {
      id: 'fc-m-fourier-sine-cos-1',
      name: 'Fourier Sine & Cosine Transforms',
      formula: 'F_s(\\omega) = \\int_0^\\infty f(x) \\sin(\\omega x)\\, dx, \\quad F_c(\\omega) = \\int_0^\\infty f(x) \\cos(\\omega x)\\, dx',
      conditions: 'Semi-infinite domain x \\in [0, \\infty).',
      whereUsed: 'Semi-infinite heat flow and diffusion problems with Dirichlet or Neumann boundaries.',
      commonMistake: 'Using (-\\infty, \\infty) limits instead of (0, \\infty).'
    }
  ];

  // Unit 4: Difference Equations & Z-Transforms
  const mU4T1 = math.units[3].topics[0];
  mU4T1.formulaCards = [
    {
      id: 'fc-m-diff-sol-1',
      name: 'Linear Difference Equations Solution',
      formula: 'a_0 y_{n+k} + a_1 y_{n+k-1} + \\dots + a_k y_n = 0 \\implies y_n = C_1 r_1^n + C_2 r_2^n + \\dots',
      conditions: 'Characteristic roots r_i from auxiliary equation. Multiplicity m gives (C_1 + C_2 n + \\dots + C_m n^{m-1})r^n.',
      whereUsed: 'Discrete dynamic systems, recurrence relations, financial compounding, queue lengths.',
      commonMistake: 'Missing n factor on repeated roots.'
    }
  ];

  const mU4T2 = math.units[3].topics[1];
  mU4T2.formulaCards = [
    {
      id: 'fc-m-z-transform-1',
      name: 'Z-Transform Definition & Key Pairs',
      formula: 'Z\\{x_n\\} = X(z) = \\sum_{n=0}^\\infty x_n z^{-n}; \\quad Z\\{1\\} = \\frac{z}{z-1}, \\quad Z\\{a^n\\} = \\frac{z}{z-a}, \\quad Z\\{n\\} = \\frac{z}{(z-1)^2}',
      conditions: 'Unilateral Z-transform for n \\ge 0 with Region of Convergence (ROC) |z| > |a|.',
      whereUsed: 'Solving linear difference equations with initial conditions, discrete DSP filters.',
      commonMistake: 'Missing numerator factor z in standard transform forms.'
    },
    {
      id: 'fc-m-z-properties-1',
      name: 'Z-Transform Convolution & Multiplication by n',
      formula: 'Z\\{x_n * y_n\\} = X(z)Y(z), \\quad Z\\{n x_n\\} = -z \\frac{d X(z)}{dz}',
      conditions: 'Discrete convolution: x_n * y_n = \\sum_{k=0}^n x_k y_{n-k}.',
      whereUsed: 'System impulse response and difference equation solutions.',
      commonMistake: 'Forgetting factor -z in multiplication by n property.'
    }
  ];

  // Unit 5: Probability & Statistics
  const mU5T1 = math.units[4].topics[0];
  mU5T1.formulaCards = [
    {
      id: 'fc-m-bayes-1',
      name: "Bayes' Theorem & Total Probability",
      formula: 'P(B_j | A) = \\frac{P(B_j)P(A | B_j)}{\\sum_{i=1}^k P(B_i)P(A | B_i)}',
      conditions: 'B_1, \\dots, B_k form a partition of sample space S with P(B_i) > 0, P(A) > 0.',
      whereUsed: 'Diagnostic testing, posterior probabilities, machine learning classifiers.',
      commonMistake: 'Inverting conditional probabilities P(A|B) and P(B|A).'
    },
    {
      id: 'fc-m-distrib-1',
      name: 'Binomial, Poisson & Normal Distributions',
      formula: '\\text{Binomial: } P(r) = \\binom{n}{r}p^r q^{n-r}; \\quad \\text{Poisson: } P(r) = \\frac{e^{-\\lambda}\\lambda^r}{r!}; \\quad \\text{Normal: } f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}',
      conditions: 'Binomial \\to Poisson when n \\to \\infty, p \\to 0 with \\lambda = np. Standard Normal Z = \\frac{X-\\mu}{\\sigma}.',
      whereUsed: 'Counting experiments, rare event modeling, bell-curve natural variations.',
      commonMistake: 'Confusing Poisson variance (\\sigma^2 = \\lambda) with standard deviation (\\sigma = \\sqrt{\\lambda}).'
    }
  ];

  const mU5T2 = math.units[4].topics[1];
  mU5T2.formulaCards = [
    {
      id: 'fc-m-skew-kurt-1',
      name: 'Moments, Skewness & Kurtosis',
      formula: '\\text{Skewness: } \\beta_1 = \\frac{\\mu_3^2}{\\mu_2^3}, \\; \\gamma_1 = \\frac{\\mu_3}{\\sigma^3}; \\quad \\text{Kurtosis: } \\beta_2 = \\frac{\\mu_4}{\\mu_2^2}, \\; \\gamma_2 = \\beta_2 - 3',
      conditions: '\\beta_2 = 3 (mesokurtic / normal), \\beta_2 > 3 (leptokurtic / peaked), \\beta_2 < 3 (platykurtic / flat).',
      whereUsed: 'Assessing asymmetry and tail heaviness of frequency distributions.',
      commonMistake: 'Central moments \\mu_r are taken about the mean \\mu, whereas raw moments \\mu\'_r are about origin.'
    },
    {
      id: 'fc-m-rank-corr-1',
      name: "Spearman's Rank Correlation Coefficient",
      formula: '\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}',
      conditions: 'd_i = R_{1i} - R_{2i} is difference between paired ranks. Ties require correction factor.',
      whereUsed: 'Measuring non-parametric monotonic relationship between ordinal variables.',
      commonMistake: 'Forgetting parentheses in n(n^2 - 1) denominator.'
    }
  ];
}

// ----------------------------------------------------------------------------------------
// 2. DSC-302 Data Structures Updates
// ----------------------------------------------------------------------------------------
if (dsa) {
  // Unit 1: Arrays, Pointers & Complexity
  dsa.units[0].topics[0].formulaCards = [
    {
      id: 'fc-dsa-complexity-1',
      name: 'Asymptotic Complexity Hierarchy',
      formula: 'O(1) < O(\\log n) < O(n) < O(n \\log n) < O(n^2) < O(2^n) < O(n!)',
      conditions: 'n is input size; Big-O defines asymptotic upper bound: f(n) \\le c \\cdot g(n) for n \\ge n_0.',
      whereUsed: 'Algorithm performance benchmarking and bottleneck analysis.',
      commonMistake: 'Confusing logarithmic time O(\\log n) with linearithmic O(n \\log n).'
    }
  ];
  dsa.units[0].topics[1].formulaCards = [
    {
      id: 'fc-dsa-array-address-1',
      name: 'Array Element Addressing (Row & Column Major)',
      formula: '\\text{Row-Major: } \\text{Loc}(A[i][j]) = \\text{Base} + [(i - L_R)N + (j - L_C)]w; \\quad \\text{Col-Major: } \\text{Base} + [(j - L_C)M + (i - L_R)]w',
      conditions: 'M rows, N columns, element size w bytes, lower bounds L_R, L_C.',
      whereUsed: 'Direct memory pointer calculations without multidimensional overhead.',
      commonMistake: 'Using row count M in row-major instead of column count N.'
    }
  ];

  // Unit 2: Stacks and Queues
  dsa.units[1].topics[0].formulaCards = [
    {
      id: 'fc-dsa-stack-1',
      name: 'Stack Operations & Polish Notations',
      formula: '\\text{Infix: } A + B \\iff \\text{Prefix: } +AB \\iff \\text{Postfix: } AB+',
      conditions: 'LIFO (Last-In First-Out) discipline. Stack operations push, pop, peek are O(1).',
      whereUsed: 'Compiler expression parsing, recursive call stack, parenthesis matching.',
      commonMistake: 'Stack overflow occurs when pushing to full stack; underflow occurs when popping empty stack.'
    }
  ];
  dsa.units[1].topics[2].formulaCards = [
    {
      id: 'fc-dsa-queue-1',
      name: 'Circular Queue Full & Empty Conditions',
      formula: '\\text{Full: } (\\text{rear} + 1) \\pmod N = \\text{front}, \\quad \\text{Empty: } \\text{front} = -1',
      conditions: 'Fixed array of size N; FIFO (First-In First-Out) discipline.',
      whereUsed: 'CPU task scheduling, print queues, buffering without shifting elements.',
      commonMistake: 'In linear queue, space before front is wasted after dequeuing (solved by circular queue).'
    }
  ];

  // Unit 3: Linked Lists
  dsa.units[2].topics[0].formulaCards = [
    {
      id: 'fc-dsa-ll-1',
      name: 'Singly vs Doubly Linked List Node Structure',
      formula: '\\text{Singly: } [\\text{data} | \\text{next}] \\quad | \\quad \\text{Doubly: } [\\text{prev} | \\text{data} | \\text{next}]',
      conditions: 'Dynamic memory allocation; insertion/deletion at known node pointer is O(1); search is O(n).',
      whereUsed: 'Dynamic lists where size changes frequently and reallocation overhead must be avoided.',
      commonMistake: 'Breaking pointers: update new node pointers BEFORE severing existing links.'
    }
  ];

  // Unit 4: Trees
  dsa.units[3].topics[0].formulaCards = [
    {
      id: 'fc-dsa-tree-props-1',
      name: 'Binary Tree Theoretical Bounds',
      formula: '\\text{Max nodes at level } l = 2^l, \\quad \\text{Max nodes of height } h = 2^{h+1} - 1, \\quad \\text{Leaves in Full BT} = \\text{Internal} + 1',
      conditions: 'Binary tree has degree \\le 2. Height h of single node is 0.',
      whereUsed: 'Capacity proofs, storage calculation, decision trees.',
      commonMistake: 'Confusing 0-indexed height with 1-indexed levels.'
    }
  ];
  dsa.units[3].topics[1].formulaCards = [
    {
      id: 'fc-dsa-avl-rotations-1',
      name: 'AVL Balance Factor & Rotations',
      formula: '\\text{BF} = \\text{height}(\\text{left}) - \\text{height}(\\text{right}) \\in \\{-1, 0, +1\\}',
      conditions: 'LL \\to \\text{Right Rotate}; RR \\to \\text{Left Rotate}; LR \\to \\text{Left-Right Rotate}; RL \\to \\text{Right-Left Rotate}.',
      whereUsed: 'Maintaining strictly balanced O(\\log n) search, insertion, and deletion.',
      commonMistake: 'Applying single rotation to double-rotation cases (LR, RL).'
    }
  ];
  dsa.units[3].topics[2].formulaCards = [
    {
      id: 'fc-dsa-heap-1',
      name: 'Binary Heap Array Index Formulas',
      formula: '\\text{Parent}(i) = \\lfloor \\frac{i-1}{2} \\rfloor, \\quad \\text{Left}(i) = 2i + 1, \\quad \\text{Right}(i) = 2i + 2',
      conditions: '0-based index array representation of complete binary tree.',
      whereUsed: 'Priority queues, Heap Sort (O(n \\log n) worst case), Dijkstra algorithm.',
      commonMistake: 'Max-Heap requires parent \\ge children; Min-Heap requires parent \\le children.'
    }
  ];

  // Unit 5: Graphs & Sorting
  dsa.units[4].topics[1].formulaCards = [
    {
      id: 'fc-dsa-mst-1',
      name: "Minimum Spanning Tree (Prim's vs Kruskal's)",
      formula: '\\text{MST Edges} = |V| - 1, \\quad \\text{Prim: } O(E \\log V), \\quad \\text{Kruskal: } O(E \\log E)',
      conditions: 'Undirected, connected, weighted graph with no cycles.',
      whereUsed: 'Network design, cluster analysis, road and circuit layouts.',
      commonMistake: "Prim grows a single cut from a start vertex; Kruskal selects edges globally using Disjoint-Set/Union-Find."
    }
  ];
  dsa.units[4].topics[2].formulaCards = [
    {
      id: 'fc-dsa-sorting-table-1',
      name: 'Sorting Algorithms Benchmark Matrix',
      formula: '\\text{Merge: } O(n \\log n) \\; [\\text{Stable}], \\quad \\text{Quick: } O(n \\log n) \\; [\\text{Worst } O(n^2)], \\quad \\text{Heap: } O(n \\log n) \\; [\\text{Unstable}]',
      conditions: 'Comparison-based sorting has theoretical lower bound \\Omega(n \\log n).',
      whereUsed: 'Selecting optimal algorithm based on data distribution, stability and memory limits.',
      commonMistake: 'QuickSort degenerates to O(n^2) when pivot selection is poor (e.g. already sorted array with first element pivot).'
    }
  ];
}

// ----------------------------------------------------------------------------------------
// 3. DSC-304 Database Management Systems Updates
// ----------------------------------------------------------------------------------------
if (dbms) {
  // Unit 1: Introductory Concepts
  dbms.units[0].topics[3].formulaCards = [
    {
      id: 'fc-dbms-ra-1',
      name: 'Relational Algebra Fundamental Operators',
      formula: '\\sigma_{\\text{cond}}(R) \\; [\\text{Select}], \\; \\pi_{\\text{attrs}}(R) \\; [\\text{Project}], \\; R \\cup S \\; [\\text{Union}], \\; R - S \\; [\\text{Diff}], \\; R \\times S \\; [\\text{Cross}], \\; R \\bowtie S \\; [\\text{Join}]',
      conditions: 'Union and Difference require union compatibility (same degree and compatible domains).',
      whereUsed: 'Procedural query evaluation and query optimization query plans.',
      commonMistake: 'Confusing selection \\sigma (filters rows) with projection \\pi (selects columns).'
    }
  ];

  // Unit 2: Database Design / Normalization
  dbms.units[1].topics[0].formulaCards = [
    {
      id: 'fc-dbms-armstrong-1',
      name: "Armstrong's Axioms & Attribute Closure",
      formula: '\\text{Reflexivity: } Y \\subseteq X \\implies X \\to Y; \\; \\text{Augmentation: } X \\to Y \\implies XZ \\to YZ; \\; \\text{Transitivity: } X \\to Y, Y \\to Z \\implies X \\to Z',
      conditions: 'Sound and complete inference rules for functional dependencies.',
      whereUsed: 'Deriving secondary dependencies (Union, Decomposition, Pseudo-transitivity) and calculating attribute closures X^+.',
      commonMistake: 'If X \\to YZ, then X \\to Y and X \\to Z (Decomposition holds on RHS, NEVER on LHS: XY \\to Z does not imply X \\to Z).'
    }
  ];
  dbms.units[1].topics[2].formulaCards = [
    {
      id: 'fc-dbms-normal-forms-1',
      name: 'Normalization Ladder (1NF through BCNF)',
      formula: '\\text{1NF: Atomic} \\longrightarrow \\text{2NF: No partial FDs} \\longrightarrow \\text{3NF: } X \\to A \\implies X \\text{ superkey OR } A \\text{ prime} \\longrightarrow \\text{BCNF: } X \\text{ superkey}',
      conditions: 'Candidate key = minimal superkey. Non-prime attribute = attribute not in any candidate key.',
      whereUsed: 'Eliminating insertion, deletion, and update anomalies while minimizing data redundancy.',
      commonMistake: 'Every BCNF relation is in 3NF, but not all 3NF relations are in BCNF (BCNF does not allow prime attribute exception).'
    }
  ];
  dbms.units[1].topics[3].formulaCards = [
    {
      id: 'fc-dbms-lossless-1',
      name: 'Lossless-Join Decomposition Condition',
      formula: 'R_1 \\cap R_2 \\to R_1 \\quad \\text{OR} \\quad R_1 \\cap R_2 \\to R_2',
      conditions: 'For binary decomposition of R into (R_1, R_2), the common attribute must be a superkey of at least one relation.',
      whereUsed: 'Ensuring natural join R_1 \\bowtie R_2 restores exactly original table R without spurious tuples.',
      commonMistake: 'Decomposition can be lossless even if it is not dependency preserving.'
    }
  ];

  // Unit 3: SQL & PL/SQL
  dbms.units[2].topics[0].formulaCards = [
    {
      id: 'fc-dbms-sql-order-1',
      name: 'SQL Conceptual Execution Order',
      formula: '\\text{FROM} \\longrightarrow \\text{WHERE} \\longrightarrow \\text{GROUP BY} \\longrightarrow \\text{HAVING} \\longrightarrow \\text{SELECT} \\longrightarrow \\text{ORDER BY}',
      conditions: 'WHERE filters individual tuples; HAVING filters aggregated groups.',
      whereUsed: 'Writing syntactically valid queries without alias misuse in WHERE clauses.',
      commonMistake: 'Using aggregate functions (e.g. SUM, COUNT) inside WHERE clause instead of HAVING.'
    }
  ];
  dbms.units[2].topics[2].formulaCards = [
    {
      id: 'fc-dbms-plsql-1',
      name: 'PL/SQL Block Structure',
      formula: '\\text{DECLARE } [\\text{Variables, Cursors}] \\longrightarrow \\text{BEGIN } [\\text{SQL/Procedural}] \\longrightarrow \\text{EXCEPTION } [\\text{Handlers}] \\longrightarrow \\text{END;}',
      conditions: 'Block-structured procedural extension to SQL supporting triggers, cursors and stored procedures.',
      whereUsed: 'Transaction automation, business rules enforcement, and database triggers.',
      commonMistake: 'Forgetting exception block handling, causing silent rollbacks or runtime unhandled errors.'
    }
  ];

  // Unit 4: Transaction Management
  dbms.units[3].topics[0].formulaCards = [
    {
      id: 'fc-dbms-acid-1',
      name: 'ACID Properties of Transactions',
      formula: '\\mathbf{A}\\text{tomicity (All or None)} \\; | \\; \\mathbf{C}\\text{onsistency (Invariants)} \\; | \\; \\mathbf{I}\\text{solation (Concurrency)} \\; | \\; \\mathbf{D}\\text{urability (Persistence)}',
      conditions: 'Maintained by Recovery Manager (A, D) and Concurrency Control Manager (I).',
      whereUsed: 'Ensuring database validity despite hardware crashes, power loss, or interleaved concurrent executions.',
      commonMistake: 'Confusing isolation anomalies: dirty read (read uncommitted), unrepeatable read (modified update), phantom read (new insert).'
    }
  ];
  dbms.units[3].topics[1].formulaCards = [
    {
      id: 'fc-dbms-2pl-1',
      name: 'Two-Phase Locking (2PL) Protocol',
      formula: '\\text{Growing Phase: Acquire locks, release none} \\longrightarrow \\text{Shrinking Phase: Release locks, acquire none}',
      conditions: 'Guarantees conflict serializability. Strict 2PL holds exclusive locks until transaction commit/abort (prevents cascading aborts).',
      whereUsed: 'Concurrency control in commercial relational database engines.',
      commonMistake: 'Basic 2PL does not prevent deadlocks; lock acquisition cycles require wait-die/wound-wait schemes.'
    }
  ];

  // Unit 5: Advanced Databases
  dbms.units[4].topics[0].formulaCards = [
    {
      id: 'fc-dbms-nosql-cap-1',
      name: 'NoSQL Classifications & CAP Theorem',
      formula: '\\text{Consistency (C)} + \\text{Availability (A)} + \\text{Partition Tolerance (P)} \\implies \\text{Pick at most 2}',
      conditions: 'In network partitions, distributed systems must trade between Consistency (CP) and Availability (AP).',
      whereUsed: 'Choosing database architecture: Key-Value (Redis), Document (MongoDB), Column-Family (Cassandra), Graph (Neo4j).',
      commonMistake: 'Assuming NoSQL means no structure; rather it means Not Only SQL and flexible schema without ACID overhead.'
    }
  ];
}

// Save back
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully updated cheatsheets_data.json');

// Also update master_cheatsheets_data.json
fs.writeFileSync(masterDataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully updated master_cheatsheets_data.json');
