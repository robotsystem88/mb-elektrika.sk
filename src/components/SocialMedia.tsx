import React from 'react';
import { Facebook, MessageCircle } from 'lucide-react';

interface SocialMediaProps {
  variant?: 'default' | 'large' | 'header';
  className?: string;
}

export function SocialMedia({ variant = 'default', className = '' }: SocialMediaProps) {
  const baseClasses = {
    default: "flex items-center space-x-3 sm:space-x-4",
    large: "flex items-center space-x-4 sm:space-x-6",
    header: "flex items-center space-x-3 sm:space-x-4 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg"
  };

  const iconClasses = {
    default: "w-4 h-4 sm:w-5 sm:h-5",
    large: "w-5 h-5 sm:w-6 sm:h-6",
    header: "w-4 h-4 sm:w-5 sm:h-5"
  };

  const linkClasses = {
    default: "text-gray-400 hover:text-blue-500 transition-colors flex items-center space-x-2",
    large: "text-gray-400 hover:text-blue-500 transition-colors flex items-center space-x-3",
    header: "text-white hover:text-yellow-400 transition-colors flex items-center space-x-2"
  };

  return (
    <div className={`${baseClasses[variant]} ${className}`}>
      <a
        href="https://www.facebook.com/share/15c8oa6tdD/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses[variant]}
        title="Follow us on Facebook"
      >
        <Facebook className={iconClasses[variant]} />
        {variant === 'large' && <span>Facebook</span>}
      </a>
      <a
        href="https://t.me/AutoElektrikaMB"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses[variant]}
        title="Join our Telegram channel"
      >
        <MessageCircle className={iconClasses[variant]} />
        {variant === 'large' && <span>Telegram</span>}
      </a>
    </div>
  );
}