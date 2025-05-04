import { useContext, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  const ingredients = favorites.map((id) => 
    (JSON.parse(localStorage.getItem(id)))
  );

  return (
    <>
      <div>
        <ul>
          {ingredients.map((i) => (  
            <li key={i.ndb_no}>
              <div>
                <img src={i.photo.thumb} alt={i.food_name} />
              	<span title={i.food_name}>
		    					{i.food_name}
		    				</span>
		    			</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FavoritesPage;