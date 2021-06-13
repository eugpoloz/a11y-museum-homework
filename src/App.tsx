import React from 'react';
import { Header, NavMain, SkipLink, ArticleMuseum } from './components';
import { Article } from './shared';
import { NavLink } from './shared/interfaces';
import './App.css';

function App() {
  const links: NavLink[] = [
    {
      href: 'museum',
      title: 'Музей',
      children: <ArticleMuseum />,
    },
    {
      href: 'exhibitions',
      title: 'Выставки и события',
    },
    {
      href: 'streams',
      title: 'Онлайн-трансляции',
    },
    {
      href: 'lives',
      title: 'Экскурсии и лекции в прямом эфире',
    },
  ];

  const articles = links.map(({ href, title, children }: NavLink) => (
    <Article key={'article-' + href} id={href} title={title}>
      {children}
    </Article>
  ));

  return (
    <div className="museum-app">
      <SkipLink to="main" />
      <Header />

      <main id="main">
        <NavMain links={links} />
        {articles}
      </main>

      {/* footer */}
      <footer></footer>
    </div>
  );
}

export default App;
