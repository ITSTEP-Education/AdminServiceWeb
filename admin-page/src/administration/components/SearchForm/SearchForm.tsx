import React, {FC} from 'react';
import './SearchForm.css'; 

const SearchForm: FC = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Ім'я" className="input-field" />
      <input type="text" placeholder="Прізвище" className="input-field" />
      <button className="search-button">
        <span role="img" aria-label="search">🔍</span> ЗНАЙТИ
      </button>
    </div>
  );
};

export default SearchForm;
