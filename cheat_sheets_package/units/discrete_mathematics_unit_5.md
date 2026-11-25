# DISCRETE MATHEMATICS — DSC-301

## 5 — Linear Programming Problems (JMI Discrete Mathematics Scope)

**Course code:** DSC-301

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
