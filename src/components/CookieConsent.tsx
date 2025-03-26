import React, { useEffect, useState } from 'react';
import { X, Shield, Cookie } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gdpr-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('gdpr-consent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('gdpr-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col relative mx-auto">
        <div className="p-4 sm:p-6 overflow-y-auto">
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setShowDetails(!showDetails)} 
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Подробнее"
          >
            <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
          </button> 
        </div>
        <button
          onClick={rejectCookies}
          className="absolute top-2 left-2 sm:top-4 sm:left-4 p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
          <div className="bg-yellow-500/10 p-2 sm:p-3 rounded-xl">
            <Cookie className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
          </div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-center">Соглашение о файлах cookie</h2>
        </div>

        <div className={`space-y-4 ${showDetails ? 'block' : 'hidden'}`}>
          <p className="text-gray-600 text-sm sm:text-base">
            Мы используем файлы cookie для следующих целей:
          </p>
          <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0" />
              <span>Необходимые файлы cookie для работы сайта</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0" />
              <span>Аналитические файлы cookie для улучшения работы сайта</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0" />
              <span>Маркетинговые файлы cookie для персонализации контента</span>
            </li>
          </ul>
        </div>

        <div className={`${showDetails ? 'mt-6' : 'mt-0'}`}>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Мы используем файлы cookie для улучшения работы сайта и предоставления более персонализированного сервиса. 
            Нажимая "Принять", вы соглашаетесь с использованием файлов cookie в соответствии с нашей{' '}
            <a href="/privacy" className="text-yellow-500 hover:text-yellow-400 underline ml-1">
              политикой конфиденциальности
            </a>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={acceptCookies}
              className="flex-1 bg-yellow-500 text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg hover:shadow-yellow-500/25 text-sm sm:text-base whitespace-nowrap"
            >
              Принять
            </button>
            <button
              onClick={rejectCookies}
              className="flex-1 bg-gray-100 text-gray-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all text-sm sm:text-base"
            >
              Отклонить
            </button>
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            Вы можете изменить свои настройки cookie в любое время
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}