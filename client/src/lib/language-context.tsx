import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, DEFAULT_LANGUAGE } from "@shared/schema";
import { useCountry } from "./country-context";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const { country } = useCountry();
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get language from localStorage
    const stored = localStorage.getItem(`language_${country}`);
    if (stored && (stored === "sr" || stored === "en" || stored === "mk" || stored === "me" || stored === "bs")) {
      return stored as Language;
    }
    // Default to country's default language
    return DEFAULT_LANGUAGE[country];
  });

  // Update language when country changes
  useEffect(() => {
    const stored = localStorage.getItem(`language_${country}`);
    if (stored && (stored === "sr" || stored === "en" || stored === "mk" || stored === "me" || stored === "bs")) {
      setLanguageState(stored as Language);
    } else {
      setLanguageState(DEFAULT_LANGUAGE[country]);
    }
  }, [country]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem(`language_${country}`, newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
