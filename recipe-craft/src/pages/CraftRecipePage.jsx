import { useState } from "react";
import CraftRecipe from "../components/CraftRecipe";
import SearchBar from "../components/SearchBar";
import IngredientDetails from "../components/IngredientDetails";
import Favorites from "../components/Favorites";

function CraftRecipePage() {
  const [recipe, setRecipe] = useState();
  const [ingredient, setIngredient] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = () => {

  };

  const handleIngredient = (n, a, m) => {
    if (n) {
      const nextIngredient = {
        food_name: ingredient.food_name,
        photo: ingredient.photo,
        amount: a,
        measure: m,
        nutrients: n
      };
      setIngredients([...ingredients, nextIngredient])
    };
    setIngredient(null);
  };

  return (
    <>
      <CraftRecipe onSubmit={handleSubmit} />
      <SearchBar onSearch={setIngredient} />
      {ingredient && (
        <IngredientDetails 
        ingredient={ingredient}
        onClose={handleIngredient}
        isRecipe={true}
        />
      )}
      <div>
        <label>Ingredients</label>
        {ingredients.map((i, index) => (
          <div key={index}>
            <img src={i.photo.thumb} alt="i.food_name" />
            <p>{i.amount} x {i.measure.qty} {i.measure.measure} ({i.measure.serving_weight}g) {i.food_name}</p>
          </div>
        ))}
      </div>
      <div>
        <label>Favorites</label>
        <Favorites onClick={setIngredient}/>
      </div>      
    </>
  );
};

export default CraftRecipePage;