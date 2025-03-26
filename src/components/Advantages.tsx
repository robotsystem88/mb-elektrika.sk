import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Advantages() {
  const { t } = useLanguage();
  const items = t('advantages', 'items') || {};

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">{t('advantages', 'title')}</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          {t('advantages', 'subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {Object.entries(items || {}).map(([key, advantage], index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-yellow-500 transition-colors">
                {advantage.title as string}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{advantage.description as string}</p>
              <ul className="space-y-4">
                {(advantage.features as string[]).map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}