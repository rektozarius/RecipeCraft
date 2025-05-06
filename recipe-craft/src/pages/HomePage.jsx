import { useState } from "react";
import SearchBar from "../components/SearchBar";
import IngredientDetails from "../components/IngredientDetails";
import { Link } from "react-router";

function HomePage() {
  const [ingredient, setIngredient] = useState(null);
  
  return (
    <>
      <SearchBar onSearch={setIngredient} />
      <div>
        <Link to="/craft">
        <button>
          Craft Recipes
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