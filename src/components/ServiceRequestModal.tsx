import React from 'react';
import { X, Phone, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SuccessModal } from './SuccessModal'; 
import { submitFormToEmail } from '../utils/emailSubmission';

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  carModel: string;
  isAccidentRecovery?: boolean;
}

function ServiceRequestModal({ isOpen, onClose, carModel, isAccidentRecovery }: ServiceRequestModalProps) {
  const { t } = useLanguage();
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      model: carModel,
      urgency: formData.get('urgency') as string
    };

    const success = await submitFormToEmail(data);
    setIsSubmitting(false);
    
    if (success) {
      setShowSuccess(true);
    }
  };

  return (
    <>
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999999] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col relative animate-fade-in mx-auto">
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-2 left-2 sm:top-4 sm:left-4 p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col items-center text-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
            <div className="bg-yellow-500/10 p-2 sm:p-3 rounded-xl">
              {isAccidentRecovery ? (
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-500" />
              ) : (
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-500" />
              )}
            </div>
            <div className="text-center">
              <h2 className="text-base sm:text-lg md:text-xl font-bold">
                {isAccidentRecovery ? t('serviceModal', 'accidentTitle') : t('serviceModal', 'title')}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">{carModel}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('serviceModal', 'name')}
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition text-sm sm:text-base"
                placeholder={t('serviceModal', 'namePlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('serviceModal', 'phone')}
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition text-sm sm:text-base"
                placeholder={t('serviceModal', 'phonePlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {isAccidentRecovery ? t('serviceModal', 'accidentUrgency') : t('serviceModal', 'urgency')}
              </label>
              <div className="space-y-3">
                {[
                  isAccidentRecovery ? [
                    { key: 'critical', id: 'critical', label: t('serviceModal', 'accidentUrgencyLevels.critical'), description: t('serviceModal', 'accidentUrgencyDescriptions.critical') },
                    { key: 'high', id: 'high', label: t('serviceModal', 'accidentUrgencyLevels.high'), description: t('serviceModal', 'accidentUrgencyDescriptions.high') },
                    { key: 'medium', id: 'medium', label: t('serviceModal', 'accidentUrgencyLevels.medium'), description: t('serviceModal', 'accidentUrgencyDescriptions.medium') }
                  ] : [
                    { key: 'urgent', id: 'urgent', label: t('serviceModal', 'urgencyLevels.urgent'), description: t('serviceModal', 'urgencyDescriptions.urgent') },
                    { key: 'standard', id: 'standard', label: t('serviceModal', 'urgencyLevels.standard'), description: t('serviceModal', 'urgencyDescriptions.standard') },
                    { key: 'flexible', id: 'flexible', label: t('serviceModal', 'urgencyLevels.flexible'), description: t('serviceModal', 'urgencyDescriptions.flexible') }
                  ]
                ][0].map((option) => (
                  <div key={option.key} className="relative flex items-start p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center h-5 flex-shrink-0">
                      <input
                        id={option.id}
                        name="urgency"
                        type="radio"
                        required
                        defaultChecked={option.id === 'standard'}
                        className="h-4 w-4 text-yellow-500 border-gray-300 focus:ring-yellow-500"
                      />
                    </div>
                    <div className="ml-3 min-w-0">
                      <label htmlFor={option.id} className="font-medium text-gray-900">
                        {option.label}
                      </label>
                      <p className="text-sm text-gray-500 break-words">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('serviceModal', 'message')}
              </label>
              <textarea
                name="message"
                rows={3}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition text-sm sm:text-base"
                placeholder={t('serviceModal', 'messagePlaceholder')}
              ></textarea>
            </div>

            <div className="text-sm text-gray-500">
              {t('serviceModal', 'consent')}
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
              disabled={isSubmitting}
            >
              <Phone className="w-5 h-5" />
              <span>{isSubmitting ? t('serviceModal', 'submitting') : t('serviceModal', 'submit')}</span>
            </button>
          </form>

          <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
            {t('serviceModal', 'callbackTime')}
          </p>
        </div>
        </div>
      </div>
      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => {
          setShowSuccess(false);
          onClose();
        }} 
      />
    </>
  );
}



export { ServiceRequestModal }