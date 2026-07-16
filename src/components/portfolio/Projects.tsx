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
    id: "movaads-ai-iot",
    title: "Movaads — AIoT Edge Vision System",
    description: "YOLOv8 & Intel OpenVINO edge-based ad analytics system",
    longDescription: "Edge-based computer vision system built for PT Lumina Media Digital to track and analyze advertising interaction. Implements real-time density detection and demographics tracking on IoT nodes.",
    stack: ["Python", "YOLOv8", "OpenVINO", "OpenCV", "Django", "FastAPI", "Docker"],
    stars: 0,
    updated: "2026-01-27",
    github: "https://github.com/santanamnaa/movaads-ai-iot",
    demo: "https://movaads.com",
    category: "AI/ML"
  },
  {
    id: "ai-skill-gap-analyst",
    title: "AI Skill Gap Analyst",
    description: "LangGraph-powered system mapping candidate CV competency gaps",
    longDescription: "An AI-powered recruiter agent that parses CVs, extracts technical skills using custom Named Entity Recognition (NER), and maps competency gaps against job profile requirements with 92% accuracy.",
    stack: ["Python", "LangGraph", "spaCy", "Ollama", "DeepSeek", "Streamlit"],
    stars: 0,
    updated: "2025-09-22",
    github: "https://github.com/santanamnaa/ai-skill-gap-analyst",
    demo: null,
    category: "AI/ML"
  },
  {
    id: "rag-agent-tidb",
    title: "RAG Chatbot — TiDB Cloud VECTOR + DeepSeek",
    description: "Production-grade anti-hallucination RAG chatbot with complete monitoring",
    longDescription: "Advanced RAG implementation utilizing TiDB Cloud's vector database for semantic search, DeepSeek for text generation, Sentence-Transformers for embeddings, and Prometheus/Sentry for telemetry.",
    stack: ["Python", "TiDB Cloud", "BAAI/bge-m3", "Ollama", "DeepSeek", "Prometheus", "Sentry"],
    stars: 1,
    updated: "2025-08-29",
    github: "https://github.com/santanamnaa/rag-agent-tidb",
    demo: null,
    category: "AI/ML"
  },
  {
    id: "tamankehati",
    title: "Pangkalan Data Taman Kehati",
    description: "Full-stack environmental database for Ministry of Environment",
    longDescription: "National environmental tracking database system built in compliance with Permen LH 03/2012. Includes public directories, observation maps, Shannon-Wiener indexes, and verification workflows.",
    stack: ["TypeScript", "Next.js", "FastAPI", "PostgreSQL", "PostGIS", "Redis", "Leaflet"],
    stars: 0,
    updated: "2026-05-12",
    github: "https://github.com/gentaArnezzi/tamankehati",
    demo: "https://youtu.be/TQILv-9CpYU",
    category: "Database"
  },
  {
    id: "siring-saijaan",
    title: "Siring Saijaan — Public Service Mobile App",
    description: "React Native cross-platform application for municipal services",
    longDescription: "Cross-platform mobile application providing public services, news, and incident reporting for Kotabaru. Developed in partnership with Rakha using React Native.",
    stack: ["TypeScript", "React Native", "Expo Router", "TailwindCSS", "Node.js"],
    stars: 0,
    updated: "2026-06-16",
    github: "https://github.com/santanamnaa/siring-saijaan",
    demo: "https://play.google.com/store/apps/details?id=com.siringsaijaan",
    category: "Mobile Development"
  },
  {
    id: "golkar-jabar",
    title: "Golkar Jawa Barat — Official Portal",
    description: "Official regional portal built with Vue.js/Nuxt 3",
    longDescription: "A high-performance civic and news portal developed for Golkar Jawa Barat. Built with Nuxt 3, Nuxt Content, and Tailwind CSS for rapid loading speeds.",
    stack: ["Vue.js", "Nuxt 3", "Nuxt Content", "Tailwind CSS", "Vercel"],
    stars: 0,
    updated: "2026-07-02",
    github: "https://github.com/santanamnaa/golkar-jabar",
    demo: "https://www.golkarjabar.id",
    category: "Web Development"
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