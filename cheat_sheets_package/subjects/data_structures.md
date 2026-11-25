# DATA STRUCTURES — DSC-302

**Course code:** DSC-302

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

Part of the JMI StudyHub Semester III Master Cheat Sheets. Preserve the source/version caveats and the official-scope versus enrichment distinction in the master file.

# 4. DATA STRUCTURES — DSC-302

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

## Unit 3 — Linked Lists

### 3.1 Syllabus coverage

Concept of linked list; linear singly and doubly linked lists; circular singly and doubly linked lists; header linked list; applications.

### 3.2 Types and node layouts

- **Singly linked:** each node stores data and `next`.
- **Doubly linked:** each node stores `prev`, data and `next`.
- **Circular singly:** last node's `next` points to head.
- **Circular doubly:** last `next` points to head and head `prev` points to last.
- **Header linked list:** begins with a header/sentinel node; it may hold metadata or simplify edge cases.

### 3.3 Core operations and time

| Operation | Singly list, head only | With tail/extra pointer where applicable |
|---|---:|---:|
| Traverse/search | \(O(n)\) | \(O(n)\) |
| Insert at head | \(O(1)\) | \(O(1)\) |
| Insert at tail | \(O(n)\) | \(O(1)\) if tail pointer |
| Delete head | \(O(1)\) | \(O(1)\) |
| Delete tail | \(O(n)\) (find predecessor) | Usually \(O(n)\) singly; \(O(1)\) doubly with tail |
| Insert after known node | \(O(1)\) | \(O(1)\) |

### 3.4 Pointer update patterns

**Insert at front (singly):**

```c
new->next = head;
head = new;
```

**Insert after node `p` (singly):**

```c
new->next = p->next;
p->next = new;
```

**Delete node after `p` (singly):**

```c
tmp = p->next;
if (tmp != NULL) {
    p->next = tmp->next;
    free(tmp);
}
```

**Insert at front (doubly):**

```c
new->prev = NULL;
new->next = head;
if (head != NULL) head->prev = new;
head = new;
```

For circular lists, update both the terminal link and head/tail relationships; handle the one-node and empty-list cases separately.

### 3.5 Linked list vs array

| Array | Linked list |
|---|---|
| Contiguous memory | Nodes may be scattered |
| Random access \(O(1)\) | Index access \(O(n)\) |
| Insert/delete in middle requires shifting \(O(n)\) | Pointer update can be \(O(1)\) after location is known |
| Fixed capacity unless resized | Dynamic node allocation |
| Good cache locality | Pointer overhead and weaker locality |

### 3.6 Applications

Stacks/queues; polynomial representation; sparse structures; adjacency lists; playlists/round-robin traversal; undo/redo (doubly linked).

### 3.7 Common exam traps

- Losing the rest of the list by overwriting `next` before saving it.
- Forgetting `prev` update in doubly linked list.
- Failing to reconnect last node to head in a circular list.
- Not treating empty and single-node cases.
- Freeing a node and then reading its pointer/data.

---

## Unit 4 — Trees, BST, Traversals, AVL, Heaps, Expression Trees, B/B+ Trees

### 4.1 Syllabus coverage

Tree and tree ADT; binary trees and operations; BST; traversals; types of binary tree; AVL trees; heap trees; expression trees; B-trees and B+ trees.

### 4.2 Tree terminology and properties

- Root, parent, child, sibling, leaf, internal node, ancestor, descendant, subtree, depth and height.
- A tree with \(n\) vertices has \(n-1\) edges (connected and acyclic).
- Binary tree: each node has at most two children.

If root is at level 0 and height is \(h\):

\[
\text{maximum nodes}=1+2+\cdots+2^h=2^{h+1}-1
\]
\[
\text{maximum leaves}=2^h
\]

For a non-empty binary tree with \(n_0\) leaves, \(n_2\) nodes with two children:

\[
n_0=n_2+1
\]

