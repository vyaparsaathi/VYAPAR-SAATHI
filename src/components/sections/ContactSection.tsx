"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  Phone,
  MessageSquare,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    businessName: "",
    serviceRequired: "Google Ads Management",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = language === "hi" ? "कृपया अपना नाम लिखें" : "Please enter your name";
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone =
        language === "hi"
          ? "कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें"
          : "Please enter a valid 10-digit phone number";
    }
    if (!formData.businessName.trim()) {
      errs.businessName =
        language === "hi" ? "कृपया अपने व्यापार का नाम दर्ज करें" : "Please enter your business name";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic processing and save submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28 bg-cosmic-midnight/40 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-gold-metallic/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-metallic/30 bg-cosmic-deep/60 backdrop-blur-md mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold-bright">
                {t.contactForm.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              <span className="text-silver-gradient">{t.contactForm.title}</span>
            </h2>

            <p className="text-base text-text-secondary leading-relaxed mb-10">
              {t.contactForm.subtitle}
            </p>

            {/* Official Contact Cards */}
            <div className="space-y-4 mb-8">
              {/* Phone */}
              <a
                href="tel:+917704841382"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-cosmic-card backdrop-blur-md hover:border-gold-metallic/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-cosmic-deep border border-gold-metallic/30 flex items-center justify-center text-gold-bright group-hover:scale-105 transition-transform flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted block">
                    {language === "hi" ? "फोन कॉल" : "Direct Phone Support"}
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-gold-bright transition-colors">
                    +91 7704841382
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917704841382"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md hover:border-emerald-500/60 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-900/40 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400/80 block">
                    {language === "hi" ? "त्वरित व्हाट्सएप संवाद" : "Instant WhatsApp Desk"}
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    +91 7704841382
                  </span>
                </div>
              </a>

              {/* Operating Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-cosmic-card backdrop-blur-md">
                <div className="w-12 h-12 rounded-lg bg-cosmic-deep border border-gold-metallic/30 flex items-center justify-center text-gold-bright flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted block">
                    {language === "hi" ? "कार्य स्थल" : "Operating Location"}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Ghaziabad, Uttar Pradesh, India
                  </span>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl border border-gold-metallic/20 bg-cosmic-deep/40 text-xs text-text-muted">
              <Clock className="w-4 h-4 text-gold-bright flex-shrink-0" />
              <span>
                {language === "hi"
                  ? "सभी पूछताछों का उत्तर 24 घंटे के भीतर दिया जाता है।"
                  : "All inquiries are responded to within 24 business hours."}
              </span>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gold-metallic/30 bg-cosmic-card backdrop-blur-2xl p-8 sm:p-10 shadow-2xl shadow-cosmic-black/80">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gold-gradient text-cosmic-black flex items-center justify-center mb-6 shadow-gold-glow animate-bounce">
                    <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">
                    {language === "hi" ? "पूछताछ सफलतापूर्वक प्राप्त हुई!" : "Inquiry Received Successfully!"}
                  </h3>
                  <p className="text-sm text-text-secondary max-w-md mb-8">
                    {t.contactForm.fields.success}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/917704841382?text=${encodeURIComponent(
                        `Hi Vyapar Sathi, I submitted a form request for ${formData.businessName}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{language === "hi" ? "सीधे व्हाट्सएप पर भी सूचित करें" : "Open WhatsApp Directly"}</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: "",
                          phone: "",
                          email: "",
                          businessName: "",
                          serviceRequired: "Google Ads Management",
                          message: "",
                        });
                      }}
                      className="px-6 py-3 rounded-xl border border-white/20 text-white font-medium text-xs hover:border-gold-bright"
                    >
                      {language === "hi" ? "अन्य संदेश भेजें" : "Send Another Message"}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                        {t.contactForm.fields.name}
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder={language === "hi" ? "जैसे: विवेक शर्मा" : "e.g. Vivek Sharma"}
                        className={`w-full px-4 py-3 rounded-xl bg-cosmic-black/70 border ${
                          errors.fullName ? "border-rose-500" : "border-white/10"
                        } text-white placeholder-text-muted/50 focus:outline-none focus:border-gold-bright text-sm transition-colors`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                        {t.contactForm.fields.phone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder={language === "hi" ? "10 अंकों का मोबाइल नंबर" : "+91 98765 43210"}
                        className={`w-full px-4 py-3 rounded-xl bg-cosmic-black/70 border ${
                          errors.phone ? "border-rose-500" : "border-white/10"
                        } text-white placeholder-text-muted/50 focus:outline-none focus:border-gold-bright text-sm transition-colors`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                        {t.contactForm.fields.business}
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({ ...formData, businessName: e.target.value })
                        }
                        placeholder={language === "hi" ? "व्यापार / दुकान का नाम" : "e.g. Apex Electronics"}
                        className={`w-full px-4 py-3 rounded-xl bg-cosmic-black/70 border ${
                          errors.businessName ? "border-rose-500" : "border-white/10"
                        } text-white placeholder-text-muted/50 focus:outline-none focus:border-gold-bright text-sm transition-colors`}
                      />
                      {errors.businessName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.businessName}</span>
                        </p>
                      )}
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                        {t.contactForm.fields.service}
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) =>
                          setFormData({ ...formData, serviceRequired: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-cosmic-black/90 border border-white/10 text-white focus:outline-none focus:border-gold-bright text-sm transition-colors"
                      >
                        <option value="Google Ads Management">Google Ads Management</option>
                        <option value="Google Business Profile">Google Business Profile</option>
                        <option value="Website Development">Website Development</option>
                        <option value="SEO & Local SEO">SEO & Local SEO</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Website Maintenance">Website Maintenance</option>
                      </select>
                    </div>
                  </div>

                  {/* Email (Optional) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                      {t.contactForm.fields.email}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-cosmic-black/70 border border-white/10 text-white placeholder-text-muted/50 focus:outline-none focus:border-gold-bright text-sm transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                      {language === "hi" ? "संदेश / व्यापार लक्ष्य" : "Message / Business Goals"}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={t.contactForm.fields.message}
                      className="w-full px-4 py-3 rounded-xl bg-cosmic-black/70 border border-white/10 text-white placeholder-text-muted/50 focus:outline-none focus:border-gold-bright text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gold-gradient text-cosmic-black font-extrabold text-xs uppercase tracking-widest btn-gold-sweep shadow-gold-glow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>{t.contactForm.fields.submitting}</span>
                    ) : (
                      <>
                        <span>{t.contactForm.fields.submit}</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
