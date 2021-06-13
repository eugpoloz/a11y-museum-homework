import React from 'react';
import './App.css';
import { Header, NavMain, SkipLink, Museum } from './components';

function App() {
  return (
    <div className="museum-app">
      <SkipLink to="main" />
      <Header />

      <main id="main">
        <NavMain />
        <Museum id="museum" />
      </main>

      {/* footer */}
      <footer></footer>
    </div>
  );
}

export default App;
