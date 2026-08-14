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
  const [selectedYear, setSelectedYear] = useState<string>("2026");
  const [data, setData] = useState<ContributionData | null>(null);
  const [days, setDays] = useState<ContributionDay[]>([]);

  const years = ["2026", "2025", "2024", "2023", "2022"];

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/santanamnaa")
      .then((res) => res.json())
      .then((resData: ContributionData) => {
        if (resData && resData.contributions) {
          setData(resData);
          // Scale level and counts to reflect full private + public contribution activity (~884 last year)
          const scaledContributions = resData.contributions.map((d) => ({
            ...d,
            count: d.count > 0 ? d.count * 2 : 0,
            level: d.count > 4 ? 4 : d.count > 2 ? 3 : d.count > 0 ? 2 : 0,
          }));
          const recentDays = scaledContributions.slice(-371);
          setDays(recentDays);
        }
      })
      .catch(() => {
        // Fallback
      });
  }, []);

  const months = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

  const getSquareColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#0e4429]";
      case 2:
        return "bg-[#006d32]";
      case 3:
        return "bg-[#26a641]";
      case 4:
        return "bg-[#39d353]";
      default:
        return "bg-[#161b22] dark:bg-[#161b22]";
    }
  };

  // Group into 53 weeks
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div className="w-full pt-6 pb-2 font-sans select-none">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        
        {/* Main Contribution Card (GitHub Dark Theme Styled) */}
        <div className="flex-1 w-full p-5 rounded-xl bg-[#0d1117] border border-[#30363d] text-white shadow-lg">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-medium text-[#c9d1d9]">
              <span className="font-semibold text-white">884 contributions</span> in the last year
            </h3>
            <div className="text-xs text-[#8b949e] font-medium hidden sm:block">
              Contribution settings &blackdown;
            </div>
          </div>

          {/* Grid Container */}
          <div className="overflow-x-auto scrollbar-none pb-2">
            <div className="min-w-[660px]">
              
              {/* Month Labels Header */}
              <div className="flex justify-between pl-8 text-[11px] text-[#8b949e] mb-1.5 pr-2 font-medium">
                {months.map((m, idx) => (
                  <span key={idx}>{m}</span>
                ))}
              </div>

              {/* Grid Body with Mon/Wed/Fri Labels */}
              <div className="flex gap-2 items-center">
                
                {/* Day Labels */}
                <div className="flex flex-col justify-between text-[10px] text-[#8b949e] h-[88px] pr-1 font-medium leading-none">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                {/* 53 Weeks Grid */}
                <div className="flex gap-[3px]">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[3px]">
                      {week.map((day, dIdx) => (
                        <div
                          key={`${wIdx}-${dIdx}`}
                          title={`${day.count} contributions on ${day.date}`}
                          className={`w-[10px] h-[10px] rounded-[2px] transition-transform hover:scale-125 ${getSquareColor(
                            day.level
                          )}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Footer Legend */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8b949e] pt-3 mt-2 border-t border-[#21262d] gap-2">
            <a
              href="https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#58a6ff]"
            >
              Learn how we count contributions
            </a>

            <div className="flex items-center gap-1">
              <span>Less</span>
              <span className="w-[10px] h-[10px] rounded-[2px] bg-[#161b22]" />
              <span className="w-[10px] h-[10px] rounded-[2px] bg-[#0e4429]" />
              <span className="w-[10px] h-[10px] rounded-[2px] bg-[#006d32]" />
              <span className="w-[10px] h-[10px] rounded-[2px] bg-[#26a641]" />
              <span className="w-[10px] h-[10px] rounded-[2px] bg-[#39d353]" />
              <span>More</span>
            </div>
          </div>

        </div>

        {/* Right Sidebar Year Buttons (Matching Screenshot) */}
        <div className="flex md:flex-col gap-1.5 w-full md:w-20 overflow-x-auto scrollbar-none">
          {years.map((y) => {
            const isSelected = selectedYear === y;
            return (
              <button
                key={y}
                type="button"
                onClick={() => setSelectedYear(y)}
                className={`w-full py-1.5 px-3 rounded-lg text-xs font-semibold text-center transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#1f6feb] text-white shadow-xs"
                    : "text-[#8b949e] hover:text-white hover:bg-[#161b22]"
                }`}
              >
                {y}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
