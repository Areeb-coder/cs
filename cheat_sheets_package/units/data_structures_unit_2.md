# DATA STRUCTURES — DSC-302

## 2 — Stacks, Expressions, Recursion and Queues

**Course code:** DSC-302

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

## Unit 2 — Stacks, Expressions, Recursion and Queues

### 2.1 Syllabus coverage

Stack ADT and operations; array/linked implementation; Polish and reverse Polish notation; recursion; garbage collection; queue ADT and operations; linear, circular, priority and double-ended queues; queue applications.

### 2.2 Stack

LIFO: last in, first out.

Operations:
- `push(x)`: insert at top.
- `pop()`: remove/return top.
- `peek()/top()`: read top without removal.
- `isEmpty()`, `isFull()` for bounded-array implementation.

Array stack with capacity \(N\), initial `top = -1`:
- Empty: `top == -1`.
- Full: `top == N-1`.
- Push: increment `top`, store item.
- Pop: return item, decrement `top`.
- Push/pop/peek: \(O(1)\).

### 2.3 Expression notation

- Infix: operator between operands, e.g. `A+B`.
- Prefix/Polish: operator before operands, e.g. `+AB`.
- Postfix/reverse Polish: operator after operands, e.g. `AB+`.

Typical precedence (high to low): parentheses then exponentiation then multiplication/division/modulo then addition/subtraction. Associativity must be respected; exponentiation is commonly right-associative.

Infix to postfix (stack method):
1. Output operands immediately.
2. Push `(`.
3. For an operator, pop higher-precedence operators (and equal-precedence operators when left-associative) before pushing it.
4. On `)`, pop until `(`.
5. At end, pop all remaining operators.

Postfix evaluation:
1. Scan left to right.
2. Push operands.
3. At an operator, pop right operand first, then left operand; evaluate `left op right`.
4. Push result.
5. Final stack should contain exactly one result.

### 2.4 Recursion and call stack

A recursive routine needs a base case and progress towards it. Each call stores activation information (parameters, local variables and return address) on the call stack.

- Tail recursion: recursive call is the final operation (optimisation is compiler-dependent).
- Recursion may use \(O(d)\) stack space where \(d\) is recursion depth.
- Repeated subproblems may make naive recursion exponential; memoisation/dynamic programming may reduce repeated work (supplementary concept).

### 2.5 Garbage collection quick reference

- Reference counting: reclaim object when reference count reaches zero; cycles can remain unreclaimed.
- Mark-and-sweep: mark reachable objects from roots, then reclaim unmarked objects.
- Copying/compacting collectors move live objects and reduce fragmentation.
- In C, `malloc/free` are manual; do not assume an automatic garbage collector.

### 2.6 Queue

FIFO: first in, first out.

Operations: enqueue, dequeue, front/peek, isEmpty, isFull (bounded array).

**Linear array queue:** simple but freed front positions may be wasted unless elements are shifted.

**Circular queue** (capacity \(N\), indices modulo \(N\)):

\[
next(i)=(i+1)\bmod N
\]

Common `front/rear` convention with one unused slot:
- Empty: `front == rear`.
- Full: `(rear+1) % N == front`.
- Enqueue: `rear=(rear+1)%N`, store at rear.
- Dequeue: `front=(front+1)%N`.

Another convention maintains a `count`; then empty is count 0 and full is count N. State which convention is used.

**Deque:** insertion and deletion at both ends.  
**Priority queue:** deletion/servicing by priority rather than arrival time; tie-breaking may use FIFO.

### 2.7 Complexity summary

| Structure/operation | Typical time |
|---|---:|
| Stack push/pop/peek | \(O(1)\) |
| Queue enqueue/dequeue | \(O(1)\) with correct circular/linked implementation |
| Deque insert/delete at ends | \(O(1)\) with suitable implementation |
| Priority queue using heap | Insert/delete-priority \(O(\log n)\), peek \(O(1)\) |

### 2.8 Common exam traps

- Reversing operand order during postfix evaluation.
- Mishandling operator associativity.
- Confusing overflow with underflow.
- Using an incorrect circular-queue full/empty test for the chosen representation.
- Assuming recursion has no extra space cost.
- Claiming C automatically frees heap allocations.

---
