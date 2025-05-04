import { useState } from "react";
import SearchBar from "../components/SearchBar";
import IngredientDetails from "../components/IngredientDetails";

function HomePage() {
  const [ingredientData, setIngredientData] = useState(null);
  
  return (
    <>
      <SearchBar onSearch={setIngredientData} />
      {ingredientData && (
        <IngredientDetails ingredient={ingredientData} />
      )}
    </>
  );
};

export default HomePage;