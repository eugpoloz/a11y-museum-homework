/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  RichterImage,
  TattooImage,
  DurerMatisseImage,
} from './ExhibitionImages';
import './ArticleExhibitions.css';

const exhibitionsList = [
  {
    id: 'richter',
    filterKey: 'tomorrow',
    title: 'Святослав Рихтер в кругу друзей. Москва — Коктебель',
    svg: <RichterImage />,
    date: '27 ноября',
    children:
      'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
  },
  {
    id: 'tattoo',
    filterKey: 'today',
    title: 'Тату',
    svg: <TattooImage />,
    date: '27 сентября',
    children:
      'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
  },
  {
    filterKey: 'tomorrow',
    id: 'durer-matisse',
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
  svg?: React.ReactElement;
  children?: string;
}

const ExhibitionCard = ({
  id,
  svg,
  title,
  date,
  children,
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
      <button
        type="button"
        className="button"
        aria-labelledby={`${id}-link ${id}-title`}
      >
        <span id={id + '-link'}>Купить билет</span>
      </button>
    </section>
  );
};

type Filter = 'today' | 'tomorrow' | null;

interface FilterButtonProps {
  currentFilter: Filter;
  buttonFilter: Filter;
  children: React.ReactElement | string;
  onClick?: () => void;
}

const FilterButton = ({
  currentFilter,
  buttonFilter,
  children,
  ...props
}: FilterButtonProps) => {
  const isActive = currentFilter === buttonFilter;
  const inactiveClassName = isActive ? '' : 'button--link';

  return (
    <button
      className={`button ${inactiveClassName} exhibition-filters__button`}
      type="button"
      role="radio"
      aria-checked={isActive}
      disabled={isActive}
      {...props}
    >
      {children}
    </button>
  );
};

export const ArticleExhibitions = () => {
  const list = React.useRef([...exhibitionsList]);
  const [currentFilter, changeCurrentFilter] = React.useState<Filter>(null);

  list.current = exhibitionsList.filter(({ filterKey }) => {
    if (currentFilter) {
      return filterKey === currentFilter;
    }

    return true;
  });

  return (
    <React.Fragment>
      <div
        className="exhibitions__container"
        role="radiogroup"
        aria-controls="exhibition-cards"
        aria-labelledby="filter"
      >
        <span className="sr-only" id="filter">
          Применить фильтр:
        </span>

        <FilterButton
          currentFilter={currentFilter}
          buttonFilter={null}
          onClick={() => {
            changeCurrentFilter(null);
          }}
        >
          Все
        </FilterButton>

        <FilterButton
          currentFilter={currentFilter}
          buttonFilter="today"
          onClick={() => {
            changeCurrentFilter('today');
          }}
        >
          Сегодня
        </FilterButton>

        <FilterButton
          currentFilter={currentFilter}
          buttonFilter="tomorrow"
          onClick={() => {
            changeCurrentFilter('tomorrow');
          }}
        >
          Завтра
        </FilterButton>
      </div>

      <output
        className="exhibitions__container exhibitions__container--cards"
        id="exhibition-cards"
        role="presentation"
      >
        {list?.current.map(({ filterKey, ...props }) => (
          <ExhibitionCard key={props.id} {...props} />
        ))}
      </output>
      {/* карточки */}
    </React.Fragment>
  );
};
