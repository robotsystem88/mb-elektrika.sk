import React, { useState, useRef, useEffect } from "react";
import { Battery, MapPin, Phone, MoreVertical, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SocialMedia } from "./SocialMedia";
import type { Language } from "../context/LanguageContext";
import logoImage from "../image/logo.png";
import banerImage from "../image/baner.png";

type LanguageOption = {
  code: Language;
  label: string;
  icon: string;
  shortCode: string;
};

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", icon: "🇬🇧", shortCode: "GB" },
  { code: "de", label: "Deutsch", icon: "🇩🇪", shortCode: "DE" },
  { code: "ru", label: "Русский", icon: "🇷🇺", shortCode: "RU" },
  { code: "sk", label: "Slovenský", icon: "🇸🇰", shortCode: "SK" },
];

export function Header(): JSX.Element {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLanguage = LANGUAGES.find((lang) => lang.code === language)!;
  const [showMobileLanguages, setShowMobileLanguages] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setShowMobileLanguages(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    setIsOpen(false);
  };

  return (
    <header className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src={banerImage}
          alt="baner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      <nav className="relative z-[99999999999999] container mx-auto p-4 sm:p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-white">
            <div className="lg:hidden relative mr-4" ref={dropdownRef}>
              <button
                onClick={() => setShowMobileLanguages(!showMobileLanguages)}
                className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 hover:bg-black/80 transition-all border border-yellow-500/20 group relative z-[999999999]"
              >
                <span className="text-base text-white">
                  {currentLanguage.icon}
                </span>
                <span className="text-sm font-medium text-white group-hover:text-yellow-400 transition-colors">
                  {currentLanguage.shortCode}
                </span>
              </button>

              <div
                className={`fixed left-4 mt-2 py-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl transition-all transform duration-300 border border-yellow-500/20 z-[999999999] ${
                  showMobileLanguages
                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 invisible translate-y-2 pointer-events-none"
                }`}
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageChange(lang.code);
                      setShowMobileLanguages(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm hover:bg-yellow-500/20 transition-colors duration-200 flex items-center space-x-3 ${
                      language === lang.code
                        ? "text-yellow-500 font-medium bg-yellow-500/10"
                        : "text-white hover:text-yellow-500"
                    }`}
                  >
                    <span className="text-lg">{lang.icon}</span>
                    <span className="flex-1">{lang.label}</span>
                    {language === lang.code && (
                      <Check className="w-4 h-4 text-yellow-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            <img
              src={logoImage}
              alt="logo"
              className="lg:w-48 md:w-40 w-32 object-cover object-center"
            />
          </div>
          <div className="hidden lg:flex items-center space-x-6 text-white">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-3 bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2.5 hover:bg-black/80 transition-all border border-yellow-500/20 min-w-[140px] group relative focus:outline-none focus:ring-2 focus:ring-yellow-500/50 select-none"
                aria-expanded={isOpen}
                aria-label={t("header", "menu.language")}
                aria-controls="language-menu"
              >
                <span className="text-base sm:text-lg">
                  {currentLanguage.icon}
                </span>
                <span className="text-sm font-medium flex-1 text-left group-hover:text-yellow-400 transition-colors">
                  {currentLanguage.label}
                </span>
                <div
                  className={`w-2 h-2 border-r-2 border-b-2 border-yellow-500 transform transition-transform duration-300 group-hover:border-yellow-400 ${
                    isOpen
                      ? "rotate-45 translate-y-[-2px]"
                      : "-rotate-45 translate-y-[2px]"
                  }`}
                />
              </button>

              <div
                id="language-menu"
                role="menu"
                className={`fixed mt-2 py-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl transition-all transform duration-300 border border-yellow-500/20 overflow-hidden select-none ${
                  isOpen
                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 invisible translate-y-2 pointer-events-none"
                }`}
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    role="menuitem"
                    disabled={language === lang.code}
                    aria-current={language === lang.code}
                    className={`w-full px-4 py-2.5 text-left text-sm hover:bg-yellow-500/20 transition-colors duration-200 flex items-center space-x-3 ${
                      language === lang.code
                        ? "text-yellow-500 font-medium bg-yellow-500/10"
                        : "text-white hover:text-yellow-500"
                    }`}
                  >
                    <span className="text-lg">{lang.icon}</span>
                    <span className="flex-1">{lang.label}</span>
                    {language === lang.code && (
                      <Check className="w-4 h-4 text-yellow-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            <a
              href="tel:+421910777911"
              className="flex items-center space-x-2 hover:text-yellow-400 transition"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">{t("header", "phone.number")}</span>
            </a>
            <a
              href="https://g.co/kgs/RhnJeV1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-yellow-400 transition"
            >
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{t("header", "location")}</span>
            </a>
          </div>
        </div>
        <div className="lg:hidden mt-4 flex flex-col items-center space-y-4 text-white bg-black/20 p-4 rounded-lg backdrop-blur-sm">
          <a
            href="tel:+421910777911"
            className="flex items-center space-x-2 hover:text-yellow-400 transition"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg">{t("header", "phone.number")}</span>
          </a>
          <a
            href="https://g.co/kgs/RhnJeV1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-yellow-400 transition"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{t("header", "location")}</span>
          </a>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 min-h-[calc(100vh-140px)] flex items-center py-20 md:py-0">
        <div className="max-w-2xl text-white w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            {t("header", "heroTitle")}
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-200">
            {t("header", "heroDescription")}
          </p>
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-yellow-400">
            {t("header", "heroFeature")}
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg hover:shadow-yellow-500/25 text-sm sm:text-base"
          >
            {t("header", "ctaButton")}
          </a>
        </div>
      </div>
    </header>
  );
}
