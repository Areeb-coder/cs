# DIGITAL LOGIC DESIGN — DSC-303

## 2 — Function Minimisation

**Course code:** DSC-303

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
