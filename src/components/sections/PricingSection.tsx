"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Check, ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";

export const PricingSection: React.FC = () => {
  const { language } = useLanguage();

  const pricingModels = [
    {
      category: language === "hi" ? "लोकल विजिबिलिटी स्टार्टर" : "Local Visibility Foundation",
      subtitle: language === "hi" ? "गूगल मैप्स और लोकल सर्च के लिए" : "For Local Stores, Clinics & Service Providers",
      factors: [
        language === "hi" ? "गूगल बिजनेस प्रोफाइल पूर्ण सेटअप व ऑप्टिमाइजेशन" : "Google Business Profile Optimization",
        language === "hi" ? "लोकल मैप पैक 3-रैंक लक्ष्य रणनीति" : "Local Map Pack 3-Pack Strategy",
        language === "hi" ? "स्थानीय समीक्षा व रिव्यू सिस्टम" : "Customer Review Acquisition System",
        language === "hi" ? "व्हाट्सएप और फोन कॉल डायरेक्ट सेटअप" : "Direct WhatsApp & Call Conversion Triggers",
      ],
      idealFor: language === "hi" ? "स्थानीय दुकानें, रेस्टोरेंट्स, क्लीनिक, सैलून" : "Retail Stores, Clinics, Restaurants & Salons",
      accent: "gold",
    },
    {
      category: language === "hi" ? "फास्ट ग्रोथ एक्विजिशन" : "Rapid Growth & Customer Leads",
      subtitle: language === "hi" ? "तुरंत ग्राहक कॉल्स व इंक्वायरी के लिए" : "For Immediate Calls, Bookings & Emergency Services",
      factors: [
        language === "hi" ? "टारगेटेड गूगल सर्च विज्ञापन (Google Ads)" : "High-Intent Google Ads Management",
        language === "hi" ? "0.6s सुपर-फास्ट मोबाइल लैंडिंग फनल" : "Ultra-Fast Mobile Landing Page",
        language === "hi" ? "कन्वर्जन ट्रैकिंग व नेगेटिव कीवर्ड्स" : "Full Conversion Tracking & Budget Control",
        language === "hi" ? "साप्ताहिक रिपोर्टिंग व निरंतर सुधार" : "Weekly ROI Optimization & Direct Support",
      ],
      idealFor: language === "hi" ? "होम सर्विसेज, कोचिंग, रियल एस्टेट, बी2बी" : "Home Services, Coaching Institutes, B2B & Contractors",
      accent: "cyan",
      popular: true,
    },
    {
      category: language === "hi" ? "संपूर्ण डिजिटल पार्टनरशिप" : "Full-Scale Digital Dominance",
      subtitle: language === "hi" ? "पूरे शहर या सेक्टर में मार्केट लीडर बनने के लिए" : "Complete Multi-Channel Market Authority",
      factors: [
        language === "hi" ? "कस्टम आधुनिक वेबसाइट (SEO आर्किटेक्चर)" : "Bespoke Modern Website + SEO Architecture",
        language === "hi" ? "गूगल एड्स + गूगल मैप्स संपूर्ण कॉम्बो" : "Google Ads + Google Business Profile Combo",
        language === "hi" ? "सोशल मीडिया रणनीति व कंटेंट गाइडेंस" : "Social Media Presence & Brand Strategy",
        language === "hi" ? "निरंतर मेंटेनेंस व तकनीकी सुरक्षा" : "Continuous Maintenance, Uptime & Tech Care",
      ],
      idealFor: language === "hi" ? "बढ़ते व्यापार, बड़े संस्थान व महत्वाकांक्षी ब्रांड्स" : "Growing Enterprises, Institutes & Ambitious Brands",
      accent: "purple",
    },
  ];

  return (
    <section id="pricing" className="relative py-28 bg-cosmic-black overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-gold-metallic/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-metallic/30 bg-cosmic-deep/60 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold-bright">
              {language === "hi" ? "पारदर्शी मूल्य नीति" : "TRANSPARENT PRICING PHILOSOPHY"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-silver-gradient">
              {language === "hi"
                ? "आपके व्यापार के अनुकूल कस्टमाइज्ड पैकेजेस"
                : "Tailored Packages Built Around Your Scope"}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-text-secondary">
            {language === "hi"
              ? "हम कोई बनावटी कीमतें नहीं थोपते। आपकी सेवाएं, स्थानीय प्रतिस्पर्धा और बजट के आधार पर अनुकूलित कोटेशन प्राप्त करें।"
              : "We never enforce rigid, inflated price tags. Pricing is strictly calibrated to your service area, local competition, and business goals."}
          </p>
        </div>

        {/* 3 Scope Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {pricingModels.map((tier, idx) => (
            <div
              key={tier.category}
              className={`relative rounded-2xl border p-8 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? "border-gold-bright bg-cosmic-card shadow-gold-glow/30 lg:-translate-y-3"
                  : "border-white/10 bg-cosmic-deep/40 hover:border-gold-metallic/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-gradient text-cosmic-black text-[11px] font-extrabold uppercase tracking-widest shadow-md">
                  {language === "hi" ? "सर्वाधिक लोकप्रिय" : "Most Recommended"}
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-bright mb-2 block">
                  Framework 0{idx + 1}
                </span>

                <h3 className="text-2xl font-extrabold text-white mb-2">{tier.category}</h3>
                <p className="text-xs text-text-secondary mb-6 font-normal">{tier.subtitle}</p>

                {/* Pricing Structure Notice */}
                <div className="p-4 rounded-xl border border-white/5 bg-cosmic-black/60 mb-6">
                  <div className="text-xs text-text-muted mb-1">
                    {language === "hi" ? "मूल्य निर्धारण आधार" : "Pricing Structure"}
                  </div>
                  <div className="text-base font-bold text-white flex items-center justify-between">
                    <span>{language === "hi" ? "कस्टम कोटेशन" : "Custom Quote"}</span>
                    <span className="text-xs font-medium text-gold-bright bg-gold-metallic/10 px-2 py-0.5 rounded border border-gold-metallic/30">
                      {language === "hi" ? "पारदर्शी ROI" : "Direct ROI"}
                    </span>
                  </div>
                </div>

                {/* Factors List */}
                <div className="space-y-3 mb-8">
                  {tier.factors.map((factor) => (
                    <div key={factor} className="flex items-start gap-2.5 text-xs text-text-secondary">
                      <Check className="w-4 h-4 text-gold-bright flex-shrink-0 mt-0.5" />
                      <span>{factor}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Ideal For */}
                <div className="mb-6 pt-4 border-t border-white/5 text-[11px] text-text-muted">
                  <span className="font-semibold text-white">
                    {language === "hi" ? "उपयुक्त:" : "Best for:"}{" "}
                  </span>
                  {tier.idealFor}
                </div>

                <a
                  href="#contact"
                  className={`w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "bg-gold-gradient text-cosmic-black btn-gold-sweep shadow-gold-glow"
                      : "border border-gold-metallic/40 bg-cosmic-deep/60 hover:bg-gold-gradient hover:text-cosmic-black text-white"
                  }`}
                >
                  <span>{language === "hi" ? "कस्टम कोट प्राप्त करें" : "Request Custom Quote"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Guarantee Banner */}
        <div className="rounded-2xl border border-gold-metallic/20 bg-cosmic-card/60 backdrop-blur-md p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cosmic-deep border border-gold-metallic/30 flex items-center justify-center text-gold-bright flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                {language === "hi" ? "100% पारदर्शी बजट नीति" : "100% Transparent Budget Model"}
              </h4>
              <p className="text-xs text-text-secondary">
                {language === "hi"
                  ? "कोई छिपे हुए शुल्क नहीं। विज्ञापन का बजट सीधे आपके गूगल एकाउंट से कटता है।"
                  : "No hidden surcharges. Your ad spend goes directly to your verified Google accounts."}
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/917704841382?text=Hello%20Vyapar%20Sathi,%20I%20would%20like%20to%20discuss%20pricing%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-xl border border-emerald-500/40 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-950/50 font-semibold text-xs flex items-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{language === "hi" ? "व्हाट्सएप पर मूल्य चर्चा करें" : "Discuss on WhatsApp"}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
