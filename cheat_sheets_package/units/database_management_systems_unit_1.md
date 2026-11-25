# DATABASE MANAGEMENT SYSTEM — DSC-304

## 1 — Introductory Concepts and Database Design Foundations

**Course code:** DSC-304

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
