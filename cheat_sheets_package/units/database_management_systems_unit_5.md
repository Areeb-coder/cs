# DATABASE MANAGEMENT SYSTEM — DSC-304

## 5 — Advanced Databases

**Course code:** DSC-304

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
