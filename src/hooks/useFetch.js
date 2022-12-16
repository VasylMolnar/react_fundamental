import { useEffect, useState } from 'react';
import axios from 'axios';

const DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' },
};

export const useFetch = (name = [], page) => {
  //https://jsonplaceholder.typicode.com/posts?_page=3&_limit=3
  const API_URL = 'https://jsonplaceholder.typicode.com/'; //todos/1
  const filter = `${name}?_page=${page}&_limit=10`;
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    //console.log('useFetch');
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${API_URL}${filter}`);
        //console.log(response.headers['x-total-count']);
        setTotalCount(response.headers['x-total-count']);
        setItems(response.data);
        setFetchError(null);
      } catch (e) {
        setFetchError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();

    /*
    setTimeout(() => {
      fetchItems();
    }, 500);*/
  }, [filter]);

  return { items, fetchError, isLoading, totalCount };
};
