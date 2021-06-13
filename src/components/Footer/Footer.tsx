/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer container">
        <nav
          id="footer-nav"
          className="typography--18px"
          aria-label="Дополнительная информация"
        >
          <ul role="presentation" className="footer-nav__list">
            <li className="footer-nav__item">
              <a href="#">Посетителям с ограниченными возможностями</a>
            </li>
            <li className="footer-nav__item">
              <a href="#">Билеты и льготы</a>
            </li>
            <li className="footer-nav__item">
              <a href="#">Противодействие коррупции</a>
            </li>
          </ul>
        </nav>
        {/* соцсети */}
        {/* подписка */}
      </div>
    </footer>
  );
};
