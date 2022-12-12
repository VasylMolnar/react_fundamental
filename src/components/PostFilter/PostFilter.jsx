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
        defaultValue="Sort list"
        options={[
          { value: 'id', name: 'id' },
          { value: 'item', name: 'item' },
          { value: 'checked', name: 'checked' },
          { value: 'default', name: '...' },
        ]}
      />
    </>
  );
};

export default PostFilter;
