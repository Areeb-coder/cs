# ENGINEERING MATHEMATICS III — ASB-301

## 2 — Applications of Laplace Transforms

**Course code:** ASB-301

**Source status:** Cross-branch JMI FET 2025 detailed outline; CSE-DS-specific unit mapping requires confirmation.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

## Unit 2 — Applications of Laplace Transforms

### 2.1 Syllabus coverage

- Laplace-transform applications to higher-order linear ODEs with constant and variable coefficients.
- Systems of simultaneous differential equations.
- Integral equations.
- Integro-differential equations.
- Differential equations.

### 2.2 Definition and conditions

For a causal/time function \(f(t)\):

\[
\mathcal L\{f(t)\}=F(s)=\int_0^\infty e^{-st}f(t)\,dt
\]

The transform exists under standard piecewise-continuity and exponential-order conditions. In engineering problems, use the unilateral transform unless the question explicitly specifies a bilateral transform.

### 2.3 Standard transform pairs

| \(f(t)\), for \(t\ge0\) | \(F(s)\) |
|---|---|
| \(1\) | \(1/s\) |
| \(t^n\), integer \(n\ge0\) | \(n!/s^{n+1}\) |
| \(e^{at}\) | \(1/(s-a)\) |
| \(\sin at\) | \(a/(s^2+a^2)\) |
| \(\cos at\) | \(s/(s^2+a^2)\) |
| \(\sinh at\) | \(a/(s^2-a^2)\) |
| \(\cosh at\) | \(s/(s^2-a^2)\) |
| \(e^{at}\sin bt\) | \(b/((s-a)^2+b^2)\) |
| \(e^{at}\cos bt\) | \((s-a)/((s-a)^2+b^2)\) |
| \(u(t-a)\) | \(e^{-as}/s\) |
| \(\delta(t-a)\) | \(e^{-as}\) |

### 2.4 Properties

- Linearity: \(\mathcal L\{af+bg\}=aF+bG\).
- First derivative:
  \[
  \mathcal L\{f'\}=sF(s)-f(0^+)
  \]
- Second derivative:
  \[
  \mathcal L\{f''\}=s^2F-sf(0^+)-f'(0^+)
  \]
- nth derivative:
  \[
  \mathcal L\{f^{(n)}\}=s^nF-\sum_{k=0}^{n-1}s^{n-1-k}f^{(k)}(0^+)
  \]
- Integration in time:
  \[
  \mathcal L\left\{\int_0^t f(\tau)d\tau\right\}=\frac{F(s)}{s}
  \]
- Multiplication by \(t\):
  \[
  \mathcal L\{t f(t)\}=-\frac{dF}{ds}
  \]
- Exponential shift:
  \[
  \mathcal L\{e^{at}f(t)\}=F(s-a)
  \]
- Time shift:
  \[
  \mathcal L\{u(t-a)f(t-a)\}=e^{-as}F(s)
  \]
- Convolution:
  \[
  (f*g)(t)=\int_0^t f(\tau)g(t-\tau)d\tau,
  \quad \mathcal L\{f*g\}=FG
  \]
- Initial value theorem: \(f(0^+)=\lim_{s\to\infty}sF(s)\), when its hypotheses hold.
- Final value theorem: \(\lim_{t\to\infty}f(t)=\lim_{s\to0^+}sF(s)\), only when the poles of \(sF(s)\) satisfy the stability conditions (no poles in the closed right half-plane except an allowed simple pole at zero).

### 2.5 ODE solution workflow

For \(a_ny^{(n)}+\cdots+a_1y'+a_0y=g(t)\):

1. Apply the unilateral Laplace transform to both sides.
2. Replace derivative transforms using initial values.
3. Solve the resulting algebraic equation for \(Y(s)\).
4. Use partial fractions, shifting and standard pairs to find \(y(t)=\mathcal L^{-1}\{Y(s)\}\).
5. Substitute the initial conditions and, where practical, verify in the original ODE.

**Do not drop initial-condition terms.** This is the most common Laplace-solution error.

### 2.6 Systems, integral equations and integro-differential equations

- Transform every equation in a simultaneous system; retain each variable as an unknown transform such as \(X(s),Y(s)\). Solve the algebraic system, then invert.
- If an equation contains \(\int_0^t y(\tau)d\tau\), transform it to \(Y(s)/s\).
- If a convolution integral appears, recognise the product property.
- For a variable coefficient such as \(t y'(t)\), combine derivative and multiplication-by-time properties; use \(\mathcal L\{t f(t)\}=-F'(s)\).
- Do not assume every variable-coefficient ODE becomes a simple polynomial equation in \(s\); follow the exact transform identities.

### 2.7 Common exam traps

- Missing initial values in derivative transforms.
- Confusing \(e^{at}\) shift direction: replace \(s\) by \(s-a\).
- Applying the time-shift theorem to \(f(t-a)\) without the step function.
- Using the final-value theorem for an unstable/oscillatory transform.
- Forgetting the factor \(1/s\) for a time integral.
- Incorrect partial-fraction constants or inverse-transform algebra.

---
