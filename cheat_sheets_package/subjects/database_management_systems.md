# DATABASE MANAGEMENT SYSTEM — DSC-304

**Course code:** DSC-304

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

Part of the JMI StudyHub Semester III Master Cheat Sheets. Preserve the source/version caveats and the official-scope versus enrichment distinction in the master file.

# 6. DATABASE MANAGEMENT SYSTEM — DSC-304

## Unit 1 — Introductory Concepts and Database Design Foundations

### 1.1 Syllabus coverage

- DBMS introduction, purpose and applications.
- Data independence.
- Three-schema/database architecture and mappings.
- Database users and database administrator (DBA).
- Entity–Relationship (ER) model.
- Constraints and keys.
- ER design issues and ER diagrams.
- Generalisation, specialisation and aggregation.
- ER-to-relational mapping.
- Tuple relational calculus (TRC), domain relational calculus (DRC) and relational algebra.

### 1.2 DBMS essentials

- **Database:** organised collection of related data.
- **DBMS:** software to define, create, store, retrieve, update and administer databases.
- **Metadata:** data describing database structures, constraints and other data.
- **Schema:** logical design/structure; **instance:** data stored at a particular time.
- **Data independence:** ability to change a schema at one level without requiring changes at the next higher level.

### 1.3 Three-schema architecture

| Level | What it describes | Example concern |
|---|---|---|
| External/view | Individual user/application views | A student sees own grades |
| Conceptual/logical | Whole database structure and relationships | Student, Course, Enrollment |
| Internal/physical | Files, pages, indexes and storage details | B-tree index, disk layout |

- **Physical data independence:** change internal schema without changing conceptual schema.
- **Logical data independence:** change conceptual schema without changing external views/programs. Usually harder to achieve.
- **Mapping:** external–conceptual mapping connects views to the conceptual schema; conceptual–internal mapping connects logical structures to physical storage.
- **DBA responsibilities:** authorisation/security, schema definition, storage/access methods, backup/recovery, integrity, performance and concurrency configuration.

### 1.4 ER model quick reference

| Element | Meaning | Diagram convention (common Chen notation) |
|---|---|---|
| Entity | Distinguishable real-world object | Rectangle |
| Weak entity | Entity lacking a full key of its own | Double rectangle |
| Relationship | Association between entities | Diamond |
| Attribute | Property of an entity/relationship | Oval |
| Key attribute | Attribute identifying entity instances | Underlined |
| Multivalued attribute | Can have multiple values | Double oval |
| Derived attribute | Computed from other data | Dashed oval |
| Identifying relationship | Connects weak entity to owner | Double diamond |

**Cardinality constraints:** 1:1, 1:N, N:1, M:N. Participation can be total (every entity must participate) or partial.

**Keys:**
- Superkey: any attribute set uniquely identifying a row.
- Candidate key: minimal superkey.
- Primary key: chosen candidate key.
- Alternate key: candidate key not chosen as primary.
- Composite key: key with more than one attribute.
- Foreign key: attribute(s) referencing a candidate/primary key in another or the same relation.

**ER design checklist:** identify entities, attributes, keys, relationships, cardinalities, participation constraints, weak entities and multivalued/derived attributes. Avoid duplicating facts in multiple places.

### 1.5 Generalisation, specialisation and aggregation

- **Specialisation:** top-down split of a superclass into subclasses based on distinguishing characteristics.
- **Generalisation:** bottom-up combination of similar entity types into a superclass.
- **Disjoint constraint:** an entity belongs to at most one subclass; **overlap:** it may belong to multiple.
- **Total specialisation:** every superclass entity must belong to a subclass; **partial:** some may belong to none.
- **Aggregation:** treat a relationship set (and its participating entities) as a higher-level abstract entity so it can participate in another relationship.

### 1.6 ER-to-relational mapping rules

