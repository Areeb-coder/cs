# DISCRETE MATHEMATICS — DSC-301

**Course code:** DSC-301

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

Part of the JMI StudyHub Semester III Master Cheat Sheets. Preserve the source/version caveats and the official-scope versus enrichment distinction in the master file.

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
