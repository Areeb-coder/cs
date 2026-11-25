# LINEAR PROGRAMMING — SEPARATE EXAM TRACK + NPTEL EXTENDED CHEAT SHEETS

## 4 — Maximum Flow, Minimum Cut, Set Cover and LP Relaxation (Lectures 5–6)

**Course code:** LPP — code not supplied

**Source status:** Separate exam paper + five-unit/seven-lecture NPTEL extended source; confirm JMI course code and scope.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
