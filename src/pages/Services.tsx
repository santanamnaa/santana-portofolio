import { Header } from "@/components/portfolio/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code, 
  Smartphone, 
  Database, 
  Cloud, 
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Target,
  Lightbulb,
  Workflow
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Engineering & RAG Systems",
    description: "Advanced AI solutions with Retrieval-Augmented Generation",
    longDescription: "Develop cutting-edge AI applications using the latest RAG technologies, LLM integration, and custom machine learning models. Specializing in anti-hallucination systems and production-ready AI solutions.",
    features: [
      "RAG (Retrieval-Augmented Generation) implementation",
      "LLM integration with DeepSeek, Ollama",
      "Vector database optimization (TiDB Cloud)",
      "Custom chatbot development",
      "ML model training and deployment",
      "AI system monitoring and evaluation"
    ],
    technologies: ["Python", "TiDB Vector", "DeepSeek", "Ollama", "BAAI/bge-m3", "scikit-learn", "Jupyter"],
    pricing: "Starting from $2,000",
    timeline: "2-6 weeks",
    category: "AI/ML"
  },
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description: "Modern, responsive web applications with latest technologies",
    longDescription: "Build scalable, performant web applications using React, Next.js, and TypeScript. From simple landing pages to complex enterprise applications with real-time features and cloud deployment.",
    features: [
      "React & Next.js 14 applications",
      "TypeScript for type safety",
      "Responsive design with Tailwind CSS",
      "API development with Node.js",
      "Database integration and optimization",
      "Cloud deployment and hosting"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Supabase", "Vercel"],
    pricing: "Starting from $1,500",
    timeline: "1-4 weeks",
    category: "Web Development"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications with Flutter",
    longDescription: "Create beautiful, native-quality mobile applications for both iOS and Android using Flutter. Perfect for startups and businesses looking to reach mobile audiences with a single codebase.",
    features: [
      "Cross-platform development (iOS & Android)",
      "Native performance with Flutter",
      "Custom UI/UX design",
      "Firebase integration",
      "Push notifications",
      "App store deployment assistance"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Provider", "Bloc", "REST APIs"],
    pricing: "Starting from $3,000",
    timeline: "3-8 weeks",
    category: "Mobile Development"
  },
  {
    icon: Database,
    title: "Backend & Database Solutions",
    description: "Scalable backend systems and database architecture",
    longDescription: "Design and implement robust backend systems with modern databases, APIs, and cloud infrastructure. Specializing in microservices architecture and database optimization.",
    features: [
      "RESTful API development",
      "Database design and optimization",
      "Authentication & authorization",
      "Microservices architecture",
      "Real-time features with WebSockets",
      "Performance monitoring"
    ],
    technologies: ["Node.js", "Express", "Python", "FastAPI", "MySQL", "PostgreSQL", "MongoDB"],
    pricing: "Starting from $1,200",
    timeline: "1-3 weeks",
    category: "Backend"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description: "Cloud deployment, CI/CD, and infrastructure management",
    longDescription: "Set up reliable cloud infrastructure, automated deployment pipelines, and monitoring systems. Ensure your applications are scalable, secure, and performant in production.",
    features: [
      "Cloud deployment (AWS, Vercel, Railway)",
      "CI/CD pipeline setup",
      "Docker containerization",
      "Database hosting and optimization",
      "Performance monitoring",
      "Security best practices"
    ],
    technologies: ["AWS", "Docker", "GitHub Actions", "Vercel", "Railway", "Supabase"],
    pricing: "Starting from $800",
    timeline: "1-2 weeks",
    category: "DevOps"
  },
  {
    icon: Users,
    title: "SME Digital Solutions",
    description: "Complete digital transformation for small-medium enterprises",
    longDescription: "Comprehensive digital solutions tailored for Indonesian SMEs. From business websites to custom management systems, helping businesses grow in the digital age.",
    features: [
      "Business website development",
      "E-commerce solutions",
      "Management system automation",
      "Digital marketing setup",
      "Training and support",
      "Ongoing maintenance"
    ],
    technologies: ["React", "Next.js", "Supabase", "Stripe", "WhatsApp API", "QRIS Integration"],
    pricing: "Custom packages available",
    timeline: "2-6 weeks",
    category: "Business Solutions"
  }
];

const processSteps = [
  {
    icon: Lightbulb,
    title: "Discovery & Planning",
    description: "Understanding your needs, goals, and technical requirements"
  },
  {
    icon: Target,
    title: "Strategy & Design",
    description: "Creating detailed project roadmap and technical architecture"
  },
  {
    icon: Code,
    title: "Development",
    description: "Building your solution with regular updates and feedback loops"
  },
  {
    icon: CheckCircle,
    title: "Testing & Deployment",
    description: "Thorough testing and smooth deployment to production"
  },
  {
    icon: Workflow,
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and performance optimization"
  }
];

const whyChooseMe = [
  {
    icon: Brain,
    title: "AI Expertise",
    description: "Specialized knowledge in modern AI technologies and RAG systems"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient development process with quick turnaround times"
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Clear communication and collaborative approach throughout the project"
  },
  {
    icon: Target,
    title: "Quality First",
    description: "Clean, maintainable code with comprehensive testing and documentation"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold">
                My <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From AI engineering to full-stack development, I provide comprehensive 
                digital solutions that drive business growth and innovation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="gap-2">
                  <Clock className="h-4 w-4" />
                  Fast turnaround
                </Badge>
                <Badge variant="outline" className="gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Quality guaranteed
                </Badge>
                <Badge variant="outline" className="gap-2">
                  <Users className="h-4 w-4" />
                  Client-focused approach
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="glass-effect hover:shadow-xl transition-all duration-500 group">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <Badge variant="outline" className="w-fit mb-2">
                        {service.category}
                      </Badge>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-sm leading-relaxed">{service.longDescription}</p>
                      
                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.technologies.slice(0, 4).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {service.technologies.length > 4 && (
                            <Badge variant="secondary" className="text-xs">
                              +{service.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Pricing & Timeline */}
                      <div className="flex justify-between items-center pt-4 border-t border-border/20">
                        <div className="text-sm">
                          <div className="flex items-center gap-1 text-primary font-semibold">
                            <DollarSign className="h-4 w-4" />
                            {service.pricing}
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {service.timeline}
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="gap-2">
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="py-20 px-6 bg-muted/5">
          <div className="container mx-auto">
            <h2 className="section-heading">Why Choose Me</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseMe.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="glass-effect text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="section-heading">My Process</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="flex gap-6 items-start">
                      {/* Step Number & Icon */}
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-4 border-primary/20">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        {index !== processSteps.length - 1 && (
                          <div className="w-0.5 h-16 bg-border mt-4" />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">Step {index + 1}</Badge>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss your requirements and build something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="/contact">
                    Get Free Consultation
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  View Portfolio
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;