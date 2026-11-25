# JMI STUDY HUB — SEMESTER III MASTER CHEAT SHEETS

**B.Tech. Computer Science & Engineering (Data Science) | Jamia Millia Islamia**  
**Revision reference: subject-wise • unit-wise • topic-wise**

> **How to use this book:** Each unit is divided into (1) syllabus coverage, (2) definitions and core ideas, (3) formula/rule bank, (4) procedures and algorithms, (5) quick examples or recognition patterns, and (6) common exam traps. For theory-only units, the “formula bank” is replaced by key distinctions, principles and frameworks. These sheets are revision aids; they do not replace full lecture notes, proofs, lab manuals or worked practice.

## IMPORTANT SOURCE AND VERSION NOTES

1. The uploaded CSE (Data Science) course-structure PDF confirms the six Semester III theory course codes/titles and gives detailed unit syllabi for Discrete Mathematics, Data Structures, Digital Logic Design and DBMS. It lists the Mathematics III and UHV course codes/titles but does not include their detailed unit outlines in that document.
2. For **ASB-301 Engineering Mathematics III**, the primary five-unit working outline in this pack follows a JMI Faculty of Engineering & Technology ASB-301 detailed syllabus published in a 2025 Mechanical Engineering syllabus: Unit I multiple integrals/vector calculus; Unit II Laplace transforms; Unit III Fourier series/transforms; Unit IV difference equations/Z-transforms; Unit V higher calculus. This is a cross-branch JMI source, not a detailed CSE-DS-specific syllabus. The user's earlier study context confirms Fourier material in Unit III and Z-transform material in Unit IV, but the precise CSE-DS mapping of Units I, II and V should still be checked against the department's current handout.
3. An older JMI FET ASB-301 syllabus has a different Unit I/II/V arrangement (vector calculus; linear algebra; Fourier; Z-transform; probability/statistics). **Do not combine both versions silently.** The alternative structure is summarised in the Mathematics version note at the end of that subject.
4. For **ASM-301 UHV**, the detailed five-unit content follows a JMI FET ASM-301 “Universal Human Values: Understanding Harmony” syllabus published for another engineering branch. The CSE-DS course structure confirms the same code and title, but the exact CSE-DS-specific detailed handout should be checked before final website publication.
5. The seven supplied NPTEL PDFs by Rajat Mittal (IIT Kanpur) are used for the extended LPP track. They contain seven lecture documents, grouped into five portal units. The two Week 8 PDFs are separate Lectures 6 and 7.
6. The separate LPP paper appears in the supplied exam timetable, while LPP also appears inside Discrete Mathematics Unit 5. This book therefore covers the JMI Discrete Unit 5 scope and a separate NPTEL extended LPP track. Do not label all NPTEL advanced content as confirmed JMI exam scope.

**Notation policy:** Where transform conventions differ between textbooks, the convention is stated next to the formula. Check the convention used by the faculty/notes before substituting numerical values.

---

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

# 2. UNIVERSAL HUMAN VALUES — ASM-301

> Theory revision sheet: this subject is about definitions, relationships, harmony, values, ethics and case analysis. It does not have a mathematical formula bank. Use the five unit headings below and prepare answers with a definition, explanation, example and practical implication.

## Unit 1 — Introduction and Concept of Universal Human Values

### Syllabus coverage

- Introduction, need and characteristics of UHV.
- Value-based education versus skill-based education.
- Benefits of value education.
- Basic human aspirations and requirements for fulfilment.
- Measures to fulfil aspirations in the current scenario.
- Continuous happiness and prosperity.
- Correct understanding of happiness, prosperity and relationships.

### Must remember

- **Value education:** develops right understanding, humane conduct and the ability to live in harmony; it complements technical/occupational skills.
- **Skill education:** develops competence to perform a task. Skill without right understanding can be used without concern for human or ecological consequences.
- **Basic human aspiration:** a lasting state of happiness and prosperity, not merely short-lived sensory pleasure or accumulation.
- **Happiness:** a state of harmony/inner fulfilment; distinguish it from temporary excitement or comfort.
- **Prosperity:** the feeling of having/being able to arrange more than the required physical facilities; distinguish it from unlimited accumulation.
- **Physical facility:** material means required by the body. It is necessary, but by itself does not fulfil needs of the self.
- **Relationship:** human-human interaction where values/feelings and mutual fulfilment matter.

### Revision framework

| Dimension | What to ask | Revision point |
|---|---|---|
| Need | Why is UHV needed? | Technical skill alone does not ensure responsible decisions or harmonious living. |
| Content | What does it study? | Human aspirations, self, relationships, nature and professional conduct. |
| Process | How is it understood? | Self-exploration, reflection, validation in living and practice. |
| Outcome | What should change? | Better understanding, relationships, responsible use of skills and harmony. |

### Self-exploration sequence

1. Present a proposal/value for examination.
2. Check it against natural acceptance (inner, unconditional acceptance rather than momentary preference).
3. Validate through experience and living.
4. Observe whether it leads to harmony and mutual fulfilment.
5. Correct understanding and behaviour where mismatch remains.

### Exam-ready contrasts

- **Happiness vs excitement:** enduring harmony/fulfilment vs temporary stimulation.
- **Prosperity vs hoarding:** feeling of adequate physical facilities vs endless accumulation.
- **Value education vs skill education:** right understanding/conduct vs task competence; both are needed.
- **Need vs want:** actual requirement for fulfilment vs an acquired/desire-driven demand; explain with a concrete example.

### Common answer structure

Define UHV then state the human aspiration then explain the role of understanding, relationship and physical facility then give a daily/professional example then conclude with harmony and responsibility.

## Unit 2 — Understanding Harmony in the Self

### Syllabus coverage

- Human existence as conscious and material entities.
- Difference between conscious and material entities.
- Measures to ensure harmony in the self.
- Needs of self and body: happiness and physical facility.
- Body as an instrument; the self as doer, seer and enjoyer.

### Must remember

- **Self (“I”):** conscious entity; understands, desires, thinks, evaluates and experiences happiness/unhappiness.
- **Body:** material/physical entity; needs physical facility such as food, clothing, shelter, rest and protection.
- **Self and body are related but not identical:** their needs are different, so confusing their requirements produces imbalance.
- **Body as an instrument:** the self uses the body to express/execute decisions in the physical world.
- **Seer:** the self that observes/perceives.
- **Doer:** the self that decides/intends and acts through the body.
- **Enjoyer:** the self that experiences the result/feeling.

### Self versus body

| Aspect | Self (“I”) | Body |
|---|---|---|
| Nature | Conscious | Material |
| Need | Happiness/right understanding/relationship | Physical facility |
| Activity | Desiring, thinking, selecting, understanding | Physiological and sensory activity |
| Fulfilment | Harmony in understanding and feelings | Adequate nutrition, health, protection and care |
| Duration/quantity | Qualitative and continuous aspiration | Quantifiable physical requirements |

### Harmony checklist

- Is the desire based on right understanding or a passing impulse?
- Is the thought aligned with the desire and values?
- Is the selection/decision consistent with the understanding?
- Are body requirements being met in a balanced way?
- Does the person's programme support health, restraint/self-regulation and responsible living?

### Important distinctions

- **Happiness is not identical to bodily comfort.** Comfort may support the body; happiness is a need of the self.
- **Prosperity is not accumulation without limit.** It relates to assurance of adequate physical facility.
- **Self-regulation/restraint:** responsible regulation of the use and care of the body and resources; avoid equating it with suppression of every desire.
- **Health:** a state supported by right understanding, balanced physical needs and an appropriate programme for the body.

### Common exam traps

- Writing “I = body” without explaining the difference between conscious and material entities.
- Treating every desire as a body need.
- Confusing the self's qualitative need with the body's measurable facility.
- Describing the body as the decision-maker rather than the instrument of the self.

## Unit 3 — Understanding Harmony in Family and Society

### Syllabus coverage

- Values/feelings in human-human relationships.
- Measures for harmony in the family.
- Family as the basic unit of human interaction.
- Trust as foundational value.
- Respect as right evaluation; other feelings.
- Justice in human-human relationships.
- Harmony in society and universal human order.
- Conflict: meaning and types.
- Dimensions of human order; justice, democracy, respect and gratitude.
- Values crisis, psychological values, integrated personality, mental health and societal values including justice, democracy, secularism and rule of law.

### Core definitions

- **Trust:** assurance that the other intends my happiness/prosperity and mutual fulfilment; distinguish intention from competence when analysing a relationship.
- **Respect:** right evaluation of another human being; not based solely on wealth, status, age, gender, role or appearance.
- **Justice:** recognition, fulfilment and evaluation of values in human relationships leading to mutual happiness.
- **Gratitude:** recognition and appreciation of contribution received from others.
- **Empathy:** understanding another person's experience/condition and responding with sensitivity.
- **Family:** basic unit of human interaction and learning of relationship values.
- **Universal human order:** harmonious social organisation extending from family to wider society/world family.

### Relationship-value map

| Foundational/important value | Revision meaning |
|---|---|
| Trust | Assurance about the other's intention. |
| Respect | Right evaluation; no unjust differentiation. |
| Affection | Feeling of relatedness with the other. |
| Care | Concern for the other's body/physical well-being. |
| Guidance | Helping another move towards right understanding. |
| Reverence | Acceptance of excellence in understanding/conduct. |
| Glory | Appreciation for excellence/contribution. |
| Gratitude | Acknowledging help/contribution received. |
| Love | Comprehensive feeling of relatedness and mutual fulfilment. |

### Trust vs competence

- **Intention:** what a person wants/means to do.
- **Competence:** the ability/skill to do it.
- A person may have good intention but insufficient competence; the response should be support/learning, not automatic mistrust.
- Do not confuse an honest mistake with harmful intention.

### Harmony in society

A useful holistic-goal summary is:
- **Resolution/right understanding:** clarity in individuals.
- **Prosperity:** adequate physical facility and assurance for families.
- **Fearlessness/trust:** mutually assured relationships and society.
- **Co-existence:** harmony with nature and the wider existence.

### Conflict analysis framework

1. Identify the parties and issue.
2. Separate facts from assumptions/emotional reactions.
3. Identify needs, expectations and values involved.
4. Check whether the problem is a misunderstanding, unmet need, capability gap or structural injustice.
5. Seek a solution consistent with respect, trust, fairness and mutual fulfilment.

### Societal values quick list

Justice • democracy • secularism • rule of law • respect • gratitude • inclusion • responsibility • mental health • integrated personality.

### Common exam traps

- Equating respect with obedience or fear.
- Treating trust as blind acceptance of every claim.
- Describing justice only as a legal punishment system; in UHV, also explain harmony/fulfilment in relationships.
- Discussing family harmony without connecting it to wider society.

## Unit 4 — Understanding Harmony in Nature and Existence

### Syllabus coverage

- Harmony in nature and interconnectedness.
- Self-regulation and mutual fulfilment among four orders of nature.
- Meaning of harmony in nature.
- Causes and implications of disharmony.
- Symbiotic relationships with nature.
- Competence to maintain harmony with nature in professional life.

### Four orders of nature

1. **Material order:** soil, water, air, metals and other physical/material entities.
2. **Plant/bio order:** plants and vegetation; material plus life processes.
3. **Animal order:** animals with body and conscious activities.
4. **Human order:** human beings with body and the conscious self; responsibility for understanding and conduct.

### Key ideas

- **Interconnectedness:** orders depend on and interact with one another.
- **Mutual fulfilment:** natural processes can support the continuation and well-being of other orders.
- **Self-regulation:** natural systems maintain cycles/balances through internal processes.
- **Recyclability:** materials circulate through natural cycles; waste from one process can become an input to another when systems are balanced.
- **Symbiosis:** mutually beneficial association between organisms/systems.
- **Disharmony:** disturbance caused by exploitation, pollution, overconsumption, resource depletion or technologies/production systems that ignore ecological limits.

### Cause then effect then response

| Cause | Possible effect | Responsible response |
|---|---|---|
| Excessive extraction | Resource depletion | Efficient use, restoration and circular material flows. |
| Pollution | Health/ecosystem damage | Prevention, cleaner processes and treatment. |
| Habitat destruction | Loss of biodiversity | Conservation and responsible land use. |
| Wasteful production | Unnecessary material/energy demand | Eco-friendly design and production. |
| Unsustainable consumption | Ecological imbalance | Need-based, responsible consumption. |

### Professional application

For any engineering case study, discuss: lifecycle impact, resource/energy efficiency, human safety, waste, recyclability, ecological effects, stakeholders and long-term sustainability.

### Common exam traps

- Listing the four orders without explaining their interdependence.
- Equating harmony with “humans should not use nature”; the focus is responsible, mutually fulfilling use.
- Giving environmental slogans without explaining causes, consequences and professional action.

## Unit 5 — Implications of Harmony on Professional Ethics

### Syllabus coverage

- Engineering profession and ethical issues in practice.
- Conflicts between business demands and professional ideals.
- Social and ethical responsibilities of technologists.
- Codes of professional ethics.
- Whistle-blowing and beyond.
- Ethics of duty and ethics of responsibility.
- Holistic technologies, production systems and management models.
- Transition towards value-based life and profession.

### Core definitions and contrasts

- **Professional ethics:** principles and standards guiding professional decisions, conduct, competence, honesty, safety and responsibility.
- **Duty ethics:** focuses on obligations, rules, commitments and what one ought to do.
- **Responsibility ethics:** focuses on foreseeable consequences, accountability and effects on people/society/environment.
- **Whistle-blowing:** reporting serious wrongdoing or danger through appropriate channels when ordinary correction fails; protect evidence, safety, confidentiality and due process.
- **Holistic technology:** technology assessed not only for technical/economic performance but also human, social and ecological impact.
- **Holistic production system:** people-friendly, eco-friendly and sustainable production that meets real needs.

### Ethical decision checklist for an engineer

1. Is the design safe and fit for purpose?
2. Are data, results and limitations represented honestly?
3. Are users, workers and affected communities considered?
4. Is the solution lawful and consistent with professional codes?
5. Are environmental and lifecycle impacts assessed?
6. Is there a conflict of interest or pressure to misrepresent?
7. Have concerns been documented and escalated responsibly?
8. Does the decision support long-term public welfare?

### Common case-study structure

Facts then stakeholders then ethical issue/conflict then relevant duty/code/value then options then foreseeable consequences then justified decision then safeguards/communication then reflection.

### Common exam traps

- Saying “follow the manager's order” without discussing professional duty and public safety.
- Treating whistle-blowing as the first response in every disagreement; discuss evidence and appropriate escalation.
- Describing ethics as personal preference alone; include public safety, professional standards, accountability and social/ecological responsibility.

---

# 3. DISCRETE MATHEMATICS — DSC-301

## Unit 1 — Algebraic Structures

### 1.1 Syllabus coverage

Relations; equivalence relations; partial orders; lattices; characteristic functions; semigroups; monoids; groups; permutation groups; cyclic groups; normal subgroups; group isomorphism; rings; fields; integral domains.

### 1.2 Relations quick reference

A relation \(R\) on set \(A\) is a subset of \(A\times A\). Write \(aRb\) when \((a,b)\in R\).

| Property | Test |
|---|---|
| Reflexive | \(aRa\) for every \(a\in A\). |
| Irreflexive | \(aRa\) for no \(a\in A\). |
| Symmetric | \(aRb\Rightarrow bRa\). |
| Antisymmetric | \(aRb\) and \(bRa\Rightarrow a=b\). |
| Asymmetric | \(aRb\Rightarrow\neg(bRa)\); implies irreflexive. |
| Transitive | \(aRb\) and \(bRc\Rightarrow aRc\). |

