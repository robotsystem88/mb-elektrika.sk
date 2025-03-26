import React from 'react';
import { Battery, PenTool as Tool, Wrench, Zap, Car, ShieldCheck, Settings, BatteryCharging, Cpu, Code, Gauge } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-16">{t('services', 'title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              icon: <Battery className="w-8 h-8 sm:w-10 sm:h-10" />,
              title: t('services', 'diagnostics.title'),
              description: t('services', 'diagnostics.description')
            },
            {
              icon: <Tool className="w-10 h-10" />,
              title: t('services', 'repair.title'),
              description: t('services', 'repair.description')
            },
            {
              icon: <Zap className="w-10 h-10" />,
              title: t('services', 'recovery.title'),
              description: t('services', 'recovery.description')
            },
            {
              icon: <Wrench className="w-10 h-10" />,
              title: t('services', 'replacement.title'),
              description: t('services', 'replacement.description')
            },
            {
              icon: <Car className="w-10 h-10" />,
              title: t('services', 'onsite.title'),
              description: t('services', 'onsite.description')
            },
            {
              icon: <ShieldCheck className="w-10 h-10" />,
              title: t('services', 'warranty.title'),
              description: t('services', 'warranty.description')
            },
            {
              icon: <Settings className="w-10 h-10" />,
              title: t('services', 'coding.title'),
              description: t('services', 'coding.description'),
            },
            {
              icon: <BatteryCharging className="w-10 h-10" />,
              title: t('services', 'startStop.title'),
              description: t('services', 'startStop.description'),
            },
            {
              icon: <Code className="w-10 h-10" />,
              title: t('services', 'features.title'),
              description: t('services', 'features.description'),
            },
            {
              icon: <Cpu className="w-10 h-10" />,
              title: t('services', 'firmware.title'),
              description: t('services', 'firmware.description'),
            },
            {
              icon: <Gauge className="w-10 h-10" />,
              title: t('services', 'tuning.title'),
              description: t('services', 'tuning.description'),
            },
            {
              icon: <Cpu className="w-10 h-10" />,
              title: t('services', 'fullDiagnostics.title'),
              description: t('services', 'fullDiagnostics.description'),
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group relative overflow-hidden border border-transparent hover:border-yellow-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-500 transition-colors">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="#contact"
            className="inline-block bg-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg hover:shadow-yellow-500/25 text-sm sm:text-base border border-transparent hover:border-yellow-600"
          >
            {t('services', 'ctaButton')}
          </a>
        </div>
      </div>
    </section>
  );
}