import React from 'react';
import './SiteNav.css';

export const SiteNav = () => {
  return (
    <nav
      id="site-nav"
      className="container site-nav typography--18px"
      aria-label="Разделы сайта"
    >
      <ul role="presentation" className="site-nav__list">
        <li className="site-nav__item">
          <a
            className="site-nav__link button button--accent typography--22px"
            href="https://tickets.pushkinmuseum.art/ru/#id=443"
          >
            Купить билет
          </a>
        </li>

        <li className="site-nav__item">
          <a
            className="site-nav__link button button--accent typography--22px"
            href="https://tickets.pushkinmuseum.art/ru/#id=443"
          >
            Стать другом
          </a>
        </li>

        <li className="site-nav__item">
          <a
            className="site-nav__link button button--accent typography--22px"
            href="https://tickets.pushkinmuseum.art/ru/#id=443"
          >
            Онлайн-магазин
          </a>
        </li>
      </ul>
    </nav>
  );
};
