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

interface MinimalProjectsProps {
  projects: Project[];
}

export const MinimalProjects = ({ projects }: MinimalProjectsProps) => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="minimal-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-medium">{project.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4" />
                        <span>{project.stars}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="tech-tag">
                          {tech}
                        </Badge>
                      ))}
                      {project.stack.length > 4 && (
                        <Badge variant="secondary" className="tech-tag">
                          +{project.stack.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Updated Date */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Updated {project.updated}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3">
                    <Button 
                      variant="outline" 
                      className="minimal-button-outline justify-center"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button 
                        className="minimal-button justify-center"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
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