1. Strong entity: create a relation containing simple attributes; expand composite attributes; omit derived attributes unless materialised deliberately. Choose the entity key as primary key.
2. Weak entity: create a relation containing its attributes plus owner entity's primary key as foreign key; primary key is generally owner key + weak entity's partial key.
3. 1:1 relationship: add one side's primary key as a foreign key on the other side (prefer total-participation side when suitable), or create a separate relation if needed for attributes/constraints.
4. 1:N relationship: add the primary key of the “1” side as a foreign key on the “N” side; include relationship attributes on the N-side relation.
5. M:N relationship: create a new relation with primary keys of participating entities as foreign keys; their combination commonly forms the primary key; add relationship attributes.
6. Multivalued attribute: create a separate relation with owner key + attribute value.
7. N-ary relationship: create a relation with foreign keys for participating entities and relationship attributes; determine key from cardinality constraints.

### 1.7 Relational algebra reference

Let relations be `R` and `S`.

| Operator | Notation | Meaning |
|---|---|---|
| Selection | \(\sigma_{condition}(R)\) | Select rows satisfying condition |
| Projection | \(\pi_{A_1,\ldots,A_n}(R)\) | Select columns; duplicate tuples removed in classical relational algebra |
| Union | \(R\cup S\) | Tuples in either; union-compatible relations required |
| Difference | \(R-S\) | Tuples in R but not S; union-compatible required |
| Cartesian product | \(R\times S\) | Every tuple pair |
| Rename | \(\rho_{NewName}(R)\) | Rename relation/attributes |
| Intersection | \(R\cap S\) | Common tuples; derived from union/difference |
| Join | \(R\bowtie_{condition}S\) | Combine matching tuples |
| Natural join | \(R\bowtie S\) | Join on same-named attributes and remove duplicate join columns |
| Division | \(R\div S\) | “For all” queries, subject to schema |

Useful identities:
\[
\sigma_{c_1\land c_2}(R)=\sigma_{c_1}(\sigma_{c_2}(R))
\]
\[
\pi_A(\pi_{A\cup B}(R))=\pi_A(R)\quad(A\subseteq A\cup B)
\]
\[
R\bowtie S=\sigma_{join\ condition}(R\times S)
\]

### 1.8 Relational calculus

- **TRC:** variables range over tuples; a query describes tuples satisfying a predicate, e.g. \(\{t\mid P(t)\}\).
- **DRC:** variables range over attribute/domain values; a query describes value tuples satisfying a predicate, e.g. \(\{\langle x_1,\ldots,x_n\rangle\mid P(x_1,\ldots,x_n)\}\).
- Both are declarative/non-procedural: specify what result is required rather than a sequence of operations.
- A safe expression should be range-restricted (result variables limited by database predicates); avoid unrestricted domains/infinite result sets.

### 1.9 Common exam traps

- Schema is structure; instance is current data.
- Physical data independence concerns storage; logical data independence concerns conceptual design.
- Candidate key is minimal; superkey need not be.
- 1:N and M:N mapping rules are different.
- A multivalued attribute generally becomes a separate relation.
- Classical relational algebra uses set semantics; SQL usually uses bag/multiset semantics unless `DISTINCT` is specified.
- Natural join may match every same-named attribute, not just the one intended. Prefer explicit join conditions in SQL.

---

## Unit 2 — Database Design, Functional Dependencies and Normalisation

### 2.1 Syllabus coverage

- Functional dependencies (FDs).
- Armstrong's axioms.
- Attribute closure and FD-set closure.
- Minimal/canonical cover.
- 1NF, 2NF, 3NF and BCNF.
- Decomposition and desirable properties.
- 3NF synthesis and BCNF decomposition algorithms.
- 4NF and 5NF.

### 2.2 Functional dependencies

For relation schema \(R\), an FD \(X\to Y\) holds when any two tuples agreeing on attributes X must agree on attributes Y.

- **Trivial FD:** \(Y\subseteq X\).
- **Non-trivial:** \(Y\nsubseteq X\).
- **Completely non-trivial:** \(X\cap Y=\varnothing\).
- **Superkey:** X functionally determines all attributes of R.
- **Candidate key:** minimal superkey.
- **Prime attribute:** appears in at least one candidate key; non-prime does not.

