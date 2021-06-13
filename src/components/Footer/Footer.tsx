/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';
import * as Icons from './Icons';

export const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer container" role="presentation">
        <section className="footer__section">
          {/* навигация */}
          <nav
            id="footer-nav"
            className="footer-nav typography--18px"
            aria-labelledby="footer-nav-title"
          >
            <h3 id="footer-nav-title" className="sr-only">
              Дополнительные ссылки
            </h3>
            <ul role="presentation" className="footer-nav__list">
              <li className="footer-nav__item">
                <a className="link" href="#">
                  Посетителям с ограниченными возможностями
                </a>
              </li>
              <li className="footer-nav__item">
                <a className="link" href="#">
                  Билеты и льготы
                </a>
              </li>
              <li className="footer-nav__item">
                <a className="link" href="#">
                  Противодействие коррупции
                </a>
              </li>
            </ul>
          </nav>

          {/* соцсети */}
          <nav
            id="footer-social"
            className="typography--18px"
            aria-labelledby="footer-social-title"
          >
            <h3
              id="footer-social-title"
              className="typography--22px footer__title"
            >
              Социальные сети
            </h3>
            <ul role="presentation" className="footer-social__list">
              <li className="footer-social__item">
                <a
                  className="link footer-social__link"
                  title="Напишите нам на email"
                  href="mailto:tickets@arts-museum.ru"
                >
                  <Icons.IconEmail />
                </a>
              </li>
              <li className="footer-social__item">
                <a
                  className="link footer-social__link"
                  title="Подпишитесь на наш канал в Telegram"
                  href="https://t.me/theartsmuseum"
                >
                  <Icons.IconTelegram />
                </a>
              </li>
              <li className="footer-social__item">
                <a
                  className="link footer-social__link"
                  title="Присоединяйтесь к нашей группе в Facebook"
                  href="https://www.facebook.com/theartsmuseum/"
                >
                  <Icons.IconFacebook />
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section></section>
        {/* подписка */}
      </div>
    </footer>
  );
};
