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

const workExperiences: Experience[] = [
  {
    title: "Full-Stack Developer (Contract)",
    company: "PT Aitiserve Djaya Naraya",
    location: "Bandung, Indonesia",
    period: "Jan 2026 – Mar 2026",
    type: "Contract",
    achievements: [
      "Developed and deployed corporate web platforms and school portals using React, Next.js, and TypeScript, hosted on Vercel",
      "Engineered high-performance Python desktop utilities to automate DOCX to PDF format conversions with low memory footprints",
      "Optimized frontend builds and Next.js API hooks, achieving a 30% reduction in initial bundle load times and higher Lighthouse scores",
      "Implemented pre-commit git checks and automated formatting rules to enforce clean code quality standards"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Python", "Vercel", "Git"]
  },
  {
    title: "Full-Stack Developer & Business Analyst Intern",
    company: "PT Gunung Amal Solution Internationals",
    location: "Bandung, Indonesia",
    period: "Feb 2025 – Feb 2026",
    type: "Internship",
    achievements: [
      "Designed and built the company’s internal Human Resource Management System (HRMS) and Project Management System using Node.js and PostgreSQL",
      "Engineered database schemas, query logic, and workflows for the Audit Trail Management System to enhance security compliance",
      "Set up containerized local development and staging environments using Docker, streamlining developer onboarding",
      "Collaborated in Agile (Scrum) sprints to bridge communication between business leads and developers"
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "Docker", "Agile/Scrum"]
  },
  {
    title: "Full-Stack Developer (Contract)",
    company: "Multiple Clients (e.g. Suma Barber)",
    location: "Remote",
    period: "2023 – 2025",
    type: "Contract",
    achievements: [
      "Developed web applications for Suma Barber and other local commercial clients using modern JavaScript/TypeScript frameworks",
      "Built online booking systems, analytics dashboards, and responsive, interactive brand profiles",
      "Integrated secure authentication and payment flows to deliver fully-functional, production-ready SaaS applications"
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Supabase", "TailwindCSS"]
  }
];

const additionalProjects: Experience[] = [
  {
    title: "Co-Founder & Technical Lead",
    company: "TSP Digital",
    location: "Bandung, Indonesia",
    period: "Aug 2025 – Jun 2026",
    type: "Leadership & Agency",
    achievements: [
      "Led a development team to deliver 10+ web and mobile solutions, including Golkar Jawa Barat (Vue.js) and S.O.T.A.M (analytics dashboard)",
      "Designed and deployed custom Retrieval-Augmented Generation (RAG) AI engines utilizing Python, TiDB Cloud Vector, and Ollama to parse, embed, and index documentation",
      "Configured and maintained containerized self-hosted tools (like TSPlane, a fork of Plane) using Docker and Docker Compose on AWS",
      "Created shell and Python automation scripts for scheduled database backups and server resource utilization monitoring to prevent downtime"
    ],
    technologies: ["Python", "TiDB Cloud Vector", "Ollama", "Vue.js", "Docker", "AWS", "GitHub Actions"]
  },
  {
    title: "International Projects Coordinator",
    company: "Digital Language Learning Center (DLLC) BINUS",
    location: "Bandung, Indonesia",
    period: "Feb 2023 – Feb 2026",
    type: "Leadership",
    achievements: [
      "Successfully managed and coordinated 7 international collaborative language and cultural exchange projects with global partner universities",
      "Facilitated cross-border communications, event scheduling, and resource management across different time zones"
    ],
    technologies: ["Project Coordination", "Cross-cultural Communication", "Scheduling", "Resource Management"]
  },
  {
    title: "Freshmen Partner (FP) Mentor & Tech Guide",
    company: "BINUS University (ESSE)",
    location: "Bandung, Indonesia",
    period: "Sep 2023 – Sep 2024",
    type: "Mentorship",
    achievements: [
      "Mentored 15+ first-year Computer Science students in algorithms, database design (SQL), and object-oriented programming (OOP), accelerating their academic adaptation"
    ],
    technologies: ["Mentorship", "Algorithms", "SQL", "OOP", "Tutoring"]
  },
  {
    title: "Branding & Public Affairs Specialist",
    company: "BINUS English Club (BNEC)",
    location: "Bandung, Indonesia",
    period: "Sep 2022 – Sep 2023",
    type: "Leadership",
    achievements: [
      "Managed social media branding campaigns on Instagram and LinkedIn, increasing overall follower engagement by 45%",
      "Drafted press releases and managed external relations with partner organizations and media outlets"
    ],
    technologies: ["Branding", "Social Media", "Public Relations", "Content Writing"]
  }
];

export const Experience = () => {
  const renderExperienceList = (list: Experience[], sectionOffset: number) => (
    <div className="card-spacing">
      {list.map((exp, index) => {
        const globalIndex = sectionOffset + index;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: globalIndex % 2 === 0 ? -40 : 40 }}
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
                  <h4 className="text-lg font-medium text-muted-foreground">Key Contributions & Achievements</h4>
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
                  <h4 className="text-lg font-medium text-muted-foreground">Skills & Technologies</h4>
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
        );
      })}
    </div>
  );

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
          Experience & Projects
        </motion.h2>
        
        <div className="space-y-20 mt-12">
          {/* Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-3xl font-semibold">Professional Experience</h3>
              <div className="h-[1px] flex-1 bg-border/40" />
            </div>
            {renderExperienceList(workExperiences, 0)}
          </div>

          {/* Leadership & Additional Projects */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-3xl font-semibold">Additional Projects & Leadership</h3>
              <div className="h-[1px] flex-1 bg-border/40" />
            </div>
            {renderExperienceList(additionalProjects, 10)}
          </div>
        </div>
      </div>
    </section>
  );
};