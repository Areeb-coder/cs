'use client';

import React, { useEffect, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Calendar as CalendarIcon,
  CheckCircle2,
  Clock,
  Cpu,
  Play,
  Sparkles,
} from 'lucide-react';
import { SUBJECTS } from '@/data/curriculum';
import { ACADEMIC_DISCREPANCIES, PRACTICAL_EXAMS, THEORY_EXAMS } from '@/data/schedule';
import { getCountdownParts, getExamTimestampIst, getNextExam } from '@/lib/dateUtils';
import { useApp } from '@/context/AppContext';

const DEC_2026_DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const THEORY_DAYS = new Set([2, 4, 7, 9, 11, 16]);
const PRACTICAL_DAYS = new Set([17, 18, 19, 20]);

export function DashboardView() {
  const { state, setActiveSection, setSelectedSubjectId } = useApp();
  const [nowMs, setNowMs] = useState<number | null>(null);

  useEffect(() => {
    setNowMs(Date.now());
    const id = setInterval(() => setNowMs(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const nextExam = nowMs !== null ? getNextExam(THEORY_EXAMS, nowMs) : THEORY_EXAMS[0];
  const countdown =
    nextExam && nowMs !== null
      ? getCountdownParts(getExamTimestampIst(nextExam), nowMs)
      : null;

  const allTopics = SUBJECTS.flatMap((s) => s.units.flatMap((u) => u.topics));
  const totalTopics = allTopics.length;
  const masteredCount = allTopics.filter(
    (t) => state.topicStates[t.id] === 'mastered' || state.topicStates[t.id] === 'proficient'
  ).length;
  const completionPct = totalTopics > 0 ? Math.round((masteredCount / totalTopics) * 100) : 0;
  const openMistakes = state.mistakes.filter((m) => !m.resolved).length;
  const unresolvedDiscrepancies = ACADEMIC_DISCREPANCIES.filter(
    (d) => d.resolutionStatus === 'unresolved'
  );

  // Pick 3 recommended topics for Today's Study Plan
  const todaysTopics = allTopics
    .filter((t) => (state.topicStates[t.id] ?? 'not_started') !== 'mastered')
    .slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Top Welcome Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#20283A] dark:text-white">
            Welcome back, Student
          </h2>
          <p className="text-sm text-[#697386] dark:text-slate-400">
            B.Tech CSE (Data Science) · Semester 3 · {totalTopics} verified syllabus topics
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSection('subjects')}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#536DD8] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#445bc0] transition-colors"
          >
            <Play className="h-3.5 w-3.5" />
            Continue Learning
          </button>
          <button
            onClick={() => setActiveSection('pyqs')}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#E8EAF0] bg-white px-4 py-2 text-xs font-semibold text-[#20283A] hover:bg-[#F6F7FB] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-[#536DD8]" />
            Practice Questions
          </button>
        </div>
      </div>

      {/* Main 12-Column Grid */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left 8 Columns */}
        <div className="min-w-0 space-y-6 lg:col-span-8">
          {/* Next Exam + Syllabus Progress Row */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="hub-card p-5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#EAF2FF] px-2.5 py-1 text-[11px] font-semibold text-[#536DD8]">
                  <Clock className="h-3.5 w-3.5" />
                  Next Theory Exam
                </span>
                <span className="text-xs font-semibold text-[#697386]">
                  {nextExam?.code}
                </span>
              </div>
              <div className="mt-3 text-lg font-bold text-[#20283A] dark:text-white truncate">
                {nextExam?.paperName ?? 'All Exams Complete'}
              </div>
              <div className="mt-1 text-xs text-[#697386] dark:text-slate-400">
                {nextExam?.date} ({nextExam?.day}) · 10:00 AM – 12:00 PM IST
              </div>
              {countdown && (
                <div className="mt-4 grid grid-cols-4 gap-2 text-center">
                  {[
                    { l: 'Days', v: countdown.days },
                    { l: 'Hrs', v: countdown.hours },
                    { l: 'Min', v: countdown.minutes },
                    { l: 'Sec', v: countdown.seconds },
                  ].map((u) => (
                    <div
                      key={u.l}
                      className="rounded-xl bg-[#F6F7FB] py-2 dark:bg-slate-800"
                    >
                      <div className="text-base font-bold tabular-nums text-[#20283A] dark:text-white">
                        {String(u.v).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] text-[#697386]">{u.l}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="hub-card p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#E8F6EF] px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Overall Progress
                  </span>
                  <span className="text-xs font-semibold text-[#20283A] dark:text-white">
                    {completionPct}%
                  </span>
                </div>
                <div className="mt-3 text-2xl font-bold text-[#20283A] dark:text-white">
                  {masteredCount} <span className="text-sm font-normal text-[#697386]">/ {totalTopics} topics</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#F6F7FB] dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all"
                    style={{ width: `${completionPct}%` }}
                  />
                </div>
              </div>
              {masteredCount === 0 ? (
                <div className="mt-4 flex items-center justify-between rounded-xl bg-[#F6F7FB] p-2.5 text-xs dark:bg-slate-800">
                  <span className="text-[#697386]">Start with your first topic</span>
                  <button
                    onClick={() => setActiveSection('subjects')}
                    className="font-semibold text-[#536DD8] hover:underline"
                  >
                    Open Syllabus →
                  </button>
                </div>
              ) : (
                <div className="mt-4 flex justify-between text-xs text-[#697386]">
                  <span>{state.quizScores.length} quizzes taken</span>
                  <span>{openMistakes} mistakes to review</span>
                </div>
              )}
            </div>
          </div>

          {/* Today's Study Plan */}
          <div className="hub-card p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#20283A] dark:text-white">
                Today&apos;s Study Plan
              </h3>
              <span className="text-xs text-[#697386]">Recommended next topics</span>
            </div>
            <div className="divide-y divide-[#E8EAF0] dark:divide-slate-800">
              {todaysTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
                >
                  <div>
                    <div className="text-sm font-medium text-[#20283A] dark:text-slate-100">
                      {topic.title}
                    </div>
                    <div className="text-xs text-[#697386]">
                      ~{topic.estimatedMinutes} min · {topic.subjectId.toUpperCase()}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedSubjectId(topic.subjectId);
                      setActiveSection('subjects');
                    }}
                    className="rounded-lg bg-[#EAF2FF] px-3 py-1.5 text-xs font-semibold text-[#536DD8] hover:bg-[#dce9ff]"
                  >
                    Study
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Discrepancy Notice */}
          {unresolvedDiscrepancies.length > 0 && (
            <div className="rounded-2xl border border-amber-200 bg-[#FFF0E7] p-4 text-xs text-amber-900">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                <div>
                  <span className="font-semibold">
                    {unresolvedDiscrepancies.length} Timetable/Syllabus Discrepancies Flagged:
                  </span>{' '}
                  DSC-303 (DLD) missing from theory date sheet · LPP separate exam vs. DSC-301 Unit
                  5 · DSL-302 printed as &quot;DLT Lab&quot;.
                </div>
              </div>
            </div>
          )}

          {/* Subject-wise Progress */}
          <div className="hub-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#20283A] dark:text-white">
                Subject-wise Progress
              </h3>
              <button
                onClick={() => setActiveSection('subjects')}
                className="text-xs font-semibold text-[#536DD8] hover:underline"
              >
                All Subjects →
              </button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {SUBJECTS.map((subj) => {
                const topics = subj.units.flatMap((u) => u.topics);
                const done = topics.filter(
                  (t) =>
                    state.topicStates[t.id] === 'mastered' ||
                    state.topicStates[t.id] === 'proficient'
                ).length;
                const pct = topics.length > 0 ? Math.round((done / topics.length) * 100) : 0;

                return (
                  <button
                    key={subj.id}
                    onClick={() => {
                      setSelectedSubjectId(subj.id);
                      setActiveSection('subjects');
                    }}
                    className="rounded-xl border border-[#E8EAF0] bg-[#F6F7FB]/60 p-3.5 text-left transition hover:border-[#536DD8]/50 hover:bg-white dark:border-slate-800 dark:bg-slate-950"
                  >
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-[#536DD8]">{subj.code}</span>
                      <span className="text-[#697386]">{subj.examDate ?? 'Unconfirmed'}</span>
                    </div>
                    <div className="mt-1 text-sm font-semibold text-[#20283A] dark:text-slate-100 truncate">
                      {subj.name}
                    </div>
                    <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#697386]">
                      <span>
                        {done}/{topics.length} topics
                      </span>
                      <span>{pct}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-[#E8EAF0] dark:bg-slate-800">
                      <div
                        className="h-full rounded-full bg-[#536DD8]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right 4 Columns */}
        <div className="min-w-0 space-y-6 lg:col-span-4">
          {/* Compact December 2026 Calendar */}
          <div className="hub-card p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="flex items-center gap-1.5 text-sm font-bold text-[#20283A] dark:text-white">
                <CalendarIcon className="h-4 w-4 text-[#536DD8]" />
                December 2026
              </h3>
              <button
                onClick={() => setActiveSection('datesheets')}
                className="text-xs font-semibold text-[#536DD8] hover:underline"
              >
                Date Sheet
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-[#697386]">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                <div key={d} className="py-1">
                  {d}
                </div>
              ))}
            </div>
            <div className="mt-1 grid grid-cols-7 gap-1 text-center text-xs">
              <div />
              <div />
              {DEC_2026_DAYS.map((day) => {
                const isTheory = THEORY_DAYS.has(day);
                const isPrac = PRACTICAL_DAYS.has(day);
                return (
                  <div
                    key={day}
                    className={`flex h-7 w-7 mx-auto items-center justify-center rounded-lg font-medium ${
                      isTheory
                        ? 'bg-[#536DD8] text-white font-bold'
                        : isPrac
                        ? 'bg-emerald-500 text-white font-bold'
                        : 'text-[#20283A] dark:text-slate-300'
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
            <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-[#697386]">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#536DD8]" /> Theory (10 AM)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Practical (9 AM)
              </span>
            </div>
          </div>

          {/* Upcoming Exams & Practicals */}
          <div className="hub-card p-5">
            <h3 className="mb-3 text-sm font-bold text-[#20283A] dark:text-white">
              Upcoming Exams
            </h3>
            <div className="space-y-2.5">
              {THEORY_EXAMS.slice(0, 3).map((ex) => (
                <button
                  key={ex.id}
                  onClick={() => setActiveSection('datesheets')}
                  className="flex w-full items-center justify-between rounded-xl bg-[#F6F7FB] p-3 text-left hover:bg-[#EAF2FF]/60 dark:bg-slate-800"
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="h-4 w-4 text-[#536DD8]" />
                    <div>
                      <div className="text-xs font-semibold text-[#20283A] dark:text-white">
                        {ex.paperName}
                      </div>
                      <div className="text-[11px] text-[#697386]">
                        {ex.date} · 10:00 AM
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-[#697386]" />
                </button>
              ))}
              {PRACTICAL_EXAMS.slice(0, 1).map((pr) => (
                <button
                  key={pr.id}
                  onClick={() => setActiveSection('practicals')}
                  className="flex w-full items-center justify-between rounded-xl bg-[#E8F6EF]/60 p-3 text-left hover:bg-[#E8F6EF] dark:bg-slate-800"
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="h-4 w-4 text-emerald-600" />
                    <div>
                      <div className="text-xs font-semibold text-[#20283A] dark:text-white">
                        {pr.paperName} ({pr.code})
                      </div>
                      <div className="text-[11px] text-[#697386]">
                        {pr.date} · 9:00 AM onwards
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-[#697386]" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Tools */}
          <div className="hub-card p-5 bg-[#F0EEFF]/60">
            <h3 className="text-sm font-bold text-[#20283A] dark:text-white">
              Interactive Tools
            </h3>
            <p className="mt-1 text-xs text-[#697386]">
              Launch the LP Interactive Workbench or ask the topic-aware AI Tutor.
            </p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => setActiveSection('workbench')}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#536DD8] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#445bc0]"
              >
                <Cpu className="h-3.5 w-3.5" /> LP Workbench
              </button>
              <button
                onClick={() => setActiveSection('tutor')}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#E8EAF0] bg-white px-3 py-1.5 text-xs font-semibold text-[#20283A] hover:bg-[#F6F7FB]"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#536DD8]" /> AI Tutor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
