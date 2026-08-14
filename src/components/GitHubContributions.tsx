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
  const [data, setData] = useState<ContributionData | null>(null);
  const [totalCount, setTotalCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/santanamnaa")
      .then((res) => res.json())
      .then((resData) => {
        if (resData && resData.total) {
          setData(resData);
          const sum = Object.values(resData.total as Record<string, number>).reduce(
            (acc, curr) => acc + curr,
            0
          );
          setTotalCount(sum);
        }
      })
      .catch(() => {
        // Fallback gracefully
      });
  }, []);

  return (
    <div className="w-full pt-6 pb-2">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
          GitHub Contributions
        </div>
        {totalCount !== null && (
          <a
            href="https://github.com/santanamnaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            {totalCount.toLocaleString()} contributions
          </a>
        )}
      </div>

      {/* GitHub Green Grid SVG Embed Container */}
      <div className="overflow-x-auto scrollbar-none p-4 rounded-xl bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/80 shadow-xs flex justify-center items-center">
        <a
          href="https://github.com/santanamnaa"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-full overflow-hidden text-center"
        >
          <img
            src="https://ghchart.rshah.org/26a641/santanamnaa"
            alt="Santana Mena's GitHub Contributions Calendar"
            className="w-full h-auto min-w-[650px] mx-auto filter dark:invert-0 dark:hue-rotate-0"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};
