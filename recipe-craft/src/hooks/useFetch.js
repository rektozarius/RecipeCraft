const APP_ID = import.meta.env.VITE_APP_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_APP_KEY;

function useFetch() {
  console.log(APP_ID, APP_KEY);
};

export default useFetch;