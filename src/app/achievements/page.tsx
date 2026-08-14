import React from "react";
import { Navbar } from "@/components/Navbar";
import { achievementsData } from "@/data/achievementsData";

export const metadata = {
  title: "Achievements | Santana Mena",
  description: "Achievements and honors of Santana Mena.",
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 text-slate-900 dark:text-gray-100 transition-colors duration-500 font-sans" suppressHydrationWarning>
      <Navbar />

      <section className="py-12 px-4">
        <div className="max-w-[65ch] mx-auto">
          
          <h1 className="text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white font-heading">
            My Achievements
          </h1>

          <ul className="pl-0 list-none space-y-8">
            {achievementsData.map((item) => (
              <li key={item.id} className="achievement-item">
                <span className="font-bold text-lg text-slate-900 dark:text-white font-heading block mb-1">
                  {item.title}
                </span>

                <div className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed space-y-1">
                  {item.description.split("\n").map((line, lIdx) => (
                    <p key={lIdx} className="m-0">
                      {line}
                    </p>
                  ))}
                  {item.link && (
                    <div className="pt-1">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Link
                      </a>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

        </div>
      </section>

      <footer className="py-8 text-center text-xs text-slate-500 dark:text-zinc-500 border-t border-slate-200/80 dark:border-zinc-800">
        &copy; {new Date().getFullYear()} Santana Mena.
      </footer>
    </div>
  );
}
