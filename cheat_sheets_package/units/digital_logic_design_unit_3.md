# DIGITAL LOGIC DESIGN — DSC-303

## 3 — Combinational Systems I: Arithmetic Circuits

**Course code:** DSC-303

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
