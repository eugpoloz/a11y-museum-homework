import React from 'react';
import './Article.css';

export interface ArticleProps {
  title: string; // h2
  children?: React.ReactNode;
  id: string;
}

export const Article = ({ children, title, ...props }: ArticleProps) => (
  <article className="container article" {...props}>
    <h2 className="article__title">
      <a className="link" href={`#${props.id}`}>
        {title}
      </a>
    </h2>

    {children}
  </article>
);
