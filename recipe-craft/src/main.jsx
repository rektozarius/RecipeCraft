import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import { FavoritesProvider } from './context/FavoritesContext.jsx';
import { RecipesProvider } from './context/RecipesContext.jsx';
import Navbar from './components/Navbar.jsx';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <RecipesProvider>
          <Navbar />
          <App />
        </RecipesProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
);