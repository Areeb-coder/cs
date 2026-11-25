# LINEAR PROGRAMMING — SEPARATE EXAM TRACK + NPTEL EXTENDED CHEAT SHEETS

**Course code:** LPP — code not supplied

**Source status:** Separate exam paper + five-unit/seven-lecture NPTEL extended source; confirm JMI course code and scope.

Part of the JMI StudyHub Semester III Master Cheat Sheets. Preserve the source/version caveats and the official-scope versus enrichment distinction in the master file.

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
