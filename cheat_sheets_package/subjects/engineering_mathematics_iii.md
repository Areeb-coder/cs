# ENGINEERING MATHEMATICS III — ASB-301

**Course code:** ASB-301

**Source status:** Cross-branch JMI FET 2025 detailed outline; CSE-DS-specific unit mapping requires confirmation.

Part of the JMI StudyHub Semester III Master Cheat Sheets. Preserve the source/version caveats and the official-scope versus enrichment distinction in the master file.

# 1. ENGINEERING MATHEMATICS III — ASB-301

## Unit 1 — Applications of Multiple Integrals and Vector Calculus

### 1.1 Syllabus coverage

- Double and triple integrals.
- Two-dimensional Cartesian and polar coordinates.
- Three-dimensional Cartesian, cylindrical and spherical coordinates.
- Applications to plane area, mass, centre of gravity, moment of inertia, product of inertia, centre of pressure, curved surface area and volume.
- Green's theorem in the x-y plane.
- Gauss divergence theorem.
- Stokes' curl theorem (Cartesian form in the cited outline; proofs are not required there).

### 1.2 Core definitions

- **Scalar field:** A scalar-valued function of position, e.g. \(\phi(x,y,z)\).
- **Vector field:** A vector-valued function, e.g. \(\mathbf F=P\mathbf i+Q\mathbf j+R\mathbf k\).
- **Gradient:** A vector pointing in the direction of greatest increase of a scalar field.
- **Divergence:** A scalar measuring local outward flux density of a vector field.
- **Curl:** A vector measuring local rotation/circulation of a vector field.
- **Line integral:** Accumulated tangential component of a field along a curve.
- **Surface integral:** Accumulated normal component/flux through a surface.
- **Volume integral:** Accumulation throughout a three-dimensional region.

### 1.3 Vector-calculus formula bank

For \(\phi(x,y,z)\):

\[
\nabla \phi=\frac{\partial\phi}{\partial x}\mathbf i+\frac{\partial\phi}{\partial y}\mathbf j+\frac{\partial\phi}{\partial z}\mathbf k
\]

For \(\mathbf F=P\mathbf i+Q\mathbf j+R\mathbf k\):

\[
\nabla\cdot\mathbf F=\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}
\]

\[
\nabla\times\mathbf F=
\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right)\mathbf i+
\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right)\mathbf j+
\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathbf k
\]

\[
\nabla^2\phi=\nabla\cdot(\nabla\phi)=\phi_{xx}+\phi_{yy}+\phi_{zz}
\]

Useful identities (for sufficiently smooth fields):

\[
\nabla\times(\nabla\phi)=\mathbf 0,\qquad \nabla\cdot(\nabla\times\mathbf F)=0
\]
\[
\nabla\cdot(\phi\mathbf F)=\nabla\phi\cdot\mathbf F+\phi\nabla\cdot\mathbf F
\]
\[
\nabla\times(\phi\mathbf F)=\nabla\phi\times\mathbf F+\phi(\nabla\times\mathbf F)
\]

### 1.4 Coordinate systems and differential elements

| Coordinates | Position | Differential area/volume |
|---|---|---|
| Cartesian 2D | \((x,y)\) | \(dA=dx\,dy\) |
| Polar 2D | \((r,\theta)\) | \(dA=r\,dr\,d\theta\) |
| Cartesian 3D | \((x,y,z)\) | \(dV=dx\,dy\,dz\) |
| Cylindrical | \((r,\theta,z)\) | \(dV=r\,dr\,d\theta\,dz\) |
| Spherical | \((\rho,\theta,\phi)\), with \(\phi\) from +z | \(dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta\) |

Coordinate conversions:

\[
x=r\cos\theta,\quad y=r\sin\theta,\quad r=\sqrt{x^2+y^2}
\]
\[
x=r\cos\theta,\;y=r\sin\theta,\;z=z\quad\text{(cylindrical)}
\]
\[
x=\rho\sin\phi\cos\theta,\quad y=\rho\sin\phi\sin\theta,\quad z=\rho\cos\phi
\]

