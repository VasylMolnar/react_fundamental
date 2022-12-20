import React from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import { useRef } from 'react';

const SearchForm = ({ searchValue, setSearchValue }) => {
  const inputRef = useRef();

  return (
    <form className="search_form" onSubmit={e => e.preventDefault()}>
      <Input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />

      <Button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
        ref={inputRef}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
