# ENGINEERING MATHEMATICS III — ASB-301

## 5 — Higher Calculus

**Course code:** ASB-301

**Source status:** Cross-branch JMI FET 2025 detailed outline; CSE-DS-specific unit mapping requires confirmation.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

## Unit 5 — Higher Calculus

### 5.1 Syllabus coverage

- Extremals of a functional using Euler–Poisson equations.
- Isoperimetric problems.
- Beta and Gamma functions.
- Fractional derivative.
- Dirichlet's and “Lowville's” multiple integrals (the source wording appears to say “Lowville's”; confirm the intended name with the instructor/notes before publication).
- Representation of definite integrals in Legendre and Jacobi forms of elliptic integrals of the first, second and third kinds.

### 5.2 Calculus of variations

A functional maps a function to a scalar, e.g.

\[
J[y]=\int_a^b F(x,y,y')\,dx
\]

For fixed endpoint values, a necessary condition for an extremal is the Euler–Lagrange equation:

\[
\frac{\partial F}{\partial y}-\frac{d}{dx}\left(\frac{\partial F}{\partial y'}\right)=0
\]

Equivalent sign-reversed forms are identical when both sides are set to zero.

For a functional depending on derivatives through order \(m\):

\[
\sum_{k=0}^{m}(-1)^k\frac{d^k}{dx^k}\left(\frac{\partial F}{\partial y^{(k)}}\right)=0
\]

This is the higher-order Euler–Poisson form; use the notation/convention prescribed in the lecture.

### 5.3 Isoperimetric problems

Optimise \(J[y]=\int_a^bF(x,y,y')dx\) subject to:

\[
K[y]=\int_a^bG(x,y,y')dx=C
\]

Introduce a multiplier \(\lambda\) and apply Euler–Lagrange to the augmented integrand:

\[
\widetilde F=F+\lambda G
\]

Then solve the Euler–Lagrange equation together with the integral constraint and boundary conditions.

### 5.4 Gamma and Beta functions

\[
\Gamma(s)=\int_0^\infty x^{s-1}e^{-x}dx,\quad \Re(s)>0
\]

\[
\Gamma(s+1)=s\Gamma(s),\quad \Gamma(n+1)=n!,\quad \Gamma(1/2)=\sqrt\pi
\]

\[
B(p,q)=\int_0^1x^{p-1}(1-x)^{q-1}dx=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}
\]

Trigonometric form:

\[
B(p,q)=2\int_0^{\pi/2}(\sin\theta)^{2p-1}(\cos\theta)^{2q-1}d\theta
\]

### 5.5 Fractional derivatives — convention warning

Fractional differentiation has multiple definitions. Do not mix Riemann–Liouville and Caputo formulas. One common Riemann–Liouville derivative of order \(\alpha\), with \(m-1<\alpha<m\), is:

\[
D_{a+}^{\alpha}f(x)=\frac{1}{\Gamma(m-\alpha)}\frac{d^m}{dx^m}\int_a^x(x-t)^{m-\alpha-1}f(t)dt
\]

A common Caputo form is:

\[
{}^CD_{a+}^{\alpha}f(x)=\frac{1}{\Gamma(m-\alpha)}\int_a^x(x-t)^{m-\alpha-1}f^{(m)}(t)dt
\]

The exact definition taught in the course notes must be used for examination problems. The two derivatives differ, particularly in how initial conditions are represented.

### 5.6 Dirichlet-type multiple integral

A standard simplex form is:

\[
\int_{\substack{x_i\ge0\\x_1+\cdots+x_n\le1}}
\left(\prod_{i=1}^{n}x_i^{\alpha_i-1}\right)
(1-\sum_{i=1}^{n}x_i)^{\alpha_{n+1}-1}dx_1\cdots dx_n
=\frac{\prod_{i=1}^{n+1}\Gamma(\alpha_i)}{\Gamma(\sum_{i=1}^{n+1}\alpha_i)}
\]

This requires positive real parts of the parameters. Confirm the exact “Lowville's” term/formula in the user's lecture notes; the supplied course-structure text may contain a spelling/OCR error.

### 5.7 Elliptic integrals — Legendre forms

For modulus \(k\), parameter \(n\) and amplitude \(\phi\):

- First kind:
  \[
  F(\phi,k)=\int_0^\phi\frac{d\theta}{\sqrt{1-k^2\sin^2\theta}}
  \]
- Second kind:
  \[
  E(\phi,k)=\int_0^\phi\sqrt{1-k^2\sin^2\theta}\,d\theta
  \]
- Third kind:
  \[
  \Pi(n;\phi,k)=\int_0^\phi\frac{d\theta}{(1-n\sin^2\theta)\sqrt{1-k^2\sin^2\theta}}
  \]

Complete forms use \(\phi=\pi/2\): \(K(k)=F(\pi/2,k)\), \(E(k)=E(\pi/2,k)\), \(\Pi(n,k)=\Pi(n;\pi/2,k)\).

### 5.8 Quick problem workflow

1. For a variational problem, identify the integrand \(F\), dependent variable and derivative order.
2. Apply the correct Euler–Lagrange/Euler–Poisson equation.
3. For an isoperimetric constraint, introduce a multiplier and use the constraint after solving.
4. For Beta/Gamma integrals, look for exponent patterns and substitute to \([0,1]\) or \([0,\pi/2]\).
5. For elliptic integrals, match the square-root denominator and any \((1-n\sin^2\theta)\) factor to kind I, II or III.

### 5.9 Common exam traps

- Reversing Euler–Lagrange derivative terms inconsistently.
- Ignoring boundary conditions.
- Forgetting the multiplier in an isoperimetric problem.
- Using \(\Gamma(n)=n!\) instead of \(\Gamma(n+1)=n!\).
- Confusing Beta and Gamma functions.
- Using a fractional-derivative definition different from the question's convention.
- Confusing the three kinds of elliptic integrals.

### Engineering Mathematics III — syllabus-version warning

An older JMI FET ASB-301 outline has a different arrangement: Unit I vector calculus; Unit II linear algebra (rank consistency, eigenvalues/eigenvectors, Cayley–Hamilton, vector spaces and linear transformations); Unit III Fourier; Unit IV difference equations/Z-transforms; Unit V probability/statistics (probability theorems, binomial/Poisson/normal distributions, moments, skewness, kurtosis and rank correlation). This older outline should not be merged into the five-unit 2025 working version above without confirmation. If the department's CSE-DS handout confirms the older version, replace Units I, II and V with that version and retain the Unit III/IV transform material.

---
