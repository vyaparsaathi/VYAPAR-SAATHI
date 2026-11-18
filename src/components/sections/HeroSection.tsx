"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Sparkles, ChevronDown, ShieldCheck, Zap } from "lucide-react";

// Dynamically import 3D Canvas with ssr: false so Three.js runs purely on client
const Hero3DCanvas = dynamic(
  () => import("@/components/3d/Hero3DCanvas").then((mod) => mod.Hero3DCanvas),
  { ssr: false }
);

export const HeroSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-16 md:py-32"
    >
      {/* 3D Immersive Royal Cosmic Canvas */}
      <Hero3DCanvas />

      {/* Atmospheric depth gradients overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-black/60 via-transparent to-cosmic-black pointer-events-none z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-accent-purple/10 via-gold-metallic/10 to-accent-cyan/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Foreground Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand Monogram Showcase Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex flex-col items-center"
        >
          <div className="relative p-1 rounded-2xl bg-gradient-to-br from-gold-bright via-gold-metallic to-cosmic-deep shadow-gold-glow">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-cosmic-black p-1 border border-gold-metallic/50 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Vyapar Sathi Official Metallic VS Monogram Logo"
                width={96}
                height={96}
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(217,164,65,0.4)]"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Small Top Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-metallic/30 bg-cosmic-card backdrop-blur-md mb-6 shadow-sm shadow-gold-metallic/10">
          <Sparkles className="w-3.5 h-3.5 text-gold-bright animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gold-bright">
            {t.hero.badge}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
          <span className="text-silver-gradient block sm:inline">
            {t.hero.headlineMain}
          </span>
        </h1>

        {/* Secondary Headline (Bilingual & Editorial) */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gold-gradient mb-6 max-w-3xl leading-[1.25]">
          {t.hero.headlineSecondary}
        </h2>

        {/* Supporting Description */}
        <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl font-normal leading-relaxed mb-10">
          {t.hero.description}
        </p>

        {/* Action Buttons (CTAs) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-gradient text-cosmic-black font-bold text-sm tracking-wider uppercase btn-gold-sweep shadow-gold-glow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>{t.hero.primaryCta}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-gold-metallic/40 bg-cosmic-card/80 backdrop-blur-md text-white font-semibold text-sm tracking-wider hover:border-gold-bright hover:bg-gold-metallic/10 hover:text-gold-bright transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{t.hero.secondaryCta}</span>
          </a>
        </div>

        {/* Value Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-text-muted"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-bright" />
            <span>{language === "hi" ? "पारदर्शी साझेदारी" : "Transparent Partnership"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent-cyan" />
            <span>{language === "hi" ? "वास्तविक कस्टमर कॉल्स" : "Real Customer Enquiries"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent-purple" />
            <span>{language === "hi" ? "लोकल मार्केट डोमिनेंस" : "Local Market Dominance"}</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-col items-center gap-2 text-text-muted hover:text-gold-bright transition-colors cursor-pointer"
          onClick={() => {
            const nextSec = document.getElementById("journey");
            if (nextSec) nextSec.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold">
            {t.hero.scrollPrompt}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gold-metallic" />
        </motion.div>
      </div>
    </section>
  );
};