### 2.3 Armstrong's axioms

1. Reflexivity: if \(Y\subseteq X\), then \(X\to Y\).
2. Augmentation: if \(X\to Y\), then \(XZ\to YZ\).
3. Transitivity: if \(X\to Y\) and \(Y\to Z\), then \(X\to Z\).

Useful derived rules:
- Union: \(X\to Y\) and \(X\to Z\Rightarrow X\to YZ\).
- Decomposition: \(X\to YZ\Rightarrow X\to Y\) and \(X\to Z\).
- Pseudotransitivity: \(X\to Y\) and \(WY\to Z\Rightarrow WX\to Z\).

### 2.4 Attribute closure algorithm

Closure of X under FD set F, written \(X_F^+\): all attributes functionally determined by X.

**Algorithm:**
1. Initialise `result = X`.
2. Scan every FD `A -> B` in F.
3. If `A` is a subset of `result`, add all attributes of B.
4. Repeat until a full scan adds nothing.
5. `X` is a superkey iff \(X_F^+=R\).
6. X is a candidate key iff it is a superkey and no proper subset is a superkey.

To test whether \(X\to Y\) follows from F: compute \(X_F^+\); it holds iff \(Y\subseteq X_F^+\).

**FD-set closure** \(F^+\): all FDs implied by F. Do not confuse this with one attribute-set closure.

### 2.5 Minimal/canonical cover

A minimal cover G is equivalent to F and has:
- Single attribute on the right side of every FD.
- No extraneous attribute on any left side.
- No redundant FD.

Procedure:
1. Split every RHS into singleton attributes.
2. For each FD `X -> A`, test each attribute B in X for extraneousness by checking whether A is still implied from `(X - {B})` under the relevant FD set.
3. Remove extraneous LHS attributes.
4. Test each FD for redundancy by removing it and checking whether it is implied by the remaining set.
5. Merge FDs with same LHS only if a combined cover is desired; keep single RHS for the strict minimal-cover form.

### 2.6 Normal forms

| Normal form | Core test | Memory cue |
|---|---|---|
| 1NF | Attribute values are atomic in the chosen model; no repeating groups | Atomic values |
| 2NF | 1NF and no non-prime attribute is partially dependent on any candidate key | No partial dependency |
| 3NF | For every non-trivial FD \(X\to A\), X is a superkey OR A is prime | Superkey or prime RHS |
| BCNF | For every non-trivial FD \(X\to Y\), X is a superkey | Every determinant is a superkey |
| 4NF | For every non-trivial MVD \(X\twoheadrightarrow Y\), X is a superkey | No non-key independent multivalued facts |
| 5NF/PJNF | Every non-trivial join dependency is implied by candidate keys | No non-key join dependency |

**2NF test workflow:** identify all candidate keys; identify prime/non-prime attributes; identify partial dependencies of non-prime attributes on proper subsets of candidate keys.

**3NF vs BCNF:** BCNF is stricter. A relation can be in 3NF but not BCNF when a determinant is not a superkey but the dependent attribute is prime.

### 2.7 Decomposition properties

- **Lossless (non-additive) join:** joining decomposed relations reconstructs exactly the original relation, without spurious tuples.
- For binary decomposition of R into R1 and R2 under F, a standard lossless condition is:
  \[
  (R_1\cap R_2)\to R_1\quad\text{or}\quad(R_1\cap R_2)\to R_2\quad\text{in }F^+.
  \]
- **Dependency preservation:** dependencies can be enforced on individual decomposed relations without joining them. If \(F_i\) is the projection of F onto Ri, preservation requires \((\cup_iF_i)^+=F^+\).
- A decomposition can be lossless but not dependency-preserving, or dependency-preserving but lossy; test both separately.

### 2.8 3NF synthesis algorithm

