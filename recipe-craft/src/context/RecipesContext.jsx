import { createContext, useEffect, useState } from "react";

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
    localStorage.setItem("recipes", JSON.stringify(recipes))
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