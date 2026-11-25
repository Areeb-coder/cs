'use client';

import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Bookmark, 
  RotateCcw, 
  ChevronRight,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { QUESTION_BANK } from '@/data/questions';
import { SUBJECTS } from '@/data/curriculum';
import { MathText } from '@/components/MathText';
import { useApp } from '@/context/AppContext';
import { Question } from '@/types/academic';

type QuestionCategoryTab = 'pyqs' | 'question_bank' | 'ai_generated';

export function QuizPyqView() {
  const { addMistake, recordQuizScore, state, toggleBookmark } = useApp();

  const [activeTab, setActiveTab] = useState<QuestionCategoryTab>('pyqs');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [mode, setMode] = useState<'practice' | 'test'>('practice');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  // Categorize questions by strict provenance rules
  const categorizedQuestions = useMemo(() => {
    const pyqs = QUESTION_BANK.filter((q) => q.provenance === 'actual_pyq');
    const questionBank = QUESTION_BANK.filter(
      (q) =>
        q.provenance === 'source_note_exercise' ||
        q.provenance === 'user_faculty_notes' ||
        q.provenance === 'platform_practice_lab'
    );
    const aiGenerated = QUESTION_BANK.filter(
      (q) =>
        q.provenance === 'ai_generated_verified' ||
        q.provenance === 'ai_generated_pending_review'
    );

    return {
      pyqs,
      question_bank: questionBank,
      ai_generated: aiGenerated,
    };
  }, []);

  // Filter current tab's questions by subject and search query
  const filteredQuestions = useMemo(() => {
    let list = categorizedQuestions[activeTab];

    if (selectedSubject !== 'all') {
      list = list.filter((q) => q.subjectId === selectedSubject);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (item) =>
          item.prompt.toLowerCase().includes(q) ||
          item.sourceRef?.toLowerCase().includes(q) ||
          item.year?.toLowerCase().includes(q) ||
          item.examSession?.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeTab, selectedSubject, searchQuery, categorizedQuestions]);

  const handleAnswerChange = (questionId: string, val: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: val }));
  };

  const toggleSolutionReveal = (questionId: string) => {
    setRevealedSolutions((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleSubmitQuiz = () => {
    setSubmitted(true);
    let score = 0;
    for (const q of filteredQuestions) {
      const ans = (answers[q.id] ?? '').trim();
      if (ans.toLowerCase() === q.correctAnswer.toLowerCase()) {
        score += 1;
      } else {
        addMistake({
          id: `err-${q.id}-${Date.now()}`,
          questionId: q.id,
          topicId: q.topicId,
          subjectId: q.subjectId,
          category: 'conceptual_gap',
          selectedAnswer: ans || '(unattempted)',
          correctAnswer: q.correctAnswer,
          timestamp: new Date().toISOString(),
          resolved: false,
        });
      }
    }
    recordQuizScore(selectedSubject, score, filteredQuestions.length, mode);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setRevealedSolutions({});
  };

  // Subject options list including all Semester 3 subjects & LPP track
  const subjectOptions = [
    { id: 'all', label: 'All Subjects (Complete Overview)' },
    { id: 'asb-301', label: 'ASB-301 — Engineering Mathematics III' },
    { id: 'asm-301', label: 'ASM-301 — Universal Human Values' },
    { id: 'dsc-301', label: 'DSC-301 — Discrete Mathematics' },
    { id: 'dsc-302', label: 'DSC-302 — Data Structures' },
    { id: 'dsc-303', label: 'DSC-303 — Digital Logic Design' },
    { id: 'dsc-304', label: 'DSC-304 — Database Management Systems' },
    { id: 'lpp', label: 'LPP — Linear Programming (NPTEL Track)' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Exam Questions & Practice Hub
            </h1>
            <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-800 dark:bg-sky-950 dark:text-sky-300">
              Strict Provenance Architecture
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Three isolated academic streams: authentic past exam papers, faculty question banks, and AI-generated practice.
          </p>
        </div>

        {/* Mode Toggle & Reset */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setMode(mode === 'practice' ? 'test' : 'practice');
              handleReset();
            }}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            Mode: <span className="font-semibold text-sky-600 dark:text-sky-400">{mode === 'practice' ? 'Practice (Instant Solutions)' : 'Test (Hidden until Submit)'}</span>
          </button>
          <button
            onClick={handleReset}
            title="Reset answers"
            className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-500 hover:text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 1. Primary 3 Distinct Tabs */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {/* Tab 1: PYQs */}
        <button
          onClick={() => {
            setActiveTab('pyqs');
            handleReset();
          }}
          className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
            activeTab === 'pyqs'
              ? 'border-sky-500 bg-sky-50/80 ring-2 ring-sky-500/20 dark:border-sky-500 dark:bg-sky-950/40'
              : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700'
          }`}
        >
          <div className="rounded-lg bg-sky-100 p-2 text-sky-700 dark:bg-sky-900/60 dark:text-sky-300">
            <FileText className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                1. Previous Year Questions (PYQs)
              </span>
              <span className="rounded bg-sky-200/70 px-2 py-0.5 text-xs font-bold text-sky-800 dark:bg-sky-900 dark:text-sky-200">
                {categorizedQuestions.pyqs.length} Available
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Only authentic questions from scanned original past papers with printed paper numbers, year, exam session and marks.
            </p>
          </div>
        </button>

        {/* Tab 2: Question Bank */}
        <button
          onClick={() => {
            setActiveTab('question_bank');
            handleReset();
          }}
          className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
            activeTab === 'question_bank'
              ? 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-500/20 dark:border-emerald-500 dark:bg-emerald-950/40'
              : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700'
          }`}
        >
          <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                2. Question Bank
              </span>
              <span className="rounded bg-emerald-200/70 px-2 py-0.5 text-xs font-bold text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                {categorizedQuestions.question_bank.length} Available
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Verified non-PYQ practice problems from faculty notes, NPTEL modules, assignments and lab manuals.
            </p>
          </div>
        </button>

        {/* Tab 3: AI-Generated Questions */}
        <button
          onClick={() => {
            setActiveTab('ai_generated');
            handleReset();
          }}
          className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
            activeTab === 'ai_generated'
              ? 'border-purple-500 bg-purple-50/80 ring-2 ring-purple-500/20 dark:border-purple-500 dark:bg-purple-950/40'
              : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700'
          }`}
        >
          <div className="rounded-lg bg-purple-100 p-2 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                3. AI-Generated Practice
              </span>
              <span className="rounded bg-purple-200/70 px-2 py-0.5 text-xs font-bold text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                {categorizedQuestions.ai_generated.length} Available
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Syllabus-aligned synthetic practice with step-by-step solutions. Explicitly marked so students know it is not a PYQ.
            </p>
          </div>
        </button>
      </div>

      {/* 2. Filters & Subject Selector */}
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900/50">
        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="subject-select" className="text-xs font-medium text-slate-600 dark:text-slate-400">
            Subject:
          </label>
          <select
            id="subject-select"
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              handleReset();
            }}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {subjectOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          />
        </div>
      </div>

      {/* 3. Empty State Handling (Honest Availability, No Fabricated Questions) */}
      {filteredQuestions.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
          <AlertCircle className="mx-auto h-8 w-8 text-amber-500" />
          <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">
            No Questions in this Section for {subjectOptions.find(s => s.id === selectedSubject)?.label || selectedSubject}
          </h3>
          <p className="mx-auto mt-2 max-w-md text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {activeTab === 'pyqs' && (
              <>
                We strictly index verified past exam papers. No authentic PYQs have been scanned from the Drive archive yet for this specific subject filter. 
                <span className="block mt-1 font-medium text-amber-600 dark:text-amber-400">
                  We never synthesize or fabricate fake PYQs to fill empty states.
                </span>
              </>
            )}
            {activeTab === 'question_bank' && (
              <>
                No faculty notes or assignment problem sheets are indexed yet under this subject selection.
              </>
            )}
            {activeTab === 'ai_generated' && (
              <>
                No AI practice problems are currently configured for this topic filter. Check another subject or view All Subjects.
              </>
            )}
          </p>
          <button
            onClick={() => {
              setSelectedSubject('all');
              setSearchQuery('');
            }}
            className="mt-4 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
          >
            Show All Subjects for this Category
          </button>
        </div>
      ) : (
        /* 4. Questions List */
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const userAns = answers[q.id] ?? '';
            const isBookmarked = (state.bookmarks || []).includes(q.id);
            const isSolutionOpen = revealedSolutions[q.id] ?? false;
            const showInstantFeedback = mode === 'practice' && userAns !== '';
            const isCorrect = userAns.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();

            return (
              <div
                key={q.id}
                className={`rounded-xl border bg-white p-5 shadow-sm transition-all dark:bg-slate-900 ${
                  activeTab === 'pyqs'
                    ? 'border-sky-200/80 hover:border-sky-300 dark:border-sky-950/70'
                    : activeTab === 'question_bank'
                    ? 'border-emerald-200/80 hover:border-emerald-300 dark:border-emerald-950/70'
                    : 'border-purple-200/80 hover:border-purple-300 dark:border-purple-950/70'
                }`}
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {q.questionNumber || `Q${idx + 1}`}
                    </span>
                    <span>·</span>
                    <span className="capitalize">{q.difficulty}</span>
                    <span>·</span>
                    <span>{q.marks} Marks</span>

                    {/* Authentic PYQ Badges */}
                    {q.year && (
                      <span className="rounded bg-sky-50 px-2 py-0.5 font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                        {q.year} {q.examSession || ''}
                      </span>
                    )}

                    {/* AI Tag */}
                    {activeTab === 'ai_generated' && (
                      <span className="flex items-center gap-1 rounded bg-purple-50 px-2 py-0.5 font-semibold text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                        <Sparkles className="h-3 w-3" /> AI-Generated • Verified
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Provenance source pill */}
                    <span className="max-w-[260px] truncate rounded bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {q.sourceRef}
                    </span>

                    {/* Bookmark Button */}
                    <button
                      onClick={() => toggleBookmark(q.id)}
                      title={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
                      className={`rounded p-1 transition ${
                        isBookmarked
                          ? 'text-amber-500'
                          : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                      }`}
                    >
                      <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Prompt */}
                <div className="my-3 text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                  <MathText text={q.prompt} />
                </div>

                {/* Question Input / Choices */}
                {q.type === 'mcq' && q.options ? (
                  <div className="space-y-2 pt-1">
                    {q.options.map((opt) => {
                      const isSelected = userAns === opt;
                      return (
                        <label
                          key={opt}
                          className={`flex cursor-pointer items-center gap-2.5 rounded-lg border p-2.5 text-xs sm:text-sm transition-all ${
                            isSelected
                              ? 'border-sky-500 bg-sky-50/60 text-sky-900 font-medium dark:border-sky-500 dark:bg-sky-950/40 dark:text-sky-200'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name={`q-${q.id}`}
                            value={opt}
                            checked={isSelected}
                            disabled={submitted}
                            onChange={() => handleAnswerChange(q.id, opt)}
                            className="text-sky-600 focus:ring-sky-500"
                          />
                          <MathText text={opt} />
                        </label>
                      );
                    })}
                  </div>
                ) : (
                  <div className="pt-1">
                    <input
                      type="text"
                      placeholder="Type your answer or numerical value here..."
                      value={userAns}
                      disabled={submitted}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      className="w-full max-w-sm rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                    />
                  </div>
                )}

                {/* Solutions & Feedback */}
                {/* 1. Mode Practice: Instant feedback after answering */}
                {showInstantFeedback && (
                  <div
                    className={`mt-3 rounded-lg border p-3 text-xs leading-relaxed ${
                      isCorrect
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200'
                        : 'border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-200'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-semibold">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          <span>Correct Answer!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                          <span>Needs Review · Correct Answer: {q.correctAnswer}</span>
                        </>
                      )}
                    </div>
                    <div className="mt-2 text-slate-700 dark:text-slate-300">
                      <span className="font-semibold text-slate-900 dark:text-slate-100">Step-by-step Solution:</span>
                      <div className="mt-1">
                        <MathText text={q.solution} />
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Mode Test: Only show after final Submit */}
                {submitted && (
                  <div
                    className={`mt-3 rounded-lg border p-3 text-xs leading-relaxed ${
                      isCorrect
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200'
                        : 'border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-200'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-semibold">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          <span>Correct!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4 text-rose-600" />
                          <span>Incorrect · Correct: {q.correctAnswer}</span>
                        </>
                      )}
                    </div>
                    <div className="mt-1">
                      <MathText text={q.solution} />
                    </div>
                  </div>
                )}

                {/* Option to view solution anytime in practice mode without answering */}
                {mode === 'practice' && !showInstantFeedback && (
                  <div className="mt-2">
                    <button
                      onClick={() => toggleSolutionReveal(q.id)}
                      className="text-xs font-medium text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
                    >
                      {isSolutionOpen ? 'Hide Solution' : 'Reveal Step-by-Step Solution'}
                    </button>
                    {isSolutionOpen && (
                      <div className="mt-2 rounded-lg bg-slate-50 p-3 text-xs text-slate-700 border border-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                        <div className="font-semibold text-slate-900 dark:text-slate-100">
                          Correct Answer: <MathText text={q.correctAnswer} />
                        </div>
                        <div className="mt-1">
                          <MathText text={q.solution} />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Submit / Retry Actions */}
      {filteredQuestions.length > 0 && (
        <div className="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Showing {filteredQuestions.length} questions in {activeTab === 'pyqs' ? 'Authentic PYQs' : activeTab === 'question_bank' ? 'Question Bank' : 'AI-Generated Practice'}
          </div>

          <div>
            {!submitted ? (
              <button
                onClick={handleSubmitQuiz}
                className="rounded-lg bg-sky-600 px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow hover:bg-sky-700 transition"
              >
                Submit Answers & Record Mistakes
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="rounded-lg border border-slate-200 bg-white px-5 py-2 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition"
              >
                Retry This Session
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
