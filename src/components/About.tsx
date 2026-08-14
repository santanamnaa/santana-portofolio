export const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-extrabold uppercase tracking-widest text-blue-500 dark:text-blue-400">
            01. Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-2 tracking-tight">
            Computer Science & Minor Data Science Student at BINUS University
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Story & Dual Mindset */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-base">
            <p className="text-lg text-slate-900 dark:text-white font-semibold leading-relaxed">
              I am currently pursuing a Bachelor of Science in Computer Science with a Minor in Data Science at BINUS University (Bandung). My engineering approach combines quantitative data analytics with business strategic thinking.
            </p>
            <p>
              I believe that impactful technology starts with a deep understanding of business requirements. As Co-Founder and Technical Lead at TSP Digital, I have led cross-functional engineering teams to design, develop, and deliver 10+ commercial applications with a 100% on-time project delivery record.
            </p>
            <p>
              Whether structuring PostgreSQL database relations for enterprise HRMS and audit trail systems, engineering low-latency edge computer vision models, or building custom Retrieval-Augmented Generation (RAG) AI agents, I focus on delivering real business impact and 99.9% uptime reliability.
            </p>

            {/* Core Competencies */}
            <div className="pt-2">
              <div className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Core Engineering Capabilities
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Computer Science & Data Science Minor",
                  "SAP Analytics Cloud Certified",
                  "Google AI Professional Certified",
                  "Custom RAG Architecture (LangGraph)",
                  "Edge AIoT Computer Vision (YOLOv8)",
                  "PostgreSQL & Vector Database Schemas",
                  "Full-Stack Web (React 19, Next.js, Nuxt 3)",
                  "Business Requirement Specs (DCS & SOW)"
                ].map((tag, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Highlights Card Block */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Highlight Box 1 */}
            <div className="p-6 rounded-2xl bg-blue-50/80 dark:bg-slate-900/90 backdrop-blur-xl border border-blue-200/80 dark:border-blue-500/30 blue-card-glow shadow-sm">
              <div className="text-xs font-black uppercase text-blue-700 dark:text-blue-400 tracking-wider mb-2">
                Academic Excellence
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                BINUS Outstanding Student Award Recipient
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Recognized by BINUS University for academic achievement in Computer Science and leadership in real-world technology projects.
              </p>
            </div>

            {/* Highlight Box 2 */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 blue-card-glow shadow-sm">
              <div className="text-xs font-black uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">
                Research & Conference (ICISS 2026)
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Published International Conference Author
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Co-authored research presented at ICISS 2026 for MSME digital platform MyLinx, achieving an evaluated System Usability Scale (SUS) score of 85.0 ("Excellent").
              </p>
            </div>

            {/* Highlight Box 3 */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 blue-card-glow shadow-sm">
              <div className="text-xs font-black uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">
                Journal Citation (Joecy 2025)
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                EaseNeura Research Citation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                EaseNeura mental health repository project officially cited in Journal of Innovative and Creativity (Joecy) Vol. 5 No. 2 (2025).
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