**Memory rule:** Polar and cylindrical integrals have a Jacobian factor \(r\); spherical volume has \(\rho^2\sin\phi\). Forgetting the Jacobian is a frequent error.

### 1.5 Multiple-integral applications

- Plane area of region \(R\):
  \[
  A=\iint_R 1\,dA
  \]
- Volume under \(z=f(x,y)\ge0\):
  \[
  V=\iint_R f(x,y)\,dA
  \]
- Mass with surface density \(\sigma(x,y)\):
  \[
  M=\iint_R\sigma\,dA
  \]
- Mass with volume density \(\rho(x,y,z)\):
  \[
  M=\iiint_V\rho\,dV
  \]
- Centre of mass (volume distribution):
  \[
  \bar x=\frac{1}{M}\iiint_Vx\rho\,dV,\quad
  \bar y=\frac{1}{M}\iiint_Vy\rho\,dV,\quad
  \bar z=\frac{1}{M}\iiint_Vz\rho\,dV
  \]
- For a uniform lamina, replace \(\rho\,dV\) by \(\sigma\,dA\). For uniform density, density cancels in centroid ratios.
- Moments of inertia about coordinate axes:
  \[
  I_x=\iiint_V(y^2+z^2)\rho\,dV,\quad
  I_y=\iiint_V(x^2+z^2)\rho\,dV,\quad
  I_z=\iiint_V(x^2+y^2)\rho\,dV
  \]
- Products of inertia (sign convention varies by text):
  \[
  I_{xy}=\iiint_Vxy\rho\,dV,\quad I_{yz}=\iiint_Vyz\rho\,dV,\quad I_{zx}=\iiint_Vzx\rho\,dV
  \]
- Curved surface area of a graph \(z=f(x,y)\):
  \[
  S=\iint_R\sqrt{1+f_x^2+f_y^2}\,dx\,dy
  \]
- For hydrostatic pressure on a vertical plane surface in a liquid of specific weight \(\gamma\): resultant force \(F=\gamma A\bar h\), where \(\bar h\) is centroid depth. Centre-of-pressure depth:
  \[
  h_{cp}=\bar h+\frac{I_G}{A\bar h}
  \]
  Here \(I_G\) is the second moment of the area about the horizontal centroidal axis parallel to the free surface. Use the exact geometric axis and pressure model specified in the question.

### 1.6 Integral theorems

**Green's theorem** (positively oriented/simple closed curve \(C\), region \(R\)):

\[
\oint_C(P\,dx+Q\,dy)=\iint_R\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dA
\]

**Gauss/divergence theorem** (closed outward-oriented surface \(S=\partial V\)):

\[
\iint_S\mathbf F\cdot\mathbf n\,dS=\iiint_V(\nabla\cdot\mathbf F)\,dV
\]

**Stokes' theorem** (boundary \(C=\partial S\), compatible right-hand orientation):

\[
\oint_C\mathbf F\cdot d\mathbf r=\iint_S(\nabla\times\mathbf F)\cdot\mathbf n\,dS
\]

**How to choose:**
- Closed planar boundary and \(Pdx+Qdy\) then Green.
- Flux through a closed surface then Gauss.
- Circulation around a surface boundary then Stokes.
- Direct parameterisation may be easier if the theorem's boundary/surface is complicated.

### 1.7 Common exam traps

- Omitting Jacobians in polar/cylindrical/spherical changes of variables.
- Using the wrong spherical-angle convention; state the convention before integrating.
- Reversing the orientation of a curve/surface without changing the sign.
- Applying Gauss to an open surface without closing it and accounting for the added cap.
- Confusing mass, area, centroid and centre of pressure.
- Using \(I_x=\int x^2dm\) when the axis is actually the x-axis; about x-axis the perpendicular distance is \(\sqrt{y^2+z^2}\).

### 1.8 Quick recognition workflow

1. Sketch the region/surface and identify the coordinate system.
2. Write correct bounds and the Jacobian.
3. Identify whether the quantity is area, volume, mass, centroid, inertia, circulation or flux.
4. For theorem questions, check the domain assumptions and orientation.
5. Keep units visible: area, volume, mass, mass·length², force, etc.

---

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
