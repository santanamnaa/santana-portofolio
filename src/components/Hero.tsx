import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold">
            Santana Mena
          </h1>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
            AI Engineer & Full-Stack Developer
          </h2>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Bandung, Indonesia</span>
          </div>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Computer Science undergraduate specializing in AI Engineering, RAG/LLM, and Full-Stack Development.
          </p>
          
          {/* CTA Button */}
          <div className="pt-4">
            <Button size="lg" asChild>
              <a href="/contact">
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-8">
            {[
              { icon: Github, href: "https://github.com/santanamnaa", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/santana-mena", label: "LinkedIn" },
              { icon: Mail, href: "mailto:santanamnaa.dev@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};