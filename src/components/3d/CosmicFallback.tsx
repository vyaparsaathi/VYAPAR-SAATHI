"use client";

import React from "react";

export const CosmicFallback: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Layered radial cosmic glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent-purple/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold-metallic/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[110px]" />
      
      {/* Cosmic grid lines */}
      <div className="absolute inset-0 cosmic-grid-pattern opacity-25" />

      {/* Decorative CSS floating geometric badges */}
      <div className="absolute top-24 left-[10%] w-16 h-16 border border-gold-metallic/30 rounded-2xl rotate-12 animate-float-slow bg-cosmic-card backdrop-blur-md flex items-center justify-center">
        <div className="w-6 h-6 border border-gold-bright rotate-45" />
      </div>

      <div className="absolute top-36 right-[12%] w-20 h-20 border border-accent-cyan/30 rounded-full animate-float-reverse bg-cosmic-card backdrop-blur-md flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border border-accent-cyan/60" />
      </div>

      <div className="absolute bottom-28 left-[15%] w-14 h-14 border border-accent-purple/30 rounded-lg -rotate-12 animate-float-slow bg-cosmic-card backdrop-blur-md" />
    </div>
  );
};
