import React from "react";
import InputMask from "react-input-mask";
import { useLanguage } from "../../context/LanguageContext";

interface PhoneInputProps {
  className?: string;
}

export function PhoneInput({ className }: PhoneInputProps) {
  const { t } = useLanguage();

  return (
    <InputMask
      type="tel"
      name="phone"
      mask="+999 999 999 999"
      maskChar="_"
      required
      className={
        className
          ? className
          : "w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition text-sm sm:text-base"
      }
      placeholder={t("serviceModal", "phonePlaceholder")}
    />
  );
}
