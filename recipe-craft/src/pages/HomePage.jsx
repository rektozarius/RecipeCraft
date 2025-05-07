import { useState } from "react";
import SearchBar from "../components/SearchBar";
import IngredientDetails from "../components/IngredientDetails";
import { Link } from "react-router";
import "./HomePage.css"

function HomePage() {
  const [ingredient, setIngredient] = useState(null);
  
  return (
    <>
      <div className="homepage">
        <SearchBar onSearch={setIngredient} />
        <Link to="/craft">
        <button className="craft-button">
          Craft Recipe
        </button>
        </Link>
      </div>
      {ingredient && (
        <IngredientDetails 
        ingredient={ingredient}
        onClose={() => setIngredient(null)}
        isRecipe={false}
        />
      )}
    </>
  );
};

export default HomePage;