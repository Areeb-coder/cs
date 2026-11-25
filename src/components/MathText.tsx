'use client';

import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

/**
 * Renders text containing inline ($...$) and display ($$...$$) LaTeX using KaTeX,
 * and parses markdown formatting (bold **text**, bullets, tables, linebreaks) cleanly.
 * Eliminates raw markdown syntax artifacts in the UI.
 */
export function MathText({ text, className = '' }: MathTextProps) {
  const html = useMemo(() => {
    if (!text) return '';

    // Step 1: Normalize \(...\) and \[...\] delimiters into $...$ and $$...$$
    const normalized = text
      .replace(/\\\[([\s\S]+?)\\\]/g, '$$$$$1$$$$')
      .replace(/\\\(([\s\S]+?)\\\)/g, '$$$1$$');

    // Step 2: Extract KaTeX segments into placeholders to protect them from markdown parsing
    const mathTokens: string[] = [];
    const withPlaceholders = normalized.replace(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g, (match) => {
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

    // Step 3: Markdown transformations on non-math text
    // Convert Markdown tables: | col | col |
    const parseMarkdownTables = (input: string): string => {
      const lines = input.split('\n');
      const outputLines: string[] = [];
      let inTable = false;
      let tableRows: string[][] = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('|') && line.endsWith('|')) {
          // Check if separator line |---|---|
          if (line.match(/^\|(?:\s*:?-+:?\s*\|)+$/)) {
            continue; // separator
          }
          const cells = line
            .slice(1, -1)
            .split('|')
            .map((c) => c.trim());
          tableRows.push(cells);
          inTable = true;
        } else {
          if (inTable) {
            // Render table
            if (tableRows.length > 0) {
              const header = tableRows[0];
              const body = tableRows.slice(1);
              let tableHtml = '<div className="overflow-x-auto my-3"><table className="w-full text-xs text-left border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">';
              tableHtml += '<thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold"><tr>';
              header.forEach((h) => {
                tableHtml += `<th className="p-2.5 border-b border-slate-200 dark:border-slate-700">${h}</th>`;
              });
              tableHtml += '</tr></thead><tbody className="divide-y divide-slate-100 dark:divide-slate-800">';
              body.forEach((row) => {
                tableHtml += '<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">';
                row.forEach((c) => {
                  tableHtml += `<td className="p-2.5 text-slate-700 dark:text-slate-300">${c}</td>`;
                });
                tableHtml += '</tr>';
              });
              tableHtml += '</tbody></table></div>';
              outputLines.push(tableHtml);
            }
            tableRows = [];
            inTable = false;
          }
          outputLines.push(lines[i]);
        }
      }

      if (inTable && tableRows.length > 0) {
        const header = tableRows[0];
        const body = tableRows.slice(1);
        let tableHtml = '<div class="overflow-x-auto my-3"><table class="w-full text-xs text-left border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">';
        tableHtml += '<thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold"><tr>';
        header.forEach((h) => {
          tableHtml += `<th class="p-2.5 border-b border-slate-200 dark:border-slate-700">${h}</th>`;
        });
        tableHtml += '</tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800">';
        body.forEach((row) => {
          tableHtml += '<tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">';
          row.forEach((c) => {
            tableHtml += `<td class="p-2.5 text-slate-700 dark:text-slate-300">${c}</td>`;
          });
          tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table></div>';
        outputLines.push(tableHtml);
      }

      return outputLines.join('\n');
    };

    let processed = parseMarkdownTables(withPlaceholders);

    // Bold: **text**
    processed = processed.replace(/\*\*([^*]+?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-slate-100">$1</strong>');
    
    // Italic: *text* (when not within token)
    processed = processed.replace(/(^|[^\\])\*([^*\n]+?)\*/g, '$1<em>$2</em>');

    // Bullet points: lines starting with "- " or "* "
    processed = processed.replace(/^(?:-|\*)\s+([^\n]+)$/gm, '<li class="ml-4 list-disc text-slate-800 dark:text-slate-200 my-1">$1</li>');

    // Numbered lists: lines starting with "1. " etc
    processed = processed.replace(/^\d+\.\s+([^\n]+)$/gm, '<li class="ml-4 list-decimal text-slate-800 dark:text-slate-200 my-1">$1</li>');

    // Blockquotes: lines starting with "> "
    processed = processed.replace(/^>\s+([^\n]+)$/gm, '<blockquote class="border-l-4 border-indigo-500 pl-3 py-1 my-2 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-950 dark:text-indigo-200 italic rounded-r">$1</blockquote>');

    // Paragraph line breaks (convert double newlines or single newlines outside tables/lists)
    processed = processed.replace(/\n\n+/g, '<div class="h-2.5"></div>');

    // Step 4: Re-insert KaTeX rendered tokens
    for (let i = 0; i < mathTokens.length; i++) {
      processed = processed.replace(`@@MATH_TOKEN_${i}@@`, mathTokens[i]);
    }

    return processed;
  }, [text]);

  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
