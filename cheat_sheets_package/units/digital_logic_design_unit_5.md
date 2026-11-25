# DIGITAL LOGIC DESIGN — DSC-303

## 5 — Sequential Systems

**Course code:** DSC-303

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
