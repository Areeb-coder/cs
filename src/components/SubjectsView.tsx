'use client';

import React, { useState } from 'react';
import {
  AlertCircle,
  BarChart2,
  Bookmark,
  BookOpen,
  CheckCircle2,
  CheckSquare,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Printer,
  RotateCcw,
  Square,
  XCircle,
} from 'lucide-react';
import { LPP_LECTURES, SUBJECTS } from '@/data/curriculum';
import { QUESTION_BANK } from '@/data/questions';
import { useApp } from '@/context/AppContext';
import { MathText } from '@/components/MathText';
import { Topic, TopicMasteryState } from '@/types/academic';

const MASTERY_LABELS: Record<TopicMasteryState, string> = {
  not_started: 'Not started',
  learning: 'Learning',
  practising: 'Practising',
  needs_revision: 'Needs revision',
  proficient: 'Proficient',
  mastered: 'Mastered',
};

export function SubjectsView() {
  const {
    state,
    selectedSubjectId,
    setSelectedSubjectId,
    toggleTopicComplete,
    setTopicState,
    setPersonalNote,
    toggleBookmark,
    addMistake,
    recordQuizScore,
    resetSubjectProgress,
  } = useApp();

  const activeSubject =
    SUBJECTS.find((s) => s.id === selectedSubjectId) ?? SUBJECTS[2];
  const [hideCompleted, setHideCompleted] = useState(false);
  const [filterState, setFilterState] = useState<string>('all');
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({});
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [workspaceTab, setWorkspaceTab] = useState<'overview' | 'practice' | 'analytics'>('overview');
  const [topicAnswers, setTopicAnswers] = useState<Record<string, string>>({});
  const [topicSubmitted, setTopicSubmitted] = useState(false);

  const toggleUnit = (unitId: string) => {
    setExpandedUnits((prev) => ({ ...prev, [unitId]: !(prev[unitId] ?? true) }));
  };

  const subjectTopicIds = activeSubject.units.flatMap((u) => u.topics.map((t) => t.id));

  const topicQuestions = activeTopic
    ? QUESTION_BANK.filter(
        (q) =>
          q.topicId === activeTopic.id ||
          (activeTopic.crossLinkedTopicIds?.includes(q.topicId) ?? false)
      )
    : [];

  const handleTopicPracticeSubmit = () => {
    if (!activeTopic || topicQuestions.length === 0) return;
    setTopicSubmitted(true);
    let score = 0;
    for (const q of topicQuestions) {
      const ans = (topicAnswers[q.id] ?? '').trim();
      if (ans === q.correctAnswer) {
        score += 1;
      } else {
        addMistake({
          id: `err-${q.id}-${Date.now()}`,
          questionId: q.id,
          topicId: activeTopic.id,
          subjectId: activeSubject.id,
          category: 'conceptual_gap',
          selectedAnswer: ans || '(unattempted)',
          correctAnswer: q.correctAnswer,
          timestamp: new Date().toISOString(),
          resolved: false,
        });
      }
    }
    recordQuizScore(activeSubject.id, score, topicQuestions.length, 'topic_practice');
    if (score === topicQuestions.length) {
      setTopicState(activeTopic.id, 'mastered');
    } else {
      setTopicState(activeTopic.id, 'practising');
    }
  };

  return (
    <div className="space-y-6">
      {/* Subject Selector Strip */}
      <div className="flex flex-wrap gap-2 print:hidden">
        {SUBJECTS.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              setSelectedSubjectId(s.id);
              setActiveTopic(null);
              setTopicAnswers({});
              setTopicSubmitted(false);
            }}
            className={`rounded-xl border px-3.5 py-2 text-xs font-semibold transition ${
              activeSubject.id === s.id
                ? 'border-sky-600 bg-sky-600 text-white shadow-sm'
                : 'border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-700'
            }`}
          >
            {s.shortName}
          </button>
        ))}
      </div>

      {/* Subject Header */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                {activeSubject.code}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {activeSubject.examDate
                  ? `Exam: ${activeSubject.examDate} (${activeSubject.examTime})`
                  : 'Exam date not supplied / needs verification'}
              </span>
            </div>
            <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {activeSubject.name}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2 print:hidden">
            <select
              value={filterState}
              onChange={(e) => setFilterState(e.target.value)}
              aria-label="Filter topics by mastery"
              className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <option value="all">All states</option>
              <option value="not_started">Not started</option>
              <option value="learning">Learning</option>
              <option value="practising">Practising</option>
              <option value="needs_revision">Needs revision</option>
              <option value="mastered">Mastered</option>
            </select>
            <button
              onClick={() => setHideCompleted((v) => !v)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {hideCompleted ? 'Show completed' : 'Hide completed'}
            </button>
            <button
              onClick={() => resetSubjectProgress(subjectTopicIds)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <Printer className="h-3.5 w-3.5" />
              Print / PDF
            </button>
          </div>
        </div>
      </div>

      {/* LPP 7-Lecture Mapping Banner */}
      {activeSubject.id === 'lpp' && (
        <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-5 dark:border-sky-900/60 dark:bg-sky-950/30">
          <h2 className="text-sm font-semibold text-sky-900 dark:text-sky-200">
            NPTEL 7-Lecture → 5-Unit Mapping (Rajat Mittal, IIT Kanpur)
          </h2>
          <p className="mt-1 text-xs text-sky-800 dark:text-sky-300">
            JMI Exam Scope covers Units 1–3 (Lecture 1–3). Units 3 (Lecture 4), 4 (Lectures 5 & 6),
            and 5 (Lecture 7) are tagged as NPTEL Extension material. Week 8 Lecture 6 and Lecture 7
            remain separate.
          </p>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {LPP_LECTURES.map((lec) => (
              <div
                key={lec.lectureNumber}
                className="rounded-xl border border-sky-200 bg-white p-3 text-xs dark:border-sky-800 dark:bg-slate-900"
              >
                <div className="flex items-center justify-between font-semibold text-slate-900 dark:text-slate-100">
                  <span>Lecture {lec.lectureNumber}</span>
                  <span className="text-[10px] text-slate-500">{lec.pageCount} pp.</span>
                </div>
                <div className="mt-0.5 truncate text-slate-600 dark:text-slate-300">
                  {lec.pdfFileName}
                </div>
                <div className="mt-1 text-[10px] font-medium text-sky-600 dark:text-sky-400">
                  Portal Unit {lec.portalUnitNumber} ·{' '}
                  {lec.isNptelExtension ? 'NPTEL Extension' : 'JMI Exam Scope'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Units & Topics + Topic Learning Workspace */}
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-3">
          {activeSubject.units.map((unit) => {
            const isOpen = expandedUnits[unit.id] ?? true;
            const visibleTopics = unit.topics.filter((t) => {
              const st = state.topicStates[t.id] ?? 'not_started';
              if (hideCompleted && (st === 'mastered' || st === 'proficient')) return false;
              if (filterState !== 'all' && st !== filterState) return false;
              return true;
            });

            const unitDone = unit.topics.filter(
              (t) => state.topicStates[t.id] === 'mastered' || state.topicStates[t.id] === 'proficient'
            ).length;

            return (
              <div
                key={unit.id}
                className="edtech-card rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <button
                  onClick={() => toggleUnit(unit.id)}
                  className="flex w-full items-center justify-between p-4 text-left"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                        Unit {unit.unitNumber}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {unitDone}/{unit.topics.length} mastered
                      </span>
                      {unit.isNptelExtension && (
                        <span className="rounded-md bg-purple-50 px-1.5 py-0.5 text-[10px] font-medium text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                          NPTEL Extension
                        </span>
                      )}
                    </div>
                    <h3 className="mt-0.5 font-semibold text-slate-900 dark:text-slate-100">
                      {unit.title}
                    </h3>
                  </div>
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  )}
                </button>

                {isOpen && (
                  <div className="divide-y divide-slate-100 border-t border-slate-100 dark:divide-slate-800 dark:border-slate-800">
                    {visibleTopics.map((topic) => {
                      const st = state.topicStates[topic.id] ?? 'not_started';
                      const isDone = st === 'mastered' || st === 'proficient';
                      const isSelected = activeTopic?.id === topic.id;
                      const qCount = QUESTION_BANK.filter(
                        (q) =>
                          q.topicId === topic.id ||
                          (topic.crossLinkedTopicIds?.includes(q.topicId) ?? false)
                      ).length;

                      return (
                        <div
                          key={topic.id}
                          className={`flex items-center justify-between gap-3 px-4 py-3 transition ${
                            isSelected
                              ? 'bg-sky-50/70 dark:bg-sky-950/30'
                              : 'hover:bg-slate-50/70 dark:hover:bg-slate-800/40'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <button
                              onClick={() => toggleTopicComplete(topic.id)}
                              aria-label={`Toggle ${topic.title}`}
                              className="mt-0.5 text-sky-600 dark:text-sky-400"
                            >
                              {isDone ? (
                                <CheckSquare className="h-4 w-4" />
                              ) : (
                                <Square className="h-4 w-4 text-slate-400" />
                              )}
                            </button>
                            <button
                              onClick={() => {
                                setActiveTopic(topic);
                                setTopicAnswers({});
                                setTopicSubmitted(false);
                              }}
                              className="text-left"
                            >
                              <div
                                className={`text-sm font-medium ${
                                  isDone
                                    ? 'text-slate-400 line-through'
                                    : 'text-slate-800 dark:text-slate-200'
                                }`}
                              >
                                {topic.title}
                              </div>
                              <div className="mt-0.5 flex flex-wrap gap-2 text-[11px] text-slate-500">
                                <span>~{topic.estimatedMinutes} min</span>
                                {qCount > 0 && (
                                  <span className="font-medium text-sky-600 dark:text-sky-400">
                                    · {qCount} {qCount === 1 ? 'question' : 'questions'}
                                  </span>
                                )}
                                {topic.nptelRef && (
                                  <span>
                                    · L{topic.nptelRef.lectureNumber} ({topic.nptelRef.pages})
                                  </span>
                                )}
                              </div>
                            </button>
                          </div>

                          <select
                            value={st}
                            onChange={(e) =>
                              setTopicState(topic.id, e.target.value as TopicMasteryState)
                            }
                            aria-label={`Mastery state for ${topic.title}`}
                            className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-[11px] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                          >
                            {Object.entries(MASTERY_LABELS).map(([k, label]) => (
                              <option key={k} value={k}>
                                {label}
                              </option>
                            ))}
                          </select>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Topic Learning Workspace Panel */}
        <div className="lg:col-span-2">
          <div className="sticky top-20 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            {activeTopic ? (
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                      Topic Workspace
                    </span>
                    <h3 className="mt-0.5 font-semibold text-slate-900 dark:text-slate-100">
                      {activeTopic.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => toggleBookmark(activeTopic.id)}
                    aria-label="Bookmark topic"
                    className={`rounded-lg p-1.5 ${
                      state.bookmarks.includes(activeTopic.id)
                        ? 'bg-amber-50 text-amber-500 dark:bg-amber-950/40'
                        : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>

                {/* Workspace Tabs */}
                <div className="flex gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-950">
                  {[
                    { id: 'overview' as const, label: 'Notes', icon: BookOpen },
                    {
                      id: 'practice' as const,
                      label: `Questions (${topicQuestions.length})`,
                      icon: HelpCircle,
                    },
                    { id: 'analytics' as const, label: 'Progress', icon: BarChart2 },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setWorkspaceTab(tab.id)}
                        className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition ${
                          workspaceTab === tab.id
                            ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-slate-100'
                            : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {workspaceTab === 'overview' && (
                  <div className="space-y-4">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Provenance: <span className="font-medium">{activeTopic.provenance}</span>
                    </div>

                    {activeTopic.keyFormulas && activeTopic.keyFormulas.length > 0 && (
                      <div className="space-y-2 rounded-xl bg-slate-50 p-3.5 dark:bg-slate-950">
                        <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Key Formulas
                        </div>
                        {activeTopic.keyFormulas.map((f, i) => (
                          <div key={i} className="overflow-x-auto text-sm">
                            <MathText text={`$$${f}$$`} />
                          </div>
                        ))}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Personal Notes
                      </label>
                      <textarea
                        rows={5}
                        value={state.personalNotes[activeTopic.id] ?? ''}
                        onChange={(e) => setPersonalNote(activeTopic.id, e.target.value)}
                        placeholder="Write your revision notes, doubts, or formulas here..."
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                      />
                    </div>
                  </div>
                )}

                {workspaceTab === 'practice' && (
                  <div className="space-y-4">
                    {topicQuestions.length === 0 ? (
                      <div className="rounded-xl border border-dashed border-slate-200 p-6 text-center text-xs text-slate-500 dark:border-slate-800">
                        No topic-specific questions mapped yet. Use the PYQ & Quiz Bank for
                        subject-wide practice.
                      </div>
                    ) : (
                      <>
                        {topicQuestions.map((q, idx) => {
                          const userAns = topicAnswers[q.id] ?? '';
                          const isCorrect = userAns.trim() === q.correctAnswer;
                          return (
                            <div
                              key={q.id}
                              className="space-y-2.5 rounded-xl border border-slate-200 p-3.5 dark:border-slate-800"
                            >
                              <div className="flex items-center justify-between text-[11px] text-slate-500">
                                <span>
                                  Q{idx + 1} · {q.marks}m · {q.difficulty}
                                </span>
                                <span>{q.provenance}</span>
                              </div>
                              <div className="text-xs font-medium text-slate-900 dark:text-slate-100">
                                <MathText text={q.prompt} />
                              </div>
                              {q.type === 'mcq' && q.options ? (
                                <div className="space-y-1.5">
                                  {q.options.map((opt) => (
                                    <label
                                      key={opt}
                                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 p-2 text-xs dark:border-slate-800"
                                    >
                                      <input
                                        type="radio"
                                        name={`topic-${q.id}`}
                                        value={opt}
                                        checked={userAns === opt}
                                        disabled={topicSubmitted}
                                        onChange={() =>
                                          setTopicAnswers((p) => ({ ...p, [q.id]: opt }))
                                        }
                                      />
                                      <MathText text={opt} />
                                    </label>
                                  ))}
                                </div>
                              ) : (
                                <input
                                  type="text"
                                  value={userAns}
                                  disabled={topicSubmitted}
                                  onChange={(e) =>
                                    setTopicAnswers((p) => ({ ...p, [q.id]: e.target.value }))
                                  }
                                  placeholder="Enter answer..."
                                  className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs dark:border-slate-700 dark:bg-slate-950"
                                />
                              )}
                              {topicSubmitted && (
                                <div
                                  className={`rounded-lg p-2.5 text-[11px] ${
                                    isCorrect
                                      ? 'bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200'
                                      : 'bg-rose-50 text-rose-900 dark:bg-rose-950/40 dark:text-rose-200'
                                  }`}
                                >
                                  <div className="flex items-center gap-1 font-semibold">
                                    {isCorrect ? (
                                      <CheckCircle2 className="h-3.5 w-3.5" />
                                    ) : (
                                      <XCircle className="h-3.5 w-3.5" />
                                    )}
                                    {isCorrect ? 'Correct' : `Answer: ${q.correctAnswer}`}
                                  </div>
                                  <div className="mt-1">
                                    <MathText text={q.solution} />
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                        {!topicSubmitted ? (
                          <button
                            onClick={handleTopicPracticeSubmit}
                            className="w-full rounded-xl bg-sky-600 py-2 text-xs font-semibold text-white hover:bg-sky-700"
                          >
                            Check Topic Answers
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setTopicAnswers({});
                              setTopicSubmitted(false);
                            }}
                            className="w-full rounded-xl border border-slate-200 py-2 text-xs font-semibold dark:border-slate-700"
                          >
                            Retry Topic Questions
                          </button>
                        )}
                      </>
                    )}
                  </div>
                )}

                {workspaceTab === 'analytics' && (
                  <div className="space-y-3 text-xs">
                    <div className="rounded-xl bg-slate-50 p-3.5 dark:bg-slate-950">
                      <div className="text-slate-500">Current Mastery State</div>
                      <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {MASTERY_LABELS[state.topicStates[activeTopic.id] ?? 'not_started']}
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3.5 dark:bg-slate-950">
                      <div className="text-slate-500">Topic Mistakes Recorded</div>
                      <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {state.mistakes.filter((m) => m.topicId === activeTopic.id).length}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
                Select any topic on the left to open its learning workspace, topic-wise questions,
                and progress analytics.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
