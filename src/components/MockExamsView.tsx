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
  Printer,
  Download,
  FileCheck,
  Check,
  FileText
} from 'lucide-react';
import { AUTHENTIC_MOCK_PAPERS } from '@/data/authentic_mocks';
import { SUBJECTS } from '@/data/curriculum';
import { MockExamPaper, Question } from '@/types/academic';
import { MathText } from '@/components/MathText';
import { useApp } from '@/context/AppContext';

export function MockExamsView() {
  const { state, recordMockAttempt } = useApp();

  const [selectedPaperId, setSelectedPaperId] = useState<string>(AUTHENTIC_MOCK_PAPERS[0].id);
  const [selectedPatternFilter, setSelectedPatternFilter] = useState<string>('all');
  const [examActive, setExamActive] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [selfEvaluations, setSelfEvaluations] = useState<Record<string, 'correct' | 'partial' | 'wrong'>>({});
  const [selfAssignedMarks, setSelfAssignedMarks] = useState<Record<string, number>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(180 * 60);
  const [submitted, setSubmitted] = useState(false);
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [isPrintView, setIsPrintView] = useState(false);

  const activePaper = useMemo(() => {
    return AUTHENTIC_MOCK_PAPERS.find(p => p.id === selectedPaperId) || AUTHENTIC_MOCK_PAPERS[0];
  }, [selectedPaperId]);

  const activeSection = activePaper.sections[currentSectionIndex] || activePaper.sections[0];
  const allPaperQuestions = useMemo(() => {
    return activePaper.sections.flatMap(s => s.questions);
  }, [activePaper]);

  const currentQuestion = activeSection.questions[currentQuestionIndex] || activeSection.questions[0];

  // Countdown timer
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
    const paper = AUTHENTIC_MOCK_PAPERS.find(p => p.id === paperId) || AUTHENTIC_MOCK_PAPERS[0];
    setSecondsRemaining(paper.durationMinutes * 60);
    setAnswers({});
    setFlagged({});
    setSelfEvaluations({});
    setSelfAssignedMarks({});
    setRevealedSolutions({});
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setSubmitted(false);
    setIsPrintView(false);
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
        const assigned = selfAssignedMarks[q.id];
        if (assigned !== undefined) {
          totalScore += assigned;
        } else {
          const grade = selfEvaluations[q.id];
          if (grade === 'correct') totalScore += q.marks;
          else if (grade === 'partial') totalScore += Math.round(q.marks * 0.5 * 10) / 10;
        }
      }
    }

    recordMockAttempt({
      id: `attempt-${Date.now()}`,
      paperId: activePaper.id,
      subjectId: activePaper.subjectId,
      timestamp: new Date().toISOString(),
      durationSecondsTaken: (activePaper.durationMinutes * 60) - secondsRemaining,
      totalScore: Math.round(totalScore * 10) / 10,
      maxScore: activePaper.totalMarks,
      answers,
      selfEvaluations,
      selfAssignedMarks
    });
  };

  const handleSelfGrade = (qId: string, grade: 'correct' | 'partial' | 'wrong', defaultMarks: number) => {
    setSelfEvaluations(prev => ({ ...prev, [qId]: grade }));
    if (grade === 'correct') {
      setSelfAssignedMarks(prev => ({ ...prev, [qId]: defaultMarks }));
    } else if (grade === 'partial') {
      setSelfAssignedMarks(prev => ({ ...prev, [qId]: Math.round(defaultMarks * 0.5 * 10) / 10 }));
    } else {
      setSelfAssignedMarks(prev => ({ ...prev, [qId]: 0 }));
    }
  };

  const handleCustomMarksChange = (qId: string, val: number, maxMarks: number) => {
    const clamped = Math.max(0, Math.min(maxMarks, isNaN(val) ? 0 : val));
    setSelfAssignedMarks(prev => ({ ...prev, [qId]: clamped }));
    if (clamped === maxMarks) setSelfEvaluations(prev => ({ ...prev, [qId]: 'correct' }));
    else if (clamped > 0) setSelfEvaluations(prev => ({ ...prev, [qId]: 'partial' }));
    else setSelfEvaluations(prev => ({ ...prev, [qId]: 'wrong' }));
  };

  const toggleFlag = (qId: string) => {
    setFlagged(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const toggleRevealSolution = (qId: string) => {
    setRevealedSolutions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Filtered papers
  const filteredPapers = useMemo(() => {
    if (selectedPatternFilter === 'all') return AUTHENTIC_MOCK_PAPERS;
    return AUTHENTIC_MOCK_PAPERS.filter(p => p.subjectId === selectedPatternFilter);
  }, [selectedPatternFilter]);

  // Printable A4 Mode View
  if (isPrintView) {
    return (
      <div className="bg-white min-h-screen text-black p-8 max-w-4xl mx-auto font-serif print:p-0">
        <div className="flex justify-between items-center mb-6 print:hidden">
          <button
            onClick={() => setIsPrintView(false)}
            className="flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-sans font-semibold text-slate-700 hover:bg-slate-50"
          >
            <ChevronLeft className="h-4 w-4" /> Back to Examination Hub
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 rounded-lg bg-sky-600 px-4 py-1.5 text-xs font-sans font-semibold text-white shadow hover:bg-sky-700"
          >
            <Printer className="h-4 w-4" /> Print / Save as PDF
          </button>
        </div>

        {/* University Header */}
        <div className="text-center border-b-2 border-black pb-4 mb-6">
          <div className="text-sm font-semibold uppercase tracking-wider">
            Jamia Millia Islamia (A Central University) · New Delhi
          </div>
          <div className="text-lg font-bold mt-1">
            Faculty of Engineering and Technology · B.Tech. Semester-III Examination
          </div>
          <div className="text-base font-semibold mt-1">
            Subject: {activePaper.title}
          </div>
          <div className="flex justify-between text-xs font-semibold mt-4 px-2">
            <span>Paper Code: <strong>{activePaper.code}</strong></span>
            <span>Duration: <strong>{activePaper.durationMinutes / 60} Hours</strong></span>
            <span>Maximum Marks: <strong>{activePaper.totalMarks}</strong></span>
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-6 p-3 border border-black/40 text-xs leading-relaxed">
          <div className="font-bold underline mb-1">Instructions to Candidates:</div>
          <ol className="list-decimal pl-4 space-y-0.5">
            {activePaper.instructions.map((inst, i) => (
              <li key={i}>{inst}</li>
            ))}
          </ol>
        </div>

        {/* Paper Content */}
        <div className="space-y-6">
          {activePaper.sections.map((sec, secIdx) => (
            <div key={sec.id} className="border-t border-black/30 pt-4">
              <div className="font-bold text-sm mb-3">
                {sec.title}
              </div>

              <div className="space-y-4 pl-2">
                {sec.questions.map((q, qIdx) => (
                  <div key={q.id} className="text-xs leading-relaxed flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <span className="font-bold mr-2">({String.fromCharCode(97 + qIdx)})</span>
                      <MathText text={q.prompt} />
                    </div>
                    <div className="font-bold shrink-0 text-right">
                      [{q.marks}]
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Paper Selection Screen
  if (!examActive && !submitted) {
    return (
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-5 space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 uppercase tracking-wider">
            <Award className="h-4 w-4" /> Official JMI Pattern Reconstructed Papers
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-1">
            JMI Mock Examination Centre
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
            Authentic full-length examination papers reconstructed directly from scanned previous-year university papers (Dec 2024-25 & 2021-22). Features authentic unit-by-unit question structures, exact 4.5-mark internal choices, rigorous mathematical problems, and subjective self-marking rubrics.
          </p>
        </div>

        {/* Pattern Filter Selector */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Filter by Subject:</span>
          <button
            onClick={() => setSelectedPatternFilter('all')}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              selectedPatternFilter === 'all'
                ? 'bg-sky-600 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
            }`}
          >
            All Papers ({AUTHENTIC_MOCK_PAPERS.length})
          </button>
          {SUBJECTS.slice(0, 6).map(s => (
            <button
              key={s.id}
              onClick={() => setSelectedPatternFilter(s.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                selectedPatternFilter === s.id
                  ? 'bg-sky-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
              }`}
            >
              {s.code}
            </button>
          ))}
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPapers.map((paper) => (
            <div
              key={paper.id}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between dark:border-slate-800 dark:bg-slate-900"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-sky-100 px-2.5 py-0.5 text-xs font-bold text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                    {paper.code}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Verified {paper.academicYear} Pattern
                  </span>
                </div>

                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                  {paper.title}
                </h3>

                <div className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 pt-3 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <span>Pattern Blueprint:</span>
                    <strong className="text-slate-900 dark:text-slate-200">5 Unit Questions (Attempt any 2 parts)</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Maximum Marks:</span>
                    <strong className="text-slate-900 dark:text-slate-200">{paper.totalMarks} Marks</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Time Duration:</span>
                    <strong className="text-slate-900 dark:text-slate-200">{paper.durationMinutes / 60} Hours (180 mins)</strong>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setSelectedPaperId(paper.id);
                    setIsPrintView(true);
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 transition"
                >
                  <Printer className="h-3.5 w-3.5" /> Printable A4
                </button>
                <button
                  onClick={() => handleStartExam(paper.id)}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-sky-700 transition"
                >
                  <Play className="h-3.5 w-3.5 fill-current" /> Start Mock
                </button>
              </div>
            </div>
          ))}
        </div>
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
                  Question {idx + 1} ({sec.questions.length} parts)
                </button>
              ))}
            </div>

            {/* Current Question Card */}
            {currentQuestion ? (
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-sky-100 px-2 py-0.5 text-xs font-bold text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                      Part ({String.fromCharCode(97 + currentQuestionIndex)})
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
                <div className="pt-2">
                  <textarea
                    rows={6}
                    placeholder="Type your derivation steps, formulas used, calculations, or answer synopsis for self-assessment..."
                    value={answers[currentQuestion.id] || ''}
                    onChange={(e) => setAnswers(prev => ({ ...prev, [currentQuestion.id]: e.target.value }))}
                    className="w-full rounded-lg border border-slate-300 p-3 text-xs sm:text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                  />
                </div>

                {/* Question Navigation Controls */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                  <button
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex(i => Math.max(0, i - 1))}
                    className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 disabled:opacity-40 dark:border-slate-700 dark:text-slate-300"
                  >
                    <ChevronLeft className="h-4 w-4" /> Previous Part
                  </button>

                  <div className="text-xs text-slate-500">
                    Part ({String.fromCharCode(97 + currentQuestionIndex)}) of {activeSection.questions.length}
                  </div>

                  <button
                    disabled={currentQuestionIndex === activeSection.questions.length - 1}
                    onClick={() => setCurrentQuestionIndex(i => Math.min(activeSection.questions.length - 1, i + 1))}
                    className="flex items-center gap-1 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-700 disabled:opacity-40"
                  >
                    Next Part <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          {/* Right Question Palette (1 col) */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Question Parts Palette
            </h4>

            <div className="grid grid-cols-4 gap-2">
              {activeSection.questions.map((q, idx) => {
                const isAnswered = !!answers[q.id];
                const isFlag = !!flagged[q.id];
                const isCurr = currentQuestionIndex === idx;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-9 w-full rounded-lg text-xs font-bold flex items-center justify-center transition ${
                      isCurr ? 'ring-2 ring-sky-500 font-extrabold' : ''
                    } ${
                      isFlag
                        ? 'bg-amber-400 text-amber-950'
                        : isAnswered
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                    }`}
                  >
                    ({String.fromCharCode(97 + idx)})
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
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <div>
            <h2 className="text-xl font-bold">Examination Submitted Successfully!</h2>
            <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">
              {activePaper.title} · Self-Assessment Scoring Mode
            </p>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xs font-semibold uppercase text-emerald-800 dark:text-emerald-300">Self-Evaluated Score:</div>
          <div className="text-2xl font-extrabold text-emerald-950 dark:text-white">
            {Object.values(selfAssignedMarks).reduce((a, b) => a + b, 0)} / {activePaper.totalMarks}
          </div>
        </div>
      </div>

      {/* Review & Solutions Accordion */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            Official Solutions & Self-Marking Rubrics
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
            const isOpen = revealedSolutions[q.id];
            const selfGrade = selfEvaluations[q.id];
            const assigned = selfAssignedMarks[q.id] ?? 0;

            return (
              <div key={q.id} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Question Part #{idx + 1} ({q.marks} Marks)</span>
                  <span className="text-sky-600 font-bold">{q.sourceRef}</span>
                </div>

                <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  <MathText text={q.prompt} />
                </div>

                <div className="rounded bg-slate-50 p-2.5 text-xs text-slate-700 dark:bg-slate-950 dark:text-slate-300">
                  <strong>Your Working:</strong> {userAns || '<Unattempted>'}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => toggleRevealSolution(q.id)}
                    className="flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-700"
                  >
                    {isOpen ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                    {isOpen ? 'Hide Complete Solution' : 'View Complete Step-by-Step Solution & Marking Key'}
                  </button>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500 font-medium">Self-Grade:</span>
                    <button
                      onClick={() => handleSelfGrade(q.id, 'correct', q.marks)}
                      className={`rounded px-2.5 py-1 text-xs font-semibold transition ${
                        selfGrade === 'correct' ? 'bg-emerald-600 text-white' : 'border border-slate-200 text-emerald-700'
                      }`}
                    >
                      Correct (+{q.marks})
                    </button>
                    <button
                      onClick={() => handleSelfGrade(q.id, 'partial', q.marks)}
                      className={`rounded px-2.5 py-1 text-xs font-semibold transition ${
                        selfGrade === 'partial' ? 'bg-amber-500 text-white' : 'border border-slate-200 text-amber-700'
                      }`}
                    >
                      Partial (+{Math.round(q.marks * 0.5 * 10) / 10})
                    </button>
                    <button
                      onClick={() => handleSelfGrade(q.id, 'wrong', q.marks)}
                      className={`rounded px-2.5 py-1 text-xs font-semibold transition ${
                        selfGrade === 'wrong' ? 'bg-rose-600 text-white' : 'border border-slate-200 text-rose-700'
                      }`}
                    >
                      Wrong (0)
                    </button>

                    <div className="flex items-center gap-1 ml-2">
                      <span className="text-[11px] text-slate-400">Awarded:</span>
                      <input
                        type="number"
                        min={0}
                        max={q.marks}
                        step={0.5}
                        value={assigned}
                        onChange={(e) => handleCustomMarksChange(q.id, parseFloat(e.target.value), q.marks)}
                        className="w-14 rounded border border-slate-300 px-1.5 py-0.5 text-xs text-center font-bold text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                      />
                      <span className="text-[11px] text-slate-400">/ {q.marks}</span>
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-2 border-t border-slate-100 pt-3 text-xs space-y-2 dark:border-slate-800">
                    <div>
                      <strong className="text-slate-900 dark:text-slate-100">Official Step-by-Step Solution:</strong>
                      <div className="mt-1 text-slate-700 dark:text-slate-300 leading-relaxed">
                        <MathText text={q.solution} />
                      </div>
                    </div>
                    {q.keyMarkingPoints && (
                      <div className="mt-2">
                        <strong className="text-slate-900 dark:text-slate-100">Official Marking Scheme Rubric:</strong>
                        <ul className="list-disc pl-4 mt-1 space-y-1 text-slate-600 dark:text-slate-400">
                          {q.keyMarkingPoints.map((pt, pIdx) => (
                            <li key={pIdx}>
                              <MathText text={pt} />
                            </li>
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
