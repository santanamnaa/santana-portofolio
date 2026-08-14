"use client";

import React, { Component, ReactNode, useState } from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class SplineErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn("Spline 3D Scene WebGL Warning Handled:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

interface SplineCharacterProps {
  sceneUrl?: string;
  onSplineLoad?: (splineApp: any) => void;
}

export const SplineCharacter = ({
  sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
  onSplineLoad
}: SplineCharacterProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fallbackUI = (
    <div suppressHydrationWarning className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="relative w-72 h-72 rounded-3xl overflow-hidden border-4 border-blue-400/80 shadow-2xl">
        <Image
          src="/images/santana_hero_avatar.jpg"
          alt="Santana Mena 3D Character Avatar"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Chest Badge on Fallback Avatar */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/95 backdrop-blur-xl border border-blue-400 px-4 py-2 rounded-xl text-center shadow-lg w-[85%]">
          <div className="text-sm font-black text-white uppercase tracking-wider">
            SANTANA MENA
          </div>
          <div className="text-[10px] font-extrabold text-blue-400 uppercase tracking-tight">
            SOFTWARE ENGINEER & BUSINESS ANALYST
          </div>
        </div>
      </div>
    </div>
  );

  const handleLoad = (splineApp: any) => {
    setIsLoading(false);
    if (onSplineLoad) {
      onSplineLoad(splineApp);
    }
  };

  return (
    <div suppressHydrationWarning className="relative w-full h-full rounded-2xl overflow-hidden bg-transparent flex items-center justify-center">
      
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div suppressHydrationWarning className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-50/90 backdrop-blur-sm space-y-3">
          <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
            Loading 3D Mesh Character...
          </div>
        </div>
      )}

      {!hasError ? (
        <SplineErrorBoundary fallback={fallbackUI}>
          <div suppressHydrationWarning className="w-full h-full relative z-10 flex items-center justify-center">
            <Spline
              scene={sceneUrl}
              onLoad={handleLoad}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
              className="w-full h-full"
            />
          </div>
        </SplineErrorBoundary>
      ) : (
        fallbackUI
      )}

    </div>
  );
};
