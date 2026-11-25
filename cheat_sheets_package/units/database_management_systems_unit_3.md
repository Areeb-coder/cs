# DATABASE MANAGEMENT SYSTEM — DSC-304

## 3 — SQL and PL/SQL

**Course code:** DSC-304

**Source status:** Detailed syllabus supplied in CSE-DS course structure.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

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
