'use client';

import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { QUESTION_BANK } from '@/data/questions';
import { MathText } from '@/components/MathText';
import { useApp } from '@/context/AppContext';

export function QuizPyqView() {
  const { addMistake, recordQuizScore } = useApp();
  const [mode, setMode] = useState<'practice' | 'test'>('practice');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = QUESTION_BANK.filter(
    (q) => subjectFilter === 'all' || q.subjectId === subjectFilter
  );

  const handleSubmit = () => {
    setSubmitted(true);
    let score = 0;
    for (const q of questions) {
      const ans = (answers[q.id] ?? '').trim();
      if (ans === q.correctAnswer) {
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
    recordQuizScore(subjectFilter, score, questions.length, mode);
  };

  const resetQuiz = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            PYQ & Topic Quiz Engine
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Explicit provenance on every question. Test mode hides solutions until submission.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            value={subjectFilter}
            onChange={(e) => {
              setSubjectFilter(e.target.value);
              resetQuiz();
            }}
            aria-label="Filter questions by subject"
            className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs dark:border-slate-700 dark:bg-slate-800"
          >
            <option value="all">All Subjects</option>
            <option value="asb-301">ASB-301 Engineering Mathematics III</option>
            <option value="lpp">LPP (NPTEL)</option>
            <option value="dsc-301">DSC-301 Discrete Math</option>
            <option value="dsc-302">DSC-302 Data Structures</option>
            <option value="dsc-303">DSC-303 Digital Logic</option>
            <option value="dsc-304">DSC-304 DBMS</option>
          </select>
          <button
            onClick={() => {
              setMode(mode === 'practice' ? 'test' : 'practice');
              resetQuiz();
            }}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium dark:border-slate-700 dark:bg-slate-800"
          >
            Mode: {mode === 'practice' ? 'Practice (Instant)' : 'Test (Hidden until submit)'}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((q, idx) => {
          const userAns = answers[q.id] ?? '';
          const showFeedback = submitted || (mode === 'practice' && userAns !== '');
          const isCorrect = userAns.trim() === q.correctAnswer;

          return (
            <div
              key={q.id}
              className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {q.questionNumber ? `${q.questionNumber}` : `Q${idx + 1}`}
                  </span>
                  <span>· {q.marks} marks · {q.difficulty}</span>
                  {q.year && (
                    <span className="rounded bg-sky-50 px-1.5 py-0.5 text-[10px] font-semibold text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
                      {q.year} {q.examSession || ''}
                    </span>
                  )}
                </div>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {q.provenance === 'actual_pyq' ? 'Authentic PYQ' : q.provenance} · {q.sourceRef}
                </span>
              </div>

              <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                <MathText text={q.prompt} />
              </div>

              {q.type === 'mcq' && q.options ? (
                <div className="space-y-2">
                  {q.options.map((opt) => (
                    <label
                      key={opt}
                      className={`flex cursor-pointer items-center gap-2.5 rounded-lg border p-2.5 text-sm ${
                        userAns === opt
                          ? 'border-sky-500 bg-sky-50/50 dark:bg-sky-950/30'
                          : 'border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={opt}
                        checked={userAns === opt}
                        disabled={submitted}
                        onChange={() => setAnswers((p) => ({ ...p, [q.id]: opt }))}
                      />
                      <MathText text={opt} />
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  type="text"
                  value={userAns}
                  disabled={submitted}
                  onChange={(e) => setAnswers((p) => ({ ...p, [q.id]: e.target.value }))}
                  placeholder="Enter numerical answer..."
                  className="w-full max-w-xs rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm dark:border-slate-700 dark:bg-slate-950"
                />
              )}

              {showFeedback && (
                <div
                  className={`rounded-lg p-3 text-xs ${
                    isCorrect
                      ? 'bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200'
                      : 'bg-rose-50 text-rose-900 dark:bg-rose-950/40 dark:text-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-semibold">
                    {isCorrect ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <XCircle className="h-4 w-4" />
                    )}
                    {isCorrect ? 'Correct!' : `Incorrect — Answer: ${q.correctAnswer}`}
                  </div>
                  <div className="mt-1">
                    <MathText text={q.solution} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
        >
          Submit Quiz
        </button>
      ) : (
        <button
          onClick={resetQuiz}
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium dark:border-slate-700 dark:bg-slate-800"
        >
          Retry Quiz
        </button>
      )}
    </div>
  );
}
