import React from 'react';
import * as Components from './components';
import { Article } from './shared';
import { NavLink } from './shared/interfaces';
import './App.css';

function App() {
  const links: NavLink[] = [
    {
      href: 'museum',
      title: 'Музей',
      children: <Components.ArticleMuseum />,
    },
    {
      href: 'exhibitions',
      title: 'Выставки и события',
      children: <Components.ArticleExhibitions />,
    },
    {
      href: 'streams',
      title: 'Онлайн-трансляции',
      children: <Components.ArticleStreams />,
    },
    {
      href: 'lives',
      title: 'Экскурсии и лекции в прямом эфире',
      children: <Components.ArticleLives />,
    },
  ];

  const articles = links.map(({ href, title, children }: NavLink) => (
    <Article key={'article-' + href} id={href} title={title}>
      {children}
    </Article>
  ));

  return (
    <React.Fragment>
      <Components.SkipLink to="main" />
      <Components.Header />

      <main id="main">
        <Components.NavMain links={links} />
        <Components.SiteNav />
        {articles}
      </main>

      <Components.Footer />
    </React.Fragment>
  );
}

export default App;
