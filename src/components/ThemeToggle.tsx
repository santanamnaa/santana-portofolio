"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.9 }}
      onClick={(e) => {
        e.stopPropagation();
        setTheme(isDark ? "light" : "dark");
      }}
      aria-label="Toggle Dark or Light Theme"
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      className="relative flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-300/80 dark:border-slate-700/80 shadow-sm hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
    >
      {/* 180-Degree Rotating Geometric Aperture Circle */}
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
        className="w-4 h-4 rounded-full border border-slate-400/80 dark:border-slate-500 overflow-hidden bg-gradient-to-r from-slate-950 via-slate-950 to-slate-100 dark:from-slate-100 dark:via-slate-100 dark:to-slate-950 shadow-inner"
      />
    </motion.button>
  );
};