- **Equivalence relation:** reflexive + symmetric + transitive.
- **Equivalence class:** \([a]=\{x\in A:xRa\}\). Equivalence classes partition the set.
- **Partial order:** reflexive + antisymmetric + transitive.
- **Poset:** a set together with a partial order.
- **Total/linear order:** every pair is comparable.
- **Hasse diagram:** omit loops and transitive edges; draw larger elements higher.

### 1.3 Lattices

A poset \((L,\le)\) is a lattice if every pair \(a,b\) has:
- **Meet** \(a\wedge b\): greatest lower bound.
- **Join** \(a\vee b\): least upper bound.

Important lattice laws:

\[
a\vee b=b\vee a,\quad a\wedge b=b\wedge a
\]
\[
a\vee(b\vee c)=(a\vee b)\vee c,\quad a\wedge(b\wedge c)=(a\wedge b)\wedge c
\]
\[
a\vee(a\wedge b)=a,\quad a\wedge(a\vee b)=a
\]
\[
a\vee(b\wedge c)=(a\vee b)\wedge(a\vee c)
\]

- **Bounded lattice:** has least element 0 and greatest element 1.
- **Complemented lattice:** each \(a\) has \(b\) with \(a\wedge b=0\) and \(a\vee b=1\).
- **Distributive lattice:** meet distributes over join and vice versa.

### 1.4 Characteristic function

For subset \(S\subseteq A\):

\[
\chi_S(x)=\begin{cases}1,&x\in S\\0,&x\notin S\end{cases}
\]

Useful identities for subsets \(A,B\) of a universal set:

\[
\chi_{A\cap B}=\chi_A\chi_B,\quad
\chi_{A\cup B}=\chi_A+\chi_B-\chi_A\chi_B
\]
\[
\chi_{A^c}=1-\chi_A
\]

### 1.5 Algebraic structures — hierarchy

| Structure | Set + operation requirements |
|---|---|
| Magma/groupoid | Closed binary operation. |
| Semigroup | Closure + associativity. |
| Monoid | Semigroup + identity element. |
| Group | Monoid + inverse for every element. |
| Abelian group | Group + commutativity. |

For a group \((G,*)\):
- Closure: \(a*b\in G\).
- Associativity: \((a*b)*c=a*(b*c)\).
- Identity \(e\): \(a*e=e*a=a\).
- Inverse: for each \(a\), some \(a^{-1}\) with \(a*a^{-1}=a^{-1}*a=e\).
- Abelian: \(a*b=b*a\).

