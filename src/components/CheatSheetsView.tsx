'use client';

import React, { useState, useMemo } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  FileText,
  Flame,
  HelpCircle,
  Info,
  Printer,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { MASTER_CHEATSHEETS, ImportedSubjectCheatSheet, ImportedUnitCheatSheet } from '@/data/master_cheatsheets';
import { MathText } from '@/components/MathText';

export type RevisionViewMode = '60-sec' | '5-min' | 'complete';

export function CheatSheetsView() {
  const { setSelectedSubjectId, setSelectedTopicId, setActiveSection } = useApp();

  const [activeSubjectId, setActiveSubjectId] = useState<string>(MASTER_CHEATSHEETS[0].subjectId);
  const [activeUnitNumber, setActiveUnitNumber] = useState<number | 'all'>('all');
  const [revisionMode, setRevisionMode] = useState<RevisionViewMode>('complete');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedConceptIdx, setExpandedConceptIdx] = useState<string | null>(null);

  const currentSubject: ImportedSubjectCheatSheet = useMemo(() => {
    return (
      MASTER_CHEATSHEETS.find((s) => s.subjectId === activeSubjectId) ||
      MASTER_CHEATSHEETS[0]
    );
  }, [activeSubjectId]);

  // Filter units
  const displayedUnits: ImportedUnitCheatSheet[] = useMemo(() => {
    let units = currentSubject.units;
    if (activeUnitNumber !== 'all') {
      units = units.filter((u) => u.unitNumber === activeUnitNumber);
    }
    if (!searchQuery.trim()) return units;

    const q = searchQuery.toLowerCase();
    return units
      .map((u) => {
        const matchesSummary = u.sixtySecSummary.some((s) => s.toLowerCase().includes(q));
        const matchingConcepts = u.coreConcepts.filter(
          (c) => c.title.toLowerCase().includes(q) || c.content.toLowerCase().includes(q)
        );
        const matchesFormulas = u.formulaBlocks.some(
          (f) => f.name.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q)
        );
        const matchesStatements = u.coverageStatements.some((s) => s.toLowerCase().includes(q));

        if (matchesSummary || matchingConcepts.length > 0 || matchesFormulas || matchesStatements) {
          return {
            ...u,
            coreConcepts: matchingConcepts.length > 0 ? matchingConcepts : u.coreConcepts,
          };
        }
        return null;
      })
      .filter((u): u is ImportedUnitCheatSheet => u !== null);
  }, [currentSubject, activeUnitNumber, searchQuery]);

  const handlePrint = () => {
    window.print();
  };

  const handleNavigateToPractice = (subjectId: string, unitId: string) => {
    setSelectedSubjectId(subjectId);
    setSelectedTopicId(`${unitId}-t1`);
    setActiveSection('subjects');
  };

  const handleNavigateToTutor = (subjectId: string, unitId: string) => {
    setSelectedSubjectId(subjectId);
    setSelectedTopicId(`${unitId}-t1`);
    setActiveSection('tutor');
  };

  return (
    <div className="space-y-6 print:space-y-4">
      {/* Printable Header */}
      <div className="hidden print:block border-b pb-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-900">
          JMI StudyHub — {currentSubject.subjectTitle}
        </h1>
        <p className="text-sm text-gray-600">
          Authoritative Master Cheat Sheet • Semester III • Source: {currentSubject.sourceStatus}
        </p>
      </div>

      {/* Top Header / Action Bar */}
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
            Authoritative, pre-prepared master revision sheets with complete mathematical KaTeX rendering.
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
              Complete Sheet
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
        {MASTER_CHEATSHEETS.map((sub) => {
          const isActive = sub.subjectId === activeSubjectId;
          return (
            <button
              key={sub.subjectId}
              onClick={() => {
                setActiveSubjectId(sub.subjectId);
                setActiveUnitNumber('all');
                setSearchQuery('');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
            >
              <span className="font-bold opacity-80 mr-1.5">{sub.subjectCode}</span>
              {sub.subjectTitle.split('—')[0].trim()}
            </button>
          );
        })}
      </div>

      {/* Source Status & Verification Caveat Banner */}
      <div className="p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-300 flex items-start gap-2.5 print:hidden">
        <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
        <div className="leading-relaxed">
          <strong>Academic Provenance:</strong> {currentSubject.sourceStatus}
          {currentSubject.subjectId === 'lpp' && (
            <span className="block mt-0.5 text-purple-700 dark:text-purple-300">
              * Dedicated NPTEL 7-lecture / 5-unit extended track (Rajat Mittal, IIT Kanpur). Cross-linked with JMI Discrete Unit 5.
            </span>
          )}
          {(currentSubject.subjectId === 'asb-301' || currentSubject.subjectId === 'asm-301') && (
            <span className="block mt-0.5 text-amber-700 dark:text-amber-400">
              * Note: Mathematics III and UHV detailed unit outlines are cross-branch JMI references pending CSE-DS departmental confirmation.
            </span>
          )}
        </div>
      </div>

      {/* Unit Sub-Filter & Global Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 print:hidden">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveUnitNumber('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeUnitNumber === 'all'
                ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
            }`}
          >
            All Units ({currentSubject.units.length})
          </button>
          {currentSubject.units.map((u) => (
            <button
              key={u.unitNumber}
              onClick={() => setActiveUnitNumber(u.unitNumber)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeUnitNumber === u.unitNumber
                  ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
              }`}
            >
              Unit {u.unitNumber}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search concept, theorem, formula..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Units Content Stream */}
      <div className="space-y-8">
        {displayedUnits.map((unit) => (
          <div
            key={unit.unitNumber}
            className="bg-white dark:bg-gray-800/90 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden print:border-none print:shadow-none"
          >
            {/* Unit Header */}
            <div className="bg-[#FAFBFD] dark:bg-gray-750 p-4 sm:p-5 border-b border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
                    UNIT {unit.unitNumber}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-[#20283A] dark:text-white">
                    {unit.unitTitle}
                  </h2>
                </div>
                <p className="text-xs text-[#697386] dark:text-gray-400 mt-1">
                  {unit.coverageStatements.length} verified syllabus coverage statements • Source: {unit.sourceStatus}
                </p>
              </div>

              {/* Navigation Shortcuts */}
              <div className="flex items-center gap-2 print:hidden">
                <button
                  type="button"
                  onClick={() => handleNavigateToPractice(unit.subjectId, unit.unitId)}
                  className="px-2.5 py-1 text-xs font-semibold text-sky-600 hover:bg-sky-50 dark:hover:bg-sky-950/40 rounded-lg transition"
                >
                  Practice →
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigateToTutor(unit.subjectId, unit.unitId)}
                  className="px-2.5 py-1 text-xs font-semibold text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/40 rounded-lg transition"
                >
                  Ask AI →
                </button>
              </div>
            </div>

            {/* 60-Second Flash Mode */}
            {revisionMode === '60-sec' && (
              <div className="p-4 sm:p-5 bg-amber-50/40 dark:bg-amber-950/20 border-b border-amber-100 dark:border-amber-900/30">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-3">
                  <Flame className="w-4 h-4 text-amber-600" />
                  60-Second High-Yield Revision Bullets
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {unit.sixtySecSummary.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 bg-white dark:bg-gray-800 p-3 rounded-xl border border-amber-200/50 dark:border-amber-900/40 text-xs text-gray-800 dark:text-gray-200"
                    >
                      <span className="text-amber-500 font-bold">•</span>
                      <MathText text={bullet} className="leading-relaxed" />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 5-Minute and Complete Mode: Structured Knowledge Sections */}
            {(revisionMode === '5-min' || revisionMode === 'complete') && (
              <div className="p-4 sm:p-5 space-y-5">
                {/* Formulas & Equation Highlights */}
                {unit.formulaBlocks.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                      Formulas &amp; Mathematical Statements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {unit.formulaBlocks.map((fb, fi) => (
                        <div
                          key={fi}
                          className="p-3.5 rounded-xl bg-[#F8F9FD] dark:bg-gray-700/50 border border-gray-200/70 dark:border-gray-600 space-y-1.5"
                        >
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            {fb.name}
                          </span>
                          <div className="bg-white dark:bg-gray-800 p-2.5 rounded-lg border border-gray-100 dark:border-gray-700 text-center text-sm sm:text-base font-semibold overflow-x-auto">
                            <MathText text={`$$${fb.formula}$$`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Concepts Breakdown */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Core Concepts &amp; Examination Notes
                  </h3>
                  <div className="space-y-2.5">
                    {unit.coreConcepts.map((concept, ci) => {
                      const conceptKey = `${unit.unitNumber}-${ci}`;
                      const isExpanded =
                        revisionMode === 'complete' || expandedConceptIdx === conceptKey;

                      return (
                        <div
                          key={ci}
                          className="rounded-xl border border-gray-100 dark:border-gray-700/80 bg-gray-50/60 dark:bg-gray-750/30 overflow-hidden"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedConceptIdx(isExpanded ? null : conceptKey)
                            }
                            className="w-full flex items-center justify-between p-3 text-left font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100 hover:bg-gray-100/50 dark:hover:bg-gray-700/40 transition"
                          >
                            <span>{concept.title}</span>
                            {revisionMode === '5-min' && (
                              <ChevronDown
                                className={`w-4 h-4 text-slate-400 transition-transform ${
                                  isExpanded ? 'rotate-180' : ''
                                }`}
                              />
                            )}
                          </button>

                          {isExpanded && (
                            <div className="p-3.5 pt-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed border-t border-gray-100/80 dark:border-gray-700/50">
                              <MathText text={concept.content} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Common Exam Traps */}
                {unit.examTraps.length > 0 && (
                  <div className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/30 text-xs text-rose-900 dark:text-rose-200 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-rose-800 dark:text-rose-400">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      Common Exam Traps &amp; Pitfalls
                    </div>
                    {unit.examTraps.map((trap, ti) => (
                      <p key={ti} className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">•</span>
                        <MathText text={trap} />
                      </p>
                    ))}
                  </div>
                )}

                {/* Syllabus Statements Accordion (CSV Matrix Audit) */}
                <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                  <details className="group">
                    <summary className="cursor-pointer text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1">
                      <ChevronRight className="w-3.5 h-3.5 group-open:rotate-90 transition-transform" />
                      <span>
                        Verified Syllabus Coverage Statements ({unit.coverageStatements.length})
                      </span>
                    </summary>
                    <ul className="mt-2 space-y-1 pl-4 text-[11px] text-slate-600 dark:text-slate-400">
                      {unit.coverageStatements.map((stmt, si) => (
                        <li key={si} className="list-disc leading-relaxed">
                          {stmt}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
