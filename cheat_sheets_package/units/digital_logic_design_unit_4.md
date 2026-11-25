# DIGITAL LOGIC DESIGN — DSC-303

## 4 — Combinational Systems II

**Course code:** DSC-303

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
