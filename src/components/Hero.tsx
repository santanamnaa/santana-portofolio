"use client";

import { SplineCharacter } from "./SplineCharacter";
import { HeroCaptionBadge } from "./HeroCaptionBadge";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-100/80 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 select-none">
      
      {/* 3D Spline Canvas */}
      <SplineCharacter />

      {/* Dead-Centered Pure White Typewriter Introduction Badge */}
      <HeroCaptionBadge />

    </section>
  );
};
