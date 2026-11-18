"use client";

import React, { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ChevronLeft, ChevronRight, Layers, ExternalLink, Info } from "lucide-react";

export const PortfolioSection: React.FC = () => {
  const { t, language } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const totalScroll = scrollWidth - clientWidth;
    if (totalScroll > 0) {
      setScrollProgress((scrollLeft / totalScroll) * 100);
    }
  };

  const scrollBy = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="relative py-28 bg-cosmic-midnight/50 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[650px] h-[450px] bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-metallic/30 bg-cosmic-deep/60 backdrop-blur-md mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold-bright">
                {t.portfolio.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              <span className="text-silver-gradient">{t.portfolio.title}</span>
            </h2>

            <p className="text-base text-text-secondary">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollBy(-380)}
              className="w-12 h-12 rounded-full border border-gold-metallic/30 bg-cosmic-deep/80 hover:border-gold-bright hover:bg-gold-metallic/10 text-white flex items-center justify-center transition-all shadow-md active:scale-95"
              aria-label="Scroll Portfolio Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollBy(380)}
              className="w-12 h-12 rounded-full border border-gold-metallic/30 bg-cosmic-deep/80 hover:border-gold-bright hover:bg-gold-metallic/10 text-white flex items-center justify-center transition-all shadow-md active:scale-95"
              aria-label="Scroll Portfolio Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Demo Notice Banner */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-cosmic-card/60 text-xs text-text-muted">
          <Info className="w-4 h-4 text-accent-cyan flex-shrink-0" />
          <span>{t.portfolio.demoNote}</span>
        </div>

        {/* Horizontal Drag/Scroll Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {t.portfolio.items.map((item) => (
            <div
              key={item.id}
              className="min-w-[320px] sm:min-w-[420px] max-w-[440px] rounded-2xl border border-gold-metallic/25 bg-cosmic-card backdrop-blur-xl p-7 flex flex-col justify-between hover:border-gold-bright hover:shadow-gold-glow/20 transition-all duration-300 group"
            >
              <div>
                {/* Visual Preview Header */}
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 border border-white/10 bg-gradient-to-br from-cosmic-deep via-cosmic-black to-cosmic-royal flex flex-col items-center justify-center p-6 text-center">
                  {/* Subtle Grid and Glow in card */}
                  <div className="absolute inset-0 cosmic-grid-pattern opacity-30" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold-metallic/20 rounded-full blur-2xl" />

                  {/* Demo Placeholder Monogram */}
                  <div className="relative z-10 w-14 h-14 rounded-xl border border-gold-metallic/40 bg-cosmic-midnight flex items-center justify-center text-gold-bright mb-3 group-hover:scale-110 transition-transform">
                    <Layers className="w-7 h-7" />
                  </div>
                  <span className="relative z-10 text-[11px] font-bold uppercase tracking-widest text-gold-bright bg-cosmic-black/80 px-3 py-1 rounded-full border border-gold-metallic/30">
                    Conceptual Architecture Prototype
                  </span>
                </div>

                {/* Category & Industry */}
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <span className="text-gold-bright uppercase tracking-wider">
                    {item.industry}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-white/5 border border-white/10 text-text-muted">
                    Demo Showcase
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-bright transition-colors">
                  {item.title}
                </h3>

                {/* Category Label */}
                <p className="text-xs font-medium text-accent-cyan mb-4">
                  {item.category}
                </p>

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Tags and CTA */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-cosmic-deep border border-white/10 text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="w-full py-2.5 px-4 rounded-xl border border-gold-metallic/30 bg-cosmic-deep/60 hover:bg-gold-gradient hover:text-cosmic-black text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>{language === "hi" ? "ऐसा समाधान चाहिए" : "Request Similar System"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar Indicator */}
        <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gold-gradient transition-all duration-150 rounded-full"
            style={{ width: `${Math.max(scrollProgress, 20)}%` }}
          />
        </div>
      </div>
    </section>
  );
};
