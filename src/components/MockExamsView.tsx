'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Clock, 
  Award, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Bookmark, 
  Flag, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  RotateCcw, 
  BookOpen, 
  Sparkles, 
  Eye, 
  EyeOff, 
  BarChart2, 
  FileCheck 
} from 'lucide-react';
import { MOCK_EXAM_PAPERS } from '@/data/mocks';
import { SUBJECTS } from '@/data/curriculum';
import { MockExamPaper, Question } from '@/types/academic';
import { MathText } from '@/components/MathText';
import { useApp } from '@/context/AppContext';

export function MockExamsView() {
  const { state, recordMockAttempt } = useApp();

  const [selectedPaperId, setSelectedPaperId] = useState<string | null>(null);
  const [examActive, setExamActive] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [selfEvaluations, setSelfEvaluations] = useState<Record<string, 'correct' | 'partial' | 'wrong'>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(180 * 60);
  const [submitted, setSubmitted] = useState(false);
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  const activePaper = useMemo(() => {
    return MOCK_EXAM_PAPERS.find(p => p.id === selectedPaperId) || MOCK_EXAM_PAPERS[0];
  }, [selectedPaperId]);

  const activeSection = activePaper.sections[currentSectionIndex] || activePaper.sections[0];
  const allPaperQuestions = useMemo(() => {
    return activePaper.sections.flatMap(s => s.questions);
  }, [activePaper]);

  const currentQuestion = activeSection.questions[currentQuestionIndex] || activeSection.questions[0];

  // Countdown timer during active examination
  useEffect(() => {
    if (!examActive || submitted) return;
    const interval = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [examActive, submitted]);

  const formatTimer = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartExam = (paperId: string) => {
    setSelectedPaperId(paperId);
    const paper = MOCK_EXAM_PAPERS.find(p => p.id === paperId) || MOCK_EXAM_PAPERS[0];
    setSecondsRemaining(paper.durationMinutes * 60);
    setAnswers({});
    setFlagged({});
    setSelfEvaluations({});
    setRevealedSolutions({});
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setSubmitted(false);
    setExamActive(true);
  };

  const handleFinishExam = () => {
    setSubmitted(true);
    setExamActive(false);

    // Calculate score
    let totalScore = 0;
    for (const q of allPaperQuestions) {
      if (q.type === 'mcq') {
        if ((answers[q.id] || '').trim().toLowerCase() === q.correctAnswer.toLowerCase()) {
          totalScore += q.marks;
        }
      } else {
        const grade = selfEvaluations[q.id];
        if (grade === 'correct') totalScore += q.marks;
        else if (grade === 'partial') totalScore += Math.round(q.marks * 0.5);
      }
    }

    recordMockAttempt({
      id: `attempt-${Date.now()}`,
      paperId: activePaper.id,
      subjectId: activePaper.subjectId,
      timestamp: new Date().toISOString(),
      durationSecondsTaken: (activePaper.durationMinutes * 60) - secondsRemaining,
      totalScore,
      maxScore: activePaper.totalMarks,
      answers,
      selfEvaluations
    });
  };

  const handleSelfGrade = (qId: string, grade: 'correct' | 'partial' | 'wrong') => {
    setSelfEvaluations(prev => ({ ...prev, [qId]: grade }));
  };

  const toggleFlag = (qId: string) => {
    setFlagged(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const toggleRevealSolution = (qId: string) => {
    setRevealedSolutions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Exam Selection Screen
  if (!examActive && !submitted) {
    return (
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-5 space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 uppercase tracking-wider">
            <Award className="h-4 w-4" /> Examination Practice Centre
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-1">
            JMI Mock Examination Centre
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
            Experience genuine timed university examinations based on official JMI blueprints (Section A, B, C with 70 marks, 3-hour timer, and realistic choice rubrics).
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOCK_EXAM_PAPERS.map((paper) => {
            const subj = SUBJECTS.find(s => s.id === paper.subjectId);
            return (
              <div
                key={paper.id}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between dark:border-slate-800 dark:bg-slate-900"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-sky-100 px-2.5 py-0.5 text-xs font-bold text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                      {paper.code}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {paper.academicYear}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                    {paper.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 pt-3 dark:border-slate-800">
                    <div className="flex items-center justify-between">
                      <span>Duration:</span>
                      <strong className="text-slate-900 dark:text-slate-200">{paper.durationMinutes} Minutes (3 Hours)</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Total Marks:</span>
                      <strong className="text-slate-900 dark:text-slate-200">{paper.totalMarks} Marks</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Blueprint:</span>
                      <span className="text-slate-800 dark:text-slate-300 font-medium">3 Sections (A, B, C)</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleStartExam(paper.id)}
                  className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-xs font-semibold text-white shadow hover:bg-sky-700 transition"
                >
                  <Play className="h-3.5 w-3.5 fill-current" /> Start Timed Mock Examination
                </button>
              </div>
            );
          })}
        </div>

        {/* Previous Mock Attempts History */}
        {state.mockAttempts && state.mockAttempts.length > 0 && (
          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-emerald-600" /> Recent Mock Examination Attempts
            </h3>
            <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              {state.mockAttempts.map(att => (
                <div key={att.id} className="py-2.5 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{att.paperId}</span>
                    <span className="ml-2 text-slate-400">{new Date(att.timestamp).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-sky-600 dark:text-sky-400">
                      Score: {att.totalScore} / {att.maxScore} ({Math.round((att.totalScore / att.maxScore) * 100)}%)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Active Live Examination Interface
  if (examActive) {
    return (
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 space-y-4">
        {/* Top Sticky Status Bar */}
        <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white/95 backdrop-blur px-4 py-3 shadow-md dark:border-slate-800 dark:bg-slate-900/95">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              {activePaper.code} · {activePaper.sessionType}
            </div>
            <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
              {activePaper.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-sm font-bold ${
              secondsRemaining < 600 ? 'bg-rose-100 text-rose-700 animate-pulse' : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
            }`}>
              <Clock className="h-4 w-4 text-sky-600" />
              <span>{formatTimer(secondsRemaining)}</span>
            </div>

            <button
              onClick={handleFinishExam}
              className="rounded-lg bg-rose-600 px-4 py-1.5 text-xs font-semibold text-white shadow hover:bg-rose-700 transition"
            >
              Submit Paper
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Main Question Panel (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            {/* Section Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2 dark:border-slate-800">
              {activePaper.sections.map((sec, idx) => (
                <button
                  key={sec.id}
                  onClick={() => {
                    setCurrentSectionIndex(idx);
                    setCurrentQuestionIndex(0);
                  }}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                    currentSectionIndex === idx
                      ? 'bg-sky-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  Section {String.fromCharCode(65 + idx)} ({sec.questions.length} Qs)
                </button>
              ))}
            </div>

            {/* Current Question Card */}
            {currentQuestion ? (
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-sky-100 px-2 py-0.5 text-xs font-bold text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                      Q{currentQuestionIndex + 1}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {currentQuestion.marks} Marks · {currentQuestion.type.toUpperCase()}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleFlag(currentQuestion.id)}
                    className={`flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition ${
                      flagged[currentQuestion.id]
                        ? 'bg-amber-100 text-amber-800 font-semibold dark:bg-amber-950 dark:text-amber-300'
                        : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Flag className="h-3.5 w-3.5" />
                    {flagged[currentQuestion.id] ? 'Flagged for Review' : 'Flag Question'}
                  </button>
                </div>

                {/* Prompt Statement */}
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                  <MathText text={currentQuestion.prompt} />
                </div>

                {/* Input Area */}
                {currentQuestion.type === 'mcq' && currentQuestion.options ? (
                  <div className="space-y-2 pt-2">
                    {currentQuestion.options.map((opt) => {
                      const isSel = answers[currentQuestion.id] === opt;
                      return (
                        <label
                          key={opt}
                          className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-xs sm:text-sm transition ${
                            isSel
                              ? 'border-sky-500 bg-sky-50/70 text-sky-900 font-medium dark:bg-sky-950/40 dark:text-sky-200'
                              : 'border-slate-200 hover:border-slate-300 dark:border-slate-800'
                          }`}
                        >
                          <input
                            type="radio"
                            name={`mock-q-${currentQuestion.id}`}
                            value={opt}
                            checked={isSel}
                            onChange={() => setAnswers(prev => ({ ...prev, [currentQuestion.id]: opt }))}
                            className="text-sky-600"
                          />
                          <MathText text={opt} />
                        </label>
                      );
                    })}
                  </div>
                ) : (
                  <div className="pt-2">
                    <textarea
                      rows={5}
                      placeholder="Type your derivation steps, calculations, or answer synopsis..."
                      value={answers[currentQuestion.id] || ''}
                      onChange={(e) => setAnswers(prev => ({ ...prev, [currentQuestion.id]: e.target.value }))}
                      className="w-full rounded-lg border border-slate-300 p-3 text-xs sm:text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                    />
                  </div>
                )}

                {/* Question Navigation Controls */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                  <button
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex(i => Math.max(0, i - 1))}
                    className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 disabled:opacity-40 dark:border-slate-700 dark:text-slate-300"
                  >
                    <ChevronLeft className="h-4 w-4" /> Previous
                  </button>

                  <div className="text-xs text-slate-500">
                    Question {currentQuestionIndex + 1} of {activeSection.questions.length}
                  </div>

                  <button
                    disabled={currentQuestionIndex === activeSection.questions.length - 1}
                    onClick={() => setCurrentQuestionIndex(i => Math.min(activeSection.questions.length - 1, i + 1))}
                    className="flex items-center gap-1 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-700 disabled:opacity-40"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          {/* Right Question Palette (1 col) */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Question Palette
            </h4>

            <div className="grid grid-cols-5 gap-2">
              {activeSection.questions.map((q, idx) => {
                const isAnswered = !!answers[q.id];
                const isFlag = !!flagged[q.id];
                const isCurr = currentQuestionIndex === idx;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-8 w-8 rounded-lg text-xs font-bold flex items-center justify-center transition ${
                      isCurr
                        ? 'ring-2 ring-sky-500 font-extrabold'
                        : ''
                    } ${
                      isFlag
                        ? 'bg-amber-400 text-amber-950'
                        : isAnswered
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-slate-100 pt-3 text-[11px] space-y-1.5 text-slate-600 dark:border-slate-800 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-emerald-600 inline-block" /> Answered
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-amber-400 inline-block" /> Flagged for Review
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-slate-200 inline-block dark:bg-slate-800" /> Unattempted
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Result & Comprehensive Performance Analysis Screen
  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-5 space-y-6">
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200 shadow-sm">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
          <div>
            <h2 className="text-xl font-bold">Examination Submitted Successfully!</h2>
            <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">
              {activePaper.title} · Self-Assessment Scoring Mode
            </p>
          </div>
        </div>
      </div>

      {/* Review & Solutions Accordion */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            Paper Solutions & Self-Evaluation Rubrics
          </h3>
          <button
            onClick={() => setSubmitted(false)}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Back to Mock Papers
          </button>
        </div>

        <div className="space-y-4">
          {allPaperQuestions.map((q, idx) => {
            const userAns = answers[q.id];
            const isCorrect = userAns && userAns.trim().toLowerCase() === q.correctAnswer.toLowerCase();
            const isOpen = revealedSolutions[q.id];
            const selfGrade = selfEvaluations[q.id];

            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Question #{idx + 1} ({q.marks} Marks)</span>
                  <span className="text-sky-600">{q.type.toUpperCase()}</span>
                </div>

                <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  <MathText text={q.prompt} />
                </div>

                <div className="rounded bg-slate-50 p-2.5 text-xs text-slate-700 dark:bg-slate-950 dark:text-slate-300">
                  <strong>Your Input:</strong> {userAns || '<Unattempted>'}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => toggleRevealSolution(q.id)}
                    className="flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-700"
                  >
                    {isOpen ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                    {isOpen ? 'Hide Solution' : 'View Step-by-Step Solution & Marking Key'}
                  </button>

                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-slate-500">Self-Grade:</span>
                    <button
                      onClick={() => handleSelfGrade(q.id, 'correct')}
                      className={`rounded px-2 py-0.5 text-xs font-semibold ${
                        selfGrade === 'correct' ? 'bg-emerald-600 text-white' : 'border border-slate-200 text-emerald-700'
                      }`}
                    >
                      Correct (+{q.marks})
                    </button>
                    <button
                      onClick={() => handleSelfGrade(q.id, 'partial')}
                      className={`rounded px-2 py-0.5 text-xs font-semibold ${
                        selfGrade === 'partial' ? 'bg-amber-500 text-white' : 'border border-slate-200 text-amber-700'
                      }`}
                    >
                      Partial (+{Math.round(q.marks * 0.5)})
                    </button>
                    <button
                      onClick={() => handleSelfGrade(q.id, 'wrong')}
                      className={`rounded px-2 py-0.5 text-xs font-semibold ${
                        selfGrade === 'wrong' ? 'bg-rose-600 text-white' : 'border border-slate-200 text-rose-700'
                      }`}
                    >
                      Wrong (0)
                    </button>
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-2 border-t border-slate-100 pt-2 text-xs space-y-1.5 dark:border-slate-800">
                    <div>
                      <strong className="text-slate-900 dark:text-slate-100">Official Solution:</strong>
                      <div className="mt-1 text-slate-700 dark:text-slate-300">
                        <MathText text={q.solution} />
                      </div>
                    </div>
                    {q.keyMarkingPoints && (
                      <div className="mt-2">
                        <strong className="text-slate-900 dark:text-slate-100">Marking Breakdown:</strong>
                        <ul className="list-disc pl-4 mt-1 space-y-0.5 text-slate-600 dark:text-slate-400">
                          {q.keyMarkingPoints.map((pt, pIdx) => (
                            <li key={pIdx}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
