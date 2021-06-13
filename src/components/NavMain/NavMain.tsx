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

interface Link {
  href: string;
  title: string;
}

const NavMain = ({ links }: { links: Link[] }) => {
  const linksList = links.map(({ href, title }: Link) => (
    <NavMainLink key={href} href={'#' + href}>
      {title}
    </NavMainLink>
  ));

  return (
    <nav id="navigation" className="container nav-main typography--18px">
      <ul role="presentation" className="nav-main__list">
        {linksList}
      </ul>
    </nav>
  );
};

export default NavMain;
