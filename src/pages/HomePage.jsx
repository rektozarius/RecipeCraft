import { useState } from "react";
import { Link } from "react-router";
import SearchBar from "../components/SearchBar";
import Ingredient from "../modals/Ingredient";
import ErrorLoadingModal from "../modals/ErrorLoading";
import "./HomePage.css"

// Displays home page
function HomePage() {
  const [ingredient, setIngredient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      <div className="homepage">
        <SearchBar onSearch={setIngredient} setError={setError} setLoading={setLoading}/>
        <Link to="/craft">
        <button className="craft-button">
          Craft Recipe
        </button>
        </Link>
      </div>
      {ingredient && (
        <Ingredient 
        ingredient={ingredient}
        onClose={() => setIngredient(null)}
        isRecipe={false}
        />
      )}
      {error && <ErrorLoadingModal error={error} onClose={() => setError(null)}/>}
      {loading && <ErrorLoadingModal />}
    </>
  );
};

export default HomePage;