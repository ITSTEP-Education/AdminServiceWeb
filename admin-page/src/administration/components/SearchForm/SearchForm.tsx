import React, {FC} from 'react';
import './SearchForm.css'; 

interface ISearcForm {
  handleUserName: (e: React.FormEvent<HTMLElement>) => void,
}

const SearchForm: FC<ISearcForm> = (props) => {

  return (
    <form className="search-container">
      <input type="text" placeholder="Ім'я" className="input-field" />
      <input type="text" placeholder="Прізвище" className="input-field" />
      <button className="search-button" onClick={props.handleUserName}>
        <span role="img" aria-label="search">🔍</span> ЗНАЙТИ
      </button>
    </form>
  );
};

export default SearchForm;
