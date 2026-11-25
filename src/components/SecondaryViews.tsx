'use client';

import React, { useState } from 'react';
import { AlertTriangle, ExternalLink, FlaskConical, FolderOpen, Sparkles } from 'lucide-react';
import { DRIVE_RESOURCES } from '@/data/resources';
import { LAB_COURSES, LPP_LECTURES, SUBJECTS } from '@/data/curriculum';
import { ACADEMIC_DISCREPANCIES } from '@/data/schedule';
import { useApp } from '@/context/AppContext';

export function ResourcesView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Notes, NPTEL PDFs & Google Drive Index
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Authorised Drive links and the 7 NPTEL LPP lecture-note PDFs (78 pages total).
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {DRIVE_RESOURCES.map((res) => (
          <div
            key={res.id}
            className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
                <FolderOpen className="h-4 w-4 text-sky-600" />
                {res.name}
              </div>
              <span
                className={`rounded px-2 py-0.5 text-[10px] font-semibold ${
                  res.status === 'broken_shortcut'
                    ? 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                    : 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                }`}
              >
                {res.status === 'broken_shortcut' ? 'Broken Shortcut' : 'Requires Auth'}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">{res.notes}</p>
            <a
              href={res.driveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-sky-600 hover:underline dark:text-sky-400"
            >
              Open in Google Drive <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-3 text-base font-semibold text-slate-900 dark:text-slate-100">
          Ingested NPTEL LPP Lecture Notes (7 PDFs · 78 Pages)
        </h2>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {LPP_LECTURES.map((lec) => (
            <div key={lec.lectureNumber} className="flex items-center justify-between py-2.5 text-sm">
              <div>
                <span className="font-semibold">Lecture {lec.lectureNumber}:</span> {lec.title}{' '}
                <span className="text-xs text-slate-500">({lec.pdfFileName})</span>
              </div>
              <span className="text-xs text-slate-500">{lec.pageCount} pp.</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PracticalsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Practical Examination Preparation Centre
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          B.Tech (CSE-DS) 3rd Semester · 9:00 AM onwards · Concerned Lab
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {LAB_COURSES.map((lab) => (
          <div
            key={lab.id}
            className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between">
              <span className="rounded bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                {lab.code}
              </span>
              <span className="text-xs text-slate-500">{lab.examDate}</span>
            </div>
            <h2 className="mt-2 flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <FlaskConical className="h-4 w-4 text-emerald-600" />
              {lab.name}
            </h2>
            {lab.discrepancyIds?.includes('disc-dsl-302-dlt') && (
              <p className="mt-2 flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
                <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                Timetable prints &quot;DLT Lab&quot; for DSL-302.
              </p>
            )}
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Official lab manual experiments awaiting source upload.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TutorView() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    {
      role: 'assistant',
      text: 'Ask me about any Semester 3 topic or NPTEL LPP lecture. I cite exact source lectures and pages when grounded in your notes.',
    },
  ]);

  const handleSend = () => {
    if (!prompt.trim()) return;
    const q = prompt.trim();
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: q },
      {
        role: 'assistant',
        text: `Topic-aware context active. For "${q}", please configure your server-side AI provider key in .env.local to enable live RAG responses over the 7 NPTEL LPP PDFs and JMI syllabus.`,
      },
    ]);
    setPrompt('');
  };

  return (
    <div className="space-y-4">
      <h1 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
        <Sparkles className="h-6 w-6 text-sky-600" />
        AI Study Assistant
      </h1>
      <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 space-y-3">
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`rounded-lg p-3 text-sm ${
                m.role === 'user'
                  ? 'ml-8 bg-sky-600 text-white'
                  : 'mr-8 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask a doubt (e.g. Explain Bland's rule from Lecture 2)..."
            className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
          />
          <button
            onClick={handleSend}
            className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export function RevisionAnalyticsAdminView({ mode }: { mode: 'revision' | 'analytics' | 'admin' }) {
  const { state, exportBackup } = useApp();

  if (mode === 'revision') {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Revision Centre & Mistake Notebook
        </h1>
        {state.mistakes.length === 0 ? (
          <p className="text-sm text-slate-500">No mistakes recorded yet. Complete a quiz to populate your mistake notebook.</p>
        ) : (
          <div className="space-y-2">
            {state.mistakes.map((m) => (
              <div
                key={m.id}
                className="rounded-lg border border-slate-200 bg-white p-3 text-xs dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="font-semibold text-rose-600">{m.category}</span> · Selected:{' '}
                <code>{m.selectedAnswer}</code> · Correct: <code>{m.correctAnswer}</code>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (mode === 'analytics') {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Performance & Analytics
        </h1>
        <p className="text-sm text-slate-500">
          Quizzes completed: {state.quizScores.length} · Open mistakes: {state.mistakes.length}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Admin & Syllabus Coverage Matrix
        </h1>
        <button
          onClick={() => {
            const blob = new Blob([exportBackup()], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'jmi-study-hub-backup.json';
            a.click();
            URL.revokeObjectURL(url);
          }}
          className="rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white"
        >
          Export Progress Backup (JSON)
        </button>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-2 text-sm font-semibold">Curriculum Coverage</h2>
        <div className="space-y-1 text-xs">
          {SUBJECTS.map((s) => (
            <div key={s.id} className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
              <span>{s.code} — {s.name}</span>
              <span className="font-medium">{s.syllabusStatus}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-2 text-sm font-semibold">Discrepancy Log ({ACADEMIC_DISCREPANCIES.length})</h2>
        <div className="space-y-2 text-xs">
          {ACADEMIC_DISCREPANCIES.map((d) => (
            <div key={d.id} className="rounded bg-slate-50 p-2 dark:bg-slate-950">
              <div className="font-semibold">{d.title} [{d.resolutionStatus}]</div>
              <div className="text-slate-500">{d.sourceA} vs. {d.sourceB}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
