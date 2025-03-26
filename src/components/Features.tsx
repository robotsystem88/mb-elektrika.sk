import React from 'react';
import { Shield, Clock, Award, Battery, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">{t('features', 'title')}</h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-16 max-w-2xl mx-auto">
          {t('features', 'subtitle')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative">
          {Object.entries(t('features', 'items')).map(([key, feature]: [string, any], index: number) => (
            <div 
              key={index}
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl text-white mb-4 sm:mb-6 transform transition-all group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-yellow-500/25">
                {index === 0 ? <Shield className="w-8 h-8" /> :
                 index === 1 ? <Clock className="w-8 h-8" /> :
                 index === 2 ? <Award className="w-8 h-8" /> :
                              <Battery className="w-8 h-8" />}
              </div>
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
              <div className="flex items-end justify-between mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-500">
                    {feature.stats}
                  </div>
                  <div className="text-sm text-gray-500">
                    {feature.unit}
                  </div>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(234,179,8,0.1),transparent)] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}