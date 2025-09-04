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

export const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-spacing">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="aceternity-card h-full group">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-12 h-12 bg-muted/50 rounded-xl flex items-center justify-center group-hover:bg-muted/70 transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent className="h-6 w-6 text-foreground" />
                      </motion.div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="secondary" className="tech-tag">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="aceternity-card inline-block">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  { number: "6+", label: "Categories" },
                  { number: "25+", label: "Technologies" },
                  { number: "3+", label: "Years Experience" },
                  { number: "85%", label: "Average Proficiency" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-4xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};