(Here \(n_1\) denotes nodes with exactly one child.)

Common types:
- Full/strict: every node has 0 or 2 children.
- Complete: all levels full except possibly last, filled left to right.
- Perfect: all internal nodes have two children and all leaves are at same depth.
- Skewed: each internal node has only one child.

### 4.3 Traversals

- Preorder: Root then Left then Right.
- Inorder: Left then Root then Right.
- Postorder: Left then Right then Root.
- Level-order: breadth-first by queue.

For a BST, inorder traversal returns keys in sorted order.

### 4.4 Binary Search Tree

Invariant: all keys in left subtree < node key; all keys in right subtree > node key (duplicate policy must be declared).

- Search, insert and delete follow comparisons down one root-to-leaf path.
- Time: \(O(h)\), where \(h\) is tree height; average balanced-ish case \(O(\log n)\), worst skewed \(O(n)\).
- Delete cases: leaf; one child (replace node by child); two children (replace by inorder successor/predecessor, then delete that node).

### 4.5 AVL trees

Self-balancing BST. Balance factor:

\[
BF(v)=h(left(v))-h(right(v))
\]

AVL condition: \(BF\in\{-1,0,+1\}\) at every node.

| Imbalance | Rotation |
|---|---|
| Left-left (LL) | Right rotation at unbalanced node |
| Right-right (RR) | Left rotation |
| Left-right (LR) | Left rotation on left child, then right rotation |
| Right-left (RL) | Right rotation on right child, then left rotation |

Search/insert/delete remain \(O(\log n)\) because height is logarithmic. Update heights/balance factors while moving back towards the root.

### 4.6 Heaps

Binary heap: complete binary tree with heap-order property.
- Max-heap: parent ≥ children.
- Min-heap: parent ≤ children.
- Peek root: \(O(1)\).
- Insert (sift/bubble up): \(O(\log n)\).
- Delete root (replace by last, sift down): \(O(\log n)\).
- Build heap bottom-up: \(O(n)\).
- Heapsort: \(O(n\log n)\) time, in-place for array representation.

For 0-based array index \(i\):

\[
parent(i)=\lfloor(i-1)/2\rfloor,\quad left(i)=2i+1,\quad right(i)=2i+2
\]

For 1-based indexing: parent \(\lfloor i/2\rfloor\), children \(2i\), \(2i+1\).

### 4.7 Expression trees

- Leaves are operands; internal nodes are operators.
- Preorder gives prefix; inorder gives infix (with parentheses for exact grouping); postorder gives postfix.
- Evaluate recursively: evaluate child subtrees, then apply operator at parent.

### 4.8 B-tree and B+ tree

Terminology varies by “order” versus minimum degree. State the convention in every answer.

Using minimum degree \(t\) for a B-tree:
- Each non-root node has at least \(t-1\) keys and at most \(2t-1\) keys.
- An internal node has one more child than keys.
- Root has special minimum occupancy rules.
- All leaves are at the same depth.
- Search/insert/delete are logarithmic in number of keys.

B+ tree:
- Internal nodes guide search; records/data pointers are stored at leaves (in common designs).
- Leaf nodes are linked for efficient range/sequential access.
- All leaves are at the same depth.

### 4.9 Common exam traps

- Mixing tree height counted in edges vs levels; define convention.
- Confusing complete, full and perfect binary trees.
- Writing BST insertion as always \(O(\log n)\); worst case is \(O(n)\).
- Using wrong AVL rotation for LR/RL cases.
- Applying heap index formulas with the wrong 0-/1-based convention.
- Treating B-tree order and minimum degree as the same definition without checking.

---

## Unit 5 — Graphs, Traversals, MST and Sorting Algorithms

### 5.1 Syllabus coverage

Graph terminology; directed/undirected, connected/disconnected, cyclic/acyclic graphs; adjacency matrix, incidence matrix and linked-list representations; graph traversal; graph algorithms; MST; Prim's and Kruskal's algorithms; sorting algorithms.

