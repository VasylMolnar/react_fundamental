import React from 'react';
import Input from '../Ul/input/Input';
import './index.css';
const SearchItem = ({ placeholderName, name, filter, setFilter }) => {
  return (
    <form className="searchForm" onSubmit={e => e.preventDefault()}>
      <label htmlFor="search">{name}</label>
      <Input
        type="text"
        role="searchbox"
        placeholder={placeholderName}
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        style={{ marginTop: '10px', width: '350px', height: '47px' }}
      />
    </form>
  );
};

export default SearchItem;
