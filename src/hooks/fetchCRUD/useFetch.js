import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (API_URL, options) => {
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${API_URL}`);
        setItems(response.data);
        setFetchError(null);
      } catch (e) {
        setFetchError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => fetchItems(), 1300);
  }, [API_URL, options]);

  return { isLoading, fetchError, items };
};
