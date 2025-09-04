"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, ArrowRight } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Full-Stack Developer (Intern)",
    company: "PT. Gunung Amal Solutions Internasional",
    location: "Bandung",
    period: "Feb 2025 - Present",
    type: "Internship",
    achievements: [
      "Built Attendance Management System (real-time check-in/out, leave tracking, RBAC) — React, TailwindCSS, Firebase",
      "Built Project Management System (assignment, progress tracking, collaboration) — Node.js, Express, cloud DB"
    ],
    technologies: ["React", "TailwindCSS", "Firebase", "Node.js", "Express"]
  },
  {
    title: "Full-Stack Developer (Freelance)",
    company: "Multiple Clients",
    location: "Remote",
    period: "2023 - 2025",
    type: "Freelance",
    achievements: [
      "Developed web apps for Suma Barber, PT Aitiserve, and other clients",
      "Built online booking systems, dashboards, and dynamic websites",
      "Delivered production-ready applications using modern tech stack"
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Supabase", "TypeScript"]
  },
  {
    title: "Chief Executive Officer (CEO)",
    company: "TSPDigital (Transformasi Strategi Progresif Digital)",
    location: "tspdigital.agency",
    period: "Sep 2024 – Present",
    type: "Founder & Executive",
    achievements: [
      "Founded and scaled a digital agency focusing on SaaS solutions, AI integration, and digital strategy for Indonesian SMEs (UMKM)",
      "Developed multi-layered product ecosystem including website builder, AI-powered chatbots, and digital content products",
      "Led cross-functional teams in design, development, and marketing to deliver cost-efficient and scalable solutions",
      "Built partnerships and client pipelines by aligning business models with local market needs and global best practices"
    ],
    technologies: [
      "Business Strategy",
      "AI/ML Integration",
      "Product Development",
      "Team Leadership",
      "Go-to-Market Execution"
    ]
}

];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-spacing">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>
        
        <div className="card-spacing">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="aceternity-card group">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                    <div className="space-y-4">
                      <motion.h3 
                        className="text-2xl font-medium"
                        whileHover={{ scale: 1.02 }}
                      >
                        {exp.title}
                      </motion.h3>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Building className="h-5 w-5" />
                        </motion.div>
                        <span className="text-lg">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge variant="outline" className="text-sm px-4 py-2">
                        {exp.type}
                      </Badge>
                    </motion.div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-muted-foreground">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li 
                          key={achIndex} 
                          className="text-muted-foreground flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + index * 0.1 + achIndex * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            className="text-foreground mt-1"
                            whileHover={{ scale: 1.2, rotate: 90 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-muted-foreground">Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="secondary" className="tech-tag">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
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