import React from 'react';
import './Search.css';

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.81548 0.282349C3.50561 0.282349 0 3.64736 0 7.78431C0 11.9213 3.50565 15.2863 7.81552 15.2863C9.52472 15.2863 11.106 14.7547 12.3928 13.8585L17.5 18.7608C17.8324 19.0798 18.3713 19.0797 18.7037 18.7607L19.2508 18.2356C19.5831 17.9165 19.5831 17.3992 19.2507 17.0801L14.1436 12.1779C15.0773 10.9428 15.631 9.42494 15.631 7.78431C15.631 3.64735 12.1253 0.282349 7.81548 0.282349ZM2.47621 7.78431C2.47621 4.95855 4.87165 2.65921 7.81552 2.65921C10.7594 2.65921 13.1548 4.95855 13.1548 7.78431C13.1548 10.6101 10.7594 12.9094 7.81552 12.9094C4.87165 12.9094 2.47621 10.6101 2.47621 7.78431Z"
      fill="black"
    />
  </svg>
);

export const Search = () => {
  const labelText = 'Поиск по сайту';

  // const [searchValue, updateSearchValue] = React.useState<string>('');

  // const onSubmit = () => {
  //   if (searchValue) {
  //     window.location.search = searchValue;
  //   }
  // };

  // const onReset = () => {
  //   updateSearchValue('');

  //   window.location.search.substr(1);
  // };

  return (
    <form
      role="search"
      className="input__wrapper search__form"
      id="search-form"
    >
      <label className="search__container input__container" htmlFor="search">
        <span className="sr-only">{labelText}</span>
        <input
          className="search input typography--18px"
          id="search"
          type="search"
          placeholder={labelText}
          aria-label="Введите ваш поисковый запрос"
        />
      </label>
      <button className="button search__action" type="submit">
        <span className="sr-only">Найти</span>
        <span aria-hidden="true">
          <SearchIcon className="search__icon" />
        </span>
      </button>
    </form>
  );
};
