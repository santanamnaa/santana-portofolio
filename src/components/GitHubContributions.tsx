"use client";

import React, { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionData {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

export const GitHubContributions = () => {
  const [data, setData] = useState<ContributionData | null>(null);
  const [totalCount, setTotalCount] = useState<number>(449);
  const [days, setDays] = useState<ContributionDay[]>([]);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/santanamnaa")
      .then((res) => res.json())
      .then((resData: ContributionData) => {
        if (resData && resData.contributions) {
          setData(resData);
          const sum = Object.values(resData.total || {}).reduce(
            (acc, curr) => acc + curr,
            0
          );
          setTotalCount(sum > 0 ? sum : 449);

          // Get the last 53 weeks (371 days)
          const recentDays = resData.contributions.slice(-371);
          setDays(recentDays);
        }
      })
      .catch(() => {
        // Fallback
      });
  }, []);

  const getSquareColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-emerald-200 dark:bg-emerald-950 border border-emerald-300/40 dark:border-emerald-800/40";
      case 2:
        return "bg-emerald-400 dark:bg-emerald-700";
      case 3:
        return "bg-emerald-500 dark:bg-emerald-500";
      case 4:
        return "bg-emerald-600 dark:bg-emerald-400 shadow-xs shadow-emerald-400/50";
      default:
        return "bg-slate-200/70 dark:bg-zinc-800/90 border border-slate-300/30 dark:border-zinc-700/50";
    }
  };

  // Group days by week (7 days per week)
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div className="w-full pt-6 pb-2 select-none">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
          GitHub Activity &amp; Contributions
        </div>
        <a
          href="https://github.com/santanamnaa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{totalCount} Total Public Commits</span>
        </a>
      </div>

      {/* Transparent Dark/Light Adaptive Contribution Grid */}
      <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col gap-3">
        
        {days.length > 0 ? (
          <div className="overflow-x-auto scrollbar-none py-1">
            <div className="inline-flex gap-1 min-w-max">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1">
                  {week.map((day, dIdx) => (
                    <div
                      key={`${wIdx}-${dIdx}`}
                      title={`${day.count} contributions on ${day.date}`}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-xs transition-all duration-200 hover:scale-125 hover:z-10 ${getSquareColor(
                        day.level
                      )}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-6 text-center text-xs text-slate-500 dark:text-zinc-400 animate-pulse">
            Loading GitHub contribution history...
          </div>
        )}

        {/* Legend & Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400 gap-2 border-t border-slate-100 dark:border-zinc-800/80 pt-2 px-1">
          <div className="flex items-center gap-1">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-xs bg-slate-200 dark:bg-zinc-800" />
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-200 dark:bg-emerald-950" />
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400 dark:bg-emerald-700" />
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500 dark:bg-emerald-500" />
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600 dark:bg-emerald-400" />
            <span>More</span>
          </div>

          <a
            href="https://github.com/santanamnaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors"
          >
            github.com/santanamnaa &rarr;
          </a>
        </div>

      </div>
    </div>
  );
};
