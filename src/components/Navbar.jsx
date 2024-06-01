import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-links">
        <Link to="/">
          <li>Supermarket</li>
        </Link>
        <Link to="/shopping-list">
          <li>Shopping List</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
