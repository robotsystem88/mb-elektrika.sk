import React from 'react';
import { PhoneCall, Wrench, ClipboardCheck, CreditCard } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Process() {
  const { t } = useLanguage();
  const steps = t('process', 'steps') || {};

  const icons = {
    request: <PhoneCall className="w-8 h-8" />,
    diagnostics: <Wrench className="w-8 h-8" />,
    approval: <ClipboardCheck className="w-8 h-8" />,
    payment: <CreditCard className="w-8 h-8" />
  };

  return (
    <section id="process" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">{t('process', 'title')}</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          {t('process', 'subtitle')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {Object.entries(steps).map(([key, step]: [string, any], index: number) => (
              <div key={index} className="relative group">
                <div className="absolute -top-4 -left-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-100 transition-all group-hover:text-yellow-200 z-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="relative z-10 bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                  <div className="bg-yellow-500 text-white p-2 sm:p-3 rounded-lg inline-block mb-3 sm:mb-4">
                    <div className="w-5 h-5 flex items-center justify-center sm:w-6 sm:h-6 md:w-8 md:h-8">{icons[key as keyof typeof icons]}</div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 group-hover:text-yellow-500 transition-colors">{step.title}</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail: string, idx: number) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}