import { useState } from "react";
import Favorites from "../components/Favorites";
import IngredientDetails from "../components/IngredientDetails";

function FavoritesPage() {
  const [ingredient, setIngredient] = useState(null);

  return (
    <>
      <Favorites onClick={setIngredient}/>
      {ingredient && (
        <IngredientDetails 
        ingredient={ingredient}
        onClose={() => (setIngredient(null))}
        isRecipe={false}
        />
      )}
    </>
  );
};

export default FavoritesPage;