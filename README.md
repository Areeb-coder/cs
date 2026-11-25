# JMI StudyHub — B.Tech Computer Engineering (Semester 3)

[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![KaTeX](https://img.shields.io/badge/KaTeX-LaTeX%20Math-green?style=flat-square)](https://katex.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

An academic portal and last-minute exam revision platform engineered specifically for **Jamia Millia Islamia (JMI) B.Tech Computer Engineering & Computer Science (Semester 3)** students.

JMI StudyHub centralises verified syllabus mappings, curated video lectures, unit-wise LaTeX formula sheets, an authentic previous-year questions (PYQ) intelligence centre, and interactive learning workbenches into a single fast, offline-capable application.

---

## 🌟 Key Architecture & Highlights

### 1. 📑 Complete Unit-Wise Cheat Sheets & Formula Sheets
- **100% Verified Syllabus Coverage:** Zero silent omissions across all 35 academic units.
- **Multi-Tiered Revision Views:**
  - **60-Second Blitz View:** Key formulas, definitions, and high-frequency exam rules.
  - **5-Minute Summary View:** Core conceptual architecture, theorems, and edge cases.
  - **Complete Revision View:** Full mathematical proofs, algorithms, derivations, and examples.
- **Crisp LaTeX Equations:** Powered by **KaTeX** for instant client-side math rendering without layout shift or raw code artifacts.
- **Copy & Print Ready:** One-click formula copying and clean, print-optimized CSS for paper handouts.

### 2. 🏛️ Three-Tier Exam Question & PYQ Intelligence Hub
Strict academic provenance separation ensures students never confuse synthetic problems with real university exams:
- **📜 Tier 1: Previous Year Questions (PYQs)**
  - Authentically extracted from original JMI university papers (End-Sem, Sessional I, Sessional II, Mid-Term).
  - Explicit metadata: Academic Year, Exam Session, Question Number (e.g. `Q1(a)`), Marks, and Scanned PDF Page reference.
  - Zero fabricated questions.
- **📚 Tier 2: Question Bank (Notes & Assignments)**
  - Verified non-PYQ practice questions sourced from faculty lecture notes, NPTEL course packs, and lab manuals.
- **🤖 Tier 3: AI-Generated Practice**
  - Syllabus-aligned synthetic questions with step-by-step solutions, transparently badged as `AI-Generated • Verified`.
- **Practice & Test Modes:** Instant step-by-step solutions or test mode with automatic logging into the student's *Mistake Notebook*.

### 3. 🎥 Native Curated YouTube Lecture Map
- Direct integration of verified topic-specific YouTube lectures with fallback review queues for pending topics.
- Built-in video modal player with responsive 16:9 aspect ratios, channel attribution, duration, and direct links to YouTube.

### 4. 📐 Interactive Linear Programming (LPP) Simplex Workbench
- Dedicated interactive workbench for Simplex pivoting, graphical 2-variable LP solutions, and duality transformations based on the NPTEL Linear Programming curriculum.

### 5. 📅 Official Examination Countdown & Date Sheets
- Up-to-date schedule tracking for all Semester 3 theory exams and practical laboratory examinations with live countdown timers and discrepancy flags.

---

## 📚 Curriculum & Subject Coverage

| Course Code | Subject Name | Type | Credits | Key Coverage |
| :--- | :--- | :---: | :---: | :--- |
| **ASB-301** | **Engineering Mathematics III** | Theory | 3 | Vector Calculus, Linear Algebra, Fourier Series & Transforms, Difference Equations & Z-Transforms, Probability & Statistics |
| **ASM-301** | **Universal Human Values (UHV)** | Theory | 3 | Value Education, Harmony in Self, Family, Society, and Nature/Existence |
| **DSC-301** | **Discrete Mathematics** | Theory | 3 | Algebraic Structures, Graph Theory (Welch–Powell), Recurrences, Combinatorics, LPP Basics |
| **DSC-302** | **Data Structures** | Theory | 3 | Arrays, Stacks, Queues, Linked Lists, Trees (AVL, B/B+), Graphs, Sorting Algorithms |
| **DSC-303** | **Digital Logic Design** | Theory | 3 | Number Systems, Boolean Algebra, K-Maps, Quine–McCluskey, Adders, Multiplexers, Flip-Flops, Counters |
| **DSC-304** | **Database Management Systems** | Theory | 3 | ER Modeling, Relational Algebra, Normalization (1NF–5NF, BCNF), SQL/PL-SQL, Transactions & Concurrency |
| **LPP** | **Linear Programming Track** | NPTEL | — | Convex Sets, Simplex Method, Duality, Minimax Theorem, Combinatorial Optimisation & Machine Learning Applications |
| **DSL-301–304**| **Practical Lab Subjects** | Lab | 4 | Data Structures Lab, Digital Logic Lab, C Programming Lab, DBMS Lab |

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/) with React 19 and Turbopack
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing for academic entities, progress state, and provenance)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with full responsive design and Light/Dark theme support
- **Mathematics:** [KaTeX](https://katex.org/) via custom `<MathText />` components with inline (`$...$`) and block (`$$...$$`) parsing
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** React Context API with LocalStorage persistence for:
  - Topic completion and mastery levels
  - Personal student notes
  - Question bookmarks
  - Mistake Notebook / Error log
  - Quiz score tracking
  - Theme preference (Default: Light mode)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.18.0 or later recommended)
