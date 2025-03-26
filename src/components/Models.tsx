import React, { useState } from 'react';
import { Battery, Phone, Star, Zap, Search, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext'
import { ServiceRequestModal } from './ServiceRequestModal';

type Brand = 'all' | 'mercedes' | 'bmw' | 'porsche' | 'tesla' | 'smart' | 'amg' | 'eq';

export function Models() {
  const { t } = useLanguage();
  const classes = t('models', 'classes');
  const batteryTypes = t('models', 'batteryTypes');
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<'all' | 'mercedes' | 'bmw' | 'porsche' | 'tesla' | 'smart' | 'amg' | 'eq'>('all');

  // Helper function to determine model brand category
  const getModelBrandCategory = (model: any) => {
    if (model.name.toLowerCase().includes('amg')) {
      return 'amg';
    }
    if (model.name.toLowerCase().includes('eq')) {
      return 'eq';
    }
    return model.brand;
  };

  const filteredModels = Object.entries(classes || {}).filter(([_, model]: [string, any]) => {
    const searchTerm = searchQuery.toLowerCase();
    const modelName = model?.name?.toLowerCase() || '';
    const matchesSearch = modelName.includes(searchTerm) || 
      (model.features || []).some((feature: string) => feature.toLowerCase().includes(searchTerm));
    
    const brandCategory = getModelBrandCategory(model);

    const matchesBrand = selectedBrand === 'all' || brandCategory === selectedBrand;
    
    return matchesSearch && matchesBrand;
  });

  // Group models by brand for better organization
  const groupedModels = filteredModels.reduce((acc, [key, model]: [string, any]) => {
    const brand = model.brand;
    if (!acc[brand]) {
      acc[brand] = [];
    }
    acc[brand].push([key, model]);
    return acc;
  }, {} as Record<string, typeof filteredModels>);

  return (
    <section id="models" className="py-20 bg-gray-50">
      <ServiceRequestModal
        isOpen={!!selectedModel}
        onClose={() => setSelectedModel(null)}
        carModel={selectedModel || ''}
      />
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">{t('models', 'title')}</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          {t('models', 'subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder={t('models', 'search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          </div>
          
          <div className="relative">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value as Brand)}
              className="appearance-none w-full sm:w-64 px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition bg-white"
            >
              <option value="all">{t('models', 'search.allBrands')}</option>
              {Object.entries(t('models', 'brands')).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
            <Filter className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {filteredModels.length === 0 && (
          <p className="text-center text-gray-500 mb-8">{t('models', 'search.notFound')}</p>
        )}

        {Object.entries(groupedModels).map(([brand, models]) => (
          <div key={brand} className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800 capitalize">
              {t('models', `brands.${brand}`)}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {models.map(([key, model]: [string, any], index) => (
                <div
                  key={index}
                  className="bg-white p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group relative overflow-hidden cursor-pointer transform hover:scale-[1.02]"
                  onClick={() => setSelectedModel(model.name)}
                >
                  {model.premium && (
                    <div className="absolute top-3 right-3">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                    </div>
                  )}
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
                    <div className="bg-yellow-500/10 p-2 sm:p-3 rounded-xl">
                      <Battery className={`w-5 h-5 sm:w-6 sm:h-6 ${model.premium ? 'text-yellow-500' : 'text-gray-600'}`} />
                    </div>
                    <h3 className={`font-bold text-sm sm:text-base lg:text-lg ${model.premium ? 'text-yellow-500' : 'text-gray-800'}`}>
                      {model.name}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {model.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-12 sm:mt-16 bg-gray-900 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Zap className="w-8 h-8 text-yellow-500" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">{batteryTypes.title}</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {batteryTypes.numbers.map((number: string, index: number) => (
              <div key={index} className="bg-gray-800 p-4 rounded-xl text-center">
                <span className="text-yellow-500 text-sm sm:text-base font-mono">{number}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 mb-6">{t('models', 'notFound')}</p>
          <a
            href="tel:+421910777911"
            className="inline-flex items-center px-6 py-3 space-x-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors font-semibold text-sm sm:text-base"
          >
            <Phone className="w-5 h-5" />
            <span>+421 910 777 911</span>
          </a>
        </div>
      </div>
    </section>
  );
}