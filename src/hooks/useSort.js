import { useMemo } from 'react';

export const useSortedPosts = (sort, items) => {
  const sortedPosts = useMemo(() => {
    if (sort === 'id') {
      return [...items].sort((a, b) => a[sort] - b[sort]);
    } else if (sort === 'item') {
      return [...items].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else if (sort === 'checked') {
      return items.filter(el => el.checked === true);
    }

    return items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, items]);

  return sortedPosts;
};

export const useSort = (filter, items) => {
  //console.log('useSort'); code optimization debounce (AddItem.jsx, SearchItem.jsx)
  const sortedPosts = useSortedPosts(filter.sort, items);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(item =>
      item.item.toLowerCase().includes(filter.query.toLowerCase())
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.query, sortedPosts]);

  return sortedAndSearchedPosts;
};
