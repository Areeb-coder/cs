import { Question } from '@/types/academic';
import questionsData from './questions_data.json';
import { PYQS_2025 } from './pyqs_2025';

// Merge existing questions with newly extracted, verified authentic 2025 PYQs
// Ensuring zero duplicates by ID
const baseQuestions: Question[] = questionsData as Question[];
const existingIds = new Set(baseQuestions.map(q => q.id));
const nonDuplicate2025Pyqs = PYQS_2025.filter(q => !existingIds.has(q.id));

export const QUESTION_BANK: Question[] = [...nonDuplicate2025Pyqs, ...baseQuestions];
