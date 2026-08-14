"use client";

import Link from "next/link";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-500 relative overflow-hidden select-none" suppressHydrationWarning>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-8">
          
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-none">
              Background &amp; Expertise
            </h2>
            <div className="h-1.5 w-20 bg-blue-700 dark:bg-blue-400 rounded-full" />
          </div>

          <div className="space-y-6 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            <p>
              I am currently pursuing a Bachelor of Science in Computer Science with a Minor in Data Science at BINUS University. My engineering approach combines quantitative data analytics with business strategic thinking.
            </p>
            <p>
              Over the past 4+ years, I have architected 50+ software systems ranging from full-stack web applications, cross-platform mobile apps, cloud-native microservices, to custom AI LLM pipelines and machine learning classifiers.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-blue-700 dark:hover:bg-blue-400 transition-all shadow-sm"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider hover:border-blue-700 transition-all shadow-sm"
            >
              Contact Me
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
