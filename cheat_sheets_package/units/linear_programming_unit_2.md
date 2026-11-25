# LINEAR PROGRAMMING — SEPARATE EXAM TRACK + NPTEL EXTENDED CHEAT SHEETS

## 2 — Convex Geometry and Simplex Method (Lecture 2)

**Course code:** LPP — code not supplied

**Source status:** Separate exam paper + five-unit/seven-lecture NPTEL extended source; confirm JMI course code and scope.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
