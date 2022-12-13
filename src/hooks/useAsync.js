import { useCallback, useEffect, useState } from 'react';

export default function useAsync(callback, dependencies = []) {
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const callbackMemoized = useCallback(() => {
    callback()
      .then(setItems)
      .catch(setFetchError)
      .finally(() => setIsLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { items, fetchError, isLoading };
}
