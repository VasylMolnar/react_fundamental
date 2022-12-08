import React from 'react';
import Input from '../Ul/input/Input';
import './index.css';
const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={e => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <Input
        type="text"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginTop: '10px', width: '350px', height: '47px' }}
      />
    </form>
  );
};

export default SearchItem;
