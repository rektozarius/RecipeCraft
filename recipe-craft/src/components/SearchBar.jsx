import { useState } from "react";
import { getCached, setCached } from "../utils/cacheData";
import fetchData from "../utils/fetchData";
import transformData from "../utils/transformData";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cachedIngredient = getCached(query);
    if (cachedIngredient) {
      onSearch(cachedIngredient);
      return;
    };

    try {
      const response = fetchData(query);
      const ingredient = transformData(response);
      console.log(ingredient) //////////////////
      setCached(query, ingredient);
      onSearch(ingredient);
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        id="0123" // should have id or name attr
        type="text"
        placeholder="Find ingredients..."
        value={query}
        onChange={(e) => {setQuery(e.target.value)}}
      />
      <button
        type="submit"
      >
        Search
      </button>
    </form>    
  </div>
  );
};

export default SearchBar;