Group facts:
- Identity is unique; inverse is unique.
- \((a^{-1})^{-1}=a\).
- \((ab)^{-1}=b^{-1}a^{-1}\).
- Cancellation holds.
- \(ax=b\Rightarrow x=a^{-1}b\); \(xa=b\Rightarrow x=ba^{-1}\).
- Finite group: order of subgroup divides order of group (Lagrange's theorem).
- Order of an element \(a\): least positive \(n\) with \(a^n=e\), if it exists.

### 1.6 Subgroups, cyclic groups and permutations

A non-empty subset \(H\subseteq G\) is a subgroup if it is closed under the group operation and inverses (equivalently, the one-step test \(a,b\in H\Rightarrow ab^{-1}\in H\)).

- **Cyclic group:** \(G=\langle a\rangle=\{a^n:n\in\mathbb Z\}\).
- In a finite cyclic group of order \(n\), the order of \(a^k\) is \(n/\gcd(n,k)\).
- Number of generators of a cyclic group of order \(n\): Euler totient \(\varphi(n)\).
- **Permutation group:** a group of bijections from a set to itself under composition.
- Symmetric group on \(n\) objects: \(S_n\), with \(|S_n|=n!\).
- Composition is read right-to-left unless the question specifies otherwise.
- A cycle \((a_1a_2\ldots a_k)\) maps \(a_1\to a_2,\ldots,a_k\to a_1\).

### 1.7 Normal subgroups and isomorphism

- \(H\trianglelefteq G\) (normal) if \(gHg^{-1}=H\) for all \(g\in G\), equivalently left and right cosets match.
- Every subgroup of an Abelian group is normal.
- Kernel of a group homomorphism is normal.
- **Homomorphism:** \(f(ab)=f(a)f(b)\).
- **Isomorphism:** a bijective homomorphism; groups have the same abstract structure.
- Invariants useful for testing isomorphism: order, identity, element orders, cyclicity, commutativity, subgroup structure.

### 1.8 Rings, integral domains and fields

- **Ring:** a set with addition and multiplication; addition forms an Abelian group, multiplication is associative, and multiplication distributes over addition. A multiplicative identity is required only under the “ring with unity” convention; check the text's convention.
- **Commutative ring:** multiplication is commutative.
- **Integral domain:** commutative ring with unity, \(1\ne0\), and no zero divisors.
- **Field:** commutative ring with unity in which every non-zero element has a multiplicative inverse.
- Every field is an integral domain; every finite integral domain is a field.
- Zero divisor: non-zero \(a,b\) with \(ab=0\).

### 1.9 Common exam traps

- Confusing antisymmetry with asymmetry.
- Calling a relation an equivalence relation without checking all three properties.
- Forgetting that a partial order need not compare every pair.
- Confusing meet (greatest lower bound) with minimum of a set unless the poset is numeric/appropriate.
- Assuming every subgroup is normal.
- Confusing a homomorphism with an isomorphism; bijectivity is additionally required for isomorphism.
- Forgetting the zero-divisor condition in an integral domain.

---

## Unit 2 — Graph Theory

### 2.1 Syllabus coverage

Graph definitions/properties; directed and undirected graphs; degree sequence; cycles and paths; connectivity; adjacency and incidence matrices; complete, regular, bipartite and planar graphs; graph isomorphism; Euler and Hamilton circuits; graph colouring using the Welch–Powell algorithm.

### 2.2 Basic terminology

- Graph \(G=(V,E)\): vertices and edges.
- Simple graph: no loops or parallel edges.
- Degree \(\deg(v)\): number of incident edge-ends; a loop contributes 2 in an undirected graph.
- Walk: sequence of adjacent vertices; trail: no repeated edge; path: no repeated vertex (convention may vary).
- Circuit: closed trail; cycle: closed path.
- Connected graph: a path exists between every pair of vertices.
- Component: maximal connected subgraph.
- Bridge/cut-edge: removing it increases the number of components.
- Cut vertex: removing it increases the number of components.
- Complete graph \(K_n\): every pair of distinct vertices is adjacent.
- Regular graph: every vertex has the same degree \(r\) (r-regular).
- Bipartite graph: vertices split into two independent sets; every edge crosses the split.
- Planar graph: can be drawn without edge crossings (except at common endpoints).

### 2.3 Core graph formulas

For an undirected graph:

\[
\sum_{v\in V}\deg(v)=2|E|\quad\text{(handshaking lemma)}
\]

Consequences: the number of odd-degree vertices is even; for an \(r\)-regular graph, \(nr=2m\).

For a directed graph:

\[
\sum_v\deg^-(v)=\sum_v\deg^+(v)=|E|
\]

Complete graph:

\[
|E(K_n)|=\binom n2=\frac{n(n-1)}2,\quad\deg(v)=n-1
\]

Complete bipartite graph:

\[
|E(K_{m,n})|=mn
\]

For a simple connected planar graph with \(V\ge3\):

\[
V-E+F=2\quad\text{(Euler's formula)},\qquad E\le3V-6
\]

For a simple planar bipartite graph with \(V\ge3\):

\[
E\le2V-4
\]

### 2.4 Matrix representations

**Adjacency matrix** \(A=[a_{ij}]\):
- \(a_{ij}=1\) when \(v_i\) is adjacent to \(v_j\), otherwise 0 (or use edge multiplicity/weight if specified).
- For a simple undirected graph, \(A\) is symmetric and diagonal entries are zero.
- Sum of row \(i\) gives degree of vertex \(v_i\) in a simple undirected graph.
- \((A^k)_{ij}\) counts walks of length \(k\) from \(v_i\) to \(v_j\).

**Incidence matrix** \(M\): rows are vertices and columns are edges. For an undirected graph, a column typically has two 1s (one at each endpoint); a directed incidence matrix commonly uses -1 at tail and +1 at head. State the convention.

### 2.5 Euler vs Hamilton

| Euler | Hamilton |
|---|---|
| Uses every edge exactly once. | Visits every vertex exactly once. |
| Euler circuit returns to start. | Hamilton circuit returns to start. |
| Focus is on edge degree/connectivity conditions. | No simple general degree test is necessary and sufficient. |

For a connected undirected graph (ignoring isolated vertices):
- Euler circuit iff every vertex has even degree.
- Euler trail (open) iff exactly 0 or 2 vertices have odd degree (0 gives a circuit).

For a directed Euler circuit, the relevant strongly connected part must have equal in-degree and out-degree at every vertex. For a directed Euler trail, the start/end balance conditions differ by one; verify the exact orientation.

Hamiltonian sufficient conditions often used as theorems (not necessary conditions):
- Dirac: simple graph with \(n\ge3\), if every vertex degree \(\ge n/2\), then Hamiltonian.
- Ore: for every non-adjacent pair \(u,v\), if \(\deg(u)+\deg(v)\ge n\), then Hamiltonian.

### 2.6 Graph isomorphism

Two graphs are isomorphic if there is a bijection between vertices that preserves adjacency. Necessary quick checks (not sufficient alone):
- Same number of vertices and edges.
- Same degree multiset/degree sequence.
- Same number of components, cycles of relevant lengths and structural invariants.
- Matching adjacency under a candidate vertex mapping.

### 2.7 Welch–Powell colouring procedure

1. List vertices in non-increasing order of degree.
2. Assign the first colour to the first vertex.
3. Move down the list and give that colour to each vertex not adjacent to any vertex already carrying it.
4. Start a new colour at the first uncoloured vertex.
5. Repeat until every vertex is coloured.

This is a greedy heuristic/order-dependent procedure. It produces a valid colouring, but not necessarily the chromatic number.

### 2.8 Common exam traps

- Mixing degree sum with number of edges; remember the factor 2 for undirected graphs.
- Counting a loop as degree 1 instead of 2 under the standard convention.
- Treating a necessary condition for Hamiltonicity as sufficient.
- Applying Euler's planar formula to a disconnected graph without adjusting components.
- Assuming Welch–Powell always produces an optimal colouring.
- Confusing adjacency matrix with incidence matrix.

---

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

## Unit 4 — Mathematical Techniques

### 4.1 Syllabus coverage

Propositional calculus; principle of inclusion and exclusion; mathematical induction; pigeonhole principle; permutations and combinations; derangements; recursive functions.

### 4.2 Propositional calculus

A proposition is a declarative statement with truth value T/F.

| Operator | Meaning | Truth condition |
|---|---|---|
| \(\neg p\) | NOT | Reverses truth value. |
| \(p\land q\) | AND | True only if both true. |
| \(p\lor q\) | OR (inclusive) | True if at least one true. |
| \(p\to q\) | Implication | False only when \(p=T,q=F\). |
| \(p\leftrightarrow q\) | Biconditional | True when both have same truth value. |
| \(p\oplus q\) | XOR | True when values differ. |

Important equivalences:

\[
p\to q\equiv\neg p\lor q
\]
\[
\neg(p\land q)\equiv\neg p\lor\neg q,\quad
\neg(p\lor q)\equiv\neg p\land\neg q
\]
\[
p\to q\equiv\neg q\to\neg p\quad\text{(contrapositive)}
\]
\[
p\leftrightarrow q\equiv(p\to q)\land(q\to p)
\]
\[
p\lor\neg p\equiv T,\quad p\land\neg p\equiv F
\]

- Converse of \(p\to q\): \(q\to p\) (not generally equivalent).
- Inverse: \(\neg p\to\neg q\) (equivalent to converse, not generally to original).
- Contrapositive: \(\neg q\to\neg p\) (equivalent to original).
- Tautology: true under every assignment; contradiction: false under every assignment; contingency: sometimes true, sometimes false.

### 4.3 Quantifier reminders (useful for predicate propositions)

\[
\neg(\forall x\,P(x))\equiv\exists x\,\neg P(x)
\]
\[
\neg(\exists x\,P(x))\equiv\forall x\,\neg P(x)
\]

### 4.4 Principle of mathematical induction

To prove \(P(n)\) for all integers \(n\ge n_0\):

1. Base case: prove \(P(n_0)\).
2. Induction hypothesis: assume \(P(k)\) for arbitrary \(k\ge n_0\).
3. Induction step: using the hypothesis, prove \(P(k+1)\).
4. Conclude by induction.

Strong induction: assume the statement for all values from \(n_0\) through \(k\), then prove \(k+1\).

### 4.5 Pigeonhole principle

- Basic: if \(N\) objects are placed into \(k\) boxes and \(N>k\), some box contains at least 2 objects.
- Generalised: at least one box contains at least \(\lceil N/k\rceil\) objects.
- Contrapositive use: to show a collision/repetition must occur, count objects and possible categories.

### 4.6 Inclusion–exclusion principle

For finite sets:

\[
|A\cup B|=|A|+|B|-|A\cap B|
\]

\[
|A\cup B\cup C|=|A|+|B|+|C|-|A\cap B|-|A\cap C|-|B\cap C|+|A\cap B\cap C|
\]

General form: add single-set sizes, subtract pairwise intersections, add triple intersections, alternate signs, and continue through the full intersection.

### 4.7 Permutations and combinations

\[
n!=n(n-1)\cdots1,\quad0!=1
\]

\[
{}^nP_r=\frac{n!}{(n-r)!},\quad{}^nC_r=\binom nr=\frac{n!}{r!(n-r)!}
\]

Identities:

\[
\binom nr=\binom n{n-r},\quad
\binom nr+\binom n{r-1}=\binom{n+1}r
\]

- Permutation: order matters.
- Combination: order does not matter.
- Arrangements of \(n\) objects with repetitions of sizes \(n_1,\ldots,n_k\): \(n!/(n_1!\cdots n_k!)\).
- Circular arrangements of \(n\) distinct objects, up to rotation: \((n-1)!\).
- Combinations with repetition: \(\binom{n+r-1}{r}\), for choosing \(r\) items from \(n\) types with repetition.

### 4.8 Derangements

A derangement is a permutation with no fixed points.

\[
!n=n!\sum_{k=0}^{n}\frac{(-1)^k}{k!}
\]

Recurrence:

\[
!n=(n-1)(!(n-1)+!(n-2)),\quad !0=1,\;!1=0
\]

Probability that a uniformly random permutation has no fixed point is \(!n/n!\), approaching \(1/e\).

### 4.9 Recursive functions

A recursive definition needs:
- Base case(s) that stop recursion.
- Recursive case(s) that reduce the problem to smaller input(s).
- A measure showing progress towards a base case.

Example factorial:

\[
0!=1,\quad n!=n(n-1)!,\;n\ge1
\]

### 4.10 Common exam traps

- Forgetting the implication truth table: only TthenF is false.
- Using the converse instead of contrapositive.
- Skipping the induction base case or proving only one example.
- Double-counting intersections in inclusion–exclusion.
- Using permutations when order is irrelevant, or combinations when order matters.
- Forgetting the fixed-point condition in derangements.
- Writing recursion without a terminating base case.

---

## Unit 5 — Linear Programming Problems (JMI Discrete Mathematics Scope)

### 5.1 Syllabus coverage

Introduction to LPP; modelling and formulation; graphical solution; simplex algorithm; duality principle; finding duals of LPPs.

### 5.2 Standard LP form

A linear programme optimises a linear objective subject to linear constraints:

\[
\max/\min\; z=c^Tx\quad\text{subject to }Ax\le,=,\ge b,\;x\ge0\text{ (as specified)}
\]

- Decision variables represent choices.
- Objective function represents quantity to maximise/minimise.
- Constraints represent limits/requirements.
- Non-negativity restrictions are part of the model when variables represent non-negative quantities.
- Feasible solution satisfies all constraints; feasible region is the set of feasible points; optimal solution has best objective value.

### 5.3 Formulation workflow

1. Define decision variables with units.
2. Translate the goal into one objective function.
3. Translate each resource/requirement into an inequality/equality.
4. Add sign restrictions.
5. Check units and whether the inequality direction is correct.
6. Test a simple candidate point for plausibility.

### 5.4 Graphical method (two variables)

1. Plot each constraint boundary as a line.
2. Determine the feasible half-plane using a test point.
3. Intersect all half-planes with non-negativity restrictions.
4. Identify every corner point (vertex).
5. Evaluate the objective at each feasible vertex.
6. Choose maximum/minimum as required.

For a bounded feasible polygon and a linear objective, at least one optimum occurs at a vertex. Multiple optimal solutions can occur when an objective line is parallel to an optimal boundary edge.

### 5.5 Standard-form conversion

- \(a^Tx\le b\): add a non-negative slack variable \(s\): \(a^Tx+s=b\).
- \(a^Tx\ge b\): subtract surplus \(s\): \(a^Tx-s=b\); an artificial variable may be needed for an initial basis in simplex methods.
- Equality: may need an artificial variable for a starting basis depending on the method.
- Variable unrestricted in sign: write \(x=x^+-x^-\), with \(x^+,x^-\ge0\).
- If RHS is negative, multiply the whole constraint by -1 and reverse the inequality.

### 5.6 Simplex essentials

- Basic variables correspond to columns in the current basis; non-basic variables are set to zero.
- A basic feasible solution satisfies the constraints and non-negativity.
- A pivot exchanges one entering and one leaving variable.
- For a maximisation tableau using a common \(C_j-Z_j\) convention, an eligible positive reduced cost can improve the objective; choose entering/leaving rules consistently with the tableau convention taught in class.
- Ratio test: among rows with positive pivot-column coefficients, compute RHS/coefficient; smallest non-negative ratio determines leaving variable.
- If no positive eligible coefficient exists for the entering column, the objective may be unbounded in that direction.
- Degeneracy occurs when a basic variable is zero; cycling is possible under careless pivot selection.

### 5.7 Duality quick rules

For the standard primal maximisation form:

\[
\max c^Tx\quad\text{s.t. }Ax\le b,\;x\ge0
\]

Dual:

\[
\min b^Ty\quad\text{s.t. }A^Ty\ge c,\;y\ge0
\]

Conversion memory:
- Primal constraints become dual variables.
- Primal variables become dual constraints.
- The coefficient matrix transposes.
- Primal RHS becomes dual objective coefficients.
- Primal objective coefficients become dual RHS.
- Max/≤/non-negative primal maps to min/≥/non-negative dual in the standard form above.

### 5.8 Common exam traps

- Wrong variable units or wrong inequality direction during formulation.
- Forgetting non-negativity constraints.
- Testing only intercepts and missing a feasible intersection/corner.
- Applying a simplex ratio test to negative/zero pivot-column coefficients.
- Confusing slack and surplus variables.
- Forming a dual without transposing the coefficient matrix.
- Assuming every LP has a unique optimum or a bounded feasible region.

---

# 4. DATA STRUCTURES — DSC-302

## Unit 1 — Foundations, Complexity, Arrays and Pointers

### 1.1 Syllabus coverage

Definition/types/characteristics of data structures; ADT; algorithms; time/space complexity; arrays; 1D arrays; row/column-major 2D, 3D and nD array implementation; advanced pointers in C; dynamic memory allocation.

### 1.2 Core terms

- **Data structure:** organised way to store/manage data for efficient operations.
- **ADT:** specifies data and permitted operations/behaviour without requiring a particular implementation.
- **Algorithm:** finite, unambiguous sequence of steps that transforms input to output.
- **Time complexity:** growth of operation count with input size.
- **Space complexity:** memory growth, including auxiliary memory.

### 1.3 Asymptotic notation

- \(O(g(n))\): asymptotic upper bound.
- \(\Omega(g(n))\): asymptotic lower bound.
- \(\Theta(g(n))\): tight asymptotic bound.
- Ignore constant factors and lower-order terms for asymptotic growth.

Common growth order (smallest to largest):

\[
1<\log n<n<n\log n<n^2<n^3<2^n<n!
\]

Loop patterns:
- One loop to \(n\): \(O(n)\).
- Nested loops each to \(n\): \(O(n^2)\).
- Repeated halving/doubling: \(O(\log n)\).
- A loop with a logarithmic inner loop: often \(O(n\log n)\).

### 1.4 Array address formulas

Let element width be \(w\) bytes and base address be \(BA\). Use the actual lower bounds from the question.

1D array, index \(i\), lower bound \(L_1\):

\[
LOC(A[i])=BA+(i-L_1)w
\]

2D array with \(N_1\) rows and \(N_2\) columns:

**Row-major:**

\[
LOC(A[i][j])=BA+w[(i-L_1)N_2+(j-L_2)]
\]

**Column-major:**

\[
LOC(A[i][j])=BA+w[(j-L_2)N_1+(i-L_1)]
\]

3D array with dimensions \(N_1\times N_2\times N_3\):

**Row-major:**

\[
BA+w[(i-L_1)N_2N_3+(j-L_2)N_3+(k-L_3)]
\]

**Column-major:**

\[
BA+w[(k-L_3)N_1N_2+(j-L_2)N_1+(i-L_1)]
\]

nD row-major general form, dimensions \(N_1,\ldots,N_d\):

\[
LOC=BA+w\sum_{r=1}^{d}(i_r-L_r)\prod_{q=r+1}^{d}N_q
\]

For the last dimension, the empty product is 1. Always substitute dimensions and lower bounds exactly.

### 1.5 Pointer reference

- Pointer stores an address; `&x` gives address; `*p` dereferences.
- Pointer arithmetic advances by the size of the pointed-to type.
- Array name usually decays to pointer to first element in expressions, but an array and pointer variable are not identical types.
- `NULL`/`nullptr` represents no valid object address; never dereference it.
- Use `sizeof *p` in allocation expressions to reduce type mismatch errors.

Dynamic memory in C:

```c
int *p = malloc(n * sizeof *p);     // uninitialised storage
int *q = calloc(n, sizeof *q);      // zero-initialised bytes
p = realloc(p, new_n * sizeof *p);  // may move; use a temporary pointer
free(p);                            // release once; do not use afterward
```

Safer realloc pattern:

```c
int *tmp = realloc(p, new_n * sizeof *p);
if (tmp != NULL) p = tmp;   // preserve original p if allocation fails
```

### 1.6 Common exam traps

- Confusing array index with byte offset.
- Using number of rows where row-major uses number of columns.
- Forgetting lower bounds in address calculation.
- Confusing `p++` with `(*p)++`.
- Dereferencing uninitialised or freed pointers.
- Forgetting `free`, causing a memory leak.
- Overwriting the only pointer with a failed `realloc` result.

---

## Unit 2 — Stacks, Expressions, Recursion and Queues

### 2.1 Syllabus coverage

Stack ADT and operations; array/linked implementation; Polish and reverse Polish notation; recursion; garbage collection; queue ADT and operations; linear, circular, priority and double-ended queues; queue applications.

### 2.2 Stack

LIFO: last in, first out.

Operations:
- `push(x)`: insert at top.
- `pop()`: remove/return top.
- `peek()/top()`: read top without removal.
- `isEmpty()`, `isFull()` for bounded-array implementation.

Array stack with capacity \(N\), initial `top = -1`:
- Empty: `top == -1`.
- Full: `top == N-1`.
- Push: increment `top`, store item.
- Pop: return item, decrement `top`.
- Push/pop/peek: \(O(1)\).

### 2.3 Expression notation

- Infix: operator between operands, e.g. `A+B`.
- Prefix/Polish: operator before operands, e.g. `+AB`.
- Postfix/reverse Polish: operator after operands, e.g. `AB+`.

Typical precedence (high to low): parentheses then exponentiation then multiplication/division/modulo then addition/subtraction. Associativity must be respected; exponentiation is commonly right-associative.

Infix to postfix (stack method):
1. Output operands immediately.
2. Push `(`.
3. For an operator, pop higher-precedence operators (and equal-precedence operators when left-associative) before pushing it.
4. On `)`, pop until `(`.
5. At end, pop all remaining operators.

Postfix evaluation:
1. Scan left to right.
2. Push operands.
3. At an operator, pop right operand first, then left operand; evaluate `left op right`.
4. Push result.
5. Final stack should contain exactly one result.

### 2.4 Recursion and call stack

A recursive routine needs a base case and progress towards it. Each call stores activation information (parameters, local variables and return address) on the call stack.

- Tail recursion: recursive call is the final operation (optimisation is compiler-dependent).
- Recursion may use \(O(d)\) stack space where \(d\) is recursion depth.
- Repeated subproblems may make naive recursion exponential; memoisation/dynamic programming may reduce repeated work (supplementary concept).

### 2.5 Garbage collection quick reference

- Reference counting: reclaim object when reference count reaches zero; cycles can remain unreclaimed.
- Mark-and-sweep: mark reachable objects from roots, then reclaim unmarked objects.
- Copying/compacting collectors move live objects and reduce fragmentation.
- In C, `malloc/free` are manual; do not assume an automatic garbage collector.

### 2.6 Queue

FIFO: first in, first out.

Operations: enqueue, dequeue, front/peek, isEmpty, isFull (bounded array).

**Linear array queue:** simple but freed front positions may be wasted unless elements are shifted.

**Circular queue** (capacity \(N\), indices modulo \(N\)):

\[
next(i)=(i+1)\bmod N
\]

Common `front/rear` convention with one unused slot:
- Empty: `front == rear`.
- Full: `(rear+1) % N == front`.
- Enqueue: `rear=(rear+1)%N`, store at rear.
- Dequeue: `front=(front+1)%N`.

Another convention maintains a `count`; then empty is count 0 and full is count N. State which convention is used.

**Deque:** insertion and deletion at both ends.  
**Priority queue:** deletion/servicing by priority rather than arrival time; tie-breaking may use FIFO.

### 2.7 Complexity summary

| Structure/operation | Typical time |
|---|---:|
| Stack push/pop/peek | \(O(1)\) |
| Queue enqueue/dequeue | \(O(1)\) with correct circular/linked implementation |
| Deque insert/delete at ends | \(O(1)\) with suitable implementation |
| Priority queue using heap | Insert/delete-priority \(O(\log n)\), peek \(O(1)\) |

### 2.8 Common exam traps

- Reversing operand order during postfix evaluation.
- Mishandling operator associativity.
- Confusing overflow with underflow.
- Using an incorrect circular-queue full/empty test for the chosen representation.
- Assuming recursion has no extra space cost.
- Claiming C automatically frees heap allocations.

---

## Unit 3 — Linked Lists

### 3.1 Syllabus coverage

Concept of linked list; linear singly and doubly linked lists; circular singly and doubly linked lists; header linked list; applications.

### 3.2 Types and node layouts

- **Singly linked:** each node stores data and `next`.
- **Doubly linked:** each node stores `prev`, data and `next`.
- **Circular singly:** last node's `next` points to head.
- **Circular doubly:** last `next` points to head and head `prev` points to last.
- **Header linked list:** begins with a header/sentinel node; it may hold metadata or simplify edge cases.

### 3.3 Core operations and time

| Operation | Singly list, head only | With tail/extra pointer where applicable |
|---|---:|---:|
| Traverse/search | \(O(n)\) | \(O(n)\) |
| Insert at head | \(O(1)\) | \(O(1)\) |
| Insert at tail | \(O(n)\) | \(O(1)\) if tail pointer |
| Delete head | \(O(1)\) | \(O(1)\) |
| Delete tail | \(O(n)\) (find predecessor) | Usually \(O(n)\) singly; \(O(1)\) doubly with tail |
| Insert after known node | \(O(1)\) | \(O(1)\) |

### 3.4 Pointer update patterns

**Insert at front (singly):**

```c
new->next = head;
head = new;
```

**Insert after node `p` (singly):**

```c
new->next = p->next;
p->next = new;
```

**Delete node after `p` (singly):**

```c
tmp = p->next;
if (tmp != NULL) {
    p->next = tmp->next;
    free(tmp);
}
```

**Insert at front (doubly):**

```c
new->prev = NULL;
new->next = head;
if (head != NULL) head->prev = new;
head = new;
```

For circular lists, update both the terminal link and head/tail relationships; handle the one-node and empty-list cases separately.

### 3.5 Linked list vs array

| Array | Linked list |
|---|---|
| Contiguous memory | Nodes may be scattered |
| Random access \(O(1)\) | Index access \(O(n)\) |
| Insert/delete in middle requires shifting \(O(n)\) | Pointer update can be \(O(1)\) after location is known |
| Fixed capacity unless resized | Dynamic node allocation |
| Good cache locality | Pointer overhead and weaker locality |

### 3.6 Applications

Stacks/queues; polynomial representation; sparse structures; adjacency lists; playlists/round-robin traversal; undo/redo (doubly linked).

### 3.7 Common exam traps

- Losing the rest of the list by overwriting `next` before saving it.
- Forgetting `prev` update in doubly linked list.
- Failing to reconnect last node to head in a circular list.
- Not treating empty and single-node cases.
- Freeing a node and then reading its pointer/data.

---

## Unit 4 — Trees, BST, Traversals, AVL, Heaps, Expression Trees, B/B+ Trees

### 4.1 Syllabus coverage

Tree and tree ADT; binary trees and operations; BST; traversals; types of binary tree; AVL trees; heap trees; expression trees; B-trees and B+ trees.

### 4.2 Tree terminology and properties

- Root, parent, child, sibling, leaf, internal node, ancestor, descendant, subtree, depth and height.
- A tree with \(n\) vertices has \(n-1\) edges (connected and acyclic).
- Binary tree: each node has at most two children.

If root is at level 0 and height is \(h\):

\[
\text{maximum nodes}=1+2+\cdots+2^h=2^{h+1}-1
\]
\[
\text{maximum leaves}=2^h
\]

For a non-empty binary tree with \(n_0\) leaves, \(n_2\) nodes with two children:

\[
n_0=n_2+1
\]

(Here \(n_1\) denotes nodes with exactly one child.)

Common types:
- Full/strict: every node has 0 or 2 children.
- Complete: all levels full except possibly last, filled left to right.
- Perfect: all internal nodes have two children and all leaves are at same depth.
- Skewed: each internal node has only one child.

### 4.3 Traversals

- Preorder: Root then Left then Right.
- Inorder: Left then Root then Right.
- Postorder: Left then Right then Root.
- Level-order: breadth-first by queue.

For a BST, inorder traversal returns keys in sorted order.

### 4.4 Binary Search Tree

Invariant: all keys in left subtree < node key; all keys in right subtree > node key (duplicate policy must be declared).

- Search, insert and delete follow comparisons down one root-to-leaf path.
- Time: \(O(h)\), where \(h\) is tree height; average balanced-ish case \(O(\log n)\), worst skewed \(O(n)\).
- Delete cases: leaf; one child (replace node by child); two children (replace by inorder successor/predecessor, then delete that node).

### 4.5 AVL trees

Self-balancing BST. Balance factor:

\[
BF(v)=h(left(v))-h(right(v))
\]

AVL condition: \(BF\in\{-1,0,+1\}\) at every node.

| Imbalance | Rotation |
|---|---|
| Left-left (LL) | Right rotation at unbalanced node |
| Right-right (RR) | Left rotation |
| Left-right (LR) | Left rotation on left child, then right rotation |
| Right-left (RL) | Right rotation on right child, then left rotation |

Search/insert/delete remain \(O(\log n)\) because height is logarithmic. Update heights/balance factors while moving back towards the root.

### 4.6 Heaps

Binary heap: complete binary tree with heap-order property.
- Max-heap: parent ≥ children.
- Min-heap: parent ≤ children.
- Peek root: \(O(1)\).
- Insert (sift/bubble up): \(O(\log n)\).
- Delete root (replace by last, sift down): \(O(\log n)\).
- Build heap bottom-up: \(O(n)\).
- Heapsort: \(O(n\log n)\) time, in-place for array representation.

For 0-based array index \(i\):

\[
parent(i)=\lfloor(i-1)/2\rfloor,\quad left(i)=2i+1,\quad right(i)=2i+2
\]

For 1-based indexing: parent \(\lfloor i/2\rfloor\), children \(2i\), \(2i+1\).

### 4.7 Expression trees

- Leaves are operands; internal nodes are operators.
- Preorder gives prefix; inorder gives infix (with parentheses for exact grouping); postorder gives postfix.
- Evaluate recursively: evaluate child subtrees, then apply operator at parent.

### 4.8 B-tree and B+ tree

Terminology varies by “order” versus minimum degree. State the convention in every answer.

Using minimum degree \(t\) for a B-tree:
- Each non-root node has at least \(t-1\) keys and at most \(2t-1\) keys.
- An internal node has one more child than keys.
- Root has special minimum occupancy rules.
- All leaves are at the same depth.
- Search/insert/delete are logarithmic in number of keys.

B+ tree:
- Internal nodes guide search; records/data pointers are stored at leaves (in common designs).
- Leaf nodes are linked for efficient range/sequential access.
- All leaves are at the same depth.

### 4.9 Common exam traps

- Mixing tree height counted in edges vs levels; define convention.
- Confusing complete, full and perfect binary trees.
- Writing BST insertion as always \(O(\log n)\); worst case is \(O(n)\).
- Using wrong AVL rotation for LR/RL cases.
- Applying heap index formulas with the wrong 0-/1-based convention.
- Treating B-tree order and minimum degree as the same definition without checking.

---

## Unit 5 — Graphs, Traversals, MST and Sorting Algorithms

### 5.1 Syllabus coverage

Graph terminology; directed/undirected, connected/disconnected, cyclic/acyclic graphs; adjacency matrix, incidence matrix and linked-list representations; graph traversal; graph algorithms; MST; Prim's and Kruskal's algorithms; sorting algorithms.

### 5.2 Graph representation and traversal

| Representation | Space | Edge test | Neighbour iteration |
|---|---:|---:|---:|
| Adjacency matrix | \(O(V^2)\) | \(O(1)\) | \(O(V)\) |
| Adjacency list | \(O(V+E)\) | depends on degree | \(O(\deg(v))\) |
| Edge list | \(O(E)\) | \(O(E)\) | scan edges |

**BFS:** queue; explores by distance/layers; shortest path in unweighted graph.  
**DFS:** recursion/stack; explores deeply before backtracking; useful for connectivity, cycle detection and component discovery.

With adjacency lists, BFS/DFS time is \(O(V+E)\); with adjacency matrices it is typically \(O(V^2)\).

### 5.3 Minimum spanning tree

For a connected, weighted, undirected graph, an MST connects all vertices with minimum total edge weight and has exactly \(V-1\) edges.

- **Cut property:** a minimum-weight edge crossing a cut (with the appropriate cut rule) is safe for an MST.
- **Cycle property:** a unique heaviest edge in a cycle cannot belong to an MST.
- If all edge weights are distinct, the MST is unique.

**Kruskal:**
1. Sort edges by non-decreasing weight.
2. Start with each vertex in its own component.
3. Add the next lightest edge if it joins two different components.
4. Use disjoint-set union (union-find) to test/merge components.
5. Stop after \(V-1\) edges.

Time: \(O(E\log E)\) dominated by sorting (DSU operations are near-constant amortised with path compression/union by rank).

**Prim:**
1. Start from any vertex.
2. Maintain the cheapest edge connecting the current tree to an outside vertex.
3. Add that edge/vertex.
4. Repeat until all vertices are included.

With a binary heap and adjacency list: \(O(E\log V)\); with adjacency matrix: \(O(V^2)\).

### 5.4 Sorting algorithms — quick reference

| Algorithm | Best | Average | Worst | Stable? | In-place? |
|---|---:|---:|---:|---|---|
| Bubble (optimised) | \(O(n)\) | \(O(n^2)\) | \(O(n^2)\) | Yes | Yes |
| Selection | \(O(n^2)\) | \(O(n^2)\) | \(O(n^2)\) | Usually no | Yes |
| Insertion | \(O(n)\) | \(O(n^2)\) | \(O(n^2)\) | Yes | Yes |
| Merge | \(O(n\log n)\) | \(O(n\log n)\) | \(O(n\log n)\) | Yes (standard merge) | No (standard array version) |
| Quick | \(O(n\log n)\) | \(O(n\log n)\) | \(O(n^2)\) | No | Usually |
| Heap | \(O(n\log n)\) | \(O(n\log n)\) | \(O(n\log n)\) | No | Yes |

Recognise:
- Bubble: adjacent swaps; largest element “bubbles” to end each pass.
- Selection: select minimum and place at next position; at most \(n-1\) swaps.
- Insertion: insert each key into sorted prefix.
- Merge: divide, sort halves, merge; stable with correct tie handling.
- Quick: partition around pivot; bad pivot choices can lead to quadratic time.
- Heap: build heap, repeatedly remove maximum/minimum.

### 5.5 Searching reminder

Linear search: \(O(n)\), no sorted requirement. Binary search: \(O(\log n)\), requires sorted/random-access sequence (or an equivalent structure supporting efficient middle access).

### 5.6 Common exam traps

- Claiming BFS and DFS both find shortest paths in every graph; BFS does so for unweighted graphs.
- Confusing MST with shortest-path tree.
- Letting Kruskal add a cycle-forming edge.
- Forgetting MST has \(V-1\) edges for a connected graph.
- Ignoring stability/in-place distinctions in sorting comparisons.
- Claiming quicksort worst case is always \(O(n\log n)\).

---

# 5. DIGITAL LOGIC DESIGN — DSC-303

## Unit 1 — Boolean Algebra and Logic Gates

### 1.1 Syllabus coverage

Introduction; binary numbers; base conversion; octal/hexadecimal; complements; binary codes; fixed/floating-point numbers; Boolean algebra axioms/theorems; canonical and standard forms; SOP/POS; other logic operations.

### 1.2 Number systems

For base \(b\):

\[
(d_nd_{n-1}\ldots d_0.d_{-1}\ldots)_b=\sum_i d_i b^i
\]

Binary place values: powers of 2. Octal: powers of 8. Hexadecimal: powers of 16 (digits A–F represent 10–15).

Quick conversion:
- Base \(b\) to decimal: positional expansion.
- Decimal integer to base \(b\): repeated division; read remainders upward.
- Decimal fraction to base \(b\): repeated multiplication; read integer parts downward.
- Binarycorresponds tooctal: group bits in threes.
- Binarycorresponds tohex: group bits in fours.

### 1.3 Complements and signed representation

For an n-bit binary word:
- 1's complement: invert each bit.
- 2's complement: invert then add 1.
- 2's-complement range: \(-2^{n-1}\) to \(2^{n-1}-1\).
- To negate a 2's-complement number: invert all bits and add 1.
- Overflow in signed addition: adding two numbers of same sign produces result of opposite sign.

### 1.4 Common binary codes

- **BCD 8421:** each decimal digit encoded separately in 4 bits (0000–1001 valid BCD digits).
- **Gray code:** adjacent values differ by one bit. BinarythenGray: MSB same; each later Gray bit is XOR of adjacent binary bits. Graythenbinary: MSB same; each next binary bit is previous binary bit XOR current Gray bit.
- **Excess-3:** add 3 to each decimal digit and write 4-bit binary.
- **Parity bit:** makes total number of 1s even or odd as required; detects any odd number of bit errors, but not all even-number errors.

### 1.5 Boolean algebra laws

Let + denote OR, multiplication/concatenation denote AND, and prime denote NOT.

| Law | Identity |
|---|---|
| Identity | \(A+0=A,\;A\cdot1=A\) |
| Null/dominance | \(A+1=1,\;A\cdot0=0\) |
| Idempotent | \(A+A=A,\;AA=A\) |
| Complement | \(A+A'=1,\;AA'=0\) |
| Involution | \((A')'=A\) |
| Commutative | \(A+B=B+A,\;AB=BA\) |
| Associative | \(A+(B+C)=(A+B)+C\); similarly AND |
| Distributive | \(A(B+C)=AB+AC\); \(A+BC=(A+B)(A+C)\) |
| Absorption | \(A+AB=A,\;A(A+B)=A\) |
| De Morgan | \((A+B)'=A'B',\;(AB)'=A'+B'\) |

Other useful identities:

\[
A+A'B=A+B,\quad A(A'+B)=AB
\]
\[
AB+AB'=A,\quad(A+B)(A+B')=A
\]

### 1.6 SOP, POS and canonical forms

- **SOP:** OR of product terms, e.g. \(AB+A'C\).
- **POS:** AND of sum terms, e.g. \((A+B)(A'+C)\).
- **Minterm:** product containing every variable exactly once; equals 1 for exactly one input combination.
- **Maxterm:** sum containing every variable exactly once; equals 0 for exactly one input combination.
- Canonical SOP: sum of minterms where output is 1, \(F=\Sigma m(\text{indices})\).
- Canonical POS: product of maxterms where output is 0, \(F=\Pi M(\text{indices})\).

Index ordering convention: variables are interpreted as a binary number in the order stated (e.g. ABC). State the variable order.

### 1.7 Logic gates

| Gate | Expression | Output is 1 when |
|---|---|---|
| NOT | \(A'\) | A is 0 |
| AND | \(AB\) | all inputs 1 |
| OR | \(A+B\) | at least one input 1 |
| NAND | \((AB)'\) | not all inputs 1 |
| NOR | \((A+B)'\) | all inputs 0 |
| XOR | \(A\oplus B=A'B+AB'\) | inputs differ |
| XNOR | \((A\oplus B)'\) | inputs equal |

### 1.8 Fixed vs floating point

- Fixed point: binary point position is fixed; simpler hardware, limited dynamic range.
- Floating point: sign, exponent and significand/fraction; larger dynamic range but rounding/precision issues.
- Normalised binary floating-point commonly represents \((-1)^s\times1.f\times2^e\) (exact hidden-bit conventions depend on format).

### 1.9 Common exam traps

- Confusing complement with negative arithmetic value.
- Grouping BCD digits as if the whole number were a single binary word.
- Using the wrong variable order for minterm indices.
- Confusing canonical with simplified SOP/POS.
- Forgetting De Morgan applies to every term and flips AND/OR.

---

## Unit 2 — Function Minimisation

### 2.1 Syllabus coverage

Logic gates; Karnaugh maps; limitations for many variables; POS simplification; NAND/NOR implementation; other two-level implementations; don't-care conditions; tabular method.

### 2.2 K-map rules

- Arrange cells in Gray-code order so adjacent cells differ in one variable.
- For SOP, group 1s; for POS, group 0s.
- Group sizes must be powers of 2: 1, 2, 4, 8, 16, ...
- Groups must be rectangular and may wrap across opposite edges.
- Use the largest groups possible and cover every required minterm/maxterm.
- Overlapping groups are allowed when they simplify the expression.
- A variable that changes within a group is eliminated; a variable fixed at 1 appears uncomplemented, fixed at 0 complemented.
- Don't-care cells may be used as 0 or 1 when they help simplification; they do not have to be covered.

### 2.3 SOP vs POS mapping

- SOP groups output-1 minterms then AND terms ORed together.
- POS groups output-0 maxterms then OR terms ANDed together.
- NAND–NAND is a natural two-level implementation of SOP.
- NOR–NOR is a natural two-level implementation of POS.

### 2.4 Universal gates

Using NAND:

\[
A'=A\;\text{NAND}\;A
\]
\[
AB=(A\;\text{NAND}\;B)\;\text{NAND}\;(A\;\text{NAND}\;B)
\]
\[
A+B=(A\;\text{NAND}\;A)\;\text{NAND}\;(B\;\text{NAND}\;B)
\]

Using NOR:

\[
A'=A\;\text{NOR}\;A
\]
\[
A+B=(A\;\text{NOR}\;B)\;\text{NOR}\;(A\;\text{NOR}\;B)
\]
\[
AB=(A\;\text{NOR}\;A)\;\text{NOR}\;(B\;\text{NOR}\;B)
\]

### 2.5 Quine–McCluskey/tabular method

1. List minterms in binary and group by number of 1s.
2. Compare adjacent groups; combine terms differing in exactly one bit, replacing that bit by dash.
3. Repeat until no further combinations are possible.
4. Uncombined terms are prime implicants.
5. Build prime-implicant chart against required minterms.
6. Select essential prime implicants, then cover remaining minterms with the fewest/lowest-cost choices.
7. Do not use don't-care terms as required coverage targets.

### 2.6 Common exam traps

- Using binary order instead of Gray-code order in K-map cells.
- Making a group of 3 or 6 cells (not a power of 2).
- Missing wrap-around adjacency.
- Treating don't-cares as compulsory 1s/0s.
- Grouping minterms for POS instead of maxterms/zeros.
- Confusing NAND–NAND and NOR–NOR implementations.
- Failing to include every required minterm in the prime-implicant chart.

---

## Unit 3 — Combinational Systems I: Arithmetic Circuits

### 3.1 Syllabus coverage

Hardware aspects of arithmetic logic functions; half adder; full adder; binary adder/subtractor; decimal/BCD adder.

### 3.2 Half adder

Inputs A, B; outputs Sum S and Carry C:

\[
S=A\oplus B,\quad C=AB
\]

| A | B | S | C |
|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

### 3.3 Full adder

Inputs A, B and carry-in \(C_{in}\):

\[
S=A\oplus B\oplus C_{in}
\]
\[
C_{out}=AB+AC_{in}+BC_{in}=AB+C_{in}(A\oplus B)
\]

A full adder can be constructed from two half adders and one OR gate for the carries.

### 3.4 Binary adder/subtractor

Two's-complement subtraction:

\[
A-B=A+\overline B+1
\]

A controlled adder/subtractor uses XOR gates on each B bit and sets initial carry \(C_0=SUB\):
- SUB=0 then add A+B.
- SUB=1 then add A+\(\overline B\)+1 = A−B.

### 3.5 Decimal/BCD adder

A valid BCD digit is 0000 through 1001. After adding two BCD digits (and carry-in), if binary sum > 9 or carry-out is 1, add 0110 (decimal 6) to correct the result to BCD.

Correction condition for a 4-bit sum \(S_3S_2S_1S_0\) with carry \(C_4\):

\[
K=C_4+S_3S_2+S_3S_1
\]

When \(K=1\), add 0110. This expression assumes the standard BCD adder arrangement.

### 3.6 Common exam traps

- Forgetting the incoming carry in a full adder.
- Using OR instead of XOR for the sum.
- Forgetting the +1 in two's-complement subtraction.
- Correcting BCD after every binary addition instead of testing the >9/carry condition.
- Confusing binary overflow with unsigned carry-out; signed overflow is a separate condition.

---

## Unit 4 — Combinational Systems II

### 4.1 Syllabus coverage

Magnitude comparator; demultiplexer; multiplexer; encoder; priority encoder; parity checker/generator.

### 4.2 Magnitude comparator

For two n-bit values A and B, outputs commonly are:
- \(G\): A>B.
- \(E\): A=B.
- \(L\): A<B.

For 1-bit inputs:

\[
G=AB',\quad E=A'B'+AB,\quad L=A'B
\]

For multi-bit numbers, compare from the most significant bit; a lower bit matters only if all higher bits are equal.

### 4.3 Multiplexer (MUX)

- A \(2^n:1\) MUX has \(2^n\) data inputs, n select lines and one output.
- Select lines encode which input is passed to output.
- A 4:1 MUX has 2 select lines; an 8:1 MUX has 3.
- A MUX can implement Boolean functions by assigning variables/constants to data inputs.

### 4.4 Demultiplexer (DEMUX)

- A \(1:2^n\) DEMUX routes one data input to one of \(2^n\) outputs selected by n select lines.
- Other outputs remain inactive (assuming active-high logic).
- Decoder and DEMUX structures are closely related; the data input acts as an enable.

### 4.5 Encoders

- Encoder maps one active input line to a binary code.
- A simple \(2^n\)-to-n encoder assumes only one input is active at a time.
- Priority encoder resolves multiple active inputs by assigning priority; outputs often include a valid bit.

### 4.6 Parity generator/checker

Even-parity bit for data bits \(d_1,\ldots,d_n\):

\[
p_{even}=d_1\oplus d_2\oplus\cdots\oplus d_n
\]

Then total number of 1s including parity is even. For odd parity, invert the even-parity bit.

Parity checking: XOR all received bits (including parity). For even parity, result 0 indicates parity condition satisfied; 1 indicates an odd number of bit errors. Parity cannot detect every even-number bit error.

### 4.7 Common exam traps

- Confusing number of select lines with number of data inputs.
- Forgetting priority in priority encoders.
- Treating an ordinary encoder as valid for multiple simultaneous inputs.
- Claiming parity corrects errors; it detects certain errors but does not locate/correct them.

---

## Unit 5 — Sequential Systems

### 5.1 Syllabus coverage

State representation; flip-flops (RS, D, JK/master-slave); working characteristics; state tables; excitation tables; triggering; asynchronous/synchronous counters; design and analysis; counter applications; shift registers and shift-register counters.

### 5.2 Combinational vs sequential

- Combinational output depends only on current inputs.
- Sequential output depends on current inputs and stored state/history.
- A clocked sequential circuit updates state on a specified clock edge/level.
- Asynchronous circuits may change state without waiting for a common clock edge.

### 5.3 Flip-flop characteristic equations

| Flip-flop | Characteristic equation | Key behaviour |
|---|---|---|
| SR | \(Q^+=S+R'Q\) (for valid inputs) | S sets; R resets; S=R=1 invalid for active-high NOR type. |
| D | \(Q^+=D\) | Next state follows D at active clock. |
| JK | \(Q^+=JQ'+K'Q\) | 00 hold; 01 reset; 10 set; 11 toggle. |
| T (reference) | \(Q^+=T\oplus Q\) | 0 hold; 1 toggle. |

### 5.4 Excitation requirements

| Present Q | Next Q⁺ | SR (S,R) | D | JK (J,K) | T |
|---:|---:|---|---:|---|---:|
| 0 | 0 | 0,X | 0 | 0,X | 0 |
| 0 | 1 | 1,0 | 1 | 1,X | 1 |
| 1 | 0 | 0,1 | 0 | X,1 | 1 |
| 1 | 1 | X,0 | 1 | X,0 | 0 |

X denotes don't-care. SR table assumes active-high SR flip-flop with the invalid S=R=1 case.

### 5.5 Triggering and master-slave JK

- Level-triggered: responds while clock is at active level.
- Edge-triggered: responds at active transition (positive or negative edge).
- Master-slave arrangement uses two stages controlled by opposite clock phases to reduce race-around in JK implementations.
- Race-around can occur in a level-triggered JK flip-flop with J=K=1 and a sufficiently long active clock pulse; output may toggle repeatedly.

### 5.6 Counters

- MOD-N counter cycles through N distinct states.
- Minimum number of flip-flops:
  \[
n=\lceil\log_2N\rceil
  \]
- Asynchronous/ripple counter: clock propagates through stages; simple but accumulated propagation delay.
- Synchronous counter: all flip-flops receive common clock; combinational logic determines next states.
- Up counter increments; down counter decrements; up/down counter selects direction.
- Ring counter: shift register with a circulating 1; with n flip-flops, normally n states.
- Johnson counter: complemented last output fed to first input; with n flip-flops, up to 2n states.

### 5.7 Shift registers

- SISO: serial in, serial out.
- SIPO: serial in, parallel out.
- PISO: parallel in, serial out.
- PIPO: parallel in, parallel out.
- Shift registers store/transfer serial data, perform delay, conversion and sequence generation.

### 5.8 State-table design workflow

1. Define states and input conditions.
2. Draw/read the state diagram.
3. Create present-state/input/next-state/output table.
4. Select flip-flop type.
5. Use characteristic/excitation table to obtain required inputs.
6. Minimise logic equations.
7. Draw circuit and verify transitions.

### 5.9 Common exam traps

- Confusing characteristic table (what the FF does) with excitation table (what inputs are required).
- Ignoring the invalid SR input combination.
- Forgetting JK toggle for J=K=1.
- Using \(\lceil\log_2N\rceil\) but not accounting for unused states in a non-power-of-two counter.
- Confusing ripple and synchronous counter timing.
- Confusing ring and Johnson counter state counts.

---

# 6. DATABASE MANAGEMENT SYSTEM — DSC-304

## Unit 1 — Introductory Concepts and Database Design Foundations

### 1.1 Syllabus coverage

- DBMS introduction, purpose and applications.
- Data independence.
- Three-schema/database architecture and mappings.
- Database users and database administrator (DBA).
- Entity–Relationship (ER) model.
- Constraints and keys.
- ER design issues and ER diagrams.
- Generalisation, specialisation and aggregation.
- ER-to-relational mapping.
- Tuple relational calculus (TRC), domain relational calculus (DRC) and relational algebra.

### 1.2 DBMS essentials

- **Database:** organised collection of related data.
- **DBMS:** software to define, create, store, retrieve, update and administer databases.
- **Metadata:** data describing database structures, constraints and other data.
- **Schema:** logical design/structure; **instance:** data stored at a particular time.
- **Data independence:** ability to change a schema at one level without requiring changes at the next higher level.

### 1.3 Three-schema architecture

| Level | What it describes | Example concern |
|---|---|---|
| External/view | Individual user/application views | A student sees own grades |
| Conceptual/logical | Whole database structure and relationships | Student, Course, Enrollment |
| Internal/physical | Files, pages, indexes and storage details | B-tree index, disk layout |

- **Physical data independence:** change internal schema without changing conceptual schema.
- **Logical data independence:** change conceptual schema without changing external views/programs. Usually harder to achieve.
- **Mapping:** external–conceptual mapping connects views to the conceptual schema; conceptual–internal mapping connects logical structures to physical storage.
- **DBA responsibilities:** authorisation/security, schema definition, storage/access methods, backup/recovery, integrity, performance and concurrency configuration.

### 1.4 ER model quick reference

| Element | Meaning | Diagram convention (common Chen notation) |
|---|---|---|
| Entity | Distinguishable real-world object | Rectangle |
| Weak entity | Entity lacking a full key of its own | Double rectangle |
| Relationship | Association between entities | Diamond |
| Attribute | Property of an entity/relationship | Oval |
| Key attribute | Attribute identifying entity instances | Underlined |
| Multivalued attribute | Can have multiple values | Double oval |
| Derived attribute | Computed from other data | Dashed oval |
| Identifying relationship | Connects weak entity to owner | Double diamond |

**Cardinality constraints:** 1:1, 1:N, N:1, M:N. Participation can be total (every entity must participate) or partial.

**Keys:**
- Superkey: any attribute set uniquely identifying a row.
- Candidate key: minimal superkey.
- Primary key: chosen candidate key.
- Alternate key: candidate key not chosen as primary.
- Composite key: key with more than one attribute.
- Foreign key: attribute(s) referencing a candidate/primary key in another or the same relation.

**ER design checklist:** identify entities, attributes, keys, relationships, cardinalities, participation constraints, weak entities and multivalued/derived attributes. Avoid duplicating facts in multiple places.

### 1.5 Generalisation, specialisation and aggregation

- **Specialisation:** top-down split of a superclass into subclasses based on distinguishing characteristics.
- **Generalisation:** bottom-up combination of similar entity types into a superclass.
- **Disjoint constraint:** an entity belongs to at most one subclass; **overlap:** it may belong to multiple.
- **Total specialisation:** every superclass entity must belong to a subclass; **partial:** some may belong to none.
- **Aggregation:** treat a relationship set (and its participating entities) as a higher-level abstract entity so it can participate in another relationship.

### 1.6 ER-to-relational mapping rules

1. Strong entity: create a relation containing simple attributes; expand composite attributes; omit derived attributes unless materialised deliberately. Choose the entity key as primary key.
2. Weak entity: create a relation containing its attributes plus owner entity's primary key as foreign key; primary key is generally owner key + weak entity's partial key.
3. 1:1 relationship: add one side's primary key as a foreign key on the other side (prefer total-participation side when suitable), or create a separate relation if needed for attributes/constraints.
4. 1:N relationship: add the primary key of the “1” side as a foreign key on the “N” side; include relationship attributes on the N-side relation.
5. M:N relationship: create a new relation with primary keys of participating entities as foreign keys; their combination commonly forms the primary key; add relationship attributes.
6. Multivalued attribute: create a separate relation with owner key + attribute value.
7. N-ary relationship: create a relation with foreign keys for participating entities and relationship attributes; determine key from cardinality constraints.

### 1.7 Relational algebra reference

Let relations be `R` and `S`.

| Operator | Notation | Meaning |
|---|---|---|
| Selection | \(\sigma_{condition}(R)\) | Select rows satisfying condition |
| Projection | \(\pi_{A_1,\ldots,A_n}(R)\) | Select columns; duplicate tuples removed in classical relational algebra |
| Union | \(R\cup S\) | Tuples in either; union-compatible relations required |
| Difference | \(R-S\) | Tuples in R but not S; union-compatible required |
| Cartesian product | \(R\times S\) | Every tuple pair |
| Rename | \(\rho_{NewName}(R)\) | Rename relation/attributes |
| Intersection | \(R\cap S\) | Common tuples; derived from union/difference |
| Join | \(R\bowtie_{condition}S\) | Combine matching tuples |
| Natural join | \(R\bowtie S\) | Join on same-named attributes and remove duplicate join columns |
| Division | \(R\div S\) | “For all” queries, subject to schema |

Useful identities:
\[
\sigma_{c_1\land c_2}(R)=\sigma_{c_1}(\sigma_{c_2}(R))
\]
\[
\pi_A(\pi_{A\cup B}(R))=\pi_A(R)\quad(A\subseteq A\cup B)
\]
\[
R\bowtie S=\sigma_{join\ condition}(R\times S)
\]

### 1.8 Relational calculus

- **TRC:** variables range over tuples; a query describes tuples satisfying a predicate, e.g. \(\{t\mid P(t)\}\).
- **DRC:** variables range over attribute/domain values; a query describes value tuples satisfying a predicate, e.g. \(\{\langle x_1,\ldots,x_n\rangle\mid P(x_1,\ldots,x_n)\}\).
- Both are declarative/non-procedural: specify what result is required rather than a sequence of operations.
- A safe expression should be range-restricted (result variables limited by database predicates); avoid unrestricted domains/infinite result sets.

### 1.9 Common exam traps

- Schema is structure; instance is current data.
- Physical data independence concerns storage; logical data independence concerns conceptual design.
- Candidate key is minimal; superkey need not be.
- 1:N and M:N mapping rules are different.
- A multivalued attribute generally becomes a separate relation.
- Classical relational algebra uses set semantics; SQL usually uses bag/multiset semantics unless `DISTINCT` is specified.
- Natural join may match every same-named attribute, not just the one intended. Prefer explicit join conditions in SQL.

---

## Unit 2 — Database Design, Functional Dependencies and Normalisation

### 2.1 Syllabus coverage

- Functional dependencies (FDs).
- Armstrong's axioms.
- Attribute closure and FD-set closure.
- Minimal/canonical cover.
- 1NF, 2NF, 3NF and BCNF.
- Decomposition and desirable properties.
- 3NF synthesis and BCNF decomposition algorithms.
- 4NF and 5NF.

### 2.2 Functional dependencies

For relation schema \(R\), an FD \(X\to Y\) holds when any two tuples agreeing on attributes X must agree on attributes Y.

- **Trivial FD:** \(Y\subseteq X\).
- **Non-trivial:** \(Y\nsubseteq X\).
- **Completely non-trivial:** \(X\cap Y=\varnothing\).
- **Superkey:** X functionally determines all attributes of R.
- **Candidate key:** minimal superkey.
- **Prime attribute:** appears in at least one candidate key; non-prime does not.

### 2.3 Armstrong's axioms

1. Reflexivity: if \(Y\subseteq X\), then \(X\to Y\).
2. Augmentation: if \(X\to Y\), then \(XZ\to YZ\).
3. Transitivity: if \(X\to Y\) and \(Y\to Z\), then \(X\to Z\).

Useful derived rules:
- Union: \(X\to Y\) and \(X\to Z\Rightarrow X\to YZ\).
- Decomposition: \(X\to YZ\Rightarrow X\to Y\) and \(X\to Z\).
- Pseudotransitivity: \(X\to Y\) and \(WY\to Z\Rightarrow WX\to Z\).

### 2.4 Attribute closure algorithm

Closure of X under FD set F, written \(X_F^+\): all attributes functionally determined by X.

**Algorithm:**
1. Initialise `result = X`.
2. Scan every FD `A -> B` in F.
3. If `A` is a subset of `result`, add all attributes of B.
4. Repeat until a full scan adds nothing.
5. `X` is a superkey iff \(X_F^+=R\).
6. X is a candidate key iff it is a superkey and no proper subset is a superkey.

To test whether \(X\to Y\) follows from F: compute \(X_F^+\); it holds iff \(Y\subseteq X_F^+\).

**FD-set closure** \(F^+\): all FDs implied by F. Do not confuse this with one attribute-set closure.

### 2.5 Minimal/canonical cover

A minimal cover G is equivalent to F and has:
- Single attribute on the right side of every FD.
- No extraneous attribute on any left side.
- No redundant FD.

Procedure:
1. Split every RHS into singleton attributes.
2. For each FD `X -> A`, test each attribute B in X for extraneousness by checking whether A is still implied from `(X - {B})` under the relevant FD set.
3. Remove extraneous LHS attributes.
4. Test each FD for redundancy by removing it and checking whether it is implied by the remaining set.
5. Merge FDs with same LHS only if a combined cover is desired; keep single RHS for the strict minimal-cover form.

### 2.6 Normal forms

| Normal form | Core test | Memory cue |
|---|---|---|
| 1NF | Attribute values are atomic in the chosen model; no repeating groups | Atomic values |
| 2NF | 1NF and no non-prime attribute is partially dependent on any candidate key | No partial dependency |
| 3NF | For every non-trivial FD \(X\to A\), X is a superkey OR A is prime | Superkey or prime RHS |
| BCNF | For every non-trivial FD \(X\to Y\), X is a superkey | Every determinant is a superkey |
| 4NF | For every non-trivial MVD \(X\twoheadrightarrow Y\), X is a superkey | No non-key independent multivalued facts |
| 5NF/PJNF | Every non-trivial join dependency is implied by candidate keys | No non-key join dependency |

**2NF test workflow:** identify all candidate keys; identify prime/non-prime attributes; identify partial dependencies of non-prime attributes on proper subsets of candidate keys.

**3NF vs BCNF:** BCNF is stricter. A relation can be in 3NF but not BCNF when a determinant is not a superkey but the dependent attribute is prime.

### 2.7 Decomposition properties

- **Lossless (non-additive) join:** joining decomposed relations reconstructs exactly the original relation, without spurious tuples.
- For binary decomposition of R into R1 and R2 under F, a standard lossless condition is:
  \[
  (R_1\cap R_2)\to R_1\quad\text{or}\quad(R_1\cap R_2)\to R_2\quad\text{in }F^+.
  \]
- **Dependency preservation:** dependencies can be enforced on individual decomposed relations without joining them. If \(F_i\) is the projection of F onto Ri, preservation requires \((\cup_iF_i)^+=F^+\).
- A decomposition can be lossless but not dependency-preserving, or dependency-preserving but lossy; test both separately.

### 2.8 3NF synthesis algorithm

1. Compute a minimal cover Fmin.
2. For each FD with LHS X and RHS A (or grouped RHS), create relation schema X∪A.
3. Remove any schema contained in another schema.
4. If no created schema contains a candidate key of original R, add a relation containing a candidate key.
5. The standard synthesis algorithm is lossless and dependency-preserving under its assumptions.

### 2.9 BCNF decomposition algorithm

1. Start with relation R.
2. Find a non-trivial FD \(X\to Y\) that violates BCNF (X is not a superkey).
3. Decompose R into \(R_1=X\cup Y\) and \(R_2=R-(Y-X)\) (equivalently, use the common intersection X and preserve remaining attributes in R2).
4. Recurse on each resulting relation that violates BCNF.
5. BCNF decomposition is lossless, but dependency preservation is not guaranteed.

### 2.10 Multivalued dependencies and 4NF

- An MVD \(X\twoheadrightarrow Y\) says that for a fixed X, the set of Y values is independent of the remaining attributes Z = R−X−Y.
- Trivial MVD if Y⊆X or X∪Y=R.
- If X is not a superkey and a non-trivial MVD exists, 4NF is violated.
- Decompose R into XY and XZ for a non-trivial MVD \(X\twoheadrightarrow Y\) when appropriate.

### 2.11 Join dependencies and 5NF

A join dependency \(*\{R_1,R_2,\ldots,R_n\}\) states that every legal instance of R equals the natural join of its projections on the listed schemas. 5NF is concerned with non-trivial join dependencies not implied by candidate keys. Be prepared to explain why a decomposition needs three or more projections when pairwise binary dependencies are insufficient.

### 2.12 Common exam traps

- Do not identify a candidate key just by looking at attributes; compute closure and test minimality.
- Prime means part of at least one candidate key, not necessarily the primary key.
- 3NF and BCNF tests differ on prime RHS attributes.
- Lossless join and dependency preservation are different properties.
- A decomposition into BCNF may lose dependency preservation.
- 4NF concerns multivalued dependencies, not simply ordinary FDs.
- 5NF concerns join dependencies, not just “more normalisation”.

---

## Unit 3 — SQL and PL/SQL

### 3.1 Syllabus coverage

- SQL statements and clauses: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY.
- INSERT, DELETE, UPDATE, DROP and VIEW.
- Nested queries.
- NOT NULL, UNIQUE, CHECK, PRIMARY KEY and FOREIGN KEY constraints.
- PL/SQL variables, literals and data types.
- Benefits of PL/SQL.
- IF and iterative control: LOOP, WHILE, FOR and GOTO as listed in the syllabus.
- Functions, cursors, triggers and views.

### 3.2 SQL command families

| Family | Commands | Purpose |
|---|---|---|
| DDL | CREATE, ALTER, DROP, TRUNCATE | Define/change schema objects |
| DML | INSERT, UPDATE, DELETE, MERGE | Change table data |
| DQL (common teaching label) | SELECT | Retrieve data |
| DCL | GRANT, REVOKE | Permissions |
| TCL | COMMIT, ROLLBACK, SAVEPOINT | Transaction control |

Note: Different textbooks classify SELECT as DQL or include it under DML; follow the instructor's convention in exams.

### 3.3 SELECT query skeleton

```sql
SELECT [DISTINCT] column_list
FROM table_or_join
WHERE row_condition
GROUP BY grouping_columns
HAVING group_condition
ORDER BY sort_columns [ASC|DESC];
```

Logical processing model (simplified):

`FROM/JOIN then WHERE then GROUP BY then HAVING then SELECT then DISTINCT then ORDER BY then FETCH/LIMIT`.

- WHERE filters rows before grouping.
- HAVING filters groups after aggregation.
- ORDER BY sorts the result.
- DISTINCT removes duplicate selected rows.

### 3.4 Common predicates and operators

- Comparison: `=`, `<>`/`!=`, `<`, `<=`, `>`, `>=`.
- Logical: `AND`, `OR`, `NOT`.
- Range: `BETWEEN low AND high` (inclusive endpoints).
- Set: `IN (...)`, `NOT IN (...)`.
- Pattern: `LIKE 'A%'`, `%` matches any sequence, `_` one character.
- Null: `IS NULL`, `IS NOT NULL`; never test NULL with `= NULL`.
- Existence: `EXISTS (subquery)`, `NOT EXISTS`.
- Arithmetic: `+`, `-`, `*`, `/`.

### 3.5 Aggregation functions

| Function | Meaning | Important note |
|---|---|---|
| COUNT(*) | Counts rows | Includes rows with NULLs |
| COUNT(col) | Counts non-NULL values | Excludes NULL |
| COUNT(DISTINCT col) | Counts distinct non-NULL values | Dialect support generally broad |
| SUM(col) | Sum of non-NULL values | Usually numeric |
| AVG(col) | Mean of non-NULL values | NULL ignored |
| MIN/MAX | Minimum/maximum non-NULL value | Type-dependent ordering |

Example:
```sql
SELECT dept_id, AVG(salary) AS avg_salary
FROM Employee
WHERE status = 'ACTIVE'
GROUP BY dept_id
HAVING AVG(salary) > 50000
ORDER BY avg_salary DESC;
```

### 3.6 Joins

| Join | Result |
|---|---|
| INNER JOIN | Matching row pairs only |
| LEFT OUTER JOIN | All left rows plus matches; unmatched right columns NULL |
| RIGHT OUTER JOIN | All right rows plus matches |
| FULL OUTER JOIN | Matched and unmatched rows from both sides |
| CROSS JOIN | Cartesian product |
| SELF JOIN | Table joined to itself using aliases |
| NATURAL JOIN | Automatically joins all identically named columns; use cautiously |

Explicit join pattern:
```sql
SELECT e.emp_id, e.name, d.dept_name
FROM Employee e
JOIN Department d ON d.dept_id = e.dept_id;
```

### 3.7 Subqueries

- Scalar subquery: returns one value.
- Single-row subquery: use comparison operators where one row is guaranteed.
- Multi-row: use `IN`, `ANY`, `ALL` or `EXISTS` as appropriate.
- Correlated subquery: refers to an outer query column and is conceptually evaluated for each outer row.
- `EXISTS` tests whether at least one row is returned.
- Beware of `NOT IN` with NULL in the subquery; SQL three-valued logic can make the result UNKNOWN. `NOT EXISTS` is often safer.

Example: employees paid above their department average:
```sql
SELECT e.emp_id, e.name, e.salary
FROM Employee e
WHERE e.salary > (
  SELECT AVG(e2.salary)
  FROM Employee e2
  WHERE e2.dept_id = e.dept_id
);
```

### 3.8 Constraints

```sql
CREATE TABLE Department (
  dept_id   INTEGER PRIMARY KEY,
  dept_name VARCHAR(80) NOT NULL UNIQUE
);

CREATE TABLE Employee (
  emp_id    INTEGER PRIMARY KEY,
  name      VARCHAR(100) NOT NULL,
  salary    DECIMAL(10,2) CHECK (salary >= 0),
  dept_id   INTEGER,
  CONSTRAINT fk_emp_dept FOREIGN KEY (dept_id)
    REFERENCES Department(dept_id)
);
```

- PRIMARY KEY: unique and non-NULL; one primary-key constraint per table, may be composite.
- UNIQUE: forbids duplicate key values; NULL behaviour depends on DBMS.
- NOT NULL: disallows NULL.
- CHECK: requires condition to be TRUE or UNKNOWN depending on implementation semantics; verify DBMS behaviour for NULL.
- FOREIGN KEY: enforces referential integrity; actions may include RESTRICT/NO ACTION/CASCADE/SET NULL/SET DEFAULT subject to DBMS.

### 3.9 Data modification statements

```sql
INSERT INTO Student(id, name) VALUES (1, 'Asha');

UPDATE Student
SET name = 'Asha Khan'
WHERE id = 1;

DELETE FROM Student
WHERE id = 1;
```

**Exam trap:** Omitting WHERE from UPDATE or DELETE can affect every row.

### 3.10 Views

```sql
CREATE VIEW ActiveEmployees AS
SELECT emp_id, name, dept_id
FROM Employee
WHERE status = 'ACTIVE';
```

- A view is a stored query definition, presented as a virtual table in the common case.
- It can simplify queries, restrict visible columns/rows and provide logical abstraction.
- Updatability depends on the view definition and DBMS; grouped/aggregate/complex joins often restrict direct updates.
- `DROP VIEW view_name;` removes the view definition, not the underlying base tables.

### 3.11 PL/SQL block structure (Oracle-style)

```sql
DECLARE
  -- declarations: variables, constants, cursors
BEGIN
  -- executable statements
EXCEPTION
  -- exception handlers
END;
/
```

- DECLARE is optional; BEGIN and END are required.
- `/` is a client/tool command in common Oracle script environments, not a SQL statement itself.
- PL/SQL supports variables, constants, literals, records, collections, control flow, subprograms, cursors, exceptions and triggers.

### 3.12 PL/SQL variables and types

```sql
DECLARE
  v_count PLS_INTEGER := 0;
  v_name  VARCHAR2(100);
  v_sal   NUMBER(10,2);
  v_emp   Employee%ROWTYPE;
BEGIN
  SELECT COUNT(*) INTO v_count FROM Employee;
  DBMS_OUTPUT.PUT_LINE('Employees: ' || v_count);
END;
/
```

- `%TYPE`: inherit a column/variable type.
- `%ROWTYPE`: record matching a table or cursor row structure.
- Oracle-style examples use `VARCHAR2`, `NUMBER`, `PLS_INTEGER`; do not assume every type/syntax is accepted identically in MySQL/PostgreSQL.

### 3.13 Control structures

```sql
IF condition THEN
  statements;
ELSIF other_condition THEN
  statements;
ELSE
  statements;
END IF;
```

```sql
LOOP
  statements;
  EXIT WHEN condition;
END LOOP;
```

```sql
WHILE condition LOOP
  statements;
END LOOP;
```

```sql
FOR i IN 1..5 LOOP
  DBMS_OUTPUT.PUT_LINE(i);
END LOOP;
```

GOTO uses a label and should be covered because it is listed in the supplied syllabus, but prefer structured control flow in good programming practice.

### 3.14 Cursors

- Implicit cursor: managed automatically for SQL statements.
- Explicit cursor: programmer declares and controls multi-row query processing.
- Lifecycle: DECLARE then OPEN then FETCH (repeat) then CLOSE.

```sql
DECLARE
  CURSOR c_emp IS SELECT emp_id, name FROM Employee;
  v_id Employee.emp_id%TYPE;
  v_name Employee.name%TYPE;
BEGIN
  OPEN c_emp;
  LOOP
    FETCH c_emp INTO v_id, v_name;
    EXIT WHEN c_emp%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(v_id || ' ' || v_name);
  END LOOP;
  CLOSE c_emp;
END;
/
```

Cursor attributes (Oracle): `%FOUND`, `%NOTFOUND`, `%ISOPEN`, `%ROWCOUNT`.

### 3.15 Functions and triggers

- Function: named PL/SQL subprogram that returns a value using `RETURN`.
- Trigger: stored program automatically executed in response to an event such as INSERT/UPDATE/DELETE or a database/system event.
- Trigger timing may be BEFORE/AFTER/INSTEAD OF; level may be statement-level or row-level depending on DBMS.
- Use triggers carefully: hidden side effects can complicate debugging and transaction behaviour.

### 3.16 Common exam traps

- WHERE filters rows; HAVING filters groups.
- COUNT(*) counts rows; COUNT(column) ignores NULL.
- SQL NULL is not equal to anything, including another NULL; use IS NULL.
- Use aliases for self/correlated joins.
- Be careful with NOT IN and NULL.
- DISTINCT applies to the full selected row combination.
- `DROP TABLE` and `DROP VIEW` are different.
- PL/SQL syntax is DBMS-specific; the supplied lab environment may differ from Oracle syntax. Keep an Oracle/PLSQL sheet separate from MySQL SQL syntax.

---

## Unit 4 — Transaction Management

### 4.1 Syllabus coverage

- Transaction processing.
- ACID properties.
- Concurrency control.
- Locking-based protocols.
- Timestamp-based protocols.

### 4.2 Transaction and ACID

A transaction is a logical unit of database work, typically ending with COMMIT or ROLLBACK.

| Property | Meaning | Example concern |
|---|---|---|
| Atomicity | All operations happen or none do | Debit and credit both succeed or neither |
| Consistency | A transaction preserves declared constraints/invariants | Balance rule remains valid |
| Isolation | Concurrent execution behaves according to an isolation/serialisability guarantee | Avoid unsafe interference |
| Durability | Committed changes survive failures according to the system's guarantees | Recovery after crash |

### 4.3 Transaction states (common model)

Active then Partially committed then Committed; on error: Active then Failed then Aborted. A transaction may restart after abort depending on policy. A committed transaction is not rolled back by a normal transaction rollback.

### 4.4 Schedule terminology

- Schedule: order of operations from multiple transactions while preserving each transaction's internal order.
- Serial schedule: transactions execute one after another without interleaving.
- Serializable schedule: concurrent schedule equivalent to some serial schedule.
- Conflict: two operations from different transactions on same data item, with at least one write.
- Conflicting pairs: read-write, write-read, write-write; read-read does not conflict.
- Conflict serialisability: precedence graph is acyclic.
- Precedence graph: node per transaction; edge TithenTj when an operation of Ti precedes and conflicts with an operation of Tj on the same item.

**Conflict-serialisability test:** build graph; if acyclic, topological order gives equivalent serial order; cycle means not conflict-serialisable.

### 4.5 Locks and lock compatibility

- Shared (S): read permission; multiple S locks may coexist.
- Exclusive (X): write permission; conflicts with both S and X from another transaction.

| Requested / held | S | X |
|---|---:|---:|
| S | Compatible | Not compatible |
| X | Not compatible | Not compatible |

### 4.6 Two-phase locking (2PL)

- Growing phase: transaction may acquire locks, cannot release.
- Shrinking phase: transaction may release locks, cannot acquire new ones.
- Basic 2PL guarantees conflict serialisability.
- Strict 2PL holds all X locks until commit/abort; simplifies recovery and prevents cascading aborts under the usual model.
- Rigorous 2PL holds both S and X locks until commit/abort.
- Conservative/static 2PL obtains all required locks before starting; avoids deadlock but requires advance knowledge and may reduce concurrency.

### 4.7 Deadlock and starvation

- Deadlock: transactions wait cyclically for locks.
- Wait-for graph: edge TithenTj when Ti waits for a lock held by Tj; cycle indicates deadlock in the standard single-instance lock model.
- Prevention/handling: ordering resources, wait-die, wound-wait, timeout, detection and victim rollback.
- Starvation: a transaction waits indefinitely due to repeated priority/selection; use fair scheduling or aging.

### 4.8 Timestamp-ordering protocol

Each transaction Ti receives unique timestamp TS(Ti). Each item X maintains:
- `read_TS(X)`: greatest timestamp of a transaction successfully reading X.
- `write_TS(X)`: greatest timestamp of a transaction successfully writing X.

For read(X) by Ti:
1. If TS(Ti) < write_TS(X), reject/abort Ti because a newer transaction already wrote X.
2. Otherwise allow read and set `read_TS(X)=max(read_TS(X), TS(Ti))`.

For write(X) by Ti:
1. If TS(Ti) < read_TS(X), reject/abort Ti.
2. If TS(Ti) < write_TS(X), reject/abort Ti under the basic timestamp-ordering rule (Thomas write rule may ignore obsolete writes in a modified protocol).
3. Otherwise allow write and set `write_TS(X)=TS(Ti)`.

**Thomas write rule:** if TS(Ti) < write_TS(X), an obsolete write can be ignored rather than aborting, under the modified rule. Do not confuse this with basic timestamp ordering.

### 4.9 Common exam traps

- Conflict serialisability is tested by an acyclic precedence graph.
- Read-read does not create a conflict edge.
- 2PL's growing and shrinking phases cannot be interleaved.
- Strict 2PL specifically retains exclusive locks until completion; rigorous 2PL retains both shared and exclusive locks.
- Deadlock is not the same as starvation.
- Timestamp ordering uses both read_TS and write_TS tests; check operation type carefully.

---

## Unit 5 — Advanced Databases

### 5.1 Syllabus coverage

- NoSQL databases.
- Cloud-based DBMS.
- Open-source databases.
- Distributed databases.
- Object-oriented databases.
- Mobile databases.
- Multimedia databases.
- Open issues and uncertainties.

### 5.2 NoSQL reference

“NoSQL” is an umbrella term for non-relational data models and/or systems designed for particular scale, flexibility or access patterns. The categories below are common families; individual products may overlap.

| Family | Data model | Typical use | Main design concern |
|---|---|---|---|
| Key-value | Key then value | Cache, session, lookup | Key design and access pattern |
| Document | JSON/BSON-like documents | Catalogues, flexible records | Schema evolution and indexing |
| Wide-column | Column families/partitioned rows | Large-scale distributed workloads | Partition keys and query model |
| Graph | Vertices and edges | Relationships and traversal | Graph modelling/query cost |

Relational DBMS are often preferable for strongly structured data, rich joins and transactional consistency requirements. NoSQL is not automatically faster or better; choose based on data model, consistency, access patterns, scale and operations.

### 5.3 Distributed database concepts

- Data fragmentation: horizontal (rows), vertical (columns) or hybrid.
- Replication: maintain copies at multiple nodes for availability/latency, with consistency and coordination costs.
- Transparency: location, fragmentation and replication transparency aim to hide distribution details from users.
- Distributed transaction: transaction spanning multiple nodes; coordination/recovery are more complex.
- CAP theorem (informal exam shorthand): during a network partition, a distributed system cannot guarantee both strong consistency and availability for all requests. CAP does not say “pick any two at all times”; its statement is about partition behaviour.
- Partitioning/sharding distributes data across nodes; a poor partition key can create hotspots.

### 5.4 Cloud-based DBMS

- Database-as-a-Service (DBaaS): provider manages much of provisioning, patching, backups and scaling.
- Benefits: elastic resources, managed operations, availability options, reduced infrastructure administration.
- Concerns: vendor lock-in, cost control, latency, data residency, access control, backup/restore testing and shared-responsibility security.

### 5.5 Open-source DBMS

Examples include PostgreSQL, MySQL/MariaDB and SQLite; product choice depends on licence, features, compatibility, support, deployment, performance and governance. “Open source” describes licensing/development model, not absence of administration cost or guarantees.

### 5.6 Object-oriented, mobile and multimedia databases

- **Object-oriented DBMS:** persists objects with identity, types/classes, encapsulation, inheritance and relationships; object-relational systems combine relational tables with richer types.
- **Mobile databases:** support intermittent connectivity, local storage, synchronisation, conflict resolution, limited device resources and security/privacy.
- **Multimedia databases:** manage images, audio, video and related metadata; challenges include large objects, compression, indexing, similarity search, streaming and content retrieval.

### 5.7 Open issues and design checklist

When comparing database approaches, ask:
- What data model and query patterns are required?
- What are transaction and consistency requirements?
- What availability/latency targets exist?
- How are replication and partitioning handled?
- What is the backup, recovery and disaster strategy?
- How is access control, encryption and auditing managed?
- What are cost, licensing, portability and vendor-lock-in implications?
- How are data quality, privacy and governance addressed?

### 5.8 Common exam traps

- NoSQL is not one single data model.
- Distributed does not automatically mean cloud; cloud systems need not be distributed from the user's perspective.
- Replication improves availability/read locality but introduces consistency and coordination concerns.
- A DBMS being open source does not make it cost-free to operate.
- Mobile databases must address offline synchronisation and conflicts.
- Multimedia DBMS must manage both media objects and descriptive metadata.

---

# 7. LINEAR PROGRAMMING — SEPARATE EXAM TRACK + NPTEL EXTENDED CHEAT SHEETS

**Source:** Seven lecture-note PDFs by Rajat Mittal, IIT Kanpur. Use these as the primary source for the extended five-unit structure. The JMI Discrete Mathematics Unit 5 remains the separate university syllabus scope for LPP fundamentals; the extended NPTEL content is clearly labelled as enrichment unless the department confirms it is examinable.

## Unit 1 — Foundations of Linear Programming and Linear Algebra (Lecture 1)

### 7.1 Syllabus coverage

- Mathematical optimisation and constrained optimisation.
- Decision variables, objective function, constraints, feasible solution/region, optimal solution.
- Linear programming and resource-allocation formulation.
- Standard form and equivalent transformations.
- Linear algebra foundations: linear systems, vector spaces, linear combinations, span, linear independence, basis, dimension, matrices, kernel, image, rank and solving Ax=b.

### 7.2 General LP formulation

A common maximisation form:
\[
\begin{aligned}
\max\quad & c^T x\\
\text{s.t.}\quad & Ax\le b,\\
&x\ge0.
\end{aligned}
\]
A common standard-form minimisation form from the lecture:
\[
\min c^Tx\quad\text{s.t. }Ax=b,\;x\ge0.
\]
The exact standard form depends on the course convention. An LP has a linear objective and linear equality/inequality constraints.

### 7.3 Modelling workflow

1. Define decision variables with units.
2. Translate the goal into a linear objective.
3. Translate resource/requirement limits into linear constraints.
4. Add sign/domain restrictions.
5. Check units, direction of inequalities and omitted constraints.
6. Interpret the resulting solution in the original context.

### 7.4 Feasibility and optimality

- Feasible solution satisfies every constraint.
- Feasible region is the set of all feasible vectors.
- Infeasible LP: no feasible point.
- Bounded optimum: finite best objective value is attained.
- Unbounded LP: objective can improve without finite bound along feasible points.
- Multiple optima can exist if the objective is parallel to an optimal face/edge.
- An LP can be feasible but have an unbounded objective.

### 7.5 Linear algebra quick reference

For system \(Ax=b\):
- Consistent iff rank(A) = rank([A|b]).
- Unique solution iff consistent and rank(A)=number of variables n.
- Infinite solutions iff consistent and rank(A)<n.
- Free-variable count (for a consistent system) = n−rank(A).
- Null space/kernel: \(\ker(A)=\{x:Ax=0\}\).
- Image/column space: all vectors Ax.
- Rank: dimension of column space (equals row-space dimension).
- A set of n vectors in \(\mathbb R^n\) is a basis iff linearly independent iff it spans \(\mathbb R^n\).

### 7.6 Standard conversions (check convention)

- Constraint \(a^Tx\le b\): add nonnegative slack s: \(a^Tx+s=b\).
- Constraint \(a^Tx\ge b\): subtract nonnegative surplus s: \(a^Tx-s=b\); an initial artificial variable may be needed for a chosen simplex start.
- Equality: retain as equality; artificial variable may be introduced by Phase I/Big-M where required.
- Unrestricted variable x: represent \(x=x^+-x^-\), with \(x^+,x^-\ge0\).
- Minimisation/maximisation can be converted by multiplying objective by −1, while preserving constraints and interpretation carefully.

### 7.7 Worked pattern — resource allocation

Let x and y be quantities of two products. Profit is p1 x + p2 y. Each resource i gives a capacity constraint \(a_{i1}x+a_{i2}y\le b_i\). Add \(x,y\ge0\). For a two-variable LP, graph each boundary, shade the intersection of half-planes, list corner points and evaluate the objective at every feasible vertex (provided the feasible polygon is bounded; check unboundedness/infeasibility first).

### 7.8 Common exam traps

- Define units for each variable.
- Do not confuse objective coefficients with constraint coefficients.
- Do not omit non-negativity/domain restrictions.
- A feasible point is not necessarily optimal.
- A linear-programming optimum may occur at multiple points.
- Standard-form conventions vary; state which form is being used.

---

## Unit 2 — Convex Geometry and Simplex Method (Lecture 2)

### 7.9 Convex combinations and sets

- Linear combination: \(y=\sum_i\alpha_i x_i\), coefficients unrestricted.
- Conic combination: \(\alpha_i\ge0\).
- Affine combination: \(\sum_i\alpha_i=1\), coefficients may be negative.
- Convex combination: \(\alpha_i\ge0\) and \(\sum_i\alpha_i=1\).
- Convex set: contains the full line segment between any two of its points.
- Convex hull: smallest convex set containing a given set; equivalently all finite convex combinations of its points.
- Affine set: contains the full line through any two of its points.
- Hyperplane: \(a^Tx=b\); half-space: \(a^Tx\le b\) or \(a^Tx\ge b\).
- A polyhedron is an intersection of finitely many half-spaces; a polytope is a bounded polyhedron (standard convention).

### 7.10 Feasible region facts

- The feasible region of an LP is convex because it is an intersection of linear half-spaces/equalities.
- A basic feasible solution corresponds geometrically to an extreme point/vertex under the usual standard-form assumptions.
- If a feasible LP has a finite optimum, at least one optimal extreme point exists under standard LP assumptions; multiple optima may form an optimal face.
- Do not assume every optimal point is a vertex; a whole edge/face can be optimal.

### 7.11 Standard-form basis and BFS

For \(Ax=b, x\ge0\), with A of rank m and n variables:
- Choose m linearly independent columns as a basis B.
- Set non-basic variables to zero.
- Solve \(Bx_B=b\).
- If \(x_B\ge0\), the solution is a basic feasible solution.
- Degenerate BFS: at least one basic variable is zero.

### 7.12 Simplex method — high-level procedure

1. Obtain a feasible initial BFS (slack-variable start, Phase I or another valid method).
2. Compute reduced costs using the chosen tableau convention.
3. For a maximisation tableau using `Cj−Zj`, choose an improving positive reduced cost as entering column (if using this convention).
4. Apply minimum positive ratio test \(b_i/a_{ij}\) for rows with positive pivot-column coefficient to select leaving variable.
5. Pivot: divide pivot row by pivot element; eliminate other entries in pivot column.
6. Repeat until no improving reduced costs remain.
7. If no valid leaving row exists for an improving entering column, the objective is unbounded in that direction.

**Important:** Some books use `Zj−Cj` and reversed signs. Always state the tableau convention. Do not mix the entering-variable rule from one convention with the other.

### 7.13 Simplex terms and checks

- Entering variable: non-basic variable chosen to enter basis.
- Leaving variable: basic variable removed from basis by ratio test.
- Pivot element: intersection of entering column and leaving row.
- Degeneracy: a basic variable is zero; a pivot may not improve objective.
- Cycling: theoretically possible under poor pivot choices; anti-cycling rules (e.g. Bland's rule) can prevent cycling.
- Alternate optimum: a non-basic variable has zero reduced cost at an optimal tableau under the usual convention.
- Unboundedness: an improving entering column has no eligible positive coefficient for ratio test (for a maximisation tableau with the stated convention).
- Infeasibility: no feasible solution; Phase I is used to test/construct feasibility in common simplex implementations.

### 7.14 Common exam traps

- Convex combination requires non-negative coefficients summing to one.
- Affine combinations only require coefficients to sum to one.
- A basic solution need not be feasible; non-negativity must be checked.
- Ratio test only uses eligible positive entries in the pivot column for the chosen standard tableau.
- Do not confuse unboundedness with infeasibility.
- Mention tableau sign convention before identifying entering variable.

---

## Unit 3 — Duality Theory and Minimax Theorem (Lectures 3–4)

### 7.15 Hyperplane separation and Farkas' lemma

- A hyperplane \(a^Tx=b\) separates sets C and D when all points of one set lie on one side and all points of the other lie on the opposite side.
- Strict separation uses strict inequalities; it requires stronger conditions than non-strict separation.
- Farkas' lemma is an alternative theorem: exactly one of two incompatible systems has a solution (the precise statement depends on sign convention).

One common Farkas form:
Exactly one of the following holds:
\[
Ax=b,\;x\ge0
\]
or
\[
A^Ty\ge0,\;b^Ty<0.
\]
Other texts present equivalent sign-reversed forms. Do not mix conventions.

### 7.16 Primal-dual pair (canonical forms)

For primal maximisation:
\[
\begin{aligned}
\max\quad &c^Tx\\
\text{s.t. }&Ax\le b,\\
&x\ge0,
\end{aligned}
\]
with b unrestricted in sign only where feasible and the usual nonnegative RHS assumption for the standard textbook pair, the dual is:
\[
\begin{aligned}
\min\quad &b^Ty\\
\text{s.t. }&A^Ty\ge c,\\
&y\ge0.
\end{aligned}
\]

**Rules for this canonical pair:**
- One primal constraint corresponds to one dual variable.
- One primal variable corresponds to one dual constraint.
- Primal max with ≤ constraints and x≥0 corresponds to dual min with ≥ constraints and y≥0.
- Aij becomes Aji (transpose).
- RHS b becomes dual objective coefficients.
- Primal objective coefficients c become dual RHS.

General sign/free-variable rules depend on whether a primal constraint is ≤, ≥ or = and whether a primal variable is nonnegative, nonpositive or unrestricted. Always derive using the stated convention/table rather than memorising one pair for every case.

### 7.17 Weak and strong duality

- Weak duality: for any primal feasible x and dual feasible y, \(c^Tx\le b^Ty\) in the canonical max/min pair.
- Weak duality supplies an upper bound on the primal max objective and a lower bound on the dual min objective.
- Strong duality: if the relevant primal and dual feasible/finite optimum conditions hold, their optimal objective values are equal: \(c^Tx^*=b^Ty^*\).
- If one side is unbounded, the other cannot have a feasible finite optimum in the corresponding standard setting.

### 7.18 Complementary slackness

For canonical primal max / dual min:
\[
y_i\left(b_i-(Ax)_i\right)=0\quad\forall i
\]
\[
x_j\left((A^Ty)_j-c_j\right)=0\quad\forall j.
\]
Interpretation:
- If dual variable y_i > 0, the corresponding primal constraint is tight.
- If primal constraint has positive slack, corresponding y_i = 0.
- If primal variable x_j > 0, the corresponding dual constraint is tight.
- If dual constraint has positive surplus, corresponding x_j = 0.
Complementary slackness plus primal/dual feasibility characterises optimality under standard LP conditions.

### 7.19 Minimax and two-player zero-sum games

- Payoff matrix A: row player maximises; column player minimises (this convention must be stated).
- Pure strategy selects one row/column deterministically.
- Mixed strategy is a probability vector: \(x\ge0,\;\mathbf1^Tx=1\).
- Expected payoff when row player uses x and column player uses y:
  \[
  E[x,y]=x^TAy.
  \]
- Row player's security-level LP:
  \[
  \max v\quad\text{s.t. }A^Tx\ge v\mathbf1,\;\mathbf1^Tx=1,\;x\ge0.
  \]
  Here each column strategy gives the row player at least v.
- Column player's minimisation form:
  \[
  \min w\quad\text{s.t. }Ay\le w\mathbf1,\;\mathbf1^Ty=1,\;y\ge0.
  \]
- Von Neumann minimax theorem for finite two-player zero-sum games:
  \[
  \max_x\min_y x^TAy=\min_y\max_x x^TAy.
  \]
The equilibrium/security values coincide. For non-zero-sum games, the simple zero-sum minimax formulation does not apply unchanged.

### 7.20 Common exam traps

- Always state which player maximises and which minimises the payoff.
- Mixed-strategy probabilities must sum to one and be nonnegative.
- `A` and `A^T` placement depends on whether row or column strategy is represented by x; keep dimensions consistent.
- Weak duality gives inequality; strong duality gives equality at optimality under its conditions.
- Complementary slackness is used alongside primal and dual feasibility.
- Farkas statements have multiple sign conventions; quote one complete version.

---

## Unit 4 — Maximum Flow, Minimum Cut, Set Cover and LP Relaxation (Lectures 5–6)

### 7.21 Maximum flow model

Directed network G=(V,E), source s, sink t, edge capacity \(c_{uv}\ge0\). Flow \(f_{uv}\) obeys:
\[
0\le f_{uv}\le c_{uv}\quad\forall (u,v)\in E.
\]
For every intermediate vertex v:
\[
\sum_{u:(u,v)\in E}f_{uv}=\sum_{w:(v,w)\in E}f_{vw}.
\]
Maximise total flow out of s (equivalently total flow into t, under conservation):
\[
\max\sum_{u:(s,u)\in E}f_{su}-\sum_{u:(u,s)\in E}f_{us}.
\]

### 7.22 Cut capacity and max-flow/min-cut

- An s–t cut is a partition (S, V\S) with s∈S and t∉S.
- Cut capacity is sum of capacities of edges directed from S to V\S:
  \[
  c(S,\bar S)=\sum_{u\in S,v\in\bar S,(u,v)\in E}c_{uv}.
  \]
- Do not include edges from V\S back into S in the cut capacity.
- Max-flow/min-cut theorem: maximum s–t flow value equals minimum s–t cut capacity for a capacitated directed network.
- Any feasible flow value ≤ any cut capacity (weak duality interpretation); equality proves both optimal.

### 7.23 Residual network / augmenting path

- Residual capacity of forward edge: \(c_f(u,v)=c(u,v)-f(u,v)\).
- Reverse residual edge allows cancellation of previously sent flow, with residual capacity corresponding to current flow (for a standard residual graph).
- Augmenting path: s-to-t path using positive residual capacities.
- Bottleneck residual capacity:
  \[
  \Delta=\min_{e\in P}c_f(e).
  \]
- Augment flow by Δ along forward edges and subtract Δ along reverse edges.
- Repeat until no s–t augmenting path remains; the reachable vertices from s in final residual graph define a minimum cut in the standard max-flow setting.
- Ford–Fulkerson with integer capacities and augmenting-path choices terminates with integral flow; runtime depends on path-selection strategy and capacity magnitudes. Edmonds–Karp uses BFS and is O(VE²).

### 7.24 Set cover

Given universe U and subsets S1,…,Sn, choose minimum number/cost of subsets whose union covers U.

Binary variable xi=1 if set Si is selected, otherwise 0.

Weighted ILP:
\[
\begin{aligned}
\min\quad &\sum_{i=1}^{n}w_ix_i\\
\text{s.t. }&\sum_{i:u\in S_i}x_i\ge1\quad\forall u\in U,\\
&x_i\in\{0,1\}.
\end{aligned}
\]
Unweighted version: set every wi=1, so minimise \(\sum_i x_i\).

### 7.25 LP relaxation

Replace integrality by:
\[
0\le x_i\le1.
\]
- LP feasible region contains every ILP feasible solution, so for minimisation \(OPT_{LP}\le OPT_{ILP}\).
- LP value is a lower bound on integer optimum for minimisation.
- The gap between ILP and LP optimum is the integrality gap (for the given instance/objective).
- A fractional solution must be rounded to produce a valid set cover; rounding must preserve coverage and have a provable approximation guarantee.

### 7.26 Randomised rounding intuition

- Solve LP relaxation for fractional x_i.
- Select sets randomly with probabilities related to x_i and a logarithmic scaling factor.
- Use a union-bound/probability argument to control uncovered elements.
- Repetition/repair can ensure coverage; exact procedure and constants must follow the supplied lecture's version.
- The supplied note discusses a Lovasz-style O(log |U|) approximation for set cover.
- Markov's inequality: for nonnegative random variable X and a>0,
  \[
  P(X\ge a)\le\frac{E[X]}{a}.
  \]
- Do not claim a rounding threshold or constant factor without specifying the algorithm's assumptions.

### 7.27 Primal-dual method snapshot

- Construct primal/dual pair.
- Maintain feasibility or controlled relaxation of one/both solutions.
- Increase/decrease dual variables until constraints become tight.
- Use tight constraints to build/adjust a primal solution.
- Use weak duality and complementary slackness to compare objective values and establish optimality/approximation.
The lecture's concrete example is max-flow/min-cut; preserve the exact algorithmic sequence from the PDF in detailed notes.

### 7.28 Common exam traps

- Flow conservation excludes source and sink in the usual intermediate-vertex equations.
- Cut capacity counts only Sthencomplement directed edges.
- A cut is a partition with source and sink on opposite sides.
- Reverse residual edges are needed to reroute/cancel flow.
- LP relaxation of minimisation is a lower bound; direction reverses for maximisation.
- Fractional set-cover solution is not itself an integer cover.
- A valid approximation algorithm needs a guarantee, not just a plausible rounding rule.

---

## Unit 5 — Applications of LP in Machine Learning (Lecture 7)

### 7.29 Supervised learning setup

- Training data: input-output pairs \((x_i,y_i)\).
- Assume a class of functions (for example, linear) parameterised by w; estimate parameters from data.
- For a linear function on k features, \(f(x)=w^Tx+b\).
- More data can help estimate a function, but performance also depends on model assumptions, data quality and generalisation.

### 7.30 Linear regression with L1 error

For observations \((x_i,y_i)\), prediction \(w^Tx_i+b\), absolute error:
\[
|w^Tx_i+b-y_i|.
\]
Minimise total absolute error:
\[
\min_{w,b}\sum_{i=1}^{m}|w^Tx_i+b-y_i|.
\]
Linearise absolute values using nonnegative auxiliary variables t_i:
\[
\begin{aligned}
\min\quad &\sum_{i=1}^m t_i\\
\text{s.t. }&w^Tx_i+b-y_i\le t_i,\\
&-(w^Tx_i+b-y_i)\le t_i,\\
&t_i\ge0.
\end{aligned}
\]
Equivalently, both inequalities ensure \(t_i\ge|w^Tx_i+b-y_i|\). If w,b are unrestricted, represent each unrestricted component as positive minus negative variables for a standard nonnegative-variable LP.

### 7.31 L1 vs L2 error

- L1 absolute error: \(MAE=\frac1m\sum_i|y_i-\hat y_i|\). It can be linearised into an LP with auxiliary variables.
- Squared error: \(MSE=\frac1m\sum_i(y_i-\hat y_i)^2\); minimising it is a quadratic optimisation problem, not a standard LP.
- RMSE: \(\sqrt{MSE}\), has the same minimiser as MSE for nonnegative MSE but is not itself a linear objective.
- Do not say the NPTEL L1 regression LP minimises RMSE. The lecture's central LP regression objective is absolute/L1 error.

### 7.32 Linear classifiers

- A linear classifier uses a separating hyperplane:
  \[
  w^Tx+b=0.
  \]
- For labels y_i∈{−1,+1}, perfect separation constraints can be written:
  \[
  y_i(w^Tx_i+b)\ge1\quad\forall i,
  \]
  when the data are linearly separable and the scaling convention is chosen.
- Max-margin SVM commonly minimises a quadratic norm, so it is not the same as the simple LP feasibility formulation. Do not conflate them.
- Higher-degree/nonlinear decision boundaries can sometimes be represented as linear separators in a transformed higher-dimensional feature space, depending on the chosen feature map.

### 7.33 Common exam traps

- Clearly distinguish feature vector, label/target and learned parameters.
- An LP requires a linear objective and linear constraints.
- Absolute value can be linearised with an auxiliary variable and two inequalities.
- Squared error is quadratic, not linear.
- A separating hyperplane requires a consistent sign convention for labels.
- Higher-dimensional feature mapping can make a nonlinear boundary in original space correspond to a linear boundary in feature space.

---

# 8. SUBJECT-WIDE RAPID REVISION INDEX

This is a navigational index, not a replacement for the unit sheets.

| Subject | Units | Best rapid-revision assets |
|---|---:|---|
| Engineering Mathematics III — ASB-301 | 5 working units | Transform pairs, vector-calculus identities, multiple-integral elements, difference-equation/Z pairs, higher-calculus definitions |
| Universal Human Values — ASM-301 | 5 working units | Value-framework map, self/body distinction, relationship values, four orders, professional-ethics checklist |
| Discrete Mathematics — DSC-301 | 5 | Algebraic-structure comparison, graph formulas, recurrence methods, counting principles, LPP workflow |
| Data Structure — DSC-302 | 5 | Complexity table, address formulas, stack/queue operations, linked-list patterns, tree properties, graph traversal/MST/sorting |
| Digital Logic Design — DSC-303 | 5 | Number-system conversions, Boolean laws, K-map rules, adder equations, MUX/DEMUX, flip-flop tables, counter formulas |
| DBMS — DSC-304 | 5 | ER mapping rules, relational algebra, FD/closure/normal-form tests, SQL syntax, ACID/locking/timestamp rules, database-family comparison |
| LPP separate paper + NPTEL extended course | JMI Discrete Unit 5 + 5 extended units | LP formulation, graphical method, simplex, primal/dual, complementary slackness, minimax, max-flow/min-cut, set cover, L1 regression |

---

# 9. COVERAGE AUDIT AND SOURCE STATUS

## 9.1 CSE-DS syllabus topics represented in this pack

- [x] DSC-301 Discrete Mathematics — all five units represented.
- [x] DSC-302 Data Structure — all five units represented.
- [x] DSC-303 Digital Logic Design — all five units represented.
- [x] DSC-304 Database Management Systems — all five units represented.
- [x] ASB-301 Engineering Mathematics III — five-unit JMI FET 2025 cross-branch working structure represented; CSE-DS-specific detailed unit outline not present in the uploaded CSE-DS course-structure PDF. Unit mapping requires departmental confirmation.
- [x] ASM-301 Universal Human Values — five-unit JMI FET cross-branch outline represented; CSE-DS-specific detailed unit outline not present in uploaded CSE-DS course-structure PDF. Confirm with department.
- [x] Separate LPP examination track represented, with a JMI Unit 5 cross-link and seven-lecture NPTEL extended track.

## 9.2 Important caveats

1. **Mathematics III version:** The uploaded CSE-DS course-structure document confirms ASB-301 but does not provide its detailed unit outline. This pack's five-unit detailed working outline uses a 2025 JMI FET cross-branch ASB-301 syllabus. User-provided study context supports Fourier in Unit III and Z-transform in Unit IV. Obtain the CSE-DS-specific detailed ASB-301 handout before treating Units I, II and V as final.
2. **Older Mathematics variant:** An older JMI FET ASB-301 syllabus organises Units I, II and V differently, with vector calculus, linear algebra and probability/statistics respectively. Do not merge it with the 2025 outline without official confirmation.
3. **UHV version:** The detailed five-unit ASM-301 content is based on a JMI FET common-course outline from another engineering branch. The CSE-DS document confirms code/title, not detailed unit text. Confirm the exact CSE-DS handout.
4. **LPP exam scope:** The supplied date sheet lists a separate LPP paper; the CSE-DS curriculum's Discrete Mathematics Unit 5 also contains LPP fundamentals. The NPTEL extension goes substantially beyond those JMI Unit 5 points. Use labels that distinguish official JMI scope from NPTEL enrichment.
5. **Practical sheets:** This book is for theory subjects and LPP. Lab manuals/experiment lists should be used to create separate experiment-wise practical quick references; do not invent official experiments from theory syllabus alone.
6. **Formula convention:** Fourier and Z/Laplace transform definitions differ across books. This pack states conventions in each relevant unit; use the instructor's convention for exam answers.
7. **Verification:** The sheets are carefully structured revision aids, not a substitute for full notes, proofs, derivations or solving numerical problems. Antigravity should preserve source/version metadata and should not label unverified variants as official CSE-DS syllabus.

## 9.3 Recommended import behaviour for Antigravity

- Use the section headings and unit headings as canonical import boundaries.
- Preserve subject codes, unit labels, source caveats and formula notation.
- Store each formula and definition as structured content, not as one enormous plain-text blob.
- Render all displayed mathematics with MathJax or KaTeX.
- Run a source-to-topic coverage audit before publishing.
- Keep the Mathematics III and UHV version warnings visible in the admin/content review interface until a CSE-DS-specific syllabus is supplied.
- Maintain distinct JMI LPP and NPTEL extended-LPP labels.
- Do not silently omit content that does not fit a compact card; use expandable complete sheets.


# 10. SOURCE AND PROVENANCE MAP

## University curriculum sources

- **CSE-DS Semester III course structure:** user-provided file `cs_fet_comp_engg_btech_Data_Sciences_2025 (1).pdf`. This is the source for the official CSE-DS course codes/titles and detailed syllabus statements for DSC-301, DSC-302, DSC-303 and DSC-304.
- **Engineering Mathematics III (ASB-301) detailed working outline:** JMI Faculty of Engineering & Technology, 2025 Mechanical Engineering syllabus, ASB-301 section. This is a JMI cross-branch reference, not a confirmed CSE-DS-specific unit handout: https://jmi.ac.in/upload/programme/cs_fet_me_btech_mechanical_2025september4.pdf
- **Universal Human Values (ASM-301) detailed working outline:** JMI Faculty of Engineering & Technology, 2024–25 Electrical and Computer Engineering syllabus, ASM-301 section. This is a cross-branch common-course reference, not a confirmed CSE-DS-specific unit handout: https://www.jmi.ac.in/upload/programme/syllabus_fet_ece_btech_2024-25.pdf

## NPTEL LPP source documents supplied by the user

- `Week 1 and Week 2 Lecture Notes.pdf` — Lecture 1.
- `Week 3 and Week 4 Lecture Notes.pdf` — Lecture 2.
- `Week 5 Lecture Notes.pdf` — Lecture 3.
- `Week 6 Lecture Notes.pdf` — Lecture 4.
- `Week 7 Lecture Notes.pdf` — Lecture 5.
- `Week 8 Lecture Notes_1.pdf` — Lecture 6.
- `Week 8 Lecture Notes_2.pdf` — Lecture 7.

## Editorial and verification policy

The cheat sheets are a structured revision draft prepared from the sources above. Before the website labels any page **verified**, an academic reviewer should check the formulas, edge cases and source-specific syllabus version. In particular, obtain the current CSE-DS detailed ASB-301 and ASM-301 handouts to finalise their unit mapping.
