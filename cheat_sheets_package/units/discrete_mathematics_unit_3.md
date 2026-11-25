# DISCRETE MATHEMATICS — DSC-301

## 3 — Recurrence Relations

**Course code:** DSC-301

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

## Unit 3 — Recurrence Relations

### 3.1 Syllabus coverage

Introduction; generalised linear homogeneous/non-homogeneous recurrences; common recurrences; iteration method; characteristic-equation method; generating functions; solving recurrences using generating functions.

### 3.2 Definitions and standard form

A recurrence relation defines a sequence term from earlier terms. A linear order-\(k\) recurrence with constant coefficients can be written:

\[
a_n+c_1a_{n-1}+c_2a_{n-2}+\cdots+c_ka_{n-k}=g(n)
\]

- Homogeneous: \(g(n)=0\).
- Non-homogeneous: \(g(n)\ne0\).
- Order: largest lag/index difference.
- Initial conditions: starting values needed to determine the sequence uniquely.

### 3.3 Iteration method

Repeatedly substitute earlier recurrence terms until a pattern/summation appears. Then simplify the sum and use initial values.

Useful sums:

\[
\sum_{k=0}^{n}r^k=\frac{1-r^{n+1}}{1-r}\;(r\ne1),\quad
\sum_{k=1}^{n}k=\frac{n(n+1)}2
\]

\[
\sum_{k=1}^{n}k^2=\frac{n(n+1)(2n+1)}6,\quad
\sum_{k=1}^{n}k^3=\left(\frac{n(n+1)}2\right)^2
\]

### 3.4 Characteristic-equation method

For homogeneous constant-coefficient recurrence:

\[
a_n+c_1a_{n-1}+\cdots+c_ka_{n-k}=0
\]

Assume \(a_n=r^n\) and obtain:

\[
r^k+c_1r^{k-1}+\cdots+c_k=0
\]

Solution forms:

| Root pattern | General homogeneous solution contribution |
|---|---|
| Distinct real roots \(r_1,\ldots,r_k\) | \(C_1r_1^n+\cdots+C_kr_k^n\) |
| Root \(r\) repeated twice | \((C_1+C_2n)r^n\) |
| Root \(r\) repeated thrice | \((C_1+C_2n+C_3n^2)r^n\) |
| Complex conjugates \(re^{\pm i\theta}\) | \(r^n[C\cos(n\theta)+D\sin(n\theta)]\) |

For non-homogeneous equations:

\[
a_n=a_n^{(h)}+a_n^{(p)}
\]

Choose a trial PI matching the forcing term; if the trial overlaps with the complementary function, multiply by \(n\) enough times to make it independent. Confirm by substitution.

### 3.5 Generating functions

For sequence \(a_0,a_1,a_2,\ldots\), ordinary generating function:

\[
A(x)=\sum_{n=0}^{\infty}a_nx^n
\]

Useful identities:

\[
\sum_{n=0}^{\infty}x^n=\frac1{1-x},\quad |x|<1
\]
\[
\sum_{n=0}^{\infty}nx^n=\frac{x}{(1-x)^2},\quad
\sum_{n=0}^{\infty}n^2x^n=\frac{x(1+x)}{(1-x)^3}
\]

\[
\sum_{n=0}^{\infty}a_{n+1}x^n=\frac{A(x)-a_0}{x}
\]
\[
\sum_{n=0}^{\infty}a_{n+2}x^n=\frac{A(x)-a_0-a_1x}{x^2}
\]

**Workflow:** multiply the recurrence by \(x^n\), sum from the correct starting index, express shifted sums using \(A(x)\) and initial values, solve for \(A(x)\), decompose into standard series, extract coefficients.

### 3.6 Common examples

- Geometric: \(a_n=ra_{n-1}\Rightarrow a_n=a_0r^n\).
- Arithmetic: \(a_n=a_{n-1}+d\Rightarrow a_n=a_0+nd\).
- Fibonacci: \(F_n=F_{n-1}+F_{n-2}\), with \(F_0=0,F_1=1\); characteristic roots \((1\pm\sqrt5)/2\).

### 3.7 Common exam traps

- Misidentifying the recurrence order.
- Forgetting initial conditions when solving for constants.
- Using only the complementary function for a non-homogeneous recurrence.
- Failing to multiply the PI trial by \(n\) when it duplicates a complementary term.
- Shifting generating-function sums by one index incorrectly.
- Omitting the first terms when converting a shifted sequence into \(A(x)\).

---
