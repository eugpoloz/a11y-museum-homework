import React from 'react';
import * as Components from './components';
import { Article, ArticleProps } from './shared';
import { NavLink } from './shared/interfaces';
import { LangContext } from './shared/contexts';
import './App.css';

const linkList: NavLink[] = [
  {
    href: '#museum',
    title: 'Музей',
  },
  {
    href: '#exhibitions',
    title: 'Выставки и события',
  },
  {
    href: '#streams',
    title: 'Онлайн-трансляции',
  },
  {
    href: '#lives',
    title: 'Экскурсии и лекции в прямом эфире',
  },
  {
    href: 'https://pushkinmuseum.art/media/shopping/index.php?lang=ru',
    title: 'Магазин',
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
  const [activeLanguage, switchActiveLanguage] = React.useState<string>('ru');

  return (
    <React.Fragment>
      <LangContext.Provider value={[activeLanguage, switchActiveLanguage]}>
        <Components.SkipLink to="main" />
        <Components.Header />

        <main id="main">
          <Components.NavMain links={linkList} />
          {articleList.map(({ id, title, children }: ArticleProps) => (
            <Article key={'article-' + id} id={id} title={title}>
              {children}
            </Article>
          ))}
        </main>

        <Components.Footer />
      </LangContext.Provider>
    </React.Fragment>
  );
}

export default App;
