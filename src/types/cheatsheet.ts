import { ProvenanceStatus } from './academic';

export type CheatSheetRevisionLevel = '60-sec' | '5-min' | 'complete';

export interface FormulaCardItem {
  id: string;
  name: string;
  formula: string; // KaTeX / LaTeX string
  variables?: { name: string; description: string }[];
  conditions?: string;
  whereUsed?: string;
  commonMistake?: string;
}

export interface QuickTableItem {
  concept: string;
  formula: string;
  conditions: string;
}

export interface TopicCheatSheet {
  topicId: string;
  topicTitle: string;
  unitId: string;
  subjectId: string;
  provenance: ProvenanceStatus;
  
  // 60-Second mode key bullet points (highest-yield)
  sixtySecBullets: string[];
  
  // 5-Minute mode structured revision
  coreConcepts: string[];
  definitions?: { term: string; meaning: string }[];
  formulaCards?: FormulaCardItem[];
  rulesAndProperties?: string[];
  algorithmsOrProcedures?: string[];
  importantResults?: string[];
  commonMistakes?: string[];
  examTraps?: string[];
  
  // Cross-links
  relatedPyqIds?: string[];
  relatedDriveFolder?: string;
  videoUrl?: string;
}

export interface UnitCheatSheet {
  unitId: string;
  unitNumber: number;
  unitTitle: string;
  subjectId: string;
  estimatedMinutes: {
    sixtySec: number;
    fiveMin: number;
    complete: number;
  };
  sixtySecSummary: string[];
  fiveMinHighlights: {
    title: string;
    items: string[];
  }[];
  quickLookFormulas?: QuickTableItem[];
  topics: TopicCheatSheet[];
}

export interface SubjectCheatSheet {
  subjectId: string;
  subjectCode: string;
  subjectName: string;
  shortName: string;
  units: UnitCheatSheet[];
  ultraQuickFormulaBank?: QuickTableItem[];
  examImportantKeywords: string[];
  coveragePercent: number; // Must be 100%
}
