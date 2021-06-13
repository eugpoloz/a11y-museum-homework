import React from 'react';
import './NavMain.css';

interface NavMainLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavMainLink = ({ children, ...props }: NavMainLinkProps) => (
  <li className="nav-main__item">
    <a className="nav-main__link" {...props}>
      {children}
    </a>
  </li>
);

const NavMain = () => (
  <nav id="navigation" className="container nav-main typography--18px">
    <ul role="presentation" className="nav-main__list">
      <NavMainLink href="#museum">Музей</NavMainLink>
      <NavMainLink href="#exhibitions">Выставки и события</NavMainLink>
      <NavMainLink href="#online-streams">Онлайн-трансляции</NavMainLink>
      <NavMainLink href="#live">Экскурсии и лекции в прямом эфире</NavMainLink>
    </ul>
  </nav>
);

export default NavMain;
