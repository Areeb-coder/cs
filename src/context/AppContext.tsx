'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  DEFAULT_PROGRESS_STATE,
  loadProgressState,
  saveProgressState,
  StudentProgressState,
} from '@/lib/storage';
import { MistakeEntry, TopicMasteryState } from '@/types/academic';

export type NavSection =
  | 'dashboard'
  | 'subjects'
  | 'cheatsheets'
  | 'datesheets'
  | 'pyqs'
  | 'resources'
  | 'tutor'
  | 'revision'
  | 'practicals'
  | 'workbench'
  | 'analytics'
  | 'admin';

interface AppContextValue {
  state: StudentProgressState;
  activeSection: NavSection;
  setActiveSection: (s: NavSection) => void;
  selectedSubjectId: string | null;
  setSelectedSubjectId: (id: string | null) => void;
  selectedTopicId: string | null;
  setSelectedTopicId: (id: string | null) => void;
  setTopicState: (topicId: string, mastery: TopicMasteryState) => void;
  toggleTopicComplete: (topicId: string) => void;
  setPersonalNote: (topicId: string, note: string) => void;
  toggleBookmark: (topicId: string) => void;
  addMistake: (mistake: MistakeEntry) => void;
  recordQuizScore: (subjectId: string, score: number, total: number, mode: string) => void;
  toggleTheme: () => void;
  resetSubjectProgress: (topicIds: string[]) => void;
  exportBackup: () => string;
  importBackup: (json: string) => boolean;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<StudentProgressState>(DEFAULT_PROGRESS_STATE);
  const [hydrated, setHydrated] = useState(false);
  const [activeSection, setActiveSection] = useState<NavSection>('dashboard');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  useEffect(() => {
    const loaded = loadProgressState();
    setState(loaded);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveProgressState(state);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', state.theme === 'dark');
    }
  }, [state, hydrated]);

  const setTopicState = (topicId: string, mastery: TopicMasteryState) => {
    setState((prev) => ({
      ...prev,
      lastOpenedTopicId: topicId,
      topicStates: { ...prev.topicStates, [topicId]: mastery },
    }));
  };

  const toggleTopicComplete = (topicId: string) => {
    setState((prev) => {
      const current = prev.topicStates[topicId] ?? 'not_started';
      const next: TopicMasteryState = current === 'mastered' ? 'not_started' : 'mastered';
      return {
        ...prev,
        lastOpenedTopicId: topicId,
        topicStates: { ...prev.topicStates, [topicId]: next },
      };
    });
  };

  const setPersonalNote = (topicId: string, note: string) => {
    setState((prev) => ({
      ...prev,
      personalNotes: { ...prev.personalNotes, [topicId]: note },
    }));
  };

  const toggleBookmark = (topicId: string) => {
    setState((prev) => {
      const exists = prev.bookmarks.includes(topicId);
      return {
        ...prev,
        bookmarks: exists
          ? prev.bookmarks.filter((id) => id !== topicId)
          : [...prev.bookmarks, topicId],
      };
    });
  };

  const addMistake = (mistake: MistakeEntry) => {
    setState((prev) => ({
      ...prev,
      mistakes: [mistake, ...prev.mistakes],
    }));
  };

  const recordQuizScore = (subjectId: string, score: number, total: number, mode: string) => {
    setState((prev) => ({
      ...prev,
      quizScores: [
        {
          id: `quiz-${Date.now()}`,
          subjectId,
          score,
          total,
          mode,
          timestamp: new Date().toISOString(),
        },
        ...prev.quizScores,
      ],
    }));
  };

  const toggleTheme = () => {
    setState((prev) => ({ ...prev, theme: prev.theme === 'dark' ? 'light' : 'dark' }));
  };

  const resetSubjectProgress = (topicIds: string[]) => {
    setState((prev) => {
      const nextStates = { ...prev.topicStates };
      for (const id of topicIds) {
        delete nextStates[id];
      }
      return { ...prev, topicStates: nextStates };
    });
  };

  const exportBackup = () => JSON.stringify(state, null, 2);

  const importBackup = (json: string) => {
    try {
      const parsed = JSON.parse(json) as Partial<StudentProgressState>;
      setState({ ...DEFAULT_PROGRESS_STATE, ...parsed });
      return true;
    } catch {
      return false;
    }
  };

  return (
    <AppContext.Provider
      value={{
        state,
        activeSection,
        setActiveSection,
        selectedSubjectId,
        setSelectedSubjectId,
        selectedTopicId,
        setSelectedTopicId,
        setTopicState,
        toggleTopicComplete,
        setPersonalNote,
        toggleBookmark,
        addMistake,
        recordQuizScore,
        toggleTheme,
        resetSubjectProgress,
        exportBackup,
        importBackup,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
