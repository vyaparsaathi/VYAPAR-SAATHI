"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Plus, Minus } from "lucide-react";

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-28 bg-cosmic-black overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[500px] bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-metallic/30 bg-cosmic-deep/60 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold-bright">
              {t.faq.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-silver-gradient">{t.faq.title}</span>
          </h2>

          <p className="text-base text-text-secondary">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-gold-metallic/60 bg-cosmic-card shadow-lg shadow-cosmic-black/50"
                    : "border-white/10 bg-cosmic-deep/40 hover:border-gold-metallic/30 hover:bg-cosmic-card"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? "border-gold-bright bg-gold-gradient text-cosmic-black"
                        : "border-white/20 text-text-muted"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm text-text-secondary leading-relaxed border-t border-white/5 font-normal">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
