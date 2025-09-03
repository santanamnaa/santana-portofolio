"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Brain, Wrench, Users } from "lucide-react";

interface SkillCategory {
  icon: React.ComponentType<any>;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Python", "JavaScript/TypeScript", "Java", "PHP", "Dart", "C/C++"]
  },
  {
    icon: Wrench,
    title: "Frameworks",
    skills: ["FastAPI", "Django", "Next.js 14", "Flutter", "Node.js/Express", "OpenCV"]
  },
  {
    icon: Brain,
    title: "AI/ML",
    skills: ["RAG Systems", "Model Development", "Embeddings", "scikit-learn", "Data Analysis"]
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["TiDB Cloud (VECTOR)", "PostgreSQL", "Firebase", "Supabase", "MySQL"]
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    skills: ["RESTful APIs", "Git/GitHub", "Docker", "Vercel", "AWS (basic)"]
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Problem Solving", "Teamwork", "Communication", "Leadership", "Presentation"]
  }
];

export const MinimalSkills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="minimal-card h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                        <IconComponent className="h-4 w-4 text-foreground" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="tech-tag">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
