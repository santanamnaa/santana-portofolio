import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, ExternalLink, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const ModernHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <div className="space-y-4">
              <Badge variant="outline" className="animate-fade-in border-primary/20 bg-primary/5">
                🚀 Available for Opportunities
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-fade-in">
                <span className="block">Santana</span>
                <span className="block text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Mena
                </span>
              </h1>
              
              <div className="space-y-3 animate-fade-in delay-300">
                <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                  AI Engineer & Full-Stack Developer
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Bandung, Indonesia</span>
                </div>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in delay-500 max-w-2xl">
              Computer Science undergraduate specializing in{" "}
              <span className="text-primary font-semibold">AI Engineering</span>,{" "}
              <span className="text-primary font-semibold">RAG/LLM</span>, and{" "}
              <span className="text-primary font-semibold">Full-Stack Development</span>.
              Building innovative digital solutions for Indonesian SMEs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-700">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 transform hover:scale-105" asChild>
                <a href="/contact">
                  <Mail className="h-5 w-5" />
                  Let's Collaborate
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 hover:bg-primary/10 transition-all duration-300" asChild>
                <a href="/projects">
                  <ExternalLink className="h-5 w-5" />
                  View My Work
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 animate-fade-in delay-1000">
              {[
                { icon: Github, href: "https://github.com/santanamnaa", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/santana-mena", label: "LinkedIn" },
                { icon: Mail, href: "mailto:santanamnaa.dev@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-full bg-muted/10 border border-border/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in delay-500">
            <div className="relative w-96 h-96 mx-auto">
              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-spin" style={{ animationDuration: '8s' }}>
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              
              {/* Profile Picture Placeholder */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-8xl font-bold text-primary backdrop-blur-sm">
                SM
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center animate-float">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center animate-float delay-500">
                <span className="text-xl">💻</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center animate-float delay-1000">
                <span className="text-lg">⚡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-8 h-12 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <ArrowDown className="h-4 w-4 mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};