import { useEffect, useState } from 'react';
const DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' },
};

export const useFetch = (API_URL, dependency) => {
  //GET method
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //console.log('HI useFetch');
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL, {
          ...DEFAULT_OPTIONS,
        }).then(response => {
          if (!response.ok) {
            throw new Error('Did not receive expected data');
          }
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
    }, 300);*/
  }, [dependency]);

  return { isLoading, fetchError, items };
};
