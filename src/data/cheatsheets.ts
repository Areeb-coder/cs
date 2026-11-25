import { SubjectCheatSheet } from '@/types/cheatsheet';
import rawData from './cheatsheets_data.json';

export const SUBJECT_CHEATSHEETS: SubjectCheatSheet[] = rawData as SubjectCheatSheet[];

export function getSubjectCheatSheet(subjectId: string): SubjectCheatSheet | undefined {
  return SUBJECT_CHEATSHEETS.find((s) => s.subjectId === subjectId);
}

export function getAllTopicCheatSheets() {
  return SUBJECT_CHEATSHEETS.flatMap((s) => s.units.flatMap((u) => u.topics));
}
