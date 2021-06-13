import React from 'react';
import './App.css';
import { Header, NavMain, SkipLink } from './components';

function App() {
  return (
    <div className="museum-app">
      <SkipLink />
      <Header />
      <NavMain />

      {/* footer */}
      <footer></footer>
    </div>
  );
}

export default App;
