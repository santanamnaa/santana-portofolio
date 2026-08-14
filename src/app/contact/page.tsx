import React from "react";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Reach Me | Santana Mena",
  description: "Contact Santana Mena.",
};

export default function ContactPage() {
  const contactLinks = [
    {
      label: "santanamnaa@gmail.com",
      href: "mailto:santanamnaa@gmail.com",
    },
    {
      label: "linkedin.com/in/santana-mena",
      href: "https://linkedin.com/in/santana-mena",
    },
    {
      label: "github.com/santanamnaa",
      href: "https://github.com/santanamnaa",
    },
    {
      label: "santanamnaa.dev",
      href: "https://www.santanamnaa.dev",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 text-slate-900 dark:text-gray-100 transition-colors duration-500 font-sans" suppressHydrationWarning>
      <Navbar />

      <section className="py-12 px-4">
        <div className="max-w-[65ch] mx-auto">
          <h1 className="text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white font-heading">
            Reach Me
          </h1>

          <div className="max-w-[300px] mx-auto space-y-4">
            {contactLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:underline transition-colors block"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-slate-500 dark:text-zinc-500 border-t border-slate-200/80 dark:border-zinc-800">
        &copy; {new Date().getFullYear()} Santana Mena.
      </footer>
    </div>
  );
}
