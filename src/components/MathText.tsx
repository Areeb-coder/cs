'use client';

import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

/**
 * Enhanced MathText component:
 * 1. Supports LaTeX math ($...$ inline, $$...$$ display, \(...\), \[...\]) via KaTeX.
 * 2. Parses and formats Markdown & pipe-delimited database tables (with horizontal scrolling & responsive styling).
 * 3. Highlights and structures SQL code blocks (```sql ... ```) and inline code.
 * 4. Formats academic subquestions ((a), (b), (c)...) into structured question sections.
 * 5. Enhances functional dependencies (-> or \to) and candidate key sets cleanly.
 */
export function MathText({ text, className = '' }: MathTextProps) {
  const html = useMemo(() => {
    if (!text) return '';

    // Step 1: Normalize \(...\) and \[...\] delimiters into $...$ and $$...$$
    const normalized = text
      .replace(/\\\[([\s\S]+?)\\\]/g, '$$$$$1$$$$')
      .replace(/\\\(([\s\S]+?)\\\)/g, '$$$1$$');

    // Step 2: Extract code blocks (e.g. ```sql ... ``` or ``` ... ```) into placeholders
    const codeTokens: string[] = [];
    const formatCodeBlock = (codeContent: string, title = 'SQL / Code Query') => {
      const trimmed = codeContent.trim();
      const escaped = trimmed
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      
      const codeHtml = `<div class="my-3 overflow-x-auto rounded-lg border border-slate-700/60 bg-slate-900 p-3 font-mono text-xs text-sky-300 dark:border-slate-800 dark:bg-slate-950 shadow-sm"><div class="mb-1.5 flex items-center justify-between border-b border-slate-800 pb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400"><span>${title}</span><span>Monospace</span></div><pre class="leading-relaxed whitespace-pre font-mono text-emerald-300"><code>${escaped}</code></pre></div>`;
      
      const token = `@@CODE_TOKEN_${codeTokens.length}@@`;
      codeTokens.push(codeHtml);
      return token;
    };

    let withCodePlaceholders = normalized.replace(/```(?:sql|ts|js|python|bash)?\n?([\s\S]*?)```/g, (_match, codeContent) => {
      return formatCodeBlock(codeContent);
    });

    // Also auto-detect raw SQL queries that start with SELECT / INSERT / UPDATE / CREATE or -- (comment) followed by SELECT
    withCodePlaceholders = withCodePlaceholders.replace(
      /(?:^|\n)((?:--[^\n]*\n)?SELECT\s+[\s\S]+?;\s*)/g,
      (_match, sqlSnippet) => {
        return '\n' + formatCodeBlock(sqlSnippet, 'SQL Query') + '\n';
      }
    );

    // Step 3: Extract KaTeX segments into placeholders to protect them from formatting transformations
    const mathTokens: string[] = [];
    const withMathPlaceholders = withCodePlaceholders.replace(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g, (match) => {
      let rendered = match;
      if (match.startsWith('$$') && match.endsWith('$$')) {
        const expr = match.slice(2, -2).trim();
        try {
          rendered = katex.renderToString(expr, { displayMode: true, throwOnError: false });
        } catch {
          rendered = match;
        }
      } else if (match.startsWith('$') && match.endsWith('$')) {
        const expr = match.slice(1, -1).trim();
        try {
          rendered = katex.renderToString(expr, { displayMode: false, throwOnError: false });
        } catch {
          rendered = match;
        }
      }
      const token = `@@MATH_TOKEN_${mathTokens.length}@@`;
      mathTokens.push(rendered);
      return token;
    });

    // Step 4: Markdown & Relational Table Parser
    // Handles standard Markdown tables (| a | b |) and pipe-separated relational text lines (A | B | C)
    const parseTables = (input: string): string => {
      const lines = input.split('\n');
      const outputLines: string[] = [];
      let inTable = false;
      let tableRows: string[][] = [];

      const flushTable = () => {
        if (tableRows.length > 0) {
          const header = tableRows[0];
          const body = tableRows.slice(1);
          let tableHtml = '<div class="overflow-x-auto my-3 rounded-lg border border-slate-200 dark:border-slate-700/80 shadow-sm">';
          tableHtml += '<table class="min-w-full text-xs text-left border-collapse divide-y divide-slate-200 dark:divide-slate-700/80">';
          tableHtml += '<thead class="bg-slate-100/90 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 font-bold uppercase tracking-wider text-[11px]"><tr>';
          header.forEach((h) => {
            tableHtml += `<th class="px-3.5 py-2.5 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">${h}</th>`;
          });
          tableHtml += '</tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/60 font-sans">';
          body.forEach((row, rIdx) => {
            const rowBg = rIdx % 2 === 1 ? 'bg-slate-50/60 dark:bg-slate-800/30' : '';
            tableHtml += `<tr class="${rowBg} hover:bg-sky-50/40 dark:hover:bg-slate-800/60 transition">`;
            row.forEach((c) => {
              tableHtml += `<td class="px-3.5 py-2 text-slate-700 dark:text-slate-300 whitespace-nowrap">${c}</td>`;
            });
            tableHtml += '</tr>';
          });
          tableHtml += '</tbody></table></div>';
          outputLines.push(tableHtml);
          tableRows = [];
        }
        inTable = false;
      };

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        // Check if line is a table row:
        // Format A: Standard markdown table: starts and ends with '|' (e.g. | col | col |)
        // Format B: Relational row without leading/trailing pipes: col1 | col2 | col3 (at least 2 pipes and not a code/math line)
        const isStandardMdRow = trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.length > 2;
        const pipeCount = (trimmed.match(/\|/g) || []).length;
        const isRelationalTextRow = pipeCount >= 2 && !trimmed.includes('@@CODE_') && !trimmed.startsWith('(');

        if (isStandardMdRow || isRelationalTextRow) {
          // Check if it's a markdown separator line (|---|---| or ---|---)
          if (/^\|?(?:\s*:?-+:?\s*\|)+\s*:?-+:?\s*\|?$/.test(trimmed)) {
            continue; // Ignore separator row
          }

          let cells: string[];
          if (isStandardMdRow) {
            cells = trimmed.slice(1, -1).split('|').map(c => c.trim());
          } else {
            cells = trimmed.split('|').map(c => c.trim());
          }

          // Ensure it has valid cells
          if (cells.length > 1) {
            tableRows.push(cells);
            inTable = true;
            continue;
          }
        }

        // If not a table row, flush any accumulated table
        if (inTable) {
          flushTable();
        }
        outputLines.push(line);
      }

      if (inTable) {
        flushTable();
      }

      return outputLines.join('\n');
    };

    let processed = parseTables(withMathPlaceholders);

    // Step 5: Format Academic Subquestions: (a), (b), (c), (d)
    // Matches lines starting with (a), (b), (c), etc., or paragraphs containing (a) ... (b) ...
    // Converts "(a) Prompt text [Marks]" into structured, clear subquestion blocks
    processed = processed.replace(
      /(?:^|\n)\s*\(([a-d])\)\s+([^\n]+)/g,
      (_match, letter, content) => {
        // Check if marks are specified, e.g. [1 Mark], [2 Marks], [1.5 Marks]
        let marksBadge = '';
        let cleanContent = content;
        const marksMatch = content.match(/\[([0-9.]+\s*Marks?)\]/i);
        if (marksMatch) {
          marksBadge = `<span class="ml-auto inline-flex items-center rounded bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">${marksMatch[1]}</span>`;
          cleanContent = content.replace(marksMatch[0], '').trim();
        }

        return `\n<div class="my-2.5 rounded-lg border border-slate-200/90 bg-slate-50/70 p-3 dark:border-slate-800 dark:bg-slate-900/40"><div class="flex items-center justify-between gap-2 mb-1.5"><span class="inline-flex items-center gap-1.5 font-bold text-sky-700 dark:text-sky-400 text-xs uppercase tracking-wide"><span class="flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-[11px] font-extrabold text-sky-800 dark:bg-sky-950 dark:text-sky-300">(${letter})</span><span>Part (${letter})</span></span>${marksBadge}</div><div class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed font-normal">${cleanContent}</div></div>\n`;
      }
    );

    // Step 6: Functional Dependencies & arrows outside math (e.g. "StudentID -> StudentName" or "A -> B")
    processed = processed.replace(/([A-Za-z0-9_]+)\s*(?:->|→)\s*([A-Za-z0-9_,\s]+)(?=(?:<\/|\n|$|<div))/g, (_m, lhs, rhs) => {
      return `<span class="font-mono text-sky-700 dark:text-sky-300 font-medium">${lhs} &rarr; ${rhs}</span>`;
    });

    // Step 7: Relation schemas (e.g. Student(StudentID, StudentName))
    processed = processed.replace(/\b([A-Z][A-Za-z0-9_]*)\(([A-Za-z0-9_,\s\[\]\(\)]+)\)/g, (match, relName, attrs) => {
      // Do not replace if part of HTML tags or math tokens
      if (match.includes('MATH_TOKEN') || match.includes('CODE_TOKEN') || relName === 'AVG' || relName === 'COUNT' || relName === 'SELECT') {
        return match;
      }
      return `<span class="font-mono text-[12px] bg-slate-100 dark:bg-slate-800/80 px-1.5 py-0.5 rounded text-indigo-700 dark:text-indigo-300 font-semibold border border-slate-200 dark:border-slate-700">${relName}(<span class="text-slate-700 dark:text-slate-300 font-normal">${attrs}</span>)</span>`;
    });

    // Step 8: Standard Markdown text formatting
    // Bold: **text**
    processed = processed.replace(/\*\*([^*]+?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-slate-100">$1</strong>');

    // Italic: *text* (when not within token)
    processed = processed.replace(/(^|[^\\])\*([^*\n]+?)\*/g, '$1<em>$2</em>');

    // Bullet points: lines starting with "- " or "* "
    processed = processed.replace(/^(?:-|\*)\s+([^\n]+)$/gm, '<li class="ml-4 list-disc text-slate-800 dark:text-slate-200 my-1 leading-relaxed">$1</li>');

    // Numbered lists: lines starting with "1. " etc.
    processed = processed.replace(/^\d+\.\s+([^\n]+)$/gm, '<li class="ml-4 list-decimal text-slate-800 dark:text-slate-200 my-1 leading-relaxed">$1</li>');

    // Blockquotes: lines starting with "> "
    processed = processed.replace(/^>\s+([^\n]+)$/gm, '<blockquote class="border-l-4 border-indigo-500 pl-3 py-1.5 my-2 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-950 dark:text-indigo-200 italic rounded-r text-xs leading-relaxed">$1</blockquote>');

    // Inline code `code`
    processed = processed.replace(/`([^`\n]+)`/g, '<code class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-pink-600 dark:bg-slate-800 dark:text-pink-400 border border-slate-200 dark:border-slate-700">$1</code>');

    // Step 9: Paragraph line breaks (convert double newlines or single newlines outside tables/lists)
    processed = processed.replace(/\n\n+/g, '<div class="h-2.5"></div>');

    // Step 10: Re-insert KaTeX rendered tokens
    for (let i = 0; i < mathTokens.length; i++) {
      processed = processed.replace(`@@MATH_TOKEN_${i}@@`, mathTokens[i]);
    }

    // Step 11: Re-insert Code rendered tokens
    for (let i = 0; i < codeTokens.length; i++) {
      processed = processed.replace(`@@CODE_TOKEN_${i}@@`, codeTokens[i]);
    }

    return processed;
  }, [text]);

  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
