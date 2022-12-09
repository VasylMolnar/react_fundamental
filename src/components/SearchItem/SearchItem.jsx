import React from 'react';
import Input from '../Ul/input/Input';
import './index.css';
const SearchItem = ({ placeholderName, name, search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={e => e.preventDefault()}>
      <label htmlFor="search">{name}</label>
      <Input
        type="text"
        role="searchbox"
        placeholder={placeholderName}
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginTop: '10px', width: '350px', height: '47px' }}
      />
    </form>
  );
};

export default SearchItem;
