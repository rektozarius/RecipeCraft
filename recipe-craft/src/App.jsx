import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import './App.css';
import Navbar from "./components/Navbar";
import FavoritesPage from "./pages/FavoritesPage";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
};

export default App;
