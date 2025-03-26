import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const { t } = useLanguage();
  const reviews = t('testimonials', 'reviews') || [];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">{t('testimonials', 'title')}</h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-16 max-w-2xl mx-auto">
          {t('testimonials', 'subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {(Array.isArray(reviews) ? reviews : []).map((testimonial: any, index: number) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all relative group max-w-xl mx-auto md:max-w-none hover:scale-[1.02]"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500/20 absolute top-4 right-4 group-hover:text-yellow-500/30 transition-colors" />
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating as number)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 relative min-h-[4rem]">
                "{testimonial.text as string}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">{testimonial.name as string}</p>
                <p className="text-xs sm:text-sm text-gray-500">{testimonial.car as string}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}