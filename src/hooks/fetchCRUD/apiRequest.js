const DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' },
};

export const apiRequest = async (API_URL, options = {}) => {
  //Create , Delete , Update method
  //console.log(' apiRequest');

  try {
    await fetch(API_URL, {
      ...DEFAULT_OPTIONS,
      ...options,
    }).then(response => {
      if (!response.ok) {
        throw new Error('Did not receive expected data');
      }
      return response.json();
    });
  } catch (e) {
    throw new Error(e.message);
  }
};
