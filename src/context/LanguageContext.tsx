import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../translations';

export type Language = 'en' | 'de' | 'ru' | 'sk';

function getBrowserLanguage(): Language {
  // Get all browser languages or fallback to navigator.language
  const browserLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
  
  const supportedLanguages: Language[] = ['en', 'de', 'ru', 'sk'];
  const defaultLanguage: Language = 'en';
  
  for (const lang of browserLangs) {
    try {
      // Handle both language codes like 'ru' and regional codes like 'ru-RU'
      const simpleLang = lang.toLowerCase().split('-')[0];
    
      // Check if this is one of our supported languages
      if (supportedLanguages.includes(simpleLang as Language)) {
        return simpleLang as Language;
      }
    } catch (error) {
      console.warn('Error parsing browser language:', error);
      continue;
    }
  }
  
  // If no match found in browser languages, return default
  return defaultLanguage;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: string, key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem('language-preference');
      // Validate saved language is supported, otherwise get from browser
      return savedLang && ['en', 'de', 'ru', 'sk'].includes(savedLang as Language) 
        ? (savedLang as Language)
        : getBrowserLanguage();
    } catch (error) {
      console.warn('Error getting language preference:', error);
      return 'en';
    }
  });

  const setLanguage = (newLang: Language) => {
    // Update HTML lang attribute for SEO and accessibility
    document.documentElement.lang = newLang;
    // Save user preference
    localStorage.setItem('language-preference', newLang);
    setLanguageState(newLang);
  };

  const t = (section: string, key: string): any => {
    try {
      const keys = key.split('.');
      let value = translations[section]?.[language] || translations[section]?.en;
      
      for (const k of keys) {
        if (value === undefined) break;
        value = value[k];
      }
      
      return value || key;
    } catch (error) {
      console.warn(`Translation not found for ${section}.${key}`);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}