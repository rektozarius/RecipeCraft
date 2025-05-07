import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import regularHeart from "../assets/heart-regular.svg";
import solidHeart from "../assets/heart-solid.svg";

const FavoriteButton = ({ name }) => {
  const { addFavorite, deleteFavorite, isFavorite } = useContext(FavoritesContext);

  const favoriteToggle = (e) => {
    e.preventDefault();
    if (isFavorite(name)) {
      deleteFavorite(name);
    } else {
      addFavorite(name);
    }
  };

  return (
    <div className="title-container--favorite" onClick={favoriteToggle}>
      <img 
        src={isFavorite(name) ? solidHeart : regularHeart} 
      />
    </div>
  );
};

export default FavoriteButton;