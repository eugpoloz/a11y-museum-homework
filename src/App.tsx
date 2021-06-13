import React from 'react';
import { Header, NavMain, SkipLink, Museum } from './components';
import { NavLink } from './shared/interfaces';
import './App.css';

function App() {
  const links: NavLink[] = [
    {
      href: 'museum',
      title: 'Музей',
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

  return (
    <div className="museum-app">
      <SkipLink to="main" />
      <Header />

      <main id="main">
        <NavMain links={links} />
        <Museum id="museum" />
      </main>

      {/* footer */}
      <footer></footer>
    </div>
  );
}

export default App;
