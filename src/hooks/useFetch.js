import { useEffect, useState } from 'react';

const DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' },
};

export const useFetch = (name = [], page) => {
  //https://jsonplaceholder.typicode.com/users/?page=1&_limit=2
  const API_URL = 'https://jsonplaceholder.typicode.com/'; //todos/1
  const filter = `${name}/?${page}&_limit=10`;
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${filter}`, {
          ...DEFAULT_OPTIONS,
        }).then(response => {
          if (!response.ok) {
            throw new Error('Did not receive expected data');
          }
          console.log(response.hits.length);
          return response.json();
        });

        setItems(response);
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
  }, [name]);

  return { items, fetchError, isLoading };
};
