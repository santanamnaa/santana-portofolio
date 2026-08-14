export const Experience = () => {
  const experiences = [
    {
      role: "Co-Founder & Technical Lead",
      company: "TSP Digital",
      period: "Aug 2025 – Jun 2026",
      location: "Bandung, Indonesia",
      type: "Leadership & Agency",
      metrics: "10+ Systems Delivered | 99.9% Uptime | 92% AI Match Accuracy",
      description: [
        "Led a cross-functional engineering team to architect, build, and deploy 10+ web and mobile platforms with a 100% on-time project delivery record.",
        "Architected custom RAG engines and multi-agent AI systems, including an AI Skill Gap Analyst using Python, LangGraph, spaCy, and Ollama to parse candidate CVs and map skill gaps with a 92% accuracy improvement.",
        "Engineered production RAG infrastructure utilizing TiDB Cloud Vector, DeepSeek LLM, Prometheus metrics, and Sentry error monitoring.",
        "Configured containerized microservices using Docker and Docker Compose, reducing server hosting overhead by 15%."
      ],
      skills: ["Python", "LangGraph", "TiDB Cloud Vector", "Docker", "FastAPI", "Prometheus", "Sentry"]
    },
    {
      role: "Lead Edge AIoT Engineer",
      company: "PT Lumina Media Digital (via TSP Digital)",
      period: "Jan 2026 – Jan 2026",
      location: "Bandung, Indonesia",
      type: "Contract Engineering",
      metrics: "30 FPS Edge Inference | Real-Time WebSockets Ingestion",
      description: [
        "Engineered an edge-based AIoT computer vision pipeline in Python using YOLOv8 optimized with Intel OpenVINO for real-time advertisement audience tracking on edge hardware.",
        "Integrated real-time GPS telemetry via PySerial and bi-directional WebSockets for live video payload ingestion into backend Django/FastAPI clusters.",
        "Maintained 30 FPS inference speed on low-power edge devices for vehicle and audience density detection."
      ],
      skills: ["YOLOv8", "Intel OpenVINO", "OpenCV", "PySerial", "WebSockets", "FastAPI", "Python"]
    },
    {
      role: "Full-Stack Developer & Business Analyst Intern",
      company: "PT Gunung Amal Solution Internationals",
      period: "Feb 2025 – Feb 2026",
      location: "Bandung, Indonesia",
      type: "Enterprise Internship",
      metrics: "Audit Trail Compliance System | PostgreSQL HRMS",
      description: [
        "Served as primary Business Analyst to design functional specifications, database query logic, and auditing tables for an enterprise Audit Trail Management System.",
        "Authored Statement of Work (SOW) and Detailed Complete Specification (DCS) documentation for company HRMS and project tracking platforms.",
        "Modeled database relations in PostgreSQL and set up containerized staging environments using Docker, streamlining developer onboarding."
      ],
      skills: ["PostgreSQL", "Node.js", "Express", "Docker", "SOW / DCS Specs", "Audit Compliance"]
    },
    {
      role: "Full-Stack & Systems Developer",
      company: "PT Aitiserve Djaya Naraya",
      period: "Jan 2026 – Mar 2026",
      location: "Bandung, Indonesia",
      type: "Contract Developer",
      metrics: "30% Bundle Load Time Reduction | High-Performance Python Utility",
      description: [
        "Developed responsive corporate web platforms and educational portals using React, Next.js, and TypeScript hosted on Vercel.",
        "Engineered a high-performance Python desktop utility automating document format conversions (DOCX to PDF), optimizing file IO performance under heavy loads.",
        "Optimized frontend builds and Next.js API hooks, resulting in a 30% reduction in initial bundle load times and higher Lighthouse scores."
      ],
      skills: ["React", "Next.js", "TypeScript", "Python", "Vercel", "Performance Tuning"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
            02. Proven Impact & Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            Commercial Experience & Company Systems
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Showcasing commercial engineering contracts, enterprise internships, and agency leadership with verifiable metrics.
          </p>
        </div>

        {/* Experience Grid Cards */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 blue-card-glow"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="text-xs font-black text-blue-600 uppercase tracking-widest">
                      0{idx + 1}
                    </div>
                    <div className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                      {exp.type}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-slate-600 mt-1 flex items-center gap-2">
                    <div>{exp.company}</div>
                    <div className="text-slate-400">|</div>
                    <div>{exp.location}</div>
                  </div>
                </div>

                <div className="text-left lg:text-right space-y-1">
                  <div className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {exp.period}
                  </div>
                  <div className="inline-block px-3 py-1 bg-slate-900 text-white rounded-lg text-xs font-bold">
                    {exp.metrics}
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="py-6 space-y-3">
                <div className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Key Technical Impact & Contributions
                </div>
                <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                      <div>{bullet}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
