import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import CraftRecipePage from "./pages/CraftRecipePage";
import MyRecipesPage from "./pages/MyRecipesPage";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/craft" element={<CraftRecipePage />} />
        <Route path="/myrecipes" element={<MyRecipesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/myrecipes/:name" element={<RecipePage />} />
      </Routes>
    </>
  );
};

export default App;