1. Compute a minimal cover Fmin.
2. For each FD with LHS X and RHS A (or grouped RHS), create relation schema X∪A.
3. Remove any schema contained in another schema.
4. If no created schema contains a candidate key of original R, add a relation containing a candidate key.
5. The standard synthesis algorithm is lossless and dependency-preserving under its assumptions.

### 2.9 BCNF decomposition algorithm

1. Start with relation R.
2. Find a non-trivial FD \(X\to Y\) that violates BCNF (X is not a superkey).
3. Decompose R into \(R_1=X\cup Y\) and \(R_2=R-(Y-X)\) (equivalently, use the common intersection X and preserve remaining attributes in R2).
4. Recurse on each resulting relation that violates BCNF.
5. BCNF decomposition is lossless, but dependency preservation is not guaranteed.

### 2.10 Multivalued dependencies and 4NF

- An MVD \(X\twoheadrightarrow Y\) says that for a fixed X, the set of Y values is independent of the remaining attributes Z = R−X−Y.
- Trivial MVD if Y⊆X or X∪Y=R.
- If X is not a superkey and a non-trivial MVD exists, 4NF is violated.
- Decompose R into XY and XZ for a non-trivial MVD \(X\twoheadrightarrow Y\) when appropriate.

### 2.11 Join dependencies and 5NF

A join dependency \(*\{R_1,R_2,\ldots,R_n\}\) states that every legal instance of R equals the natural join of its projections on the listed schemas. 5NF is concerned with non-trivial join dependencies not implied by candidate keys. Be prepared to explain why a decomposition needs three or more projections when pairwise binary dependencies are insufficient.

### 2.12 Common exam traps

- Do not identify a candidate key just by looking at attributes; compute closure and test minimality.
- Prime means part of at least one candidate key, not necessarily the primary key.
- 3NF and BCNF tests differ on prime RHS attributes.
- Lossless join and dependency preservation are different properties.
- A decomposition into BCNF may lose dependency preservation.
- 4NF concerns multivalued dependencies, not simply ordinary FDs.
- 5NF concerns join dependencies, not just “more normalisation”.

---

## Unit 3 — SQL and PL/SQL

### 3.1 Syllabus coverage

- SQL statements and clauses: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY.
- INSERT, DELETE, UPDATE, DROP and VIEW.
- Nested queries.
- NOT NULL, UNIQUE, CHECK, PRIMARY KEY and FOREIGN KEY constraints.
- PL/SQL variables, literals and data types.
- Benefits of PL/SQL.
- IF and iterative control: LOOP, WHILE, FOR and GOTO as listed in the syllabus.
- Functions, cursors, triggers and views.

### 3.2 SQL command families

| Family | Commands | Purpose |
|---|---|---|
| DDL | CREATE, ALTER, DROP, TRUNCATE | Define/change schema objects |
| DML | INSERT, UPDATE, DELETE, MERGE | Change table data |
| DQL (common teaching label) | SELECT | Retrieve data |
| DCL | GRANT, REVOKE | Permissions |
| TCL | COMMIT, ROLLBACK, SAVEPOINT | Transaction control |

Note: Different textbooks classify SELECT as DQL or include it under DML; follow the instructor's convention in exams.

### 3.3 SELECT query skeleton

```sql
SELECT [DISTINCT] column_list
FROM table_or_join
WHERE row_condition
GROUP BY grouping_columns
HAVING group_condition
ORDER BY sort_columns [ASC|DESC];
```

Logical processing model (simplified):

`FROM/JOIN then WHERE then GROUP BY then HAVING then SELECT then DISTINCT then ORDER BY then FETCH/LIMIT`.

- WHERE filters rows before grouping.
- HAVING filters groups after aggregation.
- ORDER BY sorts the result.
- DISTINCT removes duplicate selected rows.

### 3.4 Common predicates and operators

