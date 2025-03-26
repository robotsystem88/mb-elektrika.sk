import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function FAQ() {
  const { t } = useLanguage();
  const questions = t('faq', 'questions');

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">{t('faq', 'title')}</h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-16 max-w-2xl mx-auto">{t('faq', 'subtitle')}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {Object.entries(questions).map(([key, faq], index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-yellow-500 transition-colors">
                {faq.question as string}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">{faq.answer as string}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}