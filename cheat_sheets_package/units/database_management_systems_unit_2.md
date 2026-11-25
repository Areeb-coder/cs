# DATABASE MANAGEMENT SYSTEM — DSC-304

## 2 — Database Design, Functional Dependencies and Normalisation

**Course code:** DSC-304

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
