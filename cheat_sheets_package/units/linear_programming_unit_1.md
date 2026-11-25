# LINEAR PROGRAMMING — SEPARATE EXAM TRACK + NPTEL EXTENDED CHEAT SHEETS

## 1 — Foundations of Linear Programming and Linear Algebra (Lecture 1)

**Course code:** LPP — code not supplied

**Source status:** Separate exam paper + five-unit/seven-lecture NPTEL extended source; confirm JMI course code and scope.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
