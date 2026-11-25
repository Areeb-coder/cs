'use client';

import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  Filter,
  Flame,
  HelpCircle,
  Lightbulb,
  Printer,
  Search,
  Sparkles,
  Zap,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { SUBJECT_CHEATSHEETS } from '@/data/cheatsheets';
import { MathText } from '@/components/MathText';
import { CheatSheetRevisionLevel, SubjectCheatSheet, TopicCheatSheet } from '@/types/cheatsheet';

export function CheatSheetsView() {
  const { setSelectedSubjectId, setSelectedTopicId, setActiveSection } = useApp();

  const [activeSubjectId, setActiveSubjectId] = useState<string>(SUBJECT_CHEATSHEETS[0].subjectId);
  const [activeUnitId, setActiveUnitId] = useState<string>('all');
  const [revisionMode, setRevisionMode] = useState<CheatSheetRevisionLevel>('complete');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);

  const currentSubject: SubjectCheatSheet = useMemo(() => {
    return (
      SUBJECT_CHEATSHEETS.find((s) => s.subjectId === activeSubjectId) ||
      SUBJECT_CHEATSHEETS[0]
    );
  }, [activeSubjectId]);

  // Filter topics based on active unit and search query
  const displayedUnits = useMemo(() => {
    let units = currentSubject.units;
    if (activeUnitId !== 'all') {
      units = units.filter((u) => u.unitId === activeUnitId);
    }
    if (!searchQuery.trim()) return units;

    const q = searchQuery.toLowerCase();
    return units
      .map((u) => {
        const matchingTopics = u.topics.filter(
          (t) =>
            t.topicTitle.toLowerCase().includes(q) ||
            t.sixtySecBullets.some((b) => b.toLowerCase().includes(q)) ||
            (t.formulaCards &&
              t.formulaCards.some(
                (f) =>
                  f.name.toLowerCase().includes(q) ||
                  f.formula.toLowerCase().includes(q)
              ))
        );
        return { ...u, topics: matchingTopics };
      })
      .filter((u) => u.topics.length > 0);
  }, [currentSubject, activeUnitId, searchQuery]);

  const handlePrint = () => {
    window.print();
  };

  const handleNavigateToPractice = (topic: TopicCheatSheet) => {
    setSelectedSubjectId(topic.subjectId);
    setSelectedTopicId(topic.topicId);
    setActiveSection('subjects');
  };

  const handleNavigateToPyqs = (topic: TopicCheatSheet) => {
    setSelectedSubjectId(topic.subjectId);
    setActiveSection('pyqs');
  };

  const handleNavigateToTutor = (topic: TopicCheatSheet) => {
    setSelectedSubjectId(topic.subjectId);
    setSelectedTopicId(topic.topicId);
    setActiveSection('tutor');
  };

  return (
    <div className="space-y-6 print:space-y-4">
      {/* Printable Title Block (Only visible on print) */}
      <div className="hidden print:block border-b pb-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-900">
          JMI StudyHub — {currentSubject.subjectName} ({currentSubject.subjectCode})
        </h1>
        <p className="text-sm text-gray-600">
          Last-Minute Revision Cheat Sheet • 100% Verified Syllabus Coverage
        </p>
      </div>

      {/* Top Header / Actions Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-gray-800/90 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
              <Zap className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-bold text-[#20283A] dark:text-white">
              Formula &amp; Cheat Sheets
            </h1>
          </div>
          <p className="text-sm text-[#697386] dark:text-gray-400 mt-1">
            Last-minute revision system covering 100% of the verified JMI Semester 3 syllabus.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Revision Mode Selector */}
          <div className="flex items-center bg-[#F6F7FB] dark:bg-gray-700/60 p-1 rounded-xl border border-gray-200 dark:border-gray-600">
            <button
              onClick={() => setRevisionMode('60-sec')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                revisionMode === '60-sec'
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              60-Second
            </button>
            <button
              onClick={() => setRevisionMode('5-min')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                revisionMode === '5-min'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              5-Minute
            </button>
            <button
              onClick={() => setRevisionMode('complete')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                revisionMode === 'complete'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Complete Unit
            </button>
          </div>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors"
          >
            <Printer className="w-4 h-4 text-gray-500" />
            Print / PDF
          </button>
        </div>
      </div>

      {/* Subject Navigation Tabs */}
      <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-none print:hidden">
        {SUBJECT_CHEATSHEETS.map((sub) => {
          const isActive = sub.subjectId === activeSubjectId;
          return (
            <button
              key={sub.subjectId}
              onClick={() => {
                setActiveSubjectId(sub.subjectId);
                setActiveUnitId('all');
                setSearchQuery('');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
            >
              <span className="font-bold opacity-80 mr-1.5">{sub.subjectCode}</span>
              {sub.shortName}
            </button>
          );
        })}
      </div>

      {/* Unit Sub-Filter & Global Topic Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 print:hidden">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveUnitId('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeUnitId === 'all'
                ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
            }`}
          >
            All Units ({currentSubject.units.length})
          </button>
          {currentSubject.units.map((u) => (
            <button
              key={u.unitId}
              onClick={() => setActiveUnitId(u.unitId)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeUnitId === u.unitId
                  ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
              }`}
            >
              Unit {u.unitNumber} ({u.topics.length})
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search formula, theorem, topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="space-y-8">
        {displayedUnits.map((unit) => (
          <div
            key={unit.unitId}
            className="bg-white dark:bg-gray-800/90 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden print:border-none print:shadow-none"
          >
            {/* Unit Header */}
            <div className="bg-[#FAFBFD] dark:bg-gray-750 p-4 sm:p-5 border-b border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
                    UNIT {unit.unitNumber}
                  </span>
                  <h2 className="text-lg font-bold text-[#20283A] dark:text-white">
                    {unit.unitTitle}
                  </h2>
                </div>
                <p className="text-xs text-[#697386] dark:text-gray-400 mt-1">
                  {unit.topics.length} canonical topics • Estimated revision: {unit.estimatedMinutes[revisionMode === '60-sec' ? 'sixtySec' : revisionMode === '5-min' ? 'fiveMin' : 'complete']} mins
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  100% Verified Coverage
                </span>
              </div>
            </div>

            {/* 60-Second Flash Summary Banner (When 60-sec mode selected) */}
            {revisionMode === '60-sec' && (
              <div className="p-4 sm:p-5 bg-amber-50/50 dark:bg-amber-950/20 border-b border-amber-100 dark:border-amber-900/30">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-2">
                  <Flame className="w-4 h-4 text-amber-600" />
                  60-Second Ultra-Compressed High-Yield Highlights
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-amber-900 dark:text-amber-200">
                  {unit.sixtySecSummary.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white/70 dark:bg-gray-800/80 p-2.5 rounded-xl border border-amber-200/50 dark:border-amber-900/40">
                      <span className="text-amber-600 font-bold">•</span>
                      <MathText text={bullet} className="leading-relaxed" />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Topics Revision List */}
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {unit.topics.map((topic) => {
                const isExpanded = expandedTopicId === topic.topicId;

                return (
                  <div
                    key={topic.topicId}
                    className="p-4 sm:p-5 hover:bg-gray-50/40 dark:hover:bg-gray-750/30 transition-colors"
                  >
                    {/* Topic Header Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 p-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 text-xs font-bold">
                          {topic.topicId.split('-').pop()}
                        </span>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                            {topic.topicTitle}
                          </h3>
                        </div>
                      </div>

                      {/* Cross-linking shortcuts */}
                      <div className="flex items-center gap-2 print:hidden">
                        <button
                          onClick={() => handleNavigateToPractice(topic)}
                          className="px-2.5 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 rounded-lg transition-colors flex items-center gap-1"
                          title="Practice topic questions"
                        >
                          Practice
                          <ArrowRight className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleNavigateToTutor(topic)}
                          className="px-2.5 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/40 rounded-lg transition-colors flex items-center gap-1"
                          title="Ask AI Study Assistant about this topic"
                        >
                          <Sparkles className="w-3 h-3" />
                          AI Tutor
                        </button>
                      </div>
                    </div>

                    {/* Mode Specific Body Rendering */}
                    <div className="mt-3.5 space-y-3">
                      {/* 60-Sec mode bullets */}
                      {revisionMode === '60-sec' && (
                        <div className="bg-amber-50/40 dark:bg-amber-950/10 p-3 rounded-xl border border-amber-100/60 dark:border-amber-900/20 text-xs space-y-1.5">
                          {topic.sixtySecBullets.map((b, i) => (
                            <div key={i} className="flex items-start gap-2 text-gray-800 dark:text-gray-200">
                              <span className="text-amber-500 font-bold">•</span>
                              <MathText text={b} className="leading-relaxed" />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* 5-Min and Complete Mode: Core Concepts & Formulas */}
                      {(revisionMode === '5-min' || revisionMode === 'complete') && (
                        <>
                          {/* Core Concepts */}
                          <div className="space-y-1.5">
                            {topic.coreConcepts.map((c, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                              >
                                <span className="text-indigo-500 font-bold">•</span>
                                <MathText text={c} className="leading-relaxed" />
                              </div>
                            ))}
                          </div>

                          {/* Formula Cards Grid (If formulas exist) */}
                          {topic.formulaCards && topic.formulaCards.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                              {topic.formulaCards.map((fc) => (
                                <div
                                  key={fc.id}
                                  className="p-3.5 rounded-xl bg-[#F8F9FD] dark:bg-gray-700/50 border border-gray-200/70 dark:border-gray-600 space-y-2"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300">
                                      {fc.name}
                                    </span>
                                    {fc.whereUsed && (
                                      <span className="text-[10px] text-gray-500 dark:text-gray-400 italic">
                                        {fc.whereUsed}
                                      </span>
                                    )}
                                  </div>

                                  {/* Rendered Math Formula Block */}
                                  <div className="bg-white dark:bg-gray-800 p-2.5 rounded-lg border border-gray-100 dark:border-gray-700 text-center text-sm sm:text-base font-semibold overflow-x-auto">
                                    <MathText text={`$$${fc.formula}$$`} />
                                  </div>

                                  {fc.conditions && (
                                    <p className="text-[11px] text-gray-600 dark:text-gray-300">
                                      <strong className="text-gray-800 dark:text-gray-200">Conditions:</strong>{' '}
                                      <MathText text={fc.conditions} />
                                    </p>
                                  )}

                                  {fc.commonMistake && (
                                    <div className="flex items-start gap-1.5 text-[11px] text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/20 p-2 rounded-lg">
                                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                      <span>
                                        <strong>Common Trap:</strong> {fc.commonMistake}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Definitions Block (If applicable) */}
                          {topic.definitions && topic.definitions.length > 0 && (
                            <div className="pt-1 grid grid-cols-1 md:grid-cols-2 gap-2">
                              {topic.definitions.map((def, idx) => (
                                <div
                                  key={idx}
                                  className="text-xs p-2.5 rounded-lg bg-gray-50 dark:bg-gray-750 border border-gray-100 dark:border-gray-700"
                                >
                                  <span className="font-bold text-gray-900 dark:text-white">
                                    {def.term}:
                                  </span>{' '}
                                  <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {def.meaning}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Exam Traps (If complete mode) */}
                          {revisionMode === 'complete' && topic.examTraps && topic.examTraps.length > 0 && (
                            <div className="p-2.5 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                              <div className="space-y-1">
                                <span className="font-bold">Exam Trap to Avoid:</span>
                                {topic.examTraps.map((trap, ti) => (
                                  <p key={ti}>• {trap}</p>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