- Comparison: `=`, `<>`/`!=`, `<`, `<=`, `>`, `>=`.
- Logical: `AND`, `OR`, `NOT`.
- Range: `BETWEEN low AND high` (inclusive endpoints).
- Set: `IN (...)`, `NOT IN (...)`.
- Pattern: `LIKE 'A%'`, `%` matches any sequence, `_` one character.
- Null: `IS NULL`, `IS NOT NULL`; never test NULL with `= NULL`.
- Existence: `EXISTS (subquery)`, `NOT EXISTS`.
- Arithmetic: `+`, `-`, `*`, `/`.

### 3.5 Aggregation functions

| Function | Meaning | Important note |
|---|---|---|
| COUNT(*) | Counts rows | Includes rows with NULLs |
| COUNT(col) | Counts non-NULL values | Excludes NULL |
| COUNT(DISTINCT col) | Counts distinct non-NULL values | Dialect support generally broad |
| SUM(col) | Sum of non-NULL values | Usually numeric |
| AVG(col) | Mean of non-NULL values | NULL ignored |
| MIN/MAX | Minimum/maximum non-NULL value | Type-dependent ordering |

Example:
```sql
SELECT dept_id, AVG(salary) AS avg_salary
FROM Employee
WHERE status = 'ACTIVE'
GROUP BY dept_id
HAVING AVG(salary) > 50000
ORDER BY avg_salary DESC;
```

### 3.6 Joins

| Join | Result |
|---|---|
| INNER JOIN | Matching row pairs only |
| LEFT OUTER JOIN | All left rows plus matches; unmatched right columns NULL |
| RIGHT OUTER JOIN | All right rows plus matches |
| FULL OUTER JOIN | Matched and unmatched rows from both sides |
| CROSS JOIN | Cartesian product |
| SELF JOIN | Table joined to itself using aliases |
| NATURAL JOIN | Automatically joins all identically named columns; use cautiously |

Explicit join pattern:
```sql
SELECT e.emp_id, e.name, d.dept_name
FROM Employee e
JOIN Department d ON d.dept_id = e.dept_id;
```

### 3.7 Subqueries

- Scalar subquery: returns one value.
- Single-row subquery: use comparison operators where one row is guaranteed.
- Multi-row: use `IN`, `ANY`, `ALL` or `EXISTS` as appropriate.
- Correlated subquery: refers to an outer query column and is conceptually evaluated for each outer row.
- `EXISTS` tests whether at least one row is returned.
- Beware of `NOT IN` with NULL in the subquery; SQL three-valued logic can make the result UNKNOWN. `NOT EXISTS` is often safer.

Example: employees paid above their department average:
```sql
SELECT e.emp_id, e.name, e.salary
FROM Employee e
WHERE e.salary > (
  SELECT AVG(e2.salary)
  FROM Employee e2
  WHERE e2.dept_id = e.dept_id
);
```

### 3.8 Constraints

```sql
CREATE TABLE Department (
  dept_id   INTEGER PRIMARY KEY,
  dept_name VARCHAR(80) NOT NULL UNIQUE
);

CREATE TABLE Employee (
  emp_id    INTEGER PRIMARY KEY,
  name      VARCHAR(100) NOT NULL,
  salary    DECIMAL(10,2) CHECK (salary >= 0),
  dept_id   INTEGER,
  CONSTRAINT fk_emp_dept FOREIGN KEY (dept_id)
    REFERENCES Department(dept_id)
);
```

- PRIMARY KEY: unique and non-NULL; one primary-key constraint per table, may be composite.
- UNIQUE: forbids duplicate key values; NULL behaviour depends on DBMS.
- NOT NULL: disallows NULL.
- CHECK: requires condition to be TRUE or UNKNOWN depending on implementation semantics; verify DBMS behaviour for NULL.
- FOREIGN KEY: enforces referential integrity; actions may include RESTRICT/NO ACTION/CASCADE/SET NULL/SET DEFAULT subject to DBMS.

### 3.9 Data modification statements

```sql
INSERT INTO Student(id, name) VALUES (1, 'Asha');

UPDATE Student
SET name = 'Asha Khan'
WHERE id = 1;

DELETE FROM Student
WHERE id = 1;
```

