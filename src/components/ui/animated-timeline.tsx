"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  achievements: string[];
  technologies: string[];
}

interface AnimatedTimelineProps {
  experiences: Experience[];
}

export const AnimatedTimeline = ({ experiences }: AnimatedTimelineProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <motion.div
        className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative flex items-start gap-6"
            variants={itemVariants}
          >
            {/* Timeline Dot */}
            <motion.div
              className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Content Card */}
            <motion.div
              className="flex-1"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass-effect hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Badge variant="outline">{exp.type}</Badge>
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.ul 
                    className="space-y-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li 
                        key={achIndex} 
                        className="text-muted-foreground flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 + achIndex * 0.1 }}
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="secondary" className="tech-tag">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
