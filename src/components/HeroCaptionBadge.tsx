"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const HeroCaptionBadge = () => {
  const fullText = "i, I'm Santana Mena, a Computer Science & Data Science Engineer at BINUS University. Operating as a Software Engineer, Business Analyst, and Product Leader, I am deeply passionate about bridging robust software architecture with strategic business insights. I focus on leading cross-functional engineering initiatives and transforming complex data into high-performance digital products.";
  const [displayedText, setDisplayedText] = useState("");

  // Mouse Coordinates for Parallax Black Shadow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 18 });

  // Dynamic Shadow Offset (-25px to 25px)
  const shadowX = useTransform(springX, [-0.5, 0.5], [-25, 25]);
  const shadowY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) - 0.5);
      mouseY.set((e.clientY / innerHeight) - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Typewriter Animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-auto max-w-[92vw] sm:max-w-2xl px-4 text-center pointer-events-auto select-none"
      suppressHydrationWarning
    >
      <div className="relative">
        
        {/* Dynamic Parallax Black Shadow Layer Behind Pure Text */}
        <motion.div
          style={{ x: shadowX, y: shadowY }}
          className="absolute -inset-10 rounded-full bg-black/85 dark:bg-black/95 blur-2xl pointer-events-none"
        />

        {/* Pure Raw Typography (Dead-Centered on Screen) */}
        <p className="relative z-10 text-xs sm:text-base font-semibold text-white leading-relaxed tracking-tight">
          <span className="font-swash text-4xl sm:text-5xl font-normal text-blue-500 inline-block pr-0.5 leading-none align-baseline">
            H
          </span>

          {/* Typed Text Stream (Hi, I'm Santana Mena...) */}
          <span>{displayedText}</span>
        </p>

      </div>
    </aside>
  );
};
