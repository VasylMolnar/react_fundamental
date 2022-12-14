import { useCallback, React } from 'react';
import Input from '../Ul/input/Input';
import './index.css';
import debounce from 'lodash.debounce';

const SearchItem = ({ placeholderName, name, filter, setFilter }) => {
  return (
    <form className="searchForm" onSubmit={e => e.preventDefault()}>
      <label htmlFor="search">{name}</label>
      <Input
        type="text"
        role="searchbox"
        placeholder={placeholderName}
        //value={filter.query}//used (value) when we are not using debounce
        //we use debounce for delay (code optimization)
        onChange={debounce(e => {
          setFilter({ ...filter, query: e.target.value });
        }, 300)}
        style={{ marginTop: '10px', width: '350px', height: '47px' }}
      />
    </form>
  );
};

export default SearchItem;
