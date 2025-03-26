import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999999] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] flex flex-col relative animate-fade-in mx-auto">
        <div className="p-6 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 left-2 sm:top-4 sm:left-4 p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold mb-2">{t('successModal', 'title')}</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">{t('successModal', 'message')}</p>
          
          <button
            onClick={onClose}
            className="bg-green-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-green-600 transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            {t('successModal', 'closeButton')}
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}