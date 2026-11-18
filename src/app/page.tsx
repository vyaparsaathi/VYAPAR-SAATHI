import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { DigitalGrowthJourney } from "@/components/sections/DigitalGrowthJourney";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyVyaparSathi } from "@/components/sections/WhyVyaparSathi";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cosmic-black text-white relative selection:bg-gold-metallic selection:text-cosmic-black">
      {/* Floating Glass Navbar */}
      <Navbar />

      {/* 3D Immersive Royal Cosmic Hero */}
      <HeroSection />

      {/* Digital Growth Pathway */}
      <DigitalGrowthJourney />

      {/* Core Services Showcase (6 Services) */}
      <ServicesSection />

      {/* Why Vyapar Sathi (6 Strategic Pillars) */}
      <WhyVyaparSathi />

      {/* 5-Step Process Timeline */}
      <ProcessTimeline />

      {/* Who We Help (8 Industries) */}
      <WhoWeHelp />

      {/* Interactive Horizontal Portfolio Showcase */}
      <PortfolioSection />

      {/* Transparent Scope & Pricing Structure */}
      <PricingSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Consultation & Growth Inquiry Desk */}
      <ContactSection />

      {/* Royal Cosmic Footer */}
      <Footer />
    </main>
  );
}
