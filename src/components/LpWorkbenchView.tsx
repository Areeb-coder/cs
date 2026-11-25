'use client';

import React, { useState } from 'react';
import { Cpu, RotateCcw } from 'lucide-react';
import { MathText } from '@/components/MathText';

export function LpWorkbenchView() {
  const [activeLab, setActiveLab] = useState<'graphical' | 'duality' | 'l1'>('graphical');

  // Lab 1: Brewery LP (Lecture 1, pp. 1-2)
  const [x, setX] = useState(12);
  const [y, setY] = useState(28);
  const cornOk = 5 * x + 15 * y <= 480;
  const hopsOk = 4 * x + 4 * y <= 160;
  const barleyOk = 35 * x + 20 * y <= 1190;
  const feasible = cornOk && hopsOk && barleyOk && x >= 0 && y >= 0;
  const profit = 15 * x + 20 * y;

  // Lab 3: L1 Regression / MAE vs RMSE (Lecture 7, p. 6)
  const [errorsInput, setErrorsInput] = useState('2, -3, 1, 4');
  const parsedErrors = errorsInput
    .split(',')
    .map((s) => Number(s.trim()))
    .filter((n) => !Number.isNaN(n));
  const n = parsedErrors.length || 1;
  const mae = parsedErrors.reduce((acc, v) => acc + Math.abs(v), 0) / n;
  const rmse = Math.sqrt(parsedErrors.reduce((acc, v) => acc + v * v, 0) / n);
  const sqrtNMae = Math.sqrt(n) * mae;

  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-950 dark:text-purple-300">
          Interactive practice labs created for this platform (derived from NPTEL LPP Notes)
        </div>
        <h1 className="mt-2 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
          <Cpu className="h-6 w-6 text-sky-600" />
          LP Interactive Workbench
        </h1>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          { id: 'graphical' as const, label: '1. Graphical & Resource Allocation Lab' },
          { id: 'duality' as const, label: '2. Duality & Complementary Slackness' },
          { id: 'l1' as const, label: '3. ML L1 Regression (MAE vs RMSE)' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveLab(tab.id)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium ${
              activeLab === tab.id
                ? 'border-sky-600 bg-sky-600 text-white'
                : 'border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeLab === 'graphical' && (
        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">
              Brewery Problem (Lecture 1, pp. 1–2)
            </h2>
            <button
              onClick={() => {
                setX(12);
                setY(28);
              }}
              className="inline-flex items-center gap-1 text-xs text-sky-600 hover:underline"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset to Optimal (12, 28)
            </button>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <MathText text="Maximize $15x + 20y$ subject to $5x + 15y \le 480$, $4x + 4y \le 160$, $35x + 20y \le 1190$, $x, y \ge 0$." />
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                Dark Beer $x$ = {x} L
              </label>
              <input
                type="range"
                min={0}
                max={40}
                value={x}
                onChange={(e) => setX(Number(e.target.value))}
                className="mt-1 w-full"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                Light Beer $y$ = {y} L
              </label>
              <input
                type="range"
                min={0}
                max={40}
                value={y}
                onChange={(e) => setY(Number(e.target.value))}
                className="mt-1 w-full"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-4 text-xs">
            <div className={`rounded-lg p-3 ${cornOk ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300' : 'bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300'}`}>
              Corn: {5 * x + 15 * y} / 480 {cornOk ? '✓' : '✗'}
            </div>
            <div className={`rounded-lg p-3 ${hopsOk ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300' : 'bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300'}`}>
              Hops: {4 * x + 4 * y} / 160 {hopsOk ? '✓' : '✗'}
            </div>
            <div className={`rounded-lg p-3 ${barleyOk ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300' : 'bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300'}`}>
              Barley: {35 * x + 20 * y} / 1190 {barleyOk ? '✓' : '✗'}
            </div>
            <div className={`rounded-lg p-3 font-semibold ${feasible ? 'bg-sky-50 text-sky-900 dark:bg-sky-950/40 dark:text-sky-200' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'}`}>
              Profit: ₹{profit} ({feasible ? 'Feasible' : 'Infeasible'})
            </div>
          </div>
        </div>
      )}

      {activeLab === 'duality' && (
        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 space-y-3">
          <h2 className="font-semibold text-slate-900 dark:text-slate-100">
            Primal–Dual Pair & Complementary Slackness (Lecture 3, pp. 8–9)
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 text-sm">
            <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-950">
              <div className="text-xs font-semibold uppercase text-slate-500">Primal LP</div>
              <MathText text="$$\max c^T x \quad \text{s.t. } Ax \le b,\; x \ge 0$$" />
            </div>
            <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-950">
              <div className="text-xs font-semibold uppercase text-slate-500">Dual LP</div>
              <MathText text="$$\min b^T y \quad \text{s.t. } A^T y \ge c,\; y \ge 0$$" />
            </div>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            <MathText text="Weak duality: $c^T x \le y^T A x \le y^T b$. At optimality, $(A^T y^* - c)^T x^* = 0$ and $(Ax^* - b)^T y^* = 0$." />
          </p>
        </div>
      )}

      {activeLab === 'l1' && (
        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 space-y-4">
          <h2 className="font-semibold text-slate-900 dark:text-slate-100">
            MAE vs RMSE Inequality Verifier (Lecture 7, Exercise 14, p. 6)
          </h2>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
              Residual errors $(y_i - x_i)$ comma-separated:
            </label>
            <input
              type="text"
              value={errorsInput}
              onChange={(e) => setErrorsInput(e.target.value)}
              className="mt-1 w-full max-w-md rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm dark:border-slate-700 dark:bg-slate-950"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-3 text-sm">
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-950">
              <div className="text-xs text-slate-500">MAE</div>
              <div className="text-lg font-bold">{mae.toFixed(4)}</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-950">
              <div className="text-xs text-slate-500">RMSE</div>
              <div className="text-lg font-bold">{rmse.toFixed(4)}</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-950">
              <div className="text-xs text-slate-500">√n · MAE (n={n})</div>
              <div className="text-lg font-bold">{sqrtNMae.toFixed(4)}</div>
            </div>
          </div>
          <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
            Verified: {mae.toFixed(4)} ≤ {rmse.toFixed(4)} ≤ {sqrtNMae.toFixed(4)}
          </p>
        </div>
      )}
    </div>
  );
}
