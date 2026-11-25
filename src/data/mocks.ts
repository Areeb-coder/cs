import { MockExamPaper } from '@/types/academic';
import { QUESTION_BANK } from './questions';

// Build realistic mock exam papers following JMI semester blueprints
// 70 Marks, 3 Hours duration
// Section A: Short / Compulsory Questions (10 Qs x 2 marks = 20 marks)
// Section B: Medium Analytical Questions (4 out of 6 Qs x 5 marks = 20 marks)
// Section C: Comprehensive Long Derivations / Proofs / Complex problems (3 out of 5 Qs x 10 marks = 30 marks)

export const MOCK_EXAM_PAPERS: MockExamPaper[] = [
  {
    id: 'mock-asb-301-endsem',
    subjectId: 'asb-301',
    title: 'ASB-301 Engineering Mathematics III — Full Semester Mock',
    code: 'ASB-301',
    academicYear: '2024-2025',
    sessionType: 'End-Semester',
    durationMinutes: 180,
    totalMarks: 70,
    instructions: [
      'All sections are compulsory. Internal choice is provided in Sections B and C.',
      'Use of non-programmable scientific calculators is permitted.',
      'Show clear intermediate steps, state boundary conditions, and verify units.'
    ],
    sections: [
      {
        id: 'sec-a',
        title: 'Section A — Short Compulsory Questions (10 × 2 = 20 Marks)',
        instructions: 'Answer all questions in this section.',
        compulsory: true,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'asb-301' && (q.marks <= 2 || q.type === 'mcq')).slice(0, 10)
      },
      {
        id: 'sec-b',
        title: 'Section B — Analytical Problems (4 × 5 = 20 Marks)',
        instructions: 'Attempt any four questions.',
        compulsory: false,
        totalQuestionsToAttempt: 4,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'asb-301' && q.marks >= 5 && q.marks <= 7).slice(0, 6)
      },
      {
        id: 'sec-c',
        title: 'Section C — Comprehensive Derivations & Long Problems (3 × 10 = 30 Marks)',
        instructions: 'Attempt any three questions.',
        compulsory: false,
        totalQuestionsToAttempt: 3,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'asb-301' && q.marks >= 8).slice(0, 5)
      }
    ]
  },
  {
    id: 'mock-asm-301-endsem',
    subjectId: 'asm-301',
    title: 'ASM-301 Universal Human Values — Full Semester Mock',
    code: 'ASM-301',
    academicYear: '2024-2025',
    sessionType: 'End-Semester',
    durationMinutes: 180,
    totalMarks: 70,
    instructions: [
      'Answer all questions with clarity, drawing distinctions between bodily needs and consciousness.',
      'Illustrate answers with examples from family, society, and ecological balance.'
    ],
    sections: [
      {
        id: 'sec-a',
        title: 'Section A — Foundational Concepts (10 × 2 = 20 Marks)',
        instructions: 'Answer all questions.',
        compulsory: true,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'asm-301' && (q.marks <= 2 || q.type === 'mcq')).slice(0, 10)
      },
      {
        id: 'sec-b',
        title: 'Section B — Relational & Societal Harmony (4 × 5 = 20 Marks)',
        instructions: 'Attempt any four questions.',
        compulsory: false,
        totalQuestionsToAttempt: 4,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'asm-301' && q.marks >= 5 && q.marks <= 7).slice(0, 6)
      },
      {
        id: 'sec-c',
        title: 'Section C — Comprehensive Case Analysis (3 × 10 = 30 Marks)',
        instructions: 'Attempt any three questions.',
        compulsory: false,
        totalQuestionsToAttempt: 3,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'asm-301' && q.marks >= 8).slice(0, 5)
      }
    ]
  },
  {
    id: 'mock-dsc-301-endsem',
    subjectId: 'dsc-301',
    title: 'DSC-301 Discrete Mathematics — Full Semester Mock',
    code: 'DSC-301',
    academicYear: '2024-2025',
    sessionType: 'End-Semester',
    durationMinutes: 180,
    totalMarks: 70,
    instructions: [
      'Write rigorous proofs for algebraic and graph-theoretic propositions.',
      'Show recurrence relation characteristic equations and initial condition substitutions.'
    ],
    sections: [
      {
        id: 'sec-a',
        title: 'Section A — Short Concepts & Definitions (10 × 2 = 20 Marks)',
        instructions: 'Answer all questions.',
        compulsory: true,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'dsc-301' && (q.marks <= 2 || q.type === 'mcq')).slice(0, 10)
      },
      {
        id: 'sec-b',
        title: 'Section B — Proofs & Recurrence Relations (4 × 5 = 20 Marks)',
        instructions: 'Attempt any four questions.',
        compulsory: false,
        totalQuestionsToAttempt: 4,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'dsc-301' && q.marks >= 5 && q.marks <= 7).slice(0, 6)
      },
      {
        id: 'sec-c',
        title: 'Section C — Advanced Graph Theory & Optimization (3 × 10 = 30 Marks)',
        instructions: 'Attempt any three questions.',
        compulsory: false,
        totalQuestionsToAttempt: 3,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'dsc-301' && q.marks >= 8).slice(0, 5)
      }
    ]
  },
  {
    id: 'mock-dsc-302-endsem',
    subjectId: 'dsc-302',
    title: 'DSC-302 Data Structures — Full Semester Mock',
    code: 'DSC-302',
    academicYear: '2024-2025',
    sessionType: 'End-Semester',
    durationMinutes: 180,
    totalMarks: 70,
    instructions: [
      'Provide clean algorithm pseudo-code or C implementations.',
      'State time and auxiliary space complexity in big-O notation for every algorithm.'
    ],
    sections: [
      {
        id: 'sec-a',
        title: 'Section A — Objective & Complexity Drills (10 × 2 = 20 Marks)',
        instructions: 'Answer all questions.',
        compulsory: true,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'dsc-302' && (q.marks <= 2 || q.type === 'mcq')).slice(0, 10)
      },
      {
        id: 'sec-b',
        title: 'Section B — Trees, Stacks & Queues Operations (4 × 5 = 20 Marks)',
        instructions: 'Attempt any four questions.',
        compulsory: false,
        totalQuestionsToAttempt: 4,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'dsc-302' && q.marks >= 5 && q.marks <= 7).slice(0, 6)
      },
      {
        id: 'sec-c',
        title: 'Section C — Graph Algorithms & Advanced Sorting (3 × 10 = 30 Marks)',
        instructions: 'Attempt any three questions.',
        compulsory: false,
        totalQuestionsToAttempt: 3,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'dsc-302' && q.marks >= 8).slice(0, 5)
      }
    ]
  },
  {
    id: 'mock-dsc-303-endsem',
    subjectId: 'dsc-303',
    title: 'DSC-303 Digital Logic Design — Full Semester Mock',
    code: 'DSC-303',
    academicYear: '2024-2025',
    sessionType: 'End-Semester',
    durationMinutes: 180,
    totalMarks: 70,
    instructions: [
      'Draw neat circuit diagrams and state transition tables.',
      'Show K-map groupings and boolean algebra simplifications step-by-step.'
    ],
    sections: [
      {
        id: 'sec-a',
        title: 'Section A — Boolean Algebra & Logic Gates (10 × 2 = 20 Marks)',
        instructions: 'Answer all questions.',
        compulsory: true,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'dsc-303' && (q.marks <= 2 || q.type === 'mcq')).slice(0, 10)
      },
      {
        id: 'sec-b',
        title: 'Section B — Combinational Circuits (4 × 5 = 20 Marks)',
        instructions: 'Attempt any four questions.',
        compulsory: false,
        totalQuestionsToAttempt: 4,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'dsc-303' && q.marks >= 5 && q.marks <= 7).slice(0, 6)
      },
      {
        id: 'sec-c',
        title: 'Section C — Sequential Machine Synthesis (3 × 10 = 30 Marks)',
        instructions: 'Attempt any three questions.',
        compulsory: false,
        totalQuestionsToAttempt: 3,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'dsc-303' && q.marks >= 8).slice(0, 5)
      }
    ]
  },
  {
    id: 'mock-dsc-304-endsem',
    subjectId: 'dsc-304',
    title: 'DSC-304 Database Management Systems — Full Semester Mock',
    code: 'DSC-304',
    academicYear: '2024-2025',
    sessionType: 'End-Semester',
    durationMinutes: 180,
    totalMarks: 70,
    instructions: [
      'Write syntactically valid standard SQL queries.',
      'Analyze serializability and normalization (1NF through BCNF) with clear decomposition proofs.'
    ],
    sections: [
      {
        id: 'sec-a',
        title: 'Section A — Relational Concepts & SQL Syntax (10 × 2 = 20 Marks)',
        instructions: 'Answer all questions.',
        compulsory: true,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'dsc-304' && (q.marks <= 2 || q.type === 'mcq')).slice(0, 10)
      },
      {
        id: 'sec-b',
        title: 'Section B — Normalization & Relational Algebra (4 × 5 = 20 Marks)',
        instructions: 'Attempt any four questions.',
        compulsory: false,
        totalQuestionsToAttempt: 4,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'dsc-304' && q.marks >= 5 && q.marks <= 7).slice(0, 6)
      },
      {
        id: 'sec-c',
        title: 'Section C — ACID, Concurrency Control & Recovery (3 × 10 = 30 Marks)',
        instructions: 'Attempt any three questions.',
        compulsory: false,
        totalQuestionsToAttempt: 3,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'dsc-304' && q.marks >= 8).slice(0, 5)
      }
    ]
  },
  {
    id: 'mock-lpp-endsem',
    subjectId: 'lpp',
    title: 'Linear Programming (LPP Track) — Full Examination Mock',
    code: 'LPP',
    academicYear: '2024-2025',
    sessionType: 'End-Semester',
    durationMinutes: 180,
    totalMarks: 70,
    instructions: [
      'Show complete Simplex tableaux with entering/leaving variable determinations.',
      'Formulate dual models and state complementary slackness conditions.'
    ],
    sections: [
      {
        id: 'sec-a',
        title: 'Section A — Convex Analysis & LP Fundamentals (10 × 2 = 20 Marks)',
        instructions: 'Answer all questions.',
        compulsory: true,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'lpp' && (q.marks <= 2 || q.type === 'mcq')).slice(0, 10)
      },
      {
        id: 'sec-b',
        title: 'Section B — Simplex & Duality Computations (4 × 5 = 20 Marks)',
        instructions: 'Attempt any four questions.',
        compulsory: false,
        totalQuestionsToAttempt: 4,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'lpp' && q.marks >= 5 && q.marks <= 7).slice(0, 6)
      },
      {
        id: 'sec-c',
        title: 'Section C — Big-M, Two-Phase & ML Applications (3 × 10 = 30 Marks)',
        instructions: 'Attempt any three questions.',
        compulsory: false,
        totalQuestionsToAttempt: 3,
        questions: QUESTION_BANK.filter(q => q.subjectId === 'lpp' && q.marks >= 8).slice(0, 5)
      }
    ]
  }
];
