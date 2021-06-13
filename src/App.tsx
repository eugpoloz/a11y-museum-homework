import React from 'react';
import './App.css';
import { Header, NavMain, SkipLink, Museum } from './components';

function App() {
  const links = [
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
