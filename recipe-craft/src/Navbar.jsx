import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/">Search</Link>
    </nav>
  );
};

export default Navbar;