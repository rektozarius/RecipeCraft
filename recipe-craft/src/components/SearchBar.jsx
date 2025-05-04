import { useState } from "react";
import useFetch from "../hooks/useFetch";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const data = useFetch(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(data);
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