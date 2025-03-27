import React, { useState } from 'react';
import { 
  Wrench, 
  Wallet, 
  Battery, 
  ListChecks, 
  Car, 
  AlertTriangle,
  HelpCircle, 
  Star, 
  MessageSquare, 
  Phone,
  Menu as MenuIcon,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const { t } = useLanguage();
  
  const sections = [
    { id: 'services', Icon: Wrench },
    { id: 'pricing', Icon: Wallet },
    { id: 'battery', Icon: Battery },
    { id: 'process', Icon: ListChecks },
    { id: 'models', Icon: Car },
    { id: 'error-codes', Icon: AlertTriangle },
    { id: 'faq', Icon: HelpCircle },
    { id: 'features', Icon: Star },
    { id: 'testimonials', Icon: MessageSquare },
    { id: 'contact', Icon: Phone }
  ];
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-5 sm:top-6 z-[99999999999999] bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-2 sm:mr-0 mr-0.5 sm:p-3 md:hidden"
        aria-label="Toggle navigation menu"
      >
        <MenuIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6" />
      </button>

      <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-[99999999999999] transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-[calc(100%+1rem)] md:translate-x-0'
      }`}>
        <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-1.5 sm:p-2 space-y-1 sm:space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-yellow-500 hover:text-white transition-colors group relative"
            title={t('navigation', section.id)}
          >
            <section.Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <span className="absolute right-full mr-2 px-3 py-1.5 bg-black/90 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-lg">
              {t('navigation', section.id)}
            </span>
          </button>
        ))}
      </div>
      </div>
    </>
  );
}
