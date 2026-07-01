import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, UIStrings, LanguageConfig } from '../types';
import { SUPPORTED_LANGUAGES, UI_TRANSLATIONS } from '../data/services';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: UIStrings;
  supportedLanguages: LanguageConfig[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Initial fetch from localStorage for offline persistence
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('village_directory_lang');
      if (saved && (saved === 'en' || saved === 'hi' || saved === 'te' || saved === 'ml')) {
        return saved as Language;
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('village_directory_lang', lang);
  };

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS['en'];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, supportedLanguages: SUPPORTED_LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
