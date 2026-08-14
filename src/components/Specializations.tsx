import Link from "next/link";

export const Specializations = () => {
  const roles = [
    {
      title: "AI Engineer",
      slug: "ai-engineer",
      tagline: "Custom RAG Architectures & Edge AIoT Vision",
      focus: "LangGraph Multi-Agent RAG, YOLOv8 Edge Vision, TiDB Cloud Vector, DeepSeek LLM Fine-Tuning",
      cvName: "CV_Santana_Mena_AI_Engineer.pdf",
      highlights: [
        "92% Match Accuracy Improvement on AI Skill Gap Analyst System",
        "30 FPS Edge Computer Vision Inference using YOLOv8 & Intel OpenVINO",
        "Google AI Professional Certificate Certified"
      ]
    },
    {
      title: "Business Analyst",
      slug: "business-analyst",
      tagline: "Product Specifications & User Research",
      focus: "Detailed Complete Specification (DCS), Statement of Work (SOW), User-Centered Design (UCD), Agile/Scrum",
      cvName: "CV_Santana_Mena_Business_Analyst.pdf",
      highlights: [
        "Co-Authored ICISS 2026 Paper for MyLinx Platform",
        "System Usability Scale (SUS) Score 85.0 (Excellent)",
        "Audit Trail Management System Functional Specs for PT Gunung Amal"
      ]
    },
    {
      title: "Data Analyst",
      slug: "data-analyst",
      tagline: "Exploratory Data Analysis & BI Dashboards",
      focus: "SQL (CTEs, JOINs, Aggregations), Streamlit Interactive Dashboards, Pandas, Matplotlib, SAP Analytics Cloud",
      cvName: "CV_Santana_Mena_Data_Analyst.pdf",
      highlights: [
        "SAP Analytics Cloud Certified",
        "FIFA 21 Player Record Data Cleansing & Market Valuation EDA (18,000+ Records)",
        "Simjang Heart Disease Analytics & Streamlit Predictive Dashboard"
      ]
    },
    {
      title: "Software Engineer",
      slug: "software-engineer",
      tagline: "Full-Stack Web, API & Systems Architecture",
      focus: "React 19 / Next.js, Vue 3 / Nuxt 3, Node.js, PostgreSQL, Docker Microservices, Performance Optimization",
      cvName: "CV_Santana_Mena_Software_Engineer.pdf",
      highlights: [
        "30% Reduction in Initial Bundle Load Time for PT Aitiserve Web Platforms",
        "10+ Commercial Applications Delivered with 100% On-Time Record",
        "ICPC Asia Jakarta Regional Competitor & C++ Custom Data Structures"
      ]
    }
  ];

  return (
    <section id="roles" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
            04. Role Specialization Portfolios
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            Tailored Engineering & Analysis Roles
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Explore dedicated portfolio breakdowns tailored for specific hiring requirements, complete with verified achievements and direct PDF CV downloads.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between blue-card-glow"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="text-xs font-black text-blue-600 uppercase tracking-widest">
                    Role Pillar 0{idx + 1}
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                    Dedicated Route Available
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {role.title}
                </h3>

                <p className="text-sm font-semibold text-slate-700">
                  {role.tagline}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-800">Primary Stack:</strong> {role.focus}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2">
                  <div className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Key Role Matches
                  </div>
                  {role.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <div>{hl}</div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={`/${role.slug}`}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs text-center hover:bg-blue-700 transition-colors shadow-sm"
                >
                  View {role.title} Portfolio
                </Link>
                <a
                  href={`/cv/${role.cvName}`}
                  download
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs text-center hover:bg-slate-200 transition-colors"
                >
                  Download {role.title} CV (PDF)
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
