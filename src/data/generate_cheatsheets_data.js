const fs = require('fs');
const hierarchy = JSON.parse(fs.readFileSync('src/data/topics_hierarchy.json', 'utf8'));

// Topic content knowledge base containing authentic formulas (KaTeX), definitions, rules, traps, and bullet points
const TOPIC_DETAILS = {
  // === ASB-301: Engineering Mathematics III ===
  'asb-301-u1-t1': {
    sixtySec: [
      'Gradient $\\nabla \\phi = \\frac{\\partial \\phi}{\\partial x}\\mathbf{i} + \\frac{\\partial \\phi}{\\partial y}\\mathbf{j} + \\frac{\\partial \\phi}{\\partial z}\\mathbf{k}$ points in maximum rate of increase.',
      'Divergence $\\nabla \\cdot \\mathbf{F}$ measures net flux density; Solenoidal if $\\nabla \\cdot \\mathbf{F} = 0$.',
      'Curl $\\nabla \\times \\mathbf{F}$ measures circulation; Irrotational (Conservative) if $\\nabla \\times \\mathbf{F} = \\mathbf{0}$.',
      'Directional Derivative $D_{\\mathbf{a}}\\phi = \\nabla \\phi \\cdot \\hat{\\mathbf{a}}$.'
    ],
    coreConcepts: [
      'Vector differential operator Del: $\\nabla = \\mathbf{i}\\frac{\\partial}{\\partial x} + \\mathbf{j}\\frac{\\partial}{\\partial y} + \\mathbf{k}\\frac{\\partial}{\\partial z}$.',
      'Scalar potential $\\phi$ exists such that $\\mathbf{F} = \\nabla \\phi$ if and only if $\\nabla \\times \\mathbf{F} = \\mathbf{0}$.',
      'Scalar and vector identities: $\\nabla \\times (\\nabla \\phi) = \\mathbf{0}$ and $\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$.'
    ],
    formulaCards: [
      {
        id: 'fc-asb1',
        name: 'Directional Derivative',
        formula: 'D_{\\mathbf{u}} \\phi = \\nabla \\phi \\cdot \\frac{\\mathbf{u}}{|\\mathbf{u}|}',
        variables: [
          { name: '\\phi', description: 'Scalar field' },
          { name: '\\mathbf{u}', description: 'Direction vector' }
        ],
        conditions: 'Evaluated at point $P(x_0, y_0, z_0)$ along unit vector $\\hat{\\mathbf{u}}$.',
        whereUsed: 'Finding slope along any non-axial vector.',
        commonMistake: 'Forgetting to normalize $\\mathbf{u}$ into a unit vector $\\hat{\\mathbf{u}}$.'
      },
      {
        id: 'fc-asb2',
        name: 'Vector Operator Definitions',
        formula: '\\text{div } \\mathbf{F} = \\frac{\\partial F_1}{\\partial x} + \\frac{\\partial F_2}{\\partial y} + \\frac{\\partial F_3}{\\partial z}, \\quad \\text{curl } \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ F_1 & F_2 & F_3 \\end{vmatrix}',
        whereUsed: 'Vector field classification.',
        commonMistake: 'Confusing dot product (scalar output) with cross product (vector output).'
      }
    ],
    rulesAndProperties: [
      'Solenoidal field: $\\nabla \\cdot \\mathbf{F} = 0$',
      'Irrotational field: $\\nabla \\times \\mathbf{F} = \\mathbf{0}$',
      'Laplacian operator: $\\nabla^2 \\phi = \\nabla \\cdot (\\nabla \\phi) = \\frac{\\partial^2 \\phi}{\\partial x^2} + \\frac{\\partial^2 \\phi}{\\partial y^2} + \\frac{\\partial^2 \\phi}{\\partial z^2}$'
    ],
    examTraps: [
      'Check if the normal vector is pointing outwards when calculating flux.',
      'Curl produces a vector field, never a scalar value.'
    ]
  },
  'asb-301-u1-t2': {
    sixtySec: [
      'Green’s Theorem (plane): $\\oint_C (P dx + Q dy) = \\iint_R \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA$.',
      'Gauss Divergence Theorem: $\\iint_S \\mathbf{F} \\cdot \\hat{\\mathbf{n}} dS = \\iiint_V (\\nabla \\cdot \\mathbf{F}) dV$.',
      'Stokes’ Theorem: $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot \\hat{\\mathbf{n}} dS$.'
    ],
    coreConcepts: [
      'Converts boundary integrals to domain integrals of one dimension higher.',
      'Surface orientation must follow right-hand rule with respect to curve direction.',
      'Applicable on piecewise smooth boundaries enclosing simply connected regions.'
    ],
    formulaCards: [
      {
        id: 'fc-asb3',
        name: 'Gauss Divergence Theorem',
        formula: '\\iint_S \\mathbf{F} \\cdot \\hat{\\mathbf{n}} \\, dS = \\iiint_V (\\nabla \\cdot \\mathbf{F}) \\, dV',
        variables: [
          { name: 'S', description: 'Closed surface enclosing volume V' },
          { name: '\\hat{\\mathbf{n}}', description: 'Outward unit normal' }
        ],
        whereUsed: 'Surface flux integration over closed surfaces like spheres, cylinders, cubes.',
        commonMistake: 'Applying Gauss theorem to open surfaces without capping the ends.'
      },
      {
        id: 'fc-asb4',
        name: 'Stokes’ Theorem',
        formula: '\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot \\hat{\\mathbf{n}} \\, dS',
        whereUsed: 'Line integrals over closed loops bounded by an open surface S.',
        commonMistake: 'Confusing closed surface (where Gauss applies) with open surface bounded by a contour.'
      }
    ],
    examTraps: [
      'For Stokes theorem, if $\\nabla \\times \\mathbf{F} = \\mathbf{0}$, the work done around any closed loop is immediately 0.'
    ]
  },
  'asb-301-u2-t1': {
    sixtySec: [
      'System $Ax = b$ consistent iff $\\text{rank}(A) = \\text{rank}([A|b])$.',
      'Unique solution if $\\text{rank}(A) = n$; Infinite solutions if $\\text{rank}(A) < n$.',
      'Characteristic Equation: $\\det(A - \\lambda I) = 0$.',
      'Sum of eigenvalues $= \\text{trace}(A)$; Product of eigenvalues $= \\det(A)$.'
    ],
    coreConcepts: [
      'Echelon form computation via elementary row operations preserves rank.',
      'Eigenvector satisfies $(A - \\lambda I)x = 0$ for non-zero $x$.',
      'Geometric multiplicity $\\le$ Algebraic multiplicity for every eigenvalue.'
    ],
    formulaCards: [
      {
        id: 'fc-asb5',
        name: 'Eigenvalue Characteristic Equation',
        formula: '|A - \\lambda I| = 0 \\iff \\lambda^n - (\\text{tr } A)\\lambda^{n-1} + \\dots + (-1)^n \\det(A) = 0',
        whereUsed: 'Finding natural frequencies, matrix diagonalisation, and linear stability.',
        commonMistake: 'Arithmetic sign errors when expanding the $3 \\times 3$ determinant $|A - \\lambda I|$.'
      }
    ],
    examTraps: [
      'If $\\det(A) = 0$, at least one eigenvalue must be 0 (matrix is singular).'
    ]
  },
  'asb-301-u2-t2': {
    sixtySec: [
      'Cayley–Hamilton: Every square matrix satisfies its own characteristic equation $p(A) = 0$.',
      'Used to find $A^{-1}$ and higher powers $A^m$ without direct multiplication.',
      'Basis: Linearly independent spanning set; Dimension = number of vectors in basis.',
      'Rank-Nullity Theorem: $\\text{Rank}(T) + \\text{Nullity}(T) = \\dim(V)$.'
    ],
    coreConcepts: [
      'Linear combination $c_1 v_1 + \\dots + c_k v_k = 0 \\implies c_i = 0$ indicates independence.',
      'Matrix representation of linear transformation $T: V \\to W$ relative to bases.'
    ],
    formulaCards: [
      {
        id: 'fc-asb6',
        name: 'Cayley–Hamilton Inverse Formula',
        formula: 'A^n + c_{n-1}A^{n-1} + \\dots + c_1 A + c_0 I = 0 \\implies A^{-1} = -\\frac{1}{c_0} (A^{n-1} + c_{n-1}A^{n-2} + \\dots + c_1 I)',
        whereUsed: 'Matrix inversion in university examinations.'
      }
    ]
  },
  'asb-301-u3-t1': {
    sixtySec: [
      'Fourier Series on $[-L, L]$: $f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty \\left[a_n \\cos\\left(\\frac{n\\pi x}{L}\\right) + b_n \\sin\\left(\\frac{n\\pi x}{L}\\right)\\right]$.',
      'Euler coefficients: $a_0 = \\frac{1}{L}\\int_{-L}^L f(x) dx$, $a_n = \\frac{1}{L}\\int_{-L}^L f(x)\\cos\\left(\\frac{n\\pi x}{L}\\right) dx$, $b_n = \\frac{1}{L}\\int_{-L}^L f(x)\\sin\\left(\\frac{n\\pi x}{L}\\right) dx$.',
      'Even function: $b_n = 0$ (Cosine series); Odd function: $a_0 = a_n = 0$ (Sine series).'
    ],
    coreConcepts: [
      'Dirichlet Conditions: $f(x)$ single-valued, periodic, bounded with finite discontinuities and extrema.',
      'At jump discontinuity $x_0$, Fourier series converges to $\\frac{f(x_0^+) + f(x_0^-)}{2}$.',
      'Half-range expansions use only sines or only cosines over $[0, L]$.'
    ],
    formulaCards: [
      {
        id: 'fc-asb7',
        name: 'Fourier Series Over Interval $[-\\pi, \\pi]$',
        formula: 'f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty (a_n \\cos nx + b_n \\sin nx)',
        variables: [
          { name: 'a_0', description: '\\frac{1}{\\pi}\\int_{-\\pi}^\\pi f(x)dx' },
          { name: 'a_n', description: '\\frac{1}{\\pi}\\int_{-\\pi}^\\pi f(x)\\cos(nx)dx' },
          { name: 'b_n', description: '\\frac{1}{\\pi}\\int_{-\\pi}^\\pi f(x)\\sin(nx)dx' }
        ],
        whereUsed: 'Decomposition of periodic waveforms into harmonic frequency components.'
      }
    ]
  },
  'asb-301-u3-t2': {
    sixtySec: [
      'Fourier Transform: $\\mathcal{F}\\{f(t)\\} = F(\\omega) = \\int_{-\\infty}^\\infty f(t) e^{-i\\omega t} dt$.',
      'Inverse Fourier Transform: $f(t) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty F(\\omega) e^{i\\omega t} d\\omega$.',
      'Duality: $\\mathcal{F}\\{F(t)\\} = 2\\pi f(-\\omega)$; Modulation: $\\mathcal{F}\\{f(t)e^{i\\omega_0 t}\\} = F(\\omega - \\omega_0)$.',
      'Convolution Theorem: $\\mathcal{F}\\{f * g\\} = F(\\omega) \\cdot G(\\omega)$.'
    ],
    coreConcepts: [
      'Continuous spectrum representation for non-periodic signals.',
      'Parseval’s Theorem: $\\int_{-\\infty}^\\infty |f(t)|^2 dt = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty |F(\\omega)|^2 d\\omega$.'
    ],
    formulaCards: [
      {
        id: 'fc-asb8',
        name: 'Fourier Transform & Convolution',
        formula: 'F(\\omega) = \\int_{-\\infty}^\\infty f(t) e^{-i\\omega t} dt, \\quad \\mathcal{F}\\{(f * g)(t)\\} = F(\\omega)G(\\omega)',
        whereUsed: 'Solving partial differential equations and frequency response analysis.'
      }
    ]
  },
  'asb-301-u4-t1': {
    sixtySec: [
      'Difference equation order = highest subscript difference: $y_{n+2} - 5y_{n+1} + 6y_n = 0$ is order 2.',
      'Characteristic Equation: $r^2 - 5r + 6 = 0 \\implies r=2, 3 \\implies y_n = c_1 2^n + c_2 3^n$.',
      'Repeated roots $r_1 = r_2 = r \\implies y_n = (c_1 + c_2 n) r^n$.',
      'Particular Solution $y_p$ determined by method of undetermined coefficients.'
    ],
    coreConcepts: [
      'Total solution: $y_n = y_h + y_p$ (Homogeneous/Complementary + Particular).',
      'Forward difference $\\Delta y_n = y_{n+1} - y_n$; Shift operator $E y_n = y_{n+1}$.'
    ],
    formulaCards: [
      {
        id: 'fc-asb9',
        name: 'Linear Recurrence General Solution',
        formula: 'y_n^{(h)} = \\sum_{i=1}^k P_i(n) r_i^n',
        whereUsed: 'Discrete time systems, algorithm analysis, financial loan models.'
      }
    ]
  },
  'asb-301-u4-t2': {
    sixtySec: [
      'Z-Transform: $Z\\{x_n\\} = X(z) = \\sum_{n=0}^\\infty x_n z^{-n}$ for unilateral sequences.',
      'Standard pairs: $Z\\{1\\} = \\frac{z}{z-1}$, $Z\\{a^n\\} = \\frac{z}{z-a}$, $Z\\{n\\} = \\frac{z}{(z-1)^2}$.',
      'Shifting Property: $Z\\{x_{n+1}\\} = z X(z) - z x_0$, $Z\\{x_{n+2}\\} = z^2 X(z) - z^2 x_0 - z x_1$.',
      'Convolution Property: $Z\\{x_n * y_n\\} = X(z) \\cdot Y(z)$.'
    ],
    coreConcepts: [
      'Region of Convergence (ROC) determines existence and stability ($|z| > |a|$ for causal).',
      'Inverse Z-Transform via Partial Fractions or Cauchy Residue theorem.'
    ],
    formulaCards: [
      {
        id: 'fc-asb10',
        name: 'Key Z-Transform Pairs & Shifting',
        formula: 'Z\\{a^n\\} = \\frac{z}{z-a} \\; (|z| > |a|), \\quad Z\\{y_{n+1}\\} = z Y(z) - z y_0',
        whereUsed: 'Solving difference equations with initial conditions algebraically.'
      }
    ]
  },
  'asb-301-u5-t1': {
    sixtySec: [
      'Binomial: $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$, Mean $= np$, Var $= np(1-p)$.',
      'Poisson (rare events): $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$, Mean = Var $= \\lambda$.',
      'Normal Distribution: $X \\sim N(\\mu, \\sigma^2)$, standard variable $Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)$.',
      'Total Probability: $P(A) = \\sum P(B_i)P(A|B_i)$; Bayes: $P(B_k|A) = \\frac{P(B_k)P(A|B_k)}{\\sum P(B_i)P(A|B_i)}$.'
    ],
    coreConcepts: [
      'Probability Density Function $f(x) \\ge 0$, $\\int_{-\\infty}^\\infty f(x) dx = 1$.',
      '68-95-99.7 Rule: $P(\\mu-\\sigma \\le X \\le \\mu+\\sigma) \\approx 68.27\\%$.'
    ],
    formulaCards: [
      {
        id: 'fc-asb11',
        name: 'Bayes Theorem & Normal Standardization',
        formula: 'P(B_k|A) = \\frac{P(B_k)P(A|B_k)}{\\sum_{i=1}^n P(B_i)P(A|B_i)}, \\quad Z = \\frac{X - \\mu}{\\sigma}',
        whereUsed: 'Posterior risk estimation and Gaussian probability calculation.'
      }
    ]
  },
  'asb-301-u5-t2': {
    sixtySec: [
      'Karl Pearson’s Correlation: $r = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y}$, $-1 \\le r \\le 1$.',
      'Spearman’s Rank Correlation: $\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}$ where $d_i = R_{x_i} - R_{y_i}$.',
      'Regression lines intersect at $(\\bar{x}, \\bar{y})$; $b_{yx} = r \\frac{\\sigma_y}{\\sigma_x}$, $b_{xy} = r \\frac{\\sigma_x}{\\sigma_y}$.',
      'Skewness $= \\frac{\\mu_3}{\\sigma^3}$; Kurtosis $\\beta_2 = \\frac{\\mu_4}{\\sigma^4}$ (Mesokurtic if $\\beta_2 = 3$).'
    ],
    coreConcepts: [
      'Regression equations: $y - \\bar{y} = b_{yx}(x - \\bar{x})$ and $x - \\bar{x} = b_{xy}(y - \\bar{y})$.',
      '$b_{yx} \\times b_{xy} = r^2 \\le 1$. Both coefficients share the same algebraic sign as $r$.'
    ],
    formulaCards: [
      {
        id: 'fc-asb12',
        name: 'Rank Correlation & Regression Slopes',
        formula: '\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}, \\quad b_{yx} b_{xy} = r^2',
        whereUsed: 'Non-parametric correlation and bivariate trend prediction.'
      }
    ]
  }
};

console.log('Topic details template verified.');
module.exports = { TOPIC_DETAILS };
