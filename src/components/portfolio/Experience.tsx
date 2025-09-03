import { EnhancedExperience } from "@/components/ui/enhanced-experience";

const experiences = [
  {
    title: "Full-Stack Developer (Intern)",
    company: "PT. Gunung Amal Solutions Internasional",
    location: "Bandung",
    period: "Feb 2025 - Present",
    type: "Internship",
    achievements: [
      "Built Attendance Management System (real-time check-in/out, leave tracking, RBAC) — React, TailwindCSS, Firebase",
      "Built Project Management System (assignment, progress tracking, collaboration) — Node.js, Express, cloud DB"
    ],
    technologies: ["React", "TailwindCSS", "Firebase", "Node.js", "Express"]
  },
  {
    title: "Full-Stack Developer (Freelance)",
    company: "Multiple Clients",
    location: "Remote",
    period: "2023 - 2025",
    type: "Freelance",
    achievements: [
      "Developed web apps for Suma Barber, PT Aitiserve, and other clients",
      "Built online booking systems, dashboards, and dynamic websites",
      "Delivered production-ready applications using modern tech stack"
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Supabase", "TypeScript"]
  },
  {
    title: "Business Analyst (Freelance)",
    company: "PT. Gunung Amal Solutions Internasional",
    location: "Bandung",
    period: "Jun 2024",
    type: "Contract",
    achievements: [
      "Designed Audit Trail Management System focusing on usability and security",
      "Bridged business requirements with technical implementation",
      "Delivered comprehensive system design documentation"
    ],
    technologies: ["System Design", "Business Analysis", "Documentation"]
  }
];

export const Experience = () => {
  return <EnhancedExperience experiences={experiences} />;
};