import React from 'react';
import Form from './Ul/form/Form';
import Input from './Ul/input/Input';
import Button from './Ul/button/Button';
import { useRef } from 'react';
import debounce from 'lodash.debounce';

const Search = ({ setSearchValue }) => {
  const inputRef = useRef();

  return (
    <section className="section search">
      <div className="container">
        <Form title="Search Item">
          <Input
            type="text"
            placeholder="Search..."
            //value={searchValue}
            //onChange={e => setSearchValue(e.target.value)}

            //optimization
            onChange={debounce(e => {
              setSearchValue(e.target.value);
            }, 300)}
            ref={inputRef}
          />

          <Button
            type="submit"
            aria-label="Add Item"
            onClick={() => inputRef.current.focus()}
          >
            Search
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Search;
