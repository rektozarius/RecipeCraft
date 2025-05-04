import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/">Homepage</Link>
      <Link className="navbar-link" to="/favorites">Favorites</Link>
    </nav>
  );
};

export default Navbar;