import React from 'react';
import { Check, Clock, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceRequestModal } from './ServiceRequestModal';

export function Pricing() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = React.useState<{
    type: string;
    price: string;
  } | null>(null);

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white">
      <ServiceRequestModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        carModel={selectedService ? `${selectedService.type} - ${selectedService.price}` : ''}
      />
      <div className="container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">{t('pricing', 'title')}</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">{t('pricing', 'subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: t('pricing', 'diagnosticsTitle'),
              price: t('pricing', 'free'),
              popular: false,
              items: ['voltage', 'capacity', 'charging', 'generator', 'starter'].map(item => t('pricing', `items.${item}`))
            },
            {
              title: t('pricing', 'repairTitle'),
              price: `${t('pricing', 'from')} 99 €`,
              popular: true,
              items: ['capacityRecovery', 'replacement', 'wiring', 'contacts', 'warranty12'].map(item => t('pricing', `items.${item}`))
            },
            {
              title: t('pricing', 'replacementTitle'),
              price: `${t('pricing', 'from')} 49 €`,
              popular: false,
              items: ['batterySelection', 'oldRemoval', 'newInstallation', 'systemSetup', 'warranty24'].map(item => t('pricing', `items.${item}`))
            }
          ].map((service, index) => (
            <div 
              key={index}
              className={`${
                service.popular
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-50 text-gray-900'
              } p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group relative overflow-hidden`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-black text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
                    {t('pricing', 'popular')}
                  </span>
                </div>
              )}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
              <p className={`text-xl sm:text-2xl md:text-3xl font-bold ${
                service.popular ? 'text-white' : 'text-yellow-500'
              } mb-6`}>{service.price}</p>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <Check className={`w-5 h-5 ${
                      service.popular ? 'text-white' : 'text-yellow-500'
                    }`} />
                    <span className={`text-sm sm:text-base ${
                      service.popular ? 'text-white' : 'text-gray-600'
                    }`}>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 sm:mt-8 w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all hover:scale-105 text-sm sm:text-base ${
                  service.popular
                    ? 'bg-black text-white hover:bg-gray-900'
                    : 'bg-yellow-500 text-black hover:bg-yellow-400'
                }`}
                onClick={() => setSelectedService({ type: service.title, price: service.price })}
              >
                {t('pricing', 'chooseButton')}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: <Clock className="w-6 h-6" />,
              title: t('pricing', 'features.fastArrival.title'),
              description: t('pricing', 'features.fastArrival.description')
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: t('pricing', 'features.warranty.title'),
              description: t('pricing', 'features.warranty.description')
            },
            {
              icon: <Check className="w-6 h-6" />,
              title: t('pricing', 'features.originalParts.title'),
              description: t('pricing', 'features.originalParts.description')
            }
          ].map((feature, index) => (
            <div key={index} className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-yellow-500 p-2 sm:p-3 rounded-lg text-white">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}