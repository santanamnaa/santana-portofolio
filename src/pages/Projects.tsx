import { Header } from "@/components/portfolio/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Calendar, Filter, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const allProjects = [
  {
    id: "rag-agent-tidb",
    title: "RAG Chatbot — TiDB Cloud VECTOR + DeepSeek",
    description: "Anti-hallucination chatbot with Retrieval-Augmented Generation",
    longDescription: "Advanced RAG implementation using TiDB Cloud's vector database for semantic search and DeepSeek LLM for response generation. Features CSV ingestion, embedding generation, vector search, and synthesized answers with complete documentation.",
    stack: ["Python", "TiDB Cloud", "BAAI/bge-m3", "Ollama", "DeepSeek", "pandas"],
    stars: 1,
    updated: "2025-01-15",
    github: "https://github.com/santanamnaa/rag-agent-tidb",
    demo: null,
    category: "AI/ML",
    status: "Production",
    preview: {
      features: ["CSV to Vector Embeddings", "Semantic Search", "Anti-hallucination", "Complete RAG Pipeline"],
      tech_highlights: "Vector Database + LLM Integration"
    }
  },
  {
    id: "smart-chatbot-rag",
    title: "Smart-Chatbot with RAG",
    description: "Lightweight RAG for TSP Digital's internal knowledge",
    longDescription: "Custom RAG system built for TSP Digital's knowledge base with DeepSeek integration via Ollama. Includes Jupyter notebook for experimentation and production chatbot script.",
    stack: ["Python", "DeepSeek", "Ollama", "TiDB Cloud", "Jupyter"],
    stars: 0,
    updated: "2025-01-15",
    github: "https://github.com/santanamnaa/Smart-Chatbot-with-Retrieval-Augmented-Generation",
    demo: null,
    category: "AI/ML",
    status: "Production",
    preview: {
      features: ["Internal Knowledge Base", "Indonesian README", "RAG Flow Diagram", "Production Ready"],
      tech_highlights: "Lightweight RAG Implementation"
    }
  },
  {
    id: "tspdigital",
    title: "TSPDigital — Agency Website",
    description: "Next.js 14 agency website deployed on Vercel",
    longDescription: "Full-featured agency website built with Next.js 14, TypeScript, and Tailwind CSS. Features modern design, responsive layout, and integrated services showcase.",
    stack: ["TypeScript", "Next.js 14", "Tailwind", "shadcn/ui", "Vercel"],
    stars: 0,
    updated: "2025-01-13",
    github: null,
    demo: "https://tspdigital.agency",
    category: "Web Development",
    status: "Live",
    preview: {
      features: ["Responsive Design", "Modern UI/UX", "SEO Optimized", "Fast Loading"],
      tech_highlights: "Next.js 14 + TypeScript"
    }
  },
  {
    id: "aitiserve",
    title: "PT AITISERVE DJAYA NARAYA — Company Profile",
    description: "AI-driven solutions and digital transformation partner",
    longDescription: "PT AITISERVE DJAYA ABADI is a technology company specializing in artificial intelligence, automation, and digital transformation services. We empower businesses with innovative AI solutions, custom software development, and seamless system integration to drive operational excellence and growth.",
    stack: ["AI Solutions", "Custom Software", "System Integration", "Cloud Services", "Automation"],
    stars: 0,
    updated: "2024-12-15",
    github: null,
    demo: "https://aitiserve.com",
    category: "Web Development",
    status: "Active",
    preview: {
      features: [
        "AI Consulting & Implementation",
        "Custom Software Development",
        "Business Process Automation",
        "Cloud & System Integration"
      ],
      tech_highlights: "AI-Driven Solutions + Digital Transformation"
    }
  },
  {
    id: "strategive",
    title: "Strategive — Company Profile",
    description: "Digital marketing agency company profile with integrated email contact",
    longDescription: "Strategive is a digital marketing agency. The company profile website features integrated email contact using EmailJS, allowing clients to easily reach out for services and inquiries. The site highlights agency services, portfolio, and contact information.",
    stack: ["React", "EmailJS", "Tailwind CSS"],
    stars: 0,
    updated: "2024-11-15",
    github: null,
    demo: "https://strategive.vercel.app",
    category: "Web Development",
    status: "Active",
    preview: {
      features: [
        "Digital Marketing Agency Profile",
        "Integrated Email Contact (EmailJS)",
        "Service Showcase",
        "Portfolio Display"
      ],
      tech_highlights: "React + EmailJS Integration"
    }
  },
  {
    id: "kodera",
    title: "Kodera — Digital Agency Company Profile",
    description: "Company profile website for a digital agency focused on website development",
    longDescription: "Kodera is a company profile website for a digital agency specializing in website development. The site showcases the agency's services, portfolio, and expertise in building modern, responsive websites for clients across various industries.",
    stack: ["React", "TypeScript", "Tailwind CSS", "EmailJS"],
    stars: 0,
    updated: "2024-11-01",
    github: null,
    demo: "https://kodera-eta.vercel.app/",
    category: "Web Development",
    status: "Live",
    preview: {
      features: [
        "Agency Service Showcase",
        "Portfolio Display",
        "Contact Form (EmailJS)",
        "Responsive Design"
      ],
      tech_highlights: "React + TypeScript + Tailwind CSS"
    }
  },
  {
    id: "github-profile",
    title: "Minimalist GitHub Profile",
    description: "A clean, minimalist GitHub profile",
    longDescription: "A minimalist GitHub profile focused on clarity and simplicity. Features a clean layout, subtle highlights, and essential information to showcase skills and activity without clutter.",
    stack: ["Markdown"],
    stars: 0,
    updated: "2024-07-15",
    github: "https://github.com/santanamnaa/santanamnaa",
    demo: "https://github.com/santanamnaa",
    category: "Web Development",
    status: "Live",
    preview: {
      features: ["Minimalist Layout", "Essential Info", "Clean Design"],
      tech_highlights: "Pure Markdown"
    }
  },
  {
    id: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    description: "ML model for heart disease risk assessment",
    longDescription: "Machine learning model for predicting heart disease risk using various health parameters. Features data preprocessing, model training, and prediction interface.",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    stars: 0,
    updated: "2024-05-15",
    github: "https://github.com/santanamnaa/predict_heart_disease",
    demo: "http://simjang.streamlit.app/",
    category: "AI/ML",
    status: "Completed",
    preview: {
      features: ["Risk Assessment", "Data Preprocessing", "Model Training", "Prediction Interface"],
      tech_highlights: "scikit-learn + Data Science"
    }
  },
  {
    id: "neural-network-deeplearning",
    title: "Neural Network Deep Learning",
    description: "Customer churn prediction using deep learning",
    longDescription: "Deep learning model for predicting customer churn using neural networks. Includes data analysis, model architecture design, and performance evaluation.",
    stack: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy"],
    stars: 0,
    updated: "2024-05-01",
    github: "https://github.com/santanamnaa/NN_DeepLearning",
    demo: null,
    category: "AI/ML",
    status: "Completed",
    preview: {
      features: ["Churn Prediction", "Neural Networks", "Data Analysis", "Model Evaluation"],
      tech_highlights: "TensorFlow + Deep Learning"
    }
  },
  {
    id: "fifa21-player-prediction",
    title: "FIFA 21 Player Prediction",
    description: "ML model for FIFA 21 player performance prediction",
    longDescription: "Machine learning model for predicting FIFA 21 player performance and identifying high-potential players based on their attributes and statistics.",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    stars: 0,
    updated: "2024-05-01",
    github: "https://github.com/santanamnaa/FIFA21-Player-Prediction",
    demo: null,
    category: "AI/ML",
    status: "Completed",
    preview: {
      features: ["Player Analysis", "Performance Prediction", "Data Visualization", "ML Models"],
      tech_highlights: "scikit-learn + Sports Analytics"
    }
  },
  {
    id: "data-cleansing",
    title: "Data Cleansing — FIFA 21 Dataset",
    description: "Data cleaning and preprocessing for FIFA 21 dataset",
    longDescription: "Comprehensive data cleaning project focusing on FIFA 21 dataset preprocessing, handling missing values, outliers, and data quality improvement.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    stars: 0,
    updated: "2024-05-01",
    github: "https://github.com/santanamnaa/Data-Cleansing",
    demo: null,
    category: "Data Science",
    status: "Completed",
    preview: {
      features: ["Data Cleaning", "Missing Value Handling", "Outlier Detection", "Quality Improvement"],
      tech_highlights: "Pandas + Data Preprocessing"
    }
  },
  {
    id: "basic-todolist",
    title: "Basic Todo List — OOP",
    description: "Object-oriented programming todo list application",
    longDescription: "Simple yet powerful todo list application built using Object-Oriented Programming principles. Features task management, priority levels, and data persistence.",
    stack: ["Python", "OOP", "File I/O", "JSON"],
    stars: 0,
    updated: "2024-05-01",
    github: "https://github.com/santanamnaa/basic-todolist",
    demo: null,
    category: "Backend",
    status: "Completed",
    preview: {
      features: ["Task Management", "Priority Levels", "Data Persistence", "OOP Design"],
      tech_highlights: "Python OOP + File Management"
    }
  },
  {
    id: "identik",
    title: "Identik — Blockchain KTP",
    description: "Blockchain smart contract for Indonesian identity (KTP)",
    longDescription: "Smart contract system for securely managing Indonesian national identity cards (KTP) on the blockchain. Provides decentralized, tamper-proof identity verification and management tailored for Indonesia's digital identity ecosystem.",
    stack: ["Solidity", "Ethereum", "Smart Contracts", "Blockchain"],
    stars: 0,
    updated: "2024-01-15",
    github: "https://github.com/santanamnaa/identik",
    demo: "https://github.com/santanamnaa/identik?tab=readme-ov-file#web-3-identik",
    category: "Blockchain",
    status: "Prototype",
    preview: {
      features: [
        "Decentralized Identity",
        "KTP Verification",
        "Smart Contract Security",
        "Tamper-proof Records"
      ],
      tech_highlights: "Solidity + Ethereum + Digital Identity"
    }
  },
  {
    id: "internet-computer-examples",
    title: "Internet Computer Examples",
    description: "Example applications for Internet Computer blockchain",
    longDescription: "Collection of example applications, microservices, and code samples for the Internet Computer blockchain platform. Includes smart contracts and dApp examples.",
    stack: ["Motoko", "Rust", "Internet Computer", "Blockchain"],
    stars: 0,
    updated: "2024-01-01",
    github: "https://github.com/santanamnaa/examples",
    demo: null,
    category: "Blockchain",
    status: "Learning",
    preview: {
      features: ["Smart Contracts", "dApp Examples", "Microservices", "Blockchain Integration"],
      tech_highlights: "Internet Computer + Motoko"
    }
  },
  {
    id: "glycora",
    title: "Glycora — Diabetes Prediction",
    description: "Streamlit app for diabetes risk prediction with ML",
    longDescription: "Interactive web application for diabetes risk assessment using machine learning models. Features data exploration, prediction algorithms, and confusion matrix evaluation.",
    stack: ["Python", "Streamlit", "scikit-learn", "Machine Learning"],
    stars: 2,
    updated: "2024-08-16",
    github: "https://github.com/santanamnaa/Glycora",
    demo: "https://glycora.streamlit.app",
    category: "AI/ML",
    status: "Completed",
    preview: {
      features: ["Risk Prediction", "Interactive UI", "ML Models", "Data Visualization"],
      tech_highlights: "Streamlit + scikit-learn"
    }
  },
  {
    id: "smarttraffic",
    title: "SmartTraffic — AI Traffic Light System",
    description: "Computer vision + AI to optimize traffic light timing",
    longDescription: "Intelligent traffic management system using computer vision and AI algorithms to analyze traffic patterns and optimize light timing for improved flow and reduced congestion.",
    stack: ["Python", "OpenCV", "Computer Vision", "AI"],
    stars: 3,
    updated: "2024-08-16",
    github: "https://github.com/santanamnaa/SmartTraffic",
    demo: "https://github.com/santanamnaa/SmartTraffic#demo",
    category: "AI/ML",
    status: "Prototype",
    preview: {
      features: ["Real-time Traffic Analysis", "Smart Light Control", "Computer Vision", "Business Plan"],
      tech_highlights: "OpenCV + AI Algorithms"
    }
  },
  {
    id: "databook",
    title: "DataBook — Library Management",
    description: "PHP-based library management system",
    longDescription: "Comprehensive library management system with book catalog, borrowing/returning records, and role-based access for admin and members.",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    stars: 3,
    updated: "2024-08-16",
    github: "https://github.com/santanamnaa/Databook",
    demo: "https://github.com/santanamnaa/Databook#demo",
    category: "Web Development",
    status: "Completed",
    preview: {
      features: ["Book Catalog", "Borrowing System", "Role-based Access", "Member Management"],
      tech_highlights: "PHP + MySQL"
    }
  },
  {
    id: "easeneura",
    title: "EaseNeura — Mental-Health App",
    description: "Flutter app connecting users to mental health professionals",
    longDescription: "Comprehensive mental health application built with Flutter for cross-platform deployment. Features user-professional matching, self-care tools, and mental wellness tracking.",
    stack: ["Flutter", "Dart", "Firebase", "Multi-platform"],
    stars: 6,
    updated: "2024-08-16",
    github: "https://github.com/santanamnaa/easeneura",
    demo: "https://github.com/santanamnaa/easeneura?tab=readme-ov-file#design",
    category: "Mobile Development",
    status: "Completed",
    preview: {
      features: ["Professional Matching", "Self-Care Tools", "Wellness Tracking", "Cross-Platform"],
      tech_highlights: "Flutter Multi-Platform"
    }
  },
  {
    id: "easypick",
    title: "EasyPick — Restaurant Reservation App",
    description: "Java-based restaurant reservation system",
    longDescription: "Full-featured restaurant reservation system built with Java. Includes CRUD operations for bookings and restaurants with both console and GUI interfaces.",
    stack: ["Java", "Swing", "MySQL"],
    stars: 4,
    updated: "2024-08-16",
    github: "https://github.com/santanamnaa/easypick",
    demo: "https://github.com/santanamnaa/easypick#design",
    category: "Mobile Development",
    status: "Completed",
    preview: {
      features: ["Booking Management", "Restaurant CRUD", "GUI Interface", "Database Integration"],
      tech_highlights: "Java + Swing + MySQL"
    }
  },
  {
    id: "bossanoface-web",
    title: "Bossanoface — Fashion Brand Profile",
    description: "Company profile website for Bossanoface fashion brand with EmailJS subscription integration",
    longDescription: "A modern company profile website for the Bossanoface fashion brand. Integrates EmailJS for email subscription so users can receive updates directly. Showcases brand identity, collections, and news, helping to engage customers and grow the brand's audience.",
    stack: ["React", "Node.js", "MongoDB", "Express", "EmailJS"],
    stars: 0,
    updated: "2025-01-16",
    github: "https://github.com/santanamnaa/bossanoface_web",
    demo: "https://bossanoface.vercel.app/",
    category: "Web Development",
    status: "Completed",
    preview: {
      features: [
        "Brand Showcase",
        "Email Subscription (EmailJS)",
        "About Us",
      ],
      tech_highlights: "Next.js + EmailJS"
    }
  },
  {
    id: "kehati-portal",
    title: "Portal Keanekaragaman Hayati (Kehati)",
    description: "National biodiversity portal for public transparency and professional data management (Permen LH 03/2012).",
    longDescription:
      "MVP for Indonesia’s national biodiversity portal: public site (beranda, flora-fauna directory, publikasi, indeks, peta) and professional workspace (permohonan, pangkalan data, impor, laporan, monitoring, verifikasi, ekspor & API) with RBAC/SSO, geo layers, and performance targets (p95 API < 500 ms, uptime ≥ 99.5%).",
    stack: [
      "Next.js 14",
      "TypeScript",
      "FastAPI (Python 3.12)",
      "PostgreSQL 16 + PostGIS",
      "Redis",
      "MinIO/S3",
      "Leaflet",
      "Chart.js",
      "Keycloak (OIDC)"
    ],
    stars: 0,
    updated: "2025-09-04",
    github: null,
    demo: null,
    category: "Web Development",
    status: "Development",
    preview: {
      features: [
        "Flora–Fauna Directory & Search",
        "Indeks Kehati Charts (Shannon/Simpson)",
        "Interactive Map (Gardens/Blocks/Observations)",
        "CSV/GeoJSON Import Wizard + Validation",
        "RBAC + SSO (Scopes: National/Province/Regency/Garden)",
        "Export & Limited Read-Only API"
      ],
      tech_highlights:
        "Next.js + FastAPI + PostGIS • Leaflet maps • Chart.js dashboards • Keycloak SSO • Redis caching"
    }
  },
  {
    id: "sekolah-pgri",
    title: "Sekolah PGRI — Company Profile",
    description: "Company profile website for a school, now live at sekolah-pgri.vercel.app",
    longDescription: "A modern company profile website for Sekolah PGRI, providing information about the school, its programs, staff, and activities. The site is accessible to the public at https://sekolah-pgri.vercel.app and serves as a digital presence for the institution.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    stars: 0,
    updated: "2025-01-08",
    github: null,
    demo: "https://sekolah-pgri.vercel.app",
    category: "Web Development",
    status: "Live",
    preview: {
      features: [
        "School Information",
        "Programs & Activities",
        "Staff Directory",
        "News & Announcements"
      ],
      tech_highlights: "Next.js + TypeScript + Tailwind CSS"
    }
  },
  {
    id: "suma-barber-website",
    title: "Suma Barber Website",
    description: "Professional barbershop website and booking system",
    longDescription: "Modern barbershop website with online booking system, service showcase, and customer management features for professional grooming services.",
    stack: ["Supabase", "Next.js", "TailwindCSS", "Stripe"],
    stars: 0,
    updated: "2024-12-22",
    github: null,
    demo: "https://suma-barber.vercel.app",
    category: "Web Development",
    status: "Live",
    preview: {
      features: ["Online Booking", "Service Showcase", "Customer Management", "Payment Integration", "Responsive UI"],
      tech_highlights: "Supabase Auth + Realtime, Next.js routing, Tailwind components"
    }    
  },
  {
    id: "invoice-extractor",
    title: "Invoice Extractor — AI Document Processing",
    description: "AI-powered invoice extraction and processing system",
    longDescription: "Intelligent invoice extraction system using OCR and machine learning to automatically process invoices, extract data, and organize financial documents.",
    stack: ["Python", "OpenCV", "Tesseract", "scikit-learn"],
    stars: 0,
    updated: "2024-11-15",
    github: "https://github.com/santanamnaa/InvoiceExtractor",
    demo: null,
    category: "AI/ML",
    status: "Completed",
    preview: {
      features: ["OCR Processing", "Data Extraction", "Document Organization", "ML Classification"],
      tech_highlights: "OpenCV + Tesseract + ML"
    }
  },
  {
    id: "menantigiliran",
    title: "Menanti Giliran — Business Coffee Profile",
    description: "Company profile website for Menanti Giliran Coffee",
    longDescription: "A modern company profile website created for Menanti Giliran, a business coffee brand. The site showcases the company's story, menu, location, and contact information, providing an engaging digital presence for customers and partners.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    stars: 0,
    updated: "2024-10-15",
    github: null,
    demo: "https://menantigiliran.vercel.app/",
    category: "Web Development",
    status: "Completed",
    preview: {
      features: [
        "Company Story",
        "Menu Showcase",
        "Location & Contact",
        "Responsive Design"
      ],
      tech_highlights: "Next.js + TypeScript + Tailwind CSS"
    }
  },
  {
    id: "santana-dev-old",
    title: "Santana.dev (Old) — Personal Website",
    description: "Previous version of my personal portfolio website",
    longDescription: "The earlier generation of my personal portfolio website, featuring projects, a blog, and contact form. Built using HTML, CSS, and JavaScript before migrating to a modern stack.",
    stack: ["HTML", "CSS", "JavaScript"],
    stars: 0,
    updated: "2023-08-01",
    github: "https://github.com/santanamnaa/santana.dev",
    demo: null,
    category: "Web Development",
    status: "Archived",
    preview: {
      features: ["Portfolio", "Blog", "Contact Form", "Responsive Design"],
      tech_highlights: "HTML + CSS + JavaScript"
    }
  },
  {
    id: "mastering-ai",
    title: "Mastering AI — Bootcamp Projects",
    description: "AI and machine learning bootcamp projects",
    longDescription: "Collection of AI and machine learning projects from bootcamp training including neural networks, deep learning, and practical AI applications.",
    stack: ["Python", "TensorFlow", "Keras", "scikit-learn"],
    stars: 0,
    updated: "2024-09-01",
    github: "https://github.com/santanamnaa/MasteringAI",
    demo: null,
    category: "AI/ML",
    status: "Learning",
    preview: {
      features: ["Neural Networks", "Deep Learning", "Practical Applications", "Bootcamp Projects"],
      tech_highlights: "TensorFlow + Keras + ML"
    }
  },
  {
    id: "company-profile-suma",
    title: "Company Profile Suma for Pitch",
    description: "Corporate website for Suma company built with Next.js",
    longDescription: "Professional corporate website for Suma company, built using Next.js. Showcases company services, team, and portfolio with a modern design and responsive layout for business presentation.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    stars: 0,
    updated: "2024-08-15",
    github: null,
    demo: null,
    category: "Web Development",
    status: "Completed",
    preview: {
      features: ["Company Showcase", "Service Presentation", "Team Profiles", "Contact Information"],
      tech_highlights: "Next.js + TypeScript + Tailwind CSS"
    }
  },
  {
    id: "hrms-backend",
    title: "HR Management System — Backend",
    description: "Backend for HR management system",
    longDescription: "A robust backend for a Human Resources management system, providing RESTful APIs for employee records, attendance, leave management, payroll, and authentication. Features secure user management, role-based access, and integration with databases for efficient HR operations.",
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
    stars: 0,
    updated: "2024-06-01",
    github: null,
    demo: null,
    category: "Backend",
    status: "Completed",
    preview: {
      features: [
        "RESTful APIs", "Authentication", "Database Integration", "API Documentation"
      ],
      tech_highlights: "Node.js + Express + PostgreSQL + JWT"
    }
  },
  {
    id: "ar-reading-explorer",
    title: "AR Reading Explorer",
    description: "Immersive AR platform to make reading more attractive and engaging",
    longDescription: "An augmented reality project designed to transform the reading experience. Users can explore books in interactive 3D environments, visualize stories, and engage with content in new, immersive ways. Features include customizable virtual libraries, interactive book elements, and gamified reading challenges to encourage more reading.",
    stack: ["React", "Three.js", "WebXR", "Node.js"],
    stars: 0,
    updated: "2024-06-10",
    github: null,
    demo: null,
    category: "Web Development",
    status: "Prototype",
    preview: {
      features: [
        "Immersive AR Reading",
        "3D Virtual Library",
        "Interactive Book Elements",
        "Gamified Reading Challenges"
      ],
      tech_highlights: "WebXR + Three.js + React"
    }
  }
];

