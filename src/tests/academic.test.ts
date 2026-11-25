import { describe, expect, it } from 'vitest';
import { LAB_COURSES, LPP_LECTURES, SUBJECTS } from '../data/curriculum';
import { PRACTICAL_EXAMS, THEORY_EXAMS } from '../data/schedule';
import { generateExamsIcs, getCountdownParts, getExamTimestampIst } from '../lib/dateUtils';

describe('JMI CSE-DS Semester 3 Academic Integrity', () => {
  it('includes all 6 official theory subjects plus provisional LPP track', () => {
    const codes = SUBJECTS.map((s) => s.code);
    expect(codes).toContain('ASM-301');
    expect(codes).toContain('ASB-301');
    expect(codes).toContain('DSC-301');
    expect(codes).toContain('DSC-302');
    expect(codes).toContain('DSC-303');
    expect(codes).toContain('DSC-304');
    expect(SUBJECTS.some((s) => s.id === 'lpp')).toBe(true);
  });

  it('includes all 4 official lab courses', () => {
    expect(LAB_COURSES.map((l) => l.code)).toEqual([
      'DSL-301',
      'DSL-302',
      'DSL-303',
      'DSL-304',
    ]);
  });

  it('keeps exactly 7 separate NPTEL LPP lectures mapped into 5 portal units', () => {
    expect(LPP_LECTURES).toHaveLength(7);
    expect(LPP_LECTURES[5].pdfFileName).toBe('Week 8 Lecture Notes_1.pdf');
    expect(LPP_LECTURES[6].pdfFileName).toBe('Week 8 Lecture Notes_2.pdf');
    const lppSubject = SUBJECTS.find((s) => s.id === 'lpp');
    expect(lppSubject?.units).toHaveLength(5);
  });

  it('marks Maths III and UHV as detailed_syllabus_required without fabricated units', () => {
    const maths = SUBJECTS.find((s) => s.id === 'asb-301');
    const uhv = SUBJECTS.find((s) => s.id === 'asm-301');
    expect(maths?.syllabusStatus).toBe('detailed_syllabus_required');
    expect(maths?.units).toHaveLength(0);
    expect(uhv?.syllabusStatus).toBe('detailed_syllabus_required');
    expect(uhv?.units).toHaveLength(0);
  });

  it('marks DSC-303 Digital Logic Design exam date as unconfirmed', () => {
    const dld = SUBJECTS.find((s) => s.id === 'dsc-303');
    expect(dld?.examStatus).toBe('unconfirmed');
    expect(dld?.examDate).toBeUndefined();
  });
});

describe('Date/Time & Calendar Export', () => {
  it('has 6 theory exams at 10:00 AM IST and 4 practical exams at 09:00 AM IST', () => {
    expect(THEORY_EXAMS).toHaveLength(6);
    expect(THEORY_EXAMS.every((e) => e.startTime === '10:00')).toBe(true);
    expect(PRACTICAL_EXAMS).toHaveLength(4);
    expect(PRACTICAL_EXAMS.every((e) => e.startTime === '09:00')).toBe(true);
  });

  it('computes countdown to 2 Dec 2026 10:00 AM Asia/Kolkata', () => {
    const target = getExamTimestampIst(THEORY_EXAMS[0]);
    const oneHourBefore = target - 3600 * 1000;
    const parts = getCountdownParts(target, oneHourBefore);
    expect(parts.isPast).toBe(false);
    expect(parts.hours).toBe(1);
    expect(parts.minutes).toBe(0);
  });

  it('exports valid .ics without invented practical end times', () => {
    const ics = generateExamsIcs([...THEORY_EXAMS, ...PRACTICAL_EXAMS]);
    expect(ics).toContain('BEGIN:VCALENDAR');
    expect(ics).toContain('DTSTART;TZID=Asia/Kolkata:20261202T100000');
    expect(ics).toContain('DTEND;TZID=Asia/Kolkata:20261202T120000');
    expect(ics).toContain('DLT Lab (DSL-302)');
  });
});
