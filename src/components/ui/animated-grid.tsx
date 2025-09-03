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
  preview: {
    features: string[];
    tech_highlights: string;
  };
}

interface AnimatedGridProps {
  projects: Project[];
}

export const AnimatedGrid = ({ projects }: AnimatedGridProps) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="project-card group relative"
          variants={itemVariants}
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Project Preview Overlay */}
          <motion.div 
            className="project-preview absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm z-10 flex items-center justify-center rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center p-6 space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: hoveredProject === project.id ? 1 : 0 }}
                transition={{ delay: 0.1 }}
              >
                <Eye className="h-8 w-8 mx-auto text-primary" />
              </motion.div>
              <h4 className="font-semibold">Quick Preview</h4>
              <div className="space-y-2">
                {project.preview.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 10
                    }}
                    transition={{ delay: 0.2 + featureIndex * 0.1 }}
                  >
                    <Badge variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              <motion.p 
                className="text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ delay: 0.4 }}
              >
                {project.preview.tech_highlights}
              </motion.p>
            </div>
          </motion.div>

          {/* Main Card Content */}
          <Card className="border-none bg-transparent h-full">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {project.category}
                </Badge>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Star className="h-3 w-3" />
                  <span>{project.stars}</span>
                </div>
              </div>
              <CardTitle className="text-lg leading-tight">
                {project.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1">
                {project.stack.slice(0, 3).map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + techIndex * 0.05 }}
                  >
                    <Badge variant="secondary" className="tech-tag text-xs">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
                {project.stack.length > 3 && (
                  <Badge variant="secondary" className="tech-tag text-xs">
                    +{project.stack.length - 3}
                  </Badge>
                )}
              </div>

              {/* Updated Date */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>Updated {project.updated}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </motion.div>
                {project.demo && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="default" size="sm" className="flex-1 gap-2" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};
