"use client";

import React from "react";
import Link from "next/link";

interface DirectPDFViewProps {
  title: string;
  pdfFileName: string;
}

export const DirectPDFView = ({ title, pdfFileName }: DirectPDFViewProps) => {
  const pdfPath = `/cv/${pdfFileName}`;

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col font-sans" suppressHydrationWarning>
      
      {/* Top Floating Control Bar - Minimalist Monochrome Dark */}
      <header className="sticky top-0 z-50 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800/80 px-4 py-3 sm:px-6 flex items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/cv"
            className="p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors text-xs sm:text-sm font-medium flex items-center gap-1.5 shrink-0 border border-zinc-700/60"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="hidden sm:inline">Back</span>
          </Link>

          <div className="min-w-0">
            <h1 className="text-sm sm:text-base font-bold text-white tracking-tight truncate font-heading">
              {title} CV
            </h1>
            <p className="text-[11px] text-zinc-400 truncate hidden sm:block">
              Santana Mena &middot; {pdfFileName}
            </p>
          </div>
        </div>

        {/* Action Buttons: Open & Download (Monochrome, No AI Blue) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs sm:text-sm font-medium transition-colors border border-zinc-700 inline-flex items-center gap-1.5"
          >
            <span>Open PDF</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            href={pdfPath}
            download={pdfFileName}
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs sm:text-sm font-semibold transition-colors shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download CV</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full flex flex-col p-2 sm:p-4 max-w-7xl mx-auto">
        
        {/* Mobile Action Card */}
        <div className="block sm:hidden bg-zinc-900 border border-zinc-800 rounded-xl p-3 mb-3 text-center">
          <p className="text-xs text-zinc-300 mb-2">
            Viewing <strong>{title} CV</strong>
          </p>
          <div className="flex gap-2 justify-center">
            <a
              href={pdfPath}
              download={pdfFileName}
              className="px-4 py-2 bg-white text-zinc-950 text-xs font-bold rounded-xl shadow-xs w-full text-center"
            >
              Download PDF ({pdfFileName})
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full min-h-[75vh] sm:min-h-[85vh] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl relative">
          <iframe
            src={pdfPath}
            className="w-full h-full min-h-[75vh] sm:min-h-[85vh] border-none"
            title={`${title} CV PDF`}
          />
        </div>

      </main>

    </div>
  );
};
