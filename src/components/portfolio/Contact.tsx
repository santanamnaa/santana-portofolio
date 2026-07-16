"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Github, Linkedin, ExternalLink, Send } from "lucide-react";
import { useState } from "react";

const TARGET_EMAIL = "santanamnaa.dev@gmail.com";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: TARGET_EMAIL,
    href: `mailto:${TARGET_EMAIL}`
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
    value: "santanamnaa.dev",
    href: "https://santanamnaa.dev"
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Contact] From ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Santana,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-spacing">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="aceternity-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <Mail className="h-6 w-6 text-foreground" />
                  </motion.div>
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: 0.1 + index * 0.1 }}
                    >
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                        <IconComponent className="h-5 w-5 text-muted-foreground" />
                      </motion.div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-base hover:text-foreground transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-base">{item.value}</div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="aceternity-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <ExternalLink className="h-6 w-6 text-foreground" />
                  </motion.div>
                  Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
                    >
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                        <IconComponent className="h-5 w-5 text-muted-foreground" />
                      </motion.div>
                      <div>
                        <div className="text-sm text-muted-foreground">{link.label}</div>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base hover:text-foreground transition-colors"
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

          {/* Contact Form — uses mailto to avoid backend setup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="aceternity-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <Send className="h-6 w-6 text-foreground" />
                  </motion.div>
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="mt-2"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <Label htmlFor="email">Your Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="mt-2"
                      />
                    </motion.div>
                  </div>
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
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      className="mt-2 min-h-[140px]"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" size="lg" className="aceternity-button w-full">
                        <Send className="h-5 w-5 mr-3" />
                        Send via Email App
                      </Button>
                    </motion.div>
                    <p className="text-xs text-muted-foreground mt-3 text-center">
                      Will open your default email client pre-filled and send to{" "}
                      <span className="text-foreground font-medium">{TARGET_EMAIL}</span>
                    </p>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};