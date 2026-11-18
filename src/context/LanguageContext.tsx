"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, Translations, content } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vyapar_sathi_lang") as Language;
      if (stored === "en" || stored === "hi") {
        setLanguageState(stored);
      }
    } catch {
      // ignore storage access issues
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("vyapar_sathi_lang", lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const next = language === "en" ? "hi" : "en";
    setLanguage(next);
  };

  const t = content[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      <div className={language === "hi" ? "font-hindi" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
