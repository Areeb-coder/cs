'use client';

import React, { useState } from 'react';
import {
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  FlaskConical,
  FolderOpen,
  GraduationCap,
  LayoutDashboard,
  Menu,
  Moon,
  RotateCcw,
  Search,
  Settings,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import { NavSection, useApp } from '@/context/AppContext';
import { DashboardView } from '@/components/DashboardView';
import { SubjectsView } from '@/components/SubjectsView';
import { DateSheetsView } from '@/components/DateSheetsView';
import { LpWorkbenchView } from '@/components/LpWorkbenchView';
import { QuizPyqView } from '@/components/QuizPyqView';
import {
  PracticalsView,
  ResourcesView,
  RevisionAnalyticsAdminView,
  TutorView,
} from '@/components/SecondaryViews';
import { SUBJECTS } from '@/data/curriculum';

const NAV_GROUPS: Array<{
  group: string;
  items: Array<{
    id: NavSection;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
}> = [
  {
    group: 'STUDY',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'subjects', label: 'My Subjects', icon: BookOpen },
      { id: 'datesheets', label: 'Schedule', icon: Calendar },
      { id: 'pyqs', label: 'Question Bank', icon: CheckCircle2 },
    ],
  },
  {
    group: 'RESOURCES',
    items: [
      { id: 'resources', label: 'Notes & Drive', icon: FolderOpen },
      { id: 'revision', label: 'Revision Centre', icon: RotateCcw },
      { id: 'practicals', label: 'Practical Prep', icon: FlaskConical },
    ],
  },
  {
    group: 'TOOLS',
    items: [
      { id: 'tutor', label: 'AI Study Assistant', icon: Sparkles },
      { id: 'workbench', label: 'LP Workbench', icon: Cpu },
      { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    ],
  },
  {
    group: 'ADMINISTRATION',
    items: [{ id: 'admin', label: 'Admin & Coverage', icon: Settings }],
  },
];

const SECTION_TITLES: Record<NavSection, string> = {
  dashboard: 'Dashboard',
  subjects: 'My Subjects & Syllabus',
  datesheets: 'Examination Schedule',
  pyqs: 'Question Bank & Practice',
  resources: 'Notes & Google Drive',
  revision: 'Revision Centre',
  practicals: 'Practical Preparation',
  tutor: 'AI Study Assistant',
  workbench: 'LP Workbench',
  analytics: 'Performance Analytics',
  admin: 'Admin & Syllabus Coverage',
};

export function AppShell() {
  const { state, activeSection, setActiveSection, setSelectedSubjectId, toggleTheme } = useApp();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults =
    searchQuery.trim().length > 1
      ? SUBJECTS.flatMap((s) =>
          s.units.flatMap((u) =>
            u.topics
              .filter((t) => t.title.toLowerCase().includes(searchQuery.trim().toLowerCase()))
              .map((t) => ({ subject: s, topic: t }))
          )
        ).slice(0, 6)
      : [];

  return (
    <div className="min-h-screen flex bg-[#F6F7FB] text-[#20283A] dark:bg-slate-950 dark:text-slate-100">
      {/* Desktop Collapsible Sidebar */}
      <aside
        className={`hidden md:flex flex-col justify-between shrink-0 border-r border-[#E8EAF0] bg-white dark:border-slate-800 dark:bg-slate-900 transition-all duration-200 print:hidden ${
          collapsed ? 'w-[72px]' : 'w-64'
        }`}
      >
        <div className="p-4">
          {/* Brand + Collapse */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setActiveSection('dashboard')}
              className="flex items-center gap-2.5 text-left"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#536DD8] text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              {!collapsed && (
                <div>
                  <div className="text-sm font-bold tracking-tight text-[#20283A] dark:text-white">
                    JMI StudyHub
                  </div>
                  <div className="text-[11px] text-[#697386] dark:text-slate-400">
                    CSE-DS · Sem 3
                  </div>
                </div>
              )}
            </button>
            <button
              onClick={() => setCollapsed((c) => !c)}
              aria-label="Toggle sidebar"
              className="rounded-lg p-1.5 text-[#697386] hover:bg-[#F6F7FB] dark:hover:bg-slate-800"
            >
              {collapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Grouped Navigation */}
          <nav className="mt-6 space-y-5">
            {NAV_GROUPS.map((grp) => (
              <div key={grp.group}>
                {!collapsed && (
                  <div className="mb-1.5 px-2.5 text-[10px] font-semibold uppercase tracking-wider text-[#697386] dark:text-slate-500">
                    {grp.group}
                  </div>
                )}
                <div className="space-y-0.5">
                  {grp.items.map((item) => {
                    const Icon = item.icon;
                    const active = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        title={collapsed ? item.label : undefined}
                        className={`flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-[13px] font-medium transition-colors ${
                          active
                            ? 'bg-[#EAF2FF] text-[#536DD8] font-semibold dark:bg-indigo-950/60 dark:text-indigo-300'
                            : 'text-[#697386] hover:bg-[#F6F7FB] hover:text-[#20283A] dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
                        }`}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        {!collapsed && <span className="truncate">{item.label}</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {!collapsed && (
          <div className="border-t border-[#E8EAF0] p-4 text-[11px] text-[#697386] dark:border-slate-800 dark:text-slate-400">
            Local-first persistence active
          </div>
        )}
      </aside>

      {/* Main Column */}
      <div className="flex flex-1 flex-col min-w-0 pb-16 md:pb-0">
        {/* Clean Top Header */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-4 border-b border-[#E8EAF0] bg-white/90 px-4 backdrop-blur-md sm:px-6 dark:border-slate-800 dark:bg-slate-900/90 print:hidden">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="rounded-lg p-1.5 text-[#697386] hover:bg-[#F6F7FB] md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div>
              <div className="text-xs text-[#697386] dark:text-slate-400">
                JMI CSE (Data Science) · Semester 3
              </div>
              <h1 className="text-base font-semibold text-[#20283A] dark:text-white">
                {SECTION_TITLES[activeSection]}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Global Search */}
            <div className="relative hidden sm:block w-64">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[#697386]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search subjects or topics..."
                aria-label="Search topics"
                className="w-full rounded-xl border border-[#E8EAF0] bg-[#F6F7FB] pl-8 pr-3 py-1.5 text-xs text-[#20283A] outline-none focus:border-[#536DD8] focus:bg-white dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
              {searchResults.length > 0 && (
                <div className="absolute right-0 z-40 mt-2 w-72 rounded-xl border border-[#E8EAF0] bg-white p-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-900">
                  {searchResults.map(({ subject, topic }) => (
                    <button
                      key={topic.id}
                      onClick={() => {
                        setSelectedSubjectId(subject.id);
                        setActiveSection('subjects');
                        setSearchQuery('');
                      }}
                      className="block w-full rounded-lg px-3 py-2 text-left text-xs hover:bg-[#EAF2FF] dark:hover:bg-slate-800"
                    >
                      <div className="font-semibold text-[#20283A] dark:text-slate-100 truncate">
                        {topic.title}
                      </div>
                      <div className="text-[10px] text-[#697386]">{subject.code}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setActiveSection('datesheets')}
              aria-label="Exam notifications"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E8EAF0] bg-white text-[#697386] hover:bg-[#F6F7FB] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <Bell className="h-4 w-4" />
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E8EAF0] bg-white text-[#697386] hover:bg-[#F6F7FB] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {state.theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="mx-auto w-full max-w-7xl flex-1 p-4 sm:p-6">
          {activeSection === 'dashboard' && <DashboardView />}
          {activeSection === 'subjects' && <SubjectsView />}
          {activeSection === 'datesheets' && <DateSheetsView />}
          {activeSection === 'pyqs' && <QuizPyqView />}
          {activeSection === 'resources' && <ResourcesView />}
          {activeSection === 'tutor' && <TutorView />}
          {activeSection === 'practicals' && <PracticalsView />}
          {activeSection === 'workbench' && <LpWorkbenchView />}
          {activeSection === 'revision' && <RevisionAnalyticsAdminView mode="revision" />}
          {activeSection === 'analytics' && <RevisionAnalyticsAdminView mode="analytics" />}
          {activeSection === 'admin' && <RevisionAnalyticsAdminView mode="admin" />}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around border-t border-[#E8EAF0] bg-white py-2 md:hidden dark:border-slate-800 dark:bg-slate-900 print:hidden">
        {[
          { id: 'dashboard' as const, label: 'Home', icon: LayoutDashboard },
          { id: 'subjects' as const, label: 'Subjects', icon: BookOpen },
          { id: 'pyqs' as const, label: 'Practice', icon: CheckCircle2 },
          { id: 'tutor' as const, label: 'AI Tutor', icon: Sparkles },
        ].map((item) => {
          const Icon = item.icon;
          const active = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] font-medium ${
                active ? 'text-[#536DD8]' : 'text-[#697386]'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] font-medium text-[#697386]"
        >
          <Menu className="h-4 w-4" />
          <span>More</span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-10 w-72 max-w-[85vw] bg-white p-4 dark:bg-slate-900 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8EAF0] dark:border-slate-800">
              <span className="font-bold text-[#20283A] dark:text-white">JMI StudyHub</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-1 text-[#697386]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 space-y-5">
              {NAV_GROUPS.map((grp) => (
                <div key={grp.group}>
                  <div className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-wider text-[#697386]">
                    {grp.group}
                  </div>
                  <div className="space-y-1">
                    {grp.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveSection(item.id);
                            setMobileMenuOpen(false);
                          }}
                          className={`flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-medium ${
                            activeSection === item.id
                              ? 'bg-[#EAF2FF] text-[#536DD8] font-semibold'
                              : 'text-[#697386]'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
