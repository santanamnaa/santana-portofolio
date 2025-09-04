"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Calendar } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  stars: number;
  updated: string;
  github: string;
  demo?: string;
  category: string;
}

const featuredProjects: Project[] = [
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
  return (
    <section id="projects" className="section-padding">
      <div className="container-spacing">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        
        <div className="card-spacing">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="aceternity-card group">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <h3 className="text-2xl font-medium">{project.title}</h3>
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                          >
                            <Badge variant="outline" className="text-sm">
                              {project.category}
                            </Badge>
                          </motion.div>
                        </div>
                        <p className="text-muted-foreground text-lg">
                          {project.description}
                        </p>
                      </div>
                      <motion.div 
                        className="flex items-center gap-2 text-muted-foreground"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Star className="h-5 w-5" />
                        <span className="text-lg">{project.stars}</span>
                      </motion.div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-base">
                      {project.longDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-muted-foreground">Technologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.stack.slice(0, 5).map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="secondary" className="tech-tag">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                        {project.stack.length > 5 && (
                          <Badge variant="secondary" className="tech-tag">
                            +{project.stack.length - 5}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Updated Date */}
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="h-5 w-5" />
                      <span>Updated {project.updated}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="aceternity-button-outline w-full justify-center"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5 mr-3" />
                          View Code
                        </a>
                      </Button>
                    </motion.div>
                    {project.demo && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          size="lg"
                          className="aceternity-button w-full justify-center"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-5 w-5 mr-3" />
                            Live Demo
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};