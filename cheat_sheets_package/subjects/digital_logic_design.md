# DIGITAL LOGIC DESIGN — DSC-303

**Course code:** DSC-303

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

Part of the JMI StudyHub Semester III Master Cheat Sheets. Preserve the source/version caveats and the official-scope versus enrichment distinction in the master file.

# 5. DIGITAL LOGIC DESIGN — DSC-303

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

## Unit 2 — Function Minimisation

### 2.1 Syllabus coverage

Logic gates; Karnaugh maps; limitations for many variables; POS simplification; NAND/NOR implementation; other two-level implementations; don't-care conditions; tabular method.

### 2.2 K-map rules

- Arrange cells in Gray-code order so adjacent cells differ in one variable.
- For SOP, group 1s; for POS, group 0s.
- Group sizes must be powers of 2: 1, 2, 4, 8, 16, ...
- Groups must be rectangular and may wrap across opposite edges.
- Use the largest groups possible and cover every required minterm/maxterm.
- Overlapping groups are allowed when they simplify the expression.
- A variable that changes within a group is eliminated; a variable fixed at 1 appears uncomplemented, fixed at 0 complemented.
- Don't-care cells may be used as 0 or 1 when they help simplification; they do not have to be covered.

### 2.3 SOP vs POS mapping

- SOP groups output-1 minterms then AND terms ORed together.
- POS groups output-0 maxterms then OR terms ANDed together.
- NAND–NAND is a natural two-level implementation of SOP.
- NOR–NOR is a natural two-level implementation of POS.

### 2.4 Universal gates

Using NAND:

\[
A'=A\;\text{NAND}\;A
\]
\[
AB=(A\;\text{NAND}\;B)\;\text{NAND}\;(A\;\text{NAND}\;B)
\]
\[
A+B=(A\;\text{NAND}\;A)\;\text{NAND}\;(B\;\text{NAND}\;B)
\]

Using NOR:

\[
A'=A\;\text{NOR}\;A
\]
\[
A+B=(A\;\text{NOR}\;B)\;\text{NOR}\;(A\;\text{NOR}\;B)
\]
\[
AB=(A\;\text{NOR}\;A)\;\text{NOR}\;(B\;\text{NOR}\;B)
\]

### 2.5 Quine–McCluskey/tabular method

1. List minterms in binary and group by number of 1s.
2. Compare adjacent groups; combine terms differing in exactly one bit, replacing that bit by dash.
3. Repeat until no further combinations are possible.
4. Uncombined terms are prime implicants.
5. Build prime-implicant chart against required minterms.
6. Select essential prime implicants, then cover remaining minterms with the fewest/lowest-cost choices.
7. Do not use don't-care terms as required coverage targets.

### 2.6 Common exam traps

- Using binary order instead of Gray-code order in K-map cells.
- Making a group of 3 or 6 cells (not a power of 2).
- Missing wrap-around adjacency.
- Treating don't-cares as compulsory 1s/0s.
- Grouping minterms for POS instead of maxterms/zeros.
- Confusing NAND–NAND and NOR–NOR implementations.
- Failing to include every required minterm in the prime-implicant chart.

---

## Unit 3 — Combinational Systems I: Arithmetic Circuits

### 3.1 Syllabus coverage

Hardware aspects of arithmetic logic functions; half adder; full adder; binary adder/subtractor; decimal/BCD adder.

### 3.2 Half adder

Inputs A, B; outputs Sum S and Carry C:

\[
S=A\oplus B,\quad C=AB
\]

| A | B | S | C |
|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

### 3.3 Full adder

Inputs A, B and carry-in \(C_{in}\):

\[
S=A\oplus B\oplus C_{in}
\]
\[
C_{out}=AB+AC_{in}+BC_{in}=AB+C_{in}(A\oplus B)
\]

A full adder can be constructed from two half adders and one OR gate for the carries.

### 3.4 Binary adder/subtractor

Two's-complement subtraction:

\[
A-B=A+\overline B+1
\]

A controlled adder/subtractor uses XOR gates on each B bit and sets initial carry \(C_0=SUB\):
- SUB=0 then add A+B.
- SUB=1 then add A+\(\overline B\)+1 = A−B.

### 3.5 Decimal/BCD adder

A valid BCD digit is 0000 through 1001. After adding two BCD digits (and carry-in), if binary sum > 9 or carry-out is 1, add 0110 (decimal 6) to correct the result to BCD.

Correction condition for a 4-bit sum \(S_3S_2S_1S_0\) with carry \(C_4\):

\[
K=C_4+S_3S_2+S_3S_1
\]

When \(K=1\), add 0110. This expression assumes the standard BCD adder arrangement.

### 3.6 Common exam traps

- Forgetting the incoming carry in a full adder.
- Using OR instead of XOR for the sum.
- Forgetting the +1 in two's-complement subtraction.
- Correcting BCD after every binary addition instead of testing the >9/carry condition.
- Confusing binary overflow with unsigned carry-out; signed overflow is a separate condition.

---

## Unit 4 — Combinational Systems II

### 4.1 Syllabus coverage

Magnitude comparator; demultiplexer; multiplexer; encoder; priority encoder; parity checker/generator.

### 4.2 Magnitude comparator

For two n-bit values A and B, outputs commonly are:
- \(G\): A>B.
- \(E\): A=B.
- \(L\): A<B.

For 1-bit inputs:

