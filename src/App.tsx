import React from 'react';
import './App.css';
import { Header, NavMain, SkipLink, Museum } from './components';

function App() {
  return (
    <div className="museum-app">
      <SkipLink to="museum" />
      <Header />
      <NavMain />
      <Museum id="museum" />

      {/* footer */}
      <footer></footer>
    </div>
  );
}

export default App;
