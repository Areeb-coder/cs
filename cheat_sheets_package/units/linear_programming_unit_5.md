# LINEAR PROGRAMMING — SEPARATE EXAM TRACK + NPTEL EXTENDED CHEAT SHEETS

## 5 — Applications of LP in Machine Learning (Lecture 7)

**Course code:** LPP — code not supplied

**Source status:** Separate exam paper + five-unit/seven-lecture NPTEL extended source; confirm JMI course code and scope.

This is a unit-level extract from `MASTER_CHEAT_SHEETS.md`. Use the master file for the complete source and caveat notes.

## Unit 5 — Applications of LP in Machine Learning (Lecture 7)

### 7.29 Supervised learning setup

- Training data: input-output pairs \((x_i,y_i)\).
- Assume a class of functions (for example, linear) parameterised by w; estimate parameters from data.
- For a linear function on k features, \(f(x)=w^Tx+b\).
- More data can help estimate a function, but performance also depends on model assumptions, data quality and generalisation.

### 7.30 Linear regression with L1 error

For observations \((x_i,y_i)\), prediction \(w^Tx_i+b\), absolute error:
\[
|w^Tx_i+b-y_i|.
\]
Minimise total absolute error:
\[
\min_{w,b}\sum_{i=1}^{m}|w^Tx_i+b-y_i|.
\]
Linearise absolute values using nonnegative auxiliary variables t_i:
\[
\begin{aligned}
\min\quad &\sum_{i=1}^m t_i\\
\text{s.t. }&w^Tx_i+b-y_i\le t_i,\\
&-(w^Tx_i+b-y_i)\le t_i,\\
&t_i\ge0.
\end{aligned}
\]
Equivalently, both inequalities ensure \(t_i\ge|w^Tx_i+b-y_i|\). If w,b are unrestricted, represent each unrestricted component as positive minus negative variables for a standard nonnegative-variable LP.

### 7.31 L1 vs L2 error

- L1 absolute error: \(MAE=\frac1m\sum_i|y_i-\hat y_i|\). It can be linearised into an LP with auxiliary variables.
- Squared error: \(MSE=\frac1m\sum_i(y_i-\hat y_i)^2\); minimising it is a quadratic optimisation problem, not a standard LP.
- RMSE: \(\sqrt{MSE}\), has the same minimiser as MSE for nonnegative MSE but is not itself a linear objective.
- Do not say the NPTEL L1 regression LP minimises RMSE. The lecture's central LP regression objective is absolute/L1 error.

### 7.32 Linear classifiers

- A linear classifier uses a separating hyperplane:
  \[
  w^Tx+b=0.
  \]
- For labels y_i∈{−1,+1}, perfect separation constraints can be written:
  \[
  y_i(w^Tx_i+b)\ge1\quad\forall i,
  \]
  when the data are linearly separable and the scaling convention is chosen.
- Max-margin SVM commonly minimises a quadratic norm, so it is not the same as the simple LP feasibility formulation. Do not conflate them.
- Higher-degree/nonlinear decision boundaries can sometimes be represented as linear separators in a transformed higher-dimensional feature space, depending on the chosen feature map.

### 7.33 Common exam traps

- Clearly distinguish feature vector, label/target and learned parameters.
- An LP requires a linear objective and linear constraints.
- Absolute value can be linearised with an auxiliary variable and two inequalities.
- Squared error is quadratic, not linear.
- A separating hyperplane requires a consistent sign convention for labels.
- Higher-dimensional feature mapping can make a nonlinear boundary in original space correspond to a linear boundary in feature space.

---

# 8. SUBJECT-WIDE RAPID REVISION INDEX

This is a navigational index, not a replacement for the unit sheets.

| Subject | Units | Best rapid-revision assets |
|---|---:|---|
| Engineering Mathematics III — ASB-301 | 5 working units | Transform pairs, vector-calculus identities, multiple-integral elements, difference-equation/Z pairs, higher-calculus definitions |
| Universal Human Values — ASM-301 | 5 working units | Value-framework map, self/body distinction, relationship values, four orders, professional-ethics checklist |
| Discrete Mathematics — DSC-301 | 5 | Algebraic-structure comparison, graph formulas, recurrence methods, counting principles, LPP workflow |
| Data Structure — DSC-302 | 5 | Complexity table, address formulas, stack/queue operations, linked-list patterns, tree properties, graph traversal/MST/sorting |
| Digital Logic Design — DSC-303 | 5 | Number-system conversions, Boolean laws, K-map rules, adder equations, MUX/DEMUX, flip-flop tables, counter formulas |
| DBMS — DSC-304 | 5 | ER mapping rules, relational algebra, FD/closure/normal-form tests, SQL syntax, ACID/locking/timestamp rules, database-family comparison |
| LPP separate paper + NPTEL extended course | JMI Discrete Unit 5 + 5 extended units | LP formulation, graphical method, simplex, primal/dual, complementary slackness, minimax, max-flow/min-cut, set cover, L1 regression |

---

# 9. COVERAGE AUDIT AND SOURCE STATUS

## 9.1 CSE-DS syllabus topics represented in this pack

