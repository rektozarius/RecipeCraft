import { useState } from "react";
import Favorites from "../components/Favorites";
import IngredientDetails from "../components/IngredientDetails";

function FavoritesPage() {
  const [ingredient, setIngredient] = useState(null);

  return (
    <>
      <div className="favorites-page">
        <Favorites onClick={setIngredient}/>
        {ingredient && (
          <IngredientDetails 
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