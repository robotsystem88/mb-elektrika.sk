import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SocialMedia } from './SocialMedia';
import { submitFormToEmail } from '../utils/emailSubmission';
import { PhoneInput } from './parts/PhoneInput';

export function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string
    };

    const success = await submitFormToEmail(data);
    setIsSubmitting(false);

    if (success) {
      setShowSuccess(true);
      formRef.current?.reset();
      setTimeout(() => {
        setShowSuccess(false);
        setError(null);
      }, 5000);
    } else {
      setError(t('contact', 'form.error'));
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          <div className="max-w-xl mx-auto lg:max-w-none w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center lg:text-left">{t('contact', 'title')}</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                <div>
                  <p className="font-bold">{t('contact', 'phone.title')}</p>
                  <a href="tel:+421910777911" className="hover:text-yellow-400 transition">{t('contact', 'phone.number')}</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-yellow-500" />
                <div>
                  <p className="font-bold">{t('contact', 'address.title')}</p>
                  <a 
                    href="https://g.co/kgs/RhnJeV1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition"
                  >
                    {t('contact', 'address.text')}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-yellow-500" />
                <div>
                  <p className="font-bold">{t('contact', 'hours.title')}</p>
                  <p>{t('contact', 'hours.text')}</p>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{t('contact', 'onsite.title')}</h3>
                <p className="text-gray-300">{t('contact', 'onsite.text')}</p>
                <div className="mt-4 flex items-center text-yellow-500">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{t('contact', 'onsite.arrival')}</span>
                </div>
              </div>
              <div className="mt-6 p-4 sm:p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{t('contact', 'payment.title')}</h3>
                <p className="text-gray-300 mb-4">{t('contact', 'payment.text')}</p>
                <ul className="space-y-2 text-gray-300">
                  {Object.values(t('contact', 'payment.methods')).map((method, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                      {method}
                    </li>
                  ))}
                  <li className="mt-6">
                    <h4 className="text-lg font-bold mb-3">{t('contact', 'social.title')}</h4>
                    <SocialMedia variant="large" className="mt-4" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-gray-800 p-4 sm:p-8 rounded-lg max-w-xl mx-auto lg:max-w-none w-full">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t('contact', 'form.title')}</h3>
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact', 'form.name')}</label>
              <input
                name="name"
                type="text"
                placeholder={t('contact', 'form.name')}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact', 'form.phone')}</label>
              <PhoneInput className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition text-sm sm:text-base'/>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact', 'form.message')}</label>
              <textarea
                name="message"
                placeholder={t('contact', 'form.message')}
                rows={4}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition text-sm sm:text-base"
              ></textarea>
            </div>
            <div className="text-xs sm:text-sm text-gray-400">{t('contact', 'form.consent')}</div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg hover:shadow-yellow-500/25 text-sm sm:text-base"
            >
              {isSubmitting ? t('contact', 'form.submitting') : t('contact', 'form.submit')}
            </button>
            {showSuccess && (
              <div className="mt-4 p-4 bg-green-500/10 text-green-500 rounded-lg text-center">
                {t('contact', 'form.success')}
              </div>
            )}
            {error && (
              <div className="mt-4 p-4 bg-red-500/10 text-red-500 rounded-lg text-center">
                {error}
              </div>
            )}
            <p className="text-center text-xs sm:text-sm text-gray-400 mt-4">{t('contact', 'form.responseTime')}</p>
          </form>
        </div>
      </div>
    </section>
  );
}