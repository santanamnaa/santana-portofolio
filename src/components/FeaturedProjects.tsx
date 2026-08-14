"use client";

import { useState } from "react";

export const FeaturedProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI & RAG", "Web & Systems", "Data Analytics", "Business & Research"];

  const projects = [
    {
      title: "MyLinx.tech (ICISS 2026 Conference Paper)",
      category: "Business & Research",
      status: "Live & Published",
      metrics: "SUS Score 85.0 (Excellent)",
      description: "Conducted end-to-end user research using User-Centered Design (UCD) methodology to develop a digital catalog platform for Indonesian MSMEs. Co-authored paper presented at ICISS 2026.",
      stack: ["Blade / Laravel", "User-Centered Design", "SUS Evaluation", "MySQL", "TailwindCSS"],
      liveUrl: "https://mylinx.tech",
      githubUrl: "https://github.com/raexera/MyLinx"
    },
    {
      title: "AI Skill Gap Analyst System",
      category: "AI & RAG",
      status: "Production System",
      metrics: "92% Match Accuracy",
      description: "Engineered a multi-agent resume parsing system built with Python, LangGraph, spaCy, and Ollama that extracts unstructured candidate skill data and maps competency gaps against target job specs.",
      stack: ["Python", "LangGraph", "spaCy", "Ollama", "DeepSeek LLM", "TiDB Cloud Vector", "FastAPI"],
      liveUrl: null,
      githubUrl: "https://github.com/santanamnaa/ai-skill-gap-analyst"
    },
    {
      title: "Pangkalan Data Taman Kehati",
      category: "Web & Systems",
      status: "Active Deployment",
      metrics: "Ministry of Environment Data",
      description: "Structured relational database tables and Redis caching layers for national biodiversity metric tracking under the Ministry of Environment, complete with automated Jest and Playwright testing suites.",
      stack: ["PostgreSQL", "Redis", "FastAPI", "TypeScript", "Next.js", "Jest", "Playwright"],
      liveUrl: "https://tamankehati-8x6q.vercel.app",
      githubUrl: null
    },
    {
      title: "Golkar Jabar Regional Web Portal",
      category: "Web & Systems",
      status: "Live Portal",
      metrics: "High Traffic Scalability",
      description: "Engineered a high-traffic regional web portal as sole developer using Nuxt 3, Nuxt Content headless CMS, and Vercel hosting, delivering smooth performance under heavy concurrent visitor loads.",
      stack: ["Nuxt 3", "Vue 3", "TypeScript", "Nuxt Content", "TailwindCSS", "Vercel"],
      liveUrl: "https://www.golkarjabar.id",
      githubUrl: null
    },
    {
      title: "Movaads (AIoT Edge Computer Vision)",
      category: "AI & RAG",
      status: "Edge Hardware System",
      metrics: "30 FPS Edge Inference",
      description: "Designed a low-latency edge computer vision pipeline achieving 30 FPS inference speed for real-time vehicle and audience density detection using YOLOv8 optimized with Intel OpenVINO.",
      stack: ["Python", "YOLOv8", "Intel OpenVINO", "OpenCV", "PySerial", "WebSockets"],
      liveUrl: null,
      githubUrl: "https://github.com/santanamnaa/movaads-ai-iot"
    },
    {
      title: "Jaratara (Gastronomy Tourism Platform)",
      category: "Web & Systems",
      status: "Full-Stack System",
      metrics: "Contract-First OpenAPI Architecture",
      description: "Built a full-stack platform using React 19 (Vite), Express 5, PostgreSQL + Drizzle ORM, with Orval codegen for typed React Query hooks and Zod schema validation.",
      stack: ["React 19", "Express 5", "PostgreSQL", "Drizzle ORM", "Zod", "Orval"],
      liveUrl: null,
      githubUrl: null
    },
    {
      title: "Siring Saijaan (Public Service Mobile App)",
      category: "Web & Systems",
      status: "Play Store Live",
      metrics: "Cross-Platform Production App",
      description: "Built cross-platform public service mobile app using React Native (Expo Router), TypeScript, Expo SecureStore, Socket.io, and FCM push notifications.",
      stack: ["React Native", "Expo Router", "TypeScript", "Socket.io", "Firebase"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.siringsaijaan",
      githubUrl: null
    },
    {
      title: "Simjang (Heart Disease Analytics Dashboard)",
      category: "Data Analytics",
      status: "Live Web App",
      metrics: "Random Forest & Predictive Model",
      description: "Built an interactive web analytics dashboard and predictive classification model analyzing clinical indicators to detect early heart disease risk factors.",
      stack: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "Plotly"],
      liveUrl: "https://simjang.streamlit.app",
      githubUrl: null
    },
    {
      title: "FIFA 21 Data Cleansing & Market Valuation EDA",
      category: "Data Analytics",
      status: "Completed Research",
      metrics: "18,000+ Records Analyzed",
      description: "Executed comprehensive data cleansing and preprocessing on 18,000+ FIFA 21 player records, handling missing values, standardizing currency units, and conducting EDA to identify feature correlations.",
      stack: ["Python", "Pandas", "NumPy", "EDA", "Statistical Analysis"],
      liveUrl: null,
      githubUrl: "https://github.com/santanamnaa/FIFA21-Player-Prediction"
    },
    {
      title: "Glycora (Diagnostic Early Diabetes Risk Modeling)",
      category: "Data Analytics",
      status: "Quantitative Model",
      metrics: "Clinical Data Preprocessing",
      description: "Developed quantitative predictive models to evaluate demographic, physiological, and clinical blood data for early diabetes risk assessment.",
      stack: ["Python", "Jupyter Notebook", "Cython", "Scikit-Learn"],
      liveUrl: null,
      githubUrl: "https://github.com/santanamnaa/Glycora"
    },
    {
      title: "Reality_Reads (Custom C++ Data Structures)",
      category: "Web & Systems",
      status: "Low-Level System",
      metrics: "Memory Optimization",
      description: "Built C++ reader task organizer implementing custom data structures (linked lists, hash maps) and OOP principles for low-level memory management.",
      stack: ["C++", "CMake", "OOP", "Custom Data Structures"],
      liveUrl: null,
      githubUrl: "https://github.com/santanamnaa/Reality_Reads"
    },
    {
      title: "SmartTraffic (AI Traffic Controller System)",
      category: "AI & RAG",
      status: "Computer Vision Controller",
      metrics: "Real-Time Intersection Scheduling",
      description: "Developed an intelligent traffic light controller utilizing computer vision density detection and real-time path scheduling algorithms to optimize traffic flow.",
      stack: ["Python", "OpenCV", "C++", "Pathfinding Algorithms"],
      liveUrl: null,
      githubUrl: "https://github.com/santanamnaa/SmartTraffic"
    },
    {
      title: "EaseNeura (Joecy Journal Cited Research)",
      category: "Business & Research",
      status: "Peer-Reviewed Citation",
      metrics: "Joecy Vol. 5 No. 2 (2025)",
      description: "EaseNeura mental health repository project officially cited in national peer-reviewed scientific journal Joecy for innovative repository architecture.",
      stack: ["Peer-Reviewed Research", "Mental Health Repository", "Academic Citation"],
      liveUrl: null,
      githubUrl: null
    },
    {
      title: "Audit Trail Management System Functional Specs",
      category: "Business & Research",
      status: "Enterprise Specs",
      metrics: "PT Gunung Amal Solution",
      description: "Designed functional specifications, database query logic, and auditing tables for an enterprise Audit Trail Management System.",
      stack: ["PostgreSQL", "Audit Trail Logging", "DCS Specs", "SOW Documentation"],
      liveUrl: null,
      githubUrl: null
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="systems" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
            03. Complete Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mt-2 tracking-tight">
            All 14 Commercial Projects, Systems & Research
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Explore the complete catalog of commercial platforms, AI agents, edge hardware systems, data dashboards, and scientific publications.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-slate-950 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Apple Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 flex flex-col justify-between hover:bg-white hover:border-blue-300 transition-all hover:shadow-lg"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-black text-blue-600 uppercase tracking-widest">
                    {proj.category}
                  </div>
                  <div className="px-2.5 py-0.5 rounded-md bg-white text-slate-700 text-[10px] font-bold border border-slate-200">
                    {proj.status}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-950 leading-snug">
                  {proj.title}
                </h3>

                <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-800">
                  Impact: <span className="text-blue-600">{proj.metrics}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.stack.map((tech, tIdx) => (
                    <div
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 text-[10px] font-semibold"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Links */}
              <div className="pt-5 mt-5 border-t border-slate-200/80 flex items-center gap-2">
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors"
                  >
                    Live System
                  </a>
                )}
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
