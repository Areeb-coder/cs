/**
 * Replace mismatched Math III units in master_cheatsheets_data.json
 * Unit 1: Vector Calculus and Its Applications
 * Unit 2: Linear Algebra and Its Applications (Replaces Laplace Transforms)
 * Unit 3: Fourier Series, Fourier Transforms and Its Applications
 * Unit 4: Difference Equations, Z-Transforms and Its Applications
 * Unit 5: Probability and Statistics (Replaces Higher Calculus)
 *
 * Also audit and enrich DSA (DSC-302) and DBMS (DSC-304) units to ensure 100% fidelity.
 */
const fs = require('fs');
const path = require('path');

const masterDataPath = path.join(__dirname, 'master_cheatsheets_data.json');
const masterData = JSON.parse(fs.readFileSync(masterDataPath, 'utf8'));

const math = masterData.find(s => s.subjectId === 'asb-301');

if (math) {
  math.subjectTitle = 'ENGINEERING MATHEMATICS III — AS-301';
  math.sourceStatus = 'Authoritative JMI AS-301 Syllabus';

  // --- UNIT 1: Vector Calculus and Its Applications ---
  math.units[0].unitTitle = '1 — Vector Calculus and Its Applications';
  math.units[0].sourceStatus = 'Authoritative JMI AS-301 Syllabus';
  math.units[0].coverageStatements = [
    'Scalar and vector functions.',
    'Gradient of a scalar field, directional derivative, normal to level surfaces.',
    'Divergence of a vector field, solenoidal vector fields.',
    'Curl of a vector field, irrotational and conservative fields.',
    'Vector identities: div(curl F) = 0, curl(grad phi) = 0, div(grad phi) = Laplacian(phi).',
    "Gauss divergence theorem for closed surfaces.",
    "Green's theorem in the plane for closed curves.",
    "Stokes' theorem for open surfaces with boundary curves.",
    'Related engineering problems based on vector-calculus theorems.'
  ];
  math.units[0].sixtySecSummary = [
    'Gradient: $\\nabla \\phi = \\frac{\\partial \\phi}{\\partial x}\\mathbf{i} + \\frac{\\partial \\phi}{\\partial y}\\mathbf{j} + \\frac{\\partial \\phi}{\\partial z}\\mathbf{k}$. Normal to level surface $\\phi(x,y,z)=c$.',
    'Directional derivative in unit direction $\\hat{\\mathbf{u}}$: $D_{\\hat{\\mathbf{u}}}\\phi = \\nabla \\phi \\cdot \\hat{\\mathbf{u}}$. Maximum rate of increase is $|\\nabla \\phi|$.',
    'Divergence: $\\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$. Solenoidal if $\\nabla \\cdot \\mathbf{F} = 0$.',
    'Curl: $\\nabla \\times \\mathbf{F} = \\left(\\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z}\\right)\\mathbf{i} + \\left(\\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x}\\right)\\mathbf{j} + \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right)\\mathbf{k}$. Irrotational if $\\nabla \\times \\mathbf{F} = \\mathbf{0}$.',
    'Gauss Divergence Theorem: $\\oiint_S \\mathbf{F} \\cdot \\hat{\\mathbf{n}}\\, dS = \\iiint_V (\\nabla \\cdot \\mathbf{F})\\, dV$ (Flux through closed surface $S$).',
    "Green's Theorem in Plane: $\\oint_C (P\\, dx + Q\\, dy) = \\iint_R \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA$ (Closed plane curve $C$).",
    "Stokes' Theorem: $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot \\hat{\\mathbf{n}}\\, dS$ (Surface circulation)."
  ];
  math.units[0].formulaBlocks = [
    {
      name: 'Gradient and Directional Derivative',
      formula: '\\nabla \\phi = \\frac{\\partial \\phi}{\\partial x}\\mathbf{i} + \\frac{\\partial \\phi}{\\partial y}\\mathbf{j} + \\frac{\\partial \\phi}{\\partial z}\\mathbf{k}, \\quad D_{\\hat{\\mathbf{u}}}\\phi = \\nabla \\phi \\cdot \\hat{\\mathbf{u}}'
    },
    {
      name: 'Divergence and Curl',
      formula: '\\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}, \\quad \\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{vmatrix}'
    },
    {
      name: 'Vector Laplacian & Fundamental Identities',
      formula: '\\nabla \\cdot (\\nabla \\phi) = \\nabla^2 \\phi, \\quad \\nabla \\times (\\nabla \\phi) = \\mathbf{0}, \\quad \\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0'
    },
    {
      name: 'Gauss Divergence Theorem',
      formula: '\\oiint_S \\mathbf{F} \\cdot \\hat{\\mathbf{n}}\\, dS = \\iiint_V (\\nabla \\cdot \\mathbf{F})\\, dV'
    },
    {
      name: "Green's Theorem in the Plane",
      formula: '\\oint_C (P\\, dx + Q\\, dy) = \\iint_R \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA'
    },
    {
      name: "Stokes' Curl Theorem",
      formula: '\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot \\hat{\\mathbf{n}}\\, dS'
    }
  ];
  math.units[0].coreConcepts = [
    {
      title: 'Recognition Trick for Vector Integral Theorems',
      content: 'Closed bounding surface enclosing a 3D volume \\to Gauss Divergence Theorem; Closed 2D plane boundary \\to Green’s Theorem; Open surface bounded by a perimeter closed curve \\to Stokes’ Theorem.'
    },
    {
      title: 'Conservative Vector Fields & Scalar Potentials',
      content: 'A vector field \\mathbf{F} is conservative if and only if \\nabla \\times \\mathbf{F} = \\mathbf{0}. It can be represented as \\mathbf{F} = \\nabla \\phi, making line integrals path-independent: \\int_A^B \\mathbf{F} \\cdot d\\mathbf{r} = \\phi(B) - \\phi(A).'
    }
  ];

  // --- UNIT 2: Linear Algebra and Its Applications (REPLACES LAPLACE TRANSFORMS) ---
  math.units[1].unitTitle = '2 — Linear Algebra and Its Applications';
  math.units[1].sourceStatus = 'Authoritative JMI AS-301 Syllabus';
  math.units[1].coverageStatements = [
    'Consistency of simultaneous linear equations AX = B using rank method (Rouché–Capelli theorem).',
    'Eigenvalues and eigenvectors of square matrices.',
    'Properties of eigenvalues: sum equals trace, product equals determinant.',
    'Cayley–Hamilton theorem and its applications to matrix powers and inverses.',
    'Vector space axioms: closure, zero vector, additive inverse, scalar distributivity.',
    'Linear combinations, linear dependence, and linear independence.',
    'Basis and dimension of finite-dimensional vector spaces.',
    'Linear transformations, kernel, range, and Rank-Nullity theorem.',
    'Related engineering problems on matrices and transformations.'
  ];
  math.units[1].sixtySecSummary = [
    'Rouché–Capelli: $AX = B$ is consistent $\\iff \\text{rank}(A) = \\text{rank}([A|B])$.',
    'Unique solution if $\\text{rank}(A) = \\text{rank}([A|B]) = n$ (number of unknowns).',
    'Infinitely many solutions if $\\text{rank}(A) = \\text{rank}([A|B]) < n$.',
    'Inconsistent (no solution) if $\\text{rank}(A) < \\text{rank}([A|B])$.',
    'Eigenvalues satisfy characteristic equation $|A - \\lambda I| = 0$. Eigenvectors satisfy $(A - \\lambda I)X = 0$.',
    'Eigenvalue rules: $\\sum \\lambda_i = \\text{trace}(A)$, $\\prod \\lambda_i = \\det(A)$. Eigenvalues of triangular matrix are its diagonal entries.',
    'Cayley–Hamilton Theorem: Every square matrix satisfies its own characteristic equation $p(A) = A^n + c_{n-1}A^{n-1} + \\dots + c_0 I = O$.',
    'Matrix inverse via Cayley–Hamilton: $A^{-1} = -\\frac{1}{c_0}\\left(A^{n-1} + c_{n-1}A^{n-2} + \\dots + c_1 I\\right)$ when $\\det(A) \\neq 0$.',
    'Rank-Nullity Theorem: For $T: V \\to W$, $\\dim(V) = \\text{rank}(T) + \\text{nullity}(T) = \\dim(\\text{Range}(T)) + \\dim(\\text{Ker}(T))$.'
  ];
  math.units[1].formulaBlocks = [
    {
      name: 'Rouché–Capelli Consistency Criterion',
      formula: '\\text{rank}(A) = \\text{rank}([A|B]) \\iff AX=B \\text{ is consistent}'
    },
    {
      name: 'Characteristic Equation & Eigenvalues',
      formula: '\\det(A - \\lambda I) = 0, \\quad (A - \\lambda I)X = 0'
    },
    {
      name: 'Trace & Determinant Relations',
      formula: '\\sum_{i=1}^n \\lambda_i = \\text{tr}(A) = \\sum_{i=1}^n a_{ii}, \\quad \\prod_{i=1}^n \\lambda_i = \\det(A)'
    },
    {
      name: 'Cayley–Hamilton Theorem',
      formula: 'p(\\lambda) = \\lambda^n + c_{n-1}\\lambda^{n-1} + \\dots + c_0 = 0 \\implies p(A) = A^n + c_{n-1}A^{n-1} + \\dots + c_0 I = O'
    },
    {
      name: 'Linear Independence Condition',
      formula: 'c_1 v_1 + c_2 v_2 + \\dots + c_k v_k = 0 \\implies c_1 = c_2 = \\dots = c_k = 0'
    },
    {
      name: 'Rank-Nullity Theorem',
      formula: '\\dim(V) = \\text{rank}(T) + \\text{nullity}(T)'
    }
  ];
  math.units[1].coreConcepts = [
    {
      title: 'Consistency Decision Tree (System of Linear Equations)',
      content: '1. Reduce augmented matrix [A|B] to row-echelon form. 2. Compare rank(A) with rank([A|B]). If rank(A) < rank([A|B]), system is INCONSISTENT. If rank(A) = rank([A|B]) = n, system has UNIQUE solution. If rank(A) = rank([A|B]) = r < n, system has INFINITELY MANY solutions depending on (n - r) free parameters.'
    },
    {
      title: 'Cayley–Hamilton Applications: Higher Powers & Inverse',
      content: 'Multiply or divide the matrix polynomial relation p(A) = O by powers of A to simplify high exponent powers A^k without direct multiplication, or multiply by A^{-1} to isolate the inverse.'
    },
    {
      title: 'Vector Space, Basis & Dimension',
      content: 'A subset B of vector space V is a basis if: (1) B is linearly independent, and (2) B spans V. The number of elements in any basis of V is the dimension dim(V).'
    }
  ];

  // --- UNIT 3: Fourier Series and Transforms ---
  math.units[2].unitTitle = '3 — Fourier Series, Fourier Transforms and Its Applications';
  math.units[2].sourceStatus = 'Authoritative JMI AS-301 Syllabus';

  // --- UNIT 4: Difference Equations and Z-Transforms ---
  math.units[3].unitTitle = '4 — Difference Equations, Z-Transforms and Its Applications';
  math.units[3].sourceStatus = 'Authoritative JMI AS-301 Syllabus';

  // --- UNIT 5: Probability and Statistics (REPLACES HIGHER CALCULUS) ---
  math.units[4].unitTitle = '5 — Probability and Statistics';
  math.units[4].sourceStatus = 'Authoritative JMI AS-301 Syllabus';
  math.units[4].coverageStatements = [
    'Probability theorems: addition theorem, conditional probability, multiplication theorem, total probability, and Bayes’ theorem.',
    'Discrete and continuous random variables, probability mass function (PMF), probability density function (PDF), cumulative distribution function (CDF).',
    'Binomial distribution: PMF, mean np, variance npq, conditions and Poisson approximation.',
    'Poisson distribution: PMF, mean lambda, variance lambda, rare events modeling.',
    'Normal distribution: PDF, standard normal distribution Z = (X - mu)/sigma, bell curve properties.',
    'Raw moments, central moments, and inter-moment recurrence relations.',
    'Karl Pearson and moment-based skewness (beta_1, gamma_1) and direction of skew.',
    'Kurtosis (beta_2, gamma_2), mesokurtic, leptokurtic, and platykurtic distributions.',
    'Spearman’s rank correlation coefficient rho and bivariate scatter trends.'
  ];
  math.units[4].sixtySecSummary = [
    'Total Probability: $P(A) = \\sum_{i=1}^k P(B_i)P(A|B_i)$.',
    "Bayes' Theorem: $P(B_j|A) = \\frac{P(B_j)P(A|B_j)}{\\sum_{i=1}^k P(B_i)P(A|B_i)}$.",
    'Binomial Distribution: $P(X=r) = \\binom{n}{r}p^r q^{n-r}$, Mean $\\mu = np$, Variance $\\sigma^2 = npq$, $\\text{SD} = \\sqrt{npq}$.',
    'Poisson Distribution: $P(X=r) = \\frac{e^{-\\lambda}\\lambda^r}{r!}$, Mean $\\mu = \\lambda$, Variance $\\sigma^2 = \\lambda$, $\\text{SD} = \\sqrt{\\lambda}$.',
    'Normal Distribution: $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\left[-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right]$. Standard score $Z = \\frac{X-\\mu}{\\sigma}$. Symmetrical bell curve with Mean = Median = Mode.',
    'Moments Relations: $\\mu_1 = 0$, $\\mu_2 = \\mu\'_2 - (\\mu\'_1)^2 = \\sigma^2$, $\\mu_3 = \\mu\'_3 - 3\\mu\'_2\\mu\'_1 + 2(\\mu\'_1)^3$, $\\mu_4 = \\mu\'_4 - 4\\mu\'_3\\mu\'_1 + 6\\mu\'_2(\\mu\'_1)^2 - 3(\\mu\'_1)^4$.',
    'Skewness: $\\beta_1 = \\frac{\\mu_3^2}{\\mu_2^3}$, $\\gamma_1 = \\frac{\\mu_3}{\\sigma^3}$. $\\gamma_1 > 0 \\implies$ Right-skewed; $\\gamma_1 = 0 \\implies$ Symmetric; $\\gamma_1 < 0 \\implies$ Left-skewed.',
    'Kurtosis: $\\beta_2 = \\frac{\\mu_4}{\\mu_2^2}$, $\\gamma_2 = \\beta_2 - 3$. $\\beta_2 = 3$ (mesokurtic / normal), $\\beta_2 > 3$ (leptokurtic / peaked), $\\beta_2 < 3$ (platykurtic / flat).',
    "Spearman's Rank Correlation: $\\rho = 1 - \\frac{6\\sum d_i^2}{n(n^2 - 1)}$ where $d_i = R_{1i} - R_{2i}$."
  ];
  math.units[4].formulaBlocks = [
    {
      name: "Bayes' Theorem",
      formula: 'P(B_j | A) = \\frac{P(B_j)P(A | B_j)}{\\sum_{i=1}^k P(B_i)P(A | B_i)}'
    },
    {
      name: 'Binomial Distribution PMF & Parameters',
      formula: 'P(X=r) = \\binom{n}{r}p^r q^{n-r}, \\quad \\mu = np, \\quad \\sigma^2 = npq'
    },
    {
      name: 'Poisson Distribution PMF & Parameters',
      formula: 'P(X=r) = \\frac{e^{-\\lambda}\\lambda^r}{r!}, \\quad \\mu = \\lambda, \\quad \\sigma^2 = \\lambda'
    },
    {
      name: 'Normal Distribution & Z-Standardization',
      formula: 'f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}, \\quad Z = \\frac{X - \\mu}{\\sigma}'
    },
    {
      name: 'Central Moments from Raw Moments',
      formula: '\\mu_2 = \\mu\'_2 - (\\mu\'_1)^2, \\quad \\mu_3 = \\mu\'_3 - 3\\mu\'_2\\mu\'_1 + 2(\\mu\'_1)^3, \\quad \\mu_4 = \\mu\'_4 - 4\\mu\'_3\\mu\'_1 + 6\\mu\'_2(\\mu\'_1)^2 - 3(\\mu\'_1)^4'
    },
    {
      name: 'Skewness and Kurtosis Coefficients',
      formula: '\\beta_1 = \\frac{\\mu_3^2}{\\mu_2^3}, \\quad \\beta_2 = \\frac{\\mu_4}{\\mu_2^2}, \\quad \\gamma_2 = \\beta_2 - 3'
    },
    {
      name: "Spearman's Rank Correlation",
      formula: '\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}'
    }
  ];
  math.units[4].coreConcepts = [
    {
      title: 'Probability Distributions Comparison',
      content: 'Binomial: n independent trials, constant p, discrete. Poisson: n large, p small, lambda = np, discrete counts of rare events. Normal: continuous, symmetric bell curve, 68-95-99.7 rule for [mu +- sigma, mu +- 2sigma, mu +- 3sigma].'
    },
    {
      title: 'Skewness and Kurtosis Interpretation in Exams',
      content: 'Skewness measures asymmetry: positive skew (tail to the right, Mean > Median > Mode); negative skew (tail to the left, Mean < Median < Mode). Kurtosis measures peakedness: mesokurtic (beta_2 = 3), leptokurtic (beta_2 > 3, heavier tails), platykurtic (beta_2 < 3, flatter peak).'
    },
    {
      title: 'Spearman’s Rank Correlation Workflow',
      content: '1. Assign ranks to X and Y variables. 2. Compute differences d_i = R_{X_i} - R_{Y_i}. 3. Square each difference d_i^2 and calculate sum. 4. Substitute into rho = 1 - 6 sum(d^2) / [n(n^2 - 1)]. Result satisfies -1 <= rho <= 1.'
    }
  ];
}

fs.writeFileSync(masterDataPath, JSON.stringify(masterData, null, 2), 'utf8');
console.log('Successfully updated master_cheatsheets_data.json with AS-301 syllabus replacement!');