- `npm` (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Areeb-coder/cs.git
   cd cs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📦 Project Structure

```text
jmi-study-hub/
├── src/
│   ├── app/
│   │   ├── globals.css            # Tailwind 4 theme, KaTeX CSS & print styles
│   │   ├── layout.tsx             # Root layout with fonts and metadata
│   │   └── page.tsx               # Primary application view router
│   ├── components/
│   │   ├── AppShell.tsx           # Navigation bar, mobile drawer & theme toggle
│   │   ├── DashboardView.tsx      # Overview, countdowns, quick links & analytics
│   │   ├── SubjectsView.tsx       # Subject workspace, units, topics & video integration
│   │   ├── CheatSheetsView.tsx    # 60s / 5min / Complete Cheat Sheets with KaTeX
│   │   ├── QuizPyqView.tsx        # 3-tier Question Hub (PYQs, Question Bank, AI Practice)
│   │   ├── DateSheetsView.tsx     # Exam schedules, timings, and discrepancy flags
│   │   ├── LpWorkbenchView.tsx    # Interactive Simplex & Graphical LP solver
│   │   ├── TopicVideoSection.tsx  # YouTube video preview cards & modal player
│   │   └── MathText.tsx           # KaTeX equation parser & renderer
│   ├── context/
│   │   └── AppContext.tsx         # Central application state & localStorage sync
│   ├── data/
│   │   ├── curriculum.ts          # Authoritative syllabus hierarchy for all subjects
│   │   ├── master_cheatsheets.ts  # Canonical unit-wise revision cheat sheets
│   │   ├── questions.ts           # Classified questions with provenance & solutions
│   │   ├── videos.ts              # Verified YouTube video mappings
│   │   └── schedule.ts            # JMI official examination dates and timings
│   ├── lib/
│   │   ├── dateUtils.ts           # Exam countdown calculation utilities
│   │   └── storage.ts             # LocalStorage schema & migration helpers
│   └── types/
│       ├── academic.ts            # Type definitions for Subject, Unit, Topic, Question
│       ├── cheatsheet.ts          # Cheat sheet structure & revision tiers
│       └── video.ts               # YouTube video resource models
├── public/                        # Static assets and icons
├── next.config.ts                 # Next.js config with YouTube image domains
├── package.json                   # Dependencies and scripts
└── tsconfig.json                  # TypeScript compiler settings
```

---

## 🧪 Build & Quality Checks

Run the production build:
```bash
npm run build
```

Run linting:
```bash
npm run lint
```

---

## 🔒 Academic Integrity & Provenance Policy

JMI StudyHub adheres to strict academic citation standards:
1. **Never fabricate past-year examination papers.** If an exam paper has not been scanned from the university archive, its status is marked as unconfirmed or absent rather than simulated.
2. **AI-generated problems are transparently marked.** Any question synthesized by AI is explicitly badged as `AI-Generated • Verified` so students always know the origin of the material.
3. **Discrepancy Reporting:** When official date sheets or syllabus documents conflict (such as course codes or examination timings), the portal highlights the discrepancy rather than guessing.

---

## 🤝 Contributing

Contributions are welcome! If you have scanned previous-year papers, faculty assignments, or suggested corrections:
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AddPYQPapers`)
3. Commit your Changes (`git commit -m 'Add 2024 End-Sem PYQs for DSC-303'`)
4. Push to the Branch (`git push origin feature/AddPYQPapers`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Engineered with precision for Jamia Millia Islamia Computer Engineering students.*
