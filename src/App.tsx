import React from 'react';
import * as Components from './components';
import { Article } from './shared';
import { NavLink } from './shared/interfaces';
import './App.css';
import { ArticleProps } from './shared/Article/Article';

const linkList: NavLink[] = [
  {
    href: '#museum',
    title: 'Музей',
    children: <Components.ArticleMuseum />,
  },
  {
    href: '#exhibitions',
    title: 'Посетителям',
    children: <Components.ArticleExhibitions />,
  },
  {
    href: 'https://tickets.pushkinmuseum.art/ru/#id=443',
    title: 'Купить билет',
  },
  {
    href: 'https://pushkinmuseum.art/museum/support_us/donate_online/index.php?lang=ru',
    title: 'Стать другом',
  },
  {
    href: 'https://pushkinmuseum.art/media/shopping/index.php?lang=ru',
    title: 'Онлайн-магазин',
  },
];

const articleList: ArticleProps[] = [
  {
    id: 'museum',
    title: 'Музей',
    children: <Components.ArticleMuseum />,
  },
  {
    id: 'exhibitions',
    title: 'Выставки и события',
    children: <Components.ArticleExhibitions />,
  },
  {
    id: 'streams',
    title: 'Онлайн-трансляции',
    children: <Components.ArticleStreams />,
  },
  {
    id: 'lives',
    title: 'Экскурсии и лекции в прямом эфире',
    children: <Components.ArticleLives />,
  },
];

function App() {
  const articles = articleList.map(({ id, title, children }: ArticleProps) => (
    <Article key={'article-' + id} id={id} title={title}>
      {children}
    </Article>
  ));

  return (
    <React.Fragment>
      <Components.SkipLink to="main" />
      <Components.Header />

      <main id="main">
        <Components.NavMain links={linkList} />
        {articles}
      </main>

      <Components.Footer />
    </React.Fragment>
  );
}

export default App;
