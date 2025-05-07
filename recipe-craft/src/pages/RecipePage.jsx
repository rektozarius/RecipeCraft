import { useParams } from "react-router";
import useNutrients from "../hooks/useNutrients";
import "./RecipePage.css"
import { useMemo } from "react";
import { getCached } from "../utils/cacheData";

function RecipePage() {
  const { name } = useParams();
  const recipe = useMemo(() => 
    getCached(name)
  , []);
  const nutrients = useNutrients(recipe.ingredients);
  const description = recipe.description.split('\n');

  return (
    <>
      <div className="recipe-page">
        <section className="recipe-main">
          <div className="recipe-info">
            <h2>{recipe.title}</h2>
            <div className="recipe-description">
              {description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>

          <div className="recipe-nutrients">
            <label>Total Nutrients</label>
            {nutrients && (nutrients.map((n, index) => (
              <div className="nutrient" key={index}>
                <p>
                  <span style={{fontWeight: "bold"}}>{n.label}:</span> {n.value.toFixed(2)} {n.unit}
                </p>
              </div>
            )))}
          </div>
        </section>

        <aside className="recipe-ingredients">
          <label>Ingredients</label>
          {recipe.ingredients.map((i, index) => (
            <div className="recipe-ingredients--ingredient-pill" key={index}>
              <p>{i.amount} x {i.measure.qty} {i.measure.measure} {i.food_name}</p>
            </div>
          ))}
        </aside>
      </div>  
    </>
  );
};

export default RecipePage;