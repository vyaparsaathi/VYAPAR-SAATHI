"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Compass, Cpu, MessageSquareText, Target, CheckSquare, Handshake } from "lucide-react";

export const WhyVyaparSathi: React.FC = () => {
  const { t } = useLanguage();

  const pillarIcons = [Compass, Cpu, MessageSquareText, Target, CheckSquare, Handshake];

  return (
    <section id="about" className="relative py-28 bg-cosmic-black overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gold-metallic/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-metallic/30 bg-cosmic-deep/60 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold-bright">
              {t.whyUs.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 whitespace-pre-line leading-[1.15]">
            <span className="text-silver-gradient">{t.whyUs.title}</span>
          </h2>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.whyUs.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.number ? parseInt(pillar.number, 10) - 1 : 0] || Compass;

            return (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl border border-white/10 bg-cosmic-card backdrop-blur-xl p-8 hover:border-gold-metallic/50 transition-all duration-300 shadow-xl shadow-cosmic-black/70 flex flex-col justify-between"
              >
                <div>
                  {/* Top Identifier */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cosmic-deep border border-gold-metallic/30 flex items-center justify-center text-gold-bright group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-cosmic-black transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-2xl font-black text-white/20 group-hover:text-gold-bright transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-bright transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="text-sm text-text-secondary leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold-metallic/40 group-hover:bg-gold-bright group-hover:shadow-gold-glow transition-all" />
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-text-muted">
                    Pillar {pillar.number}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
