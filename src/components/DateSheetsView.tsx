'use client';

import React from 'react';
import { AlertTriangle, Calendar, Download, Printer } from 'lucide-react';
import { PRACTICAL_EXAMS, THEORY_EXAMS } from '@/data/schedule';
import { generateExamsIcs } from '@/lib/dateUtils';

export function DateSheetsView() {
  const handleDownloadIcs = () => {
    const ics = generateExamsIcs([...THEORY_EXAMS, ...PRACTICAL_EXAMS]);
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jmi-cse-ds-sem3-exams-2026.ics';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Examination Date Sheets
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            B.Tech CSE (Data Science) · Semester 3 · December 2026 (Asia/Kolkata)
          </p>
        </div>
        <div className="flex flex-wrap gap-2 print:hidden">
          <button
            onClick={handleDownloadIcs}
            className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-700"
          >
            <Download className="h-3.5 w-3.5" />
            Export .ics Calendar
          </button>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            <Printer className="h-3.5 w-3.5" />
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* Theory Date Sheet */}
      <section className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-base font-semibold text-slate-900 dark:text-slate-100">
            <Calendar className="h-4 w-4 text-sky-600" />
            Theory Examination Schedule (10:00 AM – 12:00 PM)
          </h2>
          <span className="text-xs text-slate-500">6 Papers</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase text-slate-500 dark:border-slate-800">
                <th className="py-2 pr-4">Date</th>
                <th className="py-2 pr-4">Day</th>
                <th className="py-2 pr-4">Code</th>
                <th className="py-2 pr-4">Paper</th>
                <th className="py-2">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {THEORY_EXAMS.map((exam) => (
                <tr key={exam.id}>
                  <td className="py-2.5 pr-4 font-medium text-slate-900 dark:text-slate-100">
                    {exam.date}
                  </td>
                  <td className="py-2.5 pr-4 text-slate-600 dark:text-slate-300">{exam.day}</td>
                  <td className="py-2.5 pr-4 text-xs font-semibold text-sky-700 dark:text-sky-400">
                    {exam.code}
                  </td>
                  <td className="py-2.5 pr-4 text-slate-800 dark:text-slate-200">
                    {exam.paperName}
                    {exam.discrepancyNote && (
                      <div className="mt-0.5 flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
                        <AlertTriangle className="h-3 w-3" />
                        {exam.discrepancyNote}
                      </div>
                    )}
                  </td>
                  <td className="py-2.5 text-slate-600 dark:text-slate-300">
                    {exam.startTime} AM – {exam.endTime} PM
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Practical Date Sheet */}
      <section className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-base font-semibold text-slate-900 dark:text-slate-100">
            <Calendar className="h-4 w-4 text-emerald-600" />
            Practical Examination Schedule (9:00 AM onwards · Concerned Lab)
          </h2>
          <span className="text-xs text-slate-500">4 Labs (CSE-DS 3rd Sem)</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase text-slate-500 dark:border-slate-800">
                <th className="py-2 pr-4">Date</th>
                <th className="py-2 pr-4">Day</th>
                <th className="py-2 pr-4">Code</th>
                <th className="py-2 pr-4">Practical Paper</th>
                <th className="py-2">Venue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {PRACTICAL_EXAMS.map((exam) => (
                <tr key={exam.id}>
                  <td className="py-2.5 pr-4 font-medium text-slate-900 dark:text-slate-100">
                    {exam.date}
                  </td>
                  <td className="py-2.5 pr-4 text-slate-600 dark:text-slate-300">{exam.day}</td>
                  <td className="py-2.5 pr-4 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    {exam.code}
                  </td>
                  <td className="py-2.5 pr-4 text-slate-800 dark:text-slate-200">
                    {exam.paperName}
                    {exam.discrepancyNote && (
                      <div className="mt-0.5 flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
                        <AlertTriangle className="h-3 w-3" />
                        {exam.discrepancyNote}
                      </div>
                    )}
                  </td>
                  <td className="py-2.5 text-slate-600 dark:text-slate-300">{exam.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
