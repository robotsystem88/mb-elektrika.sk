import React from 'react';
import { Battery, Clock, Shield, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { submitFormToEmail } from '../utils/emailSubmission';
import { PhoneInput } from './parts/PhoneInput';

export function CallToAction() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      model: formData.get('model') as string
    };

    const success = await submitFormToEmail(data);
    setIsSubmitting(false);

    if (success) {
      setShowSuccess(true);
      formRef.current?.reset();
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-500 to-yellow-600 relative overflow-hidden">
      {/* Декоративный фоновый элемент */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,rgba(0,0,0,0.2),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4">
              <Battery className="w-16 h-16 sm:w-24 sm:h-24 text-yellow-300/20" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 relative">{t('cta', 'title')}</h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">{t('cta', 'subtitle')}</p>
            <div className="space-y-4">
              {[
                {
                  icon: <Clock className="w-6 h-6" />,
                  text: t('cta', 'features.arrival')
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  text: t('cta', 'features.diagnostics')
                },
                {
                  icon: <Battery className="w-6 h-6" />,
                  text: t('cta', 'features.warranty')
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-white">
                  <div className="bg-black/10 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="absolute -right-2 -top-2">
                <div className="bg-black text-white text-sm font-bold px-4 py-1 rounded-full">
                  {t('cta', 'form.action')}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('cta', 'form.title')}</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('cta', 'form.name')}
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                    placeholder={t('cta', 'form.namePlaceholder')}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('cta', 'form.phone')}
                  </label>
                  <PhoneInput className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition'/>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('cta', 'form.model')}
                  </label>
                  <input
                    name="model"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                    placeholder={t('cta', 'form.modelPlaceholder')}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  disabled={isSubmitting}
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>{isSubmitting ? t('cta', 'form.submitting') : t('cta', 'form.submit')}</span>
                </button>
                {showSuccess && (
                  <div className="mt-4 p-4 bg-green-500/10 text-green-500 rounded-lg text-center">
                    {t('cta', 'form.success')}
                  </div>
                )}
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">{t('cta', 'form.callbackTime')}</p>
                <a 
                  href="tel:+421910777911"
                  className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-600 font-medium mt-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>+421 910 777 911</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}