const categories = ["All", "AI/ML", "Web Development", "Mobile Development", "Backend", "Data Science", "Blockchain"];
const statusTypes = ["All", "Live", "Production", "Development", "Prototype", "Completed", "Learning", "Template", "Planning"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");


  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold">
                My <span className="text-primary">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore my portfolio of AI engineering, full-stack development, and innovative digital solutions. 
                From RAG implementations to production-ready web applications.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-10 px-6 bg-muted/5">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto space-y-6">
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="gap-2"
                  >
                    <Filter className="h-4 w-4" />
                    {category}
                  </Button>
                ))}
              </div>

              {/* Status Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {statusTypes.map((status) => (
                  <Badge
                    key={status}
                    variant={selectedStatus === status ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                    onClick={() => setSelectedStatus(status)}
                  >
                    {status}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Projects */}
        {filteredProjects.length > 0 && (
          <section className="py-20 px-6">
            <div className="container mx-auto">
              <h2 className="section-heading">All Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="project-card group"
                  >

                    {/* Main Card Content */}
                    <Card className="border-none bg-transparent h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant={project.status === 'Live' ? 'default' : 'secondary'} 
                              className="text-xs"
                            >
                              {project.status}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Star className="h-3 w-3" />
                              <span>{project.stars}</span>
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-lg leading-tight">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-4 flex-1">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.longDescription}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1">
                          {project.stack.slice(0, 4).map((tech, index) => (
                            <Badge key={index} variant="secondary" className="tech-tag text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.stack.length > 4 && (
                            <Badge variant="secondary" className="tech-tag text-xs">
                              +{project.stack.length - 4}
                            </Badge>
                          )}
                        </div>

                        {/* Updated Date */}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>Updated {project.updated}</span>
                        </div>

                        {/* Action Buttons */}
                        {(project.github || project.demo) && (
                          <div className="flex gap-2 pt-2 mt-auto">
                            {project.github && (
                              <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                  <Github className="h-4 w-4" />
                                  Code
                                </a>
                              </Button>
                            )}
                            {project.demo && (
                              <Button variant="default" size="sm" className="flex-1 gap-2" asChild>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                  <ExternalLink className="h-4 w-4" />
                                  Demo
                                </a>
                              </Button>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <section className="py-20 px-6">
            <div className="container mx-auto text-center">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-24 h-24 mx-auto bg-muted/10 rounded-full flex items-center justify-center">
                  <Search className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold">No projects found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or browse all projects
                </p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedStatus("All");
                }}>
                  Clear Filters
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Projects;
