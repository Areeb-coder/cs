import { MistakeEntry, TopicMasteryState } from '@/types/academic';

export interface StudentProgressState {
  topicStates: Record<string, TopicMasteryState>;
  personalNotes: Record<string, string>;
  bookmarks: string[];
  mistakes: MistakeEntry[];
  watchedVideos?: Record<string, boolean>;
  quizScores: Array<{
    id: string;
    subjectId: string;
    score: number;
    total: number;
    mode: string;
    timestamp: string;
  }>;
  theme: 'light' | 'dark';
  lastOpenedTopicId?: string;
}

const STORAGE_KEY = 'jmi_study_hub_state_v1';

export const DEFAULT_PROGRESS_STATE: StudentProgressState = {
  topicStates: {},
  personalNotes: {},
  bookmarks: [],
  mistakes: [],
  watchedVideos: {},
  quizScores: [],
  theme: 'light',
};

export function loadProgressState(): StudentProgressState {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS_STATE;
    const parsed = JSON.parse(raw) as Partial<StudentProgressState>;
    return {
      ...DEFAULT_PROGRESS_STATE,
      ...parsed,
    };
  } catch {
    return DEFAULT_PROGRESS_STATE;
  }
}

export function saveProgressState(state: StudentProgressState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore quota errors
  }
}
