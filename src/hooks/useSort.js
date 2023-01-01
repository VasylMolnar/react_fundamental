import { useState, useMemo } from 'react';

export const useSort = (items, searchValue) => {
  console.log('useSort');

  return useMemo(() => {
    console.log('useMemo');
    console.log(items);
    const filteredResults = items.filter(
      post =>
        post.body.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filteredResults;
  }, [items, searchValue]);
};
