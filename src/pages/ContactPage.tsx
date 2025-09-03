import { Header } from "@/components/portfolio/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Calendar, 
  Target, 
  Zap, 
  TrendingUp,
  Send,
  MessageSquare,
  Clock,
  Globe
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Primary Email",
    value: "santanamnaa.dev@gmail.com",
    href: "mailto:santanamnaa.dev@gmail.com",
    description: "Business inquiries & collaboration"
  },
  {
    icon: Mail,
    label: "Alternative Email",
    value: "santanamnaa8@gmail.com",
    href: "mailto:santanamnaa8@gmail.com",
    description: "General correspondence"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 823-2187-9086",
    href: "tel:+6282321879086",
    description: "WhatsApp & calls available"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bandung, Indonesia",
    href: null,
    description: "GMT+7 timezone"
  }
];

const socialLinks = [
  {
    icon: ExternalLink,
    label: "Website",
    value: "santanamena.com",
    href: "https://santanamena.com",
    description: "Personal website & blog"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/santanamnaa",
    href: "https://github.com/santanamnaa",
    description: "24+ repositories"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/santana-mena",
    href: "https://linkedin.com/in/santana-mena",
    description: "Professional network"
  }
];

const roadmapItems = [
  {
    icon: Target,
    title: "RAG/Agents Production-Ready",
    description: "Add observability (Langfuse), evaluation (RAGAS), reranker, guardrails, CI prompt tests",
    timeline: "Q1-Q2 2025",
    progress: 60
  },
  {
    icon: Zap,
    title: "MLOps Implementation",
    description: "Experiment tracking, lightweight model registry, ingestion/ETL pipelines",
    timeline: "Q2-Q3 2025",
    progress: 30
  },
  {
    icon: TrendingUp,
    title: "SaaS for SMEs",
    description: "Website templates + product chatbot, QRIS/WhatsApp ordering flow, analytics dashboard",
    timeline: "Q3-Q4 2025",
    progress: 15
  }
];

const serviceAreas = [
  {
    title: "AI Engineering",
    description: "RAG systems, LLM integration, ML model development",
    technologies: ["Python", "TiDB Vector", "DeepSeek", "Ollama", "scikit-learn"]
  },
  {
    title: "Full-Stack Development",
    description: "Modern web applications, mobile apps, cloud deployment",
    technologies: ["React", "Next.js", "TypeScript", "Flutter", "Node.js"]
  },
  {
    title: "Digital Solutions for SMEs",
    description: "Custom business applications, automation, digital transformation",
    technologies: ["Supabase", "Firebase", "Vercel", "AWS", "Docker"]
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold">
                Let's <span className="text-primary">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to collaborate on your next AI project or digital solution? 
                I'm actively seeking opportunities to build innovative technology that makes an impact.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="gap-2">
                  <Clock className="h-4 w-4" />
                  Usually responds within 24 hours
                </Badge>
                <Badge variant="outline" className="gap-2">
                  <Globe className="h-4 w-4" />
                  Remote work available
                </Badge>
                <Badge variant="outline" className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Free consultation
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Send className="h-6 w-6 text-primary" />
                      Send Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Tell me about your project and let's discuss how we can work together.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="Project inquiry, collaboration, etc."
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectType">Project Type</Label>
                        <select
                          className="w-full p-2 border border-border rounded-md bg-background"
                          value={formData.projectType}
                          onChange={(e) => handleInputChange("projectType", e.target.value)}
                        >
                          <option value="">Select project type...</option>
                          <option value="ai-engineering">AI Engineering</option>
                          <option value="full-stack">Full-Stack Development</option>
                          <option value="mobile">Mobile App Development</option>
                          <option value="consulting">Technical Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                {/* Contact Information */}
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactInfo.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className="flex gap-3 p-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors">
                          <IconComponent className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <div className="text-sm font-medium">{item.label}</div>
                            {item.href ? (
                              <a 
                                href={item.href}
                                className="text-sm text-primary hover:underline"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <div className="text-sm">{item.value}</div>
                            )}
                            <div className="text-xs text-muted-foreground">{item.description}</div>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ExternalLink className="h-5 w-5 text-primary" />
                      Social Links
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {socialLinks.map((link, index) => {
                      const IconComponent = link.icon;
                      return (
                        <div key={index} className="flex gap-3 p-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors">
                          <IconComponent className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <div className="text-sm font-medium">{link.label}</div>
                            <a 
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline"
                            >
                              {link.value}
                            </a>
                            <div className="text-xs text-muted-foreground">{link.description}</div>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <Button size="lg" className="w-full gap-2" asChild>
                    <a href="mailto:santanamnaa.dev@gmail.com">
                      <Mail className="h-5 w-5" />
                      Email Me
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full gap-2" asChild>
                    <a href="https://linkedin.com/in/santana-mena" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 bg-muted/5">
          <div className="container mx-auto">
            <h2 className="section-heading">What I Can Help With</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceAreas.map((service, index) => (
                <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="section-heading">Current Roadmap & Focus</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {roadmapItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="glass-effect">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-lg">{item.title}</h4>
                            <Badge variant="outline" className="text-xs">
                              {item.timeline}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-3">
                            {item.description}
                          </p>
                          {/* Progress Bar */}
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{item.progress}%</span>
                            </div>
                            <div className="w-full bg-muted/20 rounded-full h-2">
                              <div 
                                className="bg-primary rounded-full h-2 transition-all duration-500"
                                style={{ width: `${item.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;