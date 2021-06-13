/* eslint-disable jsx-a11y/anchor-is-valid */
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
            <h3
              id="footer-nav-title"
              className="typography--22px footer__title"
            >
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

        {/* подписка */}
        <section
          className="footer__section"
          aria-labelledby="footer-subscription-title"
        >
          <form id="footer-subscription" autoComplete="on">
            <h3
              id="footer-subscription-title"
              className="typography--22px footer__title"
            >
              Подписка на новости
            </h3>

            <label className="footer-subscription__row" htmlFor="email">
              Email
            </label>
            <div role="presentation" className="footer-subscription__row">
              <label className="input__wrapper" role="presentation">
                <input
                  id="email"
                  type="email"
                  className="input footer-subsciption__email typography--18px"
                  autoComplete="on"
                  placeholder="name@domain.zone"
                  required
                  min="2"
                />
              </label>
            </div>

            <label className="footer-subscription__row footer-subscription__row--checkbox">
              <input
                type="checkbox"
                required
                className="footer-subscription__checkbox"
              />
              <span>Соглашаюсь на обработку персональных данных</span>
            </label>

            <button type="submit" className="button">
              Подписаться
            </button>
          </form>
        </section>
      </div>
    </footer>
  );
};
