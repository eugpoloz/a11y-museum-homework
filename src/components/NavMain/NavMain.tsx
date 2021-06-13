import React from 'react';
import { NavLink } from '../../shared/interfaces';
import './NavMain.css';

interface NavMainLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavMainLink = ({ children, ...props }: NavMainLinkProps) => (
  <li className="nav-main__item">
    <a className="link nav-main__link" {...props}>
      {children}
    </a>
  </li>
);

interface NavMainProps {
  links: NavLink[];
}

const NavMain = ({ links }: NavMainProps) => {
  const linksList = links.map(({ href, title }: NavLink) => (
    <NavMainLink key={href} href={'#' + href}>
      {title}
    </NavMainLink>
  ));

  return (
    <nav
      id="navigation"
      className="container nav-main typography--18px"
      aria-label="Разделы главной страницы"
    >
      <ul role="presentation" className="nav-main__list">
        {linksList}
      </ul>
    </nav>
  );
};

export default NavMain;
