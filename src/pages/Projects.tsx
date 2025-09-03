import { Header } from "@/components/portfolio/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Calendar, Eye, Filter, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

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
    category: "AI/ML",
    featured: true,
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
    updated: "2025-08-29",
    github: "https://github.com/santanamnaa/Smart-Chatbot-with-RAG",
    demo: null,
    category: "AI/ML",
    featured: true,
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
    updated: "2025-08-25",
    github: "https://github.com/santanamnaa/tspdigital",
    demo: "https://tspdigital.agency",
    category: "Web Development",
    featured: true,
    status: "Live",
    preview: {
      features: ["Responsive Design", "Modern UI/UX", "SEO Optimized", "Fast Loading"],
      tech_highlights: "Next.js 14 + TypeScript"
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
    github: "https://github.com/santanamnaa/EaseNeura",
    demo: null,
    category: "Mobile Development",
    featured: true,
    status: "Development",
    preview: {
      features: ["Professional Matching", "Self-Care Tools", "Wellness Tracking", "Cross-Platform"],
      tech_highlights: "Flutter Multi-Platform"
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
    demo: null,
    category: "AI/ML",
    featured: true,
    status: "Prototype",
    preview: {
      features: ["Real-time Traffic Analysis", "Smart Light Control", "Computer Vision", "Business Plan"],
      tech_highlights: "OpenCV + AI Algorithms"
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
    demo: null,
    category: "AI/ML",
    featured: false,
    status: "Completed",
    preview: {
      features: ["Risk Prediction", "Interactive UI", "ML Models", "Data Visualization"],
      tech_highlights: "Streamlit + scikit-learn"
    }
  },
  {
    id: "easypick",
    title: "EasyPick — Restaurant Reservation",
    description: "Java-based restaurant reservation system",
    longDescription: "Full-featured restaurant reservation system built with Java. Includes CRUD operations for bookings and restaurants with both console and GUI interfaces.",
    stack: ["Java", "Swing", "MySQL"],
    stars: 4,
    updated: "2024-08-16",
    github: "https://github.com/santanamnaa/EasyPick",
    demo: null,
    category: "Backend",
    featured: false,
    status: "Completed",
    preview: {
      features: ["Booking Management", "Restaurant CRUD", "GUI Interface", "Database Integration"],
      tech_highlights: "Java + Swing + MySQL"
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
    github: "https://github.com/santanamnaa/DataBook",
    demo: null,
    category: "Web Development",
    featured: false,
    status: "Completed",
    preview: {
      features: ["Book Catalog", "Borrowing System", "Role-based Access", "Member Management"],
      tech_highlights: "PHP + MySQL"
    }
  }
];

const categories = ["All", "AI/ML", "Web Development", "Mobile Development", "Backend"];
const statusTypes = ["All", "Live", "Production", "Development", "Prototype", "Completed"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch-capable devices to enable tap-to-preview behavior
    const hasTouch =
      (typeof window !== 'undefined' && ('ontouchstart' in window || (navigator as any).maxTouchPoints > 0));
    setIsTouch(hasTouch);
  }, []);

  const filteredProjects = featuredProjects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const featuredOnly = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

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

        {/* Featured Projects */}
        {featuredOnly.length > 0 && (
          <section className="py-20 px-6">
            <div className="container mx-auto">
              <h2 className="section-heading">Featured Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredOnly.map((project) => (
                  <div
                    key={project.id}
                    className="project-card group relative"
                    onMouseEnter={() => !isTouch && setHoveredProject(project.id)}
                    onMouseLeave={() => !isTouch && setHoveredProject(null)}
                    onClick={() => {
                      if (!isTouch) return; // clicks act normally on non-touch
                      setActiveProject((prev) => (prev === project.id ? null : project.id));
                    }}
                  >
                    {/* Project Preview Overlay */}
                    <div
                      className={`project-preview absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-200 ${
                        (isTouch ? activeProject === project.id : hoveredProject === project.id)
                          ? 'opacity-100 pointer-events-auto'
                          : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="text-center p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
                        <Eye className="h-8 w-8 mx-auto text-primary" />
                        <h4 className="font-semibold">Quick Preview</h4>
                        <div className="space-y-2">
                          {project.preview.features.map((feature, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {project.preview.tech_highlights}
                        </p>
                      </div>
                    </div>

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
                        <div className="flex gap-2 pt-2 mt-auto">
                          <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                              <Github className="h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          {project.demo && (
                            <Button variant="default" size="sm" className="flex-1 gap-2" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                <ExternalLink className="h-4 w-4" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section className="py-20 px-6 bg-muted/5">
            <div className="container mx-auto">
              <h2 className="section-heading">More Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherProjects.map((project) => (
                  <Card key={project.id} className="glass-effect hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {project.status}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Star className="h-3 w-3" />
                            <span>{project.stars}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h4 className="font-semibold leading-tight">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.stack.slice(0, 3).map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.stack.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.stack.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3" />
                          View Code
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
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
