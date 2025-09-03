"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, ExternalLink, ArrowDown } from "lucide-react";

export const AnimatedHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge 
                variant="outline" 
                className="border-primary/20 bg-primary/5 animate-pulse"
              >
                🚀 Available for Opportunities
              </Badge>
              
              <motion.h1 
                className="text-6xl md:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block">Santana</span>
                <motion.span 
                  className="block text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Mena
                </motion.span>
              </motion.h1>
              
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                  AI Engineer & Full-Stack Developer
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Bandung, Indonesia</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Computer Science undergraduate specializing in{" "}
              <span className="text-primary font-semibold">AI Engineering</span>,{" "}
              <span className="text-primary font-semibold">RAG/LLM</span>, and{" "}
              <span className="text-primary font-semibold">Full-Stack Development</span>.
              Building innovative digital solutions for Indonesian SMEs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="gap-2 bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500" 
                  asChild
                >
                  <a href="/contact">
                    <Mail className="h-5 w-5" />
                    Let's Collaborate
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
                  className="gap-2 hover:bg-primary/10 transition-all duration-300" 
                  asChild
                >
                  <a href="/projects">
                    <ExternalLink className="h-5 w-5" />
                    View My Work
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
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
                  className="group w-12 h-12 rounded-full bg-muted/10 border border-border/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-96 h-96 mx-auto">
              {/* Rotating Ring */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent p-1"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>
              
              {/* Profile Picture Placeholder */}
              <motion.div 
                className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-8xl font-bold text-primary backdrop-blur-sm"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                SM
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <span className="text-2xl">🤖</span>
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              >
                <span className="text-xl">💻</span>
              </motion.div>
              <motion.div 
                className="absolute top-1/2 -right-8 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                }}
              >
                <span className="text-lg">⚡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div 
              className="w-8 h-12 border-2 border-muted-foreground/30 rounded-full flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <ArrowDown className="h-4 w-4 mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};