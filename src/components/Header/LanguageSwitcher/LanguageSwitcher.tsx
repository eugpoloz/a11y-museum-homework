import React from 'react';
import './LanguageSwitcher.css';

interface LanguageButtonProps {
  children: React.ReactNode;
}

const LanguageButton = (props: LanguageButtonProps) => (
  <button {...props} className="lang button typography--18px" type="button" />
);

export const LanguageSwitcher = () => {
  return (
    <div className="lang__container">
      <LanguageButton>RU</LanguageButton>
      <LanguageButton>EN</LanguageButton>
    </div>
  );
};
