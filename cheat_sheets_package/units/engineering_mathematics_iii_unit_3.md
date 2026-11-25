# ENGINEERING MATHEMATICS III — ASB-301

## 3 — Fourier Series and Fourier Transforms

**Course code:** ASB-301

**Source status:** Cross-branch JMI FET 2025 detailed outline; CSE-DS-specific unit mapping requires confirmation.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

## Unit 3 — Fourier Series and Fourier Transforms

### 3.1 Syllabus coverage

- Fourier series over full and half ranges for arbitrary period.
- Fourier integral representation.
- Fourier sine integral and Fourier cosine integral.
- Infinite complex Fourier transform.
- Finite and infinite Fourier sine/cosine transforms and their inverses.
- Properties and associated theorems.
- Applications to integral equations and boundary-value problems.

### 3.2 Fourier series: period \(2L\)

For a piecewise-smooth function on \((-L,L)\), periodically extended with period \(2L\):

\[
f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}\left[a_n\cos\left(\frac{n\pi x}{L}\right)+b_n\sin\left(\frac{n\pi x}{L}\right)\right]
\]

\[
a_0=\frac1L\int_{-L}^{L}f(x)dx,\quad
 a_n=\frac1L\int_{-L}^{L}f(x)\cos\left(\frac{n\pi x}{L}\right)dx
\]
\[
b_n=\frac1L\int_{-L}^{L}f(x)\sin\left(\frac{n\pi x}{L}\right)dx
\]

For period \(T\), use \(\omega_0=2\pi/T\) and replace \(n\pi/L\) by \(n\omega_0\).

### 3.3 Symmetry shortcuts

- Even function: \(f(-x)=f(x)\). Then \(b_n=0\), and
  \[
  a_0=\frac{2}{L}\int_0^L f(x)dx,\quad a_n=\frac{2}{L}\int_0^L f(x)\cos(n\pi x/L)dx
  \]
- Odd function: \(f(-x)=-f(x)\). Then \(a_0=a_n=0\), and
  \[
  b_n=\frac{2}{L}\int_0^L f(x)\sin(n\pi x/L)dx
  \]
- Check parity before integrating. It often halves the work.

### 3.4 Half-range expansions on \((0,L)\)

**Half-range cosine series (even extension):**

\[
f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}a_n\cos\left(\frac{n\pi x}{L}\right)
\]
\[
a_0=\frac2L\int_0^L f(x)dx,\quad a_n=\frac2L\int_0^L f(x)\cos\left(\frac{n\pi x}{L}\right)dx
\]

**Half-range sine series (odd extension):**

\[
f(x)\sim\sum_{n=1}^{\infty}b_n\sin\left(\frac{n\pi x}{L}\right),\quad
b_n=\frac2L\int_0^L f(x)\sin\left(\frac{n\pi x}{L}\right)dx
\]

### 3.5 Complex Fourier series

\[
f(x)\sim\sum_{n=-\infty}^{\infty}c_ne^{in\pi x/L},\quad
c_n=\frac{1}{2L}\int_{-L}^{L}f(x)e^{-in\pi x/L}dx
\]

Relationships: \(c_0=a_0/2\), and for \(n>0\), \(c_n=(a_n-i b_n)/2\), \(c_{-n}=(a_n+i b_n)/2\).

### 3.6 Fourier transform convention used in this sheet

\[
F(\omega)=\int_{-\infty}^{\infty}f(x)e^{-i\omega x}dx,
\quad
f(x)=\frac{1}{2\pi}\int_{-\infty}^{\infty}F(\omega)e^{i\omega x}d\omega
\]

**Convention warning:** Some books use frequency \(\nu\) with \(e^{-i2\pi\nu x}\), or split factors \(1/\sqrt{2\pi}\) between forward and inverse transforms. Do not mix tables from different conventions.

Common pairs in the above convention:

| \(f(x)\) | \(F(\omega)\) |
|---|---|
| \(\delta(x)\) | \(1\) |
| \(1\) | \(2\pi\delta(\omega)\) (distribution sense) |
| \(e^{-a\lvert x\rvert}, a>0\) | \(2a/(a^2+\omega^2)\) |
| \(e^{-ax}u(x), a>0\) | \(1/(a+i\omega)\) |
| \(\cos(ax)\) | \(\pi[\delta(\omega-a)+\delta(\omega+a)]\) |
| \(\sin(ax)\) | \((\pi/i)[\delta(\omega-a)-\delta(\omega+a)]\) |

### 3.7 Fourier-transform properties

With the convention above:

- Linearity: \(af+bg\leftrightarrow aF+bG\).
- Translation: \(f(x-a)\leftrightarrow e^{-i\omega a}F(\omega)\).
- Frequency shift: \(e^{iax}f(x)\leftrightarrow F(\omega-a)\).
- Scaling: \(f(ax)\leftrightarrow\frac1{|a|}F(\omega/a)\), \(a\ne0\).
- Reflection: \(f(-x)\leftrightarrow F(-\omega)\).
- Differentiation: \(f'(x)\leftrightarrow i\omega F(\omega)\), under suitable decay/smoothness.
- Multiplication by \(x\): \(x f(x)\leftrightarrow i\,dF/d\omega\).
- Convolution: \((f*g)(x)\leftrightarrow F(\omega)G(\omega)\).
- Product: \(f(x)g(x)\leftrightarrow(1/2\pi)(F*G)(\omega)\).
- Parseval (one common form):
  \[
  \int_{-\infty}^{\infty}|f(x)|^2dx=\frac1{2\pi}\int_{-\infty}^{\infty}|F(\omega)|^2d\omega
  \]

### 3.8 Fourier sine and cosine transforms

A common symmetric normalisation is:

\[
F_s(\omega)=\sqrt{\frac2\pi}\int_0^\infty f(x)\sin(\omega x)dx,
\quad f(x)=\sqrt{\frac2\pi}\int_0^\infty F_s(\omega)\sin(\omega x)d\omega
\]

\[
F_c(\omega)=\sqrt{\frac2\pi}\int_0^\infty f(x)\cos(\omega x)dx,
\quad f(x)=\sqrt{\frac2\pi}\int_0^\infty F_c(\omega)\cos(\omega x)d\omega
\]

If a course uses the unnormalised transform (without \(\sqrt{2/\pi}\)), its inverse includes \(2/\pi\). Always check the definition printed in the question/notes.

### 3.9 Problem workflow

1. Identify periodic vs non-periodic function.
2. For a series, determine period, interval and parity.
3. For half-range, decide even (cosine) or odd (sine) extension from the required boundary behaviour/question.
4. For a transform, write the convention first; inspect even/odd symmetry and known pairs.
5. Apply properties before evaluating an integral from scratch.
6. For inverse transforms, simplify algebra and match the correct convention's transform pair.

### 3.10 Common exam traps

- Missing \(1/L\), \(2/L\) or \(1/(2\pi)\) factors.
- Using the wrong interval/period.
- Assuming every function is even/odd without checking.
- Confusing the constant coefficient \(a_0\) with the term \(a_0/2\).
- Mixing Fourier-transform conventions.
- Dropping absolute value in the scaling factor \(1/|a|\).
- Forgetting the step/distribution interpretation of some transform pairs.

---
