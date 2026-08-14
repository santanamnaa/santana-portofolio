"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { CVPreviewModal } from "./CVPreviewModal";

export interface RolePortfolioProps {
  roleTitle: string;
  roleSubtitle: string;
  cvFileName: string;
  summary: string;
  competencies: string[];
  heroVariant?: "software-engineer" | "business-analyst" | "ai-engineer" | "data-analyst";
  keyProjects: {
    title: string;
    metrics: string;
    description: string;
    stack: string[];
    link?: string;
  }[];
  experienceHighlights: {
    company: string;
    period: string;
    role: string;
    contribution: string;
  }[];
}

export const RolePortfolioView = ({
  roleTitle,
  roleSubtitle,
  cvFileName,
  summary,
  competencies,
  keyProjects,
  experienceHighlights,
}: RolePortfolioProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const cvPath = `/cv/${cvFileName}`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 text-slate-900 dark:text-gray-100 transition-colors duration-500 font-sans" suppressHydrationWarning>
      <Navbar />

      <main className="py-16 px-4">
        <div className="max-w-[75ch] mx-auto space-y-10">
          
          <div className="space-y-4 pb-6 border-b border-slate-200/80 dark:border-zinc-800">
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <Link href="/" className="hover:underline">Home</Link> / Role Profile
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
              {roleTitle}
            </h1>

            <p className="text-sm font-semibold text-slate-600 dark:text-gray-300">
              {roleSubtitle}
            </p>

            <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed pt-2">
              {summary}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-xs hover:bg-blue-600 dark:hover:bg-blue-400 transition-colors shadow-xs"
              >
                Preview {roleTitle} CV
              </button>
              <a
                href={cvPath}
                download
                className="px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-zinc-700 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-zinc-700 transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
              Core Competencies
            </h2>
            <div className="flex flex-wrap gap-2">
              {competencies.map((comp, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-zinc-700/80 text-xs font-medium"
                >
                  {comp}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
              Key Projects
            </h2>

            <div className="space-y-4">
              {keyProjects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white font-heading">
                      {proj.title}
                    </h3>
                    <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
                      {proj.metrics}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.stack.map((st, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-700 text-slate-700 dark:text-gray-300 text-[10px] font-medium"
                      >
                        {st}
                      </span>
                    ))}
                  </div>

                  {proj.link && (
                    <div className="pt-1">
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
                      >
                        View Project
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
              Experience
            </h2>

            <div className="space-y-4">
              {experienceHighlights.map((exp, idx) => (
                <div
                  key={idx}
                  className="pb-4 border-b border-slate-100 dark:border-zinc-800 space-y-1"
                >
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-bold text-slate-900 dark:text-white">{exp.role}</span>
                    <span className="text-slate-400 font-mono">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                    {exp.contribution}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <hr className="w-24 mx-auto border-t border-slate-200 dark:border-zinc-700 my-8" />

          <div className="text-center pt-2">
            <p className="text-sm text-slate-600 dark:text-gray-400">
              Want to check all projects?{" "}
              <Link href="/projects" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Explore Projects
              </Link>
            </p>
          </div>

        </div>
      </main>

      <footer className="py-8 text-center text-xs text-slate-500 dark:text-zinc-500 border-t border-slate-200/80 dark:border-zinc-800">
        &copy; {new Date().getFullYear()} Santana Mena.
      </footer>

      <CVPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        cvPath={cvPath}
        roleTitle={roleTitle}
      />
    </div>
  );
};
