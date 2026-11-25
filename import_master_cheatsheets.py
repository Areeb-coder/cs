"""
Reads cheat_sheets_package/cheat_sheets_index.json,
syllabus_coverage_matrix.csv, and each Markdown file in cheat_sheets_package/units/,
and produces src/data/master_cheatsheets_data.json and src/data/master_cheatsheets.ts.
Preserves:
- Exact subject mapping (asb-301, asm-301, dsc-301, dsc-302, dsc-303, dsc-304, lpp)
- Exact unit hierarchy (5 units per subject, 35 units total)
- 60-second summary, 5-minute structured concepts, and complete markdown content
- Formula cards, definitions, algorithms, exam traps, and coverage statements
- Academic caveats and cross-branch verification status notes
"""

import json
import re
from pathlib import Path

BASE_DIR = Path("cheat_sheets_package")
INDEX_FILE = BASE_DIR / "cheat_sheets_index.json"
CSV_FILE = BASE_DIR / "syllabus_coverage_matrix.csv"

index_data = json.loads(INDEX_FILE.read_text(encoding="utf-8"))

# Mapping from bundle subject IDs to existing StudyHub subject IDs
SUBJECT_ID_MAP = {
    "engineering_mathematics_iii": "asb-301",
    "universal_human_values": "asm-301",
    "discrete_mathematics": "dsc-301",
    "data_structures": "dsc-302",
    "digital_logic_design": "dsc-303",
    "database_management_systems": "dsc-304",
    "linear_programming": "lpp"
}

# Parse CSV statements by unit_id
csv_lines = CSV_FILE.read_text(encoding="utf-8").splitlines()
csv_by_unit = {}
if csv_lines:
    header = csv_lines[0].split(",")
    for line in csv_lines[1:]:
        if not line.strip():
            continue
        parts = line.split(",")
        if len(parts) >= 8:
            u_id = parts[3].strip()
            stmt = parts[6].strip().strip('"')
            stat = parts[7].strip().strip('"')
            src_stat = parts[8].strip().strip('"') if len(parts) > 8 else ""
            if u_id not in csv_by_unit:
                csv_by_unit[u_id] = []
            csv_by_unit[u_id].append({
                "statement": stmt,
                "cheatSheetStatus": stat,
                "sourceStatus": src_stat
            })

print(f"Loaded {sum(len(v) for v in csv_by_unit.values())} syllabus coverage statements across {len(csv_by_unit)} units.")

imported_subjects = []

for sub in index_data["subjects"]:
    sub_bundle_id = sub["id"]
    sub_app_id = SUBJECT_ID_MAP.get(sub_bundle_id, sub_bundle_id)
    sub_code = sub.get("courseCode", "CSE-DS")
    sub_title = sub["title"]
    source_status = sub.get("sourceStatus", "")
    
    imported_units = []
    
    for u_idx, u in enumerate(sub["units"], 1):
        u_bundle_id = u["id"]
        u_title = u["title"]
        u_sheet_path = BASE_DIR / u["unitSheetPath"]
        u_coverage = u.get("coverageStatements", [])
        
        md_content = u_sheet_path.read_text(encoding="utf-8") if u_sheet_path.exists() else ""
        
        # Parse sections from markdown
        sections = []
        current_sec = None
        for line in md_content.splitlines():
            if line.startswith("### "):
                if current_sec:
                    sections.append(current_sec)
                current_sec = {
                    "heading": line.replace("### ", "").strip(),
                    "body": []
                }
            elif current_sec:
                current_sec["body"].append(line)
        if current_sec:
            sections.append(current_sec)
            
        # Extract 60-sec bullets from syllabus coverage or top sections
        sixty_bullets = []
        exam_traps = []
        core_concepts = []
        formula_blocks = []
        
        for sec in sections:
            h_lower = sec["heading"].lower()
            text = "\n".join(sec["body"]).strip()
            
            if "exam trap" in h_lower or "common mistake" in h_lower:
                for line in sec["body"]:
                    cleaned = line.strip().lstrip("-*•").strip()
                    if cleaned:
                        exam_traps.append(cleaned)
            elif "syllabus coverage" in h_lower:
                for line in sec["body"]:
                    cleaned = line.strip().lstrip("-*•").strip()
                    if cleaned:
                        sixty_bullets.append(cleaned)
            else:
                core_concepts.append({
                    "title": sec["heading"],
                    "content": text
                })
                # Check for display math equations \\[ ... \\]
                math_found = re.findall(r'\\\[([\s\S]+?)\\\]', text)
                for mf in math_found:
                    formula_blocks.append({
                        "name": sec["heading"],
                        "formula": mf.strip()
                    })

        # Fallback sixty bullets if none extracted
        if not sixty_bullets:
            sixty_bullets = u_coverage[:5]

        csv_entries = csv_by_unit.get(u_bundle_id, [])

        unit_obj = {
            "unitId": f"{sub_app_id}-u{u_idx}",
            "unitBundleId": u_bundle_id,
            "unitNumber": u_idx,
            "unitTitle": u_title,
            "subjectId": sub_app_id,
            "sourceStatus": u.get("sourceStatus", source_status),
            "coverageStatements": u_coverage,
            "csvCoverageEntries": csv_entries,
            "sixtySecSummary": sixty_bullets,
            "coreConcepts": core_concepts,
            "formulaBlocks": formula_blocks,
            "examTraps": exam_traps,
            "markdownSource": md_content
        }
        imported_units.append(unit_obj)
        
    sub_obj = {
        "subjectId": sub_app_id,
        "bundleId": sub_bundle_id,
        "subjectCode": sub_code,
        "subjectTitle": sub_title,
        "sourceStatus": source_status,
        "units": imported_units,
        "unitCount": len(imported_units)
    }
    imported_subjects.append(sub_obj)

out_json = Path("src/data/master_cheatsheets_data.json")
out_json.write_text(json.dumps(imported_subjects, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"Saved {len(imported_subjects)} subjects with {sum(s['unitCount'] for s in imported_subjects)} units to {out_json}.")

ts_export = """import rawData from './master_cheatsheets_data.json';

export interface CheatSheetCoverageEntry {
  statement: string;
  cheatSheetStatus: string;
  sourceStatus: string;
}

export interface CheatSheetCoreConcept {
  title: string;
  content: string;
}

export interface CheatSheetFormulaBlock {
  name: string;
  formula: string;
}

export interface ImportedUnitCheatSheet {
  unitId: string;
  unitBundleId: string;
  unitNumber: number;
  unitTitle: string;
  subjectId: string;
  sourceStatus: string;
  coverageStatements: string[];
  csvCoverageEntries: CheatSheetCoverageEntry[];
  sixtySecSummary: string[];
  coreConcepts: CheatSheetCoreConcept[];
  formulaBlocks: CheatSheetFormulaBlock[];
  examTraps: string[];
  markdownSource: string;
}

export interface ImportedSubjectCheatSheet {
  subjectId: string;
  bundleId: string;
  subjectCode: string;
  subjectTitle: string;
  sourceStatus: string;
  unitCount: number;
  units: ImportedUnitCheatSheet[];
}

export const MASTER_CHEATSHEETS: ImportedSubjectCheatSheet[] = rawData as ImportedSubjectCheatSheet[];

export function getMasterCheatSheet(subjectId: string): ImportedSubjectCheatSheet | undefined {
  return MASTER_CHEATSHEETS.find((s) => s.subjectId === subjectId);
}
"""

Path("src/data/master_cheatsheets.ts").write_text(ts_export, encoding="utf-8")
print("Wrote src/data/master_cheatsheets.ts successfully.")
