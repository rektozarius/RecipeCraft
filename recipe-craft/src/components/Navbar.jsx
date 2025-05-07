import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/">Home</Link>
      <Link className="navbar-link" to="/craft">Craft Recipe</Link>
      <Link className="navbar-link" to="/myrecipes">My Recipes</Link>
      <Link className="navbar-link" to="/favorites">Favorites</Link>     
    </nav>
  );
};

export default Navbar;