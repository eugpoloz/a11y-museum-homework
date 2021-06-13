import React from 'react';
import './Article.css';

interface ArticleProps {
  title: string; // h2
  children?: React.ReactNode;
  id: string;
}

export const Article = ({ children, title, ...props }: ArticleProps) => (
  <article className="container article" {...props}>
    <h2 className="article__title">{title}</h2>

    {children}
  </article>
);
