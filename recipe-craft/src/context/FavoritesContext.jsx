import { createContext, useState } from "react";

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (id) => {
    setFavorites((ids) => [...ids, id]);
  };

  const deleteFavorite = (id) => {
    setFavorites((ids) => (ids.filter((favoriteId) => favoriteId !== id)));
  };

  const isFavorite = (id) => favorites.includes(id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, deleteFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };