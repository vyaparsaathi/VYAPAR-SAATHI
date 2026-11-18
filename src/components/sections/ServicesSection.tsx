"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  TrendingUp,
  MapPin,
  Laptop,
  Search,
  Share2,
  Wrench,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  X,
  MessageSquare,
} from "lucide-react";
import { ServiceItem } from "@/data/translations";

export const ServicesSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const serviceIcons = [TrendingUp, MapPin, Laptop, Search, Share2, Wrench];

  return (
    <section id="services" className="relative py-28 bg-cosmic-midnight/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold-metallic/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-metallic/30 bg-cosmic-deep/60 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold-bright">
              {t.services.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-silver-gradient">{t.services.title}</span>
          </h2>

          <p className="text-base sm:text-lg text-text-secondary">
            {t.services.subtitle}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, idx) => {
            const Icon = serviceIcons[idx];

            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-gold-metallic/20 bg-cosmic-card backdrop-blur-xl p-8 hover:border-gold-metallic/70 transition-all duration-400 shadow-xl shadow-cosmic-black/70 flex flex-col justify-between"
              >
                {/* Metallic subtle top accent bar */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-gold-bright/40 to-transparent group-hover:via-gold-bright transition-all duration-300" />

                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold text-gold-metallic/30 group-hover:text-gold-bright transition-colors">
                      {service.number}
                    </span>
                    <div className="w-13 h-13 p-3 rounded-xl bg-cosmic-deep border border-gold-metallic/30 text-gold-bright group-hover:bg-gold-gradient group-hover:text-cosmic-black transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-bright transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Benefit Points */}
                  <ul className="space-y-2.5 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-xs text-text-muted">
                        <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-3 px-4 rounded-xl border border-gold-metallic/30 bg-cosmic-deep/60 hover:bg-gold-gradient hover:text-cosmic-black text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>{t.services.learnMore}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cosmic-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-2xl border border-gold-metallic/50 bg-cosmic-midnight p-8 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full border border-white/10 bg-cosmic-deep text-text-muted hover:text-white hover:border-gold-bright transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-bold uppercase tracking-widest text-gold-bright mb-2 block">
                {selectedService.number} / {t.services.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {selectedService.title}
              </h3>

              <p className="text-base text-text-secondary leading-relaxed mb-6 font-normal">
                {selectedService.fullDesc}
              </p>

              {/* Core Features */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-bright mb-3">
                  {language === "hi" ? "शामिल प्रमुख कार्य" : "Key Deliverables"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2.5 p-3 rounded-lg border border-white/5 bg-cosmic-deep/60 text-xs text-text-secondary"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold-bright flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-gold-gradient text-cosmic-black font-bold text-xs uppercase tracking-wider text-center btn-gold-sweep shadow-gold-glow"
                >
                  {language === "hi" ? "इस सेवा के लिए बात करें" : "Enquire for this Service"}
                </a>
                <a
                  href={`https://wa.me/917704841382?text=${encodeURIComponent(
                    `Hello Vyapar Sathi, I am interested in ${selectedService.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl border border-emerald-500/40 bg-emerald-950/30 text-emerald-400 font-semibold text-xs text-center flex items-center justify-center gap-2 hover:bg-emerald-950/60 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
