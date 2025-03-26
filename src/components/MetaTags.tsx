import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface MetaTranslation {
  title: string;
  description: string;
  locale: string;
  keywords: string;
  address: string;
  phone: string;
  workingHours: string;
  priceRange: string;
}

export function MetaTags() {
  const { language } = useLanguage();

  useEffect(() => {
    const translations: Record<string, MetaTranslation> = {
      en: {
        title: "MBAutoElektrika - Professional Battery Service in Bratislava",
        description: "Expert diagnostics and repair of Mercedes-Benz, Porsche, BMW, Tesla and Smart 12V and 48V Lithium batteries in Bratislava. 24/7 service with warranty.",
        locale: "en_US",
        keywords: "Mercedes battery repair, lithium battery service, car battery repair Bratislava, 48V battery service, Mercedes-Benz battery, Tesla battery, BMW battery, Porsche battery",
        address: "Panónska cesta 34, 851 04 Petržalka, Bratislava",
        phone: "+421 901 791 975",
        workingHours: "24/7, including holidays",
        priceRange: "€€-€€€"
      },
      de: {
        title: "MBAutoElektrika - Professioneller Batterieservice in Bratislava",
        description: "Fachkundige Diagnose und Reparatur von Mercedes-Benz, Porsche, BMW, Tesla und Smart 12V und 48V Lithium-Batterien in Bratislava. 24/7 Service mit Garantie.",
        locale: "de_DE",
        keywords: "Mercedes Batteriereparatur, Lithium-Batterieservice, Autobatteriereparatur Bratislava, 48V Batterieservice, Mercedes-Benz Batterie, Tesla Batterie, BMW Batterie, Porsche Batterie",
        address: "Panónska cesta 34, 851 04 Petržalka, Bratislava",
        phone: "+421 901 791 975",
        workingHours: "24/7, einschließlich Feiertage",
        priceRange: "€€-€€€"
      },
      ru: {
        title: "MBAutoElektrika - Профессиональный сервис АКБ в Братиславе",
        description: "Экспертная диагностика и ремонт литиевых аккумуляторов Mercedes-Benz, Porsche, BMW, Tesla и Smart 12V и 48V в Братиславе. Сервис 24/7 с гарантией.",
        locale: "ru_RU",
        keywords: "Ремонт аккумуляторов Mercedes, сервис литиевых аккумуляторов, ремонт автомобильных аккумуляторов Братислава, сервис 48V аккумуляторов, аккумулятор Mercedes-Benz, аккумулятор Tesla, аккумулятор BMW, аккумулятор Porsche",
        address: "Panónska cesta 34, 851 04 Petržalka, Bratislava",
        phone: "+421 901 791 975",
        workingHours: "Круглосуточно, включая праздники",
        priceRange: "€€-€€€"
      },
      sk: {
        title: "MBAutoElektrika - Profesionálny servis batérií v Bratislave",
        description: "Odborná diagnostika a oprava lítiových batérií Mercedes-Benz, Porsche, BMW, Tesla a Smart 12V a 48V v Bratislave. Servis 24/7 so zárukou.",
        locale: "sk_SK",
        keywords: "Oprava batérií Mercedes, servis lítiových batérií, oprava autobatérií Bratislava, servis 48V batérií, batéria Mercedes-Benz, batéria Tesla, batéria BMW, batéria Porsche",
        address: "Panónska cesta 34, 851 04 Petržalka, Bratislava",
        phone: "+421 901 791 975",
        workingHours: "24/7, vrátane sviatkov",
        priceRange: "€€-€€€"
      }
    };

    const currentTranslation = translations[language];
    const imageUrl = "https://images.unsplash.com/photo-1635773054018-1d68618f979c?w=1200&h=630&fit=crop&auto=format";

    // Update document title and meta tags
    document.title = currentTranslation.title;
    document.documentElement.lang = language;

    // Basic meta tags
    const metaTags = {
      'description': currentTranslation.description,
      'keywords': currentTranslation.keywords,
      'author': 'MBAutoElektrika',
      'robots': 'index, follow',
      'googlebot': 'index, follow',
      'revisit-after': '7 days',
      
      // Open Graph
      'og:title': currentTranslation.title,
      'og:description': currentTranslation.description,
      'og:type': 'business.business',
      'og:url': 'https://mbautoelektrika.com',
      'og:image': imageUrl,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:locale': currentTranslation.locale,
      'og:site_name': 'MBAutoElektrika',
      'business:contact_data:street_address': currentTranslation.address,
      'business:contact_data:locality': 'Bratislava',
      'business:contact_data:postal_code': '851 04',
      'business:contact_data:country_name': 'Slovakia',
      'business:contact_data:phone_number': currentTranslation.phone,
      
      // Twitter Card
      'twitter:title': currentTranslation.title,
      'twitter:description': currentTranslation.description,
      'twitter:card': 'summary_large_image',
      'twitter:image': imageUrl,
      'twitter:image:alt': currentTranslation.title,
      
      // Geo Tags
      'geo.region': 'SK-BL',
      'geo.placename': 'Bratislava',
      'geo.position': '48.1486;17.1077',
      'ICBM': '48.1486, 17.1077'
    };

    Object.entries(metaTags).forEach(([key, value]) => {
      // Update both name and property meta tags
      ['name', 'property'].forEach(attribute => {
        const element = document.querySelector(`meta[${attribute}="${key}"]`);
        if (element) {
          element.setAttribute('content', value);
        }
      });
    });

    // Update alternate language links
    const alternates = {
      en: 'en_US',
      de: 'de_DE',
      ru: 'ru_RU',
      sk: 'sk_SK'
    };

    Object.entries(alternates).forEach(([lang, locale]) => {
      const link = document.querySelector(`link[hreflang="${lang}"]`);
      if (link) {
        link.setAttribute('href', `https://mbautoelektrika.com/${lang}/`);
      }
      
      const alternateMeta = document.querySelector(`meta[property="og:locale:alternate"][content="${locale}"]`);
      if (!alternateMeta && lang !== language) {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:locale:alternate');
        meta.setAttribute('content', locale);
        document.head.appendChild(meta);
      }
      
      // Update structured data
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "MBAutoElektrika",
        "description": currentTranslation.description,
        "image": imageUrl,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Panónska cesta 34",
          "addressLocality": "Bratislava",
          "postalCode": "851 04",
          "addressCountry": "SK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "48.1486",
          "longitude": "17.1077"
        },
        "url": "https://mbautoelektrika.com",
        "telephone": currentTranslation.phone,
        "openingHours": "Mo-Su 00:00-24:00",
        "priceRange": currentTranslation.priceRange,
        "areaServed": {
          "@type": "City",
          "name": "Bratislava"
        }
      };

      // Update or create structured data script
      let scriptElement = document.querySelector('script[type="application/ld+json"]');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    });
  }, [language]);

  return null;
}