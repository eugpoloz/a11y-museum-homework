import React from 'react';
import './App.css';
import SkipLink from './SkipLink/SkipLink';
import NavMain from './NavMain/NavMain';

function App() {
  return (
    <React.Fragment>
      <header className="container">
        <SkipLink />

        {/* заголовок */}
        {/* поиск */}
        {/* переключалка языков */}
        {/* иконка профиля */}
      </header>

      <NavMain />

      {/* footer */}
      <footer></footer>
    </React.Fragment>
  );
}

export default App;
