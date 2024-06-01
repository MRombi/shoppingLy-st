import { Link } from "react-router-dom";
import "./componentsCSS/Navbar.css";
import Budget from "./Budget";

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

        <Budget />
      </ul>
    </nav>
  );
};

export default Navbar;
