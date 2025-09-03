"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";

export const MinimalHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-medium tracking-tight">
              Santana Mena
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-xl md:text-2xl text-muted-foreground font-normal">
              AI Engineer & Full-Stack Developer
            </h2>
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex items-center justify-center gap-2 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MapPin className="h-4 w-4" />
            <span>Bandung, Indonesia</span>
          </motion.div>

          {/* Description */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground leading-relaxed">
              Computer Science undergraduate specializing in AI Engineering, RAG/LLM, 
              and Full-Stack Development. Building innovative digital solutions for Indonesian SMEs.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="minimal-button"
              asChild
            >
              <a href="/contact">
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="minimal-button-outline"
              asChild
            >
              <a href="/projects">
                View Projects
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { icon: Github, href: "https://github.com/santanamnaa", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/santana-mena", label: "LinkedIn" },
              { icon: Mail, href: "mailto:santanamnaa.dev@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
