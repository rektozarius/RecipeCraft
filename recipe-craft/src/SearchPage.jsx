import { useState } from "react";
import useFetch from "./hooks/useFetch";

function SearchPage() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchPage;