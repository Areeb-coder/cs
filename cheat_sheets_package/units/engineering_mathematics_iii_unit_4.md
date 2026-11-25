# ENGINEERING MATHEMATICS III — ASB-301

## 4 — Difference Equations and Z-Transforms

**Course code:** ASB-301

**Source status:** Cross-branch JMI FET 2025 detailed outline; CSE-DS-specific unit mapping requires confirmation.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

## Unit 4 — Difference Equations and Z-Transforms

### 4.1 Syllabus coverage

- Difference equations, formation and order.
- Linear difference equations and solutions.
- Complementary function (CF), particular integral (PI), general solution.
- Constant- and variable-coefficient difference equations.
- Z-transform and properties.
- Elementary Z-transform pairs.
- Inverse Z-transform.
- Convolution theorem.
- Applications to constant-coefficient and simultaneous difference equations.

### 4.2 Difference-equation essentials

A difference equation relates sequence terms such as \(y_n,y_{n-1},y_{n-2}\). The **order** is the largest index separation (highest shift order) present after simplification.

A linear constant-coefficient recurrence has the form:

\[
y_n+a_1y_{n-1}+a_2y_{n-2}+\cdots+a_ky_{n-k}=g(n)
\]

Homogeneous case: \(g(n)=0\). The characteristic equation is:

\[
r^k+a_1r^{k-1}+\cdots+a_k=0
\]

- Distinct roots \(r_1,\ldots,r_k\): \(y_n^{(h)}=C_1r_1^n+\cdots+C_kr_k^n\).
- Repeated root \(r\) of multiplicity \(m\): terms \((C_0+C_1n+\cdots+C_{m-1}n^{m-1})r^n\).
- Complex roots \(re^{\pm i\theta}\): real form \(r^n[A\cos(n\theta)+B\sin(n\theta)]\).
- General solution: \(y_n=y_n^{(h)}+y_n^{(p)}\), where \(y_n^{(p)}\) is a particular solution.

For simple forcing patterns, try a PI of matching type; if the trial duplicates a homogeneous term, multiply by \(n\) (or the required power of \(n\)). Verify by substitution.

### 4.3 Common sequence identities

- Arithmetic sequence: \(a_n=a_0+nd\).
- Geometric sequence: \(a_n=a_0r^n\).
- Fibonacci-type recurrence: \(F_n=F_{n-1}+F_{n-2}\) with given initial values.
- First difference: \(\Delta y_n=y_{n+1}-y_n\).
- Second difference: \(\Delta^2 y_n=y_{n+2}-2y_{n+1}+y_n\).

### 4.4 Z-transform convention

For a one-sided/causal sequence:

\[
X(z)=\mathcal Z\{x[n]\}=\sum_{n=0}^{\infty}x[n]z^{-n}
\]

The **region of convergence (ROC)** is the set of complex \(z\) for which the series converges. The sequence and transform are not fully specified by the algebraic expression without an ROC in general.

### 4.5 Standard one-sided Z-transform pairs

| Sequence \(x[n]\), \(n\ge0\) | Z-transform |
|---|---|
| \(\delta[n]\) | \(1\) |
| \(u[n]\) | \(z/(z-1)\), ROC \(|z|>1\) |
| \(a^n u[n]\) | \(z/(z-a)\), ROC \(|z|>|a|\) |
| \(n u[n]\) | \(z/(z-1)^2\) |
| \(n a^n u[n]\) | \(az/(z-a)^2\) |
| \(a^n\cos(\omega n)u[n]\) | \(\frac{z(z-a\cos\omega)}{z^2-2az\cos\omega+a^2}\) |
| \(a^n\sin(\omega n)u[n]\) | \(\frac{az\sin\omega}{z^2-2az\cos\omega+a^2}\) |

### 4.6 Z-transform properties

- Linearity: \(\mathcal Z\{ax[n]+by[n]\}=aX(z)+bY(z)\).
- Delay/right shift for causal one-sided sequences:
  \[
  \mathcal Z\{x[n-1]u[n-1]\}=z^{-1}X(z)
  \]
- Advance/left shift:
  \[
  \mathcal Z\{x[n+1]\}=zX(z)-zx[0]
  \]
  \[
  \mathcal Z\{x[n+2]\}=z^2X(z)-z^2x[0]-zx[1]
  \]
- Multiplication by \(n\):
  \[
  \mathcal Z\{n x[n]\}=-z\frac{dX}{dz}
  \]
- Convolution: if \(y[n]=(x*h)[n]=\sum_{k=0}^{n}x[k]h[n-k]\), then \(Y(z)=X(z)H(z)\).
- Initial value for a causal sequence: \(x[0]=\lim_{z\to\infty}X(z)\), when applicable.

### 4.7 Inverse Z-transform methods

- Long division/series expansion in powers of \(z^{-1}\) gives sequence terms directly.
- Partial fractions: decompose a rational function into standard transform forms.
- Residue method: use only when taught/needed and the contour/ROC conditions are clear.
- Match each partial fraction to the correct pair and ROC. Repeated poles produce factors such as \(n a^n\).

### 4.8 Solving recurrence equations with Z-transform

1. Take the one-sided Z-transform of every sequence term.
2. Apply advance/delay rules and include all initial conditions.
3. Solve algebraically for \(Y(z)\).
4. Use partial fractions or another inverse method.
5. Check the first terms against the original recurrence and initial values.

### 4.9 Common exam traps

- Omitting initial terms in \(\mathcal Z\{y_{n+1}\}\) or higher advances.
- Confusing unilateral and bilateral Z-transform formulas.
- Forgetting ROC.
- Treating a delayed sequence as a pure multiplication by \(z^{-1}\) without checking indexing/causality.
- Mixing \(z\) and \(z^{-1}\) forms in partial fractions.

---
