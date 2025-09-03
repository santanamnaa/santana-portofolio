import { EnhancedProjects } from "@/components/ui/enhanced-projects";

const featuredProjects = [
  {
    id: "rag-agent-tidb",
    title: "RAG Chatbot — TiDB Cloud VECTOR + DeepSeek",
    description: "Anti-hallucination chatbot with Retrieval-Augmented Generation",
    longDescription: "Advanced RAG implementation using TiDB Cloud's vector database for semantic search and DeepSeek LLM for response generation. Features CSV ingestion, embedding generation, vector search, and synthesized answers with complete documentation.",
    stack: ["Python", "TiDB Cloud", "BAAI/bge-m3", "Ollama", "DeepSeek", "pandas"],
    stars: 1,
    updated: "2025-08-29",
    github: "https://github.com/santanamnaa/rag-agent-tidb",
    demo: null,
    category: "AI/ML"
  },
  {
    id: "smart-chatbot-rag",
    title: "Smart-Chatbot with RAG",
    description: "Lightweight RAG for TSP Digital's internal knowledge",
    longDescription: "Custom RAG system built for TSP Digital's knowledge base with DeepSeek integration via Ollama. Includes Jupyter notebook for experimentation and production chatbot script.",
    stack: ["Python", "DeepSeek", "Ollama", "TiDB Cloud", "Jupyter"],
    stars: 0,
    updated: "2025-08-29",
    github: "https://github.com/santanamnaa/Smart-Chatbot-with-RAG",
    demo: null,
    category: "AI/ML"
  },
  {
    id: "tspdigital",
    title: "TSPDigital — Agency Website",
    description: "Next.js 14 agency website deployed on Vercel",
    longDescription: "Full-featured agency website built with Next.js 14, TypeScript, and Tailwind CSS. Features modern design, responsive layout, and integrated services showcase.",
    stack: ["TypeScript", "Next.js 14", "Tailwind", "shadcn/ui", "Vercel"],
    stars: 0,
    updated: "2025-08-25",
    github: "https://github.com/santanamnaa/tspdigital",
    demo: "https://tspdigital.agency",
    category: "Web Development"
  },
  {
    id: "easeneura",
    title: "EaseNeura — Mental-Health App",
    description: "Flutter app connecting users to mental health professionals",
    longDescription: "Comprehensive mental health application built with Flutter for cross-platform deployment. Features user-professional matching, self-care tools, and mental wellness tracking.",
    stack: ["Flutter", "Dart", "Firebase", "Multi-platform"],
    stars: 6,
    updated: "2024-08-16",
    github: "https://github.com/santanamnaa/EaseNeura",
    demo: null,
    category: "Mobile Development"
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
    demo: null,
    category: "AI/ML"
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
    demo: null,
    category: "AI/ML"
  }
];

export const Projects = () => {
  return <EnhancedProjects projects={featuredProjects} />;
};