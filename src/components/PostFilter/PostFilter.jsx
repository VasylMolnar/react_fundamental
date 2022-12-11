import React from 'react';
import Select from '../Ul/select/Select';
import SearchItem from '../SearchItem/SearchItem';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <SearchItem
        filter={filter}
        setFilter={setFilter}
        name={'Search'}
        placeholderName={'Search Items'}
      />

      <Select
        filter={filter}
        setFilter={setFilter}
        defaultValue="Sort"
        options={[
          { value: 'id', name: 'ID' },
          { value: 'body', name: 'Name' },
          { value: 'default', name: '...' },
        ]}
      />
    </>
  );
};

export default PostFilter;
