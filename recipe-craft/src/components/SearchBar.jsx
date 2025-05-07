import { useState } from "react";
import { getCached, setCached } from "../utils/cacheData";
import transformData from "../utils/transformData";
import axios, {isCancel, AxiosError} from 'axios';

const APP_ID = import.meta.env.VITE_APP_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_APP_KEY;

function SearchBar({ onSearch, setError, setLoading }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cachedIngredient = getCached(query);
    if (cachedIngredient) {
      onSearch(cachedIngredient);
      return;
    };

    setLoading(true);
    setError(null)

    try {
      const searchText = query.trim().toLowerCase();
      const body = {
        query: `100 g of ${searchText}`
      };
      const headers = {
        headers: {
          "x-app-id": import.meta.env.VITE_APP_APP_ID,
          "x-app-key": import.meta.env.VITE_APP_APP_KEY,
          "x-remote-user-id": 0
        }
      };

      const response = await axios.post(
        "https://trackapi.nutritionix.com/v2/natural/nutrients"
      , body, headers);
      
      const ingredient = transformData(response.data);
      setCached(query, ingredient);
      onSearch(ingredient);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    };
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-bar">
      <input
        id="0123" // should have id or name attr
        type="text"
        placeholder="Find ingredients..."
        value={query}
        onChange={(e) => {setQuery(e.target.value)}}
        required
      />
      <button
        type="submit"
      >
        Search
      </button>
    </form>    
  </>
  );
};

export default SearchBar;