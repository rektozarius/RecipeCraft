import { useState } from "react";
import Favorites from "../components/Favorites";
import Ingredient from "../modals/Ingredient";

// Displays favorited ingredients list with ingredient details
function FavoritesPage() {
  const [ingredient, setIngredient] = useState(null);

  return (
    <>
      <div className="favorites-page">
        <Favorites onClick={setIngredient}/>
        {ingredient && (
          <Ingredient 
          ingredient={ingredient}
          onClose={() => (setIngredient(null))}
          isRecipe={false}
          />
        )}
      </div>
    </>
  );
};

export default FavoritesPage;