**Exam trap:** Omitting WHERE from UPDATE or DELETE can affect every row.

### 3.10 Views

```sql
CREATE VIEW ActiveEmployees AS
SELECT emp_id, name, dept_id
FROM Employee
WHERE status = 'ACTIVE';
```

- A view is a stored query definition, presented as a virtual table in the common case.
- It can simplify queries, restrict visible columns/rows and provide logical abstraction.
- Updatability depends on the view definition and DBMS; grouped/aggregate/complex joins often restrict direct updates.
- `DROP VIEW view_name;` removes the view definition, not the underlying base tables.

### 3.11 PL/SQL block structure (Oracle-style)

```sql
DECLARE
  -- declarations: variables, constants, cursors
BEGIN
  -- executable statements
EXCEPTION
  -- exception handlers
END;
/
```

- DECLARE is optional; BEGIN and END are required.
- `/` is a client/tool command in common Oracle script environments, not a SQL statement itself.
- PL/SQL supports variables, constants, literals, records, collections, control flow, subprograms, cursors, exceptions and triggers.

### 3.12 PL/SQL variables and types

```sql
DECLARE
  v_count PLS_INTEGER := 0;
  v_name  VARCHAR2(100);
  v_sal   NUMBER(10,2);
  v_emp   Employee%ROWTYPE;
BEGIN
  SELECT COUNT(*) INTO v_count FROM Employee;
  DBMS_OUTPUT.PUT_LINE('Employees: ' || v_count);
END;
/
```

- `%TYPE`: inherit a column/variable type.
- `%ROWTYPE`: record matching a table or cursor row structure.
- Oracle-style examples use `VARCHAR2`, `NUMBER`, `PLS_INTEGER`; do not assume every type/syntax is accepted identically in MySQL/PostgreSQL.

### 3.13 Control structures

```sql
IF condition THEN
  statements;
ELSIF other_condition THEN
  statements;
ELSE
  statements;
END IF;
```

```sql
LOOP
  statements;
  EXIT WHEN condition;
END LOOP;
```

```sql
WHILE condition LOOP
  statements;
END LOOP;
```

```sql
FOR i IN 1..5 LOOP
  DBMS_OUTPUT.PUT_LINE(i);
END LOOP;
```

GOTO uses a label and should be covered because it is listed in the supplied syllabus, but prefer structured control flow in good programming practice.

### 3.14 Cursors

- Implicit cursor: managed automatically for SQL statements.
- Explicit cursor: programmer declares and controls multi-row query processing.
- Lifecycle: DECLARE then OPEN then FETCH (repeat) then CLOSE.

```sql
DECLARE
  CURSOR c_emp IS SELECT emp_id, name FROM Employee;
  v_id Employee.emp_id%TYPE;
  v_name Employee.name%TYPE;
BEGIN
  OPEN c_emp;
  LOOP
    FETCH c_emp INTO v_id, v_name;
    EXIT WHEN c_emp%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(v_id || ' ' || v_name);
  END LOOP;
  CLOSE c_emp;
END;
/
```

Cursor attributes (Oracle): `%FOUND`, `%NOTFOUND`, `%ISOPEN`, `%ROWCOUNT`.

### 3.15 Functions and triggers

- Function: named PL/SQL subprogram that returns a value using `RETURN`.
- Trigger: stored program automatically executed in response to an event such as INSERT/UPDATE/DELETE or a database/system event.
- Trigger timing may be BEFORE/AFTER/INSTEAD OF; level may be statement-level or row-level depending on DBMS.
- Use triggers carefully: hidden side effects can complicate debugging and transaction behaviour.

### 3.16 Common exam traps

