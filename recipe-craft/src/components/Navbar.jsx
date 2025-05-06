import { Link } from "react-router";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/">Home</Link>
      <Link className="navbar-link" to="/craft">Craft</Link>
      <Link className="navbar-link" to="/recipes">Recipes</Link>
      <Link className="navbar-link" to="/favorites">Favorites</Link>     
    </nav>
  );
};

export default Navbar;