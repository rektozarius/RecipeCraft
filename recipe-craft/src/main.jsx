import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import './index.css';
import App from './App.jsx';
import { FavoritesProvider } from './context/FavoritesContext.jsx';
import Navbar from './components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <Navbar />
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
);