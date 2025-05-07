import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "../components/SearchBar";
import Ingredient from "../modals/Ingredient";
import Favorites from "../components/Favorites";
import ErrorLoadingModal from "../modals/ErrorLoading";
import { RecipesContext } from "../context/RecipesContext";
import useNutrients from "../hooks/useNutrients";
import { getCached, setCached } from "../utils/cacheData";
import "./CraftRecipePage.css";

// Display craft recipe page
function CraftRecipePage() {
  const { addRecipe, isRecipe } = useContext(RecipesContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ingredient, setIngredient] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const nutrients = useNutrients(ingredients);
  const navigate = useNavigate();

  // handles create recipe form submit
  // checks for name errors
  // caches recipe and redirects to recipe page
  const handleRecipe = (e) => {
    e.preventDefault();
    const name = `${title.trim().replace(" ", "_")}`;
    if (isRecipe(name)) {
      setError({
        code: "Recipe Error",
        message: "Recipe already exists!",
        response: {data:{message: "Try another name"}}
      });
      return;
    } else if (getCached(name)) {
      setError({
        code: "Recipe Error",
        message: "You cannot enter an ingredient as the recipe name!",
        response: {data:{message: "Try another name"}}
      });
      return;
    };
    const newRecipe = {
      name: name,
      title: title,
      description: description,
      ingredients: ingredients,
    };

    setCached(name, newRecipe);
    addRecipe(name);
    navigate(`/myrecipes/${name}`);
  };

  // Sets ingredient to array when add button is clicked inside ingredient modal
  const handleIngredients = (n, a, m) => {
    if (n) {
      const nextIngredient = {
        food_name: ingredient.food_name,
        photo: ingredient.photo,
        amount: a,
        measure: m,
        nutrients: n
      };
      setIngredients([...ingredients, nextIngredient]);
    };
    setIngredient(null);
  };

  return (
    <>
      <div className="craft-recipe">
        <aside className="craft-recipe--favorites">
          <label>Favorites</label>
          <Favorites isRecipe={true} onClick={setIngredient}/>
        </aside>
  
        <main className="craft-recipe--main">
          <form onSubmit={(e) => handleRecipe(e)} className="craft-recipe--form">
            <h2>Craft a New Recipe</h2>
  
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
  
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            
            <button type="submit">Create Recipe</button>
          </form>
  
          <section className="craft-recipe--nutrients">
            <label>Total Nutrients</label>
            {nutrients && (nutrients.map((n, index) => (
              <div key={index}>
                <p>
                  <span style={{fontWeight: "bold"}}>{n.label}:</span> {n.value.toFixed(2)} {n.unit}
                </p>
              </div>
            )))}
          </section>
        </main>
  
        <aside className="craft-recipe--ingredients-container">
          <SearchBar onSearch={setIngredient} setError={setError} setLoading={setLoading}/>
          {ingredient && (
            <Ingredient 
            ingredient={ingredient}
            onClose={handleIngredients}
            isRecipe={true}
            />
          )}
  
          <div className="craft-recipe--ingredients">
            <label>Ingredients</label>
            {ingredients.map((i, index) => (
              <div className="ingredient-pill" key={index}>
                <p>{i.amount} x {i.measure.qty} {i.measure.measure} {i.food_name}</p>
                <button onClick={() => {
                  setIngredients(prevIngs => prevIngs.filter((_, i_index) => i_index !== index));
                }}>
                  -
                </button>
              </div>
            ))}
          </div>
        </aside>
      </div>
      {error && <ErrorLoadingModal error={error} onClose={() => setError(null)}/>}
      {loading && <ErrorLoadingModal />}         
    </>
  );
};

export default CraftRecipePage;