import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Award, FileText } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium animate-pulse">
            <Award className="h-4 w-4" />
            <span>Google AI Professional & SAP Analytics Cloud Certified</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Santana Mena
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl text-primary font-medium tracking-wide">
            Software Engineer & Full-Stack Developer
          </h2>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4.5 w-4.5 text-primary" />
            <span className="font-light">Bandung, Indonesia | Willing to Relocate / Work Remotely</span>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Detail-oriented and results-driven engineer specializing in building high-performance full-stack web/mobile applications, robust backend REST APIs, and Retrieval-Augmented Generation (RAG) AI workflows.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="/contact">
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="/Projects">
                View My Projects
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-8">
            {[
              { icon: Github, href: "https://github.com/santanamnaa", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/santana-mena", label: "LinkedIn" },
              { icon: Mail, href: "mailto:santanamnaadev@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-muted hover:border-primary/40 transition-all duration-300"
              >
                <Icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};