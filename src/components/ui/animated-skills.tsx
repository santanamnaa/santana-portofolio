"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Brain, Wrench, Users, TrendingUp } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  icon: React.ComponentType<any>;
  title: string;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    title: "Languages & Runtime",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 90, category: "Programming" },
      { name: "JavaScript/TypeScript", level: 85, category: "Programming" },
      { name: "Java", level: 75, category: "Programming" },
      { name: "PHP", level: 70, category: "Programming" },
      { name: "Dart", level: 65, category: "Programming" },
    ]
  },
  {
    icon: Wrench,
    title: "Frameworks & Libraries",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "FastAPI", level: 85, category: "Backend" },
      { name: "Next.js 14", level: 80, category: "Frontend" },
      { name: "Node.js/Express", level: 75, category: "Backend" },
      { name: "Flutter", level: 70, category: "Mobile" },
      { name: "OpenCV", level: 65, category: "Computer Vision" },
    ]
  },
  {
    icon: Brain,
    title: "AI/ML",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "RAG Systems", level: 90, category: "AI" },
      { name: "Model Development", level: 80, category: "AI" },
      { name: "Embeddings (BAAI/bge-m3)", level: 85, category: "AI" },
      { name: "scikit-learn", level: 75, category: "ML" },
      { name: "Data Analysis", level: 80, category: "ML" },
    ]
  },
  {
    icon: Database,
    title: "Databases",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "TiDB Cloud (VECTOR)", level: 85, category: "Database" },
      { name: "PostgreSQL", level: 75, category: "Database" },
      { name: "Firebase", level: 80, category: "Database" },
      { name: "Supabase", level: 70, category: "Database" },
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "RESTful APIs", level: 85, category: "Backend" },
      { name: "Git/GitHub Actions", level: 80, category: "DevOps" },
      { name: "Docker", level: 70, category: "DevOps" },
      { name: "Vercel", level: 75, category: "Deployment" },
    ]
  },
  {
    icon: Users,
    title: "Soft Skills",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Problem Solving", level: 90, category: "Soft Skills" },
      { name: "Teamwork", level: 85, category: "Soft Skills" },
      { name: "Communication", level: 80, category: "Soft Skills" },
      { name: "Leadership", level: 75, category: "Soft Skills" },
    ]
  }
];

export const AnimatedSkills = () => {
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Core Skills
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-effect hover:shadow-xl transition-all duration-500 group">
                  <CardHeader className="text-center pb-4">
                    <motion.div 
                      className="w-12 h-12 mx-auto bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className="h-6 w-6 text-primary" />
                    </motion.div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3 text-primary" />
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                            variants={progressVariants}
                            custom={skill.level}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-white/20 rounded-full"
                              animate={{
                                x: ["-100%", "100%"],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: 1,
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="glass-effect inline-block">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Categories</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold text-primary">85%</div>
                  <div className="text-sm text-muted-foreground">Average Proficiency</div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