- [x] DSC-301 Discrete Mathematics — all five units represented.
- [x] DSC-302 Data Structure — all five units represented.
- [x] DSC-303 Digital Logic Design — all five units represented.
- [x] DSC-304 Database Management Systems — all five units represented.
- [x] ASB-301 Engineering Mathematics III — five-unit JMI FET 2025 cross-branch working structure represented; CSE-DS-specific detailed unit outline not present in the uploaded CSE-DS course-structure PDF. Unit mapping requires departmental confirmation.
- [x] ASM-301 Universal Human Values — five-unit JMI FET cross-branch outline represented; CSE-DS-specific detailed unit outline not present in uploaded CSE-DS course-structure PDF. Confirm with department.
- [x] Separate LPP examination track represented, with a JMI Unit 5 cross-link and seven-lecture NPTEL extended track.

## 9.2 Important caveats

1. **Mathematics III version:** The uploaded CSE-DS course-structure document confirms ASB-301 but does not provide its detailed unit outline. This pack's five-unit detailed working outline uses a 2025 JMI FET cross-branch ASB-301 syllabus. User-provided study context supports Fourier in Unit III and Z-transform in Unit IV. Obtain the CSE-DS-specific detailed ASB-301 handout before treating Units I, II and V as final.
2. **Older Mathematics variant:** An older JMI FET ASB-301 syllabus organises Units I, II and V differently, with vector calculus, linear algebra and probability/statistics respectively. Do not merge it with the 2025 outline without official confirmation.
3. **UHV version:** The detailed five-unit ASM-301 content is based on a JMI FET common-course outline from another engineering branch. The CSE-DS document confirms code/title, not detailed unit text. Confirm the exact CSE-DS handout.
4. **LPP exam scope:** The supplied date sheet lists a separate LPP paper; the CSE-DS curriculum's Discrete Mathematics Unit 5 also contains LPP fundamentals. The NPTEL extension goes substantially beyond those JMI Unit 5 points. Use labels that distinguish official JMI scope from NPTEL enrichment.
5. **Practical sheets:** This book is for theory subjects and LPP. Lab manuals/experiment lists should be used to create separate experiment-wise practical quick references; do not invent official experiments from theory syllabus alone.
6. **Formula convention:** Fourier and Z/Laplace transform definitions differ across books. This pack states conventions in each relevant unit; use the instructor's convention for exam answers.
7. **Verification:** The sheets are carefully structured revision aids, not a substitute for full notes, proofs, derivations or solving numerical problems. Antigravity should preserve source/version metadata and should not label unverified variants as official CSE-DS syllabus.

## 9.3 Recommended import behaviour for Antigravity

- Use the section headings and unit headings as canonical import boundaries.
- Preserve subject codes, unit labels, source caveats and formula notation.
- Store each formula and definition as structured content, not as one enormous plain-text blob.
- Render all displayed mathematics with MathJax or KaTeX.
- Run a source-to-topic coverage audit before publishing.
- Keep the Mathematics III and UHV version warnings visible in the admin/content review interface until a CSE-DS-specific syllabus is supplied.
- Maintain distinct JMI LPP and NPTEL extended-LPP labels.
- Do not silently omit content that does not fit a compact card; use expandable complete sheets.


# 10. SOURCE AND PROVENANCE MAP

## University curriculum sources

- **CSE-DS Semester III course structure:** user-provided file `cs_fet_comp_engg_btech_Data_Sciences_2025 (1).pdf`. This is the source for the official CSE-DS course codes/titles and detailed syllabus statements for DSC-301, DSC-302, DSC-303 and DSC-304.
- **Engineering Mathematics III (ASB-301) detailed working outline:** JMI Faculty of Engineering & Technology, 2025 Mechanical Engineering syllabus, ASB-301 section. This is a JMI cross-branch reference, not a confirmed CSE-DS-specific unit handout: https://jmi.ac.in/upload/programme/cs_fet_me_btech_mechanical_2025september4.pdf
- **Universal Human Values (ASM-301) detailed working outline:** JMI Faculty of Engineering & Technology, 2024–25 Electrical and Computer Engineering syllabus, ASM-301 section. This is a cross-branch common-course reference, not a confirmed CSE-DS-specific unit handout: https://www.jmi.ac.in/upload/programme/syllabus_fet_ece_btech_2024-25.pdf

## NPTEL LPP source documents supplied by the user

- `Week 1 and Week 2 Lecture Notes.pdf` — Lecture 1.
- `Week 3 and Week 4 Lecture Notes.pdf` — Lecture 2.
- `Week 5 Lecture Notes.pdf` — Lecture 3.
- `Week 6 Lecture Notes.pdf` — Lecture 4.
- `Week 7 Lecture Notes.pdf` — Lecture 5.
- `Week 8 Lecture Notes_1.pdf` — Lecture 6.
- `Week 8 Lecture Notes_2.pdf` — Lecture 7.

## Editorial and verification policy

The cheat sheets are a structured revision draft prepared from the sources above. Before the website labels any page **verified**, an academic reviewer should check the formulas, edge cases and source-specific syllabus version. In particular, obtain the current CSE-DS detailed ASB-301 and ASM-301 handouts to finalise their unit mapping.
