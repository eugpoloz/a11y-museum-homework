/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './ArticleLives.css';

export const ArticleLives = () => (
  <React.Fragment>
    <p className="typography--22px">
      С 1 июля вы можете присоединиться к нашим виртуальным мероприятиям —
      экскурсиям и лекциям для взрослых и детей, оплатив участие на сайте.
      Встречи будут проходить в прямом эфире на платформе Zoom; предусмотрен
      формат живого общения с возможностью задавать вопросы экскурсоводу
      (лектору).
      <br aria-hidden="true" />
      <a
        className="link"
        href="#"
        title="Узнать, как присоединиться к нашим виртуальным мероприятиям."
      >
        <span aria-hidden="true">Подробнее.</span>
      </a>
    </p>
    {/* prettier-ignore */}
    <p className="typography--22px">
      Мы будем благодарны за любое <a className="link" href="#">пожертвование</a>. Все
      поступившие средства будут направлены на организацию онлайн-проектов для
      наших посетителей.
    </p>
  </React.Fragment>
);
