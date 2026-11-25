# DATA STRUCTURES — DSC-302

## 3 — Linked Lists

**Course code:** DSC-302

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
