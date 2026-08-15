"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "./Navbar";

interface DirectPDFViewProps {
  title: string;
  pdfFileName: string;
}

export const DirectPDFView = ({ title, pdfFileName }: DirectPDFViewProps) => {
  const [activeTab, setActiveTab] = useState<"document" | "preview">("document");
  const pdfPath = `/cv/${pdfFileName}`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 text-slate-900 dark:text-gray-100 transition-colors duration-500 font-sans" suppressHydrationWarning>
      <Navbar />

      <main className="py-8 sm:py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Header Card */}
          <div className="bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 rounded-2xl p-5 sm:p-8 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                  Curriculum Vitae &middot; Official Document
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-heading">
                  Santana Mena &mdash; {title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 mt-1">
                  Software Engineer &middot; Computer Science (Minor in Data Science) @ BINUS University
                </p>
              </div>

              {/* Download Action Button */}
              <div className="shrink-0 flex items-center gap-2">
                <a
                  href={pdfPath}
                  download={pdfFileName}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs hover:bg-blue-600 dark:hover:bg-slate-200 transition-all shadow-sm inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download Official PDF</span>
                </a>
              </div>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-zinc-700/60">
              <button
                onClick={() => setActiveTab("document")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === "document"
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950"
                    : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Readable View
              </button>
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === "preview"
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950"
                    : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                PDF View
              </button>
            </div>
          </div>

          {/* Tab 1: Readable Document View (100% Mobile Responsive, Zero Cutoff) */}
          {activeTab === "document" && (
            <div className="bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
              
              {/* Summary Section */}
              <div className="space-y-2 pb-6 border-b border-slate-100 dark:border-zinc-700/60">
                <h2 className="text-xs font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  Professional Summary
                </h2>
                <p className="text-sm text-slate-700 dark:text-gray-200 leading-relaxed font-sans">
                  Versatile and performance-driven <strong>Software Engineer</strong> and Computer Science student (Minor in Data Science) at BINUS University, certified <strong>Google AI Professional</strong> and <strong>SAP Analytics Cloud</strong>. Proficient in full-stack web and mobile development, backend API design, relational database schemas, frontend frameworks (React, Next.js, Vue, Nuxt 3, Tailwind CSS), and containerized DevOps (Docker).
                </p>
              </div>

              {/* Technical Skills */}
              <div className="space-y-3 pb-6 border-b border-slate-100 dark:border-zinc-700/60">
                <h2 className="text-xs font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50 dark:bg-zinc-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-zinc-700/60">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">Languages:</span>
                    <span className="text-slate-600 dark:text-gray-300">TypeScript, JavaScript, Python, C++, Java, Dart, SQL, HTML5/CSS3</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-zinc-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-zinc-700/60">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">Frontend & Mobile:</span>
                    <span className="text-slate-600 dark:text-gray-300">React.js, Next.js, Vue.js, Nuxt 3, Flutter, React Native (Expo), Tailwind CSS</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-zinc-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-zinc-700/60">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">Backend & APIs:</span>
                    <span className="text-slate-600 dark:text-gray-300">Node.js (Express), FastAPI, Django, Flask, REST API Design, OpenAPI/Swagger</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-zinc-900/60 p-3 rounded-xl border border-slate-200/80 dark:border-zinc-700/60">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">Databases & DevOps:</span>
                    <span className="text-slate-600 dark:text-gray-300">PostgreSQL, MySQL, MongoDB, Docker, Git, Vercel, CI/CD, Jest, Playwright</span>
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="space-y-4 pb-6 border-b border-slate-100 dark:border-zinc-700/60">
                <h2 className="text-xs font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  Professional Experience
                </h2>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                      <span className="font-bold text-slate-900 dark:text-white text-sm">Co-Founder & Technical Lead &middot; TSP Digital</span>
                      <span className="text-slate-500 font-mono text-[11px]">Bandung, Indonesia | Aug 2025 &ndash; Present</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                      Led cross-functional team of 4 engineers to design, build, and deploy 10+ web and mobile applications with 100% on-time delivery. Architected backend microservices and custom RAG engines using Python, FastAPI, and Docker.
                    </p>
                  </div>

                  <div className="space-y-1 pt-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                      <span className="font-bold text-slate-900 dark:text-white text-sm">Full-Stack Developer (Contract) &middot; PT Aitiserve Djaya Naraya</span>
                      <span className="text-slate-500 font-mono text-[11px]">Bandung, Indonesia | Jan 2026 &ndash; Mar 2026</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                      Developed official corporate web platforms using React, Next.js, and TypeScript. Optimized frontend builds and Next.js API hooks, resulting in a 30% reduction in initial bundle load times.
                    </p>
                  </div>

                  <div className="space-y-1 pt-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                      <span className="font-bold text-slate-900 dark:text-white text-sm">Full-Stack Developer Intern &middot; PT Gunung Amal Solution Internationals</span>
                      <span className="text-slate-500 font-mono text-[11px]">Bandung, Indonesia | Feb 2025 &ndash; Feb 2026</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                      Built internal HRMS and Project Management System using Node.js (Express) and PostgreSQL database. Configured containerized staging environments using Docker.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Achievements */}
              <div className="space-y-2">
                <h2 className="text-xs font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  Education & Honors
                </h2>
                <div className="text-xs text-slate-700 dark:text-gray-300 space-y-1">
                  <p className="font-bold text-slate-900 dark:text-white text-sm">BINUS University &mdash; Bachelor of Science in Computer Science (Minor in Data Science)</p>
                  <p className="text-slate-600 dark:text-gray-400">&bull; BINUS Outstanding Student Award Recipient</p>
                  <p className="text-slate-600 dark:text-gray-400">&bull; ICPC Asia Jakarta Regional Contest 2024 Competitor</p>
                  <p className="text-slate-600 dark:text-gray-400">&bull; ICP Chain Fusion Hacker House 2024 Finalist (Bali)</p>
                  <p className="text-slate-600 dark:text-gray-400">&bull; SAP Analytics Cloud Certified Specialist &middot; Google AI Professional Certificate</p>
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Embedded PDF View */}
          {activeTab === "preview" && (
            <div className="bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 rounded-2xl p-2 sm:p-4 shadow-sm overflow-hidden">
              <div className="w-full h-[650px] sm:h-[800px] rounded-xl overflow-hidden bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-700">
                <iframe
                  src={`${pdfPath}#toolbar=0`}
                  className="w-full h-full border-none"
                  title={`${title} CV PDF Preview`}
                />
              </div>
            </div>
          )}

          {/* Bottom Navigation Link */}
          <div className="text-center pt-4">
            <Link
              href="/projects"
              className="text-xs text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors"
            >
              &larr; View Featured Engineering Projects
            </Link>
          </div>

        </div>
      </main>

      <footer className="py-8 text-center text-xs text-slate-500 dark:text-zinc-500 border-t border-slate-200/80 dark:border-zinc-800">
        &copy; {new Date().getFullYear()} Santana Mena. Designed with saugi.me template aesthetics.
      </footer>
    </div>
  );
};
