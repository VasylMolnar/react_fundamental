export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

const getPagesArray = lengthBtn => {
  let result = [];

  for (let i = 1; i < lengthBtn + 1; i++) {
    result.push(i);
  }

  return result;
};

export default getPagesArray;
