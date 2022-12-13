const fetchItems = async API_URL => {
  const response = await fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error('Did not receive expected data');
    }
    return response.json();
  });

  return response;
};

export default fetchItems;
