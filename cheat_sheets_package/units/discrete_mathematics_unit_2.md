# DISCRETE MATHEMATICS — DSC-301

## 2 — Graph Theory

**Course code:** DSC-301

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
