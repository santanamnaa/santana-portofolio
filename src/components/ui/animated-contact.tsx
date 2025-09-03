"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar, Target, Zap, TrendingUp, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "santanamnaa.dev@gmail.com",
    href: "mailto:santanamnaa.dev@gmail.com"
  },
  {
    icon: Mail,
    label: "Alt Email",
    value: "santanamnaa8@gmail.com",
    href: "mailto:santanamnaa8@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 823-2187-9086",
    href: "tel:+6282321879086"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bandung, Indonesia",
    href: null
  }
];

const socialLinks = [
  {
    icon: ExternalLink,
    label: "Website",
    value: "santanamena.com",
    href: "https://santanamena.com"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/santanamnaa",
    href: "https://github.com/santanamnaa"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/santana-mena",
    href: "https://linkedin.com/in/santana-mena"
  }
];

const roadmapItems = [
  {
    icon: Target,
    title: "RAG/Agents Production-Ready",
    description: "Add observability (Langfuse), evaluation (RAGAS), reranker, guardrails, CI prompt tests",
    timeline: "Q1-Q2 2025"
  },
  {
    icon: Zap,
    title: "MLOps Implementation",
    description: "Experiment tracking, lightweight model registry, ingestion/ETL pipelines",
    timeline: "Q2-Q3 2025"
  },
  {
    icon: TrendingUp,
    title: "SaaS for SMEs",
    description: "Website templates + product chatbot, QRIS/WhatsApp ordering flow, analytics dashboard",
    timeline: "Q3-Q4 2025"
  }
];

export const AnimatedContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div variants={itemVariants}>
              <Card className="glass-effect hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Mail className="h-5 w-5 text-primary" />
                    </motion.div>
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/10 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="h-4 w-4 text-muted-foreground" />
                        </motion.div>
                        <div>
                          <div className="text-xs text-muted-foreground">{item.label}</div>
                          {item.href ? (
                            <a 
                              href={item.href}
                              className="text-sm hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <div className="text-sm">{item.value}</div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-effect hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </motion.div>
                    Social Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/10 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="h-4 w-4 text-muted-foreground" />
                        </motion.div>
                        <div>
                          <div className="text-xs text-muted-foreground">{link.label}</div>
                          <a 
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:text-primary transition-colors"
                          >
                            {link.value}
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form & Roadmap */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="glass-effect hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Send className="h-5 w-5 text-primary" />
                    </motion.div>
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          required
                          className="mt-1"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          required
                          className="mt-1"
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What's this about?"
                        required
                        className="mt-1"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project or opportunity..."
                        required
                        className="mt-1 min-h-[120px]"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full gap-2"
                          disabled={isSubmitting || isSubmitted}
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              >
                                <Send className="h-5 w-5" />
                              </motion.div>
                              Sending...
                            </>
                          ) : isSubmitted ? (
                            <>
                              <CheckCircle className="h-5 w-5" />
                              Message Sent!
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Roadmap */}
            <motion.div variants={itemVariants}>
              <Card className="glass-effect hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Calendar className="h-5 w-5 text-primary" />
                    </motion.div>
                    6-12 Month Roadmap
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Current focus areas and upcoming projects
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {roadmapItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex gap-4 p-4 rounded-lg bg-muted/10 border border-border/30 hover:bg-muted/20 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{item.title}</h4>
                            <motion.div
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + index * 0.1 }}
                            >
                              <Badge variant="outline" className="text-xs">
                                {item.timeline}
                              </Badge>
                            </motion.div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center space-y-4 p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold">Ready to Collaborate?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm actively seeking opportunities in AI Engineering and Full-Stack Development. 
                Let's discuss how we can build innovative solutions together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="gap-2" asChild>
                    <a href="mailto:santanamnaa.dev@gmail.com">
                      <Mail className="h-5 w-5" />
                      Send Message
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <a href="https://calendly.com/santanamena" target="_blank" rel="noopener noreferrer">
                      <Calendar className="h-5 w-5" />
                      Schedule Call
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
