import rawData from './master_cheatsheets_data.json';

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
