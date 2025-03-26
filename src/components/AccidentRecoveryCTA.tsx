import React from 'react';
import { Zap, AlertTriangle, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceRequestModal } from './ServiceRequestModal';

export function AccidentRecoveryCTA() {
  const { t } = useLanguage();
  const [showModal, setShowModal] = React.useState(false);

  return (
    <section id="accident-recovery" className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <ServiceRequestModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        carModel="Восстановление высоковольтной батареи после аварии"
        isAccidentRecovery={true}
      />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,179,8,0.15),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl border border-yellow-500/20">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-yellow-500 p-4 rounded-xl shadow-lg">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="mt-6 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              {t('accidentRecovery', 'title') || 'Восстановление высоковольтных батарей после аварии'}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              {t('accidentRecovery', 'description') || 'Профессиональная диагностика и восстановление высоковольтных батарей после аварийных ситуаций. Гарантия безопасности и качества работ.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-yellow-500" />,
                title: t('accidentRecovery', 'features.diagnostics') || 'Полная диагностика',
                description: t('accidentRecovery', 'features.diagnosticsDesc') || 'Профессиональная оценка состояния батареи'
              },
              {
                icon: <Shield className="w-6 h-6 text-yellow-500" />,
                title: t('accidentRecovery', 'features.safety') || 'Гарантия безопасности',
                description: t('accidentRecovery', 'features.safetyDesc') || 'Соблюдение всех норм безопасности'
              },
              {
                icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
                title: t('accidentRecovery', 'features.expertise') || 'Экспертный подход',
                description: t('accidentRecovery', 'features.expertiseDesc') || 'Опыт работы с аварийными случаями'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
                <div className="bg-yellow-500/10 p-2 sm:p-3 rounded-lg inline-block mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg group text-sm sm:text-base"
            >
              <span className="mr-2">{t('accidentRecovery', 'ctaButton') || 'Получить консультацию'}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}