import React from 'react';
import { LangContext } from '../../../shared/contexts';
import './LanguageSwitcher.css';

interface LanguageButtonProps {
  lang: string;
  children?: any;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({
  lang,
  children,
  ...restProps
}: LanguageButtonProps) => {
  const [activeLanguage, switchActiveLanguage] = React.useContext(LangContext);
  const isActive = lang === activeLanguage;

  const Component = isActive ? 'div' : 'button';

  const activeClassName = isActive ? '' : 'lang--active button--link';
  let buttonProps = {};

  if (isActive) {
    buttonProps = {
      type: 'button',
      disabled: isActive,
      'aria-pressed': isActive,
    };
  }

  return (
    <Component
      className={`lang button ${activeClassName} typography--18px`}
      {...restProps}
      {...buttonProps}
      onClick={() => switchActiveLanguage(lang)}
    >
      <span>{children}</span>
    </Component>
  );
};

export const LanguageSwitcher = () => {
  return (
    <nav aria-label="Выбрать язык" className="lang__container">
      <LanguageButton lang="ru" aria-label="Переключиться на русский язык">
        Ру
      </LanguageButton>
      <LanguageButton lang="en" aria-label="Switch to English">
        En
      </LanguageButton>
    </nav>
  );
};
