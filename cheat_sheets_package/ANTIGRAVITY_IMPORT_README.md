# JMI StudyHub Master Cheat Sheets — Antigravity Import Guide

## Files
- `MASTER_CHEAT_SHEETS.md` — complete source-of-record cheat sheet reference.
- `MASTER_CHEAT_SHEETS.docx` — editable, readable document edition.
- `MASTER_CHEAT_SHEETS.pdf` — print/read edition.
- `cheat_sheets_index.json` — structured subject/unit index and import paths.
- `syllabus_coverage_matrix.csv` — topic-level syllabus coverage statements and source status.
- `subjects/` — one Markdown file per subject/track.
- `units/` — one Markdown file per unit (35 unit files across six subjects and LPP).

## Import guidance
1. Reuse the existing StudyHub subject, unit and topic IDs. Do not create a second independent syllabus taxonomy.
2. Use `cheat_sheets_index.json` to locate subject and unit files. `MASTER_CHEAT_SHEETS.md` remains the full source of record.
3. Map every statement in `syllabus_coverage_matrix.csv` to the existing canonical topic IDs. It is a coverage checklist, not an automatic proof that the UI import is verified.
4. Preserve source and version caveats. Mathematics III and UHV detailed units are cross-branch JMI FET references; the supplied CSE-DS structure confirms course codes/titles but does not provide their detailed unit outlines.
5. Maintain separate labels for the JMI Discrete Mathematics Unit 5 LPP syllabus and the NPTEL extended LPP learning track. The separate LPP code is not supplied.
6. Math is stored in TeX delimiters. Render every equation using KaTeX or MathJax; do not expose raw TeX to students. Test both light/dark and mobile rendering.
7. Use expandable sections rather than cutting topics to fit a compact card. Generate quick views as summaries derived from the complete sheet, not by deleting content.
8. Do not overwrite notes, videos, PYQs or existing progress. Link cheat sheets into existing topic pages.
9. Have a human/content reviewer check formula correctness, source mapping and rendering before marking a sheet verified.

## Academic caveats
- The uploaded CSE-DS course structure contains detailed syllabi for DSC-301, DSC-302, DSC-303 and DSC-304.
- ASB-301 Mathematics III uses a five-unit 2025 JMI FET cross-branch outline in this draft. The previously supplied study context confirms Fourier in Unit III and Z-transform in Unit IV. Confirm Units I, II and V against the CSE-DS departmental handout.
- ASM-301 UHV uses a detailed five-unit JMI FET common-course outline from another branch; confirm exact CSE-DS unit mapping.
- LPP is shown as a separate paper in the supplied date sheet and also appears as Unit 5 in Discrete Mathematics. The extended NPTEL material is enrichment unless official examination scope confirms otherwise.
- This bundle focuses on theory cheat sheets and LPP. Build experiment-wise lab quick references from actual lab manuals, not from theory outlines.

## Intended StudyHub behaviours
- Subject → Unit → Topic display.
- Search by formula, definition, theorem, algorithm and keyword.
- Links to existing notes, videos, PYQs, quizzes and AI tutor.
- Full sheet, 5-minute and 60-second revision views.
- Print/PDF export with equations correctly typeset.
- Source/version labels and content verification workflow.
