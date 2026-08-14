export const Certifications = () => {
  const credentials = [
    {
      title: "SAP Analytics Cloud Certified",
      issuer: "SAP Official Certification",
      type: "Professional Certification",
      detail: "Certified in SAP Analytics Cloud dashboard modeling, enterprise reporting, and data story visualization."
    },
    {
      title: "Google AI Professional Certificate",
      issuer: "Google Official Certification",
      type: "AI & ML Certification",
      detail: "Certified in machine learning workflows, artificial intelligence fundamentals, and model deployment."
    },
    {
      title: "BINUS Outstanding Student Award",
      issuer: "BINUS University",
      type: "Academic Distinction",
      detail: "Awarded by BINUS University for outstanding academic achievements in Computer Science and student leadership."
    },
    {
      title: "ICP Chain Fusion Hacker House 2024 Finalist",
      issuer: "Internet Computer Protocol (Bali)",
      type: "Hackathon Finalist",
      detail: "Selected as finalist in Bali hackathon building decentralized Web3 applications and smart contracts."
    },
    {
      title: "ICPC Asia Jakarta Regional Contest 2024",
      issuer: "International Collegiate Programming Contest",
      type: "Competitive Programming",
      detail: "Competed in Asia Jakarta Regional Contest solving complex algorithmic optimization and data structure challenges."
    },
    {
      title: "Journal Research Citation (Joecy 2025)",
      issuer: "Journal of Innovative and Creativity",
      type: "Academic Citation",
      detail: "EaseNeura mental health repository project officially cited in national scientific journal Joecy Vol. 5 No. 2 (2025)."
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
            05. Credentials & Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            Certifications, Awards & Academic Citations
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Verified global certifications, competitive programming honors, and peer-reviewed research citations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between blue-card-glow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">
                    {cred.issuer}
                  </div>
                  <div className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold">
                    {cred.type}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {cred.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cred.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
