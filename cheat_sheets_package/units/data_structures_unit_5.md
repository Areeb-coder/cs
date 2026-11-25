# DATA STRUCTURES — DSC-302

## 5 — Graphs, Traversals, MST and Sorting Algorithms

**Course code:** DSC-302

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
