"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showElsewhere, setShowElsewhere] = useState(false);

  const navItems = [
    { name: "About", href: "/" },
    { name: "Achievements", href: "/achievements" },
    { name: "Projects", href: "/projects" },
    { name: "Reach Me", href: "/contact" },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/santanamnaa" },
    { name: "LinkedIn", url: "https://linkedin.com/in/santana-mena" },
    { name: "Email", url: "mailto:santanamnaa@gmail.com" },
  ];

  return (
    <header className="fixed bottom-6 right-6 z-50 select-none">
      <div className="relative flex flex-col items-end gap-2">
        
        {/* Minimalist Translucent Glass Popover Card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="w-56 p-1.5 rounded-2xl bg-white/85 dark:bg-zinc-900/90 backdrop-blur-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-[0_12px_40px_rgba(0,0,0,0.15)] space-y-0.5"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-xl text-[13px] font-medium transition-all ${
                      isActive
                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold shadow-xs"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800/80"
                    }`}
                  >
                    <div>{item.name}</div>
                  </Link>
                );
              })}

              {/* Elsewhere Interactive Dropdown Accordion */}
              <div className="pt-0.5 border-t border-slate-100 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => setShowElsewhere(!showElsewhere)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-xl text-[13px] font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800/80 transition-colors"
                >
                  <div>Elsewhere</div>
                </button>

                <AnimatePresence>
                  {showElsewhere && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-3 pr-1 py-1 space-y-0.5"
                    >
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-zinc-800/60 transition-colors"
                        >
                          <div>{social.name}</div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Switcher Dial */}
              <div className="pt-1.5 mt-1 border-t border-slate-100 dark:border-zinc-800 flex justify-center">
                <ThemeToggle />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Minimalist Apple Glass Capsule Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="px-4 py-2 rounded-full bg-white/85 dark:bg-zinc-900/90 backdrop-blur-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-slate-900 dark:text-white font-medium text-xs transition-colors hover:bg-white dark:hover:bg-zinc-900"
        >
          <div>{isOpen ? "Close" : "Menu"}</div>
        </motion.button>

      </div>
    </header>
  );
};
