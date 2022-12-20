import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = () => {
  const API_URL = 'http://localhost:1234/posts/';
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
    fetchItems();
  }, []);

  return { isLoading, fetchError, items };
};
