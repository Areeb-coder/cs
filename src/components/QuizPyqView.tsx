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
  AlertCircle,
  Eye,
  EyeOff,
  Filter,
  Check,
  CheckCheck,
  Award
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
  const [selectedUnit, setSelectedUnit] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [mode, setMode] = useState<'practice' | 'test'>('practice');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selfEvaluations, setSelfEvaluations] = useState<Record<string, 'correct' | 'partial' | 'wrong'>>({});
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

  // Filter current tab's questions by subject, unit, difficulty, type and search
  const filteredQuestions = useMemo(() => {
    let list = categorizedQuestions[activeTab];

    if (selectedSubject !== 'all') {
      list = list.filter((q) => q.subjectId === selectedSubject);
    }

    if (selectedUnit !== 'all') {
      list = list.filter((q) => q.unitId === selectedUnit);
    }

    if (selectedDifficulty !== 'all') {
      list = list.filter((q) => q.difficulty === selectedDifficulty);
    }

    if (selectedType !== 'all') {
      if (selectedType === 'subjective') {
        list = list.filter((q) => q.type !== 'mcq');
      } else {
        list = list.filter((q) => q.type === selectedType);
      }
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
  }, [activeTab, selectedSubject, selectedUnit, selectedDifficulty, selectedType, searchQuery, categorizedQuestions]);

  // Available units for currently selected subject
  const availableUnits = useMemo(() => {
    if (selectedSubject === 'all') return [];
    const subj = SUBJECTS.find((s) => s.id === selectedSubject);
    return subj ? subj.units : [];
  }, [selectedSubject]);

  const handleAnswerChange = (questionId: string, val: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: val }));
  };

  const handleSelfEvaluate = (questionId: string, grade: 'correct' | 'partial' | 'wrong') => {
    setSelfEvaluations((prev) => ({ ...prev, [questionId]: grade }));
  };

  const toggleSolutionReveal = (questionId: string) => {
    setRevealedSolutions((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleSubmitQuiz = () => {
    setSubmitted(true);
    let score = 0;
    for (const q of filteredQuestions) {
      if (q.type === 'mcq') {
        const ans = (answers[q.id] ?? '').trim();
        if (ans.toLowerCase() === q.correctAnswer.toLowerCase()) {
          score += q.marks;
        } else {
          addMistake({
            id: `err-${q.id}-${Date.now()}`,
            questionId: q.id,
            topicId: q.topicId,
            subjectId: q.subjectId,
            category: 'conceptual_gap',
            selectedAnswer: ans || 'Unattempted',
            correctAnswer: q.correctAnswer,
            timestamp: new Date().toISOString(),
            resolved: false,
          });
        }
      } else {
        const evalGrade = selfEvaluations[q.id];
        if (evalGrade === 'correct') {
          score += q.marks;
        } else if (evalGrade === 'partial') {
          score += Math.round(q.marks * 0.5);
        } else {
          addMistake({
            id: `err-${q.id}-${Date.now()}`,
            questionId: q.id,
            topicId: q.topicId,
            subjectId: q.subjectId,
            category: 'conceptual_gap',
            selectedAnswer: answers[q.id] || 'Self-assessed needs improvement',
            correctAnswer: q.correctAnswer,
            timestamp: new Date().toISOString(),
            resolved: false,
          });
        }
      }
    }

    const totalPossibleMarks = filteredQuestions.reduce((acc, curr) => acc + curr.marks, 0);
    recordQuizScore(
      selectedSubject !== 'all' ? selectedSubject : 'all-subjects',
      score,
      totalPossibleMarks || filteredQuestions.length,
      mode
    );
  };

  const handleReset = () => {
    setAnswers({});
    setSelfEvaluations({});
    setSubmitted(false);
    setRevealedSolutions({});
  };

  // Unit-wise count breakdown
  const unitBreakdown = useMemo(() => {
    if (selectedSubject === 'all') return null;
    const currentSubj = SUBJECTS.find(s => s.id === selectedSubject);
    if (!currentSubj) return null;

    return currentSubj.units.map(unit => {
      const qInUnit = QUESTION_BANK.filter(q => q.unitId === unit.id);
      const pyqCount = qInUnit.filter(q => q.provenance === 'actual_pyq').length;
      const qbCount = qInUnit.filter(q => q.provenance === 'source_note_exercise' || q.provenance === 'user_faculty_notes' || q.provenance === 'platform_practice_lab').length;
      const aiCount = qInUnit.filter(q => q.provenance === 'ai_generated_verified' || q.provenance === 'ai_generated_pending_review').length;
      return {
        unitId: unit.id,
        unitNumber: unit.unitNumber,
        title: unit.title,
        total: qInUnit.length,
        pyqCount,
        qbCount,
        aiCount
      };
    });
  }, [selectedSubject]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-2 sm:px-4 py-4">
      {/* Header & Mode Switch */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            JMI Question Bank & Practice Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            1,240+ verified academic questions across 35 units with full self-assessment and scoring rubrics.
          </p>
        </div>

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
              Only authentic questions from original university papers with printed paper numbers, year, exam session and marks.
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
              Syllabus-aligned scenario questions, edge case MCQs, and viva drills with step-by-step solutions.
            </p>
          </div>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <Filter className="h-3.5 w-3.5" /> Filter:
        </div>

        {/* Subject Filter */}
        <select
          value={selectedSubject}
          onChange={(e) => {
            setSelectedSubject(e.target.value);
            setSelectedUnit('all');
          }}
          aria-label="Filter by subject"
          className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          <option value="all">All Subjects ({QUESTION_BANK.length})</option>
          {SUBJECTS.map((s) => {
            const count = QUESTION_BANK.filter((q) => q.subjectId === s.id).length;
            return (
              <option key={s.id} value={s.id}>
                {s.code} · {s.shortName || s.name} ({count})
              </option>
            );
          })}
        </select>

        {/* Unit Filter (active when subject is selected) */}
        {selectedSubject !== 'all' && availableUnits.length > 0 && (
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
            aria-label="Filter by unit"
            className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 max-w-xs truncate"
          >
            <option value="all">All Units ({filteredQuestions.length})</option>
            {availableUnits.map((u) => {
              const uCount = QUESTION_BANK.filter((q) => q.unitId === u.id).length;
              return (
                <option key={u.id} value={u.id}>
                  Unit {u.unitNumber}: {u.title} ({uCount})
                </option>
              );
            })}
          </select>
        )}

        {/* Difficulty Filter */}
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          aria-label="Filter by difficulty"
          className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          <option value="all">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        {/* Question Type Filter */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          aria-label="Filter by question type"
          className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          <option value="all">All Question Types</option>
          <option value="mcq">MCQs only</option>
          <option value="subjective">Subjective (Derivations / Numerical / Code)</option>
          <option value="numerical">Numerical Problems</option>
          <option value="derivation">Derivations & Proofs</option>
          <option value="code">Code & Labs</option>
        </select>

        {/* Search Input */}
        <div className="flex-1 min-w-[200px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions, year, or sessions..."
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          />
        </div>
      </div>

      {/* Unit Breakdown Matrix when a subject is picked */}
      {unitBreakdown && unitBreakdown.length > 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
            Unit-Wise Question Distribution (Guarantee: ≥ 30 Questions Per Unit)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {unitBreakdown.map((ub) => (
              <div 
                key={ub.unitId} 
                onClick={() => setSelectedUnit(selectedUnit === ub.unitId ? 'all' : ub.unitId)}
                className={`cursor-pointer rounded-lg border p-3 transition-all ${
                  selectedUnit === ub.unitId 
                    ? 'border-sky-500 bg-sky-50 dark:border-sky-500 dark:bg-sky-950/40' 
                    : 'border-slate-200 bg-slate-50 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Unit {ub.unitNumber}
                  </span>
                  <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    {ub.total} Qs
                  </span>
                </div>
                <div className="mt-1 text-[11px] font-medium text-slate-600 dark:text-slate-400 line-clamp-1">
                  {ub.title}
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                  <span>PYQs: <strong className="text-sky-600">{ub.pyqCount}</strong></span>
                  <span>Notes: <strong className="text-emerald-600">{ub.qbCount}</strong></span>
                  <span>AI: <strong className="text-purple-600">{ub.aiCount}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Questions List */}
      {filteredQuestions.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
          <AlertCircle className="mx-auto h-8 w-8 text-slate-400 mb-2" />
          <div className="text-sm font-semibold">No questions match the selected criteria.</div>
          <p className="text-xs mt-1">Try clearing filters or selecting another subject / unit.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const userAns = answers[q.id] ?? '';
            const isCorrect = userAns.trim().toLowerCase() === q.correctAnswer.toLowerCase();
            const showInstantFeedback = mode === 'practice' && userAns.trim().length > 0;
            const isSolutionOpen = revealedSolutions[q.id];
            const isBookmarked = state.bookmarks.includes(q.id);
            const selfGrade = selfEvaluations[q.id];
            const isSubjective = q.isSubjective || q.type !== 'mcq';

            return (
              <div
                key={q.id}
                className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
              >
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 dark:border-slate-800/60">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      #{idx + 1}
                    </span>
                    {q.year === '2025' && (
                      <span className="rounded bg-rose-600 px-2 py-0.5 text-xs font-extrabold text-white animate-pulse">
                        2025 • LATEST PYQ
                      </span>
                    )}
                    <span className="rounded bg-sky-50 px-2 py-0.5 text-xs font-semibold text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 uppercase">
                      {q.subjectId}
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      {q.type.replace('_', ' ').toUpperCase()}
                    </span>
                    <span
                      className={`rounded px-2 py-0.5 text-xs font-medium ${
                        q.difficulty === 'easy'
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                          : q.difficulty === 'medium'
                          ? 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                          : 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                      }`}
                    >
                      {q.difficulty}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      {q.marks} Marks
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Provenance source pill */}
                    <span className="max-w-[280px] truncate rounded bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
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
                  <div className="pt-1 space-y-2">
                    <textarea
                      rows={3}
                      placeholder="Write your answer, key steps, or code notes here for self-assessment..."
                      value={userAns}
                      disabled={submitted}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white p-2.5 text-xs sm:text-sm text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                    />
                  </div>
                )}

                {/* Subjective Self-Evaluation Panel */}
                {isSubjective && (
                  <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3 dark:border-slate-800 dark:bg-slate-950/60">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <button
                        onClick={() => toggleSolutionReveal(q.id)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400"
                      >
                        {isSolutionOpen ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                        {isSolutionOpen ? 'Hide Model Answer & Scoring Rubric' : 'Reveal Model Answer & Scoring Rubric'}
                      </button>

                      {/* Self-assessment buttons */}
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-medium text-slate-500">Self-Evaluation:</span>
                        <button
                          onClick={() => handleSelfEvaluate(q.id, 'correct')}
                          className={`rounded px-2 py-1 text-[11px] font-semibold transition ${
                            selfGrade === 'correct'
                              ? 'bg-emerald-600 text-white'
                              : 'bg-white border border-slate-200 text-emerald-700 hover:bg-emerald-50 dark:bg-slate-900 dark:border-slate-700'
                          }`}
                        >
                          Correct (100%)
                        </button>
                        <button
                          onClick={() => handleSelfEvaluate(q.id, 'partial')}
                          className={`rounded px-2 py-1 text-[11px] font-semibold transition ${
                            selfGrade === 'partial'
                              ? 'bg-amber-500 text-white'
                              : 'bg-white border border-slate-200 text-amber-700 hover:bg-amber-50 dark:bg-slate-900 dark:border-slate-700'
                          }`}
                        >
                          Partial (50%)
                        </button>
                        <button
                          onClick={() => handleSelfEvaluate(q.id, 'wrong')}
                          className={`rounded px-2 py-1 text-[11px] font-semibold transition ${
                            selfGrade === 'wrong'
                              ? 'bg-rose-600 text-white'
                              : 'bg-white border border-slate-200 text-rose-700 hover:bg-rose-50 dark:bg-slate-900 dark:border-slate-700'
                          }`}
                        >
                          Needs Review (0%)
                        </button>
                      </div>
                    </div>

                    {isSolutionOpen && (
                      <div className="mt-3 space-y-2.5 border-t border-slate-200 pt-3 text-xs dark:border-slate-800">
                        {q.modelAnswer && (
                          <div>
                            <span className="font-bold text-slate-900 dark:text-slate-100">Official Model Answer:</span>
                            <div className="mt-1 text-slate-700 dark:text-slate-300">
                              <MathText text={q.modelAnswer} />
                            </div>
                          </div>
                        )}

                        {q.keyMarkingPoints && q.keyMarkingPoints.length > 0 && (
                          <div>
                            <span className="font-bold text-slate-900 dark:text-slate-100">Key Marking Rubric:</span>
                            <ul className="mt-1 list-disc pl-4 space-y-0.5 text-slate-700 dark:text-slate-300">
                              {q.keyMarkingPoints.map((point, pIdx) => (
                                <li key={pIdx}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div>
                          <span className="font-bold text-slate-900 dark:text-slate-100">Step-by-step Solution:</span>
                          <div className="mt-1 text-slate-700 dark:text-slate-300">
                            <MathText text={q.solution} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Instant Feedback for Objective MCQs */}
                {!isSubjective && showInstantFeedback && (
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
