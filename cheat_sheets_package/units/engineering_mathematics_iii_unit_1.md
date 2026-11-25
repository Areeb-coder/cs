# ENGINEERING MATHEMATICS III — ASB-301

## 1 — Applications of Multiple Integrals and Vector Calculus

**Course code:** ASB-301

**Source status:** Cross-branch JMI FET 2025 detailed outline; CSE-DS-specific unit mapping requires confirmation.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
