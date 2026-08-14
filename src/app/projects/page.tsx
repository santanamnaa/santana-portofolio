"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/Card";
import { projectsData } from "@/data/projectsData";

const categories = [
  "All",
  "Web Development",
  "AI & Machine Learning",
  "Mobile App",
  "Data & Cloud",
  "System & Utilities"
] as const;

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredProjects = activeTab === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 text-slate-900 dark:text-gray-100 transition-colors duration-500 font-sans" suppressHydrationWarning>
      <Navbar />

      <section className="py-12 px-3 lg:px-0">
        <div className="max-w-[75ch] mx-auto">
          
          <h1 className="text-3xl font-bold text-center mb-6 text-slate-900 dark:text-white font-heading">
            My Projects
          </h1>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeTab === cat
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold"
                    : "bg-white dark:bg-zinc-800 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-zinc-700/60 hover:border-slate-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Cards Grid matching saugi.me */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                github={project.github_url}
                demo={project.demo_url}
                image={project.image}
                opensource={project.opensource}
                stacks={project.technologies}
                category={project.category}
              />
            ))}
          </div>

        </div>
      </section>

      <footer className="py-8 text-center text-xs text-slate-500 dark:text-zinc-500 border-t border-slate-200/80 dark:border-zinc-800">
        &copy; {new Date().getFullYear()} Santana Mena.
      </footer>
    </div>
  );
}