- WHERE filters rows; HAVING filters groups.
- COUNT(*) counts rows; COUNT(column) ignores NULL.
- SQL NULL is not equal to anything, including another NULL; use IS NULL.
- Use aliases for self/correlated joins.
- Be careful with NOT IN and NULL.
- DISTINCT applies to the full selected row combination.
- `DROP TABLE` and `DROP VIEW` are different.
- PL/SQL syntax is DBMS-specific; the supplied lab environment may differ from Oracle syntax. Keep an Oracle/PLSQL sheet separate from MySQL SQL syntax.

---

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

## Unit 5 — Advanced Databases

### 5.1 Syllabus coverage

- NoSQL databases.
- Cloud-based DBMS.
- Open-source databases.
- Distributed databases.
- Object-oriented databases.
- Mobile databases.
- Multimedia databases.
- Open issues and uncertainties.

### 5.2 NoSQL reference

“NoSQL” is an umbrella term for non-relational data models and/or systems designed for particular scale, flexibility or access patterns. The categories below are common families; individual products may overlap.

| Family | Data model | Typical use | Main design concern |
|---|---|---|---|
| Key-value | Key then value | Cache, session, lookup | Key design and access pattern |
| Document | JSON/BSON-like documents | Catalogues, flexible records | Schema evolution and indexing |
| Wide-column | Column families/partitioned rows | Large-scale distributed workloads | Partition keys and query model |
| Graph | Vertices and edges | Relationships and traversal | Graph modelling/query cost |

Relational DBMS are often preferable for strongly structured data, rich joins and transactional consistency requirements. NoSQL is not automatically faster or better; choose based on data model, consistency, access patterns, scale and operations.

### 5.3 Distributed database concepts

- Data fragmentation: horizontal (rows), vertical (columns) or hybrid.
- Replication: maintain copies at multiple nodes for availability/latency, with consistency and coordination costs.
- Transparency: location, fragmentation and replication transparency aim to hide distribution details from users.
- Distributed transaction: transaction spanning multiple nodes; coordination/recovery are more complex.
- CAP theorem (informal exam shorthand): during a network partition, a distributed system cannot guarantee both strong consistency and availability for all requests. CAP does not say “pick any two at all times”; its statement is about partition behaviour.
- Partitioning/sharding distributes data across nodes; a poor partition key can create hotspots.

### 5.4 Cloud-based DBMS

- Database-as-a-Service (DBaaS): provider manages much of provisioning, patching, backups and scaling.
- Benefits: elastic resources, managed operations, availability options, reduced infrastructure administration.
- Concerns: vendor lock-in, cost control, latency, data residency, access control, backup/restore testing and shared-responsibility security.

### 5.5 Open-source DBMS

Examples include PostgreSQL, MySQL/MariaDB and SQLite; product choice depends on licence, features, compatibility, support, deployment, performance and governance. “Open source” describes licensing/development model, not absence of administration cost or guarantees.

### 5.6 Object-oriented, mobile and multimedia databases

- **Object-oriented DBMS:** persists objects with identity, types/classes, encapsulation, inheritance and relationships; object-relational systems combine relational tables with richer types.
- **Mobile databases:** support intermittent connectivity, local storage, synchronisation, conflict resolution, limited device resources and security/privacy.
- **Multimedia databases:** manage images, audio, video and related metadata; challenges include large objects, compression, indexing, similarity search, streaming and content retrieval.

### 5.7 Open issues and design checklist

When comparing database approaches, ask:
- What data model and query patterns are required?
- What are transaction and consistency requirements?
- What availability/latency targets exist?
- How are replication and partitioning handled?
- What is the backup, recovery and disaster strategy?
- How is access control, encryption and auditing managed?
- What are cost, licensing, portability and vendor-lock-in implications?
- How are data quality, privacy and governance addressed?

### 5.8 Common exam traps

- NoSQL is not one single data model.
- Distributed does not automatically mean cloud; cloud systems need not be distributed from the user's perspective.
- Replication improves availability/read locality but introduces consistency and coordination concerns.
- A DBMS being open source does not make it cost-free to operate.
- Mobile databases must address offline synchronisation and conflicts.
- Multimedia DBMS must manage both media objects and descriptive metadata.

---
