export type TopicMasteryState =
  | 'not_started'
  | 'learning'
  | 'practising'
  | 'needs_revision'
  | 'proficient'
  | 'mastered';

export type ProvenanceStatus =
  | 'official_jmi_syllabus'
  | 'official_exam_datesheet'
  | 'nptel_lecture_notes'
  | 'user_faculty_notes'
  | 'actual_pyq'
  | 'source_note_exercise'
  | 'ai_generated_pending_review'
  | 'ai_generated_verified'
  | 'platform_practice_lab'
  | 'external_supplementary';

export interface DiscrepancyFlag {
  id: string;
  severity: 'warning' | 'info';
  title: string;
  description: string;
  sourceA: string;
  sourceB: string;
  resolutionStatus: 'unresolved' | 'resolved';
}

export interface VideoResource {
  id: string;
  title: string;
  creator: string;
  youtubeId: string;
  url: string;
  duration: string;
  language: 'English' | 'Hindi' | 'Bilingual';
  resourceType: 'full_lecture' | 'concept_explanation' | 'solved_problem' | 'quick_revision';
  coverageNotes: string;
  lastChecked: string;
  availability: 'verified' | 'needs_check';
}

export interface Topic {
  id: string;
  subjectId: string;
  unitId: string;
  title: string;
  description?: string;
  estimatedMinutes: number;
  provenance: ProvenanceStatus;
  crossLinkedTopicIds?: string[];
  nptelRef?: {
    lectureNumber: number;
    pdfName: string;
    pages: string;
  };
  keyFormulas?: string[];
  shortNotes?: string;
  videos?: VideoResource[];
}

export interface Unit {
  id: string;
  subjectId: string;
  unitNumber: number;
  title: string;
  topics: Topic[];
  isNptelExtension?: boolean;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  shortName: string;
  credits: number;
  type: 'Theory' | 'Practical' | 'Provisional';
  syllabusStatus: 'verified' | 'detailed_syllabus_required' | 'nptel_derived';
  examDate?: string; // ISO date YYYY-MM-DD
  examTime?: string;
  examStatus: 'scheduled' | 'unconfirmed' | 'practical_scheduled';
  units: Unit[];
  discrepancyIds?: string[];
}

export interface ExamEvent {
  id: string;
  subjectId: string;
  code: string;
  paperName: string;
  date: string; // YYYY-MM-DD
  day: string;
  startTime: string; // HH:mm in Asia/Kolkata
  endTime?: string;
  venue?: string;
  type: 'theory' | 'practical';
  discrepancyNote?: string;
}

export interface LppLecture {
  lectureNumber: number;
  title: string;
  pdfFileName: string;
  pageCount: number;
  portalUnitNumber: number;
  portalUnitTitle: string;
  isJmiExamScope: boolean;
  isNptelExtension: boolean;
  topicsCovered: string[];
  exercisesCount: number;
  sourceAttribution: string;
}

export type QuestionType = 'mcq' | 'numerical' | 'short_answer' | 'true_false' | 'derivation' | 'proof';

export interface Question {
  id: string;
  subjectId: string;
  unitId: string;
  topicId: string;
  type: QuestionType;
  prompt: string;
  options?: string[];
  correctAnswer: string;
  solution: string;
  distractorExplanations?: Record<string, string>;
  difficulty: 'easy' | 'medium' | 'hard';
  marks: number;
  provenance: ProvenanceStatus;
  sourceRef: string;
  year?: string;
  examSession?: string; // e.g. Sessional I, Sessional II, End-Semester
  questionNumber?: string; // e.g. Q1(a), Q3(b)
  pageNumber?: number;
}

export interface MistakeEntry {
  id: string;
  questionId: string;
  topicId: string;
  subjectId: string;
  category: 'conceptual_gap' | 'formula_error' | 'calculation_error' | 'misread_question' | 'syntax_error';
  selectedAnswer: string;
  correctAnswer: string;
  timestamp: string;
  resolved: boolean;
}

export interface DriveResource {
  id: string;
  name: string;
  folderName: string;
  driveUrl: string;
  fileType: 'pdf' | 'folder' | 'image' | 'doc' | 'shortcut_broken';
  subjectId?: string;
  status: 'indexed' | 'broken_shortcut' | 'requires_auth';
  notes: string;
}
