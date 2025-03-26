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

interface ModelPageTranslation {
  title: string;
  description: string;
  commonIssues: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  services: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  whyChooseUs: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  ctaSection: {
    title: string;
    description: string;
    buttonText: string;
  };
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  heroImage?: string;
  problems: Problem[];
  features: Feature[];
  advantages: Advantage[];
}

export interface ModelPageContent {
  en: ModelPageTranslation;
  de: ModelPageTranslation;
  ru: ModelPageTranslation;
  sk: ModelPageTranslation;
}