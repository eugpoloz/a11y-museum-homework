import React from 'react';
import './App.css';
import { Header, NavMain, SkipLink } from './components';

function App() {
  return (
    <React.Fragment>
      <SkipLink />
      <Header />
      <NavMain />

      {/* footer */}
      <footer></footer>
    </React.Fragment>
  );
}

export default App;
