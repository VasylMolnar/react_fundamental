const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalCount, limit) => {
  const n = getPageCount(totalCount, limit);

  const result = [];

  for (let i = 1; i < n + 1; i++) {
    result.push(i);
  }

  return result;
};
