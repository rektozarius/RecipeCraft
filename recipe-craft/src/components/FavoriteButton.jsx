import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import regularHeart from "../assets/heart-regular.svg";
import solidHeart from "../assets/heart-solid.svg";

const FavoriteButton = ({ ingredientId }) => {
  const { addFavorite, deleteFavorite, isFavorite } = useContext(FavoritesContext);

  const favoriteToggle = (e) => {
    e.preventDefault();
    if (isFavorite(ingredientId)) {
      deleteFavorite(ingredientId);
    } else {
      addFavorite(ingredientId);
    }
  };

  return (
    <div className="product-image--favorite-container" onClick={favoriteToggle}>
      <img 
        className="product-image--favorite" 
        src={isFavorite(ingredientId) ? solidHeart : regularHeart} 
      />
    </div>
  );
};

export default FavoriteButton;