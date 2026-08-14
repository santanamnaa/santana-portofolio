"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

interface CVOption {
  id: string;
  title: string;
  subtitle: string;
  fileName: string;
  icon: string;
}

const cvOptions: CVOption[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    subtitle: "Full-Stack Web, Mobile & Cloud Systems",
    fileName: "CV_Santana_Mena_Software_Engineer.pdf",
    icon: "💻"
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    subtitle: "LLM Orchestration, RAG & ML Pipelines",
    fileName: "CV_Santana_Mena_AI_Engineer.pdf",
    icon: "🤖"
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    subtitle: "Requirements Gathering, BPMN & SAP Analytics",
    fileName: "CV_Santana_Mena_Business_Analyst.pdf",
    icon: "📊"
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    subtitle: "SQL Analytics, BigQuery & Data Cleansing",
    fileName: "CV_Santana_Mena_Data_Analyst.pdf",
    icon: "📈"
  }
];

export default function CVPage() {
  const [activeCV, setActiveCV] = useState<CVOption>(cvOptions[0]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 text-slate-900 dark:text-gray-100 transition-colors duration-500 font-sans" suppressHydrationWarning>
      <Navbar />

      <main className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Header section matching saugi.me prose style */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
              Curriculum Vitae
            </h1>
            <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
              Tailored professional resumes for Santana Mena. Select a role below to preview or download the official PDF document.
            </p>
          </div>

          {/* Role Switcher Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {cvOptions.map((option) => {
              const isSelected = activeCV.id === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => setActiveCV(option)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 border-slate-900 dark:border-white shadow-md font-semibold"
                      : "bg-white dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-zinc-700/70 hover:border-slate-400 dark:hover:border-zinc-500"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{option.icon}</span>
                    <span className="text-sm font-bold tracking-tight font-heading">{option.title}</span>
                  </div>
                  <div className={`text-[11px] leading-tight line-clamp-2 ${isSelected ? "text-slate-300 dark:text-slate-600" : "text-slate-500 dark:text-zinc-400"}`}>
                    {option.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active CV Document Action & Viewer Card */}
          <div className="bg-white dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 rounded-2xl p-4 sm:p-6 shadow-md space-y-6 max-w-4xl mx-auto">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-zinc-700">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{activeCV.icon}</span>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                    {activeCV.title} CV
                  </h2>
                </div>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  File: <code className="font-mono bg-slate-100 dark:bg-zinc-700 px-1.5 py-0.5 rounded text-[11px] text-slate-800 dark:text-slate-200">{activeCV.fileName}</code>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`/cv/${activeCV.fileName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-zinc-700 text-slate-900 dark:text-white border border-slate-300 dark:border-zinc-600 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-zinc-600 transition-colors inline-flex items-center gap-1.5"
                >
                  Open in New Tab ↗
                </a>

                <a
                  href={`/cv/${activeCV.fileName}`}
                  download={activeCV.fileName}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-xs inline-flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>

            {/* Embedded PDF Iframe Viewer */}
            <div className="w-full h-[650px] rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-700 bg-slate-100 dark:bg-zinc-900">
              <iframe
                src={`/cv/${activeCV.fileName}`}
                className="w-full h-full border-none"
                title={`${activeCV.title} CV Preview`}
              />
            </div>

          </div>

          <hr className="w-24 mx-auto border-t border-slate-200 dark:border-zinc-700 my-8" />

          <div className="text-center pt-2">
            <p className="text-sm text-slate-600 dark:text-gray-400">
              Looking for open-source engineering repositories?{" "}
              <Link href="/projects" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Explore My Projects ↗
              </Link>
            </p>
          </div>

        </div>
      </main>

      <footer className="py-8 text-center text-xs text-slate-500 dark:text-zinc-500 border-t border-slate-200/80 dark:border-zinc-800">
        &copy; {new Date().getFullYear()} Santana Mena. Designed with saugi.me template aesthetics.
      </footer>
    </div>
  );
}
