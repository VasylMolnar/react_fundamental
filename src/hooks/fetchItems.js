const fetchItems = async API_URL => {
  return await fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error('Did not receive expected data');
    }
    return response.json();
  });
};

export default fetchItems;
