import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { GitHubContributions } from "@/components/GitHubContributions";

export default function Home() {
  return (
    <div suppressHydrationWarning className="min-h-screen bg-slate-50 dark:bg-zinc-900 text-slate-900 dark:text-gray-100 transition-colors duration-500 font-sans">
      <Navbar />

      <main suppressHydrationWarning>
        <Hero />

        {/* saugi.me Template Styled Minimalist About Section with Profile Photo */}
        <section id="about" className="py-12 px-4 border-t border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="container mx-auto max-w-[65ch]">
            <div className="prose dark:prose-invert max-w-none text-base leading-relaxed text-slate-700 dark:text-gray-300 space-y-5">
              
              {/* Profile Photo */}
              <div className="flex justify-center mb-6">
                <img
                  src="/images/pas_foto.jpg"
                  alt="Santana Mena"
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-slate-200 dark:border-zinc-700 shadow-sm"
                />
              </div>

              <h1 className="text-center text-3xl font-bold text-slate-900 dark:text-white font-heading mb-6">
                Santana Mena
              </h1>

              <p>
                Hi, I am <strong>Santana Mena</strong>, a Software Developer, AI Engineer, and Business Analyst based in Indonesia. Currently studying Computer Science with a Minor in Data Science at <strong>BINUS University</strong>.
              </p>

              <p>
                I build web platforms, mobile applications, AI systems, and business technology solutions using React, Next.js, Node.js, Python, SQL, and enterprise analytics tools.
              </p>

              <p>
                Feel free to check out my <Link href="/projects" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">projects</Link> or view my <Link href="/achievements" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">achievements</Link>.
              </p>

              {/* Live GitHub Green Contribution Calendar Component */}
              <GitHubContributions />

              <hr className="w-24 mx-auto border-t border-slate-200 dark:border-zinc-700 my-8" />

              <p className="text-center text-sm text-slate-600 dark:text-gray-400">
                You can <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">reach me here</Link>.
              </p>

            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs text-slate-500 dark:text-zinc-500 border-t border-slate-200/80 dark:border-zinc-800">
        &copy; {new Date().getFullYear()} Santana Mena.
      </footer>
    </div>
  );
}
