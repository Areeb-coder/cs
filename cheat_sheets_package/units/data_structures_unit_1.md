# DATA STRUCTURES — DSC-302

## 1 — Foundations, Complexity, Arrays and Pointers

**Course code:** DSC-302

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

## Unit 1 — Foundations, Complexity, Arrays and Pointers

### 1.1 Syllabus coverage

Definition/types/characteristics of data structures; ADT; algorithms; time/space complexity; arrays; 1D arrays; row/column-major 2D, 3D and nD array implementation; advanced pointers in C; dynamic memory allocation.

### 1.2 Core terms

- **Data structure:** organised way to store/manage data for efficient operations.
- **ADT:** specifies data and permitted operations/behaviour without requiring a particular implementation.
- **Algorithm:** finite, unambiguous sequence of steps that transforms input to output.
- **Time complexity:** growth of operation count with input size.
- **Space complexity:** memory growth, including auxiliary memory.

### 1.3 Asymptotic notation

- \(O(g(n))\): asymptotic upper bound.
- \(\Omega(g(n))\): asymptotic lower bound.
- \(\Theta(g(n))\): tight asymptotic bound.
- Ignore constant factors and lower-order terms for asymptotic growth.

Common growth order (smallest to largest):

\[
1<\log n<n<n\log n<n^2<n^3<2^n<n!
\]

Loop patterns:
- One loop to \(n\): \(O(n)\).
- Nested loops each to \(n\): \(O(n^2)\).
- Repeated halving/doubling: \(O(\log n)\).
- A loop with a logarithmic inner loop: often \(O(n\log n)\).

### 1.4 Array address formulas

Let element width be \(w\) bytes and base address be \(BA\). Use the actual lower bounds from the question.

1D array, index \(i\), lower bound \(L_1\):

\[
LOC(A[i])=BA+(i-L_1)w
\]

2D array with \(N_1\) rows and \(N_2\) columns:

**Row-major:**

\[
LOC(A[i][j])=BA+w[(i-L_1)N_2+(j-L_2)]
\]

**Column-major:**

\[
LOC(A[i][j])=BA+w[(j-L_2)N_1+(i-L_1)]
\]

3D array with dimensions \(N_1\times N_2\times N_3\):

**Row-major:**

\[
BA+w[(i-L_1)N_2N_3+(j-L_2)N_3+(k-L_3)]
\]

**Column-major:**

\[
BA+w[(k-L_3)N_1N_2+(j-L_2)N_1+(i-L_1)]
\]

nD row-major general form, dimensions \(N_1,\ldots,N_d\):

\[
LOC=BA+w\sum_{r=1}^{d}(i_r-L_r)\prod_{q=r+1}^{d}N_q
\]

For the last dimension, the empty product is 1. Always substitute dimensions and lower bounds exactly.

### 1.5 Pointer reference

- Pointer stores an address; `&x` gives address; `*p` dereferences.
- Pointer arithmetic advances by the size of the pointed-to type.
- Array name usually decays to pointer to first element in expressions, but an array and pointer variable are not identical types.
- `NULL`/`nullptr` represents no valid object address; never dereference it.
- Use `sizeof *p` in allocation expressions to reduce type mismatch errors.

Dynamic memory in C:

```c
int *p = malloc(n * sizeof *p);     // uninitialised storage
int *q = calloc(n, sizeof *q);      // zero-initialised bytes
p = realloc(p, new_n * sizeof *p);  // may move; use a temporary pointer
free(p);                            // release once; do not use afterward
```

Safer realloc pattern:

```c
int *tmp = realloc(p, new_n * sizeof *p);
if (tmp != NULL) p = tmp;   // preserve original p if allocation fails
```

### 1.6 Common exam traps

- Confusing array index with byte offset.
- Using number of rows where row-major uses number of columns.
- Forgetting lower bounds in address calculation.
- Confusing `p++` with `(*p)++`.
- Dereferencing uninitialised or freed pointers.
- Forgetting `free`, causing a memory leak.
- Overwriting the only pointer with a failed `realloc` result.

---
