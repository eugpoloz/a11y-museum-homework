import React from 'react';
import './ArticleStreams.css';

export const ArticleStreams = () => (
  <React.Fragment>
    <p id="stream-desc" className="sr-only" aria-hidden="true">
      Смотрите в прямом эфире онлайн-лекцию «Ай Вейвей: движение к
      общечеловеческому». Лекцию прочитает заместитель директора ГМИИ им. А.С.
      Пушкина по региональному развитию Екатерина Кочеткова.
    </p>
    <div className="stream" role="presentation">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/5qRR-5H1XgU"
        aria-labelledby="stream-desc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </React.Fragment>
);
