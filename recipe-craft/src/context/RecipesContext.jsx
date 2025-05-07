import { createContext, useEffect, useState } from "react";
import { setCached } from "../utils/cacheData";

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(() => {
    const cached = localStorage.getItem("recipes");
    return cached ? JSON.parse(cached) : [];
  });

  const addRecipe = (name) => {
    setRecipes((names) => [...names, name]);
  };

  const deleteRecipe = (name) => {
    setRecipes((names) => (names.filter((recipeName) => recipeName !== name)));
  };

  const isRecipe = (name) => recipes.includes(name);

  useEffect(() => {
    setCached("recipes", recipes)
  }, [recipes]);

  return (
    <RecipesContext.Provider
      value={{ recipes, addRecipe, deleteRecipe, isRecipe}}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export { RecipesContext, RecipesProvider};