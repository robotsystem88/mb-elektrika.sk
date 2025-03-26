import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Battery, Shield, Clock, CheckCircle2, AlertTriangle, Zap } from 'lucide-react';
import { ServiceRequestModal } from './ServiceRequestModal';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { FooterMenu } from './FooterMenu';
import { Navigation } from './Navigation';

interface Problem {
  title: string;
  description: string;
}

interface Feature {
  title: string;
  description: string;
}

interface Advantage {
  title: string;
  description: string;
}

export function ModelPage() {
  const { modelKey } = useParams();
  const { t, language } = useLanguage();
  const model = t('models', `classes.${modelKey || ''}`);
  const [showServiceModal, setShowServiceModal] = React.useState(false);
  const modelData = t('modelPages', modelKey) || {};
  const title = modelData.title || model.name;
  const description = modelData.description || '';
  
  if (!model) {
    return <div>Model not found</div>;
  }

  const metaTitle = modelData.metaTitle || title;
  const metaDescription = modelData.metaDescription || description;
  const metaKeywords = modelData.metaKeywords || '';
  const modelProblems: Problem[] = Array.isArray(modelData.problems) ? modelData.problems : [];
  const modelFeatures: Feature[] = Array.isArray(modelData.features) ? modelData.features : [];
  const modelAdvantages: Advantage[] = Array.isArray(modelData.advantages) ? modelData.advantages : [];
  const heroImage = modelData.heroImage || 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80';

  const commonTitle = t('modelPages', 'title') || 'Battery Service';
  const commonDescription = t('modelPages', 'description') || 'Professional battery diagnostics and repair';

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={heroImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={heroImage} />
        
        {/* Alternate Language Links */}
        <link rel="alternate" hreflang="en" href={`https://mbautoelektrika.com/en/models/${modelKey}`} />
        <link rel="alternate" hreflang="de" href={`https://mbautoelektrika.com/de/models/${modelKey}`} />
        <link rel="alternate" hreflang="ru" href={`https://mbautoelektrika.com/ru/models/${modelKey}`} />
        <link rel="alternate" hreflang="sk" href={`https://mbautoelektrika.com/sk/models/${modelKey}`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://mbautoelektrika.com/${language}/models/${modelKey}`} />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={model.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl">
            {description || commonDescription}
          </p>
          <button
            onClick={() => setShowServiceModal(true)}
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg"
          >
            {t('modelPages', 'ctaButton')}
          </button>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            {t('modelPages', 'problemsTitle') || 'Common Battery Issues'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modelProblems.map((problem: Problem, index: number) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all">
                <div className="bg-yellow-500/10 p-3 rounded-lg inline-block mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            {t('modelPages', 'featuresTitle') || 'Our Services'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modelFeatures.map((feature: Feature, index: number) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-500/10 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            {t('modelPages', 'advantagesTitle') || 'Why Choose Us'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modelAdvantages.map((advantage: Advantage, index: number) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {index === 0 ? <Shield className="w-8 h-8 text-white" /> :
                   index === 1 ? <Clock className="w-8 h-8 text-white" /> :
                                <CheckCircle2 className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            {t('modelPages', 'ctaTitle') || 'Professional Battery Service'}
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            {t('modelPages', 'ctaDescription') || 'Get expert help with your battery issues today'}
          </p>
          <button
            onClick={() => setShowServiceModal(true)}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all hover:scale-105 shadow-lg"
          >
            {t('modelPages', 'ctaButton') || 'Request Service'}
          </button>
        </div>
      </section>

      <Contact />
      <FooterMenu />
      <Footer />
      <Navigation />

      <ServiceRequestModal
        isOpen={showServiceModal}
        onClose={() => setShowServiceModal(false)}
        carModel={model.name}
      />
    </>
  );
}