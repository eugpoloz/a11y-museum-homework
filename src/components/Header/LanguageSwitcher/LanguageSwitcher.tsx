import React from 'react';
import './LanguageSwitcher.css';

interface LanguageButtonProps {
  isActive: boolean;
  children?: any;
  onClick?: () => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({
  isActive,
  children,
  ...props
}: LanguageButtonProps) => {
  const activeClassName = isActive ? '' : 'button--link';

  return (
    <React.Fragment>
      <button
        type="button"
        className={`lang button ${activeClassName} typography--18px`}
        {...props}
        disabled={isActive}
        aria-pressed={isActive}
      >
        {children}
      </button>
    </React.Fragment>
  );
};

export const LanguageSwitcher = () => {
  const [activeLanguage, switchActiveLanguage] = React.useState<string>('ru');

  return (
    <div className="lang__container">
      <LanguageButton
        isActive={activeLanguage === 'ru'}
        onClick={() => {
          switchActiveLanguage('ru');
        }}
      >
        <span aria-label="Переключиться на русский язык">Ру</span>
      </LanguageButton>
      <LanguageButton
        isActive={activeLanguage === 'en'}
        onClick={() => {
          switchActiveLanguage('en');
        }}
      >
        <span aria-label="Switch to English">En</span>
      </LanguageButton>
    </div>
  );
};