### 5.2 Graph representation and traversal

| Representation | Space | Edge test | Neighbour iteration |
|---|---:|---:|---:|
| Adjacency matrix | \(O(V^2)\) | \(O(1)\) | \(O(V)\) |
| Adjacency list | \(O(V+E)\) | depends on degree | \(O(\deg(v))\) |
| Edge list | \(O(E)\) | \(O(E)\) | scan edges |

**BFS:** queue; explores by distance/layers; shortest path in unweighted graph.  
**DFS:** recursion/stack; explores deeply before backtracking; useful for connectivity, cycle detection and component discovery.

With adjacency lists, BFS/DFS time is \(O(V+E)\); with adjacency matrices it is typically \(O(V^2)\).

### 5.3 Minimum spanning tree

For a connected, weighted, undirected graph, an MST connects all vertices with minimum total edge weight and has exactly \(V-1\) edges.

- **Cut property:** a minimum-weight edge crossing a cut (with the appropriate cut rule) is safe for an MST.
- **Cycle property:** a unique heaviest edge in a cycle cannot belong to an MST.
- If all edge weights are distinct, the MST is unique.

**Kruskal:**
1. Sort edges by non-decreasing weight.
2. Start with each vertex in its own component.
3. Add the next lightest edge if it joins two different components.
4. Use disjoint-set union (union-find) to test/merge components.
5. Stop after \(V-1\) edges.

Time: \(O(E\log E)\) dominated by sorting (DSU operations are near-constant amortised with path compression/union by rank).

**Prim:**
1. Start from any vertex.
2. Maintain the cheapest edge connecting the current tree to an outside vertex.
3. Add that edge/vertex.
4. Repeat until all vertices are included.

With a binary heap and adjacency list: \(O(E\log V)\); with adjacency matrix: \(O(V^2)\).

### 5.4 Sorting algorithms — quick reference

| Algorithm | Best | Average | Worst | Stable? | In-place? |
|---|---:|---:|---:|---|---|
| Bubble (optimised) | \(O(n)\) | \(O(n^2)\) | \(O(n^2)\) | Yes | Yes |
| Selection | \(O(n^2)\) | \(O(n^2)\) | \(O(n^2)\) | Usually no | Yes |
| Insertion | \(O(n)\) | \(O(n^2)\) | \(O(n^2)\) | Yes | Yes |
| Merge | \(O(n\log n)\) | \(O(n\log n)\) | \(O(n\log n)\) | Yes (standard merge) | No (standard array version) |
| Quick | \(O(n\log n)\) | \(O(n\log n)\) | \(O(n^2)\) | No | Usually |
| Heap | \(O(n\log n)\) | \(O(n\log n)\) | \(O(n\log n)\) | No | Yes |

Recognise:
- Bubble: adjacent swaps; largest element “bubbles” to end each pass.
- Selection: select minimum and place at next position; at most \(n-1\) swaps.
- Insertion: insert each key into sorted prefix.
- Merge: divide, sort halves, merge; stable with correct tie handling.
- Quick: partition around pivot; bad pivot choices can lead to quadratic time.
- Heap: build heap, repeatedly remove maximum/minimum.

### 5.5 Searching reminder

Linear search: \(O(n)\), no sorted requirement. Binary search: \(O(\log n)\), requires sorted/random-access sequence (or an equivalent structure supporting efficient middle access).

### 5.6 Common exam traps

- Claiming BFS and DFS both find shortest paths in every graph; BFS does so for unweighted graphs.
- Confusing MST with shortest-path tree.
- Letting Kruskal add a cycle-forming edge.
- Forgetting MST has \(V-1\) edges for a connected graph.
- Ignoring stability/in-place distinctions in sorting comparisons.
- Claiming quicksort worst case is always \(O(n\log n)\).

---
