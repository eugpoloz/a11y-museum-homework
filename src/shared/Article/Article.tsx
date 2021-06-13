import React from 'react';
import './Article.css';

interface ArticleProps {
  title: string; // h2
  children?: React.ReactNode;
  id: string;
}

export const Article = ({ children, title, ...props }: ArticleProps) => (
  <article className="container" {...props}>
    <h2 className="typography--h2">{title}</h2>

    {children}
  </article>
);
