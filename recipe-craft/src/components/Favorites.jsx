import { useContext} from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import "./Favorites.css"

function Favorites({ onClick }) {
  const { favorites } = useContext(FavoritesContext);

  const ingredients = favorites.map((name) => 
    (JSON.parse(localStorage.getItem(name)))
  );

  return (
    <>
      <div className="favorites-container">
        <ul>
          {ingredients.map((i) => (  
            <li key={i.ndb_no} onClick={() => {onClick(i)}}>
              <div>
                <img src={i.photo.thumb} alt={i.food_name} />
              	<p>
		    					{i.food_name.charAt(0).toUpperCase() + i.food_name.slice(1)}
		    				</p>
		    			</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Favorites;
