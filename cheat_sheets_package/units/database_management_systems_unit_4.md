# DATABASE MANAGEMENT SYSTEM — DSC-304

## 4 — Transaction Management

**Course code:** DSC-304

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

## Unit 4 — Transaction Management

### 4.1 Syllabus coverage

- Transaction processing.
- ACID properties.
- Concurrency control.
- Locking-based protocols.
- Timestamp-based protocols.

### 4.2 Transaction and ACID

A transaction is a logical unit of database work, typically ending with COMMIT or ROLLBACK.

| Property | Meaning | Example concern |
|---|---|---|
| Atomicity | All operations happen or none do | Debit and credit both succeed or neither |
| Consistency | A transaction preserves declared constraints/invariants | Balance rule remains valid |
| Isolation | Concurrent execution behaves according to an isolation/serialisability guarantee | Avoid unsafe interference |
| Durability | Committed changes survive failures according to the system's guarantees | Recovery after crash |

### 4.3 Transaction states (common model)

Active then Partially committed then Committed; on error: Active then Failed then Aborted. A transaction may restart after abort depending on policy. A committed transaction is not rolled back by a normal transaction rollback.

### 4.4 Schedule terminology

- Schedule: order of operations from multiple transactions while preserving each transaction's internal order.
- Serial schedule: transactions execute one after another without interleaving.
- Serializable schedule: concurrent schedule equivalent to some serial schedule.
- Conflict: two operations from different transactions on same data item, with at least one write.
- Conflicting pairs: read-write, write-read, write-write; read-read does not conflict.
- Conflict serialisability: precedence graph is acyclic.
- Precedence graph: node per transaction; edge TithenTj when an operation of Ti precedes and conflicts with an operation of Tj on the same item.

**Conflict-serialisability test:** build graph; if acyclic, topological order gives equivalent serial order; cycle means not conflict-serialisable.

### 4.5 Locks and lock compatibility

- Shared (S): read permission; multiple S locks may coexist.
- Exclusive (X): write permission; conflicts with both S and X from another transaction.

| Requested / held | S | X |
|---|---:|---:|
| S | Compatible | Not compatible |
| X | Not compatible | Not compatible |

### 4.6 Two-phase locking (2PL)

- Growing phase: transaction may acquire locks, cannot release.
- Shrinking phase: transaction may release locks, cannot acquire new ones.
- Basic 2PL guarantees conflict serialisability.
- Strict 2PL holds all X locks until commit/abort; simplifies recovery and prevents cascading aborts under the usual model.
- Rigorous 2PL holds both S and X locks until commit/abort.
- Conservative/static 2PL obtains all required locks before starting; avoids deadlock but requires advance knowledge and may reduce concurrency.

### 4.7 Deadlock and starvation

- Deadlock: transactions wait cyclically for locks.
- Wait-for graph: edge TithenTj when Ti waits for a lock held by Tj; cycle indicates deadlock in the standard single-instance lock model.
- Prevention/handling: ordering resources, wait-die, wound-wait, timeout, detection and victim rollback.
- Starvation: a transaction waits indefinitely due to repeated priority/selection; use fair scheduling or aging.

### 4.8 Timestamp-ordering protocol

Each transaction Ti receives unique timestamp TS(Ti). Each item X maintains:
- `read_TS(X)`: greatest timestamp of a transaction successfully reading X.
- `write_TS(X)`: greatest timestamp of a transaction successfully writing X.

For read(X) by Ti:
1. If TS(Ti) < write_TS(X), reject/abort Ti because a newer transaction already wrote X.
2. Otherwise allow read and set `read_TS(X)=max(read_TS(X), TS(Ti))`.

For write(X) by Ti:
1. If TS(Ti) < read_TS(X), reject/abort Ti.
2. If TS(Ti) < write_TS(X), reject/abort Ti under the basic timestamp-ordering rule (Thomas write rule may ignore obsolete writes in a modified protocol).
3. Otherwise allow write and set `write_TS(X)=TS(Ti)`.

**Thomas write rule:** if TS(Ti) < write_TS(X), an obsolete write can be ignored rather than aborting, under the modified rule. Do not confuse this with basic timestamp ordering.

### 4.9 Common exam traps

- Conflict serialisability is tested by an acyclic precedence graph.
- Read-read does not create a conflict edge.
- 2PL's growing and shrinking phases cannot be interleaved.
- Strict 2PL specifically retains exclusive locks until completion; rigorous 2PL retains both shared and exclusive locks.
- Deadlock is not the same as starvation.
- Timestamp ordering uses both read_TS and write_TS tests; check operation type carefully.

---
