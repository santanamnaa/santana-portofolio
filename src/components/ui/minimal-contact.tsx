"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "santanamnaa.dev@gmail.com",
    href: "mailto:santanamnaa.dev@gmail.com"
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
  },
  {
    icon: ExternalLink,
    label: "Website",
    value: "santanamena.com",
    href: "https://santanamena.com"
  }
];

export const MinimalContact = () => {
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

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="minimal-card">
              <CardHeader>
                <CardTitle className="text-lg">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <IconComponent className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-sm hover:text-foreground transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm">{item.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="minimal-card">
              <CardHeader>
                <CardTitle className="text-lg">Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <IconComponent className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-xs text-muted-foreground">{link.label}</div>
                        <a 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-foreground transition-colors"
                        >
                          {link.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="minimal-card">
              <CardHeader>
                <CardTitle className="text-lg">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
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
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What's this about?"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      className="mt-1 min-h-[120px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="minimal-button w-full"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <Send className="h-4 w-4 mr-2" />
                        </motion.div>
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
