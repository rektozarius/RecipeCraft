import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import "./MyRecipesPage.css"
import { useNavigate } from "react-router";

function MyRecipesPage() {
  const { recipes, deleteRecipe } = useContext(RecipesContext);

  const myRecipes = recipes.map((name) => 
    (JSON.parse(localStorage.getItem(name)))
  );

  const navigate = useNavigate();

  return (
    <>
      <div className="my-recipes">
        <ul>
          {myRecipes.map((r, index) => (  
            <li key={index} onClick={() => (navigate(`/myrecipes/${r.name}`))}>
                <div className="recipe-pill">
                	<span>
		    			  		{r.title}
		    			  	</span>
                  <span>
		    			  		<button onClick={(e) => {
                      e.stopPropagation();
                      deleteRecipe(r.name);
                      localStorage.removeItem(r.name);
                      }}>-</button>
		    			  	</span>
		    			  </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyRecipesPage;