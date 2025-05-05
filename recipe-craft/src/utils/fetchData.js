const APP_ID = import.meta.env.VITE_APP_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_APP_KEY;
import json from "../mock-data/data/Eggplant.json" with { type: "json" };

function fetchData(query) {
  return json;
};

export default fetchData;