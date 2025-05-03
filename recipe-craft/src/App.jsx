import { Routes, Route } from "react-router";
import SearchPage from "./SearchPage";
import './App.css';
import Navbar from "./Navbar";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </>
  );
};

export default App;
