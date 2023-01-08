import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSort } from '../hooks/useSort';
import { format } from 'date-fns';
import { useAxios } from '../hooks/axios/useAxios';
import { Notify, Loading, Report } from 'notiflix';
import { useRef } from 'react';
import debounce from 'lodash.debounce';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [options, setOptions] = useState({
    url: sessionStorage.getItem('url') || '/posts', //or  useEffect(() => { sessionStorage.setItem('url', '/posts');}, []);
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const navigate = useNavigate();
  const { isLoading, fetchError, items } = useAxios(options, setOptions);
  const [searchValue, setSearchValue] = useState('');
  const searchResults = useSort(items, searchValue);

  return (
    <DataContext.Provider
      value={{
        options,
        setOptions,
        setSearchValue,
        searchValue,
        searchResults,
        items,
        isLoading,
        fetchError,
        navigate,
        format,
        Notify,
        Report,
        Loading,
        useRef,
        debounce,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
