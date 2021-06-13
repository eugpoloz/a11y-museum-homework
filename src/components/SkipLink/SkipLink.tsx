import React from 'react';
import './SkipLink.css';

const SkipLink = ({ to }: { to: string }) => (
  <a className="link button skip-link" href={`#${to}`}>
    Перейти к контенту
  </a>
);

export default SkipLink;
