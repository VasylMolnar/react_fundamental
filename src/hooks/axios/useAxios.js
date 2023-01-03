import { useEffect, useState } from 'react';
import api from '../../api/post';

export const useAxios = (options, setOptions) => {
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      //console.log(options.method);
      try {
        const response = await api[options.method](
          options.url,
          options.body ? JSON.parse(options.body) : null,
          options.headers
        );

        if (options.method === 'get') {
          setItems(response.data);
          setFetchError(null);
        }
      } catch (e) {
        setFetchError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchItems();

      if (options.method !== 'get') {
        setOptions({ ...options, method: 'get', url: `${options.url}` });
      }
    }, 1300);
  }, [options]);

  return { items, fetchError, isLoading };
};
// axios[method](url, JSON.parse(headers), JSON.parse(body))
