"use client";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative select-none" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
              Contact &amp; Inquiries
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              Available for full-time corporate roles, engineering contracts, and specialized technical consultancies. Willing to relocate or work remotely.
            </p>

            <div className="space-y-3 pt-4 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-700 dark:bg-blue-400" />
                <div>Email: santanamnaa.dev@gmail.com</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-700 dark:bg-blue-400" />
                <div>Phone / WhatsApp: +62 823-2187-9086</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-700 dark:bg-blue-400" />
                <div>Location: Bandung, Indonesia (Willing to Relocate)</div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Links Box */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-md space-y-6">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">
              Official Profiles &amp; Portfolios
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://linkedin.com/in/santana-mena"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-extrabold text-xs uppercase tracking-wider hover:border-blue-700 transition-all text-center block shadow-sm"
              >
                LinkedIn Profile ↗
              </a>
              <a
                href="https://github.com/santanamnaa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-extrabold text-xs uppercase tracking-wider hover:border-blue-700 transition-all text-center block shadow-sm"
              >
                GitHub Profile ↗
              </a>
              <a
                href="https://santanamnaa.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-extrabold text-xs uppercase tracking-wider hover:border-blue-700 transition-all text-center block shadow-sm"
              >
                Personal Website ↗
              </a>
              <a
                href="mailto:santanamnaa.dev@gmail.com"
                className="p-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:bg-blue-700 dark:hover:bg-blue-400 transition-all text-center block shadow-md"
              >
                Send Direct Email ✉
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer Line */}
        <div className="pt-16 mt-16 border-t border-slate-200/80 dark:border-slate-800 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
          <p>© 2026 Santana Mena. Computer Science &amp; Data Science Engineer.</p>
        </div>
      </div>
    </section>
  );
};
