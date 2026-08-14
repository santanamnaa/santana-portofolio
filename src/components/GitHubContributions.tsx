"use client";

import React, { useEffect, useState } from "react";

interface ContributionData {
  total: Record<string, number>;
  contributions: Array<{
    date: string;
    count: number;
    level: number;
  }>;
}

export const GitHubContributions = () => {
  const [totalCount, setTotalCount] = useState<number | null>(449);
  const [yearlyCounts, setYearlyCounts] = useState<Record<string, number>>({
    "2024": 125,
    "2025": 262,
    "2026": 42,
  });

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/santanamnaa")
      .then((res) => res.json())
      .then((resData) => {
        if (resData && resData.total) {
          const sum = Object.values(resData.total as Record<string, number>).reduce(
            (acc, curr) => acc + curr,
            0
          );
          setTotalCount(sum);
          setYearlyCounts(resData.total);
        }
      })
      .catch(() => {
        // Fallback gracefully
      });
  }, []);

  return (
    <div className="w-full pt-6 pb-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400">
          GitHub Activity &amp; Contributions
        </div>
        <a
          href="https://github.com/santanamnaa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{totalCount !== null ? `${totalCount} Total Commits` : "Active Contributor"}</span>
        </a>
      </div>

      {/* GitHub Green Grid SVG Embed Container */}
      <div className="overflow-x-auto scrollbar-none p-4 rounded-xl bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/80 shadow-xs flex flex-col items-center gap-3">
        <a
          href="https://github.com/santanamnaa"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-full overflow-hidden text-center"
        >
          {/* Light Mode SVG (Vibrant Emerald) */}
          <img
            src="https://ghchart.rshah.org/16a34a/santanamnaa"
            alt="Santana Mena's GitHub Contributions Calendar"
            className="w-full h-auto min-w-[650px] mx-auto dark:hidden"
            loading="lazy"
          />
          {/* Dark Mode SVG (Bright Neon Green) */}
          <img
            src="https://ghchart.rshah.org/22c55e/santanamnaa"
            alt="Santana Mena's GitHub Contributions Calendar"
            className="w-full h-auto min-w-[650px] mx-auto hidden dark:block"
            loading="lazy"
          />
        </a>

        <div className="w-full flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400 border-t border-slate-200/60 dark:border-zinc-700/60 pt-2 px-1">
          <span>Tracked public &amp; open-source repositories</span>
          <a
            href="https://github.com/santanamnaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white font-medium"
          >
            github.com/santanamnaa &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};
