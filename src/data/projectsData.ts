export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  github_url?: string;
  demo_url?: string;
  technologies: string[];
  opensource: boolean;
  category: "Web Development" | "AI & Machine Learning" | "Mobile App" | "Data & Cloud" | "System & Utilities";
  image: string;
}

export const projectsData: ProjectItem[] = [
  {
    "id": "lawapp-onboarding",
    "title": "Law App Client Onboarding",
    "description": "Legal client onboarding and case document management web platform with secure authentication workflows.",
    "github_url": "",
    "demo_url": "https://lawapp-onboarding-v2.vercel.app",
    "technologies": [
      "TypeScript",
      "Next.js",
      "Node.js",
      "PostgreSQL"
    ],
    "opensource": false,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "e-delivery-order",
    "title": "Electronic Delivery Order System",
    "description": "Enterprise Electronic Delivery Order (e-DO) logistics management system for shipping line document processing.",
    "github_url": "",
    "demo_url": "https://aitiserve.co.id",
    "technologies": [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker"
    ],
    "opensource": false,
    "category": "System & Utilities",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "master-erp-platform",
    "title": "Master ERP Enterprise System",
    "description": "Modular enterprise resource planning system for inventory tracking, purchasing workflows, and financial analytics.",
    "github_url": "",
    "demo_url": "https://strategive.vercel.app",
    "technologies": [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis"
    ],
    "opensource": false,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "movaads-iot",
    "title": "MovaAds IoT Mobility Platform",
    "description": "Real-time IoT mobility advertising telemetry platform tracking display screens and location analytics.",
    "github_url": "",
    "demo_url": "https://hitalokamanava.vercel.app",
    "technologies": [
      "Python",
      "FastAPI",
      "IoT Telemetry",
      "PostgreSQL"
    ],
    "opensource": false,
    "category": "Data & Cloud",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "onvlo-platform",
    "title": "Onvlo Digital Platform",
    "description": "Enterprise web platform for digital service coordination and client request tracking.",
    "github_url": "",
    "demo_url": "https://tahira.vercel.app",
    "technologies": [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "PostgreSQL"
    ],
    "opensource": false,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "admovee-system",
    "title": "Admovee Outdoor Advertising",
    "description": "Outdoor advertising management platform managing billboard inventory, booking schedules, and client contracts.",
    "github_url": "",
    "demo_url": "https://aitiserve.co.id",
    "technologies": [
      "Python",
      "FastAPI",
      "React",
      "TypeScript"
    ],
    "opensource": false,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1542744094-3a3172720224?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "laundryhub",
    "title": "LaundryHub Commercial System",
    "description": "Commercial laundry franchise management and customer mobile order tracking system.",
    "github_url": "",
    "demo_url": "https://kustoomkaret.vercel.app",
    "technologies": [
      "TypeScript",
      "React Native",
      "Node.js",
      "PostgreSQL"
    ],
    "opensource": false,
    "category": "Mobile App",
    "image": "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "sekolah-pgri",
    "title": "Sekolah PGRI Portal",
    "description": "School management portal featuring student enrollment, academic reporting, and announcements.",
    "github_url": "",
    "demo_url": "https://sekolah-pgri.vercel.app",
    "technologies": [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "MySQL"
    ],
    "opensource": false,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mrket-id",
    "title": "MRKET.id Marketplace",
    "description": "Digital e-commerce marketplace platform built for seller storefronts and payment integrations.",
    "github_url": "",
    "demo_url": "https://mrket-landing-page.vercel.app",
    "technologies": [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "TailwindCSS"
    ],
    "opensource": false,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1556742049-0a67568d0d9f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "scrumtify-platform",
    "title": "Scrumtify Agile Platform",
    "description": "Real-time agile sprint planning and task orchestration workspace for engineering teams.",
    "github_url": "",
    "demo_url": "https://scrumtify-dashboard.vercel.app",
    "technologies": [
      "TypeScript",
      "React",
      "Node.js",
      "WebSockets"
    ],
    "opensource": false,
    "category": "System & Utilities",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "smarttraffic",
    "title": "SmartTraffic AI",
    "description": "AI-powered traffic light system that optimizes flow and safety through computer vision density detection and real-time path scheduling.",
    "github_url": "https://github.com/santanamnaa/SmartTraffic",
    "demo_url": "https://smarttraffic.vercel.app",
    "technologies": [
      "Python",
      "OpenCV",
      "C++",
      "Path-Finding Algorithms"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "easeneura",
    "title": "EaseNeura",
    "description": "Flutter mobile application connecting users with mental health specialists and self-care tracking tools. Cited in Joecy Scientific Journal (2025).",
    "github_url": "https://github.com/santanamnaa/easeneura",
    "demo_url": "https://easeneura.vercel.app",
    "technologies": [
      "Dart",
      "Flutter",
      "C++",
      "Kotlin",
      "Swift"
    ],
    "opensource": true,
    "category": "Mobile App",
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "tspdigital",
    "title": "TSP Digital Agency",
    "description": "Official agency platform built with React/Next.js and interactive 3D particle animations using Three.js.",
    "github_url": "https://github.com/santanamnaa/tspdigital",
    "demo_url": "https://tspdigital.id",
    "technologies": [
      "TypeScript",
      "React",
      "Next.js",
      "Three.js",
      "TailwindCSS"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "finchat",
    "title": "FinChat Analytics",
    "description": "Financial chat interface and analytics platform with real-time streaming components.",
    "github_url": "https://github.com/gentaArnezzi/finchat",
    "demo_url": "https://finchat-web.vercel.app",
    "technologies": [
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "tamankehati",
    "title": "Pangkalan Data Taman Kehati",
    "description": "Full-stack environmental tracking database system for Ministry of Environment with automated testing suites (Jest, Playwright) and Redis caching.",
    "github_url": "https://github.com/gentaArnezzi/tamankehati",
    "demo_url": "https://tamankehati-8x6q.vercel.app",
    "technologies": [
      "TypeScript",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Jest",
      "Playwright"
    ],
    "opensource": true,
    "category": "Data & Cloud",
    "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "glycora",
    "title": "Glycora Health",
    "description": "Smart diabetes prediction application assessing risk using personal health data for early prevention. 𐤿",
    "github_url": "https://github.com/santanamnaa/Glycora",
    "demo_url": "",
    "technologies": [
      "Python",
      "Jupyter Notebook",
      "C++",
      "Cython"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "simjang",
    "title": "Simjang Heart Risk",
    "description": "Simjang is a heart disease prediction app built with Streamlit and scikit-learn machine learning classifiers. ️",
    "github_url": "https://github.com/santanamnaa/simjang",
    "demo_url": "https://simjang.streamlit.app",
    "technologies": [
      "Python",
      "Streamlit",
      "Scikit-Learn",
      "Jupyter"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "basic-todolist",
    "title": "Basic To-Do List",
    "description": "Console-based To-Do List application implementing Java OOP principles and clean command-line interfaces.",
    "github_url": "https://github.com/santanamnaa/basic-todolist",
    "demo_url": "",
    "technologies": [
      "Java",
      "OOP",
      "CLI"
    ],
    "opensource": true,
    "category": "System & Utilities",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "easypick",
    "title": "EasyPick Reservation",
    "description": "Android reservation application with built-in location search (Google Maps SDK) and unit/instrumentation tests.",
    "github_url": "https://github.com/santanamnaa/easypick",
    "demo_url": "",
    "technologies": [
      "Java",
      "Kotlin",
      "Android SDK",
      "Google Maps SDK",
      "Espresso"
    ],
    "opensource": true,
    "category": "Mobile App",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "rag-agent-tidb",
    "title": "TiDB Vector RAG Agent",
    "description": "Production-grade RAG chatbot using TiDB Cloud Vector database, Prometheus metrics logging, and Sentry error tracking.",
    "github_url": "https://github.com/santanamnaa/rag-agent-tidb",
    "demo_url": "",
    "technologies": [
      "Python",
      "FastAPI",
      "TiDB Vector DB",
      "Ollama",
      "DeepSeek",
      "Prometheus"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mylinx",
    "title": "MyLinx UMKM Platform",
    "description": "No-code digitalization platform for Indonesian MSMEs (UMKMs) presented at ICISS 2026 conference (SUS score 85.0).",
    "github_url": "https://github.com/raexera/MyLinx",
    "demo_url": "https://mylinx.tech",
    "technologies": [
      "Blade (Laravel/PHP)",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "QRIS API"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ai-skill-gap-analyst",
    "title": "AI Skill Gap Analyst",
    "description": "Multi-agent system that parses candidate CVs and maps skill gaps against job qualification criteria.",
    "github_url": "https://github.com/santanamnaa/ai-skill-gap-analyst",
    "demo_url": "",
    "technologies": [
      "Python",
      "LangGraph",
      "spaCy",
      "Ollama"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "databook",
    "title": "DataBook Library System",
    "description": "DataBook is a library management system for efficient book lending and record management.",
    "github_url": "https://github.com/santanamnaa/Databook",
    "demo_url": "",
    "technologies": [
      "PHP",
      "MySQL",
      "HTML",
      "CSS"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "fifa21-player-prediction",
    "title": "FIFA 21 Player Analytics",
    "description": "Data cleansing pipeline and machine learning regression model for predicting FIFA 21 player performance and value.",
    "github_url": "https://github.com/santanamnaa/FIFA21-Player-Prediction",
    "demo_url": "",
    "technologies": [
      "Python",
      "Jupyter Notebook",
      "Pandas",
      "Scikit-Learn"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "huggingface-transformers-lab",
    "title": "Transformers & LLM Fine-Tuning Lab",
    "description": "Large Language Model experiments, fine-tuning HuggingFace Transformers, text generation, and NLP classification pipelines.",
    "github_url": "https://github.com/santanamnaa/NN_DeepLearning",
    "technologies": [
      "Python",
      "PyTorch",
      "HuggingFace",
      "Transformers"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "agency-nexus",
    "title": "Agency Nexus",
    "description": "Project repository for agency-nexus built with TypeScript.",
    "github_url": "https://github.com/santanamnaa/agency-nexus",
    "demo_url": "",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "aiti",
    "title": "Aiti",
    "description": "Project repository for aiti built with TypeScript.",
    "github_url": "https://github.com/santanamnaa/aiti",
    "demo_url": "https://aiti-ashen.vercel.app",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mrketid",
    "title": "Mrket.id",
    "description": "Project repository for mrket.id built with TypeScript.",
    "github_url": "https://github.com/santanamnaa/mrket.id",
    "demo_url": "",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "kehati-be-30",
    "title": "Kehati Be 30",
    "description": "Project repository for kehati-be-30 built with Python.",
    "github_url": "https://github.com/santanamnaa/kehati-be-30",
    "demo_url": "",
    "technologies": [
      "Python"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lawapponboardingv2",
    "title": "Lawapp Onboarding V2",
    "description": "Project repository for lawapp_onboarding_v2 built with TypeScript.",
    "github_url": "https://github.com/santanamnaa/lawapp_onboarding_v2",
    "demo_url": "https://lawapp-onboarding-v2.vercel.app",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "imah-purna-38",
    "title": "Imah Purna 38",
    "description": "Project repository for Imah-Purna-38 built with HTML.",
    "github_url": "https://github.com/santanamnaa/Imah-Purna-38",
    "demo_url": "",
    "technologies": [
      "HTML"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "pizza-promotion",
    "title": "Pizza Promotion App",
    "description": "Project repository for pizza-promotion built with TypeScript.",
    "github_url": "https://github.com/santanamnaa/pizza-promotion",
    "demo_url": "https://pizza-promotion.vercel.app",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1516116211223-48a12725222b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "smart-chatbot-with-retrieval-augmented-generation",
    "title": "RAG Chatbot Framework",
    "description": "This is a simple project to understand how RAG + LLM works. I implement it fo...",
    "github_url": "https://github.com/santanamnaa/Smart-Chatbot-with-Retrieval-Augmented-Generation",
    "demo_url": "",
    "technologies": [
      "Python"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mlops-foundations-01",
    "title": "Mlops Foundations 01",
    "description": "Project repository for mlops-foundations-01 built with -.",
    "github_url": "https://github.com/santanamnaa/mlops-foundations-01",
    "demo_url": "",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "strategive",
    "title": "Strategive Web App",
    "description": "Project repository for strategive built with TypeScript.",
    "github_url": "https://github.com/santanamnaa/strategive",
    "demo_url": "https://strategive.vercel.app",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "kodera",
    "title": "Kodera Platform",
    "description": "Project repository for kodera built with TypeScript.",
    "github_url": "https://github.com/santanamnaa/kodera",
    "demo_url": "https://kodera-id-santana-menas-projects.vercel.app",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "studentbuddytracker",
    "title": "Student Buddy Tracker",
    "description": "Project repository for StudentBuddyTracker built with -.",
    "github_url": "https://github.com/santanamnaa/StudentBuddyTracker",
    "demo_url": "",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "drawio",
    "title": "Drawio",
    "description": "Project repository for drawio built with -.",
    "github_url": "https://github.com/santanamnaa/drawio",
    "demo_url": "",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "predictheartdisease",
    "title": "Predict Heart Disease",
    "description": "Project repository for predict_heart_disease built with Jupyter Notebook.",
    "github_url": "https://github.com/santanamnaa/predict_heart_disease",
    "demo_url": "",
    "technologies": [
      "Jupyter Notebook"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "nndeeplearning",
    "title": "Nn Deeplearning",
    "description": "The purpose of this project is to build a machine learning model to predict c...",
    "github_url": "https://github.com/santanamnaa/NN_DeepLearning",
    "demo_url": "",
    "technologies": [
      "Jupyter Notebook"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "data-cleansing",
    "title": "FIFA Data Cleansing Pipeline",
    "description": "This project focuses on applying data cleansing techniques to the FIFA 21 dat...",
    "github_url": "https://github.com/santanamnaa/Data-Cleansing",
    "demo_url": "",
    "technologies": [
      "Jupyter Notebook"
    ],
    "opensource": true,
    "category": "Data & Cloud",
    "image": "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "identik",
    "title": "Identik Web Portal",
    "description": "Project repository for identik built with HTML.",
    "github_url": "https://github.com/santanamnaa/identik",
    "demo_url": "",
    "technologies": [
      "HTML"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "examples",
    "title": "Internet Computer Code Samples",
    "description": "Example applications, microservices, and code samples for the Internet Computer",
    "github_url": "https://github.com/santanamnaa/examples",
    "demo_url": "https://dfinity.org",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "tsplane",
    "title": "Tsplane",
    "description": "Jira, Linear, Monday, and ClickUp alternative. TSPlane is a fork from Pla...",
    "github_url": "https://github.com/tspdigital/tsplane",
    "demo_url": "http://plane.so",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "System & Utilities",
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "onvlotspf",
    "title": "Onvlo Tspf",
    "description": "Project repository for onvlo_TSPF built with TypeScript.",
    "github_url": "https://github.com/tspdigital/onvlo_TSPF",
    "demo_url": "",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "github",
    "title": ".github",
    "description": "A description for Scrumtify",
    "github_url": "https://github.com/scrumtified/.github",
    "demo_url": "",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "onvlos",
    "title": "Onvlos",
    "description": "Project repository for onvlos built with TypeScript.",
    "github_url": "https://github.com/gentaArnezzi/onvlos",
    "demo_url": "",
    "technologies": [
      "TypeScript"
    ],
    "opensource": true,
    "category": "Web Development",
    "image": "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "langchain-rag-agent",
    "title": "LangChain RAG & Prompt Agent",
    "description": "Retrieval-Augmented Generation agent built with LangChain, vector context retrieval, and custom prompt templates.",
    "github_url": "https://github.com/santanamnaa/Smart-Chatbot-with-Retrieval-Augmented-Generation",
    "technologies": [
      "Python",
      "LangChain",
      "OpenAI",
      "Vector DB"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "computer-vision-cnn",
    "title": "Computer Vision CNN Classifier",
    "description": "Deep Convolutional Neural Network (CNN) architecture for image recognition and object classification.",
    "github_url": "https://github.com/santanamnaa/CNN1",
    "technologies": [
      "Python",
      "PyTorch",
      "OpenCV",
      "CNN"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "rnn-encoder-decoder",
    "title": "RNN Encoder-Decoder Seq2Seq Model",
    "description": "Recurrent Neural Network (RNN) encoder-decoder model for sequence-to-sequence transformation and time-series prediction.",
    "github_url": "https://github.com/santanamnaa/NN_DeepLearning",
    "technologies": [
      "Python",
      "PyTorch",
      "RNN",
      "LSTM"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "tableqa-question-answering",
    "title": "TableQA Question Answering Agent",
    "description": "Question answering agent over structured tabular data using Tapas transformer models and NLP table parsing.",
    "github_url": "https://github.com/santanamnaa/MasteringAI",
    "technologies": [
      "Python",
      "Transformers",
      "TableQA",
      "Pandas"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "nlp-text-summarization",
    "title": "NLP Abstractive Text Summarizer",
    "description": "Abstractive text summarization pipeline utilizing pre-trained transformer models for long-form document compression.",
    "github_url": "https://github.com/santanamnaa/MasteringAI",
    "technologies": [
      "Python",
      "HuggingFace",
      "NLTK",
      "PyTorch"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "tfidf-text-classification",
    "title": "TF-IDF Text Classification Engine",
    "description": "Text classification system analyzing text representations, TF-IDF vectorization, and Naive Bayes / SVM classifiers.",
    "github_url": "https://github.com/santanamnaa/MasteringAI",
    "technologies": [
      "Python",
      "Scikit-Learn",
      "TF-IDF",
      "NLTK"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "gradio-model-ui",
    "title": "Gradio AI Model Web Interface",
    "description": "Interactive web user interface for machine learning model inference and real-time parameter tuning powered by Gradio.",
    "github_url": "https://github.com/santanamnaa/MasteringAI",
    "technologies": [
      "Python",
      "Gradio",
      "Scikit-Learn",
      "FastAPI"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "scikit-learn-ml-pipeline",
    "title": "Scikit-Learn Automated ML Pipeline",
    "description": "End-to-end automated machine learning pipeline with feature scaling, cross-validation, hyperparameter tuning, and model evaluation.",
    "github_url": "https://github.com/santanamnaa/predict_heart_disease",
    "technologies": [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy"
    ],
    "opensource": true,
    "category": "AI & Machine Learning",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "gdsc-python-data-science",
    "title": "GDSC BINUS Data Science Workshop",
    "description": "Workshop material and interactive notebook developed for GDSC BINUS University Bandung covering data analysis fundamentals in Python.",
    "github_url": "https://github.com/santanamnaa/Data-Cleansing",
    "technologies": [
      "Python",
      "Jupyter",
      "Pandas",
      "Matplotlib"
    ],
    "opensource": true,
    "category": "Data & Cloud",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "automated-news-scraper",
    "title": "Automated Web News Scraper",
    "description": "Automated news web scraper extracting structured article content and metadata for downstream NLP analysis.",
    "github_url": "https://github.com/santanamnaa/MasteringAI",
    "technologies": [
      "Python",
      "BeautifulSoup",
      "Requests",
      "Pandas"
    ],
    "opensource": true,
    "category": "System & Utilities",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
  }
];
