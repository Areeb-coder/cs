# DATA STRUCTURES — DSC-302

## 4 — Trees, BST, Traversals, AVL, Heaps, Expression Trees, B/B+ Trees

**Course code:** DSC-302

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
