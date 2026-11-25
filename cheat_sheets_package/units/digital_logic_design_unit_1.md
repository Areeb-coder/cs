# DIGITAL LOGIC DESIGN — DSC-303

## 1 — Boolean Algebra and Logic Gates

**Course code:** DSC-303

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

## Unit 1 — Boolean Algebra and Logic Gates

### 1.1 Syllabus coverage

Introduction; binary numbers; base conversion; octal/hexadecimal; complements; binary codes; fixed/floating-point numbers; Boolean algebra axioms/theorems; canonical and standard forms; SOP/POS; other logic operations.

### 1.2 Number systems

For base \(b\):

\[
(d_nd_{n-1}\ldots d_0.d_{-1}\ldots)_b=\sum_i d_i b^i
\]

Binary place values: powers of 2. Octal: powers of 8. Hexadecimal: powers of 16 (digits A–F represent 10–15).

Quick conversion:
- Base \(b\) to decimal: positional expansion.
- Decimal integer to base \(b\): repeated division; read remainders upward.
- Decimal fraction to base \(b\): repeated multiplication; read integer parts downward.
- Binarycorresponds tooctal: group bits in threes.
- Binarycorresponds tohex: group bits in fours.

### 1.3 Complements and signed representation

For an n-bit binary word:
- 1's complement: invert each bit.
- 2's complement: invert then add 1.
- 2's-complement range: \(-2^{n-1}\) to \(2^{n-1}-1\).
- To negate a 2's-complement number: invert all bits and add 1.
- Overflow in signed addition: adding two numbers of same sign produces result of opposite sign.

### 1.4 Common binary codes

- **BCD 8421:** each decimal digit encoded separately in 4 bits (0000–1001 valid BCD digits).
- **Gray code:** adjacent values differ by one bit. BinarythenGray: MSB same; each later Gray bit is XOR of adjacent binary bits. Graythenbinary: MSB same; each next binary bit is previous binary bit XOR current Gray bit.
- **Excess-3:** add 3 to each decimal digit and write 4-bit binary.
- **Parity bit:** makes total number of 1s even or odd as required; detects any odd number of bit errors, but not all even-number errors.

### 1.5 Boolean algebra laws

Let + denote OR, multiplication/concatenation denote AND, and prime denote NOT.

| Law | Identity |
|---|---|
| Identity | \(A+0=A,\;A\cdot1=A\) |
| Null/dominance | \(A+1=1,\;A\cdot0=0\) |
| Idempotent | \(A+A=A,\;AA=A\) |
| Complement | \(A+A'=1,\;AA'=0\) |
| Involution | \((A')'=A\) |
| Commutative | \(A+B=B+A,\;AB=BA\) |
| Associative | \(A+(B+C)=(A+B)+C\); similarly AND |
| Distributive | \(A(B+C)=AB+AC\); \(A+BC=(A+B)(A+C)\) |
| Absorption | \(A+AB=A,\;A(A+B)=A\) |
| De Morgan | \((A+B)'=A'B',\;(AB)'=A'+B'\) |

Other useful identities:

\[
A+A'B=A+B,\quad A(A'+B)=AB
\]
\[
AB+AB'=A,\quad(A+B)(A+B')=A
\]

### 1.6 SOP, POS and canonical forms

- **SOP:** OR of product terms, e.g. \(AB+A'C\).
- **POS:** AND of sum terms, e.g. \((A+B)(A'+C)\).
- **Minterm:** product containing every variable exactly once; equals 1 for exactly one input combination.
- **Maxterm:** sum containing every variable exactly once; equals 0 for exactly one input combination.
- Canonical SOP: sum of minterms where output is 1, \(F=\Sigma m(\text{indices})\).
- Canonical POS: product of maxterms where output is 0, \(F=\Pi M(\text{indices})\).

Index ordering convention: variables are interpreted as a binary number in the order stated (e.g. ABC). State the variable order.

### 1.7 Logic gates

| Gate | Expression | Output is 1 when |
|---|---|---|
| NOT | \(A'\) | A is 0 |
| AND | \(AB\) | all inputs 1 |
| OR | \(A+B\) | at least one input 1 |
| NAND | \((AB)'\) | not all inputs 1 |
| NOR | \((A+B)'\) | all inputs 0 |
| XOR | \(A\oplus B=A'B+AB'\) | inputs differ |
| XNOR | \((A\oplus B)'\) | inputs equal |

### 1.8 Fixed vs floating point

- Fixed point: binary point position is fixed; simpler hardware, limited dynamic range.
- Floating point: sign, exponent and significand/fraction; larger dynamic range but rounding/precision issues.
- Normalised binary floating-point commonly represents \((-1)^s\times1.f\times2^e\) (exact hidden-bit conventions depend on format).

### 1.9 Common exam traps

- Confusing complement with negative arithmetic value.
- Grouping BCD digits as if the whole number were a single binary word.
- Using the wrong variable order for minterm indices.
- Confusing canonical with simplified SOP/POS.
- Forgetting De Morgan applies to every term and flips AND/OR.

---
