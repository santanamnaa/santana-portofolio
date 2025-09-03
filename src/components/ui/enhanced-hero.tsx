"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";

export const EnhancedHero = () => {
  const drops = useMemo(() => (
    Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 1.8 + Math.random() * 1.6,
      opacity: 0.15 + Math.random() * 0.25,
      length: 36 + Math.round(Math.random() * 20),
    }))
  ), []);

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Minimalist Background + Rain */}
      <div className="absolute inset-0 -z-10">
        {/* soft radial gradient vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.04),transparent_50%)]" />
        {/* rain layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {drops.map((d) => (
            <motion.span
              key={d.id}
              className="absolute top-[-12%] w-px bg-foreground/30"
              style={{ left: `${d.left}%`, height: `${d.length}px`, opacity: d.opacity }}
              animate={{ y: ["-12%", "115%"] }}
              transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>
      </div>

      <div className="container-spacing">
        <div className="text-center space-y-12">
          {/* Name with Aceternity-style animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-semibold tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Santana Mena
            </motion.h1>
          </motion.div>

          {/* Title with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl text-muted-foreground font-normal">
              AI Engineer & Full-Stack Developer
            </h2>
          </motion.div>

          {/* Location with floating animation */}
          <motion.div
            className="flex items-center justify-center gap-3 text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <MapPin className="h-5 w-5" />
            </motion.div>
            <span className="text-lg">Bandung, Indonesia</span>
          </motion.div>

          {/* Description with enhanced spacing */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Computer Science undergraduate specializing in{" "}
              <span className="text-foreground font-medium">AI Engineering</span>,{" "}
              <span className="text-foreground font-medium">RAG/LLM</span>, and{" "}
              <span className="text-foreground font-medium">Full-Stack Development</span>.
              Building innovative digital solutions for Indonesian SMEs.
            </p>
          </motion.div>

          {/* CTA Buttons with Aceternity-style hover effects */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="aceternity-button"
                asChild
              >
                <a href="/contact">
                  <Mail className="h-5 w-5 mr-3" />
                  Get in Touch
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="aceternity-button-outline"
                asChild
              >
                <a href="/projects">
                  View Projects
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links with enhanced spacing and animations */}
          <motion.div
            className="flex justify-center gap-8 pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
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
                className="w-12 h-12 rounded-full bg-muted/30 border border-border/20 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:border-border/40 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              className="w-8 h-14 border-2 border-muted-foreground/30 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <ArrowDown className="h-4 w-4 mt-3" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
