"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Search, Shield, PhoneCall, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

export const DigitalGrowthJourney: React.FC = () => {
  const { t } = useLanguage();

  const stepIcons = [Search, Shield, PhoneCall, TrendingUp];
  const stepColors = [
    { border: "border-gold-metallic/40", glow: "group-hover:border-gold-bright", text: "text-gold-bright", bg: "from-gold-metallic/20" },
    { border: "border-accent-cyan/40", glow: "group-hover:border-accent-cyan", text: "text-accent-cyan", bg: "from-accent-cyan/20" },
    { border: "border-accent-purple/40", glow: "group-hover:border-accent-purple", text: "text-accent-purple", bg: "from-accent-purple/20" },
    { border: "border-gold-bright/40", glow: "group-hover:border-gold-bright", text: "text-gold-bright", bg: "from-gold-bright/20" },
  ];

  return (
    <section id="journey" className="relative py-24 bg-cosmic-black overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-metallic/30 bg-cosmic-deep/60 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold-bright">
              {t.journey.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-silver-gradient">{t.journey.title}</span>
          </h2>

          <p className="text-base sm:text-lg text-text-secondary">
            {t.journey.subtitle}
          </p>
        </div>

        {/* 4 Connected Pathway Nodes */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-metallic/10 via-accent-cyan/40 to-gold-bright/60 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {t.journey.steps.map((step, idx) => {
              const Icon = stepIcons[idx];
              const theme = stepColors[idx];

              return (
                <div
                  key={step.title}
                  className="group relative rounded-2xl border border-white/10 bg-cosmic-card backdrop-blur-xl p-6 sm:p-7 hover:border-gold-metallic/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-cosmic-black/60 flex flex-col justify-between"
                >
                  {/* Subtle hover gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${theme.bg} to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none`}
                  />

                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-cosmic-deep border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-gold-bright transition-all duration-300">
                        <Icon className={`w-6 h-6 ${theme.text}`} />
                      </div>
                      <span className="text-3xl font-black text-white/20 group-hover:text-gold-bright/40 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold-bright transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-text-secondary leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Arrow Indicator */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-text-muted group-hover:text-white transition-colors">
                    <span>Phase 0{idx + 1}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
