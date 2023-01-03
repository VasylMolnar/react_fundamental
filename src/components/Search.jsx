import React from 'react';
import Form from './Ul/form/Form';
import Input from './Ul/input/Input';
import Button from './Ul/button/Button';
import { useRef } from 'react';
import debounce from 'lodash.debounce';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const Search = ({ setSearchValue, setOptions, options }) => {
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
          <br />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <Button
              onClick={() => {
                setOptions({ ...options, url: '/posts' });
                localStorage.setItem('url', '/posts');
                setTimeout(() => {
                  Loading.dots(' Loading Items...');
                }, 300);
              }}
              style={{ marginRight: '30px' }}
            >
              Posts
            </Button>
            <Button
              onClick={() => {
                setOptions({ ...options, url: '/comments' });
                localStorage.setItem('url', '/comments');
                setTimeout(() => {
                  Loading.dots(' Loading Items...');
                }, 300);
              }}
            >
              Comments
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Search;
