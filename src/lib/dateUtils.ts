import { ExamEvent } from '@/types/academic';

/**
 * Parse an ExamEvent date + startTime in Asia/Kolkata (+05:30) to epoch ms.
 */
export function getExamTimestampIst(exam: Pick<ExamEvent, 'date' | 'startTime'>): number {
  const iso = `${exam.date}T${exam.startTime}:00+05:30`;
  return new Date(iso).getTime();
}

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
  totalMs: number;
}

export function getCountdownParts(targetMs: number, nowMs: number = Date.now()): CountdownParts {
  const diff = targetMs - nowMs;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true, totalMs: diff };
  }
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, isPast: false, totalMs: diff };
}

export function getNextExam(exams: ExamEvent[], nowMs: number = Date.now()): ExamEvent | null {
  const upcoming = exams
    .map((e) => ({ exam: e, ts: getExamTimestampIst(e) }))
    .filter((item) => item.ts > nowMs)
    .sort((a, b) => a.ts - b.ts);
  return upcoming.length > 0 ? upcoming[0].exam : null;
}

/**
 * Generate an .ics calendar file string for theory and practical exams.
 * Practicals have no invented end time (start at 09:00 IST, 1h placeholder or DTSTART only).
 */
export function generateExamsIcs(exams: ExamEvent[]): string {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//JMI Study Hub//CSE-DS Sem 3//EN',
    'CALSCALE:GREGORIAN',
  ];

  for (const exam of exams) {
    const dtDate = exam.date.replace(/-/g, '');
    const startHhMm = exam.startTime.replace(':', '') + '00';
    lines.push('BEGIN:VEVENT');
    lines.push(`UID:${exam.id}@jmi-study-hub`);
    lines.push(`DTSTART;TZID=Asia/Kolkata:${dtDate}T${startHhMm}`);
    if (exam.endTime) {
      const endHhMm = exam.endTime.replace(':', '') + '00';
      lines.push(`DTEND;TZID=Asia/Kolkata:${dtDate}T${endHhMm}`);
    }
    lines.push(`SUMMARY:${exam.paperName} (${exam.code})`);
    if (exam.venue) {
      lines.push(`LOCATION:${exam.venue}`);
    }
    if (exam.discrepancyNote) {
      lines.push(`DESCRIPTION:${exam.discrepancyNote}`);
    }
    lines.push('END:VEVENT');
  }

  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}
