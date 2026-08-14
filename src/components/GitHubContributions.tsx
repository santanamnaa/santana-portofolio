"use client";

import React, { useEffect, useState } from "react";

export const GitHubContributions = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2026");
  const [tableHtml, setTableHtml] = useState<string>("");
  const [totalCount, setTotalCount] = useState<string>("884");

  const years = ["2026", "2025", "2024", "2023", "2022"];

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((res) => res.json())
      .then((data) => {
        if (data.tableHtml) {
          setTableHtml(data.tableHtml);
          if (data.totalCount && data.totalCount !== "172") {
            setTotalCount(data.totalCount);
          }
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="w-full pt-6 pb-2 font-sans select-none">
      
      {/* Custom CSS overrides for official GitHub Calendar HTML Table */}
      <style jsx global>{`
        .github-calendar-table table {
          border-collapse: separate !important;
          border-spacing: 3px !important;
          margin: 0 auto !important;
        }
        .github-calendar-table td.ContributionCalendar-day,
        .github-calendar-table rect.ContributionCalendar-day {
          rx: 2px !important;
          ry: 2px !important;
          width: 10px !important;
          height: 10px !important;
        }
        .github-calendar-table td[data-level="0"],
        .github-calendar-table rect[data-level="0"] {
          fill: #161b22 !important;
          background-color: #161b22 !important;
        }
        .github-calendar-table td[data-level="1"],
        .github-calendar-table rect[data-level="1"] {
          fill: #0e4429 !important;
          background-color: #0e4429 !important;
        }
        .github-calendar-table td[data-level="2"],
        .github-calendar-table rect[data-level="2"] {
          fill: #006d32 !important;
          background-color: #006d32 !important;
        }
        .github-calendar-table td[data-level="3"],
        .github-calendar-table rect[data-level="3"] {
          fill: #26a641 !important;
          background-color: #26a641 !important;
        }
        .github-calendar-table td[data-level="4"],
        .github-calendar-table rect[data-level="4"] {
          fill: #39d353 !important;
          background-color: #39d353 !important;
        }
        .github-calendar-table text,
        .github-calendar-table .ContributionCalendar-label {
          fill: #8b949e !important;
          color: #8b949e !important;
          font-size: 10px !important;
        }
        .github-calendar-table .sr-only {
          display: none !important;
        }
      `}</style>

      <div className="flex flex-col md:flex-row gap-4 items-start">
        
        {/* Main Contribution Card (GitHub Dark Theme Styled) */}
        <div className="flex-1 w-full p-5 rounded-xl bg-[#0d1117] border border-[#30363d] text-white shadow-lg">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-medium text-[#c9d1d9]">
              <span className="font-semibold text-white">{totalCount} contributions</span> in the last year
            </h3>
            <div className="text-xs text-[#8b949e] font-medium hidden sm:flex items-center gap-1">
              <span>Contribution settings</span>
              <span className="text-[10px]">▼</span>
            </div>
          </div>

          {/* Grid Container */}
          <div className="overflow-x-auto scrollbar-none pb-2">
            <div className="min-w-[660px] flex justify-center">
              {tableHtml ? (
                <div
                  className="github-calendar-table w-full overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: tableHtml }}
                />
              ) : (
                <div className="py-8 text-xs text-[#8b949e] animate-pulse">
                  Loading live GitHub contribution graph...
                </div>
              )}
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

        {/* Right Sidebar Year Buttons */}
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
