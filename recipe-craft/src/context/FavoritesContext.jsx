import { createContext, useEffect, useState } from "react";
import { setCached } from "../utils/cacheData";

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const cached = localStorage.getItem("favorites");
    return cached ? JSON.parse(cached) : [];
  });

  const addFavorite = (name) => {
    setFavorites((names) => [...names, name]);
  };

  const deleteFavorite = (name) => {
    setFavorites((names) => (names.filter((favoriteName) => favoriteName !== name)));
  };

  const isFavorite = (name) => favorites.includes(name);

  useEffect(() => {
    setCached("favorites", favorites)
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, deleteFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };