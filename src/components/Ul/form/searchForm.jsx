import React from 'react';
import Input from '../input/Input';

const searchForm = ({ searchValue, setSearchValue }) => {
  return (
    <form className="search_form" onSubmit={e => e.preventDefault()}>
      <Input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </form>
  );
};

export default searchForm;
