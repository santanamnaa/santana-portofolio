import { Header } from "@/components/portfolio/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, GraduationCap, Award, Users, BookOpen, Mail, Download, ExternalLink, Sparkles, Github, Linkedin } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2022-2026",
      title: "Computer Science Student",
      organization: "Bina Nusantara University (BINUS)",
      location: "Jakarta, Indonesia",
      type: "Education",
      description: "Pursuing B.Sc. in Computer Science with focus on AI Engineering and Software Development"
    },
    {
      year: "2025-Present",
      title: "Full-Stack Developer Intern",
      organization: "PT. Gunung Amal Solutions Internasional",
      location: "Bandung, Indonesia",
      type: "Work",
      description: "Building enterprise management systems with React, Node.js, and cloud technologies"
    },
    {
      year: "2023-2025",
      title: "Freelance Developer",
      organization: "Multiple Clients",
      location: "Remote",
      type: "Work",
      description: "Developing custom web applications and digital solutions for various businesses"
    },
    {
      year: "2024",
      title: "Business Analyst",
      organization: "PT. Gunung Amal Solutions Internasional",
      location: "Bandung, Indonesia",
      type: "Contract",
      description: "Designed comprehensive audit trail management system bridging business and technical requirements"
    }
  ];

  const organizations = [
    { name: "HIMTI", role: "Active Member", description: "Computer Science Student Association" },
    { name: "BNCC", role: "Participant", description: "BINUS Computer Club" },
    { name: "GDSC", role: "Member", description: "Google Developer Student Clubs" },
    { name: "BNEC", role: "Member", description: "BINUS English Club" }
  ];

  const highlights = [
    "RAG + LLM (TiDB Cloud VECTOR)",
    "Full‑stack: React/Next.js + FastAPI",
    "Observability: Langfuse, RAGAS",
    "Deployment: Vercel, Docker",
  ];

  const quickStats = [
    { label: "Projects", value: "25+", icon: Sparkles },
    { label: "Clients", value: "8+", icon: Users },
    { label: "Open‑source Stars", value: "10+", icon: Award },
    { label: "Years Coding", value: "3", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A passionate Computer Science student specializing in AI Engineering and Full-Stack Development. 
                I'm dedicated to building innovative digital solutions that make a real impact, particularly 
                for Indonesian SMEs through my work with TSP Digital and Strategy Era Digital.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                {highlights.map((h, i) => (
                  <Badge key={i} variant="secondary" className="fade-in-up" style={{ animationDelay: `${i * 60}ms` }}>
                    {h}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 mt-8 fade-in-up" style={{ animationDelay: `260ms` }}>
                <Button asChild>
                  <a href="mailto:santanamnaa.dev@gmail.com">
                    <Mail className="h-4 w-4 mr-2" /> Contact Me
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/santana-mena/" target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/santanamnaa" target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4 mr-2" /> GitHub
                  </a>
                </Button>
                <Button variant="ghost" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noreferrer">
                    <Download className="h-4 w-4 mr-2" /> Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6 bg-muted/5">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 fade-in-up">
                <h2 className="text-3xl font-bold">My Journey</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    My journey in technology began with a fascination for how artificial intelligence 
                    could solve real-world problems. As a Computer Science undergraduate at BINUS University, 
                    I've focused on developing expertise in AI Engineering, particularly in RAG (Retrieval-Augmented Generation) 
                    and LLM technologies.
                  </p>
                  <p className="leading-relaxed">
                    Through hands-on projects and professional experience, I've gained proficiency in 
                    full-stack development, working with modern technologies like React, Next.js, Python, 
                    and various AI/ML frameworks. My goal is to bridge the gap between cutting-edge AI 
                    research and practical business applications.
                  </p>
                  <p className="leading-relaxed">
                    Currently, I'm actively contributing to the Indonesian tech ecosystem by building 
                    digital solutions for SMEs, participating in competitive programming, and continuously 
                    learning about emerging technologies in the AI space.
                  </p>
                </div>
              </div>
              
              <div className="relative fade-in-up" style={{ animationDelay: `120ms` }}>
                <Card className="glass-effect">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" /> Quick Stats
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {quickStats.map((s, i) => (
                        <div key={i} className="rounded-xl border bg-background p-4 text-center fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                          <s.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                          <div className="text-2xl font-bold">{s.value}</div>
                          <div className="text-xs text-muted-foreground">{s.label}</div>
                        </div>
                      ))}
                    </div>
                    <Separator className="my-6" />
                    <div className="flex flex-wrap gap-2">
                      {highlights.map((h, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {h}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="section-heading">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
              {timeline.map((item, index) => (
                <Card key={index} className="glass-effect fade-in-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{item.year}</Badge>
                      <Badge variant={item.type === 'Education' ? 'default' : 'secondary'}>{item.type}</Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.organization} • {item.location}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Organizations */}
        <section className="py-20 px-6 bg-muted/5">
          <div className="container mx-auto">
            <h2 className="section-heading">Organizations & Activities</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8 fade-in-up">
              Communities I learn from and contribute to across campus and developer circles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {organizations.map((org, index) => (
                <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{org.name}</CardTitle>
                    <Badge variant="outline">{org.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">{org.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values & Philosophy */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="section-heading">Values & Philosophy</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Excellence</h3>
                  <p className="text-muted-foreground">
                    Committed to delivering high-quality solutions and continuously improving my skills 
                    to stay at the forefront of technology.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Collaboration</h3>
                  <p className="text-muted-foreground">
                    Believing in the power of teamwork and open communication to achieve 
                    greater results than individual effort alone.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Learning</h3>
                  <p className="text-muted-foreground">
                    Embracing a growth mindset and constantly learning new technologies 
                    to adapt to the ever-evolving tech landscape.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-muted-foreground mb-4">Open to collaborations, internships, and AI projects.</p>
                <div className="flex justify-center gap-3">
                  <Button asChild>
                    <a href="mailto:santanamnaa.dev@gmail.com"><Mail className="h-4 w-4 mr-2" /> Get in Touch</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://tspdigital.agency" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4 mr-2" /> See My Work</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;