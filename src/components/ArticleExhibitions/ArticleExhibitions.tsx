/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  RichterImage,
  TattooImage,
  DurerMatisseImage,
} from './ExhibitionImages';
import './ArticleExhibitions.css';

const exhibitionsList = [
  {
    id: 'richter',
    filterKey: 'today',
    href: '#',
    title: 'Святослав Рихтер в кругу друзей. Москва — Коктебель',
    svg: <RichterImage />,
    date: '27 ноября',
    children:
      'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
  },
  {
    id: 'tattoo',
    filterKey: 'tomorrow',
    href: '#',
    title: 'Тату',
    svg: <TattooImage />,
    date: '27 сентября',
    children:
      'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
  },
  {
    filterKey: '',
    id: 'durer-matisse',
    href: '#',
    title:
      'От Дюрера до Матисса. Избранные рисунки из собрания ГМИИ им. А.С. Пушкина',
    svg: <DurerMatisseImage />,
    date: '1 ноября',
    children:
      'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
  },
];

interface ExhibitionCardProps {
  title: string;
  date: string;
  id: string;
  href: string;
  svg?: React.ReactElement;
  children?: string;
}

const ExhibitionCard = ({
  id,
  svg,
  title,
  date,
  children,
  href = '#',
}: ExhibitionCardProps) => {
  return (
    <section id={id} className="exhibition-card" aria-label={title}>
      {svg}
      <h3
        id={id + '-title'}
        className="exhibition-card__title typography--26px"
      >
        {title}
      </h3>
      <p className="exhibition-card__date typography--22px">
        Выставка до {date}
      </p>
      <p className="exhibition-card__content">{children}</p>
      <a
        className="link"
        href={href}
        aria-labelledby={`${id}-link ${id}-title`}
      >
        <span id={id + '-link'}>Купить билет</span>
      </a>
    </section>
  );
};

export const ArticleExhibitions = () => {
  const [currentFilter, changeCurrentFilter] = useState<string | null>(null);

  const list = exhibitionsList
    .filter(({ filterKey }) => {
      if (currentFilter) {
        return filterKey === currentFilter;
      }

      return true;
    })
    .map(({ filterKey, ...props }) => (
      <ExhibitionCard key={props.id} {...props} />
    ));

  return (
    <React.Fragment>
      {/* фильтры */}
      <div className="exhibitions__container" role="presentation">
        {list}
      </div>
      {/* карточки */}
    </React.Fragment>
  );
};
