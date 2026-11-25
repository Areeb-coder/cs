# DISCRETE MATHEMATICS — DSC-301

## 1 — Algebraic Structures

**Course code:** DSC-301

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
