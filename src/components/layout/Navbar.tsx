"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize or link click
  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-cosmic-black/85 backdrop-blur-xl border-b border-gold-metallic/20 shadow-lg shadow-cosmic-black/60"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
            aria-label="Vyapar Sathi Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden p-0.5 border border-gold-metallic/40 shadow-gold-glow/20 group-hover:border-gold-bright transition-all duration-300 bg-cosmic-midnight">
              <Image
                src="/logo-nav.png"
                alt="Vyapar Sathi Official VS Monogram Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-wider text-white group-hover:text-gold-bright transition-colors">
                VYAPAR SATHI
              </span>
              <span className="text-[10px] sm:text-xs text-silver-muted font-medium tracking-wide">
                {language === "hi" ? "डिजिटल ग्रोथ पार्टनर" : "Digital Growth Partner"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-gold-metallic/15 bg-cosmic-deep/40 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-text-secondary hover:text-gold-bright hover:bg-gold-metallic/10 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Language Switcher + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-metallic/25 bg-cosmic-deep/60 hover:border-gold-bright text-xs font-semibold text-text-primary hover:text-gold-bright transition-all"
              aria-label="Switch Language EN / HI"
            >
              <span className={language === "en" ? "text-gold-bright font-bold" : "text-text-muted"}>
                EN
              </span>
              <span className="text-gold-metallic/40">|</span>
              <span className={language === "hi" ? "text-gold-bright font-bold" : "text-text-muted"}>
                हिन्दी
              </span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-cosmic-black font-semibold text-xs tracking-wider uppercase btn-gold-sweep hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.03]"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2.5">
            {/* Mobile Lang Button */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg border border-gold-metallic/30 bg-cosmic-deep/70 text-xs font-bold text-gold-bright"
              aria-label="Toggle Language"
            >
              {language === "en" ? "हिन्दी" : "EN"}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-gold-metallic/30 bg-cosmic-deep/70 text-white hover:text-gold-bright focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-x-0 top-[68px] z-40 bg-cosmic-black/95 backdrop-blur-2xl border-b border-gold-metallic/20 px-6 py-8 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-lg font-semibold text-text-primary hover:text-gold-bright py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="w-full py-3.5 text-center font-bold text-sm uppercase tracking-wider rounded-xl bg-gold-gradient text-cosmic-black shadow-gold-glow flex items-center justify-center gap-2"
                >
                  <span>{t.nav.cta}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/917704841382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center font-semibold text-xs tracking-wide rounded-xl border border-emerald-500/40 text-emerald-400 bg-emerald-950/20 hover:bg-emerald-950/40 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: +91 7704841382</span>
                </a>

                <a
                  href="tel:+917704841382"
                  className="w-full py-2.5 text-center font-medium text-xs text-text-muted hover:text-white flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: +91 7704841382</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
