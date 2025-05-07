function getCached(query) {
  return JSON.parse(localStorage.getItem(query));
};

function setCached(query, data) {
  localStorage.setItem(query, JSON.stringify(data));
};

export { getCached, setCached };