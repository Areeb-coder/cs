# LINEAR PROGRAMMING — SEPARATE EXAM TRACK + NPTEL EXTENDED CHEAT SHEETS

## 3 — Duality Theory and Minimax Theorem (Lectures 3–4)

**Course code:** LPP — code not supplied

**Source status:** Separate exam paper + five-unit/seven-lecture NPTEL extended source; confirm JMI course code and scope.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
