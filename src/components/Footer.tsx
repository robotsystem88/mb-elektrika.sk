import React from "react";
import { Battery } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logoImage from "../image/logo.png";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 sm:mb-0">
            <img
              src={logoImage}
              alt="logo"
              className="lg:w-48 md:w-40 w-32 object-cover object-center"
            />
          </div>
          <div className="text-center mb-4 sm:mb-0">
            <h4 className="font-bold mb-2 sm:mb-4 text-sm sm:text-base">
              {t("footer", "workingHours.title")}
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm">
              {t("footer", "workingHours.text")}
            </p>
          </div>
          <div className="text-center sm:text-right">
            <h4 className="font-bold mb-2 sm:mb-4 text-sm sm:text-base">
              {t("footer", "contacts.title")}
            </h4>
            <a
              href="tel:+421901791975"
              className="text-gray-400 hover:text-yellow-500 transition-colors text-xs sm:text-sm block mb-2"
            >
              {t("footer", "contacts.phone")}
            </a>
            <p className="text-gray-400 text-xs sm:text-sm">
              {t("footer", "contacts.address")}
            </p>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 lg:mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            {t("footer", "copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
