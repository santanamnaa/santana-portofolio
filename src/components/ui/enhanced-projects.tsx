"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Calendar, Eye } from "lucide-react";
import { useState } from "react";

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

interface EnhancedProjectsProps {
  projects: Project[];
}

export const EnhancedProjects = ({ projects }: EnhancedProjectsProps) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="aceternity-card group relative overflow-hidden">
                {/* Hover Preview Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm z-10 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center p-8 space-y-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Eye className="h-12 w-12 mx-auto text-foreground" />
                    </motion.div>
                    <h4 className="text-xl font-semibold">Quick Preview</h4>
                    <div className="space-y-3">
                      {project.stack.slice(0, 3).map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: hoveredProject === project.id ? 1 : 0,
                            y: hoveredProject === project.id ? 0 : 10
                          }}
                          transition={{ delay: 0.2 + techIndex * 0.1 }}
                        >
                          <Badge variant="secondary" className="tech-tag">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

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
