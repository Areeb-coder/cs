# DISCRETE MATHEMATICS — DSC-301

## 4 — Mathematical Techniques

**Course code:** DSC-301

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
