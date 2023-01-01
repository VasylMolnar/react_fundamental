import { useEffect, useState } from 'react';
import api from '../../api/post';

export const useAxios = (url, options) => {
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(options);
    const fetchItems = async () => {
      try {
        const response = await api[options.method](
          url,
          options.body ? JSON.parse(options.body) : null,
          options.headers
        );
        setItems(response.data);
        setFetchError(null);
      } catch (e) {
        setFetchError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => fetchItems(), 1300);
  }, [url, options]);

  return { items, fetchError, isLoading };
};
// axios[method](url, JSON.parse(headers), JSON.parse(body))
