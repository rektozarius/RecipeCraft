const APP_ID = import.meta.env.VITE_APP_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_APP_KEY;
import { useEffect } from "react";
import json from "../mock-data/data/Eggplant.json" with { type: "json" };
import handleData from "../utils/handleData";

function useFetch(query) {
  useEffect(() => {

  }, []);
  const ingredient = handleData(json);
  return ingredient;
};

export default useFetch;