\[
G=AB',\quad E=A'B'+AB,\quad L=A'B
\]

For multi-bit numbers, compare from the most significant bit; a lower bit matters only if all higher bits are equal.

### 4.3 Multiplexer (MUX)

- A \(2^n:1\) MUX has \(2^n\) data inputs, n select lines and one output.
- Select lines encode which input is passed to output.
- A 4:1 MUX has 2 select lines; an 8:1 MUX has 3.
- A MUX can implement Boolean functions by assigning variables/constants to data inputs.

### 4.4 Demultiplexer (DEMUX)

- A \(1:2^n\) DEMUX routes one data input to one of \(2^n\) outputs selected by n select lines.
- Other outputs remain inactive (assuming active-high logic).
- Decoder and DEMUX structures are closely related; the data input acts as an enable.

### 4.5 Encoders

- Encoder maps one active input line to a binary code.
- A simple \(2^n\)-to-n encoder assumes only one input is active at a time.
- Priority encoder resolves multiple active inputs by assigning priority; outputs often include a valid bit.

### 4.6 Parity generator/checker

Even-parity bit for data bits \(d_1,\ldots,d_n\):

\[
p_{even}=d_1\oplus d_2\oplus\cdots\oplus d_n
\]

Then total number of 1s including parity is even. For odd parity, invert the even-parity bit.

Parity checking: XOR all received bits (including parity). For even parity, result 0 indicates parity condition satisfied; 1 indicates an odd number of bit errors. Parity cannot detect every even-number bit error.

### 4.7 Common exam traps

- Confusing number of select lines with number of data inputs.
- Forgetting priority in priority encoders.
- Treating an ordinary encoder as valid for multiple simultaneous inputs.
- Claiming parity corrects errors; it detects certain errors but does not locate/correct them.

---

## Unit 5 — Sequential Systems

### 5.1 Syllabus coverage

State representation; flip-flops (RS, D, JK/master-slave); working characteristics; state tables; excitation tables; triggering; asynchronous/synchronous counters; design and analysis; counter applications; shift registers and shift-register counters.

### 5.2 Combinational vs sequential

- Combinational output depends only on current inputs.
- Sequential output depends on current inputs and stored state/history.
- A clocked sequential circuit updates state on a specified clock edge/level.
- Asynchronous circuits may change state without waiting for a common clock edge.

### 5.3 Flip-flop characteristic equations

| Flip-flop | Characteristic equation | Key behaviour |
|---|---|---|
| SR | \(Q^+=S+R'Q\) (for valid inputs) | S sets; R resets; S=R=1 invalid for active-high NOR type. |
| D | \(Q^+=D\) | Next state follows D at active clock. |
| JK | \(Q^+=JQ'+K'Q\) | 00 hold; 01 reset; 10 set; 11 toggle. |
| T (reference) | \(Q^+=T\oplus Q\) | 0 hold; 1 toggle. |

### 5.4 Excitation requirements

| Present Q | Next Q⁺ | SR (S,R) | D | JK (J,K) | T |
|---:|---:|---|---:|---|---:|
| 0 | 0 | 0,X | 0 | 0,X | 0 |
| 0 | 1 | 1,0 | 1 | 1,X | 1 |
| 1 | 0 | 0,1 | 0 | X,1 | 1 |
| 1 | 1 | X,0 | 1 | X,0 | 0 |

X denotes don't-care. SR table assumes active-high SR flip-flop with the invalid S=R=1 case.

### 5.5 Triggering and master-slave JK

- Level-triggered: responds while clock is at active level.
- Edge-triggered: responds at active transition (positive or negative edge).
- Master-slave arrangement uses two stages controlled by opposite clock phases to reduce race-around in JK implementations.
- Race-around can occur in a level-triggered JK flip-flop with J=K=1 and a sufficiently long active clock pulse; output may toggle repeatedly.

### 5.6 Counters

- MOD-N counter cycles through N distinct states.
- Minimum number of flip-flops:
  \[
n=\lceil\log_2N\rceil
  \]
- Asynchronous/ripple counter: clock propagates through stages; simple but accumulated propagation delay.
- Synchronous counter: all flip-flops receive common clock; combinational logic determines next states.
- Up counter increments; down counter decrements; up/down counter selects direction.
- Ring counter: shift register with a circulating 1; with n flip-flops, normally n states.
- Johnson counter: complemented last output fed to first input; with n flip-flops, up to 2n states.

### 5.7 Shift registers

- SISO: serial in, serial out.
- SIPO: serial in, parallel out.
- PISO: parallel in, serial out.
- PIPO: parallel in, parallel out.
- Shift registers store/transfer serial data, perform delay, conversion and sequence generation.

### 5.8 State-table design workflow

1. Define states and input conditions.
2. Draw/read the state diagram.
3. Create present-state/input/next-state/output table.
4. Select flip-flop type.
5. Use characteristic/excitation table to obtain required inputs.
6. Minimise logic equations.
7. Draw circuit and verify transitions.

### 5.9 Common exam traps

- Confusing characteristic table (what the FF does) with excitation table (what inputs are required).
- Ignoring the invalid SR input combination.
- Forgetting JK toggle for J=K=1.
- Using \(\lceil\log_2N\rceil\) but not accounting for unused states in a non-power-of-two counter.
- Confusing ripple and synchronous counter timing.
- Confusing ring and Johnson counter state counts.

---
