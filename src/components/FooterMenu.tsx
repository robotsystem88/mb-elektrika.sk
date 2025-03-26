import React from 'react';
import { useLanguage, type Language } from '../context/LanguageContext';
import { models } from '../translations/components/models';
import { footer } from '../translations/components/footer';
import { navigation } from '../translations/components/navigation';

export function FooterMenu() {
  const { language, t } = useLanguage();
  const modelsList = Object.entries(models[language].classes);

  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {['mercedes', 'bmw', 'porsche', 'tesla'].map((brand) => (
            <div key={brand}>
              <h3 className="text-lg font-bold mb-4 text-yellow-500 capitalize">
                {models[language].brands[brand as keyof typeof models[typeof language]['brands']]}
              </h3>
              <ul className="space-y-2">
                {modelsList
                  .filter(([_, model]) => model.brand === brand)
                  .map(([key, model]) => (
                    <li key={key}>
                      <a 
                        href={`/models/${key}`}
                        className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                      >
                        {model.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-500">
              {t('footer', 'quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  {t('navigation', 'services')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  {t('navigation', 'contact')}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  {t('navigation', 'faq')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}