"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Eye, Compass, Layers, BarChart3, Rocket } from "lucide-react";

export const ProcessTimeline: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const icons = [Eye, Compass, Layers, BarChart3, Rocket];

  return (
    <section className="relative py-28 bg-cosmic-midnight/40 overflow-hidden">
      {/* Decorative gradient bloom */}
      <div className="absolute top-1/2 left-1/3 w-[700px] h-[500px] bg-accent-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-metallic/30 bg-cosmic-deep/60 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold-bright">
              {t.process.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-silver-gradient">{t.process.title}</span>
          </h2>

          <p className="text-base sm:text-lg text-text-secondary">
            {t.process.subtitle}
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {t.process.steps.map((step, idx) => {
            const Icon = icons[idx];
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "border-gold-bright bg-cosmic-card shadow-gold-glow/40 -translate-y-2"
                    : "border-white/10 bg-cosmic-deep/40 hover:border-gold-metallic/40 hover:bg-cosmic-card"
                }`}
              >
                <div>
                  {/* Top Step indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-2xl font-black transition-colors ${
                        isSelected ? "text-gold-bright" : "text-white/20"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-gold-gradient text-cosmic-black shadow-gold-glow"
                          : "bg-cosmic-black/60 text-text-muted border border-white/5"
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white mb-1.5">{step.title}</h3>
                  <span className="text-xs font-semibold text-gold-bright/90 uppercase tracking-wider block mb-3">
                    {step.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-text-secondary leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? "bg-gold-bright shadow-gold-glow" : "bg-white/20"
                    }`}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                    Step {step.number}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
