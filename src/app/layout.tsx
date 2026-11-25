import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import 'katex/dist/katex.min.css';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'JMI StudyHub — B.Tech CSE (Data Science) Semester 3',
  description:
    'Syllabus-driven learning, exam schedule, NPTEL LPP workbench, topic-wise question bank, and practical preparation for JMI CSE-DS Semester 3.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased bg-[#F6F7FB] text-[#20283A] dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
