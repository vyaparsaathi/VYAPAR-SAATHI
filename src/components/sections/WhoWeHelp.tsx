"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  Wrench,
  Utensils,
  ShoppingBag,
  Activity,
  GraduationCap,
  Briefcase,
  MapPin,
  Building2,
  ArrowRight,
} from "lucide-react";

export const WhoWeHelp: React.FC = () => {
  const { t, language } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    Wrench,
    Utensils,
    ShoppingBag,
    Activity,
    GraduationCap,
    Briefcase,
    MapPin,
    Building2,
  };

  return (
    <section className="relative py-28 bg-cosmic-black overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-metallic/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-metallic/30 bg-cosmic-deep/60 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold-bright">
              {t.industries.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-silver-gradient">{t.industries.title}</span>
          </h2>

          <p className="text-base sm:text-lg text-text-secondary">
            {t.industries.subtitle}
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.industries.items.map((item) => {
            const Icon = iconMap[item.iconName] || Building2;

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-white/10 bg-cosmic-card backdrop-blur-xl p-6 hover:border-gold-metallic/60 transition-all duration-300 shadow-xl shadow-cosmic-black/60 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon with metallic rim */}
                  <div className="w-12 h-12 rounded-xl bg-cosmic-deep border border-gold-metallic/30 flex items-center justify-center text-gold-bright group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-cosmic-black transition-all duration-300 mb-5">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Industry Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-bright transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-text-secondary leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Explore link */}
                <a
                  href="#contact"
                  className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-text-muted group-hover:text-gold-bright transition-colors"
                >
                  <span>{language === "hi" ? "ग्रोथ रणनीति देखें" : "View Growth Strategy"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
