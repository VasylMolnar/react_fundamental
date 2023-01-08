import React from 'react';
import Form from './Ul/form/Form';
import Input from './Ul/input/Input';
import Button from './Ul/button/Button';
import DataContext from '../context/DataContext';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

const Search = () => {
  const { setSearchValue, setOptions, options, Loading, useRef, debounce } =
    useContext(DataContext);
  const inputRef = useRef();

  return (
    <>
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
                  sessionStorage.setItem('url', '/posts');
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
                  sessionStorage.setItem('url', '/comments');
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
      <Outlet />
    </>
  );
};

export default Search;
