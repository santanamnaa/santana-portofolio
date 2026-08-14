export interface AchievementItem {
  id: string;
  title: string;
  icon: "gold" | "silver" | "bronze" | "blue" | "purple";
  organization: string;
  year: string;
  description: string;
  link?: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "iciss-2026-publication",
    title: "Publikasi Konferensi Internasional ICISS 2026 (MyLinx.tech)",
    icon: "gold",
    organization: "International Conference on ICT for Smart Society (ICISS)",
    year: "2026",
    description: `Pengembangan platform no-code MSME digital "MyLinx.tech" dipublikasikan dan dipresentasikan di ICISS 2026.
Riset menggunakan pendekatan User-Centered Design (UCD) dan dievaluasi dengan System Usability Scale (SUS) yang meraih nilai 85.0 ("Excellent").
Platform memungkinkan pembuatan katalog UMKM kilat, pemesanan langsung WhatsApp, dan integrasi QRIS payment.`,
    link: "https://mylinx.tech"
  },
  {
    id: "joecy-journal-citation",
    title: "Sitasi Jurnal Ilmiah Nasional Joecy Vol. 5 No. 2 (2025)",
    icon: "purple",
    organization: "Journal of Innovative and Creativity (Joecy)",
    year: "2025",
    description: `Repository project Flutter EaseNeura secara resmi disitasi dalam jurnal ilmiah nasional Joecy (Vol. 5 No. 2, 2025).
Disitasi dalam artikel riset berjudul "Pengembangan Aplikasi Mobile Berbasis Flutter untuk Monitoring Kesehatan Mental Mahasiswa Universitas Alifah Padang".`,
    link: "https://joecy.org/index.php/joecy/article/view/411"
  },
  {
    id: "duta-bahasa-jabar-2023",
    title: "Finalis Duta Bahasa Jawa Barat 2023",
    icon: "gold",
    organization: "Balai Bahasa Provinsi Jawa Barat",
    year: "2023",
    description: `Terpilih sebagai Finalis Duta Bahasa Jawa Barat mewakili Kota Bandung, berkontribusi dalam pembinaan dan pengutamaan bahasa Indonesia serta pelestarian bahasa daerah.`,
    link: "https://binus.ac.id/bandung/2023/10/pemilihan-duta-bahasa-jawa-barat-tahun-2023/"
  },
  {
    id: "icp-hacker-house-2024",
    title: "Finalis ICP Chain Fusion Hacker House Bali 2024",
    icon: "blue",
    organization: "Internet Computer Protocol (ICP) DFINITY Foundation",
    year: "2024",
    description: `Terpilih sebagai salah satu developer dan menjadi Finalis dalam ajang hackathon web3 internasional ICP Chain Fusion Hacker House 2024 di Bali, Indonesia.`,
    link: "https://dfinity.org"
  },
  {
    id: "icpc-asia-jakarta-2024",
    title: "Kontestan Tim ICPC Asia Jakarta Regional Contest",
    icon: "blue",
    organization: "International Collegiate Programming Contest (ICPC)",
    year: "2024",
    description: `Menjadi salah satu tim perwakilan kontestan BINUS University dalam ajang ICPC Asia Jakarta Regional Contest, salah satu kompetisi pemrograman komputasional paling prestisius di Asia.`,
  },
  {
    id: "binus-outstanding-bifest",
    title: "BINUS Outstanding Student Award & Pembicara BIFEST 2024",
    icon: "gold",
    organization: "BINUS University Bandung",
    year: "2024",
    description: `Menerima penghargaan Outstanding Student Award dari BINUS University atas prestasi akademis dan kontribusi non-akademis.
Diundang sebagai Pembicara dalam German Workshop pada BINUS Festival (BIFEST) 2024 membawakan materi kompetensi global dan peluang karir.`,
    link: "https://binus.ac.id/bandung/2024/12/ratusan-binusian-hadiri-german-workshop-membuka-peluang-global-melalui-bahasa/"
  },
  {
    id: "google-ai-sap-certifications",
    title: "Google AI Professional & SAP Analytics Cloud Certified",
    icon: "purple",
    organization: "Google & SAP",
    year: "2025",
    description: `Tercatat sebagai profesional bersertifikat resmi Google AI Professional Certificate untuk pengembangan Generative AI / LLM workflows serta SAP Analytics Cloud Certified untuk enterprise cloud analytics.`,
  }
];
