import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useMemo, useEffect } from 'react';

const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const usePagesArray = (totalCount, limit, page) => {
  //console.log('usePagesArray');

  const pagesArray = useMemo(() => {
    console.log('pagesArray');

    const result = [];
    const pagesCount = getPageCount(totalCount, limit);

    for (let i = 1; i < pagesCount + 1; i++) {
      result.push(i);
    }

    return result;
  }, [totalCount, limit]);

  if (pagesArray.length > 1) {
    console.log(document.querySelector('.list-btn').target);
  }

  useEffect(() => {
    //console.log(page, pagesArray.length);

    if (pagesArray.length === 1 || page === pagesArray.length) {
      setTimeout(() => {
        Notify.info('You have viewed the entire list.');
      }, 1000);
    }
  }, [pagesArray, page]);

  return pagesArray;
};
