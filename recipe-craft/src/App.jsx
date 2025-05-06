import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import './App.css';
import Navbar from "./components/Navbar";
import FavoritesPage from "./pages/FavoritesPage";
import CraftRecipePage from "./pages/CraftRecipePage";
import RecipesPage from "./pages/RecipesPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/craft" element={<CraftRecipePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
};

export default App;
