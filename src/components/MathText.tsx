'use client';

import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

/**
 * Renders text containing inline ($...$) and display ($$...$$) LaTeX using KaTeX.
 * Never exposes raw LaTeX delimiters on valid expressions.
 */
export function MathText({ text, className = '' }: MathTextProps) {
  const html = useMemo(() => {
    // Normalize \(...\) and \[...\] delimiters into $...$ and $$...$$
    const normalized = text
      .replace(/\\\[([\s\S]+?)\\\]/g, '$$$$$1$$$$')
      .replace(/\\\(([\s\S]+?)\\\)/g, '$$$1$$');

    // Split by display math $$...$$ first, then inline $...$
    const parts = normalized.split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g);
    return parts
      .map((part) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const expr = part.slice(2, -2).trim();
          try {
            return katex.renderToString(expr, { displayMode: true, throwOnError: false });
          } catch {
            return part;
          }
        }
        if (part.startsWith('$') && part.endsWith('$')) {
          const expr = part.slice(1, -1).trim();
          try {
            return katex.renderToString(expr, { displayMode: false, throwOnError: false });
          } catch {
            return part;
          }
        }
        return part
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      })
      .join('');
  }, [text]);

  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
