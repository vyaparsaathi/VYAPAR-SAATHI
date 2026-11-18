"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, Phone, MessageSquare, MapPin, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-cosmic-black border-t border-gold-metallic/20 pt-20 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-gold-metallic/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3.5 mb-6 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden p-0.5 border border-gold-metallic/40 bg-cosmic-midnight shadow-gold-glow/30">
                <Image
                  src="/logo-nav.png"
                  alt="Vyapar Sathi Logo Monogram"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-wider text-white group-hover:text-gold-bright transition-colors">
                  VYAPAR SATHI
                </span>
                <span className="text-xs text-text-muted block font-medium">
                  {language === "hi" ? "डिजिटल ग्रोथ पार्टनर" : "Digital Growth Partner"}
                </span>
              </div>
            </Link>

            <p className="text-sm text-text-secondary leading-relaxed max-w-sm mb-6 font-normal">
              {t.footer.aboutText}
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-metallic/30 bg-cosmic-deep/60 text-xs font-semibold text-gold-bright">
              <ShieldCheck className="w-4 h-4 text-gold-bright" />
              <span>{t.footer.tagline}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-bright mb-6">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <a href="#hero" className="hover:text-gold-bright transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-bright transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-bright transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-gold-bright transition-colors">
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gold-bright transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-bright transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-bright mb-6">
              {t.footer.servicesLabel}
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <a href="#services" className="hover:text-gold-bright transition-colors">
                  Google Ads
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-bright transition-colors">
                  Google Business Profile
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-bright transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-bright transition-colors">
                  SEO & Local SEO
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-bright transition-colors">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-bright transition-colors">
                  Website Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-bright mb-6">
              {t.footer.contactLabel}
            </h4>
            <ul className="space-y-4 text-xs text-text-secondary">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-bright flex-shrink-0 mt-0.5" />
                <span>{t.footer.operatingLocation}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-bright flex-shrink-0" />
                <a
                  href="tel:+917704841382"
                  className="hover:text-gold-bright font-semibold text-white transition-colors"
                >
                  +91 7704841382
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href="https://wa.me/917704841382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 text-emerald-400 font-semibold transition-colors"
                >
                  {t.footer.whatsappChat}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div>
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </div>

          <div className="flex items-center gap-2">
            <span>{language === "hi" ? "व्यापारियों के विकास के लिए समर्पित" : "Dedicated to business growth"}</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-metallic/30 hover:border-gold-bright hover:text-gold-bright transition-colors text-white"
            aria-label="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
