import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function ErrorCodes() {
  const { t } = useLanguage();

  return (
    <section id="error-codes" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          {t('errorCodes', 'title')}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 sm:p-6 mb-8">
            <div className="flex items-center gap-3 text-yellow-600 font-semibold mb-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <span>{t('errorCodes', 'warning')}</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-lg sm:text-xl font-semibold mb-6">
              {t('errorCodes', 'subtitle')}
            </h3>

            <ul className="space-y-3">
              {t('errorCodes', 'codes').map((code: string, index: number) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-3" />
                  <span className="text-gray-700 leading-relaxed">{code}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-yellow-50/50 border border-yellow-100 rounded-lg">
              <p className="text-yellow-700 font-medium text-sm sm:text-base">
                {t('errorCodes', 'note')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}